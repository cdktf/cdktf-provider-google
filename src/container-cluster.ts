// https://www.terraform.io/docs/providers/google/r/container_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The IP address range of the Kubernetes pods in this cluster in CIDR notation (e.g. 10.96.0.0/14). Leave blank to have one automatically chosen or specify a /14 block in 10.0.0.0/8. This field will only work for routes-based clusters, where ip_allocation_policy is not defined.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#cluster_ipv4_cidr ContainerCluster#cluster_ipv4_cidr}
  */
  readonly clusterIpv4Cidr?: string;
  /**
  * The desired datapath provider for this cluster. By default, uses the IPTables-based kube-proxy implementation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#datapath_provider ContainerCluster#datapath_provider}
  */
  readonly datapathProvider?: string;
  /**
  * The default maximum number of pods per node in this cluster. This doesn't work on "routes-based" clusters, clusters that don't have IP Aliasing enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#default_max_pods_per_node ContainerCluster#default_max_pods_per_node}
  */
  readonly defaultMaxPodsPerNode?: number;
  /**
  *  Description of the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#description ContainerCluster#description}
  */
  readonly description?: string;
  /**
  * Enable Autopilot for this cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#enable_autopilot ContainerCluster#enable_autopilot}
  */
  readonly enableAutopilot?: boolean | cdktf.IResolvable;
  /**
  * Enable Binary Authorization for this cluster. If enabled, all container images will be validated by Google Binary Authorization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#enable_binary_authorization ContainerCluster#enable_binary_authorization}
  */
  readonly enableBinaryAuthorization?: boolean | cdktf.IResolvable;
  /**
  * Whether Intra-node visibility is enabled for this cluster. This makes same node pod to pod traffic visible for VPC network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#enable_intranode_visibility ContainerCluster#enable_intranode_visibility}
  */
  readonly enableIntranodeVisibility?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable Kubernetes Alpha features for this cluster. Note that when this option is enabled, the cluster cannot be upgraded and will be automatically deleted after 30 days.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#enable_kubernetes_alpha ContainerCluster#enable_kubernetes_alpha}
  */
  readonly enableKubernetesAlpha?: boolean | cdktf.IResolvable;
  /**
  * Whether the ABAC authorizer is enabled for this cluster. When enabled, identities in the system, including service accounts, nodes, and controllers, will have statically granted permissions beyond those provided by the RBAC configuration or IAM. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#enable_legacy_abac ContainerCluster#enable_legacy_abac}
  */
  readonly enableLegacyAbac?: boolean | cdktf.IResolvable;
  /**
  * Enable Shielded Nodes features on all nodes in this cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#enable_shielded_nodes ContainerCluster#enable_shielded_nodes}
  */
  readonly enableShieldedNodes?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable Cloud TPU resources in this cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#enable_tpu ContainerCluster#enable_tpu}
  */
  readonly enableTpu?: boolean | cdktf.IResolvable;
  /**
  * The number of nodes to create in this cluster's default node pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Must be set if node_pool is not set. If you're using google_container_node_pool objects with no default node pool, you'll need to set this to a value of at least 1, alongside setting remove_default_node_pool to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#initial_node_count ContainerCluster#initial_node_count}
  */
  readonly initialNodeCount?: number;
  /**
  * The location (region or zone) in which the cluster master will be created, as well as the default node location. If you specify a zone (such as us-central1-a), the cluster will be a zonal cluster with a single cluster master. If you specify a region (such as us-west1), the cluster will be a regional cluster with multiple masters spread across zones in the region, and with default node locations in those zones as well.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#location ContainerCluster#location}
  */
  readonly location?: string;
  /**
  * The logging service that the cluster should write logs to. Available options include logging.googleapis.com(Legacy Stackdriver), logging.googleapis.com/kubernetes(Stackdriver Kubernetes Engine Logging), and none. Defaults to logging.googleapis.com/kubernetes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#logging_service ContainerCluster#logging_service}
  */
  readonly loggingService?: string;
  /**
  * The minimum version of the master. GKE will auto-update the master to new versions, so this does not guarantee the current master version--use the read-only master_version field to obtain that. If unset, the cluster's version will be set by GKE to the version of the most recent official release (which is not necessarily the latest version).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#min_master_version ContainerCluster#min_master_version}
  */
  readonly minMasterVersion?: string;
  /**
  * The monitoring service that the cluster should write metrics to. Automatically send metrics from pods in the cluster to the Google Cloud Monitoring API. VM metrics will be collected by Google Compute Engine regardless of this setting Available options include monitoring.googleapis.com(Legacy Stackdriver), monitoring.googleapis.com/kubernetes(Stackdriver Kubernetes Engine Monitoring), and none. Defaults to monitoring.googleapis.com/kubernetes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#monitoring_service ContainerCluster#monitoring_service}
  */
  readonly monitoringService?: string;
  /**
  * The name of the cluster, unique within the project and location.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#name ContainerCluster#name}
  */
  readonly name: string;
  /**
  * The name or self_link of the Google Compute Engine network to which the cluster is connected. For Shared VPC, set this to the self link of the shared network.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#network ContainerCluster#network}
  */
  readonly network?: string;
  /**
  * Determines whether alias IPs or routes will be used for pod IPs in the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#networking_mode ContainerCluster#networking_mode}
  */
  readonly networkingMode?: string;
  /**
  * The list of zones in which the cluster's nodes are located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If this is specified for a zonal cluster, omit the cluster's zone.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#node_locations ContainerCluster#node_locations}
  */
  readonly nodeLocations?: string[];
  /**
  * The Kubernetes version on the nodes. Must either be unset or set to the same value as min_master_version on create. Defaults to the default version set by GKE which is not necessarily the latest version. This only affects nodes in the default node pool. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way. To update nodes in other node pools, use the version attribute on the node pool.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#node_version ContainerCluster#node_version}
  */
  readonly nodeVersion?: string;
  /**
  * The desired state of IPv6 connectivity to Google Services. By default, no private IPv6 access to or from Google Services (all access will be via IPv4).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#private_ipv6_google_access ContainerCluster#private_ipv6_google_access}
  */
  readonly privateIpv6GoogleAccess?: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#project ContainerCluster#project}
  */
  readonly project?: string;
  /**
  * If true, deletes the default node pool upon cluster creation. If you're using google_container_node_pool resources with no default node pool, this should be set to true, alongside setting initial_node_count to at least 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#remove_default_node_pool ContainerCluster#remove_default_node_pool}
  */
  readonly removeDefaultNodePool?: boolean | cdktf.IResolvable;
  /**
  * The GCE resource labels (a map of key/value pairs) to be applied to the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#resource_labels ContainerCluster#resource_labels}
  */
  readonly resourceLabels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The name or self_link of the Google Compute Engine subnetwork in which the cluster's instances are launched.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#subnetwork ContainerCluster#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * addons_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#addons_config ContainerCluster#addons_config}
  */
  readonly addonsConfig?: ContainerClusterAddonsConfig;
  /**
  * authenticator_groups_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#authenticator_groups_config ContainerCluster#authenticator_groups_config}
  */
  readonly authenticatorGroupsConfig?: ContainerClusterAuthenticatorGroupsConfig;
  /**
  * cluster_autoscaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#cluster_autoscaling ContainerCluster#cluster_autoscaling}
  */
  readonly clusterAutoscaling?: ContainerClusterClusterAutoscaling;
  /**
  * database_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#database_encryption ContainerCluster#database_encryption}
  */
  readonly databaseEncryption?: ContainerClusterDatabaseEncryption;
  /**
  * default_snat_status block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#default_snat_status ContainerCluster#default_snat_status}
  */
  readonly defaultSnatStatus?: ContainerClusterDefaultSnatStatus;
  /**
  * ip_allocation_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#ip_allocation_policy ContainerCluster#ip_allocation_policy}
  */
  readonly ipAllocationPolicy?: ContainerClusterIpAllocationPolicy;
  /**
  * logging_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#logging_config ContainerCluster#logging_config}
  */
  readonly loggingConfig?: ContainerClusterLoggingConfig;
  /**
  * maintenance_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#maintenance_policy ContainerCluster#maintenance_policy}
  */
  readonly maintenancePolicy?: ContainerClusterMaintenancePolicy;
  /**
  * master_auth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#master_auth ContainerCluster#master_auth}
  */
  readonly masterAuth?: ContainerClusterMasterAuth;
  /**
  * master_authorized_networks_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#master_authorized_networks_config ContainerCluster#master_authorized_networks_config}
  */
  readonly masterAuthorizedNetworksConfig?: ContainerClusterMasterAuthorizedNetworksConfig;
  /**
  * monitoring_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#monitoring_config ContainerCluster#monitoring_config}
  */
  readonly monitoringConfig?: ContainerClusterMonitoringConfig;
  /**
  * network_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#network_policy ContainerCluster#network_policy}
  */
  readonly networkPolicy?: ContainerClusterNetworkPolicy;
  /**
  * node_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#node_config ContainerCluster#node_config}
  */
  readonly nodeConfig?: ContainerClusterNodeConfig;
  /**
  * node_pool block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#node_pool ContainerCluster#node_pool}
  */
  readonly nodePool?: ContainerClusterNodePool[];
  /**
  * pod_security_policy_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#pod_security_policy_config ContainerCluster#pod_security_policy_config}
  */
  readonly podSecurityPolicyConfig?: ContainerClusterPodSecurityPolicyConfig;
  /**
  * private_cluster_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#private_cluster_config ContainerCluster#private_cluster_config}
  */
  readonly privateClusterConfig?: ContainerClusterPrivateClusterConfig;
  /**
  * release_channel block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#release_channel ContainerCluster#release_channel}
  */
  readonly releaseChannel?: ContainerClusterReleaseChannel;
  /**
  * resource_usage_export_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#resource_usage_export_config ContainerCluster#resource_usage_export_config}
  */
  readonly resourceUsageExportConfig?: ContainerClusterResourceUsageExportConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#timeouts ContainerCluster#timeouts}
  */
  readonly timeouts?: ContainerClusterTimeouts;
  /**
  * vertical_pod_autoscaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#vertical_pod_autoscaling ContainerCluster#vertical_pod_autoscaling}
  */
  readonly verticalPodAutoscaling?: ContainerClusterVerticalPodAutoscaling;
  /**
  * workload_identity_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#workload_identity_config ContainerCluster#workload_identity_config}
  */
  readonly workloadIdentityConfig?: ContainerClusterWorkloadIdentityConfig;
}
export interface ContainerClusterAddonsConfigCloudrunConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#disabled ContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#load_balancer_type ContainerCluster#load_balancer_type}
  */
  readonly loadBalancerType?: string;
}

