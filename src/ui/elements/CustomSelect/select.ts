import { IntentActions } from '../../modules/EconomicEventManager';

export interface Props {
  onSelect: (name: string, option: IntentActions) => void;
  onInputChange?: (name: string, value: string) => void;
  options?: IntentActions[];
  disabled?: boolean;
  placeholder?: string;
  variant: string;
  id: string | number;
  name: string;
  value: IntentActions;
}

// You may pass variables as a string and get this string in option label
// If you want to get a complex string consisting of several variables
// pass the array of variables in the order they are used in the template and the template string
export const setSelectOption = (
  arr: any[] | null | undefined,
  variables: string | { variables: string[]; template: string }
) => {
  if (typeof variables === 'string') {
    return arr?.length
      ? arr.map((el: any) => ({
          id: el.id,
          label: el[variables],
          displayUsername: el.displayUsername
        }))
      : [];
  }
  const getLabel = (element: any) => {
    let label = `${variables.template}`;

    variables.variables.forEach(variable => {
      label = label.replace(variable, `${element[variable]}`);
    });

    return label;
  };

  return arr?.length
    ? arr.map((el: any) => {
        return {
          id: el.id,
          label: getLabel(el)
        };
      })
    : [];
};
