// https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GameServicesGameServerDeploymentConfig extends TerraformMetaArguments {
  /** A unique id for the deployment. */
  readonly deploymentId: string;
  /** Human readable description of the game server deployment. */
  readonly description?: string;
  /** The labels associated with this game server deployment. Each label is a
key-value pair. */
  readonly labels?: { [key: string]: string };
  /** Location of the Deployment. */
  readonly location?: string;
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: GameServicesGameServerDeploymentTimeouts;
}
export interface GameServicesGameServerDeploymentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GameServicesGameServerDeployment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GameServicesGameServerDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_game_services_game_server_deployment',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deploymentId = config.deploymentId;
    this._description = config.description;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId: string;
  public get deploymentId() {
    return this._deploymentId;
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GameServicesGameServerDeploymentTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GameServicesGameServerDeploymentTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_id: this._deploymentId,
      description: this._description,
      labels: this._labels,
      location: this._location,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
