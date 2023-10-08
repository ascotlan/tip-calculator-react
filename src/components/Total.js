export default function Total({ bill, myTip, friendTip }) {
  const tip1 = (myTip * bill) / 100;
  const tip2 = (friendTip * bill) / 100;
  const totalTip = (tip1 + tip2).toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const theBill = bill.toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const total = (bill + tip1 + tip2).toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div>
      Total pay ${total} {`($${theBill} + $${totalTip} tip)`}
    </div>
  );
}
