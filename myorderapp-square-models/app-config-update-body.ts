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
 * @interface AppConfigUpdateBody
 */
export interface AppConfigUpdateBody {
    /**
     * 
     * @type {string}
     * @memberof AppConfigUpdateBody
     */
    'name'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigUpdateBody
     */
    'seedColor'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AppConfigUpdateBody
     */
    'fontFamily'?: string | null;
    /**
     * 
     * @type {boolean}
     * @memberof AppConfigUpdateBody
     */
    'useMaterial3'?: boolean | null;
    /**
     * 
     * @type {ThemeModeEnum}
     * @memberof AppConfigUpdateBody
     */
    'themeMode'?: ThemeModeEnum;
}



