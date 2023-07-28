const PurchasesTotal = () => {
  return (
    <div className="bg-white rounded col-span-3 row-span-2 p-2 flex flex-col justify-around">
      <div className="h-[50%] bg-black rounded text-white text-6xl p-2 flex justify-between ">
        <span className="font-mono">20000</span>
        <span className="font-mono">DA</span>
      </div>
      <div className="flex h-[30%] justify-between p-2">
        <button className="w-[30%] py-2 bg-red-700  text-white rounded">
          Due
        </button>
        <button className="w-[30%] py-2 bg-black text-white rounded">
          Reset
        </button>
        <button className="w-[30%] py-2 bg-green-700 text-white rounded">
          Paid
        </button>
      </div>
    </div>
  );
};

export default PurchasesTotal;
