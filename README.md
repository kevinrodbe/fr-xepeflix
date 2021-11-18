# Xepeflix to the moon 🚀
## Available Scripts
### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Stack

- [Redux][redux] with [Thunks][thunk]: manejo de estado con side-effects
- [Yup][yup]: validacion de formularios
- [react-hook-form][form]: manejo de los forms
- [useSWR][swr]: consumo de APIs
- [MUI][mui]: UI framework
- [Adapter Pattern][adapter]: para datos y librerías de terceros.
- [Clean Architecture][clean]: Separacion de responsabilidades por capas.

  - Modules: División funcional
#### Independiente del Framework:
    - Domain: Dominio del contexto (módulo)
    - Mappers: Adaptador entre el dominio del front y la estructura de datos externa. Así es mucho más manejable la actualización que haga back sobre la estructura de datos.
    - Infrastructure:
      - Models: Modelado del dominio con validaciones de datos
      - Repository: Comunicación con el backend.
#### Dependiente del Framework: React/Angular/Vue/ETC..
    - Adapters:
      - Hooks: Lógica con estado reutilizable (aca se podrían extraer casos de uso si hubiera más lógica en la aplicación)
      - Routes: Definición de rutas publicas/privadas del módulo
      - State: Manejo del estado del módulo. (con Redux en este caso)
    - UI:
      - Pages: Vistas a cargar del módulo
      - Components: Bloques reutilizables de los que están compuestas las vistas


![clean archi][img-archi]


[img-archi]: archi.jpg
[redux]: <https://react-redux.js.org/>
[thunk]: <https://github.com/reduxjs/redux-thunk>
[yup]: <https://www.npmjs.com/package/yup>
[form]: <https://react-hook-form.com/>
[swr]: <https://swr.vercel.app/>
[mui]: <https://mui.com/>
[adapter]: <https://refactoring.guru/design-patterns/adapter>
[clean]: <https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html>