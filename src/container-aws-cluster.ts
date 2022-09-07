// https://www.terraform.io/docs/providers/google/r/container_aws_cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerAwsClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Annotations on the cluster. This field has the same restrictions as Kubernetes annotations. The total size of all keys and values combined is limited to 256k. Key can have 2 segments: prefix (optional) and name (required), separated by a slash (/). Prefix must be a DNS subdomain. Name must be 63 characters or less, begin and end with alphanumerics, with dashes (-), underscores (_), dots (.), and alphanumerics between.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#annotations ContainerAwsCluster#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The AWS region where the cluster runs. Each Google Cloud region supports a subset of nearby AWS regions. You can call to list all supported AWS regions within a given Google Cloud region.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#aws_region ContainerAwsCluster#aws_region}
  */
  readonly awsRegion: string;
  /**
  * Optional. A human readable description of this cluster. Cannot be longer than 255 UTF-8 encoded bytes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#description ContainerAwsCluster#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#id ContainerAwsCluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#location ContainerAwsCluster#location}
  */
  readonly location: string;
  /**
  * The name of this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#name ContainerAwsCluster#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#project ContainerAwsCluster#project}
  */
  readonly project?: string;
  /**
  * authorization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#authorization ContainerAwsCluster#authorization}
  */
  readonly authorization: ContainerAwsClusterAuthorization;
  /**
  * control_plane block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#control_plane ContainerAwsCluster#control_plane}
  */
  readonly controlPlane: ContainerAwsClusterControlPlane;
  /**
  * fleet block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#fleet ContainerAwsCluster#fleet}
  */
  readonly fleet: ContainerAwsClusterFleet;
  /**
  * networking block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#networking ContainerAwsCluster#networking}
  */
  readonly networking: ContainerAwsClusterNetworking;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#timeouts ContainerAwsCluster#timeouts}
  */
  readonly timeouts?: ContainerAwsClusterTimeouts;
}
export interface ContainerAwsClusterWorkloadIdentityConfig {
}

