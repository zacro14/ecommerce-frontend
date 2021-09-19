import { SendOutlined } from '@mui/icons-material'
import { Container, Title,Description,Input,InputContainer, Button} from './newsletter.styled'

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely! updates for your favorate products.</Description>
            <InputContainer>
                <Input placeholder="Your Email"/>
                <Button>
                    <SendOutlined/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
