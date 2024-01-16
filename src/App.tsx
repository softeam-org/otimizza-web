
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";

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
