// https://www.terraform.io/docs/providers/google/r/iam_workforce_pool_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamWorkforcePoolProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * A [Common Expression Language](https://opensource.google/projects/cel) expression, in
plain text, to restrict what otherwise valid authentication credentials issued by the
provider should not be accepted.

The expression must output a boolean representing whether to allow the federation.

The following keywords may be referenced in the expressions:
  * 'assertion': JSON representing the authentication credential issued by the provider.
  * 'google': The Google attributes mapped from the assertion in the 'attribute_mappings'.
    'google.profile_photo' and 'google.display_name' are not supported.
  * 'attribute': The custom attributes mapped from the assertion in the 'attribute_mappings'.

The maximum length of the attribute condition expression is 4096 characters.
If unspecified, all valid authentication credentials will be accepted.

The following example shows how to only allow credentials with a mapped 'google.groups' value of 'admins':
```
"'admins' in google.groups"
```
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workforce_pool_provider#attribute_condition IamWorkforcePoolProvider#attribute_condition}
  */
  readonly attributeCondition?: string;
  /**
  * Maps attributes from the authentication credentials issued by an external identity provider
to Google Cloud attributes, such as 'subject' and 'segment'.

Each key must be a string specifying the Google Cloud IAM attribute to map to.

The following keys are supported:
  * 'google.subject': The principal IAM is authenticating. You can reference this value in IAM bindings.
    This is also the subject that appears in Cloud Logging logs. This is a required field and
    the mapped subject cannot exceed 127 bytes.
  * 'google.groups': Groups the authenticating user belongs to. You can grant groups access to
    resources using an IAM 'principalSet' binding; access applies to all members of the group.
  * 'google.display_name': The name of the authenticated user. This is an optional field and
    the mapped display name cannot exceed 100 bytes. If not set, 'google.subject' will be displayed instead.
    This attribute cannot be referenced in IAM bindings.
  * 'google.profile_photo': The URL that specifies the authenticated user's thumbnail photo.
    This is an optional field. When set, the image will be visible as the user's profile picture.
    If not set, a generic user icon will be displayed instead.
    This attribute cannot be referenced in IAM bindings.

You can also provide custom attributes by specifying 'attribute.{custom_attribute}', where {custom_attribute}
is the name of the custom attribute to be mapped. You can define a maximum of 50 custom attributes.
The maximum length of a mapped attribute key is 100 characters, and the key may only contain the characters [a-z0-9_].

You can reference these attributes in IAM policies to define fine-grained access for a workforce pool
to Google Cloud resources. For example:
  * 'google.subject':
    'principal://iam.googleapis.com/locations/{location}/workforcePools/{pool}/subject/{value}'
  * 'google.groups':
    'principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/group/{value}'
  * 'attribute.{custom_attribute}':
    'principalSet://iam.googleapis.com/locations/{location}/workforcePools/{pool}/attribute.{custom_attribute}/{value}'

Each value must be a [Common Expression Language](https://opensource.google/projects/cel)
function that maps an identity provider credential to the normalized attribute specified
by the corresponding map key.

You can use the 'assertion' keyword in the expression to access a JSON representation of
the authentication credential issued by the provider.

The maximum length of an attribute mapping expression is 2048 characters. When evaluated,
the total size of all mapped attributes must not exceed 8KB.

For OIDC providers, you must supply a custom mapping that includes the 'google.subject' attribute.
For example, the following maps the sub claim of the incoming credential to the 'subject' attribute
on a Google token:
```
{"google.subject": "assertion.sub"}
```

An object containing a list of '"key": value' pairs.
Example: '{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workforce_pool_provider#attribute_mapping IamWorkforcePoolProvider#attribute_mapping}
  */
  readonly attributeMapping?: { [key: string]: string };
  /**
  * A user-specified description of the provider. Cannot exceed 256 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workforce_pool_provider#description IamWorkforcePoolProvider#description}
  */
  readonly description?: string;
  /**
  * Whether the provider is disabled. You cannot use a disabled provider to exchange tokens.
However, existing tokens still grant access.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workforce_pool_provider#disabled IamWorkforcePoolProvider#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * A user-specified display name for the provider. Cannot exceed 32 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workforce_pool_provider#display_name IamWorkforcePoolProvider#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workforce_pool_provider#id IamWorkforcePoolProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workforce_pool_provider#location IamWorkforcePoolProvider#location}
  */
  readonly location: string;
  /**
  * The ID for the provider, which becomes the final component of the resource name.
This value must be 4-32 characters, and may contain the characters [a-z0-9-].
The prefix 'gcp-' is reserved for use by Google, and may not be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workforce_pool_provider#provider_id IamWorkforcePoolProvider#provider_id}
  */
  readonly providerId: string;
  /**
  * The ID to use for the pool, which becomes the final component of the resource name.
The IDs must be a globally unique string of 6 to 63 lowercase letters, digits, or hyphens.
It must start with a letter, and cannot have a trailing hyphen.
The prefix 'gcp-' is reserved for use by Google, and may not be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workforce_pool_provider#workforce_pool_id IamWorkforcePoolProvider#workforce_pool_id}
  */
  readonly workforcePoolId: string;
  /**
  * oidc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workforce_pool_provider#oidc IamWorkforcePoolProvider#oidc}
  */
  readonly oidc?: IamWorkforcePoolProviderOidc;
  /**
  * saml block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workforce_pool_provider#saml IamWorkforcePoolProvider#saml}
  */
  readonly saml?: IamWorkforcePoolProviderSaml;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workforce_pool_provider#timeouts IamWorkforcePoolProvider#timeouts}
  */
  readonly timeouts?: IamWorkforcePoolProviderTimeouts;
}
export interface IamWorkforcePoolProviderOidc {
  /**
  * The client ID. Must match the audience claim of the JWT issued by the identity provider.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workforce_pool_provider#client_id IamWorkforcePoolProvider#client_id}
  */
  readonly clientId: string;
  /**
  * The OIDC issuer URI. Must be a valid URI using the 'https' scheme.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workforce_pool_provider#issuer_uri IamWorkforcePoolProvider#issuer_uri}
  */
  readonly issuerUri: string;
}

