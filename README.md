# RickMorty


## Manual para hacer el proyecto

1. ng new rick-morty --style=scss --routing


### Creamos el módulo para paginas
2. ng g m pages --routing

### Creamos el Modulo para autenticación
3. ng g m auth

#### Explicación de crear módulos:
necesitamos crear un módulo por cada tipo de acción que queremos realizar, por ejemplo:
- ventas
- compras
- administración
- autenticación
- pagos

Por tanto al ser autenticación una nueva acción o funcionalidad, debemos crear un nuevo módulo.


### Creamos el componente de login, luego le adaptamos al archivo de rutas sus rutas
4. ng g c auth/login


5. ng g c pages/characters

6. ng g c pages/favorites



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
