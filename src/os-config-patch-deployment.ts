// https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsConfigPatchDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the patch deployment. Length of the description is limited to 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#description OsConfigPatchDeployment#description}
  */
  readonly description?: string;
  /**
  * Duration of the patch. After the duration ends, the patch times out.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#duration OsConfigPatchDeployment#duration}
  */
  readonly duration?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#id OsConfigPatchDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A name for the patch deployment in the project. When creating a name the following rules apply:
* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.
* Must be unique within the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#patch_deployment_id OsConfigPatchDeployment#patch_deployment_id}
  */
  readonly patchDeploymentId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#project OsConfigPatchDeployment#project}
  */
  readonly project?: string;
  /**
  * instance_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#instance_filter OsConfigPatchDeployment#instance_filter}
  */
  readonly instanceFilter: OsConfigPatchDeploymentInstanceFilter;
  /**
  * one_time_schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#one_time_schedule OsConfigPatchDeployment#one_time_schedule}
  */
  readonly oneTimeSchedule?: OsConfigPatchDeploymentOneTimeSchedule;
  /**
  * patch_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#patch_config OsConfigPatchDeployment#patch_config}
  */
  readonly patchConfig?: OsConfigPatchDeploymentPatchConfig;
  /**
  * recurring_schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#recurring_schedule OsConfigPatchDeployment#recurring_schedule}
  */
  readonly recurringSchedule?: OsConfigPatchDeploymentRecurringSchedule;
  /**
  * rollout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#rollout OsConfigPatchDeployment#rollout}
  */
  readonly rollout?: OsConfigPatchDeploymentRollout;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#timeouts OsConfigPatchDeployment#timeouts}
  */
  readonly timeouts?: OsConfigPatchDeploymentTimeouts;
}
export interface OsConfigPatchDeploymentInstanceFilterGroupLabels {
  /**
  * Compute Engine instance labels that must be present for a VM instance to be targeted by this filter
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#labels OsConfigPatchDeployment#labels}
  */
  readonly labels: { [key: string]: string };
}

export function osConfigPatchDeploymentInstanceFilterGroupLabelsToTerraform(struct?: OsConfigPatchDeploymentInstanceFilterGroupLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}

export class OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigPatchDeploymentInstanceFilterGroupLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentInstanceFilterGroupLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
    }
  }

  // labels - computed: false, optional: false, required: true
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }
}

export class OsConfigPatchDeploymentInstanceFilterGroupLabelsList extends cdktf.ComplexList {
  public internalValue? : OsConfigPatchDeploymentInstanceFilterGroupLabels[] | cdktf.IResolvable

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
  public get(index: number): OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference {
    return new OsConfigPatchDeploymentInstanceFilterGroupLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigPatchDeploymentInstanceFilter {
  /**
  * Target all VM instances in the project. If true, no other criteria is permitted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#all OsConfigPatchDeployment#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * Targets VMs whose name starts with one of these prefixes. Similar to labels, this is another way to group
VMs when targeting configs, for example prefix="prod-".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#instance_name_prefixes OsConfigPatchDeployment#instance_name_prefixes}
  */
  readonly instanceNamePrefixes?: string[];
  /**
  * Targets any of the VM instances specified. Instances are specified by their URI in the 'form zones/{{zone}}/instances/{{instance_name}}',
'projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}', or
'https://www.googleapis.com/compute/v1/projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#instances OsConfigPatchDeployment#instances}
  */
  readonly instances?: string[];
  /**
  * Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#zones OsConfigPatchDeployment#zones}
  */
  readonly zones?: string[];
  /**
  * group_labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#group_labels OsConfigPatchDeployment#group_labels}
  */
  readonly groupLabels?: OsConfigPatchDeploymentInstanceFilterGroupLabels[] | cdktf.IResolvable;
}

export function osConfigPatchDeploymentInstanceFilterToTerraform(struct?: OsConfigPatchDeploymentInstanceFilterOutputReference | OsConfigPatchDeploymentInstanceFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    instance_name_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceNamePrefixes),
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
    zones: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.zones),
    group_labels: cdktf.listMapper(osConfigPatchDeploymentInstanceFilterGroupLabelsToTerraform, true)(struct!.groupLabels),
  }
}

export class OsConfigPatchDeploymentInstanceFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentInstanceFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._instanceNamePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceNamePrefixes = this._instanceNamePrefixes;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    if (this._groupLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupLabels = this._groupLabels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentInstanceFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._instanceNamePrefixes = undefined;
      this._instances = undefined;
      this._zones = undefined;
      this._groupLabels.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._instanceNamePrefixes = value.instanceNamePrefixes;
      this._instances = value.instances;
      this._zones = value.zones;
      this._groupLabels.internalValue = value.groupLabels;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // instance_name_prefixes - computed: false, optional: true, required: false
  private _instanceNamePrefixes?: string[]; 
  public get instanceNamePrefixes() {
    return this.getListAttribute('instance_name_prefixes');
  }
  public set instanceNamePrefixes(value: string[]) {
    this._instanceNamePrefixes = value;
  }
  public resetInstanceNamePrefixes() {
    this._instanceNamePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNamePrefixesInput() {
    return this._instanceNamePrefixes;
  }

  // instances - computed: false, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[]; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // group_labels - computed: false, optional: true, required: false
  private _groupLabels = new OsConfigPatchDeploymentInstanceFilterGroupLabelsList(this, "group_labels", false);
  public get groupLabels() {
    return this._groupLabels;
  }
  public putGroupLabels(value: OsConfigPatchDeploymentInstanceFilterGroupLabels[] | cdktf.IResolvable) {
    this._groupLabels.internalValue = value;
  }
  public resetGroupLabels() {
    this._groupLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupLabelsInput() {
    return this._groupLabels.internalValue;
  }
}
export interface OsConfigPatchDeploymentOneTimeSchedule {
  /**
  * The desired patch job execution time. A timestamp in RFC3339 UTC "Zulu" format,
accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#execute_time OsConfigPatchDeployment#execute_time}
  */
  readonly executeTime: string;
}

export function osConfigPatchDeploymentOneTimeScheduleToTerraform(struct?: OsConfigPatchDeploymentOneTimeScheduleOutputReference | OsConfigPatchDeploymentOneTimeSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execute_time: cdktf.stringToTerraform(struct!.executeTime),
  }
}

export class OsConfigPatchDeploymentOneTimeScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentOneTimeSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._executeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeTime = this._executeTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentOneTimeSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._executeTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._executeTime = value.executeTime;
    }
  }

  // execute_time - computed: false, optional: false, required: true
  private _executeTime?: string; 
  public get executeTime() {
    return this.getStringAttribute('execute_time');
  }
  public set executeTime(value: string) {
    this._executeTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executeTimeInput() {
    return this._executeTime;
  }
}
export interface OsConfigPatchDeploymentPatchConfigApt {
  /**
  * List of packages to exclude from update. These packages will be excluded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#excludes OsConfigPatchDeployment#excludes}
  */
  readonly excludes?: string[];
  /**
  * An exclusive list of packages to be updated. These are the only packages that will be updated.
If these packages are not installed, they will be ignored. This field cannot be specified with
any other patch configuration fields.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#exclusive_packages OsConfigPatchDeployment#exclusive_packages}
  */
  readonly exclusivePackages?: string[];
  /**
  * By changing the type to DIST, the patching is performed using apt-get dist-upgrade instead. Possible values: ["DIST", "UPGRADE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#type OsConfigPatchDeployment#type}
  */
  readonly type?: string;
}

