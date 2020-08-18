// https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CloudTasksQueueConfig extends TerraformMetaArguments {
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
export interface CloudTasksQueueTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CloudTasksQueue extends TerraformResource {

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
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
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

  // app_engine_routing_override - computed: false, optional: true, required: false
  private _appEngineRoutingOverride?: CloudTasksQueueAppEngineRoutingOverride[];
  public get appEngineRoutingOverride() {
    return this._appEngineRoutingOverride;
  }
  public set appEngineRoutingOverride(value: CloudTasksQueueAppEngineRoutingOverride[] | undefined) {
    this._appEngineRoutingOverride = value;
  }

  // rate_limits - computed: false, optional: true, required: false
  private _rateLimits?: CloudTasksQueueRateLimits[];
  public get rateLimits() {
    return this._rateLimits;
  }
  public set rateLimits(value: CloudTasksQueueRateLimits[] | undefined) {
    this._rateLimits = value;
  }

  // retry_config - computed: false, optional: true, required: false
  private _retryConfig?: CloudTasksQueueRetryConfig[];
  public get retryConfig() {
    return this._retryConfig;
  }
  public set retryConfig(value: CloudTasksQueueRetryConfig[] | undefined) {
    this._retryConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudTasksQueueTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CloudTasksQueueTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      project: this._project,
      app_engine_routing_override: this._appEngineRoutingOverride,
      rate_limits: this._rateLimits,
      retry_config: this._retryConfig,
      timeouts: this._timeouts,
    };
  }
}
