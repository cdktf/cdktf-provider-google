// https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GkeBackupBackupPlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * The source cluster from which Backups will be created via this BackupPlan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#cluster GkeBackupBackupPlan#cluster}
  */
  readonly cluster: string;
  /**
  * This flag indicates whether this BackupPlan has been deactivated.
  * Setting this field to True locks the BackupPlan such that no further updates will be allowed
  * (except deletes), including the deactivated field itself. It also prevents any new Backups
  * from being created via this BackupPlan (including scheduled Backups).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#deactivated GkeBackupBackupPlan#deactivated}
  */
  readonly deactivated?: boolean | cdktf.IResolvable;
  /**
  * User specified descriptive string for this BackupPlan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#description GkeBackupBackupPlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#id GkeBackupBackupPlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Description: A set of custom labels supplied by the user.
  * A list of key->value pairs.
  * Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#labels GkeBackupBackupPlan#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The region of the Backup Plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#location GkeBackupBackupPlan#location}
  */
  readonly location: string;
  /**
  * The full name of the BackupPlan Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#name GkeBackupBackupPlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#project GkeBackupBackupPlan#project}
  */
  readonly project?: string;
  /**
  * backup_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#backup_config GkeBackupBackupPlan#backup_config}
  */
  readonly backupConfig?: GkeBackupBackupPlanBackupConfig;
  /**
  * backup_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#backup_schedule GkeBackupBackupPlan#backup_schedule}
  */
  readonly backupSchedule?: GkeBackupBackupPlanBackupSchedule;
  /**
  * retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#retention_policy GkeBackupBackupPlan#retention_policy}
  */
  readonly retentionPolicy?: GkeBackupBackupPlanRetentionPolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#timeouts GkeBackupBackupPlan#timeouts}
  */
  readonly timeouts?: GkeBackupBackupPlanTimeouts;
}
export interface GkeBackupBackupPlanBackupConfigEncryptionKey {
  /**
  * Google Cloud KMS encryption key. Format: projects/* /locations/* /keyRings/* /cryptoKeys/*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#gcp_kms_encryption_key GkeBackupBackupPlan#gcp_kms_encryption_key}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly gcpKmsEncryptionKey: string;
}

export function gkeBackupBackupPlanBackupConfigEncryptionKeyToTerraform(struct?: GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference | GkeBackupBackupPlanBackupConfigEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_kms_encryption_key: cdktf.stringToTerraform(struct!.gcpKmsEncryptionKey),
  }
}


export function gkeBackupBackupPlanBackupConfigEncryptionKeyToHclTerraform(struct?: GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference | GkeBackupBackupPlanBackupConfigEncryptionKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_kms_encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.gcpKmsEncryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeBackupBackupPlanBackupConfigEncryptionKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpKmsEncryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpKmsEncryptionKey = this._gcpKmsEncryptionKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupBackupPlanBackupConfigEncryptionKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpKmsEncryptionKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpKmsEncryptionKey = value.gcpKmsEncryptionKey;
    }
  }

  // gcp_kms_encryption_key - computed: false, optional: false, required: true
  private _gcpKmsEncryptionKey?: string; 
  public get gcpKmsEncryptionKey() {
    return this.getStringAttribute('gcp_kms_encryption_key');
  }
  public set gcpKmsEncryptionKey(value: string) {
    this._gcpKmsEncryptionKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpKmsEncryptionKeyInput() {
    return this._gcpKmsEncryptionKey;
  }
}
export interface GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames {
  /**
  * The name of a Kubernetes Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#name GkeBackupBackupPlan#name}
  */
  readonly name: string;
  /**
  * The namespace of a Kubernetes Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#namespace GkeBackupBackupPlan#namespace}
  */
  readonly namespace: string;
}

