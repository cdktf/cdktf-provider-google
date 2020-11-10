// https://www.terraform.io/docs/providers/google/r/sql_database_instance.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface SqlDatabaseInstanceConfig extends TerraformMetaArguments {
  /** The MySQL, PostgreSQL or SQL Server (beta) version to use. Supported values include MYSQL_5_6, MYSQL_5_7, POSTGRES_9_6,POSTGRES_11, SQLSERVER_2017_STANDARD, SQLSERVER_2017_ENTERPRISE, SQLSERVER_2017_EXPRESS, SQLSERVER_2017_WEB. Database Version Policies includes an up-to-date reference of supported versions. */
  readonly databaseVersion?: string;
  /** Used to block Terraform from deleting a SQL Instance. */
  readonly deletionProtection?: boolean;
  /** The name of the instance that will act as the master in the replication setup. Note, this requires the master to have binary_log_enabled set, as well as existing backups. */
  readonly masterInstanceName?: string;
  /** The name of the instance. If the name is left blank, Terraform will randomly generate one when the instance is first created. This is done because after a name is used, it cannot be reused for up to one week. */
  readonly name?: string;
  /** The ID of the project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** The region the instance will sit in. Note, Cloud SQL is not available in all regions - choose from one of the options listed here. A valid region must be provided to use this resource. If a region is not provided in the resource definition, the provider region will be used instead, but this will be an apply-time error for instances if the provider region is not supported with Cloud SQL. If you choose not to provide the region argument for this resource, make sure you understand this. */
  readonly region?: string;
  /** Initial root password. Required for MS SQL Server, ignored by MySQL and PostgreSQL. */
  readonly rootPassword?: string;
  /** replica_configuration block */
  readonly replicaConfiguration?: SqlDatabaseInstanceReplicaConfiguration[];
  /** settings block */
  readonly settings: SqlDatabaseInstanceSettings[];
  /** timeouts block */
  readonly timeouts?: SqlDatabaseInstanceTimeouts;
}
export class SqlDatabaseInstanceIpAddress extends ComplexComputedList {

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
export class SqlDatabaseInstanceServerCaCert extends ComplexComputedList {

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
export interface SqlDatabaseInstanceReplicaConfiguration {
  /** PEM representation of the trusted CA's x509 certificate. */
  readonly caCertificate?: string;
  /** PEM representation of the slave's x509 certificate. */
  readonly clientCertificate?: string;
  /** PEM representation of the slave's private key. The corresponding public key in encoded in the client_certificate. */
  readonly clientKey?: string;
  /** The number of seconds between connect retries. */
  readonly connectRetryInterval?: number;
  /** Path to a SQL file in Google Cloud Storage from which slave instances are created. Format is gs://bucket/filename. */
  readonly dumpFilePath?: string;
  /** Specifies if the replica is the failover target. If the field is set to true the replica will be designated as a failover replica. If the master instance fails, the replica instance will be promoted as the new master instance. */
  readonly failoverTarget?: boolean;
  /** Time in ms between replication heartbeats. */
  readonly masterHeartbeatPeriod?: number;
  /** Password for the replication connection. */
  readonly password?: string;
  /** Permissible ciphers for use in SSL encryption. */
  readonly sslCipher?: string;
  /** Username for replication connection. */
  readonly username?: string;
  /** True if the master's common name value is checked during the SSL handshake. */
  readonly verifyServerCertificate?: boolean;
}
export interface SqlDatabaseInstanceSettingsBackupConfiguration {
  /** True if binary logging is enabled. If settings.backup_configuration.enabled is false, this must be as well. Cannot be used with Postgres. */
  readonly binaryLogEnabled?: boolean;
  /** True if backup configuration is enabled. */
  readonly enabled?: boolean;
  /** Location of the backup configuration. */
  readonly location?: string;
  /** True if Point-in-time recovery is enabled. */
  readonly pointInTimeRecoveryEnabled?: boolean;
  /** HH:MM format time indicating when backup configuration starts. */
  readonly startTime?: string;
}
export interface SqlDatabaseInstanceSettingsDatabaseFlags {
  /** Name of the flag. */
  readonly name: string;
  /** Value of the flag. */
  readonly value: string;
}
export interface SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks {
  readonly expirationTime?: string;
  readonly name?: string;
  readonly value: string;
}
export interface SqlDatabaseInstanceSettingsIpConfiguration {
  /** Whether this Cloud SQL instance should be assigned a public IPV4 address. Either ipv4_enabled must be enabled or a private_network must be configured. */
  readonly ipv4Enabled?: boolean;
  /** The VPC network from which the Cloud SQL instance is accessible for private IP. For example, projects/myProject/global/networks/default. Specifying a network enables private IP. Either ipv4_enabled must be enabled or a private_network must be configured. This setting can be updated, but it cannot be removed after it is set. */
  readonly privateNetwork?: string;
  readonly requireSsl?: boolean;
  /** authorized_networks block */
  readonly authorizedNetworks?: SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks[];
}
export interface SqlDatabaseInstanceSettingsLocationPreference {
  /** A GAE application whose zone to remain in. Must be in the same region as this instance. */
  readonly followGaeApplication?: string;
  /** The preferred compute engine zone. */
  readonly zone?: string;
}
export interface SqlDatabaseInstanceSettingsMaintenanceWindow {
  /** Day of week (1-7), starting on Monday */
  readonly day?: number;
  /** Hour of day (0-23), ignored if day not set */
  readonly hour?: number;
  /** Receive updates earlier (canary) or later (stable) */
  readonly updateTrack?: string;
}
export interface SqlDatabaseInstanceSettings {
  /** This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND. */
  readonly activationPolicy?: string;
  /** This property is only applicable to First Generation instances. First Generation instances are now deprecated, see https://cloud.google.com/sql/docs/mysql/deprecation-notice for information on how to upgrade to Second Generation instances. A list of Google App Engine project names that are allowed to access this instance. */
  readonly authorizedGaeApplications?: string[];
  /** The availability type of the Cloud SQL instance, high availability
(REGIONAL) or single zone (ZONAL). For MySQL instances, ensure that
settings.backup_configuration.enabled and
settings.backup_configuration.binary_log_enabled are both set to true. */
  readonly availabilityType?: string;
  /** This property is only applicable to First Generation instances. First Generation instances are now deprecated, see here for information on how to upgrade to Second Generation instances. Specific to read instances, indicates when crash-safe replication flags are enabled. */
  readonly crashSafeReplication?: boolean;
  /** Configuration to increase storage size automatically.  Note that future terraform apply calls will attempt to resize the disk to the value specified in disk_size - if this is set, do not set disk_size. */
  readonly diskAutoresize?: boolean;
  /** The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. */
  readonly diskSize?: number;
  /** The type of data disk: PD_SSD or PD_HDD. */
  readonly diskType?: string;
  /** Pricing plan for this instance, can only be PER_USE. */
  readonly pricingPlan?: string;
  /** This property is only applicable to First Generation instances. First Generation instances are now deprecated, see here for information on how to upgrade to Second Generation instances. Replication type for this instance, can be one of ASYNCHRONOUS or SYNCHRONOUS. */
  readonly replicationType?: string;
  /** The machine type to use. See tiers for more details and supported versions. Postgres supports only shared-core machine types such as db-f1-micro, and custom machine types such as db-custom-2-13312. See the Custom Machine Type Documentation to learn about specifying custom machine types. */
  readonly tier: string;
  /** A set of key/value user label pairs to assign to the instance. */
  readonly userLabels?: { [key: string]: string };
  /** backup_configuration block */
  readonly backupConfiguration?: SqlDatabaseInstanceSettingsBackupConfiguration[];
  /** database_flags block */
  readonly databaseFlags?: SqlDatabaseInstanceSettingsDatabaseFlags[];
  /** ip_configuration block */
  readonly ipConfiguration?: SqlDatabaseInstanceSettingsIpConfiguration[];
  /** location_preference block */
  readonly locationPreference?: SqlDatabaseInstanceSettingsLocationPreference[];
  /** maintenance_window block */
  readonly maintenanceWindow?: SqlDatabaseInstanceSettingsMaintenanceWindow[];
}
export interface SqlDatabaseInstanceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class SqlDatabaseInstance extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: SqlDatabaseInstanceConfig) {
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
    this._replicaConfiguration = config.replicaConfiguration;
    this._settings = config.settings;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_name - computed: true, optional: false, required: true
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // database_version - computed: false, optional: true, required: false
  private _databaseVersion?: string;
  public get databaseVersion() {
    return this._databaseVersion;
  }
  public set databaseVersion(value: string | undefined) {
    this._databaseVersion = value;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean;
  public get deletionProtection() {
    return this._deletionProtection;
  }
  public set deletionProtection(value: boolean | undefined) {
    this._deletionProtection = value;
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
    return new SqlDatabaseInstanceIpAddress(this, 'ip_address', index);
  }

  // master_instance_name - computed: true, optional: true, required: false
  private _masterInstanceName?: string;
  public get masterInstanceName() {
    return this._masterInstanceName ?? this.getStringAttribute('master_instance_name');
  }
  public set masterInstanceName(value: string | undefined) {
    this._masterInstanceName = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // private_ip_address - computed: true, optional: false, required: true
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // public_ip_address - computed: true, optional: false, required: true
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // root_password - computed: false, optional: true, required: false
  private _rootPassword?: string;
  public get rootPassword() {
    return this._rootPassword;
  }
  public set rootPassword(value: string | undefined) {
    this._rootPassword = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // server_ca_cert - computed: true, optional: false, required: true
  public serverCaCert(index: string) {
    return new SqlDatabaseInstanceServerCaCert(this, 'server_ca_cert', index);
  }

  // service_account_email_address - computed: true, optional: false, required: true
  public get serviceAccountEmailAddress() {
    return this.getStringAttribute('service_account_email_address');
  }

  // replica_configuration - computed: false, optional: true, required: false
  private _replicaConfiguration?: SqlDatabaseInstanceReplicaConfiguration[];
  public get replicaConfiguration() {
    return this._replicaConfiguration;
  }
  public set replicaConfiguration(value: SqlDatabaseInstanceReplicaConfiguration[] | undefined) {
    this._replicaConfiguration = value;
  }

  // settings - computed: false, optional: false, required: true
  private _settings: SqlDatabaseInstanceSettings[];
  public get settings() {
    return this._settings;
  }
  public set settings(value: SqlDatabaseInstanceSettings[]) {
    this._settings = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: SqlDatabaseInstanceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: SqlDatabaseInstanceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_version: this._databaseVersion,
      deletion_protection: this._deletionProtection,
      master_instance_name: this._masterInstanceName,
      name: this._name,
      project: this._project,
      region: this._region,
      root_password: this._rootPassword,
      replica_configuration: this._replicaConfiguration,
      settings: this._settings,
      timeouts: this._timeouts,
    };
  }
}
