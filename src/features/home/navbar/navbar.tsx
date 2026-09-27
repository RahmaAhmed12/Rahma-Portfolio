import { useTranslation } from "react-i18next";
import ThemeToggle from "../../../shared/components/theme-toggle";
import cvFile from "../../../assets/Rahma Ahmed CV.pdf";
const Navbar = () => {
  const { t } = useTranslation();

  const downloadCv = () => {
    const link = document.createElement("a");

    link.href = cvFile;
    link.download = "Rahma Ahmed CV.pdf";

    link.click();
  };

  return (
    <div className="p-5 z-50 sticky top-0 flex items-center justify-between border-b border-secondary-500 dark:border-secondary-800 shadow bg-white dark:bg-[#222831]">
      <div className="text-2xl font-bold text-primary-700 dark:text-white ">
        Rahma's Portfolio
      </div>
      <div className="flex items-center gap-10 text-sm text-primary-700 font-medium dark:text-white ">
        <a
          href="#AboutMe"
          className="hover:underline hover:underline-offset-8 cursor-pointer"
        >
          {t("navbar.tabs.aboutMe")}
        </a>
        <a
          href="#Projects"
          className="hover:underline hover:underline-offset-8 cursor-pointer"
        >
          {t("navbar.tabs.projects")}
        </a>
        <a
          href="#ContactInfo"
          className="hover:underline hover:underline-offset-8 cursor-pointer"
        >
          {t("navbar.tabs.contactInfo")}
        </a>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button
          className="py-2 px-4 font-semibold rounded-full bg-primary-500 text-white"
          onClick={downloadCv}
        >
          {t("navbar.downloadCV")}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
