import aboutMe from "@assets/page6.webp";

export default function Page4() {

    return (
        <div
            className="font-heading h-full w-full flex flex-col justify-start px-3 items-start py-8"
            style={{
                backgroundImage: `url(${aboutMe})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)",
            }}
        >
            <a
                href="https://daraliman.yes-egypt.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h1 className="text-2xl md:text-4xl font-black px-3 text-black mb-2 md:mb-4 underline">
                    Project: Dar Al-Iman Travel Agency
                </h1>
            </a>

            <div className="flex flex-col justify-between items-start h-full">
                <div className="flex flex-col justify-between items-start h-full">

                    <div>
                        <h2 className="text-lg md:text-xl font-bold mb-2">About the Project</h2>
                    <p className="mb-4 font-semibold text-[13px] md:text-lg">
                        Dar Al-Iman is a travel agency website based in Lebanon.
                        The project focuses on delivering a clean, responsive,
                        and user-friendly interface for presenting travel services and information.
                    </p>
                    </div>

                    <div>
                        <h2 className="text-lg md:text-xl font-bold mb-2">My Role</h2>
                    <ul className="list-disc list-inside mb-4 font-semibold text-[13px] md:text-lg">
                        <li>Designed the complete UI/UX for the website</li>
                        <li>Developed the frontend using React and Tailwind CSS</li>
                        <li>Integrated frontend components with backend APIs</li>
                        <li>Ensured responsive design across all screen sizes</li>
                        <li>Focused on usability and smooth user experience</li>
                    </ul>
                    </div>

                    <div>
                        <h2 className="text-lg md:text-xl font-bold mb-2">Technologies Used</h2>
                    <p className="mb-4 font-semibold text-[13px] md:text-lg">
                        React, Tailwind CSS, API Integration
                    </p>
                    </div>

                    <div>
                        <h2 className="text-lg md:text-xl font-bold mb-2">Key Highlights</h2>
                    <ul className="list-disc list-inside font-semibold text-[13px] md:text-lg">
                        <li>Delivered a modern UI tailored for a travel agency</li>
                        <li>Built a responsive layout optimized for real users</li>
                        <li>Connected the UI with live API data</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
