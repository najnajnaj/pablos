import Link from "next/link";

export default function BusinessInfo() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex-1 p-5 flex justify-center">
        <ul>
          <li className="p-2">
            Location: 1445, Valenzuela City, National Capital Region,
            Philippines
          </li>
          <li className="p-2">Mobile No: 0995 - 830 - 1568</li>
        </ul>
      </div>
      {/* Video Highlight */}
      {/* <div className="flex-1 p-5">
        <video src="../video1.mp4" controls className="rounded-lg">
          Your browser does not support the video tag.
        </video>
      </div> */}
    </div>
  );
}
