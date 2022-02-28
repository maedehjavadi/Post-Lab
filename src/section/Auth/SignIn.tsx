import * as Yup from "yup";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { catchUserName } from "../../redux/slices/post-slice";
import { useEffect } from "react";
import { useRouter } from "next/router";

type UserSubmitForm = {
  username: string;
  password: string;
};

function SignIn() {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.post.currentUser);
  const ErrorMessage = useAppSelector((state) => state.post.ErrorMessage);
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data: UserSubmitForm) => {
    // console.log(JSON.stringify(data, null, 2));
    // const userName= data.username
    dispatch(catchUserName(data));
  };
  useEffect(() => {
    if (currentUser) {
      router.push("/post/list");
    }
  }, [currentUser]);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          m: 4,
          p: 6,
          border: "1px solid #949aa452",
          width: "30%",
          backgroundColor: "#03a9f414",
          borderRadius: 5,
          boxShadow: "0px 5px 10px 1px #0000004f",
        }}
      >
        <p>{ErrorMessage}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h4" sx={{ textShadow: "0px 15px #0000000a" }}>
              Signin
            </Typography>

            <TextField
              fullWidth
              type="text"
              label="UserName"
              {...register("username")}
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
            />
            <Box sx={{ color: "red", p: 1 }}>{errors.username?.message}</Box>
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              type="password"
              label="password"
              {...register("password")}
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
            />
            <Box sx={{ color: "red", p: 1 }}>{errors.password?.message}</Box>
          </Box>

          <Box>
            <Button
              variant="contained"
              type="submit"
              sx={{ textTransform: "none" }}
            >
              Log in
            </Button>
            <NextLink href="/signUpPage">
              <Button type="button" sx={{ textTransform: "none" }}>
                Sign Up
              </Button>
            </NextLink>
            {/* <Button type="button" onClick={() => reset()}>
            Reset
          </Button> */}
          </Box>
        </form>
      </Box>
    </Box>
  );
}
export default SignIn;
