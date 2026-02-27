import Header from "@/components/header/header.tsx";
import Status from "@/components/status/status.tsx";
import Dropdown from "@/components/dropdown/dropdown.tsx";

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
      </div>
    </>
  );
}

export default App;
