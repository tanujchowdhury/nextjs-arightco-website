import Image from "next/image";
import Link from "next/link";

export default function BlogCard({
  src,
  alt,
  title,
  href,
  date,
}: {
  src: string;
  alt: string;
  title: string;
  href: string;
  date: string;
}) {
  return (
    <Link href={href}>
      <div className="flex flex-col drop-shadow-sm transition duration-300 rounded-md m-5 hover:drop-shadow-xl bg-white">
        <div className="w-full basis-1/2">
          <Image src={src} alt={alt} width={500} height={500} className="rounded-t-md" />
        </div>
        <div className="absolute top-0 right-0 m-3 p-2 bg-orange rounded-full text-sm text-white">CASE STUDY</div>
        <div className="basis-1/3 border-b-[1px]">
          <div className="text-xl font-bold text-blue p-3 pb-0 hover:text-orange-dark">{title}</div>
          <div className="text-sm font-bold text-orange-dark p-3">READ MORE...</div>
        </div>
        <div className="basis-1/4 text-sm p-2 pl-3">{date}</div>
      </div>
    </Link>
  );
}
