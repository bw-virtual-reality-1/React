import React, { useState, useEffect } from "react";
import axios from 'axios'
import { StyledHome } from "./Style";



function Home() {
  const [nasa, setNasa] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=uYdBdPRDFZvf1h5e7A2FUZTXnWdxBiqyCym2Uy08&date=2019-03-17')
      .then(res => setNasa(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <StyledHome>
      <h1>VR funding platform</h1>
      {nasa && <img src={nasa.url} alt="Nasa" />}

    </StyledHome>
  );
}

export default Home;
