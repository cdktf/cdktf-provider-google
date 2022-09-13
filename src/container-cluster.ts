// https://www.terraform.io/docs/providers/google/r/container_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IP address range of the Kubernetes pods in this cluster in CIDR notation (e.g. 10.96.0.0/14). Leave blank to have one automatically chosen or specify a /14 block in 10.0.0.0/8. This field will only work for routes-based clusters, where ip_allocation_policy is not defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#cluster_ipv4_cidr ContainerCluster#cluster_ipv4_cidr}
  */
  readonly clusterIpv4Cidr?: string;
  /**
  * The desired datapath provider for this cluster. By default, uses the IPTables-based kube-proxy implementation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#datapath_provider ContainerCluster#datapath_provider}
  */
  readonly datapathProvider?: string;
  /**
  * The default maximum number of pods per node in this cluster. This doesn't work on "routes-based" clusters, clusters that don't have IP Aliasing enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#default_max_pods_per_node ContainerCluster#default_max_pods_per_node}
  */
  readonly defaultMaxPodsPerNode?: number;
  /**
  *  Description of the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#description ContainerCluster#description}
  */
  readonly description?: string;
  /**
  * Enable Autopilot for this cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enable_autopilot ContainerCluster#enable_autopilot}
  */
  readonly enableAutopilot?: boolean | cdktf.IResolvable;
  /**
  * Enable Binary Authorization for this cluster. If enabled, all container images will be validated by Google Binary Authorization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enable_binary_authorization ContainerCluster#enable_binary_authorization}
  */
  readonly enableBinaryAuthorization?: boolean | cdktf.IResolvable;
  /**
  * Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enable_intranode_visibility ContainerCluster#enable_intranode_visibility}
  */
  readonly enableIntranodeVisibility?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable Kubernetes Alpha features for this cluster. Note that when this option is enabled, the cluster cannot be upgraded and will be automatically deleted after 30 days.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enable_kubernetes_alpha ContainerCluster#enable_kubernetes_alpha}
  */
  readonly enableKubernetesAlpha?: boolean | cdktf.IResolvable;
  /**
  * Whether the ABAC authorizer is enabled for this cluster. When enabled, identities in the system, including service accounts, nodes, and controllers, will have statically granted permissions beyond those provided by the RBAC configuration or IAM. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enable_legacy_abac ContainerCluster#enable_legacy_abac}
  */
  readonly enableLegacyAbac?: boolean | cdktf.IResolvable;
  /**
  * Enable Shielded Nodes features on all nodes in this cluster. Defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enable_shielded_nodes ContainerCluster#enable_shielded_nodes}
  */
  readonly enableShieldedNodes?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable Cloud TPU resources in this cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enable_tpu ContainerCluster#enable_tpu}
  */
  readonly enableTpu?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#id ContainerCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The number of nodes to create in this cluster's default node pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Must be set if node_pool is not set. If you're using google_container_node_pool objects with no default node pool, you'll need to set this to a value of at least 1, alongside setting remove_default_node_pool to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#initial_node_count ContainerCluster#initial_node_count}
  */
  readonly initialNodeCount?: number;
  /**
  * The location (region or zone) in which the cluster master will be created, as well as the default node location. If you specify a zone (such as us-central1-a), the cluster will be a zonal cluster with a single cluster master. If you specify a region (such as us-west1), the cluster will be a regional cluster with multiple masters spread across zones in the region, and with default node locations in those zones as well.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#location ContainerCluster#location}
  */
  readonly location?: string;
  /**
  * The logging service that the cluster should write logs to. Available options include logging.googleapis.com(Legacy Stackdriver), logging.googleapis.com/kubernetes(Stackdriver Kubernetes Engine Logging), and none. Defaults to logging.googleapis.com/kubernetes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#logging_service ContainerCluster#logging_service}
  */
  readonly loggingService?: string;
  /**
  * The minimum version of the master. GKE will auto-update the master to new versions, so this does not guarantee the current master version--use the read-only master_version field to obtain that. If unset, the cluster's version will be set by GKE to the version of the most recent official release (which is not necessarily the latest version).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#min_master_version ContainerCluster#min_master_version}
  */
  readonly minMasterVersion?: string;
  /**
  * The monitoring service that the cluster should write metrics to. Automatically send metrics from pods in the cluster to the Google Cloud Monitoring API. VM metrics will be collected by Google Compute Engine regardless of this setting Available options include monitoring.googleapis.com(Legacy Stackdriver), monitoring.googleapis.com/kubernetes(Stackdriver Kubernetes Engine Monitoring), and none. Defaults to monitoring.googleapis.com/kubernetes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#monitoring_service ContainerCluster#monitoring_service}
  */
  readonly monitoringService?: string;
  /**
  * The name of the cluster, unique within the project and location.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#name ContainerCluster#name}
  */
  readonly name: string;
  /**
  * The name or self_link of the Google Compute Engine network to which the cluster is connected. For Shared VPC, set this to the self link of the shared network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#network ContainerCluster#network}
  */
  readonly network?: string;
  /**
  * Determines whether alias IPs or routes will be used for pod IPs in the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#networking_mode ContainerCluster#networking_mode}
  */
  readonly networkingMode?: string;
  /**
  * The list of zones in which the cluster's nodes are located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If this is specified for a zonal cluster, omit the cluster's zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#node_locations ContainerCluster#node_locations}
  */
  readonly nodeLocations?: string[];
  /**
  * The Kubernetes version on the nodes. Must either be unset or set to the same value as min_master_version on create. Defaults to the default version set by GKE which is not necessarily the latest version. This only affects nodes in the default node pool. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way. To update nodes in other node pools, use the version attribute on the node pool.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#node_version ContainerCluster#node_version}
  */
  readonly nodeVersion?: string;
  /**
  * The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#private_ipv6_google_access ContainerCluster#private_ipv6_google_access}
  */
  readonly privateIpv6GoogleAccess?: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#project ContainerCluster#project}
  */
  readonly project?: string;
  /**
  * If true, deletes the default node pool upon cluster creation. If you're using google_container_node_pool resources with no default node pool, this should be set to true, alongside setting initial_node_count to at least 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#remove_default_node_pool ContainerCluster#remove_default_node_pool}
  */
  readonly removeDefaultNodePool?: boolean | cdktf.IResolvable;
  /**
  * The GCE resource labels (a map of key/value pairs) to be applied to the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#resource_labels ContainerCluster#resource_labels}
  */
  readonly resourceLabels?: { [key: string]: string };
  /**
  * The name or self_link of the Google Compute Engine subnetwork in which the cluster's instances are launched.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#subnetwork ContainerCluster#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * addons_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#addons_config ContainerCluster#addons_config}
  */
  readonly addonsConfig?: ContainerClusterAddonsConfig;
  /**
  * authenticator_groups_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#authenticator_groups_config ContainerCluster#authenticator_groups_config}
  */
  readonly authenticatorGroupsConfig?: ContainerClusterAuthenticatorGroupsConfig;
  /**
  * binary_authorization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#binary_authorization ContainerCluster#binary_authorization}
  */
  readonly binaryAuthorization?: ContainerClusterBinaryAuthorization;
  /**
  * cluster_autoscaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#cluster_autoscaling ContainerCluster#cluster_autoscaling}
  */
  readonly clusterAutoscaling?: ContainerClusterClusterAutoscaling;
  /**
  * confidential_nodes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#confidential_nodes ContainerCluster#confidential_nodes}
  */
  readonly confidentialNodes?: ContainerClusterConfidentialNodes;
  /**
  * database_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#database_encryption ContainerCluster#database_encryption}
  */
  readonly databaseEncryption?: ContainerClusterDatabaseEncryption;
  /**
  * default_snat_status block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#default_snat_status ContainerCluster#default_snat_status}
  */
  readonly defaultSnatStatus?: ContainerClusterDefaultSnatStatus;
  /**
  * dns_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#dns_config ContainerCluster#dns_config}
  */
  readonly dnsConfig?: ContainerClusterDnsConfig;
  /**
  * ip_allocation_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#ip_allocation_policy ContainerCluster#ip_allocation_policy}
  */
  readonly ipAllocationPolicy?: ContainerClusterIpAllocationPolicy;
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#logging_config ContainerCluster#logging_config}
  */
  readonly loggingConfig?: ContainerClusterLoggingConfig;
  /**
  * maintenance_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#maintenance_policy ContainerCluster#maintenance_policy}
  */
  readonly maintenancePolicy?: ContainerClusterMaintenancePolicy;
  /**
  * master_auth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#master_auth ContainerCluster#master_auth}
  */
  readonly masterAuth?: ContainerClusterMasterAuth;
  /**
  * master_authorized_networks_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#master_authorized_networks_config ContainerCluster#master_authorized_networks_config}
  */
  readonly masterAuthorizedNetworksConfig?: ContainerClusterMasterAuthorizedNetworksConfig;
  /**
  * mesh_certificates block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#mesh_certificates ContainerCluster#mesh_certificates}
  */
  readonly meshCertificates?: ContainerClusterMeshCertificates;
  /**
  * monitoring_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#monitoring_config ContainerCluster#monitoring_config}
  */
  readonly monitoringConfig?: ContainerClusterMonitoringConfig;
  /**
  * network_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#network_policy ContainerCluster#network_policy}
  */
  readonly networkPolicy?: ContainerClusterNetworkPolicy;
  /**
  * node_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#node_config ContainerCluster#node_config}
  */
  readonly nodeConfig?: ContainerClusterNodeConfig;
  /**
  * node_pool block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#node_pool ContainerCluster#node_pool}
  */
  readonly nodePool?: ContainerClusterNodePool[] | cdktf.IResolvable;
  /**
  * notification_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#notification_config ContainerCluster#notification_config}
  */
  readonly notificationConfig?: ContainerClusterNotificationConfig;
  /**
  * private_cluster_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#private_cluster_config ContainerCluster#private_cluster_config}
  */
  readonly privateClusterConfig?: ContainerClusterPrivateClusterConfig;
  /**
  * release_channel block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#release_channel ContainerCluster#release_channel}
  */
  readonly releaseChannel?: ContainerClusterReleaseChannel;
  /**
  * resource_usage_export_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#resource_usage_export_config ContainerCluster#resource_usage_export_config}
  */
  readonly resourceUsageExportConfig?: ContainerClusterResourceUsageExportConfig;
  /**
  * service_external_ips_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#service_external_ips_config ContainerCluster#service_external_ips_config}
  */
  readonly serviceExternalIpsConfig?: ContainerClusterServiceExternalIpsConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#timeouts ContainerCluster#timeouts}
  */
  readonly timeouts?: ContainerClusterTimeouts;
  /**
  * vertical_pod_autoscaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#vertical_pod_autoscaling ContainerCluster#vertical_pod_autoscaling}
  */
  readonly verticalPodAutoscaling?: ContainerClusterVerticalPodAutoscaling;
  /**
  * workload_identity_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#workload_identity_config ContainerCluster#workload_identity_config}
  */
  readonly workloadIdentityConfig?: ContainerClusterWorkloadIdentityConfig;
}
export interface ContainerClusterAddonsConfigCloudrunConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#disabled ContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#load_balancer_type ContainerCluster#load_balancer_type}
  */
  readonly loadBalancerType?: string;
}

export function containerClusterAddonsConfigCloudrunConfigToTerraform(struct?: ContainerClusterAddonsConfigCloudrunConfigOutputReference | ContainerClusterAddonsConfigCloudrunConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    load_balancer_type: cdktf.stringToTerraform(struct!.loadBalancerType),
  }
}

