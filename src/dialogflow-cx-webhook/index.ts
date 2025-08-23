/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DialogflowCxWebhookConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether the webhook is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#disabled DialogflowCxWebhook#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The human-readable name of the webhook, unique within the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#display_name DialogflowCxWebhook#display_name}
  */
  readonly displayName: string;
  /**
  * Deprecated. Indicates if automatic spell correction is enabled in detect intent requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#enable_spell_correction DialogflowCxWebhook#enable_spell_correction}
  */
  readonly enableSpellCorrection?: boolean | cdktf.IResolvable;
  /**
  * Deprecated. Determines whether this agent should log conversation queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#enable_stackdriver_logging DialogflowCxWebhook#enable_stackdriver_logging}
  */
  readonly enableStackdriverLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#id DialogflowCxWebhook#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The agent to create a webhook for.
  * Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#parent DialogflowCxWebhook#parent}
  */
  readonly parent?: string;
  /**
  * Deprecated. Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#security_settings DialogflowCxWebhook#security_settings}
  */
  readonly securitySettings?: string;
  /**
  * Webhook execution timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#timeout DialogflowCxWebhook#timeout}
  */
  readonly timeout?: string;
  /**
  * generic_web_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#generic_web_service DialogflowCxWebhook#generic_web_service}
  */
  readonly genericWebService?: DialogflowCxWebhookGenericWebService;
  /**
  * service_directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#service_directory DialogflowCxWebhook#service_directory}
  */
  readonly serviceDirectory?: DialogflowCxWebhookServiceDirectory;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#timeouts DialogflowCxWebhook#timeouts}
  */
  readonly timeouts?: DialogflowCxWebhookTimeouts;
}
export interface DialogflowCxWebhookGenericWebServiceOauthConfig {
  /**
  * The client ID provided by the 3rd party platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#client_id DialogflowCxWebhook#client_id}
  */
  readonly clientId: string;
  /**
  * The client secret provided by the 3rd party platform.  If the
  * 'secret_version_for_client_secret' field is set, this field will be
  * ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#client_secret DialogflowCxWebhook#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The OAuth scopes to grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#scopes DialogflowCxWebhook#scopes}
  */
  readonly scopes?: string[];
  /**
  * The name of the SecretManager secret version resource storing the
  * client secret. If this field is set, the 'client_secret' field will be
  * ignored.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#secret_version_for_client_secret DialogflowCxWebhook#secret_version_for_client_secret}
  */
  readonly secretVersionForClientSecret?: string;
  /**
  * The token endpoint provided by the 3rd party platform to exchange an
  * access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#token_endpoint DialogflowCxWebhook#token_endpoint}
  */
  readonly tokenEndpoint: string;
}

export function dialogflowCxWebhookGenericWebServiceOauthConfigToTerraform(struct?: DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference | DialogflowCxWebhookGenericWebServiceOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    secret_version_for_client_secret: cdktf.stringToTerraform(struct!.secretVersionForClientSecret),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function dialogflowCxWebhookGenericWebServiceOauthConfigToHclTerraform(struct?: DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference | DialogflowCxWebhookGenericWebServiceOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secret_version_for_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.secretVersionForClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxWebhookGenericWebServiceOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._secretVersionForClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionForClientSecret = this._secretVersionForClientSecret;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxWebhookGenericWebServiceOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._scopes = undefined;
      this._secretVersionForClientSecret = undefined;
      this._tokenEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._scopes = value.scopes;
      this._secretVersionForClientSecret = value.secretVersionForClientSecret;
      this._tokenEndpoint = value.tokenEndpoint;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // secret_version_for_client_secret - computed: false, optional: true, required: false
  private _secretVersionForClientSecret?: string; 
  public get secretVersionForClientSecret() {
    return this.getStringAttribute('secret_version_for_client_secret');
  }
  public set secretVersionForClientSecret(value: string) {
    this._secretVersionForClientSecret = value;
  }
  public resetSecretVersionForClientSecret() {
    this._secretVersionForClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionForClientSecretInput() {
    return this._secretVersionForClientSecret;
  }

  // token_endpoint - computed: false, optional: false, required: true
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }
}
export interface DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#key DialogflowCxWebhook#key}
  */
  readonly key: string;
  /**
  * The SecretManager secret version resource storing the header value.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#secret_version DialogflowCxWebhook#secret_version}
  */
  readonly secretVersion: string;
}

