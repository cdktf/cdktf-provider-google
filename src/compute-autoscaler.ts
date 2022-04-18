// https://www.terraform.io/docs/providers/google/r/compute_autoscaler
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeAutoscalerConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#description ComputeAutoscaler#description}
  */
  readonly description?: string;
  /**
  * Name of the resource. The name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#name ComputeAutoscaler#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#project ComputeAutoscaler#project}
  */
  readonly project?: string;
  /**
  * URL of the managed instance group that this autoscaler will scale.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#target ComputeAutoscaler#target}
  */
  readonly target: string;
  /**
  * URL of the zone where the instance group resides.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#zone ComputeAutoscaler#zone}
  */
  readonly zone?: string;
  /**
  * autoscaling_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#autoscaling_policy ComputeAutoscaler#autoscaling_policy}
  */
  readonly autoscalingPolicy: ComputeAutoscalerAutoscalingPolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#timeouts ComputeAutoscaler#timeouts}
  */
  readonly timeouts?: ComputeAutoscalerTimeouts;
}
export interface ComputeAutoscalerAutoscalingPolicyCpuUtilization {
  /**
  * Indicates whether predictive autoscaling based on CPU metric is enabled. Valid values are:

- NONE (default). No predictive method is used. The autoscaler scales the group to meet current demand based on real-time metrics.

- OPTIMIZE_AVAILABILITY. Predictive autoscaling improves availability by monitoring daily and weekly load patterns and scaling out ahead of anticipated demand.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#predictive_method ComputeAutoscaler#predictive_method}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#target ComputeAutoscaler#target}
  */
  readonly target: number;
}

export function computeAutoscalerAutoscalingPolicyCpuUtilizationToTerraform(struct?: ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference | ComputeAutoscalerAutoscalingPolicyCpuUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    predictive_method: cdktf.stringToTerraform(struct!.predictiveMethod),
    target: cdktf.numberToTerraform(struct!.target),
  }
}

export class ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeAutoscalerAutoscalingPolicyCpuUtilization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predictiveMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.predictiveMethod = this._predictiveMethod;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeAutoscalerAutoscalingPolicyCpuUtilization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._predictiveMethod = undefined;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._predictiveMethod = value.predictiveMethod;
      this._target = value.target;
    }
  }

  // predictive_method - computed: false, optional: true, required: false
  private _predictiveMethod?: string; 
  public get predictiveMethod() {
    return this.getStringAttribute('predictive_method');
  }
  public set predictiveMethod(value: string) {
    this._predictiveMethod = value;
  }
  public resetPredictiveMethod() {
    this._predictiveMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictiveMethodInput() {
    return this._predictiveMethod;
  }

  // target - computed: false, optional: false, required: true
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization {
  /**
  * Fraction of backend capacity utilization (set in HTTP(s) load
balancing configuration) that autoscaler should maintain. Must
be a positive float value. If not defined, the default is 0.8.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#target ComputeAutoscaler#target}
  */
  readonly target: number;
}

export function computeAutoscalerAutoscalingPolicyLoadBalancingUtilizationToTerraform(struct?: ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference | ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: cdktf.numberToTerraform(struct!.target),
  }
}

export class ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._target = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._target = value.target;
    }
  }

  // target - computed: false, optional: false, required: true
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}
export interface ComputeAutoscalerAutoscalingPolicyMetric {
  /**
  * The identifier (type) of the Stackdriver Monitoring metric.
The metric cannot have negative values.

The metric must have a value type of INT64 or DOUBLE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#name ComputeAutoscaler#name}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#target ComputeAutoscaler#target}
  */
  readonly target?: number;
  /**
  * Defines how target utilization value is expressed for a
Stackdriver Monitoring metric. Possible values: ["GAUGE", "DELTA_PER_SECOND", "DELTA_PER_MINUTE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#type ComputeAutoscaler#type}
  */
  readonly type?: string;
}

export function computeAutoscalerAutoscalingPolicyMetricToTerraform(struct?: ComputeAutoscalerAutoscalingPolicyMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    target: cdktf.numberToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas {
  /**
  * Specifies a fixed number of VM instances. This must be a positive
integer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#fixed ComputeAutoscaler#fixed}
  */
  readonly fixed?: number;
  /**
  * Specifies a percentage of instances between 0 to 100%, inclusive.
For example, specify 80 for 80%.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#percent ComputeAutoscaler#percent}
  */
  readonly percent?: number;
}

export function computeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasToTerraform(struct?: ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference | ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed: cdktf.numberToTerraform(struct!.fixed),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}

export class ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixed = this._fixed;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixed = undefined;
      this._percent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixed = value.fixed;
      this._percent = value.percent;
    }
  }

  // fixed - computed: false, optional: true, required: false
  private _fixed?: number; 
  public get fixed() {
    return this.getNumberAttribute('fixed');
  }
  public set fixed(value: number) {
    this._fixed = value;
  }
  public resetFixed() {
    this._fixed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedInput() {
    return this._fixed;
  }

  // percent - computed: false, optional: true, required: false
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }
}
export interface ComputeAutoscalerAutoscalingPolicyScaleInControl {
  /**
  * How long back autoscaling should look when computing recommendations
to include directives regarding slower scale down, as described above.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#time_window_sec ComputeAutoscaler#time_window_sec}
  */
  readonly timeWindowSec?: number;
  /**
  * max_scaled_in_replicas block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#max_scaled_in_replicas ComputeAutoscaler#max_scaled_in_replicas}
  */
  readonly maxScaledInReplicas?: ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas;
}

