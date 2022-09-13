// https://www.terraform.io/docs/providers/google/r/compute_router_nat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRouterNatConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of URLs of the IP resources to be drained. These IPs must be
valid static external IPs that have been assigned to the NAT.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#drain_nat_ips ComputeRouterNat#drain_nat_ips}
  */
  readonly drainNatIps?: string[];
  /**
  * Enable Dynamic Port Allocation.
If minPortsPerVm is set, minPortsPerVm must be set to a power of two greater than or equal to 32.
If minPortsPerVm is not set, a minimum of 32 ports will be allocated to a VM from this NAT config.
If maxPortsPerVm is set, maxPortsPerVm must be set to a power of two greater than minPortsPerVm.
If maxPortsPerVm is not set, a maximum of 65536 ports will be allocated to a VM from this NAT config.

Mutually exclusive with enableEndpointIndependentMapping.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#enable_dynamic_port_allocation ComputeRouterNat#enable_dynamic_port_allocation}
  */
  readonly enableDynamicPortAllocation?: boolean | cdktf.IResolvable;
  /**
  * Specifies if endpoint independent mapping is enabled. This is enabled by default. For more information
see the [official documentation](https://cloud.google.com/nat/docs/overview#specs-rfcs).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#enable_endpoint_independent_mapping ComputeRouterNat#enable_endpoint_independent_mapping}
  */
  readonly enableEndpointIndependentMapping?: boolean | cdktf.IResolvable;
  /**
  * Timeout (in seconds) for ICMP connections. Defaults to 30s if not set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#icmp_idle_timeout_sec ComputeRouterNat#icmp_idle_timeout_sec}
  */
  readonly icmpIdleTimeoutSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#id ComputeRouterNat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum number of ports allocated to a VM from this NAT.
This field can only be set when enableDynamicPortAllocation is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#max_ports_per_vm ComputeRouterNat#max_ports_per_vm}
  */
  readonly maxPortsPerVm?: number;
  /**
  * Minimum number of ports allocated to a VM from this NAT.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#min_ports_per_vm ComputeRouterNat#min_ports_per_vm}
  */
  readonly minPortsPerVm?: number;
  /**
  * Name of the NAT service. The name must be 1-63 characters long and
comply with RFC1035.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#name ComputeRouterNat#name}
  */
  readonly name: string;
  /**
  * How external IPs should be allocated for this NAT. Valid values are
'AUTO_ONLY' for only allowing NAT IPs allocated by Google Cloud
Platform, or 'MANUAL_ONLY' for only user-allocated NAT IP addresses. Possible values: ["MANUAL_ONLY", "AUTO_ONLY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#nat_ip_allocate_option ComputeRouterNat#nat_ip_allocate_option}
  */
  readonly natIpAllocateOption: string;
  /**
  * Self-links of NAT IPs. Only valid if natIpAllocateOption
is set to MANUAL_ONLY.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#nat_ips ComputeRouterNat#nat_ips}
  */
  readonly natIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#project ComputeRouterNat#project}
  */
  readonly project?: string;
  /**
  * Region where the router and NAT reside.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#region ComputeRouterNat#region}
  */
  readonly region?: string;
  /**
  * The name of the Cloud Router in which this NAT will be configured.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#router ComputeRouterNat#router}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#source_subnetwork_ip_ranges_to_nat ComputeRouterNat#source_subnetwork_ip_ranges_to_nat}
  */
  readonly sourceSubnetworkIpRangesToNat: string;
  /**
  * Timeout (in seconds) for TCP established connections.
Defaults to 1200s if not set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#tcp_established_idle_timeout_sec ComputeRouterNat#tcp_established_idle_timeout_sec}
  */
  readonly tcpEstablishedIdleTimeoutSec?: number;
  /**
  * Timeout (in seconds) for TCP transitory connections.
Defaults to 30s if not set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#tcp_transitory_idle_timeout_sec ComputeRouterNat#tcp_transitory_idle_timeout_sec}
  */
  readonly tcpTransitoryIdleTimeoutSec?: number;
  /**
  * Timeout (in seconds) for UDP connections. Defaults to 30s if not set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#udp_idle_timeout_sec ComputeRouterNat#udp_idle_timeout_sec}
  */
  readonly udpIdleTimeoutSec?: number;
  /**
  * log_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#log_config ComputeRouterNat#log_config}
  */
  readonly logConfig?: ComputeRouterNatLogConfig;
  /**
  * subnetwork block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#subnetwork ComputeRouterNat#subnetwork}
  */
  readonly subnetwork?: ComputeRouterNatSubnetwork[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#timeouts ComputeRouterNat#timeouts}
  */
  readonly timeouts?: ComputeRouterNatTimeouts;
}
export interface ComputeRouterNatLogConfig {
  /**
  * Indicates whether or not to export logs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#enable ComputeRouterNat#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * Specifies the desired filtering of logs on this NAT. Possible values: ["ERRORS_ONLY", "TRANSLATIONS_ONLY", "ALL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#filter ComputeRouterNat#filter}
  */
  readonly filter: string;
}

