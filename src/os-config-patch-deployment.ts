// https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsConfigPatchDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the patch deployment. Length of the description is limited to 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#description OsConfigPatchDeployment#description}
  */
  readonly description?: string;
  /**
  * Duration of the patch. After the duration ends, the patch times out.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#duration OsConfigPatchDeployment#duration}
  */
  readonly duration?: string;
  /**
  * A name for the patch deployment in the project. When creating a name the following rules apply:
* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.
* Must be unique within the project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#patch_deployment_id OsConfigPatchDeployment#patch_deployment_id}
  */
  readonly patchDeploymentId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#project OsConfigPatchDeployment#project}
  */
  readonly project?: string;
  /**
  * instance_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#instance_filter OsConfigPatchDeployment#instance_filter}
  */
  readonly instanceFilter: OsConfigPatchDeploymentInstanceFilter;
  /**
  * one_time_schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#one_time_schedule OsConfigPatchDeployment#one_time_schedule}
  */
  readonly oneTimeSchedule?: OsConfigPatchDeploymentOneTimeSchedule;
  /**
  * patch_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#patch_config OsConfigPatchDeployment#patch_config}
  */
  readonly patchConfig?: OsConfigPatchDeploymentPatchConfig;
  /**
  * recurring_schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#recurring_schedule OsConfigPatchDeployment#recurring_schedule}
  */
  readonly recurringSchedule?: OsConfigPatchDeploymentRecurringSchedule;
  /**
  * rollout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#rollout OsConfigPatchDeployment#rollout}
  */
  readonly rollout?: OsConfigPatchDeploymentRollout;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#timeouts OsConfigPatchDeployment#timeouts}
  */
  readonly timeouts?: OsConfigPatchDeploymentTimeouts;
}
export interface OsConfigPatchDeploymentInstanceFilterGroupLabels {
  /**
  * Compute Engine instance labels that must be present for a VM instance to be targeted by this filter
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#labels OsConfigPatchDeployment#labels}
  */
  readonly labels: { [key: string]: string } | cdktf.IResolvable;
}

function osConfigPatchDeploymentInstanceFilterGroupLabelsToTerraform(struct?: OsConfigPatchDeploymentInstanceFilterGroupLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
  }
}

export interface OsConfigPatchDeploymentInstanceFilter {
  /**
  * Target all VM instances in the project. If true, no other criteria is permitted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#all OsConfigPatchDeployment#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * Targets VMs whose name starts with one of these prefixes. Similar to labels, this is another way to group
VMs when targeting configs, for example prefix="prod-".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#instance_name_prefixes OsConfigPatchDeployment#instance_name_prefixes}
  */
  readonly instanceNamePrefixes?: string[];
  /**
  * Targets any of the VM instances specified. Instances are specified by their URI in the 'form zones/{{zone}}/instances/{{instance_name}}',
'projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}', or
'https://www.googleapis.com/compute/v1/projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#instances OsConfigPatchDeployment#instances}
  */
  readonly instances?: string[];
  /**
  * Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#zones OsConfigPatchDeployment#zones}
  */
  readonly zones?: string[];
  /**
  * group_labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#group_labels OsConfigPatchDeployment#group_labels}
  */
  readonly groupLabels?: OsConfigPatchDeploymentInstanceFilterGroupLabels[];
}

function osConfigPatchDeploymentInstanceFilterToTerraform(struct?: OsConfigPatchDeploymentInstanceFilterOutputReference | OsConfigPatchDeploymentInstanceFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    instance_name_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.instanceNamePrefixes),
    instances: cdktf.listMapper(cdktf.stringToTerraform)(struct!.instances),
    zones: cdktf.listMapper(cdktf.stringToTerraform)(struct!.zones),
    group_labels: cdktf.listMapper(osConfigPatchDeploymentInstanceFilterGroupLabelsToTerraform)(struct!.groupLabels),
  }
}

export class OsConfigPatchDeploymentInstanceFilterOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // all - computed: false, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable | undefined; 
  public get all() {
    return this.getBooleanAttribute('all') as any;
  }
  public set all(value: boolean | cdktf.IResolvable | undefined) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all
  }

  // instance_name_prefixes - computed: false, optional: true, required: false
  private _instanceNamePrefixes?: string[] | undefined; 
  public get instanceNamePrefixes() {
    return this.getListAttribute('instance_name_prefixes');
  }
  public set instanceNamePrefixes(value: string[] | undefined) {
    this._instanceNamePrefixes = value;
  }
  public resetInstanceNamePrefixes() {
    this._instanceNamePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNamePrefixesInput() {
    return this._instanceNamePrefixes
  }

  // instances - computed: false, optional: true, required: false
  private _instances?: string[] | undefined; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[] | undefined) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances
  }

  // zones - computed: false, optional: true, required: false
  private _zones?: string[] | undefined; 
  public get zones() {
    return this.getListAttribute('zones');
  }
  public set zones(value: string[] | undefined) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones
  }

  // group_labels - computed: false, optional: true, required: false
  private _groupLabels?: OsConfigPatchDeploymentInstanceFilterGroupLabels[] | undefined; 
  public get groupLabels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('group_labels') as any;
  }
  public set groupLabels(value: OsConfigPatchDeploymentInstanceFilterGroupLabels[] | undefined) {
    this._groupLabels = value;
  }
  public resetGroupLabels() {
    this._groupLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupLabelsInput() {
    return this._groupLabels
  }
}
export interface OsConfigPatchDeploymentOneTimeSchedule {
  /**
  * The desired patch job execution time. A timestamp in RFC3339 UTC "Zulu" format,
accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#execute_time OsConfigPatchDeployment#execute_time}
  */
  readonly executeTime: string;
}

function osConfigPatchDeploymentOneTimeScheduleToTerraform(struct?: OsConfigPatchDeploymentOneTimeScheduleOutputReference | OsConfigPatchDeploymentOneTimeSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    execute_time: cdktf.stringToTerraform(struct!.executeTime),
  }
}

export class OsConfigPatchDeploymentOneTimeScheduleOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._executeTime
  }
}
export interface OsConfigPatchDeploymentPatchConfigApt {
  /**
  * List of packages to exclude from update. These packages will be excluded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#excludes OsConfigPatchDeployment#excludes}
  */
  readonly excludes?: string[];
  /**
  * An exclusive list of packages to be updated. These are the only packages that will be updated.
If these packages are not installed, they will be ignored. This field cannot be specified with
any other patch configuration fields.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#exclusive_packages OsConfigPatchDeployment#exclusive_packages}
  */
  readonly exclusivePackages?: string[];
  /**
  * By changing the type to DIST, the patching is performed using apt-get dist-upgrade instead. Possible values: ["DIST", "UPGRADE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#type OsConfigPatchDeployment#type}
  */
  readonly type?: string;
}

