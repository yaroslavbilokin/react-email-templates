import { Section, Text, Heading, Hr, Button } from '@react-email/components';
import * as React from 'react';
import { Header } from './adlyse-header';
import { Footer } from './adlyse-footer';
import { Layout } from './adlyse-layout';

const emailGreeting = 'Dear UniProAir Team,';
const introText = `We're excited to share the initial results from our digital marketing campaign that launched on May 27th. This first month has been focused on optimizing the campaign for higher performance, and we're already seeing positive trends.`;
const documentTypeTitle = 'Campaign Report';
const date = 'June 2025';
const heading = 'UniProAir Campaign Initial Results';

export enum ColorsPalette {
  primary = '#ff6c35',
  secondary = '#fad370',
}

export enum ContentType {
  heading = 'heading',
  text = 'text',
  metrics = 'metrics',
  button = 'button',
  basicBulletList = 'basicBulletList',
  noteBulletList = 'noteBulletList',
  divider = 'divider',
  signature = 'signature',
}

interface MetricItem {
  title: string;
  currentValue: number;
  originalValue?: number;
  valuePrefix?: string;
  showPercentageDiff?: boolean;
  isImproved?: boolean;
}

interface MetricsContent {
  type: ContentType.metrics;
  items: MetricItem[];
}

interface HeadingContent {
  type: ContentType.heading;
  content: string;
}

interface TextContent {
  type: ContentType.text;
  content: string;
}

interface ButtonContent {
  type: ContentType.button;
  content: string;
  href: string;
}

interface NoteBulletListContent {
  type: ContentType.noteBulletList;
  title: string;
  items: string[];
}

interface BasicBulletListContent {
  type: ContentType.basicBulletList;
  title: string;
  items: string[];
}

interface DividerContent {
  type: ContentType.divider;
}

interface SignatureContent {
  type: ContentType.signature;
  signOff: string;
  senderName: string;
}

type ContentSchemaItem =
  | TextContent
  | ButtonContent
  | HeadingContent
  | NoteBulletListContent
  | DividerContent
  | BasicBulletListContent
  | SignatureContent
  | MetricsContent;

const contentSchema: ContentSchemaItem[] = [
  {
    type: ContentType.heading,
    content: heading,
  },
  {
    type: ContentType.text,
    content: emailGreeting,
  },
  {
    type: ContentType.text,
    content: introText,
  },
  {
    type: ContentType.metrics,
    items: [
      {
        title: 'Current cost per click',
        currentValue: 9.6,
        originalValue: 10.8,
        valuePrefix: '$',
        showPercentageDiff: true,
        isImproved: true,
      },
      {
        title: 'Website visitors',
        currentValue: 74,
      },
      {
        title: 'Tracked phone calls',
        currentValue: 11,
      },
      {
        title: 'Ad impressions',
        currentValue: 2614,
      },
    ],
  },
  {
    type: ContentType.text,
    content:
      "We've made excellent progress in reducing your cost per click from $10.80 to $9.60 in just the first month. Our ultimate goal is to bring this down to $5.00 or lower, which will significantly improve your marketing ROI.",
  },
  {
    type: ContentType.text,
    content:
      "It's important to note that we've tracked 11 phone calls directly from our campaign, but this number may be higher. Currently, we don't have access to track calls originating from your website, so there could be additional leads we're unable to attribute to our efforts.",
  },
  {
    type: ContentType.noteBulletList,
    title: 'Next Steps for Campaign Optimization',
    items: [
      'Further reduce cost per click toward our $5.00 target',
      'Increase call volume and lead generation',
      'Improve ad targeting and messaging based on initial data',
    ],
  },
  {
    type: ContentType.divider,
  },
  {
    type: ContentType.basicBulletList,
    title: 'To maximize results, we need:',
    items: [
      'Access to your Google Analytics account',
      'Access to GoHighLevel once your new version is ready',
    ],
  },
  {
    type: ContentType.text,
    content:
      'These tools will allow us to better track conversions, optimize your campaign, and provide more comprehensive reporting on your marketing performance.',
  },
  {
    type: ContentType.text,
    content:
      "We're looking forward to continuing our partnership and driving even better results in the coming months as we focus on increasing call volume and reducing acquisition costs.",
  },
  {
    type: ContentType.button,
    content: 'Schedule a Results Review Call',
    href: '#',
  },
  {
    type: ContentType.text,
    content: 'Thank you for choosing Adlyse as your digital marketing partner.',
  },
  {
    type: ContentType.signature,
    signOff: 'Best regards,',
    senderName: 'The Adlyse Team',
  },
];

