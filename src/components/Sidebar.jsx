import { BsFillBarChartFill, BsBoxSeam, BsCart, BsTruck } from "react-icons/bs";
import { CiUser, CiBoxes, CiSettings } from "react-icons/ci";
import { FiUserCheck } from "react-icons/fi";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiFillSetting, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [vis , setVis]= useState('flex')
  const [wid , setWid]= useState('w-[10%]')
  const handle =()=>{
    vis== 'hidden' ? setVis('flex') : setVis('hidden')
    vis== 'hidden' ? setWid('w-[10%]') : setWid('w-[4%] items-center')
  }
  return (
    <div className={`${wid} h-[100%] bg-blue-700 text-white flex flex-col px-2 gap-10 py-5`}>
      <div className="text-xl font-bold flex justify-between items-center">
        <span className={`${vis}`}>STORE</span> 
        <span className="cursor-pointer" onClick={handle}>
        {vis== 'hidden' ?
          <AiOutlineMenu/> : <AiOutlineClose/>}
           </span>
      </div>
      <ul className={`${vis} flex-col gap-3`}>
        <Link className="flex items-center gap-2" to="/Goujil-frontend/dashboard">
          <BsFillBarChartFill />
          احصائيات
        </Link>
        <Link className="flex items-center gap-2" to="/Goujil-frontend/products">
          <BsBoxSeam />
          المنتجات
        </Link>
        <Link className="flex items-center gap-2" to="/Goujil-frontend/stocks">
          <CiBoxes />
          الشراء
        </Link>

        <Link className="flex items-center gap-2" to="/Goujil-frontend/historique">
          <CiBoxes />
          المشتريات
        </Link>

        <Link className="flex items-center gap-2" to="/Goujil-frontend/customers">
          <CiUser />
          الزبائن
        </Link>
        <Link className="flex items-center gap-2" to="/Goujil-frontend/suppliers">
          <BsTruck />
         الموردون
        </Link>

        <Link className="flex items-center gap-2" to="/Goujil-frontend/vents">
          <BsTruck />
          المبيعات
        </Link>
        <Link className="flex items-center gap-2" to="/Goujil-frontend/sell">
          <BsTruck />
          بيع
        </Link>
      </ul>
      <hr className={`${vis} border border-white `} />
      <ul  className={`${vis} flex flex-col gap-3`}>
        <Link className="flex items-center gap-2" to="/sellers">
          <FiUserCheck />
          الشحن اليومي
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
