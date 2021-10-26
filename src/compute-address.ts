// https://www.terraform.io/docs/providers/google/r/compute_address.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * The static external IP address represented by this resource. Only
IPv4 is supported. An address may only be specified for INTERNAL
address types. The IP address must be inside the specified subnetwork,
if any.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_address.html#address ComputeAddress#address}
  */
  readonly address?: string;
  /**
  * The type of address to reserve. Default value: "EXTERNAL" Possible values: ["INTERNAL", "EXTERNAL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_address.html#address_type ComputeAddress#address_type}
  */
  readonly addressType?: string;
  /**
  * An optional description of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_address.html#description ComputeAddress#description}
  */
  readonly description?: string;
  /**
  * Name of the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?'
which means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_address.html#name ComputeAddress#name}
  */
  readonly name: string;
  /**
  * The URL of the network in which to reserve the address. This field
can only be used with INTERNAL type with the VPC_PEERING and
IPSEC_INTERCONNECT purposes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_address.html#network ComputeAddress#network}
  */
  readonly network?: string;
  /**
  * The networking tier used for configuring this address. If this field is not
specified, it is assumed to be PREMIUM. Possible values: ["PREMIUM", "STANDARD"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_address.html#network_tier ComputeAddress#network_tier}
  */
  readonly networkTier?: string;
  /**
  * The prefix length if the resource represents an IP range.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_address.html#prefix_length ComputeAddress#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_address.html#project ComputeAddress#project}
  */
  readonly project?: string;
  /**
  * The purpose of this resource, which can be one of the following values:

* GCE_ENDPOINT for addresses that are used by VM instances, alias IP
  ranges, internal load balancers, and similar resources.

* SHARED_LOADBALANCER_VIP for an address that can be used by multiple
  internal load balancers.

* VPC_PEERING for addresses that are reserved for VPC peer networks.

* IPSEC_INTERCONNECT for addresses created from a private IP range
  that are reserved for a VLAN attachment in an IPsec-encrypted Cloud
  Interconnect configuration. These addresses are regional resources.

* PRIVATE_SERVICE_CONNECT for a private network address that is used
to configure Private Service Connect. Only global internal addresses
can use this purpose.

This should only be set when using an Internal address.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_address.html#purpose ComputeAddress#purpose}
  */
  readonly purpose?: string;
  /**
  * The Region in which the created address should reside.
If it is not provided, the provider region is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_address.html#region ComputeAddress#region}
  */
  readonly region?: string;
  /**
  * The URL of the subnetwork in which to reserve the address. If an IP
address is specified, it must be within the subnetwork's IP range.
This field can only be used with INTERNAL type with
GCE_ENDPOINT/DNS_RESOLVER purposes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_address.html#subnetwork ComputeAddress#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_address.html#timeouts ComputeAddress#timeouts}
  */
  readonly timeouts?: ComputeAddressTimeouts;
}
export interface ComputeAddressTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_address.html#create ComputeAddress#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_address.html#delete ComputeAddress#delete}
  */
  readonly delete?: string;
}

function computeAddressTimeoutsToTerraform(struct?: ComputeAddressTimeoutsOutputReference | ComputeAddressTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ComputeAddressTimeoutsOutputReference extends cdktf.ComplexObject {
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_address.html google_compute_address}
*/
export class ComputeAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_address";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_address.html google_compute_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeAddressConfig
  */
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
    this._network = config.network;
    this._networkTier = config.networkTier;
    this._prefixLength = config.prefixLength;
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
  private _address?: string | undefined; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string | undefined) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address
  }

  // address_type - computed: false, optional: true, required: false
  private _addressType?: string | undefined; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string | undefined) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // network - computed: false, optional: true, required: false
  private _network?: string | undefined; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string | undefined) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network
  }

  // network_tier - computed: true, optional: true, required: false
  private _networkTier?: string | undefined; 
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }
  public set networkTier(value: string | undefined) {
    this._networkTier = value;
  }
  public resetNetworkTier() {
    this._networkTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTierInput() {
    return this._networkTier
  }

  // prefix_length - computed: false, optional: true, required: false
  private _prefixLength?: number | undefined; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number | undefined) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength
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

  // purpose - computed: true, optional: true, required: false
  private _purpose?: string | undefined; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string | undefined) {
    this._purpose = value;
  }
  public resetPurpose() {
    this._purpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // subnetwork - computed: true, optional: true, required: false
  private _subnetwork?: string | undefined; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string | undefined) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeAddressTimeouts | undefined; 
  private __timeoutsOutput = new ComputeAddressTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ComputeAddressTimeouts | undefined) {
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
      address: cdktf.stringToTerraform(this._address),
      address_type: cdktf.stringToTerraform(this._addressType),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      network_tier: cdktf.stringToTerraform(this._networkTier),
      prefix_length: cdktf.numberToTerraform(this._prefixLength),
      project: cdktf.stringToTerraform(this._project),
      purpose: cdktf.stringToTerraform(this._purpose),
      region: cdktf.stringToTerraform(this._region),
      subnetwork: cdktf.stringToTerraform(this._subnetwork),
      timeouts: computeAddressTimeoutsToTerraform(this._timeouts),
    };
  }
}
