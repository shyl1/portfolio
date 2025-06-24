import RewindMotion from "@components/RewindMotion/RewindMotion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ButterflyEffect from "src/feedback/ButterflyEffect";

export default function Rewending() {

  const [showLoading , setShowLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(()=> {
    if(showLoading){
      const timer = setTimeout(()=> {
        navigate('Choosing' , {state : {fromRewending: true}});
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
    <section className="bg-[url('/images/rewind-bg.png')] bg-cover bg-center h-screen w-screen flex items-center justify-center">
      <RewindMotion  onComplete={() => setShowLoading(true)}/>
    </section>
  )
}
