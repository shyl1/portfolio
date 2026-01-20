import { useEffect } from "react"
import rewindBg from '@assets/rewind-bg.webp'
import butterflyGif from "@assets/gifs/butterfly.gif"

export default function ButterflyEffect() {
  // add sound effect
  useEffect(() => {
    const butterflyAudio = new Audio("/sounds/This-Action-Will-Have-Consequences.mp3");
    butterflyAudio.loop = true; // loop the sound effect
    butterflyAudio.play().catch((error) => {
      console.error("Error playing audio:", error);
    });

    // clean up function to stop the audio when the component unmounts
    return () => {
      butterflyAudio.pause();
      butterflyAudio.currentTime = 0;
    };
  }, []);



  return (
    <section className=" bg-cover bg-center h-screen w-screen flex max-md:items-center  justify-center"
      style={{ backgroundImage: `url(${rewindBg})` }}>

      <div className="mt-3 flex flex-col">
        <img src={butterflyGif} alt="butterfly effect" />
        <p className="text-xl sm:text-3xl md:text-4xl color-primary font-body animate-pulse ">this action will have consequences</p>
      </div>
    </section>
  )
}
