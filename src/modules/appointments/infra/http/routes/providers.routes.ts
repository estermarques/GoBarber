import { Router } from 'express';

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
  providerMonthAvailavilityController.index,
);

providersRouter.get(
  '/:provider_id/day-availability',
  providerDayAvailavilityController.index,
);

export default providersRouter;
