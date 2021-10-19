// https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventarcTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. User labels attached to the triggers that can be used to group resources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html#labels EventarcTrigger#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The location for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html#location EventarcTrigger#location}
  */
  readonly location: string;
  /**
  * Required. The resource name of the trigger. Must be unique within the location on the project and must be in `projects/{project}/locations/{location}/triggers/{trigger}` format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html#name EventarcTrigger#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html#project EventarcTrigger#project}
  */
  readonly project?: string;
  /**
  * Optional. The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have `iam.serviceAccounts.actAs` permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts?hl=en#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. In order to create Audit Log triggers, the service account should also have `roles/eventarc.eventReceiver` IAM role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html#service_account EventarcTrigger#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html#destination EventarcTrigger#destination}
  */
  readonly destination: EventarcTriggerDestination;
  /**
  * matching_criteria block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html#matching_criteria EventarcTrigger#matching_criteria}
  */
  readonly matchingCriteria: EventarcTriggerMatchingCriteria[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html#timeouts EventarcTrigger#timeouts}
  */
  readonly timeouts?: EventarcTriggerTimeouts;
  /**
  * transport block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html#transport EventarcTrigger#transport}
  */
  readonly transport?: EventarcTriggerTransport;
}
export interface EventarcTriggerDestinationCloudRunService {
  /**
  * Optional. The relative path on the Cloud Run service the events should be sent to. The value must conform to the definition of URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html#path EventarcTrigger#path}
  */
  readonly path?: string;
  /**
  * Required. The region the Cloud Run service is deployed in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html#region EventarcTrigger#region}
  */
  readonly region?: string;
  /**
  * Required. The name of the Cloud Run service being addressed. See https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located in the same project of the trigger object can be addressed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html#service EventarcTrigger#service}
  */
  readonly service: string;
}

function eventarcTriggerDestinationCloudRunServiceToTerraform(struct?: EventarcTriggerDestinationCloudRunServiceOutputReference | EventarcTriggerDestinationCloudRunService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    region: cdktf.stringToTerraform(struct!.region),
    service: cdktf.stringToTerraform(struct!.service),
  }
}

export class EventarcTriggerDestinationCloudRunServiceOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // path - computed: false, optional: true, required: false
  private _path?: string | undefined; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string | undefined) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // region - computed: true, optional: true, required: false
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

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service
  }
}
export interface EventarcTriggerDestination {
  /**
  * The Cloud Function resource name. Only Cloud Functions V2 is supported. Format: projects/{project}/locations/{location}/functions/{function}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html#cloud_function EventarcTrigger#cloud_function}
  */
  readonly cloudFunction?: string;
  /**
  * cloud_run_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html#cloud_run_service EventarcTrigger#cloud_run_service}
  */
  readonly cloudRunService?: EventarcTriggerDestinationCloudRunService;
}

function eventarcTriggerDestinationToTerraform(struct?: EventarcTriggerDestinationOutputReference | EventarcTriggerDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_function: cdktf.stringToTerraform(struct!.cloudFunction),
    cloud_run_service: eventarcTriggerDestinationCloudRunServiceToTerraform(struct!.cloudRunService),
  }
}

