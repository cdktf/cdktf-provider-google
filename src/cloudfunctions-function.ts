// https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfunctionsFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Memory (in MB), available to the function. Default value is 256. Possible values include 128, 256, 512, 1024, etc.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#available_memory_mb CloudfunctionsFunction#available_memory_mb}
  */
  readonly availableMemoryMb?: number;
  /**
  *  A set of key/value environment variable pairs available during build time.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#build_environment_variables CloudfunctionsFunction#build_environment_variables}
  */
  readonly buildEnvironmentVariables?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Description of the function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#description CloudfunctionsFunction#description}
  */
  readonly description?: string;
  /**
  * Name of the function that will be executed when the Google Cloud Function is triggered.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#entry_point CloudfunctionsFunction#entry_point}
  */
  readonly entryPoint?: string;
  /**
  * A set of key/value environment variable pairs to assign to the function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#environment_variables CloudfunctionsFunction#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * URL which triggers function execution. Returned only if trigger_http is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#https_trigger_url CloudfunctionsFunction#https_trigger_url}
  */
  readonly httpsTriggerUrl?: string;
  /**
  * String value that controls what traffic can reach the function. Allowed values are ALLOW_ALL and ALLOW_INTERNAL_ONLY. Changes to this field will recreate the cloud function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#ingress_settings CloudfunctionsFunction#ingress_settings}
  */
  readonly ingressSettings?: string;
  /**
  * A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#labels CloudfunctionsFunction#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The limit on the maximum number of function instances that may coexist at a given time.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#max_instances CloudfunctionsFunction#max_instances}
  */
  readonly maxInstances?: number;
  /**
  * A user-defined name of the function. Function names must be unique globally.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#name CloudfunctionsFunction#name}
  */
  readonly name: string;
  /**
  * Project of the function. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#project CloudfunctionsFunction#project}
  */
  readonly project?: string;
  /**
  * Region of function. If it is not provided, the provider region is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#region CloudfunctionsFunction#region}
  */
  readonly region?: string;
  /**
  * The runtime in which the function is going to run. Eg. "nodejs8", "nodejs10", "python37", "go111".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#runtime CloudfunctionsFunction#runtime}
  */
  readonly runtime: string;
  /**
  *  If provided, the self-provided service account to run the function with.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#service_account_email CloudfunctionsFunction#service_account_email}
  */
  readonly serviceAccountEmail?: string;
  /**
  * The GCS bucket containing the zip archive which contains the function.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#source_archive_bucket CloudfunctionsFunction#source_archive_bucket}
  */
  readonly sourceArchiveBucket?: string;
  /**
  * The source archive object (file) in archive bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#source_archive_object CloudfunctionsFunction#source_archive_object}
  */
  readonly sourceArchiveObject?: string;
  /**
  * Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#timeout CloudfunctionsFunction#timeout}
  */
  readonly timeout?: number;
  /**
  * Boolean variable. Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS. Endpoint is returned as https_trigger_url. Cannot be used with trigger_bucket and trigger_topic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#trigger_http CloudfunctionsFunction#trigger_http}
  */
  readonly triggerHttp?: boolean | cdktf.IResolvable;
  /**
  * The VPC Network Connector that this cloud function can connect to. It can be either the fully-qualified URI, or the short name of the network connector resource. The format of this field is projects/*\/locations/*\/connectors/*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#vpc_connector CloudfunctionsFunction#vpc_connector}
  */
  readonly vpcConnector?: string;
  /**
  * The egress settings for the connector, controlling what traffic is diverted through it. Allowed values are ALL_TRAFFIC and PRIVATE_RANGES_ONLY. Defaults to PRIVATE_RANGES_ONLY. If unset, this field preserves the previously set value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#vpc_connector_egress_settings CloudfunctionsFunction#vpc_connector_egress_settings}
  */
  readonly vpcConnectorEgressSettings?: string;
  /**
  * event_trigger block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#event_trigger CloudfunctionsFunction#event_trigger}
  */
  readonly eventTrigger?: CloudfunctionsFunctionEventTrigger;
  /**
  * source_repository block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#source_repository CloudfunctionsFunction#source_repository}
  */
  readonly sourceRepository?: CloudfunctionsFunctionSourceRepository;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#timeouts CloudfunctionsFunction#timeouts}
  */
  readonly timeouts?: CloudfunctionsFunctionTimeouts;
}
export interface CloudfunctionsFunctionEventTriggerFailurePolicy {
  /**
  * Whether the function should be retried on failure. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#retry CloudfunctionsFunction#retry}
  */
  readonly retry: boolean | cdktf.IResolvable;
}

