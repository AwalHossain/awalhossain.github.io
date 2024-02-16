import React from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

type PageLayoutProps = {
  children: React.ReactNode,
};

const PageLayout = (props: PageLayoutProps): React.ReactElement | null => {
  const { children } = props;

  if (!children) {
    return null;
  }

  return (
    <main className="flex flex-col items-center w-full dark:bg-gray-950">
      <div className="max-w-screen-xl self-stretch m-auto w-full overflow-x-hidden">
        <Header className="px-6 sm:px-12 py-6" />
        <article className="px-6 sm:px-12 pb-16 mb-8">
          {children}
        </article>
      </div>
        <Footer className="px-6 sm:px-12 py-12" />
    </main>
  );
};

export default PageLayout;