import { useEffect } from 'react';

export function useMetadata(title: string, faviconPath: string) {
  useEffect(() => {
    // Update Title
    document.title = title;
    
    // Update Favicon
    let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = faviconPath;

    // Optional: Return to default on unmount? 
    // In this SPA, every top-level component will call this, so it's self-correcting.
  }, [title, faviconPath]);
}
