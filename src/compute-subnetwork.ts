// https://www.terraform.io/docs/providers/google/r/compute_subnetwork
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#description ComputeSubnetwork#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#id ComputeSubnetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The range of internal addresses that are owned by this subnetwork.
Provide this property when you create the subnetwork. For example,
10.0.0.0/8 or 192.168.0.0/16. Ranges must be unique and
non-overlapping within a network. Only IPv4 is supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#ip_cidr_range ComputeSubnetwork#ip_cidr_range}
  */
  readonly ipCidrRange: string;
  /**
  * The access type of IPv6 address this subnet holds. It's immutable and can only be specified during creation
or the first time the subnet is updated into IPV4_IPV6 dual stack. If the ipv6_type is EXTERNAL then this subnet
cannot enable direct path. Possible values: ["EXTERNAL", "INTERNAL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#ipv6_access_type ComputeSubnetwork#ipv6_access_type}
  */
  readonly ipv6AccessType?: string;
  /**
  * The name of the resource, provided by the client when initially
creating the resource. The name must be 1-63 characters long, and
comply with RFC1035. Specifically, the name must be 1-63 characters
long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which
means the first character must be a lowercase letter, and all
following characters must be a dash, lowercase letter, or digit,
except the last character, which cannot be a dash.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#name ComputeSubnetwork#name}
  */
  readonly name: string;
  /**
  * The network this subnet belongs to.
Only networks that are in the distributed mode can have subnetworks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#network ComputeSubnetwork#network}
  */
  readonly network: string;
  /**
  * When enabled, VMs in this subnetwork without external IP addresses can
access Google APIs and services by using Private Google Access.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#private_ip_google_access ComputeSubnetwork#private_ip_google_access}
  */
  readonly privateIpGoogleAccess?: boolean | cdktf.IResolvable;
  /**
  * The private IPv6 google access type for the VMs in this subnet.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#private_ipv6_google_access ComputeSubnetwork#private_ipv6_google_access}
  */
  readonly privateIpv6GoogleAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#project ComputeSubnetwork#project}
  */
  readonly project?: string;
  /**
  * The purpose of the resource. A subnetwork with purpose set to
INTERNAL_HTTPS_LOAD_BALANCER is a user-created subnetwork that is
reserved for Internal HTTP(S) Load Balancing.

If set to INTERNAL_HTTPS_LOAD_BALANCER you must also set the 'role' field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#purpose ComputeSubnetwork#purpose}
  */
  readonly purpose?: string;
  /**
  * The GCP region for this subnetwork.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#region ComputeSubnetwork#region}
  */
  readonly region?: string;
  /**
  * The role of subnetwork. Currently, this field is only used when
purpose = INTERNAL_HTTPS_LOAD_BALANCER. The value can be set to ACTIVE
or BACKUP. An ACTIVE subnetwork is one that is currently being used
for Internal HTTP(S) Load Balancing. A BACKUP subnetwork is one that
is ready to be promoted to ACTIVE or is currently draining. Possible values: ["ACTIVE", "BACKUP"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#role ComputeSubnetwork#role}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#secondary_ip_range ComputeSubnetwork#secondary_ip_range}
  */
  readonly secondaryIpRange?: ComputeSubnetworkSecondaryIpRange[] | cdktf.IResolvable;
  /**
  * The stack type for this subnet to identify whether the IPv6 feature is enabled or not.
If not specified IPV4_ONLY will be used. Possible values: ["IPV4_ONLY", "IPV4_IPV6"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#stack_type ComputeSubnetwork#stack_type}
  */
  readonly stackType?: string;
  /**
  * log_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#log_config ComputeSubnetwork#log_config}
  */
  readonly logConfig?: ComputeSubnetworkLogConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#timeouts ComputeSubnetwork#timeouts}
  */
  readonly timeouts?: ComputeSubnetworkTimeouts;
}
export interface ComputeSubnetworkSecondaryIpRange {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#ip_cidr_range ComputeSubnetwork#ip_cidr_range}
  */
  readonly ipCidrRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#range_name ComputeSubnetwork#range_name}
  */
  readonly rangeName?: string;
}

