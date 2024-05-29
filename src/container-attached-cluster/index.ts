/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerAttachedClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Annotations on the cluster. This field has the same
  * restrictions as Kubernetes annotations. The total size of all keys and
  * values combined is limited to 256k. Key can have 2 segments: prefix (optional)
  * and name (required), separated by a slash (/). Prefix must be a DNS subdomain.
  * Name must be 63 characters or less, begin and end with alphanumerics,
  * with dashes (-), underscores (_), dots (.), and alphanumerics between.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#annotations ContainerAttachedCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Policy to determine what flags to send on delete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#deletion_policy ContainerAttachedCluster#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * A human readable description of this attached cluster. Cannot be longer
  * than 255 UTF-8 encoded bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#description ContainerAttachedCluster#description}
  */
  readonly description?: string;
  /**
  * The Kubernetes distribution of the underlying attached cluster. Supported values:
  * "eks", "aks".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#distribution ContainerAttachedCluster#distribution}
  */
  readonly distribution: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#id ContainerAttachedCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#location ContainerAttachedCluster#location}
  */
  readonly location: string;
  /**
  * The name of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#name ContainerAttachedCluster#name}
  */
  readonly name: string;
  /**
  * The platform version for the cluster (e.g. '1.23.0-gke.1').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#platform_version ContainerAttachedCluster#platform_version}
  */
  readonly platformVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#project ContainerAttachedCluster#project}
  */
  readonly project?: string;
  /**
  * authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#authorization ContainerAttachedCluster#authorization}
  */
  readonly authorization?: ContainerAttachedClusterAuthorization;
  /**
  * binary_authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#binary_authorization ContainerAttachedCluster#binary_authorization}
  */
  readonly binaryAuthorization?: ContainerAttachedClusterBinaryAuthorization;
  /**
  * fleet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#fleet ContainerAttachedCluster#fleet}
  */
  readonly fleet: ContainerAttachedClusterFleet;
  /**
  * logging_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#logging_config ContainerAttachedCluster#logging_config}
  */
  readonly loggingConfig?: ContainerAttachedClusterLoggingConfig;
  /**
  * monitoring_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#monitoring_config ContainerAttachedCluster#monitoring_config}
  */
  readonly monitoringConfig?: ContainerAttachedClusterMonitoringConfig;
  /**
  * oidc_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#oidc_config ContainerAttachedCluster#oidc_config}
  */
  readonly oidcConfig: ContainerAttachedClusterOidcConfig;
  /**
  * proxy_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#proxy_config ContainerAttachedCluster#proxy_config}
  */
  readonly proxyConfig?: ContainerAttachedClusterProxyConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#timeouts ContainerAttachedCluster#timeouts}
  */
  readonly timeouts?: ContainerAttachedClusterTimeouts;
}
export interface ContainerAttachedClusterErrors {
}

