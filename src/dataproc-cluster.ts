// https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataprocClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The timeout duration which allows graceful decomissioning when you change the number of worker nodes directly through a terraform apply
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#graceful_decommission_timeout DataprocCluster#graceful_decommission_timeout}
  */
  readonly gracefulDecommissionTimeout?: string;
  /**
  * The list of labels (key/value pairs) to be applied to instances in the cluster. GCP generates some itself including goog-dataproc-cluster-name which is the name of the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#labels DataprocCluster#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The name of the cluster, unique within the project and zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#name DataprocCluster#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the cluster will exist. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#project DataprocCluster#project}
  */
  readonly project?: string;
  /**
  * The region in which the cluster and associated nodes will be created in. Defaults to global.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#region DataprocCluster#region}
  */
  readonly region?: string;
  /**
  * cluster_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#cluster_config DataprocCluster#cluster_config}
  */
  readonly clusterConfig?: DataprocClusterClusterConfig[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#timeouts DataprocCluster#timeouts}
  */
  readonly timeouts?: DataprocClusterTimeouts;
}
export interface DataprocClusterClusterConfigAutoscalingConfig {
  /**
  * The autoscaling policy used by the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#policy_uri DataprocCluster#policy_uri}
  */
  readonly policyUri: string;
}

function dataprocClusterClusterConfigAutoscalingConfigToTerraform(struct?: DataprocClusterClusterConfigAutoscalingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    policy_uri: cdktf.stringToTerraform(struct!.policyUri),
  }
}

export interface DataprocClusterClusterConfigEncryptionConfig {
  /**
  * The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#kms_key_name DataprocCluster#kms_key_name}
  */
  readonly kmsKeyName: string;
}

function dataprocClusterClusterConfigEncryptionConfigToTerraform(struct?: DataprocClusterClusterConfigEncryptionConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export interface DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig {
  /**
  * Defines whether instances have integrity monitoring enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#enable_integrity_monitoring DataprocCluster#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Defines whether instances have Secure Boot enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#enable_secure_boot DataprocCluster#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
  /**
  * Defines whether instances have the vTPM enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#enable_vtpm DataprocCluster#enable_vtpm}
  */
  readonly enableVtpm?: boolean | cdktf.IResolvable;
}

function dataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigToTerraform(struct?: DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
    enable_vtpm: cdktf.booleanToTerraform(struct!.enableVtpm),
  }
}

