export interface Country  {
  borders?: (string)[] | null;
  cca3: string;
  currencies: {
    [key: string]: {
      name: string,
      symbol: string
    }
  };
  name: Name;
  languages:  {
    [key: string]: string
  };
  capital?: (string)[] | null;
  timezones?: (string)[] | null;
  car: {side:string};
  independent: boolean;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt: string;
  }

}
export interface Name {
  common: string;
  official: string;
  nativeName: {
    [key: string]: {
      official: string,
      common: string
    }
  };
}

  export type myCode = {
    name: string,
    code: string
  }
  export type DisplayCountry = Omit<Country, 'name'|'currencies' |'languages'> & {
    name: {'common': string, 'native': string};
    currency: {'name':string, 'symbol': string};
    langs: string[]
  }

  