// https://www.terraform.io/docs/providers/google/r/container_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerClusterConfig extends cdktf.TerraformMetaArguments {
  /** The IP address range of the Kubernetes pods in this cluster in CIDR notation (e.g. 10.96.0.0/14). Leave blank to have one automatically chosen or specify a /14 block in 10.0.0.0/8. This field will only work for routes-based clusters, where ip_allocation_policy is not defined. */
  readonly clusterIpv4Cidr?: string;
  /** The desired datapath provider for this cluster. By default, uses the IPTables-based kube-proxy implementation. */
  readonly datapathProvider?: string;
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
  /** default_snat_status block */
  readonly defaultSnatStatus?: ContainerClusterDefaultSnatStatus[];
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

function containerClusterAddonsConfigCloudrunConfigToTerraform(struct?: ContainerClusterAddonsConfigCloudrunConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    load_balancer_type: cdktf.stringToTerraform(struct!.loadBalancerType),
  }
}

export interface ContainerClusterAddonsConfigHorizontalPodAutoscaling {
  readonly disabled: boolean;
}

function containerClusterAddonsConfigHorizontalPodAutoscalingToTerraform(struct?: ContainerClusterAddonsConfigHorizontalPodAutoscaling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}

export interface ContainerClusterAddonsConfigHttpLoadBalancing {
  readonly disabled: boolean;
}

function containerClusterAddonsConfigHttpLoadBalancingToTerraform(struct?: ContainerClusterAddonsConfigHttpLoadBalancing): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}

export interface ContainerClusterAddonsConfigNetworkPolicyConfig {
  readonly disabled: boolean;
}

function containerClusterAddonsConfigNetworkPolicyConfigToTerraform(struct?: ContainerClusterAddonsConfigNetworkPolicyConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
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

function containerClusterAddonsConfigToTerraform(struct?: ContainerClusterAddonsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cloudrun_config: cdktf.listMapper(containerClusterAddonsConfigCloudrunConfigToTerraform)(struct!.cloudrunConfig),
    horizontal_pod_autoscaling: cdktf.listMapper(containerClusterAddonsConfigHorizontalPodAutoscalingToTerraform)(struct!.horizontalPodAutoscaling),
    http_load_balancing: cdktf.listMapper(containerClusterAddonsConfigHttpLoadBalancingToTerraform)(struct!.httpLoadBalancing),
    network_policy_config: cdktf.listMapper(containerClusterAddonsConfigNetworkPolicyConfigToTerraform)(struct!.networkPolicyConfig),
  }
}

export interface ContainerClusterAuthenticatorGroupsConfig {
  /** The name of the RBAC security group for use with Google security groups in Kubernetes RBAC. Group name must be in format gke-security-groups@yourdomain.com. */
  readonly securityGroup: string;
}

function containerClusterAuthenticatorGroupsConfigToTerraform(struct?: ContainerClusterAuthenticatorGroupsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    security_group: cdktf.stringToTerraform(struct!.securityGroup),
  }
}

export interface ContainerClusterClusterAutoscalingAutoProvisioningDefaults {
  /** Scopes that are used by NAP when creating node pools. */
  readonly oauthScopes?: string[];
  /** The Google Cloud Platform Service Account to be used by the node VMs. */
  readonly serviceAccount?: string;
}

function containerClusterClusterAutoscalingAutoProvisioningDefaultsToTerraform(struct?: ContainerClusterClusterAutoscalingAutoProvisioningDefaults): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oauthScopes),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}

export interface ContainerClusterClusterAutoscalingResourceLimits {
  /** Maximum amount of the resource in the cluster. */
  readonly maximum?: number;
  /** Minimum amount of the resource in the cluster. */
  readonly minimum?: number;
  /** The type of the resource. For example, cpu and memory. See the guide to using Node Auto-Provisioning for a list of types. */
  readonly resourceType: string;
}

function containerClusterClusterAutoscalingResourceLimitsToTerraform(struct?: ContainerClusterClusterAutoscalingResourceLimits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}

export interface ContainerClusterClusterAutoscaling {
  /** Whether node auto-provisioning is enabled. Resource limits for cpu and memory must be defined to enable node auto-provisioning. */
  readonly enabled: boolean;
  /** auto_provisioning_defaults block */
  readonly autoProvisioningDefaults?: ContainerClusterClusterAutoscalingAutoProvisioningDefaults[];
  /** resource_limits block */
  readonly resourceLimits?: ContainerClusterClusterAutoscalingResourceLimits[];
}

function containerClusterClusterAutoscalingToTerraform(struct?: ContainerClusterClusterAutoscaling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    auto_provisioning_defaults: cdktf.listMapper(containerClusterClusterAutoscalingAutoProvisioningDefaultsToTerraform)(struct!.autoProvisioningDefaults),
    resource_limits: cdktf.listMapper(containerClusterClusterAutoscalingResourceLimitsToTerraform)(struct!.resourceLimits),
  }
}

export interface ContainerClusterDatabaseEncryption {
  /** The key to use to encrypt/decrypt secrets. */
  readonly keyName?: string;
  /** ENCRYPTED or DECRYPTED. */
  readonly state: string;
}

function containerClusterDatabaseEncryptionToTerraform(struct?: ContainerClusterDatabaseEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    key_name: cdktf.stringToTerraform(struct!.keyName),
    state: cdktf.stringToTerraform(struct!.state),
  }
}

