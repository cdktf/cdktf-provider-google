// https://www.terraform.io/docs/providers/google/r/composer_environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComposerEnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#id ComposerEnvironment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-defined labels for this environment. The labels map can contain no more than 64 entries. Entries of the labels map are UTF8 strings that comply with the following restrictions: Label keys must be between 1 and 63 characters long and must conform to the following regular expression: [a-z]([-a-z0-9]*[a-z0-9])?. Label values must be between 0 and 63 characters long and must conform to the regular expression ([a-z]([-a-z0-9]*[a-z0-9])?)?. No more than 64 labels can be associated with a given environment. Both keys and values must be <= 128 bytes in size.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#labels ComposerEnvironment#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#name ComposerEnvironment#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#project ComposerEnvironment#project}
  */
  readonly project?: string;
  /**
  * The location or Compute Engine region for the environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#region ComposerEnvironment#region}
  */
  readonly region?: string;
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#config ComposerEnvironment#config}
  */
  readonly config?: ComposerEnvironmentConfigA;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#timeouts ComposerEnvironment#timeouts}
  */
  readonly timeouts?: ComposerEnvironmentTimeouts;
}
export interface ComposerEnvironmentConfigDatabaseConfig {
  /**
  * Optional. Cloud SQL machine type used by Airflow database. It has to be one of: db-n1-standard-2, db-n1-standard-4, db-n1-standard-8 or db-n1-standard-16. If not specified, db-n1-standard-2 will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#machine_type ComposerEnvironment#machine_type}
  */
  readonly machineType: string;
}

export function composerEnvironmentConfigDatabaseConfigToTerraform(struct?: ComposerEnvironmentConfigDatabaseConfigOutputReference | ComposerEnvironmentConfigDatabaseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_type: cdktf.stringToTerraform(struct!.machineType),
  }
}

export class ComposerEnvironmentConfigDatabaseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComposerEnvironmentConfigDatabaseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComposerEnvironmentConfigDatabaseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._machineType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._machineType = value.machineType;
    }
  }

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }
}
export interface ComposerEnvironmentConfigEncryptionConfig {
  /**
  * Optional. Customer-managed Encryption Key available through Google's Key Management Service. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#kms_key_name ComposerEnvironment#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function composerEnvironmentConfigEncryptionConfigToTerraform(struct?: ComposerEnvironmentConfigEncryptionConfigOutputReference | ComposerEnvironmentConfigEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export class ComposerEnvironmentConfigEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComposerEnvironmentConfigEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComposerEnvironmentConfigEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface ComposerEnvironmentConfigMaintenanceWindow {
  /**
  * Maintenance window end time. It is used only to calculate the duration of the maintenance window. The value for end-time must be in the future, relative to 'start_time'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#end_time ComposerEnvironment#end_time}
  */
  readonly endTime: string;
  /**
  * Maintenance window recurrence. Format is a subset of RFC-5545 (https://tools.ietf.org/html/rfc5545) 'RRULE'. The only allowed values for 'FREQ' field are 'FREQ=DAILY' and 'FREQ=WEEKLY;BYDAY=...'. Example values: 'FREQ=WEEKLY;BYDAY=TU,WE', 'FREQ=DAILY'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#recurrence ComposerEnvironment#recurrence}
  */
  readonly recurrence: string;
  /**
  * Start time of the first recurrence of the maintenance window.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#start_time ComposerEnvironment#start_time}
  */
  readonly startTime: string;
}

export function composerEnvironmentConfigMaintenanceWindowToTerraform(struct?: ComposerEnvironmentConfigMaintenanceWindowOutputReference | ComposerEnvironmentConfigMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    recurrence: cdktf.stringToTerraform(struct!.recurrence),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}

export class ComposerEnvironmentConfigMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComposerEnvironmentConfigMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._recurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComposerEnvironmentConfigMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._recurrence = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._recurrence = value.recurrence;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // recurrence - computed: false, optional: false, required: true
  private _recurrence?: string; 
  public get recurrence() {
    return this.getStringAttribute('recurrence');
  }
  public set recurrence(value: string) {
    this._recurrence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks {
  /**
  * cidr_block must be specified in CIDR notation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cidr_block ComposerEnvironment#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * display_name is a field for users to identify CIDR blocks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#display_name ComposerEnvironment#display_name}
  */
  readonly displayName?: string;
}

export function composerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksToTerraform(struct?: ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}

export class ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlock = undefined;
      this._displayName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlock = value.cidrBlock;
      this._displayName = value.displayName;
    }
  }

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }
}

export class ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList extends cdktf.ComplexList {
  public internalValue? : ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks[] | cdktf.IResolvable

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
  public get(index: number): ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference {
    return new ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComposerEnvironmentConfigMasterAuthorizedNetworksConfig {
  /**
  * Whether or not master authorized networks is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#enabled ComposerEnvironment#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * cidr_blocks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cidr_blocks ComposerEnvironment#cidr_blocks}
  */
  readonly cidrBlocks?: ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks[] | cdktf.IResolvable;
}

export function composerEnvironmentConfigMasterAuthorizedNetworksConfigToTerraform(struct?: ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference | ComposerEnvironmentConfigMasterAuthorizedNetworksConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    cidr_blocks: cdktf.listMapper(composerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksToTerraform, true)(struct!.cidrBlocks),
  }
}

export class ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComposerEnvironmentConfigMasterAuthorizedNetworksConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._cidrBlocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComposerEnvironmentConfigMasterAuthorizedNetworksConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._cidrBlocks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._cidrBlocks.internalValue = value.cidrBlocks;
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

  // cidr_blocks - computed: false, optional: true, required: false
  private _cidrBlocks = new ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocksList(this, "cidr_blocks", true);
  public get cidrBlocks() {
    return this._cidrBlocks;
  }
  public putCidrBlocks(value: ComposerEnvironmentConfigMasterAuthorizedNetworksConfigCidrBlocks[] | cdktf.IResolvable) {
    this._cidrBlocks.internalValue = value;
  }
  public resetCidrBlocks() {
    this._cidrBlocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks.internalValue;
  }
}
export interface ComposerEnvironmentConfigNodeConfigIpAllocationPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cluster_ipv4_cidr_block ComposerEnvironment#cluster_ipv4_cidr_block}
  */
  readonly clusterIpv4CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cluster_secondary_range_name ComposerEnvironment#cluster_secondary_range_name}
  */
  readonly clusterSecondaryRangeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#services_ipv4_cidr_block ComposerEnvironment#services_ipv4_cidr_block}
  */
  readonly servicesIpv4CidrBlock?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#services_secondary_range_name ComposerEnvironment#services_secondary_range_name}
  */
  readonly servicesSecondaryRangeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#use_ip_aliases ComposerEnvironment#use_ip_aliases}
  */
  readonly useIpAliases?: boolean | cdktf.IResolvable;
}

export function composerEnvironmentConfigNodeConfigIpAllocationPolicyToTerraform(struct?: ComposerEnvironmentConfigNodeConfigIpAllocationPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_ipv4_cidr_block: cdktf.stringToTerraform(struct!.clusterIpv4CidrBlock),
    cluster_secondary_range_name: cdktf.stringToTerraform(struct!.clusterSecondaryRangeName),
    services_ipv4_cidr_block: cdktf.stringToTerraform(struct!.servicesIpv4CidrBlock),
    services_secondary_range_name: cdktf.stringToTerraform(struct!.servicesSecondaryRangeName),
    use_ip_aliases: cdktf.booleanToTerraform(struct!.useIpAliases),
  }
}

