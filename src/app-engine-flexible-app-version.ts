// https://www.terraform.io/docs/providers/google/r/app_engine_flexible_app_version.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AppEngineFlexibleAppVersionConfig extends TerraformMetaArguments {
  /** Metadata settings that are supplied to this version to enable beta runtime features. */
  readonly betaSettings?: { [key: string]: string };
  /** Duration that static files should be cached by web proxies and browsers.
Only applicable if the corresponding StaticFilesHandler does not specify its own expiration time. */
  readonly defaultExpiration?: string;
  readonly deleteServiceOnDestroy?: boolean;
  /** Environment variables available to the application.  As these are not returned in the API request, Terraform will not detect any changes made outside of the Terraform config. */
  readonly envVariables?: { [key: string]: string };
  /** A list of the types of messages that this application is able to receive. Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"] */
  readonly inboundServices?: string[];
  /** Instance class that is used to run this version. Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
ManualScaling: B1, B2, B4, B8, B4_1G
Defaults to F1 for AutomaticScaling and B1 for ManualScaling. */
  readonly instanceClass?: string;
  /** Files that match this pattern will not be built into this version. Only applicable for Go runtimes. */
  readonly nobuildFilesRegex?: string;
  readonly noopOnDestroy?: boolean;
  readonly project?: string;
  /** Desired runtime. Example python27. */
  readonly runtime: string;
  /** The version of the API in the given runtime environment.
Please see the app.yaml reference for valid values at https://cloud.google.com/appengine/docs/standard//config/appref */
  readonly runtimeApiVersion?: string;
  /** The channel of the runtime to use. Only available for some runtimes. */
  readonly runtimeChannel?: string;
  /** The path or name of the app's main executable. */
  readonly runtimeMainExecutablePath?: string;
  /** AppEngine service resource */
  readonly service: string;
  /** Current serving status of this version. Only the versions with a SERVING status create instances and can be billed. Default value: "SERVING" Possible values: ["SERVING", "STOPPED"] */
  readonly servingStatus?: string;
  /** Relative name of the version within the service. For example, 'v1'. Version names can contain only lowercase letters, numbers, or hyphens.
Reserved names,"default", "latest", and any name with the prefix "ah-". */
  readonly versionId?: string;
  /** api_config block */
  readonly apiConfig?: AppEngineFlexibleAppVersionApiConfig[];
  /** automatic_scaling block */
  readonly automaticScaling?: AppEngineFlexibleAppVersionAutomaticScaling[];
  /** deployment block */
  readonly deployment?: AppEngineFlexibleAppVersionDeployment[];
  /** endpoints_api_service block */
  readonly endpointsApiService?: AppEngineFlexibleAppVersionEndpointsApiService[];
  /** entrypoint block */
  readonly entrypoint?: AppEngineFlexibleAppVersionEntrypoint[];
  /** handlers block */
  readonly handlers?: AppEngineFlexibleAppVersionHandlers[];
  /** liveness_check block */
  readonly livenessCheck: AppEngineFlexibleAppVersionLivenessCheck[];
  /** manual_scaling block */
  readonly manualScaling?: AppEngineFlexibleAppVersionManualScaling[];
  /** network block */
  readonly network?: AppEngineFlexibleAppVersionNetwork[];
  /** readiness_check block */
  readonly readinessCheck: AppEngineFlexibleAppVersionReadinessCheck[];
  /** resources block */
  readonly resources?: AppEngineFlexibleAppVersionResources[];
  /** timeouts block */
  readonly timeouts?: AppEngineFlexibleAppVersionTimeouts;
  /** vpc_access_connector block */
  readonly vpcAccessConnector?: AppEngineFlexibleAppVersionVpcAccessConnector[];
}
export interface AppEngineFlexibleAppVersionApiConfig {
  /** Action to take when users access resources that require authentication. Default value: "AUTH_FAIL_ACTION_REDIRECT" Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"] */
  readonly authFailAction?: string;
  /** Level of login required to access this resource. Default value: "LOGIN_OPTIONAL" Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"] */
  readonly login?: string;
  /** Path to the script from the application root directory. */
  readonly script: string;
  /** Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"] */
  readonly securityLevel?: string;
  /** URL to serve the endpoint at. */
  readonly url?: string;
}
export interface AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization {
  /** Period of time over which CPU utilization is calculated. */
  readonly aggregationWindowLength?: string;
  /** Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1. */
  readonly targetUtilization: number;
}
export interface AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization {
  /** Target bytes read per second. */
  readonly targetReadBytesPerSecond?: number;
  /** Target ops read per seconds. */
  readonly targetReadOpsPerSecond?: number;
  /** Target bytes written per second. */
  readonly targetWriteBytesPerSecond?: number;
  /** Target ops written per second. */
  readonly targetWriteOpsPerSecond?: number;
}
export interface AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization {
  /** Target bytes received per second. */
  readonly targetReceivedBytesPerSecond?: number;
  /** Target packets received per second. */
  readonly targetReceivedPacketsPerSecond?: number;
  /** Target bytes sent per second. */
  readonly targetSentBytesPerSecond?: number;
  /** Target packets sent per second. */
  readonly targetSentPacketsPerSecond?: number;
}
export interface AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization {
  /** Target number of concurrent requests. */
  readonly targetConcurrentRequests?: number;
  /** Target requests per second. */
  readonly targetRequestCountPerSecond?: string;
}
export interface AppEngineFlexibleAppVersionAutomaticScaling {
  /** The time period that the Autoscaler should wait before it starts collecting information from a new instance.
This prevents the autoscaler from collecting information when the instance is initializing,
during which the collected usage would not be reliable. Default: 120s */
  readonly coolDownPeriod?: string;
  /** Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.

Defaults to a runtime-specific value. */
  readonly maxConcurrentRequests?: number;
  /** Maximum number of idle instances that should be maintained for this version. */
  readonly maxIdleInstances?: number;
  /** Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it. */
  readonly maxPendingLatency?: string;
  /** Maximum number of instances that should be started to handle requests for this version. Default: 20 */
  readonly maxTotalInstances?: number;
  /** Minimum number of idle instances that should be maintained for this version. Only applicable for the default version of a service. */
  readonly minIdleInstances?: number;
  /** Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it. */
  readonly minPendingLatency?: string;
  /** Minimum number of running instances that should be maintained for this version. Default: 2 */
  readonly minTotalInstances?: number;
  /** cpu_utilization block */
  readonly cpuUtilization: AppEngineFlexibleAppVersionAutomaticScalingCpuUtilization[];
  /** disk_utilization block */
  readonly diskUtilization?: AppEngineFlexibleAppVersionAutomaticScalingDiskUtilization[];
  /** network_utilization block */
  readonly networkUtilization?: AppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization[];
  /** request_utilization block */
  readonly requestUtilization?: AppEngineFlexibleAppVersionAutomaticScalingRequestUtilization[];
}
export interface AppEngineFlexibleAppVersionDeploymentCloudBuildOptions {
  /** Path to the yaml file used in deployment, used to determine runtime configuration details. */
  readonly appYamlPath: string;
  /** The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". */
  readonly cloudBuildTimeout?: string;
}
export interface AppEngineFlexibleAppVersionDeploymentContainer {
  /** URI to the hosted container image in Google Container Registry. The URI must be fully qualified and include a tag or digest.
Examples: "gcr.io/my-project/image:tag" or "gcr.io/my-project/image@digest" */
  readonly image: string;
}
export interface AppEngineFlexibleAppVersionDeploymentFiles {
  readonly name: string;
  /** SHA1 checksum of the file */
  readonly sha1Sum?: string;
  /** Source URL */
  readonly sourceUrl: string;
}
export interface AppEngineFlexibleAppVersionDeploymentZip {
  /** files count */
  readonly filesCount?: number;
  /** Source URL */
  readonly sourceUrl: string;
}
export interface AppEngineFlexibleAppVersionDeployment {
  /** cloud_build_options block */
  readonly cloudBuildOptions?: AppEngineFlexibleAppVersionDeploymentCloudBuildOptions[];
  /** container block */
  readonly container?: AppEngineFlexibleAppVersionDeploymentContainer[];
  /** files block */
  readonly files?: AppEngineFlexibleAppVersionDeploymentFiles[];
  /** zip block */
  readonly zip?: AppEngineFlexibleAppVersionDeploymentZip[];
}
export interface AppEngineFlexibleAppVersionEndpointsApiService {
  /** Endpoints service configuration ID as specified by the Service Management API. For example "2016-09-19r1".

By default, the rollout strategy for Endpoints is "FIXED". This means that Endpoints starts up with a particular configuration ID.
When a new configuration is rolled out, Endpoints must be given the new configuration ID. The configId field is used to give the configuration ID
and is required in this case.

Endpoints also has a rollout strategy called "MANAGED". When using this, Endpoints fetches the latest configuration and does not need
the configuration ID. In this case, configId must be omitted. */
  readonly configId?: string;
  /** Enable or disable trace sampling. By default, this is set to false for enabled. */
  readonly disableTraceSampling?: boolean;
  /** Endpoints service name which is the name of the "service" resource in the Service Management API.
For example "myapi.endpoints.myproject.cloud.goog" */
  readonly name: string;
  /** Endpoints rollout strategy. If FIXED, configId must be specified. If MANAGED, configId must be omitted. Default value: "FIXED" Possible values: ["FIXED", "MANAGED"] */
  readonly rolloutStrategy?: string;
}
export interface AppEngineFlexibleAppVersionEntrypoint {
  /** The format should be a shell command that can be fed to bash -c. */
  readonly shell: string;
}
export interface AppEngineFlexibleAppVersionHandlersScript {
  /** Path to the script from the application root directory. */
  readonly scriptPath: string;
}
export interface AppEngineFlexibleAppVersionHandlersStaticFiles {
  /** Whether files should also be uploaded as code data. By default, files declared in static file handlers are
uploaded as static data and are only served to end users; they cannot be read by the application. If enabled,
uploads are charged against both your code and static data storage resource quotas. */
  readonly applicationReadable?: boolean;
  /** Time a static file served by this handler should be cached by web proxies and browsers.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".
Default is '0s' */
  readonly expiration?: string;
  /** HTTP headers to use for all responses from these URLs.
An object containing a list of "key:value" value pairs.". */
  readonly httpHeaders?: { [key: string]: string };
  /** MIME type used to serve all files served by this handler.
Defaults to file-specific MIME types, which are derived from each file's filename extension. */
  readonly mimeType?: string;
  /** Path to the static files matched by the URL pattern, from the application root directory.
The path can refer to text matched in groupings in the URL pattern. */
  readonly path?: string;
  /** Whether this handler should match the request if the file referenced by the handler does not exist. */
  readonly requireMatchingFile?: boolean;
  /** Regular expression that matches the file paths for all files that should be referenced by this handler. */
  readonly uploadPathRegex?: string;
}
export interface AppEngineFlexibleAppVersionHandlers {
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
  readonly script?: AppEngineFlexibleAppVersionHandlersScript[];
  /** static_files block */
  readonly staticFiles?: AppEngineFlexibleAppVersionHandlersStaticFiles[];
}
export interface AppEngineFlexibleAppVersionLivenessCheck {
  /** Interval between health checks. */
  readonly checkInterval?: string;
  /** Number of consecutive failed checks required before considering the VM unhealthy. Default: 4. */
  readonly failureThreshold?: number;
  /** Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com" */
  readonly host?: string;
  /** The initial delay before starting to execute the checks. Default: "300s" */
  readonly initialDelay?: string;
  /** The request path. */
  readonly path: string;
  /** Number of consecutive successful checks required before considering the VM healthy. Default: 2. */
  readonly successThreshold?: number;
  /** Time before the check is considered failed. Default: "4s" */
  readonly timeout?: string;
}
export interface AppEngineFlexibleAppVersionManualScaling {
  /** Number of instances to assign to the service at the start.

**Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection. */
  readonly instances: number;
}
export interface AppEngineFlexibleAppVersionNetwork {
  /** List of ports, or port pairs, to forward from the virtual machine to the application container. */
  readonly forwardedPorts?: string[];
  /** Tag to apply to the instance during creation. */
  readonly instanceTag?: string;
  /** Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path. */
  readonly name: string;
  /** Enable session affinity. */
  readonly sessionAffinity?: boolean;
  /** Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path.

If the network that the instance is being created in is a Legacy network, then the IP address is allocated from the IPv4Range.
If the network that the instance is being created in is an auto Subnet Mode Network, then only network name should be specified (not the subnetworkName) and the IP address is created from the IPCidrRange of the subnetwork that exists in that zone for that network.
If the network that the instance is being created in is a custom Subnet Mode Network, then the subnetworkName must be specified and the IP address is created from the IPCidrRange of the subnetwork.
If specified, the subnetwork must exist in the same region as the App Engine flexible environment application. */
  readonly subnetwork?: string;
}
export interface AppEngineFlexibleAppVersionReadinessCheck {
  /** A maximum time limit on application initialization, measured from moment the application successfully
replies to a healthcheck until it is ready to serve traffic. Default: "300s" */
  readonly appStartTimeout?: string;
  /** Interval between health checks.  Default: "5s". */
  readonly checkInterval?: string;
  /** Number of consecutive failed checks required before removing traffic. Default: 2. */
  readonly failureThreshold?: number;
  /** Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com" */
  readonly host?: string;
  /** The request path. */
  readonly path: string;
  /** Number of consecutive successful checks required before receiving traffic. Default: 2. */
  readonly successThreshold?: number;
  /** Time before the check is considered failed. Default: "4s" */
  readonly timeout?: string;
}
export interface AppEngineFlexibleAppVersionResourcesVolumes {
  /** Unique name for the volume. */
  readonly name: string;
  /** Volume size in gigabytes. */
  readonly sizeGb: number;
  /** Underlying volume type, e.g. 'tmpfs'. */
  readonly volumeType: string;
}
export interface AppEngineFlexibleAppVersionResources {
  /** Number of CPU cores needed. */
  readonly cpu?: number;
  /** Disk size (GB) needed. */
  readonly diskGb?: number;
  /** Memory (GB) needed. */
  readonly memoryGb?: number;
  /** volumes block */
  readonly volumes?: AppEngineFlexibleAppVersionResourcesVolumes[];
}
export interface AppEngineFlexibleAppVersionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}
export interface AppEngineFlexibleAppVersionVpcAccessConnector {
  /** Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1. */
  readonly name: string;
}

