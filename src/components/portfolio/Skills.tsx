import { motion } from "motion/react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Database, Palette, Brain } from "lucide-react";

interface Skill {
  name: string;
  progress: number;
}

const Skills = () => {
  const technicalSkills: Skill[] = [
  { name: "HTML", progress: 95 },
  { name: "CSS", progress: 90 },
  { name: "JavaScript", progress: 85 },
  { name: "Java", progress: 85 },
  { name: "Python", progress: 80 },
  { name: "C", progress: 75 },
  { name: "SQL", progress: 80 },
  { name: "Kotlin", progress: 85 }];


  const designSkills: Skill[] = [
  { name: "UI/UX Design", progress: 80 },
  { name: "Canva", progress: 85 },
  { name: "Responsive Design", progress: 90 },
  { name: "Graphic Design", progress: 75 }];


  const dataSkills: Skill[] = [
  { name: "Android Studio", progress: 90 },
  { name: "Kali Linux", progress: 75 },
  { name: "Firebase", progress: 85 },
  { name: "Heroku", progress: 75 },
  { name: "Vercel", progress: 80 },
  { name: "Git", progress: 85 }];


  const softSkills: Skill[] = [
  { name: "Communication", progress: 90 },
  { name: "Problem Solving", progress: 85 },
  { name: "Teamwork", progress: 90 },
  { name: "Time Management", progress: 80 },
  { name: "Leadership", progress: 75 }];


  return (
    <section id="skills" className="py-20 bg-gray-50" data-id="jkp94hjxl" data-path="src/components/portfolio/Skills.tsx">
      <div className="container mx-auto px-4" data-id="b7pnf1mzp" data-path="src/components/portfolio/Skills.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="zob7cx5lp" data-path="src/components/portfolio/Skills.tsx">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6" data-id="x0kimvzat" data-path="src/components/portfolio/Skills.tsx"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="ytqkeefbm" data-path="src/components/portfolio/Skills.tsx">
            A showcase of my technical abilities and competencies developed
            through academic and personal projects.
          </p>
        </motion.div>

        <Tabs defaultValue="technical" className="max-w-3xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="technical" className="flex items-center gap-2">
              <Code size={16} />
              <span className="hidden sm:inline" data-id="v90d7mp98" data-path="src/components/portfolio/Skills.tsx">Technical</span>
            </TabsTrigger>
            <TabsTrigger value="design" className="flex items-center gap-2">
              <Palette size={16} />
              <span className="hidden sm:inline" data-id="lhqfbshhp" data-path="src/components/portfolio/Skills.tsx">Design</span>
            </TabsTrigger>
            <TabsTrigger value="data" className="flex items-center gap-2">
              <Database size={16} />
              <span className="hidden sm:inline" data-id="b03hsk0au" data-path="src/components/portfolio/Skills.tsx">Data</span>
            </TabsTrigger>
            <TabsTrigger value="soft" className="flex items-center gap-2">
              <Brain size={16} />
              <span className="hidden sm:inline" data-id="jv7iwv81l" data-path="src/components/portfolio/Skills.tsx">Soft Skills</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technical">
            <SkillList skills={technicalSkills} />
          </TabsContent>

          <TabsContent value="design">
            <SkillList skills={designSkills} />
          </TabsContent>

          <TabsContent value="data">
            <SkillList skills={dataSkills} />
          </TabsContent>

          <TabsContent value="soft">
            <SkillList skills={softSkills} />
          </TabsContent>
        </Tabs>
      </div>
    </section>);

};

const SkillList = ({ skills }: {skills: Skill[];}) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid gap-6" data-id="70rya2x9m" data-path="src/components/portfolio/Skills.tsx">
          {skills.map((skill, index) =>
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}>

              <div className="flex justify-between mb-2" data-id="ovb33udtb" data-path="src/components/portfolio/Skills.tsx">
                <span className="font-medium" data-id="09dn0d29b" data-path="src/components/portfolio/Skills.tsx">{skill.name}</span>
                <span className="text-gray-500" data-id="kuk454806" data-path="src/components/portfolio/Skills.tsx">{skill.progress}%</span>
              </div>
              <Progress value={skill.progress} className="h-2" />
            </motion.div>
          )}
        </div>
      </CardContent>
    </Card>);

};

export default Skills;