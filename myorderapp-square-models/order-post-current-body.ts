/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.7
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { OrdersVariationLineItemInput } from './orders-variation-line-item-input';

/**
 * 
 * @export
 * @interface OrderPostCurrentBody
 */
export interface OrderPostCurrentBody {
    /**
     * 
     * @type {Array<OrdersVariationLineItemInput>}
     * @memberof OrderPostCurrentBody
     */
    'variations'?: Array<OrdersVariationLineItemInput> | null;
}