export class ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComposerEnvironmentConfigNodeConfigIpAllocationPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIpv4CidrBlock = this._clusterIpv4CidrBlock;
    }
    if (this._clusterSecondaryRangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSecondaryRangeName = this._clusterSecondaryRangeName;
    }
    if (this._servicesIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesIpv4CidrBlock = this._servicesIpv4CidrBlock;
    }
    if (this._servicesSecondaryRangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesSecondaryRangeName = this._servicesSecondaryRangeName;
    }
    if (this._useIpAliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.useIpAliases = this._useIpAliases;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComposerEnvironmentConfigNodeConfigIpAllocationPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterIpv4CidrBlock = undefined;
      this._clusterSecondaryRangeName = undefined;
      this._servicesIpv4CidrBlock = undefined;
      this._servicesSecondaryRangeName = undefined;
      this._useIpAliases = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterIpv4CidrBlock = value.clusterIpv4CidrBlock;
      this._clusterSecondaryRangeName = value.clusterSecondaryRangeName;
      this._servicesIpv4CidrBlock = value.servicesIpv4CidrBlock;
      this._servicesSecondaryRangeName = value.servicesSecondaryRangeName;
      this._useIpAliases = value.useIpAliases;
    }
  }

  // cluster_ipv4_cidr_block - computed: true, optional: true, required: false
  private _clusterIpv4CidrBlock?: string; 
  public get clusterIpv4CidrBlock() {
    return this.getStringAttribute('cluster_ipv4_cidr_block');
  }
  public set clusterIpv4CidrBlock(value: string) {
    this._clusterIpv4CidrBlock = value;
  }
  public resetClusterIpv4CidrBlock() {
    this._clusterIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpv4CidrBlockInput() {
    return this._clusterIpv4CidrBlock;
  }

  // cluster_secondary_range_name - computed: true, optional: true, required: false
  private _clusterSecondaryRangeName?: string; 
  public get clusterSecondaryRangeName() {
    return this.getStringAttribute('cluster_secondary_range_name');
  }
  public set clusterSecondaryRangeName(value: string) {
    this._clusterSecondaryRangeName = value;
  }
  public resetClusterSecondaryRangeName() {
    this._clusterSecondaryRangeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSecondaryRangeNameInput() {
    return this._clusterSecondaryRangeName;
  }

  // services_ipv4_cidr_block - computed: true, optional: true, required: false
  private _servicesIpv4CidrBlock?: string; 
  public get servicesIpv4CidrBlock() {
    return this.getStringAttribute('services_ipv4_cidr_block');
  }
  public set servicesIpv4CidrBlock(value: string) {
    this._servicesIpv4CidrBlock = value;
  }
  public resetServicesIpv4CidrBlock() {
    this._servicesIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesIpv4CidrBlockInput() {
    return this._servicesIpv4CidrBlock;
  }

  // services_secondary_range_name - computed: true, optional: true, required: false
  private _servicesSecondaryRangeName?: string; 
  public get servicesSecondaryRangeName() {
    return this.getStringAttribute('services_secondary_range_name');
  }
  public set servicesSecondaryRangeName(value: string) {
    this._servicesSecondaryRangeName = value;
  }
  public resetServicesSecondaryRangeName() {
    this._servicesSecondaryRangeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesSecondaryRangeNameInput() {
    return this._servicesSecondaryRangeName;
  }

  // use_ip_aliases - computed: true, optional: true, required: false
  private _useIpAliases?: boolean | cdktf.IResolvable; 
  public get useIpAliases() {
    return this.getBooleanAttribute('use_ip_aliases');
  }
  public set useIpAliases(value: boolean | cdktf.IResolvable) {
    this._useIpAliases = value;
  }
  public resetUseIpAliases() {
    this._useIpAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIpAliasesInput() {
    return this._useIpAliases;
  }
}

export class ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList extends cdktf.ComplexList {
  public internalValue? : ComposerEnvironmentConfigNodeConfigIpAllocationPolicy[] | cdktf.IResolvable

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
  public get(index: number): ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference {
    return new ComposerEnvironmentConfigNodeConfigIpAllocationPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComposerEnvironmentConfigNodeConfig {
  /**
  * The disk size in GB used for node VMs. Minimum size is 20GB. If unspecified, defaults to 100GB. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#disk_size_gb ComposerEnvironment#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Deploys 'ip-masq-agent' daemon set in the GKE cluster and defines nonMasqueradeCIDRs equals to pod IP range so IP masquerading is used for all destination addresses, except between pods traffic. See: https://cloud.google.com/kubernetes-engine/docs/how-to/ip-masquerade-agent
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#enable_ip_masq_agent ComposerEnvironment#enable_ip_masq_agent}
  */
  readonly enableIpMasqAgent?: boolean | cdktf.IResolvable;
  /**
  * Configuration for controlling how IPs are allocated in the GKE cluster. Cannot be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#ip_allocation_policy ComposerEnvironment#ip_allocation_policy}
  */
  readonly ipAllocationPolicy?: ComposerEnvironmentConfigNodeConfigIpAllocationPolicy[] | cdktf.IResolvable;
  /**
  * The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#machine_type ComposerEnvironment#machine_type}
  */
  readonly machineType?: string;
  /**
  * The Compute Engine machine type used for cluster instances, specified as a name or relative resource name. For example: "projects/{project}/zones/{zone}/machineTypes/{machineType}". Must belong to the enclosing environment's project and region/zone. The network must belong to the environment's project. If unspecified, the "default" network ID in the environment's project is used. If a Custom Subnet Network is provided, subnetwork must also be provided.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#network ComposerEnvironment#network}
  */
  readonly network?: string;
  /**
  * The set of Google API scopes to be made available on all node VMs. Cannot be updated. If empty, defaults to ["https://www.googleapis.com/auth/cloud-platform"]. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#oauth_scopes ComposerEnvironment#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs. If a service account is not specified, the "default" Compute Engine service account is used. Cannot be updated. If given, note that the service account must have roles/composer.worker for any GCP resources created under the Cloud Composer Environment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#service_account ComposerEnvironment#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * The Compute Engine subnetwork to be used for machine communications, , specified as a self-link, relative resource name (e.g. "projects/{project}/regions/{region}/subnetworks/{subnetwork}"), or by name. If subnetwork is provided, network must also be provided and the subnetwork must belong to the enclosing environment's project and region.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#subnetwork ComposerEnvironment#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * The list of instance tags applied to all node VMs. Tags are used to identify valid sources or targets for network firewalls. Each tag within the list must comply with RFC1035. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#tags ComposerEnvironment#tags}
  */
  readonly tags?: string[];
  /**
  * The Compute Engine zone in which to deploy the VMs running the Apache Airflow software, specified as the zone name or relative resource name (e.g. "projects/{project}/zones/{zone}"). Must belong to the enclosing environment's project and region. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#zone ComposerEnvironment#zone}
  */
  readonly zone?: string;
}

export function composerEnvironmentConfigNodeConfigToTerraform(struct?: ComposerEnvironmentConfigNodeConfigOutputReference | ComposerEnvironmentConfigNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    enable_ip_masq_agent: cdktf.booleanToTerraform(struct!.enableIpMasqAgent),
    ip_allocation_policy: cdktf.listMapper(composerEnvironmentConfigNodeConfigIpAllocationPolicyToTerraform, false)(struct!.ipAllocationPolicy),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    network: cdktf.stringToTerraform(struct!.network),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oauthScopes),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}

export class ComposerEnvironmentConfigNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComposerEnvironmentConfigNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._enableIpMasqAgent !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpMasqAgent = this._enableIpMasqAgent;
    }
    if (this._ipAllocationPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAllocationPolicy = this._ipAllocationPolicy?.internalValue;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComposerEnvironmentConfigNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskSizeGb = undefined;
      this._enableIpMasqAgent = undefined;
      this._ipAllocationPolicy.internalValue = undefined;
      this._machineType = undefined;
      this._network = undefined;
      this._oauthScopes = undefined;
      this._serviceAccount = undefined;
      this._subnetwork = undefined;
      this._tags = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskSizeGb = value.diskSizeGb;
      this._enableIpMasqAgent = value.enableIpMasqAgent;
      this._ipAllocationPolicy.internalValue = value.ipAllocationPolicy;
      this._machineType = value.machineType;
      this._network = value.network;
      this._oauthScopes = value.oauthScopes;
      this._serviceAccount = value.serviceAccount;
      this._subnetwork = value.subnetwork;
      this._tags = value.tags;
      this._zone = value.zone;
    }
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // enable_ip_masq_agent - computed: true, optional: true, required: false
  private _enableIpMasqAgent?: boolean | cdktf.IResolvable; 
  public get enableIpMasqAgent() {
    return this.getBooleanAttribute('enable_ip_masq_agent');
  }
  public set enableIpMasqAgent(value: boolean | cdktf.IResolvable) {
    this._enableIpMasqAgent = value;
  }
  public resetEnableIpMasqAgent() {
    this._enableIpMasqAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpMasqAgentInput() {
    return this._enableIpMasqAgent;
  }

  // ip_allocation_policy - computed: true, optional: true, required: false
  private _ipAllocationPolicy = new ComposerEnvironmentConfigNodeConfigIpAllocationPolicyList(this, "ip_allocation_policy", false);
  public get ipAllocationPolicy() {
    return this._ipAllocationPolicy;
  }
  public putIpAllocationPolicy(value: ComposerEnvironmentConfigNodeConfigIpAllocationPolicy[] | cdktf.IResolvable) {
    this._ipAllocationPolicy.internalValue = value;
  }
  public resetIpAllocationPolicy() {
    this._ipAllocationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllocationPolicyInput() {
    return this._ipAllocationPolicy.internalValue;
  }

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // oauth_scopes - computed: true, optional: true, required: false
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('oauth_scopes'));
  }
  public set oauthScopes(value: string[]) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes;
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

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface ComposerEnvironmentConfigPrivateEnvironmentConfig {
  /**
  * When specified, the environment will use Private Service Connect instead of VPC peerings to connect to Cloud SQL in the Tenant Project, and the PSC endpoint in the Customer Project will use an IP address from this subnetwork. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cloud_composer_connection_subnetwork ComposerEnvironment#cloud_composer_connection_subnetwork}
  */
  readonly cloudComposerConnectionSubnetwork?: string;
  /**
  * The CIDR block from which IP range for Cloud Composer Network in tenant project will be reserved. Needs to be disjoint from private_cluster_config.master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cloud_composer_network_ipv4_cidr_block ComposerEnvironment#cloud_composer_network_ipv4_cidr_block}
  */
  readonly cloudComposerNetworkIpv4CidrBlock?: string;
  /**
  * The CIDR block from which IP range in tenant project will be reserved for Cloud SQL. Needs to be disjoint from web_server_ipv4_cidr_block.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cloud_sql_ipv4_cidr_block ComposerEnvironment#cloud_sql_ipv4_cidr_block}
  */
  readonly cloudSqlIpv4CidrBlock?: string;
  /**
  * If true, access to the public endpoint of the GKE cluster is denied. If this field is set to true, ip_allocation_policy.use_ip_aliases must be set to true for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#enable_private_endpoint ComposerEnvironment#enable_private_endpoint}
  */
  readonly enablePrivateEndpoint?: boolean | cdktf.IResolvable;
  /**
  * When enabled, IPs from public (non-RFC1918) ranges can be used for ip_allocation_policy.cluster_ipv4_cidr_block and ip_allocation_policy.service_ipv4_cidr_block.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#enable_privately_used_public_ips ComposerEnvironment#enable_privately_used_public_ips}
  */
  readonly enablePrivatelyUsedPublicIps?: boolean | cdktf.IResolvable;
  /**
  * The IP range in CIDR notation to use for the hosted master network. This range is used for assigning internal IP addresses to the cluster master or set of masters and to the internal load balancer virtual IP. This range must not overlap with any other ranges in use within the cluster's network. If left blank, the default value of '172.16.0.0/28' is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#master_ipv4_cidr_block ComposerEnvironment#master_ipv4_cidr_block}
  */
  readonly masterIpv4CidrBlock?: string;
  /**
  * The CIDR block from which IP range for web server will be reserved. Needs to be disjoint from master_ipv4_cidr_block and cloud_sql_ipv4_cidr_block. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#web_server_ipv4_cidr_block ComposerEnvironment#web_server_ipv4_cidr_block}
  */
  readonly webServerIpv4CidrBlock?: string;
}

export function composerEnvironmentConfigPrivateEnvironmentConfigToTerraform(struct?: ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference | ComposerEnvironmentConfigPrivateEnvironmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_composer_connection_subnetwork: cdktf.stringToTerraform(struct!.cloudComposerConnectionSubnetwork),
    cloud_composer_network_ipv4_cidr_block: cdktf.stringToTerraform(struct!.cloudComposerNetworkIpv4CidrBlock),
    cloud_sql_ipv4_cidr_block: cdktf.stringToTerraform(struct!.cloudSqlIpv4CidrBlock),
    enable_private_endpoint: cdktf.booleanToTerraform(struct!.enablePrivateEndpoint),
    enable_privately_used_public_ips: cdktf.booleanToTerraform(struct!.enablePrivatelyUsedPublicIps),
    master_ipv4_cidr_block: cdktf.stringToTerraform(struct!.masterIpv4CidrBlock),
    web_server_ipv4_cidr_block: cdktf.stringToTerraform(struct!.webServerIpv4CidrBlock),
  }
}

export class ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComposerEnvironmentConfigPrivateEnvironmentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudComposerConnectionSubnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudComposerConnectionSubnetwork = this._cloudComposerConnectionSubnetwork;
    }
    if (this._cloudComposerNetworkIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudComposerNetworkIpv4CidrBlock = this._cloudComposerNetworkIpv4CidrBlock;
    }
    if (this._cloudSqlIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudSqlIpv4CidrBlock = this._cloudSqlIpv4CidrBlock;
    }
    if (this._enablePrivateEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateEndpoint = this._enablePrivateEndpoint;
    }
    if (this._enablePrivatelyUsedPublicIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivatelyUsedPublicIps = this._enablePrivatelyUsedPublicIps;
    }
    if (this._masterIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterIpv4CidrBlock = this._masterIpv4CidrBlock;
    }
    if (this._webServerIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.webServerIpv4CidrBlock = this._webServerIpv4CidrBlock;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComposerEnvironmentConfigPrivateEnvironmentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudComposerConnectionSubnetwork = undefined;
      this._cloudComposerNetworkIpv4CidrBlock = undefined;
      this._cloudSqlIpv4CidrBlock = undefined;
      this._enablePrivateEndpoint = undefined;
      this._enablePrivatelyUsedPublicIps = undefined;
      this._masterIpv4CidrBlock = undefined;
      this._webServerIpv4CidrBlock = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudComposerConnectionSubnetwork = value.cloudComposerConnectionSubnetwork;
      this._cloudComposerNetworkIpv4CidrBlock = value.cloudComposerNetworkIpv4CidrBlock;
      this._cloudSqlIpv4CidrBlock = value.cloudSqlIpv4CidrBlock;
      this._enablePrivateEndpoint = value.enablePrivateEndpoint;
      this._enablePrivatelyUsedPublicIps = value.enablePrivatelyUsedPublicIps;
      this._masterIpv4CidrBlock = value.masterIpv4CidrBlock;
      this._webServerIpv4CidrBlock = value.webServerIpv4CidrBlock;
    }
  }

  // cloud_composer_connection_subnetwork - computed: true, optional: true, required: false
  private _cloudComposerConnectionSubnetwork?: string; 
  public get cloudComposerConnectionSubnetwork() {
    return this.getStringAttribute('cloud_composer_connection_subnetwork');
  }
  public set cloudComposerConnectionSubnetwork(value: string) {
    this._cloudComposerConnectionSubnetwork = value;
  }
  public resetCloudComposerConnectionSubnetwork() {
    this._cloudComposerConnectionSubnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudComposerConnectionSubnetworkInput() {
    return this._cloudComposerConnectionSubnetwork;
  }

  // cloud_composer_network_ipv4_cidr_block - computed: true, optional: true, required: false
  private _cloudComposerNetworkIpv4CidrBlock?: string; 
  public get cloudComposerNetworkIpv4CidrBlock() {
    return this.getStringAttribute('cloud_composer_network_ipv4_cidr_block');
  }
  public set cloudComposerNetworkIpv4CidrBlock(value: string) {
    this._cloudComposerNetworkIpv4CidrBlock = value;
  }
  public resetCloudComposerNetworkIpv4CidrBlock() {
    this._cloudComposerNetworkIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudComposerNetworkIpv4CidrBlockInput() {
    return this._cloudComposerNetworkIpv4CidrBlock;
  }

  // cloud_sql_ipv4_cidr_block - computed: true, optional: true, required: false
  private _cloudSqlIpv4CidrBlock?: string; 
  public get cloudSqlIpv4CidrBlock() {
    return this.getStringAttribute('cloud_sql_ipv4_cidr_block');
  }
  public set cloudSqlIpv4CidrBlock(value: string) {
    this._cloudSqlIpv4CidrBlock = value;
  }
  public resetCloudSqlIpv4CidrBlock() {
    this._cloudSqlIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSqlIpv4CidrBlockInput() {
    return this._cloudSqlIpv4CidrBlock;
  }

  // enable_private_endpoint - computed: false, optional: true, required: false
  private _enablePrivateEndpoint?: boolean | cdktf.IResolvable; 
  public get enablePrivateEndpoint() {
    return this.getBooleanAttribute('enable_private_endpoint');
  }
  public set enablePrivateEndpoint(value: boolean | cdktf.IResolvable) {
    this._enablePrivateEndpoint = value;
  }
  public resetEnablePrivateEndpoint() {
    this._enablePrivateEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateEndpointInput() {
    return this._enablePrivateEndpoint;
  }

  // enable_privately_used_public_ips - computed: true, optional: true, required: false
  private _enablePrivatelyUsedPublicIps?: boolean | cdktf.IResolvable; 
  public get enablePrivatelyUsedPublicIps() {
    return this.getBooleanAttribute('enable_privately_used_public_ips');
  }
  public set enablePrivatelyUsedPublicIps(value: boolean | cdktf.IResolvable) {
    this._enablePrivatelyUsedPublicIps = value;
  }
  public resetEnablePrivatelyUsedPublicIps() {
    this._enablePrivatelyUsedPublicIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivatelyUsedPublicIpsInput() {
    return this._enablePrivatelyUsedPublicIps;
  }

  // master_ipv4_cidr_block - computed: true, optional: true, required: false
  private _masterIpv4CidrBlock?: string; 
  public get masterIpv4CidrBlock() {
    return this.getStringAttribute('master_ipv4_cidr_block');
  }
  public set masterIpv4CidrBlock(value: string) {
    this._masterIpv4CidrBlock = value;
  }
  public resetMasterIpv4CidrBlock() {
    this._masterIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterIpv4CidrBlockInput() {
    return this._masterIpv4CidrBlock;
  }

  // web_server_ipv4_cidr_block - computed: true, optional: true, required: false
  private _webServerIpv4CidrBlock?: string; 
  public get webServerIpv4CidrBlock() {
    return this.getStringAttribute('web_server_ipv4_cidr_block');
  }
  public set webServerIpv4CidrBlock(value: string) {
    this._webServerIpv4CidrBlock = value;
  }
  public resetWebServerIpv4CidrBlock() {
    this._webServerIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webServerIpv4CidrBlockInput() {
    return this._webServerIpv4CidrBlock;
  }
}
export interface ComposerEnvironmentConfigSoftwareConfig {
  /**
  * Apache Airflow configuration properties to override. Property keys contain the section and property names, separated by a hyphen, for example "core-dags_are_paused_at_creation". Section names must not contain hyphens ("-"), opening square brackets ("["), or closing square brackets ("]"). The property name must not be empty and cannot contain "=" or ";". Section and property names cannot contain characters: "." Apache Airflow configuration property names must be written in snake_case. Property values can contain any character, and can be written in any lower/upper case format. Certain Apache Airflow configuration property values are blacklisted, and cannot be overridden.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#airflow_config_overrides ComposerEnvironment#airflow_config_overrides}
  */
  readonly airflowConfigOverrides?: { [key: string]: string };
  /**
  * Additional environment variables to provide to the Apache Airflow scheduler, worker, and webserver processes. Environment variable names must match the regular expression [a-zA-Z_][a-zA-Z0-9_]*. They cannot specify Apache Airflow software configuration overrides (they cannot match the regular expression AIRFLOW__[A-Z0-9_]+__[A-Z0-9_]+), and they cannot match any of the following reserved names: AIRFLOW_HOME C_FORCE_ROOT CONTAINER_NAME DAGS_FOLDER GCP_PROJECT GCS_BUCKET GKE_CLUSTER_NAME SQL_DATABASE SQL_INSTANCE SQL_PASSWORD SQL_PROJECT SQL_REGION SQL_USER.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#env_variables ComposerEnvironment#env_variables}
  */
  readonly envVariables?: { [key: string]: string };
  /**
  * The version of the software running in the environment. This encapsulates both the version of Cloud Composer functionality and the version of Apache Airflow. It must match the regular expression composer-([0-9]+(\.[0-9]+\.[0-9]+(-preview\.[0-9]+)?)?|latest)-airflow-([0-9]+(\.[0-9]+(\.[0-9]+)?)?). The Cloud Composer portion of the image version is a full semantic version, or an alias in the form of major version number or 'latest'. The Apache Airflow portion of the image version is a full semantic version that points to one of the supported Apache Airflow versions, or an alias in the form of only major or major.minor versions specified. See documentation for more details and version list.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#image_version ComposerEnvironment#image_version}
  */
  readonly imageVersion?: string;
  /**
  * Custom Python Package Index (PyPI) packages to be installed in the environment. Keys refer to the lowercase package name (e.g. "numpy"). Values are the lowercase extras and version specifier (e.g. "==1.12.0", "[devel,gcp_api]", "[devel]>=1.8.2, <1.9.2"). To specify a package without pinning it to a version specifier, use the empty string as the value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#pypi_packages ComposerEnvironment#pypi_packages}
  */
  readonly pypiPackages?: { [key: string]: string };
  /**
  * The major version of Python used to run the Apache Airflow scheduler, worker, and webserver processes. Can be set to '2' or '3'. If not specified, the default is '2'. Cannot be updated. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*. Environments in newer versions always use Python major version 3.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#python_version ComposerEnvironment#python_version}
  */
  readonly pythonVersion?: string;
  /**
  * The number of schedulers for Airflow. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-2.*.*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#scheduler_count ComposerEnvironment#scheduler_count}
  */
  readonly schedulerCount?: number;
}

export function composerEnvironmentConfigSoftwareConfigToTerraform(struct?: ComposerEnvironmentConfigSoftwareConfigOutputReference | ComposerEnvironmentConfigSoftwareConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    airflow_config_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.airflowConfigOverrides),
    env_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envVariables),
    image_version: cdktf.stringToTerraform(struct!.imageVersion),
    pypi_packages: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.pypiPackages),
    python_version: cdktf.stringToTerraform(struct!.pythonVersion),
    scheduler_count: cdktf.numberToTerraform(struct!.schedulerCount),
  }
}

export class ComposerEnvironmentConfigSoftwareConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComposerEnvironmentConfigSoftwareConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._airflowConfigOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.airflowConfigOverrides = this._airflowConfigOverrides;
    }
    if (this._envVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.envVariables = this._envVariables;
    }
    if (this._imageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageVersion = this._imageVersion;
    }
    if (this._pypiPackages !== undefined) {
      hasAnyValues = true;
      internalValueResult.pypiPackages = this._pypiPackages;
    }
    if (this._pythonVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.pythonVersion = this._pythonVersion;
    }
    if (this._schedulerCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerCount = this._schedulerCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComposerEnvironmentConfigSoftwareConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._airflowConfigOverrides = undefined;
      this._envVariables = undefined;
      this._imageVersion = undefined;
      this._pypiPackages = undefined;
      this._pythonVersion = undefined;
      this._schedulerCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._airflowConfigOverrides = value.airflowConfigOverrides;
      this._envVariables = value.envVariables;
      this._imageVersion = value.imageVersion;
      this._pypiPackages = value.pypiPackages;
      this._pythonVersion = value.pythonVersion;
      this._schedulerCount = value.schedulerCount;
    }
  }

  // airflow_config_overrides - computed: false, optional: true, required: false
  private _airflowConfigOverrides?: { [key: string]: string }; 
  public get airflowConfigOverrides() {
    return this.getStringMapAttribute('airflow_config_overrides');
  }
  public set airflowConfigOverrides(value: { [key: string]: string }) {
    this._airflowConfigOverrides = value;
  }
  public resetAirflowConfigOverrides() {
    this._airflowConfigOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get airflowConfigOverridesInput() {
    return this._airflowConfigOverrides;
  }

  // env_variables - computed: false, optional: true, required: false
  private _envVariables?: { [key: string]: string }; 
  public get envVariables() {
    return this.getStringMapAttribute('env_variables');
  }
  public set envVariables(value: { [key: string]: string }) {
    this._envVariables = value;
  }
  public resetEnvVariables() {
    this._envVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVariablesInput() {
    return this._envVariables;
  }

  // image_version - computed: true, optional: true, required: false
  private _imageVersion?: string; 
  public get imageVersion() {
    return this.getStringAttribute('image_version');
  }
  public set imageVersion(value: string) {
    this._imageVersion = value;
  }
  public resetImageVersion() {
    this._imageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageVersionInput() {
    return this._imageVersion;
  }

  // pypi_packages - computed: false, optional: true, required: false
  private _pypiPackages?: { [key: string]: string }; 
  public get pypiPackages() {
    return this.getStringMapAttribute('pypi_packages');
  }
  public set pypiPackages(value: { [key: string]: string }) {
    this._pypiPackages = value;
  }
  public resetPypiPackages() {
    this._pypiPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pypiPackagesInput() {
    return this._pypiPackages;
  }

  // python_version - computed: true, optional: true, required: false
  private _pythonVersion?: string; 
  public get pythonVersion() {
    return this.getStringAttribute('python_version');
  }
  public set pythonVersion(value: string) {
    this._pythonVersion = value;
  }
  public resetPythonVersion() {
    this._pythonVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonVersionInput() {
    return this._pythonVersion;
  }

  // scheduler_count - computed: true, optional: true, required: false
  private _schedulerCount?: number; 
  public get schedulerCount() {
    return this.getNumberAttribute('scheduler_count');
  }
  public set schedulerCount(value: number) {
    this._schedulerCount = value;
  }
  public resetSchedulerCount() {
    this._schedulerCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerCountInput() {
    return this._schedulerCount;
  }
}
export interface ComposerEnvironmentConfigWebServerConfig {
  /**
  * Optional. Machine type on which Airflow web server is running. It has to be one of: composer-n1-webserver-2, composer-n1-webserver-4 or composer-n1-webserver-8. If not specified, composer-n1-webserver-2 will be used. Value custom is returned only in response, if Airflow web server parameters were manually changed to a non-standard values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#machine_type ComposerEnvironment#machine_type}
  */
  readonly machineType: string;
}

export function composerEnvironmentConfigWebServerConfigToTerraform(struct?: ComposerEnvironmentConfigWebServerConfigOutputReference | ComposerEnvironmentConfigWebServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_type: cdktf.stringToTerraform(struct!.machineType),
  }
}

export class ComposerEnvironmentConfigWebServerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComposerEnvironmentConfigWebServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComposerEnvironmentConfigWebServerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._machineType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._machineType = value.machineType;
    }
  }

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }
}
export interface ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange {
  /**
  * A description of this ip range.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#description ComposerEnvironment#description}
  */
  readonly description?: string;
  /**
  * IP address or range, defined using CIDR notation, of requests that this rule applies to. Examples: 192.168.1.1 or 192.168.0.0/16 or 2001:db8::/32 or 2001:0db8:0000:0042:0000:8a2e:0370:7334. IP range prefixes should be properly truncated. For example, 1.2.3.4/24 should be truncated to 1.2.3.0/24. Similarly, for IPv6, 2001:db8::1/32 should be truncated to 2001:db8::/32.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#value ComposerEnvironment#value}
  */
  readonly value: string;
}

export function composerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeToTerraform(struct?: ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList extends cdktf.ComplexList {
  public internalValue? : ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange[] | cdktf.IResolvable

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
  public get(index: number): ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference {
    return new ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComposerEnvironmentConfigWebServerNetworkAccessControl {
  /**
  * allowed_ip_range block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#allowed_ip_range ComposerEnvironment#allowed_ip_range}
  */
  readonly allowedIpRange?: ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange[] | cdktf.IResolvable;
}

export function composerEnvironmentConfigWebServerNetworkAccessControlToTerraform(struct?: ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference | ComposerEnvironmentConfigWebServerNetworkAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ip_range: cdktf.listMapper(composerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeToTerraform, true)(struct!.allowedIpRange),
  }
}

export class ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComposerEnvironmentConfigWebServerNetworkAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedIpRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIpRange = this._allowedIpRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComposerEnvironmentConfigWebServerNetworkAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedIpRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedIpRange.internalValue = value.allowedIpRange;
    }
  }

  // allowed_ip_range - computed: false, optional: true, required: false
  private _allowedIpRange = new ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRangeList(this, "allowed_ip_range", true);
  public get allowedIpRange() {
    return this._allowedIpRange;
  }
  public putAllowedIpRange(value: ComposerEnvironmentConfigWebServerNetworkAccessControlAllowedIpRange[] | cdktf.IResolvable) {
    this._allowedIpRange.internalValue = value;
  }
  public resetAllowedIpRange() {
    this._allowedIpRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpRangeInput() {
    return this._allowedIpRange.internalValue;
  }
}
export interface ComposerEnvironmentConfigWorkloadsConfigScheduler {
  /**
  * The number of schedulers.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#count ComposerEnvironment#count}
  */
  readonly count?: number;
  /**
  * CPU request and limit for a single Airflow scheduler replica
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cpu ComposerEnvironment#cpu}
  */
  readonly cpu?: number;
  /**
  * Memory (GB) request and limit for a single Airflow scheduler replica.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#memory_gb ComposerEnvironment#memory_gb}
  */
  readonly memoryGb?: number;
  /**
  * Storage (GB) request and limit for a single Airflow scheduler replica.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#storage_gb ComposerEnvironment#storage_gb}
  */
  readonly storageGb?: number;
}

export function composerEnvironmentConfigWorkloadsConfigSchedulerToTerraform(struct?: ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference | ComposerEnvironmentConfigWorkloadsConfigScheduler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    cpu: cdktf.numberToTerraform(struct!.cpu),
    memory_gb: cdktf.numberToTerraform(struct!.memoryGb),
    storage_gb: cdktf.numberToTerraform(struct!.storageGb),
  }
}

