// https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/vertex_ai_deployment_resource_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VertexAiDeploymentResourcePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/vertex_ai_deployment_resource_pool#id VertexAiDeploymentResourcePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name of deployment resource pool. The maximum length is 63 characters, and valid characters are '/^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/vertex_ai_deployment_resource_pool#name VertexAiDeploymentResourcePool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/vertex_ai_deployment_resource_pool#project VertexAiDeploymentResourcePool#project}
  */
  readonly project?: string;
  /**
  * The region of deployment resource pool. eg us-central1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/vertex_ai_deployment_resource_pool#region VertexAiDeploymentResourcePool#region}
  */
  readonly region?: string;
  /**
  * dedicated_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/vertex_ai_deployment_resource_pool#dedicated_resources VertexAiDeploymentResourcePool#dedicated_resources}
  */
  readonly dedicatedResources?: VertexAiDeploymentResourcePoolDedicatedResources;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/vertex_ai_deployment_resource_pool#timeouts VertexAiDeploymentResourcePool#timeouts}
  */
  readonly timeouts?: VertexAiDeploymentResourcePoolTimeouts;
}
export interface VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs {
  /**
  * The resource metric name. Supported metrics: For Online Prediction: * 'aiplatform.googleapis.com/prediction/online/accelerator/duty_cycle' * 'aiplatform.googleapis.com/prediction/online/cpu/utilization'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/vertex_ai_deployment_resource_pool#metric_name VertexAiDeploymentResourcePool#metric_name}
  */
  readonly metricName: string;
  /**
  * The target resource utilization in percentage (1% - 100%) for the given metric; once the real usage deviates from the target by a certain percentage, the machine replicas change. The default value is 60 (representing 60%) if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/vertex_ai_deployment_resource_pool#target VertexAiDeploymentResourcePool#target}
  */
  readonly target?: number;
}

export function vertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsToTerraform(struct?: VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    target: cdktf.numberToTerraform(struct!.target),
  }
}


