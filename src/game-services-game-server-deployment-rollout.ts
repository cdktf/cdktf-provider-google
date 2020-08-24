// https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface GameServicesGameServerDeploymentRolloutConfig extends TerraformMetaArguments {
  /** This field points to the game server config that is
applied by default to all realms and clusters. For example,

'projects/my-project/locations/global/gameServerDeployments/my-game/configs/my-config'. */
  readonly defaultGameServerConfig: string;
  /** The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment. */
  readonly deploymentId: string;
  readonly project?: string;
  /** game_server_config_overrides block */
  readonly gameServerConfigOverrides?: GameServicesGameServerDeploymentRolloutGameServerConfigOverrides[];
  /** timeouts block */
  readonly timeouts?: GameServicesGameServerDeploymentRolloutTimeouts;
}
export interface GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector {
  /** List of realms to match against. */
  readonly realms?: string[];
}
export interface GameServicesGameServerDeploymentRolloutGameServerConfigOverrides {
  /** Version of the configuration. */
  readonly configVersion?: string;
  /** realms_selector block */
  readonly realmsSelector?: GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector[];
}
export interface GameServicesGameServerDeploymentRolloutTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class GameServicesGameServerDeploymentRollout extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: GameServicesGameServerDeploymentRolloutConfig) {
    super(scope, id, {
      terraformResourceType: 'google_game_services_game_server_deployment_rollout',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._defaultGameServerConfig = config.defaultGameServerConfig;
    this._deploymentId = config.deploymentId;
    this._project = config.project;
    this._gameServerConfigOverrides = config.gameServerConfigOverrides;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_game_server_config - computed: false, optional: false, required: true
  private _defaultGameServerConfig: string;
  public get defaultGameServerConfig() {
    return this._defaultGameServerConfig;
  }
  public set defaultGameServerConfig(value: string) {
    this._defaultGameServerConfig = value;
  }

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId: string;
  public get deploymentId() {
    return this._deploymentId;
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
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

  // game_server_config_overrides - computed: false, optional: true, required: false
  private _gameServerConfigOverrides?: GameServicesGameServerDeploymentRolloutGameServerConfigOverrides[];
  public get gameServerConfigOverrides() {
    return this._gameServerConfigOverrides;
  }
  public set gameServerConfigOverrides(value: GameServicesGameServerDeploymentRolloutGameServerConfigOverrides[] | undefined) {
    this._gameServerConfigOverrides = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GameServicesGameServerDeploymentRolloutTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: GameServicesGameServerDeploymentRolloutTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_game_server_config: this._defaultGameServerConfig,
      deployment_id: this._deploymentId,
      project: this._project,
      game_server_config_overrides: this._gameServerConfigOverrides,
      timeouts: this._timeouts,
    };
  }
}
