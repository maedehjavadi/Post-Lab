import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  values: any;
  item: any;
}

const initialState: CounterState = {
  values: [
    {
      id: 1,
      body: "Salam @@@_3^^^Farhad@@@^^^  Khobi? $$$2~~~reactjs$$$~~~ ro yad gerefti? agar nemidoni az @@@60166c39f20f22176c29b047^^^_Bill Gates@@@^^^ bepors😂😂.$$$_6016fea7c0aee429a857f216~~~_javascript$$$~~~ ro ham yad begir😉",
      hashtag: "mohaamad",
      mentsions: "akbari",
      datetime: "2018-12-10T13:49:51.141Z",
      createdBy: "mohammad",
      images: [
        "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_1.jpg",
        "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_3.jpg",
      ],
      avatarImg: [
        "https://zone-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg",
      ],
    },
    {
      id: 2,
      body: "Salam @@@_1^^^Farshad@@@^^^  Khobi? $$$2~~~reactjs$$$~~~ ro yad gerefti? agar nemidoni az @@@60166c39f20f22176c29b047^^^_Bill Gates@@@^^^ bepors😂😂.$$$_6016fea7c0aee429a857f216~~~_javascript$$$~~~ ro ham yad begir😉",
      hashtag: "mohaamad",
      mentsions: "akbari",
      datetime: "2018-12-10T13:49:51.141Z",
      createdBy: "132121213",
      images: [
        "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_1.jpg",
        "https://zone-assets-api.vercel.app/assets/images/marketing/marketing_3.jpg",
      ],
      avatarImg: [
        "https://zone-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg",
      ],
    },
  ],
  item:{}
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addForm(state, action: PayloadAction<any>) {
      state.values = [...state.values, action.payload];
    },
    deleteForm(state, action: PayloadAction<any>) {
      state.values = state.values.filter((item) => item.id !== action.payload);
    },
    getId(state, action: PayloadAction<any>){
      state.item= state.values.find((item)=> item.id===action.payload)
      // console.log(state.item)
    },
    updatePost(state, action:PayloadAction<any>){
      const Index=state.values.findIndex((item)=>item.id===action.payload.id)
      state.values.splice(Index,1,action.payload)
    }
  },
});

export const { addForm, deleteForm , getId,updatePost} = counterSlice.actions;
export default counterSlice.reducer;
