// src/components/Contact.jsx
 
const Contato = () => {
  return (
    <div className="bg-blue-900 text-gray-200 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-lg text-yellow-500 font-semibold mb-2">Fale Conosco</h1>
          <p className="text-lg text-yellow-500 font-semibold mb-2">
            Tem alguma dúvida ou sugestão? Nosso time está pronto para te ajudar!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulário */}
          <div className="bg-white p-6 rounded-3xl shadow-md border border-blue-100">
            <h2 className="text-lg text-yellow-500 font-semibold mb-2">Envie sua mensagem</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="text-lg text-yellow-500 font-semibold mb-2">Seu nome</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full px-4 py-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Digite seu nome"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-lg text-yellow-500 font-semibold mb-2">Seu e-mail</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full px-4 py-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-lg text-yellow-500 font-semibold mb-2">Sua mensagem</label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Escreva aqui sua mensagem..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-yellow-500 py-3 px-6 rounded-xl font-bold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          {/* Informações de contato */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-3xl shadow-md border border-blue-50">
              <h3 className="text-2xl text-yellow-500 font-bold mb-2">Informações de Contato</h3>
              <p className="text-lg text-yellow-500 font-medium mb-2">Estamos aqui para te ajudar com qualquer dúvida sobre nossas bicicletas elétricas.</p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 p-2 rounded-lg">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg text-yellow-500 font-medium mb-2">Telefone</p>
                    <p className="text-lg text-yellow-500 font-medium mb-2">(11) 98765-4321</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 p-2 rounded-lg">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg text-yellow-500 font-medium mb-2">E-mail</p>
                    <p className="text-lg text-yellow-500 font-medium mb-2">contato@eletrobike.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-blue-600 p-2 rounded-lg">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-lg text-yellow-500 font-medium mb-2">Endereço</p>
                    <p className="text-lg text-yellow-500 font-medium mb-2">Av. Paulista, 1000 - São Paulo/SP</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-blue-50">
              <h3 className="text-2xl text-yellow-500 font-bold mb-2">Nos siga nas redes sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-700 hover:bg-blue-200 transition-colors duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-700 hover:bg-blue-200 transition-colors duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="#" className="bg-blue-100 p-3 rounded-full text-blue-700 hover:bg-blue-200 transition-colors duration-300">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contato