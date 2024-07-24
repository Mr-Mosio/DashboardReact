import {Outlet, useNavigate} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {useTheme} from './context/theme.context.jsx';
import {useTranslation} from 'react-i18next';
import {useMeQuery} from './hooks/useQuery.js';
import {useEffect} from 'react';
import {useUser} from './context/user.context.jsx';
import Logo from './views/Components/Base/Logo.jsx';
import {Loading} from 'react-daisyui';

function App() {
  const {title} = useTheme()
  const {setUser, logout} = useUser()
  const {t} = useTranslation();
  const {isPending, data, error} = useMeQuery()

  const navigate = useNavigate()

  useEffect(() => {
    if (data) {
      setUser(data.data);
      if (location.pathname === '/login') {
        navigate('/');
      }
    }
  }, [data]);
  useEffect(() => {
    if (error) {
      logout()
      navigate("/login")
    }
  }, [error]);

  return (
    <>
      <Helmet titleTemplate={`${t("title")} - %s`}>
        <title>{t(title)}</title>
      </Helmet>
      {isPending ?
          <section
              className="fixed inset-0 flex items-center justify-center flex-col gap-5">
            <Logo className="w-44"/>
            <div className="flex items-center gap-2">
              <Loading variant="spinner"/>
              <span>{t("loading")}</span>
            </div>
          </section> : <Outlet />}

    </>
  )
}

export default App
