export default function Bill({ bill, handleBillAmount }) {
  return (
    <div>
      <label>How much was the bill?</label>{" "}
      <input type="number" value={bill} onChange={handleBillAmount} />
    </div>
  );
}
