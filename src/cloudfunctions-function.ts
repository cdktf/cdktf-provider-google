// https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CloudfunctionsFunctionConfig extends TerraformMetaArguments {
  /** Memory (in MB), available to the function. Default value is 256MB. Allowed values are: 128MB, 256MB, 512MB, 1024MB, and 2048MB. */
  readonly availableMemoryMb?: number;
  /** Description of the function. */
  readonly description?: string;
  /** Name of the function that will be executed when the Google Cloud Function is triggered. */
  readonly entryPoint?: string;
  /** A set of key/value environment variable pairs to assign to the function. */
  readonly environmentVariables?: { [key: string]: string };
  /** URL which triggers function execution. Returned only if trigger_http is used. */
  readonly httpsTriggerUrl?: string;
  /** String value that controls what traffic can reach the function. Allowed values are ALLOW_ALL and ALLOW_INTERNAL_ONLY. Changes to this field will recreate the cloud function. */
  readonly ingressSettings?: string;
  /** A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements. */
  readonly labels?: { [key: string]: string };
  /** The limit on the maximum number of function instances that may coexist at a given time. */
  readonly maxInstances?: number;
  /** A user-defined name of the function. Function names must be unique globally. */
  readonly name: string;
  /** Project of the function. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** Region of function. Currently can be only "us-central1". If it is not provided, the provider region is used. */
  readonly region?: string;
  /** The runtime in which the function is going to run. Eg. "nodejs8", "nodejs10", "python37", "go111". */
  readonly runtime: string;
  /**  If provided, the self-provided service account to run the function with. */
  readonly serviceAccountEmail?: string;
  /** The GCS bucket containing the zip archive which contains the function. */
  readonly sourceArchiveBucket?: string;
  /** The source archive object (file) in archive bucket. */
  readonly sourceArchiveObject?: string;
  /** Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds. */
  readonly timeout?: number;
  /** Boolean variable. Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS. Endpoint is returned as https_trigger_url. Cannot be used with trigger_bucket and trigger_topic. */
  readonly triggerHttp?: boolean;
  /** The VPC Network Connector that this cloud function can connect to. It can be either the fully-qualified URI, or the short name of the network connector resource. The format of this field is projects/*\/locations/*\/connectors/*. */
  readonly vpcConnector?: string;
  /** The egress settings for the connector, controlling what traffic is diverted through it. Allowed values are ALL_TRAFFIC and PRIVATE_RANGES_ONLY. Defaults to PRIVATE_RANGES_ONLY. If unset, this field preserves the previously set value. */
  readonly vpcConnectorEgressSettings?: string;
  /** event_trigger block */
  readonly eventTrigger?: CloudfunctionsFunctionEventTrigger[];
  /** source_repository block */
  readonly sourceRepository?: CloudfunctionsFunctionSourceRepository[];
  /** timeouts block */
  readonly timeouts?: CloudfunctionsFunctionTimeouts;
}
export interface CloudfunctionsFunctionEventTriggerFailurePolicy {
  /** Whether the function should be retried on failure. Defaults to false. */
  readonly retry: boolean;
}
export interface CloudfunctionsFunctionEventTrigger {
  /** The type of event to observe. For example: "google.storage.object.finalize". See the documentation on calling Cloud Functions for a full reference of accepted triggers. */
  readonly eventType: string;
  /** The name or partial URI of the resource from which to observe events. For example, "myBucket" or "projects/my-project/topics/my-topic" */
  readonly resource: string;
  /** failure_policy block */
  readonly failurePolicy?: CloudfunctionsFunctionEventTriggerFailurePolicy[];
}
export interface CloudfunctionsFunctionSourceRepository {
  /** The URL pointing to the hosted repository where the function is defined. */
  readonly url: string;
}
export interface CloudfunctionsFunctionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

// Resource

