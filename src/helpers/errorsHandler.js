export const OPERATION_FAILED_ERROR = 'Operation failed';
export const INVALID_INPUT_ERROR = 'Invalid input';

const getError = error => {
    if (error.message === INVALID_INPUT_ERROR) {
        console.log(INVALID_INPUT_ERROR);
    } else {
        console.log(OPERATION_FAILED_ERROR);
    }
};

export default getError;
