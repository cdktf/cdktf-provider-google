/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import * as cdktf from 'cdktf';
export interface ContainerClusterAddonsConfigCloudrunConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#disabled ContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#load_balancer_type ContainerCluster#load_balancer_type}
  */
  readonly loadBalancerType?: string;
}

export function containerClusterAddonsConfigCloudrunConfigToTerraform(struct?: ContainerClusterAddonsConfigCloudrunConfigOutputReference | ContainerClusterAddonsConfigCloudrunConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    load_balancer_type: cdktf.stringToTerraform(struct!.loadBalancerType),
  }
}


export function containerClusterAddonsConfigCloudrunConfigToHclTerraform(struct?: ContainerClusterAddonsConfigCloudrunConfigOutputReference | ContainerClusterAddonsConfigCloudrunConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    load_balancer_type: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterAddonsConfigCloudrunConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfigCloudrunConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._loadBalancerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerType = this._loadBalancerType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigCloudrunConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._loadBalancerType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._loadBalancerType = value.loadBalancerType;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
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
export interface ContainerClusterAddonsConfigConfigConnectorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterAddonsConfigConfigConnectorConfigToTerraform(struct?: ContainerClusterAddonsConfigConfigConnectorConfigOutputReference | ContainerClusterAddonsConfigConfigConnectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterAddonsConfigConfigConnectorConfigToHclTerraform(struct?: ContainerClusterAddonsConfigConfigConnectorConfigOutputReference | ContainerClusterAddonsConfigConfigConnectorConfig): any {
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

export class ContainerClusterAddonsConfigConfigConnectorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfigConfigConnectorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigConfigConnectorConfig | undefined) {
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
export interface ContainerClusterAddonsConfigDnsCacheConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterAddonsConfigDnsCacheConfigToTerraform(struct?: ContainerClusterAddonsConfigDnsCacheConfigOutputReference | ContainerClusterAddonsConfigDnsCacheConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterAddonsConfigDnsCacheConfigToHclTerraform(struct?: ContainerClusterAddonsConfigDnsCacheConfigOutputReference | ContainerClusterAddonsConfigDnsCacheConfig): any {
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

export class ContainerClusterAddonsConfigDnsCacheConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfigDnsCacheConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigDnsCacheConfig | undefined) {
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
export interface ContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterAddonsConfigGcePersistentDiskCsiDriverConfigToTerraform(struct?: ContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigOutputReference | ContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterAddonsConfigGcePersistentDiskCsiDriverConfigToHclTerraform(struct?: ContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigOutputReference | ContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig): any {
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

export class ContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig | undefined) {
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
export interface ContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterAddonsConfigGcpFilestoreCsiDriverConfigToTerraform(struct?: ContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigOutputReference | ContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterAddonsConfigGcpFilestoreCsiDriverConfigToHclTerraform(struct?: ContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigOutputReference | ContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig): any {
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

export class ContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig | undefined) {
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
export interface ContainerClusterAddonsConfigGcsFuseCsiDriverConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterAddonsConfigGcsFuseCsiDriverConfigToTerraform(struct?: ContainerClusterAddonsConfigGcsFuseCsiDriverConfigOutputReference | ContainerClusterAddonsConfigGcsFuseCsiDriverConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterAddonsConfigGcsFuseCsiDriverConfigToHclTerraform(struct?: ContainerClusterAddonsConfigGcsFuseCsiDriverConfigOutputReference | ContainerClusterAddonsConfigGcsFuseCsiDriverConfig): any {
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

export class ContainerClusterAddonsConfigGcsFuseCsiDriverConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfigGcsFuseCsiDriverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigGcsFuseCsiDriverConfig | undefined) {
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
export interface ContainerClusterAddonsConfigGkeBackupAgentConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterAddonsConfigGkeBackupAgentConfigToTerraform(struct?: ContainerClusterAddonsConfigGkeBackupAgentConfigOutputReference | ContainerClusterAddonsConfigGkeBackupAgentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterAddonsConfigGkeBackupAgentConfigToHclTerraform(struct?: ContainerClusterAddonsConfigGkeBackupAgentConfigOutputReference | ContainerClusterAddonsConfigGkeBackupAgentConfig): any {
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

export class ContainerClusterAddonsConfigGkeBackupAgentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfigGkeBackupAgentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigGkeBackupAgentConfig | undefined) {
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
export interface ContainerClusterAddonsConfigHorizontalPodAutoscaling {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#disabled ContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
}

export function containerClusterAddonsConfigHorizontalPodAutoscalingToTerraform(struct?: ContainerClusterAddonsConfigHorizontalPodAutoscalingOutputReference | ContainerClusterAddonsConfigHorizontalPodAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function containerClusterAddonsConfigHorizontalPodAutoscalingToHclTerraform(struct?: ContainerClusterAddonsConfigHorizontalPodAutoscalingOutputReference | ContainerClusterAddonsConfigHorizontalPodAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterAddonsConfigHorizontalPodAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfigHorizontalPodAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigHorizontalPodAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#disabled ContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
}

export function containerClusterAddonsConfigHttpLoadBalancingToTerraform(struct?: ContainerClusterAddonsConfigHttpLoadBalancingOutputReference | ContainerClusterAddonsConfigHttpLoadBalancing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function containerClusterAddonsConfigHttpLoadBalancingToHclTerraform(struct?: ContainerClusterAddonsConfigHttpLoadBalancingOutputReference | ContainerClusterAddonsConfigHttpLoadBalancing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterAddonsConfigHttpLoadBalancingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfigHttpLoadBalancing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigHttpLoadBalancing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#disabled ContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
}

export function containerClusterAddonsConfigNetworkPolicyConfigToTerraform(struct?: ContainerClusterAddonsConfigNetworkPolicyConfigOutputReference | ContainerClusterAddonsConfigNetworkPolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function containerClusterAddonsConfigNetworkPolicyConfigToHclTerraform(struct?: ContainerClusterAddonsConfigNetworkPolicyConfigOutputReference | ContainerClusterAddonsConfigNetworkPolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterAddonsConfigNetworkPolicyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfigNetworkPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigNetworkPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface ContainerClusterAddonsConfigParallelstoreCsiDriverConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterAddonsConfigParallelstoreCsiDriverConfigToTerraform(struct?: ContainerClusterAddonsConfigParallelstoreCsiDriverConfigOutputReference | ContainerClusterAddonsConfigParallelstoreCsiDriverConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterAddonsConfigParallelstoreCsiDriverConfigToHclTerraform(struct?: ContainerClusterAddonsConfigParallelstoreCsiDriverConfigOutputReference | ContainerClusterAddonsConfigParallelstoreCsiDriverConfig): any {
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

export class ContainerClusterAddonsConfigParallelstoreCsiDriverConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfigParallelstoreCsiDriverConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigParallelstoreCsiDriverConfig | undefined) {
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
export interface ContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigToTerraform(struct?: ContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigOutputReference | ContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigToHclTerraform(struct?: ContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigOutputReference | ContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfig): any {
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

export class ContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfig | undefined) {
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
export interface ContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigToTerraform(struct?: ContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigOutputReference | ContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigToHclTerraform(struct?: ContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigOutputReference | ContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfig): any {
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

export class ContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfig | undefined) {
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
export interface ContainerClusterAddonsConfigRayOperatorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * ray_cluster_logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#ray_cluster_logging_config ContainerCluster#ray_cluster_logging_config}
  */
  readonly rayClusterLoggingConfig?: ContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfig;
  /**
  * ray_cluster_monitoring_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#ray_cluster_monitoring_config ContainerCluster#ray_cluster_monitoring_config}
  */
  readonly rayClusterMonitoringConfig?: ContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfig;
}

export function containerClusterAddonsConfigRayOperatorConfigToTerraform(struct?: ContainerClusterAddonsConfigRayOperatorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ray_cluster_logging_config: containerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigToTerraform(struct!.rayClusterLoggingConfig),
    ray_cluster_monitoring_config: containerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigToTerraform(struct!.rayClusterMonitoringConfig),
  }
}


export function containerClusterAddonsConfigRayOperatorConfigToHclTerraform(struct?: ContainerClusterAddonsConfigRayOperatorConfig | cdktf.IResolvable): any {
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
    ray_cluster_logging_config: {
      value: containerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigToHclTerraform(struct!.rayClusterLoggingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigList",
    },
    ray_cluster_monitoring_config: {
      value: containerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigToHclTerraform(struct!.rayClusterMonitoringConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterAddonsConfigRayOperatorConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterAddonsConfigRayOperatorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._rayClusterLoggingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rayClusterLoggingConfig = this._rayClusterLoggingConfig?.internalValue;
    }
    if (this._rayClusterMonitoringConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rayClusterMonitoringConfig = this._rayClusterMonitoringConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigRayOperatorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._rayClusterLoggingConfig.internalValue = undefined;
      this._rayClusterMonitoringConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._rayClusterLoggingConfig.internalValue = value.rayClusterLoggingConfig;
      this._rayClusterMonitoringConfig.internalValue = value.rayClusterMonitoringConfig;
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

  // ray_cluster_logging_config - computed: false, optional: true, required: false
  private _rayClusterLoggingConfig = new ContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfigOutputReference(this, "ray_cluster_logging_config");
  public get rayClusterLoggingConfig() {
    return this._rayClusterLoggingConfig;
  }
  public putRayClusterLoggingConfig(value: ContainerClusterAddonsConfigRayOperatorConfigRayClusterLoggingConfig) {
    this._rayClusterLoggingConfig.internalValue = value;
  }
  public resetRayClusterLoggingConfig() {
    this._rayClusterLoggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rayClusterLoggingConfigInput() {
    return this._rayClusterLoggingConfig.internalValue;
  }

  // ray_cluster_monitoring_config - computed: false, optional: true, required: false
  private _rayClusterMonitoringConfig = new ContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfigOutputReference(this, "ray_cluster_monitoring_config");
  public get rayClusterMonitoringConfig() {
    return this._rayClusterMonitoringConfig;
  }
  public putRayClusterMonitoringConfig(value: ContainerClusterAddonsConfigRayOperatorConfigRayClusterMonitoringConfig) {
    this._rayClusterMonitoringConfig.internalValue = value;
  }
  public resetRayClusterMonitoringConfig() {
    this._rayClusterMonitoringConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rayClusterMonitoringConfigInput() {
    return this._rayClusterMonitoringConfig.internalValue;
  }
}

export class ContainerClusterAddonsConfigRayOperatorConfigList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterAddonsConfigRayOperatorConfig[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterAddonsConfigRayOperatorConfigOutputReference {
    return new ContainerClusterAddonsConfigRayOperatorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterAddonsConfigStatefulHaConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterAddonsConfigStatefulHaConfigToTerraform(struct?: ContainerClusterAddonsConfigStatefulHaConfigOutputReference | ContainerClusterAddonsConfigStatefulHaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterAddonsConfigStatefulHaConfigToHclTerraform(struct?: ContainerClusterAddonsConfigStatefulHaConfigOutputReference | ContainerClusterAddonsConfigStatefulHaConfig): any {
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

export class ContainerClusterAddonsConfigStatefulHaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfigStatefulHaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfigStatefulHaConfig | undefined) {
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
export interface ContainerClusterAddonsConfig {
  /**
  * cloudrun_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#cloudrun_config ContainerCluster#cloudrun_config}
  */
  readonly cloudrunConfig?: ContainerClusterAddonsConfigCloudrunConfig;
  /**
  * config_connector_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#config_connector_config ContainerCluster#config_connector_config}
  */
  readonly configConnectorConfig?: ContainerClusterAddonsConfigConfigConnectorConfig;
  /**
  * dns_cache_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#dns_cache_config ContainerCluster#dns_cache_config}
  */
  readonly dnsCacheConfig?: ContainerClusterAddonsConfigDnsCacheConfig;
  /**
  * gce_persistent_disk_csi_driver_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#gce_persistent_disk_csi_driver_config ContainerCluster#gce_persistent_disk_csi_driver_config}
  */
  readonly gcePersistentDiskCsiDriverConfig?: ContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig;
  /**
  * gcp_filestore_csi_driver_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#gcp_filestore_csi_driver_config ContainerCluster#gcp_filestore_csi_driver_config}
  */
  readonly gcpFilestoreCsiDriverConfig?: ContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig;
  /**
  * gcs_fuse_csi_driver_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#gcs_fuse_csi_driver_config ContainerCluster#gcs_fuse_csi_driver_config}
  */
  readonly gcsFuseCsiDriverConfig?: ContainerClusterAddonsConfigGcsFuseCsiDriverConfig;
  /**
  * gke_backup_agent_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#gke_backup_agent_config ContainerCluster#gke_backup_agent_config}
  */
  readonly gkeBackupAgentConfig?: ContainerClusterAddonsConfigGkeBackupAgentConfig;
  /**
  * horizontal_pod_autoscaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#horizontal_pod_autoscaling ContainerCluster#horizontal_pod_autoscaling}
  */
  readonly horizontalPodAutoscaling?: ContainerClusterAddonsConfigHorizontalPodAutoscaling;
  /**
  * http_load_balancing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#http_load_balancing ContainerCluster#http_load_balancing}
  */
  readonly httpLoadBalancing?: ContainerClusterAddonsConfigHttpLoadBalancing;
  /**
  * network_policy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#network_policy_config ContainerCluster#network_policy_config}
  */
  readonly networkPolicyConfig?: ContainerClusterAddonsConfigNetworkPolicyConfig;
  /**
  * parallelstore_csi_driver_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#parallelstore_csi_driver_config ContainerCluster#parallelstore_csi_driver_config}
  */
  readonly parallelstoreCsiDriverConfig?: ContainerClusterAddonsConfigParallelstoreCsiDriverConfig;
  /**
  * ray_operator_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#ray_operator_config ContainerCluster#ray_operator_config}
  */
  readonly rayOperatorConfig?: ContainerClusterAddonsConfigRayOperatorConfig[] | cdktf.IResolvable;
  /**
  * stateful_ha_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#stateful_ha_config ContainerCluster#stateful_ha_config}
  */
  readonly statefulHaConfig?: ContainerClusterAddonsConfigStatefulHaConfig;
}

export function containerClusterAddonsConfigToTerraform(struct?: ContainerClusterAddonsConfigOutputReference | ContainerClusterAddonsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudrun_config: containerClusterAddonsConfigCloudrunConfigToTerraform(struct!.cloudrunConfig),
    config_connector_config: containerClusterAddonsConfigConfigConnectorConfigToTerraform(struct!.configConnectorConfig),
    dns_cache_config: containerClusterAddonsConfigDnsCacheConfigToTerraform(struct!.dnsCacheConfig),
    gce_persistent_disk_csi_driver_config: containerClusterAddonsConfigGcePersistentDiskCsiDriverConfigToTerraform(struct!.gcePersistentDiskCsiDriverConfig),
    gcp_filestore_csi_driver_config: containerClusterAddonsConfigGcpFilestoreCsiDriverConfigToTerraform(struct!.gcpFilestoreCsiDriverConfig),
    gcs_fuse_csi_driver_config: containerClusterAddonsConfigGcsFuseCsiDriverConfigToTerraform(struct!.gcsFuseCsiDriverConfig),
    gke_backup_agent_config: containerClusterAddonsConfigGkeBackupAgentConfigToTerraform(struct!.gkeBackupAgentConfig),
    horizontal_pod_autoscaling: containerClusterAddonsConfigHorizontalPodAutoscalingToTerraform(struct!.horizontalPodAutoscaling),
    http_load_balancing: containerClusterAddonsConfigHttpLoadBalancingToTerraform(struct!.httpLoadBalancing),
    network_policy_config: containerClusterAddonsConfigNetworkPolicyConfigToTerraform(struct!.networkPolicyConfig),
    parallelstore_csi_driver_config: containerClusterAddonsConfigParallelstoreCsiDriverConfigToTerraform(struct!.parallelstoreCsiDriverConfig),
    ray_operator_config: cdktf.listMapper(containerClusterAddonsConfigRayOperatorConfigToTerraform, true)(struct!.rayOperatorConfig),
    stateful_ha_config: containerClusterAddonsConfigStatefulHaConfigToTerraform(struct!.statefulHaConfig),
  }
}


export function containerClusterAddonsConfigToHclTerraform(struct?: ContainerClusterAddonsConfigOutputReference | ContainerClusterAddonsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloudrun_config: {
      value: containerClusterAddonsConfigCloudrunConfigToHclTerraform(struct!.cloudrunConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterAddonsConfigCloudrunConfigList",
    },
    config_connector_config: {
      value: containerClusterAddonsConfigConfigConnectorConfigToHclTerraform(struct!.configConnectorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterAddonsConfigConfigConnectorConfigList",
    },
    dns_cache_config: {
      value: containerClusterAddonsConfigDnsCacheConfigToHclTerraform(struct!.dnsCacheConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterAddonsConfigDnsCacheConfigList",
    },
    gce_persistent_disk_csi_driver_config: {
      value: containerClusterAddonsConfigGcePersistentDiskCsiDriverConfigToHclTerraform(struct!.gcePersistentDiskCsiDriverConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigList",
    },
    gcp_filestore_csi_driver_config: {
      value: containerClusterAddonsConfigGcpFilestoreCsiDriverConfigToHclTerraform(struct!.gcpFilestoreCsiDriverConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigList",
    },
    gcs_fuse_csi_driver_config: {
      value: containerClusterAddonsConfigGcsFuseCsiDriverConfigToHclTerraform(struct!.gcsFuseCsiDriverConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterAddonsConfigGcsFuseCsiDriverConfigList",
    },
    gke_backup_agent_config: {
      value: containerClusterAddonsConfigGkeBackupAgentConfigToHclTerraform(struct!.gkeBackupAgentConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterAddonsConfigGkeBackupAgentConfigList",
    },
    horizontal_pod_autoscaling: {
      value: containerClusterAddonsConfigHorizontalPodAutoscalingToHclTerraform(struct!.horizontalPodAutoscaling),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterAddonsConfigHorizontalPodAutoscalingList",
    },
    http_load_balancing: {
      value: containerClusterAddonsConfigHttpLoadBalancingToHclTerraform(struct!.httpLoadBalancing),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterAddonsConfigHttpLoadBalancingList",
    },
    network_policy_config: {
      value: containerClusterAddonsConfigNetworkPolicyConfigToHclTerraform(struct!.networkPolicyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterAddonsConfigNetworkPolicyConfigList",
    },
    parallelstore_csi_driver_config: {
      value: containerClusterAddonsConfigParallelstoreCsiDriverConfigToHclTerraform(struct!.parallelstoreCsiDriverConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterAddonsConfigParallelstoreCsiDriverConfigList",
    },
    ray_operator_config: {
      value: cdktf.listMapperHcl(containerClusterAddonsConfigRayOperatorConfigToHclTerraform, true)(struct!.rayOperatorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterAddonsConfigRayOperatorConfigList",
    },
    stateful_ha_config: {
      value: containerClusterAddonsConfigStatefulHaConfigToHclTerraform(struct!.statefulHaConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterAddonsConfigStatefulHaConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterAddonsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAddonsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudrunConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudrunConfig = this._cloudrunConfig?.internalValue;
    }
    if (this._configConnectorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configConnectorConfig = this._configConnectorConfig?.internalValue;
    }
    if (this._dnsCacheConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCacheConfig = this._dnsCacheConfig?.internalValue;
    }
    if (this._gcePersistentDiskCsiDriverConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcePersistentDiskCsiDriverConfig = this._gcePersistentDiskCsiDriverConfig?.internalValue;
    }
    if (this._gcpFilestoreCsiDriverConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpFilestoreCsiDriverConfig = this._gcpFilestoreCsiDriverConfig?.internalValue;
    }
    if (this._gcsFuseCsiDriverConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsFuseCsiDriverConfig = this._gcsFuseCsiDriverConfig?.internalValue;
    }
    if (this._gkeBackupAgentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gkeBackupAgentConfig = this._gkeBackupAgentConfig?.internalValue;
    }
    if (this._horizontalPodAutoscaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.horizontalPodAutoscaling = this._horizontalPodAutoscaling?.internalValue;
    }
    if (this._httpLoadBalancing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpLoadBalancing = this._httpLoadBalancing?.internalValue;
    }
    if (this._networkPolicyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicyConfig = this._networkPolicyConfig?.internalValue;
    }
    if (this._parallelstoreCsiDriverConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelstoreCsiDriverConfig = this._parallelstoreCsiDriverConfig?.internalValue;
    }
    if (this._rayOperatorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rayOperatorConfig = this._rayOperatorConfig?.internalValue;
    }
    if (this._statefulHaConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statefulHaConfig = this._statefulHaConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAddonsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudrunConfig.internalValue = undefined;
      this._configConnectorConfig.internalValue = undefined;
      this._dnsCacheConfig.internalValue = undefined;
      this._gcePersistentDiskCsiDriverConfig.internalValue = undefined;
      this._gcpFilestoreCsiDriverConfig.internalValue = undefined;
      this._gcsFuseCsiDriverConfig.internalValue = undefined;
      this._gkeBackupAgentConfig.internalValue = undefined;
      this._horizontalPodAutoscaling.internalValue = undefined;
      this._httpLoadBalancing.internalValue = undefined;
      this._networkPolicyConfig.internalValue = undefined;
      this._parallelstoreCsiDriverConfig.internalValue = undefined;
      this._rayOperatorConfig.internalValue = undefined;
      this._statefulHaConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudrunConfig.internalValue = value.cloudrunConfig;
      this._configConnectorConfig.internalValue = value.configConnectorConfig;
      this._dnsCacheConfig.internalValue = value.dnsCacheConfig;
      this._gcePersistentDiskCsiDriverConfig.internalValue = value.gcePersistentDiskCsiDriverConfig;
      this._gcpFilestoreCsiDriverConfig.internalValue = value.gcpFilestoreCsiDriverConfig;
      this._gcsFuseCsiDriverConfig.internalValue = value.gcsFuseCsiDriverConfig;
      this._gkeBackupAgentConfig.internalValue = value.gkeBackupAgentConfig;
      this._horizontalPodAutoscaling.internalValue = value.horizontalPodAutoscaling;
      this._httpLoadBalancing.internalValue = value.httpLoadBalancing;
      this._networkPolicyConfig.internalValue = value.networkPolicyConfig;
      this._parallelstoreCsiDriverConfig.internalValue = value.parallelstoreCsiDriverConfig;
      this._rayOperatorConfig.internalValue = value.rayOperatorConfig;
      this._statefulHaConfig.internalValue = value.statefulHaConfig;
    }
  }

  // cloudrun_config - computed: false, optional: true, required: false
  private _cloudrunConfig = new ContainerClusterAddonsConfigCloudrunConfigOutputReference(this, "cloudrun_config");
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

  // config_connector_config - computed: false, optional: true, required: false
  private _configConnectorConfig = new ContainerClusterAddonsConfigConfigConnectorConfigOutputReference(this, "config_connector_config");
  public get configConnectorConfig() {
    return this._configConnectorConfig;
  }
  public putConfigConnectorConfig(value: ContainerClusterAddonsConfigConfigConnectorConfig) {
    this._configConnectorConfig.internalValue = value;
  }
  public resetConfigConnectorConfig() {
    this._configConnectorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configConnectorConfigInput() {
    return this._configConnectorConfig.internalValue;
  }

  // dns_cache_config - computed: false, optional: true, required: false
  private _dnsCacheConfig = new ContainerClusterAddonsConfigDnsCacheConfigOutputReference(this, "dns_cache_config");
  public get dnsCacheConfig() {
    return this._dnsCacheConfig;
  }
  public putDnsCacheConfig(value: ContainerClusterAddonsConfigDnsCacheConfig) {
    this._dnsCacheConfig.internalValue = value;
  }
  public resetDnsCacheConfig() {
    this._dnsCacheConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheConfigInput() {
    return this._dnsCacheConfig.internalValue;
  }

  // gce_persistent_disk_csi_driver_config - computed: false, optional: true, required: false
  private _gcePersistentDiskCsiDriverConfig = new ContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfigOutputReference(this, "gce_persistent_disk_csi_driver_config");
  public get gcePersistentDiskCsiDriverConfig() {
    return this._gcePersistentDiskCsiDriverConfig;
  }
  public putGcePersistentDiskCsiDriverConfig(value: ContainerClusterAddonsConfigGcePersistentDiskCsiDriverConfig) {
    this._gcePersistentDiskCsiDriverConfig.internalValue = value;
  }
  public resetGcePersistentDiskCsiDriverConfig() {
    this._gcePersistentDiskCsiDriverConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcePersistentDiskCsiDriverConfigInput() {
    return this._gcePersistentDiskCsiDriverConfig.internalValue;
  }

  // gcp_filestore_csi_driver_config - computed: false, optional: true, required: false
  private _gcpFilestoreCsiDriverConfig = new ContainerClusterAddonsConfigGcpFilestoreCsiDriverConfigOutputReference(this, "gcp_filestore_csi_driver_config");
  public get gcpFilestoreCsiDriverConfig() {
    return this._gcpFilestoreCsiDriverConfig;
  }
  public putGcpFilestoreCsiDriverConfig(value: ContainerClusterAddonsConfigGcpFilestoreCsiDriverConfig) {
    this._gcpFilestoreCsiDriverConfig.internalValue = value;
  }
  public resetGcpFilestoreCsiDriverConfig() {
    this._gcpFilestoreCsiDriverConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpFilestoreCsiDriverConfigInput() {
    return this._gcpFilestoreCsiDriverConfig.internalValue;
  }

  // gcs_fuse_csi_driver_config - computed: false, optional: true, required: false
  private _gcsFuseCsiDriverConfig = new ContainerClusterAddonsConfigGcsFuseCsiDriverConfigOutputReference(this, "gcs_fuse_csi_driver_config");
  public get gcsFuseCsiDriverConfig() {
    return this._gcsFuseCsiDriverConfig;
  }
  public putGcsFuseCsiDriverConfig(value: ContainerClusterAddonsConfigGcsFuseCsiDriverConfig) {
    this._gcsFuseCsiDriverConfig.internalValue = value;
  }
  public resetGcsFuseCsiDriverConfig() {
    this._gcsFuseCsiDriverConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsFuseCsiDriverConfigInput() {
    return this._gcsFuseCsiDriverConfig.internalValue;
  }

  // gke_backup_agent_config - computed: false, optional: true, required: false
  private _gkeBackupAgentConfig = new ContainerClusterAddonsConfigGkeBackupAgentConfigOutputReference(this, "gke_backup_agent_config");
  public get gkeBackupAgentConfig() {
    return this._gkeBackupAgentConfig;
  }
  public putGkeBackupAgentConfig(value: ContainerClusterAddonsConfigGkeBackupAgentConfig) {
    this._gkeBackupAgentConfig.internalValue = value;
  }
  public resetGkeBackupAgentConfig() {
    this._gkeBackupAgentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gkeBackupAgentConfigInput() {
    return this._gkeBackupAgentConfig.internalValue;
  }

  // horizontal_pod_autoscaling - computed: false, optional: true, required: false
  private _horizontalPodAutoscaling = new ContainerClusterAddonsConfigHorizontalPodAutoscalingOutputReference(this, "horizontal_pod_autoscaling");
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
  private _httpLoadBalancing = new ContainerClusterAddonsConfigHttpLoadBalancingOutputReference(this, "http_load_balancing");
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
  private _networkPolicyConfig = new ContainerClusterAddonsConfigNetworkPolicyConfigOutputReference(this, "network_policy_config");
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

  // parallelstore_csi_driver_config - computed: false, optional: true, required: false
  private _parallelstoreCsiDriverConfig = new ContainerClusterAddonsConfigParallelstoreCsiDriverConfigOutputReference(this, "parallelstore_csi_driver_config");
  public get parallelstoreCsiDriverConfig() {
    return this._parallelstoreCsiDriverConfig;
  }
  public putParallelstoreCsiDriverConfig(value: ContainerClusterAddonsConfigParallelstoreCsiDriverConfig) {
    this._parallelstoreCsiDriverConfig.internalValue = value;
  }
  public resetParallelstoreCsiDriverConfig() {
    this._parallelstoreCsiDriverConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelstoreCsiDriverConfigInput() {
    return this._parallelstoreCsiDriverConfig.internalValue;
  }

  // ray_operator_config - computed: false, optional: true, required: false
  private _rayOperatorConfig = new ContainerClusterAddonsConfigRayOperatorConfigList(this, "ray_operator_config", false);
  public get rayOperatorConfig() {
    return this._rayOperatorConfig;
  }
  public putRayOperatorConfig(value: ContainerClusterAddonsConfigRayOperatorConfig[] | cdktf.IResolvable) {
    this._rayOperatorConfig.internalValue = value;
  }
  public resetRayOperatorConfig() {
    this._rayOperatorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rayOperatorConfigInput() {
    return this._rayOperatorConfig.internalValue;
  }

  // stateful_ha_config - computed: false, optional: true, required: false
  private _statefulHaConfig = new ContainerClusterAddonsConfigStatefulHaConfigOutputReference(this, "stateful_ha_config");
  public get statefulHaConfig() {
    return this._statefulHaConfig;
  }
  public putStatefulHaConfig(value: ContainerClusterAddonsConfigStatefulHaConfig) {
    this._statefulHaConfig.internalValue = value;
  }
  public resetStatefulHaConfig() {
    this._statefulHaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulHaConfigInput() {
    return this._statefulHaConfig.internalValue;
  }
}
export interface ContainerClusterAnonymousAuthenticationConfig {
  /**
  * Setting this to LIMITED will restrict authentication of anonymous users to health check endpoints only.
  *  Accepted values are:
  * * ENABLED: Authentication of anonymous users is enabled for all endpoints.
  * * LIMITED: Anonymous access is only allowed for health check endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#mode ContainerCluster#mode}
  */
  readonly mode: string;
}

export function containerClusterAnonymousAuthenticationConfigToTerraform(struct?: ContainerClusterAnonymousAuthenticationConfigOutputReference | ContainerClusterAnonymousAuthenticationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function containerClusterAnonymousAuthenticationConfigToHclTerraform(struct?: ContainerClusterAnonymousAuthenticationConfigOutputReference | ContainerClusterAnonymousAuthenticationConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterAnonymousAuthenticationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAnonymousAuthenticationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAnonymousAuthenticationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface ContainerClusterAuthenticatorGroupsConfig {
  /**
  * The name of the RBAC security group for use with Google security groups in Kubernetes RBAC. Group name must be in format gke-security-groups@yourdomain.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#security_group ContainerCluster#security_group}
  */
  readonly securityGroup: string;
}

export function containerClusterAuthenticatorGroupsConfigToTerraform(struct?: ContainerClusterAuthenticatorGroupsConfigOutputReference | ContainerClusterAuthenticatorGroupsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_group: cdktf.stringToTerraform(struct!.securityGroup),
  }
}


export function containerClusterAuthenticatorGroupsConfigToHclTerraform(struct?: ContainerClusterAuthenticatorGroupsConfigOutputReference | ContainerClusterAuthenticatorGroupsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_group: {
      value: cdktf.stringToHclTerraform(struct!.securityGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterAuthenticatorGroupsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterAuthenticatorGroupsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroup = this._securityGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterAuthenticatorGroupsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface ContainerClusterBinaryAuthorization {
  /**
  * Enable Binary Authorization for this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Mode of operation for Binary Authorization policy evaluation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#evaluation_mode ContainerCluster#evaluation_mode}
  */
  readonly evaluationMode?: string;
}

export function containerClusterBinaryAuthorizationToTerraform(struct?: ContainerClusterBinaryAuthorizationOutputReference | ContainerClusterBinaryAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    evaluation_mode: cdktf.stringToTerraform(struct!.evaluationMode),
  }
}


export function containerClusterBinaryAuthorizationToHclTerraform(struct?: ContainerClusterBinaryAuthorizationOutputReference | ContainerClusterBinaryAuthorization): any {
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
    evaluation_mode: {
      value: cdktf.stringToHclTerraform(struct!.evaluationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterBinaryAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterBinaryAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._evaluationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationMode = this._evaluationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterBinaryAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._evaluationMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._evaluationMode = value.evaluationMode;
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

  // evaluation_mode - computed: true, optional: true, required: false
  private _evaluationMode?: string; 
  public get evaluationMode() {
    return this.getStringAttribute('evaluation_mode');
  }
  public set evaluationMode(value: string) {
    this._evaluationMode = value;
  }
  public resetEvaluationMode() {
    this._evaluationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationModeInput() {
    return this._evaluationMode;
  }
}
export interface ContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptions {
}

export function containerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsToTerraform(struct?: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function containerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsToHclTerraform(struct?: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto_upgrade_start_time - computed: true, optional: false, required: false
  public get autoUpgradeStartTime() {
    return this.getStringAttribute('auto_upgrade_start_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }
}

export class ContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsList extends cdktf.ComplexList {

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
  public get(index: number): ContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsOutputReference {
    return new ContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement {
  /**
  * Specifies whether the node auto-repair is enabled for the node pool. If enabled, the nodes in this node pool will be monitored and, if they fail health checks too many times, an automatic repair action will be triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#auto_repair ContainerCluster#auto_repair}
  */
  readonly autoRepair?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether node auto-upgrade is enabled for the node pool. If enabled, node auto-upgrade helps keep the nodes in your node pool up to date with the latest release version of Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#auto_upgrade ContainerCluster#auto_upgrade}
  */
  readonly autoUpgrade?: boolean | cdktf.IResolvable;
}

export function containerClusterClusterAutoscalingAutoProvisioningDefaultsManagementToTerraform(struct?: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementOutputReference | ContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_repair: cdktf.booleanToTerraform(struct!.autoRepair),
    auto_upgrade: cdktf.booleanToTerraform(struct!.autoUpgrade),
  }
}


export function containerClusterClusterAutoscalingAutoProvisioningDefaultsManagementToHclTerraform(struct?: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementOutputReference | ContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_repair: {
      value: cdktf.booleanToHclTerraform(struct!.autoRepair),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.autoUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRepair !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRepair = this._autoRepair;
    }
    if (this._autoUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgrade = this._autoUpgrade;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoRepair = undefined;
      this._autoUpgrade = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoRepair = value.autoRepair;
      this._autoUpgrade = value.autoUpgrade;
    }
  }

  // auto_repair - computed: true, optional: true, required: false
  private _autoRepair?: boolean | cdktf.IResolvable; 
  public get autoRepair() {
    return this.getBooleanAttribute('auto_repair');
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

  // auto_upgrade - computed: true, optional: true, required: false
  private _autoUpgrade?: boolean | cdktf.IResolvable; 
  public get autoUpgrade() {
    return this.getBooleanAttribute('auto_upgrade');
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

  // upgrade_options - computed: true, optional: false, required: false
  private _upgradeOptions = new ContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementUpgradeOptionsList(this, "upgrade_options", false);
  public get upgradeOptions() {
    return this._upgradeOptions;
  }
}
export interface ContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enable_integrity_monitoring ContainerCluster#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enable_secure_boot ContainerCluster#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
}

export function containerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigToTerraform(struct?: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigOutputReference | ContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}


export function containerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigToHclTerraform(struct?: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigOutputReference | ContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_integrity_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.enableIntegrityMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_secure_boot: {
      value: cdktf.booleanToHclTerraform(struct!.enableSecureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
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
    return this.getBooleanAttribute('enable_secure_boot');
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
export interface ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy {
  /**
  * Number of blue nodes to drain in a batch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#batch_node_count ContainerCluster#batch_node_count}
  */
  readonly batchNodeCount?: number;
  /**
  * Percentage of the bool pool nodes to drain in a batch. The range of this field should be (0.0, 1.0].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#batch_percentage ContainerCluster#batch_percentage}
  */
  readonly batchPercentage?: number;
  /**
  * Soak time after each batch gets drained.
  * 
  * 																			A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#batch_soak_duration ContainerCluster#batch_soak_duration}
  */
  readonly batchSoakDuration?: string;
}

export function containerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToTerraform(struct?: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference | ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_node_count: cdktf.numberToTerraform(struct!.batchNodeCount),
    batch_percentage: cdktf.numberToTerraform(struct!.batchPercentage),
    batch_soak_duration: cdktf.stringToTerraform(struct!.batchSoakDuration),
  }
}


export function containerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToHclTerraform(struct?: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference | ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_node_count: {
      value: cdktf.numberToHclTerraform(struct!.batchNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_percentage: {
      value: cdktf.numberToHclTerraform(struct!.batchPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_soak_duration: {
      value: cdktf.stringToHclTerraform(struct!.batchSoakDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchNodeCount = this._batchNodeCount;
    }
    if (this._batchPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchPercentage = this._batchPercentage;
    }
    if (this._batchSoakDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSoakDuration = this._batchSoakDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchNodeCount = undefined;
      this._batchPercentage = undefined;
      this._batchSoakDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchNodeCount = value.batchNodeCount;
      this._batchPercentage = value.batchPercentage;
      this._batchSoakDuration = value.batchSoakDuration;
    }
  }

  // batch_node_count - computed: true, optional: true, required: false
  private _batchNodeCount?: number; 
  public get batchNodeCount() {
    return this.getNumberAttribute('batch_node_count');
  }
  public set batchNodeCount(value: number) {
    this._batchNodeCount = value;
  }
  public resetBatchNodeCount() {
    this._batchNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchNodeCountInput() {
    return this._batchNodeCount;
  }

  // batch_percentage - computed: true, optional: true, required: false
  private _batchPercentage?: number; 
  public get batchPercentage() {
    return this.getNumberAttribute('batch_percentage');
  }
  public set batchPercentage(value: number) {
    this._batchPercentage = value;
  }
  public resetBatchPercentage() {
    this._batchPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchPercentageInput() {
    return this._batchPercentage;
  }

  // batch_soak_duration - computed: false, optional: true, required: false
  private _batchSoakDuration?: string; 
  public get batchSoakDuration() {
    return this.getStringAttribute('batch_soak_duration');
  }
  public set batchSoakDuration(value: string) {
    this._batchSoakDuration = value;
  }
  public resetBatchSoakDuration() {
    this._batchSoakDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSoakDurationInput() {
    return this._batchSoakDuration;
  }
}
export interface ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings {
  /**
  * Time needed after draining entire blue pool. After this period, blue pool will be cleaned up.
  * 
  * 																A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#node_pool_soak_duration ContainerCluster#node_pool_soak_duration}
  */
  readonly nodePoolSoakDuration?: string;
  /**
  * standard_rollout_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#standard_rollout_policy ContainerCluster#standard_rollout_policy}
  */
  readonly standardRolloutPolicy?: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy;
}

export function containerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsToTerraform(struct?: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsOutputReference | ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_pool_soak_duration: cdktf.stringToTerraform(struct!.nodePoolSoakDuration),
    standard_rollout_policy: containerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToTerraform(struct!.standardRolloutPolicy),
  }
}


export function containerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsToHclTerraform(struct?: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsOutputReference | ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_pool_soak_duration: {
      value: cdktf.stringToHclTerraform(struct!.nodePoolSoakDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standard_rollout_policy: {
      value: containerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyToHclTerraform(struct!.standardRolloutPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodePoolSoakDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolSoakDuration = this._nodePoolSoakDuration;
    }
    if (this._standardRolloutPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardRolloutPolicy = this._standardRolloutPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodePoolSoakDuration = undefined;
      this._standardRolloutPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodePoolSoakDuration = value.nodePoolSoakDuration;
      this._standardRolloutPolicy.internalValue = value.standardRolloutPolicy;
    }
  }

  // node_pool_soak_duration - computed: true, optional: true, required: false
  private _nodePoolSoakDuration?: string; 
  public get nodePoolSoakDuration() {
    return this.getStringAttribute('node_pool_soak_duration');
  }
  public set nodePoolSoakDuration(value: string) {
    this._nodePoolSoakDuration = value;
  }
  public resetNodePoolSoakDuration() {
    this._nodePoolSoakDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolSoakDurationInput() {
    return this._nodePoolSoakDuration;
  }

  // standard_rollout_policy - computed: false, optional: true, required: false
  private _standardRolloutPolicy = new ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicyOutputReference(this, "standard_rollout_policy");
  public get standardRolloutPolicy() {
    return this._standardRolloutPolicy;
  }
  public putStandardRolloutPolicy(value: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsStandardRolloutPolicy) {
    this._standardRolloutPolicy.internalValue = value;
  }
  public resetStandardRolloutPolicy() {
    this._standardRolloutPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardRolloutPolicyInput() {
    return this._standardRolloutPolicy.internalValue;
  }
}
export interface ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings {
  /**
  * The maximum number of nodes that can be created beyond the current size of the node pool during the upgrade process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#max_surge ContainerCluster#max_surge}
  */
  readonly maxSurge?: number;
  /**
  * The maximum number of nodes that can be simultaneously unavailable during the upgrade process.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#max_unavailable ContainerCluster#max_unavailable}
  */
  readonly maxUnavailable?: number;
  /**
  * Update strategy of the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#strategy ContainerCluster#strategy}
  */
  readonly strategy?: string;
  /**
  * blue_green_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#blue_green_settings ContainerCluster#blue_green_settings}
  */
  readonly blueGreenSettings?: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings;
}

export function containerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsToTerraform(struct?: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsOutputReference | ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_surge: cdktf.numberToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    blue_green_settings: containerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsToTerraform(struct!.blueGreenSettings),
  }
}


export function containerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsToHclTerraform(struct?: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsOutputReference | ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_surge: {
      value: cdktf.numberToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blue_green_settings: {
      value: containerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsToHclTerraform(struct!.blueGreenSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._blueGreenSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blueGreenSettings = this._blueGreenSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
      this._strategy = undefined;
      this._blueGreenSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
      this._strategy = value.strategy;
      this._blueGreenSettings.internalValue = value.blueGreenSettings;
    }
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: number; 
  public get maxSurge() {
    return this.getNumberAttribute('max_surge');
  }
  public set maxSurge(value: number) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }

  // strategy - computed: true, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // blue_green_settings - computed: false, optional: true, required: false
  private _blueGreenSettings = new ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettingsOutputReference(this, "blue_green_settings");
  public get blueGreenSettings() {
    return this._blueGreenSettings;
  }
  public putBlueGreenSettings(value: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsBlueGreenSettings) {
    this._blueGreenSettings.internalValue = value;
  }
  public resetBlueGreenSettings() {
    this._blueGreenSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blueGreenSettingsInput() {
    return this._blueGreenSettings.internalValue;
  }
}
export interface ContainerClusterClusterAutoscalingAutoProvisioningDefaults {
  /**
  * The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#boot_disk_kms_key ContainerCluster#boot_disk_kms_key}
  */
  readonly bootDiskKmsKey?: string;
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#disk_size ContainerCluster#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Type of the disk attached to each node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#disk_type ContainerCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * The default image type used by NAP once a new node pool is being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#image_type ContainerCluster#image_type}
  */
  readonly imageType?: string;
  /**
  * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform. Applicable values are the friendly names of CPU platforms, such as Intel Haswell.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#min_cpu_platform ContainerCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Scopes that are used by NAP when creating node pools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#oauth_scopes ContainerCluster#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#service_account ContainerCluster#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * management block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#management ContainerCluster#management}
  */
  readonly management?: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#shielded_instance_config ContainerCluster#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig;
  /**
  * upgrade_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#upgrade_settings ContainerCluster#upgrade_settings}
  */
  readonly upgradeSettings?: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings;
}

export function containerClusterClusterAutoscalingAutoProvisioningDefaultsToTerraform(struct?: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsOutputReference | ContainerClusterClusterAutoscalingAutoProvisioningDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_kms_key: cdktf.stringToTerraform(struct!.bootDiskKmsKey),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oauthScopes),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    management: containerClusterClusterAutoscalingAutoProvisioningDefaultsManagementToTerraform(struct!.management),
    shielded_instance_config: containerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    upgrade_settings: containerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsToTerraform(struct!.upgradeSettings),
  }
}


export function containerClusterClusterAutoscalingAutoProvisioningDefaultsToHclTerraform(struct?: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsOutputReference | ContainerClusterClusterAutoscalingAutoProvisioningDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk_kms_key: {
      value: cdktf.stringToHclTerraform(struct!.bootDiskKmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_type: {
      value: cdktf.stringToHclTerraform(struct!.imageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_cpu_platform: {
      value: cdktf.stringToHclTerraform(struct!.minCpuPlatform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.oauthScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    management: {
      value: containerClusterClusterAutoscalingAutoProvisioningDefaultsManagementToHclTerraform(struct!.management),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementList",
    },
    shielded_instance_config: {
      value: containerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigToHclTerraform(struct!.shieldedInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigList",
    },
    upgrade_settings: {
      value: containerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsToHclTerraform(struct!.upgradeSettings),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterClusterAutoscalingAutoProvisioningDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterClusterAutoscalingAutoProvisioningDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskKmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskKmsKey = this._bootDiskKmsKey;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._management?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.management = this._management?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    if (this._upgradeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeSettings = this._upgradeSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterClusterAutoscalingAutoProvisioningDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskKmsKey = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._imageType = undefined;
      this._minCpuPlatform = undefined;
      this._oauthScopes = undefined;
      this._serviceAccount = undefined;
      this._management.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
      this._upgradeSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskKmsKey = value.bootDiskKmsKey;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._imageType = value.imageType;
      this._minCpuPlatform = value.minCpuPlatform;
      this._oauthScopes = value.oauthScopes;
      this._serviceAccount = value.serviceAccount;
      this._management.internalValue = value.management;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
      this._upgradeSettings.internalValue = value.upgradeSettings;
    }
  }

  // boot_disk_kms_key - computed: false, optional: true, required: false
  private _bootDiskKmsKey?: string; 
  public get bootDiskKmsKey() {
    return this.getStringAttribute('boot_disk_kms_key');
  }
  public set bootDiskKmsKey(value: string) {
    this._bootDiskKmsKey = value;
  }
  public resetBootDiskKmsKey() {
    this._bootDiskKmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskKmsKeyInput() {
    return this._bootDiskKmsKey;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: false, optional: true, required: false
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

  // image_type - computed: false, optional: true, required: false
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

  // management - computed: false, optional: true, required: false
  private _management = new ContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagementOutputReference(this, "management");
  public get management() {
    return this._management;
  }
  public putManagement(value: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsManagement) {
    this._management.internalValue = value;
  }
  public resetManagement() {
    this._management.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementInput() {
    return this._management.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new ContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
  public get shieldedInstanceConfig() {
    return this._shieldedInstanceConfig;
  }
  public putShieldedInstanceConfig(value: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsShieldedInstanceConfig) {
    this._shieldedInstanceConfig.internalValue = value;
  }
  public resetShieldedInstanceConfig() {
    this._shieldedInstanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shieldedInstanceConfigInput() {
    return this._shieldedInstanceConfig.internalValue;
  }

  // upgrade_settings - computed: false, optional: true, required: false
  private _upgradeSettings = new ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettingsOutputReference(this, "upgrade_settings");
  public get upgradeSettings() {
    return this._upgradeSettings;
  }
  public putUpgradeSettings(value: ContainerClusterClusterAutoscalingAutoProvisioningDefaultsUpgradeSettings) {
    this._upgradeSettings.internalValue = value;
  }
  public resetUpgradeSettings() {
    this._upgradeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeSettingsInput() {
    return this._upgradeSettings.internalValue;
  }
}
export interface ContainerClusterClusterAutoscalingResourceLimits {
  /**
  * Maximum amount of the resource in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#maximum ContainerCluster#maximum}
  */
  readonly maximum: number;
  /**
  * Minimum amount of the resource in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#minimum ContainerCluster#minimum}
  */
  readonly minimum?: number;
  /**
  * The type of the resource. For example, cpu and memory. See the guide to using Node Auto-Provisioning for a list of types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#resource_type ContainerCluster#resource_type}
  */
  readonly resourceType: string;
}

export function containerClusterClusterAutoscalingResourceLimitsToTerraform(struct?: ContainerClusterClusterAutoscalingResourceLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function containerClusterClusterAutoscalingResourceLimitsToHclTerraform(struct?: ContainerClusterClusterAutoscalingResourceLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterClusterAutoscalingResourceLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterClusterAutoscalingResourceLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterClusterAutoscalingResourceLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._resourceType = value.resourceType;
    }
  }

  // maximum - computed: false, optional: false, required: true
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class ContainerClusterClusterAutoscalingResourceLimitsList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterClusterAutoscalingResourceLimits[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterClusterAutoscalingResourceLimitsOutputReference {
    return new ContainerClusterClusterAutoscalingResourceLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterClusterAutoscaling {
  /**
  * The list of Google Compute Engine zones in which the NodePool's nodes can be created by NAP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#auto_provisioning_locations ContainerCluster#auto_provisioning_locations}
  */
  readonly autoProvisioningLocations?: string[];
  /**
  * Configuration options for the Autoscaling profile feature, which lets you choose whether the cluster autoscaler should optimize for resource utilization or resource availability when deciding to remove nodes from a cluster. Can be BALANCED or OPTIMIZE_UTILIZATION. Defaults to BALANCED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#autoscaling_profile ContainerCluster#autoscaling_profile}
  */
  readonly autoscalingProfile?: string;
  /**
  * Whether node auto-provisioning is enabled. Resource limits for cpu and memory must be defined to enable node auto-provisioning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * auto_provisioning_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#auto_provisioning_defaults ContainerCluster#auto_provisioning_defaults}
  */
  readonly autoProvisioningDefaults?: ContainerClusterClusterAutoscalingAutoProvisioningDefaults;
  /**
  * resource_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#resource_limits ContainerCluster#resource_limits}
  */
  readonly resourceLimits?: ContainerClusterClusterAutoscalingResourceLimits[] | cdktf.IResolvable;
}

export function containerClusterClusterAutoscalingToTerraform(struct?: ContainerClusterClusterAutoscalingOutputReference | ContainerClusterClusterAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_provisioning_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.autoProvisioningLocations),
    autoscaling_profile: cdktf.stringToTerraform(struct!.autoscalingProfile),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    auto_provisioning_defaults: containerClusterClusterAutoscalingAutoProvisioningDefaultsToTerraform(struct!.autoProvisioningDefaults),
    resource_limits: cdktf.listMapper(containerClusterClusterAutoscalingResourceLimitsToTerraform, true)(struct!.resourceLimits),
  }
}


export function containerClusterClusterAutoscalingToHclTerraform(struct?: ContainerClusterClusterAutoscalingOutputReference | ContainerClusterClusterAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_provisioning_locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.autoProvisioningLocations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    autoscaling_profile: {
      value: cdktf.stringToHclTerraform(struct!.autoscalingProfile),
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
    auto_provisioning_defaults: {
      value: containerClusterClusterAutoscalingAutoProvisioningDefaultsToHclTerraform(struct!.autoProvisioningDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterClusterAutoscalingAutoProvisioningDefaultsList",
    },
    resource_limits: {
      value: cdktf.listMapperHcl(containerClusterClusterAutoscalingResourceLimitsToHclTerraform, true)(struct!.resourceLimits),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterClusterAutoscalingResourceLimitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterClusterAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterClusterAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoProvisioningLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoProvisioningLocations = this._autoProvisioningLocations;
    }
    if (this._autoscalingProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingProfile = this._autoscalingProfile;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._autoProvisioningDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoProvisioningDefaults = this._autoProvisioningDefaults?.internalValue;
    }
    if (this._resourceLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLimits = this._resourceLimits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterClusterAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoProvisioningLocations = undefined;
      this._autoscalingProfile = undefined;
      this._enabled = undefined;
      this._autoProvisioningDefaults.internalValue = undefined;
      this._resourceLimits.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoProvisioningLocations = value.autoProvisioningLocations;
      this._autoscalingProfile = value.autoscalingProfile;
      this._enabled = value.enabled;
      this._autoProvisioningDefaults.internalValue = value.autoProvisioningDefaults;
      this._resourceLimits.internalValue = value.resourceLimits;
    }
  }

  // auto_provisioning_locations - computed: true, optional: true, required: false
  private _autoProvisioningLocations?: string[]; 
  public get autoProvisioningLocations() {
    return this.getListAttribute('auto_provisioning_locations');
  }
  public set autoProvisioningLocations(value: string[]) {
    this._autoProvisioningLocations = value;
  }
  public resetAutoProvisioningLocations() {
    this._autoProvisioningLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoProvisioningLocationsInput() {
    return this._autoProvisioningLocations;
  }

  // autoscaling_profile - computed: false, optional: true, required: false
  private _autoscalingProfile?: string; 
  public get autoscalingProfile() {
    return this.getStringAttribute('autoscaling_profile');
  }
  public set autoscalingProfile(value: string) {
    this._autoscalingProfile = value;
  }
  public resetAutoscalingProfile() {
    this._autoscalingProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingProfileInput() {
    return this._autoscalingProfile;
  }

  // enabled - computed: true, optional: true, required: false
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

  // auto_provisioning_defaults - computed: false, optional: true, required: false
  private _autoProvisioningDefaults = new ContainerClusterClusterAutoscalingAutoProvisioningDefaultsOutputReference(this, "auto_provisioning_defaults");
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
  private _resourceLimits = new ContainerClusterClusterAutoscalingResourceLimitsList(this, "resource_limits", false);
  public get resourceLimits() {
    return this._resourceLimits;
  }
  public putResourceLimits(value: ContainerClusterClusterAutoscalingResourceLimits[] | cdktf.IResolvable) {
    this._resourceLimits.internalValue = value;
  }
  public resetResourceLimits() {
    this._resourceLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitsInput() {
    return this._resourceLimits.internalValue;
  }
}
export interface ContainerClusterConfidentialNodes {
  /**
  * Defines the type of technology used by the confidential node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#confidential_instance_type ContainerCluster#confidential_instance_type}
  */
  readonly confidentialInstanceType?: string;
  /**
  * Whether Confidential Nodes feature is enabled for all nodes in this cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterConfidentialNodesToTerraform(struct?: ContainerClusterConfidentialNodesOutputReference | ContainerClusterConfidentialNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidential_instance_type: cdktf.stringToTerraform(struct!.confidentialInstanceType),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterConfidentialNodesToHclTerraform(struct?: ContainerClusterConfidentialNodesOutputReference | ContainerClusterConfidentialNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidential_instance_type: {
      value: cdktf.stringToHclTerraform(struct!.confidentialInstanceType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterConfidentialNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterConfidentialNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidentialInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialInstanceType = this._confidentialInstanceType;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterConfidentialNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confidentialInstanceType = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confidentialInstanceType = value.confidentialInstanceType;
      this._enabled = value.enabled;
    }
  }

  // confidential_instance_type - computed: false, optional: true, required: false
  private _confidentialInstanceType?: string; 
  public get confidentialInstanceType() {
    return this.getStringAttribute('confidential_instance_type');
  }
  public set confidentialInstanceType(value: string) {
    this._confidentialInstanceType = value;
  }
  public resetConfidentialInstanceType() {
    this._confidentialInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInstanceTypeInput() {
    return this._confidentialInstanceType;
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
export interface ContainerClusterControlPlaneEndpointsConfigDnsEndpointConfig {
  /**
  * Controls whether user traffic is allowed over this endpoint. Note that GCP-managed services may still use the endpoint even if this is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#allow_external_traffic ContainerCluster#allow_external_traffic}
  */
  readonly allowExternalTraffic?: boolean | cdktf.IResolvable;
  /**
  * The cluster's DNS endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#endpoint ContainerCluster#endpoint}
  */
  readonly endpoint?: string;
}

export function containerClusterControlPlaneEndpointsConfigDnsEndpointConfigToTerraform(struct?: ContainerClusterControlPlaneEndpointsConfigDnsEndpointConfigOutputReference | ContainerClusterControlPlaneEndpointsConfigDnsEndpointConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_external_traffic: cdktf.booleanToTerraform(struct!.allowExternalTraffic),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
  }
}


export function containerClusterControlPlaneEndpointsConfigDnsEndpointConfigToHclTerraform(struct?: ContainerClusterControlPlaneEndpointsConfigDnsEndpointConfigOutputReference | ContainerClusterControlPlaneEndpointsConfigDnsEndpointConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_external_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.allowExternalTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterControlPlaneEndpointsConfigDnsEndpointConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterControlPlaneEndpointsConfigDnsEndpointConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowExternalTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowExternalTraffic = this._allowExternalTraffic;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterControlPlaneEndpointsConfigDnsEndpointConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowExternalTraffic = undefined;
      this._endpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowExternalTraffic = value.allowExternalTraffic;
      this._endpoint = value.endpoint;
    }
  }

  // allow_external_traffic - computed: false, optional: true, required: false
  private _allowExternalTraffic?: boolean | cdktf.IResolvable; 
  public get allowExternalTraffic() {
    return this.getBooleanAttribute('allow_external_traffic');
  }
  public set allowExternalTraffic(value: boolean | cdktf.IResolvable) {
    this._allowExternalTraffic = value;
  }
  public resetAllowExternalTraffic() {
    this._allowExternalTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExternalTrafficInput() {
    return this._allowExternalTraffic;
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }
}
export interface ContainerClusterControlPlaneEndpointsConfigIpEndpointsConfig {
  /**
  * Controls whether to allow direct IP access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function containerClusterControlPlaneEndpointsConfigIpEndpointsConfigToTerraform(struct?: ContainerClusterControlPlaneEndpointsConfigIpEndpointsConfigOutputReference | ContainerClusterControlPlaneEndpointsConfigIpEndpointsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterControlPlaneEndpointsConfigIpEndpointsConfigToHclTerraform(struct?: ContainerClusterControlPlaneEndpointsConfigIpEndpointsConfigOutputReference | ContainerClusterControlPlaneEndpointsConfigIpEndpointsConfig): any {
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

export class ContainerClusterControlPlaneEndpointsConfigIpEndpointsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterControlPlaneEndpointsConfigIpEndpointsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterControlPlaneEndpointsConfigIpEndpointsConfig | undefined) {
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
export interface ContainerClusterControlPlaneEndpointsConfig {
  /**
  * dns_endpoint_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#dns_endpoint_config ContainerCluster#dns_endpoint_config}
  */
  readonly dnsEndpointConfig?: ContainerClusterControlPlaneEndpointsConfigDnsEndpointConfig;
  /**
  * ip_endpoints_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#ip_endpoints_config ContainerCluster#ip_endpoints_config}
  */
  readonly ipEndpointsConfig?: ContainerClusterControlPlaneEndpointsConfigIpEndpointsConfig;
}

export function containerClusterControlPlaneEndpointsConfigToTerraform(struct?: ContainerClusterControlPlaneEndpointsConfigOutputReference | ContainerClusterControlPlaneEndpointsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_endpoint_config: containerClusterControlPlaneEndpointsConfigDnsEndpointConfigToTerraform(struct!.dnsEndpointConfig),
    ip_endpoints_config: containerClusterControlPlaneEndpointsConfigIpEndpointsConfigToTerraform(struct!.ipEndpointsConfig),
  }
}


export function containerClusterControlPlaneEndpointsConfigToHclTerraform(struct?: ContainerClusterControlPlaneEndpointsConfigOutputReference | ContainerClusterControlPlaneEndpointsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_endpoint_config: {
      value: containerClusterControlPlaneEndpointsConfigDnsEndpointConfigToHclTerraform(struct!.dnsEndpointConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterControlPlaneEndpointsConfigDnsEndpointConfigList",
    },
    ip_endpoints_config: {
      value: containerClusterControlPlaneEndpointsConfigIpEndpointsConfigToHclTerraform(struct!.ipEndpointsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterControlPlaneEndpointsConfigIpEndpointsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterControlPlaneEndpointsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterControlPlaneEndpointsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsEndpointConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsEndpointConfig = this._dnsEndpointConfig?.internalValue;
    }
    if (this._ipEndpointsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipEndpointsConfig = this._ipEndpointsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterControlPlaneEndpointsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsEndpointConfig.internalValue = undefined;
      this._ipEndpointsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsEndpointConfig.internalValue = value.dnsEndpointConfig;
      this._ipEndpointsConfig.internalValue = value.ipEndpointsConfig;
    }
  }

  // dns_endpoint_config - computed: false, optional: true, required: false
  private _dnsEndpointConfig = new ContainerClusterControlPlaneEndpointsConfigDnsEndpointConfigOutputReference(this, "dns_endpoint_config");
  public get dnsEndpointConfig() {
    return this._dnsEndpointConfig;
  }
  public putDnsEndpointConfig(value: ContainerClusterControlPlaneEndpointsConfigDnsEndpointConfig) {
    this._dnsEndpointConfig.internalValue = value;
  }
  public resetDnsEndpointConfig() {
    this._dnsEndpointConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsEndpointConfigInput() {
    return this._dnsEndpointConfig.internalValue;
  }

  // ip_endpoints_config - computed: false, optional: true, required: false
  private _ipEndpointsConfig = new ContainerClusterControlPlaneEndpointsConfigIpEndpointsConfigOutputReference(this, "ip_endpoints_config");
  public get ipEndpointsConfig() {
    return this._ipEndpointsConfig;
  }
  public putIpEndpointsConfig(value: ContainerClusterControlPlaneEndpointsConfigIpEndpointsConfig) {
    this._ipEndpointsConfig.internalValue = value;
  }
  public resetIpEndpointsConfig() {
    this._ipEndpointsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipEndpointsConfigInput() {
    return this._ipEndpointsConfig.internalValue;
  }
}
export interface ContainerClusterCostManagementConfig {
  /**
  * Whether to enable GKE cost allocation. When you enable GKE cost allocation, the cluster name and namespace of your GKE workloads appear in the labels field of the billing export to BigQuery. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterCostManagementConfigToTerraform(struct?: ContainerClusterCostManagementConfigOutputReference | ContainerClusterCostManagementConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterCostManagementConfigToHclTerraform(struct?: ContainerClusterCostManagementConfigOutputReference | ContainerClusterCostManagementConfig): any {
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

export class ContainerClusterCostManagementConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterCostManagementConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterCostManagementConfig | undefined) {
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
export interface ContainerClusterDatabaseEncryption {
  /**
  * The key to use to encrypt/decrypt secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#key_name ContainerCluster#key_name}
  */
  readonly keyName?: string;
  /**
  * ENCRYPTED or DECRYPTED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#state ContainerCluster#state}
  */
  readonly state: string;
}

export function containerClusterDatabaseEncryptionToTerraform(struct?: ContainerClusterDatabaseEncryptionOutputReference | ContainerClusterDatabaseEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_name: cdktf.stringToTerraform(struct!.keyName),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function containerClusterDatabaseEncryptionToHclTerraform(struct?: ContainerClusterDatabaseEncryptionOutputReference | ContainerClusterDatabaseEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_name: {
      value: cdktf.stringToHclTerraform(struct!.keyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterDatabaseEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterDatabaseEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyName = this._keyName;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterDatabaseEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyName = undefined;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#disabled ContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
}

export function containerClusterDefaultSnatStatusToTerraform(struct?: ContainerClusterDefaultSnatStatusOutputReference | ContainerClusterDefaultSnatStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function containerClusterDefaultSnatStatusToHclTerraform(struct?: ContainerClusterDefaultSnatStatusOutputReference | ContainerClusterDefaultSnatStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterDefaultSnatStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterDefaultSnatStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterDefaultSnatStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface ContainerClusterDnsConfig {
  /**
  * Enable additive VPC scope DNS in a GKE cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#additive_vpc_scope_dns_domain ContainerCluster#additive_vpc_scope_dns_domain}
  */
  readonly additiveVpcScopeDnsDomain?: string;
  /**
  * Which in-cluster DNS provider should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#cluster_dns ContainerCluster#cluster_dns}
  */
  readonly clusterDns?: string;
  /**
  * The suffix used for all cluster service records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#cluster_dns_domain ContainerCluster#cluster_dns_domain}
  */
  readonly clusterDnsDomain?: string;
  /**
  * The scope of access to cluster DNS records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#cluster_dns_scope ContainerCluster#cluster_dns_scope}
  */
  readonly clusterDnsScope?: string;
}

export function containerClusterDnsConfigToTerraform(struct?: ContainerClusterDnsConfigOutputReference | ContainerClusterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additive_vpc_scope_dns_domain: cdktf.stringToTerraform(struct!.additiveVpcScopeDnsDomain),
    cluster_dns: cdktf.stringToTerraform(struct!.clusterDns),
    cluster_dns_domain: cdktf.stringToTerraform(struct!.clusterDnsDomain),
    cluster_dns_scope: cdktf.stringToTerraform(struct!.clusterDnsScope),
  }
}


export function containerClusterDnsConfigToHclTerraform(struct?: ContainerClusterDnsConfigOutputReference | ContainerClusterDnsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additive_vpc_scope_dns_domain: {
      value: cdktf.stringToHclTerraform(struct!.additiveVpcScopeDnsDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_dns: {
      value: cdktf.stringToHclTerraform(struct!.clusterDns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_dns_domain: {
      value: cdktf.stringToHclTerraform(struct!.clusterDnsDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_dns_scope: {
      value: cdktf.stringToHclTerraform(struct!.clusterDnsScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterDnsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterDnsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additiveVpcScopeDnsDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.additiveVpcScopeDnsDomain = this._additiveVpcScopeDnsDomain;
    }
    if (this._clusterDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDns = this._clusterDns;
    }
    if (this._clusterDnsDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDnsDomain = this._clusterDnsDomain;
    }
    if (this._clusterDnsScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDnsScope = this._clusterDnsScope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterDnsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additiveVpcScopeDnsDomain = undefined;
      this._clusterDns = undefined;
      this._clusterDnsDomain = undefined;
      this._clusterDnsScope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additiveVpcScopeDnsDomain = value.additiveVpcScopeDnsDomain;
      this._clusterDns = value.clusterDns;
      this._clusterDnsDomain = value.clusterDnsDomain;
      this._clusterDnsScope = value.clusterDnsScope;
    }
  }

  // additive_vpc_scope_dns_domain - computed: false, optional: true, required: false
  private _additiveVpcScopeDnsDomain?: string; 
  public get additiveVpcScopeDnsDomain() {
    return this.getStringAttribute('additive_vpc_scope_dns_domain');
  }
  public set additiveVpcScopeDnsDomain(value: string) {
    this._additiveVpcScopeDnsDomain = value;
  }
  public resetAdditiveVpcScopeDnsDomain() {
    this._additiveVpcScopeDnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additiveVpcScopeDnsDomainInput() {
    return this._additiveVpcScopeDnsDomain;
  }

  // cluster_dns - computed: false, optional: true, required: false
  private _clusterDns?: string; 
  public get clusterDns() {
    return this.getStringAttribute('cluster_dns');
  }
  public set clusterDns(value: string) {
    this._clusterDns = value;
  }
  public resetClusterDns() {
    this._clusterDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDnsInput() {
    return this._clusterDns;
  }

  // cluster_dns_domain - computed: false, optional: true, required: false
  private _clusterDnsDomain?: string; 
  public get clusterDnsDomain() {
    return this.getStringAttribute('cluster_dns_domain');
  }
  public set clusterDnsDomain(value: string) {
    this._clusterDnsDomain = value;
  }
  public resetClusterDnsDomain() {
    this._clusterDnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDnsDomainInput() {
    return this._clusterDnsDomain;
  }

  // cluster_dns_scope - computed: false, optional: true, required: false
  private _clusterDnsScope?: string; 
  public get clusterDnsScope() {
    return this.getStringAttribute('cluster_dns_scope');
  }
  public set clusterDnsScope(value: string) {
    this._clusterDnsScope = value;
  }
  public resetClusterDnsScope() {
    this._clusterDnsScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDnsScopeInput() {
    return this._clusterDnsScope;
  }
}
export interface ContainerClusterEnableK8SBetaApis {
  /**
  * Enabled Kubernetes Beta APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled_apis ContainerCluster#enabled_apis}
  */
  readonly enabledApis: string[];
}

export function containerClusterEnableK8SBetaApisToTerraform(struct?: ContainerClusterEnableK8SBetaApisOutputReference | ContainerClusterEnableK8SBetaApis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_apis: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledApis),
  }
}


export function containerClusterEnableK8SBetaApisToHclTerraform(struct?: ContainerClusterEnableK8SBetaApisOutputReference | ContainerClusterEnableK8SBetaApis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_apis: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledApis),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterEnableK8SBetaApisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterEnableK8SBetaApis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledApis !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledApis = this._enabledApis;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterEnableK8SBetaApis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabledApis = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabledApis = value.enabledApis;
    }
  }

  // enabled_apis - computed: false, optional: false, required: true
  private _enabledApis?: string[]; 
  public get enabledApis() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled_apis'));
  }
  public set enabledApis(value: string[]) {
    this._enabledApis = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledApisInput() {
    return this._enabledApis;
  }
}
export interface ContainerClusterEnterpriseConfig {
  /**
  * Indicates the desired cluster tier. Available options include STANDARD and ENTERPRISE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#desired_tier ContainerCluster#desired_tier}
  */
  readonly desiredTier?: string;
}

export function containerClusterEnterpriseConfigToTerraform(struct?: ContainerClusterEnterpriseConfigOutputReference | ContainerClusterEnterpriseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_tier: cdktf.stringToTerraform(struct!.desiredTier),
  }
}


export function containerClusterEnterpriseConfigToHclTerraform(struct?: ContainerClusterEnterpriseConfigOutputReference | ContainerClusterEnterpriseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired_tier: {
      value: cdktf.stringToHclTerraform(struct!.desiredTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterEnterpriseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterEnterpriseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredTier = this._desiredTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterEnterpriseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._desiredTier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._desiredTier = value.desiredTier;
    }
  }

  // cluster_tier - computed: true, optional: false, required: false
  public get clusterTier() {
    return this.getStringAttribute('cluster_tier');
  }

  // desired_tier - computed: true, optional: true, required: false
  private _desiredTier?: string; 
  public get desiredTier() {
    return this.getStringAttribute('desired_tier');
  }
  public set desiredTier(value: string) {
    this._desiredTier = value;
  }
  public resetDesiredTier() {
    this._desiredTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredTierInput() {
    return this._desiredTier;
  }
}
export interface ContainerClusterFleet {
  /**
  * The Fleet host project of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#project ContainerCluster#project}
  */
  readonly project?: string;
}

export function containerClusterFleetToTerraform(struct?: ContainerClusterFleetOutputReference | ContainerClusterFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function containerClusterFleetToHclTerraform(struct?: ContainerClusterFleetOutputReference | ContainerClusterFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterFleetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterFleet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterFleet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._project = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._project = value.project;
    }
  }

  // membership - computed: true, optional: false, required: false
  public get membership() {
    return this.getStringAttribute('membership');
  }

  // membership_id - computed: true, optional: false, required: false
  public get membershipId() {
    return this.getStringAttribute('membership_id');
  }

  // membership_location - computed: true, optional: false, required: false
  public get membershipLocation() {
    return this.getStringAttribute('membership_location');
  }

  // pre_registered - computed: true, optional: false, required: false
  public get preRegistered() {
    return this.getBooleanAttribute('pre_registered');
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
}
export interface ContainerClusterGatewayApiConfig {
  /**
  * The Gateway API release channel to use for Gateway API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#channel ContainerCluster#channel}
  */
  readonly channel: string;
}

export function containerClusterGatewayApiConfigToTerraform(struct?: ContainerClusterGatewayApiConfigOutputReference | ContainerClusterGatewayApiConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel: cdktf.stringToTerraform(struct!.channel),
  }
}


export function containerClusterGatewayApiConfigToHclTerraform(struct?: ContainerClusterGatewayApiConfigOutputReference | ContainerClusterGatewayApiConfig): any {
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

export class ContainerClusterGatewayApiConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterGatewayApiConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channel !== undefined) {
      hasAnyValues = true;
      internalValueResult.channel = this._channel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterGatewayApiConfig | undefined) {
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
export interface ContainerClusterGkeAutoUpgradeConfig {
  /**
  * The selected auto-upgrade patch type. Accepted values are:
  * * ACCELERATED: Upgrades to the latest available patch version in a given minor and release channel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#patch_mode ContainerCluster#patch_mode}
  */
  readonly patchMode: string;
}

export function containerClusterGkeAutoUpgradeConfigToTerraform(struct?: ContainerClusterGkeAutoUpgradeConfigOutputReference | ContainerClusterGkeAutoUpgradeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    patch_mode: cdktf.stringToTerraform(struct!.patchMode),
  }
}


export function containerClusterGkeAutoUpgradeConfigToHclTerraform(struct?: ContainerClusterGkeAutoUpgradeConfigOutputReference | ContainerClusterGkeAutoUpgradeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    patch_mode: {
      value: cdktf.stringToHclTerraform(struct!.patchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterGkeAutoUpgradeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterGkeAutoUpgradeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._patchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchMode = this._patchMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterGkeAutoUpgradeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._patchMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._patchMode = value.patchMode;
    }
  }

  // patch_mode - computed: false, optional: false, required: true
  private _patchMode?: string; 
  public get patchMode() {
    return this.getStringAttribute('patch_mode');
  }
  public set patchMode(value: string) {
    this._patchMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchModeInput() {
    return this._patchMode;
  }
}
export interface ContainerClusterIdentityServiceConfig {
  /**
  * Whether to enable the Identity Service component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function containerClusterIdentityServiceConfigToTerraform(struct?: ContainerClusterIdentityServiceConfigOutputReference | ContainerClusterIdentityServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterIdentityServiceConfigToHclTerraform(struct?: ContainerClusterIdentityServiceConfigOutputReference | ContainerClusterIdentityServiceConfig): any {
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

export class ContainerClusterIdentityServiceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterIdentityServiceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterIdentityServiceConfig | undefined) {
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
export interface ContainerClusterIpAllocationPolicyAdditionalPodRangesConfig {
  /**
  * Name for pod secondary ipv4 range which has the actual range defined ahead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#pod_range_names ContainerCluster#pod_range_names}
  */
  readonly podRangeNames: string[];
}

export function containerClusterIpAllocationPolicyAdditionalPodRangesConfigToTerraform(struct?: ContainerClusterIpAllocationPolicyAdditionalPodRangesConfigOutputReference | ContainerClusterIpAllocationPolicyAdditionalPodRangesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_range_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podRangeNames),
  }
}


export function containerClusterIpAllocationPolicyAdditionalPodRangesConfigToHclTerraform(struct?: ContainerClusterIpAllocationPolicyAdditionalPodRangesConfigOutputReference | ContainerClusterIpAllocationPolicyAdditionalPodRangesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_range_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podRangeNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterIpAllocationPolicyAdditionalPodRangesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterIpAllocationPolicyAdditionalPodRangesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podRangeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.podRangeNames = this._podRangeNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterIpAllocationPolicyAdditionalPodRangesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._podRangeNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._podRangeNames = value.podRangeNames;
    }
  }

  // pod_range_names - computed: false, optional: false, required: true
  private _podRangeNames?: string[]; 
  public get podRangeNames() {
    return cdktf.Fn.tolist(this.getListAttribute('pod_range_names'));
  }
  public set podRangeNames(value: string[]) {
    this._podRangeNames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podRangeNamesInput() {
    return this._podRangeNames;
  }
}
export interface ContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#disabled ContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
}

export function containerClusterIpAllocationPolicyPodCidrOverprovisionConfigToTerraform(struct?: ContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigOutputReference | ContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function containerClusterIpAllocationPolicyPodCidrOverprovisionConfigToHclTerraform(struct?: ContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigOutputReference | ContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#cluster_ipv4_cidr_block ContainerCluster#cluster_ipv4_cidr_block}
  */
  readonly clusterIpv4CidrBlock?: string;
  /**
  * The name of the existing secondary range in the cluster's subnetwork to use for pod IP addresses. Alternatively, cluster_ipv4_cidr_block can be used to automatically create a GKE-managed one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#cluster_secondary_range_name ContainerCluster#cluster_secondary_range_name}
  */
  readonly clusterSecondaryRangeName?: string;
  /**
  * The IP address range of the services IPs in this cluster. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) from the RFC-1918 private networks (e.g. 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16) to pick a specific range to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#services_ipv4_cidr_block ContainerCluster#services_ipv4_cidr_block}
  */
  readonly servicesIpv4CidrBlock?: string;
  /**
  * The name of the existing secondary range in the cluster's subnetwork to use for service ClusterIPs. Alternatively, services_ipv4_cidr_block can be used to automatically create a GKE-managed one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#services_secondary_range_name ContainerCluster#services_secondary_range_name}
  */
  readonly servicesSecondaryRangeName?: string;
  /**
  * The IP Stack type of the cluster. Choose between IPV4 and IPV4_IPV6. Default type is IPV4 Only if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#stack_type ContainerCluster#stack_type}
  */
  readonly stackType?: string;
  /**
  * additional_pod_ranges_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#additional_pod_ranges_config ContainerCluster#additional_pod_ranges_config}
  */
  readonly additionalPodRangesConfig?: ContainerClusterIpAllocationPolicyAdditionalPodRangesConfig;
  /**
  * pod_cidr_overprovision_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#pod_cidr_overprovision_config ContainerCluster#pod_cidr_overprovision_config}
  */
  readonly podCidrOverprovisionConfig?: ContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig;
}

export function containerClusterIpAllocationPolicyToTerraform(struct?: ContainerClusterIpAllocationPolicyOutputReference | ContainerClusterIpAllocationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_ipv4_cidr_block: cdktf.stringToTerraform(struct!.clusterIpv4CidrBlock),
    cluster_secondary_range_name: cdktf.stringToTerraform(struct!.clusterSecondaryRangeName),
    services_ipv4_cidr_block: cdktf.stringToTerraform(struct!.servicesIpv4CidrBlock),
    services_secondary_range_name: cdktf.stringToTerraform(struct!.servicesSecondaryRangeName),
    stack_type: cdktf.stringToTerraform(struct!.stackType),
    additional_pod_ranges_config: containerClusterIpAllocationPolicyAdditionalPodRangesConfigToTerraform(struct!.additionalPodRangesConfig),
    pod_cidr_overprovision_config: containerClusterIpAllocationPolicyPodCidrOverprovisionConfigToTerraform(struct!.podCidrOverprovisionConfig),
  }
}


export function containerClusterIpAllocationPolicyToHclTerraform(struct?: ContainerClusterIpAllocationPolicyOutputReference | ContainerClusterIpAllocationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_ipv4_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.clusterIpv4CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_secondary_range_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterSecondaryRangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services_ipv4_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.servicesIpv4CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services_secondary_range_name: {
      value: cdktf.stringToHclTerraform(struct!.servicesSecondaryRangeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stack_type: {
      value: cdktf.stringToHclTerraform(struct!.stackType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_pod_ranges_config: {
      value: containerClusterIpAllocationPolicyAdditionalPodRangesConfigToHclTerraform(struct!.additionalPodRangesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterIpAllocationPolicyAdditionalPodRangesConfigList",
    },
    pod_cidr_overprovision_config: {
      value: containerClusterIpAllocationPolicyPodCidrOverprovisionConfigToHclTerraform(struct!.podCidrOverprovisionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterIpAllocationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterIpAllocationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIpv4CidrBlock = this._clusterIpv4CidrBlock;
    }
    if (this._clusterSecondaryRangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSecondaryRangeName = this._clusterSecondaryRangeName;
    }
    if (this._servicesIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesIpv4CidrBlock = this._servicesIpv4CidrBlock;
    }
    if (this._servicesSecondaryRangeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesSecondaryRangeName = this._servicesSecondaryRangeName;
    }
    if (this._stackType !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackType = this._stackType;
    }
    if (this._additionalPodRangesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPodRangesConfig = this._additionalPodRangesConfig?.internalValue;
    }
    if (this._podCidrOverprovisionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podCidrOverprovisionConfig = this._podCidrOverprovisionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterIpAllocationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterIpv4CidrBlock = undefined;
      this._clusterSecondaryRangeName = undefined;
      this._servicesIpv4CidrBlock = undefined;
      this._servicesSecondaryRangeName = undefined;
      this._stackType = undefined;
      this._additionalPodRangesConfig.internalValue = undefined;
      this._podCidrOverprovisionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterIpv4CidrBlock = value.clusterIpv4CidrBlock;
      this._clusterSecondaryRangeName = value.clusterSecondaryRangeName;
      this._servicesIpv4CidrBlock = value.servicesIpv4CidrBlock;
      this._servicesSecondaryRangeName = value.servicesSecondaryRangeName;
      this._stackType = value.stackType;
      this._additionalPodRangesConfig.internalValue = value.additionalPodRangesConfig;
      this._podCidrOverprovisionConfig.internalValue = value.podCidrOverprovisionConfig;
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

  // stack_type - computed: false, optional: true, required: false
  private _stackType?: string; 
  public get stackType() {
    return this.getStringAttribute('stack_type');
  }
  public set stackType(value: string) {
    this._stackType = value;
  }
  public resetStackType() {
    this._stackType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackTypeInput() {
    return this._stackType;
  }

  // additional_pod_ranges_config - computed: false, optional: true, required: false
  private _additionalPodRangesConfig = new ContainerClusterIpAllocationPolicyAdditionalPodRangesConfigOutputReference(this, "additional_pod_ranges_config");
  public get additionalPodRangesConfig() {
    return this._additionalPodRangesConfig;
  }
  public putAdditionalPodRangesConfig(value: ContainerClusterIpAllocationPolicyAdditionalPodRangesConfig) {
    this._additionalPodRangesConfig.internalValue = value;
  }
  public resetAdditionalPodRangesConfig() {
    this._additionalPodRangesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPodRangesConfigInput() {
    return this._additionalPodRangesConfig.internalValue;
  }

  // pod_cidr_overprovision_config - computed: false, optional: true, required: false
  private _podCidrOverprovisionConfig = new ContainerClusterIpAllocationPolicyPodCidrOverprovisionConfigOutputReference(this, "pod_cidr_overprovision_config");
  public get podCidrOverprovisionConfig() {
    return this._podCidrOverprovisionConfig;
  }
  public putPodCidrOverprovisionConfig(value: ContainerClusterIpAllocationPolicyPodCidrOverprovisionConfig) {
    this._podCidrOverprovisionConfig.internalValue = value;
  }
  public resetPodCidrOverprovisionConfig() {
    this._podCidrOverprovisionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrOverprovisionConfigInput() {
    return this._podCidrOverprovisionConfig.internalValue;
  }
}
export interface ContainerClusterLoggingConfig {
  /**
  * GKE components exposing logs. Valid values include SYSTEM_COMPONENTS, APISERVER, CONTROLLER_MANAGER, KCP_CONNECTION, KCP_SSHD, KCP_HPA, SCHEDULER, and WORKLOADS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enable_components ContainerCluster#enable_components}
  */
  readonly enableComponents: string[];
}

export function containerClusterLoggingConfigToTerraform(struct?: ContainerClusterLoggingConfigOutputReference | ContainerClusterLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enableComponents),
  }
}


export function containerClusterLoggingConfigToHclTerraform(struct?: ContainerClusterLoggingConfigOutputReference | ContainerClusterLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enableComponents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableComponents = this._enableComponents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableComponents = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#start_time ContainerCluster#start_time}
  */
  readonly startTime: string;
}

export function containerClusterMaintenancePolicyDailyMaintenanceWindowToTerraform(struct?: ContainerClusterMaintenancePolicyDailyMaintenanceWindowOutputReference | ContainerClusterMaintenancePolicyDailyMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function containerClusterMaintenancePolicyDailyMaintenanceWindowToHclTerraform(struct?: ContainerClusterMaintenancePolicyDailyMaintenanceWindowOutputReference | ContainerClusterMaintenancePolicyDailyMaintenanceWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterMaintenancePolicyDailyMaintenanceWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterMaintenancePolicyDailyMaintenanceWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMaintenancePolicyDailyMaintenanceWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._startTime = value.startTime;
    }
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getStringAttribute('duration');
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
export interface ContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions {
  /**
  * The scope of automatic upgrades to restrict in the exclusion window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#scope ContainerCluster#scope}
  */
  readonly scope: string;
}

export function containerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsToTerraform(struct?: ContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsOutputReference | ContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function containerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsToHclTerraform(struct?: ContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsOutputReference | ContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scope = value.scope;
    }
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface ContainerClusterMaintenancePolicyMaintenanceExclusion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#end_time ContainerCluster#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#exclusion_name ContainerCluster#exclusion_name}
  */
  readonly exclusionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#start_time ContainerCluster#start_time}
  */
  readonly startTime: string;
  /**
  * exclusion_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#exclusion_options ContainerCluster#exclusion_options}
  */
  readonly exclusionOptions?: ContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions;
}

export function containerClusterMaintenancePolicyMaintenanceExclusionToTerraform(struct?: ContainerClusterMaintenancePolicyMaintenanceExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    exclusion_name: cdktf.stringToTerraform(struct!.exclusionName),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    exclusion_options: containerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsToTerraform(struct!.exclusionOptions),
  }
}


export function containerClusterMaintenancePolicyMaintenanceExclusionToHclTerraform(struct?: ContainerClusterMaintenancePolicyMaintenanceExclusion | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusion_name: {
      value: cdktf.stringToHclTerraform(struct!.exclusionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclusion_options: {
      value: containerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsToHclTerraform(struct!.exclusionOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterMaintenancePolicyMaintenanceExclusionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterMaintenancePolicyMaintenanceExclusion | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._exclusionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionName = this._exclusionName;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._exclusionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionOptions = this._exclusionOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMaintenancePolicyMaintenanceExclusion | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endTime = undefined;
      this._exclusionName = undefined;
      this._startTime = undefined;
      this._exclusionOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endTime = value.endTime;
      this._exclusionName = value.exclusionName;
      this._startTime = value.startTime;
      this._exclusionOptions.internalValue = value.exclusionOptions;
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

  // exclusion_name - computed: false, optional: false, required: true
  private _exclusionName?: string; 
  public get exclusionName() {
    return this.getStringAttribute('exclusion_name');
  }
  public set exclusionName(value: string) {
    this._exclusionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionNameInput() {
    return this._exclusionName;
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

  // exclusion_options - computed: false, optional: true, required: false
  private _exclusionOptions = new ContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptionsOutputReference(this, "exclusion_options");
  public get exclusionOptions() {
    return this._exclusionOptions;
  }
  public putExclusionOptions(value: ContainerClusterMaintenancePolicyMaintenanceExclusionExclusionOptions) {
    this._exclusionOptions.internalValue = value;
  }
  public resetExclusionOptions() {
    this._exclusionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionOptionsInput() {
    return this._exclusionOptions.internalValue;
  }
}

export class ContainerClusterMaintenancePolicyMaintenanceExclusionList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterMaintenancePolicyMaintenanceExclusion[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterMaintenancePolicyMaintenanceExclusionOutputReference {
    return new ContainerClusterMaintenancePolicyMaintenanceExclusionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterMaintenancePolicyRecurringWindow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#end_time ContainerCluster#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#recurrence ContainerCluster#recurrence}
  */
  readonly recurrence: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#start_time ContainerCluster#start_time}
  */
  readonly startTime: string;
}

export function containerClusterMaintenancePolicyRecurringWindowToTerraform(struct?: ContainerClusterMaintenancePolicyRecurringWindowOutputReference | ContainerClusterMaintenancePolicyRecurringWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    recurrence: cdktf.stringToTerraform(struct!.recurrence),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function containerClusterMaintenancePolicyRecurringWindowToHclTerraform(struct?: ContainerClusterMaintenancePolicyRecurringWindowOutputReference | ContainerClusterMaintenancePolicyRecurringWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurrence: {
      value: cdktf.stringToHclTerraform(struct!.recurrence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterMaintenancePolicyRecurringWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterMaintenancePolicyRecurringWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._recurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMaintenancePolicyRecurringWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._recurrence = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#daily_maintenance_window ContainerCluster#daily_maintenance_window}
  */
  readonly dailyMaintenanceWindow?: ContainerClusterMaintenancePolicyDailyMaintenanceWindow;
  /**
  * maintenance_exclusion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#maintenance_exclusion ContainerCluster#maintenance_exclusion}
  */
  readonly maintenanceExclusion?: ContainerClusterMaintenancePolicyMaintenanceExclusion[] | cdktf.IResolvable;
  /**
  * recurring_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#recurring_window ContainerCluster#recurring_window}
  */
  readonly recurringWindow?: ContainerClusterMaintenancePolicyRecurringWindow;
}

export function containerClusterMaintenancePolicyToTerraform(struct?: ContainerClusterMaintenancePolicyOutputReference | ContainerClusterMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily_maintenance_window: containerClusterMaintenancePolicyDailyMaintenanceWindowToTerraform(struct!.dailyMaintenanceWindow),
    maintenance_exclusion: cdktf.listMapper(containerClusterMaintenancePolicyMaintenanceExclusionToTerraform, true)(struct!.maintenanceExclusion),
    recurring_window: containerClusterMaintenancePolicyRecurringWindowToTerraform(struct!.recurringWindow),
  }
}


export function containerClusterMaintenancePolicyToHclTerraform(struct?: ContainerClusterMaintenancePolicyOutputReference | ContainerClusterMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily_maintenance_window: {
      value: containerClusterMaintenancePolicyDailyMaintenanceWindowToHclTerraform(struct!.dailyMaintenanceWindow),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterMaintenancePolicyDailyMaintenanceWindowList",
    },
    maintenance_exclusion: {
      value: cdktf.listMapperHcl(containerClusterMaintenancePolicyMaintenanceExclusionToHclTerraform, true)(struct!.maintenanceExclusion),
      isBlock: true,
      type: "set",
      storageClassType: "ContainerClusterMaintenancePolicyMaintenanceExclusionList",
    },
    recurring_window: {
      value: containerClusterMaintenancePolicyRecurringWindowToHclTerraform(struct!.recurringWindow),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterMaintenancePolicyRecurringWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterMaintenancePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dailyMaintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dailyMaintenanceWindow = this._dailyMaintenanceWindow?.internalValue;
    }
    if (this._maintenanceExclusion?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceExclusion = this._maintenanceExclusion?.internalValue;
    }
    if (this._recurringWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurringWindow = this._recurringWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dailyMaintenanceWindow.internalValue = undefined;
      this._maintenanceExclusion.internalValue = undefined;
      this._recurringWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dailyMaintenanceWindow.internalValue = value.dailyMaintenanceWindow;
      this._maintenanceExclusion.internalValue = value.maintenanceExclusion;
      this._recurringWindow.internalValue = value.recurringWindow;
    }
  }

  // daily_maintenance_window - computed: false, optional: true, required: false
  private _dailyMaintenanceWindow = new ContainerClusterMaintenancePolicyDailyMaintenanceWindowOutputReference(this, "daily_maintenance_window");
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
  private _maintenanceExclusion = new ContainerClusterMaintenancePolicyMaintenanceExclusionList(this, "maintenance_exclusion", true);
  public get maintenanceExclusion() {
    return this._maintenanceExclusion;
  }
  public putMaintenanceExclusion(value: ContainerClusterMaintenancePolicyMaintenanceExclusion[] | cdktf.IResolvable) {
    this._maintenanceExclusion.internalValue = value;
  }
  public resetMaintenanceExclusion() {
    this._maintenanceExclusion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceExclusionInput() {
    return this._maintenanceExclusion.internalValue;
  }

  // recurring_window - computed: false, optional: true, required: false
  private _recurringWindow = new ContainerClusterMaintenancePolicyRecurringWindowOutputReference(this, "recurring_window");
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#issue_client_certificate ContainerCluster#issue_client_certificate}
  */
  readonly issueClientCertificate: boolean | cdktf.IResolvable;
}

export function containerClusterMasterAuthClientCertificateConfigToTerraform(struct?: ContainerClusterMasterAuthClientCertificateConfigOutputReference | ContainerClusterMasterAuthClientCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issue_client_certificate: cdktf.booleanToTerraform(struct!.issueClientCertificate),
  }
}


export function containerClusterMasterAuthClientCertificateConfigToHclTerraform(struct?: ContainerClusterMasterAuthClientCertificateConfigOutputReference | ContainerClusterMasterAuthClientCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issue_client_certificate: {
      value: cdktf.booleanToHclTerraform(struct!.issueClientCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterMasterAuthClientCertificateConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterMasterAuthClientCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issueClientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.issueClientCertificate = this._issueClientCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMasterAuthClientCertificateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issueClientCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issueClientCertificate = value.issueClientCertificate;
    }
  }

  // issue_client_certificate - computed: false, optional: false, required: true
  private _issueClientCertificate?: boolean | cdktf.IResolvable; 
  public get issueClientCertificate() {
    return this.getBooleanAttribute('issue_client_certificate');
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
  * client_certificate_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#client_certificate_config ContainerCluster#client_certificate_config}
  */
  readonly clientCertificateConfig: ContainerClusterMasterAuthClientCertificateConfig;
}

export function containerClusterMasterAuthToTerraform(struct?: ContainerClusterMasterAuthOutputReference | ContainerClusterMasterAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_config: containerClusterMasterAuthClientCertificateConfigToTerraform(struct!.clientCertificateConfig),
  }
}


export function containerClusterMasterAuthToHclTerraform(struct?: ContainerClusterMasterAuthOutputReference | ContainerClusterMasterAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate_config: {
      value: containerClusterMasterAuthClientCertificateConfigToHclTerraform(struct!.clientCertificateConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterMasterAuthClientCertificateConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterMasterAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterMasterAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateConfig = this._clientCertificateConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMasterAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificateConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificateConfig.internalValue = value.clientCertificateConfig;
    }
  }

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_ca_certificate - computed: true, optional: false, required: false
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // client_certificate_config - computed: false, optional: false, required: true
  private _clientCertificateConfig = new ContainerClusterMasterAuthClientCertificateConfigOutputReference(this, "client_certificate_config");
  public get clientCertificateConfig() {
    return this._clientCertificateConfig;
  }
  public putClientCertificateConfig(value: ContainerClusterMasterAuthClientCertificateConfig) {
    this._clientCertificateConfig.internalValue = value;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#cidr_block ContainerCluster#cidr_block}
  */
  readonly cidrBlock: string;
  /**
  * Field for users to identify CIDR blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#display_name ContainerCluster#display_name}
  */
  readonly displayName?: string;
}

export function containerClusterMasterAuthorizedNetworksConfigCidrBlocksToTerraform(struct?: ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr_block: cdktf.stringToTerraform(struct!.cidrBlock),
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}


export function containerClusterMasterAuthorizedNetworksConfigCidrBlocksToHclTerraform(struct?: ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.cidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterMasterAuthorizedNetworksConfigCidrBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlock = this._cidrBlock;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidrBlock = undefined;
      this._displayName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidrBlock = value.cidrBlock;
      this._displayName = value.displayName;
    }
  }

  // cidr_block - computed: false, optional: false, required: true
  private _cidrBlock?: string; 
  public get cidrBlock() {
    return this.getStringAttribute('cidr_block');
  }
  public set cidrBlock(value: string) {
    this._cidrBlock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlockInput() {
    return this._cidrBlock;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }
}

export class ContainerClusterMasterAuthorizedNetworksConfigCidrBlocksList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterMasterAuthorizedNetworksConfigCidrBlocksOutputReference {
    return new ContainerClusterMasterAuthorizedNetworksConfigCidrBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterMasterAuthorizedNetworksConfig {
  /**
  * Whether Kubernetes master is accessible via Google Compute Engine Public IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#gcp_public_cidrs_access_enabled ContainerCluster#gcp_public_cidrs_access_enabled}
  */
  readonly gcpPublicCidrsAccessEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether authorized networks is enforced on the private endpoint or not. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#private_endpoint_enforcement_enabled ContainerCluster#private_endpoint_enforcement_enabled}
  */
  readonly privateEndpointEnforcementEnabled?: boolean | cdktf.IResolvable;
  /**
  * cidr_blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#cidr_blocks ContainerCluster#cidr_blocks}
  */
  readonly cidrBlocks?: ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks[] | cdktf.IResolvable;
}

export function containerClusterMasterAuthorizedNetworksConfigToTerraform(struct?: ContainerClusterMasterAuthorizedNetworksConfigOutputReference | ContainerClusterMasterAuthorizedNetworksConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_public_cidrs_access_enabled: cdktf.booleanToTerraform(struct!.gcpPublicCidrsAccessEnabled),
    private_endpoint_enforcement_enabled: cdktf.booleanToTerraform(struct!.privateEndpointEnforcementEnabled),
    cidr_blocks: cdktf.listMapper(containerClusterMasterAuthorizedNetworksConfigCidrBlocksToTerraform, true)(struct!.cidrBlocks),
  }
}


export function containerClusterMasterAuthorizedNetworksConfigToHclTerraform(struct?: ContainerClusterMasterAuthorizedNetworksConfigOutputReference | ContainerClusterMasterAuthorizedNetworksConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_public_cidrs_access_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.gcpPublicCidrsAccessEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_endpoint_enforcement_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.privateEndpointEnforcementEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cidr_blocks: {
      value: cdktf.listMapperHcl(containerClusterMasterAuthorizedNetworksConfigCidrBlocksToHclTerraform, true)(struct!.cidrBlocks),
      isBlock: true,
      type: "set",
      storageClassType: "ContainerClusterMasterAuthorizedNetworksConfigCidrBlocksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterMasterAuthorizedNetworksConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterMasterAuthorizedNetworksConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpPublicCidrsAccessEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpPublicCidrsAccessEnabled = this._gcpPublicCidrsAccessEnabled;
    }
    if (this._privateEndpointEnforcementEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointEnforcementEnabled = this._privateEndpointEnforcementEnabled;
    }
    if (this._cidrBlocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrBlocks = this._cidrBlocks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMasterAuthorizedNetworksConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpPublicCidrsAccessEnabled = undefined;
      this._privateEndpointEnforcementEnabled = undefined;
      this._cidrBlocks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpPublicCidrsAccessEnabled = value.gcpPublicCidrsAccessEnabled;
      this._privateEndpointEnforcementEnabled = value.privateEndpointEnforcementEnabled;
      this._cidrBlocks.internalValue = value.cidrBlocks;
    }
  }

  // gcp_public_cidrs_access_enabled - computed: true, optional: true, required: false
  private _gcpPublicCidrsAccessEnabled?: boolean | cdktf.IResolvable; 
  public get gcpPublicCidrsAccessEnabled() {
    return this.getBooleanAttribute('gcp_public_cidrs_access_enabled');
  }
  public set gcpPublicCidrsAccessEnabled(value: boolean | cdktf.IResolvable) {
    this._gcpPublicCidrsAccessEnabled = value;
  }
  public resetGcpPublicCidrsAccessEnabled() {
    this._gcpPublicCidrsAccessEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpPublicCidrsAccessEnabledInput() {
    return this._gcpPublicCidrsAccessEnabled;
  }

  // private_endpoint_enforcement_enabled - computed: true, optional: true, required: false
  private _privateEndpointEnforcementEnabled?: boolean | cdktf.IResolvable; 
  public get privateEndpointEnforcementEnabled() {
    return this.getBooleanAttribute('private_endpoint_enforcement_enabled');
  }
  public set privateEndpointEnforcementEnabled(value: boolean | cdktf.IResolvable) {
    this._privateEndpointEnforcementEnabled = value;
  }
  public resetPrivateEndpointEnforcementEnabled() {
    this._privateEndpointEnforcementEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointEnforcementEnabledInput() {
    return this._privateEndpointEnforcementEnabled;
  }

  // cidr_blocks - computed: false, optional: true, required: false
  private _cidrBlocks = new ContainerClusterMasterAuthorizedNetworksConfigCidrBlocksList(this, "cidr_blocks", true);
  public get cidrBlocks() {
    return this._cidrBlocks;
  }
  public putCidrBlocks(value: ContainerClusterMasterAuthorizedNetworksConfigCidrBlocks[] | cdktf.IResolvable) {
    this._cidrBlocks.internalValue = value;
  }
  public resetCidrBlocks() {
    this._cidrBlocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrBlocksInput() {
    return this._cidrBlocks.internalValue;
  }
}
export interface ContainerClusterMeshCertificates {
  /**
  * When enabled the GKE Workload Identity Certificates controller and node agent will be deployed in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enable_certificates ContainerCluster#enable_certificates}
  */
  readonly enableCertificates: boolean | cdktf.IResolvable;
}

export function containerClusterMeshCertificatesToTerraform(struct?: ContainerClusterMeshCertificatesOutputReference | ContainerClusterMeshCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_certificates: cdktf.booleanToTerraform(struct!.enableCertificates),
  }
}


export function containerClusterMeshCertificatesToHclTerraform(struct?: ContainerClusterMeshCertificatesOutputReference | ContainerClusterMeshCertificates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_certificates: {
      value: cdktf.booleanToHclTerraform(struct!.enableCertificates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterMeshCertificatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterMeshCertificates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableCertificates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCertificates = this._enableCertificates;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMeshCertificates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableCertificates = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableCertificates = value.enableCertificates;
    }
  }

  // enable_certificates - computed: false, optional: false, required: true
  private _enableCertificates?: boolean | cdktf.IResolvable; 
  public get enableCertificates() {
    return this.getBooleanAttribute('enable_certificates');
  }
  public set enableCertificates(value: boolean | cdktf.IResolvable) {
    this._enableCertificates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCertificatesInput() {
    return this._enableCertificates;
  }
}
export interface ContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig {
  /**
  * Whether or not the advanced datapath metrics are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enable_metrics ContainerCluster#enable_metrics}
  */
  readonly enableMetrics: boolean | cdktf.IResolvable;
  /**
  * Whether or not Relay is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enable_relay ContainerCluster#enable_relay}
  */
  readonly enableRelay: boolean | cdktf.IResolvable;
}

export function containerClusterMonitoringConfigAdvancedDatapathObservabilityConfigToTerraform(struct?: ContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigOutputReference | ContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_metrics: cdktf.booleanToTerraform(struct!.enableMetrics),
    enable_relay: cdktf.booleanToTerraform(struct!.enableRelay),
  }
}


export function containerClusterMonitoringConfigAdvancedDatapathObservabilityConfigToHclTerraform(struct?: ContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigOutputReference | ContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_metrics: {
      value: cdktf.booleanToHclTerraform(struct!.enableMetrics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_relay: {
      value: cdktf.booleanToHclTerraform(struct!.enableRelay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMetrics = this._enableMetrics;
    }
    if (this._enableRelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRelay = this._enableRelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableMetrics = undefined;
      this._enableRelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableMetrics = value.enableMetrics;
      this._enableRelay = value.enableRelay;
    }
  }

  // enable_metrics - computed: false, optional: false, required: true
  private _enableMetrics?: boolean | cdktf.IResolvable; 
  public get enableMetrics() {
    return this.getBooleanAttribute('enable_metrics');
  }
  public set enableMetrics(value: boolean | cdktf.IResolvable) {
    this._enableMetrics = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMetricsInput() {
    return this._enableMetrics;
  }

  // enable_relay - computed: false, optional: false, required: true
  private _enableRelay?: boolean | cdktf.IResolvable; 
  public get enableRelay() {
    return this.getBooleanAttribute('enable_relay');
  }
  public set enableRelay(value: boolean | cdktf.IResolvable) {
    this._enableRelay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRelayInput() {
    return this._enableRelay;
  }
}
export interface ContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfig {
  /**
  * The scope of auto-monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#scope ContainerCluster#scope}
  */
  readonly scope: string;
}

export function containerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigToTerraform(struct?: ContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigOutputReference | ContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}


export function containerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigToHclTerraform(struct?: ContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigOutputReference | ContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scope = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scope = value.scope;
    }
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }
}
export interface ContainerClusterMonitoringConfigManagedPrometheus {
  /**
  * Whether or not the managed collection is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * auto_monitoring_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#auto_monitoring_config ContainerCluster#auto_monitoring_config}
  */
  readonly autoMonitoringConfig?: ContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfig;
}

export function containerClusterMonitoringConfigManagedPrometheusToTerraform(struct?: ContainerClusterMonitoringConfigManagedPrometheusOutputReference | ContainerClusterMonitoringConfigManagedPrometheus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    auto_monitoring_config: containerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigToTerraform(struct!.autoMonitoringConfig),
  }
}


export function containerClusterMonitoringConfigManagedPrometheusToHclTerraform(struct?: ContainerClusterMonitoringConfigManagedPrometheusOutputReference | ContainerClusterMonitoringConfigManagedPrometheus): any {
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
    auto_monitoring_config: {
      value: containerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigToHclTerraform(struct!.autoMonitoringConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterMonitoringConfigManagedPrometheusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterMonitoringConfigManagedPrometheus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._autoMonitoringConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoMonitoringConfig = this._autoMonitoringConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMonitoringConfigManagedPrometheus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._autoMonitoringConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._autoMonitoringConfig.internalValue = value.autoMonitoringConfig;
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

  // auto_monitoring_config - computed: false, optional: true, required: false
  private _autoMonitoringConfig = new ContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfigOutputReference(this, "auto_monitoring_config");
  public get autoMonitoringConfig() {
    return this._autoMonitoringConfig;
  }
  public putAutoMonitoringConfig(value: ContainerClusterMonitoringConfigManagedPrometheusAutoMonitoringConfig) {
    this._autoMonitoringConfig.internalValue = value;
  }
  public resetAutoMonitoringConfig() {
    this._autoMonitoringConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoMonitoringConfigInput() {
    return this._autoMonitoringConfig.internalValue;
  }
}
export interface ContainerClusterMonitoringConfig {
  /**
  * GKE components exposing metrics. Valid values include SYSTEM_COMPONENTS, APISERVER, SCHEDULER, CONTROLLER_MANAGER, STORAGE, HPA, POD, DAEMONSET, DEPLOYMENT, STATEFULSET, KUBELET, CADVISOR, DCGM and JOBSET.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enable_components ContainerCluster#enable_components}
  */
  readonly enableComponents?: string[];
  /**
  * advanced_datapath_observability_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#advanced_datapath_observability_config ContainerCluster#advanced_datapath_observability_config}
  */
  readonly advancedDatapathObservabilityConfig?: ContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig;
  /**
  * managed_prometheus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#managed_prometheus ContainerCluster#managed_prometheus}
  */
  readonly managedPrometheus?: ContainerClusterMonitoringConfigManagedPrometheus;
}

export function containerClusterMonitoringConfigToTerraform(struct?: ContainerClusterMonitoringConfigOutputReference | ContainerClusterMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enableComponents),
    advanced_datapath_observability_config: containerClusterMonitoringConfigAdvancedDatapathObservabilityConfigToTerraform(struct!.advancedDatapathObservabilityConfig),
    managed_prometheus: containerClusterMonitoringConfigManagedPrometheusToTerraform(struct!.managedPrometheus),
  }
}


export function containerClusterMonitoringConfigToHclTerraform(struct?: ContainerClusterMonitoringConfigOutputReference | ContainerClusterMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enableComponents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    advanced_datapath_observability_config: {
      value: containerClusterMonitoringConfigAdvancedDatapathObservabilityConfigToHclTerraform(struct!.advancedDatapathObservabilityConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigList",
    },
    managed_prometheus: {
      value: containerClusterMonitoringConfigManagedPrometheusToHclTerraform(struct!.managedPrometheus),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterMonitoringConfigManagedPrometheusList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterMonitoringConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableComponents = this._enableComponents;
    }
    if (this._advancedDatapathObservabilityConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedDatapathObservabilityConfig = this._advancedDatapathObservabilityConfig?.internalValue;
    }
    if (this._managedPrometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedPrometheus = this._managedPrometheus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterMonitoringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableComponents = undefined;
      this._advancedDatapathObservabilityConfig.internalValue = undefined;
      this._managedPrometheus.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableComponents = value.enableComponents;
      this._advancedDatapathObservabilityConfig.internalValue = value.advancedDatapathObservabilityConfig;
      this._managedPrometheus.internalValue = value.managedPrometheus;
    }
  }

  // enable_components - computed: true, optional: true, required: false
  private _enableComponents?: string[]; 
  public get enableComponents() {
    return this.getListAttribute('enable_components');
  }
  public set enableComponents(value: string[]) {
    this._enableComponents = value;
  }
  public resetEnableComponents() {
    this._enableComponents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableComponentsInput() {
    return this._enableComponents;
  }

  // advanced_datapath_observability_config - computed: false, optional: true, required: false
  private _advancedDatapathObservabilityConfig = new ContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfigOutputReference(this, "advanced_datapath_observability_config");
  public get advancedDatapathObservabilityConfig() {
    return this._advancedDatapathObservabilityConfig;
  }
  public putAdvancedDatapathObservabilityConfig(value: ContainerClusterMonitoringConfigAdvancedDatapathObservabilityConfig) {
    this._advancedDatapathObservabilityConfig.internalValue = value;
  }
  public resetAdvancedDatapathObservabilityConfig() {
    this._advancedDatapathObservabilityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedDatapathObservabilityConfigInput() {
    return this._advancedDatapathObservabilityConfig.internalValue;
  }

  // managed_prometheus - computed: false, optional: true, required: false
  private _managedPrometheus = new ContainerClusterMonitoringConfigManagedPrometheusOutputReference(this, "managed_prometheus");
  public get managedPrometheus() {
    return this._managedPrometheus;
  }
  public putManagedPrometheus(value: ContainerClusterMonitoringConfigManagedPrometheus) {
    this._managedPrometheus.internalValue = value;
  }
  public resetManagedPrometheus() {
    this._managedPrometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPrometheusInput() {
    return this._managedPrometheus.internalValue;
  }
}
export interface ContainerClusterNetworkPerformanceConfig {
  /**
  * Specifies the total network bandwidth tier for NodePools in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#total_egress_bandwidth_tier ContainerCluster#total_egress_bandwidth_tier}
  */
  readonly totalEgressBandwidthTier: string;
}

export function containerClusterNetworkPerformanceConfigToTerraform(struct?: ContainerClusterNetworkPerformanceConfigOutputReference | ContainerClusterNetworkPerformanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_egress_bandwidth_tier: cdktf.stringToTerraform(struct!.totalEgressBandwidthTier),
  }
}


export function containerClusterNetworkPerformanceConfigToHclTerraform(struct?: ContainerClusterNetworkPerformanceConfigOutputReference | ContainerClusterNetworkPerformanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total_egress_bandwidth_tier: {
      value: cdktf.stringToHclTerraform(struct!.totalEgressBandwidthTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNetworkPerformanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNetworkPerformanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalEgressBandwidthTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEgressBandwidthTier = this._totalEgressBandwidthTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNetworkPerformanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalEgressBandwidthTier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalEgressBandwidthTier = value.totalEgressBandwidthTier;
    }
  }

  // total_egress_bandwidth_tier - computed: false, optional: false, required: true
  private _totalEgressBandwidthTier?: string; 
  public get totalEgressBandwidthTier() {
    return this.getStringAttribute('total_egress_bandwidth_tier');
  }
  public set totalEgressBandwidthTier(value: string) {
    this._totalEgressBandwidthTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEgressBandwidthTierInput() {
    return this._totalEgressBandwidthTier;
  }
}
export interface ContainerClusterNetworkPolicy {
  /**
  * Whether network policy is enabled on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The selected network policy provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#provider ContainerCluster#provider}
  */
  readonly provider?: string;
}

export function containerClusterNetworkPolicyToTerraform(struct?: ContainerClusterNetworkPolicyOutputReference | ContainerClusterNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    provider: cdktf.stringToTerraform(struct!.provider),
  }
}


export function containerClusterNetworkPolicyToHclTerraform(struct?: ContainerClusterNetworkPolicyOutputReference | ContainerClusterNetworkPolicy): any {
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
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNetworkPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNetworkPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNetworkPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._provider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._provider = value.provider;
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
export interface ContainerClusterNodeConfigEffectiveTaints {
}

export function containerClusterNodeConfigEffectiveTaintsToTerraform(struct?: ContainerClusterNodeConfigEffectiveTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function containerClusterNodeConfigEffectiveTaintsToHclTerraform(struct?: ContainerClusterNodeConfigEffectiveTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ContainerClusterNodeConfigEffectiveTaintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerClusterNodeConfigEffectiveTaints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigEffectiveTaints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class ContainerClusterNodeConfigEffectiveTaintsList extends cdktf.ComplexList {

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
  public get(index: number): ContainerClusterNodeConfigEffectiveTaintsOutputReference {
    return new ContainerClusterNodeConfigEffectiveTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodeConfigAdvancedMachineFeatures {
  /**
  * Whether the node should have nested virtualization enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enable_nested_virtualization ContainerCluster#enable_nested_virtualization}
  */
  readonly enableNestedVirtualization?: boolean | cdktf.IResolvable;
  /**
  * Level of Performance Monitoring Unit (PMU) requested. If unset, no access to the PMU is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#performance_monitoring_unit ContainerCluster#performance_monitoring_unit}
  */
  readonly performanceMonitoringUnit?: string;
  /**
  * The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#threads_per_core ContainerCluster#threads_per_core}
  */
  readonly threadsPerCore: number;
}

export function containerClusterNodeConfigAdvancedMachineFeaturesToTerraform(struct?: ContainerClusterNodeConfigAdvancedMachineFeaturesOutputReference | ContainerClusterNodeConfigAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_nested_virtualization: cdktf.booleanToTerraform(struct!.enableNestedVirtualization),
    performance_monitoring_unit: cdktf.stringToTerraform(struct!.performanceMonitoringUnit),
    threads_per_core: cdktf.numberToTerraform(struct!.threadsPerCore),
  }
}


export function containerClusterNodeConfigAdvancedMachineFeaturesToHclTerraform(struct?: ContainerClusterNodeConfigAdvancedMachineFeaturesOutputReference | ContainerClusterNodeConfigAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_nested_virtualization: {
      value: cdktf.booleanToHclTerraform(struct!.enableNestedVirtualization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    performance_monitoring_unit: {
      value: cdktf.stringToHclTerraform(struct!.performanceMonitoringUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threads_per_core: {
      value: cdktf.numberToHclTerraform(struct!.threadsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigAdvancedMachineFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigAdvancedMachineFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableNestedVirtualization !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNestedVirtualization = this._enableNestedVirtualization;
    }
    if (this._performanceMonitoringUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceMonitoringUnit = this._performanceMonitoringUnit;
    }
    if (this._threadsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadsPerCore = this._threadsPerCore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigAdvancedMachineFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableNestedVirtualization = undefined;
      this._performanceMonitoringUnit = undefined;
      this._threadsPerCore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableNestedVirtualization = value.enableNestedVirtualization;
      this._performanceMonitoringUnit = value.performanceMonitoringUnit;
      this._threadsPerCore = value.threadsPerCore;
    }
  }

  // enable_nested_virtualization - computed: false, optional: true, required: false
  private _enableNestedVirtualization?: boolean | cdktf.IResolvable; 
  public get enableNestedVirtualization() {
    return this.getBooleanAttribute('enable_nested_virtualization');
  }
  public set enableNestedVirtualization(value: boolean | cdktf.IResolvable) {
    this._enableNestedVirtualization = value;
  }
  public resetEnableNestedVirtualization() {
    this._enableNestedVirtualization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNestedVirtualizationInput() {
    return this._enableNestedVirtualization;
  }

  // performance_monitoring_unit - computed: false, optional: true, required: false
  private _performanceMonitoringUnit?: string; 
  public get performanceMonitoringUnit() {
    return this.getStringAttribute('performance_monitoring_unit');
  }
  public set performanceMonitoringUnit(value: string) {
    this._performanceMonitoringUnit = value;
  }
  public resetPerformanceMonitoringUnit() {
    this._performanceMonitoringUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceMonitoringUnitInput() {
    return this._performanceMonitoringUnit;
  }

  // threads_per_core - computed: false, optional: false, required: true
  private _threadsPerCore?: number; 
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
  public set threadsPerCore(value: number) {
    this._threadsPerCore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsPerCoreInput() {
    return this._threadsPerCore;
  }
}
export interface ContainerClusterNodeConfigConfidentialNodes {
  /**
  * Defines the type of technology used by the confidential node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#confidential_instance_type ContainerCluster#confidential_instance_type}
  */
  readonly confidentialInstanceType?: string;
  /**
  * Whether Confidential Nodes feature is enabled for all nodes in this pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterNodeConfigConfidentialNodesToTerraform(struct?: ContainerClusterNodeConfigConfidentialNodesOutputReference | ContainerClusterNodeConfigConfidentialNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidential_instance_type: cdktf.stringToTerraform(struct!.confidentialInstanceType),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterNodeConfigConfidentialNodesToHclTerraform(struct?: ContainerClusterNodeConfigConfidentialNodesOutputReference | ContainerClusterNodeConfigConfidentialNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidential_instance_type: {
      value: cdktf.stringToHclTerraform(struct!.confidentialInstanceType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigConfidentialNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigConfidentialNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidentialInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialInstanceType = this._confidentialInstanceType;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigConfidentialNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confidentialInstanceType = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confidentialInstanceType = value.confidentialInstanceType;
      this._enabled = value.enabled;
    }
  }

  // confidential_instance_type - computed: false, optional: true, required: false
  private _confidentialInstanceType?: string; 
  public get confidentialInstanceType() {
    return this.getStringAttribute('confidential_instance_type');
  }
  public set confidentialInstanceType(value: string) {
    this._confidentialInstanceType = value;
  }
  public resetConfidentialInstanceType() {
    this._confidentialInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInstanceTypeInput() {
    return this._confidentialInstanceType;
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
export interface ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig {
  /**
  * URI for the secret that hosts a certificate. Must be in the format 'projects/PROJECT_NUM/secrets/SECRET_NAME/versions/VERSION_OR_LATEST'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#secret_uri ContainerCluster#secret_uri}
  */
  readonly secretUri: string;
}

export function containerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToTerraform(struct?: ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference | ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_uri: cdktf.stringToTerraform(struct!.secretUri),
  }
}


export function containerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToHclTerraform(struct?: ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference | ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
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

export class ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretUri = this._secretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined) {
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
export interface ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig {
  /**
  * List of fully-qualified-domain-names. IPv4s and port specification are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#fqdns ContainerCluster#fqdns}
  */
  readonly fqdns: string[];
  /**
  * gcp_secret_manager_certificate_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#gcp_secret_manager_certificate_config ContainerCluster#gcp_secret_manager_certificate_config}
  */
  readonly gcpSecretManagerCertificateConfig: ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig;
}

export function containerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToTerraform(struct?: ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fqdns),
    gcp_secret_manager_certificate_config: containerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToTerraform(struct!.gcpSecretManagerCertificateConfig),
  }
}


export function containerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToHclTerraform(struct?: ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable): any {
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
      value: containerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToHclTerraform(struct!.gcpSecretManagerCertificateConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable | undefined) {
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
  private _gcpSecretManagerCertificateConfig = new ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference(this, "gcp_secret_manager_certificate_config");
  public get gcpSecretManagerCertificateConfig() {
    return this._gcpSecretManagerCertificateConfig;
  }
  public putGcpSecretManagerCertificateConfig(value: ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig) {
    this._gcpSecretManagerCertificateConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerCertificateConfigInput() {
    return this._gcpSecretManagerCertificateConfig.internalValue;
  }
}

export class ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference {
    return new ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfig {
  /**
  * Whether or not private registries are configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * certificate_authority_domain_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#certificate_authority_domain_config ContainerCluster#certificate_authority_domain_config}
  */
  readonly certificateAuthorityDomainConfig?: ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktf.IResolvable;
}

export function containerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigToTerraform(struct?: ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference | ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    certificate_authority_domain_config: cdktf.listMapper(containerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToTerraform, true)(struct!.certificateAuthorityDomainConfig),
  }
}


export function containerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigToHclTerraform(struct?: ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference | ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfig): any {
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
      value: cdktf.listMapperHcl(containerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToHclTerraform, true)(struct!.certificateAuthorityDomainConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfig | undefined {
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

  public set internalValue(value: ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfig | undefined) {
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
  private _certificateAuthorityDomainConfig = new ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList(this, "certificate_authority_domain_config", false);
  public get certificateAuthorityDomainConfig() {
    return this._certificateAuthorityDomainConfig;
  }
  public putCertificateAuthorityDomainConfig(value: ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktf.IResolvable) {
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
export interface ContainerClusterNodeConfigContainerdConfig {
  /**
  * private_registry_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#private_registry_access_config ContainerCluster#private_registry_access_config}
  */
  readonly privateRegistryAccessConfig?: ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfig;
}

export function containerClusterNodeConfigContainerdConfigToTerraform(struct?: ContainerClusterNodeConfigContainerdConfigOutputReference | ContainerClusterNodeConfigContainerdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_registry_access_config: containerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigToTerraform(struct!.privateRegistryAccessConfig),
  }
}


export function containerClusterNodeConfigContainerdConfigToHclTerraform(struct?: ContainerClusterNodeConfigContainerdConfigOutputReference | ContainerClusterNodeConfigContainerdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_registry_access_config: {
      value: containerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigToHclTerraform(struct!.privateRegistryAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigContainerdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigContainerdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateRegistryAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateRegistryAccessConfig = this._privateRegistryAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigContainerdConfig | undefined) {
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
  private _privateRegistryAccessConfig = new ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference(this, "private_registry_access_config");
  public get privateRegistryAccessConfig() {
    return this._privateRegistryAccessConfig;
  }
  public putPrivateRegistryAccessConfig(value: ContainerClusterNodeConfigContainerdConfigPrivateRegistryAccessConfig) {
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
export interface ContainerClusterNodeConfigEphemeralStorageLocalSsdConfig {
  /**
  * Number of local SSDs to be utilized for GKE Data Cache. Uses NVMe interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#data_cache_count ContainerCluster#data_cache_count}
  */
  readonly dataCacheCount?: number;
  /**
  * Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#local_ssd_count ContainerCluster#local_ssd_count}
  */
  readonly localSsdCount: number;
}

export function containerClusterNodeConfigEphemeralStorageLocalSsdConfigToTerraform(struct?: ContainerClusterNodeConfigEphemeralStorageLocalSsdConfigOutputReference | ContainerClusterNodeConfigEphemeralStorageLocalSsdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_cache_count: cdktf.numberToTerraform(struct!.dataCacheCount),
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
  }
}


export function containerClusterNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform(struct?: ContainerClusterNodeConfigEphemeralStorageLocalSsdConfigOutputReference | ContainerClusterNodeConfigEphemeralStorageLocalSsdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_cache_count: {
      value: cdktf.numberToHclTerraform(struct!.dataCacheCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ssd_count: {
      value: cdktf.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigEphemeralStorageLocalSsdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigEphemeralStorageLocalSsdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataCacheCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCacheCount = this._dataCacheCount;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigEphemeralStorageLocalSsdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataCacheCount = undefined;
      this._localSsdCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataCacheCount = value.dataCacheCount;
      this._localSsdCount = value.localSsdCount;
    }
  }

  // data_cache_count - computed: false, optional: true, required: false
  private _dataCacheCount?: number; 
  public get dataCacheCount() {
    return this.getNumberAttribute('data_cache_count');
  }
  public set dataCacheCount(value: number) {
    this._dataCacheCount = value;
  }
  public resetDataCacheCount() {
    this._dataCacheCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCacheCountInput() {
    return this._dataCacheCount;
  }

  // local_ssd_count - computed: false, optional: false, required: true
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }
}
export interface ContainerClusterNodeConfigFastSocket {
  /**
  * Whether or not NCCL Fast Socket is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterNodeConfigFastSocketToTerraform(struct?: ContainerClusterNodeConfigFastSocketOutputReference | ContainerClusterNodeConfigFastSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterNodeConfigFastSocketToHclTerraform(struct?: ContainerClusterNodeConfigFastSocketOutputReference | ContainerClusterNodeConfigFastSocket): any {
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

export class ContainerClusterNodeConfigFastSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigFastSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigFastSocket | undefined) {
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
export interface ContainerClusterNodeConfigGcfsConfig {
  /**
  * Whether or not GCFS is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterNodeConfigGcfsConfigToTerraform(struct?: ContainerClusterNodeConfigGcfsConfigOutputReference | ContainerClusterNodeConfigGcfsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterNodeConfigGcfsConfigToHclTerraform(struct?: ContainerClusterNodeConfigGcfsConfigOutputReference | ContainerClusterNodeConfigGcfsConfig): any {
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

export class ContainerClusterNodeConfigGcfsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigGcfsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigGcfsConfig | undefined) {
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
export interface ContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig {
  /**
  * Mode for how the GPU driver is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#gpu_driver_version ContainerCluster#gpu_driver_version}
  */
  readonly gpuDriverVersion: string;
}

export function containerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigToTerraform(struct?: ContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference | ContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gpu_driver_version: cdktf.stringToTerraform(struct!.gpuDriverVersion),
  }
}


export function containerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigToHclTerraform(struct?: ContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference | ContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gpu_driver_version: {
      value: cdktf.stringToHclTerraform(struct!.gpuDriverVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpuDriverVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuDriverVersion = this._gpuDriverVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gpuDriverVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gpuDriverVersion = value.gpuDriverVersion;
    }
  }

  // gpu_driver_version - computed: false, optional: false, required: true
  private _gpuDriverVersion?: string; 
  public get gpuDriverVersion() {
    return this.getStringAttribute('gpu_driver_version');
  }
  public set gpuDriverVersion(value: string) {
    this._gpuDriverVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDriverVersionInput() {
    return this._gpuDriverVersion;
  }
}
export interface ContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig {
  /**
  * The type of GPU sharing strategy to enable on the GPU node. Possible values are described in the API package (https://pkg.go.dev/google.golang.org/api/container/v1#GPUSharingConfig)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#gpu_sharing_strategy ContainerCluster#gpu_sharing_strategy}
  */
  readonly gpuSharingStrategy: string;
  /**
  * The maximum number of containers that can share a GPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#max_shared_clients_per_gpu ContainerCluster#max_shared_clients_per_gpu}
  */
  readonly maxSharedClientsPerGpu: number;
}

export function containerClusterNodeConfigGuestAcceleratorGpuSharingConfigToTerraform(struct?: ContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigOutputReference | ContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gpu_sharing_strategy: cdktf.stringToTerraform(struct!.gpuSharingStrategy),
    max_shared_clients_per_gpu: cdktf.numberToTerraform(struct!.maxSharedClientsPerGpu),
  }
}


export function containerClusterNodeConfigGuestAcceleratorGpuSharingConfigToHclTerraform(struct?: ContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigOutputReference | ContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gpu_sharing_strategy: {
      value: cdktf.stringToHclTerraform(struct!.gpuSharingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_shared_clients_per_gpu: {
      value: cdktf.numberToHclTerraform(struct!.maxSharedClientsPerGpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpuSharingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuSharingStrategy = this._gpuSharingStrategy;
    }
    if (this._maxSharedClientsPerGpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSharedClientsPerGpu = this._maxSharedClientsPerGpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gpuSharingStrategy = undefined;
      this._maxSharedClientsPerGpu = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gpuSharingStrategy = value.gpuSharingStrategy;
      this._maxSharedClientsPerGpu = value.maxSharedClientsPerGpu;
    }
  }

  // gpu_sharing_strategy - computed: false, optional: false, required: true
  private _gpuSharingStrategy?: string; 
  public get gpuSharingStrategy() {
    return this.getStringAttribute('gpu_sharing_strategy');
  }
  public set gpuSharingStrategy(value: string) {
    this._gpuSharingStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuSharingStrategyInput() {
    return this._gpuSharingStrategy;
  }

  // max_shared_clients_per_gpu - computed: false, optional: false, required: true
  private _maxSharedClientsPerGpu?: number; 
  public get maxSharedClientsPerGpu() {
    return this.getNumberAttribute('max_shared_clients_per_gpu');
  }
  public set maxSharedClientsPerGpu(value: number) {
    this._maxSharedClientsPerGpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSharedClientsPerGpuInput() {
    return this._maxSharedClientsPerGpu;
  }
}
export interface ContainerClusterNodeConfigGuestAccelerator {
  /**
  * The number of the accelerator cards exposed to an instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#count ContainerCluster#count}
  */
  readonly count: number;
  /**
  * Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#gpu_partition_size ContainerCluster#gpu_partition_size}
  */
  readonly gpuPartitionSize?: string;
  /**
  * The accelerator type resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#type ContainerCluster#type}
  */
  readonly type: string;
  /**
  * gpu_driver_installation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#gpu_driver_installation_config ContainerCluster#gpu_driver_installation_config}
  */
  readonly gpuDriverInstallationConfig?: ContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig;
  /**
  * gpu_sharing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#gpu_sharing_config ContainerCluster#gpu_sharing_config}
  */
  readonly gpuSharingConfig?: ContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig;
}

export function containerClusterNodeConfigGuestAcceleratorToTerraform(struct?: ContainerClusterNodeConfigGuestAccelerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    gpu_partition_size: cdktf.stringToTerraform(struct!.gpuPartitionSize),
    type: cdktf.stringToTerraform(struct!.type),
    gpu_driver_installation_config: containerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigToTerraform(struct!.gpuDriverInstallationConfig),
    gpu_sharing_config: containerClusterNodeConfigGuestAcceleratorGpuSharingConfigToTerraform(struct!.gpuSharingConfig),
  }
}


export function containerClusterNodeConfigGuestAcceleratorToHclTerraform(struct?: ContainerClusterNodeConfigGuestAccelerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gpu_partition_size: {
      value: cdktf.stringToHclTerraform(struct!.gpuPartitionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpu_driver_installation_config: {
      value: containerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigToHclTerraform(struct!.gpuDriverInstallationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigList",
    },
    gpu_sharing_config: {
      value: containerClusterNodeConfigGuestAcceleratorGpuSharingConfigToHclTerraform(struct!.gpuSharingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigGuestAcceleratorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterNodeConfigGuestAccelerator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._gpuPartitionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuPartitionSize = this._gpuPartitionSize;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._gpuDriverInstallationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuDriverInstallationConfig = this._gpuDriverInstallationConfig?.internalValue;
    }
    if (this._gpuSharingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuSharingConfig = this._gpuSharingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigGuestAccelerator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._gpuPartitionSize = undefined;
      this._type = undefined;
      this._gpuDriverInstallationConfig.internalValue = undefined;
      this._gpuSharingConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._gpuPartitionSize = value.gpuPartitionSize;
      this._type = value.type;
      this._gpuDriverInstallationConfig.internalValue = value.gpuDriverInstallationConfig;
      this._gpuSharingConfig.internalValue = value.gpuSharingConfig;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // gpu_partition_size - computed: false, optional: true, required: false
  private _gpuPartitionSize?: string; 
  public get gpuPartitionSize() {
    return this.getStringAttribute('gpu_partition_size');
  }
  public set gpuPartitionSize(value: string) {
    this._gpuPartitionSize = value;
  }
  public resetGpuPartitionSize() {
    this._gpuPartitionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuPartitionSizeInput() {
    return this._gpuPartitionSize;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // gpu_driver_installation_config - computed: false, optional: true, required: false
  private _gpuDriverInstallationConfig = new ContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference(this, "gpu_driver_installation_config");
  public get gpuDriverInstallationConfig() {
    return this._gpuDriverInstallationConfig;
  }
  public putGpuDriverInstallationConfig(value: ContainerClusterNodeConfigGuestAcceleratorGpuDriverInstallationConfig) {
    this._gpuDriverInstallationConfig.internalValue = value;
  }
  public resetGpuDriverInstallationConfig() {
    this._gpuDriverInstallationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDriverInstallationConfigInput() {
    return this._gpuDriverInstallationConfig.internalValue;
  }

  // gpu_sharing_config - computed: false, optional: true, required: false
  private _gpuSharingConfig = new ContainerClusterNodeConfigGuestAcceleratorGpuSharingConfigOutputReference(this, "gpu_sharing_config");
  public get gpuSharingConfig() {
    return this._gpuSharingConfig;
  }
  public putGpuSharingConfig(value: ContainerClusterNodeConfigGuestAcceleratorGpuSharingConfig) {
    this._gpuSharingConfig.internalValue = value;
  }
  public resetGpuSharingConfig() {
    this._gpuSharingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuSharingConfigInput() {
    return this._gpuSharingConfig.internalValue;
  }
}

export class ContainerClusterNodeConfigGuestAcceleratorList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterNodeConfigGuestAccelerator[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterNodeConfigGuestAcceleratorOutputReference {
    return new ContainerClusterNodeConfigGuestAcceleratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodeConfigGvnic {
  /**
  * Whether or not gvnic is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterNodeConfigGvnicToTerraform(struct?: ContainerClusterNodeConfigGvnicOutputReference | ContainerClusterNodeConfigGvnic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterNodeConfigGvnicToHclTerraform(struct?: ContainerClusterNodeConfigGvnicOutputReference | ContainerClusterNodeConfigGvnic): any {
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

export class ContainerClusterNodeConfigGvnicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigGvnic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigGvnic | undefined) {
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
export interface ContainerClusterNodeConfigHostMaintenancePolicy {
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#maintenance_interval ContainerCluster#maintenance_interval}
  */
  readonly maintenanceInterval: string;
}

export function containerClusterNodeConfigHostMaintenancePolicyToTerraform(struct?: ContainerClusterNodeConfigHostMaintenancePolicyOutputReference | ContainerClusterNodeConfigHostMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_interval: cdktf.stringToTerraform(struct!.maintenanceInterval),
  }
}


export function containerClusterNodeConfigHostMaintenancePolicyToHclTerraform(struct?: ContainerClusterNodeConfigHostMaintenancePolicyOutputReference | ContainerClusterNodeConfigHostMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_interval: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigHostMaintenancePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigHostMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceInterval = this._maintenanceInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigHostMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceInterval = value.maintenanceInterval;
    }
  }

  // maintenance_interval - computed: false, optional: false, required: true
  private _maintenanceInterval?: string; 
  public get maintenanceInterval() {
    return this.getStringAttribute('maintenance_interval');
  }
  public set maintenanceInterval(value: string) {
    this._maintenanceInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceIntervalInput() {
    return this._maintenanceInterval;
  }
}
export interface ContainerClusterNodeConfigKubeletConfig {
  /**
  * Defines a comma-separated allowlist of unsafe sysctls or sysctl patterns which can be set on the Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#allowed_unsafe_sysctls ContainerCluster#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * Defines the maximum number of container log files that can be present for a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#container_log_max_files ContainerCluster#container_log_max_files}
  */
  readonly containerLogMaxFiles?: number;
  /**
  * Defines the maximum size of the container log file before it is rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#container_log_max_size ContainerCluster#container_log_max_size}
  */
  readonly containerLogMaxSize?: string;
  /**
  * Enable CPU CFS quota enforcement for containers that specify CPU limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#cpu_cfs_quota ContainerCluster#cpu_cfs_quota}
  */
  readonly cpuCfsQuota?: boolean | cdktf.IResolvable;
  /**
  * Set the CPU CFS quota period value 'cpu.cfs_period_us'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#cpu_cfs_quota_period ContainerCluster#cpu_cfs_quota_period}
  */
  readonly cpuCfsQuotaPeriod?: string;
  /**
  * Control the CPU management policy on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#cpu_manager_policy ContainerCluster#cpu_manager_policy}
  */
  readonly cpuManagerPolicy?: string;
  /**
  * Defines the percent of disk usage after which image garbage collection is always run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#image_gc_high_threshold_percent ContainerCluster#image_gc_high_threshold_percent}
  */
  readonly imageGcHighThresholdPercent?: number;
  /**
  * Defines the percent of disk usage before which image garbage collection is never run. Lowest disk usage to garbage collect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#image_gc_low_threshold_percent ContainerCluster#image_gc_low_threshold_percent}
  */
  readonly imageGcLowThresholdPercent?: number;
  /**
  * Defines the maximum age an image can be unused before it is garbage collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#image_maximum_gc_age ContainerCluster#image_maximum_gc_age}
  */
  readonly imageMaximumGcAge?: string;
  /**
  * Defines the minimum age for an unused image before it is garbage collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#image_minimum_gc_age ContainerCluster#image_minimum_gc_age}
  */
  readonly imageMinimumGcAge?: string;
  /**
  * Controls whether the kubelet read-only port is enabled. It is strongly recommended to set this to `FALSE`. Possible values: `TRUE`, `FALSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#insecure_kubelet_readonly_port_enabled ContainerCluster#insecure_kubelet_readonly_port_enabled}
  */
  readonly insecureKubeletReadonlyPortEnabled?: string;
  /**
  * Controls the maximum number of processes allowed to run in a pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#pod_pids_limit ContainerCluster#pod_pids_limit}
  */
  readonly podPidsLimit?: number;
}

export function containerClusterNodeConfigKubeletConfigToTerraform(struct?: ContainerClusterNodeConfigKubeletConfigOutputReference | ContainerClusterNodeConfigKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_unsafe_sysctls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedUnsafeSysctls),
    container_log_max_files: cdktf.numberToTerraform(struct!.containerLogMaxFiles),
    container_log_max_size: cdktf.stringToTerraform(struct!.containerLogMaxSize),
    cpu_cfs_quota: cdktf.booleanToTerraform(struct!.cpuCfsQuota),
    cpu_cfs_quota_period: cdktf.stringToTerraform(struct!.cpuCfsQuotaPeriod),
    cpu_manager_policy: cdktf.stringToTerraform(struct!.cpuManagerPolicy),
    image_gc_high_threshold_percent: cdktf.numberToTerraform(struct!.imageGcHighThresholdPercent),
    image_gc_low_threshold_percent: cdktf.numberToTerraform(struct!.imageGcLowThresholdPercent),
    image_maximum_gc_age: cdktf.stringToTerraform(struct!.imageMaximumGcAge),
    image_minimum_gc_age: cdktf.stringToTerraform(struct!.imageMinimumGcAge),
    insecure_kubelet_readonly_port_enabled: cdktf.stringToTerraform(struct!.insecureKubeletReadonlyPortEnabled),
    pod_pids_limit: cdktf.numberToTerraform(struct!.podPidsLimit),
  }
}


export function containerClusterNodeConfigKubeletConfigToHclTerraform(struct?: ContainerClusterNodeConfigKubeletConfigOutputReference | ContainerClusterNodeConfigKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_unsafe_sysctls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedUnsafeSysctls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_log_max_files: {
      value: cdktf.numberToHclTerraform(struct!.containerLogMaxFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    container_log_max_size: {
      value: cdktf.stringToHclTerraform(struct!.containerLogMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_cfs_quota: {
      value: cdktf.booleanToHclTerraform(struct!.cpuCfsQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cpu_cfs_quota_period: {
      value: cdktf.stringToHclTerraform(struct!.cpuCfsQuotaPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_manager_policy: {
      value: cdktf.stringToHclTerraform(struct!.cpuManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_gc_high_threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.imageGcHighThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_gc_low_threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.imageGcLowThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_maximum_gc_age: {
      value: cdktf.stringToHclTerraform(struct!.imageMaximumGcAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_minimum_gc_age: {
      value: cdktf.stringToHclTerraform(struct!.imageMinimumGcAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_kubelet_readonly_port_enabled: {
      value: cdktf.stringToHclTerraform(struct!.insecureKubeletReadonlyPortEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_pids_limit: {
      value: cdktf.numberToHclTerraform(struct!.podPidsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigKubeletConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigKubeletConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedUnsafeSysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUnsafeSysctls = this._allowedUnsafeSysctls;
    }
    if (this._containerLogMaxFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxFiles = this._containerLogMaxFiles;
    }
    if (this._containerLogMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxSize = this._containerLogMaxSize;
    }
    if (this._cpuCfsQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuota = this._cpuCfsQuota;
    }
    if (this._cpuCfsQuotaPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuotaPeriod = this._cpuCfsQuotaPeriod;
    }
    if (this._cpuManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuManagerPolicy = this._cpuManagerPolicy;
    }
    if (this._imageGcHighThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcHighThresholdPercent = this._imageGcHighThresholdPercent;
    }
    if (this._imageGcLowThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcLowThresholdPercent = this._imageGcLowThresholdPercent;
    }
    if (this._imageMaximumGcAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageMaximumGcAge = this._imageMaximumGcAge;
    }
    if (this._imageMinimumGcAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageMinimumGcAge = this._imageMinimumGcAge;
    }
    if (this._insecureKubeletReadonlyPortEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureKubeletReadonlyPortEnabled = this._insecureKubeletReadonlyPortEnabled;
    }
    if (this._podPidsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.podPidsLimit = this._podPidsLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigKubeletConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedUnsafeSysctls = undefined;
      this._containerLogMaxFiles = undefined;
      this._containerLogMaxSize = undefined;
      this._cpuCfsQuota = undefined;
      this._cpuCfsQuotaPeriod = undefined;
      this._cpuManagerPolicy = undefined;
      this._imageGcHighThresholdPercent = undefined;
      this._imageGcLowThresholdPercent = undefined;
      this._imageMaximumGcAge = undefined;
      this._imageMinimumGcAge = undefined;
      this._insecureKubeletReadonlyPortEnabled = undefined;
      this._podPidsLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedUnsafeSysctls = value.allowedUnsafeSysctls;
      this._containerLogMaxFiles = value.containerLogMaxFiles;
      this._containerLogMaxSize = value.containerLogMaxSize;
      this._cpuCfsQuota = value.cpuCfsQuota;
      this._cpuCfsQuotaPeriod = value.cpuCfsQuotaPeriod;
      this._cpuManagerPolicy = value.cpuManagerPolicy;
      this._imageGcHighThresholdPercent = value.imageGcHighThresholdPercent;
      this._imageGcLowThresholdPercent = value.imageGcLowThresholdPercent;
      this._imageMaximumGcAge = value.imageMaximumGcAge;
      this._imageMinimumGcAge = value.imageMinimumGcAge;
      this._insecureKubeletReadonlyPortEnabled = value.insecureKubeletReadonlyPortEnabled;
      this._podPidsLimit = value.podPidsLimit;
    }
  }

  // allowed_unsafe_sysctls - computed: false, optional: true, required: false
  private _allowedUnsafeSysctls?: string[]; 
  public get allowedUnsafeSysctls() {
    return this.getListAttribute('allowed_unsafe_sysctls');
  }
  public set allowedUnsafeSysctls(value: string[]) {
    this._allowedUnsafeSysctls = value;
  }
  public resetAllowedUnsafeSysctls() {
    this._allowedUnsafeSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUnsafeSysctlsInput() {
    return this._allowedUnsafeSysctls;
  }

  // container_log_max_files - computed: false, optional: true, required: false
  private _containerLogMaxFiles?: number; 
  public get containerLogMaxFiles() {
    return this.getNumberAttribute('container_log_max_files');
  }
  public set containerLogMaxFiles(value: number) {
    this._containerLogMaxFiles = value;
  }
  public resetContainerLogMaxFiles() {
    this._containerLogMaxFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxFilesInput() {
    return this._containerLogMaxFiles;
  }

  // container_log_max_size - computed: false, optional: true, required: false
  private _containerLogMaxSize?: string; 
  public get containerLogMaxSize() {
    return this.getStringAttribute('container_log_max_size');
  }
  public set containerLogMaxSize(value: string) {
    this._containerLogMaxSize = value;
  }
  public resetContainerLogMaxSize() {
    this._containerLogMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxSizeInput() {
    return this._containerLogMaxSize;
  }

  // cpu_cfs_quota - computed: false, optional: true, required: false
  private _cpuCfsQuota?: boolean | cdktf.IResolvable; 
  public get cpuCfsQuota() {
    return this.getBooleanAttribute('cpu_cfs_quota');
  }
  public set cpuCfsQuota(value: boolean | cdktf.IResolvable) {
    this._cpuCfsQuota = value;
  }
  public resetCpuCfsQuota() {
    this._cpuCfsQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaInput() {
    return this._cpuCfsQuota;
  }

  // cpu_cfs_quota_period - computed: false, optional: true, required: false
  private _cpuCfsQuotaPeriod?: string; 
  public get cpuCfsQuotaPeriod() {
    return this.getStringAttribute('cpu_cfs_quota_period');
  }
  public set cpuCfsQuotaPeriod(value: string) {
    this._cpuCfsQuotaPeriod = value;
  }
  public resetCpuCfsQuotaPeriod() {
    this._cpuCfsQuotaPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaPeriodInput() {
    return this._cpuCfsQuotaPeriod;
  }

  // cpu_manager_policy - computed: false, optional: true, required: false
  private _cpuManagerPolicy?: string; 
  public get cpuManagerPolicy() {
    return this.getStringAttribute('cpu_manager_policy');
  }
  public set cpuManagerPolicy(value: string) {
    this._cpuManagerPolicy = value;
  }
  public resetCpuManagerPolicy() {
    this._cpuManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuManagerPolicyInput() {
    return this._cpuManagerPolicy;
  }

  // image_gc_high_threshold_percent - computed: false, optional: true, required: false
  private _imageGcHighThresholdPercent?: number; 
  public get imageGcHighThresholdPercent() {
    return this.getNumberAttribute('image_gc_high_threshold_percent');
  }
  public set imageGcHighThresholdPercent(value: number) {
    this._imageGcHighThresholdPercent = value;
  }
  public resetImageGcHighThresholdPercent() {
    this._imageGcHighThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcHighThresholdPercentInput() {
    return this._imageGcHighThresholdPercent;
  }

  // image_gc_low_threshold_percent - computed: false, optional: true, required: false
  private _imageGcLowThresholdPercent?: number; 
  public get imageGcLowThresholdPercent() {
    return this.getNumberAttribute('image_gc_low_threshold_percent');
  }
  public set imageGcLowThresholdPercent(value: number) {
    this._imageGcLowThresholdPercent = value;
  }
  public resetImageGcLowThresholdPercent() {
    this._imageGcLowThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcLowThresholdPercentInput() {
    return this._imageGcLowThresholdPercent;
  }

  // image_maximum_gc_age - computed: false, optional: true, required: false
  private _imageMaximumGcAge?: string; 
  public get imageMaximumGcAge() {
    return this.getStringAttribute('image_maximum_gc_age');
  }
  public set imageMaximumGcAge(value: string) {
    this._imageMaximumGcAge = value;
  }
  public resetImageMaximumGcAge() {
    this._imageMaximumGcAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageMaximumGcAgeInput() {
    return this._imageMaximumGcAge;
  }

  // image_minimum_gc_age - computed: false, optional: true, required: false
  private _imageMinimumGcAge?: string; 
  public get imageMinimumGcAge() {
    return this.getStringAttribute('image_minimum_gc_age');
  }
  public set imageMinimumGcAge(value: string) {
    this._imageMinimumGcAge = value;
  }
  public resetImageMinimumGcAge() {
    this._imageMinimumGcAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageMinimumGcAgeInput() {
    return this._imageMinimumGcAge;
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

  // pod_pids_limit - computed: false, optional: true, required: false
  private _podPidsLimit?: number; 
  public get podPidsLimit() {
    return this.getNumberAttribute('pod_pids_limit');
  }
  public set podPidsLimit(value: number) {
    this._podPidsLimit = value;
  }
  public resetPodPidsLimit() {
    this._podPidsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podPidsLimitInput() {
    return this._podPidsLimit;
  }
}
export interface ContainerClusterNodeConfigLinuxNodeConfigHugepagesConfig {
  /**
  * Amount of 1G hugepages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#hugepage_size_1g ContainerCluster#hugepage_size_1g}
  */
  readonly hugepageSize1G?: number;
  /**
  * Amount of 2M hugepages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#hugepage_size_2m ContainerCluster#hugepage_size_2m}
  */
  readonly hugepageSize2M?: number;
}

export function containerClusterNodeConfigLinuxNodeConfigHugepagesConfigToTerraform(struct?: ContainerClusterNodeConfigLinuxNodeConfigHugepagesConfigOutputReference | ContainerClusterNodeConfigLinuxNodeConfigHugepagesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hugepage_size_1g: cdktf.numberToTerraform(struct!.hugepageSize1G),
    hugepage_size_2m: cdktf.numberToTerraform(struct!.hugepageSize2M),
  }
}


export function containerClusterNodeConfigLinuxNodeConfigHugepagesConfigToHclTerraform(struct?: ContainerClusterNodeConfigLinuxNodeConfigHugepagesConfigOutputReference | ContainerClusterNodeConfigLinuxNodeConfigHugepagesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hugepage_size_1g: {
      value: cdktf.numberToHclTerraform(struct!.hugepageSize1G),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hugepage_size_2m: {
      value: cdktf.numberToHclTerraform(struct!.hugepageSize2M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigLinuxNodeConfigHugepagesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigLinuxNodeConfigHugepagesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hugepageSize1G !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugepageSize1G = this._hugepageSize1G;
    }
    if (this._hugepageSize2M !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugepageSize2M = this._hugepageSize2M;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigLinuxNodeConfigHugepagesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hugepageSize1G = undefined;
      this._hugepageSize2M = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hugepageSize1G = value.hugepageSize1G;
      this._hugepageSize2M = value.hugepageSize2M;
    }
  }

  // hugepage_size_1g - computed: false, optional: true, required: false
  private _hugepageSize1G?: number; 
  public get hugepageSize1G() {
    return this.getNumberAttribute('hugepage_size_1g');
  }
  public set hugepageSize1G(value: number) {
    this._hugepageSize1G = value;
  }
  public resetHugepageSize1G() {
    this._hugepageSize1G = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugepageSize1GInput() {
    return this._hugepageSize1G;
  }

  // hugepage_size_2m - computed: false, optional: true, required: false
  private _hugepageSize2M?: number; 
  public get hugepageSize2M() {
    return this.getNumberAttribute('hugepage_size_2m');
  }
  public set hugepageSize2M(value: number) {
    this._hugepageSize2M = value;
  }
  public resetHugepageSize2M() {
    this._hugepageSize2M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugepageSize2MInput() {
    return this._hugepageSize2M;
  }
}
export interface ContainerClusterNodeConfigLinuxNodeConfig {
  /**
  * cgroupMode specifies the cgroup mode to be used on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#cgroup_mode ContainerCluster#cgroup_mode}
  */
  readonly cgroupMode?: string;
  /**
  * The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#sysctls ContainerCluster#sysctls}
  */
  readonly sysctls?: { [key: string]: string };
  /**
  * hugepages_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#hugepages_config ContainerCluster#hugepages_config}
  */
  readonly hugepagesConfig?: ContainerClusterNodeConfigLinuxNodeConfigHugepagesConfig;
}

export function containerClusterNodeConfigLinuxNodeConfigToTerraform(struct?: ContainerClusterNodeConfigLinuxNodeConfigOutputReference | ContainerClusterNodeConfigLinuxNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cgroup_mode: cdktf.stringToTerraform(struct!.cgroupMode),
    sysctls: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sysctls),
    hugepages_config: containerClusterNodeConfigLinuxNodeConfigHugepagesConfigToTerraform(struct!.hugepagesConfig),
  }
}


export function containerClusterNodeConfigLinuxNodeConfigToHclTerraform(struct?: ContainerClusterNodeConfigLinuxNodeConfigOutputReference | ContainerClusterNodeConfigLinuxNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cgroup_mode: {
      value: cdktf.stringToHclTerraform(struct!.cgroupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sysctls: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sysctls),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hugepages_config: {
      value: containerClusterNodeConfigLinuxNodeConfigHugepagesConfigToHclTerraform(struct!.hugepagesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigLinuxNodeConfigHugepagesConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigLinuxNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigLinuxNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cgroupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgroupMode = this._cgroupMode;
    }
    if (this._sysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls;
    }
    if (this._hugepagesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugepagesConfig = this._hugepagesConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigLinuxNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cgroupMode = undefined;
      this._sysctls = undefined;
      this._hugepagesConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cgroupMode = value.cgroupMode;
      this._sysctls = value.sysctls;
      this._hugepagesConfig.internalValue = value.hugepagesConfig;
    }
  }

  // cgroup_mode - computed: true, optional: true, required: false
  private _cgroupMode?: string; 
  public get cgroupMode() {
    return this.getStringAttribute('cgroup_mode');
  }
  public set cgroupMode(value: string) {
    this._cgroupMode = value;
  }
  public resetCgroupMode() {
    this._cgroupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgroupModeInput() {
    return this._cgroupMode;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls?: { [key: string]: string }; 
  public get sysctls() {
    return this.getStringMapAttribute('sysctls');
  }
  public set sysctls(value: { [key: string]: string }) {
    this._sysctls = value;
  }
  public resetSysctls() {
    this._sysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls;
  }

  // hugepages_config - computed: false, optional: true, required: false
  private _hugepagesConfig = new ContainerClusterNodeConfigLinuxNodeConfigHugepagesConfigOutputReference(this, "hugepages_config");
  public get hugepagesConfig() {
    return this._hugepagesConfig;
  }
  public putHugepagesConfig(value: ContainerClusterNodeConfigLinuxNodeConfigHugepagesConfig) {
    this._hugepagesConfig.internalValue = value;
  }
  public resetHugepagesConfig() {
    this._hugepagesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugepagesConfigInput() {
    return this._hugepagesConfig.internalValue;
  }
}
export interface ContainerClusterNodeConfigLocalNvmeSsdBlockConfig {
  /**
  * Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#local_ssd_count ContainerCluster#local_ssd_count}
  */
  readonly localSsdCount: number;
}

export function containerClusterNodeConfigLocalNvmeSsdBlockConfigToTerraform(struct?: ContainerClusterNodeConfigLocalNvmeSsdBlockConfigOutputReference | ContainerClusterNodeConfigLocalNvmeSsdBlockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
  }
}


export function containerClusterNodeConfigLocalNvmeSsdBlockConfigToHclTerraform(struct?: ContainerClusterNodeConfigLocalNvmeSsdBlockConfigOutputReference | ContainerClusterNodeConfigLocalNvmeSsdBlockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_ssd_count: {
      value: cdktf.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigLocalNvmeSsdBlockConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigLocalNvmeSsdBlockConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigLocalNvmeSsdBlockConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localSsdCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localSsdCount = value.localSsdCount;
    }
  }

  // local_ssd_count - computed: false, optional: false, required: true
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }
}
export interface ContainerClusterNodeConfigReservationAffinity {
  /**
  * Corresponds to the type of reservation consumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#consume_reservation_type ContainerCluster#consume_reservation_type}
  */
  readonly consumeReservationType: string;
  /**
  * The label key of a reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#key ContainerCluster#key}
  */
  readonly key?: string;
  /**
  * The label values of the reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#values ContainerCluster#values}
  */
  readonly values?: string[];
}

export function containerClusterNodeConfigReservationAffinityToTerraform(struct?: ContainerClusterNodeConfigReservationAffinityOutputReference | ContainerClusterNodeConfigReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consume_reservation_type: cdktf.stringToTerraform(struct!.consumeReservationType),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function containerClusterNodeConfigReservationAffinityToHclTerraform(struct?: ContainerClusterNodeConfigReservationAffinityOutputReference | ContainerClusterNodeConfigReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consume_reservation_type: {
      value: cdktf.stringToHclTerraform(struct!.consumeReservationType),
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigReservationAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigReservationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumeReservationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumeReservationType = this._consumeReservationType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigReservationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumeReservationType = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumeReservationType = value.consumeReservationType;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // consume_reservation_type - computed: false, optional: false, required: true
  private _consumeReservationType?: string; 
  public get consumeReservationType() {
    return this.getStringAttribute('consume_reservation_type');
  }
  public set consumeReservationType(value: string) {
    this._consumeReservationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumeReservationTypeInput() {
    return this._consumeReservationType;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface ContainerClusterNodeConfigSecondaryBootDisks {
  /**
  * Disk image to create the secondary boot disk from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#disk_image ContainerCluster#disk_image}
  */
  readonly diskImage: string;
  /**
  * Mode for how the secondary boot disk is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#mode ContainerCluster#mode}
  */
  readonly mode?: string;
}

export function containerClusterNodeConfigSecondaryBootDisksToTerraform(struct?: ContainerClusterNodeConfigSecondaryBootDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_image: cdktf.stringToTerraform(struct!.diskImage),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function containerClusterNodeConfigSecondaryBootDisksToHclTerraform(struct?: ContainerClusterNodeConfigSecondaryBootDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_image: {
      value: cdktf.stringToHclTerraform(struct!.diskImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigSecondaryBootDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterNodeConfigSecondaryBootDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskImage = this._diskImage;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigSecondaryBootDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskImage = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskImage = value.diskImage;
      this._mode = value.mode;
    }
  }

  // disk_image - computed: false, optional: false, required: true
  private _diskImage?: string; 
  public get diskImage() {
    return this.getStringAttribute('disk_image');
  }
  public set diskImage(value: string) {
    this._diskImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskImageInput() {
    return this._diskImage;
  }

  // mode - computed: false, optional: true, required: false
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
}

export class ContainerClusterNodeConfigSecondaryBootDisksList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterNodeConfigSecondaryBootDisks[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterNodeConfigSecondaryBootDisksOutputReference {
    return new ContainerClusterNodeConfigSecondaryBootDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodeConfigShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enable_integrity_monitoring ContainerCluster#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enable_secure_boot ContainerCluster#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
}

export function containerClusterNodeConfigShieldedInstanceConfigToTerraform(struct?: ContainerClusterNodeConfigShieldedInstanceConfigOutputReference | ContainerClusterNodeConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}


export function containerClusterNodeConfigShieldedInstanceConfigToHclTerraform(struct?: ContainerClusterNodeConfigShieldedInstanceConfigOutputReference | ContainerClusterNodeConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_integrity_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.enableIntegrityMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_secure_boot: {
      value: cdktf.booleanToHclTerraform(struct!.enableSecureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
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
    return this.getBooleanAttribute('enable_secure_boot');
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
export interface ContainerClusterNodeConfigSoleTenantConfigNodeAffinity {
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#key ContainerCluster#key}
  */
  readonly key: string;
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#operator ContainerCluster#operator}
  */
  readonly operator: string;
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#values ContainerCluster#values}
  */
  readonly values: string[];
}

export function containerClusterNodeConfigSoleTenantConfigNodeAffinityToTerraform(struct?: ContainerClusterNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function containerClusterNodeConfigSoleTenantConfigNodeAffinityToHclTerraform(struct?: ContainerClusterNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigSoleTenantConfigNodeAffinityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ContainerClusterNodeConfigSoleTenantConfigNodeAffinityList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterNodeConfigSoleTenantConfigNodeAffinity[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterNodeConfigSoleTenantConfigNodeAffinityOutputReference {
    return new ContainerClusterNodeConfigSoleTenantConfigNodeAffinityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodeConfigSoleTenantConfig {
  /**
  * node_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#node_affinity ContainerCluster#node_affinity}
  */
  readonly nodeAffinity: ContainerClusterNodeConfigSoleTenantConfigNodeAffinity[] | cdktf.IResolvable;
}

export function containerClusterNodeConfigSoleTenantConfigToTerraform(struct?: ContainerClusterNodeConfigSoleTenantConfigOutputReference | ContainerClusterNodeConfigSoleTenantConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: cdktf.listMapper(containerClusterNodeConfigSoleTenantConfigNodeAffinityToTerraform, true)(struct!.nodeAffinity),
  }
}


export function containerClusterNodeConfigSoleTenantConfigToHclTerraform(struct?: ContainerClusterNodeConfigSoleTenantConfigOutputReference | ContainerClusterNodeConfigSoleTenantConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: cdktf.listMapperHcl(containerClusterNodeConfigSoleTenantConfigNodeAffinityToHclTerraform, true)(struct!.nodeAffinity),
      isBlock: true,
      type: "set",
      storageClassType: "ContainerClusterNodeConfigSoleTenantConfigNodeAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigSoleTenantConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigSoleTenantConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigSoleTenantConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeAffinity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeAffinity.internalValue = value.nodeAffinity;
    }
  }

  // node_affinity - computed: false, optional: false, required: true
  private _nodeAffinity = new ContainerClusterNodeConfigSoleTenantConfigNodeAffinityList(this, "node_affinity", true);
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: ContainerClusterNodeConfigSoleTenantConfigNodeAffinity[] | cdktf.IResolvable) {
    this._nodeAffinity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }
}
export interface ContainerClusterNodeConfigTaint {
  /**
  * Effect for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#effect ContainerCluster#effect}
  */
  readonly effect: string;
  /**
  * Key for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#key ContainerCluster#key}
  */
  readonly key: string;
  /**
  * Value for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#value ContainerCluster#value}
  */
  readonly value: string;
}

export function containerClusterNodeConfigTaintToTerraform(struct?: ContainerClusterNodeConfigTaint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function containerClusterNodeConfigTaintToHclTerraform(struct?: ContainerClusterNodeConfigTaint | cdktf.IResolvable): any {
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

export class ContainerClusterNodeConfigTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterNodeConfigTaint | cdktf.IResolvable | undefined {
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
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigTaint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
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
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ContainerClusterNodeConfigTaintList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterNodeConfigTaint[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterNodeConfigTaintOutputReference {
    return new ContainerClusterNodeConfigTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodeConfigWindowsNodeConfig {
  /**
  * The OS Version of the windows nodepool.Values are OS_VERSION_UNSPECIFIED,OS_VERSION_LTSC2019 and OS_VERSION_LTSC2022
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#osversion ContainerCluster#osversion}
  */
  readonly osversion?: string;
}

export function containerClusterNodeConfigWindowsNodeConfigToTerraform(struct?: ContainerClusterNodeConfigWindowsNodeConfigOutputReference | ContainerClusterNodeConfigWindowsNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    osversion: cdktf.stringToTerraform(struct!.osversion),
  }
}


export function containerClusterNodeConfigWindowsNodeConfigToHclTerraform(struct?: ContainerClusterNodeConfigWindowsNodeConfigOutputReference | ContainerClusterNodeConfigWindowsNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    osversion: {
      value: cdktf.stringToHclTerraform(struct!.osversion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigWindowsNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigWindowsNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._osversion !== undefined) {
      hasAnyValues = true;
      internalValueResult.osversion = this._osversion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigWindowsNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._osversion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._osversion = value.osversion;
    }
  }

  // osversion - computed: false, optional: true, required: false
  private _osversion?: string; 
  public get osversion() {
    return this.getStringAttribute('osversion');
  }
  public set osversion(value: string) {
    this._osversion = value;
  }
  public resetOsversion() {
    this._osversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osversionInput() {
    return this._osversion;
  }
}
export interface ContainerClusterNodeConfigWorkloadMetadataConfig {
  /**
  * Mode is the configuration for how to expose metadata to workloads running on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#mode ContainerCluster#mode}
  */
  readonly mode: string;
}

export function containerClusterNodeConfigWorkloadMetadataConfigToTerraform(struct?: ContainerClusterNodeConfigWorkloadMetadataConfigOutputReference | ContainerClusterNodeConfigWorkloadMetadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function containerClusterNodeConfigWorkloadMetadataConfigToHclTerraform(struct?: ContainerClusterNodeConfigWorkloadMetadataConfigOutputReference | ContainerClusterNodeConfigWorkloadMetadataConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigWorkloadMetadataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfigWorkloadMetadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfigWorkloadMetadataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface ContainerClusterNodeConfig {
  /**
  * The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#boot_disk_kms_key ContainerCluster#boot_disk_kms_key}
  */
  readonly bootDiskKmsKey?: string;
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#disk_size_gb ContainerCluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#disk_type ContainerCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * If enabled boot disks are configured with confidential mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enable_confidential_storage ContainerCluster#enable_confidential_storage}
  */
  readonly enableConfidentialStorage?: boolean | cdktf.IResolvable;
  /**
  * Enables Flex Start provisioning model for the node pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#flex_start ContainerCluster#flex_start}
  */
  readonly flexStart?: boolean | cdktf.IResolvable;
  /**
  * The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#image_type ContainerCluster#image_type}
  */
  readonly imageType?: string;
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#labels ContainerCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The number of local SSD disks to be attached to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#local_ssd_count ContainerCluster#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * LocalSsdEncryptionMode specified the method used for encrypting the local SSDs attached to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#local_ssd_encryption_mode ContainerCluster#local_ssd_encryption_mode}
  */
  readonly localSsdEncryptionMode?: string;
  /**
  * Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#logging_variant ContainerCluster#logging_variant}
  */
  readonly loggingVariant?: string;
  /**
  * The name of a Google Compute Engine machine type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#machine_type ContainerCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The runtime of each node in the node pool in seconds, terminated by 's'. Example: "3600s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#max_run_duration ContainerCluster#max_run_duration}
  */
  readonly maxRunDuration?: string;
  /**
  * The metadata key/value pairs assigned to instances in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#metadata ContainerCluster#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#min_cpu_platform ContainerCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#node_group ContainerCluster#node_group}
  */
  readonly nodeGroup?: string;
  /**
  * The set of Google API scopes to be made available on all of the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#oauth_scopes ContainerCluster#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * Whether the nodes are created as preemptible VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#preemptible ContainerCluster#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * The GCE resource labels (a map of key/value pairs) to be applied to the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#resource_labels ContainerCluster#resource_labels}
  */
  readonly resourceLabels?: { [key: string]: string };
  /**
  * A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#resource_manager_tags ContainerCluster#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#service_account ContainerCluster#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Whether the nodes are created as spot VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#spot ContainerCluster#spot}
  */
  readonly spot?: boolean | cdktf.IResolvable;
  /**
  * The list of Storage Pools where boot disks are provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#storage_pools ContainerCluster#storage_pools}
  */
  readonly storagePools?: string[];
  /**
  * The list of instance tags applied to all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#tags ContainerCluster#tags}
  */
  readonly tags?: string[];
  /**
  * advanced_machine_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#advanced_machine_features ContainerCluster#advanced_machine_features}
  */
  readonly advancedMachineFeatures?: ContainerClusterNodeConfigAdvancedMachineFeatures;
  /**
  * confidential_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#confidential_nodes ContainerCluster#confidential_nodes}
  */
  readonly confidentialNodes?: ContainerClusterNodeConfigConfidentialNodes;
  /**
  * containerd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#containerd_config ContainerCluster#containerd_config}
  */
  readonly containerdConfig?: ContainerClusterNodeConfigContainerdConfig;
  /**
  * ephemeral_storage_local_ssd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#ephemeral_storage_local_ssd_config ContainerCluster#ephemeral_storage_local_ssd_config}
  */
  readonly ephemeralStorageLocalSsdConfig?: ContainerClusterNodeConfigEphemeralStorageLocalSsdConfig;
  /**
  * fast_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#fast_socket ContainerCluster#fast_socket}
  */
  readonly fastSocket?: ContainerClusterNodeConfigFastSocket;
  /**
  * gcfs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#gcfs_config ContainerCluster#gcfs_config}
  */
  readonly gcfsConfig?: ContainerClusterNodeConfigGcfsConfig;
  /**
  * guest_accelerator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#guest_accelerator ContainerCluster#guest_accelerator}
  */
  readonly guestAccelerator?: ContainerClusterNodeConfigGuestAccelerator[] | cdktf.IResolvable;
  /**
  * gvnic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#gvnic ContainerCluster#gvnic}
  */
  readonly gvnic?: ContainerClusterNodeConfigGvnic;
  /**
  * host_maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#host_maintenance_policy ContainerCluster#host_maintenance_policy}
  */
  readonly hostMaintenancePolicy?: ContainerClusterNodeConfigHostMaintenancePolicy;
  /**
  * kubelet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#kubelet_config ContainerCluster#kubelet_config}
  */
  readonly kubeletConfig?: ContainerClusterNodeConfigKubeletConfig;
  /**
  * linux_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#linux_node_config ContainerCluster#linux_node_config}
  */
  readonly linuxNodeConfig?: ContainerClusterNodeConfigLinuxNodeConfig;
  /**
  * local_nvme_ssd_block_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#local_nvme_ssd_block_config ContainerCluster#local_nvme_ssd_block_config}
  */
  readonly localNvmeSsdBlockConfig?: ContainerClusterNodeConfigLocalNvmeSsdBlockConfig;
  /**
  * reservation_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#reservation_affinity ContainerCluster#reservation_affinity}
  */
  readonly reservationAffinity?: ContainerClusterNodeConfigReservationAffinity;
  /**
  * secondary_boot_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#secondary_boot_disks ContainerCluster#secondary_boot_disks}
  */
  readonly secondaryBootDisks?: ContainerClusterNodeConfigSecondaryBootDisks[] | cdktf.IResolvable;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#shielded_instance_config ContainerCluster#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: ContainerClusterNodeConfigShieldedInstanceConfig;
  /**
  * sole_tenant_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#sole_tenant_config ContainerCluster#sole_tenant_config}
  */
  readonly soleTenantConfig?: ContainerClusterNodeConfigSoleTenantConfig;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#taint ContainerCluster#taint}
  */
  readonly taint?: ContainerClusterNodeConfigTaint[] | cdktf.IResolvable;
  /**
  * windows_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#windows_node_config ContainerCluster#windows_node_config}
  */
  readonly windowsNodeConfig?: ContainerClusterNodeConfigWindowsNodeConfig;
  /**
  * workload_metadata_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#workload_metadata_config ContainerCluster#workload_metadata_config}
  */
  readonly workloadMetadataConfig?: ContainerClusterNodeConfigWorkloadMetadataConfig;
}

export function containerClusterNodeConfigToTerraform(struct?: ContainerClusterNodeConfigOutputReference | ContainerClusterNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_kms_key: cdktf.stringToTerraform(struct!.bootDiskKmsKey),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    enable_confidential_storage: cdktf.booleanToTerraform(struct!.enableConfidentialStorage),
    flex_start: cdktf.booleanToTerraform(struct!.flexStart),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
    local_ssd_encryption_mode: cdktf.stringToTerraform(struct!.localSsdEncryptionMode),
    logging_variant: cdktf.stringToTerraform(struct!.loggingVariant),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    max_run_duration: cdktf.stringToTerraform(struct!.maxRunDuration),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    node_group: cdktf.stringToTerraform(struct!.nodeGroup),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oauthScopes),
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    resource_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceLabels),
    resource_manager_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceManagerTags),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    spot: cdktf.booleanToTerraform(struct!.spot),
    storage_pools: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.storagePools),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    advanced_machine_features: containerClusterNodeConfigAdvancedMachineFeaturesToTerraform(struct!.advancedMachineFeatures),
    confidential_nodes: containerClusterNodeConfigConfidentialNodesToTerraform(struct!.confidentialNodes),
    containerd_config: containerClusterNodeConfigContainerdConfigToTerraform(struct!.containerdConfig),
    ephemeral_storage_local_ssd_config: containerClusterNodeConfigEphemeralStorageLocalSsdConfigToTerraform(struct!.ephemeralStorageLocalSsdConfig),
    fast_socket: containerClusterNodeConfigFastSocketToTerraform(struct!.fastSocket),
    gcfs_config: containerClusterNodeConfigGcfsConfigToTerraform(struct!.gcfsConfig),
    guest_accelerator: cdktf.listMapper(containerClusterNodeConfigGuestAcceleratorToTerraform, true)(struct!.guestAccelerator),
    gvnic: containerClusterNodeConfigGvnicToTerraform(struct!.gvnic),
    host_maintenance_policy: containerClusterNodeConfigHostMaintenancePolicyToTerraform(struct!.hostMaintenancePolicy),
    kubelet_config: containerClusterNodeConfigKubeletConfigToTerraform(struct!.kubeletConfig),
    linux_node_config: containerClusterNodeConfigLinuxNodeConfigToTerraform(struct!.linuxNodeConfig),
    local_nvme_ssd_block_config: containerClusterNodeConfigLocalNvmeSsdBlockConfigToTerraform(struct!.localNvmeSsdBlockConfig),
    reservation_affinity: containerClusterNodeConfigReservationAffinityToTerraform(struct!.reservationAffinity),
    secondary_boot_disks: cdktf.listMapper(containerClusterNodeConfigSecondaryBootDisksToTerraform, true)(struct!.secondaryBootDisks),
    shielded_instance_config: containerClusterNodeConfigShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    sole_tenant_config: containerClusterNodeConfigSoleTenantConfigToTerraform(struct!.soleTenantConfig),
    taint: cdktf.listMapper(containerClusterNodeConfigTaintToTerraform, true)(struct!.taint),
    windows_node_config: containerClusterNodeConfigWindowsNodeConfigToTerraform(struct!.windowsNodeConfig),
    workload_metadata_config: containerClusterNodeConfigWorkloadMetadataConfigToTerraform(struct!.workloadMetadataConfig),
  }
}


export function containerClusterNodeConfigToHclTerraform(struct?: ContainerClusterNodeConfigOutputReference | ContainerClusterNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk_kms_key: {
      value: cdktf.stringToHclTerraform(struct!.bootDiskKmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_confidential_storage: {
      value: cdktf.booleanToHclTerraform(struct!.enableConfidentialStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flex_start: {
      value: cdktf.booleanToHclTerraform(struct!.flexStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_type: {
      value: cdktf.stringToHclTerraform(struct!.imageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    local_ssd_count: {
      value: cdktf.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ssd_encryption_mode: {
      value: cdktf.stringToHclTerraform(struct!.localSsdEncryptionMode),
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
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_run_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxRunDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    min_cpu_platform: {
      value: cdktf.stringToHclTerraform(struct!.minCpuPlatform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_group: {
      value: cdktf.stringToHclTerraform(struct!.nodeGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.oauthScopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    preemptible: {
      value: cdktf.booleanToHclTerraform(struct!.preemptible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resource_manager_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceManagerTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot: {
      value: cdktf.booleanToHclTerraform(struct!.spot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_pools: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.storagePools),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    advanced_machine_features: {
      value: containerClusterNodeConfigAdvancedMachineFeaturesToHclTerraform(struct!.advancedMachineFeatures),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigAdvancedMachineFeaturesList",
    },
    confidential_nodes: {
      value: containerClusterNodeConfigConfidentialNodesToHclTerraform(struct!.confidentialNodes),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigConfidentialNodesList",
    },
    containerd_config: {
      value: containerClusterNodeConfigContainerdConfigToHclTerraform(struct!.containerdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigContainerdConfigList",
    },
    ephemeral_storage_local_ssd_config: {
      value: containerClusterNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform(struct!.ephemeralStorageLocalSsdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigEphemeralStorageLocalSsdConfigList",
    },
    fast_socket: {
      value: containerClusterNodeConfigFastSocketToHclTerraform(struct!.fastSocket),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigFastSocketList",
    },
    gcfs_config: {
      value: containerClusterNodeConfigGcfsConfigToHclTerraform(struct!.gcfsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigGcfsConfigList",
    },
    guest_accelerator: {
      value: cdktf.listMapperHcl(containerClusterNodeConfigGuestAcceleratorToHclTerraform, true)(struct!.guestAccelerator),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigGuestAcceleratorList",
    },
    gvnic: {
      value: containerClusterNodeConfigGvnicToHclTerraform(struct!.gvnic),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigGvnicList",
    },
    host_maintenance_policy: {
      value: containerClusterNodeConfigHostMaintenancePolicyToHclTerraform(struct!.hostMaintenancePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigHostMaintenancePolicyList",
    },
    kubelet_config: {
      value: containerClusterNodeConfigKubeletConfigToHclTerraform(struct!.kubeletConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigKubeletConfigList",
    },
    linux_node_config: {
      value: containerClusterNodeConfigLinuxNodeConfigToHclTerraform(struct!.linuxNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigLinuxNodeConfigList",
    },
    local_nvme_ssd_block_config: {
      value: containerClusterNodeConfigLocalNvmeSsdBlockConfigToHclTerraform(struct!.localNvmeSsdBlockConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigLocalNvmeSsdBlockConfigList",
    },
    reservation_affinity: {
      value: containerClusterNodeConfigReservationAffinityToHclTerraform(struct!.reservationAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigReservationAffinityList",
    },
    secondary_boot_disks: {
      value: cdktf.listMapperHcl(containerClusterNodeConfigSecondaryBootDisksToHclTerraform, true)(struct!.secondaryBootDisks),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigSecondaryBootDisksList",
    },
    shielded_instance_config: {
      value: containerClusterNodeConfigShieldedInstanceConfigToHclTerraform(struct!.shieldedInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigShieldedInstanceConfigList",
    },
    sole_tenant_config: {
      value: containerClusterNodeConfigSoleTenantConfigToHclTerraform(struct!.soleTenantConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigSoleTenantConfigList",
    },
    taint: {
      value: cdktf.listMapperHcl(containerClusterNodeConfigTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigTaintList",
    },
    windows_node_config: {
      value: containerClusterNodeConfigWindowsNodeConfigToHclTerraform(struct!.windowsNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigWindowsNodeConfigList",
    },
    workload_metadata_config: {
      value: containerClusterNodeConfigWorkloadMetadataConfigToHclTerraform(struct!.workloadMetadataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodeConfigWorkloadMetadataConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskKmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskKmsKey = this._bootDiskKmsKey;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._enableConfidentialStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConfidentialStorage = this._enableConfidentialStorage;
    }
    if (this._flexStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexStart = this._flexStart;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._localSsdEncryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdEncryptionMode = this._localSsdEncryptionMode;
    }
    if (this._loggingVariant !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingVariant = this._loggingVariant;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._maxRunDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRunDuration = this._maxRunDuration;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._nodeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroup = this._nodeGroup;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    if (this._resourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabels = this._resourceLabels;
    }
    if (this._resourceManagerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._spot !== undefined) {
      hasAnyValues = true;
      internalValueResult.spot = this._spot;
    }
    if (this._storagePools !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePools = this._storagePools;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._advancedMachineFeatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedMachineFeatures = this._advancedMachineFeatures?.internalValue;
    }
    if (this._confidentialNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialNodes = this._confidentialNodes?.internalValue;
    }
    if (this._containerdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerdConfig = this._containerdConfig?.internalValue;
    }
    if (this._ephemeralStorageLocalSsdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorageLocalSsdConfig = this._ephemeralStorageLocalSsdConfig?.internalValue;
    }
    if (this._fastSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastSocket = this._fastSocket?.internalValue;
    }
    if (this._gcfsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcfsConfig = this._gcfsConfig?.internalValue;
    }
    if (this._guestAccelerator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestAccelerator = this._guestAccelerator?.internalValue;
    }
    if (this._gvnic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gvnic = this._gvnic?.internalValue;
    }
    if (this._hostMaintenancePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostMaintenancePolicy = this._hostMaintenancePolicy?.internalValue;
    }
    if (this._kubeletConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletConfig = this._kubeletConfig?.internalValue;
    }
    if (this._linuxNodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxNodeConfig = this._linuxNodeConfig?.internalValue;
    }
    if (this._localNvmeSsdBlockConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localNvmeSsdBlockConfig = this._localNvmeSsdBlockConfig?.internalValue;
    }
    if (this._reservationAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationAffinity = this._reservationAffinity?.internalValue;
    }
    if (this._secondaryBootDisks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryBootDisks = this._secondaryBootDisks?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    if (this._soleTenantConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.soleTenantConfig = this._soleTenantConfig?.internalValue;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    if (this._windowsNodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsNodeConfig = this._windowsNodeConfig?.internalValue;
    }
    if (this._workloadMetadataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadMetadataConfig = this._workloadMetadataConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskKmsKey = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._enableConfidentialStorage = undefined;
      this._flexStart = undefined;
      this._imageType = undefined;
      this._labels = undefined;
      this._localSsdCount = undefined;
      this._localSsdEncryptionMode = undefined;
      this._loggingVariant = undefined;
      this._machineType = undefined;
      this._maxRunDuration = undefined;
      this._metadata = undefined;
      this._minCpuPlatform = undefined;
      this._nodeGroup = undefined;
      this._oauthScopes = undefined;
      this._preemptible = undefined;
      this._resourceLabels = undefined;
      this._resourceManagerTags = undefined;
      this._serviceAccount = undefined;
      this._spot = undefined;
      this._storagePools = undefined;
      this._tags = undefined;
      this._advancedMachineFeatures.internalValue = undefined;
      this._confidentialNodes.internalValue = undefined;
      this._containerdConfig.internalValue = undefined;
      this._ephemeralStorageLocalSsdConfig.internalValue = undefined;
      this._fastSocket.internalValue = undefined;
      this._gcfsConfig.internalValue = undefined;
      this._guestAccelerator.internalValue = undefined;
      this._gvnic.internalValue = undefined;
      this._hostMaintenancePolicy.internalValue = undefined;
      this._kubeletConfig.internalValue = undefined;
      this._linuxNodeConfig.internalValue = undefined;
      this._localNvmeSsdBlockConfig.internalValue = undefined;
      this._reservationAffinity.internalValue = undefined;
      this._secondaryBootDisks.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
      this._soleTenantConfig.internalValue = undefined;
      this._taint.internalValue = undefined;
      this._windowsNodeConfig.internalValue = undefined;
      this._workloadMetadataConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskKmsKey = value.bootDiskKmsKey;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._enableConfidentialStorage = value.enableConfidentialStorage;
      this._flexStart = value.flexStart;
      this._imageType = value.imageType;
      this._labels = value.labels;
      this._localSsdCount = value.localSsdCount;
      this._localSsdEncryptionMode = value.localSsdEncryptionMode;
      this._loggingVariant = value.loggingVariant;
      this._machineType = value.machineType;
      this._maxRunDuration = value.maxRunDuration;
      this._metadata = value.metadata;
      this._minCpuPlatform = value.minCpuPlatform;
      this._nodeGroup = value.nodeGroup;
      this._oauthScopes = value.oauthScopes;
      this._preemptible = value.preemptible;
      this._resourceLabels = value.resourceLabels;
      this._resourceManagerTags = value.resourceManagerTags;
      this._serviceAccount = value.serviceAccount;
      this._spot = value.spot;
      this._storagePools = value.storagePools;
      this._tags = value.tags;
      this._advancedMachineFeatures.internalValue = value.advancedMachineFeatures;
      this._confidentialNodes.internalValue = value.confidentialNodes;
      this._containerdConfig.internalValue = value.containerdConfig;
      this._ephemeralStorageLocalSsdConfig.internalValue = value.ephemeralStorageLocalSsdConfig;
      this._fastSocket.internalValue = value.fastSocket;
      this._gcfsConfig.internalValue = value.gcfsConfig;
      this._guestAccelerator.internalValue = value.guestAccelerator;
      this._gvnic.internalValue = value.gvnic;
      this._hostMaintenancePolicy.internalValue = value.hostMaintenancePolicy;
      this._kubeletConfig.internalValue = value.kubeletConfig;
      this._linuxNodeConfig.internalValue = value.linuxNodeConfig;
      this._localNvmeSsdBlockConfig.internalValue = value.localNvmeSsdBlockConfig;
      this._reservationAffinity.internalValue = value.reservationAffinity;
      this._secondaryBootDisks.internalValue = value.secondaryBootDisks;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
      this._soleTenantConfig.internalValue = value.soleTenantConfig;
      this._taint.internalValue = value.taint;
      this._windowsNodeConfig.internalValue = value.windowsNodeConfig;
      this._workloadMetadataConfig.internalValue = value.workloadMetadataConfig;
    }
  }

  // boot_disk_kms_key - computed: false, optional: true, required: false
  private _bootDiskKmsKey?: string; 
  public get bootDiskKmsKey() {
    return this.getStringAttribute('boot_disk_kms_key');
  }
  public set bootDiskKmsKey(value: string) {
    this._bootDiskKmsKey = value;
  }
  public resetBootDiskKmsKey() {
    this._bootDiskKmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskKmsKeyInput() {
    return this._bootDiskKmsKey;
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

  // effective_taints - computed: true, optional: false, required: false
  private _effectiveTaints = new ContainerClusterNodeConfigEffectiveTaintsList(this, "effective_taints", false);
  public get effectiveTaints() {
    return this._effectiveTaints;
  }

  // enable_confidential_storage - computed: false, optional: true, required: false
  private _enableConfidentialStorage?: boolean | cdktf.IResolvable; 
  public get enableConfidentialStorage() {
    return this.getBooleanAttribute('enable_confidential_storage');
  }
  public set enableConfidentialStorage(value: boolean | cdktf.IResolvable) {
    this._enableConfidentialStorage = value;
  }
  public resetEnableConfidentialStorage() {
    this._enableConfidentialStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConfidentialStorageInput() {
    return this._enableConfidentialStorage;
  }

  // flex_start - computed: false, optional: true, required: false
  private _flexStart?: boolean | cdktf.IResolvable; 
  public get flexStart() {
    return this.getBooleanAttribute('flex_start');
  }
  public set flexStart(value: boolean | cdktf.IResolvable) {
    this._flexStart = value;
  }
  public resetFlexStart() {
    this._flexStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexStartInput() {
    return this._flexStart;
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
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
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

  // local_ssd_encryption_mode - computed: false, optional: true, required: false
  private _localSsdEncryptionMode?: string; 
  public get localSsdEncryptionMode() {
    return this.getStringAttribute('local_ssd_encryption_mode');
  }
  public set localSsdEncryptionMode(value: string) {
    this._localSsdEncryptionMode = value;
  }
  public resetLocalSsdEncryptionMode() {
    this._localSsdEncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdEncryptionModeInput() {
    return this._localSsdEncryptionMode;
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

  // max_run_duration - computed: false, optional: true, required: false
  private _maxRunDuration?: string; 
  public get maxRunDuration() {
    return this.getStringAttribute('max_run_duration');
  }
  public set maxRunDuration(value: string) {
    this._maxRunDuration = value;
  }
  public resetMaxRunDuration() {
    this._maxRunDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRunDurationInput() {
    return this._maxRunDuration;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // min_cpu_platform - computed: true, optional: true, required: false
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

  // node_group - computed: false, optional: true, required: false
  private _nodeGroup?: string; 
  public get nodeGroup() {
    return this.getStringAttribute('node_group');
  }
  public set nodeGroup(value: string) {
    this._nodeGroup = value;
  }
  public resetNodeGroup() {
    this._nodeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupInput() {
    return this._nodeGroup;
  }

  // oauth_scopes - computed: true, optional: true, required: false
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('oauth_scopes'));
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
    return this.getBooleanAttribute('preemptible');
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

  // resource_labels - computed: false, optional: true, required: false
  private _resourceLabels?: { [key: string]: string }; 
  public get resourceLabels() {
    return this.getStringMapAttribute('resource_labels');
  }
  public set resourceLabels(value: { [key: string]: string }) {
    this._resourceLabels = value;
  }
  public resetResourceLabels() {
    this._resourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelsInput() {
    return this._resourceLabels;
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

  // spot - computed: false, optional: true, required: false
  private _spot?: boolean | cdktf.IResolvable; 
  public get spot() {
    return this.getBooleanAttribute('spot');
  }
  public set spot(value: boolean | cdktf.IResolvable) {
    this._spot = value;
  }
  public resetSpot() {
    this._spot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInput() {
    return this._spot;
  }

  // storage_pools - computed: false, optional: true, required: false
  private _storagePools?: string[]; 
  public get storagePools() {
    return this.getListAttribute('storage_pools');
  }
  public set storagePools(value: string[]) {
    this._storagePools = value;
  }
  public resetStoragePools() {
    this._storagePools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolsInput() {
    return this._storagePools;
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

  // advanced_machine_features - computed: false, optional: true, required: false
  private _advancedMachineFeatures = new ContainerClusterNodeConfigAdvancedMachineFeaturesOutputReference(this, "advanced_machine_features");
  public get advancedMachineFeatures() {
    return this._advancedMachineFeatures;
  }
  public putAdvancedMachineFeatures(value: ContainerClusterNodeConfigAdvancedMachineFeatures) {
    this._advancedMachineFeatures.internalValue = value;
  }
  public resetAdvancedMachineFeatures() {
    this._advancedMachineFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedMachineFeaturesInput() {
    return this._advancedMachineFeatures.internalValue;
  }

  // confidential_nodes - computed: false, optional: true, required: false
  private _confidentialNodes = new ContainerClusterNodeConfigConfidentialNodesOutputReference(this, "confidential_nodes");
  public get confidentialNodes() {
    return this._confidentialNodes;
  }
  public putConfidentialNodes(value: ContainerClusterNodeConfigConfidentialNodes) {
    this._confidentialNodes.internalValue = value;
  }
  public resetConfidentialNodes() {
    this._confidentialNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialNodesInput() {
    return this._confidentialNodes.internalValue;
  }

  // containerd_config - computed: false, optional: true, required: false
  private _containerdConfig = new ContainerClusterNodeConfigContainerdConfigOutputReference(this, "containerd_config");
  public get containerdConfig() {
    return this._containerdConfig;
  }
  public putContainerdConfig(value: ContainerClusterNodeConfigContainerdConfig) {
    this._containerdConfig.internalValue = value;
  }
  public resetContainerdConfig() {
    this._containerdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerdConfigInput() {
    return this._containerdConfig.internalValue;
  }

  // ephemeral_storage_local_ssd_config - computed: false, optional: true, required: false
  private _ephemeralStorageLocalSsdConfig = new ContainerClusterNodeConfigEphemeralStorageLocalSsdConfigOutputReference(this, "ephemeral_storage_local_ssd_config");
  public get ephemeralStorageLocalSsdConfig() {
    return this._ephemeralStorageLocalSsdConfig;
  }
  public putEphemeralStorageLocalSsdConfig(value: ContainerClusterNodeConfigEphemeralStorageLocalSsdConfig) {
    this._ephemeralStorageLocalSsdConfig.internalValue = value;
  }
  public resetEphemeralStorageLocalSsdConfig() {
    this._ephemeralStorageLocalSsdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageLocalSsdConfigInput() {
    return this._ephemeralStorageLocalSsdConfig.internalValue;
  }

  // fast_socket - computed: false, optional: true, required: false
  private _fastSocket = new ContainerClusterNodeConfigFastSocketOutputReference(this, "fast_socket");
  public get fastSocket() {
    return this._fastSocket;
  }
  public putFastSocket(value: ContainerClusterNodeConfigFastSocket) {
    this._fastSocket.internalValue = value;
  }
  public resetFastSocket() {
    this._fastSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastSocketInput() {
    return this._fastSocket.internalValue;
  }

  // gcfs_config - computed: false, optional: true, required: false
  private _gcfsConfig = new ContainerClusterNodeConfigGcfsConfigOutputReference(this, "gcfs_config");
  public get gcfsConfig() {
    return this._gcfsConfig;
  }
  public putGcfsConfig(value: ContainerClusterNodeConfigGcfsConfig) {
    this._gcfsConfig.internalValue = value;
  }
  public resetGcfsConfig() {
    this._gcfsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcfsConfigInput() {
    return this._gcfsConfig.internalValue;
  }

  // guest_accelerator - computed: false, optional: true, required: false
  private _guestAccelerator = new ContainerClusterNodeConfigGuestAcceleratorList(this, "guest_accelerator", false);
  public get guestAccelerator() {
    return this._guestAccelerator;
  }
  public putGuestAccelerator(value: ContainerClusterNodeConfigGuestAccelerator[] | cdktf.IResolvable) {
    this._guestAccelerator.internalValue = value;
  }
  public resetGuestAccelerator() {
    this._guestAccelerator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorInput() {
    return this._guestAccelerator.internalValue;
  }

  // gvnic - computed: false, optional: true, required: false
  private _gvnic = new ContainerClusterNodeConfigGvnicOutputReference(this, "gvnic");
  public get gvnic() {
    return this._gvnic;
  }
  public putGvnic(value: ContainerClusterNodeConfigGvnic) {
    this._gvnic.internalValue = value;
  }
  public resetGvnic() {
    this._gvnic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gvnicInput() {
    return this._gvnic.internalValue;
  }

  // host_maintenance_policy - computed: false, optional: true, required: false
  private _hostMaintenancePolicy = new ContainerClusterNodeConfigHostMaintenancePolicyOutputReference(this, "host_maintenance_policy");
  public get hostMaintenancePolicy() {
    return this._hostMaintenancePolicy;
  }
  public putHostMaintenancePolicy(value: ContainerClusterNodeConfigHostMaintenancePolicy) {
    this._hostMaintenancePolicy.internalValue = value;
  }
  public resetHostMaintenancePolicy() {
    this._hostMaintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMaintenancePolicyInput() {
    return this._hostMaintenancePolicy.internalValue;
  }

  // kubelet_config - computed: false, optional: true, required: false
  private _kubeletConfig = new ContainerClusterNodeConfigKubeletConfigOutputReference(this, "kubelet_config");
  public get kubeletConfig() {
    return this._kubeletConfig;
  }
  public putKubeletConfig(value: ContainerClusterNodeConfigKubeletConfig) {
    this._kubeletConfig.internalValue = value;
  }
  public resetKubeletConfig() {
    this._kubeletConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigInput() {
    return this._kubeletConfig.internalValue;
  }

  // linux_node_config - computed: false, optional: true, required: false
  private _linuxNodeConfig = new ContainerClusterNodeConfigLinuxNodeConfigOutputReference(this, "linux_node_config");
  public get linuxNodeConfig() {
    return this._linuxNodeConfig;
  }
  public putLinuxNodeConfig(value: ContainerClusterNodeConfigLinuxNodeConfig) {
    this._linuxNodeConfig.internalValue = value;
  }
  public resetLinuxNodeConfig() {
    this._linuxNodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxNodeConfigInput() {
    return this._linuxNodeConfig.internalValue;
  }

  // local_nvme_ssd_block_config - computed: false, optional: true, required: false
  private _localNvmeSsdBlockConfig = new ContainerClusterNodeConfigLocalNvmeSsdBlockConfigOutputReference(this, "local_nvme_ssd_block_config");
  public get localNvmeSsdBlockConfig() {
    return this._localNvmeSsdBlockConfig;
  }
  public putLocalNvmeSsdBlockConfig(value: ContainerClusterNodeConfigLocalNvmeSsdBlockConfig) {
    this._localNvmeSsdBlockConfig.internalValue = value;
  }
  public resetLocalNvmeSsdBlockConfig() {
    this._localNvmeSsdBlockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNvmeSsdBlockConfigInput() {
    return this._localNvmeSsdBlockConfig.internalValue;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new ContainerClusterNodeConfigReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: ContainerClusterNodeConfigReservationAffinity) {
    this._reservationAffinity.internalValue = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity.internalValue;
  }

  // secondary_boot_disks - computed: false, optional: true, required: false
  private _secondaryBootDisks = new ContainerClusterNodeConfigSecondaryBootDisksList(this, "secondary_boot_disks", false);
  public get secondaryBootDisks() {
    return this._secondaryBootDisks;
  }
  public putSecondaryBootDisks(value: ContainerClusterNodeConfigSecondaryBootDisks[] | cdktf.IResolvable) {
    this._secondaryBootDisks.internalValue = value;
  }
  public resetSecondaryBootDisks() {
    this._secondaryBootDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryBootDisksInput() {
    return this._secondaryBootDisks.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new ContainerClusterNodeConfigShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
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

  // sole_tenant_config - computed: false, optional: true, required: false
  private _soleTenantConfig = new ContainerClusterNodeConfigSoleTenantConfigOutputReference(this, "sole_tenant_config");
  public get soleTenantConfig() {
    return this._soleTenantConfig;
  }
  public putSoleTenantConfig(value: ContainerClusterNodeConfigSoleTenantConfig) {
    this._soleTenantConfig.internalValue = value;
  }
  public resetSoleTenantConfig() {
    this._soleTenantConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soleTenantConfigInput() {
    return this._soleTenantConfig.internalValue;
  }

  // taint - computed: false, optional: true, required: false
  private _taint = new ContainerClusterNodeConfigTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: ContainerClusterNodeConfigTaint[] | cdktf.IResolvable) {
    this._taint.internalValue = value;
  }
  public resetTaint() {
    this._taint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint.internalValue;
  }

  // windows_node_config - computed: false, optional: true, required: false
  private _windowsNodeConfig = new ContainerClusterNodeConfigWindowsNodeConfigOutputReference(this, "windows_node_config");
  public get windowsNodeConfig() {
    return this._windowsNodeConfig;
  }
  public putWindowsNodeConfig(value: ContainerClusterNodeConfigWindowsNodeConfig) {
    this._windowsNodeConfig.internalValue = value;
  }
  public resetWindowsNodeConfig() {
    this._windowsNodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsNodeConfigInput() {
    return this._windowsNodeConfig.internalValue;
  }

  // workload_metadata_config - computed: false, optional: true, required: false
  private _workloadMetadataConfig = new ContainerClusterNodeConfigWorkloadMetadataConfigOutputReference(this, "workload_metadata_config");
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
  * Location policy specifies the algorithm used when scaling-up the node pool. "BALANCED" - Is a best effort policy that aims to balance the sizes of available zones. "ANY" - Instructs the cluster autoscaler to prioritize utilization of unused reservations, and reduces preemption risk for Spot VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#location_policy ContainerCluster#location_policy}
  */
  readonly locationPolicy?: string;
  /**
  * Maximum number of nodes per zone in the node pool. Must be >= min_node_count. Cannot be used with total limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#max_node_count ContainerCluster#max_node_count}
  */
  readonly maxNodeCount?: number;
  /**
  * Minimum number of nodes per zone in the node pool. Must be >=0 and <= max_node_count. Cannot be used with total limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#min_node_count ContainerCluster#min_node_count}
  */
  readonly minNodeCount?: number;
  /**
  * Maximum number of all nodes in the node pool. Must be >= total_min_node_count. Cannot be used with per zone limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#total_max_node_count ContainerCluster#total_max_node_count}
  */
  readonly totalMaxNodeCount?: number;
  /**
  * Minimum number of all nodes in the node pool. Must be >=0 and <= total_max_node_count. Cannot be used with per zone limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#total_min_node_count ContainerCluster#total_min_node_count}
  */
  readonly totalMinNodeCount?: number;
}

export function containerClusterNodePoolAutoscalingToTerraform(struct?: ContainerClusterNodePoolAutoscalingOutputReference | ContainerClusterNodePoolAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location_policy: cdktf.stringToTerraform(struct!.locationPolicy),
    max_node_count: cdktf.numberToTerraform(struct!.maxNodeCount),
    min_node_count: cdktf.numberToTerraform(struct!.minNodeCount),
    total_max_node_count: cdktf.numberToTerraform(struct!.totalMaxNodeCount),
    total_min_node_count: cdktf.numberToTerraform(struct!.totalMinNodeCount),
  }
}


export function containerClusterNodePoolAutoscalingToHclTerraform(struct?: ContainerClusterNodePoolAutoscalingOutputReference | ContainerClusterNodePoolAutoscaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location_policy: {
      value: cdktf.stringToHclTerraform(struct!.locationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_node_count: {
      value: cdktf.numberToHclTerraform(struct!.maxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_node_count: {
      value: cdktf.numberToHclTerraform(struct!.minNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_max_node_count: {
      value: cdktf.numberToHclTerraform(struct!.totalMaxNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_min_node_count: {
      value: cdktf.numberToHclTerraform(struct!.totalMinNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolAutoscalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolAutoscaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationPolicy = this._locationPolicy;
    }
    if (this._maxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxNodeCount = this._maxNodeCount;
    }
    if (this._minNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minNodeCount = this._minNodeCount;
    }
    if (this._totalMaxNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMaxNodeCount = this._totalMaxNodeCount;
    }
    if (this._totalMinNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMinNodeCount = this._totalMinNodeCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolAutoscaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._locationPolicy = undefined;
      this._maxNodeCount = undefined;
      this._minNodeCount = undefined;
      this._totalMaxNodeCount = undefined;
      this._totalMinNodeCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._locationPolicy = value.locationPolicy;
      this._maxNodeCount = value.maxNodeCount;
      this._minNodeCount = value.minNodeCount;
      this._totalMaxNodeCount = value.totalMaxNodeCount;
      this._totalMinNodeCount = value.totalMinNodeCount;
    }
  }

  // location_policy - computed: true, optional: true, required: false
  private _locationPolicy?: string; 
  public get locationPolicy() {
    return this.getStringAttribute('location_policy');
  }
  public set locationPolicy(value: string) {
    this._locationPolicy = value;
  }
  public resetLocationPolicy() {
    this._locationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationPolicyInput() {
    return this._locationPolicy;
  }

  // max_node_count - computed: false, optional: true, required: false
  private _maxNodeCount?: number; 
  public get maxNodeCount() {
    return this.getNumberAttribute('max_node_count');
  }
  public set maxNodeCount(value: number) {
    this._maxNodeCount = value;
  }
  public resetMaxNodeCount() {
    this._maxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNodeCountInput() {
    return this._maxNodeCount;
  }

  // min_node_count - computed: false, optional: true, required: false
  private _minNodeCount?: number; 
  public get minNodeCount() {
    return this.getNumberAttribute('min_node_count');
  }
  public set minNodeCount(value: number) {
    this._minNodeCount = value;
  }
  public resetMinNodeCount() {
    this._minNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minNodeCountInput() {
    return this._minNodeCount;
  }

  // total_max_node_count - computed: false, optional: true, required: false
  private _totalMaxNodeCount?: number; 
  public get totalMaxNodeCount() {
    return this.getNumberAttribute('total_max_node_count');
  }
  public set totalMaxNodeCount(value: number) {
    this._totalMaxNodeCount = value;
  }
  public resetTotalMaxNodeCount() {
    this._totalMaxNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMaxNodeCountInput() {
    return this._totalMaxNodeCount;
  }

  // total_min_node_count - computed: false, optional: true, required: false
  private _totalMinNodeCount?: number; 
  public get totalMinNodeCount() {
    return this.getNumberAttribute('total_min_node_count');
  }
  public set totalMinNodeCount(value: number) {
    this._totalMinNodeCount = value;
  }
  public resetTotalMinNodeCount() {
    this._totalMinNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMinNodeCountInput() {
    return this._totalMinNodeCount;
  }
}
export interface ContainerClusterNodePoolManagement {
  /**
  * Whether the nodes will be automatically repaired. Enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#auto_repair ContainerCluster#auto_repair}
  */
  readonly autoRepair?: boolean | cdktf.IResolvable;
  /**
  * Whether the nodes will be automatically upgraded. Enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#auto_upgrade ContainerCluster#auto_upgrade}
  */
  readonly autoUpgrade?: boolean | cdktf.IResolvable;
}

export function containerClusterNodePoolManagementToTerraform(struct?: ContainerClusterNodePoolManagementOutputReference | ContainerClusterNodePoolManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_repair: cdktf.booleanToTerraform(struct!.autoRepair),
    auto_upgrade: cdktf.booleanToTerraform(struct!.autoUpgrade),
  }
}


export function containerClusterNodePoolManagementToHclTerraform(struct?: ContainerClusterNodePoolManagementOutputReference | ContainerClusterNodePoolManagement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_repair: {
      value: cdktf.booleanToHclTerraform(struct!.autoRepair),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_upgrade: {
      value: cdktf.booleanToHclTerraform(struct!.autoUpgrade),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolManagementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolManagement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRepair !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRepair = this._autoRepair;
    }
    if (this._autoUpgrade !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoUpgrade = this._autoUpgrade;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolManagement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoRepair = undefined;
      this._autoUpgrade = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoRepair = value.autoRepair;
      this._autoUpgrade = value.autoUpgrade;
    }
  }

  // auto_repair - computed: false, optional: true, required: false
  private _autoRepair?: boolean | cdktf.IResolvable; 
  public get autoRepair() {
    return this.getBooleanAttribute('auto_repair');
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
    return this.getBooleanAttribute('auto_upgrade');
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
export interface ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs {
  /**
  * Name of the VPC where the additional interface belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#network ContainerCluster#network}
  */
  readonly network?: string;
  /**
  * Name of the subnetwork where the additional interface belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#subnetwork ContainerCluster#subnetwork}
  */
  readonly subnetwork?: string;
}

export function containerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsToTerraform(struct?: ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
  }
}


export function containerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsToHclTerraform(struct?: ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork: {
      value: cdktf.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._subnetwork = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._subnetwork = value.subnetwork;
    }
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

  // subnetwork - computed: false, optional: true, required: false
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
}

export class ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsOutputReference {
    return new ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs {
  /**
  * The maximum number of pods per node which use this pod network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#max_pods_per_node ContainerCluster#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
  /**
  * The name of the secondary range on the subnet which provides IP address for this pod range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#secondary_pod_range ContainerCluster#secondary_pod_range}
  */
  readonly secondaryPodRange?: string;
  /**
  * Name of the subnetwork where the additional pod network belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#subnetwork ContainerCluster#subnetwork}
  */
  readonly subnetwork?: string;
}

export function containerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsToTerraform(struct?: ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_pods_per_node: cdktf.numberToTerraform(struct!.maxPodsPerNode),
    secondary_pod_range: cdktf.stringToTerraform(struct!.secondaryPodRange),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
  }
}


export function containerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsToHclTerraform(struct?: ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_pods_per_node: {
      value: cdktf.numberToHclTerraform(struct!.maxPodsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_pod_range: {
      value: cdktf.stringToHclTerraform(struct!.secondaryPodRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork: {
      value: cdktf.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPodsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPodsPerNode = this._maxPodsPerNode;
    }
    if (this._secondaryPodRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPodRange = this._secondaryPodRange;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxPodsPerNode = undefined;
      this._secondaryPodRange = undefined;
      this._subnetwork = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxPodsPerNode = value.maxPodsPerNode;
      this._secondaryPodRange = value.secondaryPodRange;
      this._subnetwork = value.subnetwork;
    }
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
    return this._maxPodsPerNode;
  }

  // secondary_pod_range - computed: false, optional: true, required: false
  private _secondaryPodRange?: string; 
  public get secondaryPodRange() {
    return this.getStringAttribute('secondary_pod_range');
  }
  public set secondaryPodRange(value: string) {
    this._secondaryPodRange = value;
  }
  public resetSecondaryPodRange() {
    this._secondaryPodRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPodRangeInput() {
    return this._secondaryPodRange;
  }

  // subnetwork - computed: false, optional: true, required: false
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
}

export class ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsOutputReference {
    return new ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig {
  /**
  * Specifies the total network bandwidth tier for the NodePool. [Valid values](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters.nodePools#NodePool.Tier) include: "TIER_1" and "TIER_UNSPECIFIED".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#total_egress_bandwidth_tier ContainerCluster#total_egress_bandwidth_tier}
  */
  readonly totalEgressBandwidthTier: string;
}

export function containerClusterNodePoolNetworkConfigNetworkPerformanceConfigToTerraform(struct?: ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigOutputReference | ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    total_egress_bandwidth_tier: cdktf.stringToTerraform(struct!.totalEgressBandwidthTier),
  }
}


export function containerClusterNodePoolNetworkConfigNetworkPerformanceConfigToHclTerraform(struct?: ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigOutputReference | ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    total_egress_bandwidth_tier: {
      value: cdktf.stringToHclTerraform(struct!.totalEgressBandwidthTier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._totalEgressBandwidthTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEgressBandwidthTier = this._totalEgressBandwidthTier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._totalEgressBandwidthTier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._totalEgressBandwidthTier = value.totalEgressBandwidthTier;
    }
  }

  // total_egress_bandwidth_tier - computed: false, optional: false, required: true
  private _totalEgressBandwidthTier?: string; 
  public get totalEgressBandwidthTier() {
    return this.getStringAttribute('total_egress_bandwidth_tier');
  }
  public set totalEgressBandwidthTier(value: string) {
    this._totalEgressBandwidthTier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEgressBandwidthTierInput() {
    return this._totalEgressBandwidthTier;
  }
}
export interface ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#disabled ContainerCluster#disabled}
  */
  readonly disabled: boolean | cdktf.IResolvable;
}

export function containerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigToTerraform(struct?: ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference | ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function containerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigToHclTerraform(struct?: ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference | ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
    }
  }

  // disabled - computed: false, optional: false, required: true
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface ContainerClusterNodePoolNetworkConfig {
  /**
  * Whether to create a new range for pod IPs in this node pool. Defaults are provided for pod_range and pod_ipv4_cidr_block if they are not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#create_pod_range ContainerCluster#create_pod_range}
  */
  readonly createPodRange?: boolean | cdktf.IResolvable;
  /**
  * Whether nodes have internal IP addresses only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enable_private_nodes ContainerCluster#enable_private_nodes}
  */
  readonly enablePrivateNodes?: boolean | cdktf.IResolvable;
  /**
  * The IP address range for pod IPs in this node pool. Only applicable if create_pod_range is true. Set to blank to have a range chosen with the default size. Set to /netmask (e.g. /14) to have a range chosen with a specific netmask. Set to a CIDR notation (e.g. 10.96.0.0/14) to pick a specific range to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#pod_ipv4_cidr_block ContainerCluster#pod_ipv4_cidr_block}
  */
  readonly podIpv4CidrBlock?: string;
  /**
  * The ID of the secondary range for pod IPs. If create_pod_range is true, this ID is used for the new range. If create_pod_range is false, uses an existing secondary range with this ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#pod_range ContainerCluster#pod_range}
  */
  readonly podRange?: string;
  /**
  * additional_node_network_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#additional_node_network_configs ContainerCluster#additional_node_network_configs}
  */
  readonly additionalNodeNetworkConfigs?: ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs[] | cdktf.IResolvable;
  /**
  * additional_pod_network_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#additional_pod_network_configs ContainerCluster#additional_pod_network_configs}
  */
  readonly additionalPodNetworkConfigs?: ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs[] | cdktf.IResolvable;
  /**
  * network_performance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#network_performance_config ContainerCluster#network_performance_config}
  */
  readonly networkPerformanceConfig?: ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig;
  /**
  * pod_cidr_overprovision_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#pod_cidr_overprovision_config ContainerCluster#pod_cidr_overprovision_config}
  */
  readonly podCidrOverprovisionConfig?: ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig;
}

export function containerClusterNodePoolNetworkConfigToTerraform(struct?: ContainerClusterNodePoolNetworkConfigOutputReference | ContainerClusterNodePoolNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_pod_range: cdktf.booleanToTerraform(struct!.createPodRange),
    enable_private_nodes: cdktf.booleanToTerraform(struct!.enablePrivateNodes),
    pod_ipv4_cidr_block: cdktf.stringToTerraform(struct!.podIpv4CidrBlock),
    pod_range: cdktf.stringToTerraform(struct!.podRange),
    additional_node_network_configs: cdktf.listMapper(containerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsToTerraform, true)(struct!.additionalNodeNetworkConfigs),
    additional_pod_network_configs: cdktf.listMapper(containerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsToTerraform, true)(struct!.additionalPodNetworkConfigs),
    network_performance_config: containerClusterNodePoolNetworkConfigNetworkPerformanceConfigToTerraform(struct!.networkPerformanceConfig),
    pod_cidr_overprovision_config: containerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigToTerraform(struct!.podCidrOverprovisionConfig),
  }
}


export function containerClusterNodePoolNetworkConfigToHclTerraform(struct?: ContainerClusterNodePoolNetworkConfigOutputReference | ContainerClusterNodePoolNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_pod_range: {
      value: cdktf.booleanToHclTerraform(struct!.createPodRange),
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
    pod_ipv4_cidr_block: {
      value: cdktf.stringToHclTerraform(struct!.podIpv4CidrBlock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_range: {
      value: cdktf.stringToHclTerraform(struct!.podRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_node_network_configs: {
      value: cdktf.listMapperHcl(containerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsToHclTerraform, true)(struct!.additionalNodeNetworkConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsList",
    },
    additional_pod_network_configs: {
      value: cdktf.listMapperHcl(containerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsToHclTerraform, true)(struct!.additionalPodNetworkConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsList",
    },
    network_performance_config: {
      value: containerClusterNodePoolNetworkConfigNetworkPerformanceConfigToHclTerraform(struct!.networkPerformanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigList",
    },
    pod_cidr_overprovision_config: {
      value: containerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigToHclTerraform(struct!.podCidrOverprovisionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createPodRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.createPodRange = this._createPodRange;
    }
    if (this._enablePrivateNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePrivateNodes = this._enablePrivateNodes;
    }
    if (this._podIpv4CidrBlock !== undefined) {
      hasAnyValues = true;
      internalValueResult.podIpv4CidrBlock = this._podIpv4CidrBlock;
    }
    if (this._podRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.podRange = this._podRange;
    }
    if (this._additionalNodeNetworkConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalNodeNetworkConfigs = this._additionalNodeNetworkConfigs?.internalValue;
    }
    if (this._additionalPodNetworkConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalPodNetworkConfigs = this._additionalPodNetworkConfigs?.internalValue;
    }
    if (this._networkPerformanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPerformanceConfig = this._networkPerformanceConfig?.internalValue;
    }
    if (this._podCidrOverprovisionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podCidrOverprovisionConfig = this._podCidrOverprovisionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._createPodRange = undefined;
      this._enablePrivateNodes = undefined;
      this._podIpv4CidrBlock = undefined;
      this._podRange = undefined;
      this._additionalNodeNetworkConfigs.internalValue = undefined;
      this._additionalPodNetworkConfigs.internalValue = undefined;
      this._networkPerformanceConfig.internalValue = undefined;
      this._podCidrOverprovisionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._createPodRange = value.createPodRange;
      this._enablePrivateNodes = value.enablePrivateNodes;
      this._podIpv4CidrBlock = value.podIpv4CidrBlock;
      this._podRange = value.podRange;
      this._additionalNodeNetworkConfigs.internalValue = value.additionalNodeNetworkConfigs;
      this._additionalPodNetworkConfigs.internalValue = value.additionalPodNetworkConfigs;
      this._networkPerformanceConfig.internalValue = value.networkPerformanceConfig;
      this._podCidrOverprovisionConfig.internalValue = value.podCidrOverprovisionConfig;
    }
  }

  // create_pod_range - computed: false, optional: true, required: false
  private _createPodRange?: boolean | cdktf.IResolvable; 
  public get createPodRange() {
    return this.getBooleanAttribute('create_pod_range');
  }
  public set createPodRange(value: boolean | cdktf.IResolvable) {
    this._createPodRange = value;
  }
  public resetCreatePodRange() {
    this._createPodRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPodRangeInput() {
    return this._createPodRange;
  }

  // enable_private_nodes - computed: true, optional: true, required: false
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

  // pod_ipv4_cidr_block - computed: true, optional: true, required: false
  private _podIpv4CidrBlock?: string; 
  public get podIpv4CidrBlock() {
    return this.getStringAttribute('pod_ipv4_cidr_block');
  }
  public set podIpv4CidrBlock(value: string) {
    this._podIpv4CidrBlock = value;
  }
  public resetPodIpv4CidrBlock() {
    this._podIpv4CidrBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podIpv4CidrBlockInput() {
    return this._podIpv4CidrBlock;
  }

  // pod_range - computed: true, optional: true, required: false
  private _podRange?: string; 
  public get podRange() {
    return this.getStringAttribute('pod_range');
  }
  public set podRange(value: string) {
    this._podRange = value;
  }
  public resetPodRange() {
    this._podRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podRangeInput() {
    return this._podRange;
  }

  // additional_node_network_configs - computed: false, optional: true, required: false
  private _additionalNodeNetworkConfigs = new ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigsList(this, "additional_node_network_configs", false);
  public get additionalNodeNetworkConfigs() {
    return this._additionalNodeNetworkConfigs;
  }
  public putAdditionalNodeNetworkConfigs(value: ContainerClusterNodePoolNetworkConfigAdditionalNodeNetworkConfigs[] | cdktf.IResolvable) {
    this._additionalNodeNetworkConfigs.internalValue = value;
  }
  public resetAdditionalNodeNetworkConfigs() {
    this._additionalNodeNetworkConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalNodeNetworkConfigsInput() {
    return this._additionalNodeNetworkConfigs.internalValue;
  }

  // additional_pod_network_configs - computed: false, optional: true, required: false
  private _additionalPodNetworkConfigs = new ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigsList(this, "additional_pod_network_configs", false);
  public get additionalPodNetworkConfigs() {
    return this._additionalPodNetworkConfigs;
  }
  public putAdditionalPodNetworkConfigs(value: ContainerClusterNodePoolNetworkConfigAdditionalPodNetworkConfigs[] | cdktf.IResolvable) {
    this._additionalPodNetworkConfigs.internalValue = value;
  }
  public resetAdditionalPodNetworkConfigs() {
    this._additionalPodNetworkConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPodNetworkConfigsInput() {
    return this._additionalPodNetworkConfigs.internalValue;
  }

  // network_performance_config - computed: false, optional: true, required: false
  private _networkPerformanceConfig = new ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfigOutputReference(this, "network_performance_config");
  public get networkPerformanceConfig() {
    return this._networkPerformanceConfig;
  }
  public putNetworkPerformanceConfig(value: ContainerClusterNodePoolNetworkConfigNetworkPerformanceConfig) {
    this._networkPerformanceConfig.internalValue = value;
  }
  public resetNetworkPerformanceConfig() {
    this._networkPerformanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPerformanceConfigInput() {
    return this._networkPerformanceConfig.internalValue;
  }

  // pod_cidr_overprovision_config - computed: false, optional: true, required: false
  private _podCidrOverprovisionConfig = new ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfigOutputReference(this, "pod_cidr_overprovision_config");
  public get podCidrOverprovisionConfig() {
    return this._podCidrOverprovisionConfig;
  }
  public putPodCidrOverprovisionConfig(value: ContainerClusterNodePoolNetworkConfigPodCidrOverprovisionConfig) {
    this._podCidrOverprovisionConfig.internalValue = value;
  }
  public resetPodCidrOverprovisionConfig() {
    this._podCidrOverprovisionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podCidrOverprovisionConfigInput() {
    return this._podCidrOverprovisionConfig.internalValue;
  }
}
export interface ContainerClusterNodePoolNodeConfigEffectiveTaints {
}

export function containerClusterNodePoolNodeConfigEffectiveTaintsToTerraform(struct?: ContainerClusterNodePoolNodeConfigEffectiveTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function containerClusterNodePoolNodeConfigEffectiveTaintsToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigEffectiveTaints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ContainerClusterNodePoolNodeConfigEffectiveTaintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigEffectiveTaints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigEffectiveTaints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class ContainerClusterNodePoolNodeConfigEffectiveTaintsList extends cdktf.ComplexList {

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
  public get(index: number): ContainerClusterNodePoolNodeConfigEffectiveTaintsOutputReference {
    return new ContainerClusterNodePoolNodeConfigEffectiveTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNodeConfigAdvancedMachineFeatures {
  /**
  * Whether the node should have nested virtualization enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enable_nested_virtualization ContainerCluster#enable_nested_virtualization}
  */
  readonly enableNestedVirtualization?: boolean | cdktf.IResolvable;
  /**
  * Level of Performance Monitoring Unit (PMU) requested. If unset, no access to the PMU is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#performance_monitoring_unit ContainerCluster#performance_monitoring_unit}
  */
  readonly performanceMonitoringUnit?: string;
  /**
  * The number of threads per physical core. To disable simultaneous multithreading (SMT) set this to 1. If unset, the maximum number of threads supported per core by the underlying processor is assumed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#threads_per_core ContainerCluster#threads_per_core}
  */
  readonly threadsPerCore: number;
}

export function containerClusterNodePoolNodeConfigAdvancedMachineFeaturesToTerraform(struct?: ContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesOutputReference | ContainerClusterNodePoolNodeConfigAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_nested_virtualization: cdktf.booleanToTerraform(struct!.enableNestedVirtualization),
    performance_monitoring_unit: cdktf.stringToTerraform(struct!.performanceMonitoringUnit),
    threads_per_core: cdktf.numberToTerraform(struct!.threadsPerCore),
  }
}


export function containerClusterNodePoolNodeConfigAdvancedMachineFeaturesToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesOutputReference | ContainerClusterNodePoolNodeConfigAdvancedMachineFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_nested_virtualization: {
      value: cdktf.booleanToHclTerraform(struct!.enableNestedVirtualization),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    performance_monitoring_unit: {
      value: cdktf.stringToHclTerraform(struct!.performanceMonitoringUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threads_per_core: {
      value: cdktf.numberToHclTerraform(struct!.threadsPerCore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigAdvancedMachineFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableNestedVirtualization !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableNestedVirtualization = this._enableNestedVirtualization;
    }
    if (this._performanceMonitoringUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.performanceMonitoringUnit = this._performanceMonitoringUnit;
    }
    if (this._threadsPerCore !== undefined) {
      hasAnyValues = true;
      internalValueResult.threadsPerCore = this._threadsPerCore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigAdvancedMachineFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableNestedVirtualization = undefined;
      this._performanceMonitoringUnit = undefined;
      this._threadsPerCore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableNestedVirtualization = value.enableNestedVirtualization;
      this._performanceMonitoringUnit = value.performanceMonitoringUnit;
      this._threadsPerCore = value.threadsPerCore;
    }
  }

  // enable_nested_virtualization - computed: false, optional: true, required: false
  private _enableNestedVirtualization?: boolean | cdktf.IResolvable; 
  public get enableNestedVirtualization() {
    return this.getBooleanAttribute('enable_nested_virtualization');
  }
  public set enableNestedVirtualization(value: boolean | cdktf.IResolvable) {
    this._enableNestedVirtualization = value;
  }
  public resetEnableNestedVirtualization() {
    this._enableNestedVirtualization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNestedVirtualizationInput() {
    return this._enableNestedVirtualization;
  }

  // performance_monitoring_unit - computed: false, optional: true, required: false
  private _performanceMonitoringUnit?: string; 
  public get performanceMonitoringUnit() {
    return this.getStringAttribute('performance_monitoring_unit');
  }
  public set performanceMonitoringUnit(value: string) {
    this._performanceMonitoringUnit = value;
  }
  public resetPerformanceMonitoringUnit() {
    this._performanceMonitoringUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceMonitoringUnitInput() {
    return this._performanceMonitoringUnit;
  }

  // threads_per_core - computed: false, optional: false, required: true
  private _threadsPerCore?: number; 
  public get threadsPerCore() {
    return this.getNumberAttribute('threads_per_core');
  }
  public set threadsPerCore(value: number) {
    this._threadsPerCore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsPerCoreInput() {
    return this._threadsPerCore;
  }
}
export interface ContainerClusterNodePoolNodeConfigConfidentialNodes {
  /**
  * Defines the type of technology used by the confidential node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#confidential_instance_type ContainerCluster#confidential_instance_type}
  */
  readonly confidentialInstanceType?: string;
  /**
  * Whether Confidential Nodes feature is enabled for all nodes in this pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterNodePoolNodeConfigConfidentialNodesToTerraform(struct?: ContainerClusterNodePoolNodeConfigConfidentialNodesOutputReference | ContainerClusterNodePoolNodeConfigConfidentialNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidential_instance_type: cdktf.stringToTerraform(struct!.confidentialInstanceType),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterNodePoolNodeConfigConfidentialNodesToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigConfidentialNodesOutputReference | ContainerClusterNodePoolNodeConfigConfidentialNodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidential_instance_type: {
      value: cdktf.stringToHclTerraform(struct!.confidentialInstanceType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigConfidentialNodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigConfidentialNodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidentialInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialInstanceType = this._confidentialInstanceType;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigConfidentialNodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confidentialInstanceType = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confidentialInstanceType = value.confidentialInstanceType;
      this._enabled = value.enabled;
    }
  }

  // confidential_instance_type - computed: false, optional: true, required: false
  private _confidentialInstanceType?: string; 
  public get confidentialInstanceType() {
    return this.getStringAttribute('confidential_instance_type');
  }
  public set confidentialInstanceType(value: string) {
    this._confidentialInstanceType = value;
  }
  public resetConfidentialInstanceType() {
    this._confidentialInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInstanceTypeInput() {
    return this._confidentialInstanceType;
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
export interface ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig {
  /**
  * URI for the secret that hosts a certificate. Must be in the format 'projects/PROJECT_NUM/secrets/SECRET_NAME/versions/VERSION_OR_LATEST'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#secret_uri ContainerCluster#secret_uri}
  */
  readonly secretUri: string;
}

export function containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference | ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_uri: cdktf.stringToTerraform(struct!.secretUri),
  }
}


export function containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference | ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig): any {
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

export class ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretUri = this._secretUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig {
  /**
  * List of fully-qualified-domain-names. IPv4s and port specification are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#fqdns ContainerCluster#fqdns}
  */
  readonly fqdns: string[];
  /**
  * gcp_secret_manager_certificate_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#gcp_secret_manager_certificate_config ContainerCluster#gcp_secret_manager_certificate_config}
  */
  readonly gcpSecretManagerCertificateConfig: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig;
}

export function containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fqdns),
    gcp_secret_manager_certificate_config: containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToTerraform(struct!.gcpSecretManagerCertificateConfig),
  }
}


export function containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable): any {
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
      value: containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigToHclTerraform(struct!.gcpSecretManagerCertificateConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig | cdktf.IResolvable | undefined) {
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
  private _gcpSecretManagerCertificateConfig = new ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfigOutputReference(this, "gcp_secret_manager_certificate_config");
  public get gcpSecretManagerCertificateConfig() {
    return this._gcpSecretManagerCertificateConfig;
  }
  public putGcpSecretManagerCertificateConfig(value: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigGcpSecretManagerCertificateConfig) {
    this._gcpSecretManagerCertificateConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpSecretManagerCertificateConfigInput() {
    return this._gcpSecretManagerCertificateConfig.internalValue;
  }
}

export class ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference {
    return new ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig {
  /**
  * Whether or not private registries are configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * certificate_authority_domain_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#certificate_authority_domain_config ContainerCluster#certificate_authority_domain_config}
  */
  readonly certificateAuthorityDomainConfig?: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktf.IResolvable;
}

export function containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference | ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    certificate_authority_domain_config: cdktf.listMapper(containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToTerraform, true)(struct!.certificateAuthorityDomainConfig),
  }
}


export function containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference | ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig): any {
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
      value: cdktf.listMapperHcl(containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigToHclTerraform, true)(struct!.certificateAuthorityDomainConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig | undefined {
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

  public set internalValue(value: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig | undefined) {
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
  private _certificateAuthorityDomainConfig = new ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfigList(this, "certificate_authority_domain_config", false);
  public get certificateAuthorityDomainConfig() {
    return this._certificateAuthorityDomainConfig;
  }
  public putCertificateAuthorityDomainConfig(value: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigCertificateAuthorityDomainConfig[] | cdktf.IResolvable) {
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
export interface ContainerClusterNodePoolNodeConfigContainerdConfig {
  /**
  * private_registry_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#private_registry_access_config ContainerCluster#private_registry_access_config}
  */
  readonly privateRegistryAccessConfig?: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig;
}

export function containerClusterNodePoolNodeConfigContainerdConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigOutputReference | ContainerClusterNodePoolNodeConfigContainerdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_registry_access_config: containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigToTerraform(struct!.privateRegistryAccessConfig),
  }
}


export function containerClusterNodePoolNodeConfigContainerdConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigContainerdConfigOutputReference | ContainerClusterNodePoolNodeConfigContainerdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    private_registry_access_config: {
      value: containerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigToHclTerraform(struct!.privateRegistryAccessConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigContainerdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigContainerdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateRegistryAccessConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateRegistryAccessConfig = this._privateRegistryAccessConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigContainerdConfig | undefined) {
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
  private _privateRegistryAccessConfig = new ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfigOutputReference(this, "private_registry_access_config");
  public get privateRegistryAccessConfig() {
    return this._privateRegistryAccessConfig;
  }
  public putPrivateRegistryAccessConfig(value: ContainerClusterNodePoolNodeConfigContainerdConfigPrivateRegistryAccessConfig) {
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
export interface ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig {
  /**
  * Number of local SSDs to be utilized for GKE Data Cache. Uses NVMe interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#data_cache_count ContainerCluster#data_cache_count}
  */
  readonly dataCacheCount?: number;
  /**
  * Number of local SSDs to use to back ephemeral storage. Uses NVMe interfaces. Each local SSD must be 375 or 3000 GB in size, and all local SSDs must share the same size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#local_ssd_count ContainerCluster#local_ssd_count}
  */
  readonly localSsdCount: number;
}

export function containerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference | ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_cache_count: cdktf.numberToTerraform(struct!.dataCacheCount),
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
  }
}


export function containerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference | ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_cache_count: {
      value: cdktf.numberToHclTerraform(struct!.dataCacheCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ssd_count: {
      value: cdktf.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataCacheCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCacheCount = this._dataCacheCount;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataCacheCount = undefined;
      this._localSsdCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataCacheCount = value.dataCacheCount;
      this._localSsdCount = value.localSsdCount;
    }
  }

  // data_cache_count - computed: false, optional: true, required: false
  private _dataCacheCount?: number; 
  public get dataCacheCount() {
    return this.getNumberAttribute('data_cache_count');
  }
  public set dataCacheCount(value: number) {
    this._dataCacheCount = value;
  }
  public resetDataCacheCount() {
    this._dataCacheCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCacheCountInput() {
    return this._dataCacheCount;
  }

  // local_ssd_count - computed: false, optional: false, required: true
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }
}
export interface ContainerClusterNodePoolNodeConfigFastSocket {
  /**
  * Whether or not NCCL Fast Socket is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterNodePoolNodeConfigFastSocketToTerraform(struct?: ContainerClusterNodePoolNodeConfigFastSocketOutputReference | ContainerClusterNodePoolNodeConfigFastSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterNodePoolNodeConfigFastSocketToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigFastSocketOutputReference | ContainerClusterNodePoolNodeConfigFastSocket): any {
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

export class ContainerClusterNodePoolNodeConfigFastSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigFastSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigFastSocket | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigGcfsConfig {
  /**
  * Whether or not GCFS is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterNodePoolNodeConfigGcfsConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigGcfsConfigOutputReference | ContainerClusterNodePoolNodeConfigGcfsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterNodePoolNodeConfigGcfsConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigGcfsConfigOutputReference | ContainerClusterNodePoolNodeConfigGcfsConfig): any {
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

export class ContainerClusterNodePoolNodeConfigGcfsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigGcfsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigGcfsConfig | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig {
  /**
  * Mode for how the GPU driver is installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#gpu_driver_version ContainerCluster#gpu_driver_version}
  */
  readonly gpuDriverVersion: string;
}

export function containerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference | ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gpu_driver_version: cdktf.stringToTerraform(struct!.gpuDriverVersion),
  }
}


export function containerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference | ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gpu_driver_version: {
      value: cdktf.stringToHclTerraform(struct!.gpuDriverVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpuDriverVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuDriverVersion = this._gpuDriverVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gpuDriverVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gpuDriverVersion = value.gpuDriverVersion;
    }
  }

  // gpu_driver_version - computed: false, optional: false, required: true
  private _gpuDriverVersion?: string; 
  public get gpuDriverVersion() {
    return this.getStringAttribute('gpu_driver_version');
  }
  public set gpuDriverVersion(value: string) {
    this._gpuDriverVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDriverVersionInput() {
    return this._gpuDriverVersion;
  }
}
export interface ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig {
  /**
  * The type of GPU sharing strategy to enable on the GPU node. Possible values are described in the API package (https://pkg.go.dev/google.golang.org/api/container/v1#GPUSharingConfig)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#gpu_sharing_strategy ContainerCluster#gpu_sharing_strategy}
  */
  readonly gpuSharingStrategy: string;
  /**
  * The maximum number of containers that can share a GPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#max_shared_clients_per_gpu ContainerCluster#max_shared_clients_per_gpu}
  */
  readonly maxSharedClientsPerGpu: number;
}

export function containerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference | ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gpu_sharing_strategy: cdktf.stringToTerraform(struct!.gpuSharingStrategy),
    max_shared_clients_per_gpu: cdktf.numberToTerraform(struct!.maxSharedClientsPerGpu),
  }
}


export function containerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference | ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gpu_sharing_strategy: {
      value: cdktf.stringToHclTerraform(struct!.gpuSharingStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_shared_clients_per_gpu: {
      value: cdktf.numberToHclTerraform(struct!.maxSharedClientsPerGpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpuSharingStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuSharingStrategy = this._gpuSharingStrategy;
    }
    if (this._maxSharedClientsPerGpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSharedClientsPerGpu = this._maxSharedClientsPerGpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gpuSharingStrategy = undefined;
      this._maxSharedClientsPerGpu = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gpuSharingStrategy = value.gpuSharingStrategy;
      this._maxSharedClientsPerGpu = value.maxSharedClientsPerGpu;
    }
  }

  // gpu_sharing_strategy - computed: false, optional: false, required: true
  private _gpuSharingStrategy?: string; 
  public get gpuSharingStrategy() {
    return this.getStringAttribute('gpu_sharing_strategy');
  }
  public set gpuSharingStrategy(value: string) {
    this._gpuSharingStrategy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuSharingStrategyInput() {
    return this._gpuSharingStrategy;
  }

  // max_shared_clients_per_gpu - computed: false, optional: false, required: true
  private _maxSharedClientsPerGpu?: number; 
  public get maxSharedClientsPerGpu() {
    return this.getNumberAttribute('max_shared_clients_per_gpu');
  }
  public set maxSharedClientsPerGpu(value: number) {
    this._maxSharedClientsPerGpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSharedClientsPerGpuInput() {
    return this._maxSharedClientsPerGpu;
  }
}
export interface ContainerClusterNodePoolNodeConfigGuestAccelerator {
  /**
  * The number of the accelerator cards exposed to an instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#count ContainerCluster#count}
  */
  readonly count: number;
  /**
  * Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#gpu_partition_size ContainerCluster#gpu_partition_size}
  */
  readonly gpuPartitionSize?: string;
  /**
  * The accelerator type resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#type ContainerCluster#type}
  */
  readonly type: string;
  /**
  * gpu_driver_installation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#gpu_driver_installation_config ContainerCluster#gpu_driver_installation_config}
  */
  readonly gpuDriverInstallationConfig?: ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig;
  /**
  * gpu_sharing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#gpu_sharing_config ContainerCluster#gpu_sharing_config}
  */
  readonly gpuSharingConfig?: ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig;
}

export function containerClusterNodePoolNodeConfigGuestAcceleratorToTerraform(struct?: ContainerClusterNodePoolNodeConfigGuestAccelerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    gpu_partition_size: cdktf.stringToTerraform(struct!.gpuPartitionSize),
    type: cdktf.stringToTerraform(struct!.type),
    gpu_driver_installation_config: containerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigToTerraform(struct!.gpuDriverInstallationConfig),
    gpu_sharing_config: containerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigToTerraform(struct!.gpuSharingConfig),
  }
}


export function containerClusterNodePoolNodeConfigGuestAcceleratorToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigGuestAccelerator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gpu_partition_size: {
      value: cdktf.stringToHclTerraform(struct!.gpuPartitionSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpu_driver_installation_config: {
      value: containerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigToHclTerraform(struct!.gpuDriverInstallationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigList",
    },
    gpu_sharing_config: {
      value: containerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigToHclTerraform(struct!.gpuSharingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigGuestAcceleratorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNodeConfigGuestAccelerator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._gpuPartitionSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuPartitionSize = this._gpuPartitionSize;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._gpuDriverInstallationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuDriverInstallationConfig = this._gpuDriverInstallationConfig?.internalValue;
    }
    if (this._gpuSharingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuSharingConfig = this._gpuSharingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigGuestAccelerator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._gpuPartitionSize = undefined;
      this._type = undefined;
      this._gpuDriverInstallationConfig.internalValue = undefined;
      this._gpuSharingConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._gpuPartitionSize = value.gpuPartitionSize;
      this._type = value.type;
      this._gpuDriverInstallationConfig.internalValue = value.gpuDriverInstallationConfig;
      this._gpuSharingConfig.internalValue = value.gpuSharingConfig;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // gpu_partition_size - computed: false, optional: true, required: false
  private _gpuPartitionSize?: string; 
  public get gpuPartitionSize() {
    return this.getStringAttribute('gpu_partition_size');
  }
  public set gpuPartitionSize(value: string) {
    this._gpuPartitionSize = value;
  }
  public resetGpuPartitionSize() {
    this._gpuPartitionSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuPartitionSizeInput() {
    return this._gpuPartitionSize;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // gpu_driver_installation_config - computed: false, optional: true, required: false
  private _gpuDriverInstallationConfig = new ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfigOutputReference(this, "gpu_driver_installation_config");
  public get gpuDriverInstallationConfig() {
    return this._gpuDriverInstallationConfig;
  }
  public putGpuDriverInstallationConfig(value: ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuDriverInstallationConfig) {
    this._gpuDriverInstallationConfig.internalValue = value;
  }
  public resetGpuDriverInstallationConfig() {
    this._gpuDriverInstallationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuDriverInstallationConfigInput() {
    return this._gpuDriverInstallationConfig.internalValue;
  }

  // gpu_sharing_config - computed: false, optional: true, required: false
  private _gpuSharingConfig = new ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfigOutputReference(this, "gpu_sharing_config");
  public get gpuSharingConfig() {
    return this._gpuSharingConfig;
  }
  public putGpuSharingConfig(value: ContainerClusterNodePoolNodeConfigGuestAcceleratorGpuSharingConfig) {
    this._gpuSharingConfig.internalValue = value;
  }
  public resetGpuSharingConfig() {
    this._gpuSharingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuSharingConfigInput() {
    return this._gpuSharingConfig.internalValue;
  }
}

export class ContainerClusterNodePoolNodeConfigGuestAcceleratorList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterNodePoolNodeConfigGuestAccelerator[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNodeConfigGuestAcceleratorOutputReference {
    return new ContainerClusterNodePoolNodeConfigGuestAcceleratorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNodeConfigGvnic {
  /**
  * Whether or not gvnic is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterNodePoolNodeConfigGvnicToTerraform(struct?: ContainerClusterNodePoolNodeConfigGvnicOutputReference | ContainerClusterNodePoolNodeConfigGvnic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterNodePoolNodeConfigGvnicToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigGvnicOutputReference | ContainerClusterNodePoolNodeConfigGvnic): any {
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

export class ContainerClusterNodePoolNodeConfigGvnicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigGvnic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigGvnic | undefined) {
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
export interface ContainerClusterNodePoolNodeConfigHostMaintenancePolicy {
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#maintenance_interval ContainerCluster#maintenance_interval}
  */
  readonly maintenanceInterval: string;
}

export function containerClusterNodePoolNodeConfigHostMaintenancePolicyToTerraform(struct?: ContainerClusterNodePoolNodeConfigHostMaintenancePolicyOutputReference | ContainerClusterNodePoolNodeConfigHostMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_interval: cdktf.stringToTerraform(struct!.maintenanceInterval),
  }
}


export function containerClusterNodePoolNodeConfigHostMaintenancePolicyToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigHostMaintenancePolicyOutputReference | ContainerClusterNodePoolNodeConfigHostMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_interval: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigHostMaintenancePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigHostMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceInterval = this._maintenanceInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigHostMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceInterval = value.maintenanceInterval;
    }
  }

  // maintenance_interval - computed: false, optional: false, required: true
  private _maintenanceInterval?: string; 
  public get maintenanceInterval() {
    return this.getStringAttribute('maintenance_interval');
  }
  public set maintenanceInterval(value: string) {
    this._maintenanceInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceIntervalInput() {
    return this._maintenanceInterval;
  }
}
export interface ContainerClusterNodePoolNodeConfigKubeletConfig {
  /**
  * Defines a comma-separated allowlist of unsafe sysctls or sysctl patterns which can be set on the Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#allowed_unsafe_sysctls ContainerCluster#allowed_unsafe_sysctls}
  */
  readonly allowedUnsafeSysctls?: string[];
  /**
  * Defines the maximum number of container log files that can be present for a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#container_log_max_files ContainerCluster#container_log_max_files}
  */
  readonly containerLogMaxFiles?: number;
  /**
  * Defines the maximum size of the container log file before it is rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#container_log_max_size ContainerCluster#container_log_max_size}
  */
  readonly containerLogMaxSize?: string;
  /**
  * Enable CPU CFS quota enforcement for containers that specify CPU limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#cpu_cfs_quota ContainerCluster#cpu_cfs_quota}
  */
  readonly cpuCfsQuota?: boolean | cdktf.IResolvable;
  /**
  * Set the CPU CFS quota period value 'cpu.cfs_period_us'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#cpu_cfs_quota_period ContainerCluster#cpu_cfs_quota_period}
  */
  readonly cpuCfsQuotaPeriod?: string;
  /**
  * Control the CPU management policy on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#cpu_manager_policy ContainerCluster#cpu_manager_policy}
  */
  readonly cpuManagerPolicy?: string;
  /**
  * Defines the percent of disk usage after which image garbage collection is always run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#image_gc_high_threshold_percent ContainerCluster#image_gc_high_threshold_percent}
  */
  readonly imageGcHighThresholdPercent?: number;
  /**
  * Defines the percent of disk usage before which image garbage collection is never run. Lowest disk usage to garbage collect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#image_gc_low_threshold_percent ContainerCluster#image_gc_low_threshold_percent}
  */
  readonly imageGcLowThresholdPercent?: number;
  /**
  * Defines the maximum age an image can be unused before it is garbage collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#image_maximum_gc_age ContainerCluster#image_maximum_gc_age}
  */
  readonly imageMaximumGcAge?: string;
  /**
  * Defines the minimum age for an unused image before it is garbage collected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#image_minimum_gc_age ContainerCluster#image_minimum_gc_age}
  */
  readonly imageMinimumGcAge?: string;
  /**
  * Controls whether the kubelet read-only port is enabled. It is strongly recommended to set this to `FALSE`. Possible values: `TRUE`, `FALSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#insecure_kubelet_readonly_port_enabled ContainerCluster#insecure_kubelet_readonly_port_enabled}
  */
  readonly insecureKubeletReadonlyPortEnabled?: string;
  /**
  * Controls the maximum number of processes allowed to run in a pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#pod_pids_limit ContainerCluster#pod_pids_limit}
  */
  readonly podPidsLimit?: number;
}

export function containerClusterNodePoolNodeConfigKubeletConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigKubeletConfigOutputReference | ContainerClusterNodePoolNodeConfigKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_unsafe_sysctls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedUnsafeSysctls),
    container_log_max_files: cdktf.numberToTerraform(struct!.containerLogMaxFiles),
    container_log_max_size: cdktf.stringToTerraform(struct!.containerLogMaxSize),
    cpu_cfs_quota: cdktf.booleanToTerraform(struct!.cpuCfsQuota),
    cpu_cfs_quota_period: cdktf.stringToTerraform(struct!.cpuCfsQuotaPeriod),
    cpu_manager_policy: cdktf.stringToTerraform(struct!.cpuManagerPolicy),
    image_gc_high_threshold_percent: cdktf.numberToTerraform(struct!.imageGcHighThresholdPercent),
    image_gc_low_threshold_percent: cdktf.numberToTerraform(struct!.imageGcLowThresholdPercent),
    image_maximum_gc_age: cdktf.stringToTerraform(struct!.imageMaximumGcAge),
    image_minimum_gc_age: cdktf.stringToTerraform(struct!.imageMinimumGcAge),
    insecure_kubelet_readonly_port_enabled: cdktf.stringToTerraform(struct!.insecureKubeletReadonlyPortEnabled),
    pod_pids_limit: cdktf.numberToTerraform(struct!.podPidsLimit),
  }
}


export function containerClusterNodePoolNodeConfigKubeletConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigKubeletConfigOutputReference | ContainerClusterNodePoolNodeConfigKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_unsafe_sysctls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedUnsafeSysctls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    container_log_max_files: {
      value: cdktf.numberToHclTerraform(struct!.containerLogMaxFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    container_log_max_size: {
      value: cdktf.stringToHclTerraform(struct!.containerLogMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_cfs_quota: {
      value: cdktf.booleanToHclTerraform(struct!.cpuCfsQuota),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cpu_cfs_quota_period: {
      value: cdktf.stringToHclTerraform(struct!.cpuCfsQuotaPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_manager_policy: {
      value: cdktf.stringToHclTerraform(struct!.cpuManagerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_gc_high_threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.imageGcHighThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_gc_low_threshold_percent: {
      value: cdktf.numberToHclTerraform(struct!.imageGcLowThresholdPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_maximum_gc_age: {
      value: cdktf.stringToHclTerraform(struct!.imageMaximumGcAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_minimum_gc_age: {
      value: cdktf.stringToHclTerraform(struct!.imageMinimumGcAge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_kubelet_readonly_port_enabled: {
      value: cdktf.stringToHclTerraform(struct!.insecureKubeletReadonlyPortEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_pids_limit: {
      value: cdktf.numberToHclTerraform(struct!.podPidsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigKubeletConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigKubeletConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedUnsafeSysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedUnsafeSysctls = this._allowedUnsafeSysctls;
    }
    if (this._containerLogMaxFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxFiles = this._containerLogMaxFiles;
    }
    if (this._containerLogMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerLogMaxSize = this._containerLogMaxSize;
    }
    if (this._cpuCfsQuota !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuota = this._cpuCfsQuota;
    }
    if (this._cpuCfsQuotaPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCfsQuotaPeriod = this._cpuCfsQuotaPeriod;
    }
    if (this._cpuManagerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuManagerPolicy = this._cpuManagerPolicy;
    }
    if (this._imageGcHighThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcHighThresholdPercent = this._imageGcHighThresholdPercent;
    }
    if (this._imageGcLowThresholdPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGcLowThresholdPercent = this._imageGcLowThresholdPercent;
    }
    if (this._imageMaximumGcAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageMaximumGcAge = this._imageMaximumGcAge;
    }
    if (this._imageMinimumGcAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageMinimumGcAge = this._imageMinimumGcAge;
    }
    if (this._insecureKubeletReadonlyPortEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureKubeletReadonlyPortEnabled = this._insecureKubeletReadonlyPortEnabled;
    }
    if (this._podPidsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.podPidsLimit = this._podPidsLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigKubeletConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedUnsafeSysctls = undefined;
      this._containerLogMaxFiles = undefined;
      this._containerLogMaxSize = undefined;
      this._cpuCfsQuota = undefined;
      this._cpuCfsQuotaPeriod = undefined;
      this._cpuManagerPolicy = undefined;
      this._imageGcHighThresholdPercent = undefined;
      this._imageGcLowThresholdPercent = undefined;
      this._imageMaximumGcAge = undefined;
      this._imageMinimumGcAge = undefined;
      this._insecureKubeletReadonlyPortEnabled = undefined;
      this._podPidsLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedUnsafeSysctls = value.allowedUnsafeSysctls;
      this._containerLogMaxFiles = value.containerLogMaxFiles;
      this._containerLogMaxSize = value.containerLogMaxSize;
      this._cpuCfsQuota = value.cpuCfsQuota;
      this._cpuCfsQuotaPeriod = value.cpuCfsQuotaPeriod;
      this._cpuManagerPolicy = value.cpuManagerPolicy;
      this._imageGcHighThresholdPercent = value.imageGcHighThresholdPercent;
      this._imageGcLowThresholdPercent = value.imageGcLowThresholdPercent;
      this._imageMaximumGcAge = value.imageMaximumGcAge;
      this._imageMinimumGcAge = value.imageMinimumGcAge;
      this._insecureKubeletReadonlyPortEnabled = value.insecureKubeletReadonlyPortEnabled;
      this._podPidsLimit = value.podPidsLimit;
    }
  }

  // allowed_unsafe_sysctls - computed: false, optional: true, required: false
  private _allowedUnsafeSysctls?: string[]; 
  public get allowedUnsafeSysctls() {
    return this.getListAttribute('allowed_unsafe_sysctls');
  }
  public set allowedUnsafeSysctls(value: string[]) {
    this._allowedUnsafeSysctls = value;
  }
  public resetAllowedUnsafeSysctls() {
    this._allowedUnsafeSysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUnsafeSysctlsInput() {
    return this._allowedUnsafeSysctls;
  }

  // container_log_max_files - computed: false, optional: true, required: false
  private _containerLogMaxFiles?: number; 
  public get containerLogMaxFiles() {
    return this.getNumberAttribute('container_log_max_files');
  }
  public set containerLogMaxFiles(value: number) {
    this._containerLogMaxFiles = value;
  }
  public resetContainerLogMaxFiles() {
    this._containerLogMaxFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxFilesInput() {
    return this._containerLogMaxFiles;
  }

  // container_log_max_size - computed: false, optional: true, required: false
  private _containerLogMaxSize?: string; 
  public get containerLogMaxSize() {
    return this.getStringAttribute('container_log_max_size');
  }
  public set containerLogMaxSize(value: string) {
    this._containerLogMaxSize = value;
  }
  public resetContainerLogMaxSize() {
    this._containerLogMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerLogMaxSizeInput() {
    return this._containerLogMaxSize;
  }

  // cpu_cfs_quota - computed: false, optional: true, required: false
  private _cpuCfsQuota?: boolean | cdktf.IResolvable; 
  public get cpuCfsQuota() {
    return this.getBooleanAttribute('cpu_cfs_quota');
  }
  public set cpuCfsQuota(value: boolean | cdktf.IResolvable) {
    this._cpuCfsQuota = value;
  }
  public resetCpuCfsQuota() {
    this._cpuCfsQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaInput() {
    return this._cpuCfsQuota;
  }

  // cpu_cfs_quota_period - computed: false, optional: true, required: false
  private _cpuCfsQuotaPeriod?: string; 
  public get cpuCfsQuotaPeriod() {
    return this.getStringAttribute('cpu_cfs_quota_period');
  }
  public set cpuCfsQuotaPeriod(value: string) {
    this._cpuCfsQuotaPeriod = value;
  }
  public resetCpuCfsQuotaPeriod() {
    this._cpuCfsQuotaPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCfsQuotaPeriodInput() {
    return this._cpuCfsQuotaPeriod;
  }

  // cpu_manager_policy - computed: false, optional: true, required: false
  private _cpuManagerPolicy?: string; 
  public get cpuManagerPolicy() {
    return this.getStringAttribute('cpu_manager_policy');
  }
  public set cpuManagerPolicy(value: string) {
    this._cpuManagerPolicy = value;
  }
  public resetCpuManagerPolicy() {
    this._cpuManagerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuManagerPolicyInput() {
    return this._cpuManagerPolicy;
  }

  // image_gc_high_threshold_percent - computed: false, optional: true, required: false
  private _imageGcHighThresholdPercent?: number; 
  public get imageGcHighThresholdPercent() {
    return this.getNumberAttribute('image_gc_high_threshold_percent');
  }
  public set imageGcHighThresholdPercent(value: number) {
    this._imageGcHighThresholdPercent = value;
  }
  public resetImageGcHighThresholdPercent() {
    this._imageGcHighThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcHighThresholdPercentInput() {
    return this._imageGcHighThresholdPercent;
  }

  // image_gc_low_threshold_percent - computed: false, optional: true, required: false
  private _imageGcLowThresholdPercent?: number; 
  public get imageGcLowThresholdPercent() {
    return this.getNumberAttribute('image_gc_low_threshold_percent');
  }
  public set imageGcLowThresholdPercent(value: number) {
    this._imageGcLowThresholdPercent = value;
  }
  public resetImageGcLowThresholdPercent() {
    this._imageGcLowThresholdPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGcLowThresholdPercentInput() {
    return this._imageGcLowThresholdPercent;
  }

  // image_maximum_gc_age - computed: false, optional: true, required: false
  private _imageMaximumGcAge?: string; 
  public get imageMaximumGcAge() {
    return this.getStringAttribute('image_maximum_gc_age');
  }
  public set imageMaximumGcAge(value: string) {
    this._imageMaximumGcAge = value;
  }
  public resetImageMaximumGcAge() {
    this._imageMaximumGcAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageMaximumGcAgeInput() {
    return this._imageMaximumGcAge;
  }

  // image_minimum_gc_age - computed: false, optional: true, required: false
  private _imageMinimumGcAge?: string; 
  public get imageMinimumGcAge() {
    return this.getStringAttribute('image_minimum_gc_age');
  }
  public set imageMinimumGcAge(value: string) {
    this._imageMinimumGcAge = value;
  }
  public resetImageMinimumGcAge() {
    this._imageMinimumGcAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageMinimumGcAgeInput() {
    return this._imageMinimumGcAge;
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

  // pod_pids_limit - computed: false, optional: true, required: false
  private _podPidsLimit?: number; 
  public get podPidsLimit() {
    return this.getNumberAttribute('pod_pids_limit');
  }
  public set podPidsLimit(value: number) {
    this._podPidsLimit = value;
  }
  public resetPodPidsLimit() {
    this._podPidsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podPidsLimitInput() {
    return this._podPidsLimit;
  }
}
export interface ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfig {
  /**
  * Amount of 1G hugepages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#hugepage_size_1g ContainerCluster#hugepage_size_1g}
  */
  readonly hugepageSize1G?: number;
  /**
  * Amount of 2M hugepages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#hugepage_size_2m ContainerCluster#hugepage_size_2m}
  */
  readonly hugepageSize2M?: number;
}

export function containerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hugepage_size_1g: cdktf.numberToTerraform(struct!.hugepageSize1G),
    hugepage_size_2m: cdktf.numberToTerraform(struct!.hugepageSize2M),
  }
}


export function containerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hugepage_size_1g: {
      value: cdktf.numberToHclTerraform(struct!.hugepageSize1G),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hugepage_size_2m: {
      value: cdktf.numberToHclTerraform(struct!.hugepageSize2M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hugepageSize1G !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugepageSize1G = this._hugepageSize1G;
    }
    if (this._hugepageSize2M !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugepageSize2M = this._hugepageSize2M;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hugepageSize1G = undefined;
      this._hugepageSize2M = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hugepageSize1G = value.hugepageSize1G;
      this._hugepageSize2M = value.hugepageSize2M;
    }
  }

  // hugepage_size_1g - computed: false, optional: true, required: false
  private _hugepageSize1G?: number; 
  public get hugepageSize1G() {
    return this.getNumberAttribute('hugepage_size_1g');
  }
  public set hugepageSize1G(value: number) {
    this._hugepageSize1G = value;
  }
  public resetHugepageSize1G() {
    this._hugepageSize1G = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugepageSize1GInput() {
    return this._hugepageSize1G;
  }

  // hugepage_size_2m - computed: false, optional: true, required: false
  private _hugepageSize2M?: number; 
  public get hugepageSize2M() {
    return this.getNumberAttribute('hugepage_size_2m');
  }
  public set hugepageSize2M(value: number) {
    this._hugepageSize2M = value;
  }
  public resetHugepageSize2M() {
    this._hugepageSize2M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugepageSize2MInput() {
    return this._hugepageSize2M;
  }
}
export interface ContainerClusterNodePoolNodeConfigLinuxNodeConfig {
  /**
  * cgroupMode specifies the cgroup mode to be used on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#cgroup_mode ContainerCluster#cgroup_mode}
  */
  readonly cgroupMode?: string;
  /**
  * The Linux kernel parameters to be applied to the nodes and all pods running on the nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#sysctls ContainerCluster#sysctls}
  */
  readonly sysctls?: { [key: string]: string };
  /**
  * hugepages_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#hugepages_config ContainerCluster#hugepages_config}
  */
  readonly hugepagesConfig?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfig;
}

export function containerClusterNodePoolNodeConfigLinuxNodeConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cgroup_mode: cdktf.stringToTerraform(struct!.cgroupMode),
    sysctls: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.sysctls),
    hugepages_config: containerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigToTerraform(struct!.hugepagesConfig),
  }
}


export function containerClusterNodePoolNodeConfigLinuxNodeConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigLinuxNodeConfigOutputReference | ContainerClusterNodePoolNodeConfigLinuxNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cgroup_mode: {
      value: cdktf.stringToHclTerraform(struct!.cgroupMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sysctls: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.sysctls),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hugepages_config: {
      value: containerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigToHclTerraform(struct!.hugepagesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigLinuxNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigLinuxNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cgroupMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cgroupMode = this._cgroupMode;
    }
    if (this._sysctls !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysctls = this._sysctls;
    }
    if (this._hugepagesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugepagesConfig = this._hugepagesConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cgroupMode = undefined;
      this._sysctls = undefined;
      this._hugepagesConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cgroupMode = value.cgroupMode;
      this._sysctls = value.sysctls;
      this._hugepagesConfig.internalValue = value.hugepagesConfig;
    }
  }

  // cgroup_mode - computed: true, optional: true, required: false
  private _cgroupMode?: string; 
  public get cgroupMode() {
    return this.getStringAttribute('cgroup_mode');
  }
  public set cgroupMode(value: string) {
    this._cgroupMode = value;
  }
  public resetCgroupMode() {
    this._cgroupMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cgroupModeInput() {
    return this._cgroupMode;
  }

  // sysctls - computed: false, optional: true, required: false
  private _sysctls?: { [key: string]: string }; 
  public get sysctls() {
    return this.getStringMapAttribute('sysctls');
  }
  public set sysctls(value: { [key: string]: string }) {
    this._sysctls = value;
  }
  public resetSysctls() {
    this._sysctls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysctlsInput() {
    return this._sysctls;
  }

  // hugepages_config - computed: false, optional: true, required: false
  private _hugepagesConfig = new ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfigOutputReference(this, "hugepages_config");
  public get hugepagesConfig() {
    return this._hugepagesConfig;
  }
  public putHugepagesConfig(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfigHugepagesConfig) {
    this._hugepagesConfig.internalValue = value;
  }
  public resetHugepagesConfig() {
    this._hugepagesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugepagesConfigInput() {
    return this._hugepagesConfig.internalValue;
  }
}
export interface ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig {
  /**
  * Number of raw-block local NVMe SSD disks to be attached to the node. Each local SSD is 375 GB in size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#local_ssd_count ContainerCluster#local_ssd_count}
  */
  readonly localSsdCount: number;
}

export function containerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference | ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
  }
}


export function containerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference | ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_ssd_count: {
      value: cdktf.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localSsdCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localSsdCount = value.localSsdCount;
    }
  }

  // local_ssd_count - computed: false, optional: false, required: true
  private _localSsdCount?: number; 
  public get localSsdCount() {
    return this.getNumberAttribute('local_ssd_count');
  }
  public set localSsdCount(value: number) {
    this._localSsdCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdCountInput() {
    return this._localSsdCount;
  }
}
export interface ContainerClusterNodePoolNodeConfigReservationAffinity {
  /**
  * Corresponds to the type of reservation consumption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#consume_reservation_type ContainerCluster#consume_reservation_type}
  */
  readonly consumeReservationType: string;
  /**
  * The label key of a reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#key ContainerCluster#key}
  */
  readonly key?: string;
  /**
  * The label values of the reservation resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#values ContainerCluster#values}
  */
  readonly values?: string[];
}

export function containerClusterNodePoolNodeConfigReservationAffinityToTerraform(struct?: ContainerClusterNodePoolNodeConfigReservationAffinityOutputReference | ContainerClusterNodePoolNodeConfigReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consume_reservation_type: cdktf.stringToTerraform(struct!.consumeReservationType),
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function containerClusterNodePoolNodeConfigReservationAffinityToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigReservationAffinityOutputReference | ContainerClusterNodePoolNodeConfigReservationAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consume_reservation_type: {
      value: cdktf.stringToHclTerraform(struct!.consumeReservationType),
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigReservationAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigReservationAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumeReservationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumeReservationType = this._consumeReservationType;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigReservationAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumeReservationType = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumeReservationType = value.consumeReservationType;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // consume_reservation_type - computed: false, optional: false, required: true
  private _consumeReservationType?: string; 
  public get consumeReservationType() {
    return this.getStringAttribute('consume_reservation_type');
  }
  public set consumeReservationType(value: string) {
    this._consumeReservationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumeReservationTypeInput() {
    return this._consumeReservationType;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}
export interface ContainerClusterNodePoolNodeConfigSecondaryBootDisks {
  /**
  * Disk image to create the secondary boot disk from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#disk_image ContainerCluster#disk_image}
  */
  readonly diskImage: string;
  /**
  * Mode for how the secondary boot disk is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#mode ContainerCluster#mode}
  */
  readonly mode?: string;
}

export function containerClusterNodePoolNodeConfigSecondaryBootDisksToTerraform(struct?: ContainerClusterNodePoolNodeConfigSecondaryBootDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_image: cdktf.stringToTerraform(struct!.diskImage),
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function containerClusterNodePoolNodeConfigSecondaryBootDisksToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigSecondaryBootDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_image: {
      value: cdktf.stringToHclTerraform(struct!.diskImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigSecondaryBootDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNodeConfigSecondaryBootDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskImage = this._diskImage;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigSecondaryBootDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._diskImage = undefined;
      this._mode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._diskImage = value.diskImage;
      this._mode = value.mode;
    }
  }

  // disk_image - computed: false, optional: false, required: true
  private _diskImage?: string; 
  public get diskImage() {
    return this.getStringAttribute('disk_image');
  }
  public set diskImage(value: string) {
    this._diskImage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskImageInput() {
    return this._diskImage;
  }

  // mode - computed: false, optional: true, required: false
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
}

export class ContainerClusterNodePoolNodeConfigSecondaryBootDisksList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterNodePoolNodeConfigSecondaryBootDisks[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNodeConfigSecondaryBootDisksOutputReference {
    return new ContainerClusterNodePoolNodeConfigSecondaryBootDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNodeConfigShieldedInstanceConfig {
  /**
  * Defines whether the instance has integrity monitoring enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enable_integrity_monitoring ContainerCluster#enable_integrity_monitoring}
  */
  readonly enableIntegrityMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Defines whether the instance has Secure Boot enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enable_secure_boot ContainerCluster#enable_secure_boot}
  */
  readonly enableSecureBoot?: boolean | cdktf.IResolvable;
}

export function containerClusterNodePoolNodeConfigShieldedInstanceConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference | ContainerClusterNodePoolNodeConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_integrity_monitoring: cdktf.booleanToTerraform(struct!.enableIntegrityMonitoring),
    enable_secure_boot: cdktf.booleanToTerraform(struct!.enableSecureBoot),
  }
}


export function containerClusterNodePoolNodeConfigShieldedInstanceConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference | ContainerClusterNodePoolNodeConfigShieldedInstanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_integrity_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.enableIntegrityMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_secure_boot: {
      value: cdktf.booleanToHclTerraform(struct!.enableSecureBoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigShieldedInstanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIntegrityMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIntegrityMonitoring = this._enableIntegrityMonitoring;
    }
    if (this._enableSecureBoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSecureBoot = this._enableSecureBoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigShieldedInstanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIntegrityMonitoring = undefined;
      this._enableSecureBoot = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIntegrityMonitoring = value.enableIntegrityMonitoring;
      this._enableSecureBoot = value.enableSecureBoot;
    }
  }

  // enable_integrity_monitoring - computed: false, optional: true, required: false
  private _enableIntegrityMonitoring?: boolean | cdktf.IResolvable; 
  public get enableIntegrityMonitoring() {
    return this.getBooleanAttribute('enable_integrity_monitoring');
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
    return this.getBooleanAttribute('enable_secure_boot');
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
export interface ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity {
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#key ContainerCluster#key}
  */
  readonly key: string;
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#operator ContainerCluster#operator}
  */
  readonly operator: string;
  /**
  * .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#values ContainerCluster#values}
  */
  readonly values: string[];
}

export function containerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityToTerraform(struct?: ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function containerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference {
    return new ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNodeConfigSoleTenantConfig {
  /**
  * node_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#node_affinity ContainerCluster#node_affinity}
  */
  readonly nodeAffinity: ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity[] | cdktf.IResolvable;
}

export function containerClusterNodePoolNodeConfigSoleTenantConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigSoleTenantConfigOutputReference | ContainerClusterNodePoolNodeConfigSoleTenantConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: cdktf.listMapper(containerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityToTerraform, true)(struct!.nodeAffinity),
  }
}


export function containerClusterNodePoolNodeConfigSoleTenantConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigSoleTenantConfigOutputReference | ContainerClusterNodePoolNodeConfigSoleTenantConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: cdktf.listMapperHcl(containerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityToHclTerraform, true)(struct!.nodeAffinity),
      isBlock: true,
      type: "set",
      storageClassType: "ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigSoleTenantConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigSoleTenantConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigSoleTenantConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeAffinity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeAffinity.internalValue = value.nodeAffinity;
    }
  }

  // node_affinity - computed: false, optional: false, required: true
  private _nodeAffinity = new ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinityList(this, "node_affinity", true);
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: ContainerClusterNodePoolNodeConfigSoleTenantConfigNodeAffinity[] | cdktf.IResolvable) {
    this._nodeAffinity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }
}
export interface ContainerClusterNodePoolNodeConfigTaint {
  /**
  * Effect for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#effect ContainerCluster#effect}
  */
  readonly effect: string;
  /**
  * Key for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#key ContainerCluster#key}
  */
  readonly key: string;
  /**
  * Value for taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#value ContainerCluster#value}
  */
  readonly value: string;
}

export function containerClusterNodePoolNodeConfigTaintToTerraform(struct?: ContainerClusterNodePoolNodeConfigTaint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function containerClusterNodePoolNodeConfigTaintToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigTaint | cdktf.IResolvable): any {
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

export class ContainerClusterNodePoolNodeConfigTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerClusterNodePoolNodeConfigTaint | cdktf.IResolvable | undefined {
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
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigTaint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
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
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ContainerClusterNodePoolNodeConfigTaintList extends cdktf.ComplexList {
  public internalValue? : ContainerClusterNodePoolNodeConfigTaint[] | cdktf.IResolvable

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
  public get(index: number): ContainerClusterNodePoolNodeConfigTaintOutputReference {
    return new ContainerClusterNodePoolNodeConfigTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerClusterNodePoolNodeConfigWindowsNodeConfig {
  /**
  * The OS Version of the windows nodepool.Values are OS_VERSION_UNSPECIFIED,OS_VERSION_LTSC2019 and OS_VERSION_LTSC2022
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#osversion ContainerCluster#osversion}
  */
  readonly osversion?: string;
}

export function containerClusterNodePoolNodeConfigWindowsNodeConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigWindowsNodeConfigOutputReference | ContainerClusterNodePoolNodeConfigWindowsNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    osversion: cdktf.stringToTerraform(struct!.osversion),
  }
}


export function containerClusterNodePoolNodeConfigWindowsNodeConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigWindowsNodeConfigOutputReference | ContainerClusterNodePoolNodeConfigWindowsNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    osversion: {
      value: cdktf.stringToHclTerraform(struct!.osversion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigWindowsNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigWindowsNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._osversion !== undefined) {
      hasAnyValues = true;
      internalValueResult.osversion = this._osversion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigWindowsNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._osversion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._osversion = value.osversion;
    }
  }

  // osversion - computed: false, optional: true, required: false
  private _osversion?: string; 
  public get osversion() {
    return this.getStringAttribute('osversion');
  }
  public set osversion(value: string) {
    this._osversion = value;
  }
  public resetOsversion() {
    this._osversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osversionInput() {
    return this._osversion;
  }
}
export interface ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig {
  /**
  * Mode is the configuration for how to expose metadata to workloads running on the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#mode ContainerCluster#mode}
  */
  readonly mode: string;
}

export function containerClusterNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference | ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function containerClusterNodePoolNodeConfigWorkloadMetadataConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference | ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface ContainerClusterNodePoolNodeConfig {
  /**
  * The Customer Managed Encryption Key used to encrypt the boot disk attached to each node in the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#boot_disk_kms_key ContainerCluster#boot_disk_kms_key}
  */
  readonly bootDiskKmsKey?: string;
  /**
  * Size of the disk attached to each node, specified in GB. The smallest allowed disk size is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#disk_size_gb ContainerCluster#disk_size_gb}
  */
  readonly diskSizeGb?: number;
  /**
  * Type of the disk attached to each node. Such as pd-standard, pd-balanced or pd-ssd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#disk_type ContainerCluster#disk_type}
  */
  readonly diskType?: string;
  /**
  * If enabled boot disks are configured with confidential mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enable_confidential_storage ContainerCluster#enable_confidential_storage}
  */
  readonly enableConfidentialStorage?: boolean | cdktf.IResolvable;
  /**
  * Enables Flex Start provisioning model for the node pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#flex_start ContainerCluster#flex_start}
  */
  readonly flexStart?: boolean | cdktf.IResolvable;
  /**
  * The image type to use for this node. Note that for a given image type, the latest version of it will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#image_type ContainerCluster#image_type}
  */
  readonly imageType?: string;
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to each node. These will added in addition to any default label(s) that Kubernetes may apply to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#labels ContainerCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The number of local SSD disks to be attached to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#local_ssd_count ContainerCluster#local_ssd_count}
  */
  readonly localSsdCount?: number;
  /**
  * LocalSsdEncryptionMode specified the method used for encrypting the local SSDs attached to the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#local_ssd_encryption_mode ContainerCluster#local_ssd_encryption_mode}
  */
  readonly localSsdEncryptionMode?: string;
  /**
  * Type of logging agent that is used as the default value for node pools in the cluster. Valid values include DEFAULT and MAX_THROUGHPUT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#logging_variant ContainerCluster#logging_variant}
  */
  readonly loggingVariant?: string;
  /**
  * The name of a Google Compute Engine machine type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#machine_type ContainerCluster#machine_type}
  */
  readonly machineType?: string;
  /**
  * The runtime of each node in the node pool in seconds, terminated by 's'. Example: "3600s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#max_run_duration ContainerCluster#max_run_duration}
  */
  readonly maxRunDuration?: string;
  /**
  * The metadata key/value pairs assigned to instances in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#metadata ContainerCluster#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Minimum CPU platform to be used by this instance. The instance may be scheduled on the specified or newer CPU platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#min_cpu_platform ContainerCluster#min_cpu_platform}
  */
  readonly minCpuPlatform?: string;
  /**
  * Setting this field will assign instances of this pool to run on the specified node group. This is useful for running workloads on sole tenant nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#node_group ContainerCluster#node_group}
  */
  readonly nodeGroup?: string;
  /**
  * The set of Google API scopes to be made available on all of the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#oauth_scopes ContainerCluster#oauth_scopes}
  */
  readonly oauthScopes?: string[];
  /**
  * Whether the nodes are created as preemptible VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#preemptible ContainerCluster#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * The GCE resource labels (a map of key/value pairs) to be applied to the node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#resource_labels ContainerCluster#resource_labels}
  */
  readonly resourceLabels?: { [key: string]: string };
  /**
  * A map of resource manager tags. Resource manager tag keys and values have the same definition as resource manager tags. Keys must be in the format tagKeys/{tag_key_id}, and values are in the format tagValues/456. The field is ignored (both PUT & PATCH) when empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#resource_manager_tags ContainerCluster#resource_manager_tags}
  */
  readonly resourceManagerTags?: { [key: string]: string };
  /**
  * The Google Cloud Platform Service Account to be used by the node VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#service_account ContainerCluster#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Whether the nodes are created as spot VM instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#spot ContainerCluster#spot}
  */
  readonly spot?: boolean | cdktf.IResolvable;
  /**
  * The list of Storage Pools where boot disks are provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#storage_pools ContainerCluster#storage_pools}
  */
  readonly storagePools?: string[];
  /**
  * The list of instance tags applied to all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#tags ContainerCluster#tags}
  */
  readonly tags?: string[];
  /**
  * advanced_machine_features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#advanced_machine_features ContainerCluster#advanced_machine_features}
  */
  readonly advancedMachineFeatures?: ContainerClusterNodePoolNodeConfigAdvancedMachineFeatures;
  /**
  * confidential_nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#confidential_nodes ContainerCluster#confidential_nodes}
  */
  readonly confidentialNodes?: ContainerClusterNodePoolNodeConfigConfidentialNodes;
  /**
  * containerd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#containerd_config ContainerCluster#containerd_config}
  */
  readonly containerdConfig?: ContainerClusterNodePoolNodeConfigContainerdConfig;
  /**
  * ephemeral_storage_local_ssd_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#ephemeral_storage_local_ssd_config ContainerCluster#ephemeral_storage_local_ssd_config}
  */
  readonly ephemeralStorageLocalSsdConfig?: ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig;
  /**
  * fast_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#fast_socket ContainerCluster#fast_socket}
  */
  readonly fastSocket?: ContainerClusterNodePoolNodeConfigFastSocket;
  /**
  * gcfs_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#gcfs_config ContainerCluster#gcfs_config}
  */
  readonly gcfsConfig?: ContainerClusterNodePoolNodeConfigGcfsConfig;
  /**
  * guest_accelerator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#guest_accelerator ContainerCluster#guest_accelerator}
  */
  readonly guestAccelerator?: ContainerClusterNodePoolNodeConfigGuestAccelerator[] | cdktf.IResolvable;
  /**
  * gvnic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#gvnic ContainerCluster#gvnic}
  */
  readonly gvnic?: ContainerClusterNodePoolNodeConfigGvnic;
  /**
  * host_maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#host_maintenance_policy ContainerCluster#host_maintenance_policy}
  */
  readonly hostMaintenancePolicy?: ContainerClusterNodePoolNodeConfigHostMaintenancePolicy;
  /**
  * kubelet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#kubelet_config ContainerCluster#kubelet_config}
  */
  readonly kubeletConfig?: ContainerClusterNodePoolNodeConfigKubeletConfig;
  /**
  * linux_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#linux_node_config ContainerCluster#linux_node_config}
  */
  readonly linuxNodeConfig?: ContainerClusterNodePoolNodeConfigLinuxNodeConfig;
  /**
  * local_nvme_ssd_block_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#local_nvme_ssd_block_config ContainerCluster#local_nvme_ssd_block_config}
  */
  readonly localNvmeSsdBlockConfig?: ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig;
  /**
  * reservation_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#reservation_affinity ContainerCluster#reservation_affinity}
  */
  readonly reservationAffinity?: ContainerClusterNodePoolNodeConfigReservationAffinity;
  /**
  * secondary_boot_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#secondary_boot_disks ContainerCluster#secondary_boot_disks}
  */
  readonly secondaryBootDisks?: ContainerClusterNodePoolNodeConfigSecondaryBootDisks[] | cdktf.IResolvable;
  /**
  * shielded_instance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#shielded_instance_config ContainerCluster#shielded_instance_config}
  */
  readonly shieldedInstanceConfig?: ContainerClusterNodePoolNodeConfigShieldedInstanceConfig;
  /**
  * sole_tenant_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#sole_tenant_config ContainerCluster#sole_tenant_config}
  */
  readonly soleTenantConfig?: ContainerClusterNodePoolNodeConfigSoleTenantConfig;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#taint ContainerCluster#taint}
  */
  readonly taint?: ContainerClusterNodePoolNodeConfigTaint[] | cdktf.IResolvable;
  /**
  * windows_node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#windows_node_config ContainerCluster#windows_node_config}
  */
  readonly windowsNodeConfig?: ContainerClusterNodePoolNodeConfigWindowsNodeConfig;
  /**
  * workload_metadata_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#workload_metadata_config ContainerCluster#workload_metadata_config}
  */
  readonly workloadMetadataConfig?: ContainerClusterNodePoolNodeConfigWorkloadMetadataConfig;
}

export function containerClusterNodePoolNodeConfigToTerraform(struct?: ContainerClusterNodePoolNodeConfigOutputReference | ContainerClusterNodePoolNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_kms_key: cdktf.stringToTerraform(struct!.bootDiskKmsKey),
    disk_size_gb: cdktf.numberToTerraform(struct!.diskSizeGb),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    enable_confidential_storage: cdktf.booleanToTerraform(struct!.enableConfidentialStorage),
    flex_start: cdktf.booleanToTerraform(struct!.flexStart),
    image_type: cdktf.stringToTerraform(struct!.imageType),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    local_ssd_count: cdktf.numberToTerraform(struct!.localSsdCount),
    local_ssd_encryption_mode: cdktf.stringToTerraform(struct!.localSsdEncryptionMode),
    logging_variant: cdktf.stringToTerraform(struct!.loggingVariant),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    max_run_duration: cdktf.stringToTerraform(struct!.maxRunDuration),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    min_cpu_platform: cdktf.stringToTerraform(struct!.minCpuPlatform),
    node_group: cdktf.stringToTerraform(struct!.nodeGroup),
    oauth_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oauthScopes),
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    resource_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceLabels),
    resource_manager_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.resourceManagerTags),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    spot: cdktf.booleanToTerraform(struct!.spot),
    storage_pools: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.storagePools),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    advanced_machine_features: containerClusterNodePoolNodeConfigAdvancedMachineFeaturesToTerraform(struct!.advancedMachineFeatures),
    confidential_nodes: containerClusterNodePoolNodeConfigConfidentialNodesToTerraform(struct!.confidentialNodes),
    containerd_config: containerClusterNodePoolNodeConfigContainerdConfigToTerraform(struct!.containerdConfig),
    ephemeral_storage_local_ssd_config: containerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigToTerraform(struct!.ephemeralStorageLocalSsdConfig),
    fast_socket: containerClusterNodePoolNodeConfigFastSocketToTerraform(struct!.fastSocket),
    gcfs_config: containerClusterNodePoolNodeConfigGcfsConfigToTerraform(struct!.gcfsConfig),
    guest_accelerator: cdktf.listMapper(containerClusterNodePoolNodeConfigGuestAcceleratorToTerraform, true)(struct!.guestAccelerator),
    gvnic: containerClusterNodePoolNodeConfigGvnicToTerraform(struct!.gvnic),
    host_maintenance_policy: containerClusterNodePoolNodeConfigHostMaintenancePolicyToTerraform(struct!.hostMaintenancePolicy),
    kubelet_config: containerClusterNodePoolNodeConfigKubeletConfigToTerraform(struct!.kubeletConfig),
    linux_node_config: containerClusterNodePoolNodeConfigLinuxNodeConfigToTerraform(struct!.linuxNodeConfig),
    local_nvme_ssd_block_config: containerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigToTerraform(struct!.localNvmeSsdBlockConfig),
    reservation_affinity: containerClusterNodePoolNodeConfigReservationAffinityToTerraform(struct!.reservationAffinity),
    secondary_boot_disks: cdktf.listMapper(containerClusterNodePoolNodeConfigSecondaryBootDisksToTerraform, true)(struct!.secondaryBootDisks),
    shielded_instance_config: containerClusterNodePoolNodeConfigShieldedInstanceConfigToTerraform(struct!.shieldedInstanceConfig),
    sole_tenant_config: containerClusterNodePoolNodeConfigSoleTenantConfigToTerraform(struct!.soleTenantConfig),
    taint: cdktf.listMapper(containerClusterNodePoolNodeConfigTaintToTerraform, true)(struct!.taint),
    windows_node_config: containerClusterNodePoolNodeConfigWindowsNodeConfigToTerraform(struct!.windowsNodeConfig),
    workload_metadata_config: containerClusterNodePoolNodeConfigWorkloadMetadataConfigToTerraform(struct!.workloadMetadataConfig),
  }
}


export function containerClusterNodePoolNodeConfigToHclTerraform(struct?: ContainerClusterNodePoolNodeConfigOutputReference | ContainerClusterNodePoolNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk_kms_key: {
      value: cdktf.stringToHclTerraform(struct!.bootDiskKmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.diskSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_confidential_storage: {
      value: cdktf.booleanToHclTerraform(struct!.enableConfidentialStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    flex_start: {
      value: cdktf.booleanToHclTerraform(struct!.flexStart),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_type: {
      value: cdktf.stringToHclTerraform(struct!.imageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    local_ssd_count: {
      value: cdktf.numberToHclTerraform(struct!.localSsdCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_ssd_encryption_mode: {
      value: cdktf.stringToHclTerraform(struct!.localSsdEncryptionMode),
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
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_run_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxRunDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    min_cpu_platform: {
      value: cdktf.stringToHclTerraform(struct!.minCpuPlatform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_group: {
      value: cdktf.stringToHclTerraform(struct!.nodeGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.oauthScopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    preemptible: {
      value: cdktf.booleanToHclTerraform(struct!.preemptible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resource_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resource_manager_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.resourceManagerTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot: {
      value: cdktf.booleanToHclTerraform(struct!.spot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_pools: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.storagePools),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    advanced_machine_features: {
      value: containerClusterNodePoolNodeConfigAdvancedMachineFeaturesToHclTerraform(struct!.advancedMachineFeatures),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesList",
    },
    confidential_nodes: {
      value: containerClusterNodePoolNodeConfigConfidentialNodesToHclTerraform(struct!.confidentialNodes),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigConfidentialNodesList",
    },
    containerd_config: {
      value: containerClusterNodePoolNodeConfigContainerdConfigToHclTerraform(struct!.containerdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigContainerdConfigList",
    },
    ephemeral_storage_local_ssd_config: {
      value: containerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigToHclTerraform(struct!.ephemeralStorageLocalSsdConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigList",
    },
    fast_socket: {
      value: containerClusterNodePoolNodeConfigFastSocketToHclTerraform(struct!.fastSocket),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigFastSocketList",
    },
    gcfs_config: {
      value: containerClusterNodePoolNodeConfigGcfsConfigToHclTerraform(struct!.gcfsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigGcfsConfigList",
    },
    guest_accelerator: {
      value: cdktf.listMapperHcl(containerClusterNodePoolNodeConfigGuestAcceleratorToHclTerraform, true)(struct!.guestAccelerator),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigGuestAcceleratorList",
    },
    gvnic: {
      value: containerClusterNodePoolNodeConfigGvnicToHclTerraform(struct!.gvnic),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigGvnicList",
    },
    host_maintenance_policy: {
      value: containerClusterNodePoolNodeConfigHostMaintenancePolicyToHclTerraform(struct!.hostMaintenancePolicy),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigHostMaintenancePolicyList",
    },
    kubelet_config: {
      value: containerClusterNodePoolNodeConfigKubeletConfigToHclTerraform(struct!.kubeletConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigKubeletConfigList",
    },
    linux_node_config: {
      value: containerClusterNodePoolNodeConfigLinuxNodeConfigToHclTerraform(struct!.linuxNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigLinuxNodeConfigList",
    },
    local_nvme_ssd_block_config: {
      value: containerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigToHclTerraform(struct!.localNvmeSsdBlockConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigList",
    },
    reservation_affinity: {
      value: containerClusterNodePoolNodeConfigReservationAffinityToHclTerraform(struct!.reservationAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigReservationAffinityList",
    },
    secondary_boot_disks: {
      value: cdktf.listMapperHcl(containerClusterNodePoolNodeConfigSecondaryBootDisksToHclTerraform, true)(struct!.secondaryBootDisks),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigSecondaryBootDisksList",
    },
    shielded_instance_config: {
      value: containerClusterNodePoolNodeConfigShieldedInstanceConfigToHclTerraform(struct!.shieldedInstanceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigShieldedInstanceConfigList",
    },
    sole_tenant_config: {
      value: containerClusterNodePoolNodeConfigSoleTenantConfigToHclTerraform(struct!.soleTenantConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigSoleTenantConfigList",
    },
    taint: {
      value: cdktf.listMapperHcl(containerClusterNodePoolNodeConfigTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigTaintList",
    },
    windows_node_config: {
      value: containerClusterNodePoolNodeConfigWindowsNodeConfigToHclTerraform(struct!.windowsNodeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigWindowsNodeConfigList",
    },
    workload_metadata_config: {
      value: containerClusterNodePoolNodeConfigWorkloadMetadataConfigToHclTerraform(struct!.workloadMetadataConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerClusterNodePoolNodeConfigWorkloadMetadataConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskKmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskKmsKey = this._bootDiskKmsKey;
    }
    if (this._diskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSizeGb = this._diskSizeGb;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._enableConfidentialStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConfidentialStorage = this._enableConfidentialStorage;
    }
    if (this._flexStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexStart = this._flexStart;
    }
    if (this._imageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageType = this._imageType;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._localSsdCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdCount = this._localSsdCount;
    }
    if (this._localSsdEncryptionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.localSsdEncryptionMode = this._localSsdEncryptionMode;
    }
    if (this._loggingVariant !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingVariant = this._loggingVariant;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
    }
    if (this._maxRunDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRunDuration = this._maxRunDuration;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._minCpuPlatform !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpuPlatform = this._minCpuPlatform;
    }
    if (this._nodeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroup = this._nodeGroup;
    }
    if (this._oauthScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthScopes = this._oauthScopes;
    }
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    if (this._resourceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLabels = this._resourceLabels;
    }
    if (this._resourceManagerTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceManagerTags = this._resourceManagerTags;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._spot !== undefined) {
      hasAnyValues = true;
      internalValueResult.spot = this._spot;
    }
    if (this._storagePools !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePools = this._storagePools;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._advancedMachineFeatures?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedMachineFeatures = this._advancedMachineFeatures?.internalValue;
    }
    if (this._confidentialNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidentialNodes = this._confidentialNodes?.internalValue;
    }
    if (this._containerdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerdConfig = this._containerdConfig?.internalValue;
    }
    if (this._ephemeralStorageLocalSsdConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralStorageLocalSsdConfig = this._ephemeralStorageLocalSsdConfig?.internalValue;
    }
    if (this._fastSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastSocket = this._fastSocket?.internalValue;
    }
    if (this._gcfsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcfsConfig = this._gcfsConfig?.internalValue;
    }
    if (this._guestAccelerator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestAccelerator = this._guestAccelerator?.internalValue;
    }
    if (this._gvnic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gvnic = this._gvnic?.internalValue;
    }
    if (this._hostMaintenancePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostMaintenancePolicy = this._hostMaintenancePolicy?.internalValue;
    }
    if (this._kubeletConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletConfig = this._kubeletConfig?.internalValue;
    }
    if (this._linuxNodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.linuxNodeConfig = this._linuxNodeConfig?.internalValue;
    }
    if (this._localNvmeSsdBlockConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localNvmeSsdBlockConfig = this._localNvmeSsdBlockConfig?.internalValue;
    }
    if (this._reservationAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationAffinity = this._reservationAffinity?.internalValue;
    }
    if (this._secondaryBootDisks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryBootDisks = this._secondaryBootDisks?.internalValue;
    }
    if (this._shieldedInstanceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shieldedInstanceConfig = this._shieldedInstanceConfig?.internalValue;
    }
    if (this._soleTenantConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.soleTenantConfig = this._soleTenantConfig?.internalValue;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    if (this._windowsNodeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowsNodeConfig = this._windowsNodeConfig?.internalValue;
    }
    if (this._workloadMetadataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloadMetadataConfig = this._workloadMetadataConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bootDiskKmsKey = undefined;
      this._diskSizeGb = undefined;
      this._diskType = undefined;
      this._enableConfidentialStorage = undefined;
      this._flexStart = undefined;
      this._imageType = undefined;
      this._labels = undefined;
      this._localSsdCount = undefined;
      this._localSsdEncryptionMode = undefined;
      this._loggingVariant = undefined;
      this._machineType = undefined;
      this._maxRunDuration = undefined;
      this._metadata = undefined;
      this._minCpuPlatform = undefined;
      this._nodeGroup = undefined;
      this._oauthScopes = undefined;
      this._preemptible = undefined;
      this._resourceLabels = undefined;
      this._resourceManagerTags = undefined;
      this._serviceAccount = undefined;
      this._spot = undefined;
      this._storagePools = undefined;
      this._tags = undefined;
      this._advancedMachineFeatures.internalValue = undefined;
      this._confidentialNodes.internalValue = undefined;
      this._containerdConfig.internalValue = undefined;
      this._ephemeralStorageLocalSsdConfig.internalValue = undefined;
      this._fastSocket.internalValue = undefined;
      this._gcfsConfig.internalValue = undefined;
      this._guestAccelerator.internalValue = undefined;
      this._gvnic.internalValue = undefined;
      this._hostMaintenancePolicy.internalValue = undefined;
      this._kubeletConfig.internalValue = undefined;
      this._linuxNodeConfig.internalValue = undefined;
      this._localNvmeSsdBlockConfig.internalValue = undefined;
      this._reservationAffinity.internalValue = undefined;
      this._secondaryBootDisks.internalValue = undefined;
      this._shieldedInstanceConfig.internalValue = undefined;
      this._soleTenantConfig.internalValue = undefined;
      this._taint.internalValue = undefined;
      this._windowsNodeConfig.internalValue = undefined;
      this._workloadMetadataConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bootDiskKmsKey = value.bootDiskKmsKey;
      this._diskSizeGb = value.diskSizeGb;
      this._diskType = value.diskType;
      this._enableConfidentialStorage = value.enableConfidentialStorage;
      this._flexStart = value.flexStart;
      this._imageType = value.imageType;
      this._labels = value.labels;
      this._localSsdCount = value.localSsdCount;
      this._localSsdEncryptionMode = value.localSsdEncryptionMode;
      this._loggingVariant = value.loggingVariant;
      this._machineType = value.machineType;
      this._maxRunDuration = value.maxRunDuration;
      this._metadata = value.metadata;
      this._minCpuPlatform = value.minCpuPlatform;
      this._nodeGroup = value.nodeGroup;
      this._oauthScopes = value.oauthScopes;
      this._preemptible = value.preemptible;
      this._resourceLabels = value.resourceLabels;
      this._resourceManagerTags = value.resourceManagerTags;
      this._serviceAccount = value.serviceAccount;
      this._spot = value.spot;
      this._storagePools = value.storagePools;
      this._tags = value.tags;
      this._advancedMachineFeatures.internalValue = value.advancedMachineFeatures;
      this._confidentialNodes.internalValue = value.confidentialNodes;
      this._containerdConfig.internalValue = value.containerdConfig;
      this._ephemeralStorageLocalSsdConfig.internalValue = value.ephemeralStorageLocalSsdConfig;
      this._fastSocket.internalValue = value.fastSocket;
      this._gcfsConfig.internalValue = value.gcfsConfig;
      this._guestAccelerator.internalValue = value.guestAccelerator;
      this._gvnic.internalValue = value.gvnic;
      this._hostMaintenancePolicy.internalValue = value.hostMaintenancePolicy;
      this._kubeletConfig.internalValue = value.kubeletConfig;
      this._linuxNodeConfig.internalValue = value.linuxNodeConfig;
      this._localNvmeSsdBlockConfig.internalValue = value.localNvmeSsdBlockConfig;
      this._reservationAffinity.internalValue = value.reservationAffinity;
      this._secondaryBootDisks.internalValue = value.secondaryBootDisks;
      this._shieldedInstanceConfig.internalValue = value.shieldedInstanceConfig;
      this._soleTenantConfig.internalValue = value.soleTenantConfig;
      this._taint.internalValue = value.taint;
      this._windowsNodeConfig.internalValue = value.windowsNodeConfig;
      this._workloadMetadataConfig.internalValue = value.workloadMetadataConfig;
    }
  }

  // boot_disk_kms_key - computed: false, optional: true, required: false
  private _bootDiskKmsKey?: string; 
  public get bootDiskKmsKey() {
    return this.getStringAttribute('boot_disk_kms_key');
  }
  public set bootDiskKmsKey(value: string) {
    this._bootDiskKmsKey = value;
  }
  public resetBootDiskKmsKey() {
    this._bootDiskKmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskKmsKeyInput() {
    return this._bootDiskKmsKey;
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

  // effective_taints - computed: true, optional: false, required: false
  private _effectiveTaints = new ContainerClusterNodePoolNodeConfigEffectiveTaintsList(this, "effective_taints", false);
  public get effectiveTaints() {
    return this._effectiveTaints;
  }

  // enable_confidential_storage - computed: false, optional: true, required: false
  private _enableConfidentialStorage?: boolean | cdktf.IResolvable; 
  public get enableConfidentialStorage() {
    return this.getBooleanAttribute('enable_confidential_storage');
  }
  public set enableConfidentialStorage(value: boolean | cdktf.IResolvable) {
    this._enableConfidentialStorage = value;
  }
  public resetEnableConfidentialStorage() {
    this._enableConfidentialStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConfidentialStorageInput() {
    return this._enableConfidentialStorage;
  }

  // flex_start - computed: false, optional: true, required: false
  private _flexStart?: boolean | cdktf.IResolvable; 
  public get flexStart() {
    return this.getBooleanAttribute('flex_start');
  }
  public set flexStart(value: boolean | cdktf.IResolvable) {
    this._flexStart = value;
  }
  public resetFlexStart() {
    this._flexStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexStartInput() {
    return this._flexStart;
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
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
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

  // local_ssd_encryption_mode - computed: false, optional: true, required: false
  private _localSsdEncryptionMode?: string; 
  public get localSsdEncryptionMode() {
    return this.getStringAttribute('local_ssd_encryption_mode');
  }
  public set localSsdEncryptionMode(value: string) {
    this._localSsdEncryptionMode = value;
  }
  public resetLocalSsdEncryptionMode() {
    this._localSsdEncryptionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSsdEncryptionModeInput() {
    return this._localSsdEncryptionMode;
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

  // max_run_duration - computed: false, optional: true, required: false
  private _maxRunDuration?: string; 
  public get maxRunDuration() {
    return this.getStringAttribute('max_run_duration');
  }
  public set maxRunDuration(value: string) {
    this._maxRunDuration = value;
  }
  public resetMaxRunDuration() {
    this._maxRunDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRunDurationInput() {
    return this._maxRunDuration;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // min_cpu_platform - computed: true, optional: true, required: false
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

  // node_group - computed: false, optional: true, required: false
  private _nodeGroup?: string; 
  public get nodeGroup() {
    return this.getStringAttribute('node_group');
  }
  public set nodeGroup(value: string) {
    this._nodeGroup = value;
  }
  public resetNodeGroup() {
    this._nodeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupInput() {
    return this._nodeGroup;
  }

  // oauth_scopes - computed: true, optional: true, required: false
  private _oauthScopes?: string[]; 
  public get oauthScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('oauth_scopes'));
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
    return this.getBooleanAttribute('preemptible');
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

  // resource_labels - computed: false, optional: true, required: false
  private _resourceLabels?: { [key: string]: string }; 
  public get resourceLabels() {
    return this.getStringMapAttribute('resource_labels');
  }
  public set resourceLabels(value: { [key: string]: string }) {
    this._resourceLabels = value;
  }
  public resetResourceLabels() {
    this._resourceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLabelsInput() {
    return this._resourceLabels;
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

  // spot - computed: false, optional: true, required: false
  private _spot?: boolean | cdktf.IResolvable; 
  public get spot() {
    return this.getBooleanAttribute('spot');
  }
  public set spot(value: boolean | cdktf.IResolvable) {
    this._spot = value;
  }
  public resetSpot() {
    this._spot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInput() {
    return this._spot;
  }

  // storage_pools - computed: false, optional: true, required: false
  private _storagePools?: string[]; 
  public get storagePools() {
    return this.getListAttribute('storage_pools');
  }
  public set storagePools(value: string[]) {
    this._storagePools = value;
  }
  public resetStoragePools() {
    this._storagePools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolsInput() {
    return this._storagePools;
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

  // advanced_machine_features - computed: false, optional: true, required: false
  private _advancedMachineFeatures = new ContainerClusterNodePoolNodeConfigAdvancedMachineFeaturesOutputReference(this, "advanced_machine_features");
  public get advancedMachineFeatures() {
    return this._advancedMachineFeatures;
  }
  public putAdvancedMachineFeatures(value: ContainerClusterNodePoolNodeConfigAdvancedMachineFeatures) {
    this._advancedMachineFeatures.internalValue = value;
  }
  public resetAdvancedMachineFeatures() {
    this._advancedMachineFeatures.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedMachineFeaturesInput() {
    return this._advancedMachineFeatures.internalValue;
  }

  // confidential_nodes - computed: false, optional: true, required: false
  private _confidentialNodes = new ContainerClusterNodePoolNodeConfigConfidentialNodesOutputReference(this, "confidential_nodes");
  public get confidentialNodes() {
    return this._confidentialNodes;
  }
  public putConfidentialNodes(value: ContainerClusterNodePoolNodeConfigConfidentialNodes) {
    this._confidentialNodes.internalValue = value;
  }
  public resetConfidentialNodes() {
    this._confidentialNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialNodesInput() {
    return this._confidentialNodes.internalValue;
  }

  // containerd_config - computed: false, optional: true, required: false
  private _containerdConfig = new ContainerClusterNodePoolNodeConfigContainerdConfigOutputReference(this, "containerd_config");
  public get containerdConfig() {
    return this._containerdConfig;
  }
  public putContainerdConfig(value: ContainerClusterNodePoolNodeConfigContainerdConfig) {
    this._containerdConfig.internalValue = value;
  }
  public resetContainerdConfig() {
    this._containerdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerdConfigInput() {
    return this._containerdConfig.internalValue;
  }

  // ephemeral_storage_local_ssd_config - computed: false, optional: true, required: false
  private _ephemeralStorageLocalSsdConfig = new ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfigOutputReference(this, "ephemeral_storage_local_ssd_config");
  public get ephemeralStorageLocalSsdConfig() {
    return this._ephemeralStorageLocalSsdConfig;
  }
  public putEphemeralStorageLocalSsdConfig(value: ContainerClusterNodePoolNodeConfigEphemeralStorageLocalSsdConfig) {
    this._ephemeralStorageLocalSsdConfig.internalValue = value;
  }
  public resetEphemeralStorageLocalSsdConfig() {
    this._ephemeralStorageLocalSsdConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralStorageLocalSsdConfigInput() {
    return this._ephemeralStorageLocalSsdConfig.internalValue;
  }

  // fast_socket - computed: false, optional: true, required: false
  private _fastSocket = new ContainerClusterNodePoolNodeConfigFastSocketOutputReference(this, "fast_socket");
  public get fastSocket() {
    return this._fastSocket;
  }
  public putFastSocket(value: ContainerClusterNodePoolNodeConfigFastSocket) {
    this._fastSocket.internalValue = value;
  }
  public resetFastSocket() {
    this._fastSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastSocketInput() {
    return this._fastSocket.internalValue;
  }

  // gcfs_config - computed: false, optional: true, required: false
  private _gcfsConfig = new ContainerClusterNodePoolNodeConfigGcfsConfigOutputReference(this, "gcfs_config");
  public get gcfsConfig() {
    return this._gcfsConfig;
  }
  public putGcfsConfig(value: ContainerClusterNodePoolNodeConfigGcfsConfig) {
    this._gcfsConfig.internalValue = value;
  }
  public resetGcfsConfig() {
    this._gcfsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcfsConfigInput() {
    return this._gcfsConfig.internalValue;
  }

  // guest_accelerator - computed: false, optional: true, required: false
  private _guestAccelerator = new ContainerClusterNodePoolNodeConfigGuestAcceleratorList(this, "guest_accelerator", false);
  public get guestAccelerator() {
    return this._guestAccelerator;
  }
  public putGuestAccelerator(value: ContainerClusterNodePoolNodeConfigGuestAccelerator[] | cdktf.IResolvable) {
    this._guestAccelerator.internalValue = value;
  }
  public resetGuestAccelerator() {
    this._guestAccelerator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAcceleratorInput() {
    return this._guestAccelerator.internalValue;
  }

  // gvnic - computed: false, optional: true, required: false
  private _gvnic = new ContainerClusterNodePoolNodeConfigGvnicOutputReference(this, "gvnic");
  public get gvnic() {
    return this._gvnic;
  }
  public putGvnic(value: ContainerClusterNodePoolNodeConfigGvnic) {
    this._gvnic.internalValue = value;
  }
  public resetGvnic() {
    this._gvnic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gvnicInput() {
    return this._gvnic.internalValue;
  }

  // host_maintenance_policy - computed: false, optional: true, required: false
  private _hostMaintenancePolicy = new ContainerClusterNodePoolNodeConfigHostMaintenancePolicyOutputReference(this, "host_maintenance_policy");
  public get hostMaintenancePolicy() {
    return this._hostMaintenancePolicy;
  }
  public putHostMaintenancePolicy(value: ContainerClusterNodePoolNodeConfigHostMaintenancePolicy) {
    this._hostMaintenancePolicy.internalValue = value;
  }
  public resetHostMaintenancePolicy() {
    this._hostMaintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostMaintenancePolicyInput() {
    return this._hostMaintenancePolicy.internalValue;
  }

  // kubelet_config - computed: false, optional: true, required: false
  private _kubeletConfig = new ContainerClusterNodePoolNodeConfigKubeletConfigOutputReference(this, "kubelet_config");
  public get kubeletConfig() {
    return this._kubeletConfig;
  }
  public putKubeletConfig(value: ContainerClusterNodePoolNodeConfigKubeletConfig) {
    this._kubeletConfig.internalValue = value;
  }
  public resetKubeletConfig() {
    this._kubeletConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigInput() {
    return this._kubeletConfig.internalValue;
  }

  // linux_node_config - computed: false, optional: true, required: false
  private _linuxNodeConfig = new ContainerClusterNodePoolNodeConfigLinuxNodeConfigOutputReference(this, "linux_node_config");
  public get linuxNodeConfig() {
    return this._linuxNodeConfig;
  }
  public putLinuxNodeConfig(value: ContainerClusterNodePoolNodeConfigLinuxNodeConfig) {
    this._linuxNodeConfig.internalValue = value;
  }
  public resetLinuxNodeConfig() {
    this._linuxNodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linuxNodeConfigInput() {
    return this._linuxNodeConfig.internalValue;
  }

  // local_nvme_ssd_block_config - computed: false, optional: true, required: false
  private _localNvmeSsdBlockConfig = new ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfigOutputReference(this, "local_nvme_ssd_block_config");
  public get localNvmeSsdBlockConfig() {
    return this._localNvmeSsdBlockConfig;
  }
  public putLocalNvmeSsdBlockConfig(value: ContainerClusterNodePoolNodeConfigLocalNvmeSsdBlockConfig) {
    this._localNvmeSsdBlockConfig.internalValue = value;
  }
  public resetLocalNvmeSsdBlockConfig() {
    this._localNvmeSsdBlockConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localNvmeSsdBlockConfigInput() {
    return this._localNvmeSsdBlockConfig.internalValue;
  }

  // reservation_affinity - computed: false, optional: true, required: false
  private _reservationAffinity = new ContainerClusterNodePoolNodeConfigReservationAffinityOutputReference(this, "reservation_affinity");
  public get reservationAffinity() {
    return this._reservationAffinity;
  }
  public putReservationAffinity(value: ContainerClusterNodePoolNodeConfigReservationAffinity) {
    this._reservationAffinity.internalValue = value;
  }
  public resetReservationAffinity() {
    this._reservationAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationAffinityInput() {
    return this._reservationAffinity.internalValue;
  }

  // secondary_boot_disks - computed: false, optional: true, required: false
  private _secondaryBootDisks = new ContainerClusterNodePoolNodeConfigSecondaryBootDisksList(this, "secondary_boot_disks", false);
  public get secondaryBootDisks() {
    return this._secondaryBootDisks;
  }
  public putSecondaryBootDisks(value: ContainerClusterNodePoolNodeConfigSecondaryBootDisks[] | cdktf.IResolvable) {
    this._secondaryBootDisks.internalValue = value;
  }
  public resetSecondaryBootDisks() {
    this._secondaryBootDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryBootDisksInput() {
    return this._secondaryBootDisks.internalValue;
  }

  // shielded_instance_config - computed: false, optional: true, required: false
  private _shieldedInstanceConfig = new ContainerClusterNodePoolNodeConfigShieldedInstanceConfigOutputReference(this, "shielded_instance_config");
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

  // sole_tenant_config - computed: false, optional: true, required: false
  private _soleTenantConfig = new ContainerClusterNodePoolNodeConfigSoleTenantConfigOutputReference(this, "sole_tenant_config");
  public get soleTenantConfig() {
    return this._soleTenantConfig;
  }
  public putSoleTenantConfig(value: ContainerClusterNodePoolNodeConfigSoleTenantConfig) {
    this._soleTenantConfig.internalValue = value;
  }
  public resetSoleTenantConfig() {
    this._soleTenantConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soleTenantConfigInput() {
    return this._soleTenantConfig.internalValue;
  }

  // taint - computed: false, optional: true, required: false
  private _taint = new ContainerClusterNodePoolNodeConfigTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: ContainerClusterNodePoolNodeConfigTaint[] | cdktf.IResolvable) {
    this._taint.internalValue = value;
  }
  public resetTaint() {
    this._taint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint.internalValue;
  }

  // windows_node_config - computed: false, optional: true, required: false
  private _windowsNodeConfig = new ContainerClusterNodePoolNodeConfigWindowsNodeConfigOutputReference(this, "windows_node_config");
  public get windowsNodeConfig() {
    return this._windowsNodeConfig;
  }
  public putWindowsNodeConfig(value: ContainerClusterNodePoolNodeConfigWindowsNodeConfig) {
    this._windowsNodeConfig.internalValue = value;
  }
  public resetWindowsNodeConfig() {
    this._windowsNodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowsNodeConfigInput() {
    return this._windowsNodeConfig.internalValue;
  }

  // workload_metadata_config - computed: false, optional: true, required: false
  private _workloadMetadataConfig = new ContainerClusterNodePoolNodeConfigWorkloadMetadataConfigOutputReference(this, "workload_metadata_config");
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
export interface ContainerClusterNodePoolPlacementPolicy {
  /**
  * If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#policy_name ContainerCluster#policy_name}
  */
  readonly policyName?: string;
  /**
  * The TPU topology like "2x4" or "2x2x2". https://cloud.google.com/kubernetes-engine/docs/concepts/plan-tpus#topology
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#tpu_topology ContainerCluster#tpu_topology}
  */
  readonly tpuTopology?: string;
  /**
  * Type defines the type of placement policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#type ContainerCluster#type}
  */
  readonly type: string;
}

export function containerClusterNodePoolPlacementPolicyToTerraform(struct?: ContainerClusterNodePoolPlacementPolicyOutputReference | ContainerClusterNodePoolPlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_name: cdktf.stringToTerraform(struct!.policyName),
    tpu_topology: cdktf.stringToTerraform(struct!.tpuTopology),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function containerClusterNodePoolPlacementPolicyToHclTerraform(struct?: ContainerClusterNodePoolPlacementPolicyOutputReference | ContainerClusterNodePoolPlacementPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_name: {
      value: cdktf.stringToHclTerraform(struct!.policyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tpu_topology: {
      value: cdktf.stringToHclTerraform(struct!.tpuTopology),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerClusterNodePoolPlacementPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolPlacementPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyName = this._policyName;
    }
    if (this._tpuTopology !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpuTopology = this._tpuTopology;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolPlacementPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyName = undefined;
      this._tpuTopology = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyName = value.policyName;
      this._tpuTopology = value.tpuTopology;
      this._type = value.type;
    }
  }

  // policy_name - computed: false, optional: true, required: false
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  public resetPolicyName() {
    this._policyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // tpu_topology - computed: false, optional: true, required: false
  private _tpuTopology?: string; 
  public get tpuTopology() {
    return this.getStringAttribute('tpu_topology');
  }
  public set tpuTopology(value: string) {
    this._tpuTopology = value;
  }
  public resetTpuTopology() {
    this._tpuTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpuTopologyInput() {
    return this._tpuTopology;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ContainerClusterNodePoolQueuedProvisioning {
  /**
  * Whether nodes in this node pool are obtainable solely through the ProvisioningRequest API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/container_cluster#enabled ContainerCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function containerClusterNodePoolQueuedProvisioningToTerraform(struct?: ContainerClusterNodePoolQueuedProvisioningOutputReference | ContainerClusterNodePoolQueuedProvisioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerClusterNodePoolQueuedProvisioningToHclTerraform(struct?: ContainerClusterNodePoolQueuedProvisioningOutputReference | ContainerClusterNodePoolQueuedProvisioning): any {
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

export class ContainerClusterNodePoolQueuedProvisioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerClusterNodePoolQueuedProvisioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerClusterNodePoolQueuedProvisioning | undefined) {
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
