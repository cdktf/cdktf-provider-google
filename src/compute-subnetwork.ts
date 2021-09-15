// https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeSubnetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * An optional description of this resource. Provide this property when
you create the resource. This field can be set only at resource
creation time.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#description ComputeSubnetwork#description}
  */
  readonly description?: string;
  /**
  * The range of internal addresses that are owned by this subnetwork.
Provide this property when you create the subnetwork. For example,
10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and
non-overlapping within a network. Only IPv4 is supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#ip_cidr_range ComputeSubnetwork#ip_cidr_range}
  */
  readonly ipCidrRange: string;
  /**
  * The name of the resource, provided by the client when initially
creating the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#name ComputeSubnetwork#name}
  */
  readonly name: string;
  /**
  * The network this subnet belongs to.
Only networks that are in the distributed mode can have subnetworks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#network ComputeSubnetwork#network}
  */
  readonly network: string;
  /**
  * When enabled, VMs in this subnetwork without external IP addresses can
access Google APIs and services by using Private Google Access.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#private_ip_google_access ComputeSubnetwork#private_ip_google_access}
  */
  readonly privateIpGoogleAccess?: boolean | cdktf.IResolvable;
  /**
  * The private IPv6 google access type for the VMs in this subnet.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#private_ipv6_google_access ComputeSubnetwork#private_ipv6_google_access}
  */
  readonly privateIpv6GoogleAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#project ComputeSubnetwork#project}
  */
  readonly project?: string;
  /**
  * The purpose of the resource. This field can be either PRIVATE
or INTERNAL_HTTPS_LOAD_BALANCER. A subnetwork with purpose set to
INTERNAL_HTTPS_LOAD_BALANCER is a user-created subnetwork that is
reserved for Internal HTTP(S) Load Balancing. If unspecified, the
purpose defaults to PRIVATE.

If set to INTERNAL_HTTPS_LOAD_BALANCER you must also set 'role'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#purpose ComputeSubnetwork#purpose}
  */
  readonly purpose?: string;
  /**
  * The GCP region for this subnetwork.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#region ComputeSubnetwork#region}
  */
  readonly region?: string;
  /**
  * The role of subnetwork. Currently, this field is only used when
purpose = INTERNAL_HTTPS_LOAD_BALANCER. The value can be set to ACTIVE
or BACKUP. An ACTIVE subnetwork is one that is currently being used
for Internal HTTP(S) Load Balancing. A BACKUP subnetwork is one that
is ready to be promoted to ACTIVE or is currently draining. Possible values: ["ACTIVE", "BACKUP"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#role ComputeSubnetwork#role}
  */
  readonly role?: string;
  /**
  * An array of configurations for secondary IP ranges for VM instances
contained in this subnetwork. The primary IP of such VM must belong
to the primary ipCidrRange of the subnetwork. The alias IPs may belong
to either primary or secondary ranges.

**Note**: This field uses [attr-as-block mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html) to avoid
breaking users during the 0.12 upgrade. To explicitly send a list
of zero objects you must use the following syntax:
'example=[]'
For more details about this behavior, see [this section](https://www.terraform.io/docs/configuration/attr-as-blocks.html#defining-a-fixed-object-collection-value).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#secondary_ip_range ComputeSubnetwork#secondary_ip_range}
  */
  readonly secondaryIpRange?: ComputeSubnetworkSecondaryIpRange[];
  /**
  * log_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#log_config ComputeSubnetwork#log_config}
  */
  readonly logConfig?: ComputeSubnetworkLogConfig[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#timeouts ComputeSubnetwork#timeouts}
  */
  readonly timeouts?: ComputeSubnetworkTimeouts;
}
export interface ComputeSubnetworkSecondaryIpRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#ip_cidr_range ComputeSubnetwork#ip_cidr_range}
  */
  readonly ipCidrRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#range_name ComputeSubnetwork#range_name}
  */
  readonly rangeName?: string;
}

function computeSubnetworkSecondaryIpRangeToTerraform(struct?: ComputeSubnetworkSecondaryIpRange): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ip_cidr_range: struct!.ipCidrRange === undefined ? null : cdktf.stringToTerraform(struct!.ipCidrRange),
    range_name: struct!.rangeName === undefined ? null : cdktf.stringToTerraform(struct!.rangeName),
  }
}

export interface ComputeSubnetworkLogConfig {
  /**
  * Can only be specified if VPC flow logging for this subnetwork is enabled.
Toggles the aggregation interval for collecting flow logs. Increasing the
interval time will reduce the amount of generated flow logs for long
lasting connections. Default is an interval of 5 seconds per connection. Default value: "INTERVAL_5_SEC" Possible values: ["INTERVAL_5_SEC", "INTERVAL_30_SEC", "INTERVAL_1_MIN", "INTERVAL_5_MIN", "INTERVAL_10_MIN", "INTERVAL_15_MIN"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#aggregation_interval ComputeSubnetwork#aggregation_interval}
  */
  readonly aggregationInterval?: string;
  /**
  * Export filter used to define which VPC flow logs should be logged, as as CEL expression. See
https://cloud.google.com/vpc/docs/flow-logs#filtering for details on how to format this field.
The default value is 'true', which evaluates to include everything.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#filter_expr ComputeSubnetwork#filter_expr}
  */
  readonly filterExpr?: string;
  /**
  * Can only be specified if VPC flow logging for this subnetwork is enabled.
The value of the field must be in [0, 1]. Set the sampling rate of VPC
flow logs within the subnetwork where 1.0 means all collected logs are
reported and 0.0 means no logs are reported. Default is 0.5 which means
half of all collected logs are reported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#flow_sampling ComputeSubnetwork#flow_sampling}
  */
  readonly flowSampling?: number;
  /**
  * Can only be specified if VPC flow logging for this subnetwork is enabled.
Configures whether metadata fields should be added to the reported VPC
flow logs. Default value: "INCLUDE_ALL_METADATA" Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA", "CUSTOM_METADATA"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#metadata ComputeSubnetwork#metadata}
  */
  readonly metadata?: string;
  /**
  * List of metadata fields that should be added to reported logs.
Can only be specified if VPC flow logs for this subnetwork is enabled and "metadata" is set to CUSTOM_METADATA.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#metadata_fields ComputeSubnetwork#metadata_fields}
  */
  readonly metadataFields?: string[];
}

