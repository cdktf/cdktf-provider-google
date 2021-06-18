// https://www.terraform.io/docs/providers/google/r/sql_database_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlDatabaseInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The MySQL, PostgreSQL or SQL Server (beta) version to use. Supported values include MYSQL_5_6, MYSQL_5_7, MYSQL_8_0, POSTGRES_9_6, POSTGRES_10, POSTGRES_11, POSTGRES_12, POSTGRES_13, SQLSERVER_2017_STANDARD, SQLSERVER_2017_ENTERPRISE, SQLSERVER_2017_EXPRESS, SQLSERVER_2017_WEB. Database Version Policies includes an up-to-date reference of supported versions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#database_version SqlDatabaseInstance#database_version}
  */
  readonly databaseVersion?: string;
  /**
  * Used to block Terraform from deleting a SQL Instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#deletion_protection SqlDatabaseInstance#deletion_protection}
  */
  readonly deletionProtection?: boolean;
  /**
  * The name of the instance that will act as the master in the replication setup. Note, this requires the master to have binary_log_enabled set, as well as existing backups.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#master_instance_name SqlDatabaseInstance#master_instance_name}
  */
  readonly masterInstanceName?: string;
  /**
  * The name of the instance. If the name is left blank, Terraform will randomly generate one when the instance is first created. This is done because after a name is used, it cannot be reused for up to one week.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#name SqlDatabaseInstance#name}
  */
  readonly name?: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#project SqlDatabaseInstance#project}
  */
  readonly project?: string;
  /**
  * The region the instance will sit in. Note, Cloud SQL is not available in all regions. A valid region must be provided to use this resource. If a region is not provided in the resource definition, the provider region will be used instead, but this will be an apply-time error for instances if the provider region is not supported with Cloud SQL. If you choose not to provide the region argument for this resource, make sure you understand this.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#region SqlDatabaseInstance#region}
  */
  readonly region?: string;
  /**
  * Initial root password. Required for MS SQL Server, ignored by MySQL and PostgreSQL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#root_password SqlDatabaseInstance#root_password}
  */
  readonly rootPassword?: string;
  /**
  * clone block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#clone SqlDatabaseInstance#clone}
  */
  readonly clone?: SqlDatabaseInstanceClone[];
  /**
  * replica_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#replica_configuration SqlDatabaseInstance#replica_configuration}
  */
  readonly replicaConfiguration?: SqlDatabaseInstanceReplicaConfiguration[];
  /**
  * restore_backup_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#restore_backup_context SqlDatabaseInstance#restore_backup_context}
  */
  readonly restoreBackupContext?: SqlDatabaseInstanceRestoreBackupContext[];
  /**
  * settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#settings SqlDatabaseInstance#settings}
  */
  readonly settings?: SqlDatabaseInstanceSettings[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#timeouts SqlDatabaseInstance#timeouts}
  */
  readonly timeouts?: SqlDatabaseInstanceTimeouts;
}
export class SqlDatabaseInstanceIpAddress extends cdktf.ComplexComputedList {

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
export class SqlDatabaseInstanceServerCaCert extends cdktf.ComplexComputedList {

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
export interface SqlDatabaseInstanceClone {
  /**
  * The timestamp of the point in time that should be restored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#point_in_time SqlDatabaseInstance#point_in_time}
  */
  readonly pointInTime?: string;
  /**
  * The name of the instance from which the point in time should be restored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#source_instance_name SqlDatabaseInstance#source_instance_name}
  */
  readonly sourceInstanceName: string;
}

function sqlDatabaseInstanceCloneToTerraform(struct?: SqlDatabaseInstanceClone): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    point_in_time: cdktf.stringToTerraform(struct!.pointInTime),
    source_instance_name: cdktf.stringToTerraform(struct!.sourceInstanceName),
  }
}

