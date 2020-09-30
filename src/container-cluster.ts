// https://www.terraform.io/docs/providers/google/r/container_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ContainerClusterConfig extends TerraformMetaArguments {
  /** The IP address range of the Kubernetes pods in this cluster in CIDR notation (e.g. 10.96.0.0/14). Leave blank to have one automatically chosen or specify a /14 block in 10.0.0.0/8. This field will only work for routes-based clusters, where ip_allocation_policy is not defined. */
  readonly clusterIpv4Cidr?: string;
  /** The default maximum number of pods per node in this cluster. This doesn't work on "routes-based" clusters, clusters that don't have IP Aliasing enabled. */
  readonly defaultMaxPodsPerNode?: number;
  /**  Description of the cluster. */
  readonly description?: string;
  /** Enable Binary Authorization for this cluster. If enabled, all container images will be validated by Google Binary Authorization. */
  readonly enableBinaryAuthorization?: boolean;
  /** Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network. */
  readonly enableIntranodeVisibility?: boolean;
  /** Whether to enable Kubernetes Alpha features for this cluster. Note that when this option is enabled, the cluster cannot be upgraded and will be automatically deleted after 30 days. */
  readonly enableKubernetesAlpha?: boolean;
  /** Whether the ABAC authorizer is enabled for this cluster. When enabled, identities in the system, including service accounts, nodes, and controllers, will have statically granted permissions beyond those provided by the RBAC configuration or IAM. Defaults to false. */
  readonly enableLegacyAbac?: boolean;
  /** Enable Shielded Nodes features on all nodes in this cluster. Defaults to false. */
  readonly enableShieldedNodes?: boolean;
  /** Whether to enable Cloud TPU resources in this cluster. */
  readonly enableTpu?: boolean;
  /** The number of nodes to create in this cluster's default node pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Must be set if node_pool is not set. If you're using google_container_node_pool objects with no default node pool, you'll need to set this to a value of at least 1, alongside setting remove_default_node_pool to true. */
  readonly initialNodeCount?: number;
  /** The location (region or zone) in which the cluster master will be created, as well as the default node location. If you specify a zone (such as us-central1-a), the cluster will be a zonal cluster with a single cluster master. If you specify a region (such as us-west1), the cluster will be a regional cluster with multiple masters spread across zones in the region, and with default node locations in those zones as well. */
  readonly location?: string;
  /** The logging service that the cluster should write logs to. Available options include logging.googleapis.com(Legacy Stackdriver), logging.googleapis.com/kubernetes(Stackdriver Kubernetes Engine Logging), and none. Defaults to logging.googleapis.com/kubernetes. */
  readonly loggingService?: string;
  /** The minimum version of the master. GKE will auto-update the master to new versions, so this does not guarantee the current master version--use the read-only master_version field to obtain that. If unset, the cluster's version will be set by GKE to the version of the most recent official release (which is not necessarily the latest version). */
  readonly minMasterVersion?: string;
  /** The monitoring service that the cluster should write metrics to. Automatically send metrics from pods in the cluster to the Google Cloud Monitoring API. VM metrics will be collected by Google Compute Engine regardless of this setting Available options include monitoring.googleapis.com(Legacy Stackdriver), monitoring.googleapis.com/kubernetes(Stackdriver Kubernetes Engine Monitoring), and none. Defaults to monitoring.googleapis.com/kubernetes. */
  readonly monitoringService?: string;
  /** The name of the cluster, unique within the project and location. */
  readonly name: string;
  /** The name or self_link of the Google Compute Engine network to which the cluster is connected. For Shared VPC, set this to the self link of the shared network. */
  readonly network?: string;
  /** The list of zones in which the cluster's nodes are located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If this is specified for a zonal cluster, omit the cluster's zone. */
  readonly nodeLocations?: string[];
  /** The Kubernetes version on the nodes. Must either be unset or set to the same value as min_master_version on create. Defaults to the default version set by GKE which is not necessarily the latest version. This only affects nodes in the default node pool. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way. To update nodes in other node pools, use the version attribute on the node pool. */
  readonly nodeVersion?: string;
  /** The ID of the project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** If true, deletes the default node pool upon cluster creation. If you're using google_container_node_pool resources with no default node pool, this should be set to true, alongside setting initial_node_count to at least 1. */
  readonly removeDefaultNodePool?: boolean;
  /** The GCE resource labels (a map of key/value pairs) to be applied to the cluster. */
  readonly resourceLabels?: { [key: string]: string };
  /** The name or self_link of the Google Compute Engine subnetwork in which the cluster's instances are launched. */
  readonly subnetwork?: string;
  /** addons_config block */
  readonly addonsConfig?: ContainerClusterAddonsConfig[];
  /** authenticator_groups_config block */
  readonly authenticatorGroupsConfig?: ContainerClusterAuthenticatorGroupsConfig[];
  /** cluster_autoscaling block */
  readonly clusterAutoscaling?: ContainerClusterClusterAutoscaling[];
  /** database_encryption block */
  readonly databaseEncryption?: ContainerClusterDatabaseEncryption[];
  /** ip_allocation_policy block */
  readonly ipAllocationPolicy?: ContainerClusterIpAllocationPolicy[];
  /** maintenance_policy block */
  readonly maintenancePolicy?: ContainerClusterMaintenancePolicy[];
  /** master_auth block */
  readonly masterAuth?: ContainerClusterMasterAuth[];
  /** master_authorized_networks_config block */
  readonly masterAuthorizedNetworksConfig?: ContainerClusterMasterAuthorizedNetworksConfig[];
  /** network_policy block */
  readonly networkPolicy?: ContainerClusterNetworkPolicy[];
  /** node_config block */
  readonly nodeConfig?: ContainerClusterNodeConfig[];
  /** node_pool block */
  readonly nodePool?: ContainerClusterNodePool[];
  /** pod_security_policy_config block */
  readonly podSecurityPolicyConfig?: ContainerClusterPodSecurityPolicyConfig[];
  /** private_cluster_config block */
  readonly privateClusterConfig?: ContainerClusterPrivateClusterConfig[];
  /** release_channel block */
  readonly releaseChannel?: ContainerClusterReleaseChannel[];
  /** resource_usage_export_config block */
  readonly resourceUsageExportConfig?: ContainerClusterResourceUsageExportConfig[];
  /** timeouts block */
  readonly timeouts?: ContainerClusterTimeouts;
  /** vertical_pod_autoscaling block */
  readonly verticalPodAutoscaling?: ContainerClusterVerticalPodAutoscaling[];
  /** workload_identity_config block */
  readonly workloadIdentityConfig?: ContainerClusterWorkloadIdentityConfig[];
}
export interface ContainerClusterAddonsConfigCloudrunConfig {
  readonly disabled: boolean;
  readonly loadBalancerType?: string;
}
export interface ContainerClusterAddonsConfigHorizontalPodAutoscaling {
  readonly disabled: boolean;
}
export interface ContainerClusterAddonsConfigHttpLoadBalancing {
  readonly disabled: boolean;
}
export interface ContainerClusterAddonsConfigNetworkPolicyConfig {
  readonly disabled: boolean;
}
export interface ContainerClusterAddonsConfig {
  /** cloudrun_config block */
  readonly cloudrunConfig?: ContainerClusterAddonsConfigCloudrunConfig[];
  /** horizontal_pod_autoscaling block */
  readonly horizontalPodAutoscaling?: ContainerClusterAddonsConfigHorizontalPodAutoscaling[];
  /** http_load_balancing block */
  readonly httpLoadBalancing?: ContainerClusterAddonsConfigHttpLoadBalancing[];
  /** network_policy_config block */
  readonly networkPolicyConfig?: ContainerClusterAddonsConfigNetworkPolicyConfig[];
}
export interface ContainerClusterAuthenticatorGroupsConfig {
  /** The name of the RBAC security group for use with Google security groups in Kubernetes RBAC. Group name must be in format gke-security-groups@yourdomain.com. */
  readonly securityGroup: string;
}
export interface ContainerClusterClusterAutoscalingAutoProvisioningDefaults {
  /** Scopes that are used by NAP when creating node pools. */
  readonly oauthScopes?: string[];
  /** The Google Cloud Platform Service Account to be used by the node VMs. */
  readonly serviceAccount?: string;
}
export interface ContainerClusterClusterAutoscalingResourceLimits {
  /** Maximum amount of the resource in the cluster. */
  readonly maximum?: number;
  /** Minimum amount of the resource in the cluster. */
  readonly minimum?: number;
  /** The type of the resource. For example, cpu and memory. See the guide to using Node Auto-Provisioning for a list of types. */
  readonly resourceType: string;
}
export interface ContainerClusterClusterAutoscaling {
  /** Whether node auto-provisioning is enabled. Resource limits for cpu and memory must be defined to enable node auto-provisioning. */
  readonly enabled: boolean;
  /** auto_provisioning_defaults block */
  readonly autoProvisioningDefaults?: ContainerClusterClusterAutoscalingAutoProvisioningDefaults[];
  /** resource_limits block */
  readonly resourceLimits?: ContainerClusterClusterAutoscalingResourceLimits[];
}
export interface ContainerClusterDatabaseEncryption {
  /** The key to use to encrypt/decrypt secrets. */
  readonly keyName?: string;
  /** ENCRYPTED or DECRYPTED. */
  readonly state: string;
}
export interface ContainerClusterIpAllocationPolicy {
  /** The IP address range for the cluster pod IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use. */
  readonly clusterIpv4CidrBlock?: string;
  /** The name of the existing secondary range in the cluster's subnetwork to use for pod IP addresses. Alternatively, cluster_ipv4_cidr_block can be used to automatically create a GKE-managed one. */
  readonly clusterSecondaryRangeName?: string;
  /** The IP address range of the services IPs in this cluster. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use. */
  readonly servicesIpv4CidrBlock?: string;
  /** The name of the existing secondary range in the cluster's subnetwork to use for service ClusterIPs. Alternatively, services_ipv4_cidr_block can be used to automatically create a GKE-managed one. */
  readonly servicesSecondaryRangeName?: string;
}
export interface ContainerClusterMaintenancePolicyDailyMaintenanceWindow {
  readonly startTime: string;
}
export interface ContainerClusterMaintenancePolicyRecurringWindow {
  readonly endTime: string;
  readonly recurrence: string;
  readonly startTime: string;
}
export interface ContainerClusterMaintenancePolicy {
  /** daily_maintenance_window block */
  readonly dailyMaintenanceWindow?: ContainerClusterMaintenancePolicyDailyMaintenanceWindow[];
  /** recurring_window block */
  readonly recurringWindow?: ContainerClusterMaintenancePolicyRecurringWindow[];
}
export interface ContainerClusterMasterAuthClientCertificateConfig {
  /** Whether client certificate authorization is enabled for this cluster. */
  readonly issueClientCertificate: boolean;
}
export interface ContainerClusterMasterAuth {
  /** The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint. */
  readonly password?: string;
  /** The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint. If not present basic auth will be disabled. */
  readonly username?: string;
  /** client_certificate_config block */
  readonly clientCertificateConfig?: ContainerClusterMasterAuthClientCertificateConfig[];
}
export interface ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks {
  /** External network that can access Kubernetes master through HTTPS. Must be specified in CIDR notation. */
  readonly cidrBlock: string;
  /** Field for users to identify CIDR blocks. */
  readonly displayName?: string;
}
export interface ContainerClusterMasterAuthorizedNetworksConfig {
  /** cidr_blocks block */
  readonly cidrBlocks?: ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks[];
}
export interface ContainerClusterNetworkPolicy {
  /** Whether network policy is enabled on the cluster. */
  readonly enabled: boolean;
  /** The selected network policy provider. Defaults to PROVIDER_UNSPECIFIED. */
  readonly provider?: string;
}
export interface ContainerClusterNodeConfigGuestAccelerator {
  readonly count?: number;
  readonly type?: string;
}
export interface ContainerClusterNodeConfigTaint {
  readonly effect?: string;
  readonly key?: string;
  readonly value?: string;
}
export interface ContainerClusterNodeConfigShieldedInstanceConfig {
  readonly enableIntegrityMonitoring?: boolean;
  readonly enableSecureBoot?: boolean;
}
export interface ContainerClusterNodeConfigWorkloadMetadataConfig {
  readonly nodeMetadata: string;
}
export interface ContainerClusterNodeConfig {
  readonly diskSizeGb?: number;
  readonly diskType?: string;
  readonly guestAccelerator?: ContainerClusterNodeConfigGuestAccelerator[];
  readonly imageType?: string;
  readonly labels?: { [key: string]: string };
  readonly localSsdCount?: number;
  readonly machineType?: string;
  readonly metadata?: { [key: string]: string };
  readonly minCpuPlatform?: string;
  readonly oauthScopes?: string[];
  readonly preemptible?: boolean;
  readonly serviceAccount?: string;
  readonly tags?: string[];
  readonly taint?: ContainerClusterNodeConfigTaint[];
  /** shielded_instance_config block */
  readonly shieldedInstanceConfig?: ContainerClusterNodeConfigShieldedInstanceConfig[];
  /** workload_metadata_config block */
  readonly workloadMetadataConfig?: ContainerClusterNodeConfigWorkloadMetadataConfig[];
}
export interface ContainerClusterNodePoolAutoscaling {
  /** Maximum number of nodes in the NodePool. Must be >= min_node_count. */
  readonly maxNodeCount: number;
  /** Minimum number of nodes in the NodePool. Must be >=0 and <= max_node_count. */
  readonly minNodeCount: number;
}
export interface ContainerClusterNodePoolManagement {
  /** Whether the nodes will be automatically repaired. */
  readonly autoRepair?: boolean;
  /** Whether the nodes will be automatically upgraded. */
  readonly autoUpgrade?: boolean;
}
export interface ContainerClusterNodePoolNodeConfigGuestAccelerator {
  readonly count?: number;
  readonly type?: string;
}
export interface ContainerClusterNodePoolNodeConfigTaint {
  readonly effect?: string;
  readonly key?: string;
  readonly value?: string;
}
export interface ContainerClusterNodePoolNodeConfigShieldedInstanceConfig {
  readonly enableIntegrityMonitoring?: boolean;
  readonly enableSecureBoot?: boolean;
}
export interface ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig {
  readonly nodeMetadata: string;
}
export interface ContainerClusterNodePoolNodeConfig {
  readonly diskSizeGb?: number;
  readonly diskType?: string;
  readonly guestAccelerator?: ContainerClusterNodePoolNodeConfigGuestAccelerator[];
  readonly imageType?: string;
  readonly labels?: { [key: string]: string };
  readonly localSsdCount?: number;
  readonly machineType?: string;
  readonly metadata?: { [key: string]: string };
  readonly minCpuPlatform?: string;
  readonly oauthScopes?: string[];
  readonly preemptible?: boolean;
  readonly serviceAccount?: string;
  readonly tags?: string[];
  readonly taint?: ContainerClusterNodePoolNodeConfigTaint[];
  /** shielded_instance_config block */
  readonly shieldedInstanceConfig?: ContainerClusterNodePoolNodeConfigShieldedInstanceConfig[];
  /** workload_metadata_config block */
  readonly workloadMetadataConfig?: ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig[];
}
export interface ContainerClusterNodePoolUpgradeSettings {
  /** The number of additional nodes that can be added to the node pool during an upgrade. Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater. */
  readonly maxSurge: number;
  /** The number of nodes that can be simultaneously unavailable during an upgrade. Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater. */
  readonly maxUnavailable: number;
}
export interface ContainerClusterNodePool {
  /** The initial number of nodes for the pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource. */
  readonly initialNodeCount?: number;
  /** The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled. */
  readonly maxPodsPerNode?: number;
  /** The name of the node pool. If left blank, Terraform will auto-generate a unique name. */
  readonly name?: string;
  /** Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name. */
  readonly namePrefix?: string;
  /** The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling. */
  readonly nodeCount?: number;
  /** The list of zones in which the node pool's nodes should be located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used. */
  readonly nodeLocations?: string[];
  /** The Kubernetes version for the nodes in this pool. Note that if this field and auto_upgrade are both specified, they will fight each other for what the node version should be, so setting both is highly discouraged. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way. */
  readonly version?: string;
  /** autoscaling block */
  readonly autoscaling?: ContainerClusterNodePoolAutoscaling[];
  /** management block */
  readonly management?: ContainerClusterNodePoolManagement[];
  /** node_config block */
  readonly nodeConfig?: ContainerClusterNodePoolNodeConfig[];
  /** upgrade_settings block */
  readonly upgradeSettings?: ContainerClusterNodePoolUpgradeSettings[];
}
export interface ContainerClusterPodSecurityPolicyConfig {
  /** Enable the PodSecurityPolicy controller for this cluster. If enabled, pods must be valid under a PodSecurityPolicy to be created. */
  readonly enabled: boolean;
}
export interface ContainerClusterPrivateClusterConfig {
  /** Enables the private cluster feature, creating a private endpoint on the cluster. In a private cluster, nodes only have RFC 1918 private addresses and communicate with the master's private endpoint via private networking. */
  readonly enablePrivateEndpoint: boolean;
  /** When true, the cluster's private endpoint is used as the cluster endpoint and access through the public endpoint is disabled. When false, either endpoint can be used. This field only applies to private clusters, when enable_private_nodes is true. */
  readonly enablePrivateNodes?: boolean;
  /** The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning private IP addresses to the cluster master(s) and the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network, and it must be a /28 subnet. See Private Cluster Limitations for more details. This field only applies to private clusters, when enable_private_nodes is true. */
  readonly masterIpv4CidrBlock?: string;
}
export interface ContainerClusterReleaseChannel {
  /** The selected release channel. */
  readonly channel: string;
}
export interface ContainerClusterResourceUsageExportConfigBigqueryDestination {
  /** The ID of a BigQuery Dataset. */
  readonly datasetId: string;
}
export interface ContainerClusterResourceUsageExportConfig {
  /** Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created in the cluster to meter network egress traffic. */
  readonly enableNetworkEgressMetering?: boolean;
  /** Whether to enable resource consumption metering on this cluster. When enabled, a table will be created in the resource export BigQuery dataset to store resource consumption data. The resulting table can be joined with the resource usage table or with BigQuery billing export. Defaults to true. */
  readonly enableResourceConsumptionMetering?: boolean;
  /** bigquery_destination block */
  readonly bigqueryDestination: ContainerClusterResourceUsageExportConfigBigqueryDestination[];
}
export interface ContainerClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}
export interface ContainerClusterVerticalPodAutoscaling {
  /** Enables vertical pod autoscaling. */
  readonly enabled: boolean;
}
export interface ContainerClusterWorkloadIdentityConfig {
  readonly identityNamespace: string;
}

