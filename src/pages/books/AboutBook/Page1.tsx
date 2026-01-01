
import aboutMe from "@assets/page1.png"
import imge from "@assets/im1.png"

export default function Page1() {
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
            <h1 className="text-4xl font-black text-black mb-4">About Me</h1>
            <div className="flex flex-row gap-5 py-4 text-black">
                <p className="text-md md:text-2xl font-bold w-full md:w-2/3">
                    I am a software developer with a passion for creating innovative
                    and user-friendly applications. I have experience working with a
                    variety of programming languages and frameworks, and I am always
                    eager to learn new technologies and techniques.
                </p>
                <img src={imge} alt="about me" className="w-[100px] md:w-1/3 rounded-lg shadow-lg" />
            </div>
        </div>


    )
}
