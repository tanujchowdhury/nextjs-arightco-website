import Link from "next/link";

export default function Day3TrainingHomePage() {
  return (
    <div className="p-10 flex flex-col gap-6">
      <Link className="absolute top-0 left-0 p-4" href="/training">
        ← Back to Training Home Page
      </Link>
      <h1 className="text-3xl pt-10">Day 3 Training</h1>
      <Link href="/training/day-3-training/qbo-training-part-2">QBO Training Part 2</Link>
    </div>
  );
}
