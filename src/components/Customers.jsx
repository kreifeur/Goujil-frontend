import CustomerForm from "./CustomersGrid/CustomerForm";
import CustomersList from "./CustomersGrid/CustomersList";

const Customers = () => {
    return ( <div className="h-[85%] bg-gray-100 p-5 grid gap-5 grid-rows-4  grid-cols-5">
        <CustomersList/>
        <CustomerForm/>
    </div> );
}
 
export default Customers;