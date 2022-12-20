import Social from '../../components/Social';
import { StyledHome } from './Home.styled';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';

const Home = () => {
  return (
    <StyledHome>
      <h1>Rodrigo Monteiro</h1>
      <span>Veja Meus Links 👇</span>
      <main>
        <section>
          <a href="#">
            <p>Canal do Youtube</p>
          </a>
        </section>
        <section>
          <a href="#">
            <p>Canal do Youtube</p>
          </a>
        </section>
        <section>
          <a href="#">
            <p>Canal do Youtube</p>
          </a>
        </section>
        <footer>
          <Social url="https://github.com/Rodrigo-Monteiro-Lima">
            <FaGithub size={35} color="#fff" />
          </Social>
          <Social url="https://www.linkedin.com/in/rodrigo-monteiro-lima/">
            <FaLinkedin size={35} color="#fff" />
          </Social>
          <Social url="https://mailto:rodrigoml2395@gmail.com">
            <TfiEmail size={35} color="#fff" />
          </Social>
        </footer>
      </main>
    </StyledHome>
  );
};

export default Home;
