// https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudTasksQueueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#id CloudTasksQueue#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the queue
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#location CloudTasksQueue#location}
  */
  readonly location: string;
  /**
  * The queue name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#name CloudTasksQueue#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#project CloudTasksQueue#project}
  */
  readonly project?: string;
  /**
  * app_engine_routing_override block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#app_engine_routing_override CloudTasksQueue#app_engine_routing_override}
  */
  readonly appEngineRoutingOverride?: CloudTasksQueueAppEngineRoutingOverride;
  /**
  * rate_limits block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#rate_limits CloudTasksQueue#rate_limits}
  */
  readonly rateLimits?: CloudTasksQueueRateLimits;
  /**
  * retry_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#retry_config CloudTasksQueue#retry_config}
  */
  readonly retryConfig?: CloudTasksQueueRetryConfig;
  /**
  * stackdriver_logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#stackdriver_logging_config CloudTasksQueue#stackdriver_logging_config}
  */
  readonly stackdriverLoggingConfig?: CloudTasksQueueStackdriverLoggingConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#timeouts CloudTasksQueue#timeouts}
  */
  readonly timeouts?: CloudTasksQueueTimeouts;
}
export interface CloudTasksQueueAppEngineRoutingOverride {
  /**
  * App instance.

By default, the task is sent to an instance which is available when the task is attempted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#instance CloudTasksQueue#instance}
  */
  readonly instance?: string;
  /**
  * App service.

By default, the task is sent to the service which is the default service when the task is attempted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#service CloudTasksQueue#service}
  */
  readonly service?: string;
  /**
  * App version.

By default, the task is sent to the version which is the default version when the task is attempted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#version CloudTasksQueue#version}
  */
  readonly version?: string;
}

export function cloudTasksQueueAppEngineRoutingOverrideToTerraform(struct?: CloudTasksQueueAppEngineRoutingOverrideOutputReference | CloudTasksQueueAppEngineRoutingOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTasksQueueAppEngineRoutingOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudTasksQueueAppEngineRoutingOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instance = undefined;
      this._service = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instance = value.instance;
      this._service = value.service;
      this._version = value.version;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // instance - computed: false, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface CloudTasksQueueRateLimits {
  /**
  * The maximum number of concurrent tasks that Cloud Tasks allows to
be dispatched for this queue. After this threshold has been
reached, Cloud Tasks stops dispatching tasks until the number of
concurrent requests decreases.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#max_concurrent_dispatches CloudTasksQueue#max_concurrent_dispatches}
  */
  readonly maxConcurrentDispatches?: number;
  /**
  * The maximum rate at which tasks are dispatched from this queue.

If unspecified when the queue is created, Cloud Tasks will pick the default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#max_dispatches_per_second CloudTasksQueue#max_dispatches_per_second}
  */
  readonly maxDispatchesPerSecond?: number;
}

export function cloudTasksQueueRateLimitsToTerraform(struct?: CloudTasksQueueRateLimitsOutputReference | CloudTasksQueueRateLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_dispatches: cdktf.numberToTerraform(struct!.maxConcurrentDispatches),
    max_dispatches_per_second: cdktf.numberToTerraform(struct!.maxDispatchesPerSecond),
  }
}

