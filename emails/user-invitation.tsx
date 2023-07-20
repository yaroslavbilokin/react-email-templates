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
  const inviteLink = "{{inviteUrl}}";

  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Roboto+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <style type="text/css">
          {`@media only screen and (max-width: 600px) {
          .container {padding: 40px 24px!important;}
          .title {margin: 24px 0 0!important;}
          .main-content {padding: 56px 0!important;}
          .cta-button {margin-top: 56px!important;}
          }`}
        </style>
      </Head>
      <Preview>You have been invited to Beagle</Preview>
      <Body style={main}>
        <Container style={container} className="container">
          <Section>
            <Img
              src="http://cdn.mcauto-images-production.sendgrid.net/aa869b07e6579d73/e7e35049-6510-4bd9-a430-820ebb6b8705/153x50.png"
              width="150"
              height="50"
              alt="Beagle"
            />
            <Text style={title} className="title">
              Join your team on Beagle
            </Text>
            <Section style={mainContent} className="main-content">
              <Text style={paragraph}>
                Hi there,
                <br />
                {userName}{" "}
                <Link style={email} href={`mailto:${userWorkEmail}`}>
                  {userWorkEmail}
                </Link>{" "}
                has invited you to <Link style={brandText}>Beagle</Link>. Accept
                the invitation now and let's work together on this legal case!
              </Text>
              <Button
                pX={24}
                pY={16}
                style={button}
                href={inviteLink}
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
  margin: "40px 20px 0 0",
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

const brandText = {
  color: "#696BFF",
  fontFamily: "Roboto Mono, Courier, sans-serif",
  fontSize: "16px",
  fontWeight: 700,
  lineHeight: "24px",
};

const email = {
  color: "#434355!important",
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
