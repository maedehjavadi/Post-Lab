import React from "react";
import "emoji-mart/css/emoji-mart.css";
import { Box } from "@mui/system";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { EmojiData, Picker } from "emoji-mart";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

function EmojiPicker() {
  const [showPicker, setShowPicker] = useState<string>();
  const [clickButton, setClickButton] = useState(false);
  const [multiEmoji, setMultiEmoji] = useState<any[]>([]);

  function showEmoji() {
    setClickButton(!clickButton);
  }
  function concat() {
    setMultiEmoji([showPicker]);
  }

  return (
    <>
      <TextField
        onChange={(e) => {
          setShowPicker(e.target.value);
        }}
        value={showPicker}
      ></TextField>
      <Box>
        <Button onClick={showEmoji} variant="contained" sx={{ mt: 2 }}>
          <EmojiEmotionsIcon />
        </Button>
        <Box id="emojiBox" sx={{ display: clickButton ? "" : "none" }}>
          <Picker
            native={true}
            onSelect={(emoji: any) => setShowPicker(showPicker + emoji.native)}
          />
        </Box>
      </Box>
    </>
  );
}

export default EmojiPicker;
