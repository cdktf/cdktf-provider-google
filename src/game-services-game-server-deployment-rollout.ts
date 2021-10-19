// https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GameServicesGameServerDeploymentRolloutConfig extends cdktf.TerraformMetaArguments {
  /**
  * This field points to the game server config that is
applied by default to all realms and clusters. For example,

'projects/my-project/locations/global/gameServerDeployments/my-game/configs/my-config'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout.html#default_game_server_config GameServicesGameServerDeploymentRollout#default_game_server_config}
  */
  readonly defaultGameServerConfig: string;
  /**
  * The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout.html#deployment_id GameServicesGameServerDeploymentRollout#deployment_id}
  */
  readonly deploymentId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout.html#project GameServicesGameServerDeploymentRollout#project}
  */
  readonly project?: string;
  /**
  * game_server_config_overrides block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout.html#game_server_config_overrides GameServicesGameServerDeploymentRollout#game_server_config_overrides}
  */
  readonly gameServerConfigOverrides?: GameServicesGameServerDeploymentRolloutGameServerConfigOverrides[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout.html#timeouts GameServicesGameServerDeploymentRollout#timeouts}
  */
  readonly timeouts?: GameServicesGameServerDeploymentRolloutTimeouts;
}
export interface GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector {
  /**
  * List of realms to match against.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout.html#realms GameServicesGameServerDeploymentRollout#realms}
  */
  readonly realms?: string[];
}

function gameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorToTerraform(struct?: GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference | GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    realms: cdktf.listMapper(cdktf.stringToTerraform)(struct!.realms),
  }
}

export class GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // realms - computed: false, optional: true, required: false
  private _realms?: string[] | undefined; 
  public get realms() {
    return this.getListAttribute('realms');
  }
  public set realms(value: string[] | undefined) {
    this._realms = value;
  }
  public resetRealms() {
    this._realms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmsInput() {
    return this._realms
  }
}
export interface GameServicesGameServerDeploymentRolloutGameServerConfigOverrides {
  /**
  * Version of the configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout.html#config_version GameServicesGameServerDeploymentRollout#config_version}
  */
  readonly configVersion?: string;
  /**
  * realms_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout.html#realms_selector GameServicesGameServerDeploymentRollout#realms_selector}
  */
  readonly realmsSelector?: GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector;
}

function gameServicesGameServerDeploymentRolloutGameServerConfigOverridesToTerraform(struct?: GameServicesGameServerDeploymentRolloutGameServerConfigOverrides): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_version: cdktf.stringToTerraform(struct!.configVersion),
    realms_selector: gameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorToTerraform(struct!.realmsSelector),
  }
}

export interface GameServicesGameServerDeploymentRolloutTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout.html#create GameServicesGameServerDeploymentRollout#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout.html#delete GameServicesGameServerDeploymentRollout#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout.html#update GameServicesGameServerDeploymentRollout#update}
  */
  readonly update?: string;
}

function gameServicesGameServerDeploymentRolloutTimeoutsToTerraform(struct?: GameServicesGameServerDeploymentRolloutTimeoutsOutputReference | GameServicesGameServerDeploymentRolloutTimeouts): any {
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

export class GameServicesGameServerDeploymentRolloutTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout.html google_game_services_game_server_deployment_rollout}
*/
export class GameServicesGameServerDeploymentRollout extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_game_services_game_server_deployment_rollout";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout.html google_game_services_game_server_deployment_rollout} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GameServicesGameServerDeploymentRolloutConfig
  */
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
  private _defaultGameServerConfig?: string; 
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
  private _deploymentId?: string; 
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
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
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
  private _gameServerConfigOverrides?: GameServicesGameServerDeploymentRolloutGameServerConfigOverrides[] | undefined; 
  public get gameServerConfigOverrides() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('game_server_config_overrides') as any;
  }
  public set gameServerConfigOverrides(value: GameServicesGameServerDeploymentRolloutGameServerConfigOverrides[] | undefined) {
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
  private _timeouts?: GameServicesGameServerDeploymentRolloutTimeouts | undefined; 
  private __timeoutsOutput = new GameServicesGameServerDeploymentRolloutTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: GameServicesGameServerDeploymentRolloutTimeouts | undefined) {
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
