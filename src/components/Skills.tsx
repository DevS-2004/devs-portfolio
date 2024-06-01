import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Backend", 
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "Mongoose"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Languages",
      icon: "💻", 
      skills: ["C", "C++", "Java", "Python", "JavaScript"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Other Tools",
      icon: "🚀",
      skills: ["API Handling", "AI Integration", "Git", "React Router", "Engineering Graphics"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-card/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and solving complex problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className="bg-secondary/50 hover:bg-primary/20 px-4 py-2 rounded-lg text-center font-medium transition-colors duration-200 cursor-default"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
