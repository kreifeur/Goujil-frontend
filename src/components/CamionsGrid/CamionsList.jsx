import axios from "axios";
import { useEffect, useState } from "react";

const CamionList = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [searchCamion, setSearchCamion] = useState("");
  const [productSuggestions, setProductSuggestions] = useState([]);

  useEffect(() => {
    axios.get("https://kreifeur-goujil.onrender.com/charges").then((res) => {
      setData(res.data);
      setFilteredData(res.data);
    });

    axios.get("https://kreifeur-goujil.onrender.com/products").then((res) => {
      const productNames = res.data.map((product) => product.name);
      setProductSuggestions(productNames);
    });
  }, []);

  const deletecamion = (id) => {
    axios
      .delete(`https://kreifeur-goujil.onrender.com/charge/${id}`)
      .then((res) => console.log(res));
  };

  useEffect(() => {
    const filteredResults = data.filter((item) => {
      const productMatch = item.produit.toLowerCase().includes(searchProduct.toLowerCase());
      const camionMatch = item.camion.toLowerCase().includes(searchCamion.toLowerCase());
      return productMatch && camionMatch;
    });
    setFilteredData(filteredResults);
  }, [data, searchProduct, searchCamion]);

  return (
    <div className="bg-white rounded col-span-3 row-span-4 py-2 overflow-x-auto">
      <div className="relative overflow-x-auto mt-3">
        <div className="mb-4 flex gap-4 items-center justify-center">
          {/* Product Input with Suggestions */}
          <input
            list="productSuggestions"
            placeholder="بحث عن منتج..."
            className="border p-2 outline-none"
            type="text"
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
          />
          <datalist id="productSuggestions">
            {productSuggestions.map((productName, index) => (
              <option key={index} value={productName} />
            ))}
          </datalist>

          {/* Camion Input */}
          <input
            placeholder="بحث عن عامل..."
            className="border p-2 outline-none"
            type="text"
            value={searchCamion}
            onChange={(e) => setSearchCamion(e.target.value)}
          />
        </div>
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                العامل
              </th>
              <th scope="col" className="px-6 py-3">
                المنتج
              </th>
              <th scope="col" className="px-6 py-3">
                الكمية المشحونة
              </th>
              <th scope="col" className="px-6 py-3">
                الكمية الباقية
              </th>
              <th scope="col" className="px-6 py-3">
                الكمية المباعة
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((e) => {
                return (
                  <tr key={e.id} className="bg-white border-b">
                    <td className="px-4 py-4">{e.camion}</td>
                    <td className="px-4 py-4">{e.produit}</td>
                    <td className="px-4 py-4">{e.qte}</td>
                    <td className="px-4 py-4">{e.qterestant}</td>
                    <td className="px-4 py-4">{e.qteacheter}</td>
                    <td className="px-4 py-4">
                    <a
                      onClick={() => deletecamion(e.id)}
                      href="#"
                      className="font-medium bg-red-100 rounded py-1 px-2 text-red-600  hover:underline"
                    >
                      حذف
                    </a>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No results found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CamionList;
