// https://www.terraform.io/docs/providers/google/r/notebooks_runtime
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotebooksRuntimeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#id NotebooksRuntime#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A reference to the zone where the machine resides.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#location NotebooksRuntime#location}
  */
  readonly location: string;
  /**
  * The name specified for the Notebook runtime.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#name NotebooksRuntime#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#project NotebooksRuntime#project}
  */
  readonly project?: string;
  /**
  * access_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#access_config NotebooksRuntime#access_config}
  */
  readonly accessConfig?: NotebooksRuntimeAccessConfig;
  /**
  * software_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#software_config NotebooksRuntime#software_config}
  */
  readonly softwareConfig?: NotebooksRuntimeSoftwareConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#timeouts NotebooksRuntime#timeouts}
  */
  readonly timeouts?: NotebooksRuntimeTimeouts;
  /**
  * virtual_machine block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#virtual_machine NotebooksRuntime#virtual_machine}
  */
  readonly virtualMachine?: NotebooksRuntimeVirtualMachine;
}
export interface NotebooksRuntimeMetrics {
}

export function notebooksRuntimeMetricsToTerraform(struct?: NotebooksRuntimeMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class NotebooksRuntimeMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotebooksRuntimeMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotebooksRuntimeMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // system_metrics - computed: true, optional: false, required: false
  private _systemMetrics = new cdktf.StringMap(this, "system_metrics");
  public get systemMetrics() {
    return this._systemMetrics;
  }
}

