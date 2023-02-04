import * as C from './styles';
import jpIMG from '../../assets/jp.svg';
import { ChangeEvent, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Theme } from '../../Theme';
import { AuthContext } from '../../contexts/auth';
import { Navigate } from 'react-router-dom';


export const Login = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const {signIn, signed}: any  = useContext(AuthContext);

const handleSignIn = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email,
      password
    };
    await signIn(data);
}
  if(signed) {
    return <Navigate to='/' />

  } else {

return (
  <Theme>
        <C.LoginForm onSubmit={handleSignIn}>

          <span>Bem Vindo!</span>
          <span>
            <img src={jpIMG} alt='logo' />
          </span>
          <C.WrapInput>
            <label>
                Email
              <input type='email' 
              autoFocus 
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
            
            <button type='submit'>Login</button>

          </C.ContainerLoginFormBtn>

          <C.TextCenter>
            <span>Não possui conta?</span>
            <Link to='/register' className='link'>Criar conta.</Link>

          </C.TextCenter>
          
        </C.LoginForm>
    </Theme>
)
}
}