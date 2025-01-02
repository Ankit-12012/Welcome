import React, { useEffect, useState } from "react";
import pic from "./passphoto.jpg";

const Getdata = () => {
  const [obj, setobj] = useState({});

  //   useEffect({});
  //-----------Using async & await -------------
  const getInfo = async () => {
    const data = await fetch("https://welcome-eta-five.vercel.app/api/data");
    const newdata = await data.json();
    setobj(newdata);
    console.log(newdata);
  };
  //---------Without using async await ---------
  //   const getInfo = () => {
  //     fetch("/api/data")
  //       .then((res) => {
  //         console.log(res);
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //         setobj(data);
  //       });
  //   };
  return (
    <div>
      <h1>Hello 🤗 Ankit mallik</h1>
      <div>
        <img src={pic} alt="photo unavailable" style={{ width: 200 }} />
      </div>
      <h2>Name : {obj.Name}</h2>
      <h3>Hobby : {obj.Hobby}</h3>
      <h3>Profession : {obj.Profession}</h3>

      <button onClick={getInfo}>Get Info</button>
    </div>
  );
};

export default Getdata;