export function containerClusterAddonsConfigCloudrunConfigToTerraform(struct?: ContainerClusterAddonsConfigCloudrunConfigOutputReference | ContainerClusterAddonsConfigCloudrunConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    load_balancer_type: cdktf.stringToTerraform(struct!.loadBalancerType),
  }
}

export class ContainerClusterAddonsConfigCloudrunConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterAddonsConfigCloudrunConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._disabled) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._loadBalancerType) {
      hasAnyValues = true;
      internalValueResult.loadBalancerType = this._loadBalancerType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigCloudrunConfig | undefined) {
    if (value === undefined) {
      this._disabled = undefined;
      this._loadBalancerType = undefined;
    }
    else {
      this._disabled = value.disabled;
      this._loadBalancerType = value.loadBalancerType;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled') as any;
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
export interface ContainerClusterAddonsConfigHorizontalPodAutoscaling {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#disabled ContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
}

export function containerClusterAddonsConfigHorizontalPodAutoscalingToTerraform(struct?: ContainerClusterAddonsConfigHorizontalPodAutoscalingOutputReference | ContainerClusterAddonsConfigHorizontalPodAutoscaling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}

export class ContainerClusterAddonsConfigHorizontalPodAutoscalingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterAddonsConfigHorizontalPodAutoscaling | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._disabled) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigHorizontalPodAutoscaling | undefined) {
    if (value === undefined) {
      this._disabled = undefined;
    }
    else {
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled') as any;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#disabled ContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
}

export function containerClusterAddonsConfigHttpLoadBalancingToTerraform(struct?: ContainerClusterAddonsConfigHttpLoadBalancingOutputReference | ContainerClusterAddonsConfigHttpLoadBalancing): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}

export class ContainerClusterAddonsConfigHttpLoadBalancingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterAddonsConfigHttpLoadBalancing | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._disabled) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigHttpLoadBalancing | undefined) {
    if (value === undefined) {
      this._disabled = undefined;
    }
    else {
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled') as any;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#disabled ContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
}

export function containerClusterAddonsConfigNetworkPolicyConfigToTerraform(struct?: ContainerClusterAddonsConfigNetworkPolicyConfigOutputReference | ContainerClusterAddonsConfigNetworkPolicyConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}

export class ContainerClusterAddonsConfigNetworkPolicyConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterAddonsConfigNetworkPolicyConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._disabled) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigNetworkPolicyConfig | undefined) {
    if (value === undefined) {
      this._disabled = undefined;
    }
    else {
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled') as any;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#cloudrun_config ContainerCluster#cloudrun_config}
  */
  readonly cloudrunConfig?: ContainerClusterAddonsConfigCloudrunConfig;
  /**
  * horizontal_pod_autoscaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#horizontal_pod_autoscaling ContainerCluster#horizontal_pod_autoscaling}
  */
  readonly horizontalPodAutoscaling?: ContainerClusterAddonsConfigHorizontalPodAutoscaling;
  /**
  * http_load_balancing block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#http_load_balancing ContainerCluster#http_load_balancing}
  */
  readonly httpLoadBalancing?: ContainerClusterAddonsConfigHttpLoadBalancing;
  /**
  * network_policy_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#network_policy_config ContainerCluster#network_policy_config}
  */
  readonly networkPolicyConfig?: ContainerClusterAddonsConfigNetworkPolicyConfig;
}

export function containerClusterAddonsConfigToTerraform(struct?: ContainerClusterAddonsConfigOutputReference | ContainerClusterAddonsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudrun_config: containerClusterAddonsConfigCloudrunConfigToTerraform(struct!.cloudrunConfig),
    horizontal_pod_autoscaling: containerClusterAddonsConfigHorizontalPodAutoscalingToTerraform(struct!.horizontalPodAutoscaling),
    http_load_balancing: containerClusterAddonsConfigHttpLoadBalancingToTerraform(struct!.httpLoadBalancing),
    network_policy_config: containerClusterAddonsConfigNetworkPolicyConfigToTerraform(struct!.networkPolicyConfig),
  }
}

export class ContainerClusterAddonsConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterAddonsConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._cloudrunConfig) {
      hasAnyValues = true;
      internalValueResult.cloudrunConfig = this._cloudrunConfig?.internalValue;
    }
    if (this._horizontalPodAutoscaling) {
      hasAnyValues = true;
      internalValueResult.horizontalPodAutoscaling = this._horizontalPodAutoscaling?.internalValue;
    }
    if (this._httpLoadBalancing) {
      hasAnyValues = true;
      internalValueResult.httpLoadBalancing = this._httpLoadBalancing?.internalValue;
    }
    if (this._networkPolicyConfig) {
      hasAnyValues = true;
      internalValueResult.networkPolicyConfig = this._networkPolicyConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfig | undefined) {
    if (value === undefined) {
      this._cloudrunConfig.internalValue = undefined;
      this._horizontalPodAutoscaling.internalValue = undefined;
      this._httpLoadBalancing.internalValue = undefined;
      this._networkPolicyConfig.internalValue = undefined;
    }
    else {
      this._cloudrunConfig.internalValue = value.cloudrunConfig;
      this._horizontalPodAutoscaling.internalValue = value.horizontalPodAutoscaling;
      this._httpLoadBalancing.internalValue = value.httpLoadBalancing;
      this._networkPolicyConfig.internalValue = value.networkPolicyConfig;
    }
  }

  // cloudrun_config - computed: false, optional: true, required: false
  private _cloudrunConfig = new ContainerClusterAddonsConfigCloudrunConfigOutputReference(this as any, "cloudrun_config", true);
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

  // horizontal_pod_autoscaling - computed: false, optional: true, required: false
  private _horizontalPodAutoscaling = new ContainerClusterAddonsConfigHorizontalPodAutoscalingOutputReference(this as any, "horizontal_pod_autoscaling", true);
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
  private _httpLoadBalancing = new ContainerClusterAddonsConfigHttpLoadBalancingOutputReference(this as any, "http_load_balancing", true);
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
  private _networkPolicyConfig = new ContainerClusterAddonsConfigNetworkPolicyConfigOutputReference(this as any, "network_policy_config", true);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#security_group ContainerCluster#security_group}
  */
  readonly securityGroup: string;
}

export function containerClusterAuthenticatorGroupsConfigToTerraform(struct?: ContainerClusterAuthenticatorGroupsConfigOutputReference | ContainerClusterAuthenticatorGroupsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group: cdktf.stringToTerraform(struct!.securityGroup),
  }
}

export class ContainerClusterAuthenticatorGroupsConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterAuthenticatorGroupsConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._securityGroup) {
      hasAnyValues = true;
      internalValueResult.securityGroup = this._securityGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAuthenticatorGroupsConfig | undefined) {
    if (value === undefined) {
      this._securityGroup = undefined;
    }
    else {
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
export interface ContainerClusterClusterAutoscalingAutoProvisioningDefaults {
  /**
  * Scopes that are used by NAP when creating node pools.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#oauth_scopes ContainerCluster#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#service_account ContainerCluster#service_account}
  */
  readonly serviceAccount?: string;
}

export function containerClusterClusterAutoscalingAutoProvisioningDefaultsToTerraform(struct?: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsOutputReference | ContainerClusterClusterAutoscalingAutoProvisioningDefaults): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform)(struct!.oauthScopes),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}

export class ContainerClusterClusterAutoscalingAutoProvisioningDefaultsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterClusterAutoscalingAutoProvisioningDefaults | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._oauthScopes) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    if (this._serviceAccount) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterClusterAutoscalingAutoProvisioningDefaults | undefined) {
    if (value === undefined) {
      this._oauthScopes = undefined;
      this._serviceAccount = undefined;
    }
    else {
      this._oauthScopes = value.oauthScopes;
      this._serviceAccount = value.serviceAccount;
    }
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#maximum ContainerCluster#maximum}
  */
  readonly maximum?: number;
  /**
  * Minimum amount of the resource in the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#minimum ContainerCluster#minimum}
  */
  readonly minimum?: number;
  /**
  * The type of the resource. For example, cpu and memory. See the guide to using Node Auto-Provisioning for a list of types.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#resource_type ContainerCluster#resource_type}
  */
  readonly resourceType: string;
}

export function containerClusterClusterAutoscalingResourceLimitsToTerraform(struct?: ContainerClusterClusterAutoscalingResourceLimits): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}

