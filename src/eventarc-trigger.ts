// https://www.terraform.io/docs/providers/google/r/eventarc_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventarcTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. User labels attached to the triggers that can be used to group resources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#labels EventarcTrigger#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The location for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#location EventarcTrigger#location}
  */
  readonly location: string;
  /**
  * Required. The resource name of the trigger. Must be unique within the location on the project and must be in `projects/{project}/locations/{location}/triggers/{trigger}` format.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#name EventarcTrigger#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#project EventarcTrigger#project}
  */
  readonly project?: string;
  /**
  * Optional. The IAM service account email associated with the trigger. The service account represents the identity of the trigger. The principal who calls this API must have `iam.serviceAccounts.actAs` permission in the service account. See https://cloud.google.com/iam/docs/understanding-service-accounts?hl=en#sa_common for more information. For Cloud Run destinations, this service account is used to generate identity tokens when invoking the service. See https://cloud.google.com/run/docs/triggering/pubsub-push#create-service-account for information on how to invoke authenticated Cloud Run services. In order to create Audit Log triggers, the service account should also have `roles/eventarc.eventReceiver` IAM role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#service_account EventarcTrigger#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#destination EventarcTrigger#destination}
  */
  readonly destination: EventarcTriggerDestination;
  /**
  * matching_criteria block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#matching_criteria EventarcTrigger#matching_criteria}
  */
  readonly matchingCriteria: EventarcTriggerMatchingCriteria[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#timeouts EventarcTrigger#timeouts}
  */
  readonly timeouts?: EventarcTriggerTimeouts;
  /**
  * transport block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#transport EventarcTrigger#transport}
  */
  readonly transport?: EventarcTriggerTransport;
}
export interface EventarcTriggerDestinationCloudRunService {
  /**
  * Optional. The relative path on the Cloud Run service the events should be sent to. The value must conform to the definition of URI path segment (section 3.3 of RFC2396). Examples: "/route", "route", "route/subroute".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#path EventarcTrigger#path}
  */
  readonly path?: string;
  /**
  * Required. The region the Cloud Run service is deployed in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#region EventarcTrigger#region}
  */
  readonly region?: string;
  /**
  * Required. The name of the Cloud Run service being addressed. See https://cloud.google.com/run/docs/reference/rest/v1/namespaces.services. Only services located in the same project of the trigger object can be addressed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#service EventarcTrigger#service}
  */
  readonly service: string;
}

export function eventarcTriggerDestinationCloudRunServiceToTerraform(struct?: EventarcTriggerDestinationCloudRunServiceOutputReference | EventarcTriggerDestinationCloudRunService): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventarcTriggerDestinationCloudRunService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcTriggerDestinationCloudRunService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._region = undefined;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._region = value.region;
      this._service = value.service;
    }
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
    return this._service;
  }
}
export interface EventarcTriggerDestination {
  /**
  * The Cloud Function resource name. Only Cloud Functions V2 is supported. Format: projects/{project}/locations/{location}/functions/{function}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#cloud_function EventarcTrigger#cloud_function}
  */
  readonly cloudFunction?: string;
  /**
  * cloud_run_service block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#cloud_run_service EventarcTrigger#cloud_run_service}
  */
  readonly cloudRunService?: EventarcTriggerDestinationCloudRunService;
}

export function eventarcTriggerDestinationToTerraform(struct?: EventarcTriggerDestinationOutputReference | EventarcTriggerDestination): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventarcTriggerDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudFunction = this._cloudFunction;
    }
    if (this._cloudRunService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudRunService = this._cloudRunService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcTriggerDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudFunction = undefined;
      this._cloudRunService.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudFunction = value.cloudFunction;
      this._cloudRunService.internalValue = value.cloudRunService;
    }
  }

  // cloud_function - computed: false, optional: true, required: false
  private _cloudFunction?: string; 
  public get cloudFunction() {
    return this.getStringAttribute('cloud_function');
  }
  public set cloudFunction(value: string) {
    this._cloudFunction = value;
  }
  public resetCloudFunction() {
    this._cloudFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudFunctionInput() {
    return this._cloudFunction;
  }

  // cloud_run_service - computed: false, optional: true, required: false
  private _cloudRunService = new EventarcTriggerDestinationCloudRunServiceOutputReference(this as any, "cloud_run_service", true);
  public get cloudRunService() {
    return this._cloudRunService;
  }
  public putCloudRunService(value: EventarcTriggerDestinationCloudRunService) {
    this._cloudRunService.internalValue = value;
  }
  public resetCloudRunService() {
    this._cloudRunService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRunServiceInput() {
    return this._cloudRunService.internalValue;
  }
}
export interface EventarcTriggerMatchingCriteria {
  /**
  * Required. The name of a CloudEvents attribute. Currently, only a subset of attributes are supported for filtering. All triggers MUST provide a filter for the 'type' attribute.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#attribute EventarcTrigger#attribute}
  */
  readonly attribute: string;
  /**
  * Required. The value for the attribute.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#value EventarcTrigger#value}
  */
  readonly value: string;
}

export function eventarcTriggerMatchingCriteriaToTerraform(struct?: EventarcTriggerMatchingCriteria): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#create EventarcTrigger#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#delete EventarcTrigger#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#update EventarcTrigger#update}
  */
  readonly update?: string;
}

