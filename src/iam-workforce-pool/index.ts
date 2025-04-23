// https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_workforce_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamWorkforcePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * A user-specified description of the pool. Cannot exceed 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_workforce_pool#description IamWorkforcePool#description}
  */
  readonly description?: string;
  /**
  * Whether the pool is disabled. You cannot use a disabled pool to exchange tokens,
  * or use existing tokens to access resources. If the pool is re-enabled, existing tokens grant access again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_workforce_pool#disabled IamWorkforcePool#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * A user-specified display name of the pool in Google Cloud Console. Cannot exceed 32 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_workforce_pool#display_name IamWorkforcePool#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_workforce_pool#id IamWorkforcePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_workforce_pool#location IamWorkforcePool#location}
  */
  readonly location: string;
  /**
  * Immutable. The resource name of the parent. Format: 'organizations/{org-id}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_workforce_pool#parent IamWorkforcePool#parent}
  */
  readonly parent: string;
  /**
  * Duration that the Google Cloud access tokens, console sign-in sessions,
  * and 'gcloud' sign-in sessions from this pool are valid.
  * Must be greater than 15 minutes (900s) and less than 12 hours (43200s).
  * If 'sessionDuration' is not configured, minted credentials have a default duration of one hour (3600s).
  * A duration in seconds with up to nine fractional digits, ending with ''s''. Example: "'3.5s'".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_workforce_pool#session_duration IamWorkforcePool#session_duration}
  */
  readonly sessionDuration?: string;
  /**
  * The name of the pool. The ID must be a globally unique string of 6 to 63 lowercase letters,
  * digits, or hyphens. It must start with a letter, and cannot have a trailing hyphen.
  * The prefix 'gcp-' is reserved for use by Google, and may not be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_workforce_pool#workforce_pool_id IamWorkforcePool#workforce_pool_id}
  */
  readonly workforcePoolId: string;
  /**
  * access_restrictions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_workforce_pool#access_restrictions IamWorkforcePool#access_restrictions}
  */
  readonly accessRestrictions?: IamWorkforcePoolAccessRestrictions;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_workforce_pool#timeouts IamWorkforcePool#timeouts}
  */
  readonly timeouts?: IamWorkforcePoolTimeouts;
}
export interface IamWorkforcePoolAccessRestrictionsAllowedServices {
  /**
  * Domain name of the service.
  * Example: console.cloud.google
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_workforce_pool#domain IamWorkforcePool#domain}
  */
  readonly domain?: string;
}

export function iamWorkforcePoolAccessRestrictionsAllowedServicesToTerraform(struct?: IamWorkforcePoolAccessRestrictionsAllowedServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}


export function iamWorkforcePoolAccessRestrictionsAllowedServicesToHclTerraform(struct?: IamWorkforcePoolAccessRestrictionsAllowedServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IamWorkforcePoolAccessRestrictionsAllowedServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkforcePoolAccessRestrictionsAllowedServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}

