// https://www.terraform.io/docs/providers/google/r/data_google_container_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";
import { StringMap } from "cdktf";

// Configuration

export interface DataGoogleContainerClusterConfig extends TerraformMetaArguments {
  /** The location (region or zone) in which the cluster master will be created, as well as the default node location. If you specify a zone (such as us-central1-a), the cluster will be a zonal cluster with a single cluster master. If you specify a region (such as us-west1), the cluster will be a regional cluster with multiple masters spread across zones in the region, and with default node locations in those zones as well. */
  readonly location?: string;
  /** The name of the cluster, unique within the project and location. */
  readonly name: string;
  /** The ID of the project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** The region in which the cluster master will be created. Zone and region have been removed in favor of location. */
  readonly region?: string;
  /** The zone in which the cluster master will be created. Zone and region have been removed in favor of location. */
  readonly zone?: string;
}
export class DataGoogleContainerClusterAddonsConfigCloudrunConfig extends ComplexComputedList {

  // disabled - computed: true, optional: false, required: true
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
}
export class DataGoogleContainerClusterAddonsConfigHorizontalPodAutoscaling extends ComplexComputedList {

  // disabled - computed: true, optional: false, required: true
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
}
export class DataGoogleContainerClusterAddonsConfigHttpLoadBalancing extends ComplexComputedList {

  // disabled - computed: true, optional: false, required: true
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
}
export class DataGoogleContainerClusterAddonsConfigKubernetesDashboard extends ComplexComputedList {

  // disabled - computed: true, optional: false, required: true
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
}
export class DataGoogleContainerClusterAddonsConfigNetworkPolicyConfig extends ComplexComputedList {

  // disabled - computed: true, optional: false, required: true
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
}
export class DataGoogleContainerClusterAddonsConfig extends ComplexComputedList {

  // cloudrun_config - computed: true, optional: false, required: true
  public get cloudrunConfig() {
    return 'not implemented' as any;
  }

  // horizontal_pod_autoscaling - computed: true, optional: false, required: true
  public get horizontalPodAutoscaling() {
    return 'not implemented' as any;
  }

  // http_load_balancing - computed: true, optional: false, required: true
  public get httpLoadBalancing() {
    return 'not implemented' as any;
  }

  // kubernetes_dashboard - computed: true, optional: false, required: true
  public get kubernetesDashboard() {
    return 'not implemented' as any;
  }

  // network_policy_config - computed: true, optional: false, required: true
  public get networkPolicyConfig() {
    return 'not implemented' as any;
  }
}
export class DataGoogleContainerClusterAuthenticatorGroupsConfig extends ComplexComputedList {

  // security_group - computed: true, optional: false, required: true
  public get securityGroup() {
    return this.getStringAttribute('security_group');
  }
}
export class DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaults extends ComplexComputedList {

  // oauth_scopes - computed: true, optional: false, required: true
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }

  // service_account - computed: true, optional: false, required: true
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
}
export class DataGoogleContainerClusterClusterAutoscalingResourceLimits extends ComplexComputedList {

  // maximum - computed: true, optional: false, required: true
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: true
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // resource_type - computed: true, optional: false, required: true
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}
export class DataGoogleContainerClusterClusterAutoscaling extends ComplexComputedList {

  // auto_provisioning_defaults - computed: true, optional: false, required: true
  public get autoProvisioningDefaults() {
    return 'not implemented' as any;
  }

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // resource_limits - computed: true, optional: false, required: true
  public get resourceLimits() {
    return 'not implemented' as any;
  }
}
export class DataGoogleContainerClusterDatabaseEncryption extends ComplexComputedList {

  // key_name - computed: true, optional: false, required: true
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }
}
export class DataGoogleContainerClusterIpAllocationPolicy extends ComplexComputedList {

  // cluster_ipv4_cidr_block - computed: true, optional: false, required: true
  public get clusterIpv4CidrBlock() {
    return this.getStringAttribute('cluster_ipv4_cidr_block');
  }

  // cluster_secondary_range_name - computed: true, optional: false, required: true
  public get clusterSecondaryRangeName() {
    return this.getStringAttribute('cluster_secondary_range_name');
  }

