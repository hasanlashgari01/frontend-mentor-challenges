import Header from "@/components/header/header.tsx";
import Status from "@/components/status/status.tsx";
import Dropdown from "@/components/dropdown/dropdown.tsx";
import Button from "@/components/button/button.tsx";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="justify-between border-b border-b-neutral-800 pb-3 lg:flex">
          <Status />
          <div className="mt-8 flex gap-x-4 divide-neutral-800 *:not-last:pr-2 lg:gap-x-4 lg:divide-x-2">
            <Dropdown
              title="Difficulty"
              values={["easy", "medium", "hard"]}
              defaultValue="easy"
            />
            <Dropdown
              title="Mode"
              values={["timed(60s)", "passage"]}
              defaultValue="timed(60s)"
            />
          </div>
        </div>
        <div className="relative mt-6">
          <p className="leading-relaxed text-neutral-500 sm:text-xl lg:text-2xl">
            The archaeological expedition unearthed artifacts that complicated
            prevailing theories about Bronze Age trade networks. Obsidian from
            Anatolia, lapis lazuli from Afghanistan, and amber from the
            Baltic—all discovered in a single Mycenaean tomb—suggested
            commercial connections far more extensive than previously
            hypothesized. "We've underestimated ancient peoples' navigational
            capabilities and their appetite for luxury goods," the lead
            researcher observed. "Globalization isn't as modern as we assume."
          </p>
          <div className="absolute inset-0 flex items-center justify-center backdrop-blur-xs">
            <Button>Start Typing Test</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
