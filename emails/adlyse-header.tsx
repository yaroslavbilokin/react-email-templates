import {
    Img,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';

interface HeaderProps {
    documentTypeTitle: string;
    date: string;
}

export const Header = ({date, documentTypeTitle}: HeaderProps) => {
    return (
        <Section style={header}>
            <Section style={logoSection}>
                <Img
                    src="https://magic.adlyse.com/adlyse-logo-with-text.png"
                    width="200"
                    alt="AdLyse logo"
                    style={logo}
                />
            </Section>
            <Section>
                <Text style={subtitle}>{documentTypeTitle} • {date}</Text>
            </Section>
        </Section>
    );
};

export default Header;

const logoSection = {

};

const header = {
    backgroundColor: '#ffffff',
    webkitTextFillColor: 'transparent',
    padding: '25px 30px',
    borderBottom: '1px solid rgba(255, 108, 53, 0.5)',
};

const logo = {
    margin: '15px auto'
};

const subtitle = {
    // color: '#fad370',
    // width: '100%',
    fontWeight: '500',
    fontSize: '15px',
    maxWidth: 'max-content',
    margin: '0 auto',
};
