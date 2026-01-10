import aboutMe from "@assets/page5.webp";
import Button from "@components/shared/Button";
import { useNavigate } from "react-router-dom";

export default function Page5() {
    const navigate = useNavigate();

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
                href="https://thomascook.tours/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h1 className="text-2xl md:text-4xl font-black px-3 text-black mb-2 md:mb-4 underline">
                    Project: Thomas Cook Tours
                </h1>
            </a>

            <div className="flex flex-col  items-start gap-6 w-full">

                {/* Text Content */}
                <div className="w-full">
                    <h2 className="text-lg md:text-xl font-bold mb-1">About the Project</h2>
                    <p className="mb-4 font-semibold text-[13px] md:text-lg">
                        Thomas Cook Tours is a travel company offering Hajj and Umrah services
                        during the pilgrimage seasons, as well as domestic and international
                        tourism programs throughout the year.
                    </p>



                    <h2 className="text-lg md:text-xl font-bold mb-1">My Role</h2>
                    <ul className="list-disc list-inside  font-semibold text-[13px] md:text-lg">
                        <li>Built the entire frontend using vanilla HTML, CSS, and JavaScript without relying on frontend frameworks</li>
                        <li>Worked on frontend development and UI/UX design</li>
                        <li>Designed user flows for browsing and selecting travel programs</li>
                        <li>Created a client profile experience</li>
                        <li>Focused on clarity and ease of use for different user types</li>
                    </ul>

                    <h2 className="text-lg md:text-xl font-bold mb-1">Key Features</h2>
                    <ul className="list-disc list-inside font-semibold text-[13px] md:text-lg">
                        <li>Hajj and Umrah program listings</li>
                        <li>Domestic and international travel programs</li>
                        <li>User profiles with program reviews and ratings</li>
                        <li>Ability to add programs to favorites</li>
                    </ul>
                </div>

                <div className="px-3">
                    <Button
                        type="Next"
                        action={() => navigate("/book/about")}
                    />
                </div>

            </div>
        </div>
    );
}
