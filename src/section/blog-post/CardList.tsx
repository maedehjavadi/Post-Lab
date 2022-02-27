import { Button, Grid } from "@mui/material";
import Card from "./Card";
import React, { useEffect } from "react";
import { useState } from "react";

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
    <>
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
      <NextLink href="/createPost">
        <Link>
          <AddBoxIcon />
        </Link>
      </NextLink>
      <Button
        onClick={() => loadMore()}
        sx={{ display: pagination >= count ? "none" : "" }}
      >
        Load More...
      </Button>
    </>
  );
}

export default CardList;
