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


// May contain unused imports in some cases
// @ts-ignore
import { MoaSelectionType } from './moa-selection-type';
// May contain unused imports in some cases
// @ts-ignore
import { Modifier } from './modifier';

/**
 * 
 * @export
 * @interface ModifierList
 */
export interface ModifierList {
    /**
     * 
     * @type {string}
     * @memberof ModifierList
     */
    'id'?: string | null;
    /**
     * 
     * @type {Array<Modifier>}
     * @memberof ModifierList
     */
    'modifiers'?: Array<Modifier> | null;
    /**
     * 
     * @type {string}
     * @memberof ModifierList
     */
    'name'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ModifierList
     */
    'ordinal'?: number | null;
    /**
     * 
     * @type {MoaSelectionType}
     * @memberof ModifierList
     */
    'selectionType'?: MoaSelectionType;
}



