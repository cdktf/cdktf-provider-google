// https://www.terraform.io/docs/providers/google/r/cloudiot_registry.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudiotRegistryConfig extends cdktf.TerraformMetaArguments {
  /** Activate or deactivate HTTP. */
  readonly httpConfig?: { [key: string]: string };
  /** The default logging verbosity for activity from devices in this
registry. Specifies which events should be written to logs. For
example, if the LogLevel is ERROR, only events that terminate in
errors will be logged. LogLevel is inclusive; enabling INFO logging
will also enable ERROR logging. Default value: "NONE" Possible values: ["NONE", "ERROR", "INFO", "DEBUG"] */
  readonly logLevel?: string;
  /** Activate or deactivate MQTT. */
  readonly mqttConfig?: { [key: string]: string };
  /** A unique name for the resource, required by device registry. */
  readonly name: string;
  readonly project?: string;
  /** The region in which the created registry should reside.
If it is not provided, the provider region is used. */
  readonly region?: string;
  /** A PubSub topic to publish device state updates. */
  readonly stateNotificationConfig?: { [key: string]: string };
  /** credentials block */
  readonly credentials?: CloudiotRegistryCredentials[];
  /** event_notification_configs block */
  readonly eventNotificationConfigs?: CloudiotRegistryEventNotificationConfigs[];
  /** timeouts block */
  readonly timeouts?: CloudiotRegistryTimeouts;
}
export interface CloudiotRegistryCredentials {
  /** A public key certificate format and data. */
  readonly publicKeyCertificate: { [key: string]: string };
}

function cloudiotRegistryCredentialsToTerraform(struct?: CloudiotRegistryCredentials): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    public_key_certificate: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.publicKeyCertificate),
  }
}

export interface CloudiotRegistryEventNotificationConfigs {
  /** PubSub topic name to publish device events. */
  readonly pubsubTopicName: string;
  /** If the subfolder name matches this string exactly, this
configuration will be used. The string must not include the
leading '/' character. If empty, all strings are matched. Empty
value can only be used for the last 'event_notification_configs'
item. */
  readonly subfolderMatches?: string;
}

function cloudiotRegistryEventNotificationConfigsToTerraform(struct?: CloudiotRegistryEventNotificationConfigs): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    pubsub_topic_name: cdktf.stringToTerraform(struct!.pubsubTopicName),
    subfolder_matches: cdktf.stringToTerraform(struct!.subfolderMatches),
  }
}

export interface CloudiotRegistryTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function cloudiotRegistryTimeoutsToTerraform(struct?: CloudiotRegistryTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class CloudiotRegistry extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _httpConfig?: { [key: string]: string }
  public get httpConfig(): { [key: string]: string } {
    return this.interpolationForAttribute('http_config') as any; // Getting the computed value is not yet implemented
  }
  public set httpConfig(value: { [key: string]: string }) {
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
  private _logLevel?: string;
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string ) {
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
  private _mqttConfig?: { [key: string]: string }
  public get mqttConfig(): { [key: string]: string } {
    return this.interpolationForAttribute('mqtt_config') as any; // Getting the computed value is not yet implemented
  }
  public set mqttConfig(value: { [key: string]: string }) {
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
  private _name: string;
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
    return this._region
  }

  // state_notification_config - computed: false, optional: true, required: false
  private _stateNotificationConfig?: { [key: string]: string };
  public get stateNotificationConfig() {
    return this.interpolationForAttribute('state_notification_config') as any;
  }
  public set stateNotificationConfig(value: { [key: string]: string } ) {
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
  private _credentials?: CloudiotRegistryCredentials[];
  public get credentials() {
    return this.interpolationForAttribute('credentials') as any;
  }
  public set credentials(value: CloudiotRegistryCredentials[] ) {
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
  private _eventNotificationConfigs?: CloudiotRegistryEventNotificationConfigs[];
  public get eventNotificationConfigs() {
    return this.interpolationForAttribute('event_notification_configs') as any;
  }
  public set eventNotificationConfigs(value: CloudiotRegistryEventNotificationConfigs[] ) {
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
  private _timeouts?: CloudiotRegistryTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CloudiotRegistryTimeouts ) {
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
