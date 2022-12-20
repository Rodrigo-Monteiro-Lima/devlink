import React, { useState } from 'react';
import Header from '../../components/Header';
import Logo from '../../components/Logo';
import Input from '../../components/Input';
import { StyledAdmin } from './Admin.styled';
import { MdAddLink } from 'react-icons/md';
import { FiTrash2 } from 'react-icons/fi';

const Admin = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#f1f1f1');
  const [textColor, setTextColor] = useState('#121212');

  return (
    <StyledAdmin>
      <Header />
      <Logo />
      <form>
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
