
import { Container, Title,Description,Input,InputContainer, Button} from './newsletter.styled'

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely! updates for your favorate products.</Description>
            <InputContainer>
                <Input placeholder="example@email.com"/>
                <Button>
                   Subscribe
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
