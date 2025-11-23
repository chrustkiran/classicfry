import { Divider } from "@material-ui/core";
import { useEffect } from "react";

const DealItem = ({ name, countPerDeal, quantity, selectedItem, itemOptions, setSelectedItems }) => {

    console.log("Selected Item:", name, selectedItem, countPerDeal);
    // helper to select an item option for a slot index
    const selectItemOption = (slotIndex, option) => {
        console.log("Selecting item option:", slotIndex, option);
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
                        <i className="fas fa-wine-bottle me-2"></i>
                        Select Your {name}{name.endsWith('s') ? '' : 's'}
                    </h5>
                    <small className="text-muted">
                        Choose {name} for each deal unit (
                        {countPerDeal} {name}
                        {countPerDeal > 1 ? "s" : ""} per deal)
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
                                                        <i className="fas fa-glass-whiskey me-1"></i>
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
                                        {countPerDeal > 1 ? "s" : ""}{" "}
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
 

    const requiredItems = quantity * (Object.values(multileItemsConfig).map(i => i.countPerDeal).reduce((a, b) => a + b, 0));
    
    const getSelectedDrinks = () => {
        return Object.values(multileItemsConfig).map(i => i.selectedItems).reduce((a,acc) => [ ...a, ...acc], []);
    }


      const setEmptyItemOptions = (prev, requiredItems) => {
         const next = [...prev];
          if (next.length > requiredItems) {
            return next.slice(0, requiredItems);
          }
          while (next.length < requiredItems) next.push(null);
          return next;
      }
    
      // keep selectedItems array sized to requiredItems
    //   useEffect(() => {
    //     Object.values(multileItemsConfig).forEach(config => {
    //         config.setSelectedItems((prev = []) => {
    //             setEmptyItemOptions(prev, config.requiredItems);
    //         });
    //     });
    //   }, [requiredItems]);

      
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
                                ></DealItem>
                                <Divider></Divider>
                            </div>

                        ))
                    }
                </>)}

            {itemType === "deal" &&
                quantity > 0 &&
                requiredItems > 0 &&
                    (<>
                        {/* Progress indicator */}
                        <div className="mt-3 p-3 bg-light rounded">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <span className="small fw-semibold">
                                    Selection Progress:
                                </span>
                                <span className="small">
                                    {getSelectedDrinks().filter(Boolean).length} of{" "}
                                    {requiredItems} selected
                                </span>
                            </div>
                            <div
                                className="progress"
                                style={{ height: "8px" }}
                            >
                                <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{
                                        width: `${(getSelectedDrinks().filter(Boolean).length /
                                            requiredItems) *
                                            100
                                            }%`,
                                    }}
                                    aria-valuenow={
                                        getSelectedDrinks().filter(Boolean).length
                                    }
                                    aria-valuemin="0"
                                    aria-valuemax={requiredItems}
                                ></div>
                            </div>
                        </div>

                        {/* Validation message */}
                        {getSelectedDrinks().some((s) => !s) && (
                            <div
                                className="alert alert-warning mt-3 d-flex align-items-center"
                                role="alert"
                            >
                                <i className="fas fa-exclamation-triangle me-2"></i>
                                <div>
                                    <strong>Almost there!</strong> Please select
                                    all items to enable "Add To Cart".
                                </div>
                            </div>
                        )}

                        {/* Success message when all selected */}
                        {!getSelectedDrinks().some((s) => !s) &&
                            requiredItems > 0 && (
                                <div
                                    className="alert alert-success mt-3 d-flex align-items-center"
                                    role="alert"
                                >
                                    <i className="fas fa-check-circle me-2"></i>
                                    <div>
                                        <strong>Perfect!</strong> All items have been
                                        selected and ready to add to cart.
                                    </div>
                                </div>
                            )}
                    </>)
            }
        </>
    )
}








// {
    
//             {itemType === "deal" &&
//                 quantity > 0 &&
//                 multileItemsConfig.CHIPS.countPerDeal > 0 && (
//                     <div className="drink-selection-section mt-4">
//                         <div className="border-bottom pb-2 mb-3">
//                             <h5 className="mb-0">
//                                 <i className="fas fa-wine-bottle me-2"></i>
//                                 Select Your Drinks
//                             </h5>
//                             <small className="text-muted">
//                                 Choose drinks for each deal unit (
//                                 {drinksPerDeal} drink
//                                 {drinksPerDeal > 1 ? "s" : ""} per deal)
//                             </small>
//                         </div>

