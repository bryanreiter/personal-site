import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-16 px-4 relative">
      <div className="container mx-auto" style={{ fontFamily: "monospace" }}>
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col h-full">
            <Card className="border-none bg-gradient-to-r from-midnightPurple to-blue-500 flex flex-col h-full">
              <CardHeader className="p-4">
                <CardTitle>Temple University</CardTitle>
                <CardDescription className="text-white">
                  <em>Bachelor of Science in Computer Science</em>
                </CardDescription>
              </CardHeader>
              <CardContent className="text-white flex-grow">
                <ul className="list-disc pl-5">
                  <li>Graduated with a 3.55 GPA</li>
                  <li>
                    Key coursework: Data Structures & Algorithms, Web
                    Application Development, Systems Prog. & Operating Systems,
                    Software Design
                  </li>
                  <li>
                    Developed strong problem-solving and coding skills in
                    various languages
                  </li>
                  <li>Community Lead for Temple University Esports</li>
                  <li>
                    Led 24-Hour 'Gaming For Good' Charity Live Stream, raising
                    over $300
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="text-white mt-auto">
                <em>August 2020 - May 2024</em>
              </CardFooter>
            </Card>
          </div>
          <div className="flex flex-col h-full">
            <Card className="border-none bg-gradient-to-r from-midnightPurple to-blue-500 flex flex-col h-full">
              <CardHeader className="p-4">
                <CardTitle>Innovative Control Systems</CardTitle>
                <CardDescription className="text-white">
                  <em>Support Technician</em>
                </CardDescription>
              </CardHeader>
              <CardContent className="text-white flex-grow">
                <ul className="list-disc pl-5">
                  <li>
                    Provide first-level technical support using ITIL standards, resolving issues via telephone and remote tools
                  </li>
                  <li>
                    Deliver high-quality customer service and educate customers on maximizing ICS systems
                  </li>
                  <li>
                    Collaborate with team members to solve complex problems and meet response times
                  </li>
                  <li>
                    Conducted software maintenance and testing, along with hardware and network troubleshooting and configurations
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="text-white mt-auto">
                <em>July 2024 - Present</em>
              </CardFooter>
            </Card>
          </div>
          <div className="flex flex-col h-full">
            <Card className="border-none bg-gradient-to-r from-midnightPurple to-blue-500 flex flex-col h-full">
              <CardHeader className="p-4">
                <CardTitle>Victaulic Internship</CardTitle>
                <CardDescription className="text-white">
                  <em>Master Data Management Intern at Victaulic</em>
                </CardDescription>
              </CardHeader>
              <CardContent className="text-white flex-grow">
                <ul className="list-disc pl-5">
                  <li>
                    Created business rules for data governance in MDM Syndigo
                    System
                  </li>
                  <li>
                    Developed custom reports using Elasticsearch Query DSL
                  </li>
                  <li>
                    Improved MDM notification system and audited existing
                    notifications
                  </li>
                  <li>
                    Worked with real-time analytics for error processing and
                    detection
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="text-white mt-auto">
                <em>May 2023 - June 2024</em>
              </CardFooter>
            </Card>
          </div>
          <div className="flex flex-col h-full">
            <Card className="border-none bg-gradient-to-r from-midnightPurple to-blue-500 flex flex-col h-full">
              <CardHeader>
                <CardTitle>Temple University IT Services</CardTitle>
                <CardDescription className="text-white flex-grow">
                  <em>Help Desk Technical Assistant</em>
                </CardDescription>
              </CardHeader>
              <CardContent className="text-white">
                <ul className="list-disc pl-5">
                  <li>
                    Provided technical support to students, alumni, and staff
                    through both phone calls and walk-ins using Genesys PureCloud
                    and BMC Helix ITSM, ensuring prompt resolution and efficient service
                  </li>
                  <li>
                    Resolved both software and hardware issues ranging from
                    network connectivity to mobile device support to OS
                    reinstallation
                  </li>
                  <li>
                    Collaborated with colleagues to resolve technical issues and
                    trained new employees
                  </li>
                </ul>
              </CardContent>
              <CardFooter className="text-white mt-auto">
                <em>January 2023 - May 2024</em>
              </CardFooter>
            </Card>
          </div>
          <div className="flex flex-col h-full">
            <Card className="border-none bg-gradient-to-r from-midnightPurple to-blue-500 flex flex-col h-full">
              <CardHeader>
                <CardTitle>Career Aspirations</CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <ul className="list-disc pl-5">
                  <li>Develop innovative software solutions</li>
                  <li>Contribute to open-source projects</li>
                  <li>Find a field to specialize in</li>
                  <li>Explore AI and machine learning applications</li>
                  <li>Lead technical teams on impactful projects</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col h-full">
            <Card className="border-none bg-gradient-to-r from-midnightPurple to-blue-500 flex flex-col h-full">
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <ul className="list-disc pl-5">
                  <li>Languages: JavaScript, Java, C, Python, SQL</li>
                  <li>Web: React, Node.js, Express, HTML/CSS</li>
                  <li>Tools: Git, VS Code, Jira, Figma</li>
                  <li>Database: MySQL, Elasticsearch</li>
                  <li>Other: Data Structures, Algorithms, UX Design</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="flex flex-col h-full">
            <Card className="border-none bg-gradient-to-r from-midnightPurple to-blue-500 flex flex-col h-full">
              <CardHeader>
                <CardTitle>Personal Hobbies</CardTitle>
              </CardHeader>
              <CardContent className="text-white">
                <ul className="list-disc pl-5">
                  <li>Video Games</li>
                  <li>TTRPGs</li>
                  <li>Music</li>
                  <li>Web Development</li>
                  <li>Programming</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
