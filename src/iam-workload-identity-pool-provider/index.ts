// https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamWorkloadIdentityPoolProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * [A Common Expression Language](https://opensource.google/projects/cel) expression, in
  * plain text, to restrict what otherwise valid authentication credentials issued by the
  * provider should not be accepted.
  * 
  * The expression must output a boolean representing whether to allow the federation.
  * 
  * The following keywords may be referenced in the expressions:
  *   * 'assertion': JSON representing the authentication credential issued by the provider.
  *   * 'google': The Google attributes mapped from the assertion in the 'attribute_mappings'.
  *   * 'attribute': The custom attributes mapped from the assertion in the 'attribute_mappings'.
  * 
  * The maximum length of the attribute condition expression is 4096 characters. If
  * unspecified, all valid authentication credential are accepted.
  * 
  * The following example shows how to only allow credentials with a mapped 'google.groups'
  * value of 'admins':
  * ```
  * "'admins' in google.groups"
  * ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#attribute_condition IamWorkloadIdentityPoolProvider#attribute_condition}
  */
  readonly attributeCondition?: string;
  /**
  * Maps attributes from authentication credentials issued by an external identity provider
  * to Google Cloud attributes, such as 'subject' and 'segment'.
  * 
  * Each key must be a string specifying the Google Cloud IAM attribute to map to.
  * 
  * The following keys are supported:
  *   * 'google.subject': The principal IAM is authenticating. You can reference this value
  *     in IAM bindings. This is also the subject that appears in Cloud Logging logs.
  *     Cannot exceed 127 characters.
  *   * 'google.groups': Groups the external identity belongs to. You can grant groups
  *     access to resources using an IAM 'principalSet' binding; access applies to all
  *     members of the group.
  * 
  * You can also provide custom attributes by specifying 'attribute.{custom_attribute}',
  * where '{custom_attribute}' is the name of the custom attribute to be mapped. You can
  * define a maximum of 50 custom attributes. The maximum length of a mapped attribute key
  * is 100 characters, and the key may only contain the characters [a-z0-9_].
  * 
  * You can reference these attributes in IAM policies to define fine-grained access for a
  * workload to Google Cloud resources. For example:
  *   * 'google.subject':
  *     'principal://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/subject/{value}'
  *   * 'google.groups':
  *     'principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/group/{value}'
  *   * 'attribute.{custom_attribute}':
  *     'principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/attribute.{custom_attribute}/{value}'
  * 
  * Each value must be a [Common Expression Language](https://opensource.google/projects/cel)
  * function that maps an identity provider credential to the normalized attribute specified
  * by the corresponding map key.
  * 
  * You can use the 'assertion' keyword in the expression to access a JSON representation of
  * the authentication credential issued by the provider.
  * 
  * The maximum length of an attribute mapping expression is 2048 characters. When evaluated,
  * the total size of all mapped attributes must not exceed 8KB.
  * 
  * For AWS providers, the following rules apply:
  *   - If no attribute mapping is defined, the following default mapping applies:
  *     ```
  *     {
  *       "google.subject":"assertion.arn",
  *       "attribute.aws_role":
  *         "assertion.arn.contains('assumed-role')"
  *         " ? assertion.arn.extract('{account_arn}assumed-role/')"
  *         "   + 'assumed-role/'"
  *         "   + assertion.arn.extract('assumed-role/{role_name}/')"
  *         " : assertion.arn",
  *     }
  *     ```
  *   - If any custom attribute mappings are defined, they must include a mapping to the
  *     'google.subject' attribute.
  * 
  * For OIDC providers, the following rules apply:
  *   - Custom attribute mappings must be defined, and must include a mapping to the
  *     'google.subject' attribute. For example, the following maps the 'sub' claim of the
  *     incoming credential to the 'subject' attribute on a Google token.
  *     ```
  *     {"google.subject": "assertion.sub"}
  *     ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#attribute_mapping IamWorkloadIdentityPoolProvider#attribute_mapping}
  */
  readonly attributeMapping?: { [key: string]: string };
  /**
  * A description for the provider. Cannot exceed 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#description IamWorkloadIdentityPoolProvider#description}
  */
  readonly description?: string;
  /**
  * Whether the provider is disabled. You cannot use a disabled provider to exchange tokens.
  * However, existing tokens still grant access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#disabled IamWorkloadIdentityPoolProvider#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * A display name for the provider. Cannot exceed 32 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#display_name IamWorkloadIdentityPoolProvider#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#id IamWorkloadIdentityPoolProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#project IamWorkloadIdentityPoolProvider#project}
  */
  readonly project?: string;
  /**
  * The ID used for the pool, which is the final component of the pool resource name. This
  * value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
  * 'gcp-' is reserved for use by Google, and may not be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#workload_identity_pool_id IamWorkloadIdentityPoolProvider#workload_identity_pool_id}
  */
  readonly workloadIdentityPoolId: string;
  /**
  * The ID for the provider, which becomes the final component of the resource name. This
  * value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
  * 'gcp-' is reserved for use by Google, and may not be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#workload_identity_pool_provider_id IamWorkloadIdentityPoolProvider#workload_identity_pool_provider_id}
  */
  readonly workloadIdentityPoolProviderId: string;
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#aws IamWorkloadIdentityPoolProvider#aws}
  */
  readonly aws?: IamWorkloadIdentityPoolProviderAws;
  /**
  * oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#oidc IamWorkloadIdentityPoolProvider#oidc}
  */
  readonly oidc?: IamWorkloadIdentityPoolProviderOidc;
  /**
  * saml block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#saml IamWorkloadIdentityPoolProvider#saml}
  */
  readonly saml?: IamWorkloadIdentityPoolProviderSaml;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#timeouts IamWorkloadIdentityPoolProvider#timeouts}
  */
  readonly timeouts?: IamWorkloadIdentityPoolProviderTimeouts;
  /**
  * x509 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#x509 IamWorkloadIdentityPoolProvider#x509}
  */
  readonly x509?: IamWorkloadIdentityPoolProviderX509;
}
export interface IamWorkloadIdentityPoolProviderAws {
  /**
  * The AWS account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#account_id IamWorkloadIdentityPoolProvider#account_id}
  */
  readonly accountId: string;
}