export function eventarcTriggerTimeoutsToTerraform(struct?: EventarcTriggerTimeoutsOutputReference | EventarcTriggerTimeouts): any {
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventarcTriggerTimeouts | undefined {
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

  public set internalValue(value: EventarcTriggerTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface EventarcTriggerTransportPubsub {
  /**
  * Optional. The name of the Pub/Sub topic created and managed by Eventarc system as a transport for the event delivery. Format: `projects/{PROJECT_ID}/topics/{TOPIC_NAME You may set an existing topic for triggers of the type google.cloud.pubsub.topic.v1.messagePublished` only. The topic you provide here will not be deleted by Eventarc at trigger deletion.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#topic EventarcTrigger#topic}
  */
  readonly topic?: string;
}

export function eventarcTriggerTransportPubsubToTerraform(struct?: EventarcTriggerTransportPubsubOutputReference | EventarcTriggerTransportPubsub): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export class EventarcTriggerTransportPubsubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventarcTriggerTransportPubsub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcTriggerTransportPubsub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._topic = value.topic;
    }
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface EventarcTriggerTransport {
  /**
  * pubsub block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger#pubsub EventarcTrigger#pubsub}
  */
  readonly pubsub?: EventarcTriggerTransportPubsub;
}

export function eventarcTriggerTransportToTerraform(struct?: EventarcTriggerTransportOutputReference | EventarcTriggerTransport): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pubsub: eventarcTriggerTransportPubsubToTerraform(struct!.pubsub),
  }
}

export class EventarcTriggerTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): EventarcTriggerTransport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pubsub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsub = this._pubsub?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EventarcTriggerTransport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pubsub.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pubsub.internalValue = value.pubsub;
    }
  }

  // pubsub - computed: false, optional: true, required: false
  private _pubsub = new EventarcTriggerTransportPubsubOutputReference(this as any, "pubsub", true);
  public get pubsub() {
    return this._pubsub;
  }
  public putPubsub(value: EventarcTriggerTransportPubsub) {
    this._pubsub.internalValue = value;
  }
  public resetPubsub() {
    this._pubsub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubInput() {
    return this._pubsub.internalValue;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger google_eventarc_trigger}
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
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/eventarc_trigger google_eventarc_trigger} Resource
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
    this._destination.internalValue = config.destination;
    this._matchingCriteria = config.matchingCriteria;
    this._timeouts.internalValue = config.timeouts;
    this._transport.internalValue = config.transport;
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
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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
    return this._location;
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

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
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
  private _destination = new EventarcTriggerDestinationOutputReference(this as any, "destination", true);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: EventarcTriggerDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
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
    return this._matchingCriteria;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EventarcTriggerTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EventarcTriggerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // transport - computed: false, optional: true, required: false
  private _transport = new EventarcTriggerTransportOutputReference(this as any, "transport", true);
  public get transport() {
    return this._transport;
  }
  public putTransport(value: EventarcTriggerTransport) {
    this._transport.internalValue = value;
  }
  public resetTransport() {
    this._transport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportInput() {
    return this._transport.internalValue;
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
      destination: eventarcTriggerDestinationToTerraform(this._destination.internalValue),
      matching_criteria: cdktf.listMapper(eventarcTriggerMatchingCriteriaToTerraform)(this._matchingCriteria),
      timeouts: eventarcTriggerTimeoutsToTerraform(this._timeouts.internalValue),
      transport: eventarcTriggerTransportToTerraform(this._transport.internalValue),
    };
  }
}
