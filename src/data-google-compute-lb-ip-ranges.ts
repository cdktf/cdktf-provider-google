// https://www.terraform.io/docs/providers/google/r/data_google_compute_lb_ip_ranges.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleComputeLbIpRangesConfig extends cdktf.TerraformMetaArguments {
}

// Resource

export class DataGoogleComputeLbIpRanges extends cdktf.TerraformDataSource {

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

  // http_ssl_tcp_internal - computed: true, optional: false, required: false
  public get httpSslTcpInternal() {
    return this.getListAttribute('http_ssl_tcp_internal');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getListAttribute('network');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
