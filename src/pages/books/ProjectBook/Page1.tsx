import aboutMe from "@assets/page5.webp";
import Recipe from "@assets/Journal (1).png";
import Button from "@components/shared/Button";
import { useNavigate } from "react-router";

export default function Page1() {
    const navigate = useNavigate();

    return (
        <div
            className="font-heading h-full w-full flex flex-col justify-start items-start py-8"
            style={{
                backgroundImage: `url(${aboutMe})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)",
            }}
        >
            <a
                    href="https://new-sys-dev-front.recipe-eg.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    
                >
                    <h1 className="text-2xl md:text-4xl font-black px-3 text-black mb-2 md:mb-4 underline">
                Project: Recipe
            </h1>
                </a>
            

            <img src={Recipe} alt="Recipe Project Screenshot" className="mb-2 md:mb-4" />


                

            <div className=" p-4  max-w-3xl mx-3 mb-1 md:mb-4">
                <h2 className="text-lg md:text-xl font-bold mb-2">Overview</h2>
                <p className="mb-4 font-semibold text-[13px] md:text-lg">
                    Recipe is a comprehensive platform for creating, managing, and evaluating spice recipes. It serves both
                    clients who request and test recipes, and admins who manage ingredients, recipes, and operations.
                </p>

                <h2 className="text-lg md:text-xl font-bold mb-2">Client Dashboard Features</h2>
                <ul className="list-disc list-inside font-semibold mb-4 text-[13px] md:text-lg">
                    <li>Create custom spice recipes with ingredient ratios and grams automatically calculated</li>
                    <li>Request sample testing if the manufacturer allows</li>
                    <li>Add new ingredients to recipes</li>
                    <li>Rate recipes and request peer evaluations</li>
                    <li>Reorder recipes or batches with one click</li>
                </ul>
            </div>

            <div className="px-3">
                <Button
                    type="Previous"
                    action={() => navigate("/book/hobbies")}
                />
            </div>
        </div>
    );
}
