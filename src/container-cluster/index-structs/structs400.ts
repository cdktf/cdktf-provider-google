/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
import { ContainerClusterNodePoolAutoConfigLinuxNodeConfig,
containerClusterNodePoolAutoConfigLinuxNodeConfigToTerraform,
containerClusterNodePoolAutoConfigLinuxNodeConfigToHclTerraform,
ContainerClusterNodePoolAutoConfigLinuxNodeConfigOutputReference,
ContainerClusterNodePoolAutoConfigNetworkTags,
containerClusterNodePoolAutoConfigNetworkTagsToTerraform,
containerClusterNodePoolAutoConfigNetworkTagsToHclTerraform,
ContainerClusterNodePoolAutoConfigNetworkTagsOutputReference } from './structs0'
export interface ContainerClusterNodePoolAutoConfigNodeKubeletConfig {
  /**
  * Controls whether the kubelet read-only port is enabled. It is strongly recommended to set this to `FALSE`. Possible values: `TRUE`, `FALSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#insecure_kubelet_readonly_port_enabled ContainerCluster#insecure_kubelet_readonly_port_enabled}
  */
  readonly insecureKubeletReadonlyPortEnabled?: string;
}

export function containerClusterNodePoolAutoConfigNodeKubeletConfigToTerraform(struct?: ContainerClusterNodePoolAutoConfigNodeKubeletConfigOutputReference | ContainerClusterNodePoolAutoConfigNodeKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure_kubelet_readonly_port_enabled: cdktf.stringToTerraform(struct!.insecureKubeletReadonlyPortEnabled),
  }
}


export function containerClusterNodePoolAutoConfigNodeKubeletConfigToHclTerraform(struct?: ContainerClusterNodePoolAutoConfigNodeKubeletConfigOutputReference | ContainerClusterNodePoolAutoConfigNodeKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insecure_kubelet_readonly_port_enabled: {
      value: cdktf.stringToHclTerraform(struct!.insecureKubeletReadonlyPortEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolAutoConfigNodeKubeletConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolAutoConfigNodeKubeletConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecureKubeletReadonlyPortEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureKubeletReadonlyPortEnabled = this._insecureKubeletReadonlyPortEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolAutoConfigNodeKubeletConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insecureKubeletReadonlyPortEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insecureKubeletReadonlyPortEnabled = value.insecureKubeletReadonlyPortEnabled;
    }
  }

  // insecure_kubelet_readonly_port_enabled - computed: true, optional: true, required: false
  private _insecureKubeletReadonlyPortEnabled?: string; 
  public get insecureKubeletReadonlyPortEnabled() {
    return this.getStringAttribute('insecure_kubelet_readonly_port_enabled');
  }
  public set insecureKubeletReadonlyPortEnabled(value: string) {
    this._insecureKubeletReadonlyPortEnabled = value;
  }
  public resetInsecureKubeletReadonlyPortEnabled() {
    this._insecureKubeletReadonlyPortEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureKubeletReadonlyPortEnabledInput() {
    return this._insecureKubeletReadonlyPortEnabled;
  }
}
export interface ContainerClusterNodePoolAutoConfig {
  /**
  * A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#resource_manager_tags ContainerCluster#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
  /**
  * linux_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#linux_node_config ContainerCluster#linux_node_config}
  */
  readonly linuxNodeConfig?: ContainerClusterNodePoolAutoConfigLinuxNodeConfig;
  /**
  * network_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#network_tags ContainerCluster#network_tags}
  */
  readonly networkTags?: ContainerClusterNodePoolAutoConfigNetworkTags;
  /**
  * node_kubelet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#node_kubelet_config ContainerCluster#node_kubelet_config}
  */
  readonly nodeKubeletConfig?: ContainerClusterNodePoolAutoConfigNodeKubeletConfig;
}

export function containerClusterNodePoolAutoConfigToTerraform(struct?: ContainerClusterNodePoolAutoConfigOutputReference | ContainerClusterNodePoolAutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_manager_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceManagerTags),
    linux_node_config: containerClusterNodePoolAutoConfigLinuxNodeConfigToTerraform(struct!.linuxNodeConfig),
    network_tags: containerClusterNodePoolAutoConfigNetworkTagsToTerraform(struct!.networkTags),
    node_kubelet_config: containerClusterNodePoolAutoConfigNodeKubeletConfigToTerraform(struct!.nodeKubeletConfig),
  }
}