export function containerAwsClusterWorkloadIdentityConfigToTerraform(struct?: ContainerAwsClusterWorkloadIdentityConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ContainerAwsClusterWorkloadIdentityConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerAwsClusterWorkloadIdentityConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAwsClusterWorkloadIdentityConfig | undefined) {
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

export class ContainerAwsClusterWorkloadIdentityConfigList extends cdktf.ComplexList {

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
  public get(index: number): ContainerAwsClusterWorkloadIdentityConfigOutputReference {
    return new ContainerAwsClusterWorkloadIdentityConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAwsClusterAuthorizationAdminUsers {
  /**
  * The name of the user, e.g. `my-gcp-id@gmail.com`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#username ContainerAwsCluster#username}
  */
  readonly username: string;
}

export function containerAwsClusterAuthorizationAdminUsersToTerraform(struct?: ContainerAwsClusterAuthorizationAdminUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class ContainerAwsClusterAuthorizationAdminUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerAwsClusterAuthorizationAdminUsers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ContainerAwsClusterAuthorizationAdminUsers | cdktf.IResolvable | undefined) {
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

export class ContainerAwsClusterAuthorizationAdminUsersList extends cdktf.ComplexList {
  public internalValue? : ContainerAwsClusterAuthorizationAdminUsers[] | cdktf.IResolvable

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
  public get(index: number): ContainerAwsClusterAuthorizationAdminUsersOutputReference {
    return new ContainerAwsClusterAuthorizationAdminUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAwsClusterAuthorization {
  /**
  * admin_users block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#admin_users ContainerAwsCluster#admin_users}
  */
  readonly adminUsers: ContainerAwsClusterAuthorizationAdminUsers[] | cdktf.IResolvable;
}

export function containerAwsClusterAuthorizationToTerraform(struct?: ContainerAwsClusterAuthorizationOutputReference | ContainerAwsClusterAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_users: cdktf.listMapper(containerAwsClusterAuthorizationAdminUsersToTerraform, true)(struct!.adminUsers),
  }
}

export class ContainerAwsClusterAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAwsClusterAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsers = this._adminUsers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAwsClusterAuthorization | undefined) {
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
  private _adminUsers = new ContainerAwsClusterAuthorizationAdminUsersList(this, "admin_users", false);
  public get adminUsers() {
    return this._adminUsers;
  }
  public putAdminUsers(value: ContainerAwsClusterAuthorizationAdminUsers[] | cdktf.IResolvable) {
    this._adminUsers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsersInput() {
    return this._adminUsers.internalValue;
  }
}
export interface ContainerAwsClusterControlPlaneAwsServicesAuthentication {
  /**
  * The Amazon Resource Name (ARN) of the role that the Anthos Multi-Cloud API will assume when managing AWS resources on your account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#role_arn ContainerAwsCluster#role_arn}
  */
  readonly roleArn: string;
  /**
  * Optional. An identifier for the assumed role session. When unspecified, it defaults to `multicloud-service-agent`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#role_session_name ContainerAwsCluster#role_session_name}
  */
  readonly roleSessionName?: string;
}

export function containerAwsClusterControlPlaneAwsServicesAuthenticationToTerraform(struct?: ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference | ContainerAwsClusterControlPlaneAwsServicesAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    role_session_name: cdktf.stringToTerraform(struct!.roleSessionName),
  }
}

export class ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAwsClusterControlPlaneAwsServicesAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._roleSessionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleSessionName = this._roleSessionName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAwsClusterControlPlaneAwsServicesAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._roleArn = undefined;
      this._roleSessionName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._roleArn = value.roleArn;
      this._roleSessionName = value.roleSessionName;
    }
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // role_session_name - computed: true, optional: true, required: false
  private _roleSessionName?: string; 
  public get roleSessionName() {
    return this.getStringAttribute('role_session_name');
  }
  public set roleSessionName(value: string) {
    this._roleSessionName = value;
  }
  public resetRoleSessionName() {
    this._roleSessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleSessionNameInput() {
    return this._roleSessionName;
  }
}
export interface ContainerAwsClusterControlPlaneConfigEncryption {
  /**
  * The ARN of the AWS KMS key used to encrypt cluster configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}
  */
  readonly kmsKeyArn: string;
}

export function containerAwsClusterControlPlaneConfigEncryptionToTerraform(struct?: ContainerAwsClusterControlPlaneConfigEncryptionOutputReference | ContainerAwsClusterControlPlaneConfigEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
  }
}

export class ContainerAwsClusterControlPlaneConfigEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAwsClusterControlPlaneConfigEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAwsClusterControlPlaneConfigEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // kms_key_arn - computed: false, optional: false, required: true
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}
export interface ContainerAwsClusterControlPlaneDatabaseEncryption {
  /**
  * The ARN of the AWS KMS key used to encrypt cluster secrets.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}
  */
  readonly kmsKeyArn: string;
}

export function containerAwsClusterControlPlaneDatabaseEncryptionToTerraform(struct?: ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference | ContainerAwsClusterControlPlaneDatabaseEncryption): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
  }
}

export class ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAwsClusterControlPlaneDatabaseEncryption | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAwsClusterControlPlaneDatabaseEncryption | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyArn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyArn = value.kmsKeyArn;
    }
  }

  // kms_key_arn - computed: false, optional: false, required: true
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
  }
}
export interface ContainerAwsClusterControlPlaneMainVolume {
  /**
  * Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#iops ContainerAwsCluster#iops}
  */
  readonly iops?: number;
  /**
  * Optional. The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Optional. The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#size_gib ContainerAwsCluster#size_gib}
  */
  readonly sizeGib?: number;
  /**
  * Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#volume_type ContainerAwsCluster#volume_type}
  */
  readonly volumeType?: string;
}

export function containerAwsClusterControlPlaneMainVolumeToTerraform(struct?: ContainerAwsClusterControlPlaneMainVolumeOutputReference | ContainerAwsClusterControlPlaneMainVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    size_gib: cdktf.numberToTerraform(struct!.sizeGib),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export class ContainerAwsClusterControlPlaneMainVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAwsClusterControlPlaneMainVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._sizeGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGib = this._sizeGib;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAwsClusterControlPlaneMainVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iops = undefined;
      this._kmsKeyArn = undefined;
      this._sizeGib = undefined;
      this._volumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iops = value.iops;
      this._kmsKeyArn = value.kmsKeyArn;
      this._sizeGib = value.sizeGib;
      this._volumeType = value.volumeType;
    }
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
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

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}
export interface ContainerAwsClusterControlPlaneProxyConfig {
  /**
  * The ARN of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#secret_arn ContainerAwsCluster#secret_arn}
  */
  readonly secretArn: string;
  /**
  * The version string of the AWS Secret Manager secret that contains the HTTP(S) proxy configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#secret_version ContainerAwsCluster#secret_version}
  */
  readonly secretVersion: string;
}

