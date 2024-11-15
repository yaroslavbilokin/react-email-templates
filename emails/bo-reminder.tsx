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

export const BoReminder = () => {
    const inviteLink = "{{inviteUrl}}";
    const reportName = "{{reportName}}";
    const reportDeadline = "{{reportDeadline}}";

    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <style type="text/css">
                    {`@media only screen and (max-width: 600px) {
          .container {padding: 40px 24px!important;}
          .title {margin: 24px 0 0!important;}
          .main-content {padding: 56px 0!important;}
          .cta-button {margin-top: 20px!important;}
          }`}
                </style>
            </Head>
            <Preview>[Reminder] Please submit the report</Preview>
            <Body style={main}>
                <Container style={container} className="container">
                    <Section>
                        <Img
                            src="http://cdn.mcauto-images-production.sendgrid.net/2f5815612542c722/6b99b2d6-3ce5-48e6-afe7-5086fb09d722/3171x2248.png"
                            width="210"
                            height="150"
                            alt="FastFileAi"
                            style={logoStyle}
                        />
                        <Section style={mainContent} className="main-content">
                            <Text style={paragraph}>
                                Hi there,
                                <br />
                                just a friendly reminder about the upcoming deadline for submitting your data for the
                                "{reportName}" report as a Beneficial Owner.
                            </Text>

                            <Text style={deadlineParagraph}>The deadline is: {reportDeadline}</Text>

                            <Text style={paragraph}>
                                Please proceed to provide your personal data.
                            </Text>
                        </Section>

                        <Section style={buttonSection}>
                            <Button
                                pX={24}
                                pY={16}
                                style={button}
                                href={inviteLink}
                                className="cta-button"
                            >
                                Proceed to report
                            </Button>
                        </Section>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default BoReminder;

const buttonSection = {
    margin: '0 auto',
    maxWidth: '200px'
}

const main = {
    backgroundColor: "#ffffff",
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
    margin: 0,
};

const container = {
    backgroundColor: "#ffffff",
    padding: "40px 80px",
    maxWidth: "640px",
};

const logoStyle = {
    margin: '0 auto'
}

const mainContent = {
    padding: "30px 0",
};

const paragraph = {
    color: "#434355",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    textAlign: "left" as const,
};

const deadlineParagraph = {
    color: "#434355",
    fontSize: "16px",
    fontWeight: 'bold',
    lineHeight: "24px",
    textAlign: "left" as const,
}

const email = {
    color: "#434355!important",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
    textDecoration: "underline",
    cursor: "pointer",
};

const button = {
    borderRadius: "16px",
    background: "#5429FF",
    margin: '0 auto',
    color: "#FFF",
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "24px",
};
