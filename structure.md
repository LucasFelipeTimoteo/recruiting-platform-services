# Project structure

### Complete folder and files structure:
see in [tree.md](./tree.md)

## Folders descriptions

### frontend

- [**pages**](./frontend/src/pages): contains the top-level content of the page. It has no logic related to page interactions

- [**components**](./frontend/src/components): contains the top-level content of the component itself. It has all subcomponents and global logic of it

- [**parts**](./frontend/src/parts): contains the subcomponents of components, the small parts that compound the component. Parts can also have subparts, receive props from component or have own global logic

- [**hooks**](./frontend/src/hooks): contains react-hooks related to components

- [**contexts**](./frontend/src/contexts): contains react context-API content
  - **"MY_CONTEXT_FOLDER"/context**: contains the reference of context itself
  - **"MY_CONTEXT_FOLDER"/provider**: contains the "MY_CONTEXT".Provider component and the reference of data will be passed by context
  - **"MY_CONTEXT_FOLDER"/hooks**: contains two types of hooks: the states and related context logic to place in provider component and the hooks to get provider values in other components

- [**mocks**](./frontend/src/mocks): contains the mock data to use in tests

- [**services**](./frontend/src/services): contains APIs related content

- [**themes**](./frontend/src/themes): contains style themes
  - [**MuiThemes**](./frontend/src/themes/MuiThemes): contain style themes of Material-ui (a React componentization and styling library)

- [**utils**](./frontend/src/utils): contains utility functions that will be used in conjunction with the components. Util funtions can have own util functions

- [**public**](./frontend/public): contains all public data of React

### backend

- [**controller**](./backend/src/controller): contains all logic related for specific routes

- [**database**](./backend/src/database): contains the json-server database

- [**services**](./backend/src/services): contains APIs related content

- [**routes**](./backend/src/routes): contains all possible requests for a specific route


- [**models**](./backend/src/models): contains models (schemas) to validate specific data received from the client-side
