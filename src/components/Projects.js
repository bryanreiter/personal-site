import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setShowTooltip(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="projects"
      className="flex flex-col items-center py-16 px-4 relative"
    >
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
      <Carousel className="w-full max-w-7xl">
        <CarouselContent className="-ml-4 w-full">
          {projects.map((project, index) => (
            <CarouselItem
              key={index}
              className="pl-4 w-full md:w-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="border-none bg-gradient-to-r from-midnightPurple to-blue-500 h-[500px] flex flex-col">
                  <CardHeader className="p-4">
                    <CardTitle className="text-white flex justify-between items-center">
                      {project.title}
                      {project.githubLink && (
                        <a
                          href={`https://github.com/${project.github.username}/${project.github.repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-gray-300"
                        >
                          <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                      )}
                    </CardTitle>
                    <CardDescription className="text-gray-200">
                      <em>{project.description}</em>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-column items-center justify-center p-6">
                    {project.github && (
                      <div className="mb-4 w-full h-40 relative">
                        <a
                          href={`https://github.com/${project.github.username}/${project.github.repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={`https://opengraph.githubassets.com/1/${project.github.username}/${project.github.repo}`}
                            alt={`${project.title} GitHub preview`}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </a>
                      </div>
                    )}
                    {project.googleSlides && (
                      <div className="mb-4 w-full h-40 relative">
                        <iframe
                          src={`https://docs.google.com/presentation/d/${project.googleSlides}/embed?start=false&loop=false&delayms=3000`}
                          frameBorder="0"
                          width="100%"
                          height="100%"
                          allowFullScreen={true}
                          mozallowfullscreen="true"
                          webkitallowfullscreen="true"
                          className="rounded-md"
                        ></iframe>
                      </div>
                    )}
                    {!project.github && !project.googleSlides && (
                      <div className="mb-4 w-full h-40 relative flex items-center justify-center">
                        <p className="text-white text-center">
                          {project.description}
                        </p>
                      </div>
                    )}
                    <div></div>
                  </CardContent>
                  <CardFooter className="text-white mt-auto">
                    <a href="https://skillicons.dev">
                      <img
                        src={`https://skillicons.dev/icons?i=${project.technologies.join(
                          ","
                        )}&perline=5`}
                        alt="Technology icons"
                      />
                    </a>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-none bg-gradient-to-r from-midnightPurple to-blue-500 h-[500px] flex flex-col hidden md:flex" />
        <CarouselNext className="border-none bg-gradient-to-r from-midnightPurple to-blue-500 h-[500px] flex flex-col hidden md:flex" />
      </Carousel>
      {showTooltip && <SwipeTooltip />}
    </section>
  );
}

const SwipeTooltip = () => (
  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm animate-pulse">
    Swipe to see more
  </div>
);

const projects = [
  {
    title: "IntelliGest Smart Home",
    description:
      "A Smart Home Assistant that utilizes machine learning and computer vision to detect gestures for Deaf Individuals",
    technologies: [
      "py",
      "react",
      "express",
      "tailwindcss",
      "nodejs",
      "raspberrypi",
      "opencv",
      "flask",
      "docker",
      "vscode",
    ],
    github: {
      username: "Capstone-Projects-2024-Spring",
      repo: "project-intelligest-smart-home",
    },
  },
  {
    title: "Purrfect Pets",
    description:
      "PurrfectPets is a platform dedicated to pet adoption, allowing users to discover their ideal companions.",
    technologies: [
      "js",
      "react",
      "express",
      "mysql",
      "nodejs",
      "azure",
      "materialui",
      "vscode",
      "figma",
    ],
    github: {
      username: "cis3296f23",
      repo: "purrfectpets",
    },
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and skills",
    technologies: [
      "js",
      "nextjs",
      "react",
      "tailwind",
      "vscode",
      "vercel",
      "figma",
    ],
    github: {
      username: "bryanreiter",
      repo: "personal-site",
    },
  },
  {
    title: "DNDiscord",
    description:
      "A Discord bot that allows you to roll die, find and learn about official 5E items, classes, monsters, and more!",
    technologies: ["js", "nodejs", "discordjs", "vscode", "discord", "bots"],
    github: {
      username: "bryanreiter",
      repo: "DNDiscord",
    },
  },
  {
    title: "myShell",
    description:
      "myShell is a basic UNIX shell that can perform I/O Redirection, Piping, and Background Processing",
    technologies: ["c", "bash", "clion", "linux", "vscode", "git"],
    github: {
      username: "bryanreiter",
      repo: "myShell",
    },
  },
];
