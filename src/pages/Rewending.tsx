import RewindMotion from "@components/RewindMotion/RewindMotion";
import { useState } from "react";

export default function Rewending() {

  const [showLoading , setShowLoading] = useState(false);

  return (
    <section className="bg-[url('/images/background.png')] bg-cover bg-center h-screen w-screen flex items-center justify-center">
      <RewindMotion  onComplete={() => setShowLoading(true)}/>
    </section>
  )
}
