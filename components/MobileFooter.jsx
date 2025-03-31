import Link from "next/link";
import { buttonVariants } from "./ui/button";

const MobileFooter = () => {
    // Define routes for footer
    const routes = [
        { name: "Home", path: "/" },
        { name: "Explore", path: "/explore" },
        { name: "How It Works", path: "/#howitworks" },
        { name: "Sign In", path: "/login" },
        { name: "Sign Up", path: "/brand/signup" },
    ];

    return (
        <nav className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-gray-200 shadow-md sm:hidden">
            <ul className="flex justify-around items-center h-14">
                {routes.map((route) => (
                    <li key={route.name}>
                        <Link
                            href={route.path}
                            className={buttonVariants({
                                variant: "ghost", // Keep style consistent
                                size: "sm",
                            })}
                        >
                            {route.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MobileFooter;