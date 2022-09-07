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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloudiot_device#id CloudiotDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
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
export interface CloudiotDeviceConfigA {
}

export function cloudiotDeviceConfigAToTerraform(struct?: CloudiotDeviceConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class CloudiotDeviceConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CloudiotDeviceConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudiotDeviceConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class CloudiotDeviceConfigAList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudiotDeviceConfigAOutputReference {
    return new CloudiotDeviceConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudiotDeviceLastErrorStatus {
}

export function cloudiotDeviceLastErrorStatusToTerraform(struct?: CloudiotDeviceLastErrorStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class CloudiotDeviceLastErrorStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CloudiotDeviceLastErrorStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudiotDeviceLastErrorStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details - computed: true, optional: false, required: false
  private _details = new cdktf.StringMapList(this, "details", false);
  public get details() {
    return this._details;
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

export class CloudiotDeviceLastErrorStatusList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudiotDeviceLastErrorStatusOutputReference {
    return new CloudiotDeviceLastErrorStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudiotDeviceState {
}

export function cloudiotDeviceStateToTerraform(struct?: CloudiotDeviceState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class CloudiotDeviceStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CloudiotDeviceState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudiotDeviceState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binary_data - computed: true, optional: false, required: false
  public get binaryData() {
    return this.getStringAttribute('binary_data');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class CloudiotDeviceStateList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudiotDeviceStateOutputReference {
    return new CloudiotDeviceStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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

export class CloudiotDeviceCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CloudiotDeviceCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTime = this._expirationTime;
    }
    if (this._publicKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudiotDeviceCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expirationTime = undefined;
      this._publicKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expirationTime = value.expirationTime;
      this._publicKey.internalValue = value.publicKey;
    }
  }

  // expiration_time - computed: true, optional: true, required: false
  private _expirationTime?: string; 
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }
  public set expirationTime(value: string) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey = new CloudiotDeviceCredentialsPublicKeyOutputReference(this, "public_key");
  public get publicKey() {
    return this._publicKey;
  }
  public putPublicKey(value: CloudiotDeviceCredentialsPublicKey) {
    this._publicKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey.internalValue;
  }
}

export class CloudiotDeviceCredentialsList extends cdktf.ComplexList {
  public internalValue? : CloudiotDeviceCredentials[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudiotDeviceCredentialsOutputReference {
    return new CloudiotDeviceCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudiotDeviceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CloudiotDeviceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
  public static readonly tfResourceType = "google_cloudiot_device";

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
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blocked = config.blocked;
    this._id = config.id;
    this._logLevel = config.logLevel;
    this._metadata = config.metadata;
    this._name = config.name;
    this._registry = config.registry;
    this._credentials.internalValue = config.credentials;
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
  private _config = new CloudiotDeviceConfigAList(this, "config", false);
  public get config() {
    return this._config;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
  private _lastErrorStatus = new CloudiotDeviceLastErrorStatusList(this, "last_error_status", false);
  public get lastErrorStatus() {
    return this._lastErrorStatus;
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
  private _state = new CloudiotDeviceStateList(this, "state", false);
  public get state() {
    return this._state;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new CloudiotDeviceCredentialsList(this, "credentials", false);
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: CloudiotDeviceCredentials[] | cdktf.IResolvable) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // gateway_config - computed: false, optional: true, required: false
  private _gatewayConfig = new CloudiotDeviceGatewayConfigOutputReference(this, "gateway_config");
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
  private _timeouts = new CloudiotDeviceTimeoutsOutputReference(this, "timeouts");
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
      id: cdktf.stringToTerraform(this._id),
      log_level: cdktf.stringToTerraform(this._logLevel),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      registry: cdktf.stringToTerraform(this._registry),
      credentials: cdktf.listMapper(cloudiotDeviceCredentialsToTerraform, true)(this._credentials.internalValue),
      gateway_config: cloudiotDeviceGatewayConfigToTerraform(this._gatewayConfig.internalValue),
      timeouts: cloudiotDeviceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
