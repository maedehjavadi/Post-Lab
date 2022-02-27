import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface postState {
  users?:any
  posts: any[];
  postEdit?: any;
  postLikes?: any;
  currentUser?:any;
}

const initialState: postState = {
  posts: [
    {
      id: 1,
      body: "WhatsApp from Facebook is a FREE messaging and video calling app.",
      hashtag: ".net",
      mentsions: "billGats",
      datetime: "2018-12-10T13:49:51.141Z",
      createdBy: "student1",
      images: "",
      avatarImg: [
        "https://zone-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg",
      ],
    },
    {
      id: 2,
      body: "WhatsApp from Facebook is a FREE messaging and video calling app.",
      hashtag: ".net",
      mentsions: "billGats",
      datetime: "2018-12-10T13:49:51.141Z",
      createdBy: "student1",
      images: "",
      avatarImg: [
        "https://zone-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg",
      ],
    },
    {
      id: 3,
      body: "WhatsApp from Facebook is a FREE messaging and video calling app.",
      hashtag: ".net",
      mentsions: "billGats",
      datetime: "2018-12-10T13:49:51.141Z",
      createdBy: "student1",
      images: "",
      avatarImg: [
        "https://zone-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg",
      ],
    },
  ],
  users:[
    {
      id:1,
      firstName:"mohammadreza",
      lastName:"Akbari",
      userName:"mohmmadrezamf2014@gmail.com",
      password:2020,
      postLikes: [],
    },
    {
      id:2,
      firstName:"mohammadreza",
      lastName:"Akbari",
      userName:"mohmmadrezamf2014@gmail.com",
      password:2020,
      postLikes: [],
    },
    {
      id:3,
      firstName:"mohammadreza",
      lastName:"Akbari",
      userName:"mohmmadrezamf2014@gmail.com",
      password:2020,
      postLikes: [],
    },
  ],
  currentUser:{  
    id:3,
    firstName:"mohammadreza",
    lastName:"Akbari",
    userName:"mohmmadrezamf2014@gmail.com",
    password:2020,
    postLikes: [],
},
  // postLikes: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addForm(state, action: PayloadAction<any>) {
      state.posts = [...state.posts, action.payload];
    },
    deleteForm(state, action: PayloadAction<any>) {
      state.posts = state.posts.filter((item) => item.id !== action.payload);
    },
    getId(state, action: PayloadAction<any>) {
      state.postEdit = state.posts.find((item) => item.id === action.payload);
    },
    editform(state, action: PayloadAction<any>) {
      const index = state.posts.findIndex(
        (item) => item.id === action.payload.id
      );
      state.posts.splice(index, 1, action.payload);
    },
    // ------------------------------------------------------------------------------
    likePost(state, action: PayloadAction<any>) {
      state.currentUser.postLikes.push (action.payload)
      const currentuserIndex = state.users.findIndex((item)=>item.id===state.currentUser.id)
      state.users.splice(currentuserIndex , 1 , state.currentUser)
    },

    dislikePost(state, action: PayloadAction<any>) {
      state.currentUser.postLikes.splice(state.currentUser.postLikes.indexOf(action.payload), 1);
      const currentuserIndex = state.users.findIndex((item)=>item.id===state.currentUser.id)
      state.users.splice(currentuserIndex , 1 , state.currentUser)
    },
  },
});

export const { addForm, deleteForm, getId, editform, likePost, dislikePost } =
  postSlice.actions;
export default postSlice.reducer;
