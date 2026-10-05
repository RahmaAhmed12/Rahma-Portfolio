import { useTranslation } from "react-i18next";
const Hero = () => {
  const { t } = useTranslation();

  return (
    <div
      id="Hero"
      className="scroll-mt-15   py-6  flex flex-col  gap-20 items-center lg:items-start    "
    >
      <div className="w-full lg:w-[70%] flex flex-col items-center lg:items-start   gap-4 lg:gap-8">
        <h4 className="text-base md:text-xl uppercase font-semibold  text-primary-900 dark:text-primary-500 ">
          {t("hero.welcome")}
        </h4>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-secondary-700 dark:text-primary-50   ">
          {t("hero.title1")}
          <span className="">{t("hero.title2")}</span>
        </h1>
        <p className="text-center lg:text-right text-secondary-700 dark:text-primary-50">
          {t("hero.smallDescription")}
        </p>
      </div>
    </div>
  );
};

export default Hero;
