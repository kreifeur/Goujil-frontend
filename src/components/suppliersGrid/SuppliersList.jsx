import { useEffect, useState } from "react";
import axios from "axios";
import { BiSearch } from "react-icons/bi";

const SuppliersList = () => {
  const [data, setData] = useState([]);
  const [vis, setVis] = useState(false);
  const [updata, setUpdata] = useState({
    name: "",
    phone: "",
    address: "",
    productslist: "",
    gain: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const get_data = async () => {
      await axios.get("https://kreifeur-goujil.onrender.com/suppliers").then((res) => setData(res.data));
    };
    get_data();
  }, [data]);

  const deletesupplier = (id) => {
    axios.delete(`https://kreifeur-goujil.onrender.com/supplier/${id}`).then((res) => console.log(res));
  };

  const sendupdatedata = () => {
    axios
      .put(`https://kreifeur-goujil.onrender.com/supplier/${updata.id}`, updata)
      .then((res) => console.log(res));
    setVis(false);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded col-span-4 row-span-4 py-2 overflow-x-auto">
      <div className="px-2">
        <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center bg-gray-100 px-1 rounded-xl">
          <BiSearch className="text-lg" />
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="بحث عن مورد..."
            className="outline-none border-none bg-gray-100 p-2"
          />
        </div>
        <div>قائمة الموردين</div>
        </div>
        
        {vis ? (
          <form onSubmit={sendupdatedata} className="border p-1 justify-between flex gap-2">
            <input
              value={updata.name}
              onChange={(e) => {
                setUpdata({ ...updata, name: e.target.value });
              }}
              className="border p-1 outline-none"
              type="text"
            />
            <input
              value={updata.phone}
              onChange={(e) => {
                setUpdata({ ...updata, phone: e.target.value });
              }}
              className="border px-1 outline-none"
              type="text"
            />
            <input
              value={updata.address}
              onChange={(e) => {
                setUpdata({ ...updata, address: e.target.value });
              }}
              className="border px-1 outline-none"
              type="text"
            />
            <input
              value={updata.productslist}
              onChange={(e) => {
                setUpdata({ ...updata, productslist: e.target.value });
              }}
              className="border px-1 outline-none"
              type="text"
            />
            <input
              value={updata.gain}
              onChange={(e) => {
                setUpdata({ ...updata, gain: e.target.value });
              }}
              className="border px-1 outline-none"
              type="text"
            />

            <button className="border bg-green-100 text-white px-2 rounded  text-green-700">
              تعديل
            </button>
          </form>
        ) : null}
      </div>

      <div className="relative overflow-x-auto mt-3">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                id
              </th>
              <th scope="col" className="px-6 py-3">
                الاسم
              </th>
              <th scope="col" className="px-6 py-3">
               رقم الهاتف
              </th>
              <th scope="col" className="px-6 py-3">
                العنوان
              </th>
              <th scope="col" className="px-6 py-3">
                نوع السلع
              </th>
              <th scope="col" className="px-6 py-3">
               الديون
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((e) => {
              return (
                <tr key={e.id} className="bg-white border-b ">
                  <td className="px-6 py-4">{e.ref}</td>
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {e.name}
                  </td>
                  <td className="px-6 py-4">{e.phone}</td>
                  <td className="px-6 py-4">{e.address}</td>
                  <td className="px-6 py-4">{e.productslist}</td>
                  <td className="px-6 py-4">{e.gain}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <a
                      onClick={() => {
                        setUpdata(e);
                        setVis(true);
                        console.log(updata);
                      }}
                      href="#"
                      className="font-medium bg-blue-100 rounded py-1 px-2 text-blue-600  hover:underline"
                    >
                      تعديل
                    </a>
                    <a
                      onClick={() => deletesupplier(e.id)}
                      href="#"
                      className="font-medium bg-red-100 rounded py-1 px-2 text-red-600  hover:underline"
                    >
                      حذف
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuppliersList;