export class CloudfunctionsFunction extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudfunctionsFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloudfunctions_function',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._availableMemoryMb = config.availableMemoryMb;
    this._description = config.description;
    this._entryPoint = config.entryPoint;
    this._environmentVariables = config.environmentVariables;
    this._httpsTriggerUrl = config.httpsTriggerUrl;
    this._ingressSettings = config.ingressSettings;
    this._labels = config.labels;
    this._maxInstances = config.maxInstances;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._runtime = config.runtime;
    this._serviceAccountEmail = config.serviceAccountEmail;
    this._sourceArchiveBucket = config.sourceArchiveBucket;
    this._sourceArchiveObject = config.sourceArchiveObject;
    this._timeout = config.timeout;
    this._triggerHttp = config.triggerHttp;
    this._vpcConnector = config.vpcConnector;
    this._vpcConnectorEgressSettings = config.vpcConnectorEgressSettings;
    this._eventTrigger = config.eventTrigger;
    this._sourceRepository = config.sourceRepository;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // available_memory_mb - computed: false, optional: true, required: false
  private _availableMemoryMb?: number;
  public get availableMemoryMb() {
    return this._availableMemoryMb;
  }
  public set availableMemoryMb(value: number | undefined) {
    this._availableMemoryMb = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // entry_point - computed: false, optional: true, required: false
  private _entryPoint?: string;
  public get entryPoint() {
    return this._entryPoint;
  }
  public set entryPoint(value: string | undefined) {
    this._entryPoint = value;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string };
  public get environmentVariables() {
    return this._environmentVariables;
  }
  public set environmentVariables(value: { [key: string]: string } | undefined) {
    this._environmentVariables = value;
  }

  // https_trigger_url - computed: true, optional: true, required: false
  private _httpsTriggerUrl?: string;
  public get httpsTriggerUrl() {
    return this._httpsTriggerUrl ?? this.getStringAttribute('https_trigger_url');
  }
  public set httpsTriggerUrl(value: string | undefined) {
    this._httpsTriggerUrl = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ingress_settings - computed: false, optional: true, required: false
  private _ingressSettings?: string;
  public get ingressSettings() {
    return this._ingressSettings;
  }
  public set ingressSettings(value: string | undefined) {
    this._ingressSettings = value;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // max_instances - computed: false, optional: true, required: false
  private _maxInstances?: number;
  public get maxInstances() {
    return this._maxInstances;
  }
  public set maxInstances(value: number | undefined) {
    this._maxInstances = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // runtime - computed: false, optional: false, required: true
  private _runtime: string;
  public get runtime() {
    return this._runtime;
  }
  public set runtime(value: string) {
    this._runtime = value;
  }

  // service_account_email - computed: true, optional: true, required: false
  private _serviceAccountEmail?: string;
  public get serviceAccountEmail() {
    return this._serviceAccountEmail ?? this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string | undefined) {
    this._serviceAccountEmail = value;
  }

  // source_archive_bucket - computed: false, optional: true, required: false
  private _sourceArchiveBucket?: string;
  public get sourceArchiveBucket() {
    return this._sourceArchiveBucket;
  }
  public set sourceArchiveBucket(value: string | undefined) {
    this._sourceArchiveBucket = value;
  }

  // source_archive_object - computed: false, optional: true, required: false
  private _sourceArchiveObject?: string;
  public get sourceArchiveObject() {
    return this._sourceArchiveObject;
  }
  public set sourceArchiveObject(value: string | undefined) {
    this._sourceArchiveObject = value;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number;
  public get timeout() {
    return this._timeout;
  }
  public set timeout(value: number | undefined) {
    this._timeout = value;
  }

  // trigger_http - computed: false, optional: true, required: false
  private _triggerHttp?: boolean;
  public get triggerHttp() {
    return this._triggerHttp;
  }
  public set triggerHttp(value: boolean | undefined) {
    this._triggerHttp = value;
  }

  // vpc_connector - computed: false, optional: true, required: false
  private _vpcConnector?: string;
  public get vpcConnector() {
    return this._vpcConnector;
  }
  public set vpcConnector(value: string | undefined) {
    this._vpcConnector = value;
  }

  // vpc_connector_egress_settings - computed: true, optional: true, required: false
  private _vpcConnectorEgressSettings?: string;
  public get vpcConnectorEgressSettings() {
    return this._vpcConnectorEgressSettings ?? this.getStringAttribute('vpc_connector_egress_settings');
  }
  public set vpcConnectorEgressSettings(value: string | undefined) {
    this._vpcConnectorEgressSettings = value;
  }

  // event_trigger - computed: false, optional: true, required: false
  private _eventTrigger?: CloudfunctionsFunctionEventTrigger[];
  public get eventTrigger() {
    return this._eventTrigger;
  }
  public set eventTrigger(value: CloudfunctionsFunctionEventTrigger[] | undefined) {
    this._eventTrigger = value;
  }

  // source_repository - computed: false, optional: true, required: false
  private _sourceRepository?: CloudfunctionsFunctionSourceRepository[];
  public get sourceRepository() {
    return this._sourceRepository;
  }
  public set sourceRepository(value: CloudfunctionsFunctionSourceRepository[] | undefined) {
    this._sourceRepository = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudfunctionsFunctionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CloudfunctionsFunctionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      available_memory_mb: this._availableMemoryMb,
      description: this._description,
      entry_point: this._entryPoint,
      environment_variables: this._environmentVariables,
      https_trigger_url: this._httpsTriggerUrl,
      ingress_settings: this._ingressSettings,
      labels: this._labels,
      max_instances: this._maxInstances,
      name: this._name,
      project: this._project,
      region: this._region,
      runtime: this._runtime,
      service_account_email: this._serviceAccountEmail,
      source_archive_bucket: this._sourceArchiveBucket,
      source_archive_object: this._sourceArchiveObject,
      timeout: this._timeout,
      trigger_http: this._triggerHttp,
      vpc_connector: this._vpcConnector,
      vpc_connector_egress_settings: this._vpcConnectorEgressSettings,
      event_trigger: this._eventTrigger,
      source_repository: this._sourceRepository,
      timeouts: this._timeouts,
    };
  }
}
