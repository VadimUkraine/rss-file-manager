
import { join, resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress, constants } from 'zlib';
import { pipeline } from 'stream/promises';
import getError, { INVALID_INPUT_ERROR } from '../helpers/errorsHandler.js';

const compressAction = async (parameters) => {
  try{
    if (parameters.length < 2) {
      throw new Error(INVALID_INPUT_ERROR);
    }

    const filePath = parameters[0];
    const destinationDir = parameters[1];
    const source = createReadStream(resolve(filePath), { encoding: 'utf8' });
    const destination = createWriteStream(
      join(resolve(destinationDir), 'brotliCompressedData.txt.br')
    );
   
    const brotliCompression = createBrotliCompress({
      params: {
        [constants.BROTLI_PARAM_QUALITY]: constants.BROTLI_MIN_QUALITY,
      },
    })

    await pipeline(source, brotliCompression, destination);
  } catch (error) {
    getError(error);
  }
};

export default compressAction;
