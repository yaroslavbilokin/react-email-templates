import * as React from "react";
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Row,
  Section,
  Text,
  Link,
} from "@react-email/components";

export const FRONTEND_URL = "https://royalty-apparel-fe-snowy.vercel.app";

const Font = ({ 
    webFont,
    fontStyle = 'normal',
    fontFamily,
    fontWeight = 400,
    fallbackFontFamily,
}) => {
    const src = webFont ? `src: url(${webFont.url}) format(${webFont.format});` : "";

    return (
        <style>
        {
            `
            @font-face {
                font-style: ${fontStyle};
                font-family: ${fontFamily};
                font-weight: ${fontWeight};
                mso-font-alt: ${Array.isArray(fallbackFontFamily) ? fallbackFontFamily[0] : fallbackFontFamily};
                ${src}
            }

            * {
                font-family: ${fontFamily}, ${Array.isArray(fallbackFontFamily) ? fallbackFontFamily.join(", ") : fallbackFontFamily};
            }
            `
        }
        </style>
    )
}

export const colors = {
  surfaceLightPrimary: "#EDF0F7",
  white: "#FFFFFF",
  textBlackPrimary: "#070707",
  buttonBackgroundPrimary: "#BEFF00"
};

const bodyStyle = {
  backgroundColor: colors.surfaceLightPrimary,
  width: "100%",
  maxWidth: "600px",
  margin: "0 auto",
  fontFamily: "industry, sans-serif",
} as React.CSSProperties;

const containerStyle = {
    width: "100%",
  } as React.CSSProperties;

const headerContainerStyle: React.CSSProperties = {
  width: "100%",
  margin: "25px 0",
};

const mobileHeaderContainerStyle: React.CSSProperties = {
  maxWidth: "200px",
  margin: "20px",
};

const logoIconStyle: React.CSSProperties = {
  width: "24px",
  height: "24px",
  margin: "0 auto",
  marginBottom: "10px",
};

const mobileLogoIconStyle: React.CSSProperties = {
  width: "32px",
  height: "32px",
  margin: "0",
};

const mobileLogoIconContainerStyle: React.CSSProperties = {
  width: "44px",
};

const logoTextStyle: React.CSSProperties = {
  width: "124px",
  margin: "0 auto",
};

const mobileLogoTextStyle: React.CSSProperties = {
  width: "147px",
  margin: "0",
};

const childrenStyle: React.CSSProperties = {
  backgroundColor: colors.white,
  borderRadius: "12px",
  width: "100№",
  margin: "0 4px",
};

const footerContainerStyle: React.CSSProperties = {
  padding: "16px 32px 32px 32px",
};

const mobileFooterContainerStyle: React.CSSProperties = {
  padding: "20px",
};

const socialLinksSectionStyle: React.CSSProperties = {
  marginTop: "20px",
  maxWidth: "220px",
};

const mobileSocialLinksSectionStyle: React.CSSProperties = {
  maxWidth: "225px",
  margin: "0",
};

const addressTextStyle: React.CSSProperties = {
  fontFamily: "industry, sans-serif",
  margin: 0,
  fontSize: "14px",
  lineHeight: "1.2",
  fontWeight: 500,
  color: colors.textBlackPrimary,
  opacity: 0.6,
};

const mobileAddressTextContainerStyle: React.CSSProperties = {
  fontFamily: "industry, sans-serif",
  margin: 0,
  fontSize: "14px",
  lineHeight: "1.2",
  fontWeight: 500,
  color: colors.textBlackPrimary,
};

const mobileAddressTextStyle: React.CSSProperties = {
  marginBottom: "25px",
};

const test: React.CSSProperties = {
  display: "inline-block",
};

const socialImageLinkStyle: React.CSSProperties = {
  width: "24px",
  height: "24px",
  margin: "0 8px",
  cursor: "pointer",
};

const mobileSocialImageLinkStyle: React.CSSProperties = {
  width: "24px",
  height: "24px",
  margin: "0 8px",
  cursor: "pointer",
};

const mobileSocialImageLinkContainerStyle: React.CSSProperties = {
  width: "38px",
  height: "38px",
  backgroundColor: colors.white,
  borderRadius: "100%",
  cursor: "pointer",
};

