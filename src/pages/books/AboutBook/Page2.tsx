
import aboutMe from "@assets/page2.png"
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
            <h1 className="text-sm md:text-4xl font-black mb-6 text-gray-800">My Skills</h1>
            <ul className="text-lg md:text-2xl font-bold text-gray-700 list-disc list-inside space-y-2">
                <li>React.js / TypeScript / JavaScript</li>
                <li>Front-End Development (HTML, CSS, Tailwind, Redux)</li>
                <li>Node.js & RESTful APIs</li>
                <li>UI/UX Design Understanding</li>
                <li>Problem Solving & Algorithmic Thinking</li>
            </ul>
        </div>
    )
}
