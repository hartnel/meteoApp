// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,


  

  owmUrl: 'http://api.openweathermap.org/data/2.5',
  owmKey:'6fe9d306ce465abad0c7283788b87895',


  osmDirectUrl:'https://nominatim.openstreetmap.org/search?key=iTzWSiYpGxDvhATNtSrqx5gDcnMOkntL&format=json&q={city}&type=city&addressdetails=1',
  osmReverseUrl:'https://nominatim.openstreetmap.org/reverse?key=iTzWSiYpGxDvhATNtSrqx5gDcnMOkntL&format=json&addressdetails=1&lat={lat}&lon={lon}'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
