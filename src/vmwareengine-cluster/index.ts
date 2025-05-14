// https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmwareengineClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#id VmwareengineCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#name VmwareengineCluster#name}
  */
  readonly name: string;
  /**
  * The resource name of the private cloud to create a new cluster in.
  * Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
  * For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#parent VmwareengineCluster#parent}
  */
  readonly parent: string;
  /**
  * autoscaling_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#autoscaling_settings VmwareengineCluster#autoscaling_settings}
  */
  readonly autoscalingSettings?: VmwareengineClusterAutoscalingSettings;
  /**
  * node_type_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#node_type_configs VmwareengineCluster#node_type_configs}
  */
  readonly nodeTypeConfigs?: VmwareengineClusterNodeTypeConfigs[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#timeouts VmwareengineCluster#timeouts}
  */
  readonly timeouts?: VmwareengineClusterTimeouts;
}
export interface VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds {
  /**
  * The utilization triggering the scale-in operation in percent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#scale_in VmwareengineCluster#scale_in}
  */
  readonly scaleIn: number;
  /**
  * The utilization triggering the scale-out operation in percent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#scale_out VmwareengineCluster#scale_out}
  */
  readonly scaleOut: number;
}

export function vmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsToTerraform(struct?: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference | VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scale_in: cdktf.numberToTerraform(struct!.scaleIn),
    scale_out: cdktf.numberToTerraform(struct!.scaleOut),
  }
}