export interface SqlDatabaseInstanceReplicaConfiguration {
  /**
  * PEM representation of the trusted CA's x509 certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#ca_certificate SqlDatabaseInstance#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * PEM representation of the replica's x509 certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#client_certificate SqlDatabaseInstance#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * PEM representation of the replica's private key. The corresponding public key in encoded in the client_certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#client_key SqlDatabaseInstance#client_key}
  */
  readonly clientKey?: string;
  /**
  * The number of seconds between connect retries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#connect_retry_interval SqlDatabaseInstance#connect_retry_interval}
  */
  readonly connectRetryInterval?: number;
  /**
  * Path to a SQL file in Google Cloud Storage from which replica instances are created. Format is gs://bucket/filename.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#dump_file_path SqlDatabaseInstance#dump_file_path}
  */
  readonly dumpFilePath?: string;
  /**
  * Specifies if the replica is the failover target. If the field is set to true the replica will be designated as a failover replica. If the master instance fails, the replica instance will be promoted as the new master instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#failover_target SqlDatabaseInstance#failover_target}
  */
  readonly failoverTarget?: boolean;
  /**
  * Time in ms between replication heartbeats.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#master_heartbeat_period SqlDatabaseInstance#master_heartbeat_period}
  */
  readonly masterHeartbeatPeriod?: number;
  /**
  * Password for the replication connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#password SqlDatabaseInstance#password}
  */
  readonly password?: string;
  /**
  * Permissible ciphers for use in SSL encryption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#ssl_cipher SqlDatabaseInstance#ssl_cipher}
  */
  readonly sslCipher?: string;
  /**
  * Username for replication connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#username SqlDatabaseInstance#username}
  */
  readonly username?: string;
  /**
  * True if the master's common name value is checked during the SSL handshake.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#verify_server_certificate SqlDatabaseInstance#verify_server_certificate}
  */
  readonly verifyServerCertificate?: boolean;
}

function sqlDatabaseInstanceReplicaConfigurationToTerraform(struct?: SqlDatabaseInstanceReplicaConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    connect_retry_interval: cdktf.numberToTerraform(struct!.connectRetryInterval),
    dump_file_path: cdktf.stringToTerraform(struct!.dumpFilePath),
    failover_target: cdktf.booleanToTerraform(struct!.failoverTarget),
    master_heartbeat_period: cdktf.numberToTerraform(struct!.masterHeartbeatPeriod),
    password: cdktf.stringToTerraform(struct!.password),
    ssl_cipher: cdktf.stringToTerraform(struct!.sslCipher),
    username: cdktf.stringToTerraform(struct!.username),
    verify_server_certificate: cdktf.booleanToTerraform(struct!.verifyServerCertificate),
  }
}

export interface SqlDatabaseInstanceRestoreBackupContext {
  /**
  * The ID of the backup run to restore from.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#backup_run_id SqlDatabaseInstance#backup_run_id}
  */
  readonly backupRunId: number;
  /**
  * The ID of the instance that the backup was taken from.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#instance_id SqlDatabaseInstance#instance_id}
  */
  readonly instanceId?: string;
  /**
  * The full project ID of the source instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#project SqlDatabaseInstance#project}
  */
  readonly project?: string;
}

function sqlDatabaseInstanceRestoreBackupContextToTerraform(struct?: SqlDatabaseInstanceRestoreBackupContext): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backup_run_id: cdktf.numberToTerraform(struct!.backupRunId),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    project: cdktf.stringToTerraform(struct!.project),
  }
}

export interface SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings {
  /**
  * Number of backups to retain.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#retained_backups SqlDatabaseInstance#retained_backups}
  */
  readonly retainedBackups: number;
  /**
  * The unit that 'retainedBackups' represents. Defaults to COUNT
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#retention_unit SqlDatabaseInstance#retention_unit}
  */
  readonly retentionUnit?: string;
}

function sqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsToTerraform(struct?: SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    retained_backups: cdktf.numberToTerraform(struct!.retainedBackups),
    retention_unit: cdktf.stringToTerraform(struct!.retentionUnit),
  }
}

export interface SqlDatabaseInstanceSettingsBackupConfiguration {
  /**
  * True if binary logging is enabled. If settings.backup_configuration.enabled is false, this must be as well. Cannot be used with Postgres.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#binary_log_enabled SqlDatabaseInstance#binary_log_enabled}
  */
  readonly binaryLogEnabled?: boolean;
  /**
  * True if backup configuration is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#enabled SqlDatabaseInstance#enabled}
  */
  readonly enabled?: boolean;
  /**
  * Location of the backup configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#location SqlDatabaseInstance#location}
  */
  readonly location?: string;
  /**
  * True if Point-in-time recovery is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#point_in_time_recovery_enabled SqlDatabaseInstance#point_in_time_recovery_enabled}
  */
  readonly pointInTimeRecoveryEnabled?: boolean;
  /**
  * HH:MM format time indicating when backup configuration starts.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#start_time SqlDatabaseInstance#start_time}
  */
  readonly startTime?: string;
  /**
  * The number of days of transaction logs we retain for point in time restore, from 1-7.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#transaction_log_retention_days SqlDatabaseInstance#transaction_log_retention_days}
  */
  readonly transactionLogRetentionDays?: number;
  /**
  * backup_retention_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#backup_retention_settings SqlDatabaseInstance#backup_retention_settings}
  */
  readonly backupRetentionSettings?: SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings[];
}

