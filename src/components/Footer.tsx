import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed w-full flex flex-col justify-center mt-20 items-center gap-1">
      <ul className="flex items-center gap-8 dark:text-gray-400">
        <li>
          <Link className="text-sm" href="#">
            Twitter
          </Link>
        </li>
        <li className="list-disc">
          <Link className="text-sm" href="#">
            Developer
          </Link>
        </li>
        <li className="list-disc">
          <Link
            className="text-sm"
            href="https://github.com/ds-spec"
            target="_blank"
          >
            Github
          </Link>
        </li>
      </ul>
      <p className="text-gray-600 text-[12px] tracking-wider font-inter">
        &copy; 2025 Made By D:E:E:P
      </p>
    </footer>
  );
}
