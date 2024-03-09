import { useState, useEffect } from "react";
import Data from "../Data";
import PartyCard from "./PartyCard";
import Counts from "../Counts";
function User({ counts, setCounts }) {
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    console.log(selectedId);
  }, [selectedId]);

  const handleClick = (id) => {
    setSelectedId(id);
  };

  const handleVote = () => {
    if (selectedId !== null) {
      // Using spread operator to create a new object and updating state immutably
      if (selectedId === 1) {
        setCounts({ ...counts, bjp: counts.bjp + 1 });
      } else if (selectedId === 2) {
        setCounts({ ...counts, inc: counts.inc + 1 });
      } else if (selectedId === 3) {
        setCounts({ ...counts, shs: counts.shs + 1 });
      } else if (selectedId === 4) {
        setCounts({ ...counts, cpi: counts.cpi + 1 });
      } else {
        alert("Something Went Wrong!");
      }
    } else {
      alert("select any one");
    }
    setSelectedId(null);
  };
  return (
    <div className='w-1/2 h-screen p-4'>
      <nav className='bg-base-300 w-full text-center font-sans text-primary text-3xl  rounded-lg h-min py-4'>
        Voting System
      </nav>
      <div className='grid grid-cols-3 gap-3 p-4'>
        {Data.map((party) => {
          return (
            <div key={party.id}>
              <PartyCard
                party={party}
                selectedId={selectedId}
                handleClick={handleClick}
              />
            </div>
          );
        })}
      </div>
      <div className='my-5 w-full flex justify-center gap-4 text-3xl'>
        <button
          className='border-primary border  text-primary rounded-xl px-4 py-2 shadow-xl shadow-base-300'
          onClick={(e) => {
            e.preventDefault();
            setSelectedId(null);
          }}
        >
          Clear
        </button>
        <button
          className='bg-primary text-white rounded-2xl px-4 py-2 shadow-xl shadow-base-300'
          onClick={(e) => {
            e.preventDefault();
            handleVote();
          }}
        >
          Vote
        </button>
      </div>
    </div>
  );
}

export default User;
