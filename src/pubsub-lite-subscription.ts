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
  readonly deliveryConfig?: PubsubLiteSubscriptionDeliveryConfig;
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

function pubsubLiteSubscriptionDeliveryConfigToTerraform(struct?: PubsubLiteSubscriptionDeliveryConfigOutputReference | PubsubLiteSubscriptionDeliveryConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delivery_requirement: cdktf.stringToTerraform(struct!.deliveryRequirement),
  }
}

export class PubsubLiteSubscriptionDeliveryConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // delivery_requirement - computed: false, optional: false, required: true
  private _deliveryRequirement?: string; 
  public get deliveryRequirement() {
    return this.getStringAttribute('delivery_requirement');
  }
  public set deliveryRequirement(value: string) {
    this._deliveryRequirement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deliveryRequirementInput() {
    return this._deliveryRequirement
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

function pubsubLiteSubscriptionTimeoutsToTerraform(struct?: PubsubLiteSubscriptionTimeoutsOutputReference | PubsubLiteSubscriptionTimeouts): any {
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

export class PubsubLiteSubscriptionTimeoutsOutputReference extends cdktf.ComplexObject {
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
    return this._topic
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

  // delivery_config - computed: false, optional: true, required: false
  private _deliveryConfig?: PubsubLiteSubscriptionDeliveryConfig | undefined; 
  private __deliveryConfigOutput = new PubsubLiteSubscriptionDeliveryConfigOutputReference(this as any, "delivery_config", true);
  public get deliveryConfig() {
    return this.__deliveryConfigOutput;
  }
  public putDeliveryConfig(value: PubsubLiteSubscriptionDeliveryConfig | undefined) {
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
  private _timeouts?: PubsubLiteSubscriptionTimeouts | undefined; 
  private __timeoutsOutput = new PubsubLiteSubscriptionTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: PubsubLiteSubscriptionTimeouts | undefined) {
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
      delivery_config: pubsubLiteSubscriptionDeliveryConfigToTerraform(this._deliveryConfig),
      timeouts: pubsubLiteSubscriptionTimeoutsToTerraform(this._timeouts),
    };
  }
}
