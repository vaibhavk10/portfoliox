import { motion } from "motion/react";
import { User, Calendar, MapPin, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white" data-id="0k47swuu8" data-path="src/components/portfolio/About.tsx">
      <div className="container mx-auto px-4" data-id="88uqti99g" data-path="src/components/portfolio/About.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="nym8feaks" data-path="src/components/portfolio/About.tsx">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6" data-id="bsb8s57l9" data-path="src/components/portfolio/About.tsx"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="1fin3flo8" data-path="src/components/portfolio/About.tsx">
            Get to know more about me, my background, and what drives me forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center" data-id="6g1z3b4ya" data-path="src/components/portfolio/About.tsx">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}>

            <div className="relative" data-id="epywhttua" data-path="src/components/portfolio/About.tsx">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg opacity-30 blur-lg" data-id="skprvmew7" data-path="src/components/portfolio/About.tsx"></div>
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg" data-id="e4frcqz55" data-path="src/components/portfolio/About.tsx">
                <img
                  src="/pp.png"
                  alt="Vaibhav Kumawat portrait"
                  className="w-full h-full object-cover"
                />

              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}>

            <h3 className="text-2xl font-bold mb-4" data-id="703ejuww8" data-path="src/components/portfolio/About.tsx">
              Web Developer & Android Developer
            </h3>
            <p className="text-gray-600 mb-6" data-id="j9hl7zwlp" data-path="src/components/portfolio/About.tsx">
              I am a passionate and dedicated undergraduate student pursuing a B.Tech in Electronics and Computer Engineering at Vellore Institute of Technology, Chennai. With a strong foundation in technology and a keen interest in innovation, I aim to enhance my skills and contribute to impactful projects.
            </p>
            <p className="text-gray-600 mb-8" data-id="69ixz3o03" data-path="src/components/portfolio/About.tsx">
              I'm a full-stack developer with expertise in Android and Web Development, building responsive websites and intuitive mobile applications. My journey in technology began with a deep interest in how applications can improve everyday life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-id="xxn5z6yn9" data-path="src/components/portfolio/About.tsx">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex items-center gap-3">
                  <User className="text-purple-600" size={20} />
                  <div data-id="lcygnxe8w" data-path="src/components/portfolio/About.tsx">
                    <p className="text-sm text-gray-500" data-id="hu4wnbsw6" data-path="src/components/portfolio/About.tsx">Name</p>
                    <p className="font-medium" data-id="7xmmoaslx" data-path="src/components/portfolio/About.tsx">Vaibhav Kumawat</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex items-center gap-3">
                  <Calendar className="text-purple-600" size={20} />
                  <div data-id="5jgun7fbm" data-path="src/components/portfolio/About.tsx">
                    <p className="text-sm text-gray-500" data-id="k61adoeht" data-path="src/components/portfolio/About.tsx">Age</p>
                    <p className="font-medium" data-id="rp22b8l49" data-path="src/components/portfolio/About.tsx">22</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex items-center gap-3">
                  <MapPin className="text-purple-600" size={20} />
                  <div data-id="8wobmr04z" data-path="src/components/portfolio/About.tsx">
                    <p className="text-sm text-gray-500" data-id="0lidn4cc5" data-path="src/components/portfolio/About.tsx">Location</p>
                    <p className="font-medium" data-id="q7v1rrshb" data-path="src/components/portfolio/About.tsx">Rajasthan , India</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 flex items-center gap-3">
                  <Globe className="text-purple-600" size={20} />
                  <div data-id="bn5dv8giq" data-path="src/components/portfolio/About.tsx">
                    <p className="text-sm text-gray-500" data-id="0uhc54gjs" data-path="src/components/portfolio/About.tsx">Study</p>
                    <p className="font-medium" data-id="qcepwirqg" data-path="src/components/portfolio/About.tsx">Electronics & Computer Engineering</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default About;
