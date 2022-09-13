// https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityPlatformTenantInboundSamlConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Human friendly display name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config#display_name IdentityPlatformTenantInboundSamlConfig#display_name}
  */
  readonly displayName: string;
  /**
  * If this config allows users to sign in with the provider.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config#enabled IdentityPlatformTenantInboundSamlConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config#id IdentityPlatformTenantInboundSamlConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the InboundSamlConfig resource. Must start with 'saml.' and can only have alphanumeric characters,
hyphens, underscores or periods. The part after 'saml.' must also start with a lowercase letter, end with an
alphanumeric character, and have at least 2 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config#name IdentityPlatformTenantInboundSamlConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config#project IdentityPlatformTenantInboundSamlConfig#project}
  */
  readonly project?: string;
  /**
  * The name of the tenant where this inbound SAML config resource exists
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config#tenant IdentityPlatformTenantInboundSamlConfig#tenant}
  */
  readonly tenant: string;
  /**
  * idp_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config#idp_config IdentityPlatformTenantInboundSamlConfig#idp_config}
  */
  readonly idpConfig: IdentityPlatformTenantInboundSamlConfigIdpConfig;
  /**
  * sp_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config#sp_config IdentityPlatformTenantInboundSamlConfig#sp_config}
  */
  readonly spConfig: IdentityPlatformTenantInboundSamlConfigSpConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config#timeouts IdentityPlatformTenantInboundSamlConfig#timeouts}
  */
  readonly timeouts?: IdentityPlatformTenantInboundSamlConfigTimeouts;
}
export interface IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates {
  /**
  * The x509 certificate
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config#x509_certificate IdentityPlatformTenantInboundSamlConfig#x509_certificate}
  */
  readonly x509Certificate?: string;
}

export function identityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesToTerraform(struct?: IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    x509_certificate: cdktf.stringToTerraform(struct!.x509Certificate),
  }
}

export class IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._x509Certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.x509Certificate = this._x509Certificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._x509Certificate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._x509Certificate = value.x509Certificate;
    }
  }

  // x509_certificate - computed: false, optional: true, required: false
  private _x509Certificate?: string; 
  public get x509Certificate() {
    return this.getStringAttribute('x509_certificate');
  }
  public set x509Certificate(value: string) {
    this._x509Certificate = value;
  }
  public resetX509Certificate() {
    this._x509Certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get x509CertificateInput() {
    return this._x509Certificate;
  }
}

