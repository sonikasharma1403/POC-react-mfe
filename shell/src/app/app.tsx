import * as React from 'react';
// import RemoteApp from 'myremote/Module'
import NxWelcome from './nx-welcome';

import { importRemote } from '@module-federation/utilities';

import { Link, Route, Routes } from 'react-router-dom';

export function App() {

  React.useEffect(() => {
    importRemote({
      url: 'http://localhost:4201/myremote',
      scope: 'myremote',
      module: 'Module',
      esm: true
    }).then(
      res => {
        console.log("resss", res)
      },
    );
  }, [])
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
      {/* <RemoteApp /> */}
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
