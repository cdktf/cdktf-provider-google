// https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OracleDatabaseCloudVmClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * CIDR range of the backup subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#backup_subnet_cidr OracleDatabaseCloudVmCluster#backup_subnet_cidr}
  */
  readonly backupSubnetCidr: string;
  /**
  * Network settings. CIDR to use for cluster IP allocation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#cidr OracleDatabaseCloudVmCluster#cidr}
  */
  readonly cidr: string;
  /**
  * The ID of the VM Cluster to create. This value is restricted
  * to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63
  * characters in length. The value must start with a letter and end with
  * a letter or a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#cloud_vm_cluster_id OracleDatabaseCloudVmCluster#cloud_vm_cluster_id}
  */
  readonly cloudVmClusterId: string;
  /**
  * Whether Terraform will be prevented from destroying the cluster. Deleting this cluster via terraform destroy or terraform apply will only succeed if this field is false in the Terraform state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#deletion_protection OracleDatabaseCloudVmCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * User friendly name for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#display_name OracleDatabaseCloudVmCluster#display_name}
  */
  readonly displayName?: string;
  /**
  * The name of the Exadata Infrastructure resource on which VM cluster
  * resource is created, in the following format:
  * projects/{project}/locations/{region}/cloudExadataInfrastuctures/{cloud_extradata_infrastructure}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#exadata_infrastructure OracleDatabaseCloudVmCluster#exadata_infrastructure}
  */
  readonly exadataInfrastructure: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#id OracleDatabaseCloudVmCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels or tags associated with the VM Cluster. 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#labels OracleDatabaseCloudVmCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/DbNode'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#location OracleDatabaseCloudVmCluster#location}
  */
  readonly location: string;
  /**
  * The name of the VPC network.
  * Format: projects/{project}/global/networks/{network}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#network OracleDatabaseCloudVmCluster#network}
  */
  readonly network: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#project OracleDatabaseCloudVmCluster#project}
  */
  readonly project?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#properties OracleDatabaseCloudVmCluster#properties}
  */
  readonly properties?: OracleDatabaseCloudVmClusterProperties;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#timeouts OracleDatabaseCloudVmCluster#timeouts}
  */
  readonly timeouts?: OracleDatabaseCloudVmClusterTimeouts;
}
export interface OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions {
  /**
  * Indicates whether diagnostic collection is enabled for the VM cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#diagnostics_events_enabled OracleDatabaseCloudVmCluster#diagnostics_events_enabled}
  */
  readonly diagnosticsEventsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether health monitoring is enabled for the VM cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#health_monitoring_enabled OracleDatabaseCloudVmCluster#health_monitoring_enabled}
  */
  readonly healthMonitoringEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether incident logs and trace collection are enabled for the VM
  * cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#incident_logs_enabled OracleDatabaseCloudVmCluster#incident_logs_enabled}
  */
  readonly incidentLogsEnabled?: boolean | cdktf.IResolvable;
}

export function oracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsToTerraform(struct?: OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference | OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    diagnostics_events_enabled: cdktf.booleanToTerraform(struct!.diagnosticsEventsEnabled),
    health_monitoring_enabled: cdktf.booleanToTerraform(struct!.healthMonitoringEnabled),
    incident_logs_enabled: cdktf.booleanToTerraform(struct!.incidentLogsEnabled),
  }
}


