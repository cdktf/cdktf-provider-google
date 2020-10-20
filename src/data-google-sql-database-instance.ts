// https://www.terraform.io/docs/providers/google/r/data_google_sql_database_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleSqlDatabaseInstanceConfig extends TerraformMetaArguments {
  /** The name of the instance. If the name is left blank, Terraform will randomly generate one when the instance is first created. This is done because after a name is used, it cannot be reused for up to one week. */
  readonly name: string;
  /** The ID of the project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
}
export class DataGoogleSqlDatabaseInstanceIpAddress extends ComplexComputedList {

  // ip_address - computed: true, optional: false, required: true
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // time_to_retire - computed: true, optional: false, required: true
  public get timeToRetire() {
    return this.getStringAttribute('time_to_retire');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataGoogleSqlDatabaseInstanceReplicaConfiguration extends ComplexComputedList {

  // ca_certificate - computed: true, optional: false, required: true
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }

  // client_certificate - computed: true, optional: false, required: true
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: true
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // connect_retry_interval - computed: true, optional: false, required: true
  public get connectRetryInterval() {
    return this.getNumberAttribute('connect_retry_interval');
  }

  // dump_file_path - computed: true, optional: false, required: true
  public get dumpFilePath() {
    return this.getStringAttribute('dump_file_path');
  }

  // failover_target - computed: true, optional: false, required: true
  public get failoverTarget() {
    return this.getBooleanAttribute('failover_target');
  }

  // master_heartbeat_period - computed: true, optional: false, required: true
  public get masterHeartbeatPeriod() {
    return this.getNumberAttribute('master_heartbeat_period');
  }

  // password - computed: true, optional: false, required: true
  public get password() {
    return this.getStringAttribute('password');
  }

  // ssl_cipher - computed: true, optional: false, required: true
  public get sslCipher() {
    return this.getStringAttribute('ssl_cipher');
  }

  // username - computed: true, optional: false, required: true
  public get username() {
    return this.getStringAttribute('username');
  }

  // verify_server_certificate - computed: true, optional: false, required: true
  public get verifyServerCertificate() {
    return this.getBooleanAttribute('verify_server_certificate');
  }
}
export class DataGoogleSqlDatabaseInstanceServerCaCert extends ComplexComputedList {

  // cert - computed: true, optional: false, required: true
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // common_name - computed: true, optional: false, required: true
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // expiration_time - computed: true, optional: false, required: true
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // sha1_fingerprint - computed: true, optional: false, required: true
  public get sha1Fingerprint() {
    return this.getStringAttribute('sha1_fingerprint');
  }
}
export class DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration extends ComplexComputedList {

  // binary_log_enabled - computed: true, optional: false, required: true
  public get binaryLogEnabled() {
    return this.getBooleanAttribute('binary_log_enabled');
  }

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // location - computed: true, optional: false, required: true
  public get location() {
    return this.getStringAttribute('location');
  }

  // point_in_time_recovery_enabled - computed: true, optional: false, required: true
  public get pointInTimeRecoveryEnabled() {
    return this.getBooleanAttribute('point_in_time_recovery_enabled');
  }

  // start_time - computed: true, optional: false, required: true
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}
export class DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags extends ComplexComputedList {

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks extends ComplexComputedList {

  // expiration_time - computed: true, optional: false, required: true
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataGoogleSqlDatabaseInstanceSettingsIpConfiguration extends ComplexComputedList {

  // authorized_networks - computed: true, optional: false, required: true
  public get authorizedNetworks() {
    return 'not implemented' as any;
  }

  // ipv4_enabled - computed: true, optional: false, required: true
  public get ipv4Enabled() {
    return this.getBooleanAttribute('ipv4_enabled');
  }

  // private_network - computed: true, optional: false, required: true
  public get privateNetwork() {
    return this.getStringAttribute('private_network');
  }

  // require_ssl - computed: true, optional: false, required: true
  public get requireSsl() {
    return this.getBooleanAttribute('require_ssl');
  }
}
export class DataGoogleSqlDatabaseInstanceSettingsLocationPreference extends ComplexComputedList {

  // follow_gae_application - computed: true, optional: false, required: true
  public get followGaeApplication() {
    return this.getStringAttribute('follow_gae_application');
  }

  // zone - computed: true, optional: false, required: true
  public get zone() {
    return this.getStringAttribute('zone');
  }
}
export class DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow extends ComplexComputedList {

  // day - computed: true, optional: false, required: true
  public get day() {
    return this.getNumberAttribute('day');
  }

  // hour - computed: true, optional: false, required: true
  public get hour() {
    return this.getNumberAttribute('hour');
  }

  // update_track - computed: true, optional: false, required: true
  public get updateTrack() {
    return this.getStringAttribute('update_track');
  }
}
export class DataGoogleSqlDatabaseInstanceSettings extends ComplexComputedList {

  // activation_policy - computed: true, optional: false, required: true
  public get activationPolicy() {
    return this.getStringAttribute('activation_policy');
  }

  // authorized_gae_applications - computed: true, optional: false, required: true
  public get authorizedGaeApplications() {
    return this.getListAttribute('authorized_gae_applications');
  }

  // availability_type - computed: true, optional: false, required: true
  public get availabilityType() {
    return this.getStringAttribute('availability_type');
  }

  // backup_configuration - computed: true, optional: false, required: true
  public get backupConfiguration() {
    return 'not implemented' as any;
  }

  // crash_safe_replication - computed: true, optional: false, required: true
  public get crashSafeReplication() {
    return this.getBooleanAttribute('crash_safe_replication');
  }

  // database_flags - computed: true, optional: false, required: true
  public get databaseFlags() {
    return 'not implemented' as any;
  }

  // disk_autoresize - computed: true, optional: false, required: true
  public get diskAutoresize() {
    return this.getBooleanAttribute('disk_autoresize');
  }

  // disk_size - computed: true, optional: false, required: true
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // disk_type - computed: true, optional: false, required: true
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // ip_configuration - computed: true, optional: false, required: true
  public get ipConfiguration() {
    return 'not implemented' as any;
  }

  // location_preference - computed: true, optional: false, required: true
  public get locationPreference() {
    return 'not implemented' as any;
  }

  // maintenance_window - computed: true, optional: false, required: true
  public get maintenanceWindow() {
    return 'not implemented' as any;
  }

  // pricing_plan - computed: true, optional: false, required: true
  public get pricingPlan() {
    return this.getStringAttribute('pricing_plan');
  }

  // replication_type - computed: true, optional: false, required: true
  public get replicationType() {
    return this.getStringAttribute('replication_type');
  }

  // tier - computed: true, optional: false, required: true
  public get tier() {
    return this.getStringAttribute('tier');
  }

  // user_labels - computed: true, optional: false, required: true
  public get userLabels() {
    return 'not implemented' as any;
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getNumberAttribute('version');
  }
}

// Resource

export class DataGoogleSqlDatabaseInstance extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleSqlDatabaseInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_sql_database_instance',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_name - computed: true, optional: false, required: true
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // database_version - computed: true, optional: false, required: true
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }

  // deletion_protection - computed: true, optional: false, required: true
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // first_ip_address - computed: true, optional: false, required: true
  public get firstIpAddress() {
    return this.getStringAttribute('first_ip_address');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // ip_address - computed: true, optional: false, required: true
  public ipAddress(index: string) {
    return new DataGoogleSqlDatabaseInstanceIpAddress(this, 'ip_address', index);
  }

  // master_instance_name - computed: true, optional: false, required: true
  public get masterInstanceName() {
    return this.getStringAttribute('master_instance_name');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // private_ip_address - computed: true, optional: false, required: true
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project;
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // public_ip_address - computed: true, optional: false, required: true
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }

  // region - computed: true, optional: false, required: true
  public get region() {
    return this.getStringAttribute('region');
  }

  // replica_configuration - computed: true, optional: false, required: true
  public replicaConfiguration(index: string) {
    return new DataGoogleSqlDatabaseInstanceReplicaConfiguration(this, 'replica_configuration', index);
  }

  // root_password - computed: true, optional: false, required: true
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // server_ca_cert - computed: true, optional: false, required: true
  public serverCaCert(index: string) {
    return new DataGoogleSqlDatabaseInstanceServerCaCert(this, 'server_ca_cert', index);
  }

  // service_account_email_address - computed: true, optional: false, required: true
  public get serviceAccountEmailAddress() {
    return this.getStringAttribute('service_account_email_address');
  }

  // settings - computed: true, optional: false, required: true
  public settings(index: string) {
    return new DataGoogleSqlDatabaseInstanceSettings(this, 'settings', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: this._name,
      project: this._project,
    };
  }
}
