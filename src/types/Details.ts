import { DateString } from './Date';
import { Image } from './Image';
import { Link } from './Link';

export type Details = {
    title: string,
    link?: Link,
    image?: Image,
    date?: DateString,
};
