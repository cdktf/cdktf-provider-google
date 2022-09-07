// https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GameServicesGameServerClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Required. The resource name of the game server cluster
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#cluster_id GameServicesGameServerCluster#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Human readable description of the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#description GameServicesGameServerCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#id GameServicesGameServerCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels associated with this game server cluster. Each label is a
key-value pair.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#labels GameServicesGameServerCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Location of the Cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#location GameServicesGameServerCluster#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#project GameServicesGameServerCluster#project}
  */
  readonly project?: string;
  /**
  * The realm id of the game server realm.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#realm_id GameServicesGameServerCluster#realm_id}
  */
  readonly realmId: string;
  /**
  * connection_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#connection_info GameServicesGameServerCluster#connection_info}
  */
  readonly connectionInfo: GameServicesGameServerClusterConnectionInfo;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#timeouts GameServicesGameServerCluster#timeouts}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#cluster GameServicesGameServerCluster#cluster}
  */
  readonly cluster: string;
}

export function gameServicesGameServerClusterConnectionInfoGkeClusterReferenceToTerraform(struct?: GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference | GameServicesGameServerClusterConnectionInfoGkeClusterReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GameServicesGameServerClusterConnectionInfoGkeClusterReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#namespace GameServicesGameServerCluster#namespace}
  */
  readonly namespace: string;
  /**
  * gke_cluster_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#gke_cluster_reference GameServicesGameServerCluster#gke_cluster_reference}
  */
  readonly gkeClusterReference: GameServicesGameServerClusterConnectionInfoGkeClusterReference;
}

export function gameServicesGameServerClusterConnectionInfoToTerraform(struct?: GameServicesGameServerClusterConnectionInfoOutputReference | GameServicesGameServerClusterConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GameServicesGameServerClusterConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._gkeClusterReference?.internalValue !== undefined) {
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
  private _gkeClusterReference = new GameServicesGameServerClusterConnectionInfoGkeClusterReferenceOutputReference(this, "gke_cluster_reference");
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#create GameServicesGameServerCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#delete GameServicesGameServerCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster#update GameServicesGameServerCluster#update}
  */
  readonly update?: string;
}

export function gameServicesGameServerClusterTimeoutsToTerraform(struct?: GameServicesGameServerClusterTimeoutsOutputReference | GameServicesGameServerClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GameServicesGameServerClusterTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: GameServicesGameServerClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster google_game_services_game_server_cluster}
*/
export class GameServicesGameServerCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_game_services_game_server_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_cluster google_game_services_game_server_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GameServicesGameServerClusterConfig
  */
  public constructor(scope: Construct, id: string, config: GameServicesGameServerClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_game_services_game_server_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._description = config.description;
    this._id = config.id;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
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
  private _connectionInfo = new GameServicesGameServerClusterConnectionInfoOutputReference(this, "connection_info");
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
  private _timeouts = new GameServicesGameServerClusterTimeoutsOutputReference(this, "timeouts");
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
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      realm_id: cdktf.stringToTerraform(this._realmId),
      connection_info: gameServicesGameServerClusterConnectionInfoToTerraform(this._connectionInfo.internalValue),
      timeouts: gameServicesGameServerClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
