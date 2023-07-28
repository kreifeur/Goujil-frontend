import React, { useState, useEffect } from "react";
import axios from "axios";

const Buy = () => {
  const [fournisseur, setFournisseur] = useState("");
  const [total, setTotal] = useState(0);
  const [versement, setVersement] = useState(0);
  const [achat, setAchat] = useState({});
  const [achats, setAchats] = useState([]);
  const [productSuggestions, setProductSuggestions] = useState([]);
  const [fournisseurSuggestions, setFournisseurSuggestions] = useState([]);

  useEffect(() => {
    axios.get("https://kreifeur-goujil.onrender.com/products").then((res) => {
      const productNames = res.data.map((product) => product.name);
      setProductSuggestions(productNames);
    });

    axios.get("https://kreifeur-goujil.onrender.com/suppliers").then((res) => {
      const fournisseurNames = res.data.map((fournisseur) => fournisseur.name);
      setFournisseurSuggestions(fournisseurNames);
    });
  }, []);

  const senddata = (e) => {
    e.preventDefault();
    const newAchat = {
      ...achat,
      ijmali: achat.price * achat.qte,
    };
    setAchat(newAchat);
    setAchats((prevAchats) => [...prevAchats, newAchat]);
    setTotal((prevTotal) => prevTotal + newAchat.ijmali);
  };

  const buyachats = (e) => {
    e.preventDefault();
    axios
      .post("https://kreifeur-goujil.onrender.com/addachat", {
        fournisseur: fournisseur,
        total: total,
        versement: versement,
        diff: total - versement,
      })
      .then((res) => console.log("res"));

    achats.map((item) => {
      axios
        .get(`https://kreifeur-goujil.onrender.com/product/${item.product}`)
        .then((res) =>
          axios.put(`https://kreifeur-goujil.onrender.com/${res.data[0].id}`, {
            ...res.data[0],
            ...{ qte: +item.qte + +res.data[0].qte },
          })
        );
      alert('تمت العملية')
    });

    axios
      .get(`https://kreifeur-goujil.onrender.com/supplier/${fournisseur}`)
      .then((res) =>
        axios
          .put(`https://kreifeur-goujil.onrender.com/supplier/${res.data[0].id}`, {
            ...res.data[0],
            ...{ gain: +res.data[0].gain + +(total - versement) },
          })
          .then((x) => console.log(x))
      );
  };

  return (
    <div className="h-[85%] bg-gray-100 p-5 grid gap-5 grid-rows-4 grid-cols-5">
      <div className="bg-white rounded col-span-2 row-span-3 p-2 flex flex-col justify-around">
        <form
          action=""
          className="flex flex-col justify-between h-[80%] mt-2 items-center"
        >
          <input
            onChange={(e) => setAchat({ ...achat, product: e.target.value })}
            placeholder="المنتج"
            className="p-2 border outline-none w-[100%]"
            type="text"
            name=""
            id=""
            list="productSuggestions" // Link the input to the datalist
          />

          {/* Datalist element with product suggestions */}
          <datalist
            id="productSuggestions"
            className="absolute left-0 top-[100%] bg-white border border-gray-300 rounded-md w-[100%]"
          >
            {productSuggestions.map((productName, index) => (
              <option key={index} value={productName} />
            ))}
          </datalist>

          <input
            onChange={(e) => setAchat({ ...achat, price: e.target.value })}
            placeholder="السعر"
            className="p-2 border outline-none w-[100%]"
            type="text"
            name=""
            id=""
          />
          <input
            onChange={(e) => setAchat({ ...achat, qte: e.target.value })}
            placeholder="الكمية"
            className="p-2 border outline-none w-[100%]"
            type="text"
            name=""
            id=""
          />
          <input
            onClick={senddata}
            className="p-2 border outline-none w-[100%] rounded font-bold bg-black text-white cursor-pointer"
            type="submit"
            value="اضافة الى المشتريات"
          />
        </form>
      </div>

      <div className="bg-white rounded col-span-3 row-span-4 p-2 flex flex-col justify-around">
        <div className="h-[90%]">
          <div className="flex justify-between h-[10%] items-center">
            <div>قائمة المشتريات </div>
            <div className="font-bold">المجموع : {total}</div>
          </div>
          <div className="p-3  overflow-y-scroll h-[80%]">
            {achats.map((e, index) => (
              <div key={index} className="flex justify-between w-[100%]">
                <div className="w-[40%] ">{e.product}</div>
                <div className="w-[30%] text-center ">{e.qte}</div>
                <div className="w-[30%] text-center">{e.price}</div>
                <div className="w-[30%] text-center">{e.ijmali}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-between bg-red-200 p-2">
            <div>المورد : {fournisseur}</div>
            <div>تم دفع : {versement}</div>
            <div>الفرق : {total - versement}</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded col-span-2 row-span-1 p-2 flex flex-col justify-around">
        <div className="p-1 flex gap-2">
          <input
            onChange={(e) => setFournisseur(e.target.value)}
            placeholder="المورد"
            className="p-2 border outline-none w-[100%]"
            type="text"
            name=""
            id=""
            list="fournisseurSuggestions" // Link the input to the datalist
          />

          {/* Datalist element with fournisseur suggestions */}
          <datalist
            id="fournisseurSuggestions"
            className="absolute left-0 top-[100%] bg-white border border-gray-300 rounded-md w-[100%]"
          >
            {fournisseurSuggestions.map((fournisseurName, index) => (
              <option key={index} value={fournisseurName} />
            ))}
          </datalist>

          <input
            onChange={(e) => setVersement(e.target.value)}
            placeholder="تم دفع"
            className="p-2 border outline-none w-[100%]"
            type="number"
            name=""
            id=""
          />
          <input
            onClick={buyachats}
            className="p-2 border outline-none w-[100%] rounded font-bold bg-black text-white cursor-pointer"
            type="submit"
            value="حفظ"
          />
        </div>
      </div>
    </div>
  );
};

export default Buy;