export function vmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsToHclTerraform(struct?: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference | VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds): any {
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

export class VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds | undefined {
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

  public set internalValue(value: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds | undefined) {
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
export interface VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds {
  /**
  * The utilization triggering the scale-in operation in percent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#scale_in VmwareengineCluster#scale_in}
  */
  readonly scaleIn: number;
  /**
  * The utilization triggering the scale-out operation in percent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#scale_out VmwareengineCluster#scale_out}
  */
  readonly scaleOut: number;
}

export function vmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsToTerraform(struct?: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference | VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scale_in: cdktf.numberToTerraform(struct!.scaleIn),
    scale_out: cdktf.numberToTerraform(struct!.scaleOut),
  }
}


export function vmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsToHclTerraform(struct?: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference | VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds): any {
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

export class VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds | undefined {
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

  public set internalValue(value: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds | undefined) {
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
export interface VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds {
  /**
  * The utilization triggering the scale-in operation in percent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#scale_in VmwareengineCluster#scale_in}
  */
  readonly scaleIn: number;
  /**
  * The utilization triggering the scale-out operation in percent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#scale_out VmwareengineCluster#scale_out}
  */
  readonly scaleOut: number;
}

export function vmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsToTerraform(struct?: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference | VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scale_in: cdktf.numberToTerraform(struct!.scaleIn),
    scale_out: cdktf.numberToTerraform(struct!.scaleOut),
  }
}


export function vmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsToHclTerraform(struct?: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference | VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds): any {
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

export class VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds | undefined {
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

  public set internalValue(value: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds | undefined) {
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
export interface VmwareengineClusterAutoscalingSettingsAutoscalingPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#autoscale_policy_id VmwareengineCluster#autoscale_policy_id}
  */
  readonly autoscalePolicyId: string;
  /**
  * The canonical identifier of the node type to add or remove.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#node_type_id VmwareengineCluster#node_type_id}
  */
  readonly nodeTypeId: string;
  /**
  * Number of nodes to add to a cluster during a scale-out operation.
  * Must be divisible by 2 for stretched clusters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#scale_out_size VmwareengineCluster#scale_out_size}
  */
  readonly scaleOutSize: number;
  /**
  * consumed_memory_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#consumed_memory_thresholds VmwareengineCluster#consumed_memory_thresholds}
  */
  readonly consumedMemoryThresholds?: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds;
  /**
  * cpu_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#cpu_thresholds VmwareengineCluster#cpu_thresholds}
  */
  readonly cpuThresholds?: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds;
  /**
  * storage_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#storage_thresholds VmwareengineCluster#storage_thresholds}
  */
  readonly storageThresholds?: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds;
}

export function vmwareengineClusterAutoscalingSettingsAutoscalingPoliciesToTerraform(struct?: VmwareengineClusterAutoscalingSettingsAutoscalingPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscale_policy_id: cdktf.stringToTerraform(struct!.autoscalePolicyId),
    node_type_id: cdktf.stringToTerraform(struct!.nodeTypeId),
    scale_out_size: cdktf.numberToTerraform(struct!.scaleOutSize),
    consumed_memory_thresholds: vmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsToTerraform(struct!.consumedMemoryThresholds),
    cpu_thresholds: vmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsToTerraform(struct!.cpuThresholds),
    storage_thresholds: vmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsToTerraform(struct!.storageThresholds),
  }
}


export function vmwareengineClusterAutoscalingSettingsAutoscalingPoliciesToHclTerraform(struct?: VmwareengineClusterAutoscalingSettingsAutoscalingPolicies | cdktf.IResolvable): any {
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
      value: vmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsToHclTerraform(struct!.consumedMemoryThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsList",
    },
    cpu_thresholds: {
      value: vmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsToHclTerraform(struct!.cpuThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsList",
    },
    storage_thresholds: {
      value: vmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsToHclTerraform(struct!.storageThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmwareengineClusterAutoscalingSettingsAutoscalingPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VmwareengineClusterAutoscalingSettingsAutoscalingPolicies | cdktf.IResolvable | undefined) {
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
  private _consumedMemoryThresholds = new VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholdsOutputReference(this, "consumed_memory_thresholds");
  public get consumedMemoryThresholds() {
    return this._consumedMemoryThresholds;
  }
  public putConsumedMemoryThresholds(value: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesConsumedMemoryThresholds) {
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
  private _cpuThresholds = new VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholdsOutputReference(this, "cpu_thresholds");
  public get cpuThresholds() {
    return this._cpuThresholds;
  }
  public putCpuThresholds(value: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesCpuThresholds) {
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
  private _storageThresholds = new VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholdsOutputReference(this, "storage_thresholds");
  public get storageThresholds() {
    return this._storageThresholds;
  }
  public putStorageThresholds(value: VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesStorageThresholds) {
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

export class VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList extends cdktf.ComplexList {
  public internalValue? : VmwareengineClusterAutoscalingSettingsAutoscalingPolicies[] | cdktf.IResolvable

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
  public get(index: number): VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference {
    return new VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmwareengineClusterAutoscalingSettings {
  /**
  * The minimum duration between consecutive autoscale operations.
  * It starts once addition or removal of nodes is fully completed.
  * Minimum cool down period is 30m.
  * Cool down period must be in whole minutes (for example, 30m, 31m, 50m).
  * Mandatory for successful addition of autoscaling settings in cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#cool_down_period VmwareengineCluster#cool_down_period}
  */
  readonly coolDownPeriod?: string;
  /**
  * Maximum number of nodes of any type in a cluster.
  * Mandatory for successful addition of autoscaling settings in cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#max_cluster_node_count VmwareengineCluster#max_cluster_node_count}
  */
  readonly maxClusterNodeCount?: number;
  /**
  * Minimum number of nodes of any type in a cluster.
  * Mandatory for successful addition of autoscaling settings in cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#min_cluster_node_count VmwareengineCluster#min_cluster_node_count}
  */
  readonly minClusterNodeCount?: number;
  /**
  * autoscaling_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#autoscaling_policies VmwareengineCluster#autoscaling_policies}
  */
  readonly autoscalingPolicies: VmwareengineClusterAutoscalingSettingsAutoscalingPolicies[] | cdktf.IResolvable;
}

export function vmwareengineClusterAutoscalingSettingsToTerraform(struct?: VmwareengineClusterAutoscalingSettingsOutputReference | VmwareengineClusterAutoscalingSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cool_down_period: cdktf.stringToTerraform(struct!.coolDownPeriod),
    max_cluster_node_count: cdktf.numberToTerraform(struct!.maxClusterNodeCount),
    min_cluster_node_count: cdktf.numberToTerraform(struct!.minClusterNodeCount),
    autoscaling_policies: cdktf.listMapper(vmwareengineClusterAutoscalingSettingsAutoscalingPoliciesToTerraform, true)(struct!.autoscalingPolicies),
  }
}


export function vmwareengineClusterAutoscalingSettingsToHclTerraform(struct?: VmwareengineClusterAutoscalingSettingsOutputReference | VmwareengineClusterAutoscalingSettings): any {
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
      value: cdktf.listMapperHcl(vmwareengineClusterAutoscalingSettingsAutoscalingPoliciesToHclTerraform, true)(struct!.autoscalingPolicies),
      isBlock: true,
      type: "set",
      storageClassType: "VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmwareengineClusterAutoscalingSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmwareengineClusterAutoscalingSettings | undefined {
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

  public set internalValue(value: VmwareengineClusterAutoscalingSettings | undefined) {
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
  private _autoscalingPolicies = new VmwareengineClusterAutoscalingSettingsAutoscalingPoliciesList(this, "autoscaling_policies", true);
  public get autoscalingPolicies() {
    return this._autoscalingPolicies;
  }
  public putAutoscalingPolicies(value: VmwareengineClusterAutoscalingSettingsAutoscalingPolicies[] | cdktf.IResolvable) {
    this._autoscalingPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingPoliciesInput() {
    return this._autoscalingPolicies.internalValue;
  }
}
export interface VmwareengineClusterNodeTypeConfigs {
  /**
  * Customized number of cores available to each node of the type.
  * This number must always be one of 'nodeType.availableCustomCoreCounts'.
  * If zero is provided max value from 'nodeType.availableCustomCoreCounts' will be used.
  * Once the customer is created then corecount cannot be changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#custom_core_count VmwareengineCluster#custom_core_count}
  */
  readonly customCoreCount?: number;
  /**
  * The number of nodes of this type in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#node_count VmwareengineCluster#node_count}
  */
  readonly nodeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#node_type_id VmwareengineCluster#node_type_id}
  */
  readonly nodeTypeId: string;
}

export function vmwareengineClusterNodeTypeConfigsToTerraform(struct?: VmwareengineClusterNodeTypeConfigs | cdktf.IResolvable): any {
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


export function vmwareengineClusterNodeTypeConfigsToHclTerraform(struct?: VmwareengineClusterNodeTypeConfigs | cdktf.IResolvable): any {
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

export class VmwareengineClusterNodeTypeConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmwareengineClusterNodeTypeConfigs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VmwareengineClusterNodeTypeConfigs | cdktf.IResolvable | undefined) {
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

export class VmwareengineClusterNodeTypeConfigsList extends cdktf.ComplexList {
  public internalValue? : VmwareengineClusterNodeTypeConfigs[] | cdktf.IResolvable

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
  public get(index: number): VmwareengineClusterNodeTypeConfigsOutputReference {
    return new VmwareengineClusterNodeTypeConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmwareengineClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#create VmwareengineCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#delete VmwareengineCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#update VmwareengineCluster#update}
  */
  readonly update?: string;
}

export function vmwareengineClusterTimeoutsToTerraform(struct?: VmwareengineClusterTimeouts | cdktf.IResolvable): any {
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


export function vmwareengineClusterTimeoutsToHclTerraform(struct?: VmwareengineClusterTimeouts | cdktf.IResolvable): any {
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

export class VmwareengineClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VmwareengineClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VmwareengineClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster google_vmwareengine_cluster}
*/
export class VmwareengineCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vmwareengine_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmwareengineCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmwareengineCluster to import
  * @param importFromId The id of the existing VmwareengineCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmwareengineCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vmwareengine_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vmwareengine_cluster google_vmwareengine_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmwareengineClusterConfig
  */
  public constructor(scope: Construct, id: string, config: VmwareengineClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vmwareengine_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.35.0',
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
    this._parent = config.parent;
    this._autoscalingSettings.internalValue = config.autoscalingSettings;
    this._nodeTypeConfigs.internalValue = config.nodeTypeConfigs;
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

  // management - computed: true, optional: false, required: false
  public get management() {
    return this.getBooleanAttribute('management');
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

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // autoscaling_settings - computed: false, optional: true, required: false
  private _autoscalingSettings = new VmwareengineClusterAutoscalingSettingsOutputReference(this, "autoscaling_settings");
  public get autoscalingSettings() {
    return this._autoscalingSettings;
  }
  public putAutoscalingSettings(value: VmwareengineClusterAutoscalingSettings) {
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
  private _nodeTypeConfigs = new VmwareengineClusterNodeTypeConfigsList(this, "node_type_configs", true);
  public get nodeTypeConfigs() {
    return this._nodeTypeConfigs;
  }
  public putNodeTypeConfigs(value: VmwareengineClusterNodeTypeConfigs[] | cdktf.IResolvable) {
    this._nodeTypeConfigs.internalValue = value;
  }
  public resetNodeTypeConfigs() {
    this._nodeTypeConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeConfigsInput() {
    return this._nodeTypeConfigs.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VmwareengineClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VmwareengineClusterTimeouts) {
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
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.stringToTerraform(this._parent),
      autoscaling_settings: vmwareengineClusterAutoscalingSettingsToTerraform(this._autoscalingSettings.internalValue),
      node_type_configs: cdktf.listMapper(vmwareengineClusterNodeTypeConfigsToTerraform, true)(this._nodeTypeConfigs.internalValue),
      timeouts: vmwareengineClusterTimeoutsToTerraform(this._timeouts.internalValue),
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autoscaling_settings: {
        value: vmwareengineClusterAutoscalingSettingsToHclTerraform(this._autoscalingSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmwareengineClusterAutoscalingSettingsList",
      },
      node_type_configs: {
        value: cdktf.listMapperHcl(vmwareengineClusterNodeTypeConfigsToHclTerraform, true)(this._nodeTypeConfigs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VmwareengineClusterNodeTypeConfigsList",
      },
      timeouts: {
        value: vmwareengineClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VmwareengineClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