export interface ContainerClusterClusterAutoscaling {
  /**
  * Whether node auto-provisioning is enabled. Resource limits for cpu and memory must be defined to enable node auto-provisioning.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * auto_provisioning_defaults block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#auto_provisioning_defaults ContainerCluster#auto_provisioning_defaults}
  */
  readonly autoProvisioningDefaults?: ContainerClusterClusterAutoscalingAutoProvisioningDefaults;
  /**
  * resource_limits block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#resource_limits ContainerCluster#resource_limits}
  */
  readonly resourceLimits?: ContainerClusterClusterAutoscalingResourceLimits[];
}

export function containerClusterClusterAutoscalingToTerraform(struct?: ContainerClusterClusterAutoscalingOutputReference | ContainerClusterClusterAutoscaling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    auto_provisioning_defaults: containerClusterClusterAutoscalingAutoProvisioningDefaultsToTerraform(struct!.autoProvisioningDefaults),
    resource_limits: cdktf.listMapper(containerClusterClusterAutoscalingResourceLimitsToTerraform)(struct!.resourceLimits),
  }
}

export class ContainerClusterClusterAutoscalingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterClusterAutoscaling | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._enabled) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._autoProvisioningDefaults) {
      hasAnyValues = true;
      internalValueResult.autoProvisioningDefaults = this._autoProvisioningDefaults?.internalValue;
    }
    if (this._resourceLimits) {
      hasAnyValues = true;
      internalValueResult.resourceLimits = this._resourceLimits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterClusterAutoscaling | undefined) {
    if (value === undefined) {
      this._enabled = undefined;
      this._autoProvisioningDefaults.internalValue = undefined;
      this._resourceLimits = undefined;
    }
    else {
      this._enabled = value.enabled;
      this._autoProvisioningDefaults.internalValue = value.autoProvisioningDefaults;
      this._resourceLimits = value.resourceLimits;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // auto_provisioning_defaults - computed: false, optional: true, required: false
  private _autoProvisioningDefaults = new ContainerClusterClusterAutoscalingAutoProvisioningDefaultsOutputReference(this as any, "auto_provisioning_defaults", true);
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
  private _resourceLimits?: ContainerClusterClusterAutoscalingResourceLimits[]; 
  public get resourceLimits() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_limits') as any;
  }
  public set resourceLimits(value: ContainerClusterClusterAutoscalingResourceLimits[]) {
    this._resourceLimits = value;
  }
  public resetResourceLimits() {
    this._resourceLimits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitsInput() {
    return this._resourceLimits;
  }
}
export interface ContainerClusterDatabaseEncryption {
  /**
  * The key to use to encrypt/decrypt secrets.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#key_name ContainerCluster#key_name}
  */
  readonly keyName?: string;
  /**
  * ENCRYPTED or DECRYPTED.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#state ContainerCluster#state}
  */
  readonly state: string;
}

export function containerClusterDatabaseEncryptionToTerraform(struct?: ContainerClusterDatabaseEncryptionOutputReference | ContainerClusterDatabaseEncryption): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_name: cdktf.stringToTerraform(struct!.keyName),
    state: cdktf.stringToTerraform(struct!.state),
  }
}

export class ContainerClusterDatabaseEncryptionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterDatabaseEncryption | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._keyName) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._state) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterDatabaseEncryption | undefined) {
    if (value === undefined) {
      this._keyName = undefined;
      this._state = undefined;
    }
    else {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#disabled ContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
}

export function containerClusterDefaultSnatStatusToTerraform(struct?: ContainerClusterDefaultSnatStatusOutputReference | ContainerClusterDefaultSnatStatus): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}

export class ContainerClusterDefaultSnatStatusOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterDefaultSnatStatus | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._disabled) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterDefaultSnatStatus | undefined) {
    if (value === undefined) {
      this._disabled = undefined;
    }
    else {
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled') as any;
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface ContainerClusterIpAllocationPolicy {
  /**
  * The IP address range for the cluster pod IPs. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#cluster_ipv4_cidr_block ContainerCluster#cluster_ipv4_cidr_block}
  */
  readonly clusterIpv4CidrBlock?: string;
  /**
  * The name of the existing secondary range in the cluster's subnetwork to use for pod IP addresses. Alternatively, cluster_ipv4_cidr_block can be used to automatically create a GKE-managed one.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#cluster_secondary_range_name ContainerCluster#cluster_secondary_range_name}
  */
  readonly clusterSecondaryRangeName?: string;
  /**
  * The IP address range of the services IPs in this cluster. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#services_ipv4_cidr_block ContainerCluster#services_ipv4_cidr_block}
  */
  readonly servicesIpv4CidrBlock?: string;
  /**
  * The name of the existing secondary range in the cluster's subnetwork to use for service ClusterIPs. Alternatively, services_ipv4_cidr_block can be used to automatically create a GKE-managed one.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#services_secondary_range_name ContainerCluster#services_secondary_range_name}
  */
  readonly servicesSecondaryRangeName?: string;
}

export function containerClusterIpAllocationPolicyToTerraform(struct?: ContainerClusterIpAllocationPolicyOutputReference | ContainerClusterIpAllocationPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterIpAllocationPolicy | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._clusterIpv4CidrBlock) {
      hasAnyValues = true;
      internalValueResult.clusterIpv4CidrBlock = this._clusterIpv4CidrBlock;
    }
    if (this._clusterSecondaryRangeName) {
      hasAnyValues = true;
      internalValueResult.clusterSecondaryRangeName = this._clusterSecondaryRangeName;
    }
    if (this._servicesIpv4CidrBlock) {
      hasAnyValues = true;
      internalValueResult.servicesIpv4CidrBlock = this._servicesIpv4CidrBlock;
    }
    if (this._servicesSecondaryRangeName) {
      hasAnyValues = true;
      internalValueResult.servicesSecondaryRangeName = this._servicesSecondaryRangeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterIpAllocationPolicy | undefined) {
    if (value === undefined) {
      this._clusterIpv4CidrBlock = undefined;
      this._clusterSecondaryRangeName = undefined;
      this._servicesIpv4CidrBlock = undefined;
      this._servicesSecondaryRangeName = undefined;
    }
    else {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#enable_components ContainerCluster#enable_components}
  */
  readonly enableComponents: string[];
}

export function containerClusterLoggingConfigToTerraform(struct?: ContainerClusterLoggingConfigOutputReference | ContainerClusterLoggingConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_components: cdktf.listMapper(cdktf.stringToTerraform)(struct!.enableComponents),
  }
}

export class ContainerClusterLoggingConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterLoggingConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._enableComponents) {
      hasAnyValues = true;
      internalValueResult.enableComponents = this._enableComponents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterLoggingConfig | undefined) {
    if (value === undefined) {
      this._enableComponents = undefined;
    }
    else {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#start_time ContainerCluster#start_time}
  */
  readonly startTime: string;
}

export function containerClusterMaintenancePolicyDailyMaintenanceWindowToTerraform(struct?: ContainerClusterMaintenancePolicyDailyMaintenanceWindowOutputReference | ContainerClusterMaintenancePolicyDailyMaintenanceWindow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}

export class ContainerClusterMaintenancePolicyDailyMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterMaintenancePolicyDailyMaintenanceWindow | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._startTime) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMaintenancePolicyDailyMaintenanceWindow | undefined) {
    if (value === undefined) {
      this._startTime = undefined;
    }
    else {
      this._startTime = value.startTime;
    }
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
export interface ContainerClusterMaintenancePolicyMaintenanceExclusion {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#end_time ContainerCluster#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#exclusion_name ContainerCluster#exclusion_name}
  */
  readonly exclusionName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#start_time ContainerCluster#start_time}
  */
  readonly startTime: string;
}

export function containerClusterMaintenancePolicyMaintenanceExclusionToTerraform(struct?: ContainerClusterMaintenancePolicyMaintenanceExclusion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    exclusion_name: cdktf.stringToTerraform(struct!.exclusionName),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}

export interface ContainerClusterMaintenancePolicyRecurringWindow {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#end_time ContainerCluster#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#recurrence ContainerCluster#recurrence}
  */
  readonly recurrence: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#start_time ContainerCluster#start_time}
  */
  readonly startTime: string;
}

export function containerClusterMaintenancePolicyRecurringWindowToTerraform(struct?: ContainerClusterMaintenancePolicyRecurringWindowOutputReference | ContainerClusterMaintenancePolicyRecurringWindow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterMaintenancePolicyRecurringWindow | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._endTime) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._recurrence) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence;
    }
    if (this._startTime) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMaintenancePolicyRecurringWindow | undefined) {
    if (value === undefined) {
      this._endTime = undefined;
      this._recurrence = undefined;
      this._startTime = undefined;
    }
    else {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#daily_maintenance_window ContainerCluster#daily_maintenance_window}
  */
  readonly dailyMaintenanceWindow?: ContainerClusterMaintenancePolicyDailyMaintenanceWindow;
  /**
  * maintenance_exclusion block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#maintenance_exclusion ContainerCluster#maintenance_exclusion}
  */
  readonly maintenanceExclusion?: ContainerClusterMaintenancePolicyMaintenanceExclusion[];
  /**
  * recurring_window block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#recurring_window ContainerCluster#recurring_window}
  */
  readonly recurringWindow?: ContainerClusterMaintenancePolicyRecurringWindow;
}

export function containerClusterMaintenancePolicyToTerraform(struct?: ContainerClusterMaintenancePolicyOutputReference | ContainerClusterMaintenancePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily_maintenance_window: containerClusterMaintenancePolicyDailyMaintenanceWindowToTerraform(struct!.dailyMaintenanceWindow),
    maintenance_exclusion: cdktf.listMapper(containerClusterMaintenancePolicyMaintenanceExclusionToTerraform)(struct!.maintenanceExclusion),
    recurring_window: containerClusterMaintenancePolicyRecurringWindowToTerraform(struct!.recurringWindow),
  }
}

export class ContainerClusterMaintenancePolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterMaintenancePolicy | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._dailyMaintenanceWindow) {
      hasAnyValues = true;
      internalValueResult.dailyMaintenanceWindow = this._dailyMaintenanceWindow?.internalValue;
    }
    if (this._maintenanceExclusion) {
      hasAnyValues = true;
      internalValueResult.maintenanceExclusion = this._maintenanceExclusion;
    }
    if (this._recurringWindow) {
      hasAnyValues = true;
      internalValueResult.recurringWindow = this._recurringWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMaintenancePolicy | undefined) {
    if (value === undefined) {
      this._dailyMaintenanceWindow.internalValue = undefined;
      this._maintenanceExclusion = undefined;
      this._recurringWindow.internalValue = undefined;
    }
    else {
      this._dailyMaintenanceWindow.internalValue = value.dailyMaintenanceWindow;
      this._maintenanceExclusion = value.maintenanceExclusion;
      this._recurringWindow.internalValue = value.recurringWindow;
    }
  }

  // daily_maintenance_window - computed: false, optional: true, required: false
  private _dailyMaintenanceWindow = new ContainerClusterMaintenancePolicyDailyMaintenanceWindowOutputReference(this as any, "daily_maintenance_window", true);
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
  private _maintenanceExclusion?: ContainerClusterMaintenancePolicyMaintenanceExclusion[]; 
  public get maintenanceExclusion() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('maintenance_exclusion') as any;
  }
  public set maintenanceExclusion(value: ContainerClusterMaintenancePolicyMaintenanceExclusion[]) {
    this._maintenanceExclusion = value;
  }
  public resetMaintenanceExclusion() {
    this._maintenanceExclusion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceExclusionInput() {
    return this._maintenanceExclusion;
  }

  // recurring_window - computed: false, optional: true, required: false
  private _recurringWindow = new ContainerClusterMaintenancePolicyRecurringWindowOutputReference(this as any, "recurring_window", true);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#issue_client_certificate ContainerCluster#issue_client_certificate}
  */
  readonly issueClientCertificate: boolean | cdktf.IResolvable;
}

export function containerClusterMasterAuthClientCertificateConfigToTerraform(struct?: ContainerClusterMasterAuthClientCertificateConfigOutputReference | ContainerClusterMasterAuthClientCertificateConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issue_client_certificate: cdktf.booleanToTerraform(struct!.issueClientCertificate),
  }
}

export class ContainerClusterMasterAuthClientCertificateConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterMasterAuthClientCertificateConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._issueClientCertificate) {
      hasAnyValues = true;
      internalValueResult.issueClientCertificate = this._issueClientCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMasterAuthClientCertificateConfig | undefined) {
    if (value === undefined) {
      this._issueClientCertificate = undefined;
    }
    else {
      this._issueClientCertificate = value.issueClientCertificate;
    }
  }

  // issue_client_certificate - computed: false, optional: false, required: true
  private _issueClientCertificate?: boolean | cdktf.IResolvable; 
  public get issueClientCertificate() {
    return this.getBooleanAttribute('issue_client_certificate') as any;
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
  * The password to use for HTTP basic authentication when accessing the Kubernetes master endpoint.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#password ContainerCluster#password}
  */
  readonly password?: string;
  /**
  * The username to use for HTTP basic authentication when accessing the Kubernetes master endpoint. If not present basic auth will be disabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#username ContainerCluster#username}
  */
  readonly username?: string;
  /**
  * client_certificate_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#client_certificate_config ContainerCluster#client_certificate_config}
  */
  readonly clientCertificateConfig?: ContainerClusterMasterAuthClientCertificateConfig;
}

export function containerClusterMasterAuthToTerraform(struct?: ContainerClusterMasterAuthOutputReference | ContainerClusterMasterAuth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
    client_certificate_config: containerClusterMasterAuthClientCertificateConfigToTerraform(struct!.clientCertificateConfig),
  }
}

export class ContainerClusterMasterAuthOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterMasterAuth | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._password) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._clientCertificateConfig) {
      hasAnyValues = true;
      internalValueResult.clientCertificateConfig = this._clientCertificateConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMasterAuth | undefined) {
    if (value === undefined) {
      this._password = undefined;
      this._username = undefined;
      this._clientCertificateConfig.internalValue = undefined;
    }
    else {
      this._password = value.password;
      this._username = value.username;
      this._clientCertificateConfig.internalValue = value.clientCertificateConfig;
    }
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

  // client_certificate_config - computed: false, optional: true, required: false
  private _clientCertificateConfig = new ContainerClusterMasterAuthClientCertificateConfigOutputReference(this as any, "client_certificate_config", true);
  public get clientCertificateConfig() {
    return this._clientCertificateConfig;
  }
  public putClientCertificateConfig(value: ContainerClusterMasterAuthClientCertificateConfig) {
    this._clientCertificateConfig.internalValue = value;
  }
  public resetClientCertificateConfig() {
    this._clientCertificateConfig.internalValue = undefined;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#cidr_block ContainerCluster#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * Field for users to identify CIDR blocks.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#display_name ContainerCluster#display_name}
  */
  readonly displayName?: string;
}

export function containerClusterMasterAuthorizedNetworksConfigCidrBlocksToTerraform(struct?: ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}

export interface ContainerClusterMasterAuthorizedNetworksConfig {
  /**
  * cidr_blocks block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#cidr_blocks ContainerCluster#cidr_blocks}
  */
  readonly cidrBlocks?: ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks[];
}

export function containerClusterMasterAuthorizedNetworksConfigToTerraform(struct?: ContainerClusterMasterAuthorizedNetworksConfigOutputReference | ContainerClusterMasterAuthorizedNetworksConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_blocks: cdktf.listMapper(containerClusterMasterAuthorizedNetworksConfigCidrBlocksToTerraform)(struct!.cidrBlocks),
  }
}

export class ContainerClusterMasterAuthorizedNetworksConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterMasterAuthorizedNetworksConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._cidrBlocks) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMasterAuthorizedNetworksConfig | undefined) {
    if (value === undefined) {
      this._cidrBlocks = undefined;
    }
    else {
      this._cidrBlocks = value.cidrBlocks;
    }
  }

  // cidr_blocks - computed: false, optional: true, required: false
  private _cidrBlocks?: ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks[]; 
  public get cidrBlocks() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('cidr_blocks') as any;
  }
  public set cidrBlocks(value: ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks[]) {
    this._cidrBlocks = value;
  }
  public resetCidrBlocks() {
    this._cidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks;
  }
}
export interface ContainerClusterMonitoringConfig {
  /**
  * GKE components exposing metrics. Valid values include SYSTEM_COMPONENTS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#enable_components ContainerCluster#enable_components}
  */
  readonly enableComponents: string[];
}

export function containerClusterMonitoringConfigToTerraform(struct?: ContainerClusterMonitoringConfigOutputReference | ContainerClusterMonitoringConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_components: cdktf.listMapper(cdktf.stringToTerraform)(struct!.enableComponents),
  }
}

export class ContainerClusterMonitoringConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterMonitoringConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._enableComponents) {
      hasAnyValues = true;
      internalValueResult.enableComponents = this._enableComponents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMonitoringConfig | undefined) {
    if (value === undefined) {
      this._enableComponents = undefined;
    }
    else {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The selected network policy provider. Defaults to PROVIDER_UNSPECIFIED.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#provider ContainerCluster#provider}
  */
  readonly provider?: string;
}

export function containerClusterNetworkPolicyToTerraform(struct?: ContainerClusterNetworkPolicyOutputReference | ContainerClusterNetworkPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    provider: cdktf.stringToTerraform(struct!.provider),
  }
}

export class ContainerClusterNetworkPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterNetworkPolicy | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._enabled) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._provider) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNetworkPolicy | undefined) {
    if (value === undefined) {
      this._enabled = undefined;
      this._provider = undefined;
    }
    else {
      this._enabled = value.enabled;
      this._provider = value.provider;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#count ContainerCluster#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#gpu_partition_size ContainerCluster#gpu_partition_size}
  */
  readonly gpuPartitionSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#type ContainerCluster#type}
  */
  readonly type?: string;
}

export function containerClusterNodeConfigGuestAcceleratorToTerraform(struct?: ContainerClusterNodeConfigGuestAccelerator): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    gpu_partition_size: cdktf.stringToTerraform(struct!.gpuPartitionSize),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ContainerClusterNodeConfigTaint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#effect ContainerCluster#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#key ContainerCluster#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#value ContainerCluster#value}
  */
  readonly value?: string;
}

export function containerClusterNodeConfigTaintToTerraform(struct?: ContainerClusterNodeConfigTaint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ContainerClusterNodeConfigShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#enable_integrity_monitoring ContainerCluster#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#enable_secure_boot ContainerCluster#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
}

export function containerClusterNodeConfigShieldedInstanceConfigToTerraform(struct?: ContainerClusterNodeConfigShieldedInstanceConfigOutputReference | ContainerClusterNodeConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}

export class ContainerClusterNodeConfigShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterNodeConfigShieldedInstanceConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
    }
    else {
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring') as any;
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
    return this.getBooleanAttribute('enable_secure_boot') as any;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#mode ContainerCluster#mode}
  */
  readonly mode?: string;
  /**
  * NodeMetadata is the configuration for how to expose metadata to the workloads running on the node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#node_metadata ContainerCluster#node_metadata}
  */
  readonly nodeMetadata?: string;
}

