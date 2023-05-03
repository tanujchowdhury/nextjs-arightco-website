import Link from "next/link";

export default function ArticleFooterLink({
  href,
  title,
  date,
}: {
  href: string;
  title: string;
  date: string;
}) {
  return (
    <div className="py-1">
      <div className="pt-1 lg:text-base">
        <Link
          href={href}
          className="hover:text-orange whitespace-nowrap overflow-hidden text-ellipsis block lg:max-w-[15rem]"
        >
          {title}
        </Link>
      </div>
      <div className="text-gray-light text-sm">{date}</div>
      <div className="text-orange text-sm">
        <Link href={href}>Read More...</Link>
      </div>
    </div>
  );
}
