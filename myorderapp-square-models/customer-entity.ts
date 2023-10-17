/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { LocationEntity } from './location-entity';
// May contain unused imports in some cases
// @ts-ignore
import { SquareCard } from './square-card';
// May contain unused imports in some cases
// @ts-ignore
import { UserEntity } from './user-entity';

/**
 * 
 * @export
 * @interface CustomerEntity
 */
export interface CustomerEntity {
    /**
     * 
     * @type {string}
     * @memberof CustomerEntity
     */
    'createDate'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerEntity
     */
    'id'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerEntity
     */
    'mailNotifications'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerEntity
     */
    'merchantId'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerEntity
     */
    'messageNotifications'?: boolean | null;
    /**
     * 
     * @type {LocationEntity}
     * @memberof CustomerEntity
     */
    'preferredLocation'?: LocationEntity | null;
    /**
     * 
     * @type {SquareCard}
     * @memberof CustomerEntity
     */
    'preferredSquareCard'?: SquareCard | null;
    /**
     * 
     * @type {boolean}
     * @memberof CustomerEntity
     */
    'pushNotifications'?: boolean | null;
    /**
     * 
     * @type {UserEntity}
     * @memberof CustomerEntity
     */
    'user'?: UserEntity | null;
}

