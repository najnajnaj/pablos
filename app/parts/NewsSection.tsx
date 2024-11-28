import Link from "next/link";

export default function NewsSection() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex-1 p-5">
        <ul>
          <li className="p-2">
            Hello BossMadam, Maliit na Price Increase lang po para tuloy-tuloy
            po tayo makapag-serve
          </li>
          <li className="p-2">Salamat po!</li>
          <li className="p-2">
            Due to the increase of prices on basic ingredients, vegetables,
            meat, cooking oil, etc., we wish to inform all our valued customers
            that there will be a minimal price change on our menu effective on
            28th November 2024.
          </li>
          <li className="p-2">
            We realized these are tough times, we have held the price steady for
            as long as we possibly can however, unfortunately with the price
            increases in the market and the insufficient supply, we will be
            updating our prices.
          </li>
          <li className="p-2">
            We ask for your understanding & appreciate your continuous support.
          </li>
        </ul>
      </div>
      {/* Video Highlight */}
      <div className="flex-1 p-5">
        <video src="../video1.mp4" controls className="rounded-lg">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
