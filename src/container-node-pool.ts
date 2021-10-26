// https://www.terraform.io/docs/providers/google/r/container_node_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerNodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cluster to create the node pool for. Cluster must be present in location provided for zonal clusters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#cluster ContainerNodePool#cluster}
  */
  readonly cluster: string;
  /**
  * The initial number of nodes for the pool. In regional or multi-zonal clusters, this is the number of nodes per zone. Changing this will force recreation of the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#initial_node_count ContainerNodePool#initial_node_count}
  */
  readonly initialNodeCount?: number;
  /**
  * The location (region or zone) of the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#location ContainerNodePool#location}
  */
  readonly location?: string;
  /**
  * The maximum number of pods per node in this node pool. Note that this does not work on node pools which are "route-based" - that is, node pools belonging to clusters that do not have IP Aliasing enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#max_pods_per_node ContainerNodePool#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * The name of the node pool. If left blank, Terraform will auto-generate a unique name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#name ContainerNodePool#name}
  */
  readonly name?: string;
  /**
  * Creates a unique name for the node pool beginning with the specified prefix. Conflicts with name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#name_prefix ContainerNodePool#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * The number of nodes per instance group. This field can be used to update the number of nodes per instance group but should not be used alongside autoscaling.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#node_count ContainerNodePool#node_count}
  */
  readonly nodeCount?: number;
  /**
  * The list of zones in which the node pool's nodes should be located. Nodes must be in the region of their regional cluster or in the same region as their cluster's zone for zonal clusters. If unspecified, the cluster-level node_locations will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#node_locations ContainerNodePool#node_locations}
  */
  readonly nodeLocations?: string[];
  /**
  * The ID of the project in which to create the node pool. If blank, the provider-configured project will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#project ContainerNodePool#project}
  */
  readonly project?: string;
  /**
  * The Kubernetes version for the nodes in this pool. Note that if this field and auto_upgrade are both specified, they will fight each other for what the node version should be, so setting both is highly discouraged. While a fuzzy version can be specified, it's recommended that you specify explicit versions as Terraform will see spurious diffs when fuzzy versions are used. See the google_container_engine_versions data source's version_prefix field to approximate fuzzy versions in a Terraform-compatible way.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#version ContainerNodePool#version}
  */
  readonly version?: string;
  /**
  * autoscaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#autoscaling ContainerNodePool#autoscaling}
  */
  readonly autoscaling?: ContainerNodePoolAutoscaling;
  /**
  * management block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#management ContainerNodePool#management}
  */
  readonly management?: ContainerNodePoolManagement;
  /**
  * node_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#node_config ContainerNodePool#node_config}
  */
  readonly nodeConfig?: ContainerNodePoolNodeConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#timeouts ContainerNodePool#timeouts}
  */
  readonly timeouts?: ContainerNodePoolTimeouts;
  /**
  * upgrade_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#upgrade_settings ContainerNodePool#upgrade_settings}
  */
  readonly upgradeSettings?: ContainerNodePoolUpgradeSettings;
}
export interface ContainerNodePoolAutoscaling {
  /**
  * Maximum number of nodes in the NodePool. Must be >= min_node_count.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#max_node_count ContainerNodePool#max_node_count}
  */
  readonly maxNodeCount: number;
  /**
  * Minimum number of nodes in the NodePool. Must be >=0 and <= max_node_count.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#min_node_count ContainerNodePool#min_node_count}
  */
  readonly minNodeCount: number;
}

function containerNodePoolAutoscalingToTerraform(struct?: ContainerNodePoolAutoscalingOutputReference | ContainerNodePoolAutoscaling): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
  }
}

export class ContainerNodePoolAutoscalingOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._maxNodeCount
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
    return this._minNodeCount
  }
}
export interface ContainerNodePoolManagement {
  /**
  * Whether the nodes will be automatically repaired.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#auto_repair ContainerNodePool#auto_repair}
  */
  readonly autoRepair?: boolean | cdktf.IResolvable;
  /**
  * Whether the nodes will be automatically upgraded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#auto_upgrade ContainerNodePool#auto_upgrade}
  */
  readonly autoUpgrade?: boolean | cdktf.IResolvable;
}

