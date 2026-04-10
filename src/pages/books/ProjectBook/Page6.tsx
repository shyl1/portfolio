import aboutMe from "@assets/page5.webp";
import Button from "@components/shared/Button";
import LazyBackground from "@components/shared/LazyBackground";

import { useNavigate } from "react-router-dom";

export default function Page6() {
    const navigate = useNavigate();

    return (
        <LazyBackground
            src={aboutMe}
            className="font-heading h-full w-full flex flex-col justify-start px-3 items-start py-8"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)",
            }}
        >

            <div className="flex flex-col  items-start gap-6 w-full">

                <div className="w-full">
                    <a
                        href="https://azzka.app/login"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h1 className="text-2xl md:text-3xl font-black px-3 text-black mb-2 md:mb-4 underline">
                            Project: Azzka ERP System
                        </h1>
                    </a>


                    <h2 className="text-lg md:text-xl font-bold mb-1">About the Project</h2>
                    <p className="mb-4 font-semibold text-[13px] md:text-lg">
                        Contributed to building a large-scale ERP system used to manage religious tourism operations, supporting multiple departments with unified workflows.
                    </p>

                    <h2 className="text-lg md:text-xl font-bold mb-1">Key Features</h2>
                    <ul className="list-disc list-inside font-semibold text-[13px] md:text-lg">
                        <li>Built modular and reusable UI components to support scalable ERP architecture.</li>
                        <li>Implemented multi-department workflows including Accounting, HRM, and CRM modules.</li>
                        <li>Improved UI consistency across modules and reduced code redundancy.</li>
                        <li>Integrated REST APIs for dynamic data handling across system features.</li>
                        <li>Optimized state management using Redux Toolkit and React Query.</li>
                    </ul>

                    <h2 className="text-lg md:text-xl font-bold mb-1">Tech Stack</h2>
                    <p className="font-semibold text-[13px] md:text-lg">
                        React.js, TypeScript, Redux Toolkit, React Query, Tailwind CSS, REST APIs
                    </p>
                </div>

                <div className="px-3">
                    <Button
                        type="Next"
                        action={() => navigate("/book/about")}
                    />
                </div>

            </div>
        </LazyBackground>
    );
}
