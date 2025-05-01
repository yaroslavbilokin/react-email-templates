import { Section, Text } from '@react-email/components';
import * as React from 'react';

interface FooterProps {
  websiteUrl: string;
  linkedinUrl: string;
  privacyPolicyUrl: string;
  email: string;
  phoneNumber: string;
}

export const Footer = ({
  websiteUrl,
  linkedinUrl,
  privacyPolicyUrl,
  email,
  phoneNumber,
}: FooterProps) => {
  return (
    <Section style={footer}>
      <Section style={titleSection}>
        <Text>Adlyse Digital Marketing</Text>
      </Section>
      <Section style={contactsSection}>
        <Text style={contacts}>
          {email} • {phoneNumber}
        </Text>
      </Section>
      <Section style={urlsSection}>
        <Text>
          <a target="_blank" href={websiteUrl} style={link}>
            Website
          </a>{' '}
          •{' '}
          <a target="_blank" href={linkedinUrl} style={link}>
            LinkedIn
          </a>{' '}
          •{' '}
          <a target="_blank" href={privacyPolicyUrl} style={link}>
            Privacy Policy
          </a>
        </Text>
      </Section>
    </Section>
  );
};

export default Footer;

const urlsSection = {
  margin: '0 auto',
  width: 'max-content',
};

const titleSection = {
  width: 'max-content',
  margin: '0 auto',
  color: '#444',
  fontWeight: 700,
  fontSize: '15px',
};

const contactsSection = {
  width: 'max-content',
  margin: '0 auto',
};

const contacts = {
  margin: 0,
};

const footer = {
  backgroundColor: '#f8f9fa',
  color: '#757575',
  padding: '25px',
  fontSize: '13px',
  borderTop: '1px solid #eaeaea',
};

const link = {
  color: '#ff6c35',
  textDecoration: 'none',
};
