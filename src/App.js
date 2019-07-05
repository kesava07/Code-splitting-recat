import React, { lazy, Suspense } from 'react';
// import ComponentA from './Containers/ComponentA';
// import ComponentB from './Containers/ComponentB';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home from './Containers/Home';
// import About from './Containers/About';

// import AsyncComponent from './Hoc/AsncronousComponents';

// const AsyncHome = AsyncComponent(()=>import('./Containers/Home'));
// const AsyncAbout = AsyncComponent(()=>import('./Containers/About'));

const AsyncHome = lazy(() => import('./Containers/Home'));
const AsyncAbout = lazy(() => import('./Containers/About'));

export default class App extends React.Component {
  render() {
    return (
      // <div style={{ textAlign: 'center' }}>
      //   <h1>App</h1>
      //   <ComponentA name="Jhon" />
      //   <ComponentB name="Doe" />
      // </div>
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<h1>Loding...</h1>}>
            <Route exact path="/" component={AsyncHome} />
            <Route path="/about" component={AsyncAbout} />
          </Suspense>
        </Switch>
      </BrowserRouter>
    )
  }
}