export function containerAttachedClusterErrorsToTerraform(struct?: ContainerAttachedClusterErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function containerAttachedClusterErrorsToHclTerraform(struct?: ContainerAttachedClusterErrors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ContainerAttachedClusterErrorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerAttachedClusterErrors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAttachedClusterErrors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class ContainerAttachedClusterErrorsList extends cdktf.ComplexList {

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
  public get(index: number): ContainerAttachedClusterErrorsOutputReference {
    return new ContainerAttachedClusterErrorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAttachedClusterWorkloadIdentityConfig {
}

export function containerAttachedClusterWorkloadIdentityConfigToTerraform(struct?: ContainerAttachedClusterWorkloadIdentityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function containerAttachedClusterWorkloadIdentityConfigToHclTerraform(struct?: ContainerAttachedClusterWorkloadIdentityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ContainerAttachedClusterWorkloadIdentityConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerAttachedClusterWorkloadIdentityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAttachedClusterWorkloadIdentityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // identity_provider - computed: true, optional: false, required: false
  public get identityProvider() {
    return this.getStringAttribute('identity_provider');
  }

  // issuer_uri - computed: true, optional: false, required: false
  public get issuerUri() {
    return this.getStringAttribute('issuer_uri');
  }

  // workload_pool - computed: true, optional: false, required: false
  public get workloadPool() {
    return this.getStringAttribute('workload_pool');
  }
}

export class ContainerAttachedClusterWorkloadIdentityConfigList extends cdktf.ComplexList {

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
  public get(index: number): ContainerAttachedClusterWorkloadIdentityConfigOutputReference {
    return new ContainerAttachedClusterWorkloadIdentityConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAttachedClusterAuthorization {
  /**
  * Groups that can perform operations as a cluster admin. A managed
  * ClusterRoleBinding will be created to grant the 'cluster-admin' ClusterRole
  * to the groups. Up to ten admin groups can be provided.
  * 
  * For more info on RBAC, see
  * https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#admin_groups ContainerAttachedCluster#admin_groups}
  */
  readonly adminGroups?: string[];
  /**
  * Users that can perform operations as a cluster admin. A managed
  * ClusterRoleBinding will be created to grant the 'cluster-admin' ClusterRole
  * to the users. Up to ten admin users can be provided.
  * 
  * For more info on RBAC, see
  * https://kubernetes.io/docs/reference/access-authn-authz/rbac/#user-facing-roles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#admin_users ContainerAttachedCluster#admin_users}
  */
  readonly adminUsers?: string[];
}

export function containerAttachedClusterAuthorizationToTerraform(struct?: ContainerAttachedClusterAuthorizationOutputReference | ContainerAttachedClusterAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adminGroups),
    admin_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adminUsers),
  }
}


export function containerAttachedClusterAuthorizationToHclTerraform(struct?: ContainerAttachedClusterAuthorizationOutputReference | ContainerAttachedClusterAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.adminGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    admin_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.adminUsers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAttachedClusterAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAttachedClusterAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminGroups = this._adminGroups;
    }
    if (this._adminUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsers = this._adminUsers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAttachedClusterAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminGroups = undefined;
      this._adminUsers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminGroups = value.adminGroups;
      this._adminUsers = value.adminUsers;
    }
  }

  // admin_groups - computed: false, optional: true, required: false
  private _adminGroups?: string[]; 
  public get adminGroups() {
    return this.getListAttribute('admin_groups');
  }
  public set adminGroups(value: string[]) {
    this._adminGroups = value;
  }
  public resetAdminGroups() {
    this._adminGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminGroupsInput() {
    return this._adminGroups;
  }

  // admin_users - computed: false, optional: true, required: false
  private _adminUsers?: string[]; 
  public get adminUsers() {
    return this.getListAttribute('admin_users');
  }
  public set adminUsers(value: string[]) {
    this._adminUsers = value;
  }
  public resetAdminUsers() {
    this._adminUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsersInput() {
    return this._adminUsers;
  }
}
export interface ContainerAttachedClusterBinaryAuthorization {
  /**
  * Configure Binary Authorization evaluation mode. Possible values: ["DISABLED", "PROJECT_SINGLETON_POLICY_ENFORCE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#evaluation_mode ContainerAttachedCluster#evaluation_mode}
  */
  readonly evaluationMode?: string;
}

export function containerAttachedClusterBinaryAuthorizationToTerraform(struct?: ContainerAttachedClusterBinaryAuthorizationOutputReference | ContainerAttachedClusterBinaryAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_mode: cdktf.stringToTerraform(struct!.evaluationMode),
  }
}


export function containerAttachedClusterBinaryAuthorizationToHclTerraform(struct?: ContainerAttachedClusterBinaryAuthorizationOutputReference | ContainerAttachedClusterBinaryAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class ContainerAttachedClusterBinaryAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAttachedClusterBinaryAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationMode = this._evaluationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAttachedClusterBinaryAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._evaluationMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._evaluationMode = value.evaluationMode;
    }
  }

  // evaluation_mode - computed: false, optional: true, required: false
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
export interface ContainerAttachedClusterFleet {
  /**
  * The number of the Fleet host project where this cluster will be registered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#project ContainerAttachedCluster#project}
  */
  readonly project: string;
}

export function containerAttachedClusterFleetToTerraform(struct?: ContainerAttachedClusterFleetOutputReference | ContainerAttachedClusterFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function containerAttachedClusterFleetToHclTerraform(struct?: ContainerAttachedClusterFleetOutputReference | ContainerAttachedClusterFleet): any {
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

export class ContainerAttachedClusterFleetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAttachedClusterFleet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAttachedClusterFleet | undefined) {
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

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}
export interface ContainerAttachedClusterLoggingConfigComponentConfig {
  /**
  * The components to be enabled. Possible values: ["SYSTEM_COMPONENTS", "WORKLOADS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#enable_components ContainerAttachedCluster#enable_components}
  */
  readonly enableComponents?: string[];
}

export function containerAttachedClusterLoggingConfigComponentConfigToTerraform(struct?: ContainerAttachedClusterLoggingConfigComponentConfigOutputReference | ContainerAttachedClusterLoggingConfigComponentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enableComponents),
  }
}


export function containerAttachedClusterLoggingConfigComponentConfigToHclTerraform(struct?: ContainerAttachedClusterLoggingConfigComponentConfigOutputReference | ContainerAttachedClusterLoggingConfigComponentConfig): any {
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

export class ContainerAttachedClusterLoggingConfigComponentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAttachedClusterLoggingConfigComponentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableComponents !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableComponents = this._enableComponents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAttachedClusterLoggingConfigComponentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableComponents = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableComponents = value.enableComponents;
    }
  }

  // enable_components - computed: false, optional: true, required: false
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
}
export interface ContainerAttachedClusterLoggingConfig {
  /**
  * component_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#component_config ContainerAttachedCluster#component_config}
  */
  readonly componentConfig?: ContainerAttachedClusterLoggingConfigComponentConfig;
}

