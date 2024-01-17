import { AboutUs } from "@components/AboutUs";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Hero } from "@components/Hero";
import { Services } from "@components/Services";


import { SecaoProvider } from "./contexts/useSecao";

function App() {
  return (
    <SecaoProvider>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Footer />
    </SecaoProvider>
  );
}

export default App;
