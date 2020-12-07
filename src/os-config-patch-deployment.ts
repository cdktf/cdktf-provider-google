// https://www.terraform.io/docs/providers/google/r/os_config_patch_deployment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsConfigPatchDeploymentConfig extends cdktf.TerraformMetaArguments {
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
  /** rollout block */
  readonly rollout?: OsConfigPatchDeploymentRollout[];
  /** timeouts block */
  readonly timeouts?: OsConfigPatchDeploymentTimeouts;
}
export interface OsConfigPatchDeploymentInstanceFilterGroupLabels {
  /** Compute Engine instance labels that must be present for a VM instance to be targeted by this filter */
  readonly labels: { [key: string]: string };
}

function osConfigPatchDeploymentInstanceFilterGroupLabelsToTerraform(struct?: OsConfigPatchDeploymentInstanceFilterGroupLabels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
  }
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

function osConfigPatchDeploymentInstanceFilterToTerraform(struct?: OsConfigPatchDeploymentInstanceFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    instance_name_prefixes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.instanceNamePrefixes),
    instances: cdktf.listMapper(cdktf.stringToTerraform)(struct!.instances),
    zones: cdktf.listMapper(cdktf.stringToTerraform)(struct!.zones),
    group_labels: cdktf.listMapper(osConfigPatchDeploymentInstanceFilterGroupLabelsToTerraform)(struct!.groupLabels),
  }
}

export interface OsConfigPatchDeploymentOneTimeSchedule {
  /** The desired patch job execution time. A timestamp in RFC3339 UTC "Zulu" format,
accurate to nanoseconds. Example: "2014-10-02T15:01:23.045123456Z". */
  readonly executeTime: string;
}

function osConfigPatchDeploymentOneTimeScheduleToTerraform(struct?: OsConfigPatchDeploymentOneTimeSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    execute_time: cdktf.stringToTerraform(struct!.executeTime),
  }
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

function osConfigPatchDeploymentPatchConfigAptToTerraform(struct?: OsConfigPatchDeploymentPatchConfigApt): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    excludes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludes),
    exclusive_packages: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclusivePackages),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface OsConfigPatchDeploymentPatchConfigGoo {
  /** goo update settings. Use this setting to override the default goo patch rules. */
  readonly enabled: boolean;
}

function osConfigPatchDeploymentPatchConfigGooToTerraform(struct?: OsConfigPatchDeploymentPatchConfigGoo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject {
  /** Bucket of the Cloud Storage object. */
  readonly bucket: string;
  /** Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change. */
  readonly generationNumber: string;
  /** Name of the Cloud Storage object. */
  readonly object: string;
}

function osConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation_number: cdktf.stringToTerraform(struct!.generationNumber),
    object: cdktf.stringToTerraform(struct!.object),
  }
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

function osConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_success_codes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.allowedSuccessCodes),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs_object: cdktf.listMapper(osConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigGcsObjectToTerraform)(struct!.gcsObject),
  }
}

export interface OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject {
  /** Bucket of the Cloud Storage object. */
  readonly bucket: string;
  /** Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change. */
  readonly generationNumber: string;
  /** Name of the Cloud Storage object. */
  readonly object: string;
}

function osConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation_number: cdktf.stringToTerraform(struct!.generationNumber),
    object: cdktf.stringToTerraform(struct!.object),
  }
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

function osConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_success_codes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.allowedSuccessCodes),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs_object: cdktf.listMapper(osConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigGcsObjectToTerraform)(struct!.gcsObject),
  }
}

export interface OsConfigPatchDeploymentPatchConfigPostStep {
  /** linux_exec_step_config block */
  readonly linuxExecStepConfig?: OsConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfig[];
  /** windows_exec_step_config block */
  readonly windowsExecStepConfig?: OsConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfig[];
}