function osConfigPatchDeploymentPatchConfigAptToTerraform(struct?: OsConfigPatchDeploymentPatchConfigAptOutputReference | OsConfigPatchDeploymentPatchConfigApt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludes),
    exclusive_packages: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclusivePackages),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class OsConfigPatchDeploymentPatchConfigAptOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[] | undefined; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[] | undefined) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes
  }

  // exclusive_packages - computed: false, optional: true, required: false
  private _exclusivePackages?: string[] | undefined; 
  public get exclusivePackages() {
    return this.getListAttribute('exclusive_packages');
  }
  public set exclusivePackages(value: string[] | undefined) {
    this._exclusivePackages = value;
  }
  public resetExclusivePackages() {
    this._exclusivePackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusivePackagesInput() {
    return this._exclusivePackages
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }
}
export interface OsConfigPatchDeploymentPatchConfigGoo {
  /**
  * goo update settings. Use this setting to override the default goo patch rules.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#enabled OsConfigPatchDeployment#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

function osConfigPatchDeploymentPatchConfigGooToTerraform(struct?: OsConfigPatchDeploymentPatchConfigGooOutputReference | OsConfigPatchDeploymentPatchConfigGoo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class OsConfigPatchDeploymentPatchConfigGooOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }
}
export interface OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject {
  /**
  * Bucket of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#bucket OsConfigPatchDeployment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#generation_number OsConfigPatchDeployment#generation_number}
  */
  readonly generationNumber: string;
  /**
  * Name of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#object OsConfigPatchDeployment#object}
  */
  readonly object: string;
}

function osConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference | OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._bucket
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
    return this._generationNumber
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
    return this._object
  }
}
export interface OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig {
  /**
  * Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#allowed_success_codes OsConfigPatchDeployment#allowed_success_codes}
  */
  readonly allowedSuccessCodes?: number[];
  /**
  * The script interpreter to use to run the script. If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#interpreter OsConfigPatchDeployment#interpreter}
  */
  readonly interpreter?: string;
  /**
  * An absolute path to the executable on the VM.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#local_path OsConfigPatchDeployment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs_object block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#gcs_object OsConfigPatchDeployment#gcs_object}
  */
  readonly gcsObject?: OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject;
}

function osConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference | OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_success_codes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.allowedSuccessCodes),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs_object: osConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectToTerraform(struct!.gcsObject),
  }
}

export class OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allowed_success_codes - computed: false, optional: true, required: false
  private _allowedSuccessCodes?: number[] | undefined; 
  public get allowedSuccessCodes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('allowed_success_codes') as any;
  }
  public set allowedSuccessCodes(value: number[] | undefined) {
    this._allowedSuccessCodes = value;
  }
  public resetAllowedSuccessCodes() {
    this._allowedSuccessCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSuccessCodesInput() {
    return this._allowedSuccessCodes
  }

  // interpreter - computed: false, optional: true, required: false
  private _interpreter?: string | undefined; 
  public get interpreter() {
    return this.getStringAttribute('interpreter');
  }
  public set interpreter(value: string | undefined) {
    this._interpreter = value;
  }
  public resetInterpreter() {
    this._interpreter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterInput() {
    return this._interpreter
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string | undefined; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string | undefined) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath
  }

  // gcs_object - computed: false, optional: true, required: false
  private _gcsObject?: OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject | undefined; 
  private __gcsObjectOutput = new OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectOutputReference(this as any, "gcs_object", true);
  public get gcsObject() {
    return this.__gcsObjectOutput;
  }
  public putGcsObject(value: OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject | undefined) {
    this._gcsObject = value;
  }
  public resetGcsObject() {
    this._gcsObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsObjectInput() {
    return this._gcsObject
  }
}
export interface OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject {
  /**
  * Bucket of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#bucket OsConfigPatchDeployment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#generation_number OsConfigPatchDeployment#generation_number}
  */
  readonly generationNumber: string;
  /**
  * Name of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#object OsConfigPatchDeployment#object}
  */
  readonly object: string;
}

function osConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference | OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._bucket
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
    return this._generationNumber
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
    return this._object
  }
}
export interface OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig {
  /**
  * Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#allowed_success_codes OsConfigPatchDeployment#allowed_success_codes}
  */
  readonly allowedSuccessCodes?: number[];
  /**
  * The script interpreter to use to run the script. If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#interpreter OsConfigPatchDeployment#interpreter}
  */
  readonly interpreter?: string;
  /**
  * An absolute path to the executable on the VM.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#local_path OsConfigPatchDeployment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs_object block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#gcs_object OsConfigPatchDeployment#gcs_object}
  */
  readonly gcsObject?: OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject;
}

function osConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference | OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_success_codes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.allowedSuccessCodes),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs_object: osConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectToTerraform(struct!.gcsObject),
  }
}

export class OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allowed_success_codes - computed: false, optional: true, required: false
  private _allowedSuccessCodes?: number[] | undefined; 
  public get allowedSuccessCodes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('allowed_success_codes') as any;
  }
  public set allowedSuccessCodes(value: number[] | undefined) {
    this._allowedSuccessCodes = value;
  }
  public resetAllowedSuccessCodes() {
    this._allowedSuccessCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSuccessCodesInput() {
    return this._allowedSuccessCodes
  }

  // interpreter - computed: false, optional: true, required: false
  private _interpreter?: string | undefined; 
  public get interpreter() {
    return this.getStringAttribute('interpreter');
  }
  public set interpreter(value: string | undefined) {
    this._interpreter = value;
  }
  public resetInterpreter() {
    this._interpreter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterInput() {
    return this._interpreter
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string | undefined; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string | undefined) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath
  }

  // gcs_object - computed: false, optional: true, required: false
  private _gcsObject?: OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject | undefined; 
  private __gcsObjectOutput = new OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectOutputReference(this as any, "gcs_object", true);
  public get gcsObject() {
    return this.__gcsObjectOutput;
  }
  public putGcsObject(value: OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject | undefined) {
    this._gcsObject = value;
  }
  public resetGcsObject() {
    this._gcsObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsObjectInput() {
    return this._gcsObject
  }
}
export interface OsConfigPatchDeploymentPatchConfigPostStep {
  /**
  * linux_exec_step_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#linux_exec_step_config OsConfigPatchDeployment#linux_exec_step_config}
  */
  readonly linuxExecStepConfig?: OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig;
  /**
  * windows_exec_step_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#windows_exec_step_config OsConfigPatchDeployment#windows_exec_step_config}
  */
  readonly windowsExecStepConfig?: OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig;
}

function osConfigPatchDeploymentPatchConfigPostStepToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPostStepOutputReference | OsConfigPatchDeploymentPatchConfigPostStep): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linux_exec_step_config: osConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigToTerraform(struct!.linuxExecStepConfig),
    windows_exec_step_config: osConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigToTerraform(struct!.windowsExecStepConfig),
  }
}

