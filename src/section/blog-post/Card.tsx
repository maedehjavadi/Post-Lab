import {
  Button,
  Grid,
  Box,
  Avatar,
  Typography,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import { deleteForm } from "../../redux/slices/post-slice";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
// import Link from "@mui/material/Link";
import DialogAction from "@mui/material/DialogActions";
import Link from "@mui/material/Link";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { likePost, dislikePost } from "../../redux/slices/post-slice";

function Card(props: any) {
  const [likeColor, setLikeColor] = useState(false);
  const { id, comments } = props;
  const { query } = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  function deleteHandler() {
    dispatch(deleteForm(props.id));
    console.log(props.id);
    setOpen(false);
  }

  function likeHandler() {
    if (!likeColor) {
      dispatch(likePost(id));
      setLikeColor(!likeColor);
      console.log("like");
    } else {
      dispatch(dislikePost(id));
      setLikeColor(!likeColor);
      console.log("DisLike");
    }
  }

  return (
    <>
      <Grid item md={4} sx={{ borderRadius: 2 }}>
        <Box
          sx={{
            p: 2,
            border: "1px solid #949aa452",
            backgroundColor: "#03a9f414",
            borderRadius: 5,
            boxShadow: "0px 5px 10px 1px #0000004f",
          }}
        >
          <Box
            sx={{
              display: "flex",
              p: 2,
              borderBottom: "1px solid #7d868b4d",
            }}
          >
            <Avatar src={props.avatarImg}></Avatar>
            <Typography sx={{ mt: 1, ml: 2, color: "#000" }}>
              {props.createdBy}
            </Typography>
          </Box>
          <Box
            component="img"
            src={props.images}
            sx={{ width: "100%", mb: 2 }}
          ></Box>
          <Typography
            sx={{
              fontSize: "15px",
              height: "160px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              borderBottom: "1px solid #7d868b4d",
              p: 2,
              color: "#000",
              boxOrient: "vertical",
              lineClamp: 3,
            }}
          >
            {props.body}
          </Typography>
          <Box sx={{ px: 0, display: "flex", mt: 2, mb: 2 }}>
            <Box onClick={likeHandler}>
              <FavoriteIcon
                sx={{ mr: 2, color: likeColor ? "#dc2626" : "#000" }}
              />
            </Box>
            <Box sx={{ display: "flex" }}>
              <NextLink href={`/comment/${id}`}>
                <CommentIcon sx={{ color: "#000" }} />
              </NextLink>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width:30,
                  height:30,
                  borderRadius:15,
                  backgroundColor:'#ddd',
                  ml:1
                }}
              >
                <Typography variant="body1" sx={{ color: "#000",}}>
                  {props.comments.length}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Dialog open={open}>
            <DialogTitle>Are you Sure ?</DialogTitle>

            <DialogAction>
              <Button
                onClick={() => {
                  setOpen(false);
                }}
              >
                Disagree
              </Button>
              <Button onClick={deleteHandler} autoFocus>
                Agree
              </Button>
            </DialogAction>
          </Dialog>
          <Button
            sx={{ fontWeight: 600, textTransform: "capitalize" }}
            color="warning"
            onClick={() => {
              setOpen(true);
            }}
          >
            Delete
          </Button>

          <NextLink href={`/createPost?id=${id}`}>
            <Button
              variant="contained"
              color="success"
              sx={{ height: "20px", textTransform: "capitalize" }}
            >
              edit
            </Button>
          </NextLink>
        </Box>
      </Grid>
    </>
  );
}

export default Card;
