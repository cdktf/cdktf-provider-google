// https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeRegionAutoscalerConfig extends TerraformMetaArguments {
  /** An optional description of this resource. */
  readonly description?: string;
  /** Name of the resource. The name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. */
  readonly name: string;
  readonly project?: string;
  /** URL of the region where the instance group resides. */
  readonly region?: string;
  /** URL of the managed instance group that this autoscaler will scale. */
  readonly target: string;
  /** autoscaling_policy block */
  readonly autoscalingPolicy: ComputeRegionAutoscalerAutoscalingPolicy[];
  /** timeouts block */
  readonly timeouts?: ComputeRegionAutoscalerTimeouts;
}
export interface ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization {
  /** The target CPU utilization that the autoscaler should maintain.
Must be a float value in the range (0, 1]. If not specified, the
default is 0.6.

If the CPU level is below the target utilization, the autoscaler
scales down the number of instances until it reaches the minimum
number of instances you specified or until the average CPU of
your instances reaches the target utilization.

If the average CPU is above the target utilization, the autoscaler
scales up until it reaches the maximum number of instances you
specified or until the average utilization reaches the target
utilization. */
  readonly target: number;
}
export interface ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization {
  /** Fraction of backend capacity utilization (set in HTTP(s) load
balancing configuration) that autoscaler should maintain. Must
be a positive float value. If not defined, the default is 0.8. */
  readonly target: number;
}
export interface ComputeRegionAutoscalerAutoscalingPolicyMetric {
  /** The identifier (type) of the Stackdriver Monitoring metric.
The metric cannot have negative values.

The metric must have a value type of INT64 or DOUBLE. */
  readonly name: string;
  /** The target value of the metric that autoscaler should
maintain. This must be a positive value. A utilization
metric scales number of virtual machines handling requests
to increase or decrease proportionally to the metric.

For example, a good metric to use as a utilizationTarget is
www.googleapis.com/compute/instance/network/received_bytes_count.
The autoscaler will work to keep this value constant for each
of the instances. */
  readonly target?: number;
  /** Defines how target utilization value is expressed for a
Stackdriver Monitoring metric. Possible values: ["GAUGE", "DELTA_PER_SECOND", "DELTA_PER_MINUTE"] */
  readonly type?: string;
}
export interface ComputeRegionAutoscalerAutoscalingPolicy {
  /** The number of seconds that the autoscaler should wait before it
starts collecting information from a new instance. This prevents
the autoscaler from collecting information when the instance is
initializing, during which the collected usage would not be
reliable. The default time autoscaler waits is 60 seconds.

Virtual machine initialization times might vary because of
numerous factors. We recommend that you test how long an
instance may take to initialize. To do this, create an instance
and time the startup process. */
  readonly cooldownPeriod?: number;
  /** The maximum number of instances that the autoscaler can scale up
to. This is required when creating or updating an autoscaler. The
maximum number of replicas should not be lower than minimal number
of replicas. */
  readonly maxReplicas: number;
  /** The minimum number of replicas that the autoscaler can scale down
to. This cannot be less than 0. If not provided, autoscaler will
choose a default value depending on maximum number of instances
allowed. */
  readonly minReplicas: number;
  /** Defines operating mode for this policy. Default value: "ON" Possible values: ["OFF", "ONLY_UP", "ON"] */
  readonly mode?: string;
  /** cpu_utilization block */
  readonly cpuUtilization?: ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization[];
  /** load_balancing_utilization block */
  readonly loadBalancingUtilization?: ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization[];
  /** metric block */
  readonly metric?: ComputeRegionAutoscalerAutoscalingPolicyMetric[];
}
export interface ComputeRegionAutoscalerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeRegionAutoscaler extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeRegionAutoscalerConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_autoscaler',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._target = config.target;
    this._autoscalingPolicy = config.autoscalingPolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: true
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // target - computed: false, optional: false, required: true
  private _target: string;
  public get target() {
    return this._target;
  }
  public set target(value: string) {
    this._target = value;
  }

  // autoscaling_policy - computed: false, optional: false, required: true
  private _autoscalingPolicy: ComputeRegionAutoscalerAutoscalingPolicy[];
  public get autoscalingPolicy() {
    return this._autoscalingPolicy;
  }
  public set autoscalingPolicy(value: ComputeRegionAutoscalerAutoscalingPolicy[]) {
    this._autoscalingPolicy = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeRegionAutoscalerTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeRegionAutoscalerTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      project: this._project,
      region: this._region,
      target: this._target,
      autoscaling_policy: this._autoscalingPolicy,
      timeouts: this._timeouts,
    };
  }
}
