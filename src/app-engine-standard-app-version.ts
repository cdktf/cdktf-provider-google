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
  /** vpc_access_connector block */
  readonly vpcAccessConnector?: AppEngineStandardAppVersionVpcAccessConnector[];
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
export interface AppEngineStandardAppVersionVpcAccessConnector {
  /** Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1. */
  readonly name: string;
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
    this._vpcAccessConnector = config.vpcAccessConnector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_service_on_destroy - computed: false, optional: true, required: false
  private _deleteServiceOnDestroy?: boolean;
  public get deleteServiceOnDestroy() {
    return this.getBooleanAttribute('delete_service_on_destroy');
  }
  public set deleteServiceOnDestroy(value: boolean ) {
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
  private _envVariables?: { [key: string]: string };
  public get envVariables() {
    return this.interpolationForAttribute('env_variables') as any;
  }
  public set envVariables(value: { [key: string]: string } ) {
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
  private _noopOnDestroy?: boolean;
  public get noopOnDestroy() {
    return this.getBooleanAttribute('noop_on_destroy');
  }
  public set noopOnDestroy(value: boolean ) {
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
  private _threadsafe?: boolean;
  public get threadsafe() {
    return this.getBooleanAttribute('threadsafe');
  }
  public set threadsafe(value: boolean ) {
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
      vpc_access_connector: this._vpcAccessConnector,
    };
  }
}
