import { usePageLoading } from "@hooks/usePageLoading";
import { useRef } from "react";
import HTMLFlipBookOriginal from "react-pageflip";
import Page1 from "./Page1";


const HTMLFlipBook: React.FC<any> = HTMLFlipBookOriginal;


export default function HobbiesBook() {
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
        >
          <div>
            <Page1 />
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

        >
          <div>
            <Page1 />
          </div>
        </HTMLFlipBook>

      </section>



    </>
  )
}