export class ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComposerEnvironmentConfigWorkloadsConfigScheduler | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memoryGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryGb = this._memoryGb;
    }
    if (this._storageGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageGb = this._storageGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComposerEnvironmentConfigWorkloadsConfigScheduler | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._cpu = undefined;
      this._memoryGb = undefined;
      this._storageGb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._cpu = value.cpu;
      this._memoryGb = value.memoryGb;
      this._storageGb = value.storageGb;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory_gb - computed: false, optional: true, required: false
  private _memoryGb?: number; 
  public get memoryGb() {
    return this.getNumberAttribute('memory_gb');
  }
  public set memoryGb(value: number) {
    this._memoryGb = value;
  }
  public resetMemoryGb() {
    this._memoryGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryGbInput() {
    return this._memoryGb;
  }

  // storage_gb - computed: false, optional: true, required: false
  private _storageGb?: number; 
  public get storageGb() {
    return this.getNumberAttribute('storage_gb');
  }
  public set storageGb(value: number) {
    this._storageGb = value;
  }
  public resetStorageGb() {
    this._storageGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageGbInput() {
    return this._storageGb;
  }
}
export interface ComposerEnvironmentConfigWorkloadsConfigWebServer {
  /**
  * CPU request and limit for Airflow web server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cpu ComposerEnvironment#cpu}
  */
  readonly cpu?: number;
  /**
  * Memory (GB) request and limit for Airflow web server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#memory_gb ComposerEnvironment#memory_gb}
  */
  readonly memoryGb?: number;
  /**
  * Storage (GB) request and limit for Airflow web server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#storage_gb ComposerEnvironment#storage_gb}
  */
  readonly storageGb?: number;
}

export function composerEnvironmentConfigWorkloadsConfigWebServerToTerraform(struct?: ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference | ComposerEnvironmentConfigWorkloadsConfigWebServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    memory_gb: cdktf.numberToTerraform(struct!.memoryGb),
    storage_gb: cdktf.numberToTerraform(struct!.storageGb),
  }
}

export class ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComposerEnvironmentConfigWorkloadsConfigWebServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memoryGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryGb = this._memoryGb;
    }
    if (this._storageGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageGb = this._storageGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComposerEnvironmentConfigWorkloadsConfigWebServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memoryGb = undefined;
      this._storageGb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memoryGb = value.memoryGb;
      this._storageGb = value.storageGb;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory_gb - computed: false, optional: true, required: false
  private _memoryGb?: number; 
  public get memoryGb() {
    return this.getNumberAttribute('memory_gb');
  }
  public set memoryGb(value: number) {
    this._memoryGb = value;
  }
  public resetMemoryGb() {
    this._memoryGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryGbInput() {
    return this._memoryGb;
  }

  // storage_gb - computed: false, optional: true, required: false
  private _storageGb?: number; 
  public get storageGb() {
    return this.getNumberAttribute('storage_gb');
  }
  public set storageGb(value: number) {
    this._storageGb = value;
  }
  public resetStorageGb() {
    this._storageGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageGbInput() {
    return this._storageGb;
  }
}
export interface ComposerEnvironmentConfigWorkloadsConfigWorker {
  /**
  * CPU request and limit for a single Airflow worker replica.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#cpu ComposerEnvironment#cpu}
  */
  readonly cpu?: number;
  /**
  * Maximum number of workers for autoscaling.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#max_count ComposerEnvironment#max_count}
  */
  readonly maxCount?: number;
  /**
  * Memory (GB) request and limit for a single Airflow worker replica.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#memory_gb ComposerEnvironment#memory_gb}
  */
  readonly memoryGb?: number;
  /**
  * Minimum number of workers for autoscaling.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#min_count ComposerEnvironment#min_count}
  */
  readonly minCount?: number;
  /**
  * Storage (GB) request and limit for a single Airflow worker replica.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#storage_gb ComposerEnvironment#storage_gb}
  */
  readonly storageGb?: number;
}

export function composerEnvironmentConfigWorkloadsConfigWorkerToTerraform(struct?: ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference | ComposerEnvironmentConfigWorkloadsConfigWorker): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.numberToTerraform(struct!.cpu),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    memory_gb: cdktf.numberToTerraform(struct!.memoryGb),
    min_count: cdktf.numberToTerraform(struct!.minCount),
    storage_gb: cdktf.numberToTerraform(struct!.storageGb),
  }
}

