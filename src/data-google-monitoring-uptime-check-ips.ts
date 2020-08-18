// https://www.terraform.io/docs/providers/google/r/data_google_monitoring_uptime_check_ips.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleMonitoringUptimeCheckIpsConfig extends TerraformMetaArguments {
}
export class DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps extends ComplexComputedList {

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // region - computed: true, optional: false, required: true
  public get region() {
    return this.getStringAttribute('region');
  }
}

// Resource

export class DataGoogleMonitoringUptimeCheckIps extends TerraformDataSource {

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
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // uptime_check_ips - computed: true, optional: false, required: true
  public uptimeCheckIps(index: string) {
    return new DataGoogleMonitoringUptimeCheckIpsUptimeCheckIps(this, 'uptime_check_ips', index);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