export function oracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsToHclTerraform(struct?: OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference | OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    diagnostics_events_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.diagnosticsEventsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    health_monitoring_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.healthMonitoringEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    incident_logs_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.incidentLogsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diagnosticsEventsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.diagnosticsEventsEnabled = this._diagnosticsEventsEnabled;
    }
    if (this._healthMonitoringEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthMonitoringEnabled = this._healthMonitoringEnabled;
    }
    if (this._incidentLogsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentLogsEnabled = this._incidentLogsEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diagnosticsEventsEnabled = undefined;
      this._healthMonitoringEnabled = undefined;
      this._incidentLogsEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diagnosticsEventsEnabled = value.diagnosticsEventsEnabled;
      this._healthMonitoringEnabled = value.healthMonitoringEnabled;
      this._incidentLogsEnabled = value.incidentLogsEnabled;
    }
  }

  // diagnostics_events_enabled - computed: false, optional: true, required: false
  private _diagnosticsEventsEnabled?: boolean | cdktf.IResolvable; 
  public get diagnosticsEventsEnabled() {
    return this.getBooleanAttribute('diagnostics_events_enabled');
  }
  public set diagnosticsEventsEnabled(value: boolean | cdktf.IResolvable) {
    this._diagnosticsEventsEnabled = value;
  }
  public resetDiagnosticsEventsEnabled() {
    this._diagnosticsEventsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticsEventsEnabledInput() {
    return this._diagnosticsEventsEnabled;
  }

  // health_monitoring_enabled - computed: false, optional: true, required: false
  private _healthMonitoringEnabled?: boolean | cdktf.IResolvable; 
  public get healthMonitoringEnabled() {
    return this.getBooleanAttribute('health_monitoring_enabled');
  }
  public set healthMonitoringEnabled(value: boolean | cdktf.IResolvable) {
    this._healthMonitoringEnabled = value;
  }
  public resetHealthMonitoringEnabled() {
    this._healthMonitoringEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthMonitoringEnabledInput() {
    return this._healthMonitoringEnabled;
  }

  // incident_logs_enabled - computed: false, optional: true, required: false
  private _incidentLogsEnabled?: boolean | cdktf.IResolvable; 
  public get incidentLogsEnabled() {
    return this.getBooleanAttribute('incident_logs_enabled');
  }
  public set incidentLogsEnabled(value: boolean | cdktf.IResolvable) {
    this._incidentLogsEnabled = value;
  }
  public resetIncidentLogsEnabled() {
    this._incidentLogsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentLogsEnabledInput() {
    return this._incidentLogsEnabled;
  }
}
export interface OracleDatabaseCloudVmClusterPropertiesTimeZone {
  /**
  * IANA Time Zone Database time zone, e.g. "America/New_York".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#id OracleDatabaseCloudVmCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function oracleDatabaseCloudVmClusterPropertiesTimeZoneToTerraform(struct?: OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference | OracleDatabaseCloudVmClusterPropertiesTimeZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oracleDatabaseCloudVmClusterPropertiesTimeZoneToHclTerraform(struct?: OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference | OracleDatabaseCloudVmClusterPropertiesTimeZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseCloudVmClusterPropertiesTimeZone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseCloudVmClusterPropertiesTimeZone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
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
}
export interface OracleDatabaseCloudVmClusterProperties {
  /**
  * OCI Cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#cluster_name OracleDatabaseCloudVmCluster#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Number of enabled CPU cores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#cpu_core_count OracleDatabaseCloudVmCluster#cpu_core_count}
  */
  readonly cpuCoreCount: number;
  /**
  * The data disk group size to be allocated in TBs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#data_storage_size_tb OracleDatabaseCloudVmCluster#data_storage_size_tb}
  */
  readonly dataStorageSizeTb?: number;
  /**
  * Local storage per VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#db_node_storage_size_gb OracleDatabaseCloudVmCluster#db_node_storage_size_gb}
  */
  readonly dbNodeStorageSizeGb?: number;
  /**
  * OCID of database servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#db_server_ocids OracleDatabaseCloudVmCluster#db_server_ocids}
  */
  readonly dbServerOcids?: string[];
  /**
  * The type of redundancy. 
  *  Possible values:
  *  DISK_REDUNDANCY_UNSPECIFIED
  * HIGH
  * NORMAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#disk_redundancy OracleDatabaseCloudVmCluster#disk_redundancy}
  */
  readonly diskRedundancy?: string;
  /**
  * Grid Infrastructure Version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#gi_version OracleDatabaseCloudVmCluster#gi_version}
  */
  readonly giVersion?: string;
  /**
  * Prefix for VM cluster host names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#hostname_prefix OracleDatabaseCloudVmCluster#hostname_prefix}
  */
  readonly hostnamePrefix?: string;
  /**
  * License type of VM Cluster. 
  *  Possible values:
  *  LICENSE_TYPE_UNSPECIFIED
  * LICENSE_INCLUDED
  * BRING_YOUR_OWN_LICENSE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#license_type OracleDatabaseCloudVmCluster#license_type}
  */
  readonly licenseType: string;
  /**
  * Use local backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#local_backup_enabled OracleDatabaseCloudVmCluster#local_backup_enabled}
  */
  readonly localBackupEnabled?: boolean | cdktf.IResolvable;
  /**
  * Memory allocated in GBs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#memory_size_gb OracleDatabaseCloudVmCluster#memory_size_gb}
  */
  readonly memorySizeGb?: number;
  /**
  * Number of database servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#node_count OracleDatabaseCloudVmCluster#node_count}
  */
  readonly nodeCount?: number;
  /**
  * OCPU count per VM. Minimum is 0.1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#ocpu_count OracleDatabaseCloudVmCluster#ocpu_count}
  */
  readonly ocpuCount?: number;
  /**
  * Use exadata sparse snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#sparse_diskgroup_enabled OracleDatabaseCloudVmCluster#sparse_diskgroup_enabled}
  */
  readonly sparseDiskgroupEnabled?: boolean | cdktf.IResolvable;
  /**
  * SSH public keys to be stored with cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#ssh_public_keys OracleDatabaseCloudVmCluster#ssh_public_keys}
  */
  readonly sshPublicKeys?: string[];
  /**
  * diagnostics_data_collection_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#diagnostics_data_collection_options OracleDatabaseCloudVmCluster#diagnostics_data_collection_options}
  */
  readonly diagnosticsDataCollectionOptions?: OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions;
  /**
  * time_zone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#time_zone OracleDatabaseCloudVmCluster#time_zone}
  */
  readonly timeZone?: OracleDatabaseCloudVmClusterPropertiesTimeZone;
}

export function oracleDatabaseCloudVmClusterPropertiesToTerraform(struct?: OracleDatabaseCloudVmClusterPropertiesOutputReference | OracleDatabaseCloudVmClusterProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    cpu_core_count: cdktf.numberToTerraform(struct!.cpuCoreCount),
    data_storage_size_tb: cdktf.numberToTerraform(struct!.dataStorageSizeTb),
    db_node_storage_size_gb: cdktf.numberToTerraform(struct!.dbNodeStorageSizeGb),
    db_server_ocids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dbServerOcids),
    disk_redundancy: cdktf.stringToTerraform(struct!.diskRedundancy),
    gi_version: cdktf.stringToTerraform(struct!.giVersion),
    hostname_prefix: cdktf.stringToTerraform(struct!.hostnamePrefix),
    license_type: cdktf.stringToTerraform(struct!.licenseType),
    local_backup_enabled: cdktf.booleanToTerraform(struct!.localBackupEnabled),
    memory_size_gb: cdktf.numberToTerraform(struct!.memorySizeGb),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    ocpu_count: cdktf.numberToTerraform(struct!.ocpuCount),
    sparse_diskgroup_enabled: cdktf.booleanToTerraform(struct!.sparseDiskgroupEnabled),
    ssh_public_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshPublicKeys),
    diagnostics_data_collection_options: oracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsToTerraform(struct!.diagnosticsDataCollectionOptions),
    time_zone: oracleDatabaseCloudVmClusterPropertiesTimeZoneToTerraform(struct!.timeZone),
  }
}


