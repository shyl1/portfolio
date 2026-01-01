import RewindMotion from "@components/RewindMotion/RewindMotion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ButterflyEffect from "src/feedback/ButterflyEffect";
import rewindBg from '@assets/rewind-bg.png'

export default function Rewending() {

  const [showLoading , setShowLoading] = useState(false);

  const navigate = useNavigate();

  
  

  useEffect(()=> {
    if(showLoading){
      const timer = setTimeout(()=> {
        navigate('/choosing' , {state : {fromRewending: true}});
      }, 3000);

      return ()=> clearTimeout(timer);
    }
    
  }, [showLoading ,navigate]);


  if(showLoading){
    return (
      <ButterflyEffect />
    );
  }

  return (
    <section className="bg-cover bg-center h-screen w-screen flex items-center justify-center"
    style={{backgroundImage: `url(${rewindBg})`}}>
      <RewindMotion  onComplete={() => setShowLoading(true)}/>
    </section>
  )
}
