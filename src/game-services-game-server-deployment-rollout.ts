// https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#default_game_server_config GameServicesGameServerDeploymentRollout#default_game_server_config}
  */
  readonly defaultGameServerConfig: string;
  /**
  * The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#deployment_id GameServicesGameServerDeploymentRollout#deployment_id}
  */
  readonly deploymentId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#id GameServicesGameServerDeploymentRollout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#project GameServicesGameServerDeploymentRollout#project}
  */
  readonly project?: string;
  /**
  * game_server_config_overrides block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#game_server_config_overrides GameServicesGameServerDeploymentRollout#game_server_config_overrides}
  */
  readonly gameServerConfigOverrides?: GameServicesGameServerDeploymentRolloutGameServerConfigOverrides[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#timeouts GameServicesGameServerDeploymentRollout#timeouts}
  */
  readonly timeouts?: GameServicesGameServerDeploymentRolloutTimeouts;
}
export interface GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector {
  /**
  * List of realms to match against.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#realms GameServicesGameServerDeploymentRollout#realms}
  */
  readonly realms?: string[];
}

export function gameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorToTerraform(struct?: GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference | GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    realms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.realms),
  }
}

export class GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._realms !== undefined) {
      hasAnyValues = true;
      internalValueResult.realms = this._realms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._realms = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._realms = value.realms;
    }
  }

  // realms - computed: false, optional: true, required: false
  private _realms?: string[]; 
  public get realms() {
    return this.getListAttribute('realms');
  }
  public set realms(value: string[]) {
    this._realms = value;
  }
  public resetRealms() {
    this._realms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmsInput() {
    return this._realms;
  }
}
export interface GameServicesGameServerDeploymentRolloutGameServerConfigOverrides {
  /**
  * Version of the configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#config_version GameServicesGameServerDeploymentRollout#config_version}
  */
  readonly configVersion?: string;
  /**
  * realms_selector block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#realms_selector GameServicesGameServerDeploymentRollout#realms_selector}
  */
  readonly realmsSelector?: GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector;
}

export function gameServicesGameServerDeploymentRolloutGameServerConfigOverridesToTerraform(struct?: GameServicesGameServerDeploymentRolloutGameServerConfigOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_version: cdktf.stringToTerraform(struct!.configVersion),
    realms_selector: gameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorToTerraform(struct!.realmsSelector),
  }
}

export class GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GameServicesGameServerDeploymentRolloutGameServerConfigOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.configVersion = this._configVersion;
    }
    if (this._realmsSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.realmsSelector = this._realmsSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GameServicesGameServerDeploymentRolloutGameServerConfigOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configVersion = undefined;
      this._realmsSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configVersion = value.configVersion;
      this._realmsSelector.internalValue = value.realmsSelector;
    }
  }

  // config_version - computed: false, optional: true, required: false
  private _configVersion?: string; 
  public get configVersion() {
    return this.getStringAttribute('config_version');
  }
  public set configVersion(value: string) {
    this._configVersion = value;
  }
  public resetConfigVersion() {
    this._configVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configVersionInput() {
    return this._configVersion;
  }

  // realms_selector - computed: false, optional: true, required: false
  private _realmsSelector = new GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference(this, "realms_selector");
  public get realmsSelector() {
    return this._realmsSelector;
  }
  public putRealmsSelector(value: GameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector) {
    this._realmsSelector.internalValue = value;
  }
  public resetRealmsSelector() {
    this._realmsSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmsSelectorInput() {
    return this._realmsSelector.internalValue;
  }
}

export class GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList extends cdktf.ComplexList {
  public internalValue? : GameServicesGameServerDeploymentRolloutGameServerConfigOverrides[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference {
    return new GameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GameServicesGameServerDeploymentRolloutTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#create GameServicesGameServerDeploymentRollout#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#delete GameServicesGameServerDeploymentRollout#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout#update GameServicesGameServerDeploymentRollout#update}
  */
  readonly update?: string;
}

export function gameServicesGameServerDeploymentRolloutTimeoutsToTerraform(struct?: GameServicesGameServerDeploymentRolloutTimeoutsOutputReference | GameServicesGameServerDeploymentRolloutTimeouts | cdktf.IResolvable): any {
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

export class GameServicesGameServerDeploymentRolloutTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GameServicesGameServerDeploymentRolloutTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GameServicesGameServerDeploymentRolloutTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout google_game_services_game_server_deployment_rollout}
*/
export class GameServicesGameServerDeploymentRollout extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_game_services_game_server_deployment_rollout";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/game_services_game_server_deployment_rollout google_game_services_game_server_deployment_rollout} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GameServicesGameServerDeploymentRolloutConfig
  */
  public constructor(scope: Construct, id: string, config: GameServicesGameServerDeploymentRolloutConfig) {
    super(scope, id, {
      terraformResourceType: 'google_game_services_game_server_deployment_rollout',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
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
    this._defaultGameServerConfig = config.defaultGameServerConfig;
    this._deploymentId = config.deploymentId;
    this._id = config.id;
    this._project = config.project;
    this._gameServerConfigOverrides.internalValue = config.gameServerConfigOverrides;
    this._timeouts.internalValue = config.timeouts;
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
    return this._defaultGameServerConfig;
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
    return this._deploymentId;
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

  // game_server_config_overrides - computed: false, optional: true, required: false
  private _gameServerConfigOverrides = new GameServicesGameServerDeploymentRolloutGameServerConfigOverridesList(this, "game_server_config_overrides", false);
  public get gameServerConfigOverrides() {
    return this._gameServerConfigOverrides;
  }
  public putGameServerConfigOverrides(value: GameServicesGameServerDeploymentRolloutGameServerConfigOverrides[] | cdktf.IResolvable) {
    this._gameServerConfigOverrides.internalValue = value;
  }
  public resetGameServerConfigOverrides() {
    this._gameServerConfigOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gameServerConfigOverridesInput() {
    return this._gameServerConfigOverrides.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GameServicesGameServerDeploymentRolloutTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GameServicesGameServerDeploymentRolloutTimeouts) {
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
      default_game_server_config: cdktf.stringToTerraform(this._defaultGameServerConfig),
      deployment_id: cdktf.stringToTerraform(this._deploymentId),
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      game_server_config_overrides: cdktf.listMapper(gameServicesGameServerDeploymentRolloutGameServerConfigOverridesToTerraform, true)(this._gameServerConfigOverrides.internalValue),
      timeouts: gameServicesGameServerDeploymentRolloutTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
