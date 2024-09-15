// https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VertexAiIndexEndpointDeployedIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * The user specified ID of the DeployedIndex. The ID can be up to 128 characters long and must start with a letter and only contain letters, numbers, and underscores. The ID must be unique within the project it is created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#deployed_index_id VertexAiIndexEndpointDeployedIndex#deployed_index_id}
  */
  readonly deployedIndexId: string;
  /**
  * The deployment group can be no longer than 64 characters (eg: 'test', 'prod'). If not set, we will use the 'default' deployment group.
  * Creating deployment_groups with reserved_ip_ranges is a recommended practice when the peered network has multiple peering ranges. This creates your deployments from predictable IP spaces for easier traffic administration. Also, one deployment_group (except 'default') can only be used with the same reserved_ip_ranges which means if the deployment_group has been used with reserved_ip_ranges: [a, b, c], using it with [a, b] or [d, e] is disallowed. [See the official documentation here](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.indexEndpoints#DeployedIndex.FIELDS.deployment_group).
  * Note: we only support up to 5 deployment groups (not including 'default').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#deployment_group VertexAiIndexEndpointDeployedIndex#deployment_group}
  */
  readonly deploymentGroup?: string;
  /**
  * The display name of the Index. The name can be up to 128 characters long and can consist of any UTF-8 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#display_name VertexAiIndexEndpointDeployedIndex#display_name}
  */
  readonly displayName?: string;
  /**
  * If true, private endpoint's access logs are sent to Cloud Logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#enable_access_logging VertexAiIndexEndpointDeployedIndex#enable_access_logging}
  */
  readonly enableAccessLogging?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#id VertexAiIndexEndpointDeployedIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Index this is the deployment of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#index VertexAiIndexEndpointDeployedIndex#index}
  */
  readonly index: string;
  /**
  * Identifies the index endpoint. Must be in the format
  * 'projects/{{project}}/locations/{{region}}/indexEndpoints/{{indexEndpoint}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#index_endpoint VertexAiIndexEndpointDeployedIndex#index_endpoint}
  */
  readonly indexEndpoint: string;
  /**
  * A list of reserved ip ranges under the VPC network that can be used for this DeployedIndex.
  * If set, we will deploy the index within the provided ip ranges. Otherwise, the index might be deployed to any ip ranges under the provided VPC network.
  * 
  * The value should be the name of the address (https://cloud.google.com/compute/docs/reference/rest/v1/addresses) Example: ['vertex-ai-ip-range'].
  * 
  * For more information about subnets and network IP ranges, please see https://cloud.google.com/vpc/docs/subnets#manually_created_subnet_ip_ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#reserved_ip_ranges VertexAiIndexEndpointDeployedIndex#reserved_ip_ranges}
  */
  readonly reservedIpRanges?: string[];
  /**
  * automatic_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#automatic_resources VertexAiIndexEndpointDeployedIndex#automatic_resources}
  */
  readonly automaticResources?: VertexAiIndexEndpointDeployedIndexAutomaticResources;
  /**
  * dedicated_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#dedicated_resources VertexAiIndexEndpointDeployedIndex#dedicated_resources}
  */
  readonly dedicatedResources?: VertexAiIndexEndpointDeployedIndexDedicatedResources;
  /**
  * deployed_index_auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#deployed_index_auth_config VertexAiIndexEndpointDeployedIndex#deployed_index_auth_config}
  */
  readonly deployedIndexAuthConfig?: VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#timeouts VertexAiIndexEndpointDeployedIndex#timeouts}
  */
  readonly timeouts?: VertexAiIndexEndpointDeployedIndexTimeouts;
}
export interface VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints {
}

