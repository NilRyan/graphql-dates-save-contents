import { GraphQLError } from "graphql";

export const dateBetween = ({
  start_date,
  end_date,
}: DateInput): DateBetweenOutput => {
  if (isDateValid(start_date) && isDateValid(end_date)) {
    const daysBetween: number = (Date.parse(end_date) - Date.parse(start_date)) / (1000 * 3600 * 24);

    return {
      num_days: daysBetween
    };
  }
  throw new GraphQLError('Cannot parse dates! Date format should be YYYY-MM-dd', {
    extensions: {
      code: 'BAD_INPUT',
    },
  });
}

function isDateValid(dateString: string): boolean {
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (dateString.match(regex) === null) {
    return false;
  }

  const date = new Date(dateString);

  const timestamp = date.getTime();

  if (typeof timestamp !== 'number' || isNaN(timestamp)) {
    return false;
  }

  return date.toISOString().startsWith(dateString);
}
