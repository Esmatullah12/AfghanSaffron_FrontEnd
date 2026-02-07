import React, { useEffect } from "react";
import { Button } from "../../../components/ui";
import api from "../../../api/axiosInstance";

type OrderStatus = "Pending" | "Completed" | "Cancelled";

interface Order {
  id: number;
  orderDate: string;
  totalItemsCount: number;
  totalPrice: number;
  status: OrderStatus;
}

const statusStyles: Record<OrderStatus, string> = {
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-700",
};

const UserOrderHistory: React.FC = () => {
  const [userOrders, setUserOrders] = React.useState<Order[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  useEffect(() => {
      const fetchUserOrders = async () => {
        setLoading(true);
        const payload = {
          pageIndex: 0,
          pageSize: 10,
          searchBy: ""
        };
        try{
          const res = await api.post("api/Order/getUserOrdersList", payload);
          setUserOrders(res.data.data || res.data);
        }catch(err){
          console.log("error fetching products", err);
        }finally{
          setLoading(false);
        }
      };
      fetchUserOrders();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading Your Orders...
      </div>
    );
  }

  return (
    <section id="order-history" className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-2xl border border-gray-200  p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 font-display text-primary">
              Order History
            </h2>
            <span className="text-sm text-gray-500">
              {userOrders.length} orders
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
              {userOrders.map((order) => (
                <div
                  key={order.id}
                  className="border border-gray-200 rounded-xl p-5 bg-white hover:shadow-md transition"
                >
                  <div className="grid grid-cols-6 items-center gap-4">
                    <div className="text-left font-medium">{order.id}</div>
                    <div className="text-gray-600 text-sm">{order.orderDate}</div>
                    <div className="font-bold text-lg text-primary">{order.totalItemsCount}</div>
                    <div className="font-bold text-secondary text-lg">
                      ${order.totalPrice}
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
            {userOrders.map((order) => (
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
                  Date: {order.orderDate}
                </p>
                <p className="text-sm text-gray-500">
                  Items: {order.totalItemsCount}
                </p>
                <p className="font-medium mt-1">
                  Total: ${order.totalPrice}
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
