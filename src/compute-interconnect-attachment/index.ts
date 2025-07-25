/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeInterconnectAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the VLAN attachment is enabled or disabled.  When using
  * PARTNER type this will Pre-Activate the interconnect attachment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#admin_enabled ComputeInterconnectAttachment#admin_enabled}
  */
  readonly adminEnabled?: boolean | cdktf.IResolvable;
  /**
  * Provisioned bandwidth capacity for the interconnect attachment.
  * For attachments of type DEDICATED, the user can set the bandwidth.
  * For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the bandwidth.
  * Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED,
  * Defaults to BPS_10G Possible values: ["BPS_50M", "BPS_100M", "BPS_200M", "BPS_300M", "BPS_400M", "BPS_500M", "BPS_1G", "BPS_2G", "BPS_5G", "BPS_10G", "BPS_20G", "BPS_50G", "BPS_100G"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#bandwidth ComputeInterconnectAttachment#bandwidth}
  */
  readonly bandwidth?: string;
  /**
  * Up to 16 candidate prefixes that can be used to restrict the allocation
  * of cloudRouterIpAddress and customerRouterIpAddress for this attachment.
  * All prefixes must be within link-local address space (169.254.0.0/16)
  * and must be /29 or shorter (/28, /27, etc). Google will attempt to select
  * an unused /29 from the supplied candidate prefix(es). The request will
  * fail if all possible /29s are in use on Google's edge. If not supplied,
  * Google will randomly select an unused /29 from all of link-local space.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#candidate_subnets ComputeInterconnectAttachment#candidate_subnets}
  */
  readonly candidateSubnets?: string[];
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#description ComputeInterconnectAttachment#description}
  */
  readonly description?: string;
  /**
  * Desired availability domain for the attachment. Only available for type
  * PARTNER, at creation time. For improved reliability, customers should
  * configure a pair of attachments with one per availability domain. The
  * selected availability domain will be provided to the Partner via the
  * pairing key so that the provisioned circuit will lie in the specified
  * domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#edge_availability_domain ComputeInterconnectAttachment#edge_availability_domain}
  */
  readonly edgeAvailabilityDomain?: string;
  /**
  * Indicates the user-supplied encryption option of this interconnect
  * attachment. Can only be specified at attachment creation for PARTNER or
  * DEDICATED attachments.
  * * NONE - This is the default value, which means that the VLAN attachment
  * carries unencrypted traffic. VMs are able to send traffic to, or receive
  * traffic from, such a VLAN attachment.
  * * IPSEC - The VLAN attachment carries only encrypted traffic that is
  * encrypted by an IPsec device, such as an HA VPN gateway or third-party
  * IPsec VPN. VMs cannot directly send traffic to, or receive traffic from,
  * such a VLAN attachment. To use HA VPN over Cloud Interconnect, the VLAN
  * attachment must be created with this option. Default value: "NONE" Possible values: ["NONE", "IPSEC"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#encryption ComputeInterconnectAttachment#encryption}
  */
  readonly encryption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#id ComputeInterconnectAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * URL of the underlying Interconnect object that this attachment's
  * traffic will traverse through. Required if type is DEDICATED, must not
  * be set if type is PARTNER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#interconnect ComputeInterconnectAttachment#interconnect}
  */
  readonly interconnect?: string;
  /**
  * URL of addresses that have been reserved for the interconnect attachment,
  * Used only for interconnect attachment that has the encryption option as
  * IPSEC.
  * The addresses must be RFC 1918 IP address ranges. When creating HA VPN
  * gateway over the interconnect attachment, if the attachment is configured
  * to use an RFC 1918 IP address, then the VPN gateway's IP address will be
  * allocated from the IP address range specified here.
  * For example, if the HA VPN gateway's interface 0 is paired to this
  * interconnect attachment, then an RFC 1918 IP address for the VPN gateway
  * interface 0 will be allocated from the IP address specified for this
  * interconnect attachment.
  * If this field is not specified for interconnect attachment that has
  * encryption option as IPSEC, later on when creating HA VPN gateway on this
  * interconnect attachment, the HA VPN gateway's IP address will be
  * allocated from regional external IP address pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#ipsec_internal_addresses ComputeInterconnectAttachment#ipsec_internal_addresses}
  */
  readonly ipsecInternalAddresses?: string[];
  /**
  * Labels for this resource. These can only be added or modified by the setLabels
  * method. Each label key/value pair must comply with RFC1035. Label values may be empty.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#labels ComputeInterconnectAttachment#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Maximum Transmission Unit (MTU), in bytes, of packets passing through this interconnect attachment.
  * Valid values are 1440, 1460, 1500, and 8896. If not specified, the value will default to 1440.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#mtu ComputeInterconnectAttachment#mtu}
  */
  readonly mtu?: string;
  /**
  * Name of the resource. Provided by the client when the resource is created. The
  * name must be 1-63 characters long, and comply with RFC1035. Specifically, the
  * name must be 1-63 characters long and match the regular expression
  * '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must be a
  * lowercase letter, and all following characters must be a dash, lowercase
  * letter, or digit, except the last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#name ComputeInterconnectAttachment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#project ComputeInterconnectAttachment#project}
  */
  readonly project?: string;
  /**
  * Region where the regional interconnect attachment resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#region ComputeInterconnectAttachment#region}
  */
  readonly region?: string;
  /**
  * URL of the cloud router to be used for dynamic routing. This router must be in
  * the same region as this InterconnectAttachment. The InterconnectAttachment will
  * automatically connect the Interconnect to the network & region within which the
  * Cloud Router is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#router ComputeInterconnectAttachment#router}
  */
  readonly router: string;
  /**
  * The stack type for this interconnect attachment to identify whether the IPv6
  * feature is enabled or not. If not specified, IPV4_ONLY will be used.
  * This field can be both set at interconnect attachments creation and update
  * interconnect attachment operations. Possible values: ["IPV4_IPV6", "IPV4_ONLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#stack_type ComputeInterconnectAttachment#stack_type}
  */
  readonly stackType?: string;
  /**
  * Length of the IPv4 subnet mask. Allowed values: 29 (default), 30. The default value is 29,
  * except for Cross-Cloud Interconnect connections that use an InterconnectRemoteLocation with a
  * constraints.subnetLengthRange.min equal to 30. For example, connections that use an Azure
  * remote location fall into this category. In these cases, the default value is 30, and
  * requesting 29 returns an error. Where both 29 and 30 are allowed, 29 is preferred, because it
  * gives Google Cloud Support more debugging visibility.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#subnet_length ComputeInterconnectAttachment#subnet_length}
  */
  readonly subnetLength?: number;
  /**
  * The type of InterconnectAttachment you wish to create. Defaults to
  * DEDICATED. Possible values: ["DEDICATED", "PARTNER", "PARTNER_PROVIDER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#type ComputeInterconnectAttachment#type}
  */
  readonly type?: string;
  /**
  * The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When
  * using PARTNER type this will be managed upstream.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#vlan_tag8021q ComputeInterconnectAttachment#vlan_tag8021q}
  */
  readonly vlanTag8021Q?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#timeouts ComputeInterconnectAttachment#timeouts}
  */
  readonly timeouts?: ComputeInterconnectAttachmentTimeouts;
}
export interface ComputeInterconnectAttachmentPrivateInterconnectInfo {
}

