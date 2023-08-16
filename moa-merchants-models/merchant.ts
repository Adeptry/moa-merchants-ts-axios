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
import { User } from './user';

/**
 * 
 * @export
 * @interface Merchant
 */
export interface Merchant {
    /**
     * 
     * @type {string}
     * @memberof Merchant
     */
    'id'?: string | null;
    /**
     * 
     * @type {User}
     * @memberof Merchant
     */
    'user'?: User | null;
    /**
     * 
     * @type {string}
     * @memberof Merchant
     */
    'squareId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Merchant
     */
    'stripeId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Merchant
     */
    'stripeCheckoutSessionId'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Merchant
     */
    'catalogId'?: string | null;
}

