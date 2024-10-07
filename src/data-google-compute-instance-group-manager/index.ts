// https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/data-sources/compute_instance_group_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleComputeInstanceGroupManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/data-sources/compute_instance_group_manager#id DataGoogleComputeInstanceGroupManager#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the instance group manager. Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/data-sources/compute_instance_group_manager#name DataGoogleComputeInstanceGroupManager#name}
  */
  readonly name?: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/data-sources/compute_instance_group_manager#project DataGoogleComputeInstanceGroupManager#project}
  */
  readonly project?: string;
  /**
  * The URL of the created resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/data-sources/compute_instance_group_manager#self_link DataGoogleComputeInstanceGroupManager#self_link}
  */
  readonly selfLink?: string;
  /**
  * The zone that instances in this group should be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/data-sources/compute_instance_group_manager#zone DataGoogleComputeInstanceGroupManager#zone}
  */
  readonly zone?: string;
}
export interface DataGoogleComputeInstanceGroupManagerAllInstancesConfig {
}

export function dataGoogleComputeInstanceGroupManagerAllInstancesConfigToTerraform(struct?: DataGoogleComputeInstanceGroupManagerAllInstancesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeInstanceGroupManagerAllInstancesConfigToHclTerraform(struct?: DataGoogleComputeInstanceGroupManagerAllInstancesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeInstanceGroupManagerAllInstancesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeInstanceGroupManagerAllInstancesConfig | undefined) {
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

export class DataGoogleComputeInstanceGroupManagerAllInstancesConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference {
    return new DataGoogleComputeInstanceGroupManagerAllInstancesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeInstanceGroupManagerAutoHealingPolicies {
}

export function dataGoogleComputeInstanceGroupManagerAutoHealingPoliciesToTerraform(struct?: DataGoogleComputeInstanceGroupManagerAutoHealingPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeInstanceGroupManagerAutoHealingPoliciesToHclTerraform(struct?: DataGoogleComputeInstanceGroupManagerAutoHealingPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeInstanceGroupManagerAutoHealingPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeInstanceGroupManagerAutoHealingPolicies | undefined) {
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

export class DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference {
    return new DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy {
}

export function dataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyToTerraform(struct?: DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyToHclTerraform(struct?: DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicy | undefined) {
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

export class DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference {
    return new DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeInstanceGroupManagerNamedPort {
}

export function dataGoogleComputeInstanceGroupManagerNamedPortToTerraform(struct?: DataGoogleComputeInstanceGroupManagerNamedPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeInstanceGroupManagerNamedPortToHclTerraform(struct?: DataGoogleComputeInstanceGroupManagerNamedPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeInstanceGroupManagerNamedPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeInstanceGroupManagerNamedPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeInstanceGroupManagerNamedPort | undefined) {
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

export class DataGoogleComputeInstanceGroupManagerNamedPortList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeInstanceGroupManagerNamedPortOutputReference {
    return new DataGoogleComputeInstanceGroupManagerNamedPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeInstanceGroupManagerStatefulDisk {
}

export function dataGoogleComputeInstanceGroupManagerStatefulDiskToTerraform(struct?: DataGoogleComputeInstanceGroupManagerStatefulDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeInstanceGroupManagerStatefulDiskToHclTerraform(struct?: DataGoogleComputeInstanceGroupManagerStatefulDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeInstanceGroupManagerStatefulDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeInstanceGroupManagerStatefulDisk | undefined) {
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

export class DataGoogleComputeInstanceGroupManagerStatefulDiskList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference {
    return new DataGoogleComputeInstanceGroupManagerStatefulDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeInstanceGroupManagerStatefulExternalIp {
}

export function dataGoogleComputeInstanceGroupManagerStatefulExternalIpToTerraform(struct?: DataGoogleComputeInstanceGroupManagerStatefulExternalIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeInstanceGroupManagerStatefulExternalIpToHclTerraform(struct?: DataGoogleComputeInstanceGroupManagerStatefulExternalIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeInstanceGroupManagerStatefulExternalIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeInstanceGroupManagerStatefulExternalIp | undefined) {
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

export class DataGoogleComputeInstanceGroupManagerStatefulExternalIpList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference {
    return new DataGoogleComputeInstanceGroupManagerStatefulExternalIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeInstanceGroupManagerStatefulInternalIp {
}

export function dataGoogleComputeInstanceGroupManagerStatefulInternalIpToTerraform(struct?: DataGoogleComputeInstanceGroupManagerStatefulInternalIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeInstanceGroupManagerStatefulInternalIpToHclTerraform(struct?: DataGoogleComputeInstanceGroupManagerStatefulInternalIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeInstanceGroupManagerStatefulInternalIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeInstanceGroupManagerStatefulInternalIp | undefined) {
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

export class DataGoogleComputeInstanceGroupManagerStatefulInternalIpList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference {
    return new DataGoogleComputeInstanceGroupManagerStatefulInternalIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig {
}

export function dataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigToTerraform(struct?: DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigToHclTerraform(struct?: DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfig | undefined) {
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

export class DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference {
    return new DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs {
}

export function dataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsToTerraform(struct?: DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsToHclTerraform(struct?: DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigs | undefined) {
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

export class DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference {
    return new DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeInstanceGroupManagerStatusStateful {
}

export function dataGoogleComputeInstanceGroupManagerStatusStatefulToTerraform(struct?: DataGoogleComputeInstanceGroupManagerStatusStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeInstanceGroupManagerStatusStatefulToHclTerraform(struct?: DataGoogleComputeInstanceGroupManagerStatusStateful): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeInstanceGroupManagerStatusStateful | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeInstanceGroupManagerStatusStateful | undefined) {
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
  private _perInstanceConfigs = new DataGoogleComputeInstanceGroupManagerStatusStatefulPerInstanceConfigsList(this, "per_instance_configs", false);
  public get perInstanceConfigs() {
    return this._perInstanceConfigs;
  }
}

export class DataGoogleComputeInstanceGroupManagerStatusStatefulList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference {
    return new DataGoogleComputeInstanceGroupManagerStatusStatefulOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeInstanceGroupManagerStatusVersionTarget {
}

export function dataGoogleComputeInstanceGroupManagerStatusVersionTargetToTerraform(struct?: DataGoogleComputeInstanceGroupManagerStatusVersionTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeInstanceGroupManagerStatusVersionTargetToHclTerraform(struct?: DataGoogleComputeInstanceGroupManagerStatusVersionTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeInstanceGroupManagerStatusVersionTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeInstanceGroupManagerStatusVersionTarget | undefined) {
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

export class DataGoogleComputeInstanceGroupManagerStatusVersionTargetList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference {
    return new DataGoogleComputeInstanceGroupManagerStatusVersionTargetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeInstanceGroupManagerStatus {
}

export function dataGoogleComputeInstanceGroupManagerStatusToTerraform(struct?: DataGoogleComputeInstanceGroupManagerStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeInstanceGroupManagerStatusToHclTerraform(struct?: DataGoogleComputeInstanceGroupManagerStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeInstanceGroupManagerStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeInstanceGroupManagerStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeInstanceGroupManagerStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_instances_config - computed: true, optional: false, required: false
  private _allInstancesConfig = new DataGoogleComputeInstanceGroupManagerStatusAllInstancesConfigList(this, "all_instances_config", false);
  public get allInstancesConfig() {
    return this._allInstancesConfig;
  }

  // is_stable - computed: true, optional: false, required: false
  public get isStable() {
    return this.getBooleanAttribute('is_stable');
  }

  // stateful - computed: true, optional: false, required: false
  private _stateful = new DataGoogleComputeInstanceGroupManagerStatusStatefulList(this, "stateful", false);
  public get stateful() {
    return this._stateful;
  }

  // version_target - computed: true, optional: false, required: false
  private _versionTarget = new DataGoogleComputeInstanceGroupManagerStatusVersionTargetList(this, "version_target", false);
  public get versionTarget() {
    return this._versionTarget;
  }
}

export class DataGoogleComputeInstanceGroupManagerStatusList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeInstanceGroupManagerStatusOutputReference {
    return new DataGoogleComputeInstanceGroupManagerStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeInstanceGroupManagerUpdatePolicy {
}

export function dataGoogleComputeInstanceGroupManagerUpdatePolicyToTerraform(struct?: DataGoogleComputeInstanceGroupManagerUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeInstanceGroupManagerUpdatePolicyToHclTerraform(struct?: DataGoogleComputeInstanceGroupManagerUpdatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeInstanceGroupManagerUpdatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeInstanceGroupManagerUpdatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

export class DataGoogleComputeInstanceGroupManagerUpdatePolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference {
    return new DataGoogleComputeInstanceGroupManagerUpdatePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeInstanceGroupManagerVersionTargetSize {
}

export function dataGoogleComputeInstanceGroupManagerVersionTargetSizeToTerraform(struct?: DataGoogleComputeInstanceGroupManagerVersionTargetSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeInstanceGroupManagerVersionTargetSizeToHclTerraform(struct?: DataGoogleComputeInstanceGroupManagerVersionTargetSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeInstanceGroupManagerVersionTargetSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeInstanceGroupManagerVersionTargetSize | undefined) {
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

export class DataGoogleComputeInstanceGroupManagerVersionTargetSizeList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference {
    return new DataGoogleComputeInstanceGroupManagerVersionTargetSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleComputeInstanceGroupManagerVersion {
}

export function dataGoogleComputeInstanceGroupManagerVersionToTerraform(struct?: DataGoogleComputeInstanceGroupManagerVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeInstanceGroupManagerVersionToHclTerraform(struct?: DataGoogleComputeInstanceGroupManagerVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeInstanceGroupManagerVersionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeInstanceGroupManagerVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeInstanceGroupManagerVersion | undefined) {
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
  private _targetSize = new DataGoogleComputeInstanceGroupManagerVersionTargetSizeList(this, "target_size", false);
  public get targetSize() {
    return this._targetSize;
  }
}

export class DataGoogleComputeInstanceGroupManagerVersionList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeInstanceGroupManagerVersionOutputReference {
    return new DataGoogleComputeInstanceGroupManagerVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/data-sources/compute_instance_group_manager google_compute_instance_group_manager}
*/
export class DataGoogleComputeInstanceGroupManager extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_instance_group_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleComputeInstanceGroupManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleComputeInstanceGroupManager to import
  * @param importFromId The id of the existing DataGoogleComputeInstanceGroupManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/data-sources/compute_instance_group_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleComputeInstanceGroupManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_instance_group_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/data-sources/compute_instance_group_manager google_compute_instance_group_manager} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleComputeInstanceGroupManagerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGoogleComputeInstanceGroupManagerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_compute_instance_group_manager',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.5.0',
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
    this._selfLink = config.selfLink;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_instances_config - computed: true, optional: false, required: false
  private _allInstancesConfig = new DataGoogleComputeInstanceGroupManagerAllInstancesConfigList(this, "all_instances_config", false);
  public get allInstancesConfig() {
    return this._allInstancesConfig;
  }

  // auto_healing_policies - computed: true, optional: false, required: false
  private _autoHealingPolicies = new DataGoogleComputeInstanceGroupManagerAutoHealingPoliciesList(this, "auto_healing_policies", false);
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

  // instance_group - computed: true, optional: false, required: false
  public get instanceGroup() {
    return this.getStringAttribute('instance_group');
  }

  // instance_lifecycle_policy - computed: true, optional: false, required: false
  private _instanceLifecyclePolicy = new DataGoogleComputeInstanceGroupManagerInstanceLifecyclePolicyList(this, "instance_lifecycle_policy", false);
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
  private _namedPort = new DataGoogleComputeInstanceGroupManagerNamedPortList(this, "named_port", true);
  public get namedPort() {
    return this._namedPort;
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
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

  // stateful_disk - computed: true, optional: false, required: false
  private _statefulDisk = new DataGoogleComputeInstanceGroupManagerStatefulDiskList(this, "stateful_disk", true);
  public get statefulDisk() {
    return this._statefulDisk;
  }

  // stateful_external_ip - computed: true, optional: false, required: false
  private _statefulExternalIp = new DataGoogleComputeInstanceGroupManagerStatefulExternalIpList(this, "stateful_external_ip", false);
  public get statefulExternalIp() {
    return this._statefulExternalIp;
  }

  // stateful_internal_ip - computed: true, optional: false, required: false
  private _statefulInternalIp = new DataGoogleComputeInstanceGroupManagerStatefulInternalIpList(this, "stateful_internal_ip", false);
  public get statefulInternalIp() {
    return this._statefulInternalIp;
  }

  // status - computed: true, optional: false, required: false
  private _status = new DataGoogleComputeInstanceGroupManagerStatusList(this, "status", false);
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

  // update_policy - computed: true, optional: false, required: false
  private _updatePolicy = new DataGoogleComputeInstanceGroupManagerUpdatePolicyList(this, "update_policy", false);
  public get updatePolicy() {
    return this._updatePolicy;
  }

  // version - computed: true, optional: false, required: false
  private _version = new DataGoogleComputeInstanceGroupManagerVersionList(this, "version", false);
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

  // zone - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      self_link: cdktf.stringToTerraform(this._selfLink),
      zone: cdktf.stringToTerraform(this._zone),
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
      self_link: {
        value: cdktf.stringToHclTerraform(this._selfLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
