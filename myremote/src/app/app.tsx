// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div>
      here via remote load
      <NxWelcome title="myremote" />
    </div>
  );
}

export default App;
