import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

const i18n = new I18n({
  en: { welcome: "Hello" },
  ja: { welcome: "こんにちは" },
});

i18n.locale = getLocales()[0].languageCode ?? "en";

i18n.enableFallback = true;
