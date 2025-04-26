/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BlockchainNodeEngineBlockchainNodesConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the requesting object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes#blockchain_node_id BlockchainNodeEngineBlockchainNodes#blockchain_node_id}
  */
  readonly blockchainNodeId: string;
  /**
  * User-provided key-value pairs Possible values: ["ETHEREUM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes#blockchain_type BlockchainNodeEngineBlockchainNodes#blockchain_type}
  */
  readonly blockchainType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes#id BlockchainNodeEngineBlockchainNodes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-provided key-value pairs
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes#labels BlockchainNodeEngineBlockchainNodes#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Location of Blockchain Node being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes#location BlockchainNodeEngineBlockchainNodes#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes#project BlockchainNodeEngineBlockchainNodes#project}
  */
  readonly project?: string;
  /**
  * ethereum_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes#ethereum_details BlockchainNodeEngineBlockchainNodes#ethereum_details}
  */
  readonly ethereumDetails?: BlockchainNodeEngineBlockchainNodesEthereumDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes#timeouts BlockchainNodeEngineBlockchainNodes#timeouts}
  */
  readonly timeouts?: BlockchainNodeEngineBlockchainNodesTimeouts;
}
export interface BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo {
}

export function blockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoToTerraform(struct?: BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function blockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoToHclTerraform(struct?: BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // json_rpc_api_endpoint - computed: true, optional: false, required: false
  public get jsonRpcApiEndpoint() {
    return this.getStringAttribute('json_rpc_api_endpoint');
  }

  // websockets_api_endpoint - computed: true, optional: false, required: false
  public get websocketsApiEndpoint() {
    return this.getStringAttribute('websockets_api_endpoint');
  }
}

export class BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList extends cdktf.ComplexList {

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
  public get(index: number): BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference {
    return new BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BlockchainNodeEngineBlockchainNodesConnectionInfo {
}

export function blockchainNodeEngineBlockchainNodesConnectionInfoToTerraform(struct?: BlockchainNodeEngineBlockchainNodesConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function blockchainNodeEngineBlockchainNodesConnectionInfoToHclTerraform(struct?: BlockchainNodeEngineBlockchainNodesConnectionInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BlockchainNodeEngineBlockchainNodesConnectionInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlockchainNodeEngineBlockchainNodesConnectionInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint_info - computed: true, optional: false, required: false
  private _endpointInfo = new BlockchainNodeEngineBlockchainNodesConnectionInfoEndpointInfoList(this, "endpoint_info", false);
  public get endpointInfo() {
    return this._endpointInfo;
  }

  // service_attachment - computed: true, optional: false, required: false
  public get serviceAttachment() {
    return this.getStringAttribute('service_attachment');
  }
}

export class BlockchainNodeEngineBlockchainNodesConnectionInfoList extends cdktf.ComplexList {

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
  public get(index: number): BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference {
    return new BlockchainNodeEngineBlockchainNodesConnectionInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints {
}

export function blockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsToTerraform(struct?: BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function blockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsToHclTerraform(struct?: BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // beacon_api_endpoint - computed: true, optional: false, required: false
  public get beaconApiEndpoint() {
    return this.getStringAttribute('beacon_api_endpoint');
  }

  // beacon_prometheus_metrics_api_endpoint - computed: true, optional: false, required: false
  public get beaconPrometheusMetricsApiEndpoint() {
    return this.getStringAttribute('beacon_prometheus_metrics_api_endpoint');
  }

  // execution_client_prometheus_metrics_api_endpoint - computed: true, optional: false, required: false
  public get executionClientPrometheusMetricsApiEndpoint() {
    return this.getStringAttribute('execution_client_prometheus_metrics_api_endpoint');
  }
}

export class BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference {
    return new BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails {
  /**
  * Blockchain garbage collection modes. Only applicable when NodeType is FULL or ARCHIVE. Possible values: ["FULL", "ARCHIVE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes#garbage_collection_mode BlockchainNodeEngineBlockchainNodes#garbage_collection_mode}
  */
  readonly garbageCollectionMode?: string;
}

export function blockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsToTerraform(struct?: BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference | BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    garbage_collection_mode: cdktf.stringToTerraform(struct!.garbageCollectionMode),
  }
}


export function blockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsToHclTerraform(struct?: BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference | BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    garbage_collection_mode: {
      value: cdktf.stringToHclTerraform(struct!.garbageCollectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._garbageCollectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.garbageCollectionMode = this._garbageCollectionMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._garbageCollectionMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._garbageCollectionMode = value.garbageCollectionMode;
    }
  }

  // garbage_collection_mode - computed: false, optional: true, required: false
  private _garbageCollectionMode?: string; 
  public get garbageCollectionMode() {
    return this.getStringAttribute('garbage_collection_mode');
  }
  public set garbageCollectionMode(value: string) {
    this._garbageCollectionMode = value;
  }
  public resetGarbageCollectionMode() {
    this._garbageCollectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get garbageCollectionModeInput() {
    return this._garbageCollectionMode;
  }
}
export interface BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig {
  /**
  * URLs for MEV-relay services to use for block building. When set, a managed MEV-boost service is configured on the beacon client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes#mev_relay_urls BlockchainNodeEngineBlockchainNodes#mev_relay_urls}
  */
  readonly mevRelayUrls?: string[];
}

export function blockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigToTerraform(struct?: BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference | BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mev_relay_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mevRelayUrls),
  }
}


export function blockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigToHclTerraform(struct?: BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference | BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mev_relay_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mevRelayUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mevRelayUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.mevRelayUrls = this._mevRelayUrls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mevRelayUrls = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mevRelayUrls = value.mevRelayUrls;
    }
  }

  // mev_relay_urls - computed: false, optional: true, required: false
  private _mevRelayUrls?: string[]; 
  public get mevRelayUrls() {
    return this.getListAttribute('mev_relay_urls');
  }
  public set mevRelayUrls(value: string[]) {
    this._mevRelayUrls = value;
  }
  public resetMevRelayUrls() {
    this._mevRelayUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mevRelayUrlsInput() {
    return this._mevRelayUrls;
  }
}
export interface BlockchainNodeEngineBlockchainNodesEthereumDetails {
  /**
  * Enables JSON-RPC access to functions in the admin namespace. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes#api_enable_admin BlockchainNodeEngineBlockchainNodes#api_enable_admin}
  */
  readonly apiEnableAdmin?: boolean | cdktf.IResolvable;
  /**
  * Enables JSON-RPC access to functions in the debug namespace. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes#api_enable_debug BlockchainNodeEngineBlockchainNodes#api_enable_debug}
  */
  readonly apiEnableDebug?: boolean | cdktf.IResolvable;
  /**
  * The consensus client Possible values: ["CONSENSUS_CLIENT_UNSPECIFIED", "LIGHTHOUSE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes#consensus_client BlockchainNodeEngineBlockchainNodes#consensus_client}
  */
  readonly consensusClient?: string;
  /**
  * The execution client Possible values: ["EXECUTION_CLIENT_UNSPECIFIED", "GETH", "ERIGON"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes#execution_client BlockchainNodeEngineBlockchainNodes#execution_client}
  */
  readonly executionClient?: string;
  /**
  * The Ethereum environment being accessed. Possible values: ["MAINNET", "TESTNET_GOERLI_PRATER", "TESTNET_SEPOLIA"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes#network BlockchainNodeEngineBlockchainNodes#network}
  */
  readonly network?: string;
  /**
  * The type of Ethereum node. Possible values: ["LIGHT", "FULL", "ARCHIVE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes#node_type BlockchainNodeEngineBlockchainNodes#node_type}
  */
  readonly nodeType?: string;
  /**
  * geth_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes#geth_details BlockchainNodeEngineBlockchainNodes#geth_details}
  */
  readonly fetchhDetails?: BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails;
  /**
  * validator_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes#validator_config BlockchainNodeEngineBlockchainNodes#validator_config}
  */
  readonly validatorConfig?: BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig;
}

export function blockchainNodeEngineBlockchainNodesEthereumDetailsToTerraform(struct?: BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference | BlockchainNodeEngineBlockchainNodesEthereumDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_enable_admin: cdktf.booleanToTerraform(struct!.apiEnableAdmin),
    api_enable_debug: cdktf.booleanToTerraform(struct!.apiEnableDebug),
    consensus_client: cdktf.stringToTerraform(struct!.consensusClient),
    execution_client: cdktf.stringToTerraform(struct!.executionClient),
    network: cdktf.stringToTerraform(struct!.network),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    geth_details: blockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsToTerraform(struct!.fetchhDetails),
    validator_config: blockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigToTerraform(struct!.validatorConfig),
  }
}


export function blockchainNodeEngineBlockchainNodesEthereumDetailsToHclTerraform(struct?: BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference | BlockchainNodeEngineBlockchainNodesEthereumDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_enable_admin: {
      value: cdktf.booleanToHclTerraform(struct!.apiEnableAdmin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_enable_debug: {
      value: cdktf.booleanToHclTerraform(struct!.apiEnableDebug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    consensus_client: {
      value: cdktf.stringToHclTerraform(struct!.consensusClient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_client: {
      value: cdktf.stringToHclTerraform(struct!.executionClient),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geth_details: {
      value: blockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsToHclTerraform(struct!.fetchhDetails),
      isBlock: true,
      type: "list",
      storageClassType: "BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsList",
    },
    validator_config: {
      value: blockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigToHclTerraform(struct!.validatorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BlockchainNodeEngineBlockchainNodesEthereumDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiEnableAdmin !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEnableAdmin = this._apiEnableAdmin;
    }
    if (this._apiEnableDebug !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiEnableDebug = this._apiEnableDebug;
    }
    if (this._consensusClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.consensusClient = this._consensusClient;
    }
    if (this._executionClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionClient = this._executionClient;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._gethDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchhDetails = this._gethDetails?.internalValue;
    }
    if (this._validatorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validatorConfig = this._validatorConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BlockchainNodeEngineBlockchainNodesEthereumDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiEnableAdmin = undefined;
      this._apiEnableDebug = undefined;
      this._consensusClient = undefined;
      this._executionClient = undefined;
      this._network = undefined;
      this._nodeType = undefined;
      this._gethDetails.internalValue = undefined;
      this._validatorConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiEnableAdmin = value.apiEnableAdmin;
      this._apiEnableDebug = value.apiEnableDebug;
      this._consensusClient = value.consensusClient;
      this._executionClient = value.executionClient;
      this._network = value.network;
      this._nodeType = value.nodeType;
      this._gethDetails.internalValue = value.fetchhDetails;
      this._validatorConfig.internalValue = value.validatorConfig;
    }
  }

  // additional_endpoints - computed: true, optional: false, required: false
  private _additionalEndpoints = new BlockchainNodeEngineBlockchainNodesEthereumDetailsAdditionalEndpointsList(this, "additional_endpoints", false);
  public get additionalEndpoints() {
    return this._additionalEndpoints;
  }

  // api_enable_admin - computed: false, optional: true, required: false
  private _apiEnableAdmin?: boolean | cdktf.IResolvable; 
  public get apiEnableAdmin() {
    return this.getBooleanAttribute('api_enable_admin');
  }
  public set apiEnableAdmin(value: boolean | cdktf.IResolvable) {
    this._apiEnableAdmin = value;
  }
  public resetApiEnableAdmin() {
    this._apiEnableAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEnableAdminInput() {
    return this._apiEnableAdmin;
  }

  // api_enable_debug - computed: false, optional: true, required: false
  private _apiEnableDebug?: boolean | cdktf.IResolvable; 
  public get apiEnableDebug() {
    return this.getBooleanAttribute('api_enable_debug');
  }
  public set apiEnableDebug(value: boolean | cdktf.IResolvable) {
    this._apiEnableDebug = value;
  }
  public resetApiEnableDebug() {
    this._apiEnableDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEnableDebugInput() {
    return this._apiEnableDebug;
  }

  // consensus_client - computed: false, optional: true, required: false
  private _consensusClient?: string; 
  public get consensusClient() {
    return this.getStringAttribute('consensus_client');
  }
  public set consensusClient(value: string) {
    this._consensusClient = value;
  }
  public resetConsensusClient() {
    this._consensusClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consensusClientInput() {
    return this._consensusClient;
  }

  // execution_client - computed: false, optional: true, required: false
  private _executionClient?: string; 
  public get executionClient() {
    return this.getStringAttribute('execution_client');
  }
  public set executionClient(value: string) {
    this._executionClient = value;
  }
  public resetExecutionClient() {
    this._executionClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionClientInput() {
    return this._executionClient;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // node_type - computed: false, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // geth_details - computed: false, optional: true, required: false
  private _gethDetails = new BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetailsOutputReference(this, "geth_details");
  public get fetchhDetails() {
    return this._gethDetails;
  }
  public putFetchhDetails(value: BlockchainNodeEngineBlockchainNodesEthereumDetailsGethDetails) {
    this._gethDetails.internalValue = value;
  }
  public resetFetchhDetails() {
    this._gethDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchhDetailsInput() {
    return this._gethDetails.internalValue;
  }

  // validator_config - computed: false, optional: true, required: false
  private _validatorConfig = new BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfigOutputReference(this, "validator_config");
  public get validatorConfig() {
    return this._validatorConfig;
  }
  public putValidatorConfig(value: BlockchainNodeEngineBlockchainNodesEthereumDetailsValidatorConfig) {
    this._validatorConfig.internalValue = value;
  }
  public resetValidatorConfig() {
    this._validatorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatorConfigInput() {
    return this._validatorConfig.internalValue;
  }
}
export interface BlockchainNodeEngineBlockchainNodesTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes#create BlockchainNodeEngineBlockchainNodes#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes#delete BlockchainNodeEngineBlockchainNodes#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes#update BlockchainNodeEngineBlockchainNodes#update}
  */
  readonly update?: string;
}

export function blockchainNodeEngineBlockchainNodesTimeoutsToTerraform(struct?: BlockchainNodeEngineBlockchainNodesTimeouts | cdktf.IResolvable): any {
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


export function blockchainNodeEngineBlockchainNodesTimeoutsToHclTerraform(struct?: BlockchainNodeEngineBlockchainNodesTimeouts | cdktf.IResolvable): any {
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

export class BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BlockchainNodeEngineBlockchainNodesTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BlockchainNodeEngineBlockchainNodesTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes google_blockchain_node_engine_blockchain_nodes}
*/
export class BlockchainNodeEngineBlockchainNodes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_blockchain_node_engine_blockchain_nodes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BlockchainNodeEngineBlockchainNodes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BlockchainNodeEngineBlockchainNodes to import
  * @param importFromId The id of the existing BlockchainNodeEngineBlockchainNodes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BlockchainNodeEngineBlockchainNodes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_blockchain_node_engine_blockchain_nodes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/blockchain_node_engine_blockchain_nodes google_blockchain_node_engine_blockchain_nodes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BlockchainNodeEngineBlockchainNodesConfig
  */
  public constructor(scope: Construct, id: string, config: BlockchainNodeEngineBlockchainNodesConfig) {
    super(scope, id, {
      terraformResourceType: 'google_blockchain_node_engine_blockchain_nodes',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.32.0',
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
    this._blockchainNodeId = config.blockchainNodeId;
    this._blockchainType = config.blockchainType;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._ethereumDetails.internalValue = config.ethereumDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // blockchain_node_id - computed: false, optional: false, required: true
  private _blockchainNodeId?: string; 
  public get blockchainNodeId() {
    return this.getStringAttribute('blockchain_node_id');
  }
  public set blockchainNodeId(value: string) {
    this._blockchainNodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockchainNodeIdInput() {
    return this._blockchainNodeId;
  }

  // blockchain_type - computed: false, optional: true, required: false
  private _blockchainType?: string; 
  public get blockchainType() {
    return this.getStringAttribute('blockchain_type');
  }
  public set blockchainType(value: string) {
    this._blockchainType = value;
  }
  public resetBlockchainType() {
    this._blockchainType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockchainTypeInput() {
    return this._blockchainType;
  }

  // connection_info - computed: true, optional: false, required: false
  private _connectionInfo = new BlockchainNodeEngineBlockchainNodesConnectionInfoList(this, "connection_info", false);
  public get connectionInfo() {
    return this._connectionInfo;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // ethereum_details - computed: false, optional: true, required: false
  private _ethereumDetails = new BlockchainNodeEngineBlockchainNodesEthereumDetailsOutputReference(this, "ethereum_details");
  public get ethereumDetails() {
    return this._ethereumDetails;
  }
  public putEthereumDetails(value: BlockchainNodeEngineBlockchainNodesEthereumDetails) {
    this._ethereumDetails.internalValue = value;
  }
  public resetEthereumDetails() {
    this._ethereumDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ethereumDetailsInput() {
    return this._ethereumDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BlockchainNodeEngineBlockchainNodesTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BlockchainNodeEngineBlockchainNodesTimeouts) {
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
      blockchain_node_id: cdktf.stringToTerraform(this._blockchainNodeId),
      blockchain_type: cdktf.stringToTerraform(this._blockchainType),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      ethereum_details: blockchainNodeEngineBlockchainNodesEthereumDetailsToTerraform(this._ethereumDetails.internalValue),
      timeouts: blockchainNodeEngineBlockchainNodesTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blockchain_node_id: {
        value: cdktf.stringToHclTerraform(this._blockchainNodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blockchain_type: {
        value: cdktf.stringToHclTerraform(this._blockchainType),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ethereum_details: {
        value: blockchainNodeEngineBlockchainNodesEthereumDetailsToHclTerraform(this._ethereumDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BlockchainNodeEngineBlockchainNodesEthereumDetailsList",
      },
      timeouts: {
        value: blockchainNodeEngineBlockchainNodesTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BlockchainNodeEngineBlockchainNodesTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