const formatNumber = (value: number) =>
  Number.isInteger(value) ? value.toString() : value.toFixed(2);

const generateContent = (contentSchema: ContentSchemaItem[]) => {
  return contentSchema.map((item, index) => {
    switch (item.type) {
      case ContentType.heading:
        return (
          <Heading key={index} style={h1}>
            {item.content}
          </Heading>
        );
      case ContentType.text:
        return <Text key={index}>{item.content}</Text>;
      case ContentType.button:
        return (
          <Section style={buttonSection}>
            <Button key={index} style={button} href={item.href} target="_blank">
              {item.content}
            </Button>
          </Section>
        );
      case ContentType.metrics:
        return (
          <Section style={metricsContainer}>
            {item.items.map((metricItem, metricIndex) => {
              const {
                isImproved,
                showPercentageDiff,
                originalValue = null,
                currentValue,
                valuePrefix = null,
              } = metricItem;
              const isFirstItem = metricIndex === 0;
              const isValueIncreased = originalValue ? currentValue > originalValue : false;
              const percentageDiff = originalValue
                ? Math.abs(Math.floor(((currentValue - originalValue) / originalValue) * 100))
                : 0;

              return (
                <div
                  key={metricIndex}
                  style={{ ...metricsBox, ...(isFirstItem ? { marginTop: 0 } : {}) }}
                >
                  <Text style={metricStatNumber}>
                    {originalValue && (
                      <span style={isImproved ? metricImproved : metricWorsened}>
                        {valuePrefix && valuePrefix}
                        {`${formatNumber(originalValue)}`}
                      </span>
                    )}
                    <span>
                      {valuePrefix && valuePrefix}
                      {formatNumber(currentValue)}
                    </span>
                  </Text>
                  <Text style={metricItemTitle}>
                    <span>{metricItem.title}</span>
                    {showPercentageDiff && (
                      <span style={isImproved ? percentageImproved : percentageWorsened}>
                        {isValueIncreased ? '↑' : '↓'}
                        {percentageDiff}%
                      </span>
                    )}
                  </Text>
                </div>
              );
            })}
          </Section>
        );
      case ContentType.noteBulletList:
        return (
          <Section key={index} style={notesBulletListBox}>
            <Heading as="h3" style={notesBulletListTitle}>
              {item.title}
            </Heading>
            <ul style={notesBulletList}>
              {item.items.map((bullet, bulletIndex) => (
                <li style={notesBulletListItem} key={bulletIndex}>
                  {bullet}
                </li>
              ))}
            </ul>
          </Section>
        );
      case ContentType.basicBulletList:
        return (
          <Section key={index}>
            <Text>
              <strong>{item.title}</strong>
            </Text>
            <ul style={basicBulletList}>
              {item.items.map((bullet, bulletIndex) => (
                <li style={basicBulletListItem} key={bulletIndex}>
                  {bullet}
                </li>
              ))}
            </ul>
          </Section>
        );
      case ContentType.divider:
        return <Hr key={index} style={divider} />;
      case ContentType.signature:
        return (
          <Section style={signatureSection} key={index}>
            <Text style={signature}>
              {item.signOff}
              <br />
              {item.senderName}
            </Text>
          </Section>
        );
      default:
        return null;
    }
  });
};

