export default function IconGroup({
    icon,
    title,
    text,
}:{
    icon: React.ReactNode;
    title: string;
    text: string;
}) {
    return (
        <div className="flex flex-row items-center pt-5">
            <div className="bg-gradient-to-r from-blue-dark to-blue-light rounded-full p-3 text-orange">
              {icon}
            </div>
            <div className="pl-3">
              <div className="text-2xl text-blue font-bold">{title}</div>
              <div className="text-gray-dark">{text}</div>
            </div>
          </div>
    );
}