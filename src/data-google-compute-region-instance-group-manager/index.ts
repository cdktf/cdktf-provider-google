// https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/compute_region_instance_group_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleComputeRegionInstanceGroupManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/compute_region_instance_group_manager#id DataGoogleComputeRegionInstanceGroupManager#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the instance group manager. Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/compute_region_instance_group_manager#name DataGoogleComputeRegionInstanceGroupManager#name}
  */
  readonly name?: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/compute_region_instance_group_manager#project DataGoogleComputeRegionInstanceGroupManager#project}
  */
  readonly project?: string;
  /**
  * The region where the managed instance group resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/compute_region_instance_group_manager#region DataGoogleComputeRegionInstanceGroupManager#region}
  */
  readonly region?: string;
  /**
  * The URL of the created resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/compute_region_instance_group_manager#self_link DataGoogleComputeRegionInstanceGroupManager#self_link}
  */
  readonly selfLink?: string;
}
export interface DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig {
}

export function dataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigToTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigToHclTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
}

export class DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference {
    return new DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies {
}

export function dataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesToTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesToHclTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // health_check - computed: true, optional: false, required: false
  public get healthCheck() {
    return this.getStringAttribute('health_check');
  }

  // initial_delay_sec - computed: true, optional: false, required: false
  public get initialDelaySec() {
    return this.getNumberAttribute('initial_delay_sec');
  }
}

export class DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference {
    return new DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections {
}

export function dataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsToTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsToHclTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // machine_types - computed: true, optional: false, required: false
  public get machineTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('machine_types'));
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rank - computed: true, optional: false, required: false
  public get rank() {
    return this.getNumberAttribute('rank');
  }
}

export class DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference {
    return new DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy {
}

export function dataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyToTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyToHclTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_selections - computed: true, optional: false, required: false
  private _instanceSelections = new DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList(this, "instance_selections", true);
  public get instanceSelections() {
    return this._instanceSelections;
  }
}

export class DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference {
    return new DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy {
}

export function dataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyToTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyToHclTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_action_on_failure - computed: true, optional: false, required: false
  public get defaultActionOnFailure() {
    return this.getStringAttribute('default_action_on_failure');
  }

  // force_update_on_repair - computed: true, optional: false, required: false
  public get forceUpdateOnRepair() {
    return this.getStringAttribute('force_update_on_repair');
  }
}

