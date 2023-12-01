/**
 * PetstoreLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of Custom
 */
interface Custom {
  /** An error code for understanding the error which occured */
  code: number;
  /** Error message that provides human readable details about the error. */
  message: string;
}

export class CustomError extends ApiError<Custom> {}
