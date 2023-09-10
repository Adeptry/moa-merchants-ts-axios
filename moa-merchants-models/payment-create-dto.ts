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



/**
 * 
 * @export
 * @interface PaymentCreateDto
 */
export interface PaymentCreateDto {
    /**
     * 
     * @type {string}
     * @memberof PaymentCreateDto
     */
    'idempotencyKey': string;
    /**
     * 
     * @type {number}
     * @memberof PaymentCreateDto
     */
    'orderTipMoney': number;
    /**
     * 
     * @type {string}
     * @memberof PaymentCreateDto
     */
    'paymentSquareId': string;
    /**
     * The timestamp that represents the start of the pickup window. Must be in RFC 3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\".
     * @type {string}
     * @memberof PaymentCreateDto
     */
    'pickupAt': string;
}

