import aboutMe from "@assets/page2.png"
import tailwindc from "@assets/tailwind-css 1.webp";
import css from "@assets/CSS 1.webp";
import react from "@assets/React 1.webp";
import redux from "@assets/Redux 1.webp";
import context from "@assets/CONTEXT.webp"

export default function Page2() {

    const frontendSkills = [
        { name: "React", img: react },
        { name: "Redux", img: redux },
        { name: "Context API", img: context },
    ];

    const extraFrontend = [
        "Next.js",
        "React Query",
        "Axios",
        "Supabase",
        "TypeScript",
        "REST APIs"
    ];

    const stylingSkills = [
        { name: "Tailwind", img: tailwindc },
        { name: "CSS", img: css },
    ];

    const uiSkills = [
        "MUI",
        "SASS",
        "Responsive Design"
    ];

  

    return (
        <div
            className="font-heading flex flex-col justify-start items-start px-3 py-8 h-full w-full"
            style={{
                backgroundImage: `url(${aboutMe})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)",
            }}
        >
            <h1 className="text-2xl md:text-4xl font-black text-black mb-2 md:mb-4">
                My Skills
            </h1>

            <div className="flex flex-wrap gap-6">

                {/* Frontend */}
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold mt-4">
                        Frontend Frameworks
                    </h2>

                    <div className="flex flex-wrap gap-4 mb-2">
                        {frontendSkills.map(skill => (
                            <img
                                key={skill.name}
                                src={skill.img}
                                alt={skill.name}
                                className="w-20 h-10 md:w-40 md:h-20"
                            />
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {extraFrontend.map(skill => (
                            <p key={skill} className="font-bold font-body">
                                {skill}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Styling */}
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold mt-4">
                        Styling / UI
                    </h2>

                    <div className="flex flex-wrap gap-4 mb-2">
                        {stylingSkills.map(skill => (
                            <img
                                key={skill.name}
                                src={skill.img}
                                alt={skill.name}
                                className="w-20 h-20 md:w-40 md:h-30"
                            />
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {uiSkills.map(skill => (
                            <p key={skill} className="font-bold font-body">
                                {skill}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Other */}
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold mt-4">
                        Other Skills
                    </h2>

                   
                </div>

            </div>
        </div>
    )
}