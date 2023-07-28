import React, { useState, useEffect } from "react";
import axios from "axios";

const Sell = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState("");
  const [oneproduct, setOneProduct] = useState({});
  const [qte2, setQte] = useState("");
  const [sum, setSum] = useState(0);
  const [versement, setVersement] = useState(0);
  const [client, setClient] = useState("");
  const [vendeur, setVendeur] = useState("admin");
  const [selectedPriceOption, setSelectedPriceOption] = useState(3); // Default to product.price3
  const [productSuggestions, setProductSuggestions] = useState([]);
  const [clientSuggestions, setClientSuggestions] = useState([]);
  const [benefits, setBenefits] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://kreifeur-goujil.onrender.com/products");
      setProductSuggestions(response.data);
      // Calculate the initial benefits sum on page load
      calculateBenefitsSum(response.data);
    };
    fetchProducts();

    const fetchClients = async () => {
      const response = await axios.get("https://kreifeur-goujil.onrender.com/customers");
      setClientSuggestions(response.data);
    };
    fetchClients();
  }, []);

  useEffect(() => {
    const initialSum = products.reduce((total, product) => total + product.qte2 * product.price3, 0);
    setSum(initialSum);
    // Recalculate benefits sum whenever products or quantities change
    calculateBenefitsSum(products);
  }, [products]);

  const addproduct = async () => {
    await axios.get(`https://kreifeur-goujil.onrender.com/product/${product}`).then((res) => { 
      const newProduct = { ...res.data[0], qte2: qte2, price3: res.data[0][`price${selectedPriceOption}`] };
      setOneProduct(newProduct);
      setProducts((prevProducts) => {
        const updatedProducts = prevProducts.length === 0 ? [newProduct] : [...prevProducts, newProduct];
        const newSum = updatedProducts.reduce((total, product) => total + product.qte2 * product.price3, 0);
        setSum(newSum);
        return updatedProducts;
      });
    });
  };

  const deleteProduct = (index) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      const deletedProduct = updatedProducts.splice(index, 1)[0];
      const newSum = sum - deletedProduct.qte2 * deletedProduct.price3;
      setSum(newSum);
      return updatedProducts;
    });
  };

  const enregistrer = () => {
    alert('تمت العملية')
    products.map((e) => {
      axios.put(`https://kreifeur-goujil.onrender.com/${e.id}`, { ...e, ...{ qte: e.qte - e.qte2 } }).then((res) => console.log(res));
    });
    axios
      .post("https://kreifeur-goujil.onrender.com/addvente", {
        vendeur: vendeur,
        client: client,
        total: sum,
        versement: versement,
        diff: sum - versement,
        total_benefit: benefits ,
      })
      .then((res) => console.log(res));

    axios
      .get(`https://kreifeur-goujil.onrender.com/customer/${client}`)
      .then((res) =>
        axios.put(`https://kreifeur-goujil.onrender.com/customer/${res.data[0].id}`, {
          ...res.data[0],
          ...{ gain: +res.data[0].gain + +(sum - versement) },
        }).then((x) => console.log(x))
      );
  };

  // Function to calculate benefits for each product and update the state
  const calculateBenefitsSum = (productList) => {
    const newBenefits = productList.reduce((totalBenefits, product) => {
      const benefit = product.qte2 * (product.price3 - product.date);
      return totalBenefits + benefit;
    }, 0);
    setBenefits(newBenefits);
  };

  return (
    <div className="h-[85%] bg-gray-100 p-5 flex">
      <div className="py-2 overflow-x-auto bg-white rounded flex-grow">
        <div className="flex flex-col justify-center gap-2 items-center h-[100%]">
          {/* Product Input with Suggestions */}
          <input
            list="productSuggestions"
            placeholder="المنتج"
            className="border p-2 w-[90%] outline-none"
            onChange={(e) => setProduct(e.target.value)}
            type="text"
          />
          <datalist id="productSuggestions">
            {productSuggestions.map((suggestion) => (
              <option key={suggestion.id} value={suggestion.name} />
            ))}
          </datalist>

          <input
            placeholder="الكمية"
            className="border p-2 w-[90%] outline-none"
            onChange={(e) => setQte(e.target.value)}
            type="text"
          />

          <select
            className="border p-2 w-[90%] outline-none"
            onChange={(e) => setSelectedPriceOption(Number(e.target.value))}
            defaultValue={3}
          >
            <option value={1}>السعر1</option>
            <option value={2}>السعر2</option>
            <option value={3}>السعر3</option>
          </select>

          <input
            className="bg-black text-white p-2 outline-none w-[90%] cursor-pointer"
            onClick={addproduct}
            value="اضافة"
            type="submit"
          />

          <div className="w-[90%] flex flex-col gap-3 items-center p-2 bg-gray-100">
            <div className="font-bold w-[20%] text-center">المجموع:{sum}</div>
            {/* Client Input with Suggestions */}
            <input
              list="clientSuggestions"
              placeholder="الزبون"
              className="border p-2 w-[100%] outline-none"
              onChange={(e) => setClient(e.target.value)}
              type="text"
            />
            <datalist id="clientSuggestions">
              {clientSuggestions.map((suggestion) => (
                <option key={suggestion.id} value={suggestion.name} />
              ))}
            </datalist>

            <input
              placeholder="تم دفع"
              className="border p-2 w-[100%] outline-none"
              onChange={(e) => setVersement(e.target.value)}
              type="number"
            />
          </div>

          <input value={'تاكيد'} className="bg-black text-white p-2 outline-none w-[90%] cursor-pointer" onClick={enregistrer} type="submit" />
        </div>
      </div>
      <div className="py-2 bg-white rounded flex-shrink-0 w-[40%]">
        <div className="p-2  h-[100%] overflow-auto ]">
          {products.map((e, index) => {
            return (
              <div className="flex justify-between items-center border-b py-2" key={index}>
                  <div>{e.name}</div>
                  <div>{e.price3}</div>
                  <div>{e.qte2}</div>
                  <div>{e.qte2 * e.price3}</div>
                <button className="bg-red-600 p-1 rounded text-white cursor-pointer" onClick={() => deleteProduct(index)}>
                  X
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sell;
