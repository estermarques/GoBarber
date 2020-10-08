import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProviderMonthAvailavilityController from '../controllers/ProviderMonthAvailavilityController';
import ProviderDayAvailavilityController from '../controllers/ProviderDayAvailavilityController';

const providersRouter = Router();

const providersController = new ProvidersController();
const providerMonthAvailavilityController = new ProviderMonthAvailavilityController();
const providerDayAvailavilityController = new ProviderDayAvailavilityController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);

providersRouter.get(
  '/:provider_id/month-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providerMonthAvailavilityController.index,
);

providersRouter.get(
  '/:provider_id/day-availability',
  celebrate({
    [Segments.PARAMS]: {
      provider_id: Joi.string().uuid().required(),
    },
  }),
  providerDayAvailavilityController.index,
);

export default providersRouter;
