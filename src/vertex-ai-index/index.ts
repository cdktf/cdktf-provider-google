/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VertexAiIndexConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the Index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#description VertexAiIndex#description}
  */
  readonly description?: string;
  /**
  * The display name of the Index. The name can be up to 128 characters long and can consist of any UTF-8 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#display_name VertexAiIndex#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#id VertexAiIndex#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The update method to use with this Index. The value must be the followings. If not set, BATCH_UPDATE will be used by default.
* BATCH_UPDATE: user can call indexes.patch with files on Cloud Storage of datapoints to update.
* STREAM_UPDATE: user can call indexes.upsertDatapoints/DeleteDatapoints to update the Index and the updates will be applied in corresponding DeployedIndexes in nearly real-time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#index_update_method VertexAiIndex#index_update_method}
  */
  readonly indexUpdateMethod?: string;
  /**
  * The labels with user-defined metadata to organize your Indexes.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#labels VertexAiIndex#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#project VertexAiIndex#project}
  */
  readonly project?: string;
  /**
  * The region of the index. eg us-central1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#region VertexAiIndex#region}
  */
  readonly region?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#metadata VertexAiIndex#metadata}
  */
  readonly metadata?: VertexAiIndexMetadata;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#timeouts VertexAiIndex#timeouts}
  */
  readonly timeouts?: VertexAiIndexTimeouts;
}
export interface VertexAiIndexDeployedIndexes {
}

export function vertexAiIndexDeployedIndexesToTerraform(struct?: VertexAiIndexDeployedIndexes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class VertexAiIndexDeployedIndexesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VertexAiIndexDeployedIndexes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiIndexDeployedIndexes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deployed_index_id - computed: true, optional: false, required: false
  public get deployedIndexId() {
    return this.getStringAttribute('deployed_index_id');
  }

  // index_endpoint - computed: true, optional: false, required: false
  public get indexEndpoint() {
    return this.getStringAttribute('index_endpoint');
  }
}