function cloudfunctionsFunctionEventTriggerFailurePolicyToTerraform(struct?: CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference | CloudfunctionsFunctionEventTriggerFailurePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retry: cdktf.booleanToTerraform(struct!.retry),
  }
}

export class CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // retry - computed: false, optional: false, required: true
  private _retry?: boolean | cdktf.IResolvable; 
  public get retry() {
    return this.getBooleanAttribute('retry') as any;
  }
  public set retry(value: boolean | cdktf.IResolvable) {
    this._retry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry
  }
}
export interface CloudfunctionsFunctionEventTrigger {
  /**
  * The type of event to observe. For example: "google.storage.object.finalize". See the documentation on calling Cloud Functions for a full reference of accepted triggers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#event_type CloudfunctionsFunction#event_type}
  */
  readonly eventType: string;
  /**
  * The name or partial URI of the resource from which to observe events. For example, "myBucket" or "projects/my-project/topics/my-topic"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#resource CloudfunctionsFunction#resource}
  */
  readonly resource: string;
  /**
  * failure_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#failure_policy CloudfunctionsFunction#failure_policy}
  */
  readonly failurePolicy?: CloudfunctionsFunctionEventTriggerFailurePolicy;
}

function cloudfunctionsFunctionEventTriggerToTerraform(struct?: CloudfunctionsFunctionEventTriggerOutputReference | CloudfunctionsFunctionEventTrigger): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    resource: cdktf.stringToTerraform(struct!.resource),
    failure_policy: cloudfunctionsFunctionEventTriggerFailurePolicyToTerraform(struct!.failurePolicy),
  }
}

export class CloudfunctionsFunctionEventTriggerOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource
  }

  // failure_policy - computed: false, optional: true, required: false
  private _failurePolicy?: CloudfunctionsFunctionEventTriggerFailurePolicy | undefined; 
  private __failurePolicyOutput = new CloudfunctionsFunctionEventTriggerFailurePolicyOutputReference(this as any, "failure_policy", true);
  public get failurePolicy() {
    return this.__failurePolicyOutput;
  }
  public putFailurePolicy(value: CloudfunctionsFunctionEventTriggerFailurePolicy | undefined) {
    this._failurePolicy = value;
  }
  public resetFailurePolicy() {
    this._failurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failurePolicyInput() {
    return this._failurePolicy
  }
}
export interface CloudfunctionsFunctionSourceRepository {
  /**
  * The URL pointing to the hosted repository where the function is defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#url CloudfunctionsFunction#url}
  */
  readonly url: string;
}

function cloudfunctionsFunctionSourceRepositoryToTerraform(struct?: CloudfunctionsFunctionSourceRepositoryOutputReference | CloudfunctionsFunctionSourceRepository): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class CloudfunctionsFunctionSourceRepositoryOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url
  }
}
export interface CloudfunctionsFunctionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#create CloudfunctionsFunction#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#delete CloudfunctionsFunction#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#read CloudfunctionsFunction#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html#update CloudfunctionsFunction#update}
  */
  readonly update?: string;
}

