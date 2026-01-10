
import aboutMe from "@assets/page6.webp";


export default function Page2() {

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
                    href="https://new-sys-dev-front.recipe-eg.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    
                >
                    <h1 className="text-2xl md:text-4xl font-black px-3 text-black mb-2 md:mb-4 underline">
                Project: Recipe
            </h1>
                </a>


            <div className="flex flex-col justify-between items-start h-full">
                <div className="flex flex-col justify-between items-start h-full">
                    
            <h2 className="text-lg md:text-xl font-bold mb-2">Admin Dashboard Features</h2>
            <ul className="list-disc list-inside mb-4 font-semibold text-[13px] md:text-lg">
                <li>Manage ingredients, approving or rejecting them with optional feedback</li>
                <li>Handle recipes, clients, employees, and batches</li>
                <li>Track service payments, delivery, and evaluations</li>
                <li>Full CRUD functionality across all entities</li>
            </ul>

            <h2 className="text-lg md:text-xl font-bold mb-2">Technologies Used</h2>
            <p className="mb-4 font-semibold text-[13px] md:text-lg">
                React, React Query, Tailwind CSS, API Integration
            </p>

            <h2 className="text-lg md:text-xl font-bold mb-2">Key Highlights</h2>
            <ul className="list-disc list-inside font-semibold text-[13px] md:text-lg">
                <li>Built an end-to-end workflow connecting clients and admins</li>
                <li>Implemented dynamic calculations for ingredient ratios</li>
                <li>Designed dashboards that handle complex operations while remaining user-friendly</li>
            </ul>


                    {/* <div className="flex items-end">
                        <Button type="Next" action={
                            () => navigate("/book/projects")
                        } />
                    </div> */}
                </div>


            </div>
        </div>
    )
}
