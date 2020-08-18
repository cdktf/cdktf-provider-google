// https://www.terraform.io/docs/providers/google/r/dataproc_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataprocClusterConfig extends TerraformMetaArguments {
  /** The list of labels (key/value pairs) to be applied to instances in the cluster. GCP generates some itself including goog-dataproc-cluster-name which is the name of the cluster. */
  readonly labels?: { [key: string]: string };
  /** The name of the cluster, unique within the project and zone. */
  readonly name: string;
  /** The ID of the project in which the cluster will exist. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** The region in which the cluster and associated nodes will be created in. Defaults to global. */
  readonly region?: string;
  /** cluster_config block */
  readonly clusterConfig?: DataprocClusterClusterConfig[];
  /** timeouts block */
  readonly timeouts?: DataprocClusterTimeouts;
}
export interface DataprocClusterClusterConfigAutoscalingConfig {
  /** The autoscaling policy used by the cluster. */
  readonly policyUri: string;
}
export interface DataprocClusterClusterConfigEncryptionConfig {
  /** The Cloud KMS key name to use for PD disk encryption for all instances in the cluster. */
  readonly kmsKeyName: string;
}
export interface DataprocClusterClusterConfigGceClusterConfig {
  /** By default, clusters are not restricted to internal IP addresses, and will have ephemeral external IP addresses assigned to each instance. If set to true, all instances in the cluster will only have internal IP addresses. Note: Private Google Access (also known as privateIpGoogleAccess) must be enabled on the subnetwork that the cluster will be launched in. */
  readonly internalIpOnly?: boolean;
  /** A map of the Compute Engine metadata entries to add to all instances */
  readonly metadata?: { [key: string]: string };
  /** The name or self_link of the Google Compute Engine network to the cluster will be part of. Conflicts with subnetwork. If neither is specified, this defaults to the "default" network. */
  readonly network?: string;
  /** The service account to be used by the Node VMs. If not specified, the "default" service account is used. */
  readonly serviceAccount?: string;
  /** The set of Google API scopes to be made available on all of the node VMs under the service_account specified. These can be either FQDNs, or scope aliases. */
  readonly serviceAccountScopes?: string[];
  /** The name or self_link of the Google Compute Engine subnetwork the cluster will be part of. Conflicts with network. */
  readonly subnetwork?: string;
  /** The list of instance tags applied to instances in the cluster. Tags are used to identify valid sources or targets for network firewalls. */
  readonly tags?: string[];
  /** The GCP zone where your data is stored and used (i.e. where the master and the worker nodes will be created in). If region is set to 'global' (default) then zone is mandatory, otherwise GCP is able to make use of Auto Zone Placement to determine this automatically for you. Note: This setting additionally determines and restricts which computing resources are available for use with other configs such as cluster_config.master_config.machine_type and cluster_config.worker_config.machine_type. */
  readonly zone?: string;
}
export interface DataprocClusterClusterConfigInitializationAction {
  /** The script to be executed during initialization of the cluster. The script must be a GCS file with a gs:// prefix. */
  readonly script: string;
  /** The maximum duration (in seconds) which script is allowed to take to execute its action. GCP will default to a predetermined computed value if not set (currently 300). */
  readonly timeoutSec?: number;
}
export interface DataprocClusterClusterConfigMasterConfigAccelerators {
  /** The number of the accelerator cards of this type exposed to this instance. Often restricted to one of 1, 2, 4, or 8. */
  readonly acceleratorCount: number;
  /** The short name of the accelerator type to expose to this instance. For example, nvidia-tesla-k80. */
  readonly acceleratorType: string;
}
export interface DataprocClusterClusterConfigMasterConfigDiskConfig {
  /** Size of the primary disk attached to each node, specified in GB. The primary disk contains the boot volume and system libraries, and the smallest allowed disk size is 10GB. GCP will default to a predetermined computed value if not set (currently 500GB). Note: If SSDs are not attached, it also contains the HDFS data blocks and Hadoop working directories. */
  readonly bootDiskSizeGb?: number;
  /** The disk type of the primary disk attached to each node. One of "pd-ssd" or "pd-standard". Defaults to "pd-standard". */
  readonly bootDiskType?: string;
  /** The amount of local SSD disks that will be attached to each master cluster node. Defaults to 0. */
  readonly numLocalSsds?: number;
}
export interface DataprocClusterClusterConfigMasterConfig {
  /** The URI for the image to use for this master/worker */
  readonly imageUri?: string;
  /** The name of a Google Compute Engine machine type to create for the master/worker */
  readonly machineType?: string;
  /** The name of a minimum generation of CPU family for the master/worker. If not specified, GCP will default to a predetermined computed value for each zone. */
  readonly minCpuPlatform?: string;
  /** Specifies the number of master/worker nodes to create. If not specified, GCP will default to a predetermined computed value. */
  readonly numInstances?: number;
  /** accelerators block */
  readonly accelerators?: DataprocClusterClusterConfigMasterConfigAccelerators[];
  /** disk_config block */
  readonly diskConfig?: DataprocClusterClusterConfigMasterConfigDiskConfig[];
}
export interface DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig {
  /** Size of the primary disk attached to each preemptible worker node, specified in GB. The smallest allowed disk size is 10GB. GCP will default to a predetermined computed value if not set (currently 500GB). Note: If SSDs are not attached, it also contains the HDFS data blocks and Hadoop working directories. */
  readonly bootDiskSizeGb?: number;
  /** The disk type of the primary disk attached to each preemptible worker node. One of "pd-ssd" or "pd-standard". Defaults to "pd-standard". */
  readonly bootDiskType?: string;
  /** The amount of local SSD disks that will be attached to each preemptible worker node. Defaults to 0. */
  readonly numLocalSsds?: number;
}
export interface DataprocClusterClusterConfigPreemptibleWorkerConfig {
  /** Specifies the number of preemptible nodes to create. Defaults to 0. */
  readonly numInstances?: number;
  /** disk_config block */
  readonly diskConfig?: DataprocClusterClusterConfigPreemptibleWorkerConfigDiskConfig[];
}
export interface DataprocClusterClusterConfigSecurityConfigKerberosConfig {
  /** The admin server (IP or hostname) for the remote trusted realm in a cross realm trust relationship. */
  readonly crossRealmTrustAdminServer?: string;
  /** The KDC (IP or hostname) for the remote trusted realm in a cross realm trust relationship. */
  readonly crossRealmTrustKdc?: string;
  /** The remote realm the Dataproc on-cluster KDC will trust, should the user enable cross realm trust. */
  readonly crossRealmTrustRealm?: string;
  /** The Cloud Storage URI of a KMS encrypted file containing the shared password between the on-cluster
Kerberos realm and the remote trusted realm, in a cross realm trust relationship. */
  readonly crossRealmTrustSharedPasswordUri?: string;
  /** Flag to indicate whether to Kerberize the cluster. */
  readonly enableKerberos?: boolean;
  /** The Cloud Storage URI of a KMS encrypted file containing the master key of the KDC database. */
  readonly kdcDbKeyUri?: string;
  /** The Cloud Storage URI of a KMS encrypted file containing the password to the user provided key. For the self-signed certificate, this password is generated by Dataproc. */
  readonly keyPasswordUri?: string;
  /** The Cloud Storage URI of a KMS encrypted file containing
the password to the user provided keystore. For the self-signed certificate, this password is generated
by Dataproc */
  readonly keystorePasswordUri?: string;
  /** The Cloud Storage URI of the keystore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate. */
  readonly keystoreUri?: string;
  /** The uri of the KMS key used to encrypt various sensitive files. */
  readonly kmsKeyUri: string;
  /** The name of the on-cluster Kerberos realm. If not specified, the uppercased domain of hostnames will be the realm. */
  readonly realm?: string;
  /** The cloud Storage URI of a KMS encrypted file containing the root principal password. */
  readonly rootPrincipalPasswordUri: string;
  /** The lifetime of the ticket granting ticket, in hours. */
  readonly tgtLifetimeHours?: number;
  /** The Cloud Storage URI of a KMS encrypted file containing the password to the user provided truststore. For the self-signed certificate, this password is generated by Dataproc. */
  readonly truststorePasswordUri?: string;
  /** The Cloud Storage URI of the truststore file used for SSL encryption. If not provided, Dataproc will provide a self-signed certificate. */
  readonly truststoreUri?: string;
}
export interface DataprocClusterClusterConfigSecurityConfig {
  /** kerberos_config block */
  readonly kerberosConfig: DataprocClusterClusterConfigSecurityConfigKerberosConfig[];
}
export interface DataprocClusterClusterConfigSoftwareConfig {
  /** The Cloud Dataproc image version to use for the cluster - this controls the sets of software versions installed onto the nodes when you create clusters. If not specified, defaults to the latest version. */
  readonly imageVersion?: string;
  /** The set of optional components to activate on the cluster. */
  readonly optionalComponents?: string[];
  /** A list of override and additional properties (key/value pairs) used to modify various aspects of the common configuration files used when creating a cluster. */
  readonly overrideProperties?: { [key: string]: string };
}
export interface DataprocClusterClusterConfigWorkerConfigAccelerators {
  /** The number of the accelerator cards of this type exposed to this instance. Often restricted to one of 1, 2, 4, or 8. */
  readonly acceleratorCount: number;
  /** The short name of the accelerator type to expose to this instance. For example, nvidia-tesla-k80. */
  readonly acceleratorType: string;
}
export interface DataprocClusterClusterConfigWorkerConfigDiskConfig {
  /** Size of the primary disk attached to each node, specified in GB. The primary disk contains the boot volume and system libraries, and the smallest allowed disk size is 10GB. GCP will default to a predetermined computed value if not set (currently 500GB). Note: If SSDs are not attached, it also contains the HDFS data blocks and Hadoop working directories. */
  readonly bootDiskSizeGb?: number;
  /** The disk type of the primary disk attached to each node. One of "pd-ssd" or "pd-standard". Defaults to "pd-standard". */
  readonly bootDiskType?: string;
  /** The amount of local SSD disks that will be attached to each master cluster node. Defaults to 0. */
  readonly numLocalSsds?: number;
}
export interface DataprocClusterClusterConfigWorkerConfig {
  /** The URI for the image to use for this master/worker */
  readonly imageUri?: string;
  /** The name of a Google Compute Engine machine type to create for the master/worker */
  readonly machineType?: string;
  /** The name of a minimum generation of CPU family for the master/worker. If not specified, GCP will default to a predetermined computed value for each zone. */
  readonly minCpuPlatform?: string;
  /** Specifies the number of master/worker nodes to create. If not specified, GCP will default to a predetermined computed value. */
  readonly numInstances?: number;
  /** accelerators block */
  readonly accelerators?: DataprocClusterClusterConfigWorkerConfigAccelerators[];
  /** disk_config block */
  readonly diskConfig?: DataprocClusterClusterConfigWorkerConfigDiskConfig[];
}
export interface DataprocClusterClusterConfig {
  /** The Cloud Storage staging bucket used to stage files, such as Hadoop jars, between client machines and the cluster. Note: If you don't explicitly specify a staging_bucket then GCP will auto create / assign one for you. However, you are not guaranteed an auto generated bucket which is solely dedicated to your cluster; it may be shared with other clusters in the same region/zone also choosing to use the auto generation option. */
  readonly stagingBucket?: string;
  /** autoscaling_config block */
  readonly autoscalingConfig?: DataprocClusterClusterConfigAutoscalingConfig[];
  /** encryption_config block */
  readonly encryptionConfig?: DataprocClusterClusterConfigEncryptionConfig[];
  /** gce_cluster_config block */
  readonly gceClusterConfig?: DataprocClusterClusterConfigGceClusterConfig[];
  /** initialization_action block */
  readonly initializationAction?: DataprocClusterClusterConfigInitializationAction[];
  /** master_config block */
  readonly masterConfig?: DataprocClusterClusterConfigMasterConfig[];
  /** preemptible_worker_config block */
  readonly preemptibleWorkerConfig?: DataprocClusterClusterConfigPreemptibleWorkerConfig[];
  /** security_config block */
  readonly securityConfig?: DataprocClusterClusterConfigSecurityConfig[];
  /** software_config block */
  readonly softwareConfig?: DataprocClusterClusterConfigSoftwareConfig[];
  /** worker_config block */
  readonly workerConfig?: DataprocClusterClusterConfigWorkerConfig[];
}
export interface DataprocClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DataprocCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }
  public get labels(): { [key: string]: string } | undefined {
    return this._labels; // Getting the computed value is not yet implemented
  }
  public set labels(value: { [key: string]: string } | undefined) {
    this._labels = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region;
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // cluster_config - computed: false, optional: true, required: false
  private _clusterConfig?: DataprocClusterClusterConfig[];
  public get clusterConfig() {
    return this._clusterConfig;
  }
  public set clusterConfig(value: DataprocClusterClusterConfig[] | undefined) {
    this._clusterConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataprocClusterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataprocClusterTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      labels: this._labels,
      name: this._name,
      project: this._project,
      region: this._region,
      cluster_config: this._clusterConfig,
      timeouts: this._timeouts,
    };
  }
}
