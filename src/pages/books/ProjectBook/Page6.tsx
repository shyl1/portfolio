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
                    <h1 className="text-2xl md:text-3xl font-black px-3 text-black mb-2 md:mb-4 underline">
                        Project: HR Management Module – Internal System
                    </h1>

                    <h2 className="text-lg md:text-xl font-bold mb-1">About the Project</h2>
                    <p className="mb-4 font-semibold text-[13px] md:text-lg">
                        Developed an HR module to handle employee holiday and leave requests within an internal system.
                    </p>

                    <h2 className="text-lg md:text-xl font-bold mb-1">Key Features</h2>
                    <ul className="list-disc list-inside font-semibold text-[13px] md:text-lg">
                        <li>Implemented employee functionality to submit holiday requests via API-connected employee profiles and view previous and upcoming leaves.</li>
                        <li>Built admin functionality to view all requests and approve or reject them with a required reason.</li>
                        <li>Added support for employee warnings (لفت نظر), allowing admins to manage and employees to view them.</li>
                        <li>Implemented management of holiday and leave types controlled by the admin.</li>
                    </ul>
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
