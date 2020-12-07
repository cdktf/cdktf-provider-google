// https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GameServicesGameServerClusterConfig extends cdktf.TerraformMetaArguments {
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

function gameServicesGameServerClusterConnectionInfoGkeClusterReferenceToTerraform(struct?: GameServicesGameServerClusterConnectionInfoGkeClusterReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
  }
}

export interface GameServicesGameServerClusterConnectionInfo {
  /** Namespace designated on the game server cluster where the game server
instances will be created. The namespace existence will be validated
during creation. */
  readonly namespace: string;
  /** gke_cluster_reference block */
  readonly gkeClusterReference: GameServicesGameServerClusterConnectionInfoGkeClusterReference[];
}

function gameServicesGameServerClusterConnectionInfoToTerraform(struct?: GameServicesGameServerClusterConnectionInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    gke_cluster_reference: cdktf.listMapper(gameServicesGameServerClusterConnectionInfoGkeClusterReferenceToTerraform)(struct!.gkeClusterReference),
  }
}

export interface GameServicesGameServerClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function gameServicesGameServerClusterTimeoutsToTerraform(struct?: GameServicesGameServerClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class GameServicesGameServerCluster extends cdktf.TerraformResource {

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
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string };
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // location - computed: false, optional: true, required: false
  private _location?: string;
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string ) {
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

  // realm_id - computed: false, optional: false, required: true
  private _realmId: string;
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId
  }

  // connection_info - computed: false, optional: false, required: true
  private _connectionInfo: GameServicesGameServerClusterConnectionInfo[];
  public get connectionInfo() {
    return this.interpolationForAttribute('connection_info') as any;
  }
  public set connectionInfo(value: GameServicesGameServerClusterConnectionInfo[]) {
    this._connectionInfo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInfoInput() {
    return this._connectionInfo
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GameServicesGameServerClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: GameServicesGameServerClusterTimeouts ) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      realm_id: cdktf.stringToTerraform(this._realmId),
      connection_info: cdktf.listMapper(gameServicesGameServerClusterConnectionInfoToTerraform)(this._connectionInfo),
      timeouts: gameServicesGameServerClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}
