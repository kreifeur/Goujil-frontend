import { useState } from "react";
import axios from "axios";

const CustomerForm = () => {
  const initialCustomerState = {
    ref: '',
    name: "",
    phone: '',
    productslist: "",
    adress: "",
    taamol: "",
    gain: 0,
  };

  const [customer, setCustomer] = useState(initialCustomerState);

  const senddata = (e) => {
    e.preventDefault();
    axios
      .post("https://kreifeur-goujil.onrender.com/addcustomer", customer)
      .then((res) => {
        console.log(res);
        // Clear the input fields after successful submission
        setCustomer(initialCustomerState);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-white rounded col-span-1 row-span-4 p-2 flex justify-around flex-col ">
      <div className="font-bold text-lg">اضافة زبون جديد</div>
      <form
        action=""
        className="flex flex-col justify-between h-[100%]  mt-2 items-center"
      >
        <input
          onChange={(e) => setCustomer({ ...customer, ref: e.target.value })}
          value={customer.ref}
          placeholder="id"
          className="p-2 border outline-none w-[100%]"
          type="text"
          name=""
          id=""
        />

        <input
          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
          value={customer.name}
          placeholder="الاسم"
          className="p-2 border outline-none w-[100%]"
          type="text"
          name=""
          id=""
        />
        <input
          onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
          value={customer.phone}
          placeholder="رقم الهاتف"
          className="p-2 border outline-none w-[100%]"
          type="number"
        />

        <input
          onChange={(e) => setCustomer({ ...customer, adress: e.target.value })}
          value={customer.adress}
          placeholder="العنوان"
          className="p-2 border outline-none w-[100%]"
          type="text"
        />

        <input
          onChange={(e) =>
            setCustomer({ ...customer, productslist: e.target.value })
          }
          value={customer.productslist}
          placeholder="نوع السلع"
          className="p-2 border outline-none w-[100%]"
          type="text"
        />

        <input
          onChange={(e) => setCustomer({ ...customer, taamol: e.target.value })}
          value={customer.taamol}
          placeholder="اخر تعامل"
          className="p-2 border outline-none w-[100%]"
          type="date"
        />

        <input
          onChange={(e) => setCustomer({ ...customer, gain: e.target.value })}
          value={customer.gain}
          placeholder="الديون"
          className="p-2 border outline-none w-[100%]"
          type="text"
        />
        <input
          onClick={senddata}
          className="p-2 border outline-none w-[100%] rounded font-bold bg-black text-white cursor-pointer"
          type="submit"
          value="اضافة الزبون"
        />
      </form>
    </div>
  );
};

export default CustomerForm;
