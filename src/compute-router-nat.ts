// https://www.terraform.io/docs/providers/google/r/compute_router_nat.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRouterNatConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of URLs of the IP resources to be drained. These IPs must be
valid static external IPs that have been assigned to the NAT.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#drain_nat_ips ComputeRouterNat#drain_nat_ips}
  */
  readonly drainNatIps?: string[];
  /**
  * Specifies if endpoint independent mapping is enabled. This is enabled by default. For more information
see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#enable_endpoint_independent_mapping ComputeRouterNat#enable_endpoint_independent_mapping}
  */
  readonly enableEndpointIndependentMapping?: boolean | cdktf.IResolvable;
  /**
  * Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#icmp_idle_timeout_sec ComputeRouterNat#icmp_idle_timeout_sec}
  */
  readonly icmpIdleTimeoutSec?: number;
  /**
  * Minimum number of ports allocated to a VM from this NAT.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#min_ports_per_vm ComputeRouterNat#min_ports_per_vm}
  */
  readonly minPortsPerVm?: number;
  /**
  * Name of the NAT service. The name must be 1-63 characters long and
comply with RFC1035.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#name ComputeRouterNat#name}
  */
  readonly name: string;
  /**
  * How external IPs should be allocated for this NAT. Valid values are
'AUTO_ONLY' for only allowing NAT IPs allocated by Google Cloud
Platform, or 'MANUAL_ONLY' for only user-allocated NAT IP addresses. Possible values: ["MANUAL_ONLY", "AUTO_ONLY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#nat_ip_allocate_option ComputeRouterNat#nat_ip_allocate_option}
  */
  readonly natIpAllocateOption: string;
  /**
  * Self-links of NAT IPs. Only valid if natIpAllocateOption
is set to MANUAL_ONLY.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#nat_ips ComputeRouterNat#nat_ips}
  */
  readonly natIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#project ComputeRouterNat#project}
  */
  readonly project?: string;
  /**
  * Region where the router and NAT reside.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#region ComputeRouterNat#region}
  */
  readonly region?: string;
  /**
  * The name of the Cloud Router in which this NAT will be configured.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#router ComputeRouterNat#router}
  */
  readonly router: string;
  /**
  * How NAT should be configured per Subnetwork.
If 'ALL_SUBNETWORKS_ALL_IP_RANGES', all of the
IP ranges in every Subnetwork are allowed to Nat.
If 'ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES', all of the primary IP
ranges in every Subnetwork are allowed to Nat.
'LIST_OF_SUBNETWORKS': A list of Subnetworks are allowed to Nat
(specified in the field subnetwork below). Note that if this field
contains ALL_SUBNETWORKS_ALL_IP_RANGES or
ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES, then there should not be any
other RouterNat section in any Router for this network in this region. Possible values: ["ALL_SUBNETWORKS_ALL_IP_RANGES", "ALL_SUBNETWORKS_ALL_PRIMARY_IP_RANGES", "LIST_OF_SUBNETWORKS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#source_subnetwork_ip_ranges_to_nat ComputeRouterNat#source_subnetwork_ip_ranges_to_nat}
  */
  readonly sourceSubnetworkIpRangesToNat: string;
  /**
  * Timeout (in seconds) for TCP established connections.
Defaults to 1200s if not set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#tcp_established_idle_timeout_sec ComputeRouterNat#tcp_established_idle_timeout_sec}
  */
  readonly tcpEstablishedIdleTimeoutSec?: number;
  /**
  * Timeout (in seconds) for TCP transitory connections.
Defaults to 30s if not set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#tcp_transitory_idle_timeout_sec ComputeRouterNat#tcp_transitory_idle_timeout_sec}
  */
  readonly tcpTransitoryIdleTimeoutSec?: number;
  /**
  * Timeout (in seconds) for UDP connections. Defaults to 30s if not set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#udp_idle_timeout_sec ComputeRouterNat#udp_idle_timeout_sec}
  */
  readonly udpIdleTimeoutSec?: number;
  /**
  * log_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#log_config ComputeRouterNat#log_config}
  */
  readonly logConfig?: ComputeRouterNatLogConfig;
  /**
  * subnetwork block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#subnetwork ComputeRouterNat#subnetwork}
  */
  readonly subnetwork?: ComputeRouterNatSubnetwork[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#timeouts ComputeRouterNat#timeouts}
  */
  readonly timeouts?: ComputeRouterNatTimeouts;
}
export interface ComputeRouterNatLogConfig {
  /**
  * Indicates whether or not to export logs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#enable ComputeRouterNat#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#filter ComputeRouterNat#filter}
  */
  readonly filter: string;
}

function computeRouterNatLogConfigToTerraform(struct?: ComputeRouterNatLogConfigOutputReference | ComputeRouterNatLogConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    filter: cdktf.stringToTerraform(struct!.filter),
  }
}

