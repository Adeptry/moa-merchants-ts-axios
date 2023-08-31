/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Merchants API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.12
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Customer } from './customer';

/**
 * 
 * @export
 * @interface CustomersPaginatedResponse
 */
export interface CustomersPaginatedResponse {
    /**
     * 
     * @type {Array<Customer>}
     * @memberof CustomersPaginatedResponse
     */
    'data'?: Array<Customer> | null;
    /**
     * 
     * @type {number}
     * @memberof CustomersPaginatedResponse
     */
    'pages': number;
    /**
     * 
     * @type {number}
     * @memberof CustomersPaginatedResponse
     */
    'count': number;
}