export function containerAwsClusterControlPlaneProxyConfigToTerraform(struct?: ContainerAwsClusterControlPlaneProxyConfigOutputReference | ContainerAwsClusterControlPlaneProxyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}

export class ContainerAwsClusterControlPlaneProxyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAwsClusterControlPlaneProxyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretArn = this._secretArn;
    }
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAwsClusterControlPlaneProxyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretArn = undefined;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretArn = value.secretArn;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_arn - computed: false, optional: false, required: true
  private _secretArn?: string; 
  public get secretArn() {
    return this.getStringAttribute('secret_arn');
  }
  public set secretArn(value: string) {
    this._secretArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretArnInput() {
    return this._secretArn;
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface ContainerAwsClusterControlPlaneRootVolume {
  /**
  * Optional. The number of I/O operations per second (IOPS) to provision for GP3 volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#iops ContainerAwsCluster#iops}
  */
  readonly iops?: number;
  /**
  * Optional. The Amazon Resource Name (ARN) of the Customer Managed Key (CMK) used to encrypt AWS EBS volumes. If not specified, the default Amazon managed key associated to the AWS region where this cluster runs will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#kms_key_arn ContainerAwsCluster#kms_key_arn}
  */
  readonly kmsKeyArn?: string;
  /**
  * Optional. The size of the volume, in GiBs. When unspecified, a default value is provided. See the specific reference in the parent resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#size_gib ContainerAwsCluster#size_gib}
  */
  readonly sizeGib?: number;
  /**
  * Optional. Type of the EBS volume. When unspecified, it defaults to GP2 volume. Possible values: VOLUME_TYPE_UNSPECIFIED, GP2, GP3
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#volume_type ContainerAwsCluster#volume_type}
  */
  readonly volumeType?: string;
}

export function containerAwsClusterControlPlaneRootVolumeToTerraform(struct?: ContainerAwsClusterControlPlaneRootVolumeOutputReference | ContainerAwsClusterControlPlaneRootVolume): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    kms_key_arn: cdktf.stringToTerraform(struct!.kmsKeyArn),
    size_gib: cdktf.numberToTerraform(struct!.sizeGib),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}

export class ContainerAwsClusterControlPlaneRootVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAwsClusterControlPlaneRootVolume | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._kmsKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyArn = this._kmsKeyArn;
    }
    if (this._sizeGib !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGib = this._sizeGib;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAwsClusterControlPlaneRootVolume | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iops = undefined;
      this._kmsKeyArn = undefined;
      this._sizeGib = undefined;
      this._volumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iops = value.iops;
      this._kmsKeyArn = value.kmsKeyArn;
      this._sizeGib = value.sizeGib;
      this._volumeType = value.volumeType;
    }
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // kms_key_arn - computed: false, optional: true, required: false
  private _kmsKeyArn?: string; 
  public get kmsKeyArn() {
    return this.getStringAttribute('kms_key_arn');
  }
  public set kmsKeyArn(value: string) {
    this._kmsKeyArn = value;
  }
  public resetKmsKeyArn() {
    this._kmsKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyArnInput() {
    return this._kmsKeyArn;
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

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}
export interface ContainerAwsClusterControlPlaneSshConfig {
  /**
  * The name of the EC2 key pair used to login into cluster machines.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#ec2_key_pair ContainerAwsCluster#ec2_key_pair}
  */
  readonly ec2KeyPair: string;
}

export function containerAwsClusterControlPlaneSshConfigToTerraform(struct?: ContainerAwsClusterControlPlaneSshConfigOutputReference | ContainerAwsClusterControlPlaneSshConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ec2_key_pair: cdktf.stringToTerraform(struct!.ec2KeyPair),
  }
}

export class ContainerAwsClusterControlPlaneSshConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAwsClusterControlPlaneSshConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ec2KeyPair !== undefined) {
      hasAnyValues = true;
      internalValueResult.ec2KeyPair = this._ec2KeyPair;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAwsClusterControlPlaneSshConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ec2KeyPair = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ec2KeyPair = value.ec2KeyPair;
    }
  }

  // ec2_key_pair - computed: false, optional: false, required: true
  private _ec2KeyPair?: string; 
  public get ec2KeyPair() {
    return this.getStringAttribute('ec2_key_pair');
  }
  public set ec2KeyPair(value: string) {
    this._ec2KeyPair = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ec2KeyPairInput() {
    return this._ec2KeyPair;
  }
}
export interface ContainerAwsClusterControlPlane {
  /**
  * The name of the AWS IAM instance pofile to assign to each control plane replica.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#iam_instance_profile ContainerAwsCluster#iam_instance_profile}
  */
  readonly iamInstanceProfile: string;
  /**
  * Optional. The AWS instance type. When unspecified, it defaults to `m5.large`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#instance_type ContainerAwsCluster#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Optional. The IDs of additional security groups to add to control plane replicas. The Anthos Multi-Cloud API will automatically create and manage security groups with the minimum rules needed for a functioning cluster.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#security_group_ids ContainerAwsCluster#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * The list of subnets where control plane replicas will run. A replica will be provisioned on each subnet and up to three values can be provided. Each subnet must be in a different AWS Availability Zone (AZ).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#subnet_ids ContainerAwsCluster#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * Optional. A set of AWS resource tags to propagate to all underlying managed AWS resources. Specify at most 50 pairs containing alphanumerics, spaces, and symbols (.+-=_:@/). Keys can be up to 127 Unicode characters. Values can be up to 255 Unicode characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#tags ContainerAwsCluster#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The Kubernetes version to run on control plane replicas (e.g. `1.19.10-gke.1000`). You can list all supported versions on a given Google Cloud region by calling .
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#version ContainerAwsCluster#version}
  */
  readonly version: string;
  /**
  * aws_services_authentication block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#aws_services_authentication ContainerAwsCluster#aws_services_authentication}
  */
  readonly awsServicesAuthentication: ContainerAwsClusterControlPlaneAwsServicesAuthentication;
  /**
  * config_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#config_encryption ContainerAwsCluster#config_encryption}
  */
  readonly configEncryption: ContainerAwsClusterControlPlaneConfigEncryption;
  /**
  * database_encryption block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#database_encryption ContainerAwsCluster#database_encryption}
  */
  readonly databaseEncryption: ContainerAwsClusterControlPlaneDatabaseEncryption;
  /**
  * main_volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#main_volume ContainerAwsCluster#main_volume}
  */
  readonly mainVolume?: ContainerAwsClusterControlPlaneMainVolume;
  /**
  * proxy_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#proxy_config ContainerAwsCluster#proxy_config}
  */
  readonly proxyConfig?: ContainerAwsClusterControlPlaneProxyConfig;
  /**
  * root_volume block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#root_volume ContainerAwsCluster#root_volume}
  */
  readonly rootVolume?: ContainerAwsClusterControlPlaneRootVolume;
  /**
  * ssh_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#ssh_config ContainerAwsCluster#ssh_config}
  */
  readonly sshConfig?: ContainerAwsClusterControlPlaneSshConfig;
}

export function containerAwsClusterControlPlaneToTerraform(struct?: ContainerAwsClusterControlPlaneOutputReference | ContainerAwsClusterControlPlane): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_instance_profile: cdktf.stringToTerraform(struct!.iamInstanceProfile),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    version: cdktf.stringToTerraform(struct!.version),
    aws_services_authentication: containerAwsClusterControlPlaneAwsServicesAuthenticationToTerraform(struct!.awsServicesAuthentication),
    config_encryption: containerAwsClusterControlPlaneConfigEncryptionToTerraform(struct!.configEncryption),
    database_encryption: containerAwsClusterControlPlaneDatabaseEncryptionToTerraform(struct!.databaseEncryption),
    main_volume: containerAwsClusterControlPlaneMainVolumeToTerraform(struct!.mainVolume),
    proxy_config: containerAwsClusterControlPlaneProxyConfigToTerraform(struct!.proxyConfig),
    root_volume: containerAwsClusterControlPlaneRootVolumeToTerraform(struct!.rootVolume),
    ssh_config: containerAwsClusterControlPlaneSshConfigToTerraform(struct!.sshConfig),
  }
}

export class ContainerAwsClusterControlPlaneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAwsClusterControlPlane | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamInstanceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamInstanceProfile = this._iamInstanceProfile;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._awsServicesAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsServicesAuthentication = this._awsServicesAuthentication?.internalValue;
    }
    if (this._configEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configEncryption = this._configEncryption?.internalValue;
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

  public set internalValue(value: ContainerAwsClusterControlPlane | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iamInstanceProfile = undefined;
      this._instanceType = undefined;
      this._securityGroupIds = undefined;
      this._subnetIds = undefined;
      this._tags = undefined;
      this._version = undefined;
      this._awsServicesAuthentication.internalValue = undefined;
      this._configEncryption.internalValue = undefined;
      this._databaseEncryption.internalValue = undefined;
      this._mainVolume.internalValue = undefined;
      this._proxyConfig.internalValue = undefined;
      this._rootVolume.internalValue = undefined;
      this._sshConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iamInstanceProfile = value.iamInstanceProfile;
      this._instanceType = value.instanceType;
      this._securityGroupIds = value.securityGroupIds;
      this._subnetIds = value.subnetIds;
      this._tags = value.tags;
      this._version = value.version;
      this._awsServicesAuthentication.internalValue = value.awsServicesAuthentication;
      this._configEncryption.internalValue = value.configEncryption;
      this._databaseEncryption.internalValue = value.databaseEncryption;
      this._mainVolume.internalValue = value.mainVolume;
      this._proxyConfig.internalValue = value.proxyConfig;
      this._rootVolume.internalValue = value.rootVolume;
      this._sshConfig.internalValue = value.sshConfig;
    }
  }

  // iam_instance_profile - computed: false, optional: false, required: true
  private _iamInstanceProfile?: string; 
  public get iamInstanceProfile() {
    return this.getStringAttribute('iam_instance_profile');
  }
  public set iamInstanceProfile(value: string) {
    this._iamInstanceProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInstanceProfileInput() {
    return this._iamInstanceProfile;
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return this.getListAttribute('subnet_ids');
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
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

  // aws_services_authentication - computed: false, optional: false, required: true
  private _awsServicesAuthentication = new ContainerAwsClusterControlPlaneAwsServicesAuthenticationOutputReference(this, "aws_services_authentication");
  public get awsServicesAuthentication() {
    return this._awsServicesAuthentication;
  }
  public putAwsServicesAuthentication(value: ContainerAwsClusterControlPlaneAwsServicesAuthentication) {
    this._awsServicesAuthentication.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsServicesAuthenticationInput() {
    return this._awsServicesAuthentication.internalValue;
  }

  // config_encryption - computed: false, optional: false, required: true
  private _configEncryption = new ContainerAwsClusterControlPlaneConfigEncryptionOutputReference(this, "config_encryption");
  public get configEncryption() {
    return this._configEncryption;
  }
  public putConfigEncryption(value: ContainerAwsClusterControlPlaneConfigEncryption) {
    this._configEncryption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configEncryptionInput() {
    return this._configEncryption.internalValue;
  }

  // database_encryption - computed: false, optional: false, required: true
  private _databaseEncryption = new ContainerAwsClusterControlPlaneDatabaseEncryptionOutputReference(this, "database_encryption");
  public get databaseEncryption() {
    return this._databaseEncryption;
  }
  public putDatabaseEncryption(value: ContainerAwsClusterControlPlaneDatabaseEncryption) {
    this._databaseEncryption.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseEncryptionInput() {
    return this._databaseEncryption.internalValue;
  }

  // main_volume - computed: false, optional: true, required: false
  private _mainVolume = new ContainerAwsClusterControlPlaneMainVolumeOutputReference(this, "main_volume");
  public get mainVolume() {
    return this._mainVolume;
  }
  public putMainVolume(value: ContainerAwsClusterControlPlaneMainVolume) {
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
  private _proxyConfig = new ContainerAwsClusterControlPlaneProxyConfigOutputReference(this, "proxy_config");
  public get proxyConfig() {
    return this._proxyConfig;
  }
  public putProxyConfig(value: ContainerAwsClusterControlPlaneProxyConfig) {
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
  private _rootVolume = new ContainerAwsClusterControlPlaneRootVolumeOutputReference(this, "root_volume");
  public get rootVolume() {
    return this._rootVolume;
  }
  public putRootVolume(value: ContainerAwsClusterControlPlaneRootVolume) {
    this._rootVolume.internalValue = value;
  }
  public resetRootVolume() {
    this._rootVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootVolumeInput() {
    return this._rootVolume.internalValue;
  }

  // ssh_config - computed: false, optional: true, required: false
  private _sshConfig = new ContainerAwsClusterControlPlaneSshConfigOutputReference(this, "ssh_config");
  public get sshConfig() {
    return this._sshConfig;
  }
  public putSshConfig(value: ContainerAwsClusterControlPlaneSshConfig) {
    this._sshConfig.internalValue = value;
  }
  public resetSshConfig() {
    this._sshConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshConfigInput() {
    return this._sshConfig.internalValue;
  }
}
export interface ContainerAwsClusterFleet {
  /**
  * The number of the Fleet host project where this cluster will be registered.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#project ContainerAwsCluster#project}
  */
  readonly project?: string;
}

export function containerAwsClusterFleetToTerraform(struct?: ContainerAwsClusterFleetOutputReference | ContainerAwsClusterFleet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
  }
}

export class ContainerAwsClusterFleetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAwsClusterFleet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAwsClusterFleet | undefined) {
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
export interface ContainerAwsClusterNetworking {
  /**
  * All pods in the cluster are assigned an RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#pod_address_cidr_blocks ContainerAwsCluster#pod_address_cidr_blocks}
  */
  readonly podAddressCidrBlocks: string[];
  /**
  * All services in the cluster are assigned an RFC1918 IPv4 address from these ranges. Only a single range is supported. This field cannot be changed after creation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#service_address_cidr_blocks ContainerAwsCluster#service_address_cidr_blocks}
  */
  readonly serviceAddressCidrBlocks: string[];
  /**
  * The VPC associated with the cluster. All component clusters (i.e. control plane and node pools) run on a single VPC. This field cannot be changed after creation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#vpc_id ContainerAwsCluster#vpc_id}
  */
  readonly vpcId: string;
}

export function containerAwsClusterNetworkingToTerraform(struct?: ContainerAwsClusterNetworkingOutputReference | ContainerAwsClusterNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_address_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.podAddressCidrBlocks),
    service_address_cidr_blocks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceAddressCidrBlocks),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}

export class ContainerAwsClusterNetworkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAwsClusterNetworking | undefined {
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
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAwsClusterNetworking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._podAddressCidrBlocks = undefined;
      this._serviceAddressCidrBlocks = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._podAddressCidrBlocks = value.podAddressCidrBlocks;
      this._serviceAddressCidrBlocks = value.serviceAddressCidrBlocks;
      this._vpcId = value.vpcId;
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

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface ContainerAwsClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#create ContainerAwsCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#delete ContainerAwsCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster#update ContainerAwsCluster#update}
  */
  readonly update?: string;
}

export function containerAwsClusterTimeoutsToTerraform(struct?: ContainerAwsClusterTimeoutsOutputReference | ContainerAwsClusterTimeouts | cdktf.IResolvable): any {
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

export class ContainerAwsClusterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAwsClusterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ContainerAwsClusterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster google_container_aws_cluster}
*/
export class ContainerAwsCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_container_aws_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/container_aws_cluster google_container_aws_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerAwsClusterConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerAwsClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_aws_cluster',
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
    this._awsRegion = config.awsRegion;
    this._description = config.description;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
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

  // aws_region - computed: false, optional: false, required: true
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
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
  private _workloadIdentityConfig = new ContainerAwsClusterWorkloadIdentityConfigList(this, "workload_identity_config", false);
  public get workloadIdentityConfig() {
    return this._workloadIdentityConfig;
  }

  // authorization - computed: false, optional: false, required: true
  private _authorization = new ContainerAwsClusterAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: ContainerAwsClusterAuthorization) {
    this._authorization.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // control_plane - computed: false, optional: false, required: true
  private _controlPlane = new ContainerAwsClusterControlPlaneOutputReference(this, "control_plane");
  public get controlPlane() {
    return this._controlPlane;
  }
  public putControlPlane(value: ContainerAwsClusterControlPlane) {
    this._controlPlane.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane.internalValue;
  }

  // fleet - computed: false, optional: false, required: true
  private _fleet = new ContainerAwsClusterFleetOutputReference(this, "fleet");
  public get fleet() {
    return this._fleet;
  }
  public putFleet(value: ContainerAwsClusterFleet) {
    this._fleet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetInput() {
    return this._fleet.internalValue;
  }

  // networking - computed: false, optional: false, required: true
  private _networking = new ContainerAwsClusterNetworkingOutputReference(this, "networking");
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: ContainerAwsClusterNetworking) {
    this._networking.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingInput() {
    return this._networking.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerAwsClusterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerAwsClusterTimeouts) {
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
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      authorization: containerAwsClusterAuthorizationToTerraform(this._authorization.internalValue),
      control_plane: containerAwsClusterControlPlaneToTerraform(this._controlPlane.internalValue),
      fleet: containerAwsClusterFleetToTerraform(this._fleet.internalValue),
      networking: containerAwsClusterNetworkingToTerraform(this._networking.internalValue),
      timeouts: containerAwsClusterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
