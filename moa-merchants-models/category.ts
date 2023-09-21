/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Merchants API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.1.0
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
 * @interface Category
 */
export interface Category {
    /**
     * 
     * @type {string}
     * @memberof Category
     */
    'id'?: string | null;
    /**
     * 
     * @type {Array<Item>}
     * @memberof Category
     */
    'items'?: Array<Item> | null;
    /**
     * 
     * @type {boolean}
     * @memberof Category
     */
    'moaEnabled'?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof Category
     */
    'moaOrdinal'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Category
     */
    'name'?: string | null;
}

