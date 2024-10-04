"use client"
import React, { createContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ServerComponent from "../pages/api/musicVideo"

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [playlist, setPlaylist] = useState("Hello World!");
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

        const response = await (await fetch('/api/musicVideo')).json();
        console.log(response)
        setPlaylist(response);
           
      };
  
      fetchData();
    }, [refresh]);
  
    const forceRefresh = useCallback(() => {
      setRefresh(prev => !prev); // Toggle refresh state to trigger useEffect
      }, []);
  
    return (
      <DataContext.Provider value={{ embedId, setEmbedId, playlist, forceRefresh }}>
        {children}
      </DataContext.Provider>
    );
  };
  

export default DataProvider