export class ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComposerEnvironmentConfigWorkloadsConfigWorker | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._memoryGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryGb = this._memoryGb;
    }
    if (this._minCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCount = this._minCount;
    }
    if (this._storageGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageGb = this._storageGb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComposerEnvironmentConfigWorkloadsConfigWorker | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._maxCount = undefined;
      this._memoryGb = undefined;
      this._minCount = undefined;
      this._storageGb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._maxCount = value.maxCount;
      this._memoryGb = value.memoryGb;
      this._minCount = value.minCount;
      this._storageGb = value.storageGb;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // memory_gb - computed: false, optional: true, required: false
  private _memoryGb?: number; 
  public get memoryGb() {
    return this.getNumberAttribute('memory_gb');
  }
  public set memoryGb(value: number) {
    this._memoryGb = value;
  }
  public resetMemoryGb() {
    this._memoryGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryGbInput() {
    return this._memoryGb;
  }

  // min_count - computed: false, optional: true, required: false
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  public resetMinCount() {
    this._minCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
  }

  // storage_gb - computed: false, optional: true, required: false
  private _storageGb?: number; 
  public get storageGb() {
    return this.getNumberAttribute('storage_gb');
  }
  public set storageGb(value: number) {
    this._storageGb = value;
  }
  public resetStorageGb() {
    this._storageGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageGbInput() {
    return this._storageGb;
  }
}
export interface ComposerEnvironmentConfigWorkloadsConfig {
  /**
  * scheduler block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#scheduler ComposerEnvironment#scheduler}
  */
  readonly scheduler?: ComposerEnvironmentConfigWorkloadsConfigScheduler;
  /**
  * web_server block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#web_server ComposerEnvironment#web_server}
  */
  readonly webServer?: ComposerEnvironmentConfigWorkloadsConfigWebServer;
  /**
  * worker block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#worker ComposerEnvironment#worker}
  */
  readonly worker?: ComposerEnvironmentConfigWorkloadsConfigWorker;
}

export function composerEnvironmentConfigWorkloadsConfigToTerraform(struct?: ComposerEnvironmentConfigWorkloadsConfigOutputReference | ComposerEnvironmentConfigWorkloadsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scheduler: composerEnvironmentConfigWorkloadsConfigSchedulerToTerraform(struct!.scheduler),
    web_server: composerEnvironmentConfigWorkloadsConfigWebServerToTerraform(struct!.webServer),
    worker: composerEnvironmentConfigWorkloadsConfigWorkerToTerraform(struct!.worker),
  }
}

export class ComposerEnvironmentConfigWorkloadsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComposerEnvironmentConfigWorkloadsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scheduler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduler = this._scheduler?.internalValue;
    }
    if (this._webServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webServer = this._webServer?.internalValue;
    }
    if (this._worker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.worker = this._worker?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComposerEnvironmentConfigWorkloadsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scheduler.internalValue = undefined;
      this._webServer.internalValue = undefined;
      this._worker.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scheduler.internalValue = value.scheduler;
      this._webServer.internalValue = value.webServer;
      this._worker.internalValue = value.worker;
    }
  }

  // scheduler - computed: false, optional: true, required: false
  private _scheduler = new ComposerEnvironmentConfigWorkloadsConfigSchedulerOutputReference(this, "scheduler");
  public get scheduler() {
    return this._scheduler;
  }
  public putScheduler(value: ComposerEnvironmentConfigWorkloadsConfigScheduler) {
    this._scheduler.internalValue = value;
  }
  public resetScheduler() {
    this._scheduler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerInput() {
    return this._scheduler.internalValue;
  }

  // web_server - computed: false, optional: true, required: false
  private _webServer = new ComposerEnvironmentConfigWorkloadsConfigWebServerOutputReference(this, "web_server");
  public get webServer() {
    return this._webServer;
  }
  public putWebServer(value: ComposerEnvironmentConfigWorkloadsConfigWebServer) {
    this._webServer.internalValue = value;
  }
  public resetWebServer() {
    this._webServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webServerInput() {
    return this._webServer.internalValue;
  }

  // worker - computed: false, optional: true, required: false
  private _worker = new ComposerEnvironmentConfigWorkloadsConfigWorkerOutputReference(this, "worker");
  public get worker() {
    return this._worker;
  }
  public putWorker(value: ComposerEnvironmentConfigWorkloadsConfigWorker) {
    this._worker.internalValue = value;
  }
  public resetWorker() {
    this._worker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerInput() {
    return this._worker.internalValue;
  }
}
export interface ComposerEnvironmentConfigA {
  /**
  * The size of the Cloud Composer environment. This field is supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#environment_size ComposerEnvironment#environment_size}
  */
  readonly environmentSize?: string;
  /**
  * The number of nodes in the Kubernetes Engine cluster that will be used to run this environment. This field is supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#node_count ComposerEnvironment#node_count}
  */
  readonly nodeCount?: number;
  /**
  * database_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#database_config ComposerEnvironment#database_config}
  */
  readonly databaseConfig?: ComposerEnvironmentConfigDatabaseConfig;
  /**
  * encryption_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#encryption_config ComposerEnvironment#encryption_config}
  */
  readonly encryptionConfig?: ComposerEnvironmentConfigEncryptionConfig;
  /**
  * maintenance_window block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#maintenance_window ComposerEnvironment#maintenance_window}
  */
  readonly maintenanceWindow?: ComposerEnvironmentConfigMaintenanceWindow;
  /**
  * master_authorized_networks_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#master_authorized_networks_config ComposerEnvironment#master_authorized_networks_config}
  */
  readonly masterAuthorizedNetworksConfig?: ComposerEnvironmentConfigMasterAuthorizedNetworksConfig;
  /**
  * node_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#node_config ComposerEnvironment#node_config}
  */
  readonly nodeConfig?: ComposerEnvironmentConfigNodeConfig;
  /**
  * private_environment_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#private_environment_config ComposerEnvironment#private_environment_config}
  */
  readonly privateEnvironmentConfig?: ComposerEnvironmentConfigPrivateEnvironmentConfig;
  /**
  * software_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#software_config ComposerEnvironment#software_config}
  */
  readonly softwareConfig?: ComposerEnvironmentConfigSoftwareConfig;
  /**
  * web_server_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#web_server_config ComposerEnvironment#web_server_config}
  */
  readonly webServerConfig?: ComposerEnvironmentConfigWebServerConfig;
  /**
  * web_server_network_access_control block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#web_server_network_access_control ComposerEnvironment#web_server_network_access_control}
  */
  readonly webServerNetworkAccessControl?: ComposerEnvironmentConfigWebServerNetworkAccessControl;
  /**
  * workloads_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#workloads_config ComposerEnvironment#workloads_config}
  */
  readonly workloadsConfig?: ComposerEnvironmentConfigWorkloadsConfig;
}

export function composerEnvironmentConfigAToTerraform(struct?: ComposerEnvironmentConfigAOutputReference | ComposerEnvironmentConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment_size: cdktf.stringToTerraform(struct!.environmentSize),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    database_config: composerEnvironmentConfigDatabaseConfigToTerraform(struct!.databaseConfig),
    encryption_config: composerEnvironmentConfigEncryptionConfigToTerraform(struct!.encryptionConfig),
    maintenance_window: composerEnvironmentConfigMaintenanceWindowToTerraform(struct!.maintenanceWindow),
    master_authorized_networks_config: composerEnvironmentConfigMasterAuthorizedNetworksConfigToTerraform(struct!.masterAuthorizedNetworksConfig),
    node_config: composerEnvironmentConfigNodeConfigToTerraform(struct!.nodeConfig),
    private_environment_config: composerEnvironmentConfigPrivateEnvironmentConfigToTerraform(struct!.privateEnvironmentConfig),
    software_config: composerEnvironmentConfigSoftwareConfigToTerraform(struct!.softwareConfig),
    web_server_config: composerEnvironmentConfigWebServerConfigToTerraform(struct!.webServerConfig),
    web_server_network_access_control: composerEnvironmentConfigWebServerNetworkAccessControlToTerraform(struct!.webServerNetworkAccessControl),
    workloads_config: composerEnvironmentConfigWorkloadsConfigToTerraform(struct!.workloadsConfig),
  }
}

export class ComposerEnvironmentConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComposerEnvironmentConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environmentSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentSize = this._environmentSize;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._databaseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseConfig = this._databaseConfig?.internalValue;
    }
    if (this._encryptionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionConfig = this._encryptionConfig?.internalValue;
    }
    if (this._maintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow?.internalValue;
    }
    if (this._masterAuthorizedNetworksConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterAuthorizedNetworksConfig = this._masterAuthorizedNetworksConfig?.internalValue;
    }
    if (this._nodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeConfig = this._nodeConfig?.internalValue;
    }
    if (this._privateEnvironmentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEnvironmentConfig = this._privateEnvironmentConfig?.internalValue;
    }
    if (this._softwareConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.softwareConfig = this._softwareConfig?.internalValue;
    }
    if (this._webServerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webServerConfig = this._webServerConfig?.internalValue;
    }
    if (this._webServerNetworkAccessControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webServerNetworkAccessControl = this._webServerNetworkAccessControl?.internalValue;
    }
    if (this._workloadsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadsConfig = this._workloadsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComposerEnvironmentConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._environmentSize = undefined;
      this._nodeCount = undefined;
      this._databaseConfig.internalValue = undefined;
      this._encryptionConfig.internalValue = undefined;
      this._maintenanceWindow.internalValue = undefined;
      this._masterAuthorizedNetworksConfig.internalValue = undefined;
      this._nodeConfig.internalValue = undefined;
      this._privateEnvironmentConfig.internalValue = undefined;
      this._softwareConfig.internalValue = undefined;
      this._webServerConfig.internalValue = undefined;
      this._webServerNetworkAccessControl.internalValue = undefined;
      this._workloadsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._environmentSize = value.environmentSize;
      this._nodeCount = value.nodeCount;
      this._databaseConfig.internalValue = value.databaseConfig;
      this._encryptionConfig.internalValue = value.encryptionConfig;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
      this._masterAuthorizedNetworksConfig.internalValue = value.masterAuthorizedNetworksConfig;
      this._nodeConfig.internalValue = value.nodeConfig;
      this._privateEnvironmentConfig.internalValue = value.privateEnvironmentConfig;
      this._softwareConfig.internalValue = value.softwareConfig;
      this._webServerConfig.internalValue = value.webServerConfig;
      this._webServerNetworkAccessControl.internalValue = value.webServerNetworkAccessControl;
      this._workloadsConfig.internalValue = value.workloadsConfig;
    }
  }

  // airflow_uri - computed: true, optional: false, required: false
  public get airflowUri() {
    return this.getStringAttribute('airflow_uri');
  }

  // dag_gcs_prefix - computed: true, optional: false, required: false
  public get dagGcsPrefix() {
    return this.getStringAttribute('dag_gcs_prefix');
  }

  // environment_size - computed: true, optional: true, required: false
  private _environmentSize?: string; 
  public get environmentSize() {
    return this.getStringAttribute('environment_size');
  }
  public set environmentSize(value: string) {
    this._environmentSize = value;
  }
  public resetEnvironmentSize() {
    this._environmentSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentSizeInput() {
    return this._environmentSize;
  }

  // gke_cluster - computed: true, optional: false, required: false
  public get gkeCluster() {
    return this.getStringAttribute('gke_cluster');
  }

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // database_config - computed: false, optional: true, required: false
  private _databaseConfig = new ComposerEnvironmentConfigDatabaseConfigOutputReference(this, "database_config");
  public get databaseConfig() {
    return this._databaseConfig;
  }
  public putDatabaseConfig(value: ComposerEnvironmentConfigDatabaseConfig) {
    this._databaseConfig.internalValue = value;
  }
  public resetDatabaseConfig() {
    this._databaseConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseConfigInput() {
    return this._databaseConfig.internalValue;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new ComposerEnvironmentConfigEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: ComposerEnvironmentConfigEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new ComposerEnvironmentConfigMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: ComposerEnvironmentConfigMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // master_authorized_networks_config - computed: false, optional: true, required: false
  private _masterAuthorizedNetworksConfig = new ComposerEnvironmentConfigMasterAuthorizedNetworksConfigOutputReference(this, "master_authorized_networks_config");
  public get masterAuthorizedNetworksConfig() {
    return this._masterAuthorizedNetworksConfig;
  }
  public putMasterAuthorizedNetworksConfig(value: ComposerEnvironmentConfigMasterAuthorizedNetworksConfig) {
    this._masterAuthorizedNetworksConfig.internalValue = value;
  }
  public resetMasterAuthorizedNetworksConfig() {
    this._masterAuthorizedNetworksConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterAuthorizedNetworksConfigInput() {
    return this._masterAuthorizedNetworksConfig.internalValue;
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig = new ComposerEnvironmentConfigNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: ComposerEnvironmentConfigNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  public resetNodeConfig() {
    this._nodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // private_environment_config - computed: false, optional: true, required: false
  private _privateEnvironmentConfig = new ComposerEnvironmentConfigPrivateEnvironmentConfigOutputReference(this, "private_environment_config");
  public get privateEnvironmentConfig() {
    return this._privateEnvironmentConfig;
  }
  public putPrivateEnvironmentConfig(value: ComposerEnvironmentConfigPrivateEnvironmentConfig) {
    this._privateEnvironmentConfig.internalValue = value;
  }
  public resetPrivateEnvironmentConfig() {
    this._privateEnvironmentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEnvironmentConfigInput() {
    return this._privateEnvironmentConfig.internalValue;
  }

  // software_config - computed: false, optional: true, required: false
  private _softwareConfig = new ComposerEnvironmentConfigSoftwareConfigOutputReference(this, "software_config");
  public get softwareConfig() {
    return this._softwareConfig;
  }
  public putSoftwareConfig(value: ComposerEnvironmentConfigSoftwareConfig) {
    this._softwareConfig.internalValue = value;
  }
  public resetSoftwareConfig() {
    this._softwareConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softwareConfigInput() {
    return this._softwareConfig.internalValue;
  }

  // web_server_config - computed: false, optional: true, required: false
  private _webServerConfig = new ComposerEnvironmentConfigWebServerConfigOutputReference(this, "web_server_config");
  public get webServerConfig() {
    return this._webServerConfig;
  }
  public putWebServerConfig(value: ComposerEnvironmentConfigWebServerConfig) {
    this._webServerConfig.internalValue = value;
  }
  public resetWebServerConfig() {
    this._webServerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webServerConfigInput() {
    return this._webServerConfig.internalValue;
  }

  // web_server_network_access_control - computed: false, optional: true, required: false
  private _webServerNetworkAccessControl = new ComposerEnvironmentConfigWebServerNetworkAccessControlOutputReference(this, "web_server_network_access_control");
  public get webServerNetworkAccessControl() {
    return this._webServerNetworkAccessControl;
  }
  public putWebServerNetworkAccessControl(value: ComposerEnvironmentConfigWebServerNetworkAccessControl) {
    this._webServerNetworkAccessControl.internalValue = value;
  }
  public resetWebServerNetworkAccessControl() {
    this._webServerNetworkAccessControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webServerNetworkAccessControlInput() {
    return this._webServerNetworkAccessControl.internalValue;
  }

  // workloads_config - computed: false, optional: true, required: false
  private _workloadsConfig = new ComposerEnvironmentConfigWorkloadsConfigOutputReference(this, "workloads_config");
  public get workloadsConfig() {
    return this._workloadsConfig;
  }
  public putWorkloadsConfig(value: ComposerEnvironmentConfigWorkloadsConfig) {
    this._workloadsConfig.internalValue = value;
  }
  public resetWorkloadsConfig() {
    this._workloadsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadsConfigInput() {
    return this._workloadsConfig.internalValue;
  }
}
export interface ComposerEnvironmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#create ComposerEnvironment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#delete ComposerEnvironment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/composer_environment#update ComposerEnvironment#update}
  */
  readonly update?: string;
}

export function composerEnvironmentTimeoutsToTerraform(struct?: ComposerEnvironmentTimeoutsOutputReference | ComposerEnvironmentTimeouts | cdktf.IResolvable): any {
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

export class ComposerEnvironmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComposerEnvironmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComposerEnvironmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/composer_environment google_composer_environment}
*/
export class ComposerEnvironment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_composer_environment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/composer_environment google_composer_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComposerEnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: ComposerEnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_composer_environment',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
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
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._config.internalValue = config.config;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // config - computed: false, optional: true, required: false
  private _config = new ComposerEnvironmentConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ComposerEnvironmentConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComposerEnvironmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComposerEnvironmentTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      config: composerEnvironmentConfigAToTerraform(this._config.internalValue),
      timeouts: composerEnvironmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
