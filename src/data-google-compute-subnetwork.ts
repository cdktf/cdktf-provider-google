// https://www.terraform.io/docs/providers/google/r/data_google_compute_subnetwork.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleComputeSubnetworkConfig extends TerraformMetaArguments {
  readonly name?: string;
  readonly project?: string;
  readonly region?: string;
  readonly selfLink?: string;
}
export class DataGoogleComputeSubnetworkSecondaryIpRange extends ComplexComputedList {

  // ip_cidr_range - computed: true, optional: false, required: true
  public get ipCidrRange() {
    return this.getStringAttribute('ip_cidr_range');
  }

  // range_name - computed: true, optional: false, required: true
  public get rangeName() {
    return this.getStringAttribute('range_name');
  }
}

// Resource

export class DataGoogleComputeSubnetwork extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleComputeSubnetworkConfig = {}) {
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
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._selfLink = config.selfLink;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
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

  // ip_cidr_range - computed: true, optional: false, required: true
  public get ipCidrRange() {
    return this.getStringAttribute('ip_cidr_range');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name;
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // network - computed: true, optional: false, required: true
  public get network() {
    return this.getStringAttribute('network');
  }

  // private_ip_google_access - computed: true, optional: false, required: true
  public get privateIpGoogleAccess() {
    return this.getBooleanAttribute('private_ip_google_access');
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

  // secondary_ip_range - computed: true, optional: false, required: true
  public secondaryIpRange(index: string) {
    return new DataGoogleComputeSubnetworkSecondaryIpRange(this, 'secondary_ip_range', index);
  }

  // self_link - computed: true, optional: true, required: false
  private _selfLink?: string;
  public get selfLink() {
    return this._selfLink ?? this.getStringAttribute('self_link');
  }
  public set selfLink(value: string | undefined) {
    this._selfLink = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      project: this._project,
      region: this._region,
      self_link: this._selfLink,
    };
  }
}
