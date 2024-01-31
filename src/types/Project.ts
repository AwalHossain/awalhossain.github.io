
import { DateString } from './Date';
import { Details } from './Details';
import { Image } from './Image';
import { Link } from './Link';
import { Tag } from './Tag';

export type ProjectID = string;

export type Project = {
    // Project ID must be the same as the project key in the projects map.
    id: ProjectID,
    name?: string,
    summary?: string[],
    // Relative to the src/images folder path to the image (i.e. projects/links-detector-cover.png)
    cover?: Image,
    srcURL?: Link,
    demoURL?: Link,
    startDate?: DateString,
    endDate?: DateString,
    tags?: Tag[],
    archived?: boolean,
    client?: Link,
    server?: Link,
    links?: Link[],
    details?: Details[],
};

export type Projects = Record<ProjectID, Project>;
