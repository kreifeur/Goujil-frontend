import SupplierForm from "./suppliersGrid/SupplierForm";
import SuppliersList from "./suppliersGrid/SuppliersList";

const Suppliers = () => {
    return ( <div className="h-[85%] bg-gray-100 p-5 grid gap-5 grid-rows-4  grid-cols-5">
        <SuppliersList/>
        <SupplierForm/>
    </div> );
}
 
export default Suppliers;