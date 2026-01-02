"use client";
import { useState, useEffect, useRef } from "react";
import "./ExtrasSelector.css";

export default function ExtrasSelector({ extras = [], onChange, resetKey = 0 }) {
  const [quantities, setQuantities] = useState({});
  const [isExpanded, setIsExpanded] = useState(true);
  const isInitialMount = useRef(true);
  const onChangeRef = useRef(onChange);

  // Keep onChange ref updated
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  // Reset quantities when resetKey changes
  useEffect(() => {
    if (resetKey > 0) {
      setQuantities({});
      isInitialMount.current = true;
    }
  }, [resetKey]);

  useEffect(() => {
    const updated = {};
    extras.forEach((extra) => {
      updated[extra.extraItemId] = quantities[extra.extraItemId] || 0;
    });

    const changed =
      Object.keys(updated).some((id) => updated[id] !== (quantities[id] || 0)) ||
      Object.keys(quantities).some((id) => !extras.some((e) => e.id === id));

    if (changed) setQuantities(updated);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [extras]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (!onChangeRef.current) return;

    const selectedExtras = extras
      .filter((extra) => quantities[extra.extraItemId] > 0)
      .map((extra) => ({
        id: extra.extraItemId,
        name: extra.extraItemName,
        quantity: quantities[extra.extraItemId],
      }));

    const totalPrice = extras.reduce(
      (sum, extra) => sum + (extra.extraItemPrice || 0) * (quantities[extra.extraItemId] || 0),
      0
    );

    onChangeRef.current(selectedExtras, totalPrice);
  }, [quantities, extras]);

  const updateQuantity = (id, qty) => {
    setQuantities((prev) => ({ ...prev, [id]: Math.max(0, Math.min(10, qty)) }));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  const totalPrice = extras.reduce(
    (sum, extra) => sum + (extra.extraItemPrice || 0) * (quantities[extra.extraItemId] || 0),
    0
  );

  const totalSelectedQuantity = Object.values(quantities).reduce(
    (sum, q) => sum + q,
    0
  );

  if (!extras || extras.length === 0) {
    return null;
  }

  return (
    <div className="es-wrapper mt-4">
      <div className="es-container p-3">
        {/* Header */}
        <div
          className="es-header d-flex justify-content-between align-items-center"
          onClick={() => setIsExpanded(!isExpanded)}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-expanded={isExpanded}
        >
          <div className="d-flex align-items-center">
            <i className={`fas fa-chevron-${isExpanded ? "up" : "down"} me-2 text-warning`}></i>
            <h6 className="m-0 fw-bold es-title">
              <i className="fas fa-star me-2 text-warning"></i>
              Extras
            </h6>
          </div>

          {totalSelectedQuantity > 0 && (
            <div className="d-flex align-items-center gap-2">
              <span className="badge bg-warning text-dark">{totalSelectedQuantity}</span>
              <span className="fw-bold text-success">+£{totalPrice.toFixed(2)}</span>
            </div>
          )}
        </div>

        {/* Collapsible Table */}
        {isExpanded && (
          <div className="mt-3">
            <div className="es-table">
              {extras.map((extra) => {
                const qty = quantities[extra.extraItemId] || 0;
                return (
                  <div
                    key={extra.extraItemId}
                    className={`es-table-row ${qty > 0 ? "es-active" : ""}`}
                  >
                    {/* Name with Price */}
                    <div className="es-table-cell es-cell-name">
                      <span className="fw-semibold">{extra.extraItemName}</span>
                      <span className="text-muted ms-1">(£{extra.extraItemPrice?.toFixed(2)})</span>
                    </div>

                    {/* Quantity Controls */}
                    <div className="es-table-cell es-cell-qty">
                      <button
                        className="btn btn-xs es-qty-btn"
                        disabled={qty === 0}
                        onClick={(e) => {
                          e.stopPropagation();
                          updateQuantity(extra.extraItemId, qty - 1);
                        }}
                        type="button"
                        aria-label="Decrease quantity"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <input
                        type="text"
                        className="es-qty-input"
                        value={qty}
                        onChange={(e) => updateQuantity(extra.extraItemId, Number.parseInt(e.target.value, 10) || 0)}
                        onClick={(e) => e.stopPropagation()}
                        min="0"
                        max="10"
                        aria-label={`Quantity for ${extra.extraItemName}`}
                      />
                      <button
                        className="btn btn-xs es-qty-btn"
                        disabled={qty === 10}
                        onClick={(e) => {
                          e.stopPropagation();
                          updateQuantity(extra.extraItemId, qty + 1);
                        }}
                        type="button"
                        aria-label="Increase quantity"
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>

                    {/* Total Price */}
                    <div className="es-table-cell es-cell-price">
                      <span className={`fw-bold ${qty > 0 ? "text-success" : "text-muted"}`}>
                        £{((extra.extraItemPrice || 0) * qty).toFixed(2)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
