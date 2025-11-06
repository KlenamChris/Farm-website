import Link from "next/link";

export default function Navbar() {
    return (
        <header className="max-w-2xl mx-auto flex justify-between items-center px-4 py-2 rounded-full bg-white/75 text-black">
            <div>
                <h1 className="text-xl font-bold">1A Farms</h1>
            </div>
            <div className="flex gap-6 text-gray-700 hover:text-black transition-colors">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/team">Team</Link>
                <Link href="/testimonials">Testimonials</Link>
                <Link href="/contact">Contact</Link>
            </div>
            <div>
                <button className="bg-black hover:bg-black/80 transition-all duration-300 text-white px-6 py-2 rounded-full">Login</button>
            </div>
        </header>
    )
}