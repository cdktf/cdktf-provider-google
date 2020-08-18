// https://www.terraform.io/docs/providers/google/r/compute_router_nat.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeRouterNatConfig extends TerraformMetaArguments {
  /** A list of URLs of the IP resources to be drained. These IPs must be
valid static external IPs that have been assigned to the NAT. */
  readonly drainNatIps?: string[];
  /** Timeout (in seconds) for ICMP connections. Defaults to 30s if not set. */
  readonly icmpIdleTimeoutSec?: number;
  /** Minimum number of ports allocated to a VM from this NAT. */
  readonly minPortsPerVm?: number;
  /** Name of the NAT service. The name must be 1-63 characters long and
comply with RFC1035. */
  readonly name: string;
  /** How external IPs should be allocated for this NAT. Valid values are
'AUTO_ONLY' for only allowing NAT IPs allocated by Google Cloud
Platform, or 'MANUAL_ONLY' for only user-allocated NAT IP addresses. Possible values: ["MANUAL_ONLY", "AUTO_ONLY"] */
  readonly natIpAllocateOption: string;
  /** Self-links of NAT IPs. Only valid if natIpAllocateOption
is set to MANUAL_ONLY. */
  readonly natIps?: string[];
  readonly project?: string;
  /** Region where the router and NAT reside. */
  readonly region?: string;
  /** The name of the Cloud Router in which this NAT will be configured. */
  readonly router: string;
  /** How NAT should be configured per Subnetwork.
If 'ALL_SUBNETWORKS_ALL_IP_RANGES', all of the
IP ranges in every Subnetwork are allowed to Nat.
If 'ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES', all of the primary IP
ranges in every Subnetwork are allowed to Nat.
'LIST_OF_SUBNETWORKS': A list of Subnetworks are allowed to Nat
(specified in the field subnetwork below). Note that if this field
contains ALL_SUBNETWORKS_ALL_IP_RANGES or
ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any
other RouterNat section in any Router for this network in this region. Possible values: ["ALL_SUBNETWORKS_ALL_IP_RANGES", "ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES", "LIST_OF_SUBNETWORKS"] */
  readonly sourceSubnetworkIpRangesToNat: string;
  /** Timeout (in seconds) for TCP established connections.
Defaults to 1200s if not set. */
  readonly tcpEstablishedIdleTimeoutSec?: number;
  /** Timeout (in seconds) for TCP transitory connections.
Defaults to 30s if not set. */
  readonly tcpTransitoryIdleTimeoutSec?: number;
  /** Timeout (in seconds) for UDP connections. Defaults to 30s if not set. */
  readonly udpIdleTimeoutSec?: number;
  /** log_config block */
  readonly logConfig?: ComputeRouterNatLogConfig[];
  /** subnetwork block */
  readonly subnetwork?: ComputeRouterNatSubnetwork[];
  /** timeouts block */
  readonly timeouts?: ComputeRouterNatTimeouts;
}
export interface ComputeRouterNatLogConfig {
  /** Indicates whether or not to export logs. */
  readonly enable: boolean;
  /** Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"] */
  readonly filter: string;
}
export interface ComputeRouterNatSubnetwork {
  /** Self-link of subnetwork to NAT */
  readonly name: string;
  /** List of the secondary ranges of the subnetwork that are allowed
to use NAT. This can be populated only if
'LIST_OF_SECONDARY_IP_RANGES' is one of the values in
sourceIpRangesToNat */
  readonly secondaryIpRangeNames?: string[];
  /** List of options for which source IPs in the subnetwork
should have NAT enabled. Supported values include:
'ALL_IP_RANGES', 'LIST_OF_SECONDARY_IP_RANGES',
'PRIMARY_IP_RANGE'. */
  readonly sourceIpRangesToNat: string[];
}
export interface ComputeRouterNatTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeRouterNat extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeRouterNatConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_router_nat',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._drainNatIps = config.drainNatIps;
    this._icmpIdleTimeoutSec = config.icmpIdleTimeoutSec;
    this._minPortsPerVm = config.minPortsPerVm;
    this._name = config.name;
    this._natIpAllocateOption = config.natIpAllocateOption;
    this._natIps = config.natIps;
    this._project = config.project;
    this._region = config.region;
    this._router = config.router;
    this._sourceSubnetworkIpRangesToNat = config.sourceSubnetworkIpRangesToNat;
    this._tcpEstablishedIdleTimeoutSec = config.tcpEstablishedIdleTimeoutSec;
    this._tcpTransitoryIdleTimeoutSec = config.tcpTransitoryIdleTimeoutSec;
    this._udpIdleTimeoutSec = config.udpIdleTimeoutSec;
    this._logConfig = config.logConfig;
    this._subnetwork = config.subnetwork;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // drain_nat_ips - computed: false, optional: true, required: false
  private _drainNatIps?: string[];
  public get drainNatIps() {
    return this._drainNatIps;
  }
  public set drainNatIps(value: string[] | undefined) {
    this._drainNatIps = value;
  }

  // icmp_idle_timeout_sec - computed: false, optional: true, required: false
  private _icmpIdleTimeoutSec?: number;
  public get icmpIdleTimeoutSec() {
    return this._icmpIdleTimeoutSec;
  }
  public set icmpIdleTimeoutSec(value: number | undefined) {
    this._icmpIdleTimeoutSec = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // min_ports_per_vm - computed: false, optional: true, required: false
  private _minPortsPerVm?: number;
  public get minPortsPerVm() {
    return this._minPortsPerVm;
  }
  public set minPortsPerVm(value: number | undefined) {
    this._minPortsPerVm = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // nat_ip_allocate_option - computed: false, optional: false, required: true
  private _natIpAllocateOption: string;
  public get natIpAllocateOption() {
    return this._natIpAllocateOption;
  }
  public set natIpAllocateOption(value: string) {
    this._natIpAllocateOption = value;
  }

  // nat_ips - computed: false, optional: true, required: false
  private _natIps?: string[];
  public get natIps() {
    return this._natIps;
  }
  public set natIps(value: string[] | undefined) {
    this._natIps = value;
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

  // source_subnetwork_ip_ranges_to_nat - computed: false, optional: false, required: true
  private _sourceSubnetworkIpRangesToNat: string;
  public get sourceSubnetworkIpRangesToNat() {
    return this._sourceSubnetworkIpRangesToNat;
  }
  public set sourceSubnetworkIpRangesToNat(value: string) {
    this._sourceSubnetworkIpRangesToNat = value;
  }

  // tcp_established_idle_timeout_sec - computed: false, optional: true, required: false
  private _tcpEstablishedIdleTimeoutSec?: number;
  public get tcpEstablishedIdleTimeoutSec() {
    return this._tcpEstablishedIdleTimeoutSec;
  }
  public set tcpEstablishedIdleTimeoutSec(value: number | undefined) {
    this._tcpEstablishedIdleTimeoutSec = value;
  }

  // tcp_transitory_idle_timeout_sec - computed: false, optional: true, required: false
  private _tcpTransitoryIdleTimeoutSec?: number;
  public get tcpTransitoryIdleTimeoutSec() {
    return this._tcpTransitoryIdleTimeoutSec;
  }
  public set tcpTransitoryIdleTimeoutSec(value: number | undefined) {
    this._tcpTransitoryIdleTimeoutSec = value;
  }

  // udp_idle_timeout_sec - computed: false, optional: true, required: false
  private _udpIdleTimeoutSec?: number;
  public get udpIdleTimeoutSec() {
    return this._udpIdleTimeoutSec;
  }
  public set udpIdleTimeoutSec(value: number | undefined) {
    this._udpIdleTimeoutSec = value;
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig?: ComputeRouterNatLogConfig[];
  public get logConfig() {
    return this._logConfig;
  }
  public set logConfig(value: ComputeRouterNatLogConfig[] | undefined) {
    this._logConfig = value;
  }

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: ComputeRouterNatSubnetwork[];
  public get subnetwork() {
    return this._subnetwork;
  }
  public set subnetwork(value: ComputeRouterNatSubnetwork[] | undefined) {
    this._subnetwork = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeRouterNatTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeRouterNatTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      drain_nat_ips: this._drainNatIps,
      icmp_idle_timeout_sec: this._icmpIdleTimeoutSec,
      min_ports_per_vm: this._minPortsPerVm,
      name: this._name,
      nat_ip_allocate_option: this._natIpAllocateOption,
      nat_ips: this._natIps,
      project: this._project,
      region: this._region,
      router: this._router,
      source_subnetwork_ip_ranges_to_nat: this._sourceSubnetworkIpRangesToNat,
      tcp_established_idle_timeout_sec: this._tcpEstablishedIdleTimeoutSec,
      tcp_transitory_idle_timeout_sec: this._tcpTransitoryIdleTimeoutSec,
      udp_idle_timeout_sec: this._udpIdleTimeoutSec,
      log_config: this._logConfig,
      subnetwork: this._subnetwork,
      timeouts: this._timeouts,
    };
  }
}
