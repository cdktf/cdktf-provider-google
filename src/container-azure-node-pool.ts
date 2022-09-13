// https://www.terraform.io/docs/providers/google/r/container_azure_node_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerAzureNodePoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Annotations on the node pool. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#annotations ContainerAzureNodePool#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Optional. The Azure availability zone of the nodes in this nodepool. When unspecified, it defaults to `1`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#azure_availability_zone ContainerAzureNodePool#azure_availability_zone}
  */
  readonly azureAvailabilityZone?: string;
  /**
  * The azureCluster for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#cluster ContainerAzureNodePool#cluster}
  */
  readonly cluster: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#id ContainerAzureNodePool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#location ContainerAzureNodePool#location}
  */
  readonly location: string;
  /**
  * The name of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#name ContainerAzureNodePool#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#project ContainerAzureNodePool#project}
  */
  readonly project?: string;
  /**
  * The ARM ID of the subnet where the node pool VMs run. Make sure it's a subnet under the virtual network in the cluster configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#subnet_id ContainerAzureNodePool#subnet_id}
  */
  readonly subnetId: string;
  /**
  * The Kubernetes version (e.g. `1.19.10-gke.1000`) running on this node pool.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#version ContainerAzureNodePool#version}
  */
  readonly version: string;
  /**
  * autoscaling block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#autoscaling ContainerAzureNodePool#autoscaling}
  */
  readonly autoscaling: ContainerAzureNodePoolAutoscaling;
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#config ContainerAzureNodePool#config}
  */
  readonly config: ContainerAzureNodePoolConfigA;
  /**
  * max_pods_constraint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#max_pods_constraint ContainerAzureNodePool#max_pods_constraint}
  */
  readonly maxPodsConstraint: ContainerAzureNodePoolMaxPodsConstraint;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#timeouts ContainerAzureNodePool#timeouts}
  */
  readonly timeouts?: ContainerAzureNodePoolTimeouts;
}
export interface ContainerAzureNodePoolAutoscaling {
  /**
  * Maximum number of nodes in the node pool. Must be >= min_node_count.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#max_node_count ContainerAzureNodePool#max_node_count}
  */
  readonly maxNodeCount: number;
  /**
  * Minimum number of nodes in the node pool. Must be >= 1 and <= max_node_count.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#min_node_count ContainerAzureNodePool#min_node_count}
  */
  readonly minNodeCount: number;
}

export function containerAzureNodePoolAutoscalingToTerraform(struct?: ContainerAzureNodePoolAutoscalingOutputReference | ContainerAzureNodePoolAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
  }
}

export class ContainerAzureNodePoolAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAzureNodePoolAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAzureNodePoolAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxNodeCount = undefined;
      this._minNodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ContainerAzureNodePoolConfigProxyConfig {
  /**
  * The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#resource_group_id ContainerAzureNodePool#resource_group_id}
  */
  readonly resourceGroupId: string;
  /**
  * The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#secret_id ContainerAzureNodePool#secret_id}
  */
  readonly secretId: string;
}

export function containerAzureNodePoolConfigProxyConfigToTerraform(struct?: ContainerAzureNodePoolConfigProxyConfigOutputReference | ContainerAzureNodePoolConfigProxyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group_id: cdktf.stringToTerraform(struct!.resourceGroupId),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
  }
}

export class ContainerAzureNodePoolConfigProxyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAzureNodePoolConfigProxyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupId = this._resourceGroupId;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAzureNodePoolConfigProxyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceGroupId = undefined;
      this._secretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceGroupId = value.resourceGroupId;
      this._secretId = value.secretId;
    }
  }

  // resource_group_id - computed: false, optional: false, required: true
  private _resourceGroupId?: string; 
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }
  public set resourceGroupId(value: string) {
    this._resourceGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupIdInput() {
    return this._resourceGroupId;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }
}
export interface ContainerAzureNodePoolConfigRootVolume {
  /**
  * Optional. The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#size_gib ContainerAzureNodePool#size_gib}
  */
  readonly sizeGib?: number;
}

export function containerAzureNodePoolConfigRootVolumeToTerraform(struct?: ContainerAzureNodePoolConfigRootVolumeOutputReference | ContainerAzureNodePoolConfigRootVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size_gib: cdktf.numberToTerraform(struct!.sizeGib),
  }
}

export class ContainerAzureNodePoolConfigRootVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAzureNodePoolConfigRootVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sizeGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGib = this._sizeGib;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAzureNodePoolConfigRootVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sizeGib = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sizeGib = value.sizeGib;
    }
  }

  // size_gib - computed: true, optional: true, required: false
  private _sizeGib?: number; 
  public get sizeGib() {
    return this.getNumberAttribute('size_gib');
  }
  public set sizeGib(value: number) {
    this._sizeGib = value;
  }
  public resetSizeGib() {
    this._sizeGib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGibInput() {
    return this._sizeGib;
  }
}
export interface ContainerAzureNodePoolConfigSshConfig {
  /**
  * The SSH public key data for VMs managed by Anthos. This accepts the authorized_keys file format used in OpenSSH according to the sshd(8) manual page.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#authorized_key ContainerAzureNodePool#authorized_key}
  */
  readonly authorizedKey: string;
}

