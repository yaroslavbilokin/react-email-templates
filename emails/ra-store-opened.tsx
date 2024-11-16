import { Button, Column, Container, Img, Row, Section, Text } from "@react-email/components";
import RaLayout, { colors, FRONTEND_URL } from "./ra-layout";
import React from "react";

const contentStyle: React.CSSProperties = {
  padding: "4px 4px 8px 4px",
};

const additionalFooterStyle: React.CSSProperties = {
  height: "46px",
  padding: 0,
};

const headingImageStyle: React.CSSProperties = {
  width: "100%",
  height: "132px",
  objectFit: "cover",
  objectPosition: "top",
  borderRadius: "8px",
  marginBottom: "36px",
};

const titleStyle: React.CSSProperties = {
  fontSize: "37px",
  lineHeight: "36px",
  fontWeight: "700",
  margin: "0 28px 24px 28px",
  color: colors.textBlackPrimary,
  textTransform: "uppercase",
  fontFamily: "industry, sans-serif",
};

const shopDescriptionStyle: React.CSSProperties = {
  fontSize: "14px",
  lineHeight: "16px",
  margin: "0 28px 60px 28px",
  color: colors.textBlackPrimary,
  fontFamily: "graphik, sans-serif",
};

const shopNameStyle: React.CSSProperties = {};

const lastDayContainerStyle: React.CSSProperties = {
  borderTop: `1px solid ${colors.borderColor}`,
  width: "calc(100% - 56px)",
  marginBottom: "32px",
};

const lastDayTextStyle: React.CSSProperties = {
  margin: 0,
  fontFamily: "graphik, sans-serif",
  fontSize: "16px",
  lineHeight: "20px",
  color: colors.textBlackPrimary,
  fontWeight: 500,
  padding: "24px 0 15px 0",
};

