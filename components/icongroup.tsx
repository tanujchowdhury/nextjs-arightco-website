import Link from "next/link";

export default function IconGroup({
  icon,
  title,
  text,
  href1,
  href2,
}: {
  icon: React.ReactNode;
  title: string;
  text: string[];
  href1: string;
  href2?: string;
}) {
  return (
    <div className="flex flex-row items-center pt-5">
      <div className="bg-gradient-to-r from-blue-dark to-blue-light rounded-full p-3 text-orange">
        {icon}
      </div>
      <div className="pl-3">
        <div className="text-2xl text-blue font-bold">{title}</div>
        <div className="text-gray-dark">
          <Link href={href1} target="_blank" className="hover:text-orange-dark">
            {text[0]}
          </Link>
        </div>
        <div className="text-gray-dark">
          <Link
            href={href2 ? href2 : "/"}
            target="_blank"
            className="hover:text-orange-dark"
          >
            {text[1]}
          </Link>
        </div>
      </div>
    </div>
  );
}
