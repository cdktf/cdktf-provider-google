// https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmwareenginePrivateCloudConfig extends cdktf.TerraformMetaArguments {
  /**
  * The number of hours to delay this request. You can set this value to an hour between 0 to 8, where setting it to 0 starts the deletion request immediately. If no value is set, a default value is set at the API Level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#deletion_delay_hours VmwareenginePrivateCloud#deletion_delay_hours}
  */
  readonly deletionDelayHours?: number;
  /**
  * User-provided description for this private cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#description VmwareenginePrivateCloud#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#id VmwareenginePrivateCloud#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location where the PrivateCloud should reside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#location VmwareenginePrivateCloud#location}
  */
  readonly location: string;
  /**
  * The ID of the PrivateCloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#name VmwareenginePrivateCloud#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#project VmwareenginePrivateCloud#project}
  */
  readonly project?: string;
  /**
  * While set true, deletion_delay_hours value will be sent in the request even for zero value of the field. This field is only useful for setting 0 value to the deletion_delay_hours field. It can be used both alone and together with deletion_delay_hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#send_deletion_delay_hours_if_zero VmwareenginePrivateCloud#send_deletion_delay_hours_if_zero}
  */
  readonly sendDeletionDelayHoursIfZero?: boolean | cdktf.IResolvable;
  /**
  * Initial type of the private cloud. Possible values: ["STANDARD", "TIME_LIMITED", "STRETCHED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#type VmwareenginePrivateCloud#type}
  */
  readonly type?: string;
  /**
  * management_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#management_cluster VmwareenginePrivateCloud#management_cluster}
  */
  readonly managementCluster: VmwareenginePrivateCloudManagementCluster;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#network_config VmwareenginePrivateCloud#network_config}
  */
  readonly networkConfig: VmwareenginePrivateCloudNetworkConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#timeouts VmwareenginePrivateCloud#timeouts}
  */
  readonly timeouts?: VmwareenginePrivateCloudTimeouts;
}
export interface VmwareenginePrivateCloudHcx {
}

