import { MoveRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import cvFile from "../../../assets/Rahma Ahmed CV.pdf";
import reactIcon from "../../../assets/icons/programing.webp";
import nextIcon from "../../../assets/icons/Next.js.webp";
import angularIcon from "../../../assets/icons/Angular.webp";
const HeroSection = () => {
  const { t } = useTranslation();
  const downloadCv = () => {
    const link = document.createElement("a");

    link.href = cvFile;
    link.download = "Rahma Ahmed CV.pdf";

    link.click();
  };
  return (
    <div id="Hero" className=" px-4 py-6  flex    ">
      <div className="w-full flex flex-col items-center justify-center  gap-8">
        <div className=" flex flex-col items-center justify-center  gap-2">
          <h1 className="text-5xl font-bold text-primary-700 dark:text-white ">
            {t("hero.title1")}
          </h1>
          <h1 className="text-5xl font-bold  text-primary-500 ">
            {t("hero.title2")}
          </h1>
          <p className="w-[70%] text-center mt-4 text-primary-800 dark:text-secondary-500">
            {t("hero.description")}
          </p>
          {/* <div className=" w-full flex items-center gap-8">
            <div className=" flex items-center gap-2">
              {" "}
              <img src={reactIcon} alt="icon" className="w-6 h-6" />
              React
            </div>
            <div className=" flex items-center gap-2">
              {" "}
              <img src={angularIcon} alt="icon" className="w-6 h-6" /> Angular
            </div>
            <div className=" flex items-center gap-2">
              {" "}
              <img src={nextIcon} alt="icon" className="w-6 h-6" />
              Next
            </div>
          </div> */}
        </div>
        <div className="flex gap-6 items-center">
          <a
            href="#Projects"
            className="rounded-full px-4 py-2 bg-primary-600 dark:bg-primary-500 flex items-center gap-2 text-primary-50"
          >
            {t("hero.exploreProjects")} <MoveRight />
          </a>
          <button
            className="rounded-full px-4 py-2 border-2 border-primary-600 text-primary-600 dark:border-primary-500 dark:text-primary-500 font-semibold"
            onClick={downloadCv}
          >
            {t("hero.downloadCV")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
