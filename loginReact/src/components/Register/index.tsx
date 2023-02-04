import { Theme } from '../../Theme';
import { Link } from 'react-router-dom';
import jpIMG from '../../assets/jp.svg';
import * as C from './styles';
import { ChangeEvent, useState } from 'react';
import { api } from '../../services/api';



export const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSaveUser = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = {
            name, email, password
        }

        const response = await api.post('/create', data);
        console.log(response.data)
    };

    return (
        <Theme>
                <C.LoginForm onSubmit={handleSaveUser}>
                    <span>Cadastra-se</span>
                    <span>
                    <img src={jpIMG} alt='logo' />
                    </span>
                    <C.WrapInput>

                        <label>
                            Nome
                            <input type='text' 
                            autoFocus 
                            value={name}
                            onChange={e => setName(e.target.value)}
                            />
                            <span data-placeholder='Name'></span>
                        </label>

                        <label>
                            Email
                            <input type='email' 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            />
                            <span data-placeholder='Email'></span>
                        </label>

                        <label>
                            Password
                            <input type='password' 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                            <span data-placeholder='Password'></span>
                        </label>
                    </C.WrapInput>

                    <C.ContainerLoginFormBtn>
                    
                    <button type='submit'>Criar conta</button>

                    </C.ContainerLoginFormBtn>

                    <C.TextCenter>
                    <span>Já possui conta?</span>
                    <Link to='/login' className='link'>Fazer login.</Link>

                    </C.TextCenter>

                </C.LoginForm>
        </Theme>
    )
}