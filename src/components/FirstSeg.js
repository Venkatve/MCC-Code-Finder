import React,{useRef,useState} from 'react';
import "./FirstSeg.css";
import Webcam from "react-webcam";

const FirstSeg = () => {
    const webRef = useRef(null);
    const [image,setImage] = useState()
    const showImage=()=>{
        setImage(webRef.current.getScreenshot());
    }
    const clearImage =()=> {
        setImage(null)
    }
    
  return (
    <div className='firstseg'>
        <div className='camera'><Webcam ref={webRef} 
        
        style={{
        position: "absolute",
          left:80,
          top:130,
          height: "33%",
           width: "28%",
           objectFit: "cover",
           border:"15px solid #8b5ec3f2",
        }}
        /></div>
        
        <button onClick={()=>{showImage()}}>Save Image</button>
        <button onClick={()=>clearImage()}>Clear Image</button>
        <img src={image}
        
            style={{
                position: "absolute",
                  right:80,
                  top:130,
                  height: "33%",
                  width: "28%",
                  objectFit: "cover",
                  border:"15px solid #8b5ec3f2",
                }}
            
        
        />
    </div>
  )
}

export default FirstSeg;