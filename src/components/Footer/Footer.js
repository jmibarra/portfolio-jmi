import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMediumSquare, AiFillTwitterSquare } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import SocialMedia from '../SocialMedia/SocialMedia';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
        <SocialIconsContainer>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Mail</LinkTitle>
                    <LinkItem href="mailto:jmibarra86@gmail.com">jmibarra86@gmail.com</LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialContainer>
                <SocialMedia/>
            </SocialContainer>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
