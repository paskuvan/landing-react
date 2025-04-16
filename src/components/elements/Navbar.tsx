import { Container } from "../shared/Container";


const navItems = [
    {href: "#", text: "Home"},
    {href: "#services", text: "Services"},
    {href: "#about-us", text: "About Us"},
    {href: "#features", text: "Features"},
];

export const Navbar = () => {
    return <header className="absolute inset-x-0 top-0 z-50 py-6">
        <Container>
            <nav className="w-full flex justify-between gap-6 relative">
               
            <div className="min-w-max inline-flex relative">
            <div className="inline-flex text-lg font-semibold text-heading-1">
                  EdgeAI
                </div>
          </div>
            </nav>
        </Container>
    </header>;
};