export function containerAttachedClusterLoggingConfigToTerraform(struct?: ContainerAttachedClusterLoggingConfigOutputReference | ContainerAttachedClusterLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component_config: containerAttachedClusterLoggingConfigComponentConfigToTerraform(struct!.componentConfig),
  }
}


export function containerAttachedClusterLoggingConfigToHclTerraform(struct?: ContainerAttachedClusterLoggingConfigOutputReference | ContainerAttachedClusterLoggingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component_config: {
      value: containerAttachedClusterLoggingConfigComponentConfigToHclTerraform(struct!.componentConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerAttachedClusterLoggingConfigComponentConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAttachedClusterLoggingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAttachedClusterLoggingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._componentConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.componentConfig = this._componentConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAttachedClusterLoggingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._componentConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._componentConfig.internalValue = value.componentConfig;
    }
  }

  // component_config - computed: false, optional: true, required: false
  private _componentConfig = new ContainerAttachedClusterLoggingConfigComponentConfigOutputReference(this, "component_config");
  public get componentConfig() {
    return this._componentConfig;
  }
  public putComponentConfig(value: ContainerAttachedClusterLoggingConfigComponentConfig) {
    this._componentConfig.internalValue = value;
  }
  public resetComponentConfig() {
    this._componentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentConfigInput() {
    return this._componentConfig.internalValue;
  }
}
export interface ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig {
  /**
  * Enable Managed Collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#enabled ContainerAttachedCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function containerAttachedClusterMonitoringConfigManagedPrometheusConfigToTerraform(struct?: ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference | ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function containerAttachedClusterMonitoringConfigManagedPrometheusConfigToHclTerraform(struct?: ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference | ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig): any {
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

export class ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig | undefined) {
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
export interface ContainerAttachedClusterMonitoringConfig {
  /**
  * managed_prometheus_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#managed_prometheus_config ContainerAttachedCluster#managed_prometheus_config}
  */
  readonly managedPrometheusConfig?: ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig;
}

export function containerAttachedClusterMonitoringConfigToTerraform(struct?: ContainerAttachedClusterMonitoringConfigOutputReference | ContainerAttachedClusterMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    managed_prometheus_config: containerAttachedClusterMonitoringConfigManagedPrometheusConfigToTerraform(struct!.managedPrometheusConfig),
  }
}