export class ContainerClusterAddonsConfigCloudrunConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfigCloudrunConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._loadBalancerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerType = this._loadBalancerType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigCloudrunConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._loadBalancerType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._loadBalancerType = value.loadBalancerType;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // load_balancer_type - computed: false, optional: true, required: false
  private _loadBalancerType?: string; 
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }
  public set loadBalancerType(value: string) {
    this._loadBalancerType = value;
  }
  public resetLoadBalancerType() {
    this._loadBalancerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerTypeInput() {
    return this._loadBalancerType;
  }
}
export interface ContainerClusterAddonsConfigDnsCacheConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterAddonsConfigDnsCacheConfigToTerraform(struct?: ContainerClusterAddonsConfigDnsCacheConfigOutputReference | ContainerClusterAddonsConfigDnsCacheConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class ContainerClusterAddonsConfigDnsCacheConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfigDnsCacheConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigDnsCacheConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterAddonsConfigGcePersistentDiskCsiDriverConfigToTerraform(struct?: ContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigOutputReference | ContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class ContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterAddonsConfigGcpFilestoreCsiDriverConfigToTerraform(struct?: ContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigOutputReference | ContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class ContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ContainerClusterAddonsConfigHorizontalPodAutoscaling {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#disabled ContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
}

export function containerClusterAddonsConfigHorizontalPodAutoscalingToTerraform(struct?: ContainerClusterAddonsConfigHorizontalPodAutoscalingOutputReference | ContainerClusterAddonsConfigHorizontalPodAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}

export class ContainerClusterAddonsConfigHorizontalPodAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfigHorizontalPodAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigHorizontalPodAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface ContainerClusterAddonsConfigHttpLoadBalancing {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#disabled ContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
}

export function containerClusterAddonsConfigHttpLoadBalancingToTerraform(struct?: ContainerClusterAddonsConfigHttpLoadBalancingOutputReference | ContainerClusterAddonsConfigHttpLoadBalancing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}

export class ContainerClusterAddonsConfigHttpLoadBalancingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfigHttpLoadBalancing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigHttpLoadBalancing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface ContainerClusterAddonsConfigNetworkPolicyConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#disabled ContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
}

export function containerClusterAddonsConfigNetworkPolicyConfigToTerraform(struct?: ContainerClusterAddonsConfigNetworkPolicyConfigOutputReference | ContainerClusterAddonsConfigNetworkPolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}

export class ContainerClusterAddonsConfigNetworkPolicyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfigNetworkPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigNetworkPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface ContainerClusterAddonsConfig {
  /**
  * cloudrun_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#cloudrun_config ContainerCluster#cloudrun_config}
  */
  readonly cloudrunConfig?: ContainerClusterAddonsConfigCloudrunConfig;
  /**
  * dns_cache_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#dns_cache_config ContainerCluster#dns_cache_config}
  */
  readonly dnsCacheConfig?: ContainerClusterAddonsConfigDnsCacheConfig;
  /**
  * gce_persistent_disk_csi_driver_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#gce_persistent_disk_csi_driver_config ContainerCluster#gce_persistent_disk_csi_driver_config}
  */
  readonly gcePersistentDiskCsiDriverConfig?: ContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig;
  /**
  * gcp_filestore_csi_driver_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#gcp_filestore_csi_driver_config ContainerCluster#gcp_filestore_csi_driver_config}
  */
  readonly gcpFilestoreCsiDriverConfig?: ContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig;
  /**
  * horizontal_pod_autoscaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#horizontal_pod_autoscaling ContainerCluster#horizontal_pod_autoscaling}
  */
  readonly horizontalPodAutoscaling?: ContainerClusterAddonsConfigHorizontalPodAutoscaling;
  /**
  * http_load_balancing block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#http_load_balancing ContainerCluster#http_load_balancing}
  */
  readonly httpLoadBalancing?: ContainerClusterAddonsConfigHttpLoadBalancing;
  /**
  * network_policy_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#network_policy_config ContainerCluster#network_policy_config}
  */
  readonly networkPolicyConfig?: ContainerClusterAddonsConfigNetworkPolicyConfig;
}

export function containerClusterAddonsConfigToTerraform(struct?: ContainerClusterAddonsConfigOutputReference | ContainerClusterAddonsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudrun_config: containerClusterAddonsConfigCloudrunConfigToTerraform(struct!.cloudrunConfig),
    dns_cache_config: containerClusterAddonsConfigDnsCacheConfigToTerraform(struct!.dnsCacheConfig),
    gce_persistent_disk_csi_driver_config: containerClusterAddonsConfigGcePersistentDiskCsiDriverConfigToTerraform(struct!.gcePersistentDiskCsiDriverConfig),
    gcp_filestore_csi_driver_config: containerClusterAddonsConfigGcpFilestoreCsiDriverConfigToTerraform(struct!.gcpFilestoreCsiDriverConfig),
    horizontal_pod_autoscaling: containerClusterAddonsConfigHorizontalPodAutoscalingToTerraform(struct!.horizontalPodAutoscaling),
    http_load_balancing: containerClusterAddonsConfigHttpLoadBalancingToTerraform(struct!.httpLoadBalancing),
    network_policy_config: containerClusterAddonsConfigNetworkPolicyConfigToTerraform(struct!.networkPolicyConfig),
  }
}

export class ContainerClusterAddonsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudrunConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudrunConfig = this._cloudrunConfig?.internalValue;
    }
    if (this._dnsCacheConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCacheConfig = this._dnsCacheConfig?.internalValue;
    }
    if (this._gcePersistentDiskCsiDriverConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcePersistentDiskCsiDriverConfig = this._gcePersistentDiskCsiDriverConfig?.internalValue;
    }
    if (this._gcpFilestoreCsiDriverConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpFilestoreCsiDriverConfig = this._gcpFilestoreCsiDriverConfig?.internalValue;
    }
    if (this._horizontalPodAutoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalPodAutoscaling = this._horizontalPodAutoscaling?.internalValue;
    }
    if (this._httpLoadBalancing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpLoadBalancing = this._httpLoadBalancing?.internalValue;
    }
    if (this._networkPolicyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicyConfig = this._networkPolicyConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudrunConfig.internalValue = undefined;
      this._dnsCacheConfig.internalValue = undefined;
      this._gcePersistentDiskCsiDriverConfig.internalValue = undefined;
      this._gcpFilestoreCsiDriverConfig.internalValue = undefined;
      this._horizontalPodAutoscaling.internalValue = undefined;
      this._httpLoadBalancing.internalValue = undefined;
      this._networkPolicyConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudrunConfig.internalValue = value.cloudrunConfig;
      this._dnsCacheConfig.internalValue = value.dnsCacheConfig;
      this._gcePersistentDiskCsiDriverConfig.internalValue = value.gcePersistentDiskCsiDriverConfig;
      this._gcpFilestoreCsiDriverConfig.internalValue = value.gcpFilestoreCsiDriverConfig;
      this._horizontalPodAutoscaling.internalValue = value.horizontalPodAutoscaling;
      this._httpLoadBalancing.internalValue = value.httpLoadBalancing;
      this._networkPolicyConfig.internalValue = value.networkPolicyConfig;
    }
  }

  // cloudrun_config - computed: false, optional: true, required: false
  private _cloudrunConfig = new ContainerClusterAddonsConfigCloudrunConfigOutputReference(this, "cloudrun_config");
  public get cloudrunConfig() {
    return this._cloudrunConfig;
  }
  public putCloudrunConfig(value: ContainerClusterAddonsConfigCloudrunConfig) {
    this._cloudrunConfig.internalValue = value;
  }
  public resetCloudrunConfig() {
    this._cloudrunConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudrunConfigInput() {
    return this._cloudrunConfig.internalValue;
  }

  // dns_cache_config - computed: false, optional: true, required: false
  private _dnsCacheConfig = new ContainerClusterAddonsConfigDnsCacheConfigOutputReference(this, "dns_cache_config");
  public get dnsCacheConfig() {
    return this._dnsCacheConfig;
  }
  public putDnsCacheConfig(value: ContainerClusterAddonsConfigDnsCacheConfig) {
    this._dnsCacheConfig.internalValue = value;
  }
  public resetDnsCacheConfig() {
    this._dnsCacheConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheConfigInput() {
    return this._dnsCacheConfig.internalValue;
  }

  // gce_persistent_disk_csi_driver_config - computed: false, optional: true, required: false
  private _gcePersistentDiskCsiDriverConfig = new ContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigOutputReference(this, "gce_persistent_disk_csi_driver_config");
  public get gcePersistentDiskCsiDriverConfig() {
    return this._gcePersistentDiskCsiDriverConfig;
  }
  public putGcePersistentDiskCsiDriverConfig(value: ContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig) {
    this._gcePersistentDiskCsiDriverConfig.internalValue = value;
  }
  public resetGcePersistentDiskCsiDriverConfig() {
    this._gcePersistentDiskCsiDriverConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcePersistentDiskCsiDriverConfigInput() {
    return this._gcePersistentDiskCsiDriverConfig.internalValue;
  }

  // gcp_filestore_csi_driver_config - computed: false, optional: true, required: false
  private _gcpFilestoreCsiDriverConfig = new ContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigOutputReference(this, "gcp_filestore_csi_driver_config");
  public get gcpFilestoreCsiDriverConfig() {
    return this._gcpFilestoreCsiDriverConfig;
  }
  public putGcpFilestoreCsiDriverConfig(value: ContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig) {
    this._gcpFilestoreCsiDriverConfig.internalValue = value;
  }
  public resetGcpFilestoreCsiDriverConfig() {
    this._gcpFilestoreCsiDriverConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpFilestoreCsiDriverConfigInput() {
    return this._gcpFilestoreCsiDriverConfig.internalValue;
  }

  // horizontal_pod_autoscaling - computed: false, optional: true, required: false
  private _horizontalPodAutoscaling = new ContainerClusterAddonsConfigHorizontalPodAutoscalingOutputReference(this, "horizontal_pod_autoscaling");
  public get horizontalPodAutoscaling() {
    return this._horizontalPodAutoscaling;
  }
  public putHorizontalPodAutoscaling(value: ContainerClusterAddonsConfigHorizontalPodAutoscaling) {
    this._horizontalPodAutoscaling.internalValue = value;
  }
  public resetHorizontalPodAutoscaling() {
    this._horizontalPodAutoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get horizontalPodAutoscalingInput() {
    return this._horizontalPodAutoscaling.internalValue;
  }

  // http_load_balancing - computed: false, optional: true, required: false
  private _httpLoadBalancing = new ContainerClusterAddonsConfigHttpLoadBalancingOutputReference(this, "http_load_balancing");
  public get httpLoadBalancing() {
    return this._httpLoadBalancing;
  }
  public putHttpLoadBalancing(value: ContainerClusterAddonsConfigHttpLoadBalancing) {
    this._httpLoadBalancing.internalValue = value;
  }
  public resetHttpLoadBalancing() {
    this._httpLoadBalancing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpLoadBalancingInput() {
    return this._httpLoadBalancing.internalValue;
  }

  // network_policy_config - computed: false, optional: true, required: false
  private _networkPolicyConfig = new ContainerClusterAddonsConfigNetworkPolicyConfigOutputReference(this, "network_policy_config");
  public get networkPolicyConfig() {
    return this._networkPolicyConfig;
  }
  public putNetworkPolicyConfig(value: ContainerClusterAddonsConfigNetworkPolicyConfig) {
    this._networkPolicyConfig.internalValue = value;
  }
  public resetNetworkPolicyConfig() {
    this._networkPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyConfigInput() {
    return this._networkPolicyConfig.internalValue;
  }
}
export interface ContainerClusterAuthenticatorGroupsConfig {
  /**
  * The name of the RBAC security group for use with Google security groups in Kubernetes RBAC. Group name must be in format gke-security-groups@yourdomain.com.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#security_group ContainerCluster#security_group}
  */
  readonly securityGroup: string;
}

export function containerClusterAuthenticatorGroupsConfigToTerraform(struct?: ContainerClusterAuthenticatorGroupsConfigOutputReference | ContainerClusterAuthenticatorGroupsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group: cdktf.stringToTerraform(struct!.securityGroup),
  }
}

export class ContainerClusterAuthenticatorGroupsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAuthenticatorGroupsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroup = this._securityGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAuthenticatorGroupsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroup = value.securityGroup;
    }
  }

  // security_group - computed: false, optional: false, required: true
  private _securityGroup?: string; 
  public get securityGroup() {
    return this.getStringAttribute('security_group');
  }
  public set securityGroup(value: string) {
    this._securityGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupInput() {
    return this._securityGroup;
  }
}
export interface ContainerClusterBinaryAuthorization {
  /**
  * Enable Binary Authorization for this cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Mode of operation for Binary Authorization policy evaluation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#evaluation_mode ContainerCluster#evaluation_mode}
  */
  readonly evaluationMode?: string;
}

export function containerClusterBinaryAuthorizationToTerraform(struct?: ContainerClusterBinaryAuthorizationOutputReference | ContainerClusterBinaryAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    evaluation_mode: cdktf.stringToTerraform(struct!.evaluationMode),
  }
}

export class ContainerClusterBinaryAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterBinaryAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._evaluationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationMode = this._evaluationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterBinaryAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._evaluationMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._evaluationMode = value.evaluationMode;
    }
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

  // evaluation_mode - computed: false, optional: true, required: false
  private _evaluationMode?: string; 
  public get evaluationMode() {
    return this.getStringAttribute('evaluation_mode');
  }
  public set evaluationMode(value: string) {
    this._evaluationMode = value;
  }
  public resetEvaluationMode() {
    this._evaluationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationModeInput() {
    return this._evaluationMode;
  }
}
export interface ContainerClusterClusterAutoscalingAutoProvisioningDefaults {
  /**
  * The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#boot_disk_kms_key ContainerCluster#boot_disk_kms_key}
  */
  readonly bootDiskKmsKey?: string;
  /**
  * The default image type used by NAP once a new node pool is being created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#image_type ContainerCluster#image_type}
  */
  readonly imageType?: string;
  /**
  * Scopes that are used by NAP when creating node pools.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#oauth_scopes ContainerCluster#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#service_account ContainerCluster#service_account}
  */
  readonly serviceAccount?: string;
}

export function containerClusterClusterAutoscalingAutoProvisioningDefaultsToTerraform(struct?: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsOutputReference | ContainerClusterClusterAutoscalingAutoProvisioningDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_kms_key: cdktf.stringToTerraform(struct!.bootDiskKmsKey),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oauthScopes),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}

export class ContainerClusterClusterAutoscalingAutoProvisioningDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterClusterAutoscalingAutoProvisioningDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskKmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskKmsKey = this._bootDiskKmsKey;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterClusterAutoscalingAutoProvisioningDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskKmsKey = undefined;
      this._imageType = undefined;
      this._oauthScopes = undefined;
      this._serviceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskKmsKey = value.bootDiskKmsKey;
      this._imageType = value.imageType;
      this._oauthScopes = value.oauthScopes;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // boot_disk_kms_key - computed: false, optional: true, required: false
  private _bootDiskKmsKey?: string; 
  public get bootDiskKmsKey() {
    return this.getStringAttribute('boot_disk_kms_key');
  }
  public set bootDiskKmsKey(value: string) {
    this._bootDiskKmsKey = value;
  }
  public resetBootDiskKmsKey() {
    this._bootDiskKmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskKmsKeyInput() {
    return this._bootDiskKmsKey;
  }

  // image_type - computed: false, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // oauth_scopes - computed: true, optional: true, required: false
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }
  public set oauthScopes(value: string[]) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}
export interface ContainerClusterClusterAutoscalingResourceLimits {
  /**
  * Maximum amount of the resource in the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#maximum ContainerCluster#maximum}
  */
  readonly maximum?: number;
  /**
  * Minimum amount of the resource in the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#minimum ContainerCluster#minimum}
  */
  readonly minimum?: number;
  /**
  * The type of the resource. For example, cpu and memory. See the guide to using Node Auto-Provisioning for a list of types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#resource_type ContainerCluster#resource_type}
  */
  readonly resourceType: string;
}

export function containerClusterClusterAutoscalingResourceLimitsToTerraform(struct?: ContainerClusterClusterAutoscalingResourceLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}

export class ContainerClusterClusterAutoscalingResourceLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterClusterAutoscalingResourceLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterClusterAutoscalingResourceLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._resourceType = value.resourceType;
    }
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class ContainerClusterClusterAutoscalingResourceLimitsList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterClusterAutoscalingResourceLimits[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterClusterAutoscalingResourceLimitsOutputReference {
    return new ContainerClusterClusterAutoscalingResourceLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterClusterAutoscaling {
  /**
  * Whether node auto-provisioning is enabled. Resource limits for cpu and memory must be defined to enable node auto-provisioning.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * auto_provisioning_defaults block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#auto_provisioning_defaults ContainerCluster#auto_provisioning_defaults}
  */
  readonly autoProvisioningDefaults?: ContainerClusterClusterAutoscalingAutoProvisioningDefaults;
  /**
  * resource_limits block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#resource_limits ContainerCluster#resource_limits}
  */
  readonly resourceLimits?: ContainerClusterClusterAutoscalingResourceLimits[] | cdktf.IResolvable;
}

export function containerClusterClusterAutoscalingToTerraform(struct?: ContainerClusterClusterAutoscalingOutputReference | ContainerClusterClusterAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    auto_provisioning_defaults: containerClusterClusterAutoscalingAutoProvisioningDefaultsToTerraform(struct!.autoProvisioningDefaults),
    resource_limits: cdktf.listMapper(containerClusterClusterAutoscalingResourceLimitsToTerraform, true)(struct!.resourceLimits),
  }
}

export class ContainerClusterClusterAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterClusterAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._autoProvisioningDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoProvisioningDefaults = this._autoProvisioningDefaults?.internalValue;
    }
    if (this._resourceLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLimits = this._resourceLimits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterClusterAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._autoProvisioningDefaults.internalValue = undefined;
      this._resourceLimits.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._autoProvisioningDefaults.internalValue = value.autoProvisioningDefaults;
      this._resourceLimits.internalValue = value.resourceLimits;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // auto_provisioning_defaults - computed: false, optional: true, required: false
  private _autoProvisioningDefaults = new ContainerClusterClusterAutoscalingAutoProvisioningDefaultsOutputReference(this, "auto_provisioning_defaults");
  public get autoProvisioningDefaults() {
    return this._autoProvisioningDefaults;
  }
  public putAutoProvisioningDefaults(value: ContainerClusterClusterAutoscalingAutoProvisioningDefaults) {
    this._autoProvisioningDefaults.internalValue = value;
  }
  public resetAutoProvisioningDefaults() {
    this._autoProvisioningDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoProvisioningDefaultsInput() {
    return this._autoProvisioningDefaults.internalValue;
  }

  // resource_limits - computed: false, optional: true, required: false
  private _resourceLimits = new ContainerClusterClusterAutoscalingResourceLimitsList(this, "resource_limits", false);
  public get resourceLimits() {
    return this._resourceLimits;
  }
  public putResourceLimits(value: ContainerClusterClusterAutoscalingResourceLimits[] | cdktf.IResolvable) {
    this._resourceLimits.internalValue = value;
  }
  public resetResourceLimits() {
    this._resourceLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitsInput() {
    return this._resourceLimits.internalValue;
  }
}
export interface ContainerClusterConfidentialNodes {
  /**
  * Whether Confidential Nodes feature is enabled for all nodes in this cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterConfidentialNodesToTerraform(struct?: ContainerClusterConfidentialNodesOutputReference | ContainerClusterConfidentialNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class ContainerClusterConfidentialNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterConfidentialNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterConfidentialNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ContainerClusterDatabaseEncryption {
  /**
  * The key to use to encrypt/decrypt secrets.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#key_name ContainerCluster#key_name}
  */
  readonly keyName?: string;
  /**
  * ENCRYPTED or DECRYPTED.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#state ContainerCluster#state}
  */
  readonly state: string;
}

export function containerClusterDatabaseEncryptionToTerraform(struct?: ContainerClusterDatabaseEncryptionOutputReference | ContainerClusterDatabaseEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_name: cdktf.stringToTerraform(struct!.keyName),
    state: cdktf.stringToTerraform(struct!.state),
  }
}

export class ContainerClusterDatabaseEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterDatabaseEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterDatabaseEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyName = undefined;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyName = value.keyName;
      this._state = value.state;
    }
  }

  // key_name - computed: false, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface ContainerClusterDefaultSnatStatus {
  /**
  * When disabled is set to false, default IP masquerade rules will be applied to the nodes to prevent sNAT on cluster internal traffic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#disabled ContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
}

export function containerClusterDefaultSnatStatusToTerraform(struct?: ContainerClusterDefaultSnatStatusOutputReference | ContainerClusterDefaultSnatStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}

export class ContainerClusterDefaultSnatStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterDefaultSnatStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterDefaultSnatStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface ContainerClusterDnsConfig {
  /**
  * Which in-cluster DNS provider should be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#cluster_dns ContainerCluster#cluster_dns}
  */
  readonly clusterDns?: string;
  /**
  * The suffix used for all cluster service records.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#cluster_dns_domain ContainerCluster#cluster_dns_domain}
  */
  readonly clusterDnsDomain?: string;
  /**
  * The scope of access to cluster DNS records.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#cluster_dns_scope ContainerCluster#cluster_dns_scope}
  */
  readonly clusterDnsScope?: string;
}

export function containerClusterDnsConfigToTerraform(struct?: ContainerClusterDnsConfigOutputReference | ContainerClusterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_dns: cdktf.stringToTerraform(struct!.clusterDns),
    cluster_dns_domain: cdktf.stringToTerraform(struct!.clusterDnsDomain),
    cluster_dns_scope: cdktf.stringToTerraform(struct!.clusterDnsScope),
  }
}

