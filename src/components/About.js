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
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-16 relative"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <Card className="bg-zinc-700 shadow-lg shadow-midnightPurple border-midnightPurple text-white">
              <CardHeader>
                <CardTitle>Education</CardTitle>
                <CardDescription className="text-white">
                  Bachelor of Science in Computer Science
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  In May 2024, I graduated from Temple University's College of
                  Science and Technology with a degree in Computer Science
                </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="bg-zinc-700 shadow-lg shadow-midnightPurple border-midnightPurple text-white">
              <CardHeader>
                <CardTitle>Master Data Management Intern</CardTitle>
                <CardDescription className="text-white">
                    <em>Victaulic</em>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>May 2023 – Present</p>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card className="bg-zinc-700 shadow-lg shadow-midnightPurple border-midnightPurple text-white">
              <CardHeader>
                <CardTitle>Background</CardTitle>
                <CardDescription className="text-white">
                  Card Description
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