export class IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList extends cdktf.ComplexList {
  public internalValue? : IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates[] | cdktf.IResolvable

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
  public get(index: number): IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference {
    return new IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityPlatformTenantInboundSamlConfigIdpConfig {
  /**
  * Unique identifier for all SAML entities
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config#idp_entity_id IdentityPlatformTenantInboundSamlConfig#idp_entity_id}
  */
  readonly idpEntityId: string;
  /**
  * Indicates if outbounding SAMLRequest should be signed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config#sign_request IdentityPlatformTenantInboundSamlConfig#sign_request}
  */
  readonly signRequest?: boolean | cdktf.IResolvable;
  /**
  * URL to send Authentication request to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config#sso_url IdentityPlatformTenantInboundSamlConfig#sso_url}
  */
  readonly ssoUrl: string;
  /**
  * idp_certificates block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config#idp_certificates IdentityPlatformTenantInboundSamlConfig#idp_certificates}
  */
  readonly idpCertificates: IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates[] | cdktf.IResolvable;
}

export function identityPlatformTenantInboundSamlConfigIdpConfigToTerraform(struct?: IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference | IdentityPlatformTenantInboundSamlConfigIdpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idp_entity_id: cdktf.stringToTerraform(struct!.idpEntityId),
    sign_request: cdktf.booleanToTerraform(struct!.signRequest),
    sso_url: cdktf.stringToTerraform(struct!.ssoUrl),
    idp_certificates: cdktf.listMapper(identityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesToTerraform, true)(struct!.idpCertificates),
  }
}

export class IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformTenantInboundSamlConfigIdpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idpEntityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpEntityId = this._idpEntityId;
    }
    if (this._signRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.signRequest = this._signRequest;
    }
    if (this._ssoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoUrl = this._ssoUrl;
    }
    if (this._idpCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpCertificates = this._idpCertificates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformTenantInboundSamlConfigIdpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._idpEntityId = undefined;
      this._signRequest = undefined;
      this._ssoUrl = undefined;
      this._idpCertificates.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._idpEntityId = value.idpEntityId;
      this._signRequest = value.signRequest;
      this._ssoUrl = value.ssoUrl;
      this._idpCertificates.internalValue = value.idpCertificates;
    }
  }

  // idp_entity_id - computed: false, optional: false, required: true
  private _idpEntityId?: string; 
  public get idpEntityId() {
    return this.getStringAttribute('idp_entity_id');
  }
  public set idpEntityId(value: string) {
    this._idpEntityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpEntityIdInput() {
    return this._idpEntityId;
  }

  // sign_request - computed: false, optional: true, required: false
  private _signRequest?: boolean | cdktf.IResolvable; 
  public get signRequest() {
    return this.getBooleanAttribute('sign_request');
  }
  public set signRequest(value: boolean | cdktf.IResolvable) {
    this._signRequest = value;
  }
  public resetSignRequest() {
    this._signRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signRequestInput() {
    return this._signRequest;
  }

  // sso_url - computed: false, optional: false, required: true
  private _ssoUrl?: string; 
  public get ssoUrl() {
    return this.getStringAttribute('sso_url');
  }
  public set ssoUrl(value: string) {
    this._ssoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoUrlInput() {
    return this._ssoUrl;
  }

  // idp_certificates - computed: false, optional: false, required: true
  private _idpCertificates = new IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificatesList(this, "idp_certificates", false);
  public get idpCertificates() {
    return this._idpCertificates;
  }
  public putIdpCertificates(value: IdentityPlatformTenantInboundSamlConfigIdpConfigIdpCertificates[] | cdktf.IResolvable) {
    this._idpCertificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpCertificatesInput() {
    return this._idpCertificates.internalValue;
  }
}
export interface IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates {
}

export function identityPlatformTenantInboundSamlConfigSpConfigSpCertificatesToTerraform(struct?: IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // x509_certificate - computed: true, optional: false, required: false
  public get x509Certificate() {
    return this.getStringAttribute('x509_certificate');
  }
}

export class IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList extends cdktf.ComplexList {

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
  public get(index: number): IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference {
    return new IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityPlatformTenantInboundSamlConfigSpConfig {
  /**
  * Callback URI where responses from IDP are handled. Must start with 'https://'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config#callback_uri IdentityPlatformTenantInboundSamlConfig#callback_uri}
  */
  readonly callbackUri: string;
  /**
  * Unique identifier for all SAML entities.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config#sp_entity_id IdentityPlatformTenantInboundSamlConfig#sp_entity_id}
  */
  readonly spEntityId: string;
}

export function identityPlatformTenantInboundSamlConfigSpConfigToTerraform(struct?: IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference | IdentityPlatformTenantInboundSamlConfigSpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    callback_uri: cdktf.stringToTerraform(struct!.callbackUri),
    sp_entity_id: cdktf.stringToTerraform(struct!.spEntityId),
  }
}

export class IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformTenantInboundSamlConfigSpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._callbackUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.callbackUri = this._callbackUri;
    }
    if (this._spEntityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.spEntityId = this._spEntityId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityPlatformTenantInboundSamlConfigSpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._callbackUri = undefined;
      this._spEntityId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._callbackUri = value.callbackUri;
      this._spEntityId = value.spEntityId;
    }
  }

  // callback_uri - computed: false, optional: false, required: true
  private _callbackUri?: string; 
  public get callbackUri() {
    return this.getStringAttribute('callback_uri');
  }
  public set callbackUri(value: string) {
    this._callbackUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUriInput() {
    return this._callbackUri;
  }

  // sp_certificates - computed: true, optional: false, required: false
  private _spCertificates = new IdentityPlatformTenantInboundSamlConfigSpConfigSpCertificatesList(this, "sp_certificates", false);
  public get spCertificates() {
    return this._spCertificates;
  }

  // sp_entity_id - computed: false, optional: false, required: true
  private _spEntityId?: string; 
  public get spEntityId() {
    return this.getStringAttribute('sp_entity_id');
  }
  public set spEntityId(value: string) {
    this._spEntityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spEntityIdInput() {
    return this._spEntityId;
  }
}
export interface IdentityPlatformTenantInboundSamlConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config#create IdentityPlatformTenantInboundSamlConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config#delete IdentityPlatformTenantInboundSamlConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config#update IdentityPlatformTenantInboundSamlConfig#update}
  */
  readonly update?: string;
}

export function identityPlatformTenantInboundSamlConfigTimeoutsToTerraform(struct?: IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference | IdentityPlatformTenantInboundSamlConfigTimeouts | cdktf.IResolvable): any {
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

export class IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityPlatformTenantInboundSamlConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityPlatformTenantInboundSamlConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config google_identity_platform_tenant_inbound_saml_config}
*/
export class IdentityPlatformTenantInboundSamlConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_identity_platform_tenant_inbound_saml_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/identity_platform_tenant_inbound_saml_config google_identity_platform_tenant_inbound_saml_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityPlatformTenantInboundSamlConfigConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityPlatformTenantInboundSamlConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_identity_platform_tenant_inbound_saml_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._tenant = config.tenant;
    this._idpConfig.internalValue = config.idpConfig;
    this._spConfig.internalValue = config.spConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // tenant - computed: false, optional: false, required: true
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // idp_config - computed: false, optional: false, required: true
  private _idpConfig = new IdentityPlatformTenantInboundSamlConfigIdpConfigOutputReference(this, "idp_config");
  public get idpConfig() {
    return this._idpConfig;
  }
  public putIdpConfig(value: IdentityPlatformTenantInboundSamlConfigIdpConfig) {
    this._idpConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpConfigInput() {
    return this._idpConfig.internalValue;
  }

  // sp_config - computed: false, optional: false, required: true
  private _spConfig = new IdentityPlatformTenantInboundSamlConfigSpConfigOutputReference(this, "sp_config");
  public get spConfig() {
    return this._spConfig;
  }
  public putSpConfig(value: IdentityPlatformTenantInboundSamlConfigSpConfig) {
    this._spConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spConfigInput() {
    return this._spConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IdentityPlatformTenantInboundSamlConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IdentityPlatformTenantInboundSamlConfigTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      tenant: cdktf.stringToTerraform(this._tenant),
      idp_config: identityPlatformTenantInboundSamlConfigIdpConfigToTerraform(this._idpConfig.internalValue),
      sp_config: identityPlatformTenantInboundSamlConfigSpConfigToTerraform(this._spConfig.internalValue),
      timeouts: identityPlatformTenantInboundSamlConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
