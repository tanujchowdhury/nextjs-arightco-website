import Image from "next/image";

export default function Testimonial({
  logo,
  logo_alt,
  quote,
  avatar,
  avatar_alt,
  name,
  title,
}: {
  logo: string;
  logo_alt: string;
  quote: string;
  avatar: string;
  avatar_alt: string;
  name: string;
  title: string;
}) {
  return (
    <div className="carousel-item active">
      <div className="content-tests">
        <div className="testimonial">
          <blockquote>
            <Image src={logo} alt={logo_alt} width={120} height={60} />
            {quote}
          </blockquote>
          <div></div>
          <Image
            src={avatar}
            alt={avatar_alt}
            width={60}
            height={60}
            className="rounded-full"
          />
          <p className="font-bold mt-2">{name}</p>
          <p className="text-orange-dark">{title}</p>
        </div>
      </div>
    </div>
  );
}
