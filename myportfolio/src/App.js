import { Layout } from "./components/Layout/Layout";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";
import { Education } from "./pages/Educations/Education";
import { Projects } from "./pages/Projects/Projects";
import { Techstack } from "./pages/Techstack/Techstack";
import { WorkExp } from "./pages/workExp/WorkExp";

function App() {
  return (
    <>
      <Layout />
      <div className="container">
        <About />
        <Education />
        <Techstack />
        <Projects />
        <WorkExp />
        <Contact />
      </div>
    </>
  );
}

export default App;
