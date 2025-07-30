/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VertexAiEndpointWithModelGardenDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Hugging Face model to deploy.
  * Format: Hugging Face model ID like 'google/gemma-2-2b-it'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#hugging_face_model_id VertexAiEndpointWithModelGardenDeployment#hugging_face_model_id}
  */
  readonly huggingFaceModelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#id VertexAiEndpointWithModelGardenDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'location'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#location VertexAiEndpointWithModelGardenDeployment#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#project VertexAiEndpointWithModelGardenDeployment#project}
  */
  readonly project?: string;
  /**
  * The Model Garden model to deploy.
  * Format:
  * 'publishers/{publisher}/models/{publisher_model}@{version_id}', or
  * 'publishers/hf-{hugging-face-author}/models/{hugging-face-model-name}@001'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#publisher_model_name VertexAiEndpointWithModelGardenDeployment#publisher_model_name}
  */
  readonly publisherModelName?: string;
  /**
  * deploy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#deploy_config VertexAiEndpointWithModelGardenDeployment#deploy_config}
  */
  readonly deployConfig?: VertexAiEndpointWithModelGardenDeploymentDeployConfig;
  /**
  * endpoint_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#endpoint_config VertexAiEndpointWithModelGardenDeployment#endpoint_config}
  */
  readonly endpointConfig?: VertexAiEndpointWithModelGardenDeploymentEndpointConfig;
  /**
  * model_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#model_config VertexAiEndpointWithModelGardenDeployment#model_config}
  */
  readonly modelConfig?: VertexAiEndpointWithModelGardenDeploymentModelConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#timeouts VertexAiEndpointWithModelGardenDeployment#timeouts}
  */
  readonly timeouts?: VertexAiEndpointWithModelGardenDeploymentTimeouts;
}
export interface VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesAutoscalingMetricSpecs {
  /**
  * The resource metric name.
  * Supported metrics:
  * 
  * * For Online Prediction:
  * * 'aiplatform.googleapis.com/prediction/online/accelerator/duty_cycle'
  * * 'aiplatform.googleapis.com/prediction/online/cpu/utilization'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#metric_name VertexAiEndpointWithModelGardenDeployment#metric_name}
  */
  readonly metricName: string;
  /**
  * The target resource utilization in percentage (1% - 100%) for the given
  * metric; once the real usage deviates from the target by a certain
  * percentage, the machine replicas change. The default value is 60
  * (representing 60%) if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#target VertexAiEndpointWithModelGardenDeployment#target}
  */
  readonly target?: number;
}

