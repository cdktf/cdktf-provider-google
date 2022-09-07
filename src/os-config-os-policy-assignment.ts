// https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsConfigOsPolicyAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * OS policy assignment description. Length of the description is limited to 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#description OsConfigOsPolicyAssignment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#id OsConfigOsPolicyAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#location OsConfigOsPolicyAssignment#location}
  */
  readonly location: string;
  /**
  * Resource name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#name OsConfigOsPolicyAssignment#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#project OsConfigOsPolicyAssignment#project}
  */
  readonly project?: string;
  /**
  * instance_filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#instance_filter OsConfigOsPolicyAssignment#instance_filter}
  */
  readonly instanceFilter: OsConfigOsPolicyAssignmentInstanceFilter;
  /**
  * os_policies block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#os_policies OsConfigOsPolicyAssignment#os_policies}
  */
  readonly osPolicies: OsConfigOsPolicyAssignmentOsPolicies[] | cdktf.IResolvable;
  /**
  * rollout block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#rollout OsConfigOsPolicyAssignment#rollout}
  */
  readonly rollout: OsConfigOsPolicyAssignmentRollout;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#timeouts OsConfigOsPolicyAssignment#timeouts}
  */
  readonly timeouts?: OsConfigOsPolicyAssignmentTimeouts;
}
export interface OsConfigOsPolicyAssignmentInstanceFilterExclusionLabels {
  /**
  * Labels are identified by key/value pairs in this map. A VM should contain all the key/value pairs specified in this map to be selected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#labels OsConfigOsPolicyAssignment#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function osConfigOsPolicyAssignmentInstanceFilterExclusionLabelsToTerraform(struct?: OsConfigOsPolicyAssignmentInstanceFilterExclusionLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}

export class OsConfigOsPolicyAssignmentInstanceFilterExclusionLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigOsPolicyAssignmentInstanceFilterExclusionLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentInstanceFilterExclusionLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
    }
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
}

export class OsConfigOsPolicyAssignmentInstanceFilterExclusionLabelsList extends cdktf.ComplexList {
  public internalValue? : OsConfigOsPolicyAssignmentInstanceFilterExclusionLabels[] | cdktf.IResolvable

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
  public get(index: number): OsConfigOsPolicyAssignmentInstanceFilterExclusionLabelsOutputReference {
    return new OsConfigOsPolicyAssignmentInstanceFilterExclusionLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigOsPolicyAssignmentInstanceFilterInclusionLabels {
  /**
  * Labels are identified by key/value pairs in this map. A VM should contain all the key/value pairs specified in this map to be selected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#labels OsConfigOsPolicyAssignment#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function osConfigOsPolicyAssignmentInstanceFilterInclusionLabelsToTerraform(struct?: OsConfigOsPolicyAssignmentInstanceFilterInclusionLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}

export class OsConfigOsPolicyAssignmentInstanceFilterInclusionLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigOsPolicyAssignmentInstanceFilterInclusionLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentInstanceFilterInclusionLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
    }
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
}

export class OsConfigOsPolicyAssignmentInstanceFilterInclusionLabelsList extends cdktf.ComplexList {
  public internalValue? : OsConfigOsPolicyAssignmentInstanceFilterInclusionLabels[] | cdktf.IResolvable

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
  public get(index: number): OsConfigOsPolicyAssignmentInstanceFilterInclusionLabelsOutputReference {
    return new OsConfigOsPolicyAssignmentInstanceFilterInclusionLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigOsPolicyAssignmentInstanceFilterInventories {
  /**
  * Required. The OS short name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#os_short_name OsConfigOsPolicyAssignment#os_short_name}
  */
  readonly osShortName: string;
  /**
  * The OS version Prefix matches are supported if asterisk(*) is provided as the last character. For example, to match all versions with a major version of `7`, specify the following value for this field `7.*` An empty string matches all OS versions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#os_version OsConfigOsPolicyAssignment#os_version}
  */
  readonly osVersion?: string;
}

export function osConfigOsPolicyAssignmentInstanceFilterInventoriesToTerraform(struct?: OsConfigOsPolicyAssignmentInstanceFilterInventories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    os_short_name: cdktf.stringToTerraform(struct!.osShortName),
    os_version: cdktf.stringToTerraform(struct!.osVersion),
  }
}

export class OsConfigOsPolicyAssignmentInstanceFilterInventoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigOsPolicyAssignmentInstanceFilterInventories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._osShortName !== undefined) {
      hasAnyValues = true;
      internalValueResult.osShortName = this._osShortName;
    }
    if (this._osVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.osVersion = this._osVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentInstanceFilterInventories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._osShortName = undefined;
      this._osVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._osShortName = value.osShortName;
      this._osVersion = value.osVersion;
    }
  }

  // os_short_name - computed: false, optional: false, required: true
  private _osShortName?: string; 
  public get osShortName() {
    return this.getStringAttribute('os_short_name');
  }
  public set osShortName(value: string) {
    this._osShortName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osShortNameInput() {
    return this._osShortName;
  }

  // os_version - computed: false, optional: true, required: false
  private _osVersion?: string; 
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }
  public set osVersion(value: string) {
    this._osVersion = value;
  }
  public resetOsVersion() {
    this._osVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion;
  }
}

