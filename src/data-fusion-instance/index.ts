/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFusionInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * User-managed service account to set on Dataproc when Cloud Data Fusion creates Dataproc to run data processing pipelines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#dataproc_service_account DataFusionInstance#dataproc_service_account}
  */
  readonly dataprocServiceAccount?: string;
  /**
  * An optional description of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#description DataFusionInstance#description}
  */
  readonly description?: string;
  /**
  * Display name for an instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#display_name DataFusionInstance#display_name}
  */
  readonly displayName?: string;
  /**
  * Option to enable granular role-based access control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#enable_rbac DataFusionInstance#enable_rbac}
  */
  readonly enableRbac?: boolean | cdktf.IResolvable;
  /**
  * Option to enable Stackdriver Logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#enable_stackdriver_logging DataFusionInstance#enable_stackdriver_logging}
  */
  readonly enableStackdriverLogging?: boolean | cdktf.IResolvable;
  /**
  * Option to enable Stackdriver Monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#enable_stackdriver_monitoring DataFusionInstance#enable_stackdriver_monitoring}
  */
  readonly enableStackdriverMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#id DataFusionInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource labels for instance to use to annotate any related underlying resources,
  * such as Compute Engine VMs.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#labels DataFusionInstance#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The ID of the instance or a fully qualified identifier for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#name DataFusionInstance#name}
  */
  readonly name: string;
  /**
  * Map of additional options used to configure the behavior of Data Fusion instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#options DataFusionInstance#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Specifies whether the Data Fusion instance should be private. If set to
  * true, all Data Fusion nodes will have private IP addresses and will not be
  * able to access the public internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#private_instance DataFusionInstance#private_instance}
  */
  readonly privateInstance?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#project DataFusionInstance#project}
  */
  readonly project?: string;
  /**
  * The region of the Data Fusion instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#region DataFusionInstance#region}
  */
  readonly region?: string;
  /**
  * A map of resource manager tags.
  * Resource manager tag keys and values have the same definition as resource manager tags.
  * Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/{tag_value_id}.
  * The field is ignored (both PUT & PATCH) when empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#tags DataFusionInstance#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Represents the type of Data Fusion instance. Each type is configured with
  * the default settings for processing and memory.
  * - BASIC: Basic Data Fusion instance. In Basic type, the user will be able to create data pipelines
  * using point and click UI. However, there are certain limitations, such as fewer number
  * of concurrent pipelines, no support for streaming pipelines, etc.
  * - ENTERPRISE: Enterprise Data Fusion instance. In Enterprise type, the user will have more features
  * available, such as support for streaming pipelines, higher number of concurrent pipelines, etc.
  * - DEVELOPER: Developer Data Fusion instance. In Developer type, the user will have all features available but
  * with restrictive capabilities. This is to help enterprises design and develop their data ingestion and integration
  * pipelines at low cost. Possible values: ["BASIC", "ENTERPRISE", "DEVELOPER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#type DataFusionInstance#type}
  */
  readonly type: string;
  /**
  * Current version of the Data Fusion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#version DataFusionInstance#version}
  */
  readonly version?: string;
  /**
  * Name of the zone in which the Data Fusion instance will be created. Only DEVELOPER instances use this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#zone DataFusionInstance#zone}
  */
  readonly zone?: string;
  /**
  * accelerators block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#accelerators DataFusionInstance#accelerators}
  */
  readonly accelerators?: DataFusionInstanceAccelerators[] | cdktf.IResolvable;
  /**
  * crypto_key_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#crypto_key_config DataFusionInstance#crypto_key_config}
  */
  readonly cryptoKeyConfig?: DataFusionInstanceCryptoKeyConfig;
  /**
  * event_publish_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#event_publish_config DataFusionInstance#event_publish_config}
  */
  readonly eventPublishConfig?: DataFusionInstanceEventPublishConfig;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#network_config DataFusionInstance#network_config}
  */
  readonly networkConfig?: DataFusionInstanceNetworkConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#timeouts DataFusionInstance#timeouts}
  */
  readonly timeouts?: DataFusionInstanceTimeouts;
}
export interface DataFusionInstanceAccelerators {
  /**
  * The type of an accelator for a CDF instance. Possible values: ["CDC", "HEALTHCARE", "CCAI_INSIGHTS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#accelerator_type DataFusionInstance#accelerator_type}
  */
  readonly acceleratorType: string;
  /**
  * The type of an accelator for a CDF instance. Possible values: ["ENABLED", "DISABLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#state DataFusionInstance#state}
  */
  readonly state: string;
}

