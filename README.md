# Charter / Ascendion - Technical Assessment

## NOTE: Project is being finalized at the moment, expected ETA of final commit 30 mins, or (10:45 MST)

## The telling of the dev...

Fun project, gave me the opportunity to get a jump on something that I have been planning for some time now actually...
I am boilerplating multiple varieties of application scaffolds on both front and back ends for multiple use cases, all in
an effort to expedite my product development and improve my project management.

I believe this project covers all the bases for the technical spec, and satisfies the spirit of the exercise...
although due to the holidays, and my own product launch I did not have as much time to dedicate to this as I would have liked,
so please forgive anything I might have overlooked at this stage.

Overall, I believe I have spent a little over 24 hours total on this so I hope you like it.

One final note, as this project is something I have chosen to exploit to my advantage, I will be maintaining it for a short time
before moving it to a different organization and into the application scaffold collections there. In the mean time... you are
welcome to follow it for changes and updates as it evolves beyond the scope of this exercise.

## Author

-   Bice
-   https://bice.rocks
-   https://resume.bice.rocks
-   https://www.linkedin.com/in/certifiedbice
-   https://github.com/certifiedbice
-   https://github.com/certifiedbice/charter-ascendion-technical

## Application Framework

[![angular](https://img.shields.io/badge/Angular-%23B52E31?style=flat?logo=angular)](https://angular.io)
[![typescript](https://img.shields.io/badge/Typescript-%233178C6?style=flat?logo=typescript)](https://typescriptlang.org)
[![webpack](https://img.shields.io/badge/Webpack-%238DD6F9?style=flat?logo=typescript)](https://webpack.js.org)

-   `"ng": "ng"` Register the ng command. <span style="color:red;">\*</span>
-   Run `"build": "npm run config -- --environment=prod && ng build"` to build the project. The build artifacts will be stored in the `dist/` directory.<span style="color:red;">\*</span>
-   Run `"serve": "npm run config -- --environment=dev && ng serve"` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.<span style="color:red;">\*</span>
-   Run `"watch": "ng build --watch --configuration development"` to build the project. The build artifacts will be stored in the `dist/` directory.<span style="color:red;">\*</span>

## Documentation

[![semantic-release](https://img.shields.io/badge/semantic--release-%23DA107C?style=flat)](https://github.com/semantic-release/semantic-release)
[![compodoc](https://img.shields.io/badge/Compodoc-%23F03848?style=flat?logo=prettier)](https://https://compodoc.app)

-   This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.
-   `semantic-release` to correct the linting errors within the codebase<span style="color:red">\*</span>
-   "commit": "./node_modules/cz-customizable/standalone.js"
-   Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
-   "compodoc": "npx compodoc -p tsconfig.doc.json", <span style="color:red;">\*</span>
-   "compodoc:build": "compodoc -p tsconfig.doc.json",
-   "compodoc:build-and-serve": "compodoc -p tsconfig.doc.json -s",
-   "compodoc:serve": "compodoc -s"

## Code Quality

[![eslint](https://img.shields.io/badge/ESLint-%234B32C3?style=flat?logo=typescript)](https://eslint.org)
[![prettier](https://img.shields.io/badge/Prettier-%23F7B93E?style=flat?logo=prettier)](https://prettier.io)

-   "lint:check": "eslint ." <span style="color:red;">\*</span>
-   "lint:fix": "eslint --fix ." <span style="color:red;">\*</span>
-   "format:check": "prettier --check ." <span style="color:red;">\*</span>
-   "format:write": "prettier --write ." <span style="color:red;">\*</span>

## Testing

[![karma](https://img.shields.io/badge/Karma-%2342BEAE?style=flat?logo=jest)](https://karma-runner.github.io/latest/index.html)
[![jasmin](https://img.shields.io/badge/Jasmin-%238A4182?style=flat?logo=jasmin)](https://jasmine.github.io/)

-   Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
-   Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## UI

[![sass](https://img.shields.io/badge/SASS-%23CC6699?style=flat?logo=sass)](https://sass-lang.com)
[![fontawesome](https://img.shields.io/badge/FontAwesome-%23528DD7?style=flat?logo=fontawesome)](https://sass-lang.com)

### Planned Updates

-   NOTE, not all commands are fully functional at this time. <span style="color:red;">\*</span> Denotes functioning commands
-   StyleLint
-   NGRX
