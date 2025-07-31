import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEOHead = ({ 
  title = "SIRI Electromotive - AI-Powered EV Charging Solutions",
  description = "Leading provider of AI-powered EV charging solutions, offering AC & DC chargers, charging management systems, and comprehensive consulting services for electric vehicle infrastructure.",
  keywords = "EV charging, electric vehicle chargers, AC chargers, DC chargers, charging infrastructure, EV charging management, electric vehicle solutions, charging stations, EV technology, sustainable transportation",
  image = "/og-image.jpg",
  url = "https://siriem.com"
}: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SIRI Electromotive" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <link rel="canonical" href={url} />
      <meta name="author" content="SIRI Electromotive" />
      <meta name="language" content="en" />
      <meta name="geo.region" content="IN" />
      <meta name="geo.country" content="India" />
    </Helmet>
  );
};

export default SEOHead;