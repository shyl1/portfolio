
import aboutMe from "@assets/page2.png"
import html from "@assets/html 1.webp";
import javascript from "@assets/javascript 1.webp";
import typescript from "@assets/typescript 1.webp";
import Button from "@components/shared/Button";
import { useNavigate } from "react-router";

  const otherSkills = [
        "Git",
        "Reusable Components",
        "Performance Optimization",
        "Clean Architecture"
    ];

export default function Page3() {
    const navigate = useNavigate();

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

            <div className="flex flex-col justify-between items-start h-full">
                <div className="flex flex-wrap">

                    <div className="flex flex-col">
                        <h2 className="text-xl font-bold mt-4">Core Web Technologies</h2>
                        <div className="flex flex-wrap gap-4 mb-4">
                            <img src={html} alt="HTML" className="w-20 h-20 md:w-40 md:h-30" />
                            <img src={javascript} alt="JavaScript" className="w-20 h-20 md:w-40 md:h-30" />
                            <img src={typescript} alt="TypeScript" className="w-20 h-20 md:w-40 md:h-30" />
                        </div>
                    </div>

                    <div className="font-bold font-body">
                        <p>OOP · Data Structures · Algorithms · Problem Solving</p>
                    </div>

                    <div className="font-bold font-body">
                        <h1>Form Handling:</h1>
                        <p>Formik and validation by Yup </p>
                    </div>
                     <div className="flex flex-wrap gap-2">
                        {otherSkills.map(skill => (
                            <p key={skill} className="font-bold font-body">
                                {skill}
                            </p>
                        ))}
                    </div>
                    
                    <div className="font-bold font-body ml-2">
                        <h1>UI/UX:</h1>
                        <p>Figma</p>
                    </div>
                </div>

                <div className="flex items-end">
                    <Button type="Next" action={
                        () => navigate("/book/projects")
                    } />
                </div>
            </div>

        </div>
    )
}