export class OsConfigPatchDeploymentPatchConfigPostStepOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // linux_exec_step_config - computed: false, optional: true, required: false
  private _linuxExecStepConfig?: OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig | undefined; 
  private __linuxExecStepConfigOutput = new OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigOutputReference(this as any, "linux_exec_step_config", true);
  public get linuxExecStepConfig() {
    return this.__linuxExecStepConfigOutput;
  }
  public putLinuxExecStepConfig(value: OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig | undefined) {
    this._linuxExecStepConfig = value;
  }
  public resetLinuxExecStepConfig() {
    this._linuxExecStepConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxExecStepConfigInput() {
    return this._linuxExecStepConfig
  }

  // windows_exec_step_config - computed: false, optional: true, required: false
  private _windowsExecStepConfig?: OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig | undefined; 
  private __windowsExecStepConfigOutput = new OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigOutputReference(this as any, "windows_exec_step_config", true);
  public get windowsExecStepConfig() {
    return this.__windowsExecStepConfigOutput;
  }
  public putWindowsExecStepConfig(value: OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig | undefined) {
    this._windowsExecStepConfig = value;
  }
  public resetWindowsExecStepConfig() {
    this._windowsExecStepConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsExecStepConfigInput() {
    return this._windowsExecStepConfig
  }
}
export interface OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject {
  /**
  * Bucket of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#bucket OsConfigPatchDeployment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#generation_number OsConfigPatchDeployment#generation_number}
  */
  readonly generationNumber: string;
  /**
  * Name of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#object OsConfigPatchDeployment#object}
  */
  readonly object: string;
}

function osConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference | OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._bucket
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
    return this._generationNumber
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
    return this._object
  }
}
export interface OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig {
  /**
  * Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#allowed_success_codes OsConfigPatchDeployment#allowed_success_codes}
  */
  readonly allowedSuccessCodes?: number[];
  /**
  * The script interpreter to use to run the script. If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#interpreter OsConfigPatchDeployment#interpreter}
  */
  readonly interpreter?: string;
  /**
  * An absolute path to the executable on the VM.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#local_path OsConfigPatchDeployment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs_object block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#gcs_object OsConfigPatchDeployment#gcs_object}
  */
  readonly gcsObject?: OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject;
}

function osConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference | OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_success_codes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.allowedSuccessCodes),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs_object: osConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectToTerraform(struct!.gcsObject),
  }
}

export class OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allowed_success_codes - computed: false, optional: true, required: false
  private _allowedSuccessCodes?: number[] | undefined; 
  public get allowedSuccessCodes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('allowed_success_codes') as any;
  }
  public set allowedSuccessCodes(value: number[] | undefined) {
    this._allowedSuccessCodes = value;
  }
  public resetAllowedSuccessCodes() {
    this._allowedSuccessCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSuccessCodesInput() {
    return this._allowedSuccessCodes
  }

  // interpreter - computed: false, optional: true, required: false
  private _interpreter?: string | undefined; 
  public get interpreter() {
    return this.getStringAttribute('interpreter');
  }
  public set interpreter(value: string | undefined) {
    this._interpreter = value;
  }
  public resetInterpreter() {
    this._interpreter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterInput() {
    return this._interpreter
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string | undefined; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string | undefined) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath
  }

  // gcs_object - computed: false, optional: true, required: false
  private _gcsObject?: OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject | undefined; 
  private __gcsObjectOutput = new OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectOutputReference(this as any, "gcs_object", true);
  public get gcsObject() {
    return this.__gcsObjectOutput;
  }
  public putGcsObject(value: OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject | undefined) {
    this._gcsObject = value;
  }
  public resetGcsObject() {
    this._gcsObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsObjectInput() {
    return this._gcsObject
  }
}
export interface OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject {
  /**
  * Bucket of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#bucket OsConfigPatchDeployment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#generation_number OsConfigPatchDeployment#generation_number}
  */
  readonly generationNumber: string;
  /**
  * Name of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#object OsConfigPatchDeployment#object}
  */
  readonly object: string;
}

function osConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference | OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._bucket
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
    return this._generationNumber
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
    return this._object
  }
}
export interface OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig {
  /**
  * Defaults to [0]. A list of possible return values that the execution can return to indicate a success.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#allowed_success_codes OsConfigPatchDeployment#allowed_success_codes}
  */
  readonly allowedSuccessCodes?: number[];
  /**
  * The script interpreter to use to run the script. If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#interpreter OsConfigPatchDeployment#interpreter}
  */
  readonly interpreter?: string;
  /**
  * An absolute path to the executable on the VM.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#local_path OsConfigPatchDeployment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs_object block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#gcs_object OsConfigPatchDeployment#gcs_object}
  */
  readonly gcsObject?: OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject;
}

function osConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference | OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_success_codes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.allowedSuccessCodes),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs_object: osConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectToTerraform(struct!.gcsObject),
  }
}

