export class Contact {
  public fullName?: string
  public email?: string
  public subject?: string
}

export interface Package {
  id?: number;
  name?: string;
  price?: number;
  description?: string;
  duration?: number;
  promotionalOffer?: boolean;
  promotionalOfferPrice?: number;
  featured?: boolean;
  imageUrl?: any;
  active?: boolean;
  cityId?: number;
}

export interface Packages {
  id: number;
  name: string;
  price: number;
  description: string;
  duration: number;
  promotionalOffer: boolean;
  promotionalOfferPrice: number;
  featured: boolean;
  imageUrl: any;
  active: boolean;
  cityId: number;
}

export interface Booking {
  reservationDate?: number;
  people?: string;
  name?: string;
  surname?: string;
  email?: string;
  contact?: string;
  packageId?: string;
}

export interface City {
  id: number;
  name: string;
  country: string;
  continent: string;
}
