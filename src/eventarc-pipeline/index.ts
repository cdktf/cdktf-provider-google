/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventarcPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * User-defined annotations. See https://google.aip.dev/128#annotations.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#annotations EventarcPipeline#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Resource name of a KMS crypto key (managed by the user) used to
  * encrypt/decrypt the event data. If not set, an internal Google-owned key
  * will be used to encrypt messages. It must match the pattern
  * "projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#crypto_key_name EventarcPipeline#crypto_key_name}
  */
  readonly cryptoKeyName?: string;
  /**
  * Display name of resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#display_name EventarcPipeline#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#id EventarcPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User labels attached to the Pipeline that can be used to group
  * resources. An object containing a list of "key": value pairs. Example: {
  * "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#labels EventarcPipeline#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#location EventarcPipeline#location}
  */
  readonly location: string;
  /**
  * The user-provided ID to be assigned to the Pipeline. It should match the
  * format '^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#pipeline_id EventarcPipeline#pipeline_id}
  */
  readonly pipelineId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#project EventarcPipeline#project}
  */
  readonly project?: string;
  /**
  * destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#destinations EventarcPipeline#destinations}
  */
  readonly destinations: EventarcPipelineDestinations[] | cdktf.IResolvable;
  /**
  * input_payload_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#input_payload_format EventarcPipeline#input_payload_format}
  */
  readonly inputPayloadFormat?: EventarcPipelineInputPayloadFormat;
  /**
  * logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#logging_config EventarcPipeline#logging_config}
  */
  readonly loggingConfig?: EventarcPipelineLoggingConfig;
  /**
  * mediations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#mediations EventarcPipeline#mediations}
  */
  readonly mediations?: EventarcPipelineMediations[] | cdktf.IResolvable;
  /**
  * retry_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#retry_policy EventarcPipeline#retry_policy}
  */
  readonly retryPolicy?: EventarcPipelineRetryPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#timeouts EventarcPipeline#timeouts}
  */
  readonly timeouts?: EventarcPipelineTimeouts;
}
export interface EventarcPipelineDestinationsAuthenticationConfigGoogleOidc {
  /**
  * Audience to be used to generate the OIDC Token. The audience claim
  * identifies the recipient that the JWT is intended for. If
  * unspecified, the destination URI will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#audience EventarcPipeline#audience}
  */
  readonly audience?: string;
  /**
  * Service account email used to generate the OIDC Token.
  * The principal who calls this API must have
  * iam.serviceAccounts.actAs permission in the service account. See
  * https://cloud.google.com/iam/docs/understanding-service-accounts
  * for more information. Eventarc service agents must have
  * roles/roles/iam.serviceAccountTokenCreator role to allow the
  * Pipeline to create OpenID tokens for authenticated requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#service_account EventarcPipeline#service_account}
  */
  readonly serviceAccount: string;
}

