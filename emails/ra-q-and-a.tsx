import { Button, Column, Img, Row, Section, Text } from "@react-email/components";
import RaLayout, { colors, FRONTEND_URL } from "./ra-layout";
import React from "react";

const name = "John Smith";
const email = "john.smith@example.com";
const message =
  "We work with over 80,000 livestreamers, and had documented over 200 testimonials through a clunky form and a giant spreadsheet that we then had to make graphics of. Senja has allowed us to streamline the entire process, generating web and image-based testimonials we can use across channels.";
const date = new Date().toLocaleDateString("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
});
const btnIconUrl = `${FRONTEND_URL}/images/email-button-icon.png`;

const titleStyle: React.CSSProperties = {
  fontSize: "37px",
  fontWeight: 700,
  lineHeight: "36px",
  margin: 0,
  fontFamily: "industry, sans-serif",
  padding: "0 20px",
  color: colors.textBlackPrimary,
};

const messageStyle: React.CSSProperties = {
  margin: "24px 0 0 0",
  padding: "0 20px",
  fontSize: "14px",
  fontFamily: "graphik, sans-serif",
  fontWeight: 400,
  color: colors.textBlackPrimary,
};

const dateStyle: React.CSSProperties = {
  margin: "0 0 28px 0",
  padding: "0 20px",
  color: colors.textBlackPrimary,
  fontFamily: "graphik, sans-serif",
  fontWeight: 700,
  fontSize: "16px",
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: colors.buttonBackgroundPrimary,
  borderRadius: "8px",
  width: "100%",
  cursor: "pointer",    
};

const buttonContainerStyle: React.CSSProperties = {
  padding: "28px 20px",
};

const buttonTitleStyle: React.CSSProperties = {
  margin: 0,
  color: colors.textBlackPrimary,
  fontSize: "20px",
  fontWeight: 700,
  fontFamily: "graphik, sans-serif",
};

const nameStyle: React.CSSProperties = {
  margin: "24px 0 0 0",
  padding: "0 20px",
  fontSize: "14px",
  fontFamily: "graphik, sans-serif",
  fontWeight: 400,
  color: colors.textBlackPrimary,
  lineHeight: "16px",
};

const emailStyle: React.CSSProperties = {
  margin: "0 0 80px 0",
  padding: "0 20px",
  fontSize: "14px",
  fontFamily: "graphik, sans-serif",
  fontWeight: 400,
  color: colors.textBlackPrimary,
  lineHeight: "16px",
};

const dividerStyle: React.CSSProperties = {
  borderTop: "1px solid #E0E0E0",
  margin: "12px 20px",
};

const contentStyle: React.CSSProperties = {
  padding: "32px 8px 9px 8px",
};

const btnIconStyle: React.CSSProperties = {
  width: "44px",
  height: "44px",
  marginRight: "16px",
};

const additionalFooterStyle: React.CSSProperties = {
  height: "46px",
  padding: 0
};

const additionalFooter = (
  <Section className="additional-footer" style={additionalFooterStyle} />
);

const content = (
  <>
    <style type="text/css">
      {`
        @media only screen and (max-width: 600px) {
          .title {
            font-size: 28px !important;
            line-height: 24px !important;
          }

          .message {
            margin-top: 20px !important;
          }

          .name {
            margin-top: 20px !important;
          }

          .email {
            margin-bottom: 45px !important;
          }

          .date {
            margin-bottom: 40px !important;
          }

          .button-container {
            padding: 20px 12px !important;
          }

          .button-title {
            font-size: 18px !important;
          }

          .additional-footer {
            height: 52px !important;
          }
        }
      `}
    </style>
    <Section style={contentStyle}>
      <Text className="title" style={titleStyle}>{name.toUpperCase()} IS LOOKING<br />FOR HELP</Text>
      <Text className="message" style={messageStyle}>"{message}"</Text>
      <Text className="name" style={nameStyle}>{name},</Text>
      <Text className="email" style={emailStyle}>{email}</Text>
      <Section style={dividerStyle} />
      <Text className="date" style={dateStyle}>{date}</Text>
      <Section>
        <Button style={buttonStyle} href={`mailto:${email}`}>
          <Section className="button-container" style={buttonContainerStyle}>
            <Row>
              <Column>
                <Img style={btnIconStyle} src={btnIconUrl} alt="arrow-right" />
              </Column>
              <Column>
                <Text className="button-title" style={buttonTitleStyle}>Start answering</Text>
              </Column>
            </Row>
          </Section>
        </Button>
      </Section>
    </Section>
  </>
);

export const RaQAndA = () => {
  return <RaLayout children={content} additionalFooter={additionalFooter} />;
};

export default RaQAndA;