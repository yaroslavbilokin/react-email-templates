import * as React from "react";
import { Section } from "@react-email/section";
import { Text } from "@react-email/text";
import { Link } from "@react-email/link";
import { Hr } from "@react-email/components";

const Footer = () => {
  const helpLink = "https://muzzle.vercel.app/";
  const termsLink = "https://muzzle.vercel.app/";
  const unsubscribeLink = "https://muzzle.vercel.app/";

  return (
    <Section>
      <Hr style={hr} />
      <Text style={heading}>Beagle</Text>
      <Text style={subheading}>Cruelty–free eDiscovery</Text>
      <Text style={details}>
        Discover Beagle
        <br />
        New York, USA
        <br />
        ©2022 All rights reserved.
      </Text>
      <Text>
        <Link style={navLink} href={helpLink}>
          Help
        </Link>
        <Link style={dot}></Link>
        <Link style={navLink} href={termsLink}>
          Terms and Privacy
        </Link>
        <Link style={dot}></Link>
        <Link style={navLink} href={unsubscribeLink}>
          Unsubscribe
        </Link>
      </Text>
    </Section>
  );
};

export default Footer;

const hr = {
  borderColor: "#E3E3E6",
  margin: "0 0 16px",
};

const heading = {
  color: "#14142B",
  fontFamily: "Archivo Black, Arial Black, sans-serif",
  fontSize: "20px",
  lineHeight: "24px",
  fontWeight: 400,
  letterSpacing: "-0.2px",
  margin: "0 0 4px",
};

const subheading = {
  color: "#14142B",
  fontFamily: "Roboto Mono, Courier, sans-serif",
  fontSize: "12px",
  lineHeight: "14.4px",
  fontWeight: 500,
};

const details = {
  color: "#80808D",
  fontFamily: "Roboto Mono, Courier, sans-serif",
  fontSize: "12px",
  lineHeight: "20px",
  fontWeight: 400,
  letterSpacing: "-0.2px",
  margin: "16px 0",
};

const navLink = {
  color: "#80808D",
  fontFamily: "Roboto Mono, Courier, sans-serif",
  fontSize: "10px",
  lineHeight: "16px",
  fontWeight: 400,
  textDecoration: "underline",
  cursor: "pointer",
};

const dot = {
  display: "inline-block",
  margin: "0 8px",
  width: "4px",
  height: "4px",
  borderRadius: "20px",
  backgroundColor: "#E3E3E6",
};
