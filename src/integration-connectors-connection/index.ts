// https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationConnectorsConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * connectorVersion of the Connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#connector_version IntegrationConnectorsConnection#connector_version}
  */
  readonly connectorVersion: string;
  /**
  * An arbitrary description for the Conection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#description IntegrationConnectorsConnection#description}
  */
  readonly description?: string;
  /**
  * Eventing enablement type. Will be nil if eventing is not enabled. Possible values: ["EVENTING_AND_CONNECTION", "ONLY_EVENTING"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#eventing_enablement_type IntegrationConnectorsConnection#eventing_enablement_type}
  */
  readonly eventingEnablementType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#id IntegrationConnectorsConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource labels to represent user provided metadata.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#labels IntegrationConnectorsConnection#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Location in which Connection needs to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#location IntegrationConnectorsConnection#location}
  */
  readonly location: string;
  /**
  * Name of Connection needs to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#name IntegrationConnectorsConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#project IntegrationConnectorsConnection#project}
  */
  readonly project?: string;
  /**
  * Service account needed for runtime plane to access Google Cloud resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#service_account IntegrationConnectorsConnection#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Suspended indicates if a user has suspended a connection or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#suspended IntegrationConnectorsConnection#suspended}
  */
  readonly suspended?: boolean | cdktf.IResolvable;
  /**
  * auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#auth_config IntegrationConnectorsConnection#auth_config}
  */
  readonly authConfig?: IntegrationConnectorsConnectionAuthConfig;
  /**
  * config_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#config_variable IntegrationConnectorsConnection#config_variable}
  */
  readonly configVariable?: IntegrationConnectorsConnectionConfigVariable[] | cdktf.IResolvable;
  /**
  * destination_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#destination_config IntegrationConnectorsConnection#destination_config}
  */
  readonly destinationConfig?: IntegrationConnectorsConnectionDestinationConfig[] | cdktf.IResolvable;
  /**
  * eventing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#eventing_config IntegrationConnectorsConnection#eventing_config}
  */
  readonly eventingConfig?: IntegrationConnectorsConnectionEventingConfig;
  /**
  * lock_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#lock_config IntegrationConnectorsConnection#lock_config}
  */
  readonly lockConfig?: IntegrationConnectorsConnectionLockConfig;
  /**
  * log_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#log_config IntegrationConnectorsConnection#log_config}
  */
  readonly logConfig?: IntegrationConnectorsConnectionLogConfig;
  /**
  * node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#node_config IntegrationConnectorsConnection#node_config}
  */
  readonly nodeConfig?: IntegrationConnectorsConnectionNodeConfig;
  /**
  * ssl_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#ssl_config IntegrationConnectorsConnection#ssl_config}
  */
  readonly sslConfig?: IntegrationConnectorsConnectionSslConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#timeouts IntegrationConnectorsConnection#timeouts}
  */
  readonly timeouts?: IntegrationConnectorsConnectionTimeouts;
}
export interface IntegrationConnectorsConnectionConnectorVersionInfraConfig {
}

