type buttonTypes = {
    action: () => void;
    type?: "Next" | "Previous";
}


export default function Button({action, type}: buttonTypes) {
  return (
    <button onClick={action} className="text-lg md:text-2xl font-bold font-heading"> {`${type === "Next" ? "NEXT >" : "< PREVIOUS"}`}</button>
  )
}
