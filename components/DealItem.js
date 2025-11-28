export const DealItem = ({ dealItem }) => {
  return (
    <div
      key={dealItem.id}
      className="col-md-12 col-lg-6 d-flex align-items-center p-3 border rounded"
    >
      <div className="d-flex align-items-center" style={{ flex: 1 }}>
        <div>
          <h4>{dealItem.name}</h4>
          <p>{dealItem.description}</p>
           <span>Quantity: {dealItem.quantity}</span>
        </div>
      </div>
    </div>
  );
};