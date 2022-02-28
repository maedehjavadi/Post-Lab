import { createSlice, PayloadAction } from "@reduxjs/toolkit";




interface postState {
  users?:any
  posts: any[];
  postEdit?: any;
  postLikes?: any;
  currentUser?: any;
  ErrorMessage: string;
  post: any;
}

const initialState: postState = {
  posts: [],
  post:{},
  users:[],

  ErrorMessage: "",
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
      // console.log('state.users.currentUser',userRedeucer().currentUser.postLikes)
      state.currentUser.postLikes.push(action.payload)
      const currentuserIndex = state.users.findIndex((item)=>item.id===state.currentUser.id)
      state.users.splice(currentuserIndex , 1 , state.currentUser)
    },

    dislikePost(state, action: PayloadAction<any>) {
      state.currentUser.postLikes.splice(state.currentUser.postLikes.indexOf(action.payload), 1);
      const currentuserIndex = state.users.findIndex((item)=>item.id===state.currentUser.id)
      state.users.splice(currentuserIndex , 1 , state.currentUser)
    },
    catchUserName(state, action: PayloadAction<any>) {
      const user = state.users.find(
        (user) =>
          user.userName === action.payload.username &&
          user.password === action.payload.password
      );
      if (user) {
        state.currentUser = {...user,postLikes: []};
        state.ErrorMessage = "";
        console.log(state.currentUser);
      } else {
        state.ErrorMessage = "UserName or Password is not correct";
        console.log(state.ErrorMessage);
      } 
    },
    addUser(state, action: PayloadAction<any>) {
        state.users.push(action.payload);
    },
    getPost(state, action: PayloadAction<number>){
      state.post= state.posts.find((item)=> item.id===action.payload)
      // console.log(state.item)
    },
    addComment(state, action:PayloadAction<any>){
      const Index=state.posts.findIndex((item)=>item.id===action.payload.id)
      // state.posts.splice(Index,1,action.payload)
        state.posts.splice(Index , 1 ,action.payload)
        state.post = action.payload
    },
 
  },
});

export const { addForm, deleteForm, getId, editform, likePost, dislikePost , catchUserName, addUser , getPost, addComment  } =
  postSlice.actions;
export default postSlice.reducer;
