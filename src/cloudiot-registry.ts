// https://www.terraform.io/docs/providers/google/r/cloudiot_registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudiotRegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Activate or deactivate HTTP.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#http_config CloudiotRegistry#http_config}
  */
  readonly httpConfig?: { [key: string]: string };
  /**
  * The default logging verbosity for activity from devices in this
registry. Specifies which events should be written to logs. For
example, if the LogLevel is ERROR, only events that terminate in
errors will be logged. LogLevel is inclusive; enabling INFO logging
will also enable ERROR logging. Default value: "NONE" Possible values: ["NONE", "ERROR", "INFO", "DEBUG"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#log_level CloudiotRegistry#log_level}
  */
  readonly logLevel?: string;
  /**
  * Activate or deactivate MQTT.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#mqtt_config CloudiotRegistry#mqtt_config}
  */
  readonly mqttConfig?: { [key: string]: string };
  /**
  * A unique name for the resource, required by device registry.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#name CloudiotRegistry#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#project CloudiotRegistry#project}
  */
  readonly project?: string;
  /**
  * The region in which the created registry should reside.
If it is not provided, the provider region is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#region CloudiotRegistry#region}
  */
  readonly region?: string;
  /**
  * A PubSub topic to publish device state updates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#state_notification_config CloudiotRegistry#state_notification_config}
  */
  readonly stateNotificationConfig?: { [key: string]: string };
  /**
  * credentials block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#credentials CloudiotRegistry#credentials}
  */
  readonly credentials?: CloudiotRegistryCredentials[] | cdktf.IResolvable;
  /**
  * event_notification_configs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#event_notification_configs CloudiotRegistry#event_notification_configs}
  */
  readonly eventNotificationConfigs?: CloudiotRegistryEventNotificationConfigs[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#timeouts CloudiotRegistry#timeouts}
  */
  readonly timeouts?: CloudiotRegistryTimeouts;
}
export interface CloudiotRegistryCredentials {
  /**
  * A public key certificate format and data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#public_key_certificate CloudiotRegistry#public_key_certificate}
  */
  readonly publicKeyCertificate: { [key: string]: string };
}

export function cloudiotRegistryCredentialsToTerraform(struct?: CloudiotRegistryCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_key_certificate: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.publicKeyCertificate),
  }
}

export interface CloudiotRegistryEventNotificationConfigs {
  /**
  * PubSub topic name to publish device events.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#pubsub_topic_name CloudiotRegistry#pubsub_topic_name}
  */
  readonly pubsubTopicName: string;
  /**
  * If the subfolder name matches this string exactly, this
configuration will be used. The string must not include the
leading '/' character. If empty, all strings are matched. Empty
value can only be used for the last 'event_notification_configs'
item.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#subfolder_matches CloudiotRegistry#subfolder_matches}
  */
  readonly subfolderMatches?: string;
}

export function cloudiotRegistryEventNotificationConfigsToTerraform(struct?: CloudiotRegistryEventNotificationConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#create CloudiotRegistry#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#delete CloudiotRegistry#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry#update CloudiotRegistry#update}
  */
  readonly update?: string;
}

export function cloudiotRegistryTimeoutsToTerraform(struct?: CloudiotRegistryTimeoutsOutputReference | CloudiotRegistryTimeouts | cdktf.IResolvable): any {
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

export class CloudiotRegistryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudiotRegistryTimeouts | undefined {
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

  public set internalValue(value: CloudiotRegistryTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry google_cloudiot_registry}
*/
export class CloudiotRegistry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloudiot_registry";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/cloudiot_registry google_cloudiot_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudiotRegistryConfig
  */
  public constructor(scope: Construct, id: string, config: CloudiotRegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloudiot_registry',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.17.0',
        providerVersionConstraint: '~> 4.0'
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
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // http_config - computed: true, optional: true, required: false
  private _httpConfig?: { [key: string]: string }; 
  public get httpConfig() {
    return this.getStringMapAttribute('http_config');
  }
  public set httpConfig(value: { [key: string]: string }) {
    this._httpConfig = value;
  }
  public resetHttpConfig() {
    this._httpConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConfigInput() {
    return this._httpConfig;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // mqtt_config - computed: true, optional: true, required: false
  private _mqttConfig?: { [key: string]: string }; 
  public get mqttConfig() {
    return this.getStringMapAttribute('mqtt_config');
  }
  public set mqttConfig(value: { [key: string]: string }) {
    this._mqttConfig = value;
  }
  public resetMqttConfig() {
    this._mqttConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mqttConfigInput() {
    return this._mqttConfig;
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
    return this._name;
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // state_notification_config - computed: false, optional: true, required: false
  private _stateNotificationConfig?: { [key: string]: string }; 
  public get stateNotificationConfig() {
    return this.getStringMapAttribute('state_notification_config');
  }
  public set stateNotificationConfig(value: { [key: string]: string }) {
    this._stateNotificationConfig = value;
  }
  public resetStateNotificationConfig() {
    this._stateNotificationConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateNotificationConfigInput() {
    return this._stateNotificationConfig;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: CloudiotRegistryCredentials[] | cdktf.IResolvable; 
  public get credentials() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('credentials');
  }
  public set credentials(value: CloudiotRegistryCredentials[] | cdktf.IResolvable) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // event_notification_configs - computed: false, optional: true, required: false
  private _eventNotificationConfigs?: CloudiotRegistryEventNotificationConfigs[] | cdktf.IResolvable; 
  public get eventNotificationConfigs() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('event_notification_configs');
  }
  public set eventNotificationConfigs(value: CloudiotRegistryEventNotificationConfigs[] | cdktf.IResolvable) {
    this._eventNotificationConfigs = value;
  }
  public resetEventNotificationConfigs() {
    this._eventNotificationConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventNotificationConfigsInput() {
    return this._eventNotificationConfigs;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudiotRegistryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudiotRegistryTimeouts) {
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
      http_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._httpConfig),
      log_level: cdktf.stringToTerraform(this._logLevel),
      mqtt_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._mqttConfig),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      state_notification_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._stateNotificationConfig),
      credentials: cdktf.listMapper(cloudiotRegistryCredentialsToTerraform)(this._credentials),
      event_notification_configs: cdktf.listMapper(cloudiotRegistryEventNotificationConfigsToTerraform)(this._eventNotificationConfigs),
      timeouts: cloudiotRegistryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
