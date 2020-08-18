// https://www.terraform.io/docs/providers/google/r/container_node_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ContainerNodePoolConfig extends TerraformMetaArguments {
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
  /** The region of the cluster */
  readonly region?: string;
  /** The Kubernetes version for the nodes in this pool. Note that if this field and auto_upgrade are both specified, they will fight each other for what the node version should be, so setting both is highly discouraged. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way. */
  readonly version?: string;
  /** The zone of the cluster */
  readonly zone?: string;
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
export interface ContainerNodePoolManagement {
  /** Whether the nodes will be automatically repaired. */
  readonly autoRepair?: boolean;
  /** Whether the nodes will be automatically upgraded. */
  readonly autoUpgrade?: boolean;
}
export interface ContainerNodePoolNodeConfigGuestAccelerator {
  readonly count?: number;
  readonly type?: string;
}
export interface ContainerNodePoolNodeConfigTaint {
  readonly effect?: string;
  readonly key?: string;
  readonly value?: string;
}
export interface ContainerNodePoolNodeConfigSandboxConfig {
  readonly sandboxType: string;
}
export interface ContainerNodePoolNodeConfigShieldedInstanceConfig {
  readonly enableIntegrityMonitoring?: boolean;
  readonly enableSecureBoot?: boolean;
}
export interface ContainerNodePoolNodeConfigWorkloadMetadataConfig {
  readonly nodeMetadata: string;
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
  /** sandbox_config block */
  readonly sandboxConfig?: ContainerNodePoolNodeConfigSandboxConfig[];
  /** shielded_instance_config block */
  readonly shieldedInstanceConfig?: ContainerNodePoolNodeConfigShieldedInstanceConfig[];
  /** workload_metadata_config block */
  readonly workloadMetadataConfig?: ContainerNodePoolNodeConfigWorkloadMetadataConfig[];
}
export interface ContainerNodePoolTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}
export interface ContainerNodePoolUpgradeSettings {
  /** The number of additional nodes that can be added to the node pool during an upgrade. Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater. */
  readonly maxSurge: number;
  /** The number of nodes that can be simultaneously unavailable during an upgrade. Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater. */
  readonly maxUnavailable: number;
}

// Resource

export class ContainerNodePool extends TerraformResource {

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
    this._region = config.region;
    this._version = config.version;
    this._zone = config.zone;
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
    return this._cluster;
  }
  public set cluster(value: string) {
    this._cluster = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // initial_node_count - computed: true, optional: true, required: false
  private _initialNodeCount?: number;
  public get initialNodeCount() {
    return this._initialNodeCount ?? this.getNumberAttribute('initial_node_count');
  }
  public set initialNodeCount(value: number | undefined) {
    this._initialNodeCount = value;
  }

  // instance_group_urls - computed: true, optional: false, required: true
  public get instanceGroupUrls() {
    return this.getListAttribute('instance_group_urls');
  }

  // location - computed: true, optional: true, required: false
  private _location?: string;
  public get location() {
    return this._location ?? this.getStringAttribute('location');
  }
  public set location(value: string | undefined) {
    this._location = value;
  }

  // max_pods_per_node - computed: true, optional: true, required: false
  private _maxPodsPerNode?: number;
  public get maxPodsPerNode() {
    return this._maxPodsPerNode ?? this.getNumberAttribute('max_pods_per_node');
  }
  public set maxPodsPerNode(value: number | undefined) {
    this._maxPodsPerNode = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this._namePrefix ?? this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }

  // node_count - computed: true, optional: true, required: false
  private _nodeCount?: number;
  public get nodeCount() {
    return this._nodeCount ?? this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number | undefined) {
    this._nodeCount = value;
  }

  // node_locations - computed: true, optional: true, required: false
  private _nodeLocations?: string[];
  public get nodeLocations() {
    return this._nodeLocations ?? this.getListAttribute('node_locations');
  }
  public set nodeLocations(value: string[] | undefined) {
    this._nodeLocations = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string;
  public get version() {
    return this._version ?? this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
    this._version = value;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string;
  public get zone() {
    return this._zone ?? this.getStringAttribute('zone');
  }
  public set zone(value: string | undefined) {
    this._zone = value;
  }

  // autoscaling - computed: false, optional: true, required: false
  private _autoscaling?: ContainerNodePoolAutoscaling[];
  public get autoscaling() {
    return this._autoscaling;
  }
  public set autoscaling(value: ContainerNodePoolAutoscaling[] | undefined) {
    this._autoscaling = value;
  }

  // management - computed: false, optional: true, required: false
  private _management?: ContainerNodePoolManagement[];
  public get management() {
    return this._management;
  }
  public set management(value: ContainerNodePoolManagement[] | undefined) {
    this._management = value;
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig?: ContainerNodePoolNodeConfig[];
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public set nodeConfig(value: ContainerNodePoolNodeConfig[] | undefined) {
    this._nodeConfig = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ContainerNodePoolTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ContainerNodePoolTimeouts | undefined) {
    this._timeouts = value;
  }

  // upgrade_settings - computed: false, optional: true, required: false
  private _upgradeSettings?: ContainerNodePoolUpgradeSettings[];
  public get upgradeSettings() {
    return this._upgradeSettings;
  }
  public set upgradeSettings(value: ContainerNodePoolUpgradeSettings[] | undefined) {
    this._upgradeSettings = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: this._cluster,
      initial_node_count: this._initialNodeCount,
      location: this._location,
      max_pods_per_node: this._maxPodsPerNode,
      name: this._name,
      name_prefix: this._namePrefix,
      node_count: this._nodeCount,
      node_locations: this._nodeLocations,
      project: this._project,
      region: this._region,
      version: this._version,
      zone: this._zone,
      autoscaling: this._autoscaling,
      management: this._management,
      node_config: this._nodeConfig,
      timeouts: this._timeouts,
      upgrade_settings: this._upgradeSettings,
    };
  }
}
