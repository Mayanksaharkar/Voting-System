import { CChart } from "@coreui/react-chartjs";

const AdminPanel = ({ counts }) => {
  const data = {
    labels: ["BJP", "INC", "SHS", "CPI"],
    datasets: [
      {
        backgroundColor: ["#f97d09", "#EE5A1C", "#ff6634", "#FF0000"],
        data: [counts.bjp, counts.inc, counts.shs, counts.cpi],
      },
    ],
  };

  return (
    <div className='w-1/2 flex flex-col justify-center align-middle items-center '>
      <div className='text-center text-3xl text-red-400'>Admin Panel</div>
      <div className=' h-screen flex flex-col justify-center gap-5 align-middle items-center mt-52'>
        <div className=' mt-28 '>
          <CChart type='bar' data={data} width={600} height={600} />
        </div>
        <div className=''>
          <CChart type='pie' data={data} width={600} height={600} />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
