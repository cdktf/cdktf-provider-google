// https://www.terraform.io/docs/providers/google/r/data_google_compute_router.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleComputeRouterConfig extends TerraformMetaArguments {
  /** Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash. */
  readonly name: string;
  /** A reference to the network to which this router belongs. */
  readonly network: string;
  readonly project?: string;
  /** Region where the router resides. */
  readonly region?: string;
}
export class DataGoogleComputeRouterBgpAdvertisedIpRanges extends ComplexComputedList {

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // range - computed: true, optional: false, required: true
  public get range() {
    return this.getStringAttribute('range');
  }
}
export class DataGoogleComputeRouterBgp extends ComplexComputedList {

  // advertise_mode - computed: true, optional: false, required: true
  public get advertiseMode() {
    return this.getStringAttribute('advertise_mode');
  }

  // advertised_groups - computed: true, optional: false, required: true
  public get advertisedGroups() {
    return this.getListAttribute('advertised_groups');
  }

  // advertised_ip_ranges - computed: true, optional: false, required: true
  public get advertisedIpRanges() {
    return 'not implemented' as any;
  }

  // asn - computed: true, optional: false, required: true
  public get asn() {
    return this.getNumberAttribute('asn');
  }
}

// Resource

export class DataGoogleComputeRouter extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleComputeRouterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_router',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._network = config.network;
    this._project = config.project;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bgp - computed: true, optional: false, required: true
  public bgp(index: string) {
    return new DataGoogleComputeRouterBgp(this, 'bgp', index);
  }

  // creation_timestamp - computed: true, optional: false, required: true
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network - computed: false, optional: false, required: true
  private _network: string;
  public get network() {
    return this._network;
  }
  public set network(value: string) {
    this._network = value;
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      network: this._network,
      project: this._project,
      region: this._region,
    };
  }
}
