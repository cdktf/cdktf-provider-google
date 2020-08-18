// https://www.terraform.io/docs/providers/google/r/compute_global_address.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeGlobalAddressConfig extends TerraformMetaArguments {
  /** The IP address or beginning of the address range represented by this
resource. This can be supplied as an input to reserve a specific
address or omitted to allow GCP to choose a valid one for you. */
  readonly address?: string;
  /** The type of the address to reserve.

* EXTERNAL indicates public/external single IP address.
* INTERNAL indicates internal IP ranges belonging to some network. Default value: "EXTERNAL" Possible values: ["EXTERNAL", "INTERNAL"] */
  readonly addressType?: string;
  /** An optional description of this resource. */
  readonly description?: string;
  /** The IP Version that will be used by this address. The default value is 'IPV4'. Possible values: ["IPV4", "IPV6"] */
  readonly ipVersion?: string;
  /** Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash. */
  readonly name: string;
  /** The URL of the network in which to reserve the IP range. The IP range
must be in RFC1918 space. The network cannot be deleted if there are
any reserved IP ranges referring to it.

This should only be set when using an Internal address. */
  readonly network?: string;
  /** The prefix length of the IP range. If not present, it means the
address field is a single IP address.

This field is not applicable to addresses with addressType=EXTERNAL. */
  readonly prefixLength?: number;
  readonly project?: string;
  /** The purpose of the resource. For global internal addresses it can be

* VPC_PEERING - for peer networks

This should only be set when using an Internal address. Possible values: ["VPC_PEERING"] */
  readonly purpose?: string;
  /** timeouts block */
  readonly timeouts?: ComputeGlobalAddressTimeouts;
}
export interface ComputeGlobalAddressTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class ComputeGlobalAddress extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeGlobalAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_global_address',
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
    this._ipVersion = config.ipVersion;
    this._name = config.name;
    this._network = config.network;
    this._prefixLength = config.prefixLength;
    this._project = config.project;
    this._purpose = config.purpose;
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

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string;
  public get ipVersion() {
    return this._ipVersion;
  }
  public set ipVersion(value: string | undefined) {
    this._ipVersion = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string;
  public get network() {
    return this._network;
  }
  public set network(value: string | undefined) {
    this._network = value;
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number;
  public get prefixLength() {
    return this._prefixLength;
  }
  public set prefixLength(value: number | undefined) {
    this._prefixLength = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // purpose - computed: false, optional: true, required: false
  private _purpose?: string;
  public get purpose() {
    return this._purpose;
  }
  public set purpose(value: string | undefined) {
    this._purpose = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeGlobalAddressTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeGlobalAddressTimeouts | undefined) {
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
      ip_version: this._ipVersion,
      name: this._name,
      network: this._network,
      prefix_length: this._prefixLength,
      project: this._project,
      purpose: this._purpose,
      timeouts: this._timeouts,
    };
  }
}