export function osConfigPatchDeploymentPatchConfigAptToTerraform(struct?: OsConfigPatchDeploymentPatchConfigAptOutputReference | OsConfigPatchDeploymentPatchConfigApt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludes),
    exclusive_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusivePackages),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class OsConfigPatchDeploymentPatchConfigAptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentPatchConfigApt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._exclusivePackages !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusivePackages = this._exclusivePackages;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentPatchConfigApt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludes = undefined;
      this._exclusivePackages = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludes = value.excludes;
      this._exclusivePackages = value.exclusivePackages;
      this._type = value.type;
    }
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // exclusive_packages - computed: false, optional: true, required: false
  private _exclusivePackages?: string[]; 
  public get exclusivePackages() {
    return this.getListAttribute('exclusive_packages');
  }
  public set exclusivePackages(value: string[]) {
    this._exclusivePackages = value;
  }
  public resetExclusivePackages() {
    this._exclusivePackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusivePackagesInput() {
    return this._exclusivePackages;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface OsConfigPatchDeploymentPatchConfigGoo {
  /**
  * goo update settings. Use this setting to override the default goo patch rules.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#enabled OsConfigPatchDeployment#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function osConfigPatchDeploymentPatchConfigGooToTerraform(struct?: OsConfigPatchDeploymentPatchConfigGooOutputReference | OsConfigPatchDeploymentPatchConfigGoo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class OsConfigPatchDeploymentPatchConfigGooOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentPatchConfigGoo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentPatchConfigGoo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject {
  /**
  * Bucket of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#bucket OsConfigPatchDeployment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#generation_number OsConfigPatchDeployment#generation_number}
  */
  readonly generationNumber: string;
  /**
  * Name of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#object OsConfigPatchDeployment#object}
  */
  readonly object: string;
}

export function osConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference | OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation_number: cdktf.stringToTerraform(struct!.generationNumber),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generationNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationNumber = this._generationNumber;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generationNumber = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generationNumber = value.generationNumber;
      this._object = value.object;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // generation_number - computed: false, optional: false, required: true
  private _generationNumber?: string; 
  public get generationNumber() {
    return this.getStringAttribute('generation_number');
  }
  public set generationNumber(value: string) {
    this._generationNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generationNumberInput() {
    return this._generationNumber;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig {
  /**
  * Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#allowed_success_codes OsConfigPatchDeployment#allowed_success_codes}
  */
  readonly allowedSuccessCodes?: number[];
  /**
  * The script interpreter to use to run the script. If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#interpreter OsConfigPatchDeployment#interpreter}
  */
  readonly interpreter?: string;
  /**
  * An absolute path to the executable on the VM.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#local_path OsConfigPatchDeployment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs_object block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#gcs_object OsConfigPatchDeployment#gcs_object}
  */
  readonly gcsObject?: OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject;
}

export function osConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference | OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_success_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.allowedSuccessCodes),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs_object: osConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectToTerraform(struct!.gcsObject),
  }
}

export class OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedSuccessCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedSuccessCodes = this._allowedSuccessCodes;
    }
    if (this._interpreter !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpreter = this._interpreter;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcsObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsObject = this._gcsObject?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedSuccessCodes = undefined;
      this._interpreter = undefined;
      this._localPath = undefined;
      this._gcsObject.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedSuccessCodes = value.allowedSuccessCodes;
      this._interpreter = value.interpreter;
      this._localPath = value.localPath;
      this._gcsObject.internalValue = value.gcsObject;
    }
  }

  // allowed_success_codes - computed: false, optional: true, required: false
  private _allowedSuccessCodes?: number[]; 
  public get allowedSuccessCodes() {
    return this.getNumberListAttribute('allowed_success_codes');
  }
  public set allowedSuccessCodes(value: number[]) {
    this._allowedSuccessCodes = value;
  }
  public resetAllowedSuccessCodes() {
    this._allowedSuccessCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSuccessCodesInput() {
    return this._allowedSuccessCodes;
  }

  // interpreter - computed: false, optional: true, required: false
  private _interpreter?: string; 
  public get interpreter() {
    return this.getStringAttribute('interpreter');
  }
  public set interpreter(value: string) {
    this._interpreter = value;
  }
  public resetInterpreter() {
    this._interpreter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterInput() {
    return this._interpreter;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // gcs_object - computed: false, optional: true, required: false
  private _gcsObject = new OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference(this, "gcs_object");
  public get gcsObject() {
    return this._gcsObject;
  }
  public putGcsObject(value: OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject) {
    this._gcsObject.internalValue = value;
  }
  public resetGcsObject() {
    this._gcsObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsObjectInput() {
    return this._gcsObject.internalValue;
  }
}
export interface OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject {
  /**
  * Bucket of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#bucket OsConfigPatchDeployment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#generation_number OsConfigPatchDeployment#generation_number}
  */
  readonly generationNumber: string;
  /**
  * Name of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#object OsConfigPatchDeployment#object}
  */
  readonly object: string;
}

export function osConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference | OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation_number: cdktf.stringToTerraform(struct!.generationNumber),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generationNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationNumber = this._generationNumber;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generationNumber = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generationNumber = value.generationNumber;
      this._object = value.object;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // generation_number - computed: false, optional: false, required: true
  private _generationNumber?: string; 
  public get generationNumber() {
    return this.getStringAttribute('generation_number');
  }
  public set generationNumber(value: string) {
    this._generationNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generationNumberInput() {
    return this._generationNumber;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig {
  /**
  * Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#allowed_success_codes OsConfigPatchDeployment#allowed_success_codes}
  */
  readonly allowedSuccessCodes?: number[];
  /**
  * The script interpreter to use to run the script. If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#interpreter OsConfigPatchDeployment#interpreter}
  */
  readonly interpreter?: string;
  /**
  * An absolute path to the executable on the VM.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#local_path OsConfigPatchDeployment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs_object block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#gcs_object OsConfigPatchDeployment#gcs_object}
  */
  readonly gcsObject?: OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject;
}

export function osConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference | OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_success_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.allowedSuccessCodes),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs_object: osConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectToTerraform(struct!.gcsObject),
  }
}

export class OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedSuccessCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedSuccessCodes = this._allowedSuccessCodes;
    }
    if (this._interpreter !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpreter = this._interpreter;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcsObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsObject = this._gcsObject?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedSuccessCodes = undefined;
      this._interpreter = undefined;
      this._localPath = undefined;
      this._gcsObject.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedSuccessCodes = value.allowedSuccessCodes;
      this._interpreter = value.interpreter;
      this._localPath = value.localPath;
      this._gcsObject.internalValue = value.gcsObject;
    }
  }

  // allowed_success_codes - computed: false, optional: true, required: false
  private _allowedSuccessCodes?: number[]; 
  public get allowedSuccessCodes() {
    return this.getNumberListAttribute('allowed_success_codes');
  }
  public set allowedSuccessCodes(value: number[]) {
    this._allowedSuccessCodes = value;
  }
  public resetAllowedSuccessCodes() {
    this._allowedSuccessCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSuccessCodesInput() {
    return this._allowedSuccessCodes;
  }

  // interpreter - computed: false, optional: true, required: false
  private _interpreter?: string; 
  public get interpreter() {
    return this.getStringAttribute('interpreter');
  }
  public set interpreter(value: string) {
    this._interpreter = value;
  }
  public resetInterpreter() {
    this._interpreter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterInput() {
    return this._interpreter;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // gcs_object - computed: false, optional: true, required: false
  private _gcsObject = new OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference(this, "gcs_object");
  public get gcsObject() {
    return this._gcsObject;
  }
  public putGcsObject(value: OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject) {
    this._gcsObject.internalValue = value;
  }
  public resetGcsObject() {
    this._gcsObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsObjectInput() {
    return this._gcsObject.internalValue;
  }
}
export interface OsConfigPatchDeploymentPatchConfigPostStep {
  /**
  * linux_exec_step_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#linux_exec_step_config OsConfigPatchDeployment#linux_exec_step_config}
  */
  readonly linuxExecStepConfig?: OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig;
  /**
  * windows_exec_step_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#windows_exec_step_config OsConfigPatchDeployment#windows_exec_step_config}
  */
  readonly windowsExecStepConfig?: OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig;
}

export function osConfigPatchDeploymentPatchConfigPostStepToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPostStepOutputReference | OsConfigPatchDeploymentPatchConfigPostStep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linux_exec_step_config: osConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigToTerraform(struct!.linuxExecStepConfig),
    windows_exec_step_config: osConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigToTerraform(struct!.windowsExecStepConfig),
  }
}

export class OsConfigPatchDeploymentPatchConfigPostStepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentPatchConfigPostStep | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linuxExecStepConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxExecStepConfig = this._linuxExecStepConfig?.internalValue;
    }
    if (this._windowsExecStepConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsExecStepConfig = this._windowsExecStepConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentPatchConfigPostStep | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linuxExecStepConfig.internalValue = undefined;
      this._windowsExecStepConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linuxExecStepConfig.internalValue = value.linuxExecStepConfig;
      this._windowsExecStepConfig.internalValue = value.windowsExecStepConfig;
    }
  }

  // linux_exec_step_config - computed: false, optional: true, required: false
  private _linuxExecStepConfig = new OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference(this, "linux_exec_step_config");
  public get linuxExecStepConfig() {
    return this._linuxExecStepConfig;
  }
  public putLinuxExecStepConfig(value: OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig) {
    this._linuxExecStepConfig.internalValue = value;
  }
  public resetLinuxExecStepConfig() {
    this._linuxExecStepConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxExecStepConfigInput() {
    return this._linuxExecStepConfig.internalValue;
  }

  // windows_exec_step_config - computed: false, optional: true, required: false
  private _windowsExecStepConfig = new OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference(this, "windows_exec_step_config");
  public get windowsExecStepConfig() {
    return this._windowsExecStepConfig;
  }
  public putWindowsExecStepConfig(value: OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig) {
    this._windowsExecStepConfig.internalValue = value;
  }
  public resetWindowsExecStepConfig() {
    this._windowsExecStepConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsExecStepConfigInput() {
    return this._windowsExecStepConfig.internalValue;
  }
}
export interface OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject {
  /**
  * Bucket of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#bucket OsConfigPatchDeployment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#generation_number OsConfigPatchDeployment#generation_number}
  */
  readonly generationNumber: string;
  /**
  * Name of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#object OsConfigPatchDeployment#object}
  */
  readonly object: string;
}

export function osConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference | OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation_number: cdktf.stringToTerraform(struct!.generationNumber),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generationNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationNumber = this._generationNumber;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generationNumber = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generationNumber = value.generationNumber;
      this._object = value.object;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // generation_number - computed: false, optional: false, required: true
  private _generationNumber?: string; 
  public get generationNumber() {
    return this.getStringAttribute('generation_number');
  }
  public set generationNumber(value: string) {
    this._generationNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generationNumberInput() {
    return this._generationNumber;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig {
  /**
  * Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#allowed_success_codes OsConfigPatchDeployment#allowed_success_codes}
  */
  readonly allowedSuccessCodes?: number[];
  /**
  * The script interpreter to use to run the script. If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#interpreter OsConfigPatchDeployment#interpreter}
  */
  readonly interpreter?: string;
  /**
  * An absolute path to the executable on the VM.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#local_path OsConfigPatchDeployment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs_object block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#gcs_object OsConfigPatchDeployment#gcs_object}
  */
  readonly gcsObject?: OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject;
}

export function osConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference | OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_success_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.allowedSuccessCodes),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs_object: osConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectToTerraform(struct!.gcsObject),
  }
}

