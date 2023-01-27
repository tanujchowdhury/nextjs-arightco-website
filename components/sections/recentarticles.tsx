import BlogCard from "../cards/blogcard";

export default function RecentArticles() {
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row min-[1350px]:mx-32">
      <BlogCard
        src={"/casestudies/images/nex.png"}
        alt={"Nexient NTT Data"}
        title={"Nexient NTT Data"}
        href={"/nexient-ntt-data"}
        date={"March 1, 2022"}
      />
      <BlogCard
        src={"/casestudies/images/49ers.png"}
        alt={"49ers Academy"}
        title={"49ers Academy"}
        href={"/49ers-academy"}
        date={"March 1, 2022"}
      />
      <BlogCard
        src={"/casestudies/images/sage.png"}
        alt={"Sagetech"}
        title={"Sagetech"}
        href={"/sagetech"}
        date={"March 1, 2022"}
      />
    </div>
  );
}
