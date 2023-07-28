const PurchasesForm = () => {
    return ( <div className="bg-white rounded col-span-3 row-span-2 p-2">
        <form className="flex flex-col justify-around h-[100%] ">
        <input className="p-2 border outline-none rounded h-[30%] text-xl" placeholder="Product name" type="text" name="" id="" />
        <input className="p-2 border outline-none rounded h-[30%] text-xl" placeholder="Quantity" type="number" />
        <input className=" cursor-pointer p-2 border outline-none rounded bg-black w-[50%] font-bold text-white" type="submit" value="Add to purchases list" />
        </form>
    </div> );
}
 
export default PurchasesForm;