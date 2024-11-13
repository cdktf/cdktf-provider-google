/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PubsubTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#id PubsubTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name of the Cloud KMS CryptoKey to be used to protect access
  * to messages published on this topic. Your project's PubSub service account
  * ('service-{{PROJECT_NUMBER}}@gcp-sa-pubsub.iam.gserviceaccount.com') must have
  * 'roles/cloudkms.cryptoKeyEncrypterDecrypter' to use this feature.
  * The expected format is 'projects/* /locations/* /keyRings/* /cryptoKeys/*'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#kms_key_name PubsubTopic#kms_key_name}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly kmsKeyName?: string;
  /**
  * A set of key/value label pairs to assign to this Topic.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#labels PubsubTopic#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Indicates the minimum duration to retain a message after it is published
  * to the topic. If this field is set, messages published to the topic in
  * the last messageRetentionDuration are always available to subscribers.
  * For instance, it allows any attached subscription to seek to a timestamp
  * that is up to messageRetentionDuration in the past. If this field is not
  * set, message retention is controlled by settings on individual subscriptions.
  * The rotation period has the format of a decimal number, followed by the
  * letter 's' (seconds). Cannot be more than 31 days or less than 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#message_retention_duration PubsubTopic#message_retention_duration}
  */
  readonly messageRetentionDuration?: string;
  /**
  * Name of the topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#name PubsubTopic#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#project PubsubTopic#project}
  */
  readonly project?: string;
  /**
  * ingestion_data_source_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#ingestion_data_source_settings PubsubTopic#ingestion_data_source_settings}
  */
  readonly ingestionDataSourceSettings?: PubsubTopicIngestionDataSourceSettings;
  /**
  * message_storage_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#message_storage_policy PubsubTopic#message_storage_policy}
  */
  readonly messageStoragePolicy?: PubsubTopicMessageStoragePolicy;
  /**
  * schema_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#schema_settings PubsubTopic#schema_settings}
  */
  readonly schemaSettings?: PubsubTopicSchemaSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#timeouts PubsubTopic#timeouts}
  */
  readonly timeouts?: PubsubTopicTimeouts;
}
export interface PubsubTopicIngestionDataSourceSettingsAwsKinesis {
  /**
  * AWS role ARN to be used for Federated Identity authentication with
  * Kinesis. Check the Pub/Sub docs for how to set up this role and the
  * required permissions that need to be attached to it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#aws_role_arn PubsubTopic#aws_role_arn}
  */
  readonly awsRoleArn: string;
  /**
  * The Kinesis consumer ARN to used for ingestion in
  * Enhanced Fan-Out mode. The consumer must be already
  * created and ready to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#consumer_arn PubsubTopic#consumer_arn}
  */
  readonly consumerArn: string;
  /**
  * The GCP service account to be used for Federated Identity authentication
  * with Kinesis (via a 'AssumeRoleWithWebIdentity' call for the provided
  * role). The 'awsRoleArn' must be set up with 'accounts.google.com:sub'
  * equals to this service account number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#gcp_service_account PubsubTopic#gcp_service_account}
  */
  readonly gcpServiceAccount: string;
  /**
  * The Kinesis stream ARN to ingest data from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#stream_arn PubsubTopic#stream_arn}
  */
  readonly streamArn: string;
}

export function pubsubTopicIngestionDataSourceSettingsAwsKinesisToTerraform(struct?: PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference | PubsubTopicIngestionDataSourceSettingsAwsKinesis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_role_arn: cdktf.stringToTerraform(struct!.awsRoleArn),
    consumer_arn: cdktf.stringToTerraform(struct!.consumerArn),
    gcp_service_account: cdktf.stringToTerraform(struct!.gcpServiceAccount),
    stream_arn: cdktf.stringToTerraform(struct!.streamArn),
  }
}


