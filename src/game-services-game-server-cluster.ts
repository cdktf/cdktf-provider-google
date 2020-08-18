// https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GameServicesGameServerClusterConfig extends TerraformMetaArguments {
  /** Required. The resource name of the game server cluster */
  readonly clusterId: string;
  /** Human readable description of the cluster. */
  readonly description?: string;
  /** The labels associated with this game server cluster. Each label is a
key-value pair. */
  readonly labels?: { [key: string]: string };
  /** Location of the Cluster. */
  readonly location?: string;
  readonly project?: string;
  /** The realm id of the game server realm. */
  readonly realmId: string;
  /** connection_info block */
  readonly connectionInfo: GameServicesGameServerClusterConnectionInfo[];
  /** timeouts block */
  readonly timeouts?: GameServicesGameServerClusterTimeouts;
}
export interface GameServicesGameServerClusterConnectionInfoGkeClusterReference {
  /** The full or partial name of a GKE cluster, using one of the following
forms:

* 'projects/{project_id}/locations/{location}/clusters/{cluster_id}'
* 'locations/{location}/clusters/{cluster_id}'
* '{cluster_id}'

If project and location are not specified, the project and location of the
GameServerCluster resource are used to generate the full name of the
GKE cluster. */
  readonly cluster: string;
}
export interface GameServicesGameServerClusterConnectionInfo {
  /** Namespace designated on the game server cluster where the game server
instances will be created. The namespace existence will be validated
during creation. */
  readonly namespace: string;
  /** gke_cluster_reference block */
  readonly gkeClusterReference: GameServicesGameServerClusterConnectionInfoGkeClusterReference[];
}
export interface GameServicesGameServerClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GameServicesGameServerCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GameServicesGameServerClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_game_services_game_server_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterId = config.clusterId;
    this._description = config.description;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._realmId = config.realmId;
    this._connectionInfo = config.connectionInfo;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId: string;
  public get clusterId() {
    return this._clusterId;
  }
  public set clusterId(value: string) {
    this._clusterId = value;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this._labels;
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
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

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // realm_id - computed: false, optional: false, required: true
  private _realmId: string;
  public get realmId() {
    return this._realmId;
  }
  public set realmId(value: string) {
    this._realmId = value;
  }

  // connection_info - computed: false, optional: false, required: true
  private _connectionInfo: GameServicesGameServerClusterConnectionInfo[];
  public get connectionInfo() {
    return this._connectionInfo;
  }
  public set connectionInfo(value: GameServicesGameServerClusterConnectionInfo[]) {
    this._connectionInfo = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GameServicesGameServerClusterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GameServicesGameServerClusterTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: this._clusterId,
      description: this._description,
      labels: this._labels,
      location: this._location,
      project: this._project,
      realm_id: this._realmId,
      connection_info: this._connectionInfo,
      timeouts: this._timeouts,
    };
  }
}
