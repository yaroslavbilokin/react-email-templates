import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export const StripeWelcomeEmail = () => {
  const userName = "{{name}}";
  const userWorkEmail = "{{workEmail}}";
  const joinLink = "https://muzzle.vercel.app/";
  const helpLink = "https://muzzle.vercel.app/";
  const termsLink = "https://muzzle.vercel.app/";
  const unsubscribeLink = "https://muzzle.vercel.app/";

  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Roboto+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Preview>You have been invited to Beagle</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Img
              src="http://cdn.mcauto-images-production.sendgrid.net/aa869b07e6579d73/e7e35049-6510-4bd9-a430-820ebb6b8705/153x50.png"
              width="150"
              height="50"
              alt="Beagle"
            />
            <Text style={title}>Join your team on Beagle</Text>
            <Section style={mainContent}>
              <Text style={paragraph}>
                Hi there,
                <br />
                {userName} <Link style={email}>{userWorkEmail}</Link> has
                invited you to{" "}
                <Link style={link} href={joinLink}>
                  Beagle
                </Link>
                . Accept the invitation now and let's work together on this
                legal case!
              </Text>
              <Section>
                <Button
                  pX={24}
                  pY={16}
                  style={button}
                  href={joinLink}
                  className="cta-button"
                >
                  Join {userName} on Beagle
                </Button>
              </Section>
            </Section>
            <Hr style={hr} />
            <Section style={footer}>
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
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default StripeWelcomeEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  padding: "40px 80px",
  maxWidth: "640px",
};

const title = {
  color: "#14142B",
  fontFamily: "Archivo Black, Arial Black, sans-serif",
  fontSize: "52px",
  fontWeight: 400,
  lineHeight: "64px",
  letterSpacing: "-2.6px",
  margin: "40px 0 0",
};

const mainContent = {
  padding: "60px 0",
};

const paragraph = {
  color: "#434355",
  fontFamily: "Roboto Mono, Courier, sans-serif",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "24px",
  textAlign: "left" as const,
};

const link = {
  color: "#696BFF",
  fontFamily: "Roboto Mono, Courier, sans-serif",
  fontSize: "16px",
  fontWeight: 700,
  lineHeight: "24px",
};

const email = {
  color: "#434355",
  fontFamily: "Roboto Mono, Courier, sans-serif",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "24px",
  textDecoration: "underline",
  cursor: "pointer",
};

const button = {
  borderRadius: "16px",
  background: "#696BFF",
  marginTop: "60px",
  color: "#FFF",
  fontFamily: "Archivo Black, Arial Black, sans-serif",
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "24px",
};

const hr = {
  borderColor: "#E3E3E6",
  marginBottom: "16px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};

const heading = {
  color: "#14142B",
  fontFamily: "Archivo Black, Arial Black, sans-serif",
  fontSize: "20px",
  lineHeight: "24px",
  fontWeight: 400,
  letterSpacing: "-0.2px",
  marginBottom: "4px",
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