export class ContainerClusterDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDns = this._clusterDns;
    }
    if (this._clusterDnsDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDnsDomain = this._clusterDnsDomain;
    }
    if (this._clusterDnsScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDnsScope = this._clusterDnsScope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterDns = undefined;
      this._clusterDnsDomain = undefined;
      this._clusterDnsScope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterDns = value.clusterDns;
      this._clusterDnsDomain = value.clusterDnsDomain;
      this._clusterDnsScope = value.clusterDnsScope;
    }
  }

  // cluster_dns - computed: false, optional: true, required: false
  private _clusterDns?: string; 
  public get clusterDns() {
    return this.getStringAttribute('cluster_dns');
  }
  public set clusterDns(value: string) {
    this._clusterDns = value;
  }
  public resetClusterDns() {
    this._clusterDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDnsInput() {
    return this._clusterDns;
  }

  // cluster_dns_domain - computed: false, optional: true, required: false
  private _clusterDnsDomain?: string; 
  public get clusterDnsDomain() {
    return this.getStringAttribute('cluster_dns_domain');
  }
  public set clusterDnsDomain(value: string) {
    this._clusterDnsDomain = value;
  }
  public resetClusterDnsDomain() {
    this._clusterDnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDnsDomainInput() {
    return this._clusterDnsDomain;
  }

  // cluster_dns_scope - computed: false, optional: true, required: false
  private _clusterDnsScope?: string; 
  public get clusterDnsScope() {
    return this.getStringAttribute('cluster_dns_scope');
  }
  public set clusterDnsScope(value: string) {
    this._clusterDnsScope = value;
  }
  public resetClusterDnsScope() {
    this._clusterDnsScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDnsScopeInput() {
    return this._clusterDnsScope;
  }
}
export interface ContainerClusterIpAllocationPolicy {
  /**
  * The IP address range for the cluster pod IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#cluster_ipv4_cidr_block ContainerCluster#cluster_ipv4_cidr_block}
  */
  readonly clusterIpv4CidrBlock?: string;
  /**
  * The name of the existing secondary range in the cluster's subnetwork to use for pod IP addresses. Alternatively, cluster_ipv4_cidr_block can be used to automatically create a GKE-managed one.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#cluster_secondary_range_name ContainerCluster#cluster_secondary_range_name}
  */
  readonly clusterSecondaryRangeName?: string;
  /**
  * The IP address range of the services IPs in this cluster. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#services_ipv4_cidr_block ContainerCluster#services_ipv4_cidr_block}
  */
  readonly servicesIpv4CidrBlock?: string;
  /**
  * The name of the existing secondary range in the cluster's subnetwork to use for service ClusterIPs. Alternatively, services_ipv4_cidr_block can be used to automatically create a GKE-managed one.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#services_secondary_range_name ContainerCluster#services_secondary_range_name}
  */
  readonly servicesSecondaryRangeName?: string;
}

export function containerClusterIpAllocationPolicyToTerraform(struct?: ContainerClusterIpAllocationPolicyOutputReference | ContainerClusterIpAllocationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_ipv4_cidr_block: cdktf.stringToTerraform(struct!.clusterIpv4CidrBlock),
    cluster_secondary_range_name: cdktf.stringToTerraform(struct!.clusterSecondaryRangeName),
    services_ipv4_cidr_block: cdktf.stringToTerraform(struct!.servicesIpv4CidrBlock),
    services_secondary_range_name: cdktf.stringToTerraform(struct!.servicesSecondaryRangeName),
  }
}

export class ContainerClusterIpAllocationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterIpAllocationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIpv4CidrBlock = this._clusterIpv4CidrBlock;
    }
    if (this._clusterSecondaryRangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSecondaryRangeName = this._clusterSecondaryRangeName;
    }
    if (this._servicesIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesIpv4CidrBlock = this._servicesIpv4CidrBlock;
    }
    if (this._servicesSecondaryRangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesSecondaryRangeName = this._servicesSecondaryRangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterIpAllocationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterIpv4CidrBlock = undefined;
      this._clusterSecondaryRangeName = undefined;
      this._servicesIpv4CidrBlock = undefined;
      this._servicesSecondaryRangeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterIpv4CidrBlock = value.clusterIpv4CidrBlock;
      this._clusterSecondaryRangeName = value.clusterSecondaryRangeName;
      this._servicesIpv4CidrBlock = value.servicesIpv4CidrBlock;
      this._servicesSecondaryRangeName = value.servicesSecondaryRangeName;
    }
  }

  // cluster_ipv4_cidr_block - computed: true, optional: true, required: false
  private _clusterIpv4CidrBlock?: string; 
  public get clusterIpv4CidrBlock() {
    return this.getStringAttribute('cluster_ipv4_cidr_block');
  }
  public set clusterIpv4CidrBlock(value: string) {
    this._clusterIpv4CidrBlock = value;
  }
  public resetClusterIpv4CidrBlock() {
    this._clusterIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpv4CidrBlockInput() {
    return this._clusterIpv4CidrBlock;
  }

  // cluster_secondary_range_name - computed: true, optional: true, required: false
  private _clusterSecondaryRangeName?: string; 
  public get clusterSecondaryRangeName() {
    return this.getStringAttribute('cluster_secondary_range_name');
  }
  public set clusterSecondaryRangeName(value: string) {
    this._clusterSecondaryRangeName = value;
  }
  public resetClusterSecondaryRangeName() {
    this._clusterSecondaryRangeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSecondaryRangeNameInput() {
    return this._clusterSecondaryRangeName;
  }

  // services_ipv4_cidr_block - computed: true, optional: true, required: false
  private _servicesIpv4CidrBlock?: string; 
  public get servicesIpv4CidrBlock() {
    return this.getStringAttribute('services_ipv4_cidr_block');
  }
  public set servicesIpv4CidrBlock(value: string) {
    this._servicesIpv4CidrBlock = value;
  }
  public resetServicesIpv4CidrBlock() {
    this._servicesIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesIpv4CidrBlockInput() {
    return this._servicesIpv4CidrBlock;
  }

  // services_secondary_range_name - computed: true, optional: true, required: false
  private _servicesSecondaryRangeName?: string; 
  public get servicesSecondaryRangeName() {
    return this.getStringAttribute('services_secondary_range_name');
  }
  public set servicesSecondaryRangeName(value: string) {
    this._servicesSecondaryRangeName = value;
  }
  public resetServicesSecondaryRangeName() {
    this._servicesSecondaryRangeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesSecondaryRangeNameInput() {
    return this._servicesSecondaryRangeName;
  }
}
export interface ContainerClusterLoggingConfig {
  /**
  * GKE components exposing logs. Valid values include SYSTEM_COMPONENTS and WORKLOADS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enable_components ContainerCluster#enable_components}
  */
  readonly enableComponents: string[];
}

export function containerClusterLoggingConfigToTerraform(struct?: ContainerClusterLoggingConfigOutputReference | ContainerClusterLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enableComponents),
  }
}

export class ContainerClusterLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableComponents = this._enableComponents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableComponents = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableComponents = value.enableComponents;
    }
  }

  // enable_components - computed: false, optional: false, required: true
  private _enableComponents?: string[]; 
  public get enableComponents() {
    return this.getListAttribute('enable_components');
  }
  public set enableComponents(value: string[]) {
    this._enableComponents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableComponentsInput() {
    return this._enableComponents;
  }
}
export interface ContainerClusterMaintenancePolicyDailyMaintenanceWindow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#start_time ContainerCluster#start_time}
  */
  readonly startTime: string;
}

export function containerClusterMaintenancePolicyDailyMaintenanceWindowToTerraform(struct?: ContainerClusterMaintenancePolicyDailyMaintenanceWindowOutputReference | ContainerClusterMaintenancePolicyDailyMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}

export class ContainerClusterMaintenancePolicyDailyMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterMaintenancePolicyDailyMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMaintenancePolicyDailyMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._startTime = value.startTime;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface ContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions {
  /**
  * The scope of automatic upgrades to restrict in the exclusion window.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#scope ContainerCluster#scope}
  */
  readonly scope: string;
}

export function containerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsToTerraform(struct?: ContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsOutputReference | ContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}

export class ContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scope = value.scope;
    }
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface ContainerClusterMaintenancePolicyMaintenanceExclusion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#end_time ContainerCluster#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#exclusion_name ContainerCluster#exclusion_name}
  */
  readonly exclusionName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#start_time ContainerCluster#start_time}
  */
  readonly startTime: string;
  /**
  * exclusion_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#exclusion_options ContainerCluster#exclusion_options}
  */
  readonly exclusionOptions?: ContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions;
}

export function containerClusterMaintenancePolicyMaintenanceExclusionToTerraform(struct?: ContainerClusterMaintenancePolicyMaintenanceExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    exclusion_name: cdktf.stringToTerraform(struct!.exclusionName),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    exclusion_options: containerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsToTerraform(struct!.exclusionOptions),
  }
}

export class ContainerClusterMaintenancePolicyMaintenanceExclusionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterMaintenancePolicyMaintenanceExclusion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._exclusionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionName = this._exclusionName;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._exclusionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionOptions = this._exclusionOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMaintenancePolicyMaintenanceExclusion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._exclusionName = undefined;
      this._startTime = undefined;
      this._exclusionOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._exclusionName = value.exclusionName;
      this._startTime = value.startTime;
      this._exclusionOptions.internalValue = value.exclusionOptions;
    }
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // exclusion_name - computed: false, optional: false, required: true
  private _exclusionName?: string; 
  public get exclusionName() {
    return this.getStringAttribute('exclusion_name');
  }
  public set exclusionName(value: string) {
    this._exclusionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionNameInput() {
    return this._exclusionName;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // exclusion_options - computed: false, optional: true, required: false
  private _exclusionOptions = new ContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsOutputReference(this, "exclusion_options");
  public get exclusionOptions() {
    return this._exclusionOptions;
  }
  public putExclusionOptions(value: ContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions) {
    this._exclusionOptions.internalValue = value;
  }
  public resetExclusionOptions() {
    this._exclusionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionOptionsInput() {
    return this._exclusionOptions.internalValue;
  }
}

export class ContainerClusterMaintenancePolicyMaintenanceExclusionList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterMaintenancePolicyMaintenanceExclusion[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterMaintenancePolicyMaintenanceExclusionOutputReference {
    return new ContainerClusterMaintenancePolicyMaintenanceExclusionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterMaintenancePolicyRecurringWindow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#end_time ContainerCluster#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#recurrence ContainerCluster#recurrence}
  */
  readonly recurrence: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#start_time ContainerCluster#start_time}
  */
  readonly startTime: string;
}

export function containerClusterMaintenancePolicyRecurringWindowToTerraform(struct?: ContainerClusterMaintenancePolicyRecurringWindowOutputReference | ContainerClusterMaintenancePolicyRecurringWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    recurrence: cdktf.stringToTerraform(struct!.recurrence),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}

export class ContainerClusterMaintenancePolicyRecurringWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterMaintenancePolicyRecurringWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._recurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMaintenancePolicyRecurringWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._recurrence = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._recurrence = value.recurrence;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // recurrence - computed: false, optional: false, required: true
  private _recurrence?: string; 
  public get recurrence() {
    return this.getStringAttribute('recurrence');
  }
  public set recurrence(value: string) {
    this._recurrence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence;
  }

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface ContainerClusterMaintenancePolicy {
  /**
  * daily_maintenance_window block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#daily_maintenance_window ContainerCluster#daily_maintenance_window}
  */
  readonly dailyMaintenanceWindow?: ContainerClusterMaintenancePolicyDailyMaintenanceWindow;
  /**
  * maintenance_exclusion block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#maintenance_exclusion ContainerCluster#maintenance_exclusion}
  */
  readonly maintenanceExclusion?: ContainerClusterMaintenancePolicyMaintenanceExclusion[] | cdktf.IResolvable;
  /**
  * recurring_window block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#recurring_window ContainerCluster#recurring_window}
  */
  readonly recurringWindow?: ContainerClusterMaintenancePolicyRecurringWindow;
}

export function containerClusterMaintenancePolicyToTerraform(struct?: ContainerClusterMaintenancePolicyOutputReference | ContainerClusterMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily_maintenance_window: containerClusterMaintenancePolicyDailyMaintenanceWindowToTerraform(struct!.dailyMaintenanceWindow),
    maintenance_exclusion: cdktf.listMapper(containerClusterMaintenancePolicyMaintenanceExclusionToTerraform, true)(struct!.maintenanceExclusion),
    recurring_window: containerClusterMaintenancePolicyRecurringWindowToTerraform(struct!.recurringWindow),
  }
}

export class ContainerClusterMaintenancePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dailyMaintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailyMaintenanceWindow = this._dailyMaintenanceWindow?.internalValue;
    }
    if (this._maintenanceExclusion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceExclusion = this._maintenanceExclusion?.internalValue;
    }
    if (this._recurringWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurringWindow = this._recurringWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dailyMaintenanceWindow.internalValue = undefined;
      this._maintenanceExclusion.internalValue = undefined;
      this._recurringWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dailyMaintenanceWindow.internalValue = value.dailyMaintenanceWindow;
      this._maintenanceExclusion.internalValue = value.maintenanceExclusion;
      this._recurringWindow.internalValue = value.recurringWindow;
    }
  }

  // daily_maintenance_window - computed: false, optional: true, required: false
  private _dailyMaintenanceWindow = new ContainerClusterMaintenancePolicyDailyMaintenanceWindowOutputReference(this, "daily_maintenance_window");
  public get dailyMaintenanceWindow() {
    return this._dailyMaintenanceWindow;
  }
  public putDailyMaintenanceWindow(value: ContainerClusterMaintenancePolicyDailyMaintenanceWindow) {
    this._dailyMaintenanceWindow.internalValue = value;
  }
  public resetDailyMaintenanceWindow() {
    this._dailyMaintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyMaintenanceWindowInput() {
    return this._dailyMaintenanceWindow.internalValue;
  }

  // maintenance_exclusion - computed: false, optional: true, required: false
  private _maintenanceExclusion = new ContainerClusterMaintenancePolicyMaintenanceExclusionList(this, "maintenance_exclusion", true);
  public get maintenanceExclusion() {
    return this._maintenanceExclusion;
  }
  public putMaintenanceExclusion(value: ContainerClusterMaintenancePolicyMaintenanceExclusion[] | cdktf.IResolvable) {
    this._maintenanceExclusion.internalValue = value;
  }
  public resetMaintenanceExclusion() {
    this._maintenanceExclusion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceExclusionInput() {
    return this._maintenanceExclusion.internalValue;
  }

  // recurring_window - computed: false, optional: true, required: false
  private _recurringWindow = new ContainerClusterMaintenancePolicyRecurringWindowOutputReference(this, "recurring_window");
  public get recurringWindow() {
    return this._recurringWindow;
  }
  public putRecurringWindow(value: ContainerClusterMaintenancePolicyRecurringWindow) {
    this._recurringWindow.internalValue = value;
  }
  public resetRecurringWindow() {
    this._recurringWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringWindowInput() {
    return this._recurringWindow.internalValue;
  }
}
export interface ContainerClusterMasterAuthClientCertificateConfig {
  /**
  * Whether client certificate authorization is enabled for this cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#issue_client_certificate ContainerCluster#issue_client_certificate}
  */
  readonly issueClientCertificate: boolean | cdktf.IResolvable;
}

export function containerClusterMasterAuthClientCertificateConfigToTerraform(struct?: ContainerClusterMasterAuthClientCertificateConfigOutputReference | ContainerClusterMasterAuthClientCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issue_client_certificate: cdktf.booleanToTerraform(struct!.issueClientCertificate),
  }
}

export class ContainerClusterMasterAuthClientCertificateConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterMasterAuthClientCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issueClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueClientCertificate = this._issueClientCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMasterAuthClientCertificateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issueClientCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issueClientCertificate = value.issueClientCertificate;
    }
  }

  // issue_client_certificate - computed: false, optional: false, required: true
  private _issueClientCertificate?: boolean | cdktf.IResolvable; 
  public get issueClientCertificate() {
    return this.getBooleanAttribute('issue_client_certificate');
  }
  public set issueClientCertificate(value: boolean | cdktf.IResolvable) {
    this._issueClientCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issueClientCertificateInput() {
    return this._issueClientCertificate;
  }
}
export interface ContainerClusterMasterAuth {
  /**
  * client_certificate_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#client_certificate_config ContainerCluster#client_certificate_config}
  */
  readonly clientCertificateConfig: ContainerClusterMasterAuthClientCertificateConfig;
}

export function containerClusterMasterAuthToTerraform(struct?: ContainerClusterMasterAuthOutputReference | ContainerClusterMasterAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_config: containerClusterMasterAuthClientCertificateConfigToTerraform(struct!.clientCertificateConfig),
  }
}

export class ContainerClusterMasterAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterMasterAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateConfig = this._clientCertificateConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMasterAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificateConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificateConfig.internalValue = value.clientCertificateConfig;
    }
  }

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_ca_certificate - computed: true, optional: false, required: false
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // client_certificate_config - computed: false, optional: false, required: true
  private _clientCertificateConfig = new ContainerClusterMasterAuthClientCertificateConfigOutputReference(this, "client_certificate_config");
  public get clientCertificateConfig() {
    return this._clientCertificateConfig;
  }
  public putClientCertificateConfig(value: ContainerClusterMasterAuthClientCertificateConfig) {
    this._clientCertificateConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateConfigInput() {
    return this._clientCertificateConfig.internalValue;
  }
}
export interface ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks {
  /**
  * External network that can access Kubernetes master through HTTPS. Must be specified in CIDR notation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#cidr_block ContainerCluster#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * Field for users to identify CIDR blocks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#display_name ContainerCluster#display_name}
  */
  readonly displayName?: string;
}

export function containerClusterMasterAuthorizedNetworksConfigCidrBlocksToTerraform(struct?: ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}

export class ContainerClusterMasterAuthorizedNetworksConfigCidrBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlock = undefined;
      this._displayName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlock = value.cidrBlock;
      this._displayName = value.displayName;
    }
  }

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
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
}

export class ContainerClusterMasterAuthorizedNetworksConfigCidrBlocksList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterMasterAuthorizedNetworksConfigCidrBlocksOutputReference {
    return new ContainerClusterMasterAuthorizedNetworksConfigCidrBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterMasterAuthorizedNetworksConfig {
  /**
  * cidr_blocks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#cidr_blocks ContainerCluster#cidr_blocks}
  */
  readonly cidrBlocks?: ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks[] | cdktf.IResolvable;
}

export function containerClusterMasterAuthorizedNetworksConfigToTerraform(struct?: ContainerClusterMasterAuthorizedNetworksConfigOutputReference | ContainerClusterMasterAuthorizedNetworksConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.listMapper(containerClusterMasterAuthorizedNetworksConfigCidrBlocksToTerraform, true)(struct!.cidrBlocks),
  }
}

export class ContainerClusterMasterAuthorizedNetworksConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterMasterAuthorizedNetworksConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMasterAuthorizedNetworksConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidrBlocks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidrBlocks.internalValue = value.cidrBlocks;
    }
  }

  // cidr_blocks - computed: false, optional: true, required: false
  private _cidrBlocks = new ContainerClusterMasterAuthorizedNetworksConfigCidrBlocksList(this, "cidr_blocks", true);
  public get cidrBlocks() {
    return this._cidrBlocks;
  }
  public putCidrBlocks(value: ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks[] | cdktf.IResolvable) {
    this._cidrBlocks.internalValue = value;
  }
  public resetCidrBlocks() {
    this._cidrBlocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks.internalValue;
  }
}
export interface ContainerClusterMeshCertificates {
  /**
  * When enabled the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enable_certificates ContainerCluster#enable_certificates}
  */
  readonly enableCertificates: boolean | cdktf.IResolvable;
}

