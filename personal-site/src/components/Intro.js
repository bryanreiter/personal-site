import Typewriter from "typewriter-effect";
import { useState } from "react";

export default function Intro() {
  const [showSecondTypewriter, setShowSecondTypewriter] = useState(false);
  const [showThirdTypewriter, setThirdSecondTypewriter] = useState(false);
  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center py-16 relative"
    >
      <div className="container mx-auto px-4 content-center">
        <h1 className="text-4xl font-bold mb-8">
          <div style={{ fontFamily: "monospace" }}>
            <Typewriter
              options={{
                delay: 50,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `Hey, I'm <span style="color: #6d28d9;">Bryan Reiter</span>`
                  )
                  .callFunction(() => {
                    setShowSecondTypewriter(true);
                  })
                  .start();
              }}
            />
            {showSecondTypewriter && (
              <Typewriter
                options={{
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("I'm a senior Computer Science Major")
                    .callFunction(() => {
                      setThirdSecondTypewriter(true);
                    })
                    .start();
                }}
              />
            )}
            {showThirdTypewriter && (
              <Typewriter
                options={{
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString("At Temple University.").start();
                }}
              />
            )}
          </div>
        </h1>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="text-white hover:text-gray-300">
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