export class OsConfigOsPolicyAssignmentInstanceFilterInventoriesList extends cdktf.ComplexList {
  public internalValue? : OsConfigOsPolicyAssignmentInstanceFilterInventories[] | cdktf.IResolvable

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
  public get(index: number): OsConfigOsPolicyAssignmentInstanceFilterInventoriesOutputReference {
    return new OsConfigOsPolicyAssignmentInstanceFilterInventoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigOsPolicyAssignmentInstanceFilter {
  /**
  * Target all VMs in the project. If true, no other criteria is permitted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#all OsConfigOsPolicyAssignment#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * exclusion_labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#exclusion_labels OsConfigOsPolicyAssignment#exclusion_labels}
  */
  readonly exclusionLabels?: OsConfigOsPolicyAssignmentInstanceFilterExclusionLabels[] | cdktf.IResolvable;
  /**
  * inclusion_labels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#inclusion_labels OsConfigOsPolicyAssignment#inclusion_labels}
  */
  readonly inclusionLabels?: OsConfigOsPolicyAssignmentInstanceFilterInclusionLabels[] | cdktf.IResolvable;
  /**
  * inventories block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#inventories OsConfigOsPolicyAssignment#inventories}
  */
  readonly inventories?: OsConfigOsPolicyAssignmentInstanceFilterInventories[] | cdktf.IResolvable;
}

export function osConfigOsPolicyAssignmentInstanceFilterToTerraform(struct?: OsConfigOsPolicyAssignmentInstanceFilterOutputReference | OsConfigOsPolicyAssignmentInstanceFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    exclusion_labels: cdktf.listMapper(osConfigOsPolicyAssignmentInstanceFilterExclusionLabelsToTerraform, true)(struct!.exclusionLabels),
    inclusion_labels: cdktf.listMapper(osConfigOsPolicyAssignmentInstanceFilterInclusionLabelsToTerraform, true)(struct!.inclusionLabels),
    inventories: cdktf.listMapper(osConfigOsPolicyAssignmentInstanceFilterInventoriesToTerraform, true)(struct!.inventories),
  }
}

export class OsConfigOsPolicyAssignmentInstanceFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentInstanceFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._exclusionLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionLabels = this._exclusionLabels?.internalValue;
    }
    if (this._inclusionLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionLabels = this._inclusionLabels?.internalValue;
    }
    if (this._inventories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inventories = this._inventories?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentInstanceFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._exclusionLabels.internalValue = undefined;
      this._inclusionLabels.internalValue = undefined;
      this._inventories.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._exclusionLabels.internalValue = value.exclusionLabels;
      this._inclusionLabels.internalValue = value.inclusionLabels;
      this._inventories.internalValue = value.inventories;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // exclusion_labels - computed: false, optional: true, required: false
  private _exclusionLabels = new OsConfigOsPolicyAssignmentInstanceFilterExclusionLabelsList(this, "exclusion_labels", false);
  public get exclusionLabels() {
    return this._exclusionLabels;
  }
  public putExclusionLabels(value: OsConfigOsPolicyAssignmentInstanceFilterExclusionLabels[] | cdktf.IResolvable) {
    this._exclusionLabels.internalValue = value;
  }
  public resetExclusionLabels() {
    this._exclusionLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionLabelsInput() {
    return this._exclusionLabels.internalValue;
  }

  // inclusion_labels - computed: false, optional: true, required: false
  private _inclusionLabels = new OsConfigOsPolicyAssignmentInstanceFilterInclusionLabelsList(this, "inclusion_labels", false);
  public get inclusionLabels() {
    return this._inclusionLabels;
  }
  public putInclusionLabels(value: OsConfigOsPolicyAssignmentInstanceFilterInclusionLabels[] | cdktf.IResolvable) {
    this._inclusionLabels.internalValue = value;
  }
  public resetInclusionLabels() {
    this._inclusionLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionLabelsInput() {
    return this._inclusionLabels.internalValue;
  }

  // inventories - computed: false, optional: true, required: false
  private _inventories = new OsConfigOsPolicyAssignmentInstanceFilterInventoriesList(this, "inventories", false);
  public get inventories() {
    return this._inventories;
  }
  public putInventories(value: OsConfigOsPolicyAssignmentInstanceFilterInventories[] | cdktf.IResolvable) {
    this._inventories.internalValue = value;
  }
  public resetInventories() {
    this._inventories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoriesInput() {
    return this._inventories.internalValue;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFilters {
  /**
  * Required. The OS short name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#os_short_name OsConfigOsPolicyAssignment#os_short_name}
  */
  readonly osShortName: string;
  /**
  * The OS version Prefix matches are supported if asterisk(*) is provided as the last character. For example, to match all versions with a major version of `7`, specify the following value for this field `7.*` An empty string matches all OS versions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#os_version OsConfigOsPolicyAssignment#os_version}
  */
  readonly osVersion?: string;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFiltersToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    os_short_name: cdktf.stringToTerraform(struct!.osShortName),
    os_version: cdktf.stringToTerraform(struct!.osVersion),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._osShortName !== undefined) {
      hasAnyValues = true;
      internalValueResult.osShortName = this._osShortName;
    }
    if (this._osVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.osVersion = this._osVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._osShortName = undefined;
      this._osVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._osShortName = value.osShortName;
      this._osVersion = value.osVersion;
    }
  }

  // os_short_name - computed: false, optional: false, required: true
  private _osShortName?: string; 
  public get osShortName() {
    return this.getStringAttribute('os_short_name');
  }
  public set osShortName(value: string) {
    this._osShortName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osShortNameInput() {
    return this._osShortName;
  }

  // os_version - computed: false, optional: true, required: false
  private _osVersion?: string; 
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }
  public set osVersion(value: string) {
    this._osVersion = value;
  }
  public resetOsVersion() {
    this._osVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion;
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFiltersList extends cdktf.ComplexList {
  public internalValue? : OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFilters[] | cdktf.IResolvable

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
  public get(index: number): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFiltersOutputReference {
    return new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcs {
  /**
  * Required. Bucket of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#bucket OsConfigOsPolicyAssignment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#generation OsConfigOsPolicyAssignment#generation}
  */
  readonly generation?: number;
  /**
  * Required. Name of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#object OsConfigOsPolicyAssignment#object}
  */
  readonly object: string;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcsToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcsOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.numberToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generation = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generation = value.generation;
      this._object = value.object;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // generation - computed: false, optional: true, required: false
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemote {
  /**
  * SHA256 checksum of the remote file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#sha256_checksum OsConfigOsPolicyAssignment#sha256_checksum}
  */
  readonly sha256Checksum?: string;
  /**
  * Required. URI from which to fetch the object. It should contain both the protocol and path following the format `{protocol}://{location}`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#uri OsConfigOsPolicyAssignment#uri}
  */
  readonly uri: string;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sha256_checksum: cdktf.stringToTerraform(struct!.sha256Checksum),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha256Checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Checksum = this._sha256Checksum;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sha256Checksum = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sha256Checksum = value.sha256Checksum;
      this._uri = value.uri;
    }
  }

  // sha256_checksum - computed: false, optional: true, required: false
  private _sha256Checksum?: string; 
  public get sha256Checksum() {
    return this.getStringAttribute('sha256_checksum');
  }
  public set sha256Checksum(value: string) {
    this._sha256Checksum = value;
  }
  public resetSha256Checksum() {
    this._sha256Checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256ChecksumInput() {
    return this._sha256Checksum;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFile {
  /**
  * Defaults to false. When false, files are subject to validations based on the file type: Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#allow_insecure OsConfigOsPolicyAssignment#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * A local path within the VM to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#local_path OsConfigOsPolicyAssignment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#gcs OsConfigOsPolicyAssignment#gcs}
  */
  readonly gcs?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcs;
  /**
  * remote block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#remote OsConfigOsPolicyAssignment#remote}
  */
  readonly remote?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemote;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcsToTerraform(struct!.gcs),
    remote: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteToTerraform(struct!.remote),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecure = undefined;
      this._localPath = undefined;
      this._gcs.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecure = value.allowInsecure;
      this._localPath = value.localPath;
      this._gcs.internalValue = value.gcs;
      this._remote.internalValue = value.remote;
    }
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforce {
  /**
  * Optional arguments to pass to the source during execution.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#args OsConfigOsPolicyAssignment#args}
  */
  readonly args?: string[];
  /**
  * Required. The script interpreter to use. Possible values: INTERPRETER_UNSPECIFIED, NONE, SHELL, POWERSHELL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#interpreter OsConfigOsPolicyAssignment#interpreter}
  */
  readonly interpreter: string;
  /**
  * Only recorded for enforce Exec. Path to an output file (that is created by this Exec) whose content will be recorded in OSPolicyResourceCompliance after a successful run. Absence or failure to read this file will result in this ExecResource being non-compliant. Output file size is limited to 100K bytes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#output_file_path OsConfigOsPolicyAssignment#output_file_path}
  */
  readonly outputFilePath?: string;
  /**
  * An inline script. The size of the script is limited to 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#script OsConfigOsPolicyAssignment#script}
  */
  readonly script?: string;
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#file OsConfigOsPolicyAssignment#file}
  */
  readonly file?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFile;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    output_file_path: cdktf.stringToTerraform(struct!.outputFilePath),
    script: cdktf.stringToTerraform(struct!.script),
    file: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileToTerraform(struct!.file),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._interpreter !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpreter = this._interpreter;
    }
    if (this._outputFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFilePath = this._outputFilePath;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._interpreter = undefined;
      this._outputFilePath = undefined;
      this._script = undefined;
      this._file.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._interpreter = value.interpreter;
      this._outputFilePath = value.outputFilePath;
      this._script = value.script;
      this._file.internalValue = value.file;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // interpreter - computed: false, optional: false, required: true
  private _interpreter?: string; 
  public get interpreter() {
    return this.getStringAttribute('interpreter');
  }
  public set interpreter(value: string) {
    this._interpreter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterInput() {
    return this._interpreter;
  }

  // output_file_path - computed: false, optional: true, required: false
  private _outputFilePath?: string; 
  public get outputFilePath() {
    return this.getStringAttribute('output_file_path');
  }
  public set outputFilePath(value: string) {
    this._outputFilePath = value;
  }
  public resetOutputFilePath() {
    this._outputFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFilePathInput() {
    return this._outputFilePath;
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // file - computed: false, optional: true, required: false
  private _file = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcs {
  /**
  * Required. Bucket of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#bucket OsConfigOsPolicyAssignment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#generation OsConfigOsPolicyAssignment#generation}
  */
  readonly generation?: number;
  /**
  * Required. Name of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#object OsConfigOsPolicyAssignment#object}
  */
  readonly object: string;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcsToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcsOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.numberToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generation = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generation = value.generation;
      this._object = value.object;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // generation - computed: false, optional: true, required: false
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemote {
  /**
  * SHA256 checksum of the remote file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#sha256_checksum OsConfigOsPolicyAssignment#sha256_checksum}
  */
  readonly sha256Checksum?: string;
  /**
  * Required. URI from which to fetch the object. It should contain both the protocol and path following the format `{protocol}://{location}`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#uri OsConfigOsPolicyAssignment#uri}
  */
  readonly uri: string;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemoteToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemoteOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sha256_checksum: cdktf.stringToTerraform(struct!.sha256Checksum),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha256Checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Checksum = this._sha256Checksum;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sha256Checksum = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sha256Checksum = value.sha256Checksum;
      this._uri = value.uri;
    }
  }

  // sha256_checksum - computed: false, optional: true, required: false
  private _sha256Checksum?: string; 
  public get sha256Checksum() {
    return this.getStringAttribute('sha256_checksum');
  }
  public set sha256Checksum(value: string) {
    this._sha256Checksum = value;
  }
  public resetSha256Checksum() {
    this._sha256Checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256ChecksumInput() {
    return this._sha256Checksum;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFile {
  /**
  * Defaults to false. When false, files are subject to validations based on the file type: Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#allow_insecure OsConfigOsPolicyAssignment#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * A local path within the VM to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#local_path OsConfigOsPolicyAssignment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#gcs OsConfigOsPolicyAssignment#gcs}
  */
  readonly gcs?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcs;
  /**
  * remote block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#remote OsConfigOsPolicyAssignment#remote}
  */
  readonly remote?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemote;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcsToTerraform(struct!.gcs),
    remote: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemoteToTerraform(struct!.remote),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecure = undefined;
      this._localPath = undefined;
      this._gcs.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecure = value.allowInsecure;
      this._localPath = value.localPath;
      this._gcs.internalValue = value.gcs;
      this._remote.internalValue = value.remote;
    }
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidate {
  /**
  * Optional arguments to pass to the source during execution.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#args OsConfigOsPolicyAssignment#args}
  */
  readonly args?: string[];
  /**
  * Required. The script interpreter to use. Possible values: INTERPRETER_UNSPECIFIED, NONE, SHELL, POWERSHELL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#interpreter OsConfigOsPolicyAssignment#interpreter}
  */
  readonly interpreter: string;
  /**
  * Only recorded for enforce Exec. Path to an output file (that is created by this Exec) whose content will be recorded in OSPolicyResourceCompliance after a successful run. Absence or failure to read this file will result in this ExecResource being non-compliant. Output file size is limited to 100K bytes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#output_file_path OsConfigOsPolicyAssignment#output_file_path}
  */
  readonly outputFilePath?: string;
  /**
  * An inline script. The size of the script is limited to 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#script OsConfigOsPolicyAssignment#script}
  */
  readonly script?: string;
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#file OsConfigOsPolicyAssignment#file}
  */
  readonly file?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFile;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    output_file_path: cdktf.stringToTerraform(struct!.outputFilePath),
    script: cdktf.stringToTerraform(struct!.script),
    file: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileToTerraform(struct!.file),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._interpreter !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpreter = this._interpreter;
    }
    if (this._outputFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFilePath = this._outputFilePath;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._interpreter = undefined;
      this._outputFilePath = undefined;
      this._script = undefined;
      this._file.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._interpreter = value.interpreter;
      this._outputFilePath = value.outputFilePath;
      this._script = value.script;
      this._file.internalValue = value.file;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // interpreter - computed: false, optional: false, required: true
  private _interpreter?: string; 
  public get interpreter() {
    return this.getStringAttribute('interpreter');
  }
  public set interpreter(value: string) {
    this._interpreter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterInput() {
    return this._interpreter;
  }

  // output_file_path - computed: false, optional: true, required: false
  private _outputFilePath?: string; 
  public get outputFilePath() {
    return this.getStringAttribute('output_file_path');
  }
  public set outputFilePath(value: string) {
    this._outputFilePath = value;
  }
  public resetOutputFilePath() {
    this._outputFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFilePathInput() {
    return this._outputFilePath;
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // file - computed: false, optional: true, required: false
  private _file = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExec {
  /**
  * enforce block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#enforce OsConfigOsPolicyAssignment#enforce}
  */
  readonly enforce?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforce;
  /**
  * validate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#validate OsConfigOsPolicyAssignment#validate}
  */
  readonly validate: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidate;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceToTerraform(struct!.enforce),
    validate: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateToTerraform(struct!.validate),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce?.internalValue;
    }
    if (this._validate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validate = this._validate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforce.internalValue = undefined;
      this._validate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforce.internalValue = value.enforce;
      this._validate.internalValue = value.validate;
    }
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforceOutputReference(this, "enforce");
  public get enforce() {
    return this._enforce;
  }
  public putEnforce(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecEnforce) {
    this._enforce.internalValue = value;
  }
  public resetEnforce() {
    this._enforce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce.internalValue;
  }

  // validate - computed: false, optional: false, required: true
  private _validate = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidateOutputReference(this, "validate");
  public get validate() {
    return this._validate;
  }
  public putValidate(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecValidate) {
    this._validate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate.internalValue;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcs {
  /**
  * Required. Bucket of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#bucket OsConfigOsPolicyAssignment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#generation OsConfigOsPolicyAssignment#generation}
  */
  readonly generation?: number;
  /**
  * Required. Name of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#object OsConfigOsPolicyAssignment#object}
  */
  readonly object: string;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcsToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcsOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.numberToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generation = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generation = value.generation;
      this._object = value.object;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // generation - computed: false, optional: true, required: false
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemote {
  /**
  * SHA256 checksum of the remote file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#sha256_checksum OsConfigOsPolicyAssignment#sha256_checksum}
  */
  readonly sha256Checksum?: string;
  /**
  * Required. URI from which to fetch the object. It should contain both the protocol and path following the format `{protocol}://{location}`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#uri OsConfigOsPolicyAssignment#uri}
  */
  readonly uri: string;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemoteToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemoteOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sha256_checksum: cdktf.stringToTerraform(struct!.sha256Checksum),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha256Checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Checksum = this._sha256Checksum;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sha256Checksum = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sha256Checksum = value.sha256Checksum;
      this._uri = value.uri;
    }
  }

  // sha256_checksum - computed: false, optional: true, required: false
  private _sha256Checksum?: string; 
  public get sha256Checksum() {
    return this.getStringAttribute('sha256_checksum');
  }
  public set sha256Checksum(value: string) {
    this._sha256Checksum = value;
  }
  public resetSha256Checksum() {
    this._sha256Checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256ChecksumInput() {
    return this._sha256Checksum;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFile {
  /**
  * Defaults to false. When false, files are subject to validations based on the file type: Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#allow_insecure OsConfigOsPolicyAssignment#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * A local path within the VM to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#local_path OsConfigOsPolicyAssignment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#gcs OsConfigOsPolicyAssignment#gcs}
  */
  readonly gcs?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcs;
  /**
  * remote block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#remote OsConfigOsPolicyAssignment#remote}
  */
  readonly remote?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemote;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcsToTerraform(struct!.gcs),
    remote: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemoteToTerraform(struct!.remote),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecure = undefined;
      this._localPath = undefined;
      this._gcs.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecure = value.allowInsecure;
      this._localPath = value.localPath;
      this._gcs.internalValue = value.gcs;
      this._remote.internalValue = value.remote;
    }
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFile {
  /**
  * A a file with this content. The size of the content is limited to 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#content OsConfigOsPolicyAssignment#content}
  */
  readonly content?: string;
  /**
  * Required. The absolute path of the file within the VM.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#path OsConfigOsPolicyAssignment#path}
  */
  readonly path: string;
  /**
  * Required. Desired state of the file. Possible values: OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED, COMPLIANT, NON_COMPLIANT, UNKNOWN, NO_OS_POLICIES_APPLICABLE
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#state OsConfigOsPolicyAssignment#state}
  */
  readonly state: string;
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#file OsConfigOsPolicyAssignment#file}
  */
  readonly file?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFile;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    path: cdktf.stringToTerraform(struct!.path),
    state: cdktf.stringToTerraform(struct!.state),
    file: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileToTerraform(struct!.file),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._path = undefined;
      this._state = undefined;
      this._file.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._path = value.path;
      this._state = value.state;
      this._file.internalValue = value.file;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // permissions - computed: true, optional: false, required: false
  public get permissions() {
    return this.getStringAttribute('permissions');
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // file - computed: false, optional: true, required: false
  private _file = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgApt {
  /**
  * Required. Package name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#name OsConfigOsPolicyAssignment#name}
  */
  readonly name: string;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgAptToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgAptOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgApt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgAptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgApt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgApt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcs {
  /**
  * Required. Bucket of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#bucket OsConfigOsPolicyAssignment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#generation OsConfigOsPolicyAssignment#generation}
  */
  readonly generation?: number;
  /**
  * Required. Name of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#object OsConfigOsPolicyAssignment#object}
  */
  readonly object: string;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcsToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcsOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.numberToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generation = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generation = value.generation;
      this._object = value.object;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // generation - computed: false, optional: true, required: false
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemote {
  /**
  * SHA256 checksum of the remote file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#sha256_checksum OsConfigOsPolicyAssignment#sha256_checksum}
  */
  readonly sha256Checksum?: string;
  /**
  * Required. URI from which to fetch the object. It should contain both the protocol and path following the format `{protocol}://{location}`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#uri OsConfigOsPolicyAssignment#uri}
  */
  readonly uri: string;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sha256_checksum: cdktf.stringToTerraform(struct!.sha256Checksum),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha256Checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Checksum = this._sha256Checksum;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sha256Checksum = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sha256Checksum = value.sha256Checksum;
      this._uri = value.uri;
    }
  }

  // sha256_checksum - computed: false, optional: true, required: false
  private _sha256Checksum?: string; 
  public get sha256Checksum() {
    return this.getStringAttribute('sha256_checksum');
  }
  public set sha256Checksum(value: string) {
    this._sha256Checksum = value;
  }
  public resetSha256Checksum() {
    this._sha256Checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256ChecksumInput() {
    return this._sha256Checksum;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSource {
  /**
  * Defaults to false. When false, files are subject to validations based on the file type: Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#allow_insecure OsConfigOsPolicyAssignment#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * A local path within the VM to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#local_path OsConfigOsPolicyAssignment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#gcs OsConfigOsPolicyAssignment#gcs}
  */
  readonly gcs?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcs;
  /**
  * remote block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#remote OsConfigOsPolicyAssignment#remote}
  */
  readonly remote?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemote;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcsToTerraform(struct!.gcs),
    remote: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteToTerraform(struct!.remote),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecure = undefined;
      this._localPath = undefined;
      this._gcs.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecure = value.allowInsecure;
      this._localPath = value.localPath;
      this._gcs.internalValue = value.gcs;
      this._remote.internalValue = value.remote;
    }
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDeb {
  /**
  * Whether dependencies should also be installed. - install when false: `dpkg -i package` - install when true: `apt-get update && apt-get -y install package.deb`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#pull_deps OsConfigOsPolicyAssignment#pull_deps}
  */
  readonly pullDeps?: boolean | cdktf.IResolvable;
  /**
  * source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#source OsConfigOsPolicyAssignment#source}
  */
  readonly source: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSource;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pull_deps: cdktf.booleanToTerraform(struct!.pullDeps),
    source: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceToTerraform(struct!.source),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDeb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pullDeps !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullDeps = this._pullDeps;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDeb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pullDeps = undefined;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pullDeps = value.pullDeps;
      this._source.internalValue = value.source;
    }
  }

  // pull_deps - computed: false, optional: true, required: false
  private _pullDeps?: boolean | cdktf.IResolvable; 
  public get pullDeps() {
    return this.getBooleanAttribute('pull_deps');
  }
  public set pullDeps(value: boolean | cdktf.IResolvable) {
    this._pullDeps = value;
  }
  public resetPullDeps() {
    this._pullDeps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullDepsInput() {
    return this._pullDeps;
  }

  // source - computed: false, optional: false, required: true
  private _source = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGooget {
  /**
  * Required. Package name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#name OsConfigOsPolicyAssignment#name}
  */
  readonly name: string;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGoogetToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGoogetOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGooget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGoogetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGooget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGooget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs {
  /**
  * Required. Bucket of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#bucket OsConfigOsPolicyAssignment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#generation OsConfigOsPolicyAssignment#generation}
  */
  readonly generation?: number;
  /**
  * Required. Name of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#object OsConfigOsPolicyAssignment#object}
  */
  readonly object: string;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.numberToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generation = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generation = value.generation;
      this._object = value.object;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // generation - computed: false, optional: true, required: false
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote {
  /**
  * SHA256 checksum of the remote file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#sha256_checksum OsConfigOsPolicyAssignment#sha256_checksum}
  */
  readonly sha256Checksum?: string;
  /**
  * Required. URI from which to fetch the object. It should contain both the protocol and path following the format `{protocol}://{location}`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#uri OsConfigOsPolicyAssignment#uri}
  */
  readonly uri: string;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sha256_checksum: cdktf.stringToTerraform(struct!.sha256Checksum),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha256Checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Checksum = this._sha256Checksum;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sha256Checksum = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sha256Checksum = value.sha256Checksum;
      this._uri = value.uri;
    }
  }

  // sha256_checksum - computed: false, optional: true, required: false
  private _sha256Checksum?: string; 
  public get sha256Checksum() {
    return this.getStringAttribute('sha256_checksum');
  }
  public set sha256Checksum(value: string) {
    this._sha256Checksum = value;
  }
  public resetSha256Checksum() {
    this._sha256Checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256ChecksumInput() {
    return this._sha256Checksum;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSource {
  /**
  * Defaults to false. When false, files are subject to validations based on the file type: Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#allow_insecure OsConfigOsPolicyAssignment#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * A local path within the VM to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#local_path OsConfigOsPolicyAssignment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#gcs OsConfigOsPolicyAssignment#gcs}
  */
  readonly gcs?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs;
  /**
  * remote block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#remote OsConfigOsPolicyAssignment#remote}
  */
  readonly remote?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsToTerraform(struct!.gcs),
    remote: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteToTerraform(struct!.remote),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecure = undefined;
      this._localPath = undefined;
      this._gcs.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecure = value.allowInsecure;
      this._localPath = value.localPath;
      this._gcs.internalValue = value.gcs;
      this._remote.internalValue = value.remote;
    }
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsi {
  /**
  * Additional properties to use during installation. This should be in the format of Property=Setting. Appended to the defaults of `ACTION=INSTALL REBOOT=ReallySuppress`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#properties OsConfigOsPolicyAssignment#properties}
  */
  readonly properties?: string[];
  /**
  * source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#source OsConfigOsPolicyAssignment#source}
  */
  readonly source: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSource;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.properties),
    source: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceToTerraform(struct!.source),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._properties = undefined;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._properties = value.properties;
      this._source.internalValue = value.source;
    }
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: string[]; 
  public get properties() {
    return this.getListAttribute('properties');
  }
  public set properties(value: string[]) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // source - computed: false, optional: false, required: true
  private _source = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs {
  /**
  * Required. Bucket of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#bucket OsConfigOsPolicyAssignment#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#generation OsConfigOsPolicyAssignment#generation}
  */
  readonly generation?: number;
  /**
  * Required. Name of the Cloud Storage object.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#object OsConfigOsPolicyAssignment#object}
  */
  readonly object: string;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.numberToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generation = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generation = value.generation;
      this._object = value.object;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // generation - computed: false, optional: true, required: false
  private _generation?: number; 
  public get generation() {
    return this.getNumberAttribute('generation');
  }
  public set generation(value: number) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote {
  /**
  * SHA256 checksum of the remote file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#sha256_checksum OsConfigOsPolicyAssignment#sha256_checksum}
  */
  readonly sha256Checksum?: string;
  /**
  * Required. URI from which to fetch the object. It should contain both the protocol and path following the format `{protocol}://{location}`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#uri OsConfigOsPolicyAssignment#uri}
  */
  readonly uri: string;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sha256_checksum: cdktf.stringToTerraform(struct!.sha256Checksum),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha256Checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Checksum = this._sha256Checksum;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sha256Checksum = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sha256Checksum = value.sha256Checksum;
      this._uri = value.uri;
    }
  }

  // sha256_checksum - computed: false, optional: true, required: false
  private _sha256Checksum?: string; 
  public get sha256Checksum() {
    return this.getStringAttribute('sha256_checksum');
  }
  public set sha256Checksum(value: string) {
    this._sha256Checksum = value;
  }
  public resetSha256Checksum() {
    this._sha256Checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256ChecksumInput() {
    return this._sha256Checksum;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSource {
  /**
  * Defaults to false. When false, files are subject to validations based on the file type: Remote: A checksum must be specified. Cloud Storage: An object generation number must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#allow_insecure OsConfigOsPolicyAssignment#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * A local path within the VM to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#local_path OsConfigOsPolicyAssignment#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#gcs OsConfigOsPolicyAssignment#gcs}
  */
  readonly gcs?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs;
  /**
  * remote block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#remote OsConfigOsPolicyAssignment#remote}
  */
  readonly remote?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsToTerraform(struct!.gcs),
    remote: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteToTerraform(struct!.remote),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecure = undefined;
      this._localPath = undefined;
      this._gcs.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecure = value.allowInsecure;
      this._localPath = value.localPath;
      this._gcs.internalValue = value.gcs;
      this._remote.internalValue = value.remote;
    }
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpm {
  /**
  * Whether dependencies should also be installed. - install when false: `rpm --upgrade --replacepkgs package.rpm` - install when true: `yum -y install package.rpm` or `zypper -y install package.rpm`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#pull_deps OsConfigOsPolicyAssignment#pull_deps}
  */
  readonly pullDeps?: boolean | cdktf.IResolvable;
  /**
  * source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#source OsConfigOsPolicyAssignment#source}
  */
  readonly source: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSource;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pull_deps: cdktf.booleanToTerraform(struct!.pullDeps),
    source: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceToTerraform(struct!.source),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pullDeps !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullDeps = this._pullDeps;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pullDeps = undefined;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pullDeps = value.pullDeps;
      this._source.internalValue = value.source;
    }
  }

  // pull_deps - computed: false, optional: true, required: false
  private _pullDeps?: boolean | cdktf.IResolvable; 
  public get pullDeps() {
    return this.getBooleanAttribute('pull_deps');
  }
  public set pullDeps(value: boolean | cdktf.IResolvable) {
    this._pullDeps = value;
  }
  public resetPullDeps() {
    this._pullDeps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullDepsInput() {
    return this._pullDeps;
  }

  // source - computed: false, optional: false, required: true
  private _source = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYum {
  /**
  * Required. Package name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#name OsConfigOsPolicyAssignment#name}
  */
  readonly name: string;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYumToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYumOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypper {
  /**
  * Required. Package name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#name OsConfigOsPolicyAssignment#name}
  */
  readonly name: string;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypperToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypperOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkg {
  /**
  * Required. The desired state the agent should maintain for this package. Possible values: DESIRED_STATE_UNSPECIFIED, INSTALLED, REMOVED
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#desired_state OsConfigOsPolicyAssignment#desired_state}
  */
  readonly desiredState: string;
  /**
  * apt block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#apt OsConfigOsPolicyAssignment#apt}
  */
  readonly apt?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgApt;
  /**
  * deb block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#deb OsConfigOsPolicyAssignment#deb}
  */
  readonly deb?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDeb;
  /**
  * googet block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#googet OsConfigOsPolicyAssignment#googet}
  */
  readonly googet?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGooget;
  /**
  * msi block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#msi OsConfigOsPolicyAssignment#msi}
  */
  readonly msi?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsi;
  /**
  * rpm block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#rpm OsConfigOsPolicyAssignment#rpm}
  */
  readonly rpm?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpm;
  /**
  * yum block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#yum OsConfigOsPolicyAssignment#yum}
  */
  readonly yum?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYum;
  /**
  * zypper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#zypper OsConfigOsPolicyAssignment#zypper}
  */
  readonly zypper?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypper;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_state: cdktf.stringToTerraform(struct!.desiredState),
    apt: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgAptToTerraform(struct!.apt),
    deb: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebToTerraform(struct!.deb),
    googet: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGoogetToTerraform(struct!.googet),
    msi: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiToTerraform(struct!.msi),
    rpm: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmToTerraform(struct!.rpm),
    yum: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYumToTerraform(struct!.yum),
    zypper: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypperToTerraform(struct!.zypper),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredState !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredState = this._desiredState;
    }
    if (this._apt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apt = this._apt?.internalValue;
    }
    if (this._deb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deb = this._deb?.internalValue;
    }
    if (this._googet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googet = this._googet?.internalValue;
    }
    if (this._msi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msi = this._msi?.internalValue;
    }
    if (this._rpm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpm = this._rpm?.internalValue;
    }
    if (this._yum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yum = this._yum?.internalValue;
    }
    if (this._zypper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zypper = this._zypper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._desiredState = undefined;
      this._apt.internalValue = undefined;
      this._deb.internalValue = undefined;
      this._googet.internalValue = undefined;
      this._msi.internalValue = undefined;
      this._rpm.internalValue = undefined;
      this._yum.internalValue = undefined;
      this._zypper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._desiredState = value.desiredState;
      this._apt.internalValue = value.apt;
      this._deb.internalValue = value.deb;
      this._googet.internalValue = value.googet;
      this._msi.internalValue = value.msi;
      this._rpm.internalValue = value.rpm;
      this._yum.internalValue = value.yum;
      this._zypper.internalValue = value.zypper;
    }
  }

  // desired_state - computed: false, optional: false, required: true
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // apt - computed: false, optional: true, required: false
  private _apt = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgAptOutputReference(this, "apt");
  public get apt() {
    return this._apt;
  }
  public putApt(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgApt) {
    this._apt.internalValue = value;
  }
  public resetApt() {
    this._apt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aptInput() {
    return this._apt.internalValue;
  }

  // deb - computed: false, optional: true, required: false
  private _deb = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDebOutputReference(this, "deb");
  public get deb() {
    return this._deb;
  }
  public putDeb(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgDeb) {
    this._deb.internalValue = value;
  }
  public resetDeb() {
    this._deb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debInput() {
    return this._deb.internalValue;
  }

  // googet - computed: false, optional: true, required: false
  private _googet = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGoogetOutputReference(this, "googet");
  public get googet() {
    return this._googet;
  }
  public putGooget(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgGooget) {
    this._googet.internalValue = value;
  }
  public resetGooget() {
    this._googet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googetInput() {
    return this._googet.internalValue;
  }

  // msi - computed: false, optional: true, required: false
  private _msi = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsiOutputReference(this, "msi");
  public get msi() {
    return this._msi;
  }
  public putMsi(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgMsi) {
    this._msi.internalValue = value;
  }
  public resetMsi() {
    this._msi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msiInput() {
    return this._msi.internalValue;
  }

  // rpm - computed: false, optional: true, required: false
  private _rpm = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpmOutputReference(this, "rpm");
  public get rpm() {
    return this._rpm;
  }
  public putRpm(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgRpm) {
    this._rpm.internalValue = value;
  }
  public resetRpm() {
    this._rpm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpmInput() {
    return this._rpm.internalValue;
  }

  // yum - computed: false, optional: true, required: false
  private _yum = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYumOutputReference(this, "yum");
  public get yum() {
    return this._yum;
  }
  public putYum(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgYum) {
    this._yum.internalValue = value;
  }
  public resetYum() {
    this._yum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yumInput() {
    return this._yum.internalValue;
  }

  // zypper - computed: false, optional: true, required: false
  private _zypper = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypperOutputReference(this, "zypper");
  public get zypper() {
    return this._zypper;
  }
  public putZypper(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgZypper) {
    this._zypper.internalValue = value;
  }
  public resetZypper() {
    this._zypper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zypperInput() {
    return this._zypper.internalValue;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryApt {
  /**
  * Required. Type of archive files in this repository. Possible values: ARCHIVE_TYPE_UNSPECIFIED, DEB, DEB_SRC
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#archive_type OsConfigOsPolicyAssignment#archive_type}
  */
  readonly archiveType: string;
  /**
  * Required. List of components for this repository. Must contain at least one item.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#components OsConfigOsPolicyAssignment#components}
  */
  readonly components: string[];
  /**
  * Required. Distribution of this repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#distribution OsConfigOsPolicyAssignment#distribution}
  */
  readonly distribution: string;
  /**
  * URI of the key file for this repository. The agent maintains a keyring at `/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#gpg_key OsConfigOsPolicyAssignment#gpg_key}
  */
  readonly gpgKey?: string;
  /**
  * Required. URI for this repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#uri OsConfigOsPolicyAssignment#uri}
  */
  readonly uri: string;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryAptToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryAptOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryApt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_type: cdktf.stringToTerraform(struct!.archiveType),
    components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.components),
    distribution: cdktf.stringToTerraform(struct!.distribution),
    gpg_key: cdktf.stringToTerraform(struct!.gpgKey),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryAptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryApt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveType !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveType = this._archiveType;
    }
    if (this._components !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components;
    }
    if (this._distribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.distribution = this._distribution;
    }
    if (this._gpgKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpgKey = this._gpgKey;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryApt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveType = undefined;
      this._components = undefined;
      this._distribution = undefined;
      this._gpgKey = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveType = value.archiveType;
      this._components = value.components;
      this._distribution = value.distribution;
      this._gpgKey = value.gpgKey;
      this._uri = value.uri;
    }
  }

  // archive_type - computed: false, optional: false, required: true
  private _archiveType?: string; 
  public get archiveType() {
    return this.getStringAttribute('archive_type');
  }
  public set archiveType(value: string) {
    this._archiveType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveTypeInput() {
    return this._archiveType;
  }

  // components - computed: false, optional: false, required: true
  private _components?: string[]; 
  public get components() {
    return this.getListAttribute('components');
  }
  public set components(value: string[]) {
    this._components = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
  }

  // distribution - computed: false, optional: false, required: true
  private _distribution?: string; 
  public get distribution() {
    return this.getStringAttribute('distribution');
  }
  public set distribution(value: string) {
    this._distribution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution;
  }

  // gpg_key - computed: false, optional: true, required: false
  private _gpgKey?: string; 
  public get gpgKey() {
    return this.getStringAttribute('gpg_key');
  }
  public set gpgKey(value: string) {
    this._gpgKey = value;
  }
  public resetGpgKey() {
    this._gpgKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpgKeyInput() {
    return this._gpgKey;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGoo {
  /**
  * Required. The name of the repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#name OsConfigOsPolicyAssignment#name}
  */
  readonly name: string;
  /**
  * Required. The url of the repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#url OsConfigOsPolicyAssignment#url}
  */
  readonly url: string;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGooToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGooOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGoo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGooOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGoo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGoo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._url = value.url;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYum {
  /**
  * Required. The location of the repository directory.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#base_url OsConfigOsPolicyAssignment#base_url}
  */
  readonly baseUrl: string;
  /**
  * The display name of the repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#display_name OsConfigOsPolicyAssignment#display_name}
  */
  readonly displayName?: string;
  /**
  * URIs of GPG keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#gpg_keys OsConfigOsPolicyAssignment#gpg_keys}
  */
  readonly gpgKeys?: string[];
  /**
  * Required. A one word, unique name for this repository. This is the `repo id` in the yum config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for resource conflicts.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#id OsConfigOsPolicyAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYumToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYumOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    gpg_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gpgKeys),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._gpgKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpgKeys = this._gpgKeys;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseUrl = undefined;
      this._displayName = undefined;
      this._gpgKeys = undefined;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseUrl = value.baseUrl;
      this._displayName = value.displayName;
      this._gpgKeys = value.gpgKeys;
      this._id = value.id;
    }
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
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

  // gpg_keys - computed: false, optional: true, required: false
  private _gpgKeys?: string[]; 
  public get gpgKeys() {
    return this.getListAttribute('gpg_keys');
  }
  public set gpgKeys(value: string[]) {
    this._gpgKeys = value;
  }
  public resetGpgKeys() {
    this._gpgKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpgKeysInput() {
    return this._gpgKeys;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypper {
  /**
  * Required. The location of the repository directory.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#base_url OsConfigOsPolicyAssignment#base_url}
  */
  readonly baseUrl: string;
  /**
  * The display name of the repository.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#display_name OsConfigOsPolicyAssignment#display_name}
  */
  readonly displayName?: string;
  /**
  * URIs of GPG keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#gpg_keys OsConfigOsPolicyAssignment#gpg_keys}
  */
  readonly gpgKeys?: string[];
  /**
  * Required. A one word, unique name for this repository. This is the `repo id` in the zypper config file and also the `display_name` if `display_name` is omitted. This id is also used as the unique identifier when checking for GuestPolicy conflicts.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#id OsConfigOsPolicyAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypperToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypperOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    gpg_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gpgKeys),
    id: cdktf.stringToTerraform(struct!.id),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._gpgKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpgKeys = this._gpgKeys;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseUrl = undefined;
      this._displayName = undefined;
      this._gpgKeys = undefined;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseUrl = value.baseUrl;
      this._displayName = value.displayName;
      this._gpgKeys = value.gpgKeys;
      this._id = value.id;
    }
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
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

  // gpg_keys - computed: false, optional: true, required: false
  private _gpgKeys?: string[]; 
  public get gpgKeys() {
    return this.getListAttribute('gpg_keys');
  }
  public set gpgKeys(value: string[]) {
    this._gpgKeys = value;
  }
  public resetGpgKeys() {
    this._gpgKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpgKeysInput() {
    return this._gpgKeys;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepository {
  /**
  * apt block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#apt OsConfigOsPolicyAssignment#apt}
  */
  readonly apt?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryApt;
  /**
  * goo block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#goo OsConfigOsPolicyAssignment#goo}
  */
  readonly goo?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGoo;
  /**
  * yum block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#yum OsConfigOsPolicyAssignment#yum}
  */
  readonly yum?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYum;
  /**
  * zypper block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#zypper OsConfigOsPolicyAssignment#zypper}
  */
  readonly zypper?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypper;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryOutputReference | OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apt: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryAptToTerraform(struct!.apt),
    goo: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGooToTerraform(struct!.goo),
    yum: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYumToTerraform(struct!.yum),
    zypper: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypperToTerraform(struct!.zypper),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apt = this._apt?.internalValue;
    }
    if (this._goo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goo = this._goo?.internalValue;
    }
    if (this._yum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yum = this._yum?.internalValue;
    }
    if (this._zypper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zypper = this._zypper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apt.internalValue = undefined;
      this._goo.internalValue = undefined;
      this._yum.internalValue = undefined;
      this._zypper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apt.internalValue = value.apt;
      this._goo.internalValue = value.goo;
      this._yum.internalValue = value.yum;
      this._zypper.internalValue = value.zypper;
    }
  }

  // apt - computed: false, optional: true, required: false
  private _apt = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryAptOutputReference(this, "apt");
  public get apt() {
    return this._apt;
  }
  public putApt(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryApt) {
    this._apt.internalValue = value;
  }
  public resetApt() {
    this._apt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aptInput() {
    return this._apt.internalValue;
  }

  // goo - computed: false, optional: true, required: false
  private _goo = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGooOutputReference(this, "goo");
  public get goo() {
    return this._goo;
  }
  public putGoo(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryGoo) {
    this._goo.internalValue = value;
  }
  public resetGoo() {
    this._goo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gooInput() {
    return this._goo.internalValue;
  }

  // yum - computed: false, optional: true, required: false
  private _yum = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYumOutputReference(this, "yum");
  public get yum() {
    return this._yum;
  }
  public putYum(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryYum) {
    this._yum.internalValue = value;
  }
  public resetYum() {
    this._yum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yumInput() {
    return this._yum.internalValue;
  }

  // zypper - computed: false, optional: true, required: false
  private _zypper = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypperOutputReference(this, "zypper");
  public get zypper() {
    return this._zypper;
  }
  public putZypper(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryZypper) {
    this._zypper.internalValue = value;
  }
  public resetZypper() {
    this._zypper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zypperInput() {
    return this._zypper.internalValue;
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResources {
  /**
  * Required. The id of the resource with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the OS policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#id OsConfigOsPolicyAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * exec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#exec OsConfigOsPolicyAssignment#exec}
  */
  readonly exec?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExec;
  /**
  * file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#file OsConfigOsPolicyAssignment#file}
  */
  readonly file?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFile;
  /**
  * pkg block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#pkg OsConfigOsPolicyAssignment#pkg}
  */
  readonly pkg?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkg;
  /**
  * repository block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#repository OsConfigOsPolicyAssignment#repository}
  */
  readonly repository?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepository;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    exec: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecToTerraform(struct!.exec),
    file: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileToTerraform(struct!.file),
    pkg: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgToTerraform(struct!.pkg),
    repository: osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryToTerraform(struct!.repository),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._pkg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkg = this._pkg?.internalValue;
    }
    if (this._repository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._exec.internalValue = undefined;
      this._file.internalValue = undefined;
      this._pkg.internalValue = undefined;
      this._repository.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._exec.internalValue = value.exec;
      this._file.internalValue = value.file;
      this._pkg.internalValue = value.pkg;
      this._repository.internalValue = value.repository;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // pkg - computed: false, optional: true, required: false
  private _pkg = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkgOutputReference(this, "pkg");
  public get pkg() {
    return this._pkg;
  }
  public putPkg(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesPkg) {
    this._pkg.internalValue = value;
  }
  public resetPkg() {
    this._pkg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgInput() {
    return this._pkg.internalValue;
  }

  // repository - computed: false, optional: true, required: false
  private _repository = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepositoryOutputReference(this, "repository");
  public get repository() {
    return this._repository;
  }
  public putRepository(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesRepository) {
    this._repository.internalValue = value;
  }
  public resetRepository() {
    this._repository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository.internalValue;
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesList extends cdktf.ComplexList {
  public internalValue? : OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResources[] | cdktf.IResolvable

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
  public get(index: number): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesOutputReference {
    return new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigOsPolicyAssignmentOsPoliciesResourceGroups {
  /**
  * inventory_filters block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#inventory_filters OsConfigOsPolicyAssignment#inventory_filters}
  */
  readonly inventoryFilters?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFilters[] | cdktf.IResolvable;
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#resources OsConfigOsPolicyAssignment#resources}
  */
  readonly resources: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResources[] | cdktf.IResolvable;
}

export function osConfigOsPolicyAssignmentOsPoliciesResourceGroupsToTerraform(struct?: OsConfigOsPolicyAssignmentOsPoliciesResourceGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inventory_filters: cdktf.listMapper(osConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFiltersToTerraform, true)(struct!.inventoryFilters),
    resources: cdktf.listMapper(osConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesToTerraform, true)(struct!.resources),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigOsPolicyAssignmentOsPoliciesResourceGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inventoryFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inventoryFilters = this._inventoryFilters?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inventoryFilters.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inventoryFilters.internalValue = value.inventoryFilters;
      this._resources.internalValue = value.resources;
    }
  }

  // inventory_filters - computed: false, optional: true, required: false
  private _inventoryFilters = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFiltersList(this, "inventory_filters", false);
  public get inventoryFilters() {
    return this._inventoryFilters;
  }
  public putInventoryFilters(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsInventoryFilters[] | cdktf.IResolvable) {
    this._inventoryFilters.internalValue = value;
  }
  public resetInventoryFilters() {
    this._inventoryFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryFiltersInput() {
    return this._inventoryFilters.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsList extends cdktf.ComplexList {
  public internalValue? : OsConfigOsPolicyAssignmentOsPoliciesResourceGroups[] | cdktf.IResolvable

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
  public get(index: number): OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsOutputReference {
    return new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigOsPolicyAssignmentOsPolicies {
  /**
  * This flag determines the OS policy compliance status when none of the resource groups within the policy are applicable for a VM. Set this value to `true` if the policy needs to be reported as compliant even if the policy has nothing to validate or enforce.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#allow_no_resource_group_match OsConfigOsPolicyAssignment#allow_no_resource_group_match}
  */
  readonly allowNoResourceGroupMatch?: boolean | cdktf.IResolvable;
  /**
  * Policy description. Length of the description is limited to 1024 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#description OsConfigOsPolicyAssignment#description}
  */
  readonly description?: string;
  /**
  * Required. The id of the OS policy with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the assignment.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#id OsConfigOsPolicyAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Required. Policy mode Possible values: MODE_UNSPECIFIED, VALIDATION, ENFORCEMENT
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#mode OsConfigOsPolicyAssignment#mode}
  */
  readonly mode: string;
  /**
  * resource_groups block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#resource_groups OsConfigOsPolicyAssignment#resource_groups}
  */
  readonly resourceGroups: OsConfigOsPolicyAssignmentOsPoliciesResourceGroups[] | cdktf.IResolvable;
}

export function osConfigOsPolicyAssignmentOsPoliciesToTerraform(struct?: OsConfigOsPolicyAssignmentOsPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_no_resource_group_match: cdktf.booleanToTerraform(struct!.allowNoResourceGroupMatch),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    mode: cdktf.stringToTerraform(struct!.mode),
    resource_groups: cdktf.listMapper(osConfigOsPolicyAssignmentOsPoliciesResourceGroupsToTerraform, true)(struct!.resourceGroups),
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigOsPolicyAssignmentOsPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowNoResourceGroupMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNoResourceGroupMatch = this._allowNoResourceGroupMatch;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._resourceGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentOsPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowNoResourceGroupMatch = undefined;
      this._description = undefined;
      this._id = undefined;
      this._mode = undefined;
      this._resourceGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowNoResourceGroupMatch = value.allowNoResourceGroupMatch;
      this._description = value.description;
      this._id = value.id;
      this._mode = value.mode;
      this._resourceGroups.internalValue = value.resourceGroups;
    }
  }

  // allow_no_resource_group_match - computed: false, optional: true, required: false
  private _allowNoResourceGroupMatch?: boolean | cdktf.IResolvable; 
  public get allowNoResourceGroupMatch() {
    return this.getBooleanAttribute('allow_no_resource_group_match');
  }
  public set allowNoResourceGroupMatch(value: boolean | cdktf.IResolvable) {
    this._allowNoResourceGroupMatch = value;
  }
  public resetAllowNoResourceGroupMatch() {
    this._allowNoResourceGroupMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNoResourceGroupMatchInput() {
    return this._allowNoResourceGroupMatch;
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // resource_groups - computed: false, optional: false, required: true
  private _resourceGroups = new OsConfigOsPolicyAssignmentOsPoliciesResourceGroupsList(this, "resource_groups", false);
  public get resourceGroups() {
    return this._resourceGroups;
  }
  public putResourceGroups(value: OsConfigOsPolicyAssignmentOsPoliciesResourceGroups[] | cdktf.IResolvable) {
    this._resourceGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups.internalValue;
  }
}

export class OsConfigOsPolicyAssignmentOsPoliciesList extends cdktf.ComplexList {
  public internalValue? : OsConfigOsPolicyAssignmentOsPolicies[] | cdktf.IResolvable

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
  public get(index: number): OsConfigOsPolicyAssignmentOsPoliciesOutputReference {
    return new OsConfigOsPolicyAssignmentOsPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigOsPolicyAssignmentRolloutDisruptionBudget {
  /**
  * Specifies a fixed value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#fixed OsConfigOsPolicyAssignment#fixed}
  */
  readonly fixed?: number;
  /**
  * Specifies the relative value defined as a percentage, which will be multiplied by a reference value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#percent OsConfigOsPolicyAssignment#percent}
  */
  readonly percent?: number;
}

export function osConfigOsPolicyAssignmentRolloutDisruptionBudgetToTerraform(struct?: OsConfigOsPolicyAssignmentRolloutDisruptionBudgetOutputReference | OsConfigOsPolicyAssignmentRolloutDisruptionBudget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed: cdktf.numberToTerraform(struct!.fixed),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}

export class OsConfigOsPolicyAssignmentRolloutDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentRolloutDisruptionBudget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixed = this._fixed;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentRolloutDisruptionBudget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixed = undefined;
      this._percent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixed = value.fixed;
      this._percent = value.percent;
    }
  }

  // fixed - computed: false, optional: true, required: false
  private _fixed?: number; 
  public get fixed() {
    return this.getNumberAttribute('fixed');
  }
  public set fixed(value: number) {
    this._fixed = value;
  }
  public resetFixed() {
    this._fixed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedInput() {
    return this._fixed;
  }

  // percent - computed: false, optional: true, required: false
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }
}
export interface OsConfigOsPolicyAssignmentRollout {
  /**
  * Required. This determines the minimum duration of time to wait after the configuration changes are applied through the current rollout. A VM continues to count towards the `disruption_budget` at least until this duration of time has passed after configuration changes are applied.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#min_wait_duration OsConfigOsPolicyAssignment#min_wait_duration}
  */
  readonly minWaitDuration: string;
  /**
  * disruption_budget block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#disruption_budget OsConfigOsPolicyAssignment#disruption_budget}
  */
  readonly disruptionBudget: OsConfigOsPolicyAssignmentRolloutDisruptionBudget;
}

export function osConfigOsPolicyAssignmentRolloutToTerraform(struct?: OsConfigOsPolicyAssignmentRolloutOutputReference | OsConfigOsPolicyAssignmentRollout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_wait_duration: cdktf.stringToTerraform(struct!.minWaitDuration),
    disruption_budget: osConfigOsPolicyAssignmentRolloutDisruptionBudgetToTerraform(struct!.disruptionBudget),
  }
}

export class OsConfigOsPolicyAssignmentRolloutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentRollout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minWaitDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWaitDuration = this._minWaitDuration;
    }
    if (this._disruptionBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disruptionBudget = this._disruptionBudget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigOsPolicyAssignmentRollout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minWaitDuration = undefined;
      this._disruptionBudget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minWaitDuration = value.minWaitDuration;
      this._disruptionBudget.internalValue = value.disruptionBudget;
    }
  }

  // min_wait_duration - computed: false, optional: false, required: true
  private _minWaitDuration?: string; 
  public get minWaitDuration() {
    return this.getStringAttribute('min_wait_duration');
  }
  public set minWaitDuration(value: string) {
    this._minWaitDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minWaitDurationInput() {
    return this._minWaitDuration;
  }

  // disruption_budget - computed: false, optional: false, required: true
  private _disruptionBudget = new OsConfigOsPolicyAssignmentRolloutDisruptionBudgetOutputReference(this, "disruption_budget");
  public get disruptionBudget() {
    return this._disruptionBudget;
  }
  public putDisruptionBudget(value: OsConfigOsPolicyAssignmentRolloutDisruptionBudget) {
    this._disruptionBudget.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disruptionBudgetInput() {
    return this._disruptionBudget.internalValue;
  }
}
export interface OsConfigOsPolicyAssignmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#create OsConfigOsPolicyAssignment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#delete OsConfigOsPolicyAssignment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment#update OsConfigOsPolicyAssignment#update}
  */
  readonly update?: string;
}

export function osConfigOsPolicyAssignmentTimeoutsToTerraform(struct?: OsConfigOsPolicyAssignmentTimeoutsOutputReference | OsConfigOsPolicyAssignmentTimeouts | cdktf.IResolvable): any {
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

export class OsConfigOsPolicyAssignmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigOsPolicyAssignmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OsConfigOsPolicyAssignmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment google_os_config_os_policy_assignment}
*/
export class OsConfigOsPolicyAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_os_config_os_policy_assignment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/os_config_os_policy_assignment google_os_config_os_policy_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsConfigOsPolicyAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: OsConfigOsPolicyAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_os_config_os_policy_assignment',
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
    this._description = config.description;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._instanceFilter.internalValue = config.instanceFilter;
    this._osPolicies.internalValue = config.osPolicies;
    this._rollout.internalValue = config.rollout;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // baseline - computed: true, optional: false, required: false
  public get baseline() {
    return this.getBooleanAttribute('baseline');
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
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

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // revision_create_time - computed: true, optional: false, required: false
  public get revisionCreateTime() {
    return this.getStringAttribute('revision_create_time');
  }

  // revision_id - computed: true, optional: false, required: false
  public get revisionId() {
    return this.getStringAttribute('revision_id');
  }

  // rollout_state - computed: true, optional: false, required: false
  public get rolloutState() {
    return this.getStringAttribute('rollout_state');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // instance_filter - computed: false, optional: false, required: true
  private _instanceFilter = new OsConfigOsPolicyAssignmentInstanceFilterOutputReference(this, "instance_filter");
  public get instanceFilter() {
    return this._instanceFilter;
  }
  public putInstanceFilter(value: OsConfigOsPolicyAssignmentInstanceFilter) {
    this._instanceFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceFilterInput() {
    return this._instanceFilter.internalValue;
  }

  // os_policies - computed: false, optional: false, required: true
  private _osPolicies = new OsConfigOsPolicyAssignmentOsPoliciesList(this, "os_policies", false);
  public get osPolicies() {
    return this._osPolicies;
  }
  public putOsPolicies(value: OsConfigOsPolicyAssignmentOsPolicies[] | cdktf.IResolvable) {
    this._osPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osPoliciesInput() {
    return this._osPolicies.internalValue;
  }

  // rollout - computed: false, optional: false, required: true
  private _rollout = new OsConfigOsPolicyAssignmentRolloutOutputReference(this, "rollout");
  public get rollout() {
    return this._rollout;
  }
  public putRollout(value: OsConfigOsPolicyAssignmentRollout) {
    this._rollout.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutInput() {
    return this._rollout.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OsConfigOsPolicyAssignmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OsConfigOsPolicyAssignmentTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      instance_filter: osConfigOsPolicyAssignmentInstanceFilterToTerraform(this._instanceFilter.internalValue),
      os_policies: cdktf.listMapper(osConfigOsPolicyAssignmentOsPoliciesToTerraform, true)(this._osPolicies.internalValue),
      rollout: osConfigOsPolicyAssignmentRolloutToTerraform(this._rollout.internalValue),
      timeouts: osConfigOsPolicyAssignmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
