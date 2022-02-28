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
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { deleteForm, sendIdToStore } from "../../redux/slices/counter-slice";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
// import Link from "@mui/material/Link";
import DialogAction from "@mui/material/DialogActions";
import NextLink from "next/link";

function Card(props: any) {
  const { id, comments } = props;
  const [open, setOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  function deleteHandler() {
    dispatch(deleteForm(props.id));
    console.log(props.id);
    setOpen(false);
  }
  function sendId() {
    dispatch(sendIdToStore(props.id));
  }

  return (
    <>
      <Grid item md={4} sx={{ borderRadius: 2 }}>
        <Box sx={{ backgroundColor: "#999" }}>
          <Box
            sx={{
              display: "flex",
              p: 2,
              borderBottom: "1px solid #000",
            }}
          >
            <Avatar src={props.avatarImg}></Avatar>
            <Typography sx={{ mt: 1, ml: 2, color: "#fff" }}>
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
              borderBottom: "1px solid #000",
              p: 2,
              color: "#fff",
              boxOrient: "vertical",
              lineClamp: 3,
            }}
          >
            {props.body}
          </Typography>
          <Box sx={{ p: 2 }}>
            <FavoriteIcon sx={{ mr: 2, color: "#fff" }} />
            <NextLink href={`comment/${id}`} onClick={sendId}>
              <CommentIcon sx={{ color: "#fff" }} />
            </NextLink>
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
            onClick={() => {
              setOpen(true);
            }}
          >
            Delete
          </Button>
          <NextLink href={`post/${id}`}>
            <Button
              onClick={() => {
                // setOpen(true);
              }}
            >
              Edit
            </Button>
          </NextLink>
        </Box>
      </Grid>
    </>
  );
}

export default Card;