// Resource

export class ContainerCluster extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ContainerClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._clusterIpv4Cidr = config.clusterIpv4Cidr;
    this._defaultMaxPodsPerNode = config.defaultMaxPodsPerNode;
    this._description = config.description;
    this._enableBinaryAuthorization = config.enableBinaryAuthorization;
    this._enableIntranodeVisibility = config.enableIntranodeVisibility;
    this._enableKubernetesAlpha = config.enableKubernetesAlpha;
    this._enableLegacyAbac = config.enableLegacyAbac;
    this._enableShieldedNodes = config.enableShieldedNodes;
    this._enableTpu = config.enableTpu;
    this._initialNodeCount = config.initialNodeCount;
    this._location = config.location;
    this._loggingService = config.loggingService;
    this._minMasterVersion = config.minMasterVersion;
    this._monitoringService = config.monitoringService;
    this._name = config.name;
    this._network = config.network;
    this._nodeLocations = config.nodeLocations;
    this._nodeVersion = config.nodeVersion;
    this._project = config.project;
    this._removeDefaultNodePool = config.removeDefaultNodePool;
    this._resourceLabels = config.resourceLabels;
    this._subnetwork = config.subnetwork;
    this._addonsConfig = config.addonsConfig;
    this._authenticatorGroupsConfig = config.authenticatorGroupsConfig;
    this._clusterAutoscaling = config.clusterAutoscaling;
    this._databaseEncryption = config.databaseEncryption;
    this._ipAllocationPolicy = config.ipAllocationPolicy;
    this._maintenancePolicy = config.maintenancePolicy;
    this._masterAuth = config.masterAuth;
    this._masterAuthorizedNetworksConfig = config.masterAuthorizedNetworksConfig;
    this._networkPolicy = config.networkPolicy;
    this._nodeConfig = config.nodeConfig;
    this._nodePool = config.nodePool;
    this._podSecurityPolicyConfig = config.podSecurityPolicyConfig;
    this._privateClusterConfig = config.privateClusterConfig;
    this._releaseChannel = config.releaseChannel;
    this._resourceUsageExportConfig = config.resourceUsageExportConfig;
    this._timeouts = config.timeouts;
    this._verticalPodAutoscaling = config.verticalPodAutoscaling;
    this._workloadIdentityConfig = config.workloadIdentityConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_ipv4_cidr - computed: true, optional: true, required: false
  private _clusterIpv4Cidr?: string;
  public get clusterIpv4Cidr() {
    return this._clusterIpv4Cidr ?? this.getStringAttribute('cluster_ipv4_cidr');
  }
  public set clusterIpv4Cidr(value: string | undefined) {
    this._clusterIpv4Cidr = value;
  }

  // default_max_pods_per_node - computed: true, optional: true, required: false
  private _defaultMaxPodsPerNode?: number;
  public get defaultMaxPodsPerNode() {
    return this._defaultMaxPodsPerNode ?? this.getNumberAttribute('default_max_pods_per_node');
  }
  public set defaultMaxPodsPerNode(value: number | undefined) {
    this._defaultMaxPodsPerNode = value;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // enable_binary_authorization - computed: false, optional: true, required: false
  private _enableBinaryAuthorization?: boolean;
  public get enableBinaryAuthorization() {
    return this._enableBinaryAuthorization;
  }
  public set enableBinaryAuthorization(value: boolean | undefined) {
    this._enableBinaryAuthorization = value;
  }

  // enable_intranode_visibility - computed: false, optional: true, required: false
  private _enableIntranodeVisibility?: boolean;
  public get enableIntranodeVisibility() {
    return this._enableIntranodeVisibility;
  }
  public set enableIntranodeVisibility(value: boolean | undefined) {
    this._enableIntranodeVisibility = value;
  }

  // enable_kubernetes_alpha - computed: false, optional: true, required: false
  private _enableKubernetesAlpha?: boolean;
  public get enableKubernetesAlpha() {
    return this._enableKubernetesAlpha;
  }
  public set enableKubernetesAlpha(value: boolean | undefined) {
    this._enableKubernetesAlpha = value;
  }

  // enable_legacy_abac - computed: false, optional: true, required: false
  private _enableLegacyAbac?: boolean;
  public get enableLegacyAbac() {
    return this._enableLegacyAbac;
  }
  public set enableLegacyAbac(value: boolean | undefined) {
    this._enableLegacyAbac = value;
  }

  // enable_shielded_nodes - computed: false, optional: true, required: false
  private _enableShieldedNodes?: boolean;
  public get enableShieldedNodes() {
    return this._enableShieldedNodes;
  }
  public set enableShieldedNodes(value: boolean | undefined) {
    this._enableShieldedNodes = value;
  }

  // enable_tpu - computed: false, optional: true, required: false
  private _enableTpu?: boolean;
  public get enableTpu() {
    return this._enableTpu;
  }
  public set enableTpu(value: boolean | undefined) {
    this._enableTpu = value;
  }

  // endpoint - computed: true, optional: false, required: true
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // initial_node_count - computed: false, optional: true, required: false
  private _initialNodeCount?: number;
  public get initialNodeCount() {
    return this._initialNodeCount;
  }
  public set initialNodeCount(value: number | undefined) {
    this._initialNodeCount = value;
  }

  // instance_group_urls - computed: true, optional: false, required: true
  public get instanceGroupUrls() {
    return this.getListAttribute('instance_group_urls');
  }

  // label_fingerprint - computed: true, optional: false, required: true
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
  }

  // location - computed: true, optional: true, required: false
  private _location?: string;
  public get location() {
    return this._location ?? this.getStringAttribute('location');
  }
  public set location(value: string | undefined) {
    this._location = value;
  }

  // logging_service - computed: true, optional: true, required: false
  private _loggingService?: string;
  public get loggingService() {
    return this._loggingService ?? this.getStringAttribute('logging_service');
  }
  public set loggingService(value: string | undefined) {
    this._loggingService = value;
  }

  // master_version - computed: true, optional: false, required: true
  public get masterVersion() {
    return this.getStringAttribute('master_version');
  }

  // min_master_version - computed: false, optional: true, required: false
  private _minMasterVersion?: string;
  public get minMasterVersion() {
    return this._minMasterVersion;
  }
  public set minMasterVersion(value: string | undefined) {
    this._minMasterVersion = value;
  }

  // monitoring_service - computed: true, optional: true, required: false
  private _monitoringService?: string;
  public get monitoringService() {
    return this._monitoringService ?? this.getStringAttribute('monitoring_service');
  }
  public set monitoringService(value: string | undefined) {
    this._monitoringService = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string;
  public get network() {
    return this._network;
  }
  public set network(value: string | undefined) {
    this._network = value;
  }

  // node_locations - computed: true, optional: true, required: false
  private _nodeLocations?: string[];
  public get nodeLocations() {
    return this._nodeLocations ?? this.getListAttribute('node_locations');
  }
  public set nodeLocations(value: string[] | undefined) {
    this._nodeLocations = value;
  }

  // node_version - computed: true, optional: true, required: false
  private _nodeVersion?: string;
  public get nodeVersion() {
    return this._nodeVersion ?? this.getStringAttribute('node_version');
  }
  public set nodeVersion(value: string | undefined) {
    this._nodeVersion = value;
  }

  // operation - computed: true, optional: false, required: true
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // remove_default_node_pool - computed: false, optional: true, required: false
  private _removeDefaultNodePool?: boolean;
  public get removeDefaultNodePool() {
    return this._removeDefaultNodePool;
  }
  public set removeDefaultNodePool(value: boolean | undefined) {
    this._removeDefaultNodePool = value;
  }

  // resource_labels - computed: false, optional: true, required: false
  private _resourceLabels?: { [key: string]: string };
  public get resourceLabels() {
    return this._resourceLabels;
  }
  public set resourceLabels(value: { [key: string]: string } | undefined) {
    this._resourceLabels = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // services_ipv4_cidr - computed: true, optional: false, required: true
  public get servicesIpv4Cidr() {
    return this.getStringAttribute('services_ipv4_cidr');
  }

  // subnetwork - computed: true, optional: true, required: false
  private _subnetwork?: string;
  public get subnetwork() {
    return this._subnetwork ?? this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string | undefined) {
    this._subnetwork = value;
  }

  // addons_config - computed: false, optional: true, required: false
  private _addonsConfig?: ContainerClusterAddonsConfig[];
  public get addonsConfig() {
    return this._addonsConfig;
  }
  public set addonsConfig(value: ContainerClusterAddonsConfig[] | undefined) {
    this._addonsConfig = value;
  }

  // authenticator_groups_config - computed: false, optional: true, required: false
  private _authenticatorGroupsConfig?: ContainerClusterAuthenticatorGroupsConfig[];
  public get authenticatorGroupsConfig() {
    return this._authenticatorGroupsConfig;
  }
  public set authenticatorGroupsConfig(value: ContainerClusterAuthenticatorGroupsConfig[] | undefined) {
    this._authenticatorGroupsConfig = value;
  }

  // cluster_autoscaling - computed: false, optional: true, required: false
  private _clusterAutoscaling?: ContainerClusterClusterAutoscaling[];
  public get clusterAutoscaling() {
    return this._clusterAutoscaling;
  }
  public set clusterAutoscaling(value: ContainerClusterClusterAutoscaling[] | undefined) {
    this._clusterAutoscaling = value;
  }

  // database_encryption - computed: false, optional: true, required: false
  private _databaseEncryption?: ContainerClusterDatabaseEncryption[];
  public get databaseEncryption() {
    return this._databaseEncryption;
  }
  public set databaseEncryption(value: ContainerClusterDatabaseEncryption[] | undefined) {
    this._databaseEncryption = value;
  }

  // ip_allocation_policy - computed: false, optional: true, required: false
  private _ipAllocationPolicy?: ContainerClusterIpAllocationPolicy[];
  public get ipAllocationPolicy() {
    return this._ipAllocationPolicy;
  }
  public set ipAllocationPolicy(value: ContainerClusterIpAllocationPolicy[] | undefined) {
    this._ipAllocationPolicy = value;
  }

  // maintenance_policy - computed: false, optional: true, required: false
  private _maintenancePolicy?: ContainerClusterMaintenancePolicy[];
  public get maintenancePolicy() {
    return this._maintenancePolicy;
  }
  public set maintenancePolicy(value: ContainerClusterMaintenancePolicy[] | undefined) {
    this._maintenancePolicy = value;
  }

  // master_auth - computed: false, optional: true, required: false
  private _masterAuth?: ContainerClusterMasterAuth[];
  public get masterAuth() {
    return this._masterAuth;
  }
  public set masterAuth(value: ContainerClusterMasterAuth[] | undefined) {
    this._masterAuth = value;
  }

  // master_authorized_networks_config - computed: false, optional: true, required: false
  private _masterAuthorizedNetworksConfig?: ContainerClusterMasterAuthorizedNetworksConfig[];
  public get masterAuthorizedNetworksConfig() {
    return this._masterAuthorizedNetworksConfig;
  }
  public set masterAuthorizedNetworksConfig(value: ContainerClusterMasterAuthorizedNetworksConfig[] | undefined) {
    this._masterAuthorizedNetworksConfig = value;
  }

  // network_policy - computed: false, optional: true, required: false
  private _networkPolicy?: ContainerClusterNetworkPolicy[];
  public get networkPolicy() {
    return this._networkPolicy;
  }
  public set networkPolicy(value: ContainerClusterNetworkPolicy[] | undefined) {
    this._networkPolicy = value;
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig?: ContainerClusterNodeConfig[];
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public set nodeConfig(value: ContainerClusterNodeConfig[] | undefined) {
    this._nodeConfig = value;
  }

  // node_pool - computed: false, optional: true, required: false
  private _nodePool?: ContainerClusterNodePool[];
  public get nodePool() {
    return this._nodePool;
  }
  public set nodePool(value: ContainerClusterNodePool[] | undefined) {
    this._nodePool = value;
  }

  // pod_security_policy_config - computed: false, optional: true, required: false
  private _podSecurityPolicyConfig?: ContainerClusterPodSecurityPolicyConfig[];
  public get podSecurityPolicyConfig() {
    return this._podSecurityPolicyConfig;
  }
  public set podSecurityPolicyConfig(value: ContainerClusterPodSecurityPolicyConfig[] | undefined) {
    this._podSecurityPolicyConfig = value;
  }

  // private_cluster_config - computed: false, optional: true, required: false
  private _privateClusterConfig?: ContainerClusterPrivateClusterConfig[];
  public get privateClusterConfig() {
    return this._privateClusterConfig;
  }
  public set privateClusterConfig(value: ContainerClusterPrivateClusterConfig[] | undefined) {
    this._privateClusterConfig = value;
  }

  // release_channel - computed: false, optional: true, required: false
  private _releaseChannel?: ContainerClusterReleaseChannel[];
  public get releaseChannel() {
    return this._releaseChannel;
  }
  public set releaseChannel(value: ContainerClusterReleaseChannel[] | undefined) {
    this._releaseChannel = value;
  }

  // resource_usage_export_config - computed: false, optional: true, required: false
  private _resourceUsageExportConfig?: ContainerClusterResourceUsageExportConfig[];
  public get resourceUsageExportConfig() {
    return this._resourceUsageExportConfig;
  }
  public set resourceUsageExportConfig(value: ContainerClusterResourceUsageExportConfig[] | undefined) {
    this._resourceUsageExportConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ContainerClusterTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ContainerClusterTimeouts | undefined) {
    this._timeouts = value;
  }

  // vertical_pod_autoscaling - computed: false, optional: true, required: false
  private _verticalPodAutoscaling?: ContainerClusterVerticalPodAutoscaling[];
  public get verticalPodAutoscaling() {
    return this._verticalPodAutoscaling;
  }
  public set verticalPodAutoscaling(value: ContainerClusterVerticalPodAutoscaling[] | undefined) {
    this._verticalPodAutoscaling = value;
  }

  // workload_identity_config - computed: false, optional: true, required: false
  private _workloadIdentityConfig?: ContainerClusterWorkloadIdentityConfig[];
  public get workloadIdentityConfig() {
    return this._workloadIdentityConfig;
  }
  public set workloadIdentityConfig(value: ContainerClusterWorkloadIdentityConfig[] | undefined) {
    this._workloadIdentityConfig = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_ipv4_cidr: this._clusterIpv4Cidr,
      default_max_pods_per_node: this._defaultMaxPodsPerNode,
      description: this._description,
      enable_binary_authorization: this._enableBinaryAuthorization,
      enable_intranode_visibility: this._enableIntranodeVisibility,
      enable_kubernetes_alpha: this._enableKubernetesAlpha,
      enable_legacy_abac: this._enableLegacyAbac,
      enable_shielded_nodes: this._enableShieldedNodes,
      enable_tpu: this._enableTpu,
      initial_node_count: this._initialNodeCount,
      location: this._location,
      logging_service: this._loggingService,
      min_master_version: this._minMasterVersion,
      monitoring_service: this._monitoringService,
      name: this._name,
      network: this._network,
      node_locations: this._nodeLocations,
      node_version: this._nodeVersion,
      project: this._project,
      remove_default_node_pool: this._removeDefaultNodePool,
      resource_labels: this._resourceLabels,
      subnetwork: this._subnetwork,
      addons_config: this._addonsConfig,
      authenticator_groups_config: this._authenticatorGroupsConfig,
      cluster_autoscaling: this._clusterAutoscaling,
      database_encryption: this._databaseEncryption,
      ip_allocation_policy: this._ipAllocationPolicy,
      maintenance_policy: this._maintenancePolicy,
      master_auth: this._masterAuth,
      master_authorized_networks_config: this._masterAuthorizedNetworksConfig,
      network_policy: this._networkPolicy,
      node_config: this._nodeConfig,
      node_pool: this._nodePool,
      pod_security_policy_config: this._podSecurityPolicyConfig,
      private_cluster_config: this._privateClusterConfig,
      release_channel: this._releaseChannel,
      resource_usage_export_config: this._resourceUsageExportConfig,
      timeouts: this._timeouts,
      vertical_pod_autoscaling: this._verticalPodAutoscaling,
      workload_identity_config: this._workloadIdentityConfig,
    };
  }
}
