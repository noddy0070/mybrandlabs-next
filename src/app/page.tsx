import Link from "next/link";

export default function Home() {
  return (
    <div className="text-foreground min-h-screen flex flex-col items-center w-full font-sans">
      <div className="bg-blue-200 p-4 rounded-lg m-4">
        <h1 className="text-black text-2xl font-bold">Tailwind Test</h1>
        <p className="text-gray-700">This should have a blue background</p>
      </div>
      <div className="bg-red-200 p-4 rounded-lg m-4">
        <h2 className="text-black text-xl font-bold">Another Test</h2>
        <p className="text-gray-700">This should have a red background</p>
      </div>
    </div>
  );
}
