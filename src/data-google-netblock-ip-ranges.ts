// https://www.terraform.io/docs/providers/google/r/data_google_netblock_ip_ranges.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleNetblockIpRangesConfig extends TerraformMetaArguments {
  readonly rangeType?: string;
}

// Resource

export class DataGoogleNetblockIpRanges extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleNetblockIpRangesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_netblock_ip_ranges',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._rangeType = config.rangeType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr_blocks - computed: true, optional: false, required: true
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }

  // cidr_blocks_ipv4 - computed: true, optional: false, required: true
  public get cidrBlocksIpv4() {
    return this.getListAttribute('cidr_blocks_ipv4');
  }

  // cidr_blocks_ipv6 - computed: true, optional: false, required: true
  public get cidrBlocksIpv6() {
    return this.getListAttribute('cidr_blocks_ipv6');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // range_type - computed: false, optional: true, required: false
  private _rangeType?: string;
  public get rangeType() {
    return this._rangeType;
  }
  public set rangeType(value: string | undefined) {
    this._rangeType = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      range_type: this._rangeType,
    };
  }
}
