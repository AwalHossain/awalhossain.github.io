import { Image } from './Image';
import { Location } from './Location';
import { SocialLink } from './SocialLink';
import { Tag } from './Tag';

export type Profile = {
    firstName?: string,
    lastName?: string,
    position?: string,
    avatar?: Image,
    summary?: string[],
    socialLinks?: SocialLink[],
    tags?: Tag[],
    location?: Location,
};
