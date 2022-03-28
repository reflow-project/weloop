import { usePage } from 'fe/lib/helpers/usePage';
import { Thread } from 'graphql/types.generated';
import { DEFAULT_PAGE_SIZE } from 'mn-constants';
import { useMemo } from 'react';
import { useThreadCommentsQuery } from './useThreadComments.generated';
export const useThreadComments = (threadId: Thread['id']) => {
  const threadPreviewQ = useThreadCommentsQuery({
    variables: { threadId, limit: DEFAULT_PAGE_SIZE }
  });
  const commentPage = usePage(
    threadPreviewQ.data?.thread?.comments,
    ({ cursor, update }) => {
      return threadPreviewQ.fetchMore({
        variables: { ...cursor, limit: DEFAULT_PAGE_SIZE, threadId },
        updateQuery: (prev, { fetchMoreResult }) => {
          return fetchMoreResult?.thread?.comments && prev.thread?.comments
            ? {
                ...fetchMoreResult,
                thread: {
                  ...fetchMoreResult.thread,
                  comments: update({
                    prev: prev.thread.comments,
                    fetched: fetchMoreResult.thread.comments
                  })
                }
              }
            : prev;
        }
      });
    }
  );

  return useMemo(() => {
    return {
      commentPage
    };
  }, [commentPage]);
};
