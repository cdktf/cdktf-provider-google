// https://www.terraform.io/docs/providers/google/r/cloudiot_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudiotDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * If a device is blocked, connections or requests from this device will fail.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#blocked CloudiotDevice#blocked}
  */
  readonly blocked?: boolean | cdktf.IResolvable;
  /**
  * The logging verbosity for device activity. Possible values: ["NONE", "ERROR", "INFO", "DEBUG"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#log_level CloudiotDevice#log_level}
  */
  readonly logLevel?: string;
  /**
  * The metadata key-value pairs assigned to the device.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#metadata CloudiotDevice#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * A unique name for the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#name CloudiotDevice#name}
  */
  readonly name: string;
  /**
  * The name of the device registry where this device should be created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#registry CloudiotDevice#registry}
  */
  readonly registry: string;
  /**
  * credentials block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#credentials CloudiotDevice#credentials}
  */
  readonly credentials?: CloudiotDeviceCredentials[] | cdktf.IResolvable;
  /**
  * gateway_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#gateway_config CloudiotDevice#gateway_config}
  */
  readonly gatewayConfig?: CloudiotDeviceGatewayConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#timeouts CloudiotDevice#timeouts}
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
    return this.getStringMapAttribute('details');
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#format CloudiotDevice#format}
  */
  readonly format: string;
  /**
  * The key data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#key CloudiotDevice#key}
  */
  readonly key: string;
}

export function cloudiotDeviceCredentialsPublicKeyToTerraform(struct?: CloudiotDeviceCredentialsPublicKeyOutputReference | CloudiotDeviceCredentialsPublicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export class CloudiotDeviceCredentialsPublicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudiotDeviceCredentialsPublicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudiotDeviceCredentialsPublicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._format = undefined;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._format = value.format;
      this._key = value.key;
    }
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
    return this._format;
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
    return this._key;
  }
}
export interface CloudiotDeviceCredentials {
  /**
  * The time at which this credential becomes invalid.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#expiration_time CloudiotDevice#expiration_time}
  */
  readonly expirationTime?: string;
  /**
  * public_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#public_key CloudiotDevice#public_key}
  */
  readonly publicKey: CloudiotDeviceCredentialsPublicKey;
}

export function cloudiotDeviceCredentialsToTerraform(struct?: CloudiotDeviceCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#gateway_auth_method CloudiotDevice#gateway_auth_method}
  */
  readonly gatewayAuthMethod?: string;
  /**
  * Indicates whether the device is a gateway. Default value: "NON_GATEWAY" Possible values: ["GATEWAY", "NON_GATEWAY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#gateway_type CloudiotDevice#gateway_type}
  */
  readonly gatewayType?: string;
}

export function cloudiotDeviceGatewayConfigToTerraform(struct?: CloudiotDeviceGatewayConfigOutputReference | CloudiotDeviceGatewayConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_auth_method: cdktf.stringToTerraform(struct!.gatewayAuthMethod),
    gateway_type: cdktf.stringToTerraform(struct!.gatewayType),
  }
}

export class CloudiotDeviceGatewayConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudiotDeviceGatewayConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayAuthMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayAuthMethod = this._gatewayAuthMethod;
    }
    if (this._gatewayType !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayType = this._gatewayType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudiotDeviceGatewayConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gatewayAuthMethod = undefined;
      this._gatewayType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gatewayAuthMethod = value.gatewayAuthMethod;
      this._gatewayType = value.gatewayType;
    }
  }

  // gateway_auth_method - computed: false, optional: true, required: false
  private _gatewayAuthMethod?: string; 
  public get gatewayAuthMethod() {
    return this.getStringAttribute('gateway_auth_method');
  }
  public set gatewayAuthMethod(value: string) {
    this._gatewayAuthMethod = value;
  }
  public resetGatewayAuthMethod() {
    this._gatewayAuthMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayAuthMethodInput() {
    return this._gatewayAuthMethod;
  }

  // gateway_type - computed: false, optional: true, required: false
  private _gatewayType?: string; 
  public get gatewayType() {
    return this.getStringAttribute('gateway_type');
  }
  public set gatewayType(value: string) {
    this._gatewayType = value;
  }
  public resetGatewayType() {
    this._gatewayType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayTypeInput() {
    return this._gatewayType;
  }

  // last_accessed_gateway_id - computed: true, optional: false, required: false
  public get lastAccessedGatewayId() {
    return this.getStringAttribute('last_accessed_gateway_id');
  }

  // last_accessed_gateway_time - computed: true, optional: false, required: false
  public get lastAccessedGatewayTime() {
    return this.getStringAttribute('last_accessed_gateway_time');
  }
}
export interface CloudiotDeviceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#create CloudiotDevice#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#delete CloudiotDevice#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#update CloudiotDevice#update}
  */
  readonly update?: string;
}

export function cloudiotDeviceTimeoutsToTerraform(struct?: CloudiotDeviceTimeoutsOutputReference | CloudiotDeviceTimeouts | cdktf.IResolvable): any {
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

export class CloudiotDeviceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CloudiotDeviceTimeouts | undefined {
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

  public set internalValue(value: CloudiotDeviceTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device google_cloudiot_device}
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
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device google_cloudiot_device} Resource
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
    this._gatewayConfig.internalValue = config.gatewayConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blocked - computed: false, optional: true, required: false
  private _blocked?: boolean | cdktf.IResolvable; 
  public get blocked() {
    return this.getBooleanAttribute('blocked');
  }
  public set blocked(value: boolean | cdktf.IResolvable) {
    this._blocked = value;
  }
  public resetBlocked() {
    this._blocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedInput() {
    return this._blocked;
  }

  // config - computed: true, optional: false, required: false
  public config(index: string) {
    return new CloudiotDeviceConfigA(this, 'config', index, false);
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
    return new CloudiotDeviceLastErrorStatus(this, 'last_error_status', index, false);
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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
    return this._registry;
  }

  // state - computed: true, optional: false, required: false
  public state(index: string) {
    return new CloudiotDeviceState(this, 'state', index, false);
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials?: CloudiotDeviceCredentials[] | cdktf.IResolvable; 
  public get credentials() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('credentials');
  }
  public set credentials(value: CloudiotDeviceCredentials[] | cdktf.IResolvable) {
    this._credentials = value;
  }
  public resetCredentials() {
    this._credentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials;
  }

  // gateway_config - computed: false, optional: true, required: false
  private _gatewayConfig = new CloudiotDeviceGatewayConfigOutputReference(this, "gateway_config", true);
  public get gatewayConfig() {
    return this._gatewayConfig;
  }
  public putGatewayConfig(value: CloudiotDeviceGatewayConfig) {
    this._gatewayConfig.internalValue = value;
  }
  public resetGatewayConfig() {
    this._gatewayConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayConfigInput() {
    return this._gatewayConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudiotDeviceTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudiotDeviceTimeouts) {
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
      blocked: cdktf.booleanToTerraform(this._blocked),
      log_level: cdktf.stringToTerraform(this._logLevel),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      registry: cdktf.stringToTerraform(this._registry),
      credentials: cdktf.listMapper(cloudiotDeviceCredentialsToTerraform)(this._credentials),
      gateway_config: cloudiotDeviceGatewayConfigToTerraform(this._gatewayConfig.internalValue),
      timeouts: cloudiotDeviceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
