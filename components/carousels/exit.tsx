export default function Exit({
  title,
  year,
  text,
}: {
  title: string;
  year: number;
  text: string;
}) {
  return (
    <div className="mx-3 bg-white rounded-lg p-6 h-[40vh]">
      <div className="text-blue text-2xl font-bold">{title}</div>
      <div className="text-white text-lg font-semibold bg-gradient-to-r from-orange-light to-orange-dark rounded w-16 text-center px-2 py-1 my-3">
        {year}
      </div>
      <div className="text-gray-dark">{text}</div>
    </div>
  );
}
