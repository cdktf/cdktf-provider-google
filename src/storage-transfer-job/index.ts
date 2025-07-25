/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageTransferJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique description to identify the Transfer Job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#description StorageTransferJob#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#id StorageTransferJob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Transfer Job.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#name StorageTransferJob#name}
  */
  readonly name?: string;
  /**
  * The project in which the resource belongs. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#project StorageTransferJob#project}
  */
  readonly project?: string;
  /**
  * Status of the job. Default: ENABLED. NOTE: The effect of the new job status takes place during a subsequent job run. For example, if you change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is running, the status change would not affect the current operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#status StorageTransferJob#status}
  */
  readonly status?: string;
  /**
  * event_stream block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#event_stream StorageTransferJob#event_stream}
  */
  readonly eventStream?: StorageTransferJobEventStream;
  /**
  * logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#logging_config StorageTransferJob#logging_config}
  */
  readonly loggingConfig?: StorageTransferJobLoggingConfig;
  /**
  * notification_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#notification_config StorageTransferJob#notification_config}
  */
  readonly notificationConfig?: StorageTransferJobNotificationConfig;
  /**
  * replication_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#replication_spec StorageTransferJob#replication_spec}
  */
  readonly replicationSpec?: StorageTransferJobReplicationSpec;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#schedule StorageTransferJob#schedule}
  */
  readonly schedule?: StorageTransferJobSchedule;
  /**
  * transfer_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#transfer_spec StorageTransferJob#transfer_spec}
  */
  readonly transferSpec?: StorageTransferJobTransferSpec;
}
export interface StorageTransferJobEventStream {
  /**
  * Specifies the data and time at which Storage Transfer Service stops listening for events from this stream. After this time, any transfers in progress will complete, but no new transfers are initiated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#event_stream_expiration_time StorageTransferJob#event_stream_expiration_time}
  */
  readonly eventStreamExpirationTime?: string;
  /**
  * Specifies the date and time that Storage Transfer Service starts listening for events from this stream. If no start time is specified or start time is in the past, Storage Transfer Service starts listening immediately
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#event_stream_start_time StorageTransferJob#event_stream_start_time}
  */
  readonly eventStreamStartTime?: string;
  /**
  * Specifies a unique name of the resource such as AWS SQS ARN in the form 'arn:aws:sqs:region:account_id:queue_name', or Pub/Sub subscription resource name in the form 'projects/{project}/subscriptions/{sub}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#name StorageTransferJob#name}
  */
  readonly name: string;
}

