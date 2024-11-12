// https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgecontainerClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default maximum number of pods per node used if a maximum value is not
  * specified explicitly for a node pool in this cluster. If unspecified, the
  * Kubernetes default value will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#default_max_pods_per_node EdgecontainerCluster#default_max_pods_per_node}
  */
  readonly defaultMaxPodsPerNode?: number;
  /**
  * Address pools for cluster data plane external load balancing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#external_load_balancer_ipv4_address_pools EdgecontainerCluster#external_load_balancer_ipv4_address_pools}
  */
  readonly externalLoadBalancerIpv4AddressPools?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#id EdgecontainerCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User-defined labels for the edgecloud cluster.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#labels EdgecontainerCluster#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#location EdgecontainerCluster#location}
  */
  readonly location: string;
  /**
  * The GDCE cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#name EdgecontainerCluster#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#project EdgecontainerCluster#project}
  */
  readonly project?: string;
  /**
  * The release channel a cluster is subscribed to. Possible values: ["RELEASE_CHANNEL_UNSPECIFIED", "NONE", "REGULAR"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#release_channel EdgecontainerCluster#release_channel}
  */
  readonly releaseChannel?: string;
  /**
  * The target cluster version. For example: "1.5.0".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#target_version EdgecontainerCluster#target_version}
  */
  readonly targetVersion?: string;
  /**
  * authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#authorization EdgecontainerCluster#authorization}
  */
  readonly authorization: EdgecontainerClusterAuthorization;
  /**
  * control_plane block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#control_plane EdgecontainerCluster#control_plane}
  */
  readonly controlPlane?: EdgecontainerClusterControlPlane;
  /**
  * control_plane_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#control_plane_encryption EdgecontainerCluster#control_plane_encryption}
  */
  readonly controlPlaneEncryption?: EdgecontainerClusterControlPlaneEncryption;
  /**
  * fleet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#fleet EdgecontainerCluster#fleet}
  */
  readonly fleet: EdgecontainerClusterFleet;
  /**
  * maintenance_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#maintenance_policy EdgecontainerCluster#maintenance_policy}
  */
  readonly maintenancePolicy?: EdgecontainerClusterMaintenancePolicy;
  /**
  * networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#networking EdgecontainerCluster#networking}
  */
  readonly networking: EdgecontainerClusterNetworking;
  /**
  * system_addons_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#system_addons_config EdgecontainerCluster#system_addons_config}
  */
  readonly systemAddonsConfig?: EdgecontainerClusterSystemAddonsConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#timeouts EdgecontainerCluster#timeouts}
  */
  readonly timeouts?: EdgecontainerClusterTimeouts;
}
export interface EdgecontainerClusterMaintenanceEvents {
}