export function containerAttachedClusterMonitoringConfigToHclTerraform(struct?: ContainerAttachedClusterMonitoringConfigOutputReference | ContainerAttachedClusterMonitoringConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    managed_prometheus_config: {
      value: containerAttachedClusterMonitoringConfigManagedPrometheusConfigToHclTerraform(struct!.managedPrometheusConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAttachedClusterMonitoringConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAttachedClusterMonitoringConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managedPrometheusConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedPrometheusConfig = this._managedPrometheusConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAttachedClusterMonitoringConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managedPrometheusConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managedPrometheusConfig.internalValue = value.managedPrometheusConfig;
    }
  }

  // managed_prometheus_config - computed: false, optional: true, required: false
  private _managedPrometheusConfig = new ContainerAttachedClusterMonitoringConfigManagedPrometheusConfigOutputReference(this, "managed_prometheus_config");
  public get managedPrometheusConfig() {
    return this._managedPrometheusConfig;
  }
  public putManagedPrometheusConfig(value: ContainerAttachedClusterMonitoringConfigManagedPrometheusConfig) {
    this._managedPrometheusConfig.internalValue = value;
  }
  public resetManagedPrometheusConfig() {
    this._managedPrometheusConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedPrometheusConfigInput() {
    return this._managedPrometheusConfig.internalValue;
  }
}
export interface ContainerAttachedClusterOidcConfig {
  /**
  * A JSON Web Token (JWT) issuer URI. 'issuer' must start with 'https://'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#issuer_url ContainerAttachedCluster#issuer_url}
  */
  readonly issuerUrl: string;
  /**
  * OIDC verification keys in JWKS format (RFC 7517).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#jwks ContainerAttachedCluster#jwks}
  */
  readonly jwks?: string;
}

export function containerAttachedClusterOidcConfigToTerraform(struct?: ContainerAttachedClusterOidcConfigOutputReference | ContainerAttachedClusterOidcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    jwks: cdktf.stringToTerraform(struct!.jwks),
  }
}


