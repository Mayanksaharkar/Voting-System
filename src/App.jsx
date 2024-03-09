import Admin from "./Components/Admin";
import User from "./Components/User";
import { useState } from "react";
function App() {
  const [counts, setCounts] = useState({
    bjp: 200,
    inc: 110,
    shs: 75,
    cpi: 56,
  });

  return (
    <div className='flex gap-2  w-screen h-screen'>
      <User counts={counts} setCounts={setCounts} />

      <Admin counts={counts} />
    </div>
  );
}

export default App;
