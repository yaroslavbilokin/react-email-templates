import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import Footer from "./Footer";

export const StripeWelcomeEmail = () => {
  const userName = "{{name}}";
  const userWorkEmail = "{{workEmail}}";
  const joinLink = "https://muzzle.vercel.app/";

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
          <Footer />
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
