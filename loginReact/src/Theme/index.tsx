import { ReactNode } from 'react';
import * as C from './styles';

type Props = {
    children: ReactNode
}

export const Theme = ({ children }: Props) => {

   return (
        <C.Container>
            <C.ContainerLogin>
                <C.WrapLogin>
                    {children}
                </C.WrapLogin>
            </C.ContainerLogin>
        </C.Container>
       
   )
}