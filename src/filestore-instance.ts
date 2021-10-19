// https://www.terraform.io/docs/providers/google/r/filestore_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FilestoreInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance.html#description FilestoreInstance#description}
  */
  readonly description?: string;
  /**
  * Resource labels to represent user-provided metadata.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance.html#labels FilestoreInstance#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The resource name of the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance.html#name FilestoreInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance.html#project FilestoreInstance#project}
  */
  readonly project?: string;
  /**
  * The service tier of the instance. Possible values: ["TIER_UNSPECIFIED", "STANDARD", "PREMIUM", "BASIC_HDD", "BASIC_SSD", "HIGH_SCALE_SSD"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance.html#tier FilestoreInstance#tier}
  */
  readonly tier: string;
  /**
  * The name of the Filestore zone of the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance.html#zone FilestoreInstance#zone}
  */
  readonly zone: string;
  /**
  * file_shares block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance.html#file_shares FilestoreInstance#file_shares}
  */
  readonly fileShares: FilestoreInstanceFileShares;
  /**
  * networks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance.html#networks FilestoreInstance#networks}
  */
  readonly networks: FilestoreInstanceNetworks[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance.html#timeouts FilestoreInstance#timeouts}
  */
  readonly timeouts?: FilestoreInstanceTimeouts;
}
export interface FilestoreInstanceFileShares {
  /**
  * File share capacity in GiB. This must be at least 1024 GiB
for the standard tier, or 2560 GiB for the premium tier.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance.html#capacity_gb FilestoreInstance#capacity_gb}
  */
  readonly capacityGb: number;
  /**
  * The name of the fileshare (16 characters or less)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance.html#name FilestoreInstance#name}
  */
  readonly name: string;
}

function filestoreInstanceFileSharesToTerraform(struct?: FilestoreInstanceFileSharesOutputReference | FilestoreInstanceFileShares): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capacity_gb: cdktf.numberToTerraform(struct!.capacityGb),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class FilestoreInstanceFileSharesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // capacity_gb - computed: false, optional: false, required: true
  private _capacityGb?: number; 
  public get capacityGb() {
    return this.getNumberAttribute('capacity_gb');
  }
  public set capacityGb(value: number) {
    this._capacityGb = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityGbInput() {
    return this._capacityGb
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
}
export interface FilestoreInstanceNetworks {
  /**
  * IP versions for which the instance has
IP addresses assigned. Possible values: ["ADDRESS_MODE_UNSPECIFIED", "MODE_IPV4", "MODE_IPV6"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance.html#modes FilestoreInstance#modes}
  */
  readonly modes: string[];
  /**
  * The name of the GCE VPC network to which the
instance is connected.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance.html#network FilestoreInstance#network}
  */
  readonly network: string;
  /**
  * A /29 CIDR block that identifies the range of IP
addresses reserved for this instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance.html#reserved_ip_range FilestoreInstance#reserved_ip_range}
  */
  readonly reservedIpRange?: string;
}

function filestoreInstanceNetworksToTerraform(struct?: FilestoreInstanceNetworks): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    modes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.modes),
    network: cdktf.stringToTerraform(struct!.network),
    reserved_ip_range: cdktf.stringToTerraform(struct!.reservedIpRange),
  }
}

export interface FilestoreInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance.html#create FilestoreInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance.html#delete FilestoreInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/filestore_instance.html#update FilestoreInstance#update}
  */
  readonly update?: string;
}

function filestoreInstanceTimeoutsToTerraform(struct?: FilestoreInstanceTimeoutsOutputReference | FilestoreInstanceTimeouts): any {
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

export class FilestoreInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/filestore_instance.html google_filestore_instance}
*/
export class FilestoreInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_filestore_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/filestore_instance.html google_filestore_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FilestoreInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: FilestoreInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_filestore_instance',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._tier = config.tier;
    this._zone = config.zone;
    this._fileShares = config.fileShares;
    this._networks = config.networks;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
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

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone
  }

  // file_shares - computed: false, optional: false, required: true
  private _fileShares?: FilestoreInstanceFileShares; 
  private __fileSharesOutput = new FilestoreInstanceFileSharesOutputReference(this as any, "file_shares", true);
  public get fileShares() {
    return this.__fileSharesOutput;
  }
  public putFileShares(value: FilestoreInstanceFileShares) {
    this._fileShares = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSharesInput() {
    return this._fileShares
  }

  // networks - computed: false, optional: false, required: true
  private _networks?: FilestoreInstanceNetworks[]; 
  public get networks() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('networks') as any;
  }
  public set networks(value: FilestoreInstanceNetworks[]) {
    this._networks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FilestoreInstanceTimeouts | undefined; 
  private __timeoutsOutput = new FilestoreInstanceTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: FilestoreInstanceTimeouts | undefined) {
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
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      tier: cdktf.stringToTerraform(this._tier),
      zone: cdktf.stringToTerraform(this._zone),
      file_shares: filestoreInstanceFileSharesToTerraform(this._fileShares),
      networks: cdktf.listMapper(filestoreInstanceNetworksToTerraform)(this._networks),
      timeouts: filestoreInstanceTimeoutsToTerraform(this._timeouts),
    };
  }
}
