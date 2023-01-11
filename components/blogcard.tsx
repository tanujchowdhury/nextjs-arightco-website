import Image from "next/image";

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
    <div>
      <Image
        src={src}
        alt={alt}
        width={300}
        height={200}
      />
    </div>
  );
}
