// https://www.terraform.io/docs/providers/google/r/data_google_monitoring_uptime_check_ips.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleMonitoringUptimeCheckIpsConfig extends cdktf.TerraformMetaArguments {
}
export class DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps extends cdktf.ComplexComputedList {

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

// Resource

export class DataGoogleMonitoringUptimeCheckIps extends cdktf.TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleMonitoringUptimeCheckIpsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_monitoring_uptime_check_ips',
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // uptime_check_ips - computed: true, optional: false, required: false
  public uptimeCheckIps(index: string) {
    return new DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps(this, 'uptime_check_ips', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
