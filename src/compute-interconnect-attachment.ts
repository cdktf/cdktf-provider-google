// https://www.terraform.io/docs/providers/google/r/compute_interconnect_attachment.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeInterconnectAttachmentConfig extends cdktf.TerraformMetaArguments {
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
export class ComputeInterconnectAttachmentPrivateInterconnectInfo extends cdktf.ComplexComputedList {

  // tag8021q - computed: true, optional: false, required: false
  public get tag8021Q() {
    return this.getNumberAttribute('tag8021q');
  }
}
export interface ComputeInterconnectAttachmentTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function computeInterconnectAttachmentTimeoutsToTerraform(struct?: ComputeInterconnectAttachmentTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ComputeInterconnectAttachment extends cdktf.TerraformResource {

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
    return this.getBooleanAttribute('admin_enabled');
  }
  public set adminEnabled(value: boolean ) {
    this._adminEnabled = value;
  }
  public resetAdminEnabled() {
    this._adminEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEnabledInput() {
    return this._adminEnabled
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
    return this._bandwidth
  }

  // candidate_subnets - computed: false, optional: true, required: false
  private _candidateSubnets?: string[];
  public get candidateSubnets() {
    return this.getListAttribute('candidate_subnets');
  }
  public set candidateSubnets(value: string[] ) {
    this._candidateSubnets = value;
  }
  public resetCandidateSubnets() {
    this._candidateSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get candidateSubnetsInput() {
    return this._candidateSubnets
  }

  // cloud_router_ip_address - computed: true, optional: false, required: false
  public get cloudRouterIpAddress() {
    return this.getStringAttribute('cloud_router_ip_address');
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // customer_router_ip_address - computed: true, optional: false, required: false
  public get customerRouterIpAddress() {
    return this.getStringAttribute('customer_router_ip_address');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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
    return this._edgeAvailabilityDomain
  }

  // google_reference_id - computed: true, optional: false, required: false
  public get googleReferenceId() {
    return this.getStringAttribute('google_reference_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interconnect - computed: false, optional: true, required: false
  private _interconnect?: string;
  public get interconnect() {
    return this.getStringAttribute('interconnect');
  }
  public set interconnect(value: string ) {
    this._interconnect = value;
  }
  public resetInterconnect() {
    this._interconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interconnectInput() {
    return this._interconnect
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

  // pairing_key - computed: true, optional: false, required: false
  public get pairingKey() {
    return this.getStringAttribute('pairing_key');
  }

  // partner_asn - computed: true, optional: false, required: false
  public get partnerAsn() {
    return this.getStringAttribute('partner_asn');
  }

  // private_interconnect_info - computed: true, optional: false, required: false
  public privateInterconnectInfo(index: string) {
    return new ComputeInterconnectAttachmentPrivateInterconnectInfo(this, 'private_interconnect_info', index);
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
    return this._region
  }

  // router - computed: false, optional: false, required: true
  private _router: string;
  public get router() {
    return this.getStringAttribute('router');
  }
  public set router(value: string) {
    this._router = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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
    return this._type
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
    return this._vlanTag8021Q
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeInterconnectAttachmentTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeInterconnectAttachmentTimeouts ) {
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
      admin_enabled: cdktf.booleanToTerraform(this._adminEnabled),
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      candidate_subnets: cdktf.listMapper(cdktf.stringToTerraform)(this._candidateSubnets),
      description: cdktf.stringToTerraform(this._description),
      edge_availability_domain: cdktf.stringToTerraform(this._edgeAvailabilityDomain),
      interconnect: cdktf.stringToTerraform(this._interconnect),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      router: cdktf.stringToTerraform(this._router),
      type: cdktf.stringToTerraform(this._type),
      vlan_tag8021q: cdktf.numberToTerraform(this._vlanTag8021Q),
      timeouts: computeInterconnectAttachmentTimeoutsToTerraform(this._timeouts),
    };
  }
}
