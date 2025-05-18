import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const projects: Project[] = [
{
  id: 1,
  title: "EatSphere",
  description: "Snack Delivery Application built with Kotlin and Android Studio, featuring real-time tracking and payment integration.",
  image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  tags: ["Kotlin", "Android Studio", "Firebase", "Payment Integration"],
  github: "https://github.com/vaibhavk10/EatSphere/"
},
{
  id: 2,
  title: "Food Express",
  description: "A responsive food delivery website built using HTML, CSS, and JavaScript.",
  image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  github: "https://github.com/vaibhavk10/Food-Express",
  demo: "https://vaibhavk10.github.io/Food-Express/"
},
{
  id: 3,
  title: "Blockchain Evidence Management",
  description: "Blockchain-based evidence management system using SHA-256 hashing to add, view, and delete records.",
  image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80",
  tags: ["Blockchain", "JavaScript", "SHA-256", "Web App"],
  demo: "https://blockchain-evidence-system.glitch.me/",
  github: "https://github.com/vaibhavk10/Blockchain-Evidence-System"
},
{
  id: 4,
  title: "ChatMate AI",
  description: "Modern chatbot powered by Google's Gemini API with an intuitive UI.",
  image: "https://images.unsplash.com/photo-1511296265581-c2450046447d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwbW9kZXJuJTIwY2hhdGJvdCUyMHBvd2VyZWQlMjBieSUyMEdvb2dsZSUyN3MlMjBHZW1pbmklMjBBUEklMjB3aXRoJTIwYW4lMjBpbnR1aXRpdmUlMjBVSS58ZW58MHx8fHwxNzQ3NTc3MzIzfDA&ixlib=rb-4.1.0&q=80&w=200$w=1632",
  tags: ["AI", "Gemini API", "JavaScript", "UI/UX"],
  github: "https://github.com/vaibhavk10/ChatMate-Ai",
  demo: "https://vaibhavk10.github.io/ChatMate-Ai/"
},
{
  id: 5,
  title: "WhatsApp Bot",
  description: "WhatsApp bot built using the Baileys library for group management, including features like tagging all members, muting/unmuting, and more.",
  image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
  tags: ["WhatsApp API", "Baileys", "Group Management", "Automation"],
  github: "https://github.com/vaibhavk10/WhatsApp-Bot"
},
{
  id: 6,
  title: "AI-Powered Task Management",
  description: "Real-time task management system powered by AI, featuring intelligent task suggestions, user authentication, and real-time updates using WebSockets.",
  image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80",
  tags: ["AI", "WebSockets", "Real-time", "Task Management"],
  github: "https://github.com/vaibhavk10/Ai-Task",
  demo: "https://ai-task-six.vercel.app//"
}];


const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white" data-id="5md4ca8rc" data-path="src/components/portfolio/Projects.tsx">
      <div className="container mx-auto px-4" data-id="bbfoc5wnz" data-path="src/components/portfolio/Projects.tsx">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="iqux1st45" data-path="src/components/portfolio/Projects.tsx">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6" data-id="fhbflcpp1" data-path="src/components/portfolio/Projects.tsx"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-id="ciqt074di" data-path="src/components/portfolio/Projects.tsx">
            Explore my latest work and personal projects that showcase my skills
            and passion for technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" data-id="2pop0oadm" data-path="src/components/portfolio/Projects.tsx">
          {projects.map((project, index) =>
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}>

              <ProjectCard project={project} />
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center">

          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full"
            asChild>

            <a href="https://github.com/vaibhavk10" target="_blank" rel="noopener noreferrer" data-id="v7ek8b1o1" data-path="src/components/portfolio/Projects.tsx">
              View More Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>);

};

const ProjectCard = ({ project }: {project: Project;}) => {
  return (
    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow group">
      <div className="relative aspect-[16/9] overflow-hidden" data-id="s3hbbfvjx" data-path="src/components/portfolio/Projects.tsx">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-id="rt32hmay9" data-path="src/components/portfolio/Projects.tsx" />

      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2" data-id="ab9ecanmy" data-path="src/components/portfolio/Projects.tsx">{project.title}</h3>
        <p className="text-gray-600 mb-4" data-id="gwh4m8fuu" data-path="src/components/portfolio/Projects.tsx">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4" data-id="le32zl0yt" data-path="src/components/portfolio/Projects.tsx">
          {project.tags.map((tag) =>
          <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 flex gap-3">
        {project.github &&
        <Button
          variant="outline"
          size="sm"
          className="gap-2"
          asChild>

            <a href={project.github} target="_blank" rel="noopener noreferrer" data-id="011bw2i22" data-path="src/components/portfolio/Projects.tsx">
              <Github size={16} />
              Code
            </a>
          </Button>
        }
        {project.demo &&
        <Button
          size="sm"
          className="gap-2"
          asChild>

            <a href={project.demo} target="_blank" rel="noopener noreferrer" data-id="00y4pd5nx" data-path="src/components/portfolio/Projects.tsx">
              <ExternalLink size={16} />
              Live Demo
            </a>
          </Button>
        }
      </CardFooter>
    </Card>);

};

export default Projects;