/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { LocationEntity } from './location-entity';

/**
 * 
 * @export
 * @interface LocationPaginatedResponse
 */
export interface LocationPaginatedResponse {
    /**
     * 
     * @type {number}
     * @memberof LocationPaginatedResponse
     */
    'count': number;
    /**
     * 
     * @type {Array<LocationEntity>}
     * @memberof LocationPaginatedResponse
     */
    'data'?: Array<LocationEntity> | null;
    /**
     * 
     * @type {number}
     * @memberof LocationPaginatedResponse
     */
    'pages': number;
}

