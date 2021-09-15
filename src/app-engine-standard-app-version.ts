// https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppEngineStandardAppVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#delete_service_on_destroy AppEngineStandardAppVersion#delete_service_on_destroy}
  */
  readonly deleteServiceOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Environment variables available to the application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#env_variables AppEngineStandardAppVersion#env_variables}
  */
  readonly envVariables?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * A list of the types of messages that this application is able to receive. Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#inbound_services AppEngineStandardAppVersion#inbound_services}
  */
  readonly inboundServices?: string[];
  /**
  * Instance class that is used to run this version. Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
BasicScaling or ManualScaling: B1, B2, B4, B4_1G, B8
Defaults to F1 for AutomaticScaling and B2 for ManualScaling and BasicScaling. If no scaling is specified, AutomaticScaling is chosen.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#instance_class AppEngineStandardAppVersion#instance_class}
  */
  readonly instanceClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#noop_on_destroy AppEngineStandardAppVersion#noop_on_destroy}
  */
  readonly noopOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#project AppEngineStandardAppVersion#project}
  */
  readonly project?: string;
  /**
  * Desired runtime. Example python27.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#runtime AppEngineStandardAppVersion#runtime}
  */
  readonly runtime: string;
  /**
  * The version of the API in the given runtime environment.
Please see the app.yaml reference for valid values at https://cloud.google.com/appengine/docs/standard//config/appref
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#runtime_api_version AppEngineStandardAppVersion#runtime_api_version}
  */
  readonly runtimeApiVersion?: string;
  /**
  * AppEngine service resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#service AppEngineStandardAppVersion#service}
  */
  readonly service: string;
  /**
  * Whether multiple requests can be dispatched to this version at once.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#threadsafe AppEngineStandardAppVersion#threadsafe}
  */
  readonly threadsafe?: boolean | cdktf.IResolvable;
  /**
  * Relative name of the version within the service. For example, 'v1'. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names,"default", "latest", and any name with the prefix "ah-".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#version_id AppEngineStandardAppVersion#version_id}
  */
  readonly versionId?: string;
  /**
  * automatic_scaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#automatic_scaling AppEngineStandardAppVersion#automatic_scaling}
  */
  readonly automaticScaling?: AppEngineStandardAppVersionAutomaticScaling[];
  /**
  * basic_scaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#basic_scaling AppEngineStandardAppVersion#basic_scaling}
  */
  readonly basicScaling?: AppEngineStandardAppVersionBasicScaling[];
  /**
  * deployment block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#deployment AppEngineStandardAppVersion#deployment}
  */
  readonly deployment: AppEngineStandardAppVersionDeployment[];
  /**
  * entrypoint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#entrypoint AppEngineStandardAppVersion#entrypoint}
  */
  readonly entrypoint?: AppEngineStandardAppVersionEntrypoint[];
  /**
  * handlers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#handlers AppEngineStandardAppVersion#handlers}
  */
  readonly handlers?: AppEngineStandardAppVersionHandlers[];
  /**
  * libraries block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#libraries AppEngineStandardAppVersion#libraries}
  */
  readonly libraries?: AppEngineStandardAppVersionLibraries[];
  /**
  * manual_scaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#manual_scaling AppEngineStandardAppVersion#manual_scaling}
  */
  readonly manualScaling?: AppEngineStandardAppVersionManualScaling[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#timeouts AppEngineStandardAppVersion#timeouts}
  */
  readonly timeouts?: AppEngineStandardAppVersionTimeouts;
  /**
  * vpc_access_connector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#vpc_access_connector AppEngineStandardAppVersion#vpc_access_connector}
  */
  readonly vpcAccessConnector?: AppEngineStandardAppVersionVpcAccessConnector[];
}
export interface AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings {
  /**
  * Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#max_instances AppEngineStandardAppVersion#max_instances}
  */
  readonly maxInstances?: number;
  /**
  * Minimum number of instances to run for this version. Set to zero to disable minInstances configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#min_instances AppEngineStandardAppVersion#min_instances}
  */
  readonly minInstances?: number;
  /**
  * Target CPU utilization ratio to maintain when scaling. Should be a value in the range [0.50, 0.95], zero, or a negative value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#target_cpu_utilization AppEngineStandardAppVersion#target_cpu_utilization}
  */
  readonly targetCpuUtilization?: number;
  /**
  * Target throughput utilization ratio to maintain when scaling. Should be a value in the range [0.50, 0.95], zero, or a negative value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#target_throughput_utilization AppEngineStandardAppVersion#target_throughput_utilization}
  */
  readonly targetThroughputUtilization?: number;
}

function appEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsToTerraform(struct?: AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_instances: cdktf.numberToTerraform(struct!.maxInstances),
    min_instances: cdktf.numberToTerraform(struct!.minInstances),
    target_cpu_utilization: cdktf.numberToTerraform(struct!.targetCpuUtilization),
    target_throughput_utilization: cdktf.numberToTerraform(struct!.targetThroughputUtilization),
  }
}

export interface AppEngineStandardAppVersionAutomaticScaling {
  /**
  * Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.

Defaults to a runtime-specific value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#max_concurrent_requests AppEngineStandardAppVersion#max_concurrent_requests}
  */
  readonly maxConcurrentRequests?: number;
  /**
  * Maximum number of idle instances that should be maintained for this version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#max_idle_instances AppEngineStandardAppVersion#max_idle_instances}
  */
  readonly maxIdleInstances?: number;
  /**
  * Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#max_pending_latency AppEngineStandardAppVersion#max_pending_latency}
  */
  readonly maxPendingLatency?: string;
  /**
  * Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#min_idle_instances AppEngineStandardAppVersion#min_idle_instances}
  */
  readonly minIdleInstances?: number;
  /**
  * Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#min_pending_latency AppEngineStandardAppVersion#min_pending_latency}
  */
  readonly minPendingLatency?: string;
  /**
  * standard_scheduler_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#standard_scheduler_settings AppEngineStandardAppVersion#standard_scheduler_settings}
  */
  readonly standardSchedulerSettings?: AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings[];
}

function appEngineStandardAppVersionAutomaticScalingToTerraform(struct?: AppEngineStandardAppVersionAutomaticScaling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_concurrent_requests: cdktf.numberToTerraform(struct!.maxConcurrentRequests),
    max_idle_instances: cdktf.numberToTerraform(struct!.maxIdleInstances),
    max_pending_latency: cdktf.stringToTerraform(struct!.maxPendingLatency),
    min_idle_instances: cdktf.numberToTerraform(struct!.minIdleInstances),
    min_pending_latency: cdktf.stringToTerraform(struct!.minPendingLatency),
    standard_scheduler_settings: cdktf.listMapper(appEngineStandardAppVersionAutomaticScalingStandardSchedulerSettingsToTerraform)(struct!.standardSchedulerSettings),
  }
}

export interface AppEngineStandardAppVersionBasicScaling {
  /**
  * Duration of time after the last request that an instance must wait before the instance is shut down.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#idle_timeout AppEngineStandardAppVersion#idle_timeout}
  */
  readonly idleTimeout?: string;
  /**
  * Maximum number of instances to create for this version. Must be in the range [1.0, 200.0].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#max_instances AppEngineStandardAppVersion#max_instances}
  */
  readonly maxInstances: number;
}

function appEngineStandardAppVersionBasicScalingToTerraform(struct?: AppEngineStandardAppVersionBasicScaling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    idle_timeout: cdktf.stringToTerraform(struct!.idleTimeout),
    max_instances: cdktf.numberToTerraform(struct!.maxInstances),
  }
}

export interface AppEngineStandardAppVersionDeploymentFiles {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#name AppEngineStandardAppVersion#name}
  */
  readonly name: string;
  /**
  * SHA1 checksum of the file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#sha1_sum AppEngineStandardAppVersion#sha1_sum}
  */
  readonly sha1Sum?: string;
  /**
  * Source URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#source_url AppEngineStandardAppVersion#source_url}
  */
  readonly sourceUrl: string;
}

function appEngineStandardAppVersionDeploymentFilesToTerraform(struct?: AppEngineStandardAppVersionDeploymentFiles): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sha1_sum: cdktf.stringToTerraform(struct!.sha1Sum),
    source_url: cdktf.stringToTerraform(struct!.sourceUrl),
  }
}

export interface AppEngineStandardAppVersionDeploymentZip {
  /**
  * files count
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#files_count AppEngineStandardAppVersion#files_count}
  */
  readonly filesCount?: number;
  /**
  * Source URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#source_url AppEngineStandardAppVersion#source_url}
  */
  readonly sourceUrl: string;
}

