import React, { useState, CSSProperties } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Backdrop from "@mui/material/Backdrop";
import { BeatLoader } from 'react-spinners';



const Loader = () => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#754739");

  return (
    <div className="sweet-loading">
    
        <BeatLoader color="#754739" />
  

    </div>
  );
}

export default Loader;
