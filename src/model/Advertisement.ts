import { maxViews, maxShares, maxClicks } from "../../calculadora";

class Advertisement {
  name: string;
  client: string;
  startDate: Date;
  endDate: Date;
  investmentPerDay: number;
  maxViews: number;

  constructor(name, client, startDate, endDate, investmentPerDay) {
    this.name = name;
    this.client = client;
    this.startDate = new Date(startDate + " 00:00");
    this.endDate = new Date(endDate + " 00:00");
    this.investmentPerDay = investmentPerDay;
    
    const diff = Math.abs(this.endDate.getTime() - this.startDate.getTime()); 
    const days = Math.ceil(diff / (10000 * 360 * 24));
    console.log("Days: ", days);
    this.maxViews = maxViews(investmentPerDay * days);
  }
}

export { Advertisement };