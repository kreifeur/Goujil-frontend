import { useState } from "react";

const Sellers = () => {
  const [camion, setCamion] = useState("");
  const [sela, setSela] = useState({});
  return (
    <div className="h-[85%] bg-gray-100 p-5 grid gap-5 grid-rows-4  grid-cols-4">
      <div className="bg-white rounded col-span-1 row-span-4 p-2 flex justify-around flex-col">
        <input
          onChange={(e) => setCamion(e.target.value)}
          placeholder="العامل"
          className="p-2 border outline-none w-[100%]"
          type="text"
          name=""
          id=""
        />
        <input
          onChange={(e) => setSela({ ...sela, name: e.target.value })}
          placeholder="المنتج"
          className="p-2 border outline-none w-[100%]"
          type="text"
          name=""
          id=""
        />
        <input
          onChange={(e) => setSela({ ...sela, qte: e.target.value })}
          placeholder="الكمية"
          className="p-2 border outline-none w-[100%]"
          type="text"
          name=""
          id=""
        />

        <input
          className="p-2 bg-black text-white cursor-pointer outline-none w-[100%]"
          value={'تاكيد'}
          type="submit"
          name=""
          id=""
        />
      </div>

      <div className="bg-white rounded col-span-3 row-span-4 p-2 flex justify-around flex-col"></div>
    </div>
  );
};

export default Sellers;