export function iamWorkloadIdentityPoolProviderAwsToTerraform(struct?: IamWorkloadIdentityPoolProviderAwsOutputReference | IamWorkloadIdentityPoolProviderAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
  }
}


export function iamWorkloadIdentityPoolProviderAwsToHclTerraform(struct?: IamWorkloadIdentityPoolProviderAwsOutputReference | IamWorkloadIdentityPoolProviderAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkloadIdentityPoolProviderAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkloadIdentityPoolProviderAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkloadIdentityPoolProviderAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountId = value.accountId;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }
}
export interface IamWorkloadIdentityPoolProviderOidc {
  /**
  * Acceptable values for the 'aud' field (audience) in the OIDC token. Token exchange
  * requests are rejected if the token audience does not match one of the configured
  * values. Each audience may be at most 256 characters. A maximum of 10 audiences may
  * be configured.
  * 
  * If this list is empty, the OIDC token audience must be equal to the full canonical
  * resource name of the WorkloadIdentityPoolProvider, with or without the HTTPS prefix.
  * For example:
  * ```
  * //iam.googleapis.com/projects/<project-number>/locations/<location>/workloadIdentityPools/<pool-id>/providers/<provider-id>
  * https://iam.googleapis.com/projects/<project-number>/locations/<location>/workloadIdentityPools/<pool-id>/providers/<provider-id>
  * ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#allowed_audiences IamWorkloadIdentityPoolProvider#allowed_audiences}
  */
  readonly allowedAudiences?: string[];
  /**
  * The OIDC issuer URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#issuer_uri IamWorkloadIdentityPoolProvider#issuer_uri}
  */
  readonly issuerUri: string;
  /**
  * OIDC JWKs in JSON String format. For details on definition of a
  * JWK, see https:tools.ietf.org/html/rfc7517. If not set, then we
  * use the 'jwks_uri' from the discovery document fetched from the
  * .well-known path for the 'issuer_uri'. Currently, RSA and EC asymmetric
  * keys are supported. The JWK must use following format and include only
  * the following fields:
  * ```
  * {
  *   "keys": [
  *     {
  *           "kty": "RSA/EC",
  *           "alg": "<algorithm>",
  *           "use": "sig",
  *           "kid": "<key-id>",
  *           "n": "",
  *           "e": "",
  *           "x": "",
  *           "y": "",
  *           "crv": ""
  *     }
  *   ]
  * }
  * ```
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#jwks_json IamWorkloadIdentityPoolProvider#jwks_json}
  */
  readonly jwksJson?: string;
}

