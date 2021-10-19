// https://www.terraform.io/docs/providers/google/r/compute_target_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeTargetPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * URL to the backup target pool. Must also set failover_ratio.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool.html#backup_pool ComputeTargetPool#backup_pool}
  */
  readonly backupPool?: string;
  /**
  * Textual description field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool.html#description ComputeTargetPool#description}
  */
  readonly description?: string;
  /**
  * Ratio (0 to 1) of failed nodes before using the backup pool (which must also be set).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool.html#failover_ratio ComputeTargetPool#failover_ratio}
  */
  readonly failoverRatio?: number;
  /**
  * List of zero or one health check name or self_link. Only legacy google_compute_http_health_check is supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool.html#health_checks ComputeTargetPool#health_checks}
  */
  readonly healthChecks?: string[];
  /**
  * List of instances in the pool. They can be given as URLs, or in the form of "zone/name". Note that the instances need not exist at the time of target pool creation, so there is no need to use the Terraform interpolators to create a dependency on the instances from the target pool.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool.html#instances ComputeTargetPool#instances}
  */
  readonly instances?: string[];
  /**
  * A unique name for the resource, required by GCE. Changing this forces a new resource to be created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool.html#name ComputeTargetPool#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool.html#project ComputeTargetPool#project}
  */
  readonly project?: string;
  /**
  * Where the target pool resides. Defaults to project region.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool.html#region ComputeTargetPool#region}
  */
  readonly region?: string;
  /**
  * How to distribute load. Options are "NONE" (no affinity). "CLIENT_IP" (hash of the source/dest addresses / ports), and "CLIENT_IP_PROTO" also includes the protocol (default "NONE").
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool.html#session_affinity ComputeTargetPool#session_affinity}
  */
  readonly sessionAffinity?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool.html#timeouts ComputeTargetPool#timeouts}
  */
  readonly timeouts?: ComputeTargetPoolTimeouts;
}
export interface ComputeTargetPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool.html#create ComputeTargetPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool.html#delete ComputeTargetPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool.html#update ComputeTargetPool#update}
  */
  readonly update?: string;
}

function computeTargetPoolTimeoutsToTerraform(struct?: ComputeTargetPoolTimeoutsOutputReference | ComputeTargetPoolTimeouts): any {
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

export class ComputeTargetPoolTimeoutsOutputReference extends cdktf.ComplexObject {
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool.html google_compute_target_pool}
*/
export class ComputeTargetPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_target_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool.html google_compute_target_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeTargetPoolConfig
  */
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
  private _backupPool?: string | undefined; 
  public get backupPool() {
    return this.getStringAttribute('backup_pool');
  }
  public set backupPool(value: string | undefined) {
    this._backupPool = value;
  }
  public resetBackupPool() {
    this._backupPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPoolInput() {
    return this._backupPool
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // failover_ratio - computed: false, optional: true, required: false
  private _failoverRatio?: number | undefined; 
  public get failoverRatio() {
    return this.getNumberAttribute('failover_ratio');
  }
  public set failoverRatio(value: number | undefined) {
    this._failoverRatio = value;
  }
  public resetFailoverRatio() {
    this._failoverRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverRatioInput() {
    return this._failoverRatio
  }

  // health_checks - computed: false, optional: true, required: false
  private _healthChecks?: string[] | undefined; 
  public get healthChecks() {
    return this.getListAttribute('health_checks');
  }
  public set healthChecks(value: string[] | undefined) {
    this._healthChecks = value;
  }
  public resetHealthChecks() {
    this._healthChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthChecksInput() {
    return this._healthChecks
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instances - computed: true, optional: true, required: false
  private _instances?: string[] | undefined; 
  public get instances() {
    return this.getListAttribute('instances');
  }
  public set instances(value: string[] | undefined) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances
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
    return this._name
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

  // region - computed: true, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
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

  // session_affinity - computed: false, optional: true, required: false
  private _sessionAffinity?: string | undefined; 
  public get sessionAffinity() {
    return this.getStringAttribute('session_affinity');
  }
  public set sessionAffinity(value: string | undefined) {
    this._sessionAffinity = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeTargetPoolTimeouts | undefined; 
  private __timeoutsOutput = new ComputeTargetPoolTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ComputeTargetPoolTimeouts | undefined) {
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
      backup_pool: cdktf.stringToTerraform(this._backupPool),
      description: cdktf.stringToTerraform(this._description),
      failover_ratio: cdktf.numberToTerraform(this._failoverRatio),
      health_checks: cdktf.listMapper(cdktf.stringToTerraform)(this._healthChecks),
      instances: cdktf.listMapper(cdktf.stringToTerraform)(this._instances),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      session_affinity: cdktf.stringToTerraform(this._sessionAffinity),
      timeouts: computeTargetPoolTimeoutsToTerraform(this._timeouts),
    };
  }
}
