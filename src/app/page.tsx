'use client'

import VideoIntro from "./components/VideoIntro";
import MainPage from "./components/MainPage";
import { useState, useEffect } from "react";
import DataProvider from '../context/DataContext';

export default function Main() {
  const [content, setContent] = useState(<VideoIntro />)

  setTimeout(() => {
    setContent(<MainPage />)
  }, 4000);

  return <DataProvider>{content}</DataProvider>;
}