  // node_ipv4_cidr_block - computed: true, optional: false, required: true
  public get nodeIpv4CidrBlock() {
    return this.getStringAttribute('node_ipv4_cidr_block');
  }

  // services_ipv4_cidr_block - computed: true, optional: false, required: true
  public get servicesIpv4CidrBlock() {
    return this.getStringAttribute('services_ipv4_cidr_block');
  }

  // services_secondary_range_name - computed: true, optional: false, required: true
  public get servicesSecondaryRangeName() {
    return this.getStringAttribute('services_secondary_range_name');
  }

  // subnetwork_name - computed: true, optional: false, required: true
  public get subnetworkName() {
    return this.getStringAttribute('subnetwork_name');
  }
}
export class DataGoogleContainerClusterMaintenancePolicyDailyMaintenanceWindow extends ComplexComputedList {

  // duration - computed: true, optional: false, required: true
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // start_time - computed: true, optional: false, required: true
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}
export class DataGoogleContainerClusterMaintenancePolicyRecurringWindow extends ComplexComputedList {

  // end_time - computed: true, optional: false, required: true
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // recurrence - computed: true, optional: false, required: true
  public get recurrence() {
    return this.getStringAttribute('recurrence');
  }

  // start_time - computed: true, optional: false, required: true
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}
export class DataGoogleContainerClusterMaintenancePolicy extends ComplexComputedList {

  // daily_maintenance_window - computed: true, optional: false, required: true
  public get dailyMaintenanceWindow() {
    return 'not implemented' as any;
  }

  // recurring_window - computed: true, optional: false, required: true
  public get recurringWindow() {
    return 'not implemented' as any;
  }
}
export class DataGoogleContainerClusterMasterAuthClientCertificateConfig extends ComplexComputedList {

  // issue_client_certificate - computed: true, optional: false, required: true
  public get issueClientCertificate() {
    return this.getBooleanAttribute('issue_client_certificate');
  }
}
export class DataGoogleContainerClusterMasterAuth extends ComplexComputedList {

  // client_certificate - computed: true, optional: false, required: true
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_certificate_config - computed: true, optional: false, required: true
  public get clientCertificateConfig() {
    return 'not implemented' as any;
  }

  // client_key - computed: true, optional: false, required: true
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_ca_certificate - computed: true, optional: false, required: true
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // password - computed: true, optional: false, required: true
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: true
  public get username() {
    return this.getStringAttribute('username');
  }
}
export class DataGoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks extends ComplexComputedList {

  // cidr_block - computed: true, optional: false, required: true
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // display_name - computed: true, optional: false, required: true
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
}
export class DataGoogleContainerClusterMasterAuthorizedNetworksConfig extends ComplexComputedList {

  // cidr_blocks - computed: true, optional: false, required: true
  public get cidrBlocks() {
    return 'not implemented' as any;
  }
}
export class DataGoogleContainerClusterNetworkPolicy extends ComplexComputedList {

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // provider - computed: true, optional: false, required: true
  public get provider() {
    return this.getStringAttribute('provider');
  }
}
export class DataGoogleContainerClusterNodeConfigGuestAccelerator extends ComplexComputedList {

  // count - computed: true, optional: false, required: true
  public get count() {
    return this.getNumberAttribute('count');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataGoogleContainerClusterNodeConfigSandboxConfig extends ComplexComputedList {

  // sandbox_type - computed: true, optional: false, required: true
  public get sandboxType() {
    return this.getStringAttribute('sandbox_type');
  }
}
export class DataGoogleContainerClusterNodeConfigShieldedInstanceConfig extends ComplexComputedList {

  // enable_integrity_monitoring - computed: true, optional: false, required: true
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }

  // enable_secure_boot - computed: true, optional: false, required: true
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
}
export class DataGoogleContainerClusterNodeConfigTaint extends ComplexComputedList {

  // effect - computed: true, optional: false, required: true
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataGoogleContainerClusterNodeConfigWorkloadMetadataConfig extends ComplexComputedList {

  // node_metadata - computed: true, optional: false, required: true
  public get nodeMetadata() {
    return this.getStringAttribute('node_metadata');
  }
}
export class DataGoogleContainerClusterNodeConfig extends ComplexComputedList {