export function containerClusterNodePoolAutoConfigToHclTerraform(struct?: ContainerClusterNodePoolAutoConfigOutputReference | ContainerClusterNodePoolAutoConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_manager_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceManagerTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    linux_node_config: {
      value: containerClusterNodePoolAutoConfigLinuxNodeConfigToHclTerraform(struct!.linuxNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolAutoConfigLinuxNodeConfigList",
    },
    network_tags: {
      value: containerClusterNodePoolAutoConfigNetworkTagsToHclTerraform(struct!.networkTags),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolAutoConfigNetworkTagsList",
    },
    node_kubelet_config: {
      value: containerClusterNodePoolAutoConfigNodeKubeletConfigToHclTerraform(struct!.nodeKubeletConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolAutoConfigNodeKubeletConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolAutoConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolAutoConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceManagerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags;
    }
    if (this._linuxNodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxNodeConfig = this._linuxNodeConfig?.internalValue;
    }
    if (this._networkTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkTags = this._networkTags?.internalValue;
    }
    if (this._nodeKubeletConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeKubeletConfig = this._nodeKubeletConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolAutoConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceManagerTags = undefined;
      this._linuxNodeConfig.internalValue = undefined;
      this._networkTags.internalValue = undefined;
      this._nodeKubeletConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceManagerTags = value.resourceManagerTags;
      this._linuxNodeConfig.internalValue = value.linuxNodeConfig;
      this._networkTags.internalValue = value.networkTags;
      this._nodeKubeletConfig.internalValue = value.nodeKubeletConfig;
    }
  }

  // resource_manager_tags - computed: false, optional: true, required: false
  private _resourceManagerTags?: { [key: string]: string }; 
  public get resourceManagerTags() {
    return this.getStringMapAttribute('resource_manager_tags');
  }
  public set resourceManagerTags(value: { [key: string]: string }) {
    this._resourceManagerTags = value;
  }
  public resetResourceManagerTags() {
    this._resourceManagerTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceManagerTagsInput() {
    return this._resourceManagerTags;
  }

  // linux_node_config - computed: false, optional: true, required: false
  private _linuxNodeConfig = new ContainerClusterNodePoolAutoConfigLinuxNodeConfigOutputReference(this, "linux_node_config");
  public get linuxNodeConfig() {
    return this._linuxNodeConfig;
  }
  public putLinuxNodeConfig(value: ContainerClusterNodePoolAutoConfigLinuxNodeConfig) {
    this._linuxNodeConfig.internalValue = value;
  }
  public resetLinuxNodeConfig() {
    this._linuxNodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxNodeConfigInput() {
    return this._linuxNodeConfig.internalValue;
  }

  // network_tags - computed: false, optional: true, required: false
  private _networkTags = new ContainerClusterNodePoolAutoConfigNetworkTagsOutputReference(this, "network_tags");
  public get networkTags() {
    return this._networkTags;
  }
  public putNetworkTags(value: ContainerClusterNodePoolAutoConfigNetworkTags) {
    this._networkTags.internalValue = value;
  }
  public resetNetworkTags() {
    this._networkTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTagsInput() {
    return this._networkTags.internalValue;
  }

  // node_kubelet_config - computed: false, optional: true, required: false
  private _nodeKubeletConfig = new ContainerClusterNodePoolAutoConfigNodeKubeletConfigOutputReference(this, "node_kubelet_config");
  public get nodeKubeletConfig() {
    return this._nodeKubeletConfig;
  }
  public putNodeKubeletConfig(value: ContainerClusterNodePoolAutoConfigNodeKubeletConfig) {
    this._nodeKubeletConfig.internalValue = value;
  }
  public resetNodeKubeletConfig() {
    this._nodeKubeletConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeKubeletConfigInput() {
    return this._nodeKubeletConfig.internalValue;
  }
}
export interface ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig {
  /**
  * URI for the secret that hosts a certificate. Must be in the format 'projects/PROJECT_NUM/secrets/SECRET_NAME/versions/VERSION_OR_LATEST'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#secret_uri ContainerCluster#secret_uri}
  */
  readonly secretUri: string;
}

export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_uri: cdktf.stringToTerraform(struct!.secretUri),
  }
}


export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToHclTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_uri: {
      value: cdktf.stringToHclTerraform(struct!.secretUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretUri = this._secretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretUri = value.secretUri;
    }
  }

  // secret_uri - computed: false, optional: false, required: true
  private _secretUri?: string; 
  public get secretUri() {
    return this.getStringAttribute('secret_uri');
  }
  public set secretUri(value: string) {
    this._secretUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretUriInput() {
    return this._secretUri;
  }
}
export interface ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig {
  /**
  * List of fully-qualified-domain-names. IPv4s and port specification are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#fqdns ContainerCluster#fqdns}
  */
  readonly fqdns: string[];
  /**
  * gcp_secret_manager_certificate_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#gcp_secret_manager_certificate_config ContainerCluster#gcp_secret_manager_certificate_config}
  */
  readonly gcpSecretManagerCertificateConfig: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig;
}

export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fqdns),
    gcp_secret_manager_certificate_config: containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToTerraform(struct!.gcpSecretManagerCertificateConfig),
  }
}


export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToHclTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fqdns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    gcp_secret_manager_certificate_config: {
      value: containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToHclTerraform(struct!.gcpSecretManagerCertificateConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdns = this._fqdns;
    }
    if (this._gcpSecretManagerCertificateConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpSecretManagerCertificateConfig = this._gcpSecretManagerCertificateConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdns = undefined;
      this._gcpSecretManagerCertificateConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdns = value.fqdns;
      this._gcpSecretManagerCertificateConfig.internalValue = value.gcpSecretManagerCertificateConfig;
    }
  }

  // fqdns - computed: false, optional: false, required: true
  private _fqdns?: string[]; 
  public get fqdns() {
    return this.getListAttribute('fqdns');
  }
  public set fqdns(value: string[]) {
    this._fqdns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnsInput() {
    return this._fqdns;
  }

  // gcp_secret_manager_certificate_config - computed: false, optional: false, required: true
  private _gcpSecretManagerCertificateConfig = new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference(this, "gcp_secret_manager_certificate_config");
  public get gcpSecretManagerCertificateConfig() {
    return this._gcpSecretManagerCertificateConfig;
  }
  public putGcpSecretManagerCertificateConfig(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig) {
    this._gcpSecretManagerCertificateConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerCertificateConfigInput() {
    return this._gcpSecretManagerCertificateConfig.internalValue;
  }
}

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference {
    return new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig {
  /**
  * Whether or not private registries are configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * certificate_authority_domain_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#certificate_authority_domain_config ContainerCluster#certificate_authority_domain_config}
  */
  readonly certificateAuthorityDomainConfig?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktf.IResolvable;
}

export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigToTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    certificate_authority_domain_config: cdktf.listMapper(containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToTerraform, true)(struct!.certificateAuthorityDomainConfig),
  }
}


