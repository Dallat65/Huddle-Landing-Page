import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa"
import { StyledSocialIcon } from "./styles/SocialIcon.styled"

const SocialIcons = () => {
    return (
        <StyledSocialIcon>
            <a href="https://twitter.com" rel="no-referrer">
                <FaTwitter />
            </a>
            <a href="https://facebook.com" rel="no-referrer">
                <FaFacebook />
            </a>
            <a href="https://linkedin.com" rel="no-referrer">
                <FaLinkedin />
            </a>
        </StyledSocialIcon>
    )
}

export default SocialIcons