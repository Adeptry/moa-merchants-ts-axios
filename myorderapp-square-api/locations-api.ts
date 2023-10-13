/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.4.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorResponse } from '../myorderapp-square-models';
// @ts-ignore
import { LocationEntity } from '../myorderapp-square-models';
// @ts-ignore
import { LocationPaginatedResponse } from '../myorderapp-square-models';
// @ts-ignore
import { LocationPatchBody } from '../myorderapp-square-models';
// @ts-ignore
import { LocationsPatchBody } from '../myorderapp-square-models';
/**
 * LocationsApi - axios parameter creator
 * @export
 */
export const LocationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get a Location with ID
         * @param {string} id 
         * @param {GetLocationActingAsEnum} actingAs 
         * @param {string} [merchantIdOrPath] 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocation: async (id: string, actingAs: GetLocationActingAsEnum, merchantIdOrPath?: string, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getLocation', 'id', id)
            // verify required parameter 'actingAs' is not null or undefined
            assertParamExists('getLocation', 'actingAs', actingAs)
            const localVarPath = `/v2/locations/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            if (actingAs !== undefined) {
                localVarQueryParameter['actingAs'] = actingAs;
            }

            if (merchantIdOrPath !== undefined) {
                localVarQueryParameter['merchantIdOrPath'] = merchantIdOrPath;
            }

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = String(xCustomLang);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Locations for Merchant
         * @param {string} merchantIdOrPath 
         * @param {number} [page] 
         * @param {number} [limit] 
         * @param {boolean} [address] 
         * @param {boolean} [businessHours] 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocations: async (merchantIdOrPath: string, page?: number, limit?: number, address?: boolean, businessHours?: boolean, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'merchantIdOrPath' is not null or undefined
            assertParamExists('getLocations', 'merchantIdOrPath', merchantIdOrPath)
            const localVarPath = `/v2/locations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            if (merchantIdOrPath !== undefined) {
                localVarQueryParameter['merchantIdOrPath'] = merchantIdOrPath;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (address !== undefined) {
                localVarQueryParameter['address'] = address;
            }

            if (businessHours !== undefined) {
                localVarQueryParameter['businessHours'] = businessHours;
            }

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = String(xCustomLang);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all your Locations
         * @param {GetLocationsMeActingAsEnum} [actingAs] 
         * @param {number} [page] 
         * @param {number} [limit] 
         * @param {boolean} [address] 
         * @param {boolean} [businessHours] 
         * @param {string} [merchantIdOrPath] 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocationsMe: async (actingAs?: GetLocationsMeActingAsEnum, page?: number, limit?: number, address?: boolean, businessHours?: boolean, merchantIdOrPath?: string, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/locations/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            if (actingAs !== undefined) {
                localVarQueryParameter['actingAs'] = actingAs;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (address !== undefined) {
                localVarQueryParameter['address'] = address;
            }

            if (businessHours !== undefined) {
                localVarQueryParameter['businessHours'] = businessHours;
            }

            if (merchantIdOrPath !== undefined) {
                localVarQueryParameter['merchantIdOrPath'] = merchantIdOrPath;
            }

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = String(xCustomLang);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update Locations
         * @param {Array<LocationsPatchBody>} locationsPatchBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchManyLocations: async (locationsPatchBody: Array<LocationsPatchBody>, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'locationsPatchBody' is not null or undefined
            assertParamExists('patchManyLocations', 'locationsPatchBody', locationsPatchBody)
            const localVarPath = `/v2/locations`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = String(xCustomLang);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(locationsPatchBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update a Location
         * @param {string} id 
         * @param {LocationPatchBody} locationPatchBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchOneLocation: async (id: string, locationPatchBody: LocationPatchBody, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('patchOneLocation', 'id', id)
            // verify required parameter 'locationPatchBody' is not null or undefined
            assertParamExists('patchOneLocation', 'locationPatchBody', locationPatchBody)
            const localVarPath = `/v2/locations/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = String(xCustomLang);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(locationPatchBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LocationsApi - functional programming interface
 * @export
 */
export const LocationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LocationsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get a Location with ID
         * @param {string} id 
         * @param {GetLocationActingAsEnum} actingAs 
         * @param {string} [merchantIdOrPath] 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLocation(id: string, actingAs: GetLocationActingAsEnum, merchantIdOrPath?: string, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LocationEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLocation(id, actingAs, merchantIdOrPath, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Locations for Merchant
         * @param {string} merchantIdOrPath 
         * @param {number} [page] 
         * @param {number} [limit] 
         * @param {boolean} [address] 
         * @param {boolean} [businessHours] 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLocations(merchantIdOrPath: string, page?: number, limit?: number, address?: boolean, businessHours?: boolean, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LocationPaginatedResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLocations(merchantIdOrPath, page, limit, address, businessHours, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get all your Locations
         * @param {GetLocationsMeActingAsEnum} [actingAs] 
         * @param {number} [page] 
         * @param {number} [limit] 
         * @param {boolean} [address] 
         * @param {boolean} [businessHours] 
         * @param {string} [merchantIdOrPath] 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLocationsMe(actingAs?: GetLocationsMeActingAsEnum, page?: number, limit?: number, address?: boolean, businessHours?: boolean, merchantIdOrPath?: string, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LocationPaginatedResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLocationsMe(actingAs, page, limit, address, businessHours, merchantIdOrPath, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update Locations
         * @param {Array<LocationsPatchBody>} locationsPatchBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchManyLocations(locationsPatchBody: Array<LocationsPatchBody>, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<LocationEntity>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchManyLocations(locationsPatchBody, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update a Location
         * @param {string} id 
         * @param {LocationPatchBody} locationPatchBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchOneLocation(id: string, locationPatchBody: LocationPatchBody, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LocationEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchOneLocation(id, locationPatchBody, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LocationsApi - factory interface
 * @export
 */
export const LocationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LocationsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get a Location with ID
         * @param {LocationsApiGetLocationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocation(requestParameters: LocationsApiGetLocationRequest, options?: AxiosRequestConfig): AxiosPromise<LocationEntity> {
            return localVarFp.getLocation(requestParameters.id, requestParameters.actingAs, requestParameters.merchantIdOrPath, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Locations for Merchant
         * @param {LocationsApiGetLocationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocations(requestParameters: LocationsApiGetLocationsRequest, options?: AxiosRequestConfig): AxiosPromise<LocationPaginatedResponse> {
            return localVarFp.getLocations(requestParameters.merchantIdOrPath, requestParameters.page, requestParameters.limit, requestParameters.address, requestParameters.businessHours, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all your Locations
         * @param {LocationsApiGetLocationsMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocationsMe(requestParameters: LocationsApiGetLocationsMeRequest = {}, options?: AxiosRequestConfig): AxiosPromise<LocationPaginatedResponse> {
            return localVarFp.getLocationsMe(requestParameters.actingAs, requestParameters.page, requestParameters.limit, requestParameters.address, requestParameters.businessHours, requestParameters.merchantIdOrPath, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Locations
         * @param {LocationsApiPatchManyLocationsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchManyLocations(requestParameters: LocationsApiPatchManyLocationsRequest, options?: AxiosRequestConfig): AxiosPromise<Array<LocationEntity>> {
            return localVarFp.patchManyLocations(requestParameters.locationsPatchBody, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a Location
         * @param {LocationsApiPatchOneLocationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchOneLocation(requestParameters: LocationsApiPatchOneLocationRequest, options?: AxiosRequestConfig): AxiosPromise<LocationEntity> {
            return localVarFp.patchOneLocation(requestParameters.id, requestParameters.locationPatchBody, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getLocation operation in LocationsApi.
 * @export
 * @interface LocationsApiGetLocationRequest
 */
export interface LocationsApiGetLocationRequest {
    /**
     * 
     * @type {string}
     * @memberof LocationsApiGetLocation
     */
    readonly id: string

    /**
     * 
     * @type {'merchant' | 'customer'}
     * @memberof LocationsApiGetLocation
     */
    readonly actingAs: GetLocationActingAsEnum

    /**
     * 
     * @type {string}
     * @memberof LocationsApiGetLocation
     */
    readonly merchantIdOrPath?: string

    /**
     * 
     * @type {string}
     * @memberof LocationsApiGetLocation
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for getLocations operation in LocationsApi.
 * @export
 * @interface LocationsApiGetLocationsRequest
 */
export interface LocationsApiGetLocationsRequest {
    /**
     * 
     * @type {string}
     * @memberof LocationsApiGetLocations
     */
    readonly merchantIdOrPath: string

    /**
     * 
     * @type {number}
     * @memberof LocationsApiGetLocations
     */
    readonly page?: number

    /**
     * 
     * @type {number}
     * @memberof LocationsApiGetLocations
     */
    readonly limit?: number

    /**
     * 
     * @type {boolean}
     * @memberof LocationsApiGetLocations
     */
    readonly address?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof LocationsApiGetLocations
     */
    readonly businessHours?: boolean

    /**
     * 
     * @type {string}
     * @memberof LocationsApiGetLocations
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for getLocationsMe operation in LocationsApi.
 * @export
 * @interface LocationsApiGetLocationsMeRequest
 */
export interface LocationsApiGetLocationsMeRequest {
    /**
     * 
     * @type {'merchant' | 'customer'}
     * @memberof LocationsApiGetLocationsMe
     */
    readonly actingAs?: GetLocationsMeActingAsEnum

    /**
     * 
     * @type {number}
     * @memberof LocationsApiGetLocationsMe
     */
    readonly page?: number

    /**
     * 
     * @type {number}
     * @memberof LocationsApiGetLocationsMe
     */
    readonly limit?: number

    /**
     * 
     * @type {boolean}
     * @memberof LocationsApiGetLocationsMe
     */
    readonly address?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof LocationsApiGetLocationsMe
     */
    readonly businessHours?: boolean

    /**
     * 
     * @type {string}
     * @memberof LocationsApiGetLocationsMe
     */
    readonly merchantIdOrPath?: string

    /**
     * 
     * @type {string}
     * @memberof LocationsApiGetLocationsMe
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for patchManyLocations operation in LocationsApi.
 * @export
 * @interface LocationsApiPatchManyLocationsRequest
 */
export interface LocationsApiPatchManyLocationsRequest {
    /**
     * 
     * @type {Array<LocationsPatchBody>}
     * @memberof LocationsApiPatchManyLocations
     */
    readonly locationsPatchBody: Array<LocationsPatchBody>

    /**
     * 
     * @type {string}
     * @memberof LocationsApiPatchManyLocations
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for patchOneLocation operation in LocationsApi.
 * @export
 * @interface LocationsApiPatchOneLocationRequest
 */
export interface LocationsApiPatchOneLocationRequest {
    /**
     * 
     * @type {string}
     * @memberof LocationsApiPatchOneLocation
     */
    readonly id: string

    /**
     * 
     * @type {LocationPatchBody}
     * @memberof LocationsApiPatchOneLocation
     */
    readonly locationPatchBody: LocationPatchBody

    /**
     * 
     * @type {string}
     * @memberof LocationsApiPatchOneLocation
     */
    readonly xCustomLang?: string
}

/**
 * LocationsApi - object-oriented interface
 * @export
 * @class LocationsApi
 * @extends {BaseAPI}
 */
export class LocationsApi extends BaseAPI {
    /**
     * 
     * @summary Get a Location with ID
     * @param {LocationsApiGetLocationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    public getLocation(requestParameters: LocationsApiGetLocationRequest, options?: AxiosRequestConfig) {
        return LocationsApiFp(this.configuration).getLocation(requestParameters.id, requestParameters.actingAs, requestParameters.merchantIdOrPath, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Locations for Merchant
     * @param {LocationsApiGetLocationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    public getLocations(requestParameters: LocationsApiGetLocationsRequest, options?: AxiosRequestConfig) {
        return LocationsApiFp(this.configuration).getLocations(requestParameters.merchantIdOrPath, requestParameters.page, requestParameters.limit, requestParameters.address, requestParameters.businessHours, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all your Locations
     * @param {LocationsApiGetLocationsMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    public getLocationsMe(requestParameters: LocationsApiGetLocationsMeRequest = {}, options?: AxiosRequestConfig) {
        return LocationsApiFp(this.configuration).getLocationsMe(requestParameters.actingAs, requestParameters.page, requestParameters.limit, requestParameters.address, requestParameters.businessHours, requestParameters.merchantIdOrPath, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update Locations
     * @param {LocationsApiPatchManyLocationsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    public patchManyLocations(requestParameters: LocationsApiPatchManyLocationsRequest, options?: AxiosRequestConfig) {
        return LocationsApiFp(this.configuration).patchManyLocations(requestParameters.locationsPatchBody, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update a Location
     * @param {LocationsApiPatchOneLocationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApi
     */
    public patchOneLocation(requestParameters: LocationsApiPatchOneLocationRequest, options?: AxiosRequestConfig) {
        return LocationsApiFp(this.configuration).patchOneLocation(requestParameters.id, requestParameters.locationPatchBody, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetLocationActingAsEnum = {
    Merchant: 'merchant',
    Customer: 'customer'
} as const;
export type GetLocationActingAsEnum = typeof GetLocationActingAsEnum[keyof typeof GetLocationActingAsEnum];
/**
 * @export
 */
export const GetLocationsMeActingAsEnum = {
    Merchant: 'merchant',
    Customer: 'customer'
} as const;
export type GetLocationsMeActingAsEnum = typeof GetLocationsMeActingAsEnum[keyof typeof GetLocationsMeActingAsEnum];