export function vertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesAutoscalingMetricSpecsToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesAutoscalingMetricSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    target: cdktf.numberToTerraform(struct!.target),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesAutoscalingMetricSpecsToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesAutoscalingMetricSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.numberToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesAutoscalingMetricSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesAutoscalingMetricSpecs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesAutoscalingMetricSpecs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metricName = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metricName = value.metricName;
      this._target = value.target;
    }
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // target - computed: false, optional: true, required: false
  private _target?: number; 
  public get target() {
    return this.getNumberAttribute('target');
  }
  public set target(value: number) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesAutoscalingMetricSpecsList extends cdktf.ComplexList {
  public internalValue? : VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesAutoscalingMetricSpecs[] | cdktf.IResolvable

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
  public get(index: number): VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesAutoscalingMetricSpecsOutputReference {
    return new VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesAutoscalingMetricSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecReservationAffinity {
  /**
  * Corresponds to the label key of a reservation resource. To target a
  * SPECIFIC_RESERVATION by name, use 'compute.googleapis.com/reservation-name'
  * as the key and specify the name of your reservation as its value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#key VertexAiEndpointWithModelGardenDeployment#key}
  */
  readonly key?: string;
  /**
  * Specifies the reservation affinity type.
  * Possible values:
  * TYPE_UNSPECIFIED
  * NO_RESERVATION
  * ANY_RESERVATION
  * SPECIFIC_RESERVATION
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#reservation_affinity_type VertexAiEndpointWithModelGardenDeployment#reservation_affinity_type}
  */
  readonly reservationAffinityType: string;
  /**
  * Corresponds to the label values of a reservation resource. This must be the
  * full resource name of the reservation or reservation block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#values VertexAiEndpointWithModelGardenDeployment#values}
  */
  readonly values?: string[];
}

export function vertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecReservationAffinityToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecReservationAffinityOutputReference | VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    reservation_affinity_type: cdktf.stringToTerraform(struct!.reservationAffinityType),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecReservationAffinityToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecReservationAffinityOutputReference | VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecReservationAffinity): any {
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
    reservation_affinity_type: {
      value: cdktf.stringToHclTerraform(struct!.reservationAffinityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecReservationAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecReservationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._reservationAffinityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationAffinityType = this._reservationAffinityType;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecReservationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._reservationAffinityType = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._reservationAffinityType = value.reservationAffinityType;
      this._values = value.values;
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

  // reservation_affinity_type - computed: false, optional: false, required: true
  private _reservationAffinityType?: string; 
  public get reservationAffinityType() {
    return this.getStringAttribute('reservation_affinity_type');
  }
  public set reservationAffinityType(value: string) {
    this._reservationAffinityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityTypeInput() {
    return this._reservationAffinityType;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpec {
  /**
  * The number of accelerators to attach to the machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#accelerator_count VertexAiEndpointWithModelGardenDeployment#accelerator_count}
  */
  readonly acceleratorCount?: number;
  /**
  * Possible values:
  * ACCELERATOR_TYPE_UNSPECIFIED
  * NVIDIA_TESLA_K80
  * NVIDIA_TESLA_P100
  * NVIDIA_TESLA_V100
  * NVIDIA_TESLA_P4
  * NVIDIA_TESLA_T4
  * NVIDIA_TESLA_A100
  * NVIDIA_A100_80GB
  * NVIDIA_L4
  * NVIDIA_H100_80GB
  * NVIDIA_H100_MEGA_80GB
  * NVIDIA_H200_141GB
  * NVIDIA_B200
  * TPU_V2
  * TPU_V3
  * TPU_V4_POD
  * TPU_V5_LITEPOD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#accelerator_type VertexAiEndpointWithModelGardenDeployment#accelerator_type}
  */
  readonly acceleratorType?: string;
  /**
  * The type of the machine.
  * 
  * See the [list of machine types supported for
  * prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types)
  * 
  * See the [list of machine types supported for custom
  * training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types).
  * 
  * For DeployedModel this field is optional, and the default
  * value is 'n1-standard-2'. For BatchPredictionJob or as part of
  * WorkerPoolSpec this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#machine_type VertexAiEndpointWithModelGardenDeployment#machine_type}
  */
  readonly machineType?: string;
  /**
  * The number of nodes per replica for multihost GPU deployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#multihost_gpu_node_count VertexAiEndpointWithModelGardenDeployment#multihost_gpu_node_count}
  */
  readonly multihostGpuNodeCount?: number;
  /**
  * The topology of the TPUs. Corresponds to the TPU topologies available from
  * GKE. (Example: tpu_topology: "2x2x1").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#tpu_topology VertexAiEndpointWithModelGardenDeployment#tpu_topology}
  */
  readonly tpuTopology?: string;
  /**
  * reservation_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#reservation_affinity VertexAiEndpointWithModelGardenDeployment#reservation_affinity}
  */
  readonly reservationAffinity?: VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecReservationAffinity;
}

export function vertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecOutputReference | VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    multihost_gpu_node_count: cdktf.numberToTerraform(struct!.multihostGpuNodeCount),
    tpu_topology: cdktf.stringToTerraform(struct!.tpuTopology),
    reservation_affinity: vertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecReservationAffinityToTerraform(struct!.reservationAffinity),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecOutputReference | VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerator_count: {
      value: cdktf.numberToHclTerraform(struct!.acceleratorCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accelerator_type: {
      value: cdktf.stringToHclTerraform(struct!.acceleratorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multihost_gpu_node_count: {
      value: cdktf.numberToHclTerraform(struct!.multihostGpuNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tpu_topology: {
      value: cdktf.stringToHclTerraform(struct!.tpuTopology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reservation_affinity: {
      value: vertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecReservationAffinityToHclTerraform(struct!.reservationAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecReservationAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorCount = this._acceleratorCount;
    }
    if (this._acceleratorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorType = this._acceleratorType;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._multihostGpuNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.multihostGpuNodeCount = this._multihostGpuNodeCount;
    }
    if (this._tpuTopology !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpuTopology = this._tpuTopology;
    }
    if (this._reservationAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationAffinity = this._reservationAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceleratorCount = undefined;
      this._acceleratorType = undefined;
      this._machineType = undefined;
      this._multihostGpuNodeCount = undefined;
      this._tpuTopology = undefined;
      this._reservationAffinity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceleratorCount = value.acceleratorCount;
      this._acceleratorType = value.acceleratorType;
      this._machineType = value.machineType;
      this._multihostGpuNodeCount = value.multihostGpuNodeCount;
      this._tpuTopology = value.tpuTopology;
      this._reservationAffinity.internalValue = value.reservationAffinity;
    }
  }

  // accelerator_count - computed: false, optional: true, required: false
  private _acceleratorCount?: number; 
  public get acceleratorCount() {
    return this.getNumberAttribute('accelerator_count');
  }
  public set acceleratorCount(value: number) {
    this._acceleratorCount = value;
  }
  public resetAcceleratorCount() {
    this._acceleratorCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorCountInput() {
    return this._acceleratorCount;
  }

  // accelerator_type - computed: false, optional: true, required: false
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  public resetAcceleratorType() {
    this._acceleratorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
  }

  // machine_type - computed: false, optional: true, required: false
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

  // multihost_gpu_node_count - computed: false, optional: true, required: false
  private _multihostGpuNodeCount?: number; 
  public get multihostGpuNodeCount() {
    return this.getNumberAttribute('multihost_gpu_node_count');
  }
  public set multihostGpuNodeCount(value: number) {
    this._multihostGpuNodeCount = value;
  }
  public resetMultihostGpuNodeCount() {
    this._multihostGpuNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multihostGpuNodeCountInput() {
    return this._multihostGpuNodeCount;
  }

  // tpu_topology - computed: false, optional: true, required: false
  private _tpuTopology?: string; 
  public get tpuTopology() {
    return this.getStringAttribute('tpu_topology');
  }
  public set tpuTopology(value: string) {
    this._tpuTopology = value;
  }
  public resetTpuTopology() {
    this._tpuTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpuTopologyInput() {
    return this._tpuTopology;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecReservationAffinity) {
    this._reservationAffinity.internalValue = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity.internalValue;
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResources {
  /**
  * The maximum number of replicas that may be deployed on when the traffic
  * against it increases. If the requested value is too large, the deployment
  * will error, but if deployment succeeds then the ability to scale to that
  * many replicas is guaranteed (barring service outages). If traffic increases
  * beyond what its replicas at maximum may handle, a portion of the traffic
  * will be dropped. If this value is not provided, will use
  * min_replica_count as the default value.
  * 
  * The value of this field impacts the charge against Vertex CPU and GPU
  * quotas. Specifically, you will be charged for (max_replica_count *
  * number of cores in the selected machine type) and (max_replica_count *
  * number of GPUs per replica in the selected machine type).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#max_replica_count VertexAiEndpointWithModelGardenDeployment#max_replica_count}
  */
  readonly maxReplicaCount?: number;
  /**
  * The minimum number of machine replicas that will be always deployed on.
  * This value must be greater than or equal to 1.
  * 
  * If traffic increases, it may dynamically be deployed onto more replicas,
  * and as traffic decreases, some of these extra replicas may be freed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#min_replica_count VertexAiEndpointWithModelGardenDeployment#min_replica_count}
  */
  readonly minReplicaCount: number;
  /**
  * Number of required available replicas for the deployment to succeed.
  * This field is only needed when partial deployment/mutation is
  * desired. If set, the deploy/mutate operation will succeed once
  * available_replica_count reaches required_replica_count, and the rest of
  * the replicas will be retried. If not set, the default
  * required_replica_count will be min_replica_count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#required_replica_count VertexAiEndpointWithModelGardenDeployment#required_replica_count}
  */
  readonly requiredReplicaCount?: number;
  /**
  * If true, schedule the deployment workload on [spot
  * VMs](https://cloud.google.com/kubernetes-engine/docs/concepts/spot-vms).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#spot VertexAiEndpointWithModelGardenDeployment#spot}
  */
  readonly spot?: boolean | cdktf.IResolvable;
  /**
  * autoscaling_metric_specs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#autoscaling_metric_specs VertexAiEndpointWithModelGardenDeployment#autoscaling_metric_specs}
  */
  readonly autoscalingMetricSpecs?: VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesAutoscalingMetricSpecs[] | cdktf.IResolvable;
  /**
  * machine_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#machine_spec VertexAiEndpointWithModelGardenDeployment#machine_spec}
  */
  readonly machineSpec: VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpec;
}

export function vertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesOutputReference | VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_replica_count: cdktf.numberToTerraform(struct!.maxReplicaCount),
    min_replica_count: cdktf.numberToTerraform(struct!.minReplicaCount),
    required_replica_count: cdktf.numberToTerraform(struct!.requiredReplicaCount),
    spot: cdktf.booleanToTerraform(struct!.spot),
    autoscaling_metric_specs: cdktf.listMapper(vertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesAutoscalingMetricSpecsToTerraform, true)(struct!.autoscalingMetricSpecs),
    machine_spec: vertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecToTerraform(struct!.machineSpec),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesOutputReference | VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_replica_count: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_replica_count: {
      value: cdktf.numberToHclTerraform(struct!.minReplicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    required_replica_count: {
      value: cdktf.numberToHclTerraform(struct!.requiredReplicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spot: {
      value: cdktf.booleanToHclTerraform(struct!.spot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autoscaling_metric_specs: {
      value: cdktf.listMapperHcl(vertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesAutoscalingMetricSpecsToHclTerraform, true)(struct!.autoscalingMetricSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesAutoscalingMetricSpecsList",
    },
    machine_spec: {
      value: vertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecToHclTerraform(struct!.machineSpec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxReplicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicaCount = this._maxReplicaCount;
    }
    if (this._minReplicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReplicaCount = this._minReplicaCount;
    }
    if (this._requiredReplicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredReplicaCount = this._requiredReplicaCount;
    }
    if (this._spot !== undefined) {
      hasAnyValues = true;
      internalValueResult.spot = this._spot;
    }
    if (this._autoscalingMetricSpecs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingMetricSpecs = this._autoscalingMetricSpecs?.internalValue;
    }
    if (this._machineSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineSpec = this._machineSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxReplicaCount = undefined;
      this._minReplicaCount = undefined;
      this._requiredReplicaCount = undefined;
      this._spot = undefined;
      this._autoscalingMetricSpecs.internalValue = undefined;
      this._machineSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxReplicaCount = value.maxReplicaCount;
      this._minReplicaCount = value.minReplicaCount;
      this._requiredReplicaCount = value.requiredReplicaCount;
      this._spot = value.spot;
      this._autoscalingMetricSpecs.internalValue = value.autoscalingMetricSpecs;
      this._machineSpec.internalValue = value.machineSpec;
    }
  }

  // max_replica_count - computed: false, optional: true, required: false
  private _maxReplicaCount?: number; 
  public get maxReplicaCount() {
    return this.getNumberAttribute('max_replica_count');
  }
  public set maxReplicaCount(value: number) {
    this._maxReplicaCount = value;
  }
  public resetMaxReplicaCount() {
    this._maxReplicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicaCountInput() {
    return this._maxReplicaCount;
  }

  // min_replica_count - computed: false, optional: false, required: true
  private _minReplicaCount?: number; 
  public get minReplicaCount() {
    return this.getNumberAttribute('min_replica_count');
  }
  public set minReplicaCount(value: number) {
    this._minReplicaCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicaCountInput() {
    return this._minReplicaCount;
  }

  // required_replica_count - computed: false, optional: true, required: false
  private _requiredReplicaCount?: number; 
  public get requiredReplicaCount() {
    return this.getNumberAttribute('required_replica_count');
  }
  public set requiredReplicaCount(value: number) {
    this._requiredReplicaCount = value;
  }
  public resetRequiredReplicaCount() {
    this._requiredReplicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredReplicaCountInput() {
    return this._requiredReplicaCount;
  }

  // spot - computed: false, optional: true, required: false
  private _spot?: boolean | cdktf.IResolvable; 
  public get spot() {
    return this.getBooleanAttribute('spot');
  }
  public set spot(value: boolean | cdktf.IResolvable) {
    this._spot = value;
  }
  public resetSpot() {
    this._spot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInput() {
    return this._spot;
  }

  // autoscaling_metric_specs - computed: false, optional: true, required: false
  private _autoscalingMetricSpecs = new VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesAutoscalingMetricSpecsList(this, "autoscaling_metric_specs", false);
  public get autoscalingMetricSpecs() {
    return this._autoscalingMetricSpecs;
  }
  public putAutoscalingMetricSpecs(value: VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesAutoscalingMetricSpecs[] | cdktf.IResolvable) {
    this._autoscalingMetricSpecs.internalValue = value;
  }
  public resetAutoscalingMetricSpecs() {
    this._autoscalingMetricSpecs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingMetricSpecsInput() {
    return this._autoscalingMetricSpecs.internalValue;
  }

  // machine_spec - computed: false, optional: false, required: true
  private _machineSpec = new VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpecOutputReference(this, "machine_spec");
  public get machineSpec() {
    return this._machineSpec;
  }
  public putMachineSpec(value: VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesMachineSpec) {
    this._machineSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineSpecInput() {
    return this._machineSpec.internalValue;
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentDeployConfig {
  /**
  * If true, enable the QMT fast tryout feature for this model if possible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#fast_tryout_enabled VertexAiEndpointWithModelGardenDeployment#fast_tryout_enabled}
  */
  readonly fastTryoutEnabled?: boolean | cdktf.IResolvable;
  /**
  * System labels for Model Garden deployments.
  * These labels are managed by Google and for tracking purposes only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#system_labels VertexAiEndpointWithModelGardenDeployment#system_labels}
  */
  readonly systemLabels?: { [key: string]: string };
  /**
  * dedicated_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#dedicated_resources VertexAiEndpointWithModelGardenDeployment#dedicated_resources}
  */
  readonly dedicatedResources?: VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResources;
}

export function vertexAiEndpointWithModelGardenDeploymentDeployConfigToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentDeployConfigOutputReference | VertexAiEndpointWithModelGardenDeploymentDeployConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fast_tryout_enabled: cdktf.booleanToTerraform(struct!.fastTryoutEnabled),
    system_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.systemLabels),
    dedicated_resources: vertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesToTerraform(struct!.dedicatedResources),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentDeployConfigToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentDeployConfigOutputReference | VertexAiEndpointWithModelGardenDeploymentDeployConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fast_tryout_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.fastTryoutEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    system_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.systemLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    dedicated_resources: {
      value: vertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesToHclTerraform(struct!.dedicatedResources),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentDeployConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentDeployConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fastTryoutEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastTryoutEnabled = this._fastTryoutEnabled;
    }
    if (this._systemLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemLabels = this._systemLabels;
    }
    if (this._dedicatedResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedResources = this._dedicatedResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentDeployConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fastTryoutEnabled = undefined;
      this._systemLabels = undefined;
      this._dedicatedResources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fastTryoutEnabled = value.fastTryoutEnabled;
      this._systemLabels = value.systemLabels;
      this._dedicatedResources.internalValue = value.dedicatedResources;
    }
  }

  // fast_tryout_enabled - computed: false, optional: true, required: false
  private _fastTryoutEnabled?: boolean | cdktf.IResolvable; 
  public get fastTryoutEnabled() {
    return this.getBooleanAttribute('fast_tryout_enabled');
  }
  public set fastTryoutEnabled(value: boolean | cdktf.IResolvable) {
    this._fastTryoutEnabled = value;
  }
  public resetFastTryoutEnabled() {
    this._fastTryoutEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastTryoutEnabledInput() {
    return this._fastTryoutEnabled;
  }

  // system_labels - computed: false, optional: true, required: false
  private _systemLabels?: { [key: string]: string }; 
  public get systemLabels() {
    return this.getStringMapAttribute('system_labels');
  }
  public set systemLabels(value: { [key: string]: string }) {
    this._systemLabels = value;
  }
  public resetSystemLabels() {
    this._systemLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemLabelsInput() {
    return this._systemLabels;
  }

  // dedicated_resources - computed: false, optional: true, required: false
  private _dedicatedResources = new VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResourcesOutputReference(this, "dedicated_resources");
  public get dedicatedResources() {
    return this._dedicatedResources;
  }
  public putDedicatedResources(value: VertexAiEndpointWithModelGardenDeploymentDeployConfigDedicatedResources) {
    this._dedicatedResources.internalValue = value;
  }
  public resetDedicatedResources() {
    this._dedicatedResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedResourcesInput() {
    return this._dedicatedResources.internalValue;
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentEndpointConfig {
  /**
  * If true, the endpoint will be exposed through a dedicated
  * DNS [Endpoint.dedicated_endpoint_dns]. Your request to the dedicated DNS
  * will be isolated from other users' traffic and will have better
  * performance and reliability. Note: Once you enabled dedicated endpoint,
  * you won't be able to send request to the shared DNS
  * {region}-aiplatform.googleapis.com. The limitations will be removed soon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#dedicated_endpoint_enabled VertexAiEndpointWithModelGardenDeployment#dedicated_endpoint_enabled}
  */
  readonly dedicatedEndpointEnabled?: boolean | cdktf.IResolvable;
  /**
  * The user-specified display name of the endpoint. If not set, a
  * default name will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#endpoint_display_name VertexAiEndpointWithModelGardenDeployment#endpoint_display_name}
  */
  readonly endpointDisplayName?: string;
}

export function vertexAiEndpointWithModelGardenDeploymentEndpointConfigToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentEndpointConfigOutputReference | VertexAiEndpointWithModelGardenDeploymentEndpointConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dedicated_endpoint_enabled: cdktf.booleanToTerraform(struct!.dedicatedEndpointEnabled),
    endpoint_display_name: cdktf.stringToTerraform(struct!.endpointDisplayName),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentEndpointConfigToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentEndpointConfigOutputReference | VertexAiEndpointWithModelGardenDeploymentEndpointConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dedicated_endpoint_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.dedicatedEndpointEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint_display_name: {
      value: cdktf.stringToHclTerraform(struct!.endpointDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentEndpointConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentEndpointConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dedicatedEndpointEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedEndpointEnabled = this._dedicatedEndpointEnabled;
    }
    if (this._endpointDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointDisplayName = this._endpointDisplayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentEndpointConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dedicatedEndpointEnabled = undefined;
      this._endpointDisplayName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dedicatedEndpointEnabled = value.dedicatedEndpointEnabled;
      this._endpointDisplayName = value.endpointDisplayName;
    }
  }

  // dedicated_endpoint_enabled - computed: false, optional: true, required: false
  private _dedicatedEndpointEnabled?: boolean | cdktf.IResolvable; 
  public get dedicatedEndpointEnabled() {
    return this.getBooleanAttribute('dedicated_endpoint_enabled');
  }
  public set dedicatedEndpointEnabled(value: boolean | cdktf.IResolvable) {
    this._dedicatedEndpointEnabled = value;
  }
  public resetDedicatedEndpointEnabled() {
    this._dedicatedEndpointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedEndpointEnabledInput() {
    return this._dedicatedEndpointEnabled;
  }

  // endpoint_display_name - computed: false, optional: true, required: false
  private _endpointDisplayName?: string; 
  public get endpointDisplayName() {
    return this.getStringAttribute('endpoint_display_name');
  }
  public set endpointDisplayName(value: string) {
    this._endpointDisplayName = value;
  }
  public resetEndpointDisplayName() {
    this._endpointDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointDisplayNameInput() {
    return this._endpointDisplayName;
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecEnv {
  /**
  * Name of the environment variable. Must be a valid C identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#name VertexAiEndpointWithModelGardenDeployment#name}
  */
  readonly name: string;
  /**
  * Variables that reference a $(VAR_NAME) are expanded
  * using the previous defined environment variables in the container and
  * any service environment variables. If a variable cannot be resolved,
  * the reference in the input string will be unchanged. The $(VAR_NAME)
  * syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped
  * references will never be expanded, regardless of whether the variable
  * exists or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#value VertexAiEndpointWithModelGardenDeployment#value}
  */
  readonly value: string;
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecEnvToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecEnvToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecEnv | cdktf.IResolvable): any {
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

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecEnvList extends cdktf.ComplexList {
  public internalValue? : VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecEnv[] | cdktf.IResolvable

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
  public get(index: number): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecEnvOutputReference {
    return new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecGrpcPorts {
  /**
  * The number of the port to expose on the pod's IP address.
  * Must be a valid port number, between 1 and 65535 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#container_port VertexAiEndpointWithModelGardenDeployment#container_port}
  */
  readonly containerPort?: number;
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecGrpcPortsToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecGrpcPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecGrpcPortsToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecGrpcPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_port: {
      value: cdktf.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecGrpcPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecGrpcPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecGrpcPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPort = value.containerPort;
    }
  }

  // container_port - computed: false, optional: true, required: false
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  public resetContainerPort() {
    this._containerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }
}

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecGrpcPortsList extends cdktf.ComplexList {
  public internalValue? : VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecGrpcPorts[] | cdktf.IResolvable

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
  public get(index: number): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecGrpcPortsOutputReference {
    return new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecGrpcPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeExec {
  /**
  * Command is the command line to execute inside the container, the working
  * directory for the command is root ('/') in the container's filesystem.
  * The command is simply exec'd, it is not run inside a shell, so
  * traditional shell instructions ('|', etc) won't work. To use a shell, you
  * need to explicitly call out to that shell. Exit status of 0 is treated as
  * live/healthy and non-zero is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#command VertexAiEndpointWithModelGardenDeployment#command}
  */
  readonly command?: string[];
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeExecToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeExecOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeExecToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeExecOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeGrpc {
  /**
  * Port number of the gRPC service. Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#port VertexAiEndpointWithModelGardenDeployment#port}
  */
  readonly port?: number;
  /**
  * Service is the name of the service to place in the gRPC
  * HealthCheckRequest. See
  * https://github.com/grpc/grpc/blob/master/doc/health-checking.md.
  * 
  * If this is not specified, the default behavior is defined by gRPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#service VertexAiEndpointWithModelGardenDeployment#service}
  */
  readonly service?: string;
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeGrpcToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeGrpcOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeGrpcToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeGrpcOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeGrpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeGrpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._service = value.service;
    }
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetHttpHeaders {
  /**
  * The header field name.
  * This will be canonicalized upon output, so case-variant names will be
  * understood as the same header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#name VertexAiEndpointWithModelGardenDeployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#value VertexAiEndpointWithModelGardenDeployment#value}
  */
  readonly value?: string;
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetHttpHeadersToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetHttpHeadersToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetHttpHeadersOutputReference {
    return new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGet {
  /**
  * Host name to connect to, defaults to the model serving container's IP.
  * You probably want to set "Host" in httpHeaders instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#host VertexAiEndpointWithModelGardenDeployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#path VertexAiEndpointWithModelGardenDeployment#path}
  */
  readonly path?: string;
  /**
  * Number of the port to access on the container.
  * Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#port VertexAiEndpointWithModelGardenDeployment#port}
  */
  readonly port?: number;
  /**
  * Scheme to use for connecting to the host.
  * Defaults to HTTP. Acceptable values are "HTTP" or "HTTPS".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#scheme VertexAiEndpointWithModelGardenDeployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#http_headers VertexAiEndpointWithModelGardenDeployment#http_headers}
  */
  readonly httpHeaders?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_headers: cdktf.listMapper(vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetHttpHeadersToTerraform, true)(struct!.httpHeaders),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGet): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_headers: {
      value: cdktf.listMapperHcl(vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetHttpHeadersToHclTerraform, true)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetHttpHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._httpHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
      this._httpHeaders.internalValue = value.httpHeaders;
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

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeTcpSocket {
  /**
  * Optional: Host name to connect to, defaults to the model serving
  * container's IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#host VertexAiEndpointWithModelGardenDeployment#host}
  */
  readonly host?: string;
  /**
  * Number of the port to access on the container.
  * Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#port VertexAiEndpointWithModelGardenDeployment#port}
  */
  readonly port?: number;
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeTcpSocketToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeTcpSocketOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeTcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeTcpSocketToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeTcpSocketOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeTcpSocket): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeTcpSocket | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeTcpSocket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._port = value.port;
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
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbe {
  /**
  * Number of consecutive failures before the probe is considered failed.
  * Defaults to 3. Minimum value is 1.
  * 
  * Maps to Kubernetes probe argument 'failureThreshold'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#failure_threshold VertexAiEndpointWithModelGardenDeployment#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds to wait before starting the probe. Defaults to 0.
  * Minimum value is 0.
  * 
  * Maps to Kubernetes probe argument 'initialDelaySeconds'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#initial_delay_seconds VertexAiEndpointWithModelGardenDeployment#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds.
  * Minimum value is 1. Must be less than timeout_seconds.
  * 
  * Maps to Kubernetes probe argument 'periodSeconds'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#period_seconds VertexAiEndpointWithModelGardenDeployment#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Number of consecutive successes before the probe is considered successful.
  * Defaults to 1. Minimum value is 1.
  * 
  * Maps to Kubernetes probe argument 'successThreshold'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#success_threshold VertexAiEndpointWithModelGardenDeployment#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second.
  * Minimum value is 1. Must be greater or equal to period_seconds.
  * 
  * Maps to Kubernetes probe argument 'timeoutSeconds'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#timeout_seconds VertexAiEndpointWithModelGardenDeployment#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#exec VertexAiEndpointWithModelGardenDeployment#exec}
  */
  readonly exec?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeExec;
  /**
  * grpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#grpc VertexAiEndpointWithModelGardenDeployment#grpc}
  */
  readonly grpc?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeGrpc;
  /**
  * http_get block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#http_get VertexAiEndpointWithModelGardenDeployment#http_get}
  */
  readonly httpGet?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGet;
  /**
  * tcp_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#tcp_socket VertexAiEndpointWithModelGardenDeployment#tcp_socket}
  */
  readonly tcpSocket?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeTcpSocket;
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeExecToTerraform(struct!.exec),
    grpc: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeGrpcToTerraform(struct!.grpc),
    http_get: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeTcpSocketToTerraform(struct!.tcpSocket),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exec: {
      value: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeExecList",
    },
    grpc: {
      value: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeGrpcList",
    },
    http_get: {
      value: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetList",
    },
    tcp_socket: {
      value: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeTcpSocketList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
      this._exec.internalValue = undefined;
      this._grpc.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._tcpSocket.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
      this._exec.internalValue = value.exec;
      this._grpc.internalValue = value.grpc;
      this._httpGet.internalValue = value.httpGet;
      this._tcpSocket.internalValue = value.tcpSocket;
    }
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeExec {
  /**
  * Command is the command line to execute inside the container, the working
  * directory for the command is root ('/') in the container's filesystem.
  * The command is simply exec'd, it is not run inside a shell, so
  * traditional shell instructions ('|', etc) won't work. To use a shell, you
  * need to explicitly call out to that shell. Exit status of 0 is treated as
  * live/healthy and non-zero is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#command VertexAiEndpointWithModelGardenDeployment#command}
  */
  readonly command?: string[];
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeExecToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeExecOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeExecToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeExecOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeGrpc {
  /**
  * Port number of the gRPC service. Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#port VertexAiEndpointWithModelGardenDeployment#port}
  */
  readonly port?: number;
  /**
  * Service is the name of the service to place in the gRPC
  * HealthCheckRequest. See
  * https://github.com/grpc/grpc/blob/master/doc/health-checking.md.
  * 
  * If this is not specified, the default behavior is defined by gRPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#service VertexAiEndpointWithModelGardenDeployment#service}
  */
  readonly service?: string;
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeGrpcToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeGrpcOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeGrpcToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeGrpcOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeGrpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeGrpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._service = value.service;
    }
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetHttpHeaders {
  /**
  * The header field name.
  * This will be canonicalized upon output, so case-variant names will be
  * understood as the same header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#name VertexAiEndpointWithModelGardenDeployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#value VertexAiEndpointWithModelGardenDeployment#value}
  */
  readonly value?: string;
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetHttpHeadersToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetHttpHeadersToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetHttpHeadersOutputReference {
    return new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGet {
  /**
  * Host name to connect to, defaults to the model serving container's IP.
  * You probably want to set "Host" in httpHeaders instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#host VertexAiEndpointWithModelGardenDeployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#path VertexAiEndpointWithModelGardenDeployment#path}
  */
  readonly path?: string;
  /**
  * Number of the port to access on the container.
  * Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#port VertexAiEndpointWithModelGardenDeployment#port}
  */
  readonly port?: number;
  /**
  * Scheme to use for connecting to the host.
  * Defaults to HTTP. Acceptable values are "HTTP" or "HTTPS".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#scheme VertexAiEndpointWithModelGardenDeployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#http_headers VertexAiEndpointWithModelGardenDeployment#http_headers}
  */
  readonly httpHeaders?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_headers: cdktf.listMapper(vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetHttpHeadersToTerraform, true)(struct!.httpHeaders),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGet): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_headers: {
      value: cdktf.listMapperHcl(vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetHttpHeadersToHclTerraform, true)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetHttpHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._httpHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
      this._httpHeaders.internalValue = value.httpHeaders;
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

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeTcpSocket {
  /**
  * Optional: Host name to connect to, defaults to the model serving
  * container's IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#host VertexAiEndpointWithModelGardenDeployment#host}
  */
  readonly host?: string;
  /**
  * Number of the port to access on the container.
  * Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#port VertexAiEndpointWithModelGardenDeployment#port}
  */
  readonly port?: number;
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeTcpSocketToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeTcpSocketOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeTcpSocketToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeTcpSocketOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeTcpSocket): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeTcpSocket | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeTcpSocket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._port = value.port;
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
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbe {
  /**
  * Number of consecutive failures before the probe is considered failed.
  * Defaults to 3. Minimum value is 1.
  * 
  * Maps to Kubernetes probe argument 'failureThreshold'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#failure_threshold VertexAiEndpointWithModelGardenDeployment#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds to wait before starting the probe. Defaults to 0.
  * Minimum value is 0.
  * 
  * Maps to Kubernetes probe argument 'initialDelaySeconds'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#initial_delay_seconds VertexAiEndpointWithModelGardenDeployment#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds.
  * Minimum value is 1. Must be less than timeout_seconds.
  * 
  * Maps to Kubernetes probe argument 'periodSeconds'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#period_seconds VertexAiEndpointWithModelGardenDeployment#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Number of consecutive successes before the probe is considered successful.
  * Defaults to 1. Minimum value is 1.
  * 
  * Maps to Kubernetes probe argument 'successThreshold'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#success_threshold VertexAiEndpointWithModelGardenDeployment#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second.
  * Minimum value is 1. Must be greater or equal to period_seconds.
  * 
  * Maps to Kubernetes probe argument 'timeoutSeconds'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#timeout_seconds VertexAiEndpointWithModelGardenDeployment#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#exec VertexAiEndpointWithModelGardenDeployment#exec}
  */
  readonly exec?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeExec;
  /**
  * grpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#grpc VertexAiEndpointWithModelGardenDeployment#grpc}
  */
  readonly grpc?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeGrpc;
  /**
  * http_get block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#http_get VertexAiEndpointWithModelGardenDeployment#http_get}
  */
  readonly httpGet?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGet;
  /**
  * tcp_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#tcp_socket VertexAiEndpointWithModelGardenDeployment#tcp_socket}
  */
  readonly tcpSocket?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeTcpSocket;
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeExecToTerraform(struct!.exec),
    grpc: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeGrpcToTerraform(struct!.grpc),
    http_get: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeTcpSocketToTerraform(struct!.tcpSocket),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exec: {
      value: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeExecList",
    },
    grpc: {
      value: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeGrpcList",
    },
    http_get: {
      value: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetList",
    },
    tcp_socket: {
      value: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeTcpSocketList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
      this._exec.internalValue = undefined;
      this._grpc.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._tcpSocket.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
      this._exec.internalValue = value.exec;
      this._grpc.internalValue = value.grpc;
      this._httpGet.internalValue = value.httpGet;
      this._tcpSocket.internalValue = value.tcpSocket;
    }
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecPorts {
  /**
  * The number of the port to expose on the pod's IP address.
  * Must be a valid port number, between 1 and 65535 inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#container_port VertexAiEndpointWithModelGardenDeployment#container_port}
  */
  readonly containerPort?: number;
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecPortsToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecPortsToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_port: {
      value: cdktf.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerPort = value.containerPort;
    }
  }

  // container_port - computed: false, optional: true, required: false
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  public resetContainerPort() {
    this._containerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }
}

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecPortsList extends cdktf.ComplexList {
  public internalValue? : VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecPorts[] | cdktf.IResolvable

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
  public get(index: number): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecPortsOutputReference {
    return new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeExec {
  /**
  * Command is the command line to execute inside the container, the working
  * directory for the command is root ('/') in the container's filesystem.
  * The command is simply exec'd, it is not run inside a shell, so
  * traditional shell instructions ('|', etc) won't work. To use a shell, you
  * need to explicitly call out to that shell. Exit status of 0 is treated as
  * live/healthy and non-zero is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#command VertexAiEndpointWithModelGardenDeployment#command}
  */
  readonly command?: string[];
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeExecToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeExecOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeExecToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeExecOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._command = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._command = value.command;
    }
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeGrpc {
  /**
  * Port number of the gRPC service. Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#port VertexAiEndpointWithModelGardenDeployment#port}
  */
  readonly port?: number;
  /**
  * Service is the name of the service to place in the gRPC
  * HealthCheckRequest. See
  * https://github.com/grpc/grpc/blob/master/doc/health-checking.md.
  * 
  * If this is not specified, the default behavior is defined by gRPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#service VertexAiEndpointWithModelGardenDeployment#service}
  */
  readonly service?: string;
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeGrpcToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeGrpcOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeGrpcToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeGrpcOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeGrpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeGrpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._service = value.service;
    }
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

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetHttpHeaders {
  /**
  * The header field name.
  * This will be canonicalized upon output, so case-variant names will be
  * understood as the same header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#name VertexAiEndpointWithModelGardenDeployment#name}
  */
  readonly name?: string;
  /**
  * The header field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#value VertexAiEndpointWithModelGardenDeployment#value}
  */
  readonly value?: string;
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetHttpHeadersToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetHttpHeadersToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
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

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetHttpHeadersOutputReference {
    return new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGet {
  /**
  * Host name to connect to, defaults to the model serving container's IP.
  * You probably want to set "Host" in httpHeaders instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#host VertexAiEndpointWithModelGardenDeployment#host}
  */
  readonly host?: string;
  /**
  * Path to access on the HTTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#path VertexAiEndpointWithModelGardenDeployment#path}
  */
  readonly path?: string;
  /**
  * Number of the port to access on the container.
  * Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#port VertexAiEndpointWithModelGardenDeployment#port}
  */
  readonly port?: number;
  /**
  * Scheme to use for connecting to the host.
  * Defaults to HTTP. Acceptable values are "HTTP" or "HTTPS".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#scheme VertexAiEndpointWithModelGardenDeployment#scheme}
  */
  readonly scheme?: string;
  /**
  * http_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#http_headers VertexAiEndpointWithModelGardenDeployment#http_headers}
  */
  readonly httpHeaders?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    scheme: cdktf.stringToTerraform(struct!.scheme),
    http_headers: cdktf.listMapper(vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetHttpHeadersToTerraform, true)(struct!.httpHeaders),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGet): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_headers: {
      value: cdktf.listMapperHcl(vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetHttpHeadersToHclTerraform, true)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetHttpHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._path = undefined;
      this._port = undefined;
      this._scheme = undefined;
      this._httpHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._path = value.path;
      this._port = value.port;
      this._scheme = value.scheme;
      this._httpHeaders.internalValue = value.httpHeaders;
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

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeTcpSocket {
  /**
  * Optional: Host name to connect to, defaults to the model serving
  * container's IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#host VertexAiEndpointWithModelGardenDeployment#host}
  */
  readonly host?: string;
  /**
  * Number of the port to access on the container.
  * Number must be in the range 1 to 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#port VertexAiEndpointWithModelGardenDeployment#port}
  */
  readonly port?: number;
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeTcpSocketToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeTcpSocketOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeTcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeTcpSocketToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeTcpSocketOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeTcpSocket): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeTcpSocket | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeTcpSocket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._host = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._host = value.host;
      this._port = value.port;
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
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbe {
  /**
  * Number of consecutive failures before the probe is considered failed.
  * Defaults to 3. Minimum value is 1.
  * 
  * Maps to Kubernetes probe argument 'failureThreshold'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#failure_threshold VertexAiEndpointWithModelGardenDeployment#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds to wait before starting the probe. Defaults to 0.
  * Minimum value is 0.
  * 
  * Maps to Kubernetes probe argument 'initialDelaySeconds'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#initial_delay_seconds VertexAiEndpointWithModelGardenDeployment#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds.
  * Minimum value is 1. Must be less than timeout_seconds.
  * 
  * Maps to Kubernetes probe argument 'periodSeconds'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#period_seconds VertexAiEndpointWithModelGardenDeployment#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Number of consecutive successes before the probe is considered successful.
  * Defaults to 1. Minimum value is 1.
  * 
  * Maps to Kubernetes probe argument 'successThreshold'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#success_threshold VertexAiEndpointWithModelGardenDeployment#success_threshold}
  */
  readonly successThreshold?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second.
  * Minimum value is 1. Must be greater or equal to period_seconds.
  * 
  * Maps to Kubernetes probe argument 'timeoutSeconds'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#timeout_seconds VertexAiEndpointWithModelGardenDeployment#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#exec VertexAiEndpointWithModelGardenDeployment#exec}
  */
  readonly exec?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeExec;
  /**
  * grpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#grpc VertexAiEndpointWithModelGardenDeployment#grpc}
  */
  readonly grpc?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeGrpc;
  /**
  * http_get block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#http_get VertexAiEndpointWithModelGardenDeployment#http_get}
  */
  readonly httpGet?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGet;
  /**
  * tcp_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#tcp_socket VertexAiEndpointWithModelGardenDeployment#tcp_socket}
  */
  readonly tcpSocket?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeTcpSocket;
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    success_threshold: cdktf.numberToTerraform(struct!.successThreshold),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    exec: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeExecToTerraform(struct!.exec),
    grpc: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeGrpcToTerraform(struct!.grpc),
    http_get: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeTcpSocketToTerraform(struct!.tcpSocket),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_threshold: {
      value: cdktf.numberToHclTerraform(struct!.successThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exec: {
      value: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeExecList",
    },
    grpc: {
      value: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeGrpcList",
    },
    http_get: {
      value: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetList",
    },
    tcp_socket: {
      value: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeTcpSocketList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._successThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.successThreshold = this._successThreshold;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._successThreshold = undefined;
      this._timeoutSeconds = undefined;
      this._exec.internalValue = undefined;
      this._grpc.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._tcpSocket.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._successThreshold = value.successThreshold;
      this._timeoutSeconds = value.timeoutSeconds;
      this._exec.internalValue = value.exec;
      this._grpc.internalValue = value.grpc;
      this._httpGet.internalValue = value.httpGet;
      this._tcpSocket.internalValue = value.tcpSocket;
    }
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // success_threshold - computed: false, optional: true, required: false
  private _successThreshold?: number; 
  public get successThreshold() {
    return this.getNumberAttribute('success_threshold');
  }
  public set successThreshold(value: number) {
    this._successThreshold = value;
  }
  public resetSuccessThreshold() {
    this._successThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successThresholdInput() {
    return this._successThreshold;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // exec - computed: false, optional: true, required: false
  private _exec = new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpec {
  /**
  * Specifies arguments for the command that runs when the container starts.
  * This overrides the container's
  * ['CMD'](https://docs.docker.com/engine/reference/builder/#cmd). Specify
  * this field as an array of executable and arguments, similar to a Docker
  * 'CMD''s "default parameters" form.
  * 
  * If you don't specify this field but do specify the
  * command field, then the command from the
  * 'command' field runs without any additional arguments. See the
  * [Kubernetes documentation about how the
  * 'command' and 'args' fields interact with a container's 'ENTRYPOINT' and
  * 'CMD'](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#notes).
  * 
  * If you don't specify this field and don't specify the 'command' field,
  * then the container's
  * ['ENTRYPOINT'](https://docs.docker.com/engine/reference/builder/#cmd) and
  * 'CMD' determine what runs based on their default behavior. See the Docker
  * documentation about [how 'CMD' and 'ENTRYPOINT'
  * interact](https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact).
  * 
  * In this field, you can reference [environment variables
  * set by Vertex
  * AI](https://cloud.google.com/vertex-ai/docs/predictions/custom-container-requirements#aip-variables)
  * and environment variables set in the env field.
  * You cannot reference environment variables set in the Docker image. In
  * order for environment variables to be expanded, reference them by using the
  * following syntax:$(VARIABLE_NAME)
  * Note that this differs from Bash variable expansion, which does not use
  * parentheses. If a variable cannot be resolved, the reference in the input
  * string is used unchanged. To avoid variable expansion, you can escape this
  * syntax with '$$'; for example:$$(VARIABLE_NAME)
  * This field corresponds to the 'args' field of the Kubernetes Containers
  * [v1 core
  * API](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#container-v1-core).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#args VertexAiEndpointWithModelGardenDeployment#args}
  */
  readonly args?: string[];
  /**
  * Specifies the command that runs when the container starts. This overrides
  * the container's
  * [ENTRYPOINT](https://docs.docker.com/engine/reference/builder/#entrypoint).
  * Specify this field as an array of executable and arguments, similar to a
  * Docker 'ENTRYPOINT''s "exec" form, not its "shell" form.
  * 
  * If you do not specify this field, then the container's 'ENTRYPOINT' runs,
  * in conjunction with the args field or the
  * container's ['CMD'](https://docs.docker.com/engine/reference/builder/#cmd),
  * if either exists. If this field is not specified and the container does not
  * have an 'ENTRYPOINT', then refer to the Docker documentation about [how
  * 'CMD' and 'ENTRYPOINT'
  * interact](https://docs.docker.com/engine/reference/builder/#understand-how-cmd-and-entrypoint-interact).
  * 
  * If you specify this field, then you can also specify the 'args' field to
  * provide additional arguments for this command. However, if you specify this
  * field, then the container's 'CMD' is ignored. See the
  * [Kubernetes documentation about how the
  * 'command' and 'args' fields interact with a container's 'ENTRYPOINT' and
  * 'CMD'](https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#notes).
  * 
  * In this field, you can reference [environment variables set by Vertex
  * AI](https://cloud.google.com/vertex-ai/docs/predictions/custom-container-requirements#aip-variables)
  * and environment variables set in the env field.
  * You cannot reference environment variables set in the Docker image. In
  * order for environment variables to be expanded, reference them by using the
  * following syntax:$(VARIABLE_NAME)
  * Note that this differs from Bash variable expansion, which does not use
  * parentheses. If a variable cannot be resolved, the reference in the input
  * string is used unchanged. To avoid variable expansion, you can escape this
  * syntax with '$$'; for example:$$(VARIABLE_NAME)
  * This field corresponds to the 'command' field of the Kubernetes Containers
  * [v1 core
  * API](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.23/#container-v1-core).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#command VertexAiEndpointWithModelGardenDeployment#command}
  */
  readonly command?: string[];
  /**
  * Deployment timeout.
  * Limit for deployment timeout is 2 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#deployment_timeout VertexAiEndpointWithModelGardenDeployment#deployment_timeout}
  */
  readonly deploymentTimeout?: string;
  /**
  * HTTP path on the container to send health checks to. Vertex AI
  * intermittently sends GET requests to this path on the container's IP
  * address and port to check that the container is healthy. Read more about
  * [health
  * checks](https://cloud.google.com/vertex-ai/docs/predictions/custom-container-requirements#health).
  * 
  * For example, if you set this field to '/bar', then Vertex AI
  * intermittently sends a GET request to the '/bar' path on the port of your
  * container specified by the first value of this 'ModelContainerSpec''s
  * ports field.
  * 
  * If you don't specify this field, it defaults to the following value when
  * you deploy this Model to an Endpoint:/v1/endpoints/ENDPOINT/deployedModels/DEPLOYED_MODEL:predict
  * The placeholders in this value are replaced as follows:
  * 
  * * ENDPOINT: The last segment (following 'endpoints/')of the
  * Endpoint.name][] field of the Endpoint where this Model has been
  * deployed. (Vertex AI makes this value available to your container code
  * as the ['AIP_ENDPOINT_ID' environment
  * variable](https://cloud.google.com/vertex-ai/docs/predictions/custom-container-requirements#aip-variables).)
  * 
  * * DEPLOYED_MODEL: DeployedModel.id of the 'DeployedModel'.
  * (Vertex AI makes this value available to your container code as the
  * ['AIP_DEPLOYED_MODEL_ID' environment
  * variable](https://cloud.google.com/vertex-ai/docs/predictions/custom-container-requirements#aip-variables).)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#health_route VertexAiEndpointWithModelGardenDeployment#health_route}
  */
  readonly healthRoute?: string;
  /**
  * URI of the Docker image to be used as the custom container for serving
  * predictions. This URI must identify an image in Artifact Registry or
  * Container Registry. Learn more about the [container publishing
  * requirements](https://cloud.google.com/vertex-ai/docs/predictions/custom-container-requirements#publishing),
  * including permissions requirements for the Vertex AI Service Agent.
  * 
  * The container image is ingested upon ModelService.UploadModel, stored
  * internally, and this original path is afterwards not used.
  * 
  * To learn about the requirements for the Docker image itself, see
  * [Custom container
  * requirements](https://cloud.google.com/vertex-ai/docs/predictions/custom-container-requirements#).
  * 
  * You can use the URI to one of Vertex AI's [pre-built container images for
  * prediction](https://cloud.google.com/vertex-ai/docs/predictions/pre-built-containers)
  * in this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#image_uri VertexAiEndpointWithModelGardenDeployment#image_uri}
  */
  readonly imageUri: string;
  /**
  * HTTP path on the container to send prediction requests to. Vertex AI
  * forwards requests sent using
  * projects.locations.endpoints.predict to this
  * path on the container's IP address and port. Vertex AI then returns the
  * container's response in the API response.
  * 
  * For example, if you set this field to '/foo', then when Vertex AI
  * receives a prediction request, it forwards the request body in a POST
  * request to the '/foo' path on the port of your container specified by the
  * first value of this 'ModelContainerSpec''s
  * ports field.
  * 
  * If you don't specify this field, it defaults to the following value when
  * you deploy this Model to an Endpoint:/v1/endpoints/ENDPOINT/deployedModels/DEPLOYED_MODEL:predict
  * The placeholders in this value are replaced as follows:
  * 
  * * ENDPOINT: The last segment (following 'endpoints/')of the
  * Endpoint.name][] field of the Endpoint where this Model has been
  * deployed. (Vertex AI makes this value available to your container code
  * as the ['AIP_ENDPOINT_ID' environment
  * variable](https://cloud.google.com/vertex-ai/docs/predictions/custom-container-requirements#aip-variables).)
  * 
  * * DEPLOYED_MODEL: DeployedModel.id of the 'DeployedModel'.
  * (Vertex AI makes this value available to your container code
  * as the ['AIP_DEPLOYED_MODEL_ID' environment
  * variable](https://cloud.google.com/vertex-ai/docs/predictions/custom-container-requirements#aip-variables).)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#predict_route VertexAiEndpointWithModelGardenDeployment#predict_route}
  */
  readonly predictRoute?: string;
  /**
  * The amount of the VM memory to reserve as the shared memory for the model
  * in megabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#shared_memory_size_mb VertexAiEndpointWithModelGardenDeployment#shared_memory_size_mb}
  */
  readonly sharedMemorySizeMb?: string;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#env VertexAiEndpointWithModelGardenDeployment#env}
  */
  readonly env?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecEnv[] | cdktf.IResolvable;
  /**
  * grpc_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#grpc_ports VertexAiEndpointWithModelGardenDeployment#grpc_ports}
  */
  readonly grpcPorts?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecGrpcPorts[] | cdktf.IResolvable;
  /**
  * health_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#health_probe VertexAiEndpointWithModelGardenDeployment#health_probe}
  */
  readonly healthProbe?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbe;
  /**
  * liveness_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#liveness_probe VertexAiEndpointWithModelGardenDeployment#liveness_probe}
  */
  readonly livenessProbe?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbe;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#ports VertexAiEndpointWithModelGardenDeployment#ports}
  */
  readonly ports?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecPorts[] | cdktf.IResolvable;
  /**
  * startup_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#startup_probe VertexAiEndpointWithModelGardenDeployment#startup_probe}
  */
  readonly startupProbe?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbe;
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    deployment_timeout: cdktf.stringToTerraform(struct!.deploymentTimeout),
    health_route: cdktf.stringToTerraform(struct!.healthRoute),
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    predict_route: cdktf.stringToTerraform(struct!.predictRoute),
    shared_memory_size_mb: cdktf.stringToTerraform(struct!.sharedMemorySizeMb),
    env: cdktf.listMapper(vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecEnvToTerraform, true)(struct!.env),
    grpc_ports: cdktf.listMapper(vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecGrpcPortsToTerraform, true)(struct!.grpcPorts),
    health_probe: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeToTerraform(struct!.healthProbe),
    liveness_probe: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeToTerraform(struct!.livenessProbe),
    ports: cdktf.listMapper(vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecPortsToTerraform, true)(struct!.ports),
    startup_probe: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeToTerraform(struct!.startupProbe),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    deployment_timeout: {
      value: cdktf.stringToHclTerraform(struct!.deploymentTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health_route: {
      value: cdktf.stringToHclTerraform(struct!.healthRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_uri: {
      value: cdktf.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    predict_route: {
      value: cdktf.stringToHclTerraform(struct!.predictRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_memory_size_mb: {
      value: cdktf.stringToHclTerraform(struct!.sharedMemorySizeMb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.listMapperHcl(vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecEnvList",
    },
    grpc_ports: {
      value: cdktf.listMapperHcl(vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecGrpcPortsToHclTerraform, true)(struct!.grpcPorts),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecGrpcPortsList",
    },
    health_probe: {
      value: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeToHclTerraform(struct!.healthProbe),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeList",
    },
    liveness_probe: {
      value: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeList",
    },
    ports: {
      value: cdktf.listMapperHcl(vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecPortsToHclTerraform, true)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecPortsList",
    },
    startup_probe: {
      value: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeToHclTerraform(struct!.startupProbe),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._deploymentTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentTimeout = this._deploymentTimeout;
    }
    if (this._healthRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthRoute = this._healthRoute;
    }
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._predictRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.predictRoute = this._predictRoute;
    }
    if (this._sharedMemorySizeMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedMemorySizeMb = this._sharedMemorySizeMb;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._grpcPorts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcPorts = this._grpcPorts?.internalValue;
    }
    if (this._healthProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthProbe = this._healthProbe?.internalValue;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._startupProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupProbe = this._startupProbe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._command = undefined;
      this._deploymentTimeout = undefined;
      this._healthRoute = undefined;
      this._imageUri = undefined;
      this._predictRoute = undefined;
      this._sharedMemorySizeMb = undefined;
      this._env.internalValue = undefined;
      this._grpcPorts.internalValue = undefined;
      this._healthProbe.internalValue = undefined;
      this._livenessProbe.internalValue = undefined;
      this._ports.internalValue = undefined;
      this._startupProbe.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._command = value.command;
      this._deploymentTimeout = value.deploymentTimeout;
      this._healthRoute = value.healthRoute;
      this._imageUri = value.imageUri;
      this._predictRoute = value.predictRoute;
      this._sharedMemorySizeMb = value.sharedMemorySizeMb;
      this._env.internalValue = value.env;
      this._grpcPorts.internalValue = value.grpcPorts;
      this._healthProbe.internalValue = value.healthProbe;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._ports.internalValue = value.ports;
      this._startupProbe.internalValue = value.startupProbe;
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

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // deployment_timeout - computed: false, optional: true, required: false
  private _deploymentTimeout?: string; 
  public get deploymentTimeout() {
    return this.getStringAttribute('deployment_timeout');
  }
  public set deploymentTimeout(value: string) {
    this._deploymentTimeout = value;
  }
  public resetDeploymentTimeout() {
    this._deploymentTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTimeoutInput() {
    return this._deploymentTimeout;
  }

  // health_route - computed: false, optional: true, required: false
  private _healthRoute?: string; 
  public get healthRoute() {
    return this.getStringAttribute('health_route');
  }
  public set healthRoute(value: string) {
    this._healthRoute = value;
  }
  public resetHealthRoute() {
    this._healthRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthRouteInput() {
    return this._healthRoute;
  }

  // image_uri - computed: false, optional: false, required: true
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }

  // predict_route - computed: false, optional: true, required: false
  private _predictRoute?: string; 
  public get predictRoute() {
    return this.getStringAttribute('predict_route');
  }
  public set predictRoute(value: string) {
    this._predictRoute = value;
  }
  public resetPredictRoute() {
    this._predictRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predictRouteInput() {
    return this._predictRoute;
  }

  // shared_memory_size_mb - computed: false, optional: true, required: false
  private _sharedMemorySizeMb?: string; 
  public get sharedMemorySizeMb() {
    return this.getStringAttribute('shared_memory_size_mb');
  }
  public set sharedMemorySizeMb(value: string) {
    this._sharedMemorySizeMb = value;
  }
  public resetSharedMemorySizeMb() {
    this._sharedMemorySizeMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedMemorySizeMbInput() {
    return this._sharedMemorySizeMb;
  }

  // env - computed: false, optional: true, required: false
  private _env = new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // grpc_ports - computed: false, optional: true, required: false
  private _grpcPorts = new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecGrpcPortsList(this, "grpc_ports", false);
  public get grpcPorts() {
    return this._grpcPorts;
  }
  public putGrpcPorts(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecGrpcPorts[] | cdktf.IResolvable) {
    this._grpcPorts.internalValue = value;
  }
  public resetGrpcPorts() {
    this._grpcPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcPortsInput() {
    return this._grpcPorts.internalValue;
  }

  // health_probe - computed: false, optional: true, required: false
  private _healthProbe = new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbeOutputReference(this, "health_probe");
  public get healthProbe() {
    return this._healthProbe;
  }
  public putHealthProbe(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecHealthProbe) {
    this._healthProbe.internalValue = value;
  }
  public resetHealthProbe() {
    this._healthProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthProbeInput() {
    return this._healthProbe.internalValue;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecLivenessProbe) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // startup_probe - computed: false, optional: true, required: false
  private _startupProbe = new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbeOutputReference(this, "startup_probe");
  public get startupProbe() {
    return this._startupProbe;
  }
  public putStartupProbe(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecStartupProbe) {
    this._startupProbe.internalValue = value;
  }
  public resetStartupProbe() {
    this._startupProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupProbeInput() {
    return this._startupProbe.internalValue;
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentModelConfig {
  /**
  * Whether the user accepts the End User License Agreement (EULA)
  * for the model.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#accept_eula VertexAiEndpointWithModelGardenDeployment#accept_eula}
  */
  readonly acceptEula?: boolean | cdktf.IResolvable;
  /**
  * The Hugging Face read access token used to access the model
  * artifacts of gated models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#hugging_face_access_token VertexAiEndpointWithModelGardenDeployment#hugging_face_access_token}
  */
  readonly huggingFaceAccessToken?: string;
  /**
  * If true, the model will deploy with a cached version instead of directly
  * downloading the model artifacts from Hugging Face. This is suitable for
  * VPC-SC users with limited internet access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#hugging_face_cache_enabled VertexAiEndpointWithModelGardenDeployment#hugging_face_cache_enabled}
  */
  readonly huggingFaceCacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * The user-specified display name of the uploaded model. If not
  * set, a default name will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#model_display_name VertexAiEndpointWithModelGardenDeployment#model_display_name}
  */
  readonly modelDisplayName?: string;
  /**
  * container_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#container_spec VertexAiEndpointWithModelGardenDeployment#container_spec}
  */
  readonly containerSpec?: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpec;
}

export function vertexAiEndpointWithModelGardenDeploymentModelConfigToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_eula: cdktf.booleanToTerraform(struct!.acceptEula),
    hugging_face_access_token: cdktf.stringToTerraform(struct!.huggingFaceAccessToken),
    hugging_face_cache_enabled: cdktf.booleanToTerraform(struct!.huggingFaceCacheEnabled),
    model_display_name: cdktf.stringToTerraform(struct!.modelDisplayName),
    container_spec: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecToTerraform(struct!.containerSpec),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentModelConfigToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentModelConfigOutputReference | VertexAiEndpointWithModelGardenDeploymentModelConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_eula: {
      value: cdktf.booleanToHclTerraform(struct!.acceptEula),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hugging_face_access_token: {
      value: cdktf.stringToHclTerraform(struct!.huggingFaceAccessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hugging_face_cache_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.huggingFaceCacheEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    model_display_name: {
      value: cdktf.stringToHclTerraform(struct!.modelDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_spec: {
      value: vertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecToHclTerraform(struct!.containerSpec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentModelConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentModelConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptEula !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptEula = this._acceptEula;
    }
    if (this._huggingFaceAccessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.huggingFaceAccessToken = this._huggingFaceAccessToken;
    }
    if (this._huggingFaceCacheEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.huggingFaceCacheEnabled = this._huggingFaceCacheEnabled;
    }
    if (this._modelDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelDisplayName = this._modelDisplayName;
    }
    if (this._containerSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerSpec = this._containerSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentModelConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptEula = undefined;
      this._huggingFaceAccessToken = undefined;
      this._huggingFaceCacheEnabled = undefined;
      this._modelDisplayName = undefined;
      this._containerSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptEula = value.acceptEula;
      this._huggingFaceAccessToken = value.huggingFaceAccessToken;
      this._huggingFaceCacheEnabled = value.huggingFaceCacheEnabled;
      this._modelDisplayName = value.modelDisplayName;
      this._containerSpec.internalValue = value.containerSpec;
    }
  }

  // accept_eula - computed: false, optional: true, required: false
  private _acceptEula?: boolean | cdktf.IResolvable; 
  public get acceptEula() {
    return this.getBooleanAttribute('accept_eula');
  }
  public set acceptEula(value: boolean | cdktf.IResolvable) {
    this._acceptEula = value;
  }
  public resetAcceptEula() {
    this._acceptEula = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptEulaInput() {
    return this._acceptEula;
  }

  // hugging_face_access_token - computed: false, optional: true, required: false
  private _huggingFaceAccessToken?: string; 
  public get huggingFaceAccessToken() {
    return this.getStringAttribute('hugging_face_access_token');
  }
  public set huggingFaceAccessToken(value: string) {
    this._huggingFaceAccessToken = value;
  }
  public resetHuggingFaceAccessToken() {
    this._huggingFaceAccessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get huggingFaceAccessTokenInput() {
    return this._huggingFaceAccessToken;
  }

  // hugging_face_cache_enabled - computed: false, optional: true, required: false
  private _huggingFaceCacheEnabled?: boolean | cdktf.IResolvable; 
  public get huggingFaceCacheEnabled() {
    return this.getBooleanAttribute('hugging_face_cache_enabled');
  }
  public set huggingFaceCacheEnabled(value: boolean | cdktf.IResolvable) {
    this._huggingFaceCacheEnabled = value;
  }
  public resetHuggingFaceCacheEnabled() {
    this._huggingFaceCacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get huggingFaceCacheEnabledInput() {
    return this._huggingFaceCacheEnabled;
  }

  // model_display_name - computed: false, optional: true, required: false
  private _modelDisplayName?: string; 
  public get modelDisplayName() {
    return this.getStringAttribute('model_display_name');
  }
  public set modelDisplayName(value: string) {
    this._modelDisplayName = value;
  }
  public resetModelDisplayName() {
    this._modelDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelDisplayNameInput() {
    return this._modelDisplayName;
  }

  // container_spec - computed: false, optional: true, required: false
  private _containerSpec = new VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpecOutputReference(this, "container_spec");
  public get containerSpec() {
    return this._containerSpec;
  }
  public putContainerSpec(value: VertexAiEndpointWithModelGardenDeploymentModelConfigContainerSpec) {
    this._containerSpec.internalValue = value;
  }
  public resetContainerSpec() {
    this._containerSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerSpecInput() {
    return this._containerSpec.internalValue;
  }
}
export interface VertexAiEndpointWithModelGardenDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#create VertexAiEndpointWithModelGardenDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#delete VertexAiEndpointWithModelGardenDeployment#delete}
  */
  readonly delete?: string;
}

export function vertexAiEndpointWithModelGardenDeploymentTimeoutsToTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function vertexAiEndpointWithModelGardenDeploymentTimeoutsToHclTerraform(struct?: VertexAiEndpointWithModelGardenDeploymentTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiEndpointWithModelGardenDeploymentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VertexAiEndpointWithModelGardenDeploymentTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiEndpointWithModelGardenDeploymentTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment google_vertex_ai_endpoint_with_model_garden_deployment}
*/
export class VertexAiEndpointWithModelGardenDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_endpoint_with_model_garden_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VertexAiEndpointWithModelGardenDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VertexAiEndpointWithModelGardenDeployment to import
  * @param importFromId The id of the existing VertexAiEndpointWithModelGardenDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VertexAiEndpointWithModelGardenDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_endpoint_with_model_garden_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/vertex_ai_endpoint_with_model_garden_deployment google_vertex_ai_endpoint_with_model_garden_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VertexAiEndpointWithModelGardenDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: VertexAiEndpointWithModelGardenDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_endpoint_with_model_garden_deployment',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.46.0',
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
    this._huggingFaceModelId = config.huggingFaceModelId;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._publisherModelName = config.publisherModelName;
    this._deployConfig.internalValue = config.deployConfig;
    this._endpointConfig.internalValue = config.endpointConfig;
    this._modelConfig.internalValue = config.modelConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // hugging_face_model_id - computed: false, optional: true, required: false
  private _huggingFaceModelId?: string; 
  public get huggingFaceModelId() {
    return this.getStringAttribute('hugging_face_model_id');
  }
  public set huggingFaceModelId(value: string) {
    this._huggingFaceModelId = value;
  }
  public resetHuggingFaceModelId() {
    this._huggingFaceModelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get huggingFaceModelIdInput() {
    return this._huggingFaceModelId;
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

  // publisher_model_name - computed: false, optional: true, required: false
  private _publisherModelName?: string; 
  public get publisherModelName() {
    return this.getStringAttribute('publisher_model_name');
  }
  public set publisherModelName(value: string) {
    this._publisherModelName = value;
  }
  public resetPublisherModelName() {
    this._publisherModelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherModelNameInput() {
    return this._publisherModelName;
  }

  // deploy_config - computed: false, optional: true, required: false
  private _deployConfig = new VertexAiEndpointWithModelGardenDeploymentDeployConfigOutputReference(this, "deploy_config");
  public get deployConfig() {
    return this._deployConfig;
  }
  public putDeployConfig(value: VertexAiEndpointWithModelGardenDeploymentDeployConfig) {
    this._deployConfig.internalValue = value;
  }
  public resetDeployConfig() {
    this._deployConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployConfigInput() {
    return this._deployConfig.internalValue;
  }

  // endpoint_config - computed: false, optional: true, required: false
  private _endpointConfig = new VertexAiEndpointWithModelGardenDeploymentEndpointConfigOutputReference(this, "endpoint_config");
  public get endpointConfig() {
    return this._endpointConfig;
  }
  public putEndpointConfig(value: VertexAiEndpointWithModelGardenDeploymentEndpointConfig) {
    this._endpointConfig.internalValue = value;
  }
  public resetEndpointConfig() {
    this._endpointConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointConfigInput() {
    return this._endpointConfig.internalValue;
  }

  // model_config - computed: false, optional: true, required: false
  private _modelConfig = new VertexAiEndpointWithModelGardenDeploymentModelConfigOutputReference(this, "model_config");
  public get modelConfig() {
    return this._modelConfig;
  }
  public putModelConfig(value: VertexAiEndpointWithModelGardenDeploymentModelConfig) {
    this._modelConfig.internalValue = value;
  }
  public resetModelConfig() {
    this._modelConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelConfigInput() {
    return this._modelConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VertexAiEndpointWithModelGardenDeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VertexAiEndpointWithModelGardenDeploymentTimeouts) {
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
      hugging_face_model_id: cdktf.stringToTerraform(this._huggingFaceModelId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      publisher_model_name: cdktf.stringToTerraform(this._publisherModelName),
      deploy_config: vertexAiEndpointWithModelGardenDeploymentDeployConfigToTerraform(this._deployConfig.internalValue),
      endpoint_config: vertexAiEndpointWithModelGardenDeploymentEndpointConfigToTerraform(this._endpointConfig.internalValue),
      model_config: vertexAiEndpointWithModelGardenDeploymentModelConfigToTerraform(this._modelConfig.internalValue),
      timeouts: vertexAiEndpointWithModelGardenDeploymentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hugging_face_model_id: {
        value: cdktf.stringToHclTerraform(this._huggingFaceModelId),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      publisher_model_name: {
        value: cdktf.stringToHclTerraform(this._publisherModelName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_config: {
        value: vertexAiEndpointWithModelGardenDeploymentDeployConfigToHclTerraform(this._deployConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiEndpointWithModelGardenDeploymentDeployConfigList",
      },
      endpoint_config: {
        value: vertexAiEndpointWithModelGardenDeploymentEndpointConfigToHclTerraform(this._endpointConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiEndpointWithModelGardenDeploymentEndpointConfigList",
      },
      model_config: {
        value: vertexAiEndpointWithModelGardenDeploymentModelConfigToHclTerraform(this._modelConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiEndpointWithModelGardenDeploymentModelConfigList",
      },
      timeouts: {
        value: vertexAiEndpointWithModelGardenDeploymentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VertexAiEndpointWithModelGardenDeploymentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
