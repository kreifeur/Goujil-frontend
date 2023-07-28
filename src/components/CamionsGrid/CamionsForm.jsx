import { useState, useEffect } from "react";
import axios from "axios";

const CamionsForm = () => {
  const [camion, setCamion] = useState("");
  const [sela, setSela] = useState({});
  const [productSuggestions, setProductSuggestions] = useState([]);

  useEffect(() => {
    axios.get("https://kreifeur-goujil.onrender.com/products").then((res) => {
      const productNames = res.data.map((product) => product.name);
      setProductSuggestions(productNames);
    });
  }, []);

  const senddata = (e) => {
    e.preventDefault();
    axios
      .post("https://kreifeur-goujil.onrender.com/addcharge", { ...sela, ...{ camion: camion } })
      .then((res) => {
        console.log(res);
        // Clear the input fields
        setCamion("");
        setSela({});
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-white rounded col-span-1 row-span-4 p-2 flex justify-around flex-col">
      {/* Camion Input */}
      <input
        onChange={(e) => setCamion(e.target.value)}
        value={camion}
        placeholder="العامل"
        className="p-2 border outline-none w-[100%]"
        type="text"
        name=""
        id=""
      />

      {/* Product Input with Suggestions */}
      <input
        list="productSuggestions"
        onChange={(e) => setSela({ ...sela, produit: e.target.value })}
        value={sela.produit || ""}
        placeholder="المنتج"
        className="p-2 border outline-none w-[100%]"
        type="text"
        name=""
        id=""
      />
      <datalist id="productSuggestions">
        {productSuggestions.map((productName, index) => (
          <option key={index} value={productName} />
        ))}
      </datalist>

      {/* Quantity Input */}
      <input
        onChange={(e) => setSela({ ...sela, qte: e.target.value })}
        value={sela.qte || ""}
        placeholder="الكمية"
        className="p-2 border outline-none w-[100%]"
        type="text"
        name=""
        id=""
      />

      {/* Submit Button */}
      <input
        onClick={senddata}
        className="p-2 bg-black text-white cursor-pointer outline-none w-[100%]"
        type="submit"
        value={"تاكيد"}
        name=""
        id=""
      />
    </div>
  );
};

export default CamionsForm;
