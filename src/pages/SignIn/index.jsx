import { Container, Form } from "./style"

import { Logo } from "../../components/Logo"
import { Section } from "../../components/Section"
import { Input } from "../../components/Input"
import { Button } from '../../components/Button'
import { ButtonText} from '../../components/ButtonText'

export function SignIn(){
    return(
        <Container>
            <Logo/>
            <Form>
                <h1>
                    Faça login
                </h1>

                
                <Section>
                    
                    <div>
                        <h2>Email</h2>
                        <Input
                        placeholder="exemplo@exemplo.com.br"
                        />
                    </div>

                    <div>
                        <h2>Senha</h2>
                        <Input
                        placeholder="No mínimo 6 caracteres"
                        />
                    </div>
                    
                    <Button title="Entrar" />


                </Section>


                <ButtonText title="Criar uma conta" />
            </Form>
        </Container>
    )
}