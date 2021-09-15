// https://www.terraform.io/docs/providers/google/d/monitoring_uptime_check_ips.html
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/monitoring_uptime_check_ips.html google_monitoring_uptime_check_ips}
*/
export class DataGoogleMonitoringUptimeCheckIps extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_monitoring_uptime_check_ips";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/monitoring_uptime_check_ips.html google_monitoring_uptime_check_ips} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleMonitoringUptimeCheckIpsConfig = {}
  */
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
