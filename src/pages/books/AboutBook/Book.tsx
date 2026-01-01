import { usePageLoading } from "@hooks/usePageLoading";
import HTMLFlipBook from "react-pageflip";
import { useRef } from "react";
import Page2 from "./Page2";
import Page1 from "./Page1";


export default function AboutBook() {
    usePageLoading();
    const bookRef = useRef(null);
    return (
        <>
        <section className="hidden h-screen  md:flex flex-col justify-center items-center bg-[url('/images/multiple-choices-bg.png')] bg-center bg-cover"
        >
            <HTMLFlipBook

                ref={bookRef}
                className="shadow-2xl rounded"
                showCover={false}
                maxShadowOpacity={0.5}
                useMouseEvents={true}
                startPage={0}
                autoSize={true}
                 width={600}   // max width
          height={600}  // max height
          mobileScrollSupport={true}
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

                ref={bookRef}
                className="shadow-2xl rounded"
                showCover={false}
                maxShadowOpacity={0.5}
                useMouseEvents={true}
                startPage={0}
                autoSize={true}
                 width={300}   // max width
          height={700}  // max height
         
          mobileScrollSupport={true}
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