export class DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference {
    return new DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceGroupManagerNamedPort {
}

export function dataGoogleComputeRegionInstanceGroupManagerNamedPortToTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerNamedPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceGroupManagerNamedPortToHclTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerNamedPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceGroupManagerNamedPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceGroupManagerNamedPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class DataGoogleComputeRegionInstanceGroupManagerNamedPortList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference {
    return new DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy {
}

export function dataGoogleComputeRegionInstanceGroupManagerStandbyPolicyToTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceGroupManagerStandbyPolicyToHclTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // initial_delay_sec - computed: true, optional: false, required: false
  public get initialDelaySec() {
    return this.getNumberAttribute('initial_delay_sec');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}

export class DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference {
    return new DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceGroupManagerStatefulDisk {
}

export function dataGoogleComputeRegionInstanceGroupManagerStatefulDiskToTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerStatefulDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceGroupManagerStatefulDiskToHclTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerStatefulDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceGroupManagerStatefulDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceGroupManagerStatefulDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_rule - computed: true, optional: false, required: false
  public get deleteRule() {
    return this.getStringAttribute('delete_rule');
  }

  // device_name - computed: true, optional: false, required: false
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
}

export class DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference {
    return new DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp {
}

export function dataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpToTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpToHclTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_rule - computed: true, optional: false, required: false
  public get deleteRule() {
    return this.getStringAttribute('delete_rule');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
}

export class DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference {
    return new DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp {
}

export function dataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpToTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpToHclTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delete_rule - computed: true, optional: false, required: false
  public get deleteRule() {
    return this.getStringAttribute('delete_rule');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
}

export class DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference {
    return new DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig {
}

export function dataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigToTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigToHclTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_revision - computed: true, optional: false, required: false
  public get currentRevision() {
    return this.getStringAttribute('current_revision');
  }

  // effective - computed: true, optional: false, required: false
  public get effective() {
    return this.getBooleanAttribute('effective');
  }
}

export class DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference {
    return new DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs {
}

export function dataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsToTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsToHclTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_effective - computed: true, optional: false, required: false
  public get allEffective() {
    return this.getBooleanAttribute('all_effective');
  }
}

export class DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference {
    return new DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceGroupManagerStatusStateful {
}

export function dataGoogleComputeRegionInstanceGroupManagerStatusStatefulToTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerStatusStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceGroupManagerStatusStatefulToHclTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerStatusStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceGroupManagerStatusStateful | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceGroupManagerStatusStateful | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // has_stateful_config - computed: true, optional: false, required: false
  public get hasStatefulConfig() {
    return this.getBooleanAttribute('has_stateful_config');
  }

  // per_instance_configs - computed: true, optional: false, required: false
  private _perInstanceConfigs = new DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList(this, "per_instance_configs", false);
  public get perInstanceConfigs() {
    return this._perInstanceConfigs;
  }
}

export class DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference {
    return new DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget {
}

export function dataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetToTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetToHclTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_reached - computed: true, optional: false, required: false
  public get isReached() {
    return this.getBooleanAttribute('is_reached');
  }
}

export class DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference {
    return new DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceGroupManagerStatus {
}

export function dataGoogleComputeRegionInstanceGroupManagerStatusToTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceGroupManagerStatusToHclTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceGroupManagerStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceGroupManagerStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_instances_config - computed: true, optional: false, required: false
  private _allInstancesConfig = new DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList(this, "all_instances_config", false);
  public get allInstancesConfig() {
    return this._allInstancesConfig;
  }

  // is_stable - computed: true, optional: false, required: false
  public get isStable() {
    return this.getBooleanAttribute('is_stable');
  }

  // stateful - computed: true, optional: false, required: false
  private _stateful = new DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList(this, "stateful", false);
  public get stateful() {
    return this._stateful;
  }

  // version_target - computed: true, optional: false, required: false
  private _versionTarget = new DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList(this, "version_target", false);
  public get versionTarget() {
    return this._versionTarget;
  }
}

export class DataGoogleComputeRegionInstanceGroupManagerStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference {
    return new DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy {
}

export function dataGoogleComputeRegionInstanceGroupManagerUpdatePolicyToTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceGroupManagerUpdatePolicyToHclTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_redistribution_type - computed: true, optional: false, required: false
  public get instanceRedistributionType() {
    return this.getStringAttribute('instance_redistribution_type');
  }

  // max_surge_fixed - computed: true, optional: false, required: false
  public get maxSurgeFixed() {
    return this.getNumberAttribute('max_surge_fixed');
  }

  // max_surge_percent - computed: true, optional: false, required: false
  public get maxSurgePercent() {
    return this.getNumberAttribute('max_surge_percent');
  }

  // max_unavailable_fixed - computed: true, optional: false, required: false
  public get maxUnavailableFixed() {
    return this.getNumberAttribute('max_unavailable_fixed');
  }

  // max_unavailable_percent - computed: true, optional: false, required: false
  public get maxUnavailablePercent() {
    return this.getNumberAttribute('max_unavailable_percent');
  }

  // minimal_action - computed: true, optional: false, required: false
  public get minimalAction() {
    return this.getStringAttribute('minimal_action');
  }

  // most_disruptive_allowed_action - computed: true, optional: false, required: false
  public get mostDisruptiveAllowedAction() {
    return this.getStringAttribute('most_disruptive_allowed_action');
  }

  // replacement_method - computed: true, optional: false, required: false
  public get replacementMethod() {
    return this.getStringAttribute('replacement_method');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference {
    return new DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize {
}

export function dataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeToTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeToHclTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fixed - computed: true, optional: false, required: false
  public get fixed() {
    return this.getNumberAttribute('fixed');
  }

  // percent - computed: true, optional: false, required: false
  public get percent() {
    return this.getNumberAttribute('percent');
  }
}

export class DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference {
    return new DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeRegionInstanceGroupManagerVersion {
}

export function dataGoogleComputeRegionInstanceGroupManagerVersionToTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeRegionInstanceGroupManagerVersionToHclTerraform(struct?: DataGoogleComputeRegionInstanceGroupManagerVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeRegionInstanceGroupManagerVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeRegionInstanceGroupManagerVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_template - computed: true, optional: false, required: false
  public get instanceTemplate() {
    return this.getStringAttribute('instance_template');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // target_size - computed: true, optional: false, required: false
  private _targetSize = new DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList(this, "target_size", false);
  public get targetSize() {
    return this._targetSize;
  }
}

export class DataGoogleComputeRegionInstanceGroupManagerVersionList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference {
    return new DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/compute_region_instance_group_manager google_compute_region_instance_group_manager}
*/
export class DataGoogleComputeRegionInstanceGroupManager extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_region_instance_group_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleComputeRegionInstanceGroupManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleComputeRegionInstanceGroupManager to import
  * @param importFromId The id of the existing DataGoogleComputeRegionInstanceGroupManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/compute_region_instance_group_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleComputeRegionInstanceGroupManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_region_instance_group_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.27.0/docs/data-sources/compute_region_instance_group_manager google_compute_region_instance_group_manager} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleComputeRegionInstanceGroupManagerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGoogleComputeRegionInstanceGroupManagerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_instance_group_manager',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.27.0',
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
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._selfLink = config.selfLink;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_instances_config - computed: true, optional: false, required: false
  private _allInstancesConfig = new DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList(this, "all_instances_config", false);
  public get allInstancesConfig() {
    return this._allInstancesConfig;
  }

  // auto_healing_policies - computed: true, optional: false, required: false
  private _autoHealingPolicies = new DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList(this, "auto_healing_policies", false);
  public get autoHealingPolicies() {
    return this._autoHealingPolicies;
  }

  // base_instance_name - computed: true, optional: false, required: false
  public get baseInstanceName() {
    return this.getStringAttribute('base_instance_name');
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // distribution_policy_target_shape - computed: true, optional: false, required: false
  public get distributionPolicyTargetShape() {
    return this.getStringAttribute('distribution_policy_target_shape');
  }

  // distribution_policy_zones - computed: true, optional: false, required: false
  public get distributionPolicyZones() {
    return cdktf.Fn.tolist(this.getListAttribute('distribution_policy_zones'));
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
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

  // instance_flexibility_policy - computed: true, optional: false, required: false
  private _instanceFlexibilityPolicy = new DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList(this, "instance_flexibility_policy", false);
  public get instanceFlexibilityPolicy() {
    return this._instanceFlexibilityPolicy;
  }

  // instance_group - computed: true, optional: false, required: false
  public get instanceGroup() {
    return this.getStringAttribute('instance_group');
  }

  // instance_group_manager_id - computed: true, optional: false, required: false
  public get instanceGroupManagerId() {
    return this.getNumberAttribute('instance_group_manager_id');
  }

  // instance_lifecycle_policy - computed: true, optional: false, required: false
  private _instanceLifecyclePolicy = new DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList(this, "instance_lifecycle_policy", false);
  public get instanceLifecyclePolicy() {
    return this._instanceLifecyclePolicy;
  }

  // list_managed_instances_results - computed: true, optional: false, required: false
  public get listManagedInstancesResults() {
    return this.getStringAttribute('list_managed_instances_results');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // named_port - computed: true, optional: false, required: false
  private _namedPort = new DataGoogleComputeRegionInstanceGroupManagerNamedPortList(this, "named_port", true);
  public get namedPort() {
    return this._namedPort;
  }

  // project - computed: false, optional: true, required: false
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

  // region - computed: false, optional: true, required: false
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

  // self_link - computed: false, optional: true, required: false
  private _selfLink?: string; 
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }
  public set selfLink(value: string) {
    this._selfLink = value;
  }
  public resetSelfLink() {
    this._selfLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfLinkInput() {
    return this._selfLink;
  }

  // standby_policy - computed: true, optional: false, required: false
  private _standbyPolicy = new DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList(this, "standby_policy", false);
  public get standbyPolicy() {
    return this._standbyPolicy;
  }

  // stateful_disk - computed: true, optional: false, required: false
  private _statefulDisk = new DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList(this, "stateful_disk", true);
  public get statefulDisk() {
    return this._statefulDisk;
  }

  // stateful_external_ip - computed: true, optional: false, required: false
  private _statefulExternalIp = new DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList(this, "stateful_external_ip", false);
  public get statefulExternalIp() {
    return this._statefulExternalIp;
  }

  // stateful_internal_ip - computed: true, optional: false, required: false
  private _statefulInternalIp = new DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList(this, "stateful_internal_ip", false);
  public get statefulInternalIp() {
    return this._statefulInternalIp;
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataGoogleComputeRegionInstanceGroupManagerStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // target_pools - computed: true, optional: false, required: false
  public get targetPools() {
    return cdktf.Fn.tolist(this.getListAttribute('target_pools'));
  }

  // target_size - computed: true, optional: false, required: false
  public get targetSize() {
    return this.getNumberAttribute('target_size');
  }

  // target_stopped_size - computed: true, optional: false, required: false
  public get targetStoppedSize() {
    return this.getNumberAttribute('target_stopped_size');
  }

  // target_suspended_size - computed: true, optional: false, required: false
  public get targetSuspendedSize() {
    return this.getNumberAttribute('target_suspended_size');
  }

  // update_policy - computed: true, optional: false, required: false
  private _updatePolicy = new DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList(this, "update_policy", false);
  public get updatePolicy() {
    return this._updatePolicy;
  }

  // version - computed: true, optional: false, required: false
  private _version = new DataGoogleComputeRegionInstanceGroupManagerVersionList(this, "version", false);
  public get version() {
    return this._version;
  }

  // wait_for_instances - computed: true, optional: false, required: false
  public get waitForInstances() {
    return this.getBooleanAttribute('wait_for_instances');
  }

  // wait_for_instances_status - computed: true, optional: false, required: false
  public get waitForInstancesStatus() {
    return this.getStringAttribute('wait_for_instances_status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      self_link: cdktf.stringToTerraform(this._selfLink),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      self_link: {
        value: cdktf.stringToHclTerraform(this._selfLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
