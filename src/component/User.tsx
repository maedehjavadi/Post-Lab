import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

function User() {
  const user = useAppSelector((state) => state.post.currentUser);
  console.log(user);
  // const dispatch = useDispatch()
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
            p: 2,
            borderBottomWidth: 1,
            borderBottomStyle: "solid",
            borderBottomColor: "#f0f0f0",
          }}
        >
          <Avatar sx={{ boxShadow: "0px 0px 20px 1px #000" }} />
          <Typography sx={{ textTransform: "capitalize" }}>
            {user.firstName} {user.lastName}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default User;