function osConfigPatchDeploymentPatchConfigPostStepToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPostStep): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    linux_exec_step_config: cdktf.listMapper(osConfigPatchDeploymentPatchConfigPostStepLinuxExecStepConfigToTerraform)(struct!.linuxExecStepConfig),
    windows_exec_step_config: cdktf.listMapper(osConfigPatchDeploymentPatchConfigPostStepWindowsExecStepConfigToTerraform)(struct!.windowsExecStepConfig),
  }
}

export interface OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject {
  /** Bucket of the Cloud Storage object. */
  readonly bucket: string;
  /** Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change. */
  readonly generationNumber: string;
  /** Name of the Cloud Storage object. */
  readonly object: string;
}

function osConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation_number: cdktf.stringToTerraform(struct!.generationNumber),
    object: cdktf.stringToTerraform(struct!.object),
  }
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

function osConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_success_codes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.allowedSuccessCodes),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs_object: cdktf.listMapper(osConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigGcsObjectToTerraform)(struct!.gcsObject),
  }
}

export interface OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject {
  /** Bucket of the Cloud Storage object. */
  readonly bucket: string;
  /** Generation number of the Cloud Storage object. This is used to ensure that the ExecStep specified by this PatchJob does not change. */
  readonly generationNumber: string;
  /** Name of the Cloud Storage object. */
  readonly object: string;
}

function osConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation_number: cdktf.stringToTerraform(struct!.generationNumber),
    object: cdktf.stringToTerraform(struct!.object),
  }
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

function osConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_success_codes: cdktf.listMapper(cdktf.numberToTerraform)(struct!.allowedSuccessCodes),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs_object: cdktf.listMapper(osConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigGcsObjectToTerraform)(struct!.gcsObject),
  }
}

export interface OsConfigPatchDeploymentPatchConfigPreStep {
  /** linux_exec_step_config block */
  readonly linuxExecStepConfig?: OsConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfig[];
  /** windows_exec_step_config block */
  readonly windowsExecStepConfig?: OsConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfig[];
}

function osConfigPatchDeploymentPatchConfigPreStepToTerraform(struct?: OsConfigPatchDeploymentPatchConfigPreStep): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    linux_exec_step_config: cdktf.listMapper(osConfigPatchDeploymentPatchConfigPreStepLinuxExecStepConfigToTerraform)(struct!.linuxExecStepConfig),
    windows_exec_step_config: cdktf.listMapper(osConfigPatchDeploymentPatchConfigPreStepWindowsExecStepConfigToTerraform)(struct!.windowsExecStepConfig),
  }
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

function osConfigPatchDeploymentPatchConfigWindowsUpdateToTerraform(struct?: OsConfigPatchDeploymentPatchConfigWindowsUpdate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    classifications: cdktf.listMapper(cdktf.stringToTerraform)(struct!.classifications),
    excludes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludes),
    exclusive_patches: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclusivePatches),
  }
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

function osConfigPatchDeploymentPatchConfigYumToTerraform(struct?: OsConfigPatchDeploymentPatchConfigYum): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    excludes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludes),
    exclusive_packages: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclusivePackages),
    minimal: cdktf.booleanToTerraform(struct!.minimal),
    security: cdktf.booleanToTerraform(struct!.security),
  }
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

function osConfigPatchDeploymentPatchConfigZypperToTerraform(struct?: OsConfigPatchDeploymentPatchConfigZypper): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    categories: cdktf.listMapper(cdktf.stringToTerraform)(struct!.categories),
    excludes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.excludes),
    exclusive_patches: cdktf.listMapper(cdktf.stringToTerraform)(struct!.exclusivePatches),
    severities: cdktf.listMapper(cdktf.stringToTerraform)(struct!.severities),
    with_optional: cdktf.booleanToTerraform(struct!.withOptional),
    with_update: cdktf.booleanToTerraform(struct!.withUpdate),
  }
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

