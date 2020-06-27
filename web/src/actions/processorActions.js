import { SET_OPERATIONS, SET_ALGORITHMS } from './actionTypes';
import { OPERATION } from 'dataTypes';
import DataProcessorsApi from '../apis/DataProcessorsApi';

const dataProcApi = new DataProcessorsApi();
/**
 *
 * @param {*} operations: load list of backend operations
 * @param {*} algorithms: load list of backend algorithms
 */

export function setOperationsSuccessfully(operations) {
  return { type: SET_OPERATIONS, operations };
}

export function setAlgorithmsSuccessfully(algorithms) {
  return { type: SET_ALGORITHMS, algorithms };
}

/**
   * get list of processors associated with corresponding project
   */

export function getProcessors(type) {
  const params = new Map();
  params.set('type', type);
  return (dispatch) => dataProcApi
  .filterByParams(params)
    .then(
      (processors) => {
        if(type === OPERATION) {
          dispatch(
          setOperationsSuccessfully(
            processors,
          ),
        )
      } else {
        dispatch(
          setAlgorithmsSuccessfully(
            processors,
          ),
        )
      }
    }
    ).catch((err) => {
      throw err;
    });
}
