import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import NextLink from "next/link";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addUser } from "../../redux/slices/users-slice";
import { useState } from "react";

type UserSubmitForm = {
  firstName: string;
  lastName: string;
  password: string;
  userName: string;
};
export default function SignUp() {
  const [errorMassage, setErrorMassage] = useState("");
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.users.users);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("FirstName Is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    lastName: Yup.string()
      .required("LastName Is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    userName: Yup.string().required("required"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data: UserSubmitForm) => {
    if (user.find((item) => item.userName === data.userName)) {
      setErrorMassage("userName is not valid");
    } else {
      dispatch(
        addUser({
          id: Math.floor(Math.random() * 1000),
          firstName: data.firstName,
          lastName: data.lastName,
          userName: data.userName,
          password: data.password,
        })
      );
    }

    // console.log(data);
    // JSON.stringify(data, null, 2);
  };

  return (
    <Box sx={{ mt: 2 ,ml:2}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
          <Box>
            <TextField
              label="FirstName"
              type="text"
              {...register("firstName")}
            />
            <Box sx={{ color: "red" }}>{errors.firstName?.message}</Box>
          </Box>
          <Box>
            <TextField label="lastName" type="text" {...register("lastName")} />
            <Box sx={{ color: "red" }}>{errors.lastName?.message}</Box>
          </Box>
          <Box>
            <TextField label="UserName" type="text" {...register("userName")} />
            <Box sx={{ color: "red" }}>{errors.userName?.message}</Box>
            <Typography sx={{color:'red'}}>{errorMassage}</Typography>
          </Box>
          <Box>
            <TextField label="password" type="text" {...register("password")} />
            <Box sx={{ color: "red" }}>{errors.password?.message}</Box>
          </Box>
        </Box>

        <Box sx={{mt:2}}>
          <Button variant="contained" type="submit" sx={{ textTransform: "none" }}>
            Register
          </Button>
          <NextLink href="/">
            <Button
              type="button"
              onClick={() => reset()}
              sx={{ textTransform: "none" }}
            >
              SignIn
            </Button>
          </NextLink>
        </Box>
      </form>
    </Box>
  );
}
