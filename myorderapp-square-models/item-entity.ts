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
import { CatalogImageEntity } from './catalog-image-entity';
// May contain unused imports in some cases
// @ts-ignore
import { ItemModifierListEntity } from './item-modifier-list-entity';
// May contain unused imports in some cases
// @ts-ignore
import { VariationEntity } from './variation-entity';

/**
 * 
 * @export
 * @interface ItemEntity
 */
export interface ItemEntity {
    /**
     * 
     * @type {string}
     * @memberof ItemEntity
     */
    'description'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ItemEntity
     */
    'id'?: string | null;
    /**
     * 
     * @type {Array<CatalogImageEntity>}
     * @memberof ItemEntity
     */
    'images'?: Array<CatalogImageEntity> | null;
    /**
     * 
     * @type {Array<ItemModifierListEntity>}
     * @memberof ItemEntity
     */
    'itemModifierLists'?: Array<ItemModifierListEntity> | null;
    /**
     * 
     * @type {boolean}
     * @memberof ItemEntity
     */
    'moaEnabled'?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof ItemEntity
     */
    'moaOrdinal'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ItemEntity
     */
    'name'?: string | null;
    /**
     * 
     * @type {Array<VariationEntity>}
     * @memberof ItemEntity
     */
    'variations'?: Array<VariationEntity> | null;
}

