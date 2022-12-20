import React, { useState } from 'react';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import { StyledAdmin } from './Admin.styled';
import { MdAddLink } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';
import { db } from '../../services/firebaseConnection';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore';
import { toast } from 'react-toastify';

const Admin = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#f1f1f1');
  const [textColor, setTextColor] = useState('#121212');

  const handleRegister = async (e) => {
    e.preventDefault();
    if (name === '' || url === '') {
      toast.warn('Preencha todos os campos!');
      return;
    }
    addDoc(collection(db, 'links'), {
      name,
      url,
      bg: backgroundColor,
      color: textColor,
      created: new Date(),
    })
      .then(() => {
        setName('');
        setUrl('');
        toast.success('Link cadastrado com sucesso');
      })
      .catch((e) => {
        console.log(e, 'erro ao registrar');
        toast.error('Ops, erro ao salvar o link');
      });
  };

  return (
    <StyledAdmin>
      <Header />
      <Logo />
      <form onSubmit={handleRegister}>
        <label>Nome do link</label>
        <Input
          placeholder="Nome do link..."
          value={name}
          onChange={({ target }) => setName(target.value)}
        />
        <label>Url do link</label>
        <Input
          type="url"
          placeholder="Digite a url"
          value={url}
          onChange={({ target }) => setUrl(target.value)}
        />
        <section>
          <div>
            <label>Fundo do link</label>
            <input
              type="color"
              value={backgroundColor}
              onChange={({ target }) => setBackgroundColor(target.value)}
            />
          </div>
          <div>
            <label>Cor do link</label>
            <input
              type="color"
              value={textColor}
              onChange={({ target }) => setTextColor(target.value)}
            />
          </div>
        </section>
        {name && (
          <div className="preview">
            <label>Veja como está ficando</label>
            <article
              style={{
                marginBottom: 8,
                marginTop: 8,
                backgroundColor: backgroundColor,
              }}
            >
              <p style={{ color: textColor }}>{name}</p>
            </article>
          </div>
        )}
        <button type="submit">
          Cadastrar <MdAddLink size={24} color="#FFF" />
        </button>
      </form>
      <h2>Meus links</h2>
      <article className="animate-pop">
        <p>Grupo exclusivo do Telegram</p>
        <div>
          <button>
            <FiTrash2 size={18} color="#fff" />
          </button>
        </div>
      </article>
    </StyledAdmin>
  );
};

export default Admin;
