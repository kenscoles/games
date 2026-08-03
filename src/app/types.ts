
export interface Country1 {
  area: number;
  cioc: string;
  flag: string;
  gini: number;
  maps: Maps;
  name: string;
  flags: Flags;
  latlng: number[];
  region: string;
  borders: string[];
  capital: string;
  demonym: string;
  languages: Language[];
  subregion: string;
  timezones: string[];
  alpha2Code: string;
  alpha3Code: string;
  currencies: Currency[];
  nativeName: string;
  population: number;
  independent: boolean;
  numericCode: string;
  altSpellings: string[];
  callingCodes: string[];
  translations: Translations;
  regionalBlocs: RegionalBloc[];
  topLevelDomain: string[];
  populationDensity: number;
}

export interface RegionalBloc {
  name: string;
  acronym: string;
}

export interface Translations {
  br: string;
  de: string;
  es: string;
  fa: string;
  fr: string;
  hr: string;
  hu: string;
  it: string;
  ja: string;
  nl: string;
  pt: string;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  name: string;
  iso639_1?: string;
  iso639_2: string;
  nativeName?: string;
}

export interface Flags {
  png: string;
  svg: string;
}

export interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

