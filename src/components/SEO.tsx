import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Noureddine Tahadout | Software Developer & Creative Designer",
  description = "Official portfolio of Noureddine Tahadout, a software developer and creative designer from Morocco. Explore his projects, skills, experience, and creative work.",
  canonical,
  ogImage = "/images/cub3d.jpg",
  ogType = "website"
}) => {
  useEffect(() => {
    // Document Title
    document.title = title;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    // OG Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    }

    // OG Image
    let ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) {
      ogImg.setAttribute('content', ogImage);
    }

    // OG Type
    let ogT = document.querySelector('meta[property="og:type"]');
    if (ogT) {
      ogT.setAttribute('content', ogType);
    }

    // Twitter Title
    let twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) {
      twTitle.setAttribute('content', title);
    }

    // Twitter Description
    let twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) {
      twDesc.setAttribute('content', description);
    }

    // Twitter Image
    let twImg = document.querySelector('meta[name="twitter:image"]');
    if (twImg) {
      twImg.setAttribute('content', ogImage);
    }

    // Canonical link tag
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonical);
    }
  }, [title, description, canonical, ogImage, ogType]);

  return null;
};
