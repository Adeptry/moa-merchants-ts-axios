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
import { StatisticsOutput } from './statistics-output';

/**
 * 
 * @export
 * @interface OrdersStatisticsResponse
 */
export interface OrdersStatisticsResponse {
    /**
     * 
     * @type {StatisticsOutput}
     * @memberof OrdersStatisticsResponse
     */
    'appFeeMoneyAmount'?: StatisticsOutput | null;
    /**
     * 
     * @type {number}
     * @memberof OrdersStatisticsResponse
     */
    'count'?: number | null;
    /**
     * 
     * @type {StatisticsOutput}
     * @memberof OrdersStatisticsResponse
     */
    'moneyAmount'?: StatisticsOutput | null;
    /**
     * 
     * @type {StatisticsOutput}
     * @memberof OrdersStatisticsResponse
     */
    'serviceChargeMoneyAmount'?: StatisticsOutput | null;
    /**
     * 
     * @type {StatisticsOutput}
     * @memberof OrdersStatisticsResponse
     */
    'taxMoneyAmount'?: StatisticsOutput | null;
    /**
     * 
     * @type {StatisticsOutput}
     * @memberof OrdersStatisticsResponse
     */
    'tipMoneyAmount'?: StatisticsOutput | null;
}

