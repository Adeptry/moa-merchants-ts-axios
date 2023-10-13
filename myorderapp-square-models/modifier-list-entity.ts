/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.4.2
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
import { ModifierEntity } from './modifier-entity';

/**
 * 
 * @export
 * @interface ModifierListEntity
 */
export interface ModifierListEntity {
    /**
     * 
     * @type {string}
     * @memberof ModifierListEntity
     */
    'id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ModifierListEntity
     */
    'name'?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ModifierListEntity
     */
    'ordinal'?: number | null;
    /**
     * 
     * @type {MoaSelectionType}
     * @memberof ModifierListEntity
     */
    'selectionType'?: MoaSelectionType;
    /**
     * 
     * @type {Array<ModifierEntity>}
     * @memberof ModifierListEntity
     */
    'modifiers'?: Array<ModifierEntity> | null;
}