export function containerClusterMeshCertificatesToTerraform(struct?: ContainerClusterMeshCertificatesOutputReference | ContainerClusterMeshCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_certificates: cdktf.booleanToTerraform(struct!.enableCertificates),
  }
}

export class ContainerClusterMeshCertificatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterMeshCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCertificates = this._enableCertificates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMeshCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableCertificates = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableCertificates = value.enableCertificates;
    }
  }

  // enable_certificates - computed: false, optional: false, required: true
  private _enableCertificates?: boolean | cdktf.IResolvable; 
  public get enableCertificates() {
    return this.getBooleanAttribute('enable_certificates');
  }
  public set enableCertificates(value: boolean | cdktf.IResolvable) {
    this._enableCertificates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCertificatesInput() {
    return this._enableCertificates;
  }
}
export interface ContainerClusterMonitoringConfig {
  /**
  * GKE components exposing metrics. Valid values include SYSTEM_COMPONENTS, APISERVER, CONTROLLER_MANAGER, and SCHEDULER.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enable_components ContainerCluster#enable_components}
  */
  readonly enableComponents: string[];
}

export function containerClusterMonitoringConfigToTerraform(struct?: ContainerClusterMonitoringConfigOutputReference | ContainerClusterMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enableComponents),
  }
}

export class ContainerClusterMonitoringConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableComponents = this._enableComponents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMonitoringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableComponents = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableComponents = value.enableComponents;
    }
  }

  // enable_components - computed: false, optional: false, required: true
  private _enableComponents?: string[]; 
  public get enableComponents() {
    return this.getListAttribute('enable_components');
  }
  public set enableComponents(value: string[]) {
    this._enableComponents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableComponentsInput() {
    return this._enableComponents;
  }
}
export interface ContainerClusterNetworkPolicy {
  /**
  * Whether network policy is enabled on the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The selected network policy provider. Defaults to PROVIDER_UNSPECIFIED.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#provider ContainerCluster#provider}
  */
  readonly provider?: string;
}

export function containerClusterNetworkPolicyToTerraform(struct?: ContainerClusterNetworkPolicyOutputReference | ContainerClusterNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    provider: cdktf.stringToTerraform(struct!.provider),
  }
}

export class ContainerClusterNetworkPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNetworkPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNetworkPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._provider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._provider = value.provider;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }
}
export interface ContainerClusterNodeConfigGuestAccelerator {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#count ContainerCluster#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#gpu_partition_size ContainerCluster#gpu_partition_size}
  */
  readonly gpuPartitionSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#type ContainerCluster#type}
  */
  readonly type?: string;
}

