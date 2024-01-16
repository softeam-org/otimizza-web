import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Hero } from "@components/Hero";

import { SecaoProvider } from "./contexts/useSecao";

function App() {
  return (
    <SecaoProvider>
      <Header />
      <Hero />
      <Footer />
    </SecaoProvider>
  );
}

export default App;
