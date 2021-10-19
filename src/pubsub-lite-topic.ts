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
  readonly partitionConfig?: PubsubLiteTopicPartitionConfig;
  /**
  * reservation_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html#reservation_config PubsubLiteTopic#reservation_config}
  */
  readonly reservationConfig?: PubsubLiteTopicReservationConfig;
  /**
  * retention_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_topic.html#retention_config PubsubLiteTopic#retention_config}
  */
  readonly retentionConfig?: PubsubLiteTopicRetentionConfig;
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

function pubsubLiteTopicPartitionConfigCapacityToTerraform(struct?: PubsubLiteTopicPartitionConfigCapacityOutputReference | PubsubLiteTopicPartitionConfigCapacity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    publish_mib_per_sec: cdktf.numberToTerraform(struct!.publishMibPerSec),
    subscribe_mib_per_sec: cdktf.numberToTerraform(struct!.subscribeMibPerSec),
  }
}

export class PubsubLiteTopicPartitionConfigCapacityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // publish_mib_per_sec - computed: false, optional: false, required: true
  private _publishMibPerSec?: number; 
  public get publishMibPerSec() {
    return this.getNumberAttribute('publish_mib_per_sec');
  }
  public set publishMibPerSec(value: number) {
    this._publishMibPerSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishMibPerSecInput() {
    return this._publishMibPerSec
  }

  // subscribe_mib_per_sec - computed: false, optional: false, required: true
  private _subscribeMibPerSec?: number; 
  public get subscribeMibPerSec() {
    return this.getNumberAttribute('subscribe_mib_per_sec');
  }
  public set subscribeMibPerSec(value: number) {
    this._subscribeMibPerSec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeMibPerSecInput() {
    return this._subscribeMibPerSec
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
  readonly capacity?: PubsubLiteTopicPartitionConfigCapacity;
}

function pubsubLiteTopicPartitionConfigToTerraform(struct?: PubsubLiteTopicPartitionConfigOutputReference | PubsubLiteTopicPartitionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    capacity: pubsubLiteTopicPartitionConfigCapacityToTerraform(struct!.capacity),
  }
}

export class PubsubLiteTopicPartitionConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: PubsubLiteTopicPartitionConfigCapacity | undefined; 
  private __capacityOutput = new PubsubLiteTopicPartitionConfigCapacityOutputReference(this as any, "capacity", true);
  public get capacity() {
    return this.__capacityOutput;
  }
  public putCapacity(value: PubsubLiteTopicPartitionConfigCapacity | undefined) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity
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

function pubsubLiteTopicReservationConfigToTerraform(struct?: PubsubLiteTopicReservationConfigOutputReference | PubsubLiteTopicReservationConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    throughput_reservation: cdktf.stringToTerraform(struct!.throughputReservation),
  }
}

export class PubsubLiteTopicReservationConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // throughput_reservation - computed: false, optional: true, required: false
  private _throughputReservation?: string | undefined; 
  public get throughputReservation() {
    return this.getStringAttribute('throughput_reservation');
  }
  public set throughputReservation(value: string | undefined) {
    this._throughputReservation = value;
  }
  public resetThroughputReservation() {
    this._throughputReservation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputReservationInput() {
    return this._throughputReservation
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

function pubsubLiteTopicRetentionConfigToTerraform(struct?: PubsubLiteTopicRetentionConfigOutputReference | PubsubLiteTopicRetentionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    per_partition_bytes: cdktf.stringToTerraform(struct!.perPartitionBytes),
    period: cdktf.stringToTerraform(struct!.period),
  }
}

export class PubsubLiteTopicRetentionConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // per_partition_bytes - computed: false, optional: false, required: true
  private _perPartitionBytes?: string; 
  public get perPartitionBytes() {
    return this.getStringAttribute('per_partition_bytes');
  }
  public set perPartitionBytes(value: string) {
    this._perPartitionBytes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perPartitionBytesInput() {
    return this._perPartitionBytes
  }

  // period - computed: false, optional: true, required: false
  private _period?: string | undefined; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string | undefined) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period
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

function pubsubLiteTopicTimeoutsToTerraform(struct?: PubsubLiteTopicTimeoutsOutputReference | PubsubLiteTopicTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class PubsubLiteTopicTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
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
  private _name?: string; 
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
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
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
  private _region?: string | undefined; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
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
  private _zone?: string | undefined; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string | undefined) {
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
  private _partitionConfig?: PubsubLiteTopicPartitionConfig | undefined; 
  private __partitionConfigOutput = new PubsubLiteTopicPartitionConfigOutputReference(this as any, "partition_config", true);
  public get partitionConfig() {
    return this.__partitionConfigOutput;
  }
  public putPartitionConfig(value: PubsubLiteTopicPartitionConfig | undefined) {
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
  private _reservationConfig?: PubsubLiteTopicReservationConfig | undefined; 
  private __reservationConfigOutput = new PubsubLiteTopicReservationConfigOutputReference(this as any, "reservation_config", true);
  public get reservationConfig() {
    return this.__reservationConfigOutput;
  }
  public putReservationConfig(value: PubsubLiteTopicReservationConfig | undefined) {
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
  private _retentionConfig?: PubsubLiteTopicRetentionConfig | undefined; 
  private __retentionConfigOutput = new PubsubLiteTopicRetentionConfigOutputReference(this as any, "retention_config", true);
  public get retentionConfig() {
    return this.__retentionConfigOutput;
  }
  public putRetentionConfig(value: PubsubLiteTopicRetentionConfig | undefined) {
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
  private _timeouts?: PubsubLiteTopicTimeouts | undefined; 
  private __timeoutsOutput = new PubsubLiteTopicTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: PubsubLiteTopicTimeouts | undefined) {
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
      partition_config: pubsubLiteTopicPartitionConfigToTerraform(this._partitionConfig),
      reservation_config: pubsubLiteTopicReservationConfigToTerraform(this._reservationConfig),
      retention_config: pubsubLiteTopicRetentionConfigToTerraform(this._retentionConfig),
      timeouts: pubsubLiteTopicTimeoutsToTerraform(this._timeouts),
    };
  }
}
