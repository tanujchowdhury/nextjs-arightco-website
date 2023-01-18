import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PricingModel({
  title,
  services,
  plans,
  planinfo,
}: {
  title: string;
  services: string[];
  plans: number;
  planinfo: string[][];
}) {
  return (
    <div
      id={title}
      className="flex flex-col items-center justify-center gap-4 pt-20"
    >
      <div className="text-sm text-orange-dark font-bold">
        SERVICES AND PRICING
      </div>
      <div className="text-2xl text-blue font-bold">{title}</div>
      <table className="text-center p-20 shadow-xl w-4/5">
        <thead>
          <tr className="bg-gradient-to-r from-blue-dark to-blue-light text-white text-xl">
            <th className="px-20 py-5">Services</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-20 py-5 border-b border-gray-light bg-white">
              {services[0]}
            </td>
          </tr>
          <tr>
            <td className="px-20 py-5 border-b border-gray-light bg-white">
              {services[1]}
            </td>
          </tr>
          <tr>
            <td className="px-20 py-5 border-b border-gray-light bg-white">
              {services[2]}
            </td>
          </tr>
          <tr>
            <td className="px-20 py-5 border-b border-gray-light bg-white">
              {services[3]}
            </td>
          </tr>
          <tr>
            <td className="px-20 py-5 border-b border-gray-light bg-white">
              {services[4]}
            </td>
          </tr>
          <tr>
            <td className="px-20 py-5 border-b border-gray-light bg-white">
              {services[5]}
            </td>
          </tr>
          <tr>
            <td className="px-20 py-5 bg-white">{services[6]}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex flex-row w-4/5 justify-around text-orange-dark">
        <FontAwesomeIcon
          icon={faCaretDown}
          className="w-16 h-16 block lg:hidden"
        />
        {[...Array(plans)].map(() => (
          <FontAwesomeIcon
            icon={faCaretDown}
            className="w-16 h-16 hidden lg:block"
          />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center w-4/5 lg:flex-row">
        {planinfo.map((items: string[]) => (
          <div className="flex flex-col items-center jusitfy-center bg-white p-5 m-3 shadow-lg w-full gap-3">
            <div className="text-xl font-bold">{items[0]}</div>    
            <div className="text-gray-dark">{items[1]}</div>
            <button className="bg-gradient-to-r from-orange-dark to-orange-light rounded-full text-white font-bold text-sm h-10 w-20">SELECT</button>
          </div>
        ))}
      </div>
    </div>
  );
}
