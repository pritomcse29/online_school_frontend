const OrderTable = ({ orders }) => {
  if (!orders?.length) return <p className="text-gray-400">No orders found.</p>;

  return (
    <div className="overflow-auto border rounded shadow-sm">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-2">Order ID</th>
            <th className="p-2">Student</th>
            <th className="p-2">Total</th>
            <th className="p-2">Status</th>
            <th className="p-2">Courses</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((o) => (
            <tr key={o.id} className="border-t hover:bg-gray-50">
              <td className="p-2 font-mono">{o.id.slice(0, 8)}</td>
              <td className="p-2">{o.student}</td>
              <td className="p-2">৳ {Number(o.total_price).toFixed(2)}</td>
              <td className="p-2">{o.status}</td>
              <td className="p-2">
                <ul className="list-disc ml-5">
                  {o.items.map((item) => (
                    <li key={item.id}>
                      {item.course_details?.name || "N/A"} — ৳ {item.price}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default OrderTable