  // disk_size_gb - computed: true, optional: false, required: true
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // disk_type - computed: true, optional: false, required: true
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // guest_accelerator - computed: true, optional: false, required: true
  public get guestAccelerator() {
    return 'not implemented' as any;
  }

  // image_type - computed: true, optional: false, required: true
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // labels - computed: true, optional: false, required: true
  public get labels() {
    return 'not implemented' as any;
  }

  // local_ssd_count - computed: true, optional: false, required: true
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }

  // machine_type - computed: true, optional: false, required: true
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // metadata - computed: true, optional: false, required: true
  public get metadata() {
    return 'not implemented' as any;
  }

  // min_cpu_platform - computed: true, optional: false, required: true
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }

  // oauth_scopes - computed: true, optional: false, required: true
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }

  // preemptible - computed: true, optional: false, required: true
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }

  // sandbox_config - computed: true, optional: false, required: true
  public get sandboxConfig() {
    return 'not implemented' as any;
  }

  // service_account - computed: true, optional: false, required: true
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // shielded_instance_config - computed: true, optional: false, required: true
  public get shieldedInstanceConfig() {
    return 'not implemented' as any;
  }

  // tags - computed: true, optional: false, required: true
  public get tags() {
    return this.getListAttribute('tags');
  }

  // taint - computed: true, optional: false, required: true
  public get taint() {
    return 'not implemented' as any;
  }

  // workload_metadata_config - computed: true, optional: false, required: true
  public get workloadMetadataConfig() {
    return 'not implemented' as any;
  }
}
export class DataGoogleContainerClusterNodePoolAutoscaling extends ComplexComputedList {

  // max_node_count - computed: true, optional: false, required: true
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }

  // min_node_count - computed: true, optional: false, required: true
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
}
export class DataGoogleContainerClusterNodePoolManagement extends ComplexComputedList {

  // auto_repair - computed: true, optional: false, required: true
  public get autoRepair() {
    return this.getBooleanAttribute('auto_repair');
  }

  // auto_upgrade - computed: true, optional: false, required: true
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
  }
}
export class DataGoogleContainerClusterNodePoolNodeConfigGuestAccelerator extends ComplexComputedList {

  // count - computed: true, optional: false, required: true
  public get count() {
    return this.getNumberAttribute('count');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataGoogleContainerClusterNodePoolNodeConfigSandboxConfig extends ComplexComputedList {

  // sandbox_type - computed: true, optional: false, required: true
  public get sandboxType() {
    return this.getStringAttribute('sandbox_type');
  }
}
export class DataGoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfig extends ComplexComputedList {

  // enable_integrity_monitoring - computed: true, optional: false, required: true
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }

  // enable_secure_boot - computed: true, optional: false, required: true
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
}
export class DataGoogleContainerClusterNodePoolNodeConfigTaint extends ComplexComputedList {

  // effect - computed: true, optional: false, required: true
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: true
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: true
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataGoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig extends ComplexComputedList {

  // node_metadata - computed: true, optional: false, required: true
  public get nodeMetadata() {
    return this.getStringAttribute('node_metadata');
  }
}
export class DataGoogleContainerClusterNodePoolNodeConfig extends ComplexComputedList {

  // disk_size_gb - computed: true, optional: false, required: true
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // disk_type - computed: true, optional: false, required: true
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // guest_accelerator - computed: true, optional: false, required: true
  public get guestAccelerator() {
    return 'not implemented' as any;
  }

  // image_type - computed: true, optional: false, required: true
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // labels - computed: true, optional: false, required: true
  public get labels() {
    return 'not implemented' as any;
  }

  // local_ssd_count - computed: true, optional: false, required: true
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }

  // machine_type - computed: true, optional: false, required: true
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // metadata - computed: true, optional: false, required: true
  public get metadata() {
    return 'not implemented' as any;
  }

  // min_cpu_platform - computed: true, optional: false, required: true
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }

