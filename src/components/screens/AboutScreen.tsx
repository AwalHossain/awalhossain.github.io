import React from 'react';

import type { Profile as ProfileType } from '../../types/Profile';
import Profile from '../elements/Profile';
import PageLayout from '../layouts/PageLayout';
// import SEO from '../shared/SEO';
import ErrorBoundary from '../shared/ErrorBoundary';
import SEO from '../shared/SEO';

type AboutScreenProps = {
    profile: ProfileType,
};

const AboutScreen = (props: AboutScreenProps): React.ReactElement => {
  const { profile } = props;

  const summary: string = profile.summary && profile.summary.length ? profile.summary[0] : '';

  return (
    <PageLayout>
      <SEO
        title={`${profile.position}. ${summary}`}
        description={`${profile.firstName} ${profile.lastName}. ${profile.position}. ${summary}`}
      />
      <ErrorBoundary>
        <Profile profile={profile} />
      </ErrorBoundary>
    </PageLayout>
  );
};

export default AboutScreen;
