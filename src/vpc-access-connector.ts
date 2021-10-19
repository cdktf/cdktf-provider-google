// https://www.terraform.io/docs/providers/google/r/vpc_access_connector.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VpcAccessConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * The range of internal addresses that follows RFC 4632 notation. Example: '10.132.0.0/28'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector.html#ip_cidr_range VpcAccessConnector#ip_cidr_range}
  */
  readonly ipCidrRange?: string;
  /**
  * Maximum throughput of the connector in Mbps, must be greater than 'min_throughput'. Default is 300.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector.html#max_throughput VpcAccessConnector#max_throughput}
  */
  readonly maxThroughput?: number;
  /**
  * Minimum throughput of the connector in Mbps. Default and min is 200.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector.html#min_throughput VpcAccessConnector#min_throughput}
  */
  readonly minThroughput?: number;
  /**
  * The name of the resource (Max 25 characters).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector.html#name VpcAccessConnector#name}
  */
  readonly name: string;
  /**
  * Name of the VPC network. Required if 'ip_cidr_range' is set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector.html#network VpcAccessConnector#network}
  */
  readonly network?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector.html#project VpcAccessConnector#project}
  */
  readonly project?: string;
  /**
  * Region where the VPC Access connector resides. If it is not provided, the provider region is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector.html#region VpcAccessConnector#region}
  */
  readonly region?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector.html#timeouts VpcAccessConnector#timeouts}
  */
  readonly timeouts?: VpcAccessConnectorTimeouts;
}
export interface VpcAccessConnectorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector.html#create VpcAccessConnector#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector.html#delete VpcAccessConnector#delete}
  */
  readonly delete?: string;
}

function vpcAccessConnectorTimeoutsToTerraform(struct?: VpcAccessConnectorTimeoutsOutputReference | VpcAccessConnectorTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class VpcAccessConnectorTimeoutsOutputReference extends cdktf.ComplexObject {
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector.html google_vpc_access_connector}
*/
export class VpcAccessConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_vpc_access_connector";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/vpc_access_connector.html google_vpc_access_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VpcAccessConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: VpcAccessConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vpc_access_connector',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._ipCidrRange = config.ipCidrRange;
    this._maxThroughput = config.maxThroughput;
    this._minThroughput = config.minThroughput;
    this._name = config.name;
    this._network = config.network;
    this._project = config.project;
    this._region = config.region;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_cidr_range - computed: false, optional: true, required: false
  private _ipCidrRange?: string | undefined; 
  public get ipCidrRange() {
    return this.getStringAttribute('ip_cidr_range');
  }
  public set ipCidrRange(value: string | undefined) {
    this._ipCidrRange = value;
  }
  public resetIpCidrRange() {
    this._ipCidrRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCidrRangeInput() {
    return this._ipCidrRange
  }

  // max_throughput - computed: false, optional: true, required: false
  private _maxThroughput?: number | undefined; 
  public get maxThroughput() {
    return this.getNumberAttribute('max_throughput');
  }
  public set maxThroughput(value: number | undefined) {
    this._maxThroughput = value;
  }
  public resetMaxThroughput() {
    this._maxThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxThroughputInput() {
    return this._maxThroughput
  }

  // min_throughput - computed: false, optional: true, required: false
  private _minThroughput?: number | undefined; 
  public get minThroughput() {
    return this.getNumberAttribute('min_throughput');
  }
  public set minThroughput(value: number | undefined) {
    this._minThroughput = value;
  }
  public resetMinThroughput() {
    this._minThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minThroughputInput() {
    return this._minThroughput
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

  // network - computed: false, optional: true, required: false
  private _network?: string | undefined; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string | undefined) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VpcAccessConnectorTimeouts | undefined; 
  private __timeoutsOutput = new VpcAccessConnectorTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: VpcAccessConnectorTimeouts | undefined) {
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
      ip_cidr_range: cdktf.stringToTerraform(this._ipCidrRange),
      max_throughput: cdktf.numberToTerraform(this._maxThroughput),
      min_throughput: cdktf.numberToTerraform(this._minThroughput),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      timeouts: vpcAccessConnectorTimeoutsToTerraform(this._timeouts),
    };
  }
}
