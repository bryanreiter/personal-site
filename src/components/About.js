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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-zinc-700 shadow-lg shadow-purple-600 border-purple-600 text-white">
            <CardHeader>
              <CardTitle>Background</CardTitle>
              <CardDescription className="text-white">Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <Card className="bg-zinc-700 shadow-lg shadow-purple-600 border-purple-600 text-white">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription className="text-white">Card Description</CardDescription>
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
    </section>
  );
}