export const MetricsReport = () => {
  return (
    <Layout>
      {/* Header */}
      <Header documentTypeTitle={documentTypeTitle} date={date} />

      {/* Content */}
      <Section style={content}>{generateContent(contentSchema)}</Section>

      {/* Footer */}
      <Footer
        websiteUrl="https://adlyse.com"
        linkedinUrl="https://www.linkedin.com/company/adlyse/"
        privacyPolicyUrl="https://adlyse.com/privacy-policy"
        email="support@adlyse.com"
        phoneNumber="+1 (800) 123-4567"
      />
    </Layout>
  );
};

export default MetricsReport;

// ==== Styles ====
const main = {
  backgroundColor: '#f9f9f9',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
};

const container = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
};

const header = {
  backgroundColor: '#444791',
  padding: '25px 30px',
  borderBottom: '1px solid #3b3e7e',
};

const logo = {
  fontSize: '22px',
  fontWeight: '700',
  color: '#ffffff',
  marginBottom: '5px',
};

const subtitle = {
  color: '#e0e0ff',
  fontWeight: '500',
  fontSize: '15px',
};

const content = {
  padding: '30px',
};

const h1 = {
  color: '#ff6c35',
  marginTop: 0,
  fontSize: '22px',
  fontWeight: 600,
};

const metricsContainer = {
  margin: 0,
  width: '100%',
};

const metricItemTitle = {
  margin: '15px 20px 20px 20px',
  fontSize: '16px',
};

const metricsBox = {
  width: '100%',
  borderRadius: '10px',
  backgroundColor: 'rgba(250, 211, 112, 0.015)',
  boxShadow: '0 2px 4px rgba(255, 108, 53, 0.1)',
  border: '1px solid #eaeaea',
  marginTop: 16,
};

const metricStatNumber = {
  fontSize: '28px',
  fontWeight: 700,
  margin: '20px 20px 5px 20px',
  color: '#2d2d2d',
};

const metric = {
  marginRight: '10px',
  fontWeight: 500,
};

const metricImproved = {
  ...metric,
  color: '#34a853',
  fontWeight: 500,
};

const metricWorsened = {
  ...metric,
  color: '#ea4335',
  textDecoration: 'line-through',
};

const percentageImproved = {
  color: '#34a853',
  marginLeft: '5px',
};

const percentageWorsened = {
  color: '#ea4335',
  marginLeft: '5px',
};

const notesBulletListBox = {
  backgroundColor: 'rgba(250, 211, 112, 0.015)',
  borderLeft: '4px solid rgba(255, 108, 53, 1)',
  padding: '15px 20px',
  margin: '20px 0',
  borderRadius: '0 6px 6px 0',
};

const notesBulletList = {
  paddingLeft: 20,
};

const notesBulletListItem = {
  margin: '5px 0',
  fontSize: '14px',
};

const notesBulletListTitle = {
  marginTop: 0,
  color: '#ff6c35',
  fontSize: '16px',
};

const basicBulletList = {
  paddingLeft: 20,
};

const basicBulletListItem = {
  margin: '5px 0',
  fontSize: '14px',
};

const divider = {
  height: '1px',
  backgroundColor: '#ff6c35',
  opacity: '0.5',
  margin: '0',
  border: 'none',
};

const button = {
  display: 'inline-block',
  backgroundColor: '#ff6c35',
  color: '#ffffff',
  textDecoration: 'none',
  paddingTop: 15,
  paddingBottom: 15,
  paddingLeft: 24,
  paddingRight: 24,
  borderRadius: '6px',
  fontWeight: 500,
  fontSize: '15px',
  width: 'max-content',
};

const buttonSection = {
  margin: '0 auto',
  maxWidth: 'max-content',
};

const signatureSection = {
  margin: 0,
};

const signature = {
  margin: 0,
};