export function iamWorkforcePoolProviderOidcToTerraform(struct?: IamWorkforcePoolProviderOidcOutputReference | IamWorkforcePoolProviderOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    issuer_uri: cdktf.stringToTerraform(struct!.issuerUri),
  }
}

export class IamWorkforcePoolProviderOidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkforcePoolProviderOidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._issuerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUri = this._issuerUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkforcePoolProviderOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._issuerUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._issuerUri = value.issuerUri;
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
}
export interface IamWorkforcePoolProviderSaml {
  /**
  * SAML Identity provider configuration metadata xml doc.
The xml document should comply with [SAML 2.0 specification](https://docs.oasis-open.org/security/saml/v2.0/saml-metadata-2.0-os.pdf).
The max size of the acceptable xml document will be bounded to 128k characters.

The metadata xml document should satisfy the following constraints:
1) Must contain an Identity Provider Entity ID.
2) Must contain at least one non-expired signing key certificate.
3) For each signing key: 
  a) Valid from should be no more than 7 days from now. 
  b) Valid to should be no more than 10 years in the future. 
4) Up to 3 IdP signing keys are allowed in the metadata xml.

When updating the provider's metadata xml, at least one non-expired signing key
must overlap with the existing metadata. This requirement is skipped if there are
no non-expired signing keys present in the existing metadata.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workforce_pool_provider#idp_metadata_xml IamWorkforcePoolProvider#idp_metadata_xml}
  */
  readonly idpMetadataXml: string;
}

export function iamWorkforcePoolProviderSamlToTerraform(struct?: IamWorkforcePoolProviderSamlOutputReference | IamWorkforcePoolProviderSaml): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idp_metadata_xml: cdktf.stringToTerraform(struct!.idpMetadataXml),
  }
}

export class IamWorkforcePoolProviderSamlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkforcePoolProviderSaml | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idpMetadataXml !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpMetadataXml = this._idpMetadataXml;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkforcePoolProviderSaml | undefined) {
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
export interface IamWorkforcePoolProviderTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workforce_pool_provider#create IamWorkforcePoolProvider#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workforce_pool_provider#delete IamWorkforcePoolProvider#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workforce_pool_provider#update IamWorkforcePoolProvider#update}
  */
  readonly update?: string;
}

export function iamWorkforcePoolProviderTimeoutsToTerraform(struct?: IamWorkforcePoolProviderTimeoutsOutputReference | IamWorkforcePoolProviderTimeouts | cdktf.IResolvable): any {
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

export class IamWorkforcePoolProviderTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkforcePoolProviderTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IamWorkforcePoolProviderTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/iam_workforce_pool_provider google_iam_workforce_pool_provider}
*/
export class IamWorkforcePoolProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iam_workforce_pool_provider";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/iam_workforce_pool_provider google_iam_workforce_pool_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamWorkforcePoolProviderConfig
  */
  public constructor(scope: Construct, id: string, config: IamWorkforcePoolProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iam_workforce_pool_provider',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.54.0',
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
    this._attributeCondition = config.attributeCondition;
    this._attributeMapping = config.attributeMapping;
    this._description = config.description;
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._providerId = config.providerId;
    this._workforcePoolId = config.workforcePoolId;
    this._oidc.internalValue = config.oidc;
    this._saml.internalValue = config.saml;
    this._timeouts.internalValue = config.timeouts;
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

  // provider_id - computed: false, optional: false, required: true
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // workforce_pool_id - computed: false, optional: false, required: true
  private _workforcePoolId?: string; 
  public get workforcePoolId() {
    return this.getStringAttribute('workforce_pool_id');
  }
  public set workforcePoolId(value: string) {
    this._workforcePoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workforcePoolIdInput() {
    return this._workforcePoolId;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new IamWorkforcePoolProviderOidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: IamWorkforcePoolProviderOidc) {
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
  private _saml = new IamWorkforcePoolProviderSamlOutputReference(this, "saml");
  public get saml() {
    return this._saml;
  }
  public putSaml(value: IamWorkforcePoolProviderSaml) {
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
  private _timeouts = new IamWorkforcePoolProviderTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IamWorkforcePoolProviderTimeouts) {
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
      attribute_condition: cdktf.stringToTerraform(this._attributeCondition),
      attribute_mapping: cdktf.hashMapper(cdktf.stringToTerraform)(this._attributeMapping),
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      provider_id: cdktf.stringToTerraform(this._providerId),
      workforce_pool_id: cdktf.stringToTerraform(this._workforcePoolId),
      oidc: iamWorkforcePoolProviderOidcToTerraform(this._oidc.internalValue),
      saml: iamWorkforcePoolProviderSamlToTerraform(this._saml.internalValue),
      timeouts: iamWorkforcePoolProviderTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
