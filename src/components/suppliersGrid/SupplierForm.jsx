import { useState } from "react";
import axios from "axios";

const SupplierForm = () => {
  const initialSupplierState = {
    ref: '',
    name: "",
    phone: '',
    productslist: "",
    adress: "",
    taamol: "",
    gain: 0,
  };

  const [supplier, setSupplier] = useState(initialSupplierState);

  const senddata = (e) => {
    e.preventDefault();
    axios
      .post("https://kreifeur-goujil.onrender.com/addsupplier", supplier)
      .then((res) => {
        console.log(res);
        // Clear the input fields after successful submission
        setSupplier(initialSupplierState);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-white rounded col-span-1 row-span-4 p-2 flex justify-around flex-col ">
      <div className="font-bold text-lg">اضافة مورد جديد</div>
      <form
        action=""
        className="flex flex-col justify-between h-[80%]  mt-2 items-center"
      >
        <input
          onChange={(e) => setSupplier({ ...supplier, ref: e.target.value })}
          value={supplier.ref}
          placeholder="id"
          className="p-2 border outline-none w-[100%]"
          type="text"
          name=""
          id=""
        />
        <input
          onChange={(e) => setSupplier({ ...supplier, name: e.target.value })}
          value={supplier.name}
          placeholder="الاسم"
          className="p-2 border outline-none w-[100%]"
          type="text"
          name=""
          id=""
        />
        <input
          onChange={(e) => setSupplier({ ...supplier, phone: e.target.value })}
          value={supplier.phone}
          placeholder="رقم الهاتف"
          className="p-2 border outline-none w-[100%]"
          type="number"
        />
        <input
          onChange={(e) =>
            setSupplier({ ...supplier, productslist: e.target.value })
          }
          value={supplier.productslist}
          placeholder="نوع السلع"
          className="p-2 border outline-none w-[100%]"
          type="text"
        />

        <input
          onChange={(e) =>
            setSupplier({ ...supplier, adress: e.target.value })
          }
          value={supplier.adress}
          placeholder="العنوان"
          className="p-2 border outline-none w-[100%]"
          type="text"
        />

        <input
          onChange={(e) =>
            setSupplier({ ...supplier, taamol: e.target.value })
          }
          value={supplier.taamol}
          placeholder="اخر تعامل"
          className="p-2 border outline-none w-[100%]"
          type="text"
        />

        <input
          onChange={(e) => setSupplier({ ...supplier, gain: e.target.value })}
          value={supplier.gain}
          placeholder="الديون"
          className="p-2 border outline-none w-[100%]"
          type="text"
        />
        <input
          onClick={senddata}
          className="p-2 border outline-none w-[100%] rounded font-bold bg-black text-white cursor-pointer"
          type="submit"
          value="اضافة مورد"
        />
      </form>
    </div>
  );
};

export default SupplierForm;