export function containerAzureNodePoolConfigSshConfigToTerraform(struct?: ContainerAzureNodePoolConfigSshConfigOutputReference | ContainerAzureNodePoolConfigSshConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorized_key: cdktf.stringToTerraform(struct!.authorizedKey),
  }
}

export class ContainerAzureNodePoolConfigSshConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAzureNodePoolConfigSshConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedKey = this._authorizedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAzureNodePoolConfigSshConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizedKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizedKey = value.authorizedKey;
    }
  }

  // authorized_key - computed: false, optional: false, required: true
  private _authorizedKey?: string; 
  public get authorizedKey() {
    return this.getStringAttribute('authorized_key');
  }
  public set authorizedKey(value: string) {
    this._authorizedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedKeyInput() {
    return this._authorizedKey;
  }
}
export interface ContainerAzureNodePoolConfigA {
  /**
  * Optional. A set of tags to apply to all underlying Azure resources for this node pool. This currently only includes Virtual Machine Scale Sets. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#tags ContainerAzureNodePool#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Optional. The Azure VM size name. Example: `Standard_DS2_v2`. See (/anthos/clusters/docs/azure/reference/supported-vms) for options. When unspecified, it defaults to `Standard_DS2_v2`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#vm_size ContainerAzureNodePool#vm_size}
  */
  readonly vmSize?: string;
  /**
  * proxy_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#proxy_config ContainerAzureNodePool#proxy_config}
  */
  readonly proxyConfig?: ContainerAzureNodePoolConfigProxyConfig;
  /**
  * root_volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#root_volume ContainerAzureNodePool#root_volume}
  */
  readonly rootVolume?: ContainerAzureNodePoolConfigRootVolume;
  /**
  * ssh_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#ssh_config ContainerAzureNodePool#ssh_config}
  */
  readonly sshConfig: ContainerAzureNodePoolConfigSshConfig;
}

export function containerAzureNodePoolConfigAToTerraform(struct?: ContainerAzureNodePoolConfigAOutputReference | ContainerAzureNodePoolConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
    proxy_config: containerAzureNodePoolConfigProxyConfigToTerraform(struct!.proxyConfig),
    root_volume: containerAzureNodePoolConfigRootVolumeToTerraform(struct!.rootVolume),
    ssh_config: containerAzureNodePoolConfigSshConfigToTerraform(struct!.sshConfig),
  }
}

export class ContainerAzureNodePoolConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAzureNodePoolConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._vmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSize = this._vmSize;
    }
    if (this._proxyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyConfig = this._proxyConfig?.internalValue;
    }
    if (this._rootVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootVolume = this._rootVolume?.internalValue;
    }
    if (this._sshConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshConfig = this._sshConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAzureNodePoolConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tags = undefined;
      this._vmSize = undefined;
      this._proxyConfig.internalValue = undefined;
      this._rootVolume.internalValue = undefined;
      this._sshConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tags = value.tags;
      this._vmSize = value.vmSize;
      this._proxyConfig.internalValue = value.proxyConfig;
      this._rootVolume.internalValue = value.rootVolume;
      this._sshConfig.internalValue = value.sshConfig;
    }
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // vm_size - computed: true, optional: true, required: false
  private _vmSize?: string; 
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  public resetVmSize() {
    this._vmSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize;
  }

  // proxy_config - computed: false, optional: true, required: false
  private _proxyConfig = new ContainerAzureNodePoolConfigProxyConfigOutputReference(this, "proxy_config");
  public get proxyConfig() {
    return this._proxyConfig;
  }
  public putProxyConfig(value: ContainerAzureNodePoolConfigProxyConfig) {
    this._proxyConfig.internalValue = value;
  }
  public resetProxyConfig() {
    this._proxyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigInput() {
    return this._proxyConfig.internalValue;
  }

  // root_volume - computed: false, optional: true, required: false
  private _rootVolume = new ContainerAzureNodePoolConfigRootVolumeOutputReference(this, "root_volume");
  public get rootVolume() {
    return this._rootVolume;
  }
  public putRootVolume(value: ContainerAzureNodePoolConfigRootVolume) {
    this._rootVolume.internalValue = value;
  }
  public resetRootVolume() {
    this._rootVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeInput() {
    return this._rootVolume.internalValue;
  }

  // ssh_config - computed: false, optional: false, required: true
  private _sshConfig = new ContainerAzureNodePoolConfigSshConfigOutputReference(this, "ssh_config");
  public get sshConfig() {
    return this._sshConfig;
  }
  public putSshConfig(value: ContainerAzureNodePoolConfigSshConfig) {
    this._sshConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshConfigInput() {
    return this._sshConfig.internalValue;
  }
}
export interface ContainerAzureNodePoolMaxPodsConstraint {
  /**
  * The maximum number of pods to schedule on a single node.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#max_pods_per_node ContainerAzureNodePool#max_pods_per_node}
  */
  readonly maxPodsPerNode: number;
}

export function containerAzureNodePoolMaxPodsConstraintToTerraform(struct?: ContainerAzureNodePoolMaxPodsConstraintOutputReference | ContainerAzureNodePoolMaxPodsConstraint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_pods_per_node: cdktf.numberToTerraform(struct!.maxPodsPerNode),
  }
}

export class ContainerAzureNodePoolMaxPodsConstraintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAzureNodePoolMaxPodsConstraint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPodsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPodsPerNode = this._maxPodsPerNode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAzureNodePoolMaxPodsConstraint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxPodsPerNode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxPodsPerNode = value.maxPodsPerNode;
    }
  }

  // max_pods_per_node - computed: false, optional: false, required: true
  private _maxPodsPerNode?: number; 
  public get maxPodsPerNode() {
    return this.getNumberAttribute('max_pods_per_node');
  }
  public set maxPodsPerNode(value: number) {
    this._maxPodsPerNode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsPerNodeInput() {
    return this._maxPodsPerNode;
  }
}
export interface ContainerAzureNodePoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#create ContainerAzureNodePool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#delete ContainerAzureNodePool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool#update ContainerAzureNodePool#update}
  */
  readonly update?: string;
}

