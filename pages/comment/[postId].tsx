import React from "react";
import { useRouter } from "next/router";
import { SubmitHandler } from "react-hook-form";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../src/redux/hooks";
import { getPost, addComment } from "../../src/redux/slices/post-slice";
import { AnyArray, iteratorSymbol } from "immer/dist/internal";
import Post from "../../src/section/blog-post/Post";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { ResetTvRounded } from "@mui/icons-material";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import Container from "@mui/material/Container";


type Inputs = {
  example: string;
  exampleRequired: string;
};
type UserSubmitForm = {
  name: string;
};

export default function PostComment(props: any) {
  const [isDisabled, setIsDisabled] = useState(false);
  const commentPost = useAppSelector((state) => state.post.post);
  const userId = useAppSelector((state) => state.post.currentUser.id);

  const router = useRouter();
  const id = router.query.postId;
  const dispatch = useAppDispatch();
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("You should enter a cooment for submit")
      .max(300, "Comment must not exceed 300 characters"),
  });

  useEffect(() => {
    if (id) {
      dispatch(getPost(parseInt(id as string)));
    }
  }, [id]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
    mode: "onChange",
  });

  // const {
  //   register,
  //   watch,
  //   formState: { errors },
  //   handleSubmit,
  //   reset
  // } = useForm();

  const onSubmit = (data: any) => {
    const postData = JSON.parse(JSON.stringify(commentPost));
    postData.comments.push({
      body: data.name,
      userId,
      date: new Date(),
    });

    dispatch(addComment(postData));
    setTimeout(() => reset(), 1);
  };

  console.log(commentPost?.comments);

  return (
    <Container maxWidth="lg" sx={{ p: 4, m: "0 auto" }}>
    <Button onClick={() => router.back()} variant="contained"><KeyboardBackspaceOutlinedIcon /></Button>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Comment
          </Typography>
          <TextField
            sx={{ width: "500px" }}
            type="text"
            {...register("name", { required: true, maxLength: 100 })}
          />
          <Box>{errors.name ? "is-invalid" : ""}</Box>

          <Button
            disabled={!isValid}
            type="submit"
            variant="contained"
            sx={{ ml: 2, mt: 1 }}
          >
            Submit
          </Button>
        </form>
      </Box>

      <Box
        sx={{
          margin: "20px auto",
          textAlign: "center",
        }}
      >
        {JSON.parse(JSON.stringify(commentPost?.comments || []))
          ?.reverse()
          .map((item, i) => (
            <Box
              key={i}
              sx={{
                display: "flex",
                textAlign: "center",
                margin: "0 auto",
                justifyContent: "space-between",
                width: "80%",
              }}
            >
              <Typography>{item.body}</Typography>

              <Typography>{item.date?.toLocaleString()}</Typography>
            </Box>

            // <Typography>{item.date}</Typography>
          ))}
      </Box>
  </Container>
  );
}