export class ComputeRouterNatLogConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable') as any;
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }
}
export interface ComputeRouterNatSubnetwork {
  /**
  * Self-link of subnetwork to NAT
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#name ComputeRouterNat#name}
  */
  readonly name: string;
  /**
  * List of the secondary ranges of the subnetwork that are allowed
to use NAT. This can be populated only if
'LIST_OF_SECONDARY_IP_RANGES' is one of the values in
sourceIpRangesToNat
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#secondary_ip_range_names ComputeRouterNat#secondary_ip_range_names}
  */
  readonly secondaryIpRangeNames?: string[];
  /**
  * List of options for which source IPs in the subnetwork
should have NAT enabled. Supported values include:
'ALL_IP_RANGES', 'LIST_OF_SECONDARY_IP_RANGES',
'PRIMARY_IP_RANGE'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#source_ip_ranges_to_nat ComputeRouterNat#source_ip_ranges_to_nat}
  */
  readonly sourceIpRangesToNat: string[];
}

function computeRouterNatSubnetworkToTerraform(struct?: ComputeRouterNatSubnetwork): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    secondary_ip_range_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.secondaryIpRangeNames),
    source_ip_ranges_to_nat: cdktf.listMapper(cdktf.stringToTerraform)(struct!.sourceIpRangesToNat),
  }
}

export interface ComputeRouterNatTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#create ComputeRouterNat#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#delete ComputeRouterNat#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html#update ComputeRouterNat#update}
  */
  readonly update?: string;
}

