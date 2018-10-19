// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  bannerImageUrls: {
    registerPage: 'https://images.pexels.com/photos/1053775/pexels-photo-1053775.jpeg?auto=compress&cs=tinysrgb',
    loginPage: 'https://images.pexels.com/photos/1170572/pexels-photo-1170572.jpeg?auto=compress&cs=tinysrgb',
    adminPage: 'https://images.pexels.com/photos/1436129/pexels-photo-1436129.jpeg?auto=compress&cs=tinysrgb'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
