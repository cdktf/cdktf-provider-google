// https://www.terraform.io/docs/providers/google/d/netblock_ip_ranges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleNetblockIpRangesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/netblock_ip_ranges#id DataGoogleNetblockIpRanges#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/netblock_ip_ranges#range_type DataGoogleNetblockIpRanges#range_type}
  */
  readonly rangeType?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/netblock_ip_ranges google_netblock_ip_ranges}
*/
export class DataGoogleNetblockIpRanges extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_netblock_ip_ranges";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/netblock_ip_ranges google_netblock_ip_ranges} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleNetblockIpRangesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGoogleNetblockIpRangesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_netblock_ip_ranges',
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
    this._id = config.id;
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

  // range_type - computed: false, optional: true, required: false
  private _rangeType?: string; 
  public get rangeType() {
    return this.getStringAttribute('range_type');
  }
  public set rangeType(value: string) {
    this._rangeType = value;
  }
  public resetRangeType() {
    this._rangeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeTypeInput() {
    return this._rangeType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      range_type: cdktf.stringToTerraform(this._rangeType),
    };
  }
}
