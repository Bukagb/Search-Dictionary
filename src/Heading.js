import React, { useRef } from "react";
// import play from "./assets/play.png";
import "./Heading.css"
import {PiSpeakerHighBold} from "react-icons/pi";
export const Heading = ({ audioUrl, word, phonetic }) => {
  const ref = useRef();

  const playAudio = () => {
    ref.current.play();
  };
  return (
    <div className="flex flex-row justify-between my-5">
      <h3 className="font-bold text-violet-300 text-3xl font-serif  mt-12">
        {word}
        <span className="block font-normal text-sm text-orange-600 mt-1">
          {phonetic}
        </span>
      </h3>
      <div className="vibrate mt-4">
           <button onClick={playAudio} >
              <PiSpeakerHighBold className="rate"/>
           </button>
     </div>
      


      <audio className="hidden" ref={ref} src={audioUrl} />
    </div>
  );
};

export default Heading;
