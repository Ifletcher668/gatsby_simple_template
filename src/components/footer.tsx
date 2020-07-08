import React from 'react';
import Socials from '../constants/socialLinks';

const Footer: React.FC<IProps> = (props: IProps) => {
    return (
        <footer>
            <h5>
                Site Template by Isiah Fletcher <span> © {new Date().getFullYear()}</span>
            </h5>
            <Socials />
        </footer>
    );
};

export default Footer;
