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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Merchant } from '../moa-merchants-models';
// @ts-ignore
import { NestError } from '../moa-merchants-models';
// @ts-ignore
import { StripeBillingPortalCreateInput } from '../moa-merchants-models';
// @ts-ignore
import { StripeBillingPortalCreateOutput } from '../moa-merchants-models';
// @ts-ignore
import { StripeCheckoutCreateDto } from '../moa-merchants-models';
// @ts-ignore
import { StripeCheckoutDto } from '../moa-merchants-models';
/**
 * MerchantsApi - axios parameter creator
 * @export
 */
export const MerchantsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Confirm Square Oauth
         * @param {string} oauthAccessCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        confirmSquareOauth: async (oauthAccessCode: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'oauthAccessCode' is not null or undefined
            assertParamExists('confirmSquareOauth', 'oauthAccessCode', oauthAccessCode)
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

            if (oauthAccessCode !== undefined) {
                localVarQueryParameter['oauthAccessCode'] = oauthAccessCode;
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMerchant: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/merchants`;
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
         * @param {StripeBillingPortalCreateInput} stripeBillingPortalCreateInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createStripeBillingSessionUrl: async (stripeBillingPortalCreateInput: StripeBillingPortalCreateInput, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'stripeBillingPortalCreateInput' is not null or undefined
            assertParamExists('createStripeBillingSessionUrl', 'stripeBillingPortalCreateInput', stripeBillingPortalCreateInput)
            const localVarPath = `/v2/merchants/me/stripe/billing-session/create`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(stripeBillingPortalCreateInput, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Start Stripe checkout
         * @param {StripeCheckoutCreateDto} stripeCheckoutCreateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createStripeCheckout: async (stripeCheckoutCreateDto: StripeCheckoutCreateDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'stripeCheckoutCreateDto' is not null or undefined
            assertParamExists('createStripeCheckout', 'stripeCheckoutCreateDto', stripeCheckoutCreateDto)
            const localVarPath = `/v2/merchants/me/stripe/checkout/create`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(stripeCheckoutCreateDto, localVarRequestOptions, configuration)

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
         * @param {boolean} [androidZipFile] 
         * @param {boolean} [iosZipFile] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentMerchant: async (user?: boolean, appConfig?: boolean, locations?: boolean, androidZipFile?: boolean, iosZipFile?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
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

            if (androidZipFile !== undefined) {
                localVarQueryParameter['androidZipFile'] = androidZipFile;
            }

            if (iosZipFile !== undefined) {
                localVarQueryParameter['iosZipFile'] = iosZipFile;
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncSquareCatalog: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/merchants/me/square/catalog/sync`;
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
         * @summary Sync your Square Locations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncSquareLocations: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/merchants/me/square/locations/sync`;
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


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

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
         * @summary Confirm Square Oauth
         * @param {string} oauthAccessCode 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async confirmSquareOauth(oauthAccessCode: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.confirmSquareOauth(oauthAccessCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create Merchant for current User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createMerchant(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createMerchant(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Start create billing session url
         * @param {StripeBillingPortalCreateInput} stripeBillingPortalCreateInput 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createStripeBillingSessionUrl(stripeBillingPortalCreateInput: StripeBillingPortalCreateInput, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StripeBillingPortalCreateOutput>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createStripeBillingSessionUrl(stripeBillingPortalCreateInput, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Start Stripe checkout
         * @param {StripeCheckoutCreateDto} stripeCheckoutCreateDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createStripeCheckout(stripeCheckoutCreateDto: StripeCheckoutCreateDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StripeCheckoutDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createStripeCheckout(stripeCheckoutCreateDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get current Merchant
         * @param {boolean} [user] 
         * @param {boolean} [appConfig] 
         * @param {boolean} [locations] 
         * @param {boolean} [androidZipFile] 
         * @param {boolean} [iosZipFile] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCurrentMerchant(user?: boolean, appConfig?: boolean, locations?: boolean, androidZipFile?: boolean, iosZipFile?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Merchant>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCurrentMerchant(user, appConfig, locations, androidZipFile, iosZipFile, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Sync your Square Catalog
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async syncSquareCatalog(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.syncSquareCatalog(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Sync your Square Locations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async syncSquareLocations(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.syncSquareLocations(options);
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
         * @summary Confirm Square Oauth
         * @param {MerchantsApiConfirmSquareOauthRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        confirmSquareOauth(requestParameters: MerchantsApiConfirmSquareOauthRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.confirmSquareOauth(requestParameters.oauthAccessCode, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create Merchant for current User
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createMerchant(options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.createMerchant(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Start create billing session url
         * @param {MerchantsApiCreateStripeBillingSessionUrlRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createStripeBillingSessionUrl(requestParameters: MerchantsApiCreateStripeBillingSessionUrlRequest, options?: AxiosRequestConfig): AxiosPromise<StripeBillingPortalCreateOutput> {
            return localVarFp.createStripeBillingSessionUrl(requestParameters.stripeBillingPortalCreateInput, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Start Stripe checkout
         * @param {MerchantsApiCreateStripeCheckoutRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createStripeCheckout(requestParameters: MerchantsApiCreateStripeCheckoutRequest, options?: AxiosRequestConfig): AxiosPromise<StripeCheckoutDto> {
            return localVarFp.createStripeCheckout(requestParameters.stripeCheckoutCreateDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get current Merchant
         * @param {MerchantsApiGetCurrentMerchantRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentMerchant(requestParameters: MerchantsApiGetCurrentMerchantRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Merchant> {
            return localVarFp.getCurrentMerchant(requestParameters.user, requestParameters.appConfig, requestParameters.locations, requestParameters.androidZipFile, requestParameters.iosZipFile, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sync your Square Catalog
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncSquareCatalog(options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.syncSquareCatalog(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Sync your Square Locations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        syncSquareLocations(options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.syncSquareLocations(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for confirmSquareOauth operation in MerchantsApi.
 * @export
 * @interface MerchantsApiConfirmSquareOauthRequest
 */
export interface MerchantsApiConfirmSquareOauthRequest {
    /**
     * 
     * @type {string}
     * @memberof MerchantsApiConfirmSquareOauth
     */
    readonly oauthAccessCode: string
}

/**
 * Request parameters for createStripeBillingSessionUrl operation in MerchantsApi.
 * @export
 * @interface MerchantsApiCreateStripeBillingSessionUrlRequest
 */
export interface MerchantsApiCreateStripeBillingSessionUrlRequest {
    /**
     * 
     * @type {StripeBillingPortalCreateInput}
     * @memberof MerchantsApiCreateStripeBillingSessionUrl
     */
    readonly stripeBillingPortalCreateInput: StripeBillingPortalCreateInput
}

/**
 * Request parameters for createStripeCheckout operation in MerchantsApi.
 * @export
 * @interface MerchantsApiCreateStripeCheckoutRequest
 */
export interface MerchantsApiCreateStripeCheckoutRequest {
    /**
     * 
     * @type {StripeCheckoutCreateDto}
     * @memberof MerchantsApiCreateStripeCheckout
     */
    readonly stripeCheckoutCreateDto: StripeCheckoutCreateDto
}

/**
 * Request parameters for getCurrentMerchant operation in MerchantsApi.
 * @export
 * @interface MerchantsApiGetCurrentMerchantRequest
 */
export interface MerchantsApiGetCurrentMerchantRequest {
    /**
     * 
     * @type {boolean}
     * @memberof MerchantsApiGetCurrentMerchant
     */
    readonly user?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof MerchantsApiGetCurrentMerchant
     */
    readonly appConfig?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof MerchantsApiGetCurrentMerchant
     */
    readonly locations?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof MerchantsApiGetCurrentMerchant
     */
    readonly androidZipFile?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof MerchantsApiGetCurrentMerchant
     */
    readonly iosZipFile?: boolean
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
     * @summary Confirm Square Oauth
     * @param {MerchantsApiConfirmSquareOauthRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantsApi
     */
    public confirmSquareOauth(requestParameters: MerchantsApiConfirmSquareOauthRequest, options?: AxiosRequestConfig) {
        return MerchantsApiFp(this.configuration).confirmSquareOauth(requestParameters.oauthAccessCode, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create Merchant for current User
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantsApi
     */
    public createMerchant(options?: AxiosRequestConfig) {
        return MerchantsApiFp(this.configuration).createMerchant(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Start create billing session url
     * @param {MerchantsApiCreateStripeBillingSessionUrlRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantsApi
     */
    public createStripeBillingSessionUrl(requestParameters: MerchantsApiCreateStripeBillingSessionUrlRequest, options?: AxiosRequestConfig) {
        return MerchantsApiFp(this.configuration).createStripeBillingSessionUrl(requestParameters.stripeBillingPortalCreateInput, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Start Stripe checkout
     * @param {MerchantsApiCreateStripeCheckoutRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantsApi
     */
    public createStripeCheckout(requestParameters: MerchantsApiCreateStripeCheckoutRequest, options?: AxiosRequestConfig) {
        return MerchantsApiFp(this.configuration).createStripeCheckout(requestParameters.stripeCheckoutCreateDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get current Merchant
     * @param {MerchantsApiGetCurrentMerchantRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantsApi
     */
    public getCurrentMerchant(requestParameters: MerchantsApiGetCurrentMerchantRequest = {}, options?: AxiosRequestConfig) {
        return MerchantsApiFp(this.configuration).getCurrentMerchant(requestParameters.user, requestParameters.appConfig, requestParameters.locations, requestParameters.androidZipFile, requestParameters.iosZipFile, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Sync your Square Catalog
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantsApi
     */
    public syncSquareCatalog(options?: AxiosRequestConfig) {
        return MerchantsApiFp(this.configuration).syncSquareCatalog(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Sync your Square Locations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MerchantsApi
     */
    public syncSquareLocations(options?: AxiosRequestConfig) {
        return MerchantsApiFp(this.configuration).syncSquareLocations(options).then((request) => request(this.axios, this.basePath));
    }
}

