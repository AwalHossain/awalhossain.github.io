// @flow
import { socialLinkTypes } from '../types/SocialLink';

export const socialLinks = [
    {
        type: socialLinkTypes.linkedIn,
        url: 'https://www.linkedin.com/in/awal-hossain-0bb650108/',
        secondary: false,
        caption: 'Awal Hossain on LinkedIn',
    },
    {
        type: socialLinkTypes.gitHub,
        url: 'https://github.com/awalHossain/',
        secondary: false,
        caption: 'Awal Hossain on Github',
    },
    {
        type: socialLinkTypes.twitter,
        url: 'https://twitter.com/AwalHosssaimn',
        secondary: false,
        caption: 'Awal Hossain on Twitter',
    },
    {
        type: socialLinkTypes.devTo,
        url: 'https://dev.to/awalho',
        secondary: true,
        caption: 'Awal Hossain on devto',
    },
    {
        type: socialLinkTypes.youTube,
        // url: 'https://www.youtube.com/c/OleksiiTrekhlebs',
        url: 'https://www.youtube.com/@awalho',
        secondary: true,
        caption: 'Awal Hossain on Youtube',
    },
];
