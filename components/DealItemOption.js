import { getRequiredMultipleItemCount, getSelectedMultipleItems } from "@/utility/multipleItemUtils";
// import { Divider } from "@material-ui/core";
import Divider from "@mui/material/Divider";
import { useEffect } from "react";

const DealItem = ({ name, countPerDeal, quantity, selectedItem, itemOptions, setSelectedItems, icons }) => {

    // helper to select an item option for a slot index
    const selectItemOption = (slotIndex, option) => {
        setSelectedItems((prev = []) => {
            const next = [...prev];
            next[slotIndex] = option;
            return next;
        });
       
    };

    return (
        <>
            {countPerDeal > 0 && <div className="drink-selection-section mt-4">
                <div className="border-bottom pb-2 mb-3">
                    <h5 className="mb-0">
                        {icons[0]}
                        Select Your {name}{name.endsWith('s') ? '' : 's'}
                    </h5>
                    <small className="text-muted">
                        Choose {name} for each deal unit (
                        {countPerDeal} {name}
                        {countPerDeal > 1 && !name.endsWith('s') ? "s" : ""} per deal)
                    </small>
                </div>

                {/* Group by deal units */}
                <div className="row">
                    {[...Array(quantity)].map((_, dealIndex) => (
                        <div
                            key={dealIndex}
                            className="col-lg-6 mb-4"
                        >
                            <div className="card h-100 border-warning">
                                <div className="card-header bg-warning bg-opacity-10 py-2">
                                    <h6 className="mb-0 text-dark">
                                        <i className="fas fa-tag me-2"></i>
                                        Deal Unit {dealIndex + 1}
                                    </h6>
                                </div>
                                <div className="card-body">
                                    {/* Show drink slots for this specific deal unit */}
                                    {[...Array(countPerDeal)].map(
                                        (_, itemIndexInDeal) => {
                                            const globalItemIndex =
                                                dealIndex * countPerDeal +
                                                itemIndexInDeal;

                                            return (
                                                <div
                                                    key={globalItemIndex}
                                                    className="mb-3"
                                                >
                                                    <label
                                                        htmlFor={`item-select-${globalItemIndex}`}
                                                        className="form-label small fw-semibold text-muted mb-1"
                                                    >
                                                        {icons[1]}
                                                        {name} {itemIndexInDeal + 1}
                                                    </label>
                                                    <select
                                                        id={`item-select-${globalItemIndex}`}
                                                        className={`form-select ${selectedItem[
                                                            globalItemIndex
                                                        ]
                                                            ? "border-success"
                                                            : "border-warning"
                                                            }`}
                                                        value={
                                                            selectedItem[
                                                                globalItemIndex
                                                            ]?.id || ""
                                                        }
                                                        onChange={(e) => {
                                                            const chosen =
                                                                itemOptions.find(
                                                                    (d) =>
                                                                        String(d.id) ===
                                                                        String(e.target.value)
                                                                ) || null;
                                                            selectItemOption(
                                                                globalItemIndex,
                                                                chosen
                                                            );
                                                        }}
                                                    >
                                                        <option
                                                            value=""
                                                            className="text-muted"
                                                        >
                                                            -- Choose a {name.toLowerCase()} --
                                                        </option>
                                                        {itemOptions.map((opt) => (
                                                            <option
                                                                key={opt.id}
                                                                value={opt.id}
                                                            >
                                                                {opt.name}{" "}
                                                                {opt.price
                                                                    ? `- £${opt.price.toFixed(
                                                                        2
                                                                    )}`
                                                                    : ""}
                                                            </option>
                                                        ))}
                                                    </select>

                                                    {/* Show selected drink preview */}
                                                    {selectedItem[
                                                        globalItemIndex
                                                    ] && (
                                                            <div className="mt-1 d-flex align-items-center">
                                                                <small className="text-success">
                                                                    <i className="fas fa-check-circle me-1"></i>
                                                                    Selected:{" "}
                                                                    {
                                                                        selectedItem[
                                                                            globalItemIndex
                                                                        ].name
                                                                    }
                                                                </small>
                                                            </div>
                                                        )}
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                                <div className="card-footer bg-transparent py-2">
                                    <small className="text-muted">
                                        {countPerDeal} {name.toLowerCase()}
                                        {countPerDeal > 1 && !name.endsWith('s') ? "s" : ""}{" "}
                                        required
                                    </small>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>}
        </>
    )
}

export default function DealItemOption({ itemType, quantity, multileItemsConfig }) {
 

    const requiredItems = getRequiredMultipleItemCount(multileItemsConfig, quantity);
    
    const getSelectedItems = () => getSelectedMultipleItems(multileItemsConfig);


      const setEmptyItemOptions = (prev, _requiredItems) => {
         const next = [...prev];
          if (next.length > _requiredItems) {
            return next.slice(0, _requiredItems);
          }
          while (next.length < _requiredItems) next.push(null);
          return next;
      }
    
     // keep selectedItems array sized to requiredItems
      useEffect(() => {
        Object.values(multileItemsConfig).forEach(config => {
            config.setSelectedItems((prev = []) => {
                return setEmptyItemOptions(prev, config.requiredItems);
            });
        });
      }, [requiredItems]);

      
    return (
        <>
            {itemType === "deal" &&
                quantity > 0 &&
                (<>
                    {
                        Object.keys(multileItemsConfig).map((key, index) => (
                            <div key={index}>
                                <DealItem name={multileItemsConfig[key].name}
                                    countPerDeal={multileItemsConfig[key].countPerDeal}
                                    quantity={quantity}
                                    selectedItem={multileItemsConfig[key].selectedItems}
                                    itemOptions={multileItemsConfig[key].selectItemOption}
                                    setSelectedItems={multileItemsConfig[key].setSelectedItems}
                                    icons={multileItemsConfig[key].icons}
                                ></DealItem>
                                <Divider></Divider>
                            </div>

                        ))
                    }
                </>)}

        </>
    )
}