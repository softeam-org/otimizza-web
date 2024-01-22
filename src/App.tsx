import { AboutUs } from "@components/AboutUs";
import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import { Hero } from "@components/Hero";
import { Services } from "@components/Services";


import { SecaoProvider } from "./contexts/useSecao";

function App() {
  return (
    <SecaoProvider>
      <div className="max-w-[1440px] flex flex-col m-auto pt-20">
        <Header />
        <Hero />
        <AboutUs />
        <Services />
        <Footer />
      </div>
    </SecaoProvider>
  );
}

export default App;
