// https://www.terraform.io/docs/providers/google/r/bigtable_app_profile.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BigtableAppProfileConfig extends TerraformMetaArguments {
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
export interface BigtableAppProfileTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class BigtableAppProfile extends TerraformResource {

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
    return this._appProfileId;
  }
  public set appProfileId(value: string) {
    this._appProfileId = value;
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

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean;
  public get ignoreWarnings() {
    return this._ignoreWarnings;
  }
  public set ignoreWarnings(value: boolean | undefined) {
    this._ignoreWarnings = value;
  }

  // instance - computed: false, optional: true, required: false
  private _instance?: string;
  public get instance() {
    return this._instance;
  }
  public set instance(value: string | undefined) {
    this._instance = value;
  }

  // multi_cluster_routing_use_any - computed: false, optional: true, required: false
  private _multiClusterRoutingUseAny?: boolean;
  public get multiClusterRoutingUseAny() {
    return this._multiClusterRoutingUseAny;
  }
  public set multiClusterRoutingUseAny(value: boolean | undefined) {
    this._multiClusterRoutingUseAny = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // single_cluster_routing - computed: false, optional: true, required: false
  private _singleClusterRouting?: BigtableAppProfileSingleClusterRouting[];
  public get singleClusterRouting() {
    return this._singleClusterRouting;
  }
  public set singleClusterRouting(value: BigtableAppProfileSingleClusterRouting[] | undefined) {
    this._singleClusterRouting = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BigtableAppProfileTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BigtableAppProfileTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      app_profile_id: this._appProfileId,
      description: this._description,
      ignore_warnings: this._ignoreWarnings,
      instance: this._instance,
      multi_cluster_routing_use_any: this._multiClusterRoutingUseAny,
      project: this._project,
      single_cluster_routing: this._singleClusterRouting,
      timeouts: this._timeouts,
    };
  }
}
