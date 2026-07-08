import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../data/portfolioData";

const getBootMessages = () => [
  "WELCOME TO MY CLI",
  "",
  "Type `help` to see available commands.",
  "",
];

const CliPage = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState(getBootMessages());

  const getCommandOutput = (rawCommand) => {
    const command = rawCommand.trim().toLowerCase();

    switch (command) {
      case "help":
        return [
          "Available commands:",
          "  help      - show all commands",
          "  about     - quick intro",
          "  skills    - my core stack",
          "  projects  - featured work",
          "  contact   - email + socials",
          "  back      - back to homepage",
          "  clear     - reset terminal",
        ];
      case "about":
      case "whoami":
        return [
          `${data.name} — ${data.designation}`,
          ...data.about.slice(0, 3).map((line) => `- ${line}`),
        ];
      case "skills":
        return ["Core skills:", `- ${data.skills.join(", ")}`];
      case "projects":
        return [
          "Featured projects:",
          ...data.projects.map(
            (project) =>
              `- ${project.title} (${project.dates}) | ${project.technologies.join(", ")}`,
          ),
        ];
      case "contact":
        return [
          `Email: ${data.contact.email}`,
          ...data.socials.map((social) => `${social.name}: ${social.url}`),
        ];
      case "back":
        navigate("/");
        return ["Taking you back..."];
      default:
        return [
          `Command not found: ${rawCommand}`,
          "Try: help, about, skills, projects, contact, back, clear",
        ];
    }
  };

  const runCommand = (rawCommand) => {
    const trimmed = rawCommand.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === "clear") {
      setHistory(getBootMessages());
      return;
    }

    const output = getCommandOutput(trimmed);

    setHistory((prev) => [
      ...prev,
      `visitor@portfolio:~$ ${trimmed}`,
      ...output,
      "",
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runCommand(input);
    setInput("");
  };

  const quickCommands = ["help", "about", "skills", "projects", "contact"];

  return (
    <section className="min-h-screen px-4 pb-20 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-dark-950 dark:shadow-xl">
          <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-white/10 dark:bg-dark-900">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
            <span className="ml-3 font-mono text-xs text-slate-500 dark:text-dark-300">
              portfolio-cli
            </span>
          </div>

          <div className="min-h-[520px] space-y-2 p-4 font-mono text-sm text-slate-700 dark:text-blue-100">
            {history.map((line, index) => (
              <p
                key={`${line}-${index}`}
                className={`whitespace-pre-wrap ${
                  line.startsWith("visitor@portfolio")
                    ? "text-blue-600 dark:text-cyan-300"
                    : line.startsWith("Command not found")
                      ? "text-red-500 dark:text-red-300"
                      : "text-slate-700 dark:text-dark-200"
                }`}
              >
                {line || " "}
              </p>
            ))}

            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 pt-2"
            >
              <span className="text-blue-600 dark:text-cyan-300">
                visitor@portfolio:~$
              </span>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type help"
                className="flex-1 bg-transparent text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-dark-500"
                autoFocus
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CliPage;