export function gkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesToTerraform(struct?: GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function gkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesToHclTerraform(struct?: GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
    }
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

export class GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList extends cdktf.ComplexList {
  public internalValue? : GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames[] | cdktf.IResolvable

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
  public get(index: number): GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference {
    return new GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeBackupBackupPlanBackupConfigSelectedApplications {
  /**
  * namespaced_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#namespaced_names GkeBackupBackupPlan#namespaced_names}
  */
  readonly namespacedNames: GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames[] | cdktf.IResolvable;
}

export function gkeBackupBackupPlanBackupConfigSelectedApplicationsToTerraform(struct?: GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference | GkeBackupBackupPlanBackupConfigSelectedApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaced_names: cdktf.listMapper(gkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesToTerraform, true)(struct!.namespacedNames),
  }
}


export function gkeBackupBackupPlanBackupConfigSelectedApplicationsToHclTerraform(struct?: GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference | GkeBackupBackupPlanBackupConfigSelectedApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaced_names: {
      value: cdktf.listMapperHcl(gkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesToHclTerraform, true)(struct!.namespacedNames),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeBackupBackupPlanBackupConfigSelectedApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespacedNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespacedNames = this._namespacedNames?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupBackupPlanBackupConfigSelectedApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespacedNames.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespacedNames.internalValue = value.namespacedNames;
    }
  }

  // namespaced_names - computed: false, optional: false, required: true
  private _namespacedNames = new GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNamesList(this, "namespaced_names", false);
  public get namespacedNames() {
    return this._namespacedNames;
  }
  public putNamespacedNames(value: GkeBackupBackupPlanBackupConfigSelectedApplicationsNamespacedNames[] | cdktf.IResolvable) {
    this._namespacedNames.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacedNamesInput() {
    return this._namespacedNames.internalValue;
  }
}
export interface GkeBackupBackupPlanBackupConfigSelectedNamespaces {
  /**
  * A list of Kubernetes Namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#namespaces GkeBackupBackupPlan#namespaces}
  */
  readonly namespaces: string[];
}

export function gkeBackupBackupPlanBackupConfigSelectedNamespacesToTerraform(struct?: GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference | GkeBackupBackupPlanBackupConfigSelectedNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
  }
}


export function gkeBackupBackupPlanBackupConfigSelectedNamespacesToHclTerraform(struct?: GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference | GkeBackupBackupPlanBackupConfigSelectedNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeBackupBackupPlanBackupConfigSelectedNamespaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupBackupPlanBackupConfigSelectedNamespaces | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaces = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaces = value.namespaces;
    }
  }

  // namespaces - computed: false, optional: false, required: true
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }
}
export interface GkeBackupBackupPlanBackupConfig {
  /**
  * If True, include all namespaced resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#all_namespaces GkeBackupBackupPlan#all_namespaces}
  */
  readonly allNamespaces?: boolean | cdktf.IResolvable;
  /**
  * This flag specifies whether Kubernetes Secret resources should be included
  * when they fall into the scope of Backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#include_secrets GkeBackupBackupPlan#include_secrets}
  */
  readonly includeSecrets?: boolean | cdktf.IResolvable;
  /**
  * This flag specifies whether volume data should be backed up when PVCs are
  * included in the scope of a Backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#include_volume_data GkeBackupBackupPlan#include_volume_data}
  */
  readonly includeVolumeData?: boolean | cdktf.IResolvable;
  /**
  * This flag specifies whether Backups will not fail when
  * Backup for GKE detects Kubernetes configuration that is
  * non-standard or requires additional setup to restore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#permissive_mode GkeBackupBackupPlan#permissive_mode}
  */
  readonly permissiveMode?: boolean | cdktf.IResolvable;
  /**
  * encryption_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#encryption_key GkeBackupBackupPlan#encryption_key}
  */
  readonly encryptionKey?: GkeBackupBackupPlanBackupConfigEncryptionKey;
  /**
  * selected_applications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#selected_applications GkeBackupBackupPlan#selected_applications}
  */
  readonly selectedApplications?: GkeBackupBackupPlanBackupConfigSelectedApplications;
  /**
  * selected_namespaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#selected_namespaces GkeBackupBackupPlan#selected_namespaces}
  */
  readonly selectedNamespaces?: GkeBackupBackupPlanBackupConfigSelectedNamespaces;
}

export function gkeBackupBackupPlanBackupConfigToTerraform(struct?: GkeBackupBackupPlanBackupConfigOutputReference | GkeBackupBackupPlanBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_namespaces: cdktf.booleanToTerraform(struct!.allNamespaces),
    include_secrets: cdktf.booleanToTerraform(struct!.includeSecrets),
    include_volume_data: cdktf.booleanToTerraform(struct!.includeVolumeData),
    permissive_mode: cdktf.booleanToTerraform(struct!.permissiveMode),
    encryption_key: gkeBackupBackupPlanBackupConfigEncryptionKeyToTerraform(struct!.encryptionKey),
    selected_applications: gkeBackupBackupPlanBackupConfigSelectedApplicationsToTerraform(struct!.selectedApplications),
    selected_namespaces: gkeBackupBackupPlanBackupConfigSelectedNamespacesToTerraform(struct!.selectedNamespaces),
  }
}


