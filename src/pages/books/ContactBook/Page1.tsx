import aboutMe from "@assets/3.webp";
import Button from "@components/shared/Button";
import { useNavigate } from "react-router";
import LazyBackground from "@components/shared/LazyBackground";
import linkedin from '@assets/LinkedIn-Icon-Logo.wine.svg'
import github from '@assets/b2c5e65384b1b0ea4cd351b6155e1b29.jpg'
import email from '@assets/google-mail-gmail-logo-vector-260nw-2312650205.jpg'

export default function Page1() {
    const navigate = useNavigate();

    return (
        <LazyBackground
            src={aboutMe}
            className="font-heading h-full w-full flex flex-col justify-start items-start py-8"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: "inset 0 0 20px rgba(0,0,0,0.2)",
            }}
        >
            <div className="flex flex-col items-start justify-center gap-8 px-6 w-full h-full text-center">

                <h2 className="text-3xl md:text-5xl font-black mb-2 underline">Get in Touch</h2>

                <p className="text-sm md:text-xl font-semibold leading-relaxed max-w-2xl">
                    “I love building things and I’d love to hear from you! Drop me a message and I’ll get back ASAP.”
                </p>

                <div className="flex flex-wrap md:flex-row gap-4 md:gap-8 mt-4">
                    <a
                        href="https://www.linkedin.com/in/suhayla-ehab-389b753a3/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={linkedin} alt="LinkedIn" loading="lazy" className="w-32 h-32" />
                    </a>

                    <a
                        href="https://github.com/shyl1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={github} alt="GitHub" loading="lazy" className="w-32 h-32" />
                    </a>

                    <a
                        href="mailto:suhaylaehab1@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={email} alt="Email" loading="lazy" className="w-32 h-32" />
                    </a>
                </div>

                <div className="absolute bottom-8 right-8">
                    <Button
                        type="Previous"
                        action={() => navigate("/choosing")}
                    />
                </div>
            </div>
        </LazyBackground>
    );
}
