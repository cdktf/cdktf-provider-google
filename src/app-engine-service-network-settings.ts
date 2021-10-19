// https://www.terraform.io/docs/providers/google/r/app_engine_service_network_settings.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppEngineServiceNetworkSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_network_settings.html#project AppEngineServiceNetworkSettings#project}
  */
  readonly project?: string;
  /**
  * The name of the service these settings apply to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_network_settings.html#service AppEngineServiceNetworkSettings#service}
  */
  readonly service: string;
  /**
  * network_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_network_settings.html#network_settings AppEngineServiceNetworkSettings#network_settings}
  */
  readonly networkSettings: AppEngineServiceNetworkSettingsNetworkSettings;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_network_settings.html#timeouts AppEngineServiceNetworkSettings#timeouts}
  */
  readonly timeouts?: AppEngineServiceNetworkSettingsTimeouts;
}
export interface AppEngineServiceNetworkSettingsNetworkSettings {
  /**
  * The ingress settings for version or service. Default value: "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED" Possible values: ["INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED", "INGRESS_TRAFFIC_ALLOWED_ALL", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY", "INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_network_settings.html#ingress_traffic_allowed AppEngineServiceNetworkSettings#ingress_traffic_allowed}
  */
  readonly ingressTrafficAllowed?: string;
}

function appEngineServiceNetworkSettingsNetworkSettingsToTerraform(struct?: AppEngineServiceNetworkSettingsNetworkSettingsOutputReference | AppEngineServiceNetworkSettingsNetworkSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress_traffic_allowed: cdktf.stringToTerraform(struct!.ingressTrafficAllowed),
  }
}

export class AppEngineServiceNetworkSettingsNetworkSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // ingress_traffic_allowed - computed: false, optional: true, required: false
  private _ingressTrafficAllowed?: string | undefined; 
  public get ingressTrafficAllowed() {
    return this.getStringAttribute('ingress_traffic_allowed');
  }
  public set ingressTrafficAllowed(value: string | undefined) {
    this._ingressTrafficAllowed = value;
  }
  public resetIngressTrafficAllowed() {
    this._ingressTrafficAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressTrafficAllowedInput() {
    return this._ingressTrafficAllowed
  }
}
export interface AppEngineServiceNetworkSettingsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_network_settings.html#create AppEngineServiceNetworkSettings#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_network_settings.html#delete AppEngineServiceNetworkSettings#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_network_settings.html#update AppEngineServiceNetworkSettings#update}
  */
  readonly update?: string;
}

function appEngineServiceNetworkSettingsTimeoutsToTerraform(struct?: AppEngineServiceNetworkSettingsTimeoutsOutputReference | AppEngineServiceNetworkSettingsTimeouts): any {
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

export class AppEngineServiceNetworkSettingsTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_network_settings.html google_app_engine_service_network_settings}
*/
export class AppEngineServiceNetworkSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_app_engine_service_network_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/app_engine_service_network_settings.html google_app_engine_service_network_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppEngineServiceNetworkSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: AppEngineServiceNetworkSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_app_engine_service_network_settings',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._project = config.project;
    this._service = config.service;
    this._networkSettings = config.networkSettings;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service
  }

  // network_settings - computed: false, optional: false, required: true
  private _networkSettings?: AppEngineServiceNetworkSettingsNetworkSettings; 
  private __networkSettingsOutput = new AppEngineServiceNetworkSettingsNetworkSettingsOutputReference(this as any, "network_settings", true);
  public get networkSettings() {
    return this.__networkSettingsOutput;
  }
  public putNetworkSettings(value: AppEngineServiceNetworkSettingsNetworkSettings) {
    this._networkSettings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkSettingsInput() {
    return this._networkSettings
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AppEngineServiceNetworkSettingsTimeouts | undefined; 
  private __timeoutsOutput = new AppEngineServiceNetworkSettingsTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: AppEngineServiceNetworkSettingsTimeouts | undefined) {
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
      project: cdktf.stringToTerraform(this._project),
      service: cdktf.stringToTerraform(this._service),
      network_settings: appEngineServiceNetworkSettingsNetworkSettingsToTerraform(this._networkSettings),
      timeouts: appEngineServiceNetworkSettingsTimeoutsToTerraform(this._timeouts),
    };
  }
}