export class OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allowed_success_codes - computed: false, optional: true, required: false
  private _allowedSuccessCodes?: number[] | undefined; 
  public get allowedSuccessCodes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('allowed_success_codes') as any;
  }
  public set allowedSuccessCodes(value: number[] | undefined) {
    this._allowedSuccessCodes = value;
  }
  public resetAllowedSuccessCodes() {
    this._allowedSuccessCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSuccessCodesInput() {
    return this._allowedSuccessCodes
  }

  // interpreter - computed: false, optional: true, required: false
  private _interpreter?: string | undefined; 
  public get interpreter() {
    return this.getStringAttribute('interpreter');
  }
  public set interpreter(value: string | undefined) {
    this._interpreter = value;
  }
  public resetInterpreter() {
    this._interpreter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterInput() {
    return this._interpreter
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string | undefined; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string | undefined) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath
  }

  // gcs_object - computed: false, optional: true, required: false
  private _gcsObject?: OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject | undefined; 
  private __gcsObjectOutput = new OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectOutputReference(this as any, "gcs_object", true);
  public get gcsObject() {
    return this.__gcsObjectOutput;
  }
  public putGcsObject(value: OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject | undefined) {
    this._gcsObject = value;
  }
  public resetGcsObject() {
    this._gcsObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsObjectInput() {
    return this._gcsObject
  }
}
export interface OsConfigPatchDeploymentPatchConfigPreStep {
  /**
  * linux_exec_step_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#linux_exec_step_config OsConfigPatchDeployment#linux_exec_step_config}
  */
  readonly linuxExecStepConfig?: OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig;
  /**
  * windows_exec_step_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#windows_exec_step_config OsConfigPatchDeployment#windows_exec_step_config}
  */
  readonly windowsExecStepConfig?: OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig;
}

function osConfigPatchDeploymentPatchConfigPreStepToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPreStepOutputReference | OsConfigPatchDeploymentPatchConfigPreStep): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linux_exec_step_config: osConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigToTerraform(struct!.linuxExecStepConfig),
    windows_exec_step_config: osConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigToTerraform(struct!.windowsExecStepConfig),
  }
}

export class OsConfigPatchDeploymentPatchConfigPreStepOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // linux_exec_step_config - computed: false, optional: true, required: false
  private _linuxExecStepConfig?: OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig | undefined; 
  private __linuxExecStepConfigOutput = new OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigOutputReference(this as any, "linux_exec_step_config", true);
  public get linuxExecStepConfig() {
    return this.__linuxExecStepConfigOutput;
  }
  public putLinuxExecStepConfig(value: OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig | undefined) {
    this._linuxExecStepConfig = value;
  }
  public resetLinuxExecStepConfig() {
    this._linuxExecStepConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxExecStepConfigInput() {
    return this._linuxExecStepConfig
  }

  // windows_exec_step_config - computed: false, optional: true, required: false
  private _windowsExecStepConfig?: OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig | undefined; 
  private __windowsExecStepConfigOutput = new OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigOutputReference(this as any, "windows_exec_step_config", true);
  public get windowsExecStepConfig() {
    return this.__windowsExecStepConfigOutput;
  }
  public putWindowsExecStepConfig(value: OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig | undefined) {
    this._windowsExecStepConfig = value;
  }
  public resetWindowsExecStepConfig() {
    this._windowsExecStepConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsExecStepConfigInput() {
    return this._windowsExecStepConfig
  }
}
export interface OsConfigPatchDeploymentPatchConfigWindowsUpdate {
  /**
  * Only apply updates of these windows update classifications. If empty, all updates are applied. Possible values: ["CRITICAL", "SECURITY", "DEFINITION", "DRIVER", "FEATURE_PACK", "SERVICE_PACK", "TOOL", "UPDATE_ROLLUP", "UPDATE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#classifications OsConfigPatchDeployment#classifications}
  */
  readonly classifications?: string[];
  /**
  * List of KBs to exclude from update.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#excludes OsConfigPatchDeployment#excludes}
  */
  readonly excludes?: string[];
  /**
  * An exclusive list of kbs to be updated. These are the only patches that will be updated.
This field must not be used with other patch configurations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#exclusive_patches OsConfigPatchDeployment#exclusive_patches}
  */
  readonly exclusivePatches?: string[];
}

function osConfigPatchDeploymentPatchConfigWindowsUpdateToTerraform(struct?: OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference | OsConfigPatchDeploymentPatchConfigWindowsUpdate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classifications: cdktf.listMapper(cdktf.stringToTerraform)(struct!.classifications),
    excludes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludes),
    exclusive_patches: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclusivePatches),
  }
}

export class OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // classifications - computed: false, optional: true, required: false
  private _classifications?: string[] | undefined; 
  public get classifications() {
    return this.getListAttribute('classifications');
  }
  public set classifications(value: string[] | undefined) {
    this._classifications = value;
  }
  public resetClassifications() {
    this._classifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationsInput() {
    return this._classifications
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[] | undefined; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[] | undefined) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes
  }

  // exclusive_patches - computed: false, optional: true, required: false
  private _exclusivePatches?: string[] | undefined; 
  public get exclusivePatches() {
    return this.getListAttribute('exclusive_patches');
  }
  public set exclusivePatches(value: string[] | undefined) {
    this._exclusivePatches = value;
  }
  public resetExclusivePatches() {
    this._exclusivePatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusivePatchesInput() {
    return this._exclusivePatches
  }
}
export interface OsConfigPatchDeploymentPatchConfigYum {
  /**
  * List of packages to exclude from update. These packages will be excluded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#excludes OsConfigPatchDeployment#excludes}
  */
  readonly excludes?: string[];
  /**
  * An exclusive list of packages to be updated. These are the only packages that will be updated.
If these packages are not installed, they will be ignored. This field cannot be specified with
any other patch configuration fields.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#exclusive_packages OsConfigPatchDeployment#exclusive_packages}
  */
  readonly exclusivePackages?: string[];
  /**
  * Will cause patch to run yum update-minimal instead.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#minimal OsConfigPatchDeployment#minimal}
  */
  readonly minimal?: boolean | cdktf.IResolvable;
  /**
  * Adds the --security flag to yum update. Not supported on all platforms.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#security OsConfigPatchDeployment#security}
  */
  readonly security?: boolean | cdktf.IResolvable;
}

function osConfigPatchDeploymentPatchConfigYumToTerraform(struct?: OsConfigPatchDeploymentPatchConfigYumOutputReference | OsConfigPatchDeploymentPatchConfigYum): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    excludes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludes),
    exclusive_packages: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclusivePackages),
    minimal: cdktf.booleanToTerraform(struct!.minimal),
    security: cdktf.booleanToTerraform(struct!.security),
  }
}