function cloudfunctionsFunctionTimeoutsToTerraform(struct?: CloudfunctionsFunctionTimeoutsOutputReference | CloudfunctionsFunctionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class CloudfunctionsFunctionTimeoutsOutputReference extends cdktf.ComplexObject {
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

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html google_cloudfunctions_function}
*/
export class CloudfunctionsFunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_cloudfunctions_function";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/cloudfunctions_function.html google_cloudfunctions_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfunctionsFunctionConfig
  */
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
    this._buildEnvironmentVariables = config.buildEnvironmentVariables;
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
  private _availableMemoryMb?: number | undefined; 
  public get availableMemoryMb() {
    return this.getNumberAttribute('available_memory_mb');
  }
  public set availableMemoryMb(value: number | undefined) {
    this._availableMemoryMb = value;
  }
  public resetAvailableMemoryMb() {
    this._availableMemoryMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availableMemoryMbInput() {
    return this._availableMemoryMb
  }

  // build_environment_variables - computed: false, optional: true, required: false
  private _buildEnvironmentVariables?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get buildEnvironmentVariables() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('build_environment_variables') as any;
  }
  public set buildEnvironmentVariables(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._buildEnvironmentVariables = value;
  }
  public resetBuildEnvironmentVariables() {
    this._buildEnvironmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildEnvironmentVariablesInput() {
    return this._buildEnvironmentVariables
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

  // entry_point - computed: false, optional: true, required: false
  private _entryPoint?: string | undefined; 
  public get entryPoint() {
    return this.getStringAttribute('entry_point');
  }
  public set entryPoint(value: string | undefined) {
    this._entryPoint = value;
  }
  public resetEntryPoint() {
    this._entryPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryPointInput() {
    return this._entryPoint
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get environmentVariables() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('environment_variables') as any;
  }
  public set environmentVariables(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables
  }

  // https_trigger_url - computed: true, optional: true, required: false
  private _httpsTriggerUrl?: string | undefined; 
  public get httpsTriggerUrl() {
    return this.getStringAttribute('https_trigger_url');
  }
  public set httpsTriggerUrl(value: string | undefined) {
    this._httpsTriggerUrl = value;
  }
  public resetHttpsTriggerUrl() {
    this._httpsTriggerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsTriggerUrlInput() {
    return this._httpsTriggerUrl
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress_settings - computed: false, optional: true, required: false
  private _ingressSettings?: string | undefined; 
  public get ingressSettings() {
    return this.getStringAttribute('ingress_settings');
  }
  public set ingressSettings(value: string | undefined) {
    this._ingressSettings = value;
  }
  public resetIngressSettings() {
    this._ingressSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressSettingsInput() {
    return this._ingressSettings
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // max_instances - computed: false, optional: true, required: false
  private _maxInstances?: number | undefined; 
  public get maxInstances() {
    return this.getNumberAttribute('max_instances');
  }
  public set maxInstances(value: number | undefined) {
    this._maxInstances = value;
  }
  public resetMaxInstances() {
    this._maxInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstancesInput() {
    return this._maxInstances
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
    return this._name
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

  // region - computed: true, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // runtime - computed: false, optional: false, required: true
  private _runtime?: string; 
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

  // service_account_email - computed: true, optional: true, required: false
  private _serviceAccountEmail?: string | undefined; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string | undefined) {
    this._serviceAccountEmail = value;
  }
  public resetServiceAccountEmail() {
    this._serviceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail
  }

  // source_archive_bucket - computed: false, optional: true, required: false
  private _sourceArchiveBucket?: string | undefined; 
  public get sourceArchiveBucket() {
    return this.getStringAttribute('source_archive_bucket');
  }
  public set sourceArchiveBucket(value: string | undefined) {
    this._sourceArchiveBucket = value;
  }
  public resetSourceArchiveBucket() {
    this._sourceArchiveBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArchiveBucketInput() {
    return this._sourceArchiveBucket
  }

  // source_archive_object - computed: false, optional: true, required: false
  private _sourceArchiveObject?: string | undefined; 
  public get sourceArchiveObject() {
    return this.getStringAttribute('source_archive_object');
  }
  public set sourceArchiveObject(value: string | undefined) {
    this._sourceArchiveObject = value;
  }
  public resetSourceArchiveObject() {
    this._sourceArchiveObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceArchiveObjectInput() {
    return this._sourceArchiveObject
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number | undefined; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }

  // trigger_http - computed: false, optional: true, required: false
  private _triggerHttp?: boolean | cdktf.IResolvable | undefined; 
  public get triggerHttp() {
    return this.getBooleanAttribute('trigger_http') as any;
  }
  public set triggerHttp(value: boolean | cdktf.IResolvable | undefined) {
    this._triggerHttp = value;
  }
  public resetTriggerHttp() {
    this._triggerHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerHttpInput() {
    return this._triggerHttp
  }

  // vpc_connector - computed: false, optional: true, required: false
  private _vpcConnector?: string | undefined; 
  public get vpcConnector() {
    return this.getStringAttribute('vpc_connector');
  }
  public set vpcConnector(value: string | undefined) {
    this._vpcConnector = value;
  }
  public resetVpcConnector() {
    this._vpcConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectorInput() {
    return this._vpcConnector
  }

  // vpc_connector_egress_settings - computed: true, optional: true, required: false
  private _vpcConnectorEgressSettings?: string | undefined; 
  public get vpcConnectorEgressSettings() {
    return this.getStringAttribute('vpc_connector_egress_settings');
  }
  public set vpcConnectorEgressSettings(value: string | undefined) {
    this._vpcConnectorEgressSettings = value;
  }
  public resetVpcConnectorEgressSettings() {
    this._vpcConnectorEgressSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcConnectorEgressSettingsInput() {
    return this._vpcConnectorEgressSettings
  }

  // event_trigger - computed: false, optional: true, required: false
  private _eventTrigger?: CloudfunctionsFunctionEventTrigger | undefined; 
  private __eventTriggerOutput = new CloudfunctionsFunctionEventTriggerOutputReference(this as any, "event_trigger", true);
  public get eventTrigger() {
    return this.__eventTriggerOutput;
  }
  public putEventTrigger(value: CloudfunctionsFunctionEventTrigger | undefined) {
    this._eventTrigger = value;
  }
  public resetEventTrigger() {
    this._eventTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTriggerInput() {
    return this._eventTrigger
  }

  // source_repository - computed: false, optional: true, required: false
  private _sourceRepository?: CloudfunctionsFunctionSourceRepository | undefined; 
  private __sourceRepositoryOutput = new CloudfunctionsFunctionSourceRepositoryOutputReference(this as any, "source_repository", true);
  public get sourceRepository() {
    return this.__sourceRepositoryOutput;
  }
  public putSourceRepository(value: CloudfunctionsFunctionSourceRepository | undefined) {
    this._sourceRepository = value;
  }
  public resetSourceRepository() {
    this._sourceRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceRepositoryInput() {
    return this._sourceRepository
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudfunctionsFunctionTimeouts | undefined; 
  private __timeoutsOutput = new CloudfunctionsFunctionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: CloudfunctionsFunctionTimeouts | undefined) {
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
      available_memory_mb: cdktf.numberToTerraform(this._availableMemoryMb),
      build_environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._buildEnvironmentVariables),
      description: cdktf.stringToTerraform(this._description),
      entry_point: cdktf.stringToTerraform(this._entryPoint),
      environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._environmentVariables),
      https_trigger_url: cdktf.stringToTerraform(this._httpsTriggerUrl),
      ingress_settings: cdktf.stringToTerraform(this._ingressSettings),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      max_instances: cdktf.numberToTerraform(this._maxInstances),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      runtime: cdktf.stringToTerraform(this._runtime),
      service_account_email: cdktf.stringToTerraform(this._serviceAccountEmail),
      source_archive_bucket: cdktf.stringToTerraform(this._sourceArchiveBucket),
      source_archive_object: cdktf.stringToTerraform(this._sourceArchiveObject),
      timeout: cdktf.numberToTerraform(this._timeout),
      trigger_http: cdktf.booleanToTerraform(this._triggerHttp),
      vpc_connector: cdktf.stringToTerraform(this._vpcConnector),
      vpc_connector_egress_settings: cdktf.stringToTerraform(this._vpcConnectorEgressSettings),
      event_trigger: cloudfunctionsFunctionEventTriggerToTerraform(this._eventTrigger),
      source_repository: cloudfunctionsFunctionSourceRepositoryToTerraform(this._sourceRepository),
      timeouts: cloudfunctionsFunctionTimeoutsToTerraform(this._timeouts),
    };
  }
}
