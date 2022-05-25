import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMediumSquare, AiFillTwitterSquare } from 'react-icons/ai';
import { SocialIcons } from './SocialMediaStyles';

const SocialMedia = () =>  (
    <>
        <SocialIcons href="https://www.linkedin.com/in/juan-manuel-ibarra-activity/" target="_blank">
            <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://github.com/jmibarra/" target="_blank">
            <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/jibarradev" target="_blank">
            <AiFillTwitterSquare size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://jmibarra86.medium.com/" target="_blank">
            <AiFillMediumSquare size="3rem" />
        </SocialIcons>
    </>
);

export default SocialMedia;
