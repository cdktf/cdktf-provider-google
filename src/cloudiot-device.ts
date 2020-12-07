// https://www.terraform.io/docs/providers/google/r/cloudiot_device.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudiotDeviceConfig extends cdktf.TerraformMetaArguments {
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
export class CloudiotDeviceConfigA extends cdktf.ComplexComputedList {

  // binary_data - computed: true, optional: false, required: false
  public get binaryData() {
    return this.getStringAttribute('binary_data');
  }

  // cloud_update_time - computed: true, optional: false, required: false
  public get cloudUpdateTime() {
    return this.getStringAttribute('cloud_update_time');
  }

  // device_ack_time - computed: true, optional: false, required: false
  public get deviceAckTime() {
    return this.getStringAttribute('device_ack_time');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export class CloudiotDeviceLastErrorStatus extends cdktf.ComplexComputedList {

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.interpolationForAttribute('details') as any;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }
}
export class CloudiotDeviceState extends cdktf.ComplexComputedList {

  // binary_data - computed: true, optional: false, required: false
  public get binaryData() {
    return this.getStringAttribute('binary_data');
  }

  // update_time - computed: true, optional: false, required: false
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

function cloudiotDeviceCredentialsPublicKeyToTerraform(struct?: CloudiotDeviceCredentialsPublicKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export interface CloudiotDeviceCredentials {
  /** The time at which this credential becomes invalid. */
  readonly expirationTime?: string;
  /** public_key block */
  readonly publicKey: CloudiotDeviceCredentialsPublicKey[];
}

function cloudiotDeviceCredentialsToTerraform(struct?: CloudiotDeviceCredentials): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expiration_time: cdktf.stringToTerraform(struct!.expirationTime),
    public_key: cdktf.listMapper(cloudiotDeviceCredentialsPublicKeyToTerraform)(struct!.publicKey),
  }
}

export interface CloudiotDeviceGatewayConfig {
  /** Indicates whether the device is a gateway. Possible values: ["ASSOCIATION_ONLY", "DEVICE_AUTH_TOKEN_ONLY", "ASSOCIATION_AND_DEVICE_AUTH_TOKEN"] */
  readonly gatewayAuthMethod?: string;
  /** Indicates whether the device is a gateway. Default value: "NON_GATEWAY" Possible values: ["GATEWAY", "NON_GATEWAY"] */
  readonly gatewayType?: string;
}

function cloudiotDeviceGatewayConfigToTerraform(struct?: CloudiotDeviceGatewayConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    gateway_auth_method: cdktf.stringToTerraform(struct!.gatewayAuthMethod),
    gateway_type: cdktf.stringToTerraform(struct!.gatewayType),
  }
}

export interface CloudiotDeviceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function cloudiotDeviceTimeoutsToTerraform(struct?: CloudiotDeviceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class CloudiotDevice extends cdktf.TerraformResource {

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
    return this.getBooleanAttribute('blocked');
  }
  public set blocked(value: boolean ) {
    this._blocked = value;
  }
  public resetBlocked() {
    this._blocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInput() {
    return this._blocked
  }

  // config - computed: true, optional: false, required: false
  public config(index: string) {
    return new CloudiotDeviceConfigA(this, 'config', index);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_config_ack_time - computed: true, optional: false, required: false
  public get lastConfigAckTime() {
    return this.getStringAttribute('last_config_ack_time');
  }

  // last_config_send_time - computed: true, optional: false, required: false
  public get lastConfigSendTime() {
    return this.getStringAttribute('last_config_send_time');
  }

  // last_error_status - computed: true, optional: false, required: false
  public lastErrorStatus(index: string) {
    return new CloudiotDeviceLastErrorStatus(this, 'last_error_status', index);
  }

  // last_error_time - computed: true, optional: false, required: false
  public get lastErrorTime() {
    return this.getStringAttribute('last_error_time');
  }

  // last_event_time - computed: true, optional: false, required: false
  public get lastEventTime() {
    return this.getStringAttribute('last_event_time');
  }

  // last_heartbeat_time - computed: true, optional: false, required: false
  public get lastHeartbeatTime() {
    return this.getStringAttribute('last_heartbeat_time');
  }

  // last_state_time - computed: true, optional: false, required: false
  public get lastStateTime() {
    return this.getStringAttribute('last_state_time');
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string };
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } ) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
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

  // num_id - computed: true, optional: false, required: false
  public get numId() {
    return this.getStringAttribute('num_id');
  }

  // registry - computed: false, optional: false, required: true
  private _registry: string;
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry
  }

  // state - computed: true, optional: false, required: false
  public state(index: string) {
    return new CloudiotDeviceState(this, 'state', index);
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: CloudiotDeviceCredentials[];
  public get credentials() {
    return this.interpolationForAttribute('credentials') as any;
  }
  public set credentials(value: CloudiotDeviceCredentials[] ) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials
  }

  // gateway_config - computed: false, optional: true, required: false
  private _gatewayConfig?: CloudiotDeviceGatewayConfig[];
  public get gatewayConfig() {
    return this.interpolationForAttribute('gateway_config') as any;
  }
  public set gatewayConfig(value: CloudiotDeviceGatewayConfig[] ) {
    this._gatewayConfig = value;
  }
  public resetGatewayConfig() {
    this._gatewayConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayConfigInput() {
    return this._gatewayConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudiotDeviceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CloudiotDeviceTimeouts ) {
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
      blocked: cdktf.booleanToTerraform(this._blocked),
      log_level: cdktf.stringToTerraform(this._logLevel),
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      registry: cdktf.stringToTerraform(this._registry),
      credentials: cdktf.listMapper(cloudiotDeviceCredentialsToTerraform)(this._credentials),
      gateway_config: cdktf.listMapper(cloudiotDeviceGatewayConfigToTerraform)(this._gatewayConfig),
      timeouts: cloudiotDeviceTimeoutsToTerraform(this._timeouts),
    };
  }
}
