import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
        <LinkList>
            <LinkColumn>
                <LinkTitle>Mail</LinkTitle>
                <LinkItem href="mailto:jmibarra86@gmail.com">jmibarra86@gmail.com</LinkItem>
            </LinkColumn>
        </LinkList>
        <SocialIconsContainer>
            <CompanyContainer>
                <Slogan>Test slogan</Slogan>
            </CompanyContainer>
            <SocialContainer>
                <SocialIcons href="https://www.linkedin.com/in/juan-manuel-ibarra-activity/">
                    <AiFillLinkedin size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://github.com/jmibarra/">
                    <AiFillGithub size="3rem" />
                </SocialIcons>
                <SocialIcons href="https://twitter.com/jibarradev">
                    <AiFillTwitterSquare size="3rem" />
                </SocialIcons>
            </SocialContainer>
        </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
