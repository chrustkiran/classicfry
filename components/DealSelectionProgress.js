"use client";
import { getRequiredMultipleItemCount, getSelectedMultipleItems } from "@/utility/multipleItemUtils";

export default function DealSelectionProgress({ itemType, quantity, multileItemsConfig }) {
  const requiredItems = getRequiredMultipleItemCount(multileItemsConfig, quantity);
  const getSelectedItems = () => getSelectedMultipleItems(multileItemsConfig);

  if (itemType !== "deal" || quantity === 0 || requiredItems === 0) {
    return null;
  }

  const selectedCount = getSelectedItems().filter(Boolean).length;
  const allSelected = !getSelectedItems().some((s) => !s);
  const progressPercentage = requiredItems > 0 ? (selectedCount / requiredItems) * 100 : 0;

  return (
    <div className="mt-4">
      {/* Progress indicator */}
      <div className="p-3 bg-light rounded">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className="small fw-semibold">Selection Progress:</span>
          <span className="small">
            {selectedCount} of {requiredItems} selected
          </span>
        </div>
        <div className="progress" style={{ height: "8px" }}>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{
              width: `${progressPercentage}%`,
            }}
            aria-valuenow={selectedCount}
            aria-valuemin="0"
            aria-valuemax={requiredItems}
          ></div>
        </div>
      </div>

      {/* Validation message */}
      {!allSelected && (
        <div className="alert alert-warning mt-3 d-flex align-items-center" role="alert">
          <i className="fas fa-exclamation-triangle me-2"></i>
          <div>
            <strong>Almost there!</strong> Please select all items to enable "Add To Cart".
          </div>
        </div>
      )}

      {/* Success message when all selected */}
      {allSelected && requiredItems > 0 && (
        <div className="alert alert-success mt-3 d-flex align-items-center" role="alert">
          <i className="fas fa-check-circle me-2"></i>
          <div>
            <strong>Perfect!</strong> All items have been selected and ready to add to cart.
          </div>
        </div>
      )}
    </div>
  );
}

