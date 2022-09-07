// https://www.terraform.io/docs/providers/google/r/assured_workloads_workload
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssuredWorkloadsWorkloadConfig extends cdktf.TerraformMetaArguments {
  /**
  * Required. Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, 'billingAccounts/012345-567890-ABCDEF`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/assured_workloads_workload#billing_account AssuredWorkloadsWorkload#billing_account}
  */
  readonly billingAccount: string;
  /**
  * Required. Immutable. Compliance Regime associated with this workload. Possible values: COMPLIANCE_REGIME_UNSPECIFIED, IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE, US_REGIONAL_ACCESS
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/assured_workloads_workload#compliance_regime AssuredWorkloadsWorkload#compliance_regime}
  */
  readonly complianceRegime: string;
  /**
  * Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/assured_workloads_workload#display_name AssuredWorkloadsWorkload#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/assured_workloads_workload#id AssuredWorkloadsWorkload#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. Labels applied to the workload.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/assured_workloads_workload#labels AssuredWorkloadsWorkload#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/assured_workloads_workload#location AssuredWorkloadsWorkload#location}
  */
  readonly location: string;
  /**
  * The organization for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/assured_workloads_workload#organization AssuredWorkloadsWorkload#organization}
  */
  readonly organization: string;
  /**
  * Input only. The parent resource for the resources managed by this Assured Workload. May be either an organization or a folder. Must be the same or a child of the Workload parent. If not specified all resources are created under the Workload parent. Formats: folders/{folder_id}, organizations/{organization_id}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/assured_workloads_workload#provisioned_resources_parent AssuredWorkloadsWorkload#provisioned_resources_parent}
  */
  readonly provisionedResourcesParent?: string;
  /**
  * kms_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/assured_workloads_workload#kms_settings AssuredWorkloadsWorkload#kms_settings}
  */
  readonly kmsSettings?: AssuredWorkloadsWorkloadKmsSettings;
  /**
  * resource_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/assured_workloads_workload#resource_settings AssuredWorkloadsWorkload#resource_settings}
  */
  readonly resourceSettings?: AssuredWorkloadsWorkloadResourceSettings[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/assured_workloads_workload#timeouts AssuredWorkloadsWorkload#timeouts}
  */
  readonly timeouts?: AssuredWorkloadsWorkloadTimeouts;
}
export interface AssuredWorkloadsWorkloadResources {
}

export function assuredWorkloadsWorkloadResourcesToTerraform(struct?: AssuredWorkloadsWorkloadResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class AssuredWorkloadsWorkloadResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssuredWorkloadsWorkloadResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssuredWorkloadsWorkloadResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getNumberAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}

export class AssuredWorkloadsWorkloadResourcesList extends cdktf.ComplexList {

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
  public get(index: number): AssuredWorkloadsWorkloadResourcesOutputReference {
    return new AssuredWorkloadsWorkloadResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssuredWorkloadsWorkloadKmsSettings {
  /**
  * Required. Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/assured_workloads_workload#next_rotation_time AssuredWorkloadsWorkload#next_rotation_time}
  */
  readonly nextRotationTime: string;
  /**
  * Required. Input only. Immutable. will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/assured_workloads_workload#rotation_period AssuredWorkloadsWorkload#rotation_period}
  */
  readonly rotationPeriod: string;
}

export function assuredWorkloadsWorkloadKmsSettingsToTerraform(struct?: AssuredWorkloadsWorkloadKmsSettingsOutputReference | AssuredWorkloadsWorkloadKmsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_rotation_time: cdktf.stringToTerraform(struct!.nextRotationTime),
    rotation_period: cdktf.stringToTerraform(struct!.rotationPeriod),
  }
}

export class AssuredWorkloadsWorkloadKmsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AssuredWorkloadsWorkloadKmsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextRotationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextRotationTime = this._nextRotationTime;
    }
    if (this._rotationPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationPeriod = this._rotationPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssuredWorkloadsWorkloadKmsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nextRotationTime = undefined;
      this._rotationPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nextRotationTime = value.nextRotationTime;
      this._rotationPeriod = value.rotationPeriod;
    }
  }

  // next_rotation_time - computed: false, optional: false, required: true
  private _nextRotationTime?: string; 
  public get nextRotationTime() {
    return this.getStringAttribute('next_rotation_time');
  }
  public set nextRotationTime(value: string) {
    this._nextRotationTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextRotationTimeInput() {
    return this._nextRotationTime;
  }

  // rotation_period - computed: false, optional: false, required: true
  private _rotationPeriod?: string; 
  public get rotationPeriod() {
    return this.getStringAttribute('rotation_period');
  }
  public set rotationPeriod(value: string) {
    this._rotationPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPeriodInput() {
    return this._rotationPeriod;
  }
}
export interface AssuredWorkloadsWorkloadResourceSettings {
  /**
  * Resource identifier. For a project this represents project_number. If the project is already taken, the workload creation will fail.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/assured_workloads_workload#resource_id AssuredWorkloadsWorkload#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Indicates the type of resource. This field should be specified to correspond the id to the right project type (CONSUMER_PROJECT or ENCRYPTION_KEYS_PROJECT) Possible values: RESOURCE_TYPE_UNSPECIFIED, CONSUMER_PROJECT, ENCRYPTION_KEYS_PROJECT, KEYRING, CONSUMER_FOLDER
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/assured_workloads_workload#resource_type AssuredWorkloadsWorkload#resource_type}
  */
  readonly resourceType?: string;
}

export function assuredWorkloadsWorkloadResourceSettingsToTerraform(struct?: AssuredWorkloadsWorkloadResourceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}

export class AssuredWorkloadsWorkloadResourceSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssuredWorkloadsWorkloadResourceSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssuredWorkloadsWorkloadResourceSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceId = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
    }
  }

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class AssuredWorkloadsWorkloadResourceSettingsList extends cdktf.ComplexList {
  public internalValue? : AssuredWorkloadsWorkloadResourceSettings[] | cdktf.IResolvable

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
  public get(index: number): AssuredWorkloadsWorkloadResourceSettingsOutputReference {
    return new AssuredWorkloadsWorkloadResourceSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssuredWorkloadsWorkloadTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/assured_workloads_workload#create AssuredWorkloadsWorkload#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/assured_workloads_workload#delete AssuredWorkloadsWorkload#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/assured_workloads_workload#update AssuredWorkloadsWorkload#update}
  */
  readonly update?: string;
}

export function assuredWorkloadsWorkloadTimeoutsToTerraform(struct?: AssuredWorkloadsWorkloadTimeoutsOutputReference | AssuredWorkloadsWorkloadTimeouts | cdktf.IResolvable): any {
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

export class AssuredWorkloadsWorkloadTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AssuredWorkloadsWorkloadTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AssuredWorkloadsWorkloadTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/assured_workloads_workload google_assured_workloads_workload}
*/
export class AssuredWorkloadsWorkload extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_assured_workloads_workload";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/assured_workloads_workload google_assured_workloads_workload} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssuredWorkloadsWorkloadConfig
  */
  public constructor(scope: Construct, id: string, config: AssuredWorkloadsWorkloadConfig) {
    super(scope, id, {
      terraformResourceType: 'google_assured_workloads_workload',
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
    this._billingAccount = config.billingAccount;
    this._complianceRegime = config.complianceRegime;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._organization = config.organization;
    this._provisionedResourcesParent = config.provisionedResourcesParent;
    this._kmsSettings.internalValue = config.kmsSettings;
    this._resourceSettings.internalValue = config.resourceSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_account - computed: false, optional: false, required: true
  private _billingAccount?: string; 
  public get billingAccount() {
    return this.getStringAttribute('billing_account');
  }
  public set billingAccount(value: string) {
    this._billingAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get billingAccountInput() {
    return this._billingAccount;
  }

  // compliance_regime - computed: false, optional: false, required: true
  private _complianceRegime?: string; 
  public get complianceRegime() {
    return this.getStringAttribute('compliance_regime');
  }
  public set complianceRegime(value: string) {
    this._complianceRegime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceRegimeInput() {
    return this._complianceRegime;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // provisioned_resources_parent - computed: false, optional: true, required: false
  private _provisionedResourcesParent?: string; 
  public get provisionedResourcesParent() {
    return this.getStringAttribute('provisioned_resources_parent');
  }
  public set provisionedResourcesParent(value: string) {
    this._provisionedResourcesParent = value;
  }
  public resetProvisionedResourcesParent() {
    this._provisionedResourcesParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedResourcesParentInput() {
    return this._provisionedResourcesParent;
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new AssuredWorkloadsWorkloadResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // kms_settings - computed: false, optional: true, required: false
  private _kmsSettings = new AssuredWorkloadsWorkloadKmsSettingsOutputReference(this, "kms_settings");
  public get kmsSettings() {
    return this._kmsSettings;
  }
  public putKmsSettings(value: AssuredWorkloadsWorkloadKmsSettings) {
    this._kmsSettings.internalValue = value;
  }
  public resetKmsSettings() {
    this._kmsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsSettingsInput() {
    return this._kmsSettings.internalValue;
  }

  // resource_settings - computed: false, optional: true, required: false
  private _resourceSettings = new AssuredWorkloadsWorkloadResourceSettingsList(this, "resource_settings", false);
  public get resourceSettings() {
    return this._resourceSettings;
  }
  public putResourceSettings(value: AssuredWorkloadsWorkloadResourceSettings[] | cdktf.IResolvable) {
    this._resourceSettings.internalValue = value;
  }
  public resetResourceSettings() {
    this._resourceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSettingsInput() {
    return this._resourceSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AssuredWorkloadsWorkloadTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AssuredWorkloadsWorkloadTimeouts) {
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
      billing_account: cdktf.stringToTerraform(this._billingAccount),
      compliance_regime: cdktf.stringToTerraform(this._complianceRegime),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      organization: cdktf.stringToTerraform(this._organization),
      provisioned_resources_parent: cdktf.stringToTerraform(this._provisionedResourcesParent),
      kms_settings: assuredWorkloadsWorkloadKmsSettingsToTerraform(this._kmsSettings.internalValue),
      resource_settings: cdktf.listMapper(assuredWorkloadsWorkloadResourceSettingsToTerraform, true)(this._resourceSettings.internalValue),
      timeouts: assuredWorkloadsWorkloadTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
