type Slug = 'home' | 'projects' | 'blog' | 'contact';

export type Route = {
    path: string,
    name: string,
    isModal?: boolean,
};

type Routes = Record<Slug, Route>;

export const routes: Routes = {
  home: {
    path: '/',
    name: 'About',
  },
  projects: {
    path: '/projects',
    name: 'Projects',
  },
  blog: {
    path: '/blog',
    name: 'Blog',
  },
  contact: {
    path: '/contact',
    name: 'Contact',
    isModal: true,
  },
};