// Resource

export class AppEngineFlexibleAppVersion extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AppEngineFlexibleAppVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_app_engine_flexible_app_version',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._betaSettings = config.betaSettings;
    this._defaultExpiration = config.defaultExpiration;
    this._deleteServiceOnDestroy = config.deleteServiceOnDestroy;
    this._envVariables = config.envVariables;
    this._inboundServices = config.inboundServices;
    this._instanceClass = config.instanceClass;
    this._nobuildFilesRegex = config.nobuildFilesRegex;
    this._noopOnDestroy = config.noopOnDestroy;
    this._project = config.project;
    this._runtime = config.runtime;
    this._runtimeApiVersion = config.runtimeApiVersion;
    this._runtimeChannel = config.runtimeChannel;
    this._runtimeMainExecutablePath = config.runtimeMainExecutablePath;
    this._service = config.service;
    this._servingStatus = config.servingStatus;
    this._versionId = config.versionId;
    this._apiConfig = config.apiConfig;
    this._automaticScaling = config.automaticScaling;
    this._deployment = config.deployment;
    this._endpointsApiService = config.endpointsApiService;
    this._entrypoint = config.entrypoint;
    this._handlers = config.handlers;
    this._livenessCheck = config.livenessCheck;
    this._manualScaling = config.manualScaling;
    this._network = config.network;
    this._readinessCheck = config.readinessCheck;
    this._resources = config.resources;
    this._timeouts = config.timeouts;
    this._vpcAccessConnector = config.vpcAccessConnector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // beta_settings - computed: false, optional: true, required: false
  private _betaSettings?: { [key: string]: string };
  public get betaSettings() {
    return this._betaSettings;
  }
  public set betaSettings(value: { [key: string]: string } | undefined) {
    this._betaSettings = value;
  }

  // default_expiration - computed: false, optional: true, required: false
  private _defaultExpiration?: string;
  public get defaultExpiration() {
    return this._defaultExpiration;
  }
  public set defaultExpiration(value: string | undefined) {
    this._defaultExpiration = value;
  }

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

  // instance_class - computed: false, optional: true, required: false
  private _instanceClass?: string;
  public get instanceClass() {
    return this._instanceClass;
  }
  public set instanceClass(value: string | undefined) {
    this._instanceClass = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // nobuild_files_regex - computed: false, optional: true, required: false
  private _nobuildFilesRegex?: string;
  public get nobuildFilesRegex() {
    return this._nobuildFilesRegex;
  }
  public set nobuildFilesRegex(value: string | undefined) {
    this._nobuildFilesRegex = value;
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

  // runtime_api_version - computed: true, optional: true, required: false
  private _runtimeApiVersion?: string;
  public get runtimeApiVersion() {
    return this._runtimeApiVersion ?? this.getStringAttribute('runtime_api_version');
  }
  public set runtimeApiVersion(value: string | undefined) {
    this._runtimeApiVersion = value;
  }

  // runtime_channel - computed: false, optional: true, required: false
  private _runtimeChannel?: string;
  public get runtimeChannel() {
    return this._runtimeChannel;
  }
  public set runtimeChannel(value: string | undefined) {
    this._runtimeChannel = value;
  }

  // runtime_main_executable_path - computed: false, optional: true, required: false
  private _runtimeMainExecutablePath?: string;
  public get runtimeMainExecutablePath() {
    return this._runtimeMainExecutablePath;
  }
  public set runtimeMainExecutablePath(value: string | undefined) {
    this._runtimeMainExecutablePath = value;
  }

  // service - computed: false, optional: false, required: true
  private _service: string;
  public get service() {
    return this._service;
  }
  public set service(value: string) {
    this._service = value;
  }

  // serving_status - computed: false, optional: true, required: false
  private _servingStatus?: string;
  public get servingStatus() {
    return this._servingStatus;
  }
  public set servingStatus(value: string | undefined) {
    this._servingStatus = value;
  }

  // version_id - computed: false, optional: true, required: false
  private _versionId?: string;
  public get versionId() {
    return this._versionId;
  }
  public set versionId(value: string | undefined) {
    this._versionId = value;
  }

  // api_config - computed: false, optional: true, required: false
  private _apiConfig?: AppEngineFlexibleAppVersionApiConfig[];
  public get apiConfig() {
    return this._apiConfig;
  }
  public set apiConfig(value: AppEngineFlexibleAppVersionApiConfig[] | undefined) {
    this._apiConfig = value;
  }

  // automatic_scaling - computed: false, optional: true, required: false
  private _automaticScaling?: AppEngineFlexibleAppVersionAutomaticScaling[];
  public get automaticScaling() {
    return this._automaticScaling;
  }
  public set automaticScaling(value: AppEngineFlexibleAppVersionAutomaticScaling[] | undefined) {
    this._automaticScaling = value;
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment?: AppEngineFlexibleAppVersionDeployment[];
  public get deployment() {
    return this._deployment;
  }
  public set deployment(value: AppEngineFlexibleAppVersionDeployment[] | undefined) {
    this._deployment = value;
  }

  // endpoints_api_service - computed: false, optional: true, required: false
  private _endpointsApiService?: AppEngineFlexibleAppVersionEndpointsApiService[];
  public get endpointsApiService() {
    return this._endpointsApiService;
  }
  public set endpointsApiService(value: AppEngineFlexibleAppVersionEndpointsApiService[] | undefined) {
    this._endpointsApiService = value;
  }

  // entrypoint - computed: false, optional: true, required: false
  private _entrypoint?: AppEngineFlexibleAppVersionEntrypoint[];
  public get entrypoint() {
    return this._entrypoint;
  }
  public set entrypoint(value: AppEngineFlexibleAppVersionEntrypoint[] | undefined) {
    this._entrypoint = value;
  }

  // handlers - computed: false, optional: true, required: false
  private _handlers?: AppEngineFlexibleAppVersionHandlers[];
  public get handlers() {
    return this._handlers;
  }
  public set handlers(value: AppEngineFlexibleAppVersionHandlers[] | undefined) {
    this._handlers = value;
  }

  // liveness_check - computed: false, optional: false, required: true
  private _livenessCheck: AppEngineFlexibleAppVersionLivenessCheck[];
  public get livenessCheck() {
    return this._livenessCheck;
  }
  public set livenessCheck(value: AppEngineFlexibleAppVersionLivenessCheck[]) {
    this._livenessCheck = value;
  }

  // manual_scaling - computed: false, optional: true, required: false
  private _manualScaling?: AppEngineFlexibleAppVersionManualScaling[];
  public get manualScaling() {
    return this._manualScaling;
  }
  public set manualScaling(value: AppEngineFlexibleAppVersionManualScaling[] | undefined) {
    this._manualScaling = value;
  }

  // network - computed: false, optional: true, required: false
  private _network?: AppEngineFlexibleAppVersionNetwork[];
  public get network() {
    return this._network;
  }
  public set network(value: AppEngineFlexibleAppVersionNetwork[] | undefined) {
    this._network = value;
  }

  // readiness_check - computed: false, optional: false, required: true
  private _readinessCheck: AppEngineFlexibleAppVersionReadinessCheck[];
  public get readinessCheck() {
    return this._readinessCheck;
  }
  public set readinessCheck(value: AppEngineFlexibleAppVersionReadinessCheck[]) {
    this._readinessCheck = value;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: AppEngineFlexibleAppVersionResources[];
  public get resources() {
    return this._resources;
  }
  public set resources(value: AppEngineFlexibleAppVersionResources[] | undefined) {
    this._resources = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppEngineFlexibleAppVersionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AppEngineFlexibleAppVersionTimeouts | undefined) {
    this._timeouts = value;
  }

  // vpc_access_connector - computed: false, optional: true, required: false
  private _vpcAccessConnector?: AppEngineFlexibleAppVersionVpcAccessConnector[];
  public get vpcAccessConnector() {
    return this._vpcAccessConnector;
  }
  public set vpcAccessConnector(value: AppEngineFlexibleAppVersionVpcAccessConnector[] | undefined) {
    this._vpcAccessConnector = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      beta_settings: this._betaSettings,
      default_expiration: this._defaultExpiration,
      delete_service_on_destroy: this._deleteServiceOnDestroy,
      env_variables: this._envVariables,
      inbound_services: this._inboundServices,
      instance_class: this._instanceClass,
      nobuild_files_regex: this._nobuildFilesRegex,
      noop_on_destroy: this._noopOnDestroy,
      project: this._project,
      runtime: this._runtime,
      runtime_api_version: this._runtimeApiVersion,
      runtime_channel: this._runtimeChannel,
      runtime_main_executable_path: this._runtimeMainExecutablePath,
      service: this._service,
      serving_status: this._servingStatus,
      version_id: this._versionId,
      api_config: this._apiConfig,
      automatic_scaling: this._automaticScaling,
      deployment: this._deployment,
      endpoints_api_service: this._endpointsApiService,
      entrypoint: this._entrypoint,
      handlers: this._handlers,
      liveness_check: this._livenessCheck,
      manual_scaling: this._manualScaling,
      network: this._network,
      readiness_check: this._readinessCheck,
      resources: this._resources,
      timeouts: this._timeouts,
      vpc_access_connector: this._vpcAccessConnector,
    };
  }
}