export interface ContainerClusterDefaultSnatStatus {
  /** When disabled is set to false, default IP masquerade rules will be applied to the nodes to prevent sNAT on cluster internal traffic. */
  readonly disabled: boolean;
}

function containerClusterDefaultSnatStatusToTerraform(struct?: ContainerClusterDefaultSnatStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
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

function containerClusterIpAllocationPolicyToTerraform(struct?: ContainerClusterIpAllocationPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cluster_ipv4_cidr_block: cdktf.stringToTerraform(struct!.clusterIpv4CidrBlock),
    cluster_secondary_range_name: cdktf.stringToTerraform(struct!.clusterSecondaryRangeName),
    services_ipv4_cidr_block: cdktf.stringToTerraform(struct!.servicesIpv4CidrBlock),
    services_secondary_range_name: cdktf.stringToTerraform(struct!.servicesSecondaryRangeName),
  }
}

export interface ContainerClusterMaintenancePolicyDailyMaintenanceWindow {
  readonly startTime: string;
}

function containerClusterMaintenancePolicyDailyMaintenanceWindowToTerraform(struct?: ContainerClusterMaintenancePolicyDailyMaintenanceWindow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}

export interface ContainerClusterMaintenancePolicyMaintenanceExclusion {
  readonly endTime: string;
  readonly exclusionName: string;
  readonly startTime: string;
}

function containerClusterMaintenancePolicyMaintenanceExclusionToTerraform(struct?: ContainerClusterMaintenancePolicyMaintenanceExclusion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    exclusion_name: cdktf.stringToTerraform(struct!.exclusionName),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}

export interface ContainerClusterMaintenancePolicyRecurringWindow {
  readonly endTime: string;
  readonly recurrence: string;
  readonly startTime: string;
}

function containerClusterMaintenancePolicyRecurringWindowToTerraform(struct?: ContainerClusterMaintenancePolicyRecurringWindow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    recurrence: cdktf.stringToTerraform(struct!.recurrence),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}

export interface ContainerClusterMaintenancePolicy {
  /** daily_maintenance_window block */
  readonly dailyMaintenanceWindow?: ContainerClusterMaintenancePolicyDailyMaintenanceWindow[];
  /** maintenance_exclusion block */
  readonly maintenanceExclusion?: ContainerClusterMaintenancePolicyMaintenanceExclusion[];
  /** recurring_window block */
  readonly recurringWindow?: ContainerClusterMaintenancePolicyRecurringWindow[];
}

function containerClusterMaintenancePolicyToTerraform(struct?: ContainerClusterMaintenancePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    daily_maintenance_window: cdktf.listMapper(containerClusterMaintenancePolicyDailyMaintenanceWindowToTerraform)(struct!.dailyMaintenanceWindow),
    maintenance_exclusion: cdktf.listMapper(containerClusterMaintenancePolicyMaintenanceExclusionToTerraform)(struct!.maintenanceExclusion),
    recurring_window: cdktf.listMapper(containerClusterMaintenancePolicyRecurringWindowToTerraform)(struct!.recurringWindow),
  }
}

export interface ContainerClusterMasterAuthClientCertificateConfig {
  /** Whether client certificate authorization is enabled for this cluster. */
  readonly issueClientCertificate: boolean;
}

function containerClusterMasterAuthClientCertificateConfigToTerraform(struct?: ContainerClusterMasterAuthClientCertificateConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    issue_client_certificate: cdktf.booleanToTerraform(struct!.issueClientCertificate),
  }
}

export interface ContainerClusterMasterAuth {
  /** The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint. */
  readonly password?: string;
  /** The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint. If not present basic auth will be disabled. */
  readonly username?: string;
  /** client_certificate_config block */
  readonly clientCertificateConfig?: ContainerClusterMasterAuthClientCertificateConfig[];
}

function containerClusterMasterAuthToTerraform(struct?: ContainerClusterMasterAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
    client_certificate_config: cdktf.listMapper(containerClusterMasterAuthClientCertificateConfigToTerraform)(struct!.clientCertificateConfig),
  }
}

export interface ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks {
  /** External network that can access Kubernetes master through HTTPS. Must be specified in CIDR notation. */
  readonly cidrBlock: string;
  /** Field for users to identify CIDR blocks. */
  readonly displayName?: string;
}

function containerClusterMasterAuthorizedNetworksConfigCidrBlocksToTerraform(struct?: ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}

export interface ContainerClusterMasterAuthorizedNetworksConfig {
  /** cidr_blocks block */
  readonly cidrBlocks?: ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks[];
}

function containerClusterMasterAuthorizedNetworksConfigToTerraform(struct?: ContainerClusterMasterAuthorizedNetworksConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    cidr_blocks: cdktf.listMapper(containerClusterMasterAuthorizedNetworksConfigCidrBlocksToTerraform)(struct!.cidrBlocks),
  }
}

export interface ContainerClusterNetworkPolicy {
  /** Whether network policy is enabled on the cluster. */
  readonly enabled: boolean;
  /** The selected network policy provider. Defaults to PROVIDER_UNSPECIFIED. */
  readonly provider?: string;
}

function containerClusterNetworkPolicyToTerraform(struct?: ContainerClusterNetworkPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    provider: cdktf.stringToTerraform(struct!.provider),
  }
}

export interface ContainerClusterNodeConfigGuestAccelerator {
  readonly count?: number;
  readonly type?: string;
}

