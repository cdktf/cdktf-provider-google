// https://www.terraform.io/docs/providers/google/r/data_google_container_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleContainerClusterConfig extends cdktf.TerraformMetaArguments {
  /** The location (region or zone) in which the cluster master will be created, as well as the default node location. If you specify a zone (such as us-central1-a), the cluster will be a zonal cluster with a single cluster master. If you specify a region (such as us-west1), the cluster will be a regional cluster with multiple masters spread across zones in the region, and with default node locations in those zones as well. */
  readonly location?: string;
  /** The name of the cluster, unique within the project and location. */
  readonly name: string;
  /** The ID of the project in which the resource belongs. If it is not provided, the provider project is used. */
  readonly project?: string;
}
export class DataGoogleContainerClusterAddonsConfigCloudrunConfig extends cdktf.ComplexComputedList {

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // load_balancer_type - computed: true, optional: false, required: false
  public get loadBalancerType() {
    return this.getStringAttribute('load_balancer_type');
  }
}
export class DataGoogleContainerClusterAddonsConfigHorizontalPodAutoscaling extends cdktf.ComplexComputedList {

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
}
export class DataGoogleContainerClusterAddonsConfigHttpLoadBalancing extends cdktf.ComplexComputedList {

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
}
export class DataGoogleContainerClusterAddonsConfigNetworkPolicyConfig extends cdktf.ComplexComputedList {

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
}
export class DataGoogleContainerClusterAddonsConfig extends cdktf.ComplexComputedList {

  // cloudrun_config - computed: true, optional: false, required: false
  public get cloudrunConfig() {
    return this.interpolationForAttribute('cloudrun_config') as any;
  }

  // horizontal_pod_autoscaling - computed: true, optional: false, required: false
  public get horizontalPodAutoscaling() {
    return this.interpolationForAttribute('horizontal_pod_autoscaling') as any;
  }

  // http_load_balancing - computed: true, optional: false, required: false
  public get httpLoadBalancing() {
    return this.interpolationForAttribute('http_load_balancing') as any;
  }

  // network_policy_config - computed: true, optional: false, required: false
  public get networkPolicyConfig() {
    return this.interpolationForAttribute('network_policy_config') as any;
  }
}
export class DataGoogleContainerClusterAuthenticatorGroupsConfig extends cdktf.ComplexComputedList {

  // security_group - computed: true, optional: false, required: false
  public get securityGroup() {
    return this.getStringAttribute('security_group');
  }
}
export class DataGoogleContainerClusterClusterAutoscalingAutoProvisioningDefaults extends cdktf.ComplexComputedList {

  // oauth_scopes - computed: true, optional: false, required: false
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
}
export class DataGoogleContainerClusterClusterAutoscalingResourceLimits extends cdktf.ComplexComputedList {

  // maximum - computed: true, optional: false, required: false
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }

  // minimum - computed: true, optional: false, required: false
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}
export class DataGoogleContainerClusterClusterAutoscaling extends cdktf.ComplexComputedList {

  // auto_provisioning_defaults - computed: true, optional: false, required: false
  public get autoProvisioningDefaults() {
    return this.interpolationForAttribute('auto_provisioning_defaults') as any;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // resource_limits - computed: true, optional: false, required: false
  public get resourceLimits() {
    return this.interpolationForAttribute('resource_limits') as any;
  }
}
export class DataGoogleContainerClusterDatabaseEncryption extends cdktf.ComplexComputedList {

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export class DataGoogleContainerClusterDefaultSnatStatus extends cdktf.ComplexComputedList {

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
}
export class DataGoogleContainerClusterIpAllocationPolicy extends cdktf.ComplexComputedList {

  // cluster_ipv4_cidr_block - computed: true, optional: false, required: false
  public get clusterIpv4CidrBlock() {
    return this.getStringAttribute('cluster_ipv4_cidr_block');
  }

  // cluster_secondary_range_name - computed: true, optional: false, required: false
  public get clusterSecondaryRangeName() {
    return this.getStringAttribute('cluster_secondary_range_name');
  }

  // services_ipv4_cidr_block - computed: true, optional: false, required: false
  public get servicesIpv4CidrBlock() {
    return this.getStringAttribute('services_ipv4_cidr_block');
  }

