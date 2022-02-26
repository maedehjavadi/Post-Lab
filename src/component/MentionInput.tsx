import React, { useState } from "react";
import { MentionsInput, Mention } from "react-mentions";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import { LocalConvenienceStoreOutlined } from "@mui/icons-material";
import Box from "@mui/material/Box";

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

// type suggestion = {
//   id: string;
//   user: string;
// };
function PostMentionInput() {
  //   const [suggestions, setSuggestions] = useState<suggestion>();
  const [text, setText] = useState<string>();
  const handleChange = (e: any) => {
    setText(e.target.value);
  };
  return (
    <Box sx={{ m: "0 auto !important" }}>
      <Box sx={{ m: "0 auto !important" }}>
        <MentionsInput
          value={text}
          onChange={handleChange}
          style={{
            height: "50vh",
            borderColor: "#edededd4 !important",
            backgroundColor: "#edededd4 ",
            borderRadius: "15px"
          }}
        >
          <Mention
            trigger="@"
            data={users}
            markup="@@@____id__^^^____display__@@@^^^"
            style={{ backgroundColor: "#d1c4e9", padding: "8px" }}
          />
          <Mention
            trigger="#"
            data={tags}
            markup="$$$____id__~~~____display__$$$~~~"
            style={{ backgroundColor: "#d1c4e9", padding: "8px" }}
          />
        </MentionsInput>
      </Box>
    </Box>
  );
}

export default PostMentionInput;
