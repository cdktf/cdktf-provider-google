/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GkeHubFeatureMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#feature GkeHubFeatureMembership#feature}
  */
  readonly feature: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#id GkeHubFeatureMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#location GkeHubFeatureMembership#location}
  */
  readonly location: string;
  /**
  * The name of the membership
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#membership GkeHubFeatureMembership#membership}
  */
  readonly membership: string;
  /**
  * The location of the membership
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#membership_location GkeHubFeatureMembership#membership_location}
  */
  readonly membershipLocation?: string;
  /**
  * The project of the feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#project GkeHubFeatureMembership#project}
  */
  readonly project?: string;
  /**
  * configmanagement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#configmanagement GkeHubFeatureMembership#configmanagement}
  */
  readonly configmanagement?: GkeHubFeatureMembershipConfigmanagement;
  /**
  * mesh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#mesh GkeHubFeatureMembership#mesh}
  */
  readonly mesh?: GkeHubFeatureMembershipMesh;
  /**
  * policycontroller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#policycontroller GkeHubFeatureMembership#policycontroller}
  */
  readonly policycontroller?: GkeHubFeatureMembershipPolicycontroller;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#timeouts GkeHubFeatureMembership#timeouts}
  */
  readonly timeouts?: GkeHubFeatureMembershipTimeouts;
}
export interface GkeHubFeatureMembershipConfigmanagementBinauthz {
  /**
  * Whether binauthz is enabled in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#enabled GkeHubFeatureMembership#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function gkeHubFeatureMembershipConfigmanagementBinauthzToTerraform(struct?: GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference | GkeHubFeatureMembershipConfigmanagementBinauthz): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function gkeHubFeatureMembershipConfigmanagementBinauthzToHclTerraform(struct?: GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference | GkeHubFeatureMembershipConfigmanagementBinauthz): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipConfigmanagementBinauthz | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipConfigmanagementBinauthz | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
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
}
export interface GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesContainers {
  /**
  * The name of the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#container_name GkeHubFeatureMembership#container_name}
  */
  readonly containerName?: string;
  /**
  * The CPU limit of the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#cpu_limit GkeHubFeatureMembership#cpu_limit}
  */
  readonly cpuLimit?: string;
  /**
  * The CPU request of the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#cpu_request GkeHubFeatureMembership#cpu_request}
  */
  readonly cpuRequest?: string;
  /**
  * The memory limit of the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#memory_limit GkeHubFeatureMembership#memory_limit}
  */
  readonly memoryLimit?: string;
  /**
  * The memory request of the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#memory_request GkeHubFeatureMembership#memory_request}
  */
  readonly memoryRequest?: string;
}

export function gkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesContainersToTerraform(struct?: GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    cpu_limit: cdktf.stringToTerraform(struct!.cpuLimit),
    cpu_request: cdktf.stringToTerraform(struct!.cpuRequest),
    memory_limit: cdktf.stringToTerraform(struct!.memoryLimit),
    memory_request: cdktf.stringToTerraform(struct!.memoryRequest),
  }
}


