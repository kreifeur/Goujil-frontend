import {
  LineChart,
  Tooltip,
  CartesianGrid,
  Line,
  Legend,
  YAxis,
  XAxis,
} from "recharts";

const Expense = () => {
  const data = [
    {
      month: "Jan",
      expense: 400,
      gain: 240,
    },
    {
      month: "Feb",
      expense: 300,
      gain: 139,
    },
    {
      month: "March",
      expense: 200,
      gain: 500,
    },
  ];

  return (
    <div className="bg-white rounded row-span-2 py-2 flex flex-col gap-2">
      <div className="px-2">Expense and gain</div>
      <div className="flex items-center justify-center">
        <LineChart
          width={290}
          height={170}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" style={{ fontSize : '10px'}} tickLine={false} />
          <YAxis  style={{ fontSize : '10px'}} tickLine={false}/>
          <Tooltip />
          <Legend  style={{ fontSize : '5px'}}/>
          <Line type="monotone" dataKey="gain" stroke="#8884d8" />
          <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
};

export default Expense;
