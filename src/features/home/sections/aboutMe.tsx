import { useTranslation } from "react-i18next";
import aboutImage from "../../../assets/images/aboutMe.jpg";
import cvFile from "../../../assets/Rahma Ahmed CV.pdf";
const AboutMe = () => {
  const { t } = useTranslation();
  const downloadCv = () => {
    const link = document.createElement("a");

    link.href = cvFile;
    link.download = "Rahma Ahmed CV.pdf";

    link.click();
  };
  return (
    <div
      id="AboutMe"
      className="w-full scroll-mt-15   py-6 grid grid-cols-1 lg:grid-cols-[45%_50%] gap-10 "
    >
      <div className="w-full">
        <img src={aboutImage} alt="Image" className=" rounded-2xl" />
      </div>
      <div className="w-full flex flex-col gap-6 ">
        <h3 className="text-lg uppercase font-semibold  text-primary-900 dark:text-primary-500 ">
          {t("aboutMeSection.title")}
        </h3>
        <h2 className="text-3xl font-semibold text-secondary-700 dark:text-primary-50   ">
          {t("aboutMeSection.subTitle")}
        </h2>
        <p className=" text-secondary-700 dark:text-primary-50 text-justify">
          {t("aboutMeSection.description")}
        </p>
        <button
          className="w-40 text-center rounded-full px-4 py-2 bg-primary-800 dark:bg-primary-500  gap-2 text-secondary-700 dark:text-secondary-50  hover:bg-primary-800"
          onClick={downloadCv}
        >
          {t("hero.downloadCV")}
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