export class OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedSuccessCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedSuccessCodes = this._allowedSuccessCodes;
    }
    if (this._interpreter !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpreter = this._interpreter;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcsObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsObject = this._gcsObject?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedSuccessCodes = undefined;
      this._interpreter = undefined;
      this._localPath = undefined;
      this._gcsObject.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedSuccessCodes = value.allowedSuccessCodes;
      this._interpreter = value.interpreter;
      this._localPath = value.localPath;
      this._gcsObject.internalValue = value.gcsObject;
    }
  }

  // allowed_success_codes - computed: false, optional: true, required: false
  private _allowedSuccessCodes?: number[]; 
  public get allowedSuccessCodes() {
    return this.getNumberListAttribute('allowed_success_codes');
  }
  public set allowedSuccessCodes(value: number[]) {
    this._allowedSuccessCodes = value;
  }
  public resetAllowedSuccessCodes() {
    this._allowedSuccessCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSuccessCodesInput() {
    return this._allowedSuccessCodes;
  }

  // interpreter - computed: false, optional: true, required: false
  private _interpreter?: string; 
  public get interpreter() {
    return this.getStringAttribute('interpreter');
  }
  public set interpreter(value: string) {
    this._interpreter = value;
  }
  public resetInterpreter() {
    this._interpreter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterInput() {
    return this._interpreter;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // gcs_object - computed: false, optional: true, required: false
  private _gcsObject = new OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference(this, "gcs_object");
  public get gcsObject() {
    return this._gcsObject;
  }
  public putGcsObject(value: OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject) {
    this._gcsObject.internalValue = value;
  }
  public resetGcsObject() {
    this._gcsObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsObjectInput() {
    return this._gcsObject.internalValue;
  }
}
export interface OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject {
  /**
  * Bucket of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#bucket OsConfigPatchDeployment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#generation_number OsConfigPatchDeployment#generation_number}
  */
  readonly generationNumber: string;
  /**
  * Name of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#object OsConfigPatchDeployment#object}
  */
  readonly object: string;
}

export function osConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference | OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation_number: cdktf.stringToTerraform(struct!.generationNumber),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generationNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationNumber = this._generationNumber;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generationNumber = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generationNumber = value.generationNumber;
      this._object = value.object;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // generation_number - computed: false, optional: false, required: true
  private _generationNumber?: string; 
  public get generationNumber() {
    return this.getStringAttribute('generation_number');
  }
  public set generationNumber(value: string) {
    this._generationNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generationNumberInput() {
    return this._generationNumber;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig {
  /**
  * Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#allowed_success_codes OsConfigPatchDeployment#allowed_success_codes}
  */
  readonly allowedSuccessCodes?: number[];
  /**
  * The script interpreter to use to run the script. If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#interpreter OsConfigPatchDeployment#interpreter}
  */
  readonly interpreter?: string;
  /**
  * An absolute path to the executable on the VM.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#local_path OsConfigPatchDeployment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs_object block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#gcs_object OsConfigPatchDeployment#gcs_object}
  */
  readonly gcsObject?: OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject;
}

export function osConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference | OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_success_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.allowedSuccessCodes),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs_object: osConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectToTerraform(struct!.gcsObject),
  }
}

export class OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedSuccessCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedSuccessCodes = this._allowedSuccessCodes;
    }
    if (this._interpreter !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpreter = this._interpreter;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcsObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsObject = this._gcsObject?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedSuccessCodes = undefined;
      this._interpreter = undefined;
      this._localPath = undefined;
      this._gcsObject.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedSuccessCodes = value.allowedSuccessCodes;
      this._interpreter = value.interpreter;
      this._localPath = value.localPath;
      this._gcsObject.internalValue = value.gcsObject;
    }
  }

  // allowed_success_codes - computed: false, optional: true, required: false
  private _allowedSuccessCodes?: number[]; 
  public get allowedSuccessCodes() {
    return this.getNumberListAttribute('allowed_success_codes');
  }
  public set allowedSuccessCodes(value: number[]) {
    this._allowedSuccessCodes = value;
  }
  public resetAllowedSuccessCodes() {
    this._allowedSuccessCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSuccessCodesInput() {
    return this._allowedSuccessCodes;
  }

  // interpreter - computed: false, optional: true, required: false
  private _interpreter?: string; 
  public get interpreter() {
    return this.getStringAttribute('interpreter');
  }
  public set interpreter(value: string) {
    this._interpreter = value;
  }
  public resetInterpreter() {
    this._interpreter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterInput() {
    return this._interpreter;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // gcs_object - computed: false, optional: true, required: false
  private _gcsObject = new OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference(this, "gcs_object");
  public get gcsObject() {
    return this._gcsObject;
  }
  public putGcsObject(value: OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject) {
    this._gcsObject.internalValue = value;
  }
  public resetGcsObject() {
    this._gcsObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsObjectInput() {
    return this._gcsObject.internalValue;
  }
}
export interface OsConfigPatchDeploymentPatchConfigPreStep {
  /**
  * linux_exec_step_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#linux_exec_step_config OsConfigPatchDeployment#linux_exec_step_config}
  */
  readonly linuxExecStepConfig?: OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig;
  /**
  * windows_exec_step_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#windows_exec_step_config OsConfigPatchDeployment#windows_exec_step_config}
  */
  readonly windowsExecStepConfig?: OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig;
}

export function osConfigPatchDeploymentPatchConfigPreStepToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPreStepOutputReference | OsConfigPatchDeploymentPatchConfigPreStep): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linux_exec_step_config: osConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigToTerraform(struct!.linuxExecStepConfig),
    windows_exec_step_config: osConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigToTerraform(struct!.windowsExecStepConfig),
  }
}

