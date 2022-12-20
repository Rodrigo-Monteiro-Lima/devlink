import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Loading from '../components/Loading';
import { auth } from '../services/firebaseConnection';

const Private = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    async function checkLogin() {
      const unsub = onAuthStateChanged(auth, (user) => {
        if (user) {
          const userData = {
            uid: user.uid,
            email: user.email,
          };
          localStorage.setItem('@detailUser', JSON.stringify(userData));
          setLoading(false);
          setSigned(true);
        } else {
          setLoading(false);
          setSigned(false);
        }
      });
    }
    checkLogin();
  }, []);

  if (loading) return <Loading />;
  if (!signed) return <Navigate to="/login" />;
  return children;
};

export default Private;
