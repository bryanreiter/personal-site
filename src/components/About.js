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
      <div
        className="container mx-auto px-4"
        style={{ fontFamily: "monospace" }}
      >
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <Card className="bg-zinc-700 shadow-lg shadow-midnightPurple border-midnightPurple text-white">
              <CardHeader>
                <CardTitle>Bachelor of Science in Computer Science</CardTitle>
                <CardDescription className="text-white">
                  <em>Temple University - May 2024</em>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  I graduated from Temple University's College of Science and
                  Technology with a degree in Computer Science in May 2024.
                </p>
              </CardContent>
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
          <div>
            <Card className="bg-zinc-700 shadow-lg shadow-midnightPurple border-midnightPurple text-white">
              <CardHeader>
                <CardTitle>Personal Interests/Hobbies</CardTitle>
              </CardHeader>
              <CardContent className="list-disc flex flex-row">
                <ul>
                  <li>Video Games</li>
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