export function oracleDatabaseCloudVmClusterPropertiesToHclTerraform(struct?: OracleDatabaseCloudVmClusterPropertiesOutputReference | OracleDatabaseCloudVmClusterProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_core_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCoreCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_storage_size_tb: {
      value: cdktf.numberToHclTerraform(struct!.dataStorageSizeTb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_node_storage_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.dbNodeStorageSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_server_ocids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dbServerOcids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disk_redundancy: {
      value: cdktf.stringToHclTerraform(struct!.diskRedundancy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gi_version: {
      value: cdktf.stringToHclTerraform(struct!.giVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname_prefix: {
      value: cdktf.stringToHclTerraform(struct!.hostnamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_type: {
      value: cdktf.stringToHclTerraform(struct!.licenseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_backup_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.localBackupEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    memory_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.memorySizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpu_count: {
      value: cdktf.numberToHclTerraform(struct!.ocpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sparse_diskgroup_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sparseDiskgroupEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssh_public_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshPublicKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    diagnostics_data_collection_options: {
      value: oracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsToHclTerraform(struct!.diagnosticsDataCollectionOptions),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsList",
    },
    time_zone: {
      value: oracleDatabaseCloudVmClusterPropertiesTimeZoneToHclTerraform(struct!.timeZone),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseCloudVmClusterPropertiesTimeZoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseCloudVmClusterPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseCloudVmClusterProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._cpuCoreCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCoreCount = this._cpuCoreCount;
    }
    if (this._dataStorageSizeTb !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStorageSizeTb = this._dataStorageSizeTb;
    }
    if (this._dbNodeStorageSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbNodeStorageSizeGb = this._dbNodeStorageSizeGb;
    }
    if (this._dbServerOcids !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbServerOcids = this._dbServerOcids;
    }
    if (this._diskRedundancy !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskRedundancy = this._diskRedundancy;
    }
    if (this._giVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.giVersion = this._giVersion;
    }
    if (this._hostnamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostnamePrefix = this._hostnamePrefix;
    }
    if (this._licenseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseType = this._licenseType;
    }
    if (this._localBackupEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.localBackupEnabled = this._localBackupEnabled;
    }
    if (this._memorySizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySizeGb = this._memorySizeGb;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._ocpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpuCount = this._ocpuCount;
    }
    if (this._sparseDiskgroupEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparseDiskgroupEnabled = this._sparseDiskgroupEnabled;
    }
    if (this._sshPublicKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPublicKeys = this._sshPublicKeys;
    }
    if (this._diagnosticsDataCollectionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.diagnosticsDataCollectionOptions = this._diagnosticsDataCollectionOptions?.internalValue;
    }
    if (this._timeZone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseCloudVmClusterProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterName = undefined;
      this._cpuCoreCount = undefined;
      this._dataStorageSizeTb = undefined;
      this._dbNodeStorageSizeGb = undefined;
      this._dbServerOcids = undefined;
      this._diskRedundancy = undefined;
      this._giVersion = undefined;
      this._hostnamePrefix = undefined;
      this._licenseType = undefined;
      this._localBackupEnabled = undefined;
      this._memorySizeGb = undefined;
      this._nodeCount = undefined;
      this._ocpuCount = undefined;
      this._sparseDiskgroupEnabled = undefined;
      this._sshPublicKeys = undefined;
      this._diagnosticsDataCollectionOptions.internalValue = undefined;
      this._timeZone.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterName = value.clusterName;
      this._cpuCoreCount = value.cpuCoreCount;
      this._dataStorageSizeTb = value.dataStorageSizeTb;
      this._dbNodeStorageSizeGb = value.dbNodeStorageSizeGb;
      this._dbServerOcids = value.dbServerOcids;
      this._diskRedundancy = value.diskRedundancy;
      this._giVersion = value.giVersion;
      this._hostnamePrefix = value.hostnamePrefix;
      this._licenseType = value.licenseType;
      this._localBackupEnabled = value.localBackupEnabled;
      this._memorySizeGb = value.memorySizeGb;
      this._nodeCount = value.nodeCount;
      this._ocpuCount = value.ocpuCount;
      this._sparseDiskgroupEnabled = value.sparseDiskgroupEnabled;
      this._sshPublicKeys = value.sshPublicKeys;
      this._diagnosticsDataCollectionOptions.internalValue = value.diagnosticsDataCollectionOptions;
      this._timeZone.internalValue = value.timeZone;
    }
  }

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // cpu_core_count - computed: false, optional: false, required: true
  private _cpuCoreCount?: number; 
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
  }
  public set cpuCoreCount(value: number) {
    this._cpuCoreCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCoreCountInput() {
    return this._cpuCoreCount;
  }

  // data_storage_size_tb - computed: true, optional: true, required: false
  private _dataStorageSizeTb?: number; 
  public get dataStorageSizeTb() {
    return this.getNumberAttribute('data_storage_size_tb');
  }
  public set dataStorageSizeTb(value: number) {
    this._dataStorageSizeTb = value;
  }
  public resetDataStorageSizeTb() {
    this._dataStorageSizeTb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageSizeTbInput() {
    return this._dataStorageSizeTb;
  }

  // db_node_storage_size_gb - computed: true, optional: true, required: false
  private _dbNodeStorageSizeGb?: number; 
  public get dbNodeStorageSizeGb() {
    return this.getNumberAttribute('db_node_storage_size_gb');
  }
  public set dbNodeStorageSizeGb(value: number) {
    this._dbNodeStorageSizeGb = value;
  }
  public resetDbNodeStorageSizeGb() {
    this._dbNodeStorageSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNodeStorageSizeGbInput() {
    return this._dbNodeStorageSizeGb;
  }

  // db_server_ocids - computed: true, optional: true, required: false
  private _dbServerOcids?: string[]; 
  public get dbServerOcids() {
    return this.getListAttribute('db_server_ocids');
  }
  public set dbServerOcids(value: string[]) {
    this._dbServerOcids = value;
  }
  public resetDbServerOcids() {
    this._dbServerOcids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbServerOcidsInput() {
    return this._dbServerOcids;
  }

  // disk_redundancy - computed: true, optional: true, required: false
  private _diskRedundancy?: string; 
  public get diskRedundancy() {
    return this.getStringAttribute('disk_redundancy');
  }
  public set diskRedundancy(value: string) {
    this._diskRedundancy = value;
  }
  public resetDiskRedundancy() {
    this._diskRedundancy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskRedundancyInput() {
    return this._diskRedundancy;
  }

  // dns_listener_ip - computed: true, optional: false, required: false
  public get dnsListenerIp() {
    return this.getStringAttribute('dns_listener_ip');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // gi_version - computed: false, optional: true, required: false
  private _giVersion?: string; 
  public get giVersion() {
    return this.getStringAttribute('gi_version');
  }
  public set giVersion(value: string) {
    this._giVersion = value;
  }
  public resetGiVersion() {
    this._giVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get giVersionInput() {
    return this._giVersion;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // hostname_prefix - computed: false, optional: true, required: false
  private _hostnamePrefix?: string; 
  public get hostnamePrefix() {
    return this.getStringAttribute('hostname_prefix');
  }
  public set hostnamePrefix(value: string) {
    this._hostnamePrefix = value;
  }
  public resetHostnamePrefix() {
    this._hostnamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnamePrefixInput() {
    return this._hostnamePrefix;
  }

  // license_type - computed: false, optional: false, required: true
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // local_backup_enabled - computed: false, optional: true, required: false
  private _localBackupEnabled?: boolean | cdktf.IResolvable; 
  public get localBackupEnabled() {
    return this.getBooleanAttribute('local_backup_enabled');
  }
  public set localBackupEnabled(value: boolean | cdktf.IResolvable) {
    this._localBackupEnabled = value;
  }
  public resetLocalBackupEnabled() {
    this._localBackupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localBackupEnabledInput() {
    return this._localBackupEnabled;
  }

  // memory_size_gb - computed: true, optional: true, required: false
  private _memorySizeGb?: number; 
  public get memorySizeGb() {
    return this.getNumberAttribute('memory_size_gb');
  }
  public set memorySizeGb(value: number) {
    this._memorySizeGb = value;
  }
  public resetMemorySizeGb() {
    this._memorySizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeGbInput() {
    return this._memorySizeGb;
  }

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // oci_url - computed: true, optional: false, required: false
  public get ociUrl() {
    return this.getStringAttribute('oci_url');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ocpu_count - computed: true, optional: true, required: false
  private _ocpuCount?: number; 
  public get ocpuCount() {
    return this.getNumberAttribute('ocpu_count');
  }
  public set ocpuCount(value: number) {
    this._ocpuCount = value;
  }
  public resetOcpuCount() {
    this._ocpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpuCountInput() {
    return this._ocpuCount;
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

  // sparse_diskgroup_enabled - computed: true, optional: true, required: false
  private _sparseDiskgroupEnabled?: boolean | cdktf.IResolvable; 
  public get sparseDiskgroupEnabled() {
    return this.getBooleanAttribute('sparse_diskgroup_enabled');
  }
  public set sparseDiskgroupEnabled(value: boolean | cdktf.IResolvable) {
    this._sparseDiskgroupEnabled = value;
  }
  public resetSparseDiskgroupEnabled() {
    this._sparseDiskgroupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparseDiskgroupEnabledInput() {
    return this._sparseDiskgroupEnabled;
  }

  // ssh_public_keys - computed: false, optional: true, required: false
  private _sshPublicKeys?: string[]; 
  public get sshPublicKeys() {
    return this.getListAttribute('ssh_public_keys');
  }
  public set sshPublicKeys(value: string[]) {
    this._sshPublicKeys = value;
  }
  public resetSshPublicKeys() {
    this._sshPublicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeysInput() {
    return this._sshPublicKeys;
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

  // diagnostics_data_collection_options - computed: false, optional: true, required: false
  private _diagnosticsDataCollectionOptions = new OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptionsOutputReference(this, "diagnostics_data_collection_options");
  public get diagnosticsDataCollectionOptions() {
    return this._diagnosticsDataCollectionOptions;
  }
  public putDiagnosticsDataCollectionOptions(value: OracleDatabaseCloudVmClusterPropertiesDiagnosticsDataCollectionOptions) {
    this._diagnosticsDataCollectionOptions.internalValue = value;
  }
  public resetDiagnosticsDataCollectionOptions() {
    this._diagnosticsDataCollectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticsDataCollectionOptionsInput() {
    return this._diagnosticsDataCollectionOptions.internalValue;
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone = new OracleDatabaseCloudVmClusterPropertiesTimeZoneOutputReference(this, "time_zone");
  public get timeZone() {
    return this._timeZone;
  }
  public putTimeZone(value: OracleDatabaseCloudVmClusterPropertiesTimeZone) {
    this._timeZone.internalValue = value;
  }
  public resetTimeZone() {
    this._timeZone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone.internalValue;
  }
}
export interface OracleDatabaseCloudVmClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#create OracleDatabaseCloudVmCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#delete OracleDatabaseCloudVmCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#update OracleDatabaseCloudVmCluster#update}
  */
  readonly update?: string;
}

export function oracleDatabaseCloudVmClusterTimeoutsToTerraform(struct?: OracleDatabaseCloudVmClusterTimeouts | cdktf.IResolvable): any {
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


export function oracleDatabaseCloudVmClusterTimeoutsToHclTerraform(struct?: OracleDatabaseCloudVmClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseCloudVmClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OracleDatabaseCloudVmClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OracleDatabaseCloudVmClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster google_oracle_database_cloud_vm_cluster}
*/
export class OracleDatabaseCloudVmCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_oracle_database_cloud_vm_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OracleDatabaseCloudVmCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OracleDatabaseCloudVmCluster to import
  * @param importFromId The id of the existing OracleDatabaseCloudVmCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OracleDatabaseCloudVmCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_oracle_database_cloud_vm_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/oracle_database_cloud_vm_cluster google_oracle_database_cloud_vm_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OracleDatabaseCloudVmClusterConfig
  */
  public constructor(scope: Construct, id: string, config: OracleDatabaseCloudVmClusterConfig) {
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
    this._backupSubnetCidr = config.backupSubnetCidr;
    this._cidr = config.cidr;
    this._cloudVmClusterId = config.cloudVmClusterId;
    this._deletionProtection = config.deletionProtection;
    this._displayName = config.displayName;
    this._exadataInfrastructure = config.exadataInfrastructure;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._network = config.network;
    this._project = config.project;
    this._properties.internalValue = config.properties;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_subnet_cidr - computed: false, optional: false, required: true
  private _backupSubnetCidr?: string; 
  public get backupSubnetCidr() {
    return this.getStringAttribute('backup_subnet_cidr');
  }
  public set backupSubnetCidr(value: string) {
    this._backupSubnetCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupSubnetCidrInput() {
    return this._backupSubnetCidr;
  }

  // cidr - computed: false, optional: false, required: true
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // exadata_infrastructure - computed: false, optional: false, required: true
  private _exadataInfrastructure?: string; 
  public get exadataInfrastructure() {
    return this.getStringAttribute('exadata_infrastructure');
  }
  public set exadataInfrastructure(value: string) {
    this._exadataInfrastructure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exadataInfrastructureInput() {
    return this._exadataInfrastructure;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new OracleDatabaseCloudVmClusterPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: OracleDatabaseCloudVmClusterProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OracleDatabaseCloudVmClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OracleDatabaseCloudVmClusterTimeouts) {
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
      backup_subnet_cidr: cdktf.stringToTerraform(this._backupSubnetCidr),
      cidr: cdktf.stringToTerraform(this._cidr),
      cloud_vm_cluster_id: cdktf.stringToTerraform(this._cloudVmClusterId),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      display_name: cdktf.stringToTerraform(this._displayName),
      exadata_infrastructure: cdktf.stringToTerraform(this._exadataInfrastructure),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      network: cdktf.stringToTerraform(this._network),
      project: cdktf.stringToTerraform(this._project),
      properties: oracleDatabaseCloudVmClusterPropertiesToTerraform(this._properties.internalValue),
      timeouts: oracleDatabaseCloudVmClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_subnet_cidr: {
        value: cdktf.stringToHclTerraform(this._backupSubnetCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_vm_cluster_id: {
        value: cdktf.stringToHclTerraform(this._cloudVmClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exadata_infrastructure: {
        value: cdktf.stringToHclTerraform(this._exadataInfrastructure),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
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
      properties: {
        value: oracleDatabaseCloudVmClusterPropertiesToHclTerraform(this._properties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OracleDatabaseCloudVmClusterPropertiesList",
      },
      timeouts: {
        value: oracleDatabaseCloudVmClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OracleDatabaseCloudVmClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
