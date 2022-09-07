// https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataprocAutoscalingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#id DataprocAutoscalingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The  location where the autoscaling policy should reside.
The default value is 'global'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#location DataprocAutoscalingPolicy#location}
  */
  readonly location?: string;
  /**
  * The policy id. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 50 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#policy_id DataprocAutoscalingPolicy#policy_id}
  */
  readonly policyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#project DataprocAutoscalingPolicy#project}
  */
  readonly project?: string;
  /**
  * basic_algorithm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#basic_algorithm DataprocAutoscalingPolicy#basic_algorithm}
  */
  readonly basicAlgorithm?: DataprocAutoscalingPolicyBasicAlgorithm;
  /**
  * secondary_worker_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#secondary_worker_config DataprocAutoscalingPolicy#secondary_worker_config}
  */
  readonly secondaryWorkerConfig?: DataprocAutoscalingPolicySecondaryWorkerConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#timeouts DataprocAutoscalingPolicy#timeouts}
  */
  readonly timeouts?: DataprocAutoscalingPolicyTimeouts;
  /**
  * worker_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#worker_config DataprocAutoscalingPolicy#worker_config}
  */
  readonly workerConfig?: DataprocAutoscalingPolicyWorkerConfig;
}
export interface DataprocAutoscalingPolicyBasicAlgorithmYarnConfig {
  /**
  * Timeout for YARN graceful decommissioning of Node Managers. Specifies the
duration to wait for jobs to complete before forcefully removing workers
(and potentially interrupting jobs). Only applicable to downscaling operations.

Bounds: [0s, 1d].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#graceful_decommission_timeout DataprocAutoscalingPolicy#graceful_decommission_timeout}
  */
  readonly gracefulDecommissionTimeout: string;
  /**
  * Fraction of average pending memory in the last cooldown period for which to
remove workers. A scale-down factor of 1 will result in scaling down so that there
is no available memory remaining after the update (more aggressive scaling).
A scale-down factor of 0 disables removing workers, which can be beneficial for
autoscaling a single job.

Bounds: [0.0, 1.0].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#scale_down_factor DataprocAutoscalingPolicy#scale_down_factor}
  */
  readonly scaleDownFactor: number;
  /**
  * Minimum scale-down threshold as a fraction of total cluster size before scaling occurs.
For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must
recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0
means the autoscaler will scale down on any recommended change.

Bounds: [0.0, 1.0]. Default: 0.0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#scale_down_min_worker_fraction DataprocAutoscalingPolicy#scale_down_min_worker_fraction}
  */
  readonly scaleDownMinWorkerFraction?: number;
  /**
  * Fraction of average pending memory in the last cooldown period for which to
add workers. A scale-up factor of 1.0 will result in scaling up so that there
is no pending memory remaining after the update (more aggressive scaling).
A scale-up factor closer to 0 will result in a smaller magnitude of scaling up
(less aggressive scaling).

Bounds: [0.0, 1.0].
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#scale_up_factor DataprocAutoscalingPolicy#scale_up_factor}
  */
  readonly scaleUpFactor: number;
  /**
  * Minimum scale-up threshold as a fraction of total cluster size before scaling
occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler
must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of
0 means the autoscaler will scale up on any recommended change.

Bounds: [0.0, 1.0]. Default: 0.0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#scale_up_min_worker_fraction DataprocAutoscalingPolicy#scale_up_min_worker_fraction}
  */
  readonly scaleUpMinWorkerFraction?: number;
}

export function dataprocAutoscalingPolicyBasicAlgorithmYarnConfigToTerraform(struct?: DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference | DataprocAutoscalingPolicyBasicAlgorithmYarnConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    graceful_decommission_timeout: cdktf.stringToTerraform(struct!.gracefulDecommissionTimeout),
    scale_down_factor: cdktf.numberToTerraform(struct!.scaleDownFactor),
    scale_down_min_worker_fraction: cdktf.numberToTerraform(struct!.scaleDownMinWorkerFraction),
    scale_up_factor: cdktf.numberToTerraform(struct!.scaleUpFactor),
    scale_up_min_worker_fraction: cdktf.numberToTerraform(struct!.scaleUpMinWorkerFraction),
  }
}

