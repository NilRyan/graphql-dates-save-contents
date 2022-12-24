import fs from 'fs/promises';
import { GraphQLError } from 'graphql';

export const saveContents = async ({ contents }: ContentsInput): Promise<FileSizeOutput> => {
  try {
    await fs.writeFile('contents.txt', contents);
    const { size: file_size } = await fs.stat('./contents.txt');

    return {
      file_size
    }
  } catch (err) {
    throw new GraphQLError('Something went wrong', {
      extensions: {
        code: 'ERROR',
      },
    });
  }
};
