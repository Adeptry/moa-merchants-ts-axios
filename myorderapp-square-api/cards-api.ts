/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Square API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.5.7
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
import { CardsPostBody } from '../myorderapp-square-models';
// @ts-ignore
import { ErrorResponse } from '../myorderapp-square-models';
// @ts-ignore
import { SquareCard } from '../myorderapp-square-models';
// @ts-ignore
import { SquareDisableCardResponse } from '../myorderapp-square-models';
// @ts-ignore
import { SquareListCardsResponse } from '../myorderapp-square-models';
/**
 * CardsApi - axios parameter creator
 * @export
 */
export const CardsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Disable my Square Card
         * @param {string} id 
         * @param {string} merchantIdOrPath 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCardsMe: async (id: string, merchantIdOrPath: string, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteCardsMe', 'id', id)
            // verify required parameter 'merchantIdOrPath' is not null or undefined
            assertParamExists('deleteCardsMe', 'merchantIdOrPath', merchantIdOrPath)
            const localVarPath = `/v2/square/cards/me/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * @summary List my Square Cards
         * @param {string} merchantIdOrPath 
         * @param {string} [cursor] 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCardsMe: async (merchantIdOrPath: string, cursor?: string, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'merchantIdOrPath' is not null or undefined
            assertParamExists('getCardsMe', 'merchantIdOrPath', merchantIdOrPath)
            const localVarPath = `/v2/square/cards/me`;
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

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
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
         * @summary Create my Square Card
         * @param {string} merchantIdOrPath 
         * @param {CardsPostBody} cardsPostBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCardsMe: async (merchantIdOrPath: string, cardsPostBody: CardsPostBody, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'merchantIdOrPath' is not null or undefined
            assertParamExists('postCardsMe', 'merchantIdOrPath', merchantIdOrPath)
            // verify required parameter 'cardsPostBody' is not null or undefined
            assertParamExists('postCardsMe', 'cardsPostBody', cardsPostBody)
            const localVarPath = `/v2/square/cards/me`;
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
                localVarHeaderParameter['x-custom-lang'] = String(xCustomLang);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(cardsPostBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CardsApi - functional programming interface
 * @export
 */
export const CardsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CardsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Disable my Square Card
         * @param {string} id 
         * @param {string} merchantIdOrPath 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCardsMe(id: string, merchantIdOrPath: string, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SquareDisableCardResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteCardsMe(id, merchantIdOrPath, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List my Square Cards
         * @param {string} merchantIdOrPath 
         * @param {string} [cursor] 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCardsMe(merchantIdOrPath: string, cursor?: string, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SquareListCardsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCardsMe(merchantIdOrPath, cursor, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create my Square Card
         * @param {string} merchantIdOrPath 
         * @param {CardsPostBody} cardsPostBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postCardsMe(merchantIdOrPath: string, cardsPostBody: CardsPostBody, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SquareCard>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postCardsMe(merchantIdOrPath, cardsPostBody, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CardsApi - factory interface
 * @export
 */
export const CardsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CardsApiFp(configuration)
    return {
        /**
         * 
         * @summary Disable my Square Card
         * @param {CardsApiDeleteCardsMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCardsMe(requestParameters: CardsApiDeleteCardsMeRequest, options?: AxiosRequestConfig): AxiosPromise<SquareDisableCardResponse> {
            return localVarFp.deleteCardsMe(requestParameters.id, requestParameters.merchantIdOrPath, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List my Square Cards
         * @param {CardsApiGetCardsMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCardsMe(requestParameters: CardsApiGetCardsMeRequest, options?: AxiosRequestConfig): AxiosPromise<SquareListCardsResponse> {
            return localVarFp.getCardsMe(requestParameters.merchantIdOrPath, requestParameters.cursor, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create my Square Card
         * @param {CardsApiPostCardsMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCardsMe(requestParameters: CardsApiPostCardsMeRequest, options?: AxiosRequestConfig): AxiosPromise<SquareCard> {
            return localVarFp.postCardsMe(requestParameters.merchantIdOrPath, requestParameters.cardsPostBody, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteCardsMe operation in CardsApi.
 * @export
 * @interface CardsApiDeleteCardsMeRequest
 */
export interface CardsApiDeleteCardsMeRequest {
    /**
     * 
     * @type {string}
     * @memberof CardsApiDeleteCardsMe
     */
    readonly id: string

    /**
     * 
     * @type {string}
     * @memberof CardsApiDeleteCardsMe
     */
    readonly merchantIdOrPath: string

    /**
     * 
     * @type {string}
     * @memberof CardsApiDeleteCardsMe
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for getCardsMe operation in CardsApi.
 * @export
 * @interface CardsApiGetCardsMeRequest
 */
export interface CardsApiGetCardsMeRequest {
    /**
     * 
     * @type {string}
     * @memberof CardsApiGetCardsMe
     */
    readonly merchantIdOrPath: string

    /**
     * 
     * @type {string}
     * @memberof CardsApiGetCardsMe
     */
    readonly cursor?: string

    /**
     * 
     * @type {string}
     * @memberof CardsApiGetCardsMe
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for postCardsMe operation in CardsApi.
 * @export
 * @interface CardsApiPostCardsMeRequest
 */
export interface CardsApiPostCardsMeRequest {
    /**
     * 
     * @type {string}
     * @memberof CardsApiPostCardsMe
     */
    readonly merchantIdOrPath: string

    /**
     * 
     * @type {CardsPostBody}
     * @memberof CardsApiPostCardsMe
     */
    readonly cardsPostBody: CardsPostBody

    /**
     * 
     * @type {string}
     * @memberof CardsApiPostCardsMe
     */
    readonly xCustomLang?: string
}

/**
 * CardsApi - object-oriented interface
 * @export
 * @class CardsApi
 * @extends {BaseAPI}
 */
export class CardsApi extends BaseAPI {
    /**
     * 
     * @summary Disable my Square Card
     * @param {CardsApiDeleteCardsMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CardsApi
     */
    public deleteCardsMe(requestParameters: CardsApiDeleteCardsMeRequest, options?: AxiosRequestConfig) {
        return CardsApiFp(this.configuration).deleteCardsMe(requestParameters.id, requestParameters.merchantIdOrPath, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List my Square Cards
     * @param {CardsApiGetCardsMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CardsApi
     */
    public getCardsMe(requestParameters: CardsApiGetCardsMeRequest, options?: AxiosRequestConfig) {
        return CardsApiFp(this.configuration).getCardsMe(requestParameters.merchantIdOrPath, requestParameters.cursor, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create my Square Card
     * @param {CardsApiPostCardsMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CardsApi
     */
    public postCardsMe(requestParameters: CardsApiPostCardsMeRequest, options?: AxiosRequestConfig) {
        return CardsApiFp(this.configuration).postCardsMe(requestParameters.merchantIdOrPath, requestParameters.cardsPostBody, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }
}

