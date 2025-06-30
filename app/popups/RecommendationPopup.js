import React, { useEffect, useState } from "react";
import useItem from "@/hooks/useItem";
import useDeal from "@/hooks/useDeal";
import Link from "next/link";
import "./RecomandationPopup.css";
import { useRouter } from "next/navigation";

function getRandom(arr, n) {
  if (!arr || arr.length === 0) return [];
  const shuffled = arr.slice().sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

const RecommendationPopup = ({ onClose }) => {
  const route = useRouter();
  const { items, fetchItems, itemLoading } = useItem();

  const [randomItems, setRandomItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    if (items && items.length > 0) setRandomItems(getRandom(items, 5));
  }, [items]);

  const handleCheckOut = () => {
    route.push("/checkout");
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "28px 28px",
          borderRadius: "12px",
          width: "90%",
          maxWidth: "480px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          animation: "fadeIn 0.3s ease-in-out",
        }}
      >
        <h4
          style={{
            marginBottom: 18,
            fontSize: 20,
            fontWeight: 600,
            color: "#333",
          }}
        >
          Recommended For You
        </h4>

        <div style={{ maxHeight: 300, overflowY: "auto" }}>
          {itemLoading ? (
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {randomItems.map((item) => (
                <li
                  key={item.itemId}
                  style={{
                    marginBottom: 12,
                    display: "flex",
                    alignItems: "center",
                    padding: 6,
                    borderRadius: 6,
                    transition: "background 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f9f9f9")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: 50,
                      height: 50,
                      objectFit: "cover",
                      borderRadius: 6,
                      marginRight: 12,
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
                        style={{
                          textDecoration: "none",
                          fontSize: 15,
                        }}
                      >
                        {item.name}
                      </Link>
                    </strong>
                    <div style={{ fontSize: 13, color: "#666" }}>
                      £{Number(item.basePrice || 0).toFixed(2)}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "flex-end",
            marginTop: 24,
          }}
        >
          <button
            style={{
              padding: "10px 16px",
              fontSize: 14,
              minWidth: 90,
              backgroundColor: "#ffb936",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
            onClick={handleCheckOut}
          >
            Check Out
          </button>
          <button
            style={{
              padding: "10px 16px",
              fontSize: 14,
              minWidth: 90,
              backgroundColor: "#6c757d",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              textTransform: "uppercase",
              fontWeight: 500,
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
