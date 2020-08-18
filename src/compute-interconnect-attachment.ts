// https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface ComputeInterconnectAttachmentConfig extends TerraformMetaArguments {
  /** Whether the VLAN attachment is enabled or disabled.  When using
PARTNER type this will Pre-Activate the interconnect attachment */
  readonly adminEnabled?: boolean;
  /** Provisioned bandwidth capacity for the interconnect attachment.
For attachments of type DEDICATED, the user can set the bandwidth.
For attachments of type PARTNER, the Google Partner that is operating the interconnect must set the bandwidth.
Output only for PARTNER type, mutable for PARTNER_PROVIDER and DEDICATED,
Defaults to BPS_10G Possible values: ["BPS_50M", "BPS_100M", "BPS_200M", "BPS_300M", "BPS_400M", "BPS_500M", "BPS_1G", "BPS_2G", "BPS_5G", "BPS_10G", "BPS_20G", "BPS_50G"] */
  readonly bandwidth?: string;
  /** Up to 16 candidate prefixes that can be used to restrict the allocation
of cloudRouterIpAddress and customerRouterIpAddress for this attachment.
All prefixes must be within link-local address space (169.254.0.0/16)
and must be /29 or shorter (/28, /27, etc). Google will attempt to select
an unused /29 from the supplied candidate prefix(es). The request will
fail if all possible /29s are in use on Google's edge. If not supplied,
Google will randomly select an unused /29 from all of link-local space. */
  readonly candidateSubnets?: string[];
  /** An optional description of this resource. */
  readonly description?: string;
  /** Desired availability domain for the attachment. Only available for type
PARTNER, at creation time. For improved reliability, customers should
configure a pair of attachments with one per availability domain. The
selected availability domain will be provided to the Partner via the
pairing key so that the provisioned circuit will lie in the specified
domain. If not specified, the value will default to AVAILABILITY_DOMAIN_ANY. */
  readonly edgeAvailabilityDomain?: string;
  /** URL of the underlying Interconnect object that this attachment's
traffic will traverse through. Required if type is DEDICATED, must not
be set if type is PARTNER. */
  readonly interconnect?: string;
  /** Name of the resource. Provided by the client when the resource is created. The
name must be 1-63 characters long, and comply with RFC1035. Specifically, the
name must be 1-63 characters long and match the regular expression
'[a-z]([-a-z0-9]*[a-z0-9])?' which means the first character must be a
lowercase letter, and all following characters must be a dash, lowercase
letter, or digit, except the last character, which cannot be a dash. */
  readonly name: string;
  readonly project?: string;
  /** Region where the regional interconnect attachment resides. */
  readonly region?: string;
  /** URL of the cloud router to be used for dynamic routing. This router must be in
the same region as this InterconnectAttachment. The InterconnectAttachment will
automatically connect the Interconnect to the network & region within which the
Cloud Router is configured. */
  readonly router: string;
  /** The type of InterconnectAttachment you wish to create. Defaults to
DEDICATED. Possible values: ["DEDICATED", "PARTNER", "PARTNER_PROVIDER"] */
  readonly type?: string;
  /** The IEEE 802.1Q VLAN tag for this attachment, in the range 2-4094. When
using PARTNER type this will be managed upstream. */
  readonly vlanTag8021Q?: number;
  /** timeouts block */
  readonly timeouts?: ComputeInterconnectAttachmentTimeouts;
}
export class ComputeInterconnectAttachmentPrivateInterconnectInfo extends ComplexComputedList {

  // tag8021q - computed: true, optional: false, required: true
  public get tag8021Q() {
    return this.getNumberAttribute('tag8021q');
  }
}
export interface ComputeInterconnectAttachmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeInterconnectAttachment extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeInterconnectAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_interconnect_attachment',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._adminEnabled = config.adminEnabled;
    this._bandwidth = config.bandwidth;
    this._candidateSubnets = config.candidateSubnets;
    this._description = config.description;
    this._edgeAvailabilityDomain = config.edgeAvailabilityDomain;
    this._interconnect = config.interconnect;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._router = config.router;
    this._type = config.type;
    this._vlanTag8021Q = config.vlanTag8021Q;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_enabled - computed: false, optional: true, required: false
  private _adminEnabled?: boolean;
  public get adminEnabled() {
    return this._adminEnabled;
  }
  public set adminEnabled(value: boolean | undefined) {
    this._adminEnabled = value;
  }

  // bandwidth - computed: true, optional: true, required: false
  private _bandwidth?: string;
  public get bandwidth() {
    return this._bandwidth ?? this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string | undefined) {
    this._bandwidth = value;
  }

  // candidate_subnets - computed: false, optional: true, required: false
  private _candidateSubnets?: string[];
  public get candidateSubnets() {
    return this._candidateSubnets;
  }
  public set candidateSubnets(value: string[] | undefined) {
    this._candidateSubnets = value;
  }

  // cloud_router_ip_address - computed: true, optional: false, required: true
  public get cloudRouterIpAddress() {
    return this.getStringAttribute('cloud_router_ip_address');
  }

  // creation_timestamp - computed: true, optional: false, required: true
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // customer_router_ip_address - computed: true, optional: false, required: true
  public get customerRouterIpAddress() {
    return this.getStringAttribute('customer_router_ip_address');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // edge_availability_domain - computed: true, optional: true, required: false
  private _edgeAvailabilityDomain?: string;
  public get edgeAvailabilityDomain() {
    return this._edgeAvailabilityDomain ?? this.getStringAttribute('edge_availability_domain');
  }
  public set edgeAvailabilityDomain(value: string | undefined) {
    this._edgeAvailabilityDomain = value;
  }

  // google_reference_id - computed: true, optional: false, required: true
  public get googleReferenceId() {
    return this.getStringAttribute('google_reference_id');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // interconnect - computed: false, optional: true, required: false
  private _interconnect?: string;
  public get interconnect() {
    return this._interconnect;
  }
  public set interconnect(value: string | undefined) {
    this._interconnect = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // pairing_key - computed: true, optional: false, required: true
  public get pairingKey() {
    return this.getStringAttribute('pairing_key');
  }

  // partner_asn - computed: true, optional: false, required: true
  public get partnerAsn() {
    return this.getStringAttribute('partner_asn');
  }

  // private_interconnect_info - computed: true, optional: false, required: true
  public privateInterconnectInfo(index: string) {
    return new ComputeInterconnectAttachmentPrivateInterconnectInfo(this, 'private_interconnect_info', index);
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // router - computed: false, optional: false, required: true
  private _router: string;
  public get router() {
    return this._router;
  }
  public set router(value: string) {
    this._router = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: true, required: false
  private _type?: string;
  public get type() {
    return this._type ?? this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }

  // vlan_tag8021q - computed: true, optional: true, required: false
  private _vlanTag8021Q?: number;
  public get vlanTag8021Q() {
    return this._vlanTag8021Q ?? this.getNumberAttribute('vlan_tag8021q');
  }
  public set vlanTag8021Q(value: number | undefined) {
    this._vlanTag8021Q = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeInterconnectAttachmentTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeInterconnectAttachmentTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_enabled: this._adminEnabled,
      bandwidth: this._bandwidth,
      candidate_subnets: this._candidateSubnets,
      description: this._description,
      edge_availability_domain: this._edgeAvailabilityDomain,
      interconnect: this._interconnect,
      name: this._name,
      project: this._project,
      region: this._region,
      router: this._router,
      type: this._type,
      vlan_tag8021q: this._vlanTag8021Q,
      timeouts: this._timeouts,
    };
  }
}
