import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button 
        onClick={() => changeLanguage('en')} 
        className={`text-sm px-2 py-1 rounded ${i18n.language === 'en' ? 'bg-accent text-white' : 'text-light hover:text-accent'}`}
      >
        EN
      </button>
      <button 
        onClick={() => changeLanguage('zh-CN')} 
        className={`text-sm px-2 py-1 rounded ${i18n.language === 'zh-CN' ? 'bg-accent text-white' : 'text-light hover:text-accent'}`}
      >
        简
      </button>
      <button 
        onClick={() => changeLanguage('zh-TW')} 
        className={`text-sm px-2 py-1 rounded ${i18n.language === 'zh-TW' ? 'bg-accent text-white' : 'text-light hover:text-accent'}`}
      >
        繁
      </button>
    </div>
  );
};

export default LanguageSwitcher;