export class NotebooksRuntimeMetricsList extends cdktf.ComplexList {

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
  public get(index: number): NotebooksRuntimeMetricsOutputReference {
    return new NotebooksRuntimeMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotebooksRuntimeAccessConfig {
  /**
  * The type of access mode this instance. For valid values, see
'https://cloud.google.com/vertex-ai/docs/workbench/reference/
rest/v1/projects.locations.runtimes#RuntimeAccessType'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#access_type NotebooksRuntime#access_type}
  */
  readonly accessType?: string;
  /**
  * The owner of this runtime after creation. Format: 'alias@example.com'.
Currently supports one owner only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#runtime_owner NotebooksRuntime#runtime_owner}
  */
  readonly runtimeOwner?: string;
}

export function notebooksRuntimeAccessConfigToTerraform(struct?: NotebooksRuntimeAccessConfigOutputReference | NotebooksRuntimeAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_type: cdktf.stringToTerraform(struct!.accessType),
    runtime_owner: cdktf.stringToTerraform(struct!.runtimeOwner),
  }
}

export class NotebooksRuntimeAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotebooksRuntimeAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessType = this._accessType;
    }
    if (this._runtimeOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeOwner = this._runtimeOwner;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotebooksRuntimeAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessType = undefined;
      this._runtimeOwner = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessType = value.accessType;
      this._runtimeOwner = value.runtimeOwner;
    }
  }

  // access_type - computed: false, optional: true, required: false
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  public resetAccessType() {
    this._accessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // proxy_uri - computed: true, optional: false, required: false
  public get proxyUri() {
    return this.getStringAttribute('proxy_uri');
  }

  // runtime_owner - computed: false, optional: true, required: false
  private _runtimeOwner?: string; 
  public get runtimeOwner() {
    return this.getStringAttribute('runtime_owner');
  }
  public set runtimeOwner(value: string) {
    this._runtimeOwner = value;
  }
  public resetRuntimeOwner() {
    this._runtimeOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeOwnerInput() {
    return this._runtimeOwner;
  }
}
export interface NotebooksRuntimeSoftwareConfigKernels {
  /**
  * The path to the container image repository.
For example: gcr.io/{project_id}/{imageName}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#repository NotebooksRuntime#repository}
  */
  readonly repository: string;
  /**
  * The tag of the container image. If not specified, this defaults to the latest tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#tag NotebooksRuntime#tag}
  */
  readonly tag?: string;
}

export function notebooksRuntimeSoftwareConfigKernelsToTerraform(struct?: NotebooksRuntimeSoftwareConfigKernels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}

export class NotebooksRuntimeSoftwareConfigKernelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotebooksRuntimeSoftwareConfigKernels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotebooksRuntimeSoftwareConfigKernels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repository = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repository = value.repository;
      this._tag = value.tag;
    }
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class NotebooksRuntimeSoftwareConfigKernelsList extends cdktf.ComplexList {
  public internalValue? : NotebooksRuntimeSoftwareConfigKernels[] | cdktf.IResolvable

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
  public get(index: number): NotebooksRuntimeSoftwareConfigKernelsOutputReference {
    return new NotebooksRuntimeSoftwareConfigKernelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotebooksRuntimeSoftwareConfig {
  /**
  * Specify a custom Cloud Storage path where the GPU driver is stored.
If not specified, we'll automatically choose from official GPU drivers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#custom_gpu_driver_path NotebooksRuntime#custom_gpu_driver_path}
  */
  readonly customGpuDriverPath?: string;
  /**
  * Verifies core internal services are running. Default: True.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#enable_health_monitoring NotebooksRuntime#enable_health_monitoring}
  */
  readonly enableHealthMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Runtime will automatically shutdown after idle_shutdown_time.
Default: True
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#idle_shutdown NotebooksRuntime#idle_shutdown}
  */
  readonly idleShutdown?: boolean | cdktf.IResolvable;
  /**
  * Time in minutes to wait before shuting down runtime.
Default: 180 minutes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#idle_shutdown_timeout NotebooksRuntime#idle_shutdown_timeout}
  */
  readonly idleShutdownTimeout?: number;
  /**
  * Install Nvidia Driver automatically.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#install_gpu_driver NotebooksRuntime#install_gpu_driver}
  */
  readonly installGpuDriver?: boolean | cdktf.IResolvable;
  /**
  * Cron expression in UTC timezone for schedule instance auto upgrade.
Please follow the [cron format](https://en.wikipedia.org/wiki/Cron).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#notebook_upgrade_schedule NotebooksRuntime#notebook_upgrade_schedule}
  */
  readonly notebookUpgradeSchedule?: string;
  /**
  * Path to a Bash script that automatically runs after a notebook instance
fully boots up. The path must be a URL or
Cloud Storage path (gs://path-to-file/file-name).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#post_startup_script NotebooksRuntime#post_startup_script}
  */
  readonly postStartupScript?: string;
  /**
  * Behavior for the post startup script. Possible values: ["POST_STARTUP_SCRIPT_BEHAVIOR_UNSPECIFIED", "RUN_EVERY_START", "DOWNLOAD_AND_RUN_EVERY_START"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#post_startup_script_behavior NotebooksRuntime#post_startup_script_behavior}
  */
  readonly postStartupScriptBehavior?: string;
  /**
  * kernels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#kernels NotebooksRuntime#kernels}
  */
  readonly kernels?: NotebooksRuntimeSoftwareConfigKernels[] | cdktf.IResolvable;
}

export function notebooksRuntimeSoftwareConfigToTerraform(struct?: NotebooksRuntimeSoftwareConfigOutputReference | NotebooksRuntimeSoftwareConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_gpu_driver_path: cdktf.stringToTerraform(struct!.customGpuDriverPath),
    enable_health_monitoring: cdktf.booleanToTerraform(struct!.enableHealthMonitoring),
    idle_shutdown: cdktf.booleanToTerraform(struct!.idleShutdown),
    idle_shutdown_timeout: cdktf.numberToTerraform(struct!.idleShutdownTimeout),
    install_gpu_driver: cdktf.booleanToTerraform(struct!.installGpuDriver),
    notebook_upgrade_schedule: cdktf.stringToTerraform(struct!.notebookUpgradeSchedule),
    post_startup_script: cdktf.stringToTerraform(struct!.postStartupScript),
    post_startup_script_behavior: cdktf.stringToTerraform(struct!.postStartupScriptBehavior),
    kernels: cdktf.listMapper(notebooksRuntimeSoftwareConfigKernelsToTerraform, true)(struct!.kernels),
  }
}

export class NotebooksRuntimeSoftwareConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotebooksRuntimeSoftwareConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customGpuDriverPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.customGpuDriverPath = this._customGpuDriverPath;
    }
    if (this._enableHealthMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHealthMonitoring = this._enableHealthMonitoring;
    }
    if (this._idleShutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleShutdown = this._idleShutdown;
    }
    if (this._idleShutdownTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleShutdownTimeout = this._idleShutdownTimeout;
    }
    if (this._installGpuDriver !== undefined) {
      hasAnyValues = true;
      internalValueResult.installGpuDriver = this._installGpuDriver;
    }
    if (this._notebookUpgradeSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.notebookUpgradeSchedule = this._notebookUpgradeSchedule;
    }
    if (this._postStartupScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.postStartupScript = this._postStartupScript;
    }
    if (this._postStartupScriptBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.postStartupScriptBehavior = this._postStartupScriptBehavior;
    }
    if (this._kernels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernels = this._kernels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotebooksRuntimeSoftwareConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customGpuDriverPath = undefined;
      this._enableHealthMonitoring = undefined;
      this._idleShutdown = undefined;
      this._idleShutdownTimeout = undefined;
      this._installGpuDriver = undefined;
      this._notebookUpgradeSchedule = undefined;
      this._postStartupScript = undefined;
      this._postStartupScriptBehavior = undefined;
      this._kernels.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customGpuDriverPath = value.customGpuDriverPath;
      this._enableHealthMonitoring = value.enableHealthMonitoring;
      this._idleShutdown = value.idleShutdown;
      this._idleShutdownTimeout = value.idleShutdownTimeout;
      this._installGpuDriver = value.installGpuDriver;
      this._notebookUpgradeSchedule = value.notebookUpgradeSchedule;
      this._postStartupScript = value.postStartupScript;
      this._postStartupScriptBehavior = value.postStartupScriptBehavior;
      this._kernels.internalValue = value.kernels;
    }
  }

  // custom_gpu_driver_path - computed: false, optional: true, required: false
  private _customGpuDriverPath?: string; 
  public get customGpuDriverPath() {
    return this.getStringAttribute('custom_gpu_driver_path');
  }
  public set customGpuDriverPath(value: string) {
    this._customGpuDriverPath = value;
  }
  public resetCustomGpuDriverPath() {
    this._customGpuDriverPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customGpuDriverPathInput() {
    return this._customGpuDriverPath;
  }

  // enable_health_monitoring - computed: false, optional: true, required: false
  private _enableHealthMonitoring?: boolean | cdktf.IResolvable; 
  public get enableHealthMonitoring() {
    return this.getBooleanAttribute('enable_health_monitoring');
  }
  public set enableHealthMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableHealthMonitoring = value;
  }
  public resetEnableHealthMonitoring() {
    this._enableHealthMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHealthMonitoringInput() {
    return this._enableHealthMonitoring;
  }

  // idle_shutdown - computed: false, optional: true, required: false
  private _idleShutdown?: boolean | cdktf.IResolvable; 
  public get idleShutdown() {
    return this.getBooleanAttribute('idle_shutdown');
  }
  public set idleShutdown(value: boolean | cdktf.IResolvable) {
    this._idleShutdown = value;
  }
  public resetIdleShutdown() {
    this._idleShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleShutdownInput() {
    return this._idleShutdown;
  }

  // idle_shutdown_timeout - computed: false, optional: true, required: false
  private _idleShutdownTimeout?: number; 
  public get idleShutdownTimeout() {
    return this.getNumberAttribute('idle_shutdown_timeout');
  }
  public set idleShutdownTimeout(value: number) {
    this._idleShutdownTimeout = value;
  }
  public resetIdleShutdownTimeout() {
    this._idleShutdownTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleShutdownTimeoutInput() {
    return this._idleShutdownTimeout;
  }

  // install_gpu_driver - computed: false, optional: true, required: false
  private _installGpuDriver?: boolean | cdktf.IResolvable; 
  public get installGpuDriver() {
    return this.getBooleanAttribute('install_gpu_driver');
  }
  public set installGpuDriver(value: boolean | cdktf.IResolvable) {
    this._installGpuDriver = value;
  }
  public resetInstallGpuDriver() {
    this._installGpuDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installGpuDriverInput() {
    return this._installGpuDriver;
  }

  // notebook_upgrade_schedule - computed: false, optional: true, required: false
  private _notebookUpgradeSchedule?: string; 
  public get notebookUpgradeSchedule() {
    return this.getStringAttribute('notebook_upgrade_schedule');
  }
  public set notebookUpgradeSchedule(value: string) {
    this._notebookUpgradeSchedule = value;
  }
  public resetNotebookUpgradeSchedule() {
    this._notebookUpgradeSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notebookUpgradeScheduleInput() {
    return this._notebookUpgradeSchedule;
  }

  // post_startup_script - computed: false, optional: true, required: false
  private _postStartupScript?: string; 
  public get postStartupScript() {
    return this.getStringAttribute('post_startup_script');
  }
  public set postStartupScript(value: string) {
    this._postStartupScript = value;
  }
  public resetPostStartupScript() {
    this._postStartupScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartupScriptInput() {
    return this._postStartupScript;
  }

  // post_startup_script_behavior - computed: false, optional: true, required: false
  private _postStartupScriptBehavior?: string; 
  public get postStartupScriptBehavior() {
    return this.getStringAttribute('post_startup_script_behavior');
  }
  public set postStartupScriptBehavior(value: string) {
    this._postStartupScriptBehavior = value;
  }
  public resetPostStartupScriptBehavior() {
    this._postStartupScriptBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartupScriptBehaviorInput() {
    return this._postStartupScriptBehavior;
  }

  // upgradeable - computed: true, optional: false, required: false
  public get upgradeable() {
    return this.getBooleanAttribute('upgradeable');
  }

  // kernels - computed: false, optional: true, required: false
  private _kernels = new NotebooksRuntimeSoftwareConfigKernelsList(this, "kernels", false);
  public get kernels() {
    return this._kernels;
  }
  public putKernels(value: NotebooksRuntimeSoftwareConfigKernels[] | cdktf.IResolvable) {
    this._kernels.internalValue = value;
  }
  public resetKernels() {
    this._kernels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelsInput() {
    return this._kernels.internalValue;
  }
}
export interface NotebooksRuntimeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#create NotebooksRuntime#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#delete NotebooksRuntime#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#update NotebooksRuntime#update}
  */
  readonly update?: string;
}

export function notebooksRuntimeTimeoutsToTerraform(struct?: NotebooksRuntimeTimeoutsOutputReference | NotebooksRuntimeTimeouts | cdktf.IResolvable): any {
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

export class NotebooksRuntimeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotebooksRuntimeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NotebooksRuntimeTimeouts | cdktf.IResolvable | undefined) {
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
export interface NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig {
  /**
  * Count of cores of this accelerator.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#core_count NotebooksRuntime#core_count}
  */
  readonly coreCount?: number;
  /**
  * Accelerator model. For valid values, see
'https://cloud.google.com/vertex-ai/docs/workbench/reference/
rest/v1/projects.locations.runtimes#AcceleratorType'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#type NotebooksRuntime#type}
  */
  readonly type?: string;
}

export function notebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigToTerraform(struct?: NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference | NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_count: cdktf.numberToTerraform(struct!.coreCount),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreCount = this._coreCount;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coreCount = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coreCount = value.coreCount;
      this._type = value.type;
    }
  }

  // core_count - computed: false, optional: true, required: false
  private _coreCount?: number; 
  public get coreCount() {
    return this.getNumberAttribute('core_count');
  }
  public set coreCount(value: number) {
    this._coreCount = value;
  }
  public resetCoreCount() {
    this._coreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreCountInput() {
    return this._coreCount;
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
export interface NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages {
  /**
  * The path to the container image repository.
For example: gcr.io/{project_id}/{imageName}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#repository NotebooksRuntime#repository}
  */
  readonly repository: string;
  /**
  * The tag of the container image. If not specified, this defaults to the latest tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#tag NotebooksRuntime#tag}
  */
  readonly tag?: string;
}

export function notebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesToTerraform(struct?: NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}

export class NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repository = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repository = value.repository;
      this._tag = value.tag;
    }
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList extends cdktf.ComplexList {
  public internalValue? : NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages[] | cdktf.IResolvable

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
  public get(index: number): NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference {
    return new NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams {
  /**
  * Provide this property when creating the disk.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#description NotebooksRuntime#description}
  */
  readonly description?: string;
  /**
  * Specifies the disk name. If not specified, the default is
to use the name of the instance. If the disk with the
instance name exists already in the given zone/region, a
new name will be automatically generated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#disk_name NotebooksRuntime#disk_name}
  */
  readonly diskName?: string;
  /**
  * Specifies the size of the disk in base-2 GB. If not
specified, the disk will be the same size as the image
(usually 10GB). If specified, the size must be equal to
or larger than 10GB. Default 100 GB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#disk_size_gb NotebooksRuntime#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * The type of the boot disk attached to this runtime,
defaults to standard persistent disk. For valid values,
see 'https://cloud.google.com/vertex-ai/docs/workbench/
reference/rest/v1/projects.locations.runtimes#disktype'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#disk_type NotebooksRuntime#disk_type}
  */
  readonly diskType?: string;
  /**
  * Labels to apply to this disk. These can be later modified
by the disks.setLabels method. This field is only
applicable for persistent disks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#labels NotebooksRuntime#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function notebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsToTerraform(struct?: NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference | NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disk_name: cdktf.stringToTerraform(struct!.diskName),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}

export class NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._diskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskName = this._diskName;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._diskName = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._labels = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._diskName = value.diskName;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._labels = value.labels;
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

  // disk_name - computed: false, optional: true, required: false
  private _diskName?: string; 
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }
  public set diskName(value: string) {
    this._diskName = value;
  }
  public resetDiskName() {
    this._diskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNameInput() {
    return this._diskName;
  }

  // disk_size_gb - computed: false, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // labels - computed: true, optional: true, required: false
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
}
export interface NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk {
  /**
  * "Specifies the disk interface to use for attaching this disk,
which is either SCSI or NVME. The default is SCSI. Persistent
disks must always use SCSI and the request will fail if you attempt
to attach a persistent disk in any other format than SCSI. Local SSDs
can use either NVME or SCSI. For performance characteristics of SCSI
over NVMe, see Local SSD performance. Valid values: * NVME * SCSI".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#interface NotebooksRuntime#interface}
  */
  readonly interface?: string;
  /**
  * The mode in which to attach this disk, either READ_WRITE
or READ_ONLY. If not specified, the default is to attach
the disk in READ_WRITE mode.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#mode NotebooksRuntime#mode}
  */
  readonly mode?: string;
  /**
  * Specifies a valid partial or full URL to an existing
Persistent Disk resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#source NotebooksRuntime#source}
  */
  readonly source?: string;
  /**
  * Specifies the type of the disk, either SCRATCH or PERSISTENT.
If not specified, the default is PERSISTENT.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#type NotebooksRuntime#type}
  */
  readonly type?: string;
  /**
  * initialize_params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#initialize_params NotebooksRuntime#initialize_params}
  */
  readonly initializeParams?: NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams;
}

export function notebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskToTerraform(struct?: NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference | NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface: cdktf.stringToTerraform(struct!.interface),
    mode: cdktf.stringToTerraform(struct!.mode),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
    initialize_params: notebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsToTerraform(struct!.initializeParams),
  }
}

export class NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._initializeParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initializeParams = this._initializeParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interface = undefined;
      this._mode = undefined;
      this._source = undefined;
      this._type = undefined;
      this._initializeParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interface = value.interface;
      this._mode = value.mode;
      this._source = value.source;
      this._type = value.type;
      this._initializeParams.internalValue = value.initializeParams;
    }
  }

  // auto_delete - computed: true, optional: false, required: false
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }

  // boot - computed: true, optional: false, required: false
  public get boot() {
    return this.getBooleanAttribute('boot');
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }

  // guest_os_features - computed: true, optional: false, required: false
  public get guestOsFeatures() {
    return this.getListAttribute('guest_os_features');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // licenses - computed: true, optional: false, required: false
  public get licenses() {
    return this.getListAttribute('licenses');
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

  // initialize_params - computed: false, optional: true, required: false
  private _initializeParams = new NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParamsOutputReference(this, "initialize_params");
  public get initializeParams() {
    return this._initializeParams;
  }
  public putInitializeParams(value: NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskInitializeParams) {
    this._initializeParams.internalValue = value;
  }
  public resetInitializeParams() {
    this._initializeParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializeParamsInput() {
    return this._initializeParams.internalValue;
  }
}
export interface NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig {
  /**
  * The Cloud KMS resource identifier of the customer-managed
encryption key used to protect a resource, such as a disks.
It has the following format:
'projects/{PROJECT_ID}/locations/{REGION}/keyRings/
{KEY_RING_NAME}/cryptoKeys/{KEY_NAME}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#kms_key NotebooksRuntime#kms_key}
  */
  readonly kmsKey?: string;
}

export function notebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigToTerraform(struct?: NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference | NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}

export class NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKey = value.kmsKey;
    }
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }
}
export interface NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled.
Enables monitoring and attestation of the boot integrity of
the instance. The attestation is performed against the
integrity policy baseline. This baseline is initially derived
from the implicitly trusted boot image when the instance is
created. Enabled by default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#enable_integrity_monitoring NotebooksRuntime#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled.Secure
Boot helps ensure that the system only runs authentic software
by verifying the digital signature of all boot components, and
halting the boot process if signature verification fails.
Disabled by default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#enable_secure_boot NotebooksRuntime#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has the vTPM enabled. Enabled by
default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#enable_vtpm NotebooksRuntime#enable_vtpm}
  */
  readonly enableVtpm?: boolean | cdktf.IResolvable;
}

export function notebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigToTerraform(struct?: NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference | NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
    enable_vtpm: cdktf.booleanToTerraform(struct!.enableVtpm),
  }
}

export class NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    if (this._enableVtpm !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVtpm = this._enableVtpm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
      this._enableVtpm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
      this._enableVtpm = value.enableVtpm;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }
  public set enableIntegrityMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring;
  }

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktf.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktf.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }

  // enable_vtpm - computed: false, optional: true, required: false
  private _enableVtpm?: boolean | cdktf.IResolvable; 
  public get enableVtpm() {
    return this.getBooleanAttribute('enable_vtpm');
  }
  public set enableVtpm(value: boolean | cdktf.IResolvable) {
    this._enableVtpm = value;
  }
  public resetEnableVtpm() {
    this._enableVtpm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVtpmInput() {
    return this._enableVtpm;
  }
}
export interface NotebooksRuntimeVirtualMachineVirtualMachineConfig {
  /**
  * If true, runtime will only have internal IP addresses. By default,
runtimes are not restricted to internal IP addresses, and will
have ephemeral external IP addresses assigned to each vm. This
'internal_ip_only' restriction can only be enabled for subnetwork
enabled networks, and all dependencies must be configured to be
accessible without external IP addresses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#internal_ip_only NotebooksRuntime#internal_ip_only}
  */
  readonly internalIpOnly?: boolean | cdktf.IResolvable;
  /**
  * The labels to associate with this runtime. Label **keys** must
contain 1 to 63 characters, and must conform to [RFC 1035]
(https://www.ietf.org/rfc/rfc1035.txt). Label **values** may be
empty, but, if present, must contain 1 to 63 characters, and must
conform to [RFC 1035](https://www.ietf.org/rfc/rfc1035.txt). No
more than 32 labels can be associated with a cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#labels NotebooksRuntime#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The Compute Engine machine type used for runtimes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#machine_type NotebooksRuntime#machine_type}
  */
  readonly machineType: string;
  /**
  * The Compute Engine metadata entries to add to virtual machine.
(see [Project and instance metadata](https://cloud.google.com
/compute/docs/storing-retrieving-metadata#project_and_instance
_metadata)).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#metadata NotebooksRuntime#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * The Compute Engine network to be used for machine communications.
Cannot be specified with subnetwork. If neither 'network' nor
'subnet' is specified, the "default" network of the project is
used, if it exists. A full URL or partial URI. Examples:
  * 'https://www.googleapis.com/compute/v1/projects/[project_id]/
  regions/global/default'
  * 'projects/[project_id]/regions/global/default'
Runtimes are managed resources inside Google Infrastructure.
Runtimes support the following network configurations:
  * Google Managed Network (Network & subnet are empty)
  * Consumer Project VPC (network & subnet are required). Requires
  configuring Private Service Access.
  * Shared VPC (network & subnet are required). Requires
  configuring Private Service Access.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#network NotebooksRuntime#network}
  */
  readonly network?: string;
  /**
  * The type of vNIC to be used on this interface. This may be gVNIC
or VirtioNet. Possible values: ["UNSPECIFIED_NIC_TYPE", "VIRTIO_NET", "GVNIC"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#nic_type NotebooksRuntime#nic_type}
  */
  readonly nicType?: string;
  /**
  * Reserved IP Range name is used for VPC Peering. The
subnetwork allocation will use the range *name* if it's assigned.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#reserved_ip_range NotebooksRuntime#reserved_ip_range}
  */
  readonly reservedIpRange?: string;
  /**
  * The Compute Engine subnetwork to be used for machine
communications. Cannot be specified with network. A full URL or
partial URI are valid. Examples:
  * 'https://www.googleapis.com/compute/v1/projects/[project_id]/
  regions/us-east1/subnetworks/sub0'
  * 'projects/[project_id]/regions/us-east1/subnetworks/sub0'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#subnet NotebooksRuntime#subnet}
  */
  readonly subnet?: string;
  /**
  * The Compute Engine tags to add to runtime (see [Tagging instances]
(https://cloud.google.com/compute/docs/
label-or-tag-resources#tags)).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#tags NotebooksRuntime#tags}
  */
  readonly tags?: string[];
  /**
  * accelerator_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#accelerator_config NotebooksRuntime#accelerator_config}
  */
  readonly acceleratorConfig?: NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig;
  /**
  * container_images block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#container_images NotebooksRuntime#container_images}
  */
  readonly containerImages?: NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages[] | cdktf.IResolvable;
  /**
  * data_disk block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#data_disk NotebooksRuntime#data_disk}
  */
  readonly dataDisk: NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk;
  /**
  * encryption_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#encryption_config NotebooksRuntime#encryption_config}
  */
  readonly encryptionConfig?: NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig;
  /**
  * shielded_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#shielded_instance_config NotebooksRuntime#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig;
}

export function notebooksRuntimeVirtualMachineVirtualMachineConfigToTerraform(struct?: NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference | NotebooksRuntimeVirtualMachineVirtualMachineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_ip_only: cdktf.booleanToTerraform(struct!.internalIpOnly),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    network: cdktf.stringToTerraform(struct!.network),
    nic_type: cdktf.stringToTerraform(struct!.nicType),
    reserved_ip_range: cdktf.stringToTerraform(struct!.reservedIpRange),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    accelerator_config: notebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigToTerraform(struct!.acceleratorConfig),
    container_images: cdktf.listMapper(notebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesToTerraform, true)(struct!.containerImages),
    data_disk: notebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskToTerraform(struct!.dataDisk),
    encryption_config: notebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigToTerraform(struct!.encryptionConfig),
    shielded_instance_config: notebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
  }
}

export class NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotebooksRuntimeVirtualMachineVirtualMachineConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalIpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIpOnly = this._internalIpOnly;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._nicType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicType = this._nicType;
    }
    if (this._reservedIpRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedIpRange = this._reservedIpRange;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._acceleratorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorConfig = this._acceleratorConfig?.internalValue;
    }
    if (this._containerImages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerImages = this._containerImages?.internalValue;
    }
    if (this._dataDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDisk = this._dataDisk?.internalValue;
    }
    if (this._encryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotebooksRuntimeVirtualMachineVirtualMachineConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._internalIpOnly = undefined;
      this._labels = undefined;
      this._machineType = undefined;
      this._metadata = undefined;
      this._network = undefined;
      this._nicType = undefined;
      this._reservedIpRange = undefined;
      this._subnet = undefined;
      this._tags = undefined;
      this._acceleratorConfig.internalValue = undefined;
      this._containerImages.internalValue = undefined;
      this._dataDisk.internalValue = undefined;
      this._encryptionConfig.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._internalIpOnly = value.internalIpOnly;
      this._labels = value.labels;
      this._machineType = value.machineType;
      this._metadata = value.metadata;
      this._network = value.network;
      this._nicType = value.nicType;
      this._reservedIpRange = value.reservedIpRange;
      this._subnet = value.subnet;
      this._tags = value.tags;
      this._acceleratorConfig.internalValue = value.acceleratorConfig;
      this._containerImages.internalValue = value.containerImages;
      this._dataDisk.internalValue = value.dataDisk;
      this._encryptionConfig.internalValue = value.encryptionConfig;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
    }
  }

  // guest_attributes - computed: true, optional: false, required: false
  private _guestAttributes = new cdktf.StringMap(this, "guest_attributes");
  public get guestAttributes() {
    return this._guestAttributes;
  }

  // internal_ip_only - computed: false, optional: true, required: false
  private _internalIpOnly?: boolean | cdktf.IResolvable; 
  public get internalIpOnly() {
    return this.getBooleanAttribute('internal_ip_only');
  }
  public set internalIpOnly(value: boolean | cdktf.IResolvable) {
    this._internalIpOnly = value;
  }
  public resetInternalIpOnly() {
    this._internalIpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpOnlyInput() {
    return this._internalIpOnly;
  }

  // labels - computed: true, optional: true, required: false
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

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // nic_type - computed: false, optional: true, required: false
  private _nicType?: string; 
  public get nicType() {
    return this.getStringAttribute('nic_type');
  }
  public set nicType(value: string) {
    this._nicType = value;
  }
  public resetNicType() {
    this._nicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicTypeInput() {
    return this._nicType;
  }

  // reserved_ip_range - computed: false, optional: true, required: false
  private _reservedIpRange?: string; 
  public get reservedIpRange() {
    return this.getStringAttribute('reserved_ip_range');
  }
  public set reservedIpRange(value: string) {
    this._reservedIpRange = value;
  }
  public resetReservedIpRange() {
    this._reservedIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIpRangeInput() {
    return this._reservedIpRange;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }

  // accelerator_config - computed: false, optional: true, required: false
  private _acceleratorConfig = new NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfigOutputReference(this, "accelerator_config");
  public get acceleratorConfig() {
    return this._acceleratorConfig;
  }
  public putAcceleratorConfig(value: NotebooksRuntimeVirtualMachineVirtualMachineConfigAcceleratorConfig) {
    this._acceleratorConfig.internalValue = value;
  }
  public resetAcceleratorConfig() {
    this._acceleratorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorConfigInput() {
    return this._acceleratorConfig.internalValue;
  }

  // container_images - computed: false, optional: true, required: false
  private _containerImages = new NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImagesList(this, "container_images", false);
  public get containerImages() {
    return this._containerImages;
  }
  public putContainerImages(value: NotebooksRuntimeVirtualMachineVirtualMachineConfigContainerImages[] | cdktf.IResolvable) {
    this._containerImages.internalValue = value;
  }
  public resetContainerImages() {
    this._containerImages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImagesInput() {
    return this._containerImages.internalValue;
  }

  // data_disk - computed: false, optional: false, required: true
  private _dataDisk = new NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDiskOutputReference(this, "data_disk");
  public get dataDisk() {
    return this._dataDisk;
  }
  public putDataDisk(value: NotebooksRuntimeVirtualMachineVirtualMachineConfigDataDisk) {
    this._dataDisk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskInput() {
    return this._dataDisk.internalValue;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: NotebooksRuntimeVirtualMachineVirtualMachineConfigEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: NotebooksRuntimeVirtualMachineVirtualMachineConfigShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }
}
export interface NotebooksRuntimeVirtualMachine {
  /**
  * virtual_machine_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime#virtual_machine_config NotebooksRuntime#virtual_machine_config}
  */
  readonly virtualMachineConfig?: NotebooksRuntimeVirtualMachineVirtualMachineConfig;
}

