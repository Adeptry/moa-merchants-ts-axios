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
import { ItemEntity } from './item-entity';
// May contain unused imports in some cases
// @ts-ignore
import { ModifierListEntity } from './modifier-list-entity';

/**
 * 
 * @export
 * @interface ItemModifierListEntity
 */
export interface ItemModifierListEntity {
    /**
     * 
     * @type {boolean}
     * @memberof ItemModifierListEntity
     */
    'enabled'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof ItemModifierListEntity
     */
    'id'?: string | null;
    /**
     * 
     * @type {ItemEntity}
     * @memberof ItemModifierListEntity
     */
    'item'?: ItemEntity | null;
    /**
     * 
     * @type {number}
     * @memberof ItemModifierListEntity
     */
    'maxSelectedModifiers'?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ItemModifierListEntity
     */
    'minSelectedModifiers'?: number | null;
    /**
     * 
     * @type {ModifierListEntity}
     * @memberof ItemModifierListEntity
     */
    'modifierList'?: ModifierListEntity | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ItemModifierListEntity
     */
    'onByDefaultModifierIds'?: Array<string> | null;
}