function osConfigPatchDeploymentPatchConfigToTerraform(struct?: OsConfigPatchDeploymentPatchConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    reboot_config: cdktf.stringToTerraform(struct!.rebootConfig),
    apt: cdktf.listMapper(osConfigPatchDeploymentPatchConfigAptToTerraform)(struct!.apt),
    goo: cdktf.listMapper(osConfigPatchDeploymentPatchConfigGooToTerraform)(struct!.goo),
    post_step: cdktf.listMapper(osConfigPatchDeploymentPatchConfigPostStepToTerraform)(struct!.postStep),
    pre_step: cdktf.listMapper(osConfigPatchDeploymentPatchConfigPreStepToTerraform)(struct!.preStep),
    windows_update: cdktf.listMapper(osConfigPatchDeploymentPatchConfigWindowsUpdateToTerraform)(struct!.windowsUpdate),
    yum: cdktf.listMapper(osConfigPatchDeploymentPatchConfigYumToTerraform)(struct!.yum),
    zypper: cdktf.listMapper(osConfigPatchDeploymentPatchConfigZypperToTerraform)(struct!.zypper),
  }
}

export interface OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth {
  /** A day of the week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"] */
  readonly dayOfWeek: string;
  /** Week number in a month. 1-4 indicates the 1st to 4th week of the month. -1 indicates the last week of the month. */
  readonly weekOrdinal: number;
}

function osConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthToTerraform(struct?: OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    week_ordinal: cdktf.numberToTerraform(struct!.weekOrdinal),
  }
}

export interface OsConfigPatchDeploymentRecurringScheduleMonthly {
  /** One day of the month. 1-31 indicates the 1st to the 31st day. -1 indicates the last day of the month.
Months without the target day will be skipped. For example, a schedule to run "every month on the 31st"
will not run in February, April, June, etc. */
  readonly monthDay?: number;
  /** week_day_of_month block */
  readonly weekDayOfMonth?: OsConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonth[];
}

function osConfigPatchDeploymentRecurringScheduleMonthlyToTerraform(struct?: OsConfigPatchDeploymentRecurringScheduleMonthly): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    month_day: cdktf.numberToTerraform(struct!.monthDay),
    week_day_of_month: cdktf.listMapper(osConfigPatchDeploymentRecurringScheduleMonthlyWeekDayOfMonthToTerraform)(struct!.weekDayOfMonth),
  }
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

function osConfigPatchDeploymentRecurringScheduleTimeOfDayToTerraform(struct?: OsConfigPatchDeploymentRecurringScheduleTimeOfDay): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}

export interface OsConfigPatchDeploymentRecurringScheduleTimeZone {
  /** IANA Time Zone Database time zone, e.g. "America/New_York". */
  readonly id: string;
  /** IANA Time Zone Database version number, e.g. "2019a". */
  readonly version?: string;
}

function osConfigPatchDeploymentRecurringScheduleTimeZoneToTerraform(struct?: OsConfigPatchDeploymentRecurringScheduleTimeZone): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface OsConfigPatchDeploymentRecurringScheduleWeekly {
  /** IANA Time Zone Database time zone, e.g. "America/New_York". Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"] */
  readonly dayOfWeek: string;
}

function osConfigPatchDeploymentRecurringScheduleWeeklyToTerraform(struct?: OsConfigPatchDeploymentRecurringScheduleWeekly): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
  }
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

function osConfigPatchDeploymentRecurringScheduleToTerraform(struct?: OsConfigPatchDeploymentRecurringSchedule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    monthly: cdktf.listMapper(osConfigPatchDeploymentRecurringScheduleMonthlyToTerraform)(struct!.monthly),
    time_of_day: cdktf.listMapper(osConfigPatchDeploymentRecurringScheduleTimeOfDayToTerraform)(struct!.timeOfDay),
    time_zone: cdktf.listMapper(osConfigPatchDeploymentRecurringScheduleTimeZoneToTerraform)(struct!.timeZone),
    weekly: cdktf.listMapper(osConfigPatchDeploymentRecurringScheduleWeeklyToTerraform)(struct!.weekly),
  }
}

