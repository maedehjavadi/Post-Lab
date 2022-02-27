import { route } from "next/dist/server/router";
import React from "react";

export default function UpdatePost() {
//   const router = useRouter();
  const id = router.params.id;
  // const currentPost = select the post with the same id captured from the route

function DoUpdate(){
    // find the object with the id we capturd from the route
    
    //{ delete the old one
    // add the new one updated}
    //  else{ swap the suted properties with the old one} // this is much much better
}

  return (
    <div>
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
            sx={{
              justifyContent: "center",
              textAlign: "center",
              m: "20px auto",
            }}
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
            sx={{
              justifyContent: "center",
              textAlign: "center",
              m: "20px auto",
            }}
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
        <Button onClick={DoUpdate}>Update Post</Button>
      </Container>
    </div>
  );
}
