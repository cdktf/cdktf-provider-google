// https://www.terraform.io/docs/providers/google/r/data_google_game_services_game_server_deployment_rollout.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleGameServicesGameServerDeploymentRolloutConfig extends cdktf.TerraformMetaArguments {
  /** The deployment to rollout the new config to. Only 1 rollout must be associated with each deployment. */
  readonly deploymentId: string;
}
export class DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverridesRealmsSelector extends cdktf.ComplexComputedList {

  // realms - computed: true, optional: false, required: false
  public get realms() {
    return this.getListAttribute('realms');
  }
}
export class DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides extends cdktf.ComplexComputedList {

  // config_version - computed: true, optional: false, required: false
  public get configVersion() {
    return this.getStringAttribute('config_version');
  }

  // realms_selector - computed: true, optional: false, required: false
  public get realmsSelector() {
    return this.interpolationForAttribute('realms_selector') as any;
  }
}

// Resource

export class DataGoogleGameServicesGameServerDeploymentRollout extends cdktf.TerraformDataSource {

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

  // default_game_server_config - computed: true, optional: false, required: false
  public get defaultGameServerConfig() {
    return this.getStringAttribute('default_game_server_config');
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

  // game_server_config_overrides - computed: true, optional: false, required: false
  public gameServerConfigOverrides(index: string) {
    return new DataGoogleGameServicesGameServerDeploymentRolloutGameServerConfigOverrides(this, 'game_server_config_overrides', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    };
  }
}
