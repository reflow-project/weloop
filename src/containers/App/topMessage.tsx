import * as React from 'react';
import Alert from 'ui/elements/Alert/index';
import { X } from 'react-feather';

export const TopMessage: React.FC = () => {
  const [show, setShow] = React.useState(true);
  return show ? (
    <Alert variant="warning">
      <div style={{ textAlign: 'center' }}>
        This site is currently in active development. We are looking forward to reading your
        feedback and ideas in our{' '}
        <a
          href="https://tracker.moodle.org/projects/MDLNET/summary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tracker
        </a>
        <span
          style={{
            cursor: 'pointer',
            position: 'absolute',
            top: '2px',
            right: '2px'
          }}
          onClick={() => setShow(false)}
        >
          <X color="#fff" size={16} />
        </span>
      </div>
    </Alert>
  ) : null;
};
