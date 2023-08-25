import React from "react";
import "./Body.css";

const Body = ({ partOfSpeech, definitions, synonyms, antonyms}) => {
  return (
    <div className="my-3">
      <div className=" italic">
        <p className="text-violet-300 mt-7">{partOfSpeech}</p>
      </div>
      <p className="chge">Meaning & Definition</p>
      <ul className="list-decimal px-8 text-slate-400 text-sm space-y-3  font-serif my-4 mb-4">
        {definitions.map((def, index) => (
          <li key={index}>{def.definition}</li>
        ))}
      </ul>

      {synonyms.length > 0 && (
        <p className="italic text-amber-100 text-sm ">
          Synonyms:{" "}
          {synonyms.map((synonym, index) => (
            <span key={index} className="text-amber-50 mx-1">
              {synonym}
            </span>
          ))}
        </p>
      )}
      {antonyms.length > 0 && (
        <p className="italic text-amber-100 text-sm ">
          Antonyms:{" "}
          {antonyms.map((antonyms, index) => (
            <span key={index} className="text-amber-50 mx-1">
              {antonyms}
            </span>
          ))}
        </p>
      )}
      
    </div>
  );
};

export default Body;