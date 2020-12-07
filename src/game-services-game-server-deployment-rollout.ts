// https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GameServicesGameServerDeploymentRolloutConfig extends cdktf.TerraformMetaArguments {
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

function gameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorToTerraform(struct?: GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    realms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.realms),
  }
}

export interface GameServicesGameServerDeploymentRolloutGameServerConfigOverrides {
  /** Version of the configuration. */
  readonly configVersion?: string;
  /** realms_selector block */
  readonly realmsSelector?: GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector[];
}

function gameServicesGameServerDeploymentRolloutGameServerConfigOverridesToTerraform(struct?: GameServicesGameServerDeploymentRolloutGameServerConfigOverrides): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    config_version: cdktf.stringToTerraform(struct!.configVersion),
    realms_selector: cdktf.listMapper(gameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorToTerraform)(struct!.realmsSelector),
  }
}

export interface GameServicesGameServerDeploymentRolloutTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function gameServicesGameServerDeploymentRolloutTimeoutsToTerraform(struct?: GameServicesGameServerDeploymentRolloutTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class GameServicesGameServerDeploymentRollout extends cdktf.TerraformResource {

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
    return this.getStringAttribute('default_game_server_config');
  }
  public set defaultGameServerConfig(value: string) {
    this._defaultGameServerConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGameServerConfigInput() {
    return this._defaultGameServerConfig
  }

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId: string;
  public get deploymentId() {
    return this.getStringAttribute('deployment_id');
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentIdInput() {
    return this._deploymentId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // game_server_config_overrides - computed: false, optional: true, required: false
  private _gameServerConfigOverrides?: GameServicesGameServerDeploymentRolloutGameServerConfigOverrides[];
  public get gameServerConfigOverrides() {
    return this.interpolationForAttribute('game_server_config_overrides') as any;
  }
  public set gameServerConfigOverrides(value: GameServicesGameServerDeploymentRolloutGameServerConfigOverrides[] ) {
    this._gameServerConfigOverrides = value;
  }
  public resetGameServerConfigOverrides() {
    this._gameServerConfigOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gameServerConfigOverridesInput() {
    return this._gameServerConfigOverrides
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GameServicesGameServerDeploymentRolloutTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: GameServicesGameServerDeploymentRolloutTimeouts ) {
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
      default_game_server_config: cdktf.stringToTerraform(this._defaultGameServerConfig),
      deployment_id: cdktf.stringToTerraform(this._deploymentId),
      project: cdktf.stringToTerraform(this._project),
      game_server_config_overrides: cdktf.listMapper(gameServicesGameServerDeploymentRolloutGameServerConfigOverridesToTerraform)(this._gameServerConfigOverrides),
      timeouts: gameServicesGameServerDeploymentRolloutTimeoutsToTerraform(this._timeouts),
    };
  }
}