function containerClusterNodeConfigGuestAcceleratorToTerraform(struct?: ContainerClusterNodeConfigGuestAccelerator): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ContainerClusterNodeConfigTaint {
  readonly effect?: string;
  readonly key?: string;
  readonly value?: string;
}

function containerClusterNodeConfigTaintToTerraform(struct?: ContainerClusterNodeConfigTaint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ContainerClusterNodeConfigShieldedInstanceConfig {
  readonly enableIntegrityMonitoring?: boolean;
  readonly enableSecureBoot?: boolean;
}

function containerClusterNodeConfigShieldedInstanceConfigToTerraform(struct?: ContainerClusterNodeConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}

export interface ContainerClusterNodeConfigWorkloadMetadataConfig {
  readonly nodeMetadata: string;
}

function containerClusterNodeConfigWorkloadMetadataConfigToTerraform(struct?: ContainerClusterNodeConfigWorkloadMetadataConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    node_metadata: cdktf.stringToTerraform(struct!.nodeMetadata),
  }
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

function containerClusterNodeConfigToTerraform(struct?: ContainerClusterNodeConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    guest_accelerator: cdktf.listMapper(containerClusterNodeConfigGuestAcceleratorToTerraform)(struct!.guestAccelerator),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    metadata: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.metadata),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oauthScopes),
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    taint: cdktf.listMapper(containerClusterNodeConfigTaintToTerraform)(struct!.taint),
    shielded_instance_config: cdktf.listMapper(containerClusterNodeConfigShieldedInstanceConfigToTerraform)(struct!.shieldedInstanceConfig),
    workload_metadata_config: cdktf.listMapper(containerClusterNodeConfigWorkloadMetadataConfigToTerraform)(struct!.workloadMetadataConfig),
  }
}

export interface ContainerClusterNodePoolAutoscaling {
  /** Maximum number of nodes in the NodePool. Must be >= min_node_count. */
  readonly maxNodeCount: number;
  /** Minimum number of nodes in the NodePool. Must be >=0 and <= max_node_count. */
  readonly minNodeCount: number;
}

function containerClusterNodePoolAutoscalingToTerraform(struct?: ContainerClusterNodePoolAutoscaling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
  }
}

export interface ContainerClusterNodePoolManagement {
  /** Whether the nodes will be automatically repaired. */
  readonly autoRepair?: boolean;
  /** Whether the nodes will be automatically upgraded. */
  readonly autoUpgrade?: boolean;
}

function containerClusterNodePoolManagementToTerraform(struct?: ContainerClusterNodePoolManagement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_repair: cdktf.booleanToTerraform(struct!.autoRepair),
    auto_upgrade: cdktf.booleanToTerraform(struct!.autoUpgrade),
  }
}

export interface ContainerClusterNodePoolNodeConfigGuestAccelerator {
  readonly count?: number;
  readonly type?: string;
}

function containerClusterNodePoolNodeConfigGuestAcceleratorToTerraform(struct?: ContainerClusterNodePoolNodeConfigGuestAccelerator): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ContainerClusterNodePoolNodeConfigTaint {
  readonly effect?: string;
  readonly key?: string;
  readonly value?: string;
}

function containerClusterNodePoolNodeConfigTaintToTerraform(struct?: ContainerClusterNodePoolNodeConfigTaint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ContainerClusterNodePoolNodeConfigShieldedInstanceConfig {
  readonly enableIntegrityMonitoring?: boolean;
  readonly enableSecureBoot?: boolean;
}

function containerClusterNodePoolNodeConfigShieldedInstanceConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}

export interface ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig {
  readonly nodeMetadata: string;
}

function containerClusterNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    node_metadata: cdktf.stringToTerraform(struct!.nodeMetadata),
  }
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

function containerClusterNodePoolNodeConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    guest_accelerator: cdktf.listMapper(containerClusterNodePoolNodeConfigGuestAcceleratorToTerraform)(struct!.guestAccelerator),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    labels: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.labels),
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    metadata: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.metadata),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oauthScopes),
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    tags: cdktf.listMapper(cdktf.stringToTerraform)(struct!.tags),
    taint: cdktf.listMapper(containerClusterNodePoolNodeConfigTaintToTerraform)(struct!.taint),
    shielded_instance_config: cdktf.listMapper(containerClusterNodePoolNodeConfigShieldedInstanceConfigToTerraform)(struct!.shieldedInstanceConfig),
    workload_metadata_config: cdktf.listMapper(containerClusterNodePoolNodeConfigWorkloadMetadataConfigToTerraform)(struct!.workloadMetadataConfig),
  }
}

export interface ContainerClusterNodePoolUpgradeSettings {
  /** The number of additional nodes that can be added to the node pool during an upgrade. Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater. */
  readonly maxSurge: number;
  /** The number of nodes that can be simultaneously unavailable during an upgrade. Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater. */
  readonly maxUnavailable: number;
}

function containerClusterNodePoolUpgradeSettingsToTerraform(struct?: ContainerClusterNodePoolUpgradeSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
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

function containerClusterNodePoolToTerraform(struct?: ContainerClusterNodePool): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    initial_node_count: cdktf.numberToTerraform(struct!.initialNodeCount),
    max_pods_per_node: cdktf.numberToTerraform(struct!.maxPodsPerNode),
    name: cdktf.stringToTerraform(struct!.name),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_locations: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nodeLocations),
    version: cdktf.stringToTerraform(struct!.version),
    autoscaling: cdktf.listMapper(containerClusterNodePoolAutoscalingToTerraform)(struct!.autoscaling),
    management: cdktf.listMapper(containerClusterNodePoolManagementToTerraform)(struct!.management),
    node_config: cdktf.listMapper(containerClusterNodePoolNodeConfigToTerraform)(struct!.nodeConfig),
    upgrade_settings: cdktf.listMapper(containerClusterNodePoolUpgradeSettingsToTerraform)(struct!.upgradeSettings),
  }
}

