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
  readonly connectionInfo: GameServicesGameServerClusterConnectionInfo;
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

export function gameServicesGameServerClusterConnectionInfoGkeClusterReferenceToTerraform(struct?: GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference | GameServicesGameServerClusterConnectionInfoGkeClusterReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
  }
}

export class GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): GameServicesGameServerClusterConnectionInfoGkeClusterReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameServicesGameServerClusterConnectionInfoGkeClusterReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cluster = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cluster = value.cluster;
    }
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
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
  readonly gkeClusterReference: GameServicesGameServerClusterConnectionInfoGkeClusterReference;
}

export function gameServicesGameServerClusterConnectionInfoToTerraform(struct?: GameServicesGameServerClusterConnectionInfoOutputReference | GameServicesGameServerClusterConnectionInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    gke_cluster_reference: gameServicesGameServerClusterConnectionInfoGkeClusterReferenceToTerraform(struct!.gkeClusterReference),
  }
}

export class GameServicesGameServerClusterConnectionInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): GameServicesGameServerClusterConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._gkeClusterReference?.internalValue) {
      hasAnyValues = true;
      internalValueResult.gkeClusterReference = this._gkeClusterReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameServicesGameServerClusterConnectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespace = undefined;
      this._gkeClusterReference.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespace = value.namespace;
      this._gkeClusterReference.internalValue = value.gkeClusterReference;
    }
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // gke_cluster_reference - computed: false, optional: false, required: true
  private _gkeClusterReference = new GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference(this as any, "gke_cluster_reference", true);
  public get gkeClusterReference() {
    return this._gkeClusterReference;
  }
  public putGkeClusterReference(value: GameServicesGameServerClusterConnectionInfoGkeClusterReference) {
    this._gkeClusterReference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeClusterReferenceInput() {
    return this._gkeClusterReference.internalValue;
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

export function gameServicesGameServerClusterTimeoutsToTerraform(struct?: GameServicesGameServerClusterTimeoutsOutputReference | GameServicesGameServerClusterTimeouts): any {
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

export class GameServicesGameServerClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): GameServicesGameServerClusterTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameServicesGameServerClusterTimeouts | undefined) {
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
    this._connectionInfo.internalValue = config.connectionInfo;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // realm_id - computed: false, optional: false, required: true
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
  }

  // connection_info - computed: false, optional: false, required: true
  private _connectionInfo = new GameServicesGameServerClusterConnectionInfoOutputReference(this as any, "connection_info", true);
  public get connectionInfo() {
    return this._connectionInfo;
  }
  public putConnectionInfo(value: GameServicesGameServerClusterConnectionInfo) {
    this._connectionInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInfoInput() {
    return this._connectionInfo.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GameServicesGameServerClusterTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GameServicesGameServerClusterTimeouts) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      realm_id: cdktf.stringToTerraform(this._realmId),
      connection_info: gameServicesGameServerClusterConnectionInfoToTerraform(this._connectionInfo.internalValue),
      timeouts: gameServicesGameServerClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