export function dialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersToTerraform(struct?: DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function dialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersToHclTerraform(struct?: DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretVersion = value.secretVersion;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}

export class DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference {
    return new DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxWebhookGenericWebService {
  /**
  * Specifies a list of allowed custom CA certificates (in DER format) for
  * HTTPS verification. This overrides the default SSL trust store. If this
  * is empty or unspecified, Dialogflow will use Google's default trust store
  * to verify certificates.
  * N.B. Make sure the HTTPS server certificates are signed with "subject alt
  * name". For instance a certificate can be self-signed using the following
  * command,
  * openssl x509 -req -days 200 -in example.com.csr \
  * -signkey example.com.key \
  * -out example.com.crt \
  * -extfile <(printf "\nsubjectAltName='DNS:www.example.com'")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#allowed_ca_certs DialogflowCxWebhook#allowed_ca_certs}
  */
  readonly allowedCaCerts?: string[];
  /**
  * HTTP method for the flexible webhook calls. Standard webhook always uses
  * POST. Possible values: ["POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#http_method DialogflowCxWebhook#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Maps the values extracted from specific fields of the flexible webhook
  * response into session parameters.
  * - Key: session parameter name
  * - Value: field path in the webhook response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#parameter_mapping DialogflowCxWebhook#parameter_mapping}
  */
  readonly parameterMapping?: { [key: string]: string };
  /**
  * Defines a custom JSON object as request body to send to flexible webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#request_body DialogflowCxWebhook#request_body}
  */
  readonly requestBody?: string;
  /**
  * The HTTP request headers to send together with webhook requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#request_headers DialogflowCxWebhook#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * The SecretManager secret version resource storing the username:password
  * pair for HTTP Basic authentication.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#secret_version_for_username_password DialogflowCxWebhook#secret_version_for_username_password}
  */
  readonly secretVersionForUsernamePassword?: string;
  /**
  * Indicate the auth token type generated from the [Diglogflow service
  * agent](https://cloud.google.com/iam/docs/service-agents#dialogflow-service-agent).
  * The generated token is sent in the Authorization header. Possible values: ["NONE", "ID_TOKEN", "ACCESS_TOKEN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#service_agent_auth DialogflowCxWebhook#service_agent_auth}
  */
  readonly serviceAgentAuth?: string;
  /**
  * The webhook URI for receiving POST requests. It must use https protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#uri DialogflowCxWebhook#uri}
  */
  readonly uri: string;
  /**
  * Type of the webhook. Possible values: ["STANDARD", "FLEXIBLE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#webhook_type DialogflowCxWebhook#webhook_type}
  */
  readonly webhookType?: string;
  /**
  * oauth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#oauth_config DialogflowCxWebhook#oauth_config}
  */
  readonly oauthConfig?: DialogflowCxWebhookGenericWebServiceOauthConfig;
  /**
  * secret_versions_for_request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#secret_versions_for_request_headers DialogflowCxWebhook#secret_versions_for_request_headers}
  */
  readonly secretVersionsForRequestHeaders?: DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders[] | cdktf.IResolvable;
}

export function dialogflowCxWebhookGenericWebServiceToTerraform(struct?: DialogflowCxWebhookGenericWebServiceOutputReference | DialogflowCxWebhookGenericWebService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ca_certs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCaCerts),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    parameter_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameterMapping),
    request_body: cdktf.stringToTerraform(struct!.requestBody),
    request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requestHeaders),
    secret_version_for_username_password: cdktf.stringToTerraform(struct!.secretVersionForUsernamePassword),
    service_agent_auth: cdktf.stringToTerraform(struct!.serviceAgentAuth),
    uri: cdktf.stringToTerraform(struct!.uri),
    webhook_type: cdktf.stringToTerraform(struct!.webhookType),
    oauth_config: dialogflowCxWebhookGenericWebServiceOauthConfigToTerraform(struct!.oauthConfig),
    secret_versions_for_request_headers: cdktf.listMapper(dialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersToTerraform, true)(struct!.secretVersionsForRequestHeaders),
  }
}


