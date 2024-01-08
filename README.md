# Desafío para Dev

## Comentarios
- Al aplicar filtros por especies, la API de Rick and Morty no cuenta
con una consulta para obtener todos los tipos de especies. Mi solución
para este problema fue obtener las especies de todos los personajes y crear
una lista de ellas.

- Manejo toda la comunicación de los componentes con dos contextos de React (characters y modal). El contexto de characters envuelve toda la aplicación, mientras que el contexto del modal solo envuelve a los componentes que renderizan los characters y al componente que renderiza el modal de detalle. Ya que es el componente de character quien captura la acción del usuario cuando este quiere ver el detalle de un personaje, cambiando el estado del contexto del modal, haciendo que el componente del modal se renderice.

---

Nombre postulante: Joel Chavez.
Link a la app en producción: https://joelcm-desafio-dev.vercel.app

## Instrucciones

- Desarrolla una aplicación web con React y Vite que permita a los usuarios buscar y visualizar información sobre personajes de la serie "Rick and Morty" utilizando la [Api de Rick and Morty](https://rickandmortyapi.com/documentation/#graphql)
- En la carpeta **challenge-dev** se encuentra una base para que partas. Puedes decidir no usarla.
- Debes crear un repositorio en github e invitar a [ieastorga](https://github.com/ieastorga) y a [gomara](https://github.com/gomara) como colaboradores.
- Avisar via mail cuando este listo.

### Requisitos Funcionales

#### Página de Búsqueda:

- Implementa una página de inicio con un campo de búsqueda.
- Los usuarios deben poder ingresar el nombre de un personaje en el campo de búsqueda.
- La aplicación debe mostrar los resultados correspondientes a la búsqueda.

#### Filtros:

- Implementa 3 filtros en la página de busqueda, (status, specie, gender).
- Los usuarios deben poder seleccionar el valor deseado en cada filtro.
- La aplicación debe mostrar los resultados correspondientes a la seleccion de los filtros. puedes inluir o no un boton para aplicar los filtros.
- Se debe incluir un boton para resetear todos los filtros incluido el buscador.

#### Visualización de Detalles:

- Al hacer clic en un personaje de la lista de resultados, la aplicación debe mostrar una página o modal de detalles con información adicional sobre el personaje seleccionado.
- Muestra al menos la imagen, nombre, especie, estado y origen del personaje.

#### GraphQL:

- Utiliza GraphQL para realizar consultas a la API de Rick and Morty en lugar de utilizar solo REST.

#### Estilo y Diseño:

- Aplica estilos para que la aplicación sea visualmente atractiva y fácil de usar.
- Puedes utilizar bibliotecas de diseño o crear tus propios estilos.

#### Paginación(BONUS):

- Implementa paginación en la lista de resultados para mostrar más personajes a medida que el usuario se desplaza.
- La API de Rick and Morty soporta paginación, puedes utilizarla para cargar más resultados.

Se espera que logres hacer una aplicación parecida a la del siguiente diagrama (es solo un ejemplo):

![main](imgs/main.png)
![modal](imgs/modal.png)

La funcionalidad y estructura debe ser igual, pero el diseño y variantes (por ejemplo, cambiar colores de las cosas) queda a tu gusto.

Además de esto, se espera que hagas deploy de tu app en el servicio que desees (Vercel, Heroku, Netlify, AWS, Github Pages, etc).

## Consideraciones

- Se espera que uses buenas prácticas como gitflow (pull requests y commits), orden del código, estructura, eficiencia, etc.
- Puedes dejar comentarios de decisiones que tuviste que tomar y del por qué en este repositorio.
- Se va a considerar un buen diseño de UX/UI.

## Hints

Acá van algunas cosas que pueden ser útiles (o no 👀):

- [Gitignore](https://www.toptal.com/developers/gitignore)
- [GraphQL](https://www.howtographql.com/)
- [React](https://es.reactjs.org/)
- [Styled components](https://styled-components.com/docs/basics)
- [ApolloClient](https://www.apollographql.com/docs/react/)
- [Lodash](https://lodash.com/)
- [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Commitlint](https://commitlint.js.org/#/)
- [Eslint](https://eslint.org/)
- [Husky](https://www.npmjs.com/package/husky)
- [Vite](https://vitejs.dev/)
- [Tailwind](https://tailwindcss.com/)
