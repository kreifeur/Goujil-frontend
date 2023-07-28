import { RiCoinsFill } from "react-icons/ri";
import { BsArrowUp } from "react-icons/bs";
const Total = (props) => {
  return (
    <div className={`${props.bgcolor} rounded p-2 flex justify-between flex-col `}>
      <div className="flex justify-between">
        <div>
          <div>{props.titre}</div>
          <span className="text-2xl font-bold">{props.chifre}</span>
        </div>
        <div className={`p-2 bg-${props.color}-100 w-[40px] h-[40px] flex items-center justify-center rounded-[50%] text-xl text-${props.color}-700`}>
          <RiCoinsFill />
        </div>
      </div>
      <div className="flex justify-between items-center"></div>
    </div>
  );
};

export default Total;