export function computeRouterNatLogConfigToTerraform(struct?: ComputeRouterNatLogConfigOutputReference | ComputeRouterNatLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    filter: cdktf.stringToTerraform(struct!.filter),
  }
}

export class ComputeRouterNatLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRouterNatLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRouterNatLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._filter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._filter = value.filter;
    }
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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
    return this._filter;
  }
}
export interface ComputeRouterNatSubnetwork {
  /**
  * Self-link of subnetwork to NAT
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#name ComputeRouterNat#name}
  */
  readonly name: string;
  /**
  * List of the secondary ranges of the subnetwork that are allowed
to use NAT. This can be populated only if
'LIST_OF_SECONDARY_IP_RANGES' is one of the values in
sourceIpRangesToNat
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#secondary_ip_range_names ComputeRouterNat#secondary_ip_range_names}
  */
  readonly secondaryIpRangeNames?: string[];
  /**
  * List of options for which source IPs in the subnetwork
should have NAT enabled. Supported values include:
'ALL_IP_RANGES', 'LIST_OF_SECONDARY_IP_RANGES',
'PRIMARY_IP_RANGE'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#source_ip_ranges_to_nat ComputeRouterNat#source_ip_ranges_to_nat}
  */
  readonly sourceIpRangesToNat: string[];
}

export function computeRouterNatSubnetworkToTerraform(struct?: ComputeRouterNatSubnetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    secondary_ip_range_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secondaryIpRangeNames),
    source_ip_ranges_to_nat: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceIpRangesToNat),
  }
}

export class ComputeRouterNatSubnetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeRouterNatSubnetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._secondaryIpRangeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryIpRangeNames = this._secondaryIpRangeNames;
    }
    if (this._sourceIpRangesToNat !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpRangesToNat = this._sourceIpRangesToNat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeRouterNatSubnetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._secondaryIpRangeNames = undefined;
      this._sourceIpRangesToNat = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._secondaryIpRangeNames = value.secondaryIpRangeNames;
      this._sourceIpRangesToNat = value.sourceIpRangesToNat;
    }
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

  // secondary_ip_range_names - computed: false, optional: true, required: false
  private _secondaryIpRangeNames?: string[]; 
  public get secondaryIpRangeNames() {
    return cdktf.Fn.tolist(this.getListAttribute('secondary_ip_range_names'));
  }
  public set secondaryIpRangeNames(value: string[]) {
    this._secondaryIpRangeNames = value;
  }
  public resetSecondaryIpRangeNames() {
    this._secondaryIpRangeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpRangeNamesInput() {
    return this._secondaryIpRangeNames;
  }

  // source_ip_ranges_to_nat - computed: false, optional: false, required: true
  private _sourceIpRangesToNat?: string[]; 
  public get sourceIpRangesToNat() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ip_ranges_to_nat'));
  }
  public set sourceIpRangesToNat(value: string[]) {
    this._sourceIpRangesToNat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpRangesToNatInput() {
    return this._sourceIpRangesToNat;
  }
}