function computeSubnetworkLogConfigToTerraform(struct?: ComputeSubnetworkLogConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aggregation_interval: cdktf.stringToTerraform(struct!.aggregationInterval),
    filter_expr: cdktf.stringToTerraform(struct!.filterExpr),
    flow_sampling: cdktf.numberToTerraform(struct!.flowSampling),
    metadata: cdktf.stringToTerraform(struct!.metadata),
    metadata_fields: cdktf.listMapper(cdktf.stringToTerraform)(struct!.metadataFields),
  }
}

export interface ComputeSubnetworkTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#create ComputeSubnetwork#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#delete ComputeSubnetwork#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html#update ComputeSubnetwork#update}
  */
  readonly update?: string;
}

function computeSubnetworkTimeoutsToTerraform(struct?: ComputeSubnetworkTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html google_compute_subnetwork}
*/
export class ComputeSubnetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_compute_subnetwork";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html google_compute_subnetwork} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeSubnetworkConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeSubnetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_subnetwork',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._ipCidrRange = config.ipCidrRange;
    this._name = config.name;
    this._network = config.network;
    this._privateIpGoogleAccess = config.privateIpGoogleAccess;
    this._privateIpv6GoogleAccess = config.privateIpv6GoogleAccess;
    this._project = config.project;
    this._purpose = config.purpose;
    this._region = config.region;
    this._role = config.role;
    this._secondaryIpRange = config.secondaryIpRange;
    this._logConfig = config.logConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // gateway_address - computed: true, optional: false, required: false
  public get gatewayAddress() {
    return this.getStringAttribute('gateway_address');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_cidr_range - computed: false, optional: false, required: true
  private _ipCidrRange: string;
  public get ipCidrRange() {
    return this.getStringAttribute('ip_cidr_range');
  }
  public set ipCidrRange(value: string) {
    this._ipCidrRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCidrRangeInput() {
    return this._ipCidrRange
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

  // network - computed: false, optional: false, required: true
  private _network: string;
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network
  }

  // private_ip_google_access - computed: false, optional: true, required: false
  private _privateIpGoogleAccess?: boolean | cdktf.IResolvable;
  public get privateIpGoogleAccess() {
    return this.getBooleanAttribute('private_ip_google_access');
  }
  public set privateIpGoogleAccess(value: boolean | cdktf.IResolvable ) {
    this._privateIpGoogleAccess = value;
  }
  public resetPrivateIpGoogleAccess() {
    this._privateIpGoogleAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpGoogleAccessInput() {
    return this._privateIpGoogleAccess
  }

  // private_ipv6_google_access - computed: true, optional: true, required: false
  private _privateIpv6GoogleAccess?: string;
  public get privateIpv6GoogleAccess() {
    return this.getStringAttribute('private_ipv6_google_access');
  }
  public set privateIpv6GoogleAccess(value: string) {
    this._privateIpv6GoogleAccess = value;
  }
  public resetPrivateIpv6GoogleAccess() {
    this._privateIpv6GoogleAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpv6GoogleAccessInput() {
    return this._privateIpv6GoogleAccess
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
    return this._purpose
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

  // role - computed: false, optional: true, required: false
  private _role?: string;
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string ) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // secondary_ip_range - computed: true, optional: true, required: false
  private _secondaryIpRange?: ComputeSubnetworkSecondaryIpRange[]
  public get secondaryIpRange(): ComputeSubnetworkSecondaryIpRange[] {
    return this.interpolationForAttribute('secondary_ip_range') as any; // Getting the computed value is not yet implemented
  }
  public set secondaryIpRange(value: ComputeSubnetworkSecondaryIpRange[]) {
    this._secondaryIpRange = value;
  }
  public resetSecondaryIpRange() {
    this._secondaryIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpRangeInput() {
    return this._secondaryIpRange
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig?: ComputeSubnetworkLogConfig[];
  public get logConfig() {
    return this.interpolationForAttribute('log_config') as any;
  }
  public set logConfig(value: ComputeSubnetworkLogConfig[] ) {
    this._logConfig = value;
  }
  public resetLogConfig() {
    this._logConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeSubnetworkTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeSubnetworkTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      ip_cidr_range: cdktf.stringToTerraform(this._ipCidrRange),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      private_ip_google_access: cdktf.booleanToTerraform(this._privateIpGoogleAccess),
      private_ipv6_google_access: cdktf.stringToTerraform(this._privateIpv6GoogleAccess),
      project: cdktf.stringToTerraform(this._project),
      purpose: cdktf.stringToTerraform(this._purpose),
      region: cdktf.stringToTerraform(this._region),
      role: cdktf.stringToTerraform(this._role),
      secondary_ip_range: cdktf.listMapper(computeSubnetworkSecondaryIpRangeToTerraform)(this._secondaryIpRange),
      log_config: cdktf.listMapper(computeSubnetworkLogConfigToTerraform)(this._logConfig),
      timeouts: computeSubnetworkTimeoutsToTerraform(this._timeouts),
    };
  }
}