export function storageTransferJobEventStreamToTerraform(struct?: StorageTransferJobEventStreamOutputReference | StorageTransferJobEventStream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_stream_expiration_time: cdktf.stringToTerraform(struct!.eventStreamExpirationTime),
    event_stream_start_time: cdktf.stringToTerraform(struct!.eventStreamStartTime),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function storageTransferJobEventStreamToHclTerraform(struct?: StorageTransferJobEventStreamOutputReference | StorageTransferJobEventStream): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_stream_expiration_time: {
      value: cdktf.stringToHclTerraform(struct!.eventStreamExpirationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    event_stream_start_time: {
      value: cdktf.stringToHclTerraform(struct!.eventStreamStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobEventStreamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobEventStream | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventStreamExpirationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventStreamExpirationTime = this._eventStreamExpirationTime;
    }
    if (this._eventStreamStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventStreamStartTime = this._eventStreamStartTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobEventStream | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventStreamExpirationTime = undefined;
      this._eventStreamStartTime = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventStreamExpirationTime = value.eventStreamExpirationTime;
      this._eventStreamStartTime = value.eventStreamStartTime;
      this._name = value.name;
    }
  }

  // event_stream_expiration_time - computed: false, optional: true, required: false
  private _eventStreamExpirationTime?: string; 
  public get eventStreamExpirationTime() {
    return this.getStringAttribute('event_stream_expiration_time');
  }
  public set eventStreamExpirationTime(value: string) {
    this._eventStreamExpirationTime = value;
  }
  public resetEventStreamExpirationTime() {
    this._eventStreamExpirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventStreamExpirationTimeInput() {
    return this._eventStreamExpirationTime;
  }

  // event_stream_start_time - computed: false, optional: true, required: false
  private _eventStreamStartTime?: string; 
  public get eventStreamStartTime() {
    return this.getStringAttribute('event_stream_start_time');
  }
  public set eventStreamStartTime(value: string) {
    this._eventStreamStartTime = value;
  }
  public resetEventStreamStartTime() {
    this._eventStreamStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventStreamStartTimeInput() {
    return this._eventStreamStartTime;
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
}
export interface StorageTransferJobLoggingConfig {
  /**
  * For transfers with a PosixFilesystem source, this option enables the Cloud Storage transfer logs for this transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#enable_on_prem_gcs_transfer_logs StorageTransferJob#enable_on_prem_gcs_transfer_logs}
  */
  readonly enableOnPremGcsTransferLogs?: boolean | cdktf.IResolvable;
  /**
  * States in which logActions are logged. Not supported for transfers with PosifxFilesystem data sources; use enable_on_prem_gcs_transfer_logs instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#log_action_states StorageTransferJob#log_action_states}
  */
  readonly logActionStates?: string[];
  /**
  * Specifies the actions to be logged. Not supported for transfers with PosifxFilesystem data sources; use enable_on_prem_gcs_transfer_logs instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#log_actions StorageTransferJob#log_actions}
  */
  readonly logActions?: string[];
}

export function storageTransferJobLoggingConfigToTerraform(struct?: StorageTransferJobLoggingConfigOutputReference | StorageTransferJobLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_on_prem_gcs_transfer_logs: cdktf.booleanToTerraform(struct!.enableOnPremGcsTransferLogs),
    log_action_states: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logActionStates),
    log_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logActions),
  }
}


export function storageTransferJobLoggingConfigToHclTerraform(struct?: StorageTransferJobLoggingConfigOutputReference | StorageTransferJobLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_on_prem_gcs_transfer_logs: {
      value: cdktf.booleanToHclTerraform(struct!.enableOnPremGcsTransferLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_action_states: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.logActionStates),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.logActions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableOnPremGcsTransferLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOnPremGcsTransferLogs = this._enableOnPremGcsTransferLogs;
    }
    if (this._logActionStates !== undefined) {
      hasAnyValues = true;
      internalValueResult.logActionStates = this._logActionStates;
    }
    if (this._logActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.logActions = this._logActions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableOnPremGcsTransferLogs = undefined;
      this._logActionStates = undefined;
      this._logActions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableOnPremGcsTransferLogs = value.enableOnPremGcsTransferLogs;
      this._logActionStates = value.logActionStates;
      this._logActions = value.logActions;
    }
  }

  // enable_on_prem_gcs_transfer_logs - computed: false, optional: true, required: false
  private _enableOnPremGcsTransferLogs?: boolean | cdktf.IResolvable; 
  public get enableOnPremGcsTransferLogs() {
    return this.getBooleanAttribute('enable_on_prem_gcs_transfer_logs');
  }
  public set enableOnPremGcsTransferLogs(value: boolean | cdktf.IResolvable) {
    this._enableOnPremGcsTransferLogs = value;
  }
  public resetEnableOnPremGcsTransferLogs() {
    this._enableOnPremGcsTransferLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOnPremGcsTransferLogsInput() {
    return this._enableOnPremGcsTransferLogs;
  }

  // log_action_states - computed: false, optional: true, required: false
  private _logActionStates?: string[]; 
  public get logActionStates() {
    return this.getListAttribute('log_action_states');
  }
  public set logActionStates(value: string[]) {
    this._logActionStates = value;
  }
  public resetLogActionStates() {
    this._logActionStates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logActionStatesInput() {
    return this._logActionStates;
  }

  // log_actions - computed: false, optional: true, required: false
  private _logActions?: string[]; 
  public get logActions() {
    return this.getListAttribute('log_actions');
  }
  public set logActions(value: string[]) {
    this._logActions = value;
  }
  public resetLogActions() {
    this._logActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logActionsInput() {
    return this._logActions;
  }
}
export interface StorageTransferJobNotificationConfig {
  /**
  * Event types for which a notification is desired. If empty, send notifications for all event types. The valid types are "TRANSFER_OPERATION_SUCCESS", "TRANSFER_OPERATION_FAILED", "TRANSFER_OPERATION_ABORTED".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#event_types StorageTransferJob#event_types}
  */
  readonly eventTypes?: string[];
  /**
  * The desired format of the notification message payloads. One of "NONE" or "JSON".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#payload_format StorageTransferJob#payload_format}
  */
  readonly payloadFormat: string;
  /**
  * The Topic.name of the Pub/Sub topic to which to publish notifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#pubsub_topic StorageTransferJob#pubsub_topic}
  */
  readonly pubsubTopic: string;
}

export function storageTransferJobNotificationConfigToTerraform(struct?: StorageTransferJobNotificationConfigOutputReference | StorageTransferJobNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventTypes),
    payload_format: cdktf.stringToTerraform(struct!.payloadFormat),
    pubsub_topic: cdktf.stringToTerraform(struct!.pubsubTopic),
  }
}


export function storageTransferJobNotificationConfigToHclTerraform(struct?: StorageTransferJobNotificationConfigOutputReference | StorageTransferJobNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    payload_format: {
      value: cdktf.stringToHclTerraform(struct!.payloadFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pubsub_topic: {
      value: cdktf.stringToHclTerraform(struct!.pubsubTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobNotificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobNotificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventTypes = this._eventTypes;
    }
    if (this._payloadFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadFormat = this._payloadFormat;
    }
    if (this._pubsubTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsubTopic = this._pubsubTopic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobNotificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventTypes = undefined;
      this._payloadFormat = undefined;
      this._pubsubTopic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventTypes = value.eventTypes;
      this._payloadFormat = value.payloadFormat;
      this._pubsubTopic = value.pubsubTopic;
    }
  }

  // event_types - computed: false, optional: true, required: false
  private _eventTypes?: string[]; 
  public get eventTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('event_types'));
  }
  public set eventTypes(value: string[]) {
    this._eventTypes = value;
  }
  public resetEventTypes() {
    this._eventTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypesInput() {
    return this._eventTypes;
  }

  // payload_format - computed: false, optional: false, required: true
  private _payloadFormat?: string; 
  public get payloadFormat() {
    return this.getStringAttribute('payload_format');
  }
  public set payloadFormat(value: string) {
    this._payloadFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadFormatInput() {
    return this._payloadFormat;
  }

  // pubsub_topic - computed: false, optional: false, required: true
  private _pubsubTopic?: string; 
  public get pubsubTopic() {
    return this.getStringAttribute('pubsub_topic');
  }
  public set pubsubTopic(value: string) {
    this._pubsubTopic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubTopicInput() {
    return this._pubsubTopic;
  }
}
export interface StorageTransferJobReplicationSpecGcsDataSink {
  /**
  * Google Cloud Storage bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Google Cloud Storage path in bucket to transfer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}
  */
  readonly path?: string;
}

export function storageTransferJobReplicationSpecGcsDataSinkToTerraform(struct?: StorageTransferJobReplicationSpecGcsDataSinkOutputReference | StorageTransferJobReplicationSpecGcsDataSink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function storageTransferJobReplicationSpecGcsDataSinkToHclTerraform(struct?: StorageTransferJobReplicationSpecGcsDataSinkOutputReference | StorageTransferJobReplicationSpecGcsDataSink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobReplicationSpecGcsDataSinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobReplicationSpecGcsDataSink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobReplicationSpecGcsDataSink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._path = value.path;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // path - computed: true, optional: true, required: false
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
}
export interface StorageTransferJobReplicationSpecGcsDataSource {
  /**
  * Google Cloud Storage bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Google Cloud Storage path in bucket to transfer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}
  */
  readonly path?: string;
}

export function storageTransferJobReplicationSpecGcsDataSourceToTerraform(struct?: StorageTransferJobReplicationSpecGcsDataSourceOutputReference | StorageTransferJobReplicationSpecGcsDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function storageTransferJobReplicationSpecGcsDataSourceToHclTerraform(struct?: StorageTransferJobReplicationSpecGcsDataSourceOutputReference | StorageTransferJobReplicationSpecGcsDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobReplicationSpecGcsDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobReplicationSpecGcsDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobReplicationSpecGcsDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._path = value.path;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // path - computed: true, optional: true, required: false
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
}
export interface StorageTransferJobReplicationSpecObjectConditions {
  /**
  * exclude_prefixes must follow the requirements described for include_prefixes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#exclude_prefixes StorageTransferJob#exclude_prefixes}
  */
  readonly excludePrefixes?: string[];
  /**
  * If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes. If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#include_prefixes StorageTransferJob#include_prefixes}
  */
  readonly includePrefixes?: string[];
  /**
  * If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#last_modified_before StorageTransferJob#last_modified_before}
  */
  readonly lastModifiedBefore?: string;
  /**
  * If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#last_modified_since StorageTransferJob#last_modified_since}
  */
  readonly lastModifiedSince?: string;
  /**
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#max_time_elapsed_since_last_modification StorageTransferJob#max_time_elapsed_since_last_modification}
  */
  readonly maxTimeElapsedSinceLastModification?: string;
  /**
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#min_time_elapsed_since_last_modification StorageTransferJob#min_time_elapsed_since_last_modification}
  */
  readonly minTimeElapsedSinceLastModification?: string;
}

export function storageTransferJobReplicationSpecObjectConditionsToTerraform(struct?: StorageTransferJobReplicationSpecObjectConditionsOutputReference | StorageTransferJobReplicationSpecObjectConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePrefixes),
    include_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includePrefixes),
    last_modified_before: cdktf.stringToTerraform(struct!.lastModifiedBefore),
    last_modified_since: cdktf.stringToTerraform(struct!.lastModifiedSince),
    max_time_elapsed_since_last_modification: cdktf.stringToTerraform(struct!.maxTimeElapsedSinceLastModification),
    min_time_elapsed_since_last_modification: cdktf.stringToTerraform(struct!.minTimeElapsedSinceLastModification),
  }
}


export function storageTransferJobReplicationSpecObjectConditionsToHclTerraform(struct?: StorageTransferJobReplicationSpecObjectConditionsOutputReference | StorageTransferJobReplicationSpecObjectConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    last_modified_before: {
      value: cdktf.stringToHclTerraform(struct!.lastModifiedBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_modified_since: {
      value: cdktf.stringToHclTerraform(struct!.lastModifiedSince),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_time_elapsed_since_last_modification: {
      value: cdktf.stringToHclTerraform(struct!.maxTimeElapsedSinceLastModification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_time_elapsed_since_last_modification: {
      value: cdktf.stringToHclTerraform(struct!.minTimeElapsedSinceLastModification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobReplicationSpecObjectConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobReplicationSpecObjectConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePrefixes = this._excludePrefixes;
    }
    if (this._includePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePrefixes = this._includePrefixes;
    }
    if (this._lastModifiedBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastModifiedBefore = this._lastModifiedBefore;
    }
    if (this._lastModifiedSince !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastModifiedSince = this._lastModifiedSince;
    }
    if (this._maxTimeElapsedSinceLastModification !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTimeElapsedSinceLastModification = this._maxTimeElapsedSinceLastModification;
    }
    if (this._minTimeElapsedSinceLastModification !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTimeElapsedSinceLastModification = this._minTimeElapsedSinceLastModification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobReplicationSpecObjectConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludePrefixes = undefined;
      this._includePrefixes = undefined;
      this._lastModifiedBefore = undefined;
      this._lastModifiedSince = undefined;
      this._maxTimeElapsedSinceLastModification = undefined;
      this._minTimeElapsedSinceLastModification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludePrefixes = value.excludePrefixes;
      this._includePrefixes = value.includePrefixes;
      this._lastModifiedBefore = value.lastModifiedBefore;
      this._lastModifiedSince = value.lastModifiedSince;
      this._maxTimeElapsedSinceLastModification = value.maxTimeElapsedSinceLastModification;
      this._minTimeElapsedSinceLastModification = value.minTimeElapsedSinceLastModification;
    }
  }

  // exclude_prefixes - computed: false, optional: true, required: false
  private _excludePrefixes?: string[]; 
  public get excludePrefixes() {
    return this.getListAttribute('exclude_prefixes');
  }
  public set excludePrefixes(value: string[]) {
    this._excludePrefixes = value;
  }
  public resetExcludePrefixes() {
    this._excludePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePrefixesInput() {
    return this._excludePrefixes;
  }

  // include_prefixes - computed: false, optional: true, required: false
  private _includePrefixes?: string[]; 
  public get includePrefixes() {
    return this.getListAttribute('include_prefixes');
  }
  public set includePrefixes(value: string[]) {
    this._includePrefixes = value;
  }
  public resetIncludePrefixes() {
    this._includePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePrefixesInput() {
    return this._includePrefixes;
  }

  // last_modified_before - computed: false, optional: true, required: false
  private _lastModifiedBefore?: string; 
  public get lastModifiedBefore() {
    return this.getStringAttribute('last_modified_before');
  }
  public set lastModifiedBefore(value: string) {
    this._lastModifiedBefore = value;
  }
  public resetLastModifiedBefore() {
    this._lastModifiedBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastModifiedBeforeInput() {
    return this._lastModifiedBefore;
  }

  // last_modified_since - computed: false, optional: true, required: false
  private _lastModifiedSince?: string; 
  public get lastModifiedSince() {
    return this.getStringAttribute('last_modified_since');
  }
  public set lastModifiedSince(value: string) {
    this._lastModifiedSince = value;
  }
  public resetLastModifiedSince() {
    this._lastModifiedSince = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastModifiedSinceInput() {
    return this._lastModifiedSince;
  }

  // max_time_elapsed_since_last_modification - computed: false, optional: true, required: false
  private _maxTimeElapsedSinceLastModification?: string; 
  public get maxTimeElapsedSinceLastModification() {
    return this.getStringAttribute('max_time_elapsed_since_last_modification');
  }
  public set maxTimeElapsedSinceLastModification(value: string) {
    this._maxTimeElapsedSinceLastModification = value;
  }
  public resetMaxTimeElapsedSinceLastModification() {
    this._maxTimeElapsedSinceLastModification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimeElapsedSinceLastModificationInput() {
    return this._maxTimeElapsedSinceLastModification;
  }

  // min_time_elapsed_since_last_modification - computed: false, optional: true, required: false
  private _minTimeElapsedSinceLastModification?: string; 
  public get minTimeElapsedSinceLastModification() {
    return this.getStringAttribute('min_time_elapsed_since_last_modification');
  }
  public set minTimeElapsedSinceLastModification(value: string) {
    this._minTimeElapsedSinceLastModification = value;
  }
  public resetMinTimeElapsedSinceLastModification() {
    this._minTimeElapsedSinceLastModification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTimeElapsedSinceLastModificationInput() {
    return this._minTimeElapsedSinceLastModification;
  }
}
export interface StorageTransferJobReplicationSpecTransferOptionsMetadataOptions {
  /**
  * Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#acl StorageTransferJob#acl}
  */
  readonly acl?: string;
  /**
  * Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#gid StorageTransferJob#gid}
  */
  readonly gid?: string;
  /**
  * Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#kms_key StorageTransferJob#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Specifies how each file's mode attribute should be handled by the transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#mode StorageTransferJob#mode}
  */
  readonly mode?: string;
  /**
  * Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#storage_class StorageTransferJob#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Specifies how symlinks should be handled by the transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#symlink StorageTransferJob#symlink}
  */
  readonly symlink?: string;
  /**
  * SSpecifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#temporary_hold StorageTransferJob#temporary_hold}
  */
  readonly temporaryHold?: string;
  /**
  * Specifies how each object's timeCreated metadata is preserved for transfers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#time_created StorageTransferJob#time_created}
  */
  readonly timeCreated?: string;
  /**
  * Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#uid StorageTransferJob#uid}
  */
  readonly uid?: string;
}

export function storageTransferJobReplicationSpecTransferOptionsMetadataOptionsToTerraform(struct?: StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference | StorageTransferJobReplicationSpecTransferOptionsMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktf.stringToTerraform(struct!.acl),
    gid: cdktf.stringToTerraform(struct!.gid),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    mode: cdktf.stringToTerraform(struct!.mode),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    symlink: cdktf.stringToTerraform(struct!.symlink),
    temporary_hold: cdktf.stringToTerraform(struct!.temporaryHold),
    time_created: cdktf.stringToTerraform(struct!.timeCreated),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function storageTransferJobReplicationSpecTransferOptionsMetadataOptionsToHclTerraform(struct?: StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference | StorageTransferJobReplicationSpecTransferOptionsMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gid: {
      value: cdktf.stringToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    symlink: {
      value: cdktf.stringToHclTerraform(struct!.symlink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temporary_hold: {
      value: cdktf.stringToHclTerraform(struct!.temporaryHold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_created: {
      value: cdktf.stringToHclTerraform(struct!.timeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobReplicationSpecTransferOptionsMetadataOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._symlink !== undefined) {
      hasAnyValues = true;
      internalValueResult.symlink = this._symlink;
    }
    if (this._temporaryHold !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporaryHold = this._temporaryHold;
    }
    if (this._timeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeCreated = this._timeCreated;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobReplicationSpecTransferOptionsMetadataOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acl = undefined;
      this._gid = undefined;
      this._kmsKey = undefined;
      this._mode = undefined;
      this._storageClass = undefined;
      this._symlink = undefined;
      this._temporaryHold = undefined;
      this._timeCreated = undefined;
      this._uid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acl = value.acl;
      this._gid = value.gid;
      this._kmsKey = value.kmsKey;
      this._mode = value.mode;
      this._storageClass = value.storageClass;
      this._symlink = value.symlink;
      this._temporaryHold = value.temporaryHold;
      this._timeCreated = value.timeCreated;
      this._uid = value.uid;
    }
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // gid - computed: false, optional: true, required: false
  private _gid?: string; 
  public get gid() {
    return this.getStringAttribute('gid');
  }
  public set gid(value: string) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // symlink - computed: false, optional: true, required: false
  private _symlink?: string; 
  public get symlink() {
    return this.getStringAttribute('symlink');
  }
  public set symlink(value: string) {
    this._symlink = value;
  }
  public resetSymlink() {
    this._symlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symlinkInput() {
    return this._symlink;
  }

  // temporary_hold - computed: false, optional: true, required: false
  private _temporaryHold?: string; 
  public get temporaryHold() {
    return this.getStringAttribute('temporary_hold');
  }
  public set temporaryHold(value: string) {
    this._temporaryHold = value;
  }
  public resetTemporaryHold() {
    this._temporaryHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryHoldInput() {
    return this._temporaryHold;
  }

  // time_created - computed: false, optional: true, required: false
  private _timeCreated?: string; 
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
  public set timeCreated(value: string) {
    this._timeCreated = value;
  }
  public resetTimeCreated() {
    this._timeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeCreatedInput() {
    return this._timeCreated;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface StorageTransferJobReplicationSpecTransferOptions {
  /**
  * Whether objects should be deleted from the source after they are transferred to the sink. Note that this option and delete_objects_unique_in_sink are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#delete_objects_from_source_after_transfer StorageTransferJob#delete_objects_from_source_after_transfer}
  */
  readonly deleteObjectsFromSourceAfterTransfer?: boolean | cdktf.IResolvable;
  /**
  * Whether objects that exist only in the sink should be deleted. Note that this option and delete_objects_from_source_after_transfer are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#delete_objects_unique_in_sink StorageTransferJob#delete_objects_unique_in_sink}
  */
  readonly deleteObjectsUniqueInSink?: boolean | cdktf.IResolvable;
  /**
  * Whether overwriting objects that already exist in the sink is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#overwrite_objects_already_existing_in_sink StorageTransferJob#overwrite_objects_already_existing_in_sink}
  */
  readonly overwriteObjectsAlreadyExistingInSink?: boolean | cdktf.IResolvable;
  /**
  * When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#overwrite_when StorageTransferJob#overwrite_when}
  */
  readonly overwriteWhen?: string;
  /**
  * metadata_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#metadata_options StorageTransferJob#metadata_options}
  */
  readonly metadataOptions?: StorageTransferJobReplicationSpecTransferOptionsMetadataOptions;
}

export function storageTransferJobReplicationSpecTransferOptionsToTerraform(struct?: StorageTransferJobReplicationSpecTransferOptionsOutputReference | StorageTransferJobReplicationSpecTransferOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_objects_from_source_after_transfer: cdktf.booleanToTerraform(struct!.deleteObjectsFromSourceAfterTransfer),
    delete_objects_unique_in_sink: cdktf.booleanToTerraform(struct!.deleteObjectsUniqueInSink),
    overwrite_objects_already_existing_in_sink: cdktf.booleanToTerraform(struct!.overwriteObjectsAlreadyExistingInSink),
    overwrite_when: cdktf.stringToTerraform(struct!.overwriteWhen),
    metadata_options: storageTransferJobReplicationSpecTransferOptionsMetadataOptionsToTerraform(struct!.metadataOptions),
  }
}


export function storageTransferJobReplicationSpecTransferOptionsToHclTerraform(struct?: StorageTransferJobReplicationSpecTransferOptionsOutputReference | StorageTransferJobReplicationSpecTransferOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_objects_from_source_after_transfer: {
      value: cdktf.booleanToHclTerraform(struct!.deleteObjectsFromSourceAfterTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_objects_unique_in_sink: {
      value: cdktf.booleanToHclTerraform(struct!.deleteObjectsUniqueInSink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    overwrite_objects_already_existing_in_sink: {
      value: cdktf.booleanToHclTerraform(struct!.overwriteObjectsAlreadyExistingInSink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    overwrite_when: {
      value: cdktf.stringToHclTerraform(struct!.overwriteWhen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_options: {
      value: storageTransferJobReplicationSpecTransferOptionsMetadataOptionsToHclTerraform(struct!.metadataOptions),
      isBlock: true,
      type: "list",
      storageClassType: "StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobReplicationSpecTransferOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobReplicationSpecTransferOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteObjectsFromSourceAfterTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteObjectsFromSourceAfterTransfer = this._deleteObjectsFromSourceAfterTransfer;
    }
    if (this._deleteObjectsUniqueInSink !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteObjectsUniqueInSink = this._deleteObjectsUniqueInSink;
    }
    if (this._overwriteObjectsAlreadyExistingInSink !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteObjectsAlreadyExistingInSink = this._overwriteObjectsAlreadyExistingInSink;
    }
    if (this._overwriteWhen !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteWhen = this._overwriteWhen;
    }
    if (this._metadataOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataOptions = this._metadataOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobReplicationSpecTransferOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteObjectsFromSourceAfterTransfer = undefined;
      this._deleteObjectsUniqueInSink = undefined;
      this._overwriteObjectsAlreadyExistingInSink = undefined;
      this._overwriteWhen = undefined;
      this._metadataOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteObjectsFromSourceAfterTransfer = value.deleteObjectsFromSourceAfterTransfer;
      this._deleteObjectsUniqueInSink = value.deleteObjectsUniqueInSink;
      this._overwriteObjectsAlreadyExistingInSink = value.overwriteObjectsAlreadyExistingInSink;
      this._overwriteWhen = value.overwriteWhen;
      this._metadataOptions.internalValue = value.metadataOptions;
    }
  }

  // delete_objects_from_source_after_transfer - computed: false, optional: true, required: false
  private _deleteObjectsFromSourceAfterTransfer?: boolean | cdktf.IResolvable; 
  public get deleteObjectsFromSourceAfterTransfer() {
    return this.getBooleanAttribute('delete_objects_from_source_after_transfer');
  }
  public set deleteObjectsFromSourceAfterTransfer(value: boolean | cdktf.IResolvable) {
    this._deleteObjectsFromSourceAfterTransfer = value;
  }
  public resetDeleteObjectsFromSourceAfterTransfer() {
    this._deleteObjectsFromSourceAfterTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteObjectsFromSourceAfterTransferInput() {
    return this._deleteObjectsFromSourceAfterTransfer;
  }

  // delete_objects_unique_in_sink - computed: false, optional: true, required: false
  private _deleteObjectsUniqueInSink?: boolean | cdktf.IResolvable; 
  public get deleteObjectsUniqueInSink() {
    return this.getBooleanAttribute('delete_objects_unique_in_sink');
  }
  public set deleteObjectsUniqueInSink(value: boolean | cdktf.IResolvable) {
    this._deleteObjectsUniqueInSink = value;
  }
  public resetDeleteObjectsUniqueInSink() {
    this._deleteObjectsUniqueInSink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteObjectsUniqueInSinkInput() {
    return this._deleteObjectsUniqueInSink;
  }

  // overwrite_objects_already_existing_in_sink - computed: false, optional: true, required: false
  private _overwriteObjectsAlreadyExistingInSink?: boolean | cdktf.IResolvable; 
  public get overwriteObjectsAlreadyExistingInSink() {
    return this.getBooleanAttribute('overwrite_objects_already_existing_in_sink');
  }
  public set overwriteObjectsAlreadyExistingInSink(value: boolean | cdktf.IResolvable) {
    this._overwriteObjectsAlreadyExistingInSink = value;
  }
  public resetOverwriteObjectsAlreadyExistingInSink() {
    this._overwriteObjectsAlreadyExistingInSink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteObjectsAlreadyExistingInSinkInput() {
    return this._overwriteObjectsAlreadyExistingInSink;
  }

  // overwrite_when - computed: false, optional: true, required: false
  private _overwriteWhen?: string; 
  public get overwriteWhen() {
    return this.getStringAttribute('overwrite_when');
  }
  public set overwriteWhen(value: string) {
    this._overwriteWhen = value;
  }
  public resetOverwriteWhen() {
    this._overwriteWhen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteWhenInput() {
    return this._overwriteWhen;
  }

  // metadata_options - computed: false, optional: true, required: false
  private _metadataOptions = new StorageTransferJobReplicationSpecTransferOptionsMetadataOptionsOutputReference(this, "metadata_options");
  public get metadataOptions() {
    return this._metadataOptions;
  }
  public putMetadataOptions(value: StorageTransferJobReplicationSpecTransferOptionsMetadataOptions) {
    this._metadataOptions.internalValue = value;
  }
  public resetMetadataOptions() {
    this._metadataOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataOptionsInput() {
    return this._metadataOptions.internalValue;
  }
}
export interface StorageTransferJobReplicationSpec {
  /**
  * gcs_data_sink block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#gcs_data_sink StorageTransferJob#gcs_data_sink}
  */
  readonly gcsDataSink?: StorageTransferJobReplicationSpecGcsDataSink;
  /**
  * gcs_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#gcs_data_source StorageTransferJob#gcs_data_source}
  */
  readonly gcsDataSource?: StorageTransferJobReplicationSpecGcsDataSource;
  /**
  * object_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#object_conditions StorageTransferJob#object_conditions}
  */
  readonly objectConditions?: StorageTransferJobReplicationSpecObjectConditions;
  /**
  * transfer_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#transfer_options StorageTransferJob#transfer_options}
  */
  readonly transferOptions?: StorageTransferJobReplicationSpecTransferOptions;
}

export function storageTransferJobReplicationSpecToTerraform(struct?: StorageTransferJobReplicationSpecOutputReference | StorageTransferJobReplicationSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcs_data_sink: storageTransferJobReplicationSpecGcsDataSinkToTerraform(struct!.gcsDataSink),
    gcs_data_source: storageTransferJobReplicationSpecGcsDataSourceToTerraform(struct!.gcsDataSource),
    object_conditions: storageTransferJobReplicationSpecObjectConditionsToTerraform(struct!.objectConditions),
    transfer_options: storageTransferJobReplicationSpecTransferOptionsToTerraform(struct!.transferOptions),
  }
}


export function storageTransferJobReplicationSpecToHclTerraform(struct?: StorageTransferJobReplicationSpecOutputReference | StorageTransferJobReplicationSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcs_data_sink: {
      value: storageTransferJobReplicationSpecGcsDataSinkToHclTerraform(struct!.gcsDataSink),
      isBlock: true,
      type: "list",
      storageClassType: "StorageTransferJobReplicationSpecGcsDataSinkList",
    },
    gcs_data_source: {
      value: storageTransferJobReplicationSpecGcsDataSourceToHclTerraform(struct!.gcsDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "StorageTransferJobReplicationSpecGcsDataSourceList",
    },
    object_conditions: {
      value: storageTransferJobReplicationSpecObjectConditionsToHclTerraform(struct!.objectConditions),
      isBlock: true,
      type: "list",
      storageClassType: "StorageTransferJobReplicationSpecObjectConditionsList",
    },
    transfer_options: {
      value: storageTransferJobReplicationSpecTransferOptionsToHclTerraform(struct!.transferOptions),
      isBlock: true,
      type: "list",
      storageClassType: "StorageTransferJobReplicationSpecTransferOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobReplicationSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobReplicationSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcsDataSink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsDataSink = this._gcsDataSink?.internalValue;
    }
    if (this._gcsDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsDataSource = this._gcsDataSource?.internalValue;
    }
    if (this._objectConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectConditions = this._objectConditions?.internalValue;
    }
    if (this._transferOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferOptions = this._transferOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobReplicationSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcsDataSink.internalValue = undefined;
      this._gcsDataSource.internalValue = undefined;
      this._objectConditions.internalValue = undefined;
      this._transferOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcsDataSink.internalValue = value.gcsDataSink;
      this._gcsDataSource.internalValue = value.gcsDataSource;
      this._objectConditions.internalValue = value.objectConditions;
      this._transferOptions.internalValue = value.transferOptions;
    }
  }

  // gcs_data_sink - computed: false, optional: true, required: false
  private _gcsDataSink = new StorageTransferJobReplicationSpecGcsDataSinkOutputReference(this, "gcs_data_sink");
  public get gcsDataSink() {
    return this._gcsDataSink;
  }
  public putGcsDataSink(value: StorageTransferJobReplicationSpecGcsDataSink) {
    this._gcsDataSink.internalValue = value;
  }
  public resetGcsDataSink() {
    this._gcsDataSink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsDataSinkInput() {
    return this._gcsDataSink.internalValue;
  }

  // gcs_data_source - computed: false, optional: true, required: false
  private _gcsDataSource = new StorageTransferJobReplicationSpecGcsDataSourceOutputReference(this, "gcs_data_source");
  public get gcsDataSource() {
    return this._gcsDataSource;
  }
  public putGcsDataSource(value: StorageTransferJobReplicationSpecGcsDataSource) {
    this._gcsDataSource.internalValue = value;
  }
  public resetGcsDataSource() {
    this._gcsDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsDataSourceInput() {
    return this._gcsDataSource.internalValue;
  }

  // object_conditions - computed: false, optional: true, required: false
  private _objectConditions = new StorageTransferJobReplicationSpecObjectConditionsOutputReference(this, "object_conditions");
  public get objectConditions() {
    return this._objectConditions;
  }
  public putObjectConditions(value: StorageTransferJobReplicationSpecObjectConditions) {
    this._objectConditions.internalValue = value;
  }
  public resetObjectConditions() {
    this._objectConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectConditionsInput() {
    return this._objectConditions.internalValue;
  }

  // transfer_options - computed: false, optional: true, required: false
  private _transferOptions = new StorageTransferJobReplicationSpecTransferOptionsOutputReference(this, "transfer_options");
  public get transferOptions() {
    return this._transferOptions;
  }
  public putTransferOptions(value: StorageTransferJobReplicationSpecTransferOptions) {
    this._transferOptions.internalValue = value;
  }
  public resetTransferOptions() {
    this._transferOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferOptionsInput() {
    return this._transferOptions.internalValue;
  }
}
export interface StorageTransferJobScheduleScheduleEndDate {
  /**
  * Day of month. Must be from 1 to 31 and valid for the year and month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#day StorageTransferJob#day}
  */
  readonly day: number;
  /**
  * Month of year. Must be from 1 to 12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#month StorageTransferJob#month}
  */
  readonly month: number;
  /**
  * Year of date. Must be from 1 to 9999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#year StorageTransferJob#year}
  */
  readonly year: number;
}

export function storageTransferJobScheduleScheduleEndDateToTerraform(struct?: StorageTransferJobScheduleScheduleEndDateOutputReference | StorageTransferJobScheduleScheduleEndDate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    month: cdktf.numberToTerraform(struct!.month),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function storageTransferJobScheduleScheduleEndDateToHclTerraform(struct?: StorageTransferJobScheduleScheduleEndDateOutputReference | StorageTransferJobScheduleScheduleEndDate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobScheduleScheduleEndDateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobScheduleScheduleEndDate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobScheduleScheduleEndDate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._month = undefined;
      this._year = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._month = value.month;
      this._year = value.year;
    }
  }

  // day - computed: false, optional: false, required: true
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: false, required: true
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: false, required: true
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface StorageTransferJobScheduleScheduleStartDate {
  /**
  * Day of month. Must be from 1 to 31 and valid for the year and month.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#day StorageTransferJob#day}
  */
  readonly day: number;
  /**
  * Month of year. Must be from 1 to 12.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#month StorageTransferJob#month}
  */
  readonly month: number;
  /**
  * Year of date. Must be from 1 to 9999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#year StorageTransferJob#year}
  */
  readonly year: number;
}

export function storageTransferJobScheduleScheduleStartDateToTerraform(struct?: StorageTransferJobScheduleScheduleStartDateOutputReference | StorageTransferJobScheduleScheduleStartDate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    month: cdktf.numberToTerraform(struct!.month),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function storageTransferJobScheduleScheduleStartDateToHclTerraform(struct?: StorageTransferJobScheduleScheduleStartDateOutputReference | StorageTransferJobScheduleScheduleStartDate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day: {
      value: cdktf.numberToHclTerraform(struct!.day),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobScheduleScheduleStartDateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobScheduleScheduleStartDate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobScheduleScheduleStartDate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._month = undefined;
      this._year = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._month = value.month;
      this._year = value.year;
    }
  }

  // day - computed: false, optional: false, required: true
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // month - computed: false, optional: false, required: true
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // year - computed: false, optional: false, required: true
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface StorageTransferJobScheduleStartTimeOfDay {
  /**
  * Hours of day in 24 hour format. Should be from 0 to 23.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#hours StorageTransferJob#hours}
  */
  readonly hours: number;
  /**
  * Minutes of hour of day. Must be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#minutes StorageTransferJob#minutes}
  */
  readonly minutes: number;
  /**
  * Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#nanos StorageTransferJob#nanos}
  */
  readonly nanos: number;
  /**
  * Seconds of minutes of the time. Must normally be from 0 to 59.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#seconds StorageTransferJob#seconds}
  */
  readonly seconds: number;
}

export function storageTransferJobScheduleStartTimeOfDayToTerraform(struct?: StorageTransferJobScheduleStartTimeOfDayOutputReference | StorageTransferJobScheduleStartTimeOfDay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdktf.numberToTerraform(struct!.hours),
    minutes: cdktf.numberToTerraform(struct!.minutes),
    nanos: cdktf.numberToTerraform(struct!.nanos),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function storageTransferJobScheduleStartTimeOfDayToHclTerraform(struct?: StorageTransferJobScheduleStartTimeOfDayOutputReference | StorageTransferJobScheduleStartTimeOfDay): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdktf.numberToHclTerraform(struct!.hours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nanos: {
      value: cdktf.numberToHclTerraform(struct!.nanos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobScheduleStartTimeOfDayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobScheduleStartTimeOfDay | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours;
    }
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._nanos !== undefined) {
      hasAnyValues = true;
      internalValueResult.nanos = this._nanos;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobScheduleStartTimeOfDay | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours = undefined;
      this._minutes = undefined;
      this._nanos = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours = value.hours;
      this._minutes = value.minutes;
      this._nanos = value.nanos;
      this._seconds = value.seconds;
    }
  }

  // hours - computed: false, optional: false, required: true
  private _hours?: number; 
  public get hours() {
    return this.getNumberAttribute('hours');
  }
  public set hours(value: number) {
    this._hours = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours;
  }

  // minutes - computed: false, optional: false, required: true
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // nanos - computed: false, optional: false, required: true
  private _nanos?: number; 
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }
  public set nanos(value: number) {
    this._nanos = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nanosInput() {
    return this._nanos;
  }

  // seconds - computed: false, optional: false, required: true
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface StorageTransferJobSchedule {
  /**
  * Interval between the start of each scheduled transfer. If unspecified, the default value is 24 hours. This value may not be less than 1 hour. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#repeat_interval StorageTransferJob#repeat_interval}
  */
  readonly repeatInterval?: string;
  /**
  * schedule_end_date block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#schedule_end_date StorageTransferJob#schedule_end_date}
  */
  readonly scheduleEndDate?: StorageTransferJobScheduleScheduleEndDate;
  /**
  * schedule_start_date block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#schedule_start_date StorageTransferJob#schedule_start_date}
  */
  readonly scheduleStartDate: StorageTransferJobScheduleScheduleStartDate;
  /**
  * start_time_of_day block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#start_time_of_day StorageTransferJob#start_time_of_day}
  */
  readonly startTimeOfDay?: StorageTransferJobScheduleStartTimeOfDay;
}

export function storageTransferJobScheduleToTerraform(struct?: StorageTransferJobScheduleOutputReference | StorageTransferJobSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repeat_interval: cdktf.stringToTerraform(struct!.repeatInterval),
    schedule_end_date: storageTransferJobScheduleScheduleEndDateToTerraform(struct!.scheduleEndDate),
    schedule_start_date: storageTransferJobScheduleScheduleStartDateToTerraform(struct!.scheduleStartDate),
    start_time_of_day: storageTransferJobScheduleStartTimeOfDayToTerraform(struct!.startTimeOfDay),
  }
}


export function storageTransferJobScheduleToHclTerraform(struct?: StorageTransferJobScheduleOutputReference | StorageTransferJobSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repeat_interval: {
      value: cdktf.stringToHclTerraform(struct!.repeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_end_date: {
      value: storageTransferJobScheduleScheduleEndDateToHclTerraform(struct!.scheduleEndDate),
      isBlock: true,
      type: "list",
      storageClassType: "StorageTransferJobScheduleScheduleEndDateList",
    },
    schedule_start_date: {
      value: storageTransferJobScheduleScheduleStartDateToHclTerraform(struct!.scheduleStartDate),
      isBlock: true,
      type: "list",
      storageClassType: "StorageTransferJobScheduleScheduleStartDateList",
    },
    start_time_of_day: {
      value: storageTransferJobScheduleStartTimeOfDayToHclTerraform(struct!.startTimeOfDay),
      isBlock: true,
      type: "list",
      storageClassType: "StorageTransferJobScheduleStartTimeOfDayList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatInterval = this._repeatInterval;
    }
    if (this._scheduleEndDate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleEndDate = this._scheduleEndDate?.internalValue;
    }
    if (this._scheduleStartDate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleStartDate = this._scheduleStartDate?.internalValue;
    }
    if (this._startTimeOfDay?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTimeOfDay = this._startTimeOfDay?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repeatInterval = undefined;
      this._scheduleEndDate.internalValue = undefined;
      this._scheduleStartDate.internalValue = undefined;
      this._startTimeOfDay.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repeatInterval = value.repeatInterval;
      this._scheduleEndDate.internalValue = value.scheduleEndDate;
      this._scheduleStartDate.internalValue = value.scheduleStartDate;
      this._startTimeOfDay.internalValue = value.startTimeOfDay;
    }
  }

  // repeat_interval - computed: false, optional: true, required: false
  private _repeatInterval?: string; 
  public get repeatInterval() {
    return this.getStringAttribute('repeat_interval');
  }
  public set repeatInterval(value: string) {
    this._repeatInterval = value;
  }
  public resetRepeatInterval() {
    this._repeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatIntervalInput() {
    return this._repeatInterval;
  }

  // schedule_end_date - computed: false, optional: true, required: false
  private _scheduleEndDate = new StorageTransferJobScheduleScheduleEndDateOutputReference(this, "schedule_end_date");
  public get scheduleEndDate() {
    return this._scheduleEndDate;
  }
  public putScheduleEndDate(value: StorageTransferJobScheduleScheduleEndDate) {
    this._scheduleEndDate.internalValue = value;
  }
  public resetScheduleEndDate() {
    this._scheduleEndDate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleEndDateInput() {
    return this._scheduleEndDate.internalValue;
  }

  // schedule_start_date - computed: false, optional: false, required: true
  private _scheduleStartDate = new StorageTransferJobScheduleScheduleStartDateOutputReference(this, "schedule_start_date");
  public get scheduleStartDate() {
    return this._scheduleStartDate;
  }
  public putScheduleStartDate(value: StorageTransferJobScheduleScheduleStartDate) {
    this._scheduleStartDate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleStartDateInput() {
    return this._scheduleStartDate.internalValue;
  }

  // start_time_of_day - computed: false, optional: true, required: false
  private _startTimeOfDay = new StorageTransferJobScheduleStartTimeOfDayOutputReference(this, "start_time_of_day");
  public get startTimeOfDay() {
    return this._startTimeOfDay;
  }
  public putStartTimeOfDay(value: StorageTransferJobScheduleStartTimeOfDay) {
    this._startTimeOfDay.internalValue = value;
  }
  public resetStartTimeOfDay() {
    this._startTimeOfDay.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeOfDayInput() {
    return this._startTimeOfDay.internalValue;
  }
}
export interface StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey {
  /**
  * AWS Key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#access_key_id StorageTransferJob#access_key_id}
  */
  readonly accessKeyId: string;
  /**
  * AWS Secret Access Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#secret_access_key StorageTransferJob#secret_access_key}
  */
  readonly secretAccessKey: string;
}

export function storageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyToTerraform(struct?: StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference | StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key_id: cdktf.stringToTerraform(struct!.accessKeyId),
    secret_access_key: cdktf.stringToTerraform(struct!.secretAccessKey),
  }
}


export function storageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyToHclTerraform(struct?: StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference | StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.secretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKeyId = this._accessKeyId;
    }
    if (this._secretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretAccessKey = this._secretAccessKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKeyId = undefined;
      this._secretAccessKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKeyId = value.accessKeyId;
      this._secretAccessKey = value.secretAccessKey;
    }
  }

  // access_key_id - computed: false, optional: false, required: true
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // secret_access_key - computed: false, optional: false, required: true
  private _secretAccessKey?: string; 
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }
  public set secretAccessKey(value: string) {
    this._secretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretAccessKeyInput() {
    return this._secretAccessKey;
  }
}
export interface StorageTransferJobTransferSpecAwsS3DataSource {
  /**
  * S3 Bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Egress bytes over a Google-managed private network. This network is shared between other users of Storage Transfer Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#managed_private_network StorageTransferJob#managed_private_network}
  */
  readonly managedPrivateNetwork?: boolean | cdktf.IResolvable;
  /**
  * S3 Bucket path in bucket to transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}
  */
  readonly path?: string;
  /**
  * The Amazon Resource Name (ARN) of the role to support temporary credentials via 'AssumeRoleWithWebIdentity'. For more information about ARNs, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns). When a role ARN is provided, Transfer Service fetches temporary credentials for the session using a 'AssumeRoleWithWebIdentity' call for the provided role using the [GoogleServiceAccount][] for this project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#role_arn StorageTransferJob#role_arn}
  */
  readonly roleArn?: string;
  /**
  * aws_access_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#aws_access_key StorageTransferJob#aws_access_key}
  */
  readonly awsAccessKey?: StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey;
}

export function storageTransferJobTransferSpecAwsS3DataSourceToTerraform(struct?: StorageTransferJobTransferSpecAwsS3DataSourceOutputReference | StorageTransferJobTransferSpecAwsS3DataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    managed_private_network: cdktf.booleanToTerraform(struct!.managedPrivateNetwork),
    path: cdktf.stringToTerraform(struct!.path),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    aws_access_key: storageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyToTerraform(struct!.awsAccessKey),
  }
}


export function storageTransferJobTransferSpecAwsS3DataSourceToHclTerraform(struct?: StorageTransferJobTransferSpecAwsS3DataSourceOutputReference | StorageTransferJobTransferSpecAwsS3DataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_private_network: {
      value: cdktf.booleanToHclTerraform(struct!.managedPrivateNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_access_key: {
      value: storageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyToHclTerraform(struct!.awsAccessKey),
      isBlock: true,
      type: "list",
      storageClassType: "StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobTransferSpecAwsS3DataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobTransferSpecAwsS3DataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._managedPrivateNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedPrivateNetwork = this._managedPrivateNetwork;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._awsAccessKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAccessKey = this._awsAccessKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobTransferSpecAwsS3DataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._managedPrivateNetwork = undefined;
      this._path = undefined;
      this._roleArn = undefined;
      this._awsAccessKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._managedPrivateNetwork = value.managedPrivateNetwork;
      this._path = value.path;
      this._roleArn = value.roleArn;
      this._awsAccessKey.internalValue = value.awsAccessKey;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // managed_private_network - computed: false, optional: true, required: false
  private _managedPrivateNetwork?: boolean | cdktf.IResolvable; 
  public get managedPrivateNetwork() {
    return this.getBooleanAttribute('managed_private_network');
  }
  public set managedPrivateNetwork(value: boolean | cdktf.IResolvable) {
    this._managedPrivateNetwork = value;
  }
  public resetManagedPrivateNetwork() {
    this._managedPrivateNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPrivateNetworkInput() {
    return this._managedPrivateNetwork;
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

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // aws_access_key - computed: false, optional: true, required: false
  private _awsAccessKey = new StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKeyOutputReference(this, "aws_access_key");
  public get awsAccessKey() {
    return this._awsAccessKey;
  }
  public putAwsAccessKey(value: StorageTransferJobTransferSpecAwsS3DataSourceAwsAccessKey) {
    this._awsAccessKey.internalValue = value;
  }
  public resetAwsAccessKey() {
    this._awsAccessKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyInput() {
    return this._awsAccessKey.internalValue;
  }
}
export interface StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials {
  /**
  * Azure shared access signature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#sas_token StorageTransferJob#sas_token}
  */
  readonly sasToken: string;
}

export function storageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsToTerraform(struct?: StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference | StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sas_token: cdktf.stringToTerraform(struct!.sasToken),
  }
}


export function storageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsToHclTerraform(struct?: StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference | StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sas_token: {
      value: cdktf.stringToHclTerraform(struct!.sasToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sasToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasToken = this._sasToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sasToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sasToken = value.sasToken;
    }
  }

  // sas_token - computed: false, optional: false, required: true
  private _sasToken?: string; 
  public get sasToken() {
    return this.getStringAttribute('sas_token');
  }
  public set sasToken(value: string) {
    this._sasToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sasTokenInput() {
    return this._sasToken;
  }
}
export interface StorageTransferJobTransferSpecAzureBlobStorageDataSource {
  /**
  * The container to transfer from the Azure Storage account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#container StorageTransferJob#container}
  */
  readonly container: string;
  /**
  * Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is treated as an object prefix. As such, it should generally not begin with a '/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}
  */
  readonly path?: string;
  /**
  * The name of the Azure Storage account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#storage_account StorageTransferJob#storage_account}
  */
  readonly storageAccount: string;
  /**
  * azure_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#azure_credentials StorageTransferJob#azure_credentials}
  */
  readonly azureCredentials: StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials;
}

export function storageTransferJobTransferSpecAzureBlobStorageDataSourceToTerraform(struct?: StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference | StorageTransferJobTransferSpecAzureBlobStorageDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: cdktf.stringToTerraform(struct!.container),
    path: cdktf.stringToTerraform(struct!.path),
    storage_account: cdktf.stringToTerraform(struct!.storageAccount),
    azure_credentials: storageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsToTerraform(struct!.azureCredentials),
  }
}


export function storageTransferJobTransferSpecAzureBlobStorageDataSourceToHclTerraform(struct?: StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference | StorageTransferJobTransferSpecAzureBlobStorageDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: cdktf.stringToHclTerraform(struct!.container),
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
    storage_account: {
      value: cdktf.stringToHclTerraform(struct!.storageAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure_credentials: {
      value: storageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsToHclTerraform(struct!.azureCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobTransferSpecAzureBlobStorageDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._storageAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAccount = this._storageAccount;
    }
    if (this._azureCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureCredentials = this._azureCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobTransferSpecAzureBlobStorageDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._container = undefined;
      this._path = undefined;
      this._storageAccount = undefined;
      this._azureCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._container = value.container;
      this._path = value.path;
      this._storageAccount = value.storageAccount;
      this._azureCredentials.internalValue = value.azureCredentials;
    }
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // path - computed: true, optional: true, required: false
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

  // storage_account - computed: false, optional: false, required: true
  private _storageAccount?: string; 
  public get storageAccount() {
    return this.getStringAttribute('storage_account');
  }
  public set storageAccount(value: string) {
    this._storageAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountInput() {
    return this._storageAccount;
  }

  // azure_credentials - computed: false, optional: false, required: true
  private _azureCredentials = new StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentialsOutputReference(this, "azure_credentials");
  public get azureCredentials() {
    return this._azureCredentials;
  }
  public putAzureCredentials(value: StorageTransferJobTransferSpecAzureBlobStorageDataSourceAzureCredentials) {
    this._azureCredentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureCredentialsInput() {
    return this._azureCredentials.internalValue;
  }
}
export interface StorageTransferJobTransferSpecGcsDataSink {
  /**
  * Google Cloud Storage bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Google Cloud Storage path in bucket to transfer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}
  */
  readonly path?: string;
}

export function storageTransferJobTransferSpecGcsDataSinkToTerraform(struct?: StorageTransferJobTransferSpecGcsDataSinkOutputReference | StorageTransferJobTransferSpecGcsDataSink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function storageTransferJobTransferSpecGcsDataSinkToHclTerraform(struct?: StorageTransferJobTransferSpecGcsDataSinkOutputReference | StorageTransferJobTransferSpecGcsDataSink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobTransferSpecGcsDataSinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobTransferSpecGcsDataSink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobTransferSpecGcsDataSink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._path = value.path;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // path - computed: true, optional: true, required: false
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
}
export interface StorageTransferJobTransferSpecGcsDataSource {
  /**
  * Google Cloud Storage bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#bucket_name StorageTransferJob#bucket_name}
  */
  readonly bucketName: string;
  /**
  * Google Cloud Storage path in bucket to transfer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}
  */
  readonly path?: string;
}

export function storageTransferJobTransferSpecGcsDataSourceToTerraform(struct?: StorageTransferJobTransferSpecGcsDataSourceOutputReference | StorageTransferJobTransferSpecGcsDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function storageTransferJobTransferSpecGcsDataSourceToHclTerraform(struct?: StorageTransferJobTransferSpecGcsDataSourceOutputReference | StorageTransferJobTransferSpecGcsDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobTransferSpecGcsDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobTransferSpecGcsDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobTransferSpecGcsDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._path = value.path;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // path - computed: true, optional: true, required: false
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
}
export interface StorageTransferJobTransferSpecHdfsDataSource {
  /**
  * Directory path to the filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#path StorageTransferJob#path}
  */
  readonly path: string;
}

export function storageTransferJobTransferSpecHdfsDataSourceToTerraform(struct?: StorageTransferJobTransferSpecHdfsDataSourceOutputReference | StorageTransferJobTransferSpecHdfsDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function storageTransferJobTransferSpecHdfsDataSourceToHclTerraform(struct?: StorageTransferJobTransferSpecHdfsDataSourceOutputReference | StorageTransferJobTransferSpecHdfsDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobTransferSpecHdfsDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobTransferSpecHdfsDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobTransferSpecHdfsDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface StorageTransferJobTransferSpecHttpDataSource {
  /**
  * The URL that points to the file that stores the object list entries. This file must allow public access. Currently, only URLs with HTTP and HTTPS schemes are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#list_url StorageTransferJob#list_url}
  */
  readonly listUrl: string;
}

export function storageTransferJobTransferSpecHttpDataSourceToTerraform(struct?: StorageTransferJobTransferSpecHttpDataSourceOutputReference | StorageTransferJobTransferSpecHttpDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    list_url: cdktf.stringToTerraform(struct!.listUrl),
  }
}


export function storageTransferJobTransferSpecHttpDataSourceToHclTerraform(struct?: StorageTransferJobTransferSpecHttpDataSourceOutputReference | StorageTransferJobTransferSpecHttpDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    list_url: {
      value: cdktf.stringToHclTerraform(struct!.listUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobTransferSpecHttpDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobTransferSpecHttpDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.listUrl = this._listUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobTransferSpecHttpDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._listUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._listUrl = value.listUrl;
    }
  }

  // list_url - computed: false, optional: false, required: true
  private _listUrl?: string; 
  public get listUrl() {
    return this.getStringAttribute('list_url');
  }
  public set listUrl(value: string) {
    this._listUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listUrlInput() {
    return this._listUrl;
  }
}
export interface StorageTransferJobTransferSpecObjectConditions {
  /**
  * exclude_prefixes must follow the requirements described for include_prefixes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#exclude_prefixes StorageTransferJob#exclude_prefixes}
  */
  readonly excludePrefixes?: string[];
  /**
  * If include_refixes is specified, objects that satisfy the object conditions must have names that start with one of the include_prefixes and that do not start with any of the exclude_prefixes. If include_prefixes is not specified, all objects except those that have names starting with one of the exclude_prefixes must satisfy the object conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#include_prefixes StorageTransferJob#include_prefixes}
  */
  readonly includePrefixes?: string[];
  /**
  * If specified, only objects with a "last modification time" before this timestamp and objects that don't have a "last modification time" are transferred. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#last_modified_before StorageTransferJob#last_modified_before}
  */
  readonly lastModifiedBefore?: string;
  /**
  * If specified, only objects with a "last modification time" on or after this timestamp and objects that don't have a "last modification time" are transferred. A timestamp in RFC3339 UTC "Zulu" format, with nanosecond resolution and up to nine fractional digits. Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#last_modified_since StorageTransferJob#last_modified_since}
  */
  readonly lastModifiedSince?: string;
  /**
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#max_time_elapsed_since_last_modification StorageTransferJob#max_time_elapsed_since_last_modification}
  */
  readonly maxTimeElapsedSinceLastModification?: string;
  /**
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#min_time_elapsed_since_last_modification StorageTransferJob#min_time_elapsed_since_last_modification}
  */
  readonly minTimeElapsedSinceLastModification?: string;
}

export function storageTransferJobTransferSpecObjectConditionsToTerraform(struct?: StorageTransferJobTransferSpecObjectConditionsOutputReference | StorageTransferJobTransferSpecObjectConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePrefixes),
    include_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includePrefixes),
    last_modified_before: cdktf.stringToTerraform(struct!.lastModifiedBefore),
    last_modified_since: cdktf.stringToTerraform(struct!.lastModifiedSince),
    max_time_elapsed_since_last_modification: cdktf.stringToTerraform(struct!.maxTimeElapsedSinceLastModification),
    min_time_elapsed_since_last_modification: cdktf.stringToTerraform(struct!.minTimeElapsedSinceLastModification),
  }
}


export function storageTransferJobTransferSpecObjectConditionsToHclTerraform(struct?: StorageTransferJobTransferSpecObjectConditionsOutputReference | StorageTransferJobTransferSpecObjectConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includePrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    last_modified_before: {
      value: cdktf.stringToHclTerraform(struct!.lastModifiedBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    last_modified_since: {
      value: cdktf.stringToHclTerraform(struct!.lastModifiedSince),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_time_elapsed_since_last_modification: {
      value: cdktf.stringToHclTerraform(struct!.maxTimeElapsedSinceLastModification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_time_elapsed_since_last_modification: {
      value: cdktf.stringToHclTerraform(struct!.minTimeElapsedSinceLastModification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobTransferSpecObjectConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobTransferSpecObjectConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePrefixes = this._excludePrefixes;
    }
    if (this._includePrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.includePrefixes = this._includePrefixes;
    }
    if (this._lastModifiedBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastModifiedBefore = this._lastModifiedBefore;
    }
    if (this._lastModifiedSince !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastModifiedSince = this._lastModifiedSince;
    }
    if (this._maxTimeElapsedSinceLastModification !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTimeElapsedSinceLastModification = this._maxTimeElapsedSinceLastModification;
    }
    if (this._minTimeElapsedSinceLastModification !== undefined) {
      hasAnyValues = true;
      internalValueResult.minTimeElapsedSinceLastModification = this._minTimeElapsedSinceLastModification;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobTransferSpecObjectConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludePrefixes = undefined;
      this._includePrefixes = undefined;
      this._lastModifiedBefore = undefined;
      this._lastModifiedSince = undefined;
      this._maxTimeElapsedSinceLastModification = undefined;
      this._minTimeElapsedSinceLastModification = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludePrefixes = value.excludePrefixes;
      this._includePrefixes = value.includePrefixes;
      this._lastModifiedBefore = value.lastModifiedBefore;
      this._lastModifiedSince = value.lastModifiedSince;
      this._maxTimeElapsedSinceLastModification = value.maxTimeElapsedSinceLastModification;
      this._minTimeElapsedSinceLastModification = value.minTimeElapsedSinceLastModification;
    }
  }

  // exclude_prefixes - computed: false, optional: true, required: false
  private _excludePrefixes?: string[]; 
  public get excludePrefixes() {
    return this.getListAttribute('exclude_prefixes');
  }
  public set excludePrefixes(value: string[]) {
    this._excludePrefixes = value;
  }
  public resetExcludePrefixes() {
    this._excludePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePrefixesInput() {
    return this._excludePrefixes;
  }

  // include_prefixes - computed: false, optional: true, required: false
  private _includePrefixes?: string[]; 
  public get includePrefixes() {
    return this.getListAttribute('include_prefixes');
  }
  public set includePrefixes(value: string[]) {
    this._includePrefixes = value;
  }
  public resetIncludePrefixes() {
    this._includePrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePrefixesInput() {
    return this._includePrefixes;
  }

  // last_modified_before - computed: false, optional: true, required: false
  private _lastModifiedBefore?: string; 
  public get lastModifiedBefore() {
    return this.getStringAttribute('last_modified_before');
  }
  public set lastModifiedBefore(value: string) {
    this._lastModifiedBefore = value;
  }
  public resetLastModifiedBefore() {
    this._lastModifiedBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastModifiedBeforeInput() {
    return this._lastModifiedBefore;
  }

  // last_modified_since - computed: false, optional: true, required: false
  private _lastModifiedSince?: string; 
  public get lastModifiedSince() {
    return this.getStringAttribute('last_modified_since');
  }
  public set lastModifiedSince(value: string) {
    this._lastModifiedSince = value;
  }
  public resetLastModifiedSince() {
    this._lastModifiedSince = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastModifiedSinceInput() {
    return this._lastModifiedSince;
  }

  // max_time_elapsed_since_last_modification - computed: false, optional: true, required: false
  private _maxTimeElapsedSinceLastModification?: string; 
  public get maxTimeElapsedSinceLastModification() {
    return this.getStringAttribute('max_time_elapsed_since_last_modification');
  }
  public set maxTimeElapsedSinceLastModification(value: string) {
    this._maxTimeElapsedSinceLastModification = value;
  }
  public resetMaxTimeElapsedSinceLastModification() {
    this._maxTimeElapsedSinceLastModification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimeElapsedSinceLastModificationInput() {
    return this._maxTimeElapsedSinceLastModification;
  }

  // min_time_elapsed_since_last_modification - computed: false, optional: true, required: false
  private _minTimeElapsedSinceLastModification?: string; 
  public get minTimeElapsedSinceLastModification() {
    return this.getStringAttribute('min_time_elapsed_since_last_modification');
  }
  public set minTimeElapsedSinceLastModification(value: string) {
    this._minTimeElapsedSinceLastModification = value;
  }
  public resetMinTimeElapsedSinceLastModification() {
    this._minTimeElapsedSinceLastModification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minTimeElapsedSinceLastModificationInput() {
    return this._minTimeElapsedSinceLastModification;
  }
}
export interface StorageTransferJobTransferSpecPosixDataSink {
  /**
  * Root directory path to the filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#root_directory StorageTransferJob#root_directory}
  */
  readonly rootDirectory: string;
}

export function storageTransferJobTransferSpecPosixDataSinkToTerraform(struct?: StorageTransferJobTransferSpecPosixDataSinkOutputReference | StorageTransferJobTransferSpecPosixDataSink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    root_directory: cdktf.stringToTerraform(struct!.rootDirectory),
  }
}


export function storageTransferJobTransferSpecPosixDataSinkToHclTerraform(struct?: StorageTransferJobTransferSpecPosixDataSinkOutputReference | StorageTransferJobTransferSpecPosixDataSink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    root_directory: {
      value: cdktf.stringToHclTerraform(struct!.rootDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobTransferSpecPosixDataSinkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobTransferSpecPosixDataSink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rootDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDirectory = this._rootDirectory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobTransferSpecPosixDataSink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rootDirectory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rootDirectory = value.rootDirectory;
    }
  }

  // root_directory - computed: false, optional: false, required: true
  private _rootDirectory?: string; 
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }
  public set rootDirectory(value: string) {
    this._rootDirectory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirectoryInput() {
    return this._rootDirectory;
  }
}
export interface StorageTransferJobTransferSpecPosixDataSource {
  /**
  * Root directory path to the filesystem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#root_directory StorageTransferJob#root_directory}
  */
  readonly rootDirectory: string;
}

export function storageTransferJobTransferSpecPosixDataSourceToTerraform(struct?: StorageTransferJobTransferSpecPosixDataSourceOutputReference | StorageTransferJobTransferSpecPosixDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    root_directory: cdktf.stringToTerraform(struct!.rootDirectory),
  }
}


export function storageTransferJobTransferSpecPosixDataSourceToHclTerraform(struct?: StorageTransferJobTransferSpecPosixDataSourceOutputReference | StorageTransferJobTransferSpecPosixDataSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    root_directory: {
      value: cdktf.stringToHclTerraform(struct!.rootDirectory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobTransferSpecPosixDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobTransferSpecPosixDataSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rootDirectory !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDirectory = this._rootDirectory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobTransferSpecPosixDataSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rootDirectory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rootDirectory = value.rootDirectory;
    }
  }

  // root_directory - computed: false, optional: false, required: true
  private _rootDirectory?: string; 
  public get rootDirectory() {
    return this.getStringAttribute('root_directory');
  }
  public set rootDirectory(value: string) {
    this._rootDirectory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDirectoryInput() {
    return this._rootDirectory;
  }
}
export interface StorageTransferJobTransferSpecTransferOptionsMetadataOptions {
  /**
  * Specifies how each object's ACLs should be preserved for transfers between Google Cloud Storage buckets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#acl StorageTransferJob#acl}
  */
  readonly acl?: string;
  /**
  * Specifies how each file's POSIX group ID (GID) attribute should be handled by the transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#gid StorageTransferJob#gid}
  */
  readonly gid?: string;
  /**
  * Specifies how each object's Cloud KMS customer-managed encryption key (CMEK) is preserved for transfers between Google Cloud Storage buckets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#kms_key StorageTransferJob#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Specifies how each file's mode attribute should be handled by the transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#mode StorageTransferJob#mode}
  */
  readonly mode?: string;
  /**
  * Specifies the storage class to set on objects being transferred to Google Cloud Storage buckets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#storage_class StorageTransferJob#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Specifies how symlinks should be handled by the transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#symlink StorageTransferJob#symlink}
  */
  readonly symlink?: string;
  /**
  * SSpecifies how each object's temporary hold status should be preserved for transfers between Google Cloud Storage buckets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#temporary_hold StorageTransferJob#temporary_hold}
  */
  readonly temporaryHold?: string;
  /**
  * Specifies how each object's timeCreated metadata is preserved for transfers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#time_created StorageTransferJob#time_created}
  */
  readonly timeCreated?: string;
  /**
  * Specifies how each file's POSIX user ID (UID) attribute should be handled by the transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#uid StorageTransferJob#uid}
  */
  readonly uid?: string;
}

export function storageTransferJobTransferSpecTransferOptionsMetadataOptionsToTerraform(struct?: StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference | StorageTransferJobTransferSpecTransferOptionsMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktf.stringToTerraform(struct!.acl),
    gid: cdktf.stringToTerraform(struct!.gid),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    mode: cdktf.stringToTerraform(struct!.mode),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    symlink: cdktf.stringToTerraform(struct!.symlink),
    temporary_hold: cdktf.stringToTerraform(struct!.temporaryHold),
    time_created: cdktf.stringToTerraform(struct!.timeCreated),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function storageTransferJobTransferSpecTransferOptionsMetadataOptionsToHclTerraform(struct?: StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference | StorageTransferJobTransferSpecTransferOptionsMetadataOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: cdktf.stringToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gid: {
      value: cdktf.stringToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    symlink: {
      value: cdktf.stringToHclTerraform(struct!.symlink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temporary_hold: {
      value: cdktf.stringToHclTerraform(struct!.temporaryHold),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_created: {
      value: cdktf.stringToHclTerraform(struct!.timeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobTransferSpecTransferOptionsMetadataOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._symlink !== undefined) {
      hasAnyValues = true;
      internalValueResult.symlink = this._symlink;
    }
    if (this._temporaryHold !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporaryHold = this._temporaryHold;
    }
    if (this._timeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeCreated = this._timeCreated;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobTransferSpecTransferOptionsMetadataOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acl = undefined;
      this._gid = undefined;
      this._kmsKey = undefined;
      this._mode = undefined;
      this._storageClass = undefined;
      this._symlink = undefined;
      this._temporaryHold = undefined;
      this._timeCreated = undefined;
      this._uid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acl = value.acl;
      this._gid = value.gid;
      this._kmsKey = value.kmsKey;
      this._mode = value.mode;
      this._storageClass = value.storageClass;
      this._symlink = value.symlink;
      this._temporaryHold = value.temporaryHold;
      this._timeCreated = value.timeCreated;
      this._uid = value.uid;
    }
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // gid - computed: false, optional: true, required: false
  private _gid?: string; 
  public get gid() {
    return this.getStringAttribute('gid');
  }
  public set gid(value: string) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // symlink - computed: false, optional: true, required: false
  private _symlink?: string; 
  public get symlink() {
    return this.getStringAttribute('symlink');
  }
  public set symlink(value: string) {
    this._symlink = value;
  }
  public resetSymlink() {
    this._symlink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symlinkInput() {
    return this._symlink;
  }

  // temporary_hold - computed: false, optional: true, required: false
  private _temporaryHold?: string; 
  public get temporaryHold() {
    return this.getStringAttribute('temporary_hold');
  }
  public set temporaryHold(value: string) {
    this._temporaryHold = value;
  }
  public resetTemporaryHold() {
    this._temporaryHold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryHoldInput() {
    return this._temporaryHold;
  }

  // time_created - computed: false, optional: true, required: false
  private _timeCreated?: string; 
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
  public set timeCreated(value: string) {
    this._timeCreated = value;
  }
  public resetTimeCreated() {
    this._timeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeCreatedInput() {
    return this._timeCreated;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface StorageTransferJobTransferSpecTransferOptions {
  /**
  * Whether objects should be deleted from the source after they are transferred to the sink. Note that this option and delete_objects_unique_in_sink are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#delete_objects_from_source_after_transfer StorageTransferJob#delete_objects_from_source_after_transfer}
  */
  readonly deleteObjectsFromSourceAfterTransfer?: boolean | cdktf.IResolvable;
  /**
  * Whether objects that exist only in the sink should be deleted. Note that this option and delete_objects_from_source_after_transfer are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#delete_objects_unique_in_sink StorageTransferJob#delete_objects_unique_in_sink}
  */
  readonly deleteObjectsUniqueInSink?: boolean | cdktf.IResolvable;
  /**
  * Whether overwriting objects that already exist in the sink is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#overwrite_objects_already_existing_in_sink StorageTransferJob#overwrite_objects_already_existing_in_sink}
  */
  readonly overwriteObjectsAlreadyExistingInSink?: boolean | cdktf.IResolvable;
  /**
  * When to overwrite objects that already exist in the sink. If not set, overwrite behavior is determined by overwriteObjectsAlreadyExistingInSink.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#overwrite_when StorageTransferJob#overwrite_when}
  */
  readonly overwriteWhen?: string;
  /**
  * metadata_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#metadata_options StorageTransferJob#metadata_options}
  */
  readonly metadataOptions?: StorageTransferJobTransferSpecTransferOptionsMetadataOptions;
}

export function storageTransferJobTransferSpecTransferOptionsToTerraform(struct?: StorageTransferJobTransferSpecTransferOptionsOutputReference | StorageTransferJobTransferSpecTransferOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_objects_from_source_after_transfer: cdktf.booleanToTerraform(struct!.deleteObjectsFromSourceAfterTransfer),
    delete_objects_unique_in_sink: cdktf.booleanToTerraform(struct!.deleteObjectsUniqueInSink),
    overwrite_objects_already_existing_in_sink: cdktf.booleanToTerraform(struct!.overwriteObjectsAlreadyExistingInSink),
    overwrite_when: cdktf.stringToTerraform(struct!.overwriteWhen),
    metadata_options: storageTransferJobTransferSpecTransferOptionsMetadataOptionsToTerraform(struct!.metadataOptions),
  }
}


export function storageTransferJobTransferSpecTransferOptionsToHclTerraform(struct?: StorageTransferJobTransferSpecTransferOptionsOutputReference | StorageTransferJobTransferSpecTransferOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_objects_from_source_after_transfer: {
      value: cdktf.booleanToHclTerraform(struct!.deleteObjectsFromSourceAfterTransfer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_objects_unique_in_sink: {
      value: cdktf.booleanToHclTerraform(struct!.deleteObjectsUniqueInSink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    overwrite_objects_already_existing_in_sink: {
      value: cdktf.booleanToHclTerraform(struct!.overwriteObjectsAlreadyExistingInSink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    overwrite_when: {
      value: cdktf.stringToHclTerraform(struct!.overwriteWhen),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_options: {
      value: storageTransferJobTransferSpecTransferOptionsMetadataOptionsToHclTerraform(struct!.metadataOptions),
      isBlock: true,
      type: "list",
      storageClassType: "StorageTransferJobTransferSpecTransferOptionsMetadataOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobTransferSpecTransferOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobTransferSpecTransferOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteObjectsFromSourceAfterTransfer !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteObjectsFromSourceAfterTransfer = this._deleteObjectsFromSourceAfterTransfer;
    }
    if (this._deleteObjectsUniqueInSink !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteObjectsUniqueInSink = this._deleteObjectsUniqueInSink;
    }
    if (this._overwriteObjectsAlreadyExistingInSink !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteObjectsAlreadyExistingInSink = this._overwriteObjectsAlreadyExistingInSink;
    }
    if (this._overwriteWhen !== undefined) {
      hasAnyValues = true;
      internalValueResult.overwriteWhen = this._overwriteWhen;
    }
    if (this._metadataOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataOptions = this._metadataOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobTransferSpecTransferOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deleteObjectsFromSourceAfterTransfer = undefined;
      this._deleteObjectsUniqueInSink = undefined;
      this._overwriteObjectsAlreadyExistingInSink = undefined;
      this._overwriteWhen = undefined;
      this._metadataOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deleteObjectsFromSourceAfterTransfer = value.deleteObjectsFromSourceAfterTransfer;
      this._deleteObjectsUniqueInSink = value.deleteObjectsUniqueInSink;
      this._overwriteObjectsAlreadyExistingInSink = value.overwriteObjectsAlreadyExistingInSink;
      this._overwriteWhen = value.overwriteWhen;
      this._metadataOptions.internalValue = value.metadataOptions;
    }
  }

  // delete_objects_from_source_after_transfer - computed: false, optional: true, required: false
  private _deleteObjectsFromSourceAfterTransfer?: boolean | cdktf.IResolvable; 
  public get deleteObjectsFromSourceAfterTransfer() {
    return this.getBooleanAttribute('delete_objects_from_source_after_transfer');
  }
  public set deleteObjectsFromSourceAfterTransfer(value: boolean | cdktf.IResolvable) {
    this._deleteObjectsFromSourceAfterTransfer = value;
  }
  public resetDeleteObjectsFromSourceAfterTransfer() {
    this._deleteObjectsFromSourceAfterTransfer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteObjectsFromSourceAfterTransferInput() {
    return this._deleteObjectsFromSourceAfterTransfer;
  }

  // delete_objects_unique_in_sink - computed: false, optional: true, required: false
  private _deleteObjectsUniqueInSink?: boolean | cdktf.IResolvable; 
  public get deleteObjectsUniqueInSink() {
    return this.getBooleanAttribute('delete_objects_unique_in_sink');
  }
  public set deleteObjectsUniqueInSink(value: boolean | cdktf.IResolvable) {
    this._deleteObjectsUniqueInSink = value;
  }
  public resetDeleteObjectsUniqueInSink() {
    this._deleteObjectsUniqueInSink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteObjectsUniqueInSinkInput() {
    return this._deleteObjectsUniqueInSink;
  }

  // overwrite_objects_already_existing_in_sink - computed: false, optional: true, required: false
  private _overwriteObjectsAlreadyExistingInSink?: boolean | cdktf.IResolvable; 
  public get overwriteObjectsAlreadyExistingInSink() {
    return this.getBooleanAttribute('overwrite_objects_already_existing_in_sink');
  }
  public set overwriteObjectsAlreadyExistingInSink(value: boolean | cdktf.IResolvable) {
    this._overwriteObjectsAlreadyExistingInSink = value;
  }
  public resetOverwriteObjectsAlreadyExistingInSink() {
    this._overwriteObjectsAlreadyExistingInSink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteObjectsAlreadyExistingInSinkInput() {
    return this._overwriteObjectsAlreadyExistingInSink;
  }

  // overwrite_when - computed: false, optional: true, required: false
  private _overwriteWhen?: string; 
  public get overwriteWhen() {
    return this.getStringAttribute('overwrite_when');
  }
  public set overwriteWhen(value: string) {
    this._overwriteWhen = value;
  }
  public resetOverwriteWhen() {
    this._overwriteWhen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteWhenInput() {
    return this._overwriteWhen;
  }

  // metadata_options - computed: false, optional: true, required: false
  private _metadataOptions = new StorageTransferJobTransferSpecTransferOptionsMetadataOptionsOutputReference(this, "metadata_options");
  public get metadataOptions() {
    return this._metadataOptions;
  }
  public putMetadataOptions(value: StorageTransferJobTransferSpecTransferOptionsMetadataOptions) {
    this._metadataOptions.internalValue = value;
  }
  public resetMetadataOptions() {
    this._metadataOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataOptionsInput() {
    return this._metadataOptions.internalValue;
  }
}
export interface StorageTransferJobTransferSpec {
  /**
  * Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#sink_agent_pool_name StorageTransferJob#sink_agent_pool_name}
  */
  readonly sinkAgentPoolName?: string;
  /**
  * Specifies the agent pool name associated with the posix data source. When unspecified, the default name is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#source_agent_pool_name StorageTransferJob#source_agent_pool_name}
  */
  readonly sourceAgentPoolName?: string;
  /**
  * aws_s3_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#aws_s3_data_source StorageTransferJob#aws_s3_data_source}
  */
  readonly awsS3DataSource?: StorageTransferJobTransferSpecAwsS3DataSource;
  /**
  * azure_blob_storage_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#azure_blob_storage_data_source StorageTransferJob#azure_blob_storage_data_source}
  */
  readonly azureBlobStorageDataSource?: StorageTransferJobTransferSpecAzureBlobStorageDataSource;
  /**
  * gcs_data_sink block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#gcs_data_sink StorageTransferJob#gcs_data_sink}
  */
  readonly gcsDataSink?: StorageTransferJobTransferSpecGcsDataSink;
  /**
  * gcs_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#gcs_data_source StorageTransferJob#gcs_data_source}
  */
  readonly gcsDataSource?: StorageTransferJobTransferSpecGcsDataSource;
  /**
  * hdfs_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#hdfs_data_source StorageTransferJob#hdfs_data_source}
  */
  readonly hdfsDataSource?: StorageTransferJobTransferSpecHdfsDataSource;
  /**
  * http_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#http_data_source StorageTransferJob#http_data_source}
  */
  readonly httpDataSource?: StorageTransferJobTransferSpecHttpDataSource;
  /**
  * object_conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#object_conditions StorageTransferJob#object_conditions}
  */
  readonly objectConditions?: StorageTransferJobTransferSpecObjectConditions;
  /**
  * posix_data_sink block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#posix_data_sink StorageTransferJob#posix_data_sink}
  */
  readonly posixDataSink?: StorageTransferJobTransferSpecPosixDataSink;
  /**
  * posix_data_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#posix_data_source StorageTransferJob#posix_data_source}
  */
  readonly posixDataSource?: StorageTransferJobTransferSpecPosixDataSource;
  /**
  * transfer_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#transfer_options StorageTransferJob#transfer_options}
  */
  readonly transferOptions?: StorageTransferJobTransferSpecTransferOptions;
}

export function storageTransferJobTransferSpecToTerraform(struct?: StorageTransferJobTransferSpecOutputReference | StorageTransferJobTransferSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sink_agent_pool_name: cdktf.stringToTerraform(struct!.sinkAgentPoolName),
    source_agent_pool_name: cdktf.stringToTerraform(struct!.sourceAgentPoolName),
    aws_s3_data_source: storageTransferJobTransferSpecAwsS3DataSourceToTerraform(struct!.awsS3DataSource),
    azure_blob_storage_data_source: storageTransferJobTransferSpecAzureBlobStorageDataSourceToTerraform(struct!.azureBlobStorageDataSource),
    gcs_data_sink: storageTransferJobTransferSpecGcsDataSinkToTerraform(struct!.gcsDataSink),
    gcs_data_source: storageTransferJobTransferSpecGcsDataSourceToTerraform(struct!.gcsDataSource),
    hdfs_data_source: storageTransferJobTransferSpecHdfsDataSourceToTerraform(struct!.hdfsDataSource),
    http_data_source: storageTransferJobTransferSpecHttpDataSourceToTerraform(struct!.httpDataSource),
    object_conditions: storageTransferJobTransferSpecObjectConditionsToTerraform(struct!.objectConditions),
    posix_data_sink: storageTransferJobTransferSpecPosixDataSinkToTerraform(struct!.posixDataSink),
    posix_data_source: storageTransferJobTransferSpecPosixDataSourceToTerraform(struct!.posixDataSource),
    transfer_options: storageTransferJobTransferSpecTransferOptionsToTerraform(struct!.transferOptions),
  }
}


export function storageTransferJobTransferSpecToHclTerraform(struct?: StorageTransferJobTransferSpecOutputReference | StorageTransferJobTransferSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sink_agent_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.sinkAgentPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_agent_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceAgentPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_s3_data_source: {
      value: storageTransferJobTransferSpecAwsS3DataSourceToHclTerraform(struct!.awsS3DataSource),
      isBlock: true,
      type: "list",
      storageClassType: "StorageTransferJobTransferSpecAwsS3DataSourceList",
    },
    azure_blob_storage_data_source: {
      value: storageTransferJobTransferSpecAzureBlobStorageDataSourceToHclTerraform(struct!.azureBlobStorageDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "StorageTransferJobTransferSpecAzureBlobStorageDataSourceList",
    },
    gcs_data_sink: {
      value: storageTransferJobTransferSpecGcsDataSinkToHclTerraform(struct!.gcsDataSink),
      isBlock: true,
      type: "list",
      storageClassType: "StorageTransferJobTransferSpecGcsDataSinkList",
    },
    gcs_data_source: {
      value: storageTransferJobTransferSpecGcsDataSourceToHclTerraform(struct!.gcsDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "StorageTransferJobTransferSpecGcsDataSourceList",
    },
    hdfs_data_source: {
      value: storageTransferJobTransferSpecHdfsDataSourceToHclTerraform(struct!.hdfsDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "StorageTransferJobTransferSpecHdfsDataSourceList",
    },
    http_data_source: {
      value: storageTransferJobTransferSpecHttpDataSourceToHclTerraform(struct!.httpDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "StorageTransferJobTransferSpecHttpDataSourceList",
    },
    object_conditions: {
      value: storageTransferJobTransferSpecObjectConditionsToHclTerraform(struct!.objectConditions),
      isBlock: true,
      type: "list",
      storageClassType: "StorageTransferJobTransferSpecObjectConditionsList",
    },
    posix_data_sink: {
      value: storageTransferJobTransferSpecPosixDataSinkToHclTerraform(struct!.posixDataSink),
      isBlock: true,
      type: "list",
      storageClassType: "StorageTransferJobTransferSpecPosixDataSinkList",
    },
    posix_data_source: {
      value: storageTransferJobTransferSpecPosixDataSourceToHclTerraform(struct!.posixDataSource),
      isBlock: true,
      type: "list",
      storageClassType: "StorageTransferJobTransferSpecPosixDataSourceList",
    },
    transfer_options: {
      value: storageTransferJobTransferSpecTransferOptionsToHclTerraform(struct!.transferOptions),
      isBlock: true,
      type: "list",
      storageClassType: "StorageTransferJobTransferSpecTransferOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StorageTransferJobTransferSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StorageTransferJobTransferSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sinkAgentPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sinkAgentPoolName = this._sinkAgentPoolName;
    }
    if (this._sourceAgentPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAgentPoolName = this._sourceAgentPoolName;
    }
    if (this._awsS3DataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsS3DataSource = this._awsS3DataSource?.internalValue;
    }
    if (this._azureBlobStorageDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureBlobStorageDataSource = this._azureBlobStorageDataSource?.internalValue;
    }
    if (this._gcsDataSink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsDataSink = this._gcsDataSink?.internalValue;
    }
    if (this._gcsDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsDataSource = this._gcsDataSource?.internalValue;
    }
    if (this._hdfsDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdfsDataSource = this._hdfsDataSource?.internalValue;
    }
    if (this._httpDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpDataSource = this._httpDataSource?.internalValue;
    }
    if (this._objectConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectConditions = this._objectConditions?.internalValue;
    }
    if (this._posixDataSink?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.posixDataSink = this._posixDataSink?.internalValue;
    }
    if (this._posixDataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.posixDataSource = this._posixDataSource?.internalValue;
    }
    if (this._transferOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferOptions = this._transferOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StorageTransferJobTransferSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sinkAgentPoolName = undefined;
      this._sourceAgentPoolName = undefined;
      this._awsS3DataSource.internalValue = undefined;
      this._azureBlobStorageDataSource.internalValue = undefined;
      this._gcsDataSink.internalValue = undefined;
      this._gcsDataSource.internalValue = undefined;
      this._hdfsDataSource.internalValue = undefined;
      this._httpDataSource.internalValue = undefined;
      this._objectConditions.internalValue = undefined;
      this._posixDataSink.internalValue = undefined;
      this._posixDataSource.internalValue = undefined;
      this._transferOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sinkAgentPoolName = value.sinkAgentPoolName;
      this._sourceAgentPoolName = value.sourceAgentPoolName;
      this._awsS3DataSource.internalValue = value.awsS3DataSource;
      this._azureBlobStorageDataSource.internalValue = value.azureBlobStorageDataSource;
      this._gcsDataSink.internalValue = value.gcsDataSink;
      this._gcsDataSource.internalValue = value.gcsDataSource;
      this._hdfsDataSource.internalValue = value.hdfsDataSource;
      this._httpDataSource.internalValue = value.httpDataSource;
      this._objectConditions.internalValue = value.objectConditions;
      this._posixDataSink.internalValue = value.posixDataSink;
      this._posixDataSource.internalValue = value.posixDataSource;
      this._transferOptions.internalValue = value.transferOptions;
    }
  }

  // sink_agent_pool_name - computed: true, optional: true, required: false
  private _sinkAgentPoolName?: string; 
  public get sinkAgentPoolName() {
    return this.getStringAttribute('sink_agent_pool_name');
  }
  public set sinkAgentPoolName(value: string) {
    this._sinkAgentPoolName = value;
  }
  public resetSinkAgentPoolName() {
    this._sinkAgentPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkAgentPoolNameInput() {
    return this._sinkAgentPoolName;
  }

  // source_agent_pool_name - computed: true, optional: true, required: false
  private _sourceAgentPoolName?: string; 
  public get sourceAgentPoolName() {
    return this.getStringAttribute('source_agent_pool_name');
  }
  public set sourceAgentPoolName(value: string) {
    this._sourceAgentPoolName = value;
  }
  public resetSourceAgentPoolName() {
    this._sourceAgentPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAgentPoolNameInput() {
    return this._sourceAgentPoolName;
  }

  // aws_s3_data_source - computed: false, optional: true, required: false
  private _awsS3DataSource = new StorageTransferJobTransferSpecAwsS3DataSourceOutputReference(this, "aws_s3_data_source");
  public get awsS3DataSource() {
    return this._awsS3DataSource;
  }
  public putAwsS3DataSource(value: StorageTransferJobTransferSpecAwsS3DataSource) {
    this._awsS3DataSource.internalValue = value;
  }
  public resetAwsS3DataSource() {
    this._awsS3DataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsS3DataSourceInput() {
    return this._awsS3DataSource.internalValue;
  }

  // azure_blob_storage_data_source - computed: false, optional: true, required: false
  private _azureBlobStorageDataSource = new StorageTransferJobTransferSpecAzureBlobStorageDataSourceOutputReference(this, "azure_blob_storage_data_source");
  public get azureBlobStorageDataSource() {
    return this._azureBlobStorageDataSource;
  }
  public putAzureBlobStorageDataSource(value: StorageTransferJobTransferSpecAzureBlobStorageDataSource) {
    this._azureBlobStorageDataSource.internalValue = value;
  }
  public resetAzureBlobStorageDataSource() {
    this._azureBlobStorageDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageDataSourceInput() {
    return this._azureBlobStorageDataSource.internalValue;
  }

  // gcs_data_sink - computed: false, optional: true, required: false
  private _gcsDataSink = new StorageTransferJobTransferSpecGcsDataSinkOutputReference(this, "gcs_data_sink");
  public get gcsDataSink() {
    return this._gcsDataSink;
  }
  public putGcsDataSink(value: StorageTransferJobTransferSpecGcsDataSink) {
    this._gcsDataSink.internalValue = value;
  }
  public resetGcsDataSink() {
    this._gcsDataSink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsDataSinkInput() {
    return this._gcsDataSink.internalValue;
  }

  // gcs_data_source - computed: false, optional: true, required: false
  private _gcsDataSource = new StorageTransferJobTransferSpecGcsDataSourceOutputReference(this, "gcs_data_source");
  public get gcsDataSource() {
    return this._gcsDataSource;
  }
  public putGcsDataSource(value: StorageTransferJobTransferSpecGcsDataSource) {
    this._gcsDataSource.internalValue = value;
  }
  public resetGcsDataSource() {
    this._gcsDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsDataSourceInput() {
    return this._gcsDataSource.internalValue;
  }

  // hdfs_data_source - computed: false, optional: true, required: false
  private _hdfsDataSource = new StorageTransferJobTransferSpecHdfsDataSourceOutputReference(this, "hdfs_data_source");
  public get hdfsDataSource() {
    return this._hdfsDataSource;
  }
  public putHdfsDataSource(value: StorageTransferJobTransferSpecHdfsDataSource) {
    this._hdfsDataSource.internalValue = value;
  }
  public resetHdfsDataSource() {
    this._hdfsDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdfsDataSourceInput() {
    return this._hdfsDataSource.internalValue;
  }

  // http_data_source - computed: false, optional: true, required: false
  private _httpDataSource = new StorageTransferJobTransferSpecHttpDataSourceOutputReference(this, "http_data_source");
  public get httpDataSource() {
    return this._httpDataSource;
  }
  public putHttpDataSource(value: StorageTransferJobTransferSpecHttpDataSource) {
    this._httpDataSource.internalValue = value;
  }
  public resetHttpDataSource() {
    this._httpDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpDataSourceInput() {
    return this._httpDataSource.internalValue;
  }

  // object_conditions - computed: false, optional: true, required: false
  private _objectConditions = new StorageTransferJobTransferSpecObjectConditionsOutputReference(this, "object_conditions");
  public get objectConditions() {
    return this._objectConditions;
  }
  public putObjectConditions(value: StorageTransferJobTransferSpecObjectConditions) {
    this._objectConditions.internalValue = value;
  }
  public resetObjectConditions() {
    this._objectConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectConditionsInput() {
    return this._objectConditions.internalValue;
  }

  // posix_data_sink - computed: false, optional: true, required: false
  private _posixDataSink = new StorageTransferJobTransferSpecPosixDataSinkOutputReference(this, "posix_data_sink");
  public get posixDataSink() {
    return this._posixDataSink;
  }
  public putPosixDataSink(value: StorageTransferJobTransferSpecPosixDataSink) {
    this._posixDataSink.internalValue = value;
  }
  public resetPosixDataSink() {
    this._posixDataSink.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixDataSinkInput() {
    return this._posixDataSink.internalValue;
  }

  // posix_data_source - computed: false, optional: true, required: false
  private _posixDataSource = new StorageTransferJobTransferSpecPosixDataSourceOutputReference(this, "posix_data_source");
  public get posixDataSource() {
    return this._posixDataSource;
  }
  public putPosixDataSource(value: StorageTransferJobTransferSpecPosixDataSource) {
    this._posixDataSource.internalValue = value;
  }
  public resetPosixDataSource() {
    this._posixDataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get posixDataSourceInput() {
    return this._posixDataSource.internalValue;
  }

  // transfer_options - computed: false, optional: true, required: false
  private _transferOptions = new StorageTransferJobTransferSpecTransferOptionsOutputReference(this, "transfer_options");
  public get transferOptions() {
    return this._transferOptions;
  }
  public putTransferOptions(value: StorageTransferJobTransferSpecTransferOptions) {
    this._transferOptions.internalValue = value;
  }
  public resetTransferOptions() {
    this._transferOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferOptionsInput() {
    return this._transferOptions.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job google_storage_transfer_job}
*/
export class StorageTransferJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_storage_transfer_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageTransferJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageTransferJob to import
  * @param importFromId The id of the existing StorageTransferJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageTransferJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_storage_transfer_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/storage_transfer_job google_storage_transfer_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageTransferJobConfig
  */
  public constructor(scope: Construct, id: string, config: StorageTransferJobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_storage_transfer_job',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._status = config.status;
    this._eventStream.internalValue = config.eventStream;
    this._loggingConfig.internalValue = config.loggingConfig;
    this._notificationConfig.internalValue = config.notificationConfig;
    this._replicationSpec.internalValue = config.replicationSpec;
    this._schedule.internalValue = config.schedule;
    this._transferSpec.internalValue = config.transferSpec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // deletion_time - computed: true, optional: false, required: false
  public get deletionTime() {
    return this.getStringAttribute('deletion_time');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // last_modification_time - computed: true, optional: false, required: false
  public get lastModificationTime() {
    return this.getStringAttribute('last_modification_time');
  }

  // name - computed: true, optional: true, required: false
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // event_stream - computed: false, optional: true, required: false
  private _eventStream = new StorageTransferJobEventStreamOutputReference(this, "event_stream");
  public get eventStream() {
    return this._eventStream;
  }
  public putEventStream(value: StorageTransferJobEventStream) {
    this._eventStream.internalValue = value;
  }
  public resetEventStream() {
    this._eventStream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventStreamInput() {
    return this._eventStream.internalValue;
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new StorageTransferJobLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: StorageTransferJobLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig = new StorageTransferJobNotificationConfigOutputReference(this, "notification_config");
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public putNotificationConfig(value: StorageTransferJobNotificationConfig) {
    this._notificationConfig.internalValue = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig.internalValue;
  }

  // replication_spec - computed: false, optional: true, required: false
  private _replicationSpec = new StorageTransferJobReplicationSpecOutputReference(this, "replication_spec");
  public get replicationSpec() {
    return this._replicationSpec;
  }
  public putReplicationSpec(value: StorageTransferJobReplicationSpec) {
    this._replicationSpec.internalValue = value;
  }
  public resetReplicationSpec() {
    this._replicationSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSpecInput() {
    return this._replicationSpec.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new StorageTransferJobScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: StorageTransferJobSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // transfer_spec - computed: false, optional: true, required: false
  private _transferSpec = new StorageTransferJobTransferSpecOutputReference(this, "transfer_spec");
  public get transferSpec() {
    return this._transferSpec;
  }
  public putTransferSpec(value: StorageTransferJobTransferSpec) {
    this._transferSpec.internalValue = value;
  }
  public resetTransferSpec() {
    this._transferSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferSpecInput() {
    return this._transferSpec.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      status: cdktf.stringToTerraform(this._status),
      event_stream: storageTransferJobEventStreamToTerraform(this._eventStream.internalValue),
      logging_config: storageTransferJobLoggingConfigToTerraform(this._loggingConfig.internalValue),
      notification_config: storageTransferJobNotificationConfigToTerraform(this._notificationConfig.internalValue),
      replication_spec: storageTransferJobReplicationSpecToTerraform(this._replicationSpec.internalValue),
      schedule: storageTransferJobScheduleToTerraform(this._schedule.internalValue),
      transfer_spec: storageTransferJobTransferSpecToTerraform(this._transferSpec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      event_stream: {
        value: storageTransferJobEventStreamToHclTerraform(this._eventStream.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageTransferJobEventStreamList",
      },
      logging_config: {
        value: storageTransferJobLoggingConfigToHclTerraform(this._loggingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageTransferJobLoggingConfigList",
      },
      notification_config: {
        value: storageTransferJobNotificationConfigToHclTerraform(this._notificationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageTransferJobNotificationConfigList",
      },
      replication_spec: {
        value: storageTransferJobReplicationSpecToHclTerraform(this._replicationSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageTransferJobReplicationSpecList",
      },
      schedule: {
        value: storageTransferJobScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageTransferJobScheduleList",
      },
      transfer_spec: {
        value: storageTransferJobTransferSpecToHclTerraform(this._transferSpec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StorageTransferJobTransferSpecList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
