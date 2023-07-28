import { BiSearch ,BiMessageDetail } from "react-icons/bi";
import {IoIosNotificationsOutline ,IoIosNotifications} from 'react-icons/io'
import {AiOutlineMail} from 'react-icons/ai'

const Header = () => {
  return (
    <div className="w-[100%] h-[9%] bg-white flex justify-between items-center px-5">
      <div className="flex items-center bg-gray-100 px-2 rounded-lg">
        
      </div>
      <div className="flex gap-5 items-center">
        <div><BiMessageDetail/></div>
        <div><IoIosNotifications/></div>
        <div><AiOutlineMail/></div>
        <div className="w-[2px] h-[25px] bg-black "></div>
        <div>KREIFEUR Ibrahim</div>
        <div className="w-[28px] h-[28px] bg-black rounded-[50%]"></div>
      </div>
    </div>
  );
};

export default Header;
