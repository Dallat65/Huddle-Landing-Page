import SocialIcons from "./SocialIcons"
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { StyledFooter } from "./styles/Footer.styled"

const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <img src="./images/logo_white.svg" alt='' />
                <Flex>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus culpa perspiciatis consectetur repellat sequi, quas aspernatur aliquid quia harum cupiditate facere, nesciunt hic cumque error aut ex adipisci, corrupti inventore?</li>
                        <li>+1-525-778-9123</li>
                        <li>example@daniel.com</li>
                    </ul>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact us</li>
                    </ul>
                    <SocialIcons />
                </Flex>
                <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
            </Container>
        </StyledFooter>
    )
}

export default Footer