// https://www.terraform.io/docs/providers/google/r/compute_target_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeTargetPoolConfig extends TerraformMetaArguments {
  /** URL to the backup target pool. Must also set failover_ratio. */
  readonly backupPool?: string;
  /** Textual description field. */
  readonly description?: string;
  /** Ratio (0 to 1) of failed nodes before using the backup pool (which must also be set). */
  readonly failoverRatio?: number;
  /** List of zero or one health check name or self_link. Only legacy google_compute_http_health_check is supported. */
  readonly healthChecks?: string[];
  /** List of instances in the pool. They can be given as URLs, or in the form of "zone/name". Note that the instances need not exist at the time of target pool creation, so there is no need to use the Terraform interpolators to create a dependency on the instances from the target pool. */
  readonly instances?: string[];
  /** A unique name for the resource, required by GCE. Changing this forces a new resource to be created. */
  readonly name: string;
  /** The ID of the project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** Where the target pool resides. Defaults to project region. */
  readonly region?: string;
  /** How to distribute load. Options are "NONE" (no affinity). "CLIENT_IP" (hash of the source/dest addresses / ports), and "CLIENT_IP_PROTO" also includes the protocol (default "NONE"). */
  readonly sessionAffinity?: string;
  /** timeouts block */
  readonly timeouts?: ComputeTargetPoolTimeouts;
}
export interface ComputeTargetPoolTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeTargetPool extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeTargetPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_target_pool',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backupPool = config.backupPool;
    this._description = config.description;
    this._failoverRatio = config.failoverRatio;
    this._healthChecks = config.healthChecks;
    this._instances = config.instances;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._sessionAffinity = config.sessionAffinity;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_pool - computed: false, optional: true, required: false
  private _backupPool?: string;
  public get backupPool() {
    return this._backupPool;
  }
  public set backupPool(value: string | undefined) {
    this._backupPool = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // failover_ratio - computed: false, optional: true, required: false
  private _failoverRatio?: number;
  public get failoverRatio() {
    return this._failoverRatio;
  }
  public set failoverRatio(value: number | undefined) {
    this._failoverRatio = value;
  }

  // health_checks - computed: false, optional: true, required: false
  private _healthChecks?: string[];
  public get healthChecks() {
    return this._healthChecks;
  }
  public set healthChecks(value: string[] | undefined) {
    this._healthChecks = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[];
  public get instances() {
    return this._instances ?? this.getListAttribute('instances');
  }
  public set instances(value: string[] | undefined) {
    this._instances = value;
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

  // session_affinity - computed: false, optional: true, required: false
  private _sessionAffinity?: string;
  public get sessionAffinity() {
    return this._sessionAffinity;
  }
  public set sessionAffinity(value: string | undefined) {
    this._sessionAffinity = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeTargetPoolTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeTargetPoolTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_pool: this._backupPool,
      description: this._description,
      failover_ratio: this._failoverRatio,
      health_checks: this._healthChecks,
      instances: this._instances,
      name: this._name,
      project: this._project,
      region: this._region,
      session_affinity: this._sessionAffinity,
      timeouts: this._timeouts,
    };
  }
}
