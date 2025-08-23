import Head from "next/head";
import { defaultSEO } from "@/seo.config";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: string;
}

export default function SEO(props: SEOProps) {
  const seo = { ...defaultSEO, ...props };

  return (
    <Head>
      {/* Primary Meta */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      <link rel="canonical" href={seo.url} />

      {/* Open Graph */}
      <meta property="og:type" content={seo.type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Garvey Labs",
            url: seo.url,
            logo: "https://www.garveylabs.com/logo.jpg",
            sameAs: [
              "https://twitter.com/garveylabs", 
              "https://linkedin.com/company/garveylabs"
            ],
            description: seo.description,
          }),
        }}
      />
    </Head>
  );
}