export interface DataprocClusterClusterConfigGceClusterConfig {
  /**
  * By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. If set to true, all instances in the cluster will only have internal IP addresses. Note: Private Google Access (also known as privateIpGoogleAccess) must be enabled on the subnetwork that the cluster will be launched in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#internal_ip_only DataprocCluster#internal_ip_only}
  */
  readonly internalIpOnly?: boolean | cdktf.IResolvable;
  /**
  * A map of the Compute Engine metadata entries to add to all instances
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#metadata DataprocCluster#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The name or self_link of the Google Compute Engine network to the cluster will be part of. Conflicts with subnetwork. If neither is specified, this defaults to the "default" network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#network DataprocCluster#network}
  */
  readonly network?: string;
  /**
  * The service account to be used by the Node VMs. If not specified, the "default" service account is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#service_account DataprocCluster#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * The set of Google API scopes to be made available on all of the node VMs under the service_account specified. These can be either FQDNs, or scope aliases.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#service_account_scopes DataprocCluster#service_account_scopes}
  */
  readonly serviceAccountScopes?: string[];
  /**
  * The name or self_link of the Google Compute Engine subnetwork the cluster will be part of. Conflicts with network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#subnetwork DataprocCluster#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * The list of instance tags applied to instances in the cluster. Tags are used to identify valid sources or targets for network firewalls.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#tags DataprocCluster#tags}
  */
  readonly tags?: string[];
  /**
  * The GCP zone where your data is stored and used (i.e. where the master and the worker nodes will be created in). If region is set to 'global' (default) then zone is mandatory, otherwise GCP is able to make use of Auto Zone Placement to determine this automatically for you. Note: This setting additionally determines and restricts which computing resources are available for use with other configs such as cluster_config.master_config.machine_type and cluster_config.worker_config.machine_type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#zone DataprocCluster#zone}
  */
  readonly zone?: string;
  /**
  * shielded_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#shielded_instance_config DataprocCluster#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: DataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfig[];
}

function dataprocClusterClusterConfigGceClusterConfigToTerraform(struct?: DataprocClusterClusterConfigGceClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    internal_ip_only: cdktf.booleanToTerraform(struct!.internalIpOnly),
    metadata: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.metadata),
    network: cdktf.stringToTerraform(struct!.network),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    service_account_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.serviceAccountScopes),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    zone: cdktf.stringToTerraform(struct!.zone),
    shielded_instance_config: cdktf.listMapper(dataprocClusterClusterConfigGceClusterConfigShieldedInstanceConfigToTerraform)(struct!.shieldedInstanceConfig),
  }
}

export interface DataprocClusterClusterConfigInitializationAction {
  /**
  * The script to be executed during initialization of the cluster. The script must be a GCS file with a gs:// prefix.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#script DataprocCluster#script}
  */
  readonly script: string;
  /**
  * The maximum duration (in seconds) which script is allowed to take to execute its action. GCP will default to a predetermined computed value if not set (currently 300).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#timeout_sec DataprocCluster#timeout_sec}
  */
  readonly timeoutSec?: number;
}

function dataprocClusterClusterConfigInitializationActionToTerraform(struct?: DataprocClusterClusterConfigInitializationAction): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    script: cdktf.stringToTerraform(struct!.script),
    timeout_sec: cdktf.numberToTerraform(struct!.timeoutSec),
  }
}

export interface DataprocClusterClusterConfigMasterConfigAccelerators {
  /**
  * The number of the accelerator cards of this type exposed to this instance. Often restricted to one of 1, 2, 4, or 8.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#accelerator_count DataprocCluster#accelerator_count}
  */
  readonly acceleratorCount: number;
  /**
  * The short name of the accelerator type to expose to this instance. For example, nvidia-tesla-k80.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#accelerator_type DataprocCluster#accelerator_type}
  */
  readonly acceleratorType: string;
}

function dataprocClusterClusterConfigMasterConfigAcceleratorsToTerraform(struct?: DataprocClusterClusterConfigMasterConfigAccelerators): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
  }
}

export interface DataprocClusterClusterConfigMasterConfigDiskConfig {
  /**
  * Size of the primary disk attached to each node, specified in GB. The primary disk contains the boot volume and system libraries, and the smallest allowed disk size is 10GB. GCP will default to a predetermined computed value if not set (currently 500GB). Note: If SSDs are not attached, it also contains the HDFS data blocks and Hadoop working directories.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#boot_disk_size_gb DataprocCluster#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * The disk type of the primary disk attached to each node. One of "pd-ssd" or "pd-standard". Defaults to "pd-standard".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#boot_disk_type DataprocCluster#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * The amount of local SSD disks that will be attached to each master cluster node. Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#num_local_ssds DataprocCluster#num_local_ssds}
  */
  readonly numLocalSsds?: number;
}

function dataprocClusterClusterConfigMasterConfigDiskConfigToTerraform(struct?: DataprocClusterClusterConfigMasterConfigDiskConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktf.stringToTerraform(struct!.bootDiskType),
    num_local_ssds: cdktf.numberToTerraform(struct!.numLocalSsds),
  }
}

