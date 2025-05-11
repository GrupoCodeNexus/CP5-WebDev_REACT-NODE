// src/components/About.jsx
const Sobre = () => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Sobre Nossa Loja
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nossa história e nossa paixão por bicicletas elétricas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa História</h2>
            <p className="text-gray-600 mb-4 text-lg">
              Fundada em 2010, nossa loja começou como uma pequena oficina de bicicletas tradicionais. Com o crescimento do mercado de mobilidade urbana, nos especializamos em bicicletas elétricas a partir de 2018.
            </p>
            <p className="text-gray-600 text-lg">
              Hoje somos referência em São Paulo, com mais de 1.000 clientes satisfeitos e uma equipe de especialistas apaixonados por mobilidade sustentável.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://img.odcdn.com.br/wp-content/uploads/2024/01/segway-e-bike.webp" 
              alt="Nossa equipe" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nossos Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sustentabilidade",
                description: "Promovemos a mobilidade urbana sustentável e reduzimos impactos ambientais",
                icon: "🌱"
              },
              {
                title: "Qualidade",
                description: "Trabalhamos apenas com as melhores marcas e componentes do mercado",
                icon: "⭐"
              },
              {
                title: "Atendimento",
                description: "Nossa equipe especializada está pronta para te ajudar em todas as etapas",
                icon: "👨‍🔧"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Visite Nossa Loja</h2>
          <p className="text-xl text-gray-600 mb-8">
            Estamos abertos de segunda a sábado, das 9h às 18h
          </p>
          <div className="max-w-2xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0754267452926!2d-46.65342658440779!3d-23.565734367638827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sobre