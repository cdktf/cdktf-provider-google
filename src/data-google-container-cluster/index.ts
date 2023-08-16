/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from terraform resource schema

import { DataGoogleContainerClusterAddonsConfigList, 
DataGoogleContainerClusterAuthenticatorGroupsConfigList, 
DataGoogleContainerClusterBinaryAuthorizationList, 
DataGoogleContainerClusterClusterAutoscalingList, 
DataGoogleContainerClusterConfidentialNodesList, 
DataGoogleContainerClusterCostManagementConfigList, 
DataGoogleContainerClusterDatabaseEncryptionList, 
DataGoogleContainerClusterDefaultSnatStatusList, 
DataGoogleContainerClusterDnsConfigList, 
DataGoogleContainerClusterEnableK8SBetaApisList, 
DataGoogleContainerClusterGatewayApiConfigList, 
DataGoogleContainerClusterIpAllocationPolicyList, 
DataGoogleContainerClusterLoggingConfigList, 
DataGoogleContainerClusterMaintenancePolicyList, 
DataGoogleContainerClusterMasterAuthList, 
DataGoogleContainerClusterMasterAuthorizedNetworksConfigList, 
DataGoogleContainerClusterMeshCertificatesList, 
DataGoogleContainerClusterMonitoringConfigList, 
DataGoogleContainerClusterNetworkPolicyList, 
DataGoogleContainerClusterNodeConfigList, 
DataGoogleContainerClusterNodePoolList, 
DataGoogleContainerClusterNodePoolDefaultsList, 
DataGoogleContainerClusterNotificationConfigList, 
DataGoogleContainerClusterPrivateClusterConfigList, 
DataGoogleContainerClusterReleaseChannelList, 
DataGoogleContainerClusterResourceUsageExportConfigList, 
DataGoogleContainerClusterSecurityPostureConfigList, 
DataGoogleContainerClusterServiceExternalIpsConfigList, 
DataGoogleContainerClusterVerticalPodAutoscalingList, 
DataGoogleContainerClusterWorkloadIdentityConfigList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataGoogleContainerClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/data-sources/container_cluster#id DataGoogleContainerCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location (region or zone) in which the cluster master will be created, as well as the default node location. If you specify a zone (such as us-central1-a), the cluster will be a zonal cluster with a single cluster master. If you specify a region (such as us-west1), the cluster will be a regional cluster with multiple masters spread across zones in the region, and with default node locations in those zones as well.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/data-sources/container_cluster#location DataGoogleContainerCluster#location}
  */
  readonly location?: string;
  /**
  * The name of the cluster, unique within the project and location.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/data-sources/container_cluster#name DataGoogleContainerCluster#name}
  */
  readonly name: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/data-sources/container_cluster#project DataGoogleContainerCluster#project}
  */
  readonly project?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/data-sources/container_cluster google_container_cluster}
