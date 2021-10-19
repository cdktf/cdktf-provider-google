// https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudTasksQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * The location of the queue
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html#location CloudTasksQueue#location}
  */
  readonly location: string;
  /**
  * The queue name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html#name CloudTasksQueue#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html#project CloudTasksQueue#project}
  */
  readonly project?: string;
  /**
  * app_engine_routing_override block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html#app_engine_routing_override CloudTasksQueue#app_engine_routing_override}
  */
  readonly appEngineRoutingOverride?: CloudTasksQueueAppEngineRoutingOverride;
  /**
  * rate_limits block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html#rate_limits CloudTasksQueue#rate_limits}
  */
  readonly rateLimits?: CloudTasksQueueRateLimits;
  /**
  * retry_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html#retry_config CloudTasksQueue#retry_config}
  */
  readonly retryConfig?: CloudTasksQueueRetryConfig;
  /**
  * stackdriver_logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html#stackdriver_logging_config CloudTasksQueue#stackdriver_logging_config}
  */
  readonly stackdriverLoggingConfig?: CloudTasksQueueStackdriverLoggingConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html#timeouts CloudTasksQueue#timeouts}
  */
  readonly timeouts?: CloudTasksQueueTimeouts;
}
export interface CloudTasksQueueAppEngineRoutingOverride {
  /**
  * App instance.

By default, the task is sent to an instance which is available when the task is attempted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html#instance CloudTasksQueue#instance}
  */
  readonly instance?: string;
  /**
  * App service.

By default, the task is sent to the service which is the default service when the task is attempted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html#service CloudTasksQueue#service}
  */
  readonly service?: string;
  /**
  * App version.

By default, the task is sent to the version which is the default version when the task is attempted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html#version CloudTasksQueue#version}
  */
  readonly version?: string;
}

function cloudTasksQueueAppEngineRoutingOverrideToTerraform(struct?: CloudTasksQueueAppEngineRoutingOverrideOutputReference | CloudTasksQueueAppEngineRoutingOverride): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance: cdktf.stringToTerraform(struct!.instance),
    service: cdktf.stringToTerraform(struct!.service),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class CloudTasksQueueAppEngineRoutingOverrideOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // instance - computed: false, optional: true, required: false
  private _instance?: string | undefined; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string | undefined) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance
  }

  // service - computed: false, optional: true, required: false
  private _service?: string | undefined; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string | undefined) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service
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
export interface CloudTasksQueueRateLimits {
  /**
  * The maximum number of concurrent tasks that Cloud Tasks allows to
be dispatched for this queue. After this threshold has been
reached, Cloud Tasks stops dispatching tasks until the number of
concurrent requests decreases.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html#max_concurrent_dispatches CloudTasksQueue#max_concurrent_dispatches}
  */
  readonly maxConcurrentDispatches?: number;
  /**
  * The maximum rate at which tasks are dispatched from this queue.

If unspecified when the queue is created, Cloud Tasks will pick the default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html#max_dispatches_per_second CloudTasksQueue#max_dispatches_per_second}
  */
  readonly maxDispatchesPerSecond?: number;
}

function cloudTasksQueueRateLimitsToTerraform(struct?: CloudTasksQueueRateLimitsOutputReference | CloudTasksQueueRateLimits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_dispatches: cdktf.numberToTerraform(struct!.maxConcurrentDispatches),
    max_dispatches_per_second: cdktf.numberToTerraform(struct!.maxDispatchesPerSecond),
  }
}

export class CloudTasksQueueRateLimitsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max_concurrent_dispatches - computed: true, optional: true, required: false
  private _maxConcurrentDispatches?: number | undefined; 
  public get maxConcurrentDispatches() {
    return this.getNumberAttribute('max_concurrent_dispatches');
  }
  public set maxConcurrentDispatches(value: number | undefined) {
    this._maxConcurrentDispatches = value;
  }
  public resetMaxConcurrentDispatches() {
    this._maxConcurrentDispatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentDispatchesInput() {
    return this._maxConcurrentDispatches
  }

  // max_dispatches_per_second - computed: true, optional: true, required: false
  private _maxDispatchesPerSecond?: number | undefined; 
  public get maxDispatchesPerSecond() {
    return this.getNumberAttribute('max_dispatches_per_second');
  }
  public set maxDispatchesPerSecond(value: number | undefined) {
    this._maxDispatchesPerSecond = value;
  }
  public resetMaxDispatchesPerSecond() {
    this._maxDispatchesPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDispatchesPerSecondInput() {
    return this._maxDispatchesPerSecond
  }
}
export interface CloudTasksQueueRetryConfig {
  /**
  * Number of attempts per task.

Cloud Tasks will attempt the task maxAttempts times (that is, if
the first attempt fails, then there will be maxAttempts - 1
retries). Must be >= -1.

If unspecified when the queue is created, Cloud Tasks will pick
the default.

-1 indicates unlimited attempts.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html#max_attempts CloudTasksQueue#max_attempts}
  */
  readonly maxAttempts?: number;
  /**
  * A task will be scheduled for retry between minBackoff and
maxBackoff duration after it fails, if the queue's RetryConfig
specifies that the task should be retried.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html#max_backoff CloudTasksQueue#max_backoff}
  */
  readonly maxBackoff?: string;
  /**
  * The time between retries will double maxDoublings times.

A task's retry interval starts at minBackoff, then doubles maxDoublings times,
then increases linearly, and finally retries retries at intervals of maxBackoff
up to maxAttempts times.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html#max_doublings CloudTasksQueue#max_doublings}
  */
  readonly maxDoublings?: number;
  /**
  * If positive, maxRetryDuration specifies the time limit for
retrying a failed task, measured from when the task was first
attempted. Once maxRetryDuration time has passed and the task has
been attempted maxAttempts times, no further attempts will be
made and the task will be deleted.

If zero, then the task age is unlimited.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html#max_retry_duration CloudTasksQueue#max_retry_duration}
  */
  readonly maxRetryDuration?: string;
  /**
  * A task will be scheduled for retry between minBackoff and
maxBackoff duration after it fails, if the queue's RetryConfig
specifies that the task should be retried.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html#min_backoff CloudTasksQueue#min_backoff}
  */
  readonly minBackoff?: string;
}

function cloudTasksQueueRetryConfigToTerraform(struct?: CloudTasksQueueRetryConfigOutputReference | CloudTasksQueueRetryConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
    max_backoff: cdktf.stringToTerraform(struct!.maxBackoff),
    max_doublings: cdktf.numberToTerraform(struct!.maxDoublings),
    max_retry_duration: cdktf.stringToTerraform(struct!.maxRetryDuration),
    min_backoff: cdktf.stringToTerraform(struct!.minBackoff),
  }
}

export class CloudTasksQueueRetryConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max_attempts - computed: true, optional: true, required: false
  private _maxAttempts?: number | undefined; 
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
  public set maxAttempts(value: number | undefined) {
    this._maxAttempts = value;
  }
  public resetMaxAttempts() {
    this._maxAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsInput() {
    return this._maxAttempts
  }

  // max_backoff - computed: true, optional: true, required: false
  private _maxBackoff?: string | undefined; 
  public get maxBackoff() {
    return this.getStringAttribute('max_backoff');
  }
  public set maxBackoff(value: string | undefined) {
    this._maxBackoff = value;
  }
  public resetMaxBackoff() {
    this._maxBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackoffInput() {
    return this._maxBackoff
  }

  // max_doublings - computed: true, optional: true, required: false
  private _maxDoublings?: number | undefined; 
  public get maxDoublings() {
    return this.getNumberAttribute('max_doublings');
  }
  public set maxDoublings(value: number | undefined) {
    this._maxDoublings = value;
  }
  public resetMaxDoublings() {
    this._maxDoublings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDoublingsInput() {
    return this._maxDoublings
  }

  // max_retry_duration - computed: true, optional: true, required: false
  private _maxRetryDuration?: string | undefined; 
  public get maxRetryDuration() {
    return this.getStringAttribute('max_retry_duration');
  }
  public set maxRetryDuration(value: string | undefined) {
    this._maxRetryDuration = value;
  }
  public resetMaxRetryDuration() {
    this._maxRetryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryDurationInput() {
    return this._maxRetryDuration
  }

  // min_backoff - computed: true, optional: true, required: false
  private _minBackoff?: string | undefined; 
  public get minBackoff() {
    return this.getStringAttribute('min_backoff');
  }
  public set minBackoff(value: string | undefined) {
    this._minBackoff = value;
  }
  public resetMinBackoff() {
    this._minBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBackoffInput() {
    return this._minBackoff
  }
}
export interface CloudTasksQueueStackdriverLoggingConfig {
  /**
  * Specifies the fraction of operations to write to Stackdriver Logging.
This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is the
default and means that no operations are logged.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html#sampling_ratio CloudTasksQueue#sampling_ratio}
  */
  readonly samplingRatio: number;
}

function cloudTasksQueueStackdriverLoggingConfigToTerraform(struct?: CloudTasksQueueStackdriverLoggingConfigOutputReference | CloudTasksQueueStackdriverLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sampling_ratio: cdktf.numberToTerraform(struct!.samplingRatio),
  }
}

export class CloudTasksQueueStackdriverLoggingConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // sampling_ratio - computed: false, optional: false, required: true
  private _samplingRatio?: number; 
  public get samplingRatio() {
    return this.getNumberAttribute('sampling_ratio');
  }
  public set samplingRatio(value: number) {
    this._samplingRatio = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingRatioInput() {
    return this._samplingRatio
  }
}
export interface CloudTasksQueueTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html#create CloudTasksQueue#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html#delete CloudTasksQueue#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html#update CloudTasksQueue#update}
  */
  readonly update?: string;
}

function cloudTasksQueueTimeoutsToTerraform(struct?: CloudTasksQueueTimeoutsOutputReference | CloudTasksQueueTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class CloudTasksQueueTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html google_cloud_tasks_queue}
*/
export class CloudTasksQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_cloud_tasks_queue";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html google_cloud_tasks_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudTasksQueueConfig
  */
  public constructor(scope: Construct, id: string, config: CloudTasksQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_tasks_queue',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._appEngineRoutingOverride = config.appEngineRoutingOverride;
    this._rateLimits = config.rateLimits;
    this._retryConfig = config.retryConfig;
    this._stackdriverLoggingConfig = config.stackdriverLoggingConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._location
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // app_engine_routing_override - computed: false, optional: true, required: false
  private _appEngineRoutingOverride?: CloudTasksQueueAppEngineRoutingOverride | undefined; 
  private __appEngineRoutingOverrideOutput = new CloudTasksQueueAppEngineRoutingOverrideOutputReference(this as any, "app_engine_routing_override", true);
  public get appEngineRoutingOverride() {
    return this.__appEngineRoutingOverrideOutput;
  }
  public putAppEngineRoutingOverride(value: CloudTasksQueueAppEngineRoutingOverride | undefined) {
    this._appEngineRoutingOverride = value;
  }
  public resetAppEngineRoutingOverride() {
    this._appEngineRoutingOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appEngineRoutingOverrideInput() {
    return this._appEngineRoutingOverride
  }

  // rate_limits - computed: false, optional: true, required: false
  private _rateLimits?: CloudTasksQueueRateLimits | undefined; 
  private __rateLimitsOutput = new CloudTasksQueueRateLimitsOutputReference(this as any, "rate_limits", true);
  public get rateLimits() {
    return this.__rateLimitsOutput;
  }
  public putRateLimits(value: CloudTasksQueueRateLimits | undefined) {
    this._rateLimits = value;
  }
  public resetRateLimits() {
    this._rateLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitsInput() {
    return this._rateLimits
  }

  // retry_config - computed: false, optional: true, required: false
  private _retryConfig?: CloudTasksQueueRetryConfig | undefined; 
  private __retryConfigOutput = new CloudTasksQueueRetryConfigOutputReference(this as any, "retry_config", true);
  public get retryConfig() {
    return this.__retryConfigOutput;
  }
  public putRetryConfig(value: CloudTasksQueueRetryConfig | undefined) {
    this._retryConfig = value;
  }
  public resetRetryConfig() {
    this._retryConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConfigInput() {
    return this._retryConfig
  }

  // stackdriver_logging_config - computed: false, optional: true, required: false
  private _stackdriverLoggingConfig?: CloudTasksQueueStackdriverLoggingConfig | undefined; 
  private __stackdriverLoggingConfigOutput = new CloudTasksQueueStackdriverLoggingConfigOutputReference(this as any, "stackdriver_logging_config", true);
  public get stackdriverLoggingConfig() {
    return this.__stackdriverLoggingConfigOutput;
  }
  public putStackdriverLoggingConfig(value: CloudTasksQueueStackdriverLoggingConfig | undefined) {
    this._stackdriverLoggingConfig = value;
  }
  public resetStackdriverLoggingConfig() {
    this._stackdriverLoggingConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackdriverLoggingConfigInput() {
    return this._stackdriverLoggingConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudTasksQueueTimeouts | undefined; 
  private __timeoutsOutput = new CloudTasksQueueTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: CloudTasksQueueTimeouts | undefined) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      app_engine_routing_override: cloudTasksQueueAppEngineRoutingOverrideToTerraform(this._appEngineRoutingOverride),
      rate_limits: cloudTasksQueueRateLimitsToTerraform(this._rateLimits),
      retry_config: cloudTasksQueueRetryConfigToTerraform(this._retryConfig),
      stackdriver_logging_config: cloudTasksQueueStackdriverLoggingConfigToTerraform(this._stackdriverLoggingConfig),
      timeouts: cloudTasksQueueTimeoutsToTerraform(this._timeouts),
    };
  }
}
