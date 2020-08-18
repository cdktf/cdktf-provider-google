// https://www.terraform.io/docs/providers/google/r/dataproc_autoscaling_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataprocAutoscalingPolicyConfig extends TerraformMetaArguments {
  /** The  location where the autoscaling poicy should reside.
The default value is 'global'. */
  readonly location?: string;
  /** The policy id. The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 50 characters. */
  readonly policyId: string;
  readonly project?: string;
  /** basic_algorithm block */
  readonly basicAlgorithm?: DataprocAutoscalingPolicyBasicAlgorithm[];
  /** secondary_worker_config block */
  readonly secondaryWorkerConfig?: DataprocAutoscalingPolicySecondaryWorkerConfig[];
  /** timeouts block */
  readonly timeouts?: DataprocAutoscalingPolicyTimeouts;
  /** worker_config block */
  readonly workerConfig?: DataprocAutoscalingPolicyWorkerConfig[];
}
export interface DataprocAutoscalingPolicyBasicAlgorithmYarnConfig {
  /** Timeout for YARN graceful decommissioning of Node Managers. Specifies the
duration to wait for jobs to complete before forcefully removing workers
(and potentially interrupting jobs). Only applicable to downscaling operations.

Bounds: [0s, 1d]. */
  readonly gracefulDecommissionTimeout: string;
  /** Fraction of average pending memory in the last cooldown period for which to
remove workers. A scale-down factor of 1 will result in scaling down so that there
is no available memory remaining after the update (more aggressive scaling).
A scale-down factor of 0 disables removing workers, which can be beneficial for
autoscaling a single job.

Bounds: [0.0, 1.0]. */
  readonly scaleDownFactor: number;
  /** Minimum scale-down threshold as a fraction of total cluster size before scaling occurs.
For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler must
recommend at least a 2 worker scale-down for the cluster to scale. A threshold of 0
means the autoscaler will scale down on any recommended change.

Bounds: [0.0, 1.0]. Default: 0.0. */
  readonly scaleDownMinWorkerFraction?: number;
  /** Fraction of average pending memory in the last cooldown period for which to
add workers. A scale-up factor of 1.0 will result in scaling up so that there
is no pending memory remaining after the update (more aggressive scaling).
A scale-up factor closer to 0 will result in a smaller magnitude of scaling up
(less aggressive scaling).

Bounds: [0.0, 1.0]. */
  readonly scaleUpFactor: number;
  /** Minimum scale-up threshold as a fraction of total cluster size before scaling
occurs. For example, in a 20-worker cluster, a threshold of 0.1 means the autoscaler
must recommend at least a 2-worker scale-up for the cluster to scale. A threshold of
0 means the autoscaler will scale up on any recommended change.

Bounds: [0.0, 1.0]. Default: 0.0. */
  readonly scaleUpMinWorkerFraction?: number;
}
export interface DataprocAutoscalingPolicyBasicAlgorithm {
  /** Duration between scaling events. A scaling period starts after the
update operation from the previous event has completed.

Bounds: [2m, 1d]. Default: 2m. */
  readonly cooldownPeriod?: string;
  /** yarn_config block */
  readonly yarnConfig: DataprocAutoscalingPolicyBasicAlgorithmYarnConfig[];
}
export interface DataprocAutoscalingPolicySecondaryWorkerConfig {
  /** Maximum number of instances for this group. Note that by default, clusters will not use
secondary workers. Required for secondary workers if the minimum secondary instances is set.
Bounds: [minInstances, ). Defaults to 0. */
  readonly maxInstances?: number;
  /** Minimum number of instances for this group. Bounds: [0, maxInstances]. Defaults to 0. */
  readonly minInstances?: number;
  /** Weight for the instance group, which is used to determine the fraction of total workers
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
only on primary workers, the cluster will use primary workers only and no secondary workers. */
  readonly weight?: number;
}
export interface DataprocAutoscalingPolicyTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}
export interface DataprocAutoscalingPolicyWorkerConfig {
  /** Maximum number of instances for this group. */
  readonly maxInstances: number;
  /** Minimum number of instances for this group. Bounds: [2, maxInstances]. Defaults to 2. */
  readonly minInstances?: number;
  /** Weight for the instance group, which is used to determine the fraction of total workers
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
only on primary workers, the cluster will use primary workers only and no secondary workers. */
  readonly weight?: number;
}

// Resource

export class DataprocAutoscalingPolicy extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string;
  public get location() {
    return this._location;
  }
  public set location(value: string | undefined) {
    this._location = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId: string;
  public get policyId() {
    return this._policyId;
  }
  public set policyId(value: string) {
    this._policyId = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // basic_algorithm - computed: false, optional: true, required: false
  private _basicAlgorithm?: DataprocAutoscalingPolicyBasicAlgorithm[];
  public get basicAlgorithm() {
    return this._basicAlgorithm;
  }
  public set basicAlgorithm(value: DataprocAutoscalingPolicyBasicAlgorithm[] | undefined) {
    this._basicAlgorithm = value;
  }

  // secondary_worker_config - computed: false, optional: true, required: false
  private _secondaryWorkerConfig?: DataprocAutoscalingPolicySecondaryWorkerConfig[];
  public get secondaryWorkerConfig() {
    return this._secondaryWorkerConfig;
  }
  public set secondaryWorkerConfig(value: DataprocAutoscalingPolicySecondaryWorkerConfig[] | undefined) {
    this._secondaryWorkerConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataprocAutoscalingPolicyTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataprocAutoscalingPolicyTimeouts | undefined) {
    this._timeouts = value;
  }

  // worker_config - computed: false, optional: true, required: false
  private _workerConfig?: DataprocAutoscalingPolicyWorkerConfig[];
  public get workerConfig() {
    return this._workerConfig;
  }
  public set workerConfig(value: DataprocAutoscalingPolicyWorkerConfig[] | undefined) {
    this._workerConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      policy_id: this._policyId,
      project: this._project,
      basic_algorithm: this._basicAlgorithm,
      secondary_worker_config: this._secondaryWorkerConfig,
      timeouts: this._timeouts,
      worker_config: this._workerConfig,
    };
  }
}