function computeRouterNatTimeoutsToTerraform(struct?: ComputeRouterNatTimeoutsOutputReference | ComputeRouterNatTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ComputeRouterNatTimeoutsOutputReference extends cdktf.ComplexObject {
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

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html google_compute_router_nat}
*/
export class ComputeRouterNat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_router_nat";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat.html google_compute_router_nat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeRouterNatConfig
  */
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
    this._enableEndpointIndependentMapping = config.enableEndpointIndependentMapping;
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
  private _drainNatIps?: string[] | undefined; 
  public get drainNatIps() {
    return this.getListAttribute('drain_nat_ips');
  }
  public set drainNatIps(value: string[] | undefined) {
    this._drainNatIps = value;
  }
  public resetDrainNatIps() {
    this._drainNatIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainNatIpsInput() {
    return this._drainNatIps
  }

  // enable_endpoint_independent_mapping - computed: false, optional: true, required: false
  private _enableEndpointIndependentMapping?: boolean | cdktf.IResolvable | undefined; 
  public get enableEndpointIndependentMapping() {
    return this.getBooleanAttribute('enable_endpoint_independent_mapping') as any;
  }
  public set enableEndpointIndependentMapping(value: boolean | cdktf.IResolvable | undefined) {
    this._enableEndpointIndependentMapping = value;
  }
  public resetEnableEndpointIndependentMapping() {
    this._enableEndpointIndependentMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEndpointIndependentMappingInput() {
    return this._enableEndpointIndependentMapping
  }

  // icmp_idle_timeout_sec - computed: false, optional: true, required: false
  private _icmpIdleTimeoutSec?: number | undefined; 
  public get icmpIdleTimeoutSec() {
    return this.getNumberAttribute('icmp_idle_timeout_sec');
  }
  public set icmpIdleTimeoutSec(value: number | undefined) {
    this._icmpIdleTimeoutSec = value;
  }
  public resetIcmpIdleTimeoutSec() {
    this._icmpIdleTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpIdleTimeoutSecInput() {
    return this._icmpIdleTimeoutSec
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // min_ports_per_vm - computed: false, optional: true, required: false
  private _minPortsPerVm?: number | undefined; 
  public get minPortsPerVm() {
    return this.getNumberAttribute('min_ports_per_vm');
  }
  public set minPortsPerVm(value: number | undefined) {
    this._minPortsPerVm = value;
  }
  public resetMinPortsPerVm() {
    this._minPortsPerVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPortsPerVmInput() {
    return this._minPortsPerVm
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

  // nat_ip_allocate_option - computed: false, optional: false, required: true
  private _natIpAllocateOption?: string; 
  public get natIpAllocateOption() {
    return this.getStringAttribute('nat_ip_allocate_option');
  }
  public set natIpAllocateOption(value: string) {
    this._natIpAllocateOption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpAllocateOptionInput() {
    return this._natIpAllocateOption
  }

  // nat_ips - computed: false, optional: true, required: false
  private _natIps?: string[] | undefined; 
  public get natIps() {
    return this.getListAttribute('nat_ips');
  }
  public set natIps(value: string[] | undefined) {
    this._natIps = value;
  }
  public resetNatIps() {
    this._natIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpsInput() {
    return this._natIps
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
    return this._router
  }

  // source_subnetwork_ip_ranges_to_nat - computed: false, optional: false, required: true
  private _sourceSubnetworkIpRangesToNat?: string; 
  public get sourceSubnetworkIpRangesToNat() {
    return this.getStringAttribute('source_subnetwork_ip_ranges_to_nat');
  }
  public set sourceSubnetworkIpRangesToNat(value: string) {
    this._sourceSubnetworkIpRangesToNat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSubnetworkIpRangesToNatInput() {
    return this._sourceSubnetworkIpRangesToNat
  }

  // tcp_established_idle_timeout_sec - computed: false, optional: true, required: false
  private _tcpEstablishedIdleTimeoutSec?: number | undefined; 
  public get tcpEstablishedIdleTimeoutSec() {
    return this.getNumberAttribute('tcp_established_idle_timeout_sec');
  }
  public set tcpEstablishedIdleTimeoutSec(value: number | undefined) {
    this._tcpEstablishedIdleTimeoutSec = value;
  }
  public resetTcpEstablishedIdleTimeoutSec() {
    this._tcpEstablishedIdleTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEstablishedIdleTimeoutSecInput() {
    return this._tcpEstablishedIdleTimeoutSec
  }

  // tcp_transitory_idle_timeout_sec - computed: false, optional: true, required: false
  private _tcpTransitoryIdleTimeoutSec?: number | undefined; 
  public get tcpTransitoryIdleTimeoutSec() {
    return this.getNumberAttribute('tcp_transitory_idle_timeout_sec');
  }
  public set tcpTransitoryIdleTimeoutSec(value: number | undefined) {
    this._tcpTransitoryIdleTimeoutSec = value;
  }
  public resetTcpTransitoryIdleTimeoutSec() {
    this._tcpTransitoryIdleTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTransitoryIdleTimeoutSecInput() {
    return this._tcpTransitoryIdleTimeoutSec
  }

  // udp_idle_timeout_sec - computed: false, optional: true, required: false
  private _udpIdleTimeoutSec?: number | undefined; 
  public get udpIdleTimeoutSec() {
    return this.getNumberAttribute('udp_idle_timeout_sec');
  }
  public set udpIdleTimeoutSec(value: number | undefined) {
    this._udpIdleTimeoutSec = value;
  }
  public resetUdpIdleTimeoutSec() {
    this._udpIdleTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpIdleTimeoutSecInput() {
    return this._udpIdleTimeoutSec
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig?: ComputeRouterNatLogConfig | undefined; 
  private __logConfigOutput = new ComputeRouterNatLogConfigOutputReference(this as any, "log_config", true);
  public get logConfig() {
    return this.__logConfigOutput;
  }
  public putLogConfig(value: ComputeRouterNatLogConfig | undefined) {
    this._logConfig = value;
  }
  public resetLogConfig() {
    this._logConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig
  }

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: ComputeRouterNatSubnetwork[] | undefined; 
  public get subnetwork() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('subnetwork') as any;
  }
  public set subnetwork(value: ComputeRouterNatSubnetwork[] | undefined) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeRouterNatTimeouts | undefined; 
  private __timeoutsOutput = new ComputeRouterNatTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ComputeRouterNatTimeouts | undefined) {
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
      drain_nat_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._drainNatIps),
      enable_endpoint_independent_mapping: cdktf.booleanToTerraform(this._enableEndpointIndependentMapping),
      icmp_idle_timeout_sec: cdktf.numberToTerraform(this._icmpIdleTimeoutSec),
      min_ports_per_vm: cdktf.numberToTerraform(this._minPortsPerVm),
      name: cdktf.stringToTerraform(this._name),
      nat_ip_allocate_option: cdktf.stringToTerraform(this._natIpAllocateOption),
      nat_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._natIps),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      router: cdktf.stringToTerraform(this._router),
      source_subnetwork_ip_ranges_to_nat: cdktf.stringToTerraform(this._sourceSubnetworkIpRangesToNat),
      tcp_established_idle_timeout_sec: cdktf.numberToTerraform(this._tcpEstablishedIdleTimeoutSec),
      tcp_transitory_idle_timeout_sec: cdktf.numberToTerraform(this._tcpTransitoryIdleTimeoutSec),
      udp_idle_timeout_sec: cdktf.numberToTerraform(this._udpIdleTimeoutSec),
      log_config: computeRouterNatLogConfigToTerraform(this._logConfig),
      subnetwork: cdktf.listMapper(computeRouterNatSubnetworkToTerraform)(this._subnetwork),
      timeouts: computeRouterNatTimeoutsToTerraform(this._timeouts),
    };
  }
}
