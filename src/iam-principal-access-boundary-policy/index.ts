// https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/iam_principal_access_boundary_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamPrincipalAccessBoundaryPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * User defined annotations. See https://google.aip.dev/148#annotations
  * for more details such as format and size limitations
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/iam_principal_access_boundary_policy#annotations IamPrincipalAccessBoundaryPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The description of the principal access boundary policy. Must be less than or equal to 63 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/iam_principal_access_boundary_policy#display_name IamPrincipalAccessBoundaryPolicy#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/iam_principal_access_boundary_policy#id IamPrincipalAccessBoundaryPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location the principal access boundary policy is in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/iam_principal_access_boundary_policy#location IamPrincipalAccessBoundaryPolicy#location}
  */
  readonly location: string;
  /**
  * The parent organization of the principal access boundary policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/iam_principal_access_boundary_policy#organization IamPrincipalAccessBoundaryPolicy#organization}
  */
  readonly organization: string;
  /**
  * The ID to use to create the principal access boundary policy.
  * This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, hyphens, or dots. Pattern, /a-z{2,62}/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/iam_principal_access_boundary_policy#principal_access_boundary_policy_id IamPrincipalAccessBoundaryPolicy#principal_access_boundary_policy_id}
  */
  readonly principalAccessBoundaryPolicyId: string;
  /**
  * details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/iam_principal_access_boundary_policy#details IamPrincipalAccessBoundaryPolicy#details}
  */
  readonly details?: IamPrincipalAccessBoundaryPolicyDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/iam_principal_access_boundary_policy#timeouts IamPrincipalAccessBoundaryPolicy#timeouts}
  */
  readonly timeouts?: IamPrincipalAccessBoundaryPolicyTimeouts;
}
export interface IamPrincipalAccessBoundaryPolicyDetailsRules {
  /**
  * The description of the principal access boundary policy rule. Must be less than or equal to 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/iam_principal_access_boundary_policy#description IamPrincipalAccessBoundaryPolicy#description}
  */
  readonly description?: string;
  /**
  * The access relationship of principals to the resources in this rule.
  * Possible values: ALLOW
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/iam_principal_access_boundary_policy#effect IamPrincipalAccessBoundaryPolicy#effect}
  */
  readonly effect: string;
  /**
  * A list of Cloud Resource Manager resources. The resource
  * and all the descendants are included. The number of resources in a policy
  * is limited to 500 across all rules.
  * The following resource types are supported:
  * * Organizations, such as '//cloudresourcemanager.googleapis.com/organizations/123'.
  * * Folders, such as '//cloudresourcemanager.googleapis.com/folders/123'.
  * * Projects, such as '//cloudresourcemanager.googleapis.com/projects/123'
  * or '//cloudresourcemanager.googleapis.com/projects/my-project-id'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/iam_principal_access_boundary_policy#resources IamPrincipalAccessBoundaryPolicy#resources}
  */
  readonly resources: string[];
}

export function iamPrincipalAccessBoundaryPolicyDetailsRulesToTerraform(struct?: IamPrincipalAccessBoundaryPolicyDetailsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    effect: cdktf.stringToTerraform(struct!.effect),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
  }
}


export function iamPrincipalAccessBoundaryPolicyDetailsRulesToHclTerraform(struct?: IamPrincipalAccessBoundaryPolicyDetailsRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IamPrincipalAccessBoundaryPolicyDetailsRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamPrincipalAccessBoundaryPolicyDetailsRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._effect = undefined;
      this._resources = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._effect = value.effect;
      this._resources = value.resources;
    }
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

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }
}