  // oauth_scopes - computed: true, optional: false, required: true
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }

  // preemptible - computed: true, optional: false, required: true
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }

  // sandbox_config - computed: true, optional: false, required: true
  public get sandboxConfig() {
    return 'not implemented' as any;
  }

  // service_account - computed: true, optional: false, required: true
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // shielded_instance_config - computed: true, optional: false, required: true
  public get shieldedInstanceConfig() {
    return 'not implemented' as any;
  }

  // tags - computed: true, optional: false, required: true
  public get tags() {
    return this.getListAttribute('tags');
  }

  // taint - computed: true, optional: false, required: true
  public get taint() {
    return 'not implemented' as any;
  }

  // workload_metadata_config - computed: true, optional: false, required: true
  public get workloadMetadataConfig() {
    return 'not implemented' as any;
  }
}
export class DataGoogleContainerClusterNodePoolUpgradeSettings extends ComplexComputedList {

  // max_surge - computed: true, optional: false, required: true
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }

  // max_unavailable - computed: true, optional: false, required: true
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
}
export class DataGoogleContainerClusterNodePool extends ComplexComputedList {

  // autoscaling - computed: true, optional: false, required: true
  public get autoscaling() {
    return 'not implemented' as any;
  }

  // initial_node_count - computed: true, optional: false, required: true
  public get initialNodeCount() {
    return this.getNumberAttribute('initial_node_count');
  }

  // instance_group_urls - computed: true, optional: false, required: true
  public get instanceGroupUrls() {
    return this.getListAttribute('instance_group_urls');
  }

  // management - computed: true, optional: false, required: true
  public get management() {
    return 'not implemented' as any;
  }

  // max_pods_per_node - computed: true, optional: false, required: true
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_prefix - computed: true, optional: false, required: true
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }

  // node_config - computed: true, optional: false, required: true
  public get nodeConfig() {
    return 'not implemented' as any;
  }

  // node_count - computed: true, optional: false, required: true
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // node_locations - computed: true, optional: false, required: true
  public get nodeLocations() {
    return this.getListAttribute('node_locations');
  }

  // upgrade_settings - computed: true, optional: false, required: true
  public get upgradeSettings() {
    return 'not implemented' as any;
  }

  // version - computed: true, optional: false, required: true
  public get version() {
    return this.getStringAttribute('version');
  }
}
export class DataGoogleContainerClusterPodSecurityPolicyConfig extends ComplexComputedList {

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class DataGoogleContainerClusterPrivateClusterConfig extends ComplexComputedList {

  // enable_private_endpoint - computed: true, optional: false, required: true
  public get enablePrivateEndpoint() {
    return this.getBooleanAttribute('enable_private_endpoint');
  }

  // enable_private_nodes - computed: true, optional: false, required: true
  public get enablePrivateNodes() {
    return this.getBooleanAttribute('enable_private_nodes');
  }

  // master_ipv4_cidr_block - computed: true, optional: false, required: true
  public get masterIpv4CidrBlock() {
    return this.getStringAttribute('master_ipv4_cidr_block');
  }

  // peering_name - computed: true, optional: false, required: true
  public get peeringName() {
    return this.getStringAttribute('peering_name');
  }

  // private_endpoint - computed: true, optional: false, required: true
  public get privateEndpoint() {
    return this.getStringAttribute('private_endpoint');
  }

  // public_endpoint - computed: true, optional: false, required: true
  public get publicEndpoint() {
    return this.getStringAttribute('public_endpoint');
  }
}
export class DataGoogleContainerClusterReleaseChannel extends ComplexComputedList {

  // channel - computed: true, optional: false, required: true
  public get channel() {
    return this.getStringAttribute('channel');
  }
}
export class DataGoogleContainerClusterResourceUsageExportConfigBigqueryDestination extends ComplexComputedList {

  // dataset_id - computed: true, optional: false, required: true
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
}
export class DataGoogleContainerClusterResourceUsageExportConfig extends ComplexComputedList {

  // bigquery_destination - computed: true, optional: false, required: true
  public get bigqueryDestination() {
    return 'not implemented' as any;
  }

