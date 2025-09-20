/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetappBackupVaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Region in which backup is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#backup_region NetappBackupVault#backup_region}
  */
  readonly backupRegion?: string;
  /**
  * Type of the backup vault to be created. Default is IN_REGION. Possible values: ["BACKUP_VAULT_TYPE_UNSPECIFIED", "IN_REGION", "CROSS_REGION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#backup_vault_type NetappBackupVault#backup_vault_type}
  */
  readonly backupVaultType?: string;
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#description NetappBackupVault#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#id NetappBackupVault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#labels NetappBackupVault#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Location (region) of the backup vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#location NetappBackupVault#location}
  */
  readonly location: string;
  /**
  * The resource name of the backup vault. Needs to be unique per location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#name NetappBackupVault#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#project NetappBackupVault#project}
  */
  readonly project?: string;
  /**
  * backup_retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#backup_retention_policy NetappBackupVault#backup_retention_policy}
  */
  readonly backupRetentionPolicy?: NetappBackupVaultBackupRetentionPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#timeouts NetappBackupVault#timeouts}
  */
  readonly timeouts?: NetappBackupVaultTimeouts;
}
export interface NetappBackupVaultBackupRetentionPolicy {
  /**
  * Minimum retention duration in days for backups in the backup vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#backup_minimum_enforced_retention_days NetappBackupVault#backup_minimum_enforced_retention_days}
  */
  readonly backupMinimumEnforcedRetentionDays: number;
  /**
  * Indicates if the daily backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#daily_backup_immutable NetappBackupVault#daily_backup_immutable}
  */
  readonly dailyBackupImmutable?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the manual backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#manual_backup_immutable NetappBackupVault#manual_backup_immutable}
  */
  readonly manualBackupImmutable?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the monthly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#monthly_backup_immutable NetappBackupVault#monthly_backup_immutable}
  */
  readonly monthlyBackupImmutable?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the weekly backups are immutable. At least one of daily_backup_immutable, weekly_backup_immutable, monthly_backup_immutable and manual_backup_immutable must be true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#weekly_backup_immutable NetappBackupVault#weekly_backup_immutable}
  */
  readonly weeklyBackupImmutable?: boolean | cdktf.IResolvable;
}

export function netappBackupVaultBackupRetentionPolicyToTerraform(struct?: NetappBackupVaultBackupRetentionPolicyOutputReference | NetappBackupVaultBackupRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_minimum_enforced_retention_days: cdktf.numberToTerraform(struct!.backupMinimumEnforcedRetentionDays),
    daily_backup_immutable: cdktf.booleanToTerraform(struct!.dailyBackupImmutable),
    manual_backup_immutable: cdktf.booleanToTerraform(struct!.manualBackupImmutable),
    monthly_backup_immutable: cdktf.booleanToTerraform(struct!.monthlyBackupImmutable),
    weekly_backup_immutable: cdktf.booleanToTerraform(struct!.weeklyBackupImmutable),
  }
}


