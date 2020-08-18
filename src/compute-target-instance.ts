// https://www.terraform.io/docs/providers/google/r/compute_target_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeTargetInstanceConfig extends TerraformMetaArguments {
  /** An optional description of this resource. */
  readonly description?: string;
  /** The Compute instance VM handling traffic for this target instance.
Accepts the instance self-link, relative path
(e.g. 'projects/project/zones/zone/instances/instance') or name. If
name is given, the zone will default to the given zone or
the provider-default zone and the project will default to the
provider-level project. */
  readonly instance: string;
  /** Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. */
  readonly name: string;
  /** NAT option controlling how IPs are NAT'ed to the instance.
Currently only NO_NAT (default value) is supported. Default value: "NO_NAT" Possible values: ["NO_NAT"] */
  readonly natPolicy?: string;
  readonly project?: string;
  /** URL of the zone where the target instance resides. */
  readonly zone?: string;
  /** timeouts block */
  readonly timeouts?: ComputeTargetInstanceTimeouts;
}
export interface ComputeTargetInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class ComputeTargetInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeTargetInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_target_instance',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._instance = config.instance;
    this._name = config.name;
    this._natPolicy = config.natPolicy;
    this._project = config.project;
    this._zone = config.zone;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: true
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // instance - computed: false, optional: false, required: true
  private _instance: string;
  public get instance() {
    return this._instance;
  }
  public set instance(value: string) {
    this._instance = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // nat_policy - computed: false, optional: true, required: false
  private _natPolicy?: string;
  public get natPolicy() {
    return this._natPolicy;
  }
  public set natPolicy(value: string | undefined) {
    this._natPolicy = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this._zone ?? this.getStringAttribute('zone');
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeTargetInstanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeTargetInstanceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      instance: this._instance,
      name: this._name,
      nat_policy: this._natPolicy,
      project: this._project,
      zone: this._zone,
      timeouts: this._timeouts,
    };
  }
}