export interface DataprocClusterClusterConfigMasterConfig {
  /**
  * The URI for the image to use for this master/worker
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#image_uri DataprocCluster#image_uri}
  */
  readonly imageUri?: string;
  /**
  * The name of a Google Compute Engine machine type to create for the master/worker
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#machine_type DataprocCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The name of a minimum generation of CPU family for the master/worker. If not specified, GCP will default to a predetermined computed value for each zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#min_cpu_platform DataprocCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Specifies the number of master/worker nodes to create. If not specified, GCP will default to a predetermined computed value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#num_instances DataprocCluster#num_instances}
  */
  readonly numInstances?: number;
  /**
  * accelerators block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#accelerators DataprocCluster#accelerators}
  */
  readonly accelerators?: DataprocClusterClusterConfigMasterConfigAccelerators[];
  /**
  * disk_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#disk_config DataprocCluster#disk_config}
  */
  readonly diskConfig?: DataprocClusterClusterConfigMasterConfigDiskConfig[];
}

function dataprocClusterClusterConfigMasterConfigToTerraform(struct?: DataprocClusterClusterConfigMasterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    num_instances: cdktf.numberToTerraform(struct!.numInstances),
    accelerators: cdktf.listMapper(dataprocClusterClusterConfigMasterConfigAcceleratorsToTerraform)(struct!.accelerators),
    disk_config: cdktf.listMapper(dataprocClusterClusterConfigMasterConfigDiskConfigToTerraform)(struct!.diskConfig),
  }
}

export interface DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig {
  /**
  * Size of the primary disk attached to each preemptible worker node, specified in GB. The smallest allowed disk size is 10GB. GCP will default to a predetermined computed value if not set (currently 500GB). Note: If SSDs are not attached, it also contains the HDFS data blocks and Hadoop working directories.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#boot_disk_size_gb DataprocCluster#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * The disk type of the primary disk attached to each preemptible worker node. One of "pd-ssd" or "pd-standard". Defaults to "pd-standard".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#boot_disk_type DataprocCluster#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * The amount of local SSD disks that will be attached to each preemptible worker node. Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#num_local_ssds DataprocCluster#num_local_ssds}
  */
  readonly numLocalSsds?: number;
}

function dataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigToTerraform(struct?: DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktf.stringToTerraform(struct!.bootDiskType),
    num_local_ssds: cdktf.numberToTerraform(struct!.numLocalSsds),
  }
}

export interface DataprocClusterClusterConfigPreemptibleWorkerConfig {
  /**
  * Specifies the number of preemptible nodes to create. Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#num_instances DataprocCluster#num_instances}
  */
  readonly numInstances?: number;
  /**
  * disk_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#disk_config DataprocCluster#disk_config}
  */
  readonly diskConfig?: DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig[];
}

function dataprocClusterClusterConfigPreemptibleWorkerConfigToTerraform(struct?: DataprocClusterClusterConfigPreemptibleWorkerConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    num_instances: cdktf.numberToTerraform(struct!.numInstances),
    disk_config: cdktf.listMapper(dataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfigToTerraform)(struct!.diskConfig),
  }
}

