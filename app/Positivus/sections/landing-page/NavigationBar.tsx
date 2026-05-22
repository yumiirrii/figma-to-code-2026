import Link from "next/link";
import { Button } from "../../components/Button";
import Image from "next/image";

export const NavigationBar = () => {
    const navLinks = [
        { name: "About Us", href: "" },
        { name: "Services", href: "" },
        { name: "Use Cases", href: "" },
        { name: "Pricing", href: "" },
        { name: "Blog", href: "" },
    ];

    return (
        <nav className="flex items-center">
            <Image src="/Logo.svg" alt="logo" width={219.54} height={36} />
            <div className="w-full flex gap-x-10 text-xl items-center justify-end">
                {navLinks.map((link) => (
                    <Link key={link.name} href={link.href}>
                        {link.name}
                    </Link>
                ))}
                <Button label="Request a quote" />
            </div>
        </nav>
    );
};
