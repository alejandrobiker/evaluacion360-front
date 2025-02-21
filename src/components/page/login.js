import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { environment } from '../../enviroment';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${environment.api}/auth/login`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, password }),
            });
      
            const data = await response.json();
      
            if (response.ok) {
                localStorage.setItem('authToken', data.token);
                navigate('/home');
            } else {
              setErrorMessage(data.message || 'Error en el inicio de sesión');
            }
          } catch (error) {
            setErrorMessage('Error de red, por favor intente nuevamente.');
          }

        const response = await fetch(`${environment.api}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })
        if (response.ok) {
            navigate('/home');
        } else {
            alert('Error en el inicio de sesión');
        }
    };

    return (
        <div className="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
            <div className="flex flex-column align-items-center justify-content-center">
                <div
                    style={{
                        borderRadius: '56px',
                        padding: '0.3rem',
                        background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)'
                    }}
                >
                    <div className="w-full primary-50 py-8 px-5 sm:px-8" style={{ borderRadius: '53px', background: 'var(--surface-0)' }}>
                        <div className="text-center mb-5">
                            <div className="py-2"></div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            
                            <div>
                                <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">
                                    Email
                                </label>
                                <InputText id="email1" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} />

                                <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                                    Password
                                </label>
                                <Password inputId="password1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"></Password>

                                <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                </div>
                                <Button label="Iniciar sesión" className="w-full p-3 text-xl"></Button>
                            </div>
                        </form>
                        {errorMessage && <div className="error">{errorMessage}</div>}
                    </div>
                </div>
            </div>
        </div>
      );
};

export default LoginPage;
