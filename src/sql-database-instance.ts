// https://www.terraform.io/docs/providers/google/r/sql_database_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlDatabaseInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The MySQL, PostgreSQL or SQL Server (beta) version to use. Supported values include MYSQL_5_6, MYSQL_5_7, MYSQL_8_0, POSTGRES_9_6, POSTGRES_10, POSTGRES_11, POSTGRES_12, POSTGRES_13, POSTGRES_14, SQLSERVER_2017_STANDARD, SQLSERVER_2017_ENTERPRISE, SQLSERVER_2017_EXPRESS, SQLSERVER_2017_WEB. Database Version Policies includes an up-to-date reference of supported versions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#database_version SqlDatabaseInstance#database_version}
  */
  readonly databaseVersion: string;
  /**
  * Used to block Terraform from deleting a SQL Instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#deletion_protection SqlDatabaseInstance#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#encryption_key_name SqlDatabaseInstance#encryption_key_name}
  */
  readonly encryptionKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#id SqlDatabaseInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the instance that will act as the master in the replication setup. Note, this requires the master to have binary_log_enabled set, as well as existing backups.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#master_instance_name SqlDatabaseInstance#master_instance_name}
  */
  readonly masterInstanceName?: string;
  /**
  * The name of the instance. If the name is left blank, Terraform will randomly generate one when the instance is first created. This is done because after a name is used, it cannot be reused for up to one week.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#name SqlDatabaseInstance#name}
  */
  readonly name?: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#project SqlDatabaseInstance#project}
  */
  readonly project?: string;
  /**
  * The region the instance will sit in. Note, Cloud SQL is not available in all regions. A valid region must be provided to use this resource. If a region is not provided in the resource definition, the provider region will be used instead, but this will be an apply-time error for instances if the provider region is not supported with Cloud SQL. If you choose not to provide the region argument for this resource, make sure you understand this.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#region SqlDatabaseInstance#region}
  */
  readonly region?: string;
  /**
  * Initial root password. Required for MS SQL Server.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#root_password SqlDatabaseInstance#root_password}
  */
  readonly rootPassword?: string;
  /**
  * clone block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#clone SqlDatabaseInstance#clone}
  */
  readonly clone?: SqlDatabaseInstanceClone;
  /**
  * replica_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#replica_configuration SqlDatabaseInstance#replica_configuration}
  */
  readonly replicaConfiguration?: SqlDatabaseInstanceReplicaConfiguration;
  /**
  * restore_backup_context block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#restore_backup_context SqlDatabaseInstance#restore_backup_context}
  */
  readonly restoreBackupContext?: SqlDatabaseInstanceRestoreBackupContext;
  /**
  * settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#settings SqlDatabaseInstance#settings}
  */
  readonly settings?: SqlDatabaseInstanceSettings;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#timeouts SqlDatabaseInstance#timeouts}
  */
  readonly timeouts?: SqlDatabaseInstanceTimeouts;
}
export interface SqlDatabaseInstanceIpAddress {
}

