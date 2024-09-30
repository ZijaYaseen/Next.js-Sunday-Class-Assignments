import Link from "next/link"

export default function Header(){
    return (
        <div className="header">
    <ul className="header-btn">
        <Link href="/">
            <li className="cursor-pointer">Home</li>
        </Link>
        <Link href="/about">
            <li className="cursor-pointer">About</li>
        </Link>
        <Link href="/services">
            <li className="cursor-pointer">Services</li>
        </Link>
        <Link href="/certificates">
            <li className="cursor-pointer">Certificates</li>
        </Link>
        <Link href="/portfolio">
            <li className="cursor-pointer">Portfolio</li>
        </Link>
        <Link href="/contact">
            <li className="cursor-pointer">Contact</li>
        </Link>
    </ul>
</div>
    )
}