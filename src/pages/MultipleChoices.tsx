import { NavLink } from "react-router"

export default function MultipleChoices() {

  return (
    <section className="bg-[url('/images/multiple-choices-bg.png')] bg-cover bg-center h-screen w-screen flex items-center justify-center">
      <div className=" w-2/3 h-2/3 relative select-none">
      {/* contact page */}
        <NavLink to={'/contact'} className="absolute sm:top-0 left-[40%] top-[20%] transform transition-transform hover:scale-110">
          <span className="cursor-pointer text-2xl sm:text-4xl lg:text-7xl font-heading underline decoration-2 underline-offset-8 text-white">{`[Contact]`}</span>
        </NavLink>
        {/* about me page */}
        <NavLink to={'/about-me'} className="absolute top-[50%] left-0 transform transition-transform hover:scale-110 ">
          <span className="cursor-pointer text-2xl sm:text-4xl lg:text-7xl  font-heading underline decoration-2 underline-offset-8 text-white">{`[About Me]`}</span>
        </NavLink>
        {/* projects page */}
        <div  className="absolute top-[50%] right-0 transform transition-transform hover:scale-110">
          <span className="cursor-pointer text-2xl sm:text-4xl lg:text-7xl  font-heading underline decoration-2 underline-offset-8 text-white">{`[Projects]`}</span>
        </div>
        {/* hobbies page */}
        <div  className="absolute bottom-[20%] sm:bottom-0 left-[40%] transform transition-transform hover:scale-110">
          <span className="cursor-pointer text-2xl sm:text-4xl lg:text-7xl  font-heading underline decoration-2 underline-offset-8 text-white">{`[Hobbies]`}</span>
        </div>
      </div>
    </section>
  )
}
