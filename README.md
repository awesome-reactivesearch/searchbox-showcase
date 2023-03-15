# searchbox-showcase

A showcase of SearchBox component usage

Manually need to update library when source changes

```
yarn build:lib
```

Can use the repository as a package

In your `package.json`

```json
{
  "dependencies": {
    "searchbox-showcase": "awesome-reactivesearch/searchbox-showcase"
  }
}
```

Then in your file

```js
import SearchboxShowcase from "searchbox-showcase";

const App = () => <SearchboxShowcase />;
```