export class ComputeRouterNatSubnetworkList extends cdktf.ComplexList {
  public internalValue? : ComputeRouterNatSubnetwork[] | cdktf.IResolvable

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
  public get(index: number): ComputeRouterNatSubnetworkOutputReference {
    return new ComputeRouterNatSubnetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeRouterNatTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#create ComputeRouterNat#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#delete ComputeRouterNat#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat#update ComputeRouterNat#update}
  */
  readonly update?: string;
}

export function computeRouterNatTimeoutsToTerraform(struct?: ComputeRouterNatTimeoutsOutputReference | ComputeRouterNatTimeouts | cdktf.IResolvable): any {
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

export class ComputeRouterNatTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeRouterNatTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeRouterNatTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat google_compute_router_nat}
*/
export class ComputeRouterNat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_router_nat";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_router_nat google_compute_router_nat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeRouterNatConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeRouterNatConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_router_nat',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._drainNatIps = config.drainNatIps;
    this._enableDynamicPortAllocation = config.enableDynamicPortAllocation;
    this._enableEndpointIndependentMapping = config.enableEndpointIndependentMapping;
    this._icmpIdleTimeoutSec = config.icmpIdleTimeoutSec;
    this._id = config.id;
    this._maxPortsPerVm = config.maxPortsPerVm;
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
    this._logConfig.internalValue = config.logConfig;
    this._subnetwork.internalValue = config.subnetwork;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // drain_nat_ips - computed: false, optional: true, required: false
  private _drainNatIps?: string[]; 
  public get drainNatIps() {
    return cdktf.Fn.tolist(this.getListAttribute('drain_nat_ips'));
  }
  public set drainNatIps(value: string[]) {
    this._drainNatIps = value;
  }
  public resetDrainNatIps() {
    this._drainNatIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drainNatIpsInput() {
    return this._drainNatIps;
  }

  // enable_dynamic_port_allocation - computed: true, optional: true, required: false
  private _enableDynamicPortAllocation?: boolean | cdktf.IResolvable; 
  public get enableDynamicPortAllocation() {
    return this.getBooleanAttribute('enable_dynamic_port_allocation');
  }
  public set enableDynamicPortAllocation(value: boolean | cdktf.IResolvable) {
    this._enableDynamicPortAllocation = value;
  }
  public resetEnableDynamicPortAllocation() {
    this._enableDynamicPortAllocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDynamicPortAllocationInput() {
    return this._enableDynamicPortAllocation;
  }

  // enable_endpoint_independent_mapping - computed: false, optional: true, required: false
  private _enableEndpointIndependentMapping?: boolean | cdktf.IResolvable; 
  public get enableEndpointIndependentMapping() {
    return this.getBooleanAttribute('enable_endpoint_independent_mapping');
  }
  public set enableEndpointIndependentMapping(value: boolean | cdktf.IResolvable) {
    this._enableEndpointIndependentMapping = value;
  }
  public resetEnableEndpointIndependentMapping() {
    this._enableEndpointIndependentMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEndpointIndependentMappingInput() {
    return this._enableEndpointIndependentMapping;
  }

  // icmp_idle_timeout_sec - computed: false, optional: true, required: false
  private _icmpIdleTimeoutSec?: number; 
  public get icmpIdleTimeoutSec() {
    return this.getNumberAttribute('icmp_idle_timeout_sec');
  }
  public set icmpIdleTimeoutSec(value: number) {
    this._icmpIdleTimeoutSec = value;
  }
  public resetIcmpIdleTimeoutSec() {
    this._icmpIdleTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpIdleTimeoutSecInput() {
    return this._icmpIdleTimeoutSec;
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

  // max_ports_per_vm - computed: false, optional: true, required: false
  private _maxPortsPerVm?: number; 
  public get maxPortsPerVm() {
    return this.getNumberAttribute('max_ports_per_vm');
  }
  public set maxPortsPerVm(value: number) {
    this._maxPortsPerVm = value;
  }
  public resetMaxPortsPerVm() {
    this._maxPortsPerVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPortsPerVmInput() {
    return this._maxPortsPerVm;
  }

  // min_ports_per_vm - computed: false, optional: true, required: false
  private _minPortsPerVm?: number; 
  public get minPortsPerVm() {
    return this.getNumberAttribute('min_ports_per_vm');
  }
  public set minPortsPerVm(value: number) {
    this._minPortsPerVm = value;
  }
  public resetMinPortsPerVm() {
    this._minPortsPerVm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPortsPerVmInput() {
    return this._minPortsPerVm;
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
    return this._natIpAllocateOption;
  }

  // nat_ips - computed: false, optional: true, required: false
  private _natIps?: string[]; 
  public get natIps() {
    return cdktf.Fn.tolist(this.getListAttribute('nat_ips'));
  }
  public set natIps(value: string[]) {
    this._natIps = value;
  }
  public resetNatIps() {
    this._natIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natIpsInput() {
    return this._natIps;
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
    return this._sourceSubnetworkIpRangesToNat;
  }

  // tcp_established_idle_timeout_sec - computed: false, optional: true, required: false
  private _tcpEstablishedIdleTimeoutSec?: number; 
  public get tcpEstablishedIdleTimeoutSec() {
    return this.getNumberAttribute('tcp_established_idle_timeout_sec');
  }
  public set tcpEstablishedIdleTimeoutSec(value: number) {
    this._tcpEstablishedIdleTimeoutSec = value;
  }
  public resetTcpEstablishedIdleTimeoutSec() {
    this._tcpEstablishedIdleTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEstablishedIdleTimeoutSecInput() {
    return this._tcpEstablishedIdleTimeoutSec;
  }

  // tcp_transitory_idle_timeout_sec - computed: false, optional: true, required: false
  private _tcpTransitoryIdleTimeoutSec?: number; 
  public get tcpTransitoryIdleTimeoutSec() {
    return this.getNumberAttribute('tcp_transitory_idle_timeout_sec');
  }
  public set tcpTransitoryIdleTimeoutSec(value: number) {
    this._tcpTransitoryIdleTimeoutSec = value;
  }
  public resetTcpTransitoryIdleTimeoutSec() {
    this._tcpTransitoryIdleTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTransitoryIdleTimeoutSecInput() {
    return this._tcpTransitoryIdleTimeoutSec;
  }

  // udp_idle_timeout_sec - computed: false, optional: true, required: false
  private _udpIdleTimeoutSec?: number; 
  public get udpIdleTimeoutSec() {
    return this.getNumberAttribute('udp_idle_timeout_sec');
  }
  public set udpIdleTimeoutSec(value: number) {
    this._udpIdleTimeoutSec = value;
  }
  public resetUdpIdleTimeoutSec() {
    this._udpIdleTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpIdleTimeoutSecInput() {
    return this._udpIdleTimeoutSec;
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new ComputeRouterNatLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: ComputeRouterNatLogConfig) {
    this._logConfig.internalValue = value;
  }
  public resetLogConfig() {
    this._logConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig.internalValue;
  }

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork = new ComputeRouterNatSubnetworkList(this, "subnetwork", true);
  public get subnetwork() {
    return this._subnetwork;
  }
  public putSubnetwork(value: ComputeRouterNatSubnetwork[] | cdktf.IResolvable) {
    this._subnetwork.internalValue = value;
  }
  public resetSubnetwork() {
    this._subnetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeRouterNatTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeRouterNatTimeouts) {
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
      drain_nat_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._drainNatIps),
      enable_dynamic_port_allocation: cdktf.booleanToTerraform(this._enableDynamicPortAllocation),
      enable_endpoint_independent_mapping: cdktf.booleanToTerraform(this._enableEndpointIndependentMapping),
      icmp_idle_timeout_sec: cdktf.numberToTerraform(this._icmpIdleTimeoutSec),
      id: cdktf.stringToTerraform(this._id),
      max_ports_per_vm: cdktf.numberToTerraform(this._maxPortsPerVm),
      min_ports_per_vm: cdktf.numberToTerraform(this._minPortsPerVm),
      name: cdktf.stringToTerraform(this._name),
      nat_ip_allocate_option: cdktf.stringToTerraform(this._natIpAllocateOption),
      nat_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._natIps),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      router: cdktf.stringToTerraform(this._router),
      source_subnetwork_ip_ranges_to_nat: cdktf.stringToTerraform(this._sourceSubnetworkIpRangesToNat),
      tcp_established_idle_timeout_sec: cdktf.numberToTerraform(this._tcpEstablishedIdleTimeoutSec),
      tcp_transitory_idle_timeout_sec: cdktf.numberToTerraform(this._tcpTransitoryIdleTimeoutSec),
      udp_idle_timeout_sec: cdktf.numberToTerraform(this._udpIdleTimeoutSec),
      log_config: computeRouterNatLogConfigToTerraform(this._logConfig.internalValue),
      subnetwork: cdktf.listMapper(computeRouterNatSubnetworkToTerraform, true)(this._subnetwork.internalValue),
      timeouts: computeRouterNatTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
