// https://www.terraform.io/docs/providers/google/r/cloudiot_registry.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface CloudiotRegistryConfig extends TerraformMetaArguments {
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
export interface CloudiotRegistryTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CloudiotRegistry extends TerraformResource {

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
  public get httpConfig(): { [key: string]: string } | undefined {
    return this._httpConfig; // Getting the computed value is not yet implemented
  }
  public set httpConfig(value: { [key: string]: string } | undefined) {
    this._httpConfig = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string;
  public get logLevel() {
    return this._logLevel;
  }
  public set logLevel(value: string | undefined) {
    this._logLevel = value;
  }

  // mqtt_config - computed: true, optional: true, required: false
  private _mqttConfig?: { [key: string]: string }
  public get mqttConfig(): { [key: string]: string } | undefined {
    return this._mqttConfig; // Getting the computed value is not yet implemented
  }
  public set mqttConfig(value: { [key: string]: string } | undefined) {
    this._mqttConfig = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // state_notification_config - computed: false, optional: true, required: false
  private _stateNotificationConfig?: { [key: string]: string };
  public get stateNotificationConfig() {
    return this._stateNotificationConfig;
  }
  public set stateNotificationConfig(value: { [key: string]: string } | undefined) {
    this._stateNotificationConfig = value;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: CloudiotRegistryCredentials[];
  public get credentials() {
    return this._credentials;
  }
  public set credentials(value: CloudiotRegistryCredentials[] | undefined) {
    this._credentials = value;
  }

  // event_notification_configs - computed: false, optional: true, required: false
  private _eventNotificationConfigs?: CloudiotRegistryEventNotificationConfigs[];
  public get eventNotificationConfigs() {
    return this._eventNotificationConfigs;
  }
  public set eventNotificationConfigs(value: CloudiotRegistryEventNotificationConfigs[] | undefined) {
    this._eventNotificationConfigs = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudiotRegistryTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CloudiotRegistryTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      http_config: this._httpConfig,
      log_level: this._logLevel,
      mqtt_config: this._mqttConfig,
      name: this._name,
      project: this._project,
      region: this._region,
      state_notification_config: this._stateNotificationConfig,
      credentials: this._credentials,
      event_notification_configs: this._eventNotificationConfigs,
      timeouts: this._timeouts,
    };
  }
}