export function containerAzureNodePoolTimeoutsToTerraform(struct?: ContainerAzureNodePoolTimeoutsOutputReference | ContainerAzureNodePoolTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ContainerAzureNodePoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAzureNodePoolTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAzureNodePoolTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool google_container_azure_node_pool}
*/
export class ContainerAzureNodePool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_container_azure_node_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/container_azure_node_pool google_container_azure_node_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerAzureNodePoolConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerAzureNodePoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_azure_node_pool',
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
    this._annotations = config.annotations;
    this._azureAvailabilityZone = config.azureAvailabilityZone;
    this._cluster = config.cluster;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._subnetId = config.subnetId;
    this._version = config.version;
    this._autoscaling.internalValue = config.autoscaling;
    this._config.internalValue = config.config;
    this._maxPodsConstraint.internalValue = config.maxPodsConstraint;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // azure_availability_zone - computed: true, optional: true, required: false
  private _azureAvailabilityZone?: string; 
  public get azureAvailabilityZone() {
    return this.getStringAttribute('azure_availability_zone');
  }
  public set azureAvailabilityZone(value: string) {
    this._azureAvailabilityZone = value;
  }
  public resetAzureAvailabilityZone() {
    this._azureAvailabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAvailabilityZoneInput() {
    return this._azureAvailabilityZone;
  }

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
    return this._cluster;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // autoscaling - computed: false, optional: false, required: true
  private _autoscaling = new ContainerAzureNodePoolAutoscalingOutputReference(this, "autoscaling");
  public get autoscaling() {
    return this._autoscaling;
  }
  public putAutoscaling(value: ContainerAzureNodePoolAutoscaling) {
    this._autoscaling.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingInput() {
    return this._autoscaling.internalValue;
  }

  // config - computed: false, optional: false, required: true
  private _config = new ContainerAzureNodePoolConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ContainerAzureNodePoolConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // max_pods_constraint - computed: false, optional: false, required: true
  private _maxPodsConstraint = new ContainerAzureNodePoolMaxPodsConstraintOutputReference(this, "max_pods_constraint");
  public get maxPodsConstraint() {
    return this._maxPodsConstraint;
  }
  public putMaxPodsConstraint(value: ContainerAzureNodePoolMaxPodsConstraint) {
    this._maxPodsConstraint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPodsConstraintInput() {
    return this._maxPodsConstraint.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerAzureNodePoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerAzureNodePoolTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      azure_availability_zone: cdktf.stringToTerraform(this._azureAvailabilityZone),
      cluster: cdktf.stringToTerraform(this._cluster),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      version: cdktf.stringToTerraform(this._version),
      autoscaling: containerAzureNodePoolAutoscalingToTerraform(this._autoscaling.internalValue),
      config: containerAzureNodePoolConfigAToTerraform(this._config.internalValue),
      max_pods_constraint: containerAzureNodePoolMaxPodsConstraintToTerraform(this._maxPodsConstraint.internalValue),
      timeouts: containerAzureNodePoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
