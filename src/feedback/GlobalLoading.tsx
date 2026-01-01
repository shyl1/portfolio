import { useContext } from "react";
import LoadingContext from "@ContextAPI/LoadingContext";
import ButterflyEffect from "./ButterflyEffect";

export default function GlobalLoading() {
  const { loading } = useContext(LoadingContext);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999]">
      <ButterflyEffect />
    </div>
  );
}
