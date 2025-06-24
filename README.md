# portfolio


##
Type 'number' is not assignable to type 'SVGAnimateMotionElement'.ts(2322)
(property) React.RefObject<SVGAnimateMotionElement | null>.current: SVGAnimateMotionElement | null
The current value of the ref.

to solve this problem :
because you're using requestAnimationFrame, which returns a number (the ID of the animation frame), but you're storing it in a RefObject<SVGAnimateMotionElement>, which expects a DOM element.

const animationRef = useRef<number | null>(null);