export function containerClusterNodeConfigWorkloadMetadataConfigToTerraform(struct?: ContainerClusterNodeConfigWorkloadMetadataConfigOutputReference | ContainerClusterNodeConfigWorkloadMetadataConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    node_metadata: cdktf.stringToTerraform(struct!.nodeMetadata),
  }
}

export class ContainerClusterNodeConfigWorkloadMetadataConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterNodeConfigWorkloadMetadataConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._mode) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._nodeMetadata) {
      hasAnyValues = true;
      internalValueResult.nodeMetadata = this._nodeMetadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigWorkloadMetadataConfig | undefined) {
    if (value === undefined) {
      this._mode = undefined;
      this._nodeMetadata = undefined;
    }
    else {
      this._mode = value.mode;
      this._nodeMetadata = value.nodeMetadata;
    }
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // node_metadata - computed: true, optional: true, required: false
  private _nodeMetadata?: string; 
  public get nodeMetadata() {
    return this.getStringAttribute('node_metadata');
  }
  public set nodeMetadata(value: string) {
    this._nodeMetadata = value;
  }
  public resetNodeMetadata() {
    this._nodeMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeMetadataInput() {
    return this._nodeMetadata;
  }
}
export interface ContainerClusterNodeConfig {
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#disk_size_gb ContainerCluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Type of the disk attached to each node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#disk_type ContainerCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * List of the type and count of accelerator cards attached to the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#guest_accelerator ContainerCluster#guest_accelerator}
  */
  readonly guestAccelerator?: ContainerClusterNodeConfigGuestAccelerator[];
  /**
  * The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#image_type ContainerCluster#image_type}
  */
  readonly imageType?: string;
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#labels ContainerCluster#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The number of local SSD disks to be attached to the node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#local_ssd_count ContainerCluster#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * The name of a Google Compute Engine machine type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#machine_type ContainerCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The metadata key/value pairs assigned to instances in the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#metadata ContainerCluster#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#min_cpu_platform ContainerCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * The set of Google API scopes to be made available on all of the node VMs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#oauth_scopes ContainerCluster#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * Whether the nodes are created as preemptible VM instances.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#preemptible ContainerCluster#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#service_account ContainerCluster#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * The list of instance tags applied to all nodes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#tags ContainerCluster#tags}
  */
  readonly tags?: string[];
  /**
  * List of Kubernetes taints to be applied to each node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#taint ContainerCluster#taint}
  */
  readonly taint?: ContainerClusterNodeConfigTaint[];
  /**
  * shielded_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#shielded_instance_config ContainerCluster#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: ContainerClusterNodeConfigShieldedInstanceConfig;
  /**
  * workload_metadata_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#workload_metadata_config ContainerCluster#workload_metadata_config}
  */
  readonly workloadMetadataConfig?: ContainerClusterNodeConfigWorkloadMetadataConfig;
}

export function containerClusterNodeConfigToTerraform(struct?: ContainerClusterNodeConfigOutputReference | ContainerClusterNodeConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
    shielded_instance_config: containerClusterNodeConfigShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    workload_metadata_config: containerClusterNodeConfigWorkloadMetadataConfigToTerraform(struct!.workloadMetadataConfig),
  }
}

export class ContainerClusterNodeConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterNodeConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._diskSizeGb) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._guestAccelerator) {
      hasAnyValues = true;
      internalValueResult.guestAccelerator = this._guestAccelerator;
    }
    if (this._imageType) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._labels) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._localSsdCount) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._machineType) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._metadata) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._minCpuPlatform) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._oauthScopes) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    if (this._preemptible) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    if (this._serviceAccount) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._tags) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._taint) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint;
    }
    if (this._shieldedInstanceConfig) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    if (this._workloadMetadataConfig) {
      hasAnyValues = true;
      internalValueResult.workloadMetadataConfig = this._workloadMetadataConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfig | undefined) {
    if (value === undefined) {
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._guestAccelerator = undefined;
      this._imageType = undefined;
      this._labels = undefined;
      this._localSsdCount = undefined;
      this._machineType = undefined;
      this._metadata = undefined;
      this._minCpuPlatform = undefined;
      this._oauthScopes = undefined;
      this._preemptible = undefined;
      this._serviceAccount = undefined;
      this._tags = undefined;
      this._taint = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
      this._workloadMetadataConfig.internalValue = undefined;
    }
    else {
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._guestAccelerator = value.guestAccelerator;
      this._imageType = value.imageType;
      this._labels = value.labels;
      this._localSsdCount = value.localSsdCount;
      this._machineType = value.machineType;
      this._metadata = value.metadata;
      this._minCpuPlatform = value.minCpuPlatform;
      this._oauthScopes = value.oauthScopes;
      this._preemptible = value.preemptible;
      this._serviceAccount = value.serviceAccount;
      this._tags = value.tags;
      this._taint = value.taint;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
      this._workloadMetadataConfig.internalValue = value.workloadMetadataConfig;
    }
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
  private _guestAccelerator?: ContainerClusterNodeConfigGuestAccelerator[]; 
  public get guestAccelerator() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('guest_accelerator') as any;
  }
  public set guestAccelerator(value: ContainerClusterNodeConfigGuestAccelerator[]) {
    this._guestAccelerator = value;
  }
  public resetGuestAccelerator() {
    this._guestAccelerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorInput() {
    return this._guestAccelerator;
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
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _metadata?: { [key: string]: string } | cdktf.IResolvable; 
  public get metadata() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // min_cpu_platform - computed: false, optional: true, required: false
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

  // preemptible - computed: false, optional: true, required: false
  private _preemptible?: boolean | cdktf.IResolvable; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible') as any;
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
  private _taint?: ContainerClusterNodeConfigTaint[]; 
  public get taint() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('taint') as any;
  }
  public set taint(value: ContainerClusterNodeConfigTaint[]) {
    this._taint = value;
  }
  public resetTaint() {
    this._taint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new ContainerClusterNodeConfigShieldedInstanceConfigOutputReference(this as any, "shielded_instance_config", true);
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
  private _workloadMetadataConfig = new ContainerClusterNodeConfigWorkloadMetadataConfigOutputReference(this as any, "workload_metadata_config", true);
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
  * Maximum number of nodes in the NodePool. Must be >= min_node_count.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#max_node_count ContainerCluster#max_node_count}
  */
  readonly maxNodeCount: number;
  /**
  * Minimum number of nodes in the NodePool. Must be >=0 and <= max_node_count.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#min_node_count ContainerCluster#min_node_count}
  */
  readonly minNodeCount: number;
}

export function containerClusterNodePoolAutoscalingToTerraform(struct?: ContainerClusterNodePoolAutoscalingOutputReference | ContainerClusterNodePoolAutoscaling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
  }
}

export class ContainerClusterNodePoolAutoscalingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterNodePoolAutoscaling | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._maxNodeCount) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._minNodeCount) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolAutoscaling | undefined) {
    if (value === undefined) {
      this._maxNodeCount = undefined;
      this._minNodeCount = undefined;
    }
    else {
      this._maxNodeCount = value.maxNodeCount;
      this._minNodeCount = value.minNodeCount;
    }
  }

  // max_node_count - computed: false, optional: false, required: true
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: false, optional: false, required: true
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
  }
}
export interface ContainerClusterNodePoolManagement {
  /**
  * Whether the nodes will be automatically repaired.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#auto_repair ContainerCluster#auto_repair}
  */
  readonly autoRepair?: boolean | cdktf.IResolvable;
  /**
  * Whether the nodes will be automatically upgraded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#auto_upgrade ContainerCluster#auto_upgrade}
  */
  readonly autoUpgrade?: boolean | cdktf.IResolvable;
}

export function containerClusterNodePoolManagementToTerraform(struct?: ContainerClusterNodePoolManagementOutputReference | ContainerClusterNodePoolManagement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_repair: cdktf.booleanToTerraform(struct!.autoRepair),
    auto_upgrade: cdktf.booleanToTerraform(struct!.autoUpgrade),
  }
}

export class ContainerClusterNodePoolManagementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterNodePoolManagement | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._autoRepair) {
      hasAnyValues = true;
      internalValueResult.autoRepair = this._autoRepair;
    }
    if (this._autoUpgrade) {
      hasAnyValues = true;
      internalValueResult.autoUpgrade = this._autoUpgrade;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolManagement | undefined) {
    if (value === undefined) {
      this._autoRepair = undefined;
      this._autoUpgrade = undefined;
    }
    else {
      this._autoRepair = value.autoRepair;
      this._autoUpgrade = value.autoUpgrade;
    }
  }

  // auto_repair - computed: false, optional: true, required: false
  private _autoRepair?: boolean | cdktf.IResolvable; 
  public get autoRepair() {
    return this.getBooleanAttribute('auto_repair') as any;
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
    return this.getBooleanAttribute('auto_upgrade') as any;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#count ContainerCluster#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#gpu_partition_size ContainerCluster#gpu_partition_size}
  */
  readonly gpuPartitionSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#type ContainerCluster#type}
  */
  readonly type?: string;
}

export function containerClusterNodePoolNodeConfigGuestAcceleratorToTerraform(struct?: ContainerClusterNodePoolNodeConfigGuestAccelerator): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    gpu_partition_size: cdktf.stringToTerraform(struct!.gpuPartitionSize),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ContainerClusterNodePoolNodeConfigTaint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#effect ContainerCluster#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#key ContainerCluster#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#value ContainerCluster#value}
  */
  readonly value?: string;
}

export function containerClusterNodePoolNodeConfigTaintToTerraform(struct?: ContainerClusterNodePoolNodeConfigTaint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ContainerClusterNodePoolNodeConfigShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#enable_integrity_monitoring ContainerCluster#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#enable_secure_boot ContainerCluster#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
}

