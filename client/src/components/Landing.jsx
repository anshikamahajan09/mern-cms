import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Landing() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/login?tab=admin');
    }, []);
  return null;
}

export default Landing