export function containerAttachedClusterOidcConfigToHclTerraform(struct?: ContainerAttachedClusterOidcConfigOutputReference | ContainerAttachedClusterOidcConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issuer_url: {
      value: cdktf.stringToHclTerraform(struct!.issuerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks: {
      value: cdktf.stringToHclTerraform(struct!.jwks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAttachedClusterOidcConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAttachedClusterOidcConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    if (this._jwks !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwks = this._jwks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAttachedClusterOidcConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._issuerUrl = undefined;
      this._jwks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._issuerUrl = value.issuerUrl;
      this._jwks = value.jwks;
    }
  }

  // issuer_url - computed: false, optional: false, required: true
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // jwks - computed: false, optional: true, required: false
  private _jwks?: string; 
  public get jwks() {
    return this.getStringAttribute('jwks');
  }
  public set jwks(value: string) {
    this._jwks = value;
  }
  public resetJwks() {
    this._jwks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksInput() {
    return this._jwks;
  }
}
export interface ContainerAttachedClusterProxyConfigKubernetesSecret {
  /**
  * Name of the kubernetes secret containing the proxy config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#name ContainerAttachedCluster#name}
  */
  readonly name: string;
  /**
  * Namespace of the kubernetes secret containing the proxy config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#namespace ContainerAttachedCluster#namespace}
  */
  readonly namespace: string;
}

export function containerAttachedClusterProxyConfigKubernetesSecretToTerraform(struct?: ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference | ContainerAttachedClusterProxyConfigKubernetesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function containerAttachedClusterProxyConfigKubernetesSecretToHclTerraform(struct?: ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference | ContainerAttachedClusterProxyConfigKubernetesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAttachedClusterProxyConfigKubernetesSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAttachedClusterProxyConfigKubernetesSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
    }
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface ContainerAttachedClusterProxyConfig {
  /**
  * kubernetes_secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#kubernetes_secret ContainerAttachedCluster#kubernetes_secret}
  */
  readonly kubernetesSecret?: ContainerAttachedClusterProxyConfigKubernetesSecret;
}

export function containerAttachedClusterProxyConfigToTerraform(struct?: ContainerAttachedClusterProxyConfigOutputReference | ContainerAttachedClusterProxyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kubernetes_secret: containerAttachedClusterProxyConfigKubernetesSecretToTerraform(struct!.kubernetesSecret),
  }
}


export function containerAttachedClusterProxyConfigToHclTerraform(struct?: ContainerAttachedClusterProxyConfigOutputReference | ContainerAttachedClusterProxyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kubernetes_secret: {
      value: containerAttachedClusterProxyConfigKubernetesSecretToHclTerraform(struct!.kubernetesSecret),
      isBlock: true,
      type: "list",
      storageClassType: "ContainerAttachedClusterProxyConfigKubernetesSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ContainerAttachedClusterProxyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAttachedClusterProxyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubernetesSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetesSecret = this._kubernetesSecret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAttachedClusterProxyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kubernetesSecret.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kubernetesSecret.internalValue = value.kubernetesSecret;
    }
  }

  // kubernetes_secret - computed: false, optional: true, required: false
  private _kubernetesSecret = new ContainerAttachedClusterProxyConfigKubernetesSecretOutputReference(this, "kubernetes_secret");
  public get kubernetesSecret() {
    return this._kubernetesSecret;
  }
  public putKubernetesSecret(value: ContainerAttachedClusterProxyConfigKubernetesSecret) {
    this._kubernetesSecret.internalValue = value;
  }
  public resetKubernetesSecret() {
    this._kubernetesSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesSecretInput() {
    return this._kubernetesSecret.internalValue;
  }
}
export interface ContainerAttachedClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#create ContainerAttachedCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#delete ContainerAttachedCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#update ContainerAttachedCluster#update}
  */
  readonly update?: string;
}

export function containerAttachedClusterTimeoutsToTerraform(struct?: ContainerAttachedClusterTimeouts | cdktf.IResolvable): any {
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


export function containerAttachedClusterTimeoutsToHclTerraform(struct?: ContainerAttachedClusterTimeouts | cdktf.IResolvable): any {
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

export class ContainerAttachedClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ContainerAttachedClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ContainerAttachedClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster google_container_attached_cluster}
*/
export class ContainerAttachedCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_container_attached_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContainerAttachedCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContainerAttachedCluster to import
  * @param importFromId The id of the existing ContainerAttachedCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContainerAttachedCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_container_attached_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/container_attached_cluster google_container_attached_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerAttachedClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerAttachedClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_attached_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.31.1',
        providerVersionConstraint: '~> 5.0'
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
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._distribution = config.distribution;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._platformVersion = config.platformVersion;
    this._project = config.project;
    this._authorization.internalValue = config.authorization;
    this._binaryAuthorization.internalValue = config.binaryAuthorization;
    this._fleet.internalValue = config.fleet;
    this._loggingConfig.internalValue = config.loggingConfig;
    this._monitoringConfig.internalValue = config.monitoringConfig;
    this._oidcConfig.internalValue = config.oidcConfig;
    this._proxyConfig.internalValue = config.proxyConfig;
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

  // cluster_region - computed: true, optional: false, required: false
  public get clusterRegion() {
    return this.getStringAttribute('cluster_region');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_policy - computed: false, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // distribution - computed: false, optional: false, required: true
  private _distribution?: string; 
  public get distribution() {
    return this.getStringAttribute('distribution');
  }
  public set distribution(value: string) {
    this._distribution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution;
  }

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // errors - computed: true, optional: false, required: false
  private _errors = new ContainerAttachedClusterErrorsList(this, "errors", false);
  public get errors() {
    return this._errors;
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

  // kubernetes_version - computed: true, optional: false, required: false
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
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

  // platform_version - computed: false, optional: false, required: true
  private _platformVersion?: string; 
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }
  public set platformVersion(value: string) {
    this._platformVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformVersionInput() {
    return this._platformVersion;
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

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // workload_identity_config - computed: true, optional: false, required: false
  private _workloadIdentityConfig = new ContainerAttachedClusterWorkloadIdentityConfigList(this, "workload_identity_config", false);
  public get workloadIdentityConfig() {
    return this._workloadIdentityConfig;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new ContainerAttachedClusterAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: ContainerAttachedClusterAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // binary_authorization - computed: false, optional: true, required: false
  private _binaryAuthorization = new ContainerAttachedClusterBinaryAuthorizationOutputReference(this, "binary_authorization");
  public get binaryAuthorization() {
    return this._binaryAuthorization;
  }
  public putBinaryAuthorization(value: ContainerAttachedClusterBinaryAuthorization) {
    this._binaryAuthorization.internalValue = value;
  }
  public resetBinaryAuthorization() {
    this._binaryAuthorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAuthorizationInput() {
    return this._binaryAuthorization.internalValue;
  }

  // fleet - computed: false, optional: false, required: true
  private _fleet = new ContainerAttachedClusterFleetOutputReference(this, "fleet");
  public get fleet() {
    return this._fleet;
  }
  public putFleet(value: ContainerAttachedClusterFleet) {
    this._fleet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetInput() {
    return this._fleet.internalValue;
  }

  // logging_config - computed: false, optional: true, required: false
  private _loggingConfig = new ContainerAttachedClusterLoggingConfigOutputReference(this, "logging_config");
  public get loggingConfig() {
    return this._loggingConfig;
  }
  public putLoggingConfig(value: ContainerAttachedClusterLoggingConfig) {
    this._loggingConfig.internalValue = value;
  }
  public resetLoggingConfig() {
    this._loggingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigInput() {
    return this._loggingConfig.internalValue;
  }

  // monitoring_config - computed: false, optional: true, required: false
  private _monitoringConfig = new ContainerAttachedClusterMonitoringConfigOutputReference(this, "monitoring_config");
  public get monitoringConfig() {
    return this._monitoringConfig;
  }
  public putMonitoringConfig(value: ContainerAttachedClusterMonitoringConfig) {
    this._monitoringConfig.internalValue = value;
  }
  public resetMonitoringConfig() {
    this._monitoringConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringConfigInput() {
    return this._monitoringConfig.internalValue;
  }

  // oidc_config - computed: false, optional: false, required: true
  private _oidcConfig = new ContainerAttachedClusterOidcConfigOutputReference(this, "oidc_config");
  public get oidcConfig() {
    return this._oidcConfig;
  }
  public putOidcConfig(value: ContainerAttachedClusterOidcConfig) {
    this._oidcConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcConfigInput() {
    return this._oidcConfig.internalValue;
  }

  // proxy_config - computed: false, optional: true, required: false
  private _proxyConfig = new ContainerAttachedClusterProxyConfigOutputReference(this, "proxy_config");
  public get proxyConfig() {
    return this._proxyConfig;
  }
  public putProxyConfig(value: ContainerAttachedClusterProxyConfig) {
    this._proxyConfig.internalValue = value;
  }
  public resetProxyConfig() {
    this._proxyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigInput() {
    return this._proxyConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerAttachedClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerAttachedClusterTimeouts) {
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
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      description: cdktf.stringToTerraform(this._description),
      distribution: cdktf.stringToTerraform(this._distribution),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      platform_version: cdktf.stringToTerraform(this._platformVersion),
      project: cdktf.stringToTerraform(this._project),
      authorization: containerAttachedClusterAuthorizationToTerraform(this._authorization.internalValue),
      binary_authorization: containerAttachedClusterBinaryAuthorizationToTerraform(this._binaryAuthorization.internalValue),
      fleet: containerAttachedClusterFleetToTerraform(this._fleet.internalValue),
      logging_config: containerAttachedClusterLoggingConfigToTerraform(this._loggingConfig.internalValue),
      monitoring_config: containerAttachedClusterMonitoringConfigToTerraform(this._monitoringConfig.internalValue),
      oidc_config: containerAttachedClusterOidcConfigToTerraform(this._oidcConfig.internalValue),
      proxy_config: containerAttachedClusterProxyConfigToTerraform(this._proxyConfig.internalValue),
      timeouts: containerAttachedClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      deletion_policy: {
        value: cdktf.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distribution: {
        value: cdktf.stringToHclTerraform(this._distribution),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform_version: {
        value: cdktf.stringToHclTerraform(this._platformVersion),
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
      authorization: {
        value: containerAttachedClusterAuthorizationToHclTerraform(this._authorization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerAttachedClusterAuthorizationList",
      },
      binary_authorization: {
        value: containerAttachedClusterBinaryAuthorizationToHclTerraform(this._binaryAuthorization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerAttachedClusterBinaryAuthorizationList",
      },
      fleet: {
        value: containerAttachedClusterFleetToHclTerraform(this._fleet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerAttachedClusterFleetList",
      },
      logging_config: {
        value: containerAttachedClusterLoggingConfigToHclTerraform(this._loggingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerAttachedClusterLoggingConfigList",
      },
      monitoring_config: {
        value: containerAttachedClusterMonitoringConfigToHclTerraform(this._monitoringConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerAttachedClusterMonitoringConfigList",
      },
      oidc_config: {
        value: containerAttachedClusterOidcConfigToHclTerraform(this._oidcConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerAttachedClusterOidcConfigList",
      },
      proxy_config: {
        value: containerAttachedClusterProxyConfigToHclTerraform(this._proxyConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ContainerAttachedClusterProxyConfigList",
      },
      timeouts: {
        value: containerAttachedClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ContainerAttachedClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
