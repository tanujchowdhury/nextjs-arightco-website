import Link from "next/link";

export default function TrainingHomePage() {
  return (
    <div className="p-10 flex flex-col gap-6">
      <h1 className="text-3xl pt-10 ">Training Manual</h1>
      <Link href="/training/day-1-training">Day 1 Training</Link>
      <Link href="/training/day-1-training">Day 2 Training</Link>
    </div>
  );
}
