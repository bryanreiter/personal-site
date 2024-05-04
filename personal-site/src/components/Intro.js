import Typewriter from "typewriter-effect";

export default function Intro() {
  return (
    <section id="intro" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 content-center">
        <h1 className="text-4xl font-bold mb-8">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(`Hey, I'm <span style="color: #4c1d95;">Bryan Reiter!</span>`)
                .callFunction(() => {})
                .start();
            }}
          />
        </h1>
      </div>
    </section>
  );
}
