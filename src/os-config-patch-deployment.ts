// https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface OsConfigPatchDeploymentConfig extends TerraformMetaArguments {
  /** Description of the patch deployment. Length of the description is limited to 1024 characters. */
  readonly description?: string;
  /** Duration of the patch. After the duration ends, the patch times out.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s" */
  readonly duration?: string;
  /** A name for the patch deployment in the project. When creating a name the following rules apply:
* Must contain only lowercase letters, numbers, and hyphens.
* Must start with a letter.
* Must be between 1-63 characters.
* Must end with a number or a letter.
* Must be unique within the project. */
  readonly patchDeploymentId: string;
  readonly project?: string;
  /** instance_filter block */
  readonly instanceFilter: OsConfigPatchDeploymentInstanceFilter[];
  /** one_time_schedule block */
  readonly oneTimeSchedule?: OsConfigPatchDeploymentOneTimeSchedule[];
  /** patch_config block */
  readonly patchConfig?: OsConfigPatchDeploymentPatchConfig[];
  /** recurring_schedule block */
  readonly recurringSchedule?: OsConfigPatchDeploymentRecurringSchedule[];
  /** timeouts block */
  readonly timeouts?: OsConfigPatchDeploymentTimeouts;
}
export interface OsConfigPatchDeploymentInstanceFilterGroupLabels {
  /** Compute Engine instance labels that must be present for a VM instance to be targeted by this filter */
  readonly labels: { [key: string]: string };
}
export interface OsConfigPatchDeploymentInstanceFilter {
  /** Target all VM instances in the project. If true, no other criteria is permitted. */
  readonly all?: boolean;
  /** Targets VMs whose name starts with one of these prefixes. Similar to labels, this is another way to group
VMs when targeting configs, for example prefix="prod-". */
  readonly instanceNamePrefixes?: string[];
  /** Targets any of the VM instances specified. Instances are specified by their URI in the 'form zones/{{zone}}/instances/{{instance_name}}',
'projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}', or
'https://www.googleapis.com/compute/v1/projects/{{project_id}}/zones/{{zone}}/instances/{{instance_name}}' */
  readonly instances?: string[];
  /** Targets VM instances in ANY of these zones. Leave empty to target VM instances in any zone. */
  readonly zones?: string[];
  /** group_labels block */
  readonly groupLabels?: OsConfigPatchDeploymentInstanceFilterGroupLabels[];
}
export interface OsConfigPatchDeploymentOneTimeSchedule {
  /** The desired patch job execution time. A timestamp in RFC3339 UTC "Zulu" format,
accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". */
  readonly executeTime: string;
}
export interface OsConfigPatchDeploymentPatchConfigApt {
  /** List of packages to exclude from update. These packages will be excluded. */
  readonly excludes?: string[];
  /** An exclusive list of packages to be updated. These are the only packages that will be updated.
If these packages are not installed, they will be ignored. This field cannot be specified with
any other patch configuration fields. */
  readonly exclusivePackages?: string[];
  /** By changing the type to DIST, the patching is performed using apt-get dist-upgrade instead. Possible values: ["DIST", "UPGRADE"] */
  readonly type?: string;
}
export interface OsConfigPatchDeploymentPatchConfigGoo {
  /** goo update settings. Use this setting to override the default goo patch rules. */
  readonly enabled: boolean;
}
export interface OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject {
  /** Bucket of the Cloud Storage object. */
  readonly bucket: string;
  /** Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change. */
  readonly generationNumber: string;
  /** Name of the Cloud Storage object. */
  readonly object: string;
}
export interface OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig {
  /** Defaults to [0]. A list of possible return values that the execution can return to indicate a success. */
  readonly allowedSuccessCodes?: number[];
  /** The script interpreter to use to run the script. If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"] */
  readonly interpreter?: string;
  /** An absolute path to the executable on the VM. */
  readonly localPath?: string;
  /** gcs_object block */
  readonly gcsObject?: OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject[];
}
export interface OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject {
  /** Bucket of the Cloud Storage object. */
  readonly bucket: string;
  /** Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change. */
  readonly generationNumber: string;
  /** Name of the Cloud Storage object. */
  readonly object: string;
}
export interface OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig {
  /** Defaults to [0]. A list of possible return values that the execution can return to indicate a success. */
  readonly allowedSuccessCodes?: number[];
  /** The script interpreter to use to run the script. If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"] */
  readonly interpreter?: string;
  /** An absolute path to the executable on the VM. */
  readonly localPath?: string;
  /** gcs_object block */
  readonly gcsObject?: OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject[];
}
export interface OsConfigPatchDeploymentPatchConfigPostStep {
  /** linux_exec_step_config block */
  readonly linuxExecStepConfig?: OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig[];
  /** windows_exec_step_config block */
  readonly windowsExecStepConfig?: OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig[];
}
export interface OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject {
  /** Bucket of the Cloud Storage object. */
  readonly bucket: string;
  /** Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change. */
  readonly generationNumber: string;
  /** Name of the Cloud Storage object. */
  readonly object: string;
}
export interface OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig {
  /** Defaults to [0]. A list of possible return values that the execution can return to indicate a success. */
  readonly allowedSuccessCodes?: number[];
  /** The script interpreter to use to run the script. If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"] */
  readonly interpreter?: string;
  /** An absolute path to the executable on the VM. */
  readonly localPath?: string;
  /** gcs_object block */
  readonly gcsObject?: OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject[];
}
export interface OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject {
  /** Bucket of the Cloud Storage object. */
  readonly bucket: string;
  /** Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change. */
  readonly generationNumber: string;
  /** Name of the Cloud Storage object. */
  readonly object: string;
}
export interface OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig {
  /** Defaults to [0]. A list of possible return values that the execution can return to indicate a success. */
  readonly allowedSuccessCodes?: number[];
  /** The script interpreter to use to run the script. If no interpreter is specified the script will
be executed directly, which will likely only succeed for scripts with shebang lines. Possible values: ["SHELL", "POWERSHELL"] */
  readonly interpreter?: string;
  /** An absolute path to the executable on the VM. */
  readonly localPath?: string;
  /** gcs_object block */
  readonly gcsObject?: OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject[];
}
export interface OsConfigPatchDeploymentPatchConfigPreStep {
  /** linux_exec_step_config block */
  readonly linuxExecStepConfig?: OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig[];
  /** windows_exec_step_config block */
  readonly windowsExecStepConfig?: OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig[];
}
export interface OsConfigPatchDeploymentPatchConfigWindowsUpdate {
  /** Only apply updates of these windows update classifications. If empty, all updates are applied. Possible values: ["CRITICAL", "SECURITY", "DEFINITION", "DRIVER", "FEATURE_PACK", "SERVICE_PACK", "TOOL", "UPDATE_ROLLUP", "UPDATE"] */
  readonly classifications?: string[];
  /** List of KBs to exclude from update. */
  readonly excludes?: string[];
  /** An exclusive list of kbs to be updated. These are the only patches that will be updated.
This field must not be used with other patch configurations. */
  readonly exclusivePatches?: string[];
}
export interface OsConfigPatchDeploymentPatchConfigYum {
  /** List of packages to exclude from update. These packages will be excluded. */
  readonly excludes?: string[];
  /** An exclusive list of packages to be updated. These are the only packages that will be updated.
If these packages are not installed, they will be ignored. This field cannot be specified with
any other patch configuration fields. */
  readonly exclusivePackages?: string[];
  /** Will cause patch to run yum update-minimal instead. */
  readonly minimal?: boolean;
  /** Adds the --security flag to yum update. Not supported on all platforms. */
  readonly security?: boolean;
}
export interface OsConfigPatchDeploymentPatchConfigZypper {
  /** Install only patches with these categories. Common categories include security, recommended, and feature. */
  readonly categories?: string[];
  /** List of packages to exclude from update. */
  readonly excludes?: string[];
  /** An exclusive list of patches to be updated. These are the only patches that will be installed using 'zypper patch patch:' command.
This field must not be used with any other patch configuration fields. */
  readonly exclusivePatches?: string[];
  /** Install only patches with these severities. Common severities include critical, important, moderate, and low. */
  readonly severities?: string[];
  /** Adds the --with-optional flag to zypper patch. */
  readonly withOptional?: boolean;
  /** Adds the --with-update flag, to zypper patch. */
  readonly withUpdate?: boolean;
}
export interface OsConfigPatchDeploymentPatchConfig {
  /** Post-patch reboot settings. Possible values: ["DEFAULT", "ALWAYS", "NEVER"] */
  readonly rebootConfig?: string;
  /** apt block */
  readonly apt?: OsConfigPatchDeploymentPatchConfigApt[];
  /** goo block */
  readonly goo?: OsConfigPatchDeploymentPatchConfigGoo[];
  /** post_step block */
  readonly postStep?: OsConfigPatchDeploymentPatchConfigPostStep[];
  /** pre_step block */
  readonly preStep?: OsConfigPatchDeploymentPatchConfigPreStep[];
  /** windows_update block */
  readonly windowsUpdate?: OsConfigPatchDeploymentPatchConfigWindowsUpdate[];
  /** yum block */
  readonly yum?: OsConfigPatchDeploymentPatchConfigYum[];
  /** zypper block */
  readonly zypper?: OsConfigPatchDeploymentPatchConfigZypper[];
}
export interface OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth {
  /** A day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"] */
  readonly dayOfWeek: string;
  /** Week number in a month. 1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month. */
  readonly weekOrdinal: number;
}
export interface OsConfigPatchDeploymentRecurringScheduleMonthly {
  /** One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month.
Months without the target day will be skipped. For example, a schedule to run "every month on the 31st"
will not run in February, April, June, etc. */
  readonly monthDay?: number;
  /** week_day_of_month block */
  readonly weekDayOfMonth?: OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth[];
}
export interface OsConfigPatchDeploymentRecurringScheduleTimeOfDay {
  /** Hours of day in 24 hour format. Should be from 0 to 23.
An API may choose to allow the value "24:00:00" for scenarios like business closing time. */
  readonly hours?: number;
  /** Minutes of hour of day. Must be from 0 to 59. */
  readonly minutes?: number;
  /** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
  readonly nanos?: number;
  /** Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds. */
  readonly seconds?: number;
}
export interface OsConfigPatchDeploymentRecurringScheduleTimeZone {
  /** IANA Time Zone Database time zone, e.g. "America/New_York". */
  readonly id: string;
  /** IANA Time Zone Database version number, e.g. "2019a". */
  readonly version?: string;
}
export interface OsConfigPatchDeploymentRecurringScheduleWeekly {
  /** IANA Time Zone Database time zone, e.g. "America/New_York". Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"] */
  readonly dayOfWeek: string;
}
export interface OsConfigPatchDeploymentRecurringSchedule {
  /** The end time at which a recurring patch deployment schedule is no longer active.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". */
  readonly endTime?: string;
  /** The time that the recurring schedule becomes effective. Defaults to createTime of the patch deployment.
A timestamp in RFC3339 UTC "Zulu" format, accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". */
  readonly startTime?: string;
  /** monthly block */
  readonly monthly?: OsConfigPatchDeploymentRecurringScheduleMonthly[];
  /** time_of_day block */
  readonly timeOfDay: OsConfigPatchDeploymentRecurringScheduleTimeOfDay[];
  /** time_zone block */
  readonly timeZone: OsConfigPatchDeploymentRecurringScheduleTimeZone[];
  /** weekly block */
  readonly weekly?: OsConfigPatchDeploymentRecurringScheduleWeekly[];
}
export interface OsConfigPatchDeploymentTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class OsConfigPatchDeployment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string;
  public get duration() {
    return this._duration;
  }
  public set duration(value: string | undefined) {
    this._duration = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_execute_time - computed: true, optional: false, required: true
  public get lastExecuteTime() {
    return this.getStringAttribute('last_execute_time');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // patch_deployment_id - computed: false, optional: false, required: true
  private _patchDeploymentId: string;
  public get patchDeploymentId() {
    return this._patchDeploymentId;
  }
  public set patchDeploymentId(value: string) {
    this._patchDeploymentId = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // update_time - computed: true, optional: false, required: true
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // instance_filter - computed: false, optional: false, required: true
  private _instanceFilter: OsConfigPatchDeploymentInstanceFilter[];
  public get instanceFilter() {
    return this._instanceFilter;
  }
  public set instanceFilter(value: OsConfigPatchDeploymentInstanceFilter[]) {
    this._instanceFilter = value;
  }

  // one_time_schedule - computed: false, optional: true, required: false
  private _oneTimeSchedule?: OsConfigPatchDeploymentOneTimeSchedule[];
  public get oneTimeSchedule() {
    return this._oneTimeSchedule;
  }
  public set oneTimeSchedule(value: OsConfigPatchDeploymentOneTimeSchedule[] | undefined) {
    this._oneTimeSchedule = value;
  }

  // patch_config - computed: false, optional: true, required: false
  private _patchConfig?: OsConfigPatchDeploymentPatchConfig[];
  public get patchConfig() {
    return this._patchConfig;
  }
  public set patchConfig(value: OsConfigPatchDeploymentPatchConfig[] | undefined) {
    this._patchConfig = value;
  }

  // recurring_schedule - computed: false, optional: true, required: false
  private _recurringSchedule?: OsConfigPatchDeploymentRecurringSchedule[];
  public get recurringSchedule() {
    return this._recurringSchedule;
  }
  public set recurringSchedule(value: OsConfigPatchDeploymentRecurringSchedule[] | undefined) {
    this._recurringSchedule = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: OsConfigPatchDeploymentTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: OsConfigPatchDeploymentTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      duration: this._duration,
      patch_deployment_id: this._patchDeploymentId,
      project: this._project,
      instance_filter: this._instanceFilter,
      one_time_schedule: this._oneTimeSchedule,
      patch_config: this._patchConfig,
      recurring_schedule: this._recurringSchedule,
      timeouts: this._timeouts,
    };
  }
}