export function dialogflowCxWebhookGenericWebServiceToHclTerraform(struct?: DialogflowCxWebhookGenericWebServiceOutputReference | DialogflowCxWebhookGenericWebService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_ca_certs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedCaCerts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_mapping: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameterMapping),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    request_body: {
      value: cdktf.stringToHclTerraform(struct!.requestBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requestHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    secret_version_for_username_password: {
      value: cdktf.stringToHclTerraform(struct!.secretVersionForUsernamePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_agent_auth: {
      value: cdktf.stringToHclTerraform(struct!.serviceAgentAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_type: {
      value: cdktf.stringToHclTerraform(struct!.webhookType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_config: {
      value: dialogflowCxWebhookGenericWebServiceOauthConfigToHclTerraform(struct!.oauthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxWebhookGenericWebServiceOauthConfigList",
    },
    secret_versions_for_request_headers: {
      value: cdktf.listMapperHcl(dialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersToHclTerraform, true)(struct!.secretVersionsForRequestHeaders),
      isBlock: true,
      type: "set",
      storageClassType: "DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxWebhookGenericWebServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxWebhookGenericWebService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCaCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCaCerts = this._allowedCaCerts;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._parameterMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterMapping = this._parameterMapping;
    }
    if (this._requestBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBody = this._requestBody;
    }
    if (this._requestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._secretVersionForUsernamePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionForUsernamePassword = this._secretVersionForUsernamePassword;
    }
    if (this._serviceAgentAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAgentAuth = this._serviceAgentAuth;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._webhookType !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookType = this._webhookType;
    }
    if (this._oauthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthConfig = this._oauthConfig?.internalValue;
    }
    if (this._secretVersionsForRequestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionsForRequestHeaders = this._secretVersionsForRequestHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxWebhookGenericWebService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedCaCerts = undefined;
      this._httpMethod = undefined;
      this._parameterMapping = undefined;
      this._requestBody = undefined;
      this._requestHeaders = undefined;
      this._secretVersionForUsernamePassword = undefined;
      this._serviceAgentAuth = undefined;
      this._uri = undefined;
      this._webhookType = undefined;
      this._oauthConfig.internalValue = undefined;
      this._secretVersionsForRequestHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedCaCerts = value.allowedCaCerts;
      this._httpMethod = value.httpMethod;
      this._parameterMapping = value.parameterMapping;
      this._requestBody = value.requestBody;
      this._requestHeaders = value.requestHeaders;
      this._secretVersionForUsernamePassword = value.secretVersionForUsernamePassword;
      this._serviceAgentAuth = value.serviceAgentAuth;
      this._uri = value.uri;
      this._webhookType = value.webhookType;
      this._oauthConfig.internalValue = value.oauthConfig;
      this._secretVersionsForRequestHeaders.internalValue = value.secretVersionsForRequestHeaders;
    }
  }

  // allowed_ca_certs - computed: false, optional: true, required: false
  private _allowedCaCerts?: string[]; 
  public get allowedCaCerts() {
    return this.getListAttribute('allowed_ca_certs');
  }
  public set allowedCaCerts(value: string[]) {
    this._allowedCaCerts = value;
  }
  public resetAllowedCaCerts() {
    this._allowedCaCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCaCertsInput() {
    return this._allowedCaCerts;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // parameter_mapping - computed: false, optional: true, required: false
  private _parameterMapping?: { [key: string]: string }; 
  public get parameterMapping() {
    return this.getStringMapAttribute('parameter_mapping');
  }
  public set parameterMapping(value: { [key: string]: string }) {
    this._parameterMapping = value;
  }
  public resetParameterMapping() {
    this._parameterMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterMappingInput() {
    return this._parameterMapping;
  }

  // request_body - computed: false, optional: true, required: false
  private _requestBody?: string; 
  public get requestBody() {
    return this.getStringAttribute('request_body');
  }
  public set requestBody(value: string) {
    this._requestBody = value;
  }
  public resetRequestBody() {
    this._requestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInput() {
    return this._requestBody;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this.getStringMapAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // secret_version_for_username_password - computed: false, optional: true, required: false
  private _secretVersionForUsernamePassword?: string; 
  public get secretVersionForUsernamePassword() {
    return this.getStringAttribute('secret_version_for_username_password');
  }
  public set secretVersionForUsernamePassword(value: string) {
    this._secretVersionForUsernamePassword = value;
  }
  public resetSecretVersionForUsernamePassword() {
    this._secretVersionForUsernamePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionForUsernamePasswordInput() {
    return this._secretVersionForUsernamePassword;
  }

  // service_agent_auth - computed: false, optional: true, required: false
  private _serviceAgentAuth?: string; 
  public get serviceAgentAuth() {
    return this.getStringAttribute('service_agent_auth');
  }
  public set serviceAgentAuth(value: string) {
    this._serviceAgentAuth = value;
  }
  public resetServiceAgentAuth() {
    this._serviceAgentAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAgentAuthInput() {
    return this._serviceAgentAuth;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // webhook_type - computed: false, optional: true, required: false
  private _webhookType?: string; 
  public get webhookType() {
    return this.getStringAttribute('webhook_type');
  }
  public set webhookType(value: string) {
    this._webhookType = value;
  }
  public resetWebhookType() {
    this._webhookType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookTypeInput() {
    return this._webhookType;
  }

  // oauth_config - computed: false, optional: true, required: false
  private _oauthConfig = new DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference(this, "oauth_config");
  public get oauthConfig() {
    return this._oauthConfig;
  }
  public putOauthConfig(value: DialogflowCxWebhookGenericWebServiceOauthConfig) {
    this._oauthConfig.internalValue = value;
  }
  public resetOauthConfig() {
    this._oauthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthConfigInput() {
    return this._oauthConfig.internalValue;
  }

  // secret_versions_for_request_headers - computed: false, optional: true, required: false
  private _secretVersionsForRequestHeaders = new DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList(this, "secret_versions_for_request_headers", true);
  public get secretVersionsForRequestHeaders() {
    return this._secretVersionsForRequestHeaders;
  }
  public putSecretVersionsForRequestHeaders(value: DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders[] | cdktf.IResolvable) {
    this._secretVersionsForRequestHeaders.internalValue = value;
  }
  public resetSecretVersionsForRequestHeaders() {
    this._secretVersionsForRequestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionsForRequestHeadersInput() {
    return this._secretVersionsForRequestHeaders.internalValue;
  }
}
export interface DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig {
  /**
  * The client ID provided by the 3rd party platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#client_id DialogflowCxWebhook#client_id}
  */
  readonly clientId: string;
  /**
  * The client secret provided by the 3rd party platform.  If the
  * 'secret_version_for_client_secret' field is set, this field will be
  * ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#client_secret DialogflowCxWebhook#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The OAuth scopes to grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#scopes DialogflowCxWebhook#scopes}
  */
  readonly scopes?: string[];
  /**
  * The name of the SecretManager secret version resource storing the
  * client secret. If this field is set, the 'client_secret' field will be
  * ignored.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#secret_version_for_client_secret DialogflowCxWebhook#secret_version_for_client_secret}
  */
  readonly secretVersionForClientSecret?: string;
  /**
  * The token endpoint provided by the 3rd party platform to exchange an
  * access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#token_endpoint DialogflowCxWebhook#token_endpoint}
  */
  readonly tokenEndpoint: string;
}

export function dialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigToTerraform(struct?: DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference | DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    secret_version_for_client_secret: cdktf.stringToTerraform(struct!.secretVersionForClientSecret),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
  }
}


export function dialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigToHclTerraform(struct?: DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference | DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    secret_version_for_client_secret: {
      value: cdktf.stringToHclTerraform(struct!.secretVersionForClientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._secretVersionForClientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionForClientSecret = this._secretVersionForClientSecret;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._scopes = undefined;
      this._secretVersionForClientSecret = undefined;
      this._tokenEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._scopes = value.scopes;
      this._secretVersionForClientSecret = value.secretVersionForClientSecret;
      this._tokenEndpoint = value.tokenEndpoint;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // secret_version_for_client_secret - computed: false, optional: true, required: false
  private _secretVersionForClientSecret?: string; 
  public get secretVersionForClientSecret() {
    return this.getStringAttribute('secret_version_for_client_secret');
  }
  public set secretVersionForClientSecret(value: string) {
    this._secretVersionForClientSecret = value;
  }
  public resetSecretVersionForClientSecret() {
    this._secretVersionForClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionForClientSecretInput() {
    return this._secretVersionForClientSecret;
  }

  // token_endpoint - computed: false, optional: false, required: true
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }
}
export interface DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#key DialogflowCxWebhook#key}
  */
  readonly key: string;
  /**
  * The SecretManager secret version resource storing the header value.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#secret_version DialogflowCxWebhook#secret_version}
  */
  readonly secretVersion: string;
}

export function dialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersToTerraform(struct?: DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function dialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersToHclTerraform(struct?: DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._secretVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._secretVersion = value.secretVersion;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}

export class DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList extends cdktf.ComplexList {
  public internalValue? : DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference {
    return new DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DialogflowCxWebhookServiceDirectoryGenericWebService {
  /**
  * Specifies a list of allowed custom CA certificates (in DER format) for
  * HTTPS verification. This overrides the default SSL trust store. If this
  * is empty or unspecified, Dialogflow will use Google's default trust store
  * to verify certificates.
  * N.B. Make sure the HTTPS server certificates are signed with "subject alt
  * name". For instance a certificate can be self-signed using the following
  * command,
  * openssl x509 -req -days 200 -in example.com.csr \
  * -signkey example.com.key \
  * -out example.com.crt \
  * -extfile <(printf "\nsubjectAltName='DNS:www.example.com'")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#allowed_ca_certs DialogflowCxWebhook#allowed_ca_certs}
  */
  readonly allowedCaCerts?: string[];
  /**
  * HTTP method for the flexible webhook calls. Standard webhook always uses
  * POST. Possible values: ["POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#http_method DialogflowCxWebhook#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Maps the values extracted from specific fields of the flexible webhook
  * response into session parameters.
  * - Key: session parameter name
  * - Value: field path in the webhook response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#parameter_mapping DialogflowCxWebhook#parameter_mapping}
  */
  readonly parameterMapping?: { [key: string]: string };
  /**
  * Defines a custom JSON object as request body to send to flexible webhook.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#request_body DialogflowCxWebhook#request_body}
  */
  readonly requestBody?: string;
  /**
  * The HTTP request headers to send together with webhook requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#request_headers DialogflowCxWebhook#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string };
  /**
  * The SecretManager secret version resource storing the username:password
  * pair for HTTP Basic authentication.
  * Format: 'projects/{project}/secrets/{secret}/versions/{version}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#secret_version_for_username_password DialogflowCxWebhook#secret_version_for_username_password}
  */
  readonly secretVersionForUsernamePassword?: string;
  /**
  * Indicate the auth token type generated from the [Diglogflow service
  * agent](https://cloud.google.com/iam/docs/service-agents#dialogflow-service-agent).
  * The generated token is sent in the Authorization header. Possible values: ["NONE", "ID_TOKEN", "ACCESS_TOKEN"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#service_agent_auth DialogflowCxWebhook#service_agent_auth}
  */
  readonly serviceAgentAuth?: string;
  /**
  * The webhook URI for receiving POST requests. It must use https protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#uri DialogflowCxWebhook#uri}
  */
  readonly uri: string;
  /**
  * Type of the webhook. Possible values: ["STANDARD", "FLEXIBLE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#webhook_type DialogflowCxWebhook#webhook_type}
  */
  readonly webhookType?: string;
  /**
  * oauth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#oauth_config DialogflowCxWebhook#oauth_config}
  */
  readonly oauthConfig?: DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig;
  /**
  * secret_versions_for_request_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#secret_versions_for_request_headers DialogflowCxWebhook#secret_versions_for_request_headers}
  */
  readonly secretVersionsForRequestHeaders?: DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders[] | cdktf.IResolvable;
}

export function dialogflowCxWebhookServiceDirectoryGenericWebServiceToTerraform(struct?: DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference | DialogflowCxWebhookServiceDirectoryGenericWebService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ca_certs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedCaCerts),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    parameter_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameterMapping),
    request_body: cdktf.stringToTerraform(struct!.requestBody),
    request_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requestHeaders),
    secret_version_for_username_password: cdktf.stringToTerraform(struct!.secretVersionForUsernamePassword),
    service_agent_auth: cdktf.stringToTerraform(struct!.serviceAgentAuth),
    uri: cdktf.stringToTerraform(struct!.uri),
    webhook_type: cdktf.stringToTerraform(struct!.webhookType),
    oauth_config: dialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigToTerraform(struct!.oauthConfig),
    secret_versions_for_request_headers: cdktf.listMapper(dialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersToTerraform, true)(struct!.secretVersionsForRequestHeaders),
  }
}


export function dialogflowCxWebhookServiceDirectoryGenericWebServiceToHclTerraform(struct?: DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference | DialogflowCxWebhookServiceDirectoryGenericWebService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_ca_certs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedCaCerts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_mapping: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameterMapping),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    request_body: {
      value: cdktf.stringToHclTerraform(struct!.requestBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requestHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    secret_version_for_username_password: {
      value: cdktf.stringToHclTerraform(struct!.secretVersionForUsernamePassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_agent_auth: {
      value: cdktf.stringToHclTerraform(struct!.serviceAgentAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webhook_type: {
      value: cdktf.stringToHclTerraform(struct!.webhookType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_config: {
      value: dialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigToHclTerraform(struct!.oauthConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigList",
    },
    secret_versions_for_request_headers: {
      value: cdktf.listMapperHcl(dialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersToHclTerraform, true)(struct!.secretVersionsForRequestHeaders),
      isBlock: true,
      type: "set",
      storageClassType: "DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxWebhookServiceDirectoryGenericWebService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedCaCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedCaCerts = this._allowedCaCerts;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._parameterMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterMapping = this._parameterMapping;
    }
    if (this._requestBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBody = this._requestBody;
    }
    if (this._requestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaders = this._requestHeaders;
    }
    if (this._secretVersionForUsernamePassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionForUsernamePassword = this._secretVersionForUsernamePassword;
    }
    if (this._serviceAgentAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAgentAuth = this._serviceAgentAuth;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._webhookType !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhookType = this._webhookType;
    }
    if (this._oauthConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthConfig = this._oauthConfig?.internalValue;
    }
    if (this._secretVersionsForRequestHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersionsForRequestHeaders = this._secretVersionsForRequestHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxWebhookServiceDirectoryGenericWebService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedCaCerts = undefined;
      this._httpMethod = undefined;
      this._parameterMapping = undefined;
      this._requestBody = undefined;
      this._requestHeaders = undefined;
      this._secretVersionForUsernamePassword = undefined;
      this._serviceAgentAuth = undefined;
      this._uri = undefined;
      this._webhookType = undefined;
      this._oauthConfig.internalValue = undefined;
      this._secretVersionsForRequestHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedCaCerts = value.allowedCaCerts;
      this._httpMethod = value.httpMethod;
      this._parameterMapping = value.parameterMapping;
      this._requestBody = value.requestBody;
      this._requestHeaders = value.requestHeaders;
      this._secretVersionForUsernamePassword = value.secretVersionForUsernamePassword;
      this._serviceAgentAuth = value.serviceAgentAuth;
      this._uri = value.uri;
      this._webhookType = value.webhookType;
      this._oauthConfig.internalValue = value.oauthConfig;
      this._secretVersionsForRequestHeaders.internalValue = value.secretVersionsForRequestHeaders;
    }
  }

  // allowed_ca_certs - computed: false, optional: true, required: false
  private _allowedCaCerts?: string[]; 
  public get allowedCaCerts() {
    return this.getListAttribute('allowed_ca_certs');
  }
  public set allowedCaCerts(value: string[]) {
    this._allowedCaCerts = value;
  }
  public resetAllowedCaCerts() {
    this._allowedCaCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCaCertsInput() {
    return this._allowedCaCerts;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // parameter_mapping - computed: false, optional: true, required: false
  private _parameterMapping?: { [key: string]: string }; 
  public get parameterMapping() {
    return this.getStringMapAttribute('parameter_mapping');
  }
  public set parameterMapping(value: { [key: string]: string }) {
    this._parameterMapping = value;
  }
  public resetParameterMapping() {
    this._parameterMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterMappingInput() {
    return this._parameterMapping;
  }

  // request_body - computed: false, optional: true, required: false
  private _requestBody?: string; 
  public get requestBody() {
    return this.getStringAttribute('request_body');
  }
  public set requestBody(value: string) {
    this._requestBody = value;
  }
  public resetRequestBody() {
    this._requestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBodyInput() {
    return this._requestBody;
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string }; 
  public get requestHeaders() {
    return this.getStringMapAttribute('request_headers');
  }
  public set requestHeaders(value: { [key: string]: string }) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders;
  }

  // secret_version_for_username_password - computed: false, optional: true, required: false
  private _secretVersionForUsernamePassword?: string; 
  public get secretVersionForUsernamePassword() {
    return this.getStringAttribute('secret_version_for_username_password');
  }
  public set secretVersionForUsernamePassword(value: string) {
    this._secretVersionForUsernamePassword = value;
  }
  public resetSecretVersionForUsernamePassword() {
    this._secretVersionForUsernamePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionForUsernamePasswordInput() {
    return this._secretVersionForUsernamePassword;
  }

  // service_agent_auth - computed: false, optional: true, required: false
  private _serviceAgentAuth?: string; 
  public get serviceAgentAuth() {
    return this.getStringAttribute('service_agent_auth');
  }
  public set serviceAgentAuth(value: string) {
    this._serviceAgentAuth = value;
  }
  public resetServiceAgentAuth() {
    this._serviceAgentAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAgentAuthInput() {
    return this._serviceAgentAuth;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // webhook_type - computed: false, optional: true, required: false
  private _webhookType?: string; 
  public get webhookType() {
    return this.getStringAttribute('webhook_type');
  }
  public set webhookType(value: string) {
    this._webhookType = value;
  }
  public resetWebhookType() {
    this._webhookType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookTypeInput() {
    return this._webhookType;
  }

  // oauth_config - computed: false, optional: true, required: false
  private _oauthConfig = new DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference(this, "oauth_config");
  public get oauthConfig() {
    return this._oauthConfig;
  }
  public putOauthConfig(value: DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig) {
    this._oauthConfig.internalValue = value;
  }
  public resetOauthConfig() {
    this._oauthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthConfigInput() {
    return this._oauthConfig.internalValue;
  }

  // secret_versions_for_request_headers - computed: false, optional: true, required: false
  private _secretVersionsForRequestHeaders = new DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList(this, "secret_versions_for_request_headers", true);
  public get secretVersionsForRequestHeaders() {
    return this._secretVersionsForRequestHeaders;
  }
  public putSecretVersionsForRequestHeaders(value: DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders[] | cdktf.IResolvable) {
    this._secretVersionsForRequestHeaders.internalValue = value;
  }
  public resetSecretVersionsForRequestHeaders() {
    this._secretVersionsForRequestHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionsForRequestHeadersInput() {
    return this._secretVersionsForRequestHeaders.internalValue;
  }
}
export interface DialogflowCxWebhookServiceDirectory {
  /**
  * The name of Service Directory service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#service DialogflowCxWebhook#service}
  */
  readonly service: string;
  /**
  * generic_web_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#generic_web_service DialogflowCxWebhook#generic_web_service}
  */
  readonly genericWebService?: DialogflowCxWebhookServiceDirectoryGenericWebService;
}

export function dialogflowCxWebhookServiceDirectoryToTerraform(struct?: DialogflowCxWebhookServiceDirectoryOutputReference | DialogflowCxWebhookServiceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service: cdktf.stringToTerraform(struct!.service),
    generic_web_service: dialogflowCxWebhookServiceDirectoryGenericWebServiceToTerraform(struct!.genericWebService),
  }
}


export function dialogflowCxWebhookServiceDirectoryToHclTerraform(struct?: DialogflowCxWebhookServiceDirectoryOutputReference | DialogflowCxWebhookServiceDirectory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generic_web_service: {
      value: dialogflowCxWebhookServiceDirectoryGenericWebServiceToHclTerraform(struct!.genericWebService),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxWebhookServiceDirectoryGenericWebServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxWebhookServiceDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxWebhookServiceDirectory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._genericWebService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.genericWebService = this._genericWebService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxWebhookServiceDirectory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._service = undefined;
      this._genericWebService.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._service = value.service;
      this._genericWebService.internalValue = value.genericWebService;
    }
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // generic_web_service - computed: false, optional: true, required: false
  private _genericWebService = new DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference(this, "generic_web_service");
  public get genericWebService() {
    return this._genericWebService;
  }
  public putGenericWebService(value: DialogflowCxWebhookServiceDirectoryGenericWebService) {
    this._genericWebService.internalValue = value;
  }
  public resetGenericWebService() {
    this._genericWebService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericWebServiceInput() {
    return this._genericWebService.internalValue;
  }
}
export interface DialogflowCxWebhookTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#create DialogflowCxWebhook#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#delete DialogflowCxWebhook#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#update DialogflowCxWebhook#update}
  */
  readonly update?: string;
}

export function dialogflowCxWebhookTimeoutsToTerraform(struct?: DialogflowCxWebhookTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dialogflowCxWebhookTimeoutsToHclTerraform(struct?: DialogflowCxWebhookTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxWebhookTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DialogflowCxWebhookTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxWebhookTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook google_dialogflow_cx_webhook}
*/
export class DialogflowCxWebhook extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_webhook";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DialogflowCxWebhook resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DialogflowCxWebhook to import
  * @param importFromId The id of the existing DialogflowCxWebhook that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DialogflowCxWebhook to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_cx_webhook", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.2/docs/resources/dialogflow_cx_webhook google_dialogflow_cx_webhook} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowCxWebhookConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowCxWebhookConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_webhook',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.49.2',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._enableSpellCorrection = config.enableSpellCorrection;
    this._enableStackdriverLogging = config.enableStackdriverLogging;
    this._id = config.id;
    this._parent = config.parent;
    this._securitySettings = config.securitySettings;
    this._timeout = config.timeout;
    this._genericWebService.internalValue = config.genericWebService;
    this._serviceDirectory.internalValue = config.serviceDirectory;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enable_spell_correction - computed: false, optional: true, required: false
  private _enableSpellCorrection?: boolean | cdktf.IResolvable; 
  public get enableSpellCorrection() {
    return this.getBooleanAttribute('enable_spell_correction');
  }
  public set enableSpellCorrection(value: boolean | cdktf.IResolvable) {
    this._enableSpellCorrection = value;
  }
  public resetEnableSpellCorrection() {
    this._enableSpellCorrection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSpellCorrectionInput() {
    return this._enableSpellCorrection;
  }

  // enable_stackdriver_logging - computed: false, optional: true, required: false
  private _enableStackdriverLogging?: boolean | cdktf.IResolvable; 
  public get enableStackdriverLogging() {
    return this.getBooleanAttribute('enable_stackdriver_logging');
  }
  public set enableStackdriverLogging(value: boolean | cdktf.IResolvable) {
    this._enableStackdriverLogging = value;
  }
  public resetEnableStackdriverLogging() {
    this._enableStackdriverLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStackdriverLoggingInput() {
    return this._enableStackdriverLogging;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // security_settings - computed: false, optional: true, required: false
  private _securitySettings?: string; 
  public get securitySettings() {
    return this.getStringAttribute('security_settings');
  }
  public set securitySettings(value: string) {
    this._securitySettings = value;
  }
  public resetSecuritySettings() {
    this._securitySettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySettingsInput() {
    return this._securitySettings;
  }

  // start_flow - computed: true, optional: false, required: false
  public get startFlow() {
    return this.getStringAttribute('start_flow');
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // generic_web_service - computed: false, optional: true, required: false
  private _genericWebService = new DialogflowCxWebhookGenericWebServiceOutputReference(this, "generic_web_service");
  public get genericWebService() {
    return this._genericWebService;
  }
  public putGenericWebService(value: DialogflowCxWebhookGenericWebService) {
    this._genericWebService.internalValue = value;
  }
  public resetGenericWebService() {
    this._genericWebService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericWebServiceInput() {
    return this._genericWebService.internalValue;
  }

  // service_directory - computed: false, optional: true, required: false
  private _serviceDirectory = new DialogflowCxWebhookServiceDirectoryOutputReference(this, "service_directory");
  public get serviceDirectory() {
    return this._serviceDirectory;
  }
  public putServiceDirectory(value: DialogflowCxWebhookServiceDirectory) {
    this._serviceDirectory.internalValue = value;
  }
  public resetServiceDirectory() {
    this._serviceDirectory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryInput() {
    return this._serviceDirectory.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DialogflowCxWebhookTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DialogflowCxWebhookTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disabled: cdktf.booleanToTerraform(this._disabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_spell_correction: cdktf.booleanToTerraform(this._enableSpellCorrection),
      enable_stackdriver_logging: cdktf.booleanToTerraform(this._enableStackdriverLogging),
      id: cdktf.stringToTerraform(this._id),
      parent: cdktf.stringToTerraform(this._parent),
      security_settings: cdktf.stringToTerraform(this._securitySettings),
      timeout: cdktf.stringToTerraform(this._timeout),
      generic_web_service: dialogflowCxWebhookGenericWebServiceToTerraform(this._genericWebService.internalValue),
      service_directory: dialogflowCxWebhookServiceDirectoryToTerraform(this._serviceDirectory.internalValue),
      timeouts: dialogflowCxWebhookTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_spell_correction: {
        value: cdktf.booleanToHclTerraform(this._enableSpellCorrection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_stackdriver_logging: {
        value: cdktf.booleanToHclTerraform(this._enableStackdriverLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_settings: {
        value: cdktf.stringToHclTerraform(this._securitySettings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generic_web_service: {
        value: dialogflowCxWebhookGenericWebServiceToHclTerraform(this._genericWebService.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxWebhookGenericWebServiceList",
      },
      service_directory: {
        value: dialogflowCxWebhookServiceDirectoryToHclTerraform(this._serviceDirectory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxWebhookServiceDirectoryList",
      },
      timeouts: {
        value: dialogflowCxWebhookTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DialogflowCxWebhookTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