export interface ContainerClusterPodSecurityPolicyConfig {
  /** Enable the PodSecurityPolicy controller for this cluster. If enabled, pods must be valid under a PodSecurityPolicy to be created. */
  readonly enabled: boolean;
}

function containerClusterPodSecurityPolicyConfigToTerraform(struct?: ContainerClusterPodSecurityPolicyConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface ContainerClusterPrivateClusterConfigMasterGlobalAccessConfig {
  /** Whether the cluster master is accessible globally or not. */
  readonly enabled: boolean;
}

function containerClusterPrivateClusterConfigMasterGlobalAccessConfigToTerraform(struct?: ContainerClusterPrivateClusterConfigMasterGlobalAccessConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface ContainerClusterPrivateClusterConfig {
  /** Enables the private cluster feature, creating a private endpoint on the cluster. In a private cluster, nodes only have RFC 1918 private addresses and communicate with the master's private endpoint via private networking. */
  readonly enablePrivateEndpoint: boolean;
  /** When true, the cluster's private endpoint is used as the cluster endpoint and access through the public endpoint is disabled. When false, either endpoint can be used. This field only applies to private clusters, when enable_private_nodes is true. */
  readonly enablePrivateNodes?: boolean;
  /** The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning private IP addresses to the cluster master(s) and the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network, and it must be a /28 subnet. See Private Cluster Limitations for more details. This field only applies to private clusters, when enable_private_nodes is true. */
  readonly masterIpv4CidrBlock?: string;
  /** master_global_access_config block */
  readonly masterGlobalAccessConfig?: ContainerClusterPrivateClusterConfigMasterGlobalAccessConfig[];
}

function containerClusterPrivateClusterConfigToTerraform(struct?: ContainerClusterPrivateClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_private_endpoint: cdktf.booleanToTerraform(struct!.enablePrivateEndpoint),
    enable_private_nodes: cdktf.booleanToTerraform(struct!.enablePrivateNodes),
    master_ipv4_cidr_block: cdktf.stringToTerraform(struct!.masterIpv4CidrBlock),
    master_global_access_config: cdktf.listMapper(containerClusterPrivateClusterConfigMasterGlobalAccessConfigToTerraform)(struct!.masterGlobalAccessConfig),
  }
}

export interface ContainerClusterReleaseChannel {
  /** The selected release channel. Accepted values are:
* UNSPECIFIED: Not set.
* RAPID: Weekly upgrade cadence; Early testers and developers who requires new features.
* REGULAR: Multiple per month upgrade cadence; Production users who need features not yet offered in the Stable channel.
* STABLE: Every few months upgrade cadence; Production users who need stability above all else, and for whom frequent upgrades are too risky. */
  readonly channel: string;
}

function containerClusterReleaseChannelToTerraform(struct?: ContainerClusterReleaseChannel): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
  }
}

export interface ContainerClusterResourceUsageExportConfigBigqueryDestination {
  /** The ID of a BigQuery Dataset. */
  readonly datasetId: string;
}

function containerClusterResourceUsageExportConfigBigqueryDestinationToTerraform(struct?: ContainerClusterResourceUsageExportConfigBigqueryDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
  }
}

export interface ContainerClusterResourceUsageExportConfig {
  /** Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created in the cluster to meter network egress traffic. */
  readonly enableNetworkEgressMetering?: boolean;
  /** Whether to enable resource consumption metering on this cluster. When enabled, a table will be created in the resource export BigQuery dataset to store resource consumption data. The resulting table can be joined with the resource usage table or with BigQuery billing export. Defaults to true. */
  readonly enableResourceConsumptionMetering?: boolean;
  /** bigquery_destination block */
  readonly bigqueryDestination: ContainerClusterResourceUsageExportConfigBigqueryDestination[];
}

function containerClusterResourceUsageExportConfigToTerraform(struct?: ContainerClusterResourceUsageExportConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_network_egress_metering: cdktf.booleanToTerraform(struct!.enableNetworkEgressMetering),
    enable_resource_consumption_metering: cdktf.booleanToTerraform(struct!.enableResourceConsumptionMetering),
    bigquery_destination: cdktf.listMapper(containerClusterResourceUsageExportConfigBigqueryDestinationToTerraform)(struct!.bigqueryDestination),
  }
}

