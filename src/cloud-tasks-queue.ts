// https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudTasksQueueConfig extends cdktf.TerraformMetaArguments {
  /** The location of the queue */
  readonly location: string;
  /** The queue name. */
  readonly name?: string;
  readonly project?: string;
  /** app_engine_routing_override block */
  readonly appEngineRoutingOverride?: CloudTasksQueueAppEngineRoutingOverride[];
  /** rate_limits block */
  readonly rateLimits?: CloudTasksQueueRateLimits[];
  /** retry_config block */
  readonly retryConfig?: CloudTasksQueueRetryConfig[];
  /** stackdriver_logging_config block */
  readonly stackdriverLoggingConfig?: CloudTasksQueueStackdriverLoggingConfig[];
  /** timeouts block */
  readonly timeouts?: CloudTasksQueueTimeouts;
}
export interface CloudTasksQueueAppEngineRoutingOverride {
  /** App instance.

By default, the task is sent to an instance which is available when the task is attempted. */
  readonly instance?: string;
  /** App service.

By default, the task is sent to the service which is the default service when the task is attempted. */
  readonly service?: string;
  /** App version.

By default, the task is sent to the version which is the default version when the task is attempted. */
  readonly version?: string;
}

function cloudTasksQueueAppEngineRoutingOverrideToTerraform(struct?: CloudTasksQueueAppEngineRoutingOverride): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    instance: cdktf.stringToTerraform(struct!.instance),
    service: cdktf.stringToTerraform(struct!.service),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface CloudTasksQueueRateLimits {
  /** The maximum number of concurrent tasks that Cloud Tasks allows to
be dispatched for this queue. After this threshold has been
reached, Cloud Tasks stops dispatching tasks until the number of
concurrent requests decreases. */
  readonly maxConcurrentDispatches?: number;
  /** The maximum rate at which tasks are dispatched from this queue.

If unspecified when the queue is created, Cloud Tasks will pick the default. */
  readonly maxDispatchesPerSecond?: number;
}

function cloudTasksQueueRateLimitsToTerraform(struct?: CloudTasksQueueRateLimits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_concurrent_dispatches: cdktf.numberToTerraform(struct!.maxConcurrentDispatches),
    max_dispatches_per_second: cdktf.numberToTerraform(struct!.maxDispatchesPerSecond),
  }
}

export interface CloudTasksQueueRetryConfig {
  /** Number of attempts per task.

Cloud Tasks will attempt the task maxAttempts times (that is, if
the first attempt fails, then there will be maxAttempts - 1
retries). Must be >= -1.

If unspecified when the queue is created, Cloud Tasks will pick
the default.

-1 indicates unlimited attempts. */
  readonly maxAttempts?: number;
  /** A task will be scheduled for retry between minBackoff and
maxBackoff duration after it fails, if the queue's RetryConfig
specifies that the task should be retried. */
  readonly maxBackoff?: string;
  /** The time between retries will double maxDoublings times.

A task's retry interval starts at minBackoff, then doubles maxDoublings times,
then increases linearly, and finally retries retries at intervals of maxBackoff
up to maxAttempts times. */
  readonly maxDoublings?: number;
  /** If positive, maxRetryDuration specifies the time limit for
retrying a failed task, measured from when the task was first
attempted. Once maxRetryDuration time has passed and the task has
been attempted maxAttempts times, no further attempts will be
made and the task will be deleted.

If zero, then the task age is unlimited. */
  readonly maxRetryDuration?: string;
  /** A task will be scheduled for retry between minBackoff and
maxBackoff duration after it fails, if the queue's RetryConfig
specifies that the task should be retried. */
  readonly minBackoff?: string;
}

function cloudTasksQueueRetryConfigToTerraform(struct?: CloudTasksQueueRetryConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_attempts: cdktf.numberToTerraform(struct!.maxAttempts),
    max_backoff: cdktf.stringToTerraform(struct!.maxBackoff),
    max_doublings: cdktf.numberToTerraform(struct!.maxDoublings),
    max_retry_duration: cdktf.stringToTerraform(struct!.maxRetryDuration),
    min_backoff: cdktf.stringToTerraform(struct!.minBackoff),
  }
}

export interface CloudTasksQueueStackdriverLoggingConfig {
  /** Specifies the fraction of operations to write to Stackdriver Logging.
This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is the
default and means that no operations are logged. */
  readonly samplingRatio: number;
}

function cloudTasksQueueStackdriverLoggingConfigToTerraform(struct?: CloudTasksQueueStackdriverLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    sampling_ratio: cdktf.numberToTerraform(struct!.samplingRatio),
  }
}

export interface CloudTasksQueueTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function cloudTasksQueueTimeoutsToTerraform(struct?: CloudTasksQueueTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class CloudTasksQueue extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _location: string;
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
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
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

  // app_engine_routing_override - computed: false, optional: true, required: false
  private _appEngineRoutingOverride?: CloudTasksQueueAppEngineRoutingOverride[];
  public get appEngineRoutingOverride() {
    return this.interpolationForAttribute('app_engine_routing_override') as any;
  }
  public set appEngineRoutingOverride(value: CloudTasksQueueAppEngineRoutingOverride[] ) {
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
  private _rateLimits?: CloudTasksQueueRateLimits[];
  public get rateLimits() {
    return this.interpolationForAttribute('rate_limits') as any;
  }
  public set rateLimits(value: CloudTasksQueueRateLimits[] ) {
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
  private _retryConfig?: CloudTasksQueueRetryConfig[];
  public get retryConfig() {
    return this.interpolationForAttribute('retry_config') as any;
  }
  public set retryConfig(value: CloudTasksQueueRetryConfig[] ) {
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
  private _stackdriverLoggingConfig?: CloudTasksQueueStackdriverLoggingConfig[];
  public get stackdriverLoggingConfig() {
    return this.interpolationForAttribute('stackdriver_logging_config') as any;
  }
  public set stackdriverLoggingConfig(value: CloudTasksQueueStackdriverLoggingConfig[] ) {
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
  private _timeouts?: CloudTasksQueueTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CloudTasksQueueTimeouts ) {
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
      app_engine_routing_override: cdktf.listMapper(cloudTasksQueueAppEngineRoutingOverrideToTerraform)(this._appEngineRoutingOverride),
      rate_limits: cdktf.listMapper(cloudTasksQueueRateLimitsToTerraform)(this._rateLimits),
      retry_config: cdktf.listMapper(cloudTasksQueueRetryConfigToTerraform)(this._retryConfig),
      stackdriver_logging_config: cdktf.listMapper(cloudTasksQueueStackdriverLoggingConfigToTerraform)(this._stackdriverLoggingConfig),
      timeouts: cloudTasksQueueTimeoutsToTerraform(this._timeouts),
    };
  }
}