export function pubsubTopicIngestionDataSourceSettingsAwsKinesisToHclTerraform(struct?: PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference | PubsubTopicIngestionDataSourceSettingsAwsKinesis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.awsRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consumer_arn: {
      value: cdktf.stringToHclTerraform(struct!.consumerArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcp_service_account: {
      value: cdktf.stringToHclTerraform(struct!.gcpServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stream_arn: {
      value: cdktf.stringToHclTerraform(struct!.streamArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubTopicIngestionDataSourceSettingsAwsKinesis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRoleArn = this._awsRoleArn;
    }
    if (this._consumerArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumerArn = this._consumerArn;
    }
    if (this._gcpServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpServiceAccount = this._gcpServiceAccount;
    }
    if (this._streamArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamArn = this._streamArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubTopicIngestionDataSourceSettingsAwsKinesis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsRoleArn = undefined;
      this._consumerArn = undefined;
      this._gcpServiceAccount = undefined;
      this._streamArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsRoleArn = value.awsRoleArn;
      this._consumerArn = value.consumerArn;
      this._gcpServiceAccount = value.gcpServiceAccount;
      this._streamArn = value.streamArn;
    }
  }

  // aws_role_arn - computed: false, optional: false, required: true
  private _awsRoleArn?: string; 
  public get awsRoleArn() {
    return this.getStringAttribute('aws_role_arn');
  }
  public set awsRoleArn(value: string) {
    this._awsRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoleArnInput() {
    return this._awsRoleArn;
  }

  // consumer_arn - computed: false, optional: false, required: true
  private _consumerArn?: string; 
  public get consumerArn() {
    return this.getStringAttribute('consumer_arn');
  }
  public set consumerArn(value: string) {
    this._consumerArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerArnInput() {
    return this._consumerArn;
  }

  // gcp_service_account - computed: false, optional: false, required: true
  private _gcpServiceAccount?: string; 
  public get gcpServiceAccount() {
    return this.getStringAttribute('gcp_service_account');
  }
  public set gcpServiceAccount(value: string) {
    this._gcpServiceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountInput() {
    return this._gcpServiceAccount;
  }

  // stream_arn - computed: false, optional: false, required: true
  private _streamArn?: string; 
  public get streamArn() {
    return this.getStringAttribute('stream_arn');
  }
  public set streamArn(value: string) {
    this._streamArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamArnInput() {
    return this._streamArn;
  }
}
export interface PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat {
}

export function pubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatToTerraform(struct?: PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference | PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatToHclTerraform(struct?: PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference | PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat {
}

export function pubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatToTerraform(struct?: PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference | PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatToHclTerraform(struct?: PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference | PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat {
  /**
  * The delimiter to use when using the 'text' format. Each line of text as
  * specified by the delimiter will be set to the 'data' field of a Pub/Sub
  * message. When unset, '\n' is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#delimiter PubsubTopic#delimiter}
  */
  readonly delimiter?: string;
}

export function pubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatToTerraform(struct?: PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference | PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delimiter: cdktf.stringToTerraform(struct!.delimiter),
  }
}


export function pubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatToHclTerraform(struct?: PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference | PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delimiter: {
      value: cdktf.stringToHclTerraform(struct!.delimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.delimiter = this._delimiter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._delimiter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._delimiter = value.delimiter;
    }
  }

  // delimiter - computed: false, optional: true, required: false
  private _delimiter?: string; 
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }
  public set delimiter(value: string) {
    this._delimiter = value;
  }
  public resetDelimiter() {
    this._delimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delimiterInput() {
    return this._delimiter;
  }
}
export interface PubsubTopicIngestionDataSourceSettingsCloudStorage {
  /**
  * Cloud Storage bucket. The bucket name must be without any
  * prefix like "gs://". See the bucket naming requirements:
  * https://cloud.google.com/storage/docs/buckets#naming.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#bucket PubsubTopic#bucket}
  */
  readonly bucket: string;
  /**
  * Glob pattern used to match objects that will be ingested. If unset, all
  * objects will be ingested. See the supported patterns:
  * https://cloud.google.com/storage/docs/json_api/v1/objects/list#list-objects-and-prefixes-using-glob
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#match_glob PubsubTopic#match_glob}
  */
  readonly matchGlob?: string;
  /**
  * The timestamp set in RFC3339 text format. If set, only objects with a
  * larger or equal timestamp will be ingested. Unset by default, meaning
  * all objects will be ingested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#minimum_object_create_time PubsubTopic#minimum_object_create_time}
  */
  readonly minimumObjectCreateTime?: string;
  /**
  * avro_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#avro_format PubsubTopic#avro_format}
  */
  readonly avroFormat?: PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat;
  /**
  * pubsub_avro_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#pubsub_avro_format PubsubTopic#pubsub_avro_format}
  */
  readonly pubsubAvroFormat?: PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat;
  /**
  * text_format block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#text_format PubsubTopic#text_format}
  */
  readonly textFormat?: PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat;
}

export function pubsubTopicIngestionDataSourceSettingsCloudStorageToTerraform(struct?: PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference | PubsubTopicIngestionDataSourceSettingsCloudStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    match_glob: cdktf.stringToTerraform(struct!.matchGlob),
    minimum_object_create_time: cdktf.stringToTerraform(struct!.minimumObjectCreateTime),
    avro_format: pubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatToTerraform(struct!.avroFormat),
    pubsub_avro_format: pubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatToTerraform(struct!.pubsubAvroFormat),
    text_format: pubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatToTerraform(struct!.textFormat),
  }
}


export function pubsubTopicIngestionDataSourceSettingsCloudStorageToHclTerraform(struct?: PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference | PubsubTopicIngestionDataSourceSettingsCloudStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_glob: {
      value: cdktf.stringToHclTerraform(struct!.matchGlob),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_object_create_time: {
      value: cdktf.stringToHclTerraform(struct!.minimumObjectCreateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    avro_format: {
      value: pubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatToHclTerraform(struct!.avroFormat),
      isBlock: true,
      type: "list",
      storageClassType: "PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatList",
    },
    pubsub_avro_format: {
      value: pubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatToHclTerraform(struct!.pubsubAvroFormat),
      isBlock: true,
      type: "list",
      storageClassType: "PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatList",
    },
    text_format: {
      value: pubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatToHclTerraform(struct!.textFormat),
      isBlock: true,
      type: "list",
      storageClassType: "PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubTopicIngestionDataSourceSettingsCloudStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._matchGlob !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchGlob = this._matchGlob;
    }
    if (this._minimumObjectCreateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumObjectCreateTime = this._minimumObjectCreateTime;
    }
    if (this._avroFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroFormat = this._avroFormat?.internalValue;
    }
    if (this._pubsubAvroFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubAvroFormat = this._pubsubAvroFormat?.internalValue;
    }
    if (this._textFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textFormat = this._textFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubTopicIngestionDataSourceSettingsCloudStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._matchGlob = undefined;
      this._minimumObjectCreateTime = undefined;
      this._avroFormat.internalValue = undefined;
      this._pubsubAvroFormat.internalValue = undefined;
      this._textFormat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._matchGlob = value.matchGlob;
      this._minimumObjectCreateTime = value.minimumObjectCreateTime;
      this._avroFormat.internalValue = value.avroFormat;
      this._pubsubAvroFormat.internalValue = value.pubsubAvroFormat;
      this._textFormat.internalValue = value.textFormat;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // match_glob - computed: false, optional: true, required: false
  private _matchGlob?: string; 
  public get matchGlob() {
    return this.getStringAttribute('match_glob');
  }
  public set matchGlob(value: string) {
    this._matchGlob = value;
  }
  public resetMatchGlob() {
    this._matchGlob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchGlobInput() {
    return this._matchGlob;
  }

  // minimum_object_create_time - computed: false, optional: true, required: false
  private _minimumObjectCreateTime?: string; 
  public get minimumObjectCreateTime() {
    return this.getStringAttribute('minimum_object_create_time');
  }
  public set minimumObjectCreateTime(value: string) {
    this._minimumObjectCreateTime = value;
  }
  public resetMinimumObjectCreateTime() {
    this._minimumObjectCreateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumObjectCreateTimeInput() {
    return this._minimumObjectCreateTime;
  }

  // avro_format - computed: false, optional: true, required: false
  private _avroFormat = new PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormatOutputReference(this, "avro_format");
  public get avroFormat() {
    return this._avroFormat;
  }
  public putAvroFormat(value: PubsubTopicIngestionDataSourceSettingsCloudStorageAvroFormat) {
    this._avroFormat.internalValue = value;
  }
  public resetAvroFormat() {
    this._avroFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroFormatInput() {
    return this._avroFormat.internalValue;
  }

  // pubsub_avro_format - computed: false, optional: true, required: false
  private _pubsubAvroFormat = new PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormatOutputReference(this, "pubsub_avro_format");
  public get pubsubAvroFormat() {
    return this._pubsubAvroFormat;
  }
  public putPubsubAvroFormat(value: PubsubTopicIngestionDataSourceSettingsCloudStoragePubsubAvroFormat) {
    this._pubsubAvroFormat.internalValue = value;
  }
  public resetPubsubAvroFormat() {
    this._pubsubAvroFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubAvroFormatInput() {
    return this._pubsubAvroFormat.internalValue;
  }

  // text_format - computed: false, optional: true, required: false
  private _textFormat = new PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormatOutputReference(this, "text_format");
  public get textFormat() {
    return this._textFormat;
  }
  public putTextFormat(value: PubsubTopicIngestionDataSourceSettingsCloudStorageTextFormat) {
    this._textFormat.internalValue = value;
  }
  public resetTextFormat() {
    this._textFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textFormatInput() {
    return this._textFormat.internalValue;
  }
}
export interface PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings {
  /**
  * The minimum severity level of Platform Logs that will be written. If unspecified,
  * no Platform Logs will be written. Default value: "SEVERITY_UNSPECIFIED" Possible values: ["SEVERITY_UNSPECIFIED", "DISABLED", "DEBUG", "INFO", "WARNING", "ERROR"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#severity PubsubTopic#severity}
  */
  readonly severity?: string;
}

export function pubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsToTerraform(struct?: PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference | PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}


export function pubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsToHclTerraform(struct?: PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference | PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._severity = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._severity = value.severity;
    }
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}
export interface PubsubTopicIngestionDataSourceSettings {
  /**
  * aws_kinesis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#aws_kinesis PubsubTopic#aws_kinesis}
  */
  readonly awsKinesis?: PubsubTopicIngestionDataSourceSettingsAwsKinesis;
  /**
  * cloud_storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#cloud_storage PubsubTopic#cloud_storage}
  */
  readonly cloudStorage?: PubsubTopicIngestionDataSourceSettingsCloudStorage;
  /**
  * platform_logs_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#platform_logs_settings PubsubTopic#platform_logs_settings}
  */
  readonly platformLogsSettings?: PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings;
}

export function pubsubTopicIngestionDataSourceSettingsToTerraform(struct?: PubsubTopicIngestionDataSourceSettingsOutputReference | PubsubTopicIngestionDataSourceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_kinesis: pubsubTopicIngestionDataSourceSettingsAwsKinesisToTerraform(struct!.awsKinesis),
    cloud_storage: pubsubTopicIngestionDataSourceSettingsCloudStorageToTerraform(struct!.cloudStorage),
    platform_logs_settings: pubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsToTerraform(struct!.platformLogsSettings),
  }
}


export function pubsubTopicIngestionDataSourceSettingsToHclTerraform(struct?: PubsubTopicIngestionDataSourceSettingsOutputReference | PubsubTopicIngestionDataSourceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_kinesis: {
      value: pubsubTopicIngestionDataSourceSettingsAwsKinesisToHclTerraform(struct!.awsKinesis),
      isBlock: true,
      type: "list",
      storageClassType: "PubsubTopicIngestionDataSourceSettingsAwsKinesisList",
    },
    cloud_storage: {
      value: pubsubTopicIngestionDataSourceSettingsCloudStorageToHclTerraform(struct!.cloudStorage),
      isBlock: true,
      type: "list",
      storageClassType: "PubsubTopicIngestionDataSourceSettingsCloudStorageList",
    },
    platform_logs_settings: {
      value: pubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsToHclTerraform(struct!.platformLogsSettings),
      isBlock: true,
      type: "list",
      storageClassType: "PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubTopicIngestionDataSourceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubTopicIngestionDataSourceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsKinesis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsKinesis = this._awsKinesis?.internalValue;
    }
    if (this._cloudStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStorage = this._cloudStorage?.internalValue;
    }
    if (this._platformLogsSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformLogsSettings = this._platformLogsSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubTopicIngestionDataSourceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._awsKinesis.internalValue = undefined;
      this._cloudStorage.internalValue = undefined;
      this._platformLogsSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._awsKinesis.internalValue = value.awsKinesis;
      this._cloudStorage.internalValue = value.cloudStorage;
      this._platformLogsSettings.internalValue = value.platformLogsSettings;
    }
  }

  // aws_kinesis - computed: false, optional: true, required: false
  private _awsKinesis = new PubsubTopicIngestionDataSourceSettingsAwsKinesisOutputReference(this, "aws_kinesis");
  public get awsKinesis() {
    return this._awsKinesis;
  }
  public putAwsKinesis(value: PubsubTopicIngestionDataSourceSettingsAwsKinesis) {
    this._awsKinesis.internalValue = value;
  }
  public resetAwsKinesis() {
    this._awsKinesis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsKinesisInput() {
    return this._awsKinesis.internalValue;
  }

  // cloud_storage - computed: false, optional: true, required: false
  private _cloudStorage = new PubsubTopicIngestionDataSourceSettingsCloudStorageOutputReference(this, "cloud_storage");
  public get cloudStorage() {
    return this._cloudStorage;
  }
  public putCloudStorage(value: PubsubTopicIngestionDataSourceSettingsCloudStorage) {
    this._cloudStorage.internalValue = value;
  }
  public resetCloudStorage() {
    this._cloudStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageInput() {
    return this._cloudStorage.internalValue;
  }

  // platform_logs_settings - computed: false, optional: true, required: false
  private _platformLogsSettings = new PubsubTopicIngestionDataSourceSettingsPlatformLogsSettingsOutputReference(this, "platform_logs_settings");
  public get platformLogsSettings() {
    return this._platformLogsSettings;
  }
  public putPlatformLogsSettings(value: PubsubTopicIngestionDataSourceSettingsPlatformLogsSettings) {
    this._platformLogsSettings.internalValue = value;
  }
  public resetPlatformLogsSettings() {
    this._platformLogsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformLogsSettingsInput() {
    return this._platformLogsSettings.internalValue;
  }
}
export interface PubsubTopicMessageStoragePolicy {
  /**
  * A list of IDs of GCP regions where messages that are published to
  * the topic may be persisted in storage. Messages published by
  * publishers running in non-allowed GCP regions (or running outside
  * of GCP altogether) will be routed for storage in one of the
  * allowed regions. An empty list means that no regions are allowed,
  * and is not a valid configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#allowed_persistence_regions PubsubTopic#allowed_persistence_regions}
  */
  readonly allowedPersistenceRegions: string[];
}

export function pubsubTopicMessageStoragePolicyToTerraform(struct?: PubsubTopicMessageStoragePolicyOutputReference | PubsubTopicMessageStoragePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_persistence_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedPersistenceRegions),
  }
}


export function pubsubTopicMessageStoragePolicyToHclTerraform(struct?: PubsubTopicMessageStoragePolicyOutputReference | PubsubTopicMessageStoragePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_persistence_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedPersistenceRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubTopicMessageStoragePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubTopicMessageStoragePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedPersistenceRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedPersistenceRegions = this._allowedPersistenceRegions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubTopicMessageStoragePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedPersistenceRegions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedPersistenceRegions = value.allowedPersistenceRegions;
    }
  }

  // allowed_persistence_regions - computed: false, optional: false, required: true
  private _allowedPersistenceRegions?: string[]; 
  public get allowedPersistenceRegions() {
    return this.getListAttribute('allowed_persistence_regions');
  }
  public set allowedPersistenceRegions(value: string[]) {
    this._allowedPersistenceRegions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedPersistenceRegionsInput() {
    return this._allowedPersistenceRegions;
  }
}
export interface PubsubTopicSchemaSettings {
  /**
  * The encoding of messages validated against schema. Default value: "ENCODING_UNSPECIFIED" Possible values: ["ENCODING_UNSPECIFIED", "JSON", "BINARY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#encoding PubsubTopic#encoding}
  */
  readonly encoding?: string;
  /**
  * The name of the schema that messages published should be
  * validated against. Format is projects/{project}/schemas/{schema}.
  * The value of this field will be _deleted-schema_
  * if the schema has been deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#schema PubsubTopic#schema}
  */
  readonly schema: string;
}

export function pubsubTopicSchemaSettingsToTerraform(struct?: PubsubTopicSchemaSettingsOutputReference | PubsubTopicSchemaSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    schema: cdktf.stringToTerraform(struct!.schema),
  }
}


export function pubsubTopicSchemaSettingsToHclTerraform(struct?: PubsubTopicSchemaSettingsOutputReference | PubsubTopicSchemaSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PubsubTopicSchemaSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PubsubTopicSchemaSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PubsubTopicSchemaSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encoding = undefined;
      this._schema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encoding = value.encoding;
      this._schema = value.schema;
    }
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }
}
export interface PubsubTopicTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#create PubsubTopic#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#delete PubsubTopic#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#update PubsubTopic#update}
  */
  readonly update?: string;
}

export function pubsubTopicTimeoutsToTerraform(struct?: PubsubTopicTimeouts | cdktf.IResolvable): any {
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


export function pubsubTopicTimeoutsToHclTerraform(struct?: PubsubTopicTimeouts | cdktf.IResolvable): any {
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

export class PubsubTopicTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PubsubTopicTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PubsubTopicTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic google_pubsub_topic}
*/
export class PubsubTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_pubsub_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PubsubTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PubsubTopic to import
  * @param importFromId The id of the existing PubsubTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PubsubTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_pubsub_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/pubsub_topic google_pubsub_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PubsubTopicConfig
  */
  public constructor(scope: Construct, id: string, config: PubsubTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'google_pubsub_topic',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.11.1',
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
    this._kmsKeyName = config.kmsKeyName;
    this._labels = config.labels;
    this._messageRetentionDuration = config.messageRetentionDuration;
    this._name = config.name;
    this._project = config.project;
    this._ingestionDataSourceSettings.internalValue = config.ingestionDataSourceSettings;
    this._messageStoragePolicy.internalValue = config.messageStoragePolicy;
    this._schemaSettings.internalValue = config.schemaSettings;
    this._timeouts.internalValue = config.timeouts;
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

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
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

  // message_retention_duration - computed: false, optional: true, required: false
  private _messageRetentionDuration?: string; 
  public get messageRetentionDuration() {
    return this.getStringAttribute('message_retention_duration');
  }
  public set messageRetentionDuration(value: string) {
    this._messageRetentionDuration = value;
  }
  public resetMessageRetentionDuration() {
    this._messageRetentionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageRetentionDurationInput() {
    return this._messageRetentionDuration;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // ingestion_data_source_settings - computed: false, optional: true, required: false
  private _ingestionDataSourceSettings = new PubsubTopicIngestionDataSourceSettingsOutputReference(this, "ingestion_data_source_settings");
  public get ingestionDataSourceSettings() {
    return this._ingestionDataSourceSettings;
  }
  public putIngestionDataSourceSettings(value: PubsubTopicIngestionDataSourceSettings) {
    this._ingestionDataSourceSettings.internalValue = value;
  }
  public resetIngestionDataSourceSettings() {
    this._ingestionDataSourceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingestionDataSourceSettingsInput() {
    return this._ingestionDataSourceSettings.internalValue;
  }

  // message_storage_policy - computed: false, optional: true, required: false
  private _messageStoragePolicy = new PubsubTopicMessageStoragePolicyOutputReference(this, "message_storage_policy");
  public get messageStoragePolicy() {
    return this._messageStoragePolicy;
  }
  public putMessageStoragePolicy(value: PubsubTopicMessageStoragePolicy) {
    this._messageStoragePolicy.internalValue = value;
  }
  public resetMessageStoragePolicy() {
    this._messageStoragePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageStoragePolicyInput() {
    return this._messageStoragePolicy.internalValue;
  }

  // schema_settings - computed: false, optional: true, required: false
  private _schemaSettings = new PubsubTopicSchemaSettingsOutputReference(this, "schema_settings");
  public get schemaSettings() {
    return this._schemaSettings;
  }
  public putSchemaSettings(value: PubsubTopicSchemaSettings) {
    this._schemaSettings.internalValue = value;
  }
  public resetSchemaSettings() {
    this._schemaSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaSettingsInput() {
    return this._schemaSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PubsubTopicTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PubsubTopicTimeouts) {
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
      kms_key_name: cdktf.stringToTerraform(this._kmsKeyName),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      message_retention_duration: cdktf.stringToTerraform(this._messageRetentionDuration),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      ingestion_data_source_settings: pubsubTopicIngestionDataSourceSettingsToTerraform(this._ingestionDataSourceSettings.internalValue),
      message_storage_policy: pubsubTopicMessageStoragePolicyToTerraform(this._messageStoragePolicy.internalValue),
      schema_settings: pubsubTopicSchemaSettingsToTerraform(this._schemaSettings.internalValue),
      timeouts: pubsubTopicTimeoutsToTerraform(this._timeouts.internalValue),
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
      kms_key_name: {
        value: cdktf.stringToHclTerraform(this._kmsKeyName),
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
      message_retention_duration: {
        value: cdktf.stringToHclTerraform(this._messageRetentionDuration),
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
      ingestion_data_source_settings: {
        value: pubsubTopicIngestionDataSourceSettingsToHclTerraform(this._ingestionDataSourceSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PubsubTopicIngestionDataSourceSettingsList",
      },
      message_storage_policy: {
        value: pubsubTopicMessageStoragePolicyToHclTerraform(this._messageStoragePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PubsubTopicMessageStoragePolicyList",
      },
      schema_settings: {
        value: pubsubTopicSchemaSettingsToHclTerraform(this._schemaSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PubsubTopicSchemaSettingsList",
      },
      timeouts: {
        value: pubsubTopicTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PubsubTopicTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