export class OsConfigPatchDeploymentPatchConfigYumOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[] | undefined; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[] | undefined) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes
  }

  // exclusive_packages - computed: false, optional: true, required: false
  private _exclusivePackages?: string[] | undefined; 
  public get exclusivePackages() {
    return this.getListAttribute('exclusive_packages');
  }
  public set exclusivePackages(value: string[] | undefined) {
    this._exclusivePackages = value;
  }
  public resetExclusivePackages() {
    this._exclusivePackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusivePackagesInput() {
    return this._exclusivePackages
  }

  // minimal - computed: false, optional: true, required: false
  private _minimal?: boolean | cdktf.IResolvable | undefined; 
  public get minimal() {
    return this.getBooleanAttribute('minimal') as any;
  }
  public set minimal(value: boolean | cdktf.IResolvable | undefined) {
    this._minimal = value;
  }
  public resetMinimal() {
    this._minimal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimalInput() {
    return this._minimal
  }

  // security - computed: false, optional: true, required: false
  private _security?: boolean | cdktf.IResolvable | undefined; 
  public get security() {
    return this.getBooleanAttribute('security') as any;
  }
  public set security(value: boolean | cdktf.IResolvable | undefined) {
    this._security = value;
  }
  public resetSecurity() {
    this._security = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security
  }
}
export interface OsConfigPatchDeploymentPatchConfigZypper {
  /**
  * Install only patches with these categories. Common categories include security, recommended, and feature.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#categories OsConfigPatchDeployment#categories}
  */
  readonly categories?: string[];
  /**
  * List of packages to exclude from update.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#excludes OsConfigPatchDeployment#excludes}
  */
  readonly excludes?: string[];
  /**
  * An exclusive list of patches to be updated. These are the only patches that will be installed using 'zypper patch patch:' command.
This field must not be used with any other patch configuration fields.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#exclusive_patches OsConfigPatchDeployment#exclusive_patches}
  */
  readonly exclusivePatches?: string[];
  /**
  * Install only patches with these severities. Common severities include critical, important, moderate, and low.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#severities OsConfigPatchDeployment#severities}
  */
  readonly severities?: string[];
  /**
  * Adds the --with-optional flag to zypper patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#with_optional OsConfigPatchDeployment#with_optional}
  */
  readonly withOptional?: boolean | cdktf.IResolvable;
  /**
  * Adds the --with-update flag, to zypper patch.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#with_update OsConfigPatchDeployment#with_update}
  */
  readonly withUpdate?: boolean | cdktf.IResolvable;
}

function osConfigPatchDeploymentPatchConfigZypperToTerraform(struct?: OsConfigPatchDeploymentPatchConfigZypperOutputReference | OsConfigPatchDeploymentPatchConfigZypper): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categories: cdktf.listMapper(cdktf.stringToTerraform)(struct!.categories),
    excludes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludes),
    exclusive_patches: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclusivePatches),
    severities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.severities),
    with_optional: cdktf.booleanToTerraform(struct!.withOptional),
    with_update: cdktf.booleanToTerraform(struct!.withUpdate),
  }
}

