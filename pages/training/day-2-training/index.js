import Link from "next/link";

export default function Day2TrainingHomePage() {
  return (
    <div className="p-10 flex flex-col gap-6">
      <Link className="fixed top-0 left-0 p-4" href="/training">
        ← Back to Training Home Page
      </Link>
      <h1 className="text-3xl pt-10 ">Day 2 Training</h1>
      <Link href="/training/day-2-training/qbo-training-part-1">QBO Training Part 1</Link>
    </div>
  );
}
