import PricingCard from "../cards/pricingcard";

export default function PricingModel({
  title,
  planinfo,
}: {
  title: string;
  planinfo: string[][];
}) {
  return (
    <div className="flex flex-col justify-center w-full pt-6 gap-4 px-10 sm:px-15 md:px-32 lg:px-20 min-[1350px]:px-32 lg:flex-row ">
      {planinfo.map((items: string[], index) => (
        <div className="flex-1" key={items[0]}>
          <PricingCard
            title={items[0]}
            price={items[1]}
            modalTitle={`${title}: ${items[0]}`}
            value={`New ${title}: ${items[0]} Quote Request!`}
            services={items.slice(2)}
            delay={index * 0.1}
          />
        </div>
      ))}
    </div>
  );
}
