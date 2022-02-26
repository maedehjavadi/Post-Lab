import React from "react";
import Button from "@mui/material/Button";
import { FormEvent, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import DeleteIcon from "@mui/icons-material/Delete";

export default function PostGallery(props) {
  // const [image, setImage] = useState<string[]>([]);

  function deleteFile(e: any) {
    const s = props.image.filter((item, index) => index !== e);
    props.setImage(s);
  }

  // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setImage([
  //     ...image,
  //     URL.createObjectURL(event?.target?.files?.[0] as any),
  //   ]);
  //   console.log(image);
  // };

  return (
    <>
      {/* <Button variant="contained" component="label" sx={{ m: 2 }}>
        Upload File
        <input type="file" hidden onChange={handleImageChange} />
      </Button> */}

      <Box sx={{mt:2}}>
        <Grid container spacing={2}>
          {props.image.map((item, index) => {
            return (
              <Grid item xs={6}>
                <Box key={item} sx={{ position: "relative" }}>
                  <Box
                    sx={{
                      width: "100% !important",
                      height: "350px !important",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                    component="img"
                    src={item}
                    alt=""
                  />
                  <Button
                    sx={{
                      position: "absolute",
                      top: "10px",
                      right: "5px",
                    }}
                    type="button"
                    onClick={() => deleteFile(index)}
                  >
                    <DeleteIcon
                      sx={{
                        color: "#000",
                        fontSize: "30px",
                        background: "antiquewhite",
                        borderRadius: "5px",
                      }}
                    />
                  </Button>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