export function vertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsToHclTerraform(struct?: VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs | cdktf.IResolvable): any {
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

export class VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs | cdktf.IResolvable | undefined) {
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

export class VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList extends cdktf.ComplexList {
  public internalValue? : VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs[] | cdktf.IResolvable

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
  public get(index: number): VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference {
    return new VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec {
  /**
  * The number of accelerators to attach to the machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/vertex_ai_deployment_resource_pool#accelerator_count VertexAiDeploymentResourcePool#accelerator_count}
  */
  readonly acceleratorCount?: number;
  /**
  * The type of accelerator(s) that may be attached to the machine as per accelerator_count. See possible values [here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/MachineSpec#AcceleratorType).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/vertex_ai_deployment_resource_pool#accelerator_type VertexAiDeploymentResourcePool#accelerator_type}
  */
  readonly acceleratorType?: string;
  /**
  * The type of the machine. See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/vertex_ai_deployment_resource_pool#machine_type VertexAiDeploymentResourcePool#machine_type}
  */
  readonly machineType?: string;
}

export function vertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecToTerraform(struct?: VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference | VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
  }
}


export function vertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecToHclTerraform(struct?: VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference | VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceleratorCount = undefined;
      this._acceleratorType = undefined;
      this._machineType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceleratorCount = value.acceleratorCount;
      this._acceleratorType = value.acceleratorType;
      this._machineType = value.machineType;
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
}
export interface VertexAiDeploymentResourcePoolDedicatedResources {
  /**
  * The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. If the requested value is too large, the deployment will error, but if deployment succeeds then the ability to scale the model to that many replicas is guaranteed (barring service outages). If traffic against the DeployedModel increases beyond what its replicas at maximum may handle, a portion of the traffic will be dropped. If this value is not provided, will use min_replica_count as the default value. The value of this field impacts the charge against Vertex CPU and GPU quotas. Specifically, you will be charged for max_replica_count * number of cores in the selected machine type) and (max_replica_count * number of GPUs per replica in the selected machine type).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/vertex_ai_deployment_resource_pool#max_replica_count VertexAiDeploymentResourcePool#max_replica_count}
  */
  readonly maxReplicaCount?: number;
  /**
  * The minimum number of machine replicas this DeployedModel will be always deployed on. This value must be greater than or equal to 1. If traffic against the DeployedModel increases, it may dynamically be deployed onto more replicas, and as traffic decreases, some of these extra replicas may be freed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/vertex_ai_deployment_resource_pool#min_replica_count VertexAiDeploymentResourcePool#min_replica_count}
  */
  readonly minReplicaCount: number;
  /**
  * autoscaling_metric_specs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/vertex_ai_deployment_resource_pool#autoscaling_metric_specs VertexAiDeploymentResourcePool#autoscaling_metric_specs}
  */
  readonly autoscalingMetricSpecs?: VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs[] | cdktf.IResolvable;
  /**
  * machine_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/vertex_ai_deployment_resource_pool#machine_spec VertexAiDeploymentResourcePool#machine_spec}
  */
  readonly machineSpec: VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec;
}

export function vertexAiDeploymentResourcePoolDedicatedResourcesToTerraform(struct?: VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference | VertexAiDeploymentResourcePoolDedicatedResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_replica_count: cdktf.numberToTerraform(struct!.maxReplicaCount),
    min_replica_count: cdktf.numberToTerraform(struct!.minReplicaCount),
    autoscaling_metric_specs: cdktf.listMapper(vertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsToTerraform, true)(struct!.autoscalingMetricSpecs),
    machine_spec: vertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecToTerraform(struct!.machineSpec),
  }
}


export function vertexAiDeploymentResourcePoolDedicatedResourcesToHclTerraform(struct?: VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference | VertexAiDeploymentResourcePoolDedicatedResources): any {
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
    autoscaling_metric_specs: {
      value: cdktf.listMapperHcl(vertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsToHclTerraform, true)(struct!.autoscalingMetricSpecs),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList",
    },
    machine_spec: {
      value: vertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecToHclTerraform(struct!.machineSpec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiDeploymentResourcePoolDedicatedResources | undefined {
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

  public set internalValue(value: VertexAiDeploymentResourcePoolDedicatedResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxReplicaCount = undefined;
      this._minReplicaCount = undefined;
      this._autoscalingMetricSpecs.internalValue = undefined;
      this._machineSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxReplicaCount = value.maxReplicaCount;
      this._minReplicaCount = value.minReplicaCount;
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

  // autoscaling_metric_specs - computed: false, optional: true, required: false
  private _autoscalingMetricSpecs = new VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecsList(this, "autoscaling_metric_specs", false);
  public get autoscalingMetricSpecs() {
    return this._autoscalingMetricSpecs;
  }
  public putAutoscalingMetricSpecs(value: VertexAiDeploymentResourcePoolDedicatedResourcesAutoscalingMetricSpecs[] | cdktf.IResolvable) {
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
  private _machineSpec = new VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpecOutputReference(this, "machine_spec");
  public get machineSpec() {
    return this._machineSpec;
  }
  public putMachineSpec(value: VertexAiDeploymentResourcePoolDedicatedResourcesMachineSpec) {
    this._machineSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineSpecInput() {
    return this._machineSpec.internalValue;
  }
}
export interface VertexAiDeploymentResourcePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/vertex_ai_deployment_resource_pool#create VertexAiDeploymentResourcePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/vertex_ai_deployment_resource_pool#delete VertexAiDeploymentResourcePool#delete}
  */
  readonly delete?: string;
}

export function vertexAiDeploymentResourcePoolTimeoutsToTerraform(struct?: VertexAiDeploymentResourcePoolTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function vertexAiDeploymentResourcePoolTimeoutsToHclTerraform(struct?: VertexAiDeploymentResourcePoolTimeouts | cdktf.IResolvable): any {
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

export class VertexAiDeploymentResourcePoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VertexAiDeploymentResourcePoolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VertexAiDeploymentResourcePoolTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/vertex_ai_deployment_resource_pool google_vertex_ai_deployment_resource_pool}
*/
export class VertexAiDeploymentResourcePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_deployment_resource_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VertexAiDeploymentResourcePool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VertexAiDeploymentResourcePool to import
  * @param importFromId The id of the existing VertexAiDeploymentResourcePool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/vertex_ai_deployment_resource_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VertexAiDeploymentResourcePool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_deployment_resource_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/vertex_ai_deployment_resource_pool google_vertex_ai_deployment_resource_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VertexAiDeploymentResourcePoolConfig
  */
  public constructor(scope: Construct, id: string, config: VertexAiDeploymentResourcePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_deployment_resource_pool',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.8.0',
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
    this._dedicatedResources.internalValue = config.dedicatedResources;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // dedicated_resources - computed: false, optional: true, required: false
  private _dedicatedResources = new VertexAiDeploymentResourcePoolDedicatedResourcesOutputReference(this, "dedicated_resources");
  public get dedicatedResources() {
    return this._dedicatedResources;
  }
  public putDedicatedResources(value: VertexAiDeploymentResourcePoolDedicatedResources) {
    this._dedicatedResources.internalValue = value;
  }
  public resetDedicatedResources() {
    this._dedicatedResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedResourcesInput() {
    return this._dedicatedResources.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VertexAiDeploymentResourcePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VertexAiDeploymentResourcePoolTimeouts) {
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
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      dedicated_resources: vertexAiDeploymentResourcePoolDedicatedResourcesToTerraform(this._dedicatedResources.internalValue),
      timeouts: vertexAiDeploymentResourcePoolTimeoutsToTerraform(this._timeouts.internalValue),
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
      dedicated_resources: {
        value: vertexAiDeploymentResourcePoolDedicatedResourcesToHclTerraform(this._dedicatedResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiDeploymentResourcePoolDedicatedResourcesList",
      },
      timeouts: {
        value: vertexAiDeploymentResourcePoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VertexAiDeploymentResourcePoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
