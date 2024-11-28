import Link from "next/link";

// home
// about
// products
// what's new
// financial status
// feedbacks
// teams
const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "about",
    link: "/pages/about",
  },
  {
    title: "what's new",
    link: "/pages/whats-new",
  },
  {
    title: "financial status",
    link: "/pages/financial-status",
  },
  {
    title: "feedbacks",
    link: "/pages/feedbacks",
  },
  {
    title: "team",
    link: "/pages/team",
  },
];

export default function Nav() {
  return (
    <div className=" flex justify-between py-5 px-3">
      <Link href="/" className="font-bold uppercase">
        Pablos MNL
      </Link>
      <ul className="flex">
        {links.map((l, i) => (
          <li key={i}>
            <Link
              href={l.link}
              className="hover:bg-[#333] hover:text-white hover:rounded-sm p-2 px-3"
            >
              {l.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
