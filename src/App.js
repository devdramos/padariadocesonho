import './styles.css';
import { MdWork } from 'react-icons/md';
import { ImHappy2 } from 'react-icons/im';
import { GoPerson } from 'react-icons/go'

function App() {
  return (
    <div className="container">
      <header className='header'>
        <nav className='nav'>
            <div className='navbarLogo'>
              <p>Padaria Doce Sonho</p>
            </div>
            <table className='menu'>
              <ul>
                <li>Produtos</li>
                <li>Personalizados</li>
                <li>Fotos</li>
                <li>Contatos</li>
                <li>Login</li>
              </ul>
            </table>
        </nav>
      </header>
      <div className="Slogan">
      <h1 className="title">Padaria Doce Sonho</h1>

    
      <h2 className='fraseSlogan'>Carinho em cada colher de farinha!</h2>
    

    <div className="produtosSlogan">
      <h2>Conheça nossos produtos</h2>
      <p>| Pães | Bolos | Doces | Salgados |</p>


    </div>
    </div>

    <main className='main'>
      <div className='historiapadaria'>
      <h2 className='motivacao'>"Há 20 anos realizando os sonhos de diversos clientes..."</h2>
      <p>Fundada em 2003, a Padaria Doce Sonho já atendeu milhares de clientes em todo o mundo, prezando sempre pelo
        atendimento de qualidade e bem estar dos clientes, temos prazer em dizer que somos pioneiros no ramo de
        personalização de bolos sob demanda.
      </p>
      </div>
      <div className='Produtos'>
        <div className='titleProdutos'>
          <h2>| Nossos produtos</h2>
        </div>
        <div className='bodyProdutos'>
        <div className='produto1'>
          <img src='https://img.freepik.com/fotos-gratis/vista-frontal-em-fatias-de-pao-fresco_23-2148613522.jpg?w=740&t=st=1673655896~exp=1673656496~hmac=3839855d27c6a6a065719f0404008c5600ed22cae52fd0672fca5c737f005731'></img>
        </div>
        <div className='produto2'>
          <a href="/public/sonho.html">
          <img src='https://img.freepik.com/fotos-gratis/deliciosos-donuts-caseiros-para-sobremesa_144627-36752.jpg?w=740&t=st=1673655962~exp=1673656562~hmac=9ef04f0138f5578406d7f618f0cb59f334a7814349efdae6f9d32eeb3fcf5554'></img>
          </a>
        </div>
        <div className='produto3'>
          <img src='https://img.freepik.com/fotos-gratis/bolo-delicioso-e-doce-com-morangos-e-baiser-em-um-prato_181624-29179.jpg?w=740&t=st=1673656012~exp=1673656612~hmac=fa06fae7229f2a4085708e708c89557caeaeacb24e7fb456a249bf82d9095ef1'></img>
        </div>
        <div className='produto4'>
          <img src='https://img.freepik.com/fotos-gratis/vista-frontal-deliciosa-composicao-da-comida-brasileira_23-2148739224.jpg?w=740&t=st=1673656102~exp=1673656702~hmac=ed73e2c388025adbb144050560040df0583325705681bcd00fe8018b0344a599'></img>
        </div>
        </div>
      </div>
      <div className='titleClientes'>
          <h2>| Clientes</h2>
        </div>
      <div className='Clientes'>
        <div className='totalClientes'>
            <h3>Clientes atendidos</h3>
            <GoPerson size={100}/>
            <h4>2.408.945</h4>
        </div>
        <div className='satisClientes'>
            <h3>Clientes satisfeitos</h3>
            <ImHappy2 size={100}/>
            <h4>98,7%</h4>
        </div>
        <div className='satisClientes'>
            <h3>Projetos realizados</h3>
            <MdWork size={100}/>
            <h4>427</h4>
        </div>
      </div>
      <div className='titleMotivo'>
        <h2>| Por que escolher a Padaria Doce Sonho?</h2>
      </div>
      <div className='Motivo'>
        <h3>Criação de sonhos</h3>
        <p>Nós da Padaria Doce Sonho vendemos muito além de doces e salgados (que diga-se de passagem, são deliciosos),
          nós vendemos experiências, nosso ambiente acolhedor foi pensado e trabalhado para que você possa trazer sua
          família e quem você ama pra prestigiar nossas delícias, acreditamos que nada é mais importante que tempo de qualidade,
          e é nisso que nós investimos, para que você curta seus melhores momentos junto com a padaria que mais forma sonhos,
          a Padaria Doce Sonho.
        </p>
        <h3>Filosofia da Empresa</h3>
        <p>Nós temos a missão na terra de trazer sorrisos para os clientes, alegria para as crianças, e acolhimento para
          todos, com uma pegada diversificada, buscamos abranger todos os grupos sociais presentes na nossa sociedade, por
          meio de preços acessíveis, um time devidamente selecionada para que cada pessoa se sinta parte da nossa padaria,
          e também um treinamento para que toda a sua estadia no nosso estabelecimento seja perfeita.
        </p>
      </div>
      <div className='titleExperiencias'>
        <h2>| Experiências</h2>
      </div>
      <div className='Experiências'>
        <div className='primeiraExp'>
          <h4>"Essa padaria fez os melhores momentos da minha infância tomando café da manhã com meus pais todo sábado."</h4>
        </div>
        <div>
          <h4>"Nunca vou me esquecer de quando pedi minha esposa em casamento na Padaria Doce Sonhos, foi um momento lindo."</h4>
        </div>
      </div>
    </main>
    <footer>
      <div className='rodape'>
        <p>Desenvolvido por Daniele Barroso Ramos</p>
        <p>Imagens retiradas do Site <a href='https://freepik.com'>FreePik</a></p>
      </div>
    </footer>
    </div>
  );
}

export default App;
