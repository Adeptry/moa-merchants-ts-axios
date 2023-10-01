/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.3.1
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
import { MerchantEntity } from '../myorderapp-square-models';
// @ts-ignore
import { SquarePostOauthBody } from '../myorderapp-square-models';
// @ts-ignore
import { StripeBillingSessionResponse } from '../myorderapp-square-models';
// @ts-ignore
import { StripePostCheckoutBody } from '../myorderapp-square-models';
// @ts-ignore
import { StripePostCheckoutResponse } from '../myorderapp-square-models';
/**
 * MerchantsApi - axios parameter creator
 * @export
 */
export const MerchantsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Merchant
         * @param {string} idOrPath 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMerchant: async (idOrPath: string, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'idOrPath' is not null or undefined
            assertParamExists('getMerchant', 'idOrPath', idOrPath)
            const localVarPath = `/v2/merchants/{idOrPath}`
                .replace(`{${"idOrPath"}}`, encodeURIComponent(String(idOrPath)));
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
         * @summary Get current Merchant
         * @param {boolean} [user] 
         * @param {boolean} [appConfig] 
         * @param {boolean} [locations] 
         * @param {boolean} [catalog] 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMerchantMe: async (user?: boolean, appConfig?: boolean, locations?: boolean, catalog?: boolean, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/merchants/me`;
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

            if (user !== undefined) {
                localVarQueryParameter['user'] = user;
            }

            if (appConfig !== undefined) {
                localVarQueryParameter['appConfig'] = appConfig;
            }

            if (locations !== undefined) {
                localVarQueryParameter['locations'] = locations;
            }

            if (catalog !== undefined) {
                localVarQueryParameter['catalog'] = catalog;
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
         * @summary Sync your Square Catalog
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSquareSyncMe: async (xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/merchants/me/square/sync`;
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
         * @summary Start create billing session url
         * @param {string} returnUrl 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStripeBillingSessionMe: async (returnUrl: string, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'returnUrl' is not null or undefined
            assertParamExists('getStripeBillingSessionMe', 'returnUrl', returnUrl)
            const localVarPath = `/v2/merchants/me/stripe/billing-session`;
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

            if (returnUrl !== undefined) {
                localVarQueryParameter['returnUrl'] = returnUrl;
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
         * @summary Create Merchant for current User
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postMerchantMe: async (xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/merchants/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
         * @summary Confirm Square Oauth
         * @param {SquarePostOauthBody} squarePostOauthBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postSquareOauthMe: async (squarePostOauthBody: SquarePostOauthBody, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'squarePostOauthBody' is not null or undefined
            assertParamExists('postSquareOauthMe', 'squarePostOauthBody', squarePostOauthBody)
            const localVarPath = `/v2/merchants/me/square/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(squarePostOauthBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Start Stripe checkout
         * @param {StripePostCheckoutBody} stripePostCheckoutBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postStripeCheckoutMe: async (stripePostCheckoutBody: StripePostCheckoutBody, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'stripePostCheckoutBody' is not null or undefined
            assertParamExists('postStripeCheckoutMe', 'stripePostCheckoutBody', stripePostCheckoutBody)
            const localVarPath = `/v2/merchants/me/stripe/checkout`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(stripePostCheckoutBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MerchantsApi - functional programming interface
 * @export
 */
export const MerchantsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MerchantsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get Merchant
         * @param {string} idOrPath 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMerchant(idOrPath: string, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MerchantEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMerchant(idOrPath, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get current Merchant
         * @param {boolean} [user] 
         * @param {boolean} [appConfig] 
         * @param {boolean} [locations] 
         * @param {boolean} [catalog] 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMerchantMe(user?: boolean, appConfig?: boolean, locations?: boolean, catalog?: boolean, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MerchantEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMerchantMe(user, appConfig, locations, catalog, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Sync your Square Catalog
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSquareSyncMe(xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSquareSyncMe(xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Start create billing session url
         * @param {string} returnUrl 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStripeBillingSessionMe(returnUrl: string, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StripeBillingSessionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStripeBillingSessionMe(returnUrl, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create Merchant for current User
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postMerchantMe(xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<MerchantEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postMerchantMe(xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Confirm Square Oauth
         * @param {SquarePostOauthBody} squarePostOauthBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postSquareOauthMe(squarePostOauthBody: SquarePostOauthBody, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postSquareOauthMe(squarePostOauthBody, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Start Stripe checkout
         * @param {StripePostCheckoutBody} stripePostCheckoutBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postStripeCheckoutMe(stripePostCheckoutBody: StripePostCheckoutBody, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StripePostCheckoutResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postStripeCheckoutMe(stripePostCheckoutBody, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * MerchantsApi - factory interface
 * @export
 */
export const MerchantsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MerchantsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get Merchant
         * @param {MerchantsApiGetMerchantRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMerchant(requestParameters: MerchantsApiGetMerchantRequest, options?: AxiosRequestConfig): AxiosPromise<MerchantEntity> {
            return localVarFp.getMerchant(requestParameters.idOrPath, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get current Merchant
         * @param {MerchantsApiGetMerchantMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMerchantMe(requestParameters: MerchantsApiGetMerchantMeRequest = {}, options?: AxiosRequestConfig): AxiosPromise<MerchantEntity> {
            return localVarFp.getMerchantMe(requestParameters.user, requestParameters.appConfig, requestParameters.locations, requestParameters.catalog, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sync your Square Catalog
         * @param {MerchantsApiGetSquareSyncMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSquareSyncMe(requestParameters: MerchantsApiGetSquareSyncMeRequest = {}, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getSquareSyncMe(requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Start create billing session url
         * @param {MerchantsApiGetStripeBillingSessionMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStripeBillingSessionMe(requestParameters: MerchantsApiGetStripeBillingSessionMeRequest, options?: AxiosRequestConfig): AxiosPromise<StripeBillingSessionResponse> {
            return localVarFp.getStripeBillingSessionMe(requestParameters.returnUrl, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create Merchant for current User
         * @param {MerchantsApiPostMerchantMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postMerchantMe(requestParameters: MerchantsApiPostMerchantMeRequest = {}, options?: AxiosRequestConfig): AxiosPromise<MerchantEntity> {
            return localVarFp.postMerchantMe(requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Confirm Square Oauth
         * @param {MerchantsApiPostSquareOauthMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postSquareOauthMe(requestParameters: MerchantsApiPostSquareOauthMeRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.postSquareOauthMe(requestParameters.squarePostOauthBody, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Start Stripe checkout
         * @param {MerchantsApiPostStripeCheckoutMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postStripeCheckoutMe(requestParameters: MerchantsApiPostStripeCheckoutMeRequest, options?: AxiosRequestConfig): AxiosPromise<StripePostCheckoutResponse> {
            return localVarFp.postStripeCheckoutMe(requestParameters.stripePostCheckoutBody, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getMerchant operation in MerchantsApi.
 * @export
 * @interface MerchantsApiGetMerchantRequest
 */
export interface MerchantsApiGetMerchantRequest {
    /**
     * 
     * @type {string}
     * @memberof MerchantsApiGetMerchant
     */
    readonly idOrPath: string

    /**
     * 
     * @type {string}
     * @memberof MerchantsApiGetMerchant
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for getMerchantMe operation in MerchantsApi.
 * @export
 * @interface MerchantsApiGetMerchantMeRequest
 */
export interface MerchantsApiGetMerchantMeRequest {
    /**
     * 
     * @type {boolean}
     * @memberof MerchantsApiGetMerchantMe
     */
    readonly user?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof MerchantsApiGetMerchantMe
     */
    readonly appConfig?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof MerchantsApiGetMerchantMe
     */
    readonly locations?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof MerchantsApiGetMerchantMe
     */
    readonly catalog?: boolean

    /**
     * 
     * @type {string}
     * @memberof MerchantsApiGetMerchantMe
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for getSquareSyncMe operation in MerchantsApi.
 * @export
 * @interface MerchantsApiGetSquareSyncMeRequest
 */
export interface MerchantsApiGetSquareSyncMeRequest {
    /**
     * 
     * @type {string}
     * @memberof MerchantsApiGetSquareSyncMe
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for getStripeBillingSessionMe operation in MerchantsApi.
 * @export
 * @interface MerchantsApiGetStripeBillingSessionMeRequest
 */
export interface MerchantsApiGetStripeBillingSessionMeRequest {
    /**
     * 
     * @type {string}
     * @memberof MerchantsApiGetStripeBillingSessionMe
     */
    readonly returnUrl: string

    /**
     * 
     * @type {string}
     * @memberof MerchantsApiGetStripeBillingSessionMe
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for postMerchantMe operation in MerchantsApi.
 * @export
 * @interface MerchantsApiPostMerchantMeRequest
 */
export interface MerchantsApiPostMerchantMeRequest {
    /**
     * 
     * @type {string}
     * @memberof MerchantsApiPostMerchantMe
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for postSquareOauthMe operation in MerchantsApi.
 * @export
 * @interface MerchantsApiPostSquareOauthMeRequest
 */
export interface MerchantsApiPostSquareOauthMeRequest {
    /**
     * 
     * @type {SquarePostOauthBody}
     * @memberof MerchantsApiPostSquareOauthMe
     */
    readonly squarePostOauthBody: SquarePostOauthBody

    /**
     * 
     * @type {string}
     * @memberof MerchantsApiPostSquareOauthMe
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for postStripeCheckoutMe operation in MerchantsApi.
 * @export
 * @interface MerchantsApiPostStripeCheckoutMeRequest
 */
export interface MerchantsApiPostStripeCheckoutMeRequest {
    /**
     * 
     * @type {StripePostCheckoutBody}
     * @memberof MerchantsApiPostStripeCheckoutMe
     */
    readonly stripePostCheckoutBody: StripePostCheckoutBody

    /**
     * 
     * @type {string}
     * @memberof MerchantsApiPostStripeCheckoutMe
     */
    readonly xCustomLang?: string
}

/**
 * MerchantsApi - object-oriented interface
 * @export
 * @class MerchantsApi
 * @extends {BaseAPI}
 */
export class MerchantsApi extends BaseAPI {
    /**
     * 
     * @summary Get Merchant
     * @param {MerchantsApiGetMerchantRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantsApi
     */
    public getMerchant(requestParameters: MerchantsApiGetMerchantRequest, options?: AxiosRequestConfig) {
        return MerchantsApiFp(this.configuration).getMerchant(requestParameters.idOrPath, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get current Merchant
     * @param {MerchantsApiGetMerchantMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantsApi
     */
    public getMerchantMe(requestParameters: MerchantsApiGetMerchantMeRequest = {}, options?: AxiosRequestConfig) {
        return MerchantsApiFp(this.configuration).getMerchantMe(requestParameters.user, requestParameters.appConfig, requestParameters.locations, requestParameters.catalog, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Sync your Square Catalog
     * @param {MerchantsApiGetSquareSyncMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantsApi
     */
    public getSquareSyncMe(requestParameters: MerchantsApiGetSquareSyncMeRequest = {}, options?: AxiosRequestConfig) {
        return MerchantsApiFp(this.configuration).getSquareSyncMe(requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Start create billing session url
     * @param {MerchantsApiGetStripeBillingSessionMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantsApi
     */
    public getStripeBillingSessionMe(requestParameters: MerchantsApiGetStripeBillingSessionMeRequest, options?: AxiosRequestConfig) {
        return MerchantsApiFp(this.configuration).getStripeBillingSessionMe(requestParameters.returnUrl, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create Merchant for current User
     * @param {MerchantsApiPostMerchantMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantsApi
     */
    public postMerchantMe(requestParameters: MerchantsApiPostMerchantMeRequest = {}, options?: AxiosRequestConfig) {
        return MerchantsApiFp(this.configuration).postMerchantMe(requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Confirm Square Oauth
     * @param {MerchantsApiPostSquareOauthMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantsApi
     */
    public postSquareOauthMe(requestParameters: MerchantsApiPostSquareOauthMeRequest, options?: AxiosRequestConfig) {
        return MerchantsApiFp(this.configuration).postSquareOauthMe(requestParameters.squarePostOauthBody, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Start Stripe checkout
     * @param {MerchantsApiPostStripeCheckoutMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantsApi
     */
    public postStripeCheckoutMe(requestParameters: MerchantsApiPostStripeCheckoutMeRequest, options?: AxiosRequestConfig) {
        return MerchantsApiFp(this.configuration).postStripeCheckoutMe(requestParameters.stripePostCheckoutBody, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }
}

