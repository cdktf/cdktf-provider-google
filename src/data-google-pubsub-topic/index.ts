/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/pubsub_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGooglePubsubTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/pubsub_topic#id DataGooglePubsubTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/pubsub_topic#name DataGooglePubsubTopic#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/pubsub_topic#project DataGooglePubsubTopic#project}
  */
  readonly project?: string;
}
export interface DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesis {
}

export function dataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisToTerraform(struct?: DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisToHclTerraform(struct?: DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_role_arn - computed: true, optional: false, required: false
  public get awsRoleArn() {
    return this.getStringAttribute('aws_role_arn');
  }

  // consumer_arn - computed: true, optional: false, required: false
  public get consumerArn() {
    return this.getStringAttribute('consumer_arn');
  }

  // gcp_service_account - computed: true, optional: false, required: false
  public get gcpServiceAccount() {
    return this.getStringAttribute('gcp_service_account');
  }

  // stream_arn - computed: true, optional: false, required: false
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
}

export class DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference {
    return new DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePubsubTopicIngestionDataSourceSettingsAwsMsk {
}

export function dataGooglePubsubTopicIngestionDataSourceSettingsAwsMskToTerraform(struct?: DataGooglePubsubTopicIngestionDataSourceSettingsAwsMsk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePubsubTopicIngestionDataSourceSettingsAwsMskToHclTerraform(struct?: DataGooglePubsubTopicIngestionDataSourceSettingsAwsMsk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePubsubTopicIngestionDataSourceSettingsAwsMsk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePubsubTopicIngestionDataSourceSettingsAwsMsk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_role_arn - computed: true, optional: false, required: false
  public get awsRoleArn() {
    return this.getStringAttribute('aws_role_arn');
  }

  // cluster_arn - computed: true, optional: false, required: false
  public get clusterArn() {
    return this.getStringAttribute('cluster_arn');
  }

  // gcp_service_account - computed: true, optional: false, required: false
  public get gcpServiceAccount() {
    return this.getStringAttribute('gcp_service_account');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }
}

export class DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference {
    return new DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubs {
}

export function dataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsToTerraform(struct?: DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsToHclTerraform(struct?: DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // event_hub - computed: true, optional: false, required: false
  public get eventHub() {
    return this.getStringAttribute('event_hub');
  }

  // gcp_service_account - computed: true, optional: false, required: false
  public get gcpServiceAccount() {
    return this.getStringAttribute('gcp_service_account');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // resource_group - computed: true, optional: false, required: false
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}

export class DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference {
    return new DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat {
}

export function dataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatToTerraform(struct?: DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatToHclTerraform(struct?: DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference {
    return new DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat {
}

export function dataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatToTerraform(struct?: DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatToHclTerraform(struct?: DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference {
    return new DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat {
}

export function dataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatToTerraform(struct?: DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatToHclTerraform(struct?: DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
}

export class DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference {
    return new DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorage {
}

export function dataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageToTerraform(struct?: DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageToHclTerraform(struct?: DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // avro_format - computed: true, optional: false, required: false
  private _avroFormat = new DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList(this, "avro_format", false);
  public get avroFormat() {
    return this._avroFormat;
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // match_glob - computed: true, optional: false, required: false
  public get matchGlob() {
    return this.getStringAttribute('match_glob');
  }

  // minimum_object_create_time - computed: true, optional: false, required: false
  public get minimumObjectCreateTime() {
    return this.getStringAttribute('minimum_object_create_time');
  }

  // pubsub_avro_format - computed: true, optional: false, required: false
  private _pubsubAvroFormat = new DataGooglePubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList(this, "pubsub_avro_format", false);
  public get pubsubAvroFormat() {
    return this._pubsubAvroFormat;
  }

  // text_format - computed: true, optional: false, required: false
  private _textFormat = new DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList(this, "text_format", false);
  public get textFormat() {
    return this._textFormat;
  }
}

export class DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference {
    return new DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloud {
}

export function dataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudToTerraform(struct?: DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudToHclTerraform(struct?: DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloud | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bootstrap_server - computed: true, optional: false, required: false
  public get bootstrapServer() {
    return this.getStringAttribute('bootstrap_server');
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // gcp_service_account - computed: true, optional: false, required: false
  public get gcpServiceAccount() {
    return this.getStringAttribute('gcp_service_account');
  }

  // identity_pool_id - computed: true, optional: false, required: false
  public get identityPoolId() {
    return this.getStringAttribute('identity_pool_id');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }
}

export class DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference {
    return new DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings {
}

export function dataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsToTerraform(struct?: DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsToHclTerraform(struct?: DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }
}

export class DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference {
    return new DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePubsubTopicIngestionDataSourceSettings {
}

export function dataGooglePubsubTopicIngestionDataSourceSettingsToTerraform(struct?: DataGooglePubsubTopicIngestionDataSourceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePubsubTopicIngestionDataSourceSettingsToHclTerraform(struct?: DataGooglePubsubTopicIngestionDataSourceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePubsubTopicIngestionDataSourceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePubsubTopicIngestionDataSourceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_kinesis - computed: true, optional: false, required: false
  private _awsKinesis = new DataGooglePubsubTopicIngestionDataSourceSettingsAwsKinesisList(this, "aws_kinesis", false);
  public get awsKinesis() {
    return this._awsKinesis;
  }

  // aws_msk - computed: true, optional: false, required: false
  private _awsMsk = new DataGooglePubsubTopicIngestionDataSourceSettingsAwsMskList(this, "aws_msk", false);
  public get awsMsk() {
    return this._awsMsk;
  }

  // azure_event_hubs - computed: true, optional: false, required: false
  private _azureEventHubs = new DataGooglePubsubTopicIngestionDataSourceSettingsAzureEventHubsList(this, "azure_event_hubs", false);
  public get azureEventHubs() {
    return this._azureEventHubs;
  }

  // cloud_storage - computed: true, optional: false, required: false
  private _cloudStorage = new DataGooglePubsubTopicIngestionDataSourceSettingsCloudStorageList(this, "cloud_storage", false);
  public get cloudStorage() {
    return this._cloudStorage;
  }

  // confluent_cloud - computed: true, optional: false, required: false
  private _confluentCloud = new DataGooglePubsubTopicIngestionDataSourceSettingsConfluentCloudList(this, "confluent_cloud", false);
  public get confluentCloud() {
    return this._confluentCloud;
  }

  // platform_logs_settings - computed: true, optional: false, required: false
  private _platformLogsSettings = new DataGooglePubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList(this, "platform_logs_settings", false);
  public get platformLogsSettings() {
    return this._platformLogsSettings;
  }
}

export class DataGooglePubsubTopicIngestionDataSourceSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference {
    return new DataGooglePubsubTopicIngestionDataSourceSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePubsubTopicMessageStoragePolicy {
}

export function dataGooglePubsubTopicMessageStoragePolicyToTerraform(struct?: DataGooglePubsubTopicMessageStoragePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePubsubTopicMessageStoragePolicyToHclTerraform(struct?: DataGooglePubsubTopicMessageStoragePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePubsubTopicMessageStoragePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePubsubTopicMessageStoragePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePubsubTopicMessageStoragePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_persistence_regions - computed: true, optional: false, required: false
  public get allowedPersistenceRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_persistence_regions'));
  }

  // enforce_in_transit - computed: true, optional: false, required: false
  public get enforceInTransit() {
    return this.getBooleanAttribute('enforce_in_transit');
  }
}

export class DataGooglePubsubTopicMessageStoragePolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePubsubTopicMessageStoragePolicyOutputReference {
    return new DataGooglePubsubTopicMessageStoragePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePubsubTopicSchemaSettings {
}

export function dataGooglePubsubTopicSchemaSettingsToTerraform(struct?: DataGooglePubsubTopicSchemaSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePubsubTopicSchemaSettingsToHclTerraform(struct?: DataGooglePubsubTopicSchemaSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePubsubTopicSchemaSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePubsubTopicSchemaSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePubsubTopicSchemaSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // encoding - computed: true, optional: false, required: false
  public get encoding() {
    return this.getStringAttribute('encoding');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }
}

export class DataGooglePubsubTopicSchemaSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePubsubTopicSchemaSettingsOutputReference {
    return new DataGooglePubsubTopicSchemaSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/pubsub_topic google_pubsub_topic}
*/
export class DataGooglePubsubTopic extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_pubsub_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGooglePubsubTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGooglePubsubTopic to import
  * @param importFromId The id of the existing DataGooglePubsubTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/pubsub_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGooglePubsubTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_pubsub_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/pubsub_topic google_pubsub_topic} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGooglePubsubTopicConfig
  */
  public constructor(scope: Construct, id: string, config: DataGooglePubsubTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'google_pubsub_topic',
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
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ingestion_data_source_settings - computed: true, optional: false, required: false
  private _ingestionDataSourceSettings = new DataGooglePubsubTopicIngestionDataSourceSettingsList(this, "ingestion_data_source_settings", false);
  public get ingestionDataSourceSettings() {
    return this._ingestionDataSourceSettings;
  }

  // kms_key_name - computed: true, optional: false, required: false
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // message_retention_duration - computed: true, optional: false, required: false
  public get messageRetentionDuration() {
    return this.getStringAttribute('message_retention_duration');
  }

  // message_storage_policy - computed: true, optional: false, required: false
  private _messageStoragePolicy = new DataGooglePubsubTopicMessageStoragePolicyList(this, "message_storage_policy", false);
  public get messageStoragePolicy() {
    return this._messageStoragePolicy;
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

  // schema_settings - computed: true, optional: false, required: false
  private _schemaSettings = new DataGooglePubsubTopicSchemaSettingsList(this, "schema_settings", false);
  public get schemaSettings() {
    return this._schemaSettings;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