export function containerClusterNodeConfigGuestAcceleratorToTerraform(struct?: ContainerClusterNodeConfigGuestAccelerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    gpu_partition_size: cdktf.stringToTerraform(struct!.gpuPartitionSize),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ContainerClusterNodeConfigGuestAcceleratorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterNodeConfigGuestAccelerator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._gpuPartitionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuPartitionSize = this._gpuPartitionSize;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigGuestAccelerator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._gpuPartitionSize = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._gpuPartitionSize = value.gpuPartitionSize;
      this._type = value.type;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // gpu_partition_size - computed: true, optional: true, required: false
  private _gpuPartitionSize?: string; 
  public get gpuPartitionSize() {
    return this.getStringAttribute('gpu_partition_size');
  }
  public set gpuPartitionSize(value: string) {
    this._gpuPartitionSize = value;
  }
  public resetGpuPartitionSize() {
    this._gpuPartitionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuPartitionSizeInput() {
    return this._gpuPartitionSize;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ContainerClusterNodeConfigGuestAcceleratorList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterNodeConfigGuestAccelerator[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterNodeConfigGuestAcceleratorOutputReference {
    return new ContainerClusterNodeConfigGuestAcceleratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodeConfigTaint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#effect ContainerCluster#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#key ContainerCluster#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#value ContainerCluster#value}
  */
  readonly value?: string;
}

export function containerClusterNodeConfigTaintToTerraform(struct?: ContainerClusterNodeConfigTaint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class ContainerClusterNodeConfigTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterNodeConfigTaint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigTaint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ContainerClusterNodeConfigTaintList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterNodeConfigTaint[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterNodeConfigTaintOutputReference {
    return new ContainerClusterNodeConfigTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodeConfigGcfsConfig {
  /**
  * Whether or not GCFS is enabled
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterNodeConfigGcfsConfigToTerraform(struct?: ContainerClusterNodeConfigGcfsConfigOutputReference | ContainerClusterNodeConfigGcfsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class ContainerClusterNodeConfigGcfsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigGcfsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigGcfsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ContainerClusterNodeConfigGvnic {
  /**
  * Whether or not gvnic is enabled
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterNodeConfigGvnicToTerraform(struct?: ContainerClusterNodeConfigGvnicOutputReference | ContainerClusterNodeConfigGvnic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class ContainerClusterNodeConfigGvnicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigGvnic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigGvnic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ContainerClusterNodeConfigReservationAffinity {
  /**
  * Corresponds to the type of reservation consumption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#consume_reservation_type ContainerCluster#consume_reservation_type}
  */
  readonly consumeReservationType: string;
  /**
  * The label key of a reservation resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#key ContainerCluster#key}
  */
  readonly key?: string;
  /**
  * The label values of the reservation resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#values ContainerCluster#values}
  */
  readonly values?: string[];
}

export function containerClusterNodeConfigReservationAffinityToTerraform(struct?: ContainerClusterNodeConfigReservationAffinityOutputReference | ContainerClusterNodeConfigReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consume_reservation_type: cdktf.stringToTerraform(struct!.consumeReservationType),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class ContainerClusterNodeConfigReservationAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigReservationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumeReservationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumeReservationType = this._consumeReservationType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigReservationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumeReservationType = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumeReservationType = value.consumeReservationType;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // consume_reservation_type - computed: false, optional: false, required: true
  private _consumeReservationType?: string; 
  public get consumeReservationType() {
    return this.getStringAttribute('consume_reservation_type');
  }
  public set consumeReservationType(value: string) {
    this._consumeReservationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumeReservationTypeInput() {
    return this._consumeReservationType;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface ContainerClusterNodeConfigShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enable_integrity_monitoring ContainerCluster#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enable_secure_boot ContainerCluster#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
}

export function containerClusterNodeConfigShieldedInstanceConfigToTerraform(struct?: ContainerClusterNodeConfigShieldedInstanceConfigOutputReference | ContainerClusterNodeConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}

export class ContainerClusterNodeConfigShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }
  public set enableIntegrityMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring;
  }

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktf.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktf.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }
}
export interface ContainerClusterNodeConfigWorkloadMetadataConfig {
  /**
  * Mode is the configuration for how to expose metadata to workloads running on the node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#mode ContainerCluster#mode}
  */
  readonly mode: string;
}

export function containerClusterNodeConfigWorkloadMetadataConfigToTerraform(struct?: ContainerClusterNodeConfigWorkloadMetadataConfigOutputReference | ContainerClusterNodeConfigWorkloadMetadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export class ContainerClusterNodeConfigWorkloadMetadataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigWorkloadMetadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigWorkloadMetadataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface ContainerClusterNodeConfig {
  /**
  * The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#boot_disk_kms_key ContainerCluster#boot_disk_kms_key}
  */
  readonly bootDiskKmsKey?: string;
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#disk_size_gb ContainerCluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#disk_type ContainerCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * List of the type and count of accelerator cards attached to the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#guest_accelerator ContainerCluster#guest_accelerator}
  */
  readonly guestAccelerator?: ContainerClusterNodeConfigGuestAccelerator[] | cdktf.IResolvable;
  /**
  * The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#image_type ContainerCluster#image_type}
  */
  readonly imageType?: string;
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#labels ContainerCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The number of local SSD disks to be attached to the node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#local_ssd_count ContainerCluster#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * The name of a Google Compute Engine machine type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#machine_type ContainerCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The metadata key/value pairs assigned to instances in the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#metadata ContainerCluster#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#min_cpu_platform ContainerCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#node_group ContainerCluster#node_group}
  */
  readonly nodeGroup?: string;
  /**
  * The set of Google API scopes to be made available on all of the node VMs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#oauth_scopes ContainerCluster#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * Whether the nodes are created as preemptible VM instances.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#preemptible ContainerCluster#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#service_account ContainerCluster#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Whether the nodes are created as spot VM instances.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#spot ContainerCluster#spot}
  */
  readonly spot?: boolean | cdktf.IResolvable;
  /**
  * The list of instance tags applied to all nodes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#tags ContainerCluster#tags}
  */
  readonly tags?: string[];
  /**
  * List of Kubernetes taints to be applied to each node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#taint ContainerCluster#taint}
  */
  readonly taint?: ContainerClusterNodeConfigTaint[] | cdktf.IResolvable;
  /**
  * gcfs_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#gcfs_config ContainerCluster#gcfs_config}
  */
  readonly gcfsConfig?: ContainerClusterNodeConfigGcfsConfig;
  /**
  * gvnic block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#gvnic ContainerCluster#gvnic}
  */
  readonly gvnic?: ContainerClusterNodeConfigGvnic;
  /**
  * reservation_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#reservation_affinity ContainerCluster#reservation_affinity}
  */
  readonly reservationAffinity?: ContainerClusterNodeConfigReservationAffinity;
  /**
  * shielded_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#shielded_instance_config ContainerCluster#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: ContainerClusterNodeConfigShieldedInstanceConfig;
  /**
  * workload_metadata_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#workload_metadata_config ContainerCluster#workload_metadata_config}
  */
  readonly workloadMetadataConfig?: ContainerClusterNodeConfigWorkloadMetadataConfig;
}

export function containerClusterNodeConfigToTerraform(struct?: ContainerClusterNodeConfigOutputReference | ContainerClusterNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_kms_key: cdktf.stringToTerraform(struct!.bootDiskKmsKey),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    guest_accelerator: cdktf.listMapper(containerClusterNodeConfigGuestAcceleratorToTerraform, false)(struct!.guestAccelerator),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    node_group: cdktf.stringToTerraform(struct!.nodeGroup),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oauthScopes),
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    spot: cdktf.booleanToTerraform(struct!.spot),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    taint: cdktf.listMapper(containerClusterNodeConfigTaintToTerraform, false)(struct!.taint),
    gcfs_config: containerClusterNodeConfigGcfsConfigToTerraform(struct!.gcfsConfig),
    gvnic: containerClusterNodeConfigGvnicToTerraform(struct!.gvnic),
    reservation_affinity: containerClusterNodeConfigReservationAffinityToTerraform(struct!.reservationAffinity),
    shielded_instance_config: containerClusterNodeConfigShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    workload_metadata_config: containerClusterNodeConfigWorkloadMetadataConfigToTerraform(struct!.workloadMetadataConfig),
  }
}

export class ContainerClusterNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskKmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskKmsKey = this._bootDiskKmsKey;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._guestAccelerator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestAccelerator = this._guestAccelerator?.internalValue;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._nodeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroup = this._nodeGroup;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._spot !== undefined) {
      hasAnyValues = true;
      internalValueResult.spot = this._spot;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    if (this._gcfsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcfsConfig = this._gcfsConfig?.internalValue;
    }
    if (this._gvnic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gvnic = this._gvnic?.internalValue;
    }
    if (this._reservationAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationAffinity = this._reservationAffinity?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    if (this._workloadMetadataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadMetadataConfig = this._workloadMetadataConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskKmsKey = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._guestAccelerator.internalValue = undefined;
      this._imageType = undefined;
      this._labels = undefined;
      this._localSsdCount = undefined;
      this._machineType = undefined;
      this._metadata = undefined;
      this._minCpuPlatform = undefined;
      this._nodeGroup = undefined;
      this._oauthScopes = undefined;
      this._preemptible = undefined;
      this._serviceAccount = undefined;
      this._spot = undefined;
      this._tags = undefined;
      this._taint.internalValue = undefined;
      this._gcfsConfig.internalValue = undefined;
      this._gvnic.internalValue = undefined;
      this._reservationAffinity.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
      this._workloadMetadataConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskKmsKey = value.bootDiskKmsKey;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._guestAccelerator.internalValue = value.guestAccelerator;
      this._imageType = value.imageType;
      this._labels = value.labels;
      this._localSsdCount = value.localSsdCount;
      this._machineType = value.machineType;
      this._metadata = value.metadata;
      this._minCpuPlatform = value.minCpuPlatform;
      this._nodeGroup = value.nodeGroup;
      this._oauthScopes = value.oauthScopes;
      this._preemptible = value.preemptible;
      this._serviceAccount = value.serviceAccount;
      this._spot = value.spot;
      this._tags = value.tags;
      this._taint.internalValue = value.taint;
      this._gcfsConfig.internalValue = value.gcfsConfig;
      this._gvnic.internalValue = value.gvnic;
      this._reservationAffinity.internalValue = value.reservationAffinity;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
      this._workloadMetadataConfig.internalValue = value.workloadMetadataConfig;
    }
  }

  // boot_disk_kms_key - computed: false, optional: true, required: false
  private _bootDiskKmsKey?: string; 
  public get bootDiskKmsKey() {
    return this.getStringAttribute('boot_disk_kms_key');
  }
  public set bootDiskKmsKey(value: string) {
    this._bootDiskKmsKey = value;
  }
  public resetBootDiskKmsKey() {
    this._bootDiskKmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskKmsKeyInput() {
    return this._bootDiskKmsKey;
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // disk_type - computed: true, optional: true, required: false
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

  // guest_accelerator - computed: true, optional: true, required: false
  private _guestAccelerator = new ContainerClusterNodeConfigGuestAcceleratorList(this, "guest_accelerator", false);
  public get guestAccelerator() {
    return this._guestAccelerator;
  }
  public putGuestAccelerator(value: ContainerClusterNodeConfigGuestAccelerator[] | cdktf.IResolvable) {
    this._guestAccelerator.internalValue = value;
  }
  public resetGuestAccelerator() {
    this._guestAccelerator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorInput() {
    return this._guestAccelerator.internalValue;
  }

  // image_type - computed: true, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // labels - computed: true, optional: true, required: false
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

  // local_ssd_count - computed: true, optional: true, required: false
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  public resetLocalSsdCount() {
    this._localSsdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // min_cpu_platform - computed: true, optional: true, required: false
  private _minCpuPlatform?: string; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform;
  }

  // node_group - computed: false, optional: true, required: false
  private _nodeGroup?: string; 
  public get nodeGroup() {
    return this.getStringAttribute('node_group');
  }
  public set nodeGroup(value: string) {
    this._nodeGroup = value;
  }
  public resetNodeGroup() {
    this._nodeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupInput() {
    return this._nodeGroup;
  }

  // oauth_scopes - computed: true, optional: true, required: false
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('oauth_scopes'));
  }
  public set oauthScopes(value: string[]) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes;
  }

  // preemptible - computed: false, optional: true, required: false
  private _preemptible?: boolean | cdktf.IResolvable; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }
  public set preemptible(value: boolean | cdktf.IResolvable) {
    this._preemptible = value;
  }
  public resetPreemptible() {
    this._preemptible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInput() {
    return this._preemptible;
  }

  // service_account - computed: true, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // spot - computed: false, optional: true, required: false
  private _spot?: boolean | cdktf.IResolvable; 
  public get spot() {
    return this.getBooleanAttribute('spot');
  }
  public set spot(value: boolean | cdktf.IResolvable) {
    this._spot = value;
  }
  public resetSpot() {
    this._spot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInput() {
    return this._spot;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // taint - computed: true, optional: true, required: false
  private _taint = new ContainerClusterNodeConfigTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: ContainerClusterNodeConfigTaint[] | cdktf.IResolvable) {
    this._taint.internalValue = value;
  }
  public resetTaint() {
    this._taint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint.internalValue;
  }

  // gcfs_config - computed: false, optional: true, required: false
  private _gcfsConfig = new ContainerClusterNodeConfigGcfsConfigOutputReference(this, "gcfs_config");
  public get gcfsConfig() {
    return this._gcfsConfig;
  }
  public putGcfsConfig(value: ContainerClusterNodeConfigGcfsConfig) {
    this._gcfsConfig.internalValue = value;
  }
  public resetGcfsConfig() {
    this._gcfsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcfsConfigInput() {
    return this._gcfsConfig.internalValue;
  }

  // gvnic - computed: false, optional: true, required: false
  private _gvnic = new ContainerClusterNodeConfigGvnicOutputReference(this, "gvnic");
  public get gvnic() {
    return this._gvnic;
  }
  public putGvnic(value: ContainerClusterNodeConfigGvnic) {
    this._gvnic.internalValue = value;
  }
  public resetGvnic() {
    this._gvnic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gvnicInput() {
    return this._gvnic.internalValue;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new ContainerClusterNodeConfigReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: ContainerClusterNodeConfigReservationAffinity) {
    this._reservationAffinity.internalValue = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new ContainerClusterNodeConfigShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: ContainerClusterNodeConfigShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }

  // workload_metadata_config - computed: false, optional: true, required: false
  private _workloadMetadataConfig = new ContainerClusterNodeConfigWorkloadMetadataConfigOutputReference(this, "workload_metadata_config");
  public get workloadMetadataConfig() {
    return this._workloadMetadataConfig;
  }
  public putWorkloadMetadataConfig(value: ContainerClusterNodeConfigWorkloadMetadataConfig) {
    this._workloadMetadataConfig.internalValue = value;
  }
  public resetWorkloadMetadataConfig() {
    this._workloadMetadataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadMetadataConfigInput() {
    return this._workloadMetadataConfig.internalValue;
  }
}
export interface ContainerClusterNodePoolAutoscaling {
  /**
  * Location policy specifies the algorithm used when scaling-up the node pool. "BALANCED" - Is a best effort policy that aims to balance the sizes of available zones. "ANY" - Instructs the cluster autoscaler to prioritize utilization of unused reservations, and reduces preemption risk for Spot VMs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#location_policy ContainerCluster#location_policy}
  */
  readonly locationPolicy?: string;
  /**
  * Maximum number of nodes per zone in the node pool. Must be >= min_node_count. Cannot be used with total limits.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#max_node_count ContainerCluster#max_node_count}
  */
  readonly maxNodeCount?: number;
  /**
  * Minimum number of nodes per zone in the node pool. Must be >=0 and <= max_node_count. Cannot be used with total limits.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#min_node_count ContainerCluster#min_node_count}
  */
  readonly minNodeCount?: number;
  /**
  * Maximum number of all nodes in the node pool. Must be >= total_min_node_count. Cannot be used with per zone limits.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#total_max_node_count ContainerCluster#total_max_node_count}
  */
  readonly totalMaxNodeCount?: number;
  /**
  * Minimum number of all nodes in the node pool. Must be >=0 and <= total_max_node_count. Cannot be used with per zone limits.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#total_min_node_count ContainerCluster#total_min_node_count}
  */
  readonly totalMinNodeCount?: number;
}

export function containerClusterNodePoolAutoscalingToTerraform(struct?: ContainerClusterNodePoolAutoscalingOutputReference | ContainerClusterNodePoolAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location_policy: cdktf.stringToTerraform(struct!.locationPolicy),
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
    total_max_node_count: cdktf.numberToTerraform(struct!.totalMaxNodeCount),
    total_min_node_count: cdktf.numberToTerraform(struct!.totalMinNodeCount),
  }
}

export class ContainerClusterNodePoolAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationPolicy = this._locationPolicy;
    }
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    if (this._totalMaxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMaxNodeCount = this._totalMaxNodeCount;
    }
    if (this._totalMinNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMinNodeCount = this._totalMinNodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locationPolicy = undefined;
      this._maxNodeCount = undefined;
      this._minNodeCount = undefined;
      this._totalMaxNodeCount = undefined;
      this._totalMinNodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locationPolicy = value.locationPolicy;
      this._maxNodeCount = value.maxNodeCount;
      this._minNodeCount = value.minNodeCount;
      this._totalMaxNodeCount = value.totalMaxNodeCount;
      this._totalMinNodeCount = value.totalMinNodeCount;
    }
  }

  // location_policy - computed: false, optional: true, required: false
  private _locationPolicy?: string; 
  public get locationPolicy() {
    return this.getStringAttribute('location_policy');
  }
  public set locationPolicy(value: string) {
    this._locationPolicy = value;
  }
  public resetLocationPolicy() {
    this._locationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationPolicyInput() {
    return this._locationPolicy;
  }

  // max_node_count - computed: false, optional: true, required: false
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  public resetMaxNodeCount() {
    this._maxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: false, optional: true, required: false
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  public resetMinNodeCount() {
    this._minNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
  }

  // total_max_node_count - computed: false, optional: true, required: false
  private _totalMaxNodeCount?: number; 
  public get totalMaxNodeCount() {
    return this.getNumberAttribute('total_max_node_count');
  }
  public set totalMaxNodeCount(value: number) {
    this._totalMaxNodeCount = value;
  }
  public resetTotalMaxNodeCount() {
    this._totalMaxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMaxNodeCountInput() {
    return this._totalMaxNodeCount;
  }

  // total_min_node_count - computed: false, optional: true, required: false
  private _totalMinNodeCount?: number; 
  public get totalMinNodeCount() {
    return this.getNumberAttribute('total_min_node_count');
  }
  public set totalMinNodeCount(value: number) {
    this._totalMinNodeCount = value;
  }
  public resetTotalMinNodeCount() {
    this._totalMinNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMinNodeCountInput() {
    return this._totalMinNodeCount;
  }
}
export interface ContainerClusterNodePoolManagement {
  /**
  * Whether the nodes will be automatically repaired.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#auto_repair ContainerCluster#auto_repair}
  */
  readonly autoRepair?: boolean | cdktf.IResolvable;
  /**
  * Whether the nodes will be automatically upgraded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#auto_upgrade ContainerCluster#auto_upgrade}
  */
  readonly autoUpgrade?: boolean | cdktf.IResolvable;
}

export function containerClusterNodePoolManagementToTerraform(struct?: ContainerClusterNodePoolManagementOutputReference | ContainerClusterNodePoolManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_repair: cdktf.booleanToTerraform(struct!.autoRepair),
    auto_upgrade: cdktf.booleanToTerraform(struct!.autoUpgrade),
  }
}

export class ContainerClusterNodePoolManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRepair !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRepair = this._autoRepair;
    }
    if (this._autoUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgrade = this._autoUpgrade;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoRepair = undefined;
      this._autoUpgrade = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoRepair = value.autoRepair;
      this._autoUpgrade = value.autoUpgrade;
    }
  }

  // auto_repair - computed: false, optional: true, required: false
  private _autoRepair?: boolean | cdktf.IResolvable; 
  public get autoRepair() {
    return this.getBooleanAttribute('auto_repair');
  }
  public set autoRepair(value: boolean | cdktf.IResolvable) {
    this._autoRepair = value;
  }
  public resetAutoRepair() {
    this._autoRepair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRepairInput() {
    return this._autoRepair;
  }

  // auto_upgrade - computed: false, optional: true, required: false
  private _autoUpgrade?: boolean | cdktf.IResolvable; 
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
  }
  public set autoUpgrade(value: boolean | cdktf.IResolvable) {
    this._autoUpgrade = value;
  }
  public resetAutoUpgrade() {
    this._autoUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeInput() {
    return this._autoUpgrade;
  }
}
export interface ContainerClusterNodePoolNodeConfigGuestAccelerator {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#count ContainerCluster#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#gpu_partition_size ContainerCluster#gpu_partition_size}
  */
  readonly gpuPartitionSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#type ContainerCluster#type}
  */
  readonly type?: string;
}

export function containerClusterNodePoolNodeConfigGuestAcceleratorToTerraform(struct?: ContainerClusterNodePoolNodeConfigGuestAccelerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    gpu_partition_size: cdktf.stringToTerraform(struct!.gpuPartitionSize),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class ContainerClusterNodePoolNodeConfigGuestAcceleratorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNodeConfigGuestAccelerator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._gpuPartitionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuPartitionSize = this._gpuPartitionSize;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigGuestAccelerator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._gpuPartitionSize = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._gpuPartitionSize = value.gpuPartitionSize;
      this._type = value.type;
    }
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // gpu_partition_size - computed: true, optional: true, required: false
  private _gpuPartitionSize?: string; 
  public get gpuPartitionSize() {
    return this.getStringAttribute('gpu_partition_size');
  }
  public set gpuPartitionSize(value: string) {
    this._gpuPartitionSize = value;
  }
  public resetGpuPartitionSize() {
    this._gpuPartitionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuPartitionSizeInput() {
    return this._gpuPartitionSize;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ContainerClusterNodePoolNodeConfigGuestAcceleratorList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterNodePoolNodeConfigGuestAccelerator[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNodeConfigGuestAcceleratorOutputReference {
    return new ContainerClusterNodePoolNodeConfigGuestAcceleratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNodeConfigTaint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#effect ContainerCluster#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#key ContainerCluster#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#value ContainerCluster#value}
  */
  readonly value?: string;
}

export function containerClusterNodePoolNodeConfigTaintToTerraform(struct?: ContainerClusterNodePoolNodeConfigTaint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class ContainerClusterNodePoolNodeConfigTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNodeConfigTaint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigTaint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: true, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ContainerClusterNodePoolNodeConfigTaintList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterNodePoolNodeConfigTaint[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNodeConfigTaintOutputReference {
    return new ContainerClusterNodePoolNodeConfigTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNodeConfigGcfsConfig {
  /**
  * Whether or not GCFS is enabled
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterNodePoolNodeConfigGcfsConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigGcfsConfigOutputReference | ContainerClusterNodePoolNodeConfigGcfsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class ContainerClusterNodePoolNodeConfigGcfsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigGcfsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigGcfsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ContainerClusterNodePoolNodeConfigGvnic {
  /**
  * Whether or not gvnic is enabled
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterNodePoolNodeConfigGvnicToTerraform(struct?: ContainerClusterNodePoolNodeConfigGvnicOutputReference | ContainerClusterNodePoolNodeConfigGvnic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class ContainerClusterNodePoolNodeConfigGvnicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigGvnic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigGvnic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ContainerClusterNodePoolNodeConfigReservationAffinity {
  /**
  * Corresponds to the type of reservation consumption.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#consume_reservation_type ContainerCluster#consume_reservation_type}
  */
  readonly consumeReservationType: string;
  /**
  * The label key of a reservation resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#key ContainerCluster#key}
  */
  readonly key?: string;
  /**
  * The label values of the reservation resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#values ContainerCluster#values}
  */
  readonly values?: string[];
}

export function containerClusterNodePoolNodeConfigReservationAffinityToTerraform(struct?: ContainerClusterNodePoolNodeConfigReservationAffinityOutputReference | ContainerClusterNodePoolNodeConfigReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consume_reservation_type: cdktf.stringToTerraform(struct!.consumeReservationType),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}

export class ContainerClusterNodePoolNodeConfigReservationAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigReservationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumeReservationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumeReservationType = this._consumeReservationType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigReservationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumeReservationType = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumeReservationType = value.consumeReservationType;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // consume_reservation_type - computed: false, optional: false, required: true
  private _consumeReservationType?: string; 
  public get consumeReservationType() {
    return this.getStringAttribute('consume_reservation_type');
  }
  public set consumeReservationType(value: string) {
    this._consumeReservationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumeReservationTypeInput() {
    return this._consumeReservationType;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface ContainerClusterNodePoolNodeConfigShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enable_integrity_monitoring ContainerCluster#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enable_secure_boot ContainerCluster#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
}

export function containerClusterNodePoolNodeConfigShieldedInstanceConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference | ContainerClusterNodePoolNodeConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}

export class ContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }
  public set enableIntegrityMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring;
  }

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktf.IResolvable; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
  public set enableSecureBoot(value: boolean | cdktf.IResolvable) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot;
  }
}
export interface ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig {
  /**
  * Mode is the configuration for how to expose metadata to workloads running on the node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#mode ContainerCluster#mode}
  */
  readonly mode: string;
}

export function containerClusterNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference | ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}

export class ContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface ContainerClusterNodePoolNodeConfig {
  /**
  * The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#boot_disk_kms_key ContainerCluster#boot_disk_kms_key}
  */
  readonly bootDiskKmsKey?: string;
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#disk_size_gb ContainerCluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#disk_type ContainerCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * List of the type and count of accelerator cards attached to the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#guest_accelerator ContainerCluster#guest_accelerator}
  */
  readonly guestAccelerator?: ContainerClusterNodePoolNodeConfigGuestAccelerator[] | cdktf.IResolvable;
  /**
  * The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#image_type ContainerCluster#image_type}
  */
  readonly imageType?: string;
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#labels ContainerCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The number of local SSD disks to be attached to the node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#local_ssd_count ContainerCluster#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * The name of a Google Compute Engine machine type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#machine_type ContainerCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The metadata key/value pairs assigned to instances in the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#metadata ContainerCluster#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#min_cpu_platform ContainerCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#node_group ContainerCluster#node_group}
  */
  readonly nodeGroup?: string;
  /**
  * The set of Google API scopes to be made available on all of the node VMs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#oauth_scopes ContainerCluster#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * Whether the nodes are created as preemptible VM instances.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#preemptible ContainerCluster#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#service_account ContainerCluster#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Whether the nodes are created as spot VM instances.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#spot ContainerCluster#spot}
  */
  readonly spot?: boolean | cdktf.IResolvable;
  /**
  * The list of instance tags applied to all nodes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#tags ContainerCluster#tags}
  */
  readonly tags?: string[];
  /**
  * List of Kubernetes taints to be applied to each node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#taint ContainerCluster#taint}
  */
  readonly taint?: ContainerClusterNodePoolNodeConfigTaint[] | cdktf.IResolvable;
  /**
  * gcfs_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#gcfs_config ContainerCluster#gcfs_config}
  */
  readonly gcfsConfig?: ContainerClusterNodePoolNodeConfigGcfsConfig;
  /**
  * gvnic block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#gvnic ContainerCluster#gvnic}
  */
  readonly gvnic?: ContainerClusterNodePoolNodeConfigGvnic;
  /**
  * reservation_affinity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#reservation_affinity ContainerCluster#reservation_affinity}
  */
  readonly reservationAffinity?: ContainerClusterNodePoolNodeConfigReservationAffinity;
  /**
  * shielded_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#shielded_instance_config ContainerCluster#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: ContainerClusterNodePoolNodeConfigShieldedInstanceConfig;
  /**
  * workload_metadata_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#workload_metadata_config ContainerCluster#workload_metadata_config}
  */
  readonly workloadMetadataConfig?: ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig;
}

export function containerClusterNodePoolNodeConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigOutputReference | ContainerClusterNodePoolNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_kms_key: cdktf.stringToTerraform(struct!.bootDiskKmsKey),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    guest_accelerator: cdktf.listMapper(containerClusterNodePoolNodeConfigGuestAcceleratorToTerraform, false)(struct!.guestAccelerator),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    node_group: cdktf.stringToTerraform(struct!.nodeGroup),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oauthScopes),
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    spot: cdktf.booleanToTerraform(struct!.spot),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    taint: cdktf.listMapper(containerClusterNodePoolNodeConfigTaintToTerraform, false)(struct!.taint),
    gcfs_config: containerClusterNodePoolNodeConfigGcfsConfigToTerraform(struct!.gcfsConfig),
    gvnic: containerClusterNodePoolNodeConfigGvnicToTerraform(struct!.gvnic),
    reservation_affinity: containerClusterNodePoolNodeConfigReservationAffinityToTerraform(struct!.reservationAffinity),
    shielded_instance_config: containerClusterNodePoolNodeConfigShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    workload_metadata_config: containerClusterNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct!.workloadMetadataConfig),
  }
}

export class ContainerClusterNodePoolNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskKmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskKmsKey = this._bootDiskKmsKey;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._guestAccelerator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestAccelerator = this._guestAccelerator?.internalValue;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._nodeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroup = this._nodeGroup;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._spot !== undefined) {
      hasAnyValues = true;
      internalValueResult.spot = this._spot;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    if (this._gcfsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcfsConfig = this._gcfsConfig?.internalValue;
    }
    if (this._gvnic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gvnic = this._gvnic?.internalValue;
    }
    if (this._reservationAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationAffinity = this._reservationAffinity?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    if (this._workloadMetadataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadMetadataConfig = this._workloadMetadataConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskKmsKey = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._guestAccelerator.internalValue = undefined;
      this._imageType = undefined;
      this._labels = undefined;
      this._localSsdCount = undefined;
      this._machineType = undefined;
      this._metadata = undefined;
      this._minCpuPlatform = undefined;
      this._nodeGroup = undefined;
      this._oauthScopes = undefined;
      this._preemptible = undefined;
      this._serviceAccount = undefined;
      this._spot = undefined;
      this._tags = undefined;
      this._taint.internalValue = undefined;
      this._gcfsConfig.internalValue = undefined;
      this._gvnic.internalValue = undefined;
      this._reservationAffinity.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
      this._workloadMetadataConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskKmsKey = value.bootDiskKmsKey;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._guestAccelerator.internalValue = value.guestAccelerator;
      this._imageType = value.imageType;
      this._labels = value.labels;
      this._localSsdCount = value.localSsdCount;
      this._machineType = value.machineType;
      this._metadata = value.metadata;
      this._minCpuPlatform = value.minCpuPlatform;
      this._nodeGroup = value.nodeGroup;
      this._oauthScopes = value.oauthScopes;
      this._preemptible = value.preemptible;
      this._serviceAccount = value.serviceAccount;
      this._spot = value.spot;
      this._tags = value.tags;
      this._taint.internalValue = value.taint;
      this._gcfsConfig.internalValue = value.gcfsConfig;
      this._gvnic.internalValue = value.gvnic;
      this._reservationAffinity.internalValue = value.reservationAffinity;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
      this._workloadMetadataConfig.internalValue = value.workloadMetadataConfig;
    }
  }

  // boot_disk_kms_key - computed: false, optional: true, required: false
  private _bootDiskKmsKey?: string; 
  public get bootDiskKmsKey() {
    return this.getStringAttribute('boot_disk_kms_key');
  }
  public set bootDiskKmsKey(value: string) {
    this._bootDiskKmsKey = value;
  }
  public resetBootDiskKmsKey() {
    this._bootDiskKmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskKmsKeyInput() {
    return this._bootDiskKmsKey;
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb;
  }

  // disk_type - computed: true, optional: true, required: false
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

  // guest_accelerator - computed: true, optional: true, required: false
  private _guestAccelerator = new ContainerClusterNodePoolNodeConfigGuestAcceleratorList(this, "guest_accelerator", false);
  public get guestAccelerator() {
    return this._guestAccelerator;
  }
  public putGuestAccelerator(value: ContainerClusterNodePoolNodeConfigGuestAccelerator[] | cdktf.IResolvable) {
    this._guestAccelerator.internalValue = value;
  }
  public resetGuestAccelerator() {
    this._guestAccelerator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorInput() {
    return this._guestAccelerator.internalValue;
  }

  // image_type - computed: true, optional: true, required: false
  private _imageType?: string; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType;
  }

  // labels - computed: true, optional: true, required: false
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

  // local_ssd_count - computed: true, optional: true, required: false
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  public resetLocalSsdCount() {
    this._localSsdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // min_cpu_platform - computed: true, optional: true, required: false
  private _minCpuPlatform?: string; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform;
  }

  // node_group - computed: false, optional: true, required: false
  private _nodeGroup?: string; 
  public get nodeGroup() {
    return this.getStringAttribute('node_group');
  }
  public set nodeGroup(value: string) {
    this._nodeGroup = value;
  }
  public resetNodeGroup() {
    this._nodeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupInput() {
    return this._nodeGroup;
  }

  // oauth_scopes - computed: true, optional: true, required: false
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('oauth_scopes'));
  }
  public set oauthScopes(value: string[]) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes;
  }

  // preemptible - computed: false, optional: true, required: false
  private _preemptible?: boolean | cdktf.IResolvable; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }
  public set preemptible(value: boolean | cdktf.IResolvable) {
    this._preemptible = value;
  }
  public resetPreemptible() {
    this._preemptible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInput() {
    return this._preemptible;
  }

  // service_account - computed: true, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // spot - computed: false, optional: true, required: false
  private _spot?: boolean | cdktf.IResolvable; 
  public get spot() {
    return this.getBooleanAttribute('spot');
  }
  public set spot(value: boolean | cdktf.IResolvable) {
    this._spot = value;
  }
  public resetSpot() {
    this._spot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInput() {
    return this._spot;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // taint - computed: true, optional: true, required: false
  private _taint = new ContainerClusterNodePoolNodeConfigTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: ContainerClusterNodePoolNodeConfigTaint[] | cdktf.IResolvable) {
    this._taint.internalValue = value;
  }
  public resetTaint() {
    this._taint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint.internalValue;
  }

  // gcfs_config - computed: false, optional: true, required: false
  private _gcfsConfig = new ContainerClusterNodePoolNodeConfigGcfsConfigOutputReference(this, "gcfs_config");
  public get gcfsConfig() {
    return this._gcfsConfig;
  }
  public putGcfsConfig(value: ContainerClusterNodePoolNodeConfigGcfsConfig) {
    this._gcfsConfig.internalValue = value;
  }
  public resetGcfsConfig() {
    this._gcfsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcfsConfigInput() {
    return this._gcfsConfig.internalValue;
  }

  // gvnic - computed: false, optional: true, required: false
  private _gvnic = new ContainerClusterNodePoolNodeConfigGvnicOutputReference(this, "gvnic");
  public get gvnic() {
    return this._gvnic;
  }
  public putGvnic(value: ContainerClusterNodePoolNodeConfigGvnic) {
    this._gvnic.internalValue = value;
  }
  public resetGvnic() {
    this._gvnic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gvnicInput() {
    return this._gvnic.internalValue;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new ContainerClusterNodePoolNodeConfigReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: ContainerClusterNodePoolNodeConfigReservationAffinity) {
    this._reservationAffinity.internalValue = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new ContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: ContainerClusterNodePoolNodeConfigShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }

  // workload_metadata_config - computed: false, optional: true, required: false
  private _workloadMetadataConfig = new ContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference(this, "workload_metadata_config");
  public get workloadMetadataConfig() {
    return this._workloadMetadataConfig;
  }
  public putWorkloadMetadataConfig(value: ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig) {
    this._workloadMetadataConfig.internalValue = value;
  }
  public resetWorkloadMetadataConfig() {
    this._workloadMetadataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadMetadataConfigInput() {
    return this._workloadMetadataConfig.internalValue;
  }
}
export interface ContainerClusterNodePoolUpgradeSettings {
  /**
  * The number of additional nodes that can be added to the node pool during an upgrade. Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#max_surge ContainerCluster#max_surge}
  */
  readonly maxSurge: number;
  /**
  * The number of nodes that can be simultaneously unavailable during an upgrade. Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#max_unavailable ContainerCluster#max_unavailable}
  */
  readonly maxUnavailable: number;
}

export function containerClusterNodePoolUpgradeSettingsToTerraform(struct?: ContainerClusterNodePoolUpgradeSettingsOutputReference | ContainerClusterNodePoolUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}

export class ContainerClusterNodePoolUpgradeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolUpgradeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolUpgradeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // max_surge - computed: false, optional: false, required: true
  private _maxSurge?: number; 
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }
  public set maxSurge(value: number) {
    this._maxSurge = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: false, required: true
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface ContainerClusterNodePool {
  /**
  * The initial number of nodes for the pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#initial_node_count ContainerCluster#initial_node_count}
  */
  readonly initialNodeCount?: number;
  /**
  * The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#max_pods_per_node ContainerCluster#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * The name of the node pool. If left blank, Terraform will auto-generate a unique name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#name ContainerCluster#name}
  */
  readonly name?: string;
  /**
  * Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#name_prefix ContainerCluster#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#node_count ContainerCluster#node_count}
  */
  readonly nodeCount?: number;
  /**
  * The list of zones in which the node pool's nodes should be located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#node_locations ContainerCluster#node_locations}
  */
  readonly nodeLocations?: string[];
  /**
  * The Kubernetes version for the nodes in this pool. Note that if this field and auto_upgrade are both specified, they will fight each other for what the node version should be, so setting both is highly discouraged. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#version ContainerCluster#version}
  */
  readonly version?: string;
  /**
  * autoscaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#autoscaling ContainerCluster#autoscaling}
  */
  readonly autoscaling?: ContainerClusterNodePoolAutoscaling;
  /**
  * management block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#management ContainerCluster#management}
  */
  readonly management?: ContainerClusterNodePoolManagement;
  /**
  * node_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#node_config ContainerCluster#node_config}
  */
  readonly nodeConfig?: ContainerClusterNodePoolNodeConfig;
  /**
  * upgrade_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#upgrade_settings ContainerCluster#upgrade_settings}
  */
  readonly upgradeSettings?: ContainerClusterNodePoolUpgradeSettings;
}

export function containerClusterNodePoolToTerraform(struct?: ContainerClusterNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initial_node_count: cdktf.numberToTerraform(struct!.initialNodeCount),
    max_pods_per_node: cdktf.numberToTerraform(struct!.maxPodsPerNode),
    name: cdktf.stringToTerraform(struct!.name),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeLocations),
    version: cdktf.stringToTerraform(struct!.version),
    autoscaling: containerClusterNodePoolAutoscalingToTerraform(struct!.autoscaling),
    management: containerClusterNodePoolManagementToTerraform(struct!.management),
    node_config: containerClusterNodePoolNodeConfigToTerraform(struct!.nodeConfig),
    upgrade_settings: containerClusterNodePoolUpgradeSettingsToTerraform(struct!.upgradeSettings),
  }
}

export class ContainerClusterNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initialNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialNodeCount = this._initialNodeCount;
    }
    if (this._maxPodsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPodsPerNode = this._maxPodsPerNode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._nodeLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLocations = this._nodeLocations;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._autoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaling = this._autoscaling?.internalValue;
    }
    if (this._management?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management?.internalValue;
    }
    if (this._nodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeConfig = this._nodeConfig?.internalValue;
    }
    if (this._upgradeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeSettings = this._upgradeSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._initialNodeCount = undefined;
      this._maxPodsPerNode = undefined;
      this._name = undefined;
      this._namePrefix = undefined;
      this._nodeCount = undefined;
      this._nodeLocations = undefined;
      this._version = undefined;
      this._autoscaling.internalValue = undefined;
      this._management.internalValue = undefined;
      this._nodeConfig.internalValue = undefined;
      this._upgradeSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._initialNodeCount = value.initialNodeCount;
      this._maxPodsPerNode = value.maxPodsPerNode;
      this._name = value.name;
      this._namePrefix = value.namePrefix;
      this._nodeCount = value.nodeCount;
      this._nodeLocations = value.nodeLocations;
      this._version = value.version;
      this._autoscaling.internalValue = value.autoscaling;
      this._management.internalValue = value.management;
      this._nodeConfig.internalValue = value.nodeConfig;
      this._upgradeSettings.internalValue = value.upgradeSettings;
    }
  }

  // initial_node_count - computed: true, optional: true, required: false
  private _initialNodeCount?: number; 
  public get initialNodeCount() {
    return this.getNumberAttribute('initial_node_count');
  }
  public set initialNodeCount(value: number) {
    this._initialNodeCount = value;
  }
  public resetInitialNodeCount() {
    this._initialNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialNodeCountInput() {
    return this._initialNodeCount;
  }

  // instance_group_urls - computed: true, optional: false, required: false
  public get instanceGroupUrls() {
    return this.getListAttribute('instance_group_urls');
  }

  // managed_instance_group_urls - computed: true, optional: false, required: false
  public get managedInstanceGroupUrls() {
    return this.getListAttribute('managed_instance_group_urls');
  }

  // max_pods_per_node - computed: true, optional: true, required: false
  private _maxPodsPerNode?: number; 
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }
  public set maxPodsPerNode(value: number) {
    this._maxPodsPerNode = value;
  }
  public resetMaxPodsPerNode() {
    this._maxPodsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsPerNodeInput() {
    return this._maxPodsPerNode;
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

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
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

  // node_locations - computed: true, optional: true, required: false
  private _nodeLocations?: string[]; 
  public get nodeLocations() {
    return cdktf.Fn.tolist(this.getListAttribute('node_locations'));
  }
  public set nodeLocations(value: string[]) {
    this._nodeLocations = value;
  }
  public resetNodeLocations() {
    this._nodeLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLocationsInput() {
    return this._nodeLocations;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // autoscaling - computed: false, optional: true, required: false
  private _autoscaling = new ContainerClusterNodePoolAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: ContainerClusterNodePoolAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  public resetAutoscaling() {
    this._autoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // management - computed: false, optional: true, required: false
  private _management = new ContainerClusterNodePoolManagementOutputReference(this, "management");
  public get management() {
    return this._management;
  }
  public putManagement(value: ContainerClusterNodePoolManagement) {
    this._management.internalValue = value;
  }
  public resetManagement() {
    this._management.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management.internalValue;
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig = new ContainerClusterNodePoolNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: ContainerClusterNodePoolNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  public resetNodeConfig() {
    this._nodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // upgrade_settings - computed: false, optional: true, required: false
  private _upgradeSettings = new ContainerClusterNodePoolUpgradeSettingsOutputReference(this, "upgrade_settings");
  public get upgradeSettings() {
    return this._upgradeSettings;
  }
  public putUpgradeSettings(value: ContainerClusterNodePoolUpgradeSettings) {
    this._upgradeSettings.internalValue = value;
  }
  public resetUpgradeSettings() {
    this._upgradeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSettingsInput() {
    return this._upgradeSettings.internalValue;
  }
}

export class ContainerClusterNodePoolList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterNodePool[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterNodePoolOutputReference {
    return new ContainerClusterNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNotificationConfigPubsub {
  /**
  * Whether or not the notification config is enabled
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The pubsub topic to push upgrade notifications to. Must be in the same project as the cluster. Must be in the format: projects/{project}/topics/{topic}.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#topic ContainerCluster#topic}
  */
  readonly topic?: string;
}

export function containerClusterNotificationConfigPubsubToTerraform(struct?: ContainerClusterNotificationConfigPubsubOutputReference | ContainerClusterNotificationConfigPubsub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}

export class ContainerClusterNotificationConfigPubsubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNotificationConfigPubsub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNotificationConfigPubsub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._topic = value.topic;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // topic - computed: false, optional: true, required: false
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  public resetTopic() {
    this._topic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface ContainerClusterNotificationConfig {
  /**
  * pubsub block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#pubsub ContainerCluster#pubsub}
  */
  readonly pubsub: ContainerClusterNotificationConfigPubsub;
}

export function containerClusterNotificationConfigToTerraform(struct?: ContainerClusterNotificationConfigOutputReference | ContainerClusterNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pubsub: containerClusterNotificationConfigPubsubToTerraform(struct!.pubsub),
  }
}

export class ContainerClusterNotificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNotificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pubsub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubsub = this._pubsub?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNotificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pubsub.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pubsub.internalValue = value.pubsub;
    }
  }

  // pubsub - computed: false, optional: false, required: true
  private _pubsub = new ContainerClusterNotificationConfigPubsubOutputReference(this, "pubsub");
  public get pubsub() {
    return this._pubsub;
  }
  public putPubsub(value: ContainerClusterNotificationConfigPubsub) {
    this._pubsub.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pubsubInput() {
    return this._pubsub.internalValue;
  }
}
export interface ContainerClusterPrivateClusterConfigMasterGlobalAccessConfig {
  /**
  * Whether the cluster master is accessible globally or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterPrivateClusterConfigMasterGlobalAccessConfigToTerraform(struct?: ContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference | ContainerClusterPrivateClusterConfigMasterGlobalAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class ContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterPrivateClusterConfigMasterGlobalAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterPrivateClusterConfigMasterGlobalAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ContainerClusterPrivateClusterConfig {
  /**
  * When true, the cluster's private endpoint is used as the cluster endpoint and access through the public endpoint is disabled. When false, either endpoint can be used. This field only applies to private clusters, when enable_private_nodes is true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enable_private_endpoint ContainerCluster#enable_private_endpoint}
  */
  readonly enablePrivateEndpoint: boolean | cdktf.IResolvable;
  /**
  * Enables the private cluster feature, creating a private endpoint on the cluster. In a private cluster, nodes only have RFC 1918 private addresses and communicate with the master's private endpoint via private networking.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enable_private_nodes ContainerCluster#enable_private_nodes}
  */
  readonly enablePrivateNodes?: boolean | cdktf.IResolvable;
  /**
  * The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning private IP addresses to the cluster master(s) and the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network, and it must be a /28 subnet. See Private Cluster Limitations for more details. This field only applies to private clusters, when enable_private_nodes is true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#master_ipv4_cidr_block ContainerCluster#master_ipv4_cidr_block}
  */
  readonly masterIpv4CidrBlock?: string;
  /**
  * master_global_access_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#master_global_access_config ContainerCluster#master_global_access_config}
  */
  readonly masterGlobalAccessConfig?: ContainerClusterPrivateClusterConfigMasterGlobalAccessConfig;
}

export function containerClusterPrivateClusterConfigToTerraform(struct?: ContainerClusterPrivateClusterConfigOutputReference | ContainerClusterPrivateClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_private_endpoint: cdktf.booleanToTerraform(struct!.enablePrivateEndpoint),
    enable_private_nodes: cdktf.booleanToTerraform(struct!.enablePrivateNodes),
    master_ipv4_cidr_block: cdktf.stringToTerraform(struct!.masterIpv4CidrBlock),
    master_global_access_config: containerClusterPrivateClusterConfigMasterGlobalAccessConfigToTerraform(struct!.masterGlobalAccessConfig),
  }
}

export class ContainerClusterPrivateClusterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterPrivateClusterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePrivateEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateEndpoint = this._enablePrivateEndpoint;
    }
    if (this._enablePrivateNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateNodes = this._enablePrivateNodes;
    }
    if (this._masterIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterIpv4CidrBlock = this._masterIpv4CidrBlock;
    }
    if (this._masterGlobalAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterGlobalAccessConfig = this._masterGlobalAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterPrivateClusterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enablePrivateEndpoint = undefined;
      this._enablePrivateNodes = undefined;
      this._masterIpv4CidrBlock = undefined;
      this._masterGlobalAccessConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enablePrivateEndpoint = value.enablePrivateEndpoint;
      this._enablePrivateNodes = value.enablePrivateNodes;
      this._masterIpv4CidrBlock = value.masterIpv4CidrBlock;
      this._masterGlobalAccessConfig.internalValue = value.masterGlobalAccessConfig;
    }
  }

  // enable_private_endpoint - computed: false, optional: false, required: true
  private _enablePrivateEndpoint?: boolean | cdktf.IResolvable; 
  public get enablePrivateEndpoint() {
    return this.getBooleanAttribute('enable_private_endpoint');
  }
  public set enablePrivateEndpoint(value: boolean | cdktf.IResolvable) {
    this._enablePrivateEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateEndpointInput() {
    return this._enablePrivateEndpoint;
  }

  // enable_private_nodes - computed: false, optional: true, required: false
  private _enablePrivateNodes?: boolean | cdktf.IResolvable; 
  public get enablePrivateNodes() {
    return this.getBooleanAttribute('enable_private_nodes');
  }
  public set enablePrivateNodes(value: boolean | cdktf.IResolvable) {
    this._enablePrivateNodes = value;
  }
  public resetEnablePrivateNodes() {
    this._enablePrivateNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateNodesInput() {
    return this._enablePrivateNodes;
  }

  // master_ipv4_cidr_block - computed: true, optional: true, required: false
  private _masterIpv4CidrBlock?: string; 
  public get masterIpv4CidrBlock() {
    return this.getStringAttribute('master_ipv4_cidr_block');
  }
  public set masterIpv4CidrBlock(value: string) {
    this._masterIpv4CidrBlock = value;
  }
  public resetMasterIpv4CidrBlock() {
    this._masterIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterIpv4CidrBlockInput() {
    return this._masterIpv4CidrBlock;
  }

  // peering_name - computed: true, optional: false, required: false
  public get peeringName() {
    return this.getStringAttribute('peering_name');
  }

  // private_endpoint - computed: true, optional: false, required: false
  public get privateEndpoint() {
    return this.getStringAttribute('private_endpoint');
  }

  // public_endpoint - computed: true, optional: false, required: false
  public get publicEndpoint() {
    return this.getStringAttribute('public_endpoint');
  }

  // master_global_access_config - computed: false, optional: true, required: false
  private _masterGlobalAccessConfig = new ContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference(this, "master_global_access_config");
  public get masterGlobalAccessConfig() {
    return this._masterGlobalAccessConfig;
  }
  public putMasterGlobalAccessConfig(value: ContainerClusterPrivateClusterConfigMasterGlobalAccessConfig) {
    this._masterGlobalAccessConfig.internalValue = value;
  }
  public resetMasterGlobalAccessConfig() {
    this._masterGlobalAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterGlobalAccessConfigInput() {
    return this._masterGlobalAccessConfig.internalValue;
  }
}
export interface ContainerClusterReleaseChannel {
  /**
  * The selected release channel. Accepted values are:
* UNSPECIFIED: Not set.
* RAPID: Weekly upgrade cadence; Early testers and developers who requires new features.
* REGULAR: Multiple per month upgrade cadence; Production users who need features not yet offered in the Stable channel.
* STABLE: Every few months upgrade cadence; Production users who need stability above all else, and for whom frequent upgrades are too risky.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#channel ContainerCluster#channel}
  */
  readonly channel: string;
}

export function containerClusterReleaseChannelToTerraform(struct?: ContainerClusterReleaseChannelOutputReference | ContainerClusterReleaseChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
  }
}

export class ContainerClusterReleaseChannelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterReleaseChannel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterReleaseChannel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channel = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channel = value.channel;
    }
  }

  // channel - computed: false, optional: false, required: true
  private _channel?: string; 
  public get channel() {
    return this.getStringAttribute('channel');
  }
  public set channel(value: string) {
    this._channel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelInput() {
    return this._channel;
  }
}
export interface ContainerClusterResourceUsageExportConfigBigqueryDestination {
  /**
  * The ID of a BigQuery Dataset.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#dataset_id ContainerCluster#dataset_id}
  */
  readonly datasetId: string;
}

export function containerClusterResourceUsageExportConfigBigqueryDestinationToTerraform(struct?: ContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference | ContainerClusterResourceUsageExportConfigBigqueryDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
  }
}

export class ContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterResourceUsageExportConfigBigqueryDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterResourceUsageExportConfigBigqueryDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }
}
export interface ContainerClusterResourceUsageExportConfig {
  /**
  * Whether to enable network egress metering for this cluster. If enabled, a daemonset will be created in the cluster to meter network egress traffic.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enable_network_egress_metering ContainerCluster#enable_network_egress_metering}
  */
  readonly enableNetworkEgressMetering?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable resource consumption metering on this cluster. When enabled, a table will be created in the resource export BigQuery dataset to store resource consumption data. The resulting table can be joined with the resource usage table or with BigQuery billing export. Defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enable_resource_consumption_metering ContainerCluster#enable_resource_consumption_metering}
  */
  readonly enableResourceConsumptionMetering?: boolean | cdktf.IResolvable;
  /**
  * bigquery_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#bigquery_destination ContainerCluster#bigquery_destination}
  */
  readonly bigqueryDestination: ContainerClusterResourceUsageExportConfigBigqueryDestination;
}

export function containerClusterResourceUsageExportConfigToTerraform(struct?: ContainerClusterResourceUsageExportConfigOutputReference | ContainerClusterResourceUsageExportConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_network_egress_metering: cdktf.booleanToTerraform(struct!.enableNetworkEgressMetering),
    enable_resource_consumption_metering: cdktf.booleanToTerraform(struct!.enableResourceConsumptionMetering),
    bigquery_destination: containerClusterResourceUsageExportConfigBigqueryDestinationToTerraform(struct!.bigqueryDestination),
  }
}

export class ContainerClusterResourceUsageExportConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterResourceUsageExportConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableNetworkEgressMetering !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNetworkEgressMetering = this._enableNetworkEgressMetering;
    }
    if (this._enableResourceConsumptionMetering !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableResourceConsumptionMetering = this._enableResourceConsumptionMetering;
    }
    if (this._bigqueryDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDestination = this._bigqueryDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterResourceUsageExportConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableNetworkEgressMetering = undefined;
      this._enableResourceConsumptionMetering = undefined;
      this._bigqueryDestination.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableNetworkEgressMetering = value.enableNetworkEgressMetering;
      this._enableResourceConsumptionMetering = value.enableResourceConsumptionMetering;
      this._bigqueryDestination.internalValue = value.bigqueryDestination;
    }
  }

  // enable_network_egress_metering - computed: false, optional: true, required: false
  private _enableNetworkEgressMetering?: boolean | cdktf.IResolvable; 
  public get enableNetworkEgressMetering() {
    return this.getBooleanAttribute('enable_network_egress_metering');
  }
  public set enableNetworkEgressMetering(value: boolean | cdktf.IResolvable) {
    this._enableNetworkEgressMetering = value;
  }
  public resetEnableNetworkEgressMetering() {
    this._enableNetworkEgressMetering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNetworkEgressMeteringInput() {
    return this._enableNetworkEgressMetering;
  }

  // enable_resource_consumption_metering - computed: false, optional: true, required: false
  private _enableResourceConsumptionMetering?: boolean | cdktf.IResolvable; 
  public get enableResourceConsumptionMetering() {
    return this.getBooleanAttribute('enable_resource_consumption_metering');
  }
  public set enableResourceConsumptionMetering(value: boolean | cdktf.IResolvable) {
    this._enableResourceConsumptionMetering = value;
  }
  public resetEnableResourceConsumptionMetering() {
    this._enableResourceConsumptionMetering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableResourceConsumptionMeteringInput() {
    return this._enableResourceConsumptionMetering;
  }

  // bigquery_destination - computed: false, optional: false, required: true
  private _bigqueryDestination = new ContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference(this, "bigquery_destination");
  public get bigqueryDestination() {
    return this._bigqueryDestination;
  }
  public putBigqueryDestination(value: ContainerClusterResourceUsageExportConfigBigqueryDestination) {
    this._bigqueryDestination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDestinationInput() {
    return this._bigqueryDestination.internalValue;
  }
}
export interface ContainerClusterServiceExternalIpsConfig {
  /**
  * When enabled, services with exterenal ips specified will be allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterServiceExternalIpsConfigToTerraform(struct?: ContainerClusterServiceExternalIpsConfigOutputReference | ContainerClusterServiceExternalIpsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class ContainerClusterServiceExternalIpsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterServiceExternalIpsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterServiceExternalIpsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ContainerClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#create ContainerCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#delete ContainerCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#read ContainerCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#update ContainerCluster#update}
  */
  readonly update?: string;
}

export function containerClusterTimeoutsToTerraform(struct?: ContainerClusterTimeoutsOutputReference | ContainerClusterTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ContainerClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
export interface ContainerClusterVerticalPodAutoscaling {
  /**
  * Enables vertical pod autoscaling.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterVerticalPodAutoscalingToTerraform(struct?: ContainerClusterVerticalPodAutoscalingOutputReference | ContainerClusterVerticalPodAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class ContainerClusterVerticalPodAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterVerticalPodAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterVerticalPodAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ContainerClusterWorkloadIdentityConfig {
  /**
  * The workload pool to attach all Kubernetes service accounts to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster#workload_pool ContainerCluster#workload_pool}
  */
  readonly workloadPool?: string;
}

export function containerClusterWorkloadIdentityConfigToTerraform(struct?: ContainerClusterWorkloadIdentityConfigOutputReference | ContainerClusterWorkloadIdentityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workload_pool: cdktf.stringToTerraform(struct!.workloadPool),
  }
}

export class ContainerClusterWorkloadIdentityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterWorkloadIdentityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workloadPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadPool = this._workloadPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterWorkloadIdentityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._workloadPool = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._workloadPool = value.workloadPool;
    }
  }

  // workload_pool - computed: false, optional: true, required: false
  private _workloadPool?: string; 
  public get workloadPool() {
    return this.getStringAttribute('workload_pool');
  }
  public set workloadPool(value: string) {
    this._workloadPool = value;
  }
  public resetWorkloadPool() {
    this._workloadPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadPoolInput() {
    return this._workloadPool;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/container_cluster google_container_cluster}
*/
export class ContainerCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_container_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/container_cluster google_container_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
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
    this._clusterIpv4Cidr = config.clusterIpv4Cidr;
    this._datapathProvider = config.datapathProvider;
    this._defaultMaxPodsPerNode = config.defaultMaxPodsPerNode;
    this._description = config.description;
    this._enableAutopilot = config.enableAutopilot;
    this._enableBinaryAuthorization = config.enableBinaryAuthorization;
    this._enableIntranodeVisibility = config.enableIntranodeVisibility;
    this._enableKubernetesAlpha = config.enableKubernetesAlpha;
    this._enableLegacyAbac = config.enableLegacyAbac;
    this._enableShieldedNodes = config.enableShieldedNodes;
    this._enableTpu = config.enableTpu;
    this._id = config.id;
    this._initialNodeCount = config.initialNodeCount;
    this._location = config.location;
    this._loggingService = config.loggingService;
    this._minMasterVersion = config.minMasterVersion;
    this._monitoringService = config.monitoringService;
    this._name = config.name;
    this._network = config.network;
    this._networkingMode = config.networkingMode;
    this._nodeLocations = config.nodeLocations;
    this._nodeVersion = config.nodeVersion;
    this._privateIpv6GoogleAccess = config.privateIpv6GoogleAccess;
    this._project = config.project;
    this._removeDefaultNodePool = config.removeDefaultNodePool;
    this._resourceLabels = config.resourceLabels;
    this._subnetwork = config.subnetwork;
    this._addonsConfig.internalValue = config.addonsConfig;
    this._authenticatorGroupsConfig.internalValue = config.authenticatorGroupsConfig;
    this._binaryAuthorization.internalValue = config.binaryAuthorization;
    this._clusterAutoscaling.internalValue = config.clusterAutoscaling;
    this._confidentialNodes.internalValue = config.confidentialNodes;
    this._databaseEncryption.internalValue = config.databaseEncryption;
    this._defaultSnatStatus.internalValue = config.defaultSnatStatus;
    this._dnsConfig.internalValue = config.dnsConfig;
    this._ipAllocationPolicy.internalValue = config.ipAllocationPolicy;
    this._loggingConfig.internalValue = config.loggingConfig;
    this._maintenancePolicy.internalValue = config.maintenancePolicy;
    this._masterAuth.internalValue = config.masterAuth;
    this._masterAuthorizedNetworksConfig.internalValue = config.masterAuthorizedNetworksConfig;
    this._meshCertificates.internalValue = config.meshCertificates;
    this._monitoringConfig.internalValue = config.monitoringConfig;
    this._networkPolicy.internalValue = config.networkPolicy;
    this._nodeConfig.internalValue = config.nodeConfig;
    this._nodePool.internalValue = config.nodePool;
    this._notificationConfig.internalValue = config.notificationConfig;
    this._privateClusterConfig.internalValue = config.privateClusterConfig;
    this._releaseChannel.internalValue = config.releaseChannel;
    this._resourceUsageExportConfig.internalValue = config.resourceUsageExportConfig;
    this._serviceExternalIpsConfig.internalValue = config.serviceExternalIpsConfig;
    this._timeouts.internalValue = config.timeouts;
    this._verticalPodAutoscaling.internalValue = config.verticalPodAutoscaling;
    this._workloadIdentityConfig.internalValue = config.workloadIdentityConfig;
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
    return this._clusterIpv4Cidr;
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
    return this._datapathProvider;
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
    return this._defaultMaxPodsPerNode;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enable_autopilot - computed: false, optional: true, required: false
  private _enableAutopilot?: boolean | cdktf.IResolvable; 
  public get enableAutopilot() {
    return this.getBooleanAttribute('enable_autopilot');
  }
  public set enableAutopilot(value: boolean | cdktf.IResolvable) {
    this._enableAutopilot = value;
  }
  public resetEnableAutopilot() {
    this._enableAutopilot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutopilotInput() {
    return this._enableAutopilot;
  }

  // enable_binary_authorization - computed: false, optional: true, required: false
  private _enableBinaryAuthorization?: boolean | cdktf.IResolvable; 
  public get enableBinaryAuthorization() {
    return this.getBooleanAttribute('enable_binary_authorization');
  }
  public set enableBinaryAuthorization(value: boolean | cdktf.IResolvable) {
    this._enableBinaryAuthorization = value;
  }
  public resetEnableBinaryAuthorization() {
    this._enableBinaryAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBinaryAuthorizationInput() {
    return this._enableBinaryAuthorization;
  }

  // enable_intranode_visibility - computed: true, optional: true, required: false
  private _enableIntranodeVisibility?: boolean | cdktf.IResolvable; 
  public get enableIntranodeVisibility() {
    return this.getBooleanAttribute('enable_intranode_visibility');
  }
  public set enableIntranodeVisibility(value: boolean | cdktf.IResolvable) {
    this._enableIntranodeVisibility = value;
  }
  public resetEnableIntranodeVisibility() {
    this._enableIntranodeVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntranodeVisibilityInput() {
    return this._enableIntranodeVisibility;
  }

  // enable_kubernetes_alpha - computed: false, optional: true, required: false
  private _enableKubernetesAlpha?: boolean | cdktf.IResolvable; 
  public get enableKubernetesAlpha() {
    return this.getBooleanAttribute('enable_kubernetes_alpha');
  }
  public set enableKubernetesAlpha(value: boolean | cdktf.IResolvable) {
    this._enableKubernetesAlpha = value;
  }
  public resetEnableKubernetesAlpha() {
    this._enableKubernetesAlpha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableKubernetesAlphaInput() {
    return this._enableKubernetesAlpha;
  }

  // enable_legacy_abac - computed: false, optional: true, required: false
  private _enableLegacyAbac?: boolean | cdktf.IResolvable; 
  public get enableLegacyAbac() {
    return this.getBooleanAttribute('enable_legacy_abac');
  }
  public set enableLegacyAbac(value: boolean | cdktf.IResolvable) {
    this._enableLegacyAbac = value;
  }
  public resetEnableLegacyAbac() {
    this._enableLegacyAbac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLegacyAbacInput() {
    return this._enableLegacyAbac;
  }

  // enable_shielded_nodes - computed: false, optional: true, required: false
  private _enableShieldedNodes?: boolean | cdktf.IResolvable; 
  public get enableShieldedNodes() {
    return this.getBooleanAttribute('enable_shielded_nodes');
  }
  public set enableShieldedNodes(value: boolean | cdktf.IResolvable) {
    this._enableShieldedNodes = value;
  }
  public resetEnableShieldedNodes() {
    this._enableShieldedNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableShieldedNodesInput() {
    return this._enableShieldedNodes;
  }

  // enable_tpu - computed: false, optional: true, required: false
  private _enableTpu?: boolean | cdktf.IResolvable; 
  public get enableTpu() {
    return this.getBooleanAttribute('enable_tpu');
  }
  public set enableTpu(value: boolean | cdktf.IResolvable) {
    this._enableTpu = value;
  }
  public resetEnableTpu() {
    this._enableTpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTpuInput() {
    return this._enableTpu;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
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

  // initial_node_count - computed: false, optional: true, required: false
  private _initialNodeCount?: number; 
  public get initialNodeCount() {
    return this.getNumberAttribute('initial_node_count');
  }
  public set initialNodeCount(value: number) {
    this._initialNodeCount = value;
  }
  public resetInitialNodeCount() {
    this._initialNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialNodeCountInput() {
    return this._initialNodeCount;
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
    return this._location;
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
    return this._loggingService;
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
  public set minMasterVersion(value: string) {
    this._minMasterVersion = value;
  }
  public resetMinMasterVersion() {
    this._minMasterVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMasterVersionInput() {
    return this._minMasterVersion;
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
    return this._monitoringService;
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

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // networking_mode - computed: true, optional: true, required: false
  private _networkingMode?: string; 
  public get networkingMode() {
    return this.getStringAttribute('networking_mode');
  }
  public set networkingMode(value: string) {
    this._networkingMode = value;
  }
  public resetNetworkingMode() {
    this._networkingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingModeInput() {
    return this._networkingMode;
  }

  // node_locations - computed: true, optional: true, required: false
  private _nodeLocations?: string[]; 
  public get nodeLocations() {
    return cdktf.Fn.tolist(this.getListAttribute('node_locations'));
  }
  public set nodeLocations(value: string[]) {
    this._nodeLocations = value;
  }
  public resetNodeLocations() {
    this._nodeLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLocationsInput() {
    return this._nodeLocations;
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
    return this._nodeVersion;
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // private_ipv6_google_access - computed: true, optional: true, required: false
  private _privateIpv6GoogleAccess?: string; 
  public get privateIpv6GoogleAccess() {
    return this.getStringAttribute('private_ipv6_google_access');
  }
  public set privateIpv6GoogleAccess(value: string) {
    this._privateIpv6GoogleAccess = value;
  }
  public resetPrivateIpv6GoogleAccess() {
    this._privateIpv6GoogleAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpv6GoogleAccessInput() {
    return this._privateIpv6GoogleAccess;
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

  // remove_default_node_pool - computed: false, optional: true, required: false
  private _removeDefaultNodePool?: boolean | cdktf.IResolvable; 
  public get removeDefaultNodePool() {
    return this.getBooleanAttribute('remove_default_node_pool');
  }
  public set removeDefaultNodePool(value: boolean | cdktf.IResolvable) {
    this._removeDefaultNodePool = value;
  }
  public resetRemoveDefaultNodePool() {
    this._removeDefaultNodePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeDefaultNodePoolInput() {
    return this._removeDefaultNodePool;
  }

  // resource_labels - computed: false, optional: true, required: false
  private _resourceLabels?: { [key: string]: string }; 
  public get resourceLabels() {
    return this.getStringMapAttribute('resource_labels');
  }
  public set resourceLabels(value: { [key: string]: string }) {
    this._resourceLabels = value;
  }
  public resetResourceLabels() {
    this._resourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelsInput() {
    return this._resourceLabels;
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
    return this._subnetwork;
  }

  // tpu_ipv4_cidr_block - computed: true, optional: false, required: false
  public get tpuIpv4CidrBlock() {
    return this.getStringAttribute('tpu_ipv4_cidr_block');
  }

  // addons_config - computed: false, optional: true, required: false
  private _addonsConfig = new ContainerClusterAddonsConfigOutputReference(this, "addons_config");
  public get addonsConfig() {
    return this._addonsConfig;
  }
  public putAddonsConfig(value: ContainerClusterAddonsConfig) {
    this._addonsConfig.internalValue = value;
  }
  public resetAddonsConfig() {
    this._addonsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsConfigInput() {
    return this._addonsConfig.internalValue;
  }

  // authenticator_groups_config - computed: false, optional: true, required: false
  private _authenticatorGroupsConfig = new ContainerClusterAuthenticatorGroupsConfigOutputReference(this, "authenticator_groups_config");
  public get authenticatorGroupsConfig() {
    return this._authenticatorGroupsConfig;
  }
  public putAuthenticatorGroupsConfig(value: ContainerClusterAuthenticatorGroupsConfig) {
    this._authenticatorGroupsConfig.internalValue = value;
  }
  public resetAuthenticatorGroupsConfig() {
    this._authenticatorGroupsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorGroupsConfigInput() {
    return this._authenticatorGroupsConfig.internalValue;
  }

  // binary_authorization - computed: false, optional: true, required: false
  private _binaryAuthorization = new ContainerClusterBinaryAuthorizationOutputReference(this, "binary_authorization");
  public get binaryAuthorization() {
    return this._binaryAuthorization;
  }
  public putBinaryAuthorization(value: ContainerClusterBinaryAuthorization) {
    this._binaryAuthorization.internalValue = value;
  }
  public resetBinaryAuthorization() {
    this._binaryAuthorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAuthorizationInput() {
    return this._binaryAuthorization.internalValue;
  }

  // cluster_autoscaling - computed: false, optional: true, required: false
  private _clusterAutoscaling = new ContainerClusterClusterAutoscalingOutputReference(this, "cluster_autoscaling");
  public get clusterAutoscaling() {
    return this._clusterAutoscaling;
  }
  public putClusterAutoscaling(value: ContainerClusterClusterAutoscaling) {
    this._clusterAutoscaling.internalValue = value;
  }
  public resetClusterAutoscaling() {
    this._clusterAutoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterAutoscalingInput() {
    return this._clusterAutoscaling.internalValue;
  }

  // confidential_nodes - computed: false, optional: true, required: false
  private _confidentialNodes = new ContainerClusterConfidentialNodesOutputReference(this, "confidential_nodes");
  public get confidentialNodes() {
    return this._confidentialNodes;
  }
  public putConfidentialNodes(value: ContainerClusterConfidentialNodes) {
    this._confidentialNodes.internalValue = value;
  }
  public resetConfidentialNodes() {
    this._confidentialNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialNodesInput() {
    return this._confidentialNodes.internalValue;
  }

  // database_encryption - computed: false, optional: true, required: false
  private _databaseEncryption = new ContainerClusterDatabaseEncryptionOutputReference(this, "database_encryption");
  public get databaseEncryption() {
    return this._databaseEncryption;
  }
  public putDatabaseEncryption(value: ContainerClusterDatabaseEncryption) {
    this._databaseEncryption.internalValue = value;
  }
  public resetDatabaseEncryption() {
    this._databaseEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseEncryptionInput() {
    return this._databaseEncryption.internalValue;
  }

  // default_snat_status - computed: false, optional: true, required: false
  private _defaultSnatStatus = new ContainerClusterDefaultSnatStatusOutputReference(this, "default_snat_status");
  public get defaultSnatStatus() {
    return this._defaultSnatStatus;
  }
  public putDefaultSnatStatus(value: ContainerClusterDefaultSnatStatus) {
    this._defaultSnatStatus.internalValue = value;
  }
  public resetDefaultSnatStatus() {
    this._defaultSnatStatus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSnatStatusInput() {
    return this._defaultSnatStatus.internalValue;
  }

  // dns_config - computed: false, optional: true, required: false
  private _dnsConfig = new ContainerClusterDnsConfigOutputReference(this, "dns_config");
  public get dnsConfig() {
    return this._dnsConfig;
  }
  public putDnsConfig(value: ContainerClusterDnsConfig) {
    this._dnsConfig.internalValue = value;
  }
  public resetDnsConfig() {
    this._dnsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsConfigInput() {
    return this._dnsConfig.internalValue;
  }

  // ip_allocation_policy - computed: false, optional: true, required: false
  private _ipAllocationPolicy = new ContainerClusterIpAllocationPolicyOutputReference(this, "ip_allocation_policy");
  public get ipAllocationPolicy() {
    return this._ipAllocationPolicy;
  }
  public putIpAllocationPolicy(value: ContainerClusterIpAllocationPolicy) {
    this._ipAllocationPolicy.internalValue = value;
  }
  public resetIpAllocationPolicy() {
    this._ipAllocationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllocationPolicyInput() {
    return this._ipAllocationPolicy.internalValue;
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new ContainerClusterLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: ContainerClusterLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }

  // maintenance_policy - computed: false, optional: true, required: false
  private _maintenancePolicy = new ContainerClusterMaintenancePolicyOutputReference(this, "maintenance_policy");
  public get maintenancePolicy() {
    return this._maintenancePolicy;
  }
  public putMaintenancePolicy(value: ContainerClusterMaintenancePolicy) {
    this._maintenancePolicy.internalValue = value;
  }
  public resetMaintenancePolicy() {
    this._maintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePolicyInput() {
    return this._maintenancePolicy.internalValue;
  }

  // master_auth - computed: false, optional: true, required: false
  private _masterAuth = new ContainerClusterMasterAuthOutputReference(this, "master_auth");
  public get masterAuth() {
    return this._masterAuth;
  }
  public putMasterAuth(value: ContainerClusterMasterAuth) {
    this._masterAuth.internalValue = value;
  }
  public resetMasterAuth() {
    this._masterAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterAuthInput() {
    return this._masterAuth.internalValue;
  }

  // master_authorized_networks_config - computed: false, optional: true, required: false
  private _masterAuthorizedNetworksConfig = new ContainerClusterMasterAuthorizedNetworksConfigOutputReference(this, "master_authorized_networks_config");
  public get masterAuthorizedNetworksConfig() {
    return this._masterAuthorizedNetworksConfig;
  }
  public putMasterAuthorizedNetworksConfig(value: ContainerClusterMasterAuthorizedNetworksConfig) {
    this._masterAuthorizedNetworksConfig.internalValue = value;
  }
  public resetMasterAuthorizedNetworksConfig() {
    this._masterAuthorizedNetworksConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterAuthorizedNetworksConfigInput() {
    return this._masterAuthorizedNetworksConfig.internalValue;
  }

  // mesh_certificates - computed: false, optional: true, required: false
  private _meshCertificates = new ContainerClusterMeshCertificatesOutputReference(this, "mesh_certificates");
  public get meshCertificates() {
    return this._meshCertificates;
  }
  public putMeshCertificates(value: ContainerClusterMeshCertificates) {
    this._meshCertificates.internalValue = value;
  }
  public resetMeshCertificates() {
    this._meshCertificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshCertificatesInput() {
    return this._meshCertificates.internalValue;
  }

  // monitoring_config - computed: false, optional: true, required: false
  private _monitoringConfig = new ContainerClusterMonitoringConfigOutputReference(this, "monitoring_config");
  public get monitoringConfig() {
    return this._monitoringConfig;
  }
  public putMonitoringConfig(value: ContainerClusterMonitoringConfig) {
    this._monitoringConfig.internalValue = value;
  }
  public resetMonitoringConfig() {
    this._monitoringConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringConfigInput() {
    return this._monitoringConfig.internalValue;
  }

  // network_policy - computed: false, optional: true, required: false
  private _networkPolicy = new ContainerClusterNetworkPolicyOutputReference(this, "network_policy");
  public get networkPolicy() {
    return this._networkPolicy;
  }
  public putNetworkPolicy(value: ContainerClusterNetworkPolicy) {
    this._networkPolicy.internalValue = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy.internalValue;
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig = new ContainerClusterNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: ContainerClusterNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  public resetNodeConfig() {
    this._nodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // node_pool - computed: false, optional: true, required: false
  private _nodePool = new ContainerClusterNodePoolList(this, "node_pool", false);
  public get nodePool() {
    return this._nodePool;
  }
  public putNodePool(value: ContainerClusterNodePool[] | cdktf.IResolvable) {
    this._nodePool.internalValue = value;
  }
  public resetNodePool() {
    this._nodePool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolInput() {
    return this._nodePool.internalValue;
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig = new ContainerClusterNotificationConfigOutputReference(this, "notification_config");
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public putNotificationConfig(value: ContainerClusterNotificationConfig) {
    this._notificationConfig.internalValue = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig.internalValue;
  }

  // private_cluster_config - computed: false, optional: true, required: false
  private _privateClusterConfig = new ContainerClusterPrivateClusterConfigOutputReference(this, "private_cluster_config");
  public get privateClusterConfig() {
    return this._privateClusterConfig;
  }
  public putPrivateClusterConfig(value: ContainerClusterPrivateClusterConfig) {
    this._privateClusterConfig.internalValue = value;
  }
  public resetPrivateClusterConfig() {
    this._privateClusterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateClusterConfigInput() {
    return this._privateClusterConfig.internalValue;
  }

  // release_channel - computed: false, optional: true, required: false
  private _releaseChannel = new ContainerClusterReleaseChannelOutputReference(this, "release_channel");
  public get releaseChannel() {
    return this._releaseChannel;
  }
  public putReleaseChannel(value: ContainerClusterReleaseChannel) {
    this._releaseChannel.internalValue = value;
  }
  public resetReleaseChannel() {
    this._releaseChannel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseChannelInput() {
    return this._releaseChannel.internalValue;
  }

  // resource_usage_export_config - computed: false, optional: true, required: false
  private _resourceUsageExportConfig = new ContainerClusterResourceUsageExportConfigOutputReference(this, "resource_usage_export_config");
  public get resourceUsageExportConfig() {
    return this._resourceUsageExportConfig;
  }
  public putResourceUsageExportConfig(value: ContainerClusterResourceUsageExportConfig) {
    this._resourceUsageExportConfig.internalValue = value;
  }
  public resetResourceUsageExportConfig() {
    this._resourceUsageExportConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUsageExportConfigInput() {
    return this._resourceUsageExportConfig.internalValue;
  }

  // service_external_ips_config - computed: false, optional: true, required: false
  private _serviceExternalIpsConfig = new ContainerClusterServiceExternalIpsConfigOutputReference(this, "service_external_ips_config");
  public get serviceExternalIpsConfig() {
    return this._serviceExternalIpsConfig;
  }
  public putServiceExternalIpsConfig(value: ContainerClusterServiceExternalIpsConfig) {
    this._serviceExternalIpsConfig.internalValue = value;
  }
  public resetServiceExternalIpsConfig() {
    this._serviceExternalIpsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceExternalIpsConfigInput() {
    return this._serviceExternalIpsConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vertical_pod_autoscaling - computed: false, optional: true, required: false
  private _verticalPodAutoscaling = new ContainerClusterVerticalPodAutoscalingOutputReference(this, "vertical_pod_autoscaling");
  public get verticalPodAutoscaling() {
    return this._verticalPodAutoscaling;
  }
  public putVerticalPodAutoscaling(value: ContainerClusterVerticalPodAutoscaling) {
    this._verticalPodAutoscaling.internalValue = value;
  }
  public resetVerticalPodAutoscaling() {
    this._verticalPodAutoscaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verticalPodAutoscalingInput() {
    return this._verticalPodAutoscaling.internalValue;
  }

  // workload_identity_config - computed: false, optional: true, required: false
  private _workloadIdentityConfig = new ContainerClusterWorkloadIdentityConfigOutputReference(this, "workload_identity_config");
  public get workloadIdentityConfig() {
    return this._workloadIdentityConfig;
  }
  public putWorkloadIdentityConfig(value: ContainerClusterWorkloadIdentityConfig) {
    this._workloadIdentityConfig.internalValue = value;
  }
  public resetWorkloadIdentityConfig() {
    this._workloadIdentityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadIdentityConfigInput() {
    return this._workloadIdentityConfig.internalValue;
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
      enable_autopilot: cdktf.booleanToTerraform(this._enableAutopilot),
      enable_binary_authorization: cdktf.booleanToTerraform(this._enableBinaryAuthorization),
      enable_intranode_visibility: cdktf.booleanToTerraform(this._enableIntranodeVisibility),
      enable_kubernetes_alpha: cdktf.booleanToTerraform(this._enableKubernetesAlpha),
      enable_legacy_abac: cdktf.booleanToTerraform(this._enableLegacyAbac),
      enable_shielded_nodes: cdktf.booleanToTerraform(this._enableShieldedNodes),
      enable_tpu: cdktf.booleanToTerraform(this._enableTpu),
      id: cdktf.stringToTerraform(this._id),
      initial_node_count: cdktf.numberToTerraform(this._initialNodeCount),
      location: cdktf.stringToTerraform(this._location),
      logging_service: cdktf.stringToTerraform(this._loggingService),
      min_master_version: cdktf.stringToTerraform(this._minMasterVersion),
      monitoring_service: cdktf.stringToTerraform(this._monitoringService),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      networking_mode: cdktf.stringToTerraform(this._networkingMode),
      node_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nodeLocations),
      node_version: cdktf.stringToTerraform(this._nodeVersion),
      private_ipv6_google_access: cdktf.stringToTerraform(this._privateIpv6GoogleAccess),
      project: cdktf.stringToTerraform(this._project),
      remove_default_node_pool: cdktf.booleanToTerraform(this._removeDefaultNodePool),
      resource_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._resourceLabels),
      subnetwork: cdktf.stringToTerraform(this._subnetwork),
      addons_config: containerClusterAddonsConfigToTerraform(this._addonsConfig.internalValue),
      authenticator_groups_config: containerClusterAuthenticatorGroupsConfigToTerraform(this._authenticatorGroupsConfig.internalValue),
      binary_authorization: containerClusterBinaryAuthorizationToTerraform(this._binaryAuthorization.internalValue),
      cluster_autoscaling: containerClusterClusterAutoscalingToTerraform(this._clusterAutoscaling.internalValue),
      confidential_nodes: containerClusterConfidentialNodesToTerraform(this._confidentialNodes.internalValue),
      database_encryption: containerClusterDatabaseEncryptionToTerraform(this._databaseEncryption.internalValue),
      default_snat_status: containerClusterDefaultSnatStatusToTerraform(this._defaultSnatStatus.internalValue),
      dns_config: containerClusterDnsConfigToTerraform(this._dnsConfig.internalValue),
      ip_allocation_policy: containerClusterIpAllocationPolicyToTerraform(this._ipAllocationPolicy.internalValue),
      logging_config: containerClusterLoggingConfigToTerraform(this._loggingConfig.internalValue),
      maintenance_policy: containerClusterMaintenancePolicyToTerraform(this._maintenancePolicy.internalValue),
      master_auth: containerClusterMasterAuthToTerraform(this._masterAuth.internalValue),
      master_authorized_networks_config: containerClusterMasterAuthorizedNetworksConfigToTerraform(this._masterAuthorizedNetworksConfig.internalValue),
      mesh_certificates: containerClusterMeshCertificatesToTerraform(this._meshCertificates.internalValue),
      monitoring_config: containerClusterMonitoringConfigToTerraform(this._monitoringConfig.internalValue),
      network_policy: containerClusterNetworkPolicyToTerraform(this._networkPolicy.internalValue),
      node_config: containerClusterNodeConfigToTerraform(this._nodeConfig.internalValue),
      node_pool: cdktf.listMapper(containerClusterNodePoolToTerraform, true)(this._nodePool.internalValue),
      notification_config: containerClusterNotificationConfigToTerraform(this._notificationConfig.internalValue),
      private_cluster_config: containerClusterPrivateClusterConfigToTerraform(this._privateClusterConfig.internalValue),
      release_channel: containerClusterReleaseChannelToTerraform(this._releaseChannel.internalValue),
      resource_usage_export_config: containerClusterResourceUsageExportConfigToTerraform(this._resourceUsageExportConfig.internalValue),
      service_external_ips_config: containerClusterServiceExternalIpsConfigToTerraform(this._serviceExternalIpsConfig.internalValue),
      timeouts: containerClusterTimeoutsToTerraform(this._timeouts.internalValue),
      vertical_pod_autoscaling: containerClusterVerticalPodAutoscalingToTerraform(this._verticalPodAutoscaling.internalValue),
      workload_identity_config: containerClusterWorkloadIdentityConfigToTerraform(this._workloadIdentityConfig.internalValue),
    };
  }
}
