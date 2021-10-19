// https://www.terraform.io/docs/providers/google/d/sql_database_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleSqlDatabaseInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the instance. If the name is left blank, Terraform will randomly generate one when the instance is first created. This is done because after a name is used, it cannot be reused for up to one week.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/sql_database_instance.html#name DataGoogleSqlDatabaseInstance#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/sql_database_instance.html#project DataGoogleSqlDatabaseInstance#project}
  */
  readonly project?: string;
}
export class DataGoogleSqlDatabaseInstanceClone extends cdktf.ComplexComputedList {

  // point_in_time - computed: true, optional: false, required: false
  public get pointInTime() {
    return this.getStringAttribute('point_in_time');
  }

  // source_instance_name - computed: true, optional: false, required: false
  public get sourceInstanceName() {
    return this.getStringAttribute('source_instance_name');
  }
}
export class DataGoogleSqlDatabaseInstanceIpAddress extends cdktf.ComplexComputedList {

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // time_to_retire - computed: true, optional: false, required: false
  public get timeToRetire() {
    return this.getStringAttribute('time_to_retire');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataGoogleSqlDatabaseInstanceReplicaConfiguration extends cdktf.ComplexComputedList {

  // ca_certificate - computed: true, optional: false, required: false
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // connect_retry_interval - computed: true, optional: false, required: false
  public get connectRetryInterval() {
    return this.getNumberAttribute('connect_retry_interval');
  }

  // dump_file_path - computed: true, optional: false, required: false
  public get dumpFilePath() {
    return this.getStringAttribute('dump_file_path');
  }

  // failover_target - computed: true, optional: false, required: false
  public get failoverTarget() {
    return this.getBooleanAttribute('failover_target') as any;
  }

  // master_heartbeat_period - computed: true, optional: false, required: false
  public get masterHeartbeatPeriod() {
    return this.getNumberAttribute('master_heartbeat_period');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // ssl_cipher - computed: true, optional: false, required: false
  public get sslCipher() {
    return this.getStringAttribute('ssl_cipher');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // verify_server_certificate - computed: true, optional: false, required: false
  public get verifyServerCertificate() {
    return this.getBooleanAttribute('verify_server_certificate') as any;
  }
}
export class DataGoogleSqlDatabaseInstanceRestoreBackupContext extends cdktf.ComplexComputedList {

  // backup_run_id - computed: true, optional: false, required: false
  public get backupRunId() {
    return this.getNumberAttribute('backup_run_id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }
}
export class DataGoogleSqlDatabaseInstanceServerCaCert extends cdktf.ComplexComputedList {

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // sha1_fingerprint - computed: true, optional: false, required: false
  public get sha1Fingerprint() {
    return this.getStringAttribute('sha1_fingerprint');
  }
}
export class DataGoogleSqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings extends cdktf.ComplexComputedList {

  // retained_backups - computed: true, optional: false, required: false
  public get retainedBackups() {
    return this.getNumberAttribute('retained_backups');
  }

  // retention_unit - computed: true, optional: false, required: false
  public get retentionUnit() {
    return this.getStringAttribute('retention_unit');
  }
}
export class DataGoogleSqlDatabaseInstanceSettingsBackupConfiguration extends cdktf.ComplexComputedList {

  // backup_retention_settings - computed: true, optional: false, required: false
  public get backupRetentionSettings() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('backup_retention_settings') as any;
  }

  // binary_log_enabled - computed: true, optional: false, required: false
  public get binaryLogEnabled() {
    return this.getBooleanAttribute('binary_log_enabled') as any;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // point_in_time_recovery_enabled - computed: true, optional: false, required: false
  public get pointInTimeRecoveryEnabled() {
    return this.getBooleanAttribute('point_in_time_recovery_enabled') as any;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // transaction_log_retention_days - computed: true, optional: false, required: false
  public get transactionLogRetentionDays() {
    return this.getNumberAttribute('transaction_log_retention_days');
  }
}
export class DataGoogleSqlDatabaseInstanceSettingsDatabaseFlags extends cdktf.ComplexComputedList {

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataGoogleSqlDatabaseInstanceSettingsInsightsConfig extends cdktf.ComplexComputedList {

  // query_insights_enabled - computed: true, optional: false, required: false
  public get queryInsightsEnabled() {
    return this.getBooleanAttribute('query_insights_enabled') as any;
  }

  // query_string_length - computed: true, optional: false, required: false
  public get queryStringLength() {
    return this.getNumberAttribute('query_string_length');
  }

  // record_application_tags - computed: true, optional: false, required: false
  public get recordApplicationTags() {
    return this.getBooleanAttribute('record_application_tags') as any;
  }

  // record_client_address - computed: true, optional: false, required: false
  public get recordClientAddress() {
    return this.getBooleanAttribute('record_client_address') as any;
  }
}
export class DataGoogleSqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks extends cdktf.ComplexComputedList {

  // expiration_time - computed: true, optional: false, required: false
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataGoogleSqlDatabaseInstanceSettingsIpConfiguration extends cdktf.ComplexComputedList {

  // authorized_networks - computed: true, optional: false, required: false
  public get authorizedNetworks() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('authorized_networks') as any;
  }

  // ipv4_enabled - computed: true, optional: false, required: false
  public get ipv4Enabled() {
    return this.getBooleanAttribute('ipv4_enabled') as any;
  }

  // private_network - computed: true, optional: false, required: false
  public get privateNetwork() {
    return this.getStringAttribute('private_network');
  }

  // require_ssl - computed: true, optional: false, required: false
  public get requireSsl() {
    return this.getBooleanAttribute('require_ssl') as any;
  }
}
export class DataGoogleSqlDatabaseInstanceSettingsLocationPreference extends cdktf.ComplexComputedList {

  // follow_gae_application - computed: true, optional: false, required: false
  public get followGaeApplication() {
    return this.getStringAttribute('follow_gae_application');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}
export class DataGoogleSqlDatabaseInstanceSettingsMaintenanceWindow extends cdktf.ComplexComputedList {

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getNumberAttribute('day');
  }

  // hour - computed: true, optional: false, required: false
  public get hour() {
    return this.getNumberAttribute('hour');
  }

  // update_track - computed: true, optional: false, required: false
  public get updateTrack() {
    return this.getStringAttribute('update_track');
  }
}
export class DataGoogleSqlDatabaseInstanceSettings extends cdktf.ComplexComputedList {

  // activation_policy - computed: true, optional: false, required: false
  public get activationPolicy() {
    return this.getStringAttribute('activation_policy');
  }

  // authorized_gae_applications - computed: true, optional: false, required: false
  public get authorizedGaeApplications() {
    return this.getListAttribute('authorized_gae_applications');
  }

  // availability_type - computed: true, optional: false, required: false
  public get availabilityType() {
    return this.getStringAttribute('availability_type');
  }

  // backup_configuration - computed: true, optional: false, required: false
  public get backupConfiguration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('backup_configuration') as any;
  }

  // collation - computed: true, optional: false, required: false
  public get collation() {
    return this.getStringAttribute('collation');
  }

  // crash_safe_replication - computed: true, optional: false, required: false
  public get crashSafeReplication() {
    return this.getBooleanAttribute('crash_safe_replication') as any;
  }

  // database_flags - computed: true, optional: false, required: false
  public get databaseFlags() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('database_flags') as any;
  }

  // disk_autoresize - computed: true, optional: false, required: false
  public get diskAutoresize() {
    return this.getBooleanAttribute('disk_autoresize') as any;
  }

  // disk_autoresize_limit - computed: true, optional: false, required: false
  public get diskAutoresizeLimit() {
    return this.getNumberAttribute('disk_autoresize_limit');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // insights_config - computed: true, optional: false, required: false
  public get insightsConfig() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('insights_config') as any;
  }

  // ip_configuration - computed: true, optional: false, required: false
  public get ipConfiguration() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('ip_configuration') as any;
  }

  // location_preference - computed: true, optional: false, required: false
  public get locationPreference() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('location_preference') as any;
  }

  // maintenance_window - computed: true, optional: false, required: false
  public get maintenanceWindow() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('maintenance_window') as any;
  }

  // pricing_plan - computed: true, optional: false, required: false
  public get pricingPlan() {
    return this.getStringAttribute('pricing_plan');
  }

  // replication_type - computed: true, optional: false, required: false
  public get replicationType() {
    return this.getStringAttribute('replication_type');
  }

  // tier - computed: true, optional: false, required: false
  public get tier() {
    return this.getStringAttribute('tier');
  }

  // user_labels - computed: true, optional: false, required: false
  public get userLabels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('user_labels') as any;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/sql_database_instance.html google_sql_database_instance}
*/
export class DataGoogleSqlDatabaseInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_sql_database_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/sql_database_instance.html google_sql_database_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleSqlDatabaseInstanceConfig
  */
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

  // clone - computed: true, optional: false, required: false
  public clone(index: string) {
    return new DataGoogleSqlDatabaseInstanceClone(this, 'clone', index);
  }

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // database_version - computed: true, optional: false, required: false
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection') as any;
  }

  // first_ip_address - computed: true, optional: false, required: false
  public get firstIpAddress() {
    return this.getStringAttribute('first_ip_address');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public ipAddress(index: string) {
    return new DataGoogleSqlDatabaseInstanceIpAddress(this, 'ip_address', index);
  }

  // master_instance_name - computed: true, optional: false, required: false
  public get masterInstanceName() {
    return this.getStringAttribute('master_instance_name');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // project - computed: false, optional: true, required: false
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // replica_configuration - computed: true, optional: false, required: false
  public replicaConfiguration(index: string) {
    return new DataGoogleSqlDatabaseInstanceReplicaConfiguration(this, 'replica_configuration', index);
  }

  // restore_backup_context - computed: true, optional: false, required: false
  public restoreBackupContext(index: string) {
    return new DataGoogleSqlDatabaseInstanceRestoreBackupContext(this, 'restore_backup_context', index);
  }

  // root_password - computed: true, optional: false, required: false
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // server_ca_cert - computed: true, optional: false, required: false
  public serverCaCert(index: string) {
    return new DataGoogleSqlDatabaseInstanceServerCaCert(this, 'server_ca_cert', index);
  }

  // service_account_email_address - computed: true, optional: false, required: false
  public get serviceAccountEmailAddress() {
    return this.getStringAttribute('service_account_email_address');
  }

  // settings - computed: true, optional: false, required: false
  public settings(index: string) {
    return new DataGoogleSqlDatabaseInstanceSettings(this, 'settings', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
