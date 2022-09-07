// https://www.terraform.io/docs/providers/google/r/container_azure_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerAzureClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Keys can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#annotations ContainerAzureCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The Azure region where the cluster runs. Each Google Cloud region supports a subset of nearby Azure regions. You can call to list all supported Azure regions within a given Google Cloud region.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#azure_region ContainerAzureCluster#azure_region}
  */
  readonly azureRegion: string;
  /**
  * Name of the AzureClient. The `AzureClient` resource must reside on the same GCP project and region as the `AzureCluster`. `AzureClient` names are formatted as `projects/<project-number>/locations/<region>/azureClients/<client-id>`. See Resource Names (https:cloud.google.com/apis/design/resource_names) for more details on Google Cloud resource names.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#client ContainerAzureCluster#client}
  */
  readonly client: string;
  /**
  * Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#description ContainerAzureCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#id ContainerAzureCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#location ContainerAzureCluster#location}
  */
  readonly location: string;
  /**
  * The name of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#name ContainerAzureCluster#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#project ContainerAzureCluster#project}
  */
  readonly project?: string;
  /**
  * The ARM ID of the resource group where the cluster resources are deployed. For example: `/subscriptions/*\/resourceGroups/*`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#resource_group_id ContainerAzureCluster#resource_group_id}
  */
  readonly resourceGroupId: string;
  /**
  * authorization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#authorization ContainerAzureCluster#authorization}
  */
  readonly authorization: ContainerAzureClusterAuthorization;
  /**
  * control_plane block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#control_plane ContainerAzureCluster#control_plane}
  */
  readonly controlPlane: ContainerAzureClusterControlPlane;
  /**
  * fleet block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#fleet ContainerAzureCluster#fleet}
  */
  readonly fleet: ContainerAzureClusterFleet;
  /**
  * networking block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#networking ContainerAzureCluster#networking}
  */
  readonly networking: ContainerAzureClusterNetworking;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#timeouts ContainerAzureCluster#timeouts}
  */
  readonly timeouts?: ContainerAzureClusterTimeouts;
}
export interface ContainerAzureClusterWorkloadIdentityConfig {
}