const lastDayDateStyle: React.CSSProperties = {
  fontFamily: "graphik, sans-serif",
  color: colors.textBlackPrimary,
  margin: 0,
  fontWeight: 700,
  fontSize: "28px",
  lineHeight: "24px",
  marginLeft: "48px",
  padding: "24px 0 15px 0",
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

const btnIconStyle: React.CSSProperties = {
  width: "44px",
  height: "44px",
  marginRight: "16px",
};

const additionalFooterTitleStyle: React.CSSProperties = {
  margin: "48px 32px 20px 32px",
  color: colors.textBlackPrimary,
  fontSize: "16px",
  lineHeight: "20px",
  fontWeight: 500,
};

const markIconStyle: React.CSSProperties = {
  width: "12px",
  height: "12px",
  margin: 0,
};

const additionalFooterTextStyle: React.CSSProperties = {
  margin: "0 0 0 8px",
  width: "fit-content",
};

const additionalFooterRowStyle: React.CSSProperties = {
  width: "100%",
  paddingLeft: "32px",
};

const testDate = new Date();

export const RaStoreOpened = () => {
  const shopName = "Casco Bay Mariners (ME) Official Shop";
  const lastDay = testDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const shopLink = "https://www.cascombaymariners.com/";
  const shopHeadingImageUrl =
    "https://d25irfy3bzb7bt.cloudfront.net/team-store-heading-media/royalty-team-store-image.webp";
  const btnIconUrl = `${FRONTEND_URL}/images/email-button-icon.png`;
  const markIconUrl = `${FRONTEND_URL}/images/email-mark-icon.png`;

  const additionalFooter = (
    <>
      <style type="text/css">
        {`
          @media only screen and (max-width: 600px) {
            .additional-footer-title {
              margin: 64px 20px 24px 20px !important;
            }

            .additional-footer-row {
              padding-left: 20px !important;
            }
          }
        `}
      </style>

      <Section style={additionalFooterStyle}>
        <Text className="additional-footer-title" style={additionalFooterTitleStyle}>
          Don't miss your chance to order official gear for your favorite team!
        </Text>
      </Section>

      <Container style={{ marginBottom: "60px" }}>
        <Row className="additional-footer-row" style={additionalFooterRowStyle}>
          <Column style={markIconStyle}>
            <Img style={markIconStyle} src={markIconUrl} alt="mark" />
          </Column>
          <Column>
            <Text style={additionalFooterTextStyle}>
              Easy 30-Day returns & exchanges accepted
            </Text>
          </Column>
        </Row>
        <Row className="additional-footer-row" style={additionalFooterRowStyle}>
          <Column style={markIconStyle}>
            <Img style={markIconStyle} src={markIconUrl} alt="mark" />
          </Column>
          <Column>
            <Text style={additionalFooterTextStyle}>
              Shipping calculated at checkout.
            </Text>
          </Column>
        </Row>
        <Row className="additional-footer-row" style={additionalFooterRowStyle}>
          <Column style={markIconStyle}>
            <Img style={markIconStyle} src={markIconUrl} alt="mark" />
          </Column>
          <Column>
            <Text style={additionalFooterTextStyle}>
              Your order will be packaged perfectly and sent on their way!
            </Text>
          </Column>
        </Row>
        <Row className="additional-footer-row" style={additionalFooterRowStyle}>
          <Column style={markIconStyle}>
            <Img style={markIconStyle} src={markIconUrl} alt="mark" />
          </Column>
          <Column>
            <Text style={additionalFooterTextStyle}>
              You will receive an email or text message when your order hit your doorstep.
            </Text>
          </Column>
        </Row>
      </Container>
    </>
  );

  const content = (
    <>
      <style type="text/css">
        {`
          @media only screen and (max-width: 600px) {
            .button-container {
              padding: 20px 12px !important;
            }

            .button-title {
              font-size: 18px !important;
            }   

            .additional-footer {
              height: 52px !important;
            }

            .shop-heading-image {
              height: 178px !important;
            }

            .shop-name {
              margin: 24px 16px !important;
              font-size: 28px !important;
              line-height: 24px !important;
            }

            .shop-description {
              margin: 20px 16px 28px 16px !important;
            }

            .last-day-text {
              font-size: 14px !important;
              line-height: 16px !important;
              padding: 17px 0 32px 0 !important;
              max-width: 100px !important;
            }

            .last-day-date {
              font-size: 28px !important;
              line-height: 24px !important;
              margin-left: 16px !important;
            }

            .last-day-container {
              width: calc(100% - 32px) !important;
            }
          }
        `}
      </style>
      <Section style={contentStyle}>
        <Img
          className="shop-heading-image"
          style={headingImageStyle}
          src={shopHeadingImageUrl}
          alt={shopName}
        />
        <Text className="shop-name" style={titleStyle}>
          {shopName} is now open!
        </Text>
        <Text className="shop-description" style={shopDescriptionStyle}>
          Hey! We're excited to announce that the official <b>{shopName}</b> is now open! Get ready to
          grab your exclusive team gear, available for a limited time only.
        </Text>
        <Row style={lastDayContainerStyle} className="last-day-container">
          <Column style={{ width: "50%" }}>
            <Text className="last-day-text" style={lastDayTextStyle}>
              Last day for orders:
            </Text>
          </Column>
          <Column
            style={{
              width: "50%",
              borderLeft: `1px solid ${colors.borderColor}`,
            }}
          >
            <Text className="last-day-date" style={lastDayDateStyle}>
              {lastDay}
            </Text>
          </Column>
        </Row>
        <Section>
          <Button style={buttonStyle} href={shopLink}>
            <Section className="button-container" style={buttonContainerStyle}>
              <Row>
                <Column>
                  <Img style={btnIconStyle} src={btnIconUrl} alt="arrow-right" />
                </Column>
                <Column>
                  <Text className="button-title" style={buttonTitleStyle}>
                    Go to the shop
                  </Text>
                </Column>
              </Row>
            </Section>
          </Button>
        </Section>
      </Section>
    </>
  );

  return <RaLayout children={content} additionalFooter={additionalFooter} />;
};

export default RaStoreOpened;
