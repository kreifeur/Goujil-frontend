const PurchasesList = () => {
    return ( <div className="bg-white rounded col-span-2 row-span-4 p-2">
        <div>Purches List</div>
        <ul>
            <li className="grid grid-cols-5 gap-2 bg-gray-100 p-2 rounded">
                <div>Product</div>
                <div>Price each</div>
                <div>Quantity</div>
                <div>Total</div>
                <div></div>
            </li>

            <li className="grid grid-cols-5 gap-2 mt-1 bg-green-100 p-2 rounded">
                <div>isis</div>
                <div>50</div>
                <div>3</div>
                <div>150</div>
                <div className="cursor-pointer">X</div>
            </li>

            <li className="grid grid-cols-5 gap-2 mt-1 bg-green-100 p-2 rounded">
                <div>isis</div>
                <div>50</div>
                <div>3</div>
                <div>150</div>
                <div className="cursor-pointer">X</div>
            </li>
        </ul>
    </div> );
}
 
export default PurchasesList;