export class IamWorkforcePoolAccessRestrictionsAllowedServicesList extends cdktf.ComplexList {
  public internalValue? : IamWorkforcePoolAccessRestrictionsAllowedServices[] | cdktf.IResolvable

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
  public get(index: number): IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference {
    return new IamWorkforcePoolAccessRestrictionsAllowedServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IamWorkforcePoolAccessRestrictions {
  /**
  * Disable programmatic sign-in by disabling token issue via the Security Token API endpoint.
  * See [Security Token Service API](https://cloud.google.com/iam/docs/reference/sts/rest).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_workforce_pool#disable_programmatic_signin IamWorkforcePool#disable_programmatic_signin}
  */
  readonly disableProgrammaticSignin?: boolean | cdktf.IResolvable;
  /**
  * allowed_services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_workforce_pool#allowed_services IamWorkforcePool#allowed_services}
  */
  readonly allowedServices?: IamWorkforcePoolAccessRestrictionsAllowedServices[] | cdktf.IResolvable;
}

export function iamWorkforcePoolAccessRestrictionsToTerraform(struct?: IamWorkforcePoolAccessRestrictionsOutputReference | IamWorkforcePoolAccessRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_programmatic_signin: cdktf.booleanToTerraform(struct!.disableProgrammaticSignin),
    allowed_services: cdktf.listMapper(iamWorkforcePoolAccessRestrictionsAllowedServicesToTerraform, true)(struct!.allowedServices),
  }
}


export function iamWorkforcePoolAccessRestrictionsToHclTerraform(struct?: IamWorkforcePoolAccessRestrictionsOutputReference | IamWorkforcePoolAccessRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_programmatic_signin: {
      value: cdktf.booleanToHclTerraform(struct!.disableProgrammaticSignin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_services: {
      value: cdktf.listMapperHcl(iamWorkforcePoolAccessRestrictionsAllowedServicesToHclTerraform, true)(struct!.allowedServices),
      isBlock: true,
      type: "list",
      storageClassType: "IamWorkforcePoolAccessRestrictionsAllowedServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IamWorkforcePoolAccessRestrictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IamWorkforcePoolAccessRestrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableProgrammaticSignin !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableProgrammaticSignin = this._disableProgrammaticSignin;
    }
    if (this._allowedServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedServices = this._allowedServices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamWorkforcePoolAccessRestrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableProgrammaticSignin = undefined;
      this._allowedServices.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableProgrammaticSignin = value.disableProgrammaticSignin;
      this._allowedServices.internalValue = value.allowedServices;
    }
  }

  // disable_programmatic_signin - computed: false, optional: true, required: false
  private _disableProgrammaticSignin?: boolean | cdktf.IResolvable; 
  public get disableProgrammaticSignin() {
    return this.getBooleanAttribute('disable_programmatic_signin');
  }
  public set disableProgrammaticSignin(value: boolean | cdktf.IResolvable) {
    this._disableProgrammaticSignin = value;
  }
  public resetDisableProgrammaticSignin() {
    this._disableProgrammaticSignin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableProgrammaticSigninInput() {
    return this._disableProgrammaticSignin;
  }

  // allowed_services - computed: false, optional: true, required: false
  private _allowedServices = new IamWorkforcePoolAccessRestrictionsAllowedServicesList(this, "allowed_services", false);
  public get allowedServices() {
    return this._allowedServices;
  }
  public putAllowedServices(value: IamWorkforcePoolAccessRestrictionsAllowedServices[] | cdktf.IResolvable) {
    this._allowedServices.internalValue = value;
  }
  public resetAllowedServices() {
    this._allowedServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedServicesInput() {
    return this._allowedServices.internalValue;
  }
}
export interface IamWorkforcePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_workforce_pool#create IamWorkforcePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_workforce_pool#delete IamWorkforcePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_workforce_pool#update IamWorkforcePool#update}
  */
  readonly update?: string;
}

export function iamWorkforcePoolTimeoutsToTerraform(struct?: IamWorkforcePoolTimeouts | cdktf.IResolvable): any {
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


export function iamWorkforcePoolTimeoutsToHclTerraform(struct?: IamWorkforcePoolTimeouts | cdktf.IResolvable): any {
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

export class IamWorkforcePoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IamWorkforcePoolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IamWorkforcePoolTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_workforce_pool google_iam_workforce_pool}
*/
export class IamWorkforcePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iam_workforce_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamWorkforcePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamWorkforcePool to import
  * @param importFromId The id of the existing IamWorkforcePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_workforce_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamWorkforcePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_iam_workforce_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.31.0/docs/resources/iam_workforce_pool google_iam_workforce_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamWorkforcePoolConfig
  */
  public constructor(scope: Construct, id: string, config: IamWorkforcePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iam_workforce_pool',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.31.0',
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
    this._description = config.description;
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._parent = config.parent;
    this._sessionDuration = config.sessionDuration;
    this._workforcePoolId = config.workforcePoolId;
    this._accessRestrictions.internalValue = config.accessRestrictions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // session_duration - computed: false, optional: true, required: false
  private _sessionDuration?: string; 
  public get sessionDuration() {
    return this.getStringAttribute('session_duration');
  }
  public set sessionDuration(value: string) {
    this._sessionDuration = value;
  }
  public resetSessionDuration() {
    this._sessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDurationInput() {
    return this._sessionDuration;
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

  // access_restrictions - computed: false, optional: true, required: false
  private _accessRestrictions = new IamWorkforcePoolAccessRestrictionsOutputReference(this, "access_restrictions");
  public get accessRestrictions() {
    return this._accessRestrictions;
  }
  public putAccessRestrictions(value: IamWorkforcePoolAccessRestrictions) {
    this._accessRestrictions.internalValue = value;
  }
  public resetAccessRestrictions() {
    this._accessRestrictions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRestrictionsInput() {
    return this._accessRestrictions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IamWorkforcePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IamWorkforcePoolTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      disabled: cdktf.booleanToTerraform(this._disabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      parent: cdktf.stringToTerraform(this._parent),
      session_duration: cdktf.stringToTerraform(this._sessionDuration),
      workforce_pool_id: cdktf.stringToTerraform(this._workforcePoolId),
      access_restrictions: iamWorkforcePoolAccessRestrictionsToTerraform(this._accessRestrictions.internalValue),
      timeouts: iamWorkforcePoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      session_duration: {
        value: cdktf.stringToHclTerraform(this._sessionDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workforce_pool_id: {
        value: cdktf.stringToHclTerraform(this._workforcePoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_restrictions: {
        value: iamWorkforcePoolAccessRestrictionsToHclTerraform(this._accessRestrictions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IamWorkforcePoolAccessRestrictionsList",
      },
      timeouts: {
        value: iamWorkforcePoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IamWorkforcePoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
