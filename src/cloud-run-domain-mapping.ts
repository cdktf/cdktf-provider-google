// https://www.terraform.io/docs/providers/google/r/cloud_run_domain_mapping.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface CloudRunDomainMappingConfig extends TerraformMetaArguments {
  /** The location of the cloud run instance. eg us-central1 */
  readonly location: string;
  /** Name should be a verified domain */
  readonly name: string;
  readonly project?: string;
  /** metadata block */
  readonly metadata: CloudRunDomainMappingMetadata[];
  /** spec block */
  readonly spec: CloudRunDomainMappingSpec[];
  /** timeouts block */
  readonly timeouts?: CloudRunDomainMappingTimeouts;
}
export class CloudRunDomainMappingStatusConditions extends ComplexComputedList {

  // message - computed: true, optional: false, required: true
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: true
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // status - computed: true, optional: false, required: true
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class CloudRunDomainMappingStatusResourceRecords extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // rrdata - computed: true, optional: false, required: true
  public get rrdata() {
    return this.getStringAttribute('rrdata');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class CloudRunDomainMappingStatus extends ComplexComputedList {

  // conditions - computed: true, optional: false, required: true
  public get conditions() {
    return 'not implemented' as any;
  }

  // mapped_route_name - computed: true, optional: false, required: true
  public get mappedRouteName() {
    return this.getStringAttribute('mapped_route_name');
  }

  // observed_generation - computed: true, optional: false, required: true
  public get observedGeneration() {
    return this.getNumberAttribute('observed_generation');
  }

  // resource_records - computed: true, optional: false, required: true
  public get resourceRecords() {
    return 'not implemented' as any;
  }
}
export interface CloudRunDomainMappingMetadata {
  /** Annotations is a key value map stored with a resource that
may be set by external tools to store and retrieve arbitrary metadata. More
info: http://kubernetes.io/docs/user-guide/annotations */
  readonly annotations?: { [key: string]: string };
  /** Map of string keys and values that can be used to organize and categorize
(scope and select) objects. May match selectors of replication controllers
and routes.
More info: http://kubernetes.io/docs/user-guide/labels */
  readonly labels?: { [key: string]: string };
  /** In Cloud Run the namespace must be equal to either the
project ID or project number. */
  readonly namespace: string;
}
export interface CloudRunDomainMappingSpec {
  /** The mode of the certificate. Default value: "AUTOMATIC" Possible values: ["NONE", "AUTOMATIC"] */
  readonly certificateMode?: string;
  /** If set, the mapping will override any mapping set before this spec was set.
It is recommended that the user leaves this empty to receive an error
warning about a potential conflict and only set it once the respective UI
has given such a warning. */
  readonly forceOverride?: boolean;
  /** The name of the Cloud Run Service that this DomainMapping applies to.
The route must exist. */
  readonly routeName: string;
}
export interface CloudRunDomainMappingTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class CloudRunDomainMapping extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudRunDomainMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_run_domain_mapping',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._metadata = config.metadata;
    this._spec = config.spec;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // status - computed: true, optional: false, required: true
  public status(index: string) {
    return new CloudRunDomainMappingStatus(this, 'status', index);
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: CloudRunDomainMappingMetadata[];
  public get metadata() {
    return this._metadata;
  }
  public set metadata(value: CloudRunDomainMappingMetadata[]) {
    this._metadata = value;
  }

  // spec - computed: false, optional: false, required: true
  private _spec: CloudRunDomainMappingSpec[];
  public get spec() {
    return this._spec;
  }
  public set spec(value: CloudRunDomainMappingSpec[]) {
    this._spec = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudRunDomainMappingTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: CloudRunDomainMappingTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      project: this._project,
      metadata: this._metadata,
      spec: this._spec,
      timeouts: this._timeouts,
    };
  }
}
