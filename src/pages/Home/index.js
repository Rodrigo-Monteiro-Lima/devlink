import Social from '../../components/Social';
import { StyledHome } from './Home.styled';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import {
  getDocs,
  collection,
  orderBy,
  query,
  doc,
  getDoc,
} from 'firebase/firestore';
import { db } from '../../services/firebaseConnection';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [links, setLinks] = useState([]);
  const [socialLinks, setSocialLinks] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    function loadLinks() {
      const linksRef = collection(db, 'links');
      const queryRef = query(linksRef, orderBy('created', 'asc'));
      getDocs(queryRef).then((snapshot) => {
        const list = [];
        snapshot.forEach((doc) => {
          list.push({
            id: doc.id,
            name: doc.data().name,
            url: doc.data().url,
            bg: doc.data().bg,
            color: doc.data().color,
          });
        });
        setLinks(list);
      });
    }
    loadLinks();
  }, []);

  useEffect(() => {
    function loadSocialLInks() {
      const docRef = doc(db, 'social', 'link');
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setSocialLinks({
            facebook: snapshot.data().facebook,
            instagram: snapshot.data().instagram,
            youtube: snapshot.data().youtube,
          });
        }
      });
    }
    loadSocialLInks();
  }, []);
  return (
    <StyledHome>
      <h1>Rodrigo Monteiro</h1>
      <button onClick={() => navigate('/login')}>Fazer Login</button>
      <span>Veja Meus Links 👇</span>
      <main>
        {links.map(({ name, url, bg, color, id }) => (
          <section key={id} style={{ backgroundColor: bg }}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <p style={{ color }}>{name}</p>
            </a>
          </section>
        ))}
        {links.length !== 0 && Object.keys(socialLinks).length > 0 && (
          <footer>
            <Social url={socialLinks?.facebook}>
              <FaFacebook size={35} color="#fff" />
            </Social>
            <Social url={socialLinks?.youtube}>
              <FaYoutube size={35} color="#fff" />
            </Social>
            <Social url={socialLinks?.instagram}>
              <FaInstagram size={35} color="#fff" />
            </Social>
          </footer>
        )}
      </main>
    </StyledHome>
  );
};

export default Home;
