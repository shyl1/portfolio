import RewindMotion from "@components/RewindMotion/RewindMotion";
import { useNavigate } from "react-router";

import rewindBg from '@assets/rewind-bg.webp'

export default function Rewending() {

  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden">
      <img
        src={rewindBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        {...({ fetchPriority: "high" } as any)}
      />
      <RewindMotion onComplete={() => navigate('/choosing', { state: { fromRewending: true } })} />
    </div>
  )
}
