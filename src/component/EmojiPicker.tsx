import React, { MouseEvent } from "react";
import "emoji-mart/css/emoji-mart.css";
import { Box } from "@mui/system";
import { Button, Popover, TextField } from "@mui/material";
import { useState } from "react";
import { EmojiData, Picker } from "emoji-mart";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";


function EmojiPicker(props) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
   
  };

  const open = Boolean(anchorEl);




  const [showPicker, setShowPicker] = useState<string>();
  return (
    <>
        <Button onClick={handleClick} variant="text" >
          <EmojiEmotionsIcon />
        </Button>
      
        <Popover
          open={!!anchorEl}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Picker
            native={true}
            onSelect={(emoji: any) => props.setText(props.text + emoji.native) }
          />
        </Popover>
    </>
  );
}

export default EmojiPicker;