export function containerAzureClusterWorkloadIdentityConfigToTerraform(struct?: ContainerAzureClusterWorkloadIdentityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ContainerAzureClusterWorkloadIdentityConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerAzureClusterWorkloadIdentityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAzureClusterWorkloadIdentityConfig | undefined) {
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

export class ContainerAzureClusterWorkloadIdentityConfigList extends cdktf.ComplexList {

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
  public get(index: number): ContainerAzureClusterWorkloadIdentityConfigOutputReference {
    return new ContainerAzureClusterWorkloadIdentityConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAzureClusterAuthorizationAdminUsers {
  /**
  * The name of the user, e.g. `my-gcp-id@gmail.com`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#username ContainerAzureCluster#username}
  */
  readonly username: string;
}

export function containerAzureClusterAuthorizationAdminUsersToTerraform(struct?: ContainerAzureClusterAuthorizationAdminUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class ContainerAzureClusterAuthorizationAdminUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerAzureClusterAuthorizationAdminUsers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ContainerAzureClusterAuthorizationAdminUsers | cdktf.IResolvable | undefined) {
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

export class ContainerAzureClusterAuthorizationAdminUsersList extends cdktf.ComplexList {
  public internalValue? : ContainerAzureClusterAuthorizationAdminUsers[] | cdktf.IResolvable

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
  public get(index: number): ContainerAzureClusterAuthorizationAdminUsersOutputReference {
    return new ContainerAzureClusterAuthorizationAdminUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAzureClusterAuthorization {
  /**
  * admin_users block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#admin_users ContainerAzureCluster#admin_users}
  */
  readonly adminUsers: ContainerAzureClusterAuthorizationAdminUsers[] | cdktf.IResolvable;
}

export function containerAzureClusterAuthorizationToTerraform(struct?: ContainerAzureClusterAuthorizationOutputReference | ContainerAzureClusterAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_users: cdktf.listMapper(containerAzureClusterAuthorizationAdminUsersToTerraform, true)(struct!.adminUsers),
  }
}

export class ContainerAzureClusterAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAzureClusterAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsers = this._adminUsers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAzureClusterAuthorization | undefined) {
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
  private _adminUsers = new ContainerAzureClusterAuthorizationAdminUsersList(this, "admin_users", false);
  public get adminUsers() {
    return this._adminUsers;
  }
  public putAdminUsers(value: ContainerAzureClusterAuthorizationAdminUsers[] | cdktf.IResolvable) {
    this._adminUsers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsersInput() {
    return this._adminUsers.internalValue;
  }
}
export interface ContainerAzureClusterControlPlaneDatabaseEncryption {
  /**
  * The ARM ID of the Azure Key Vault key to encrypt / decrypt data. For example: `/subscriptions/<subscription-id>/resourceGroups/<resource-group-id>/providers/Microsoft.KeyVault/vaults/<key-vault-id>/keys/<key-name>` Encryption will always take the latest version of the key and hence specific version is not supported.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#key_id ContainerAzureCluster#key_id}
  */
  readonly keyId: string;
}

export function containerAzureClusterControlPlaneDatabaseEncryptionToTerraform(struct?: ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference | ContainerAzureClusterControlPlaneDatabaseEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
  }
}

export class ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAzureClusterControlPlaneDatabaseEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAzureClusterControlPlaneDatabaseEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyId = value.keyId;
    }
  }

  // key_id - computed: false, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}
export interface ContainerAzureClusterControlPlaneMainVolume {
  /**
  * Optional. The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#size_gib ContainerAzureCluster#size_gib}
  */
  readonly sizeGib?: number;
}

export function containerAzureClusterControlPlaneMainVolumeToTerraform(struct?: ContainerAzureClusterControlPlaneMainVolumeOutputReference | ContainerAzureClusterControlPlaneMainVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size_gib: cdktf.numberToTerraform(struct!.sizeGib),
  }
}

export class ContainerAzureClusterControlPlaneMainVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAzureClusterControlPlaneMainVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sizeGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGib = this._sizeGib;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAzureClusterControlPlaneMainVolume | undefined) {
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
export interface ContainerAzureClusterControlPlaneProxyConfig {
  /**
  * The ARM ID the of the resource group containing proxy keyvault. Resource group ids are formatted as `/subscriptions/<subscription-id>/resourceGroups/<resource-group-name>`
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#resource_group_id ContainerAzureCluster#resource_group_id}
  */
  readonly resourceGroupId: string;
  /**
  * The URL the of the proxy setting secret with its version. Secret ids are formatted as `https:<key-vault-name>.vault.azure.net/secrets/<secret-name>/<secret-version>`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#secret_id ContainerAzureCluster#secret_id}
  */
  readonly secretId: string;
}

export function containerAzureClusterControlPlaneProxyConfigToTerraform(struct?: ContainerAzureClusterControlPlaneProxyConfigOutputReference | ContainerAzureClusterControlPlaneProxyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_group_id: cdktf.stringToTerraform(struct!.resourceGroupId),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
  }
}

export class ContainerAzureClusterControlPlaneProxyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAzureClusterControlPlaneProxyConfig | undefined {
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