export class DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocAutoscalingPolicyBasicAlgorithmYarnConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gracefulDecommissionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulDecommissionTimeout = this._gracefulDecommissionTimeout;
    }
    if (this._scaleDownFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownFactor = this._scaleDownFactor;
    }
    if (this._scaleDownMinWorkerFraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleDownMinWorkerFraction = this._scaleDownMinWorkerFraction;
    }
    if (this._scaleUpFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleUpFactor = this._scaleUpFactor;
    }
    if (this._scaleUpMinWorkerFraction !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleUpMinWorkerFraction = this._scaleUpMinWorkerFraction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocAutoscalingPolicyBasicAlgorithmYarnConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gracefulDecommissionTimeout = undefined;
      this._scaleDownFactor = undefined;
      this._scaleDownMinWorkerFraction = undefined;
      this._scaleUpFactor = undefined;
      this._scaleUpMinWorkerFraction = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gracefulDecommissionTimeout = value.gracefulDecommissionTimeout;
      this._scaleDownFactor = value.scaleDownFactor;
      this._scaleDownMinWorkerFraction = value.scaleDownMinWorkerFraction;
      this._scaleUpFactor = value.scaleUpFactor;
      this._scaleUpMinWorkerFraction = value.scaleUpMinWorkerFraction;
    }
  }

  // graceful_decommission_timeout - computed: false, optional: false, required: true
  private _gracefulDecommissionTimeout?: string; 
  public get gracefulDecommissionTimeout() {
    return this.getStringAttribute('graceful_decommission_timeout');
  }
  public set gracefulDecommissionTimeout(value: string) {
    this._gracefulDecommissionTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulDecommissionTimeoutInput() {
    return this._gracefulDecommissionTimeout;
  }

  // scale_down_factor - computed: false, optional: false, required: true
  private _scaleDownFactor?: number; 
  public get scaleDownFactor() {
    return this.getNumberAttribute('scale_down_factor');
  }
  public set scaleDownFactor(value: number) {
    this._scaleDownFactor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownFactorInput() {
    return this._scaleDownFactor;
  }

  // scale_down_min_worker_fraction - computed: false, optional: true, required: false
  private _scaleDownMinWorkerFraction?: number; 
  public get scaleDownMinWorkerFraction() {
    return this.getNumberAttribute('scale_down_min_worker_fraction');
  }
  public set scaleDownMinWorkerFraction(value: number) {
    this._scaleDownMinWorkerFraction = value;
  }
  public resetScaleDownMinWorkerFraction() {
    this._scaleDownMinWorkerFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownMinWorkerFractionInput() {
    return this._scaleDownMinWorkerFraction;
  }

  // scale_up_factor - computed: false, optional: false, required: true
  private _scaleUpFactor?: number; 
  public get scaleUpFactor() {
    return this.getNumberAttribute('scale_up_factor');
  }
  public set scaleUpFactor(value: number) {
    this._scaleUpFactor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpFactorInput() {
    return this._scaleUpFactor;
  }

  // scale_up_min_worker_fraction - computed: false, optional: true, required: false
  private _scaleUpMinWorkerFraction?: number; 
  public get scaleUpMinWorkerFraction() {
    return this.getNumberAttribute('scale_up_min_worker_fraction');
  }
  public set scaleUpMinWorkerFraction(value: number) {
    this._scaleUpMinWorkerFraction = value;
  }
  public resetScaleUpMinWorkerFraction() {
    this._scaleUpMinWorkerFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpMinWorkerFractionInput() {
    return this._scaleUpMinWorkerFraction;
  }
}
export interface DataprocAutoscalingPolicyBasicAlgorithm {
  /**
  * Duration between scaling events. A scaling period starts after the
update operation from the previous event has completed.

Bounds: [2m, 1d]. Default: 2m.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#cooldown_period DataprocAutoscalingPolicy#cooldown_period}
  */
  readonly cooldownPeriod?: string;
  /**
  * yarn_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#yarn_config DataprocAutoscalingPolicy#yarn_config}
  */
  readonly yarnConfig: DataprocAutoscalingPolicyBasicAlgorithmYarnConfig;
}

export function dataprocAutoscalingPolicyBasicAlgorithmToTerraform(struct?: DataprocAutoscalingPolicyBasicAlgorithmOutputReference | DataprocAutoscalingPolicyBasicAlgorithm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cooldown_period: cdktf.stringToTerraform(struct!.cooldownPeriod),
    yarn_config: dataprocAutoscalingPolicyBasicAlgorithmYarnConfigToTerraform(struct!.yarnConfig),
  }
}

export class DataprocAutoscalingPolicyBasicAlgorithmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocAutoscalingPolicyBasicAlgorithm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cooldownPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cooldownPeriod = this._cooldownPeriod;
    }
    if (this._yarnConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yarnConfig = this._yarnConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocAutoscalingPolicyBasicAlgorithm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cooldownPeriod = undefined;
      this._yarnConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cooldownPeriod = value.cooldownPeriod;
      this._yarnConfig.internalValue = value.yarnConfig;
    }
  }

  // cooldown_period - computed: false, optional: true, required: false
  private _cooldownPeriod?: string; 
  public get cooldownPeriod() {
    return this.getStringAttribute('cooldown_period');
  }
  public set cooldownPeriod(value: string) {
    this._cooldownPeriod = value;
  }
  public resetCooldownPeriod() {
    this._cooldownPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownPeriodInput() {
    return this._cooldownPeriod;
  }

  // yarn_config - computed: false, optional: false, required: true
  private _yarnConfig = new DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference(this, "yarn_config");
  public get yarnConfig() {
    return this._yarnConfig;
  }
  public putYarnConfig(value: DataprocAutoscalingPolicyBasicAlgorithmYarnConfig) {
    this._yarnConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yarnConfigInput() {
    return this._yarnConfig.internalValue;
  }
}
export interface DataprocAutoscalingPolicySecondaryWorkerConfig {
  /**
  * Maximum number of instances for this group. Note that by default, clusters will not use
secondary workers. Required for secondary workers if the minimum secondary instances is set.
Bounds: [minInstances, ). Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#max_instances DataprocAutoscalingPolicy#max_instances}
  */
  readonly maxInstances?: number;
  /**
  * Minimum number of instances for this group. Bounds: [0, maxInstances]. Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#min_instances DataprocAutoscalingPolicy#min_instances}
  */
  readonly minInstances?: number;
  /**
  * Weight for the instance group, which is used to determine the fraction of total workers
in the cluster from this instance group. For example, if primary workers have weight 2,
and secondary workers have weight 1, the cluster will have approximately 2 primary workers
for each secondary worker.

The cluster may not reach the specified balance if constrained by min/max bounds or other
autoscaling settings. For example, if maxInstances for secondary workers is 0, then only
primary workers will be added. The cluster can also be out of balance when created.

If weight is not set on any instance group, the cluster will default to equal weight for
all groups: the cluster will attempt to maintain an equal number of workers in each group
within the configured size bounds for each group. If weight is set for one group only,
the cluster will default to zero weight on the unset group. For example if weight is set
only on primary workers, the cluster will use primary workers only and no secondary workers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#weight DataprocAutoscalingPolicy#weight}
  */
  readonly weight?: number;
}

export function dataprocAutoscalingPolicySecondaryWorkerConfigToTerraform(struct?: DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference | DataprocAutoscalingPolicySecondaryWorkerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_instances: cdktf.numberToTerraform(struct!.maxInstances),
    min_instances: cdktf.numberToTerraform(struct!.minInstances),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export class DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocAutoscalingPolicySecondaryWorkerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstances = this._maxInstances;
    }
    if (this._minInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstances = this._minInstances;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocAutoscalingPolicySecondaryWorkerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxInstances = undefined;
      this._minInstances = undefined;
      this._weight = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxInstances = value.maxInstances;
      this._minInstances = value.minInstances;
      this._weight = value.weight;
    }
  }

  // max_instances - computed: false, optional: true, required: false
  private _maxInstances?: number; 
  public get maxInstances() {
    return this.getNumberAttribute('max_instances');
  }
  public set maxInstances(value: number) {
    this._maxInstances = value;
  }
  public resetMaxInstances() {
    this._maxInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstancesInput() {
    return this._maxInstances;
  }

  // min_instances - computed: false, optional: true, required: false
  private _minInstances?: number; 
  public get minInstances() {
    return this.getNumberAttribute('min_instances');
  }
  public set minInstances(value: number) {
    this._minInstances = value;
  }
  public resetMinInstances() {
    this._minInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstancesInput() {
    return this._minInstances;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}
export interface DataprocAutoscalingPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#create DataprocAutoscalingPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#delete DataprocAutoscalingPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#update DataprocAutoscalingPolicy#update}
  */
  readonly update?: string;
}

export function dataprocAutoscalingPolicyTimeoutsToTerraform(struct?: DataprocAutoscalingPolicyTimeoutsOutputReference | DataprocAutoscalingPolicyTimeouts | cdktf.IResolvable): any {
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

export class DataprocAutoscalingPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocAutoscalingPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataprocAutoscalingPolicyTimeouts | cdktf.IResolvable | undefined) {
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
export interface DataprocAutoscalingPolicyWorkerConfig {
  /**
  * Maximum number of instances for this group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#max_instances DataprocAutoscalingPolicy#max_instances}
  */
  readonly maxInstances: number;
  /**
  * Minimum number of instances for this group. Bounds: [2, maxInstances]. Defaults to 2.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#min_instances DataprocAutoscalingPolicy#min_instances}
  */
  readonly minInstances?: number;
  /**
  * Weight for the instance group, which is used to determine the fraction of total workers
in the cluster from this instance group. For example, if primary workers have weight 2,
and secondary workers have weight 1, the cluster will have approximately 2 primary workers
for each secondary worker.

The cluster may not reach the specified balance if constrained by min/max bounds or other
autoscaling settings. For example, if maxInstances for secondary workers is 0, then only
primary workers will be added. The cluster can also be out of balance when created.

If weight is not set on any instance group, the cluster will default to equal weight for
all groups: the cluster will attempt to maintain an equal number of workers in each group
within the configured size bounds for each group. If weight is set for one group only,
the cluster will default to zero weight on the unset group. For example if weight is set
only on primary workers, the cluster will use primary workers only and no secondary workers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy#weight DataprocAutoscalingPolicy#weight}
  */
  readonly weight?: number;
}

export function dataprocAutoscalingPolicyWorkerConfigToTerraform(struct?: DataprocAutoscalingPolicyWorkerConfigOutputReference | DataprocAutoscalingPolicyWorkerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_instances: cdktf.numberToTerraform(struct!.maxInstances),
    min_instances: cdktf.numberToTerraform(struct!.minInstances),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}

export class DataprocAutoscalingPolicyWorkerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataprocAutoscalingPolicyWorkerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstances = this._maxInstances;
    }
    if (this._minInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstances = this._minInstances;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataprocAutoscalingPolicyWorkerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxInstances = undefined;
      this._minInstances = undefined;
      this._weight = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxInstances = value.maxInstances;
      this._minInstances = value.minInstances;
      this._weight = value.weight;
    }
  }

  // max_instances - computed: false, optional: false, required: true
  private _maxInstances?: number; 
  public get maxInstances() {
    return this.getNumberAttribute('max_instances');
  }
  public set maxInstances(value: number) {
    this._maxInstances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstancesInput() {
    return this._maxInstances;
  }

  // min_instances - computed: false, optional: true, required: false
  private _minInstances?: number; 
  public get minInstances() {
    return this.getNumberAttribute('min_instances');
  }
  public set minInstances(value: number) {
    this._minInstances = value;
  }
  public resetMinInstances() {
    this._minInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstancesInput() {
    return this._minInstances;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy google_dataproc_autoscaling_policy}
*/
export class DataprocAutoscalingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dataproc_autoscaling_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy google_dataproc_autoscaling_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataprocAutoscalingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataprocAutoscalingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataproc_autoscaling_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
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
    this._policyId = config.policyId;
    this._project = config.project;
    this._basicAlgorithm.internalValue = config.basicAlgorithm;
    this._secondaryWorkerConfig.internalValue = config.secondaryWorkerConfig;
    this._timeouts.internalValue = config.timeouts;
    this._workerConfig.internalValue = config.workerConfig;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
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

  // basic_algorithm - computed: false, optional: true, required: false
  private _basicAlgorithm = new DataprocAutoscalingPolicyBasicAlgorithmOutputReference(this, "basic_algorithm");
  public get basicAlgorithm() {
    return this._basicAlgorithm;
  }
  public putBasicAlgorithm(value: DataprocAutoscalingPolicyBasicAlgorithm) {
    this._basicAlgorithm.internalValue = value;
  }
  public resetBasicAlgorithm() {
    this._basicAlgorithm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAlgorithmInput() {
    return this._basicAlgorithm.internalValue;
  }

  // secondary_worker_config - computed: false, optional: true, required: false
  private _secondaryWorkerConfig = new DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference(this, "secondary_worker_config");
  public get secondaryWorkerConfig() {
    return this._secondaryWorkerConfig;
  }
  public putSecondaryWorkerConfig(value: DataprocAutoscalingPolicySecondaryWorkerConfig) {
    this._secondaryWorkerConfig.internalValue = value;
  }
  public resetSecondaryWorkerConfig() {
    this._secondaryWorkerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryWorkerConfigInput() {
    return this._secondaryWorkerConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataprocAutoscalingPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataprocAutoscalingPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // worker_config - computed: false, optional: true, required: false
  private _workerConfig = new DataprocAutoscalingPolicyWorkerConfigOutputReference(this, "worker_config");
  public get workerConfig() {
    return this._workerConfig;
  }
  public putWorkerConfig(value: DataprocAutoscalingPolicyWorkerConfig) {
    this._workerConfig.internalValue = value;
  }
  public resetWorkerConfig() {
    this._workerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerConfigInput() {
    return this._workerConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      policy_id: cdktf.stringToTerraform(this._policyId),
      project: cdktf.stringToTerraform(this._project),
      basic_algorithm: dataprocAutoscalingPolicyBasicAlgorithmToTerraform(this._basicAlgorithm.internalValue),
      secondary_worker_config: dataprocAutoscalingPolicySecondaryWorkerConfigToTerraform(this._secondaryWorkerConfig.internalValue),
      timeouts: dataprocAutoscalingPolicyTimeoutsToTerraform(this._timeouts.internalValue),
      worker_config: dataprocAutoscalingPolicyWorkerConfigToTerraform(this._workerConfig.internalValue),
    };
  }
}
