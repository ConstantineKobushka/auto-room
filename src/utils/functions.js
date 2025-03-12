export const extractLocation = (address, type) => {
  if (!address || typeof address !== 'string') return 'Location unknown';

  const parts = address.split(',').map((part) => part.trim());

  if (type === 'city') {
    return parts.length > 1 ? parts[1] : 'Kyiv';
  } else if (type === 'country') {
    return parts.length > 2 ? parts[2] : 'Ukraine';
  }

  return 'Location unknown';
};

export const formatMileAge = (number, unit = 'km') => {
  if (typeof number !== 'number' || isNaN(number)) return 'Invalid distance';
  return new Intl.NumberFormat('uk-UA').format(number) + ` ${unit}`;
};

export const extractIdFromUrl = (url) => {
  const carId = parseInt(url.split('/').slice(-1));
  console.log(carId);
  return carId;
};
