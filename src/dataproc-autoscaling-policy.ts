// https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataprocAutoscalingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The  location where the autoscaling policy should reside.
The default value is 'global'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#location DataprocAutoscalingPolicy#location}
  */
  readonly location?: string;
  /**
  * The policy id. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 50 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#policy_id DataprocAutoscalingPolicy#policy_id}
  */
  readonly policyId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#project DataprocAutoscalingPolicy#project}
  */
  readonly project?: string;
  /**
  * basic_algorithm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#basic_algorithm DataprocAutoscalingPolicy#basic_algorithm}
  */
  readonly basicAlgorithm?: DataprocAutoscalingPolicyBasicAlgorithm;
  /**
  * secondary_worker_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#secondary_worker_config DataprocAutoscalingPolicy#secondary_worker_config}
  */
  readonly secondaryWorkerConfig?: DataprocAutoscalingPolicySecondaryWorkerConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#timeouts DataprocAutoscalingPolicy#timeouts}
  */
  readonly timeouts?: DataprocAutoscalingPolicyTimeouts;
  /**
  * worker_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#worker_config DataprocAutoscalingPolicy#worker_config}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#graceful_decommission_timeout DataprocAutoscalingPolicy#graceful_decommission_timeout}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#scale_down_factor DataprocAutoscalingPolicy#scale_down_factor}
  */
  readonly scaleDownFactor: number;
  /**
  * Minimum scale-down threshold as a fraction of total cluster size before scaling occurs.
For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must
recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0
means the autoscaler will scale down on any recommended change.

Bounds: [0.0, 1.0]. Default: 0.0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#scale_down_min_worker_fraction DataprocAutoscalingPolicy#scale_down_min_worker_fraction}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#scale_up_factor DataprocAutoscalingPolicy#scale_up_factor}
  */
  readonly scaleUpFactor: number;
  /**
  * Minimum scale-up threshold as a fraction of total cluster size before scaling
occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler
must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of
0 means the autoscaler will scale up on any recommended change.

Bounds: [0.0, 1.0]. Default: 0.0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#scale_up_min_worker_fraction DataprocAutoscalingPolicy#scale_up_min_worker_fraction}
  */
  readonly scaleUpMinWorkerFraction?: number;
}

function dataprocAutoscalingPolicyBasicAlgorithmYarnConfigToTerraform(struct?: DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference | DataprocAutoscalingPolicyBasicAlgorithmYarnConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._gracefulDecommissionTimeout
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
    return this._scaleDownFactor
  }

  // scale_down_min_worker_fraction - computed: false, optional: true, required: false
  private _scaleDownMinWorkerFraction?: number | undefined; 
  public get scaleDownMinWorkerFraction() {
    return this.getNumberAttribute('scale_down_min_worker_fraction');
  }
  public set scaleDownMinWorkerFraction(value: number | undefined) {
    this._scaleDownMinWorkerFraction = value;
  }
  public resetScaleDownMinWorkerFraction() {
    this._scaleDownMinWorkerFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleDownMinWorkerFractionInput() {
    return this._scaleDownMinWorkerFraction
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
    return this._scaleUpFactor
  }

  // scale_up_min_worker_fraction - computed: false, optional: true, required: false
  private _scaleUpMinWorkerFraction?: number | undefined; 
  public get scaleUpMinWorkerFraction() {
    return this.getNumberAttribute('scale_up_min_worker_fraction');
  }
  public set scaleUpMinWorkerFraction(value: number | undefined) {
    this._scaleUpMinWorkerFraction = value;
  }
  public resetScaleUpMinWorkerFraction() {
    this._scaleUpMinWorkerFraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleUpMinWorkerFractionInput() {
    return this._scaleUpMinWorkerFraction
  }
}
export interface DataprocAutoscalingPolicyBasicAlgorithm {
  /**
  * Duration between scaling events. A scaling period starts after the
update operation from the previous event has completed.

Bounds: [2m, 1d]. Default: 2m.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#cooldown_period DataprocAutoscalingPolicy#cooldown_period}
  */
  readonly cooldownPeriod?: string;
  /**
  * yarn_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#yarn_config DataprocAutoscalingPolicy#yarn_config}
  */
  readonly yarnConfig: DataprocAutoscalingPolicyBasicAlgorithmYarnConfig;
}

function dataprocAutoscalingPolicyBasicAlgorithmToTerraform(struct?: DataprocAutoscalingPolicyBasicAlgorithmOutputReference | DataprocAutoscalingPolicyBasicAlgorithm): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cooldown_period: cdktf.stringToTerraform(struct!.cooldownPeriod),
    yarn_config: dataprocAutoscalingPolicyBasicAlgorithmYarnConfigToTerraform(struct!.yarnConfig),
  }
}

