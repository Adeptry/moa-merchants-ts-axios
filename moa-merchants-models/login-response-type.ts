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
import { User } from './user';

/**
 * 
 * @export
 * @interface LoginResponseType
 */
export interface LoginResponseType {
    /**
     * 
     * @type {string}
     * @memberof LoginResponseType
     */
    'refreshToken': string;
    /**
     * 
     * @type {string}
     * @memberof LoginResponseType
     */
    'token': string;
    /**
     * 
     * @type {number}
     * @memberof LoginResponseType
     */
    'tokenExpires': number;
    /**
     * 
     * @type {User}
     * @memberof LoginResponseType
     */
    'user'?: User | null;
}

