// https://www.terraform.io/docs/providers/google/r/pubsub_lite_subscription.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PubsubLiteSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the subscription.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_subscription.html#name PubsubLiteSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_subscription.html#project PubsubLiteSubscription#project}
  */
  readonly project?: string;
  /**
  * The region of the pubsub lite topic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_subscription.html#region PubsubLiteSubscription#region}
  */
  readonly region?: string;
  /**
  * A reference to a Topic resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_subscription.html#topic PubsubLiteSubscription#topic}
  */
  readonly topic: string;
  /**
  * The zone of the pubsub lite topic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_subscription.html#zone PubsubLiteSubscription#zone}
  */
  readonly zone?: string;
  /**
  * delivery_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_subscription.html#delivery_config PubsubLiteSubscription#delivery_config}
  */
  readonly deliveryConfig?: PubsubLiteSubscriptionDeliveryConfig[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_subscription.html#timeouts PubsubLiteSubscription#timeouts}
  */
  readonly timeouts?: PubsubLiteSubscriptionTimeouts;
}
export interface PubsubLiteSubscriptionDeliveryConfig {
  /**
  * When this subscription should send messages to subscribers relative to messages persistence in storage. Possible values: ["DELIVER_IMMEDIATELY", "DELIVER_AFTER_STORED", "DELIVERY_REQUIREMENT_UNSPECIFIED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_subscription.html#delivery_requirement PubsubLiteSubscription#delivery_requirement}
  */
  readonly deliveryRequirement: string;
}

function pubsubLiteSubscriptionDeliveryConfigToTerraform(struct?: PubsubLiteSubscriptionDeliveryConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    delivery_requirement: cdktf.stringToTerraform(struct!.deliveryRequirement),
  }
}

export interface PubsubLiteSubscriptionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_subscription.html#create PubsubLiteSubscription#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_subscription.html#delete PubsubLiteSubscription#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_subscription.html#update PubsubLiteSubscription#update}
  */
  readonly update?: string;
}

function pubsubLiteSubscriptionTimeoutsToTerraform(struct?: PubsubLiteSubscriptionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_subscription.html google_pubsub_lite_subscription}
*/
export class PubsubLiteSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_pubsub_lite_subscription";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/pubsub_lite_subscription.html google_pubsub_lite_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PubsubLiteSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: PubsubLiteSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_pubsub_lite_subscription',
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
    this._topic = config.topic;
    this._zone = config.zone;
    this._deliveryConfig = config.deliveryConfig;
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

  // topic - computed: false, optional: false, required: true
  private _topic: string;
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic
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

  // delivery_config - computed: false, optional: true, required: false
  private _deliveryConfig?: PubsubLiteSubscriptionDeliveryConfig[];
  public get deliveryConfig() {
    return this.interpolationForAttribute('delivery_config') as any;
  }
  public set deliveryConfig(value: PubsubLiteSubscriptionDeliveryConfig[] ) {
    this._deliveryConfig = value;
  }
  public resetDeliveryConfig() {
    this._deliveryConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryConfigInput() {
    return this._deliveryConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PubsubLiteSubscriptionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PubsubLiteSubscriptionTimeouts ) {
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
      topic: cdktf.stringToTerraform(this._topic),
      zone: cdktf.stringToTerraform(this._zone),
      delivery_config: cdktf.listMapper(pubsubLiteSubscriptionDeliveryConfigToTerraform)(this._deliveryConfig),
      timeouts: pubsubLiteSubscriptionTimeoutsToTerraform(this._timeouts),
    };
  }
}
