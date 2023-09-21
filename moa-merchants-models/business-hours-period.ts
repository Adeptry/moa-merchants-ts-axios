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



/**
 * 
 * @export
 * @interface BusinessHoursPeriod
 */
export interface BusinessHoursPeriod {
    /**
     * Indicates the specific day  of the week.
     * @type {string}
     * @memberof BusinessHoursPeriod
     */
    'dayOfWeek'?: string | null;
    /**
     * The end time of a business hours period, specified in local time using partial-time. RFC 3339 format. For example, `21:00:00` for a period ending at 9:00 in the evening. Note that the seconds value is always :00, but it is appended for conformance to the RFC.
     * @type {string}
     * @memberof BusinessHoursPeriod
     */
    'endLocalTime'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof BusinessHoursPeriod
     */
    'id'?: string | null;
    /**
     * The start time of a business hours period, specified in local time using partial-time. RFC 3339 format. For example, `8:30:00` for a period starting at 8:30 in the morning. Note that the seconds value is always :00, but it is appended for conformance to the RFC.
     * @type {string}
     * @memberof BusinessHoursPeriod
     */
    'startLocalTime'?: string | null;
}