export interface DataprocClusterClusterConfigSecurityConfigKerberosConfig {
  /**
  * The admin server (IP or hostname) for the remote trusted realm in a cross realm trust relationship.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#cross_realm_trust_admin_server DataprocCluster#cross_realm_trust_admin_server}
  */
  readonly crossRealmTrustAdminServer?: string;
  /**
  * The KDC (IP or hostname) for the remote trusted realm in a cross realm trust relationship.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#cross_realm_trust_kdc DataprocCluster#cross_realm_trust_kdc}
  */
  readonly crossRealmTrustKdc?: string;
  /**
  * The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#cross_realm_trust_realm DataprocCluster#cross_realm_trust_realm}
  */
  readonly crossRealmTrustRealm?: string;
  /**
  * The Cloud Storage URI of a KMS encrypted file containing the shared password between the on-cluster
Kerberos realm and the remote trusted realm, in a cross realm trust relationship.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#cross_realm_trust_shared_password_uri DataprocCluster#cross_realm_trust_shared_password_uri}
  */
  readonly crossRealmTrustSharedPasswordUri?: string;
  /**
  * Flag to indicate whether to Kerberize the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#enable_kerberos DataprocCluster#enable_kerberos}
  */
  readonly enableKerberos?: boolean | cdktf.IResolvable;
  /**
  * The Cloud Storage URI of a KMS encrypted file containing the master key of the KDC database.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#kdc_db_key_uri DataprocCluster#kdc_db_key_uri}
  */
  readonly kdcDbKeyUri?: string;
  /**
  * The Cloud Storage URI of a KMS encrypted file containing the password to the user provided key. For the self-signed certificate, this password is generated by Dataproc.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#key_password_uri DataprocCluster#key_password_uri}
  */
  readonly keyPasswordUri?: string;
  /**
  * The Cloud Storage URI of a KMS encrypted file containing
the password to the user provided keystore. For the self-signed certificate, this password is generated
by Dataproc
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#keystore_password_uri DataprocCluster#keystore_password_uri}
  */
  readonly keystorePasswordUri?: string;
  /**
  * The Cloud Storage URI of the keystore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#keystore_uri DataprocCluster#keystore_uri}
  */
  readonly keystoreUri?: string;
  /**
  * The uri of the KMS key used to encrypt various sensitive files.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#kms_key_uri DataprocCluster#kms_key_uri}
  */
  readonly kmsKeyUri: string;
  /**
  * The name of the on-cluster Kerberos realm. If not specified, the uppercased domain of hostnames will be the realm.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#realm DataprocCluster#realm}
  */
  readonly realm?: string;
  /**
  * The cloud Storage URI of a KMS encrypted file containing the root principal password.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#root_principal_password_uri DataprocCluster#root_principal_password_uri}
  */
  readonly rootPrincipalPasswordUri: string;
  /**
  * The lifetime of the ticket granting ticket, in hours.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#tgt_lifetime_hours DataprocCluster#tgt_lifetime_hours}
  */
  readonly tgtLifetimeHours?: number;
  /**
  * The Cloud Storage URI of a KMS encrypted file containing the password to the user provided truststore. For the self-signed certificate, this password is generated by Dataproc.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#truststore_password_uri DataprocCluster#truststore_password_uri}
  */
  readonly truststorePasswordUri?: string;
  /**
  * The Cloud Storage URI of the truststore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#truststore_uri DataprocCluster#truststore_uri}
  */
  readonly truststoreUri?: string;
}

function dataprocClusterClusterConfigSecurityConfigKerberosConfigToTerraform(struct?: DataprocClusterClusterConfigSecurityConfigKerberosConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cross_realm_trust_admin_server: cdktf.stringToTerraform(struct!.crossRealmTrustAdminServer),
    cross_realm_trust_kdc: cdktf.stringToTerraform(struct!.crossRealmTrustKdc),
    cross_realm_trust_realm: cdktf.stringToTerraform(struct!.crossRealmTrustRealm),
    cross_realm_trust_shared_password_uri: cdktf.stringToTerraform(struct!.crossRealmTrustSharedPasswordUri),
    enable_kerberos: cdktf.booleanToTerraform(struct!.enableKerberos),
    kdc_db_key_uri: cdktf.stringToTerraform(struct!.kdcDbKeyUri),
    key_password_uri: cdktf.stringToTerraform(struct!.keyPasswordUri),
    keystore_password_uri: cdktf.stringToTerraform(struct!.keystorePasswordUri),
    keystore_uri: cdktf.stringToTerraform(struct!.keystoreUri),
    kms_key_uri: cdktf.stringToTerraform(struct!.kmsKeyUri),
    realm: cdktf.stringToTerraform(struct!.realm),
    root_principal_password_uri: cdktf.stringToTerraform(struct!.rootPrincipalPasswordUri),
    tgt_lifetime_hours: cdktf.numberToTerraform(struct!.tgtLifetimeHours),
    truststore_password_uri: cdktf.stringToTerraform(struct!.truststorePasswordUri),
    truststore_uri: cdktf.stringToTerraform(struct!.truststoreUri),
  }
}

