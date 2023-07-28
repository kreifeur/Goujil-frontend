const Todo = () => {
  return (
    <div className="bg-white rounded row-span-2 p-2">
      <div>Todo list</div>
      <ul className="h-[90%] overflow-y-auto">
        <li className="bg-red-100 px-4 py-1 mt-2 rounded">
          <div>20 jul,2023</div>
          <div className="text-sm font-light">Buy new products</div>
        </li>

        <li className="bg-gray-100 px-4 py-1 mt-2 rounded">
          <div>20 jul,2023</div>
          <div className="text-sm font-light">Buy new products</div>
        </li>
        
      </ul>
    </div>
  );
};

export default Todo;
