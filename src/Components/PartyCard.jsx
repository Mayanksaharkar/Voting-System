/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function PartyCard({ party, selectedId, handleClick }) {
  return (
    <>
      <div
        className={`${
          selectedId === party.id ? "border-2 border-red-300" : ""
        } w-full  h-48 flex flex-col justify-evenly align-middle items-center text-center bg-base-300 rounded-xl`}
        onClick={(e) => {
          e.preventDefault();
          handleClick(party.id);
        }}
      >
        <img src={party.img} className='aspect-square w-20 h-20' />
        <div>
          <div className=''>{party.name}</div>
          <div>({party.sname})</div>
        </div>
      </div>
    </>
  );
}

export default PartyCard;