export const RaLayout = ({ children, additionalFooter }: { children: React.ReactNode; additionalFooter?: React.ReactNode }) => {
  const logoIconUrl = `${FRONTEND_URL}/images/email-logo-icon.png`;
  const logoTextUrl = `${FRONTEND_URL}/images/email-logo-text.png`;
  const facebookIconUrl = `${FRONTEND_URL}/images/facebook.png`;
  const instagramIconUrl = `${FRONTEND_URL}/images/inst.png`;
  const xIconUrl = `${FRONTEND_URL}/images/x.png`;
  const tiktokIconUrl = `${FRONTEND_URL}/images/tiktok.png`;
  const youtubeIconUrl = `${FRONTEND_URL}/images/youtube.png`;
  const youtubeUrl = "https://www.youtube.com/@royaltyteamgear";
  const instagramUrl = "https://www.instagram.com/royaltyteamgear";
  const tiktokUrl = "https://www.tiktok.com/@royaltyteamgear";  
  const xUrl = "https://x.com/royaltyteamgear";
  const facebookUrl = "https://www.facebook.com/royaltyteamgear";

  return (
    <Html>
      <Head>
        <style type="text/css">
          {`
          @media only screen and (min-width: 600px) {
            .mobile-header {display: none !important;}
            .mobile-footer-container {display: none !important;}
          }

          @media only screen and (max-width: 600px) {
            .header-container {display: none;}
            .footer-container {display: none;}
            .children-container {width: calc(100% - 8px);}
          }
          `}
        </style>
        <Font
          fontFamily="industry"
          fallbackFontFamily="Verdana"
          webFont={{
            url: `${FRONTEND_URL}/fonts/industry/industry-bold.woff`,
            format: 'woff',
          }}
          fontWeight={700}
          fontStyle="normal"
        />
        <Font
          fontFamily="graphik"
          fallbackFontFamily="Verdana"
          webFont={{
            url: `${FRONTEND_URL}/fonts/graphik/graphik-regular.woff`,
            format: 'woff',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="graphik"
          fallbackFontFamily="Verdana"
          webFont={{
            url: `${FRONTEND_URL}/fonts/graphik/graphik-medium.woff`,
            format: 'woff',
          }}
          fontWeight={500}
          fontStyle="normal"
        />
      </Head>
      <Body style={bodyStyle}>
        <Container style={containerStyle}>
          <Section style={headerContainerStyle} className="header-container">
            <Img
              style={logoIconStyle}
              src={logoIconUrl}
              alt="logo icon"
              className="logo-icon"
            />
            <Img
              style={logoTextStyle}
              src={logoTextUrl}
              alt="logo text"
              className="logo-text"
            />
          </Section>

          <Row style={mobileHeaderContainerStyle} className="mobile-header">
            <Column style={mobileLogoIconContainerStyle}>
              <Img
                style={mobileLogoIconStyle}
                src={logoIconUrl}
                alt="logo icon"
                className="logo-icon"
              />
            </Column>
            <Column>
              <Img
                style={mobileLogoTextStyle}
                src={logoTextUrl}
                alt="logo text"
                className="logo-text"
              />
            </Column>
          </Row>

          {children && <Section style={childrenStyle} className="children-container">
              {children}
            </Section>
          }
        </Container>

        {/* TODO: move to props */}
        {additionalFooter && (
          <Section>
            {additionalFooter}
          </Section>
        )}

        {/* Desktop Footer */}
        <Container style={footerContainerStyle} className="footer-container">
          <Section >
            <Row>
              <Column>
                <Text style={addressTextStyle}>© 2024 Royaltyteamgear.</Text>
                <Text style={addressTextStyle}>All rights reserved.</Text>
                <Text style={addressTextStyle}>
                  3040 E 12th St, Los Angeles, CA 90023
                </Text>
              </Column>

              <Column>
                <Row style={socialLinksSectionStyle}>
                  <Column>
                    <Link href={facebookUrl} target="_blank">
                      <Img
                        style={socialImageLinkStyle}
                        src={facebookIconUrl}
                        alt="facebook"
                      />
                    </Link>
                  </Column>

                  <Column>
                    <Link href={instagramUrl} target="_blank">
                      <Img
                        style={socialImageLinkStyle}
                        src={instagramIconUrl}
                        alt="instagram"
                      />
                    </Link>
                  </Column>

                  <Column>
                    <Link href={youtubeUrl} target="_blank">
                      <Img
                        style={socialImageLinkStyle}
                        src={youtubeIconUrl}
                        alt="youtube"
                      />
                    </Link>
                  </Column>

                  <Column>
                    <Link href={tiktokUrl} target="_blank">
                      <Img
                        style={socialImageLinkStyle}
                        src={tiktokIconUrl}
                        alt="tiktok"
                      />
                    </Link>
                  </Column>

                  <Column>
                    <Link href={xUrl} target="_blank">
                      <Img
                        style={socialImageLinkStyle}
                        src={xIconUrl}
                        alt="x"
                      />
                    </Link>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>
        </Container>

        {/* Mobile Footer */}
        <Container style={mobileFooterContainerStyle} className="mobile-footer-container">
          <Section >
                <Section style={mobileAddressTextStyle}>
                <Text style={mobileAddressTextContainerStyle}>© 2024 Royaltyteamgear.</Text>
                <Text style={mobileAddressTextContainerStyle}>All rights reserved.</Text>
                <Text style={mobileAddressTextContainerStyle}>
                  3040 E 12th St, Los Angeles, CA 90023
                </Text>
                </Section>


                <Row style={mobileSocialLinksSectionStyle}>
                  <Column>
                    <Link href={facebookUrl} target="_blank">
                      <Section style={mobileSocialImageLinkContainerStyle}>
                        <Img
                          style={mobileSocialImageLinkStyle}
                          src={facebookIconUrl}
                          alt="facebook"
                        />
                      </Section>
                    </Link>
                  </Column>

                  <Column>
                    <Link href={instagramUrl} target="_blank">
                      <Section style={mobileSocialImageLinkContainerStyle}>
                        <Img
                          style={mobileSocialImageLinkStyle}
                          src={instagramIconUrl}
                          alt="instagram"
                        />
                      </Section>
                    </Link>
                  </Column>

                  <Column>
                    <Link href={youtubeUrl} target="_blank">
                      <Section style={mobileSocialImageLinkContainerStyle}>
                        <Img
                          style={mobileSocialImageLinkStyle}
                          src={youtubeIconUrl}
                          alt="youtube"
                        />
                      </Section>
                    </Link>
                  </Column>

                  <Column>
                    <Link href={tiktokUrl} target="_blank">
                      <Section style={mobileSocialImageLinkContainerStyle}>
                        <Img
                          style={mobileSocialImageLinkStyle}
                          src={tiktokIconUrl}
                          alt="tiktok"
                        />
                      </Section>
                    </Link>
                  </Column>

                  <Column>
                    <Link href={xUrl} target="_blank">
                      <Section style={mobileSocialImageLinkContainerStyle}>
                        <Img
                          style={mobileSocialImageLinkStyle}
                          src={xIconUrl}
                          alt="x"
                        />
                      </Section>
                    </Link>
                  </Column>
                </Row>
            </Section>
          </Container>
      </Body>
    </Html>
  );
};

export default RaLayout;
