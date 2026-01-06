
import aboutMe from "@assets/page1.png"
import imge from "@assets/im1.png"
import Button from "@components/shared/Button"
import { useNavigate } from "react-router";

export default function Page1() {
    const navigate = useNavigate();
    return (

        <div
            className="font-heading h-full w-full flex flex-col justify-start items-start px-3 py-8"
            style={{
                backgroundImage: `url(${aboutMe})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)", // inner shadow for depth
            }}
        >
            <h1 className="text-3xl md:text-4xl font-black text-black mb-2 md:mb-4">About Me</h1>
            <div className="flex flex-row gap-2 md:gap-6 ">
                <div className="space-y-1 md:space-y-2 w-full md:w-2/3 text-[12px] md:text-lg leading-relaxed font-bold text-gray-800">

                    <p >
                        I work as a <span className="font-extrabold text-black">Front-End Developer</span> with a solid background in
                        <span className="font-extrabold text-black"> computer science</span>, building responsive and scalable web applications.
                    </p>

                    <p>
                        Most of my work revolves around
                        <span className="font-extrabold text-black "> React.js and TypeScript</span>, where I focus on
                        <span className="font-extrabold text-black "> clean architecture</span>, reusable components, and interfaces that remain
                        easy to maintain over time.
                    </p>

                    <p>
                        I enjoy translating <span className="font-extrabold text-black ">UI/UX designs</span> into intuitive,
                        user-centered experiences. I pay close attention to detail—both in the interface and in the
                        code behind it—and value collaboration with designers and backend developers.
                    </p>

                    <p>
                        My foundation in <span className="font-extrabold text-black ">data structures, algorithms, and OOP</span>
                        shapes the way I approach front-end development. I solve problems analytically, often refining
                        and refactoring code to make it clearer and more efficient.
                    </p>

                    <p>
                        I see learning as an ongoing process and consistently keep up with
                        <span className="font-extrabold text-black "> modern best practices</span> as the front-end ecosystem evolves.
                    </p>

                </div>

                <img
                    src={imge}
                    alt="about me"
                    className="w-[120px] md:w-1/3 max-h-[200px] rounded-lg shadow-lg self-start"
                />
            </div>


            <Button type="Previous" action={
                () => navigate("/book/contact")
            } />
        </div>


    )
}
