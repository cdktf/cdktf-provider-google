// https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PubsubLiteTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the topic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html#name PubsubLiteTopic#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html#project PubsubLiteTopic#project}
  */
  readonly project?: string;
  /**
  * The region of the pubsub lite topic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html#region PubsubLiteTopic#region}
  */
  readonly region?: string;
  /**
  * The zone of the pubsub lite topic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html#zone PubsubLiteTopic#zone}
  */
  readonly zone?: string;
  /**
  * partition_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html#partition_config PubsubLiteTopic#partition_config}
  */
  readonly partitionConfig?: PubsubLiteTopicPartitionConfig[];
  /**
  * reservation_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html#reservation_config PubsubLiteTopic#reservation_config}
  */
  readonly reservationConfig?: PubsubLiteTopicReservationConfig[];
  /**
  * retention_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html#retention_config PubsubLiteTopic#retention_config}
  */
  readonly retentionConfig?: PubsubLiteTopicRetentionConfig[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html#timeouts PubsubLiteTopic#timeouts}
  */
  readonly timeouts?: PubsubLiteTopicTimeouts;
}
export interface PubsubLiteTopicPartitionConfigCapacity {
  /**
  * Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html#publish_mib_per_sec PubsubLiteTopic#publish_mib_per_sec}
  */
  readonly publishMibPerSec: number;
  /**
  * Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html#subscribe_mib_per_sec PubsubLiteTopic#subscribe_mib_per_sec}
  */
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
  /**
  * The number of partitions in the topic. Must be at least 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html#count PubsubLiteTopic#count}
  */
  readonly count: number;
  /**
  * capacity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html#capacity PubsubLiteTopic#capacity}
  */
  readonly capacity?: PubsubLiteTopicPartitionConfigCapacity[];
}

function pubsubLiteTopicPartitionConfigToTerraform(struct?: PubsubLiteTopicPartitionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    capacity: cdktf.listMapper(pubsubLiteTopicPartitionConfigCapacityToTerraform)(struct!.capacity),
  }
}

export interface PubsubLiteTopicReservationConfig {
  /**
  * The Reservation to use for this topic's throughput capacity.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html#throughput_reservation PubsubLiteTopic#throughput_reservation}
  */
  readonly throughputReservation?: string;
}

function pubsubLiteTopicReservationConfigToTerraform(struct?: PubsubLiteTopicReservationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    throughput_reservation: cdktf.stringToTerraform(struct!.throughputReservation),
  }
}

export interface PubsubLiteTopicRetentionConfig {
  /**
  * The provisioned storage, in bytes, per partition. If the number of bytes stored
in any of the topic's partitions grows beyond this value, older messages will be
dropped to make room for newer ones, regardless of the value of period.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html#per_partition_bytes PubsubLiteTopic#per_partition_bytes}
  */
  readonly perPartitionBytes: string;
  /**
  * How long a published message is retained. If unset, messages will be retained as
long as the bytes retained for each partition is below perPartitionBytes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html#period PubsubLiteTopic#period}
  */
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
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html#create PubsubLiteTopic#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html#delete PubsubLiteTopic#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html#update PubsubLiteTopic#update}
  */
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


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html google_pubsub_lite_topic}
*/
export class PubsubLiteTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_pubsub_lite_topic";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html google_pubsub_lite_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PubsubLiteTopicConfig
  */
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
    this._reservationConfig = config.reservationConfig;
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

  // reservation_config - computed: false, optional: true, required: false
  private _reservationConfig?: PubsubLiteTopicReservationConfig[];
  public get reservationConfig() {
    return this.interpolationForAttribute('reservation_config') as any;
  }
  public set reservationConfig(value: PubsubLiteTopicReservationConfig[] ) {
    this._reservationConfig = value;
  }
  public resetReservationConfig() {
    this._reservationConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationConfigInput() {
    return this._reservationConfig
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
      reservation_config: cdktf.listMapper(pubsubLiteTopicReservationConfigToTerraform)(this._reservationConfig),
      retention_config: cdktf.listMapper(pubsubLiteTopicRetentionConfigToTerraform)(this._retentionConfig),
      timeouts: pubsubLiteTopicTimeoutsToTerraform(this._timeouts),
    };
  }
}
