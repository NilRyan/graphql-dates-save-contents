import { dateBetween } from './../features/dateBetween/dateBetween';
import {describe, expect, test} from '@jest/globals';
describe('dateBetween', () => {
  test('Returns days between two dates', () => {
    expect(dateBetween({start_date: "2012-10-16", end_date: "2012-10-19"}).num_days).toBe(3);
  });

  test('Throws an error if dates are not in YYYY-MM-dd format', () => {
    expect(() => dateBetween({ start_date: "1234", end_date: "241" })).toThrow();
    expect(() => dateBetween({start_date: "hehe34", end_date: "24z1"})).toThrow();
  });

});