function appEngineStandardAppVersionDeploymentZipToTerraform(struct?: AppEngineStandardAppVersionDeploymentZip): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    files_count: cdktf.numberToTerraform(struct!.filesCount),
    source_url: cdktf.stringToTerraform(struct!.sourceUrl),
  }
}

export interface AppEngineStandardAppVersionDeployment {
  /**
  * files block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#files AppEngineStandardAppVersion#files}
  */
  readonly files?: AppEngineStandardAppVersionDeploymentFiles[];
  /**
  * zip block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#zip AppEngineStandardAppVersion#zip}
  */
  readonly zip?: AppEngineStandardAppVersionDeploymentZip[];
}

function appEngineStandardAppVersionDeploymentToTerraform(struct?: AppEngineStandardAppVersionDeployment): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    files: cdktf.listMapper(appEngineStandardAppVersionDeploymentFilesToTerraform)(struct!.files),
    zip: cdktf.listMapper(appEngineStandardAppVersionDeploymentZipToTerraform)(struct!.zip),
  }
}

export interface AppEngineStandardAppVersionEntrypoint {
  /**
  * The format should be a shell command that can be fed to bash -c.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#shell AppEngineStandardAppVersion#shell}
  */
  readonly shell: string;
}

function appEngineStandardAppVersionEntrypointToTerraform(struct?: AppEngineStandardAppVersionEntrypoint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    shell: cdktf.stringToTerraform(struct!.shell),
  }
}

export interface AppEngineStandardAppVersionHandlersScript {
  /**
  * Path to the script from the application root directory.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#script_path AppEngineStandardAppVersion#script_path}
  */
  readonly scriptPath: string;
}

function appEngineStandardAppVersionHandlersScriptToTerraform(struct?: AppEngineStandardAppVersionHandlersScript): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    script_path: cdktf.stringToTerraform(struct!.scriptPath),
  }
}

export interface AppEngineStandardAppVersionHandlersStaticFiles {
  /**
  * Whether files should also be uploaded as code data. By default, files declared in static file handlers are uploaded as
static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged
against both your code and static data storage resource quotas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#application_readable AppEngineStandardAppVersion#application_readable}
  */
  readonly applicationReadable?: boolean | cdktf.IResolvable;
  /**
  * Time a static file served by this handler should be cached by web proxies and browsers.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#expiration AppEngineStandardAppVersion#expiration}
  */
  readonly expiration?: string;
  /**
  * HTTP headers to use for all responses from these URLs.
An object containing a list of "key:value" value pairs.".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#http_headers AppEngineStandardAppVersion#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * MIME type used to serve all files served by this handler.
Defaults to file-specific MIME types, which are derived from each file's filename extension.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#mime_type AppEngineStandardAppVersion#mime_type}
  */
  readonly mimeType?: string;
  /**
  * Path to the static files matched by the URL pattern, from the application root directory. The path can refer to text matched in groupings in the URL pattern.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#path AppEngineStandardAppVersion#path}
  */
  readonly path?: string;
  /**
  * Whether this handler should match the request if the file referenced by the handler does not exist.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#require_matching_file AppEngineStandardAppVersion#require_matching_file}
  */
  readonly requireMatchingFile?: boolean | cdktf.IResolvable;
  /**
  * Regular expression that matches the file paths for all files that should be referenced by this handler.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#upload_path_regex AppEngineStandardAppVersion#upload_path_regex}
  */
  readonly uploadPathRegex?: string;
}

function appEngineStandardAppVersionHandlersStaticFilesToTerraform(struct?: AppEngineStandardAppVersionHandlersStaticFiles): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    application_readable: cdktf.booleanToTerraform(struct!.applicationReadable),
    expiration: cdktf.stringToTerraform(struct!.expiration),
    http_headers: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.httpHeaders),
    mime_type: cdktf.stringToTerraform(struct!.mimeType),
    path: cdktf.stringToTerraform(struct!.path),
    require_matching_file: cdktf.booleanToTerraform(struct!.requireMatchingFile),
    upload_path_regex: cdktf.stringToTerraform(struct!.uploadPathRegex),
  }
}

