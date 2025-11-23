import { FaStore } from "react-icons/fa";
import { useAppContext } from "@/context/AppContext";
import { useState, useEffect, use } from "react";
import env from "@/env";

export default function SelectStoreDropDown({ style = { display: "flex", alignItems: "center", gap: "8px" }, isShowText = true, iconColor = "#000" }) {
  const { store, setSelectedStore } = useAppContext();
  const [loaded, setLoaded] = useState(false);

  // TODO :: Remove this useEffect once store selection is mandatory
  // useEffect(() => {
  //   setSelectedStore(env.STORE.EPSOM);
  // }, []);

  useEffect(() => {
    setLoaded(true);
  }, [store]);

  if (!loaded) return null;

  const stores = env.STORE ? Object.values(env.STORE) : [];

  return (
    <div className="d-flex justify-content-center fade-rise">
      <div className="select-store flex-column flex-lg-row d-flex" style={style}>
        <div className="d-flex align-items-center" style={{ gap: "8px" }}>
          <FaStore color={iconColor} />
          {isShowText && <span style={{ color: iconColor }}>{(!store || "" === store) ? "Select your store " : "Your store has been set to "}</span>}
        </div>

        <select
          value={store}
          onChange={(e) => setSelectedStore(e.target.value)}
          className="form-select"
          style={{
            width: "200px",
            height: "38px",
            fontSize: "14px",
            margin: "0 auto",
            display: "block",
            padding: "0 12px",
            lineHeight: "38px",
          }}
        >
          <option value="">Select Store</option>
          {stores.map((s) => (
            <option key={s} value={s}>
              {s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
