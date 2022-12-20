import { StyledNetworks } from './Networks.styled';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { MdAddLink } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { db } from '../../services/firebaseConnection';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const Networks = () => {
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [youtube, setYoutube] = useState('');

  useEffect(() => {
    function loadLinks() {
      const docRef = doc(db, 'social', 'link');
      getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setFacebook(snapshot.data().facebook);
          setInstagram(snapshot.data().instagram);
          setYoutube(snapshot.data().youtube);
        }
      });
    }
    loadLinks();
  });

  const handleSave = async (e) => {
    e.preventDefault();
    setDoc(doc(db, 'social', 'link'), {
      facebook,
      instagram,
      youtube,
    })
      .then(() => {
        toast.success('Salvos com sucesso');
      })
      .catch(() => {
        toast.error('Erro aos salvar os links');
      });
  };

  return (
    <StyledNetworks>
      <Header />
      <h1>Suas Redes Sociais</h1>
      <form onSubmit={handleSave}>
        <label>Link do facebook</label>
        <Input
          placeholder="Digite a url do facebook"
          value={facebook}
          onChange={({ target }) => setFacebook(target.value)}
        />
        <label>Link do instagram</label>
        <Input
          placeholder="Digite a url do instagram"
          value={instagram}
          onChange={({ target }) => setInstagram(target.value)}
        />
        <label>Link do youtube</label>
        <Input
          placeholder="Digite a url do youtube"
          value={youtube}
          onChange={({ target }) => setYoutube(target.value)}
        />
        <button type="submit">
          Salvar Links <MdAddLink size={24} color="#fff" />
        </button>
      </form>
    </StyledNetworks>
  );
};

export default Networks;
