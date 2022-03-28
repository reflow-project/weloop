import { FollowContext, useFlagContext } from 'fe/context/flag/useFlagContext';
import { useFormik } from 'formik';
import React, { FC } from 'react';
import { BasicCreateFlagFormValues, FlagModal } from 'ui/modules/FlagModal';
import * as Yup from 'yup';

export const validationSchema: Yup.ObjectSchema<BasicCreateFlagFormValues> = Yup.object<
  BasicCreateFlagFormValues
>({
  reason: Yup.string()
    .max(200)
    .required()
});

export interface FlagModalHOC {
  ctx: FollowContext;
  done(): any;
}

export const FlagModalHOC: FC<FlagModalHOC> = ({ done, ctx }) => {
  const { unflag, flag } = useFlagContext(ctx);

  const unflagFormik = useFormik({
    onSubmit: () => {
      unflag();
      done();
    },
    initialValues: {}
  });

  const flagFormik = useFormik<BasicCreateFlagFormValues>({
    enableReinitialize: true,
    onSubmit: vals => {
      flag(vals.reason);
      done();
    },
    validationSchema,
    initialValues: { reason: '' }
  });
  return (
    <FlagModal
      cancel={done}
      isFlagged={!!ctx.myFlag}
      flagFormik={flagFormik}
      unflagFormik={unflagFormik}
    />
  );
};

export default FlagModalHOC;