export class IamPrincipalAccessBoundaryPolicyDetailsRulesList extends cdktf.ComplexList {
  public internalValue? : IamPrincipalAccessBoundaryPolicyDetailsRules[] | cdktf.IResolvable

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
  public get(index: number): IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference {
    return new IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IamPrincipalAccessBoundaryPolicyDetails {
  /**
  * The version number that indicates which Google Cloud services
  * are included in the enforcement (e.g. \"latest\", \"1\", ...). If empty, the
  * PAB policy version will be set to the current latest version, and this version
  * won't get updated when new versions are released.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/iam_principal_access_boundary_policy#enforcement_version IamPrincipalAccessBoundaryPolicy#enforcement_version}
  */
  readonly enforcementVersion?: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/iam_principal_access_boundary_policy#rules IamPrincipalAccessBoundaryPolicy#rules}
  */
  readonly rules: IamPrincipalAccessBoundaryPolicyDetailsRules[] | cdktf.IResolvable;
}

export function iamPrincipalAccessBoundaryPolicyDetailsToTerraform(struct?: IamPrincipalAccessBoundaryPolicyDetailsOutputReference | IamPrincipalAccessBoundaryPolicyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforcement_version: cdktf.stringToTerraform(struct!.enforcementVersion),
    rules: cdktf.listMapper(iamPrincipalAccessBoundaryPolicyDetailsRulesToTerraform, true)(struct!.rules),
  }
}


export function iamPrincipalAccessBoundaryPolicyDetailsToHclTerraform(struct?: IamPrincipalAccessBoundaryPolicyDetailsOutputReference | IamPrincipalAccessBoundaryPolicyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforcement_version: {
      value: cdktf.stringToHclTerraform(struct!.enforcementVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rules: {
      value: cdktf.listMapperHcl(iamPrincipalAccessBoundaryPolicyDetailsRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "IamPrincipalAccessBoundaryPolicyDetailsRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamPrincipalAccessBoundaryPolicyDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamPrincipalAccessBoundaryPolicyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforcementVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforcementVersion = this._enforcementVersion;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamPrincipalAccessBoundaryPolicyDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforcementVersion = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforcementVersion = value.enforcementVersion;
      this._rules.internalValue = value.rules;
    }
  }

  // enforcement_version - computed: true, optional: true, required: false
  private _enforcementVersion?: string; 
  public get enforcementVersion() {
    return this.getStringAttribute('enforcement_version');
  }
  public set enforcementVersion(value: string) {
    this._enforcementVersion = value;
  }
  public resetEnforcementVersion() {
    this._enforcementVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcementVersionInput() {
    return this._enforcementVersion;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new IamPrincipalAccessBoundaryPolicyDetailsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: IamPrincipalAccessBoundaryPolicyDetailsRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface IamPrincipalAccessBoundaryPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/iam_principal_access_boundary_policy#create IamPrincipalAccessBoundaryPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/iam_principal_access_boundary_policy#delete IamPrincipalAccessBoundaryPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/iam_principal_access_boundary_policy#update IamPrincipalAccessBoundaryPolicy#update}
  */
  readonly update?: string;
}

export function iamPrincipalAccessBoundaryPolicyTimeoutsToTerraform(struct?: IamPrincipalAccessBoundaryPolicyTimeouts | cdktf.IResolvable): any {
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


export function iamPrincipalAccessBoundaryPolicyTimeoutsToHclTerraform(struct?: IamPrincipalAccessBoundaryPolicyTimeouts | cdktf.IResolvable): any {
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

export class IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IamPrincipalAccessBoundaryPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IamPrincipalAccessBoundaryPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/iam_principal_access_boundary_policy google_iam_principal_access_boundary_policy}
*/
export class IamPrincipalAccessBoundaryPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iam_principal_access_boundary_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamPrincipalAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamPrincipalAccessBoundaryPolicy to import
  * @param importFromId The id of the existing IamPrincipalAccessBoundaryPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/iam_principal_access_boundary_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamPrincipalAccessBoundaryPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_iam_principal_access_boundary_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.36.1/docs/resources/iam_principal_access_boundary_policy google_iam_principal_access_boundary_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamPrincipalAccessBoundaryPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: IamPrincipalAccessBoundaryPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iam_principal_access_boundary_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.36.1',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._organization = config.organization;
    this._principalAccessBoundaryPolicyId = config.principalAccessBoundaryPolicyId;
    this._details.internalValue = config.details;
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

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // principal_access_boundary_policy_id - computed: false, optional: false, required: true
  private _principalAccessBoundaryPolicyId?: string; 
  public get principalAccessBoundaryPolicyId() {
    return this.getStringAttribute('principal_access_boundary_policy_id');
  }
  public set principalAccessBoundaryPolicyId(value: string) {
    this._principalAccessBoundaryPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalAccessBoundaryPolicyIdInput() {
    return this._principalAccessBoundaryPolicyId;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // details - computed: false, optional: true, required: false
  private _details = new IamPrincipalAccessBoundaryPolicyDetailsOutputReference(this, "details");
  public get details() {
    return this._details;
  }
  public putDetails(value: IamPrincipalAccessBoundaryPolicyDetails) {
    this._details.internalValue = value;
  }
  public resetDetails() {
    this._details.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailsInput() {
    return this._details.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IamPrincipalAccessBoundaryPolicyTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      organization: cdktf.stringToTerraform(this._organization),
      principal_access_boundary_policy_id: cdktf.stringToTerraform(this._principalAccessBoundaryPolicyId),
      details: iamPrincipalAccessBoundaryPolicyDetailsToTerraform(this._details.internalValue),
      timeouts: iamPrincipalAccessBoundaryPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_access_boundary_policy_id: {
        value: cdktf.stringToHclTerraform(this._principalAccessBoundaryPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      details: {
        value: iamPrincipalAccessBoundaryPolicyDetailsToHclTerraform(this._details.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IamPrincipalAccessBoundaryPolicyDetailsList",
      },
      timeouts: {
        value: iamPrincipalAccessBoundaryPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IamPrincipalAccessBoundaryPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
