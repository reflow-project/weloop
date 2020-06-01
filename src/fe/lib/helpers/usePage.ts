import Maybe from 'graphql/tsutils/Maybe';
import { PageInfo } from 'graphql/types.generated';
import { useMemo, useCallback } from 'react';
import { useFormik } from 'formik';
import { FormikHook } from 'ui/@types/types';

interface Page<EdgeType> {
  edges: EdgeType[];
  pageInfo: PageInfo;
  totalCount: number;
}
interface NextPageCursor {
  after: PageInfo['endCursor'];
  before: undefined;
}
interface PreviousPageCursor {
  before: PageInfo['startCursor'];
  after: undefined;
}
type PageUpdater<EdgeType> = (_: {
  prev: Page<EdgeType>;
  fetched: Page<EdgeType>;
}) => Page<EdgeType>;

type Fetch<EdgeType, Cursor extends FellowPageCursor> = (
  _: (
    | {
        cursor: NextPageCursor;
        isNext: true;
      }
    | {
        cursor: PreviousPageCursor;
        isNext: false;
      }
  ) & {
    update: PageUpdater<EdgeType>;
  }
) => Promise<unknown>;

type FellowPageCursor = NextPageCursor | PreviousPageCursor;
type BaseMngPage<Ready extends boolean> = {
  ready: Ready;
};
interface MngPageInitialized<EdgeType>
  extends Page<EdgeType>,
    BaseMngPage<true> {
  next(): Promise<unknown>;
  previous(): Promise<unknown>;
}
interface MngPageUninitialized<EdgeType> extends BaseMngPage<false> {
  edges: EdgeType[];
}

export type MngPage<EdgeType> =
  | MngPageUninitialized<EdgeType>
  | MngPageInitialized<EdgeType>;

export type FormikPaging = [FormikHook | null, FormikHook | null];
export const useFormikPaging = <EdgeType>(
  page: MngPage<EdgeType>
): FormikPaging => {
  const nextPageFormik = useFormik({
    initialValues: {},
    onSubmit: useCallback(() => (page?.ready ? page.next() : undefined), [page])
  });
  const previousPageFormik = useFormik({
    initialValues: {},
    onSubmit: useCallback(() => (page?.ready ? page.previous() : undefined), [
      page
    ])
  });
  return useMemo(
    () => [
      page.ready && page.pageInfo.hasNextPage ? nextPageFormik : null,
      page.ready && page.pageInfo.hasPreviousPage ? previousPageFormik : null
    ],
    [nextPageFormik, previousPageFormik, page]
  );
};

export const usePage = <EdgeType>(
  gqlPage: Maybe<Page<EdgeType>>,
  fetch: Fetch<EdgeType, NextPageCursor> // = () => Promise.resolve()
): MngPage<EdgeType> & { formiks: FormikPaging } => {
  const page = useMemo<MngPage<EdgeType>>(() => mngPage(gqlPage, fetch), [
    gqlPage,
    fetch
  ]);
  const formiks = useFormikPaging(page);
  return useMemo(
    () => ({
      ...page,
      formiks
    }),
    [formiks, page]
  );
};

export const mngPage = <EdgeType>(
  page: Maybe<Page<EdgeType>>,
  fetch: Fetch<EdgeType, NextPageCursor> = () => Promise.resolve()
): MngPage<EdgeType> => {
  if (!page) {
    return {
      ready: false,
      edges: []
    };
  }
  const next: MngPageInitialized<EdgeType>['next'] = async () =>
    page.pageInfo.hasNextPage &&
    fetch({
      cursor: {
        after: page.pageInfo.endCursor,
        before: undefined
      },
      update: updatePageNext,
      isNext: true
    });

  const previous: MngPageInitialized<EdgeType>['previous'] = async () =>
    page.pageInfo.hasPreviousPage &&
    fetch({
      cursor: {
        before: page.pageInfo.startCursor,
        after: undefined
      },
      update: updatePagePrev,
      isNext: false
    });

  const pageMng: MngPage<EdgeType> = {
    ...page,
    next,
    previous,
    ready: !!page
  };
  return pageMng;
};

const updatePageNext = <EdgeType>({
  fetched,
  prev
}: {
  fetched: Page<EdgeType>;
  prev: Page<EdgeType>;
}) => {
  return {
    ...fetched,
    edges: prev.edges.concat(fetched.edges),
    totalCount: fetched.totalCount,
    pageInfo: {
      ...prev.pageInfo,
      endCursor: fetched.pageInfo.endCursor,
      hasNextPage: fetched.pageInfo.hasNextPage
    }
  };
};
const updatePagePrev = <EdgeType>({
  fetched,
  prev
}: {
  fetched: Page<EdgeType>;
  prev: Page<EdgeType>;
}) => {
  return {
    ...fetched,
    edges: fetched.edges.concat(prev.edges),
    totalCount: fetched.totalCount,
    pageInfo: {
      ...prev.pageInfo,
      startCursor: fetched.pageInfo.startCursor,
      hasPreviousPage: fetched.pageInfo.hasPreviousPage
    }
  };
};
