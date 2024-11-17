"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [handle, isHandle] = useState("");
  const [fetchApi, setFetchApi] = useState(false);
  const [datas, setDatas] = useState();
  console.log(toggle);
  // console.log(handle);

  useEffect(() => {
    if (fetchApi) {
      fetch(`http://ip-api.com/json/${handle}`)
        .then((response) => response.json())
        .then((data) => setDatas(data));
    }
  }, [fetchApi]);
  function handleClose() {
    setDatas(true);
    setToggle(true);
  }

  console.log(datas);
  return (
    <div>
      <div className="w-[500px] bg-black flex  flex-col items-center justify-center text-white h-[1000px] m-auto ">
        <div className="flex gap-4 ">
          <button
            className="bg-[#E27125] w-[150px] h-[37px] rounded-lg"
            onClick={() => setToggle(true)}
          >
            AddItem
          </button>
          <button
            className="w-[83px] bg-[#19191B] h-[37px] rounded-lg"
            onClick={handleClose}
          >
            Clear
          </button>
        </div>
        <button
          className="w-[83px] bg-[#19191B] h-[37px] rounded-lg mt-[20px]"
          onClick={() => setFetchApi(true)}
        >
          Fetch Api
        </button>
        <h6>Use the button above to add items</h6>
        {toggle && (
          <div className="w-[259px] h-[106px]">
            <h6>IP Address</h6>
            <input
              type="text"
              className="text-black"
              placeholder="158.143.37.141"
              onChange={(e) => isHandle(e.target.value)}
            />
          </div>
        )}
        {datas && (
          <div className="mt-4 text-left">
            <h3>IP Information</h3>
            <ul>
              <li>{datas.country}</li>
              <li>{datas.timezone}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
