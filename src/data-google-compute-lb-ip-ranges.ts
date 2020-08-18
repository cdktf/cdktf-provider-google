// https://www.terraform.io/docs/providers/google/r/data_google_compute_lb_ip_ranges.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataGoogleComputeLbIpRangesConfig extends TerraformMetaArguments {
}

// Resource

export class DataGoogleComputeLbIpRanges extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleComputeLbIpRangesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_compute_lb_ip_ranges',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // http_ssl_tcp_internal - computed: true, optional: false, required: true
  public get httpSslTcpInternal() {
    return this.getListAttribute('http_ssl_tcp_internal');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // network - computed: true, optional: false, required: true
  public get network() {
    return this.getListAttribute('network');
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