function containerNodePoolManagementToTerraform(struct?: ContainerNodePoolManagementOutputReference | ContainerNodePoolManagement): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_repair: cdktf.booleanToTerraform(struct!.autoRepair),
    auto_upgrade: cdktf.booleanToTerraform(struct!.autoUpgrade),
  }
}

export class ContainerNodePoolManagementOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // auto_repair - computed: false, optional: true, required: false
  private _autoRepair?: boolean | cdktf.IResolvable | undefined; 
  public get autoRepair() {
    return this.getBooleanAttribute('auto_repair') as any;
  }
  public set autoRepair(value: boolean | cdktf.IResolvable | undefined) {
    this._autoRepair = value;
  }
  public resetAutoRepair() {
    this._autoRepair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRepairInput() {
    return this._autoRepair
  }

  // auto_upgrade - computed: false, optional: true, required: false
  private _autoUpgrade?: boolean | cdktf.IResolvable | undefined; 
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade') as any;
  }
  public set autoUpgrade(value: boolean | cdktf.IResolvable | undefined) {
    this._autoUpgrade = value;
  }
  public resetAutoUpgrade() {
    this._autoUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpgradeInput() {
    return this._autoUpgrade
  }
}
export interface ContainerNodePoolNodeConfigGuestAccelerator {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#count ContainerNodePool#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#gpu_partition_size ContainerNodePool#gpu_partition_size}
  */
  readonly gpuPartitionSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#type ContainerNodePool#type}
  */
  readonly type?: string;
}

function containerNodePoolNodeConfigGuestAcceleratorToTerraform(struct?: ContainerNodePoolNodeConfigGuestAccelerator): any {
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

export interface ContainerNodePoolNodeConfigTaint {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#effect ContainerNodePool#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#key ContainerNodePool#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#value ContainerNodePool#value}
  */
  readonly value?: string;
}

function containerNodePoolNodeConfigTaintToTerraform(struct?: ContainerNodePoolNodeConfigTaint): any {
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

export interface ContainerNodePoolNodeConfigShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#enable_integrity_monitoring ContainerNodePool#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#enable_secure_boot ContainerNodePool#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
}

function containerNodePoolNodeConfigShieldedInstanceConfigToTerraform(struct?: ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference | ContainerNodePoolNodeConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}

export class ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable | undefined; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring') as any;
  }
  public set enableIntegrityMonitoring(value: boolean | cdktf.IResolvable | undefined) {
    this._enableIntegrityMonitoring = value;
  }
  public resetEnableIntegrityMonitoring() {
    this._enableIntegrityMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIntegrityMonitoringInput() {
    return this._enableIntegrityMonitoring
  }

  // enable_secure_boot - computed: false, optional: true, required: false
  private _enableSecureBoot?: boolean | cdktf.IResolvable | undefined; 
  public get enableSecureBoot() {
    return this.getBooleanAttribute('enable_secure_boot') as any;
  }
  public set enableSecureBoot(value: boolean | cdktf.IResolvable | undefined) {
    this._enableSecureBoot = value;
  }
  public resetEnableSecureBoot() {
    this._enableSecureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSecureBootInput() {
    return this._enableSecureBoot
  }
}
export interface ContainerNodePoolNodeConfigWorkloadMetadataConfig {
  /**
  * Mode is the configuration for how to expose metadata to workloads running on the node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#mode ContainerNodePool#mode}
  */
  readonly mode?: string;
  /**
  * NodeMetadata is the configuration for how to expose metadata to the workloads running on the node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#node_metadata ContainerNodePool#node_metadata}
  */
  readonly nodeMetadata?: string;
}

function containerNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct?: ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference | ContainerNodePoolNodeConfigWorkloadMetadataConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    node_metadata: cdktf.stringToTerraform(struct!.nodeMetadata),
  }
}

