const Invoices = () => {
  return (
    <div className="bg-white rounded col-span-2 row-span-2 py-2 flex flex-col gap-1">
      <div className="px-2">Invoices</div>

      <div className="relative text-sm overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Customer
              </th>
              <th scope="col" className="px-6 py-3">
                date
              </th>
              <th scope="col" className="px-6 py-3">
                amount
              </th>
              <th scope="col" className="px-6 py-3">
                status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                10
              </th>
              <td className="px-6 py-4">Kreifeur ayoub</td>
              <td className="px-6 py-4">21-02-2023</td>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">
                {" "}
                <div className="p-1 bg-green-100 text-center rounded text-green-700 font-bold">
                  Paid
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;
