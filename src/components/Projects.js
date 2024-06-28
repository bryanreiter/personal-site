import * as React from "react";
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
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center py-16 px-4 relative"
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
                        <img
                          src={`https://opengraph.githubassets.com/1/${project.github.username}/${project.github.repo}`}
                          alt={`${project.title} GitHub preview`}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                    )}
                    <div></div>
                  </CardContent>
                  <CardFooter className="text-white mt-auto">
                    <a href="https://skillicons.dev">
                      <img
                        src={`https://skillicons.dev/icons?i=${project.technologies.join(
                          ","
                        )}`}
                        alt="Technology icons"
                      />
                    </a>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
}

const projects = [
  {
    title: "Purrfect Pets",
    description:
      "PurrfectPets is a platform dedicated to pet adoption, allowing users to discover their ideal companions.",
    technologies: ["js", "react", "express", "nodejs"],
    github: {
      username: "cis3296f23",
      repo: "purrfectpets",
    },
  },
  {
    title: "Informed Navigation",
    description:
      "A user research project to understand key metrics when it comes to safety and accessibility in the transportation industry",
    technologies: ["figma"],
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio showcasing projects and skills",
    technologies: ["nextjs", "react", "tailwind"],
    github: {
      username: "bryanreiter",
      repo: "personal-site",
    },
  },
];
