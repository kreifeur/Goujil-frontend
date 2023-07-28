import { useEffect, useState } from "react";
import axios from "axios";
import { BiSearch } from "react-icons/bi";

const ProductsList = () => {
  const [data, setData] = useState([]);
  const [vis, setVis] = useState(false);
  const [updata, setUpdata] = useState({
    ref: 0,
    name: "",
    price1: 0,
    price2: 0,
    price3: 0,
    qte: 0,
    date: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const get_data = async () => {
      await axios
        .get("https://kreifeur-goujil.onrender.com/products")
        .then((res) => setData(res.data));
    };
    get_data();
  }, [data]);

  const deleteproduct = (id) => {
    axios
      .delete(`https://kreifeur-goujil.onrender.com/${id}`)
      .then((res) => console.log(res));
  };

  const sendupdatedata = () => {
    axios
      .put(`https://kreifeur-goujil.onrender.com/${updata.id}`, updata)
      .then((res) => console.log(res));
    setVis(false);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded col-span-3 row-span-4 py-2 flex flex-col justify-between">
      <div className="px-2 h-max">
        <div className="flex items-center justify-between">
          <div className="flex gap-3 bg-gray-100 items-center px-1">
            <BiSearch className="text-lg" />
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="بحث عن منتج"
              className="outline-none border-none bg-gray-100 p-2"
            />
          </div>

          <div>قائمة المنتجات </div>
        </div>

        {vis ? (
          <form
            onSubmit={sendupdatedata}
            className="border p-1 justify-between flex gap-2 flex-wrap"
          >
            <input
              value={updata.name}
              onChange={(e) => {
                setUpdata({ ...updata, name: e.target.value });
              }}
              className="border p-1 outline-none"
              type="text"
            />

            <input
              value={updata.qte}
              onChange={(e) => {
                setUpdata({ ...updata, qte: e.target.value });
              }}
              className="border px-1 outline-none"
              type="number"
            />
            <input
              value={updata.price1}
              onChange={(e) => {
                setUpdata({ ...updata, price1: e.target.value });
              }}
              className="border px-1 outline-none"
              type="number"
            />
            <input
              value={updata.price2}
              onChange={(e) => {
                setUpdata({ ...updata, price2: e.target.value });
              }}
              className="border px-1 outline-none"
              type="number"
            />
            <input
              value={updata.price3}
              onChange={(e) => {
                setUpdata({ ...updata, price3: e.target.value });
              }}
              className="border px-1 outline-none"
              type="number"
            />

            <input
              value={updata.date}
              onChange={(e) => {
                setUpdata({ ...updata, date: e.target.value });
              }}
              className="border px-1 outline-none"
              type="number"
            />

            <button className="border bg-green-100 text-white px-2 rounded  text-green-700">
              تعديل
            </button>
          </form>
        ) : null}
      </div>

      <div className="relative overflow-x-auto mt-1 h-[100%]">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                id
              </th>
              <th scope="col" className="px-6 py-3">
                اسم المنتج
              </th>
              <th scope="col" className="px-6 py-3">
                الكمية
              </th>
              <th scope="col" className="px-6 py-3">
                سعر1
              </th>
              <th scope="col" className="px-6 py-3">
                سعر2
              </th>
              <th scope="col" className="px-6 py-3">
                سعر3
              </th>
              <th scope="col" className="px-6 py-3">
                سعر الشراء
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((e) => {
              return (
                <tr key={e.id} className="bg-white border-b">
                  <td className="px-6 py-4">{e.ref}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {e.name}
                  </th>
                  <td className="px-6 py-4">{e.qte}</td>
                  <td className="px-6 py-4">{e.price1}</td>
                  <td className="px-6 py-4">{e.price2}</td>
                  <td className="px-6 py-4">{e.price3}</td>
                  <td className="px-6 py-4">{e.date}</td>
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
                      onClick={() => deleteproduct(e.id)}
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

export default ProductsList;