export class OsConfigPatchDeploymentPatchConfigZypperOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // categories - computed: false, optional: true, required: false
  private _categories?: string[] | undefined; 
  public get categories() {
    return this.getListAttribute('categories');
  }
  public set categories(value: string[] | undefined) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories
  }

  // excludes - computed: false, optional: true, required: false
  private _excludes?: string[] | undefined; 
  public get excludes() {
    return this.getListAttribute('excludes');
  }
  public set excludes(value: string[] | undefined) {
    this._excludes = value;
  }
  public resetExcludes() {
    this._excludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludesInput() {
    return this._excludes
  }

  // exclusive_patches - computed: false, optional: true, required: false
  private _exclusivePatches?: string[] | undefined; 
  public get exclusivePatches() {
    return this.getListAttribute('exclusive_patches');
  }
  public set exclusivePatches(value: string[] | undefined) {
    this._exclusivePatches = value;
  }
  public resetExclusivePatches() {
    this._exclusivePatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusivePatchesInput() {
    return this._exclusivePatches
  }

  // severities - computed: false, optional: true, required: false
  private _severities?: string[] | undefined; 
  public get severities() {
    return this.getListAttribute('severities');
  }
  public set severities(value: string[] | undefined) {
    this._severities = value;
  }
  public resetSeverities() {
    this._severities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severitiesInput() {
    return this._severities
  }

  // with_optional - computed: false, optional: true, required: false
  private _withOptional?: boolean | cdktf.IResolvable | undefined; 
  public get withOptional() {
    return this.getBooleanAttribute('with_optional') as any;
  }
  public set withOptional(value: boolean | cdktf.IResolvable | undefined) {
    this._withOptional = value;
  }
  public resetWithOptional() {
    this._withOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withOptionalInput() {
    return this._withOptional
  }

  // with_update - computed: false, optional: true, required: false
  private _withUpdate?: boolean | cdktf.IResolvable | undefined; 
  public get withUpdate() {
    return this.getBooleanAttribute('with_update') as any;
  }
  public set withUpdate(value: boolean | cdktf.IResolvable | undefined) {
    this._withUpdate = value;
  }
  public resetWithUpdate() {
    this._withUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withUpdateInput() {
    return this._withUpdate
  }
}
export interface OsConfigPatchDeploymentPatchConfig {
  /**
  * Post-patch reboot settings. Possible values: ["DEFAULT", "ALWAYS", "NEVER"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#reboot_config OsConfigPatchDeployment#reboot_config}
  */
  readonly rebootConfig?: string;
  /**
  * apt block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#apt OsConfigPatchDeployment#apt}
  */
  readonly apt?: OsConfigPatchDeploymentPatchConfigApt;
  /**
  * goo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#goo OsConfigPatchDeployment#goo}
  */
  readonly goo?: OsConfigPatchDeploymentPatchConfigGoo;
  /**
  * post_step block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#post_step OsConfigPatchDeployment#post_step}
  */
  readonly postStep?: OsConfigPatchDeploymentPatchConfigPostStep;
  /**
  * pre_step block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#pre_step OsConfigPatchDeployment#pre_step}
  */
  readonly preStep?: OsConfigPatchDeploymentPatchConfigPreStep;
  /**
  * windows_update block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#windows_update OsConfigPatchDeployment#windows_update}
  */
  readonly windowsUpdate?: OsConfigPatchDeploymentPatchConfigWindowsUpdate;
  /**
  * yum block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#yum OsConfigPatchDeployment#yum}
  */
  readonly yum?: OsConfigPatchDeploymentPatchConfigYum;
  /**
  * zypper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#zypper OsConfigPatchDeployment#zypper}
  */
  readonly zypper?: OsConfigPatchDeploymentPatchConfigZypper;
}

function osConfigPatchDeploymentPatchConfigToTerraform(struct?: OsConfigPatchDeploymentPatchConfigOutputReference | OsConfigPatchDeploymentPatchConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // reboot_config - computed: false, optional: true, required: false
  private _rebootConfig?: string | undefined; 
  public get rebootConfig() {
    return this.getStringAttribute('reboot_config');
  }
  public set rebootConfig(value: string | undefined) {
    this._rebootConfig = value;
  }
  public resetRebootConfig() {
    this._rebootConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebootConfigInput() {
    return this._rebootConfig
  }

  // apt - computed: false, optional: true, required: false
  private _apt?: OsConfigPatchDeploymentPatchConfigApt | undefined; 
  private __aptOutput = new OsConfigPatchDeploymentPatchConfigAptOutputReference(this as any, "apt", true);
  public get apt() {
    return this.__aptOutput;
  }
  public putApt(value: OsConfigPatchDeploymentPatchConfigApt | undefined) {
    this._apt = value;
  }
  public resetApt() {
    this._apt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aptInput() {
    return this._apt
  }

  // goo - computed: false, optional: true, required: false
  private _goo?: OsConfigPatchDeploymentPatchConfigGoo | undefined; 
  private __gooOutput = new OsConfigPatchDeploymentPatchConfigGooOutputReference(this as any, "goo", true);
  public get goo() {
    return this.__gooOutput;
  }
  public putGoo(value: OsConfigPatchDeploymentPatchConfigGoo | undefined) {
    this._goo = value;
  }
  public resetGoo() {
    this._goo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gooInput() {
    return this._goo
  }

  // post_step - computed: false, optional: true, required: false
  private _postStep?: OsConfigPatchDeploymentPatchConfigPostStep | undefined; 
  private __postStepOutput = new OsConfigPatchDeploymentPatchConfigPostStepOutputReference(this as any, "post_step", true);
  public get postStep() {
    return this.__postStepOutput;
  }
  public putPostStep(value: OsConfigPatchDeploymentPatchConfigPostStep | undefined) {
    this._postStep = value;
  }
  public resetPostStep() {
    this._postStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStepInput() {
    return this._postStep
  }

  // pre_step - computed: false, optional: true, required: false
  private _preStep?: OsConfigPatchDeploymentPatchConfigPreStep | undefined; 
  private __preStepOutput = new OsConfigPatchDeploymentPatchConfigPreStepOutputReference(this as any, "pre_step", true);
  public get preStep() {
    return this.__preStepOutput;
  }
  public putPreStep(value: OsConfigPatchDeploymentPatchConfigPreStep | undefined) {
    this._preStep = value;
  }
  public resetPreStep() {
    this._preStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStepInput() {
    return this._preStep
  }

  // windows_update - computed: false, optional: true, required: false
  private _windowsUpdate?: OsConfigPatchDeploymentPatchConfigWindowsUpdate | undefined; 
  private __windowsUpdateOutput = new OsConfigPatchDeploymentPatchConfigWindowsUpdateOutputReference(this as any, "windows_update", true);
  public get windowsUpdate() {
    return this.__windowsUpdateOutput;
  }
  public putWindowsUpdate(value: OsConfigPatchDeploymentPatchConfigWindowsUpdate | undefined) {
    this._windowsUpdate = value;
  }
  public resetWindowsUpdate() {
    this._windowsUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsUpdateInput() {
    return this._windowsUpdate
  }

  // yum - computed: false, optional: true, required: false
  private _yum?: OsConfigPatchDeploymentPatchConfigYum | undefined; 
  private __yumOutput = new OsConfigPatchDeploymentPatchConfigYumOutputReference(this as any, "yum", true);
  public get yum() {
    return this.__yumOutput;
  }
  public putYum(value: OsConfigPatchDeploymentPatchConfigYum | undefined) {
    this._yum = value;
  }
  public resetYum() {
    this._yum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yumInput() {
    return this._yum
  }

  // zypper - computed: false, optional: true, required: false
  private _zypper?: OsConfigPatchDeploymentPatchConfigZypper | undefined; 
  private __zypperOutput = new OsConfigPatchDeploymentPatchConfigZypperOutputReference(this as any, "zypper", true);
  public get zypper() {
    return this.__zypperOutput;
  }
  public putZypper(value: OsConfigPatchDeploymentPatchConfigZypper | undefined) {
    this._zypper = value;
  }
  public resetZypper() {
    this._zypper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zypperInput() {
    return this._zypper
  }
}
export interface OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth {
  /**
  * A day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#day_of_week OsConfigPatchDeployment#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Week number in a month. 1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#week_ordinal OsConfigPatchDeployment#week_ordinal}
  */
  readonly weekOrdinal: number;
}

function osConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthToTerraform(struct?: OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference | OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    week_ordinal: cdktf.numberToTerraform(struct!.weekOrdinal),
  }
}

export class OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._dayOfWeek
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
    return this._weekOrdinal
  }
}
export interface OsConfigPatchDeploymentRecurringScheduleMonthly {
  /**
  * One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month.
Months without the target day will be skipped. For example, a schedule to run "every month on the 31st"
will not run in February, April, June, etc.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#month_day OsConfigPatchDeployment#month_day}
  */
  readonly monthDay?: number;
  /**
  * week_day_of_month block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#week_day_of_month OsConfigPatchDeployment#week_day_of_month}
  */
  readonly weekDayOfMonth?: OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth;
}

function osConfigPatchDeploymentRecurringScheduleMonthlyToTerraform(struct?: OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference | OsConfigPatchDeploymentRecurringScheduleMonthly): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    month_day: cdktf.numberToTerraform(struct!.monthDay),
    week_day_of_month: osConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthToTerraform(struct!.weekDayOfMonth),
  }
}

export class OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // month_day - computed: false, optional: true, required: false
  private _monthDay?: number | undefined; 
  public get monthDay() {
    return this.getNumberAttribute('month_day');
  }
  public set monthDay(value: number | undefined) {
    this._monthDay = value;
  }
  public resetMonthDay() {
    this._monthDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthDayInput() {
    return this._monthDay
  }

  // week_day_of_month - computed: false, optional: true, required: false
  private _weekDayOfMonth?: OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth | undefined; 
  private __weekDayOfMonthOutput = new OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthOutputReference(this as any, "week_day_of_month", true);
  public get weekDayOfMonth() {
    return this.__weekDayOfMonthOutput;
  }
  public putWeekDayOfMonth(value: OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth | undefined) {
    this._weekDayOfMonth = value;
  }
  public resetWeekDayOfMonth() {
    this._weekDayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekDayOfMonthInput() {
    return this._weekDayOfMonth
  }
}
export interface OsConfigPatchDeploymentRecurringScheduleTimeOfDay {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#hours OsConfigPatchDeployment#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#minutes OsConfigPatchDeployment#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#nanos OsConfigPatchDeployment#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#seconds OsConfigPatchDeployment#seconds}
  */
  readonly seconds?: number;
}

function osConfigPatchDeploymentRecurringScheduleTimeOfDayToTerraform(struct?: OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference | OsConfigPatchDeploymentRecurringScheduleTimeOfDay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number | undefined; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number | undefined) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number | undefined; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number | undefined) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number | undefined; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number | undefined) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number | undefined; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number | undefined) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds
  }
}
export interface OsConfigPatchDeploymentRecurringScheduleTimeZone {
  /**
  * IANA Time Zone Database time zone, e.g. "America/New_York".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#id OsConfigPatchDeployment#id}
  */
  readonly id: string;
  /**
  * IANA Time Zone Database version number, e.g. "2019a".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#version OsConfigPatchDeployment#version}
  */
  readonly version?: string;
}

function osConfigPatchDeploymentRecurringScheduleTimeZoneToTerraform(struct?: OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference | OsConfigPatchDeploymentRecurringScheduleTimeZone): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._id
  }

  // version - computed: false, optional: true, required: false
  private _version?: string | undefined; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }
}
export interface OsConfigPatchDeploymentRecurringScheduleWeekly {
  /**
  * IANA Time Zone Database time zone, e.g. "America/New_York". Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#day_of_week OsConfigPatchDeployment#day_of_week}
  */
  readonly dayOfWeek: string;
}

