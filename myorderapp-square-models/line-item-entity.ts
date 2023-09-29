/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.2.8
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { LineItemModifierEntity } from './line-item-modifier-entity';

/**
 * 
 * @export
 * @interface LineItemEntity
 */
export interface LineItemEntity {
    /**
     * 
     * @type {string}
     * @memberof LineItemEntity
     */
    'id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LineItemEntity
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LineItemEntity
     */
    'quantity'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LineItemEntity
     */
    'note'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LineItemEntity
     */
    'variationName'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LineItemEntity
     */
    'currency'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof LineItemEntity
     */
    'basePriceMoney'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LineItemEntity
     */
    'variationTotalMoneyAmount'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LineItemEntity
     */
    'grossSalesMoneyAmount'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LineItemEntity
     */
    'totalTaxMoneyAmount'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LineItemEntity
     */
    'totalDiscountMoneyAmount'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LineItemEntity
     */
    'totalMoneyAmount'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof LineItemEntity
     */
    'totalServiceChargeMoneyAmount'?: number | null;
    /**
     * 
     * @type {Array<LineItemModifierEntity>}
     * @memberof LineItemEntity
     */
    'modifiers'?: Array<LineItemModifierEntity> | null;
}

