// https://www.terraform.io/docs/providers/google/r/cloudiot_registry.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudiotRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Activate or deactivate HTTP.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry.html#http_config CloudiotRegistry#http_config}
  */
  readonly httpConfig?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The default logging verbosity for activity from devices in this
registry. Specifies which events should be written to logs. For
example, if the LogLevel is ERROR, only events that terminate in
errors will be logged. LogLevel is inclusive; enabling INFO logging
will also enable ERROR logging. Default value: "NONE" Possible values: ["NONE", "ERROR", "INFO", "DEBUG"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry.html#log_level CloudiotRegistry#log_level}
  */
  readonly logLevel?: string;
  /**
  * Activate or deactivate MQTT.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry.html#mqtt_config CloudiotRegistry#mqtt_config}
  */
  readonly mqttConfig?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * A unique name for the resource, required by device registry.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry.html#name CloudiotRegistry#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry.html#project CloudiotRegistry#project}
  */
  readonly project?: string;
  /**
  * The region in which the created registry should reside.
If it is not provided, the provider region is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry.html#region CloudiotRegistry#region}
  */
  readonly region?: string;
  /**
  * A PubSub topic to publish device state updates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry.html#state_notification_config CloudiotRegistry#state_notification_config}
  */
  readonly stateNotificationConfig?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * credentials block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry.html#credentials CloudiotRegistry#credentials}
  */
  readonly credentials?: CloudiotRegistryCredentials[];
  /**
  * event_notification_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry.html#event_notification_configs CloudiotRegistry#event_notification_configs}
  */
  readonly eventNotificationConfigs?: CloudiotRegistryEventNotificationConfigs[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry.html#timeouts CloudiotRegistry#timeouts}
  */
  readonly timeouts?: CloudiotRegistryTimeouts;
}
export interface CloudiotRegistryCredentials {
  /**
  * A public key certificate format and data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry.html#public_key_certificate CloudiotRegistry#public_key_certificate}
  */
  readonly publicKeyCertificate: { [key: string]: string } | cdktf.IResolvable;
}

function cloudiotRegistryCredentialsToTerraform(struct?: CloudiotRegistryCredentials): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_key_certificate: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.publicKeyCertificate),
  }
}

export interface CloudiotRegistryEventNotificationConfigs {
  /**
  * PubSub topic name to publish device events.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry.html#pubsub_topic_name CloudiotRegistry#pubsub_topic_name}
  */
  readonly pubsubTopicName: string;
  /**
  * If the subfolder name matches this string exactly, this
configuration will be used. The string must not include the
leading '/' character. If empty, all strings are matched. Empty
value can only be used for the last 'event_notification_configs'
item.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry.html#subfolder_matches CloudiotRegistry#subfolder_matches}
  */
  readonly subfolderMatches?: string;
}

function cloudiotRegistryEventNotificationConfigsToTerraform(struct?: CloudiotRegistryEventNotificationConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pubsub_topic_name: cdktf.stringToTerraform(struct!.pubsubTopicName),
    subfolder_matches: cdktf.stringToTerraform(struct!.subfolderMatches),
  }
}

export interface CloudiotRegistryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry.html#create CloudiotRegistry#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry.html#delete CloudiotRegistry#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry.html#update CloudiotRegistry#update}
  */
  readonly update?: string;
}

function cloudiotRegistryTimeoutsToTerraform(struct?: CloudiotRegistryTimeoutsOutputReference | CloudiotRegistryTimeouts): any {
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

export class CloudiotRegistryTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry.html google_cloudiot_registry}
*/
export class CloudiotRegistry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_cloudiot_registry";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry.html google_cloudiot_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudiotRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: CloudiotRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloudiot_registry',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._httpConfig = config.httpConfig;
    this._logLevel = config.logLevel;
    this._mqttConfig = config.mqttConfig;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._stateNotificationConfig = config.stateNotificationConfig;
    this._credentials = config.credentials;
    this._eventNotificationConfigs = config.eventNotificationConfigs;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // http_config - computed: true, optional: true, required: false
  private _httpConfig?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get httpConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('http_config') as any;
  }
  public set httpConfig(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._httpConfig = value;
  }
  public resetHttpConfig() {
    this._httpConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConfigInput() {
    return this._httpConfig
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string | undefined; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string | undefined) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel
  }

  // mqtt_config - computed: true, optional: true, required: false
  private _mqttConfig?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get mqttConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('mqtt_config') as any;
  }
  public set mqttConfig(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._mqttConfig = value;
  }
  public resetMqttConfig() {
    this._mqttConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttConfigInput() {
    return this._mqttConfig
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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

  // region - computed: true, optional: true, required: false
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // state_notification_config - computed: false, optional: true, required: false
  private _stateNotificationConfig?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get stateNotificationConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('state_notification_config') as any;
  }
  public set stateNotificationConfig(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._stateNotificationConfig = value;
  }
  public resetStateNotificationConfig() {
    this._stateNotificationConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateNotificationConfigInput() {
    return this._stateNotificationConfig
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: CloudiotRegistryCredentials[] | undefined; 
  public get credentials() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('credentials') as any;
  }
  public set credentials(value: CloudiotRegistryCredentials[] | undefined) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials
  }

  // event_notification_configs - computed: false, optional: true, required: false
  private _eventNotificationConfigs?: CloudiotRegistryEventNotificationConfigs[] | undefined; 
  public get eventNotificationConfigs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('event_notification_configs') as any;
  }
  public set eventNotificationConfigs(value: CloudiotRegistryEventNotificationConfigs[] | undefined) {
    this._eventNotificationConfigs = value;
  }
  public resetEventNotificationConfigs() {
    this._eventNotificationConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNotificationConfigsInput() {
    return this._eventNotificationConfigs
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudiotRegistryTimeouts | undefined; 
  private __timeoutsOutput = new CloudiotRegistryTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: CloudiotRegistryTimeouts | undefined) {
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
      http_config: cdktf.hashMapper(cdktf.anyToTerraform)(this._httpConfig),
      log_level: cdktf.stringToTerraform(this._logLevel),
      mqtt_config: cdktf.hashMapper(cdktf.anyToTerraform)(this._mqttConfig),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      state_notification_config: cdktf.hashMapper(cdktf.anyToTerraform)(this._stateNotificationConfig),
      credentials: cdktf.listMapper(cloudiotRegistryCredentialsToTerraform)(this._credentials),
      event_notification_configs: cdktf.listMapper(cloudiotRegistryEventNotificationConfigsToTerraform)(this._eventNotificationConfigs),
      timeouts: cloudiotRegistryTimeoutsToTerraform(this._timeouts),
    };
  }
}