export function gkeBackupBackupPlanBackupConfigToHclTerraform(struct?: GkeBackupBackupPlanBackupConfigOutputReference | GkeBackupBackupPlanBackupConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_namespaces: {
      value: cdktf.booleanToHclTerraform(struct!.allNamespaces),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_secrets: {
      value: cdktf.booleanToHclTerraform(struct!.includeSecrets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_volume_data: {
      value: cdktf.booleanToHclTerraform(struct!.includeVolumeData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    permissive_mode: {
      value: cdktf.booleanToHclTerraform(struct!.permissiveMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_key: {
      value: gkeBackupBackupPlanBackupConfigEncryptionKeyToHclTerraform(struct!.encryptionKey),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupBackupPlanBackupConfigEncryptionKeyList",
    },
    selected_applications: {
      value: gkeBackupBackupPlanBackupConfigSelectedApplicationsToHclTerraform(struct!.selectedApplications),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupBackupPlanBackupConfigSelectedApplicationsList",
    },
    selected_namespaces: {
      value: gkeBackupBackupPlanBackupConfigSelectedNamespacesToHclTerraform(struct!.selectedNamespaces),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupBackupPlanBackupConfigSelectedNamespacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupBackupPlanBackupConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeBackupBackupPlanBackupConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.allNamespaces = this._allNamespaces;
    }
    if (this._includeSecrets !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSecrets = this._includeSecrets;
    }
    if (this._includeVolumeData !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeVolumeData = this._includeVolumeData;
    }
    if (this._permissiveMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissiveMode = this._permissiveMode;
    }
    if (this._encryptionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey?.internalValue;
    }
    if (this._selectedApplications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedApplications = this._selectedApplications?.internalValue;
    }
    if (this._selectedNamespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedNamespaces = this._selectedNamespaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupBackupPlanBackupConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allNamespaces = undefined;
      this._includeSecrets = undefined;
      this._includeVolumeData = undefined;
      this._permissiveMode = undefined;
      this._encryptionKey.internalValue = undefined;
      this._selectedApplications.internalValue = undefined;
      this._selectedNamespaces.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allNamespaces = value.allNamespaces;
      this._includeSecrets = value.includeSecrets;
      this._includeVolumeData = value.includeVolumeData;
      this._permissiveMode = value.permissiveMode;
      this._encryptionKey.internalValue = value.encryptionKey;
      this._selectedApplications.internalValue = value.selectedApplications;
      this._selectedNamespaces.internalValue = value.selectedNamespaces;
    }
  }

  // all_namespaces - computed: false, optional: true, required: false
  private _allNamespaces?: boolean | cdktf.IResolvable; 
  public get allNamespaces() {
    return this.getBooleanAttribute('all_namespaces');
  }
  public set allNamespaces(value: boolean | cdktf.IResolvable) {
    this._allNamespaces = value;
  }
  public resetAllNamespaces() {
    this._allNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allNamespacesInput() {
    return this._allNamespaces;
  }

  // include_secrets - computed: true, optional: true, required: false
  private _includeSecrets?: boolean | cdktf.IResolvable; 
  public get includeSecrets() {
    return this.getBooleanAttribute('include_secrets');
  }
  public set includeSecrets(value: boolean | cdktf.IResolvable) {
    this._includeSecrets = value;
  }
  public resetIncludeSecrets() {
    this._includeSecrets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSecretsInput() {
    return this._includeSecrets;
  }

  // include_volume_data - computed: true, optional: true, required: false
  private _includeVolumeData?: boolean | cdktf.IResolvable; 
  public get includeVolumeData() {
    return this.getBooleanAttribute('include_volume_data');
  }
  public set includeVolumeData(value: boolean | cdktf.IResolvable) {
    this._includeVolumeData = value;
  }
  public resetIncludeVolumeData() {
    this._includeVolumeData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeVolumeDataInput() {
    return this._includeVolumeData;
  }

  // permissive_mode - computed: false, optional: true, required: false
  private _permissiveMode?: boolean | cdktf.IResolvable; 
  public get permissiveMode() {
    return this.getBooleanAttribute('permissive_mode');
  }
  public set permissiveMode(value: boolean | cdktf.IResolvable) {
    this._permissiveMode = value;
  }
  public resetPermissiveMode() {
    this._permissiveMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissiveModeInput() {
    return this._permissiveMode;
  }

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey = new GkeBackupBackupPlanBackupConfigEncryptionKeyOutputReference(this, "encryption_key");
  public get encryptionKey() {
    return this._encryptionKey;
  }
  public putEncryptionKey(value: GkeBackupBackupPlanBackupConfigEncryptionKey) {
    this._encryptionKey.internalValue = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey.internalValue;
  }

  // selected_applications - computed: false, optional: true, required: false
  private _selectedApplications = new GkeBackupBackupPlanBackupConfigSelectedApplicationsOutputReference(this, "selected_applications");
  public get selectedApplications() {
    return this._selectedApplications;
  }
  public putSelectedApplications(value: GkeBackupBackupPlanBackupConfigSelectedApplications) {
    this._selectedApplications.internalValue = value;
  }
  public resetSelectedApplications() {
    this._selectedApplications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedApplicationsInput() {
    return this._selectedApplications.internalValue;
  }

  // selected_namespaces - computed: false, optional: true, required: false
  private _selectedNamespaces = new GkeBackupBackupPlanBackupConfigSelectedNamespacesOutputReference(this, "selected_namespaces");
  public get selectedNamespaces() {
    return this._selectedNamespaces;
  }
  public putSelectedNamespaces(value: GkeBackupBackupPlanBackupConfigSelectedNamespaces) {
    this._selectedNamespaces.internalValue = value;
  }
  public resetSelectedNamespaces() {
    this._selectedNamespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedNamespacesInput() {
    return this._selectedNamespaces.internalValue;
  }
}
export interface GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek {
  /**
  * A list of days of week. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#days_of_week GkeBackupBackupPlan#days_of_week}
  */
  readonly daysOfWeek?: string[];
}

export function gkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekToTerraform(struct?: GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference | GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_of_week: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.daysOfWeek),
  }
}


export function gkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekToHclTerraform(struct?: GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference | GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_of_week: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.daysOfWeek),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysOfWeek = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysOfWeek = value.daysOfWeek;
    }
  }

  // days_of_week - computed: false, optional: true, required: false
  private _daysOfWeek?: string[]; 
  public get daysOfWeek() {
    return this.getListAttribute('days_of_week');
  }
  public set daysOfWeek(value: string[]) {
    this._daysOfWeek = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek;
  }
}
export interface GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate {
  /**
  * Day of a month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#day GkeBackupBackupPlan#day}
  */
  readonly day?: number;
  /**
  * Month of a year.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#month GkeBackupBackupPlan#month}
  */
  readonly month?: number;
  /**
  * Year of the date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#year GkeBackupBackupPlan#year}
  */
  readonly year?: number;
}

export function gkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateToTerraform(struct?: GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference | GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    month: cdktf.numberToTerraform(struct!.month),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function gkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateToHclTerraform(struct?: GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference | GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._month = undefined;
      this._year = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._month = value.month;
      this._year = value.year;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime {
  /**
  * Hours of day in 24 hour format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#hours GkeBackupBackupPlan#hours}
  */
  readonly hours?: number;
  /**
  * Minutes of hour of day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#minutes GkeBackupBackupPlan#minutes}
  */
  readonly minutes?: number;
  /**
  * Fractions of seconds in nanoseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#nanos GkeBackupBackupPlan#nanos}
  */
  readonly nanos?: number;
  /**
  * Seconds of minutes of the time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#seconds GkeBackupBackupPlan#seconds}
  */
  readonly seconds?: number;
}

export function gkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeToTerraform(struct?: GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference | GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function gkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeToHclTerraform(struct?: GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference | GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  public resetHours() {
    this._hours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: true, required: false
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  public resetNanos() {
    this._nanos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows {
  /**
  * The exclusion window occurs every day if set to "True".
  * Specifying this field to "False" is an error.
  * Only one of singleOccurrenceDate, daily and daysOfWeek may be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#daily GkeBackupBackupPlan#daily}
  */
  readonly daily?: boolean | cdktf.IResolvable;
  /**
  * Specifies duration of the window in seconds with up to nine fractional digits,
  * terminated by 's'. Example: "3.5s". Restrictions for duration based on the
  * recurrence type to allow some time for backup to happen:
  *   - single_occurrence_date:  no restriction
  *   - daily window: duration < 24 hours
  *   - weekly window:
  *     - days of week includes all seven days of a week: duration < 24 hours
  *     - all other weekly window: duration < 168 hours (i.e., 24 * 7 hours)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#duration GkeBackupBackupPlan#duration}
  */
  readonly duration: string;
  /**
  * days_of_week block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#days_of_week GkeBackupBackupPlan#days_of_week}
  */
  readonly daysOfWeek?: GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek;
  /**
  * single_occurrence_date block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#single_occurrence_date GkeBackupBackupPlan#single_occurrence_date}
  */
  readonly singleOccurrenceDate?: GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate;
  /**
  * start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#start_time GkeBackupBackupPlan#start_time}
  */
  readonly startTime: GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime;
}

export function gkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsToTerraform(struct?: GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: cdktf.booleanToTerraform(struct!.daily),
    duration: cdktf.stringToTerraform(struct!.duration),
    days_of_week: gkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekToTerraform(struct!.daysOfWeek),
    single_occurrence_date: gkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateToTerraform(struct!.singleOccurrenceDate),
    start_time: gkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeToTerraform(struct!.startTime),
  }
}


export function gkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsToHclTerraform(struct?: GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: cdktf.booleanToHclTerraform(struct!.daily),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    days_of_week: {
      value: gkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekToHclTerraform(struct!.daysOfWeek),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekList",
    },
    single_occurrence_date: {
      value: gkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateToHclTerraform(struct!.singleOccurrenceDate),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateList",
    },
    start_time: {
      value: gkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeToHclTerraform(struct!.startTime),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._daysOfWeek?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysOfWeek = this._daysOfWeek?.internalValue;
    }
    if (this._singleOccurrenceDate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleOccurrenceDate = this._singleOccurrenceDate?.internalValue;
    }
    if (this._startTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily = undefined;
      this._duration = undefined;
      this._daysOfWeek.internalValue = undefined;
      this._singleOccurrenceDate.internalValue = undefined;
      this._startTime.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daily = value.daily;
      this._duration = value.duration;
      this._daysOfWeek.internalValue = value.daysOfWeek;
      this._singleOccurrenceDate.internalValue = value.singleOccurrenceDate;
      this._startTime.internalValue = value.startTime;
    }
  }

  // daily - computed: false, optional: true, required: false
  private _daily?: boolean | cdktf.IResolvable; 
  public get daily() {
    return this.getBooleanAttribute('daily');
  }
  public set daily(value: boolean | cdktf.IResolvable) {
    this._daily = value;
  }
  public resetDaily() {
    this._daily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // days_of_week - computed: false, optional: true, required: false
  private _daysOfWeek = new GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeekOutputReference(this, "days_of_week");
  public get daysOfWeek() {
    return this._daysOfWeek;
  }
  public putDaysOfWeek(value: GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsDaysOfWeek) {
    this._daysOfWeek.internalValue = value;
  }
  public resetDaysOfWeek() {
    this._daysOfWeek.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysOfWeekInput() {
    return this._daysOfWeek.internalValue;
  }

  // single_occurrence_date - computed: false, optional: true, required: false
  private _singleOccurrenceDate = new GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDateOutputReference(this, "single_occurrence_date");
  public get singleOccurrenceDate() {
    return this._singleOccurrenceDate;
  }
  public putSingleOccurrenceDate(value: GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsSingleOccurrenceDate) {
    this._singleOccurrenceDate.internalValue = value;
  }
  public resetSingleOccurrenceDate() {
    this._singleOccurrenceDate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleOccurrenceDateInput() {
    return this._singleOccurrenceDate.internalValue;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime = new GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTimeOutputReference(this, "start_time");
  public get startTime() {
    return this._startTime;
  }
  public putStartTime(value: GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsStartTime) {
    this._startTime.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime.internalValue;
  }
}

export class GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList extends cdktf.ComplexList {
  public internalValue? : GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows[] | cdktf.IResolvable

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
  public get(index: number): GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference {
    return new GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeBackupBackupPlanBackupScheduleRpoConfig {
  /**
  * Defines the target RPO for the BackupPlan in minutes, which means the target
  * maximum data loss in time that is acceptable for this BackupPlan. This must be
  * at least 60, i.e., 1 hour, and at most 86400, i.e., 60 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#target_rpo_minutes GkeBackupBackupPlan#target_rpo_minutes}
  */
  readonly targetRpoMinutes: number;
  /**
  * exclusion_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#exclusion_windows GkeBackupBackupPlan#exclusion_windows}
  */
  readonly exclusionWindows?: GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows[] | cdktf.IResolvable;
}

export function gkeBackupBackupPlanBackupScheduleRpoConfigToTerraform(struct?: GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference | GkeBackupBackupPlanBackupScheduleRpoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_rpo_minutes: cdktf.numberToTerraform(struct!.targetRpoMinutes),
    exclusion_windows: cdktf.listMapper(gkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsToTerraform, true)(struct!.exclusionWindows),
  }
}


export function gkeBackupBackupPlanBackupScheduleRpoConfigToHclTerraform(struct?: GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference | GkeBackupBackupPlanBackupScheduleRpoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_rpo_minutes: {
      value: cdktf.numberToHclTerraform(struct!.targetRpoMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exclusion_windows: {
      value: cdktf.listMapperHcl(gkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsToHclTerraform, true)(struct!.exclusionWindows),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeBackupBackupPlanBackupScheduleRpoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetRpoMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRpoMinutes = this._targetRpoMinutes;
    }
    if (this._exclusionWindows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionWindows = this._exclusionWindows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupBackupPlanBackupScheduleRpoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetRpoMinutes = undefined;
      this._exclusionWindows.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetRpoMinutes = value.targetRpoMinutes;
      this._exclusionWindows.internalValue = value.exclusionWindows;
    }
  }

  // target_rpo_minutes - computed: false, optional: false, required: true
  private _targetRpoMinutes?: number; 
  public get targetRpoMinutes() {
    return this.getNumberAttribute('target_rpo_minutes');
  }
  public set targetRpoMinutes(value: number) {
    this._targetRpoMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRpoMinutesInput() {
    return this._targetRpoMinutes;
  }

  // exclusion_windows - computed: false, optional: true, required: false
  private _exclusionWindows = new GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindowsList(this, "exclusion_windows", false);
  public get exclusionWindows() {
    return this._exclusionWindows;
  }
  public putExclusionWindows(value: GkeBackupBackupPlanBackupScheduleRpoConfigExclusionWindows[] | cdktf.IResolvable) {
    this._exclusionWindows.internalValue = value;
  }
  public resetExclusionWindows() {
    this._exclusionWindows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionWindowsInput() {
    return this._exclusionWindows.internalValue;
  }
}
export interface GkeBackupBackupPlanBackupSchedule {
  /**
  * A standard cron string that defines a repeating schedule for
  * creating Backups via this BackupPlan.
  * This is mutually exclusive with the rpoConfig field since at most one
  * schedule can be defined for a BackupPlan.
  * If this is defined, then backupRetainDays must also be defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#cron_schedule GkeBackupBackupPlan#cron_schedule}
  */
  readonly cronSchedule?: string;
  /**
  * This flag denotes whether automatic Backup creation is paused for this BackupPlan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#paused GkeBackupBackupPlan#paused}
  */
  readonly paused?: boolean | cdktf.IResolvable;
  /**
  * rpo_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#rpo_config GkeBackupBackupPlan#rpo_config}
  */
  readonly rpoConfig?: GkeBackupBackupPlanBackupScheduleRpoConfig;
}

export function gkeBackupBackupPlanBackupScheduleToTerraform(struct?: GkeBackupBackupPlanBackupScheduleOutputReference | GkeBackupBackupPlanBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_schedule: cdktf.stringToTerraform(struct!.cronSchedule),
    paused: cdktf.booleanToTerraform(struct!.paused),
    rpo_config: gkeBackupBackupPlanBackupScheduleRpoConfigToTerraform(struct!.rpoConfig),
  }
}


export function gkeBackupBackupPlanBackupScheduleToHclTerraform(struct?: GkeBackupBackupPlanBackupScheduleOutputReference | GkeBackupBackupPlanBackupSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_schedule: {
      value: cdktf.stringToHclTerraform(struct!.cronSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paused: {
      value: cdktf.booleanToHclTerraform(struct!.paused),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rpo_config: {
      value: gkeBackupBackupPlanBackupScheduleRpoConfigToHclTerraform(struct!.rpoConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupBackupPlanBackupScheduleRpoConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupBackupPlanBackupScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeBackupBackupPlanBackupSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronSchedule = this._cronSchedule;
    }
    if (this._paused !== undefined) {
      hasAnyValues = true;
      internalValueResult.paused = this._paused;
    }
    if (this._rpoConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpoConfig = this._rpoConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupBackupPlanBackupSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cronSchedule = undefined;
      this._paused = undefined;
      this._rpoConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronSchedule = value.cronSchedule;
      this._paused = value.paused;
      this._rpoConfig.internalValue = value.rpoConfig;
    }
  }

  // cron_schedule - computed: false, optional: true, required: false
  private _cronSchedule?: string; 
  public get cronSchedule() {
    return this.getStringAttribute('cron_schedule');
  }
  public set cronSchedule(value: string) {
    this._cronSchedule = value;
  }
  public resetCronSchedule() {
    this._cronSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronScheduleInput() {
    return this._cronSchedule;
  }

  // paused - computed: true, optional: true, required: false
  private _paused?: boolean | cdktf.IResolvable; 
  public get paused() {
    return this.getBooleanAttribute('paused');
  }
  public set paused(value: boolean | cdktf.IResolvable) {
    this._paused = value;
  }
  public resetPaused() {
    this._paused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pausedInput() {
    return this._paused;
  }

  // rpo_config - computed: false, optional: true, required: false
  private _rpoConfig = new GkeBackupBackupPlanBackupScheduleRpoConfigOutputReference(this, "rpo_config");
  public get rpoConfig() {
    return this._rpoConfig;
  }
  public putRpoConfig(value: GkeBackupBackupPlanBackupScheduleRpoConfig) {
    this._rpoConfig.internalValue = value;
  }
  public resetRpoConfig() {
    this._rpoConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpoConfigInput() {
    return this._rpoConfig.internalValue;
  }
}
export interface GkeBackupBackupPlanRetentionPolicy {
  /**
  * Minimum age for a Backup created via this BackupPlan (in days).
  * Must be an integer value between 0-90 (inclusive).
  * A Backup created under this BackupPlan will not be deletable
  * until it reaches Backup's (create time + backup_delete_lock_days).
  * Updating this field of a BackupPlan does not affect existing Backups.
  * Backups created after a successful update will inherit this new value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#backup_delete_lock_days GkeBackupBackupPlan#backup_delete_lock_days}
  */
  readonly backupDeleteLockDays?: number;
  /**
  * The default maximum age of a Backup created via this BackupPlan.
  * This field MUST be an integer value >= 0 and <= 365. If specified,
  * a Backup created under this BackupPlan will be automatically deleted
  * after its age reaches (createTime + backupRetainDays).
  * If not specified, Backups created under this BackupPlan will NOT be
  * subject to automatic deletion. Updating this field does NOT affect
  * existing Backups under it. Backups created AFTER a successful update
  * will automatically pick up the new value.
  * NOTE: backupRetainDays must be >= backupDeleteLockDays.
  * If cronSchedule is defined, then this must be <= 360 * the creation interval.
  * If rpo_config is defined, then this must be
  * <= 360 * targetRpoMinutes/(1440minutes/day)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#backup_retain_days GkeBackupBackupPlan#backup_retain_days}
  */
  readonly backupRetainDays?: number;
  /**
  * This flag denotes whether the retention policy of this BackupPlan is locked.
  * If set to True, no further update is allowed on this policy, including
  * the locked field itself.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#locked GkeBackupBackupPlan#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
}

export function gkeBackupBackupPlanRetentionPolicyToTerraform(struct?: GkeBackupBackupPlanRetentionPolicyOutputReference | GkeBackupBackupPlanRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_delete_lock_days: cdktf.numberToTerraform(struct!.backupDeleteLockDays),
    backup_retain_days: cdktf.numberToTerraform(struct!.backupRetainDays),
    locked: cdktf.booleanToTerraform(struct!.locked),
  }
}


export function gkeBackupBackupPlanRetentionPolicyToHclTerraform(struct?: GkeBackupBackupPlanRetentionPolicyOutputReference | GkeBackupBackupPlanRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_delete_lock_days: {
      value: cdktf.numberToHclTerraform(struct!.backupDeleteLockDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_retain_days: {
      value: cdktf.numberToHclTerraform(struct!.backupRetainDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    locked: {
      value: cdktf.booleanToHclTerraform(struct!.locked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupBackupPlanRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeBackupBackupPlanRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupDeleteLockDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupDeleteLockDays = this._backupDeleteLockDays;
    }
    if (this._backupRetainDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetainDays = this._backupRetainDays;
    }
    if (this._locked !== undefined) {
      hasAnyValues = true;
      internalValueResult.locked = this._locked;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupBackupPlanRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupDeleteLockDays = undefined;
      this._backupRetainDays = undefined;
      this._locked = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupDeleteLockDays = value.backupDeleteLockDays;
      this._backupRetainDays = value.backupRetainDays;
      this._locked = value.locked;
    }
  }

  // backup_delete_lock_days - computed: true, optional: true, required: false
  private _backupDeleteLockDays?: number; 
  public get backupDeleteLockDays() {
    return this.getNumberAttribute('backup_delete_lock_days');
  }
  public set backupDeleteLockDays(value: number) {
    this._backupDeleteLockDays = value;
  }
  public resetBackupDeleteLockDays() {
    this._backupDeleteLockDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDeleteLockDaysInput() {
    return this._backupDeleteLockDays;
  }

  // backup_retain_days - computed: true, optional: true, required: false
  private _backupRetainDays?: number; 
  public get backupRetainDays() {
    return this.getNumberAttribute('backup_retain_days');
  }
  public set backupRetainDays(value: number) {
    this._backupRetainDays = value;
  }
  public resetBackupRetainDays() {
    this._backupRetainDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetainDaysInput() {
    return this._backupRetainDays;
  }

  // locked - computed: true, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
  }
}
export interface GkeBackupBackupPlanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#create GkeBackupBackupPlan#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#delete GkeBackupBackupPlan#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#update GkeBackupBackupPlan#update}
  */
  readonly update?: string;
}

export function gkeBackupBackupPlanTimeoutsToTerraform(struct?: GkeBackupBackupPlanTimeouts | cdktf.IResolvable): any {
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


export function gkeBackupBackupPlanTimeoutsToHclTerraform(struct?: GkeBackupBackupPlanTimeouts | cdktf.IResolvable): any {
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

export class GkeBackupBackupPlanTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GkeBackupBackupPlanTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GkeBackupBackupPlanTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan google_gke_backup_backup_plan}
*/
export class GkeBackupBackupPlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gke_backup_backup_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GkeBackupBackupPlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GkeBackupBackupPlan to import
  * @param importFromId The id of the existing GkeBackupBackupPlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GkeBackupBackupPlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_gke_backup_backup_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.39.0/docs/resources/gke_backup_backup_plan google_gke_backup_backup_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GkeBackupBackupPlanConfig
  */
  public constructor(scope: Construct, id: string, config: GkeBackupBackupPlanConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gke_backup_backup_plan',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.39.0',
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
    this._cluster = config.cluster;
    this._deactivated = config.deactivated;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._backupConfig.internalValue = config.backupConfig;
    this._backupSchedule.internalValue = config.backupSchedule;
    this._retentionPolicy.internalValue = config.retentionPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // deactivated - computed: true, optional: true, required: false
  private _deactivated?: boolean | cdktf.IResolvable; 
  public get deactivated() {
    return this.getBooleanAttribute('deactivated');
  }
  public set deactivated(value: boolean | cdktf.IResolvable) {
    this._deactivated = value;
  }
  public resetDeactivated() {
    this._deactivated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deactivatedInput() {
    return this._deactivated;
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // protected_pod_count - computed: true, optional: false, required: false
  public get protectedPodCount() {
    return this.getNumberAttribute('protected_pod_count');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_reason - computed: true, optional: false, required: false
  public get stateReason() {
    return this.getStringAttribute('state_reason');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // backup_config - computed: false, optional: true, required: false
  private _backupConfig = new GkeBackupBackupPlanBackupConfigOutputReference(this, "backup_config");
  public get backupConfig() {
    return this._backupConfig;
  }
  public putBackupConfig(value: GkeBackupBackupPlanBackupConfig) {
    this._backupConfig.internalValue = value;
  }
  public resetBackupConfig() {
    this._backupConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupConfigInput() {
    return this._backupConfig.internalValue;
  }

  // backup_schedule - computed: false, optional: true, required: false
  private _backupSchedule = new GkeBackupBackupPlanBackupScheduleOutputReference(this, "backup_schedule");
  public get backupSchedule() {
    return this._backupSchedule;
  }
  public putBackupSchedule(value: GkeBackupBackupPlanBackupSchedule) {
    this._backupSchedule.internalValue = value;
  }
  public resetBackupSchedule() {
    this._backupSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupScheduleInput() {
    return this._backupSchedule.internalValue;
  }

  // retention_policy - computed: false, optional: true, required: false
  private _retentionPolicy = new GkeBackupBackupPlanRetentionPolicyOutputReference(this, "retention_policy");
  public get retentionPolicy() {
    return this._retentionPolicy;
  }
  public putRetentionPolicy(value: GkeBackupBackupPlanRetentionPolicy) {
    this._retentionPolicy.internalValue = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GkeBackupBackupPlanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GkeBackupBackupPlanTimeouts) {
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
      cluster: cdktf.stringToTerraform(this._cluster),
      deactivated: cdktf.booleanToTerraform(this._deactivated),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      backup_config: gkeBackupBackupPlanBackupConfigToTerraform(this._backupConfig.internalValue),
      backup_schedule: gkeBackupBackupPlanBackupScheduleToTerraform(this._backupSchedule.internalValue),
      retention_policy: gkeBackupBackupPlanRetentionPolicyToTerraform(this._retentionPolicy.internalValue),
      timeouts: gkeBackupBackupPlanTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deactivated: {
        value: cdktf.booleanToHclTerraform(this._deactivated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      backup_config: {
        value: gkeBackupBackupPlanBackupConfigToHclTerraform(this._backupConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeBackupBackupPlanBackupConfigList",
      },
      backup_schedule: {
        value: gkeBackupBackupPlanBackupScheduleToHclTerraform(this._backupSchedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeBackupBackupPlanBackupScheduleList",
      },
      retention_policy: {
        value: gkeBackupBackupPlanRetentionPolicyToHclTerraform(this._retentionPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeBackupBackupPlanRetentionPolicyList",
      },
      timeouts: {
        value: gkeBackupBackupPlanTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GkeBackupBackupPlanTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
