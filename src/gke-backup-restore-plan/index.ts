// https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GkeBackupRestorePlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * A reference to the BackupPlan from which Backups may be used
  * as the source for Restores created via this RestorePlan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#backup_plan GkeBackupRestorePlan#backup_plan}
  */
  readonly backupPlan: string;
  /**
  * The source cluster from which Restores will be created via this RestorePlan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#cluster GkeBackupRestorePlan#cluster}
  */
  readonly cluster: string;
  /**
  * User specified descriptive string for this RestorePlan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#description GkeBackupRestorePlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#id GkeBackupRestorePlan#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#labels GkeBackupRestorePlan#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The region of the Restore Plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#location GkeBackupRestorePlan#location}
  */
  readonly location: string;
  /**
  * The full name of the BackupPlan Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#name GkeBackupRestorePlan#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#project GkeBackupRestorePlan#project}
  */
  readonly project?: string;
  /**
  * restore_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#restore_config GkeBackupRestorePlan#restore_config}
  */
  readonly restoreConfig: GkeBackupRestorePlanRestoreConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#timeouts GkeBackupRestorePlan#timeouts}
  */
  readonly timeouts?: GkeBackupRestorePlanTimeouts;
}
export interface GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds {
  /**
  * API Group string of a Kubernetes resource, e.g.
  * "apiextensions.k8s.io", "storage.k8s.io", etc.
  * Use empty string for core group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#resource_group GkeBackupRestorePlan#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Kind of a Kubernetes resource, e.g.
  * "CustomResourceDefinition", "StorageClass", etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#resource_kind GkeBackupRestorePlan#resource_kind}
  */
  readonly resourceKind?: string;
}

export function gkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsToTerraform(struct?: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    resource_kind: cdktf.stringToTerraform(struct!.resourceKind),
  }
}