export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigToHclTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig): any {
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
    certificate_authority_domain_config: {
      value: cdktf.listMapperHcl(containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToHclTerraform, true)(struct!.certificateAuthorityDomainConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._certificateAuthorityDomainConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateAuthorityDomainConfig = this._certificateAuthorityDomainConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._certificateAuthorityDomainConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._certificateAuthorityDomainConfig.internalValue = value.certificateAuthorityDomainConfig;
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

  // certificate_authority_domain_config - computed: false, optional: true, required: false
  private _certificateAuthorityDomainConfig = new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList(this, "certificate_authority_domain_config", false);
  public get certificateAuthorityDomainConfig() {
    return this._certificateAuthorityDomainConfig;
  }
  public putCertificateAuthorityDomainConfig(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktf.IResolvable) {
    this._certificateAuthorityDomainConfig.internalValue = value;
  }
  public resetCertificateAuthorityDomainConfig() {
    this._certificateAuthorityDomainConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityDomainConfigInput() {
    return this._certificateAuthorityDomainConfig.internalValue;
  }
}
export interface ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig {
  /**
  * private_registry_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#private_registry_access_config ContainerCluster#private_registry_access_config}
  */
  readonly privateRegistryAccessConfig?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig;
}

export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigToTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_registry_access_config: containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigToTerraform(struct!.privateRegistryAccessConfig),
  }
}


export function containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigToHclTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_registry_access_config: {
      value: containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigToHclTerraform(struct!.privateRegistryAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateRegistryAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateRegistryAccessConfig = this._privateRegistryAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateRegistryAccessConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateRegistryAccessConfig.internalValue = value.privateRegistryAccessConfig;
    }
  }

  // private_registry_access_config - computed: false, optional: true, required: false
  private _privateRegistryAccessConfig = new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfigOutputReference(this, "private_registry_access_config");
  public get privateRegistryAccessConfig() {
    return this._privateRegistryAccessConfig;
  }
  public putPrivateRegistryAccessConfig(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigPrivateRegistryAccessConfig) {
    this._privateRegistryAccessConfig.internalValue = value;
  }
  public resetPrivateRegistryAccessConfig() {
    this._privateRegistryAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateRegistryAccessConfigInput() {
    return this._privateRegistryAccessConfig.internalValue;
  }
}
export interface ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig {
  /**
  * Whether or not GCFS is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigToTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigToHclTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig): any {
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

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig | undefined) {
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
export interface ContainerClusterNodePoolDefaultsNodeConfigDefaults {
  /**
  * Controls whether the kubelet read-only port is enabled. It is strongly recommended to set this to `FALSE`. Possible values: `TRUE`, `FALSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#insecure_kubelet_readonly_port_enabled ContainerCluster#insecure_kubelet_readonly_port_enabled}
  */
  readonly insecureKubeletReadonlyPortEnabled?: string;
  /**
  * Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#logging_variant ContainerCluster#logging_variant}
  */
  readonly loggingVariant?: string;
  /**
  * containerd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#containerd_config ContainerCluster#containerd_config}
  */
  readonly containerdConfig?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig;
  /**
  * gcfs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#gcfs_config ContainerCluster#gcfs_config}
  */
  readonly gcfsConfig?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig;
}

export function containerClusterNodePoolDefaultsNodeConfigDefaultsToTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure_kubelet_readonly_port_enabled: cdktf.stringToTerraform(struct!.insecureKubeletReadonlyPortEnabled),
    logging_variant: cdktf.stringToTerraform(struct!.loggingVariant),
    containerd_config: containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigToTerraform(struct!.containerdConfig),
    gcfs_config: containerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigToTerraform(struct!.gcfsConfig),
  }
}


