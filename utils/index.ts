export const isServer = () => typeof window === 'undefined';
export function validateEmail(email: string) {
  //confirm @
  const atSplited = email.split('@');
  for (let i = 0; i < atSplited.length; i++) {
    if (atSplited[i].length === 0) return false;
  }
  if (atSplited.length !== 2) return false;

  //confirm firstpart is correct
  {
    const startCharaterSet = "abcdefghijklmnopqrstuvwxyz0123456789!#$%&'*+/=?^_`{|}~-.";
    const splited = atSplited[0].split('');
    for (let i = 0; i < splited.length; i++) {
      if (!startCharaterSet.includes(splited[i])) {
        return false;
      }
    }
    const dotSplited = atSplited[0].split('.');
    for (let i = 0; i < dotSplited.length; i++) {
      if (dotSplited[i].length === 0) return false;
    }
  }

  //confirm second part is correct
  {
    const charNumberSet = "abcdefghijklmnopqrstuvwxyz0123456789";
    const charNumberDashSet = "abcdefghijklmnopqrstuvwxyz0123456789-";
    const dotSplited = atSplited[1].split('.');
    for (let i = 0; i < dotSplited.length; i++) {
      if (dotSplited[i].length === 0) return false;
    }
    if (dotSplited.length !== 2) return false;

    {
      const splited = dotSplited[0].split('');
      for (let i = 0; i < splited.length; i++) {
        if (!charNumberDashSet.includes(splited[i])) {
          return false;
        }
      }
      if (!charNumberSet.includes(splited[0]) || !charNumberSet.includes(splited[splited.length - 1])) {
        return false;
      }
    }
    {
      const splited = dotSplited[1].split('');
      for (let i = 0; i < splited.length; i++) {
        if (!charNumberDashSet.includes(splited[i])) {
          return false;
        }
      }
      if (!charNumberSet.includes(splited[0]) || !charNumberSet.includes(splited[splited.length - 1])) {
        return false;
      }
    }
  }
  return true;
}