export function containerClusterNodePoolNodeConfigShieldedInstanceConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference | ContainerClusterNodePoolNodeConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}

export class ContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigShieldedInstanceConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
    }
    else {
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring') as any;
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
    return this.getBooleanAttribute('enable_secure_boot') as any;
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#mode ContainerCluster#mode}
  */
  readonly mode?: string;
  /**
  * NodeMetadata is the configuration for how to expose metadata to the workloads running on the node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#node_metadata ContainerCluster#node_metadata}
  */
  readonly nodeMetadata?: string;
}

export function containerClusterNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference | ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    node_metadata: cdktf.stringToTerraform(struct!.nodeMetadata),
  }
}

export class ContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._mode) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._nodeMetadata) {
      hasAnyValues = true;
      internalValueResult.nodeMetadata = this._nodeMetadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig | undefined) {
    if (value === undefined) {
      this._mode = undefined;
      this._nodeMetadata = undefined;
    }
    else {
      this._mode = value.mode;
      this._nodeMetadata = value.nodeMetadata;
    }
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // node_metadata - computed: true, optional: true, required: false
  private _nodeMetadata?: string; 
  public get nodeMetadata() {
    return this.getStringAttribute('node_metadata');
  }
  public set nodeMetadata(value: string) {
    this._nodeMetadata = value;
  }
  public resetNodeMetadata() {
    this._nodeMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeMetadataInput() {
    return this._nodeMetadata;
  }
}
export interface ContainerClusterNodePoolNodeConfig {
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#disk_size_gb ContainerCluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Type of the disk attached to each node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#disk_type ContainerCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * List of the type and count of accelerator cards attached to the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#guest_accelerator ContainerCluster#guest_accelerator}
  */
  readonly guestAccelerator?: ContainerClusterNodePoolNodeConfigGuestAccelerator[];
  /**
  * The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#image_type ContainerCluster#image_type}
  */
  readonly imageType?: string;
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#labels ContainerCluster#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The number of local SSD disks to be attached to the node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#local_ssd_count ContainerCluster#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * The name of a Google Compute Engine machine type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#machine_type ContainerCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The metadata key/value pairs assigned to instances in the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#metadata ContainerCluster#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#min_cpu_platform ContainerCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * The set of Google API scopes to be made available on all of the node VMs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#oauth_scopes ContainerCluster#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * Whether the nodes are created as preemptible VM instances.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#preemptible ContainerCluster#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#service_account ContainerCluster#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * The list of instance tags applied to all nodes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#tags ContainerCluster#tags}
  */
  readonly tags?: string[];
  /**
  * List of Kubernetes taints to be applied to each node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#taint ContainerCluster#taint}
  */
  readonly taint?: ContainerClusterNodePoolNodeConfigTaint[];
  /**
  * shielded_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#shielded_instance_config ContainerCluster#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: ContainerClusterNodePoolNodeConfigShieldedInstanceConfig;
  /**
  * workload_metadata_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#workload_metadata_config ContainerCluster#workload_metadata_config}
  */
  readonly workloadMetadataConfig?: ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig;
}

export function containerClusterNodePoolNodeConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigOutputReference | ContainerClusterNodePoolNodeConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
    shielded_instance_config: containerClusterNodePoolNodeConfigShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    workload_metadata_config: containerClusterNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct!.workloadMetadataConfig),
  }
}

export class ContainerClusterNodePoolNodeConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._diskSizeGb) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._guestAccelerator) {
      hasAnyValues = true;
      internalValueResult.guestAccelerator = this._guestAccelerator;
    }
    if (this._imageType) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._labels) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._localSsdCount) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._machineType) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._metadata) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._minCpuPlatform) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._oauthScopes) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    if (this._preemptible) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    if (this._serviceAccount) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._tags) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._taint) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint;
    }
    if (this._shieldedInstanceConfig) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    if (this._workloadMetadataConfig) {
      hasAnyValues = true;
      internalValueResult.workloadMetadataConfig = this._workloadMetadataConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfig | undefined) {
    if (value === undefined) {
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._guestAccelerator = undefined;
      this._imageType = undefined;
      this._labels = undefined;
      this._localSsdCount = undefined;
      this._machineType = undefined;
      this._metadata = undefined;
      this._minCpuPlatform = undefined;
      this._oauthScopes = undefined;
      this._preemptible = undefined;
      this._serviceAccount = undefined;
      this._tags = undefined;
      this._taint = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
      this._workloadMetadataConfig.internalValue = undefined;
    }
    else {
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._guestAccelerator = value.guestAccelerator;
      this._imageType = value.imageType;
      this._labels = value.labels;
      this._localSsdCount = value.localSsdCount;
      this._machineType = value.machineType;
      this._metadata = value.metadata;
      this._minCpuPlatform = value.minCpuPlatform;
      this._oauthScopes = value.oauthScopes;
      this._preemptible = value.preemptible;
      this._serviceAccount = value.serviceAccount;
      this._tags = value.tags;
      this._taint = value.taint;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
      this._workloadMetadataConfig.internalValue = value.workloadMetadataConfig;
    }
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
  private _guestAccelerator?: ContainerClusterNodePoolNodeConfigGuestAccelerator[]; 
  public get guestAccelerator() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('guest_accelerator') as any;
  }
  public set guestAccelerator(value: ContainerClusterNodePoolNodeConfigGuestAccelerator[]) {
    this._guestAccelerator = value;
  }
  public resetGuestAccelerator() {
    this._guestAccelerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorInput() {
    return this._guestAccelerator;
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
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _metadata?: { [key: string]: string } | cdktf.IResolvable; 
  public get metadata() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // min_cpu_platform - computed: false, optional: true, required: false
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

  // preemptible - computed: false, optional: true, required: false
  private _preemptible?: boolean | cdktf.IResolvable; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible') as any;
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
  private _taint?: ContainerClusterNodePoolNodeConfigTaint[]; 
  public get taint() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('taint') as any;
  }
  public set taint(value: ContainerClusterNodePoolNodeConfigTaint[]) {
    this._taint = value;
  }
  public resetTaint() {
    this._taint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new ContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference(this as any, "shielded_instance_config", true);
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
  private _workloadMetadataConfig = new ContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference(this as any, "workload_metadata_config", true);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#max_surge ContainerCluster#max_surge}
  */
  readonly maxSurge: number;
  /**
  * The number of nodes that can be simultaneously unavailable during an upgrade. Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#max_unavailable ContainerCluster#max_unavailable}
  */
  readonly maxUnavailable: number;
}

export function containerClusterNodePoolUpgradeSettingsToTerraform(struct?: ContainerClusterNodePoolUpgradeSettingsOutputReference | ContainerClusterNodePoolUpgradeSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}

export class ContainerClusterNodePoolUpgradeSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterNodePoolUpgradeSettings | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._maxSurge) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolUpgradeSettings | undefined) {
    if (value === undefined) {
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
    }
    else {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#initial_node_count ContainerCluster#initial_node_count}
  */
  readonly initialNodeCount?: number;
  /**
  * The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#max_pods_per_node ContainerCluster#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * The name of the node pool. If left blank, Terraform will auto-generate a unique name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#name ContainerCluster#name}
  */
  readonly name?: string;
  /**
  * Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#name_prefix ContainerCluster#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#node_count ContainerCluster#node_count}
  */
  readonly nodeCount?: number;
  /**
  * The list of zones in which the node pool's nodes should be located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#node_locations ContainerCluster#node_locations}
  */
  readonly nodeLocations?: string[];
  /**
  * The Kubernetes version for the nodes in this pool. Note that if this field and auto_upgrade are both specified, they will fight each other for what the node version should be, so setting both is highly discouraged. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#version ContainerCluster#version}
  */
  readonly version?: string;
  /**
  * autoscaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#autoscaling ContainerCluster#autoscaling}
  */
  readonly autoscaling?: ContainerClusterNodePoolAutoscaling;
  /**
  * management block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#management ContainerCluster#management}
  */
  readonly management?: ContainerClusterNodePoolManagement;
  /**
  * node_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#node_config ContainerCluster#node_config}
  */
  readonly nodeConfig?: ContainerClusterNodePoolNodeConfig;
  /**
  * upgrade_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#upgrade_settings ContainerCluster#upgrade_settings}
  */
  readonly upgradeSettings?: ContainerClusterNodePoolUpgradeSettings;
}

export function containerClusterNodePoolToTerraform(struct?: ContainerClusterNodePool): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    initial_node_count: cdktf.numberToTerraform(struct!.initialNodeCount),
    max_pods_per_node: cdktf.numberToTerraform(struct!.maxPodsPerNode),
    name: cdktf.stringToTerraform(struct!.name),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_locations: cdktf.listMapper(cdktf.stringToTerraform)(struct!.nodeLocations),
    version: cdktf.stringToTerraform(struct!.version),
    autoscaling: containerClusterNodePoolAutoscalingToTerraform(struct!.autoscaling),
    management: containerClusterNodePoolManagementToTerraform(struct!.management),
    node_config: containerClusterNodePoolNodeConfigToTerraform(struct!.nodeConfig),
    upgrade_settings: containerClusterNodePoolUpgradeSettingsToTerraform(struct!.upgradeSettings),
  }
}