*/
export class DataGoogleContainerCluster extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_container_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/4.78.0/docs/data-sources/container_cluster google_container_cluster} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleContainerClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleContainerClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.78.0',
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
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addons_config - computed: true, optional: false, required: false
  private _addonsConfig = new DataGoogleContainerClusterAddonsConfigList(this, "addons_config", false);
  public get addonsConfig() {
    return this._addonsConfig;
  }

  // allow_net_admin - computed: true, optional: false, required: false
  public get allowNetAdmin() {
    return this.getBooleanAttribute('allow_net_admin');
  }

  // authenticator_groups_config - computed: true, optional: false, required: false
  private _authenticatorGroupsConfig = new DataGoogleContainerClusterAuthenticatorGroupsConfigList(this, "authenticator_groups_config", false);
  public get authenticatorGroupsConfig() {
    return this._authenticatorGroupsConfig;
  }

  // binary_authorization - computed: true, optional: false, required: false
  private _binaryAuthorization = new DataGoogleContainerClusterBinaryAuthorizationList(this, "binary_authorization", false);
  public get binaryAuthorization() {
    return this._binaryAuthorization;
  }

  // cluster_autoscaling - computed: true, optional: false, required: false
  private _clusterAutoscaling = new DataGoogleContainerClusterClusterAutoscalingList(this, "cluster_autoscaling", false);
  public get clusterAutoscaling() {
    return this._clusterAutoscaling;
  }

  // cluster_ipv4_cidr - computed: true, optional: false, required: false
  public get clusterIpv4Cidr() {
    return this.getStringAttribute('cluster_ipv4_cidr');
  }

  // confidential_nodes - computed: true, optional: false, required: false
  private _confidentialNodes = new DataGoogleContainerClusterConfidentialNodesList(this, "confidential_nodes", false);
  public get confidentialNodes() {
    return this._confidentialNodes;
  }

  // cost_management_config - computed: true, optional: false, required: false
  private _costManagementConfig = new DataGoogleContainerClusterCostManagementConfigList(this, "cost_management_config", false);
  public get costManagementConfig() {
    return this._costManagementConfig;
  }

  // database_encryption - computed: true, optional: false, required: false
  private _databaseEncryption = new DataGoogleContainerClusterDatabaseEncryptionList(this, "database_encryption", false);
  public get databaseEncryption() {
    return this._databaseEncryption;
  }

  // datapath_provider - computed: true, optional: false, required: false
  public get datapathProvider() {
    return this.getStringAttribute('datapath_provider');
  }

  // default_max_pods_per_node - computed: true, optional: false, required: false
  public get defaultMaxPodsPerNode() {
    return this.getNumberAttribute('default_max_pods_per_node');
  }

  // default_snat_status - computed: true, optional: false, required: false
  private _defaultSnatStatus = new DataGoogleContainerClusterDefaultSnatStatusList(this, "default_snat_status", false);
  public get defaultSnatStatus() {
    return this._defaultSnatStatus;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dns_config - computed: true, optional: false, required: false
  private _dnsConfig = new DataGoogleContainerClusterDnsConfigList(this, "dns_config", false);
  public get dnsConfig() {
    return this._dnsConfig;
  }

  // enable_autopilot - computed: true, optional: false, required: false
  public get enableAutopilot() {
    return this.getBooleanAttribute('enable_autopilot');
  }

  // enable_binary_authorization - computed: true, optional: false, required: false
  public get enableBinaryAuthorization() {
    return this.getBooleanAttribute('enable_binary_authorization');
  }

  // enable_intranode_visibility - computed: true, optional: false, required: false
  public get enableIntranodeVisibility() {
    return this.getBooleanAttribute('enable_intranode_visibility');
  }

  // enable_k8s_beta_apis - computed: true, optional: false, required: false
  private _enableK8SBetaApis = new DataGoogleContainerClusterEnableK8SBetaApisList(this, "enable_k8s_beta_apis", false);
  public get enableK8SBetaApis() {
    return this._enableK8SBetaApis;
  }

  // enable_kubernetes_alpha - computed: true, optional: false, required: false
  public get enableKubernetesAlpha() {
    return this.getBooleanAttribute('enable_kubernetes_alpha');
  }

  // enable_l4_ilb_subsetting - computed: true, optional: false, required: false
  public get enableL4IlbSubsetting() {
    return this.getBooleanAttribute('enable_l4_ilb_subsetting');
  }

  // enable_legacy_abac - computed: true, optional: false, required: false
  public get enableLegacyAbac() {
    return this.getBooleanAttribute('enable_legacy_abac');
  }

  // enable_shielded_nodes - computed: true, optional: false, required: false
  public get enableShieldedNodes() {
    return this.getBooleanAttribute('enable_shielded_nodes');
  }

  // enable_tpu - computed: true, optional: false, required: false
  public get enableTpu() {
    return this.getBooleanAttribute('enable_tpu');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // gateway_api_config - computed: true, optional: false, required: false
  private _gatewayApiConfig = new DataGoogleContainerClusterGatewayApiConfigList(this, "gateway_api_config", false);
  public get gatewayApiConfig() {
    return this._gatewayApiConfig;
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

  // initial_node_count - computed: true, optional: false, required: false
  public get initialNodeCount() {
    return this.getNumberAttribute('initial_node_count');
  }

  // ip_allocation_policy - computed: true, optional: false, required: false
  private _ipAllocationPolicy = new DataGoogleContainerClusterIpAllocationPolicyList(this, "ip_allocation_policy", false);
  public get ipAllocationPolicy() {
    return this._ipAllocationPolicy;
  }

  // label_fingerprint - computed: true, optional: false, required: false
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
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

  // logging_config - computed: true, optional: false, required: false
  private _loggingConfig = new DataGoogleContainerClusterLoggingConfigList(this, "logging_config", false);
  public get loggingConfig() {
    return this._loggingConfig;
  }

  // logging_service - computed: true, optional: false, required: false
  public get loggingService() {
    return this.getStringAttribute('logging_service');
  }

  // maintenance_policy - computed: true, optional: false, required: false
  private _maintenancePolicy = new DataGoogleContainerClusterMaintenancePolicyList(this, "maintenance_policy", false);
  public get maintenancePolicy() {
    return this._maintenancePolicy;
  }

  // master_auth - computed: true, optional: false, required: false
  private _masterAuth = new DataGoogleContainerClusterMasterAuthList(this, "master_auth", false);
  public get masterAuth() {
    return this._masterAuth;
  }

  // master_authorized_networks_config - computed: true, optional: false, required: false
  private _masterAuthorizedNetworksConfig = new DataGoogleContainerClusterMasterAuthorizedNetworksConfigList(this, "master_authorized_networks_config", false);
  public get masterAuthorizedNetworksConfig() {
    return this._masterAuthorizedNetworksConfig;
  }

  // master_version - computed: true, optional: false, required: false
  public get masterVersion() {
    return this.getStringAttribute('master_version');
  }

  // mesh_certificates - computed: true, optional: false, required: false
  private _meshCertificates = new DataGoogleContainerClusterMeshCertificatesList(this, "mesh_certificates", false);
  public get meshCertificates() {
    return this._meshCertificates;
  }

  // min_master_version - computed: true, optional: false, required: false
  public get minMasterVersion() {
    return this.getStringAttribute('min_master_version');
  }

  // monitoring_config - computed: true, optional: false, required: false
  private _monitoringConfig = new DataGoogleContainerClusterMonitoringConfigList(this, "monitoring_config", false);
  public get monitoringConfig() {
    return this._monitoringConfig;
  }

  // monitoring_service - computed: true, optional: false, required: false
  public get monitoringService() {
    return this.getStringAttribute('monitoring_service');
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

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // network_policy - computed: true, optional: false, required: false
  private _networkPolicy = new DataGoogleContainerClusterNetworkPolicyList(this, "network_policy", false);
  public get networkPolicy() {
    return this._networkPolicy;
  }

  // networking_mode - computed: true, optional: false, required: false
  public get networkingMode() {
    return this.getStringAttribute('networking_mode');
  }

  // node_config - computed: true, optional: false, required: false
  private _nodeConfig = new DataGoogleContainerClusterNodeConfigList(this, "node_config", false);
  public get nodeConfig() {
    return this._nodeConfig;
  }

  // node_locations - computed: true, optional: false, required: false
  public get nodeLocations() {
    return cdktf.Fn.tolist(this.getListAttribute('node_locations'));
  }

  // node_pool - computed: true, optional: false, required: false
  private _nodePool = new DataGoogleContainerClusterNodePoolList(this, "node_pool", false);
  public get nodePool() {
    return this._nodePool;
  }

  // node_pool_defaults - computed: true, optional: false, required: false
  private _nodePoolDefaults = new DataGoogleContainerClusterNodePoolDefaultsList(this, "node_pool_defaults", false);
  public get nodePoolDefaults() {
    return this._nodePoolDefaults;
  }

  // node_version - computed: true, optional: false, required: false
  public get nodeVersion() {
    return this.getStringAttribute('node_version');
  }

  // notification_config - computed: true, optional: false, required: false
  private _notificationConfig = new DataGoogleContainerClusterNotificationConfigList(this, "notification_config", false);
  public get notificationConfig() {
    return this._notificationConfig;
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // private_cluster_config - computed: true, optional: false, required: false
  private _privateClusterConfig = new DataGoogleContainerClusterPrivateClusterConfigList(this, "private_cluster_config", false);
  public get privateClusterConfig() {
    return this._privateClusterConfig;
  }

  // private_ipv6_google_access - computed: true, optional: false, required: false
  public get privateIpv6GoogleAccess() {
    return this.getStringAttribute('private_ipv6_google_access');
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

  // release_channel - computed: true, optional: false, required: false
  private _releaseChannel = new DataGoogleContainerClusterReleaseChannelList(this, "release_channel", false);
  public get releaseChannel() {
    return this._releaseChannel;
  }

  // remove_default_node_pool - computed: true, optional: false, required: false
  public get removeDefaultNodePool() {
    return this.getBooleanAttribute('remove_default_node_pool');
  }

  // resource_labels - computed: true, optional: false, required: false
  private _resourceLabels = new cdktf.StringMap(this, "resource_labels");
  public get resourceLabels() {
    return this._resourceLabels;
  }

  // resource_usage_export_config - computed: true, optional: false, required: false
  private _resourceUsageExportConfig = new DataGoogleContainerClusterResourceUsageExportConfigList(this, "resource_usage_export_config", false);
  public get resourceUsageExportConfig() {
    return this._resourceUsageExportConfig;
  }

  // security_posture_config - computed: true, optional: false, required: false
  private _securityPostureConfig = new DataGoogleContainerClusterSecurityPostureConfigList(this, "security_posture_config", false);
  public get securityPostureConfig() {
    return this._securityPostureConfig;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // service_external_ips_config - computed: true, optional: false, required: false
  private _serviceExternalIpsConfig = new DataGoogleContainerClusterServiceExternalIpsConfigList(this, "service_external_ips_config", false);
  public get serviceExternalIpsConfig() {
    return this._serviceExternalIpsConfig;
  }

  // services_ipv4_cidr - computed: true, optional: false, required: false
  public get servicesIpv4Cidr() {
    return this.getStringAttribute('services_ipv4_cidr');
  }

  // subnetwork - computed: true, optional: false, required: false
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }

  // tpu_ipv4_cidr_block - computed: true, optional: false, required: false
  public get tpuIpv4CidrBlock() {
    return this.getStringAttribute('tpu_ipv4_cidr_block');
  }

  // vertical_pod_autoscaling - computed: true, optional: false, required: false
  private _verticalPodAutoscaling = new DataGoogleContainerClusterVerticalPodAutoscalingList(this, "vertical_pod_autoscaling", false);
  public get verticalPodAutoscaling() {
    return this._verticalPodAutoscaling;
  }

  // workload_identity_config - computed: true, optional: false, required: false
  private _workloadIdentityConfig = new DataGoogleContainerClusterWorkloadIdentityConfigList(this, "workload_identity_config", false);
  public get workloadIdentityConfig() {
    return this._workloadIdentityConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
