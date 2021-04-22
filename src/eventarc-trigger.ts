// https://www.terraform.io/docs/providers/google/r/eventarc_trigger.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EventarcTriggerConfig extends cdktf.TerraformMetaArguments {
  readonly labels?: { [key: string]: string };
  readonly location: string;
  readonly name: string;
  readonly project?: string;
  readonly serviceAccount?: string;
  /** destination block */
  readonly destination: EventarcTriggerDestination[];
  /** matching_criteria block */
  readonly matchingCriteria: EventarcTriggerMatchingCriteria[];
  /** timeouts block */
  readonly timeouts?: EventarcTriggerTimeouts;
  /** transport block */
  readonly transport?: EventarcTriggerTransport[];
}
export interface EventarcTriggerDestinationCloudRunService {
  readonly path?: string;
  readonly region?: string;
  readonly service: string;
}

function eventarcTriggerDestinationCloudRunServiceToTerraform(struct?: EventarcTriggerDestinationCloudRunService): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    region: cdktf.stringToTerraform(struct!.region),
    service: cdktf.stringToTerraform(struct!.service),
  }
}

export interface EventarcTriggerDestination {
  readonly cloudFunction?: string;
  /** cloud_run_service block */
  readonly cloudRunService?: EventarcTriggerDestinationCloudRunService[];
}

function eventarcTriggerDestinationToTerraform(struct?: EventarcTriggerDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloud_function: cdktf.stringToTerraform(struct!.cloudFunction),
    cloud_run_service: cdktf.listMapper(eventarcTriggerDestinationCloudRunServiceToTerraform)(struct!.cloudRunService),
  }
}

export interface EventarcTriggerMatchingCriteria {
  readonly attribute: string;
  readonly value: string;
}

function eventarcTriggerMatchingCriteriaToTerraform(struct?: EventarcTriggerMatchingCriteria): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface EventarcTriggerTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function eventarcTriggerTimeoutsToTerraform(struct?: EventarcTriggerTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface EventarcTriggerTransportPubsub {
  readonly topic?: string;
}

function eventarcTriggerTransportPubsubToTerraform(struct?: EventarcTriggerTransportPubsub): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export interface EventarcTriggerTransport {
  /** pubsub block */
  readonly pubsub?: EventarcTriggerTransportPubsub[];
}

function eventarcTriggerTransportToTerraform(struct?: EventarcTriggerTransport): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    pubsub: cdktf.listMapper(eventarcTriggerTransportPubsubToTerraform)(struct!.pubsub),
  }
}


// Resource

export class EventarcTrigger extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _labels?: { [key: string]: string };
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } ) {
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
  private _location: string;
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

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string;
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string ) {
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
  private _destination: EventarcTriggerDestination[];
  public get destination() {
    return this.interpolationForAttribute('destination') as any;
  }
  public set destination(value: EventarcTriggerDestination[]) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination
  }

  // matching_criteria - computed: false, optional: false, required: true
  private _matchingCriteria: EventarcTriggerMatchingCriteria[];
  public get matchingCriteria() {
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
  private _timeouts?: EventarcTriggerTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: EventarcTriggerTimeouts ) {
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
  private _transport?: EventarcTriggerTransport[];
  public get transport() {
    return this.interpolationForAttribute('transport') as any;
  }
  public set transport(value: EventarcTriggerTransport[] ) {
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
      destination: cdktf.listMapper(eventarcTriggerDestinationToTerraform)(this._destination),
      matching_criteria: cdktf.listMapper(eventarcTriggerMatchingCriteriaToTerraform)(this._matchingCriteria),
      timeouts: eventarcTriggerTimeoutsToTerraform(this._timeouts),
      transport: cdktf.listMapper(eventarcTriggerTransportToTerraform)(this._transport),
    };
  }
}
