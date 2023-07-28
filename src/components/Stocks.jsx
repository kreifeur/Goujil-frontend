import axios from "axios";
import { useEffect, useState } from "react";
const Stocks = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getdata();
  }, []);

  async function getdata() {
    const result = await axios.get("https://kreifeur-goujil.onrender.com/purchases");
    setData(result.data);
  }
  return (
    <div className="h-[85%] bg-gray-100 p-5 grid gap-5  grid-cols-4">
      {data &&
        data.map((e, index) => (
          <ul className="bg-white rounded shadow p-2 flex flex-col gap-4 border gap-2" key={index}>
            <li>Name : {e.name}</li>
            <li className="font-bold">Total : {e.total}</li>
            <li className="">
              {e.achats.map((item, i) => (
                <div className="flex flex-col gap-2" key={i}>
                  {item.name} ---- {item.qte} ---- {item.priceeach} ---- {item.qte * item.priceeach}
                  <hr />
                </div>
              ))}
            </li>
          </ul>
        ))}
    </div>
  );
};

export default Stocks;