function osConfigPatchDeploymentRecurringScheduleWeeklyToTerraform(struct?: OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference | OsConfigPatchDeploymentRecurringScheduleWeekly): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
  }
}

export class OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._dayOfWeek
  }
}
export interface OsConfigPatchDeploymentRecurringSchedule {
  /**
  * The end time at which a recurring patch deployment schedule is no longer active.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#end_time OsConfigPatchDeployment#end_time}
  */
  readonly endTime?: string;
  /**
  * The time that the recurring schedule becomes effective. Defaults to createTime of the patch deployment.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#start_time OsConfigPatchDeployment#start_time}
  */
  readonly startTime?: string;
  /**
  * monthly block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#monthly OsConfigPatchDeployment#monthly}
  */
  readonly monthly?: OsConfigPatchDeploymentRecurringScheduleMonthly;
  /**
  * time_of_day block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#time_of_day OsConfigPatchDeployment#time_of_day}
  */
  readonly timeOfDay: OsConfigPatchDeploymentRecurringScheduleTimeOfDay;
  /**
  * time_zone block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#time_zone OsConfigPatchDeployment#time_zone}
  */
  readonly timeZone: OsConfigPatchDeploymentRecurringScheduleTimeZone;
  /**
  * weekly block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#weekly OsConfigPatchDeployment#weekly}
  */
  readonly weekly?: OsConfigPatchDeploymentRecurringScheduleWeekly;
}

function osConfigPatchDeploymentRecurringScheduleToTerraform(struct?: OsConfigPatchDeploymentRecurringScheduleOutputReference | OsConfigPatchDeploymentRecurringSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string | undefined; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string | undefined) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string | undefined; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string | undefined) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime
  }

  // monthly - computed: false, optional: true, required: false
  private _monthly?: OsConfigPatchDeploymentRecurringScheduleMonthly | undefined; 
  private __monthlyOutput = new OsConfigPatchDeploymentRecurringScheduleMonthlyOutputReference(this as any, "monthly", true);
  public get monthly() {
    return this.__monthlyOutput;
  }
  public putMonthly(value: OsConfigPatchDeploymentRecurringScheduleMonthly | undefined) {
    this._monthly = value;
  }
  public resetMonthly() {
    this._monthly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly
  }

  // time_of_day - computed: false, optional: false, required: true
  private _timeOfDay?: OsConfigPatchDeploymentRecurringScheduleTimeOfDay; 
  private __timeOfDayOutput = new OsConfigPatchDeploymentRecurringScheduleTimeOfDayOutputReference(this as any, "time_of_day", true);
  public get timeOfDay() {
    return this.__timeOfDayOutput;
  }
  public putTimeOfDay(value: OsConfigPatchDeploymentRecurringScheduleTimeOfDay) {
    this._timeOfDay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOfDayInput() {
    return this._timeOfDay
  }

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: OsConfigPatchDeploymentRecurringScheduleTimeZone; 
  private __timeZoneOutput = new OsConfigPatchDeploymentRecurringScheduleTimeZoneOutputReference(this as any, "time_zone", true);
  public get timeZone() {
    return this.__timeZoneOutput;
  }
  public putTimeZone(value: OsConfigPatchDeploymentRecurringScheduleTimeZone) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone
  }

  // weekly - computed: false, optional: true, required: false
  private _weekly?: OsConfigPatchDeploymentRecurringScheduleWeekly | undefined; 
  private __weeklyOutput = new OsConfigPatchDeploymentRecurringScheduleWeeklyOutputReference(this as any, "weekly", true);
  public get weekly() {
    return this.__weeklyOutput;
  }
  public putWeekly(value: OsConfigPatchDeploymentRecurringScheduleWeekly | undefined) {
    this._weekly = value;
  }
  public resetWeekly() {
    this._weekly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyInput() {
    return this._weekly
  }
}
export interface OsConfigPatchDeploymentRolloutDisruptionBudget {
  /**
  * Specifies a fixed value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#fixed OsConfigPatchDeployment#fixed}
  */
  readonly fixed?: number;
  /**
  * Specifies the relative value defined as a percentage, which will be multiplied by a reference value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#percentage OsConfigPatchDeployment#percentage}
  */
  readonly percentage?: number;
}

function osConfigPatchDeploymentRolloutDisruptionBudgetToTerraform(struct?: OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference | OsConfigPatchDeploymentRolloutDisruptionBudget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed: cdktf.numberToTerraform(struct!.fixed),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}

