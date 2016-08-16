import * as services from './services';
import { Store } from './store';
export { App } from './app';
export { APP_ROUTER_PROVIDERS } from './routes';

const mapValuesToArray = (obj: any) => Object.keys(obj).map(key => obj[key]);

export const providers = [
    Store,
    ...mapValuesToArray(services)
];
