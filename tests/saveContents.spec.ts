import { saveContents } from './../features/saveContents/saveContents';
import { GraphQLError } from 'graphql';
import {describe, expect, test} from '@jest/globals';
describe('saveContents', () => {
  test('Returns file size', async () => {
    expect((await saveContents({ contents: "abc" })).file_size).toBe(3);
    expect((await saveContents({contents: "abcd"})).file_size).toBe(4);
  });

});