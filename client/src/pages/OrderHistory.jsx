import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../utils/queries";

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <div className="order-history-container my-1">
      <Link to="/" className="back-link">
        ← Back to Products
      </Link>

      {user ? (
        <>
          <h2 className="order-history-title">Order History for {user.firstName} {user.lastName}</h2>
          {user.orders.map((order) => (
            <div key={order._id} className="order-history-entry my-2">
              <h3 className="order-date">{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</h3>
              <div className="product-list flex-row">
                {order.products.map(({ _id, image, name, price }, index) => (
                  <div key={index} className="product-card px-1 py-1">
                    <Link to={`/products/${_id}`} className="product-link">
                      <img
                        alt={name}
                        src={`/images/${image}`}
                      />
                      <p className="product-name">{name}</p>
                    </Link>
                    <div className="product-price">
                      <span>${price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
}

export default OrderHistory;