export function sqlDatabaseInstanceIpAddressToTerraform(struct?: SqlDatabaseInstanceIpAddress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class SqlDatabaseInstanceIpAddressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SqlDatabaseInstanceIpAddress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlDatabaseInstanceIpAddress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class SqlDatabaseInstanceIpAddressList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SqlDatabaseInstanceIpAddressOutputReference {
    return new SqlDatabaseInstanceIpAddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SqlDatabaseInstanceServerCaCert {
}

export function sqlDatabaseInstanceServerCaCertToTerraform(struct?: SqlDatabaseInstanceServerCaCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class SqlDatabaseInstanceServerCaCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SqlDatabaseInstanceServerCaCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlDatabaseInstanceServerCaCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class SqlDatabaseInstanceServerCaCertList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SqlDatabaseInstanceServerCaCertOutputReference {
    return new SqlDatabaseInstanceServerCaCertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SqlDatabaseInstanceClone {
  /**
  * The name of the allocated ip range for the private ip CloudSQL instance. For example: "google-managed-services-default". If set, the cloned instance ip will be created in the allocated range. The range name must comply with [RFC 1035](https://tools.ietf.org/html/rfc1035). Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])?.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#allocated_ip_range SqlDatabaseInstance#allocated_ip_range}
  */
  readonly allocatedIpRange?: string;
  /**
  * The timestamp of the point in time that should be restored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#point_in_time SqlDatabaseInstance#point_in_time}
  */
  readonly pointInTime?: string;
  /**
  * The name of the instance from which the point in time should be restored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#source_instance_name SqlDatabaseInstance#source_instance_name}
  */
  readonly sourceInstanceName: string;
}

export function sqlDatabaseInstanceCloneToTerraform(struct?: SqlDatabaseInstanceCloneOutputReference | SqlDatabaseInstanceClone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated_ip_range: cdktf.stringToTerraform(struct!.allocatedIpRange),
    point_in_time: cdktf.stringToTerraform(struct!.pointInTime),
    source_instance_name: cdktf.stringToTerraform(struct!.sourceInstanceName),
  }
}

export class SqlDatabaseInstanceCloneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlDatabaseInstanceClone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatedIpRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedIpRange = this._allocatedIpRange;
    }
    if (this._pointInTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointInTime = this._pointInTime;
    }
    if (this._sourceInstanceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInstanceName = this._sourceInstanceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlDatabaseInstanceClone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocatedIpRange = undefined;
      this._pointInTime = undefined;
      this._sourceInstanceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocatedIpRange = value.allocatedIpRange;
      this._pointInTime = value.pointInTime;
      this._sourceInstanceName = value.sourceInstanceName;
    }
  }

  // allocated_ip_range - computed: false, optional: true, required: false
  private _allocatedIpRange?: string; 
  public get allocatedIpRange() {
    return this.getStringAttribute('allocated_ip_range');
  }
  public set allocatedIpRange(value: string) {
    this._allocatedIpRange = value;
  }
  public resetAllocatedIpRange() {
    this._allocatedIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedIpRangeInput() {
    return this._allocatedIpRange;
  }

  // point_in_time - computed: false, optional: true, required: false
  private _pointInTime?: string; 
  public get pointInTime() {
    return this.getStringAttribute('point_in_time');
  }
  public set pointInTime(value: string) {
    this._pointInTime = value;
  }
  public resetPointInTime() {
    this._pointInTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeInput() {
    return this._pointInTime;
  }

  // source_instance_name - computed: false, optional: false, required: true
  private _sourceInstanceName?: string; 
  public get sourceInstanceName() {
    return this.getStringAttribute('source_instance_name');
  }
  public set sourceInstanceName(value: string) {
    this._sourceInstanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInstanceNameInput() {
    return this._sourceInstanceName;
  }
}
export interface SqlDatabaseInstanceReplicaConfiguration {
  /**
  * PEM representation of the trusted CA's x509 certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#ca_certificate SqlDatabaseInstance#ca_certificate}
  */
  readonly caCertificate?: string;
  /**
  * PEM representation of the replica's x509 certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#client_certificate SqlDatabaseInstance#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * PEM representation of the replica's private key. The corresponding public key in encoded in the client_certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#client_key SqlDatabaseInstance#client_key}
  */
  readonly clientKey?: string;
  /**
  * The number of seconds between connect retries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#connect_retry_interval SqlDatabaseInstance#connect_retry_interval}
  */
  readonly connectRetryInterval?: number;
  /**
  * Path to a SQL file in Google Cloud Storage from which replica instances are created. Format is gs://bucket/filename.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#dump_file_path SqlDatabaseInstance#dump_file_path}
  */
  readonly dumpFilePath?: string;
  /**
  * Specifies if the replica is the failover target. If the field is set to true the replica will be designated as a failover replica. If the master instance fails, the replica instance will be promoted as the new master instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#failover_target SqlDatabaseInstance#failover_target}
  */
  readonly failoverTarget?: boolean | cdktf.IResolvable;
  /**
  * Time in ms between replication heartbeats.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#master_heartbeat_period SqlDatabaseInstance#master_heartbeat_period}
  */
  readonly masterHeartbeatPeriod?: number;
  /**
  * Password for the replication connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#password SqlDatabaseInstance#password}
  */
  readonly password?: string;
  /**
  * Permissible ciphers for use in SSL encryption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#ssl_cipher SqlDatabaseInstance#ssl_cipher}
  */
  readonly sslCipher?: string;
  /**
  * Username for replication connection.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#username SqlDatabaseInstance#username}
  */
  readonly username?: string;
  /**
  * True if the master's common name value is checked during the SSL handshake.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#verify_server_certificate SqlDatabaseInstance#verify_server_certificate}
  */
  readonly verifyServerCertificate?: boolean | cdktf.IResolvable;
}

export function sqlDatabaseInstanceReplicaConfigurationToTerraform(struct?: SqlDatabaseInstanceReplicaConfigurationOutputReference | SqlDatabaseInstanceReplicaConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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

export class SqlDatabaseInstanceReplicaConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlDatabaseInstanceReplicaConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    if (this._connectRetryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectRetryInterval = this._connectRetryInterval;
    }
    if (this._dumpFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.dumpFilePath = this._dumpFilePath;
    }
    if (this._failoverTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverTarget = this._failoverTarget;
    }
    if (this._masterHeartbeatPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterHeartbeatPeriod = this._masterHeartbeatPeriod;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sslCipher !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCipher = this._sslCipher;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._verifyServerCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyServerCertificate = this._verifyServerCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlDatabaseInstanceReplicaConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
      this._clientCertificate = undefined;
      this._clientKey = undefined;
      this._connectRetryInterval = undefined;
      this._dumpFilePath = undefined;
      this._failoverTarget = undefined;
      this._masterHeartbeatPeriod = undefined;
      this._password = undefined;
      this._sslCipher = undefined;
      this._username = undefined;
      this._verifyServerCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
      this._clientCertificate = value.clientCertificate;
      this._clientKey = value.clientKey;
      this._connectRetryInterval = value.connectRetryInterval;
      this._dumpFilePath = value.dumpFilePath;
      this._failoverTarget = value.failoverTarget;
      this._masterHeartbeatPeriod = value.masterHeartbeatPeriod;
      this._password = value.password;
      this._sslCipher = value.sslCipher;
      this._username = value.username;
      this._verifyServerCertificate = value.verifyServerCertificate;
    }
  }

  // ca_certificate - computed: false, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // connect_retry_interval - computed: false, optional: true, required: false
  private _connectRetryInterval?: number; 
  public get connectRetryInterval() {
    return this.getNumberAttribute('connect_retry_interval');
  }
  public set connectRetryInterval(value: number) {
    this._connectRetryInterval = value;
  }
  public resetConnectRetryInterval() {
    this._connectRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectRetryIntervalInput() {
    return this._connectRetryInterval;
  }

  // dump_file_path - computed: false, optional: true, required: false
  private _dumpFilePath?: string; 
  public get dumpFilePath() {
    return this.getStringAttribute('dump_file_path');
  }
  public set dumpFilePath(value: string) {
    this._dumpFilePath = value;
  }
  public resetDumpFilePath() {
    this._dumpFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dumpFilePathInput() {
    return this._dumpFilePath;
  }

  // failover_target - computed: false, optional: true, required: false
  private _failoverTarget?: boolean | cdktf.IResolvable; 
  public get failoverTarget() {
    return this.getBooleanAttribute('failover_target');
  }
  public set failoverTarget(value: boolean | cdktf.IResolvable) {
    this._failoverTarget = value;
  }
  public resetFailoverTarget() {
    this._failoverTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverTargetInput() {
    return this._failoverTarget;
  }

  // master_heartbeat_period - computed: false, optional: true, required: false
  private _masterHeartbeatPeriod?: number; 
  public get masterHeartbeatPeriod() {
    return this.getNumberAttribute('master_heartbeat_period');
  }
  public set masterHeartbeatPeriod(value: number) {
    this._masterHeartbeatPeriod = value;
  }
  public resetMasterHeartbeatPeriod() {
    this._masterHeartbeatPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterHeartbeatPeriodInput() {
    return this._masterHeartbeatPeriod;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // ssl_cipher - computed: false, optional: true, required: false
  private _sslCipher?: string; 
  public get sslCipher() {
    return this.getStringAttribute('ssl_cipher');
  }
  public set sslCipher(value: string) {
    this._sslCipher = value;
  }
  public resetSslCipher() {
    this._sslCipher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCipherInput() {
    return this._sslCipher;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // verify_server_certificate - computed: false, optional: true, required: false
  private _verifyServerCertificate?: boolean | cdktf.IResolvable; 
  public get verifyServerCertificate() {
    return this.getBooleanAttribute('verify_server_certificate');
  }
  public set verifyServerCertificate(value: boolean | cdktf.IResolvable) {
    this._verifyServerCertificate = value;
  }
  public resetVerifyServerCertificate() {
    this._verifyServerCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyServerCertificateInput() {
    return this._verifyServerCertificate;
  }
}
export interface SqlDatabaseInstanceRestoreBackupContext {
  /**
  * The ID of the backup run to restore from.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#backup_run_id SqlDatabaseInstance#backup_run_id}
  */
  readonly backupRunId: number;
  /**
  * The ID of the instance that the backup was taken from.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#instance_id SqlDatabaseInstance#instance_id}
  */
  readonly instanceId?: string;
  /**
  * The full project ID of the source instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#project SqlDatabaseInstance#project}
  */
  readonly project?: string;
}

export function sqlDatabaseInstanceRestoreBackupContextToTerraform(struct?: SqlDatabaseInstanceRestoreBackupContextOutputReference | SqlDatabaseInstanceRestoreBackupContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_run_id: cdktf.numberToTerraform(struct!.backupRunId),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    project: cdktf.stringToTerraform(struct!.project),
  }
}

export class SqlDatabaseInstanceRestoreBackupContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlDatabaseInstanceRestoreBackupContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupRunId !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRunId = this._backupRunId;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlDatabaseInstanceRestoreBackupContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupRunId = undefined;
      this._instanceId = undefined;
      this._project = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupRunId = value.backupRunId;
      this._instanceId = value.instanceId;
      this._project = value.project;
    }
  }

  // backup_run_id - computed: false, optional: false, required: true
  private _backupRunId?: number; 
  public get backupRunId() {
    return this.getNumberAttribute('backup_run_id');
  }
  public set backupRunId(value: number) {
    this._backupRunId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRunIdInput() {
    return this._backupRunId;
  }

  // instance_id - computed: false, optional: true, required: false
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  public resetInstanceId() {
    this._instanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // project - computed: false, optional: true, required: false
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
    return this._project;
  }
}
export interface SqlDatabaseInstanceSettingsActiveDirectoryConfig {
  /**
  * Domain name of the Active Directory for SQL Server (e.g., mydomain.com).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#domain SqlDatabaseInstance#domain}
  */
  readonly domain: string;
}

export function sqlDatabaseInstanceSettingsActiveDirectoryConfigToTerraform(struct?: SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference | SqlDatabaseInstanceSettingsActiveDirectoryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
  }
}

export class SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlDatabaseInstanceSettingsActiveDirectoryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlDatabaseInstanceSettingsActiveDirectoryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }
}
export interface SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings {
  /**
  * Number of backups to retain.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#retained_backups SqlDatabaseInstance#retained_backups}
  */
  readonly retainedBackups: number;
  /**
  * The unit that 'retainedBackups' represents. Defaults to COUNT
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#retention_unit SqlDatabaseInstance#retention_unit}
  */
  readonly retentionUnit?: string;
}

export function sqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsToTerraform(struct?: SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference | SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retained_backups: cdktf.numberToTerraform(struct!.retainedBackups),
    retention_unit: cdktf.stringToTerraform(struct!.retentionUnit),
  }
}

export class SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retainedBackups !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainedBackups = this._retainedBackups;
    }
    if (this._retentionUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionUnit = this._retentionUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retainedBackups = undefined;
      this._retentionUnit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retainedBackups = value.retainedBackups;
      this._retentionUnit = value.retentionUnit;
    }
  }

  // retained_backups - computed: false, optional: false, required: true
  private _retainedBackups?: number; 
  public get retainedBackups() {
    return this.getNumberAttribute('retained_backups');
  }
  public set retainedBackups(value: number) {
    this._retainedBackups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retainedBackupsInput() {
    return this._retainedBackups;
  }

  // retention_unit - computed: false, optional: true, required: false
  private _retentionUnit?: string; 
  public get retentionUnit() {
    return this.getStringAttribute('retention_unit');
  }
  public set retentionUnit(value: string) {
    this._retentionUnit = value;
  }
  public resetRetentionUnit() {
    this._retentionUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionUnitInput() {
    return this._retentionUnit;
  }
}
export interface SqlDatabaseInstanceSettingsBackupConfiguration {
  /**
  * True if binary logging is enabled. If settings.backup_configuration.enabled is false, this must be as well. Can only be used with MySQL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#binary_log_enabled SqlDatabaseInstance#binary_log_enabled}
  */
  readonly binaryLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * True if backup configuration is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#enabled SqlDatabaseInstance#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Location of the backup configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#location SqlDatabaseInstance#location}
  */
  readonly location?: string;
  /**
  * True if Point-in-time recovery is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#point_in_time_recovery_enabled SqlDatabaseInstance#point_in_time_recovery_enabled}
  */
  readonly pointInTimeRecoveryEnabled?: boolean | cdktf.IResolvable;
  /**
  * HH:MM format time indicating when backup configuration starts.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#start_time SqlDatabaseInstance#start_time}
  */
  readonly startTime?: string;
  /**
  * The number of days of transaction logs we retain for point in time restore, from 1-7.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#transaction_log_retention_days SqlDatabaseInstance#transaction_log_retention_days}
  */
  readonly transactionLogRetentionDays?: number;
  /**
  * backup_retention_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#backup_retention_settings SqlDatabaseInstance#backup_retention_settings}
  */
  readonly backupRetentionSettings?: SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings;
}

export function sqlDatabaseInstanceSettingsBackupConfigurationToTerraform(struct?: SqlDatabaseInstanceSettingsBackupConfigurationOutputReference | SqlDatabaseInstanceSettingsBackupConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_log_enabled: cdktf.booleanToTerraform(struct!.binaryLogEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    location: cdktf.stringToTerraform(struct!.location),
    point_in_time_recovery_enabled: cdktf.booleanToTerraform(struct!.pointInTimeRecoveryEnabled),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    transaction_log_retention_days: cdktf.numberToTerraform(struct!.transactionLogRetentionDays),
    backup_retention_settings: sqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsToTerraform(struct!.backupRetentionSettings),
  }
}

export class SqlDatabaseInstanceSettingsBackupConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlDatabaseInstanceSettingsBackupConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binaryLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryLogEnabled = this._binaryLogEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._pointInTimeRecoveryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointInTimeRecoveryEnabled = this._pointInTimeRecoveryEnabled;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._transactionLogRetentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionLogRetentionDays = this._transactionLogRetentionDays;
    }
    if (this._backupRetentionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetentionSettings = this._backupRetentionSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlDatabaseInstanceSettingsBackupConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._binaryLogEnabled = undefined;
      this._enabled = undefined;
      this._location = undefined;
      this._pointInTimeRecoveryEnabled = undefined;
      this._startTime = undefined;
      this._transactionLogRetentionDays = undefined;
      this._backupRetentionSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._binaryLogEnabled = value.binaryLogEnabled;
      this._enabled = value.enabled;
      this._location = value.location;
      this._pointInTimeRecoveryEnabled = value.pointInTimeRecoveryEnabled;
      this._startTime = value.startTime;
      this._transactionLogRetentionDays = value.transactionLogRetentionDays;
      this._backupRetentionSettings.internalValue = value.backupRetentionSettings;
    }
  }

  // binary_log_enabled - computed: false, optional: true, required: false
  private _binaryLogEnabled?: boolean | cdktf.IResolvable; 
  public get binaryLogEnabled() {
    return this.getBooleanAttribute('binary_log_enabled');
  }
  public set binaryLogEnabled(value: boolean | cdktf.IResolvable) {
    this._binaryLogEnabled = value;
  }
  public resetBinaryLogEnabled() {
    this._binaryLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryLogEnabledInput() {
    return this._binaryLogEnabled;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // point_in_time_recovery_enabled - computed: false, optional: true, required: false
  private _pointInTimeRecoveryEnabled?: boolean | cdktf.IResolvable; 
  public get pointInTimeRecoveryEnabled() {
    return this.getBooleanAttribute('point_in_time_recovery_enabled');
  }
  public set pointInTimeRecoveryEnabled(value: boolean | cdktf.IResolvable) {
    this._pointInTimeRecoveryEnabled = value;
  }
  public resetPointInTimeRecoveryEnabled() {
    this._pointInTimeRecoveryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointInTimeRecoveryEnabledInput() {
    return this._pointInTimeRecoveryEnabled;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // transaction_log_retention_days - computed: true, optional: true, required: false
  private _transactionLogRetentionDays?: number; 
  public get transactionLogRetentionDays() {
    return this.getNumberAttribute('transaction_log_retention_days');
  }
  public set transactionLogRetentionDays(value: number) {
    this._transactionLogRetentionDays = value;
  }
  public resetTransactionLogRetentionDays() {
    this._transactionLogRetentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionLogRetentionDaysInput() {
    return this._transactionLogRetentionDays;
  }

  // backup_retention_settings - computed: false, optional: true, required: false
  private _backupRetentionSettings = new SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettingsOutputReference(this, "backup_retention_settings");
  public get backupRetentionSettings() {
    return this._backupRetentionSettings;
  }
  public putBackupRetentionSettings(value: SqlDatabaseInstanceSettingsBackupConfigurationBackupRetentionSettings) {
    this._backupRetentionSettings.internalValue = value;
  }
  public resetBackupRetentionSettings() {
    this._backupRetentionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionSettingsInput() {
    return this._backupRetentionSettings.internalValue;
  }
}
export interface SqlDatabaseInstanceSettingsDatabaseFlags {
  /**
  * Name of the flag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#name SqlDatabaseInstance#name}
  */
  readonly name: string;
  /**
  * Value of the flag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#value SqlDatabaseInstance#value}
  */
  readonly value: string;
}

export function sqlDatabaseInstanceSettingsDatabaseFlagsToTerraform(struct?: SqlDatabaseInstanceSettingsDatabaseFlags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SqlDatabaseInstanceSettingsDatabaseFlags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlDatabaseInstanceSettingsDatabaseFlags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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
    return this._name;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SqlDatabaseInstanceSettingsDatabaseFlagsList extends cdktf.ComplexList {
  public internalValue? : SqlDatabaseInstanceSettingsDatabaseFlags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference {
    return new SqlDatabaseInstanceSettingsDatabaseFlagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SqlDatabaseInstanceSettingsInsightsConfig {
  /**
  * True if Query Insights feature is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#query_insights_enabled SqlDatabaseInstance#query_insights_enabled}
  */
  readonly queryInsightsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum query length stored in bytes. Between 256 and 4500. Default to 1024.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#query_string_length SqlDatabaseInstance#query_string_length}
  */
  readonly queryStringLength?: number;
  /**
  * True if Query Insights will record application tags from query when enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#record_application_tags SqlDatabaseInstance#record_application_tags}
  */
  readonly recordApplicationTags?: boolean | cdktf.IResolvable;
  /**
  * True if Query Insights will record client address when enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#record_client_address SqlDatabaseInstance#record_client_address}
  */
  readonly recordClientAddress?: boolean | cdktf.IResolvable;
}

export function sqlDatabaseInstanceSettingsInsightsConfigToTerraform(struct?: SqlDatabaseInstanceSettingsInsightsConfigOutputReference | SqlDatabaseInstanceSettingsInsightsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_insights_enabled: cdktf.booleanToTerraform(struct!.queryInsightsEnabled),
    query_string_length: cdktf.numberToTerraform(struct!.queryStringLength),
    record_application_tags: cdktf.booleanToTerraform(struct!.recordApplicationTags),
    record_client_address: cdktf.booleanToTerraform(struct!.recordClientAddress),
  }
}

export class SqlDatabaseInstanceSettingsInsightsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlDatabaseInstanceSettingsInsightsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryInsightsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryInsightsEnabled = this._queryInsightsEnabled;
    }
    if (this._queryStringLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStringLength = this._queryStringLength;
    }
    if (this._recordApplicationTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordApplicationTags = this._recordApplicationTags;
    }
    if (this._recordClientAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.recordClientAddress = this._recordClientAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlDatabaseInstanceSettingsInsightsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryInsightsEnabled = undefined;
      this._queryStringLength = undefined;
      this._recordApplicationTags = undefined;
      this._recordClientAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryInsightsEnabled = value.queryInsightsEnabled;
      this._queryStringLength = value.queryStringLength;
      this._recordApplicationTags = value.recordApplicationTags;
      this._recordClientAddress = value.recordClientAddress;
    }
  }

  // query_insights_enabled - computed: false, optional: true, required: false
  private _queryInsightsEnabled?: boolean | cdktf.IResolvable; 
  public get queryInsightsEnabled() {
    return this.getBooleanAttribute('query_insights_enabled');
  }
  public set queryInsightsEnabled(value: boolean | cdktf.IResolvable) {
    this._queryInsightsEnabled = value;
  }
  public resetQueryInsightsEnabled() {
    this._queryInsightsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInsightsEnabledInput() {
    return this._queryInsightsEnabled;
  }

  // query_string_length - computed: false, optional: true, required: false
  private _queryStringLength?: number; 
  public get queryStringLength() {
    return this.getNumberAttribute('query_string_length');
  }
  public set queryStringLength(value: number) {
    this._queryStringLength = value;
  }
  public resetQueryStringLength() {
    this._queryStringLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStringLengthInput() {
    return this._queryStringLength;
  }

  // record_application_tags - computed: false, optional: true, required: false
  private _recordApplicationTags?: boolean | cdktf.IResolvable; 
  public get recordApplicationTags() {
    return this.getBooleanAttribute('record_application_tags');
  }
  public set recordApplicationTags(value: boolean | cdktf.IResolvable) {
    this._recordApplicationTags = value;
  }
  public resetRecordApplicationTags() {
    this._recordApplicationTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordApplicationTagsInput() {
    return this._recordApplicationTags;
  }

  // record_client_address - computed: false, optional: true, required: false
  private _recordClientAddress?: boolean | cdktf.IResolvable; 
  public get recordClientAddress() {
    return this.getBooleanAttribute('record_client_address');
  }
  public set recordClientAddress(value: boolean | cdktf.IResolvable) {
    this._recordClientAddress = value;
  }
  public resetRecordClientAddress() {
    this._recordClientAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordClientAddressInput() {
    return this._recordClientAddress;
  }
}
export interface SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#expiration_time SqlDatabaseInstance#expiration_time}
  */
  readonly expirationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#name SqlDatabaseInstance#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#value SqlDatabaseInstance#value}
  */
  readonly value: string;
}

export function sqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksToTerraform(struct?: SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_time: cdktf.stringToTerraform(struct!.expirationTime),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTime = this._expirationTime;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expirationTime = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expirationTime = value.expirationTime;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // expiration_time - computed: false, optional: true, required: false
  private _expirationTime?: string; 
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }
  public set expirationTime(value: string) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
  }

  // name - computed: false, optional: true, required: false
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
    return this._name;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList extends cdktf.ComplexList {
  public internalValue? : SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference {
    return new SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SqlDatabaseInstanceSettingsIpConfiguration {
  /**
  * The name of the allocated ip range for the private ip CloudSQL instance. For example: "google-managed-services-default". If set, the instance ip will be created in the allocated range. The range name must comply with RFC 1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([-a-z0-9]*[a-z0-9])?.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#allocated_ip_range SqlDatabaseInstance#allocated_ip_range}
  */
  readonly allocatedIpRange?: string;
  /**
  * Whether this Cloud SQL instance should be assigned a public IPV4 address. At least ipv4_enabled must be enabled or a private_network must be configured.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#ipv4_enabled SqlDatabaseInstance#ipv4_enabled}
  */
  readonly ipv4Enabled?: boolean | cdktf.IResolvable;
  /**
  * The VPC network from which the Cloud SQL instance is accessible for private IP. For example, projects/myProject/global/networks/default. Specifying a network enables private IP. At least ipv4_enabled must be enabled or a private_network must be configured. This setting can be updated, but it cannot be removed after it is set.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#private_network SqlDatabaseInstance#private_network}
  */
  readonly privateNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#require_ssl SqlDatabaseInstance#require_ssl}
  */
  readonly requireSsl?: boolean | cdktf.IResolvable;
  /**
  * authorized_networks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#authorized_networks SqlDatabaseInstance#authorized_networks}
  */
  readonly authorizedNetworks?: SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks[] | cdktf.IResolvable;
}

export function sqlDatabaseInstanceSettingsIpConfigurationToTerraform(struct?: SqlDatabaseInstanceSettingsIpConfigurationOutputReference | SqlDatabaseInstanceSettingsIpConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated_ip_range: cdktf.stringToTerraform(struct!.allocatedIpRange),
    ipv4_enabled: cdktf.booleanToTerraform(struct!.ipv4Enabled),
    private_network: cdktf.stringToTerraform(struct!.privateNetwork),
    require_ssl: cdktf.booleanToTerraform(struct!.requireSsl),
    authorized_networks: cdktf.listMapper(sqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksToTerraform, true)(struct!.authorizedNetworks),
  }
}

export class SqlDatabaseInstanceSettingsIpConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlDatabaseInstanceSettingsIpConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocatedIpRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocatedIpRange = this._allocatedIpRange;
    }
    if (this._ipv4Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Enabled = this._ipv4Enabled;
    }
    if (this._privateNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateNetwork = this._privateNetwork;
    }
    if (this._requireSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSsl = this._requireSsl;
    }
    if (this._authorizedNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedNetworks = this._authorizedNetworks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlDatabaseInstanceSettingsIpConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocatedIpRange = undefined;
      this._ipv4Enabled = undefined;
      this._privateNetwork = undefined;
      this._requireSsl = undefined;
      this._authorizedNetworks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocatedIpRange = value.allocatedIpRange;
      this._ipv4Enabled = value.ipv4Enabled;
      this._privateNetwork = value.privateNetwork;
      this._requireSsl = value.requireSsl;
      this._authorizedNetworks.internalValue = value.authorizedNetworks;
    }
  }

  // allocated_ip_range - computed: false, optional: true, required: false
  private _allocatedIpRange?: string; 
  public get allocatedIpRange() {
    return this.getStringAttribute('allocated_ip_range');
  }
  public set allocatedIpRange(value: string) {
    this._allocatedIpRange = value;
  }
  public resetAllocatedIpRange() {
    this._allocatedIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedIpRangeInput() {
    return this._allocatedIpRange;
  }

  // ipv4_enabled - computed: false, optional: true, required: false
  private _ipv4Enabled?: boolean | cdktf.IResolvable; 
  public get ipv4Enabled() {
    return this.getBooleanAttribute('ipv4_enabled');
  }
  public set ipv4Enabled(value: boolean | cdktf.IResolvable) {
    this._ipv4Enabled = value;
  }
  public resetIpv4Enabled() {
    this._ipv4Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4EnabledInput() {
    return this._ipv4Enabled;
  }

  // private_network - computed: false, optional: true, required: false
  private _privateNetwork?: string; 
  public get privateNetwork() {
    return this.getStringAttribute('private_network');
  }
  public set privateNetwork(value: string) {
    this._privateNetwork = value;
  }
  public resetPrivateNetwork() {
    this._privateNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkInput() {
    return this._privateNetwork;
  }

  // require_ssl - computed: false, optional: true, required: false
  private _requireSsl?: boolean | cdktf.IResolvable; 
  public get requireSsl() {
    return this.getBooleanAttribute('require_ssl');
  }
  public set requireSsl(value: boolean | cdktf.IResolvable) {
    this._requireSsl = value;
  }
  public resetRequireSsl() {
    this._requireSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSslInput() {
    return this._requireSsl;
  }

  // authorized_networks - computed: false, optional: true, required: false
  private _authorizedNetworks = new SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworksList(this, "authorized_networks", true);
  public get authorizedNetworks() {
    return this._authorizedNetworks;
  }
  public putAuthorizedNetworks(value: SqlDatabaseInstanceSettingsIpConfigurationAuthorizedNetworks[] | cdktf.IResolvable) {
    this._authorizedNetworks.internalValue = value;
  }
  public resetAuthorizedNetworks() {
    this._authorizedNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedNetworksInput() {
    return this._authorizedNetworks.internalValue;
  }
}
export interface SqlDatabaseInstanceSettingsLocationPreference {
  /**
  * A Google App Engine application whose zone to remain in. Must be in the same region as this instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#follow_gae_application SqlDatabaseInstance#follow_gae_application}
  */
  readonly followGaeApplication?: string;
  /**
  * The preferred Compute Engine zone for the secondary/failover
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#secondary_zone SqlDatabaseInstance#secondary_zone}
  */
  readonly secondaryZone?: string;
  /**
  * The preferred compute engine zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#zone SqlDatabaseInstance#zone}
  */
  readonly zone?: string;
}

export function sqlDatabaseInstanceSettingsLocationPreferenceToTerraform(struct?: SqlDatabaseInstanceSettingsLocationPreferenceOutputReference | SqlDatabaseInstanceSettingsLocationPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    follow_gae_application: cdktf.stringToTerraform(struct!.followGaeApplication),
    secondary_zone: cdktf.stringToTerraform(struct!.secondaryZone),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}

export class SqlDatabaseInstanceSettingsLocationPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlDatabaseInstanceSettingsLocationPreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._followGaeApplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.followGaeApplication = this._followGaeApplication;
    }
    if (this._secondaryZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryZone = this._secondaryZone;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlDatabaseInstanceSettingsLocationPreference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._followGaeApplication = undefined;
      this._secondaryZone = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._followGaeApplication = value.followGaeApplication;
      this._secondaryZone = value.secondaryZone;
      this._zone = value.zone;
    }
  }

  // follow_gae_application - computed: false, optional: true, required: false
  private _followGaeApplication?: string; 
  public get followGaeApplication() {
    return this.getStringAttribute('follow_gae_application');
  }
  public set followGaeApplication(value: string) {
    this._followGaeApplication = value;
  }
  public resetFollowGaeApplication() {
    this._followGaeApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followGaeApplicationInput() {
    return this._followGaeApplication;
  }

  // secondary_zone - computed: false, optional: true, required: false
  private _secondaryZone?: string; 
  public get secondaryZone() {
    return this.getStringAttribute('secondary_zone');
  }
  public set secondaryZone(value: string) {
    this._secondaryZone = value;
  }
  public resetSecondaryZone() {
    this._secondaryZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryZoneInput() {
    return this._secondaryZone;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface SqlDatabaseInstanceSettingsMaintenanceWindow {
  /**
  * Day of week (1-7), starting on Monday
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#day SqlDatabaseInstance#day}
  */
  readonly day?: number;
  /**
  * Hour of day (0-23), ignored if day not set
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#hour SqlDatabaseInstance#hour}
  */
  readonly hour?: number;
  /**
  * Receive updates earlier (canary) or later (stable)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#update_track SqlDatabaseInstance#update_track}
  */
  readonly updateTrack?: string;
}

export function sqlDatabaseInstanceSettingsMaintenanceWindowToTerraform(struct?: SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference | SqlDatabaseInstanceSettingsMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day: cdktf.numberToTerraform(struct!.day),
    hour: cdktf.numberToTerraform(struct!.hour),
    update_track: cdktf.stringToTerraform(struct!.updateTrack),
  }
}

export class SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlDatabaseInstanceSettingsMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._day !== undefined) {
      hasAnyValues = true;
      internalValueResult.day = this._day;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._updateTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateTrack = this._updateTrack;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlDatabaseInstanceSettingsMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._day = undefined;
      this._hour = undefined;
      this._updateTrack = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._day = value.day;
      this._hour = value.hour;
      this._updateTrack = value.updateTrack;
    }
  }

  // day - computed: false, optional: true, required: false
  private _day?: number; 
  public get day() {
    return this.getNumberAttribute('day');
  }
  public set day(value: number) {
    this._day = value;
  }
  public resetDay() {
    this._day = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayInput() {
    return this._day;
  }

  // hour - computed: false, optional: true, required: false
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  public resetHour() {
    this._hour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // update_track - computed: false, optional: true, required: false
  private _updateTrack?: string; 
  public get updateTrack() {
    return this.getStringAttribute('update_track');
  }
  public set updateTrack(value: string) {
    this._updateTrack = value;
  }
  public resetUpdateTrack() {
    this._updateTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTrackInput() {
    return this._updateTrack;
  }
}
export interface SqlDatabaseInstanceSettingsPasswordValidationPolicy {
  /**
  * Password complexity.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#complexity SqlDatabaseInstance#complexity}
  */
  readonly complexity?: string;
  /**
  * Disallow username as a part of the password.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#disallow_username_substring SqlDatabaseInstance#disallow_username_substring}
  */
  readonly disallowUsernameSubstring?: boolean | cdktf.IResolvable;
  /**
  * Whether the password policy is enabled or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#enable_password_policy SqlDatabaseInstance#enable_password_policy}
  */
  readonly enablePasswordPolicy: boolean | cdktf.IResolvable;
  /**
  * Minimum number of characters allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#min_length SqlDatabaseInstance#min_length}
  */
  readonly minLength?: number;
  /**
  * Minimum interval after which the password can be changed. This flag is only supported for PostgresSQL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#password_change_interval SqlDatabaseInstance#password_change_interval}
  */
  readonly passwordChangeInterval?: string;
  /**
  * Number of previous passwords that cannot be reused.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#reuse_interval SqlDatabaseInstance#reuse_interval}
  */
  readonly reuseInterval?: number;
}

export function sqlDatabaseInstanceSettingsPasswordValidationPolicyToTerraform(struct?: SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference | SqlDatabaseInstanceSettingsPasswordValidationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    complexity: cdktf.stringToTerraform(struct!.complexity),
    disallow_username_substring: cdktf.booleanToTerraform(struct!.disallowUsernameSubstring),
    enable_password_policy: cdktf.booleanToTerraform(struct!.enablePasswordPolicy),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    password_change_interval: cdktf.stringToTerraform(struct!.passwordChangeInterval),
    reuse_interval: cdktf.numberToTerraform(struct!.reuseInterval),
  }
}

export class SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlDatabaseInstanceSettingsPasswordValidationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._complexity !== undefined) {
      hasAnyValues = true;
      internalValueResult.complexity = this._complexity;
    }
    if (this._disallowUsernameSubstring !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowUsernameSubstring = this._disallowUsernameSubstring;
    }
    if (this._enablePasswordPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePasswordPolicy = this._enablePasswordPolicy;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._passwordChangeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordChangeInterval = this._passwordChangeInterval;
    }
    if (this._reuseInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.reuseInterval = this._reuseInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlDatabaseInstanceSettingsPasswordValidationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._complexity = undefined;
      this._disallowUsernameSubstring = undefined;
      this._enablePasswordPolicy = undefined;
      this._minLength = undefined;
      this._passwordChangeInterval = undefined;
      this._reuseInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._complexity = value.complexity;
      this._disallowUsernameSubstring = value.disallowUsernameSubstring;
      this._enablePasswordPolicy = value.enablePasswordPolicy;
      this._minLength = value.minLength;
      this._passwordChangeInterval = value.passwordChangeInterval;
      this._reuseInterval = value.reuseInterval;
    }
  }

  // complexity - computed: false, optional: true, required: false
  private _complexity?: string; 
  public get complexity() {
    return this.getStringAttribute('complexity');
  }
  public set complexity(value: string) {
    this._complexity = value;
  }
  public resetComplexity() {
    this._complexity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complexityInput() {
    return this._complexity;
  }

  // disallow_username_substring - computed: false, optional: true, required: false
  private _disallowUsernameSubstring?: boolean | cdktf.IResolvable; 
  public get disallowUsernameSubstring() {
    return this.getBooleanAttribute('disallow_username_substring');
  }
  public set disallowUsernameSubstring(value: boolean | cdktf.IResolvable) {
    this._disallowUsernameSubstring = value;
  }
  public resetDisallowUsernameSubstring() {
    this._disallowUsernameSubstring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowUsernameSubstringInput() {
    return this._disallowUsernameSubstring;
  }

  // enable_password_policy - computed: false, optional: false, required: true
  private _enablePasswordPolicy?: boolean | cdktf.IResolvable; 
  public get enablePasswordPolicy() {
    return this.getBooleanAttribute('enable_password_policy');
  }
  public set enablePasswordPolicy(value: boolean | cdktf.IResolvable) {
    this._enablePasswordPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePasswordPolicyInput() {
    return this._enablePasswordPolicy;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // password_change_interval - computed: false, optional: true, required: false
  private _passwordChangeInterval?: string; 
  public get passwordChangeInterval() {
    return this.getStringAttribute('password_change_interval');
  }
  public set passwordChangeInterval(value: string) {
    this._passwordChangeInterval = value;
  }
  public resetPasswordChangeInterval() {
    this._passwordChangeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordChangeIntervalInput() {
    return this._passwordChangeInterval;
  }

  // reuse_interval - computed: false, optional: true, required: false
  private _reuseInterval?: number; 
  public get reuseInterval() {
    return this.getNumberAttribute('reuse_interval');
  }
  public set reuseInterval(value: number) {
    this._reuseInterval = value;
  }
  public resetReuseInterval() {
    this._reuseInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseIntervalInput() {
    return this._reuseInterval;
  }
}
export interface SqlDatabaseInstanceSettingsSqlServerAuditConfig {
  /**
  * The name of the destination bucket (e.g., gs://mybucket).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#bucket SqlDatabaseInstance#bucket}
  */
  readonly bucket: string;
  /**
  * How long to keep generated audit files. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"..
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#retention_interval SqlDatabaseInstance#retention_interval}
  */
  readonly retentionInterval?: string;
  /**
  * How often to upload generated audit files. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#upload_interval SqlDatabaseInstance#upload_interval}
  */
  readonly uploadInterval?: string;
}

export function sqlDatabaseInstanceSettingsSqlServerAuditConfigToTerraform(struct?: SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference | SqlDatabaseInstanceSettingsSqlServerAuditConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    retention_interval: cdktf.stringToTerraform(struct!.retentionInterval),
    upload_interval: cdktf.stringToTerraform(struct!.uploadInterval),
  }
}

export class SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlDatabaseInstanceSettingsSqlServerAuditConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._retentionInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionInterval = this._retentionInterval;
    }
    if (this._uploadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.uploadInterval = this._uploadInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlDatabaseInstanceSettingsSqlServerAuditConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._retentionInterval = undefined;
      this._uploadInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._retentionInterval = value.retentionInterval;
      this._uploadInterval = value.uploadInterval;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // retention_interval - computed: false, optional: true, required: false
  private _retentionInterval?: string; 
  public get retentionInterval() {
    return this.getStringAttribute('retention_interval');
  }
  public set retentionInterval(value: string) {
    this._retentionInterval = value;
  }
  public resetRetentionInterval() {
    this._retentionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionIntervalInput() {
    return this._retentionInterval;
  }

  // upload_interval - computed: false, optional: true, required: false
  private _uploadInterval?: string; 
  public get uploadInterval() {
    return this.getStringAttribute('upload_interval');
  }
  public set uploadInterval(value: string) {
    this._uploadInterval = value;
  }
  public resetUploadInterval() {
    this._uploadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadIntervalInput() {
    return this._uploadInterval;
  }
}
export interface SqlDatabaseInstanceSettings {
  /**
  * This specifies when the instance should be active. Can be either ALWAYS, NEVER or ON_DEMAND.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#activation_policy SqlDatabaseInstance#activation_policy}
  */
  readonly activationPolicy?: string;
  /**
  * The availability type of the Cloud SQL instance, high availability
(REGIONAL) or single zone (ZONAL). For all instances, ensure that
settings.backup_configuration.enabled is set to true.
For MySQL instances, ensure that settings.backup_configuration.binary_log_enabled is set to true.
For Postgres instances, ensure that settings.backup_configuration.point_in_time_recovery_enabled
is set to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#availability_type SqlDatabaseInstance#availability_type}
  */
  readonly availabilityType?: string;
  /**
  * The name of server instance collation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#collation SqlDatabaseInstance#collation}
  */
  readonly collation?: string;
  /**
  * Enables auto-resizing of the storage size. Defaults to true. Set to false if you want to set disk_size.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#disk_autoresize SqlDatabaseInstance#disk_autoresize}
  */
  readonly diskAutoresize?: boolean | cdktf.IResolvable;
  /**
  * The maximum size, in GB, to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#disk_autoresize_limit SqlDatabaseInstance#disk_autoresize_limit}
  */
  readonly diskAutoresizeLimit?: number;
  /**
  * The size of data disk, in GB. Size of a running instance cannot be reduced but can be increased. If you want to set this field, set disk_autoresize to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#disk_size SqlDatabaseInstance#disk_size}
  */
  readonly diskSize?: number;
  /**
  * The type of data disk: PD_SSD or PD_HDD.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#disk_type SqlDatabaseInstance#disk_type}
  */
  readonly diskType?: string;
  /**
  * Pricing plan for this instance, can only be PER_USE.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#pricing_plan SqlDatabaseInstance#pricing_plan}
  */
  readonly pricingPlan?: string;
  /**
  * The machine type to use. See tiers for more details and supported versions. Postgres supports only shared-core machine types, and custom machine types such as db-custom-2-13312. See the Custom Machine Type Documentation to learn about specifying custom machine types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#tier SqlDatabaseInstance#tier}
  */
  readonly tier: string;
  /**
  * A set of key/value user label pairs to assign to the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#user_labels SqlDatabaseInstance#user_labels}
  */
  readonly userLabels?: { [key: string]: string };
  /**
  * active_directory_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#active_directory_config SqlDatabaseInstance#active_directory_config}
  */
  readonly activeDirectoryConfig?: SqlDatabaseInstanceSettingsActiveDirectoryConfig;
  /**
  * backup_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#backup_configuration SqlDatabaseInstance#backup_configuration}
  */
  readonly backupConfiguration?: SqlDatabaseInstanceSettingsBackupConfiguration;
  /**
  * database_flags block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#database_flags SqlDatabaseInstance#database_flags}
  */
  readonly databaseFlags?: SqlDatabaseInstanceSettingsDatabaseFlags[] | cdktf.IResolvable;
  /**
  * insights_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#insights_config SqlDatabaseInstance#insights_config}
  */
  readonly insightsConfig?: SqlDatabaseInstanceSettingsInsightsConfig;
  /**
  * ip_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#ip_configuration SqlDatabaseInstance#ip_configuration}
  */
  readonly ipConfiguration?: SqlDatabaseInstanceSettingsIpConfiguration;
  /**
  * location_preference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#location_preference SqlDatabaseInstance#location_preference}
  */
  readonly locationPreference?: SqlDatabaseInstanceSettingsLocationPreference;
  /**
  * maintenance_window block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#maintenance_window SqlDatabaseInstance#maintenance_window}
  */
  readonly maintenanceWindow?: SqlDatabaseInstanceSettingsMaintenanceWindow;
  /**
  * password_validation_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#password_validation_policy SqlDatabaseInstance#password_validation_policy}
  */
  readonly passwordValidationPolicy?: SqlDatabaseInstanceSettingsPasswordValidationPolicy;
  /**
  * sql_server_audit_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#sql_server_audit_config SqlDatabaseInstance#sql_server_audit_config}
  */
  readonly sqlServerAuditConfig?: SqlDatabaseInstanceSettingsSqlServerAuditConfig;
}

export function sqlDatabaseInstanceSettingsToTerraform(struct?: SqlDatabaseInstanceSettingsOutputReference | SqlDatabaseInstanceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activation_policy: cdktf.stringToTerraform(struct!.activationPolicy),
    availability_type: cdktf.stringToTerraform(struct!.availabilityType),
    collation: cdktf.stringToTerraform(struct!.collation),
    disk_autoresize: cdktf.booleanToTerraform(struct!.diskAutoresize),
    disk_autoresize_limit: cdktf.numberToTerraform(struct!.diskAutoresizeLimit),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    pricing_plan: cdktf.stringToTerraform(struct!.pricingPlan),
    tier: cdktf.stringToTerraform(struct!.tier),
    user_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.userLabels),
    active_directory_config: sqlDatabaseInstanceSettingsActiveDirectoryConfigToTerraform(struct!.activeDirectoryConfig),
    backup_configuration: sqlDatabaseInstanceSettingsBackupConfigurationToTerraform(struct!.backupConfiguration),
    database_flags: cdktf.listMapper(sqlDatabaseInstanceSettingsDatabaseFlagsToTerraform, true)(struct!.databaseFlags),
    insights_config: sqlDatabaseInstanceSettingsInsightsConfigToTerraform(struct!.insightsConfig),
    ip_configuration: sqlDatabaseInstanceSettingsIpConfigurationToTerraform(struct!.ipConfiguration),
    location_preference: sqlDatabaseInstanceSettingsLocationPreferenceToTerraform(struct!.locationPreference),
    maintenance_window: sqlDatabaseInstanceSettingsMaintenanceWindowToTerraform(struct!.maintenanceWindow),
    password_validation_policy: sqlDatabaseInstanceSettingsPasswordValidationPolicyToTerraform(struct!.passwordValidationPolicy),
    sql_server_audit_config: sqlDatabaseInstanceSettingsSqlServerAuditConfigToTerraform(struct!.sqlServerAuditConfig),
  }
}

export class SqlDatabaseInstanceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlDatabaseInstanceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.activationPolicy = this._activationPolicy;
    }
    if (this._availabilityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityType = this._availabilityType;
    }
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._diskAutoresize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskAutoresize = this._diskAutoresize;
    }
    if (this._diskAutoresizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskAutoresizeLimit = this._diskAutoresizeLimit;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._pricingPlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.pricingPlan = this._pricingPlan;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    if (this._userLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.userLabels = this._userLabels;
    }
    if (this._activeDirectoryConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDirectoryConfig = this._activeDirectoryConfig?.internalValue;
    }
    if (this._backupConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupConfiguration = this._backupConfiguration?.internalValue;
    }
    if (this._databaseFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseFlags = this._databaseFlags?.internalValue;
    }
    if (this._insightsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insightsConfig = this._insightsConfig?.internalValue;
    }
    if (this._ipConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipConfiguration = this._ipConfiguration?.internalValue;
    }
    if (this._locationPreference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationPreference = this._locationPreference?.internalValue;
    }
    if (this._maintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindow = this._maintenanceWindow?.internalValue;
    }
    if (this._passwordValidationPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordValidationPolicy = this._passwordValidationPolicy?.internalValue;
    }
    if (this._sqlServerAuditConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlServerAuditConfig = this._sqlServerAuditConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlDatabaseInstanceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activationPolicy = undefined;
      this._availabilityType = undefined;
      this._collation = undefined;
      this._diskAutoresize = undefined;
      this._diskAutoresizeLimit = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._pricingPlan = undefined;
      this._tier = undefined;
      this._userLabels = undefined;
      this._activeDirectoryConfig.internalValue = undefined;
      this._backupConfiguration.internalValue = undefined;
      this._databaseFlags.internalValue = undefined;
      this._insightsConfig.internalValue = undefined;
      this._ipConfiguration.internalValue = undefined;
      this._locationPreference.internalValue = undefined;
      this._maintenanceWindow.internalValue = undefined;
      this._passwordValidationPolicy.internalValue = undefined;
      this._sqlServerAuditConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activationPolicy = value.activationPolicy;
      this._availabilityType = value.availabilityType;
      this._collation = value.collation;
      this._diskAutoresize = value.diskAutoresize;
      this._diskAutoresizeLimit = value.diskAutoresizeLimit;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._pricingPlan = value.pricingPlan;
      this._tier = value.tier;
      this._userLabels = value.userLabels;
      this._activeDirectoryConfig.internalValue = value.activeDirectoryConfig;
      this._backupConfiguration.internalValue = value.backupConfiguration;
      this._databaseFlags.internalValue = value.databaseFlags;
      this._insightsConfig.internalValue = value.insightsConfig;
      this._ipConfiguration.internalValue = value.ipConfiguration;
      this._locationPreference.internalValue = value.locationPreference;
      this._maintenanceWindow.internalValue = value.maintenanceWindow;
      this._passwordValidationPolicy.internalValue = value.passwordValidationPolicy;
      this._sqlServerAuditConfig.internalValue = value.sqlServerAuditConfig;
    }
  }

  // activation_policy - computed: false, optional: true, required: false
  private _activationPolicy?: string; 
  public get activationPolicy() {
    return this.getStringAttribute('activation_policy');
  }
  public set activationPolicy(value: string) {
    this._activationPolicy = value;
  }
  public resetActivationPolicy() {
    this._activationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationPolicyInput() {
    return this._activationPolicy;
  }

  // availability_type - computed: false, optional: true, required: false
  private _availabilityType?: string; 
  public get availabilityType() {
    return this.getStringAttribute('availability_type');
  }
  public set availabilityType(value: string) {
    this._availabilityType = value;
  }
  public resetAvailabilityType() {
    this._availabilityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityTypeInput() {
    return this._availabilityType;
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
  }

  // disk_autoresize - computed: false, optional: true, required: false
  private _diskAutoresize?: boolean | cdktf.IResolvable; 
  public get diskAutoresize() {
    return this.getBooleanAttribute('disk_autoresize');
  }
  public set diskAutoresize(value: boolean | cdktf.IResolvable) {
    this._diskAutoresize = value;
  }
  public resetDiskAutoresize() {
    this._diskAutoresize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAutoresizeInput() {
    return this._diskAutoresize;
  }

  // disk_autoresize_limit - computed: false, optional: true, required: false
  private _diskAutoresizeLimit?: number; 
  public get diskAutoresizeLimit() {
    return this.getNumberAttribute('disk_autoresize_limit');
  }
  public set diskAutoresizeLimit(value: number) {
    this._diskAutoresizeLimit = value;
  }
  public resetDiskAutoresizeLimit() {
    this._diskAutoresizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskAutoresizeLimitInput() {
    return this._diskAutoresizeLimit;
  }

  // disk_size - computed: true, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // pricing_plan - computed: false, optional: true, required: false
  private _pricingPlan?: string; 
  public get pricingPlan() {
    return this.getStringAttribute('pricing_plan');
  }
  public set pricingPlan(value: string) {
    this._pricingPlan = value;
  }
  public resetPricingPlan() {
    this._pricingPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingPlanInput() {
    return this._pricingPlan;
  }

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // user_labels - computed: true, optional: true, required: false
  private _userLabels?: { [key: string]: string }; 
  public get userLabels() {
    return this.getStringMapAttribute('user_labels');
  }
  public set userLabels(value: { [key: string]: string }) {
    this._userLabels = value;
  }
  public resetUserLabels() {
    this._userLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLabelsInput() {
    return this._userLabels;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // active_directory_config - computed: false, optional: true, required: false
  private _activeDirectoryConfig = new SqlDatabaseInstanceSettingsActiveDirectoryConfigOutputReference(this, "active_directory_config");
  public get activeDirectoryConfig() {
    return this._activeDirectoryConfig;
  }
  public putActiveDirectoryConfig(value: SqlDatabaseInstanceSettingsActiveDirectoryConfig) {
    this._activeDirectoryConfig.internalValue = value;
  }
  public resetActiveDirectoryConfig() {
    this._activeDirectoryConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDirectoryConfigInput() {
    return this._activeDirectoryConfig.internalValue;
  }

  // backup_configuration - computed: false, optional: true, required: false
  private _backupConfiguration = new SqlDatabaseInstanceSettingsBackupConfigurationOutputReference(this, "backup_configuration");
  public get backupConfiguration() {
    return this._backupConfiguration;
  }
  public putBackupConfiguration(value: SqlDatabaseInstanceSettingsBackupConfiguration) {
    this._backupConfiguration.internalValue = value;
  }
  public resetBackupConfiguration() {
    this._backupConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupConfigurationInput() {
    return this._backupConfiguration.internalValue;
  }

  // database_flags - computed: false, optional: true, required: false
  private _databaseFlags = new SqlDatabaseInstanceSettingsDatabaseFlagsList(this, "database_flags", false);
  public get databaseFlags() {
    return this._databaseFlags;
  }
  public putDatabaseFlags(value: SqlDatabaseInstanceSettingsDatabaseFlags[] | cdktf.IResolvable) {
    this._databaseFlags.internalValue = value;
  }
  public resetDatabaseFlags() {
    this._databaseFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFlagsInput() {
    return this._databaseFlags.internalValue;
  }

  // insights_config - computed: false, optional: true, required: false
  private _insightsConfig = new SqlDatabaseInstanceSettingsInsightsConfigOutputReference(this, "insights_config");
  public get insightsConfig() {
    return this._insightsConfig;
  }
  public putInsightsConfig(value: SqlDatabaseInstanceSettingsInsightsConfig) {
    this._insightsConfig.internalValue = value;
  }
  public resetInsightsConfig() {
    this._insightsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insightsConfigInput() {
    return this._insightsConfig.internalValue;
  }

  // ip_configuration - computed: false, optional: true, required: false
  private _ipConfiguration = new SqlDatabaseInstanceSettingsIpConfigurationOutputReference(this, "ip_configuration");
  public get ipConfiguration() {
    return this._ipConfiguration;
  }
  public putIpConfiguration(value: SqlDatabaseInstanceSettingsIpConfiguration) {
    this._ipConfiguration.internalValue = value;
  }
  public resetIpConfiguration() {
    this._ipConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigurationInput() {
    return this._ipConfiguration.internalValue;
  }

  // location_preference - computed: false, optional: true, required: false
  private _locationPreference = new SqlDatabaseInstanceSettingsLocationPreferenceOutputReference(this, "location_preference");
  public get locationPreference() {
    return this._locationPreference;
  }
  public putLocationPreference(value: SqlDatabaseInstanceSettingsLocationPreference) {
    this._locationPreference.internalValue = value;
  }
  public resetLocationPreference() {
    this._locationPreference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationPreferenceInput() {
    return this._locationPreference.internalValue;
  }

  // maintenance_window - computed: false, optional: true, required: false
  private _maintenanceWindow = new SqlDatabaseInstanceSettingsMaintenanceWindowOutputReference(this, "maintenance_window");
  public get maintenanceWindow() {
    return this._maintenanceWindow;
  }
  public putMaintenanceWindow(value: SqlDatabaseInstanceSettingsMaintenanceWindow) {
    this._maintenanceWindow.internalValue = value;
  }
  public resetMaintenanceWindow() {
    this._maintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowInput() {
    return this._maintenanceWindow.internalValue;
  }

  // password_validation_policy - computed: false, optional: true, required: false
  private _passwordValidationPolicy = new SqlDatabaseInstanceSettingsPasswordValidationPolicyOutputReference(this, "password_validation_policy");
  public get passwordValidationPolicy() {
    return this._passwordValidationPolicy;
  }
  public putPasswordValidationPolicy(value: SqlDatabaseInstanceSettingsPasswordValidationPolicy) {
    this._passwordValidationPolicy.internalValue = value;
  }
  public resetPasswordValidationPolicy() {
    this._passwordValidationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordValidationPolicyInput() {
    return this._passwordValidationPolicy.internalValue;
  }

  // sql_server_audit_config - computed: false, optional: true, required: false
  private _sqlServerAuditConfig = new SqlDatabaseInstanceSettingsSqlServerAuditConfigOutputReference(this, "sql_server_audit_config");
  public get sqlServerAuditConfig() {
    return this._sqlServerAuditConfig;
  }
  public putSqlServerAuditConfig(value: SqlDatabaseInstanceSettingsSqlServerAuditConfig) {
    this._sqlServerAuditConfig.internalValue = value;
  }
  public resetSqlServerAuditConfig() {
    this._sqlServerAuditConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlServerAuditConfigInput() {
    return this._sqlServerAuditConfig.internalValue;
  }
}
export interface SqlDatabaseInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#create SqlDatabaseInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#delete SqlDatabaseInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance#update SqlDatabaseInstance#update}
  */
  readonly update?: string;
}

export function sqlDatabaseInstanceTimeoutsToTerraform(struct?: SqlDatabaseInstanceTimeoutsOutputReference | SqlDatabaseInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class SqlDatabaseInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlDatabaseInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlDatabaseInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance google_sql_database_instance}
*/
export class SqlDatabaseInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_sql_database_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/sql_database_instance google_sql_database_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlDatabaseInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: SqlDatabaseInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_sql_database_instance',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
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
    this._databaseVersion = config.databaseVersion;
    this._deletionProtection = config.deletionProtection;
    this._encryptionKeyName = config.encryptionKeyName;
    this._id = config.id;
    this._masterInstanceName = config.masterInstanceName;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._rootPassword = config.rootPassword;
    this._clone.internalValue = config.clone;
    this._replicaConfiguration.internalValue = config.replicaConfiguration;
    this._restoreBackupContext.internalValue = config.restoreBackupContext;
    this._settings.internalValue = config.settings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_name - computed: true, optional: false, required: false
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }

  // database_version - computed: false, optional: false, required: true
  private _databaseVersion?: string; 
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }
  public set databaseVersion(value: string) {
    this._databaseVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseVersionInput() {
    return this._databaseVersion;
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // encryption_key_name - computed: true, optional: true, required: false
  private _encryptionKeyName?: string; 
  public get encryptionKeyName() {
    return this.getStringAttribute('encryption_key_name');
  }
  public set encryptionKeyName(value: string) {
    this._encryptionKeyName = value;
  }
  public resetEncryptionKeyName() {
    this._encryptionKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyNameInput() {
    return this._encryptionKeyName;
  }

  // first_ip_address - computed: true, optional: false, required: false
  public get firstIpAddress() {
    return this.getStringAttribute('first_ip_address');
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

  // ip_address - computed: true, optional: false, required: false
  private _ipAddress = new SqlDatabaseInstanceIpAddressList(this, "ip_address", false);
  public get ipAddress() {
    return this._ipAddress;
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
    return this._masterInstanceName;
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
    return this._name;
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
    return this._project;
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
    return this._region;
  }

  // root_password - computed: false, optional: true, required: false
  private _rootPassword?: string; 
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
  public set rootPassword(value: string) {
    this._rootPassword = value;
  }
  public resetRootPassword() {
    this._rootPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordInput() {
    return this._rootPassword;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // server_ca_cert - computed: true, optional: false, required: false
  private _serverCaCert = new SqlDatabaseInstanceServerCaCertList(this, "server_ca_cert", false);
  public get serverCaCert() {
    return this._serverCaCert;
  }

  // service_account_email_address - computed: true, optional: false, required: false
  public get serviceAccountEmailAddress() {
    return this.getStringAttribute('service_account_email_address');
  }

  // clone - computed: false, optional: true, required: false
  private _clone = new SqlDatabaseInstanceCloneOutputReference(this, "clone");
  public get clone() {
    return this._clone;
  }
  public putClone(value: SqlDatabaseInstanceClone) {
    this._clone.internalValue = value;
  }
  public resetClone() {
    this._clone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneInput() {
    return this._clone.internalValue;
  }

  // replica_configuration - computed: false, optional: true, required: false
  private _replicaConfiguration = new SqlDatabaseInstanceReplicaConfigurationOutputReference(this, "replica_configuration");
  public get replicaConfiguration() {
    return this._replicaConfiguration;
  }
  public putReplicaConfiguration(value: SqlDatabaseInstanceReplicaConfiguration) {
    this._replicaConfiguration.internalValue = value;
  }
  public resetReplicaConfiguration() {
    this._replicaConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaConfigurationInput() {
    return this._replicaConfiguration.internalValue;
  }

  // restore_backup_context - computed: false, optional: true, required: false
  private _restoreBackupContext = new SqlDatabaseInstanceRestoreBackupContextOutputReference(this, "restore_backup_context");
  public get restoreBackupContext() {
    return this._restoreBackupContext;
  }
  public putRestoreBackupContext(value: SqlDatabaseInstanceRestoreBackupContext) {
    this._restoreBackupContext.internalValue = value;
  }
  public resetRestoreBackupContext() {
    this._restoreBackupContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreBackupContextInput() {
    return this._restoreBackupContext.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new SqlDatabaseInstanceSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: SqlDatabaseInstanceSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SqlDatabaseInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SqlDatabaseInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_version: cdktf.stringToTerraform(this._databaseVersion),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      encryption_key_name: cdktf.stringToTerraform(this._encryptionKeyName),
      id: cdktf.stringToTerraform(this._id),
      master_instance_name: cdktf.stringToTerraform(this._masterInstanceName),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      root_password: cdktf.stringToTerraform(this._rootPassword),
      clone: sqlDatabaseInstanceCloneToTerraform(this._clone.internalValue),
      replica_configuration: sqlDatabaseInstanceReplicaConfigurationToTerraform(this._replicaConfiguration.internalValue),
      restore_backup_context: sqlDatabaseInstanceRestoreBackupContextToTerraform(this._restoreBackupContext.internalValue),
      settings: sqlDatabaseInstanceSettingsToTerraform(this._settings.internalValue),
      timeouts: sqlDatabaseInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