export function vertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsToTerraform(struct?: VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsToHclTerraform(struct?: VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_address - computed: true, optional: false, required: false
  public get matchAddress() {
    return this.getStringAttribute('match_address');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
}

export class VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference {
    return new VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiIndexEndpointDeployedIndexPrivateEndpoints {
}

export function vertexAiIndexEndpointDeployedIndexPrivateEndpointsToTerraform(struct?: VertexAiIndexEndpointDeployedIndexPrivateEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vertexAiIndexEndpointDeployedIndexPrivateEndpointsToHclTerraform(struct?: VertexAiIndexEndpointDeployedIndexPrivateEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VertexAiIndexEndpointDeployedIndexPrivateEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiIndexEndpointDeployedIndexPrivateEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // match_grpc_address - computed: true, optional: false, required: false
  public get matchGrpcAddress() {
    return this.getStringAttribute('match_grpc_address');
  }

  // psc_automated_endpoints - computed: true, optional: false, required: false
  private _pscAutomatedEndpoints = new VertexAiIndexEndpointDeployedIndexPrivateEndpointsPscAutomatedEndpointsList(this, "psc_automated_endpoints", false);
  public get pscAutomatedEndpoints() {
    return this._pscAutomatedEndpoints;
  }

  // service_attachment - computed: true, optional: false, required: false
  public get serviceAttachment() {
    return this.getStringAttribute('service_attachment');
  }
}

export class VertexAiIndexEndpointDeployedIndexPrivateEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference {
    return new VertexAiIndexEndpointDeployedIndexPrivateEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiIndexEndpointDeployedIndexAutomaticResources {
  /**
  * The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. If maxReplicaCount is not set, the default value is minReplicaCount. The max allowed replica count is 1000.
  * 
  * The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. If the requested value is too large, the deployment will error, but if deployment succeeds then the ability to scale the model to that many replicas is guaranteed (barring service outages). If traffic against the DeployedModel increases beyond what its replicas at maximum may handle, a portion of the traffic will be dropped. If this value is not provided, a no upper bound for scaling under heavy traffic will be assume, though Vertex AI may be unable to scale beyond certain replica number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#max_replica_count VertexAiIndexEndpointDeployedIndex#max_replica_count}
  */
  readonly maxReplicaCount?: number;
  /**
  * The minimum number of replicas this DeployedModel will be always deployed on. If minReplicaCount is not set, the default value is 2 (we don't provide SLA when minReplicaCount=1).
  * 
  * If traffic against it increases, it may dynamically be deployed onto more replicas up to [maxReplicaCount](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/AutomaticResources#FIELDS.max_replica_count), and as traffic decreases, some of these extra replicas may be freed. If the requested value is too large, the deployment will error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#min_replica_count VertexAiIndexEndpointDeployedIndex#min_replica_count}
  */
  readonly minReplicaCount?: number;
}

export function vertexAiIndexEndpointDeployedIndexAutomaticResourcesToTerraform(struct?: VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference | VertexAiIndexEndpointDeployedIndexAutomaticResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_replica_count: cdktf.numberToTerraform(struct!.maxReplicaCount),
    min_replica_count: cdktf.numberToTerraform(struct!.minReplicaCount),
  }
}


export function vertexAiIndexEndpointDeployedIndexAutomaticResourcesToHclTerraform(struct?: VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference | VertexAiIndexEndpointDeployedIndexAutomaticResources): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiIndexEndpointDeployedIndexAutomaticResources | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiIndexEndpointDeployedIndexAutomaticResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxReplicaCount = undefined;
      this._minReplicaCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxReplicaCount = value.maxReplicaCount;
      this._minReplicaCount = value.minReplicaCount;
    }
  }

  // max_replica_count - computed: true, optional: true, required: false
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

  // min_replica_count - computed: true, optional: true, required: false
  private _minReplicaCount?: number; 
  public get minReplicaCount() {
    return this.getNumberAttribute('min_replica_count');
  }
  public set minReplicaCount(value: number) {
    this._minReplicaCount = value;
  }
  public resetMinReplicaCount() {
    this._minReplicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReplicaCountInput() {
    return this._minReplicaCount;
  }
}
export interface VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec {
  /**
  * The type of the machine.
  * 
  * See the [list of machine types supported for prediction](https://cloud.google.com/vertex-ai/docs/predictions/configure-compute#machine-types)
  * 
  * See the [list of machine types supported for custom training](https://cloud.google.com/vertex-ai/docs/training/configure-compute#machine-types).
  * 
  * For [DeployedModel](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.endpoints#DeployedModel) this field is optional, and the default value is n1-standard-2. For [BatchPredictionJob](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.batchPredictionJobs#BatchPredictionJob) or as part of [WorkerPoolSpec](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/CustomJobSpec#WorkerPoolSpec) this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#machine_type VertexAiIndexEndpointDeployedIndex#machine_type}
  */
  readonly machineType?: string;
}

export function vertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecToTerraform(struct?: VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference | VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_type: cdktf.stringToTerraform(struct!.machineType),
  }
}


export function vertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecToHclTerraform(struct?: VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference | VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._machineType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._machineType = value.machineType;
    }
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
export interface VertexAiIndexEndpointDeployedIndexDedicatedResources {
  /**
  * The maximum number of replicas this DeployedModel may be deployed on when the traffic against it increases. If maxReplicaCount is not set, the default value is minReplicaCount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#max_replica_count VertexAiIndexEndpointDeployedIndex#max_replica_count}
  */
  readonly maxReplicaCount?: number;
  /**
  * The minimum number of machine replicas this DeployedModel will be always deployed on. This value must be greater than or equal to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#min_replica_count VertexAiIndexEndpointDeployedIndex#min_replica_count}
  */
  readonly minReplicaCount: number;
  /**
  * machine_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#machine_spec VertexAiIndexEndpointDeployedIndex#machine_spec}
  */
  readonly machineSpec: VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec;
}

export function vertexAiIndexEndpointDeployedIndexDedicatedResourcesToTerraform(struct?: VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference | VertexAiIndexEndpointDeployedIndexDedicatedResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_replica_count: cdktf.numberToTerraform(struct!.maxReplicaCount),
    min_replica_count: cdktf.numberToTerraform(struct!.minReplicaCount),
    machine_spec: vertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecToTerraform(struct!.machineSpec),
  }
}


