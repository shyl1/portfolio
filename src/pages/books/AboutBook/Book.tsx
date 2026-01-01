import { usePageLoading } from "@hooks/usePageLoading";
import HTMLFlipBook from "react-pageflip";
import { useRef } from "react";
import Page2 from "./Page2";
import Page1 from "./Page1";


export default function AboutBook() {
    usePageLoading();
    const bookRef = useRef<typeof HTMLFlipBook>(null);
    return (
        <>
            <section className="hidden h-screen  md:flex flex-col justify-center items-center bg-[url('/images/multiple-choices-bg.png')] bg-center bg-cover"
            >
                <HTMLFlipBook
                    style={{}}
                    size="fixed"
                    ref={bookRef}
                    className="rounded"
                    showCover={false}
                    maxShadowOpacity={0.5}
                    useMouseEvents={true}
                    startPage={0}
                    autoSize={true}
                    width={600}
                    height={600}
                    mobileScrollSupport={true}
                    /* REQUIRED DIMENSION PROPS */
                    minWidth={300}
                    maxWidth={600}
                    minHeight={400}
                    maxHeight={600}
                    /* REQUIRED EVEN IF UNUSED */
                   
                    flippingTime={700}
                    usePortrait={true}
                    startZIndex={1}
                    drawShadow={true}
                    
                   
                  
                >
                    <div>
                        <Page1 />
                    </div>

                    <div>
                        <Page2 />
                    </div>
                </HTMLFlipBook>

            </section>

            <section className="flex h-screen md:hidden flex-col justify-center items-center bg-[url('/images/multiple-choices-bg.png')] bg-center bg-cover"
            >
                <HTMLFlipBook
                    style={{}}           // <-- REQUIRED BY TS
                    size="fixed"
                    ref={bookRef}
                    className=" rounded"
                    showCover={false}
                    maxShadowOpacity={0.5}
                    useMouseEvents={true}
                    startPage={0}
                    autoSize={true}
                    width={350}
                    height={500}
                    mobileScrollSupport={true}
                    /* REQUIRED DIMENSION PROPS */
                    minWidth={350}
                    maxWidth={350}
                    minHeight={500}
                    maxHeight={500}
                    /* REQUIRED EVEN IF UNUSED */
                  
                >
                    <div>
                        <Page1 />
                    </div>

                    <div>
                        <Page2 />
                    </div>
                </HTMLFlipBook>

            </section>

        </>
    );
}