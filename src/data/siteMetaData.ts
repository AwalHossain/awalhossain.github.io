import { defaultSiteDescription, defaultSiteTitle, siteURL } from '../components/constants/siteMeta';
import { SiteMetaData } from '../types/SiteMetaData';

export const metaFieldTitle = 'title';
export const metaFieldDescription = 'description';
export const metaFieldSiteUrl = 'siteUrl';

export const siteMetadata: SiteMetaData = {
    [metaFieldTitle]: defaultSiteTitle,
    [metaFieldDescription]: defaultSiteDescription,
    [metaFieldSiteUrl]: siteURL,
};
