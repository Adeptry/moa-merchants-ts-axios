/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Merchants API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.16
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Order } from './order';

/**
 * 
 * @export
 * @interface OrdersPaginatedReponse
 */
export interface OrdersPaginatedReponse {
    /**
     * 
     * @type {number}
     * @memberof OrdersPaginatedReponse
     */
    'count': number;
    /**
     * 
     * @type {Array<Order>}
     * @memberof OrdersPaginatedReponse
     */
    'data'?: Array<Order> | null;
    /**
     * 
     * @type {number}
     * @memberof OrdersPaginatedReponse
     */
    'pages': number;
}