export function gkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesContainersToHclTerraform(struct?: GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_limit: {
      value: cdktf.stringToHclTerraform(struct!.cpuLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_request: {
      value: cdktf.stringToHclTerraform(struct!.cpuRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_limit: {
      value: cdktf.stringToHclTerraform(struct!.memoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_request: {
      value: cdktf.stringToHclTerraform(struct!.memoryRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._cpuLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimit = this._cpuLimit;
    }
    if (this._cpuRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuRequest = this._cpuRequest;
    }
    if (this._memoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimit = this._memoryLimit;
    }
    if (this._memoryRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryRequest = this._memoryRequest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._cpuLimit = undefined;
      this._cpuRequest = undefined;
      this._memoryLimit = undefined;
      this._memoryRequest = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._cpuLimit = value.cpuLimit;
      this._cpuRequest = value.cpuRequest;
      this._memoryLimit = value.memoryLimit;
      this._memoryRequest = value.memoryRequest;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // cpu_limit - computed: false, optional: true, required: false
  private _cpuLimit?: string; 
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }
  public set cpuLimit(value: string) {
    this._cpuLimit = value;
  }
  public resetCpuLimit() {
    this._cpuLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitInput() {
    return this._cpuLimit;
  }

  // cpu_request - computed: false, optional: true, required: false
  private _cpuRequest?: string; 
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }
  public set cpuRequest(value: string) {
    this._cpuRequest = value;
  }
  public resetCpuRequest() {
    this._cpuRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuRequestInput() {
    return this._cpuRequest;
  }

  // memory_limit - computed: false, optional: true, required: false
  private _memoryLimit?: string; 
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }
  public set memoryLimit(value: string) {
    this._memoryLimit = value;
  }
  public resetMemoryLimit() {
    this._memoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
  }

  // memory_request - computed: false, optional: true, required: false
  private _memoryRequest?: string; 
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
  public set memoryRequest(value: string) {
    this._memoryRequest = value;
  }
  public resetMemoryRequest() {
    this._memoryRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryRequestInput() {
    return this._memoryRequest;
  }
}

export class GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesContainersList extends cdktf.ComplexList {
  public internalValue? : GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesContainers[] | cdktf.IResolvable

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
  public get(index: number): GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesContainersOutputReference {
    return new GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverrides {
  /**
  * The name of the Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#deployment_name GkeHubFeatureMembership#deployment_name}
  */
  readonly deploymentName?: string;
  /**
  * The namespace of the Deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#deployment_namespace GkeHubFeatureMembership#deployment_namespace}
  */
  readonly deploymentNamespace?: string;
  /**
  * containers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#containers GkeHubFeatureMembership#containers}
  */
  readonly containers?: GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesContainers[] | cdktf.IResolvable;
}

export function gkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesToTerraform(struct?: GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_name: cdktf.stringToTerraform(struct!.deploymentName),
    deployment_namespace: cdktf.stringToTerraform(struct!.deploymentNamespace),
    containers: cdktf.listMapper(gkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesContainersToTerraform, true)(struct!.containers),
  }
}


export function gkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesToHclTerraform(struct?: GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_name: {
      value: cdktf.stringToHclTerraform(struct!.deploymentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_namespace: {
      value: cdktf.stringToHclTerraform(struct!.deploymentNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    containers: {
      value: cdktf.listMapperHcl(gkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesContainersToHclTerraform, true)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesContainersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentName = this._deploymentName;
    }
    if (this._deploymentNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentNamespace = this._deploymentNamespace;
    }
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentName = undefined;
      this._deploymentNamespace = undefined;
      this._containers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentName = value.deploymentName;
      this._deploymentNamespace = value.deploymentNamespace;
      this._containers.internalValue = value.containers;
    }
  }

  // deployment_name - computed: false, optional: true, required: false
  private _deploymentName?: string; 
  public get deploymentName() {
    return this.getStringAttribute('deployment_name');
  }
  public set deploymentName(value: string) {
    this._deploymentName = value;
  }
  public resetDeploymentName() {
    this._deploymentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentNameInput() {
    return this._deploymentName;
  }

  // deployment_namespace - computed: false, optional: true, required: false
  private _deploymentNamespace?: string; 
  public get deploymentNamespace() {
    return this.getStringAttribute('deployment_namespace');
  }
  public set deploymentNamespace(value: string) {
    this._deploymentNamespace = value;
  }
  public resetDeploymentNamespace() {
    this._deploymentNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentNamespaceInput() {
    return this._deploymentNamespace;
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }
}

export class GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesList extends cdktf.ComplexList {
  public internalValue? : GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverrides[] | cdktf.IResolvable

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
  public get(index: number): GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesOutputReference {
    return new GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeHubFeatureMembershipConfigmanagementConfigSyncGit {
  /**
  * The GCP Service Account Email used for auth when secretType is gcpServiceAccount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#gcp_service_account_email GkeHubFeatureMembership#gcp_service_account_email}
  */
  readonly gcpServiceAccountEmail?: string;
  /**
  * URL for the HTTPS proxy to be used when communicating with the Git repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#https_proxy GkeHubFeatureMembership#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * The path within the Git repository that represents the top level of the repo to sync. Default: the root directory of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#policy_dir GkeHubFeatureMembership#policy_dir}
  */
  readonly policyDir?: string;
  /**
  * Type of secret configured for access to the Git repo. Must be one of ssh, cookiefile, gcenode, token, gcpserviceaccount or none. The validation of this is case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#secret_type GkeHubFeatureMembership#secret_type}
  */
  readonly secretType?: string;
  /**
  * The branch of the repository to sync from. Default: master.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#sync_branch GkeHubFeatureMembership#sync_branch}
  */
  readonly syncBranch?: string;
  /**
  * The URL of the Git repository to use as the source of truth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#sync_repo GkeHubFeatureMembership#sync_repo}
  */
  readonly syncRepo?: string;
  /**
  * Git revision (tag or hash) to check out. Default HEAD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#sync_rev GkeHubFeatureMembership#sync_rev}
  */
  readonly syncRev?: string;
  /**
  * Period in seconds between consecutive syncs. Default: 15.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#sync_wait_secs GkeHubFeatureMembership#sync_wait_secs}
  */
  readonly syncWaitSecs?: string;
}

export function gkeHubFeatureMembershipConfigmanagementConfigSyncGitToTerraform(struct?: GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference | GkeHubFeatureMembershipConfigmanagementConfigSyncGit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_service_account_email: cdktf.stringToTerraform(struct!.gcpServiceAccountEmail),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    policy_dir: cdktf.stringToTerraform(struct!.policyDir),
    secret_type: cdktf.stringToTerraform(struct!.secretType),
    sync_branch: cdktf.stringToTerraform(struct!.syncBranch),
    sync_repo: cdktf.stringToTerraform(struct!.syncRepo),
    sync_rev: cdktf.stringToTerraform(struct!.syncRev),
    sync_wait_secs: cdktf.stringToTerraform(struct!.syncWaitSecs),
  }
}


export function gkeHubFeatureMembershipConfigmanagementConfigSyncGitToHclTerraform(struct?: GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference | GkeHubFeatureMembershipConfigmanagementConfigSyncGit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.gcpServiceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_dir: {
      value: cdktf.stringToHclTerraform(struct!.policyDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_type: {
      value: cdktf.stringToHclTerraform(struct!.secretType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_branch: {
      value: cdktf.stringToHclTerraform(struct!.syncBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_repo: {
      value: cdktf.stringToHclTerraform(struct!.syncRepo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_rev: {
      value: cdktf.stringToHclTerraform(struct!.syncRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_wait_secs: {
      value: cdktf.stringToHclTerraform(struct!.syncWaitSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipConfigmanagementConfigSyncGit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpServiceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpServiceAccountEmail = this._gcpServiceAccountEmail;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._policyDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDir = this._policyDir;
    }
    if (this._secretType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretType = this._secretType;
    }
    if (this._syncBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncBranch = this._syncBranch;
    }
    if (this._syncRepo !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRepo = this._syncRepo;
    }
    if (this._syncRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRev = this._syncRev;
    }
    if (this._syncWaitSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncWaitSecs = this._syncWaitSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipConfigmanagementConfigSyncGit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpServiceAccountEmail = undefined;
      this._httpsProxy = undefined;
      this._policyDir = undefined;
      this._secretType = undefined;
      this._syncBranch = undefined;
      this._syncRepo = undefined;
      this._syncRev = undefined;
      this._syncWaitSecs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpServiceAccountEmail = value.gcpServiceAccountEmail;
      this._httpsProxy = value.httpsProxy;
      this._policyDir = value.policyDir;
      this._secretType = value.secretType;
      this._syncBranch = value.syncBranch;
      this._syncRepo = value.syncRepo;
      this._syncRev = value.syncRev;
      this._syncWaitSecs = value.syncWaitSecs;
    }
  }

  // gcp_service_account_email - computed: false, optional: true, required: false
  private _gcpServiceAccountEmail?: string; 
  public get gcpServiceAccountEmail() {
    return this.getStringAttribute('gcp_service_account_email');
  }
  public set gcpServiceAccountEmail(value: string) {
    this._gcpServiceAccountEmail = value;
  }
  public resetGcpServiceAccountEmail() {
    this._gcpServiceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountEmailInput() {
    return this._gcpServiceAccountEmail;
  }

  // https_proxy - computed: false, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // policy_dir - computed: false, optional: true, required: false
  private _policyDir?: string; 
  public get policyDir() {
    return this.getStringAttribute('policy_dir');
  }
  public set policyDir(value: string) {
    this._policyDir = value;
  }
  public resetPolicyDir() {
    this._policyDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDirInput() {
    return this._policyDir;
  }

  // secret_type - computed: false, optional: true, required: false
  private _secretType?: string; 
  public get secretType() {
    return this.getStringAttribute('secret_type');
  }
  public set secretType(value: string) {
    this._secretType = value;
  }
  public resetSecretType() {
    this._secretType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTypeInput() {
    return this._secretType;
  }

  // sync_branch - computed: false, optional: true, required: false
  private _syncBranch?: string; 
  public get syncBranch() {
    return this.getStringAttribute('sync_branch');
  }
  public set syncBranch(value: string) {
    this._syncBranch = value;
  }
  public resetSyncBranch() {
    this._syncBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncBranchInput() {
    return this._syncBranch;
  }

  // sync_repo - computed: false, optional: true, required: false
  private _syncRepo?: string; 
  public get syncRepo() {
    return this.getStringAttribute('sync_repo');
  }
  public set syncRepo(value: string) {
    this._syncRepo = value;
  }
  public resetSyncRepo() {
    this._syncRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRepoInput() {
    return this._syncRepo;
  }

  // sync_rev - computed: false, optional: true, required: false
  private _syncRev?: string; 
  public get syncRev() {
    return this.getStringAttribute('sync_rev');
  }
  public set syncRev(value: string) {
    this._syncRev = value;
  }
  public resetSyncRev() {
    this._syncRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRevInput() {
    return this._syncRev;
  }

  // sync_wait_secs - computed: false, optional: true, required: false
  private _syncWaitSecs?: string; 
  public get syncWaitSecs() {
    return this.getStringAttribute('sync_wait_secs');
  }
  public set syncWaitSecs(value: string) {
    this._syncWaitSecs = value;
  }
  public resetSyncWaitSecs() {
    this._syncWaitSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncWaitSecsInput() {
    return this._syncWaitSecs;
  }
}
export interface GkeHubFeatureMembershipConfigmanagementConfigSyncOci {
  /**
  * The GCP Service Account Email used for auth when secret_type is gcpserviceaccount. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#gcp_service_account_email GkeHubFeatureMembership#gcp_service_account_email}
  */
  readonly gcpServiceAccountEmail?: string;
  /**
  * The absolute path of the directory that contains the local resources. Default: the root directory of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#policy_dir GkeHubFeatureMembership#policy_dir}
  */
  readonly policyDir?: string;
  /**
  * Type of secret configured for access to the OCI Image. Must be one of gcenode, gcpserviceaccount or none. The validation of this is case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#secret_type GkeHubFeatureMembership#secret_type}
  */
  readonly secretType?: string;
  /**
  * The OCI image repository URL for the package to sync from. e.g. LOCATION-docker.pkg.dev/PROJECT_ID/REPOSITORY_NAME/PACKAGE_NAME.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#sync_repo GkeHubFeatureMembership#sync_repo}
  */
  readonly syncRepo?: string;
  /**
  * Period in seconds(int64 format) between consecutive syncs. Default: 15.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#sync_wait_secs GkeHubFeatureMembership#sync_wait_secs}
  */
  readonly syncWaitSecs?: string;
}

export function gkeHubFeatureMembershipConfigmanagementConfigSyncOciToTerraform(struct?: GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference | GkeHubFeatureMembershipConfigmanagementConfigSyncOci): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_service_account_email: cdktf.stringToTerraform(struct!.gcpServiceAccountEmail),
    policy_dir: cdktf.stringToTerraform(struct!.policyDir),
    secret_type: cdktf.stringToTerraform(struct!.secretType),
    sync_repo: cdktf.stringToTerraform(struct!.syncRepo),
    sync_wait_secs: cdktf.stringToTerraform(struct!.syncWaitSecs),
  }
}


export function gkeHubFeatureMembershipConfigmanagementConfigSyncOciToHclTerraform(struct?: GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference | GkeHubFeatureMembershipConfigmanagementConfigSyncOci): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.gcpServiceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_dir: {
      value: cdktf.stringToHclTerraform(struct!.policyDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_type: {
      value: cdktf.stringToHclTerraform(struct!.secretType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_repo: {
      value: cdktf.stringToHclTerraform(struct!.syncRepo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_wait_secs: {
      value: cdktf.stringToHclTerraform(struct!.syncWaitSecs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipConfigmanagementConfigSyncOci | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpServiceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpServiceAccountEmail = this._gcpServiceAccountEmail;
    }
    if (this._policyDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDir = this._policyDir;
    }
    if (this._secretType !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretType = this._secretType;
    }
    if (this._syncRepo !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRepo = this._syncRepo;
    }
    if (this._syncWaitSecs !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncWaitSecs = this._syncWaitSecs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipConfigmanagementConfigSyncOci | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpServiceAccountEmail = undefined;
      this._policyDir = undefined;
      this._secretType = undefined;
      this._syncRepo = undefined;
      this._syncWaitSecs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpServiceAccountEmail = value.gcpServiceAccountEmail;
      this._policyDir = value.policyDir;
      this._secretType = value.secretType;
      this._syncRepo = value.syncRepo;
      this._syncWaitSecs = value.syncWaitSecs;
    }
  }

  // gcp_service_account_email - computed: false, optional: true, required: false
  private _gcpServiceAccountEmail?: string; 
  public get gcpServiceAccountEmail() {
    return this.getStringAttribute('gcp_service_account_email');
  }
  public set gcpServiceAccountEmail(value: string) {
    this._gcpServiceAccountEmail = value;
  }
  public resetGcpServiceAccountEmail() {
    this._gcpServiceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpServiceAccountEmailInput() {
    return this._gcpServiceAccountEmail;
  }

  // policy_dir - computed: false, optional: true, required: false
  private _policyDir?: string; 
  public get policyDir() {
    return this.getStringAttribute('policy_dir');
  }
  public set policyDir(value: string) {
    this._policyDir = value;
  }
  public resetPolicyDir() {
    this._policyDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDirInput() {
    return this._policyDir;
  }

  // secret_type - computed: false, optional: true, required: false
  private _secretType?: string; 
  public get secretType() {
    return this.getStringAttribute('secret_type');
  }
  public set secretType(value: string) {
    this._secretType = value;
  }
  public resetSecretType() {
    this._secretType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTypeInput() {
    return this._secretType;
  }

  // sync_repo - computed: false, optional: true, required: false
  private _syncRepo?: string; 
  public get syncRepo() {
    return this.getStringAttribute('sync_repo');
  }
  public set syncRepo(value: string) {
    this._syncRepo = value;
  }
  public resetSyncRepo() {
    this._syncRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRepoInput() {
    return this._syncRepo;
  }

  // sync_wait_secs - computed: false, optional: true, required: false
  private _syncWaitSecs?: string; 
  public get syncWaitSecs() {
    return this.getStringAttribute('sync_wait_secs');
  }
  public set syncWaitSecs(value: string) {
    this._syncWaitSecs = value;
  }
  public resetSyncWaitSecs() {
    this._syncWaitSecs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncWaitSecsInput() {
    return this._syncWaitSecs;
  }
}
export interface GkeHubFeatureMembershipConfigmanagementConfigSync {
  /**
  * Enables the installation of ConfigSync. If set to true, ConfigSync resources will be created and the other ConfigSync fields will be applied if exist. If set to false, all other ConfigSync fields will be ignored, ConfigSync resources will be deleted. If omitted, ConfigSync resources will be managed depends on the presence of the git or oci field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#enabled GkeHubFeatureMembership#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Deprecated: If Workload Identity Federation for GKE is enabled, Google Cloud Service Account is no longer needed for exporting Config Sync metrics: https://cloud.google.com/kubernetes-engine/enterprise/config-sync/docs/how-to/monitor-config-sync-cloud-monitoring#custom-monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#metrics_gcp_service_account_email GkeHubFeatureMembership#metrics_gcp_service_account_email}
  */
  readonly metricsGcpServiceAccountEmail?: string;
  /**
  * Set to true to enable the Config Sync admission webhook to prevent drifts. If set to `false`, disables the Config Sync admission webhook and does not prevent drifts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#prevent_drift GkeHubFeatureMembership#prevent_drift}
  */
  readonly preventDrift?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the Config Sync Repo is in "hierarchical" or "unstructured" mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#source_format GkeHubFeatureMembership#source_format}
  */
  readonly sourceFormat?: string;
  /**
  * Set to true to stop syncing configs for a single cluster. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#stop_syncing GkeHubFeatureMembership#stop_syncing}
  */
  readonly stopSyncing?: boolean | cdktf.IResolvable;
  /**
  * deployment_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#deployment_overrides GkeHubFeatureMembership#deployment_overrides}
  */
  readonly deploymentOverrides?: GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverrides[] | cdktf.IResolvable;
  /**
  * git block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#git GkeHubFeatureMembership#git}
  */
  readonly git?: GkeHubFeatureMembershipConfigmanagementConfigSyncGit;
  /**
  * oci block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#oci GkeHubFeatureMembership#oci}
  */
  readonly oci?: GkeHubFeatureMembershipConfigmanagementConfigSyncOci;
}

export function gkeHubFeatureMembershipConfigmanagementConfigSyncToTerraform(struct?: GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference | GkeHubFeatureMembershipConfigmanagementConfigSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    metrics_gcp_service_account_email: cdktf.stringToTerraform(struct!.metricsGcpServiceAccountEmail),
    prevent_drift: cdktf.booleanToTerraform(struct!.preventDrift),
    source_format: cdktf.stringToTerraform(struct!.sourceFormat),
    stop_syncing: cdktf.booleanToTerraform(struct!.stopSyncing),
    deployment_overrides: cdktf.listMapper(gkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesToTerraform, true)(struct!.deploymentOverrides),
    git: gkeHubFeatureMembershipConfigmanagementConfigSyncGitToTerraform(struct!.git),
    oci: gkeHubFeatureMembershipConfigmanagementConfigSyncOciToTerraform(struct!.oci),
  }
}


export function gkeHubFeatureMembershipConfigmanagementConfigSyncToHclTerraform(struct?: GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference | GkeHubFeatureMembershipConfigmanagementConfigSync): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metrics_gcp_service_account_email: {
      value: cdktf.stringToHclTerraform(struct!.metricsGcpServiceAccountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prevent_drift: {
      value: cdktf.booleanToHclTerraform(struct!.preventDrift),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_format: {
      value: cdktf.stringToHclTerraform(struct!.sourceFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stop_syncing: {
      value: cdktf.booleanToHclTerraform(struct!.stopSyncing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deployment_overrides: {
      value: cdktf.listMapperHcl(gkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesToHclTerraform, true)(struct!.deploymentOverrides),
      isBlock: true,
      type: "list",
      storageClassType: "GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesList",
    },
    git: {
      value: gkeHubFeatureMembershipConfigmanagementConfigSyncGitToHclTerraform(struct!.git),
      isBlock: true,
      type: "list",
      storageClassType: "GkeHubFeatureMembershipConfigmanagementConfigSyncGitList",
    },
    oci: {
      value: gkeHubFeatureMembershipConfigmanagementConfigSyncOciToHclTerraform(struct!.oci),
      isBlock: true,
      type: "list",
      storageClassType: "GkeHubFeatureMembershipConfigmanagementConfigSyncOciList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipConfigmanagementConfigSync | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._metricsGcpServiceAccountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsGcpServiceAccountEmail = this._metricsGcpServiceAccountEmail;
    }
    if (this._preventDrift !== undefined) {
      hasAnyValues = true;
      internalValueResult.preventDrift = this._preventDrift;
    }
    if (this._sourceFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFormat = this._sourceFormat;
    }
    if (this._stopSyncing !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopSyncing = this._stopSyncing;
    }
    if (this._deploymentOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentOverrides = this._deploymentOverrides?.internalValue;
    }
    if (this._git?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.git = this._git?.internalValue;
    }
    if (this._oci?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oci = this._oci?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipConfigmanagementConfigSync | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._metricsGcpServiceAccountEmail = undefined;
      this._preventDrift = undefined;
      this._sourceFormat = undefined;
      this._stopSyncing = undefined;
      this._deploymentOverrides.internalValue = undefined;
      this._git.internalValue = undefined;
      this._oci.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._metricsGcpServiceAccountEmail = value.metricsGcpServiceAccountEmail;
      this._preventDrift = value.preventDrift;
      this._sourceFormat = value.sourceFormat;
      this._stopSyncing = value.stopSyncing;
      this._deploymentOverrides.internalValue = value.deploymentOverrides;
      this._git.internalValue = value.git;
      this._oci.internalValue = value.oci;
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

  // metrics_gcp_service_account_email - computed: false, optional: true, required: false
  private _metricsGcpServiceAccountEmail?: string; 
  public get metricsGcpServiceAccountEmail() {
    return this.getStringAttribute('metrics_gcp_service_account_email');
  }
  public set metricsGcpServiceAccountEmail(value: string) {
    this._metricsGcpServiceAccountEmail = value;
  }
  public resetMetricsGcpServiceAccountEmail() {
    this._metricsGcpServiceAccountEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsGcpServiceAccountEmailInput() {
    return this._metricsGcpServiceAccountEmail;
  }

  // prevent_drift - computed: true, optional: true, required: false
  private _preventDrift?: boolean | cdktf.IResolvable; 
  public get preventDrift() {
    return this.getBooleanAttribute('prevent_drift');
  }
  public set preventDrift(value: boolean | cdktf.IResolvable) {
    this._preventDrift = value;
  }
  public resetPreventDrift() {
    this._preventDrift = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventDriftInput() {
    return this._preventDrift;
  }

  // source_format - computed: false, optional: true, required: false
  private _sourceFormat?: string; 
  public get sourceFormat() {
    return this.getStringAttribute('source_format');
  }
  public set sourceFormat(value: string) {
    this._sourceFormat = value;
  }
  public resetSourceFormat() {
    this._sourceFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFormatInput() {
    return this._sourceFormat;
  }

  // stop_syncing - computed: false, optional: true, required: false
  private _stopSyncing?: boolean | cdktf.IResolvable; 
  public get stopSyncing() {
    return this.getBooleanAttribute('stop_syncing');
  }
  public set stopSyncing(value: boolean | cdktf.IResolvable) {
    this._stopSyncing = value;
  }
  public resetStopSyncing() {
    this._stopSyncing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopSyncingInput() {
    return this._stopSyncing;
  }

  // deployment_overrides - computed: false, optional: true, required: false
  private _deploymentOverrides = new GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverridesList(this, "deployment_overrides", false);
  public get deploymentOverrides() {
    return this._deploymentOverrides;
  }
  public putDeploymentOverrides(value: GkeHubFeatureMembershipConfigmanagementConfigSyncDeploymentOverrides[] | cdktf.IResolvable) {
    this._deploymentOverrides.internalValue = value;
  }
  public resetDeploymentOverrides() {
    this._deploymentOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentOverridesInput() {
    return this._deploymentOverrides.internalValue;
  }

  // git - computed: false, optional: true, required: false
  private _git = new GkeHubFeatureMembershipConfigmanagementConfigSyncGitOutputReference(this, "git");
  public get git() {
    return this._git;
  }
  public putGit(value: GkeHubFeatureMembershipConfigmanagementConfigSyncGit) {
    this._git.internalValue = value;
  }
  public resetGit() {
    this._git.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitInput() {
    return this._git.internalValue;
  }

  // oci - computed: false, optional: true, required: false
  private _oci = new GkeHubFeatureMembershipConfigmanagementConfigSyncOciOutputReference(this, "oci");
  public get oci() {
    return this._oci;
  }
  public putOci(value: GkeHubFeatureMembershipConfigmanagementConfigSyncOci) {
    this._oci.internalValue = value;
  }
  public resetOci() {
    this._oci.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociInput() {
    return this._oci.internalValue;
  }
}
export interface GkeHubFeatureMembershipConfigmanagementHierarchyController {
  /**
  * Whether hierarchical resource quota is enabled in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#enable_hierarchical_resource_quota GkeHubFeatureMembership#enable_hierarchical_resource_quota}
  */
  readonly enableHierarchicalResourceQuota?: boolean | cdktf.IResolvable;
  /**
  * Whether pod tree labels are enabled in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#enable_pod_tree_labels GkeHubFeatureMembership#enable_pod_tree_labels}
  */
  readonly enablePodTreeLabels?: boolean | cdktf.IResolvable;
  /**
  * **DEPRECATED** Configuring Hierarchy Controller through the configmanagement feature is no longer recommended. Use https://github.com/kubernetes-sigs/hierarchical-namespaces instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#enabled GkeHubFeatureMembership#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function gkeHubFeatureMembershipConfigmanagementHierarchyControllerToTerraform(struct?: GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference | GkeHubFeatureMembershipConfigmanagementHierarchyController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_hierarchical_resource_quota: cdktf.booleanToTerraform(struct!.enableHierarchicalResourceQuota),
    enable_pod_tree_labels: cdktf.booleanToTerraform(struct!.enablePodTreeLabels),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function gkeHubFeatureMembershipConfigmanagementHierarchyControllerToHclTerraform(struct?: GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference | GkeHubFeatureMembershipConfigmanagementHierarchyController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_hierarchical_resource_quota: {
      value: cdktf.booleanToHclTerraform(struct!.enableHierarchicalResourceQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_pod_tree_labels: {
      value: cdktf.booleanToHclTerraform(struct!.enablePodTreeLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipConfigmanagementHierarchyController | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableHierarchicalResourceQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableHierarchicalResourceQuota = this._enableHierarchicalResourceQuota;
    }
    if (this._enablePodTreeLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePodTreeLabels = this._enablePodTreeLabels;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipConfigmanagementHierarchyController | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableHierarchicalResourceQuota = undefined;
      this._enablePodTreeLabels = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableHierarchicalResourceQuota = value.enableHierarchicalResourceQuota;
      this._enablePodTreeLabels = value.enablePodTreeLabels;
      this._enabled = value.enabled;
    }
  }

  // enable_hierarchical_resource_quota - computed: false, optional: true, required: false
  private _enableHierarchicalResourceQuota?: boolean | cdktf.IResolvable; 
  public get enableHierarchicalResourceQuota() {
    return this.getBooleanAttribute('enable_hierarchical_resource_quota');
  }
  public set enableHierarchicalResourceQuota(value: boolean | cdktf.IResolvable) {
    this._enableHierarchicalResourceQuota = value;
  }
  public resetEnableHierarchicalResourceQuota() {
    this._enableHierarchicalResourceQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableHierarchicalResourceQuotaInput() {
    return this._enableHierarchicalResourceQuota;
  }

  // enable_pod_tree_labels - computed: false, optional: true, required: false
  private _enablePodTreeLabels?: boolean | cdktf.IResolvable; 
  public get enablePodTreeLabels() {
    return this.getBooleanAttribute('enable_pod_tree_labels');
  }
  public set enablePodTreeLabels(value: boolean | cdktf.IResolvable) {
    this._enablePodTreeLabels = value;
  }
  public resetEnablePodTreeLabels() {
    this._enablePodTreeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePodTreeLabelsInput() {
    return this._enablePodTreeLabels;
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
}
export interface GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring {
  /**
  *  Specifies the list of backends Policy Controller will export to. Specifying an empty value `[]` disables metrics export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#backends GkeHubFeatureMembership#backends}
  */
  readonly backends?: string[];
}

export function gkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringToTerraform(struct?: GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference | GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backends: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backends),
  }
}


export function gkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringToHclTerraform(struct?: GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference | GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backends: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backends),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backends !== undefined) {
      hasAnyValues = true;
      internalValueResult.backends = this._backends;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backends = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backends = value.backends;
    }
  }

  // backends - computed: true, optional: true, required: false
  private _backends?: string[]; 
  public get backends() {
    return this.getListAttribute('backends');
  }
  public set backends(value: string[]) {
    this._backends = value;
  }
  public resetBackends() {
    this._backends = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendsInput() {
    return this._backends;
  }
}
export interface GkeHubFeatureMembershipConfigmanagementPolicyController {
  /**
  * Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#audit_interval_seconds GkeHubFeatureMembership#audit_interval_seconds}
  */
  readonly auditIntervalSeconds?: string;
  /**
  * Enables the installation of Policy Controller. If false, the rest of PolicyController fields take no effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#enabled GkeHubFeatureMembership#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#exemptable_namespaces GkeHubFeatureMembership#exemptable_namespaces}
  */
  readonly exemptableNamespaces?: string[];
  /**
  * Logs all denies and dry run failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#log_denies_enabled GkeHubFeatureMembership#log_denies_enabled}
  */
  readonly logDeniesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable mutation in policy controller. If true, mutation CRDs, webhook and controller deployment will be deployed to the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#mutation_enabled GkeHubFeatureMembership#mutation_enabled}
  */
  readonly mutationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#referential_rules_enabled GkeHubFeatureMembership#referential_rules_enabled}
  */
  readonly referentialRulesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Installs the default template library along with Policy Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#template_library_installed GkeHubFeatureMembership#template_library_installed}
  */
  readonly templateLibraryInstalled?: boolean | cdktf.IResolvable;
  /**
  * monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#monitoring GkeHubFeatureMembership#monitoring}
  */
  readonly monitoring?: GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring;
}

export function gkeHubFeatureMembershipConfigmanagementPolicyControllerToTerraform(struct?: GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference | GkeHubFeatureMembershipConfigmanagementPolicyController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_interval_seconds: cdktf.stringToTerraform(struct!.auditIntervalSeconds),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exemptable_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exemptableNamespaces),
    log_denies_enabled: cdktf.booleanToTerraform(struct!.logDeniesEnabled),
    mutation_enabled: cdktf.booleanToTerraform(struct!.mutationEnabled),
    referential_rules_enabled: cdktf.booleanToTerraform(struct!.referentialRulesEnabled),
    template_library_installed: cdktf.booleanToTerraform(struct!.templateLibraryInstalled),
    monitoring: gkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringToTerraform(struct!.monitoring),
  }
}


export function gkeHubFeatureMembershipConfigmanagementPolicyControllerToHclTerraform(struct?: GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference | GkeHubFeatureMembershipConfigmanagementPolicyController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_interval_seconds: {
      value: cdktf.stringToHclTerraform(struct!.auditIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exemptable_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exemptableNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_denies_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.logDeniesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mutation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.mutationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    referential_rules_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.referentialRulesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    template_library_installed: {
      value: cdktf.booleanToHclTerraform(struct!.templateLibraryInstalled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitoring: {
      value: gkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringToHclTerraform(struct!.monitoring),
      isBlock: true,
      type: "list",
      storageClassType: "GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipConfigmanagementPolicyController | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditIntervalSeconds = this._auditIntervalSeconds;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._exemptableNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.exemptableNamespaces = this._exemptableNamespaces;
    }
    if (this._logDeniesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDeniesEnabled = this._logDeniesEnabled;
    }
    if (this._mutationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutationEnabled = this._mutationEnabled;
    }
    if (this._referentialRulesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.referentialRulesEnabled = this._referentialRulesEnabled;
    }
    if (this._templateLibraryInstalled !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateLibraryInstalled = this._templateLibraryInstalled;
    }
    if (this._monitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipConfigmanagementPolicyController | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditIntervalSeconds = undefined;
      this._enabled = undefined;
      this._exemptableNamespaces = undefined;
      this._logDeniesEnabled = undefined;
      this._mutationEnabled = undefined;
      this._referentialRulesEnabled = undefined;
      this._templateLibraryInstalled = undefined;
      this._monitoring.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditIntervalSeconds = value.auditIntervalSeconds;
      this._enabled = value.enabled;
      this._exemptableNamespaces = value.exemptableNamespaces;
      this._logDeniesEnabled = value.logDeniesEnabled;
      this._mutationEnabled = value.mutationEnabled;
      this._referentialRulesEnabled = value.referentialRulesEnabled;
      this._templateLibraryInstalled = value.templateLibraryInstalled;
      this._monitoring.internalValue = value.monitoring;
    }
  }

  // audit_interval_seconds - computed: false, optional: true, required: false
  private _auditIntervalSeconds?: string; 
  public get auditIntervalSeconds() {
    return this.getStringAttribute('audit_interval_seconds');
  }
  public set auditIntervalSeconds(value: string) {
    this._auditIntervalSeconds = value;
  }
  public resetAuditIntervalSeconds() {
    this._auditIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditIntervalSecondsInput() {
    return this._auditIntervalSeconds;
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

  // exemptable_namespaces - computed: false, optional: true, required: false
  private _exemptableNamespaces?: string[]; 
  public get exemptableNamespaces() {
    return this.getListAttribute('exemptable_namespaces');
  }
  public set exemptableNamespaces(value: string[]) {
    this._exemptableNamespaces = value;
  }
  public resetExemptableNamespaces() {
    this._exemptableNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptableNamespacesInput() {
    return this._exemptableNamespaces;
  }

  // log_denies_enabled - computed: false, optional: true, required: false
  private _logDeniesEnabled?: boolean | cdktf.IResolvable; 
  public get logDeniesEnabled() {
    return this.getBooleanAttribute('log_denies_enabled');
  }
  public set logDeniesEnabled(value: boolean | cdktf.IResolvable) {
    this._logDeniesEnabled = value;
  }
  public resetLogDeniesEnabled() {
    this._logDeniesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDeniesEnabledInput() {
    return this._logDeniesEnabled;
  }

  // mutation_enabled - computed: false, optional: true, required: false
  private _mutationEnabled?: boolean | cdktf.IResolvable; 
  public get mutationEnabled() {
    return this.getBooleanAttribute('mutation_enabled');
  }
  public set mutationEnabled(value: boolean | cdktf.IResolvable) {
    this._mutationEnabled = value;
  }
  public resetMutationEnabled() {
    this._mutationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutationEnabledInput() {
    return this._mutationEnabled;
  }

  // referential_rules_enabled - computed: false, optional: true, required: false
  private _referentialRulesEnabled?: boolean | cdktf.IResolvable; 
  public get referentialRulesEnabled() {
    return this.getBooleanAttribute('referential_rules_enabled');
  }
  public set referentialRulesEnabled(value: boolean | cdktf.IResolvable) {
    this._referentialRulesEnabled = value;
  }
  public resetReferentialRulesEnabled() {
    this._referentialRulesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referentialRulesEnabledInput() {
    return this._referentialRulesEnabled;
  }

  // template_library_installed - computed: false, optional: true, required: false
  private _templateLibraryInstalled?: boolean | cdktf.IResolvable; 
  public get templateLibraryInstalled() {
    return this.getBooleanAttribute('template_library_installed');
  }
  public set templateLibraryInstalled(value: boolean | cdktf.IResolvable) {
    this._templateLibraryInstalled = value;
  }
  public resetTemplateLibraryInstalled() {
    this._templateLibraryInstalled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateLibraryInstalledInput() {
    return this._templateLibraryInstalled;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring = new GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: GkeHubFeatureMembershipConfigmanagementPolicyControllerMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
  }
}
export interface GkeHubFeatureMembershipConfigmanagement {
  /**
  * Set this field to MANAGEMENT_AUTOMATIC to enable Config Sync auto-upgrades, and set this field to MANAGEMENT_MANUAL or MANAGEMENT_UNSPECIFIED to disable Config Sync auto-upgrades.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#management GkeHubFeatureMembership#management}
  */
  readonly management?: string;
  /**
  * Optional. Version of ACM to install. Defaults to the latest version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#version GkeHubFeatureMembership#version}
  */
  readonly version?: string;
  /**
  * binauthz block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#binauthz GkeHubFeatureMembership#binauthz}
  */
  readonly binauthz?: GkeHubFeatureMembershipConfigmanagementBinauthz;
  /**
  * config_sync block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#config_sync GkeHubFeatureMembership#config_sync}
  */
  readonly configSync?: GkeHubFeatureMembershipConfigmanagementConfigSync;
  /**
  * hierarchy_controller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#hierarchy_controller GkeHubFeatureMembership#hierarchy_controller}
  */
  readonly hierarchyController?: GkeHubFeatureMembershipConfigmanagementHierarchyController;
  /**
  * policy_controller block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#policy_controller GkeHubFeatureMembership#policy_controller}
  */
  readonly policyController?: GkeHubFeatureMembershipConfigmanagementPolicyController;
}

export function gkeHubFeatureMembershipConfigmanagementToTerraform(struct?: GkeHubFeatureMembershipConfigmanagementOutputReference | GkeHubFeatureMembershipConfigmanagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    management: cdktf.stringToTerraform(struct!.management),
    version: cdktf.stringToTerraform(struct!.version),
    binauthz: gkeHubFeatureMembershipConfigmanagementBinauthzToTerraform(struct!.binauthz),
    config_sync: gkeHubFeatureMembershipConfigmanagementConfigSyncToTerraform(struct!.configSync),
    hierarchy_controller: gkeHubFeatureMembershipConfigmanagementHierarchyControllerToTerraform(struct!.hierarchyController),
    policy_controller: gkeHubFeatureMembershipConfigmanagementPolicyControllerToTerraform(struct!.policyController),
  }
}


export function gkeHubFeatureMembershipConfigmanagementToHclTerraform(struct?: GkeHubFeatureMembershipConfigmanagementOutputReference | GkeHubFeatureMembershipConfigmanagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    management: {
      value: cdktf.stringToHclTerraform(struct!.management),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binauthz: {
      value: gkeHubFeatureMembershipConfigmanagementBinauthzToHclTerraform(struct!.binauthz),
      isBlock: true,
      type: "list",
      storageClassType: "GkeHubFeatureMembershipConfigmanagementBinauthzList",
    },
    config_sync: {
      value: gkeHubFeatureMembershipConfigmanagementConfigSyncToHclTerraform(struct!.configSync),
      isBlock: true,
      type: "list",
      storageClassType: "GkeHubFeatureMembershipConfigmanagementConfigSyncList",
    },
    hierarchy_controller: {
      value: gkeHubFeatureMembershipConfigmanagementHierarchyControllerToHclTerraform(struct!.hierarchyController),
      isBlock: true,
      type: "list",
      storageClassType: "GkeHubFeatureMembershipConfigmanagementHierarchyControllerList",
    },
    policy_controller: {
      value: gkeHubFeatureMembershipConfigmanagementPolicyControllerToHclTerraform(struct!.policyController),
      isBlock: true,
      type: "list",
      storageClassType: "GkeHubFeatureMembershipConfigmanagementPolicyControllerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipConfigmanagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipConfigmanagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._management !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._binauthz?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.binauthz = this._binauthz?.internalValue;
    }
    if (this._configSync?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configSync = this._configSync?.internalValue;
    }
    if (this._hierarchyController?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hierarchyController = this._hierarchyController?.internalValue;
    }
    if (this._policyController?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyController = this._policyController?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipConfigmanagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._management = undefined;
      this._version = undefined;
      this._binauthz.internalValue = undefined;
      this._configSync.internalValue = undefined;
      this._hierarchyController.internalValue = undefined;
      this._policyController.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._management = value.management;
      this._version = value.version;
      this._binauthz.internalValue = value.binauthz;
      this._configSync.internalValue = value.configSync;
      this._hierarchyController.internalValue = value.hierarchyController;
      this._policyController.internalValue = value.policyController;
    }
  }

  // management - computed: true, optional: true, required: false
  private _management?: string; 
  public get management() {
    return this.getStringAttribute('management');
  }
  public set management(value: string) {
    this._management = value;
  }
  public resetManagement() {
    this._management = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management;
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

  // binauthz - computed: false, optional: true, required: false
  private _binauthz = new GkeHubFeatureMembershipConfigmanagementBinauthzOutputReference(this, "binauthz");
  public get binauthz() {
    return this._binauthz;
  }
  public putBinauthz(value: GkeHubFeatureMembershipConfigmanagementBinauthz) {
    this._binauthz.internalValue = value;
  }
  public resetBinauthz() {
    this._binauthz.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binauthzInput() {
    return this._binauthz.internalValue;
  }

  // config_sync - computed: false, optional: true, required: false
  private _configSync = new GkeHubFeatureMembershipConfigmanagementConfigSyncOutputReference(this, "config_sync");
  public get configSync() {
    return this._configSync;
  }
  public putConfigSync(value: GkeHubFeatureMembershipConfigmanagementConfigSync) {
    this._configSync.internalValue = value;
  }
  public resetConfigSync() {
    this._configSync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSyncInput() {
    return this._configSync.internalValue;
  }

  // hierarchy_controller - computed: false, optional: true, required: false
  private _hierarchyController = new GkeHubFeatureMembershipConfigmanagementHierarchyControllerOutputReference(this, "hierarchy_controller");
  public get hierarchyController() {
    return this._hierarchyController;
  }
  public putHierarchyController(value: GkeHubFeatureMembershipConfigmanagementHierarchyController) {
    this._hierarchyController.internalValue = value;
  }
  public resetHierarchyController() {
    this._hierarchyController.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hierarchyControllerInput() {
    return this._hierarchyController.internalValue;
  }

  // policy_controller - computed: false, optional: true, required: false
  private _policyController = new GkeHubFeatureMembershipConfigmanagementPolicyControllerOutputReference(this, "policy_controller");
  public get policyController() {
    return this._policyController;
  }
  public putPolicyController(value: GkeHubFeatureMembershipConfigmanagementPolicyController) {
    this._policyController.internalValue = value;
  }
  public resetPolicyController() {
    this._policyController.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyControllerInput() {
    return this._policyController.internalValue;
  }
}
export interface GkeHubFeatureMembershipMesh {
  /**
  * **DEPRECATED** Whether to automatically manage Service Mesh control planes. Possible values: CONTROL_PLANE_MANAGEMENT_UNSPECIFIED, AUTOMATIC, MANUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#control_plane GkeHubFeatureMembership#control_plane}
  */
  readonly controlPlane?: string;
  /**
  * Whether to automatically manage Service Mesh. Possible values: MANAGEMENT_UNSPECIFIED, MANAGEMENT_AUTOMATIC, MANAGEMENT_MANUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#management GkeHubFeatureMembership#management}
  */
  readonly management?: string;
}

export function gkeHubFeatureMembershipMeshToTerraform(struct?: GkeHubFeatureMembershipMeshOutputReference | GkeHubFeatureMembershipMesh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane: cdktf.stringToTerraform(struct!.controlPlane),
    management: cdktf.stringToTerraform(struct!.management),
  }
}


export function gkeHubFeatureMembershipMeshToHclTerraform(struct?: GkeHubFeatureMembershipMeshOutputReference | GkeHubFeatureMembershipMesh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane: {
      value: cdktf.stringToHclTerraform(struct!.controlPlane),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management: {
      value: cdktf.stringToHclTerraform(struct!.management),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipMeshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipMesh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlane !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlane = this._controlPlane;
    }
    if (this._management !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipMesh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlPlane = undefined;
      this._management = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlPlane = value.controlPlane;
      this._management = value.management;
    }
  }

  // control_plane - computed: false, optional: true, required: false
  private _controlPlane?: string; 
  public get controlPlane() {
    return this.getStringAttribute('control_plane');
  }
  public set controlPlane(value: string) {
    this._controlPlane = value;
  }
  public resetControlPlane() {
    this._controlPlane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane;
  }

  // management - computed: false, optional: true, required: false
  private _management?: string; 
  public get management() {
    return this.getStringAttribute('management');
  }
  public set management(value: string) {
    this._management = value;
  }
  public resetManagement() {
    this._management = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management;
  }
}
export interface GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits {
  /**
  * CPU requirement expressed in Kubernetes resource units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#cpu GkeHubFeatureMembership#cpu}
  */
  readonly cpu?: string;
  /**
  * Memory requirement expressed in Kubernetes resource units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#memory GkeHubFeatureMembership#memory}
  */
  readonly memory?: string;
}

export function gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsToTerraform(struct?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsToHclTerraform(struct?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests {
  /**
  * CPU requirement expressed in Kubernetes resource units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#cpu GkeHubFeatureMembership#cpu}
  */
  readonly cpu?: string;
  /**
  * Memory requirement expressed in Kubernetes resource units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#memory GkeHubFeatureMembership#memory}
  */
  readonly memory?: string;
}

export function gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsToTerraform(struct?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsToHclTerraform(struct?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources {
  /**
  * limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#limits GkeHubFeatureMembership#limits}
  */
  readonly limits?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits;
  /**
  * requests block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#requests GkeHubFeatureMembership#requests}
  */
  readonly requests?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests;
}

export function gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesToTerraform(struct?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsToTerraform(struct!.limits),
    requests: gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsToTerraform(struct!.requests),
  }
}


export function gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesToHclTerraform(struct?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "list",
      storageClassType: "GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsList",
    },
    requests: {
      value: gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsToHclTerraform(struct!.requests),
      isBlock: true,
      type: "list",
      storageClassType: "GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._requests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limits.internalValue = undefined;
      this._requests.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limits.internalValue = value.limits;
      this._requests.internalValue = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // requests - computed: false, optional: true, required: false
  private _requests = new GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequestsOutputReference(this, "requests");
  public get requests() {
    return this._requests;
  }
  public putRequests(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesRequests) {
    this._requests.internalValue = value;
  }
  public resetRequests() {
    this._requests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests.internalValue;
  }
}
export interface GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations {
  /**
  * Matches a taint effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#effect GkeHubFeatureMembership#effect}
  */
  readonly effect?: string;
  /**
  * Matches a taint key (not necessarily unique).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#key GkeHubFeatureMembership#key}
  */
  readonly key?: string;
  /**
  * Matches a taint operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#operator GkeHubFeatureMembership#operator}
  */
  readonly operator?: string;
  /**
  * Matches a taint value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#value GkeHubFeatureMembership#value}
  */
  readonly value?: string;
}

export function gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsToTerraform(struct?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsToHclTerraform(struct?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations | cdktf.IResolvable | undefined {
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
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
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
      this._operator = value.operator;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
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

export class GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList extends cdktf.ComplexList {
  public internalValue? : GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations[] | cdktf.IResolvable

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
  public get(index: number): GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference {
    return new GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs {
  /**
  * The name for the key in the map for which this object is mapped to in the API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#component_name GkeHubFeatureMembership#component_name}
  */
  readonly componentName: string;
  /**
  * Pod affinity configuration. Possible values: AFFINITY_UNSPECIFIED, NO_AFFINITY, ANTI_AFFINITY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#pod_affinity GkeHubFeatureMembership#pod_affinity}
  */
  readonly podAffinity?: string;
  /**
  * Pod replica count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#replica_count GkeHubFeatureMembership#replica_count}
  */
  readonly replicaCount?: number;
  /**
  * container_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#container_resources GkeHubFeatureMembership#container_resources}
  */
  readonly containerResources?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources;
  /**
  * pod_tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#pod_tolerations GkeHubFeatureMembership#pod_tolerations}
  */
  readonly podTolerations?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations[] | cdktf.IResolvable;
}

export function gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsToTerraform(struct?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_name: cdktf.stringToTerraform(struct!.componentName),
    pod_affinity: cdktf.stringToTerraform(struct!.podAffinity),
    replica_count: cdktf.numberToTerraform(struct!.replicaCount),
    container_resources: gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesToTerraform(struct!.containerResources),
    pod_tolerations: cdktf.listMapper(gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsToTerraform, true)(struct!.podTolerations),
  }
}


export function gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsToHclTerraform(struct?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component_name: {
      value: cdktf.stringToHclTerraform(struct!.componentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_affinity: {
      value: cdktf.stringToHclTerraform(struct!.podAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_count: {
      value: cdktf.numberToHclTerraform(struct!.replicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    container_resources: {
      value: gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesToHclTerraform(struct!.containerResources),
      isBlock: true,
      type: "list",
      storageClassType: "GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesList",
    },
    pod_tolerations: {
      value: cdktf.listMapperHcl(gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsToHclTerraform, true)(struct!.podTolerations),
      isBlock: true,
      type: "list",
      storageClassType: "GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentName = this._componentName;
    }
    if (this._podAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity;
    }
    if (this._replicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaCount = this._replicaCount;
    }
    if (this._containerResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerResources = this._containerResources?.internalValue;
    }
    if (this._podTolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podTolerations = this._podTolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._componentName = undefined;
      this._podAffinity = undefined;
      this._replicaCount = undefined;
      this._containerResources.internalValue = undefined;
      this._podTolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._componentName = value.componentName;
      this._podAffinity = value.podAffinity;
      this._replicaCount = value.replicaCount;
      this._containerResources.internalValue = value.containerResources;
      this._podTolerations.internalValue = value.podTolerations;
    }
  }

  // component_name - computed: false, optional: false, required: true
  private _componentName?: string; 
  public get componentName() {
    return this.getStringAttribute('component_name');
  }
  public set componentName(value: string) {
    this._componentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentNameInput() {
    return this._componentName;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity?: string; 
  public get podAffinity() {
    return this.getStringAttribute('pod_affinity');
  }
  public set podAffinity(value: string) {
    this._podAffinity = value;
  }
  public resetPodAffinity() {
    this._podAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity;
  }

  // replica_count - computed: false, optional: true, required: false
  private _replicaCount?: number; 
  public get replicaCount() {
    return this.getNumberAttribute('replica_count');
  }
  public set replicaCount(value: number) {
    this._replicaCount = value;
  }
  public resetReplicaCount() {
    this._replicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCountInput() {
    return this._replicaCount;
  }

  // container_resources - computed: false, optional: true, required: false
  private _containerResources = new GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResourcesOutputReference(this, "container_resources");
  public get containerResources() {
    return this._containerResources;
  }
  public putContainerResources(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsContainerResources) {
    this._containerResources.internalValue = value;
  }
  public resetContainerResources() {
    this._containerResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerResourcesInput() {
    return this._containerResources.internalValue;
  }

  // pod_tolerations - computed: false, optional: true, required: false
  private _podTolerations = new GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerationsList(this, "pod_tolerations", false);
  public get podTolerations() {
    return this._podTolerations;
  }
  public putPodTolerations(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsPodTolerations[] | cdktf.IResolvable) {
    this._podTolerations.internalValue = value;
  }
  public resetPodTolerations() {
    this._podTolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podTolerationsInput() {
    return this._podTolerations.internalValue;
  }
}

export class GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList extends cdktf.ComplexList {
  public internalValue? : GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs[] | cdktf.IResolvable

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
  public get(index: number): GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference {
    return new GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring {
  /**
  *  Specifies the list of backends Policy Controller will export to. Specifying an empty value `[]` disables metrics export.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#backends GkeHubFeatureMembership#backends}
  */
  readonly backends?: string[];
}

export function gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringToTerraform(struct?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backends: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.backends),
  }
}


export function gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringToHclTerraform(struct?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backends: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.backends),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backends !== undefined) {
      hasAnyValues = true;
      internalValueResult.backends = this._backends;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backends = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backends = value.backends;
    }
  }

  // backends - computed: true, optional: true, required: false
  private _backends?: string[]; 
  public get backends() {
    return this.getListAttribute('backends');
  }
  public set backends(value: string[]) {
    this._backends = value;
  }
  public resetBackends() {
    this._backends = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendsInput() {
    return this._backends;
  }
}
export interface GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles {
  /**
  * The name for the key in the map for which this object is mapped to in the API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#bundle_name GkeHubFeatureMembership#bundle_name}
  */
  readonly bundleName: string;
  /**
  * The set of namespaces to be exempted from the bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#exempted_namespaces GkeHubFeatureMembership#exempted_namespaces}
  */
  readonly exemptedNamespaces?: string[];
}

export function gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesToTerraform(struct?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bundle_name: cdktf.stringToTerraform(struct!.bundleName),
    exempted_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exemptedNamespaces),
  }
}


export function gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesToHclTerraform(struct?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bundle_name: {
      value: cdktf.stringToHclTerraform(struct!.bundleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exempted_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exemptedNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleName = this._bundleName;
    }
    if (this._exemptedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.exemptedNamespaces = this._exemptedNamespaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bundleName = undefined;
      this._exemptedNamespaces = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bundleName = value.bundleName;
      this._exemptedNamespaces = value.exemptedNamespaces;
    }
  }

  // bundle_name - computed: false, optional: false, required: true
  private _bundleName?: string; 
  public get bundleName() {
    return this.getStringAttribute('bundle_name');
  }
  public set bundleName(value: string) {
    this._bundleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleNameInput() {
    return this._bundleName;
  }

  // exempted_namespaces - computed: false, optional: true, required: false
  private _exemptedNamespaces?: string[]; 
  public get exemptedNamespaces() {
    return this.getListAttribute('exempted_namespaces');
  }
  public set exemptedNamespaces(value: string[]) {
    this._exemptedNamespaces = value;
  }
  public resetExemptedNamespaces() {
    this._exemptedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptedNamespacesInput() {
    return this._exemptedNamespaces;
  }
}

export class GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList extends cdktf.ComplexList {
  public internalValue? : GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles[] | cdktf.IResolvable

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
  public get(index: number): GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference {
    return new GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary {
  /**
  * Configures the manner in which the template library is installed on the cluster. Possible values: INSTALLATION_UNSPECIFIED, NOT_INSTALLED, ALL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#installation GkeHubFeatureMembership#installation}
  */
  readonly installation?: string;
}

export function gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryToTerraform(struct?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    installation: cdktf.stringToTerraform(struct!.installation),
  }
}


export function gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryToHclTerraform(struct?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    installation: {
      value: cdktf.stringToHclTerraform(struct!.installation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._installation !== undefined) {
      hasAnyValues = true;
      internalValueResult.installation = this._installation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._installation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._installation = value.installation;
    }
  }

  // installation - computed: false, optional: true, required: false
  private _installation?: string; 
  public get installation() {
    return this.getStringAttribute('installation');
  }
  public set installation(value: string) {
    this._installation = value;
  }
  public resetInstallation() {
    this._installation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationInput() {
    return this._installation;
  }
}
export interface GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent {
  /**
  * bundles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#bundles GkeHubFeatureMembership#bundles}
  */
  readonly bundles?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles[] | cdktf.IResolvable;
  /**
  * template_library block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#template_library GkeHubFeatureMembership#template_library}
  */
  readonly templateLibrary?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary;
}

export function gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentToTerraform(struct?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bundles: cdktf.listMapper(gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesToTerraform, true)(struct!.bundles),
    template_library: gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryToTerraform(struct!.templateLibrary),
  }
}


export function gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentToHclTerraform(struct?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bundles: {
      value: cdktf.listMapperHcl(gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesToHclTerraform, true)(struct!.bundles),
      isBlock: true,
      type: "set",
      storageClassType: "GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList",
    },
    template_library: {
      value: gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryToHclTerraform(struct!.templateLibrary),
      isBlock: true,
      type: "list",
      storageClassType: "GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bundles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundles = this._bundles?.internalValue;
    }
    if (this._templateLibrary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateLibrary = this._templateLibrary?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bundles.internalValue = undefined;
      this._templateLibrary.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bundles.internalValue = value.bundles;
      this._templateLibrary.internalValue = value.templateLibrary;
    }
  }

  // bundles - computed: false, optional: true, required: false
  private _bundles = new GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundlesList(this, "bundles", true);
  public get bundles() {
    return this._bundles;
  }
  public putBundles(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentBundles[] | cdktf.IResolvable) {
    this._bundles.internalValue = value;
  }
  public resetBundles() {
    this._bundles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundlesInput() {
    return this._bundles.internalValue;
  }

  // template_library - computed: false, optional: true, required: false
  private _templateLibrary = new GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibraryOutputReference(this, "template_library");
  public get templateLibrary() {
    return this._templateLibrary;
  }
  public putTemplateLibrary(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentTemplateLibrary) {
    this._templateLibrary.internalValue = value;
  }
  public resetTemplateLibrary() {
    this._templateLibrary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateLibraryInput() {
    return this._templateLibrary.internalValue;
  }
}
export interface GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig {
  /**
  * Sets the interval for Policy Controller Audit Scans (in seconds). When set to 0, this disables audit functionality altogether.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#audit_interval_seconds GkeHubFeatureMembership#audit_interval_seconds}
  */
  readonly auditIntervalSeconds?: number;
  /**
  * The maximum number of audit violations to be stored in a constraint. If not set, the internal default of 20 will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#constraint_violation_limit GkeHubFeatureMembership#constraint_violation_limit}
  */
  readonly constraintViolationLimit?: number;
  /**
  * The set of namespaces that are excluded from Policy Controller checks. Namespaces do not need to currently exist on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#exemptable_namespaces GkeHubFeatureMembership#exemptable_namespaces}
  */
  readonly exemptableNamespaces?: string[];
  /**
  * Configures the mode of the Policy Controller installation. Possible values: INSTALL_SPEC_UNSPECIFIED, INSTALL_SPEC_NOT_INSTALLED, INSTALL_SPEC_ENABLED, INSTALL_SPEC_SUSPENDED, INSTALL_SPEC_DETACHED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#install_spec GkeHubFeatureMembership#install_spec}
  */
  readonly installSpec?: string;
  /**
  * Logs all denies and dry run failures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#log_denies_enabled GkeHubFeatureMembership#log_denies_enabled}
  */
  readonly logDeniesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables the ability to mutate resources using Policy Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#mutation_enabled GkeHubFeatureMembership#mutation_enabled}
  */
  readonly mutationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables the ability to use Constraint Templates that reference to objects other than the object currently being evaluated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#referential_rules_enabled GkeHubFeatureMembership#referential_rules_enabled}
  */
  readonly referentialRulesEnabled?: boolean | cdktf.IResolvable;
  /**
  * deployment_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#deployment_configs GkeHubFeatureMembership#deployment_configs}
  */
  readonly deploymentConfigs?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs[] | cdktf.IResolvable;
  /**
  * monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#monitoring GkeHubFeatureMembership#monitoring}
  */
  readonly monitoring?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring;
  /**
  * policy_content block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#policy_content GkeHubFeatureMembership#policy_content}
  */
  readonly policyContent?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent;
}

export function gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigToTerraform(struct?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_interval_seconds: cdktf.numberToTerraform(struct!.auditIntervalSeconds),
    constraint_violation_limit: cdktf.numberToTerraform(struct!.constraintViolationLimit),
    exemptable_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exemptableNamespaces),
    install_spec: cdktf.stringToTerraform(struct!.installSpec),
    log_denies_enabled: cdktf.booleanToTerraform(struct!.logDeniesEnabled),
    mutation_enabled: cdktf.booleanToTerraform(struct!.mutationEnabled),
    referential_rules_enabled: cdktf.booleanToTerraform(struct!.referentialRulesEnabled),
    deployment_configs: cdktf.listMapper(gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsToTerraform, true)(struct!.deploymentConfigs),
    monitoring: gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringToTerraform(struct!.monitoring),
    policy_content: gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentToTerraform(struct!.policyContent),
  }
}


export function gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigToHclTerraform(struct?: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference | GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.auditIntervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    constraint_violation_limit: {
      value: cdktf.numberToHclTerraform(struct!.constraintViolationLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exemptable_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exemptableNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    install_spec: {
      value: cdktf.stringToHclTerraform(struct!.installSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_denies_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.logDeniesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mutation_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.mutationEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    referential_rules_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.referentialRulesEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deployment_configs: {
      value: cdktf.listMapperHcl(gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsToHclTerraform, true)(struct!.deploymentConfigs),
      isBlock: true,
      type: "set",
      storageClassType: "GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList",
    },
    monitoring: {
      value: gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringToHclTerraform(struct!.monitoring),
      isBlock: true,
      type: "list",
      storageClassType: "GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringList",
    },
    policy_content: {
      value: gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentToHclTerraform(struct!.policyContent),
      isBlock: true,
      type: "list",
      storageClassType: "GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditIntervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditIntervalSeconds = this._auditIntervalSeconds;
    }
    if (this._constraintViolationLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraintViolationLimit = this._constraintViolationLimit;
    }
    if (this._exemptableNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.exemptableNamespaces = this._exemptableNamespaces;
    }
    if (this._installSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.installSpec = this._installSpec;
    }
    if (this._logDeniesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDeniesEnabled = this._logDeniesEnabled;
    }
    if (this._mutationEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutationEnabled = this._mutationEnabled;
    }
    if (this._referentialRulesEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.referentialRulesEnabled = this._referentialRulesEnabled;
    }
    if (this._deploymentConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentConfigs = this._deploymentConfigs?.internalValue;
    }
    if (this._monitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring?.internalValue;
    }
    if (this._policyContent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyContent = this._policyContent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditIntervalSeconds = undefined;
      this._constraintViolationLimit = undefined;
      this._exemptableNamespaces = undefined;
      this._installSpec = undefined;
      this._logDeniesEnabled = undefined;
      this._mutationEnabled = undefined;
      this._referentialRulesEnabled = undefined;
      this._deploymentConfigs.internalValue = undefined;
      this._monitoring.internalValue = undefined;
      this._policyContent.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditIntervalSeconds = value.auditIntervalSeconds;
      this._constraintViolationLimit = value.constraintViolationLimit;
      this._exemptableNamespaces = value.exemptableNamespaces;
      this._installSpec = value.installSpec;
      this._logDeniesEnabled = value.logDeniesEnabled;
      this._mutationEnabled = value.mutationEnabled;
      this._referentialRulesEnabled = value.referentialRulesEnabled;
      this._deploymentConfigs.internalValue = value.deploymentConfigs;
      this._monitoring.internalValue = value.monitoring;
      this._policyContent.internalValue = value.policyContent;
    }
  }

  // audit_interval_seconds - computed: false, optional: true, required: false
  private _auditIntervalSeconds?: number; 
  public get auditIntervalSeconds() {
    return this.getNumberAttribute('audit_interval_seconds');
  }
  public set auditIntervalSeconds(value: number) {
    this._auditIntervalSeconds = value;
  }
  public resetAuditIntervalSeconds() {
    this._auditIntervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditIntervalSecondsInput() {
    return this._auditIntervalSeconds;
  }

  // constraint_violation_limit - computed: false, optional: true, required: false
  private _constraintViolationLimit?: number; 
  public get constraintViolationLimit() {
    return this.getNumberAttribute('constraint_violation_limit');
  }
  public set constraintViolationLimit(value: number) {
    this._constraintViolationLimit = value;
  }
  public resetConstraintViolationLimit() {
    this._constraintViolationLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintViolationLimitInput() {
    return this._constraintViolationLimit;
  }

  // exemptable_namespaces - computed: false, optional: true, required: false
  private _exemptableNamespaces?: string[]; 
  public get exemptableNamespaces() {
    return this.getListAttribute('exemptable_namespaces');
  }
  public set exemptableNamespaces(value: string[]) {
    this._exemptableNamespaces = value;
  }
  public resetExemptableNamespaces() {
    this._exemptableNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exemptableNamespacesInput() {
    return this._exemptableNamespaces;
  }

  // install_spec - computed: false, optional: true, required: false
  private _installSpec?: string; 
  public get installSpec() {
    return this.getStringAttribute('install_spec');
  }
  public set installSpec(value: string) {
    this._installSpec = value;
  }
  public resetInstallSpec() {
    this._installSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installSpecInput() {
    return this._installSpec;
  }

  // log_denies_enabled - computed: false, optional: true, required: false
  private _logDeniesEnabled?: boolean | cdktf.IResolvable; 
  public get logDeniesEnabled() {
    return this.getBooleanAttribute('log_denies_enabled');
  }
  public set logDeniesEnabled(value: boolean | cdktf.IResolvable) {
    this._logDeniesEnabled = value;
  }
  public resetLogDeniesEnabled() {
    this._logDeniesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDeniesEnabledInput() {
    return this._logDeniesEnabled;
  }

  // mutation_enabled - computed: false, optional: true, required: false
  private _mutationEnabled?: boolean | cdktf.IResolvable; 
  public get mutationEnabled() {
    return this.getBooleanAttribute('mutation_enabled');
  }
  public set mutationEnabled(value: boolean | cdktf.IResolvable) {
    this._mutationEnabled = value;
  }
  public resetMutationEnabled() {
    this._mutationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutationEnabledInput() {
    return this._mutationEnabled;
  }

  // referential_rules_enabled - computed: false, optional: true, required: false
  private _referentialRulesEnabled?: boolean | cdktf.IResolvable; 
  public get referentialRulesEnabled() {
    return this.getBooleanAttribute('referential_rules_enabled');
  }
  public set referentialRulesEnabled(value: boolean | cdktf.IResolvable) {
    this._referentialRulesEnabled = value;
  }
  public resetReferentialRulesEnabled() {
    this._referentialRulesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referentialRulesEnabledInput() {
    return this._referentialRulesEnabled;
  }

  // deployment_configs - computed: false, optional: true, required: false
  private _deploymentConfigs = new GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigsList(this, "deployment_configs", true);
  public get deploymentConfigs() {
    return this._deploymentConfigs;
  }
  public putDeploymentConfigs(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigDeploymentConfigs[] | cdktf.IResolvable) {
    this._deploymentConfigs.internalValue = value;
  }
  public resetDeploymentConfigs() {
    this._deploymentConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentConfigsInput() {
    return this._deploymentConfigs.internalValue;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring = new GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
  }

  // policy_content - computed: false, optional: true, required: false
  private _policyContent = new GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContentOutputReference(this, "policy_content");
  public get policyContent() {
    return this._policyContent;
  }
  public putPolicyContent(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigPolicyContent) {
    this._policyContent.internalValue = value;
  }
  public resetPolicyContent() {
    this._policyContent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyContentInput() {
    return this._policyContent.internalValue;
  }
}
export interface GkeHubFeatureMembershipPolicycontroller {
  /**
  * Optional. Version of Policy Controller to install. Defaults to the latest version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#version GkeHubFeatureMembership#version}
  */
  readonly version?: string;
  /**
  * policy_controller_hub_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#policy_controller_hub_config GkeHubFeatureMembership#policy_controller_hub_config}
  */
  readonly policyControllerHubConfig: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig;
}

export function gkeHubFeatureMembershipPolicycontrollerToTerraform(struct?: GkeHubFeatureMembershipPolicycontrollerOutputReference | GkeHubFeatureMembershipPolicycontroller): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
    policy_controller_hub_config: gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigToTerraform(struct!.policyControllerHubConfig),
  }
}


export function gkeHubFeatureMembershipPolicycontrollerToHclTerraform(struct?: GkeHubFeatureMembershipPolicycontrollerOutputReference | GkeHubFeatureMembershipPolicycontroller): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy_controller_hub_config: {
      value: gkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigToHclTerraform(struct!.policyControllerHubConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipPolicycontrollerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeHubFeatureMembershipPolicycontroller | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._policyControllerHubConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyControllerHubConfig = this._policyControllerHubConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeHubFeatureMembershipPolicycontroller | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._version = undefined;
      this._policyControllerHubConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._version = value.version;
      this._policyControllerHubConfig.internalValue = value.policyControllerHubConfig;
    }
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

  // policy_controller_hub_config - computed: false, optional: false, required: true
  private _policyControllerHubConfig = new GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfigOutputReference(this, "policy_controller_hub_config");
  public get policyControllerHubConfig() {
    return this._policyControllerHubConfig;
  }
  public putPolicyControllerHubConfig(value: GkeHubFeatureMembershipPolicycontrollerPolicyControllerHubConfig) {
    this._policyControllerHubConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyControllerHubConfigInput() {
    return this._policyControllerHubConfig.internalValue;
  }
}
export interface GkeHubFeatureMembershipTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#create GkeHubFeatureMembership#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#delete GkeHubFeatureMembership#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#update GkeHubFeatureMembership#update}
  */
  readonly update?: string;
}

export function gkeHubFeatureMembershipTimeoutsToTerraform(struct?: GkeHubFeatureMembershipTimeouts | cdktf.IResolvable): any {
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


export function gkeHubFeatureMembershipTimeoutsToHclTerraform(struct?: GkeHubFeatureMembershipTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeHubFeatureMembershipTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GkeHubFeatureMembershipTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GkeHubFeatureMembershipTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership google_gke_hub_feature_membership}
*/
export class GkeHubFeatureMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gke_hub_feature_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GkeHubFeatureMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GkeHubFeatureMembership to import
  * @param importFromId The id of the existing GkeHubFeatureMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GkeHubFeatureMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_gke_hub_feature_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.44.0/docs/resources/gke_hub_feature_membership google_gke_hub_feature_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GkeHubFeatureMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: GkeHubFeatureMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gke_hub_feature_membership',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.44.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._feature = config.feature;
    this._id = config.id;
    this._location = config.location;
    this._membership = config.membership;
    this._membershipLocation = config.membershipLocation;
    this._project = config.project;
    this._configmanagement.internalValue = config.configmanagement;
    this._mesh.internalValue = config.mesh;
    this._policycontroller.internalValue = config.policycontroller;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // feature - computed: false, optional: false, required: true
  private _feature?: string; 
  public get feature() {
    return this.getStringAttribute('feature');
  }
  public set feature(value: string) {
    this._feature = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
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

  // membership - computed: false, optional: false, required: true
  private _membership?: string; 
  public get membership() {
    return this.getStringAttribute('membership');
  }
  public set membership(value: string) {
    this._membership = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipInput() {
    return this._membership;
  }

  // membership_location - computed: false, optional: true, required: false
  private _membershipLocation?: string; 
  public get membershipLocation() {
    return this.getStringAttribute('membership_location');
  }
  public set membershipLocation(value: string) {
    this._membershipLocation = value;
  }
  public resetMembershipLocation() {
    this._membershipLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membershipLocationInput() {
    return this._membershipLocation;
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

  // configmanagement - computed: false, optional: true, required: false
  private _configmanagement = new GkeHubFeatureMembershipConfigmanagementOutputReference(this, "configmanagement");
  public get configmanagement() {
    return this._configmanagement;
  }
  public putConfigmanagement(value: GkeHubFeatureMembershipConfigmanagement) {
    this._configmanagement.internalValue = value;
  }
  public resetConfigmanagement() {
    this._configmanagement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configmanagementInput() {
    return this._configmanagement.internalValue;
  }

  // mesh - computed: false, optional: true, required: false
  private _mesh = new GkeHubFeatureMembershipMeshOutputReference(this, "mesh");
  public get mesh() {
    return this._mesh;
  }
  public putMesh(value: GkeHubFeatureMembershipMesh) {
    this._mesh.internalValue = value;
  }
  public resetMesh() {
    this._mesh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshInput() {
    return this._mesh.internalValue;
  }

  // policycontroller - computed: false, optional: true, required: false
  private _policycontroller = new GkeHubFeatureMembershipPolicycontrollerOutputReference(this, "policycontroller");
  public get policycontroller() {
    return this._policycontroller;
  }
  public putPolicycontroller(value: GkeHubFeatureMembershipPolicycontroller) {
    this._policycontroller.internalValue = value;
  }
  public resetPolicycontroller() {
    this._policycontroller.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policycontrollerInput() {
    return this._policycontroller.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GkeHubFeatureMembershipTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GkeHubFeatureMembershipTimeouts) {
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
      feature: cdktf.stringToTerraform(this._feature),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      membership: cdktf.stringToTerraform(this._membership),
      membership_location: cdktf.stringToTerraform(this._membershipLocation),
      project: cdktf.stringToTerraform(this._project),
      configmanagement: gkeHubFeatureMembershipConfigmanagementToTerraform(this._configmanagement.internalValue),
      mesh: gkeHubFeatureMembershipMeshToTerraform(this._mesh.internalValue),
      policycontroller: gkeHubFeatureMembershipPolicycontrollerToTerraform(this._policycontroller.internalValue),
      timeouts: gkeHubFeatureMembershipTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature: {
        value: cdktf.stringToHclTerraform(this._feature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      membership: {
        value: cdktf.stringToHclTerraform(this._membership),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      membership_location: {
        value: cdktf.stringToHclTerraform(this._membershipLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configmanagement: {
        value: gkeHubFeatureMembershipConfigmanagementToHclTerraform(this._configmanagement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeHubFeatureMembershipConfigmanagementList",
      },
      mesh: {
        value: gkeHubFeatureMembershipMeshToHclTerraform(this._mesh.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeHubFeatureMembershipMeshList",
      },
      policycontroller: {
        value: gkeHubFeatureMembershipPolicycontrollerToHclTerraform(this._policycontroller.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeHubFeatureMembershipPolicycontrollerList",
      },
      timeouts: {
        value: gkeHubFeatureMembershipTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GkeHubFeatureMembershipTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
