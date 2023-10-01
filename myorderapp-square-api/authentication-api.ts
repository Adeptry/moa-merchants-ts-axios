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
import { AuthenticationEmailConfirmRequestBody } from '../myorderapp-square-models';
// @ts-ignore
import { AuthenticationEmailLoginRequestBody } from '../myorderapp-square-models';
// @ts-ignore
import { AuthenticationEmailRegisterRequestBody } from '../myorderapp-square-models';
// @ts-ignore
import { AuthenticationPasswordForgotRequestBody } from '../myorderapp-square-models';
// @ts-ignore
import { AuthenticationPasswordResetRequestBody } from '../myorderapp-square-models';
// @ts-ignore
import { AuthenticationResponse } from '../myorderapp-square-models';
// @ts-ignore
import { AuthenticationUpdateRequestBody } from '../myorderapp-square-models';
// @ts-ignore
import { ErrorResponse } from '../myorderapp-square-models';
// @ts-ignore
import { UserEntity } from '../myorderapp-square-models';
/**
 * AuthenticationApi - axios parameter creator
 * @export
 */
export const AuthenticationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Delete Session
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAuthMe: async (xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/auth/me`;
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
         * @summary Update password
         * @param {AuthenticationUpdateRequestBody} authenticationUpdateRequestBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchAuthMe: async (authenticationUpdateRequestBody: AuthenticationUpdateRequestBody, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authenticationUpdateRequestBody' is not null or undefined
            assertParamExists('patchAuthMe', 'authenticationUpdateRequestBody', authenticationUpdateRequestBody)
            const localVarPath = `/v2/auth/me`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(authenticationUpdateRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Confirm email
         * @param {AuthenticationEmailConfirmRequestBody} authenticationEmailConfirmRequestBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postEmailConfirm: async (authenticationEmailConfirmRequestBody: AuthenticationEmailConfirmRequestBody, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authenticationEmailConfirmRequestBody' is not null or undefined
            assertParamExists('postEmailConfirm', 'authenticationEmailConfirmRequestBody', authenticationEmailConfirmRequestBody)
            const localVarPath = `/v2/auth/email/confirm`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = String(xCustomLang);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(authenticationEmailConfirmRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get access token
         * @param {AuthenticationEmailLoginRequestBody} authenticationEmailLoginRequestBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postEmailLogin: async (authenticationEmailLoginRequestBody: AuthenticationEmailLoginRequestBody, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authenticationEmailLoginRequestBody' is not null or undefined
            assertParamExists('postEmailLogin', 'authenticationEmailLoginRequestBody', authenticationEmailLoginRequestBody)
            const localVarPath = `/v2/auth/email/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = String(xCustomLang);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(authenticationEmailLoginRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create User and Authorize, note: tries to login first
         * @param {AuthenticationEmailRegisterRequestBody} authenticationEmailRegisterRequestBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postEmailRegister: async (authenticationEmailRegisterRequestBody: AuthenticationEmailRegisterRequestBody, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authenticationEmailRegisterRequestBody' is not null or undefined
            assertParamExists('postEmailRegister', 'authenticationEmailRegisterRequestBody', authenticationEmailRegisterRequestBody)
            const localVarPath = `/v2/auth/email/register`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = String(xCustomLang);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(authenticationEmailRegisterRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Forgot password
         * @param {AuthenticationPasswordForgotRequestBody} authenticationPasswordForgotRequestBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postPasswordForgot: async (authenticationPasswordForgotRequestBody: AuthenticationPasswordForgotRequestBody, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authenticationPasswordForgotRequestBody' is not null or undefined
            assertParamExists('postPasswordForgot', 'authenticationPasswordForgotRequestBody', authenticationPasswordForgotRequestBody)
            const localVarPath = `/v2/auth/password/forgot`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = String(xCustomLang);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(authenticationPasswordForgotRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Reset password
         * @param {AuthenticationPasswordResetRequestBody} authenticationPasswordResetRequestBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postPasswordReset: async (authenticationPasswordResetRequestBody: AuthenticationPasswordResetRequestBody, xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authenticationPasswordResetRequestBody' is not null or undefined
            assertParamExists('postPasswordReset', 'authenticationPasswordResetRequestBody', authenticationPasswordResetRequestBody)
            const localVarPath = `/v2/auth/password/reset`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Api-Key required
            await setApiKeyToObject(localVarHeaderParameter, "Api-Key", configuration)

            if (xCustomLang != null) {
                localVarHeaderParameter['x-custom-lang'] = String(xCustomLang);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(authenticationPasswordResetRequestBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Refresh token
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postRefresh: async (xCustomLang?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/auth/refresh`;
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
    }
};

/**
 * AuthenticationApi - functional programming interface
 * @export
 */
export const AuthenticationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthenticationApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Delete Session
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAuthMe(xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAuthMe(xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update password
         * @param {AuthenticationUpdateRequestBody} authenticationUpdateRequestBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchAuthMe(authenticationUpdateRequestBody: AuthenticationUpdateRequestBody, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchAuthMe(authenticationUpdateRequestBody, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Confirm email
         * @param {AuthenticationEmailConfirmRequestBody} authenticationEmailConfirmRequestBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postEmailConfirm(authenticationEmailConfirmRequestBody: AuthenticationEmailConfirmRequestBody, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postEmailConfirm(authenticationEmailConfirmRequestBody, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get access token
         * @param {AuthenticationEmailLoginRequestBody} authenticationEmailLoginRequestBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postEmailLogin(authenticationEmailLoginRequestBody: AuthenticationEmailLoginRequestBody, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthenticationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postEmailLogin(authenticationEmailLoginRequestBody, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create User and Authorize, note: tries to login first
         * @param {AuthenticationEmailRegisterRequestBody} authenticationEmailRegisterRequestBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postEmailRegister(authenticationEmailRegisterRequestBody: AuthenticationEmailRegisterRequestBody, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthenticationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postEmailRegister(authenticationEmailRegisterRequestBody, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Forgot password
         * @param {AuthenticationPasswordForgotRequestBody} authenticationPasswordForgotRequestBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postPasswordForgot(authenticationPasswordForgotRequestBody: AuthenticationPasswordForgotRequestBody, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postPasswordForgot(authenticationPasswordForgotRequestBody, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Reset password
         * @param {AuthenticationPasswordResetRequestBody} authenticationPasswordResetRequestBody 
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postPasswordReset(authenticationPasswordResetRequestBody: AuthenticationPasswordResetRequestBody, xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postPasswordReset(authenticationPasswordResetRequestBody, xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Refresh token
         * @param {string} [xCustomLang] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postRefresh(xCustomLang?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthenticationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postRefresh(xCustomLang, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthenticationApi - factory interface
 * @export
 */
export const AuthenticationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthenticationApiFp(configuration)
    return {
        /**
         * 
         * @summary Delete Session
         * @param {AuthenticationApiDeleteAuthMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAuthMe(requestParameters: AuthenticationApiDeleteAuthMeRequest = {}, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteAuthMe(requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update password
         * @param {AuthenticationApiPatchAuthMeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchAuthMe(requestParameters: AuthenticationApiPatchAuthMeRequest, options?: AxiosRequestConfig): AxiosPromise<UserEntity> {
            return localVarFp.patchAuthMe(requestParameters.authenticationUpdateRequestBody, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Confirm email
         * @param {AuthenticationApiPostEmailConfirmRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postEmailConfirm(requestParameters: AuthenticationApiPostEmailConfirmRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.postEmailConfirm(requestParameters.authenticationEmailConfirmRequestBody, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get access token
         * @param {AuthenticationApiPostEmailLoginRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postEmailLogin(requestParameters: AuthenticationApiPostEmailLoginRequest, options?: AxiosRequestConfig): AxiosPromise<AuthenticationResponse> {
            return localVarFp.postEmailLogin(requestParameters.authenticationEmailLoginRequestBody, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create User and Authorize, note: tries to login first
         * @param {AuthenticationApiPostEmailRegisterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postEmailRegister(requestParameters: AuthenticationApiPostEmailRegisterRequest, options?: AxiosRequestConfig): AxiosPromise<AuthenticationResponse> {
            return localVarFp.postEmailRegister(requestParameters.authenticationEmailRegisterRequestBody, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Forgot password
         * @param {AuthenticationApiPostPasswordForgotRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postPasswordForgot(requestParameters: AuthenticationApiPostPasswordForgotRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.postPasswordForgot(requestParameters.authenticationPasswordForgotRequestBody, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Reset password
         * @param {AuthenticationApiPostPasswordResetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postPasswordReset(requestParameters: AuthenticationApiPostPasswordResetRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.postPasswordReset(requestParameters.authenticationPasswordResetRequestBody, requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Refresh token
         * @param {AuthenticationApiPostRefreshRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postRefresh(requestParameters: AuthenticationApiPostRefreshRequest = {}, options?: AxiosRequestConfig): AxiosPromise<AuthenticationResponse> {
            return localVarFp.postRefresh(requestParameters.xCustomLang, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteAuthMe operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiDeleteAuthMeRequest
 */
export interface AuthenticationApiDeleteAuthMeRequest {
    /**
     * 
     * @type {string}
     * @memberof AuthenticationApiDeleteAuthMe
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for patchAuthMe operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiPatchAuthMeRequest
 */
export interface AuthenticationApiPatchAuthMeRequest {
    /**
     * 
     * @type {AuthenticationUpdateRequestBody}
     * @memberof AuthenticationApiPatchAuthMe
     */
    readonly authenticationUpdateRequestBody: AuthenticationUpdateRequestBody

    /**
     * 
     * @type {string}
     * @memberof AuthenticationApiPatchAuthMe
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for postEmailConfirm operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiPostEmailConfirmRequest
 */
export interface AuthenticationApiPostEmailConfirmRequest {
    /**
     * 
     * @type {AuthenticationEmailConfirmRequestBody}
     * @memberof AuthenticationApiPostEmailConfirm
     */
    readonly authenticationEmailConfirmRequestBody: AuthenticationEmailConfirmRequestBody

    /**
     * 
     * @type {string}
     * @memberof AuthenticationApiPostEmailConfirm
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for postEmailLogin operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiPostEmailLoginRequest
 */
export interface AuthenticationApiPostEmailLoginRequest {
    /**
     * 
     * @type {AuthenticationEmailLoginRequestBody}
     * @memberof AuthenticationApiPostEmailLogin
     */
    readonly authenticationEmailLoginRequestBody: AuthenticationEmailLoginRequestBody

    /**
     * 
     * @type {string}
     * @memberof AuthenticationApiPostEmailLogin
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for postEmailRegister operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiPostEmailRegisterRequest
 */
export interface AuthenticationApiPostEmailRegisterRequest {
    /**
     * 
     * @type {AuthenticationEmailRegisterRequestBody}
     * @memberof AuthenticationApiPostEmailRegister
     */
    readonly authenticationEmailRegisterRequestBody: AuthenticationEmailRegisterRequestBody

    /**
     * 
     * @type {string}
     * @memberof AuthenticationApiPostEmailRegister
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for postPasswordForgot operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiPostPasswordForgotRequest
 */
export interface AuthenticationApiPostPasswordForgotRequest {
    /**
     * 
     * @type {AuthenticationPasswordForgotRequestBody}
     * @memberof AuthenticationApiPostPasswordForgot
     */
    readonly authenticationPasswordForgotRequestBody: AuthenticationPasswordForgotRequestBody

    /**
     * 
     * @type {string}
     * @memberof AuthenticationApiPostPasswordForgot
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for postPasswordReset operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiPostPasswordResetRequest
 */
export interface AuthenticationApiPostPasswordResetRequest {
    /**
     * 
     * @type {AuthenticationPasswordResetRequestBody}
     * @memberof AuthenticationApiPostPasswordReset
     */
    readonly authenticationPasswordResetRequestBody: AuthenticationPasswordResetRequestBody

    /**
     * 
     * @type {string}
     * @memberof AuthenticationApiPostPasswordReset
     */
    readonly xCustomLang?: string
}

/**
 * Request parameters for postRefresh operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiPostRefreshRequest
 */
export interface AuthenticationApiPostRefreshRequest {
    /**
     * 
     * @type {string}
     * @memberof AuthenticationApiPostRefresh
     */
    readonly xCustomLang?: string
}

/**
 * AuthenticationApi - object-oriented interface
 * @export
 * @class AuthenticationApi
 * @extends {BaseAPI}
 */
export class AuthenticationApi extends BaseAPI {
    /**
     * 
     * @summary Delete Session
     * @param {AuthenticationApiDeleteAuthMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public deleteAuthMe(requestParameters: AuthenticationApiDeleteAuthMeRequest = {}, options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).deleteAuthMe(requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update password
     * @param {AuthenticationApiPatchAuthMeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public patchAuthMe(requestParameters: AuthenticationApiPatchAuthMeRequest, options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).patchAuthMe(requestParameters.authenticationUpdateRequestBody, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Confirm email
     * @param {AuthenticationApiPostEmailConfirmRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public postEmailConfirm(requestParameters: AuthenticationApiPostEmailConfirmRequest, options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).postEmailConfirm(requestParameters.authenticationEmailConfirmRequestBody, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get access token
     * @param {AuthenticationApiPostEmailLoginRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public postEmailLogin(requestParameters: AuthenticationApiPostEmailLoginRequest, options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).postEmailLogin(requestParameters.authenticationEmailLoginRequestBody, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create User and Authorize, note: tries to login first
     * @param {AuthenticationApiPostEmailRegisterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public postEmailRegister(requestParameters: AuthenticationApiPostEmailRegisterRequest, options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).postEmailRegister(requestParameters.authenticationEmailRegisterRequestBody, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Forgot password
     * @param {AuthenticationApiPostPasswordForgotRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public postPasswordForgot(requestParameters: AuthenticationApiPostPasswordForgotRequest, options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).postPasswordForgot(requestParameters.authenticationPasswordForgotRequestBody, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Reset password
     * @param {AuthenticationApiPostPasswordResetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public postPasswordReset(requestParameters: AuthenticationApiPostPasswordResetRequest, options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).postPasswordReset(requestParameters.authenticationPasswordResetRequestBody, requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Refresh token
     * @param {AuthenticationApiPostRefreshRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApi
     */
    public postRefresh(requestParameters: AuthenticationApiPostRefreshRequest = {}, options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).postRefresh(requestParameters.xCustomLang, options).then((request) => request(this.axios, this.basePath));
    }
}

