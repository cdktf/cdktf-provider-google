// https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PubsubLiteTopicConfig extends cdktf.TerraformMetaArguments {
  /** Name of the topic. */
  readonly name: string;
  readonly project?: string;
  /** The region of the pubsub lite topic. */
  readonly region?: string;
  /** The zone of the pubsub lite topic. */
  readonly zone?: string;
  /** partition_config block */
  readonly partitionConfig?: PubsubLiteTopicPartitionConfig[];
  /** retention_config block */
  readonly retentionConfig?: PubsubLiteTopicRetentionConfig[];
  /** timeouts block */
  readonly timeouts?: PubsubLiteTopicTimeouts;
}
export interface PubsubLiteTopicPartitionConfigCapacity {
  /** Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16. */
  readonly publishMibPerSec: number;
  /** Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16. */
  readonly subscribeMibPerSec: number;
}

function pubsubLiteTopicPartitionConfigCapacityToTerraform(struct?: PubsubLiteTopicPartitionConfigCapacity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    publish_mib_per_sec: cdktf.numberToTerraform(struct!.publishMibPerSec),
    subscribe_mib_per_sec: cdktf.numberToTerraform(struct!.subscribeMibPerSec),
  }
}

export interface PubsubLiteTopicPartitionConfig {
  /** The number of partitions in the topic. Must be at least 1. */
  readonly count: number;
  /** capacity block */
  readonly capacity?: PubsubLiteTopicPartitionConfigCapacity[];
}

function pubsubLiteTopicPartitionConfigToTerraform(struct?: PubsubLiteTopicPartitionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    capacity: cdktf.listMapper(pubsubLiteTopicPartitionConfigCapacityToTerraform)(struct!.capacity),
  }
}

export interface PubsubLiteTopicRetentionConfig {
  /** The provisioned storage, in bytes, per partition. If the number of bytes stored
in any of the topic's partitions grows beyond this value, older messages will be
dropped to make room for newer ones, regardless of the value of period. */
  readonly perPartitionBytes: string;
  /** How long a published message is retained. If unset, messages will be retained as
long as the bytes retained for each partition is below perPartitionBytes. */
  readonly period?: string;
}

function pubsubLiteTopicRetentionConfigToTerraform(struct?: PubsubLiteTopicRetentionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    per_partition_bytes: cdktf.stringToTerraform(struct!.perPartitionBytes),
    period: cdktf.stringToTerraform(struct!.period),
  }
}

export interface PubsubLiteTopicTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function pubsubLiteTopicTimeoutsToTerraform(struct?: PubsubLiteTopicTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class PubsubLiteTopic extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PubsubLiteTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'google_pubsub_lite_topic',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._zone = config.zone;
    this._partitionConfig = config.partitionConfig;
    this._retentionConfig = config.retentionConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._project
  }

  // region - computed: false, optional: true, required: false
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string ) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string ) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone
  }

  // partition_config - computed: false, optional: true, required: false
  private _partitionConfig?: PubsubLiteTopicPartitionConfig[];
  public get partitionConfig() {
    return this.interpolationForAttribute('partition_config') as any;
  }
  public set partitionConfig(value: PubsubLiteTopicPartitionConfig[] ) {
    this._partitionConfig = value;
  }
  public resetPartitionConfig() {
    this._partitionConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionConfigInput() {
    return this._partitionConfig
  }

  // retention_config - computed: false, optional: true, required: false
  private _retentionConfig?: PubsubLiteTopicRetentionConfig[];
  public get retentionConfig() {
    return this.interpolationForAttribute('retention_config') as any;
  }
  public set retentionConfig(value: PubsubLiteTopicRetentionConfig[] ) {
    this._retentionConfig = value;
  }
  public resetRetentionConfig() {
    this._retentionConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionConfigInput() {
    return this._retentionConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PubsubLiteTopicTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PubsubLiteTopicTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      zone: cdktf.stringToTerraform(this._zone),
      partition_config: cdktf.listMapper(pubsubLiteTopicPartitionConfigToTerraform)(this._partitionConfig),
      retention_config: cdktf.listMapper(pubsubLiteTopicRetentionConfigToTerraform)(this._retentionConfig),
      timeouts: pubsubLiteTopicTimeoutsToTerraform(this._timeouts),
    };
  }
}
