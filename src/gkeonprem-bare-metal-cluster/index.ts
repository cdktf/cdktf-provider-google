/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GkeonpremBareMetalClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Admin Cluster this Bare Metal User Cluster belongs to.
  * This is the full resource name of the Admin Cluster's hub membership.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#admin_cluster_membership GkeonpremBareMetalCluster#admin_cluster_membership}
  */
  readonly adminClusterMembership: string;
  /**
  * Annotations on the Bare Metal User Cluster.
  * This field has the same restrictions as Kubernetes annotations.
  * The total size of all keys and values combined is limited to 256k.
  * Key can have 2 segments: prefix (optional) and name (required),
  * separated by a slash (/).
  * Prefix must be a DNS subdomain.
  * Name must be 63 characters or less, begin and end with alphanumerics,
  * with dashes (-), underscores (_), dots (.), and alphanumerics between.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#annotations GkeonpremBareMetalCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * A human readable description of this Bare Metal User Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#bare_metal_version GkeonpremBareMetalCluster#bare_metal_version}
  */
  readonly bareMetalVersion: string;
  /**
  * A human readable description of this Bare Metal User Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#description GkeonpremBareMetalCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#id GkeonpremBareMetalCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#location GkeonpremBareMetalCluster#location}
  */
  readonly location: string;
  /**
  * The bare metal cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#name GkeonpremBareMetalCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#project GkeonpremBareMetalCluster#project}
  */
  readonly project?: string;
  /**
  * binary_authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#binary_authorization GkeonpremBareMetalCluster#binary_authorization}
  */
  readonly binaryAuthorization?: GkeonpremBareMetalClusterBinaryAuthorization;
  /**
  * cluster_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#cluster_operations GkeonpremBareMetalCluster#cluster_operations}
  */
  readonly clusterOperations?: GkeonpremBareMetalClusterClusterOperations;
  /**
  * control_plane block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#control_plane GkeonpremBareMetalCluster#control_plane}
  */
  readonly controlPlane: GkeonpremBareMetalClusterControlPlane;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#load_balancer GkeonpremBareMetalCluster#load_balancer}
  */
  readonly loadBalancer: GkeonpremBareMetalClusterLoadBalancer;
  /**
  * maintenance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#maintenance_config GkeonpremBareMetalCluster#maintenance_config}
  */
  readonly maintenanceConfig?: GkeonpremBareMetalClusterMaintenanceConfig;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#network_config GkeonpremBareMetalCluster#network_config}
  */
  readonly networkConfig: GkeonpremBareMetalClusterNetworkConfig;
  /**
  * node_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#node_access_config GkeonpremBareMetalCluster#node_access_config}
  */
  readonly nodeAccessConfig?: GkeonpremBareMetalClusterNodeAccessConfig;
  /**
  * node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#node_config GkeonpremBareMetalCluster#node_config}
  */
  readonly nodeConfig?: GkeonpremBareMetalClusterNodeConfig;
  /**
  * os_environment_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#os_environment_config GkeonpremBareMetalCluster#os_environment_config}
  */
  readonly osEnvironmentConfig?: GkeonpremBareMetalClusterOsEnvironmentConfig;
  /**
  * proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#proxy GkeonpremBareMetalCluster#proxy}
  */
  readonly proxy?: GkeonpremBareMetalClusterProxy;
  /**
  * security_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#security_config GkeonpremBareMetalCluster#security_config}
  */
  readonly securityConfig?: GkeonpremBareMetalClusterSecurityConfig;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#storage GkeonpremBareMetalCluster#storage}
  */
  readonly storage: GkeonpremBareMetalClusterStorage;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#timeouts GkeonpremBareMetalCluster#timeouts}
  */
  readonly timeouts?: GkeonpremBareMetalClusterTimeouts;
  /**
  * upgrade_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#upgrade_policy GkeonpremBareMetalCluster#upgrade_policy}
  */
  readonly upgradePolicy?: GkeonpremBareMetalClusterUpgradePolicy;
}
export interface GkeonpremBareMetalClusterFleet {
}

