import { UploadInput } from 'graphql/types.generated';
import Maybe from 'graphql/tsutils/Maybe';
import { UrlString, isUrlString } from 'fe/lib/helpers/data';

export const getMaybeUploadInput = (
  maybeFileOrString: Maybe<File | string>,
  currentUploadUrl: Maybe<string>
): UploadInput | undefined =>
  !maybeFileOrString ||
  (isUrlString(maybeFileOrString) && maybeFileOrString === currentUploadUrl)
    ? void 0
    : maybeFileOrString instanceof File || isUrlString(maybeFileOrString)
    ? getUploadInput(maybeFileOrString)
    : void 0;

export const getUploadInput = (fileOrString: File | UrlString): UploadInput =>
  isUrlString(fileOrString) ? { url: fileOrString } : { upload: fileOrString };