export function integrationConnectorsConnectionConnectorVersionInfraConfigToTerraform(struct?: IntegrationConnectorsConnectionConnectorVersionInfraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function integrationConnectorsConnectionConnectorVersionInfraConfigToHclTerraform(struct?: IntegrationConnectorsConnectionConnectorVersionInfraConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationConnectorsConnectionConnectorVersionInfraConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationConnectorsConnectionConnectorVersionInfraConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionConnectorVersionInfraConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ratelimit_threshold - computed: true, optional: false, required: false
  public get ratelimitThreshold() {
    return this.getStringAttribute('ratelimit_threshold');
  }
}

export class IntegrationConnectorsConnectionConnectorVersionInfraConfigList extends cdktf.ComplexList {

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
  public get(index: number): IntegrationConnectorsConnectionConnectorVersionInfraConfigOutputReference {
    return new IntegrationConnectorsConnectionConnectorVersionInfraConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationConnectorsConnectionEventingRuntimeDataStatus {
}

export function integrationConnectorsConnectionEventingRuntimeDataStatusToTerraform(struct?: IntegrationConnectorsConnectionEventingRuntimeDataStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function integrationConnectorsConnectionEventingRuntimeDataStatusToHclTerraform(struct?: IntegrationConnectorsConnectionEventingRuntimeDataStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationConnectorsConnectionEventingRuntimeDataStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationConnectorsConnectionEventingRuntimeDataStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionEventingRuntimeDataStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class IntegrationConnectorsConnectionEventingRuntimeDataStatusList extends cdktf.ComplexList {

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
  public get(index: number): IntegrationConnectorsConnectionEventingRuntimeDataStatusOutputReference {
    return new IntegrationConnectorsConnectionEventingRuntimeDataStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationConnectorsConnectionEventingRuntimeData {
}

export function integrationConnectorsConnectionEventingRuntimeDataToTerraform(struct?: IntegrationConnectorsConnectionEventingRuntimeData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function integrationConnectorsConnectionEventingRuntimeDataToHclTerraform(struct?: IntegrationConnectorsConnectionEventingRuntimeData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationConnectorsConnectionEventingRuntimeDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationConnectorsConnectionEventingRuntimeData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionEventingRuntimeData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // events_listener_endpoint - computed: true, optional: false, required: false
  public get eventsListenerEndpoint() {
    return this.getStringAttribute('events_listener_endpoint');
  }

  // status - computed: true, optional: false, required: false
  private _status = new IntegrationConnectorsConnectionEventingRuntimeDataStatusList(this, "status", false);
  public get status() {
    return this._status;
  }
}

export class IntegrationConnectorsConnectionEventingRuntimeDataList extends cdktf.ComplexList {

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
  public get(index: number): IntegrationConnectorsConnectionEventingRuntimeDataOutputReference {
    return new IntegrationConnectorsConnectionEventingRuntimeDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationConnectorsConnectionStatus {
}

export function integrationConnectorsConnectionStatusToTerraform(struct?: IntegrationConnectorsConnectionStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function integrationConnectorsConnectionStatusToHclTerraform(struct?: IntegrationConnectorsConnectionStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationConnectorsConnectionStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationConnectorsConnectionStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class IntegrationConnectorsConnectionStatusList extends cdktf.ComplexList {

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
  public get(index: number): IntegrationConnectorsConnectionStatusOutputReference {
    return new IntegrationConnectorsConnectionStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValue {
  /**
  * The [KMS key name] with which the content of the Operation is encrypted. The expected
  * format: projects/* /locations/* /keyRings/* /cryptoKeys/*.
  * Will be empty string if google managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#kms_key_name IntegrationConnectorsConnection#kms_key_name}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly kmsKeyName?: string;
  /**
  * Type of Encription Key Possible values: ["GOOGLE_MANAGED", "CUSTOMER_MANAGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#type IntegrationConnectorsConnection#type}
  */
  readonly type: string;
}

export function integrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValueToTerraform(struct?: IntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValueOutputReference | IntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function integrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValueToHclTerraform(struct?: IntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValueOutputReference | IntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
      this._type = value.type;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface IntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValue {
  /**
  * Secret version of Secret Value for Config variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#secret_version IntegrationConnectorsConnection#secret_version}
  */
  readonly secretVersion: string;
}

export function integrationConnectorsConnectionAuthConfigAdditionalVariableSecretValueToTerraform(struct?: IntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValueOutputReference | IntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function integrationConnectorsConnectionAuthConfigAdditionalVariableSecretValueToHclTerraform(struct?: IntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValueOutputReference | IntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface IntegrationConnectorsConnectionAuthConfigAdditionalVariable {
  /**
  * Boolean Value of configVariable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#boolean_value IntegrationConnectorsConnection#boolean_value}
  */
  readonly booleanValue?: boolean | cdktf.IResolvable;
  /**
  * Integer Value of configVariable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#integer_value IntegrationConnectorsConnection#integer_value}
  */
  readonly integerValue?: number;
  /**
  * Key for the configVariable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#key IntegrationConnectorsConnection#key}
  */
  readonly key: string;
  /**
  * String Value of configVariabley.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#string_value IntegrationConnectorsConnection#string_value}
  */
  readonly stringValue?: string;
  /**
  * encryption_key_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#encryption_key_value IntegrationConnectorsConnection#encryption_key_value}
  */
  readonly encryptionKeyValue?: IntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValue;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#secret_value IntegrationConnectorsConnection#secret_value}
  */
  readonly secretValue?: IntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValue;
}

export function integrationConnectorsConnectionAuthConfigAdditionalVariableToTerraform(struct?: IntegrationConnectorsConnectionAuthConfigAdditionalVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_value: cdktf.booleanToTerraform(struct!.booleanValue),
    integer_value: cdktf.numberToTerraform(struct!.integerValue),
    key: cdktf.stringToTerraform(struct!.key),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    encryption_key_value: integrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValueToTerraform(struct!.encryptionKeyValue),
    secret_value: integrationConnectorsConnectionAuthConfigAdditionalVariableSecretValueToTerraform(struct!.secretValue),
  }
}


export function integrationConnectorsConnectionAuthConfigAdditionalVariableToHclTerraform(struct?: IntegrationConnectorsConnectionAuthConfigAdditionalVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_value: {
      value: cdktf.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    integer_value: {
      value: cdktf.numberToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key_value: {
      value: integrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValueToHclTerraform(struct!.encryptionKeyValue),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValueList",
    },
    secret_value: {
      value: integrationConnectorsConnectionAuthConfigAdditionalVariableSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionAuthConfigAdditionalVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationConnectorsConnectionAuthConfigAdditionalVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._encryptionKeyValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyValue = this._encryptionKeyValue?.internalValue;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionAuthConfigAdditionalVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanValue = undefined;
      this._integerValue = undefined;
      this._key = undefined;
      this._stringValue = undefined;
      this._encryptionKeyValue.internalValue = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanValue = value.booleanValue;
      this._integerValue = value.integerValue;
      this._key = value.key;
      this._stringValue = value.stringValue;
      this._encryptionKeyValue.internalValue = value.encryptionKeyValue;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // boolean_value - computed: false, optional: true, required: false
  private _booleanValue?: boolean | cdktf.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktf.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: number; 
  public get integerValue() {
    return this.getNumberAttribute('integer_value');
  }
  public set integerValue(value: number) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
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

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // encryption_key_value - computed: false, optional: true, required: false
  private _encryptionKeyValue = new IntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValueOutputReference(this, "encryption_key_value");
  public get encryptionKeyValue() {
    return this._encryptionKeyValue;
  }
  public putEncryptionKeyValue(value: IntegrationConnectorsConnectionAuthConfigAdditionalVariableEncryptionKeyValue) {
    this._encryptionKeyValue.internalValue = value;
  }
  public resetEncryptionKeyValue() {
    this._encryptionKeyValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyValueInput() {
    return this._encryptionKeyValue.internalValue;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new IntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: IntegrationConnectorsConnectionAuthConfigAdditionalVariableSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class IntegrationConnectorsConnectionAuthConfigAdditionalVariableList extends cdktf.ComplexList {
  public internalValue? : IntegrationConnectorsConnectionAuthConfigAdditionalVariable[] | cdktf.IResolvable

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
  public get(index: number): IntegrationConnectorsConnectionAuthConfigAdditionalVariableOutputReference {
    return new IntegrationConnectorsConnectionAuthConfigAdditionalVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecret {
  /**
  * The resource name of the secret version in the format,
  * format as: projects/* /secrets/* /versions/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#secret_version IntegrationConnectorsConnection#secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly secretVersion: string;
}

export function integrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecretToTerraform(struct?: IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecretOutputReference | IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function integrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecretToHclTerraform(struct?: IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecretOutputReference | IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlow {
  /**
  * Auth URL for Authorization Code Flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#auth_uri IntegrationConnectorsConnection#auth_uri}
  */
  readonly authUri?: string;
  /**
  * Client ID for user-provided OAuth app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#client_id IntegrationConnectorsConnection#client_id}
  */
  readonly clientId?: string;
  /**
  * Whether to enable PKCE when the user performs the auth code flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#enable_pkce IntegrationConnectorsConnection#enable_pkce}
  */
  readonly enablePkce?: boolean | cdktf.IResolvable;
  /**
  * Scopes the connection will request when the user performs the auth code flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#scopes IntegrationConnectorsConnection#scopes}
  */
  readonly scopes?: string[];
  /**
  * client_secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#client_secret IntegrationConnectorsConnection#client_secret}
  */
  readonly clientSecret?: IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecret;
}

export function integrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowToTerraform(struct?: IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowOutputReference | IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_uri: cdktf.stringToTerraform(struct!.authUri),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    enable_pkce: cdktf.booleanToTerraform(struct!.enablePkce),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    client_secret: integrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecretToTerraform(struct!.clientSecret),
  }
}


export function integrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowToHclTerraform(struct?: IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowOutputReference | IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_uri: {
      value: cdktf.stringToHclTerraform(struct!.authUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_pkce: {
      value: cdktf.booleanToHclTerraform(struct!.enablePkce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_secret: {
      value: integrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUri = this._authUri;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._enablePkce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePkce = this._enablePkce;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authUri = undefined;
      this._clientId = undefined;
      this._enablePkce = undefined;
      this._scopes = undefined;
      this._clientSecret.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authUri = value.authUri;
      this._clientId = value.clientId;
      this._enablePkce = value.enablePkce;
      this._scopes = value.scopes;
      this._clientSecret.internalValue = value.clientSecret;
    }
  }

  // auth_uri - computed: false, optional: true, required: false
  private _authUri?: string; 
  public get authUri() {
    return this.getStringAttribute('auth_uri');
  }
  public set authUri(value: string) {
    this._authUri = value;
  }
  public resetAuthUri() {
    this._authUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUriInput() {
    return this._authUri;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // enable_pkce - computed: false, optional: true, required: false
  private _enablePkce?: boolean | cdktf.IResolvable; 
  public get enablePkce() {
    return this.getBooleanAttribute('enable_pkce');
  }
  public set enablePkce(value: boolean | cdktf.IResolvable) {
    this._enablePkce = value;
  }
  public resetEnablePkce() {
    this._enablePkce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePkceInput() {
    return this._enablePkce;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret = new IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }
}
export interface IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecret {
  /**
  * The resource name of the secret version in the format,
  * format as: projects/* /secrets/* /versions/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#secret_version IntegrationConnectorsConnection#secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly secretVersion: string;
}

export function integrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecretToTerraform(struct?: IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecretOutputReference | IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function integrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecretToHclTerraform(struct?: IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecretOutputReference | IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentials {
  /**
  * Secret version of Password for Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#client_id IntegrationConnectorsConnection#client_id}
  */
  readonly clientId: string;
  /**
  * client_secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#client_secret IntegrationConnectorsConnection#client_secret}
  */
  readonly clientSecret?: IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecret;
}

export function integrationConnectorsConnectionAuthConfigOauth2ClientCredentialsToTerraform(struct?: IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsOutputReference | IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: integrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecretToTerraform(struct!.clientSecret),
  }
}


export function integrationConnectorsConnectionAuthConfigOauth2ClientCredentialsToHclTerraform(struct?: IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsOutputReference | IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: integrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret = new IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }
}
export interface IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKey {
  /**
  * The resource name of the secret version in the format,
  * format as: projects/* /secrets/* /versions/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#secret_version IntegrationConnectorsConnection#secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly secretVersion: string;
}

export function integrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKeyToTerraform(struct?: IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKeyOutputReference | IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function integrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKeyToHclTerraform(struct?: IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKeyOutputReference | IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaims {
  /**
  * Value for the "aud" claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#audience IntegrationConnectorsConnection#audience}
  */
  readonly audience?: string;
  /**
  * Value for the "iss" claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#issuer IntegrationConnectorsConnection#issuer}
  */
  readonly issuer?: string;
  /**
  * Value for the "sub" claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#subject IntegrationConnectorsConnection#subject}
  */
  readonly subject?: string;
}

export function integrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaimsToTerraform(struct?: IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaimsOutputReference | IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function integrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaimsToHclTerraform(struct?: IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaimsOutputReference | IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audience = undefined;
      this._issuer = undefined;
      this._subject = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audience = value.audience;
      this._issuer = value.issuer;
      this._subject = value.subject;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // subject - computed: false, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}
export interface IntegrationConnectorsConnectionAuthConfigOauth2JwtBearer {
  /**
  * client_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#client_key IntegrationConnectorsConnection#client_key}
  */
  readonly clientKey?: IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKey;
  /**
  * jwt_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#jwt_claims IntegrationConnectorsConnection#jwt_claims}
  */
  readonly jwtClaims?: IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaims;
}

export function integrationConnectorsConnectionAuthConfigOauth2JwtBearerToTerraform(struct?: IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerOutputReference | IntegrationConnectorsConnectionAuthConfigOauth2JwtBearer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_key: integrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKeyToTerraform(struct!.clientKey),
    jwt_claims: integrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaimsToTerraform(struct!.jwtClaims),
  }
}


export function integrationConnectorsConnectionAuthConfigOauth2JwtBearerToHclTerraform(struct?: IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerOutputReference | IntegrationConnectorsConnectionAuthConfigOauth2JwtBearer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_key: {
      value: integrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKeyToHclTerraform(struct!.clientKey),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKeyList",
    },
    jwt_claims: {
      value: integrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaimsToHclTerraform(struct!.jwtClaims),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaimsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionAuthConfigOauth2JwtBearer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey?.internalValue;
    }
    if (this._jwtClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtClaims = this._jwtClaims?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionAuthConfigOauth2JwtBearer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientKey.internalValue = undefined;
      this._jwtClaims.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientKey.internalValue = value.clientKey;
      this._jwtClaims.internalValue = value.jwtClaims;
    }
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey = new IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKeyOutputReference(this, "client_key");
  public get clientKey() {
    return this._clientKey;
  }
  public putClientKey(value: IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerClientKey) {
    this._clientKey.internalValue = value;
  }
  public resetClientKey() {
    this._clientKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey.internalValue;
  }

  // jwt_claims - computed: false, optional: true, required: false
  private _jwtClaims = new IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaimsOutputReference(this, "jwt_claims");
  public get jwtClaims() {
    return this._jwtClaims;
  }
  public putJwtClaims(value: IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerJwtClaims) {
    this._jwtClaims.internalValue = value;
  }
  public resetJwtClaims() {
    this._jwtClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtClaimsInput() {
    return this._jwtClaims.internalValue;
  }
}
export interface IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCert {
  /**
  * The resource name of the secret version in the format,
  * format as: projects/* /secrets/* /versions/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#secret_version IntegrationConnectorsConnection#secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly secretVersion: string;
}

export function integrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertToTerraform(struct?: IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertOutputReference | IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function integrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertToHclTerraform(struct?: IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertOutputReference | IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPass {
  /**
  * The resource name of the secret version in the format,
  * format as: projects/* /secrets/* /versions/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#secret_version IntegrationConnectorsConnection#secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly secretVersion: string;
}

export function integrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPassToTerraform(struct?: IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPassOutputReference | IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function integrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPassToHclTerraform(struct?: IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPassOutputReference | IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPassOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPass | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPass | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface IntegrationConnectorsConnectionAuthConfigSshPublicKey {
  /**
  * Format of SSH Client cert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#cert_type IntegrationConnectorsConnection#cert_type}
  */
  readonly certType?: string;
  /**
  * The user account used to authenticate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#username IntegrationConnectorsConnection#username}
  */
  readonly username: string;
  /**
  * ssh_client_cert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#ssh_client_cert IntegrationConnectorsConnection#ssh_client_cert}
  */
  readonly sshClientCert?: IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCert;
  /**
  * ssh_client_cert_pass block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#ssh_client_cert_pass IntegrationConnectorsConnection#ssh_client_cert_pass}
  */
  readonly sshClientCertPass?: IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPass;
}

export function integrationConnectorsConnectionAuthConfigSshPublicKeyToTerraform(struct?: IntegrationConnectorsConnectionAuthConfigSshPublicKeyOutputReference | IntegrationConnectorsConnectionAuthConfigSshPublicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_type: cdktf.stringToTerraform(struct!.certType),
    username: cdktf.stringToTerraform(struct!.username),
    ssh_client_cert: integrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertToTerraform(struct!.sshClientCert),
    ssh_client_cert_pass: integrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPassToTerraform(struct!.sshClientCertPass),
  }
}


export function integrationConnectorsConnectionAuthConfigSshPublicKeyToHclTerraform(struct?: IntegrationConnectorsConnectionAuthConfigSshPublicKeyOutputReference | IntegrationConnectorsConnectionAuthConfigSshPublicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_type: {
      value: cdktf.stringToHclTerraform(struct!.certType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_client_cert: {
      value: integrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertToHclTerraform(struct!.sshClientCert),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertList",
    },
    ssh_client_cert_pass: {
      value: integrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPassToHclTerraform(struct!.sshClientCertPass),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPassList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionAuthConfigSshPublicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionAuthConfigSshPublicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certType = this._certType;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._sshClientCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshClientCert = this._sshClientCert?.internalValue;
    }
    if (this._sshClientCertPass?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshClientCertPass = this._sshClientCertPass?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionAuthConfigSshPublicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certType = undefined;
      this._username = undefined;
      this._sshClientCert.internalValue = undefined;
      this._sshClientCertPass.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certType = value.certType;
      this._username = value.username;
      this._sshClientCert.internalValue = value.sshClientCert;
      this._sshClientCertPass.internalValue = value.sshClientCertPass;
    }
  }

  // cert_type - computed: false, optional: true, required: false
  private _certType?: string; 
  public get certType() {
    return this.getStringAttribute('cert_type');
  }
  public set certType(value: string) {
    this._certType = value;
  }
  public resetCertType() {
    this._certType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certTypeInput() {
    return this._certType;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // ssh_client_cert - computed: false, optional: true, required: false
  private _sshClientCert = new IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertOutputReference(this, "ssh_client_cert");
  public get sshClientCert() {
    return this._sshClientCert;
  }
  public putSshClientCert(value: IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCert) {
    this._sshClientCert.internalValue = value;
  }
  public resetSshClientCert() {
    this._sshClientCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshClientCertInput() {
    return this._sshClientCert.internalValue;
  }

  // ssh_client_cert_pass - computed: false, optional: true, required: false
  private _sshClientCertPass = new IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPassOutputReference(this, "ssh_client_cert_pass");
  public get sshClientCertPass() {
    return this._sshClientCertPass;
  }
  public putSshClientCertPass(value: IntegrationConnectorsConnectionAuthConfigSshPublicKeySshClientCertPass) {
    this._sshClientCertPass.internalValue = value;
  }
  public resetSshClientCertPass() {
    this._sshClientCertPass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshClientCertPassInput() {
    return this._sshClientCertPass.internalValue;
  }
}
export interface IntegrationConnectorsConnectionAuthConfigUserPasswordPassword {
  /**
  * The resource name of the secret version in the format,
  * format as: projects/* /secrets/* /versions/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#secret_version IntegrationConnectorsConnection#secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly secretVersion: string;
}

export function integrationConnectorsConnectionAuthConfigUserPasswordPasswordToTerraform(struct?: IntegrationConnectorsConnectionAuthConfigUserPasswordPasswordOutputReference | IntegrationConnectorsConnectionAuthConfigUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function integrationConnectorsConnectionAuthConfigUserPasswordPasswordToHclTerraform(struct?: IntegrationConnectorsConnectionAuthConfigUserPasswordPasswordOutputReference | IntegrationConnectorsConnectionAuthConfigUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionAuthConfigUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionAuthConfigUserPasswordPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionAuthConfigUserPasswordPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface IntegrationConnectorsConnectionAuthConfigUserPassword {
  /**
  * Username for Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#username IntegrationConnectorsConnection#username}
  */
  readonly username: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#password IntegrationConnectorsConnection#password}
  */
  readonly password?: IntegrationConnectorsConnectionAuthConfigUserPasswordPassword;
}

export function integrationConnectorsConnectionAuthConfigUserPasswordToTerraform(struct?: IntegrationConnectorsConnectionAuthConfigUserPasswordOutputReference | IntegrationConnectorsConnectionAuthConfigUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
    password: integrationConnectorsConnectionAuthConfigUserPasswordPasswordToTerraform(struct!.password),
  }
}


export function integrationConnectorsConnectionAuthConfigUserPasswordToHclTerraform(struct?: IntegrationConnectorsConnectionAuthConfigUserPasswordOutputReference | IntegrationConnectorsConnectionAuthConfigUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: integrationConnectorsConnectionAuthConfigUserPasswordPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionAuthConfigUserPasswordPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionAuthConfigUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionAuthConfigUserPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionAuthConfigUserPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._username = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._username = value.username;
      this._password.internalValue = value.password;
    }
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // password - computed: false, optional: true, required: false
  private _password = new IntegrationConnectorsConnectionAuthConfigUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: IntegrationConnectorsConnectionAuthConfigUserPasswordPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface IntegrationConnectorsConnectionAuthConfig {
  /**
  * The type of authentication configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#auth_key IntegrationConnectorsConnection#auth_key}
  */
  readonly authKey?: string;
  /**
  * authType of the Connection Possible values: ["USER_PASSWORD", "OAUTH2_JWT_BEARER", "OAUTH2_CLIENT_CREDENTIALS", "SSH_PUBLIC_KEY", "OAUTH2_AUTH_CODE_FLOW"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#auth_type IntegrationConnectorsConnection#auth_type}
  */
  readonly authType: string;
  /**
  * additional_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#additional_variable IntegrationConnectorsConnection#additional_variable}
  */
  readonly additionalVariable?: IntegrationConnectorsConnectionAuthConfigAdditionalVariable[] | cdktf.IResolvable;
  /**
  * oauth2_auth_code_flow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#oauth2_auth_code_flow IntegrationConnectorsConnection#oauth2_auth_code_flow}
  */
  readonly oauth2AuthCodeFlow?: IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlow;
  /**
  * oauth2_client_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#oauth2_client_credentials IntegrationConnectorsConnection#oauth2_client_credentials}
  */
  readonly oauth2ClientCredentials?: IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentials;
  /**
  * oauth2_jwt_bearer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#oauth2_jwt_bearer IntegrationConnectorsConnection#oauth2_jwt_bearer}
  */
  readonly oauth2JwtBearer?: IntegrationConnectorsConnectionAuthConfigOauth2JwtBearer;
  /**
  * ssh_public_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#ssh_public_key IntegrationConnectorsConnection#ssh_public_key}
  */
  readonly sshPublicKey?: IntegrationConnectorsConnectionAuthConfigSshPublicKey;
  /**
  * user_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#user_password IntegrationConnectorsConnection#user_password}
  */
  readonly userPassword?: IntegrationConnectorsConnectionAuthConfigUserPassword;
}

export function integrationConnectorsConnectionAuthConfigToTerraform(struct?: IntegrationConnectorsConnectionAuthConfigOutputReference | IntegrationConnectorsConnectionAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_key: cdktf.stringToTerraform(struct!.authKey),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    additional_variable: cdktf.listMapper(integrationConnectorsConnectionAuthConfigAdditionalVariableToTerraform, true)(struct!.additionalVariable),
    oauth2_auth_code_flow: integrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowToTerraform(struct!.oauth2AuthCodeFlow),
    oauth2_client_credentials: integrationConnectorsConnectionAuthConfigOauth2ClientCredentialsToTerraform(struct!.oauth2ClientCredentials),
    oauth2_jwt_bearer: integrationConnectorsConnectionAuthConfigOauth2JwtBearerToTerraform(struct!.oauth2JwtBearer),
    ssh_public_key: integrationConnectorsConnectionAuthConfigSshPublicKeyToTerraform(struct!.sshPublicKey),
    user_password: integrationConnectorsConnectionAuthConfigUserPasswordToTerraform(struct!.userPassword),
  }
}


export function integrationConnectorsConnectionAuthConfigToHclTerraform(struct?: IntegrationConnectorsConnectionAuthConfigOutputReference | IntegrationConnectorsConnectionAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_key: {
      value: cdktf.stringToHclTerraform(struct!.authKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_variable: {
      value: cdktf.listMapperHcl(integrationConnectorsConnectionAuthConfigAdditionalVariableToHclTerraform, true)(struct!.additionalVariable),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionAuthConfigAdditionalVariableList",
    },
    oauth2_auth_code_flow: {
      value: integrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowToHclTerraform(struct!.oauth2AuthCodeFlow),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowList",
    },
    oauth2_client_credentials: {
      value: integrationConnectorsConnectionAuthConfigOauth2ClientCredentialsToHclTerraform(struct!.oauth2ClientCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsList",
    },
    oauth2_jwt_bearer: {
      value: integrationConnectorsConnectionAuthConfigOauth2JwtBearerToHclTerraform(struct!.oauth2JwtBearer),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerList",
    },
    ssh_public_key: {
      value: integrationConnectorsConnectionAuthConfigSshPublicKeyToHclTerraform(struct!.sshPublicKey),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionAuthConfigSshPublicKeyList",
    },
    user_password: {
      value: integrationConnectorsConnectionAuthConfigUserPasswordToHclTerraform(struct!.userPassword),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionAuthConfigUserPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKey = this._authKey;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._additionalVariable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalVariable = this._additionalVariable?.internalValue;
    }
    if (this._oauth2AuthCodeFlow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2AuthCodeFlow = this._oauth2AuthCodeFlow?.internalValue;
    }
    if (this._oauth2ClientCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2ClientCredentials = this._oauth2ClientCredentials?.internalValue;
    }
    if (this._oauth2JwtBearer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2JwtBearer = this._oauth2JwtBearer?.internalValue;
    }
    if (this._sshPublicKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKey = this._sshPublicKey?.internalValue;
    }
    if (this._userPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPassword = this._userPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authKey = undefined;
      this._authType = undefined;
      this._additionalVariable.internalValue = undefined;
      this._oauth2AuthCodeFlow.internalValue = undefined;
      this._oauth2ClientCredentials.internalValue = undefined;
      this._oauth2JwtBearer.internalValue = undefined;
      this._sshPublicKey.internalValue = undefined;
      this._userPassword.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authKey = value.authKey;
      this._authType = value.authType;
      this._additionalVariable.internalValue = value.additionalVariable;
      this._oauth2AuthCodeFlow.internalValue = value.oauth2AuthCodeFlow;
      this._oauth2ClientCredentials.internalValue = value.oauth2ClientCredentials;
      this._oauth2JwtBearer.internalValue = value.oauth2JwtBearer;
      this._sshPublicKey.internalValue = value.sshPublicKey;
      this._userPassword.internalValue = value.userPassword;
    }
  }

  // auth_key - computed: false, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // additional_variable - computed: false, optional: true, required: false
  private _additionalVariable = new IntegrationConnectorsConnectionAuthConfigAdditionalVariableList(this, "additional_variable", false);
  public get additionalVariable() {
    return this._additionalVariable;
  }
  public putAdditionalVariable(value: IntegrationConnectorsConnectionAuthConfigAdditionalVariable[] | cdktf.IResolvable) {
    this._additionalVariable.internalValue = value;
  }
  public resetAdditionalVariable() {
    this._additionalVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVariableInput() {
    return this._additionalVariable.internalValue;
  }

  // oauth2_auth_code_flow - computed: false, optional: true, required: false
  private _oauth2AuthCodeFlow = new IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlowOutputReference(this, "oauth2_auth_code_flow");
  public get oauth2AuthCodeFlow() {
    return this._oauth2AuthCodeFlow;
  }
  public putOauth2AuthCodeFlow(value: IntegrationConnectorsConnectionAuthConfigOauth2AuthCodeFlow) {
    this._oauth2AuthCodeFlow.internalValue = value;
  }
  public resetOauth2AuthCodeFlow() {
    this._oauth2AuthCodeFlow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2AuthCodeFlowInput() {
    return this._oauth2AuthCodeFlow.internalValue;
  }

  // oauth2_client_credentials - computed: false, optional: true, required: false
  private _oauth2ClientCredentials = new IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentialsOutputReference(this, "oauth2_client_credentials");
  public get oauth2ClientCredentials() {
    return this._oauth2ClientCredentials;
  }
  public putOauth2ClientCredentials(value: IntegrationConnectorsConnectionAuthConfigOauth2ClientCredentials) {
    this._oauth2ClientCredentials.internalValue = value;
  }
  public resetOauth2ClientCredentials() {
    this._oauth2ClientCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientCredentialsInput() {
    return this._oauth2ClientCredentials.internalValue;
  }

  // oauth2_jwt_bearer - computed: false, optional: true, required: false
  private _oauth2JwtBearer = new IntegrationConnectorsConnectionAuthConfigOauth2JwtBearerOutputReference(this, "oauth2_jwt_bearer");
  public get oauth2JwtBearer() {
    return this._oauth2JwtBearer;
  }
  public putOauth2JwtBearer(value: IntegrationConnectorsConnectionAuthConfigOauth2JwtBearer) {
    this._oauth2JwtBearer.internalValue = value;
  }
  public resetOauth2JwtBearer() {
    this._oauth2JwtBearer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2JwtBearerInput() {
    return this._oauth2JwtBearer.internalValue;
  }

  // ssh_public_key - computed: false, optional: true, required: false
  private _sshPublicKey = new IntegrationConnectorsConnectionAuthConfigSshPublicKeyOutputReference(this, "ssh_public_key");
  public get sshPublicKey() {
    return this._sshPublicKey;
  }
  public putSshPublicKey(value: IntegrationConnectorsConnectionAuthConfigSshPublicKey) {
    this._sshPublicKey.internalValue = value;
  }
  public resetSshPublicKey() {
    this._sshPublicKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey.internalValue;
  }

  // user_password - computed: false, optional: true, required: false
  private _userPassword = new IntegrationConnectorsConnectionAuthConfigUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
  public putUserPassword(value: IntegrationConnectorsConnectionAuthConfigUserPassword) {
    this._userPassword.internalValue = value;
  }
  public resetUserPassword() {
    this._userPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword.internalValue;
  }
}
export interface IntegrationConnectorsConnectionConfigVariableEncryptionKeyValue {
  /**
  * The [KMS key name] with which the content of the Operation is encrypted. The expected
  * format: projects/* /locations/* /keyRings/* /cryptoKeys/*.
  * Will be empty string if google managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#kms_key_name IntegrationConnectorsConnection#kms_key_name}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly kmsKeyName?: string;
  /**
  * Type of Encription Key Possible values: ["GOOGLE_MANAGED", "CUSTOMER_MANAGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#type IntegrationConnectorsConnection#type}
  */
  readonly type: string;
}

export function integrationConnectorsConnectionConfigVariableEncryptionKeyValueToTerraform(struct?: IntegrationConnectorsConnectionConfigVariableEncryptionKeyValueOutputReference | IntegrationConnectorsConnectionConfigVariableEncryptionKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function integrationConnectorsConnectionConfigVariableEncryptionKeyValueToHclTerraform(struct?: IntegrationConnectorsConnectionConfigVariableEncryptionKeyValueOutputReference | IntegrationConnectorsConnectionConfigVariableEncryptionKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionConfigVariableEncryptionKeyValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionConfigVariableEncryptionKeyValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionConfigVariableEncryptionKeyValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
      this._type = value.type;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface IntegrationConnectorsConnectionConfigVariableSecretValue {
  /**
  * Secret version of Secret Value for Config variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#secret_version IntegrationConnectorsConnection#secret_version}
  */
  readonly secretVersion: string;
}

export function integrationConnectorsConnectionConfigVariableSecretValueToTerraform(struct?: IntegrationConnectorsConnectionConfigVariableSecretValueOutputReference | IntegrationConnectorsConnectionConfigVariableSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function integrationConnectorsConnectionConfigVariableSecretValueToHclTerraform(struct?: IntegrationConnectorsConnectionConfigVariableSecretValueOutputReference | IntegrationConnectorsConnectionConfigVariableSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionConfigVariableSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionConfigVariableSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionConfigVariableSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface IntegrationConnectorsConnectionConfigVariable {
  /**
  * Boolean Value of configVariable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#boolean_value IntegrationConnectorsConnection#boolean_value}
  */
  readonly booleanValue?: boolean | cdktf.IResolvable;
  /**
  * Integer Value of configVariable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#integer_value IntegrationConnectorsConnection#integer_value}
  */
  readonly integerValue?: number;
  /**
  * Key for the configVariable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#key IntegrationConnectorsConnection#key}
  */
  readonly key: string;
  /**
  * String Value of configVariabley
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#string_value IntegrationConnectorsConnection#string_value}
  */
  readonly stringValue?: string;
  /**
  * encryption_key_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#encryption_key_value IntegrationConnectorsConnection#encryption_key_value}
  */
  readonly encryptionKeyValue?: IntegrationConnectorsConnectionConfigVariableEncryptionKeyValue;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#secret_value IntegrationConnectorsConnection#secret_value}
  */
  readonly secretValue?: IntegrationConnectorsConnectionConfigVariableSecretValue;
}

export function integrationConnectorsConnectionConfigVariableToTerraform(struct?: IntegrationConnectorsConnectionConfigVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_value: cdktf.booleanToTerraform(struct!.booleanValue),
    integer_value: cdktf.numberToTerraform(struct!.integerValue),
    key: cdktf.stringToTerraform(struct!.key),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    encryption_key_value: integrationConnectorsConnectionConfigVariableEncryptionKeyValueToTerraform(struct!.encryptionKeyValue),
    secret_value: integrationConnectorsConnectionConfigVariableSecretValueToTerraform(struct!.secretValue),
  }
}


export function integrationConnectorsConnectionConfigVariableToHclTerraform(struct?: IntegrationConnectorsConnectionConfigVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_value: {
      value: cdktf.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    integer_value: {
      value: cdktf.numberToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key_value: {
      value: integrationConnectorsConnectionConfigVariableEncryptionKeyValueToHclTerraform(struct!.encryptionKeyValue),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionConfigVariableEncryptionKeyValueList",
    },
    secret_value: {
      value: integrationConnectorsConnectionConfigVariableSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionConfigVariableSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionConfigVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationConnectorsConnectionConfigVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._encryptionKeyValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyValue = this._encryptionKeyValue?.internalValue;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionConfigVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanValue = undefined;
      this._integerValue = undefined;
      this._key = undefined;
      this._stringValue = undefined;
      this._encryptionKeyValue.internalValue = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanValue = value.booleanValue;
      this._integerValue = value.integerValue;
      this._key = value.key;
      this._stringValue = value.stringValue;
      this._encryptionKeyValue.internalValue = value.encryptionKeyValue;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // boolean_value - computed: false, optional: true, required: false
  private _booleanValue?: boolean | cdktf.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktf.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: number; 
  public get integerValue() {
    return this.getNumberAttribute('integer_value');
  }
  public set integerValue(value: number) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
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

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // encryption_key_value - computed: false, optional: true, required: false
  private _encryptionKeyValue = new IntegrationConnectorsConnectionConfigVariableEncryptionKeyValueOutputReference(this, "encryption_key_value");
  public get encryptionKeyValue() {
    return this._encryptionKeyValue;
  }
  public putEncryptionKeyValue(value: IntegrationConnectorsConnectionConfigVariableEncryptionKeyValue) {
    this._encryptionKeyValue.internalValue = value;
  }
  public resetEncryptionKeyValue() {
    this._encryptionKeyValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyValueInput() {
    return this._encryptionKeyValue.internalValue;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new IntegrationConnectorsConnectionConfigVariableSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: IntegrationConnectorsConnectionConfigVariableSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class IntegrationConnectorsConnectionConfigVariableList extends cdktf.ComplexList {
  public internalValue? : IntegrationConnectorsConnectionConfigVariable[] | cdktf.IResolvable

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
  public get(index: number): IntegrationConnectorsConnectionConfigVariableOutputReference {
    return new IntegrationConnectorsConnectionConfigVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationConnectorsConnectionDestinationConfigDestination {
  /**
  * For publicly routable host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#host IntegrationConnectorsConnection#host}
  */
  readonly host?: string;
  /**
  * The port is the target port number that is accepted by the destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#port IntegrationConnectorsConnection#port}
  */
  readonly port?: number;
  /**
  * PSC service attachments. Format: projects/* /regions/* /serviceAttachments/*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#service_attachment IntegrationConnectorsConnection#service_attachment}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly serviceAttachment?: string;
}

export function integrationConnectorsConnectionDestinationConfigDestinationToTerraform(struct?: IntegrationConnectorsConnectionDestinationConfigDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    service_attachment: cdktf.stringToTerraform(struct!.serviceAttachment),
  }
}


export function integrationConnectorsConnectionDestinationConfigDestinationToHclTerraform(struct?: IntegrationConnectorsConnectionDestinationConfigDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_attachment: {
      value: cdktf.stringToHclTerraform(struct!.serviceAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionDestinationConfigDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationConnectorsConnectionDestinationConfigDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serviceAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAttachment = this._serviceAttachment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionDestinationConfigDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._serviceAttachment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
      this._serviceAttachment = value.serviceAttachment;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service_attachment - computed: false, optional: true, required: false
  private _serviceAttachment?: string; 
  public get serviceAttachment() {
    return this.getStringAttribute('service_attachment');
  }
  public set serviceAttachment(value: string) {
    this._serviceAttachment = value;
  }
  public resetServiceAttachment() {
    this._serviceAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAttachmentInput() {
    return this._serviceAttachment;
  }
}

export class IntegrationConnectorsConnectionDestinationConfigDestinationList extends cdktf.ComplexList {
  public internalValue? : IntegrationConnectorsConnectionDestinationConfigDestination[] | cdktf.IResolvable

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
  public get(index: number): IntegrationConnectorsConnectionDestinationConfigDestinationOutputReference {
    return new IntegrationConnectorsConnectionDestinationConfigDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationConnectorsConnectionDestinationConfig {
  /**
  * The key is the destination identifier that is supported by the Connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#key IntegrationConnectorsConnection#key}
  */
  readonly key: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#destination IntegrationConnectorsConnection#destination}
  */
  readonly destination?: IntegrationConnectorsConnectionDestinationConfigDestination[] | cdktf.IResolvable;
}

export function integrationConnectorsConnectionDestinationConfigToTerraform(struct?: IntegrationConnectorsConnectionDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    destination: cdktf.listMapper(integrationConnectorsConnectionDestinationConfigDestinationToTerraform, true)(struct!.destination),
  }
}


export function integrationConnectorsConnectionDestinationConfigToHclTerraform(struct?: IntegrationConnectorsConnectionDestinationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.listMapperHcl(integrationConnectorsConnectionDestinationConfigDestinationToHclTerraform, true)(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionDestinationConfigDestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionDestinationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationConnectorsConnectionDestinationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionDestinationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._destination.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._destination.internalValue = value.destination;
    }
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

  // destination - computed: false, optional: true, required: false
  private _destination = new IntegrationConnectorsConnectionDestinationConfigDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: IntegrationConnectorsConnectionDestinationConfigDestination[] | cdktf.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }
}

export class IntegrationConnectorsConnectionDestinationConfigList extends cdktf.ComplexList {
  public internalValue? : IntegrationConnectorsConnectionDestinationConfig[] | cdktf.IResolvable

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
  public get(index: number): IntegrationConnectorsConnectionDestinationConfigOutputReference {
    return new IntegrationConnectorsConnectionDestinationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValue {
  /**
  * The [KMS key name] with which the content of the Operation is encrypted. The expected
  * format: projects/* /locations/* /keyRings/* /cryptoKeys/*.
  * Will be empty string if google managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#kms_key_name IntegrationConnectorsConnection#kms_key_name}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly kmsKeyName?: string;
  /**
  * Type of Encryption Key Possible values: ["GOOGLE_MANAGED", "CUSTOMER_MANAGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#type IntegrationConnectorsConnection#type}
  */
  readonly type?: string;
}

export function integrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValueToTerraform(struct?: IntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValueOutputReference | IntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function integrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValueToHclTerraform(struct?: IntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValueOutputReference | IntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
      this._type = value.type;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface IntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValue {
  /**
  * Secret version of Secret Value for Config variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#secret_version IntegrationConnectorsConnection#secret_version}
  */
  readonly secretVersion: string;
}

export function integrationConnectorsConnectionEventingConfigAdditionalVariableSecretValueToTerraform(struct?: IntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValueOutputReference | IntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function integrationConnectorsConnectionEventingConfigAdditionalVariableSecretValueToHclTerraform(struct?: IntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValueOutputReference | IntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface IntegrationConnectorsConnectionEventingConfigAdditionalVariable {
  /**
  * Boolean Value of configVariable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#boolean_value IntegrationConnectorsConnection#boolean_value}
  */
  readonly booleanValue?: boolean | cdktf.IResolvable;
  /**
  * Integer Value of configVariable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#integer_value IntegrationConnectorsConnection#integer_value}
  */
  readonly integerValue?: number;
  /**
  * Key for the configVariable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#key IntegrationConnectorsConnection#key}
  */
  readonly key: string;
  /**
  * String Value of configVariabley.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#string_value IntegrationConnectorsConnection#string_value}
  */
  readonly stringValue?: string;
  /**
  * encryption_key_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#encryption_key_value IntegrationConnectorsConnection#encryption_key_value}
  */
  readonly encryptionKeyValue?: IntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValue;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#secret_value IntegrationConnectorsConnection#secret_value}
  */
  readonly secretValue?: IntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValue;
}

export function integrationConnectorsConnectionEventingConfigAdditionalVariableToTerraform(struct?: IntegrationConnectorsConnectionEventingConfigAdditionalVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_value: cdktf.booleanToTerraform(struct!.booleanValue),
    integer_value: cdktf.numberToTerraform(struct!.integerValue),
    key: cdktf.stringToTerraform(struct!.key),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    encryption_key_value: integrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValueToTerraform(struct!.encryptionKeyValue),
    secret_value: integrationConnectorsConnectionEventingConfigAdditionalVariableSecretValueToTerraform(struct!.secretValue),
  }
}


export function integrationConnectorsConnectionEventingConfigAdditionalVariableToHclTerraform(struct?: IntegrationConnectorsConnectionEventingConfigAdditionalVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_value: {
      value: cdktf.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    integer_value: {
      value: cdktf.numberToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key_value: {
      value: integrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValueToHclTerraform(struct!.encryptionKeyValue),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValueList",
    },
    secret_value: {
      value: integrationConnectorsConnectionEventingConfigAdditionalVariableSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionEventingConfigAdditionalVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationConnectorsConnectionEventingConfigAdditionalVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._encryptionKeyValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyValue = this._encryptionKeyValue?.internalValue;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionEventingConfigAdditionalVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanValue = undefined;
      this._integerValue = undefined;
      this._key = undefined;
      this._stringValue = undefined;
      this._encryptionKeyValue.internalValue = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanValue = value.booleanValue;
      this._integerValue = value.integerValue;
      this._key = value.key;
      this._stringValue = value.stringValue;
      this._encryptionKeyValue.internalValue = value.encryptionKeyValue;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // boolean_value - computed: false, optional: true, required: false
  private _booleanValue?: boolean | cdktf.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktf.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: number; 
  public get integerValue() {
    return this.getNumberAttribute('integer_value');
  }
  public set integerValue(value: number) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
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

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // encryption_key_value - computed: false, optional: true, required: false
  private _encryptionKeyValue = new IntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValueOutputReference(this, "encryption_key_value");
  public get encryptionKeyValue() {
    return this._encryptionKeyValue;
  }
  public putEncryptionKeyValue(value: IntegrationConnectorsConnectionEventingConfigAdditionalVariableEncryptionKeyValue) {
    this._encryptionKeyValue.internalValue = value;
  }
  public resetEncryptionKeyValue() {
    this._encryptionKeyValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyValueInput() {
    return this._encryptionKeyValue.internalValue;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new IntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: IntegrationConnectorsConnectionEventingConfigAdditionalVariableSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class IntegrationConnectorsConnectionEventingConfigAdditionalVariableList extends cdktf.ComplexList {
  public internalValue? : IntegrationConnectorsConnectionEventingConfigAdditionalVariable[] | cdktf.IResolvable

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
  public get(index: number): IntegrationConnectorsConnectionEventingConfigAdditionalVariableOutputReference {
    return new IntegrationConnectorsConnectionEventingConfigAdditionalVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue {
  /**
  * The [KMS key name] with which the content of the Operation is encrypted. The expected
  * format: projects/* /locations/* /keyRings/* /cryptoKeys/*.
  * Will be empty string if google managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#kms_key_name IntegrationConnectorsConnection#kms_key_name}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly kmsKeyName?: string;
  /**
  * Type of Encription Key Possible values: ["GOOGLE_MANAGED", "CUSTOMER_MANAGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#type IntegrationConnectorsConnection#type}
  */
  readonly type?: string;
}

export function integrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValueToTerraform(struct?: IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValueOutputReference | IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function integrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValueToHclTerraform(struct?: IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValueOutputReference | IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
      this._type = value.type;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValue {
  /**
  * Secret version of Secret Value for Config variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#secret_version IntegrationConnectorsConnection#secret_version}
  */
  readonly secretVersion: string;
}

export function integrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValueToTerraform(struct?: IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValueOutputReference | IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function integrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValueToHclTerraform(struct?: IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValueOutputReference | IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariable {
  /**
  * Boolean Value of configVariable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#boolean_value IntegrationConnectorsConnection#boolean_value}
  */
  readonly booleanValue?: boolean | cdktf.IResolvable;
  /**
  * Integer Value of configVariable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#integer_value IntegrationConnectorsConnection#integer_value}
  */
  readonly integerValue?: number;
  /**
  * Key for the configVariable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#key IntegrationConnectorsConnection#key}
  */
  readonly key: string;
  /**
  * String Value of configVariabley.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#string_value IntegrationConnectorsConnection#string_value}
  */
  readonly stringValue?: string;
  /**
  * encryption_key_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#encryption_key_value IntegrationConnectorsConnection#encryption_key_value}
  */
  readonly encryptionKeyValue?: IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#secret_value IntegrationConnectorsConnection#secret_value}
  */
  readonly secretValue?: IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValue;
}

export function integrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableToTerraform(struct?: IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_value: cdktf.booleanToTerraform(struct!.booleanValue),
    integer_value: cdktf.numberToTerraform(struct!.integerValue),
    key: cdktf.stringToTerraform(struct!.key),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    encryption_key_value: integrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValueToTerraform(struct!.encryptionKeyValue),
    secret_value: integrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValueToTerraform(struct!.secretValue),
  }
}


export function integrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableToHclTerraform(struct?: IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_value: {
      value: cdktf.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    integer_value: {
      value: cdktf.numberToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key_value: {
      value: integrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValueToHclTerraform(struct!.encryptionKeyValue),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValueList",
    },
    secret_value: {
      value: integrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._encryptionKeyValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyValue = this._encryptionKeyValue?.internalValue;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanValue = undefined;
      this._integerValue = undefined;
      this._key = undefined;
      this._stringValue = undefined;
      this._encryptionKeyValue.internalValue = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanValue = value.booleanValue;
      this._integerValue = value.integerValue;
      this._key = value.key;
      this._stringValue = value.stringValue;
      this._encryptionKeyValue.internalValue = value.encryptionKeyValue;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // boolean_value - computed: false, optional: true, required: false
  private _booleanValue?: boolean | cdktf.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktf.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: number; 
  public get integerValue() {
    return this.getNumberAttribute('integer_value');
  }
  public set integerValue(value: number) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
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

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // encryption_key_value - computed: false, optional: true, required: false
  private _encryptionKeyValue = new IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValueOutputReference(this, "encryption_key_value");
  public get encryptionKeyValue() {
    return this._encryptionKeyValue;
  }
  public putEncryptionKeyValue(value: IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableEncryptionKeyValue) {
    this._encryptionKeyValue.internalValue = value;
  }
  public resetEncryptionKeyValue() {
    this._encryptionKeyValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyValueInput() {
    return this._encryptionKeyValue.internalValue;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableList extends cdktf.ComplexList {
  public internalValue? : IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariable[] | cdktf.IResolvable

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
  public get(index: number): IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableOutputReference {
    return new IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPassword {
  /**
  * The resource name of the secret version in the format,
  * format as: projects/* /secrets/* /versions/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#secret_version IntegrationConnectorsConnection#secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly secretVersion: string;
}

export function integrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPasswordToTerraform(struct?: IntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPasswordOutputReference | IntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function integrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPasswordToHclTerraform(struct?: IntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPasswordOutputReference | IntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface IntegrationConnectorsConnectionEventingConfigAuthConfigUserPassword {
  /**
  * Username for Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#username IntegrationConnectorsConnection#username}
  */
  readonly username?: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#password IntegrationConnectorsConnection#password}
  */
  readonly password?: IntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPassword;
}

export function integrationConnectorsConnectionEventingConfigAuthConfigUserPasswordToTerraform(struct?: IntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordOutputReference | IntegrationConnectorsConnectionEventingConfigAuthConfigUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
    password: integrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPasswordToTerraform(struct!.password),
  }
}


export function integrationConnectorsConnectionEventingConfigAuthConfigUserPasswordToHclTerraform(struct?: IntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordOutputReference | IntegrationConnectorsConnectionEventingConfigAuthConfigUserPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: integrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionEventingConfigAuthConfigUserPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionEventingConfigAuthConfigUserPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._username = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._username = value.username;
      this._password.internalValue = value.password;
    }
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // password - computed: false, optional: true, required: false
  private _password = new IntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: IntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface IntegrationConnectorsConnectionEventingConfigAuthConfig {
  /**
  * The type of authentication configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#auth_key IntegrationConnectorsConnection#auth_key}
  */
  readonly authKey?: string;
  /**
  * authType of the Connection Possible values: ["USER_PASSWORD"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#auth_type IntegrationConnectorsConnection#auth_type}
  */
  readonly authType: string;
  /**
  * additional_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#additional_variable IntegrationConnectorsConnection#additional_variable}
  */
  readonly additionalVariable?: IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariable[] | cdktf.IResolvable;
  /**
  * user_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#user_password IntegrationConnectorsConnection#user_password}
  */
  readonly userPassword: IntegrationConnectorsConnectionEventingConfigAuthConfigUserPassword;
}

export function integrationConnectorsConnectionEventingConfigAuthConfigToTerraform(struct?: IntegrationConnectorsConnectionEventingConfigAuthConfigOutputReference | IntegrationConnectorsConnectionEventingConfigAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_key: cdktf.stringToTerraform(struct!.authKey),
    auth_type: cdktf.stringToTerraform(struct!.authType),
    additional_variable: cdktf.listMapper(integrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableToTerraform, true)(struct!.additionalVariable),
    user_password: integrationConnectorsConnectionEventingConfigAuthConfigUserPasswordToTerraform(struct!.userPassword),
  }
}


export function integrationConnectorsConnectionEventingConfigAuthConfigToHclTerraform(struct?: IntegrationConnectorsConnectionEventingConfigAuthConfigOutputReference | IntegrationConnectorsConnectionEventingConfigAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_key: {
      value: cdktf.stringToHclTerraform(struct!.authKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_variable: {
      value: cdktf.listMapperHcl(integrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableToHclTerraform, true)(struct!.additionalVariable),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableList",
    },
    user_password: {
      value: integrationConnectorsConnectionEventingConfigAuthConfigUserPasswordToHclTerraform(struct!.userPassword),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionEventingConfigAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionEventingConfigAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authKey = this._authKey;
    }
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._additionalVariable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalVariable = this._additionalVariable?.internalValue;
    }
    if (this._userPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPassword = this._userPassword?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionEventingConfigAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authKey = undefined;
      this._authType = undefined;
      this._additionalVariable.internalValue = undefined;
      this._userPassword.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authKey = value.authKey;
      this._authType = value.authType;
      this._additionalVariable.internalValue = value.additionalVariable;
      this._userPassword.internalValue = value.userPassword;
    }
  }

  // auth_key - computed: false, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // additional_variable - computed: false, optional: true, required: false
  private _additionalVariable = new IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariableList(this, "additional_variable", false);
  public get additionalVariable() {
    return this._additionalVariable;
  }
  public putAdditionalVariable(value: IntegrationConnectorsConnectionEventingConfigAuthConfigAdditionalVariable[] | cdktf.IResolvable) {
    this._additionalVariable.internalValue = value;
  }
  public resetAdditionalVariable() {
    this._additionalVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVariableInput() {
    return this._additionalVariable.internalValue;
  }

  // user_password - computed: false, optional: false, required: true
  private _userPassword = new IntegrationConnectorsConnectionEventingConfigAuthConfigUserPasswordOutputReference(this, "user_password");
  public get userPassword() {
    return this._userPassword;
  }
  public putUserPassword(value: IntegrationConnectorsConnectionEventingConfigAuthConfigUserPassword) {
    this._userPassword.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordInput() {
    return this._userPassword.internalValue;
  }
}
export interface IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestination {
  /**
  * Host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#host IntegrationConnectorsConnection#host}
  */
  readonly host?: string;
  /**
  * port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#port IntegrationConnectorsConnection#port}
  */
  readonly port?: number;
  /**
  * Service Attachment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#service_attachment IntegrationConnectorsConnection#service_attachment}
  */
  readonly serviceAttachment?: string;
}

export function integrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestinationToTerraform(struct?: IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    service_attachment: cdktf.stringToTerraform(struct!.serviceAttachment),
  }
}


export function integrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestinationToHclTerraform(struct?: IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_attachment: {
      value: cdktf.stringToHclTerraform(struct!.serviceAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serviceAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAttachment = this._serviceAttachment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._serviceAttachment = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
      this._serviceAttachment = value.serviceAttachment;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service_attachment - computed: false, optional: true, required: false
  private _serviceAttachment?: string; 
  public get serviceAttachment() {
    return this.getStringAttribute('service_attachment');
  }
  public set serviceAttachment(value: string) {
    this._serviceAttachment = value;
  }
  public resetServiceAttachment() {
    this._serviceAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAttachmentInput() {
    return this._serviceAttachment;
  }
}

export class IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestinationList extends cdktf.ComplexList {
  public internalValue? : IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestination[] | cdktf.IResolvable

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
  public get(index: number): IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestinationOutputReference {
    return new IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfig {
  /**
  * Key for the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#key IntegrationConnectorsConnection#key}
  */
  readonly key?: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#destination IntegrationConnectorsConnection#destination}
  */
  readonly destination?: IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestination[] | cdktf.IResolvable;
}

export function integrationConnectorsConnectionEventingConfigRegistrationDestinationConfigToTerraform(struct?: IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigOutputReference | IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    destination: cdktf.listMapper(integrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestinationToTerraform, true)(struct!.destination),
  }
}


export function integrationConnectorsConnectionEventingConfigRegistrationDestinationConfigToHclTerraform(struct?: IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigOutputReference | IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.listMapperHcl(integrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestinationToHclTerraform, true)(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._destination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._destination.internalValue = value.destination;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigDestination[] | cdktf.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }
}
export interface IntegrationConnectorsConnectionEventingConfig {
  /**
  * Enrichment Enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#enrichment_enabled IntegrationConnectorsConnection#enrichment_enabled}
  */
  readonly enrichmentEnabled?: boolean | cdktf.IResolvable;
  /**
  * additional_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#additional_variable IntegrationConnectorsConnection#additional_variable}
  */
  readonly additionalVariable?: IntegrationConnectorsConnectionEventingConfigAdditionalVariable[] | cdktf.IResolvable;
  /**
  * auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#auth_config IntegrationConnectorsConnection#auth_config}
  */
  readonly authConfig?: IntegrationConnectorsConnectionEventingConfigAuthConfig;
  /**
  * registration_destination_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#registration_destination_config IntegrationConnectorsConnection#registration_destination_config}
  */
  readonly registrationDestinationConfig: IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfig;
}

export function integrationConnectorsConnectionEventingConfigToTerraform(struct?: IntegrationConnectorsConnectionEventingConfigOutputReference | IntegrationConnectorsConnectionEventingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enrichment_enabled: cdktf.booleanToTerraform(struct!.enrichmentEnabled),
    additional_variable: cdktf.listMapper(integrationConnectorsConnectionEventingConfigAdditionalVariableToTerraform, true)(struct!.additionalVariable),
    auth_config: integrationConnectorsConnectionEventingConfigAuthConfigToTerraform(struct!.authConfig),
    registration_destination_config: integrationConnectorsConnectionEventingConfigRegistrationDestinationConfigToTerraform(struct!.registrationDestinationConfig),
  }
}


export function integrationConnectorsConnectionEventingConfigToHclTerraform(struct?: IntegrationConnectorsConnectionEventingConfigOutputReference | IntegrationConnectorsConnectionEventingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enrichment_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enrichmentEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    additional_variable: {
      value: cdktf.listMapperHcl(integrationConnectorsConnectionEventingConfigAdditionalVariableToHclTerraform, true)(struct!.additionalVariable),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionEventingConfigAdditionalVariableList",
    },
    auth_config: {
      value: integrationConnectorsConnectionEventingConfigAuthConfigToHclTerraform(struct!.authConfig),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionEventingConfigAuthConfigList",
    },
    registration_destination_config: {
      value: integrationConnectorsConnectionEventingConfigRegistrationDestinationConfigToHclTerraform(struct!.registrationDestinationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionEventingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionEventingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enrichmentEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enrichmentEnabled = this._enrichmentEnabled;
    }
    if (this._additionalVariable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalVariable = this._additionalVariable?.internalValue;
    }
    if (this._authConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authConfig = this._authConfig?.internalValue;
    }
    if (this._registrationDestinationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationDestinationConfig = this._registrationDestinationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionEventingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enrichmentEnabled = undefined;
      this._additionalVariable.internalValue = undefined;
      this._authConfig.internalValue = undefined;
      this._registrationDestinationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enrichmentEnabled = value.enrichmentEnabled;
      this._additionalVariable.internalValue = value.additionalVariable;
      this._authConfig.internalValue = value.authConfig;
      this._registrationDestinationConfig.internalValue = value.registrationDestinationConfig;
    }
  }

  // enrichment_enabled - computed: false, optional: true, required: false
  private _enrichmentEnabled?: boolean | cdktf.IResolvable; 
  public get enrichmentEnabled() {
    return this.getBooleanAttribute('enrichment_enabled');
  }
  public set enrichmentEnabled(value: boolean | cdktf.IResolvable) {
    this._enrichmentEnabled = value;
  }
  public resetEnrichmentEnabled() {
    this._enrichmentEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrichmentEnabledInput() {
    return this._enrichmentEnabled;
  }

  // additional_variable - computed: false, optional: true, required: false
  private _additionalVariable = new IntegrationConnectorsConnectionEventingConfigAdditionalVariableList(this, "additional_variable", false);
  public get additionalVariable() {
    return this._additionalVariable;
  }
  public putAdditionalVariable(value: IntegrationConnectorsConnectionEventingConfigAdditionalVariable[] | cdktf.IResolvable) {
    this._additionalVariable.internalValue = value;
  }
  public resetAdditionalVariable() {
    this._additionalVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVariableInput() {
    return this._additionalVariable.internalValue;
  }

  // auth_config - computed: false, optional: true, required: false
  private _authConfig = new IntegrationConnectorsConnectionEventingConfigAuthConfigOutputReference(this, "auth_config");
  public get authConfig() {
    return this._authConfig;
  }
  public putAuthConfig(value: IntegrationConnectorsConnectionEventingConfigAuthConfig) {
    this._authConfig.internalValue = value;
  }
  public resetAuthConfig() {
    this._authConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigInput() {
    return this._authConfig.internalValue;
  }

  // registration_destination_config - computed: false, optional: false, required: true
  private _registrationDestinationConfig = new IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfigOutputReference(this, "registration_destination_config");
  public get registrationDestinationConfig() {
    return this._registrationDestinationConfig;
  }
  public putRegistrationDestinationConfig(value: IntegrationConnectorsConnectionEventingConfigRegistrationDestinationConfig) {
    this._registrationDestinationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationDestinationConfigInput() {
    return this._registrationDestinationConfig.internalValue;
  }
}
export interface IntegrationConnectorsConnectionLockConfig {
  /**
  * Indicates whether or not the connection is locked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#locked IntegrationConnectorsConnection#locked}
  */
  readonly locked: boolean | cdktf.IResolvable;
  /**
  * Describes why a connection is locked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#reason IntegrationConnectorsConnection#reason}
  */
  readonly reason?: string;
}

export function integrationConnectorsConnectionLockConfigToTerraform(struct?: IntegrationConnectorsConnectionLockConfigOutputReference | IntegrationConnectorsConnectionLockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locked: cdktf.booleanToTerraform(struct!.locked),
    reason: cdktf.stringToTerraform(struct!.reason),
  }
}


export function integrationConnectorsConnectionLockConfigToHclTerraform(struct?: IntegrationConnectorsConnectionLockConfigOutputReference | IntegrationConnectorsConnectionLockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locked: {
      value: cdktf.booleanToHclTerraform(struct!.locked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionLockConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionLockConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locked !== undefined) {
      hasAnyValues = true;
      internalValueResult.locked = this._locked;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionLockConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locked = undefined;
      this._reason = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locked = value.locked;
      this._reason = value.reason;
    }
  }

  // locked - computed: false, optional: false, required: true
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }
}
export interface IntegrationConnectorsConnectionLogConfig {
  /**
  * Enabled represents whether logging is enabled or not for a connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#enabled IntegrationConnectorsConnection#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function integrationConnectorsConnectionLogConfigToTerraform(struct?: IntegrationConnectorsConnectionLogConfigOutputReference | IntegrationConnectorsConnectionLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function integrationConnectorsConnectionLogConfigToHclTerraform(struct?: IntegrationConnectorsConnectionLogConfigOutputReference | IntegrationConnectorsConnectionLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface IntegrationConnectorsConnectionNodeConfig {
  /**
  * Minimum number of nodes in the runtime nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#max_node_count IntegrationConnectorsConnection#max_node_count}
  */
  readonly maxNodeCount?: number;
  /**
  * Minimum number of nodes in the runtime nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#min_node_count IntegrationConnectorsConnection#min_node_count}
  */
  readonly minNodeCount?: number;
}

export function integrationConnectorsConnectionNodeConfigToTerraform(struct?: IntegrationConnectorsConnectionNodeConfigOutputReference | IntegrationConnectorsConnectionNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
  }
}


export function integrationConnectorsConnectionNodeConfigToHclTerraform(struct?: IntegrationConnectorsConnectionNodeConfigOutputReference | IntegrationConnectorsConnectionNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_node_count: {
      value: cdktf.numberToHclTerraform(struct!.maxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_node_count: {
      value: cdktf.numberToHclTerraform(struct!.minNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxNodeCount = undefined;
      this._minNodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxNodeCount = value.maxNodeCount;
      this._minNodeCount = value.minNodeCount;
    }
  }

  // max_node_count - computed: true, optional: true, required: false
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  public resetMaxNodeCount() {
    this._maxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: true, optional: true, required: false
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  public resetMinNodeCount() {
    this._minNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
  }
}
export interface IntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValue {
  /**
  * The [KMS key name] with which the content of the Operation is encrypted. The expected
  * format: projects/* /locations/* /keyRings/* /cryptoKeys/*.
  * Will be empty string if google managed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#kms_key_name IntegrationConnectorsConnection#kms_key_name}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly kmsKeyName?: string;
  /**
  * Type of Encription Key Possible values: ["GOOGLE_MANAGED", "CUSTOMER_MANAGED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#type IntegrationConnectorsConnection#type}
  */
  readonly type?: string;
}

export function integrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValueToTerraform(struct?: IntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValueOutputReference | IntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function integrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValueToHclTerraform(struct?: IntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValueOutputReference | IntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
      this._type = value.type;
    }
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface IntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValue {
  /**
  * Secret version of Secret Value for Config variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#secret_version IntegrationConnectorsConnection#secret_version}
  */
  readonly secretVersion: string;
}

export function integrationConnectorsConnectionSslConfigAdditionalVariableSecretValueToTerraform(struct?: IntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValueOutputReference | IntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function integrationConnectorsConnectionSslConfigAdditionalVariableSecretValueToHclTerraform(struct?: IntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValueOutputReference | IntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface IntegrationConnectorsConnectionSslConfigAdditionalVariable {
  /**
  * Boolean Value of configVariable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#boolean_value IntegrationConnectorsConnection#boolean_value}
  */
  readonly booleanValue?: boolean | cdktf.IResolvable;
  /**
  * Integer Value of configVariable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#integer_value IntegrationConnectorsConnection#integer_value}
  */
  readonly integerValue?: number;
  /**
  * Key for the configVariable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#key IntegrationConnectorsConnection#key}
  */
  readonly key: string;
  /**
  * String Value of configVariabley.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#string_value IntegrationConnectorsConnection#string_value}
  */
  readonly stringValue?: string;
  /**
  * encryption_key_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#encryption_key_value IntegrationConnectorsConnection#encryption_key_value}
  */
  readonly encryptionKeyValue?: IntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValue;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#secret_value IntegrationConnectorsConnection#secret_value}
  */
  readonly secretValue?: IntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValue;
}

export function integrationConnectorsConnectionSslConfigAdditionalVariableToTerraform(struct?: IntegrationConnectorsConnectionSslConfigAdditionalVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boolean_value: cdktf.booleanToTerraform(struct!.booleanValue),
    integer_value: cdktf.numberToTerraform(struct!.integerValue),
    key: cdktf.stringToTerraform(struct!.key),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    encryption_key_value: integrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValueToTerraform(struct!.encryptionKeyValue),
    secret_value: integrationConnectorsConnectionSslConfigAdditionalVariableSecretValueToTerraform(struct!.secretValue),
  }
}


export function integrationConnectorsConnectionSslConfigAdditionalVariableToHclTerraform(struct?: IntegrationConnectorsConnectionSslConfigAdditionalVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boolean_value: {
      value: cdktf.booleanToHclTerraform(struct!.booleanValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    integer_value: {
      value: cdktf.numberToHclTerraform(struct!.integerValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key_value: {
      value: integrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValueToHclTerraform(struct!.encryptionKeyValue),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValueList",
    },
    secret_value: {
      value: integrationConnectorsConnectionSslConfigAdditionalVariableSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionSslConfigAdditionalVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationConnectorsConnectionSslConfigAdditionalVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._booleanValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.booleanValue = this._booleanValue;
    }
    if (this._integerValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerValue = this._integerValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._encryptionKeyValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyValue = this._encryptionKeyValue?.internalValue;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionSslConfigAdditionalVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._booleanValue = undefined;
      this._integerValue = undefined;
      this._key = undefined;
      this._stringValue = undefined;
      this._encryptionKeyValue.internalValue = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._booleanValue = value.booleanValue;
      this._integerValue = value.integerValue;
      this._key = value.key;
      this._stringValue = value.stringValue;
      this._encryptionKeyValue.internalValue = value.encryptionKeyValue;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // boolean_value - computed: false, optional: true, required: false
  private _booleanValue?: boolean | cdktf.IResolvable; 
  public get booleanValue() {
    return this.getBooleanAttribute('boolean_value');
  }
  public set booleanValue(value: boolean | cdktf.IResolvable) {
    this._booleanValue = value;
  }
  public resetBooleanValue() {
    this._booleanValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanValueInput() {
    return this._booleanValue;
  }

  // integer_value - computed: false, optional: true, required: false
  private _integerValue?: number; 
  public get integerValue() {
    return this.getNumberAttribute('integer_value');
  }
  public set integerValue(value: number) {
    this._integerValue = value;
  }
  public resetIntegerValue() {
    this._integerValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerValueInput() {
    return this._integerValue;
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

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // encryption_key_value - computed: false, optional: true, required: false
  private _encryptionKeyValue = new IntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValueOutputReference(this, "encryption_key_value");
  public get encryptionKeyValue() {
    return this._encryptionKeyValue;
  }
  public putEncryptionKeyValue(value: IntegrationConnectorsConnectionSslConfigAdditionalVariableEncryptionKeyValue) {
    this._encryptionKeyValue.internalValue = value;
  }
  public resetEncryptionKeyValue() {
    this._encryptionKeyValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyValueInput() {
    return this._encryptionKeyValue.internalValue;
  }

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new IntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: IntegrationConnectorsConnectionSslConfigAdditionalVariableSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class IntegrationConnectorsConnectionSslConfigAdditionalVariableList extends cdktf.ComplexList {
  public internalValue? : IntegrationConnectorsConnectionSslConfigAdditionalVariable[] | cdktf.IResolvable

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
  public get(index: number): IntegrationConnectorsConnectionSslConfigAdditionalVariableOutputReference {
    return new IntegrationConnectorsConnectionSslConfigAdditionalVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationConnectorsConnectionSslConfigClientCertificate {
  /**
  * Secret version of Secret Value for Config variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#secret_version IntegrationConnectorsConnection#secret_version}
  */
  readonly secretVersion: string;
}

export function integrationConnectorsConnectionSslConfigClientCertificateToTerraform(struct?: IntegrationConnectorsConnectionSslConfigClientCertificateOutputReference | IntegrationConnectorsConnectionSslConfigClientCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function integrationConnectorsConnectionSslConfigClientCertificateToHclTerraform(struct?: IntegrationConnectorsConnectionSslConfigClientCertificateOutputReference | IntegrationConnectorsConnectionSslConfigClientCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionSslConfigClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionSslConfigClientCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionSslConfigClientCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface IntegrationConnectorsConnectionSslConfigClientPrivateKey {
  /**
  * Secret version of Secret Value for Config variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#secret_version IntegrationConnectorsConnection#secret_version}
  */
  readonly secretVersion: string;
}

export function integrationConnectorsConnectionSslConfigClientPrivateKeyToTerraform(struct?: IntegrationConnectorsConnectionSslConfigClientPrivateKeyOutputReference | IntegrationConnectorsConnectionSslConfigClientPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function integrationConnectorsConnectionSslConfigClientPrivateKeyToHclTerraform(struct?: IntegrationConnectorsConnectionSslConfigClientPrivateKeyOutputReference | IntegrationConnectorsConnectionSslConfigClientPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionSslConfigClientPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionSslConfigClientPrivateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionSslConfigClientPrivateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface IntegrationConnectorsConnectionSslConfigClientPrivateKeyPass {
  /**
  * Secret version of Secret Value for Config variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#secret_version IntegrationConnectorsConnection#secret_version}
  */
  readonly secretVersion: string;
}

export function integrationConnectorsConnectionSslConfigClientPrivateKeyPassToTerraform(struct?: IntegrationConnectorsConnectionSslConfigClientPrivateKeyPassOutputReference | IntegrationConnectorsConnectionSslConfigClientPrivateKeyPass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function integrationConnectorsConnectionSslConfigClientPrivateKeyPassToHclTerraform(struct?: IntegrationConnectorsConnectionSslConfigClientPrivateKeyPassOutputReference | IntegrationConnectorsConnectionSslConfigClientPrivateKeyPass): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionSslConfigClientPrivateKeyPassOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionSslConfigClientPrivateKeyPass | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionSslConfigClientPrivateKeyPass | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface IntegrationConnectorsConnectionSslConfigPrivateServerCertificate {
  /**
  * Secret version of Secret Value for Config variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#secret_version IntegrationConnectorsConnection#secret_version}
  */
  readonly secretVersion: string;
}

export function integrationConnectorsConnectionSslConfigPrivateServerCertificateToTerraform(struct?: IntegrationConnectorsConnectionSslConfigPrivateServerCertificateOutputReference | IntegrationConnectorsConnectionSslConfigPrivateServerCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function integrationConnectorsConnectionSslConfigPrivateServerCertificateToHclTerraform(struct?: IntegrationConnectorsConnectionSslConfigPrivateServerCertificateOutputReference | IntegrationConnectorsConnectionSslConfigPrivateServerCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionSslConfigPrivateServerCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionSslConfigPrivateServerCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionSslConfigPrivateServerCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface IntegrationConnectorsConnectionSslConfig {
  /**
  * Type of Client Cert (PEM/JKS/.. etc.) Possible values: ["PEM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#client_cert_type IntegrationConnectorsConnection#client_cert_type}
  */
  readonly clientCertType?: string;
  /**
  * Type of Server Cert (PEM/JKS/.. etc.) Possible values: ["PEM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#server_cert_type IntegrationConnectorsConnection#server_cert_type}
  */
  readonly serverCertType?: string;
  /**
  * Enum for Trust Model Possible values: ["PUBLIC", "PRIVATE", "INSECURE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#trust_model IntegrationConnectorsConnection#trust_model}
  */
  readonly trustModel?: string;
  /**
  * Enum for controlling the SSL Type (TLS/MTLS) Possible values: ["TLS", "MTLS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#type IntegrationConnectorsConnection#type}
  */
  readonly type: string;
  /**
  * Bool for enabling SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#use_ssl IntegrationConnectorsConnection#use_ssl}
  */
  readonly useSsl?: boolean | cdktf.IResolvable;
  /**
  * additional_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#additional_variable IntegrationConnectorsConnection#additional_variable}
  */
  readonly additionalVariable?: IntegrationConnectorsConnectionSslConfigAdditionalVariable[] | cdktf.IResolvable;
  /**
  * client_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#client_certificate IntegrationConnectorsConnection#client_certificate}
  */
  readonly clientCertificate?: IntegrationConnectorsConnectionSslConfigClientCertificate;
  /**
  * client_private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#client_private_key IntegrationConnectorsConnection#client_private_key}
  */
  readonly clientPrivateKey?: IntegrationConnectorsConnectionSslConfigClientPrivateKey;
  /**
  * client_private_key_pass block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#client_private_key_pass IntegrationConnectorsConnection#client_private_key_pass}
  */
  readonly clientPrivateKeyPass?: IntegrationConnectorsConnectionSslConfigClientPrivateKeyPass;
  /**
  * private_server_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#private_server_certificate IntegrationConnectorsConnection#private_server_certificate}
  */
  readonly privateServerCertificate?: IntegrationConnectorsConnectionSslConfigPrivateServerCertificate;
}

export function integrationConnectorsConnectionSslConfigToTerraform(struct?: IntegrationConnectorsConnectionSslConfigOutputReference | IntegrationConnectorsConnectionSslConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_cert_type: cdktf.stringToTerraform(struct!.clientCertType),
    server_cert_type: cdktf.stringToTerraform(struct!.serverCertType),
    trust_model: cdktf.stringToTerraform(struct!.trustModel),
    type: cdktf.stringToTerraform(struct!.type),
    use_ssl: cdktf.booleanToTerraform(struct!.useSsl),
    additional_variable: cdktf.listMapper(integrationConnectorsConnectionSslConfigAdditionalVariableToTerraform, true)(struct!.additionalVariable),
    client_certificate: integrationConnectorsConnectionSslConfigClientCertificateToTerraform(struct!.clientCertificate),
    client_private_key: integrationConnectorsConnectionSslConfigClientPrivateKeyToTerraform(struct!.clientPrivateKey),
    client_private_key_pass: integrationConnectorsConnectionSslConfigClientPrivateKeyPassToTerraform(struct!.clientPrivateKeyPass),
    private_server_certificate: integrationConnectorsConnectionSslConfigPrivateServerCertificateToTerraform(struct!.privateServerCertificate),
  }
}


export function integrationConnectorsConnectionSslConfigToHclTerraform(struct?: IntegrationConnectorsConnectionSslConfigOutputReference | IntegrationConnectorsConnectionSslConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_cert_type: {
      value: cdktf.stringToHclTerraform(struct!.clientCertType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_cert_type: {
      value: cdktf.stringToHclTerraform(struct!.serverCertType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_model: {
      value: cdktf.stringToHclTerraform(struct!.trustModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.useSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    additional_variable: {
      value: cdktf.listMapperHcl(integrationConnectorsConnectionSslConfigAdditionalVariableToHclTerraform, true)(struct!.additionalVariable),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionSslConfigAdditionalVariableList",
    },
    client_certificate: {
      value: integrationConnectorsConnectionSslConfigClientCertificateToHclTerraform(struct!.clientCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionSslConfigClientCertificateList",
    },
    client_private_key: {
      value: integrationConnectorsConnectionSslConfigClientPrivateKeyToHclTerraform(struct!.clientPrivateKey),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionSslConfigClientPrivateKeyList",
    },
    client_private_key_pass: {
      value: integrationConnectorsConnectionSslConfigClientPrivateKeyPassToHclTerraform(struct!.clientPrivateKeyPass),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionSslConfigClientPrivateKeyPassList",
    },
    private_server_certificate: {
      value: integrationConnectorsConnectionSslConfigPrivateServerCertificateToHclTerraform(struct!.privateServerCertificate),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationConnectorsConnectionSslConfigPrivateServerCertificateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionSslConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationConnectorsConnectionSslConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertType !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertType = this._clientCertType;
    }
    if (this._serverCertType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertType = this._serverCertType;
    }
    if (this._trustModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustModel = this._trustModel;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._useSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSsl = this._useSsl;
    }
    if (this._additionalVariable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalVariable = this._additionalVariable?.internalValue;
    }
    if (this._clientCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate?.internalValue;
    }
    if (this._clientPrivateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPrivateKey = this._clientPrivateKey?.internalValue;
    }
    if (this._clientPrivateKeyPass?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientPrivateKeyPass = this._clientPrivateKeyPass?.internalValue;
    }
    if (this._privateServerCertificate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateServerCertificate = this._privateServerCertificate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationConnectorsConnectionSslConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertType = undefined;
      this._serverCertType = undefined;
      this._trustModel = undefined;
      this._type = undefined;
      this._useSsl = undefined;
      this._additionalVariable.internalValue = undefined;
      this._clientCertificate.internalValue = undefined;
      this._clientPrivateKey.internalValue = undefined;
      this._clientPrivateKeyPass.internalValue = undefined;
      this._privateServerCertificate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertType = value.clientCertType;
      this._serverCertType = value.serverCertType;
      this._trustModel = value.trustModel;
      this._type = value.type;
      this._useSsl = value.useSsl;
      this._additionalVariable.internalValue = value.additionalVariable;
      this._clientCertificate.internalValue = value.clientCertificate;
      this._clientPrivateKey.internalValue = value.clientPrivateKey;
      this._clientPrivateKeyPass.internalValue = value.clientPrivateKeyPass;
      this._privateServerCertificate.internalValue = value.privateServerCertificate;
    }
  }

  // client_cert_type - computed: false, optional: true, required: false
  private _clientCertType?: string; 
  public get clientCertType() {
    return this.getStringAttribute('client_cert_type');
  }
  public set clientCertType(value: string) {
    this._clientCertType = value;
  }
  public resetClientCertType() {
    this._clientCertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertTypeInput() {
    return this._clientCertType;
  }

  // server_cert_type - computed: false, optional: true, required: false
  private _serverCertType?: string; 
  public get serverCertType() {
    return this.getStringAttribute('server_cert_type');
  }
  public set serverCertType(value: string) {
    this._serverCertType = value;
  }
  public resetServerCertType() {
    this._serverCertType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertTypeInput() {
    return this._serverCertType;
  }

  // trust_model - computed: false, optional: true, required: false
  private _trustModel?: string; 
  public get trustModel() {
    return this.getStringAttribute('trust_model');
  }
  public set trustModel(value: string) {
    this._trustModel = value;
  }
  public resetTrustModel() {
    this._trustModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustModelInput() {
    return this._trustModel;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // use_ssl - computed: false, optional: true, required: false
  private _useSsl?: boolean | cdktf.IResolvable; 
  public get useSsl() {
    return this.getBooleanAttribute('use_ssl');
  }
  public set useSsl(value: boolean | cdktf.IResolvable) {
    this._useSsl = value;
  }
  public resetUseSsl() {
    this._useSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSslInput() {
    return this._useSsl;
  }

  // additional_variable - computed: false, optional: true, required: false
  private _additionalVariable = new IntegrationConnectorsConnectionSslConfigAdditionalVariableList(this, "additional_variable", false);
  public get additionalVariable() {
    return this._additionalVariable;
  }
  public putAdditionalVariable(value: IntegrationConnectorsConnectionSslConfigAdditionalVariable[] | cdktf.IResolvable) {
    this._additionalVariable.internalValue = value;
  }
  public resetAdditionalVariable() {
    this._additionalVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVariableInput() {
    return this._additionalVariable.internalValue;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate = new IntegrationConnectorsConnectionSslConfigClientCertificateOutputReference(this, "client_certificate");
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public putClientCertificate(value: IntegrationConnectorsConnectionSslConfigClientCertificate) {
    this._clientCertificate.internalValue = value;
  }
  public resetClientCertificate() {
    this._clientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate.internalValue;
  }

  // client_private_key - computed: false, optional: true, required: false
  private _clientPrivateKey = new IntegrationConnectorsConnectionSslConfigClientPrivateKeyOutputReference(this, "client_private_key");
  public get clientPrivateKey() {
    return this._clientPrivateKey;
  }
  public putClientPrivateKey(value: IntegrationConnectorsConnectionSslConfigClientPrivateKey) {
    this._clientPrivateKey.internalValue = value;
  }
  public resetClientPrivateKey() {
    this._clientPrivateKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPrivateKeyInput() {
    return this._clientPrivateKey.internalValue;
  }

  // client_private_key_pass - computed: false, optional: true, required: false
  private _clientPrivateKeyPass = new IntegrationConnectorsConnectionSslConfigClientPrivateKeyPassOutputReference(this, "client_private_key_pass");
  public get clientPrivateKeyPass() {
    return this._clientPrivateKeyPass;
  }
  public putClientPrivateKeyPass(value: IntegrationConnectorsConnectionSslConfigClientPrivateKeyPass) {
    this._clientPrivateKeyPass.internalValue = value;
  }
  public resetClientPrivateKeyPass() {
    this._clientPrivateKeyPass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPrivateKeyPassInput() {
    return this._clientPrivateKeyPass.internalValue;
  }

  // private_server_certificate - computed: false, optional: true, required: false
  private _privateServerCertificate = new IntegrationConnectorsConnectionSslConfigPrivateServerCertificateOutputReference(this, "private_server_certificate");
  public get privateServerCertificate() {
    return this._privateServerCertificate;
  }
  public putPrivateServerCertificate(value: IntegrationConnectorsConnectionSslConfigPrivateServerCertificate) {
    this._privateServerCertificate.internalValue = value;
  }
  public resetPrivateServerCertificate() {
    this._privateServerCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateServerCertificateInput() {
    return this._privateServerCertificate.internalValue;
  }
}
export interface IntegrationConnectorsConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#create IntegrationConnectorsConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#delete IntegrationConnectorsConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#update IntegrationConnectorsConnection#update}
  */
  readonly update?: string;
}

export function integrationConnectorsConnectionTimeoutsToTerraform(struct?: IntegrationConnectorsConnectionTimeouts | cdktf.IResolvable): any {
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


export function integrationConnectorsConnectionTimeoutsToHclTerraform(struct?: IntegrationConnectorsConnectionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationConnectorsConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationConnectorsConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IntegrationConnectorsConnectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection google_integration_connectors_connection}
*/
export class IntegrationConnectorsConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_integration_connectors_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationConnectorsConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationConnectorsConnection to import
  * @param importFromId The id of the existing IntegrationConnectorsConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationConnectorsConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_integration_connectors_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/integration_connectors_connection google_integration_connectors_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationConnectorsConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationConnectorsConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_integration_connectors_connection',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.22.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectorVersion = config.connectorVersion;
    this._description = config.description;
    this._eventingEnablementType = config.eventingEnablementType;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._serviceAccount = config.serviceAccount;
    this._suspended = config.suspended;
    this._authConfig.internalValue = config.authConfig;
    this._configVariable.internalValue = config.configVariable;
    this._destinationConfig.internalValue = config.destinationConfig;
    this._eventingConfig.internalValue = config.eventingConfig;
    this._lockConfig.internalValue = config.lockConfig;
    this._logConfig.internalValue = config.logConfig;
    this._nodeConfig.internalValue = config.nodeConfig;
    this._sslConfig.internalValue = config.sslConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_revision - computed: true, optional: false, required: false
  public get connectionRevision() {
    return this.getStringAttribute('connection_revision');
  }

  // connector_version - computed: false, optional: false, required: true
  private _connectorVersion?: string; 
  public get connectorVersion() {
    return this.getStringAttribute('connector_version');
  }
  public set connectorVersion(value: string) {
    this._connectorVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorVersionInput() {
    return this._connectorVersion;
  }

  // connector_version_infra_config - computed: true, optional: false, required: false
  private _connectorVersionInfraConfig = new IntegrationConnectorsConnectionConnectorVersionInfraConfigList(this, "connector_version_infra_config", false);
  public get connectorVersionInfraConfig() {
    return this._connectorVersionInfraConfig;
  }

  // connector_version_launch_stage - computed: true, optional: false, required: false
  public get connectorVersionLaunchStage() {
    return this.getStringAttribute('connector_version_launch_stage');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // eventing_enablement_type - computed: false, optional: true, required: false
  private _eventingEnablementType?: string; 
  public get eventingEnablementType() {
    return this.getStringAttribute('eventing_enablement_type');
  }
  public set eventingEnablementType(value: string) {
    this._eventingEnablementType = value;
  }
  public resetEventingEnablementType() {
    this._eventingEnablementType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventingEnablementTypeInput() {
    return this._eventingEnablementType;
  }

  // eventing_runtime_data - computed: true, optional: false, required: false
  private _eventingRuntimeData = new IntegrationConnectorsConnectionEventingRuntimeDataList(this, "eventing_runtime_data", false);
  public get eventingRuntimeData() {
    return this._eventingRuntimeData;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // service_account - computed: true, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // service_directory - computed: true, optional: false, required: false
  public get serviceDirectory() {
    return this.getStringAttribute('service_directory');
  }

  // status - computed: true, optional: false, required: false
  private _status = new IntegrationConnectorsConnectionStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // subscription_type - computed: true, optional: false, required: false
  public get subscriptionType() {
    return this.getStringAttribute('subscription_type');
  }

  // suspended - computed: false, optional: true, required: false
  private _suspended?: boolean | cdktf.IResolvable; 
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }
  public set suspended(value: boolean | cdktf.IResolvable) {
    this._suspended = value;
  }
  public resetSuspended() {
    this._suspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedInput() {
    return this._suspended;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // auth_config - computed: false, optional: true, required: false
  private _authConfig = new IntegrationConnectorsConnectionAuthConfigOutputReference(this, "auth_config");
  public get authConfig() {
    return this._authConfig;
  }
  public putAuthConfig(value: IntegrationConnectorsConnectionAuthConfig) {
    this._authConfig.internalValue = value;
  }
  public resetAuthConfig() {
    this._authConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigInput() {
    return this._authConfig.internalValue;
  }

  // config_variable - computed: false, optional: true, required: false
  private _configVariable = new IntegrationConnectorsConnectionConfigVariableList(this, "config_variable", false);
  public get configVariable() {
    return this._configVariable;
  }
  public putConfigVariable(value: IntegrationConnectorsConnectionConfigVariable[] | cdktf.IResolvable) {
    this._configVariable.internalValue = value;
  }
  public resetConfigVariable() {
    this._configVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configVariableInput() {
    return this._configVariable.internalValue;
  }

  // destination_config - computed: false, optional: true, required: false
  private _destinationConfig = new IntegrationConnectorsConnectionDestinationConfigList(this, "destination_config", false);
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: IntegrationConnectorsConnectionDestinationConfig[] | cdktf.IResolvable) {
    this._destinationConfig.internalValue = value;
  }
  public resetDestinationConfig() {
    this._destinationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigInput() {
    return this._destinationConfig.internalValue;
  }

  // eventing_config - computed: false, optional: true, required: false
  private _eventingConfig = new IntegrationConnectorsConnectionEventingConfigOutputReference(this, "eventing_config");
  public get eventingConfig() {
    return this._eventingConfig;
  }
  public putEventingConfig(value: IntegrationConnectorsConnectionEventingConfig) {
    this._eventingConfig.internalValue = value;
  }
  public resetEventingConfig() {
    this._eventingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventingConfigInput() {
    return this._eventingConfig.internalValue;
  }

  // lock_config - computed: false, optional: true, required: false
  private _lockConfig = new IntegrationConnectorsConnectionLockConfigOutputReference(this, "lock_config");
  public get lockConfig() {
    return this._lockConfig;
  }
  public putLockConfig(value: IntegrationConnectorsConnectionLockConfig) {
    this._lockConfig.internalValue = value;
  }
  public resetLockConfig() {
    this._lockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockConfigInput() {
    return this._lockConfig.internalValue;
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new IntegrationConnectorsConnectionLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: IntegrationConnectorsConnectionLogConfig) {
    this._logConfig.internalValue = value;
  }
  public resetLogConfig() {
    this._logConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig.internalValue;
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig = new IntegrationConnectorsConnectionNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: IntegrationConnectorsConnectionNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  public resetNodeConfig() {
    this._nodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // ssl_config - computed: false, optional: true, required: false
  private _sslConfig = new IntegrationConnectorsConnectionSslConfigOutputReference(this, "ssl_config");
  public get sslConfig() {
    return this._sslConfig;
  }
  public putSslConfig(value: IntegrationConnectorsConnectionSslConfig) {
    this._sslConfig.internalValue = value;
  }
  public resetSslConfig() {
    this._sslConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConfigInput() {
    return this._sslConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IntegrationConnectorsConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IntegrationConnectorsConnectionTimeouts) {
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
      connector_version: cdktf.stringToTerraform(this._connectorVersion),
      description: cdktf.stringToTerraform(this._description),
      eventing_enablement_type: cdktf.stringToTerraform(this._eventingEnablementType),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      suspended: cdktf.booleanToTerraform(this._suspended),
      auth_config: integrationConnectorsConnectionAuthConfigToTerraform(this._authConfig.internalValue),
      config_variable: cdktf.listMapper(integrationConnectorsConnectionConfigVariableToTerraform, true)(this._configVariable.internalValue),
      destination_config: cdktf.listMapper(integrationConnectorsConnectionDestinationConfigToTerraform, true)(this._destinationConfig.internalValue),
      eventing_config: integrationConnectorsConnectionEventingConfigToTerraform(this._eventingConfig.internalValue),
      lock_config: integrationConnectorsConnectionLockConfigToTerraform(this._lockConfig.internalValue),
      log_config: integrationConnectorsConnectionLogConfigToTerraform(this._logConfig.internalValue),
      node_config: integrationConnectorsConnectionNodeConfigToTerraform(this._nodeConfig.internalValue),
      ssl_config: integrationConnectorsConnectionSslConfigToTerraform(this._sslConfig.internalValue),
      timeouts: integrationConnectorsConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connector_version: {
        value: cdktf.stringToHclTerraform(this._connectorVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      eventing_enablement_type: {
        value: cdktf.stringToHclTerraform(this._eventingEnablementType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account: {
        value: cdktf.stringToHclTerraform(this._serviceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suspended: {
        value: cdktf.booleanToHclTerraform(this._suspended),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auth_config: {
        value: integrationConnectorsConnectionAuthConfigToHclTerraform(this._authConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationConnectorsConnectionAuthConfigList",
      },
      config_variable: {
        value: cdktf.listMapperHcl(integrationConnectorsConnectionConfigVariableToHclTerraform, true)(this._configVariable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationConnectorsConnectionConfigVariableList",
      },
      destination_config: {
        value: cdktf.listMapperHcl(integrationConnectorsConnectionDestinationConfigToHclTerraform, true)(this._destinationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationConnectorsConnectionDestinationConfigList",
      },
      eventing_config: {
        value: integrationConnectorsConnectionEventingConfigToHclTerraform(this._eventingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationConnectorsConnectionEventingConfigList",
      },
      lock_config: {
        value: integrationConnectorsConnectionLockConfigToHclTerraform(this._lockConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationConnectorsConnectionLockConfigList",
      },
      log_config: {
        value: integrationConnectorsConnectionLogConfigToHclTerraform(this._logConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationConnectorsConnectionLogConfigList",
      },
      node_config: {
        value: integrationConnectorsConnectionNodeConfigToHclTerraform(this._nodeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationConnectorsConnectionNodeConfigList",
      },
      ssl_config: {
        value: integrationConnectorsConnectionSslConfigToHclTerraform(this._sslConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationConnectorsConnectionSslConfigList",
      },
      timeouts: {
        value: integrationConnectorsConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationConnectorsConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
