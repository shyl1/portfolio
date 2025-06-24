import { acceleration, maxSpeed, motionPath } from "@Constants/Constants";
import { useEffect, useRef, useState } from "react";

type NotifyTheParentProps ={
  onComplete: () => void;
}


export default function RewindMotion({onComplete}: NotifyTheParentProps) {
  const circleRef = useRef<SVGCircleElement>(null); // to track the position of the circle along the path and let typescript knows the type of the element
  const pathRef = useRef<SVGPathElement>(null); // to track the path of the circle
  const animationRef = useRef<number | null>(null); // to track the progress of the circle along the path
  const progressRef = useRef(0); // progress of the circle along the path, starts at 0
  const isHoldingRef = useRef(false); // track the hodling state
  const lastTimestampRef = useRef<number | null>(null); // to track the last timestamp of the animation frame
  const velocityRef = useRef(0); // to track the velocity of the circle

  const [isHolding , setIsHolding] = useState(false); // for UI only

  // circle moving on the path
  function circleMovement(progress: number){
    const path = pathRef.current; // gets the path ref
    const circle = circleRef.current; // gets circle postion
    if(!path || !circle) return;

    const pathLength = path.getTotalLength();    // calculate the length of the path
    const newPosition = path.getPointAtLength(progress * pathLength);     // calculate the new position of the circle based on the progress

    // set the new position of the circle
    circle.setAttribute("cx", newPosition.x.toString());
    circle.setAttribute("cy", newPosition.y.toString());
  }

  // animation frame to move the circle along the path
  function animate(timestamp: number) {
    if(lastTimestampRef.current === null){
      lastTimestampRef.current = timestamp; // initialize the last timestamp
    }

    const deltaTime = timestamp - lastTimestampRef.current; // calculate the time difference between the last frame and the current frame
    lastTimestampRef.current = timestamp; // update the last timestamp

  
    // calculate the speed of the circle based on the delta time and acceleration
    if (isHoldingRef.current) {
      velocityRef.current = Math.min(velocityRef.current + acceleration * deltaTime, maxSpeed);
    } else {
      velocityRef.current = Math.max(velocityRef.current - acceleration * deltaTime *2 , -maxSpeed);
    }

    // update the progress of the circle along the path
    progressRef.current = Math.max(0, Math.min(1, progressRef.current + velocityRef.current * deltaTime));

    circleMovement(progressRef.current);

    // detect if the circle has reached the end of the path
    if(progressRef.current >=1 ){
      if(onComplete) {
        onComplete(); // notify the parent component that the animation is complete
      }
      return;
    }

    animationRef.current = requestAnimationFrame(animate);
  }

  // handle press
  function handleMouseDown() {
    isHoldingRef.current= true;
    setIsHolding(true);
  }

  // handle release
  function handleMouseUp() {
    isHoldingRef.current = false;
    setIsHolding(false);
  }


  // cleanup the animation frame on unmount
  useEffect(()=> {
    circleMovement(0);  // initail position of the circle
    animationRef.current = requestAnimationFrame(animate); // start the animation frame
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);




  return (
    <div className="flex h-screen items-center justify-center flex-col select-none">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 370 320" 
        width="370" 
        height="320" 
        strokeWidth="10" 
        fill="none" 
        stroke="#000000"
        className={`${isHolding ? 'opacity-100' : 'opacity-50'} transition-opacity duration-300`}
      >
        <path id="motionPath" strokeLinecap="round" strokeLinejoin="round" d={motionPath} ref={pathRef} />

        <circle id="movingCircle" fill="white" r="8" stroke="red" strokeWidth="3" cursor="pointer" ref={circleRef}/>
      </svg>

      <div>
        <h1 className="font-heading text-4xl cursor-pointer animate-pulse hover:scale-110 hover:animate-none" 
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}>Hold to Rewind</h1>
      </div>
    </div>

  )
}
