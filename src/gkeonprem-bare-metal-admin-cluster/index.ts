/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GkeonpremBareMetalAdminClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Annotations on the Bare Metal Admin Cluster.
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#annotations GkeonpremBareMetalAdminCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * A human readable description of this Bare Metal Admin Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#bare_metal_version GkeonpremBareMetalAdminCluster#bare_metal_version}
  */
  readonly bareMetalVersion?: string;
  /**
  * A human readable description of this Bare Metal Admin Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#description GkeonpremBareMetalAdminCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#id GkeonpremBareMetalAdminCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#location GkeonpremBareMetalAdminCluster#location}
  */
  readonly location: string;
  /**
  * The bare metal admin cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#name GkeonpremBareMetalAdminCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#project GkeonpremBareMetalAdminCluster#project}
  */
  readonly project?: string;
  /**
  * cluster_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#cluster_operations GkeonpremBareMetalAdminCluster#cluster_operations}
  */
  readonly clusterOperations?: GkeonpremBareMetalAdminClusterClusterOperations;
  /**
  * control_plane block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#control_plane GkeonpremBareMetalAdminCluster#control_plane}
  */
  readonly controlPlane?: GkeonpremBareMetalAdminClusterControlPlane;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#load_balancer GkeonpremBareMetalAdminCluster#load_balancer}
  */
  readonly loadBalancer?: GkeonpremBareMetalAdminClusterLoadBalancer;
  /**
  * maintenance_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#maintenance_config GkeonpremBareMetalAdminCluster#maintenance_config}
  */
  readonly maintenanceConfig?: GkeonpremBareMetalAdminClusterMaintenanceConfig;
  /**
  * network_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#network_config GkeonpremBareMetalAdminCluster#network_config}
  */
  readonly networkConfig?: GkeonpremBareMetalAdminClusterNetworkConfig;
  /**
  * node_access_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#node_access_config GkeonpremBareMetalAdminCluster#node_access_config}
  */
  readonly nodeAccessConfig?: GkeonpremBareMetalAdminClusterNodeAccessConfig;
  /**
  * node_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#node_config GkeonpremBareMetalAdminCluster#node_config}
  */
  readonly nodeConfig?: GkeonpremBareMetalAdminClusterNodeConfig;
  /**
  * proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#proxy GkeonpremBareMetalAdminCluster#proxy}
  */
  readonly proxy?: GkeonpremBareMetalAdminClusterProxy;
  /**
  * security_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#security_config GkeonpremBareMetalAdminCluster#security_config}
  */
  readonly securityConfig?: GkeonpremBareMetalAdminClusterSecurityConfig;
  /**
  * storage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#storage GkeonpremBareMetalAdminCluster#storage}
  */
  readonly storage?: GkeonpremBareMetalAdminClusterStorage;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#timeouts GkeonpremBareMetalAdminCluster#timeouts}
  */
  readonly timeouts?: GkeonpremBareMetalAdminClusterTimeouts;
}
export interface GkeonpremBareMetalAdminClusterFleet {
}

