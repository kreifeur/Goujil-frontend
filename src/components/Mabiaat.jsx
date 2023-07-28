import axios from "axios";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";

const Mabiaat = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://kreifeur-goujil.onrender.com/achats").then((res) => setData(res.data));
  }, []);

  const filteredData = data.filter((item) =>
    item.fournisseur.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="h-[85%] bg-gray-100 p-5">
      <div className="py-2 overflow-x-auto bg-white rounded h-[100%] ">
        <div className="">
          <div className="flex items-center justify-around">
            
            <div className="mb-3 flex items-center bg-gray-100 rounded-xl">
              <input
                type="search"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="بحث عن مورد ..."
                className="outline-none border-none bg-gray-100 p-2 rounded-xl"
              />
              <BiSearch className="text-lg mr-2" />
            </div>

            <div>سجل الشراء  </div>
          </div>
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  المورد
                </th>
                <th scope="col" className="px-6 py-3">
                  المجموع
                </th>
                <th scope="col" className="px-6 py-3">
                  تم دفع
                </th>
                <th scope="col" className="px-6 py-3">
                  الديون
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((e) => {
                return (
                  <tr key={e.id} className="border border-b">
                    <td className="px-6 py-3 ">{e.fournisseur}</td>
                    <td className="px-6 py-3 ">{e.total}</td>
                    <td className="px-6 py-3 ">{e.versement}</td>
                    <td className="px-6 py-3 ">{e.diff}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mabiaat;
