import Header from "@components/Header";

import { SecaoProvider } from "./contexts/useSecao";

function App() {

  return (
   <SecaoProvider>
      <Header />
    </SecaoProvider>
  );
}

export default App;
