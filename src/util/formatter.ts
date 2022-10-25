export const getYearFromDate = (date: string | undefined) => {
    if (!date) return '';
    return date.split('-')[0];
  }
  
export const capitalizeFirstLetter = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);