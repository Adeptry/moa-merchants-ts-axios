/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Merchants API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { Item } from './item';

/**
 * 
 * @export
 * @interface ItemPaginatedResponse
 */
export interface ItemPaginatedResponse {
    /**
     * 
     * @type {Array<Item>}
     * @memberof ItemPaginatedResponse
     */
    'data'?: Array<Item> | null;
    /**
     * 
     * @type {number}
     * @memberof ItemPaginatedResponse
     */
    'pages': number;
    /**
     * 
     * @type {number}
     * @memberof ItemPaginatedResponse
     */
    'count': number;
}

