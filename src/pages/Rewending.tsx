import RewindMotion from "@components/RewindMotion/RewindMotion";
import { useNavigate } from "react-router";

import rewindBg from '@assets/rewind-bg.png'

export default function Rewending() {

  const navigate = useNavigate();

  return (
    <section className="bg-cover bg-center h-screen w-screen flex items-center justify-center"
    style={{backgroundImage: `url(${rewindBg})`}}>
      <RewindMotion  onComplete={() => navigate('/choosing' , {state : {fromRewending: true}})}/>
    </section>
  )
}