function sqlDatabaseInstanceSettingsBackupConfigurationToTerraform(struct?: SqlDatabaseInstanceSettingsBackupConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    binary_log_enabled: cdktf.booleanToTerraform(struct!.binaryLogEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    location: cdktf.stringToTerraform(struct!.location),
    point_in_time_recovery_enabled: cdktf.booleanToTerraform(struct!.pointInTimeRecoveryEnabled),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    transaction_log_retention_days: cdktf.numberToTerraform(struct!.transactionLogRetentionDays),
    backup_retention_settings: cdktf.listMapper(sqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsToTerraform)(struct!.backupRetentionSettings),
  }
}

export interface SqlDatabaseInstanceSettingsDatabaseFlags {
  /**
  * Name of the flag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#name SqlDatabaseInstance#name}
  */
  readonly name: string;
  /**
  * Value of the flag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#value SqlDatabaseInstance#value}
  */
  readonly value: string;
}

function sqlDatabaseInstanceSettingsDatabaseFlagsToTerraform(struct?: SqlDatabaseInstanceSettingsDatabaseFlags): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SqlDatabaseInstanceSettingsInsightsConfig {
  /**
  * True if Query Insights feature is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#query_insights_enabled SqlDatabaseInstance#query_insights_enabled}
  */
  readonly queryInsightsEnabled?: boolean;
  /**
  * Maximum query length stored in bytes. Between 256 and 4500. Default to 1024.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#query_string_length SqlDatabaseInstance#query_string_length}
  */
  readonly queryStringLength?: number;
  /**
  * True if Query Insights will record application tags from query when enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#record_application_tags SqlDatabaseInstance#record_application_tags}
  */
  readonly recordApplicationTags?: boolean;
  /**
  * True if Query Insights will record client address when enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#record_client_address SqlDatabaseInstance#record_client_address}
  */
  readonly recordClientAddress?: boolean;
}

function sqlDatabaseInstanceSettingsInsightsConfigToTerraform(struct?: SqlDatabaseInstanceSettingsInsightsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    query_insights_enabled: cdktf.booleanToTerraform(struct!.queryInsightsEnabled),
    query_string_length: cdktf.numberToTerraform(struct!.queryStringLength),
    record_application_tags: cdktf.booleanToTerraform(struct!.recordApplicationTags),
    record_client_address: cdktf.booleanToTerraform(struct!.recordClientAddress),
  }
}

export interface SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#expiration_time SqlDatabaseInstance#expiration_time}
  */
  readonly expirationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#name SqlDatabaseInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#value SqlDatabaseInstance#value}
  */
  readonly value: string;
}

function sqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksToTerraform(struct?: SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expiration_time: cdktf.stringToTerraform(struct!.expirationTime),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface SqlDatabaseInstanceSettingsIpConfiguration {
  /**
  * Whether this Cloud SQL instance should be assigned a public IPV4 address. At least ipv4_enabled must be enabled or a private_network must be configured.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#ipv4_enabled SqlDatabaseInstance#ipv4_enabled}
  */
  readonly ipv4Enabled?: boolean;
  /**
  * The VPC network from which the Cloud SQL instance is accessible for private IP. For example, projects/myProject/global/networks/default. Specifying a network enables private IP. At least ipv4_enabled must be enabled or a private_network must be configured. This setting can be updated, but it cannot be removed after it is set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#private_network SqlDatabaseInstance#private_network}
  */
  readonly privateNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#require_ssl SqlDatabaseInstance#require_ssl}
  */
  readonly requireSsl?: boolean;
  /**
  * authorized_networks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#authorized_networks SqlDatabaseInstance#authorized_networks}
  */
  readonly authorizedNetworks?: SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks[];
}

function sqlDatabaseInstanceSettingsIpConfigurationToTerraform(struct?: SqlDatabaseInstanceSettingsIpConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ipv4_enabled: cdktf.booleanToTerraform(struct!.ipv4Enabled),
    private_network: cdktf.stringToTerraform(struct!.privateNetwork),
    require_ssl: cdktf.booleanToTerraform(struct!.requireSsl),
    authorized_networks: cdktf.listMapper(sqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksToTerraform)(struct!.authorizedNetworks),
  }
}

