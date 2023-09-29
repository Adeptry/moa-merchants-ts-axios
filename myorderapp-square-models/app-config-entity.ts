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
import { ThemeModeEnum } from './theme-mode-enum';

/**
 * 
 * @export
 * @interface AppConfigEntity
 */
export interface AppConfigEntity {
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    'path'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppConfigEntity
     */
    'enabled'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    'seedColor'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    'fontFamily'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppConfigEntity
     */
    'useMaterial3'?: boolean | null;
    /**
     * 
     * @type {ThemeModeEnum}
     * @memberof AppConfigEntity
     */
    'themeMode'?: ThemeModeEnum;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    'message'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    'blockingMessage'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    'minimumVersion'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigEntity
     */
    'iconFileUrl'?: string | null;
}



