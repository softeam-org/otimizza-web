import { createContext, useContext, useEffect, useRef, useState } from "react";

interface SecaoContextProps {
  secaoAtiva: string;
}

const SecaoContext = createContext<SecaoContextProps>({
  secaoAtiva: "",
});

export const useSecao = () => {
  const context = useContext(SecaoContext);
  return context;
};

export const SecaoProvider = ({ children }: { children: React.ReactNode }) => {
  const [secaoAtiva, setSecaoAtiva] = useState<string>("");
  const secoesRef = useRef<NodeListOf<HTMLElement> | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const classes = entry.target.className.split(" ");
          const nomeSecao =
            classes.find((classe) => classe.startsWith("secao-"))?.split("-")[1] ||
            "";
          setSecaoAtiva(nomeSecao);
          console.log(nomeSecao);
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
  };

  return (
    <SecaoContext.Provider value={contextValue}>
      {children}
    </SecaoContext.Provider>
  );
};
