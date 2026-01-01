import aboutMe from "@assets/AboutMe.webp";
import imge from "@assets/im1.png";

export default function AboutMe() {
  return (
    <section className="font-heading h-screen" style={{backgroundImage: `url(${aboutMe})` , backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
      {/* container in center */}
      <div className="p-11 grid grid-cols-1 md:grid-cols-2">

        {/* first part */}
        <div>
          <h1 className="text-4xl font-bold">About Me</h1>
          <div className="flex gap-5  py-10">
          <p className="text-xl">I am a software developer with a passion for creating innovative and user-friendly applications. I have experience working with a variety of programming languages and frameworks, and I am always eager to learn new technologies and techniques.</p>
            <img src={imge} alt="about me" className=""/>
          </div>
        </div>


        {/* second part */}
        <div>
          <h1 className="text-4xl font-bold">My Skills</h1>
          <p className="text-xl">I am a software developer with a passion for creating innovative and user-friendly applications. I have experience working with a variety of programming languages and frameworks, and I am always eager to learn new technologies and techniques.</p>
        </div>


      </div>

    </section>
  )
}
