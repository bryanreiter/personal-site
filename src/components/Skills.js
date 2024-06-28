export default function Skills() {
  return (
    <section
      id="skills"
      className="flex flex-col items-center py-16 px-4 relative"
    >
      <h2 className="text-4xl font-bold text-center mb-8">Skills</h2>
      <a href="https://skillicons.dev">
        <img
          src={`https://skillicons.dev/icons?i=${technologies.join(
            ","
          )}&perline=10`}
          alt="Technology icons"
        />
      </a>
    </section>
  );
}

const technologies = ["html", "css", "js", "react", "nextjs", "nodejs", "python", "java", "c", "express", "mysql", "bootstrap", "git", "github", "figma", "jest", "vscode", "clion", "pycharm", "idea","docker", "tailwindcss", "raspberrypi", "opencv", "linux", "apple", "windows", "flask", "npm", "discordjs" ];
