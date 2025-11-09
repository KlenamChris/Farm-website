import Link from "next/link";

export default function Navbar() {
    return (
        <header className="max-w-3xl mx-auto flex justify-between items-center px-4 py-2 rounded-full bg-white/75 text-black">
            <div>
                <Link href="/" className="text-xl font-bold">1A Farms</Link>
            </div>
            <div className="flex">
                <Link href="/" className="px-6 py-2 rounded-full hover:bg-black/10 transition-colors">Home</Link>
                <Link href="/about" className="px-6 py-2 rounded-full hover:bg-black/10 transition-colors">About</Link>
                <Link href="/team" className="px-6 py-2 rounded-full hover:bg-black/10 transition-colors">Team</Link>
                <Link href="/testimonials" className="px-6 py-2 rounded-full hover:bg-black/10 transition-colors">Testimonials</Link>
                <Link href="/contact" className="px-6 py-2 rounded-full hover:bg-black/10 transition-colors">Contact</Link>
            </div>
            <div>
                <button className="bg-black text-white px-6 py-2 rounded-full">Login</button>
            </div>
        </header>
    )
}