export interface ContainerClusterPodSecurityPolicyConfig {
  /**
  * Enable the PodSecurityPolicy controller for this cluster. If enabled, pods must be valid under a PodSecurityPolicy to be created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterPodSecurityPolicyConfigToTerraform(struct?: ContainerClusterPodSecurityPolicyConfigOutputReference | ContainerClusterPodSecurityPolicyConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class ContainerClusterPodSecurityPolicyConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterPodSecurityPolicyConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._enabled) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterPodSecurityPolicyConfig | undefined) {
    if (value === undefined) {
      this._enabled = undefined;
    }
    else {
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface ContainerClusterPrivateClusterConfigMasterGlobalAccessConfig {
  /**
  * Whether the cluster master is accessible globally or not.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterPrivateClusterConfigMasterGlobalAccessConfigToTerraform(struct?: ContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference | ContainerClusterPrivateClusterConfigMasterGlobalAccessConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class ContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterPrivateClusterConfigMasterGlobalAccessConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._enabled) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterPrivateClusterConfigMasterGlobalAccessConfig | undefined) {
    if (value === undefined) {
      this._enabled = undefined;
    }
    else {
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
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
  * Enables the private cluster feature, creating a private endpoint on the cluster. In a private cluster, nodes only have RFC 1918 private addresses and communicate with the master's private endpoint via private networking.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#enable_private_endpoint ContainerCluster#enable_private_endpoint}
  */
  readonly enablePrivateEndpoint: boolean | cdktf.IResolvable;
  /**
  * When true, the cluster's private endpoint is used as the cluster endpoint and access through the public endpoint is disabled. When false, either endpoint can be used. This field only applies to private clusters, when enable_private_nodes is true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#enable_private_nodes ContainerCluster#enable_private_nodes}
  */
  readonly enablePrivateNodes?: boolean | cdktf.IResolvable;
  /**
  * The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning private IP addresses to the cluster master(s) and the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network, and it must be a /28 subnet. See Private Cluster Limitations for more details. This field only applies to private clusters, when enable_private_nodes is true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#master_ipv4_cidr_block ContainerCluster#master_ipv4_cidr_block}
  */
  readonly masterIpv4CidrBlock?: string;
  /**
  * master_global_access_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#master_global_access_config ContainerCluster#master_global_access_config}
  */
  readonly masterGlobalAccessConfig?: ContainerClusterPrivateClusterConfigMasterGlobalAccessConfig;
}

export function containerClusterPrivateClusterConfigToTerraform(struct?: ContainerClusterPrivateClusterConfigOutputReference | ContainerClusterPrivateClusterConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterPrivateClusterConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._enablePrivateEndpoint) {
      hasAnyValues = true;
      internalValueResult.enablePrivateEndpoint = this._enablePrivateEndpoint;
    }
    if (this._enablePrivateNodes) {
      hasAnyValues = true;
      internalValueResult.enablePrivateNodes = this._enablePrivateNodes;
    }
    if (this._masterIpv4CidrBlock) {
      hasAnyValues = true;
      internalValueResult.masterIpv4CidrBlock = this._masterIpv4CidrBlock;
    }
    if (this._masterGlobalAccessConfig) {
      hasAnyValues = true;
      internalValueResult.masterGlobalAccessConfig = this._masterGlobalAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterPrivateClusterConfig | undefined) {
    if (value === undefined) {
      this._enablePrivateEndpoint = undefined;
      this._enablePrivateNodes = undefined;
      this._masterIpv4CidrBlock = undefined;
      this._masterGlobalAccessConfig.internalValue = undefined;
    }
    else {
      this._enablePrivateEndpoint = value.enablePrivateEndpoint;
      this._enablePrivateNodes = value.enablePrivateNodes;
      this._masterIpv4CidrBlock = value.masterIpv4CidrBlock;
      this._masterGlobalAccessConfig.internalValue = value.masterGlobalAccessConfig;
    }
  }

  // enable_private_endpoint - computed: false, optional: false, required: true
  private _enablePrivateEndpoint?: boolean | cdktf.IResolvable; 
  public get enablePrivateEndpoint() {
    return this.getBooleanAttribute('enable_private_endpoint') as any;
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
    return this.getBooleanAttribute('enable_private_nodes') as any;
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

  // master_ipv4_cidr_block - computed: false, optional: true, required: false
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

  // master_global_access_config - computed: false, optional: true, required: false
  private _masterGlobalAccessConfig = new ContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference(this as any, "master_global_access_config", true);
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#channel ContainerCluster#channel}
  */
  readonly channel: string;
}

export function containerClusterReleaseChannelToTerraform(struct?: ContainerClusterReleaseChannelOutputReference | ContainerClusterReleaseChannel): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
  }
}

export class ContainerClusterReleaseChannelOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterReleaseChannel | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._channel) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterReleaseChannel | undefined) {
    if (value === undefined) {
      this._channel = undefined;
    }
    else {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#dataset_id ContainerCluster#dataset_id}
  */
  readonly datasetId: string;
}

export function containerClusterResourceUsageExportConfigBigqueryDestinationToTerraform(struct?: ContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference | ContainerClusterResourceUsageExportConfigBigqueryDestination): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
  }
}

export class ContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterResourceUsageExportConfigBigqueryDestination | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._datasetId) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterResourceUsageExportConfigBigqueryDestination | undefined) {
    if (value === undefined) {
      this._datasetId = undefined;
    }
    else {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#enable_network_egress_metering ContainerCluster#enable_network_egress_metering}
  */
  readonly enableNetworkEgressMetering?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable resource consumption metering on this cluster. When enabled, a table will be created in the resource export BigQuery dataset to store resource consumption data. The resulting table can be joined with the resource usage table or with BigQuery billing export. Defaults to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#enable_resource_consumption_metering ContainerCluster#enable_resource_consumption_metering}
  */
  readonly enableResourceConsumptionMetering?: boolean | cdktf.IResolvable;
  /**
  * bigquery_destination block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#bigquery_destination ContainerCluster#bigquery_destination}
  */
  readonly bigqueryDestination: ContainerClusterResourceUsageExportConfigBigqueryDestination;
}

export function containerClusterResourceUsageExportConfigToTerraform(struct?: ContainerClusterResourceUsageExportConfigOutputReference | ContainerClusterResourceUsageExportConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterResourceUsageExportConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._enableNetworkEgressMetering) {
      hasAnyValues = true;
      internalValueResult.enableNetworkEgressMetering = this._enableNetworkEgressMetering;
    }
    if (this._enableResourceConsumptionMetering) {
      hasAnyValues = true;
      internalValueResult.enableResourceConsumptionMetering = this._enableResourceConsumptionMetering;
    }
    if (this._bigqueryDestination) {
      hasAnyValues = true;
      internalValueResult.bigqueryDestination = this._bigqueryDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterResourceUsageExportConfig | undefined) {
    if (value === undefined) {
      this._enableNetworkEgressMetering = undefined;
      this._enableResourceConsumptionMetering = undefined;
      this._bigqueryDestination.internalValue = undefined;
    }
    else {
      this._enableNetworkEgressMetering = value.enableNetworkEgressMetering;
      this._enableResourceConsumptionMetering = value.enableResourceConsumptionMetering;
      this._bigqueryDestination.internalValue = value.bigqueryDestination;
    }
  }

  // enable_network_egress_metering - computed: false, optional: true, required: false
  private _enableNetworkEgressMetering?: boolean | cdktf.IResolvable; 
  public get enableNetworkEgressMetering() {
    return this.getBooleanAttribute('enable_network_egress_metering') as any;
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
    return this.getBooleanAttribute('enable_resource_consumption_metering') as any;
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
  private _bigqueryDestination = new ContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference(this as any, "bigquery_destination", true);
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
export interface ContainerClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#create ContainerCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#delete ContainerCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#read ContainerCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#update ContainerCluster#update}
  */
  readonly update?: string;
}

export function containerClusterTimeoutsToTerraform(struct?: ContainerClusterTimeoutsOutputReference | ContainerClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterVerticalPodAutoscalingToTerraform(struct?: ContainerClusterVerticalPodAutoscalingOutputReference | ContainerClusterVerticalPodAutoscaling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}

export class ContainerClusterVerticalPodAutoscalingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterVerticalPodAutoscaling | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._enabled) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterVerticalPodAutoscaling | undefined) {
    if (value === undefined) {
      this._enabled = undefined;
    }
    else {
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
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
  * Enables workload identity.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#identity_namespace ContainerCluster#identity_namespace}
  */
  readonly identityNamespace?: string;
  /**
  * The workload pool to attach all Kubernetes service accounts to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html#workload_pool ContainerCluster#workload_pool}
  */
  readonly workloadPool?: string;
}

export function containerClusterWorkloadIdentityConfigToTerraform(struct?: ContainerClusterWorkloadIdentityConfigOutputReference | ContainerClusterWorkloadIdentityConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_namespace: cdktf.stringToTerraform(struct!.identityNamespace),
    workload_pool: cdktf.stringToTerraform(struct!.workloadPool),
  }
}

export class ContainerClusterWorkloadIdentityConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ContainerClusterWorkloadIdentityConfig | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._identityNamespace) {
      hasAnyValues = true;
      internalValueResult.identityNamespace = this._identityNamespace;
    }
    if (this._workloadPool) {
      hasAnyValues = true;
      internalValueResult.workloadPool = this._workloadPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterWorkloadIdentityConfig | undefined) {
    if (value === undefined) {
      this._identityNamespace = undefined;
      this._workloadPool = undefined;
    }
    else {
      this._identityNamespace = value.identityNamespace;
      this._workloadPool = value.workloadPool;
    }
  }

  // identity_namespace - computed: false, optional: true, required: false
  private _identityNamespace?: string; 
  public get identityNamespace() {
    return this.getStringAttribute('identity_namespace');
  }
  public set identityNamespace(value: string) {
    this._identityNamespace = value;
  }
  public resetIdentityNamespace() {
    this._identityNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityNamespaceInput() {
    return this._identityNamespace;
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html google_container_cluster}
*/
export class ContainerCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_container_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/container_cluster.html google_container_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerClusterConfig
  */
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
    this._enableAutopilot = config.enableAutopilot;
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
    this._clusterAutoscaling.internalValue = config.clusterAutoscaling;
    this._databaseEncryption.internalValue = config.databaseEncryption;
    this._defaultSnatStatus.internalValue = config.defaultSnatStatus;
    this._ipAllocationPolicy.internalValue = config.ipAllocationPolicy;
    this._loggingConfig.internalValue = config.loggingConfig;
    this._maintenancePolicy.internalValue = config.maintenancePolicy;
    this._masterAuth.internalValue = config.masterAuth;
    this._masterAuthorizedNetworksConfig.internalValue = config.masterAuthorizedNetworksConfig;
    this._monitoringConfig.internalValue = config.monitoringConfig;
    this._networkPolicy.internalValue = config.networkPolicy;
    this._nodeConfig.internalValue = config.nodeConfig;
    this._nodePool = config.nodePool;
    this._podSecurityPolicyConfig.internalValue = config.podSecurityPolicyConfig;
    this._privateClusterConfig.internalValue = config.privateClusterConfig;
    this._releaseChannel.internalValue = config.releaseChannel;
    this._resourceUsageExportConfig.internalValue = config.resourceUsageExportConfig;
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
    return this.getBooleanAttribute('enable_autopilot') as any;
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
    return this.getBooleanAttribute('enable_binary_authorization') as any;
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
    return this.getBooleanAttribute('enable_intranode_visibility') as any;
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
    return this.getBooleanAttribute('enable_kubernetes_alpha') as any;
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
    return this.getBooleanAttribute('enable_legacy_abac') as any;
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

  // enable_shielded_nodes - computed: true, optional: true, required: false
  private _enableShieldedNodes?: boolean | cdktf.IResolvable; 
  public get enableShieldedNodes() {
    return this.getBooleanAttribute('enable_shielded_nodes') as any;
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
    return this.getBooleanAttribute('enable_tpu') as any;
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
  public get id() {
    return this.getStringAttribute('id');
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
    return this.getBooleanAttribute('remove_default_node_pool') as any;
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
  private _resourceLabels?: { [key: string]: string } | cdktf.IResolvable; 
  public get resourceLabels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('resource_labels') as any;
  }
  public set resourceLabels(value: { [key: string]: string } | cdktf.IResolvable) {
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
  private _addonsConfig = new ContainerClusterAddonsConfigOutputReference(this as any, "addons_config", true);
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
  private _authenticatorGroupsConfig = new ContainerClusterAuthenticatorGroupsConfigOutputReference(this as any, "authenticator_groups_config", true);
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

  // cluster_autoscaling - computed: false, optional: true, required: false
  private _clusterAutoscaling = new ContainerClusterClusterAutoscalingOutputReference(this as any, "cluster_autoscaling", true);
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

  // database_encryption - computed: false, optional: true, required: false
  private _databaseEncryption = new ContainerClusterDatabaseEncryptionOutputReference(this as any, "database_encryption", true);
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
  private _defaultSnatStatus = new ContainerClusterDefaultSnatStatusOutputReference(this as any, "default_snat_status", true);
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

  // ip_allocation_policy - computed: false, optional: true, required: false
  private _ipAllocationPolicy = new ContainerClusterIpAllocationPolicyOutputReference(this as any, "ip_allocation_policy", true);
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
  private _loggingConfig = new ContainerClusterLoggingConfigOutputReference(this as any, "logging_config", true);
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
  private _maintenancePolicy = new ContainerClusterMaintenancePolicyOutputReference(this as any, "maintenance_policy", true);
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
  private _masterAuth = new ContainerClusterMasterAuthOutputReference(this as any, "master_auth", true);
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
  private _masterAuthorizedNetworksConfig = new ContainerClusterMasterAuthorizedNetworksConfigOutputReference(this as any, "master_authorized_networks_config", true);
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

  // monitoring_config - computed: false, optional: true, required: false
  private _monitoringConfig = new ContainerClusterMonitoringConfigOutputReference(this as any, "monitoring_config", true);
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
  private _networkPolicy = new ContainerClusterNetworkPolicyOutputReference(this as any, "network_policy", true);
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
  private _nodeConfig = new ContainerClusterNodeConfigOutputReference(this as any, "node_config", true);
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
  private _nodePool?: ContainerClusterNodePool[]; 
  public get nodePool() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('node_pool') as any;
  }
  public set nodePool(value: ContainerClusterNodePool[]) {
    this._nodePool = value;
  }
  public resetNodePool() {
    this._nodePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolInput() {
    return this._nodePool;
  }

  // pod_security_policy_config - computed: false, optional: true, required: false
  private _podSecurityPolicyConfig = new ContainerClusterPodSecurityPolicyConfigOutputReference(this as any, "pod_security_policy_config", true);
  public get podSecurityPolicyConfig() {
    return this._podSecurityPolicyConfig;
  }
  public putPodSecurityPolicyConfig(value: ContainerClusterPodSecurityPolicyConfig) {
    this._podSecurityPolicyConfig.internalValue = value;
  }
  public resetPodSecurityPolicyConfig() {
    this._podSecurityPolicyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSecurityPolicyConfigInput() {
    return this._podSecurityPolicyConfig.internalValue;
  }

  // private_cluster_config - computed: false, optional: true, required: false
  private _privateClusterConfig = new ContainerClusterPrivateClusterConfigOutputReference(this as any, "private_cluster_config", true);
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
  private _releaseChannel = new ContainerClusterReleaseChannelOutputReference(this as any, "release_channel", true);
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
  private _resourceUsageExportConfig = new ContainerClusterResourceUsageExportConfigOutputReference(this as any, "resource_usage_export_config", true);
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerClusterTimeoutsOutputReference(this as any, "timeouts", true);
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
  private _verticalPodAutoscaling = new ContainerClusterVerticalPodAutoscalingOutputReference(this as any, "vertical_pod_autoscaling", true);
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
  private _workloadIdentityConfig = new ContainerClusterWorkloadIdentityConfigOutputReference(this as any, "workload_identity_config", true);
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
      initial_node_count: cdktf.numberToTerraform(this._initialNodeCount),
      location: cdktf.stringToTerraform(this._location),
      logging_service: cdktf.stringToTerraform(this._loggingService),
      min_master_version: cdktf.stringToTerraform(this._minMasterVersion),
      monitoring_service: cdktf.stringToTerraform(this._monitoringService),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      networking_mode: cdktf.stringToTerraform(this._networkingMode),
      node_locations: cdktf.listMapper(cdktf.stringToTerraform)(this._nodeLocations),
      node_version: cdktf.stringToTerraform(this._nodeVersion),
      private_ipv6_google_access: cdktf.stringToTerraform(this._privateIpv6GoogleAccess),
      project: cdktf.stringToTerraform(this._project),
      remove_default_node_pool: cdktf.booleanToTerraform(this._removeDefaultNodePool),
      resource_labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._resourceLabels),
      subnetwork: cdktf.stringToTerraform(this._subnetwork),
      addons_config: containerClusterAddonsConfigToTerraform(this._addonsConfig.internalValue),
      authenticator_groups_config: containerClusterAuthenticatorGroupsConfigToTerraform(this._authenticatorGroupsConfig.internalValue),
      cluster_autoscaling: containerClusterClusterAutoscalingToTerraform(this._clusterAutoscaling.internalValue),
      database_encryption: containerClusterDatabaseEncryptionToTerraform(this._databaseEncryption.internalValue),
      default_snat_status: containerClusterDefaultSnatStatusToTerraform(this._defaultSnatStatus.internalValue),
      ip_allocation_policy: containerClusterIpAllocationPolicyToTerraform(this._ipAllocationPolicy.internalValue),
      logging_config: containerClusterLoggingConfigToTerraform(this._loggingConfig.internalValue),
      maintenance_policy: containerClusterMaintenancePolicyToTerraform(this._maintenancePolicy.internalValue),
      master_auth: containerClusterMasterAuthToTerraform(this._masterAuth.internalValue),
      master_authorized_networks_config: containerClusterMasterAuthorizedNetworksConfigToTerraform(this._masterAuthorizedNetworksConfig.internalValue),
      monitoring_config: containerClusterMonitoringConfigToTerraform(this._monitoringConfig.internalValue),
      network_policy: containerClusterNetworkPolicyToTerraform(this._networkPolicy.internalValue),
      node_config: containerClusterNodeConfigToTerraform(this._nodeConfig.internalValue),
      node_pool: cdktf.listMapper(containerClusterNodePoolToTerraform)(this._nodePool),
      pod_security_policy_config: containerClusterPodSecurityPolicyConfigToTerraform(this._podSecurityPolicyConfig.internalValue),
      private_cluster_config: containerClusterPrivateClusterConfigToTerraform(this._privateClusterConfig.internalValue),
      release_channel: containerClusterReleaseChannelToTerraform(this._releaseChannel.internalValue),
      resource_usage_export_config: containerClusterResourceUsageExportConfigToTerraform(this._resourceUsageExportConfig.internalValue),
      timeouts: containerClusterTimeoutsToTerraform(this._timeouts.internalValue),
      vertical_pod_autoscaling: containerClusterVerticalPodAutoscalingToTerraform(this._verticalPodAutoscaling.internalValue),
      workload_identity_config: containerClusterWorkloadIdentityConfigToTerraform(this._workloadIdentityConfig.internalValue),
    };
  }
}
