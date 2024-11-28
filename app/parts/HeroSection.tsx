import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex justify-center items-center">
      {/* Brand mantra */}
      <div className="flex-1 p-5">
        <p className="text-3xl font-bold text-center">
          Deliciously Affordable, <br /> Uncompromisingly Quality
        </p>
        <div className="flex justify-center gap-2 mt-3">
          <Link
            href={"/pages/news"}
            className="hover:bg-black hover:text-white p-2 px-4 rounded-md"
          >
            Latest News
          </Link>
          <Link
            href={"/pages/business-info"}
            className="hover:bg-black hover:text-white p-2 px-4 rounded-md"
          >
            Business Info
          </Link>
        </div>
      </div>
      {/* Video Highlight */}
      <div className="flex-1 p-5">
        <video src="video1.mp4" controls className="rounded-lg">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
