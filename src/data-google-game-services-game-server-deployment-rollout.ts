// https://www.terraform.io/docs/providers/google/r/data_google_game_services_game_server_deployment_rollout.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleGameServicesGameServerDeploymentRolloutConfig extends TerraformMetaArguments {
  /** The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment. */
  readonly deploymentId: string;
}
export class DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector extends ComplexComputedList {

  // realms - computed: true, optional: false, required: true
  public get realms() {
    return this.getListAttribute('realms');
  }
}
export class DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides extends ComplexComputedList {

  // config_version - computed: true, optional: false, required: true
  public get configVersion() {
    return this.getStringAttribute('config_version');
  }

  // realms_selector - computed: true, optional: false, required: true
  public get realmsSelector() {
    return 'not implemented' as any;
  }
}

// Resource

export class DataGoogleGameServicesGameServerDeploymentRollout extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleGameServicesGameServerDeploymentRolloutConfig) {
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
    this._deploymentId = config.deploymentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_game_server_config - computed: true, optional: false, required: true
  public get defaultGameServerConfig() {
    return this.getStringAttribute('default_game_server_config');
  }

  // deployment_id - computed: false, optional: false, required: true
  private _deploymentId: string;
  public get deploymentId() {
    return this._deploymentId;
  }
  public set deploymentId(value: string) {
    this._deploymentId = value;
  }

  // game_server_config_overrides - computed: true, optional: false, required: true
  public gameServerConfigOverrides(index: string) {
    return new DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides(this, 'game_server_config_overrides', index);
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

  // project - computed: true, optional: false, required: true
  public get project() {
    return this.getStringAttribute('project');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployment_id: this._deploymentId,
    };
  }
}
