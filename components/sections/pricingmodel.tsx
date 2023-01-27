import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PricingCard from "../cards/pricingcard";

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
    <>
      <div
        id={title}
        className="flex flex-col items-center justify-center gap-4 pt-20"
      >
        <div className="text-sm text-orange-dark font-bold">
          SERVICES AND PRICING
        </div>
        <div className="text-2xl md:text-4xl lg:text-5xl text-blue font-bold">
          {title}
        </div>
        <table className="text-center p-20 shadow-xl w-4/5">
          <thead>
            <tr className="bg-gradient-to-r from-blue-dark to-blue-light text-white text-xl">
              <th className="px-20 py-5">Services</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service: string) => (
              <tr key={service}>
                <td className="px-20 py-5 border-b border-gray-light bg-white">
                  {service}
                </td>
              </tr>
            ))}
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
              key={plans}
            />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center w-4/5 lg:flex-row">
          {planinfo.map((items: string[]) => (
            <PricingCard
              title={items[0]}
              price={items[1]}
              modalTitle={`${title}: ${items[0]}`}
              value={`New ${title}: ${items[0]} Quote Request!`}
              key={items[0]}
            />
          ))}
        </div>
      </div>
    </>
  );
}
