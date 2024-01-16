
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";

import { SecaoProvider } from "./contexts/useSecao";

function App() {

  return (
   <SecaoProvider>
      <Header />
      <Footer />;
    </SecaoProvider>
  );
}

export default App;
