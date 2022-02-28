import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";
import {store} from "../src/redux/store"
import { useAppSelector } from "../src/redux/hooks";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const currentUser = store.getState().post.currentUser
const router = useRouter()
  useEffect(() =>{
    console.log(router.pathname)
    if(!currentUser && !router.pathname.includes('signUp')) {
      router.push('/')
    }
  },[currentUser])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
