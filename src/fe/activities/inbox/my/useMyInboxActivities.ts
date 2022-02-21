// import * as GQL from './useMyInboxActivities.generated';

export const useMyInboxActivities = () => {
  // const activitiesQ = GQL.useMyInboxActivitiesQuery({
  //   variables: { limit: DEFAULT_PAGE_SIZE }
  // });
  return {
    activitiesPage: { edges: [] }
  };
};