export class OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // fixed - computed: false, optional: true, required: false
  private _fixed?: number | undefined; 
  public get fixed() {
    return this.getNumberAttribute('fixed');
  }
  public set fixed(value: number | undefined) {
    this._fixed = value;
  }
  public resetFixed() {
    this._fixed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedInput() {
    return this._fixed
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number | undefined; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number | undefined) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage
  }
}
export interface OsConfigPatchDeploymentRollout {
  /**
  * Mode of the patch rollout. Possible values: ["ZONE_BY_ZONE", "CONCURRENT_ZONES"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#mode OsConfigPatchDeployment#mode}
  */
  readonly mode: string;
  /**
  * disruption_budget block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#disruption_budget OsConfigPatchDeployment#disruption_budget}
  */
  readonly disruptionBudget: OsConfigPatchDeploymentRolloutDisruptionBudget;
}

function osConfigPatchDeploymentRolloutToTerraform(struct?: OsConfigPatchDeploymentRolloutOutputReference | OsConfigPatchDeploymentRollout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    disruption_budget: osConfigPatchDeploymentRolloutDisruptionBudgetToTerraform(struct!.disruptionBudget),
  }
}

export class OsConfigPatchDeploymentRolloutOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._mode
  }

  // disruption_budget - computed: false, optional: false, required: true
  private _disruptionBudget?: OsConfigPatchDeploymentRolloutDisruptionBudget; 
  private __disruptionBudgetOutput = new OsConfigPatchDeploymentRolloutDisruptionBudgetOutputReference(this as any, "disruption_budget", true);
  public get disruptionBudget() {
    return this.__disruptionBudgetOutput;
  }
  public putDisruptionBudget(value: OsConfigPatchDeploymentRolloutDisruptionBudget) {
    this._disruptionBudget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disruptionBudgetInput() {
    return this._disruptionBudget
  }
}
export interface OsConfigPatchDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#create OsConfigPatchDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html#delete OsConfigPatchDeployment#delete}
  */
  readonly delete?: string;
}

function osConfigPatchDeploymentTimeoutsToTerraform(struct?: OsConfigPatchDeploymentTimeoutsOutputReference | OsConfigPatchDeploymentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class OsConfigPatchDeploymentTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html google_os_config_patch_deployment}
*/
export class OsConfigPatchDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_os_config_patch_deployment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html google_os_config_patch_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsConfigPatchDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: OsConfigPatchDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_os_config_patch_deployment',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._duration = config.duration;
    this._patchDeploymentId = config.patchDeploymentId;
    this._project = config.project;
    this._instanceFilter = config.instanceFilter;
    this._oneTimeSchedule = config.oneTimeSchedule;
    this._patchConfig = config.patchConfig;
    this._recurringSchedule = config.recurringSchedule;
    this._rollout = config.rollout;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string | undefined; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string | undefined) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._patchDeploymentId
  }

  // project - computed: true, optional: true, required: false
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // instance_filter - computed: false, optional: false, required: true
  private _instanceFilter?: OsConfigPatchDeploymentInstanceFilter; 
  private __instanceFilterOutput = new OsConfigPatchDeploymentInstanceFilterOutputReference(this as any, "instance_filter", true);
  public get instanceFilter() {
    return this.__instanceFilterOutput;
  }
  public putInstanceFilter(value: OsConfigPatchDeploymentInstanceFilter) {
    this._instanceFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceFilterInput() {
    return this._instanceFilter
  }

  // one_time_schedule - computed: false, optional: true, required: false
  private _oneTimeSchedule?: OsConfigPatchDeploymentOneTimeSchedule | undefined; 
  private __oneTimeScheduleOutput = new OsConfigPatchDeploymentOneTimeScheduleOutputReference(this as any, "one_time_schedule", true);
  public get oneTimeSchedule() {
    return this.__oneTimeScheduleOutput;
  }
  public putOneTimeSchedule(value: OsConfigPatchDeploymentOneTimeSchedule | undefined) {
    this._oneTimeSchedule = value;
  }
  public resetOneTimeSchedule() {
    this._oneTimeSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneTimeScheduleInput() {
    return this._oneTimeSchedule
  }

  // patch_config - computed: false, optional: true, required: false
  private _patchConfig?: OsConfigPatchDeploymentPatchConfig | undefined; 
  private __patchConfigOutput = new OsConfigPatchDeploymentPatchConfigOutputReference(this as any, "patch_config", true);
  public get patchConfig() {
    return this.__patchConfigOutput;
  }
  public putPatchConfig(value: OsConfigPatchDeploymentPatchConfig | undefined) {
    this._patchConfig = value;
  }
  public resetPatchConfig() {
    this._patchConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchConfigInput() {
    return this._patchConfig
  }

  // recurring_schedule - computed: false, optional: true, required: false
  private _recurringSchedule?: OsConfigPatchDeploymentRecurringSchedule | undefined; 
  private __recurringScheduleOutput = new OsConfigPatchDeploymentRecurringScheduleOutputReference(this as any, "recurring_schedule", true);
  public get recurringSchedule() {
    return this.__recurringScheduleOutput;
  }
  public putRecurringSchedule(value: OsConfigPatchDeploymentRecurringSchedule | undefined) {
    this._recurringSchedule = value;
  }
  public resetRecurringSchedule() {
    this._recurringSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringScheduleInput() {
    return this._recurringSchedule
  }

  // rollout - computed: false, optional: true, required: false
  private _rollout?: OsConfigPatchDeploymentRollout | undefined; 
  private __rolloutOutput = new OsConfigPatchDeploymentRolloutOutputReference(this as any, "rollout", true);
  public get rollout() {
    return this.__rolloutOutput;
  }
  public putRollout(value: OsConfigPatchDeploymentRollout | undefined) {
    this._rollout = value;
  }
  public resetRollout() {
    this._rollout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutInput() {
    return this._rollout
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: OsConfigPatchDeploymentTimeouts | undefined; 
  private __timeoutsOutput = new OsConfigPatchDeploymentTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: OsConfigPatchDeploymentTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      duration: cdktf.stringToTerraform(this._duration),
      patch_deployment_id: cdktf.stringToTerraform(this._patchDeploymentId),
      project: cdktf.stringToTerraform(this._project),
      instance_filter: osConfigPatchDeploymentInstanceFilterToTerraform(this._instanceFilter),
      one_time_schedule: osConfigPatchDeploymentOneTimeScheduleToTerraform(this._oneTimeSchedule),
      patch_config: osConfigPatchDeploymentPatchConfigToTerraform(this._patchConfig),
      recurring_schedule: osConfigPatchDeploymentRecurringScheduleToTerraform(this._recurringSchedule),
      rollout: osConfigPatchDeploymentRolloutToTerraform(this._rollout),
      timeouts: osConfigPatchDeploymentTimeoutsToTerraform(this._timeouts),
    };
  }
}