  // enable_network_egress_metering - computed: true, optional: false, required: true
  public get enableNetworkEgressMetering() {
    return this.getBooleanAttribute('enable_network_egress_metering');
  }

  // enable_resource_consumption_metering - computed: true, optional: false, required: true
  public get enableResourceConsumptionMetering() {
    return this.getBooleanAttribute('enable_resource_consumption_metering');
  }
}
export class DataGoogleContainerClusterVerticalPodAutoscaling extends ComplexComputedList {

  // enabled - computed: true, optional: false, required: true
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class DataGoogleContainerClusterWorkloadIdentityConfig extends ComplexComputedList {

  // identity_namespace - computed: true, optional: false, required: true
  public get identityNamespace() {
    return this.getStringAttribute('identity_namespace');
  }
}

// Resource

export class DataGoogleContainerCluster extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleContainerClusterConfig) {
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
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_zones - computed: true, optional: false, required: true
  public get additionalZones() {
    return this.getListAttribute('additional_zones');
  }

  // addons_config - computed: true, optional: false, required: true
  public addonsConfig(index: string) {
    return new DataGoogleContainerClusterAddonsConfig(this, 'addons_config', index);
  }

  // authenticator_groups_config - computed: true, optional: false, required: true
  public authenticatorGroupsConfig(index: string) {
    return new DataGoogleContainerClusterAuthenticatorGroupsConfig(this, 'authenticator_groups_config', index);
  }

  // cluster_autoscaling - computed: true, optional: false, required: true
  public clusterAutoscaling(index: string) {
    return new DataGoogleContainerClusterClusterAutoscaling(this, 'cluster_autoscaling', index);
  }

  // cluster_ipv4_cidr - computed: true, optional: false, required: true
  public get clusterIpv4Cidr() {
    return this.getStringAttribute('cluster_ipv4_cidr');
  }

  // database_encryption - computed: true, optional: false, required: true
  public databaseEncryption(index: string) {
    return new DataGoogleContainerClusterDatabaseEncryption(this, 'database_encryption', index);
  }

