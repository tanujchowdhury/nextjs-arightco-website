export default function ServiceCard({
  title,
  content,
}: {
  title: string;
  content: string[];
}) {
  return (
    <div className="bg-white rounded-xl text-blue hover:text-white hover:bg-gradient-to-r hover:from-blue-dark hover:to-blue-light px-10 py-5 w-4/5 lg:w-1/4 lg:h-[50vh] min-[1350px]:h-[40vh]">
      <div className="text-2xl font-bold">{title}</div>
      <ul className="list-disc pl-5 pt-3">
        {content.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