export interface AppEngineStandardAppVersionHandlers {
  /**
  * Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#auth_fail_action AppEngineStandardAppVersion#auth_fail_action}
  */
  readonly authFailAction?: string;
  /**
  * Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#login AppEngineStandardAppVersion#login}
  */
  readonly login?: string;
  /**
  * 30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#redirect_http_response_code AppEngineStandardAppVersion#redirect_http_response_code}
  */
  readonly redirectHttpResponseCode?: string;
  /**
  * Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#security_level AppEngineStandardAppVersion#security_level}
  */
  readonly securityLevel?: string;
  /**
  * URL prefix. Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings.
All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#url_regex AppEngineStandardAppVersion#url_regex}
  */
  readonly urlRegex?: string;
  /**
  * script block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#script AppEngineStandardAppVersion#script}
  */
  readonly script?: AppEngineStandardAppVersionHandlersScript[];
  /**
  * static_files block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#static_files AppEngineStandardAppVersion#static_files}
  */
  readonly staticFiles?: AppEngineStandardAppVersionHandlersStaticFiles[];
}

function appEngineStandardAppVersionHandlersToTerraform(struct?: AppEngineStandardAppVersionHandlers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auth_fail_action: cdktf.stringToTerraform(struct!.authFailAction),
    login: cdktf.stringToTerraform(struct!.login),
    redirect_http_response_code: cdktf.stringToTerraform(struct!.redirectHttpResponseCode),
    security_level: cdktf.stringToTerraform(struct!.securityLevel),
    url_regex: cdktf.stringToTerraform(struct!.urlRegex),
    script: cdktf.listMapper(appEngineStandardAppVersionHandlersScriptToTerraform)(struct!.script),
    static_files: cdktf.listMapper(appEngineStandardAppVersionHandlersStaticFilesToTerraform)(struct!.staticFiles),
  }
}

export interface AppEngineStandardAppVersionLibraries {
  /**
  * Name of the library. Example "django".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#name AppEngineStandardAppVersion#name}
  */
  readonly name?: string;
  /**
  * Version of the library to select, or "latest".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#version AppEngineStandardAppVersion#version}
  */
  readonly version?: string;
}

function appEngineStandardAppVersionLibrariesToTerraform(struct?: AppEngineStandardAppVersionLibraries): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface AppEngineStandardAppVersionManualScaling {
  /**
  * Number of instances to assign to the service at the start.

**Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#instances AppEngineStandardAppVersion#instances}
  */
  readonly instances: number;
}

function appEngineStandardAppVersionManualScalingToTerraform(struct?: AppEngineStandardAppVersionManualScaling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instances: cdktf.numberToTerraform(struct!.instances),
  }
}

export interface AppEngineStandardAppVersionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#create AppEngineStandardAppVersion#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#delete AppEngineStandardAppVersion#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#update AppEngineStandardAppVersion#update}
  */
  readonly update?: string;
}

