//import React from "react";

import { useSecao } from "@/contexts/useSecao";


function Form(): JSX.Element {
  const { getRef } = useSecao();
  
  const ref = getRef('contato');

  return (
    <div ref={ref} className="scroll-my-16 xsm:scroll-my-20">
        <div className="h-96"></div>
            <h1 className="mx-auto  italic max-w-56 text-5xl">Formulário</h1>
        <div className="h-96"></div>
    </div>
  );
}

export { Form };