  // services_secondary_range_name - computed: true, optional: false, required: false
  public get servicesSecondaryRangeName() {
    return this.getStringAttribute('services_secondary_range_name');
  }
}
export class DataGoogleContainerClusterMaintenancePolicyDailyMaintenanceWindow extends cdktf.ComplexComputedList {

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}
export class DataGoogleContainerClusterMaintenancePolicyMaintenanceExclusion extends cdktf.ComplexComputedList {

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // exclusion_name - computed: true, optional: false, required: false
  public get exclusionName() {
    return this.getStringAttribute('exclusion_name');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}
export class DataGoogleContainerClusterMaintenancePolicyRecurringWindow extends cdktf.ComplexComputedList {

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // recurrence - computed: true, optional: false, required: false
  public get recurrence() {
    return this.getStringAttribute('recurrence');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}
export class DataGoogleContainerClusterMaintenancePolicy extends cdktf.ComplexComputedList {

  // daily_maintenance_window - computed: true, optional: false, required: false
  public get dailyMaintenanceWindow() {
    return this.interpolationForAttribute('daily_maintenance_window') as any;
  }

  // maintenance_exclusion - computed: true, optional: false, required: false
  public get maintenanceExclusion() {
    return this.interpolationForAttribute('maintenance_exclusion') as any;
  }

  // recurring_window - computed: true, optional: false, required: false
  public get recurringWindow() {
    return this.interpolationForAttribute('recurring_window') as any;
  }
}
export class DataGoogleContainerClusterMasterAuthClientCertificateConfig extends cdktf.ComplexComputedList {

  // issue_client_certificate - computed: true, optional: false, required: false
  public get issueClientCertificate() {
    return this.getBooleanAttribute('issue_client_certificate');
  }
}
export class DataGoogleContainerClusterMasterAuth extends cdktf.ComplexComputedList {

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_certificate_config - computed: true, optional: false, required: false
  public get clientCertificateConfig() {
    return this.interpolationForAttribute('client_certificate_config') as any;
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_ca_certificate - computed: true, optional: false, required: false
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export class DataGoogleContainerClusterMasterAuthorizedNetworksConfigCidrBlocks extends cdktf.ComplexComputedList {

  // cidr_block - computed: true, optional: false, required: false
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
}
export class DataGoogleContainerClusterMasterAuthorizedNetworksConfig extends cdktf.ComplexComputedList {

  // cidr_blocks - computed: true, optional: false, required: false
  public get cidrBlocks() {
    return this.interpolationForAttribute('cidr_blocks') as any;
  }
}
export class DataGoogleContainerClusterNetworkPolicy extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // provider - computed: true, optional: false, required: false
  public get provider() {
    return this.getStringAttribute('provider');
  }
}
export class DataGoogleContainerClusterNodeConfigGuestAccelerator extends cdktf.ComplexComputedList {

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataGoogleContainerClusterNodeConfigShieldedInstanceConfig extends cdktf.ComplexComputedList {

  // enable_integrity_monitoring - computed: true, optional: false, required: false
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }

  // enable_secure_boot - computed: true, optional: false, required: false
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
}
export class DataGoogleContainerClusterNodeConfigTaint extends cdktf.ComplexComputedList {

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataGoogleContainerClusterNodeConfigWorkloadMetadataConfig extends cdktf.ComplexComputedList {

  // node_metadata - computed: true, optional: false, required: false
  public get nodeMetadata() {
    return this.getStringAttribute('node_metadata');
  }
}
export class DataGoogleContainerClusterNodeConfig extends cdktf.ComplexComputedList {

  // disk_size_gb - computed: true, optional: false, required: false
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // guest_accelerator - computed: true, optional: false, required: false
  public get guestAccelerator() {
    return this.interpolationForAttribute('guest_accelerator') as any;
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }

  // local_ssd_count - computed: true, optional: false, required: false
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }

  // min_cpu_platform - computed: true, optional: false, required: false
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }

  // oauth_scopes - computed: true, optional: false, required: false
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }

  // preemptible - computed: true, optional: false, required: false
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // shielded_instance_config - computed: true, optional: false, required: false
  public get shieldedInstanceConfig() {
    return this.interpolationForAttribute('shielded_instance_config') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // taint - computed: true, optional: false, required: false
  public get taint() {
    return this.interpolationForAttribute('taint') as any;
  }

  // workload_metadata_config - computed: true, optional: false, required: false
  public get workloadMetadataConfig() {
    return this.interpolationForAttribute('workload_metadata_config') as any;
  }
}
export class DataGoogleContainerClusterNodePoolAutoscaling extends cdktf.ComplexComputedList {