export interface SqlDatabaseInstanceSettingsLocationPreference {
  /**
  * A Google App Engine application whose zone to remain in. Must be in the same region as this instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#follow_gae_application SqlDatabaseInstance#follow_gae_application}
  */
  readonly followGaeApplication?: string;
  /**
  * The preferred compute engine zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#zone SqlDatabaseInstance#zone}
  */
  readonly zone?: string;
}

function sqlDatabaseInstanceSettingsLocationPreferenceToTerraform(struct?: SqlDatabaseInstanceSettingsLocationPreference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    follow_gae_application: cdktf.stringToTerraform(struct!.followGaeApplication),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}

export interface SqlDatabaseInstanceSettingsMaintenanceWindow {
  /**
  * Day of week (1-7), starting on Monday
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#day SqlDatabaseInstance#day}
  */
  readonly day?: number;
  /**
  * Hour of day (0-23), ignored if day not set
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#hour SqlDatabaseInstance#hour}
  */
  readonly hour?: number;
  /**
  * Receive updates earlier (canary) or later (stable)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#update_track SqlDatabaseInstance#update_track}
  */
  readonly updateTrack?: string;
}

function sqlDatabaseInstanceSettingsMaintenanceWindowToTerraform(struct?: SqlDatabaseInstanceSettingsMaintenanceWindow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    hour: cdktf.numberToTerraform(struct!.hour),
    update_track: cdktf.stringToTerraform(struct!.updateTrack),
  }
}

export interface SqlDatabaseInstanceSettings {
  /**
  * This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#activation_policy SqlDatabaseInstance#activation_policy}
  */
  readonly activationPolicy?: string;
  /**
  * This property is only applicable to First Generation instances. First Generation instances are now deprecated, see https://cloud.google.com/sql/docs/mysql/deprecation-notice for information on how to upgrade to Second Generation instances. A list of Google App Engine project names that are allowed to access this instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#authorized_gae_applications SqlDatabaseInstance#authorized_gae_applications}
  */
  readonly authorizedGaeApplications?: string[];
  /**
  * The availability type of the Cloud SQL instance, high availability
(REGIONAL) or single zone (ZONAL). For MySQL instances, ensure that
settings.backup_configuration.enabled and
settings.backup_configuration.binary_log_enabled are both set to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#availability_type SqlDatabaseInstance#availability_type}
  */
  readonly availabilityType?: string;
  /**
  * This property is only applicable to First Generation instances. First Generation instances are now deprecated, see here for information on how to upgrade to Second Generation instances. Specific to read instances, indicates when crash-safe replication flags are enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#crash_safe_replication SqlDatabaseInstance#crash_safe_replication}
  */
  readonly crashSafeReplication?: boolean;
  /**
  * Configuration to increase storage size automatically.  Note that future terraform apply calls will attempt to resize the disk to the value specified in disk_size - if this is set, do not set disk_size.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#disk_autoresize SqlDatabaseInstance#disk_autoresize}
  */
  readonly diskAutoresize?: boolean;
  /**
  * The maximum size, in GB, to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#disk_autoresize_limit SqlDatabaseInstance#disk_autoresize_limit}
  */
  readonly diskAutoresizeLimit?: number;
  /**
  * The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#disk_size SqlDatabaseInstance#disk_size}
  */
  readonly diskSize?: number;
  /**
  * The type of data disk: PD_SSD or PD_HDD.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#disk_type SqlDatabaseInstance#disk_type}
  */
  readonly diskType?: string;
  /**
  * Pricing plan for this instance, can only be PER_USE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#pricing_plan SqlDatabaseInstance#pricing_plan}
  */
  readonly pricingPlan?: string;
  /**
  * This property is only applicable to First Generation instances. First Generation instances are now deprecated, see here for information on how to upgrade to Second Generation instances. Replication type for this instance, can be one of ASYNCHRONOUS or SYNCHRONOUS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#replication_type SqlDatabaseInstance#replication_type}
  */
  readonly replicationType?: string;
  /**
  * The machine type to use. See tiers for more details and supported versions. Postgres supports only shared-core machine types, and custom machine types such as db-custom-2-13312. See the Custom Machine Type Documentation to learn about specifying custom machine types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#tier SqlDatabaseInstance#tier}
  */
  readonly tier: string;
  /**
  * A set of key/value user label pairs to assign to the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#user_labels SqlDatabaseInstance#user_labels}
  */
  readonly userLabels?: { [key: string]: string };
  /**
  * backup_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#backup_configuration SqlDatabaseInstance#backup_configuration}
  */
  readonly backupConfiguration?: SqlDatabaseInstanceSettingsBackupConfiguration[];
  /**
  * database_flags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#database_flags SqlDatabaseInstance#database_flags}
  */
  readonly databaseFlags?: SqlDatabaseInstanceSettingsDatabaseFlags[];
  /**
  * insights_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#insights_config SqlDatabaseInstance#insights_config}
  */
  readonly insightsConfig?: SqlDatabaseInstanceSettingsInsightsConfig[];
  /**
  * ip_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#ip_configuration SqlDatabaseInstance#ip_configuration}
  */
  readonly ipConfiguration?: SqlDatabaseInstanceSettingsIpConfiguration[];
  /**
  * location_preference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#location_preference SqlDatabaseInstance#location_preference}
  */
  readonly locationPreference?: SqlDatabaseInstanceSettingsLocationPreference[];
  /**
  * maintenance_window block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#maintenance_window SqlDatabaseInstance#maintenance_window}
  */
  readonly maintenanceWindow?: SqlDatabaseInstanceSettingsMaintenanceWindow[];
}

