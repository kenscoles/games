import {  Country, DisplayCountry} from "./country.interface";

export const countryAdapter = (country: Country): DisplayCountry  => {

    const { capital, cca3, car, flags, borders, currencies, name, independent, population, timezones, languages } = country;

    const nativeName = Object.values(name.nativeName)[0]['common'] // take the first
    
    const curr = Object.values(currencies)[0] // take the first
    
    const langList = Object.values(languages)
   
    return {
        borders,
        capital,
        cca3,
        currency: {"name": curr.name, "symbol": curr.symbol},
        car,
        flags,
        independent,
        langs: langList,
        name: {"common": name.common, "native": nativeName},
        population,
        timezones,
    }


}