  // max_node_count - computed: true, optional: false, required: false
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }

  // min_node_count - computed: true, optional: false, required: false
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
}
export class DataGoogleContainerClusterNodePoolManagement extends cdktf.ComplexComputedList {

  // auto_repair - computed: true, optional: false, required: false
  public get autoRepair() {
    return this.getBooleanAttribute('auto_repair');
  }

  // auto_upgrade - computed: true, optional: false, required: false
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
  }
}
export class DataGoogleContainerClusterNodePoolNodeConfigGuestAccelerator extends cdktf.ComplexComputedList {

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataGoogleContainerClusterNodePoolNodeConfigShieldedInstanceConfig extends cdktf.ComplexComputedList {

  // enable_integrity_monitoring - computed: true, optional: false, required: false
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
  }

  // enable_secure_boot - computed: true, optional: false, required: false
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot');
  }
}
export class DataGoogleContainerClusterNodePoolNodeConfigTaint extends cdktf.ComplexComputedList {

  // effect - computed: true, optional: false, required: false
  public get effect() {
    return this.getStringAttribute('effect');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class DataGoogleContainerClusterNodePoolNodeConfigWorkloadMetadataConfig extends cdktf.ComplexComputedList {

  // node_metadata - computed: true, optional: false, required: false
  public get nodeMetadata() {
    return this.getStringAttribute('node_metadata');
  }
}
export class DataGoogleContainerClusterNodePoolNodeConfig extends cdktf.ComplexComputedList {

  // disk_size_gb - computed: true, optional: false, required: false
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }

  // disk_type - computed: true, optional: false, required: false
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }

  // guest_accelerator - computed: true, optional: false, required: false
  public get guestAccelerator() {
    return this.interpolationForAttribute('guest_accelerator') as any;
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }

  // local_ssd_count - computed: true, optional: false, required: false
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }

  // machine_type - computed: true, optional: false, required: false
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }

  // metadata - computed: true, optional: false, required: false
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }

  // min_cpu_platform - computed: true, optional: false, required: false
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }

  // oauth_scopes - computed: true, optional: false, required: false
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }

  // preemptible - computed: true, optional: false, required: false
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }

  // service_account - computed: true, optional: false, required: false
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }

  // shielded_instance_config - computed: true, optional: false, required: false
  public get shieldedInstanceConfig() {
    return this.interpolationForAttribute('shielded_instance_config') as any;
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // taint - computed: true, optional: false, required: false
  public get taint() {
    return this.interpolationForAttribute('taint') as any;
  }

  // workload_metadata_config - computed: true, optional: false, required: false
  public get workloadMetadataConfig() {
    return this.interpolationForAttribute('workload_metadata_config') as any;
  }
}
export class DataGoogleContainerClusterNodePoolUpgradeSettings extends cdktf.ComplexComputedList {

  // max_surge - computed: true, optional: false, required: false
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }

  // max_unavailable - computed: true, optional: false, required: false
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
}
export class DataGoogleContainerClusterNodePool extends cdktf.ComplexComputedList {

  // autoscaling - computed: true, optional: false, required: false
  public get autoscaling() {
    return this.interpolationForAttribute('autoscaling') as any;
  }

  // initial_node_count - computed: true, optional: false, required: false
  public get initialNodeCount() {
    return this.getNumberAttribute('initial_node_count');
  }

  // instance_group_urls - computed: true, optional: false, required: false
  public get instanceGroupUrls() {
    return this.getListAttribute('instance_group_urls');
  }

  // management - computed: true, optional: false, required: false
  public get management() {
    return this.interpolationForAttribute('management') as any;
  }