export class ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string | undefined; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string | undefined) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode
  }

  // node_metadata - computed: true, optional: true, required: false
  private _nodeMetadata?: string | undefined; 
  public get nodeMetadata() {
    return this.getStringAttribute('node_metadata');
  }
  public set nodeMetadata(value: string | undefined) {
    this._nodeMetadata = value;
  }
  public resetNodeMetadata() {
    this._nodeMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeMetadataInput() {
    return this._nodeMetadata
  }
}
export interface ContainerNodePoolNodeConfig {
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#disk_size_gb ContainerNodePool#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Type of the disk attached to each node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#disk_type ContainerNodePool#disk_type}
  */
  readonly diskType?: string;
  /**
  * List of the type and count of accelerator cards attached to the instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#guest_accelerator ContainerNodePool#guest_accelerator}
  */
  readonly guestAccelerator?: ContainerNodePoolNodeConfigGuestAccelerator[];
  /**
  * The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#image_type ContainerNodePool#image_type}
  */
  readonly imageType?: string;
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#labels ContainerNodePool#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The number of local SSD disks to be attached to the node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#local_ssd_count ContainerNodePool#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * The name of a Google Compute Engine machine type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#machine_type ContainerNodePool#machine_type}
  */
  readonly machineType?: string;
  /**
  * The metadata key/value pairs assigned to instances in the cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#metadata ContainerNodePool#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#min_cpu_platform ContainerNodePool#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * The set of Google API scopes to be made available on all of the node VMs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#oauth_scopes ContainerNodePool#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * Whether the nodes are created as preemptible VM instances.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#preemptible ContainerNodePool#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#service_account ContainerNodePool#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * The list of instance tags applied to all nodes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#tags ContainerNodePool#tags}
  */
  readonly tags?: string[];
  /**
  * List of Kubernetes taints to be applied to each node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#taint ContainerNodePool#taint}
  */
  readonly taint?: ContainerNodePoolNodeConfigTaint[];
  /**
  * shielded_instance_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#shielded_instance_config ContainerNodePool#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: ContainerNodePoolNodeConfigShieldedInstanceConfig;
  /**
  * workload_metadata_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#workload_metadata_config ContainerNodePool#workload_metadata_config}
  */
  readonly workloadMetadataConfig?: ContainerNodePoolNodeConfigWorkloadMetadataConfig;
}

function containerNodePoolNodeConfigToTerraform(struct?: ContainerNodePoolNodeConfigOutputReference | ContainerNodePoolNodeConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
    shielded_instance_config: containerNodePoolNodeConfigShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    workload_metadata_config: containerNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct!.workloadMetadataConfig),
  }
}

export class ContainerNodePoolNodeConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // disk_size_gb - computed: true, optional: true, required: false
  private _diskSizeGb?: number | undefined; 
  public get diskSizeGb() {
    return this.getNumberAttribute('disk_size_gb');
  }
  public set diskSizeGb(value: number | undefined) {
    this._diskSizeGb = value;
  }
  public resetDiskSizeGb() {
    this._diskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeGbInput() {
    return this._diskSizeGb
  }

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string | undefined; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string | undefined) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType
  }

  // guest_accelerator - computed: true, optional: true, required: false
  private _guestAccelerator?: ContainerNodePoolNodeConfigGuestAccelerator[] | undefined; 
  public get guestAccelerator() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('guest_accelerator') as any;
  }
  public set guestAccelerator(value: ContainerNodePoolNodeConfigGuestAccelerator[] | undefined) {
    this._guestAccelerator = value;
  }
  public resetGuestAccelerator() {
    this._guestAccelerator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorInput() {
    return this._guestAccelerator
  }

  // image_type - computed: true, optional: true, required: false
  private _imageType?: string | undefined; 
  public get imageType() {
    return this.getStringAttribute('image_type');
  }
  public set imageType(value: string | undefined) {
    this._imageType = value;
  }
  public resetImageType() {
    this._imageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTypeInput() {
    return this._imageType
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // local_ssd_count - computed: true, optional: true, required: false
  private _localSsdCount?: number | undefined; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number | undefined) {
    this._localSsdCount = value;
  }
  public resetLocalSsdCount() {
    this._localSsdCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount
  }

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: string | undefined; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string | undefined) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get metadata() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
  }

  // min_cpu_platform - computed: false, optional: true, required: false
  private _minCpuPlatform?: string | undefined; 
  public get minCpuPlatform() {
    return this.getStringAttribute('min_cpu_platform');
  }
  public set minCpuPlatform(value: string | undefined) {
    this._minCpuPlatform = value;
  }
  public resetMinCpuPlatform() {
    this._minCpuPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuPlatformInput() {
    return this._minCpuPlatform
  }

  // oauth_scopes - computed: true, optional: true, required: false
  private _oauthScopes?: string[] | undefined; 
  public get oauthScopes() {
    return this.getListAttribute('oauth_scopes');
  }
  public set oauthScopes(value: string[] | undefined) {
    this._oauthScopes = value;
  }
  public resetOauthScopes() {
    this._oauthScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthScopesInput() {
    return this._oauthScopes
  }

  // preemptible - computed: false, optional: true, required: false
  private _preemptible?: boolean | cdktf.IResolvable | undefined; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible') as any;
  }
  public set preemptible(value: boolean | cdktf.IResolvable | undefined) {
    this._preemptible = value;
  }
  public resetPreemptible() {
    this._preemptible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInput() {
    return this._preemptible
  }

  // service_account - computed: true, optional: true, required: false
  private _serviceAccount?: string | undefined; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string | undefined) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[] | undefined; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[] | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // taint - computed: true, optional: true, required: false
  private _taint?: ContainerNodePoolNodeConfigTaint[] | undefined; 
  public get taint() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('taint') as any;
  }
  public set taint(value: ContainerNodePoolNodeConfigTaint[] | undefined) {
    this._taint = value;
  }
  public resetTaint() {
    this._taint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig?: ContainerNodePoolNodeConfigShieldedInstanceConfig | undefined; 
  private __shieldedInstanceConfigOutput = new ContainerNodePoolNodeConfigShieldedInstanceConfigOutputReference(this as any, "shielded_instance_config", true);
  public get shieldedInstanceConfig() {
    return this.__shieldedInstanceConfigOutput;
  }
  public putShieldedInstanceConfig(value: ContainerNodePoolNodeConfigShieldedInstanceConfig | undefined) {
    this._shieldedInstanceConfig = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig
  }

  // workload_metadata_config - computed: false, optional: true, required: false
  private _workloadMetadataConfig?: ContainerNodePoolNodeConfigWorkloadMetadataConfig | undefined; 
  private __workloadMetadataConfigOutput = new ContainerNodePoolNodeConfigWorkloadMetadataConfigOutputReference(this as any, "workload_metadata_config", true);
  public get workloadMetadataConfig() {
    return this.__workloadMetadataConfigOutput;
  }
  public putWorkloadMetadataConfig(value: ContainerNodePoolNodeConfigWorkloadMetadataConfig | undefined) {
    this._workloadMetadataConfig = value;
  }
  public resetWorkloadMetadataConfig() {
    this._workloadMetadataConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadMetadataConfigInput() {
    return this._workloadMetadataConfig
  }
}
export interface ContainerNodePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#create ContainerNodePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#delete ContainerNodePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#update ContainerNodePool#update}
  */
  readonly update?: string;
}