export function vertexAiIndexEndpointDeployedIndexDedicatedResourcesToHclTerraform(struct?: VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference | VertexAiIndexEndpointDeployedIndexDedicatedResources): any {
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
    machine_spec: {
      value: vertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecToHclTerraform(struct!.machineSpec),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiIndexEndpointDeployedIndexDedicatedResources | undefined {
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
    if (this._machineSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineSpec = this._machineSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiIndexEndpointDeployedIndexDedicatedResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxReplicaCount = undefined;
      this._minReplicaCount = undefined;
      this._machineSpec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxReplicaCount = value.maxReplicaCount;
      this._minReplicaCount = value.minReplicaCount;
      this._machineSpec.internalValue = value.machineSpec;
    }
  }

  // max_replica_count - computed: true, optional: true, required: false
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

  // machine_spec - computed: false, optional: false, required: true
  private _machineSpec = new VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpecOutputReference(this, "machine_spec");
  public get machineSpec() {
    return this._machineSpec;
  }
  public putMachineSpec(value: VertexAiIndexEndpointDeployedIndexDedicatedResourcesMachineSpec) {
    this._machineSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineSpecInput() {
    return this._machineSpec.internalValue;
  }
}
export interface VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider {
  /**
  * A list of allowed JWT issuers. Each entry must be a valid Google service account, in the following format: service-account-name@project-id.iam.gserviceaccount.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#allowed_issuers VertexAiIndexEndpointDeployedIndex#allowed_issuers}
  */
  readonly allowedIssuers?: string[];
  /**
  * The list of JWT audiences. that are allowed to access. A JWT containing any of these audiences will be accepted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#audiences VertexAiIndexEndpointDeployedIndex#audiences}
  */
  readonly audiences?: string[];
}

export function vertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderToTerraform(struct?: VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference | VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_issuers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedIssuers),
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
  }
}


export function vertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderToHclTerraform(struct?: VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference | VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_issuers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedIssuers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedIssuers !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIssuers = this._allowedIssuers;
    }
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedIssuers = undefined;
      this._audiences = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedIssuers = value.allowedIssuers;
      this._audiences = value.audiences;
    }
  }

  // allowed_issuers - computed: false, optional: true, required: false
  private _allowedIssuers?: string[]; 
  public get allowedIssuers() {
    return this.getListAttribute('allowed_issuers');
  }
  public set allowedIssuers(value: string[]) {
    this._allowedIssuers = value;
  }
  public resetAllowedIssuers() {
    this._allowedIssuers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIssuersInput() {
    return this._allowedIssuers;
  }

  // audiences - computed: false, optional: true, required: false
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  public resetAudiences() {
    this._audiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }
}
export interface VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig {
  /**
  * auth_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#auth_provider VertexAiIndexEndpointDeployedIndex#auth_provider}
  */
  readonly authProvider?: VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider;
}

export function vertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigToTerraform(struct?: VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference | VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_provider: vertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderToTerraform(struct!.authProvider),
  }
}


