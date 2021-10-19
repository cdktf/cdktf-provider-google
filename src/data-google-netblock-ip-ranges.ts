// https://www.terraform.io/docs/providers/google/d/netblock_ip_ranges.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleNetblockIpRangesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/netblock_ip_ranges.html#range_type DataGoogleNetblockIpRanges#range_type}
  */
  readonly rangeType?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/netblock_ip_ranges.html google_netblock_ip_ranges}
*/
export class DataGoogleNetblockIpRanges extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_netblock_ip_ranges";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/netblock_ip_ranges.html google_netblock_ip_ranges} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleNetblockIpRangesConfig = {}
  */
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

  // cidr_blocks - computed: true, optional: false, required: false
  public get cidrBlocks() {
    return this.getListAttribute('cidr_blocks');
  }

  // cidr_blocks_ipv4 - computed: true, optional: false, required: false
  public get cidrBlocksIpv4() {
    return this.getListAttribute('cidr_blocks_ipv4');
  }

  // cidr_blocks_ipv6 - computed: true, optional: false, required: false
  public get cidrBlocksIpv6() {
    return this.getListAttribute('cidr_blocks_ipv6');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // range_type - computed: false, optional: true, required: false
  private _rangeType?: string | undefined; 
  public get rangeType() {
    return this.getStringAttribute('range_type');
  }
  public set rangeType(value: string | undefined) {
    this._rangeType = value;
  }
  public resetRangeType() {
    this._rangeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeTypeInput() {
    return this._rangeType
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      range_type: cdktf.stringToTerraform(this._rangeType),
    };
  }
}
