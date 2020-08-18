// https://www.terraform.io/docs/providers/google/r/data_google_compute_network_endpoint_group.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleComputeNetworkEndpointGroupConfig extends TerraformMetaArguments {
  /** Name of the resource; provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. */
  readonly name?: string;
  readonly project?: string;
  readonly selfLink?: string;
  /** Zone where the network endpoint group is located. */
  readonly zone?: string;
}

// Resource

export class DataGoogleComputeNetworkEndpointGroup extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleComputeNetworkEndpointGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_compute_network_endpoint_group',
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
    this._selfLink = config.selfLink;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_port - computed: true, optional: false, required: true
  public get defaultPort() {
    return this.getNumberAttribute('default_port');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // network - computed: true, optional: false, required: true
  public get network() {
    return this.getStringAttribute('network');
  }

  // network_endpoint_type - computed: true, optional: false, required: true
  public get networkEndpointType() {
    return this.getStringAttribute('network_endpoint_type');
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // self_link - computed: false, optional: true, required: false
  private _selfLink?: string;
  public get selfLink() {
    return this._selfLink;
  }
  public set selfLink(value: string | undefined) {
    this._selfLink = value;
  }

  // size - computed: true, optional: false, required: true
  public get size() {
    return this.getNumberAttribute('size');
  }

  // subnetwork - computed: true, optional: false, required: true
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this._zone;
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      project: this._project,
      self_link: this._selfLink,
      zone: this._zone,
    };
  }
}