export function computeInterconnectAttachmentPrivateInterconnectInfoToTerraform(struct?: ComputeInterconnectAttachmentPrivateInterconnectInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function computeInterconnectAttachmentPrivateInterconnectInfoToHclTerraform(struct?: ComputeInterconnectAttachmentPrivateInterconnectInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeInterconnectAttachmentPrivateInterconnectInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInterconnectAttachmentPrivateInterconnectInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // tag8021q - computed: true, optional: false, required: false
  public get tag8021Q() {
    return this.getNumberAttribute('tag8021q');
  }
}

export class ComputeInterconnectAttachmentPrivateInterconnectInfoList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference {
    return new ComputeInterconnectAttachmentPrivateInterconnectInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInterconnectAttachmentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#create ComputeInterconnectAttachment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#delete ComputeInterconnectAttachment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#update ComputeInterconnectAttachment#update}
  */
  readonly update?: string;
}

export function computeInterconnectAttachmentTimeoutsToTerraform(struct?: ComputeInterconnectAttachmentTimeouts | cdktf.IResolvable): any {
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


export function computeInterconnectAttachmentTimeoutsToHclTerraform(struct?: ComputeInterconnectAttachmentTimeouts | cdktf.IResolvable): any {
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

export class ComputeInterconnectAttachmentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeInterconnectAttachmentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeInterconnectAttachmentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment google_compute_interconnect_attachment}
*/
export class ComputeInterconnectAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_interconnect_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeInterconnectAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeInterconnectAttachment to import
  * @param importFromId The id of the existing ComputeInterconnectAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeInterconnectAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_interconnect_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/compute_interconnect_attachment google_compute_interconnect_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeInterconnectAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeInterconnectAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_interconnect_attachment',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.45.0',
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
    this._adminEnabled = config.adminEnabled;
    this._bandwidth = config.bandwidth;
    this._candidateSubnets = config.candidateSubnets;
    this._description = config.description;
    this._edgeAvailabilityDomain = config.edgeAvailabilityDomain;
    this._encryption = config.encryption;
    this._id = config.id;
    this._interconnect = config.interconnect;
    this._ipsecInternalAddresses = config.ipsecInternalAddresses;
    this._labels = config.labels;
    this._mtu = config.mtu;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._router = config.router;
    this._stackType = config.stackType;
    this._subnetLength = config.subnetLength;
    this._type = config.type;
    this._vlanTag8021Q = config.vlanTag8021Q;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_enabled - computed: false, optional: true, required: false
  private _adminEnabled?: boolean | cdktf.IResolvable; 
  public get adminEnabled() {
    return this.getBooleanAttribute('admin_enabled');
  }
  public set adminEnabled(value: boolean | cdktf.IResolvable) {
    this._adminEnabled = value;
  }
  public resetAdminEnabled() {
    this._adminEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEnabledInput() {
    return this._adminEnabled;
  }

  // attachment_group - computed: true, optional: false, required: false
  public get attachmentGroup() {
    return this.getStringAttribute('attachment_group');
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  public resetBandwidth() {
    this._bandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // candidate_subnets - computed: false, optional: true, required: false
  private _candidateSubnets?: string[]; 
  public get candidateSubnets() {
    return this.getListAttribute('candidate_subnets');
  }
  public set candidateSubnets(value: string[]) {
    this._candidateSubnets = value;
  }
  public resetCandidateSubnets() {
    this._candidateSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get candidateSubnetsInput() {
    return this._candidateSubnets;
  }

  // cloud_router_ip_address - computed: true, optional: false, required: false
  public get cloudRouterIpAddress() {
    return this.getStringAttribute('cloud_router_ip_address');
  }

  // cloud_router_ipv6_address - computed: true, optional: false, required: false
  public get cloudRouterIpv6Address() {
    return this.getStringAttribute('cloud_router_ipv6_address');
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // customer_router_ip_address - computed: true, optional: false, required: false
  public get customerRouterIpAddress() {
    return this.getStringAttribute('customer_router_ip_address');
  }

  // customer_router_ipv6_address - computed: true, optional: false, required: false
  public get customerRouterIpv6Address() {
    return this.getStringAttribute('customer_router_ipv6_address');
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

  // edge_availability_domain - computed: true, optional: true, required: false
  private _edgeAvailabilityDomain?: string; 
  public get edgeAvailabilityDomain() {
    return this.getStringAttribute('edge_availability_domain');
  }
  public set edgeAvailabilityDomain(value: string) {
    this._edgeAvailabilityDomain = value;
  }
  public resetEdgeAvailabilityDomain() {
    this._edgeAvailabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeAvailabilityDomainInput() {
    return this._edgeAvailabilityDomain;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // encryption - computed: false, optional: true, required: false
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // google_reference_id - computed: true, optional: false, required: false
  public get googleReferenceId() {
    return this.getStringAttribute('google_reference_id');
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

  // interconnect - computed: false, optional: true, required: false
  private _interconnect?: string; 
  public get interconnect() {
    return this.getStringAttribute('interconnect');
  }
  public set interconnect(value: string) {
    this._interconnect = value;
  }
  public resetInterconnect() {
    this._interconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectInput() {
    return this._interconnect;
  }

  // ipsec_internal_addresses - computed: false, optional: true, required: false
  private _ipsecInternalAddresses?: string[]; 
  public get ipsecInternalAddresses() {
    return this.getListAttribute('ipsec_internal_addresses');
  }
  public set ipsecInternalAddresses(value: string[]) {
    this._ipsecInternalAddresses = value;
  }
  public resetIpsecInternalAddresses() {
    this._ipsecInternalAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecInternalAddressesInput() {
    return this._ipsecInternalAddresses;
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

  // mtu - computed: true, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // pairing_key - computed: true, optional: false, required: false
  public get pairingKey() {
    return this.getStringAttribute('pairing_key');
  }

  // partner_asn - computed: true, optional: false, required: false
  public get partnerAsn() {
    return this.getStringAttribute('partner_asn');
  }

  // private_interconnect_info - computed: true, optional: false, required: false
  private _privateInterconnectInfo = new ComputeInterconnectAttachmentPrivateInterconnectInfoList(this, "private_interconnect_info", false);
  public get privateInterconnectInfo() {
    return this._privateInterconnectInfo;
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

  // router - computed: false, optional: false, required: true
  private _router?: string; 
  public get router() {
    return this.getStringAttribute('router');
  }
  public set router(value: string) {
    this._router = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // stack_type - computed: true, optional: true, required: false
  private _stackType?: string; 
  public get stackType() {
    return this.getStringAttribute('stack_type');
  }
  public set stackType(value: string) {
    this._stackType = value;
  }
  public resetStackType() {
    this._stackType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackTypeInput() {
    return this._stackType;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_length - computed: false, optional: true, required: false
  private _subnetLength?: number; 
  public get subnetLength() {
    return this.getNumberAttribute('subnet_length');
  }
  public set subnetLength(value: number) {
    this._subnetLength = value;
  }
  public resetSubnetLength() {
    this._subnetLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetLengthInput() {
    return this._subnetLength;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // vlan_tag8021q - computed: true, optional: true, required: false
  private _vlanTag8021Q?: number; 
  public get vlanTag8021Q() {
    return this.getNumberAttribute('vlan_tag8021q');
  }
  public set vlanTag8021Q(value: number) {
    this._vlanTag8021Q = value;
  }
  public resetVlanTag8021Q() {
    this._vlanTag8021Q = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanTag8021QInput() {
    return this._vlanTag8021Q;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeInterconnectAttachmentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeInterconnectAttachmentTimeouts) {
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
      admin_enabled: cdktf.booleanToTerraform(this._adminEnabled),
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      candidate_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._candidateSubnets),
      description: cdktf.stringToTerraform(this._description),
      edge_availability_domain: cdktf.stringToTerraform(this._edgeAvailabilityDomain),
      encryption: cdktf.stringToTerraform(this._encryption),
      id: cdktf.stringToTerraform(this._id),
      interconnect: cdktf.stringToTerraform(this._interconnect),
      ipsec_internal_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipsecInternalAddresses),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      mtu: cdktf.stringToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      router: cdktf.stringToTerraform(this._router),
      stack_type: cdktf.stringToTerraform(this._stackType),
      subnet_length: cdktf.numberToTerraform(this._subnetLength),
      type: cdktf.stringToTerraform(this._type),
      vlan_tag8021q: cdktf.numberToTerraform(this._vlanTag8021Q),
      timeouts: computeInterconnectAttachmentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_enabled: {
        value: cdktf.booleanToHclTerraform(this._adminEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bandwidth: {
        value: cdktf.stringToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      candidate_subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._candidateSubnets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_availability_domain: {
        value: cdktf.stringToHclTerraform(this._edgeAvailabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption: {
        value: cdktf.stringToHclTerraform(this._encryption),
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
      interconnect: {
        value: cdktf.stringToHclTerraform(this._interconnect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_internal_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipsecInternalAddresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      mtu: {
        value: cdktf.stringToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
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
      router: {
        value: cdktf.stringToHclTerraform(this._router),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_type: {
        value: cdktf.stringToHclTerraform(this._stackType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_length: {
        value: cdktf.numberToHclTerraform(this._subnetLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_tag8021q: {
        value: cdktf.numberToHclTerraform(this._vlanTag8021Q),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: computeInterconnectAttachmentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeInterconnectAttachmentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
