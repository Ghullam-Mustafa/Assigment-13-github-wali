"use client"
import { useState } from "react";
import axios from 'axios';

export default function Home() {
  // const [data, setData] = useState([]);
  // const [fol, setFol] = useState([]);

  // const loadDataFromServer = async () => {
  //   try {
  //     const response = await axios.get('https://api.github.com/users/Ghullam-Mustafa/followers');
  //     setData(response.data);
  //   } catch (error) {
  //     console.error("Error loading followers:", error);
  //   }
  // }

  // const loadDataFromServers = async () => {
  //   try {
  //     const following = await axios.get('https://api.github.com/users/Ghullam-Mustafa/following');
  //     setFol(following.data); // Use following.data to set the state
  //   } catch (error) {
  //     console.error("Error loading following:", error);
  //   }
  // }

  const [data, setData] = useState([])

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



      <div className="bg-[#D6EFFF] py-10 ">
        <div className=" max-w-[1320px] mx-auto md:py-[80] py-5  ">
          <div className="text-[#33B1FF] font-mono text-3xl text-center">Github User Finder</div>
          <div className="text-center py-10">
            <input
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              type="text"
              placeholder="Enter your user name"
              value={userName}
              onChange={handleChange}
            />
          </div>
          <div className="text-center"><button className="bg-[#33B1FF] hover:bg-[#1FA9FF] text-white font-bold py-2 px-4 rounded">
            Click me
          </button>
          </div>

          <table className="my-5">
            <thead>
              <tr className="">
                <td className="text-[#33B1FF] px-10">#</td>
                <td className="text-[#33B1FF] px-20">Profile</td>
                <td className="text-[#33B1FF] px-20">Name</td>
                <td className="text-[#33B1FF] px-20">Followers</td>
                <td className="text-[#33B1FF] px-20">Following</td>
                <td className="text-[#33B1FF] px-20">Github</td>
                <td className="text-[#33B1FF] px-10">Action</td> <hr />
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  )
}