export class DataprocAutoscalingPolicyBasicAlgorithmOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cooldown_period - computed: false, optional: true, required: false
  private _cooldownPeriod?: string | undefined; 
  public get cooldownPeriod() {
    return this.getStringAttribute('cooldown_period');
  }
  public set cooldownPeriod(value: string | undefined) {
    this._cooldownPeriod = value;
  }
  public resetCooldownPeriod() {
    this._cooldownPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownPeriodInput() {
    return this._cooldownPeriod
  }

  // yarn_config - computed: false, optional: false, required: true
  private _yarnConfig?: DataprocAutoscalingPolicyBasicAlgorithmYarnConfig; 
  private __yarnConfigOutput = new DataprocAutoscalingPolicyBasicAlgorithmYarnConfigOutputReference(this as any, "yarn_config", true);
  public get yarnConfig() {
    return this.__yarnConfigOutput;
  }
  public putYarnConfig(value: DataprocAutoscalingPolicyBasicAlgorithmYarnConfig) {
    this._yarnConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yarnConfigInput() {
    return this._yarnConfig
  }
}
export interface DataprocAutoscalingPolicySecondaryWorkerConfig {
  /**
  * Maximum number of instances for this group. Note that by default, clusters will not use
secondary workers. Required for secondary workers if the minimum secondary instances is set.
Bounds: [minInstances, ). Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#max_instances DataprocAutoscalingPolicy#max_instances}
  */
  readonly maxInstances?: number;
  /**
  * Minimum number of instances for this group. Bounds: [0, maxInstances]. Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#min_instances DataprocAutoscalingPolicy#min_instances}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#weight DataprocAutoscalingPolicy#weight}
  */
  readonly weight?: number;
}

function dataprocAutoscalingPolicySecondaryWorkerConfigToTerraform(struct?: DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference | DataprocAutoscalingPolicySecondaryWorkerConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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

  // min_instances - computed: false, optional: true, required: false
  private _minInstances?: number | undefined; 
  public get minInstances() {
    return this.getNumberAttribute('min_instances');
  }
  public set minInstances(value: number | undefined) {
    this._minInstances = value;
  }
  public resetMinInstances() {
    this._minInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstancesInput() {
    return this._minInstances
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number | undefined; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number | undefined) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight
  }
}
export interface DataprocAutoscalingPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#create DataprocAutoscalingPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#delete DataprocAutoscalingPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#update DataprocAutoscalingPolicy#update}
  */
  readonly update?: string;
}