export interface OsConfigPatchDeploymentRolloutDisruptionBudget {
  /** Specifies a fixed value. */
  readonly fixed?: number;
  /** Specifies the relative value defined as a percentage, which will be multiplied by a reference value. */
  readonly percentage?: number;
}

function osConfigPatchDeploymentRolloutDisruptionBudgetToTerraform(struct?: OsConfigPatchDeploymentRolloutDisruptionBudget): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fixed: cdktf.numberToTerraform(struct!.fixed),
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}

export interface OsConfigPatchDeploymentRollout {
  /** Mode of the patch rollout. Possible values: ["ZONE_BY_ZONE", "CONCURRENT_ZONES"] */
  readonly mode: string;
  /** disruption_budget block */
  readonly disruptionBudget: OsConfigPatchDeploymentRolloutDisruptionBudget[];
}

function osConfigPatchDeploymentRolloutToTerraform(struct?: OsConfigPatchDeploymentRollout): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    disruption_budget: cdktf.listMapper(osConfigPatchDeploymentRolloutDisruptionBudgetToTerraform)(struct!.disruptionBudget),
  }
}

export interface OsConfigPatchDeploymentTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function osConfigPatchDeploymentTimeoutsToTerraform(struct?: OsConfigPatchDeploymentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class OsConfigPatchDeployment extends cdktf.TerraformResource {

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
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
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
  private _duration?: string;
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string ) {
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
  private _patchDeploymentId: string;
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
    return this._project
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // instance_filter - computed: false, optional: false, required: true
  private _instanceFilter: OsConfigPatchDeploymentInstanceFilter[];
  public get instanceFilter() {
    return this.interpolationForAttribute('instance_filter') as any;
  }
  public set instanceFilter(value: OsConfigPatchDeploymentInstanceFilter[]) {
    this._instanceFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceFilterInput() {
    return this._instanceFilter
  }

  // one_time_schedule - computed: false, optional: true, required: false
  private _oneTimeSchedule?: OsConfigPatchDeploymentOneTimeSchedule[];
  public get oneTimeSchedule() {
    return this.interpolationForAttribute('one_time_schedule') as any;
  }
  public set oneTimeSchedule(value: OsConfigPatchDeploymentOneTimeSchedule[] ) {
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
  private _patchConfig?: OsConfigPatchDeploymentPatchConfig[];
  public get patchConfig() {
    return this.interpolationForAttribute('patch_config') as any;
  }
  public set patchConfig(value: OsConfigPatchDeploymentPatchConfig[] ) {
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
  private _recurringSchedule?: OsConfigPatchDeploymentRecurringSchedule[];
  public get recurringSchedule() {
    return this.interpolationForAttribute('recurring_schedule') as any;
  }
  public set recurringSchedule(value: OsConfigPatchDeploymentRecurringSchedule[] ) {
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
  private _rollout?: OsConfigPatchDeploymentRollout[];
  public get rollout() {
    return this.interpolationForAttribute('rollout') as any;
  }
  public set rollout(value: OsConfigPatchDeploymentRollout[] ) {
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
  private _timeouts?: OsConfigPatchDeploymentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: OsConfigPatchDeploymentTimeouts ) {
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
      instance_filter: cdktf.listMapper(osConfigPatchDeploymentInstanceFilterToTerraform)(this._instanceFilter),
      one_time_schedule: cdktf.listMapper(osConfigPatchDeploymentOneTimeScheduleToTerraform)(this._oneTimeSchedule),
      patch_config: cdktf.listMapper(osConfigPatchDeploymentPatchConfigToTerraform)(this._patchConfig),
      recurring_schedule: cdktf.listMapper(osConfigPatchDeploymentRecurringScheduleToTerraform)(this._recurringSchedule),
      rollout: cdktf.listMapper(osConfigPatchDeploymentRolloutToTerraform)(this._rollout),
      timeouts: osConfigPatchDeploymentTimeoutsToTerraform(this._timeouts),
    };
  }
}
