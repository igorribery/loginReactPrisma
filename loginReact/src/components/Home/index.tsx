import { ChangeEvent, useContext } from 'react';
import * as C from './styles';
import { AuthContext } from '../../contexts/auth';

const Home = () => {

  const { signOut }: any = useContext(AuthContext);

  const handleLogOut = () => {
    signOut();
  }

  return (
    <C.Container>
        <h1>Home</h1>
        <button onClick={handleLogOut}>Log Out</button>
    </C.Container>
  )
}

export default Home;