export class OsConfigPatchDeploymentPatchConfigPreStepOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentPatchConfigPreStep | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linuxExecStepConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxExecStepConfig = this._linuxExecStepConfig?.internalValue;
    }
    if (this._windowsExecStepConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsExecStepConfig = this._windowsExecStepConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentPatchConfigPreStep | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linuxExecStepConfig.internalValue = undefined;
      this._windowsExecStepConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linuxExecStepConfig.internalValue = value.linuxExecStepConfig;
      this._windowsExecStepConfig.internalValue = value.windowsExecStepConfig;
    }
  }

  // linux_exec_step_config - computed: false, optional: true, required: false
  private _linuxExecStepConfig = new OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference(this, "linux_exec_step_config");
  public get linuxExecStepConfig() {
    return this._linuxExecStepConfig;
  }
  public putLinuxExecStepConfig(value: OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig) {
    this._linuxExecStepConfig.internalValue = value;
  }
  public resetLinuxExecStepConfig() {
    this._linuxExecStepConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxExecStepConfigInput() {
    return this._linuxExecStepConfig.internalValue;
  }

  // windows_exec_step_config - computed: false, optional: true, required: false
  private _windowsExecStepConfig = new OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference(this, "windows_exec_step_config");
  public get windowsExecStepConfig() {
    return this._windowsExecStepConfig;
  }
  public putWindowsExecStepConfig(value: OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig) {
    this._windowsExecStepConfig.internalValue = value;
  }
  public resetWindowsExecStepConfig() {
    this._windowsExecStepConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsExecStepConfigInput() {
    return this._windowsExecStepConfig.internalValue;
  }
}
export interface OsConfigPatchDeploymentPatchConfigWindowsUpdate {
  /**
  * Only apply updates of these windows update classifications. If empty, all updates are applied. Possible values: ["CRITICAL", "SECURITY", "DEFINITION", "DRIVER", "FEATURE_PACK", "SERVICE_PACK", "TOOL", "UPDATE_ROLLUP", "UPDATE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#classifications OsConfigPatchDeployment#classifications}
  */
  readonly classifications?: string[];
  /**
  * List of KBs to exclude from update.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#excludes OsConfigPatchDeployment#excludes}
  */
  readonly excludes?: string[];
  /**
  * An exclusive list of kbs to be updated. These are the only patches that will be updated.
This field must not be used with other patch configurations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#exclusive_patches OsConfigPatchDeployment#exclusive_patches}
  */
  readonly exclusivePatches?: string[];
}

export function osConfigPatchDeploymentPatchConfigWindowsUpdateToTerraform(struct?: OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference | OsConfigPatchDeploymentPatchConfigWindowsUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classifications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classifications),
    excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludes),
    exclusive_patches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusivePatches),
  }
}

export class OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentPatchConfigWindowsUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.classifications = this._classifications;
    }
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._exclusivePatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusivePatches = this._exclusivePatches;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentPatchConfigWindowsUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classifications = undefined;
      this._excludes = undefined;
      this._exclusivePatches = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classifications = value.classifications;
      this._excludes = value.excludes;
      this._exclusivePatches = value.exclusivePatches;
    }
  }

  // classifications - computed: false, optional: true, required: false
  private _classifications?: string[]; 
  public get classifications() {
    return this.getListAttribute('classifications');
  }
  public set classifications(value: string[]) {
    this._classifications = value;
  }
  public resetClassifications() {
    this._classifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationsInput() {
    return this._classifications;
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // exclusive_patches - computed: false, optional: true, required: false
  private _exclusivePatches?: string[]; 
  public get exclusivePatches() {
    return this.getListAttribute('exclusive_patches');
  }
  public set exclusivePatches(value: string[]) {
    this._exclusivePatches = value;
  }
  public resetExclusivePatches() {
    this._exclusivePatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusivePatchesInput() {
    return this._exclusivePatches;
  }
}
export interface OsConfigPatchDeploymentPatchConfigYum {
  /**
  * List of packages to exclude from update. These packages will be excluded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#excludes OsConfigPatchDeployment#excludes}
  */
  readonly excludes?: string[];
  /**
  * An exclusive list of packages to be updated. These are the only packages that will be updated.
If these packages are not installed, they will be ignored. This field cannot be specified with
any other patch configuration fields.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#exclusive_packages OsConfigPatchDeployment#exclusive_packages}
  */
  readonly exclusivePackages?: string[];
  /**
  * Will cause patch to run yum update-minimal instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#minimal OsConfigPatchDeployment#minimal}
  */
  readonly minimal?: boolean | cdktf.IResolvable;
  /**
  * Adds the --security flag to yum update. Not supported on all platforms.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#security OsConfigPatchDeployment#security}
  */
  readonly security?: boolean | cdktf.IResolvable;
}

export function osConfigPatchDeploymentPatchConfigYumToTerraform(struct?: OsConfigPatchDeploymentPatchConfigYumOutputReference | OsConfigPatchDeploymentPatchConfigYum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludes),
    exclusive_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusivePackages),
    minimal: cdktf.booleanToTerraform(struct!.minimal),
    security: cdktf.booleanToTerraform(struct!.security),
  }
}

