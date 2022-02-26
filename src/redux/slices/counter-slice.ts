import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: any;
  item: any;
}

const initialState: CounterState = {
  value: [
    {
      id: 1,
      body: "Salam @@@_60166c0d62820e1c40b20e91^^^Elon Musk@@@^^^  Khobi? $$$6016f2aa258a450dc47519b6~~~reactjs$$$~~~ ro yad gerefti? agar nemidoni az @@@60166c39f20f22176c29b047^^^_Bill Gates@@@^^^ bepors😂😂.$$$_6016fea7c0aee429a857f216~~~_javascript$$$~~~ ro ham yad begir😉",
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
      body: "Salam @@@_60166c0d62820e1c40b20e91^^^Elon Musk@@@^^^  Khobi? $$$6016f2aa258a450dc47519b6~~~reactjs$$$~~~ ro yad gerefti? agar nemidoni az @@@60166c39f20f22176c29b047^^^_Bill Gates@@@^^^ bepors😂😂.$$$_6016fea7c0aee429a857f216~~~_javascript$$$~~~ ro ham yad begir😉",
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
  
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addForm(state, action: PayloadAction<any>) {
      state.value = [...state.value, action.payload];
    },
    deleteForm(state, action: PayloadAction<any>) {
      state.value = state.value.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addForm, deleteForm } = counterSlice.actions;
export default counterSlice.reducer;
