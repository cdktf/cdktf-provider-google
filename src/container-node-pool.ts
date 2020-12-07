// https://www.terraform.io/docs/providers/google/r/container_node_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerNodePoolConfig extends cdktf.TerraformMetaArguments {
  /** The cluster to create the node pool for. Cluster must be present in location provided for zonal clusters. */
  readonly cluster: string;
  /** The initial number of nodes for the pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource. */
  readonly initialNodeCount?: number;
  /** The location (region or zone) of the cluster. */
  readonly location?: string;
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
  /** The ID of the project in which to create the node pool. If blank, the provider-configured project will be used. */
  readonly project?: string;
  /** The Kubernetes version for the nodes in this pool. Note that if this field and auto_upgrade are both specified, they will fight each other for what the node version should be, so setting both is highly discouraged. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way. */
  readonly version?: string;
  /** autoscaling block */
  readonly autoscaling?: ContainerNodePoolAutoscaling[];
  /** management block */
  readonly management?: ContainerNodePoolManagement[];
  /** node_config block */
  readonly nodeConfig?: ContainerNodePoolNodeConfig[];
  /** timeouts block */
  readonly timeouts?: ContainerNodePoolTimeouts;
  /** upgrade_settings block */
  readonly upgradeSettings?: ContainerNodePoolUpgradeSettings[];
}
export interface ContainerNodePoolAutoscaling {
  /** Maximum number of nodes in the NodePool. Must be >= min_node_count. */
  readonly maxNodeCount: number;
  /** Minimum number of nodes in the NodePool. Must be >=0 and <= max_node_count. */
  readonly minNodeCount: number;
}

function containerNodePoolAutoscalingToTerraform(struct?: ContainerNodePoolAutoscaling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
  }
}

export interface ContainerNodePoolManagement {
  /** Whether the nodes will be automatically repaired. */
  readonly autoRepair?: boolean;
  /** Whether the nodes will be automatically upgraded. */
  readonly autoUpgrade?: boolean;
}

function containerNodePoolManagementToTerraform(struct?: ContainerNodePoolManagement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_repair: cdktf.booleanToTerraform(struct!.autoRepair),
    auto_upgrade: cdktf.booleanToTerraform(struct!.autoUpgrade),
  }
}

export interface ContainerNodePoolNodeConfigGuestAccelerator {
  readonly count?: number;
  readonly type?: string;
}

function containerNodePoolNodeConfigGuestAcceleratorToTerraform(struct?: ContainerNodePoolNodeConfigGuestAccelerator): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface ContainerNodePoolNodeConfigTaint {
  readonly effect?: string;
  readonly key?: string;
  readonly value?: string;
}

function containerNodePoolNodeConfigTaintToTerraform(struct?: ContainerNodePoolNodeConfigTaint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface ContainerNodePoolNodeConfigShieldedInstanceConfig {
  readonly enableIntegrityMonitoring?: boolean;
  readonly enableSecureBoot?: boolean;
}

function containerNodePoolNodeConfigShieldedInstanceConfigToTerraform(struct?: ContainerNodePoolNodeConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}

export interface ContainerNodePoolNodeConfigWorkloadMetadataConfig {
  readonly nodeMetadata: string;
}

function containerNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct?: ContainerNodePoolNodeConfigWorkloadMetadataConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    node_metadata: cdktf.stringToTerraform(struct!.nodeMetadata),
  }
}

export interface ContainerNodePoolNodeConfig {
  readonly diskSizeGb?: number;
  readonly diskType?: string;
  readonly guestAccelerator?: ContainerNodePoolNodeConfigGuestAccelerator[];
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
  readonly taint?: ContainerNodePoolNodeConfigTaint[];
  /** shielded_instance_config block */
  readonly shieldedInstanceConfig?: ContainerNodePoolNodeConfigShieldedInstanceConfig[];
  /** workload_metadata_config block */
  readonly workloadMetadataConfig?: ContainerNodePoolNodeConfigWorkloadMetadataConfig[];
}

function containerNodePoolNodeConfigToTerraform(struct?: ContainerNodePoolNodeConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    guest_accelerator: cdktf.listMapper(containerNodePoolNodeConfigGuestAcceleratorToTerraform)(struct!.guestAccelerator),
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
    taint: cdktf.listMapper(containerNodePoolNodeConfigTaintToTerraform)(struct!.taint),
    shielded_instance_config: cdktf.listMapper(containerNodePoolNodeConfigShieldedInstanceConfigToTerraform)(struct!.shieldedInstanceConfig),
    workload_metadata_config: cdktf.listMapper(containerNodePoolNodeConfigWorkloadMetadataConfigToTerraform)(struct!.workloadMetadataConfig),
  }
}

