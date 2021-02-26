export const getColorBackground = (color) => {
  switch (color) {
    case 'lightBlue':
      return 'bg-blue-400';

    case 'orange':
      return 'bg-yellow-400';

    case 'green':
      return 'bg-green-400';

    case 'purple':
      return 'bg-indigo-400';

    case 'gray':
      return 'bg-gray-400';

    case 'white':
      return 'bg-white';

    default:
      return 'bg-blue-200';
  }

};

export const getTextColor = (color) => {
  switch (color) {
    case 'lightBlue':
      return 'text-blue-400';

    case 'orange':
      return 'text-yellow-400';

    case 'green':
      return 'text-green-400';

    case 'purple':
      return 'text-indigo-400';

    case 'gray':
      return 'text-gray-400';

    case 'white':
      return 'text-white';

    default:
      return 'text-blue-200';
  }

};