function dataprocAutoscalingPolicyTimeoutsToTerraform(struct?: DataprocAutoscalingPolicyTimeoutsOutputReference | DataprocAutoscalingPolicyTimeouts): any {
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

export class DataprocAutoscalingPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface DataprocAutoscalingPolicyWorkerConfig {
  /**
  * Maximum number of instances for this group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#max_instances DataprocAutoscalingPolicy#max_instances}
  */
  readonly maxInstances: number;
  /**
  * Minimum number of instances for this group. Bounds: [2, maxInstances]. Defaults to 2.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#min_instances DataprocAutoscalingPolicy#min_instances}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html#weight DataprocAutoscalingPolicy#weight}
  */
  readonly weight?: number;
}

function dataprocAutoscalingPolicyWorkerConfigToTerraform(struct?: DataprocAutoscalingPolicyWorkerConfigOutputReference | DataprocAutoscalingPolicyWorkerConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._maxInstances
  }

  // min_instances - computed: false, optional: true, required: false
  private _minInstances?: number | undefined; 
  public get minInstances() {
    return this.getNumberAttribute('min_instances');
  }
  public set minInstances(value: number | undefined) {
    this._minInstances = value;
  }
  public resetMinInstances() {
    this._minInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstancesInput() {
    return this._minInstances
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number | undefined; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number | undefined) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html google_dataproc_autoscaling_policy}
*/
export class DataprocAutoscalingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_dataproc_autoscaling_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html google_dataproc_autoscaling_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataprocAutoscalingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataprocAutoscalingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataproc_autoscaling_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._policyId = config.policyId;
    this._project = config.project;
    this._basicAlgorithm = config.basicAlgorithm;
    this._secondaryWorkerConfig = config.secondaryWorkerConfig;
    this._timeouts = config.timeouts;
    this._workerConfig = config.workerConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: true, required: false
  private _location?: string | undefined; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string | undefined) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
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
    return this._policyId
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

  // basic_algorithm - computed: false, optional: true, required: false
  private _basicAlgorithm?: DataprocAutoscalingPolicyBasicAlgorithm | undefined; 
  private __basicAlgorithmOutput = new DataprocAutoscalingPolicyBasicAlgorithmOutputReference(this as any, "basic_algorithm", true);
  public get basicAlgorithm() {
    return this.__basicAlgorithmOutput;
  }
  public putBasicAlgorithm(value: DataprocAutoscalingPolicyBasicAlgorithm | undefined) {
    this._basicAlgorithm = value;
  }
  public resetBasicAlgorithm() {
    this._basicAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAlgorithmInput() {
    return this._basicAlgorithm
  }

  // secondary_worker_config - computed: false, optional: true, required: false
  private _secondaryWorkerConfig?: DataprocAutoscalingPolicySecondaryWorkerConfig | undefined; 
  private __secondaryWorkerConfigOutput = new DataprocAutoscalingPolicySecondaryWorkerConfigOutputReference(this as any, "secondary_worker_config", true);
  public get secondaryWorkerConfig() {
    return this.__secondaryWorkerConfigOutput;
  }
  public putSecondaryWorkerConfig(value: DataprocAutoscalingPolicySecondaryWorkerConfig | undefined) {
    this._secondaryWorkerConfig = value;
  }
  public resetSecondaryWorkerConfig() {
    this._secondaryWorkerConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryWorkerConfigInput() {
    return this._secondaryWorkerConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataprocAutoscalingPolicyTimeouts | undefined; 
  private __timeoutsOutput = new DataprocAutoscalingPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: DataprocAutoscalingPolicyTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // worker_config - computed: false, optional: true, required: false
  private _workerConfig?: DataprocAutoscalingPolicyWorkerConfig | undefined; 
  private __workerConfigOutput = new DataprocAutoscalingPolicyWorkerConfigOutputReference(this as any, "worker_config", true);
  public get workerConfig() {
    return this.__workerConfigOutput;
  }
  public putWorkerConfig(value: DataprocAutoscalingPolicyWorkerConfig | undefined) {
    this._workerConfig = value;
  }
  public resetWorkerConfig() {
    this._workerConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerConfigInput() {
    return this._workerConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: cdktf.stringToTerraform(this._location),
      policy_id: cdktf.stringToTerraform(this._policyId),
      project: cdktf.stringToTerraform(this._project),
      basic_algorithm: dataprocAutoscalingPolicyBasicAlgorithmToTerraform(this._basicAlgorithm),
      secondary_worker_config: dataprocAutoscalingPolicySecondaryWorkerConfigToTerraform(this._secondaryWorkerConfig),
      timeouts: dataprocAutoscalingPolicyTimeoutsToTerraform(this._timeouts),
      worker_config: dataprocAutoscalingPolicyWorkerConfigToTerraform(this._workerConfig),
    };
  }
}