  // max_pods_per_node - computed: true, optional: false, required: false
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_prefix - computed: true, optional: false, required: false
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }

  // node_config - computed: true, optional: false, required: false
  public get nodeConfig() {
    return this.interpolationForAttribute('node_config') as any;
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // node_locations - computed: true, optional: false, required: false
  public get nodeLocations() {
    return this.getListAttribute('node_locations');
  }

  // upgrade_settings - computed: true, optional: false, required: false
  public get upgradeSettings() {
    return this.interpolationForAttribute('upgrade_settings') as any;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}
export class DataGoogleContainerClusterPodSecurityPolicyConfig extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class DataGoogleContainerClusterPrivateClusterConfigMasterGlobalAccessConfig extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class DataGoogleContainerClusterPrivateClusterConfig extends cdktf.ComplexComputedList {

  // enable_private_endpoint - computed: true, optional: false, required: false
  public get enablePrivateEndpoint() {
    return this.getBooleanAttribute('enable_private_endpoint');
  }

  // enable_private_nodes - computed: true, optional: false, required: false
  public get enablePrivateNodes() {
    return this.getBooleanAttribute('enable_private_nodes');
  }

  // master_global_access_config - computed: true, optional: false, required: false
  public get masterGlobalAccessConfig() {
    return this.interpolationForAttribute('master_global_access_config') as any;
  }

  // master_ipv4_cidr_block - computed: true, optional: false, required: false
  public get masterIpv4CidrBlock() {
    return this.getStringAttribute('master_ipv4_cidr_block');
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
}
export class DataGoogleContainerClusterReleaseChannel extends cdktf.ComplexComputedList {

  // channel - computed: true, optional: false, required: false
  public get channel() {
    return this.getStringAttribute('channel');
  }
}
export class DataGoogleContainerClusterResourceUsageExportConfigBigqueryDestination extends cdktf.ComplexComputedList {

  // dataset_id - computed: true, optional: false, required: false
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
}
export class DataGoogleContainerClusterResourceUsageExportConfig extends cdktf.ComplexComputedList {

  // bigquery_destination - computed: true, optional: false, required: false
  public get bigqueryDestination() {
    return this.interpolationForAttribute('bigquery_destination') as any;
  }

  // enable_network_egress_metering - computed: true, optional: false, required: false
  public get enableNetworkEgressMetering() {
    return this.getBooleanAttribute('enable_network_egress_metering');
  }

  // enable_resource_consumption_metering - computed: true, optional: false, required: false
  public get enableResourceConsumptionMetering() {
    return this.getBooleanAttribute('enable_resource_consumption_metering');
  }
}
export class DataGoogleContainerClusterVerticalPodAutoscaling extends cdktf.ComplexComputedList {

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export class DataGoogleContainerClusterWorkloadIdentityConfig extends cdktf.ComplexComputedList {

  // identity_namespace - computed: true, optional: false, required: false
  public get identityNamespace() {
    return this.getStringAttribute('identity_namespace');
  }
}

// Resource

export class DataGoogleContainerCluster extends cdktf.TerraformDataSource {

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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addons_config - computed: true, optional: false, required: false
  public addonsConfig(index: string) {
    return new DataGoogleContainerClusterAddonsConfig(this, 'addons_config', index);
  }

  // authenticator_groups_config - computed: true, optional: false, required: false
  public authenticatorGroupsConfig(index: string) {
    return new DataGoogleContainerClusterAuthenticatorGroupsConfig(this, 'authenticator_groups_config', index);
  }

  // cluster_autoscaling - computed: true, optional: false, required: false
  public clusterAutoscaling(index: string) {
    return new DataGoogleContainerClusterClusterAutoscaling(this, 'cluster_autoscaling', index);
  }

  // cluster_ipv4_cidr - computed: true, optional: false, required: false
  public get clusterIpv4Cidr() {
    return this.getStringAttribute('cluster_ipv4_cidr');
  }

  // database_encryption - computed: true, optional: false, required: false
  public databaseEncryption(index: string) {
    return new DataGoogleContainerClusterDatabaseEncryption(this, 'database_encryption', index);
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
  public defaultSnatStatus(index: string) {
    return new DataGoogleContainerClusterDefaultSnatStatus(this, 'default_snat_status', index);
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_binary_authorization - computed: true, optional: false, required: false
  public get enableBinaryAuthorization() {
    return this.getBooleanAttribute('enable_binary_authorization');
  }

  // enable_intranode_visibility - computed: true, optional: false, required: false
  public get enableIntranodeVisibility() {
    return this.getBooleanAttribute('enable_intranode_visibility');
  }

  // enable_kubernetes_alpha - computed: true, optional: false, required: false
  public get enableKubernetesAlpha() {
    return this.getBooleanAttribute('enable_kubernetes_alpha');
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

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initial_node_count - computed: true, optional: false, required: false
  public get initialNodeCount() {
    return this.getNumberAttribute('initial_node_count');
  }

  // instance_group_urls - computed: true, optional: false, required: false
  public get instanceGroupUrls() {
    return this.getListAttribute('instance_group_urls');
  }

  // ip_allocation_policy - computed: true, optional: false, required: false
  public ipAllocationPolicy(index: string) {
    return new DataGoogleContainerClusterIpAllocationPolicy(this, 'ip_allocation_policy', index);
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
  public set location(value: string ) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // logging_service - computed: true, optional: false, required: false
  public get loggingService() {
    return this.getStringAttribute('logging_service');
  }

  // maintenance_policy - computed: true, optional: false, required: false
  public maintenancePolicy(index: string) {
    return new DataGoogleContainerClusterMaintenancePolicy(this, 'maintenance_policy', index);
  }

  // master_auth - computed: true, optional: false, required: false
  public masterAuth(index: string) {
    return new DataGoogleContainerClusterMasterAuth(this, 'master_auth', index);
  }

  // master_authorized_networks_config - computed: true, optional: false, required: false
  public masterAuthorizedNetworksConfig(index: string) {
    return new DataGoogleContainerClusterMasterAuthorizedNetworksConfig(this, 'master_authorized_networks_config', index);
  }

  // master_version - computed: true, optional: false, required: false
  public get masterVersion() {
    return this.getStringAttribute('master_version');
  }

  // min_master_version - computed: true, optional: false, required: false
  public get minMasterVersion() {
    return this.getStringAttribute('min_master_version');
  }

  // monitoring_service - computed: true, optional: false, required: false
  public get monitoringService() {
    return this.getStringAttribute('monitoring_service');
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

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // network_policy - computed: true, optional: false, required: false
  public networkPolicy(index: string) {
    return new DataGoogleContainerClusterNetworkPolicy(this, 'network_policy', index);
  }

  // node_config - computed: true, optional: false, required: false
  public nodeConfig(index: string) {
    return new DataGoogleContainerClusterNodeConfig(this, 'node_config', index);
  }

  // node_locations - computed: true, optional: false, required: false
  public get nodeLocations() {
    return this.getListAttribute('node_locations');
  }

  // node_pool - computed: true, optional: false, required: false
  public nodePool(index: string) {
    return new DataGoogleContainerClusterNodePool(this, 'node_pool', index);
  }

  // node_version - computed: true, optional: false, required: false
  public get nodeVersion() {
    return this.getStringAttribute('node_version');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // pod_security_policy_config - computed: true, optional: false, required: false
  public podSecurityPolicyConfig(index: string) {
    return new DataGoogleContainerClusterPodSecurityPolicyConfig(this, 'pod_security_policy_config', index);
  }

  // private_cluster_config - computed: true, optional: false, required: false
  public privateClusterConfig(index: string) {
    return new DataGoogleContainerClusterPrivateClusterConfig(this, 'private_cluster_config', index);
  }

  // project - computed: false, optional: true, required: false
  private _project?: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string ) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // release_channel - computed: true, optional: false, required: false
  public releaseChannel(index: string) {
    return new DataGoogleContainerClusterReleaseChannel(this, 'release_channel', index);
  }

  // remove_default_node_pool - computed: true, optional: false, required: false
  public get removeDefaultNodePool() {
    return this.getBooleanAttribute('remove_default_node_pool');
  }

  // resource_labels - computed: true, optional: false, required: false
  public resourceLabels(key: string): string {
    return new cdktf.StringMap(this, 'resource_labels').lookup(key);
  }

  // resource_usage_export_config - computed: true, optional: false, required: false
  public resourceUsageExportConfig(index: string) {
    return new DataGoogleContainerClusterResourceUsageExportConfig(this, 'resource_usage_export_config', index);
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
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
  public verticalPodAutoscaling(index: string) {
    return new DataGoogleContainerClusterVerticalPodAutoscaling(this, 'vertical_pod_autoscaling', index);
  }

  // workload_identity_config - computed: true, optional: false, required: false
  public workloadIdentityConfig(index: string) {
    return new DataGoogleContainerClusterWorkloadIdentityConfig(this, 'workload_identity_config', index);
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
