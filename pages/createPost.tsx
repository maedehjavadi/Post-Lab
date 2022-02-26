import React, { ReactNode, useRef } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import User from "../src/component/User";
import PostMentionInput from "../src/component/MentionInput";
import Box from "@mui/material/Box";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TagIcon from "@mui/icons-material/Tag";
import Button from "@mui/material/Button";
import ImageIcon from "@mui/icons-material/Image";
import { MentionsInput, Mention } from "react-mentions";
import { useState } from "react";
import { MouseEvent } from "react";
import "emoji-mart/css/emoji-mart.css";
import { Popover, TextField } from "@mui/material";
import EmojiPicker from "../src/component/EmojiPicker";
import PostGallery from "../src/component/PostGallery";
import {useAppDispatch , useAppSelector} from '../src/redux/hooks';
import { addForm } from '../src/redux/slices/counter-slice';
import {useRouter} from "next/router"




const users = [
  {
    id: "1",
    display: "Farshad",
  },
  {
    id: "2",
    display: "Farzad",
  },
  {
    id: "3",
    display: "Farhad",
  },
];
const tags = [
  {
    id: "1",
    display: "React",
  },
  {
    id: "2",
    display: "Node.js",
  },
  {
    id: "3",
    display: ".Net",
  },
];

// interface inputValueType {
//   text: any
//   emoji: any
// }

function createPost() {
  const dispatch = useAppDispatch();
  const router = useRouter()
  const [text, setText] = useState<string>("");
  const [image, setImage] = useState<string[]>([]);

// add form to list 
function AddFormToList() {
  const mentions = text.split(/(?<=\^\^\^\__)(.*?)(?=\@\@\@\^\^\^)/).filter(item => !item.includes('@')).toString();
  const hashtag = text.split(/(?<=\~\~\~\_\_)(.*?)(?=\$\$\$\~\~\~)/).filter(item => !item.includes('~')).toString();
  text.replace(/(?<=\~\~\~\_\_)(?=\$\$\$\~\~\~)/,'')
  dispatch(addForm(
    { 
      id:Math.floor(Math.random() * 1000),
      body: text,
      hashtag:hashtag,
      mentsions:mentions,
      datetime:"2018-12-10T13:49:51.141Z",
      createdBy:"student1",
      images:image,
      avatarImg:['https://zone-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg'],
      },
  ))
  router.push('/')
}




  // ------------------------------------------------
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage([...image, URL.createObjectURL(event?.target?.files?.[0] as any)]);
    console.log(image);
  };

  const open = Boolean(anchorEl);

  // const [inputValue, setInputValue] = useState<inputValueType>({})
  // const [showPicker, setShowPicker] = useState<string>();
  const handleChange = (e: any) => {
    setText(e.target.value);
    
  };

  return (
    <Container maxWidth="lg" sx={{ p: 4, m: "0 auto" }}>
      <Grid container>
        <Grid
          item
          lg={8}
          sx={{ justifyContent: "center", textAlign: "center", m: "0 auto" }}
        >
          <User></User>
        </Grid>
        <Grid
          item
          lg={8}
          sx={{ justifyContent: "center", textAlign: "center", m: "20px auto" }}
        >
          <Box sx={{ m: "0 auto !important" }}>
            <Box sx={{ m: "0 auto !important" }}>
              <MentionsInput
                inputRef={inputRef}
                value={text}
                onChange={handleChange}
                style={{
                  height: "50vh",
                  borderColor: "#edededd4 !important",
                  backgroundColor: "#edededd4 ",
                  borderRadius: "15px",
                }}
              >
                <Mention
                  trigger="@"
                  data={users}
                  markup="@@@____id__^^^____display__@@@^^^"
                  style={{ backgroundColor: "#d1c4e9" }}
                />
                <Mention
                  trigger="#"
                  data={tags}
                  markup="$$$____id__~~~____display__$$$~~~"
                  style={{ backgroundColor: "#d1c4e9" }}
                />
              </MentionsInput>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          lg={8}
          sx={{ justifyContent: "center", textAlign: "center", m: "20px auto" }}
        >
          <Box
            sx={{
              backgroundColor: "#f0f0f0",
              display: "flex",
              justifyContent: "start",
              p: 1,
              borderRadius: "10px",
              alignItems: "center",
            }}
          >
            {/* <EmojiPicker ShowPicker={setShowPicker} Picker={showPicker} /> */}
            <EmojiPicker setText={setText} text={text} />

            <Button variant="text" component="label" sx={{ m: 2 }}>
              <ImageIcon />
              <input type="file" hidden onChange={handleImageChange} />
            </Button>

            {/* <Button>
              <ImageIcon />
            </Button> */}

            <Button
              onClick={() => {
                setText(text + "@");
                if (inputRef) inputRef.current?.focus();
              }}
            >
              <AlternateEmailIcon />
            </Button>
            <Button
              onClick={() => {
                setText(text + "#");
                if (inputRef) inputRef.current?.focus();
              }}
            >
              <TagIcon />
            </Button>
          </Box>

          <PostGallery image={image} setImage={setImage} />
        </Grid>
      </Grid>
      <Button onClick={AddFormToList}>Add Post</Button>
    </Container>
  );
}

export default createPost;
