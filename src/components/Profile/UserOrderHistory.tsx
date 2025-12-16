import React from "react";
import Button from "../common/Button";

type OrderStatus = "Pending" | "Completed" | "Cancelled";

interface Order {
  id: string;
  date: string;
  total: number;
  status: OrderStatus;
  items: number;
}

const mockOrders: Order[] = [
  {
    id: "ORD-1001",
    date: "2024-10-12",
    total: 129.99,
    status: "Completed",
    items: 3,
  },
  {
    id: "ORD-1002",
    date: "2024-11-05",
    total: 59.5,
    status: "Pending",
    items: 1,
  },
  {
    id: "ORD-1003",
    date: "2024-12-01",
    total: 249.0,
    status: "Cancelled",
    items: 5,
  },
];

const statusStyles: Record<OrderStatus, string> = {
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-700",
};

const UserOrderHistory: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 pb-16 bg-gray-100">
      <div className="bg-white rounded-2xl border border-gray-300 shadow-sm p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Order History
          </h2>
          <span className="text-sm text-gray-500">
            {mockOrders.length} orders
          </span>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-gray-500 border-b">
              <tr>
                <th className="py-3">Order ID</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b last:border-none"
                >
                  <td className="py-4 font-medium">{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.items}</td>
                  <td>${order.total.toFixed(2)}</td>
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="text-right">
                    <Button
                      text="View"
                      disabled={false}
                      className="px-4 py-1 rounded-full text-sm bg-primary text-white"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {mockOrders.map((order) => (
            <div
              key={order.id}
              className="border border-gray-200 rounded-xl p-4"
            >
              <div className="flex justify-between mb-2">
                <p className="font-semibold">{order.id}</p>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${statusStyles[order.status]}`}
                >
                  {order.status}
                </span>
              </div>

              <p className="text-sm text-gray-500">
                Date: {order.date}
              </p>
              <p className="text-sm text-gray-500">
                Items: {order.items}
              </p>
              <p className="font-medium mt-1">
                Total: ${order.total.toFixed(2)}
              </p>

              <Button
                text="View Details"
                disabled={false}
                className="mt-3 w-full rounded-full bg-primary text-white py-2 text-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserOrderHistory;