export class VertexAiIndexDeployedIndexesList extends cdktf.ComplexList {

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
  public get(index: number): VertexAiIndexDeployedIndexesOutputReference {
    return new VertexAiIndexDeployedIndexesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiIndexIndexStats {
}

export function vertexAiIndexIndexStatsToTerraform(struct?: VertexAiIndexIndexStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class VertexAiIndexIndexStatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VertexAiIndexIndexStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiIndexIndexStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // shards_count - computed: true, optional: false, required: false
  public get shardsCount() {
    return this.getNumberAttribute('shards_count');
  }

  // vectors_count - computed: true, optional: false, required: false
  public get vectorsCount() {
    return this.getStringAttribute('vectors_count');
  }
}

export class VertexAiIndexIndexStatsList extends cdktf.ComplexList {

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
  public get(index: number): VertexAiIndexIndexStatsOutputReference {
    return new VertexAiIndexIndexStatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig {
}

export function vertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigToTerraform(struct?: VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference | VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig {
  /**
  * Number of embeddings on each leaf node. The default value is 1000 if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#leaf_node_embedding_count VertexAiIndex#leaf_node_embedding_count}
  */
  readonly leafNodeEmbeddingCount?: number;
  /**
  * The default percentage of leaf nodes that any query may be searched. Must be in
range 1-100, inclusive. The default value is 10 (means 10%) if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#leaf_nodes_to_search_percent VertexAiIndex#leaf_nodes_to_search_percent}
  */
  readonly leafNodesToSearchPercent?: number;
}

export function vertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigToTerraform(struct?: VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference | VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    leaf_node_embedding_count: cdktf.numberToTerraform(struct!.leafNodeEmbeddingCount),
    leaf_nodes_to_search_percent: cdktf.numberToTerraform(struct!.leafNodesToSearchPercent),
  }
}

export class VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leafNodeEmbeddingCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.leafNodeEmbeddingCount = this._leafNodeEmbeddingCount;
    }
    if (this._leafNodesToSearchPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.leafNodesToSearchPercent = this._leafNodesToSearchPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._leafNodeEmbeddingCount = undefined;
      this._leafNodesToSearchPercent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._leafNodeEmbeddingCount = value.leafNodeEmbeddingCount;
      this._leafNodesToSearchPercent = value.leafNodesToSearchPercent;
    }
  }

  // leaf_node_embedding_count - computed: false, optional: true, required: false
  private _leafNodeEmbeddingCount?: number; 
  public get leafNodeEmbeddingCount() {
    return this.getNumberAttribute('leaf_node_embedding_count');
  }
  public set leafNodeEmbeddingCount(value: number) {
    this._leafNodeEmbeddingCount = value;
  }
  public resetLeafNodeEmbeddingCount() {
    this._leafNodeEmbeddingCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafNodeEmbeddingCountInput() {
    return this._leafNodeEmbeddingCount;
  }

  // leaf_nodes_to_search_percent - computed: false, optional: true, required: false
  private _leafNodesToSearchPercent?: number; 
  public get leafNodesToSearchPercent() {
    return this.getNumberAttribute('leaf_nodes_to_search_percent');
  }
  public set leafNodesToSearchPercent(value: number) {
    this._leafNodesToSearchPercent = value;
  }
  public resetLeafNodesToSearchPercent() {
    this._leafNodesToSearchPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leafNodesToSearchPercentInput() {
    return this._leafNodesToSearchPercent;
  }
}
export interface VertexAiIndexMetadataConfigAlgorithmConfig {
  /**
  * brute_force_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#brute_force_config VertexAiIndex#brute_force_config}
  */
  readonly bruteForceConfig?: VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig;
  /**
  * tree_ah_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#tree_ah_config VertexAiIndex#tree_ah_config}
  */
  readonly treeAhConfig?: VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig;
}

export function vertexAiIndexMetadataConfigAlgorithmConfigToTerraform(struct?: VertexAiIndexMetadataConfigAlgorithmConfigOutputReference | VertexAiIndexMetadataConfigAlgorithmConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    brute_force_config: vertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigToTerraform(struct!.bruteForceConfig),
    tree_ah_config: vertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigToTerraform(struct!.treeAhConfig),
  }
}

export class VertexAiIndexMetadataConfigAlgorithmConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiIndexMetadataConfigAlgorithmConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bruteForceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bruteForceConfig = this._bruteForceConfig?.internalValue;
    }
    if (this._treeAhConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.treeAhConfig = this._treeAhConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiIndexMetadataConfigAlgorithmConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bruteForceConfig.internalValue = undefined;
      this._treeAhConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bruteForceConfig.internalValue = value.bruteForceConfig;
      this._treeAhConfig.internalValue = value.treeAhConfig;
    }
  }

  // brute_force_config - computed: false, optional: true, required: false
  private _bruteForceConfig = new VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfigOutputReference(this, "brute_force_config");
  public get bruteForceConfig() {
    return this._bruteForceConfig;
  }
  public putBruteForceConfig(value: VertexAiIndexMetadataConfigAlgorithmConfigBruteForceConfig) {
    this._bruteForceConfig.internalValue = value;
  }
  public resetBruteForceConfig() {
    this._bruteForceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bruteForceConfigInput() {
    return this._bruteForceConfig.internalValue;
  }

  // tree_ah_config - computed: false, optional: true, required: false
  private _treeAhConfig = new VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfigOutputReference(this, "tree_ah_config");
  public get treeAhConfig() {
    return this._treeAhConfig;
  }
  public putTreeAhConfig(value: VertexAiIndexMetadataConfigAlgorithmConfigTreeAhConfig) {
    this._treeAhConfig.internalValue = value;
  }
  public resetTreeAhConfig() {
    this._treeAhConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treeAhConfigInput() {
    return this._treeAhConfig.internalValue;
  }
}
export interface VertexAiIndexMetadataConfig {
  /**
  * The default number of neighbors to find via approximate search before exact reordering is
performed. Exact reordering is a procedure where results returned by an
approximate search algorithm are reordered via a more expensive distance computation.
Required if tree-AH algorithm is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#approximate_neighbors_count VertexAiIndex#approximate_neighbors_count}
  */
  readonly approximateNeighborsCount?: number;
  /**
  * The number of dimensions of the input vectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#dimensions VertexAiIndex#dimensions}
  */
  readonly dimensions: number;
  /**
  * The distance measure used in nearest neighbor search. The value must be one of the followings:
* SQUARED_L2_DISTANCE: Euclidean (L_2) Distance
* L1_DISTANCE: Manhattan (L_1) Distance
* COSINE_DISTANCE: Cosine Distance. Defined as 1 - cosine similarity.
* DOT_PRODUCT_DISTANCE: Dot Product Distance. Defined as a negative of the dot product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#distance_measure_type VertexAiIndex#distance_measure_type}
  */
  readonly distanceMeasureType?: string;
  /**
  * Type of normalization to be carried out on each vector. The value must be one of the followings:
* UNIT_L2_NORM: Unit L2 normalization type
* NONE: No normalization type is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#feature_norm_type VertexAiIndex#feature_norm_type}
  */
  readonly featureNormType?: string;
  /**
  * Index data is split into equal parts to be processed. These are called "shards".
The shard size must be specified when creating an index. The value must be one of the followings:
* SHARD_SIZE_SMALL: Small (2GB)
* SHARD_SIZE_MEDIUM: Medium (20GB)
* SHARD_SIZE_LARGE: Large (50GB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#shard_size VertexAiIndex#shard_size}
  */
  readonly shardSize?: string;
  /**
  * algorithm_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#algorithm_config VertexAiIndex#algorithm_config}
  */
  readonly algorithmConfig?: VertexAiIndexMetadataConfigAlgorithmConfig;
}

export function vertexAiIndexMetadataConfigToTerraform(struct?: VertexAiIndexMetadataConfigOutputReference | VertexAiIndexMetadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approximate_neighbors_count: cdktf.numberToTerraform(struct!.approximateNeighborsCount),
    dimensions: cdktf.numberToTerraform(struct!.dimensions),
    distance_measure_type: cdktf.stringToTerraform(struct!.distanceMeasureType),
    feature_norm_type: cdktf.stringToTerraform(struct!.featureNormType),
    shard_size: cdktf.stringToTerraform(struct!.shardSize),
    algorithm_config: vertexAiIndexMetadataConfigAlgorithmConfigToTerraform(struct!.algorithmConfig),
  }
}

