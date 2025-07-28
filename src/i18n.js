import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 导入翻译资源
import translationEN from './locales/en/translation.json';
import translationZH from './locales/zh-CN/translation.json';
import translationZHT from './locales/zh-TW/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  'zh-CN': {
    translation: translationZH
  },
  'zh-TW': {
    translation: translationZHT
  }
};

i18n
  .use(LanguageDetector) // 检测用户浏览器语言
  .use(initReactI18next) // 将i18n传递给react-i18next
  .init({
    resources,
    fallbackLng: 'en', // 默认语言
    lng: 'en', // 强制设置初始语言为英文
    debug: true, // 开发环境下开启调试
    interpolation: {
      escapeValue: false, // 不转义HTML
    },
    detection: {
      order: ['localStorage'],
      caches: ['localStorage'],
    }
  });

export default i18n;