import { Router } from "express";
import maxViews from "../../calculadora";

const advertisementsRoutes = Router();

advertisementsRoutes.get("/adrangecalculator", (request, response) => {
  const { investedAmount } = request.query;
  const views = maxViews(Number(investedAmount));

  return response.status(200).send({maxViews: views});
});

export { advertisementsRoutes };