export function gkeonpremBareMetalClusterFleetToTerraform(struct?: GkeonpremBareMetalClusterFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremBareMetalClusterFleetToHclTerraform(struct?: GkeonpremBareMetalClusterFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremBareMetalClusterFleetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalClusterFleet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterFleet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // membership - computed: true, optional: false, required: false
  public get membership() {
    return this.getStringAttribute('membership');
  }
}

export class GkeonpremBareMetalClusterFleetList extends cdktf.ComplexList {

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
  public get(index: number): GkeonpremBareMetalClusterFleetOutputReference {
    return new GkeonpremBareMetalClusterFleetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalClusterStatusConditions {
}

export function gkeonpremBareMetalClusterStatusConditionsToTerraform(struct?: GkeonpremBareMetalClusterStatusConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremBareMetalClusterStatusConditionsToHclTerraform(struct?: GkeonpremBareMetalClusterStatusConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremBareMetalClusterStatusConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalClusterStatusConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterStatusConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // last_transition_time - computed: true, optional: false, required: false
  public get lastTransitionTime() {
    return this.getStringAttribute('last_transition_time');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class GkeonpremBareMetalClusterStatusConditionsList extends cdktf.ComplexList {

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
  public get(index: number): GkeonpremBareMetalClusterStatusConditionsOutputReference {
    return new GkeonpremBareMetalClusterStatusConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalClusterStatus {
}

export function gkeonpremBareMetalClusterStatusToTerraform(struct?: GkeonpremBareMetalClusterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremBareMetalClusterStatusToHclTerraform(struct?: GkeonpremBareMetalClusterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremBareMetalClusterStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalClusterStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new GkeonpremBareMetalClusterStatusConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
}

export class GkeonpremBareMetalClusterStatusList extends cdktf.ComplexList {

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
  public get(index: number): GkeonpremBareMetalClusterStatusOutputReference {
    return new GkeonpremBareMetalClusterStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalClusterValidationCheckStatusResult {
}

export function gkeonpremBareMetalClusterValidationCheckStatusResultToTerraform(struct?: GkeonpremBareMetalClusterValidationCheckStatusResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremBareMetalClusterValidationCheckStatusResultToHclTerraform(struct?: GkeonpremBareMetalClusterValidationCheckStatusResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremBareMetalClusterValidationCheckStatusResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalClusterValidationCheckStatusResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterValidationCheckStatusResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getStringAttribute('details');
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }
}

export class GkeonpremBareMetalClusterValidationCheckStatusResultList extends cdktf.ComplexList {

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
  public get(index: number): GkeonpremBareMetalClusterValidationCheckStatusResultOutputReference {
    return new GkeonpremBareMetalClusterValidationCheckStatusResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalClusterValidationCheckStatus {
}

export function gkeonpremBareMetalClusterValidationCheckStatusToTerraform(struct?: GkeonpremBareMetalClusterValidationCheckStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremBareMetalClusterValidationCheckStatusToHclTerraform(struct?: GkeonpremBareMetalClusterValidationCheckStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremBareMetalClusterValidationCheckStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalClusterValidationCheckStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterValidationCheckStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // result - computed: true, optional: false, required: false
  private _result = new GkeonpremBareMetalClusterValidationCheckStatusResultList(this, "result", false);
  public get result() {
    return this._result;
  }
}

export class GkeonpremBareMetalClusterValidationCheckStatusList extends cdktf.ComplexList {

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
  public get(index: number): GkeonpremBareMetalClusterValidationCheckStatusOutputReference {
    return new GkeonpremBareMetalClusterValidationCheckStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalClusterValidationCheck {
}

export function gkeonpremBareMetalClusterValidationCheckToTerraform(struct?: GkeonpremBareMetalClusterValidationCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremBareMetalClusterValidationCheckToHclTerraform(struct?: GkeonpremBareMetalClusterValidationCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremBareMetalClusterValidationCheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalClusterValidationCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterValidationCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // options - computed: true, optional: false, required: false
  public get options() {
    return this.getStringAttribute('options');
  }

  // scenario - computed: true, optional: false, required: false
  public get scenario() {
    return this.getStringAttribute('scenario');
  }

  // status - computed: true, optional: false, required: false
  private _status = new GkeonpremBareMetalClusterValidationCheckStatusList(this, "status", false);
  public get status() {
    return this._status;
  }
}

export class GkeonpremBareMetalClusterValidationCheckList extends cdktf.ComplexList {

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
  public get(index: number): GkeonpremBareMetalClusterValidationCheckOutputReference {
    return new GkeonpremBareMetalClusterValidationCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalClusterBinaryAuthorization {
  /**
  * Mode of operation for binauthz policy evaluation. If unspecified,
  * defaults to DISABLED. Possible values: ["DISABLED", "PROJECT_SINGLETON_POLICY_ENFORCE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#evaluation_mode GkeonpremBareMetalCluster#evaluation_mode}
  */
  readonly evaluationMode?: string;
}

export function gkeonpremBareMetalClusterBinaryAuthorizationToTerraform(struct?: GkeonpremBareMetalClusterBinaryAuthorizationOutputReference | GkeonpremBareMetalClusterBinaryAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_mode: cdktf.stringToTerraform(struct!.evaluationMode),
  }
}


export function gkeonpremBareMetalClusterBinaryAuthorizationToHclTerraform(struct?: GkeonpremBareMetalClusterBinaryAuthorizationOutputReference | GkeonpremBareMetalClusterBinaryAuthorization): any {
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

export class GkeonpremBareMetalClusterBinaryAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterBinaryAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationMode = this._evaluationMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterBinaryAuthorization | undefined) {
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
export interface GkeonpremBareMetalClusterClusterOperations {
  /**
  * Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#enable_application_logs GkeonpremBareMetalCluster#enable_application_logs}
  */
  readonly enableApplicationLogs?: boolean | cdktf.IResolvable;
}

export function gkeonpremBareMetalClusterClusterOperationsToTerraform(struct?: GkeonpremBareMetalClusterClusterOperationsOutputReference | GkeonpremBareMetalClusterClusterOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_application_logs: cdktf.booleanToTerraform(struct!.enableApplicationLogs),
  }
}


export function gkeonpremBareMetalClusterClusterOperationsToHclTerraform(struct?: GkeonpremBareMetalClusterClusterOperationsOutputReference | GkeonpremBareMetalClusterClusterOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_application_logs: {
      value: cdktf.booleanToHclTerraform(struct!.enableApplicationLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterClusterOperationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterClusterOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableApplicationLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableApplicationLogs = this._enableApplicationLogs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterClusterOperations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableApplicationLogs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableApplicationLogs = value.enableApplicationLogs;
    }
  }

  // enable_application_logs - computed: false, optional: true, required: false
  private _enableApplicationLogs?: boolean | cdktf.IResolvable; 
  public get enableApplicationLogs() {
    return this.getBooleanAttribute('enable_application_logs');
  }
  public set enableApplicationLogs(value: boolean | cdktf.IResolvable) {
    this._enableApplicationLogs = value;
  }
  public resetEnableApplicationLogs() {
    this._enableApplicationLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableApplicationLogsInput() {
    return this._enableApplicationLogs;
  }
}
export interface GkeonpremBareMetalClusterControlPlaneApiServerArgs {
  /**
  * The argument name as it appears on the API Server command line please make sure to remove the leading dashes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#argument GkeonpremBareMetalCluster#argument}
  */
  readonly argument: string;
  /**
  * The value of the arg as it will be passed to the API Server command line.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#value GkeonpremBareMetalCluster#value}
  */
  readonly value: string;
}

export function gkeonpremBareMetalClusterControlPlaneApiServerArgsToTerraform(struct?: GkeonpremBareMetalClusterControlPlaneApiServerArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    argument: cdktf.stringToTerraform(struct!.argument),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function gkeonpremBareMetalClusterControlPlaneApiServerArgsToHclTerraform(struct?: GkeonpremBareMetalClusterControlPlaneApiServerArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    argument: {
      value: cdktf.stringToHclTerraform(struct!.argument),
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

export class GkeonpremBareMetalClusterControlPlaneApiServerArgsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalClusterControlPlaneApiServerArgs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._argument !== undefined) {
      hasAnyValues = true;
      internalValueResult.argument = this._argument;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterControlPlaneApiServerArgs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._argument = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._argument = value.argument;
      this._value = value.value;
    }
  }

  // argument - computed: false, optional: false, required: true
  private _argument?: string; 
  public get argument() {
    return this.getStringAttribute('argument');
  }
  public set argument(value: string) {
    this._argument = value;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentInput() {
    return this._argument;
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

export class GkeonpremBareMetalClusterControlPlaneApiServerArgsList extends cdktf.ComplexList {
  public internalValue? : GkeonpremBareMetalClusterControlPlaneApiServerArgs[] | cdktf.IResolvable

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
  public get(index: number): GkeonpremBareMetalClusterControlPlaneApiServerArgsOutputReference {
    return new GkeonpremBareMetalClusterControlPlaneApiServerArgsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs {
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to
  * each node. These will added in addition to any default label(s)
  * that Kubernetes may apply to the node. In case of conflict in
  * label keys, the applied set may differ depending on the Kubernetes
  * version -- it's best to assume the behavior is undefined and
  * conflicts should be avoided. For more information, including usage
  * and the valid values, see:
  *   http://kubernetes.io/v1.1/docs/user-guide/labels.html
  * An object containing a list of "key": value pairs.
  * Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#labels GkeonpremBareMetalCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The default IPv4 address for SSH access and Kubernetes node.
  * Example: 192.168.0.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#node_ip GkeonpremBareMetalCluster#node_ip}
  */
  readonly nodeIp?: string;
}

export function gkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsToTerraform(struct?: GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    node_ip: cdktf.stringToTerraform(struct!.nodeIp),
  }
}


export function gkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsToHclTerraform(struct?: GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_ip: {
      value: cdktf.stringToHclTerraform(struct!.nodeIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nodeIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeIp = this._nodeIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._nodeIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._nodeIp = value.nodeIp;
    }
  }

  // labels - computed: false, optional: true, required: false
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

  // node_ip - computed: false, optional: true, required: false
  private _nodeIp?: string; 
  public get nodeIp() {
    return this.getStringAttribute('node_ip');
  }
  public set nodeIp(value: string) {
    this._nodeIp = value;
  }
  public resetNodeIp() {
    this._nodeIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIpInput() {
    return this._nodeIp;
  }
}

export class GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList extends cdktf.ComplexList {
  public internalValue? : GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs[] | cdktf.IResolvable

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
  public get(index: number): GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference {
    return new GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints {
  /**
  * Specifies the nodes operating system (default: LINUX). Possible values: ["EFFECT_UNSPECIFIED", "PREFER_NO_SCHEDULE", "NO_EXECUTE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#effect GkeonpremBareMetalCluster#effect}
  */
  readonly effect?: string;
  /**
  * Key associated with the effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#key GkeonpremBareMetalCluster#key}
  */
  readonly key?: string;
  /**
  * Value associated with the effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#value GkeonpremBareMetalCluster#value}
  */
  readonly value?: string;
}

export function gkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsToTerraform(struct?: GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints | cdktf.IResolvable): any {
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


export function gkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsToHclTerraform(struct?: GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints | cdktf.IResolvable): any {
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

export class GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints | cdktf.IResolvable | undefined) {
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

export class GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList extends cdktf.ComplexList {
  public internalValue? : GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints[] | cdktf.IResolvable

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
  public get(index: number): GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference {
    return new GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig {
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to
  * each node. These will added in addition to any default label(s)
  * that Kubernetes may apply to the node. In case of conflict in
  * label keys, the applied set may differ depending on the Kubernetes
  * version -- it's best to assume the behavior is undefined and
  * conflicts should be avoided. For more information, including usage
  * and the valid values, see:
  *   http://kubernetes.io/v1.1/docs/user-guide/labels.html
  * An object containing a list of "key": value pairs.
  * Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#labels GkeonpremBareMetalCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Specifies the nodes operating system (default: LINUX).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#operating_system GkeonpremBareMetalCluster#operating_system}
  */
  readonly operatingSystem?: string;
  /**
  * node_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#node_configs GkeonpremBareMetalCluster#node_configs}
  */
  readonly nodeConfigs?: GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs[] | cdktf.IResolvable;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#taints GkeonpremBareMetalCluster#taints}
  */
  readonly taints?: GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints[] | cdktf.IResolvable;
}

export function gkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigToTerraform(struct?: GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference | GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    operating_system: cdktf.stringToTerraform(struct!.operatingSystem),
    node_configs: cdktf.listMapper(gkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsToTerraform, true)(struct!.nodeConfigs),
    taints: cdktf.listMapper(gkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsToTerraform, true)(struct!.taints),
  }
}


export function gkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigToHclTerraform(struct?: GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference | GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    operating_system: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_configs: {
      value: cdktf.listMapperHcl(gkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsToHclTerraform, true)(struct!.nodeConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList",
    },
    taints: {
      value: cdktf.listMapperHcl(gkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsToHclTerraform, true)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._operatingSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystem = this._operatingSystem;
    }
    if (this._nodeConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeConfigs = this._nodeConfigs?.internalValue;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._operatingSystem = undefined;
      this._nodeConfigs.internalValue = undefined;
      this._taints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._operatingSystem = value.operatingSystem;
      this._nodeConfigs.internalValue = value.nodeConfigs;
      this._taints.internalValue = value.taints;
    }
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

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // node_configs - computed: false, optional: true, required: false
  private _nodeConfigs = new GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList(this, "node_configs", false);
  public get nodeConfigs() {
    return this._nodeConfigs;
  }
  public putNodeConfigs(value: GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs[] | cdktf.IResolvable) {
    this._nodeConfigs.internalValue = value;
  }
  public resetNodeConfigs() {
    this._nodeConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigsInput() {
    return this._nodeConfigs.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }
}
export interface GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfig {
  /**
  * node_pool_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#node_pool_config GkeonpremBareMetalCluster#node_pool_config}
  */
  readonly nodePoolConfig: GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig;
}

export function gkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigToTerraform(struct?: GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigOutputReference | GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_pool_config: gkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigToTerraform(struct!.nodePoolConfig),
  }
}


export function gkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigToHclTerraform(struct?: GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigOutputReference | GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_pool_config: {
      value: gkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigToHclTerraform(struct!.nodePoolConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodePoolConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolConfig = this._nodePoolConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodePoolConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodePoolConfig.internalValue = value.nodePoolConfig;
    }
  }

  // node_pool_config - computed: false, optional: false, required: true
  private _nodePoolConfig = new GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference(this, "node_pool_config");
  public get nodePoolConfig() {
    return this._nodePoolConfig;
  }
  public putNodePoolConfig(value: GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig) {
    this._nodePoolConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolConfigInput() {
    return this._nodePoolConfig.internalValue;
  }
}
export interface GkeonpremBareMetalClusterControlPlane {
  /**
  * api_server_args block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#api_server_args GkeonpremBareMetalCluster#api_server_args}
  */
  readonly apiServerArgs?: GkeonpremBareMetalClusterControlPlaneApiServerArgs[] | cdktf.IResolvable;
  /**
  * control_plane_node_pool_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#control_plane_node_pool_config GkeonpremBareMetalCluster#control_plane_node_pool_config}
  */
  readonly controlPlaneNodePoolConfig: GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfig;
}

export function gkeonpremBareMetalClusterControlPlaneToTerraform(struct?: GkeonpremBareMetalClusterControlPlaneOutputReference | GkeonpremBareMetalClusterControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server_args: cdktf.listMapper(gkeonpremBareMetalClusterControlPlaneApiServerArgsToTerraform, true)(struct!.apiServerArgs),
    control_plane_node_pool_config: gkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigToTerraform(struct!.controlPlaneNodePoolConfig),
  }
}


export function gkeonpremBareMetalClusterControlPlaneToHclTerraform(struct?: GkeonpremBareMetalClusterControlPlaneOutputReference | GkeonpremBareMetalClusterControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_server_args: {
      value: cdktf.listMapperHcl(gkeonpremBareMetalClusterControlPlaneApiServerArgsToHclTerraform, true)(struct!.apiServerArgs),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterControlPlaneApiServerArgsList",
    },
    control_plane_node_pool_config: {
      value: gkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigToHclTerraform(struct!.controlPlaneNodePoolConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterControlPlaneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterControlPlane | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiServerArgs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServerArgs = this._apiServerArgs?.internalValue;
    }
    if (this._controlPlaneNodePoolConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneNodePoolConfig = this._controlPlaneNodePoolConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterControlPlane | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiServerArgs.internalValue = undefined;
      this._controlPlaneNodePoolConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiServerArgs.internalValue = value.apiServerArgs;
      this._controlPlaneNodePoolConfig.internalValue = value.controlPlaneNodePoolConfig;
    }
  }

  // api_server_args - computed: false, optional: true, required: false
  private _apiServerArgs = new GkeonpremBareMetalClusterControlPlaneApiServerArgsList(this, "api_server_args", false);
  public get apiServerArgs() {
    return this._apiServerArgs;
  }
  public putApiServerArgs(value: GkeonpremBareMetalClusterControlPlaneApiServerArgs[] | cdktf.IResolvable) {
    this._apiServerArgs.internalValue = value;
  }
  public resetApiServerArgs() {
    this._apiServerArgs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerArgsInput() {
    return this._apiServerArgs.internalValue;
  }

  // control_plane_node_pool_config - computed: false, optional: false, required: true
  private _controlPlaneNodePoolConfig = new GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfigOutputReference(this, "control_plane_node_pool_config");
  public get controlPlaneNodePoolConfig() {
    return this._controlPlaneNodePoolConfig;
  }
  public putControlPlaneNodePoolConfig(value: GkeonpremBareMetalClusterControlPlaneControlPlaneNodePoolConfig) {
    this._controlPlaneNodePoolConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneNodePoolConfigInput() {
    return this._controlPlaneNodePoolConfig.internalValue;
  }
}
export interface GkeonpremBareMetalClusterLoadBalancerBgpLbConfigAddressPools {
  /**
  * The addresses that are part of this pool. Each address must be either in the CIDR form (1.2.3.0/24) or range form (1.2.3.1-1.2.3.5).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#addresses GkeonpremBareMetalCluster#addresses}
  */
  readonly addresses: string[];
  /**
  * If true, avoid using IPs ending in .0 or .255.
  * This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#avoid_buggy_ips GkeonpremBareMetalCluster#avoid_buggy_ips}
  */
  readonly avoidBuggyIps?: boolean | cdktf.IResolvable;
  /**
  * If true, prevent IP addresses from being automatically assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#manual_assign GkeonpremBareMetalCluster#manual_assign}
  */
  readonly manualAssign?: string;
  /**
  * The name of the address pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#pool GkeonpremBareMetalCluster#pool}
  */
  readonly pool: string;
}

export function gkeonpremBareMetalClusterLoadBalancerBgpLbConfigAddressPoolsToTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigAddressPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    avoid_buggy_ips: cdktf.booleanToTerraform(struct!.avoidBuggyIps),
    manual_assign: cdktf.stringToTerraform(struct!.manualAssign),
    pool: cdktf.stringToTerraform(struct!.pool),
  }
}


export function gkeonpremBareMetalClusterLoadBalancerBgpLbConfigAddressPoolsToHclTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigAddressPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    avoid_buggy_ips: {
      value: cdktf.booleanToHclTerraform(struct!.avoidBuggyIps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manual_assign: {
      value: cdktf.stringToHclTerraform(struct!.manualAssign),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterLoadBalancerBgpLbConfigAddressPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalClusterLoadBalancerBgpLbConfigAddressPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._avoidBuggyIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.avoidBuggyIps = this._avoidBuggyIps;
    }
    if (this._manualAssign !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualAssign = this._manualAssign;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigAddressPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses = undefined;
      this._avoidBuggyIps = undefined;
      this._manualAssign = undefined;
      this._pool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses = value.addresses;
      this._avoidBuggyIps = value.avoidBuggyIps;
      this._manualAssign = value.manualAssign;
      this._pool = value.pool;
    }
  }

  // addresses - computed: false, optional: false, required: true
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // avoid_buggy_ips - computed: false, optional: true, required: false
  private _avoidBuggyIps?: boolean | cdktf.IResolvable; 
  public get avoidBuggyIps() {
    return this.getBooleanAttribute('avoid_buggy_ips');
  }
  public set avoidBuggyIps(value: boolean | cdktf.IResolvable) {
    this._avoidBuggyIps = value;
  }
  public resetAvoidBuggyIps() {
    this._avoidBuggyIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avoidBuggyIpsInput() {
    return this._avoidBuggyIps;
  }

  // manual_assign - computed: false, optional: true, required: false
  private _manualAssign?: string; 
  public get manualAssign() {
    return this.getStringAttribute('manual_assign');
  }
  public set manualAssign(value: string) {
    this._manualAssign = value;
  }
  public resetManualAssign() {
    this._manualAssign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualAssignInput() {
    return this._manualAssign;
  }

  // pool - computed: false, optional: false, required: true
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }
}

export class GkeonpremBareMetalClusterLoadBalancerBgpLbConfigAddressPoolsList extends cdktf.ComplexList {
  public internalValue? : GkeonpremBareMetalClusterLoadBalancerBgpLbConfigAddressPools[] | cdktf.IResolvable

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
  public get(index: number): GkeonpremBareMetalClusterLoadBalancerBgpLbConfigAddressPoolsOutputReference {
    return new GkeonpremBareMetalClusterLoadBalancerBgpLbConfigAddressPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfigs {
  /**
  * BGP autonomous system number (ASN) for the network that contains the
  * external peer device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#asn GkeonpremBareMetalCluster#asn}
  */
  readonly asn: number;
  /**
  * The IP address of the control plane node that connects to the external
  * peer.
  * If you don't specify any control plane nodes, all control plane nodes
  * can connect to the external peer. If you specify one or more IP addresses,
  * only the nodes specified participate in peering sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#control_plane_nodes GkeonpremBareMetalCluster#control_plane_nodes}
  */
  readonly controlPlaneNodes?: string[];
  /**
  * The IP address of the external peer device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#ip_address GkeonpremBareMetalCluster#ip_address}
  */
  readonly ipAddress: string;
}

export function gkeonpremBareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfigsToTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    control_plane_nodes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.controlPlaneNodes),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
  }
}


export function gkeonpremBareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfigsToHclTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    control_plane_nodes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.controlPlaneNodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._controlPlaneNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneNodes = this._controlPlaneNodes;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asn = undefined;
      this._controlPlaneNodes = undefined;
      this._ipAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asn = value.asn;
      this._controlPlaneNodes = value.controlPlaneNodes;
      this._ipAddress = value.ipAddress;
    }
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // control_plane_nodes - computed: false, optional: true, required: false
  private _controlPlaneNodes?: string[]; 
  public get controlPlaneNodes() {
    return this.getListAttribute('control_plane_nodes');
  }
  public set controlPlaneNodes(value: string[]) {
    this._controlPlaneNodes = value;
  }
  public resetControlPlaneNodes() {
    this._controlPlaneNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneNodesInput() {
    return this._controlPlaneNodes;
  }

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }
}

export class GkeonpremBareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfigsList extends cdktf.ComplexList {
  public internalValue? : GkeonpremBareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfigs[] | cdktf.IResolvable

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
  public get(index: number): GkeonpremBareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfigsOutputReference {
    return new GkeonpremBareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfig {
  /**
  * The maximum size of bursty pulls, temporarily allows pulls to burst to this
  * number, while still not exceeding registry_pull_qps.
  * The value must not be a negative number.
  * Updating this field may impact scalability by changing the amount of
  * traffic produced by image pulls.
  * Defaults to 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#registry_burst GkeonpremBareMetalCluster#registry_burst}
  */
  readonly registryBurst?: number;
  /**
  * The limit of registry pulls per second.
  * Setting this value to 0 means no limit.
  * Updating this field may impact scalability by changing the amount of
  * traffic produced by image pulls.
  * Defaults to 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#registry_pull_qps GkeonpremBareMetalCluster#registry_pull_qps}
  */
  readonly registryPullQps?: number;
  /**
  * Prevents the Kubelet from pulling multiple images at a time.
  * We recommend *not* changing the default value on nodes that run docker
  * daemon with version  < 1.9 or an Another Union File System (Aufs) storage
  * backend. Issue https://github.com/kubernetes/kubernetes/issues/10959 has
  * more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#serialize_image_pulls_disabled GkeonpremBareMetalCluster#serialize_image_pulls_disabled}
  */
  readonly serializeImagePullsDisabled?: boolean | cdktf.IResolvable;
}

export function gkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfigToTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfigOutputReference | GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    registry_burst: cdktf.numberToTerraform(struct!.registryBurst),
    registry_pull_qps: cdktf.numberToTerraform(struct!.registryPullQps),
    serialize_image_pulls_disabled: cdktf.booleanToTerraform(struct!.serializeImagePullsDisabled),
  }
}


export function gkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfigToHclTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfigOutputReference | GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    registry_burst: {
      value: cdktf.numberToHclTerraform(struct!.registryBurst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    registry_pull_qps: {
      value: cdktf.numberToHclTerraform(struct!.registryPullQps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    serialize_image_pulls_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.serializeImagePullsDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._registryBurst !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryBurst = this._registryBurst;
    }
    if (this._registryPullQps !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryPullQps = this._registryPullQps;
    }
    if (this._serializeImagePullsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializeImagePullsDisabled = this._serializeImagePullsDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._registryBurst = undefined;
      this._registryPullQps = undefined;
      this._serializeImagePullsDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._registryBurst = value.registryBurst;
      this._registryPullQps = value.registryPullQps;
      this._serializeImagePullsDisabled = value.serializeImagePullsDisabled;
    }
  }

  // registry_burst - computed: false, optional: true, required: false
  private _registryBurst?: number; 
  public get registryBurst() {
    return this.getNumberAttribute('registry_burst');
  }
  public set registryBurst(value: number) {
    this._registryBurst = value;
  }
  public resetRegistryBurst() {
    this._registryBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryBurstInput() {
    return this._registryBurst;
  }

  // registry_pull_qps - computed: false, optional: true, required: false
  private _registryPullQps?: number; 
  public get registryPullQps() {
    return this.getNumberAttribute('registry_pull_qps');
  }
  public set registryPullQps(value: number) {
    this._registryPullQps = value;
  }
  public resetRegistryPullQps() {
    this._registryPullQps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryPullQpsInput() {
    return this._registryPullQps;
  }

  // serialize_image_pulls_disabled - computed: false, optional: true, required: false
  private _serializeImagePullsDisabled?: boolean | cdktf.IResolvable; 
  public get serializeImagePullsDisabled() {
    return this.getBooleanAttribute('serialize_image_pulls_disabled');
  }
  public set serializeImagePullsDisabled(value: boolean | cdktf.IResolvable) {
    this._serializeImagePullsDisabled = value;
  }
  public resetSerializeImagePullsDisabled() {
    this._serializeImagePullsDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializeImagePullsDisabledInput() {
    return this._serializeImagePullsDisabled;
  }
}
export interface GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs {
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to
  * each node. These will added in addition to any default label(s)
  * that Kubernetes may apply to the node. In case of conflict in
  * label keys, the applied set may differ depending on the Kubernetes
  * version -- it's best to assume the behavior is undefined and
  * conflicts should be avoided. For more information, including usage
  * and the valid values, see:
  *   http://kubernetes.io/v1.1/docs/user-guide/labels.html
  * An object containing a list of "key": value pairs.
  * Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#labels GkeonpremBareMetalCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The default IPv4 address for SSH access and Kubernetes node.
  * Example: 192.168.0.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#node_ip GkeonpremBareMetalCluster#node_ip}
  */
  readonly nodeIp?: string;
}

export function gkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigsToTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    node_ip: cdktf.stringToTerraform(struct!.nodeIp),
  }
}


export function gkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigsToHclTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_ip: {
      value: cdktf.stringToHclTerraform(struct!.nodeIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nodeIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeIp = this._nodeIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._nodeIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._nodeIp = value.nodeIp;
    }
  }

  // labels - computed: false, optional: true, required: false
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

  // node_ip - computed: false, optional: true, required: false
  private _nodeIp?: string; 
  public get nodeIp() {
    return this.getStringAttribute('node_ip');
  }
  public set nodeIp(value: string) {
    this._nodeIp = value;
  }
  public resetNodeIp() {
    this._nodeIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIpInput() {
    return this._nodeIp;
  }
}

export class GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigsList extends cdktf.ComplexList {
  public internalValue? : GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs[] | cdktf.IResolvable

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
  public get(index: number): GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigsOutputReference {
    return new GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints {
  /**
  * Specifies the nodes operating system (default: LINUX). Possible values: ["EFFECT_UNSPECIFIED", "PREFER_NO_SCHEDULE", "NO_EXECUTE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#effect GkeonpremBareMetalCluster#effect}
  */
  readonly effect?: string;
  /**
  * Key associated with the effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#key GkeonpremBareMetalCluster#key}
  */
  readonly key?: string;
  /**
  * Value associated with the effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#value GkeonpremBareMetalCluster#value}
  */
  readonly value?: string;
}

export function gkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaintsToTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints | cdktf.IResolvable): any {
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


export function gkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaintsToHclTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints | cdktf.IResolvable): any {
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

export class GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints | cdktf.IResolvable | undefined) {
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

export class GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaintsList extends cdktf.ComplexList {
  public internalValue? : GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints[] | cdktf.IResolvable

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
  public get(index: number): GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaintsOutputReference {
    return new GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig {
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to
  * each node. These will added in addition to any default label(s)
  * that Kubernetes may apply to the node. In case of conflict in
  * label keys, the applied set may differ depending on the Kubernetes
  * version -- it's best to assume the behavior is undefined and
  * conflicts should be avoided. For more information, including usage
  * and the valid values, see:
  *   http://kubernetes.io/v1.1/docs/user-guide/labels.html
  * An object containing a list of "key": value pairs.
  * Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#labels GkeonpremBareMetalCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Specifies the nodes operating system (default: LINUX).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#operating_system GkeonpremBareMetalCluster#operating_system}
  */
  readonly operatingSystem?: string;
  /**
  * kubelet_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#kubelet_config GkeonpremBareMetalCluster#kubelet_config}
  */
  readonly kubeletConfig?: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfig;
  /**
  * node_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#node_configs GkeonpremBareMetalCluster#node_configs}
  */
  readonly nodeConfigs?: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs[] | cdktf.IResolvable;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#taints GkeonpremBareMetalCluster#taints}
  */
  readonly taints?: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints[] | cdktf.IResolvable;
}

export function gkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigToTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigOutputReference | GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    operating_system: cdktf.stringToTerraform(struct!.operatingSystem),
    kubelet_config: gkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfigToTerraform(struct!.kubeletConfig),
    node_configs: cdktf.listMapper(gkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigsToTerraform, true)(struct!.nodeConfigs),
    taints: cdktf.listMapper(gkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaintsToTerraform, true)(struct!.taints),
  }
}


export function gkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigToHclTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigOutputReference | GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    operating_system: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kubelet_config: {
      value: gkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfigToHclTerraform(struct!.kubeletConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfigList",
    },
    node_configs: {
      value: cdktf.listMapperHcl(gkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigsToHclTerraform, true)(struct!.nodeConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigsList",
    },
    taints: {
      value: cdktf.listMapperHcl(gkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaintsToHclTerraform, true)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._operatingSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystem = this._operatingSystem;
    }
    if (this._kubeletConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeletConfig = this._kubeletConfig?.internalValue;
    }
    if (this._nodeConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeConfigs = this._nodeConfigs?.internalValue;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._operatingSystem = undefined;
      this._kubeletConfig.internalValue = undefined;
      this._nodeConfigs.internalValue = undefined;
      this._taints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._operatingSystem = value.operatingSystem;
      this._kubeletConfig.internalValue = value.kubeletConfig;
      this._nodeConfigs.internalValue = value.nodeConfigs;
      this._taints.internalValue = value.taints;
    }
  }

  // labels - computed: false, optional: true, required: false
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

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // kubelet_config - computed: false, optional: true, required: false
  private _kubeletConfig = new GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfigOutputReference(this, "kubelet_config");
  public get kubeletConfig() {
    return this._kubeletConfig;
  }
  public putKubeletConfig(value: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigKubeletConfig) {
    this._kubeletConfig.internalValue = value;
  }
  public resetKubeletConfig() {
    this._kubeletConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletConfigInput() {
    return this._kubeletConfig.internalValue;
  }

  // node_configs - computed: false, optional: true, required: false
  private _nodeConfigs = new GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigsList(this, "node_configs", false);
  public get nodeConfigs() {
    return this._nodeConfigs;
  }
  public putNodeConfigs(value: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs[] | cdktf.IResolvable) {
    this._nodeConfigs.internalValue = value;
  }
  public resetNodeConfigs() {
    this._nodeConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigsInput() {
    return this._nodeConfigs.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }
}
export interface GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig {
  /**
  * node_pool_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#node_pool_config GkeonpremBareMetalCluster#node_pool_config}
  */
  readonly nodePoolConfig?: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig;
}

export function gkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigToTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigOutputReference | GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_pool_config: gkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigToTerraform(struct!.nodePoolConfig),
  }
}


export function gkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigToHclTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigOutputReference | GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_pool_config: {
      value: gkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigToHclTerraform(struct!.nodePoolConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodePoolConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolConfig = this._nodePoolConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodePoolConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodePoolConfig.internalValue = value.nodePoolConfig;
    }
  }

  // node_pool_config - computed: false, optional: true, required: false
  private _nodePoolConfig = new GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfigOutputReference(this, "node_pool_config");
  public get nodePoolConfig() {
    return this._nodePoolConfig;
  }
  public putNodePoolConfig(value: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigNodePoolConfig) {
    this._nodePoolConfig.internalValue = value;
  }
  public resetNodePoolConfig() {
    this._nodePoolConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolConfigInput() {
    return this._nodePoolConfig.internalValue;
  }
}
export interface GkeonpremBareMetalClusterLoadBalancerBgpLbConfig {
  /**
  * BGP autonomous system number (ASN) of the cluster.
  * This field can be updated after cluster creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#asn GkeonpremBareMetalCluster#asn}
  */
  readonly asn: number;
  /**
  * address_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#address_pools GkeonpremBareMetalCluster#address_pools}
  */
  readonly addressPools: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigAddressPools[] | cdktf.IResolvable;
  /**
  * bgp_peer_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#bgp_peer_configs GkeonpremBareMetalCluster#bgp_peer_configs}
  */
  readonly bgpPeerConfigs: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfigs[] | cdktf.IResolvable;
  /**
  * load_balancer_node_pool_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#load_balancer_node_pool_config GkeonpremBareMetalCluster#load_balancer_node_pool_config}
  */
  readonly loadBalancerNodePoolConfig?: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig;
}

export function gkeonpremBareMetalClusterLoadBalancerBgpLbConfigToTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigOutputReference | GkeonpremBareMetalClusterLoadBalancerBgpLbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.numberToTerraform(struct!.asn),
    address_pools: cdktf.listMapper(gkeonpremBareMetalClusterLoadBalancerBgpLbConfigAddressPoolsToTerraform, true)(struct!.addressPools),
    bgp_peer_configs: cdktf.listMapper(gkeonpremBareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfigsToTerraform, true)(struct!.bgpPeerConfigs),
    load_balancer_node_pool_config: gkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigToTerraform(struct!.loadBalancerNodePoolConfig),
  }
}


export function gkeonpremBareMetalClusterLoadBalancerBgpLbConfigToHclTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigOutputReference | GkeonpremBareMetalClusterLoadBalancerBgpLbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    address_pools: {
      value: cdktf.listMapperHcl(gkeonpremBareMetalClusterLoadBalancerBgpLbConfigAddressPoolsToHclTerraform, true)(struct!.addressPools),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterLoadBalancerBgpLbConfigAddressPoolsList",
    },
    bgp_peer_configs: {
      value: cdktf.listMapperHcl(gkeonpremBareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfigsToHclTerraform, true)(struct!.bgpPeerConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfigsList",
    },
    load_balancer_node_pool_config: {
      value: gkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigToHclTerraform(struct!.loadBalancerNodePoolConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterLoadBalancerBgpLbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterLoadBalancerBgpLbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._addressPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressPools = this._addressPools?.internalValue;
    }
    if (this._bgpPeerConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpPeerConfigs = this._bgpPeerConfigs?.internalValue;
    }
    if (this._loadBalancerNodePoolConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerNodePoolConfig = this._loadBalancerNodePoolConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterLoadBalancerBgpLbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asn = undefined;
      this._addressPools.internalValue = undefined;
      this._bgpPeerConfigs.internalValue = undefined;
      this._loadBalancerNodePoolConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asn = value.asn;
      this._addressPools.internalValue = value.addressPools;
      this._bgpPeerConfigs.internalValue = value.bgpPeerConfigs;
      this._loadBalancerNodePoolConfig.internalValue = value.loadBalancerNodePoolConfig;
    }
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // address_pools - computed: false, optional: false, required: true
  private _addressPools = new GkeonpremBareMetalClusterLoadBalancerBgpLbConfigAddressPoolsList(this, "address_pools", false);
  public get addressPools() {
    return this._addressPools;
  }
  public putAddressPools(value: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigAddressPools[] | cdktf.IResolvable) {
    this._addressPools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPoolsInput() {
    return this._addressPools.internalValue;
  }

  // bgp_peer_configs - computed: false, optional: false, required: true
  private _bgpPeerConfigs = new GkeonpremBareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfigsList(this, "bgp_peer_configs", false);
  public get bgpPeerConfigs() {
    return this._bgpPeerConfigs;
  }
  public putBgpPeerConfigs(value: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigBgpPeerConfigs[] | cdktf.IResolvable) {
    this._bgpPeerConfigs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPeerConfigsInput() {
    return this._bgpPeerConfigs.internalValue;
  }

  // load_balancer_node_pool_config - computed: false, optional: true, required: false
  private _loadBalancerNodePoolConfig = new GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfigOutputReference(this, "load_balancer_node_pool_config");
  public get loadBalancerNodePoolConfig() {
    return this._loadBalancerNodePoolConfig;
  }
  public putLoadBalancerNodePoolConfig(value: GkeonpremBareMetalClusterLoadBalancerBgpLbConfigLoadBalancerNodePoolConfig) {
    this._loadBalancerNodePoolConfig.internalValue = value;
  }
  public resetLoadBalancerNodePoolConfig() {
    this._loadBalancerNodePoolConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerNodePoolConfigInput() {
    return this._loadBalancerNodePoolConfig.internalValue;
  }
}
export interface GkeonpremBareMetalClusterLoadBalancerManualLbConfig {
  /**
  * Whether manual load balancing is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#enabled GkeonpremBareMetalCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function gkeonpremBareMetalClusterLoadBalancerManualLbConfigToTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerManualLbConfigOutputReference | GkeonpremBareMetalClusterLoadBalancerManualLbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function gkeonpremBareMetalClusterLoadBalancerManualLbConfigToHclTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerManualLbConfigOutputReference | GkeonpremBareMetalClusterLoadBalancerManualLbConfig): any {
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

export class GkeonpremBareMetalClusterLoadBalancerManualLbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterLoadBalancerManualLbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterLoadBalancerManualLbConfig | undefined) {
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
export interface GkeonpremBareMetalClusterLoadBalancerMetalLbConfigAddressPools {
  /**
  * The addresses that are part of this pool. Each address must be either in the CIDR form (1.2.3.0/24) or range form (1.2.3.1-1.2.3.5).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#addresses GkeonpremBareMetalCluster#addresses}
  */
  readonly addresses: string[];
  /**
  * If true, avoid using IPs ending in .0 or .255.
  * This avoids buggy consumer devices mistakenly dropping IPv4 traffic for those special IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#avoid_buggy_ips GkeonpremBareMetalCluster#avoid_buggy_ips}
  */
  readonly avoidBuggyIps?: boolean | cdktf.IResolvable;
  /**
  * If true, prevent IP addresses from being automatically assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#manual_assign GkeonpremBareMetalCluster#manual_assign}
  */
  readonly manualAssign?: boolean | cdktf.IResolvable;
  /**
  * The name of the address pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#pool GkeonpremBareMetalCluster#pool}
  */
  readonly pool: string;
}

export function gkeonpremBareMetalClusterLoadBalancerMetalLbConfigAddressPoolsToTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigAddressPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    avoid_buggy_ips: cdktf.booleanToTerraform(struct!.avoidBuggyIps),
    manual_assign: cdktf.booleanToTerraform(struct!.manualAssign),
    pool: cdktf.stringToTerraform(struct!.pool),
  }
}


export function gkeonpremBareMetalClusterLoadBalancerMetalLbConfigAddressPoolsToHclTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigAddressPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    avoid_buggy_ips: {
      value: cdktf.booleanToHclTerraform(struct!.avoidBuggyIps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manual_assign: {
      value: cdktf.booleanToHclTerraform(struct!.manualAssign),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalClusterLoadBalancerMetalLbConfigAddressPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._avoidBuggyIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.avoidBuggyIps = this._avoidBuggyIps;
    }
    if (this._manualAssign !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualAssign = this._manualAssign;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigAddressPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses = undefined;
      this._avoidBuggyIps = undefined;
      this._manualAssign = undefined;
      this._pool = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses = value.addresses;
      this._avoidBuggyIps = value.avoidBuggyIps;
      this._manualAssign = value.manualAssign;
      this._pool = value.pool;
    }
  }

  // addresses - computed: false, optional: false, required: true
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // avoid_buggy_ips - computed: false, optional: true, required: false
  private _avoidBuggyIps?: boolean | cdktf.IResolvable; 
  public get avoidBuggyIps() {
    return this.getBooleanAttribute('avoid_buggy_ips');
  }
  public set avoidBuggyIps(value: boolean | cdktf.IResolvable) {
    this._avoidBuggyIps = value;
  }
  public resetAvoidBuggyIps() {
    this._avoidBuggyIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avoidBuggyIpsInput() {
    return this._avoidBuggyIps;
  }

  // manual_assign - computed: false, optional: true, required: false
  private _manualAssign?: boolean | cdktf.IResolvable; 
  public get manualAssign() {
    return this.getBooleanAttribute('manual_assign');
  }
  public set manualAssign(value: boolean | cdktf.IResolvable) {
    this._manualAssign = value;
  }
  public resetManualAssign() {
    this._manualAssign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualAssignInput() {
    return this._manualAssign;
  }

  // pool - computed: false, optional: false, required: true
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }
}

export class GkeonpremBareMetalClusterLoadBalancerMetalLbConfigAddressPoolsList extends cdktf.ComplexList {
  public internalValue? : GkeonpremBareMetalClusterLoadBalancerMetalLbConfigAddressPools[] | cdktf.IResolvable

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
  public get(index: number): GkeonpremBareMetalClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference {
    return new GkeonpremBareMetalClusterLoadBalancerMetalLbConfigAddressPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs {
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to
  * each node. These will added in addition to any default label(s)
  * that Kubernetes may apply to the node. In case of conflict in
  * label keys, the applied set may differ depending on the Kubernetes
  * version -- it's best to assume the behavior is undefined and
  * conflicts should be avoided. For more information, including usage
  * and the valid values, see:
  *   http://kubernetes.io/v1.1/docs/user-guide/labels.html
  * An object containing a list of "key": value pairs.
  * Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#labels GkeonpremBareMetalCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The default IPv4 address for SSH access and Kubernetes node.
  * Example: 192.168.0.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#node_ip GkeonpremBareMetalCluster#node_ip}
  */
  readonly nodeIp?: string;
}

export function gkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigsToTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    node_ip: cdktf.stringToTerraform(struct!.nodeIp),
  }
}


export function gkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigsToHclTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_ip: {
      value: cdktf.stringToHclTerraform(struct!.nodeIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nodeIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeIp = this._nodeIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._nodeIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._nodeIp = value.nodeIp;
    }
  }

  // labels - computed: false, optional: true, required: false
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

  // node_ip - computed: false, optional: true, required: false
  private _nodeIp?: string; 
  public get nodeIp() {
    return this.getStringAttribute('node_ip');
  }
  public set nodeIp(value: string) {
    this._nodeIp = value;
  }
  public resetNodeIp() {
    this._nodeIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIpInput() {
    return this._nodeIp;
  }
}

export class GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigsList extends cdktf.ComplexList {
  public internalValue? : GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs[] | cdktf.IResolvable

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
  public get(index: number): GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigsOutputReference {
    return new GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints {
  /**
  * Specifies the nodes operating system (default: LINUX). Possible values: ["EFFECT_UNSPECIFIED", "PREFER_NO_SCHEDULE", "NO_EXECUTE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#effect GkeonpremBareMetalCluster#effect}
  */
  readonly effect?: string;
  /**
  * Key associated with the effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#key GkeonpremBareMetalCluster#key}
  */
  readonly key?: string;
  /**
  * Value associated with the effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#value GkeonpremBareMetalCluster#value}
  */
  readonly value?: string;
}

export function gkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaintsToTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints | cdktf.IResolvable): any {
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


export function gkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaintsToHclTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints | cdktf.IResolvable): any {
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

export class GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints | cdktf.IResolvable | undefined) {
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

export class GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaintsList extends cdktf.ComplexList {
  public internalValue? : GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints[] | cdktf.IResolvable

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
  public get(index: number): GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaintsOutputReference {
    return new GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfig {
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to
  * each node. These will added in addition to any default label(s)
  * that Kubernetes may apply to the node. In case of conflict in
  * label keys, the applied set may differ depending on the Kubernetes
  * version -- it's best to assume the behavior is undefined and
  * conflicts should be avoided. For more information, including usage
  * and the valid values, see:
  *   http://kubernetes.io/v1.1/docs/user-guide/labels.html
  * An object containing a list of "key": value pairs.
  * Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#labels GkeonpremBareMetalCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Specifies the nodes operating system (default: LINUX).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#operating_system GkeonpremBareMetalCluster#operating_system}
  */
  readonly operatingSystem?: string;
  /**
  * node_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#node_configs GkeonpremBareMetalCluster#node_configs}
  */
  readonly nodeConfigs?: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs[] | cdktf.IResolvable;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#taints GkeonpremBareMetalCluster#taints}
  */
  readonly taints?: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints[] | cdktf.IResolvable;
}

export function gkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigToTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigOutputReference | GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    operating_system: cdktf.stringToTerraform(struct!.operatingSystem),
    node_configs: cdktf.listMapper(gkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigsToTerraform, true)(struct!.nodeConfigs),
    taints: cdktf.listMapper(gkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaintsToTerraform, true)(struct!.taints),
  }
}


export function gkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigToHclTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigOutputReference | GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    operating_system: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_configs: {
      value: cdktf.listMapperHcl(gkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigsToHclTerraform, true)(struct!.nodeConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigsList",
    },
    taints: {
      value: cdktf.listMapperHcl(gkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaintsToHclTerraform, true)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._operatingSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystem = this._operatingSystem;
    }
    if (this._nodeConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeConfigs = this._nodeConfigs?.internalValue;
    }
    if (this._taints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taints = this._taints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._operatingSystem = undefined;
      this._nodeConfigs.internalValue = undefined;
      this._taints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._operatingSystem = value.operatingSystem;
      this._nodeConfigs.internalValue = value.nodeConfigs;
      this._taints.internalValue = value.taints;
    }
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

  // operating_system - computed: true, optional: true, required: false
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }

  // node_configs - computed: false, optional: true, required: false
  private _nodeConfigs = new GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigsList(this, "node_configs", false);
  public get nodeConfigs() {
    return this._nodeConfigs;
  }
  public putNodeConfigs(value: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigNodeConfigs[] | cdktf.IResolvable) {
    this._nodeConfigs.internalValue = value;
  }
  public resetNodeConfigs() {
    this._nodeConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigsInput() {
    return this._nodeConfigs.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }
}
export interface GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig {
  /**
  * node_pool_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#node_pool_config GkeonpremBareMetalCluster#node_pool_config}
  */
  readonly nodePoolConfig?: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfig;
}

export function gkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigToTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigOutputReference | GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_pool_config: gkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigToTerraform(struct!.nodePoolConfig),
  }
}


export function gkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigToHclTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigOutputReference | GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_pool_config: {
      value: gkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigToHclTerraform(struct!.nodePoolConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodePoolConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolConfig = this._nodePoolConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodePoolConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodePoolConfig.internalValue = value.nodePoolConfig;
    }
  }

  // node_pool_config - computed: false, optional: true, required: false
  private _nodePoolConfig = new GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfigOutputReference(this, "node_pool_config");
  public get nodePoolConfig() {
    return this._nodePoolConfig;
  }
  public putNodePoolConfig(value: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigNodePoolConfig) {
    this._nodePoolConfig.internalValue = value;
  }
  public resetNodePoolConfig() {
    this._nodePoolConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolConfigInput() {
    return this._nodePoolConfig.internalValue;
  }
}
export interface GkeonpremBareMetalClusterLoadBalancerMetalLbConfig {
  /**
  * address_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#address_pools GkeonpremBareMetalCluster#address_pools}
  */
  readonly addressPools: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigAddressPools[] | cdktf.IResolvable;
  /**
  * load_balancer_node_pool_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#load_balancer_node_pool_config GkeonpremBareMetalCluster#load_balancer_node_pool_config}
  */
  readonly loadBalancerNodePoolConfig?: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig;
}

export function gkeonpremBareMetalClusterLoadBalancerMetalLbConfigToTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigOutputReference | GkeonpremBareMetalClusterLoadBalancerMetalLbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_pools: cdktf.listMapper(gkeonpremBareMetalClusterLoadBalancerMetalLbConfigAddressPoolsToTerraform, true)(struct!.addressPools),
    load_balancer_node_pool_config: gkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigToTerraform(struct!.loadBalancerNodePoolConfig),
  }
}


export function gkeonpremBareMetalClusterLoadBalancerMetalLbConfigToHclTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigOutputReference | GkeonpremBareMetalClusterLoadBalancerMetalLbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_pools: {
      value: cdktf.listMapperHcl(gkeonpremBareMetalClusterLoadBalancerMetalLbConfigAddressPoolsToHclTerraform, true)(struct!.addressPools),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterLoadBalancerMetalLbConfigAddressPoolsList",
    },
    load_balancer_node_pool_config: {
      value: gkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigToHclTerraform(struct!.loadBalancerNodePoolConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterLoadBalancerMetalLbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterLoadBalancerMetalLbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressPools = this._addressPools?.internalValue;
    }
    if (this._loadBalancerNodePoolConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerNodePoolConfig = this._loadBalancerNodePoolConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterLoadBalancerMetalLbConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressPools.internalValue = undefined;
      this._loadBalancerNodePoolConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressPools.internalValue = value.addressPools;
      this._loadBalancerNodePoolConfig.internalValue = value.loadBalancerNodePoolConfig;
    }
  }

  // address_pools - computed: false, optional: false, required: true
  private _addressPools = new GkeonpremBareMetalClusterLoadBalancerMetalLbConfigAddressPoolsList(this, "address_pools", false);
  public get addressPools() {
    return this._addressPools;
  }
  public putAddressPools(value: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigAddressPools[] | cdktf.IResolvable) {
    this._addressPools.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressPoolsInput() {
    return this._addressPools.internalValue;
  }

  // load_balancer_node_pool_config - computed: false, optional: true, required: false
  private _loadBalancerNodePoolConfig = new GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfigOutputReference(this, "load_balancer_node_pool_config");
  public get loadBalancerNodePoolConfig() {
    return this._loadBalancerNodePoolConfig;
  }
  public putLoadBalancerNodePoolConfig(value: GkeonpremBareMetalClusterLoadBalancerMetalLbConfigLoadBalancerNodePoolConfig) {
    this._loadBalancerNodePoolConfig.internalValue = value;
  }
  public resetLoadBalancerNodePoolConfig() {
    this._loadBalancerNodePoolConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerNodePoolConfigInput() {
    return this._loadBalancerNodePoolConfig.internalValue;
  }
}
export interface GkeonpremBareMetalClusterLoadBalancerPortConfig {
  /**
  * The port that control plane hosted load balancers will listen on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#control_plane_load_balancer_port GkeonpremBareMetalCluster#control_plane_load_balancer_port}
  */
  readonly controlPlaneLoadBalancerPort: number;
}

export function gkeonpremBareMetalClusterLoadBalancerPortConfigToTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerPortConfigOutputReference | GkeonpremBareMetalClusterLoadBalancerPortConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_load_balancer_port: cdktf.numberToTerraform(struct!.controlPlaneLoadBalancerPort),
  }
}


export function gkeonpremBareMetalClusterLoadBalancerPortConfigToHclTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerPortConfigOutputReference | GkeonpremBareMetalClusterLoadBalancerPortConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane_load_balancer_port: {
      value: cdktf.numberToHclTerraform(struct!.controlPlaneLoadBalancerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterLoadBalancerPortConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterLoadBalancerPortConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneLoadBalancerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneLoadBalancerPort = this._controlPlaneLoadBalancerPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterLoadBalancerPortConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlPlaneLoadBalancerPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlPlaneLoadBalancerPort = value.controlPlaneLoadBalancerPort;
    }
  }

  // control_plane_load_balancer_port - computed: false, optional: false, required: true
  private _controlPlaneLoadBalancerPort?: number; 
  public get controlPlaneLoadBalancerPort() {
    return this.getNumberAttribute('control_plane_load_balancer_port');
  }
  public set controlPlaneLoadBalancerPort(value: number) {
    this._controlPlaneLoadBalancerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneLoadBalancerPortInput() {
    return this._controlPlaneLoadBalancerPort;
  }
}
export interface GkeonpremBareMetalClusterLoadBalancerVipConfig {
  /**
  * The VIP which you previously set aside for the Kubernetes API of this Bare Metal User Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#control_plane_vip GkeonpremBareMetalCluster#control_plane_vip}
  */
  readonly controlPlaneVip: string;
  /**
  * The VIP which you previously set aside for ingress traffic into this Bare Metal User Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#ingress_vip GkeonpremBareMetalCluster#ingress_vip}
  */
  readonly ingressVip: string;
}

export function gkeonpremBareMetalClusterLoadBalancerVipConfigToTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerVipConfigOutputReference | GkeonpremBareMetalClusterLoadBalancerVipConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_vip: cdktf.stringToTerraform(struct!.controlPlaneVip),
    ingress_vip: cdktf.stringToTerraform(struct!.ingressVip),
  }
}


export function gkeonpremBareMetalClusterLoadBalancerVipConfigToHclTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerVipConfigOutputReference | GkeonpremBareMetalClusterLoadBalancerVipConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane_vip: {
      value: cdktf.stringToHclTerraform(struct!.controlPlaneVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ingress_vip: {
      value: cdktf.stringToHclTerraform(struct!.ingressVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterLoadBalancerVipConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterLoadBalancerVipConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneVip = this._controlPlaneVip;
    }
    if (this._ingressVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressVip = this._ingressVip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterLoadBalancerVipConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlPlaneVip = undefined;
      this._ingressVip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlPlaneVip = value.controlPlaneVip;
      this._ingressVip = value.ingressVip;
    }
  }

  // control_plane_vip - computed: false, optional: false, required: true
  private _controlPlaneVip?: string; 
  public get controlPlaneVip() {
    return this.getStringAttribute('control_plane_vip');
  }
  public set controlPlaneVip(value: string) {
    this._controlPlaneVip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneVipInput() {
    return this._controlPlaneVip;
  }

  // ingress_vip - computed: false, optional: false, required: true
  private _ingressVip?: string; 
  public get ingressVip() {
    return this.getStringAttribute('ingress_vip');
  }
  public set ingressVip(value: string) {
    this._ingressVip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressVipInput() {
    return this._ingressVip;
  }
}
export interface GkeonpremBareMetalClusterLoadBalancer {
  /**
  * bgp_lb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#bgp_lb_config GkeonpremBareMetalCluster#bgp_lb_config}
  */
  readonly bgpLbConfig?: GkeonpremBareMetalClusterLoadBalancerBgpLbConfig;
  /**
  * manual_lb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#manual_lb_config GkeonpremBareMetalCluster#manual_lb_config}
  */
  readonly manualLbConfig?: GkeonpremBareMetalClusterLoadBalancerManualLbConfig;
  /**
  * metal_lb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#metal_lb_config GkeonpremBareMetalCluster#metal_lb_config}
  */
  readonly metalLbConfig?: GkeonpremBareMetalClusterLoadBalancerMetalLbConfig;
  /**
  * port_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#port_config GkeonpremBareMetalCluster#port_config}
  */
  readonly portConfig: GkeonpremBareMetalClusterLoadBalancerPortConfig;
  /**
  * vip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#vip_config GkeonpremBareMetalCluster#vip_config}
  */
  readonly vipConfig: GkeonpremBareMetalClusterLoadBalancerVipConfig;
}

export function gkeonpremBareMetalClusterLoadBalancerToTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerOutputReference | GkeonpremBareMetalClusterLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgp_lb_config: gkeonpremBareMetalClusterLoadBalancerBgpLbConfigToTerraform(struct!.bgpLbConfig),
    manual_lb_config: gkeonpremBareMetalClusterLoadBalancerManualLbConfigToTerraform(struct!.manualLbConfig),
    metal_lb_config: gkeonpremBareMetalClusterLoadBalancerMetalLbConfigToTerraform(struct!.metalLbConfig),
    port_config: gkeonpremBareMetalClusterLoadBalancerPortConfigToTerraform(struct!.portConfig),
    vip_config: gkeonpremBareMetalClusterLoadBalancerVipConfigToTerraform(struct!.vipConfig),
  }
}


export function gkeonpremBareMetalClusterLoadBalancerToHclTerraform(struct?: GkeonpremBareMetalClusterLoadBalancerOutputReference | GkeonpremBareMetalClusterLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgp_lb_config: {
      value: gkeonpremBareMetalClusterLoadBalancerBgpLbConfigToHclTerraform(struct!.bgpLbConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterLoadBalancerBgpLbConfigList",
    },
    manual_lb_config: {
      value: gkeonpremBareMetalClusterLoadBalancerManualLbConfigToHclTerraform(struct!.manualLbConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterLoadBalancerManualLbConfigList",
    },
    metal_lb_config: {
      value: gkeonpremBareMetalClusterLoadBalancerMetalLbConfigToHclTerraform(struct!.metalLbConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterLoadBalancerMetalLbConfigList",
    },
    port_config: {
      value: gkeonpremBareMetalClusterLoadBalancerPortConfigToHclTerraform(struct!.portConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterLoadBalancerPortConfigList",
    },
    vip_config: {
      value: gkeonpremBareMetalClusterLoadBalancerVipConfigToHclTerraform(struct!.vipConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterLoadBalancerVipConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgpLbConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpLbConfig = this._bgpLbConfig?.internalValue;
    }
    if (this._manualLbConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualLbConfig = this._manualLbConfig?.internalValue;
    }
    if (this._metalLbConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metalLbConfig = this._metalLbConfig?.internalValue;
    }
    if (this._portConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portConfig = this._portConfig?.internalValue;
    }
    if (this._vipConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipConfig = this._vipConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bgpLbConfig.internalValue = undefined;
      this._manualLbConfig.internalValue = undefined;
      this._metalLbConfig.internalValue = undefined;
      this._portConfig.internalValue = undefined;
      this._vipConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bgpLbConfig.internalValue = value.bgpLbConfig;
      this._manualLbConfig.internalValue = value.manualLbConfig;
      this._metalLbConfig.internalValue = value.metalLbConfig;
      this._portConfig.internalValue = value.portConfig;
      this._vipConfig.internalValue = value.vipConfig;
    }
  }

  // bgp_lb_config - computed: false, optional: true, required: false
  private _bgpLbConfig = new GkeonpremBareMetalClusterLoadBalancerBgpLbConfigOutputReference(this, "bgp_lb_config");
  public get bgpLbConfig() {
    return this._bgpLbConfig;
  }
  public putBgpLbConfig(value: GkeonpremBareMetalClusterLoadBalancerBgpLbConfig) {
    this._bgpLbConfig.internalValue = value;
  }
  public resetBgpLbConfig() {
    this._bgpLbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpLbConfigInput() {
    return this._bgpLbConfig.internalValue;
  }

  // manual_lb_config - computed: false, optional: true, required: false
  private _manualLbConfig = new GkeonpremBareMetalClusterLoadBalancerManualLbConfigOutputReference(this, "manual_lb_config");
  public get manualLbConfig() {
    return this._manualLbConfig;
  }
  public putManualLbConfig(value: GkeonpremBareMetalClusterLoadBalancerManualLbConfig) {
    this._manualLbConfig.internalValue = value;
  }
  public resetManualLbConfig() {
    this._manualLbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualLbConfigInput() {
    return this._manualLbConfig.internalValue;
  }

  // metal_lb_config - computed: false, optional: true, required: false
  private _metalLbConfig = new GkeonpremBareMetalClusterLoadBalancerMetalLbConfigOutputReference(this, "metal_lb_config");
  public get metalLbConfig() {
    return this._metalLbConfig;
  }
  public putMetalLbConfig(value: GkeonpremBareMetalClusterLoadBalancerMetalLbConfig) {
    this._metalLbConfig.internalValue = value;
  }
  public resetMetalLbConfig() {
    this._metalLbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metalLbConfigInput() {
    return this._metalLbConfig.internalValue;
  }

  // port_config - computed: false, optional: false, required: true
  private _portConfig = new GkeonpremBareMetalClusterLoadBalancerPortConfigOutputReference(this, "port_config");
  public get portConfig() {
    return this._portConfig;
  }
  public putPortConfig(value: GkeonpremBareMetalClusterLoadBalancerPortConfig) {
    this._portConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portConfigInput() {
    return this._portConfig.internalValue;
  }

  // vip_config - computed: false, optional: false, required: true
  private _vipConfig = new GkeonpremBareMetalClusterLoadBalancerVipConfigOutputReference(this, "vip_config");
  public get vipConfig() {
    return this._vipConfig;
  }
  public putVipConfig(value: GkeonpremBareMetalClusterLoadBalancerVipConfig) {
    this._vipConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipConfigInput() {
    return this._vipConfig.internalValue;
  }
}
export interface GkeonpremBareMetalClusterMaintenanceConfig {
  /**
  * All IPv4 address from these ranges will be placed into maintenance mode.
  * Nodes in maintenance mode will be cordoned and drained. When both of these
  * are true, the "baremetal.cluster.gke.io/maintenance" annotation will be set
  * on the node resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#maintenance_address_cidr_blocks GkeonpremBareMetalCluster#maintenance_address_cidr_blocks}
  */
  readonly maintenanceAddressCidrBlocks: string[];
}

export function gkeonpremBareMetalClusterMaintenanceConfigToTerraform(struct?: GkeonpremBareMetalClusterMaintenanceConfigOutputReference | GkeonpremBareMetalClusterMaintenanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_address_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.maintenanceAddressCidrBlocks),
  }
}


export function gkeonpremBareMetalClusterMaintenanceConfigToHclTerraform(struct?: GkeonpremBareMetalClusterMaintenanceConfigOutputReference | GkeonpremBareMetalClusterMaintenanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_address_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.maintenanceAddressCidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterMaintenanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterMaintenanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceAddressCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceAddressCidrBlocks = this._maintenanceAddressCidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterMaintenanceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceAddressCidrBlocks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceAddressCidrBlocks = value.maintenanceAddressCidrBlocks;
    }
  }

  // maintenance_address_cidr_blocks - computed: false, optional: false, required: true
  private _maintenanceAddressCidrBlocks?: string[]; 
  public get maintenanceAddressCidrBlocks() {
    return this.getListAttribute('maintenance_address_cidr_blocks');
  }
  public set maintenanceAddressCidrBlocks(value: string[]) {
    this._maintenanceAddressCidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceAddressCidrBlocksInput() {
    return this._maintenanceAddressCidrBlocks;
  }
}
export interface GkeonpremBareMetalClusterNetworkConfigIslandModeCidr {
  /**
  * All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#pod_address_cidr_blocks GkeonpremBareMetalCluster#pod_address_cidr_blocks}
  */
  readonly podAddressCidrBlocks: string[];
  /**
  * All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#service_address_cidr_blocks GkeonpremBareMetalCluster#service_address_cidr_blocks}
  */
  readonly serviceAddressCidrBlocks: string[];
}

export function gkeonpremBareMetalClusterNetworkConfigIslandModeCidrToTerraform(struct?: GkeonpremBareMetalClusterNetworkConfigIslandModeCidrOutputReference | GkeonpremBareMetalClusterNetworkConfigIslandModeCidr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_address_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podAddressCidrBlocks),
    service_address_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAddressCidrBlocks),
  }
}


export function gkeonpremBareMetalClusterNetworkConfigIslandModeCidrToHclTerraform(struct?: GkeonpremBareMetalClusterNetworkConfigIslandModeCidrOutputReference | GkeonpremBareMetalClusterNetworkConfigIslandModeCidr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_address_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.podAddressCidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_address_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceAddressCidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterNetworkConfigIslandModeCidrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterNetworkConfigIslandModeCidr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAddressCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAddressCidrBlocks = this._podAddressCidrBlocks;
    }
    if (this._serviceAddressCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAddressCidrBlocks = this._serviceAddressCidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterNetworkConfigIslandModeCidr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._podAddressCidrBlocks = undefined;
      this._serviceAddressCidrBlocks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._podAddressCidrBlocks = value.podAddressCidrBlocks;
      this._serviceAddressCidrBlocks = value.serviceAddressCidrBlocks;
    }
  }

  // pod_address_cidr_blocks - computed: false, optional: false, required: true
  private _podAddressCidrBlocks?: string[]; 
  public get podAddressCidrBlocks() {
    return this.getListAttribute('pod_address_cidr_blocks');
  }
  public set podAddressCidrBlocks(value: string[]) {
    this._podAddressCidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAddressCidrBlocksInput() {
    return this._podAddressCidrBlocks;
  }

  // service_address_cidr_blocks - computed: false, optional: false, required: true
  private _serviceAddressCidrBlocks?: string[]; 
  public get serviceAddressCidrBlocks() {
    return this.getListAttribute('service_address_cidr_blocks');
  }
  public set serviceAddressCidrBlocks(value: string[]) {
    this._serviceAddressCidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAddressCidrBlocksInput() {
    return this._serviceAddressCidrBlocks;
  }
}
export interface GkeonpremBareMetalClusterNetworkConfigMultipleNetworkInterfacesConfig {
  /**
  * Whether to enable multiple network interfaces for your pods.
  * When set network_config.advanced_networking is automatically
  * set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#enabled GkeonpremBareMetalCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function gkeonpremBareMetalClusterNetworkConfigMultipleNetworkInterfacesConfigToTerraform(struct?: GkeonpremBareMetalClusterNetworkConfigMultipleNetworkInterfacesConfigOutputReference | GkeonpremBareMetalClusterNetworkConfigMultipleNetworkInterfacesConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function gkeonpremBareMetalClusterNetworkConfigMultipleNetworkInterfacesConfigToHclTerraform(struct?: GkeonpremBareMetalClusterNetworkConfigMultipleNetworkInterfacesConfigOutputReference | GkeonpremBareMetalClusterNetworkConfigMultipleNetworkInterfacesConfig): any {
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

export class GkeonpremBareMetalClusterNetworkConfigMultipleNetworkInterfacesConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterNetworkConfigMultipleNetworkInterfacesConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterNetworkConfigMultipleNetworkInterfacesConfig | undefined) {
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
export interface GkeonpremBareMetalClusterNetworkConfigSrIovConfig {
  /**
  * Whether to install the SR-IOV operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#enabled GkeonpremBareMetalCluster#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function gkeonpremBareMetalClusterNetworkConfigSrIovConfigToTerraform(struct?: GkeonpremBareMetalClusterNetworkConfigSrIovConfigOutputReference | GkeonpremBareMetalClusterNetworkConfigSrIovConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function gkeonpremBareMetalClusterNetworkConfigSrIovConfigToHclTerraform(struct?: GkeonpremBareMetalClusterNetworkConfigSrIovConfigOutputReference | GkeonpremBareMetalClusterNetworkConfigSrIovConfig): any {
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

export class GkeonpremBareMetalClusterNetworkConfigSrIovConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterNetworkConfigSrIovConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterNetworkConfigSrIovConfig | undefined) {
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
export interface GkeonpremBareMetalClusterNetworkConfig {
  /**
  * Enables the use of advanced Anthos networking features, such as Bundled
  * Load Balancing with BGP or the egress NAT gateway.
  * Setting configuration for advanced networking features will automatically
  * set this flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#advanced_networking GkeonpremBareMetalCluster#advanced_networking}
  */
  readonly advancedNetworking?: boolean | cdktf.IResolvable;
  /**
  * island_mode_cidr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#island_mode_cidr GkeonpremBareMetalCluster#island_mode_cidr}
  */
  readonly islandModeCidr?: GkeonpremBareMetalClusterNetworkConfigIslandModeCidr;
  /**
  * multiple_network_interfaces_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#multiple_network_interfaces_config GkeonpremBareMetalCluster#multiple_network_interfaces_config}
  */
  readonly multipleNetworkInterfacesConfig?: GkeonpremBareMetalClusterNetworkConfigMultipleNetworkInterfacesConfig;
  /**
  * sr_iov_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#sr_iov_config GkeonpremBareMetalCluster#sr_iov_config}
  */
  readonly srIovConfig?: GkeonpremBareMetalClusterNetworkConfigSrIovConfig;
}

export function gkeonpremBareMetalClusterNetworkConfigToTerraform(struct?: GkeonpremBareMetalClusterNetworkConfigOutputReference | GkeonpremBareMetalClusterNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced_networking: cdktf.booleanToTerraform(struct!.advancedNetworking),
    island_mode_cidr: gkeonpremBareMetalClusterNetworkConfigIslandModeCidrToTerraform(struct!.islandModeCidr),
    multiple_network_interfaces_config: gkeonpremBareMetalClusterNetworkConfigMultipleNetworkInterfacesConfigToTerraform(struct!.multipleNetworkInterfacesConfig),
    sr_iov_config: gkeonpremBareMetalClusterNetworkConfigSrIovConfigToTerraform(struct!.srIovConfig),
  }
}


export function gkeonpremBareMetalClusterNetworkConfigToHclTerraform(struct?: GkeonpremBareMetalClusterNetworkConfigOutputReference | GkeonpremBareMetalClusterNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced_networking: {
      value: cdktf.booleanToHclTerraform(struct!.advancedNetworking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    island_mode_cidr: {
      value: gkeonpremBareMetalClusterNetworkConfigIslandModeCidrToHclTerraform(struct!.islandModeCidr),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterNetworkConfigIslandModeCidrList",
    },
    multiple_network_interfaces_config: {
      value: gkeonpremBareMetalClusterNetworkConfigMultipleNetworkInterfacesConfigToHclTerraform(struct!.multipleNetworkInterfacesConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterNetworkConfigMultipleNetworkInterfacesConfigList",
    },
    sr_iov_config: {
      value: gkeonpremBareMetalClusterNetworkConfigSrIovConfigToHclTerraform(struct!.srIovConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterNetworkConfigSrIovConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advancedNetworking !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedNetworking = this._advancedNetworking;
    }
    if (this._islandModeCidr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.islandModeCidr = this._islandModeCidr?.internalValue;
    }
    if (this._multipleNetworkInterfacesConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleNetworkInterfacesConfig = this._multipleNetworkInterfacesConfig?.internalValue;
    }
    if (this._srIovConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srIovConfig = this._srIovConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advancedNetworking = undefined;
      this._islandModeCidr.internalValue = undefined;
      this._multipleNetworkInterfacesConfig.internalValue = undefined;
      this._srIovConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advancedNetworking = value.advancedNetworking;
      this._islandModeCidr.internalValue = value.islandModeCidr;
      this._multipleNetworkInterfacesConfig.internalValue = value.multipleNetworkInterfacesConfig;
      this._srIovConfig.internalValue = value.srIovConfig;
    }
  }

  // advanced_networking - computed: false, optional: true, required: false
  private _advancedNetworking?: boolean | cdktf.IResolvable; 
  public get advancedNetworking() {
    return this.getBooleanAttribute('advanced_networking');
  }
  public set advancedNetworking(value: boolean | cdktf.IResolvable) {
    this._advancedNetworking = value;
  }
  public resetAdvancedNetworking() {
    this._advancedNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedNetworkingInput() {
    return this._advancedNetworking;
  }

  // island_mode_cidr - computed: false, optional: true, required: false
  private _islandModeCidr = new GkeonpremBareMetalClusterNetworkConfigIslandModeCidrOutputReference(this, "island_mode_cidr");
  public get islandModeCidr() {
    return this._islandModeCidr;
  }
  public putIslandModeCidr(value: GkeonpremBareMetalClusterNetworkConfigIslandModeCidr) {
    this._islandModeCidr.internalValue = value;
  }
  public resetIslandModeCidr() {
    this._islandModeCidr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get islandModeCidrInput() {
    return this._islandModeCidr.internalValue;
  }

  // multiple_network_interfaces_config - computed: false, optional: true, required: false
  private _multipleNetworkInterfacesConfig = new GkeonpremBareMetalClusterNetworkConfigMultipleNetworkInterfacesConfigOutputReference(this, "multiple_network_interfaces_config");
  public get multipleNetworkInterfacesConfig() {
    return this._multipleNetworkInterfacesConfig;
  }
  public putMultipleNetworkInterfacesConfig(value: GkeonpremBareMetalClusterNetworkConfigMultipleNetworkInterfacesConfig) {
    this._multipleNetworkInterfacesConfig.internalValue = value;
  }
  public resetMultipleNetworkInterfacesConfig() {
    this._multipleNetworkInterfacesConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleNetworkInterfacesConfigInput() {
    return this._multipleNetworkInterfacesConfig.internalValue;
  }

  // sr_iov_config - computed: false, optional: true, required: false
  private _srIovConfig = new GkeonpremBareMetalClusterNetworkConfigSrIovConfigOutputReference(this, "sr_iov_config");
  public get srIovConfig() {
    return this._srIovConfig;
  }
  public putSrIovConfig(value: GkeonpremBareMetalClusterNetworkConfigSrIovConfig) {
    this._srIovConfig.internalValue = value;
  }
  public resetSrIovConfig() {
    this._srIovConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srIovConfigInput() {
    return this._srIovConfig.internalValue;
  }
}
export interface GkeonpremBareMetalClusterNodeAccessConfig {
  /**
  * LoginUser is the user name used to access node machines.
  * It defaults to "root" if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#login_user GkeonpremBareMetalCluster#login_user}
  */
  readonly loginUser?: string;
}

export function gkeonpremBareMetalClusterNodeAccessConfigToTerraform(struct?: GkeonpremBareMetalClusterNodeAccessConfigOutputReference | GkeonpremBareMetalClusterNodeAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login_user: cdktf.stringToTerraform(struct!.loginUser),
  }
}


export function gkeonpremBareMetalClusterNodeAccessConfigToHclTerraform(struct?: GkeonpremBareMetalClusterNodeAccessConfigOutputReference | GkeonpremBareMetalClusterNodeAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    login_user: {
      value: cdktf.stringToHclTerraform(struct!.loginUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterNodeAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterNodeAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loginUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginUser = this._loginUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterNodeAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loginUser = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loginUser = value.loginUser;
    }
  }

  // login_user - computed: true, optional: true, required: false
  private _loginUser?: string; 
  public get loginUser() {
    return this.getStringAttribute('login_user');
  }
  public set loginUser(value: string) {
    this._loginUser = value;
  }
  public resetLoginUser() {
    this._loginUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginUserInput() {
    return this._loginUser;
  }
}
export interface GkeonpremBareMetalClusterNodeConfig {
  /**
  * The available runtimes that can be used to run containers in a Bare Metal User Cluster. Possible values: ["CONTAINER_RUNTIME_UNSPECIFIED", "DOCKER", "CONTAINERD"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#container_runtime GkeonpremBareMetalCluster#container_runtime}
  */
  readonly containerRuntime?: string;
  /**
  * The maximum number of pods a node can run. The size of the CIDR range
  * assigned to the node will be derived from this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#max_pods_per_node GkeonpremBareMetalCluster#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
}

export function gkeonpremBareMetalClusterNodeConfigToTerraform(struct?: GkeonpremBareMetalClusterNodeConfigOutputReference | GkeonpremBareMetalClusterNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_runtime: cdktf.stringToTerraform(struct!.containerRuntime),
    max_pods_per_node: cdktf.numberToTerraform(struct!.maxPodsPerNode),
  }
}


export function gkeonpremBareMetalClusterNodeConfigToHclTerraform(struct?: GkeonpremBareMetalClusterNodeConfigOutputReference | GkeonpremBareMetalClusterNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_runtime: {
      value: cdktf.stringToHclTerraform(struct!.containerRuntime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_pods_per_node: {
      value: cdktf.numberToHclTerraform(struct!.maxPodsPerNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerRuntime !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerRuntime = this._containerRuntime;
    }
    if (this._maxPodsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPodsPerNode = this._maxPodsPerNode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerRuntime = undefined;
      this._maxPodsPerNode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerRuntime = value.containerRuntime;
      this._maxPodsPerNode = value.maxPodsPerNode;
    }
  }

  // container_runtime - computed: true, optional: true, required: false
  private _containerRuntime?: string; 
  public get containerRuntime() {
    return this.getStringAttribute('container_runtime');
  }
  public set containerRuntime(value: string) {
    this._containerRuntime = value;
  }
  public resetContainerRuntime() {
    this._containerRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRuntimeInput() {
    return this._containerRuntime;
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
}
export interface GkeonpremBareMetalClusterOsEnvironmentConfig {
  /**
  * Whether the package repo should not be included when initializing
  * bare metal machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#package_repo_excluded GkeonpremBareMetalCluster#package_repo_excluded}
  */
  readonly packageRepoExcluded: boolean | cdktf.IResolvable;
}

export function gkeonpremBareMetalClusterOsEnvironmentConfigToTerraform(struct?: GkeonpremBareMetalClusterOsEnvironmentConfigOutputReference | GkeonpremBareMetalClusterOsEnvironmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    package_repo_excluded: cdktf.booleanToTerraform(struct!.packageRepoExcluded),
  }
}


export function gkeonpremBareMetalClusterOsEnvironmentConfigToHclTerraform(struct?: GkeonpremBareMetalClusterOsEnvironmentConfigOutputReference | GkeonpremBareMetalClusterOsEnvironmentConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    package_repo_excluded: {
      value: cdktf.booleanToHclTerraform(struct!.packageRepoExcluded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterOsEnvironmentConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterOsEnvironmentConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packageRepoExcluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageRepoExcluded = this._packageRepoExcluded;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterOsEnvironmentConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._packageRepoExcluded = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._packageRepoExcluded = value.packageRepoExcluded;
    }
  }

  // package_repo_excluded - computed: false, optional: false, required: true
  private _packageRepoExcluded?: boolean | cdktf.IResolvable; 
  public get packageRepoExcluded() {
    return this.getBooleanAttribute('package_repo_excluded');
  }
  public set packageRepoExcluded(value: boolean | cdktf.IResolvable) {
    this._packageRepoExcluded = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageRepoExcludedInput() {
    return this._packageRepoExcluded;
  }
}
export interface GkeonpremBareMetalClusterProxy {
  /**
  * A list of IPs, hostnames, and domains that should skip the proxy.
  * Examples: ["127.0.0.1", "example.com", ".corp", "localhost"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#no_proxy GkeonpremBareMetalCluster#no_proxy}
  */
  readonly noProxy?: string[];
  /**
  * Specifies the address of your proxy server.
  * Examples: http://domain
  * WARNING: Do not provide credentials in the format
  * http://(username:password@)domain these will be rejected by the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#uri GkeonpremBareMetalCluster#uri}
  */
  readonly uri: string;
}

export function gkeonpremBareMetalClusterProxyToTerraform(struct?: GkeonpremBareMetalClusterProxyOutputReference | GkeonpremBareMetalClusterProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_proxy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.noProxy),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function gkeonpremBareMetalClusterProxyToHclTerraform(struct?: GkeonpremBareMetalClusterProxyOutputReference | GkeonpremBareMetalClusterProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_proxy: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.noProxy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noProxy = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noProxy = value.noProxy;
      this._uri = value.uri;
    }
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string[]; 
  public get noProxy() {
    return this.getListAttribute('no_proxy');
  }
  public set noProxy(value: string[]) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface GkeonpremBareMetalClusterSecurityConfigAuthorizationAdminUsers {
  /**
  * The name of the user, e.g. 'my-gcp-id@gmail.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#username GkeonpremBareMetalCluster#username}
  */
  readonly username: string;
}

export function gkeonpremBareMetalClusterSecurityConfigAuthorizationAdminUsersToTerraform(struct?: GkeonpremBareMetalClusterSecurityConfigAuthorizationAdminUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function gkeonpremBareMetalClusterSecurityConfigAuthorizationAdminUsersToHclTerraform(struct?: GkeonpremBareMetalClusterSecurityConfigAuthorizationAdminUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterSecurityConfigAuthorizationAdminUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalClusterSecurityConfigAuthorizationAdminUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterSecurityConfigAuthorizationAdminUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._username = value.username;
    }
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class GkeonpremBareMetalClusterSecurityConfigAuthorizationAdminUsersList extends cdktf.ComplexList {
  public internalValue? : GkeonpremBareMetalClusterSecurityConfigAuthorizationAdminUsers[] | cdktf.IResolvable

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
  public get(index: number): GkeonpremBareMetalClusterSecurityConfigAuthorizationAdminUsersOutputReference {
    return new GkeonpremBareMetalClusterSecurityConfigAuthorizationAdminUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalClusterSecurityConfigAuthorization {
  /**
  * admin_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#admin_users GkeonpremBareMetalCluster#admin_users}
  */
  readonly adminUsers: GkeonpremBareMetalClusterSecurityConfigAuthorizationAdminUsers[] | cdktf.IResolvable;
}

export function gkeonpremBareMetalClusterSecurityConfigAuthorizationToTerraform(struct?: GkeonpremBareMetalClusterSecurityConfigAuthorizationOutputReference | GkeonpremBareMetalClusterSecurityConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_users: cdktf.listMapper(gkeonpremBareMetalClusterSecurityConfigAuthorizationAdminUsersToTerraform, true)(struct!.adminUsers),
  }
}


export function gkeonpremBareMetalClusterSecurityConfigAuthorizationToHclTerraform(struct?: GkeonpremBareMetalClusterSecurityConfigAuthorizationOutputReference | GkeonpremBareMetalClusterSecurityConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_users: {
      value: cdktf.listMapperHcl(gkeonpremBareMetalClusterSecurityConfigAuthorizationAdminUsersToHclTerraform, true)(struct!.adminUsers),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterSecurityConfigAuthorizationAdminUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterSecurityConfigAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterSecurityConfigAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsers = this._adminUsers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterSecurityConfigAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminUsers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminUsers.internalValue = value.adminUsers;
    }
  }

  // admin_users - computed: false, optional: false, required: true
  private _adminUsers = new GkeonpremBareMetalClusterSecurityConfigAuthorizationAdminUsersList(this, "admin_users", false);
  public get adminUsers() {
    return this._adminUsers;
  }
  public putAdminUsers(value: GkeonpremBareMetalClusterSecurityConfigAuthorizationAdminUsers[] | cdktf.IResolvable) {
    this._adminUsers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsersInput() {
    return this._adminUsers.internalValue;
  }
}
export interface GkeonpremBareMetalClusterSecurityConfig {
  /**
  * authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#authorization GkeonpremBareMetalCluster#authorization}
  */
  readonly authorization?: GkeonpremBareMetalClusterSecurityConfigAuthorization;
}

export function gkeonpremBareMetalClusterSecurityConfigToTerraform(struct?: GkeonpremBareMetalClusterSecurityConfigOutputReference | GkeonpremBareMetalClusterSecurityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization: gkeonpremBareMetalClusterSecurityConfigAuthorizationToTerraform(struct!.authorization),
  }
}


export function gkeonpremBareMetalClusterSecurityConfigToHclTerraform(struct?: GkeonpremBareMetalClusterSecurityConfigOutputReference | GkeonpremBareMetalClusterSecurityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization: {
      value: gkeonpremBareMetalClusterSecurityConfigAuthorizationToHclTerraform(struct!.authorization),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterSecurityConfigAuthorizationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterSecurityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterSecurityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterSecurityConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorization.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorization.internalValue = value.authorization;
    }
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new GkeonpremBareMetalClusterSecurityConfigAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: GkeonpremBareMetalClusterSecurityConfigAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }
}
export interface GkeonpremBareMetalClusterStorageLvpNodeMountsConfig {
  /**
  * The host machine path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#path GkeonpremBareMetalCluster#path}
  */
  readonly path: string;
  /**
  * The StorageClass name that PVs will be created with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#storage_class GkeonpremBareMetalCluster#storage_class}
  */
  readonly storageClass: string;
}

export function gkeonpremBareMetalClusterStorageLvpNodeMountsConfigToTerraform(struct?: GkeonpremBareMetalClusterStorageLvpNodeMountsConfigOutputReference | GkeonpremBareMetalClusterStorageLvpNodeMountsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function gkeonpremBareMetalClusterStorageLvpNodeMountsConfigToHclTerraform(struct?: GkeonpremBareMetalClusterStorageLvpNodeMountsConfigOutputReference | GkeonpremBareMetalClusterStorageLvpNodeMountsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterStorageLvpNodeMountsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterStorageLvpNodeMountsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterStorageLvpNodeMountsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._storageClass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._storageClass = value.storageClass;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // storage_class - computed: false, optional: false, required: true
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface GkeonpremBareMetalClusterStorageLvpShareConfigLvpConfig {
  /**
  * The host machine path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#path GkeonpremBareMetalCluster#path}
  */
  readonly path: string;
  /**
  * The StorageClass name that PVs will be created with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#storage_class GkeonpremBareMetalCluster#storage_class}
  */
  readonly storageClass: string;
}

export function gkeonpremBareMetalClusterStorageLvpShareConfigLvpConfigToTerraform(struct?: GkeonpremBareMetalClusterStorageLvpShareConfigLvpConfigOutputReference | GkeonpremBareMetalClusterStorageLvpShareConfigLvpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function gkeonpremBareMetalClusterStorageLvpShareConfigLvpConfigToHclTerraform(struct?: GkeonpremBareMetalClusterStorageLvpShareConfigLvpConfigOutputReference | GkeonpremBareMetalClusterStorageLvpShareConfigLvpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterStorageLvpShareConfigLvpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterStorageLvpShareConfigLvpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterStorageLvpShareConfigLvpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._storageClass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._storageClass = value.storageClass;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // storage_class - computed: false, optional: false, required: true
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface GkeonpremBareMetalClusterStorageLvpShareConfig {
  /**
  * The number of subdirectories to create under path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#shared_path_pv_count GkeonpremBareMetalCluster#shared_path_pv_count}
  */
  readonly sharedPathPvCount?: number;
  /**
  * lvp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#lvp_config GkeonpremBareMetalCluster#lvp_config}
  */
  readonly lvpConfig: GkeonpremBareMetalClusterStorageLvpShareConfigLvpConfig;
}

export function gkeonpremBareMetalClusterStorageLvpShareConfigToTerraform(struct?: GkeonpremBareMetalClusterStorageLvpShareConfigOutputReference | GkeonpremBareMetalClusterStorageLvpShareConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shared_path_pv_count: cdktf.numberToTerraform(struct!.sharedPathPvCount),
    lvp_config: gkeonpremBareMetalClusterStorageLvpShareConfigLvpConfigToTerraform(struct!.lvpConfig),
  }
}


export function gkeonpremBareMetalClusterStorageLvpShareConfigToHclTerraform(struct?: GkeonpremBareMetalClusterStorageLvpShareConfigOutputReference | GkeonpremBareMetalClusterStorageLvpShareConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shared_path_pv_count: {
      value: cdktf.numberToHclTerraform(struct!.sharedPathPvCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lvp_config: {
      value: gkeonpremBareMetalClusterStorageLvpShareConfigLvpConfigToHclTerraform(struct!.lvpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterStorageLvpShareConfigLvpConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterStorageLvpShareConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterStorageLvpShareConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sharedPathPvCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPathPvCount = this._sharedPathPvCount;
    }
    if (this._lvpConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lvpConfig = this._lvpConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterStorageLvpShareConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sharedPathPvCount = undefined;
      this._lvpConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sharedPathPvCount = value.sharedPathPvCount;
      this._lvpConfig.internalValue = value.lvpConfig;
    }
  }

  // shared_path_pv_count - computed: false, optional: true, required: false
  private _sharedPathPvCount?: number; 
  public get sharedPathPvCount() {
    return this.getNumberAttribute('shared_path_pv_count');
  }
  public set sharedPathPvCount(value: number) {
    this._sharedPathPvCount = value;
  }
  public resetSharedPathPvCount() {
    this._sharedPathPvCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPathPvCountInput() {
    return this._sharedPathPvCount;
  }

  // lvp_config - computed: false, optional: false, required: true
  private _lvpConfig = new GkeonpremBareMetalClusterStorageLvpShareConfigLvpConfigOutputReference(this, "lvp_config");
  public get lvpConfig() {
    return this._lvpConfig;
  }
  public putLvpConfig(value: GkeonpremBareMetalClusterStorageLvpShareConfigLvpConfig) {
    this._lvpConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lvpConfigInput() {
    return this._lvpConfig.internalValue;
  }
}
export interface GkeonpremBareMetalClusterStorage {
  /**
  * lvp_node_mounts_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#lvp_node_mounts_config GkeonpremBareMetalCluster#lvp_node_mounts_config}
  */
  readonly lvpNodeMountsConfig: GkeonpremBareMetalClusterStorageLvpNodeMountsConfig;
  /**
  * lvp_share_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#lvp_share_config GkeonpremBareMetalCluster#lvp_share_config}
  */
  readonly lvpShareConfig: GkeonpremBareMetalClusterStorageLvpShareConfig;
}

export function gkeonpremBareMetalClusterStorageToTerraform(struct?: GkeonpremBareMetalClusterStorageOutputReference | GkeonpremBareMetalClusterStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lvp_node_mounts_config: gkeonpremBareMetalClusterStorageLvpNodeMountsConfigToTerraform(struct!.lvpNodeMountsConfig),
    lvp_share_config: gkeonpremBareMetalClusterStorageLvpShareConfigToTerraform(struct!.lvpShareConfig),
  }
}


export function gkeonpremBareMetalClusterStorageToHclTerraform(struct?: GkeonpremBareMetalClusterStorageOutputReference | GkeonpremBareMetalClusterStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lvp_node_mounts_config: {
      value: gkeonpremBareMetalClusterStorageLvpNodeMountsConfigToHclTerraform(struct!.lvpNodeMountsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterStorageLvpNodeMountsConfigList",
    },
    lvp_share_config: {
      value: gkeonpremBareMetalClusterStorageLvpShareConfigToHclTerraform(struct!.lvpShareConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalClusterStorageLvpShareConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lvpNodeMountsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lvpNodeMountsConfig = this._lvpNodeMountsConfig?.internalValue;
    }
    if (this._lvpShareConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lvpShareConfig = this._lvpShareConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._lvpNodeMountsConfig.internalValue = undefined;
      this._lvpShareConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._lvpNodeMountsConfig.internalValue = value.lvpNodeMountsConfig;
      this._lvpShareConfig.internalValue = value.lvpShareConfig;
    }
  }

  // lvp_node_mounts_config - computed: false, optional: false, required: true
  private _lvpNodeMountsConfig = new GkeonpremBareMetalClusterStorageLvpNodeMountsConfigOutputReference(this, "lvp_node_mounts_config");
  public get lvpNodeMountsConfig() {
    return this._lvpNodeMountsConfig;
  }
  public putLvpNodeMountsConfig(value: GkeonpremBareMetalClusterStorageLvpNodeMountsConfig) {
    this._lvpNodeMountsConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lvpNodeMountsConfigInput() {
    return this._lvpNodeMountsConfig.internalValue;
  }

  // lvp_share_config - computed: false, optional: false, required: true
  private _lvpShareConfig = new GkeonpremBareMetalClusterStorageLvpShareConfigOutputReference(this, "lvp_share_config");
  public get lvpShareConfig() {
    return this._lvpShareConfig;
  }
  public putLvpShareConfig(value: GkeonpremBareMetalClusterStorageLvpShareConfig) {
    this._lvpShareConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lvpShareConfigInput() {
    return this._lvpShareConfig.internalValue;
  }
}
export interface GkeonpremBareMetalClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#create GkeonpremBareMetalCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#delete GkeonpremBareMetalCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#update GkeonpremBareMetalCluster#update}
  */
  readonly update?: string;
}

export function gkeonpremBareMetalClusterTimeoutsToTerraform(struct?: GkeonpremBareMetalClusterTimeouts | cdktf.IResolvable): any {
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


export function gkeonpremBareMetalClusterTimeoutsToHclTerraform(struct?: GkeonpremBareMetalClusterTimeouts | cdktf.IResolvable): any {
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

export class GkeonpremBareMetalClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GkeonpremBareMetalClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GkeonpremBareMetalClusterTimeouts | cdktf.IResolvable | undefined) {
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
export interface GkeonpremBareMetalClusterUpgradePolicy {
  /**
  * Specifies which upgrade policy to use. Possible values: ["SERIAL", "CONCURRENT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#policy GkeonpremBareMetalCluster#policy}
  */
  readonly policy?: string;
}

export function gkeonpremBareMetalClusterUpgradePolicyToTerraform(struct?: GkeonpremBareMetalClusterUpgradePolicyOutputReference | GkeonpremBareMetalClusterUpgradePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
  }
}


export function gkeonpremBareMetalClusterUpgradePolicyToHclTerraform(struct?: GkeonpremBareMetalClusterUpgradePolicyOutputReference | GkeonpremBareMetalClusterUpgradePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalClusterUpgradePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalClusterUpgradePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalClusterUpgradePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy = value.policy;
    }
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster google_gkeonprem_bare_metal_cluster}
*/
export class GkeonpremBareMetalCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gkeonprem_bare_metal_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GkeonpremBareMetalCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GkeonpremBareMetalCluster to import
  * @param importFromId The id of the existing GkeonpremBareMetalCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GkeonpremBareMetalCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_gkeonprem_bare_metal_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/gkeonprem_bare_metal_cluster google_gkeonprem_bare_metal_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GkeonpremBareMetalClusterConfig
  */
  public constructor(scope: Construct, id: string, config: GkeonpremBareMetalClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gkeonprem_bare_metal_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.20.0',
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
    this._adminClusterMembership = config.adminClusterMembership;
    this._annotations = config.annotations;
    this._bareMetalVersion = config.bareMetalVersion;
    this._description = config.description;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._binaryAuthorization.internalValue = config.binaryAuthorization;
    this._clusterOperations.internalValue = config.clusterOperations;
    this._controlPlane.internalValue = config.controlPlane;
    this._loadBalancer.internalValue = config.loadBalancer;
    this._maintenanceConfig.internalValue = config.maintenanceConfig;
    this._networkConfig.internalValue = config.networkConfig;
    this._nodeAccessConfig.internalValue = config.nodeAccessConfig;
    this._nodeConfig.internalValue = config.nodeConfig;
    this._osEnvironmentConfig.internalValue = config.osEnvironmentConfig;
    this._proxy.internalValue = config.proxy;
    this._securityConfig.internalValue = config.securityConfig;
    this._storage.internalValue = config.storage;
    this._timeouts.internalValue = config.timeouts;
    this._upgradePolicy.internalValue = config.upgradePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_cluster_membership - computed: false, optional: false, required: true
  private _adminClusterMembership?: string; 
  public get adminClusterMembership() {
    return this.getStringAttribute('admin_cluster_membership');
  }
  public set adminClusterMembership(value: string) {
    this._adminClusterMembership = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminClusterMembershipInput() {
    return this._adminClusterMembership;
  }

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

  // bare_metal_version - computed: false, optional: false, required: true
  private _bareMetalVersion?: string; 
  public get bareMetalVersion() {
    return this.getStringAttribute('bare_metal_version');
  }
  public set bareMetalVersion(value: string) {
    this._bareMetalVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bareMetalVersionInput() {
    return this._bareMetalVersion;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delete_time - computed: true, optional: false, required: false
  public get deleteTime() {
    return this.getStringAttribute('delete_time');
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

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // fleet - computed: true, optional: false, required: false
  private _fleet = new GkeonpremBareMetalClusterFleetList(this, "fleet", false);
  public get fleet() {
    return this._fleet;
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

  // local_name - computed: true, optional: false, required: false
  public get localName() {
    return this.getStringAttribute('local_name');
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

  // status - computed: true, optional: false, required: false
  private _status = new GkeonpremBareMetalClusterStatusList(this, "status", false);
  public get status() {
    return this._status;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // validation_check - computed: true, optional: false, required: false
  private _validationCheck = new GkeonpremBareMetalClusterValidationCheckList(this, "validation_check", false);
  public get validationCheck() {
    return this._validationCheck;
  }

  // binary_authorization - computed: false, optional: true, required: false
  private _binaryAuthorization = new GkeonpremBareMetalClusterBinaryAuthorizationOutputReference(this, "binary_authorization");
  public get binaryAuthorization() {
    return this._binaryAuthorization;
  }
  public putBinaryAuthorization(value: GkeonpremBareMetalClusterBinaryAuthorization) {
    this._binaryAuthorization.internalValue = value;
  }
  public resetBinaryAuthorization() {
    this._binaryAuthorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAuthorizationInput() {
    return this._binaryAuthorization.internalValue;
  }

  // cluster_operations - computed: false, optional: true, required: false
  private _clusterOperations = new GkeonpremBareMetalClusterClusterOperationsOutputReference(this, "cluster_operations");
  public get clusterOperations() {
    return this._clusterOperations;
  }
  public putClusterOperations(value: GkeonpremBareMetalClusterClusterOperations) {
    this._clusterOperations.internalValue = value;
  }
  public resetClusterOperations() {
    this._clusterOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterOperationsInput() {
    return this._clusterOperations.internalValue;
  }

  // control_plane - computed: false, optional: false, required: true
  private _controlPlane = new GkeonpremBareMetalClusterControlPlaneOutputReference(this, "control_plane");
  public get controlPlane() {
    return this._controlPlane;
  }
  public putControlPlane(value: GkeonpremBareMetalClusterControlPlane) {
    this._controlPlane.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane.internalValue;
  }

  // load_balancer - computed: false, optional: false, required: true
  private _loadBalancer = new GkeonpremBareMetalClusterLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: GkeonpremBareMetalClusterLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // maintenance_config - computed: false, optional: true, required: false
  private _maintenanceConfig = new GkeonpremBareMetalClusterMaintenanceConfigOutputReference(this, "maintenance_config");
  public get maintenanceConfig() {
    return this._maintenanceConfig;
  }
  public putMaintenanceConfig(value: GkeonpremBareMetalClusterMaintenanceConfig) {
    this._maintenanceConfig.internalValue = value;
  }
  public resetMaintenanceConfig() {
    this._maintenanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceConfigInput() {
    return this._maintenanceConfig.internalValue;
  }

  // network_config - computed: false, optional: false, required: true
  private _networkConfig = new GkeonpremBareMetalClusterNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: GkeonpremBareMetalClusterNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // node_access_config - computed: false, optional: true, required: false
  private _nodeAccessConfig = new GkeonpremBareMetalClusterNodeAccessConfigOutputReference(this, "node_access_config");
  public get nodeAccessConfig() {
    return this._nodeAccessConfig;
  }
  public putNodeAccessConfig(value: GkeonpremBareMetalClusterNodeAccessConfig) {
    this._nodeAccessConfig.internalValue = value;
  }
  public resetNodeAccessConfig() {
    this._nodeAccessConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAccessConfigInput() {
    return this._nodeAccessConfig.internalValue;
  }

  // node_config - computed: false, optional: true, required: false
  private _nodeConfig = new GkeonpremBareMetalClusterNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: GkeonpremBareMetalClusterNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  public resetNodeConfig() {
    this._nodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // os_environment_config - computed: false, optional: true, required: false
  private _osEnvironmentConfig = new GkeonpremBareMetalClusterOsEnvironmentConfigOutputReference(this, "os_environment_config");
  public get osEnvironmentConfig() {
    return this._osEnvironmentConfig;
  }
  public putOsEnvironmentConfig(value: GkeonpremBareMetalClusterOsEnvironmentConfig) {
    this._osEnvironmentConfig.internalValue = value;
  }
  public resetOsEnvironmentConfig() {
    this._osEnvironmentConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osEnvironmentConfigInput() {
    return this._osEnvironmentConfig.internalValue;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new GkeonpremBareMetalClusterProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: GkeonpremBareMetalClusterProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // security_config - computed: false, optional: true, required: false
  private _securityConfig = new GkeonpremBareMetalClusterSecurityConfigOutputReference(this, "security_config");
  public get securityConfig() {
    return this._securityConfig;
  }
  public putSecurityConfig(value: GkeonpremBareMetalClusterSecurityConfig) {
    this._securityConfig.internalValue = value;
  }
  public resetSecurityConfig() {
    this._securityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigInput() {
    return this._securityConfig.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new GkeonpremBareMetalClusterStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: GkeonpremBareMetalClusterStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GkeonpremBareMetalClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GkeonpremBareMetalClusterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // upgrade_policy - computed: false, optional: true, required: false
  private _upgradePolicy = new GkeonpremBareMetalClusterUpgradePolicyOutputReference(this, "upgrade_policy");
  public get upgradePolicy() {
    return this._upgradePolicy;
  }
  public putUpgradePolicy(value: GkeonpremBareMetalClusterUpgradePolicy) {
    this._upgradePolicy.internalValue = value;
  }
  public resetUpgradePolicy() {
    this._upgradePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradePolicyInput() {
    return this._upgradePolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_cluster_membership: cdktf.stringToTerraform(this._adminClusterMembership),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      bare_metal_version: cdktf.stringToTerraform(this._bareMetalVersion),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      binary_authorization: gkeonpremBareMetalClusterBinaryAuthorizationToTerraform(this._binaryAuthorization.internalValue),
      cluster_operations: gkeonpremBareMetalClusterClusterOperationsToTerraform(this._clusterOperations.internalValue),
      control_plane: gkeonpremBareMetalClusterControlPlaneToTerraform(this._controlPlane.internalValue),
      load_balancer: gkeonpremBareMetalClusterLoadBalancerToTerraform(this._loadBalancer.internalValue),
      maintenance_config: gkeonpremBareMetalClusterMaintenanceConfigToTerraform(this._maintenanceConfig.internalValue),
      network_config: gkeonpremBareMetalClusterNetworkConfigToTerraform(this._networkConfig.internalValue),
      node_access_config: gkeonpremBareMetalClusterNodeAccessConfigToTerraform(this._nodeAccessConfig.internalValue),
      node_config: gkeonpremBareMetalClusterNodeConfigToTerraform(this._nodeConfig.internalValue),
      os_environment_config: gkeonpremBareMetalClusterOsEnvironmentConfigToTerraform(this._osEnvironmentConfig.internalValue),
      proxy: gkeonpremBareMetalClusterProxyToTerraform(this._proxy.internalValue),
      security_config: gkeonpremBareMetalClusterSecurityConfigToTerraform(this._securityConfig.internalValue),
      storage: gkeonpremBareMetalClusterStorageToTerraform(this._storage.internalValue),
      timeouts: gkeonpremBareMetalClusterTimeoutsToTerraform(this._timeouts.internalValue),
      upgrade_policy: gkeonpremBareMetalClusterUpgradePolicyToTerraform(this._upgradePolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_cluster_membership: {
        value: cdktf.stringToHclTerraform(this._adminClusterMembership),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      bare_metal_version: {
        value: cdktf.stringToHclTerraform(this._bareMetalVersion),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binary_authorization: {
        value: gkeonpremBareMetalClusterBinaryAuthorizationToHclTerraform(this._binaryAuthorization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalClusterBinaryAuthorizationList",
      },
      cluster_operations: {
        value: gkeonpremBareMetalClusterClusterOperationsToHclTerraform(this._clusterOperations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalClusterClusterOperationsList",
      },
      control_plane: {
        value: gkeonpremBareMetalClusterControlPlaneToHclTerraform(this._controlPlane.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalClusterControlPlaneList",
      },
      load_balancer: {
        value: gkeonpremBareMetalClusterLoadBalancerToHclTerraform(this._loadBalancer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalClusterLoadBalancerList",
      },
      maintenance_config: {
        value: gkeonpremBareMetalClusterMaintenanceConfigToHclTerraform(this._maintenanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalClusterMaintenanceConfigList",
      },
      network_config: {
        value: gkeonpremBareMetalClusterNetworkConfigToHclTerraform(this._networkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalClusterNetworkConfigList",
      },
      node_access_config: {
        value: gkeonpremBareMetalClusterNodeAccessConfigToHclTerraform(this._nodeAccessConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalClusterNodeAccessConfigList",
      },
      node_config: {
        value: gkeonpremBareMetalClusterNodeConfigToHclTerraform(this._nodeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalClusterNodeConfigList",
      },
      os_environment_config: {
        value: gkeonpremBareMetalClusterOsEnvironmentConfigToHclTerraform(this._osEnvironmentConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalClusterOsEnvironmentConfigList",
      },
      proxy: {
        value: gkeonpremBareMetalClusterProxyToHclTerraform(this._proxy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalClusterProxyList",
      },
      security_config: {
        value: gkeonpremBareMetalClusterSecurityConfigToHclTerraform(this._securityConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalClusterSecurityConfigList",
      },
      storage: {
        value: gkeonpremBareMetalClusterStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalClusterStorageList",
      },
      timeouts: {
        value: gkeonpremBareMetalClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GkeonpremBareMetalClusterTimeouts",
      },
      upgrade_policy: {
        value: gkeonpremBareMetalClusterUpgradePolicyToHclTerraform(this._upgradePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalClusterUpgradePolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