export function containerClusterNodePoolDefaultsNodeConfigDefaultsToHclTerraform(struct?: ContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference | ContainerClusterNodePoolDefaultsNodeConfigDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insecure_kubelet_readonly_port_enabled: {
      value: cdktf.stringToHclTerraform(struct!.insecureKubeletReadonlyPortEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logging_variant: {
      value: cdktf.stringToHclTerraform(struct!.loggingVariant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    containerd_config: {
      value: containerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigToHclTerraform(struct!.containerdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigList",
    },
    gcfs_config: {
      value: containerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigToHclTerraform(struct!.gcfsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolDefaultsNodeConfigDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecureKubeletReadonlyPortEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureKubeletReadonlyPortEnabled = this._insecureKubeletReadonlyPortEnabled;
    }
    if (this._loggingVariant !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingVariant = this._loggingVariant;
    }
    if (this._containerdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerdConfig = this._containerdConfig?.internalValue;
    }
    if (this._gcfsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcfsConfig = this._gcfsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolDefaultsNodeConfigDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insecureKubeletReadonlyPortEnabled = undefined;
      this._loggingVariant = undefined;
      this._containerdConfig.internalValue = undefined;
      this._gcfsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insecureKubeletReadonlyPortEnabled = value.insecureKubeletReadonlyPortEnabled;
      this._loggingVariant = value.loggingVariant;
      this._containerdConfig.internalValue = value.containerdConfig;
      this._gcfsConfig.internalValue = value.gcfsConfig;
    }
  }

  // insecure_kubelet_readonly_port_enabled - computed: true, optional: true, required: false
  private _insecureKubeletReadonlyPortEnabled?: string; 
  public get insecureKubeletReadonlyPortEnabled() {
    return this.getStringAttribute('insecure_kubelet_readonly_port_enabled');
  }
  public set insecureKubeletReadonlyPortEnabled(value: string) {
    this._insecureKubeletReadonlyPortEnabled = value;
  }
  public resetInsecureKubeletReadonlyPortEnabled() {
    this._insecureKubeletReadonlyPortEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureKubeletReadonlyPortEnabledInput() {
    return this._insecureKubeletReadonlyPortEnabled;
  }

  // logging_variant - computed: true, optional: true, required: false
  private _loggingVariant?: string; 
  public get loggingVariant() {
    return this.getStringAttribute('logging_variant');
  }
  public set loggingVariant(value: string) {
    this._loggingVariant = value;
  }
  public resetLoggingVariant() {
    this._loggingVariant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingVariantInput() {
    return this._loggingVariant;
  }

  // containerd_config - computed: false, optional: true, required: false
  private _containerdConfig = new ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfigOutputReference(this, "containerd_config");
  public get containerdConfig() {
    return this._containerdConfig;
  }
  public putContainerdConfig(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsContainerdConfig) {
    this._containerdConfig.internalValue = value;
  }
  public resetContainerdConfig() {
    this._containerdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerdConfigInput() {
    return this._containerdConfig.internalValue;
  }

  // gcfs_config - computed: false, optional: true, required: false
  private _gcfsConfig = new ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfigOutputReference(this, "gcfs_config");
  public get gcfsConfig() {
    return this._gcfsConfig;
  }
  public putGcfsConfig(value: ContainerClusterNodePoolDefaultsNodeConfigDefaultsGcfsConfig) {
    this._gcfsConfig.internalValue = value;
  }
  public resetGcfsConfig() {
    this._gcfsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcfsConfigInput() {
    return this._gcfsConfig.internalValue;
  }
}
export interface ContainerClusterNodePoolDefaults {
  /**
  * node_config_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#node_config_defaults ContainerCluster#node_config_defaults}
  */
  readonly nodeConfigDefaults?: ContainerClusterNodePoolDefaultsNodeConfigDefaults;
}

export function containerClusterNodePoolDefaultsToTerraform(struct?: ContainerClusterNodePoolDefaultsOutputReference | ContainerClusterNodePoolDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_config_defaults: containerClusterNodePoolDefaultsNodeConfigDefaultsToTerraform(struct!.nodeConfigDefaults),
  }
}


export function containerClusterNodePoolDefaultsToHclTerraform(struct?: ContainerClusterNodePoolDefaultsOutputReference | ContainerClusterNodePoolDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_config_defaults: {
      value: containerClusterNodePoolDefaultsNodeConfigDefaultsToHclTerraform(struct!.nodeConfigDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolDefaultsNodeConfigDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeConfigDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeConfigDefaults = this._nodeConfigDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeConfigDefaults.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeConfigDefaults.internalValue = value.nodeConfigDefaults;
    }
  }

  // node_config_defaults - computed: false, optional: true, required: false
  private _nodeConfigDefaults = new ContainerClusterNodePoolDefaultsNodeConfigDefaultsOutputReference(this, "node_config_defaults");
  public get nodeConfigDefaults() {
    return this._nodeConfigDefaults;
  }
  public putNodeConfigDefaults(value: ContainerClusterNodePoolDefaultsNodeConfigDefaults) {
    this._nodeConfigDefaults.internalValue = value;
  }
  public resetNodeConfigDefaults() {
    this._nodeConfigDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigDefaultsInput() {
    return this._nodeConfigDefaults.internalValue;
  }
}
export interface ContainerClusterNotificationConfigPubsubFilter {
  /**
  * Can be used to filter what notifications are sent. Valid values include include UPGRADE_AVAILABLE_EVENT, UPGRADE_EVENT and SECURITY_BULLETIN_EVENT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#event_type ContainerCluster#event_type}
  */
  readonly eventType: string[];
}

export function containerClusterNotificationConfigPubsubFilterToTerraform(struct?: ContainerClusterNotificationConfigPubsubFilterOutputReference | ContainerClusterNotificationConfigPubsubFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eventType),
  }
}


export function containerClusterNotificationConfigPubsubFilterToHclTerraform(struct?: ContainerClusterNotificationConfigPubsubFilterOutputReference | ContainerClusterNotificationConfigPubsubFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eventType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNotificationConfigPubsubFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNotificationConfigPubsubFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNotificationConfigPubsubFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eventType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eventType = value.eventType;
    }
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string[]; 
  public get eventType() {
    return this.getListAttribute('event_type');
  }
  public set eventType(value: string[]) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }
}
export interface ContainerClusterNotificationConfigPubsub {
  /**
  * Whether or not the notification config is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The pubsub topic to push upgrade notifications to. Must be in the same project as the cluster. Must be in the format: projects/{project}/topics/{topic}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#topic ContainerCluster#topic}
  */
  readonly topic?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#filter ContainerCluster#filter}
  */
  readonly filter?: ContainerClusterNotificationConfigPubsubFilter;
}

export function containerClusterNotificationConfigPubsubToTerraform(struct?: ContainerClusterNotificationConfigPubsubOutputReference | ContainerClusterNotificationConfigPubsub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    topic: cdktf.stringToTerraform(struct!.topic),
    filter: containerClusterNotificationConfigPubsubFilterToTerraform(struct!.filter),
  }
}


export function containerClusterNotificationConfigPubsubToHclTerraform(struct?: ContainerClusterNotificationConfigPubsubOutputReference | ContainerClusterNotificationConfigPubsub): any {
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
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: containerClusterNotificationConfigPubsubFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNotificationConfigPubsubFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNotificationConfigPubsub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._topic = undefined;
      this._filter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._topic = value.topic;
      this._filter.internalValue = value.filter;
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

  // filter - computed: false, optional: true, required: false
  private _filter = new ContainerClusterNotificationConfigPubsubFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: ContainerClusterNotificationConfigPubsubFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}
export interface ContainerClusterNotificationConfig {
  /**
  * pubsub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#pubsub ContainerCluster#pubsub}
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


export function containerClusterNotificationConfigToHclTerraform(struct?: ContainerClusterNotificationConfigOutputReference | ContainerClusterNotificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pubsub: {
      value: containerClusterNotificationConfigPubsubToHclTerraform(struct!.pubsub),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNotificationConfigPubsubList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
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


export function containerClusterPrivateClusterConfigMasterGlobalAccessConfigToHclTerraform(struct?: ContainerClusterPrivateClusterConfigMasterGlobalAccessConfigOutputReference | ContainerClusterPrivateClusterConfigMasterGlobalAccessConfig): any {
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
  * When true, the cluster's private endpoint is used as the cluster endpoint and access through the public endpoint is disabled. When false, either endpoint can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#enable_private_endpoint ContainerCluster#enable_private_endpoint}
  */
  readonly enablePrivateEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Enables the private cluster feature, creating a private endpoint on the cluster. In a private cluster, nodes only have RFC 1918 private addresses and communicate with the master's private endpoint via private networking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#enable_private_nodes ContainerCluster#enable_private_nodes}
  */
  readonly enablePrivateNodes?: boolean | cdktf.IResolvable;
  /**
  * The IP range in CIDR notation to use for the hosted master network. This range will be used for assigning private IP addresses to the cluster master(s) and the ILB VIP. This range must not overlap with any other ranges in use within the cluster's network, and it must be a /28 subnet. See Private Cluster Limitations for more details. This field only applies to private clusters, when enable_private_nodes is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#master_ipv4_cidr_block ContainerCluster#master_ipv4_cidr_block}
  */
  readonly masterIpv4CidrBlock?: string;
  /**
  * Subnetwork in cluster's network where master's endpoint will be provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#private_endpoint_subnetwork ContainerCluster#private_endpoint_subnetwork}
  */
  readonly privateEndpointSubnetwork?: string;
  /**
  * master_global_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#master_global_access_config ContainerCluster#master_global_access_config}
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
    private_endpoint_subnetwork: cdktf.stringToTerraform(struct!.privateEndpointSubnetwork),
    master_global_access_config: containerClusterPrivateClusterConfigMasterGlobalAccessConfigToTerraform(struct!.masterGlobalAccessConfig),
  }
}


export function containerClusterPrivateClusterConfigToHclTerraform(struct?: ContainerClusterPrivateClusterConfigOutputReference | ContainerClusterPrivateClusterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_private_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrivateEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_private_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.enablePrivateNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    master_ipv4_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.masterIpv4CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_endpoint_subnetwork: {
      value: cdktf.stringToHclTerraform(struct!.privateEndpointSubnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_global_access_config: {
      value: containerClusterPrivateClusterConfigMasterGlobalAccessConfigToHclTerraform(struct!.masterGlobalAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterPrivateClusterConfigMasterGlobalAccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._privateEndpointSubnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointSubnetwork = this._privateEndpointSubnetwork;
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
      this._privateEndpointSubnetwork = undefined;
      this._masterGlobalAccessConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enablePrivateEndpoint = value.enablePrivateEndpoint;
      this._enablePrivateNodes = value.enablePrivateNodes;
      this._masterIpv4CidrBlock = value.masterIpv4CidrBlock;
      this._privateEndpointSubnetwork = value.privateEndpointSubnetwork;
      this._masterGlobalAccessConfig.internalValue = value.masterGlobalAccessConfig;
    }
  }

  // enable_private_endpoint - computed: false, optional: true, required: false
  private _enablePrivateEndpoint?: boolean | cdktf.IResolvable; 
  public get enablePrivateEndpoint() {
    return this.getBooleanAttribute('enable_private_endpoint');
  }
  public set enablePrivateEndpoint(value: boolean | cdktf.IResolvable) {
    this._enablePrivateEndpoint = value;
  }
  public resetEnablePrivateEndpoint() {
    this._enablePrivateEndpoint = undefined;
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

  // private_endpoint_subnetwork - computed: false, optional: true, required: false
  private _privateEndpointSubnetwork?: string; 
  public get privateEndpointSubnetwork() {
    return this.getStringAttribute('private_endpoint_subnetwork');
  }
  public set privateEndpointSubnetwork(value: string) {
    this._privateEndpointSubnetwork = value;
  }
  public resetPrivateEndpointSubnetwork() {
    this._privateEndpointSubnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointSubnetworkInput() {
    return this._privateEndpointSubnetwork;
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
  * * UNSPECIFIED: Not set.
  * * RAPID: Weekly upgrade cadence; Early testers and developers who requires new features.
  * * REGULAR: Multiple per month upgrade cadence; Production users who need features not yet offered in the Stable channel.
  * * STABLE: Every few months upgrade cadence; Production users who need stability above all else, and for whom frequent upgrades are too risky.
  * * EXTENDED: GKE provides extended support for Kubernetes minor versions through the Extended channel. With this channel, you can stay on a minor version for up to 24 months.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#channel ContainerCluster#channel}
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


export function containerClusterReleaseChannelToHclTerraform(struct?: ContainerClusterReleaseChannelOutputReference | ContainerClusterReleaseChannel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    channel: {
      value: cdktf.stringToHclTerraform(struct!.channel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#dataset_id ContainerCluster#dataset_id}
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


export function containerClusterResourceUsageExportConfigBigqueryDestinationToHclTerraform(struct?: ContainerClusterResourceUsageExportConfigBigqueryDestinationOutputReference | ContainerClusterResourceUsageExportConfigBigqueryDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#enable_network_egress_metering ContainerCluster#enable_network_egress_metering}
  */
  readonly enableNetworkEgressMetering?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable resource consumption metering on this cluster. When enabled, a table will be created in the resource export BigQuery dataset to store resource consumption data. The resulting table can be joined with the resource usage table or with BigQuery billing export. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#enable_resource_consumption_metering ContainerCluster#enable_resource_consumption_metering}
  */
  readonly enableResourceConsumptionMetering?: boolean | cdktf.IResolvable;
  /**
  * bigquery_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#bigquery_destination ContainerCluster#bigquery_destination}
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


export function containerClusterResourceUsageExportConfigToHclTerraform(struct?: ContainerClusterResourceUsageExportConfigOutputReference | ContainerClusterResourceUsageExportConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_network_egress_metering: {
      value: cdktf.booleanToHclTerraform(struct!.enableNetworkEgressMetering),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_resource_consumption_metering: {
      value: cdktf.booleanToHclTerraform(struct!.enableResourceConsumptionMetering),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bigquery_destination: {
      value: containerClusterResourceUsageExportConfigBigqueryDestinationToHclTerraform(struct!.bigqueryDestination),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterResourceUsageExportConfigBigqueryDestinationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
export interface ContainerClusterSecretManagerConfig {
  /**
  * Enable the Secret manager csi component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterSecretManagerConfigToTerraform(struct?: ContainerClusterSecretManagerConfigOutputReference | ContainerClusterSecretManagerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterSecretManagerConfigToHclTerraform(struct?: ContainerClusterSecretManagerConfigOutputReference | ContainerClusterSecretManagerConfig): any {
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

export class ContainerClusterSecretManagerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterSecretManagerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterSecretManagerConfig | undefined) {
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
export interface ContainerClusterSecurityPostureConfig {
  /**
  * Sets the mode of the Kubernetes security posture API's off-cluster features. Available options include DISABLED, BASIC, and ENTERPRISE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#mode ContainerCluster#mode}
  */
  readonly mode?: string;
  /**
  * Sets the mode of the Kubernetes security posture API's workload vulnerability scanning. Available options include VULNERABILITY_DISABLED, VULNERABILITY_BASIC and VULNERABILITY_ENTERPRISE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#vulnerability_mode ContainerCluster#vulnerability_mode}
  */
  readonly vulnerabilityMode?: string;
}

export function containerClusterSecurityPostureConfigToTerraform(struct?: ContainerClusterSecurityPostureConfigOutputReference | ContainerClusterSecurityPostureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    vulnerability_mode: cdktf.stringToTerraform(struct!.vulnerabilityMode),
  }
}


export function containerClusterSecurityPostureConfigToHclTerraform(struct?: ContainerClusterSecurityPostureConfigOutputReference | ContainerClusterSecurityPostureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vulnerability_mode: {
      value: cdktf.stringToHclTerraform(struct!.vulnerabilityMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterSecurityPostureConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterSecurityPostureConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._vulnerabilityMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerabilityMode = this._vulnerabilityMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterSecurityPostureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._vulnerabilityMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._vulnerabilityMode = value.vulnerabilityMode;
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

  // vulnerability_mode - computed: true, optional: true, required: false
  private _vulnerabilityMode?: string; 
  public get vulnerabilityMode() {
    return this.getStringAttribute('vulnerability_mode');
  }
  public set vulnerabilityMode(value: string) {
    this._vulnerabilityMode = value;
  }
  public resetVulnerabilityMode() {
    this._vulnerabilityMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityModeInput() {
    return this._vulnerabilityMode;
  }
}
export interface ContainerClusterServiceExternalIpsConfig {
  /**
  * When enabled, services with external ips specified will be allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
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


export function containerClusterServiceExternalIpsConfigToHclTerraform(struct?: ContainerClusterServiceExternalIpsConfigOutputReference | ContainerClusterServiceExternalIpsConfig): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#create ContainerCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#delete ContainerCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#read ContainerCluster#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#update ContainerCluster#update}
  */
  readonly update?: string;
}

export function containerClusterTimeoutsToTerraform(struct?: ContainerClusterTimeouts | cdktf.IResolvable): any {
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


export function containerClusterTimeoutsToHclTerraform(struct?: ContainerClusterTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class ContainerClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
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
export interface ContainerClusterUserManagedKeysConfig {
  /**
  * The Certificate Authority Service caPool to use for the aggreation CA in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#aggregation_ca ContainerCluster#aggregation_ca}
  */
  readonly aggregationCa?: string;
  /**
  * The Certificate Authority Service caPool to use for the cluster CA in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#cluster_ca ContainerCluster#cluster_ca}
  */
  readonly clusterCa?: string;
  /**
  * The Cloud KMS cryptoKey to use for Confidential Hyperdisk on the control plane nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#control_plane_disk_encryption_key ContainerCluster#control_plane_disk_encryption_key}
  */
  readonly controlPlaneDiskEncryptionKey?: string;
  /**
  * The Certificate Authority Service caPool to use for the etcd API CA in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#etcd_api_ca ContainerCluster#etcd_api_ca}
  */
  readonly etcdApiCa?: string;
  /**
  * The Certificate Authority Service caPool to use for the etcd peer CA in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#etcd_peer_ca ContainerCluster#etcd_peer_ca}
  */
  readonly etcdPeerCa?: string;
  /**
  * Resource path of the Cloud KMS cryptoKey to use for encryption of internal etcd backups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#gkeops_etcd_backup_encryption_key ContainerCluster#gkeops_etcd_backup_encryption_key}
  */
  readonly gkeopsEtcdBackupEncryptionKey?: string;
  /**
  * The Cloud KMS cryptoKeyVersions to use for signing service account JWTs issued by this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#service_account_signing_keys ContainerCluster#service_account_signing_keys}
  */
  readonly serviceAccountSigningKeys?: string[];
  /**
  * The Cloud KMS cryptoKeyVersions to use for verifying service account JWTs issued by this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#service_account_verification_keys ContainerCluster#service_account_verification_keys}
  */
  readonly serviceAccountVerificationKeys?: string[];
}

export function containerClusterUserManagedKeysConfigToTerraform(struct?: ContainerClusterUserManagedKeysConfigOutputReference | ContainerClusterUserManagedKeysConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_ca: cdktf.stringToTerraform(struct!.aggregationCa),
    cluster_ca: cdktf.stringToTerraform(struct!.clusterCa),
    control_plane_disk_encryption_key: cdktf.stringToTerraform(struct!.controlPlaneDiskEncryptionKey),
    etcd_api_ca: cdktf.stringToTerraform(struct!.etcdApiCa),
    etcd_peer_ca: cdktf.stringToTerraform(struct!.etcdPeerCa),
    gkeops_etcd_backup_encryption_key: cdktf.stringToTerraform(struct!.gkeopsEtcdBackupEncryptionKey),
    service_account_signing_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAccountSigningKeys),
    service_account_verification_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAccountVerificationKeys),
  }
}


export function containerClusterUserManagedKeysConfigToHclTerraform(struct?: ContainerClusterUserManagedKeysConfigOutputReference | ContainerClusterUserManagedKeysConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation_ca: {
      value: cdktf.stringToHclTerraform(struct!.aggregationCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_ca: {
      value: cdktf.stringToHclTerraform(struct!.clusterCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    control_plane_disk_encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.controlPlaneDiskEncryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etcd_api_ca: {
      value: cdktf.stringToHclTerraform(struct!.etcdApiCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    etcd_peer_ca: {
      value: cdktf.stringToHclTerraform(struct!.etcdPeerCa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gkeops_etcd_backup_encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.gkeopsEtcdBackupEncryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_signing_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceAccountSigningKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service_account_verification_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceAccountVerificationKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterUserManagedKeysConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterUserManagedKeysConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationCa = this._aggregationCa;
    }
    if (this._clusterCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterCa = this._clusterCa;
    }
    if (this._controlPlaneDiskEncryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneDiskEncryptionKey = this._controlPlaneDiskEncryptionKey;
    }
    if (this._etcdApiCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcdApiCa = this._etcdApiCa;
    }
    if (this._etcdPeerCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.etcdPeerCa = this._etcdPeerCa;
    }
    if (this._gkeopsEtcdBackupEncryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeopsEtcdBackupEncryptionKey = this._gkeopsEtcdBackupEncryptionKey;
    }
    if (this._serviceAccountSigningKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountSigningKeys = this._serviceAccountSigningKeys;
    }
    if (this._serviceAccountVerificationKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountVerificationKeys = this._serviceAccountVerificationKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterUserManagedKeysConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationCa = undefined;
      this._clusterCa = undefined;
      this._controlPlaneDiskEncryptionKey = undefined;
      this._etcdApiCa = undefined;
      this._etcdPeerCa = undefined;
      this._gkeopsEtcdBackupEncryptionKey = undefined;
      this._serviceAccountSigningKeys = undefined;
      this._serviceAccountVerificationKeys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationCa = value.aggregationCa;
      this._clusterCa = value.clusterCa;
      this._controlPlaneDiskEncryptionKey = value.controlPlaneDiskEncryptionKey;
      this._etcdApiCa = value.etcdApiCa;
      this._etcdPeerCa = value.etcdPeerCa;
      this._gkeopsEtcdBackupEncryptionKey = value.gkeopsEtcdBackupEncryptionKey;
      this._serviceAccountSigningKeys = value.serviceAccountSigningKeys;
      this._serviceAccountVerificationKeys = value.serviceAccountVerificationKeys;
    }
  }

  // aggregation_ca - computed: false, optional: true, required: false
  private _aggregationCa?: string; 
  public get aggregationCa() {
    return this.getStringAttribute('aggregation_ca');
  }
  public set aggregationCa(value: string) {
    this._aggregationCa = value;
  }
  public resetAggregationCa() {
    this._aggregationCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationCaInput() {
    return this._aggregationCa;
  }

  // cluster_ca - computed: false, optional: true, required: false
  private _clusterCa?: string; 
  public get clusterCa() {
    return this.getStringAttribute('cluster_ca');
  }
  public set clusterCa(value: string) {
    this._clusterCa = value;
  }
  public resetClusterCa() {
    this._clusterCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCaInput() {
    return this._clusterCa;
  }

  // control_plane_disk_encryption_key - computed: false, optional: true, required: false
  private _controlPlaneDiskEncryptionKey?: string; 
  public get controlPlaneDiskEncryptionKey() {
    return this.getStringAttribute('control_plane_disk_encryption_key');
  }
  public set controlPlaneDiskEncryptionKey(value: string) {
    this._controlPlaneDiskEncryptionKey = value;
  }
  public resetControlPlaneDiskEncryptionKey() {
    this._controlPlaneDiskEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneDiskEncryptionKeyInput() {
    return this._controlPlaneDiskEncryptionKey;
  }

  // etcd_api_ca - computed: false, optional: true, required: false
  private _etcdApiCa?: string; 
  public get etcdApiCa() {
    return this.getStringAttribute('etcd_api_ca');
  }
  public set etcdApiCa(value: string) {
    this._etcdApiCa = value;
  }
  public resetEtcdApiCa() {
    this._etcdApiCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdApiCaInput() {
    return this._etcdApiCa;
  }

  // etcd_peer_ca - computed: false, optional: true, required: false
  private _etcdPeerCa?: string; 
  public get etcdPeerCa() {
    return this.getStringAttribute('etcd_peer_ca');
  }
  public set etcdPeerCa(value: string) {
    this._etcdPeerCa = value;
  }
  public resetEtcdPeerCa() {
    this._etcdPeerCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etcdPeerCaInput() {
    return this._etcdPeerCa;
  }

  // gkeops_etcd_backup_encryption_key - computed: false, optional: true, required: false
  private _gkeopsEtcdBackupEncryptionKey?: string; 
  public get gkeopsEtcdBackupEncryptionKey() {
    return this.getStringAttribute('gkeops_etcd_backup_encryption_key');
  }
  public set gkeopsEtcdBackupEncryptionKey(value: string) {
    this._gkeopsEtcdBackupEncryptionKey = value;
  }
  public resetGkeopsEtcdBackupEncryptionKey() {
    this._gkeopsEtcdBackupEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeopsEtcdBackupEncryptionKeyInput() {
    return this._gkeopsEtcdBackupEncryptionKey;
  }

  // service_account_signing_keys - computed: false, optional: true, required: false
  private _serviceAccountSigningKeys?: string[]; 
  public get serviceAccountSigningKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('service_account_signing_keys'));
  }
  public set serviceAccountSigningKeys(value: string[]) {
    this._serviceAccountSigningKeys = value;
  }
  public resetServiceAccountSigningKeys() {
    this._serviceAccountSigningKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountSigningKeysInput() {
    return this._serviceAccountSigningKeys;
  }

  // service_account_verification_keys - computed: false, optional: true, required: false
  private _serviceAccountVerificationKeys?: string[]; 
  public get serviceAccountVerificationKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('service_account_verification_keys'));
  }
  public set serviceAccountVerificationKeys(value: string[]) {
    this._serviceAccountVerificationKeys = value;
  }
  public resetServiceAccountVerificationKeys() {
    this._serviceAccountVerificationKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountVerificationKeysInput() {
    return this._serviceAccountVerificationKeys;
  }
}
export interface ContainerClusterVerticalPodAutoscaling {
  /**
  * Enables vertical pod autoscaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
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


export function containerClusterVerticalPodAutoscalingToHclTerraform(struct?: ContainerClusterVerticalPodAutoscalingOutputReference | ContainerClusterVerticalPodAutoscaling): any {
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/container_cluster#workload_pool ContainerCluster#workload_pool}
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


export function containerClusterWorkloadIdentityConfigToHclTerraform(struct?: ContainerClusterWorkloadIdentityConfigOutputReference | ContainerClusterWorkloadIdentityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workload_pool: {
      value: cdktf.stringToHclTerraform(struct!.workloadPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
