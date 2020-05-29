import React, { FC } from 'react';
import { LMSPrefs } from 'fe/lib/moodleLMS/LMSintegration';

export type LMSMoodleSearch =
  | {
      params: LMSPrefs;
      badParams?: false;
    }
  | {
      badParams: true;
    };

export const LMSMoodleSearch: FC<LMSMoodleSearch> = props => {
  if (props.badParams) {
    return (
      <div>
        <h2>Bad Params</h2>
      </div>
    );
  } else {
    const { course, site, section } = props.params;
    return (
      <div>
        <h1>Welcome from Moodle LMS !</h1>
        <h2>Site: {site}</h2>
        {course && <h3>course: {course}</h3>}
        {section && <h3>section: {section}</h3>}
      </div>
    );
  }
};