export function computeSubnetworkSecondaryIpRangeToTerraform(struct?: ComputeSubnetworkSecondaryIpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_cidr_range: struct!.ipCidrRange === undefined ? null : cdktf.stringToTerraform(struct!.ipCidrRange),
    range_name: struct!.rangeName === undefined ? null : cdktf.stringToTerraform(struct!.rangeName),
  }
}

export class ComputeSubnetworkSecondaryIpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeSubnetworkSecondaryIpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipCidrRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipCidrRange = this._ipCidrRange;
    }
    if (this._rangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.rangeName = this._rangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSubnetworkSecondaryIpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipCidrRange = undefined;
      this._rangeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipCidrRange = value.ipCidrRange;
      this._rangeName = value.rangeName;
    }
  }

  // ip_cidr_range - computed: true, optional: true, required: false
  private _ipCidrRange?: string; 
  public get ipCidrRange() {
    return this.getStringAttribute('ip_cidr_range');
  }
  public set ipCidrRange(value: string) {
    this._ipCidrRange = value;
  }
  public resetIpCidrRange() {
    this._ipCidrRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCidrRangeInput() {
    return this._ipCidrRange;
  }

  // range_name - computed: true, optional: true, required: false
  private _rangeName?: string; 
  public get rangeName() {
    return this.getStringAttribute('range_name');
  }
  public set rangeName(value: string) {
    this._rangeName = value;
  }
  public resetRangeName() {
    this._rangeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeNameInput() {
    return this._rangeName;
  }
}

export class ComputeSubnetworkSecondaryIpRangeList extends cdktf.ComplexList {
  public internalValue? : ComputeSubnetworkSecondaryIpRange[] | cdktf.IResolvable

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
  public get(index: number): ComputeSubnetworkSecondaryIpRangeOutputReference {
    return new ComputeSubnetworkSecondaryIpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeSubnetworkLogConfig {
  /**
  * Can only be specified if VPC flow logging for this subnetwork is enabled.
Toggles the aggregation interval for collecting flow logs. Increasing the
interval time will reduce the amount of generated flow logs for long
lasting connections. Default is an interval of 5 seconds per connection. Default value: "INTERVAL_5_SEC" Possible values: ["INTERVAL_5_SEC", "INTERVAL_30_SEC", "INTERVAL_1_MIN", "INTERVAL_5_MIN", "INTERVAL_10_MIN", "INTERVAL_15_MIN"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#aggregation_interval ComputeSubnetwork#aggregation_interval}
  */
  readonly aggregationInterval?: string;
  /**
  * Export filter used to define which VPC flow logs should be logged, as as CEL expression. See
https://cloud.google.com/vpc/docs/flow-logs#filtering for details on how to format this field.
The default value is 'true', which evaluates to include everything.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#filter_expr ComputeSubnetwork#filter_expr}
  */
  readonly filterExpr?: string;
  /**
  * Can only be specified if VPC flow logging for this subnetwork is enabled.
The value of the field must be in [0, 1]. Set the sampling rate of VPC
flow logs within the subnetwork where 1.0 means all collected logs are
reported and 0.0 means no logs are reported. Default is 0.5 which means
half of all collected logs are reported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#flow_sampling ComputeSubnetwork#flow_sampling}
  */
  readonly flowSampling?: number;
  /**
  * Can only be specified if VPC flow logging for this subnetwork is enabled.
Configures whether metadata fields should be added to the reported VPC
flow logs. Default value: "INCLUDE_ALL_METADATA" Possible values: ["EXCLUDE_ALL_METADATA", "INCLUDE_ALL_METADATA", "CUSTOM_METADATA"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#metadata ComputeSubnetwork#metadata}
  */
  readonly metadata?: string;
  /**
  * List of metadata fields that should be added to reported logs.
Can only be specified if VPC flow logs for this subnetwork is enabled and "metadata" is set to CUSTOM_METADATA.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#metadata_fields ComputeSubnetwork#metadata_fields}
  */
  readonly metadataFields?: string[];
}

export function computeSubnetworkLogConfigToTerraform(struct?: ComputeSubnetworkLogConfigOutputReference | ComputeSubnetworkLogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_interval: cdktf.stringToTerraform(struct!.aggregationInterval),
    filter_expr: cdktf.stringToTerraform(struct!.filterExpr),
    flow_sampling: cdktf.numberToTerraform(struct!.flowSampling),
    metadata: cdktf.stringToTerraform(struct!.metadata),
    metadata_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metadataFields),
  }
}

export class ComputeSubnetworkLogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSubnetworkLogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationInterval = this._aggregationInterval;
    }
    if (this._filterExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterExpr = this._filterExpr;
    }
    if (this._flowSampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowSampling = this._flowSampling;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._metadataFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataFields = this._metadataFields;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSubnetworkLogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationInterval = undefined;
      this._filterExpr = undefined;
      this._flowSampling = undefined;
      this._metadata = undefined;
      this._metadataFields = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationInterval = value.aggregationInterval;
      this._filterExpr = value.filterExpr;
      this._flowSampling = value.flowSampling;
      this._metadata = value.metadata;
      this._metadataFields = value.metadataFields;
    }
  }

  // aggregation_interval - computed: false, optional: true, required: false
  private _aggregationInterval?: string; 
  public get aggregationInterval() {
    return this.getStringAttribute('aggregation_interval');
  }
  public set aggregationInterval(value: string) {
    this._aggregationInterval = value;
  }
  public resetAggregationInterval() {
    this._aggregationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationIntervalInput() {
    return this._aggregationInterval;
  }

  // filter_expr - computed: false, optional: true, required: false
  private _filterExpr?: string; 
  public get filterExpr() {
    return this.getStringAttribute('filter_expr');
  }
  public set filterExpr(value: string) {
    this._filterExpr = value;
  }
  public resetFilterExpr() {
    this._filterExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterExprInput() {
    return this._filterExpr;
  }

  // flow_sampling - computed: false, optional: true, required: false
  private _flowSampling?: number; 
  public get flowSampling() {
    return this.getNumberAttribute('flow_sampling');
  }
  public set flowSampling(value: number) {
    this._flowSampling = value;
  }
  public resetFlowSampling() {
    this._flowSampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowSamplingInput() {
    return this._flowSampling;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // metadata_fields - computed: false, optional: true, required: false
  private _metadataFields?: string[]; 
  public get metadataFields() {
    return cdktf.Fn.tolist(this.getListAttribute('metadata_fields'));
  }
  public set metadataFields(value: string[]) {
    this._metadataFields = value;
  }
  public resetMetadataFields() {
    this._metadataFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataFieldsInput() {
    return this._metadataFields;
  }
}
export interface ComputeSubnetworkTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#create ComputeSubnetwork#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#delete ComputeSubnetwork#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork#update ComputeSubnetwork#update}
  */
  readonly update?: string;
}

export function computeSubnetworkTimeoutsToTerraform(struct?: ComputeSubnetworkTimeoutsOutputReference | ComputeSubnetworkTimeouts | cdktf.IResolvable): any {
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

export class ComputeSubnetworkTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSubnetworkTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeSubnetworkTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork google_compute_subnetwork}
*/
export class ComputeSubnetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_subnetwork";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/compute_subnetwork google_compute_subnetwork} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeSubnetworkConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeSubnetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_subnetwork',
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
    this._description = config.description;
    this._id = config.id;
    this._ipCidrRange = config.ipCidrRange;
    this._ipv6AccessType = config.ipv6AccessType;
    this._name = config.name;
    this._network = config.network;
    this._privateIpGoogleAccess = config.privateIpGoogleAccess;
    this._privateIpv6GoogleAccess = config.privateIpv6GoogleAccess;
    this._project = config.project;
    this._purpose = config.purpose;
    this._region = config.region;
    this._role = config.role;
    this._secondaryIpRange.internalValue = config.secondaryIpRange;
    this._stackType = config.stackType;
    this._logConfig.internalValue = config.logConfig;
    this._timeouts.internalValue = config.timeouts;
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

  // external_ipv6_prefix - computed: true, optional: false, required: false
  public get externalIpv6Prefix() {
    return this.getStringAttribute('external_ipv6_prefix');
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

  // ip_cidr_range - computed: false, optional: false, required: true
  private _ipCidrRange?: string; 
  public get ipCidrRange() {
    return this.getStringAttribute('ip_cidr_range');
  }
  public set ipCidrRange(value: string) {
    this._ipCidrRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCidrRangeInput() {
    return this._ipCidrRange;
  }

  // ipv6_access_type - computed: false, optional: true, required: false
  private _ipv6AccessType?: string; 
  public get ipv6AccessType() {
    return this.getStringAttribute('ipv6_access_type');
  }
  public set ipv6AccessType(value: string) {
    this._ipv6AccessType = value;
  }
  public resetIpv6AccessType() {
    this._ipv6AccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AccessTypeInput() {
    return this._ipv6AccessType;
  }

  // ipv6_cidr_range - computed: true, optional: false, required: false
  public get ipv6CidrRange() {
    return this.getStringAttribute('ipv6_cidr_range');
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // private_ip_google_access - computed: false, optional: true, required: false
  private _privateIpGoogleAccess?: boolean | cdktf.IResolvable; 
  public get privateIpGoogleAccess() {
    return this.getBooleanAttribute('private_ip_google_access');
  }
  public set privateIpGoogleAccess(value: boolean | cdktf.IResolvable) {
    this._privateIpGoogleAccess = value;
  }
  public resetPrivateIpGoogleAccess() {
    this._privateIpGoogleAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpGoogleAccessInput() {
    return this._privateIpGoogleAccess;
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
    return this._privateIpv6GoogleAccess;
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

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // secondary_ip_range - computed: true, optional: true, required: false
  private _secondaryIpRange = new ComputeSubnetworkSecondaryIpRangeList(this, "secondary_ip_range", false);
  public get secondaryIpRange() {
    return this._secondaryIpRange;
  }
  public putSecondaryIpRange(value: ComputeSubnetworkSecondaryIpRange[] | cdktf.IResolvable) {
    this._secondaryIpRange.internalValue = value;
  }
  public resetSecondaryIpRange() {
    this._secondaryIpRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryIpRangeInput() {
    return this._secondaryIpRange.internalValue;
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

  // log_config - computed: false, optional: true, required: false
  private _logConfig = new ComputeSubnetworkLogConfigOutputReference(this, "log_config");
  public get logConfig() {
    return this._logConfig;
  }
  public putLogConfig(value: ComputeSubnetworkLogConfig) {
    this._logConfig.internalValue = value;
  }
  public resetLogConfig() {
    this._logConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConfigInput() {
    return this._logConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeSubnetworkTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeSubnetworkTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_cidr_range: cdktf.stringToTerraform(this._ipCidrRange),
      ipv6_access_type: cdktf.stringToTerraform(this._ipv6AccessType),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      private_ip_google_access: cdktf.booleanToTerraform(this._privateIpGoogleAccess),
      private_ipv6_google_access: cdktf.stringToTerraform(this._privateIpv6GoogleAccess),
      project: cdktf.stringToTerraform(this._project),
      purpose: cdktf.stringToTerraform(this._purpose),
      region: cdktf.stringToTerraform(this._region),
      role: cdktf.stringToTerraform(this._role),
      secondary_ip_range: cdktf.listMapper(computeSubnetworkSecondaryIpRangeToTerraform, false)(this._secondaryIpRange.internalValue),
      stack_type: cdktf.stringToTerraform(this._stackType),
      log_config: computeSubnetworkLogConfigToTerraform(this._logConfig.internalValue),
      timeouts: computeSubnetworkTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
