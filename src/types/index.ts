export type Language = 'en' | 'ar';

export interface TranslationStrings {
  [key: string]: string;
}

export interface Translations {
  [key: string]: TranslationStrings;
}