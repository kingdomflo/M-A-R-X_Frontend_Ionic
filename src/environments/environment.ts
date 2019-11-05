// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { env } from '../../.env';

export const environment = {
  production: false,
  mock: false,
  // apiUrl: 'http://localhost/M-A-R-X_Backend_PHP/public/',
  // apiUrl: 'http://10.0.2.2:80/M-A-R-X_Backend_PHP/public/',
  apiUrl: 'https://marx.gerardweb.eu/public/',
  jwtTokenSign: 'iliketrain',
  clientID: env.clientID,
  domain: env.domain,
  packageIdentifier: env.packageIdentifier,
  redirectUriWeb: env.redirectUriWeb,
  redirectUriMobile: env.redirectUriMobile
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
