import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12" data-id="2fd5andl6" data-path="src/components/portfolio/Footer.tsx">
      <div className="container mx-auto px-4" data-id="u340st6hn" data-path="src/components/portfolio/Footer.tsx">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8" data-id="dono271m4" data-path="src/components/portfolio/Footer.tsx">
          <div className="md:col-span-2" data-id="l9k8ve9g1" data-path="src/components/portfolio/Footer.tsx">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-4">

              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4" data-id="qkq4xjp1l" data-path="src/components/portfolio/Footer.tsx">
                Vaibhav Kumawat
              </h3>
              <p className="text-gray-400 mb-4 max-w-md" data-id="7lhme2969" data-path="src/components/portfolio/Footer.tsx">
                A passionate Full Stack Developer specializing in modern web technologies
                and creating responsive, user-friendly applications.
              </p>
              <div className="flex space-x-4" data-id="l9yhg1ixp" data-path="src/components/portfolio/Footer.tsx">
                <SocialButton
                  icon={<Github size={18} />}
                  href="https://github.com/vaibhavk10"
                  label="GitHub" />

                <SocialButton
                  icon={<Linkedin size={18} />}
                  href="https://www.linkedin.com/in/vaibhavk10/"
                  label="LinkedIn" />

                <SocialButton
                  icon={<Twitter size={18} />}
                  href="https://twitter.com/vaibhavk_10"
                  label="Twitter" />

                <SocialButton
                  icon={<Instagram size={18} />}
                  href="https://www.instagram.com/vaibhavk.10"
                  label="Instagram" />

              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}>

            <h4 className="text-lg font-semibold mb-4" data-id="knu64nxay" data-path="src/components/portfolio/Footer.tsx">Quick Links</h4>
            <ul className="space-y-2" data-id="okkycop47" data-path="src/components/portfolio/Footer.tsx">
              <li data-id="gbspnnc3w" data-path="src/components/portfolio/Footer.tsx">
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors" data-id="rvran77sh" data-path="src/components/portfolio/Footer.tsx">

                  Home
                </a>
              </li>
              <li data-id="86ob8phm0" data-path="src/components/portfolio/Footer.tsx">
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors" data-id="bp14dbr5x" data-path="src/components/portfolio/Footer.tsx">

                  About
                </a>
              </li>
              <li data-id="a6p3u6820" data-path="src/components/portfolio/Footer.tsx">
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-white transition-colors" data-id="b9v0x2ls3" data-path="src/components/portfolio/Footer.tsx">

                  Skills
                </a>
              </li>
              <li data-id="7xou0xsg8" data-path="src/components/portfolio/Footer.tsx">
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors" data-id="vbsq9z0z6" data-path="src/components/portfolio/Footer.tsx">

                  Projects
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}>

            <h4 className="text-lg font-semibold mb-4" data-id="ltthco5a2" data-path="src/components/portfolio/Footer.tsx">Contact</h4>
            <ul className="space-y-2" data-id="yo28v9isl" data-path="src/components/portfolio/Footer.tsx">
              <li className="text-gray-400" data-id="5yivtzasw" data-path="src/components/portfolio/Footer.tsx">VIT Chennai, India</li>
              <li className="text-gray-400" data-id="2kzup2crg" data-path="src/components/portfolio/Footer.tsx">vaibhavkumawat1003@gmail.com</li>
              <li className="text-gray-400" data-id="udvapqq4w" data-path="src/components/portfolio/Footer.tsx">Contact via email or social media</li>
            </ul>
          </motion.div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center" data-id="g26d2xmvi" data-path="src/components/portfolio/Footer.tsx">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mb-4 md:mb-0">

            © {new Date().getFullYear()} Vaibhav Kumawat. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}>

            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
              onClick={scrollToTop}
              aria-label="Scroll to top">

              <ArrowUp size={20} />
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>);

};

interface SocialButtonProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialButton = ({ icon, href, label }: SocialButtonProps) =>
<Button
  variant="ghost"
  size="icon"
  className="bg-gray-800 hover:bg-gray-700 text-white rounded-full"
  asChild>

    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} data-id="05fm2qy7o" data-path="src/components/portfolio/Footer.tsx">
      {icon}
    </a>
  </Button>;


export default Footer;