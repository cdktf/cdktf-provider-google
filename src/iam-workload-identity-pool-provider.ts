// https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamWorkloadIdentityPoolProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * [A Common Expression Language](https://opensource.google/projects/cel) expression, in
plain text, to restrict what otherwise valid authentication credentials issued by the
provider should not be accepted.

The expression must output a boolean representing whether to allow the federation.

The following keywords may be referenced in the expressions:
  * 'assertion': JSON representing the authentication credential issued by the provider.
  * 'google': The Google attributes mapped from the assertion in the 'attribute_mappings'.
  * 'attribute': The custom attributes mapped from the assertion in the 'attribute_mappings'.

The maximum length of the attribute condition expression is 4096 characters. If
unspecified, all valid authentication credential are accepted.

The following example shows how to only allow credentials with a mapped 'google.groups'
value of 'admins':
```
"'admins' in google.groups"
```
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool_provider#attribute_condition IamWorkloadIdentityPoolProvider#attribute_condition}
  */
  readonly attributeCondition?: string;
  /**
  * Maps attributes from authentication credentials issued by an external identity provider
to Google Cloud attributes, such as 'subject' and 'segment'.

Each key must be a string specifying the Google Cloud IAM attribute to map to.

The following keys are supported:
  * 'google.subject': The principal IAM is authenticating. You can reference this value
    in IAM bindings. This is also the subject that appears in Cloud Logging logs.
    Cannot exceed 127 characters.
  * 'google.groups': Groups the external identity belongs to. You can grant groups
    access to resources using an IAM 'principalSet' binding; access applies to all
    members of the group.

You can also provide custom attributes by specifying 'attribute.{custom_attribute}',
where '{custom_attribute}' is the name of the custom attribute to be mapped. You can
define a maximum of 50 custom attributes. The maximum length of a mapped attribute key
is 100 characters, and the key may only contain the characters [a-z0-9_].

You can reference these attributes in IAM policies to define fine-grained access for a
workload to Google Cloud resources. For example:
  * 'google.subject':
    'principal://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/subject/{value}'
  * 'google.groups':
    'principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/group/{value}'
  * 'attribute.{custom_attribute}':
    'principalSet://iam.googleapis.com/projects/{project}/locations/{location}/workloadIdentityPools/{pool}/attribute.{custom_attribute}/{value}'

Each value must be a [Common Expression Language](https://opensource.google/projects/cel)
function that maps an identity provider credential to the normalized attribute specified
by the corresponding map key.

You can use the 'assertion' keyword in the expression to access a JSON representation of
the authentication credential issued by the provider.

The maximum length of an attribute mapping expression is 2048 characters. When evaluated,
the total size of all mapped attributes must not exceed 8KB.

For AWS providers, the following rules apply:
  - If no attribute mapping is defined, the following default mapping applies:
    ```
    {
      "google.subject":"assertion.arn",
      "attribute.aws_role":
        "assertion.arn.contains('assumed-role')"
        " ? assertion.arn.extract('{account_arn}assumed-role/')"
        "   + 'assumed-role/'"
        "   + assertion.arn.extract('assumed-role/{role_name}/')"
        " : assertion.arn",
    }
    ```
  - If any custom attribute mappings are defined, they must include a mapping to the
    'google.subject' attribute.

For OIDC providers, the following rules apply:
  - Custom attribute mappings must be defined, and must include a mapping to the
    'google.subject' attribute. For example, the following maps the 'sub' claim of the
    incoming credential to the 'subject' attribute on a Google token.
    ```
    {"google.subject": "assertion.sub"}
    ```
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool_provider#attribute_mapping IamWorkloadIdentityPoolProvider#attribute_mapping}
  */
  readonly attributeMapping?: { [key: string]: string };
  /**
  * A description for the provider. Cannot exceed 256 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool_provider#description IamWorkloadIdentityPoolProvider#description}
  */
  readonly description?: string;
  /**
  * Whether the provider is disabled. You cannot use a disabled provider to exchange tokens.
However, existing tokens still grant access.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool_provider#disabled IamWorkloadIdentityPoolProvider#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * A display name for the provider. Cannot exceed 32 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool_provider#display_name IamWorkloadIdentityPoolProvider#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool_provider#id IamWorkloadIdentityPoolProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool_provider#project IamWorkloadIdentityPoolProvider#project}
  */
  readonly project?: string;
  /**
  * The ID used for the pool, which is the final component of the pool resource name. This
value should be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool_provider#workload_identity_pool_id IamWorkloadIdentityPoolProvider#workload_identity_pool_id}
  */
  readonly workloadIdentityPoolId: string;
  /**
  * The ID for the provider, which becomes the final component of the resource name. This
value must be 4-32 characters, and may contain the characters [a-z0-9-]. The prefix
'gcp-' is reserved for use by Google, and may not be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool_provider#workload_identity_pool_provider_id IamWorkloadIdentityPoolProvider#workload_identity_pool_provider_id}
  */
  readonly workloadIdentityPoolProviderId: string;
  /**
  * aws block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool_provider#aws IamWorkloadIdentityPoolProvider#aws}
  */
  readonly aws?: IamWorkloadIdentityPoolProviderAws;
  /**
  * oidc block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool_provider#oidc IamWorkloadIdentityPoolProvider#oidc}
  */
  readonly oidc?: IamWorkloadIdentityPoolProviderOidc;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool_provider#timeouts IamWorkloadIdentityPoolProvider#timeouts}
  */
  readonly timeouts?: IamWorkloadIdentityPoolProviderTimeouts;
}
export interface IamWorkloadIdentityPoolProviderAws {
  /**
  * The AWS account ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool_provider#account_id IamWorkloadIdentityPoolProvider#account_id}
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
requests are rejected if the token audience does not match one of the configured
values. Each audience may be at most 256 characters. A maximum of 10 audiences may
be configured.

If this list is empty, the OIDC token audience must be equal to the full canonical
resource name of the WorkloadIdentityPoolProvider, with or without the HTTPS prefix.
For example:
```
//iam.googleapis.com/projects/<project-number>/locations/<location>/workloadIdentityPools/<pool-id>/providers/<provider-id>
https://iam.googleapis.com/projects/<project-number>/locations/<location>/workloadIdentityPools/<pool-id>/providers/<provider-id>
```
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool_provider#allowed_audiences IamWorkloadIdentityPoolProvider#allowed_audiences}
  */
  readonly allowedAudiences?: string[];
  /**
  * The OIDC issuer URL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool_provider#issuer_uri IamWorkloadIdentityPoolProvider#issuer_uri}
  */
  readonly issuerUri: string;
}

