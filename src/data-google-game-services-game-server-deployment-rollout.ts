// https://www.terraform.io/docs/providers/google/d/game_services_game_server_deployment_rollout
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleGameServicesGameServerDeploymentRolloutConfig extends cdktf.TerraformMetaArguments {
  /**
  * The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/game_services_game_server_deployment_rollout#deployment_id DataGoogleGameServicesGameServerDeploymentRollout#deployment_id}
  */
  readonly deploymentId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/game_services_game_server_deployment_rollout#id DataGoogleGameServicesGameServerDeploymentRollout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector {
}

export function dataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorToTerraform(struct?: DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // realms - computed: true, optional: false, required: false
  public get realms() {
    return this.getListAttribute('realms');
  }
}

export class DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference {
    return new DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides {
}

export function dataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesToTerraform(struct?: DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_version - computed: true, optional: false, required: false
  public get configVersion() {
    return this.getStringAttribute('config_version');
  }

  // realms_selector - computed: true, optional: false, required: false
  private _realmsSelector = new DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelectorList(this, "realms_selector", false);
  public get realmsSelector() {
    return this._realmsSelector;
  }
}

export class DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference {
    return new DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/game_services_game_server_deployment_rollout google_game_services_game_server_deployment_rollout}
*/
export class DataGoogleGameServicesGameServerDeploymentRollout extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_game_services_game_server_deployment_rollout";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/game_services_game_server_deployment_rollout google_game_services_game_server_deployment_rollout} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleGameServicesGameServerDeploymentRolloutConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleGameServicesGameServerDeploymentRolloutConfig) {
    super(scope, id, {
      terraformResourceType: 'google_game_services_game_server_deployment_rollout',
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
    this._deploymentId = config.deploymentId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_game_server_config - computed: true, optional: false, required: false
  public get defaultGameServerConfig() {
    return this.getStringAttribute('default_game_server_config');
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

  // game_server_config_overrides - computed: true, optional: false, required: false
  private _gameServerConfigOverrides = new DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesList(this, "game_server_config_overrides", false);
  public get gameServerConfigOverrides() {
    return this._gameServerConfigOverrides;
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

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_id: cdktf.stringToTerraform(this._deploymentId),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
