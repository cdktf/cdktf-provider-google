// https://www.terraform.io/docs/providers/google/r/cloudiot_device.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudiotDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * If a device is blocked, connections or requests from this device will fail.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device.html#blocked CloudiotDevice#blocked}
  */
  readonly blocked?: boolean | cdktf.IResolvable;
  /**
  * The logging verbosity for device activity. Possible values: ["NONE", "ERROR", "INFO", "DEBUG"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device.html#log_level CloudiotDevice#log_level}
  */
  readonly logLevel?: string;
  /**
  * The metadata key-value pairs assigned to the device.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device.html#metadata CloudiotDevice#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * A unique name for the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device.html#name CloudiotDevice#name}
  */
  readonly name: string;
  /**
  * The name of the device registry where this device should be created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device.html#registry CloudiotDevice#registry}
  */
  readonly registry: string;
  /**
  * credentials block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device.html#credentials CloudiotDevice#credentials}
  */
  readonly credentials?: CloudiotDeviceCredentials[];
  /**
  * gateway_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device.html#gateway_config CloudiotDevice#gateway_config}
  */
  readonly gatewayConfig?: CloudiotDeviceGatewayConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device.html#timeouts CloudiotDevice#timeouts}
  */
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
    // Getting the computed value is not yet implemented
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
  /**
  * The format of the key. Possible values: ["RSA_PEM", "RSA_X509_PEM", "ES256_PEM", "ES256_X509_PEM"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device.html#format CloudiotDevice#format}
  */
  readonly format: string;
  /**
  * The key data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device.html#key CloudiotDevice#key}
  */
  readonly key: string;
}

function cloudiotDeviceCredentialsPublicKeyToTerraform(struct?: CloudiotDeviceCredentialsPublicKeyOutputReference | CloudiotDeviceCredentialsPublicKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export class CloudiotDeviceCredentialsPublicKeyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }
}
export interface CloudiotDeviceCredentials {
  /**
  * The time at which this credential becomes invalid.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device.html#expiration_time CloudiotDevice#expiration_time}
  */
  readonly expirationTime?: string;
  /**
  * public_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device.html#public_key CloudiotDevice#public_key}
  */
  readonly publicKey: CloudiotDeviceCredentialsPublicKey;
}

function cloudiotDeviceCredentialsToTerraform(struct?: CloudiotDeviceCredentials): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_time: cdktf.stringToTerraform(struct!.expirationTime),
    public_key: cloudiotDeviceCredentialsPublicKeyToTerraform(struct!.publicKey),
  }
}

export interface CloudiotDeviceGatewayConfig {
  /**
  * Indicates whether the device is a gateway. Possible values: ["ASSOCIATION_ONLY", "DEVICE_AUTH_TOKEN_ONLY", "ASSOCIATION_AND_DEVICE_AUTH_TOKEN"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device.html#gateway_auth_method CloudiotDevice#gateway_auth_method}
  */
  readonly gatewayAuthMethod?: string;
  /**
  * Indicates whether the device is a gateway. Default value: "NON_GATEWAY" Possible values: ["GATEWAY", "NON_GATEWAY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device.html#gateway_type CloudiotDevice#gateway_type}
  */
  readonly gatewayType?: string;
}

function cloudiotDeviceGatewayConfigToTerraform(struct?: CloudiotDeviceGatewayConfigOutputReference | CloudiotDeviceGatewayConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_auth_method: cdktf.stringToTerraform(struct!.gatewayAuthMethod),
    gateway_type: cdktf.stringToTerraform(struct!.gatewayType),
  }
}

export class CloudiotDeviceGatewayConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // gateway_auth_method - computed: false, optional: true, required: false
  private _gatewayAuthMethod?: string | undefined; 
  public get gatewayAuthMethod() {
    return this.getStringAttribute('gateway_auth_method');
  }
  public set gatewayAuthMethod(value: string | undefined) {
    this._gatewayAuthMethod = value;
  }
  public resetGatewayAuthMethod() {
    this._gatewayAuthMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayAuthMethodInput() {
    return this._gatewayAuthMethod
  }

  // gateway_type - computed: false, optional: true, required: false
  private _gatewayType?: string | undefined; 
  public get gatewayType() {
    return this.getStringAttribute('gateway_type');
  }
  public set gatewayType(value: string | undefined) {
    this._gatewayType = value;
  }
  public resetGatewayType() {
    this._gatewayType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayTypeInput() {
    return this._gatewayType
  }
}
export interface CloudiotDeviceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device.html#create CloudiotDevice#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device.html#delete CloudiotDevice#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device.html#update CloudiotDevice#update}
  */
  readonly update?: string;
}

function cloudiotDeviceTimeoutsToTerraform(struct?: CloudiotDeviceTimeoutsOutputReference | CloudiotDeviceTimeouts): any {
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

export class CloudiotDeviceTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device.html google_cloudiot_device}
*/
export class CloudiotDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_cloudiot_device";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device.html google_cloudiot_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudiotDeviceConfig
  */
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
  private _blocked?: boolean | cdktf.IResolvable | undefined; 
  public get blocked() {
    return this.getBooleanAttribute('blocked') as any;
  }
  public set blocked(value: boolean | cdktf.IResolvable | undefined) {
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get metadata() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
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

  // num_id - computed: true, optional: false, required: false
  public get numId() {
    return this.getStringAttribute('num_id');
  }

  // registry - computed: false, optional: false, required: true
  private _registry?: string; 
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
  private _credentials?: CloudiotDeviceCredentials[] | undefined; 
  public get credentials() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('credentials') as any;
  }
  public set credentials(value: CloudiotDeviceCredentials[] | undefined) {
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
  private _gatewayConfig?: CloudiotDeviceGatewayConfig | undefined; 
  private __gatewayConfigOutput = new CloudiotDeviceGatewayConfigOutputReference(this as any, "gateway_config", true);
  public get gatewayConfig() {
    return this.__gatewayConfigOutput;
  }
  public putGatewayConfig(value: CloudiotDeviceGatewayConfig | undefined) {
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
  private _timeouts?: CloudiotDeviceTimeouts | undefined; 
  private __timeoutsOutput = new CloudiotDeviceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: CloudiotDeviceTimeouts | undefined) {
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
      gateway_config: cloudiotDeviceGatewayConfigToTerraform(this._gatewayConfig),
      timeouts: cloudiotDeviceTimeoutsToTerraform(this._timeouts),
    };
  }
}
