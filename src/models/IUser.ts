export const ID ='id';
export const NAME = 'name';
export const USERNAME = 'username';
export const EMAIL = 'email';
export const ADDRESS = 'address';
export const PHONE = 'phone';
export const WEBSITE = 'website';
export const COMPANY = 'company';
export const STREET = 'street';
export const SUITE = 'suite';
export const CITY = 'city';
export const ZIPCODE = 'zipcode';
export const GEO = 'geo';
export const LAT = 'lat';
export const LNG = 'lng';
export const CATCH_PHRASE = 'catchPhrase';
export const BS = 'bs';

export interface IUser {
  [ID]: number | null;
  [NAME]: string;
  [USERNAME]: string;
  [EMAIL]: string;
  [ADDRESS]: IAddress;
  [PHONE]: string;
  [WEBSITE]: string;
  [COMPANY]: ICompany;
}

export interface IAddress {
  [STREET]: string;
  [SUITE]: string;
  [CITY]: string;
  [ZIPCODE]: string;
  [GEO]: IGeo;
}

export interface IGeo {
  [LAT]: string;
  [LNG]: string;
}

export interface ICompany {
  [NAME]: string;
  [CATCH_PHRASE]: string;
  [BS]: string;
}
