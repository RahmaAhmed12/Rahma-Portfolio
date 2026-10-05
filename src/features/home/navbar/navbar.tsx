import { useTranslation } from "react-i18next";
import ThemeToggle from "../../../shared/components/theme-toggle";
import cvFile from "../../../assets/Rahma Ahmed CV.pdf";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "../../../shared/components/lang-switcher";

const Navbar = () => {
  const { t } = useTranslation();

  const [openSideBar, setOpenSideBar] = useState(false);
  const isRtl = document.documentElement.dir === "rtl";
  const downloadCv = () => {
    const link = document.createElement("a");

    link.href = cvFile;
    link.download = "Rahma Ahmed CV.pdf";

    link.click();
  };

  return (
    <div className="w-full  p-5 z-50 sticky top-0 flex items-center gap-5 lg:gap-10 shadow bg-secondary-50 dark:bg-secondary-900 ">
      <a
        href="#Hero"
        className="w-[80%] lg:w-full md:text-lg lg:text-xl font-bold text-secondary-700 dark:text-primary-50"
      >
        Rahma's
        <span className="text-primary-900 dark:text-primary-500">
          {" "}
          Portfolio
        </span>
      </a>

      <div
        className="hidden  md:flex w-full items-center justify-center 
      md:gap-4 lg:gap-8 text-sm  text-secondary-700 font-medium dark:text-primary-50 "
      >
        <a
          href="#AboutMe"
          className="hover:underline hover:underline-offset-8 cursor-pointer hover:text-primary-500"
        >
          {t("navbar.tabs.aboutMe")}
        </a>
        <a
          href="#Projects"
          className="hover:underline hover:underline-offset-8 cursor-pointer hover:text-primary-500"
        >
          {t("navbar.tabs.projects")}
        </a>
        <a
          href="#ContactInfo"
          className="hover:underline hover:underline-offset-8 cursor-pointer hover:text-primary-500"
        >
          {t("navbar.tabs.contactInfo")}
        </a>
      </div>
      <div className="hidden  md:flex w-[60%] lg:w-full items-center justify-end gap-4">
        <ThemeToggle />
        {/* <LanguageSwitcher /> */}
        {/* <button
          className="p-1.5 lg:py-2 lg:px-4 font-semibold rounded-full bg-primary-500 text-white text-xs lg:text-base"
          onClick={downloadCv}
        >
          {t("navbar.downloadCV")}
        </button> */}
      </div>

      {/* for the phone and tablet  */}
      <button
        className="flex md:hidden w-full  text-primary-700 dark:text-primary-500 justify-end"
        onClick={() => setOpenSideBar(true)}
      >
        <Menu />
      </button>

      {openSideBar && (
        <div
          className={`fixed top-0 z-50 h-screen w-[60%] bg-white dark:bg-primary-900 md:hidden
             ${isRtl ? "left-0 border-r" : "right-0 border-l"}
             border-solid border-secondary-500 dark:border-secondary-800`}
        >
          <div className="flex items-center justify-between p-5 ">
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              className=" text-primary-700 dark:text-white"
              onClick={() => setOpenSideBar(false)}
            >
              <X />
            </button>
          </div>

          <nav className="flex flex-col gap-6 p-6 text-primary-700 dark:text-white">
            <a
              href="#AboutMe"
              onClick={() => setOpenSideBar(false)}
              className="hover:text-primary-500"
            >
              {t("navbar.tabs.aboutMe")}
            </a>

            <a
              href="#Projects"
              onClick={() => setOpenSideBar(false)}
              className="hover:text-primary-500"
            >
              {t("navbar.tabs.projects")}
            </a>

            <a
              href="#ContactInfo"
              onClick={() => setOpenSideBar(false)}
              className="hover:text-primary-500"
            >
              {t("navbar.tabs.contactInfo")}
            </a>

            <button
              className="py-2 px-4 font-semibold rounded-full bg-primary-500 text-white"
              onClick={downloadCv}
            >
              {t("navbar.downloadCV")}
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
