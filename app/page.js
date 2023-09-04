"use client"

import { useState } from "react";
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]);
  const [fol, setFol] = useState([]);

  const loadDataFromServer = async () => {
    try {
      const response = await axios.get('https://api.github.com/users/Ghullam-Mustafa/followers');
      setData(response.data);
    } catch (error) {
      console.error("Error loading followers:", error);
    }
  }

  const loadDataFromServers = async () => {
    try {
      const following = await axios.get('https://api.github.com/users/Ghullam-Mustafa/following');
      setFol(following.data); // Use following.data to set the state
    } catch (error) {
      console.error("Error loading following:", error);
    }
  }

  return (
    <>
      <div className={true ? 'red' : 'black'}>
        {data.map((item, a) => {
          return (
            <div key={a}>
              Follower login - {item.login}
            </div>
          )
        })}
        <button onClick={loadDataFromServer}>Load Followers</button>
      </div>

      <div className={true ? 'blue' : 'orange'}>
        {fol.map((value, i) => {
          return (
            <div key={i} >
              Following login - {value.login}
            </div>
          )
        })}
        <button onClick={loadDataFromServers}>Load Following</button>
      </div>
    </>
  )
}
