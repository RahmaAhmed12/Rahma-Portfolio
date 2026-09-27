import LanguageSwitcher from "../../shared/components/lang-switcher";
import ThemeToggle from "../../shared/components/theme-toggle";

const Home = () => {
  return (
    <div className=" text-black dark:text-white">
      Hello
      <LanguageSwitcher />
      <ThemeToggle />
    </div>
  );
};

export default Home;