export class VertexAiIndexMetadataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiIndexMetadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approximateNeighborsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.approximateNeighborsCount = this._approximateNeighborsCount;
    }
    if (this._dimensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions;
    }
    if (this._distanceMeasureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.distanceMeasureType = this._distanceMeasureType;
    }
    if (this._featureNormType !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureNormType = this._featureNormType;
    }
    if (this._shardSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardSize = this._shardSize;
    }
    if (this._algorithmConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithmConfig = this._algorithmConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiIndexMetadataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._approximateNeighborsCount = undefined;
      this._dimensions = undefined;
      this._distanceMeasureType = undefined;
      this._featureNormType = undefined;
      this._shardSize = undefined;
      this._algorithmConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._approximateNeighborsCount = value.approximateNeighborsCount;
      this._dimensions = value.dimensions;
      this._distanceMeasureType = value.distanceMeasureType;
      this._featureNormType = value.featureNormType;
      this._shardSize = value.shardSize;
      this._algorithmConfig.internalValue = value.algorithmConfig;
    }
  }

  // approximate_neighbors_count - computed: false, optional: true, required: false
  private _approximateNeighborsCount?: number; 
  public get approximateNeighborsCount() {
    return this.getNumberAttribute('approximate_neighbors_count');
  }
  public set approximateNeighborsCount(value: number) {
    this._approximateNeighborsCount = value;
  }
  public resetApproximateNeighborsCount() {
    this._approximateNeighborsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approximateNeighborsCountInput() {
    return this._approximateNeighborsCount;
  }

  // dimensions - computed: false, optional: false, required: true
  private _dimensions?: number; 
  public get dimensions() {
    return this.getNumberAttribute('dimensions');
  }
  public set dimensions(value: number) {
    this._dimensions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions;
  }

  // distance_measure_type - computed: false, optional: true, required: false
  private _distanceMeasureType?: string; 
  public get distanceMeasureType() {
    return this.getStringAttribute('distance_measure_type');
  }
  public set distanceMeasureType(value: string) {
    this._distanceMeasureType = value;
  }
  public resetDistanceMeasureType() {
    this._distanceMeasureType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceMeasureTypeInput() {
    return this._distanceMeasureType;
  }

  // feature_norm_type - computed: false, optional: true, required: false
  private _featureNormType?: string; 
  public get featureNormType() {
    return this.getStringAttribute('feature_norm_type');
  }
  public set featureNormType(value: string) {
    this._featureNormType = value;
  }
  public resetFeatureNormType() {
    this._featureNormType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNormTypeInput() {
    return this._featureNormType;
  }

  // shard_size - computed: true, optional: true, required: false
  private _shardSize?: string; 
  public get shardSize() {
    return this.getStringAttribute('shard_size');
  }
  public set shardSize(value: string) {
    this._shardSize = value;
  }
  public resetShardSize() {
    this._shardSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardSizeInput() {
    return this._shardSize;
  }

  // algorithm_config - computed: false, optional: true, required: false
  private _algorithmConfig = new VertexAiIndexMetadataConfigAlgorithmConfigOutputReference(this, "algorithm_config");
  public get algorithmConfig() {
    return this._algorithmConfig;
  }
  public putAlgorithmConfig(value: VertexAiIndexMetadataConfigAlgorithmConfig) {
    this._algorithmConfig.internalValue = value;
  }
  public resetAlgorithmConfig() {
    this._algorithmConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmConfigInput() {
    return this._algorithmConfig.internalValue;
  }
}
export interface VertexAiIndexMetadata {
  /**
  * Allows inserting, updating  or deleting the contents of the Matching Engine Index.
The string must be a valid Cloud Storage directory path. If this
field is set when calling IndexService.UpdateIndex, then no other
Index field can be also updated as part of the same call.
The expected structure and format of the files this URI points to is
described at https://cloud.google.com/vertex-ai/docs/matching-engine/using-matching-engine#input-data-format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#contents_delta_uri VertexAiIndex#contents_delta_uri}
  */
  readonly contentsDeltaUri: string;
  /**
  * If this field is set together with contentsDeltaUri when calling IndexService.UpdateIndex,
then existing content of the Index will be replaced by the data from the contentsDeltaUri.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#is_complete_overwrite VertexAiIndex#is_complete_overwrite}
  */
  readonly isCompleteOverwrite?: boolean | cdktf.IResolvable;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#config VertexAiIndex#config}
  */
  readonly config?: VertexAiIndexMetadataConfig;
}

export function vertexAiIndexMetadataToTerraform(struct?: VertexAiIndexMetadataOutputReference | VertexAiIndexMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contents_delta_uri: cdktf.stringToTerraform(struct!.contentsDeltaUri),
    is_complete_overwrite: cdktf.booleanToTerraform(struct!.isCompleteOverwrite),
    config: vertexAiIndexMetadataConfigToTerraform(struct!.config),
  }
}

export class VertexAiIndexMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VertexAiIndexMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentsDeltaUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentsDeltaUri = this._contentsDeltaUri;
    }
    if (this._isCompleteOverwrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCompleteOverwrite = this._isCompleteOverwrite;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VertexAiIndexMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentsDeltaUri = undefined;
      this._isCompleteOverwrite = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentsDeltaUri = value.contentsDeltaUri;
      this._isCompleteOverwrite = value.isCompleteOverwrite;
      this._config.internalValue = value.config;
    }
  }

  // contents_delta_uri - computed: false, optional: false, required: true
  private _contentsDeltaUri?: string; 
  public get contentsDeltaUri() {
    return this.getStringAttribute('contents_delta_uri');
  }
  public set contentsDeltaUri(value: string) {
    this._contentsDeltaUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentsDeltaUriInput() {
    return this._contentsDeltaUri;
  }

  // is_complete_overwrite - computed: false, optional: true, required: false
  private _isCompleteOverwrite?: boolean | cdktf.IResolvable; 
  public get isCompleteOverwrite() {
    return this.getBooleanAttribute('is_complete_overwrite');
  }
  public set isCompleteOverwrite(value: boolean | cdktf.IResolvable) {
    this._isCompleteOverwrite = value;
  }
  public resetIsCompleteOverwrite() {
    this._isCompleteOverwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCompleteOverwriteInput() {
    return this._isCompleteOverwrite;
  }

  // config - computed: false, optional: true, required: false
  private _config = new VertexAiIndexMetadataConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: VertexAiIndexMetadataConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}
export interface VertexAiIndexTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#create VertexAiIndex#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#delete VertexAiIndex#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index#update VertexAiIndex#update}
  */
  readonly update?: string;
}

export function vertexAiIndexTimeoutsToTerraform(struct?: VertexAiIndexTimeouts | cdktf.IResolvable): any {
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

export class VertexAiIndexTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VertexAiIndexTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: VertexAiIndexTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index google_vertex_ai_index}
*/
export class VertexAiIndex extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vertex_ai_index";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.0.0/docs/resources/vertex_ai_index google_vertex_ai_index} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VertexAiIndexConfig
  */
  public constructor(scope: Construct, id: string, config: VertexAiIndexConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_index',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.0.0',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._indexUpdateMethod = config.indexUpdateMethod;
    this._labels = config.labels;
    this._project = config.project;
    this._region = config.region;
    this._metadata.internalValue = config.metadata;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deployed_indexes - computed: true, optional: false, required: false
  private _deployedIndexes = new VertexAiIndexDeployedIndexesList(this, "deployed_indexes", false);
  public get deployedIndexes() {
    return this._deployedIndexes;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // index_stats - computed: true, optional: false, required: false
  private _indexStats = new VertexAiIndexIndexStatsList(this, "index_stats", false);
  public get indexStats() {
    return this._indexStats;
  }

  // index_update_method - computed: false, optional: true, required: false
  private _indexUpdateMethod?: string; 
  public get indexUpdateMethod() {
    return this.getStringAttribute('index_update_method');
  }
  public set indexUpdateMethod(value: string) {
    this._indexUpdateMethod = value;
  }
  public resetIndexUpdateMethod() {
    this._indexUpdateMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexUpdateMethodInput() {
    return this._indexUpdateMethod;
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

  // metadata_schema_uri - computed: true, optional: false, required: false
  public get metadataSchemaUri() {
    return this.getStringAttribute('metadata_schema_uri');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new VertexAiIndexMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: VertexAiIndexMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VertexAiIndexTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VertexAiIndexTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      index_update_method: cdktf.stringToTerraform(this._indexUpdateMethod),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      metadata: vertexAiIndexMetadataToTerraform(this._metadata.internalValue),
      timeouts: vertexAiIndexTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
