import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import {useAppDispatch , useAppSelector} from '../redux/hooks';



function User() {



  const user =useAppSelector(state => state.counter.value);

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
          <Avatar
            src={user.avatarImg}
            sx={{ boxShadow: "0px 0px 20px 1px #000" }}
          />
          <Typography sx={{ textTransform: "capitalize" }}>
            {user.fullName}
          </Typography>
        </Box>
        {/* <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Box
            component="button"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 30,
              height: 30,
              borderRadius: 5,
              border: "none",
              cursor: "pointer",
              mt: 1,
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: "#d8d8d68c",
              },
            }}
          >
            <EditIcon />
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", p: 1 }}>
          <Typography>{user.body}</Typography>
        </Box> */}
      </Box>
    </Box>
  );
}

export default User;
