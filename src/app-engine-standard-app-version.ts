// https://www.terraform.io/docs/providers/google/r/app_engine_standard_app_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppEngineStandardAppVersionConfig extends TerraformMetaArguments {
  readonly deleteServiceOnDestroy?: boolean;
  /** Environment variables available to the application. */
  readonly envVariables?: { [key: string]: string };
  /** A list of the types of messages that this application is able to receive. Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"] */
  readonly inboundServices?: string[];
  /** Instance class that is used to run this version. Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
BasicScaling or ManualScaling: B1, B2, B4, B4_1G, B8
Defaults to F1 for AutomaticScaling and B2 for ManualScaling and BasicScaling. If no scaling is specified, AutomaticScaling is chosen. */
  readonly instanceClass?: string;
  readonly noopOnDestroy?: boolean;
  readonly project?: string;
  /** Desired runtime. Example python27. */
  readonly runtime: string;
  /** The version of the API in the given runtime environment.
Please see the app.yaml reference for valid values at https://cloud.google.com/appengine/docs/standard//config/appref */
  readonly runtimeApiVersion?: string;
  /** AppEngine service resource */
  readonly service: string;
  /** Whether multiple requests can be dispatched to this version at once. */
  readonly threadsafe?: boolean;
  /** Relative name of the version within the service. For example, 'v1'. Version names can contain only lowercase letters, numbers, or hyphens. Reserved names,"default", "latest", and any name with the prefix "ah-". */
  readonly versionId?: string;
  /** automatic_scaling block */
  readonly automaticScaling?: AppEngineStandardAppVersionAutomaticScaling[];
  /** basic_scaling block */
  readonly basicScaling?: AppEngineStandardAppVersionBasicScaling[];
  /** deployment block */
  readonly deployment: AppEngineStandardAppVersionDeployment[];
  /** entrypoint block */
  readonly entrypoint?: AppEngineStandardAppVersionEntrypoint[];
  /** handlers block */
  readonly handlers?: AppEngineStandardAppVersionHandlers[];
  /** libraries block */
  readonly libraries?: AppEngineStandardAppVersionLibraries[];
  /** manual_scaling block */
  readonly manualScaling?: AppEngineStandardAppVersionManualScaling[];
  /** timeouts block */
  readonly timeouts?: AppEngineStandardAppVersionTimeouts;
}
export interface AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings {
  /** Maximum number of instances to run for this version. Set to zero to disable maxInstances configuration. */
  readonly maxInstances?: number;
  /** Minimum number of instances to run for this version. Set to zero to disable minInstances configuration. */
  readonly minInstances?: number;
  /** Target CPU utilization ratio to maintain when scaling. Should be a value in the range [0.50, 0.95], zero, or a negative value. */
  readonly targetCpuUtilization?: number;
  /** Target throughput utilization ratio to maintain when scaling. Should be a value in the range [0.50, 0.95], zero, or a negative value. */
  readonly targetThroughputUtilization?: number;
}
export interface AppEngineStandardAppVersionAutomaticScaling {
  /** Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.

Defaults to a runtime-specific value. */
  readonly maxConcurrentRequests?: number;
  /** Maximum number of idle instances that should be maintained for this version. */
  readonly maxIdleInstances?: number;
  /** Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". */
  readonly maxPendingLatency?: string;
  /** Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service. */
  readonly minIdleInstances?: number;
  /** Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". */
  readonly minPendingLatency?: string;
  /** standard_scheduler_settings block */
  readonly standardSchedulerSettings?: AppEngineStandardAppVersionAutomaticScalingStandardSchedulerSettings[];
}
export interface AppEngineStandardAppVersionBasicScaling {
  /** Duration of time after the last request that an instance must wait before the instance is shut down.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s. */
  readonly idleTimeout?: string;
  /** Maximum number of instances to create for this version. Must be in the range [1.0, 200.0]. */
  readonly maxInstances: number;
}
export interface AppEngineStandardAppVersionDeploymentFiles {
  readonly name: string;
  /** SHA1 checksum of the file */
  readonly sha1Sum?: string;
  /** Source URL */
  readonly sourceUrl: string;
}
export interface AppEngineStandardAppVersionDeploymentZip {
  /** files count */
  readonly filesCount?: number;
  /** Source URL */
  readonly sourceUrl: string;
}
export interface AppEngineStandardAppVersionDeployment {
  /** files block */
  readonly files?: AppEngineStandardAppVersionDeploymentFiles[];
  /** zip block */
  readonly zip?: AppEngineStandardAppVersionDeploymentZip[];
}
export interface AppEngineStandardAppVersionEntrypoint {
  /** The format should be a shell command that can be fed to bash -c. */
  readonly shell: string;
}
export interface AppEngineStandardAppVersionHandlersScript {
  /** Path to the script from the application root directory. */
  readonly scriptPath: string;
}
export interface AppEngineStandardAppVersionHandlersStaticFiles {
  /** Whether files should also be uploaded as code data. By default, files declared in static file handlers are uploaded as
static data and are only served to end users; they cannot be read by the application. If enabled, uploads are charged
against both your code and static data storage resource quotas. */
  readonly applicationReadable?: boolean;
  /** Time a static file served by this handler should be cached by web proxies and browsers.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s". */
  readonly expiration?: string;
  /** HTTP headers to use for all responses from these URLs.
An object containing a list of "key:value" value pairs.". */
  readonly httpHeaders?: { [key: string]: string };
  /** MIME type used to serve all files served by this handler.
Defaults to file-specific MIME types, which are derived from each file's filename extension. */
  readonly mimeType?: string;
  /** Path to the static files matched by the URL pattern, from the application root directory. The path can refer to text matched in groupings in the URL pattern. */
  readonly path?: string;
  /** Whether this handler should match the request if the file referenced by the handler does not exist. */
  readonly requireMatchingFile?: boolean;
  /** Regular expression that matches the file paths for all files that should be referenced by this handler. */
  readonly uploadPathRegex?: string;
}
export interface AppEngineStandardAppVersionHandlers {
  /** Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"] */
  readonly authFailAction?: string;
  /** Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"] */
  readonly login?: string;
  /** 30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"] */
  readonly redirectHttpResponseCode?: string;
  /** Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"] */
  readonly securityLevel?: string;
  /** URL prefix. Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings.
All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path. */
  readonly urlRegex?: string;
  /** script block */
  readonly script?: AppEngineStandardAppVersionHandlersScript[];
  /** static_files block */
  readonly staticFiles?: AppEngineStandardAppVersionHandlersStaticFiles[];
}
export interface AppEngineStandardAppVersionLibraries {
  /** Name of the library. Example "django". */
  readonly name?: string;
  /** Version of the library to select, or "latest". */
  readonly version?: string;
}
export interface AppEngineStandardAppVersionManualScaling {
  /** Number of instances to assign to the service at the start.

**Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2 
Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection. */
  readonly instances: number;
}
export interface AppEngineStandardAppVersionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class AppEngineStandardAppVersion extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_service_on_destroy - computed: false, optional: true, required: false
  private _deleteServiceOnDestroy?: boolean;
  public get deleteServiceOnDestroy() {
    return this._deleteServiceOnDestroy;
  }
  public set deleteServiceOnDestroy(value: boolean | undefined) {
    this._deleteServiceOnDestroy = value;
  }

  // env_variables - computed: false, optional: true, required: false
  private _envVariables?: { [key: string]: string };
  public get envVariables() {
    return this._envVariables;
  }
  public set envVariables(value: { [key: string]: string } | undefined) {
    this._envVariables = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // inbound_services - computed: false, optional: true, required: false
  private _inboundServices?: string[];
  public get inboundServices() {
    return this._inboundServices;
  }
  public set inboundServices(value: string[] | undefined) {
    this._inboundServices = value;
  }

  // instance_class - computed: true, optional: true, required: false
  private _instanceClass?: string;
  public get instanceClass() {
    return this._instanceClass ?? this.getStringAttribute('instance_class');
  }
  public set instanceClass(value: string | undefined) {
    this._instanceClass = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // noop_on_destroy - computed: false, optional: true, required: false
  private _noopOnDestroy?: boolean;
  public get noopOnDestroy() {
    return this._noopOnDestroy;
  }
  public set noopOnDestroy(value: boolean | undefined) {
    this._noopOnDestroy = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // runtime - computed: false, optional: false, required: true
  private _runtime: string;
  public get runtime() {
    return this._runtime;
  }
  public set runtime(value: string) {
    this._runtime = value;
  }

  // runtime_api_version - computed: false, optional: true, required: false
  private _runtimeApiVersion?: string;
  public get runtimeApiVersion() {
    return this._runtimeApiVersion;
  }
  public set runtimeApiVersion(value: string | undefined) {
    this._runtimeApiVersion = value;
  }

  // service - computed: false, optional: false, required: true
  private _service: string;
  public get service() {
    return this._service;
  }
  public set service(value: string) {
    this._service = value;
  }

  // threadsafe - computed: false, optional: true, required: false
  private _threadsafe?: boolean;
  public get threadsafe() {
    return this._threadsafe;
  }
  public set threadsafe(value: boolean | undefined) {
    this._threadsafe = value;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string;
  public get versionId() {
    return this._versionId;
  }
  public set versionId(value: string | undefined) {
    this._versionId = value;
  }

  // automatic_scaling - computed: false, optional: true, required: false
  private _automaticScaling?: AppEngineStandardAppVersionAutomaticScaling[];
  public get automaticScaling() {
    return this._automaticScaling;
  }
  public set automaticScaling(value: AppEngineStandardAppVersionAutomaticScaling[] | undefined) {
    this._automaticScaling = value;
  }

  // basic_scaling - computed: false, optional: true, required: false
  private _basicScaling?: AppEngineStandardAppVersionBasicScaling[];
  public get basicScaling() {
    return this._basicScaling;
  }
  public set basicScaling(value: AppEngineStandardAppVersionBasicScaling[] | undefined) {
    this._basicScaling = value;
  }

  // deployment - computed: false, optional: false, required: true
  private _deployment: AppEngineStandardAppVersionDeployment[];
  public get deployment() {
    return this._deployment;
  }
  public set deployment(value: AppEngineStandardAppVersionDeployment[]) {
    this._deployment = value;
  }

  // entrypoint - computed: false, optional: true, required: false
  private _entrypoint?: AppEngineStandardAppVersionEntrypoint[];
  public get entrypoint() {
    return this._entrypoint;
  }
  public set entrypoint(value: AppEngineStandardAppVersionEntrypoint[] | undefined) {
    this._entrypoint = value;
  }

  // handlers - computed: false, optional: true, required: false
  private _handlers?: AppEngineStandardAppVersionHandlers[];
  public get handlers() {
    return this._handlers;
  }
  public set handlers(value: AppEngineStandardAppVersionHandlers[] | undefined) {
    this._handlers = value;
  }

  // libraries - computed: false, optional: true, required: false
  private _libraries?: AppEngineStandardAppVersionLibraries[];
  public get libraries() {
    return this._libraries;
  }
  public set libraries(value: AppEngineStandardAppVersionLibraries[] | undefined) {
    this._libraries = value;
  }

  // manual_scaling - computed: false, optional: true, required: false
  private _manualScaling?: AppEngineStandardAppVersionManualScaling[];
  public get manualScaling() {
    return this._manualScaling;
  }
  public set manualScaling(value: AppEngineStandardAppVersionManualScaling[] | undefined) {
    this._manualScaling = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppEngineStandardAppVersionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AppEngineStandardAppVersionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delete_service_on_destroy: this._deleteServiceOnDestroy,
      env_variables: this._envVariables,
      inbound_services: this._inboundServices,
      instance_class: this._instanceClass,
      noop_on_destroy: this._noopOnDestroy,
      project: this._project,
      runtime: this._runtime,
      runtime_api_version: this._runtimeApiVersion,
      service: this._service,
      threadsafe: this._threadsafe,
      version_id: this._versionId,
      automatic_scaling: this._automaticScaling,
      basic_scaling: this._basicScaling,
      deployment: this._deployment,
      entrypoint: this._entrypoint,
      handlers: this._handlers,
      libraries: this._libraries,
      manual_scaling: this._manualScaling,
      timeouts: this._timeouts,
    };
  }
}