export class CloudTasksQueueRateLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTasksQueueRateLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentDispatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentDispatches = this._maxConcurrentDispatches;
    }
    if (this._maxDispatchesPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDispatchesPerSecond = this._maxDispatchesPerSecond;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudTasksQueueRateLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentDispatches = undefined;
      this._maxDispatchesPerSecond = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentDispatches = value.maxConcurrentDispatches;
      this._maxDispatchesPerSecond = value.maxDispatchesPerSecond;
    }
  }

  // max_burst_size - computed: true, optional: false, required: false
  public get maxBurstSize() {
    return this.getNumberAttribute('max_burst_size');
  }

  // max_concurrent_dispatches - computed: true, optional: true, required: false
  private _maxConcurrentDispatches?: number; 
  public get maxConcurrentDispatches() {
    return this.getNumberAttribute('max_concurrent_dispatches');
  }
  public set maxConcurrentDispatches(value: number) {
    this._maxConcurrentDispatches = value;
  }
  public resetMaxConcurrentDispatches() {
    this._maxConcurrentDispatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentDispatchesInput() {
    return this._maxConcurrentDispatches;
  }

  // max_dispatches_per_second - computed: true, optional: true, required: false
  private _maxDispatchesPerSecond?: number; 
  public get maxDispatchesPerSecond() {
    return this.getNumberAttribute('max_dispatches_per_second');
  }
  public set maxDispatchesPerSecond(value: number) {
    this._maxDispatchesPerSecond = value;
  }
  public resetMaxDispatchesPerSecond() {
    this._maxDispatchesPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDispatchesPerSecondInput() {
    return this._maxDispatchesPerSecond;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#max_attempts CloudTasksQueue#max_attempts}
  */
  readonly maxAttempts?: number;
  /**
  * A task will be scheduled for retry between minBackoff and
maxBackoff duration after it fails, if the queue's RetryConfig
specifies that the task should be retried.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#max_backoff CloudTasksQueue#max_backoff}
  */
  readonly maxBackoff?: string;
  /**
  * The time between retries will double maxDoublings times.

A task's retry interval starts at minBackoff, then doubles maxDoublings times,
then increases linearly, and finally retries retries at intervals of maxBackoff
up to maxAttempts times.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#max_doublings CloudTasksQueue#max_doublings}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#max_retry_duration CloudTasksQueue#max_retry_duration}
  */
  readonly maxRetryDuration?: string;
  /**
  * A task will be scheduled for retry between minBackoff and
maxBackoff duration after it fails, if the queue's RetryConfig
specifies that the task should be retried.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#min_backoff CloudTasksQueue#min_backoff}
  */
  readonly minBackoff?: string;
}

export function cloudTasksQueueRetryConfigToTerraform(struct?: CloudTasksQueueRetryConfigOutputReference | CloudTasksQueueRetryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTasksQueueRetryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAttempts = this._maxAttempts;
    }
    if (this._maxBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBackoff = this._maxBackoff;
    }
    if (this._maxDoublings !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDoublings = this._maxDoublings;
    }
    if (this._maxRetryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetryDuration = this._maxRetryDuration;
    }
    if (this._minBackoff !== undefined) {
      hasAnyValues = true;
      internalValueResult.minBackoff = this._minBackoff;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudTasksQueueRetryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxAttempts = undefined;
      this._maxBackoff = undefined;
      this._maxDoublings = undefined;
      this._maxRetryDuration = undefined;
      this._minBackoff = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxAttempts = value.maxAttempts;
      this._maxBackoff = value.maxBackoff;
      this._maxDoublings = value.maxDoublings;
      this._maxRetryDuration = value.maxRetryDuration;
      this._minBackoff = value.minBackoff;
    }
  }

  // max_attempts - computed: true, optional: true, required: false
  private _maxAttempts?: number; 
  public get maxAttempts() {
    return this.getNumberAttribute('max_attempts');
  }
  public set maxAttempts(value: number) {
    this._maxAttempts = value;
  }
  public resetMaxAttempts() {
    this._maxAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAttemptsInput() {
    return this._maxAttempts;
  }

  // max_backoff - computed: true, optional: true, required: false
  private _maxBackoff?: string; 
  public get maxBackoff() {
    return this.getStringAttribute('max_backoff');
  }
  public set maxBackoff(value: string) {
    this._maxBackoff = value;
  }
  public resetMaxBackoff() {
    this._maxBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackoffInput() {
    return this._maxBackoff;
  }

  // max_doublings - computed: true, optional: true, required: false
  private _maxDoublings?: number; 
  public get maxDoublings() {
    return this.getNumberAttribute('max_doublings');
  }
  public set maxDoublings(value: number) {
    this._maxDoublings = value;
  }
  public resetMaxDoublings() {
    this._maxDoublings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDoublingsInput() {
    return this._maxDoublings;
  }

  // max_retry_duration - computed: true, optional: true, required: false
  private _maxRetryDuration?: string; 
  public get maxRetryDuration() {
    return this.getStringAttribute('max_retry_duration');
  }
  public set maxRetryDuration(value: string) {
    this._maxRetryDuration = value;
  }
  public resetMaxRetryDuration() {
    this._maxRetryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryDurationInput() {
    return this._maxRetryDuration;
  }

  // min_backoff - computed: true, optional: true, required: false
  private _minBackoff?: string; 
  public get minBackoff() {
    return this.getStringAttribute('min_backoff');
  }
  public set minBackoff(value: string) {
    this._minBackoff = value;
  }
  public resetMinBackoff() {
    this._minBackoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBackoffInput() {
    return this._minBackoff;
  }
}
export interface CloudTasksQueueStackdriverLoggingConfig {
  /**
  * Specifies the fraction of operations to write to Stackdriver Logging.
This field may contain any value between 0.0 and 1.0, inclusive. 0.0 is the
default and means that no operations are logged.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#sampling_ratio CloudTasksQueue#sampling_ratio}
  */
  readonly samplingRatio: number;
}

export function cloudTasksQueueStackdriverLoggingConfigToTerraform(struct?: CloudTasksQueueStackdriverLoggingConfigOutputReference | CloudTasksQueueStackdriverLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sampling_ratio: cdktf.numberToTerraform(struct!.samplingRatio),
  }
}

export class CloudTasksQueueStackdriverLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTasksQueueStackdriverLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._samplingRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingRatio = this._samplingRatio;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudTasksQueueStackdriverLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._samplingRatio = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._samplingRatio = value.samplingRatio;
    }
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
    return this._samplingRatio;
  }
}
export interface CloudTasksQueueTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#create CloudTasksQueue#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#delete CloudTasksQueue#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue#update CloudTasksQueue#update}
  */
  readonly update?: string;
}