export function vmwareenginePrivateCloudHcxToTerraform(struct?: VmwareenginePrivateCloudHcx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmwareenginePrivateCloudHcxToHclTerraform(struct?: VmwareenginePrivateCloudHcx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmwareenginePrivateCloudHcxOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmwareenginePrivateCloudHcx | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareenginePrivateCloudHcx | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // internal_ip - computed: true, optional: false, required: false
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class VmwareenginePrivateCloudHcxList extends cdktf.ComplexList {

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
  public get(index: number): VmwareenginePrivateCloudHcxOutputReference {
    return new VmwareenginePrivateCloudHcxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmwareenginePrivateCloudNsx {
}

export function vmwareenginePrivateCloudNsxToTerraform(struct?: VmwareenginePrivateCloudNsx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmwareenginePrivateCloudNsxToHclTerraform(struct?: VmwareenginePrivateCloudNsx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmwareenginePrivateCloudNsxOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmwareenginePrivateCloudNsx | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareenginePrivateCloudNsx | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // internal_ip - computed: true, optional: false, required: false
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class VmwareenginePrivateCloudNsxList extends cdktf.ComplexList {

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
  public get(index: number): VmwareenginePrivateCloudNsxOutputReference {
    return new VmwareenginePrivateCloudNsxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmwareenginePrivateCloudVcenter {
}

export function vmwareenginePrivateCloudVcenterToTerraform(struct?: VmwareenginePrivateCloudVcenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vmwareenginePrivateCloudVcenterToHclTerraform(struct?: VmwareenginePrivateCloudVcenter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VmwareenginePrivateCloudVcenterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmwareenginePrivateCloudVcenter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareenginePrivateCloudVcenter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // internal_ip - computed: true, optional: false, required: false
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class VmwareenginePrivateCloudVcenterList extends cdktf.ComplexList {

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
  public get(index: number): VmwareenginePrivateCloudVcenterOutputReference {
    return new VmwareenginePrivateCloudVcenterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds {
  /**
  * The utilization triggering the scale-in operation in percent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#scale_in VmwareenginePrivateCloud#scale_in}
  */
  readonly scaleIn: number;
  /**
  * The utilization triggering the scale-out operation in percent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#scale_out VmwareenginePrivateCloud#scale_out}
  */
  readonly scaleOut: number;
}

export function vmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsToTerraform(struct?: VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference | VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scale_in: cdktf.numberToTerraform(struct!.scaleIn),
    scale_out: cdktf.numberToTerraform(struct!.scaleOut),
  }
}


export function vmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsToHclTerraform(struct?: VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference | VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scale_in: {
      value: cdktf.numberToHclTerraform(struct!.scaleIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_out: {
      value: cdktf.numberToHclTerraform(struct!.scaleOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scaleIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleIn = this._scaleIn;
    }
    if (this._scaleOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOut = this._scaleOut;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scaleIn = undefined;
      this._scaleOut = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scaleIn = value.scaleIn;
      this._scaleOut = value.scaleOut;
    }
  }

  // scale_in - computed: false, optional: false, required: true
  private _scaleIn?: number; 
  public get scaleIn() {
    return this.getNumberAttribute('scale_in');
  }
  public set scaleIn(value: number) {
    this._scaleIn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInInput() {
    return this._scaleIn;
  }

  // scale_out - computed: false, optional: false, required: true
  private _scaleOut?: number; 
  public get scaleOut() {
    return this.getNumberAttribute('scale_out');
  }
  public set scaleOut(value: number) {
    this._scaleOut = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutInput() {
    return this._scaleOut;
  }
}
export interface VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds {
  /**
  * The utilization triggering the scale-in operation in percent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#scale_in VmwareenginePrivateCloud#scale_in}
  */
  readonly scaleIn: number;
  /**
  * The utilization triggering the scale-out operation in percent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#scale_out VmwareenginePrivateCloud#scale_out}
  */
  readonly scaleOut: number;
}

export function vmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsToTerraform(struct?: VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference | VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scale_in: cdktf.numberToTerraform(struct!.scaleIn),
    scale_out: cdktf.numberToTerraform(struct!.scaleOut),
  }
}


export function vmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsToHclTerraform(struct?: VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference | VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scale_in: {
      value: cdktf.numberToHclTerraform(struct!.scaleIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_out: {
      value: cdktf.numberToHclTerraform(struct!.scaleOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scaleIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleIn = this._scaleIn;
    }
    if (this._scaleOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOut = this._scaleOut;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scaleIn = undefined;
      this._scaleOut = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scaleIn = value.scaleIn;
      this._scaleOut = value.scaleOut;
    }
  }

  // scale_in - computed: false, optional: false, required: true
  private _scaleIn?: number; 
  public get scaleIn() {
    return this.getNumberAttribute('scale_in');
  }
  public set scaleIn(value: number) {
    this._scaleIn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInInput() {
    return this._scaleIn;
  }

  // scale_out - computed: false, optional: false, required: true
  private _scaleOut?: number; 
  public get scaleOut() {
    return this.getNumberAttribute('scale_out');
  }
  public set scaleOut(value: number) {
    this._scaleOut = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutInput() {
    return this._scaleOut;
  }
}
export interface VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds {
  /**
  * The utilization triggering the scale-in operation in percent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#scale_in VmwareenginePrivateCloud#scale_in}
  */
  readonly scaleIn: number;
  /**
  * The utilization triggering the scale-out operation in percent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#scale_out VmwareenginePrivateCloud#scale_out}
  */
  readonly scaleOut: number;
}

export function vmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsToTerraform(struct?: VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference | VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scale_in: cdktf.numberToTerraform(struct!.scaleIn),
    scale_out: cdktf.numberToTerraform(struct!.scaleOut),
  }
}


export function vmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsToHclTerraform(struct?: VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference | VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scale_in: {
      value: cdktf.numberToHclTerraform(struct!.scaleIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scale_out: {
      value: cdktf.numberToHclTerraform(struct!.scaleOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scaleIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleIn = this._scaleIn;
    }
    if (this._scaleOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOut = this._scaleOut;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scaleIn = undefined;
      this._scaleOut = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scaleIn = value.scaleIn;
      this._scaleOut = value.scaleOut;
    }
  }

  // scale_in - computed: false, optional: false, required: true
  private _scaleIn?: number; 
  public get scaleIn() {
    return this.getNumberAttribute('scale_in');
  }
  public set scaleIn(value: number) {
    this._scaleIn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleInInput() {
    return this._scaleIn;
  }

  // scale_out - computed: false, optional: false, required: true
  private _scaleOut?: number; 
  public get scaleOut() {
    return this.getNumberAttribute('scale_out');
  }
  public set scaleOut(value: number) {
    this._scaleOut = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutInput() {
    return this._scaleOut;
  }
}
export interface VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#autoscale_policy_id VmwareenginePrivateCloud#autoscale_policy_id}
  */
  readonly autoscalePolicyId: string;
  /**
  * The canonical identifier of the node type to add or remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#node_type_id VmwareenginePrivateCloud#node_type_id}
  */
  readonly nodeTypeId: string;
  /**
  * Number of nodes to add to a cluster during a scale-out operation.
  * Must be divisible by 2 for stretched clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#scale_out_size VmwareenginePrivateCloud#scale_out_size}
  */
  readonly scaleOutSize: number;
  /**
  * consumed_memory_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#consumed_memory_thresholds VmwareenginePrivateCloud#consumed_memory_thresholds}
  */
  readonly consumedMemoryThresholds?: VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds;
  /**
  * cpu_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#cpu_thresholds VmwareenginePrivateCloud#cpu_thresholds}
  */
  readonly cpuThresholds?: VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds;
  /**
  * storage_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#storage_thresholds VmwareenginePrivateCloud#storage_thresholds}
  */
  readonly storageThresholds?: VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds;
}

export function vmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesToTerraform(struct?: VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscale_policy_id: cdktf.stringToTerraform(struct!.autoscalePolicyId),
    node_type_id: cdktf.stringToTerraform(struct!.nodeTypeId),
    scale_out_size: cdktf.numberToTerraform(struct!.scaleOutSize),
    consumed_memory_thresholds: vmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsToTerraform(struct!.consumedMemoryThresholds),
    cpu_thresholds: vmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsToTerraform(struct!.cpuThresholds),
    storage_thresholds: vmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsToTerraform(struct!.storageThresholds),
  }
}


export function vmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesToHclTerraform(struct?: VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscale_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.autoscalePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scale_out_size: {
      value: cdktf.numberToHclTerraform(struct!.scaleOutSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    consumed_memory_thresholds: {
      value: vmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsToHclTerraform(struct!.consumedMemoryThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList",
    },
    cpu_thresholds: {
      value: vmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsToHclTerraform(struct!.cpuThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList",
    },
    storage_thresholds: {
      value: vmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsToHclTerraform(struct!.storageThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscalePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalePolicyId = this._autoscalePolicyId;
    }
    if (this._nodeTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeId = this._nodeTypeId;
    }
    if (this._scaleOutSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleOutSize = this._scaleOutSize;
    }
    if (this._consumedMemoryThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumedMemoryThresholds = this._consumedMemoryThresholds?.internalValue;
    }
    if (this._cpuThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuThresholds = this._cpuThresholds?.internalValue;
    }
    if (this._storageThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageThresholds = this._storageThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscalePolicyId = undefined;
      this._nodeTypeId = undefined;
      this._scaleOutSize = undefined;
      this._consumedMemoryThresholds.internalValue = undefined;
      this._cpuThresholds.internalValue = undefined;
      this._storageThresholds.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscalePolicyId = value.autoscalePolicyId;
      this._nodeTypeId = value.nodeTypeId;
      this._scaleOutSize = value.scaleOutSize;
      this._consumedMemoryThresholds.internalValue = value.consumedMemoryThresholds;
      this._cpuThresholds.internalValue = value.cpuThresholds;
      this._storageThresholds.internalValue = value.storageThresholds;
    }
  }

  // autoscale_policy_id - computed: false, optional: false, required: true
  private _autoscalePolicyId?: string; 
  public get autoscalePolicyId() {
    return this.getStringAttribute('autoscale_policy_id');
  }
  public set autoscalePolicyId(value: string) {
    this._autoscalePolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalePolicyIdInput() {
    return this._autoscalePolicyId;
  }

  // node_type_id - computed: false, optional: false, required: true
  private _nodeTypeId?: string; 
  public get nodeTypeId() {
    return this.getStringAttribute('node_type_id');
  }
  public set nodeTypeId(value: string) {
    this._nodeTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeIdInput() {
    return this._nodeTypeId;
  }

  // scale_out_size - computed: false, optional: false, required: true
  private _scaleOutSize?: number; 
  public get scaleOutSize() {
    return this.getNumberAttribute('scale_out_size');
  }
  public set scaleOutSize(value: number) {
    this._scaleOutSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleOutSizeInput() {
    return this._scaleOutSize;
  }

  // consumed_memory_thresholds - computed: false, optional: true, required: false
  private _consumedMemoryThresholds = new VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference(this, "consumed_memory_thresholds");
  public get consumedMemoryThresholds() {
    return this._consumedMemoryThresholds;
  }
  public putConsumedMemoryThresholds(value: VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds) {
    this._consumedMemoryThresholds.internalValue = value;
  }
  public resetConsumedMemoryThresholds() {
    this._consumedMemoryThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumedMemoryThresholdsInput() {
    return this._consumedMemoryThresholds.internalValue;
  }

  // cpu_thresholds - computed: false, optional: true, required: false
  private _cpuThresholds = new VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference(this, "cpu_thresholds");
  public get cpuThresholds() {
    return this._cpuThresholds;
  }
  public putCpuThresholds(value: VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds) {
    this._cpuThresholds.internalValue = value;
  }
  public resetCpuThresholds() {
    this._cpuThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuThresholdsInput() {
    return this._cpuThresholds.internalValue;
  }

  // storage_thresholds - computed: false, optional: true, required: false
  private _storageThresholds = new VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference(this, "storage_thresholds");
  public get storageThresholds() {
    return this._storageThresholds;
  }
  public putStorageThresholds(value: VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds) {
    this._storageThresholds.internalValue = value;
  }
  public resetStorageThresholds() {
    this._storageThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageThresholdsInput() {
    return this._storageThresholds.internalValue;
  }
}

export class VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList extends cdktf.ComplexList {
  public internalValue? : VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies[] | cdktf.IResolvable

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
  public get(index: number): VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference {
    return new VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmwareenginePrivateCloudManagementClusterAutoscalingSettings {
  /**
  * The minimum duration between consecutive autoscale operations.
  * It starts once addition or removal of nodes is fully completed.
  * Minimum cool down period is 30m.
  * Cool down period must be in whole minutes (for example, 30m, 31m, 50m).
  * Mandatory for successful addition of autoscaling settings in cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#cool_down_period VmwareenginePrivateCloud#cool_down_period}
  */
  readonly coolDownPeriod?: string;
  /**
  * Maximum number of nodes of any type in a cluster.
  * Mandatory for successful addition of autoscaling settings in cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#max_cluster_node_count VmwareenginePrivateCloud#max_cluster_node_count}
  */
  readonly maxClusterNodeCount?: number;
  /**
  * Minimum number of nodes of any type in a cluster.
  * Mandatory for successful addition of autoscaling settings in cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#min_cluster_node_count VmwareenginePrivateCloud#min_cluster_node_count}
  */
  readonly minClusterNodeCount?: number;
  /**
  * autoscaling_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#autoscaling_policies VmwareenginePrivateCloud#autoscaling_policies}
  */
  readonly autoscalingPolicies: VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies[] | cdktf.IResolvable;
}

export function vmwareenginePrivateCloudManagementClusterAutoscalingSettingsToTerraform(struct?: VmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference | VmwareenginePrivateCloudManagementClusterAutoscalingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cool_down_period: cdktf.stringToTerraform(struct!.coolDownPeriod),
    max_cluster_node_count: cdktf.numberToTerraform(struct!.maxClusterNodeCount),
    min_cluster_node_count: cdktf.numberToTerraform(struct!.minClusterNodeCount),
    autoscaling_policies: cdktf.listMapper(vmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesToTerraform, true)(struct!.autoscalingPolicies),
  }
}


export function vmwareenginePrivateCloudManagementClusterAutoscalingSettingsToHclTerraform(struct?: VmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference | VmwareenginePrivateCloudManagementClusterAutoscalingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cool_down_period: {
      value: cdktf.stringToHclTerraform(struct!.coolDownPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_cluster_node_count: {
      value: cdktf.numberToHclTerraform(struct!.maxClusterNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_cluster_node_count: {
      value: cdktf.numberToHclTerraform(struct!.minClusterNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autoscaling_policies: {
      value: cdktf.listMapperHcl(vmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesToHclTerraform, true)(struct!.autoscalingPolicies),
      isBlock: true,
      type: "set",
      storageClassType: "VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareenginePrivateCloudManagementClusterAutoscalingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coolDownPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.coolDownPeriod = this._coolDownPeriod;
    }
    if (this._maxClusterNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxClusterNodeCount = this._maxClusterNodeCount;
    }
    if (this._minClusterNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minClusterNodeCount = this._minClusterNodeCount;
    }
    if (this._autoscalingPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingPolicies = this._autoscalingPolicies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareenginePrivateCloudManagementClusterAutoscalingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coolDownPeriod = undefined;
      this._maxClusterNodeCount = undefined;
      this._minClusterNodeCount = undefined;
      this._autoscalingPolicies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coolDownPeriod = value.coolDownPeriod;
      this._maxClusterNodeCount = value.maxClusterNodeCount;
      this._minClusterNodeCount = value.minClusterNodeCount;
      this._autoscalingPolicies.internalValue = value.autoscalingPolicies;
    }
  }

  // cool_down_period - computed: false, optional: true, required: false
  private _coolDownPeriod?: string; 
  public get coolDownPeriod() {
    return this.getStringAttribute('cool_down_period');
  }
  public set coolDownPeriod(value: string) {
    this._coolDownPeriod = value;
  }
  public resetCoolDownPeriod() {
    this._coolDownPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coolDownPeriodInput() {
    return this._coolDownPeriod;
  }

  // max_cluster_node_count - computed: false, optional: true, required: false
  private _maxClusterNodeCount?: number; 
  public get maxClusterNodeCount() {
    return this.getNumberAttribute('max_cluster_node_count');
  }
  public set maxClusterNodeCount(value: number) {
    this._maxClusterNodeCount = value;
  }
  public resetMaxClusterNodeCount() {
    this._maxClusterNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxClusterNodeCountInput() {
    return this._maxClusterNodeCount;
  }

  // min_cluster_node_count - computed: false, optional: true, required: false
  private _minClusterNodeCount?: number; 
  public get minClusterNodeCount() {
    return this.getNumberAttribute('min_cluster_node_count');
  }
  public set minClusterNodeCount(value: number) {
    this._minClusterNodeCount = value;
  }
  public resetMinClusterNodeCount() {
    this._minClusterNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minClusterNodeCountInput() {
    return this._minClusterNodeCount;
  }

  // autoscaling_policies - computed: false, optional: false, required: true
  private _autoscalingPolicies = new VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPoliciesList(this, "autoscaling_policies", true);
  public get autoscalingPolicies() {
    return this._autoscalingPolicies;
  }
  public putAutoscalingPolicies(value: VmwareenginePrivateCloudManagementClusterAutoscalingSettingsAutoscalingPolicies[] | cdktf.IResolvable) {
    this._autoscalingPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingPoliciesInput() {
    return this._autoscalingPolicies.internalValue;
  }
}
export interface VmwareenginePrivateCloudManagementClusterNodeTypeConfigs {
  /**
  * Customized number of cores available to each node of the type.
  * This number must always be one of 'nodeType.availableCustomCoreCounts'.
  * If zero is provided max value from 'nodeType.availableCustomCoreCounts' will be used.
  * This cannot be changed once the PrivateCloud is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#custom_core_count VmwareenginePrivateCloud#custom_core_count}
  */
  readonly customCoreCount?: number;
  /**
  * The number of nodes of this type in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#node_count VmwareenginePrivateCloud#node_count}
  */
  readonly nodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#node_type_id VmwareenginePrivateCloud#node_type_id}
  */
  readonly nodeTypeId: string;
}

export function vmwareenginePrivateCloudManagementClusterNodeTypeConfigsToTerraform(struct?: VmwareenginePrivateCloudManagementClusterNodeTypeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_core_count: cdktf.numberToTerraform(struct!.customCoreCount),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_type_id: cdktf.stringToTerraform(struct!.nodeTypeId),
  }
}


export function vmwareenginePrivateCloudManagementClusterNodeTypeConfigsToHclTerraform(struct?: VmwareenginePrivateCloudManagementClusterNodeTypeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_core_count: {
      value: cdktf.numberToHclTerraform(struct!.customCoreCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_type_id: {
      value: cdktf.stringToHclTerraform(struct!.nodeTypeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmwareenginePrivateCloudManagementClusterNodeTypeConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customCoreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCoreCount = this._customCoreCount;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._nodeTypeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeId = this._nodeTypeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareenginePrivateCloudManagementClusterNodeTypeConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customCoreCount = undefined;
      this._nodeCount = undefined;
      this._nodeTypeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customCoreCount = value.customCoreCount;
      this._nodeCount = value.nodeCount;
      this._nodeTypeId = value.nodeTypeId;
    }
  }

  // custom_core_count - computed: false, optional: true, required: false
  private _customCoreCount?: number; 
  public get customCoreCount() {
    return this.getNumberAttribute('custom_core_count');
  }
  public set customCoreCount(value: number) {
    this._customCoreCount = value;
  }
  public resetCustomCoreCount() {
    this._customCoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCoreCountInput() {
    return this._customCoreCount;
  }

  // node_count - computed: false, optional: false, required: true
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // node_type_id - computed: false, optional: false, required: true
  private _nodeTypeId?: string; 
  public get nodeTypeId() {
    return this.getStringAttribute('node_type_id');
  }
  public set nodeTypeId(value: string) {
    this._nodeTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeIdInput() {
    return this._nodeTypeId;
  }
}

export class VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList extends cdktf.ComplexList {
  public internalValue? : VmwareenginePrivateCloudManagementClusterNodeTypeConfigs[] | cdktf.IResolvable

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
  public get(index: number): VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference {
    return new VmwareenginePrivateCloudManagementClusterNodeTypeConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmwareenginePrivateCloudManagementClusterStretchedClusterConfig {
  /**
  * Zone that will remain operational when connection between the two zones is lost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#preferred_location VmwareenginePrivateCloud#preferred_location}
  */
  readonly preferredLocation?: string;
  /**
  * Additional zone for a higher level of availability and load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#secondary_location VmwareenginePrivateCloud#secondary_location}
  */
  readonly secondaryLocation?: string;
}

export function vmwareenginePrivateCloudManagementClusterStretchedClusterConfigToTerraform(struct?: VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference | VmwareenginePrivateCloudManagementClusterStretchedClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_location: cdktf.stringToTerraform(struct!.preferredLocation),
    secondary_location: cdktf.stringToTerraform(struct!.secondaryLocation),
  }
}


export function vmwareenginePrivateCloudManagementClusterStretchedClusterConfigToHclTerraform(struct?: VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference | VmwareenginePrivateCloudManagementClusterStretchedClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_location: {
      value: cdktf.stringToHclTerraform(struct!.preferredLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_location: {
      value: cdktf.stringToHclTerraform(struct!.secondaryLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareenginePrivateCloudManagementClusterStretchedClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLocation = this._preferredLocation;
    }
    if (this._secondaryLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryLocation = this._secondaryLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareenginePrivateCloudManagementClusterStretchedClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredLocation = undefined;
      this._secondaryLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredLocation = value.preferredLocation;
      this._secondaryLocation = value.secondaryLocation;
    }
  }

  // preferred_location - computed: false, optional: true, required: false
  private _preferredLocation?: string; 
  public get preferredLocation() {
    return this.getStringAttribute('preferred_location');
  }
  public set preferredLocation(value: string) {
    this._preferredLocation = value;
  }
  public resetPreferredLocation() {
    this._preferredLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLocationInput() {
    return this._preferredLocation;
  }

  // secondary_location - computed: false, optional: true, required: false
  private _secondaryLocation?: string; 
  public get secondaryLocation() {
    return this.getStringAttribute('secondary_location');
  }
  public set secondaryLocation(value: string) {
    this._secondaryLocation = value;
  }
  public resetSecondaryLocation() {
    this._secondaryLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryLocationInput() {
    return this._secondaryLocation;
  }
}
export interface VmwareenginePrivateCloudManagementCluster {
  /**
  * The user-provided identifier of the new Cluster. The identifier must meet the following requirements:
  *   * Only contains 1-63 alphanumeric characters and hyphens
  *   * Begins with an alphabetical character
  *   * Ends with a non-hyphen character
  *   * Not formatted as a UUID
  *   * Complies with RFC 1034 (https://datatracker.ietf.org/doc/html/rfc1034) (section 3.5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#cluster_id VmwareenginePrivateCloud#cluster_id}
  */
  readonly clusterId: string;
  /**
  * autoscaling_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#autoscaling_settings VmwareenginePrivateCloud#autoscaling_settings}
  */
  readonly autoscalingSettings?: VmwareenginePrivateCloudManagementClusterAutoscalingSettings;
  /**
  * node_type_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#node_type_configs VmwareenginePrivateCloud#node_type_configs}
  */
  readonly nodeTypeConfigs?: VmwareenginePrivateCloudManagementClusterNodeTypeConfigs[] | cdktf.IResolvable;
  /**
  * stretched_cluster_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#stretched_cluster_config VmwareenginePrivateCloud#stretched_cluster_config}
  */
  readonly stretchedClusterConfig?: VmwareenginePrivateCloudManagementClusterStretchedClusterConfig;
}

export function vmwareenginePrivateCloudManagementClusterToTerraform(struct?: VmwareenginePrivateCloudManagementClusterOutputReference | VmwareenginePrivateCloudManagementCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    autoscaling_settings: vmwareenginePrivateCloudManagementClusterAutoscalingSettingsToTerraform(struct!.autoscalingSettings),
    node_type_configs: cdktf.listMapper(vmwareenginePrivateCloudManagementClusterNodeTypeConfigsToTerraform, true)(struct!.nodeTypeConfigs),
    stretched_cluster_config: vmwareenginePrivateCloudManagementClusterStretchedClusterConfigToTerraform(struct!.stretchedClusterConfig),
  }
}


export function vmwareenginePrivateCloudManagementClusterToHclTerraform(struct?: VmwareenginePrivateCloudManagementClusterOutputReference | VmwareenginePrivateCloudManagementCluster): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscaling_settings: {
      value: vmwareenginePrivateCloudManagementClusterAutoscalingSettingsToHclTerraform(struct!.autoscalingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "VmwareenginePrivateCloudManagementClusterAutoscalingSettingsList",
    },
    node_type_configs: {
      value: cdktf.listMapperHcl(vmwareenginePrivateCloudManagementClusterNodeTypeConfigsToHclTerraform, true)(struct!.nodeTypeConfigs),
      isBlock: true,
      type: "set",
      storageClassType: "VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList",
    },
    stretched_cluster_config: {
      value: vmwareenginePrivateCloudManagementClusterStretchedClusterConfigToHclTerraform(struct!.stretchedClusterConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VmwareenginePrivateCloudManagementClusterStretchedClusterConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareenginePrivateCloudManagementClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareenginePrivateCloudManagementCluster | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._autoscalingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingSettings = this._autoscalingSettings?.internalValue;
    }
    if (this._nodeTypeConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTypeConfigs = this._nodeTypeConfigs?.internalValue;
    }
    if (this._stretchedClusterConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stretchedClusterConfig = this._stretchedClusterConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareenginePrivateCloudManagementCluster | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._autoscalingSettings.internalValue = undefined;
      this._nodeTypeConfigs.internalValue = undefined;
      this._stretchedClusterConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterId = value.clusterId;
      this._autoscalingSettings.internalValue = value.autoscalingSettings;
      this._nodeTypeConfigs.internalValue = value.nodeTypeConfigs;
      this._stretchedClusterConfig.internalValue = value.stretchedClusterConfig;
    }
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // autoscaling_settings - computed: false, optional: true, required: false
  private _autoscalingSettings = new VmwareenginePrivateCloudManagementClusterAutoscalingSettingsOutputReference(this, "autoscaling_settings");
  public get autoscalingSettings() {
    return this._autoscalingSettings;
  }
  public putAutoscalingSettings(value: VmwareenginePrivateCloudManagementClusterAutoscalingSettings) {
    this._autoscalingSettings.internalValue = value;
  }
  public resetAutoscalingSettings() {
    this._autoscalingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingSettingsInput() {
    return this._autoscalingSettings.internalValue;
  }

  // node_type_configs - computed: false, optional: true, required: false
  private _nodeTypeConfigs = new VmwareenginePrivateCloudManagementClusterNodeTypeConfigsList(this, "node_type_configs", true);
  public get nodeTypeConfigs() {
    return this._nodeTypeConfigs;
  }
  public putNodeTypeConfigs(value: VmwareenginePrivateCloudManagementClusterNodeTypeConfigs[] | cdktf.IResolvable) {
    this._nodeTypeConfigs.internalValue = value;
  }
  public resetNodeTypeConfigs() {
    this._nodeTypeConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeConfigsInput() {
    return this._nodeTypeConfigs.internalValue;
  }

  // stretched_cluster_config - computed: false, optional: true, required: false
  private _stretchedClusterConfig = new VmwareenginePrivateCloudManagementClusterStretchedClusterConfigOutputReference(this, "stretched_cluster_config");
  public get stretchedClusterConfig() {
    return this._stretchedClusterConfig;
  }
  public putStretchedClusterConfig(value: VmwareenginePrivateCloudManagementClusterStretchedClusterConfig) {
    this._stretchedClusterConfig.internalValue = value;
  }
  public resetStretchedClusterConfig() {
    this._stretchedClusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stretchedClusterConfigInput() {
    return this._stretchedClusterConfig.internalValue;
  }
}
export interface VmwareenginePrivateCloudNetworkConfig {
  /**
  * Management CIDR used by VMware management appliances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#management_cidr VmwareenginePrivateCloud#management_cidr}
  */
  readonly managementCidr: string;
  /**
  * The relative resource name of the VMware Engine network attached to the private cloud.
  * Specify the name in the following form: projects/{project}/locations/{location}/vmwareEngineNetworks/{vmwareEngineNetworkId}
  * where {project} can either be a project number or a project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#vmware_engine_network VmwareenginePrivateCloud#vmware_engine_network}
  */
  readonly vmwareEngineNetwork?: string;
}

export function vmwareenginePrivateCloudNetworkConfigToTerraform(struct?: VmwareenginePrivateCloudNetworkConfigOutputReference | VmwareenginePrivateCloudNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    management_cidr: cdktf.stringToTerraform(struct!.managementCidr),
    vmware_engine_network: cdktf.stringToTerraform(struct!.vmwareEngineNetwork),
  }
}


export function vmwareenginePrivateCloudNetworkConfigToHclTerraform(struct?: VmwareenginePrivateCloudNetworkConfigOutputReference | VmwareenginePrivateCloudNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    management_cidr: {
      value: cdktf.stringToHclTerraform(struct!.managementCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmware_engine_network: {
      value: cdktf.stringToHclTerraform(struct!.vmwareEngineNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareenginePrivateCloudNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareenginePrivateCloudNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managementCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.managementCidr = this._managementCidr;
    }
    if (this._vmwareEngineNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmwareEngineNetwork = this._vmwareEngineNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmwareenginePrivateCloudNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managementCidr = undefined;
      this._vmwareEngineNetwork = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managementCidr = value.managementCidr;
      this._vmwareEngineNetwork = value.vmwareEngineNetwork;
    }
  }

  // dns_server_ip - computed: true, optional: false, required: false
  public get dnsServerIp() {
    return this.getStringAttribute('dns_server_ip');
  }

  // management_cidr - computed: false, optional: false, required: true
  private _managementCidr?: string; 
  public get managementCidr() {
    return this.getStringAttribute('management_cidr');
  }
  public set managementCidr(value: string) {
    this._managementCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementCidrInput() {
    return this._managementCidr;
  }

  // management_ip_address_layout_version - computed: true, optional: false, required: false
  public get managementIpAddressLayoutVersion() {
    return this.getNumberAttribute('management_ip_address_layout_version');
  }

  // vmware_engine_network - computed: false, optional: true, required: false
  private _vmwareEngineNetwork?: string; 
  public get vmwareEngineNetwork() {
    return this.getStringAttribute('vmware_engine_network');
  }
  public set vmwareEngineNetwork(value: string) {
    this._vmwareEngineNetwork = value;
  }
  public resetVmwareEngineNetwork() {
    this._vmwareEngineNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmwareEngineNetworkInput() {
    return this._vmwareEngineNetwork;
  }

  // vmware_engine_network_canonical - computed: true, optional: false, required: false
  public get vmwareEngineNetworkCanonical() {
    return this.getStringAttribute('vmware_engine_network_canonical');
  }
}
export interface VmwareenginePrivateCloudTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#create VmwareenginePrivateCloud#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#delete VmwareenginePrivateCloud#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#update VmwareenginePrivateCloud#update}
  */
  readonly update?: string;
}

export function vmwareenginePrivateCloudTimeoutsToTerraform(struct?: VmwareenginePrivateCloudTimeouts | cdktf.IResolvable): any {
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


export function vmwareenginePrivateCloudTimeoutsToHclTerraform(struct?: VmwareenginePrivateCloudTimeouts | cdktf.IResolvable): any {
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

export class VmwareenginePrivateCloudTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VmwareenginePrivateCloudTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VmwareenginePrivateCloudTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud google_vmwareengine_private_cloud}
*/
export class VmwareenginePrivateCloud extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vmwareengine_private_cloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmwareenginePrivateCloud resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmwareenginePrivateCloud to import
  * @param importFromId The id of the existing VmwareenginePrivateCloud that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmwareenginePrivateCloud to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vmwareengine_private_cloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/vmwareengine_private_cloud google_vmwareengine_private_cloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmwareenginePrivateCloudConfig
  */
  public constructor(scope: Construct, id: string, config: VmwareenginePrivateCloudConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vmwareengine_private_cloud',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.15.0',
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
    this._deletionDelayHours = config.deletionDelayHours;
    this._description = config.description;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._sendDeletionDelayHoursIfZero = config.sendDeletionDelayHoursIfZero;
    this._type = config.type;
    this._managementCluster.internalValue = config.managementCluster;
    this._networkConfig.internalValue = config.networkConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deletion_delay_hours - computed: false, optional: true, required: false
  private _deletionDelayHours?: number; 
  public get deletionDelayHours() {
    return this.getNumberAttribute('deletion_delay_hours');
  }
  public set deletionDelayHours(value: number) {
    this._deletionDelayHours = value;
  }
  public resetDeletionDelayHours() {
    this._deletionDelayHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionDelayHoursInput() {
    return this._deletionDelayHours;
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

  // hcx - computed: true, optional: false, required: false
  private _hcx = new VmwareenginePrivateCloudHcxList(this, "hcx", false);
  public get hcx() {
    return this._hcx;
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

  // nsx - computed: true, optional: false, required: false
  private _nsx = new VmwareenginePrivateCloudNsxList(this, "nsx", false);
  public get nsx() {
    return this._nsx;
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

  // send_deletion_delay_hours_if_zero - computed: false, optional: true, required: false
  private _sendDeletionDelayHoursIfZero?: boolean | cdktf.IResolvable; 
  public get sendDeletionDelayHoursIfZero() {
    return this.getBooleanAttribute('send_deletion_delay_hours_if_zero');
  }
  public set sendDeletionDelayHoursIfZero(value: boolean | cdktf.IResolvable) {
    this._sendDeletionDelayHoursIfZero = value;
  }
  public resetSendDeletionDelayHoursIfZero() {
    this._sendDeletionDelayHoursIfZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendDeletionDelayHoursIfZeroInput() {
    return this._sendDeletionDelayHoursIfZero;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // vcenter - computed: true, optional: false, required: false
  private _vcenter = new VmwareenginePrivateCloudVcenterList(this, "vcenter", false);
  public get vcenter() {
    return this._vcenter;
  }

  // management_cluster - computed: false, optional: false, required: true
  private _managementCluster = new VmwareenginePrivateCloudManagementClusterOutputReference(this, "management_cluster");
  public get managementCluster() {
    return this._managementCluster;
  }
  public putManagementCluster(value: VmwareenginePrivateCloudManagementCluster) {
    this._managementCluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementClusterInput() {
    return this._managementCluster.internalValue;
  }

  // network_config - computed: false, optional: false, required: true
  private _networkConfig = new VmwareenginePrivateCloudNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: VmwareenginePrivateCloudNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VmwareenginePrivateCloudTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VmwareenginePrivateCloudTimeouts) {
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
      deletion_delay_hours: cdktf.numberToTerraform(this._deletionDelayHours),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      send_deletion_delay_hours_if_zero: cdktf.booleanToTerraform(this._sendDeletionDelayHoursIfZero),
      type: cdktf.stringToTerraform(this._type),
      management_cluster: vmwareenginePrivateCloudManagementClusterToTerraform(this._managementCluster.internalValue),
      network_config: vmwareenginePrivateCloudNetworkConfigToTerraform(this._networkConfig.internalValue),
      timeouts: vmwareenginePrivateCloudTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deletion_delay_hours: {
        value: cdktf.numberToHclTerraform(this._deletionDelayHours),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      send_deletion_delay_hours_if_zero: {
        value: cdktf.booleanToHclTerraform(this._sendDeletionDelayHoursIfZero),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_cluster: {
        value: vmwareenginePrivateCloudManagementClusterToHclTerraform(this._managementCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmwareenginePrivateCloudManagementClusterList",
      },
      network_config: {
        value: vmwareenginePrivateCloudNetworkConfigToHclTerraform(this._networkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmwareenginePrivateCloudNetworkConfigList",
      },
      timeouts: {
        value: vmwareenginePrivateCloudTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VmwareenginePrivateCloudTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
