import { Router } from "express";
import { maxViews } from "../../calculadora";

import { AdvertisementsRepository } from "../repositories/AdvertisementsRepository";

const advertisementsRoutes = Router();
const advertisementsRepository = new AdvertisementsRepository();

advertisementsRoutes.get("/adrangecalculator", (request, response) => {
  const { investedAmount } = request.query;
  const views = maxViews(Number(investedAmount));

  return response.status(200).send({maxViews: views});
});

advertisementsRoutes.post("/ad", (request, response) => {
  const { name, client, startDate, endDate, investmentPerDay } = request.body;

  advertisementsRepository.create({ name, client, startDate, endDate, investmentPerDay});

  return response.status(201).send();
});

advertisementsRoutes.get("/ad", (request, response) => {
  const ads = advertisementsRepository.list();

  return response.json(ads);
});

export { advertisementsRoutes };
