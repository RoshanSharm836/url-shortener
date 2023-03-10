import axios from "axios";
import React, { useRef, useState } from "react";

function Input({ short, setShort, setDisplayBtm }) {
  let a = useRef(null);
  const [data, setData] = useState({ Full_url: "", Short_url: "" });
  // const [short, setShort] = useState({});
  // const [displayBtm, setDisplayBtm] = useState(false);
  const handle = async () => {
    if (data.Full_url !== "") {
      await axios.post(`/api`, data).then((res) => {
        // setShort(...res.data);
        setShort(res.data);
        setDisplayBtm(true);
      });
      // console.log(short);
    } else {
      alert("Enter Url");
    }
  };

  // const copy = () => {
  //   navigator.clipboard.writeText(short.Short_url);
  //   document.getElementById("message").style.display = "block";
  //   setTimeout(() => {
  //     document.getElementById("message").style.display = "none";
  //   }, 2000);
  // };
  return (
    <>
      <input
        type="text"
        name="url"
        onChange={(e) => {
          setData({ ...data, Full_url: e.target.value });
        }}
        placeholder="Enter Url"
        required
      />
      <button className="btm" onClick={handle}>
        Short
      </button>
    </>
  );
}

export default Input;
