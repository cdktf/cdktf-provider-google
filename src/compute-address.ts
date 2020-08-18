// https://www.terraform.io/docs/providers/google/r/compute_address.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeAddressConfig extends TerraformMetaArguments {
  /** The static external IP address represented by this resource. Only
IPv4 is supported. An address may only be specified for INTERNAL
address types. The IP address must be inside the specified subnetwork,
if any. */
  readonly address?: string;
  /** The type of address to reserve. Default value: "EXTERNAL" Possible values: ["INTERNAL", "EXTERNAL"] */
  readonly addressType?: string;
  /** An optional description of this resource. */
  readonly description?: string;
  /** Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash. */
  readonly name: string;
  /** The networking tier used for configuring this address. If this field is not
specified, it is assumed to be PREMIUM. Possible values: ["PREMIUM", "STANDARD"] */
  readonly networkTier?: string;
  readonly project?: string;
  /** The purpose of this resource, which can be one of the following values:

- GCE_ENDPOINT for addresses that are used by VM instances, alias IP ranges, internal load balancers, and similar resources.

This should only be set when using an Internal address. Possible values: ["GCE_ENDPOINT"] */
  readonly purpose?: string;
  /** The Region in which the created address should reside.
If it is not provided, the provider region is used. */
  readonly region?: string;
  /** The URL of the subnetwork in which to reserve the address. If an IP
address is specified, it must be within the subnetwork's IP range.
This field can only be used with INTERNAL type with
GCE_ENDPOINT/DNS_RESOLVER purposes. */
  readonly subnetwork?: string;
  /** timeouts block */
  readonly timeouts?: ComputeAddressTimeouts;
}
export interface ComputeAddressTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class ComputeAddress extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_address',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._address = config.address;
    this._addressType = config.addressType;
    this._description = config.description;
    this._name = config.name;
    this._networkTier = config.networkTier;
    this._project = config.project;
    this._purpose = config.purpose;
    this._region = config.region;
    this._subnetwork = config.subnetwork;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: true, required: false
  private _address?: string;
  public get address() {
    return this._address ?? this.getStringAttribute('address');
  }
  public set address(value: string | undefined) {
    this._address = value;
  }

  // address_type - computed: false, optional: true, required: false
  private _addressType?: string;
  public get addressType() {
    return this._addressType;
  }
  public set addressType(value: string | undefined) {
    this._addressType = value;
  }

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

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network_tier - computed: true, optional: true, required: false
  private _networkTier?: string;
  public get networkTier() {
    return this._networkTier ?? this.getStringAttribute('network_tier');
  }
  public set networkTier(value: string | undefined) {
    this._networkTier = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // purpose - computed: true, optional: true, required: false
  private _purpose?: string;
  public get purpose() {
    return this._purpose ?? this.getStringAttribute('purpose');
  }
  public set purpose(value: string | undefined) {
    this._purpose = value;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // subnetwork - computed: true, optional: true, required: false
  private _subnetwork?: string;
  public get subnetwork() {
    return this._subnetwork ?? this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string | undefined) {
    this._subnetwork = value;
  }

  // users - computed: true, optional: false, required: true
  public get users() {
    return this.getListAttribute('users');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeAddressTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeAddressTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      address: this._address,
      address_type: this._addressType,
      description: this._description,
      name: this._name,
      network_tier: this._networkTier,
      project: this._project,
      purpose: this._purpose,
      region: this._region,
      subnetwork: this._subnetwork,
      timeouts: this._timeouts,
    };
  }
}
