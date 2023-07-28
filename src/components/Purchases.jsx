import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Purchases = () => {
  const [ready, setReady] = useState(10);
  const [ok, setOk] = useState(10);
  const [item, setItem] = useState(10);
  const [sum, setSum] = useState(0);
  const [data, setData] = useState([]);
  const [purchase, setPurchase] = useState({
    name: "",
    qte: 1,
    priceeach: 10,
  });

  const addpurchase = (e) => {
    e.preventDefault();
    get_data().then((res) => {
      setItem(res);
      setOk(ok - 1);
    });
  };

  useEffect(() => {
    setPurchase({ ...purchase, priceeach: item });
    setReady(ready - 1);
  }, [ok]);

  useEffect(() => {
    if (purchase.name != "") {
      setData(data.concat(purchase));
      setSum(+sum + +purchase.qte * +purchase.priceeach);
    }
    setPurchase({ ...purchase, qte: 1, name: "" });
  }, [ready]);

  //get the data (the price of the item)
  async function get_data() {
    let dataitem = await axios.get(
      `http://127.0.0.1:3000/product/${purchase.name}`
    );
    return dataitem.data[0].price;
  }

  const stockPurchase=()=>{
    axios.post('http://127.0.0.1:3000/addpurchases',{customerId:'mohamed ben moussa ',total:sum,achats:data}).then((res)=> alert('purchases added succesfully'))
  }

  return (
    /*------------------------------------------- Total ---------------------------------------------------------*/
    <div className="h-[85%] bg-gray-100 p-5 grid gap-5 grid-rows-4  grid-cols-5">
      <div className="bg-white rounded col-span-3 row-span-2 p-2 flex flex-col justify-around">
        <div className="h-[50%] bg-black rounded text-white text-6xl p-2 flex justify-between ">
          <span className="font-mono">{sum}</span>
          <span className="font-mono">DA</span>
        </div>
        <div className="flex h-[30%] justify-between p-2">
          <button className="w-[30%] py-2 bg-red-700  text-white rounded">
            Due
          </button>
          <button
            onClick={() => {
              setData([]);
              setSum(0);
            }}
            className="w-[30%] py-2 bg-black text-white rounded"
          >
            Reset
          </button>
          <button
            onClick={stockPurchase}
            className="w-[30%] py-2 bg-green-700 text-white rounded"
          >
            Paid
          </button>
        </div>
      </div>
      {/*------------------------------------------  list ----------------------------------------------*/}
      <div className="bg-white rounded col-span-2 row-span-4 p-2 flex flex-col gap-2">
        <div>Purches List</div>
        <ul className="overflow-x-auto h-[100%]">
          <li className="grid grid-cols-5 gap-2 bg-gray-100 p-2 rounded">
            <div>Product</div>
            <div>Price each</div>
            <div>Quantity</div>
            <div>Total</div>
            <div></div>
          </li>
          {data == ""
            ? null
            : data.map((e, index) => {
                return (
                  <li
                    key={index}
                    className="grid grid-cols-5 gap-2 mt-1 bg-green-100 p-2 rounded"
                  >
                    <div>{e.name}</div>
                    <div>{e.priceeach}</div>
                    <div>{e.qte}</div>
                    <div>{e.priceeach * e.qte}</div>
                    <div
                      onClick={() => {
                        let x = data;
                        let y = x.splice(index, 1);
                        setSum(+sum - +y[0].qte * +y[0].priceeach);
                        setPurchase({ ...purchase, qte: 1 });
                        setData(x);
                      }}
                      className="cursor-pointer"
                    >
                      X
                    </div>
                  </li>
                );
              })}
        </ul>
      </div>
      {/* ----------------------------form ------------------------------------------*/}
      <div className="bg-white rounded col-span-3 row-span-2 p-2">
        <form className="flex flex-col justify-around h-[100%] ">
          <input
            value={purchase.name}
            onChange={(e) => setPurchase({ ...purchase, name: e.target.value })}
            className="p-2 border outline-none rounded h-[20%] text-md"
            placeholder="Product name"
            type="text"
            name=""
            id=""
          />
          <input
            value={purchase.qte}
            onChange={(e) => setPurchase({ ...purchase, qte: e.target.value })}
            className="p-2 border outline-none rounded h-[20%] text-md"
            placeholder="Quantity"
            type="number"
          />
          <input
            onClick={addpurchase}
            className=" cursor-pointer p-2 border outline-none rounded bg-black w-[50%] font-bold text-white"
            type="submit"
            value="Add to purchases list"
          />
        </form>
      </div>
    </div>
  );
};

export default Purchases;