export function gkeonpremBareMetalAdminClusterFleetToTerraform(struct?: GkeonpremBareMetalAdminClusterFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremBareMetalAdminClusterFleetToHclTerraform(struct?: GkeonpremBareMetalAdminClusterFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremBareMetalAdminClusterFleetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalAdminClusterFleet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalAdminClusterFleet | undefined) {
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

export class GkeonpremBareMetalAdminClusterFleetList extends cdktf.ComplexList {

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
  public get(index: number): GkeonpremBareMetalAdminClusterFleetOutputReference {
    return new GkeonpremBareMetalAdminClusterFleetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalAdminClusterStatusConditions {
}

export function gkeonpremBareMetalAdminClusterStatusConditionsToTerraform(struct?: GkeonpremBareMetalAdminClusterStatusConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremBareMetalAdminClusterStatusConditionsToHclTerraform(struct?: GkeonpremBareMetalAdminClusterStatusConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremBareMetalAdminClusterStatusConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalAdminClusterStatusConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalAdminClusterStatusConditions | undefined) {
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

export class GkeonpremBareMetalAdminClusterStatusConditionsList extends cdktf.ComplexList {

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
  public get(index: number): GkeonpremBareMetalAdminClusterStatusConditionsOutputReference {
    return new GkeonpremBareMetalAdminClusterStatusConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalAdminClusterStatus {
}

export function gkeonpremBareMetalAdminClusterStatusToTerraform(struct?: GkeonpremBareMetalAdminClusterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremBareMetalAdminClusterStatusToHclTerraform(struct?: GkeonpremBareMetalAdminClusterStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremBareMetalAdminClusterStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalAdminClusterStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalAdminClusterStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new GkeonpremBareMetalAdminClusterStatusConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
}

export class GkeonpremBareMetalAdminClusterStatusList extends cdktf.ComplexList {

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
  public get(index: number): GkeonpremBareMetalAdminClusterStatusOutputReference {
    return new GkeonpremBareMetalAdminClusterStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalAdminClusterValidationCheckStatusResult {
}

export function gkeonpremBareMetalAdminClusterValidationCheckStatusResultToTerraform(struct?: GkeonpremBareMetalAdminClusterValidationCheckStatusResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremBareMetalAdminClusterValidationCheckStatusResultToHclTerraform(struct?: GkeonpremBareMetalAdminClusterValidationCheckStatusResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalAdminClusterValidationCheckStatusResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalAdminClusterValidationCheckStatusResult | undefined) {
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

export class GkeonpremBareMetalAdminClusterValidationCheckStatusResultList extends cdktf.ComplexList {

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
  public get(index: number): GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference {
    return new GkeonpremBareMetalAdminClusterValidationCheckStatusResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalAdminClusterValidationCheckStatus {
}

export function gkeonpremBareMetalAdminClusterValidationCheckStatusToTerraform(struct?: GkeonpremBareMetalAdminClusterValidationCheckStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremBareMetalAdminClusterValidationCheckStatusToHclTerraform(struct?: GkeonpremBareMetalAdminClusterValidationCheckStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalAdminClusterValidationCheckStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalAdminClusterValidationCheckStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // result - computed: true, optional: false, required: false
  private _result = new GkeonpremBareMetalAdminClusterValidationCheckStatusResultList(this, "result", false);
  public get result() {
    return this._result;
  }
}

export class GkeonpremBareMetalAdminClusterValidationCheckStatusList extends cdktf.ComplexList {

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
  public get(index: number): GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference {
    return new GkeonpremBareMetalAdminClusterValidationCheckStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalAdminClusterValidationCheck {
}

export function gkeonpremBareMetalAdminClusterValidationCheckToTerraform(struct?: GkeonpremBareMetalAdminClusterValidationCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function gkeonpremBareMetalAdminClusterValidationCheckToHclTerraform(struct?: GkeonpremBareMetalAdminClusterValidationCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GkeonpremBareMetalAdminClusterValidationCheckOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalAdminClusterValidationCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalAdminClusterValidationCheck | undefined) {
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
  private _status = new GkeonpremBareMetalAdminClusterValidationCheckStatusList(this, "status", false);
  public get status() {
    return this._status;
  }
}

export class GkeonpremBareMetalAdminClusterValidationCheckList extends cdktf.ComplexList {

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
  public get(index: number): GkeonpremBareMetalAdminClusterValidationCheckOutputReference {
    return new GkeonpremBareMetalAdminClusterValidationCheckOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalAdminClusterClusterOperations {
  /**
  * Whether collection of application logs/metrics should be enabled (in addition to system logs/metrics).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#enable_application_logs GkeonpremBareMetalAdminCluster#enable_application_logs}
  */
  readonly enableApplicationLogs?: boolean | cdktf.IResolvable;
}

export function gkeonpremBareMetalAdminClusterClusterOperationsToTerraform(struct?: GkeonpremBareMetalAdminClusterClusterOperationsOutputReference | GkeonpremBareMetalAdminClusterClusterOperations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_application_logs: cdktf.booleanToTerraform(struct!.enableApplicationLogs),
  }
}


export function gkeonpremBareMetalAdminClusterClusterOperationsToHclTerraform(struct?: GkeonpremBareMetalAdminClusterClusterOperationsOutputReference | GkeonpremBareMetalAdminClusterClusterOperations): any {
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

export class GkeonpremBareMetalAdminClusterClusterOperationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalAdminClusterClusterOperations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableApplicationLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableApplicationLogs = this._enableApplicationLogs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalAdminClusterClusterOperations | undefined) {
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
export interface GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs {
  /**
  * The argument name as it appears on the API Server command line please make sure to remove the leading dashes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#argument GkeonpremBareMetalAdminCluster#argument}
  */
  readonly argument: string;
  /**
  * The value of the arg as it will be passed to the API Server command line.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#value GkeonpremBareMetalAdminCluster#value}
  */
  readonly value: string;
}

export function gkeonpremBareMetalAdminClusterControlPlaneApiServerArgsToTerraform(struct?: GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    argument: cdktf.stringToTerraform(struct!.argument),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function gkeonpremBareMetalAdminClusterControlPlaneApiServerArgsToHclTerraform(struct?: GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs | cdktf.IResolvable): any {
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

export class GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs | cdktf.IResolvable | undefined) {
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

export class GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList extends cdktf.ComplexList {
  public internalValue? : GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs[] | cdktf.IResolvable

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
  public get(index: number): GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference {
    return new GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs {
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to
  * each node. These will added in addition to any default label(s)
  * that Kubernetes may apply to the node. In case of conflict in
  * label keys, the applied set may differ depending on the Kubernetes
  * version -- it's best to assume the behavior is undefined and
  * conflicts should be avoided. For more information, including usage
  * and the valid values, see:
  *   - http://kubernetes.io/v1.1/docs/user-guide/labels.html
  * An object containing a list of "key": value pairs.
  * For example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#labels GkeonpremBareMetalAdminCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The default IPv4 address for SSH access and Kubernetes node.
  * Example: 192.168.0.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#node_ip GkeonpremBareMetalAdminCluster#node_ip}
  */
  readonly nodeIp?: string;
}

export function gkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsToTerraform(struct?: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    node_ip: cdktf.stringToTerraform(struct!.nodeIp),
  }
}


export function gkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsToHclTerraform(struct?: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs | cdktf.IResolvable): any {
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

export class GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs | cdktf.IResolvable | undefined) {
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

export class GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList extends cdktf.ComplexList {
  public internalValue? : GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs[] | cdktf.IResolvable

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
  public get(index: number): GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference {
    return new GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints {
  /**
  * Specifies the nodes operating system (default: LINUX). Possible values: ["EFFECT_UNSPECIFIED", "PREFER_NO_SCHEDULE", "NO_EXECUTE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#effect GkeonpremBareMetalAdminCluster#effect}
  */
  readonly effect?: string;
  /**
  * Key associated with the effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#key GkeonpremBareMetalAdminCluster#key}
  */
  readonly key?: string;
  /**
  * Value associated with the effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#value GkeonpremBareMetalAdminCluster#value}
  */
  readonly value?: string;
}

export function gkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsToTerraform(struct?: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints | cdktf.IResolvable): any {
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


export function gkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsToHclTerraform(struct?: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints | cdktf.IResolvable): any {
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

export class GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints | cdktf.IResolvable | undefined) {
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

export class GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList extends cdktf.ComplexList {
  public internalValue? : GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints[] | cdktf.IResolvable

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
  public get(index: number): GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference {
    return new GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig {
  /**
  * The map of Kubernetes labels (key/value pairs) to be applied to
  * each node. These will added in addition to any default label(s)
  * that Kubernetes may apply to the node. In case of conflict in
  * label keys, the applied set may differ depending on the Kubernetes
  * version -- it's best to assume the behavior is undefined and
  * conflicts should be avoided. For more information, including usage
  * and the valid values, see:
  *   - http://kubernetes.io/v1.1/docs/user-guide/labels.html
  * An object containing a list of "key": value pairs.
  * For example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#labels GkeonpremBareMetalAdminCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Specifies the nodes operating system (default: LINUX).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#operating_system GkeonpremBareMetalAdminCluster#operating_system}
  */
  readonly operatingSystem?: string;
  /**
  * node_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#node_configs GkeonpremBareMetalAdminCluster#node_configs}
  */
  readonly nodeConfigs?: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs[] | cdktf.IResolvable;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#taints GkeonpremBareMetalAdminCluster#taints}
  */
  readonly taints?: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints[] | cdktf.IResolvable;
}

export function gkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigToTerraform(struct?: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference | GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    operating_system: cdktf.stringToTerraform(struct!.operatingSystem),
    node_configs: cdktf.listMapper(gkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsToTerraform, true)(struct!.nodeConfigs),
    taints: cdktf.listMapper(gkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsToTerraform, true)(struct!.taints),
  }
}


export function gkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigToHclTerraform(struct?: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference | GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig): any {
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
      value: cdktf.listMapperHcl(gkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsToHclTerraform, true)(struct!.nodeConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList",
    },
    taints: {
      value: cdktf.listMapperHcl(gkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsToHclTerraform, true)(struct!.taints),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig | undefined {
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

  public set internalValue(value: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig | undefined) {
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

  // node_configs - computed: false, optional: true, required: false
  private _nodeConfigs = new GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigsList(this, "node_configs", false);
  public get nodeConfigs() {
    return this._nodeConfigs;
  }
  public putNodeConfigs(value: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigNodeConfigs[] | cdktf.IResolvable) {
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
  private _taints = new GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigTaints[] | cdktf.IResolvable) {
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
export interface GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig {
  /**
  * node_pool_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#node_pool_config GkeonpremBareMetalAdminCluster#node_pool_config}
  */
  readonly nodePoolConfig: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig;
}

export function gkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigToTerraform(struct?: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference | GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_pool_config: gkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigToTerraform(struct!.nodePoolConfig),
  }
}


export function gkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigToHclTerraform(struct?: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference | GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_pool_config: {
      value: gkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigToHclTerraform(struct!.nodePoolConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodePoolConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePoolConfig = this._nodePoolConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig | undefined) {
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
  private _nodePoolConfig = new GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfigOutputReference(this, "node_pool_config");
  public get nodePoolConfig() {
    return this._nodePoolConfig;
  }
  public putNodePoolConfig(value: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigNodePoolConfig) {
    this._nodePoolConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolConfigInput() {
    return this._nodePoolConfig.internalValue;
  }
}
export interface GkeonpremBareMetalAdminClusterControlPlane {
  /**
  * api_server_args block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#api_server_args GkeonpremBareMetalAdminCluster#api_server_args}
  */
  readonly apiServerArgs?: GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs[] | cdktf.IResolvable;
  /**
  * control_plane_node_pool_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#control_plane_node_pool_config GkeonpremBareMetalAdminCluster#control_plane_node_pool_config}
  */
  readonly controlPlaneNodePoolConfig: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig;
}

export function gkeonpremBareMetalAdminClusterControlPlaneToTerraform(struct?: GkeonpremBareMetalAdminClusterControlPlaneOutputReference | GkeonpremBareMetalAdminClusterControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server_args: cdktf.listMapper(gkeonpremBareMetalAdminClusterControlPlaneApiServerArgsToTerraform, true)(struct!.apiServerArgs),
    control_plane_node_pool_config: gkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigToTerraform(struct!.controlPlaneNodePoolConfig),
  }
}


export function gkeonpremBareMetalAdminClusterControlPlaneToHclTerraform(struct?: GkeonpremBareMetalAdminClusterControlPlaneOutputReference | GkeonpremBareMetalAdminClusterControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_server_args: {
      value: cdktf.listMapperHcl(gkeonpremBareMetalAdminClusterControlPlaneApiServerArgsToHclTerraform, true)(struct!.apiServerArgs),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList",
    },
    control_plane_node_pool_config: {
      value: gkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigToHclTerraform(struct!.controlPlaneNodePoolConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalAdminClusterControlPlaneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalAdminClusterControlPlane | undefined {
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

  public set internalValue(value: GkeonpremBareMetalAdminClusterControlPlane | undefined) {
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
  private _apiServerArgs = new GkeonpremBareMetalAdminClusterControlPlaneApiServerArgsList(this, "api_server_args", false);
  public get apiServerArgs() {
    return this._apiServerArgs;
  }
  public putApiServerArgs(value: GkeonpremBareMetalAdminClusterControlPlaneApiServerArgs[] | cdktf.IResolvable) {
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
  private _controlPlaneNodePoolConfig = new GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfigOutputReference(this, "control_plane_node_pool_config");
  public get controlPlaneNodePoolConfig() {
    return this._controlPlaneNodePoolConfig;
  }
  public putControlPlaneNodePoolConfig(value: GkeonpremBareMetalAdminClusterControlPlaneControlPlaneNodePoolConfig) {
    this._controlPlaneNodePoolConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneNodePoolConfigInput() {
    return this._controlPlaneNodePoolConfig.internalValue;
  }
}
export interface GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig {
  /**
  * Whether manual load balancing is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#enabled GkeonpremBareMetalAdminCluster#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function gkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigToTerraform(struct?: GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference | GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function gkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigToHclTerraform(struct?: GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference | GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig): any {
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

export class GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig | undefined) {
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
export interface GkeonpremBareMetalAdminClusterLoadBalancerPortConfig {
  /**
  * The port that control plane hosted load balancers will listen on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#control_plane_load_balancer_port GkeonpremBareMetalAdminCluster#control_plane_load_balancer_port}
  */
  readonly controlPlaneLoadBalancerPort: number;
}

export function gkeonpremBareMetalAdminClusterLoadBalancerPortConfigToTerraform(struct?: GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference | GkeonpremBareMetalAdminClusterLoadBalancerPortConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_load_balancer_port: cdktf.numberToTerraform(struct!.controlPlaneLoadBalancerPort),
  }
}


export function gkeonpremBareMetalAdminClusterLoadBalancerPortConfigToHclTerraform(struct?: GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference | GkeonpremBareMetalAdminClusterLoadBalancerPortConfig): any {
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

export class GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalAdminClusterLoadBalancerPortConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneLoadBalancerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneLoadBalancerPort = this._controlPlaneLoadBalancerPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalAdminClusterLoadBalancerPortConfig | undefined) {
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
export interface GkeonpremBareMetalAdminClusterLoadBalancerVipConfig {
  /**
  * The VIP which you previously set aside for the Kubernetes API of this Bare Metal Admin Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#control_plane_vip GkeonpremBareMetalAdminCluster#control_plane_vip}
  */
  readonly controlPlaneVip: string;
}

export function gkeonpremBareMetalAdminClusterLoadBalancerVipConfigToTerraform(struct?: GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference | GkeonpremBareMetalAdminClusterLoadBalancerVipConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane_vip: cdktf.stringToTerraform(struct!.controlPlaneVip),
  }
}


export function gkeonpremBareMetalAdminClusterLoadBalancerVipConfigToHclTerraform(struct?: GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference | GkeonpremBareMetalAdminClusterLoadBalancerVipConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalAdminClusterLoadBalancerVipConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlaneVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlaneVip = this._controlPlaneVip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalAdminClusterLoadBalancerVipConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controlPlaneVip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controlPlaneVip = value.controlPlaneVip;
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
}
export interface GkeonpremBareMetalAdminClusterLoadBalancer {
  /**
  * manual_lb_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#manual_lb_config GkeonpremBareMetalAdminCluster#manual_lb_config}
  */
  readonly manualLbConfig?: GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig;
  /**
  * port_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#port_config GkeonpremBareMetalAdminCluster#port_config}
  */
  readonly portConfig: GkeonpremBareMetalAdminClusterLoadBalancerPortConfig;
  /**
  * vip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#vip_config GkeonpremBareMetalAdminCluster#vip_config}
  */
  readonly vipConfig: GkeonpremBareMetalAdminClusterLoadBalancerVipConfig;
}

export function gkeonpremBareMetalAdminClusterLoadBalancerToTerraform(struct?: GkeonpremBareMetalAdminClusterLoadBalancerOutputReference | GkeonpremBareMetalAdminClusterLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manual_lb_config: gkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigToTerraform(struct!.manualLbConfig),
    port_config: gkeonpremBareMetalAdminClusterLoadBalancerPortConfigToTerraform(struct!.portConfig),
    vip_config: gkeonpremBareMetalAdminClusterLoadBalancerVipConfigToTerraform(struct!.vipConfig),
  }
}


export function gkeonpremBareMetalAdminClusterLoadBalancerToHclTerraform(struct?: GkeonpremBareMetalAdminClusterLoadBalancerOutputReference | GkeonpremBareMetalAdminClusterLoadBalancer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    manual_lb_config: {
      value: gkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigToHclTerraform(struct!.manualLbConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigList",
    },
    port_config: {
      value: gkeonpremBareMetalAdminClusterLoadBalancerPortConfigToHclTerraform(struct!.portConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalAdminClusterLoadBalancerPortConfigList",
    },
    vip_config: {
      value: gkeonpremBareMetalAdminClusterLoadBalancerVipConfigToHclTerraform(struct!.vipConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalAdminClusterLoadBalancerVipConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalAdminClusterLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalAdminClusterLoadBalancer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manualLbConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualLbConfig = this._manualLbConfig?.internalValue;
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

  public set internalValue(value: GkeonpremBareMetalAdminClusterLoadBalancer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._manualLbConfig.internalValue = undefined;
      this._portConfig.internalValue = undefined;
      this._vipConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._manualLbConfig.internalValue = value.manualLbConfig;
      this._portConfig.internalValue = value.portConfig;
      this._vipConfig.internalValue = value.vipConfig;
    }
  }

  // manual_lb_config - computed: false, optional: true, required: false
  private _manualLbConfig = new GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfigOutputReference(this, "manual_lb_config");
  public get manualLbConfig() {
    return this._manualLbConfig;
  }
  public putManualLbConfig(value: GkeonpremBareMetalAdminClusterLoadBalancerManualLbConfig) {
    this._manualLbConfig.internalValue = value;
  }
  public resetManualLbConfig() {
    this._manualLbConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualLbConfigInput() {
    return this._manualLbConfig.internalValue;
  }

  // port_config - computed: false, optional: false, required: true
  private _portConfig = new GkeonpremBareMetalAdminClusterLoadBalancerPortConfigOutputReference(this, "port_config");
  public get portConfig() {
    return this._portConfig;
  }
  public putPortConfig(value: GkeonpremBareMetalAdminClusterLoadBalancerPortConfig) {
    this._portConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portConfigInput() {
    return this._portConfig.internalValue;
  }

  // vip_config - computed: false, optional: false, required: true
  private _vipConfig = new GkeonpremBareMetalAdminClusterLoadBalancerVipConfigOutputReference(this, "vip_config");
  public get vipConfig() {
    return this._vipConfig;
  }
  public putVipConfig(value: GkeonpremBareMetalAdminClusterLoadBalancerVipConfig) {
    this._vipConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipConfigInput() {
    return this._vipConfig.internalValue;
  }
}
export interface GkeonpremBareMetalAdminClusterMaintenanceConfig {
  /**
  * All IPv4 address from these ranges will be placed into maintenance mode.
  * Nodes in maintenance mode will be cordoned and drained. When both of these
  * are true, the "baremetal.cluster.gke.io/maintenance" annotation will be set
  * on the node resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#maintenance_address_cidr_blocks GkeonpremBareMetalAdminCluster#maintenance_address_cidr_blocks}
  */
  readonly maintenanceAddressCidrBlocks: string[];
}

export function gkeonpremBareMetalAdminClusterMaintenanceConfigToTerraform(struct?: GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference | GkeonpremBareMetalAdminClusterMaintenanceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_address_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.maintenanceAddressCidrBlocks),
  }
}


export function gkeonpremBareMetalAdminClusterMaintenanceConfigToHclTerraform(struct?: GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference | GkeonpremBareMetalAdminClusterMaintenanceConfig): any {
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

export class GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalAdminClusterMaintenanceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceAddressCidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceAddressCidrBlocks = this._maintenanceAddressCidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalAdminClusterMaintenanceConfig | undefined) {
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
export interface GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr {
  /**
  * All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#pod_address_cidr_blocks GkeonpremBareMetalAdminCluster#pod_address_cidr_blocks}
  */
  readonly podAddressCidrBlocks: string[];
  /**
  * All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. This field cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#service_address_cidr_blocks GkeonpremBareMetalAdminCluster#service_address_cidr_blocks}
  */
  readonly serviceAddressCidrBlocks: string[];
}

export function gkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrToTerraform(struct?: GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference | GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_address_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podAddressCidrBlocks),
    service_address_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAddressCidrBlocks),
  }
}


export function gkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrToHclTerraform(struct?: GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference | GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr): any {
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

export class GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr | undefined {
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

  public set internalValue(value: GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr | undefined) {
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
export interface GkeonpremBareMetalAdminClusterNetworkConfig {
  /**
  * island_mode_cidr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#island_mode_cidr GkeonpremBareMetalAdminCluster#island_mode_cidr}
  */
  readonly islandModeCidr?: GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr;
}

export function gkeonpremBareMetalAdminClusterNetworkConfigToTerraform(struct?: GkeonpremBareMetalAdminClusterNetworkConfigOutputReference | GkeonpremBareMetalAdminClusterNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    island_mode_cidr: gkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrToTerraform(struct!.islandModeCidr),
  }
}


export function gkeonpremBareMetalAdminClusterNetworkConfigToHclTerraform(struct?: GkeonpremBareMetalAdminClusterNetworkConfigOutputReference | GkeonpremBareMetalAdminClusterNetworkConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    island_mode_cidr: {
      value: gkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrToHclTerraform(struct!.islandModeCidr),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalAdminClusterNetworkConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalAdminClusterNetworkConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._islandModeCidr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.islandModeCidr = this._islandModeCidr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalAdminClusterNetworkConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._islandModeCidr.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._islandModeCidr.internalValue = value.islandModeCidr;
    }
  }

  // island_mode_cidr - computed: false, optional: true, required: false
  private _islandModeCidr = new GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidrOutputReference(this, "island_mode_cidr");
  public get islandModeCidr() {
    return this._islandModeCidr;
  }
  public putIslandModeCidr(value: GkeonpremBareMetalAdminClusterNetworkConfigIslandModeCidr) {
    this._islandModeCidr.internalValue = value;
  }
  public resetIslandModeCidr() {
    this._islandModeCidr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get islandModeCidrInput() {
    return this._islandModeCidr.internalValue;
  }
}
export interface GkeonpremBareMetalAdminClusterNodeAccessConfig {
  /**
  * LoginUser is the user name used to access node machines.
  * It defaults to "root" if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#login_user GkeonpremBareMetalAdminCluster#login_user}
  */
  readonly loginUser?: string;
}

export function gkeonpremBareMetalAdminClusterNodeAccessConfigToTerraform(struct?: GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference | GkeonpremBareMetalAdminClusterNodeAccessConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login_user: cdktf.stringToTerraform(struct!.loginUser),
  }
}


export function gkeonpremBareMetalAdminClusterNodeAccessConfigToHclTerraform(struct?: GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference | GkeonpremBareMetalAdminClusterNodeAccessConfig): any {
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

export class GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalAdminClusterNodeAccessConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loginUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginUser = this._loginUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalAdminClusterNodeAccessConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loginUser = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loginUser = value.loginUser;
    }
  }

  // login_user - computed: false, optional: true, required: false
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
export interface GkeonpremBareMetalAdminClusterNodeConfig {
  /**
  * The maximum number of pods a node can run. The size of the CIDR range
  * assigned to the node will be derived from this parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#max_pods_per_node GkeonpremBareMetalAdminCluster#max_pods_per_node}
  */
  readonly maxPodsPerNode?: number;
}

export function gkeonpremBareMetalAdminClusterNodeConfigToTerraform(struct?: GkeonpremBareMetalAdminClusterNodeConfigOutputReference | GkeonpremBareMetalAdminClusterNodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_pods_per_node: cdktf.numberToTerraform(struct!.maxPodsPerNode),
  }
}


export function gkeonpremBareMetalAdminClusterNodeConfigToHclTerraform(struct?: GkeonpremBareMetalAdminClusterNodeConfigOutputReference | GkeonpremBareMetalAdminClusterNodeConfig): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalAdminClusterNodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalAdminClusterNodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPodsPerNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPodsPerNode = this._maxPodsPerNode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalAdminClusterNodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxPodsPerNode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxPodsPerNode = value.maxPodsPerNode;
    }
  }

  // max_pods_per_node - computed: false, optional: true, required: false
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
export interface GkeonpremBareMetalAdminClusterProxy {
  /**
  * A list of IPs, hostnames, and domains that should skip the proxy.
  * For example: ["127.0.0.1", "example.com", ".corp", "localhost"].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#no_proxy GkeonpremBareMetalAdminCluster#no_proxy}
  */
  readonly noProxy?: string[];
  /**
  * Specifies the address of your proxy server.
  * For Example: http://domain
  * WARNING: Do not provide credentials in the format
  * of http://(username:password@)domain these will be rejected by the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#uri GkeonpremBareMetalAdminCluster#uri}
  */
  readonly uri: string;
}

export function gkeonpremBareMetalAdminClusterProxyToTerraform(struct?: GkeonpremBareMetalAdminClusterProxyOutputReference | GkeonpremBareMetalAdminClusterProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_proxy: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.noProxy),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function gkeonpremBareMetalAdminClusterProxyToHclTerraform(struct?: GkeonpremBareMetalAdminClusterProxyOutputReference | GkeonpremBareMetalAdminClusterProxy): any {
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

export class GkeonpremBareMetalAdminClusterProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalAdminClusterProxy | undefined {
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

  public set internalValue(value: GkeonpremBareMetalAdminClusterProxy | undefined) {
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
export interface GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers {
  /**
  * The name of the user, e.g. 'my-gcp-id@gmail.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#username GkeonpremBareMetalAdminCluster#username}
  */
  readonly username: string;
}

export function gkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersToTerraform(struct?: GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function gkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersToHclTerraform(struct?: GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers | cdktf.IResolvable): any {
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

export class GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers | cdktf.IResolvable | undefined) {
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

export class GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList extends cdktf.ComplexList {
  public internalValue? : GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers[] | cdktf.IResolvable

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
  public get(index: number): GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference {
    return new GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GkeonpremBareMetalAdminClusterSecurityConfigAuthorization {
  /**
  * admin_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#admin_users GkeonpremBareMetalAdminCluster#admin_users}
  */
  readonly adminUsers: GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers[] | cdktf.IResolvable;
}

export function gkeonpremBareMetalAdminClusterSecurityConfigAuthorizationToTerraform(struct?: GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference | GkeonpremBareMetalAdminClusterSecurityConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_users: cdktf.listMapper(gkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersToTerraform, true)(struct!.adminUsers),
  }
}


export function gkeonpremBareMetalAdminClusterSecurityConfigAuthorizationToHclTerraform(struct?: GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference | GkeonpremBareMetalAdminClusterSecurityConfigAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_users: {
      value: cdktf.listMapperHcl(gkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersToHclTerraform, true)(struct!.adminUsers),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalAdminClusterSecurityConfigAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsers = this._adminUsers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalAdminClusterSecurityConfigAuthorization | undefined) {
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
  private _adminUsers = new GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsersList(this, "admin_users", false);
  public get adminUsers() {
    return this._adminUsers;
  }
  public putAdminUsers(value: GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationAdminUsers[] | cdktf.IResolvable) {
    this._adminUsers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsersInput() {
    return this._adminUsers.internalValue;
  }
}
export interface GkeonpremBareMetalAdminClusterSecurityConfig {
  /**
  * authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#authorization GkeonpremBareMetalAdminCluster#authorization}
  */
  readonly authorization?: GkeonpremBareMetalAdminClusterSecurityConfigAuthorization;
}

export function gkeonpremBareMetalAdminClusterSecurityConfigToTerraform(struct?: GkeonpremBareMetalAdminClusterSecurityConfigOutputReference | GkeonpremBareMetalAdminClusterSecurityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization: gkeonpremBareMetalAdminClusterSecurityConfigAuthorizationToTerraform(struct!.authorization),
  }
}


export function gkeonpremBareMetalAdminClusterSecurityConfigToHclTerraform(struct?: GkeonpremBareMetalAdminClusterSecurityConfigOutputReference | GkeonpremBareMetalAdminClusterSecurityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization: {
      value: gkeonpremBareMetalAdminClusterSecurityConfigAuthorizationToHclTerraform(struct!.authorization),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalAdminClusterSecurityConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalAdminClusterSecurityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorization?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorization = this._authorization?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GkeonpremBareMetalAdminClusterSecurityConfig | undefined) {
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
  private _authorization = new GkeonpremBareMetalAdminClusterSecurityConfigAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: GkeonpremBareMetalAdminClusterSecurityConfigAuthorization) {
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
export interface GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig {
  /**
  * The host machine path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#path GkeonpremBareMetalAdminCluster#path}
  */
  readonly path: string;
  /**
  * The StorageClass name that PVs will be created with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#storage_class GkeonpremBareMetalAdminCluster#storage_class}
  */
  readonly storageClass: string;
}

export function gkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigToTerraform(struct?: GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference | GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function gkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigToHclTerraform(struct?: GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference | GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig): any {
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

export class GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig | undefined {
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

  public set internalValue(value: GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig | undefined) {
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
export interface GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig {
  /**
  * The host machine path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#path GkeonpremBareMetalAdminCluster#path}
  */
  readonly path: string;
  /**
  * The StorageClass name that PVs will be created with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#storage_class GkeonpremBareMetalAdminCluster#storage_class}
  */
  readonly storageClass: string;
}

export function gkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigToTerraform(struct?: GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference | GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function gkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigToHclTerraform(struct?: GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference | GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig): any {
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

export class GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig | undefined {
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

  public set internalValue(value: GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig | undefined) {
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
export interface GkeonpremBareMetalAdminClusterStorageLvpShareConfig {
  /**
  * The number of subdirectories to create under path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#shared_path_pv_count GkeonpremBareMetalAdminCluster#shared_path_pv_count}
  */
  readonly sharedPathPvCount?: number;
  /**
  * lvp_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#lvp_config GkeonpremBareMetalAdminCluster#lvp_config}
  */
  readonly lvpConfig: GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig;
}

export function gkeonpremBareMetalAdminClusterStorageLvpShareConfigToTerraform(struct?: GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference | GkeonpremBareMetalAdminClusterStorageLvpShareConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shared_path_pv_count: cdktf.numberToTerraform(struct!.sharedPathPvCount),
    lvp_config: gkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigToTerraform(struct!.lvpConfig),
  }
}


export function gkeonpremBareMetalAdminClusterStorageLvpShareConfigToHclTerraform(struct?: GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference | GkeonpremBareMetalAdminClusterStorageLvpShareConfig): any {
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
      value: gkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigToHclTerraform(struct!.lvpConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalAdminClusterStorageLvpShareConfig | undefined {
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

  public set internalValue(value: GkeonpremBareMetalAdminClusterStorageLvpShareConfig | undefined) {
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
  private _lvpConfig = new GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfigOutputReference(this, "lvp_config");
  public get lvpConfig() {
    return this._lvpConfig;
  }
  public putLvpConfig(value: GkeonpremBareMetalAdminClusterStorageLvpShareConfigLvpConfig) {
    this._lvpConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lvpConfigInput() {
    return this._lvpConfig.internalValue;
  }
}
export interface GkeonpremBareMetalAdminClusterStorage {
  /**
  * lvp_node_mounts_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#lvp_node_mounts_config GkeonpremBareMetalAdminCluster#lvp_node_mounts_config}
  */
  readonly lvpNodeMountsConfig: GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig;
  /**
  * lvp_share_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#lvp_share_config GkeonpremBareMetalAdminCluster#lvp_share_config}
  */
  readonly lvpShareConfig: GkeonpremBareMetalAdminClusterStorageLvpShareConfig;
}

export function gkeonpremBareMetalAdminClusterStorageToTerraform(struct?: GkeonpremBareMetalAdminClusterStorageOutputReference | GkeonpremBareMetalAdminClusterStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lvp_node_mounts_config: gkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigToTerraform(struct!.lvpNodeMountsConfig),
    lvp_share_config: gkeonpremBareMetalAdminClusterStorageLvpShareConfigToTerraform(struct!.lvpShareConfig),
  }
}


export function gkeonpremBareMetalAdminClusterStorageToHclTerraform(struct?: GkeonpremBareMetalAdminClusterStorageOutputReference | GkeonpremBareMetalAdminClusterStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lvp_node_mounts_config: {
      value: gkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigToHclTerraform(struct!.lvpNodeMountsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigList",
    },
    lvp_share_config: {
      value: gkeonpremBareMetalAdminClusterStorageLvpShareConfigToHclTerraform(struct!.lvpShareConfig),
      isBlock: true,
      type: "list",
      storageClassType: "GkeonpremBareMetalAdminClusterStorageLvpShareConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GkeonpremBareMetalAdminClusterStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GkeonpremBareMetalAdminClusterStorage | undefined {
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

  public set internalValue(value: GkeonpremBareMetalAdminClusterStorage | undefined) {
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
  private _lvpNodeMountsConfig = new GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfigOutputReference(this, "lvp_node_mounts_config");
  public get lvpNodeMountsConfig() {
    return this._lvpNodeMountsConfig;
  }
  public putLvpNodeMountsConfig(value: GkeonpremBareMetalAdminClusterStorageLvpNodeMountsConfig) {
    this._lvpNodeMountsConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lvpNodeMountsConfigInput() {
    return this._lvpNodeMountsConfig.internalValue;
  }

  // lvp_share_config - computed: false, optional: false, required: true
  private _lvpShareConfig = new GkeonpremBareMetalAdminClusterStorageLvpShareConfigOutputReference(this, "lvp_share_config");
  public get lvpShareConfig() {
    return this._lvpShareConfig;
  }
  public putLvpShareConfig(value: GkeonpremBareMetalAdminClusterStorageLvpShareConfig) {
    this._lvpShareConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lvpShareConfigInput() {
    return this._lvpShareConfig.internalValue;
  }
}
export interface GkeonpremBareMetalAdminClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#create GkeonpremBareMetalAdminCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#delete GkeonpremBareMetalAdminCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#update GkeonpremBareMetalAdminCluster#update}
  */
  readonly update?: string;
}

export function gkeonpremBareMetalAdminClusterTimeoutsToTerraform(struct?: GkeonpremBareMetalAdminClusterTimeouts | cdktf.IResolvable): any {
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


export function gkeonpremBareMetalAdminClusterTimeoutsToHclTerraform(struct?: GkeonpremBareMetalAdminClusterTimeouts | cdktf.IResolvable): any {
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

export class GkeonpremBareMetalAdminClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GkeonpremBareMetalAdminClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GkeonpremBareMetalAdminClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster google_gkeonprem_bare_metal_admin_cluster}
*/
export class GkeonpremBareMetalAdminCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_gkeonprem_bare_metal_admin_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GkeonpremBareMetalAdminCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GkeonpremBareMetalAdminCluster to import
  * @param importFromId The id of the existing GkeonpremBareMetalAdminCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GkeonpremBareMetalAdminCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_gkeonprem_bare_metal_admin_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/gkeonprem_bare_metal_admin_cluster google_gkeonprem_bare_metal_admin_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GkeonpremBareMetalAdminClusterConfig
  */
  public constructor(scope: Construct, id: string, config: GkeonpremBareMetalAdminClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_gkeonprem_bare_metal_admin_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.49.3',
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
    this._annotations = config.annotations;
    this._bareMetalVersion = config.bareMetalVersion;
    this._description = config.description;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._clusterOperations.internalValue = config.clusterOperations;
    this._controlPlane.internalValue = config.controlPlane;
    this._loadBalancer.internalValue = config.loadBalancer;
    this._maintenanceConfig.internalValue = config.maintenanceConfig;
    this._networkConfig.internalValue = config.networkConfig;
    this._nodeAccessConfig.internalValue = config.nodeAccessConfig;
    this._nodeConfig.internalValue = config.nodeConfig;
    this._proxy.internalValue = config.proxy;
    this._securityConfig.internalValue = config.securityConfig;
    this._storage.internalValue = config.storage;
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

  // bare_metal_version - computed: false, optional: true, required: false
  private _bareMetalVersion?: string; 
  public get bareMetalVersion() {
    return this.getStringAttribute('bare_metal_version');
  }
  public set bareMetalVersion(value: string) {
    this._bareMetalVersion = value;
  }
  public resetBareMetalVersion() {
    this._bareMetalVersion = undefined;
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
  private _fleet = new GkeonpremBareMetalAdminClusterFleetList(this, "fleet", false);
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
  private _status = new GkeonpremBareMetalAdminClusterStatusList(this, "status", false);
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
  private _validationCheck = new GkeonpremBareMetalAdminClusterValidationCheckList(this, "validation_check", false);
  public get validationCheck() {
    return this._validationCheck;
  }

  // cluster_operations - computed: false, optional: true, required: false
  private _clusterOperations = new GkeonpremBareMetalAdminClusterClusterOperationsOutputReference(this, "cluster_operations");
  public get clusterOperations() {
    return this._clusterOperations;
  }
  public putClusterOperations(value: GkeonpremBareMetalAdminClusterClusterOperations) {
    this._clusterOperations.internalValue = value;
  }
  public resetClusterOperations() {
    this._clusterOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterOperationsInput() {
    return this._clusterOperations.internalValue;
  }

  // control_plane - computed: false, optional: true, required: false
  private _controlPlane = new GkeonpremBareMetalAdminClusterControlPlaneOutputReference(this, "control_plane");
  public get controlPlane() {
    return this._controlPlane;
  }
  public putControlPlane(value: GkeonpremBareMetalAdminClusterControlPlane) {
    this._controlPlane.internalValue = value;
  }
  public resetControlPlane() {
    this._controlPlane.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new GkeonpremBareMetalAdminClusterLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: GkeonpremBareMetalAdminClusterLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // maintenance_config - computed: false, optional: true, required: false
  private _maintenanceConfig = new GkeonpremBareMetalAdminClusterMaintenanceConfigOutputReference(this, "maintenance_config");
  public get maintenanceConfig() {
    return this._maintenanceConfig;
  }
  public putMaintenanceConfig(value: GkeonpremBareMetalAdminClusterMaintenanceConfig) {
    this._maintenanceConfig.internalValue = value;
  }
  public resetMaintenanceConfig() {
    this._maintenanceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceConfigInput() {
    return this._maintenanceConfig.internalValue;
  }

  // network_config - computed: false, optional: true, required: false
  private _networkConfig = new GkeonpremBareMetalAdminClusterNetworkConfigOutputReference(this, "network_config");
  public get networkConfig() {
    return this._networkConfig;
  }
  public putNetworkConfig(value: GkeonpremBareMetalAdminClusterNetworkConfig) {
    this._networkConfig.internalValue = value;
  }
  public resetNetworkConfig() {
    this._networkConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigInput() {
    return this._networkConfig.internalValue;
  }

  // node_access_config - computed: false, optional: true, required: false
  private _nodeAccessConfig = new GkeonpremBareMetalAdminClusterNodeAccessConfigOutputReference(this, "node_access_config");
  public get nodeAccessConfig() {
    return this._nodeAccessConfig;
  }
  public putNodeAccessConfig(value: GkeonpremBareMetalAdminClusterNodeAccessConfig) {
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
  private _nodeConfig = new GkeonpremBareMetalAdminClusterNodeConfigOutputReference(this, "node_config");
  public get nodeConfig() {
    return this._nodeConfig;
  }
  public putNodeConfig(value: GkeonpremBareMetalAdminClusterNodeConfig) {
    this._nodeConfig.internalValue = value;
  }
  public resetNodeConfig() {
    this._nodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeConfigInput() {
    return this._nodeConfig.internalValue;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new GkeonpremBareMetalAdminClusterProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: GkeonpremBareMetalAdminClusterProxy) {
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
  private _securityConfig = new GkeonpremBareMetalAdminClusterSecurityConfigOutputReference(this, "security_config");
  public get securityConfig() {
    return this._securityConfig;
  }
  public putSecurityConfig(value: GkeonpremBareMetalAdminClusterSecurityConfig) {
    this._securityConfig.internalValue = value;
  }
  public resetSecurityConfig() {
    this._securityConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityConfigInput() {
    return this._securityConfig.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new GkeonpremBareMetalAdminClusterStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: GkeonpremBareMetalAdminClusterStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GkeonpremBareMetalAdminClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GkeonpremBareMetalAdminClusterTimeouts) {
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
      bare_metal_version: cdktf.stringToTerraform(this._bareMetalVersion),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      cluster_operations: gkeonpremBareMetalAdminClusterClusterOperationsToTerraform(this._clusterOperations.internalValue),
      control_plane: gkeonpremBareMetalAdminClusterControlPlaneToTerraform(this._controlPlane.internalValue),
      load_balancer: gkeonpremBareMetalAdminClusterLoadBalancerToTerraform(this._loadBalancer.internalValue),
      maintenance_config: gkeonpremBareMetalAdminClusterMaintenanceConfigToTerraform(this._maintenanceConfig.internalValue),
      network_config: gkeonpremBareMetalAdminClusterNetworkConfigToTerraform(this._networkConfig.internalValue),
      node_access_config: gkeonpremBareMetalAdminClusterNodeAccessConfigToTerraform(this._nodeAccessConfig.internalValue),
      node_config: gkeonpremBareMetalAdminClusterNodeConfigToTerraform(this._nodeConfig.internalValue),
      proxy: gkeonpremBareMetalAdminClusterProxyToTerraform(this._proxy.internalValue),
      security_config: gkeonpremBareMetalAdminClusterSecurityConfigToTerraform(this._securityConfig.internalValue),
      storage: gkeonpremBareMetalAdminClusterStorageToTerraform(this._storage.internalValue),
      timeouts: gkeonpremBareMetalAdminClusterTimeoutsToTerraform(this._timeouts.internalValue),
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
      cluster_operations: {
        value: gkeonpremBareMetalAdminClusterClusterOperationsToHclTerraform(this._clusterOperations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalAdminClusterClusterOperationsList",
      },
      control_plane: {
        value: gkeonpremBareMetalAdminClusterControlPlaneToHclTerraform(this._controlPlane.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalAdminClusterControlPlaneList",
      },
      load_balancer: {
        value: gkeonpremBareMetalAdminClusterLoadBalancerToHclTerraform(this._loadBalancer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalAdminClusterLoadBalancerList",
      },
      maintenance_config: {
        value: gkeonpremBareMetalAdminClusterMaintenanceConfigToHclTerraform(this._maintenanceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalAdminClusterMaintenanceConfigList",
      },
      network_config: {
        value: gkeonpremBareMetalAdminClusterNetworkConfigToHclTerraform(this._networkConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalAdminClusterNetworkConfigList",
      },
      node_access_config: {
        value: gkeonpremBareMetalAdminClusterNodeAccessConfigToHclTerraform(this._nodeAccessConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalAdminClusterNodeAccessConfigList",
      },
      node_config: {
        value: gkeonpremBareMetalAdminClusterNodeConfigToHclTerraform(this._nodeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalAdminClusterNodeConfigList",
      },
      proxy: {
        value: gkeonpremBareMetalAdminClusterProxyToHclTerraform(this._proxy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalAdminClusterProxyList",
      },
      security_config: {
        value: gkeonpremBareMetalAdminClusterSecurityConfigToHclTerraform(this._securityConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalAdminClusterSecurityConfigList",
      },
      storage: {
        value: gkeonpremBareMetalAdminClusterStorageToHclTerraform(this._storage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GkeonpremBareMetalAdminClusterStorageList",
      },
      timeouts: {
        value: gkeonpremBareMetalAdminClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GkeonpremBareMetalAdminClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
