// https://www.terraform.io/docs/providers/google/r/cloud_run_domain_mapping.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudRunDomainMappingConfig extends cdktf.TerraformMetaArguments {
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
export class CloudRunDomainMappingStatusConditions extends cdktf.ComplexComputedList {

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class CloudRunDomainMappingStatusResourceRecords extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rrdata - computed: true, optional: false, required: false
  public get rrdata() {
    return this.getStringAttribute('rrdata');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class CloudRunDomainMappingStatus extends cdktf.ComplexComputedList {

  // conditions - computed: true, optional: false, required: false
  public get conditions() {
    return this.interpolationForAttribute('conditions') as any;
  }

  // mapped_route_name - computed: true, optional: false, required: false
  public get mappedRouteName() {
    return this.getStringAttribute('mapped_route_name');
  }

  // observed_generation - computed: true, optional: false, required: false
  public get observedGeneration() {
    return this.getNumberAttribute('observed_generation');
  }

  // resource_records - computed: true, optional: false, required: false
  public get resourceRecords() {
    return this.interpolationForAttribute('resource_records') as any;
  }
}
export interface CloudRunDomainMappingMetadata {
  /** Annotations is a key value map stored with a resource that
may be set by external tools to store and retrieve arbitrary metadata. More
info: http://kubernetes.io/docs/user-guide/annotations

**Note**: The Cloud Run API may add additional annotations that were not provided in your config.
If terraform plan shows a diff where a server-side annotation is added, you can add it to your config
or apply the lifecycle.ignore_changes rule to the metadata.0.annotations field. */
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

function cloudRunDomainMappingMetadataToTerraform(struct?: CloudRunDomainMappingMetadata): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    annotations: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
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

function cloudRunDomainMappingSpecToTerraform(struct?: CloudRunDomainMappingSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    certificate_mode: cdktf.stringToTerraform(struct!.certificateMode),
    force_override: cdktf.booleanToTerraform(struct!.forceOverride),
    route_name: cdktf.stringToTerraform(struct!.routeName),
  }
}

export interface CloudRunDomainMappingTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function cloudRunDomainMappingTimeoutsToTerraform(struct?: CloudRunDomainMappingTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class CloudRunDomainMapping extends cdktf.TerraformResource {

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
  public get id() {
    return this.getStringAttribute('id');
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

  // status - computed: true, optional: false, required: false
  public status(index: string) {
    return new CloudRunDomainMappingStatus(this, 'status', index);
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata: CloudRunDomainMappingMetadata[];
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: CloudRunDomainMappingMetadata[]) {
    this._metadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // spec - computed: false, optional: false, required: true
  private _spec: CloudRunDomainMappingSpec[];
  public get spec() {
    return this.interpolationForAttribute('spec') as any;
  }
  public set spec(value: CloudRunDomainMappingSpec[]) {
    this._spec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudRunDomainMappingTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CloudRunDomainMappingTimeouts ) {
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
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      metadata: cdktf.listMapper(cloudRunDomainMappingMetadataToTerraform)(this._metadata),
      spec: cdktf.listMapper(cloudRunDomainMappingSpecToTerraform)(this._spec),
      timeouts: cloudRunDomainMappingTimeoutsToTerraform(this._timeouts),
    };
  }
}
