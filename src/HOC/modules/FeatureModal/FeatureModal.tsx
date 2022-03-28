import React, { FC, useMemo } from 'react';
import {
  Actor,
  useFeaturedContext,
  UseFeaturedContext
} from 'fe/context/feature/useFeatureContext';
import { useFormik } from 'formik';
import { Feature } from 'graphql/types.generated';
import FeaturedModalUI, { Props } from 'ui/modules/FeaturedModal';

export interface FeatureModal {
  ctx: Pick<Actor, 'id' | '__typename' | 'name'>;
  featureId: undefined | null | Feature['id'];
  done(): unknown;
}
export const FeatureModalHOC: FC<FeatureModal> = ({ ctx, featureId, done }) => {
  const featuredContext = useMemo<UseFeaturedContext>(
    () =>
      featureId
        ? {
            isFeatured: true,
            featureId: featureId,
            __typename: ctx.__typename
          }
        : { isFeatured: false, actor: ctx },
    [ctx, featureId]
  );

  const { toggleFeatured } = useFeaturedContext(featuredContext);

  const toggleFeaturedFormik = useFormik({
    initialValues: {},
    onSubmit: () => toggleFeatured().then(done)
  });

  const props = useMemo<null | Props>(() => {
    const props: Props = {
      isFeatured: !!featureId,
      itemName: ctx.name,
      itemType: ctx.__typename || '',
      formik: toggleFeaturedFormik,
      cancel: done
    };

    return props;
  }, [ctx.__typename, ctx.name, done, featureId, toggleFeaturedFormik]);

  return props && <FeaturedModalUI {...props} />;
};
