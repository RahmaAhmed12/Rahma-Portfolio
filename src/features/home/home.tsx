import Navbar from "./navbar/navbar";
import AboutMe from "./sections/aboutMe";
import ContactInfo from "./sections/contactInfo";
import Hero from "./sections/hero";
import Projects from "./sections/projects";

const Home = () => {
  return (
    <div className="min-h-screen text-black dark:text-white">
      <Navbar />

      <main className=" px-5 md:px-10 lg:px-15 py-8 flex flex-col gap-20">
        <Hero />
        <AboutMe />
        <Projects />
        <ContactInfo />
      </main>
    </div>
  );
};

export default Home;
