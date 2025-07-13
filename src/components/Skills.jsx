"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    color: "from-blue-500 to-purple-500",
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "Mongoose"],
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Languages",
    icon: "💻",
    skills: ["C", "C++", "Java", "Python", "JavaScript"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Other Tools",
    icon: "🚀",
    skills: ["API Handling", "AI Integration", "Git", "React Router", "Engineering Graphics"],
    color: "from-pink-500 to-indigo-500",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 bg-background overflow-hidden"
    >
      {/* Parallax background layer */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(0, 132, 255, 0.08) 0%, transparent 60%)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "150% 150%",
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A versatile toolkit powering scalable, secure, and modern web applications.
          </p>
        </div>

        {/* Skill Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group"
            >
              <Card className="bg-white/5 backdrop-blur-lg border border-white/10 hover:border-blue-500 group-hover:shadow-glow transition-all duration-500 rounded-3xl overflow-hidden">
                <CardContent className="p-6">
                  {/* Icon + Title */}
                  <div className="text-center mb-6">
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl shadow-md transition-all duration-300`}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  {/* Skill Badges */}
                  <div className="grid grid-cols-1 gap-3">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={skill}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(59,130,246,0.2)",
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="text-sm font-medium text-white text-center px-4 py-2 bg-secondary/40 rounded-xl cursor-default transition-all duration-200"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