export class OsConfigPatchDeploymentPatchConfigYumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentPatchConfigYum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._exclusivePackages !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusivePackages = this._exclusivePackages;
    }
    if (this._minimal !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimal = this._minimal;
    }
    if (this._security !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentPatchConfigYum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludes = undefined;
      this._exclusivePackages = undefined;
      this._minimal = undefined;
      this._security = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludes = value.excludes;
      this._exclusivePackages = value.exclusivePackages;
      this._minimal = value.minimal;
      this._security = value.security;
    }
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // exclusive_packages - computed: false, optional: true, required: false
  private _exclusivePackages?: string[]; 
  public get exclusivePackages() {
    return this.getListAttribute('exclusive_packages');
  }
  public set exclusivePackages(value: string[]) {
    this._exclusivePackages = value;
  }
  public resetExclusivePackages() {
    this._exclusivePackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusivePackagesInput() {
    return this._exclusivePackages;
  }

  // minimal - computed: false, optional: true, required: false
  private _minimal?: boolean | cdktf.IResolvable; 
  public get minimal() {
    return this.getBooleanAttribute('minimal');
  }
  public set minimal(value: boolean | cdktf.IResolvable) {
    this._minimal = value;
  }
  public resetMinimal() {
    this._minimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalInput() {
    return this._minimal;
  }

  // security - computed: false, optional: true, required: false
  private _security?: boolean | cdktf.IResolvable; 
  public get security() {
    return this.getBooleanAttribute('security');
  }
  public set security(value: boolean | cdktf.IResolvable) {
    this._security = value;
  }
  public resetSecurity() {
    this._security = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security;
  }
}
export interface OsConfigPatchDeploymentPatchConfigZypper {
  /**
  * Install only patches with these categories. Common categories include security, recommended, and feature.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#categories OsConfigPatchDeployment#categories}
  */
  readonly categories?: string[];
  /**
  * List of packages to exclude from update.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#excludes OsConfigPatchDeployment#excludes}
  */
  readonly excludes?: string[];
  /**
  * An exclusive list of patches to be updated. These are the only patches that will be installed using 'zypper patch patch:' command.
This field must not be used with any other patch configuration fields.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#exclusive_patches OsConfigPatchDeployment#exclusive_patches}
  */
  readonly exclusivePatches?: string[];
  /**
  * Install only patches with these severities. Common severities include critical, important, moderate, and low.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#severities OsConfigPatchDeployment#severities}
  */
  readonly severities?: string[];
  /**
  * Adds the --with-optional flag to zypper patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#with_optional OsConfigPatchDeployment#with_optional}
  */
  readonly withOptional?: boolean | cdktf.IResolvable;
  /**
  * Adds the --with-update flag, to zypper patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#with_update OsConfigPatchDeployment#with_update}
  */
  readonly withUpdate?: boolean | cdktf.IResolvable;
}

export function osConfigPatchDeploymentPatchConfigZypperToTerraform(struct?: OsConfigPatchDeploymentPatchConfigZypperOutputReference | OsConfigPatchDeploymentPatchConfigZypper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categories: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.categories),
    excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludes),
    exclusive_patches: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclusivePatches),
    severities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.severities),
    with_optional: cdktf.booleanToTerraform(struct!.withOptional),
    with_update: cdktf.booleanToTerraform(struct!.withUpdate),
  }
}

export class OsConfigPatchDeploymentPatchConfigZypperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentPatchConfigZypper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categories !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories;
    }
    if (this._excludes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludes = this._excludes;
    }
    if (this._exclusivePatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusivePatches = this._exclusivePatches;
    }
    if (this._severities !== undefined) {
      hasAnyValues = true;
      internalValueResult.severities = this._severities;
    }
    if (this._withOptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.withOptional = this._withOptional;
    }
    if (this._withUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.withUpdate = this._withUpdate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentPatchConfigZypper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._categories = undefined;
      this._excludes = undefined;
      this._exclusivePatches = undefined;
      this._severities = undefined;
      this._withOptional = undefined;
      this._withUpdate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._categories = value.categories;
      this._excludes = value.excludes;
      this._exclusivePatches = value.exclusivePatches;
      this._severities = value.severities;
      this._withOptional = value.withOptional;
      this._withUpdate = value.withUpdate;
    }
  }

  // categories - computed: false, optional: true, required: false
  private _categories?: string[]; 
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[]) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[]; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[]) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes;
  }

  // exclusive_patches - computed: false, optional: true, required: false
  private _exclusivePatches?: string[]; 
  public get exclusivePatches() {
    return this.getListAttribute('exclusive_patches');
  }
  public set exclusivePatches(value: string[]) {
    this._exclusivePatches = value;
  }
  public resetExclusivePatches() {
    this._exclusivePatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusivePatchesInput() {
    return this._exclusivePatches;
  }

  // severities - computed: false, optional: true, required: false
  private _severities?: string[]; 
  public get severities() {
    return this.getListAttribute('severities');
  }
  public set severities(value: string[]) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities;
  }

  // with_optional - computed: false, optional: true, required: false
  private _withOptional?: boolean | cdktf.IResolvable; 
  public get withOptional() {
    return this.getBooleanAttribute('with_optional');
  }
  public set withOptional(value: boolean | cdktf.IResolvable) {
    this._withOptional = value;
  }
  public resetWithOptional() {
    this._withOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withOptionalInput() {
    return this._withOptional;
  }

  // with_update - computed: false, optional: true, required: false
  private _withUpdate?: boolean | cdktf.IResolvable; 
  public get withUpdate() {
    return this.getBooleanAttribute('with_update');
  }
  public set withUpdate(value: boolean | cdktf.IResolvable) {
    this._withUpdate = value;
  }
  public resetWithUpdate() {
    this._withUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withUpdateInput() {
    return this._withUpdate;
  }
}
export interface OsConfigPatchDeploymentPatchConfig {
  /**
  * Allows the patch job to run on Managed instance groups (MIGs).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#mig_instances_allowed OsConfigPatchDeployment#mig_instances_allowed}
  */
  readonly migInstancesAllowed?: boolean | cdktf.IResolvable;
  /**
  * Post-patch reboot settings. Possible values: ["DEFAULT", "ALWAYS", "NEVER"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#reboot_config OsConfigPatchDeployment#reboot_config}
  */
  readonly rebootConfig?: string;
  /**
  * apt block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#apt OsConfigPatchDeployment#apt}
  */
  readonly apt?: OsConfigPatchDeploymentPatchConfigApt;
  /**
  * goo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#goo OsConfigPatchDeployment#goo}
  */
  readonly goo?: OsConfigPatchDeploymentPatchConfigGoo;
  /**
  * post_step block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#post_step OsConfigPatchDeployment#post_step}
  */
  readonly postStep?: OsConfigPatchDeploymentPatchConfigPostStep;
  /**
  * pre_step block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#pre_step OsConfigPatchDeployment#pre_step}
  */
  readonly preStep?: OsConfigPatchDeploymentPatchConfigPreStep;
  /**
  * windows_update block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#windows_update OsConfigPatchDeployment#windows_update}
  */
  readonly windowsUpdate?: OsConfigPatchDeploymentPatchConfigWindowsUpdate;
  /**
  * yum block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#yum OsConfigPatchDeployment#yum}
  */
  readonly yum?: OsConfigPatchDeploymentPatchConfigYum;
  /**
  * zypper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#zypper OsConfigPatchDeployment#zypper}
  */
  readonly zypper?: OsConfigPatchDeploymentPatchConfigZypper;
}

export function osConfigPatchDeploymentPatchConfigToTerraform(struct?: OsConfigPatchDeploymentPatchConfigOutputReference | OsConfigPatchDeploymentPatchConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mig_instances_allowed: cdktf.booleanToTerraform(struct!.migInstancesAllowed),
    reboot_config: cdktf.stringToTerraform(struct!.rebootConfig),
    apt: osConfigPatchDeploymentPatchConfigAptToTerraform(struct!.apt),
    goo: osConfigPatchDeploymentPatchConfigGooToTerraform(struct!.goo),
    post_step: osConfigPatchDeploymentPatchConfigPostStepToTerraform(struct!.postStep),
    pre_step: osConfigPatchDeploymentPatchConfigPreStepToTerraform(struct!.preStep),
    windows_update: osConfigPatchDeploymentPatchConfigWindowsUpdateToTerraform(struct!.windowsUpdate),
    yum: osConfigPatchDeploymentPatchConfigYumToTerraform(struct!.yum),
    zypper: osConfigPatchDeploymentPatchConfigZypperToTerraform(struct!.zypper),
  }
}

export class OsConfigPatchDeploymentPatchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentPatchConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._migInstancesAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.migInstancesAllowed = this._migInstancesAllowed;
    }
    if (this._rebootConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.rebootConfig = this._rebootConfig;
    }
    if (this._apt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apt = this._apt?.internalValue;
    }
    if (this._goo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goo = this._goo?.internalValue;
    }
    if (this._postStep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postStep = this._postStep?.internalValue;
    }
    if (this._preStep?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preStep = this._preStep?.internalValue;
    }
    if (this._windowsUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsUpdate = this._windowsUpdate?.internalValue;
    }
    if (this._yum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yum = this._yum?.internalValue;
    }
    if (this._zypper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zypper = this._zypper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentPatchConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._migInstancesAllowed = undefined;
      this._rebootConfig = undefined;
      this._apt.internalValue = undefined;
      this._goo.internalValue = undefined;
      this._postStep.internalValue = undefined;
      this._preStep.internalValue = undefined;
      this._windowsUpdate.internalValue = undefined;
      this._yum.internalValue = undefined;
      this._zypper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._migInstancesAllowed = value.migInstancesAllowed;
      this._rebootConfig = value.rebootConfig;
      this._apt.internalValue = value.apt;
      this._goo.internalValue = value.goo;
      this._postStep.internalValue = value.postStep;
      this._preStep.internalValue = value.preStep;
      this._windowsUpdate.internalValue = value.windowsUpdate;
      this._yum.internalValue = value.yum;
      this._zypper.internalValue = value.zypper;
    }
  }

  // mig_instances_allowed - computed: false, optional: true, required: false
  private _migInstancesAllowed?: boolean | cdktf.IResolvable; 
  public get migInstancesAllowed() {
    return this.getBooleanAttribute('mig_instances_allowed');
  }
  public set migInstancesAllowed(value: boolean | cdktf.IResolvable) {
    this._migInstancesAllowed = value;
  }
  public resetMigInstancesAllowed() {
    this._migInstancesAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migInstancesAllowedInput() {
    return this._migInstancesAllowed;
  }

  // reboot_config - computed: false, optional: true, required: false
  private _rebootConfig?: string; 
  public get rebootConfig() {
    return this.getStringAttribute('reboot_config');
  }
  public set rebootConfig(value: string) {
    this._rebootConfig = value;
  }
  public resetRebootConfig() {
    this._rebootConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootConfigInput() {
    return this._rebootConfig;
  }

  // apt - computed: false, optional: true, required: false
  private _apt = new OsConfigPatchDeploymentPatchConfigAptOutputReference(this, "apt");
  public get apt() {
    return this._apt;
  }
  public putApt(value: OsConfigPatchDeploymentPatchConfigApt) {
    this._apt.internalValue = value;
  }
  public resetApt() {
    this._apt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aptInput() {
    return this._apt.internalValue;
  }

  // goo - computed: false, optional: true, required: false
  private _goo = new OsConfigPatchDeploymentPatchConfigGooOutputReference(this, "goo");
  public get goo() {
    return this._goo;
  }
  public putGoo(value: OsConfigPatchDeploymentPatchConfigGoo) {
    this._goo.internalValue = value;
  }
  public resetGoo() {
    this._goo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gooInput() {
    return this._goo.internalValue;
  }

  // post_step - computed: false, optional: true, required: false
  private _postStep = new OsConfigPatchDeploymentPatchConfigPostStepOutputReference(this, "post_step");
  public get postStep() {
    return this._postStep;
  }
  public putPostStep(value: OsConfigPatchDeploymentPatchConfigPostStep) {
    this._postStep.internalValue = value;
  }
  public resetPostStep() {
    this._postStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStepInput() {
    return this._postStep.internalValue;
  }

  // pre_step - computed: false, optional: true, required: false
  private _preStep = new OsConfigPatchDeploymentPatchConfigPreStepOutputReference(this, "pre_step");
  public get preStep() {
    return this._preStep;
  }
  public putPreStep(value: OsConfigPatchDeploymentPatchConfigPreStep) {
    this._preStep.internalValue = value;
  }
  public resetPreStep() {
    this._preStep.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStepInput() {
    return this._preStep.internalValue;
  }

  // windows_update - computed: false, optional: true, required: false
  private _windowsUpdate = new OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference(this, "windows_update");
  public get windowsUpdate() {
    return this._windowsUpdate;
  }
  public putWindowsUpdate(value: OsConfigPatchDeploymentPatchConfigWindowsUpdate) {
    this._windowsUpdate.internalValue = value;
  }
  public resetWindowsUpdate() {
    this._windowsUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsUpdateInput() {
    return this._windowsUpdate.internalValue;
  }

  // yum - computed: false, optional: true, required: false
  private _yum = new OsConfigPatchDeploymentPatchConfigYumOutputReference(this, "yum");
  public get yum() {
    return this._yum;
  }
  public putYum(value: OsConfigPatchDeploymentPatchConfigYum) {
    this._yum.internalValue = value;
  }
  public resetYum() {
    this._yum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yumInput() {
    return this._yum.internalValue;
  }

  // zypper - computed: false, optional: true, required: false
  private _zypper = new OsConfigPatchDeploymentPatchConfigZypperOutputReference(this, "zypper");
  public get zypper() {
    return this._zypper;
  }
  public putZypper(value: OsConfigPatchDeploymentPatchConfigZypper) {
    this._zypper.internalValue = value;
  }
  public resetZypper() {
    this._zypper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zypperInput() {
    return this._zypper.internalValue;
  }
}
export interface OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth {
  /**
  * A day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#day_of_week OsConfigPatchDeployment#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Week number in a month. 1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#week_ordinal OsConfigPatchDeployment#week_ordinal}
  */
  readonly weekOrdinal: number;
}

export function osConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthToTerraform(struct?: OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference | OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    week_ordinal: cdktf.numberToTerraform(struct!.weekOrdinal),
  }
}

export class OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._weekOrdinal !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekOrdinal = this._weekOrdinal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
      this._weekOrdinal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
      this._weekOrdinal = value.weekOrdinal;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // week_ordinal - computed: false, optional: false, required: true
  private _weekOrdinal?: number; 
  public get weekOrdinal() {
    return this.getNumberAttribute('week_ordinal');
  }
  public set weekOrdinal(value: number) {
    this._weekOrdinal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weekOrdinalInput() {
    return this._weekOrdinal;
  }
}
export interface OsConfigPatchDeploymentRecurringScheduleMonthly {
  /**
  * One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month.
Months without the target day will be skipped. For example, a schedule to run "every month on the 31st"
will not run in February, April, June, etc.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#month_day OsConfigPatchDeployment#month_day}
  */
  readonly monthDay?: number;
  /**
  * week_day_of_month block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#week_day_of_month OsConfigPatchDeployment#week_day_of_month}
  */
  readonly weekDayOfMonth?: OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth;
}

export function osConfigPatchDeploymentRecurringScheduleMonthlyToTerraform(struct?: OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference | OsConfigPatchDeploymentRecurringScheduleMonthly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    month_day: cdktf.numberToTerraform(struct!.monthDay),
    week_day_of_month: osConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthToTerraform(struct!.weekDayOfMonth),
  }
}

export class OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentRecurringScheduleMonthly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monthDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthDay = this._monthDay;
    }
    if (this._weekDayOfMonth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekDayOfMonth = this._weekDayOfMonth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentRecurringScheduleMonthly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._monthDay = undefined;
      this._weekDayOfMonth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._monthDay = value.monthDay;
      this._weekDayOfMonth.internalValue = value.weekDayOfMonth;
    }
  }

  // month_day - computed: false, optional: true, required: false
  private _monthDay?: number; 
  public get monthDay() {
    return this.getNumberAttribute('month_day');
  }
  public set monthDay(value: number) {
    this._monthDay = value;
  }
  public resetMonthDay() {
    this._monthDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthDayInput() {
    return this._monthDay;
  }

  // week_day_of_month - computed: false, optional: true, required: false
  private _weekDayOfMonth = new OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference(this, "week_day_of_month");
  public get weekDayOfMonth() {
    return this._weekDayOfMonth;
  }
  public putWeekDayOfMonth(value: OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth) {
    this._weekDayOfMonth.internalValue = value;
  }
  public resetWeekDayOfMonth() {
    this._weekDayOfMonth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDayOfMonthInput() {
    return this._weekDayOfMonth.internalValue;
  }
}
export interface OsConfigPatchDeploymentRecurringScheduleTimeOfDay {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#hours OsConfigPatchDeployment#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#minutes OsConfigPatchDeployment#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#nanos OsConfigPatchDeployment#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#seconds OsConfigPatchDeployment#seconds}
  */
  readonly seconds?: number;
}

export function osConfigPatchDeploymentRecurringScheduleTimeOfDayToTerraform(struct?: OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference | OsConfigPatchDeploymentRecurringScheduleTimeOfDay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export class OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentRecurringScheduleTimeOfDay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentRecurringScheduleTimeOfDay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface OsConfigPatchDeploymentRecurringScheduleTimeZone {
  /**
  * IANA Time Zone Database time zone, e.g. "America/New_York".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#id OsConfigPatchDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * IANA Time Zone Database version number, e.g. "2019a".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#version OsConfigPatchDeployment#version}
  */
  readonly version?: string;
}

export function osConfigPatchDeploymentRecurringScheduleTimeZoneToTerraform(struct?: OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference | OsConfigPatchDeploymentRecurringScheduleTimeZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentRecurringScheduleTimeZone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentRecurringScheduleTimeZone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._version = value.version;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface OsConfigPatchDeploymentRecurringScheduleWeekly {
  /**
  * IANA Time Zone Database time zone, e.g. "America/New_York". Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#day_of_week OsConfigPatchDeployment#day_of_week}
  */
  readonly dayOfWeek: string;
}

export function osConfigPatchDeploymentRecurringScheduleWeeklyToTerraform(struct?: OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference | OsConfigPatchDeploymentRecurringScheduleWeekly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
  }
}

export class OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentRecurringScheduleWeekly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentRecurringScheduleWeekly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dayOfWeek = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dayOfWeek = value.dayOfWeek;
    }
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }
}
export interface OsConfigPatchDeploymentRecurringSchedule {
  /**
  * The end time at which a recurring patch deployment schedule is no longer active.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#end_time OsConfigPatchDeployment#end_time}
  */
  readonly endTime?: string;
  /**
  * The time that the recurring schedule becomes effective. Defaults to createTime of the patch deployment.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#start_time OsConfigPatchDeployment#start_time}
  */
  readonly startTime?: string;
  /**
  * monthly block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#monthly OsConfigPatchDeployment#monthly}
  */
  readonly monthly?: OsConfigPatchDeploymentRecurringScheduleMonthly;
  /**
  * time_of_day block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#time_of_day OsConfigPatchDeployment#time_of_day}
  */
  readonly timeOfDay: OsConfigPatchDeploymentRecurringScheduleTimeOfDay;
  /**
  * time_zone block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#time_zone OsConfigPatchDeployment#time_zone}
  */
  readonly timeZone: OsConfigPatchDeploymentRecurringScheduleTimeZone;
  /**
  * weekly block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#weekly OsConfigPatchDeployment#weekly}
  */
  readonly weekly?: OsConfigPatchDeploymentRecurringScheduleWeekly;
}

export function osConfigPatchDeploymentRecurringScheduleToTerraform(struct?: OsConfigPatchDeploymentRecurringScheduleOutputReference | OsConfigPatchDeploymentRecurringSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    monthly: osConfigPatchDeploymentRecurringScheduleMonthlyToTerraform(struct!.monthly),
    time_of_day: osConfigPatchDeploymentRecurringScheduleTimeOfDayToTerraform(struct!.timeOfDay),
    time_zone: osConfigPatchDeploymentRecurringScheduleTimeZoneToTerraform(struct!.timeZone),
    weekly: osConfigPatchDeploymentRecurringScheduleWeeklyToTerraform(struct!.weekly),
  }
}

export class OsConfigPatchDeploymentRecurringScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentRecurringSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._monthly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly?.internalValue;
    }
    if (this._timeOfDay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeOfDay = this._timeOfDay?.internalValue;
    }
    if (this._timeZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone?.internalValue;
    }
    if (this._weekly?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekly = this._weekly?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentRecurringSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._startTime = undefined;
      this._monthly.internalValue = undefined;
      this._timeOfDay.internalValue = undefined;
      this._timeZone.internalValue = undefined;
      this._weekly.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._monthly.internalValue = value.monthly;
      this._timeOfDay.internalValue = value.timeOfDay;
      this._timeZone.internalValue = value.timeZone;
      this._weekly.internalValue = value.weekly;
    }
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // last_execute_time - computed: true, optional: false, required: false
  public get lastExecuteTime() {
    return this.getStringAttribute('last_execute_time');
  }

  // next_execute_time - computed: true, optional: false, required: false
  public get nextExecuteTime() {
    return this.getStringAttribute('next_execute_time');
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // monthly - computed: false, optional: true, required: false
  private _monthly = new OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference(this, "monthly");
  public get monthly() {
    return this._monthly;
  }
  public putMonthly(value: OsConfigPatchDeploymentRecurringScheduleMonthly) {
    this._monthly.internalValue = value;
  }
  public resetMonthly() {
    this._monthly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly.internalValue;
  }

  // time_of_day - computed: false, optional: false, required: true
  private _timeOfDay = new OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference(this, "time_of_day");
  public get timeOfDay() {
    return this._timeOfDay;
  }
  public putTimeOfDay(value: OsConfigPatchDeploymentRecurringScheduleTimeOfDay) {
    this._timeOfDay.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfDayInput() {
    return this._timeOfDay.internalValue;
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone = new OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference(this, "time_zone");
  public get timeZone() {
    return this._timeZone;
  }
  public putTimeZone(value: OsConfigPatchDeploymentRecurringScheduleTimeZone) {
    this._timeZone.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone.internalValue;
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly = new OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference(this, "weekly");
  public get weekly() {
    return this._weekly;
  }
  public putWeekly(value: OsConfigPatchDeploymentRecurringScheduleWeekly) {
    this._weekly.internalValue = value;
  }
  public resetWeekly() {
    this._weekly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly.internalValue;
  }
}
export interface OsConfigPatchDeploymentRolloutDisruptionBudget {
  /**
  * Specifies a fixed value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#fixed OsConfigPatchDeployment#fixed}
  */
  readonly fixed?: number;
  /**
  * Specifies the relative value defined as a percentage, which will be multiplied by a reference value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#percentage OsConfigPatchDeployment#percentage}
  */
  readonly percentage?: number;
}

export function osConfigPatchDeploymentRolloutDisruptionBudgetToTerraform(struct?: OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference | OsConfigPatchDeploymentRolloutDisruptionBudget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed: cdktf.numberToTerraform(struct!.fixed),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}

export class OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentRolloutDisruptionBudget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixed = this._fixed;
    }
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentRolloutDisruptionBudget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixed = undefined;
      this._percentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixed = value.fixed;
      this._percentage = value.percentage;
    }
  }

  // fixed - computed: false, optional: true, required: false
  private _fixed?: number; 
  public get fixed() {
    return this.getNumberAttribute('fixed');
  }
  public set fixed(value: number) {
    this._fixed = value;
  }
  public resetFixed() {
    this._fixed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedInput() {
    return this._fixed;
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}
export interface OsConfigPatchDeploymentRollout {
  /**
  * Mode of the patch rollout. Possible values: ["ZONE_BY_ZONE", "CONCURRENT_ZONES"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#mode OsConfigPatchDeployment#mode}
  */
  readonly mode: string;
  /**
  * disruption_budget block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#disruption_budget OsConfigPatchDeployment#disruption_budget}
  */
  readonly disruptionBudget: OsConfigPatchDeploymentRolloutDisruptionBudget;
}

export function osConfigPatchDeploymentRolloutToTerraform(struct?: OsConfigPatchDeploymentRolloutOutputReference | OsConfigPatchDeploymentRollout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    disruption_budget: osConfigPatchDeploymentRolloutDisruptionBudgetToTerraform(struct!.disruptionBudget),
  }
}

export class OsConfigPatchDeploymentRolloutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentRollout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._disruptionBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disruptionBudget = this._disruptionBudget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentRollout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._disruptionBudget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._disruptionBudget.internalValue = value.disruptionBudget;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // disruption_budget - computed: false, optional: false, required: true
  private _disruptionBudget = new OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference(this, "disruption_budget");
  public get disruptionBudget() {
    return this._disruptionBudget;
  }
  public putDisruptionBudget(value: OsConfigPatchDeploymentRolloutDisruptionBudget) {
    this._disruptionBudget.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disruptionBudgetInput() {
    return this._disruptionBudget.internalValue;
  }
}
export interface OsConfigPatchDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#create OsConfigPatchDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment#delete OsConfigPatchDeployment#delete}
  */
  readonly delete?: string;
}