export function notebooksRuntimeVirtualMachineToTerraform(struct?: NotebooksRuntimeVirtualMachineOutputReference | NotebooksRuntimeVirtualMachine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_machine_config: notebooksRuntimeVirtualMachineVirtualMachineConfigToTerraform(struct!.virtualMachineConfig),
  }
}

export class NotebooksRuntimeVirtualMachineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NotebooksRuntimeVirtualMachine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualMachineConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualMachineConfig = this._virtualMachineConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotebooksRuntimeVirtualMachine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._virtualMachineConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._virtualMachineConfig.internalValue = value.virtualMachineConfig;
    }
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // instance_name - computed: true, optional: false, required: false
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }

  // virtual_machine_config - computed: false, optional: true, required: false
  private _virtualMachineConfig = new NotebooksRuntimeVirtualMachineVirtualMachineConfigOutputReference(this, "virtual_machine_config");
  public get virtualMachineConfig() {
    return this._virtualMachineConfig;
  }
  public putVirtualMachineConfig(value: NotebooksRuntimeVirtualMachineVirtualMachineConfig) {
    this._virtualMachineConfig.internalValue = value;
  }
  public resetVirtualMachineConfig() {
    this._virtualMachineConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineConfigInput() {
    return this._virtualMachineConfig.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime google_notebooks_runtime}
*/
export class NotebooksRuntime extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_notebooks_runtime";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/notebooks_runtime google_notebooks_runtime} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotebooksRuntimeConfig
  */
  public constructor(scope: Construct, id: string, config: NotebooksRuntimeConfig) {
    super(scope, id, {
      terraformResourceType: 'google_notebooks_runtime',
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
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._accessConfig.internalValue = config.accessConfig;
    this._softwareConfig.internalValue = config.softwareConfig;
    this._timeouts.internalValue = config.timeouts;
    this._virtualMachine.internalValue = config.virtualMachine;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // health_state - computed: true, optional: false, required: false
  public get healthState() {
    return this.getStringAttribute('health_state');
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

  // metrics - computed: true, optional: false, required: false
  private _metrics = new NotebooksRuntimeMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // access_config - computed: false, optional: true, required: false
  private _accessConfig = new NotebooksRuntimeAccessConfigOutputReference(this, "access_config");
  public get accessConfig() {
    return this._accessConfig;
  }
  public putAccessConfig(value: NotebooksRuntimeAccessConfig) {
    this._accessConfig.internalValue = value;
  }
  public resetAccessConfig() {
    this._accessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessConfigInput() {
    return this._accessConfig.internalValue;
  }

  // software_config - computed: false, optional: true, required: false
  private _softwareConfig = new NotebooksRuntimeSoftwareConfigOutputReference(this, "software_config");
  public get softwareConfig() {
    return this._softwareConfig;
  }
  public putSoftwareConfig(value: NotebooksRuntimeSoftwareConfig) {
    this._softwareConfig.internalValue = value;
  }
  public resetSoftwareConfig() {
    this._softwareConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareConfigInput() {
    return this._softwareConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NotebooksRuntimeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NotebooksRuntimeTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // virtual_machine - computed: false, optional: true, required: false
  private _virtualMachine = new NotebooksRuntimeVirtualMachineOutputReference(this, "virtual_machine");
  public get virtualMachine() {
    return this._virtualMachine;
  }
  public putVirtualMachine(value: NotebooksRuntimeVirtualMachine) {
    this._virtualMachine.internalValue = value;
  }
  public resetVirtualMachine() {
    this._virtualMachine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMachineInput() {
    return this._virtualMachine.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      access_config: notebooksRuntimeAccessConfigToTerraform(this._accessConfig.internalValue),
      software_config: notebooksRuntimeSoftwareConfigToTerraform(this._softwareConfig.internalValue),
      timeouts: notebooksRuntimeTimeoutsToTerraform(this._timeouts.internalValue),
      virtual_machine: notebooksRuntimeVirtualMachineToTerraform(this._virtualMachine.internalValue),
    };
  }
}