function containerNodePoolTimeoutsToTerraform(struct?: ContainerNodePoolTimeoutsOutputReference | ContainerNodePoolTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ContainerNodePoolTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}
export interface ContainerNodePoolUpgradeSettings {
  /**
  * The number of additional nodes that can be added to the node pool during an upgrade. Increasing max_surge raises the number of nodes that can be upgraded simultaneously. Can be set to 0 or greater.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#max_surge ContainerNodePool#max_surge}
  */
  readonly maxSurge: number;
  /**
  * The number of nodes that can be simultaneously unavailable during an upgrade. Increasing max_unavailable raises the number of nodes that can be upgraded in parallel. Can be set to 0 or greater.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html#max_unavailable ContainerNodePool#max_unavailable}
  */
  readonly maxUnavailable: number;
}

function containerNodePoolUpgradeSettingsToTerraform(struct?: ContainerNodePoolUpgradeSettingsOutputReference | ContainerNodePoolUpgradeSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}

export class ContainerNodePoolUpgradeSettingsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._maxSurge
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
    return this._maxUnavailable
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html google_container_node_pool}
*/
export class ContainerNodePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_container_node_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/container_node_pool.html google_container_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerNodePoolConfig
  */
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
  private _cluster?: string; 
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
  private _initialNodeCount?: number | undefined; 
  public get initialNodeCount() {
    return this.getNumberAttribute('initial_node_count');
  }
  public set initialNodeCount(value: number | undefined) {
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
  private _location?: string | undefined; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string | undefined) {
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
  private _maxPodsPerNode?: number | undefined; 
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }
  public set maxPodsPerNode(value: number | undefined) {
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
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
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
  private _namePrefix?: string | undefined; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string | undefined) {
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
  private _nodeCount?: number | undefined; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number | undefined) {
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
  private _nodeLocations?: string[] | undefined; 
  public get nodeLocations() {
    return this.getListAttribute('node_locations');
  }
  public set nodeLocations(value: string[] | undefined) {
    this._nodeLocations = value;
  }
  public resetNodeLocations() {
    this._nodeLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLocationsInput() {
    return this._nodeLocations
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
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
  private _version?: string | undefined; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string | undefined) {
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
  private _autoscaling?: ContainerNodePoolAutoscaling | undefined; 
  private __autoscalingOutput = new ContainerNodePoolAutoscalingOutputReference(this as any, "autoscaling", true);
  public get autoscaling() {
    return this.__autoscalingOutput;
  }
  public putAutoscaling(value: ContainerNodePoolAutoscaling | undefined) {
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
  private _management?: ContainerNodePoolManagement | undefined; 
  private __managementOutput = new ContainerNodePoolManagementOutputReference(this as any, "management", true);
  public get management() {
    return this.__managementOutput;
  }
  public putManagement(value: ContainerNodePoolManagement | undefined) {
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
  private _nodeConfig?: ContainerNodePoolNodeConfig | undefined; 
  private __nodeConfigOutput = new ContainerNodePoolNodeConfigOutputReference(this as any, "node_config", true);
  public get nodeConfig() {
    return this.__nodeConfigOutput;
  }
  public putNodeConfig(value: ContainerNodePoolNodeConfig | undefined) {
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
  private _timeouts?: ContainerNodePoolTimeouts | undefined; 
  private __timeoutsOutput = new ContainerNodePoolTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ContainerNodePoolTimeouts | undefined) {
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
  private _upgradeSettings?: ContainerNodePoolUpgradeSettings | undefined; 
  private __upgradeSettingsOutput = new ContainerNodePoolUpgradeSettingsOutputReference(this as any, "upgrade_settings", true);
  public get upgradeSettings() {
    return this.__upgradeSettingsOutput;
  }
  public putUpgradeSettings(value: ContainerNodePoolUpgradeSettings | undefined) {
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
      autoscaling: containerNodePoolAutoscalingToTerraform(this._autoscaling),
      management: containerNodePoolManagementToTerraform(this._management),
      node_config: containerNodePoolNodeConfigToTerraform(this._nodeConfig),
      timeouts: containerNodePoolTimeoutsToTerraform(this._timeouts),
      upgrade_settings: containerNodePoolUpgradeSettingsToTerraform(this._upgradeSettings),
    };
  }
}
