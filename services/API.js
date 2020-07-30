import mocks from './mocks';


const getRoutines = () => {
    return new Promise((resolve) => {
        resolve(mocks.routines);
    });
}

export {
    getRoutines
};