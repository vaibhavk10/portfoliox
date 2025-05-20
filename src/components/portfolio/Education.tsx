import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import {
  BookOpen,
  Award,
  Calendar,
  GraduationCap } from
"lucide-react";

interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
}

interface Achievement {
  id: number;
  title: string;
  year: string;
  description: string;
}

const educationList: Education[] = [
{
  id: 1,
  degree: "Bachelor's in Electronics & Computer Engineering",
  institution: "Vellore Institute of Technology, Chennai",
  duration: "2021 - Currently studying",
  description: "CGPA: 8.39",
  icon: <GraduationCap size={32} className="text-purple-600" />
},
{
  id: 2,
  degree: "12th Grade",
  institution: "Matrix High School, Sikar",
  duration: "2020–2021",
  description: "Percentage: 96.80%",
  icon: <BookOpen size={32} className="text-purple-600" />
},
{
  id: 3,
  degree: "10th Grade",
  institution: "Gurukul Academy School",
  duration: "2019",
  description: "Percentage: 88.67%",
  icon: <Award size={32} className="text-purple-600" />
}];


const achievements: Achievement[] = [
{
  id: 1,
  title: "Research Paper Publication in IEEE",
  year: "2025",
  description: "Published research paper titled 'Minimum Variance Unbiased Estimators of Generalized Gaussian Distribution With an H-Proper Quaternion Random Variable' in IEEE."
},
{
  id: 2,
  title: "Android Developer Remote Intern",
  year: "2023",
  description: "SmartInternz (Remote) - Sept 2023 to Nov 2023: Developed Android applications using Kotlin and Android Studio."
},
{
  id: 3,
  title: "Front-End Development",
  year: "Current",
  description: "Creating responsive and interactive user interfaces using modern web technologies."
},
{
  id: 4,
  title: "Mobile App Development",
  year: "Current",
  description: "Building user-friendly Android applications using Kotlin."
},
{
  id: 5,
  title: "AI Chatbot Development",
  year: "Current",
  description: "Developing AI-powered chatbots using the latest APIs for real-time interaction and automation."
}];


const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50" data-id="o86zg17z6" data-path="src/components/portfolio/Education.tsx">
      <div className="container mx-auto px-4" data-id="u09xrj39l" data-path="src/components/portfolio/Education.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="ljy0zvgbr" data-path="src/components/portfolio/Education.tsx">Education & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6" data-id="oo80bfm67" data-path="src/components/portfolio/Education.tsx"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="rv246qg3y" data-path="src/components/portfolio/Education.tsx">
            My academic journey and notable achievements along the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-id="xv6pu84s6" data-path="src/components/portfolio/Education.tsx">
          <div data-id="ya5ecgkjm" data-path="src/components/portfolio/Education.tsx">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2" data-id="q1smy48mk" data-path="src/components/portfolio/Education.tsx">
              <GraduationCap size={24} className="text-purple-600" />
              Education
            </h3>
            
            <div className="relative" data-id="btrwzpxq4" data-path="src/components/portfolio/Education.tsx">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 ml-0.5" data-id="0saaxfejy" data-path="src/components/portfolio/Education.tsx"></div>
              
              {/* Timeline items */}
              <div className="space-y-12" data-id="j81rk2gu4" data-path="src/components/portfolio/Education.tsx">
                {educationList.map((item, index) =>
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative pl-20">

                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 bg-white p-2 rounded-full z-10 shadow-md" data-id="oayndtp78" data-path="src/components/portfolio/Education.tsx">
                      {item.icon}
                    </div>
                    
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-2 flex-wrap" data-id="mxbx45x78" data-path="src/components/portfolio/Education.tsx">
                          <h4 className="text-xl font-bold" data-id="uqv33mbyy" data-path="src/components/portfolio/Education.tsx">{item.degree}</h4>
                          <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded-full flex items-center gap-1" data-id="ljhuxucsx" data-path="src/components/portfolio/Education.tsx">
                            <Calendar size={14} />
                            {item.duration}
                          </span>
                        </div>
                        <p className="text-gray-500 mb-2" data-id="y69ugovb2" data-path="src/components/portfolio/Education.tsx">{item.institution}</p>
                        <p className="text-gray-600" data-id="mkcozw3mv" data-path="src/components/portfolio/Education.tsx">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          <div data-id="o1qamt2ny" data-path="src/components/portfolio/Education.tsx">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2" data-id="yb49t6ela" data-path="src/components/portfolio/Education.tsx">
              <Award size={24} className="text-purple-600" />
              Achievements
            </h3>
            
            <div className="grid gap-6" data-id="v6q1f55x5" data-path="src/components/portfolio/Education.tsx">
              {achievements.map((item, index) =>
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}>

                  <Card>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2" data-id="4lzr1quzp" data-path="src/components/portfolio/Education.tsx">
                        <h4 className="text-xl font-bold" data-id="mrllwlk44" data-path="src/components/portfolio/Education.tsx">{item.title}</h4>
                        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full" data-id="6isc4r1n4" data-path="src/components/portfolio/Education.tsx">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-gray-600" data-id="hm62ddse9" data-path="src/components/portfolio/Education.tsx">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default Education;