export function netappBackupVaultBackupRetentionPolicyToHclTerraform(struct?: NetappBackupVaultBackupRetentionPolicyOutputReference | NetappBackupVaultBackupRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_minimum_enforced_retention_days: {
      value: cdktf.numberToHclTerraform(struct!.backupMinimumEnforcedRetentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    daily_backup_immutable: {
      value: cdktf.booleanToHclTerraform(struct!.dailyBackupImmutable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manual_backup_immutable: {
      value: cdktf.booleanToHclTerraform(struct!.manualBackupImmutable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monthly_backup_immutable: {
      value: cdktf.booleanToHclTerraform(struct!.monthlyBackupImmutable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    weekly_backup_immutable: {
      value: cdktf.booleanToHclTerraform(struct!.weeklyBackupImmutable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetappBackupVaultBackupRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetappBackupVaultBackupRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupMinimumEnforcedRetentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupMinimumEnforcedRetentionDays = this._backupMinimumEnforcedRetentionDays;
    }
    if (this._dailyBackupImmutable !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailyBackupImmutable = this._dailyBackupImmutable;
    }
    if (this._manualBackupImmutable !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualBackupImmutable = this._manualBackupImmutable;
    }
    if (this._monthlyBackupImmutable !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthlyBackupImmutable = this._monthlyBackupImmutable;
    }
    if (this._weeklyBackupImmutable !== undefined) {
      hasAnyValues = true;
      internalValueResult.weeklyBackupImmutable = this._weeklyBackupImmutable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetappBackupVaultBackupRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupMinimumEnforcedRetentionDays = undefined;
      this._dailyBackupImmutable = undefined;
      this._manualBackupImmutable = undefined;
      this._monthlyBackupImmutable = undefined;
      this._weeklyBackupImmutable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupMinimumEnforcedRetentionDays = value.backupMinimumEnforcedRetentionDays;
      this._dailyBackupImmutable = value.dailyBackupImmutable;
      this._manualBackupImmutable = value.manualBackupImmutable;
      this._monthlyBackupImmutable = value.monthlyBackupImmutable;
      this._weeklyBackupImmutable = value.weeklyBackupImmutable;
    }
  }

  // backup_minimum_enforced_retention_days - computed: false, optional: false, required: true
  private _backupMinimumEnforcedRetentionDays?: number; 
  public get backupMinimumEnforcedRetentionDays() {
    return this.getNumberAttribute('backup_minimum_enforced_retention_days');
  }
  public set backupMinimumEnforcedRetentionDays(value: number) {
    this._backupMinimumEnforcedRetentionDays = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupMinimumEnforcedRetentionDaysInput() {
    return this._backupMinimumEnforcedRetentionDays;
  }

  // daily_backup_immutable - computed: false, optional: true, required: false
  private _dailyBackupImmutable?: boolean | cdktf.IResolvable; 
  public get dailyBackupImmutable() {
    return this.getBooleanAttribute('daily_backup_immutable');
  }
  public set dailyBackupImmutable(value: boolean | cdktf.IResolvable) {
    this._dailyBackupImmutable = value;
  }
  public resetDailyBackupImmutable() {
    this._dailyBackupImmutable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyBackupImmutableInput() {
    return this._dailyBackupImmutable;
  }

  // manual_backup_immutable - computed: false, optional: true, required: false
  private _manualBackupImmutable?: boolean | cdktf.IResolvable; 
  public get manualBackupImmutable() {
    return this.getBooleanAttribute('manual_backup_immutable');
  }
  public set manualBackupImmutable(value: boolean | cdktf.IResolvable) {
    this._manualBackupImmutable = value;
  }
  public resetManualBackupImmutable() {
    this._manualBackupImmutable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualBackupImmutableInput() {
    return this._manualBackupImmutable;
  }

  // monthly_backup_immutable - computed: false, optional: true, required: false
  private _monthlyBackupImmutable?: boolean | cdktf.IResolvable; 
  public get monthlyBackupImmutable() {
    return this.getBooleanAttribute('monthly_backup_immutable');
  }
  public set monthlyBackupImmutable(value: boolean | cdktf.IResolvable) {
    this._monthlyBackupImmutable = value;
  }
  public resetMonthlyBackupImmutable() {
    this._monthlyBackupImmutable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyBackupImmutableInput() {
    return this._monthlyBackupImmutable;
  }

  // weekly_backup_immutable - computed: false, optional: true, required: false
  private _weeklyBackupImmutable?: boolean | cdktf.IResolvable; 
  public get weeklyBackupImmutable() {
    return this.getBooleanAttribute('weekly_backup_immutable');
  }
  public set weeklyBackupImmutable(value: boolean | cdktf.IResolvable) {
    this._weeklyBackupImmutable = value;
  }
  public resetWeeklyBackupImmutable() {
    this._weeklyBackupImmutable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weeklyBackupImmutableInput() {
    return this._weeklyBackupImmutable;
  }
}
export interface NetappBackupVaultTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#create NetappBackupVault#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#delete NetappBackupVault#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#update NetappBackupVault#update}
  */
  readonly update?: string;
}

export function netappBackupVaultTimeoutsToTerraform(struct?: NetappBackupVaultTimeouts | cdktf.IResolvable): any {
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


export function netappBackupVaultTimeoutsToHclTerraform(struct?: NetappBackupVaultTimeouts | cdktf.IResolvable): any {
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

export class NetappBackupVaultTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetappBackupVaultTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetappBackupVaultTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault google_netapp_backup_vault}
*/
export class NetappBackupVault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_netapp_backup_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetappBackupVault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetappBackupVault to import
  * @param importFromId The id of the existing NetappBackupVault that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetappBackupVault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_netapp_backup_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/netapp_backup_vault google_netapp_backup_vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetappBackupVaultConfig
  */
  public constructor(scope: Construct, id: string, config: NetappBackupVaultConfig) {
    super(scope, id, {
      terraformResourceType: 'google_netapp_backup_vault',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.50.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupRegion = config.backupRegion;
    this._backupVaultType = config.backupVaultType;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._backupRetentionPolicy.internalValue = config.backupRetentionPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_region - computed: false, optional: true, required: false
  private _backupRegion?: string; 
  public get backupRegion() {
    return this.getStringAttribute('backup_region');
  }
  public set backupRegion(value: string) {
    this._backupRegion = value;
  }
  public resetBackupRegion() {
    this._backupRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRegionInput() {
    return this._backupRegion;
  }

  // backup_vault_type - computed: true, optional: true, required: false
  private _backupVaultType?: string; 
  public get backupVaultType() {
    return this.getStringAttribute('backup_vault_type');
  }
  public set backupVaultType(value: string) {
    this._backupVaultType = value;
  }
  public resetBackupVaultType() {
    this._backupVaultType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupVaultTypeInput() {
    return this._backupVaultType;
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

  // destination_backup_vault - computed: true, optional: false, required: false
  public get destinationBackupVault() {
    return this.getStringAttribute('destination_backup_vault');
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // source_backup_vault - computed: true, optional: false, required: false
  public get sourceBackupVault() {
    return this.getStringAttribute('source_backup_vault');
  }

  // source_region - computed: true, optional: false, required: false
  public get sourceRegion() {
    return this.getStringAttribute('source_region');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // backup_retention_policy - computed: false, optional: true, required: false
  private _backupRetentionPolicy = new NetappBackupVaultBackupRetentionPolicyOutputReference(this, "backup_retention_policy");
  public get backupRetentionPolicy() {
    return this._backupRetentionPolicy;
  }
  public putBackupRetentionPolicy(value: NetappBackupVaultBackupRetentionPolicy) {
    this._backupRetentionPolicy.internalValue = value;
  }
  public resetBackupRetentionPolicy() {
    this._backupRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPolicyInput() {
    return this._backupRetentionPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetappBackupVaultTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetappBackupVaultTimeouts) {
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
      backup_region: cdktf.stringToTerraform(this._backupRegion),
      backup_vault_type: cdktf.stringToTerraform(this._backupVaultType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      backup_retention_policy: netappBackupVaultBackupRetentionPolicyToTerraform(this._backupRetentionPolicy.internalValue),
      timeouts: netappBackupVaultTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_region: {
        value: cdktf.stringToHclTerraform(this._backupRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_vault_type: {
        value: cdktf.stringToHclTerraform(this._backupVaultType),
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
      backup_retention_policy: {
        value: netappBackupVaultBackupRetentionPolicyToHclTerraform(this._backupRetentionPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetappBackupVaultBackupRetentionPolicyList",
      },
      timeouts: {
        value: netappBackupVaultTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetappBackupVaultTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
