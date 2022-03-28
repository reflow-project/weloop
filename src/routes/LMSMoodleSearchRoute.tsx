import { getUrlParamsFromEntryPointForMoodleLMS } from 'fe/lib/moodleLMS/LMSintegration';
import { useLMSPrefs } from 'fe/lib/moodleLMS/useSendToMoodle';
import { LMSMoodleSearch } from 'HOC/pages/lmsMoodleSearch/lmsMoodleSearch';
import { WithSidebarTemplate } from 'HOC/templates/WithSidebar/WithSidebar';
import React, { FC, useEffect, useRef, useState } from 'react';
import { RouteComponentProps, RouteProps } from 'react-router-dom';
import { RedirectAnonymousToLogin } from './wrappers/RedirectBySession';

interface LMSMoodleSearchRouter {}
const LMSMoodleSearchRouter: FC<RouteComponentProps<LMSMoodleSearchRouter>> = ({ match }) => {
  const { updateLMSPrefs, loading } = useLMSPrefs();
  const paramsRef = useRef(getUrlParamsFromEntryPointForMoodleLMS());
  const done = useRef(false);
  const [props, setProps] = useState<LMSMoodleSearch>();
  useEffect(() => {
    const { current: params } = paramsRef;
    if (done.current || loading) {
      return;
    } else if (!params) {
      setProps({ badParams: true });
    } else {
      updateLMSPrefs(params).then(() => setProps({ params }));
    }
    done.current = true;
  }, [updateLMSPrefs, loading]);
  return (
    <RedirectAnonymousToLogin>
      <WithSidebarTemplate>{props && <LMSMoodleSearch {...props} />}</WithSidebarTemplate>
    </RedirectAnonymousToLogin>
  );
};

export const LMSMoodleSearchRoute: RouteProps = {
  exact: true,
  path: '/lms/moodle/search',
  component: LMSMoodleSearchRouter
};
