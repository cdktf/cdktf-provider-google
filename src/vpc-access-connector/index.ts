// https://www.terraform.io/docs/providers/google/r/vpc_access_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcAccessConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#id VpcAccessConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#ip_cidr_range VpcAccessConnector#ip_cidr_range}
  */
  readonly ipCidrRange?: string;
  /**
  * Machine type of VM Instance underlying connector. Default is e2-micro
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#machine_type VpcAccessConnector#machine_type}
  */
  readonly machineType?: string;
  /**
  * Maximum value of instances in autoscaling group underlying the connector.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#max_instances VpcAccessConnector#max_instances}
  */
  readonly maxInstances?: number;
  /**
  * Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'. Default is 300.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#max_throughput VpcAccessConnector#max_throughput}
  */
  readonly maxThroughput?: number;
  /**
  * Minimum value of instances in autoscaling group underlying the connector.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#min_instances VpcAccessConnector#min_instances}
  */
  readonly minInstances?: number;
  /**
  * Minimum throughput of the connector in Mbps. Default and min is 200.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#min_throughput VpcAccessConnector#min_throughput}
  */
  readonly minThroughput?: number;
  /**
  * The name of the resource (Max 25 characters).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#name VpcAccessConnector#name}
  */
  readonly name: string;
  /**
  * Name or self_link of the VPC network. Required if 'ip_cidr_range' is set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#network VpcAccessConnector#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#project VpcAccessConnector#project}
  */
  readonly project?: string;
  /**
  * Region where the VPC Access connector resides. If it is not provided, the provider region is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#region VpcAccessConnector#region}
  */
  readonly region?: string;
  /**
  * subnet block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#subnet VpcAccessConnector#subnet}
  */
  readonly subnet?: VpcAccessConnectorSubnet;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#timeouts VpcAccessConnector#timeouts}
  */
  readonly timeouts?: VpcAccessConnectorTimeouts;
}
export interface VpcAccessConnectorSubnet {
  /**
  * Subnet name (relative, not fully qualified). E.g. if the full subnet selfLink is
https://compute.googleapis.com/compute/v1/projects/{project}/regions/{region}/subnetworks/{subnetName} the correct input for this field would be {subnetName}"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#name VpcAccessConnector#name}
  */
  readonly name?: string;
  /**
  * Project in which the subnet exists. If not set, this project is assumed to be the project for which the connector create request was issued.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#project_id VpcAccessConnector#project_id}
  */
  readonly projectId?: string;
}

export function vpcAccessConnectorSubnetToTerraform(struct?: VpcAccessConnectorSubnetOutputReference | VpcAccessConnectorSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}

export class VpcAccessConnectorSubnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcAccessConnectorSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcAccessConnectorSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._projectId = value.projectId;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface VpcAccessConnectorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#create VpcAccessConnector#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector#delete VpcAccessConnector#delete}
  */
  readonly delete?: string;
}

export function vpcAccessConnectorTimeoutsToTerraform(struct?: VpcAccessConnectorTimeoutsOutputReference | VpcAccessConnectorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class VpcAccessConnectorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VpcAccessConnectorTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VpcAccessConnectorTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector google_vpc_access_connector}
*/
export class VpcAccessConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vpc_access_connector";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector google_vpc_access_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcAccessConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: VpcAccessConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vpc_access_connector',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.53.0',
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
    this._id = config.id;
    this._ipCidrRange = config.ipCidrRange;
    this._machineType = config.machineType;
    this._maxInstances = config.maxInstances;
    this._maxThroughput = config.maxThroughput;
    this._minInstances = config.minInstances;
    this._minThroughput = config.minThroughput;
    this._name = config.name;
    this._network = config.network;
    this._project = config.project;
    this._region = config.region;
    this._subnet.internalValue = config.subnet;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ip_cidr_range - computed: false, optional: true, required: false
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

  // machine_type - computed: false, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // max_instances - computed: true, optional: true, required: false
  private _maxInstances?: number; 
  public get maxInstances() {
    return this.getNumberAttribute('max_instances');
  }
  public set maxInstances(value: number) {
    this._maxInstances = value;
  }
  public resetMaxInstances() {
    this._maxInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstancesInput() {
    return this._maxInstances;
  }

  // max_throughput - computed: false, optional: true, required: false
  private _maxThroughput?: number; 
  public get maxThroughput() {
    return this.getNumberAttribute('max_throughput');
  }
  public set maxThroughput(value: number) {
    this._maxThroughput = value;
  }
  public resetMaxThroughput() {
    this._maxThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxThroughputInput() {
    return this._maxThroughput;
  }

  // min_instances - computed: true, optional: true, required: false
  private _minInstances?: number; 
  public get minInstances() {
    return this.getNumberAttribute('min_instances');
  }
  public set minInstances(value: number) {
    this._minInstances = value;
  }
  public resetMinInstances() {
    this._minInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstancesInput() {
    return this._minInstances;
  }

  // min_throughput - computed: false, optional: true, required: false
  private _minThroughput?: number; 
  public get minThroughput() {
    return this.getNumberAttribute('min_throughput');
  }
  public set minThroughput(value: number) {
    this._minThroughput = value;
  }
  public resetMinThroughput() {
    this._minThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minThroughputInput() {
    return this._minThroughput;
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

  // network - computed: true, optional: true, required: false
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet = new VpcAccessConnectorSubnetOutputReference(this, "subnet");
  public get subnet() {
    return this._subnet;
  }
  public putSubnet(value: VpcAccessConnectorSubnet) {
    this._subnet.internalValue = value;
  }
  public resetSubnet() {
    this._subnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VpcAccessConnectorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VpcAccessConnectorTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      ip_cidr_range: cdktf.stringToTerraform(this._ipCidrRange),
      machine_type: cdktf.stringToTerraform(this._machineType),
      max_instances: cdktf.numberToTerraform(this._maxInstances),
      max_throughput: cdktf.numberToTerraform(this._maxThroughput),
      min_instances: cdktf.numberToTerraform(this._minInstances),
      min_throughput: cdktf.numberToTerraform(this._minThroughput),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      subnet: vpcAccessConnectorSubnetToTerraform(this._subnet.internalValue),
      timeouts: vpcAccessConnectorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
