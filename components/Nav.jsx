import React from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { useRouter } from "next/router";

const MobileFooter = () => {
    const router = useRouter();

    // Define the routes (these are the top 5 from the Navbar)
    const routes = [
        { name: "Home", path: "/" },
        { name: "Explore", path: "/explore" },
        { name: "How It Works", path: "/#howitworks" },
        { name: "Sign In", path: "/login" },
        { name: "Sign Up", path: "/brand/signup" },
    ];

    return (
        <footer className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-gray-200 shadow-lg sm:hidden">
            <nav className="flex justify-around items-center py-2">
                {routes.map((route) => (
                    <Link
                        href={route.path}
                        key={route.name}
                        className={buttonVariants({
                            variant: router.pathname === route.path ? "solid" : "ghost",
                            size: "sm",
                        })}
                    >
                        {route.name}
                    </Link>
                ))}
            </nav>
        </footer>
    );
};

export default MobileFooter;