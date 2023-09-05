"use client"

import React , { useState } from "react";


export default function Home() {
 

  const [data, setData] = useState([])
  const [userName, setUserName] = useState("")

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleGet = async () => {
    try {
      const link = await fetch(`https://api.github.com/users/${userName}`, {
        method:"GET"
      });
      if (!link.ok) {
        alert("User not found");
        setUserName('')
        return
      }
      const userData = await link.json();
      console.log(userData);
      return
      setData([...data, userData]);
      setUserName('')
    } catch (error) {
     console.error(error);
    }
  };

  return (
    <>
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
          <div className="text-center"><button onClick={handleGet} className="bg-[#33B1FF] hover:bg-[#1FA9FF] text-white font-bold py-2 px-4 rounded">
            Get Data
          </button>
          </div>

          <table className="my-5">
            <thead className="border-b font-medium  border-[#33B1FF]">
              <tr className="">
                <th className="text-[#33B1FF] py-10 px-10">#</th>
                <th className="text-[#33B1FF] py-10 px-20">Profile</th>
                <th className="text-[#33B1FF] py-10 px-20">Name</th>
                <th className="text-[#33B1FF] py-10 px-20">Followers</th>
                <th className="text-[#33B1FF] py-10 px-20">Following</th>
                <th className="text-[#33B1FF] py-10 px-20">Public repos</th>
                <th className="text-[#33B1FF] py-10 px-20">Github</th>
                <th className="text-[#33B1FF] py-10 px-10">Action</th>
              </tr>
            </thead>
            {data.map((item, i) => {
              {/* return <> */}
              <div className="text-black text-3xl"> dKJJJJJJJJJJJJJ</div>
                   {/* </> */}

              {/* // <tr key={i} className="border-b  border-[#33B1FF]"> */}
              {/* //   <td className="whitespace-nowrap px-6 py-4 font-medium">{i + 1}</td>
              //   <td className="whitespace-nowrap px-6 py-4 font-medium">
              //     <img src={item.avatar_url} alt="profile picture" width={70} height={70} className="rounde-full" />
              //   </td>
              //   <td className="whitespace-nowrap px-6 py-4 font-medium">{item.login} sjwwkdjhdie</td>
              //   <td className="whitespace-nowrap px-6 py-4 font-medium">{item.followers} jodiojfofjojfoj</td>
              //   <td className="whitespace-nowrap px-6 py-4 font-medium">{item.following}</td>
              //   <td className="whitespace-nowrap px-6 py-4 font-medium">{item.public_repos}</td>
              //   <td>
              //     <a href={item.html_url} target='blank' className="whitespace-nowrap px-6 py-4">{item.html_url}</a>
              //   </td> */}
              {/* // </tr> */}
           })} 
          </table>
        </div>
      </div>
    </>
  )
}