export interface DataprocClusterClusterConfigSecurityConfig {
  /**
  * kerberos_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#kerberos_config DataprocCluster#kerberos_config}
  */
  readonly kerberosConfig: DataprocClusterClusterConfigSecurityConfigKerberosConfig[];
}

function dataprocClusterClusterConfigSecurityConfigToTerraform(struct?: DataprocClusterClusterConfigSecurityConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kerberos_config: cdktf.listMapper(dataprocClusterClusterConfigSecurityConfigKerberosConfigToTerraform)(struct!.kerberosConfig),
  }
}

export interface DataprocClusterClusterConfigSoftwareConfig {
  /**
  * The Cloud Dataproc image version to use for the cluster - this controls the sets of software versions installed onto the nodes when you create clusters. If not specified, defaults to the latest version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#image_version DataprocCluster#image_version}
  */
  readonly imageVersion?: string;
  /**
  * The set of optional components to activate on the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#optional_components DataprocCluster#optional_components}
  */
  readonly optionalComponents?: string[];
  /**
  * A list of override and additional properties (key/value pairs) used to modify various aspects of the common configuration files used when creating a cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#override_properties DataprocCluster#override_properties}
  */
  readonly overrideProperties?: { [key: string]: string } | cdktf.IResolvable;
}

function dataprocClusterClusterConfigSoftwareConfigToTerraform(struct?: DataprocClusterClusterConfigSoftwareConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image_version: cdktf.stringToTerraform(struct!.imageVersion),
    optional_components: cdktf.listMapper(cdktf.stringToTerraform)(struct!.optionalComponents),
    override_properties: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.overrideProperties),
  }
}

export interface DataprocClusterClusterConfigWorkerConfigAccelerators {
  /**
  * The number of the accelerator cards of this type exposed to this instance. Often restricted to one of 1, 2, 4, or 8.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#accelerator_count DataprocCluster#accelerator_count}
  */
  readonly acceleratorCount: number;
  /**
  * The short name of the accelerator type to expose to this instance. For example, nvidia-tesla-k80.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#accelerator_type DataprocCluster#accelerator_type}
  */
  readonly acceleratorType: string;
}

function dataprocClusterClusterConfigWorkerConfigAcceleratorsToTerraform(struct?: DataprocClusterClusterConfigWorkerConfigAccelerators): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    accelerator_count: cdktf.numberToTerraform(struct!.acceleratorCount),
    accelerator_type: cdktf.stringToTerraform(struct!.acceleratorType),
  }
}

export interface DataprocClusterClusterConfigWorkerConfigDiskConfig {
  /**
  * Size of the primary disk attached to each node, specified in GB. The primary disk contains the boot volume and system libraries, and the smallest allowed disk size is 10GB. GCP will default to a predetermined computed value if not set (currently 500GB). Note: If SSDs are not attached, it also contains the HDFS data blocks and Hadoop working directories.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#boot_disk_size_gb DataprocCluster#boot_disk_size_gb}
  */
  readonly bootDiskSizeGb?: number;
  /**
  * The disk type of the primary disk attached to each node. One of "pd-ssd" or "pd-standard". Defaults to "pd-standard".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#boot_disk_type DataprocCluster#boot_disk_type}
  */
  readonly bootDiskType?: string;
  /**
  * The amount of local SSD disks that will be attached to each master cluster node. Defaults to 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#num_local_ssds DataprocCluster#num_local_ssds}
  */
  readonly numLocalSsds?: number;
}

