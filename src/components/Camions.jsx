import CamionsForm from "./CamionsGrid/CamionsForm";
import CamionList from "./CamionsGrid/CamionsList";

const Camions = () => {
    return ( <div className="h-[85%] bg-gray-100 p-5 grid gap-5 grid-rows-4  grid-cols-4">
        <CamionsForm/>
        <CamionList/>
    </div> );
}
 
export default Camions;