export function osConfigPatchDeploymentTimeoutsToTerraform(struct?: OsConfigPatchDeploymentTimeoutsOutputReference | OsConfigPatchDeploymentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class OsConfigPatchDeploymentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigPatchDeploymentTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigPatchDeploymentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment google_os_config_patch_deployment}
*/
export class OsConfigPatchDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_os_config_patch_deployment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment google_os_config_patch_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsConfigPatchDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: OsConfigPatchDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_os_config_patch_deployment',
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
    this._description = config.description;
    this._duration = config.duration;
    this._id = config.id;
    this._patchDeploymentId = config.patchDeploymentId;
    this._project = config.project;
    this._instanceFilter.internalValue = config.instanceFilter;
    this._oneTimeSchedule.internalValue = config.oneTimeSchedule;
    this._patchConfig.internalValue = config.patchConfig;
    this._recurringSchedule.internalValue = config.recurringSchedule;
    this._rollout.internalValue = config.rollout;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // last_execute_time - computed: true, optional: false, required: false
  public get lastExecuteTime() {
    return this.getStringAttribute('last_execute_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // patch_deployment_id - computed: false, optional: false, required: true
  private _patchDeploymentId?: string; 
  public get patchDeploymentId() {
    return this.getStringAttribute('patch_deployment_id');
  }
  public set patchDeploymentId(value: string) {
    this._patchDeploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchDeploymentIdInput() {
    return this._patchDeploymentId;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // instance_filter - computed: false, optional: false, required: true
  private _instanceFilter = new OsConfigPatchDeploymentInstanceFilterOutputReference(this, "instance_filter");
  public get instanceFilter() {
    return this._instanceFilter;
  }
  public putInstanceFilter(value: OsConfigPatchDeploymentInstanceFilter) {
    this._instanceFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceFilterInput() {
    return this._instanceFilter.internalValue;
  }

  // one_time_schedule - computed: false, optional: true, required: false
  private _oneTimeSchedule = new OsConfigPatchDeploymentOneTimeScheduleOutputReference(this, "one_time_schedule");
  public get oneTimeSchedule() {
    return this._oneTimeSchedule;
  }
  public putOneTimeSchedule(value: OsConfigPatchDeploymentOneTimeSchedule) {
    this._oneTimeSchedule.internalValue = value;
  }
  public resetOneTimeSchedule() {
    this._oneTimeSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneTimeScheduleInput() {
    return this._oneTimeSchedule.internalValue;
  }

  // patch_config - computed: false, optional: true, required: false
  private _patchConfig = new OsConfigPatchDeploymentPatchConfigOutputReference(this, "patch_config");
  public get patchConfig() {
    return this._patchConfig;
  }
  public putPatchConfig(value: OsConfigPatchDeploymentPatchConfig) {
    this._patchConfig.internalValue = value;
  }
  public resetPatchConfig() {
    this._patchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchConfigInput() {
    return this._patchConfig.internalValue;
  }

  // recurring_schedule - computed: false, optional: true, required: false
  private _recurringSchedule = new OsConfigPatchDeploymentRecurringScheduleOutputReference(this, "recurring_schedule");
  public get recurringSchedule() {
    return this._recurringSchedule;
  }
  public putRecurringSchedule(value: OsConfigPatchDeploymentRecurringSchedule) {
    this._recurringSchedule.internalValue = value;
  }
  public resetRecurringSchedule() {
    this._recurringSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringScheduleInput() {
    return this._recurringSchedule.internalValue;
  }

  // rollout - computed: false, optional: true, required: false
  private _rollout = new OsConfigPatchDeploymentRolloutOutputReference(this, "rollout");
  public get rollout() {
    return this._rollout;
  }
  public putRollout(value: OsConfigPatchDeploymentRollout) {
    this._rollout.internalValue = value;
  }
  public resetRollout() {
    this._rollout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutInput() {
    return this._rollout.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OsConfigPatchDeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OsConfigPatchDeploymentTimeouts) {
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
      duration: cdktf.stringToTerraform(this._duration),
      id: cdktf.stringToTerraform(this._id),
      patch_deployment_id: cdktf.stringToTerraform(this._patchDeploymentId),
      project: cdktf.stringToTerraform(this._project),
      instance_filter: osConfigPatchDeploymentInstanceFilterToTerraform(this._instanceFilter.internalValue),
      one_time_schedule: osConfigPatchDeploymentOneTimeScheduleToTerraform(this._oneTimeSchedule.internalValue),
      patch_config: osConfigPatchDeploymentPatchConfigToTerraform(this._patchConfig.internalValue),
      recurring_schedule: osConfigPatchDeploymentRecurringScheduleToTerraform(this._recurringSchedule.internalValue),
      rollout: osConfigPatchDeploymentRolloutToTerraform(this._rollout.internalValue),
      timeouts: osConfigPatchDeploymentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
