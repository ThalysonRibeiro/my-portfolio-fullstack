import { AnimatedBackground } from "@/AnimatedBackground/AnimatedBackground";
import Link from "next/link";

export default function Thanks() {


  return (
    <section id="home" className="h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className='absolute w-[900px] h-full -top-0 -z-10 '>
        <AnimatedBackground />
      </div>
      <h1 className="text-7xl font-bold text-center mb-2 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        Thanks!{' '}
      </h1>
      <h2 className="text-2xl md:text-2xl font-bold text-center">
        Your action has been successfully registered.
      </h2>

      <div className="flex gap-4 mt-4">
        <Link
          href="/pt-br"
        >
          <button
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
          >
            Back to home page
          </button>
        </Link>
      </div>

    </section>
  )
}