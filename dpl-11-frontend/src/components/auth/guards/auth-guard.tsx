
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../layout/header/header';
;

const AuthGuard = ({ component }: any) => {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [component]);

  const checkToken = async () => {
    try {
      let isLogin = localStorage.getItem('isLogin')
      if (!isLogin) {
        navigate(`/login`);
      }
      setStatus(true);
      return;
    } catch (error) {

      navigate(`/login`);
    }
  }

  return status ?
    <>
      <Header />
      {component}
    </> :
    <React.Fragment></React.Fragment>;
}

export default AuthGuard;