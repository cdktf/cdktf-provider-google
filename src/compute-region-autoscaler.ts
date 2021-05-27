// https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRegionAutoscalerConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#description ComputeRegionAutoscaler#description}
  */
  readonly description?: string;
  /**
  * Name of the resource. The name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#name ComputeRegionAutoscaler#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#project ComputeRegionAutoscaler#project}
  */
  readonly project?: string;
  /**
  * URL of the region where the instance group resides.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#region ComputeRegionAutoscaler#region}
  */
  readonly region?: string;
  /**
  * URL of the managed instance group that this autoscaler will scale.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#target ComputeRegionAutoscaler#target}
  */
  readonly target: string;
  /**
  * autoscaling_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#autoscaling_policy ComputeRegionAutoscaler#autoscaling_policy}
  */
  readonly autoscalingPolicy: ComputeRegionAutoscalerAutoscalingPolicy[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#timeouts ComputeRegionAutoscaler#timeouts}
  */
  readonly timeouts?: ComputeRegionAutoscalerTimeouts;
}
export interface ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization {
  /**
  * Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:

- NONE (default). No predictive method is used. The autoscaler scales the group to meet current demand based on real-time metrics.

- OPTIMIZE_AVAILABILITY. Predictive autoscaling improves availability by monitoring daily and weekly load patterns and scaling out ahead of anticipated demand.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#predictive_method ComputeRegionAutoscaler#predictive_method}
  */
  readonly predictiveMethod?: string;
  /**
  * The target CPU utilization that the autoscaler should maintain.
Must be a float value in the range (0, 1]. If not specified, the
default is 0.6.

If the CPU level is below the target utilization, the autoscaler
scales down the number of instances until it reaches the minimum
number of instances you specified or until the average CPU of
your instances reaches the target utilization.

If the average CPU is above the target utilization, the autoscaler
scales up until it reaches the maximum number of instances you
specified or until the average utilization reaches the target
utilization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#target ComputeRegionAutoscaler#target}
  */
  readonly target: number;
}

function computeRegionAutoscalerAutoscalingPolicyCpuUtilizationToTerraform(struct?: ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    predictive_method: cdktf.stringToTerraform(struct!.predictiveMethod),
    target: cdktf.numberToTerraform(struct!.target),
  }
}

export interface ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization {
  /**
  * Fraction of backend capacity utilization (set in HTTP(s) load
balancing configuration) that autoscaler should maintain. Must
be a positive float value. If not defined, the default is 0.8.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#target ComputeRegionAutoscaler#target}
  */
  readonly target: number;
}

function computeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationToTerraform(struct?: ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    target: cdktf.numberToTerraform(struct!.target),
  }
}

export interface ComputeRegionAutoscalerAutoscalingPolicyMetric {
  /**
  * The identifier (type) of the Stackdriver Monitoring metric.
The metric cannot have negative values.

The metric must have a value type of INT64 or DOUBLE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#name ComputeRegionAutoscaler#name}
  */
  readonly name: string;
  /**
  * The target value of the metric that autoscaler should
maintain. This must be a positive value. A utilization
metric scales number of virtual machines handling requests
to increase or decrease proportionally to the metric.

For example, a good metric to use as a utilizationTarget is
www.googleapis.com/compute/instance/network/received_bytes_count.
The autoscaler will work to keep this value constant for each
of the instances.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#target ComputeRegionAutoscaler#target}
  */
  readonly target?: number;
  /**
  * Defines how target utilization value is expressed for a
Stackdriver Monitoring metric. Possible values: ["GAUGE", "DELTA_PER_SECOND", "DELTA_PER_MINUTE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#type ComputeRegionAutoscaler#type}
  */
  readonly type?: string;
}

function computeRegionAutoscalerAutoscalingPolicyMetricToTerraform(struct?: ComputeRegionAutoscalerAutoscalingPolicyMetric): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    target: cdktf.numberToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas {
  /**
  * Specifies a fixed number of VM instances. This must be a positive
integer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#fixed ComputeRegionAutoscaler#fixed}
  */
  readonly fixed?: number;
  /**
  * Specifies a percentage of instances between 0 to 100%, inclusive.
For example, specify 80 for 80%.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#percent ComputeRegionAutoscaler#percent}
  */
  readonly percent?: number;
}

function computeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasToTerraform(struct?: ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    fixed: cdktf.numberToTerraform(struct!.fixed),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}

export interface ComputeRegionAutoscalerAutoscalingPolicyScaleInControl {
  /**
  * How long back autoscaling should look when computing recommendations
to include directives regarding slower scale down, as described above.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#time_window_sec ComputeRegionAutoscaler#time_window_sec}
  */
  readonly timeWindowSec?: number;
  /**
  * max_scaled_in_replicas block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#max_scaled_in_replicas ComputeRegionAutoscaler#max_scaled_in_replicas}
  */
  readonly maxScaledInReplicas?: ComputeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas[];
}

function computeRegionAutoscalerAutoscalingPolicyScaleInControlToTerraform(struct?: ComputeRegionAutoscalerAutoscalingPolicyScaleInControl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    time_window_sec: cdktf.numberToTerraform(struct!.timeWindowSec),
    max_scaled_in_replicas: cdktf.listMapper(computeRegionAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasToTerraform)(struct!.maxScaledInReplicas),
  }
}

export interface ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules {
  /**
  * A description of a scaling schedule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#description ComputeRegionAutoscaler#description}
  */
  readonly description?: string;
  /**
  * A boolean value that specifies if a scaling schedule can influence autoscaler recommendations. If set to true, then a scaling schedule has no effect.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#disabled ComputeRegionAutoscaler#disabled}
  */
  readonly disabled?: boolean;
  /**
  * The duration of time intervals (in seconds) for which this scaling schedule will be running. The minimum allowed value is 300.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#duration_sec ComputeRegionAutoscaler#duration_sec}
  */
  readonly durationSec: number;
  /**
  * Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#min_required_replicas ComputeRegionAutoscaler#min_required_replicas}
  */
  readonly minRequiredReplicas: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#name ComputeRegionAutoscaler#name}
  */
  readonly name: string;
  /**
  * The start timestamps of time intervals when this scaling schedule should provide a scaling signal. This field uses the extended cron format (with an optional year field).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#schedule ComputeRegionAutoscaler#schedule}
  */
  readonly schedule: string;
  /**
  * The time zone to be used when interpreting the schedule. The value of this field must be a time zone name from the tz database: http://en.wikipedia.org/wiki/Tz_database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#time_zone ComputeRegionAutoscaler#time_zone}
  */
  readonly timeZone?: string;
}

function computeRegionAutoscalerAutoscalingPolicyScalingSchedulesToTerraform(struct?: ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    duration_sec: cdktf.numberToTerraform(struct!.durationSec),
    min_required_replicas: cdktf.numberToTerraform(struct!.minRequiredReplicas),
    name: cdktf.stringToTerraform(struct!.name),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}

