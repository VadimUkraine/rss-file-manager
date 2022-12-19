
import { join, resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { createBrotliDecompress,constants } from 'zlib';
import { pipeline } from 'stream/promises';
import getError, { INVALID_INPUT_ERROR } from '../helpers/errorsHandler.js';

const decompressAction = async (parameters) => {

  try{
    if (parameters.length < 2) {
      throw new Error(INVALID_INPUT_ERROR);
    }

    const filePath = parameters[0];
    const destinationDir = parameters[1];
    const source = createReadStream(resolve(filePath));
    const destination = createWriteStream(
      join(resolve(destinationDir), 'brotliDecompressedData.txt')
    );    
    const brotliDecompression = createBrotliDecompress({
      params: {
        [constants.BROTLI_PARAM_QUALITY]: constants.BROTLI_MIN_QUALITY,
      },
    });

    await pipeline(source, brotliDecompression, destination);
  } catch (error) {
    getError(error);
  }
};

export default decompressAction;
