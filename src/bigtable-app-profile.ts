// https://www.terraform.io/docs/providers/google/r/bigtable_app_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigtableAppProfileConfig extends cdktf.TerraformMetaArguments {
  /** The unique name of the app profile in the form '[_a-zA-Z0-9][-_.a-zA-Z0-9]*'. */
  readonly appProfileId: string;
  /** Long form description of the use case for this app profile. */
  readonly description?: string;
  /** If true, ignore safety checks when deleting/updating the app profile. */
  readonly ignoreWarnings?: boolean;
  /** The name of the instance to create the app profile within. */
  readonly instance?: string;
  /** If true, read/write requests are routed to the nearest cluster in the instance, and will fail over to the nearest cluster that is available
in the event of transient errors or delays. Clusters in a region are considered equidistant. Choosing this option sacrifices read-your-writes
consistency to improve availability. */
  readonly multiClusterRoutingUseAny?: boolean;
  readonly project?: string;
  /** single_cluster_routing block */
  readonly singleClusterRouting?: BigtableAppProfileSingleClusterRouting[];
  /** timeouts block */
  readonly timeouts?: BigtableAppProfileTimeouts;
}
export interface BigtableAppProfileSingleClusterRouting {
  /** If true, CheckAndMutateRow and ReadModifyWriteRow requests are allowed by this app profile.
It is unsafe to send these requests to the same table/row/column in multiple clusters. */
  readonly allowTransactionalWrites?: boolean;
  /** The cluster to which read/write requests should be routed. */
  readonly clusterId: string;
}

function bigtableAppProfileSingleClusterRoutingToTerraform(struct?: BigtableAppProfileSingleClusterRouting): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_transactional_writes: cdktf.booleanToTerraform(struct!.allowTransactionalWrites),
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
  }
}

export interface BigtableAppProfileTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function bigtableAppProfileTimeoutsToTerraform(struct?: BigtableAppProfileTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class BigtableAppProfile extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._singleClusterRouting = config.singleClusterRouting;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_profile_id - computed: false, optional: false, required: true
  private _appProfileId: string;
  public get appProfileId() {
    return this.getStringAttribute('app_profile_id');
  }
  public set appProfileId(value: string) {
    this._appProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appProfileIdInput() {
    return this._appProfileId
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

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean;
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean ) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings
  }

  // instance - computed: false, optional: true, required: false
  private _instance?: string;
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string ) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance
  }

  // multi_cluster_routing_use_any - computed: false, optional: true, required: false
  private _multiClusterRoutingUseAny?: boolean;
  public get multiClusterRoutingUseAny() {
    return this.getBooleanAttribute('multi_cluster_routing_use_any');
  }
  public set multiClusterRoutingUseAny(value: boolean ) {
    this._multiClusterRoutingUseAny = value;
  }
  public resetMultiClusterRoutingUseAny() {
    this._multiClusterRoutingUseAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiClusterRoutingUseAnyInput() {
    return this._multiClusterRoutingUseAny
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
    return this._project
  }

  // single_cluster_routing - computed: false, optional: true, required: false
  private _singleClusterRouting?: BigtableAppProfileSingleClusterRouting[];
  public get singleClusterRouting() {
    return this.interpolationForAttribute('single_cluster_routing') as any;
  }
  public set singleClusterRouting(value: BigtableAppProfileSingleClusterRouting[] ) {
    this._singleClusterRouting = value;
  }
  public resetSingleClusterRouting() {
    this._singleClusterRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleClusterRoutingInput() {
    return this._singleClusterRouting
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BigtableAppProfileTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BigtableAppProfileTimeouts ) {
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
      app_profile_id: cdktf.stringToTerraform(this._appProfileId),
      description: cdktf.stringToTerraform(this._description),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      instance: cdktf.stringToTerraform(this._instance),
      multi_cluster_routing_use_any: cdktf.booleanToTerraform(this._multiClusterRoutingUseAny),
      project: cdktf.stringToTerraform(this._project),
      single_cluster_routing: cdktf.listMapper(bigtableAppProfileSingleClusterRoutingToTerraform)(this._singleClusterRouting),
      timeouts: bigtableAppProfileTimeoutsToTerraform(this._timeouts),
    };
  }
}