export function eventarcPipelineDestinationsAuthenticationConfigGoogleOidcToTerraform(struct?: EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference | EventarcPipelineDestinationsAuthenticationConfigGoogleOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function eventarcPipelineDestinationsAuthenticationConfigGoogleOidcToHclTerraform(struct?: EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference | EventarcPipelineDestinationsAuthenticationConfigGoogleOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventarcPipelineDestinationsAuthenticationConfigGoogleOidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcPipelineDestinationsAuthenticationConfigGoogleOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._serviceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}
export interface EventarcPipelineDestinationsAuthenticationConfigOauthToken {
  /**
  * OAuth scope to be used for generating OAuth access token. If not
  * specified, "https://www.googleapis.com/auth/cloud-platform" will be
  * used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#scope EventarcPipeline#scope}
  */
  readonly scope?: string;
  /**
  * Service account email used to generate the [OAuth
  * token](https://developers.google.com/identity/protocols/OAuth2).
  * The principal who calls this API must have
  * iam.serviceAccounts.actAs permission in the service account. See
  * https://cloud.google.com/iam/docs/understanding-service-accounts
  * for more information. Eventarc service agents must have
  * roles/roles/iam.serviceAccountTokenCreator role to allow Pipeline
  * to create OAuth2 tokens for authenticated requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#service_account EventarcPipeline#service_account}
  */
  readonly serviceAccount: string;
}

export function eventarcPipelineDestinationsAuthenticationConfigOauthTokenToTerraform(struct?: EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference | EventarcPipelineDestinationsAuthenticationConfigOauthToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function eventarcPipelineDestinationsAuthenticationConfigOauthTokenToHclTerraform(struct?: EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference | EventarcPipelineDestinationsAuthenticationConfigOauthToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventarcPipelineDestinationsAuthenticationConfigOauthToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcPipelineDestinationsAuthenticationConfigOauthToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scope = undefined;
      this._serviceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scope = value.scope;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}
export interface EventarcPipelineDestinationsAuthenticationConfig {
  /**
  * google_oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#google_oidc EventarcPipeline#google_oidc}
  */
  readonly googleOidc?: EventarcPipelineDestinationsAuthenticationConfigGoogleOidc;
  /**
  * oauth_token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#oauth_token EventarcPipeline#oauth_token}
  */
  readonly oauthToken?: EventarcPipelineDestinationsAuthenticationConfigOauthToken;
}

export function eventarcPipelineDestinationsAuthenticationConfigToTerraform(struct?: EventarcPipelineDestinationsAuthenticationConfigOutputReference | EventarcPipelineDestinationsAuthenticationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    google_oidc: eventarcPipelineDestinationsAuthenticationConfigGoogleOidcToTerraform(struct!.googleOidc),
    oauth_token: eventarcPipelineDestinationsAuthenticationConfigOauthTokenToTerraform(struct!.oauthToken),
  }
}


export function eventarcPipelineDestinationsAuthenticationConfigToHclTerraform(struct?: EventarcPipelineDestinationsAuthenticationConfigOutputReference | EventarcPipelineDestinationsAuthenticationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    google_oidc: {
      value: eventarcPipelineDestinationsAuthenticationConfigGoogleOidcToHclTerraform(struct!.googleOidc),
      isBlock: true,
      type: "list",
      storageClassType: "EventarcPipelineDestinationsAuthenticationConfigGoogleOidcList",
    },
    oauth_token: {
      value: eventarcPipelineDestinationsAuthenticationConfigOauthTokenToHclTerraform(struct!.oauthToken),
      isBlock: true,
      type: "list",
      storageClassType: "EventarcPipelineDestinationsAuthenticationConfigOauthTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventarcPipelineDestinationsAuthenticationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventarcPipelineDestinationsAuthenticationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._googleOidc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleOidc = this._googleOidc?.internalValue;
    }
    if (this._oauthToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthToken = this._oauthToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcPipelineDestinationsAuthenticationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._googleOidc.internalValue = undefined;
      this._oauthToken.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._googleOidc.internalValue = value.googleOidc;
      this._oauthToken.internalValue = value.oauthToken;
    }
  }

  // google_oidc - computed: false, optional: true, required: false
  private _googleOidc = new EventarcPipelineDestinationsAuthenticationConfigGoogleOidcOutputReference(this, "google_oidc");
  public get googleOidc() {
    return this._googleOidc;
  }
  public putGoogleOidc(value: EventarcPipelineDestinationsAuthenticationConfigGoogleOidc) {
    this._googleOidc.internalValue = value;
  }
  public resetGoogleOidc() {
    this._googleOidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleOidcInput() {
    return this._googleOidc.internalValue;
  }

  // oauth_token - computed: false, optional: true, required: false
  private _oauthToken = new EventarcPipelineDestinationsAuthenticationConfigOauthTokenOutputReference(this, "oauth_token");
  public get oauthToken() {
    return this._oauthToken;
  }
  public putOauthToken(value: EventarcPipelineDestinationsAuthenticationConfigOauthToken) {
    this._oauthToken.internalValue = value;
  }
  public resetOauthToken() {
    this._oauthToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthTokenInput() {
    return this._oauthToken.internalValue;
  }
}
export interface EventarcPipelineDestinationsHttpEndpoint {
  /**
  * The CEL expression used to modify how the destination-bound HTTP
  * request is constructed.
  * 
  * If a binding expression is not specified here, the message
  * is treated as a CloudEvent and is mapped to the HTTP request according
  * to the CloudEvent HTTP Protocol Binding Binary Content Mode
  * (https://github.com/cloudevents/spec/blob/main/cloudevents/bindings/http-protocol-binding.md#31-binary-content-mode).
  * In this representation, all fields except the 'data' and
  * 'datacontenttype' field on the message are mapped to HTTP request
  * headers with a prefix of 'ce-'.
  * 
  * To construct the HTTP request payload and the value of the content-type
  * HTTP header, the payload format is defined as follows:
  * 1) Use the output_payload_format_type on the Pipeline.Destination if it
  * is set, else:
  * 2) Use the input_payload_format_type on the Pipeline if it is set,
  * else:
  * 3) Treat the payload as opaque binary data.
  * 
  * The 'data' field of the message is converted to the payload format or
  * left as-is for case 3) and then attached as the payload of the HTTP
  * request. The 'content-type' header on the HTTP request is set to the
  * payload format type or left empty for case 3). However, if a mediation
  * has updated the 'datacontenttype' field on the message so that it is
  * not the same as the payload format type but it is still a prefix of the
  * payload format type, then the 'content-type' header on the HTTP request
  * is set to this 'datacontenttype' value. For example, if the
  * 'datacontenttype' is "application/json" and the payload format type is
  * "application/json; charset=utf-8", then the 'content-type' header on
  * the HTTP request is set to "application/json; charset=utf-8".
  * 
  * If a non-empty binding expression is specified then this expression is
  * used to modify the default CloudEvent HTTP Protocol Binding Binary
  * Content representation.
  * The result of the CEL expression must be a map of key/value pairs
  * which is used as follows:
  * - If a map named 'headers' exists on the result of the expression,
  * then its key/value pairs are directly mapped to the HTTP request
  * headers. The headers values are constructed from the corresponding
  * value type's canonical representation. If the 'headers' field doesn't
  * exist then the resulting HTTP request will be the headers of the
  * CloudEvent HTTP Binding Binary Content Mode representation of the final
  * message. Note: If the specified binding expression, has updated the
  * 'datacontenttype' field on the message so that it is not the same as
  * the payload format type but it is still a prefix of the payload format
  * type, then the 'content-type' header in the 'headers' map is set to
  * this 'datacontenttype' value.
  * - If a field named 'body' exists on the result of the expression then
  * its value is directly mapped to the body of the request. If the value
  * of the 'body' field is of type bytes or string then it is used for
  * the HTTP request body as-is, with no conversion. If the body field is
  * of any other type then it is converted to a JSON string. If the body
  * field does not exist then the resulting payload of the HTTP request
  * will be data value of the CloudEvent HTTP Binding Binary Content Mode
  * representation of the final message as described earlier.
  * - Any other fields in the resulting expression will be ignored.
  * 
  * The CEL expression may access the incoming CloudEvent message in its
  * definition, as follows:
  * - The 'data' field of the incoming CloudEvent message can be accessed
  * using the 'message.data' value. Subfields of 'message.data' may also be
  * accessed if an input_payload_format has been specified on the Pipeline.
  * - Each attribute of the incoming CloudEvent message can be accessed
  * using the 'message.' value, where  is replaced with the
  * name of the attribute.
  * - Existing headers can be accessed in the CEL expression using the
  * 'headers' variable. The 'headers' variable defines a map of key/value
  * pairs corresponding to the HTTP headers of the CloudEvent HTTP Binding
  * Binary Content Mode representation of the final message as described
  * earlier. For example, the following CEL expression can be used to
  * construct an HTTP request by adding an additional header to the HTTP
  * headers of the CloudEvent HTTP Binding Binary Content Mode
  * representation of the final message and by overwriting the body of the
  * request:
  * 
  * ```
  * {
  * "headers": headers.merge({"new-header-key": "new-header-value"}),
  * "body": "new-body"
  * }
  * ```
  * - The default binding for the message payload can be accessed using the
  * 'body' variable. It conatins a string representation of the message
  * payload in the format specified by the 'output_payload_format' field.
  * If the 'input_payload_format' field is not set, the 'body'
  * variable contains the same message payload bytes that were published.
  * 
  * Additionally, the following CEL extension functions are provided for
  * use in this CEL expression:
  * - toBase64Url:
  * map.toBase64Url() -> string
  * - Converts a CelValue to a base64url encoded string
  * - toJsonString: map.toJsonString() -> string
  * - Converts a CelValue to a JSON string
  * - merge:
  * map1.merge(map2) -> map3
  * - Merges the passed CEL map with the existing CEL map the
  * function is applied to.
  * - If the same key exists in both maps, if the key's value is type
  * map both maps are merged else the value from the passed map is
  * used.
  * - denormalize:
  * map.denormalize() -> map
  * - Denormalizes a CEL map such that every value of type map or key
  * in the map is expanded to return a single level map.
  * - The resulting keys are "." separated indices of the map keys.
  * - For example:
  * {
  * "a": 1,
  * "b": {
  * "c": 2,
  * "d": 3
  * }
  * "e": [4, 5]
  * }
  * .denormalize()
  * -> {
  * "a": 1,
  * "b.c": 2,
  * "b.d": 3,
  * "e.0": 4,
  * "e.1": 5
  * }
  * - setField:
  * map.setField(key, value) -> message
  * - Sets the field of the message with the given key to the
  * given value.
  * - If the field is not present it will be added.
  * - If the field is present it will be overwritten.
  * - The key can be a dot separated path to set a field in a nested
  * message.
  * - Key must be of type string.
  * - Value may be any valid type.
  * - removeFields:
  * map.removeFields([key1, key2, ...]) -> message
  * - Removes the fields of the map with the given keys.
  * - The keys can be a dot separated path to remove a field in a
  * nested message.
  * - If a key is not found it will be ignored.
  * - Keys must be of type string.
  * - toMap:
  * [map1, map2, ...].toMap() -> map
  * - Converts a CEL list of CEL maps to a single CEL map
  * - toCloudEventJsonWithPayloadFormat:
  * message.toCloudEventJsonWithPayloadFormat() -> map
  * - Converts a message to the corresponding structure of JSON
  * format for CloudEvents.
  * - It converts 'data' to destination payload format
  * specified in 'output_payload_format'. If 'output_payload_format' is
  * not set, the data will remain unchanged.
  * - It also sets the corresponding datacontenttype of
  * the CloudEvent, as indicated by
  * 'output_payload_format'. If no
  * 'output_payload_format' is set it will use the value of the
  * "datacontenttype" attribute on the CloudEvent if present, else
  * remove "datacontenttype" attribute.
  * - This function expects that the content of the message will
  * adhere to the standard CloudEvent format. If it doesn't then this
  * function will fail.
  * - The result is a CEL map that corresponds to the JSON
  * representation of the CloudEvent. To convert that data to a JSON
  * string it can be chained with the toJsonString function.
  * 
  * The Pipeline expects that the message it receives adheres to the
  * standard CloudEvent format. If it doesn't then the outgoing message
  * request may fail with a persistent error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#message_binding_template EventarcPipeline#message_binding_template}
  */
  readonly messageBindingTemplate?: string;
  /**
  * The URI of the HTTP enpdoint.
  * 
  * The value must be a RFC2396 URI string.
  * Examples: 'https://svc.us-central1.p.local:8080/route'.
  * Only the HTTPS protocol is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#uri EventarcPipeline#uri}
  */
  readonly uri: string;
}

export function eventarcPipelineDestinationsHttpEndpointToTerraform(struct?: EventarcPipelineDestinationsHttpEndpointOutputReference | EventarcPipelineDestinationsHttpEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_binding_template: cdktf.stringToTerraform(struct!.messageBindingTemplate),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function eventarcPipelineDestinationsHttpEndpointToHclTerraform(struct?: EventarcPipelineDestinationsHttpEndpointOutputReference | EventarcPipelineDestinationsHttpEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_binding_template: {
      value: cdktf.stringToHclTerraform(struct!.messageBindingTemplate),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventarcPipelineDestinationsHttpEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventarcPipelineDestinationsHttpEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageBindingTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageBindingTemplate = this._messageBindingTemplate;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcPipelineDestinationsHttpEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._messageBindingTemplate = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._messageBindingTemplate = value.messageBindingTemplate;
      this._uri = value.uri;
    }
  }

  // message_binding_template - computed: false, optional: true, required: false
  private _messageBindingTemplate?: string; 
  public get messageBindingTemplate() {
    return this.getStringAttribute('message_binding_template');
  }
  public set messageBindingTemplate(value: string) {
    this._messageBindingTemplate = value;
  }
  public resetMessageBindingTemplate() {
    this._messageBindingTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageBindingTemplateInput() {
    return this._messageBindingTemplate;
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
}
export interface EventarcPipelineDestinationsNetworkConfig {
  /**
  * Name of the NetworkAttachment that allows access to the consumer VPC.
  * Format:
  * 'projects/{PROJECT_ID}/regions/{REGION}/networkAttachments/{NETWORK_ATTACHMENT_NAME}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#network_attachment EventarcPipeline#network_attachment}
  */
  readonly networkAttachment: string;
}

export function eventarcPipelineDestinationsNetworkConfigToTerraform(struct?: EventarcPipelineDestinationsNetworkConfigOutputReference | EventarcPipelineDestinationsNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_attachment: cdktf.stringToTerraform(struct!.networkAttachment),
  }
}


export function eventarcPipelineDestinationsNetworkConfigToHclTerraform(struct?: EventarcPipelineDestinationsNetworkConfigOutputReference | EventarcPipelineDestinationsNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_attachment: {
      value: cdktf.stringToHclTerraform(struct!.networkAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventarcPipelineDestinationsNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventarcPipelineDestinationsNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAttachment = this._networkAttachment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcPipelineDestinationsNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkAttachment = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkAttachment = value.networkAttachment;
    }
  }

  // network_attachment - computed: false, optional: false, required: true
  private _networkAttachment?: string; 
  public get networkAttachment() {
    return this.getStringAttribute('network_attachment');
  }
  public set networkAttachment(value: string) {
    this._networkAttachment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAttachmentInput() {
    return this._networkAttachment;
  }
}
export interface EventarcPipelineDestinationsOutputPayloadFormatAvro {
  /**
  * The entire schema definition is stored in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#schema_definition EventarcPipeline#schema_definition}
  */
  readonly schemaDefinition?: string;
}

export function eventarcPipelineDestinationsOutputPayloadFormatAvroToTerraform(struct?: EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference | EventarcPipelineDestinationsOutputPayloadFormatAvro): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_definition: cdktf.stringToTerraform(struct!.schemaDefinition),
  }
}


export function eventarcPipelineDestinationsOutputPayloadFormatAvroToHclTerraform(struct?: EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference | EventarcPipelineDestinationsOutputPayloadFormatAvro): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_definition: {
      value: cdktf.stringToHclTerraform(struct!.schemaDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventarcPipelineDestinationsOutputPayloadFormatAvro | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaDefinition = this._schemaDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcPipelineDestinationsOutputPayloadFormatAvro | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemaDefinition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemaDefinition = value.schemaDefinition;
    }
  }

  // schema_definition - computed: false, optional: true, required: false
  private _schemaDefinition?: string; 
  public get schemaDefinition() {
    return this.getStringAttribute('schema_definition');
  }
  public set schemaDefinition(value: string) {
    this._schemaDefinition = value;
  }
  public resetSchemaDefinition() {
    this._schemaDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaDefinitionInput() {
    return this._schemaDefinition;
  }
}
export interface EventarcPipelineDestinationsOutputPayloadFormatJson {
}

export function eventarcPipelineDestinationsOutputPayloadFormatJsonToTerraform(struct?: EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference | EventarcPipelineDestinationsOutputPayloadFormatJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function eventarcPipelineDestinationsOutputPayloadFormatJsonToHclTerraform(struct?: EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference | EventarcPipelineDestinationsOutputPayloadFormatJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventarcPipelineDestinationsOutputPayloadFormatJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcPipelineDestinationsOutputPayloadFormatJson | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface EventarcPipelineDestinationsOutputPayloadFormatProtobuf {
  /**
  * The entire schema definition is stored in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#schema_definition EventarcPipeline#schema_definition}
  */
  readonly schemaDefinition?: string;
}

export function eventarcPipelineDestinationsOutputPayloadFormatProtobufToTerraform(struct?: EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference | EventarcPipelineDestinationsOutputPayloadFormatProtobuf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_definition: cdktf.stringToTerraform(struct!.schemaDefinition),
  }
}


export function eventarcPipelineDestinationsOutputPayloadFormatProtobufToHclTerraform(struct?: EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference | EventarcPipelineDestinationsOutputPayloadFormatProtobuf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_definition: {
      value: cdktf.stringToHclTerraform(struct!.schemaDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventarcPipelineDestinationsOutputPayloadFormatProtobuf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaDefinition = this._schemaDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcPipelineDestinationsOutputPayloadFormatProtobuf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemaDefinition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemaDefinition = value.schemaDefinition;
    }
  }

  // schema_definition - computed: false, optional: true, required: false
  private _schemaDefinition?: string; 
  public get schemaDefinition() {
    return this.getStringAttribute('schema_definition');
  }
  public set schemaDefinition(value: string) {
    this._schemaDefinition = value;
  }
  public resetSchemaDefinition() {
    this._schemaDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaDefinitionInput() {
    return this._schemaDefinition;
  }
}
export interface EventarcPipelineDestinationsOutputPayloadFormat {
  /**
  * avro block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#avro EventarcPipeline#avro}
  */
  readonly avro?: EventarcPipelineDestinationsOutputPayloadFormatAvro;
  /**
  * json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#json EventarcPipeline#json}
  */
  readonly json?: EventarcPipelineDestinationsOutputPayloadFormatJson;
  /**
  * protobuf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#protobuf EventarcPipeline#protobuf}
  */
  readonly protobuf?: EventarcPipelineDestinationsOutputPayloadFormatProtobuf;
}

export function eventarcPipelineDestinationsOutputPayloadFormatToTerraform(struct?: EventarcPipelineDestinationsOutputPayloadFormatOutputReference | EventarcPipelineDestinationsOutputPayloadFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avro: eventarcPipelineDestinationsOutputPayloadFormatAvroToTerraform(struct!.avro),
    json: eventarcPipelineDestinationsOutputPayloadFormatJsonToTerraform(struct!.json),
    protobuf: eventarcPipelineDestinationsOutputPayloadFormatProtobufToTerraform(struct!.protobuf),
  }
}


export function eventarcPipelineDestinationsOutputPayloadFormatToHclTerraform(struct?: EventarcPipelineDestinationsOutputPayloadFormatOutputReference | EventarcPipelineDestinationsOutputPayloadFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avro: {
      value: eventarcPipelineDestinationsOutputPayloadFormatAvroToHclTerraform(struct!.avro),
      isBlock: true,
      type: "list",
      storageClassType: "EventarcPipelineDestinationsOutputPayloadFormatAvroList",
    },
    json: {
      value: eventarcPipelineDestinationsOutputPayloadFormatJsonToHclTerraform(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "EventarcPipelineDestinationsOutputPayloadFormatJsonList",
    },
    protobuf: {
      value: eventarcPipelineDestinationsOutputPayloadFormatProtobufToHclTerraform(struct!.protobuf),
      isBlock: true,
      type: "list",
      storageClassType: "EventarcPipelineDestinationsOutputPayloadFormatProtobufList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventarcPipelineDestinationsOutputPayloadFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventarcPipelineDestinationsOutputPayloadFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avro?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avro = this._avro?.internalValue;
    }
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    if (this._protobuf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protobuf = this._protobuf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcPipelineDestinationsOutputPayloadFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._avro.internalValue = undefined;
      this._json.internalValue = undefined;
      this._protobuf.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._avro.internalValue = value.avro;
      this._json.internalValue = value.json;
      this._protobuf.internalValue = value.protobuf;
    }
  }

  // avro - computed: false, optional: true, required: false
  private _avro = new EventarcPipelineDestinationsOutputPayloadFormatAvroOutputReference(this, "avro");
  public get avro() {
    return this._avro;
  }
  public putAvro(value: EventarcPipelineDestinationsOutputPayloadFormatAvro) {
    this._avro.internalValue = value;
  }
  public resetAvro() {
    this._avro.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroInput() {
    return this._avro.internalValue;
  }

  // json - computed: false, optional: true, required: false
  private _json = new EventarcPipelineDestinationsOutputPayloadFormatJsonOutputReference(this, "json");
  public get json() {
    return this._json;
  }
  public putJson(value: EventarcPipelineDestinationsOutputPayloadFormatJson) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }

  // protobuf - computed: false, optional: true, required: false
  private _protobuf = new EventarcPipelineDestinationsOutputPayloadFormatProtobufOutputReference(this, "protobuf");
  public get protobuf() {
    return this._protobuf;
  }
  public putProtobuf(value: EventarcPipelineDestinationsOutputPayloadFormatProtobuf) {
    this._protobuf.internalValue = value;
  }
  public resetProtobuf() {
    this._protobuf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protobufInput() {
    return this._protobuf.internalValue;
  }
}
export interface EventarcPipelineDestinations {
  /**
  * The resource name of the Message Bus to which events should be
  * published. The Message Bus resource should exist in the same project as
  * the Pipeline. Format:
  * 'projects/{project}/locations/{location}/messageBuses/{message_bus}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#message_bus EventarcPipeline#message_bus}
  */
  readonly messageBus?: string;
  /**
  * The resource name of the Pub/Sub topic to which events should be
  * published. Format:
  * 'projects/{project}/locations/{location}/topics/{topic}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#topic EventarcPipeline#topic}
  */
  readonly topic?: string;
  /**
  * The resource name of the Workflow whose Executions are triggered by
  * the events. The Workflow resource should be deployed in the same
  * project as the Pipeline. Format:
  * 'projects/{project}/locations/{location}/workflows/{workflow}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#workflow EventarcPipeline#workflow}
  */
  readonly workflow?: string;
  /**
  * authentication_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#authentication_config EventarcPipeline#authentication_config}
  */
  readonly authenticationConfig?: EventarcPipelineDestinationsAuthenticationConfig;
  /**
  * http_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#http_endpoint EventarcPipeline#http_endpoint}
  */
  readonly httpEndpoint?: EventarcPipelineDestinationsHttpEndpoint;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#network_config EventarcPipeline#network_config}
  */
  readonly networkConfig?: EventarcPipelineDestinationsNetworkConfig;
  /**
  * output_payload_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#output_payload_format EventarcPipeline#output_payload_format}
  */
  readonly outputPayloadFormat?: EventarcPipelineDestinationsOutputPayloadFormat;
}

export function eventarcPipelineDestinationsToTerraform(struct?: EventarcPipelineDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_bus: cdktf.stringToTerraform(struct!.messageBus),
    topic: cdktf.stringToTerraform(struct!.topic),
    workflow: cdktf.stringToTerraform(struct!.workflow),
    authentication_config: eventarcPipelineDestinationsAuthenticationConfigToTerraform(struct!.authenticationConfig),
    http_endpoint: eventarcPipelineDestinationsHttpEndpointToTerraform(struct!.httpEndpoint),
    network_config: eventarcPipelineDestinationsNetworkConfigToTerraform(struct!.networkConfig),
    output_payload_format: eventarcPipelineDestinationsOutputPayloadFormatToTerraform(struct!.outputPayloadFormat),
  }
}


export function eventarcPipelineDestinationsToHclTerraform(struct?: EventarcPipelineDestinations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_bus: {
      value: cdktf.stringToHclTerraform(struct!.messageBus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow: {
      value: cdktf.stringToHclTerraform(struct!.workflow),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_config: {
      value: eventarcPipelineDestinationsAuthenticationConfigToHclTerraform(struct!.authenticationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EventarcPipelineDestinationsAuthenticationConfigList",
    },
    http_endpoint: {
      value: eventarcPipelineDestinationsHttpEndpointToHclTerraform(struct!.httpEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "EventarcPipelineDestinationsHttpEndpointList",
    },
    network_config: {
      value: eventarcPipelineDestinationsNetworkConfigToHclTerraform(struct!.networkConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EventarcPipelineDestinationsNetworkConfigList",
    },
    output_payload_format: {
      value: eventarcPipelineDestinationsOutputPayloadFormatToHclTerraform(struct!.outputPayloadFormat),
      isBlock: true,
      type: "list",
      storageClassType: "EventarcPipelineDestinationsOutputPayloadFormatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventarcPipelineDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventarcPipelineDestinations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageBus !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageBus = this._messageBus;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._workflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflow = this._workflow;
    }
    if (this._authenticationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationConfig = this._authenticationConfig?.internalValue;
    }
    if (this._httpEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpEndpoint = this._httpEndpoint?.internalValue;
    }
    if (this._networkConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkConfig = this._networkConfig?.internalValue;
    }
    if (this._outputPayloadFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputPayloadFormat = this._outputPayloadFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcPipelineDestinations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messageBus = undefined;
      this._topic = undefined;
      this._workflow = undefined;
      this._authenticationConfig.internalValue = undefined;
      this._httpEndpoint.internalValue = undefined;
      this._networkConfig.internalValue = undefined;
      this._outputPayloadFormat.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messageBus = value.messageBus;
      this._topic = value.topic;
      this._workflow = value.workflow;
      this._authenticationConfig.internalValue = value.authenticationConfig;
      this._httpEndpoint.internalValue = value.httpEndpoint;
      this._networkConfig.internalValue = value.networkConfig;
      this._outputPayloadFormat.internalValue = value.outputPayloadFormat;
    }
  }

  // message_bus - computed: false, optional: true, required: false
  private _messageBus?: string; 
  public get messageBus() {
    return this.getStringAttribute('message_bus');
  }
  public set messageBus(value: string) {
    this._messageBus = value;
  }
  public resetMessageBus() {
    this._messageBus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageBusInput() {
    return this._messageBus;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // workflow - computed: false, optional: true, required: false
  private _workflow?: string; 
  public get workflow() {
    return this.getStringAttribute('workflow');
  }
  public set workflow(value: string) {
    this._workflow = value;
  }
  public resetWorkflow() {
    this._workflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow;
  }

  // authentication_config - computed: false, optional: true, required: false
  private _authenticationConfig = new EventarcPipelineDestinationsAuthenticationConfigOutputReference(this, "authentication_config");
  public get authenticationConfig() {
    return this._authenticationConfig;
  }
  public putAuthenticationConfig(value: EventarcPipelineDestinationsAuthenticationConfig) {
    this._authenticationConfig.internalValue = value;
  }
  public resetAuthenticationConfig() {
    this._authenticationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationConfigInput() {
    return this._authenticationConfig.internalValue;
  }

  // http_endpoint - computed: false, optional: true, required: false
  private _httpEndpoint = new EventarcPipelineDestinationsHttpEndpointOutputReference(this, "http_endpoint");
  public get httpEndpoint() {
    return this._httpEndpoint;
  }
  public putHttpEndpoint(value: EventarcPipelineDestinationsHttpEndpoint) {
    this._httpEndpoint.internalValue = value;
  }
  public resetHttpEndpoint() {
    this._httpEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointInput() {
    return this._httpEndpoint.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new EventarcPipelineDestinationsNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: EventarcPipelineDestinationsNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // output_payload_format - computed: false, optional: true, required: false
  private _outputPayloadFormat = new EventarcPipelineDestinationsOutputPayloadFormatOutputReference(this, "output_payload_format");
  public get outputPayloadFormat() {
    return this._outputPayloadFormat;
  }
  public putOutputPayloadFormat(value: EventarcPipelineDestinationsOutputPayloadFormat) {
    this._outputPayloadFormat.internalValue = value;
  }
  public resetOutputPayloadFormat() {
    this._outputPayloadFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPayloadFormatInput() {
    return this._outputPayloadFormat.internalValue;
  }
}

export class EventarcPipelineDestinationsList extends cdktf.ComplexList {
  public internalValue? : EventarcPipelineDestinations[] | cdktf.IResolvable

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
  public get(index: number): EventarcPipelineDestinationsOutputReference {
    return new EventarcPipelineDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventarcPipelineInputPayloadFormatAvro {
  /**
  * The entire schema definition is stored in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#schema_definition EventarcPipeline#schema_definition}
  */
  readonly schemaDefinition?: string;
}

export function eventarcPipelineInputPayloadFormatAvroToTerraform(struct?: EventarcPipelineInputPayloadFormatAvroOutputReference | EventarcPipelineInputPayloadFormatAvro): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_definition: cdktf.stringToTerraform(struct!.schemaDefinition),
  }
}


export function eventarcPipelineInputPayloadFormatAvroToHclTerraform(struct?: EventarcPipelineInputPayloadFormatAvroOutputReference | EventarcPipelineInputPayloadFormatAvro): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_definition: {
      value: cdktf.stringToHclTerraform(struct!.schemaDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventarcPipelineInputPayloadFormatAvroOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventarcPipelineInputPayloadFormatAvro | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaDefinition = this._schemaDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcPipelineInputPayloadFormatAvro | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemaDefinition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemaDefinition = value.schemaDefinition;
    }
  }

  // schema_definition - computed: false, optional: true, required: false
  private _schemaDefinition?: string; 
  public get schemaDefinition() {
    return this.getStringAttribute('schema_definition');
  }
  public set schemaDefinition(value: string) {
    this._schemaDefinition = value;
  }
  public resetSchemaDefinition() {
    this._schemaDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaDefinitionInput() {
    return this._schemaDefinition;
  }
}
export interface EventarcPipelineInputPayloadFormatJson {
}

export function eventarcPipelineInputPayloadFormatJsonToTerraform(struct?: EventarcPipelineInputPayloadFormatJsonOutputReference | EventarcPipelineInputPayloadFormatJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function eventarcPipelineInputPayloadFormatJsonToHclTerraform(struct?: EventarcPipelineInputPayloadFormatJsonOutputReference | EventarcPipelineInputPayloadFormatJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EventarcPipelineInputPayloadFormatJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventarcPipelineInputPayloadFormatJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcPipelineInputPayloadFormatJson | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface EventarcPipelineInputPayloadFormatProtobuf {
  /**
  * The entire schema definition is stored in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#schema_definition EventarcPipeline#schema_definition}
  */
  readonly schemaDefinition?: string;
}

export function eventarcPipelineInputPayloadFormatProtobufToTerraform(struct?: EventarcPipelineInputPayloadFormatProtobufOutputReference | EventarcPipelineInputPayloadFormatProtobuf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_definition: cdktf.stringToTerraform(struct!.schemaDefinition),
  }
}


export function eventarcPipelineInputPayloadFormatProtobufToHclTerraform(struct?: EventarcPipelineInputPayloadFormatProtobufOutputReference | EventarcPipelineInputPayloadFormatProtobuf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_definition: {
      value: cdktf.stringToHclTerraform(struct!.schemaDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventarcPipelineInputPayloadFormatProtobufOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventarcPipelineInputPayloadFormatProtobuf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaDefinition = this._schemaDefinition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcPipelineInputPayloadFormatProtobuf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._schemaDefinition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._schemaDefinition = value.schemaDefinition;
    }
  }

  // schema_definition - computed: false, optional: true, required: false
  private _schemaDefinition?: string; 
  public get schemaDefinition() {
    return this.getStringAttribute('schema_definition');
  }
  public set schemaDefinition(value: string) {
    this._schemaDefinition = value;
  }
  public resetSchemaDefinition() {
    this._schemaDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaDefinitionInput() {
    return this._schemaDefinition;
  }
}
export interface EventarcPipelineInputPayloadFormat {
  /**
  * avro block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#avro EventarcPipeline#avro}
  */
  readonly avro?: EventarcPipelineInputPayloadFormatAvro;
  /**
  * json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#json EventarcPipeline#json}
  */
  readonly json?: EventarcPipelineInputPayloadFormatJson;
  /**
  * protobuf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#protobuf EventarcPipeline#protobuf}
  */
  readonly protobuf?: EventarcPipelineInputPayloadFormatProtobuf;
}

export function eventarcPipelineInputPayloadFormatToTerraform(struct?: EventarcPipelineInputPayloadFormatOutputReference | EventarcPipelineInputPayloadFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    avro: eventarcPipelineInputPayloadFormatAvroToTerraform(struct!.avro),
    json: eventarcPipelineInputPayloadFormatJsonToTerraform(struct!.json),
    protobuf: eventarcPipelineInputPayloadFormatProtobufToTerraform(struct!.protobuf),
  }
}


export function eventarcPipelineInputPayloadFormatToHclTerraform(struct?: EventarcPipelineInputPayloadFormatOutputReference | EventarcPipelineInputPayloadFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    avro: {
      value: eventarcPipelineInputPayloadFormatAvroToHclTerraform(struct!.avro),
      isBlock: true,
      type: "list",
      storageClassType: "EventarcPipelineInputPayloadFormatAvroList",
    },
    json: {
      value: eventarcPipelineInputPayloadFormatJsonToHclTerraform(struct!.json),
      isBlock: true,
      type: "list",
      storageClassType: "EventarcPipelineInputPayloadFormatJsonList",
    },
    protobuf: {
      value: eventarcPipelineInputPayloadFormatProtobufToHclTerraform(struct!.protobuf),
      isBlock: true,
      type: "list",
      storageClassType: "EventarcPipelineInputPayloadFormatProtobufList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventarcPipelineInputPayloadFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventarcPipelineInputPayloadFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._avro?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avro = this._avro?.internalValue;
    }
    if (this._json?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.json = this._json?.internalValue;
    }
    if (this._protobuf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protobuf = this._protobuf?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcPipelineInputPayloadFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._avro.internalValue = undefined;
      this._json.internalValue = undefined;
      this._protobuf.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._avro.internalValue = value.avro;
      this._json.internalValue = value.json;
      this._protobuf.internalValue = value.protobuf;
    }
  }

  // avro - computed: false, optional: true, required: false
  private _avro = new EventarcPipelineInputPayloadFormatAvroOutputReference(this, "avro");
  public get avro() {
    return this._avro;
  }
  public putAvro(value: EventarcPipelineInputPayloadFormatAvro) {
    this._avro.internalValue = value;
  }
  public resetAvro() {
    this._avro.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroInput() {
    return this._avro.internalValue;
  }

  // json - computed: false, optional: true, required: false
  private _json = new EventarcPipelineInputPayloadFormatJsonOutputReference(this, "json");
  public get json() {
    return this._json;
  }
  public putJson(value: EventarcPipelineInputPayloadFormatJson) {
    this._json.internalValue = value;
  }
  public resetJson() {
    this._json.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonInput() {
    return this._json.internalValue;
  }

  // protobuf - computed: false, optional: true, required: false
  private _protobuf = new EventarcPipelineInputPayloadFormatProtobufOutputReference(this, "protobuf");
  public get protobuf() {
    return this._protobuf;
  }
  public putProtobuf(value: EventarcPipelineInputPayloadFormatProtobuf) {
    this._protobuf.internalValue = value;
  }
  public resetProtobuf() {
    this._protobuf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protobufInput() {
    return this._protobuf.internalValue;
  }
}
export interface EventarcPipelineLoggingConfig {
  /**
  * The minimum severity of logs that will be sent to Stackdriver/Platform
  * Telemetry. Logs at severitiy ≥ this value will be sent, unless it is NONE. Possible values: ["NONE", "DEBUG", "INFO", "NOTICE", "WARNING", "ERROR", "CRITICAL", "ALERT", "EMERGENCY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#log_severity EventarcPipeline#log_severity}
  */
  readonly logSeverity?: string;
}

export function eventarcPipelineLoggingConfigToTerraform(struct?: EventarcPipelineLoggingConfigOutputReference | EventarcPipelineLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_severity: cdktf.stringToTerraform(struct!.logSeverity),
  }
}


export function eventarcPipelineLoggingConfigToHclTerraform(struct?: EventarcPipelineLoggingConfigOutputReference | EventarcPipelineLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_severity: {
      value: cdktf.stringToHclTerraform(struct!.logSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventarcPipelineLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventarcPipelineLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSeverity = this._logSeverity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcPipelineLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logSeverity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logSeverity = value.logSeverity;
    }
  }

  // log_severity - computed: true, optional: true, required: false
  private _logSeverity?: string; 
  public get logSeverity() {
    return this.getStringAttribute('log_severity');
  }
  public set logSeverity(value: string) {
    this._logSeverity = value;
  }
  public resetLogSeverity() {
    this._logSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSeverityInput() {
    return this._logSeverity;
  }
}
export interface EventarcPipelineMediationsTransformation {
  /**
  * The CEL expression template to apply to transform messages.
  * The following CEL extension functions are provided for
  * use in this CEL expression:
  * - merge:
  * map1.merge(map2) -> map3
  * - Merges the passed CEL map with the existing CEL map the
  * function is applied to.
  * - If the same key exists in both maps, if the key's value is type
  * map both maps are merged else the value from the passed map is
  * used.
  * - denormalize:
  * map.denormalize() -> map
  * - Denormalizes a CEL map such that every value of type map or key
  * in the map is expanded to return a single level map.
  * - The resulting keys are "." separated indices of the map keys.
  * - For example:
  * {
  * "a": 1,
  * "b": {
  * "c": 2,
  * "d": 3
  * }
  * "e": [4, 5]
  * }
  * .denormalize()
  * -> {
  * "a": 1,
  * "b.c": 2,
  * "b.d": 3,
  * "e.0": 4,
  * "e.1": 5
  * }
  * - setField:
  * map.setField(key, value) -> message
  * - Sets the field of the message with the given key to the
  * given value.
  * - If the field is not present it will be added.
  * - If the field is present it will be overwritten.
  * - The key can be a dot separated path to set a field in a nested
  * message.
  * - Key must be of type string.
  * - Value may be any valid type.
  * - removeFields:
  * map.removeFields([key1, key2, ...]) -> message
  * - Removes the fields of the map with the given keys.
  * - The keys can be a dot separated path to remove a field in a
  * nested message.
  * - If a key is not found it will be ignored.
  * - Keys must be of type string.
  * - toMap:
  * [map1, map2, ...].toMap() -> map
  * - Converts a CEL list of CEL maps to a single CEL map
  * - toDestinationPayloadFormat():
  * message.data.toDestinationPayloadFormat() -> string or bytes
  * - Converts the message data to the destination payload format
  * specified in Pipeline.Destination.output_payload_format
  * - This function is meant to be applied to the message.data field.
  * - If the destination payload format is not set, the function will
  * return the message data unchanged.
  * - toCloudEventJsonWithPayloadFormat:
  * message.toCloudEventJsonWithPayloadFormat() -> map
  * - Converts a message to the corresponding structure of JSON
  * format for CloudEvents
  * - This function applies toDestinationPayloadFormat() to the
  * message data. It also sets the corresponding datacontenttype of
  * the CloudEvent, as indicated by
  * Pipeline.Destination.output_payload_format. If no
  * output_payload_format is set it will use the existing
  * datacontenttype on the CloudEvent if present, else leave
  * datacontenttype absent.
  * - This function expects that the content of the message will
  * adhere to the standard CloudEvent format. If it doesn't then this
  * function will fail.
  * - The result is a CEL map that corresponds to the JSON
  * representation of the CloudEvent. To convert that data to a JSON
  * string it can be chained with the toJsonString function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#transformation_template EventarcPipeline#transformation_template}
  */
  readonly transformationTemplate?: string;
}

export function eventarcPipelineMediationsTransformationToTerraform(struct?: EventarcPipelineMediationsTransformationOutputReference | EventarcPipelineMediationsTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transformation_template: cdktf.stringToTerraform(struct!.transformationTemplate),
  }
}


export function eventarcPipelineMediationsTransformationToHclTerraform(struct?: EventarcPipelineMediationsTransformationOutputReference | EventarcPipelineMediationsTransformation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transformation_template: {
      value: cdktf.stringToHclTerraform(struct!.transformationTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventarcPipelineMediationsTransformationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventarcPipelineMediationsTransformation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transformationTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationTemplate = this._transformationTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcPipelineMediationsTransformation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._transformationTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._transformationTemplate = value.transformationTemplate;
    }
  }

  // transformation_template - computed: false, optional: true, required: false
  private _transformationTemplate?: string; 
  public get transformationTemplate() {
    return this.getStringAttribute('transformation_template');
  }
  public set transformationTemplate(value: string) {
    this._transformationTemplate = value;
  }
  public resetTransformationTemplate() {
    this._transformationTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationTemplateInput() {
    return this._transformationTemplate;
  }
}
export interface EventarcPipelineMediations {
  /**
  * transformation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#transformation EventarcPipeline#transformation}
  */
  readonly transformation?: EventarcPipelineMediationsTransformation;
}

export function eventarcPipelineMediationsToTerraform(struct?: EventarcPipelineMediations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    transformation: eventarcPipelineMediationsTransformationToTerraform(struct!.transformation),
  }
}


export function eventarcPipelineMediationsToHclTerraform(struct?: EventarcPipelineMediations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    transformation: {
      value: eventarcPipelineMediationsTransformationToHclTerraform(struct!.transformation),
      isBlock: true,
      type: "list",
      storageClassType: "EventarcPipelineMediationsTransformationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventarcPipelineMediationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EventarcPipelineMediations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._transformation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformation = this._transformation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcPipelineMediations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._transformation.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._transformation.internalValue = value.transformation;
    }
  }

  // transformation - computed: false, optional: true, required: false
  private _transformation = new EventarcPipelineMediationsTransformationOutputReference(this, "transformation");
  public get transformation() {
    return this._transformation;
  }
  public putTransformation(value: EventarcPipelineMediationsTransformation) {
    this._transformation.internalValue = value;
  }
  public resetTransformation() {
    this._transformation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationInput() {
    return this._transformation.internalValue;
  }
}

export class EventarcPipelineMediationsList extends cdktf.ComplexList {
  public internalValue? : EventarcPipelineMediations[] | cdktf.IResolvable

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
  public get(index: number): EventarcPipelineMediationsOutputReference {
    return new EventarcPipelineMediationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EventarcPipelineRetryPolicy {
  /**
  * The maximum number of delivery attempts for any message. The value must
  * be between 1 and 100.
  * The default value for this field is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#max_attempts EventarcPipeline#max_attempts}
  */
  readonly maxAttempts?: number;
  /**
  * The maximum amount of seconds to wait between retry attempts. The value
  * must be between 1 and 600.
  * The default value for this field is 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#max_retry_delay EventarcPipeline#max_retry_delay}
  */
  readonly maxRetryDelay?: string;
  /**
  * The minimum amount of seconds to wait between retry attempts. The value
  * must be between 1 and 600.
  * The default value for this field is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#min_retry_delay EventarcPipeline#min_retry_delay}
  */
  readonly minRetryDelay?: string;
}

export function eventarcPipelineRetryPolicyToTerraform(struct?: EventarcPipelineRetryPolicyOutputReference | EventarcPipelineRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
    max_retry_delay: cdktf.stringToTerraform(struct!.maxRetryDelay),
    min_retry_delay: cdktf.stringToTerraform(struct!.minRetryDelay),
  }
}


export function eventarcPipelineRetryPolicyToHclTerraform(struct?: EventarcPipelineRetryPolicyOutputReference | EventarcPipelineRetryPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_retry_delay: {
      value: cdktf.stringToHclTerraform(struct!.maxRetryDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_retry_delay: {
      value: cdktf.stringToHclTerraform(struct!.minRetryDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EventarcPipelineRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EventarcPipelineRetryPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAttempts = this._maxAttempts;
    }
    if (this._maxRetryDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetryDelay = this._maxRetryDelay;
    }
    if (this._minRetryDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.minRetryDelay = this._minRetryDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcPipelineRetryPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxAttempts = undefined;
      this._maxRetryDelay = undefined;
      this._minRetryDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxAttempts = value.maxAttempts;
      this._maxRetryDelay = value.maxRetryDelay;
      this._minRetryDelay = value.minRetryDelay;
    }
  }

  // max_attempts - computed: false, optional: true, required: false
  private _maxAttempts?: number; 
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
  public set maxAttempts(value: number) {
    this._maxAttempts = value;
  }
  public resetMaxAttempts() {
    this._maxAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsInput() {
    return this._maxAttempts;
  }

  // max_retry_delay - computed: false, optional: true, required: false
  private _maxRetryDelay?: string; 
  public get maxRetryDelay() {
    return this.getStringAttribute('max_retry_delay');
  }
  public set maxRetryDelay(value: string) {
    this._maxRetryDelay = value;
  }
  public resetMaxRetryDelay() {
    this._maxRetryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryDelayInput() {
    return this._maxRetryDelay;
  }

  // min_retry_delay - computed: false, optional: true, required: false
  private _minRetryDelay?: string; 
  public get minRetryDelay() {
    return this.getStringAttribute('min_retry_delay');
  }
  public set minRetryDelay(value: string) {
    this._minRetryDelay = value;
  }
  public resetMinRetryDelay() {
    this._minRetryDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minRetryDelayInput() {
    return this._minRetryDelay;
  }
}
export interface EventarcPipelineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#create EventarcPipeline#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#delete EventarcPipeline#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#update EventarcPipeline#update}
  */
  readonly update?: string;
}

export function eventarcPipelineTimeoutsToTerraform(struct?: EventarcPipelineTimeouts | cdktf.IResolvable): any {
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


export function eventarcPipelineTimeoutsToHclTerraform(struct?: EventarcPipelineTimeouts | cdktf.IResolvable): any {
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

export class EventarcPipelineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EventarcPipelineTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EventarcPipelineTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline google_eventarc_pipeline}
*/
export class EventarcPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_eventarc_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EventarcPipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EventarcPipeline to import
  * @param importFromId The id of the existing EventarcPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EventarcPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_eventarc_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/eventarc_pipeline google_eventarc_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventarcPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: EventarcPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'google_eventarc_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.28.0',
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
    this._annotations = config.annotations;
    this._cryptoKeyName = config.cryptoKeyName;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._pipelineId = config.pipelineId;
    this._project = config.project;
    this._destinations.internalValue = config.destinations;
    this._inputPayloadFormat.internalValue = config.inputPayloadFormat;
    this._loggingConfig.internalValue = config.loggingConfig;
    this._mediations.internalValue = config.mediations;
    this._retryPolicy.internalValue = config.retryPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // crypto_key_name - computed: false, optional: true, required: false
  private _cryptoKeyName?: string; 
  public get cryptoKeyName() {
    return this.getStringAttribute('crypto_key_name');
  }
  public set cryptoKeyName(value: string) {
    this._cryptoKeyName = value;
  }
  public resetCryptoKeyName() {
    this._cryptoKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyNameInput() {
    return this._cryptoKeyName;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pipeline_id - computed: false, optional: false, required: true
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // destinations - computed: false, optional: false, required: true
  private _destinations = new EventarcPipelineDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: EventarcPipelineDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // input_payload_format - computed: false, optional: true, required: false
  private _inputPayloadFormat = new EventarcPipelineInputPayloadFormatOutputReference(this, "input_payload_format");
  public get inputPayloadFormat() {
    return this._inputPayloadFormat;
  }
  public putInputPayloadFormat(value: EventarcPipelineInputPayloadFormat) {
    this._inputPayloadFormat.internalValue = value;
  }
  public resetInputPayloadFormat() {
    this._inputPayloadFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputPayloadFormatInput() {
    return this._inputPayloadFormat.internalValue;
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new EventarcPipelineLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: EventarcPipelineLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }

  // mediations - computed: false, optional: true, required: false
  private _mediations = new EventarcPipelineMediationsList(this, "mediations", false);
  public get mediations() {
    return this._mediations;
  }
  public putMediations(value: EventarcPipelineMediations[] | cdktf.IResolvable) {
    this._mediations.internalValue = value;
  }
  public resetMediations() {
    this._mediations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediationsInput() {
    return this._mediations.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new EventarcPipelineRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: EventarcPipelineRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EventarcPipelineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EventarcPipelineTimeouts) {
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
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      crypto_key_name: cdktf.stringToTerraform(this._cryptoKeyName),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      pipeline_id: cdktf.stringToTerraform(this._pipelineId),
      project: cdktf.stringToTerraform(this._project),
      destinations: cdktf.listMapper(eventarcPipelineDestinationsToTerraform, true)(this._destinations.internalValue),
      input_payload_format: eventarcPipelineInputPayloadFormatToTerraform(this._inputPayloadFormat.internalValue),
      logging_config: eventarcPipelineLoggingConfigToTerraform(this._loggingConfig.internalValue),
      mediations: cdktf.listMapper(eventarcPipelineMediationsToTerraform, true)(this._mediations.internalValue),
      retry_policy: eventarcPipelineRetryPolicyToTerraform(this._retryPolicy.internalValue),
      timeouts: eventarcPipelineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      crypto_key_name: {
        value: cdktf.stringToHclTerraform(this._cryptoKeyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_id: {
        value: cdktf.stringToHclTerraform(this._pipelineId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destinations: {
        value: cdktf.listMapperHcl(eventarcPipelineDestinationsToHclTerraform, true)(this._destinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventarcPipelineDestinationsList",
      },
      input_payload_format: {
        value: eventarcPipelineInputPayloadFormatToHclTerraform(this._inputPayloadFormat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventarcPipelineInputPayloadFormatList",
      },
      logging_config: {
        value: eventarcPipelineLoggingConfigToHclTerraform(this._loggingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventarcPipelineLoggingConfigList",
      },
      mediations: {
        value: cdktf.listMapperHcl(eventarcPipelineMediationsToHclTerraform, true)(this._mediations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventarcPipelineMediationsList",
      },
      retry_policy: {
        value: eventarcPipelineRetryPolicyToHclTerraform(this._retryPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EventarcPipelineRetryPolicyList",
      },
      timeouts: {
        value: eventarcPipelineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EventarcPipelineTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
