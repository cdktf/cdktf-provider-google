/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/oracle_database_cloud_vm_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleOracleDatabaseCloudVmClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the VM Cluster to create. This value is restricted
  * to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63
  * characters in length. The value must start with a letter and end with
  * a letter or a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/oracle_database_cloud_vm_cluster#cloud_vm_cluster_id DataGoogleOracleDatabaseCloudVmCluster#cloud_vm_cluster_id}
  */
  readonly cloudVmClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/oracle_database_cloud_vm_cluster#id DataGoogleOracleDatabaseCloudVmCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbNode'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/oracle_database_cloud_vm_cluster#location DataGoogleOracleDatabaseCloudVmCluster#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/oracle_database_cloud_vm_cluster#project DataGoogleOracleDatabaseCloudVmCluster#project}
  */
  readonly project?: string;
}
export interface DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions {
}

export function dataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsToTerraform(struct?: DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsToHclTerraform(struct?: DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // diagnostics_events_enabled - computed: true, optional: false, required: false
  public get diagnosticsEventsEnabled() {
    return this.getBooleanAttribute('diagnostics_events_enabled');
  }

  // health_monitoring_enabled - computed: true, optional: false, required: false
  public get healthMonitoringEnabled() {
    return this.getBooleanAttribute('health_monitoring_enabled');
  }

  // incident_logs_enabled - computed: true, optional: false, required: false
  public get incidentLogsEnabled() {
    return this.getBooleanAttribute('incident_logs_enabled');
  }
}

export class DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference {
    return new DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZone {
}

export function dataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneToTerraform(struct?: DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneToHclTerraform(struct?: DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference {
    return new DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleOracleDatabaseCloudVmClusterProperties {
}

export function dataGoogleOracleDatabaseCloudVmClusterPropertiesToTerraform(struct?: DataGoogleOracleDatabaseCloudVmClusterProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleOracleDatabaseCloudVmClusterPropertiesToHclTerraform(struct?: DataGoogleOracleDatabaseCloudVmClusterProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleOracleDatabaseCloudVmClusterProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleOracleDatabaseCloudVmClusterProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_name - computed: true, optional: false, required: false
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cpu_core_count - computed: true, optional: false, required: false
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }

  // data_storage_size_tb - computed: true, optional: false, required: false
  public get dataStorageSizeTb() {
    return this.getNumberAttribute('data_storage_size_tb');
  }

  // db_node_storage_size_gb - computed: true, optional: false, required: false
  public get dbNodeStorageSizeGb() {
    return this.getNumberAttribute('db_node_storage_size_gb');
  }

  // db_server_ocids - computed: true, optional: false, required: false
  public get dbServerOcids() {
    return this.getListAttribute('db_server_ocids');
  }

  // diagnostics_data_collection_options - computed: true, optional: false, required: false
  private _diagnosticsDataCollectionOptions = new DataGoogleOracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList(this, "diagnostics_data_collection_options", false);
  public get diagnosticsDataCollectionOptions() {
    return this._diagnosticsDataCollectionOptions;
  }

  // disk_redundancy - computed: true, optional: false, required: false
  public get diskRedundancy() {
    return this.getStringAttribute('disk_redundancy');
  }

  // dns_listener_ip - computed: true, optional: false, required: false
  public get dnsListenerIp() {
    return this.getStringAttribute('dns_listener_ip');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // gi_version - computed: true, optional: false, required: false
  public get giVersion() {
    return this.getStringAttribute('gi_version');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // hostname_prefix - computed: true, optional: false, required: false
  public get hostnamePrefix() {
    return this.getStringAttribute('hostname_prefix');
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }

  // local_backup_enabled - computed: true, optional: false, required: false
  public get localBackupEnabled() {
    return this.getBooleanAttribute('local_backup_enabled');
  }

  // memory_size_gb - computed: true, optional: false, required: false
  public get memorySizeGb() {
    return this.getNumberAttribute('memory_size_gb');
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // oci_url - computed: true, optional: false, required: false
  public get ociUrl() {
    return this.getStringAttribute('oci_url');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ocpu_count - computed: true, optional: false, required: false
  public get ocpuCount() {
    return this.getNumberAttribute('ocpu_count');
  }

  // scan_dns - computed: true, optional: false, required: false
  public get scanDns() {
    return this.getStringAttribute('scan_dns');
  }

  // scan_dns_record_id - computed: true, optional: false, required: false
  public get scanDnsRecordId() {
    return this.getStringAttribute('scan_dns_record_id');
  }

  // scan_ip_ids - computed: true, optional: false, required: false
  public get scanIpIds() {
    return this.getListAttribute('scan_ip_ids');
  }

  // scan_listener_port_tcp - computed: true, optional: false, required: false
  public get scanListenerPortTcp() {
    return this.getNumberAttribute('scan_listener_port_tcp');
  }

  // scan_listener_port_tcp_ssl - computed: true, optional: false, required: false
  public get scanListenerPortTcpSsl() {
    return this.getNumberAttribute('scan_listener_port_tcp_ssl');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // sparse_diskgroup_enabled - computed: true, optional: false, required: false
  public get sparseDiskgroupEnabled() {
    return this.getBooleanAttribute('sparse_diskgroup_enabled');
  }

  // ssh_public_keys - computed: true, optional: false, required: false
  public get sshPublicKeys() {
    return this.getListAttribute('ssh_public_keys');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_size_gb - computed: true, optional: false, required: false
  public get storageSizeGb() {
    return this.getNumberAttribute('storage_size_gb');
  }

  // system_version - computed: true, optional: false, required: false
  public get systemVersion() {
    return this.getStringAttribute('system_version');
  }

  // time_zone - computed: true, optional: false, required: false
  private _timeZone = new DataGoogleOracleDatabaseCloudVmClusterPropertiesTimeZoneList(this, "time_zone", false);
  public get timeZone() {
    return this._timeZone;
  }
}

export class DataGoogleOracleDatabaseCloudVmClusterPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference {
    return new DataGoogleOracleDatabaseCloudVmClusterPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/oracle_database_cloud_vm_cluster google_oracle_database_cloud_vm_cluster}
*/
export class DataGoogleOracleDatabaseCloudVmCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_oracle_database_cloud_vm_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleOracleDatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleOracleDatabaseCloudVmCluster to import
  * @param importFromId The id of the existing DataGoogleOracleDatabaseCloudVmCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/oracle_database_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleOracleDatabaseCloudVmCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_oracle_database_cloud_vm_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/oracle_database_cloud_vm_cluster google_oracle_database_cloud_vm_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleOracleDatabaseCloudVmClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleOracleDatabaseCloudVmClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_oracle_database_cloud_vm_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.29.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloudVmClusterId = config.cloudVmClusterId;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_subnet_cidr - computed: true, optional: false, required: false
  public get backupSubnetCidr() {
    return this.getStringAttribute('backup_subnet_cidr');
  }

  // cidr - computed: true, optional: false, required: false
  public get cidr() {
    return this.getStringAttribute('cidr');
  }

  // cloud_vm_cluster_id - computed: false, optional: false, required: true
  private _cloudVmClusterId?: string; 
  public get cloudVmClusterId() {
    return this.getStringAttribute('cloud_vm_cluster_id');
  }
  public set cloudVmClusterId(value: string) {
    this._cloudVmClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudVmClusterIdInput() {
    return this._cloudVmClusterId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // exadata_infrastructure - computed: true, optional: false, required: false
  public get exadataInfrastructure() {
    return this.getStringAttribute('exadata_infrastructure');
  }

  // gcp_oracle_zone - computed: true, optional: false, required: false
  public get gcpOracleZone() {
    return this.getStringAttribute('gcp_oracle_zone');
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
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

  // properties - computed: true, optional: false, required: false
  private _properties = new DataGoogleOracleDatabaseCloudVmClusterPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_vm_cluster_id: cdktf.stringToTerraform(this._cloudVmClusterId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_vm_cluster_id: {
        value: cdktf.stringToHclTerraform(this._cloudVmClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
