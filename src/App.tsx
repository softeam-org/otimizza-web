import { AboutUs } from "@components/AboutUS";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";

import { SecaoProvider } from "./contexts/useSecao";

function App() {

  return (
   <SecaoProvider>
      <Header />
      <AboutUs />
      <Footer />
    </SecaoProvider>
  );
}

export default App;
