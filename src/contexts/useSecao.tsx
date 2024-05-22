import { RefObject, createContext, useContext, useEffect, useRef, useState } from "react";

interface SecaoContextProps {
  secaoAtiva: string;
  scrollTo: (refName : string) => void;
  getRef: (section: string) => RefObject<HTMLDivElement>| null;
}

const SecaoContext = createContext<SecaoContextProps>({
  secaoAtiva: "",
  scrollTo: () => {},
  getRef: () => null,
});

export const useSecao = () => {
  const context = useContext(SecaoContext);
  return context;
};



export const SecaoProvider = ({ children }: { children: React.ReactNode }) => {
  const [secaoAtiva, setSecaoAtiva] = useState<string>("");
  const secoesRef = useRef<NodeListOf<HTMLDivElement> | null>(null);
  const inicioRef = useRef<HTMLDivElement | null>(null);
  const sobreRef = useRef<HTMLDivElement | null>(null);
  const servicosRef = useRef<HTMLDivElement | null>(null);
  const contatoRef = useRef<HTMLDivElement | null>(null);
  

  const getRef = (section: string): RefObject<HTMLDivElement> | null =>  {
    switch (section) {
      case "inicio":
        return inicioRef;
      case "sobre":
        return sobreRef;
      case "servicos":
        return servicosRef;
      case "contato":
        return contatoRef;
      default:
        return null;
    }
  }

  const scrollTo = (refName : string) => {
    if (!refName) return 
    const ref = getRef(refName);
    ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const classes = entry.target.className.split(" ");
          const nomeSecao =
            classes.find((classe) => classe.startsWith("secao-"))?.split("-")[1] ||
            "";
          setSecaoAtiva(nomeSecao);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null, 
      rootMargin: "0px",
      threshold: 0.5,
    });

    secoesRef.current = document.querySelectorAll(".secao");
    secoesRef.current.forEach((secao) => observer.observe(secao));

    return () => {
      secoesRef.current?.forEach((secao) => observer.unobserve(secao));
    };
  }, []);

  const contextValue = {
    secaoAtiva,
    getRef,
    scrollTo,
  };

  return (
    <SecaoContext.Provider value={contextValue}>
      {children}
    </SecaoContext.Provider>
  );
};
