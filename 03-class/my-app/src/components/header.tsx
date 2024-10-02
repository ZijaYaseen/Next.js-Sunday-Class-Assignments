import Link from "next/link"

export default function Header() {
    return (
        <div className="flex justify-between items-center bg-gray-900 text-white">
            {/* Left-aligned Name logo */}
            <div className="nav-logo">
                Zija<span className="text-cyan-500">Yaseen</span>
            </div>

            {/* Right-aligned Navigation Links */}
            <div>
                <ul className="nav-links">
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                    <Link href="/about">
                        <li>About</li>
                    </Link>
                    <Link href="/services">
                        <li>Services</li>
                    </Link>
                    <Link href="/certificates">
                        <li>Certificates</li>
                    </Link>
                    <Link href="/portfolio">
                        <li>Portfolio</li>
                    </Link>
                    <Link href="/contact">
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