export function vertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigToHclTerraform(struct?: VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference | VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_provider: {
      value: vertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderToHclTerraform(struct!.authProvider),
      isBlock: true,
      type: "list",
      storageClassType: "VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authProvider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authProvider = this._authProvider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authProvider.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authProvider.internalValue = value.authProvider;
    }
  }

  // auth_provider - computed: false, optional: true, required: false
  private _authProvider = new VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProviderOutputReference(this, "auth_provider");
  public get authProvider() {
    return this._authProvider;
  }
  public putAuthProvider(value: VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigAuthProvider) {
    this._authProvider.internalValue = value;
  }
  public resetAuthProvider() {
    this._authProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProviderInput() {
    return this._authProvider.internalValue;
  }
}
export interface VertexAiIndexEndpointDeployedIndexTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#create VertexAiIndexEndpointDeployedIndex#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#delete VertexAiIndexEndpointDeployedIndex#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#update VertexAiIndexEndpointDeployedIndex#update}
  */
  readonly update?: string;
}

export function vertexAiIndexEndpointDeployedIndexTimeoutsToTerraform(struct?: VertexAiIndexEndpointDeployedIndexTimeouts | cdktf.IResolvable): any {
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


export function vertexAiIndexEndpointDeployedIndexTimeoutsToHclTerraform(struct?: VertexAiIndexEndpointDeployedIndexTimeouts | cdktf.IResolvable): any {
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

export class VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VertexAiIndexEndpointDeployedIndexTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VertexAiIndexEndpointDeployedIndexTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index google_vertex_ai_index_endpoint_deployed_index}
*/
export class VertexAiIndexEndpointDeployedIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_index_endpoint_deployed_index";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VertexAiIndexEndpointDeployedIndex resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VertexAiIndexEndpointDeployedIndex to import
  * @param importFromId The id of the existing VertexAiIndexEndpointDeployedIndex that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VertexAiIndexEndpointDeployedIndex to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vertex_ai_index_endpoint_deployed_index", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.2.0/docs/resources/vertex_ai_index_endpoint_deployed_index google_vertex_ai_index_endpoint_deployed_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VertexAiIndexEndpointDeployedIndexConfig
  */
  public constructor(scope: Construct, id: string, config: VertexAiIndexEndpointDeployedIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_index_endpoint_deployed_index',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.2.0',
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
    this._deployedIndexId = config.deployedIndexId;
    this._deploymentGroup = config.deploymentGroup;
    this._displayName = config.displayName;
    this._enableAccessLogging = config.enableAccessLogging;
    this._id = config.id;
    this._index = config.index;
    this._indexEndpoint = config.indexEndpoint;
    this._reservedIpRanges = config.reservedIpRanges;
    this._automaticResources.internalValue = config.automaticResources;
    this._dedicatedResources.internalValue = config.dedicatedResources;
    this._deployedIndexAuthConfig.internalValue = config.deployedIndexAuthConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deployed_index_id - computed: false, optional: false, required: true
  private _deployedIndexId?: string; 
  public get deployedIndexId() {
    return this.getStringAttribute('deployed_index_id');
  }
  public set deployedIndexId(value: string) {
    this._deployedIndexId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployedIndexIdInput() {
    return this._deployedIndexId;
  }

  // deployment_group - computed: false, optional: true, required: false
  private _deploymentGroup?: string; 
  public get deploymentGroup() {
    return this.getStringAttribute('deployment_group');
  }
  public set deploymentGroup(value: string) {
    this._deploymentGroup = value;
  }
  public resetDeploymentGroup() {
    this._deploymentGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentGroupInput() {
    return this._deploymentGroup;
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

  // enable_access_logging - computed: false, optional: true, required: false
  private _enableAccessLogging?: boolean | cdktf.IResolvable; 
  public get enableAccessLogging() {
    return this.getBooleanAttribute('enable_access_logging');
  }
  public set enableAccessLogging(value: boolean | cdktf.IResolvable) {
    this._enableAccessLogging = value;
  }
  public resetEnableAccessLogging() {
    this._enableAccessLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccessLoggingInput() {
    return this._enableAccessLogging;
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

  // index - computed: false, optional: false, required: true
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // index_endpoint - computed: false, optional: false, required: true
  private _indexEndpoint?: string; 
  public get indexEndpoint() {
    return this.getStringAttribute('index_endpoint');
  }
  public set indexEndpoint(value: string) {
    this._indexEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexEndpointInput() {
    return this._indexEndpoint;
  }

  // index_sync_time - computed: true, optional: false, required: false
  public get indexSyncTime() {
    return this.getStringAttribute('index_sync_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // private_endpoints - computed: true, optional: false, required: false
  private _privateEndpoints = new VertexAiIndexEndpointDeployedIndexPrivateEndpointsList(this, "private_endpoints", false);
  public get privateEndpoints() {
    return this._privateEndpoints;
  }

  // reserved_ip_ranges - computed: false, optional: true, required: false
  private _reservedIpRanges?: string[]; 
  public get reservedIpRanges() {
    return this.getListAttribute('reserved_ip_ranges');
  }
  public set reservedIpRanges(value: string[]) {
    this._reservedIpRanges = value;
  }
  public resetReservedIpRanges() {
    this._reservedIpRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIpRangesInput() {
    return this._reservedIpRanges;
  }

  // automatic_resources - computed: false, optional: true, required: false
  private _automaticResources = new VertexAiIndexEndpointDeployedIndexAutomaticResourcesOutputReference(this, "automatic_resources");
  public get automaticResources() {
    return this._automaticResources;
  }
  public putAutomaticResources(value: VertexAiIndexEndpointDeployedIndexAutomaticResources) {
    this._automaticResources.internalValue = value;
  }
  public resetAutomaticResources() {
    this._automaticResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticResourcesInput() {
    return this._automaticResources.internalValue;
  }

  // dedicated_resources - computed: false, optional: true, required: false
  private _dedicatedResources = new VertexAiIndexEndpointDeployedIndexDedicatedResourcesOutputReference(this, "dedicated_resources");
  public get dedicatedResources() {
    return this._dedicatedResources;
  }
  public putDedicatedResources(value: VertexAiIndexEndpointDeployedIndexDedicatedResources) {
    this._dedicatedResources.internalValue = value;
  }
  public resetDedicatedResources() {
    this._dedicatedResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedResourcesInput() {
    return this._dedicatedResources.internalValue;
  }

  // deployed_index_auth_config - computed: false, optional: true, required: false
  private _deployedIndexAuthConfig = new VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigOutputReference(this, "deployed_index_auth_config");
  public get deployedIndexAuthConfig() {
    return this._deployedIndexAuthConfig;
  }
  public putDeployedIndexAuthConfig(value: VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfig) {
    this._deployedIndexAuthConfig.internalValue = value;
  }
  public resetDeployedIndexAuthConfig() {
    this._deployedIndexAuthConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployedIndexAuthConfigInput() {
    return this._deployedIndexAuthConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VertexAiIndexEndpointDeployedIndexTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VertexAiIndexEndpointDeployedIndexTimeouts) {
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
      deployed_index_id: cdktf.stringToTerraform(this._deployedIndexId),
      deployment_group: cdktf.stringToTerraform(this._deploymentGroup),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_access_logging: cdktf.booleanToTerraform(this._enableAccessLogging),
      id: cdktf.stringToTerraform(this._id),
      index: cdktf.stringToTerraform(this._index),
      index_endpoint: cdktf.stringToTerraform(this._indexEndpoint),
      reserved_ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._reservedIpRanges),
      automatic_resources: vertexAiIndexEndpointDeployedIndexAutomaticResourcesToTerraform(this._automaticResources.internalValue),
      dedicated_resources: vertexAiIndexEndpointDeployedIndexDedicatedResourcesToTerraform(this._dedicatedResources.internalValue),
      deployed_index_auth_config: vertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigToTerraform(this._deployedIndexAuthConfig.internalValue),
      timeouts: vertexAiIndexEndpointDeployedIndexTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deployed_index_id: {
        value: cdktf.stringToHclTerraform(this._deployedIndexId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_group: {
        value: cdktf.stringToHclTerraform(this._deploymentGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_access_logging: {
        value: cdktf.booleanToHclTerraform(this._enableAccessLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index: {
        value: cdktf.stringToHclTerraform(this._index),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_endpoint: {
        value: cdktf.stringToHclTerraform(this._indexEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserved_ip_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._reservedIpRanges),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      automatic_resources: {
        value: vertexAiIndexEndpointDeployedIndexAutomaticResourcesToHclTerraform(this._automaticResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiIndexEndpointDeployedIndexAutomaticResourcesList",
      },
      dedicated_resources: {
        value: vertexAiIndexEndpointDeployedIndexDedicatedResourcesToHclTerraform(this._dedicatedResources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiIndexEndpointDeployedIndexDedicatedResourcesList",
      },
      deployed_index_auth_config: {
        value: vertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigToHclTerraform(this._deployedIndexAuthConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VertexAiIndexEndpointDeployedIndexDeployedIndexAuthConfigList",
      },
      timeouts: {
        value: vertexAiIndexEndpointDeployedIndexTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VertexAiIndexEndpointDeployedIndexTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
