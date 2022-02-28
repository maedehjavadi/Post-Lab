import { Box, Button, Grid } from "@mui/material";
import Card from "./Card";
import React, { useEffect } from "react";
import { useState } from "react";
import User from "../../component/User";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addForm } from "../../redux/slices/post-slice";

import AddBoxIcon from "@mui/icons-material/AddBox";
import Link from "@mui/material/Link";
import NextLink from "next/link";

function CardList(props: any) {
  const dispatch = useAppDispatch();
  const newCard = useAppSelector((state) => state.post.posts);
  const [cardData, setCardData] = useState<any[]>([]);
  const [pagination, setPagination] = useState<any>(3);
  const [clickButton, setClickButton] = useState(false);
  const slice = newCard.slice(0, pagination);

  useEffect(() => {
    setCardData(newCard);
  }, []);

  let count = cardData.length;

  const loadMore = () => {
    setPagination(pagination + 3);
    setClickButton(clickButton);
  };

  return (
    <Box>
      <Box
        sx={{
          ml: 4,
          mt: 2,
          mb:5,
          display: "flex",
          gap: 2,
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <NextLink href="/createPost">
          <Link>
            <AddBoxIcon
              fontSize="large"
              sx={{
                color: "#1a7fe5",
                mt: 2,
                cursor: "pointer",
                "&:hover": { color: "#1f5387" },
              }}
            />
          </Link>
        </NextLink>
        <User />
      
      </Box>
      <Box sx={{m:2}}>
      <Grid container spacing={2}>
        {slice.map((item: any) => (
          <Card
            key={item}
            id={item.id}
            body={item.body}
            hashtag={item.hashtag}
            mentsions={item.mentsions}
            datetime={item.datetime}
            createdBy={item.createdBy}
            images={item.images}
            avatarImg={item.avatarImg}
            comments={item.comments}
          />
        ))}
      </Grid>
      <Button
          onClick={() => loadMore()}
          sx={{ display: pagination >= count ? "none" : "" }}
        >
          Load More...
        </Button>
      </Box>
    </Box>
  );
}

export default CardList;