export function edgecontainerClusterMaintenanceEventsToTerraform(struct?: EdgecontainerClusterMaintenanceEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function edgecontainerClusterMaintenanceEventsToHclTerraform(struct?: EdgecontainerClusterMaintenanceEvents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EdgecontainerClusterMaintenanceEventsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgecontainerClusterMaintenanceEvents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgecontainerClusterMaintenanceEvents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // operation - computed: true, optional: false, required: false
  public get operation() {
    return this.getStringAttribute('operation');
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // target_version - computed: true, optional: false, required: false
  public get targetVersion() {
    return this.getStringAttribute('target_version');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class EdgecontainerClusterMaintenanceEventsList extends cdktf.ComplexList {

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
  public get(index: number): EdgecontainerClusterMaintenanceEventsOutputReference {
    return new EdgecontainerClusterMaintenanceEventsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgecontainerClusterAuthorizationAdminUsers {
  /**
  * An active Google username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#username EdgecontainerCluster#username}
  */
  readonly username: string;
}

export function edgecontainerClusterAuthorizationAdminUsersToTerraform(struct?: EdgecontainerClusterAuthorizationAdminUsersOutputReference | EdgecontainerClusterAuthorizationAdminUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function edgecontainerClusterAuthorizationAdminUsersToHclTerraform(struct?: EdgecontainerClusterAuthorizationAdminUsersOutputReference | EdgecontainerClusterAuthorizationAdminUsers): any {
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

export class EdgecontainerClusterAuthorizationAdminUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgecontainerClusterAuthorizationAdminUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgecontainerClusterAuthorizationAdminUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface EdgecontainerClusterAuthorization {
  /**
  * admin_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#admin_users EdgecontainerCluster#admin_users}
  */
  readonly adminUsers: EdgecontainerClusterAuthorizationAdminUsers;
}

export function edgecontainerClusterAuthorizationToTerraform(struct?: EdgecontainerClusterAuthorizationOutputReference | EdgecontainerClusterAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_users: edgecontainerClusterAuthorizationAdminUsersToTerraform(struct!.adminUsers),
  }
}


export function edgecontainerClusterAuthorizationToHclTerraform(struct?: EdgecontainerClusterAuthorizationOutputReference | EdgecontainerClusterAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_users: {
      value: edgecontainerClusterAuthorizationAdminUsersToHclTerraform(struct!.adminUsers),
      isBlock: true,
      type: "list",
      storageClassType: "EdgecontainerClusterAuthorizationAdminUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgecontainerClusterAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgecontainerClusterAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsers = this._adminUsers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgecontainerClusterAuthorization | undefined) {
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
  private _adminUsers = new EdgecontainerClusterAuthorizationAdminUsersOutputReference(this, "admin_users");
  public get adminUsers() {
    return this._adminUsers;
  }
  public putAdminUsers(value: EdgecontainerClusterAuthorizationAdminUsers) {
    this._adminUsers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsersInput() {
    return this._adminUsers.internalValue;
  }
}
export interface EdgecontainerClusterControlPlaneLocal {
  /**
  * Only machines matching this filter will be allowed to host control
  * plane nodes. The filtering language accepts strings like "name=<name>",
  * and is documented here: [AIP-160](https://google.aip.dev/160).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#machine_filter EdgecontainerCluster#machine_filter}
  */
  readonly machineFilter?: string;
  /**
  * The number of nodes to serve as replicas of the Control Plane.
  * Only 1 and 3 are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#node_count EdgecontainerCluster#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Name of the Google Distributed Cloud Edge zones where this node pool
  * will be created. For example: 'us-central1-edge-customer-a'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#node_location EdgecontainerCluster#node_location}
  */
  readonly nodeLocation?: string;
  /**
  * Policy configuration about how user applications are deployed. Possible values: ["SHARED_DEPLOYMENT_POLICY_UNSPECIFIED", "ALLOWED", "DISALLOWED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#shared_deployment_policy EdgecontainerCluster#shared_deployment_policy}
  */
  readonly sharedDeploymentPolicy?: string;
}

export function edgecontainerClusterControlPlaneLocalToTerraform(struct?: EdgecontainerClusterControlPlaneLocalOutputReference | EdgecontainerClusterControlPlaneLocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_filter: cdktf.stringToTerraform(struct!.machineFilter),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    node_location: cdktf.stringToTerraform(struct!.nodeLocation),
    shared_deployment_policy: cdktf.stringToTerraform(struct!.sharedDeploymentPolicy),
  }
}


export function edgecontainerClusterControlPlaneLocalToHclTerraform(struct?: EdgecontainerClusterControlPlaneLocalOutputReference | EdgecontainerClusterControlPlaneLocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    machine_filter: {
      value: cdktf.stringToHclTerraform(struct!.machineFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_location: {
      value: cdktf.stringToHclTerraform(struct!.nodeLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_deployment_policy: {
      value: cdktf.stringToHclTerraform(struct!.sharedDeploymentPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgecontainerClusterControlPlaneLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgecontainerClusterControlPlaneLocal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineFilter = this._machineFilter;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._nodeLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLocation = this._nodeLocation;
    }
    if (this._sharedDeploymentPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedDeploymentPolicy = this._sharedDeploymentPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgecontainerClusterControlPlaneLocal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._machineFilter = undefined;
      this._nodeCount = undefined;
      this._nodeLocation = undefined;
      this._sharedDeploymentPolicy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._machineFilter = value.machineFilter;
      this._nodeCount = value.nodeCount;
      this._nodeLocation = value.nodeLocation;
      this._sharedDeploymentPolicy = value.sharedDeploymentPolicy;
    }
  }

  // machine_filter - computed: false, optional: true, required: false
  private _machineFilter?: string; 
  public get machineFilter() {
    return this.getStringAttribute('machine_filter');
  }
  public set machineFilter(value: string) {
    this._machineFilter = value;
  }
  public resetMachineFilter() {
    this._machineFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineFilterInput() {
    return this._machineFilter;
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
    return this._nodeCount;
  }

  // node_location - computed: true, optional: true, required: false
  private _nodeLocation?: string; 
  public get nodeLocation() {
    return this.getStringAttribute('node_location');
  }
  public set nodeLocation(value: string) {
    this._nodeLocation = value;
  }
  public resetNodeLocation() {
    this._nodeLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLocationInput() {
    return this._nodeLocation;
  }

  // shared_deployment_policy - computed: true, optional: true, required: false
  private _sharedDeploymentPolicy?: string; 
  public get sharedDeploymentPolicy() {
    return this.getStringAttribute('shared_deployment_policy');
  }
  public set sharedDeploymentPolicy(value: string) {
    this._sharedDeploymentPolicy = value;
  }
  public resetSharedDeploymentPolicy() {
    this._sharedDeploymentPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedDeploymentPolicyInput() {
    return this._sharedDeploymentPolicy;
  }
}
export interface EdgecontainerClusterControlPlaneRemote {
  /**
  * Name of the Google Distributed Cloud Edge zones where this node pool
  * will be created. For example: 'us-central1-edge-customer-a'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#node_location EdgecontainerCluster#node_location}
  */
  readonly nodeLocation?: string;
}

export function edgecontainerClusterControlPlaneRemoteToTerraform(struct?: EdgecontainerClusterControlPlaneRemoteOutputReference | EdgecontainerClusterControlPlaneRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_location: cdktf.stringToTerraform(struct!.nodeLocation),
  }
}


export function edgecontainerClusterControlPlaneRemoteToHclTerraform(struct?: EdgecontainerClusterControlPlaneRemoteOutputReference | EdgecontainerClusterControlPlaneRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_location: {
      value: cdktf.stringToHclTerraform(struct!.nodeLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgecontainerClusterControlPlaneRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgecontainerClusterControlPlaneRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLocation = this._nodeLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgecontainerClusterControlPlaneRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeLocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeLocation = value.nodeLocation;
    }
  }

  // node_location - computed: true, optional: true, required: false
  private _nodeLocation?: string; 
  public get nodeLocation() {
    return this.getStringAttribute('node_location');
  }
  public set nodeLocation(value: string) {
    this._nodeLocation = value;
  }
  public resetNodeLocation() {
    this._nodeLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLocationInput() {
    return this._nodeLocation;
  }
}
export interface EdgecontainerClusterControlPlane {
  /**
  * local block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#local EdgecontainerCluster#local}
  */
  readonly local?: EdgecontainerClusterControlPlaneLocal;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#remote EdgecontainerCluster#remote}
  */
  readonly remote?: EdgecontainerClusterControlPlaneRemote;
}

export function edgecontainerClusterControlPlaneToTerraform(struct?: EdgecontainerClusterControlPlaneOutputReference | EdgecontainerClusterControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local: edgecontainerClusterControlPlaneLocalToTerraform(struct!.local),
    remote: edgecontainerClusterControlPlaneRemoteToTerraform(struct!.remote),
  }
}


export function edgecontainerClusterControlPlaneToHclTerraform(struct?: EdgecontainerClusterControlPlaneOutputReference | EdgecontainerClusterControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local: {
      value: edgecontainerClusterControlPlaneLocalToHclTerraform(struct!.local),
      isBlock: true,
      type: "list",
      storageClassType: "EdgecontainerClusterControlPlaneLocalList",
    },
    remote: {
      value: edgecontainerClusterControlPlaneRemoteToHclTerraform(struct!.remote),
      isBlock: true,
      type: "list",
      storageClassType: "EdgecontainerClusterControlPlaneRemoteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgecontainerClusterControlPlaneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgecontainerClusterControlPlane | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._local?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgecontainerClusterControlPlane | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._local.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._local.internalValue = value.local;
      this._remote.internalValue = value.remote;
    }
  }

  // local - computed: false, optional: true, required: false
  private _local = new EdgecontainerClusterControlPlaneLocalOutputReference(this, "local");
  public get local() {
    return this._local;
  }
  public putLocal(value: EdgecontainerClusterControlPlaneLocal) {
    this._local.internalValue = value;
  }
  public resetLocal() {
    this._local.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new EdgecontainerClusterControlPlaneRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: EdgecontainerClusterControlPlaneRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface EdgecontainerClusterControlPlaneEncryptionKmsStatus {
}

export function edgecontainerClusterControlPlaneEncryptionKmsStatusToTerraform(struct?: EdgecontainerClusterControlPlaneEncryptionKmsStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function edgecontainerClusterControlPlaneEncryptionKmsStatusToHclTerraform(struct?: EdgecontainerClusterControlPlaneEncryptionKmsStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgecontainerClusterControlPlaneEncryptionKmsStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgecontainerClusterControlPlaneEncryptionKmsStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class EdgecontainerClusterControlPlaneEncryptionKmsStatusList extends cdktf.ComplexList {

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
  public get(index: number): EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference {
    return new EdgecontainerClusterControlPlaneEncryptionKmsStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgecontainerClusterControlPlaneEncryption {
  /**
  * The Cloud KMS CryptoKey e.g.
  * projects/{project}/locations/{location}/keyRings/{keyRing}/cryptoKeys/{cryptoKey}
  * to use for protecting control plane disks. If not specified, a
  * Google-managed key will be used instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#kms_key EdgecontainerCluster#kms_key}
  */
  readonly kmsKey?: string;
}

export function edgecontainerClusterControlPlaneEncryptionToTerraform(struct?: EdgecontainerClusterControlPlaneEncryptionOutputReference | EdgecontainerClusterControlPlaneEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
  }
}


export function edgecontainerClusterControlPlaneEncryptionToHclTerraform(struct?: EdgecontainerClusterControlPlaneEncryptionOutputReference | EdgecontainerClusterControlPlaneEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgecontainerClusterControlPlaneEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgecontainerClusterControlPlaneEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgecontainerClusterControlPlaneEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKey = value.kmsKey;
    }
  }

  // kms_key - computed: true, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // kms_key_active_version - computed: true, optional: false, required: false
  public get kmsKeyActiveVersion() {
    return this.getStringAttribute('kms_key_active_version');
  }

  // kms_key_state - computed: true, optional: false, required: false
  public get kmsKeyState() {
    return this.getStringAttribute('kms_key_state');
  }

  // kms_status - computed: true, optional: false, required: false
  private _kmsStatus = new EdgecontainerClusterControlPlaneEncryptionKmsStatusList(this, "kms_status", false);
  public get kmsStatus() {
    return this._kmsStatus;
  }
}
export interface EdgecontainerClusterFleet {
  /**
  * The name of the Fleet host project where this cluster will be registered.
  * Project names are formatted as
  * 'projects/<project-number>'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#project EdgecontainerCluster#project}
  */
  readonly project: string;
}

export function edgecontainerClusterFleetToTerraform(struct?: EdgecontainerClusterFleetOutputReference | EdgecontainerClusterFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function edgecontainerClusterFleetToHclTerraform(struct?: EdgecontainerClusterFleetOutputReference | EdgecontainerClusterFleet): any {
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

export class EdgecontainerClusterFleetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgecontainerClusterFleet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgecontainerClusterFleet | undefined) {
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
export interface EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow {
  /**
  * The time that the window ends. The end time must take place after the
  * start time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#end_time EdgecontainerCluster#end_time}
  */
  readonly endTime?: string;
  /**
  * The time that the window first starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#start_time EdgecontainerCluster#start_time}
  */
  readonly startTime?: string;
}

export function edgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowToTerraform(struct?: EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference | EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function edgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowToHclTerraform(struct?: EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference | EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow): any {
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

export class EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface EdgecontainerClusterMaintenancePolicyMaintenanceExclusions {
  /**
  * A unique (per cluster) id for the window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#id EdgecontainerCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#window EdgecontainerCluster#window}
  */
  readonly window?: EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow;
}

export function edgecontainerClusterMaintenancePolicyMaintenanceExclusionsToTerraform(struct?: EdgecontainerClusterMaintenancePolicyMaintenanceExclusions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    window: edgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowToTerraform(struct!.window),
  }
}


export function edgecontainerClusterMaintenancePolicyMaintenanceExclusionsToHclTerraform(struct?: EdgecontainerClusterMaintenancePolicyMaintenanceExclusions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window: {
      value: edgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowToHclTerraform(struct!.window),
      isBlock: true,
      type: "list",
      storageClassType: "EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgecontainerClusterMaintenancePolicyMaintenanceExclusions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._window?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgecontainerClusterMaintenancePolicyMaintenanceExclusions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._window.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._window.internalValue = value.window;
    }
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

  // window - computed: false, optional: true, required: false
  private _window = new EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindowOutputReference(this, "window");
  public get window() {
    return this._window;
  }
  public putWindow(value: EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsWindow) {
    this._window.internalValue = value;
  }
  public resetWindow() {
    this._window.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window.internalValue;
  }
}

export class EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList extends cdktf.ComplexList {
  public internalValue? : EdgecontainerClusterMaintenancePolicyMaintenanceExclusions[] | cdktf.IResolvable

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
  public get(index: number): EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference {
    return new EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow {
  /**
  * The time that the window ends. The end time must take place after the
  * start time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#end_time EdgecontainerCluster#end_time}
  */
  readonly endTime?: string;
  /**
  * The time that the window first starts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#start_time EdgecontainerCluster#start_time}
  */
  readonly startTime?: string;
}

export function edgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowToTerraform(struct?: EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference | EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
  }
}


export function edgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowToHclTerraform(struct?: EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference | EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow): any {
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

export class EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endTime = undefined;
      this._startTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
    }
  }

  // end_time - computed: true, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }
}
export interface EdgecontainerClusterMaintenancePolicyWindowRecurringWindow {
  /**
  * An RRULE (https://tools.ietf.org/html/rfc5545#section-3.8.5.3) for how
  * this window recurs. They go on for the span of time between the start and
  * end time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#recurrence EdgecontainerCluster#recurrence}
  */
  readonly recurrence?: string;
  /**
  * window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#window EdgecontainerCluster#window}
  */
  readonly window?: EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow;
}

export function edgecontainerClusterMaintenancePolicyWindowRecurringWindowToTerraform(struct?: EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference | EdgecontainerClusterMaintenancePolicyWindowRecurringWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurrence: cdktf.stringToTerraform(struct!.recurrence),
    window: edgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowToTerraform(struct!.window),
  }
}


export function edgecontainerClusterMaintenancePolicyWindowRecurringWindowToHclTerraform(struct?: EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference | EdgecontainerClusterMaintenancePolicyWindowRecurringWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurrence: {
      value: cdktf.stringToHclTerraform(struct!.recurrence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window: {
      value: edgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowToHclTerraform(struct!.window),
      isBlock: true,
      type: "list",
      storageClassType: "EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgecontainerClusterMaintenancePolicyWindowRecurringWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrence = this._recurrence;
    }
    if (this._window?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgecontainerClusterMaintenancePolicyWindowRecurringWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recurrence = undefined;
      this._window.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recurrence = value.recurrence;
      this._window.internalValue = value.window;
    }
  }

  // recurrence - computed: true, optional: true, required: false
  private _recurrence?: string; 
  public get recurrence() {
    return this.getStringAttribute('recurrence');
  }
  public set recurrence(value: string) {
    this._recurrence = value;
  }
  public resetRecurrence() {
    this._recurrence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceInput() {
    return this._recurrence;
  }

  // window - computed: false, optional: true, required: false
  private _window = new EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindowOutputReference(this, "window");
  public get window() {
    return this._window;
  }
  public putWindow(value: EdgecontainerClusterMaintenancePolicyWindowRecurringWindowWindow) {
    this._window.internalValue = value;
  }
  public resetWindow() {
    this._window.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window.internalValue;
  }
}
export interface EdgecontainerClusterMaintenancePolicyWindow {
  /**
  * recurring_window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#recurring_window EdgecontainerCluster#recurring_window}
  */
  readonly recurringWindow: EdgecontainerClusterMaintenancePolicyWindowRecurringWindow;
}

export function edgecontainerClusterMaintenancePolicyWindowToTerraform(struct?: EdgecontainerClusterMaintenancePolicyWindowOutputReference | EdgecontainerClusterMaintenancePolicyWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurring_window: edgecontainerClusterMaintenancePolicyWindowRecurringWindowToTerraform(struct!.recurringWindow),
  }
}


export function edgecontainerClusterMaintenancePolicyWindowToHclTerraform(struct?: EdgecontainerClusterMaintenancePolicyWindowOutputReference | EdgecontainerClusterMaintenancePolicyWindow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurring_window: {
      value: edgecontainerClusterMaintenancePolicyWindowRecurringWindowToHclTerraform(struct!.recurringWindow),
      isBlock: true,
      type: "list",
      storageClassType: "EdgecontainerClusterMaintenancePolicyWindowRecurringWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgecontainerClusterMaintenancePolicyWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgecontainerClusterMaintenancePolicyWindow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recurringWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurringWindow = this._recurringWindow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgecontainerClusterMaintenancePolicyWindow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recurringWindow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recurringWindow.internalValue = value.recurringWindow;
    }
  }

  // recurring_window - computed: false, optional: false, required: true
  private _recurringWindow = new EdgecontainerClusterMaintenancePolicyWindowRecurringWindowOutputReference(this, "recurring_window");
  public get recurringWindow() {
    return this._recurringWindow;
  }
  public putRecurringWindow(value: EdgecontainerClusterMaintenancePolicyWindowRecurringWindow) {
    this._recurringWindow.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringWindowInput() {
    return this._recurringWindow.internalValue;
  }
}
export interface EdgecontainerClusterMaintenancePolicy {
  /**
  * maintenance_exclusions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#maintenance_exclusions EdgecontainerCluster#maintenance_exclusions}
  */
  readonly maintenanceExclusions?: EdgecontainerClusterMaintenancePolicyMaintenanceExclusions[] | cdktf.IResolvable;
  /**
  * window block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#window EdgecontainerCluster#window}
  */
  readonly window: EdgecontainerClusterMaintenancePolicyWindow;
}

export function edgecontainerClusterMaintenancePolicyToTerraform(struct?: EdgecontainerClusterMaintenancePolicyOutputReference | EdgecontainerClusterMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance_exclusions: cdktf.listMapper(edgecontainerClusterMaintenancePolicyMaintenanceExclusionsToTerraform, true)(struct!.maintenanceExclusions),
    window: edgecontainerClusterMaintenancePolicyWindowToTerraform(struct!.window),
  }
}


export function edgecontainerClusterMaintenancePolicyToHclTerraform(struct?: EdgecontainerClusterMaintenancePolicyOutputReference | EdgecontainerClusterMaintenancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance_exclusions: {
      value: cdktf.listMapperHcl(edgecontainerClusterMaintenancePolicyMaintenanceExclusionsToHclTerraform, true)(struct!.maintenanceExclusions),
      isBlock: true,
      type: "list",
      storageClassType: "EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList",
    },
    window: {
      value: edgecontainerClusterMaintenancePolicyWindowToHclTerraform(struct!.window),
      isBlock: true,
      type: "list",
      storageClassType: "EdgecontainerClusterMaintenancePolicyWindowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgecontainerClusterMaintenancePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgecontainerClusterMaintenancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenanceExclusions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceExclusions = this._maintenanceExclusions?.internalValue;
    }
    if (this._window?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgecontainerClusterMaintenancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenanceExclusions.internalValue = undefined;
      this._window.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenanceExclusions.internalValue = value.maintenanceExclusions;
      this._window.internalValue = value.window;
    }
  }

  // maintenance_exclusions - computed: false, optional: true, required: false
  private _maintenanceExclusions = new EdgecontainerClusterMaintenancePolicyMaintenanceExclusionsList(this, "maintenance_exclusions", false);
  public get maintenanceExclusions() {
    return this._maintenanceExclusions;
  }
  public putMaintenanceExclusions(value: EdgecontainerClusterMaintenancePolicyMaintenanceExclusions[] | cdktf.IResolvable) {
    this._maintenanceExclusions.internalValue = value;
  }
  public resetMaintenanceExclusions() {
    this._maintenanceExclusions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceExclusionsInput() {
    return this._maintenanceExclusions.internalValue;
  }

  // window - computed: false, optional: false, required: true
  private _window = new EdgecontainerClusterMaintenancePolicyWindowOutputReference(this, "window");
  public get window() {
    return this._window;
  }
  public putWindow(value: EdgecontainerClusterMaintenancePolicyWindow) {
    this._window.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window.internalValue;
  }
}
export interface EdgecontainerClusterNetworking {
  /**
  * All pods in the cluster are assigned an RFC1918 IPv4 address from these
  * blocks. Only a single block is supported. This field cannot be changed
  * after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#cluster_ipv4_cidr_blocks EdgecontainerCluster#cluster_ipv4_cidr_blocks}
  */
  readonly clusterIpv4CidrBlocks: string[];
  /**
  * If specified, dual stack mode is enabled and all pods in the cluster are
  * assigned an IPv6 address from these blocks alongside from an IPv4
  * address. Only a single block is supported. This field cannot be changed
  * after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#cluster_ipv6_cidr_blocks EdgecontainerCluster#cluster_ipv6_cidr_blocks}
  */
  readonly clusterIpv6CidrBlocks?: string[];
  /**
  * All services in the cluster are assigned an RFC1918 IPv4 address from these
  * blocks. Only a single block is supported. This field cannot be changed
  * after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#services_ipv4_cidr_blocks EdgecontainerCluster#services_ipv4_cidr_blocks}
  */
  readonly servicesIpv4CidrBlocks: string[];
  /**
  * If specified, dual stack mode is enabled and all services in the cluster are
  * assigned an IPv6 address from these blocks alongside from an IPv4
  * address. Only a single block is supported. This field cannot be changed
  * after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#services_ipv6_cidr_blocks EdgecontainerCluster#services_ipv6_cidr_blocks}
  */
  readonly servicesIpv6CidrBlocks?: string[];
}

export function edgecontainerClusterNetworkingToTerraform(struct?: EdgecontainerClusterNetworkingOutputReference | EdgecontainerClusterNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_ipv4_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterIpv4CidrBlocks),
    cluster_ipv6_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterIpv6CidrBlocks),
    services_ipv4_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.servicesIpv4CidrBlocks),
    services_ipv6_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.servicesIpv6CidrBlocks),
  }
}


export function edgecontainerClusterNetworkingToHclTerraform(struct?: EdgecontainerClusterNetworkingOutputReference | EdgecontainerClusterNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_ipv4_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterIpv4CidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster_ipv6_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterIpv6CidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    services_ipv4_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.servicesIpv4CidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    services_ipv6_cidr_blocks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.servicesIpv6CidrBlocks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgecontainerClusterNetworkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgecontainerClusterNetworking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterIpv4CidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIpv4CidrBlocks = this._clusterIpv4CidrBlocks;
    }
    if (this._clusterIpv6CidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterIpv6CidrBlocks = this._clusterIpv6CidrBlocks;
    }
    if (this._servicesIpv4CidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesIpv4CidrBlocks = this._servicesIpv4CidrBlocks;
    }
    if (this._servicesIpv6CidrBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.servicesIpv6CidrBlocks = this._servicesIpv6CidrBlocks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgecontainerClusterNetworking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterIpv4CidrBlocks = undefined;
      this._clusterIpv6CidrBlocks = undefined;
      this._servicesIpv4CidrBlocks = undefined;
      this._servicesIpv6CidrBlocks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterIpv4CidrBlocks = value.clusterIpv4CidrBlocks;
      this._clusterIpv6CidrBlocks = value.clusterIpv6CidrBlocks;
      this._servicesIpv4CidrBlocks = value.servicesIpv4CidrBlocks;
      this._servicesIpv6CidrBlocks = value.servicesIpv6CidrBlocks;
    }
  }

  // cluster_ipv4_cidr_blocks - computed: false, optional: false, required: true
  private _clusterIpv4CidrBlocks?: string[]; 
  public get clusterIpv4CidrBlocks() {
    return this.getListAttribute('cluster_ipv4_cidr_blocks');
  }
  public set clusterIpv4CidrBlocks(value: string[]) {
    this._clusterIpv4CidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpv4CidrBlocksInput() {
    return this._clusterIpv4CidrBlocks;
  }

  // cluster_ipv6_cidr_blocks - computed: false, optional: true, required: false
  private _clusterIpv6CidrBlocks?: string[]; 
  public get clusterIpv6CidrBlocks() {
    return this.getListAttribute('cluster_ipv6_cidr_blocks');
  }
  public set clusterIpv6CidrBlocks(value: string[]) {
    this._clusterIpv6CidrBlocks = value;
  }
  public resetClusterIpv6CidrBlocks() {
    this._clusterIpv6CidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIpv6CidrBlocksInput() {
    return this._clusterIpv6CidrBlocks;
  }

  // network_type - computed: true, optional: false, required: false
  public get networkType() {
    return this.getStringAttribute('network_type');
  }

  // services_ipv4_cidr_blocks - computed: false, optional: false, required: true
  private _servicesIpv4CidrBlocks?: string[]; 
  public get servicesIpv4CidrBlocks() {
    return this.getListAttribute('services_ipv4_cidr_blocks');
  }
  public set servicesIpv4CidrBlocks(value: string[]) {
    this._servicesIpv4CidrBlocks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesIpv4CidrBlocksInput() {
    return this._servicesIpv4CidrBlocks;
  }

  // services_ipv6_cidr_blocks - computed: false, optional: true, required: false
  private _servicesIpv6CidrBlocks?: string[]; 
  public get servicesIpv6CidrBlocks() {
    return this.getListAttribute('services_ipv6_cidr_blocks');
  }
  public set servicesIpv6CidrBlocks(value: string[]) {
    this._servicesIpv6CidrBlocks = value;
  }
  public resetServicesIpv6CidrBlocks() {
    this._servicesIpv6CidrBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesIpv6CidrBlocksInput() {
    return this._servicesIpv6CidrBlocks;
  }
}
export interface EdgecontainerClusterSystemAddonsConfigIngress {
  /**
  * Whether Ingress is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#disabled EdgecontainerCluster#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Ingress VIP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#ipv4_vip EdgecontainerCluster#ipv4_vip}
  */
  readonly ipv4Vip?: string;
}

export function edgecontainerClusterSystemAddonsConfigIngressToTerraform(struct?: EdgecontainerClusterSystemAddonsConfigIngressOutputReference | EdgecontainerClusterSystemAddonsConfigIngress): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    ipv4_vip: cdktf.stringToTerraform(struct!.ipv4Vip),
  }
}


export function edgecontainerClusterSystemAddonsConfigIngressToHclTerraform(struct?: EdgecontainerClusterSystemAddonsConfigIngressOutputReference | EdgecontainerClusterSystemAddonsConfigIngress): any {
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
    ipv4_vip: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Vip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgecontainerClusterSystemAddonsConfigIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgecontainerClusterSystemAddonsConfigIngress | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._ipv4Vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Vip = this._ipv4Vip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgecontainerClusterSystemAddonsConfigIngress | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled = undefined;
      this._ipv4Vip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled = value.disabled;
      this._ipv4Vip = value.ipv4Vip;
    }
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // ipv4_vip - computed: true, optional: true, required: false
  private _ipv4Vip?: string; 
  public get ipv4Vip() {
    return this.getStringAttribute('ipv4_vip');
  }
  public set ipv4Vip(value: string) {
    this._ipv4Vip = value;
  }
  public resetIpv4Vip() {
    this._ipv4Vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4VipInput() {
    return this._ipv4Vip;
  }
}
export interface EdgecontainerClusterSystemAddonsConfig {
  /**
  * ingress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#ingress EdgecontainerCluster#ingress}
  */
  readonly ingress?: EdgecontainerClusterSystemAddonsConfigIngress;
}

export function edgecontainerClusterSystemAddonsConfigToTerraform(struct?: EdgecontainerClusterSystemAddonsConfigOutputReference | EdgecontainerClusterSystemAddonsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress: edgecontainerClusterSystemAddonsConfigIngressToTerraform(struct!.ingress),
  }
}


export function edgecontainerClusterSystemAddonsConfigToHclTerraform(struct?: EdgecontainerClusterSystemAddonsConfigOutputReference | EdgecontainerClusterSystemAddonsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingress: {
      value: edgecontainerClusterSystemAddonsConfigIngressToHclTerraform(struct!.ingress),
      isBlock: true,
      type: "list",
      storageClassType: "EdgecontainerClusterSystemAddonsConfigIngressList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgecontainerClusterSystemAddonsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgecontainerClusterSystemAddonsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgecontainerClusterSystemAddonsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ingress.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ingress.internalValue = value.ingress;
    }
  }

  // ingress - computed: false, optional: true, required: false
  private _ingress = new EdgecontainerClusterSystemAddonsConfigIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: EdgecontainerClusterSystemAddonsConfigIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }
}
export interface EdgecontainerClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#create EdgecontainerCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#delete EdgecontainerCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#update EdgecontainerCluster#update}
  */
  readonly update?: string;
}

export function edgecontainerClusterTimeoutsToTerraform(struct?: EdgecontainerClusterTimeouts | cdktf.IResolvable): any {
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


export function edgecontainerClusterTimeoutsToHclTerraform(struct?: EdgecontainerClusterTimeouts | cdktf.IResolvable): any {
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

export class EdgecontainerClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EdgecontainerClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EdgecontainerClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster google_edgecontainer_cluster}
*/
export class EdgecontainerCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_edgecontainer_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgecontainerCluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgecontainerCluster to import
  * @param importFromId The id of the existing EdgecontainerCluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgecontainerCluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_edgecontainer_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/edgecontainer_cluster google_edgecontainer_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgecontainerClusterConfig
  */
  public constructor(scope: Construct, id: string, config: EdgecontainerClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_edgecontainer_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.11.0',
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
    this._defaultMaxPodsPerNode = config.defaultMaxPodsPerNode;
    this._externalLoadBalancerIpv4AddressPools = config.externalLoadBalancerIpv4AddressPools;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._releaseChannel = config.releaseChannel;
    this._targetVersion = config.targetVersion;
    this._authorization.internalValue = config.authorization;
    this._controlPlane.internalValue = config.controlPlane;
    this._controlPlaneEncryption.internalValue = config.controlPlaneEncryption;
    this._fleet.internalValue = config.fleet;
    this._maintenancePolicy.internalValue = config.maintenancePolicy;
    this._networking.internalValue = config.networking;
    this._systemAddonsConfig.internalValue = config.systemAddonsConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_ca_certificate - computed: true, optional: false, required: false
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // control_plane_version - computed: true, optional: false, required: false
  public get controlPlaneVersion() {
    return this.getStringAttribute('control_plane_version');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // default_max_pods_per_node - computed: true, optional: true, required: false
  private _defaultMaxPodsPerNode?: number; 
  public get defaultMaxPodsPerNode() {
    return this.getNumberAttribute('default_max_pods_per_node');
  }
  public set defaultMaxPodsPerNode(value: number) {
    this._defaultMaxPodsPerNode = value;
  }
  public resetDefaultMaxPodsPerNode() {
    this._defaultMaxPodsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMaxPodsPerNodeInput() {
    return this._defaultMaxPodsPerNode;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // external_load_balancer_ipv4_address_pools - computed: true, optional: true, required: false
  private _externalLoadBalancerIpv4AddressPools?: string[]; 
  public get externalLoadBalancerIpv4AddressPools() {
    return this.getListAttribute('external_load_balancer_ipv4_address_pools');
  }
  public set externalLoadBalancerIpv4AddressPools(value: string[]) {
    this._externalLoadBalancerIpv4AddressPools = value;
  }
  public resetExternalLoadBalancerIpv4AddressPools() {
    this._externalLoadBalancerIpv4AddressPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLoadBalancerIpv4AddressPoolsInput() {
    return this._externalLoadBalancerIpv4AddressPools;
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

  // maintenance_events - computed: true, optional: false, required: false
  private _maintenanceEvents = new EdgecontainerClusterMaintenanceEventsList(this, "maintenance_events", false);
  public get maintenanceEvents() {
    return this._maintenanceEvents;
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

  // node_version - computed: true, optional: false, required: false
  public get nodeVersion() {
    return this.getStringAttribute('node_version');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
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

  // release_channel - computed: true, optional: true, required: false
  private _releaseChannel?: string; 
  public get releaseChannel() {
    return this.getStringAttribute('release_channel');
  }
  public set releaseChannel(value: string) {
    this._releaseChannel = value;
  }
  public resetReleaseChannel() {
    this._releaseChannel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseChannelInput() {
    return this._releaseChannel;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // target_version - computed: true, optional: true, required: false
  private _targetVersion?: string; 
  public get targetVersion() {
    return this.getStringAttribute('target_version');
  }
  public set targetVersion(value: string) {
    this._targetVersion = value;
  }
  public resetTargetVersion() {
    this._targetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetVersionInput() {
    return this._targetVersion;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // authorization - computed: false, optional: false, required: true
  private _authorization = new EdgecontainerClusterAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: EdgecontainerClusterAuthorization) {
    this._authorization.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // control_plane - computed: false, optional: true, required: false
  private _controlPlane = new EdgecontainerClusterControlPlaneOutputReference(this, "control_plane");
  public get controlPlane() {
    return this._controlPlane;
  }
  public putControlPlane(value: EdgecontainerClusterControlPlane) {
    this._controlPlane.internalValue = value;
  }
  public resetControlPlane() {
    this._controlPlane.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane.internalValue;
  }

  // control_plane_encryption - computed: false, optional: true, required: false
  private _controlPlaneEncryption = new EdgecontainerClusterControlPlaneEncryptionOutputReference(this, "control_plane_encryption");
  public get controlPlaneEncryption() {
    return this._controlPlaneEncryption;
  }
  public putControlPlaneEncryption(value: EdgecontainerClusterControlPlaneEncryption) {
    this._controlPlaneEncryption.internalValue = value;
  }
  public resetControlPlaneEncryption() {
    this._controlPlaneEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneEncryptionInput() {
    return this._controlPlaneEncryption.internalValue;
  }

  // fleet - computed: false, optional: false, required: true
  private _fleet = new EdgecontainerClusterFleetOutputReference(this, "fleet");
  public get fleet() {
    return this._fleet;
  }
  public putFleet(value: EdgecontainerClusterFleet) {
    this._fleet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetInput() {
    return this._fleet.internalValue;
  }

  // maintenance_policy - computed: false, optional: true, required: false
  private _maintenancePolicy = new EdgecontainerClusterMaintenancePolicyOutputReference(this, "maintenance_policy");
  public get maintenancePolicy() {
    return this._maintenancePolicy;
  }
  public putMaintenancePolicy(value: EdgecontainerClusterMaintenancePolicy) {
    this._maintenancePolicy.internalValue = value;
  }
  public resetMaintenancePolicy() {
    this._maintenancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenancePolicyInput() {
    return this._maintenancePolicy.internalValue;
  }

  // networking - computed: false, optional: false, required: true
  private _networking = new EdgecontainerClusterNetworkingOutputReference(this, "networking");
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: EdgecontainerClusterNetworking) {
    this._networking.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingInput() {
    return this._networking.internalValue;
  }

  // system_addons_config - computed: false, optional: true, required: false
  private _systemAddonsConfig = new EdgecontainerClusterSystemAddonsConfigOutputReference(this, "system_addons_config");
  public get systemAddonsConfig() {
    return this._systemAddonsConfig;
  }
  public putSystemAddonsConfig(value: EdgecontainerClusterSystemAddonsConfig) {
    this._systemAddonsConfig.internalValue = value;
  }
  public resetSystemAddonsConfig() {
    this._systemAddonsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAddonsConfigInput() {
    return this._systemAddonsConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EdgecontainerClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EdgecontainerClusterTimeouts) {
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
      default_max_pods_per_node: cdktf.numberToTerraform(this._defaultMaxPodsPerNode),
      external_load_balancer_ipv4_address_pools: cdktf.listMapper(cdktf.stringToTerraform, false)(this._externalLoadBalancerIpv4AddressPools),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      release_channel: cdktf.stringToTerraform(this._releaseChannel),
      target_version: cdktf.stringToTerraform(this._targetVersion),
      authorization: edgecontainerClusterAuthorizationToTerraform(this._authorization.internalValue),
      control_plane: edgecontainerClusterControlPlaneToTerraform(this._controlPlane.internalValue),
      control_plane_encryption: edgecontainerClusterControlPlaneEncryptionToTerraform(this._controlPlaneEncryption.internalValue),
      fleet: edgecontainerClusterFleetToTerraform(this._fleet.internalValue),
      maintenance_policy: edgecontainerClusterMaintenancePolicyToTerraform(this._maintenancePolicy.internalValue),
      networking: edgecontainerClusterNetworkingToTerraform(this._networking.internalValue),
      system_addons_config: edgecontainerClusterSystemAddonsConfigToTerraform(this._systemAddonsConfig.internalValue),
      timeouts: edgecontainerClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_max_pods_per_node: {
        value: cdktf.numberToHclTerraform(this._defaultMaxPodsPerNode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external_load_balancer_ipv4_address_pools: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._externalLoadBalancerIpv4AddressPools),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      release_channel: {
        value: cdktf.stringToHclTerraform(this._releaseChannel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_version: {
        value: cdktf.stringToHclTerraform(this._targetVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization: {
        value: edgecontainerClusterAuthorizationToHclTerraform(this._authorization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgecontainerClusterAuthorizationList",
      },
      control_plane: {
        value: edgecontainerClusterControlPlaneToHclTerraform(this._controlPlane.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgecontainerClusterControlPlaneList",
      },
      control_plane_encryption: {
        value: edgecontainerClusterControlPlaneEncryptionToHclTerraform(this._controlPlaneEncryption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgecontainerClusterControlPlaneEncryptionList",
      },
      fleet: {
        value: edgecontainerClusterFleetToHclTerraform(this._fleet.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgecontainerClusterFleetList",
      },
      maintenance_policy: {
        value: edgecontainerClusterMaintenancePolicyToHclTerraform(this._maintenancePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgecontainerClusterMaintenancePolicyList",
      },
      networking: {
        value: edgecontainerClusterNetworkingToHclTerraform(this._networking.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgecontainerClusterNetworkingList",
      },
      system_addons_config: {
        value: edgecontainerClusterSystemAddonsConfigToHclTerraform(this._systemAddonsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgecontainerClusterSystemAddonsConfigList",
      },
      timeouts: {
        value: edgecontainerClusterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EdgecontainerClusterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