  public set internalValue(value: ContainerAzureClusterControlPlaneProxyConfig | undefined) {
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
export interface ContainerAzureClusterControlPlaneReplicaPlacements {
  /**
  * For a given replica, the Azure availability zone where to provision the control plane VM and the ETCD disk.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#azure_availability_zone ContainerAzureCluster#azure_availability_zone}
  */
  readonly azureAvailabilityZone: string;
  /**
  * For a given replica, the ARM ID of the subnet where the control plane VM is deployed. Make sure it's a subnet under the virtual network in the cluster configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#subnet_id ContainerAzureCluster#subnet_id}
  */
  readonly subnetId: string;
}

export function containerAzureClusterControlPlaneReplicaPlacementsToTerraform(struct?: ContainerAzureClusterControlPlaneReplicaPlacements | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    azure_availability_zone: cdktf.stringToTerraform(struct!.azureAvailabilityZone),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}

export class ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerAzureClusterControlPlaneReplicaPlacements | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azureAvailabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAvailabilityZone = this._azureAvailabilityZone;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAzureClusterControlPlaneReplicaPlacements | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azureAvailabilityZone = undefined;
      this._subnetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azureAvailabilityZone = value.azureAvailabilityZone;
      this._subnetId = value.subnetId;
    }
  }

  // azure_availability_zone - computed: false, optional: false, required: true
  private _azureAvailabilityZone?: string; 
  public get azureAvailabilityZone() {
    return this.getStringAttribute('azure_availability_zone');
  }
  public set azureAvailabilityZone(value: string) {
    this._azureAvailabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAvailabilityZoneInput() {
    return this._azureAvailabilityZone;
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
}

export class ContainerAzureClusterControlPlaneReplicaPlacementsList extends cdktf.ComplexList {
  public internalValue? : ContainerAzureClusterControlPlaneReplicaPlacements[] | cdktf.IResolvable

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
  public get(index: number): ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference {
    return new ContainerAzureClusterControlPlaneReplicaPlacementsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAzureClusterControlPlaneRootVolume {
  /**
  * Optional. The size of the disk, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#size_gib ContainerAzureCluster#size_gib}
  */
  readonly sizeGib?: number;
}

export function containerAzureClusterControlPlaneRootVolumeToTerraform(struct?: ContainerAzureClusterControlPlaneRootVolumeOutputReference | ContainerAzureClusterControlPlaneRootVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size_gib: cdktf.numberToTerraform(struct!.sizeGib),
  }
}

export class ContainerAzureClusterControlPlaneRootVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAzureClusterControlPlaneRootVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sizeGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGib = this._sizeGib;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAzureClusterControlPlaneRootVolume | undefined) {
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
export interface ContainerAzureClusterControlPlaneSshConfig {
  /**
  * The SSH public key data for VMs managed by Anthos. This accepts the authorized_keys file format used in OpenSSH according to the sshd(8) manual page.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#authorized_key ContainerAzureCluster#authorized_key}
  */
  readonly authorizedKey: string;
}

export function containerAzureClusterControlPlaneSshConfigToTerraform(struct?: ContainerAzureClusterControlPlaneSshConfigOutputReference | ContainerAzureClusterControlPlaneSshConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorized_key: cdktf.stringToTerraform(struct!.authorizedKey),
  }
}

export class ContainerAzureClusterControlPlaneSshConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAzureClusterControlPlaneSshConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedKey = this._authorizedKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAzureClusterControlPlaneSshConfig | undefined) {
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
export interface ContainerAzureClusterControlPlane {
  /**
  * The ARM ID of the subnet where the control plane VMs are deployed. Example: `/subscriptions//resourceGroups//providers/Microsoft.Network/virtualNetworks//subnets/default`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#subnet_id ContainerAzureCluster#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Optional. A set of tags to apply to all underlying control plane Azure resources.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#tags ContainerAzureCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling GetAzureServerConfig.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#version ContainerAzureCluster#version}
  */
  readonly version: string;
  /**
  * Optional. The Azure VM size name. Example: `Standard_DS2_v2`. For available VM sizes, see https://docs.microsoft.com/en-us/azure/virtual-machines/vm-naming-conventions. When unspecified, it defaults to `Standard_DS2_v2`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#vm_size ContainerAzureCluster#vm_size}
  */
  readonly vmSize?: string;
  /**
  * database_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#database_encryption ContainerAzureCluster#database_encryption}
  */
  readonly databaseEncryption?: ContainerAzureClusterControlPlaneDatabaseEncryption;
  /**
  * main_volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#main_volume ContainerAzureCluster#main_volume}
  */
  readonly mainVolume?: ContainerAzureClusterControlPlaneMainVolume;
  /**
  * proxy_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#proxy_config ContainerAzureCluster#proxy_config}
  */
  readonly proxyConfig?: ContainerAzureClusterControlPlaneProxyConfig;
  /**
  * replica_placements block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#replica_placements ContainerAzureCluster#replica_placements}
  */
  readonly replicaPlacements?: ContainerAzureClusterControlPlaneReplicaPlacements[] | cdktf.IResolvable;
  /**
  * root_volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#root_volume ContainerAzureCluster#root_volume}
  */
  readonly rootVolume?: ContainerAzureClusterControlPlaneRootVolume;
  /**
  * ssh_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#ssh_config ContainerAzureCluster#ssh_config}
  */
  readonly sshConfig: ContainerAzureClusterControlPlaneSshConfig;
}

export function containerAzureClusterControlPlaneToTerraform(struct?: ContainerAzureClusterControlPlaneOutputReference | ContainerAzureClusterControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    version: cdktf.stringToTerraform(struct!.version),
    vm_size: cdktf.stringToTerraform(struct!.vmSize),
    database_encryption: containerAzureClusterControlPlaneDatabaseEncryptionToTerraform(struct!.databaseEncryption),
    main_volume: containerAzureClusterControlPlaneMainVolumeToTerraform(struct!.mainVolume),
    proxy_config: containerAzureClusterControlPlaneProxyConfigToTerraform(struct!.proxyConfig),
    replica_placements: cdktf.listMapper(containerAzureClusterControlPlaneReplicaPlacementsToTerraform, true)(struct!.replicaPlacements),
    root_volume: containerAzureClusterControlPlaneRootVolumeToTerraform(struct!.rootVolume),
    ssh_config: containerAzureClusterControlPlaneSshConfigToTerraform(struct!.sshConfig),
  }
}

export class ContainerAzureClusterControlPlaneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAzureClusterControlPlane | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._vmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmSize = this._vmSize;
    }
    if (this._databaseEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseEncryption = this._databaseEncryption?.internalValue;
    }
    if (this._mainVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mainVolume = this._mainVolume?.internalValue;
    }
    if (this._proxyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyConfig = this._proxyConfig?.internalValue;
    }
    if (this._replicaPlacements?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaPlacements = this._replicaPlacements?.internalValue;
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

  public set internalValue(value: ContainerAzureClusterControlPlane | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetId = undefined;
      this._tags = undefined;
      this._version = undefined;
      this._vmSize = undefined;
      this._databaseEncryption.internalValue = undefined;
      this._mainVolume.internalValue = undefined;
      this._proxyConfig.internalValue = undefined;
      this._replicaPlacements.internalValue = undefined;
      this._rootVolume.internalValue = undefined;
      this._sshConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetId = value.subnetId;
      this._tags = value.tags;
      this._version = value.version;
      this._vmSize = value.vmSize;
      this._databaseEncryption.internalValue = value.databaseEncryption;
      this._mainVolume.internalValue = value.mainVolume;
      this._proxyConfig.internalValue = value.proxyConfig;
      this._replicaPlacements.internalValue = value.replicaPlacements;
      this._rootVolume.internalValue = value.rootVolume;
      this._sshConfig.internalValue = value.sshConfig;
    }
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

  // database_encryption - computed: false, optional: true, required: false
  private _databaseEncryption = new ContainerAzureClusterControlPlaneDatabaseEncryptionOutputReference(this, "database_encryption");
  public get databaseEncryption() {
    return this._databaseEncryption;
  }
  public putDatabaseEncryption(value: ContainerAzureClusterControlPlaneDatabaseEncryption) {
    this._databaseEncryption.internalValue = value;
  }
  public resetDatabaseEncryption() {
    this._databaseEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseEncryptionInput() {
    return this._databaseEncryption.internalValue;
  }

  // main_volume - computed: false, optional: true, required: false
  private _mainVolume = new ContainerAzureClusterControlPlaneMainVolumeOutputReference(this, "main_volume");
  public get mainVolume() {
    return this._mainVolume;
  }
  public putMainVolume(value: ContainerAzureClusterControlPlaneMainVolume) {
    this._mainVolume.internalValue = value;
  }
  public resetMainVolume() {
    this._mainVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainVolumeInput() {
    return this._mainVolume.internalValue;
  }

  // proxy_config - computed: false, optional: true, required: false
  private _proxyConfig = new ContainerAzureClusterControlPlaneProxyConfigOutputReference(this, "proxy_config");
  public get proxyConfig() {
    return this._proxyConfig;
  }
  public putProxyConfig(value: ContainerAzureClusterControlPlaneProxyConfig) {
    this._proxyConfig.internalValue = value;
  }
  public resetProxyConfig() {
    this._proxyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyConfigInput() {
    return this._proxyConfig.internalValue;
  }

  // replica_placements - computed: false, optional: true, required: false
  private _replicaPlacements = new ContainerAzureClusterControlPlaneReplicaPlacementsList(this, "replica_placements", false);
  public get replicaPlacements() {
    return this._replicaPlacements;
  }
  public putReplicaPlacements(value: ContainerAzureClusterControlPlaneReplicaPlacements[] | cdktf.IResolvable) {
    this._replicaPlacements.internalValue = value;
  }
  public resetReplicaPlacements() {
    this._replicaPlacements.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaPlacementsInput() {
    return this._replicaPlacements.internalValue;
  }

  // root_volume - computed: false, optional: true, required: false
  private _rootVolume = new ContainerAzureClusterControlPlaneRootVolumeOutputReference(this, "root_volume");
  public get rootVolume() {
    return this._rootVolume;
  }
  public putRootVolume(value: ContainerAzureClusterControlPlaneRootVolume) {
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
  private _sshConfig = new ContainerAzureClusterControlPlaneSshConfigOutputReference(this, "ssh_config");
  public get sshConfig() {
    return this._sshConfig;
  }
  public putSshConfig(value: ContainerAzureClusterControlPlaneSshConfig) {
    this._sshConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshConfigInput() {
    return this._sshConfig.internalValue;
  }
}
export interface ContainerAzureClusterFleet {
  /**
  * The number of the Fleet host project where this cluster will be registered.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#project ContainerAzureCluster#project}
  */
  readonly project?: string;
}

export function containerAzureClusterFleetToTerraform(struct?: ContainerAzureClusterFleetOutputReference | ContainerAzureClusterFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
  }
}

export class ContainerAzureClusterFleetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAzureClusterFleet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAzureClusterFleet | undefined) {
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
}
export interface ContainerAzureClusterNetworking {
  /**
  * The IP address range of the pods in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All pods in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#pod_address_cidr_blocks ContainerAzureCluster#pod_address_cidr_blocks}
  */
  readonly podAddressCidrBlocks: string[];
  /**
  * The IP address range for services in this cluster, in CIDR notation (e.g. `10.96.0.0/14`). All services in the cluster get assigned a unique RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creating a cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#service_address_cidr_blocks ContainerAzureCluster#service_address_cidr_blocks}
  */
  readonly serviceAddressCidrBlocks: string[];
  /**
  * The Azure Resource Manager (ARM) ID of the VNet associated with your cluster. All components in the cluster (i.e. control plane and node pools) run on a single VNet. Example: `/subscriptions/*\/resourceGroups/*\/providers/Microsoft.Network/virtualNetworks/*` This field cannot be changed after creation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#virtual_network_id ContainerAzureCluster#virtual_network_id}
  */
  readonly virtualNetworkId: string;
}

export function containerAzureClusterNetworkingToTerraform(struct?: ContainerAzureClusterNetworkingOutputReference | ContainerAzureClusterNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_address_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podAddressCidrBlocks),
    service_address_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAddressCidrBlocks),
    virtual_network_id: cdktf.stringToTerraform(struct!.virtualNetworkId),
  }
}

export class ContainerAzureClusterNetworkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAzureClusterNetworking | undefined {
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
    if (this._virtualNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetworkId = this._virtualNetworkId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAzureClusterNetworking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._podAddressCidrBlocks = undefined;
      this._serviceAddressCidrBlocks = undefined;
      this._virtualNetworkId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._podAddressCidrBlocks = value.podAddressCidrBlocks;
      this._serviceAddressCidrBlocks = value.serviceAddressCidrBlocks;
      this._virtualNetworkId = value.virtualNetworkId;
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

  // virtual_network_id - computed: false, optional: false, required: true
  private _virtualNetworkId?: string; 
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId;
  }
}
export interface ContainerAzureClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#create ContainerAzureCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#delete ContainerAzureCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster#update ContainerAzureCluster#update}
  */
  readonly update?: string;
}

