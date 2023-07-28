import { useEffect, useState } from "react";
import axios from "axios";
import { BiSearch } from "react-icons/bi";

const LesVents = () => {
  const [data, setData] = useState([]);
  const [filterClient, setFilterClient] = useState("");
  const [filterVendeur, setFilterVendeur] = useState("");

  useEffect(() => {
    axios.get("https://kreifeur-goujil.onrender.com/ventes").then((res) => setData(res.data));
  }, []);

  const filteredData = data.filter(
    (item) =>
      item.client.toLowerCase().includes(filterClient.toLowerCase()) &&
      item.vendeur.toLowerCase().includes(filterVendeur.toLowerCase())
  );

  return (
    <div className="h-[85%] bg-gray-100 p-5">
      <div className="py-2 overflow-x-auto bg-white rounded h-[100%]">
      <div className="flex items-center justify-around">
        
        <div className="flex items-center mr-3 bg-gray-100 px-1 rounded-xl">
              <BiSearch className="text-lg" />
              <input
                type="search"
                value={filterClient}
                onChange={(e) => setFilterClient(e.target.value)}
                placeholder="بحث عن زبون..."
                className="outline-none border-none bg-gray-100 p-2"
              />
            </div>
            <div className="flex items-center bg-gray-100 px-1 rounded-xl">
              <BiSearch className="text-lg" />
              <input
                type="search"
                value={filterVendeur}
                onChange={(e) => setFilterVendeur(e.target.value)}
                placeholder="بحث عن عامل..."
                className="outline-none border-none bg-gray-100 p-2"
              />
            </div>

            <div>سجل البيع : </div>
        </div>
        <div className="relative overflow-x-auto mt-3">
          <div className="flex mb-3">
            
          </div>
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 w-[20%]">
                  العامل
                </th>
                <th scope="col" className="px-6 py-3 w-[20%]">
                  الزبون
                </th>
                <th scope="col" className="px-6 py-3 w-[20%]">
                  المجموع
                </th>
                <th scope="col" className="px-6 py-3 w-[20%]">
                  تم دفع
                </th>
                <th scope="col" className="px-6 py-3 w-[20%]">
                  الديون
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((e) => {
                return (
                  <tr key={e.id} className="border border-b">
                    <td className="px-6 py-3">{e.vendeur}</td>
                    <td className="px-6 py-3">{e.client}</td>
                    <td className="px-6 py-3">{e.total}</td>
                    <td className="px-6 py-3">{e.versement}</td>
                    <td className="px-6 py-3">{e.diff}</td>
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

export default LesVents;