function dataprocClusterClusterConfigWorkerConfigDiskConfigToTerraform(struct?: DataprocClusterClusterConfigWorkerConfigDiskConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    boot_disk_size_gb: cdktf.numberToTerraform(struct!.bootDiskSizeGb),
    boot_disk_type: cdktf.stringToTerraform(struct!.bootDiskType),
    num_local_ssds: cdktf.numberToTerraform(struct!.numLocalSsds),
  }
}

export interface DataprocClusterClusterConfigWorkerConfig {
  /**
  * The URI for the image to use for this master/worker
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#image_uri DataprocCluster#image_uri}
  */
  readonly imageUri?: string;
  /**
  * The name of a Google Compute Engine machine type to create for the master/worker
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#machine_type DataprocCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The name of a minimum generation of CPU family for the master/worker. If not specified, GCP will default to a predetermined computed value for each zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#min_cpu_platform DataprocCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Specifies the number of master/worker nodes to create. If not specified, GCP will default to a predetermined computed value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#num_instances DataprocCluster#num_instances}
  */
  readonly numInstances?: number;
  /**
  * accelerators block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#accelerators DataprocCluster#accelerators}
  */
  readonly accelerators?: DataprocClusterClusterConfigWorkerConfigAccelerators[];
  /**
  * disk_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#disk_config DataprocCluster#disk_config}
  */
  readonly diskConfig?: DataprocClusterClusterConfigWorkerConfigDiskConfig[];
}

function dataprocClusterClusterConfigWorkerConfigToTerraform(struct?: DataprocClusterClusterConfigWorkerConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    num_instances: cdktf.numberToTerraform(struct!.numInstances),
    accelerators: cdktf.listMapper(dataprocClusterClusterConfigWorkerConfigAcceleratorsToTerraform)(struct!.accelerators),
    disk_config: cdktf.listMapper(dataprocClusterClusterConfigWorkerConfigDiskConfigToTerraform)(struct!.diskConfig),
  }
}

export interface DataprocClusterClusterConfig {
  /**
  * The Cloud Storage staging bucket used to stage files, such as Hadoop jars, between client machines and the cluster. Note: If you don't explicitly specify a staging_bucket then GCP will auto create / assign one for you. However, you are not guaranteed an auto generated bucket which is solely dedicated to your cluster; it may be shared with other clusters in the same region/zone also choosing to use the auto generation option.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#staging_bucket DataprocCluster#staging_bucket}
  */
  readonly stagingBucket?: string;
  /**
  * The Cloud Storage temp bucket used to store ephemeral cluster and jobs data, such as Spark and MapReduce history files. Note: If you don't explicitly specify a temp_bucket then GCP will auto create / assign one for you.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#temp_bucket DataprocCluster#temp_bucket}
  */
  readonly tempBucket?: string;
  /**
  * autoscaling_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#autoscaling_config DataprocCluster#autoscaling_config}
  */
  readonly autoscalingConfig?: DataprocClusterClusterConfigAutoscalingConfig[];
  /**
  * encryption_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#encryption_config DataprocCluster#encryption_config}
  */
  readonly encryptionConfig?: DataprocClusterClusterConfigEncryptionConfig[];
  /**
  * gce_cluster_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#gce_cluster_config DataprocCluster#gce_cluster_config}
  */
  readonly gceClusterConfig?: DataprocClusterClusterConfigGceClusterConfig[];
  /**
  * initialization_action block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#initialization_action DataprocCluster#initialization_action}
  */
  readonly initializationAction?: DataprocClusterClusterConfigInitializationAction[];
  /**
  * master_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#master_config DataprocCluster#master_config}
  */
  readonly masterConfig?: DataprocClusterClusterConfigMasterConfig[];
  /**
  * preemptible_worker_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#preemptible_worker_config DataprocCluster#preemptible_worker_config}
  */
  readonly preemptibleWorkerConfig?: DataprocClusterClusterConfigPreemptibleWorkerConfig[];
  /**
  * security_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#security_config DataprocCluster#security_config}
  */
  readonly securityConfig?: DataprocClusterClusterConfigSecurityConfig[];
  /**
  * software_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#software_config DataprocCluster#software_config}
  */
  readonly softwareConfig?: DataprocClusterClusterConfigSoftwareConfig[];
  /**
  * worker_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#worker_config DataprocCluster#worker_config}
  */
  readonly workerConfig?: DataprocClusterClusterConfigWorkerConfig[];
}

