import axios from "axios";
import { useEffect, useState } from "react";
import Expense from "./dashboardGrid/Expense";
import Invoices from "./dashboardGrid/Invoices";
import Todo from "./dashboardGrid/Todo";
import Topsell from "./dashboardGrid/Topsell";
import Total from "./dashboardGrid/Total";

const Dashboard = () => {
  const [ca , setCa]= useState(0)
  useEffect(()=>{
    axios.get("https://kreifeur-goujil.onrender.com/CA").then((res)=>setCa(res.data))
  },[])
  return (
    <div className="h-[85%] bg-gray-100 p-5 grid gap-5 grid-rows-4  grid-cols-4">
      <Total titre='قيمة السلع الموجودة في المستودع' chifre={ca.CA} pourcentage='4.5'  color='blue' bgcolor='bg-white'/>
      <Total titre='الديون على الزبائن' chifre={ca.credit_clients} pourcentage='4.5' color='green' bgcolor='bg-white'/>
      <Total titre='الديون علي من الزبائن' chifre={ca.credit_over_clients} pourcentage='4.5' color='green' bgcolor='bg-white'/>
      <Total titre='الديون علي من الموردين' chifre={ca.credit_supp} pourcentage='4.5' color='green' bgcolor='bg-white'/>
      <Total titre='عدد انواع السلع' chifre={ca.numberofproducts} pourcentage='4.5' color='orange' bgcolor='bg-orange-300'/>
      <Total titre='اجمالي الشراء' chifre={ca.total_achats} pourcentage='4.5' color='green' bgcolor='bg-white'/>
      <Total titre='المبلغ المدفوع' chifre={ca.total_versement}  pourcentage='4.5' color='green' bgcolor='bg-green-300'/>
      <Total titre='الفائدة' chifre={ca.benifits} pourcentage='4.5' color='orange' bgcolor='bg-orange-300'/>
    </div>
  );
};

export default Dashboard;
