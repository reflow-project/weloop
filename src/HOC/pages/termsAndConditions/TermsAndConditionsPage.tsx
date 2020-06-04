import React, { FC, useMemo } from 'react';
import TermsAndConditionsPage, { Props } from 'ui/pages/termsAndConditions';
import useAxios from 'axios-hooks';
import {
  terms_markdown_text,
  terms_markdown_urls,
  terms_privacy
} from 'mn-constants';

export const TermsAndConditionsPageHOC: FC = () => {
  const terms_users_text = { data: terms_markdown_text.terms_users };
  const terms_privacy_text = { data: terms_privacy.text_markdown };
  const terms_cookies_text = { data: terms_markdown_text.terms_cookies };
  const terms_indexing_text = { data: terms_markdown_text.terms_indexing };

  const [terms_users, exec_terms_users] = useAxios(
    terms_markdown_urls.terms_users,
    {
      useCache: true,
      manual: true
    }
  );

  const [terms_cookies, exec_terms_cookies] = useAxios(
    terms_markdown_urls.terms_cookies,
    {
      useCache: true,
      manual: true
    }
  );
  const [terms_indexing, exec_terms_indexing] = useAxios(
    terms_markdown_urls.terms_indexing,
    {
      useCache: true,
      manual: true
    }
  );
  const [privacy_url_text, exec_privacy_url_text] = useAxios(
    terms_privacy.url_markdown,
    {
      useCache: true
    }
  );
  if (terms_markdown_urls.enabled) {
    exec_terms_users();
    exec_terms_cookies();
    exec_terms_indexing();
  }

  if (terms_privacy.enabled) {
    exec_privacy_url_text();
  }

  const props = useMemo<Props>(
    () => ({
      terms_privacy_enabled: terms_privacy.enabled,
      terms_users_data: terms_users.data,
      terms_users_text_data: terms_users_text.data,
      privacy_url_text_data: privacy_url_text.data,
      terms_privacy_text_data: terms_privacy_text.data,
      terms_cookies_data: terms_cookies.data,
      terms_cookies_text_data: terms_cookies_text.data,
      terms_indexing_data: terms_indexing.data,
      terms_indexing_text_data: terms_indexing_text.data
    }),
    [
      privacy_url_text.data,
      terms_cookies.data,
      terms_cookies_text.data,
      terms_indexing.data,
      terms_indexing_text.data,
      terms_privacy_text.data,
      terms_users.data,
      terms_users_text.data
    ]
  );

  return <TermsAndConditionsPage {...props} />;
};
