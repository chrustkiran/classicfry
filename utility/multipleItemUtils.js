// extract drink options from dealItemViews when drink item has 'options' field
  export const extractMultipleItemOptionsFromDeal = (dealObj, itemType) => {
    if (!dealObj || !Array.isArray(dealObj.dealItemViews)) return [];
    const opts = [];
    dealObj.dealItemViews.forEach((it) => {
      const name = (it.dealItemType || "").toLowerCase();
      const itemTypeLower = (itemType || "").toLowerCase();
      if (name == itemTypeLower && Array.isArray(it.dealItemOptions)) {
        it.dealItemOptions.forEach((o, idx) => {
          // normalize option into object { id, name, image?, price? }
          if (typeof o === "string") {
            opts.push({
              id: `${it.dealItemId || it.dealItemId || "d"}-${idx}`,
              name: o,
            });
          } else if (o && typeof o === "object") {
            const id = o.id || o.itemId || `${it.dealItemId || "d"}-${idx}`;
            opts.push({
              id,
              name: o.name || o.label || String(o.id || idx),
              image: o.image,
              price: o.price,
            });
          }
        });
      }
    });
    // remove duplicates (by id or name)
    const map = new Map();
    opts.forEach((o) => {
      const key = o.id ?? o.name;
      if (!map.has(key)) map.set(key, o);
    });
    return Array.from(map.values());
  };



  // helper to count multiple items required per deal unit
  export const getMulipleItemCountPerDeal = (dealObj, dealItemType) => {
    if (!dealObj?.dealItemViews) return 0;
    return dealObj.dealItemViews.reduce((acc, it) => {
      const name = (it.dealItemType || "").toString().toLowerCase();
      const dealItemTypeLoweer = (dealItemType || "").toString().toLowerCase();
      return acc + (name == dealItemTypeLoweer ? Number(it.quantity || 0) : 0);
    }, 0);
  };