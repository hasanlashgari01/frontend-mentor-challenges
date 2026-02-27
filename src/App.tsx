import Header from "@/components/header/header.tsx";
import Status from "@/components/status/status.tsx";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div>
          <Status />
        </div>
      </div>
    </>
  );
}

export default App;
