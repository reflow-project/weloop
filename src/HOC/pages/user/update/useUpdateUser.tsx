import { useMemo } from 'react';
import { useUpdateUserMutation } from '../UserPage.generated';
import { useCallOrNotifyMustLogin } from '../../../lib/notifyMustLogin';
import { notify } from '../../../../fe/lib/graphql/ctx';

export interface TUpdateUser {
  name: string;
  userName: string;
  summary: string;
  icon: string | File | undefined;
  image: string | File | undefined;
}

export const useUpdateUser = () => {
  const [updateUserQ, updateStatus] = useUpdateUserMutation();
  const update = useCallOrNotifyMustLogin(
    async ({ userName, summary, icon, image }: TUpdateUser) => {
      if (updateStatus.loading) {
        return;
      }
      const preparedData = new FormData();
      const url =
        process.env.REACT_APP_GRAPHQL_ENDPOINT || 'https://reflow-test.dyne.org/api/graphql';
      const token = JSON.parse(localStorage.getItem('APOLLO#AUTH_TOKEN') || '');

      preparedData.append(
        'query',
        `
                mutation updateUser($userName: String, $summary: String, $icon: Upload, $image: Upload) {
                    updateUser(
                        images: {
                            icon: $icon
                            image: $image
                        }
                        profile: {
                            summary: $summary
                            name: $userName
                        }
                      ){
                        user {
                            profile {
                                name
                                summary
                                icon
                                image
                            }
                        }
                    }
            }`
      );
      const variables: {
        userName: string;
        summary: string;
        icon?: Blob | string;
        image?: Blob | string;
      } = { userName, summary };
      if (icon && typeof icon !== 'string') {
        const fileExe = icon.name.split('.')[1];
        if (icon.size > 1000000) {
          notify('Icon size more then 1Mb', { type: 'error' });
          return;
        }
        if (!['jpg', 'png', 'jpeg'].includes(fileExe)) {
          notify('Wrong file format, select "jpg", "png", "jpeg"', { type: 'error' });
          return;
        }
        variables.icon = 'icon';
        preparedData.append('icon', icon);
      }
      if (image && typeof image !== 'string') {
        const fileExe = image.name.split('.')[1];
        if (image.size > 1000000) {
          notify('Image size more then 1Mb', { type: 'error' });
          return;
        }
        if (!['jpg', 'png', 'jpeg'].includes(fileExe)) {
          notify('Wrong file format, select "jpg", "png", "jpeg"', { type: 'error' });
          return;
        }
        variables.image = 'image';
        preparedData.append('image', image);
      }
      preparedData.append('variables', JSON.stringify(variables));

      return fetch(url, {
        method: 'POST',
        headers: {
          authorization: `Bearer ${token}`
        },
        body: preparedData
      })
        .then(resp => resp.json())
        .then(resp => {
          if (typeof resp === 'string' && resp.includes('errors')) {
            const message = JSON.parse(resp).errors[0].detail;

            throw new Error(message);
          }
          const message = 'Update Successfully!';
          notify(message, { type: 'success' });

          return resp;
        })
        .catch(error => {
          notify(error.message, { type: 'error' });
        });
    },
    [updateStatus, updateUserQ]
  );
  return useMemo(() => {
    return {
      update,
      updateStatus
    };
  }, [update, updateStatus]);
};