//                         {/* Group by deal units */}
//                         <div className="row">
//                             {[...Array(quantity)].map((_, dealIndex) => (
//                                 <div
//                                     key={dealIndex}
//                                     className="col-lg-6 mb-4"
//                                 >
//                                     <div className="card h-100 border-warning">
//                                         <div className="card-header bg-warning bg-opacity-10 py-2">
//                                             <h6 className="mb-0 text-dark">
//                                                 <i className="fas fa-tag me-2"></i>
//                                                 Deal Unit {dealIndex + 1}
//                                             </h6>
//                                         </div>
//                                         <div className="card-body">
//                                             {/* Show drink slots for this specific deal unit */}
//                                             {[...Array(drinksPerDeal)].map(
//                                                 (_, drinkIndexInDeal) => {
//                                                     const globalDrinkIndex =
//                                                         dealIndex * drinksPerDeal +
//                                                         drinkIndexInDeal;

//                                                     return (
//                                                         <div
//                                                             key={globalDrinkIndex}
//                                                             className="mb-3"
//                                                         >
//                                                             <label
//                                                                 htmlFor={`drink-select-${globalDrinkIndex}`}
//                                                                 className="form-label small fw-semibold text-muted mb-1"
//                                                             >
//                                                                 <i className="fas fa-glass-whiskey me-1"></i>
//                                                                 Drink {drinkIndexInDeal + 1}
//                                                             </label>
//                                                             <select
//                                                                 id={`drink-select-${globalDrinkIndex}`}
//                                                                 className={`form-select ${selectedDrinks[
//                                                                     globalDrinkIndex
//                                                                 ]
//                                                                     ? "border-success"
//                                                                     : "border-warning"
//                                                                     }`}
//                                                                 value={
//                                                                     selectedDrinks[
//                                                                         globalDrinkIndex
//                                                                     ]?.id || ""
//                                                                 }
//                                                                 onChange={(e) => {
//                                                                     const chosen =
//                                                                         drinkOptions.find(
//                                                                             (d) =>
//                                                                                 String(d.id) ===
//                                                                                 String(e.target.value)
//                                                                         ) || null;
//                                                                     selectDrinkOption(
//                                                                         globalDrinkIndex,
//                                                                         chosen
//                                                                     );
//                                                                 }}
//                                                             >
//                                                                 <option
//                                                                     value=""
//                                                                     className="text-muted"
//                                                                 >
//                                                                     -- Choose a drink --
//                                                                 </option>
//                                                                 {drinkOptions.map((opt) => (
//                                                                     <option
//                                                                         key={opt.id}
//                                                                         value={opt.id}
//                                                                     >
//                                                                         {opt.name}{" "}
//                                                                         {opt.price
//                                                                             ? `- £${opt.price.toFixed(
//                                                                                 2
//                                                                             )}`
//                                                                             : ""}
//                                                                     </option>
//                                                                 ))}
//                                                             </select>

//                                                             {/* Show selected drink preview */}
//                                                             {selectedDrinks[
//                                                                 globalDrinkIndex
//                                                             ] && (
//                                                                     <div className="mt-1 d-flex align-items-center">
//                                                                         <small className="text-success">
//                                                                             <i className="fas fa-check-circle me-1"></i>
//                                                                             Selected:{" "}
//                                                                             {
//                                                                                 selectedDrinks[
//                                                                                     globalDrinkIndex
//                                                                                 ].name
//                                                                             }
//                                                                         </small>
//                                                                     </div>
//                                                                 )}
//                                                         </div>
//                                                     );
//                                                 }
//                                             )}
//                                         </div>
//                                         <div className="card-footer bg-transparent py-2">
//                                             <small className="text-muted">
//                                                 {drinksPerDeal} drink
//                                                 {drinksPerDeal > 1 ? "s" : ""}{" "}
//                                                 required
//                                             </small>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )}

// }