function sqlDatabaseInstanceSettingsToTerraform(struct?: SqlDatabaseInstanceSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    activation_policy: cdktf.stringToTerraform(struct!.activationPolicy),
    authorized_gae_applications: cdktf.listMapper(cdktf.stringToTerraform)(struct!.authorizedGaeApplications),
    availability_type: cdktf.stringToTerraform(struct!.availabilityType),
    crash_safe_replication: cdktf.booleanToTerraform(struct!.crashSafeReplication),
    disk_autoresize: cdktf.booleanToTerraform(struct!.diskAutoresize),
    disk_autoresize_limit: cdktf.numberToTerraform(struct!.diskAutoresizeLimit),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    pricing_plan: cdktf.stringToTerraform(struct!.pricingPlan),
    replication_type: cdktf.stringToTerraform(struct!.replicationType),
    tier: cdktf.stringToTerraform(struct!.tier),
    user_labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.userLabels),
    backup_configuration: cdktf.listMapper(sqlDatabaseInstanceSettingsBackupConfigurationToTerraform)(struct!.backupConfiguration),
    database_flags: cdktf.listMapper(sqlDatabaseInstanceSettingsDatabaseFlagsToTerraform)(struct!.databaseFlags),
    insights_config: cdktf.listMapper(sqlDatabaseInstanceSettingsInsightsConfigToTerraform)(struct!.insightsConfig),
    ip_configuration: cdktf.listMapper(sqlDatabaseInstanceSettingsIpConfigurationToTerraform)(struct!.ipConfiguration),
    location_preference: cdktf.listMapper(sqlDatabaseInstanceSettingsLocationPreferenceToTerraform)(struct!.locationPreference),
    maintenance_window: cdktf.listMapper(sqlDatabaseInstanceSettingsMaintenanceWindowToTerraform)(struct!.maintenanceWindow),
  }
}

export interface SqlDatabaseInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#create SqlDatabaseInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#delete SqlDatabaseInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html#update SqlDatabaseInstance#update}
  */
  readonly update?: string;
}

