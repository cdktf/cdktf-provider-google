// https://www.terraform.io/docs/providers/google/r/cloudiot_device.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface CloudiotDeviceConfig extends TerraformMetaArguments {
  /** If a device is blocked, connections or requests from this device will fail. */
  readonly blocked?: boolean;
  /** The logging verbosity for device activity. Possible values: ["NONE", "ERROR", "INFO", "DEBUG"] */
  readonly logLevel?: string;
  /** The metadata key-value pairs assigned to the device. */
  readonly metadata?: { [key: string]: string };
  /** A unique name for the resource. */
  readonly name: string;
  /** The name of the device registry where this device should be created. */
  readonly registry: string;
  /** credentials block */
  readonly credentials?: CloudiotDeviceCredentials[];
  /** gateway_config block */
  readonly gatewayConfig?: CloudiotDeviceGatewayConfig[];
  /** timeouts block */
  readonly timeouts?: CloudiotDeviceTimeouts;
}
export class CloudiotDeviceConfigA extends ComplexComputedList {

  // binary_data - computed: true, optional: false, required: true
  public get binaryData() {
    return this.getStringAttribute('binary_data');
  }

  // cloud_update_time - computed: true, optional: false, required: true
  public get cloudUpdateTime() {
    return this.getStringAttribute('cloud_update_time');
  }

  // device_ack_time - computed: true, optional: false, required: true
  public get deviceAckTime() {
    return this.getStringAttribute('device_ack_time');
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }
}
export class CloudiotDeviceLastErrorStatus extends ComplexComputedList {

  // details - computed: true, optional: false, required: true
  public get details() {
    return 'not implemented' as any;
  }

  // message - computed: true, optional: false, required: true
  public get message() {
    return this.getStringAttribute('message');
  }

  // number - computed: true, optional: false, required: true
  public get number() {
    return this.getNumberAttribute('number');
  }
}
export class CloudiotDeviceState extends ComplexComputedList {

  // binary_data - computed: true, optional: false, required: true
  public get binaryData() {
    return this.getStringAttribute('binary_data');
  }

  // update_time - computed: true, optional: false, required: true
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}
export interface CloudiotDeviceCredentialsPublicKey {
  /** The format of the key. Possible values: ["RSA_PEM", "RSA_X509_PEM", "ES256_PEM", "ES256_X509_PEM"] */
  readonly format: string;
  /** The key data. */
  readonly key: string;
}
export interface CloudiotDeviceCredentials {
  /** The time at which this credential becomes invalid. */
  readonly expirationTime?: string;
  /** public_key block */
  readonly publicKey: CloudiotDeviceCredentialsPublicKey[];
}
export interface CloudiotDeviceGatewayConfig {
  /** Indicates whether the device is a gateway. Possible values: ["ASSOCIATION_ONLY", "DEVICE_AUTH_TOKEN_ONLY", "ASSOCIATION_AND_DEVICE_AUTH_TOKEN"] */
  readonly gatewayAuthMethod?: string;
  /** Indicates whether the device is a gateway. Default value: "NON_GATEWAY" Possible values: ["GATEWAY", "NON_GATEWAY"] */
  readonly gatewayType?: string;
}
export interface CloudiotDeviceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class CloudiotDevice extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudiotDeviceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloudiot_device',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._blocked = config.blocked;
    this._logLevel = config.logLevel;
    this._metadata = config.metadata;
    this._name = config.name;
    this._registry = config.registry;
    this._credentials = config.credentials;
    this._gatewayConfig = config.gatewayConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocked - computed: false, optional: true, required: false
  private _blocked?: boolean;
  public get blocked() {
    return this._blocked;
  }
  public set blocked(value: boolean | undefined) {
    this._blocked = value;
  }

  // config - computed: true, optional: false, required: true
  public config(index: string) {
    return new CloudiotDeviceConfigA(this, 'config', index);
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // last_config_ack_time - computed: true, optional: false, required: true
  public get lastConfigAckTime() {
    return this.getStringAttribute('last_config_ack_time');
  }

  // last_config_send_time - computed: true, optional: false, required: true
  public get lastConfigSendTime() {
    return this.getStringAttribute('last_config_send_time');
  }

  // last_error_status - computed: true, optional: false, required: true
  public lastErrorStatus(index: string) {
    return new CloudiotDeviceLastErrorStatus(this, 'last_error_status', index);
  }

  // last_error_time - computed: true, optional: false, required: true
  public get lastErrorTime() {
    return this.getStringAttribute('last_error_time');
  }

  // last_event_time - computed: true, optional: false, required: true
  public get lastEventTime() {
    return this.getStringAttribute('last_event_time');
  }

  // last_heartbeat_time - computed: true, optional: false, required: true
  public get lastHeartbeatTime() {
    return this.getStringAttribute('last_heartbeat_time');
  }

  // last_state_time - computed: true, optional: false, required: true
  public get lastStateTime() {
    return this.getStringAttribute('last_state_time');
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string;
  public get logLevel() {
    return this._logLevel;
  }
  public set logLevel(value: string | undefined) {
    this._logLevel = value;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string };
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: { [key: string]: string } | undefined) {
    this._metadata = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // num_id - computed: true, optional: false, required: true
  public get numId() {
    return this.getStringAttribute('num_id');
  }

  // registry - computed: false, optional: false, required: true
  private _registry: string;
  public get registry() {
    return this._registry;
  }
  public set registry(value: string) {
    this._registry = value;
  }

  // state - computed: true, optional: false, required: true
  public state(index: string) {
    return new CloudiotDeviceState(this, 'state', index);
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: CloudiotDeviceCredentials[];
  public get credentials() {
    return this._credentials;
  }
  public set credentials(value: CloudiotDeviceCredentials[] | undefined) {
    this._credentials = value;
  }

  // gateway_config - computed: false, optional: true, required: false
  private _gatewayConfig?: CloudiotDeviceGatewayConfig[];
  public get gatewayConfig() {
    return this._gatewayConfig;
  }
  public set gatewayConfig(value: CloudiotDeviceGatewayConfig[] | undefined) {
    this._gatewayConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudiotDeviceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CloudiotDeviceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      blocked: this._blocked,
      log_level: this._logLevel,
      metadata: this._metadata,
      name: this._name,
      registry: this._registry,
      credentials: this._credentials,
      gateway_config: this._gatewayConfig,
      timeouts: this._timeouts,
    };
  }
}
