import Navbar from "./navbar/navbar";
import AboutMe from "./sections/aboutMe";
import ContactInfo from "./sections/contactInfo";
import Projects from "./sections/projects";

const Home = () => {
  return (
    <div className="min-h-screen text-black dark:text-white">
      <Navbar />

      <main className="px-6 py-8 flex flex-col gap-20">
        <AboutMe />
        <Projects />
        <ContactInfo />
      </main>
    </div>
  );
};

export default Home;
