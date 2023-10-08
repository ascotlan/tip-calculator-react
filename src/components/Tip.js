import Dropdown from "./Dropdown";

export default function Tip({children, array, value, onTip}){
  return <div>
    <span>{children}</span> 
    <Dropdown value={value} array={array} onTip={onTip} isInt={true}/>
  </div>
}