export function iamWorkloadIdentityPoolProviderOidcToTerraform(struct?: IamWorkloadIdentityPoolProviderOidcOutputReference | IamWorkloadIdentityPoolProviderOidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedAudiences),
    issuer_uri: cdktf.stringToTerraform(struct!.issuerUri),
  }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkloadIdentityPoolProviderOidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedAudiences = undefined;
      this._issuerUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedAudiences = value.allowedAudiences;
      this._issuerUri = value.issuerUri;
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
}
export interface IamWorkloadIdentityPoolProviderTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool_provider#create IamWorkloadIdentityPoolProvider#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool_provider#delete IamWorkloadIdentityPoolProvider#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool_provider#update IamWorkloadIdentityPoolProvider#update}
  */
  readonly update?: string;
}

export function iamWorkloadIdentityPoolProviderTimeoutsToTerraform(struct?: IamWorkloadIdentityPoolProviderTimeoutsOutputReference | IamWorkloadIdentityPoolProviderTimeouts | cdktf.IResolvable): any {
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

export class IamWorkloadIdentityPoolProviderTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool_provider google_iam_workload_identity_pool_provider}
*/
export class IamWorkloadIdentityPoolProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iam_workload_identity_pool_provider";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/iam_workload_identity_pool_provider google_iam_workload_identity_pool_provider} Resource
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
        providerVersion: '4.35.0',
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
    this._project = config.project;
    this._workloadIdentityPoolId = config.workloadIdentityPoolId;
    this._workloadIdentityPoolProviderId = config.workloadIdentityPoolProviderId;
    this._aws.internalValue = config.aws;
    this._oidc.internalValue = config.oidc;
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
      timeouts: iamWorkloadIdentityPoolProviderTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