export class EventarcTriggerDestinationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cloud_function - computed: false, optional: true, required: false
  private _cloudFunction?: string | undefined; 
  public get cloudFunction() {
    return this.getStringAttribute('cloud_function');
  }
  public set cloudFunction(value: string | undefined) {
    this._cloudFunction = value;
  }
  public resetCloudFunction() {
    this._cloudFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudFunctionInput() {
    return this._cloudFunction
  }

  // cloud_run_service - computed: false, optional: true, required: false
  private _cloudRunService?: EventarcTriggerDestinationCloudRunService | undefined; 
  private __cloudRunServiceOutput = new EventarcTriggerDestinationCloudRunServiceOutputReference(this as any, "cloud_run_service", true);
  public get cloudRunService() {
    return this.__cloudRunServiceOutput;
  }
  public putCloudRunService(value: EventarcTriggerDestinationCloudRunService | undefined) {
    this._cloudRunService = value;
  }
  public resetCloudRunService() {
    this._cloudRunService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRunServiceInput() {
    return this._cloudRunService
  }
}
export interface EventarcTriggerMatchingCriteria {
  /**
  * Required. The name of a CloudEvents attribute. Currently, only a subset of attributes are supported for filtering. All triggers MUST provide a filter for the 'type' attribute.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html#attribute EventarcTrigger#attribute}
  */
  readonly attribute: string;
  /**
  * Required. The value for the attribute.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html#value EventarcTrigger#value}
  */
  readonly value: string;
}

function eventarcTriggerMatchingCriteriaToTerraform(struct?: EventarcTriggerMatchingCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface EventarcTriggerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html#create EventarcTrigger#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html#delete EventarcTrigger#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html#update EventarcTrigger#update}
  */
  readonly update?: string;
}

function eventarcTriggerTimeoutsToTerraform(struct?: EventarcTriggerTimeoutsOutputReference | EventarcTriggerTimeouts): any {
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

export class EventarcTriggerTimeoutsOutputReference extends cdktf.ComplexObject {
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
export interface EventarcTriggerTransportPubsub {
  /**
  * Optional. The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{PROJECT_ID}/topics/{TOPIC_NAME You may set an existing topic for triggers of the type google.cloud.pubsub.topic.v1.messagePublished` only. The topic you provide here will not be deleted by Eventarc at trigger deletion.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html#topic EventarcTrigger#topic}
  */
  readonly topic?: string;
}

function eventarcTriggerTransportPubsubToTerraform(struct?: EventarcTriggerTransportPubsubOutputReference | EventarcTriggerTransportPubsub): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export class EventarcTriggerTransportPubsubOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string | undefined; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string | undefined) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic
  }
}
export interface EventarcTriggerTransport {
  /**
  * pubsub block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html#pubsub EventarcTrigger#pubsub}
  */
  readonly pubsub?: EventarcTriggerTransportPubsub;
}

function eventarcTriggerTransportToTerraform(struct?: EventarcTriggerTransportOutputReference | EventarcTriggerTransport): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pubsub: eventarcTriggerTransportPubsubToTerraform(struct!.pubsub),
  }
}

export class EventarcTriggerTransportOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // pubsub - computed: false, optional: true, required: false
  private _pubsub?: EventarcTriggerTransportPubsub | undefined; 
  private __pubsubOutput = new EventarcTriggerTransportPubsubOutputReference(this as any, "pubsub", true);
  public get pubsub() {
    return this.__pubsubOutput;
  }
  public putPubsub(value: EventarcTriggerTransportPubsub | undefined) {
    this._pubsub = value;
  }
  public resetPubsub() {
    this._pubsub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubInput() {
    return this._pubsub
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html google_eventarc_trigger}
*/
export class EventarcTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_eventarc_trigger";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html google_eventarc_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EventarcTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: EventarcTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'google_eventarc_trigger',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._serviceAccount = config.serviceAccount;
    this._destination = config.destination;
    this._matchingCriteria = config.matchingCriteria;
    this._timeouts = config.timeouts;
    this._transport = config.transport;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
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
    return this._location
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

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string | undefined; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string | undefined) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: EventarcTriggerDestination; 
  private __destinationOutput = new EventarcTriggerDestinationOutputReference(this as any, "destination", true);
  public get destination() {
    return this.__destinationOutput;
  }
  public putDestination(value: EventarcTriggerDestination) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination
  }

  // matching_criteria - computed: false, optional: false, required: true
  private _matchingCriteria?: EventarcTriggerMatchingCriteria[]; 
  public get matchingCriteria() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('matching_criteria') as any;
  }
  public set matchingCriteria(value: EventarcTriggerMatchingCriteria[]) {
    this._matchingCriteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingCriteriaInput() {
    return this._matchingCriteria
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: EventarcTriggerTimeouts | undefined; 
  private __timeoutsOutput = new EventarcTriggerTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: EventarcTriggerTimeouts | undefined) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // transport - computed: false, optional: true, required: false
  private _transport?: EventarcTriggerTransport | undefined; 
  private __transportOutput = new EventarcTriggerTransportOutputReference(this as any, "transport", true);
  public get transport() {
    return this.__transportOutput;
  }
  public putTransport(value: EventarcTriggerTransport | undefined) {
    this._transport = value;
  }
  public resetTransport() {
    this._transport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      destination: eventarcTriggerDestinationToTerraform(this._destination),
      matching_criteria: cdktf.listMapper(eventarcTriggerMatchingCriteriaToTerraform)(this._matchingCriteria),
      timeouts: eventarcTriggerTimeoutsToTerraform(this._timeouts),
      transport: eventarcTriggerTransportToTerraform(this._transport),
    };
  }
}
