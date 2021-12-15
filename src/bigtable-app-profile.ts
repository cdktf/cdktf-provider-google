// https://www.terraform.io/docs/providers/google/r/bigtable_app_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigtableAppProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique name of the app profile in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_app_profile.html#app_profile_id BigtableAppProfile#app_profile_id}
  */
  readonly appProfileId: string;
  /**
  * Long form description of the use case for this app profile.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_app_profile.html#description BigtableAppProfile#description}
  */
  readonly description?: string;
  /**
  * If true, ignore safety checks when deleting/updating the app profile.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_app_profile.html#ignore_warnings BigtableAppProfile#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * The name of the instance to create the app profile within.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_app_profile.html#instance BigtableAppProfile#instance}
  */
  readonly instance?: string;
  /**
  * If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available
in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes
consistency to improve availability.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_app_profile.html#multi_cluster_routing_use_any BigtableAppProfile#multi_cluster_routing_use_any}
  */
  readonly multiClusterRoutingUseAny?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_app_profile.html#project BigtableAppProfile#project}
  */
  readonly project?: string;
  /**
  * single_cluster_routing block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_app_profile.html#single_cluster_routing BigtableAppProfile#single_cluster_routing}
  */
  readonly singleClusterRouting?: BigtableAppProfileSingleClusterRouting;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_app_profile.html#timeouts BigtableAppProfile#timeouts}
  */
  readonly timeouts?: BigtableAppProfileTimeouts;
}
export interface BigtableAppProfileSingleClusterRouting {
  /**
  * If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile.
It is unsafe to send these requests to the same table/row/column in multiple clusters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_app_profile.html#allow_transactional_writes BigtableAppProfile#allow_transactional_writes}
  */
  readonly allowTransactionalWrites?: boolean | cdktf.IResolvable;
  /**
  * The cluster to which read/write requests should be routed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_app_profile.html#cluster_id BigtableAppProfile#cluster_id}
  */
  readonly clusterId: string;
}

export function bigtableAppProfileSingleClusterRoutingToTerraform(struct?: BigtableAppProfileSingleClusterRoutingOutputReference | BigtableAppProfileSingleClusterRouting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_transactional_writes: cdktf.booleanToTerraform(struct!.allowTransactionalWrites),
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
  }
}

export class BigtableAppProfileSingleClusterRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): BigtableAppProfileSingleClusterRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowTransactionalWrites !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowTransactionalWrites = this._allowTransactionalWrites;
    }
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigtableAppProfileSingleClusterRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowTransactionalWrites = undefined;
      this._clusterId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowTransactionalWrites = value.allowTransactionalWrites;
      this._clusterId = value.clusterId;
    }
  }

  // allow_transactional_writes - computed: false, optional: true, required: false
  private _allowTransactionalWrites?: boolean | cdktf.IResolvable; 
  public get allowTransactionalWrites() {
    return this.getBooleanAttribute('allow_transactional_writes') as any;
  }
  public set allowTransactionalWrites(value: boolean | cdktf.IResolvable) {
    this._allowTransactionalWrites = value;
  }
  public resetAllowTransactionalWrites() {
    this._allowTransactionalWrites = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTransactionalWritesInput() {
    return this._allowTransactionalWrites;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }
}
export interface BigtableAppProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_app_profile.html#create BigtableAppProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_app_profile.html#delete BigtableAppProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigtable_app_profile.html#update BigtableAppProfile#update}
  */
  readonly update?: string;
}

export function bigtableAppProfileTimeoutsToTerraform(struct?: BigtableAppProfileTimeoutsOutputReference | BigtableAppProfileTimeouts): any {
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

export class BigtableAppProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): BigtableAppProfileTimeouts | undefined {
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

  public set internalValue(value: BigtableAppProfileTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/bigtable_app_profile.html google_bigtable_app_profile}
*/
export class BigtableAppProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_bigtable_app_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/bigtable_app_profile.html google_bigtable_app_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigtableAppProfileConfig
  */
  public constructor(scope: Construct, id: string, config: BigtableAppProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigtable_app_profile',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._appProfileId = config.appProfileId;
    this._description = config.description;
    this._ignoreWarnings = config.ignoreWarnings;
    this._instance = config.instance;
    this._multiClusterRoutingUseAny = config.multiClusterRoutingUseAny;
    this._project = config.project;
    this._singleClusterRouting.internalValue = config.singleClusterRouting;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_profile_id - computed: false, optional: false, required: true
  private _appProfileId?: string; 
  public get appProfileId() {
    return this.getStringAttribute('app_profile_id');
  }
  public set appProfileId(value: string) {
    this._appProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appProfileIdInput() {
    return this._appProfileId;
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

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings') as any;
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
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

  // multi_cluster_routing_use_any - computed: false, optional: true, required: false
  private _multiClusterRoutingUseAny?: boolean | cdktf.IResolvable; 
  public get multiClusterRoutingUseAny() {
    return this.getBooleanAttribute('multi_cluster_routing_use_any') as any;
  }
  public set multiClusterRoutingUseAny(value: boolean | cdktf.IResolvable) {
    this._multiClusterRoutingUseAny = value;
  }
  public resetMultiClusterRoutingUseAny() {
    this._multiClusterRoutingUseAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiClusterRoutingUseAnyInput() {
    return this._multiClusterRoutingUseAny;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // single_cluster_routing - computed: false, optional: true, required: false
  private _singleClusterRouting = new BigtableAppProfileSingleClusterRoutingOutputReference(this as any, "single_cluster_routing", true);
  public get singleClusterRouting() {
    return this._singleClusterRouting;
  }
  public putSingleClusterRouting(value: BigtableAppProfileSingleClusterRouting) {
    this._singleClusterRouting.internalValue = value;
  }
  public resetSingleClusterRouting() {
    this._singleClusterRouting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleClusterRoutingInput() {
    return this._singleClusterRouting.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BigtableAppProfileTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BigtableAppProfileTimeouts) {
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
      app_profile_id: cdktf.stringToTerraform(this._appProfileId),
      description: cdktf.stringToTerraform(this._description),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      instance: cdktf.stringToTerraform(this._instance),
      multi_cluster_routing_use_any: cdktf.booleanToTerraform(this._multiClusterRoutingUseAny),
      project: cdktf.stringToTerraform(this._project),
      single_cluster_routing: bigtableAppProfileSingleClusterRoutingToTerraform(this._singleClusterRouting.internalValue),
      timeouts: bigtableAppProfileTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
