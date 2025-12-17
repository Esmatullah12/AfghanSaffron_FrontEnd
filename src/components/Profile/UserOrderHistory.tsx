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
    <section className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl border border-gray-200  p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 font-display text-primary">
              Order History
            </h2>
            <span className="text-sm text-gray-500">
              {mockOrders.length} orders
            </span>
          </div>

          <div className="hidden md:block text-center">
            <div className="grid grid-cols-6 gap-4 px-5 py-3 mb-2 text-sm font-semibold text-gray-500">
              <div className="text-left">Order ID</div>
              <div>Date</div>
              <div>Items</div>
              <div>Total</div>
              <div>Status</div>
              <div className="text-right">Action</div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {mockOrders.map((order) => (
                <div
                  key={order.id}
                  className="border border-gray-200 rounded-xl p-5 bg-white hover:shadow-md transition"
                >
                  <div className="grid grid-cols-6 items-center gap-4">
                    <div className="text-left font-medium">{order.id}</div>
                    <div className="text-gray-600">{order.date}</div>
                    <div>{order.items}</div>
                    <div className="font-semibold">
                      ${order.total.toFixed(2)}
                    </div>
                    <div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[order.status]}`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div className="text-right">
                      <Button
                        text="View"
                        disabled={false}
                        className="px-4 py-1 rounded-full bg-primary text-white text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:hidden space-y-4">
            {mockOrders.map((order) => (
              <div
                key={order.id}
                className="border border-gray-200 rounded-xl p-4 bg-white"
              >
                <div className="flex justify-between items-center mb-2">
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
                  className="mt-4 w-full rounded-full bg-primary text-white py-2 text-sm"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserOrderHistory;