export function iamWorkloadIdentityPoolProviderOidcToTerraform(struct?: IamWorkloadIdentityPoolProviderOidcOutputReference | IamWorkloadIdentityPoolProviderOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedAudiences),
    issuer_uri: cdktf.stringToTerraform(struct!.issuerUri),
    jwks_json: cdktf.stringToTerraform(struct!.jwksJson),
  }
}


export function iamWorkloadIdentityPoolProviderOidcToHclTerraform(struct?: IamWorkloadIdentityPoolProviderOidcOutputReference | IamWorkloadIdentityPoolProviderOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedAudiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    issuer_uri: {
      value: cdktf.stringToHclTerraform(struct!.issuerUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_json: {
      value: cdktf.stringToHclTerraform(struct!.jwksJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkloadIdentityPoolProviderOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkloadIdentityPoolProviderOidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedAudiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedAudiences = this._allowedAudiences;
    }
    if (this._issuerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUri = this._issuerUri;
    }
    if (this._jwksJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksJson = this._jwksJson;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkloadIdentityPoolProviderOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedAudiences = undefined;
      this._issuerUri = undefined;
      this._jwksJson = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedAudiences = value.allowedAudiences;
      this._issuerUri = value.issuerUri;
      this._jwksJson = value.jwksJson;
    }
  }

  // allowed_audiences - computed: false, optional: true, required: false
  private _allowedAudiences?: string[]; 
  public get allowedAudiences() {
    return this.getListAttribute('allowed_audiences');
  }
  public set allowedAudiences(value: string[]) {
    this._allowedAudiences = value;
  }
  public resetAllowedAudiences() {
    this._allowedAudiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedAudiencesInput() {
    return this._allowedAudiences;
  }

  // issuer_uri - computed: false, optional: false, required: true
  private _issuerUri?: string; 
  public get issuerUri() {
    return this.getStringAttribute('issuer_uri');
  }
  public set issuerUri(value: string) {
    this._issuerUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUriInput() {
    return this._issuerUri;
  }

  // jwks_json - computed: false, optional: true, required: false
  private _jwksJson?: string; 
  public get jwksJson() {
    return this.getStringAttribute('jwks_json');
  }
  public set jwksJson(value: string) {
    this._jwksJson = value;
  }
  public resetJwksJson() {
    this._jwksJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksJsonInput() {
    return this._jwksJson;
  }
}
export interface IamWorkloadIdentityPoolProviderSaml {
  /**
  * SAML Identity provider configuration metadata xml doc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#idp_metadata_xml IamWorkloadIdentityPoolProvider#idp_metadata_xml}
  */
  readonly idpMetadataXml: string;
}

export function iamWorkloadIdentityPoolProviderSamlToTerraform(struct?: IamWorkloadIdentityPoolProviderSamlOutputReference | IamWorkloadIdentityPoolProviderSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idp_metadata_xml: cdktf.stringToTerraform(struct!.idpMetadataXml),
  }
}


export function iamWorkloadIdentityPoolProviderSamlToHclTerraform(struct?: IamWorkloadIdentityPoolProviderSamlOutputReference | IamWorkloadIdentityPoolProviderSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idp_metadata_xml: {
      value: cdktf.stringToHclTerraform(struct!.idpMetadataXml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkloadIdentityPoolProviderSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkloadIdentityPoolProviderSaml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idpMetadataXml !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpMetadataXml = this._idpMetadataXml;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkloadIdentityPoolProviderSaml | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idpMetadataXml = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idpMetadataXml = value.idpMetadataXml;
    }
  }

  // idp_metadata_xml - computed: false, optional: false, required: true
  private _idpMetadataXml?: string; 
  public get idpMetadataXml() {
    return this.getStringAttribute('idp_metadata_xml');
  }
  public set idpMetadataXml(value: string) {
    this._idpMetadataXml = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpMetadataXmlInput() {
    return this._idpMetadataXml;
  }
}
export interface IamWorkloadIdentityPoolProviderTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#create IamWorkloadIdentityPoolProvider#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#delete IamWorkloadIdentityPoolProvider#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#update IamWorkloadIdentityPoolProvider#update}
  */
  readonly update?: string;
}

export function iamWorkloadIdentityPoolProviderTimeoutsToTerraform(struct?: IamWorkloadIdentityPoolProviderTimeouts | cdktf.IResolvable): any {
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


export function iamWorkloadIdentityPoolProviderTimeoutsToHclTerraform(struct?: IamWorkloadIdentityPoolProviderTimeouts | cdktf.IResolvable): any {
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

export class IamWorkloadIdentityPoolProviderTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IamWorkloadIdentityPoolProviderTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IamWorkloadIdentityPoolProviderTimeouts | cdktf.IResolvable | undefined) {
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
export interface IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas {
  /**
  * PEM certificate of the PKI used for validation. Must only contain one
  * ca certificate(either root or intermediate cert).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#pem_certificate IamWorkloadIdentityPoolProvider#pem_certificate}
  */
  readonly pemCertificate?: string;
}

export function iamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasToTerraform(struct?: IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pem_certificate: cdktf.stringToTerraform(struct!.pemCertificate),
  }
}


export function iamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasToHclTerraform(struct?: IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pem_certificate: {
      value: cdktf.stringToHclTerraform(struct!.pemCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pemCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemCertificate = this._pemCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pemCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pemCertificate = value.pemCertificate;
    }
  }

  // pem_certificate - computed: false, optional: true, required: false
  private _pemCertificate?: string; 
  public get pemCertificate() {
    return this.getStringAttribute('pem_certificate');
  }
  public set pemCertificate(value: string) {
    this._pemCertificate = value;
  }
  public resetPemCertificate() {
    this._pemCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemCertificateInput() {
    return this._pemCertificate;
  }
}

export class IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList extends cdktf.ComplexList {
  public internalValue? : IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas[] | cdktf.IResolvable

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
  public get(index: number): IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference {
    return new IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors {
  /**
  * PEM certificate of the PKI used for validation. Must only contain one
  * ca certificate(either root or intermediate cert).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#pem_certificate IamWorkloadIdentityPoolProvider#pem_certificate}
  */
  readonly pemCertificate?: string;
}

export function iamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsToTerraform(struct?: IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pem_certificate: cdktf.stringToTerraform(struct!.pemCertificate),
  }
}


export function iamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsToHclTerraform(struct?: IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pem_certificate: {
      value: cdktf.stringToHclTerraform(struct!.pemCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pemCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemCertificate = this._pemCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pemCertificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pemCertificate = value.pemCertificate;
    }
  }

  // pem_certificate - computed: false, optional: true, required: false
  private _pemCertificate?: string; 
  public get pemCertificate() {
    return this.getStringAttribute('pem_certificate');
  }
  public set pemCertificate(value: string) {
    this._pemCertificate = value;
  }
  public resetPemCertificate() {
    this._pemCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemCertificateInput() {
    return this._pemCertificate;
  }
}

export class IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList extends cdktf.ComplexList {
  public internalValue? : IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors[] | cdktf.IResolvable

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
  public get(index: number): IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference {
    return new IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IamWorkloadIdentityPoolProviderX509TrustStore {
  /**
  * intermediate_cas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#intermediate_cas IamWorkloadIdentityPoolProvider#intermediate_cas}
  */
  readonly intermediateCas?: IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas[] | cdktf.IResolvable;
  /**
  * trust_anchors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#trust_anchors IamWorkloadIdentityPoolProvider#trust_anchors}
  */
  readonly trustAnchors: IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors[] | cdktf.IResolvable;
}

export function iamWorkloadIdentityPoolProviderX509TrustStoreToTerraform(struct?: IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference | IamWorkloadIdentityPoolProviderX509TrustStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    intermediate_cas: cdktf.listMapper(iamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasToTerraform, true)(struct!.intermediateCas),
    trust_anchors: cdktf.listMapper(iamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsToTerraform, true)(struct!.trustAnchors),
  }
}


export function iamWorkloadIdentityPoolProviderX509TrustStoreToHclTerraform(struct?: IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference | IamWorkloadIdentityPoolProviderX509TrustStore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    intermediate_cas: {
      value: cdktf.listMapperHcl(iamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasToHclTerraform, true)(struct!.intermediateCas),
      isBlock: true,
      type: "list",
      storageClassType: "IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList",
    },
    trust_anchors: {
      value: cdktf.listMapperHcl(iamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsToHclTerraform, true)(struct!.trustAnchors),
      isBlock: true,
      type: "list",
      storageClassType: "IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkloadIdentityPoolProviderX509TrustStore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intermediateCas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.intermediateCas = this._intermediateCas?.internalValue;
    }
    if (this._trustAnchors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustAnchors = this._trustAnchors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkloadIdentityPoolProviderX509TrustStore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intermediateCas.internalValue = undefined;
      this._trustAnchors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intermediateCas.internalValue = value.intermediateCas;
      this._trustAnchors.internalValue = value.trustAnchors;
    }
  }

  // intermediate_cas - computed: false, optional: true, required: false
  private _intermediateCas = new IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCasList(this, "intermediate_cas", false);
  public get intermediateCas() {
    return this._intermediateCas;
  }
  public putIntermediateCas(value: IamWorkloadIdentityPoolProviderX509TrustStoreIntermediateCas[] | cdktf.IResolvable) {
    this._intermediateCas.internalValue = value;
  }
  public resetIntermediateCas() {
    this._intermediateCas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intermediateCasInput() {
    return this._intermediateCas.internalValue;
  }

  // trust_anchors - computed: false, optional: false, required: true
  private _trustAnchors = new IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchorsList(this, "trust_anchors", false);
  public get trustAnchors() {
    return this._trustAnchors;
  }
  public putTrustAnchors(value: IamWorkloadIdentityPoolProviderX509TrustStoreTrustAnchors[] | cdktf.IResolvable) {
    this._trustAnchors.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustAnchorsInput() {
    return this._trustAnchors.internalValue;
  }
}
export interface IamWorkloadIdentityPoolProviderX509 {
  /**
  * trust_store block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#trust_store IamWorkloadIdentityPoolProvider#trust_store}
  */
  readonly trustStore: IamWorkloadIdentityPoolProviderX509TrustStore;
}

export function iamWorkloadIdentityPoolProviderX509ToTerraform(struct?: IamWorkloadIdentityPoolProviderX509OutputReference | IamWorkloadIdentityPoolProviderX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trust_store: iamWorkloadIdentityPoolProviderX509TrustStoreToTerraform(struct!.trustStore),
  }
}


export function iamWorkloadIdentityPoolProviderX509ToHclTerraform(struct?: IamWorkloadIdentityPoolProviderX509OutputReference | IamWorkloadIdentityPoolProviderX509): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trust_store: {
      value: iamWorkloadIdentityPoolProviderX509TrustStoreToHclTerraform(struct!.trustStore),
      isBlock: true,
      type: "list",
      storageClassType: "IamWorkloadIdentityPoolProviderX509TrustStoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkloadIdentityPoolProviderX509OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkloadIdentityPoolProviderX509 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStore = this._trustStore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkloadIdentityPoolProviderX509 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trustStore.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trustStore.internalValue = value.trustStore;
    }
  }

  // trust_store - computed: false, optional: false, required: true
  private _trustStore = new IamWorkloadIdentityPoolProviderX509TrustStoreOutputReference(this, "trust_store");
  public get trustStore() {
    return this._trustStore;
  }
  public putTrustStore(value: IamWorkloadIdentityPoolProviderX509TrustStore) {
    this._trustStore.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreInput() {
    return this._trustStore.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider google_iam_workload_identity_pool_provider}
*/
export class IamWorkloadIdentityPoolProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iam_workload_identity_pool_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamWorkloadIdentityPoolProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamWorkloadIdentityPoolProvider to import
  * @param importFromId The id of the existing IamWorkloadIdentityPoolProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamWorkloadIdentityPoolProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_iam_workload_identity_pool_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.30.0/docs/resources/iam_workload_identity_pool_provider google_iam_workload_identity_pool_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamWorkloadIdentityPoolProviderConfig
  */
  public constructor(scope: Construct, id: string, config: IamWorkloadIdentityPoolProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iam_workload_identity_pool_provider',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.30.0',
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
    this._attributeCondition = config.attributeCondition;
    this._attributeMapping = config.attributeMapping;
    this._description = config.description;
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._id = config.id;
    this._project = config.project;
    this._workloadIdentityPoolId = config.workloadIdentityPoolId;
    this._workloadIdentityPoolProviderId = config.workloadIdentityPoolProviderId;
    this._aws.internalValue = config.aws;
    this._oidc.internalValue = config.oidc;
    this._saml.internalValue = config.saml;
    this._timeouts.internalValue = config.timeouts;
    this._x509.internalValue = config.x509;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_condition - computed: false, optional: true, required: false
  private _attributeCondition?: string; 
  public get attributeCondition() {
    return this.getStringAttribute('attribute_condition');
  }
  public set attributeCondition(value: string) {
    this._attributeCondition = value;
  }
  public resetAttributeCondition() {
    this._attributeCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeConditionInput() {
    return this._attributeCondition;
  }

  // attribute_mapping - computed: false, optional: true, required: false
  private _attributeMapping?: { [key: string]: string }; 
  public get attributeMapping() {
    return this.getStringMapAttribute('attribute_mapping');
  }
  public set attributeMapping(value: { [key: string]: string }) {
    this._attributeMapping = value;
  }
  public resetAttributeMapping() {
    this._attributeMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeMappingInput() {
    return this._attributeMapping;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // workload_identity_pool_id - computed: false, optional: false, required: true
  private _workloadIdentityPoolId?: string; 
  public get workloadIdentityPoolId() {
    return this.getStringAttribute('workload_identity_pool_id');
  }
  public set workloadIdentityPoolId(value: string) {
    this._workloadIdentityPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityPoolIdInput() {
    return this._workloadIdentityPoolId;
  }

  // workload_identity_pool_provider_id - computed: false, optional: false, required: true
  private _workloadIdentityPoolProviderId?: string; 
  public get workloadIdentityPoolProviderId() {
    return this.getStringAttribute('workload_identity_pool_provider_id');
  }
  public set workloadIdentityPoolProviderId(value: string) {
    this._workloadIdentityPoolProviderId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityPoolProviderIdInput() {
    return this._workloadIdentityPoolProviderId;
  }

  // aws - computed: false, optional: true, required: false
  private _aws = new IamWorkloadIdentityPoolProviderAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: IamWorkloadIdentityPoolProviderAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new IamWorkloadIdentityPoolProviderOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: IamWorkloadIdentityPoolProviderOidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // saml - computed: false, optional: true, required: false
  private _saml = new IamWorkloadIdentityPoolProviderSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }
  public putSaml(value: IamWorkloadIdentityPoolProviderSaml) {
    this._saml.internalValue = value;
  }
  public resetSaml() {
    this._saml.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlInput() {
    return this._saml.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IamWorkloadIdentityPoolProviderTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IamWorkloadIdentityPoolProviderTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // x509 - computed: false, optional: true, required: false
  private _x509 = new IamWorkloadIdentityPoolProviderX509OutputReference(this, "x509");
  public get x509() {
    return this._x509;
  }
  public putX509(value: IamWorkloadIdentityPoolProviderX509) {
    this._x509.internalValue = value;
  }
  public resetX509() {
    this._x509.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x509Input() {
    return this._x509.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_condition: cdktf.stringToTerraform(this._attributeCondition),
      attribute_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(this._attributeMapping),
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      workload_identity_pool_id: cdktf.stringToTerraform(this._workloadIdentityPoolId),
      workload_identity_pool_provider_id: cdktf.stringToTerraform(this._workloadIdentityPoolProviderId),
      aws: iamWorkloadIdentityPoolProviderAwsToTerraform(this._aws.internalValue),
      oidc: iamWorkloadIdentityPoolProviderOidcToTerraform(this._oidc.internalValue),
      saml: iamWorkloadIdentityPoolProviderSamlToTerraform(this._saml.internalValue),
      timeouts: iamWorkloadIdentityPoolProviderTimeoutsToTerraform(this._timeouts.internalValue),
      x509: iamWorkloadIdentityPoolProviderX509ToTerraform(this._x509.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_condition: {
        value: cdktf.stringToHclTerraform(this._attributeCondition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_mapping: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._attributeMapping),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      workload_identity_pool_id: {
        value: cdktf.stringToHclTerraform(this._workloadIdentityPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_identity_pool_provider_id: {
        value: cdktf.stringToHclTerraform(this._workloadIdentityPoolProviderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws: {
        value: iamWorkloadIdentityPoolProviderAwsToHclTerraform(this._aws.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IamWorkloadIdentityPoolProviderAwsList",
      },
      oidc: {
        value: iamWorkloadIdentityPoolProviderOidcToHclTerraform(this._oidc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IamWorkloadIdentityPoolProviderOidcList",
      },
      saml: {
        value: iamWorkloadIdentityPoolProviderSamlToHclTerraform(this._saml.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IamWorkloadIdentityPoolProviderSamlList",
      },
      timeouts: {
        value: iamWorkloadIdentityPoolProviderTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IamWorkloadIdentityPoolProviderTimeouts",
      },
      x509: {
        value: iamWorkloadIdentityPoolProviderX509ToHclTerraform(this._x509.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IamWorkloadIdentityPoolProviderX509List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