function dataprocClusterClusterConfigToTerraform(struct?: DataprocClusterClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    staging_bucket: cdktf.stringToTerraform(struct!.stagingBucket),
    temp_bucket: cdktf.stringToTerraform(struct!.tempBucket),
    autoscaling_config: cdktf.listMapper(dataprocClusterClusterConfigAutoscalingConfigToTerraform)(struct!.autoscalingConfig),
    encryption_config: cdktf.listMapper(dataprocClusterClusterConfigEncryptionConfigToTerraform)(struct!.encryptionConfig),
    gce_cluster_config: cdktf.listMapper(dataprocClusterClusterConfigGceClusterConfigToTerraform)(struct!.gceClusterConfig),
    initialization_action: cdktf.listMapper(dataprocClusterClusterConfigInitializationActionToTerraform)(struct!.initializationAction),
    master_config: cdktf.listMapper(dataprocClusterClusterConfigMasterConfigToTerraform)(struct!.masterConfig),
    preemptible_worker_config: cdktf.listMapper(dataprocClusterClusterConfigPreemptibleWorkerConfigToTerraform)(struct!.preemptibleWorkerConfig),
    security_config: cdktf.listMapper(dataprocClusterClusterConfigSecurityConfigToTerraform)(struct!.securityConfig),
    software_config: cdktf.listMapper(dataprocClusterClusterConfigSoftwareConfigToTerraform)(struct!.softwareConfig),
    worker_config: cdktf.listMapper(dataprocClusterClusterConfigWorkerConfigToTerraform)(struct!.workerConfig),
  }
}

export interface DataprocClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#create DataprocCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#delete DataprocCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html#update DataprocCluster#update}
  */
  readonly update?: string;
}

function dataprocClusterTimeoutsToTerraform(struct?: DataprocClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html google_dataproc_cluster}
*/
export class DataprocCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_dataproc_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html google_dataproc_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataprocClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataprocClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataproc_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._gracefulDecommissionTimeout = config.gracefulDecommissionTimeout;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._clusterConfig = config.clusterConfig;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // graceful_decommission_timeout - computed: false, optional: true, required: false
  private _gracefulDecommissionTimeout?: string;
  public get gracefulDecommissionTimeout() {
    return this.getStringAttribute('graceful_decommission_timeout');
  }
  public set gracefulDecommissionTimeout(value: string ) {
    this._gracefulDecommissionTimeout = value;
  }
  public resetGracefulDecommissionTimeout() {
    this._gracefulDecommissionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulDecommissionTimeoutInput() {
    return this._gracefulDecommissionTimeout
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable
  public get labels(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('labels') as any; // Getting the computed value is not yet implemented
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
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

  // region - computed: false, optional: true, required: false
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string ) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // cluster_config - computed: false, optional: true, required: false
  private _clusterConfig?: DataprocClusterClusterConfig[];
  public get clusterConfig() {
    return this.interpolationForAttribute('cluster_config') as any;
  }
  public set clusterConfig(value: DataprocClusterClusterConfig[] ) {
    this._clusterConfig = value;
  }
  public resetClusterConfig() {
    this._clusterConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterConfigInput() {
    return this._clusterConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataprocClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataprocClusterTimeouts ) {
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
      graceful_decommission_timeout: cdktf.stringToTerraform(this._gracefulDecommissionTimeout),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      cluster_config: cdktf.listMapper(dataprocClusterClusterConfigToTerraform)(this._clusterConfig),
      timeouts: dataprocClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}
