/* tslint:disable */
/* eslint-disable */
/**
 * MyOrderApp Merchants API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.5
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
/**
 * SquareApi - axios parameter creator
 * @export
 */
export const SquareApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} idempotencyKey 
         * @param {string} [objectId] 
         * @param {File} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        squareControllerUploadFile: async (idempotencyKey: string, objectId?: string, file?: File, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'idempotencyKey' is not null or undefined
            assertParamExists('squareControllerUploadFile', 'idempotencyKey', idempotencyKey)
            const localVarPath = `/v2/square/upload`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            if (idempotencyKey !== undefined) {
                localVarQueryParameter['idempotencyKey'] = idempotencyKey;
            }

            if (objectId !== undefined) {
                localVarQueryParameter['objectId'] = objectId;
            }


            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SquareApi - functional programming interface
 * @export
 */
export const SquareApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SquareApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} idempotencyKey 
         * @param {string} [objectId] 
         * @param {File} [file] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async squareControllerUploadFile(idempotencyKey: string, objectId?: string, file?: File, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.squareControllerUploadFile(idempotencyKey, objectId, file, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SquareApi - factory interface
 * @export
 */
export const SquareApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SquareApiFp(configuration)
    return {
        /**
         * 
         * @param {SquareApiSquareControllerUploadFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        squareControllerUploadFile(requestParameters: SquareApiSquareControllerUploadFileRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.squareControllerUploadFile(requestParameters.idempotencyKey, requestParameters.objectId, requestParameters.file, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for squareControllerUploadFile operation in SquareApi.
 * @export
 * @interface SquareApiSquareControllerUploadFileRequest
 */
export interface SquareApiSquareControllerUploadFileRequest {
    /**
     * 
     * @type {string}
     * @memberof SquareApiSquareControllerUploadFile
     */
    readonly idempotencyKey: string

    /**
     * 
     * @type {string}
     * @memberof SquareApiSquareControllerUploadFile
     */
    readonly objectId?: string

    /**
     * 
     * @type {File}
     * @memberof SquareApiSquareControllerUploadFile
     */
    readonly file?: File
}

/**
 * SquareApi - object-oriented interface
 * @export
 * @class SquareApi
 * @extends {BaseAPI}
 */
export class SquareApi extends BaseAPI {
    /**
     * 
     * @param {SquareApiSquareControllerUploadFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SquareApi
     */
    public squareControllerUploadFile(requestParameters: SquareApiSquareControllerUploadFileRequest, options?: AxiosRequestConfig) {
        return SquareApiFp(this.configuration).squareControllerUploadFile(requestParameters.idempotencyKey, requestParameters.objectId, requestParameters.file, options).then((request) => request(this.axios, this.basePath));
    }
}

