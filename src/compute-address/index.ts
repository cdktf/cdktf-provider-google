// https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * The static external IP address represented by this resource.
  * The IP address must be inside the specified subnetwork,
  * if any. Set by the API if undefined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address#address ComputeAddress#address}
  */
  readonly address?: string;
  /**
  * The type of address to reserve.
  * Note: if you set this argument's value as 'INTERNAL' you need to leave the 'network_tier' argument unset in that resource block. Default value: "EXTERNAL" Possible values: ["INTERNAL", "EXTERNAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address#address_type ComputeAddress#address_type}
  */
  readonly addressType?: string;
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address#description ComputeAddress#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address#id ComputeAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IP Version that will be used by this address. The default value is 'IPV4'. Possible values: ["IPV4", "IPV6"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address#ip_version ComputeAddress#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * The endpoint type of this address, which should be VM or NETLB. This is
  * used for deciding which type of endpoint this address can be used after
  * the external IPv6 address reservation. Possible values: ["VM", "NETLB"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address#ipv6_endpoint_type ComputeAddress#ipv6_endpoint_type}
  */
  readonly ipv6EndpointType?: string;
  /**
  * Labels to apply to this address.  A list of key->value pairs.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address#labels ComputeAddress#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the resource. The name must be 1-63 characters long, and
  * comply with RFC1035. Specifically, the name must be 1-63 characters
  * long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?'
  * which means the first character must be a lowercase letter, and all
  * following characters must be a dash, lowercase letter, or digit,
  * except the last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address#name ComputeAddress#name}
  */
  readonly name: string;
  /**
  * The URL of the network in which to reserve the address. This field
  * can only be used with INTERNAL type with the VPC_PEERING and
  * IPSEC_INTERCONNECT purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address#network ComputeAddress#network}
  */
  readonly network?: string;
  /**
  * The networking tier used for configuring this address. If this field is not
  * specified, it is assumed to be PREMIUM.
  * This argument should not be used when configuring Internal addresses, because [network tier cannot be set for internal traffic; it's always Premium](https://cloud.google.com/network-tiers/docs/overview). Possible values: ["PREMIUM", "STANDARD"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address#network_tier ComputeAddress#network_tier}
  */
  readonly networkTier?: string;
  /**
  * The prefix length if the resource represents an IP range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address#prefix_length ComputeAddress#prefix_length}
  */
  readonly prefixLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address#project ComputeAddress#project}
  */
  readonly project?: string;
  /**
  * The purpose of this resource, which can be one of the following values.
  * 
  * * GCE_ENDPOINT for addresses that are used by VM instances, alias IP
  * ranges, load balancers, and similar resources.
  * 
  * * SHARED_LOADBALANCER_VIP for an address that can be used by multiple
  * internal load balancers.
  * 
  * * VPC_PEERING for addresses that are reserved for VPC peer networks.
  * 
  * * IPSEC_INTERCONNECT for addresses created from a private IP range that
  * are reserved for a VLAN attachment in an HA VPN over Cloud Interconnect
  * configuration. These addresses are regional resources.
  * 
  * * PRIVATE_SERVICE_CONNECT for a private network address that is used to
  * configure Private Service Connect. Only global internal addresses can use
  * this purpose.
  * 
  * This should only be set when using an Internal address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address#purpose ComputeAddress#purpose}
  */
  readonly purpose?: string;
  /**
  * The Region in which the created address should reside.
  * If it is not provided, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address#region ComputeAddress#region}
  */
  readonly region?: string;
  /**
  * The URL of the subnetwork in which to reserve the address. If an IP
  * address is specified, it must be within the subnetwork's IP range.
  * This field can only be used with INTERNAL type with
  * GCE_ENDPOINT/DNS_RESOLVER purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address#subnetwork ComputeAddress#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address#timeouts ComputeAddress#timeouts}
  */
  readonly timeouts?: ComputeAddressTimeouts;
}
export interface ComputeAddressTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address#create ComputeAddress#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address#delete ComputeAddress#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address#update ComputeAddress#update}
  */
  readonly update?: string;
}

export function computeAddressTimeoutsToTerraform(struct?: ComputeAddressTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function computeAddressTimeoutsToHclTerraform(struct?: ComputeAddressTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeAddressTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeAddressTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: ComputeAddressTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address google_compute_address}
*/
export class ComputeAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeAddress to import
  * @param importFromId The id of the existing ComputeAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_address google_compute_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeAddressConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_address',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.35.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._addressType = config.addressType;
    this._description = config.description;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._ipv6EndpointType = config.ipv6EndpointType;
    this._labels = config.labels;
    this._name = config.name;
    this._network = config.network;
    this._networkTier = config.networkTier;
    this._prefixLength = config.prefixLength;
    this._project = config.project;
    this._purpose = config.purpose;
    this._region = config.region;
    this._subnetwork = config.subnetwork;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_type - computed: false, optional: true, required: false
  private _addressType?: string; 
  public get addressType() {
    return this.getStringAttribute('address_type');
  }
  public set addressType(value: string) {
    this._addressType = value;
  }
  public resetAddressType() {
    this._addressType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressTypeInput() {
    return this._addressType;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // ipv6_endpoint_type - computed: false, optional: true, required: false
  private _ipv6EndpointType?: string; 
  public get ipv6EndpointType() {
    return this.getStringAttribute('ipv6_endpoint_type');
  }
  public set ipv6EndpointType(value: string) {
    this._ipv6EndpointType = value;
  }
  public resetIpv6EndpointType() {
    this._ipv6EndpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EndpointTypeInput() {
    return this._ipv6EndpointType;
  }

  // label_fingerprint - computed: true, optional: false, required: false
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // network_tier - computed: true, optional: true, required: false
  private _networkTier?: string; 
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }
  public set networkTier(value: string) {
    this._networkTier = value;
  }
  public resetNetworkTier() {
    this._networkTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTierInput() {
    return this._networkTier;
  }

  // prefix_length - computed: true, optional: true, required: false
  private _prefixLength?: number; 
  public get prefixLength() {
    return this.getNumberAttribute('prefix_length');
  }
  public set prefixLength(value: number) {
    this._prefixLength = value;
  }
  public resetPrefixLength() {
    this._prefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixLengthInput() {
    return this._prefixLength;
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

  // purpose - computed: true, optional: true, required: false
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  public resetPurpose() {
    this._purpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // subnetwork - computed: true, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return this.getListAttribute('users');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeAddressTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeAddressTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      address_type: cdktf.stringToTerraform(this._addressType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      ipv6_endpoint_type: cdktf.stringToTerraform(this._ipv6EndpointType),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      network_tier: cdktf.stringToTerraform(this._networkTier),
      prefix_length: cdktf.numberToTerraform(this._prefixLength),
      project: cdktf.stringToTerraform(this._project),
      purpose: cdktf.stringToTerraform(this._purpose),
      region: cdktf.stringToTerraform(this._region),
      subnetwork: cdktf.stringToTerraform(this._subnetwork),
      timeouts: computeAddressTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_type: {
        value: cdktf.stringToHclTerraform(this._addressType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_endpoint_type: {
        value: cdktf.stringToHclTerraform(this._ipv6EndpointType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_tier: {
        value: cdktf.stringToHclTerraform(this._networkTier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_length: {
        value: cdktf.numberToHclTerraform(this._prefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purpose: {
        value: cdktf.stringToHclTerraform(this._purpose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnetwork: {
        value: cdktf.stringToHclTerraform(this._subnetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: computeAddressTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeAddressTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
