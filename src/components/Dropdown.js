export default function Dropdown({ value, onTip, array, isInt}) {

  return (
    <select
      value={value}
      onChange={(event) =>
        onTip(isInt ? parseInt(event.target.value) : event.target.value)
      }
    >
      {array.map((item) => (
        <option key={item.rating} value={item.tip}>
          {`${item.rating} (${item.tip}%)`}
        </option>
      ))}
    </select>
  );
}