function sqlDatabaseInstanceTimeoutsToTerraform(struct?: SqlDatabaseInstanceTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html google_sql_database_instance}
*/
export class SqlDatabaseInstance extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance.html google_sql_database_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlDatabaseInstanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SqlDatabaseInstanceConfig = {}) {
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
    this._databaseVersion = config.databaseVersion;
    this._deletionProtection = config.deletionProtection;
    this._masterInstanceName = config.masterInstanceName;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._rootPassword = config.rootPassword;
    this._clone = config.clone;
    this._replicaConfiguration = config.replicaConfiguration;
    this._restoreBackupContext = config.restoreBackupContext;
    this._settings = config.settings;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // database_version - computed: false, optional: true, required: false
  private _databaseVersion?: string;
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }
  public set databaseVersion(value: string ) {
    this._databaseVersion = value;
  }
  public resetDatabaseVersion() {
    this._databaseVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseVersionInput() {
    return this._databaseVersion
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean;
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean ) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection
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
    return new SqlDatabaseInstanceIpAddress(this, 'ip_address', index);
  }

  // master_instance_name - computed: true, optional: true, required: false
  private _masterInstanceName?: string;
  public get masterInstanceName() {
    return this.getStringAttribute('master_instance_name');
  }
  public set masterInstanceName(value: string) {
    this._masterInstanceName = value;
  }
  public resetMasterInstanceName() {
    this._masterInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInstanceNameInput() {
    return this._masterInstanceName
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
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

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // root_password - computed: false, optional: true, required: false
  private _rootPassword?: string;
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
  public set rootPassword(value: string ) {
    this._rootPassword = value;
  }
  public resetRootPassword() {
    this._rootPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordInput() {
    return this._rootPassword
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // server_ca_cert - computed: true, optional: false, required: false
  public serverCaCert(index: string) {
    return new SqlDatabaseInstanceServerCaCert(this, 'server_ca_cert', index);
  }

  // service_account_email_address - computed: true, optional: false, required: false
  public get serviceAccountEmailAddress() {
    return this.getStringAttribute('service_account_email_address');
  }

  // clone - computed: false, optional: true, required: false
  private _clone?: SqlDatabaseInstanceClone[];
  public get clone() {
    return this.interpolationForAttribute('clone') as any;
  }
  public set clone(value: SqlDatabaseInstanceClone[] ) {
    this._clone = value;
  }
  public resetClone() {
    this._clone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneInput() {
    return this._clone
  }

  // replica_configuration - computed: false, optional: true, required: false
  private _replicaConfiguration?: SqlDatabaseInstanceReplicaConfiguration[];
  public get replicaConfiguration() {
    return this.interpolationForAttribute('replica_configuration') as any;
  }
  public set replicaConfiguration(value: SqlDatabaseInstanceReplicaConfiguration[] ) {
    this._replicaConfiguration = value;
  }
  public resetReplicaConfiguration() {
    this._replicaConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaConfigurationInput() {
    return this._replicaConfiguration
  }

  // restore_backup_context - computed: false, optional: true, required: false
  private _restoreBackupContext?: SqlDatabaseInstanceRestoreBackupContext[];
  public get restoreBackupContext() {
    return this.interpolationForAttribute('restore_backup_context') as any;
  }
  public set restoreBackupContext(value: SqlDatabaseInstanceRestoreBackupContext[] ) {
    this._restoreBackupContext = value;
  }
  public resetRestoreBackupContext() {
    this._restoreBackupContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreBackupContextInput() {
    return this._restoreBackupContext
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: SqlDatabaseInstanceSettings[];
  public get settings() {
    return this.interpolationForAttribute('settings') as any;
  }
  public set settings(value: SqlDatabaseInstanceSettings[] ) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SqlDatabaseInstanceTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: SqlDatabaseInstanceTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_version: cdktf.stringToTerraform(this._databaseVersion),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      master_instance_name: cdktf.stringToTerraform(this._masterInstanceName),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      root_password: cdktf.stringToTerraform(this._rootPassword),
      clone: cdktf.listMapper(sqlDatabaseInstanceCloneToTerraform)(this._clone),
      replica_configuration: cdktf.listMapper(sqlDatabaseInstanceReplicaConfigurationToTerraform)(this._replicaConfiguration),
      restore_backup_context: cdktf.listMapper(sqlDatabaseInstanceRestoreBackupContextToTerraform)(this._restoreBackupContext),
      settings: cdktf.listMapper(sqlDatabaseInstanceSettingsToTerraform)(this._settings),
      timeouts: sqlDatabaseInstanceTimeoutsToTerraform(this._timeouts),
    };
  }
}
