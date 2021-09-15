// https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GameServicesGameServerClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Required. The resource name of the game server cluster
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster.html#cluster_id GameServicesGameServerCluster#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Human readable description of the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster.html#description GameServicesGameServerCluster#description}
  */
  readonly description?: string;
  /**
  * The labels associated with this game server cluster. Each label is a
key-value pair.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster.html#labels GameServicesGameServerCluster#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Location of the Cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster.html#location GameServicesGameServerCluster#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster.html#project GameServicesGameServerCluster#project}
  */
  readonly project?: string;
  /**
  * The realm id of the game server realm.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster.html#realm_id GameServicesGameServerCluster#realm_id}
  */
  readonly realmId: string;
  /**
  * connection_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster.html#connection_info GameServicesGameServerCluster#connection_info}
  */
  readonly connectionInfo: GameServicesGameServerClusterConnectionInfo[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster.html#timeouts GameServicesGameServerCluster#timeouts}
  */
  readonly timeouts?: GameServicesGameServerClusterTimeouts;
}
export interface GameServicesGameServerClusterConnectionInfoGkeClusterReference {
  /**
  * The full or partial name of a GKE cluster, using one of the following
forms:

* 'projects/{project_id}/locations/{location}/clusters/{cluster_id}'
* 'locations/{location}/clusters/{cluster_id}'
* '{cluster_id}'

If project and location are not specified, the project and location of the
GameServerCluster resource are used to generate the full name of the
GKE cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster.html#cluster GameServicesGameServerCluster#cluster}
  */
  readonly cluster: string;
}

function gameServicesGameServerClusterConnectionInfoGkeClusterReferenceToTerraform(struct?: GameServicesGameServerClusterConnectionInfoGkeClusterReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
  }
}

export interface GameServicesGameServerClusterConnectionInfo {
  /**
  * Namespace designated on the game server cluster where the game server
instances will be created. The namespace existence will be validated
during creation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster.html#namespace GameServicesGameServerCluster#namespace}
  */
  readonly namespace: string;
  /**
  * gke_cluster_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster.html#gke_cluster_reference GameServicesGameServerCluster#gke_cluster_reference}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster.html#create GameServicesGameServerCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster.html#delete GameServicesGameServerCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster.html#update GameServicesGameServerCluster#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster.html google_game_services_game_server_cluster}
*/
export class GameServicesGameServerCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_game_services_game_server_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster.html google_game_services_game_server_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GameServicesGameServerClusterConfig
  */
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
  private _labels?: { [key: string]: string } | cdktf.IResolvable;
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable ) {
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
