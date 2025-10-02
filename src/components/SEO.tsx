import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Preventix AI - RIDDOR Reporting, Workplace Safety & AI Risk Prevention Platform',
  description = 'Preventix AI: Leading RIDDOR reporting & workplace safety platform. AI-powered risk prediction, accident prevention, HSE compliance tracking, and real-time monitoring. Predict, Prevent, Protect your workforce.',
  keywords = 'preventix, preventix AI, RIDDOR, RIDDOR reporting, RIDDOR compliance, workplace safety, accident prevention, AI safety analysis, HSE reporting, health and safety executive, risk prediction',
  canonicalUrl = 'https://preventix.ai',
  ogImage = 'https://preventixai-misc.s3.eu-west-2.amazonaws.com/preventix-logo-new.png',
  ogType = 'website',
  article,
  structuredData,
}) => {
  const fullTitle = title.includes('Preventix') ? title : `${title} | Preventix AI`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Preventix AI" />
      <meta property="og:locale" content="en_GB" />
      
      {/* Article specific Open Graph tags */}
      {article && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tags && article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@preventixai" />
      <meta name="twitter:creator" content="@preventixai" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
