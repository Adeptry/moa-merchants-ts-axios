/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Merchants API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.19
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { CatalogImage } from './catalog-image';
// May contain unused imports in some cases
// @ts-ignore
import { ItemModifierList } from './item-modifier-list';
// May contain unused imports in some cases
// @ts-ignore
import { Variation } from './variation';

/**
 * 
 * @export
 * @interface Item
 */
export interface Item {
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    'description'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    'id'?: string | null;
    /**
     * 
     * @type {Array<CatalogImage>}
     * @memberof Item
     */
    'images'?: Array<CatalogImage> | null;
    /**
     * 
     * @type {Array<ItemModifierList>}
     * @memberof Item
     */
    'itemModifierLists'?: Array<ItemModifierList> | null;
    /**
     * 
     * @type {boolean}
     * @memberof Item
     */
    'moaEnabled'?: boolean | null;
    /**
     * 
     * @type {number}
     * @memberof Item
     */
    'moaOrdinal'?: number | null;
    /**
     * 
     * @type {string}
     * @memberof Item
     */
    'name'?: string | null;
    /**
     * 
     * @type {Array<Variation>}
     * @memberof Item
     */
    'variations'?: Array<Variation> | null;
}

