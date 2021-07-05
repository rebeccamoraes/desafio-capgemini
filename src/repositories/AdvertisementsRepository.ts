import { Advertisement } from "../model/Advertisement";

interface ICreateAdvertisementDTO {
  name: string;
  client: string;
  startDate: string;
  endDate: string;
  investmentPerDay: number;
}

class AdvertisementsRepository {
  private advertisements: Advertisement[];

  constructor() {
    this.advertisements = [];
  }

  create({ name, client, startDate, endDate, investmentPerDay}: ICreateAdvertisementDTO): void {
    const ad = new Advertisement(name,
      client,
      startDate,
      endDate,
      investmentPerDay);

    this.advertisements.push(ad);
  }

  list(): Advertisement[]{
    return this.advertisements;
  }

}

export { AdvertisementsRepository };
