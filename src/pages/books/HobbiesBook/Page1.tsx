import aboutMe from "@assets/2.webp";
import Button from "@components/shared/Button";
import { useNavigate } from "react-router";
import LazyBackground from "@components/shared/LazyBackground";
import mattelliotbag from '@assets/MattElliotBag 1.png';
import mattelliot from '@assets/994ad9a4-0fd9-4fd2-bdee-5fb631490cbe.png'

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
        >            <div className="flex flex-row items-start justify-center gap-8 px-6 w-full h-full">
                <div className="w-full md:w-1/2 text-left">
                    <h2 className="text-3xl md:text-4xl font-black mb-4 underline">Crochet Bag</h2>
                    <p className="text-sm md:text-lg font-semibold leading-relaxed">
                        I made this crochet bag inspired by a <strong>Matt Elliot</strong> album.
                        The design reflects the mood and aesthetics of the album art, translating it into a wearable piece.
                        It was a meticulous process of choosing the right colors and stitch patterns to capture the essence of the music.
                    </p>
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <img src={mattelliot} alt="" loading="lazy" />
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center items-center">
                    <img src={mattelliotbag} alt="" loading="lazy" />
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