  // default_max_pods_per_node - computed: true, optional: false, required: true
  public get defaultMaxPodsPerNode() {
    return this.getNumberAttribute('default_max_pods_per_node');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_binary_authorization - computed: true, optional: false, required: true
  public get enableBinaryAuthorization() {
    return this.getBooleanAttribute('enable_binary_authorization');
  }

  // enable_intranode_visibility - computed: true, optional: false, required: true
  public get enableIntranodeVisibility() {
    return this.getBooleanAttribute('enable_intranode_visibility');
  }

  // enable_kubernetes_alpha - computed: true, optional: false, required: true
  public get enableKubernetesAlpha() {
    return this.getBooleanAttribute('enable_kubernetes_alpha');
  }

  // enable_legacy_abac - computed: true, optional: false, required: true
  public get enableLegacyAbac() {
    return this.getBooleanAttribute('enable_legacy_abac');
  }

  // enable_shielded_nodes - computed: true, optional: false, required: true
  public get enableShieldedNodes() {
    return this.getBooleanAttribute('enable_shielded_nodes');
  }

  // enable_tpu - computed: true, optional: false, required: true
  public get enableTpu() {
    return this.getBooleanAttribute('enable_tpu');
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

  // initial_node_count - computed: true, optional: false, required: true
  public get initialNodeCount() {
    return this.getNumberAttribute('initial_node_count');
  }

  // instance_group_urls - computed: true, optional: false, required: true
  public get instanceGroupUrls() {
    return this.getListAttribute('instance_group_urls');
  }

  // ip_allocation_policy - computed: true, optional: false, required: true
  public ipAllocationPolicy(index: string) {
    return new DataGoogleContainerClusterIpAllocationPolicy(this, 'ip_allocation_policy', index);
  }

  // label_fingerprint - computed: true, optional: false, required: true
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
  }

  // location - computed: false, optional: true, required: false
  private _location?: string;
  public get location() {
    return this._location;
  }
  public set location(value: string | undefined) {
    this._location = value;
  }

  // logging_service - computed: true, optional: false, required: true
  public get loggingService() {
    return this.getStringAttribute('logging_service');
  }

  // maintenance_policy - computed: true, optional: false, required: true
  public maintenancePolicy(index: string) {
    return new DataGoogleContainerClusterMaintenancePolicy(this, 'maintenance_policy', index);
  }

  // master_auth - computed: true, optional: false, required: true
  public masterAuth(index: string) {
    return new DataGoogleContainerClusterMasterAuth(this, 'master_auth', index);
  }

  // master_authorized_networks_config - computed: true, optional: false, required: true
  public masterAuthorizedNetworksConfig(index: string) {
    return new DataGoogleContainerClusterMasterAuthorizedNetworksConfig(this, 'master_authorized_networks_config', index);
  }

  // master_version - computed: true, optional: false, required: true
  public get masterVersion() {
    return this.getStringAttribute('master_version');
  }

  // min_master_version - computed: true, optional: false, required: true
  public get minMasterVersion() {
    return this.getStringAttribute('min_master_version');
  }

  // monitoring_service - computed: true, optional: false, required: true
  public get monitoringService() {
    return this.getStringAttribute('monitoring_service');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // network - computed: true, optional: false, required: true
  public get network() {
    return this.getStringAttribute('network');
  }

  // network_policy - computed: true, optional: false, required: true
  public networkPolicy(index: string) {
    return new DataGoogleContainerClusterNetworkPolicy(this, 'network_policy', index);
  }

  // node_config - computed: true, optional: false, required: true
  public nodeConfig(index: string) {
    return new DataGoogleContainerClusterNodeConfig(this, 'node_config', index);
  }

  // node_locations - computed: true, optional: false, required: true
  public get nodeLocations() {
    return this.getListAttribute('node_locations');
  }

  // node_pool - computed: true, optional: false, required: true
  public nodePool(index: string) {
    return new DataGoogleContainerClusterNodePool(this, 'node_pool', index);
  }

  // node_version - computed: true, optional: false, required: true
  public get nodeVersion() {
    return this.getStringAttribute('node_version');
  }

  // operation - computed: true, optional: false, required: true
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // pod_security_policy_config - computed: true, optional: false, required: true
  public podSecurityPolicyConfig(index: string) {
    return new DataGoogleContainerClusterPodSecurityPolicyConfig(this, 'pod_security_policy_config', index);
  }

  // private_cluster_config - computed: true, optional: false, required: true
  public privateClusterConfig(index: string) {
    return new DataGoogleContainerClusterPrivateClusterConfig(this, 'private_cluster_config', index);
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project;
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

  // release_channel - computed: true, optional: false, required: true
  public releaseChannel(index: string) {
    return new DataGoogleContainerClusterReleaseChannel(this, 'release_channel', index);
  }

  // remove_default_node_pool - computed: true, optional: false, required: true
  public get removeDefaultNodePool() {
    return this.getBooleanAttribute('remove_default_node_pool');
  }

  // resource_labels - computed: true, optional: false, required: true
  public resourceLabels(key: string): string {
    return new StringMap(this, 'resource_labels').lookup(key);
  }

  // resource_usage_export_config - computed: true, optional: false, required: true
  public resourceUsageExportConfig(index: string) {
    return new DataGoogleContainerClusterResourceUsageExportConfig(this, 'resource_usage_export_config', index);
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // services_ipv4_cidr - computed: true, optional: false, required: true
  public get servicesIpv4Cidr() {
    return this.getStringAttribute('services_ipv4_cidr');
  }

  // subnetwork - computed: true, optional: false, required: true
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }

  // vertical_pod_autoscaling - computed: true, optional: false, required: true
  public verticalPodAutoscaling(index: string) {
    return new DataGoogleContainerClusterVerticalPodAutoscaling(this, 'vertical_pod_autoscaling', index);
  }

  // workload_identity_config - computed: true, optional: false, required: true
  public workloadIdentityConfig(index: string) {
    return new DataGoogleContainerClusterWorkloadIdentityConfig(this, 'workload_identity_config', index);
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this._zone;
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: this._location,
      name: this._name,
      project: this._project,
      region: this._region,
      zone: this._zone,
    };
  }
}
