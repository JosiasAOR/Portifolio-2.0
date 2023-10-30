import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <header>
          <h1>Josias Rodrigues - Desenvolvedor Jr</h1>
          <p>Conhecimentos: React, Express, JavaScript, PostgreSQL, React Native</p>
        </header>

        <section>
          <h2>Sobre Mim</h2>
          <p>
            Sou um desenvolvedor Jr com experiência em React, Express, JavaScript,
            PostgreSQL e React Native. Atualmente, trabalho na área de TI como suporte,
            mas estou buscando oportunidades para expandir minha carreira como desenvolvedor.
          </p>
        </section>

        <section>
          <h2>Habilidades</h2>
          <ul>
            <li>React</li>
            <li>Express</li>
            <li>JavaScript</li>
            <li>PostgreSQL</li>
            <li>React Native</li>
          </ul>
        </section>

        <section>
          <h2>Projetos</h2>
          {/* Adicione os detalhes dos seus projetos aqui */}
          <div>
            <h3>Projeto 1</h3>
            <p>Descrição do Projeto 1.</p>
          </div>
          <div>
            <h3>Projeto 2</h3>
            <p>Descrição do Projeto 2.</p>
          </div>
        </section>

        <section>
          <h2>Experiência Profissional</h2>
          <div>
            <h3>Atualmente - Suporte de TI</h3>
            <p>Descrição das responsabilidades e realizações atuais.</p>
          </div>
          {/* Adicione experiências anteriores, se houver */}
        </section>

        <section>
          <h2>Contato</h2>
          <p>Email: seuemail@example.com</p>
          <p>LinkedIn: linkedin.com/in/seulinkedin</p>
          {/* Adicione mais informações de contato conforme necessário */}
        </section>
      </div>
    </>
  )
}

export default App