export interface ContainerClusterTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function containerClusterTimeoutsToTerraform(struct?: ContainerClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface ContainerClusterVerticalPodAutoscaling {
  /** Enables vertical pod autoscaling. */
  readonly enabled: boolean;
}

function containerClusterVerticalPodAutoscalingToTerraform(struct?: ContainerClusterVerticalPodAutoscaling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export interface ContainerClusterWorkloadIdentityConfig {
  readonly identityNamespace: string;
}

function containerClusterWorkloadIdentityConfigToTerraform(struct?: ContainerClusterWorkloadIdentityConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    identity_namespace: cdktf.stringToTerraform(struct!.identityNamespace),
  }
}


// Resource

export class ContainerCluster extends cdktf.TerraformResource {

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
    this._datapathProvider = config.datapathProvider;
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
    this._defaultSnatStatus = config.defaultSnatStatus;
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
    return this.getStringAttribute('cluster_ipv4_cidr');
  }
  public set clusterIpv4Cidr(value: string) {
    this._clusterIpv4Cidr = value;
  }
  public resetClusterIpv4Cidr() {
    this._clusterIpv4Cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpv4CidrInput() {
    return this._clusterIpv4Cidr
  }

  // datapath_provider - computed: true, optional: true, required: false
  private _datapathProvider?: string;
  public get datapathProvider() {
    return this.getStringAttribute('datapath_provider');
  }
  public set datapathProvider(value: string) {
    this._datapathProvider = value;
  }
  public resetDatapathProvider() {
    this._datapathProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datapathProviderInput() {
    return this._datapathProvider
  }

  // default_max_pods_per_node - computed: true, optional: true, required: false
  private _defaultMaxPodsPerNode?: number;
  public get defaultMaxPodsPerNode() {
    return this.getNumberAttribute('default_max_pods_per_node');
  }
  public set defaultMaxPodsPerNode(value: number) {
    this._defaultMaxPodsPerNode = value;
  }
  public resetDefaultMaxPodsPerNode() {
    this._defaultMaxPodsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMaxPodsPerNodeInput() {
    return this._defaultMaxPodsPerNode
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // enable_binary_authorization - computed: false, optional: true, required: false
  private _enableBinaryAuthorization?: boolean;
  public get enableBinaryAuthorization() {
    return this.getBooleanAttribute('enable_binary_authorization');
  }
  public set enableBinaryAuthorization(value: boolean ) {
    this._enableBinaryAuthorization = value;
  }
  public resetEnableBinaryAuthorization() {
    this._enableBinaryAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBinaryAuthorizationInput() {
    return this._enableBinaryAuthorization
  }

  // enable_intranode_visibility - computed: false, optional: true, required: false
  private _enableIntranodeVisibility?: boolean;
  public get enableIntranodeVisibility() {
    return this.getBooleanAttribute('enable_intranode_visibility');
  }
  public set enableIntranodeVisibility(value: boolean ) {
    this._enableIntranodeVisibility = value;
  }
  public resetEnableIntranodeVisibility() {
    this._enableIntranodeVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntranodeVisibilityInput() {
    return this._enableIntranodeVisibility
  }

  // enable_kubernetes_alpha - computed: false, optional: true, required: false
  private _enableKubernetesAlpha?: boolean;
  public get enableKubernetesAlpha() {
    return this.getBooleanAttribute('enable_kubernetes_alpha');
  }
  public set enableKubernetesAlpha(value: boolean ) {
    this._enableKubernetesAlpha = value;
  }
  public resetEnableKubernetesAlpha() {
    this._enableKubernetesAlpha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKubernetesAlphaInput() {
    return this._enableKubernetesAlpha
  }

  // enable_legacy_abac - computed: false, optional: true, required: false
  private _enableLegacyAbac?: boolean;
  public get enableLegacyAbac() {
    return this.getBooleanAttribute('enable_legacy_abac');
  }
  public set enableLegacyAbac(value: boolean ) {
    this._enableLegacyAbac = value;
  }
  public resetEnableLegacyAbac() {
    this._enableLegacyAbac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLegacyAbacInput() {
    return this._enableLegacyAbac
  }

  // enable_shielded_nodes - computed: false, optional: true, required: false
  private _enableShieldedNodes?: boolean;
  public get enableShieldedNodes() {
    return this.getBooleanAttribute('enable_shielded_nodes');
  }
  public set enableShieldedNodes(value: boolean ) {
    this._enableShieldedNodes = value;
  }
  public resetEnableShieldedNodes() {
    this._enableShieldedNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableShieldedNodesInput() {
    return this._enableShieldedNodes
  }

  // enable_tpu - computed: false, optional: true, required: false
  private _enableTpu?: boolean;
  public get enableTpu() {
    return this.getBooleanAttribute('enable_tpu');
  }
  public set enableTpu(value: boolean ) {
    this._enableTpu = value;
  }
  public resetEnableTpu() {
    this._enableTpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTpuInput() {
    return this._enableTpu
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initial_node_count - computed: false, optional: true, required: false
  private _initialNodeCount?: number;
  public get initialNodeCount() {
    return this.getNumberAttribute('initial_node_count');
  }
  public set initialNodeCount(value: number ) {
    this._initialNodeCount = value;
  }
  public resetInitialNodeCount() {
    this._initialNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialNodeCountInput() {
    return this._initialNodeCount
  }

  // instance_group_urls - computed: true, optional: false, required: false
  public get instanceGroupUrls() {
    return this.getListAttribute('instance_group_urls');
  }

  // label_fingerprint - computed: true, optional: false, required: false
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
  }

  // location - computed: true, optional: true, required: false
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
    return this._location
  }

  // logging_service - computed: true, optional: true, required: false
  private _loggingService?: string;
  public get loggingService() {
    return this.getStringAttribute('logging_service');
  }
  public set loggingService(value: string) {
    this._loggingService = value;
  }
  public resetLoggingService() {
    this._loggingService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingServiceInput() {
    return this._loggingService
  }

  // master_version - computed: true, optional: false, required: false
  public get masterVersion() {
    return this.getStringAttribute('master_version');
  }

  // min_master_version - computed: false, optional: true, required: false
  private _minMasterVersion?: string;
  public get minMasterVersion() {
    return this.getStringAttribute('min_master_version');
  }
  public set minMasterVersion(value: string ) {
    this._minMasterVersion = value;
  }
  public resetMinMasterVersion() {
    this._minMasterVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMasterVersionInput() {
    return this._minMasterVersion
  }

  // monitoring_service - computed: true, optional: true, required: false
  private _monitoringService?: string;
  public get monitoringService() {
    return this.getStringAttribute('monitoring_service');
  }
  public set monitoringService(value: string) {
    this._monitoringService = value;
  }
  public resetMonitoringService() {
    this._monitoringService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringServiceInput() {
    return this._monitoringService
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

  // network - computed: false, optional: true, required: false
  private _network?: string;
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string ) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network
  }

  // node_locations - computed: true, optional: true, required: false
  private _nodeLocations?: string[];
  public get nodeLocations() {
    return this.getListAttribute('node_locations');
  }
  public set nodeLocations(value: string[]) {
    this._nodeLocations = value;
  }
  public resetNodeLocations() {
    this._nodeLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLocationsInput() {
    return this._nodeLocations
  }

  // node_version - computed: true, optional: true, required: false
  private _nodeVersion?: string;
  public get nodeVersion() {
    return this.getStringAttribute('node_version');
  }
  public set nodeVersion(value: string) {
    this._nodeVersion = value;
  }
  public resetNodeVersion() {
    this._nodeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeVersionInput() {
    return this._nodeVersion
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
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

  // remove_default_node_pool - computed: false, optional: true, required: false
  private _removeDefaultNodePool?: boolean;
  public get removeDefaultNodePool() {
    return this.getBooleanAttribute('remove_default_node_pool');
  }
  public set removeDefaultNodePool(value: boolean ) {
    this._removeDefaultNodePool = value;
  }
  public resetRemoveDefaultNodePool() {
    this._removeDefaultNodePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeDefaultNodePoolInput() {
    return this._removeDefaultNodePool
  }

  // resource_labels - computed: false, optional: true, required: false
  private _resourceLabels?: { [key: string]: string };
  public get resourceLabels() {
    return this.interpolationForAttribute('resource_labels') as any;
  }
  public set resourceLabels(value: { [key: string]: string } ) {
    this._resourceLabels = value;
  }
  public resetResourceLabels() {
    this._resourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelsInput() {
    return this._resourceLabels
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // services_ipv4_cidr - computed: true, optional: false, required: false
  public get servicesIpv4Cidr() {
    return this.getStringAttribute('services_ipv4_cidr');
  }

  // subnetwork - computed: true, optional: true, required: false
  private _subnetwork?: string;
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork
  }

  // tpu_ipv4_cidr_block - computed: true, optional: false, required: false
  public get tpuIpv4CidrBlock() {
    return this.getStringAttribute('tpu_ipv4_cidr_block');
  }

  // addons_config - computed: false, optional: true, required: false
  private _addonsConfig?: ContainerClusterAddonsConfig[];
  public get addonsConfig() {
    return this.interpolationForAttribute('addons_config') as any;
  }
  public set addonsConfig(value: ContainerClusterAddonsConfig[] ) {
    this._addonsConfig = value;
  }
  public resetAddonsConfig() {
    this._addonsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsConfigInput() {
    return this._addonsConfig
  }

  // authenticator_groups_config - computed: false, optional: true, required: false
  private _authenticatorGroupsConfig?: ContainerClusterAuthenticatorGroupsConfig[];
  public get authenticatorGroupsConfig() {
    return this.interpolationForAttribute('authenticator_groups_config') as any;
  }
  public set authenticatorGroupsConfig(value: ContainerClusterAuthenticatorGroupsConfig[] ) {
    this._authenticatorGroupsConfig = value;
  }
  public resetAuthenticatorGroupsConfig() {
    this._authenticatorGroupsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorGroupsConfigInput() {
    return this._authenticatorGroupsConfig
  }

  // cluster_autoscaling - computed: false, optional: true, required: false
  private _clusterAutoscaling?: ContainerClusterClusterAutoscaling[];
  public get clusterAutoscaling() {
    return this.interpolationForAttribute('cluster_autoscaling') as any;
  }
  public set clusterAutoscaling(value: ContainerClusterClusterAutoscaling[] ) {
    this._clusterAutoscaling = value;
  }
  public resetClusterAutoscaling() {
    this._clusterAutoscaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAutoscalingInput() {
    return this._clusterAutoscaling
  }

  // database_encryption - computed: false, optional: true, required: false
  private _databaseEncryption?: ContainerClusterDatabaseEncryption[];
  public get databaseEncryption() {
    return this.interpolationForAttribute('database_encryption') as any;
  }
  public set databaseEncryption(value: ContainerClusterDatabaseEncryption[] ) {
    this._databaseEncryption = value;
  }
  public resetDatabaseEncryption() {
    this._databaseEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseEncryptionInput() {
    return this._databaseEncryption
  }

  // default_snat_status - computed: false, optional: true, required: false
  private _defaultSnatStatus?: ContainerClusterDefaultSnatStatus[];
  public get defaultSnatStatus() {
    return this.interpolationForAttribute('default_snat_status') as any;
  }
  public set defaultSnatStatus(value: ContainerClusterDefaultSnatStatus[] ) {
    this._defaultSnatStatus = value;
  }
  public resetDefaultSnatStatus() {
    this._defaultSnatStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSnatStatusInput() {
    return this._defaultSnatStatus
  }

  // ip_allocation_policy - computed: false, optional: true, required: false
  private _ipAllocationPolicy?: ContainerClusterIpAllocationPolicy[];
  public get ipAllocationPolicy() {
    return this.interpolationForAttribute('ip_allocation_policy') as any;
  }
  public set ipAllocationPolicy(value: ContainerClusterIpAllocationPolicy[] ) {
    this._ipAllocationPolicy = value;
  }
  public resetIpAllocationPolicy() {
    this._ipAllocationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllocationPolicyInput() {
    return this._ipAllocationPolicy
  }

  // maintenance_policy - computed: false, optional: true, required: false
  private _maintenancePolicy?: ContainerClusterMaintenancePolicy[];
  public get maintenancePolicy() {
    return this.interpolationForAttribute('maintenance_policy') as any;
  }
  public set maintenancePolicy(value: ContainerClusterMaintenancePolicy[] ) {
    this._maintenancePolicy = value;
  }
  public resetMaintenancePolicy() {
    this._maintenancePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePolicyInput() {
    return this._maintenancePolicy
  }

  // master_auth - computed: false, optional: true, required: false
  private _masterAuth?: ContainerClusterMasterAuth[];
  public get masterAuth() {
    return this.interpolationForAttribute('master_auth') as any;
  }
  public set masterAuth(value: ContainerClusterMasterAuth[] ) {
    this._masterAuth = value;
  }
  public resetMasterAuth() {
    this._masterAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterAuthInput() {
    return this._masterAuth
  }

  // master_authorized_networks_config - computed: false, optional: true, required: false
  private _masterAuthorizedNetworksConfig?: ContainerClusterMasterAuthorizedNetworksConfig[];
  public get masterAuthorizedNetworksConfig() {
    return this.interpolationForAttribute('master_authorized_networks_config') as any;
  }
  public set masterAuthorizedNetworksConfig(value: ContainerClusterMasterAuthorizedNetworksConfig[] ) {
    this._masterAuthorizedNetworksConfig = value;
  }
  public resetMasterAuthorizedNetworksConfig() {
    this._masterAuthorizedNetworksConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterAuthorizedNetworksConfigInput() {
    return this._masterAuthorizedNetworksConfig
  }

  // network_policy - computed: false, optional: true, required: false
  private _networkPolicy?: ContainerClusterNetworkPolicy[];
  public get networkPolicy() {
    return this.interpolationForAttribute('network_policy') as any;
  }
  public set networkPolicy(value: ContainerClusterNetworkPolicy[] ) {
    this._networkPolicy = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig?: ContainerClusterNodeConfig[];
  public get nodeConfig() {
    return this.interpolationForAttribute('node_config') as any;
  }
  public set nodeConfig(value: ContainerClusterNodeConfig[] ) {
    this._nodeConfig = value;
  }
  public resetNodeConfig() {
    this._nodeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig
  }

  // node_pool - computed: false, optional: true, required: false
  private _nodePool?: ContainerClusterNodePool[];
  public get nodePool() {
    return this.interpolationForAttribute('node_pool') as any;
  }
  public set nodePool(value: ContainerClusterNodePool[] ) {
    this._nodePool = value;
  }
  public resetNodePool() {
    this._nodePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolInput() {
    return this._nodePool
  }

  // pod_security_policy_config - computed: false, optional: true, required: false
  private _podSecurityPolicyConfig?: ContainerClusterPodSecurityPolicyConfig[];
  public get podSecurityPolicyConfig() {
    return this.interpolationForAttribute('pod_security_policy_config') as any;
  }
  public set podSecurityPolicyConfig(value: ContainerClusterPodSecurityPolicyConfig[] ) {
    this._podSecurityPolicyConfig = value;
  }
  public resetPodSecurityPolicyConfig() {
    this._podSecurityPolicyConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityPolicyConfigInput() {
    return this._podSecurityPolicyConfig
  }

  // private_cluster_config - computed: false, optional: true, required: false
  private _privateClusterConfig?: ContainerClusterPrivateClusterConfig[];
  public get privateClusterConfig() {
    return this.interpolationForAttribute('private_cluster_config') as any;
  }
  public set privateClusterConfig(value: ContainerClusterPrivateClusterConfig[] ) {
    this._privateClusterConfig = value;
  }
  public resetPrivateClusterConfig() {
    this._privateClusterConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateClusterConfigInput() {
    return this._privateClusterConfig
  }

  // release_channel - computed: false, optional: true, required: false
  private _releaseChannel?: ContainerClusterReleaseChannel[];
  public get releaseChannel() {
    return this.interpolationForAttribute('release_channel') as any;
  }
  public set releaseChannel(value: ContainerClusterReleaseChannel[] ) {
    this._releaseChannel = value;
  }
  public resetReleaseChannel() {
    this._releaseChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseChannelInput() {
    return this._releaseChannel
  }

  // resource_usage_export_config - computed: false, optional: true, required: false
  private _resourceUsageExportConfig?: ContainerClusterResourceUsageExportConfig[];
  public get resourceUsageExportConfig() {
    return this.interpolationForAttribute('resource_usage_export_config') as any;
  }
  public set resourceUsageExportConfig(value: ContainerClusterResourceUsageExportConfig[] ) {
    this._resourceUsageExportConfig = value;
  }
  public resetResourceUsageExportConfig() {
    this._resourceUsageExportConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUsageExportConfigInput() {
    return this._resourceUsageExportConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ContainerClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ContainerClusterTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // vertical_pod_autoscaling - computed: false, optional: true, required: false
  private _verticalPodAutoscaling?: ContainerClusterVerticalPodAutoscaling[];
  public get verticalPodAutoscaling() {
    return this.interpolationForAttribute('vertical_pod_autoscaling') as any;
  }
  public set verticalPodAutoscaling(value: ContainerClusterVerticalPodAutoscaling[] ) {
    this._verticalPodAutoscaling = value;
  }
  public resetVerticalPodAutoscaling() {
    this._verticalPodAutoscaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verticalPodAutoscalingInput() {
    return this._verticalPodAutoscaling
  }

  // workload_identity_config - computed: false, optional: true, required: false
  private _workloadIdentityConfig?: ContainerClusterWorkloadIdentityConfig[];
  public get workloadIdentityConfig() {
    return this.interpolationForAttribute('workload_identity_config') as any;
  }
  public set workloadIdentityConfig(value: ContainerClusterWorkloadIdentityConfig[] ) {
    this._workloadIdentityConfig = value;
  }
  public resetWorkloadIdentityConfig() {
    this._workloadIdentityConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityConfigInput() {
    return this._workloadIdentityConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_ipv4_cidr: cdktf.stringToTerraform(this._clusterIpv4Cidr),
      datapath_provider: cdktf.stringToTerraform(this._datapathProvider),
      default_max_pods_per_node: cdktf.numberToTerraform(this._defaultMaxPodsPerNode),
      description: cdktf.stringToTerraform(this._description),
      enable_binary_authorization: cdktf.booleanToTerraform(this._enableBinaryAuthorization),
      enable_intranode_visibility: cdktf.booleanToTerraform(this._enableIntranodeVisibility),
      enable_kubernetes_alpha: cdktf.booleanToTerraform(this._enableKubernetesAlpha),
      enable_legacy_abac: cdktf.booleanToTerraform(this._enableLegacyAbac),
      enable_shielded_nodes: cdktf.booleanToTerraform(this._enableShieldedNodes),
      enable_tpu: cdktf.booleanToTerraform(this._enableTpu),
      initial_node_count: cdktf.numberToTerraform(this._initialNodeCount),
      location: cdktf.stringToTerraform(this._location),
      logging_service: cdktf.stringToTerraform(this._loggingService),
      min_master_version: cdktf.stringToTerraform(this._minMasterVersion),
      monitoring_service: cdktf.stringToTerraform(this._monitoringService),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      node_locations: cdktf.listMapper(cdktf.stringToTerraform)(this._nodeLocations),
      node_version: cdktf.stringToTerraform(this._nodeVersion),
      project: cdktf.stringToTerraform(this._project),
      remove_default_node_pool: cdktf.booleanToTerraform(this._removeDefaultNodePool),
      resource_labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._resourceLabels),
      subnetwork: cdktf.stringToTerraform(this._subnetwork),
      addons_config: cdktf.listMapper(containerClusterAddonsConfigToTerraform)(this._addonsConfig),
      authenticator_groups_config: cdktf.listMapper(containerClusterAuthenticatorGroupsConfigToTerraform)(this._authenticatorGroupsConfig),
      cluster_autoscaling: cdktf.listMapper(containerClusterClusterAutoscalingToTerraform)(this._clusterAutoscaling),
      database_encryption: cdktf.listMapper(containerClusterDatabaseEncryptionToTerraform)(this._databaseEncryption),
      default_snat_status: cdktf.listMapper(containerClusterDefaultSnatStatusToTerraform)(this._defaultSnatStatus),
      ip_allocation_policy: cdktf.listMapper(containerClusterIpAllocationPolicyToTerraform)(this._ipAllocationPolicy),
      maintenance_policy: cdktf.listMapper(containerClusterMaintenancePolicyToTerraform)(this._maintenancePolicy),
      master_auth: cdktf.listMapper(containerClusterMasterAuthToTerraform)(this._masterAuth),
      master_authorized_networks_config: cdktf.listMapper(containerClusterMasterAuthorizedNetworksConfigToTerraform)(this._masterAuthorizedNetworksConfig),
      network_policy: cdktf.listMapper(containerClusterNetworkPolicyToTerraform)(this._networkPolicy),
      node_config: cdktf.listMapper(containerClusterNodeConfigToTerraform)(this._nodeConfig),
      node_pool: cdktf.listMapper(containerClusterNodePoolToTerraform)(this._nodePool),
      pod_security_policy_config: cdktf.listMapper(containerClusterPodSecurityPolicyConfigToTerraform)(this._podSecurityPolicyConfig),
      private_cluster_config: cdktf.listMapper(containerClusterPrivateClusterConfigToTerraform)(this._privateClusterConfig),
      release_channel: cdktf.listMapper(containerClusterReleaseChannelToTerraform)(this._releaseChannel),
      resource_usage_export_config: cdktf.listMapper(containerClusterResourceUsageExportConfigToTerraform)(this._resourceUsageExportConfig),
      timeouts: containerClusterTimeoutsToTerraform(this._timeouts),
      vertical_pod_autoscaling: cdktf.listMapper(containerClusterVerticalPodAutoscalingToTerraform)(this._verticalPodAutoscaling),
      workload_identity_config: cdktf.listMapper(containerClusterWorkloadIdentityConfigToTerraform)(this._workloadIdentityConfig),
    };
  }
}
