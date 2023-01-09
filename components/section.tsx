export default function Section({
  title1,
  title2,
  text,
  blueBackground,
}: {
  title1: string;
  title2: string;
  text: string;
  blueBackground: boolean;
}) {
  return !blueBackground ? (
    <div className="text-center py-10 px-2">
      <div className="text-orange font-semibold ">{title1}</div>
      <div className="text-blue-dark text-2xl py-3 md:py-10 md:text-4xl lg:text-5xl font-bold">
        {title2}
      </div>
      <div className="text-gray-dark md:text-lg max-w-2xl mx-auto">{text}</div>
    </div>
  ) : (
    <div className="text-center py-10 px-2 bg-gradient-to-r from-blue to-blue-light md:py-32 lg:py-44">
      <div className="text-orange font-semibold ">{title1}</div>
      <div className="text-white text-2xl py-3 md:py-10 md:text-4xl lg:text-5xl font-bold">
        {title2}
      </div>
      <div className="text-white md:text-lg max-w-2xl mx-auto">{text}</div>
    </div>
  );
}
