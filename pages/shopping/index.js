import React, { useEffect, useState } from "react";

const ShoppingPage = () => {
  const [shoppingData, setShoppingData] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://nextjs-pagerouter-default-rtdb.europe-west1.firebasedatabase.app/shopping.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const transformedShopping = [];
        for (const key in data) {
          transformedShopping.push({
            id: key,
            product: data[key].product,
            quantity: data[key].quantity,
          });
        }
        setShoppingData(transformedShopping);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!shoppingData) {
    return <div>No Data</div>;
  }
  return (
    <div>
      <h1>Shopping Page</h1>
      <ul>
        {shoppingData.map((item) => {
          return (
            <li key={item.id}>
              name of product{item.product} and quantity {item.quantity}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShoppingPage;
