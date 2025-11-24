import CartItem from "./CartItem";

const data = [
  {
    id: 1,
    name: "Samsung Galaxy S23 Ultra",
    color: "Black",
    qty: 2,
    price: 1049.99,
    image: "your-image-path",
  },
  // add more items...
];

export default function CartItemList() {
  return (
    <div className="space-y-4">
      {data.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
