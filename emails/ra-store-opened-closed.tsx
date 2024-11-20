import { Button, Column, Container, Img, Row, Section, Text } from "@react-email/components";
import RaLayout, { colors, FRONTEND_URL } from "./ra-layout";
import React from "react";

const contentStyle: React.CSSProperties = {
  padding: "4px 4px 8px 4px",
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
  width: "calc(100% - 8px)",
  cursor: "pointer",
  margin: "0 4px",
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

const additionalFooterTextStyle: React.CSSProperties = {
  margin: "0 0 0 8px",
  maxWidth: "268px",
  width: "100%",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "20px",
  color: colors.textBlackPrimary,
};

const additionalFooterColumnStyle: React.CSSProperties = {
  width: "50%",
};

const additionalFooterRowStyle: React.CSSProperties = {
  width: "100%",
  padding: "64px 32px",
};

const emailLinkIconStyle: React.CSSProperties = {
  width: "24px",
  height: "24px",
};

const emailLinkIconContainerStyle: React.CSSProperties = {
  margin: 0,
  width: "24px",
  height: "24px",
};

const emailLinkTextContainerStyle: React.CSSProperties = {
  margin: 0,
};

const emailLinkTextStyle: React.CSSProperties = {
  margin: "0 0 0 8px",
  fontSize: "14px",
  lineHeight: "16px",
  fontWeight: 500,
  color: colors.textBlackPrimary,
  textDecoration: "underline",
  textUnderlineOffset: "3px",
};

const linksContainerStyle: React.CSSProperties = {
  width: "100%",
  margin: 0,
};

const emailLinkRowStyle: React.CSSProperties = {
  cursor: "pointer",
  marginLeft: "56px",
};

const underlineContainerStyle: React.CSSProperties = {
  margin: "0 32px",
  width: "calc(100% - 64px)",
  borderTop: `1px solid ${colors.borderColor}`,
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "inherit",
};

const mobileAdditionalFooterContainerStyle: React.CSSProperties = {};

const testDate = new Date();

export const RaStoreOpened = () => {
  const shopName = "Casco Bay Mariners (ME) Official Shop";
  const startDate = testDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const endDate = testDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const shopLink = "https://www.cascombaymariners.com/";
  const shopHeadingImageUrl =
    "https://d25irfy3bzb7bt.cloudfront.net/team-store-heading-media/royalty-team-store-image.webp";
  const btnIconUrl = `${FRONTEND_URL}/images/email-button-icon.png`;
  const emailLinkIconUrl = `${FRONTEND_URL}/images/email-link-icon.png`;
  const shippingPolicyUrl = "https://www.cascombaymariners.com/pages/shipping-policy";
  const refundPolicyUrl = "https://www.cascombaymariners.com/pages/refund-policy";

  const additionalFooter = (
    <>
      <style type="text/css">
        {`
          @media only screen and (max-width: 600px) {
            .desktop-additional-footer-row {
              display: none !important;
            }

            .additional-footer-text {
              width: 100% !important;
              max-width: calc(100% - 40px) !important;
              margin: 64px 20px 24px 20px !important;
            }

            .underline-container {
              display: none !important;
            }

            .mobile-additional-footer-links-row {
              margin-left: 20px !important;
            }
          }
        `}
      </style>
      {/* Desktop additional footer */}
      <Row style={additionalFooterRowStyle} className="desktop-additional-footer-row">
        <Column className="additional-footer-text-column" style={additionalFooterColumnStyle}>
          <Text className="additional-footer-text" style={additionalFooterTextStyle}>
            Although the store is now closed, we're excited for you to receive your gear soon!
          </Text>
        </Column>
        <Column style={additionalFooterColumnStyle}>
          <Container style={linksContainerStyle}>
            <Row style={{ ...emailLinkRowStyle, marginBottom: "16px" }}>
              <Column style={emailLinkIconContainerStyle}>
                <Img style={emailLinkIconStyle} src={emailLinkIconUrl} alt="arrow-right" />
              </Column>
              <Column style={emailLinkTextContainerStyle}>
                <a href={shippingPolicyUrl} style={linkStyle} target="_blank" rel="noopener noreferrer">
                  <Text style={emailLinkTextStyle}>Shipping Policy</Text>
                </a>
              </Column>
            </Row>

            <Row style={emailLinkRowStyle}>
              <Column style={emailLinkIconContainerStyle}>
                <Img style={emailLinkIconStyle} src={emailLinkIconUrl} alt="arrow-right" />
              </Column>
              <Column style={emailLinkTextContainerStyle}>
                <a href={refundPolicyUrl} style={linkStyle} target="_blank" rel="noopener noreferrer">
                  <Text style={emailLinkTextStyle}>Refund Policy</Text>
                </a>
              </Column>
            </Row>
          </Container>
        </Column>
      </Row>

      {/* Mobile additional footer */}
      <Container className="mobile-additional-footer-row" style={mobileAdditionalFooterContainerStyle}>
        <Text className="additional-footer-text" style={additionalFooterTextStyle}>
          Although the store is now closed, we're excited for you to receive your gear soon!
        </Text>
        <Row className="mobile-additional-footer-links-row" style={{ ...emailLinkRowStyle, marginBottom: "16px" }}>
          <Column style={emailLinkIconContainerStyle}>
            <Img style={emailLinkIconStyle} src={emailLinkIconUrl} alt="arrow-right" />
          </Column>
          <Column style={emailLinkTextContainerStyle}>
            <a href={shippingPolicyUrl} style={linkStyle} target="_blank" rel="noopener noreferrer">
              <Text style={emailLinkTextStyle}>Shipping Policy</Text>
            </a>
          </Column>
        </Row>

        <Row className="mobile-additional-footer-links-row" style={{ ...emailLinkRowStyle, marginBottom: "80px" }}>
          <Column style={emailLinkIconContainerStyle}>
            <Img style={emailLinkIconStyle} src={emailLinkIconUrl} alt="arrow-right" />
          </Column>
          <Column style={emailLinkTextContainerStyle}>
            <a href={refundPolicyUrl} style={linkStyle} target="_blank" rel="noopener noreferrer">
              <Text style={emailLinkTextStyle}>Refund Policy</Text>
            </a>
          </Column>
        </Row>
      </Container>

      {/* Underline */}
      <Container className="underline-container" style={underlineContainerStyle} />
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
          {shopName} is now closed
        </Text>
        <Text className="shop-description" style={shopDescriptionStyle}>
          Hey! Thank you for visiting the <b>{shopName}</b>! Our ordering period has now ended, but you can still track
          your orders online.
        </Text>
        <Row style={lastDayContainerStyle} className="last-day-container">
          <Column style={{ width: "50%" }}>
            <Text className="last-day-text" style={lastDayTextStyle}>
              Wait for delivery on:
            </Text>
          </Column>
          <Column
            style={{
              width: "50%",
              borderLeft: `1px solid ${colors.borderColor}`,
            }}
          >
            <Text className="last-day-date" style={lastDayDateStyle}>
              {startDate} - {endDate}
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
                    Track order
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