function appEngineStandardAppVersionTimeoutsToTerraform(struct?: AppEngineStandardAppVersionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface AppEngineStandardAppVersionVpcAccessConnector {
  /**
  * Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html#name AppEngineStandardAppVersion#name}
  */
  readonly name: string;
}

function appEngineStandardAppVersionVpcAccessConnectorToTerraform(struct?: AppEngineStandardAppVersionVpcAccessConnector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html google_app_engine_standard_app_version}
*/
export class AppEngineStandardAppVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_app_engine_standard_app_version";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html google_app_engine_standard_app_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppEngineStandardAppVersionConfig
  */
  public constructor(scope: Construct, id: string, config: AppEngineStandardAppVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_app_engine_standard_app_version',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deleteServiceOnDestroy = config.deleteServiceOnDestroy;
    this._envVariables = config.envVariables;
    this._inboundServices = config.inboundServices;
    this._instanceClass = config.instanceClass;
    this._noopOnDestroy = config.noopOnDestroy;
    this._project = config.project;
    this._runtime = config.runtime;
    this._runtimeApiVersion = config.runtimeApiVersion;
    this._service = config.service;
    this._threadsafe = config.threadsafe;
    this._versionId = config.versionId;
    this._automaticScaling = config.automaticScaling;
    this._basicScaling = config.basicScaling;
    this._deployment = config.deployment;
    this._entrypoint = config.entrypoint;
    this._handlers = config.handlers;
    this._libraries = config.libraries;
    this._manualScaling = config.manualScaling;
    this._timeouts = config.timeouts;
    this._vpcAccessConnector = config.vpcAccessConnector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_service_on_destroy - computed: false, optional: true, required: false
  private _deleteServiceOnDestroy?: boolean | cdktf.IResolvable;
  public get deleteServiceOnDestroy() {
    return this.getBooleanAttribute('delete_service_on_destroy');
  }
  public set deleteServiceOnDestroy(value: boolean | cdktf.IResolvable ) {
    this._deleteServiceOnDestroy = value;
  }
  public resetDeleteServiceOnDestroy() {
    this._deleteServiceOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteServiceOnDestroyInput() {
    return this._deleteServiceOnDestroy
  }

  // env_variables - computed: false, optional: true, required: false
  private _envVariables?: { [key: string]: string } | cdktf.IResolvable;
  public get envVariables() {
    return this.interpolationForAttribute('env_variables') as any;
  }
  public set envVariables(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._envVariables = value;
  }
  public resetEnvVariables() {
    this._envVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVariablesInput() {
    return this._envVariables
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inbound_services - computed: false, optional: true, required: false
  private _inboundServices?: string[];
  public get inboundServices() {
    return this.getListAttribute('inbound_services');
  }
  public set inboundServices(value: string[] ) {
    this._inboundServices = value;
  }
  public resetInboundServices() {
    this._inboundServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundServicesInput() {
    return this._inboundServices
  }

  // instance_class - computed: true, optional: true, required: false
  private _instanceClass?: string;
  public get instanceClass() {
    return this.getStringAttribute('instance_class');
  }
  public set instanceClass(value: string) {
    this._instanceClass = value;
  }
  public resetInstanceClass() {
    this._instanceClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceClassInput() {
    return this._instanceClass
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // noop_on_destroy - computed: false, optional: true, required: false
  private _noopOnDestroy?: boolean | cdktf.IResolvable;
  public get noopOnDestroy() {
    return this.getBooleanAttribute('noop_on_destroy');
  }
  public set noopOnDestroy(value: boolean | cdktf.IResolvable ) {
    this._noopOnDestroy = value;
  }
  public resetNoopOnDestroy() {
    this._noopOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noopOnDestroyInput() {
    return this._noopOnDestroy
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

  // runtime - computed: false, optional: false, required: true
  private _runtime: string;
  public get runtime() {
    return this.getStringAttribute('runtime');
  }
  public set runtime(value: string) {
    this._runtime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeInput() {
    return this._runtime
  }

  // runtime_api_version - computed: false, optional: true, required: false
  private _runtimeApiVersion?: string;
  public get runtimeApiVersion() {
    return this.getStringAttribute('runtime_api_version');
  }
  public set runtimeApiVersion(value: string ) {
    this._runtimeApiVersion = value;
  }
  public resetRuntimeApiVersion() {
    this._runtimeApiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeApiVersionInput() {
    return this._runtimeApiVersion
  }

  // service - computed: false, optional: false, required: true
  private _service: string;
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service
  }

  // threadsafe - computed: false, optional: true, required: false
  private _threadsafe?: boolean | cdktf.IResolvable;
  public get threadsafe() {
    return this.getBooleanAttribute('threadsafe');
  }
  public set threadsafe(value: boolean | cdktf.IResolvable ) {
    this._threadsafe = value;
  }
  public resetThreadsafe() {
    this._threadsafe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsafeInput() {
    return this._threadsafe
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string;
  public get versionId() {
    return this.getStringAttribute('version_id');
  }
  public set versionId(value: string ) {
    this._versionId = value;
  }
  public resetVersionId() {
    this._versionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionIdInput() {
    return this._versionId
  }

  // automatic_scaling - computed: false, optional: true, required: false
  private _automaticScaling?: AppEngineStandardAppVersionAutomaticScaling[];
  public get automaticScaling() {
    return this.interpolationForAttribute('automatic_scaling') as any;
  }
  public set automaticScaling(value: AppEngineStandardAppVersionAutomaticScaling[] ) {
    this._automaticScaling = value;
  }
  public resetAutomaticScaling() {
    this._automaticScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticScalingInput() {
    return this._automaticScaling
  }

  // basic_scaling - computed: false, optional: true, required: false
  private _basicScaling?: AppEngineStandardAppVersionBasicScaling[];
  public get basicScaling() {
    return this.interpolationForAttribute('basic_scaling') as any;
  }
  public set basicScaling(value: AppEngineStandardAppVersionBasicScaling[] ) {
    this._basicScaling = value;
  }
  public resetBasicScaling() {
    this._basicScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicScalingInput() {
    return this._basicScaling
  }

  // deployment - computed: false, optional: false, required: true
  private _deployment: AppEngineStandardAppVersionDeployment[];
  public get deployment() {
    return this.interpolationForAttribute('deployment') as any;
  }
  public set deployment(value: AppEngineStandardAppVersionDeployment[]) {
    this._deployment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment
  }

  // entrypoint - computed: false, optional: true, required: false
  private _entrypoint?: AppEngineStandardAppVersionEntrypoint[];
  public get entrypoint() {
    return this.interpolationForAttribute('entrypoint') as any;
  }
  public set entrypoint(value: AppEngineStandardAppVersionEntrypoint[] ) {
    this._entrypoint = value;
  }
  public resetEntrypoint() {
    this._entrypoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointInput() {
    return this._entrypoint
  }

  // handlers - computed: false, optional: true, required: false
  private _handlers?: AppEngineStandardAppVersionHandlers[];
  public get handlers() {
    return this.interpolationForAttribute('handlers') as any;
  }
  public set handlers(value: AppEngineStandardAppVersionHandlers[] ) {
    this._handlers = value;
  }
  public resetHandlers() {
    this._handlers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlersInput() {
    return this._handlers
  }

  // libraries - computed: false, optional: true, required: false
  private _libraries?: AppEngineStandardAppVersionLibraries[];
  public get libraries() {
    return this.interpolationForAttribute('libraries') as any;
  }
  public set libraries(value: AppEngineStandardAppVersionLibraries[] ) {
    this._libraries = value;
  }
  public resetLibraries() {
    this._libraries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get librariesInput() {
    return this._libraries
  }

  // manual_scaling - computed: false, optional: true, required: false
  private _manualScaling?: AppEngineStandardAppVersionManualScaling[];
  public get manualScaling() {
    return this.interpolationForAttribute('manual_scaling') as any;
  }
  public set manualScaling(value: AppEngineStandardAppVersionManualScaling[] ) {
    this._manualScaling = value;
  }
  public resetManualScaling() {
    this._manualScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualScalingInput() {
    return this._manualScaling
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppEngineStandardAppVersionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AppEngineStandardAppVersionTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // vpc_access_connector - computed: false, optional: true, required: false
  private _vpcAccessConnector?: AppEngineStandardAppVersionVpcAccessConnector[];
  public get vpcAccessConnector() {
    return this.interpolationForAttribute('vpc_access_connector') as any;
  }
  public set vpcAccessConnector(value: AppEngineStandardAppVersionVpcAccessConnector[] ) {
    this._vpcAccessConnector = value;
  }
  public resetVpcAccessConnector() {
    this._vpcAccessConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAccessConnectorInput() {
    return this._vpcAccessConnector
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_service_on_destroy: cdktf.booleanToTerraform(this._deleteServiceOnDestroy),
      env_variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._envVariables),
      inbound_services: cdktf.listMapper(cdktf.stringToTerraform)(this._inboundServices),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      noop_on_destroy: cdktf.booleanToTerraform(this._noopOnDestroy),
      project: cdktf.stringToTerraform(this._project),
      runtime: cdktf.stringToTerraform(this._runtime),
      runtime_api_version: cdktf.stringToTerraform(this._runtimeApiVersion),
      service: cdktf.stringToTerraform(this._service),
      threadsafe: cdktf.booleanToTerraform(this._threadsafe),
      version_id: cdktf.stringToTerraform(this._versionId),
      automatic_scaling: cdktf.listMapper(appEngineStandardAppVersionAutomaticScalingToTerraform)(this._automaticScaling),
      basic_scaling: cdktf.listMapper(appEngineStandardAppVersionBasicScalingToTerraform)(this._basicScaling),
      deployment: cdktf.listMapper(appEngineStandardAppVersionDeploymentToTerraform)(this._deployment),
      entrypoint: cdktf.listMapper(appEngineStandardAppVersionEntrypointToTerraform)(this._entrypoint),
      handlers: cdktf.listMapper(appEngineStandardAppVersionHandlersToTerraform)(this._handlers),
      libraries: cdktf.listMapper(appEngineStandardAppVersionLibrariesToTerraform)(this._libraries),
      manual_scaling: cdktf.listMapper(appEngineStandardAppVersionManualScalingToTerraform)(this._manualScaling),
      timeouts: appEngineStandardAppVersionTimeoutsToTerraform(this._timeouts),
      vpc_access_connector: cdktf.listMapper(appEngineStandardAppVersionVpcAccessConnectorToTerraform)(this._vpcAccessConnector),
    };
  }
}