export function gkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsToHclTerraform(struct?: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_kind: {
      value: cdktf.stringToHclTerraform(struct!.resourceKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._resourceKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceKind = this._resourceKind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceGroup = undefined;
      this._resourceKind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceGroup = value.resourceGroup;
      this._resourceKind = value.resourceKind;
    }
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // resource_kind - computed: false, optional: true, required: false
  private _resourceKind?: string; 
  public get resourceKind() {
    return this.getStringAttribute('resource_kind');
  }
  public set resourceKind(value: string) {
    this._resourceKind = value;
  }
  public resetResourceKind() {
    this._resourceKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceKindInput() {
    return this._resourceKind;
  }
}

export class GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList extends cdktf.ComplexList {
  public internalValue? : GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds[] | cdktf.IResolvable

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
  public get(index: number): GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference {
    return new GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds {
  /**
  * API Group string of a Kubernetes resource, e.g.
  * "apiextensions.k8s.io", "storage.k8s.io", etc.
  * Use empty string for core group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#resource_group GkeBackupRestorePlan#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Kind of a Kubernetes resource, e.g.
  * "CustomResourceDefinition", "StorageClass", etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#resource_kind GkeBackupRestorePlan#resource_kind}
  */
  readonly resourceKind?: string;
}

export function gkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsToTerraform(struct?: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    resource_kind: cdktf.stringToTerraform(struct!.resourceKind),
  }
}


export function gkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsToHclTerraform(struct?: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_kind: {
      value: cdktf.stringToHclTerraform(struct!.resourceKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._resourceKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceKind = this._resourceKind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceGroup = undefined;
      this._resourceKind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceGroup = value.resourceGroup;
      this._resourceKind = value.resourceKind;
    }
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // resource_kind - computed: false, optional: true, required: false
  private _resourceKind?: string; 
  public get resourceKind() {
    return this.getStringAttribute('resource_kind');
  }
  public set resourceKind(value: string) {
    this._resourceKind = value;
  }
  public resetResourceKind() {
    this._resourceKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceKindInput() {
    return this._resourceKind;
  }
}

export class GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList extends cdktf.ComplexList {
  public internalValue? : GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds[] | cdktf.IResolvable

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
  public get(index: number): GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference {
    return new GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope {
  /**
  * If True, all valid cluster-scoped resources will be restored.
  * Mutually exclusive to any other field in 'clusterResourceRestoreScope'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#all_group_kinds GkeBackupRestorePlan#all_group_kinds}
  */
  readonly allGroupKinds?: boolean | cdktf.IResolvable;
  /**
  * If True, no cluster-scoped resources will be restored.
  * Mutually exclusive to any other field in 'clusterResourceRestoreScope'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#no_group_kinds GkeBackupRestorePlan#no_group_kinds}
  */
  readonly noGroupKinds?: boolean | cdktf.IResolvable;
  /**
  * excluded_group_kinds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#excluded_group_kinds GkeBackupRestorePlan#excluded_group_kinds}
  */
  readonly excludedGroupKinds?: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds[] | cdktf.IResolvable;
  /**
  * selected_group_kinds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#selected_group_kinds GkeBackupRestorePlan#selected_group_kinds}
  */
  readonly selectedGroupKinds?: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds[] | cdktf.IResolvable;
}

export function gkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeToTerraform(struct?: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference | GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_group_kinds: cdktf.booleanToTerraform(struct!.allGroupKinds),
    no_group_kinds: cdktf.booleanToTerraform(struct!.noGroupKinds),
    excluded_group_kinds: cdktf.listMapper(gkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsToTerraform, true)(struct!.excludedGroupKinds),
    selected_group_kinds: cdktf.listMapper(gkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsToTerraform, true)(struct!.selectedGroupKinds),
  }
}


export function gkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeToHclTerraform(struct?: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference | GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_group_kinds: {
      value: cdktf.booleanToHclTerraform(struct!.allGroupKinds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_group_kinds: {
      value: cdktf.booleanToHclTerraform(struct!.noGroupKinds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    excluded_group_kinds: {
      value: cdktf.listMapperHcl(gkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsToHclTerraform, true)(struct!.excludedGroupKinds),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList",
    },
    selected_group_kinds: {
      value: cdktf.listMapperHcl(gkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsToHclTerraform, true)(struct!.selectedGroupKinds),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allGroupKinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.allGroupKinds = this._allGroupKinds;
    }
    if (this._noGroupKinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.noGroupKinds = this._noGroupKinds;
    }
    if (this._excludedGroupKinds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedGroupKinds = this._excludedGroupKinds?.internalValue;
    }
    if (this._selectedGroupKinds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedGroupKinds = this._selectedGroupKinds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allGroupKinds = undefined;
      this._noGroupKinds = undefined;
      this._excludedGroupKinds.internalValue = undefined;
      this._selectedGroupKinds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allGroupKinds = value.allGroupKinds;
      this._noGroupKinds = value.noGroupKinds;
      this._excludedGroupKinds.internalValue = value.excludedGroupKinds;
      this._selectedGroupKinds.internalValue = value.selectedGroupKinds;
    }
  }

  // all_group_kinds - computed: false, optional: true, required: false
  private _allGroupKinds?: boolean | cdktf.IResolvable; 
  public get allGroupKinds() {
    return this.getBooleanAttribute('all_group_kinds');
  }
  public set allGroupKinds(value: boolean | cdktf.IResolvable) {
    this._allGroupKinds = value;
  }
  public resetAllGroupKinds() {
    this._allGroupKinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allGroupKindsInput() {
    return this._allGroupKinds;
  }

  // no_group_kinds - computed: false, optional: true, required: false
  private _noGroupKinds?: boolean | cdktf.IResolvable; 
  public get noGroupKinds() {
    return this.getBooleanAttribute('no_group_kinds');
  }
  public set noGroupKinds(value: boolean | cdktf.IResolvable) {
    this._noGroupKinds = value;
  }
  public resetNoGroupKinds() {
    this._noGroupKinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noGroupKindsInput() {
    return this._noGroupKinds;
  }

  // excluded_group_kinds - computed: false, optional: true, required: false
  private _excludedGroupKinds = new GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKindsList(this, "excluded_group_kinds", false);
  public get excludedGroupKinds() {
    return this._excludedGroupKinds;
  }
  public putExcludedGroupKinds(value: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeExcludedGroupKinds[] | cdktf.IResolvable) {
    this._excludedGroupKinds.internalValue = value;
  }
  public resetExcludedGroupKinds() {
    this._excludedGroupKinds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedGroupKindsInput() {
    return this._excludedGroupKinds.internalValue;
  }

  // selected_group_kinds - computed: false, optional: true, required: false
  private _selectedGroupKinds = new GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKindsList(this, "selected_group_kinds", false);
  public get selectedGroupKinds() {
    return this._selectedGroupKinds;
  }
  public putSelectedGroupKinds(value: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeSelectedGroupKinds[] | cdktf.IResolvable) {
    this._selectedGroupKinds.internalValue = value;
  }
  public resetSelectedGroupKinds() {
    this._selectedGroupKinds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedGroupKindsInput() {
    return this._selectedGroupKinds.internalValue;
  }
}
export interface GkeBackupRestorePlanRestoreConfigExcludedNamespaces {
  /**
  * A list of Kubernetes Namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#namespaces GkeBackupRestorePlan#namespaces}
  */
  readonly namespaces: string[];
}

export function gkeBackupRestorePlanRestoreConfigExcludedNamespacesToTerraform(struct?: GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference | GkeBackupRestorePlanRestoreConfigExcludedNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
  }
}


export function gkeBackupRestorePlanRestoreConfigExcludedNamespacesToHclTerraform(struct?: GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference | GkeBackupRestorePlanRestoreConfigExcludedNamespaces): any {
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

export class GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeBackupRestorePlanRestoreConfigExcludedNamespaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupRestorePlanRestoreConfigExcludedNamespaces | undefined) {
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
export interface GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring {
  /**
  * API Group of a Kubernetes resource, e.g.
  * "apiextensions.k8s.io", "storage.k8s.io", etc.
  * Use empty string for core group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#resource_group GkeBackupRestorePlan#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Kind of a Kubernetes resource, e.g.
  * "CustomResourceDefinition", "StorageClass", etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#resource_kind GkeBackupRestorePlan#resource_kind}
  */
  readonly resourceKind?: string;
}

export function gkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringToTerraform(struct?: GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference | GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    resource_kind: cdktf.stringToTerraform(struct!.resourceKind),
  }
}


export function gkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringToHclTerraform(struct?: GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference | GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_kind: {
      value: cdktf.stringToHclTerraform(struct!.resourceKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._resourceKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceKind = this._resourceKind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceGroup = undefined;
      this._resourceKind = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceGroup = value.resourceGroup;
      this._resourceKind = value.resourceKind;
    }
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // resource_kind - computed: false, optional: true, required: false
  private _resourceKind?: string; 
  public get resourceKind() {
    return this.getStringAttribute('resource_kind');
  }
  public set resourceKind(value: string) {
    this._resourceKind = value;
  }
  public resetResourceKind() {
    this._resourceKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceKindInput() {
    return this._resourceKind;
  }
}
export interface GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying {
  /**
  * API Group of a Kubernetes resource, e.g.
  * "apiextensions.k8s.io", "storage.k8s.io", etc.
  * Use empty string for core group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#resource_group GkeBackupRestorePlan#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Kind of a Kubernetes resource, e.g.
  * "CustomResourceDefinition", "StorageClass", etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#resource_kind GkeBackupRestorePlan#resource_kind}
  */
  readonly resourceKind?: string;
}

export function gkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingToTerraform(struct?: GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference | GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    resource_kind: cdktf.stringToTerraform(struct!.resourceKind),
  }
}


export function gkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingToHclTerraform(struct?: GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference | GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_kind: {
      value: cdktf.stringToHclTerraform(struct!.resourceKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._resourceKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceKind = this._resourceKind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceGroup = undefined;
      this._resourceKind = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceGroup = value.resourceGroup;
      this._resourceKind = value.resourceKind;
    }
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // resource_kind - computed: false, optional: true, required: false
  private _resourceKind?: string; 
  public get resourceKind() {
    return this.getStringAttribute('resource_kind');
  }
  public set resourceKind(value: string) {
    this._resourceKind = value;
  }
  public resetResourceKind() {
    this._resourceKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceKindInput() {
    return this._resourceKind;
  }
}
export interface GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies {
  /**
  * requiring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#requiring GkeBackupRestorePlan#requiring}
  */
  readonly requiring: GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring;
  /**
  * satisfying block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#satisfying GkeBackupRestorePlan#satisfying}
  */
  readonly satisfying: GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying;
}

export function gkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesToTerraform(struct?: GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    requiring: gkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringToTerraform(struct!.requiring),
    satisfying: gkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingToTerraform(struct!.satisfying),
  }
}


export function gkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesToHclTerraform(struct?: GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    requiring: {
      value: gkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringToHclTerraform(struct!.requiring),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringList",
    },
    satisfying: {
      value: gkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingToHclTerraform(struct!.satisfying),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requiring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiring = this._requiring?.internalValue;
    }
    if (this._satisfying?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.satisfying = this._satisfying?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requiring.internalValue = undefined;
      this._satisfying.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requiring.internalValue = value.requiring;
      this._satisfying.internalValue = value.satisfying;
    }
  }

  // requiring - computed: false, optional: false, required: true
  private _requiring = new GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiringOutputReference(this, "requiring");
  public get requiring() {
    return this._requiring;
  }
  public putRequiring(value: GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesRequiring) {
    this._requiring.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiringInput() {
    return this._requiring.internalValue;
  }

  // satisfying - computed: false, optional: false, required: true
  private _satisfying = new GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfyingOutputReference(this, "satisfying");
  public get satisfying() {
    return this._satisfying;
  }
  public putSatisfying(value: GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesSatisfying) {
    this._satisfying.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get satisfyingInput() {
    return this._satisfying.internalValue;
  }
}

export class GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList extends cdktf.ComplexList {
  public internalValue? : GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies[] | cdktf.IResolvable

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
  public get(index: number): GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference {
    return new GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeBackupRestorePlanRestoreConfigRestoreOrder {
  /**
  * group_kind_dependencies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#group_kind_dependencies GkeBackupRestorePlan#group_kind_dependencies}
  */
  readonly groupKindDependencies: GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies[] | cdktf.IResolvable;
}

export function gkeBackupRestorePlanRestoreConfigRestoreOrderToTerraform(struct?: GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference | GkeBackupRestorePlanRestoreConfigRestoreOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_kind_dependencies: cdktf.listMapper(gkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesToTerraform, true)(struct!.groupKindDependencies),
  }
}


export function gkeBackupRestorePlanRestoreConfigRestoreOrderToHclTerraform(struct?: GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference | GkeBackupRestorePlanRestoreConfigRestoreOrder): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_kind_dependencies: {
      value: cdktf.listMapperHcl(gkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesToHclTerraform, true)(struct!.groupKindDependencies),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeBackupRestorePlanRestoreConfigRestoreOrder | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupKindDependencies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupKindDependencies = this._groupKindDependencies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupRestorePlanRestoreConfigRestoreOrder | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupKindDependencies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupKindDependencies.internalValue = value.groupKindDependencies;
    }
  }

  // group_kind_dependencies - computed: false, optional: false, required: true
  private _groupKindDependencies = new GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependenciesList(this, "group_kind_dependencies", false);
  public get groupKindDependencies() {
    return this._groupKindDependencies;
  }
  public putGroupKindDependencies(value: GkeBackupRestorePlanRestoreConfigRestoreOrderGroupKindDependencies[] | cdktf.IResolvable) {
    this._groupKindDependencies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupKindDependenciesInput() {
    return this._groupKindDependencies.internalValue;
  }
}
export interface GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames {
  /**
  * The name of a Kubernetes Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#name GkeBackupRestorePlan#name}
  */
  readonly name: string;
  /**
  * The namespace of a Kubernetes Resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#namespace GkeBackupRestorePlan#namespace}
  */
  readonly namespace: string;
}

export function gkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesToTerraform(struct?: GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function gkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesToHclTerraform(struct?: GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames | cdktf.IResolvable): any {
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

export class GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames | cdktf.IResolvable | undefined) {
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

export class GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList extends cdktf.ComplexList {
  public internalValue? : GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames[] | cdktf.IResolvable

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
  public get(index: number): GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference {
    return new GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeBackupRestorePlanRestoreConfigSelectedApplications {
  /**
  * namespaced_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#namespaced_names GkeBackupRestorePlan#namespaced_names}
  */
  readonly namespacedNames: GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames[] | cdktf.IResolvable;
}

export function gkeBackupRestorePlanRestoreConfigSelectedApplicationsToTerraform(struct?: GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference | GkeBackupRestorePlanRestoreConfigSelectedApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaced_names: cdktf.listMapper(gkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesToTerraform, true)(struct!.namespacedNames),
  }
}


export function gkeBackupRestorePlanRestoreConfigSelectedApplicationsToHclTerraform(struct?: GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference | GkeBackupRestorePlanRestoreConfigSelectedApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaced_names: {
      value: cdktf.listMapperHcl(gkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesToHclTerraform, true)(struct!.namespacedNames),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeBackupRestorePlanRestoreConfigSelectedApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespacedNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespacedNames = this._namespacedNames?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupRestorePlanRestoreConfigSelectedApplications | undefined) {
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
  private _namespacedNames = new GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNamesList(this, "namespaced_names", false);
  public get namespacedNames() {
    return this._namespacedNames;
  }
  public putNamespacedNames(value: GkeBackupRestorePlanRestoreConfigSelectedApplicationsNamespacedNames[] | cdktf.IResolvable) {
    this._namespacedNames.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacedNamesInput() {
    return this._namespacedNames.internalValue;
  }
}
export interface GkeBackupRestorePlanRestoreConfigSelectedNamespaces {
  /**
  * A list of Kubernetes Namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#namespaces GkeBackupRestorePlan#namespaces}
  */
  readonly namespaces: string[];
}

export function gkeBackupRestorePlanRestoreConfigSelectedNamespacesToTerraform(struct?: GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference | GkeBackupRestorePlanRestoreConfigSelectedNamespaces): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
  }
}


export function gkeBackupRestorePlanRestoreConfigSelectedNamespacesToHclTerraform(struct?: GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference | GkeBackupRestorePlanRestoreConfigSelectedNamespaces): any {
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

export class GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeBackupRestorePlanRestoreConfigSelectedNamespaces | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupRestorePlanRestoreConfigSelectedNamespaces | undefined) {
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
export interface GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions {
  /**
  * A string containing a JSON Pointer value that references the
  * location in the target document to move the value from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#from_path GkeBackupRestorePlan#from_path}
  */
  readonly fromPath?: string;
  /**
  * Specifies the operation to perform. Possible values: ["REMOVE", "MOVE", "COPY", "ADD", "TEST", "REPLACE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#op GkeBackupRestorePlan#op}
  */
  readonly op: string;
  /**
  * A string containing a JSON-Pointer value that references a
  * location within the target document where the operation is performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#path GkeBackupRestorePlan#path}
  */
  readonly path?: string;
  /**
  * A string that specifies the desired value in string format
  * to use for transformation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#value GkeBackupRestorePlan#value}
  */
  readonly value?: string;
}

export function gkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsToTerraform(struct?: GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_path: cdktf.stringToTerraform(struct!.fromPath),
    op: cdktf.stringToTerraform(struct!.op),
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function gkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsToHclTerraform(struct?: GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_path: {
      value: cdktf.stringToHclTerraform(struct!.fromPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromPath = this._fromPath;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromPath = undefined;
      this._op = undefined;
      this._path = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromPath = value.fromPath;
      this._op = value.op;
      this._path = value.path;
      this._value = value.value;
    }
  }

  // from_path - computed: false, optional: true, required: false
  private _fromPath?: string; 
  public get fromPath() {
    return this.getStringAttribute('from_path');
  }
  public set fromPath(value: string) {
    this._fromPath = value;
  }
  public resetFromPath() {
    this._fromPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromPathInput() {
    return this._fromPath;
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList extends cdktf.ComplexList {
  public internalValue? : GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions[] | cdktf.IResolvable

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
  public get(index: number): GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference {
    return new GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds {
  /**
  * API Group string of a Kubernetes resource, e.g.
  * "apiextensions.k8s.io", "storage.k8s.io", etc.
  * Use empty string for core group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#resource_group GkeBackupRestorePlan#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Kind of a Kubernetes resource, e.g.
  * "CustomResourceDefinition", "StorageClass", etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#resource_kind GkeBackupRestorePlan#resource_kind}
  */
  readonly resourceKind?: string;
}

export function gkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsToTerraform(struct?: GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    resource_kind: cdktf.stringToTerraform(struct!.resourceKind),
  }
}


export function gkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsToHclTerraform(struct?: GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_kind: {
      value: cdktf.stringToHclTerraform(struct!.resourceKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._resourceKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceKind = this._resourceKind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceGroup = undefined;
      this._resourceKind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceGroup = value.resourceGroup;
      this._resourceKind = value.resourceKind;
    }
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // resource_kind - computed: false, optional: true, required: false
  private _resourceKind?: string; 
  public get resourceKind() {
    return this.getStringAttribute('resource_kind');
  }
  public set resourceKind(value: string) {
    this._resourceKind = value;
  }
  public resetResourceKind() {
    this._resourceKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceKindInput() {
    return this._resourceKind;
  }
}

export class GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList extends cdktf.ComplexList {
  public internalValue? : GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds[] | cdktf.IResolvable

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
  public get(index: number): GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference {
    return new GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter {
  /**
  * This is a JSONPath expression that matches specific fields of
  * candidate resources and it operates as a filtering parameter
  * (resources that are not matched with this expression will not
  * be candidates for transformation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#json_path GkeBackupRestorePlan#json_path}
  */
  readonly jsonPath?: string;
  /**
  * (Filtering parameter) Any resource subject to transformation must
  * be contained within one of the listed Kubernetes Namespace in the
  * Backup. If this field is not provided, no namespace filtering will
  * be performed (all resources in all Namespaces, including all
  * cluster-scoped resources, will be candidates for transformation).
  * To mix cluster-scoped and namespaced resources in the same rule,
  * use an empty string ("") as one of the target namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#namespaces GkeBackupRestorePlan#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * group_kinds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#group_kinds GkeBackupRestorePlan#group_kinds}
  */
  readonly groupKinds?: GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds[] | cdktf.IResolvable;
}

export function gkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterToTerraform(struct?: GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference | GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_path: cdktf.stringToTerraform(struct!.jsonPath),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    group_kinds: cdktf.listMapper(gkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsToTerraform, true)(struct!.groupKinds),
  }
}


export function gkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterToHclTerraform(struct?: GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference | GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_path: {
      value: cdktf.stringToHclTerraform(struct!.jsonPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_kinds: {
      value: cdktf.listMapperHcl(gkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsToHclTerraform, true)(struct!.groupKinds),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPath = this._jsonPath;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._groupKinds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupKinds = this._groupKinds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonPath = undefined;
      this._namespaces = undefined;
      this._groupKinds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonPath = value.jsonPath;
      this._namespaces = value.namespaces;
      this._groupKinds.internalValue = value.groupKinds;
    }
  }

  // json_path - computed: false, optional: true, required: false
  private _jsonPath?: string; 
  public get jsonPath() {
    return this.getStringAttribute('json_path');
  }
  public set jsonPath(value: string) {
    this._jsonPath = value;
  }
  public resetJsonPath() {
    this._jsonPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPathInput() {
    return this._jsonPath;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // group_kinds - computed: false, optional: true, required: false
  private _groupKinds = new GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKindsList(this, "group_kinds", false);
  public get groupKinds() {
    return this._groupKinds;
  }
  public putGroupKinds(value: GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterGroupKinds[] | cdktf.IResolvable) {
    this._groupKinds.internalValue = value;
  }
  public resetGroupKinds() {
    this._groupKinds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupKindsInput() {
    return this._groupKinds.internalValue;
  }
}
export interface GkeBackupRestorePlanRestoreConfigTransformationRules {
  /**
  * The description is a user specified string description
  * of the transformation rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#description GkeBackupRestorePlan#description}
  */
  readonly description?: string;
  /**
  * field_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#field_actions GkeBackupRestorePlan#field_actions}
  */
  readonly fieldActions: GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions[] | cdktf.IResolvable;
  /**
  * resource_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#resource_filter GkeBackupRestorePlan#resource_filter}
  */
  readonly resourceFilter?: GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter;
}

export function gkeBackupRestorePlanRestoreConfigTransformationRulesToTerraform(struct?: GkeBackupRestorePlanRestoreConfigTransformationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    field_actions: cdktf.listMapper(gkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsToTerraform, true)(struct!.fieldActions),
    resource_filter: gkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterToTerraform(struct!.resourceFilter),
  }
}


export function gkeBackupRestorePlanRestoreConfigTransformationRulesToHclTerraform(struct?: GkeBackupRestorePlanRestoreConfigTransformationRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_actions: {
      value: cdktf.listMapperHcl(gkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsToHclTerraform, true)(struct!.fieldActions),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList",
    },
    resource_filter: {
      value: gkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterToHclTerraform(struct!.resourceFilter),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeBackupRestorePlanRestoreConfigTransformationRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._fieldActions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldActions = this._fieldActions?.internalValue;
    }
    if (this._resourceFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFilter = this._resourceFilter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupRestorePlanRestoreConfigTransformationRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._fieldActions.internalValue = undefined;
      this._resourceFilter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._fieldActions.internalValue = value.fieldActions;
      this._resourceFilter.internalValue = value.resourceFilter;
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

  // field_actions - computed: false, optional: false, required: true
  private _fieldActions = new GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActionsList(this, "field_actions", false);
  public get fieldActions() {
    return this._fieldActions;
  }
  public putFieldActions(value: GkeBackupRestorePlanRestoreConfigTransformationRulesFieldActions[] | cdktf.IResolvable) {
    this._fieldActions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldActionsInput() {
    return this._fieldActions.internalValue;
  }

  // resource_filter - computed: false, optional: true, required: false
  private _resourceFilter = new GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilterOutputReference(this, "resource_filter");
  public get resourceFilter() {
    return this._resourceFilter;
  }
  public putResourceFilter(value: GkeBackupRestorePlanRestoreConfigTransformationRulesResourceFilter) {
    this._resourceFilter.internalValue = value;
  }
  public resetResourceFilter() {
    this._resourceFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFilterInput() {
    return this._resourceFilter.internalValue;
  }
}

export class GkeBackupRestorePlanRestoreConfigTransformationRulesList extends cdktf.ComplexList {
  public internalValue? : GkeBackupRestorePlanRestoreConfigTransformationRules[] | cdktf.IResolvable

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
  public get(index: number): GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference {
    return new GkeBackupRestorePlanRestoreConfigTransformationRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings {
  /**
  * Specifies the mechanism to be used to restore this volume data.
  * See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#VolumeDataRestorePolicy
  * for more information on each policy option. Possible values: ["RESTORE_VOLUME_DATA_FROM_BACKUP", "REUSE_VOLUME_HANDLE_FROM_BACKUP", "NO_VOLUME_DATA_RESTORATION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#policy GkeBackupRestorePlan#policy}
  */
  readonly policy: string;
  /**
  * The volume type, as determined by the PVC's
  * bound PV, to apply the policy to. Possible values: ["GCE_PERSISTENT_DISK"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#volume_type GkeBackupRestorePlan#volume_type}
  */
  readonly volumeType: string;
}

export function gkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsToTerraform(struct?: GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function gkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsToHclTerraform(struct?: GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policy = undefined;
      this._volumeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policy = value.policy;
      this._volumeType = value.volumeType;
    }
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // volume_type - computed: false, optional: false, required: true
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}

export class GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList extends cdktf.ComplexList {
  public internalValue? : GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings[] | cdktf.IResolvable

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
  public get(index: number): GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference {
    return new GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeBackupRestorePlanRestoreConfig {
  /**
  * If True, restore all namespaced resources in the Backup.
  * Setting this field to False will result in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#all_namespaces GkeBackupRestorePlan#all_namespaces}
  */
  readonly allNamespaces?: boolean | cdktf.IResolvable;
  /**
  * Defines the behavior for handling the situation where cluster-scoped resources
  * being restored already exist in the target cluster.
  * This MUST be set to a value other than 'CLUSTER_RESOURCE_CONFLICT_POLICY_UNSPECIFIED'
  * if 'clusterResourceRestoreScope' is anyting other than 'noGroupKinds'.
  * See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#clusterresourceconflictpolicy
  * for more information on each policy option. Possible values: ["USE_EXISTING_VERSION", "USE_BACKUP_VERSION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#cluster_resource_conflict_policy GkeBackupRestorePlan#cluster_resource_conflict_policy}
  */
  readonly clusterResourceConflictPolicy?: string;
  /**
  * Defines the behavior for handling the situation where sets of namespaced resources
  * being restored already exist in the target cluster.
  * This MUST be set to a value other than 'NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED'
  * if the 'namespacedResourceRestoreScope' is anything other than 'noNamespaces'.
  * See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#namespacedresourcerestoremode
  * for more information on each mode. Possible values: ["DELETE_AND_RESTORE", "FAIL_ON_CONFLICT", "MERGE_SKIP_ON_CONFLICT", "MERGE_REPLACE_VOLUME_ON_CONFLICT", "MERGE_REPLACE_ON_CONFLICT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#namespaced_resource_restore_mode GkeBackupRestorePlan#namespaced_resource_restore_mode}
  */
  readonly namespacedResourceRestoreMode?: string;
  /**
  * Do not restore any namespaced resources if set to "True".
  * Specifying this field to "False" is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#no_namespaces GkeBackupRestorePlan#no_namespaces}
  */
  readonly noNamespaces?: boolean | cdktf.IResolvable;
  /**
  * Specifies the mechanism to be used to restore volume data.
  * This should be set to a value other than 'NAMESPACED_RESOURCE_RESTORE_MODE_UNSPECIFIED'
  * if the 'namespacedResourceRestoreScope' is anything other than 'noNamespaces'.
  * If not specified, it will be treated as 'NO_VOLUME_DATA_RESTORATION'.
  * See https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke/reference/rest/v1/RestoreConfig#VolumeDataRestorePolicy
  * for more information on each policy option. Possible values: ["RESTORE_VOLUME_DATA_FROM_BACKUP", "REUSE_VOLUME_HANDLE_FROM_BACKUP", "NO_VOLUME_DATA_RESTORATION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#volume_data_restore_policy GkeBackupRestorePlan#volume_data_restore_policy}
  */
  readonly volumeDataRestorePolicy?: string;
  /**
  * cluster_resource_restore_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#cluster_resource_restore_scope GkeBackupRestorePlan#cluster_resource_restore_scope}
  */
  readonly clusterResourceRestoreScope?: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope;
  /**
  * excluded_namespaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#excluded_namespaces GkeBackupRestorePlan#excluded_namespaces}
  */
  readonly excludedNamespaces?: GkeBackupRestorePlanRestoreConfigExcludedNamespaces;
  /**
  * restore_order block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#restore_order GkeBackupRestorePlan#restore_order}
  */
  readonly restoreOrder?: GkeBackupRestorePlanRestoreConfigRestoreOrder;
  /**
  * selected_applications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#selected_applications GkeBackupRestorePlan#selected_applications}
  */
  readonly selectedApplications?: GkeBackupRestorePlanRestoreConfigSelectedApplications;
  /**
  * selected_namespaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#selected_namespaces GkeBackupRestorePlan#selected_namespaces}
  */
  readonly selectedNamespaces?: GkeBackupRestorePlanRestoreConfigSelectedNamespaces;
  /**
  * transformation_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#transformation_rules GkeBackupRestorePlan#transformation_rules}
  */
  readonly transformationRules?: GkeBackupRestorePlanRestoreConfigTransformationRules[] | cdktf.IResolvable;
  /**
  * volume_data_restore_policy_bindings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#volume_data_restore_policy_bindings GkeBackupRestorePlan#volume_data_restore_policy_bindings}
  */
  readonly volumeDataRestorePolicyBindings?: GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings[] | cdktf.IResolvable;
}

export function gkeBackupRestorePlanRestoreConfigToTerraform(struct?: GkeBackupRestorePlanRestoreConfigOutputReference | GkeBackupRestorePlanRestoreConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_namespaces: cdktf.booleanToTerraform(struct!.allNamespaces),
    cluster_resource_conflict_policy: cdktf.stringToTerraform(struct!.clusterResourceConflictPolicy),
    namespaced_resource_restore_mode: cdktf.stringToTerraform(struct!.namespacedResourceRestoreMode),
    no_namespaces: cdktf.booleanToTerraform(struct!.noNamespaces),
    volume_data_restore_policy: cdktf.stringToTerraform(struct!.volumeDataRestorePolicy),
    cluster_resource_restore_scope: gkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeToTerraform(struct!.clusterResourceRestoreScope),
    excluded_namespaces: gkeBackupRestorePlanRestoreConfigExcludedNamespacesToTerraform(struct!.excludedNamespaces),
    restore_order: gkeBackupRestorePlanRestoreConfigRestoreOrderToTerraform(struct!.restoreOrder),
    selected_applications: gkeBackupRestorePlanRestoreConfigSelectedApplicationsToTerraform(struct!.selectedApplications),
    selected_namespaces: gkeBackupRestorePlanRestoreConfigSelectedNamespacesToTerraform(struct!.selectedNamespaces),
    transformation_rules: cdktf.listMapper(gkeBackupRestorePlanRestoreConfigTransformationRulesToTerraform, true)(struct!.transformationRules),
    volume_data_restore_policy_bindings: cdktf.listMapper(gkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsToTerraform, true)(struct!.volumeDataRestorePolicyBindings),
  }
}


export function gkeBackupRestorePlanRestoreConfigToHclTerraform(struct?: GkeBackupRestorePlanRestoreConfigOutputReference | GkeBackupRestorePlanRestoreConfig): any {
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
    cluster_resource_conflict_policy: {
      value: cdktf.stringToHclTerraform(struct!.clusterResourceConflictPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespaced_resource_restore_mode: {
      value: cdktf.stringToHclTerraform(struct!.namespacedResourceRestoreMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_namespaces: {
      value: cdktf.booleanToHclTerraform(struct!.noNamespaces),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_data_restore_policy: {
      value: cdktf.stringToHclTerraform(struct!.volumeDataRestorePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_resource_restore_scope: {
      value: gkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeToHclTerraform(struct!.clusterResourceRestoreScope),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeList",
    },
    excluded_namespaces: {
      value: gkeBackupRestorePlanRestoreConfigExcludedNamespacesToHclTerraform(struct!.excludedNamespaces),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupRestorePlanRestoreConfigExcludedNamespacesList",
    },
    restore_order: {
      value: gkeBackupRestorePlanRestoreConfigRestoreOrderToHclTerraform(struct!.restoreOrder),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupRestorePlanRestoreConfigRestoreOrderList",
    },
    selected_applications: {
      value: gkeBackupRestorePlanRestoreConfigSelectedApplicationsToHclTerraform(struct!.selectedApplications),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupRestorePlanRestoreConfigSelectedApplicationsList",
    },
    selected_namespaces: {
      value: gkeBackupRestorePlanRestoreConfigSelectedNamespacesToHclTerraform(struct!.selectedNamespaces),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupRestorePlanRestoreConfigSelectedNamespacesList",
    },
    transformation_rules: {
      value: cdktf.listMapperHcl(gkeBackupRestorePlanRestoreConfigTransformationRulesToHclTerraform, true)(struct!.transformationRules),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupRestorePlanRestoreConfigTransformationRulesList",
    },
    volume_data_restore_policy_bindings: {
      value: cdktf.listMapperHcl(gkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsToHclTerraform, true)(struct!.volumeDataRestorePolicyBindings),
      isBlock: true,
      type: "list",
      storageClassType: "GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeBackupRestorePlanRestoreConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeBackupRestorePlanRestoreConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.allNamespaces = this._allNamespaces;
    }
    if (this._clusterResourceConflictPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterResourceConflictPolicy = this._clusterResourceConflictPolicy;
    }
    if (this._namespacedResourceRestoreMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespacedResourceRestoreMode = this._namespacedResourceRestoreMode;
    }
    if (this._noNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.noNamespaces = this._noNamespaces;
    }
    if (this._volumeDataRestorePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeDataRestorePolicy = this._volumeDataRestorePolicy;
    }
    if (this._clusterResourceRestoreScope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterResourceRestoreScope = this._clusterResourceRestoreScope?.internalValue;
    }
    if (this._excludedNamespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedNamespaces = this._excludedNamespaces?.internalValue;
    }
    if (this._restoreOrder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreOrder = this._restoreOrder?.internalValue;
    }
    if (this._selectedApplications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedApplications = this._selectedApplications?.internalValue;
    }
    if (this._selectedNamespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedNamespaces = this._selectedNamespaces?.internalValue;
    }
    if (this._transformationRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationRules = this._transformationRules?.internalValue;
    }
    if (this._volumeDataRestorePolicyBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeDataRestorePolicyBindings = this._volumeDataRestorePolicyBindings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeBackupRestorePlanRestoreConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allNamespaces = undefined;
      this._clusterResourceConflictPolicy = undefined;
      this._namespacedResourceRestoreMode = undefined;
      this._noNamespaces = undefined;
      this._volumeDataRestorePolicy = undefined;
      this._clusterResourceRestoreScope.internalValue = undefined;
      this._excludedNamespaces.internalValue = undefined;
      this._restoreOrder.internalValue = undefined;
      this._selectedApplications.internalValue = undefined;
      this._selectedNamespaces.internalValue = undefined;
      this._transformationRules.internalValue = undefined;
      this._volumeDataRestorePolicyBindings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allNamespaces = value.allNamespaces;
      this._clusterResourceConflictPolicy = value.clusterResourceConflictPolicy;
      this._namespacedResourceRestoreMode = value.namespacedResourceRestoreMode;
      this._noNamespaces = value.noNamespaces;
      this._volumeDataRestorePolicy = value.volumeDataRestorePolicy;
      this._clusterResourceRestoreScope.internalValue = value.clusterResourceRestoreScope;
      this._excludedNamespaces.internalValue = value.excludedNamespaces;
      this._restoreOrder.internalValue = value.restoreOrder;
      this._selectedApplications.internalValue = value.selectedApplications;
      this._selectedNamespaces.internalValue = value.selectedNamespaces;
      this._transformationRules.internalValue = value.transformationRules;
      this._volumeDataRestorePolicyBindings.internalValue = value.volumeDataRestorePolicyBindings;
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

  // cluster_resource_conflict_policy - computed: false, optional: true, required: false
  private _clusterResourceConflictPolicy?: string; 
  public get clusterResourceConflictPolicy() {
    return this.getStringAttribute('cluster_resource_conflict_policy');
  }
  public set clusterResourceConflictPolicy(value: string) {
    this._clusterResourceConflictPolicy = value;
  }
  public resetClusterResourceConflictPolicy() {
    this._clusterResourceConflictPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterResourceConflictPolicyInput() {
    return this._clusterResourceConflictPolicy;
  }

  // namespaced_resource_restore_mode - computed: false, optional: true, required: false
  private _namespacedResourceRestoreMode?: string; 
  public get namespacedResourceRestoreMode() {
    return this.getStringAttribute('namespaced_resource_restore_mode');
  }
  public set namespacedResourceRestoreMode(value: string) {
    this._namespacedResourceRestoreMode = value;
  }
  public resetNamespacedResourceRestoreMode() {
    this._namespacedResourceRestoreMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacedResourceRestoreModeInput() {
    return this._namespacedResourceRestoreMode;
  }

  // no_namespaces - computed: false, optional: true, required: false
  private _noNamespaces?: boolean | cdktf.IResolvable; 
  public get noNamespaces() {
    return this.getBooleanAttribute('no_namespaces');
  }
  public set noNamespaces(value: boolean | cdktf.IResolvable) {
    this._noNamespaces = value;
  }
  public resetNoNamespaces() {
    this._noNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noNamespacesInput() {
    return this._noNamespaces;
  }

  // volume_data_restore_policy - computed: false, optional: true, required: false
  private _volumeDataRestorePolicy?: string; 
  public get volumeDataRestorePolicy() {
    return this.getStringAttribute('volume_data_restore_policy');
  }
  public set volumeDataRestorePolicy(value: string) {
    this._volumeDataRestorePolicy = value;
  }
  public resetVolumeDataRestorePolicy() {
    this._volumeDataRestorePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeDataRestorePolicyInput() {
    return this._volumeDataRestorePolicy;
  }

  // cluster_resource_restore_scope - computed: false, optional: true, required: false
  private _clusterResourceRestoreScope = new GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScopeOutputReference(this, "cluster_resource_restore_scope");
  public get clusterResourceRestoreScope() {
    return this._clusterResourceRestoreScope;
  }
  public putClusterResourceRestoreScope(value: GkeBackupRestorePlanRestoreConfigClusterResourceRestoreScope) {
    this._clusterResourceRestoreScope.internalValue = value;
  }
  public resetClusterResourceRestoreScope() {
    this._clusterResourceRestoreScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterResourceRestoreScopeInput() {
    return this._clusterResourceRestoreScope.internalValue;
  }

  // excluded_namespaces - computed: false, optional: true, required: false
  private _excludedNamespaces = new GkeBackupRestorePlanRestoreConfigExcludedNamespacesOutputReference(this, "excluded_namespaces");
  public get excludedNamespaces() {
    return this._excludedNamespaces;
  }
  public putExcludedNamespaces(value: GkeBackupRestorePlanRestoreConfigExcludedNamespaces) {
    this._excludedNamespaces.internalValue = value;
  }
  public resetExcludedNamespaces() {
    this._excludedNamespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedNamespacesInput() {
    return this._excludedNamespaces.internalValue;
  }

  // restore_order - computed: false, optional: true, required: false
  private _restoreOrder = new GkeBackupRestorePlanRestoreConfigRestoreOrderOutputReference(this, "restore_order");
  public get restoreOrder() {
    return this._restoreOrder;
  }
  public putRestoreOrder(value: GkeBackupRestorePlanRestoreConfigRestoreOrder) {
    this._restoreOrder.internalValue = value;
  }
  public resetRestoreOrder() {
    this._restoreOrder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreOrderInput() {
    return this._restoreOrder.internalValue;
  }

  // selected_applications - computed: false, optional: true, required: false
  private _selectedApplications = new GkeBackupRestorePlanRestoreConfigSelectedApplicationsOutputReference(this, "selected_applications");
  public get selectedApplications() {
    return this._selectedApplications;
  }
  public putSelectedApplications(value: GkeBackupRestorePlanRestoreConfigSelectedApplications) {
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
  private _selectedNamespaces = new GkeBackupRestorePlanRestoreConfigSelectedNamespacesOutputReference(this, "selected_namespaces");
  public get selectedNamespaces() {
    return this._selectedNamespaces;
  }
  public putSelectedNamespaces(value: GkeBackupRestorePlanRestoreConfigSelectedNamespaces) {
    this._selectedNamespaces.internalValue = value;
  }
  public resetSelectedNamespaces() {
    this._selectedNamespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedNamespacesInput() {
    return this._selectedNamespaces.internalValue;
  }

  // transformation_rules - computed: false, optional: true, required: false
  private _transformationRules = new GkeBackupRestorePlanRestoreConfigTransformationRulesList(this, "transformation_rules", false);
  public get transformationRules() {
    return this._transformationRules;
  }
  public putTransformationRules(value: GkeBackupRestorePlanRestoreConfigTransformationRules[] | cdktf.IResolvable) {
    this._transformationRules.internalValue = value;
  }
  public resetTransformationRules() {
    this._transformationRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationRulesInput() {
    return this._transformationRules.internalValue;
  }

  // volume_data_restore_policy_bindings - computed: false, optional: true, required: false
  private _volumeDataRestorePolicyBindings = new GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindingsList(this, "volume_data_restore_policy_bindings", false);
  public get volumeDataRestorePolicyBindings() {
    return this._volumeDataRestorePolicyBindings;
  }
  public putVolumeDataRestorePolicyBindings(value: GkeBackupRestorePlanRestoreConfigVolumeDataRestorePolicyBindings[] | cdktf.IResolvable) {
    this._volumeDataRestorePolicyBindings.internalValue = value;
  }
  public resetVolumeDataRestorePolicyBindings() {
    this._volumeDataRestorePolicyBindings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeDataRestorePolicyBindingsInput() {
    return this._volumeDataRestorePolicyBindings.internalValue;
  }
}
export interface GkeBackupRestorePlanTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#create GkeBackupRestorePlan#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#delete GkeBackupRestorePlan#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#update GkeBackupRestorePlan#update}
  */
  readonly update?: string;
}

export function gkeBackupRestorePlanTimeoutsToTerraform(struct?: GkeBackupRestorePlanTimeouts | cdktf.IResolvable): any {
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


export function gkeBackupRestorePlanTimeoutsToHclTerraform(struct?: GkeBackupRestorePlanTimeouts | cdktf.IResolvable): any {
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

export class GkeBackupRestorePlanTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GkeBackupRestorePlanTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GkeBackupRestorePlanTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan google_gke_backup_restore_plan}
*/
export class GkeBackupRestorePlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gke_backup_restore_plan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GkeBackupRestorePlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GkeBackupRestorePlan to import
  * @param importFromId The id of the existing GkeBackupRestorePlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GkeBackupRestorePlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_gke_backup_restore_plan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.3.0/docs/resources/gke_backup_restore_plan google_gke_backup_restore_plan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GkeBackupRestorePlanConfig
  */
  public constructor(scope: Construct, id: string, config: GkeBackupRestorePlanConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gke_backup_restore_plan',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.3.0',
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
    this._backupPlan = config.backupPlan;
    this._cluster = config.cluster;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._restoreConfig.internalValue = config.restoreConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_plan - computed: false, optional: false, required: true
  private _backupPlan?: string; 
  public get backupPlan() {
    return this.getStringAttribute('backup_plan');
  }
  public set backupPlan(value: string) {
    this._backupPlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPlanInput() {
    return this._backupPlan;
  }

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

  // restore_config - computed: false, optional: false, required: true
  private _restoreConfig = new GkeBackupRestorePlanRestoreConfigOutputReference(this, "restore_config");
  public get restoreConfig() {
    return this._restoreConfig;
  }
  public putRestoreConfig(value: GkeBackupRestorePlanRestoreConfig) {
    this._restoreConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreConfigInput() {
    return this._restoreConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GkeBackupRestorePlanTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GkeBackupRestorePlanTimeouts) {
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
      backup_plan: cdktf.stringToTerraform(this._backupPlan),
      cluster: cdktf.stringToTerraform(this._cluster),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      restore_config: gkeBackupRestorePlanRestoreConfigToTerraform(this._restoreConfig.internalValue),
      timeouts: gkeBackupRestorePlanTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_plan: {
        value: cdktf.stringToHclTerraform(this._backupPlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster: {
        value: cdktf.stringToHclTerraform(this._cluster),
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
      restore_config: {
        value: gkeBackupRestorePlanRestoreConfigToHclTerraform(this._restoreConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeBackupRestorePlanRestoreConfigList",
      },
      timeouts: {
        value: gkeBackupRestorePlanTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GkeBackupRestorePlanTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
