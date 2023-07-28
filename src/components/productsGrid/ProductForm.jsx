import { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const initialProductState = {
    ref: '',
    name: "",
    price1: '',
    price2: '',
    price3: '',
    qte: '',
    date: "",
  };

  const [product, setProduct] = useState(initialProductState);

  const senddata = (e) => {
    e.preventDefault();
    axios
      .post("https://kreifeur-goujil.onrender.com/addproduct", product)
      .then((res) => {
        console.log(res);
        // Clear the input fields after successful submission
        setProduct(initialProductState);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-white rounded col-span-1 row-span-4 p-2 flex justify-around flex-col ">
      <div className="font-bold text-lg text-right">اضافة منتج جديد</div>
      <form
        action=""
        className="flex flex-col justify-between h-[80%]  mt-2 items-center"
      >
        <input
          onChange={(e) => setProduct({ ...product, ref: e.target.value })}
          value={product.ref}
          placeholder="Id"
          className="p-2 border outline-none w-[100%]"
          type="text"
          name=""
          id=""
        />

        <input
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          value={product.name}
          placeholder="اسم المنتج"
          className="p-2 border outline-none w-[100%]"
          type="text"
          name=""
          id=""
        />

        <input
          onChange={(e) => setProduct({ ...product, qte: e.target.value })}
          value={product.qte}
          placeholder="الكمية"
          className="p-2 border outline-none w-[100%]"
          type="number"
        />

        <input
          onChange={(e) => setProduct({ ...product, price1: e.target.value })}
          value={product.price1}
          placeholder="السعر1"
          className="p-2 border outline-none w-[100%]"
          type="number"
        />

        <input
          onChange={(e) => setProduct({ ...product, price2: e.target.value })}
          value={product.price2}
          placeholder="السعر2"
          className="p-2 border outline-none w-[100%]"
          type="number"
        />

        <input
          onChange={(e) => setProduct({ ...product, price3: e.target.value })}
          value={product.price3}
          placeholder="السعر3"
          className="p-2 border outline-none w-[100%]"
          type="number"
        />

        <input
          onChange={(e) => setProduct({ ...product, date: e.target.value })}
          value={product.date}
          placeholder="سعر الشراء"
          className="p-2 border outline-none w-[100%]"
          type="number"
        />
        <input
          onClick={senddata}
          className="p-2 border outline-none w-[100%] rounded font-bold bg-black text-white cursor-pointer"
          type="submit"
          value="اضافة المنتج"
        />
      </form>
    </div>
  );
};

export default ProductForm;