export function cloudTasksQueueTimeoutsToTerraform(struct?: CloudTasksQueueTimeoutsOutputReference | CloudTasksQueueTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudTasksQueueTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudTasksQueueTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue google_cloud_tasks_queue}
*/
export class CloudTasksQueue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloud_tasks_queue";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/cloud_tasks_queue google_cloud_tasks_queue} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudTasksQueueConfig
  */
  public constructor(scope: Construct, id: string, config: CloudTasksQueueConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_tasks_queue',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._appEngineRoutingOverride.internalValue = config.appEngineRoutingOverride;
    this._rateLimits.internalValue = config.rateLimits;
    this._retryConfig.internalValue = config.retryConfig;
    this._stackdriverLoggingConfig.internalValue = config.stackdriverLoggingConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
    return this._location;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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
    return this._project;
  }

  // app_engine_routing_override - computed: false, optional: true, required: false
  private _appEngineRoutingOverride = new CloudTasksQueueAppEngineRoutingOverrideOutputReference(this, "app_engine_routing_override");
  public get appEngineRoutingOverride() {
    return this._appEngineRoutingOverride;
  }
  public putAppEngineRoutingOverride(value: CloudTasksQueueAppEngineRoutingOverride) {
    this._appEngineRoutingOverride.internalValue = value;
  }
  public resetAppEngineRoutingOverride() {
    this._appEngineRoutingOverride.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appEngineRoutingOverrideInput() {
    return this._appEngineRoutingOverride.internalValue;
  }

  // rate_limits - computed: false, optional: true, required: false
  private _rateLimits = new CloudTasksQueueRateLimitsOutputReference(this, "rate_limits");
  public get rateLimits() {
    return this._rateLimits;
  }
  public putRateLimits(value: CloudTasksQueueRateLimits) {
    this._rateLimits.internalValue = value;
  }
  public resetRateLimits() {
    this._rateLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitsInput() {
    return this._rateLimits.internalValue;
  }

  // retry_config - computed: false, optional: true, required: false
  private _retryConfig = new CloudTasksQueueRetryConfigOutputReference(this, "retry_config");
  public get retryConfig() {
    return this._retryConfig;
  }
  public putRetryConfig(value: CloudTasksQueueRetryConfig) {
    this._retryConfig.internalValue = value;
  }
  public resetRetryConfig() {
    this._retryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryConfigInput() {
    return this._retryConfig.internalValue;
  }

  // stackdriver_logging_config - computed: false, optional: true, required: false
  private _stackdriverLoggingConfig = new CloudTasksQueueStackdriverLoggingConfigOutputReference(this, "stackdriver_logging_config");
  public get stackdriverLoggingConfig() {
    return this._stackdriverLoggingConfig;
  }
  public putStackdriverLoggingConfig(value: CloudTasksQueueStackdriverLoggingConfig) {
    this._stackdriverLoggingConfig.internalValue = value;
  }
  public resetStackdriverLoggingConfig() {
    this._stackdriverLoggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackdriverLoggingConfigInput() {
    return this._stackdriverLoggingConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudTasksQueueTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudTasksQueueTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      app_engine_routing_override: cloudTasksQueueAppEngineRoutingOverrideToTerraform(this._appEngineRoutingOverride.internalValue),
      rate_limits: cloudTasksQueueRateLimitsToTerraform(this._rateLimits.internalValue),
      retry_config: cloudTasksQueueRetryConfigToTerraform(this._retryConfig.internalValue),
      stackdriver_logging_config: cloudTasksQueueStackdriverLoggingConfigToTerraform(this._stackdriverLoggingConfig.internalValue),
      timeouts: cloudTasksQueueTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
