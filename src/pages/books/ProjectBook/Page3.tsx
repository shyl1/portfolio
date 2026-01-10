import aboutMe from "@assets/page6.webp";
import sedra from "@assets/sedra.png";

export default function Page3() {
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
        href="https://sedratravelinc.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h1 className="text-2xl md:text-4xl font-black px-3 text-black mb-2 md:mb-4 underline">
          Project: Sedra Travel Inc.
        </h1>
      </a>

      <div className="flex flex-row justify-between items-start gap-3 w-full">

        {/* Text Content */}
        <div className="w-[200px] md:w-full">
          <h2 className="text-lg md:text-xl font-bold mb-1 md:mb-2">About the Project</h2>
          <p className="mb-4 font-semibold text-[13px] md:text-lg">
            Sedra Travel Inc. is a U.S.-based travel company offering curated
            travel experiences in Egypt for American travelers.
          </p>

          <h2 className="text-lg md:text-xl font-bold mb-1 md:mb-2">My Role</h2>
          <ul className="list-disc list-inside mb-4 font-semibold text-[13px] md:text-lg">
            <li>Built the entire frontend using vanilla HTML, CSS, and JavaScript without relying on frontend frameworks</li>
            <li>Designed the complete UI/UX for the website</li>
            <li>Focused on a clear, to-the-point user experience</li>
            <li>Optimized content structure for American users</li>
            <li>Prioritized clarity, trust, and fast decision-making</li>
          </ul>

          <h2 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Design Highlights</h2>
          <ul className="list-disc list-inside font-semibold text-[13px] md:text-lg">
            <li>Minimal and direct content flow</li>
            <li>Clear call-to-actions for conversions</li>
            <li>User-centric layout tailored to U.S. audience expectations</li>
          </ul>
        </div>

        {/* Image */}
        <div className="w-[150px] md:w-[420px]">
          <img
            src={sedra}
            alt="Sedra Travel Inc website preview"
          />
        </div>

      </div>
    </div>
  );
}
