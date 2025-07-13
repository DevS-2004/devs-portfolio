"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Users, Download } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const handleResumeClick = () => {
    const resumeUrl = "/resume.pdf";
    window.open(resumeUrl, "_blank");
    const a = document.createElement("a");
    a.href = resumeUrl;
    a.download = "Devendra_Singh_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section id="about" className="py-28 bg-background">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold tracking-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 🔵 LEFT COLUMN - BIO / RESUME */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="group relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl p-10 shadow-xl transition-all duration-500 hover:shadow-glow hover:scale-[1.02] hover:border-blue-500"
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                I’m a final-year{" "}
                <span className="text-primary font-bold">B.Tech IT student</span> at
                NIT Jalandhar, passionate about building scalable digital solutions
                and tackling real-world challenges.
              </p>
              <p>
                My core strengths lie in{" "}
                <span className="text-blue-400 font-bold">
                  backend systems, API design, and authentication
                </span>
                , paired with strong frontend skills using React and Tailwind CSS.
              </p>
              <p>
                I thrive in building{" "}
                <span className="text-primary font-bold">
                  intuitive, clean, and AI-integrated software
                </span>{" "}
                that creates real value and seamless UX.
              </p>
            </div>

            <div className="mt-10 flex justify-start">
              <Button
                onClick={handleResumeClick}
                className="relative bg-gradient-to-r from-primary to-blue-500 text-background px-6 py-3 font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 group"
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>
          </motion.div>

          {/* 🟦 RIGHT COLUMN - CARDS */}
          <div className="space-y-10">
            {/* Education Card */}
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: 1,
                y: -10,
                transition: { type: "spring", stiffness: 250, damping: 15 },
              }}
              className="group"
            >
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 group-hover:border-blue-500 group-hover:shadow-glow transition-all duration-500 rounded-3xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                        Education
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Academic Background
                      </p>
                    </div>
                  </div>
                  <div className="space-y-1 ml-1">
                    <div className="font-medium text-base">
                      B.Tech (Information Technology)
                    </div>
                    <div className="text-primary font-semibold">
                      NIT Jalandhar
                    </div>
                    <div className="text-sm text-muted-foreground">
                      2023 - 2027 (Final Year)
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Soft Skills Card */}
            <motion.div
              whileHover={{
                scale: 1.05,
                rotate: -1,
                y: -10,
                transition: { type: "spring", stiffness: 250, damping: 15 },
              }}
              className="group"
            >
              <Card className="bg-white/5 backdrop-blur-md border border-white/10 group-hover:border-blue-400 group-hover:shadow-glow transition-all duration-500 rounded-3xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-500/30 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Soft Skills</h3>
                      <p className="text-sm text-muted-foreground">
                        Professional Strengths
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    {[
                      "Leadership",
                      "Teamwork",
                      "Communication",
                      "Presentation",
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="bg-gradient-to-br from-secondary/30 to-blue-500/10 hover:from-blue-500/10 hover:to-primary/10 px-4 py-2 rounded-xl text-sm font-medium text-center text-white transition-all duration-200"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
