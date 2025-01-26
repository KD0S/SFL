"use client"
import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ServerComponent from "../pages/api/musicVideo"

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [musicVideos, setMusicVideos] = useState("Hello World!");
  const [stew808, setStew808] = useState("Test");
  const [audioWorks, setAudioWorks] = useState("Test");
  const [embedId, setEmbedId] = useState("z6fnyWLLz1Q");
  const [refresh, setRefresh] = useState(false);

  const axiosInstance = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    timeout: 5000, // Timeout if necessary
    header: {
      'ContentType': 'program/json',
      // Add all custom headers here
    },
  });


  useEffect(() => {

    // Fetch data from backend
    const fetchData = async () => {

      const response = await (await fetch('/api/playlist/PLO9Ra6c9ypYCTakC5eNzaCvVbnYOv5TKD')).json();
      console.log(response);
      setMusicVideos(response);

      const response808 = await (await fetch('/api/playlist/PLO9Ra6c9ypYAg19jxcHTjTCLhxZgSwgqO')).json();
      console.log(response808);
      setStew808(response808);

      const responseAudio = await (await fetch('/api/playlist/PLO9Ra6c9ypYAjTfvsZCArHPZEWV4dsGgJ')).json();
      console.log(responseAudio);
      setAudioWorks(responseAudio);

      //const 808response = await(await fetch(''))

    };

    fetchData();
  }, [refresh]);

  const forceRefresh = useCallback(() => {
    setRefresh(prev => !prev); // Toggle refresh state to trigger useEffect
  }, []);

  return (
    <DataContext.Provider value={{ embedId, setEmbedId, stew808, audioWorks, musicVideos, forceRefresh }}>
      {children}
    </DataContext.Provider>
  );
};


export default DataProvider