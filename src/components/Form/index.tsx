import './style.css';

function Form(): JSX.Element {

  const inputFields = [
    { label: 'Nome*', type: 'text', id: 'name' },
    { label: 'Email*', type: 'text', id: 'email' },
    { label: 'Telefone*', type: 'text', id: 'phone' },
    { label: 'Área Construída (se já tiver):', type: 'text', id: 'subject' },
  ];

  const services = [
    'Projeto de Edificação',
    'Reforma',
    'Levantamento Cadastral',
    'Projeto Estrutural',
    'Instalações Elétricas',
    'Instalações Hidrossanitárias',
    'Combate a incêndio',
    'Orçamento de Obra e Quantitativo',
    'Execução de Obra',
    'Regularização',
    'Projeto completo',
    'Perícia e Vistoria',
    'Outros'
  ];

  return (
    <div className="h-full form-otimizza w-full px-3 py-10 xlg:px-16 xlg:py-11 gap-2.5 font-azonix text-snow-white">
      <div className="bg-[#2C3A64BF] flex flex-col gap-5 py-4 rounded-xl">
        <div className='text-center'>
          <h1 className='text-2xl sm:text-5xl'>Entre em contato</h1>
          <h5 className='text-sm mx-2 sm:mx-0 font-montserrat'>Explore os serviços personalizados da Otimizza hoje mesmo, sem custo inicial!</h5>
        </div>
        <form action="" className='flex flex-col gap-1 sm:flex-row justify-around'>
          <div className="flex-grow font-montserrat mx-3">
            {inputFields.map((field, index) => (
              <div key={index} className="flex flex-col mb-2 text-iron-gray">
                <input type={field.type} id={field.id} placeholder={field.label} className="border border-gray-400 p-2 rounded-md" />
              </div>
            ))}
            <div className='flex flex-col my-8 sm:my-2'>
              <p>Conte mais detalhes sobre seu projeto:</p>
              <textarea id="message" placeholder="Descreva seu projeto..." className="border text-iron-gray border-gray-400 p-2 rounded-md min-h-28"></textarea>
            </div>
          </div>
          <div className='flex-grow font-montserrat ml-3 sm:ml-0'>
            <p className='pb-2'>Escolha seus serviços:</p>
            {services.map((service, index) => (
              <div key={index} className="flex gap-1 mt-1 sm:mt-0">
                <input type="checkbox" id={`service_${index}`} />
                <label htmlFor={`service_${index}`}>{service}</label>
              </div>
            ))}
          </div>
        </form>
        <div className='flex justify-end mr-4'>
          <button type='button' className='font-semibold w-40 h-10 text-2xl px-7 py-1 rounded-md font-montserrat bg-[#FFB800]'>ENVIAR</button>
        </div>
      </div>
    </div>
  );
}

export { Form };