export function dataFusionInstanceAcceleratorsToTerraform(struct?: DataFusionInstanceAccelerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function dataFusionInstanceAcceleratorsToHclTerraform(struct?: DataFusionInstanceAccelerators | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerator_type: {
      value: cdktf.stringToHclTerraform(struct!.acceleratorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFusionInstanceAcceleratorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFusionInstanceAccelerators | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratorType = this._acceleratorType;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFusionInstanceAccelerators | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceleratorType = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acceleratorType = value.acceleratorType;
      this._state = value.state;
    }
  }

  // accelerator_type - computed: false, optional: false, required: true
  private _acceleratorType?: string; 
  public get acceleratorType() {
    return this.getStringAttribute('accelerator_type');
  }
  public set acceleratorType(value: string) {
    this._acceleratorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorTypeInput() {
    return this._acceleratorType;
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
}

export class DataFusionInstanceAcceleratorsList extends cdktf.ComplexList {
  public internalValue? : DataFusionInstanceAccelerators[] | cdktf.IResolvable

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
  public get(index: number): DataFusionInstanceAcceleratorsOutputReference {
    return new DataFusionInstanceAcceleratorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFusionInstanceCryptoKeyConfig {
  /**
  * The name of the key which is used to encrypt/decrypt customer data. For key in Cloud KMS, the key should be in the format of projects/* /locations/* /keyRings/* /cryptoKeys/*.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#key_reference DataFusionInstance#key_reference}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly keyReference: string;
}

export function dataFusionInstanceCryptoKeyConfigToTerraform(struct?: DataFusionInstanceCryptoKeyConfigOutputReference | DataFusionInstanceCryptoKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_reference: cdktf.stringToTerraform(struct!.keyReference),
  }
}


export function dataFusionInstanceCryptoKeyConfigToHclTerraform(struct?: DataFusionInstanceCryptoKeyConfigOutputReference | DataFusionInstanceCryptoKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_reference: {
      value: cdktf.stringToHclTerraform(struct!.keyReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFusionInstanceCryptoKeyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFusionInstanceCryptoKeyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyReference = this._keyReference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFusionInstanceCryptoKeyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyReference = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyReference = value.keyReference;
    }
  }

  // key_reference - computed: false, optional: false, required: true
  private _keyReference?: string; 
  public get keyReference() {
    return this.getStringAttribute('key_reference');
  }
  public set keyReference(value: string) {
    this._keyReference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyReferenceInput() {
    return this._keyReference;
  }
}
export interface DataFusionInstanceEventPublishConfig {
  /**
  * Option to enable Event Publishing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#enabled DataFusionInstance#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The resource name of the Pub/Sub topic. Format: projects/{projectId}/topics/{topic_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#topic DataFusionInstance#topic}
  */
  readonly topic: string;
}

export function dataFusionInstanceEventPublishConfigToTerraform(struct?: DataFusionInstanceEventPublishConfigOutputReference | DataFusionInstanceEventPublishConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function dataFusionInstanceEventPublishConfigToHclTerraform(struct?: DataFusionInstanceEventPublishConfigOutputReference | DataFusionInstanceEventPublishConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFusionInstanceEventPublishConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFusionInstanceEventPublishConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFusionInstanceEventPublishConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._topic = value.topic;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface DataFusionInstanceNetworkConfigPrivateServiceConnectConfig {
  /**
  * Optional. The reference to the network attachment used to establish private connectivity.
  * It will be of the form projects/{project-id}/regions/{region}/networkAttachments/{network-attachment-id}.
  * This is required only when using connection type PRIVATE_SERVICE_CONNECT_INTERFACES.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#network_attachment DataFusionInstance#network_attachment}
  */
  readonly networkAttachment?: string;
  /**
  * Optional. Input only. The CIDR block to which the CDF instance can't route traffic to in the consumer project VPC.
  * The size of this block should be at least /25. This range should not overlap with the primary address range of any subnetwork used by the network attachment.
  * This range can be used for other purposes in the consumer VPC as long as there is no requirement for CDF to reach destinations using these addresses.
  * If this value is not provided, the server chooses a non RFC 1918 address range. The format of this field is governed by RFC 4632.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#unreachable_cidr_block DataFusionInstance#unreachable_cidr_block}
  */
  readonly unreachableCidrBlock?: string;
}

export function dataFusionInstanceNetworkConfigPrivateServiceConnectConfigToTerraform(struct?: DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference | DataFusionInstanceNetworkConfigPrivateServiceConnectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_attachment: cdktf.stringToTerraform(struct!.networkAttachment),
    unreachable_cidr_block: cdktf.stringToTerraform(struct!.unreachableCidrBlock),
  }
}


export function dataFusionInstanceNetworkConfigPrivateServiceConnectConfigToHclTerraform(struct?: DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference | DataFusionInstanceNetworkConfigPrivateServiceConnectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_attachment: {
      value: cdktf.stringToHclTerraform(struct!.networkAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unreachable_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.unreachableCidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFusionInstanceNetworkConfigPrivateServiceConnectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkAttachment = this._networkAttachment;
    }
    if (this._unreachableCidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.unreachableCidrBlock = this._unreachableCidrBlock;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFusionInstanceNetworkConfigPrivateServiceConnectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkAttachment = undefined;
      this._unreachableCidrBlock = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkAttachment = value.networkAttachment;
      this._unreachableCidrBlock = value.unreachableCidrBlock;
    }
  }

  // effective_unreachable_cidr_block - computed: true, optional: false, required: false
  public get effectiveUnreachableCidrBlock() {
    return this.getStringAttribute('effective_unreachable_cidr_block');
  }

  // network_attachment - computed: false, optional: true, required: false
  private _networkAttachment?: string; 
  public get networkAttachment() {
    return this.getStringAttribute('network_attachment');
  }
  public set networkAttachment(value: string) {
    this._networkAttachment = value;
  }
  public resetNetworkAttachment() {
    this._networkAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAttachmentInput() {
    return this._networkAttachment;
  }

  // unreachable_cidr_block - computed: false, optional: true, required: false
  private _unreachableCidrBlock?: string; 
  public get unreachableCidrBlock() {
    return this.getStringAttribute('unreachable_cidr_block');
  }
  public set unreachableCidrBlock(value: string) {
    this._unreachableCidrBlock = value;
  }
  public resetUnreachableCidrBlock() {
    this._unreachableCidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unreachableCidrBlockInput() {
    return this._unreachableCidrBlock;
  }
}
export interface DataFusionInstanceNetworkConfig {
  /**
  * Optional. Type of connection for establishing private IP connectivity between the Data Fusion customer project VPC and
  * the corresponding tenant project from a predefined list of available connection modes.
  * If this field is unspecified for a private instance, VPC peering is used. Possible values: ["VPC_PEERING", "PRIVATE_SERVICE_CONNECT_INTERFACES"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#connection_type DataFusionInstance#connection_type}
  */
  readonly connectionType?: string;
  /**
  * The IP range in CIDR notation to use for the managed Data Fusion instance
  * nodes. This range must not overlap with any other ranges used in the Data Fusion instance network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#ip_allocation DataFusionInstance#ip_allocation}
  */
  readonly ipAllocation?: string;
  /**
  * Name of the network in the project with which the tenant project
  * will be peered for executing pipelines. In case of shared VPC where the network resides in another host
  * project the network should specified in the form of projects/{host-project-id}/global/networks/{network}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#network DataFusionInstance#network}
  */
  readonly network?: string;
  /**
  * private_service_connect_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#private_service_connect_config DataFusionInstance#private_service_connect_config}
  */
  readonly privateServiceConnectConfig?: DataFusionInstanceNetworkConfigPrivateServiceConnectConfig;
}

export function dataFusionInstanceNetworkConfigToTerraform(struct?: DataFusionInstanceNetworkConfigOutputReference | DataFusionInstanceNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_type: cdktf.stringToTerraform(struct!.connectionType),
    ip_allocation: cdktf.stringToTerraform(struct!.ipAllocation),
    network: cdktf.stringToTerraform(struct!.network),
    private_service_connect_config: dataFusionInstanceNetworkConfigPrivateServiceConnectConfigToTerraform(struct!.privateServiceConnectConfig),
  }
}


export function dataFusionInstanceNetworkConfigToHclTerraform(struct?: DataFusionInstanceNetworkConfigOutputReference | DataFusionInstanceNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_type: {
      value: cdktf.stringToHclTerraform(struct!.connectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_allocation: {
      value: cdktf.stringToHclTerraform(struct!.ipAllocation),
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
    private_service_connect_config: {
      value: dataFusionInstanceNetworkConfigPrivateServiceConnectConfigToHclTerraform(struct!.privateServiceConnectConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataFusionInstanceNetworkConfigPrivateServiceConnectConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataFusionInstanceNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataFusionInstanceNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionType = this._connectionType;
    }
    if (this._ipAllocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAllocation = this._ipAllocation;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._privateServiceConnectConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateServiceConnectConfig = this._privateServiceConnectConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFusionInstanceNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionType = undefined;
      this._ipAllocation = undefined;
      this._network = undefined;
      this._privateServiceConnectConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionType = value.connectionType;
      this._ipAllocation = value.ipAllocation;
      this._network = value.network;
      this._privateServiceConnectConfig.internalValue = value.privateServiceConnectConfig;
    }
  }

  // connection_type - computed: false, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // ip_allocation - computed: false, optional: true, required: false
  private _ipAllocation?: string; 
  public get ipAllocation() {
    return this.getStringAttribute('ip_allocation');
  }
  public set ipAllocation(value: string) {
    this._ipAllocation = value;
  }
  public resetIpAllocation() {
    this._ipAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllocationInput() {
    return this._ipAllocation;
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

  // private_service_connect_config - computed: false, optional: true, required: false
  private _privateServiceConnectConfig = new DataFusionInstanceNetworkConfigPrivateServiceConnectConfigOutputReference(this, "private_service_connect_config");
  public get privateServiceConnectConfig() {
    return this._privateServiceConnectConfig;
  }
  public putPrivateServiceConnectConfig(value: DataFusionInstanceNetworkConfigPrivateServiceConnectConfig) {
    this._privateServiceConnectConfig.internalValue = value;
  }
  public resetPrivateServiceConnectConfig() {
    this._privateServiceConnectConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateServiceConnectConfigInput() {
    return this._privateServiceConnectConfig.internalValue;
  }
}
export interface DataFusionInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#create DataFusionInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#delete DataFusionInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#update DataFusionInstance#update}
  */
  readonly update?: string;
}

export function dataFusionInstanceTimeoutsToTerraform(struct?: DataFusionInstanceTimeouts | cdktf.IResolvable): any {
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


export function dataFusionInstanceTimeoutsToHclTerraform(struct?: DataFusionInstanceTimeouts | cdktf.IResolvable): any {
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

export class DataFusionInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataFusionInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataFusionInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance google_data_fusion_instance}
*/
export class DataFusionInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_fusion_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFusionInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFusionInstance to import
  * @param importFromId The id of the existing DataFusionInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFusionInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_data_fusion_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/data_fusion_instance google_data_fusion_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFusionInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataFusionInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_fusion_instance',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.45.0',
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
    this._dataprocServiceAccount = config.dataprocServiceAccount;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enableRbac = config.enableRbac;
    this._enableStackdriverLogging = config.enableStackdriverLogging;
    this._enableStackdriverMonitoring = config.enableStackdriverMonitoring;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._options = config.options;
    this._privateInstance = config.privateInstance;
    this._project = config.project;
    this._region = config.region;
    this._tags = config.tags;
    this._type = config.type;
    this._version = config.version;
    this._zone = config.zone;
    this._accelerators.internalValue = config.accelerators;
    this._cryptoKeyConfig.internalValue = config.cryptoKeyConfig;
    this._eventPublishConfig.internalValue = config.eventPublishConfig;
    this._networkConfig.internalValue = config.networkConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_endpoint - computed: true, optional: false, required: false
  public get apiEndpoint() {
    return this.getStringAttribute('api_endpoint');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dataproc_service_account - computed: false, optional: true, required: false
  private _dataprocServiceAccount?: string; 
  public get dataprocServiceAccount() {
    return this.getStringAttribute('dataproc_service_account');
  }
  public set dataprocServiceAccount(value: string) {
    this._dataprocServiceAccount = value;
  }
  public resetDataprocServiceAccount() {
    this._dataprocServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocServiceAccountInput() {
    return this._dataprocServiceAccount;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // enable_rbac - computed: false, optional: true, required: false
  private _enableRbac?: boolean | cdktf.IResolvable; 
  public get enableRbac() {
    return this.getBooleanAttribute('enable_rbac');
  }
  public set enableRbac(value: boolean | cdktf.IResolvable) {
    this._enableRbac = value;
  }
  public resetEnableRbac() {
    this._enableRbac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRbacInput() {
    return this._enableRbac;
  }

  // enable_stackdriver_logging - computed: false, optional: true, required: false
  private _enableStackdriverLogging?: boolean | cdktf.IResolvable; 
  public get enableStackdriverLogging() {
    return this.getBooleanAttribute('enable_stackdriver_logging');
  }
  public set enableStackdriverLogging(value: boolean | cdktf.IResolvable) {
    this._enableStackdriverLogging = value;
  }
  public resetEnableStackdriverLogging() {
    this._enableStackdriverLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStackdriverLoggingInput() {
    return this._enableStackdriverLogging;
  }

  // enable_stackdriver_monitoring - computed: false, optional: true, required: false
  private _enableStackdriverMonitoring?: boolean | cdktf.IResolvable; 
  public get enableStackdriverMonitoring() {
    return this.getBooleanAttribute('enable_stackdriver_monitoring');
  }
  public set enableStackdriverMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableStackdriverMonitoring = value;
  }
  public resetEnableStackdriverMonitoring() {
    this._enableStackdriverMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStackdriverMonitoringInput() {
    return this._enableStackdriverMonitoring;
  }

  // gcs_bucket - computed: true, optional: false, required: false
  public get gcsBucket() {
    return this.getStringAttribute('gcs_bucket');
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

  // options - computed: true, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // p4_service_account - computed: true, optional: false, required: false
  public get p4ServiceAccount() {
    return this.getStringAttribute('p4_service_account');
  }

  // private_instance - computed: false, optional: true, required: false
  private _privateInstance?: boolean | cdktf.IResolvable; 
  public get privateInstance() {
    return this.getBooleanAttribute('private_instance');
  }
  public set privateInstance(value: boolean | cdktf.IResolvable) {
    this._privateInstance = value;
  }
  public resetPrivateInstance() {
    this._privateInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInstanceInput() {
    return this._privateInstance;
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

  // region - computed: true, optional: true, required: false
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

  // service_endpoint - computed: true, optional: false, required: false
  public get serviceEndpoint() {
    return this.getStringAttribute('service_endpoint');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tenant_project_id - computed: true, optional: false, required: false
  public get tenantProjectId() {
    return this.getStringAttribute('tenant_project_id');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // zone - computed: true, optional: true, required: false
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

  // accelerators - computed: false, optional: true, required: false
  private _accelerators = new DataFusionInstanceAcceleratorsList(this, "accelerators", false);
  public get accelerators() {
    return this._accelerators;
  }
  public putAccelerators(value: DataFusionInstanceAccelerators[] | cdktf.IResolvable) {
    this._accelerators.internalValue = value;
  }
  public resetAccelerators() {
    this._accelerators.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorsInput() {
    return this._accelerators.internalValue;
  }

  // crypto_key_config - computed: false, optional: true, required: false
  private _cryptoKeyConfig = new DataFusionInstanceCryptoKeyConfigOutputReference(this, "crypto_key_config");
  public get cryptoKeyConfig() {
    return this._cryptoKeyConfig;
  }
  public putCryptoKeyConfig(value: DataFusionInstanceCryptoKeyConfig) {
    this._cryptoKeyConfig.internalValue = value;
  }
  public resetCryptoKeyConfig() {
    this._cryptoKeyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyConfigInput() {
    return this._cryptoKeyConfig.internalValue;
  }

  // event_publish_config - computed: false, optional: true, required: false
  private _eventPublishConfig = new DataFusionInstanceEventPublishConfigOutputReference(this, "event_publish_config");
  public get eventPublishConfig() {
    return this._eventPublishConfig;
  }
  public putEventPublishConfig(value: DataFusionInstanceEventPublishConfig) {
    this._eventPublishConfig.internalValue = value;
  }
  public resetEventPublishConfig() {
    this._eventPublishConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventPublishConfigInput() {
    return this._eventPublishConfig.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new DataFusionInstanceNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: DataFusionInstanceNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataFusionInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataFusionInstanceTimeouts) {
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
      dataproc_service_account: cdktf.stringToTerraform(this._dataprocServiceAccount),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_rbac: cdktf.booleanToTerraform(this._enableRbac),
      enable_stackdriver_logging: cdktf.booleanToTerraform(this._enableStackdriverLogging),
      enable_stackdriver_monitoring: cdktf.booleanToTerraform(this._enableStackdriverMonitoring),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      options: cdktf.hashMapper(cdktf.stringToTerraform)(this._options),
      private_instance: cdktf.booleanToTerraform(this._privateInstance),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      version: cdktf.stringToTerraform(this._version),
      zone: cdktf.stringToTerraform(this._zone),
      accelerators: cdktf.listMapper(dataFusionInstanceAcceleratorsToTerraform, true)(this._accelerators.internalValue),
      crypto_key_config: dataFusionInstanceCryptoKeyConfigToTerraform(this._cryptoKeyConfig.internalValue),
      event_publish_config: dataFusionInstanceEventPublishConfigToTerraform(this._eventPublishConfig.internalValue),
      network_config: dataFusionInstanceNetworkConfigToTerraform(this._networkConfig.internalValue),
      timeouts: dataFusionInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dataproc_service_account: {
        value: cdktf.stringToHclTerraform(this._dataprocServiceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      enable_rbac: {
        value: cdktf.booleanToHclTerraform(this._enableRbac),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_stackdriver_logging: {
        value: cdktf.booleanToHclTerraform(this._enableStackdriverLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_stackdriver_monitoring: {
        value: cdktf.booleanToHclTerraform(this._enableStackdriverMonitoring),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._options),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      private_instance: {
        value: cdktf.booleanToHclTerraform(this._privateInstance),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
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
      accelerators: {
        value: cdktf.listMapperHcl(dataFusionInstanceAcceleratorsToHclTerraform, true)(this._accelerators.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFusionInstanceAcceleratorsList",
      },
      crypto_key_config: {
        value: dataFusionInstanceCryptoKeyConfigToHclTerraform(this._cryptoKeyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFusionInstanceCryptoKeyConfigList",
      },
      event_publish_config: {
        value: dataFusionInstanceEventPublishConfigToHclTerraform(this._eventPublishConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFusionInstanceEventPublishConfigList",
      },
      network_config: {
        value: dataFusionInstanceNetworkConfigToHclTerraform(this._networkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataFusionInstanceNetworkConfigList",
      },
      timeouts: {
        value: dataFusionInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataFusionInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