export function containerAzureClusterTimeoutsToTerraform(struct?: ContainerAzureClusterTimeoutsOutputReference | ContainerAzureClusterTimeouts | cdktf.IResolvable): any {
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

export class ContainerAzureClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAzureClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ContainerAzureClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster google_container_azure_cluster}
*/
export class ContainerAzureCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_container_azure_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/container_azure_cluster google_container_azure_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerAzureClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerAzureClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_azure_cluster',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
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
    this._azureRegion = config.azureRegion;
    this._client = config.client;
    this._description = config.description;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._resourceGroupId = config.resourceGroupId;
    this._authorization.internalValue = config.authorization;
    this._controlPlane.internalValue = config.controlPlane;
    this._fleet.internalValue = config.fleet;
    this._networking.internalValue = config.networking;
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

  // azure_region - computed: false, optional: false, required: true
  private _azureRegion?: string; 
  public get azureRegion() {
    return this.getStringAttribute('azure_region');
  }
  public set azureRegion(value: string) {
    this._azureRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azureRegionInput() {
    return this._azureRegion;
  }

  // client - computed: false, optional: false, required: true
  private _client?: string; 
  public get client() {
    return this.getStringAttribute('client');
  }
  public set client(value: string) {
    this._client = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
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
  private _workloadIdentityConfig = new ContainerAzureClusterWorkloadIdentityConfigList(this, "workload_identity_config", false);
  public get workloadIdentityConfig() {
    return this._workloadIdentityConfig;
  }

  // authorization - computed: false, optional: false, required: true
  private _authorization = new ContainerAzureClusterAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: ContainerAzureClusterAuthorization) {
    this._authorization.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // control_plane - computed: false, optional: false, required: true
  private _controlPlane = new ContainerAzureClusterControlPlaneOutputReference(this, "control_plane");
  public get controlPlane() {
    return this._controlPlane;
  }
  public putControlPlane(value: ContainerAzureClusterControlPlane) {
    this._controlPlane.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane.internalValue;
  }

  // fleet - computed: false, optional: false, required: true
  private _fleet = new ContainerAzureClusterFleetOutputReference(this, "fleet");
  public get fleet() {
    return this._fleet;
  }
  public putFleet(value: ContainerAzureClusterFleet) {
    this._fleet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetInput() {
    return this._fleet.internalValue;
  }

  // networking - computed: false, optional: false, required: true
  private _networking = new ContainerAzureClusterNetworkingOutputReference(this, "networking");
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: ContainerAzureClusterNetworking) {
    this._networking.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingInput() {
    return this._networking.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerAzureClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerAzureClusterTimeouts) {
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
      azure_region: cdktf.stringToTerraform(this._azureRegion),
      client: cdktf.stringToTerraform(this._client),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      resource_group_id: cdktf.stringToTerraform(this._resourceGroupId),
      authorization: containerAzureClusterAuthorizationToTerraform(this._authorization.internalValue),
      control_plane: containerAzureClusterControlPlaneToTerraform(this._controlPlane.internalValue),
      fleet: containerAzureClusterFleetToTerraform(this._fleet.internalValue),
      networking: containerAzureClusterNetworkingToTerraform(this._networking.internalValue),
      timeouts: containerAzureClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