export function computeAutoscalerAutoscalingPolicyScaleInControlToTerraform(struct?: ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference | ComputeAutoscalerAutoscalingPolicyScaleInControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_window_sec: cdktf.numberToTerraform(struct!.timeWindowSec),
    max_scaled_in_replicas: computeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasToTerraform(struct!.maxScaledInReplicas),
  }
}

export class ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeAutoscalerAutoscalingPolicyScaleInControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeWindowSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeWindowSec = this._timeWindowSec;
    }
    if (this._maxScaledInReplicas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxScaledInReplicas = this._maxScaledInReplicas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeAutoscalerAutoscalingPolicyScaleInControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeWindowSec = undefined;
      this._maxScaledInReplicas.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeWindowSec = value.timeWindowSec;
      this._maxScaledInReplicas.internalValue = value.maxScaledInReplicas;
    }
  }

  // time_window_sec - computed: false, optional: true, required: false
  private _timeWindowSec?: number; 
  public get timeWindowSec() {
    return this.getNumberAttribute('time_window_sec');
  }
  public set timeWindowSec(value: number) {
    this._timeWindowSec = value;
  }
  public resetTimeWindowSec() {
    this._timeWindowSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowSecInput() {
    return this._timeWindowSec;
  }

  // max_scaled_in_replicas - computed: false, optional: true, required: false
  private _maxScaledInReplicas = new ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicasOutputReference(this, "max_scaled_in_replicas");
  public get maxScaledInReplicas() {
    return this._maxScaledInReplicas;
  }
  public putMaxScaledInReplicas(value: ComputeAutoscalerAutoscalingPolicyScaleInControlMaxScaledInReplicas) {
    this._maxScaledInReplicas.internalValue = value;
  }
  public resetMaxScaledInReplicas() {
    this._maxScaledInReplicas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScaledInReplicasInput() {
    return this._maxScaledInReplicas.internalValue;
  }
}
export interface ComputeAutoscalerAutoscalingPolicyScalingSchedules {
  /**
  * A description of a scaling schedule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#description ComputeAutoscaler#description}
  */
  readonly description?: string;
  /**
  * A boolean value that specifies if a scaling schedule can influence autoscaler recommendations. If set to true, then a scaling schedule has no effect.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#disabled ComputeAutoscaler#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The duration of time intervals (in seconds) for which this scaling schedule will be running. The minimum allowed value is 300.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#duration_sec ComputeAutoscaler#duration_sec}
  */
  readonly durationSec: number;
  /**
  * Minimum number of VM instances that autoscaler will recommend in time intervals starting according to schedule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#min_required_replicas ComputeAutoscaler#min_required_replicas}
  */
  readonly minRequiredReplicas: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#name ComputeAutoscaler#name}
  */
  readonly name: string;
  /**
  * The start timestamps of time intervals when this scaling schedule should provide a scaling signal. This field uses the extended cron format (with an optional year field).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#schedule ComputeAutoscaler#schedule}
  */
  readonly schedule: string;
  /**
  * The time zone to be used when interpreting the schedule. The value of this field must be a time zone name from the tz database: http://en.wikipedia.org/wiki/Tz_database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#time_zone ComputeAutoscaler#time_zone}
  */
  readonly timeZone?: string;
}

export function computeAutoscalerAutoscalingPolicyScalingSchedulesToTerraform(struct?: ComputeAutoscalerAutoscalingPolicyScalingSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export interface ComputeAutoscalerAutoscalingPolicy {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#cooldown_period ComputeAutoscaler#cooldown_period}
  */
  readonly cooldownPeriod?: number;
  /**
  * The maximum number of instances that the autoscaler can scale up
to. This is required when creating or updating an autoscaler. The
maximum number of replicas should not be lower than minimal number
of replicas.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#max_replicas ComputeAutoscaler#max_replicas}
  */
  readonly maxReplicas: number;
  /**
  * The minimum number of replicas that the autoscaler can scale down
to. This cannot be less than 0. If not provided, autoscaler will
choose a default value depending on maximum number of instances
allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#min_replicas ComputeAutoscaler#min_replicas}
  */
  readonly minReplicas: number;
  /**
  * Defines operating mode for this policy. Default value: "ON" Possible values: ["OFF", "ONLY_UP", "ON"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#mode ComputeAutoscaler#mode}
  */
  readonly mode?: string;
  /**
  * cpu_utilization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#cpu_utilization ComputeAutoscaler#cpu_utilization}
  */
  readonly cpuUtilization?: ComputeAutoscalerAutoscalingPolicyCpuUtilization;
  /**
  * load_balancing_utilization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#load_balancing_utilization ComputeAutoscaler#load_balancing_utilization}
  */
  readonly loadBalancingUtilization?: ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization;
  /**
  * metric block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#metric ComputeAutoscaler#metric}
  */
  readonly metric?: ComputeAutoscalerAutoscalingPolicyMetric[] | cdktf.IResolvable;
  /**
  * scale_in_control block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#scale_in_control ComputeAutoscaler#scale_in_control}
  */
  readonly scaleInControl?: ComputeAutoscalerAutoscalingPolicyScaleInControl;
  /**
  * scaling_schedules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#scaling_schedules ComputeAutoscaler#scaling_schedules}
  */
  readonly scalingSchedules?: ComputeAutoscalerAutoscalingPolicyScalingSchedules[] | cdktf.IResolvable;
}

export function computeAutoscalerAutoscalingPolicyToTerraform(struct?: ComputeAutoscalerAutoscalingPolicyOutputReference | ComputeAutoscalerAutoscalingPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cooldown_period: cdktf.numberToTerraform(struct!.cooldownPeriod),
    max_replicas: cdktf.numberToTerraform(struct!.maxReplicas),
    min_replicas: cdktf.numberToTerraform(struct!.minReplicas),
    mode: cdktf.stringToTerraform(struct!.mode),
    cpu_utilization: computeAutoscalerAutoscalingPolicyCpuUtilizationToTerraform(struct!.cpuUtilization),
    load_balancing_utilization: computeAutoscalerAutoscalingPolicyLoadBalancingUtilizationToTerraform(struct!.loadBalancingUtilization),
    metric: cdktf.listMapper(computeAutoscalerAutoscalingPolicyMetricToTerraform)(struct!.metric),
    scale_in_control: computeAutoscalerAutoscalingPolicyScaleInControlToTerraform(struct!.scaleInControl),
    scaling_schedules: cdktf.listMapper(computeAutoscalerAutoscalingPolicyScalingSchedulesToTerraform)(struct!.scalingSchedules),
  }
}

export class ComputeAutoscalerAutoscalingPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeAutoscalerAutoscalingPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cooldownPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldownPeriod = this._cooldownPeriod;
    }
    if (this._maxReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicas = this._maxReplicas;
    }
    if (this._minReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicas = this._minReplicas;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._cpuUtilization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuUtilization = this._cpuUtilization?.internalValue;
    }
    if (this._loadBalancingUtilization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingUtilization = this._loadBalancingUtilization?.internalValue;
    }
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._scaleInControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleInControl = this._scaleInControl?.internalValue;
    }
    if (this._scalingSchedules !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingSchedules = this._scalingSchedules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeAutoscalerAutoscalingPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cooldownPeriod = undefined;
      this._maxReplicas = undefined;
      this._minReplicas = undefined;
      this._mode = undefined;
      this._cpuUtilization.internalValue = undefined;
      this._loadBalancingUtilization.internalValue = undefined;
      this._metric = undefined;
      this._scaleInControl.internalValue = undefined;
      this._scalingSchedules = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cooldownPeriod = value.cooldownPeriod;
      this._maxReplicas = value.maxReplicas;
      this._minReplicas = value.minReplicas;
      this._mode = value.mode;
      this._cpuUtilization.internalValue = value.cpuUtilization;
      this._loadBalancingUtilization.internalValue = value.loadBalancingUtilization;
      this._metric = value.metric;
      this._scaleInControl.internalValue = value.scaleInControl;
      this._scalingSchedules = value.scalingSchedules;
    }
  }

  // cooldown_period - computed: false, optional: true, required: false
  private _cooldownPeriod?: number; 
  public get cooldownPeriod() {
    return this.getNumberAttribute('cooldown_period');
  }
  public set cooldownPeriod(value: number) {
    this._cooldownPeriod = value;
  }
  public resetCooldownPeriod() {
    this._cooldownPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownPeriodInput() {
    return this._cooldownPeriod;
  }

  // max_replicas - computed: false, optional: false, required: true
  private _maxReplicas?: number; 
  public get maxReplicas() {
    return this.getNumberAttribute('max_replicas');
  }
  public set maxReplicas(value: number) {
    this._maxReplicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicasInput() {
    return this._maxReplicas;
  }

  // min_replicas - computed: false, optional: false, required: true
  private _minReplicas?: number; 
  public get minReplicas() {
    return this.getNumberAttribute('min_replicas');
  }
  public set minReplicas(value: number) {
    this._minReplicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicasInput() {
    return this._minReplicas;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // cpu_utilization - computed: false, optional: true, required: false
  private _cpuUtilization = new ComputeAutoscalerAutoscalingPolicyCpuUtilizationOutputReference(this, "cpu_utilization");
  public get cpuUtilization() {
    return this._cpuUtilization;
  }
  public putCpuUtilization(value: ComputeAutoscalerAutoscalingPolicyCpuUtilization) {
    this._cpuUtilization.internalValue = value;
  }
  public resetCpuUtilization() {
    this._cpuUtilization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuUtilizationInput() {
    return this._cpuUtilization.internalValue;
  }

  // load_balancing_utilization - computed: false, optional: true, required: false
  private _loadBalancingUtilization = new ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilizationOutputReference(this, "load_balancing_utilization");
  public get loadBalancingUtilization() {
    return this._loadBalancingUtilization;
  }
  public putLoadBalancingUtilization(value: ComputeAutoscalerAutoscalingPolicyLoadBalancingUtilization) {
    this._loadBalancingUtilization.internalValue = value;
  }
  public resetLoadBalancingUtilization() {
    this._loadBalancingUtilization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingUtilizationInput() {
    return this._loadBalancingUtilization.internalValue;
  }

  // metric - computed: false, optional: true, required: false
  private _metric?: ComputeAutoscalerAutoscalingPolicyMetric[] | cdktf.IResolvable; 
  public get metric() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metric');
  }
  public set metric(value: ComputeAutoscalerAutoscalingPolicyMetric[] | cdktf.IResolvable) {
    this._metric = value;
  }
  public resetMetric() {
    this._metric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // scale_in_control - computed: false, optional: true, required: false
  private _scaleInControl = new ComputeAutoscalerAutoscalingPolicyScaleInControlOutputReference(this, "scale_in_control");
  public get scaleInControl() {
    return this._scaleInControl;
  }
  public putScaleInControl(value: ComputeAutoscalerAutoscalingPolicyScaleInControl) {
    this._scaleInControl.internalValue = value;
  }
  public resetScaleInControl() {
    this._scaleInControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInControlInput() {
    return this._scaleInControl.internalValue;
  }

  // scaling_schedules - computed: false, optional: true, required: false
  private _scalingSchedules?: ComputeAutoscalerAutoscalingPolicyScalingSchedules[] | cdktf.IResolvable; 
  public get scalingSchedules() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('scaling_schedules')));
  }
  public set scalingSchedules(value: ComputeAutoscalerAutoscalingPolicyScalingSchedules[] | cdktf.IResolvable) {
    this._scalingSchedules = value;
  }
  public resetScalingSchedules() {
    this._scalingSchedules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingSchedulesInput() {
    return this._scalingSchedules;
  }
}
export interface ComputeAutoscalerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#create ComputeAutoscaler#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#delete ComputeAutoscaler#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler#update ComputeAutoscaler#update}
  */
  readonly update?: string;
}

export function computeAutoscalerTimeoutsToTerraform(struct?: ComputeAutoscalerTimeoutsOutputReference | ComputeAutoscalerTimeouts | cdktf.IResolvable): any {
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

export class ComputeAutoscalerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeAutoscalerTimeouts | undefined {
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

  public set internalValue(value: ComputeAutoscalerTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler google_compute_autoscaler}
*/
export class ComputeAutoscaler extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_autoscaler";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_autoscaler google_compute_autoscaler} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeAutoscalerConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeAutoscalerConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_autoscaler',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.18.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._project = config.project;
    this._target = config.target;
    this._zone = config.zone;
    this._autoscalingPolicy.internalValue = config.autoscalingPolicy;
    this._timeouts.internalValue = config.timeouts;
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
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // autoscaling_policy - computed: false, optional: false, required: true
  private _autoscalingPolicy = new ComputeAutoscalerAutoscalingPolicyOutputReference(this, "autoscaling_policy");
  public get autoscalingPolicy() {
    return this._autoscalingPolicy;
  }
  public putAutoscalingPolicy(value: ComputeAutoscalerAutoscalingPolicy) {
    this._autoscalingPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingPolicyInput() {
    return this._autoscalingPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeAutoscalerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeAutoscalerTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      target: cdktf.stringToTerraform(this._target),
      zone: cdktf.stringToTerraform(this._zone),
      autoscaling_policy: computeAutoscalerAutoscalingPolicyToTerraform(this._autoscalingPolicy.internalValue),
      timeouts: computeAutoscalerTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
