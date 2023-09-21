/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Merchants API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.1.0
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
import { AppInstallUpdateDto } from '../moa-merchants-models';
// @ts-ignore
import { Customer } from '../moa-merchants-models';
// @ts-ignore
import { CustomerUpdateDto } from '../moa-merchants-models';
// @ts-ignore
import { CustomersPaginatedResponse } from '../moa-merchants-models';
// @ts-ignore
import { NestError } from '../moa-merchants-models';
/**
 * CustomersApi - axios parameter creator
 * @export
 */
export const CustomersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get my Customers
         * @param {number} [page] 
         * @param {number} [limit] 
         * @param {any} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getManyCustomers: async (page?: number, limit?: number, xCustomLang?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/customers`;
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

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = typeof xCustomLang === 'string'
                    ? xCustomLang
                    : JSON.stringify(xCustomLang);
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
         * @summary Get current Customer
         * @param {string} merchantIdOrPath 
         * @param {boolean} [user] 
         * @param {boolean} [merchant] 
         * @param {boolean} [currentOrder] 
         * @param {boolean} [preferredLocation] 
         * @param {any} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMeCustomer: async (merchantIdOrPath: string, user?: boolean, merchant?: boolean, currentOrder?: boolean, preferredLocation?: boolean, xCustomLang?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'merchantIdOrPath' is not null or undefined
            assertParamExists('getMeCustomer', 'merchantIdOrPath', merchantIdOrPath)
            const localVarPath = `/v2/customers/me`;
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

            if (merchant !== undefined) {
                localVarQueryParameter['merchant'] = merchant;
            }

            if (currentOrder !== undefined) {
                localVarQueryParameter['currentOrder'] = currentOrder;
            }

            if (preferredLocation !== undefined) {
                localVarQueryParameter['preferredLocation'] = preferredLocation;
            }

            if (merchantIdOrPath !== undefined) {
                localVarQueryParameter['merchantIdOrPath'] = merchantIdOrPath;
            }

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = typeof xCustomLang === 'string'
                    ? xCustomLang
                    : JSON.stringify(xCustomLang);
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
         * @summary Update your Customer
         * @param {string} merchantIdOrPath 
         * @param {CustomerUpdateDto} customerUpdateDto 
         * @param {any} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchMeCustomer: async (merchantIdOrPath: string, customerUpdateDto: CustomerUpdateDto, xCustomLang?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'merchantIdOrPath' is not null or undefined
            assertParamExists('patchMeCustomer', 'merchantIdOrPath', merchantIdOrPath)
            // verify required parameter 'customerUpdateDto' is not null or undefined
            assertParamExists('patchMeCustomer', 'customerUpdateDto', customerUpdateDto)
            const localVarPath = `/v2/customers/me`;
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

            if (merchantIdOrPath !== undefined) {
                localVarQueryParameter['merchantIdOrPath'] = merchantIdOrPath;
            }

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = typeof xCustomLang === 'string'
                    ? xCustomLang
                    : JSON.stringify(xCustomLang);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(customerUpdateDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create Customer for current User
         * @param {string} merchantIdOrPath 
         * @param {any} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postMeCustomer: async (merchantIdOrPath: string, xCustomLang?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'merchantIdOrPath' is not null or undefined
            assertParamExists('postMeCustomer', 'merchantIdOrPath', merchantIdOrPath)
            const localVarPath = `/v2/customers/me`;
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

            if (merchantIdOrPath !== undefined) {
                localVarQueryParameter['merchantIdOrPath'] = merchantIdOrPath;
            }

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = typeof xCustomLang === 'string'
                    ? xCustomLang
                    : JSON.stringify(xCustomLang);
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
         * @summary Create or update Customer App Install
         * @param {string} merchantIdOrPath 
         * @param {AppInstallUpdateDto} appInstallUpdateDto 
         * @param {any} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAppInstall: async (merchantIdOrPath: string, appInstallUpdateDto: AppInstallUpdateDto, xCustomLang?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'merchantIdOrPath' is not null or undefined
            assertParamExists('updateAppInstall', 'merchantIdOrPath', merchantIdOrPath)
            // verify required parameter 'appInstallUpdateDto' is not null or undefined
            assertParamExists('updateAppInstall', 'appInstallUpdateDto', appInstallUpdateDto)
            const localVarPath = `/v2/customers/me/app-install`;
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

            if (merchantIdOrPath !== undefined) {
                localVarQueryParameter['merchantIdOrPath'] = merchantIdOrPath;
            }

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = typeof xCustomLang === 'string'
                    ? xCustomLang
                    : JSON.stringify(xCustomLang);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(appInstallUpdateDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CustomersApi - functional programming interface
 * @export
 */
export const CustomersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CustomersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get my Customers
         * @param {number} [page] 
         * @param {number} [limit] 
         * @param {any} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getManyCustomers(page?: number, limit?: number, xCustomLang?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomersPaginatedResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getManyCustomers(page, limit, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get current Customer
         * @param {string} merchantIdOrPath 
         * @param {boolean} [user] 
         * @param {boolean} [merchant] 
         * @param {boolean} [currentOrder] 
         * @param {boolean} [preferredLocation] 
         * @param {any} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMeCustomer(merchantIdOrPath: string, user?: boolean, merchant?: boolean, currentOrder?: boolean, preferredLocation?: boolean, xCustomLang?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Customer>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMeCustomer(merchantIdOrPath, user, merchant, currentOrder, preferredLocation, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update your Customer
         * @param {string} merchantIdOrPath 
         * @param {CustomerUpdateDto} customerUpdateDto 
         * @param {any} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchMeCustomer(merchantIdOrPath: string, customerUpdateDto: CustomerUpdateDto, xCustomLang?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Customer>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchMeCustomer(merchantIdOrPath, customerUpdateDto, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create Customer for current User
         * @param {string} merchantIdOrPath 
         * @param {any} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postMeCustomer(merchantIdOrPath: string, xCustomLang?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Customer>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postMeCustomer(merchantIdOrPath, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create or update Customer App Install
         * @param {string} merchantIdOrPath 
         * @param {AppInstallUpdateDto} appInstallUpdateDto 
         * @param {any} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAppInstall(merchantIdOrPath: string, appInstallUpdateDto: AppInstallUpdateDto, xCustomLang?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateAppInstall(merchantIdOrPath, appInstallUpdateDto, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CustomersApi - factory interface
 * @export
 */
export const CustomersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CustomersApiFp(configuration)
    return {
        /**
         * 
         * @summary Get my Customers
         * @param {CustomersApiGetManyCustomersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getManyCustomers(requestParameters: CustomersApiGetManyCustomersRequest = {}, options?: AxiosRequestConfig): AxiosPromise<CustomersPaginatedResponse> {
            return localVarFp.getManyCustomers(requestParameters.page, requestParameters.limit, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get current Customer
         * @param {CustomersApiGetMeCustomerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMeCustomer(requestParameters: CustomersApiGetMeCustomerRequest, options?: AxiosRequestConfig): AxiosPromise<Customer> {
            return localVarFp.getMeCustomer(requestParameters.merchantIdOrPath, requestParameters.user, requestParameters.merchant, requestParameters.currentOrder, requestParameters.preferredLocation, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update your Customer
         * @param {CustomersApiPatchMeCustomerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchMeCustomer(requestParameters: CustomersApiPatchMeCustomerRequest, options?: AxiosRequestConfig): AxiosPromise<Customer> {
            return localVarFp.patchMeCustomer(requestParameters.merchantIdOrPath, requestParameters.customerUpdateDto, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create Customer for current User
         * @param {CustomersApiPostMeCustomerRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postMeCustomer(requestParameters: CustomersApiPostMeCustomerRequest, options?: AxiosRequestConfig): AxiosPromise<Customer> {
            return localVarFp.postMeCustomer(requestParameters.merchantIdOrPath, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create or update Customer App Install
         * @param {CustomersApiUpdateAppInstallRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAppInstall(requestParameters: CustomersApiUpdateAppInstallRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.updateAppInstall(requestParameters.merchantIdOrPath, requestParameters.appInstallUpdateDto, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getManyCustomers operation in CustomersApi.
 * @export
 * @interface CustomersApiGetManyCustomersRequest
 */
export interface CustomersApiGetManyCustomersRequest {
    /**
     * 
     * @type {number}
     * @memberof CustomersApiGetManyCustomers
     */
    readonly page?: number

    /**
     * 
     * @type {number}
     * @memberof CustomersApiGetManyCustomers
     */
    readonly limit?: number

    /**
     * 
     * @type {any}
     * @memberof CustomersApiGetManyCustomers
     */
    readonly xCustomLang?: any
}

/**
 * Request parameters for getMeCustomer operation in CustomersApi.
 * @export
 * @interface CustomersApiGetMeCustomerRequest
 */
export interface CustomersApiGetMeCustomerRequest {
    /**
     * 
     * @type {string}
     * @memberof CustomersApiGetMeCustomer
     */
    readonly merchantIdOrPath: string

    /**
     * 
     * @type {boolean}
     * @memberof CustomersApiGetMeCustomer
     */
    readonly user?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof CustomersApiGetMeCustomer
     */
    readonly merchant?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof CustomersApiGetMeCustomer
     */
    readonly currentOrder?: boolean

    /**
     * 
     * @type {boolean}
     * @memberof CustomersApiGetMeCustomer
     */
    readonly preferredLocation?: boolean

    /**
     * 
     * @type {any}
     * @memberof CustomersApiGetMeCustomer
     */
    readonly xCustomLang?: any
}

/**
 * Request parameters for patchMeCustomer operation in CustomersApi.
 * @export
 * @interface CustomersApiPatchMeCustomerRequest
 */
export interface CustomersApiPatchMeCustomerRequest {
    /**
     * 
     * @type {string}
     * @memberof CustomersApiPatchMeCustomer
     */
    readonly merchantIdOrPath: string

    /**
     * 
     * @type {CustomerUpdateDto}
     * @memberof CustomersApiPatchMeCustomer
     */
    readonly customerUpdateDto: CustomerUpdateDto

    /**
     * 
     * @type {any}
     * @memberof CustomersApiPatchMeCustomer
     */
    readonly xCustomLang?: any
}

/**
 * Request parameters for postMeCustomer operation in CustomersApi.
 * @export
 * @interface CustomersApiPostMeCustomerRequest
 */
export interface CustomersApiPostMeCustomerRequest {
    /**
     * 
     * @type {string}
     * @memberof CustomersApiPostMeCustomer
     */
    readonly merchantIdOrPath: string

    /**
     * 
     * @type {any}
     * @memberof CustomersApiPostMeCustomer
     */
    readonly xCustomLang?: any
}

/**
 * Request parameters for updateAppInstall operation in CustomersApi.
 * @export
 * @interface CustomersApiUpdateAppInstallRequest
 */
export interface CustomersApiUpdateAppInstallRequest {
    /**
     * 
     * @type {string}
     * @memberof CustomersApiUpdateAppInstall
     */
    readonly merchantIdOrPath: string

    /**
     * 
     * @type {AppInstallUpdateDto}
     * @memberof CustomersApiUpdateAppInstall
     */
    readonly appInstallUpdateDto: AppInstallUpdateDto

    /**
     * 
     * @type {any}
     * @memberof CustomersApiUpdateAppInstall
     */
    readonly xCustomLang?: any
}

/**
 * CustomersApi - object-oriented interface
 * @export
 * @class CustomersApi
 * @extends {BaseAPI}
 */
export class CustomersApi extends BaseAPI {
    /**
     * 
     * @summary Get my Customers
     * @param {CustomersApiGetManyCustomersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    public getManyCustomers(requestParameters: CustomersApiGetManyCustomersRequest = {}, options?: AxiosRequestConfig) {
        return CustomersApiFp(this.configuration).getManyCustomers(requestParameters.page, requestParameters.limit, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get current Customer
     * @param {CustomersApiGetMeCustomerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    public getMeCustomer(requestParameters: CustomersApiGetMeCustomerRequest, options?: AxiosRequestConfig) {
        return CustomersApiFp(this.configuration).getMeCustomer(requestParameters.merchantIdOrPath, requestParameters.user, requestParameters.merchant, requestParameters.currentOrder, requestParameters.preferredLocation, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update your Customer
     * @param {CustomersApiPatchMeCustomerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    public patchMeCustomer(requestParameters: CustomersApiPatchMeCustomerRequest, options?: AxiosRequestConfig) {
        return CustomersApiFp(this.configuration).patchMeCustomer(requestParameters.merchantIdOrPath, requestParameters.customerUpdateDto, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create Customer for current User
     * @param {CustomersApiPostMeCustomerRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    public postMeCustomer(requestParameters: CustomersApiPostMeCustomerRequest, options?: AxiosRequestConfig) {
        return CustomersApiFp(this.configuration).postMeCustomer(requestParameters.merchantIdOrPath, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create or update Customer App Install
     * @param {CustomersApiUpdateAppInstallRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomersApi
     */
    public updateAppInstall(requestParameters: CustomersApiUpdateAppInstallRequest, options?: AxiosRequestConfig) {
        return CustomersApiFp(this.configuration).updateAppInstall(requestParameters.merchantIdOrPath, requestParameters.appInstallUpdateDto, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }
}

