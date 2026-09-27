import i18next from "i18next";
import { useState } from "react";
import enIcon from "../../assets/icons/en.webp";
import arIcon from "../../assets/icons/ar.webp";
const LanguageSwitcher = () => {
  const languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "العربية" },
  ];
  const [open, setOpen] = useState(false);
  const currentLang =
    languages.find((lang) => lang.code === i18next.language)?.label ||
    "English";
  const currentLangIcon = currentLang === "English" ? enIcon : arIcon;

  const changeLanguage = (lng: string) => {
    i18next.changeLanguage(lng);
    localStorage.setItem("lang", lng);

    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    setOpen(false);
  };
  return (
    <div>
      <button
        className=" text-base  flex justify-between  items-center gap-2 py-2 px-4"
        onClick={() => setOpen(!open)}
      >
        <img src={currentLangIcon} alt="language Icon " className="w-5 h-5" />
        {currentLang}
      </button>

      {open && (
        <div className="text-base mt-2 w-36 bg-white border border-light-grey-300 rounded-md shadow-lg ">
          <ul className="p-2 ">
            <li
              className=" flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md"
              onClick={() => changeLanguage("en")}
            >
              <img src={enIcon} alt="language Icon " className="w-5 h-5" />
              English
            </li>
            <li
              className=" flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md"
              onClick={() => changeLanguage("ar")}
            >
              <img src={arIcon} alt="language Icon " className="w-5 h-5" />
              العربية
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
