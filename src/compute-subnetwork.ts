// https://www.terraform.io/docs/providers/google/r/compute_subnetwork.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeSubnetworkConfig extends TerraformMetaArguments {
  /** An optional description of this resource. Provide this property when
you create the resource. This field can be set only at resource
creation time. */
  readonly description?: string;
  /** The range of internal addresses that are owned by this subnetwork.
Provide this property when you create the subnetwork. For example,
10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and
non-overlapping within a network. Only IPv4 is supported. */
  readonly ipCidrRange: string;
  /** The name of the resource, provided by the client when initially
creating the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash. */
  readonly name: string;
  /** The network this subnet belongs to.
Only networks that are in the distributed mode can have subnetworks. */
  readonly network: string;
  /** When enabled, VMs in this subnetwork without external IP addresses can
access Google APIs and services by using Private Google Access. */
  readonly privateIpGoogleAccess?: boolean;
  /** The private IPv6 google access type for the VMs in this subnet. */
  readonly privateIpv6GoogleAccess?: string;
  readonly project?: string;
  /** The GCP region for this subnetwork. */
  readonly region?: string;
  /** An array of configurations for secondary IP ranges for VM instances
contained in this subnetwork. The primary IP of such VM must belong
to the primary ipCidrRange of the subnetwork. The alias IPs may belong
to either primary or secondary ranges.

**Note**: This field uses [attr-as-block mode](https://www.terraform.io/docs/configuration/attr-as-blocks.html) to avoid
breaking users during the 0.12 upgrade. To explicitly send a list
of zero objects you must use the following syntax:
'example=[]'
For more details about this behavior, see [this section](https://www.terraform.io/docs/configuration/attr-as-blocks.html#defining-a-fixed-object-collection-value). */
  readonly secondaryIpRange?: ComputeSubnetworkSecondaryIpRange[];
  /** log_config block */
  readonly logConfig?: ComputeSubnetworkLogConfig[];
  /** timeouts block */
  readonly timeouts?: ComputeSubnetworkTimeouts;
}
export interface ComputeSubnetworkSecondaryIpRange {
  readonly ipCidrRange?: string;
  readonly rangeName?: string;
}
export interface ComputeSubnetworkLogConfig {
  /** Can only be specified if VPC flow logging for this subnetwork is enabled.
Toggles the aggregation interval for collecting flow logs. Increasing the
interval time will reduce the amount of generated flow logs for long
lasting connections. Default is an interval of 5 seconds per connection. Default value: "INTERVAL_5_SEC" Possible values: ["INTERVAL_5_SEC", "INTERVAL_30_SEC", "INTERVAL_1_MIN", "INTERVAL_5_MIN", "INTERVAL_10_MIN", "INTERVAL_15_MIN"] */
  readonly aggregationInterval?: string;
  /** Export filter used to define which VPC flow logs should be logged, as as CEL expression. See
https://cloud.google.com/vpc/docs/flow-logs#filtering for details on how to format this field.
The default value is 'true', which evaluates to include everything. */
  readonly filterExpr?: string;
  /** Can only be specified if VPC flow logging for this subnetwork is enabled.
The value of the field must be in [0, 1]. Set the sampling rate of VPC
flow logs within the subnetwork where 1.0 means all collected logs are
reported and 0.0 means no logs are reported. Default is 0.5 which means
half of all collected logs are reported. */
  readonly flowSampling?: number;
  /** Can only be specified if VPC flow logging for this subnetwork is enabled.
Configures whether metadata fields should be added to the reported VPC
flow logs. Default value: "INCLUDE_ALL_METADATA" Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA", "CUSTOM_METADATA"] */
  readonly metadata?: string;
  /** List of metadata fields that should be added to reported logs.
Can only be specified if VPC flow logs for this subnetwork is enabled and "metadata" is set to CUSTOM_METADATA. */
  readonly metadataFields?: string[];
}
export interface ComputeSubnetworkTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ComputeSubnetwork extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._region = config.region;
    this._secondaryIpRange = config.secondaryIpRange;
    this._logConfig = config.logConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // fingerprint - computed: true, optional: false, required: true
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // gateway_address - computed: true, optional: false, required: true
  public get gatewayAddress() {
    return this.getStringAttribute('gateway_address');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_cidr_range - computed: false, optional: false, required: true
  private _ipCidrRange: string;
  public get ipCidrRange() {
    return this._ipCidrRange;
  }
  public set ipCidrRange(value: string) {
    this._ipCidrRange = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network - computed: false, optional: false, required: true
  private _network: string;
  public get network() {
    return this._network;
  }
  public set network(value: string) {
    this._network = value;
  }

  // private_ip_google_access - computed: false, optional: true, required: false
  private _privateIpGoogleAccess?: boolean;
  public get privateIpGoogleAccess() {
    return this._privateIpGoogleAccess;
  }
  public set privateIpGoogleAccess(value: boolean | undefined) {
    this._privateIpGoogleAccess = value;
  }

  // private_ipv6_google_access - computed: true, optional: true, required: false
  private _privateIpv6GoogleAccess?: string;
  public get privateIpv6GoogleAccess() {
    return this._privateIpv6GoogleAccess ?? this.getStringAttribute('private_ipv6_google_access');
  }
  public set privateIpv6GoogleAccess(value: string | undefined) {
    this._privateIpv6GoogleAccess = value;
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

  // secondary_ip_range - computed: true, optional: true, required: false
  private _secondaryIpRange?: ComputeSubnetworkSecondaryIpRange[]
  public get secondaryIpRange(): ComputeSubnetworkSecondaryIpRange[] | undefined {
    return this._secondaryIpRange; // Getting the computed value is not yet implemented
  }
  public set secondaryIpRange(value: ComputeSubnetworkSecondaryIpRange[] | undefined) {
    this._secondaryIpRange = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // log_config - computed: false, optional: true, required: false
  private _logConfig?: ComputeSubnetworkLogConfig[];
  public get logConfig() {
    return this._logConfig;
  }
  public set logConfig(value: ComputeSubnetworkLogConfig[] | undefined) {
    this._logConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeSubnetworkTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeSubnetworkTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      ip_cidr_range: this._ipCidrRange,
      name: this._name,
      network: this._network,
      private_ip_google_access: this._privateIpGoogleAccess,
      private_ipv6_google_access: this._privateIpv6GoogleAccess,
      project: this._project,
      region: this._region,
      secondary_ip_range: this._secondaryIpRange,
      log_config: this._logConfig,
      timeouts: this._timeouts,
    };
  }
}
