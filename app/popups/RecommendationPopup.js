import React, { useEffect, useState } from "react";
import useItem from "@/hooks/useItem";
import useDeal from "@/hooks/useDeal";
import Link from "next/link";
import "./RecomandationPopup.css";
function getRandom(arr, n) {
  if (!arr || arr.length === 0) return [];
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

const RecommendationPopup = ({ onClose }) => {
  const { items, fetchItems, itemLoading } = useItem();
  const { deals, fetchDeals, dealLoading } = useDeal();

  const [showType, setShowType] = useState("items");
  const [randomItems, setRandomItems] = useState([]);
  const [randomDeals, setRandomDeals] = useState([]);

  useEffect(() => {
    fetchItems();
    fetchDeals();
  }, []);

  useEffect(() => {
    if (items && items.length > 0) setRandomItems(getRandom(items, 5));
    if (deals && deals.length > 0) setRandomDeals(getRandom(deals, 5));
  }, [items, deals]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: 32,
          borderRadius: 8,
          minWidth: 350,
          maxWidth: 500,
        }}
      >
        <h4>Recommended For You</h4>
        {/* <div
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 20,
            justifyContent: "center",
          }}
        >
          <button
            className={`theme-btn ${showType === "items" ? "active" : ""}`}
            onClick={() => setShowType("items")}
          >
            Items
          </button>
          <button
            className={`theme-btn ${showType === "deals" ? "active" : ""}`}
            onClick={() => setShowType("deals")}
          >
            Deals
          </button>
        </div> */}
        <div>
          {/* {showType === "items" && ( */}
            <div>
              {itemLoading ? (
                <p>Loading items...</p>
              ) : (
                <ul>
                  {randomItems.map((item) => (
                    <li
                      key={item.itemId}
                      style={{
                        marginBottom: 6,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{
                          width: 50,
                          height: 50,
                          objectFit: "cover",
                          borderRadius: 4,
                          marginRight: 10,
                        }}
                      />
                      <div>
                        <strong>
                          <Link
                            href={{
                              pathname: "/shop-single",
                              query: { item: item.itemId },
                            }}
                            className="recommend-link"
                          >
                            {item.name}
                          </Link>
                        </strong>
                        {/* <div style={{ fontSize: 12, color: "#888" }}>{item.description}</div> */}
                        <div style={{ fontSize: 13 }}>£{item.basePrice}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          {/* )} */}
          {/* {showType === "deals" && ( */}
            {/* <div>
              {dealLoading ? (
                <p>Loading deals...</p>
              ) : (
                <ul>
                  {randomDeals.map((deal) => (
                    <li
                      key={deal.dealId}
                      style={{
                        marginBottom: 10,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={deal.image}
                        alt={deal.name}
                        style={{
                          width: 50,
                          height: 50,
                          objectFit: "cover",
                          borderRadius: 4,
                          marginRight: 10,
                        }}
                      />
                      <div>
                        <strong>
                          <Link
                            href={{
                              pathname: "/shop-single",
                              query: { deal: deal.dealId },
                            }}
                            className="recommend-link"
                          >
                            {deal.name}
                          </Link>
                        </strong>
                        <div style={{ fontSize: 13 }}>£{deal.price}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div> */}
          {/* )} */}
        </div>
        <div
          style={{
            display: "flex",
            gap: 8,
            justifyContent: "flex-end",
            marginTop: 20,
          }}
        >
          <button
            className="theme-btn"
            style={{ padding: "8px 14px", fontSize: "14px", minWidth: 80 }}
            onClick={() => console.log("check it out")}
          >
            Check Out
          </button>
          <button
            style={{
              padding: "8px 14px",
              background: "gray",
              fontSize: "14px",
              borderRadius: "9px",
              minWidth: 80,
              textTransform: "uppercase",
              color: "#fff",
              }}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendationPopup;
