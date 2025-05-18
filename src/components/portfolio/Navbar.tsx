import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
{ name: "Home", href: "#home" },
{ name: "About", href: "#about" },
{ name: "Skills", href: "#skills" },
{ name: "Projects", href: "#projects" },
{ name: "Education", href: "#education" },
{ name: "Contact", href: "#contact" }];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ?
      "bg-white/90 backdrop-blur-md shadow-md py-2" :
      "bg-transparent py-4"}`
      }
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>

      <div className="container mx-auto px-4 md:px-6" data-id="gu5ef8d6o" data-path="src/components/portfolio/Navbar.tsx">
        <div className="flex justify-between items-center" data-id="y0hz59g7e" data-path="src/components/portfolio/Navbar.tsx">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">

            Vaibhav Kumawat
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1" data-id="k7n9tuoei" data-path="src/components/portfolio/Navbar.tsx">
            {navItems.map((item, index) =>
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}>

                <Button
                variant="ghost"
                size="sm"
                className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors"
                asChild>

                  <a href={item.href} data-id="kufewl86q" data-path="src/components/portfolio/Navbar.tsx">{item.name}</a>
                </Button>
              </motion.div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden" data-id="evoi3x58w" data-path="src/components/portfolio/Navbar.tsx">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle Menu">

              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden mt-2 pb-4">

            <div className="flex flex-col space-y-2 bg-white rounded-lg shadow-lg p-4" data-id="acgbytdot" data-path="src/components/portfolio/Navbar.tsx">
              {navItems.map((item) =>
            <Button
              key={item.name}
              variant="ghost"
              size="sm"
              className="justify-start"
              asChild
              onClick={() => setIsOpen(false)}>

                  <a href={item.href} data-id="373ohojpa" data-path="src/components/portfolio/Navbar.tsx">{item.name}</a>
                </Button>
            )}
            </div>
          </motion.div>
        }
      </div>
    </motion.nav>);

};

export default Navbar;