export interface ContainerNodePoolTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function containerNodePoolTimeoutsToTerraform(struct?: ContainerNodePoolTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export interface ContainerNodePoolUpgradeSettings {
  /** The number of additional nodes that can be added to the node pool during an upgrade. Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater. */
  readonly maxSurge: number;
  /** The number of nodes that can be simultaneously unavailable during an upgrade. Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater. */
  readonly maxUnavailable: number;
}

function containerNodePoolUpgradeSettingsToTerraform(struct?: ContainerNodePoolUpgradeSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}


// Resource

export class ContainerNodePool extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ContainerNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_node_pool',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cluster = config.cluster;
    this._initialNodeCount = config.initialNodeCount;
    this._location = config.location;
    this._maxPodsPerNode = config.maxPodsPerNode;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._nodeCount = config.nodeCount;
    this._nodeLocations = config.nodeLocations;
    this._project = config.project;
    this._version = config.version;
    this._autoscaling = config.autoscaling;
    this._management = config.management;
    this._nodeConfig = config.nodeConfig;
    this._timeouts = config.timeouts;
    this._upgradeSettings = config.upgradeSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: false, required: true
  private _cluster: string;
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._initialNodeCount
  }

  // instance_group_urls - computed: true, optional: false, required: false
  public get instanceGroupUrls() {
    return this.getListAttribute('instance_group_urls');
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
    return this._maxPodsPerNode
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
    return this._name
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
    return this._namePrefix
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
    return this._nodeCount
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
    return this._version
  }

  // autoscaling - computed: false, optional: true, required: false
  private _autoscaling?: ContainerNodePoolAutoscaling[];
  public get autoscaling() {
    return this.interpolationForAttribute('autoscaling') as any;
  }
  public set autoscaling(value: ContainerNodePoolAutoscaling[] ) {
    this._autoscaling = value;
  }
  public resetAutoscaling() {
    this._autoscaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling
  }

  // management - computed: false, optional: true, required: false
  private _management?: ContainerNodePoolManagement[];
  public get management() {
    return this.interpolationForAttribute('management') as any;
  }
  public set management(value: ContainerNodePoolManagement[] ) {
    this._management = value;
  }
  public resetManagement() {
    this._management = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig?: ContainerNodePoolNodeConfig[];
  public get nodeConfig() {
    return this.interpolationForAttribute('node_config') as any;
  }
  public set nodeConfig(value: ContainerNodePoolNodeConfig[] ) {
    this._nodeConfig = value;
  }
  public resetNodeConfig() {
    this._nodeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ContainerNodePoolTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ContainerNodePoolTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // upgrade_settings - computed: false, optional: true, required: false
  private _upgradeSettings?: ContainerNodePoolUpgradeSettings[];
  public get upgradeSettings() {
    return this.interpolationForAttribute('upgrade_settings') as any;
  }
  public set upgradeSettings(value: ContainerNodePoolUpgradeSettings[] ) {
    this._upgradeSettings = value;
  }
  public resetUpgradeSettings() {
    this._upgradeSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSettingsInput() {
    return this._upgradeSettings
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      initial_node_count: cdktf.numberToTerraform(this._initialNodeCount),
      location: cdktf.stringToTerraform(this._location),
      max_pods_per_node: cdktf.numberToTerraform(this._maxPodsPerNode),
      name: cdktf.stringToTerraform(this._name),
      name_prefix: cdktf.stringToTerraform(this._namePrefix),
      node_count: cdktf.numberToTerraform(this._nodeCount),
      node_locations: cdktf.listMapper(cdktf.stringToTerraform)(this._nodeLocations),
      project: cdktf.stringToTerraform(this._project),
      version: cdktf.stringToTerraform(this._version),
      autoscaling: cdktf.listMapper(containerNodePoolAutoscalingToTerraform)(this._autoscaling),
      management: cdktf.listMapper(containerNodePoolManagementToTerraform)(this._management),
      node_config: cdktf.listMapper(containerNodePoolNodeConfigToTerraform)(this._nodeConfig),
      timeouts: containerNodePoolTimeoutsToTerraform(this._timeouts),
      upgrade_settings: cdktf.listMapper(containerNodePoolUpgradeSettingsToTerraform)(this._upgradeSettings),
    };
  }
}