export interface ComputeRegionAutoscalerAutoscalingPolicy {
  /**
  * The number of seconds that the autoscaler should wait before it
starts collecting information from a new instance. This prevents
the autoscaler from collecting information when the instance is
initializing, during which the collected usage would not be
reliable. The default time autoscaler waits is 60 seconds.

Virtual machine initialization times might vary because of
numerous factors. We recommend that you test how long an
instance may take to initialize. To do this, create an instance
and time the startup process.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#cooldown_period ComputeRegionAutoscaler#cooldown_period}
  */
  readonly cooldownPeriod?: number;
  /**
  * The maximum number of instances that the autoscaler can scale up
to. This is required when creating or updating an autoscaler. The
maximum number of replicas should not be lower than minimal number
of replicas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#max_replicas ComputeRegionAutoscaler#max_replicas}
  */
  readonly maxReplicas: number;
  /**
  * The minimum number of replicas that the autoscaler can scale down
to. This cannot be less than 0. If not provided, autoscaler will
choose a default value depending on maximum number of instances
allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#min_replicas ComputeRegionAutoscaler#min_replicas}
  */
  readonly minReplicas: number;
  /**
  * Defines operating mode for this policy. Default value: "ON" Possible values: ["OFF", "ONLY_UP", "ON"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#mode ComputeRegionAutoscaler#mode}
  */
  readonly mode?: string;
  /**
  * cpu_utilization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#cpu_utilization ComputeRegionAutoscaler#cpu_utilization}
  */
  readonly cpuUtilization?: ComputeRegionAutoscalerAutoscalingPolicyCpuUtilization[];
  /**
  * load_balancing_utilization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#load_balancing_utilization ComputeRegionAutoscaler#load_balancing_utilization}
  */
  readonly loadBalancingUtilization?: ComputeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilization[];
  /**
  * metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#metric ComputeRegionAutoscaler#metric}
  */
  readonly metric?: ComputeRegionAutoscalerAutoscalingPolicyMetric[];
  /**
  * scale_in_control block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#scale_in_control ComputeRegionAutoscaler#scale_in_control}
  */
  readonly scaleInControl?: ComputeRegionAutoscalerAutoscalingPolicyScaleInControl[];
  /**
  * scaling_schedules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#scaling_schedules ComputeRegionAutoscaler#scaling_schedules}
  */
  readonly scalingSchedules?: ComputeRegionAutoscalerAutoscalingPolicyScalingSchedules[];
}

function computeRegionAutoscalerAutoscalingPolicyToTerraform(struct?: ComputeRegionAutoscalerAutoscalingPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cooldown_period: cdktf.numberToTerraform(struct!.cooldownPeriod),
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    mode: cdktf.stringToTerraform(struct!.mode),
    cpu_utilization: cdktf.listMapper(computeRegionAutoscalerAutoscalingPolicyCpuUtilizationToTerraform)(struct!.cpuUtilization),
    load_balancing_utilization: cdktf.listMapper(computeRegionAutoscalerAutoscalingPolicyLoadBalancingUtilizationToTerraform)(struct!.loadBalancingUtilization),
    metric: cdktf.listMapper(computeRegionAutoscalerAutoscalingPolicyMetricToTerraform)(struct!.metric),
    scale_in_control: cdktf.listMapper(computeRegionAutoscalerAutoscalingPolicyScaleInControlToTerraform)(struct!.scaleInControl),
    scaling_schedules: cdktf.listMapper(computeRegionAutoscalerAutoscalingPolicyScalingSchedulesToTerraform)(struct!.scalingSchedules),
  }
}

export interface ComputeRegionAutoscalerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#create ComputeRegionAutoscaler#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#delete ComputeRegionAutoscaler#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html#update ComputeRegionAutoscaler#update}
  */
  readonly update?: string;
}

function computeRegionAutoscalerTimeoutsToTerraform(struct?: ComputeRegionAutoscalerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html google_compute_region_autoscaler}
*/
export class ComputeRegionAutoscaler extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_region_autoscaler.html google_compute_region_autoscaler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeRegionAutoscalerConfig
  */
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

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
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

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // target - computed: false, optional: false, required: true
  private _target: string;
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target
  }

  // autoscaling_policy - computed: false, optional: false, required: true
  private _autoscalingPolicy: ComputeRegionAutoscalerAutoscalingPolicy[];
  public get autoscalingPolicy() {
    return this.interpolationForAttribute('autoscaling_policy') as any;
  }
  public set autoscalingPolicy(value: ComputeRegionAutoscalerAutoscalingPolicy[]) {
    this._autoscalingPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingPolicyInput() {
    return this._autoscalingPolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeRegionAutoscalerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeRegionAutoscalerTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      target: cdktf.stringToTerraform(this._target),
      autoscaling_policy: cdktf.listMapper(computeRegionAutoscalerAutoscalingPolicyToTerraform)(this._autoscalingPolicy),
      timeouts: computeRegionAutoscalerTimeoutsToTerraform(this._timeouts),
    };
  }
}
