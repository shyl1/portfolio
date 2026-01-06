
import aboutMe from "@assets/page2.png"
import tailwindc from "@assets/tailwind-css 1.webp";
import css from "@assets/CSS 1.webp";
import react from "@assets/React 1.webp";
import redux from "@assets/Redux 1.webp";
import context from "@assets/CONTEXT.webp"



export default function Page2() {
    return (
        <div
            className="font-heading flex flex-col justify-start items-start px-3 py-8 h-full w-full"
            style={{
                backgroundImage: `url(${aboutMe})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)", // inner shadow for depth
            }}
        >
            <h1 className="text-2xl md:text-4xl font-black text-black mb-2 md:mb-4">My Skills</h1>
            <div className="flex flex-wrap">
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold mt-4">Frontend Frameworks</h2>
                    <div className="flex flex-wrap gap-4 mb-2">
                        <img src={react} alt="React" className="w-20 h-10 md:w-40 md:h-20" />
                        <img src={redux} alt="Redux" className="w-20 h-10 md:w-40 md:h-20" />
                        <img src={context} alt="Redux" className="w-20 h-10 md:w-40 md:h-20" />
                        <p className="font-bold font-body">
                            Next.js
                        </p>
                        <p className="font-bold font-body">
                            React Query · Axios · Supabase
                        </p>
                    </div>
                </div>

                <div className="flex flex-col">
                    <h2 className="text-xl font-bold mt-4">Styling / UI</h2>
                    <div className="flex flex-wrap gap-4 mb-2">
                        <img src={tailwindc} alt="Tailwind" className="w-20 h-10 md:w-40 md:h-20" />
                        <img src={css} alt="CSS" className="w-20 h-20 md:w-40 md:h-30" />
                        <p className="font-bold font-body">
                            using MUI library & SASS
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
