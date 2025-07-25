/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigqueryConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional connection id that should be assigned to the created connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#connection_id BigqueryConnection#connection_id}
  */
  readonly connectionId?: string;
  /**
  * A descriptive description for the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#description BigqueryConnection#description}
  */
  readonly description?: string;
  /**
  * A descriptive name for the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#friendly_name BigqueryConnection#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#id BigqueryConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. The Cloud KMS key that is used for encryption.
  * 
  * Example: projects/[kms_project_id]/locations/[region]/keyRings/[key_region]/cryptoKeys/[key]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#kms_key_name BigqueryConnection#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * The geographic location where the connection should reside.
  * Cloud SQL instance must be in the same location as the connection
  * with following exceptions: Cloud SQL us-central1 maps to BigQuery US, Cloud SQL europe-west1 maps to BigQuery EU.
  * Examples: US, EU, asia-northeast1, us-central1, europe-west1.
  * Spanner Connections same as spanner region
  * AWS allowed regions are aws-us-east-1
  * Azure allowed regions are azure-eastus2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#location BigqueryConnection#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#project BigqueryConnection#project}
  */
  readonly project?: string;
  /**
  * aws block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#aws BigqueryConnection#aws}
  */
  readonly aws?: BigqueryConnectionAws;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#azure BigqueryConnection#azure}
  */
  readonly azure?: BigqueryConnectionAzure;
  /**
  * cloud_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#cloud_resource BigqueryConnection#cloud_resource}
  */
  readonly cloudResource?: BigqueryConnectionCloudResource;
  /**
  * cloud_spanner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#cloud_spanner BigqueryConnection#cloud_spanner}
  */
  readonly cloudSpanner?: BigqueryConnectionCloudSpanner;
  /**
  * cloud_sql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#cloud_sql BigqueryConnection#cloud_sql}
  */
  readonly cloudSql?: BigqueryConnectionCloudSql;
  /**
  * spark block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#spark BigqueryConnection#spark}
  */
  readonly spark?: BigqueryConnectionSpark;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#timeouts BigqueryConnection#timeouts}
  */
  readonly timeouts?: BigqueryConnectionTimeouts;
}
export interface BigqueryConnectionAwsAccessRole {
  /**
  * The user’s AWS IAM Role that trusts the Google-owned AWS IAM user Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#iam_role_id BigqueryConnection#iam_role_id}
  */
  readonly iamRoleId: string;
}

export function bigqueryConnectionAwsAccessRoleToTerraform(struct?: BigqueryConnectionAwsAccessRoleOutputReference | BigqueryConnectionAwsAccessRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iam_role_id: cdktf.stringToTerraform(struct!.iamRoleId),
  }
}


export function bigqueryConnectionAwsAccessRoleToHclTerraform(struct?: BigqueryConnectionAwsAccessRoleOutputReference | BigqueryConnectionAwsAccessRole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iam_role_id: {
      value: cdktf.stringToHclTerraform(struct!.iamRoleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryConnectionAwsAccessRoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryConnectionAwsAccessRole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iamRoleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamRoleId = this._iamRoleId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryConnectionAwsAccessRole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._iamRoleId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._iamRoleId = value.iamRoleId;
    }
  }

  // iam_role_id - computed: false, optional: false, required: true
  private _iamRoleId?: string; 
  public get iamRoleId() {
    return this.getStringAttribute('iam_role_id');
  }
  public set iamRoleId(value: string) {
    this._iamRoleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamRoleIdInput() {
    return this._iamRoleId;
  }

  // identity - computed: true, optional: false, required: false
  public get identity() {
    return this.getStringAttribute('identity');
  }
}
export interface BigqueryConnectionAws {
  /**
  * access_role block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#access_role BigqueryConnection#access_role}
  */
  readonly accessRole: BigqueryConnectionAwsAccessRole;
}

export function bigqueryConnectionAwsToTerraform(struct?: BigqueryConnectionAwsOutputReference | BigqueryConnectionAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_role: bigqueryConnectionAwsAccessRoleToTerraform(struct!.accessRole),
  }
}


export function bigqueryConnectionAwsToHclTerraform(struct?: BigqueryConnectionAwsOutputReference | BigqueryConnectionAws): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_role: {
      value: bigqueryConnectionAwsAccessRoleToHclTerraform(struct!.accessRole),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryConnectionAwsAccessRoleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryConnectionAwsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryConnectionAws | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessRole?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessRole = this._accessRole?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryConnectionAws | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessRole.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessRole.internalValue = value.accessRole;
    }
  }

  // access_role - computed: false, optional: false, required: true
  private _accessRole = new BigqueryConnectionAwsAccessRoleOutputReference(this, "access_role");
  public get accessRole() {
    return this._accessRole;
  }
  public putAccessRole(value: BigqueryConnectionAwsAccessRole) {
    this._accessRole.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRoleInput() {
    return this._accessRole.internalValue;
  }
}
export interface BigqueryConnectionAzure {
  /**
  * The id of customer's directory that host the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#customer_tenant_id BigqueryConnection#customer_tenant_id}
  */
  readonly customerTenantId: string;
  /**
  * The Azure Application (client) ID where the federated credentials will be hosted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#federated_application_client_id BigqueryConnection#federated_application_client_id}
  */
  readonly federatedApplicationClientId?: string;
}

export function bigqueryConnectionAzureToTerraform(struct?: BigqueryConnectionAzureOutputReference | BigqueryConnectionAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    customer_tenant_id: cdktf.stringToTerraform(struct!.customerTenantId),
    federated_application_client_id: cdktf.stringToTerraform(struct!.federatedApplicationClientId),
  }
}


export function bigqueryConnectionAzureToHclTerraform(struct?: BigqueryConnectionAzureOutputReference | BigqueryConnectionAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    customer_tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.customerTenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    federated_application_client_id: {
      value: cdktf.stringToHclTerraform(struct!.federatedApplicationClientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryConnectionAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryConnectionAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customerTenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerTenantId = this._customerTenantId;
    }
    if (this._federatedApplicationClientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.federatedApplicationClientId = this._federatedApplicationClientId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryConnectionAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customerTenantId = undefined;
      this._federatedApplicationClientId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customerTenantId = value.customerTenantId;
      this._federatedApplicationClientId = value.federatedApplicationClientId;
    }
  }

  // application - computed: true, optional: false, required: false
  public get application() {
    return this.getStringAttribute('application');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // customer_tenant_id - computed: false, optional: false, required: true
  private _customerTenantId?: string; 
  public get customerTenantId() {
    return this.getStringAttribute('customer_tenant_id');
  }
  public set customerTenantId(value: string) {
    this._customerTenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerTenantIdInput() {
    return this._customerTenantId;
  }

  // federated_application_client_id - computed: false, optional: true, required: false
  private _federatedApplicationClientId?: string; 
  public get federatedApplicationClientId() {
    return this.getStringAttribute('federated_application_client_id');
  }
  public set federatedApplicationClientId(value: string) {
    this._federatedApplicationClientId = value;
  }
  public resetFederatedApplicationClientId() {
    this._federatedApplicationClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedApplicationClientIdInput() {
    return this._federatedApplicationClientId;
  }

  // identity - computed: true, optional: false, required: false
  public get identity() {
    return this.getStringAttribute('identity');
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // redirect_uri - computed: true, optional: false, required: false
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
}
export interface BigqueryConnectionCloudResource {
}

export function bigqueryConnectionCloudResourceToTerraform(struct?: BigqueryConnectionCloudResourceOutputReference | BigqueryConnectionCloudResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function bigqueryConnectionCloudResourceToHclTerraform(struct?: BigqueryConnectionCloudResourceOutputReference | BigqueryConnectionCloudResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BigqueryConnectionCloudResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryConnectionCloudResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryConnectionCloudResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
}
export interface BigqueryConnectionCloudSpanner {
  /**
  * Cloud Spanner database in the form 'project/instance/database'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#database BigqueryConnection#database}
  */
  readonly database: string;
  /**
  * Cloud Spanner database role for fine-grained access control. The Cloud Spanner admin should have provisioned the database role with appropriate permissions, such as 'SELECT' and 'INSERT'. Other users should only use roles provided by their Cloud Spanner admins. The database role name must start with a letter, and can only contain letters, numbers, and underscores. For more details, see https://cloud.google.com/spanner/docs/fgac-about.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#database_role BigqueryConnection#database_role}
  */
  readonly databaseRole?: string;
  /**
  * Allows setting max parallelism per query when executing on Spanner independent compute resources. If unspecified, default values of parallelism are chosen that are dependent on the Cloud Spanner instance configuration. 'useParallelism' and 'useDataBoost' must be set when setting max parallelism.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#max_parallelism BigqueryConnection#max_parallelism}
  */
  readonly maxParallelism?: number;
  /**
  * If set, the request will be executed via Spanner independent compute resources. 'use_parallelism' must be set when using data boost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#use_data_boost BigqueryConnection#use_data_boost}
  */
  readonly useDataBoost?: boolean | cdktf.IResolvable;
  /**
  * If parallelism should be used when reading from Cloud Spanner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#use_parallelism BigqueryConnection#use_parallelism}
  */
  readonly useParallelism?: boolean | cdktf.IResolvable;
  /**
  * If the serverless analytics service should be used to read data from Cloud Spanner. 'useParallelism' must be set when using serverless analytics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#use_serverless_analytics BigqueryConnection#use_serverless_analytics}
  */
  readonly useServerlessAnalytics?: boolean | cdktf.IResolvable;
}

export function bigqueryConnectionCloudSpannerToTerraform(struct?: BigqueryConnectionCloudSpannerOutputReference | BigqueryConnectionCloudSpanner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    database_role: cdktf.stringToTerraform(struct!.databaseRole),
    max_parallelism: cdktf.numberToTerraform(struct!.maxParallelism),
    use_data_boost: cdktf.booleanToTerraform(struct!.useDataBoost),
    use_parallelism: cdktf.booleanToTerraform(struct!.useParallelism),
    use_serverless_analytics: cdktf.booleanToTerraform(struct!.useServerlessAnalytics),
  }
}


export function bigqueryConnectionCloudSpannerToHclTerraform(struct?: BigqueryConnectionCloudSpannerOutputReference | BigqueryConnectionCloudSpanner): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_role: {
      value: cdktf.stringToHclTerraform(struct!.databaseRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_parallelism: {
      value: cdktf.numberToHclTerraform(struct!.maxParallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_data_boost: {
      value: cdktf.booleanToHclTerraform(struct!.useDataBoost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_parallelism: {
      value: cdktf.booleanToHclTerraform(struct!.useParallelism),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_serverless_analytics: {
      value: cdktf.booleanToHclTerraform(struct!.useServerlessAnalytics),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryConnectionCloudSpannerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryConnectionCloudSpanner | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._databaseRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseRole = this._databaseRole;
    }
    if (this._maxParallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParallelism = this._maxParallelism;
    }
    if (this._useDataBoost !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDataBoost = this._useDataBoost;
    }
    if (this._useParallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.useParallelism = this._useParallelism;
    }
    if (this._useServerlessAnalytics !== undefined) {
      hasAnyValues = true;
      internalValueResult.useServerlessAnalytics = this._useServerlessAnalytics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryConnectionCloudSpanner | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._databaseRole = undefined;
      this._maxParallelism = undefined;
      this._useDataBoost = undefined;
      this._useParallelism = undefined;
      this._useServerlessAnalytics = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._databaseRole = value.databaseRole;
      this._maxParallelism = value.maxParallelism;
      this._useDataBoost = value.useDataBoost;
      this._useParallelism = value.useParallelism;
      this._useServerlessAnalytics = value.useServerlessAnalytics;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // database_role - computed: false, optional: true, required: false
  private _databaseRole?: string; 
  public get databaseRole() {
    return this.getStringAttribute('database_role');
  }
  public set databaseRole(value: string) {
    this._databaseRole = value;
  }
  public resetDatabaseRole() {
    this._databaseRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseRoleInput() {
    return this._databaseRole;
  }

  // max_parallelism - computed: false, optional: true, required: false
  private _maxParallelism?: number; 
  public get maxParallelism() {
    return this.getNumberAttribute('max_parallelism');
  }
  public set maxParallelism(value: number) {
    this._maxParallelism = value;
  }
  public resetMaxParallelism() {
    this._maxParallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelismInput() {
    return this._maxParallelism;
  }

  // use_data_boost - computed: false, optional: true, required: false
  private _useDataBoost?: boolean | cdktf.IResolvable; 
  public get useDataBoost() {
    return this.getBooleanAttribute('use_data_boost');
  }
  public set useDataBoost(value: boolean | cdktf.IResolvable) {
    this._useDataBoost = value;
  }
  public resetUseDataBoost() {
    this._useDataBoost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDataBoostInput() {
    return this._useDataBoost;
  }

  // use_parallelism - computed: false, optional: true, required: false
  private _useParallelism?: boolean | cdktf.IResolvable; 
  public get useParallelism() {
    return this.getBooleanAttribute('use_parallelism');
  }
  public set useParallelism(value: boolean | cdktf.IResolvable) {
    this._useParallelism = value;
  }
  public resetUseParallelism() {
    this._useParallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useParallelismInput() {
    return this._useParallelism;
  }

  // use_serverless_analytics - computed: false, optional: true, required: false
  private _useServerlessAnalytics?: boolean | cdktf.IResolvable; 
  public get useServerlessAnalytics() {
    return this.getBooleanAttribute('use_serverless_analytics');
  }
  public set useServerlessAnalytics(value: boolean | cdktf.IResolvable) {
    this._useServerlessAnalytics = value;
  }
  public resetUseServerlessAnalytics() {
    this._useServerlessAnalytics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServerlessAnalyticsInput() {
    return this._useServerlessAnalytics;
  }
}
export interface BigqueryConnectionCloudSqlCredential {
  /**
  * Password for database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#password BigqueryConnection#password}
  */
  readonly password: string;
  /**
  * Username for database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#username BigqueryConnection#username}
  */
  readonly username: string;
}

export function bigqueryConnectionCloudSqlCredentialToTerraform(struct?: BigqueryConnectionCloudSqlCredentialOutputReference | BigqueryConnectionCloudSqlCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function bigqueryConnectionCloudSqlCredentialToHclTerraform(struct?: BigqueryConnectionCloudSqlCredentialOutputReference | BigqueryConnectionCloudSqlCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class BigqueryConnectionCloudSqlCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryConnectionCloudSqlCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryConnectionCloudSqlCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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
export interface BigqueryConnectionCloudSql {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#database BigqueryConnection#database}
  */
  readonly database: string;
  /**
  * Cloud SQL instance ID in the form project:location:instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#instance_id BigqueryConnection#instance_id}
  */
  readonly instanceId: string;
  /**
  * Type of the Cloud SQL database. Possible values: ["DATABASE_TYPE_UNSPECIFIED", "POSTGRES", "MYSQL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#type BigqueryConnection#type}
  */
  readonly type: string;
  /**
  * credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#credential BigqueryConnection#credential}
  */
  readonly credential: BigqueryConnectionCloudSqlCredential;
}

export function bigqueryConnectionCloudSqlToTerraform(struct?: BigqueryConnectionCloudSqlOutputReference | BigqueryConnectionCloudSql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    type: cdktf.stringToTerraform(struct!.type),
    credential: bigqueryConnectionCloudSqlCredentialToTerraform(struct!.credential),
  }
}


export function bigqueryConnectionCloudSqlToHclTerraform(struct?: BigqueryConnectionCloudSqlOutputReference | BigqueryConnectionCloudSql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
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
    credential: {
      value: bigqueryConnectionCloudSqlCredentialToHclTerraform(struct!.credential),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryConnectionCloudSqlCredentialList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryConnectionCloudSqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryConnectionCloudSql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._credential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryConnectionCloudSql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._instanceId = undefined;
      this._type = undefined;
      this._credential.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._instanceId = value.instanceId;
      this._type = value.type;
      this._credential.internalValue = value.credential;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
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

  // credential - computed: false, optional: false, required: true
  private _credential = new BigqueryConnectionCloudSqlCredentialOutputReference(this, "credential");
  public get credential() {
    return this._credential;
  }
  public putCredential(value: BigqueryConnectionCloudSqlCredential) {
    this._credential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential.internalValue;
  }
}
export interface BigqueryConnectionSparkMetastoreServiceConfig {
  /**
  * Resource name of an existing Dataproc Metastore service in the form of projects/[projectId]/locations/[region]/services/[serviceId].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#metastore_service BigqueryConnection#metastore_service}
  */
  readonly metastoreService?: string;
}

export function bigqueryConnectionSparkMetastoreServiceConfigToTerraform(struct?: BigqueryConnectionSparkMetastoreServiceConfigOutputReference | BigqueryConnectionSparkMetastoreServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metastore_service: cdktf.stringToTerraform(struct!.metastoreService),
  }
}


export function bigqueryConnectionSparkMetastoreServiceConfigToHclTerraform(struct?: BigqueryConnectionSparkMetastoreServiceConfigOutputReference | BigqueryConnectionSparkMetastoreServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metastore_service: {
      value: cdktf.stringToHclTerraform(struct!.metastoreService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryConnectionSparkMetastoreServiceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryConnectionSparkMetastoreServiceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metastoreService !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastoreService = this._metastoreService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryConnectionSparkMetastoreServiceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metastoreService = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metastoreService = value.metastoreService;
    }
  }

  // metastore_service - computed: false, optional: true, required: false
  private _metastoreService?: string; 
  public get metastoreService() {
    return this.getStringAttribute('metastore_service');
  }
  public set metastoreService(value: string) {
    this._metastoreService = value;
  }
  public resetMetastoreService() {
    this._metastoreService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreServiceInput() {
    return this._metastoreService;
  }
}
export interface BigqueryConnectionSparkSparkHistoryServerConfig {
  /**
  * Resource name of an existing Dataproc Cluster to act as a Spark History Server for the connection if the form of projects/[projectId]/regions/[region]/clusters/[cluster_name].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#dataproc_cluster BigqueryConnection#dataproc_cluster}
  */
  readonly dataprocCluster?: string;
}

export function bigqueryConnectionSparkSparkHistoryServerConfigToTerraform(struct?: BigqueryConnectionSparkSparkHistoryServerConfigOutputReference | BigqueryConnectionSparkSparkHistoryServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataproc_cluster: cdktf.stringToTerraform(struct!.dataprocCluster),
  }
}


export function bigqueryConnectionSparkSparkHistoryServerConfigToHclTerraform(struct?: BigqueryConnectionSparkSparkHistoryServerConfigOutputReference | BigqueryConnectionSparkSparkHistoryServerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataproc_cluster: {
      value: cdktf.stringToHclTerraform(struct!.dataprocCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryConnectionSparkSparkHistoryServerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryConnectionSparkSparkHistoryServerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataprocCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataprocCluster = this._dataprocCluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryConnectionSparkSparkHistoryServerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataprocCluster = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataprocCluster = value.dataprocCluster;
    }
  }

  // dataproc_cluster - computed: false, optional: true, required: false
  private _dataprocCluster?: string; 
  public get dataprocCluster() {
    return this.getStringAttribute('dataproc_cluster');
  }
  public set dataprocCluster(value: string) {
    this._dataprocCluster = value;
  }
  public resetDataprocCluster() {
    this._dataprocCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataprocClusterInput() {
    return this._dataprocCluster;
  }
}
export interface BigqueryConnectionSpark {
  /**
  * metastore_service_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#metastore_service_config BigqueryConnection#metastore_service_config}
  */
  readonly metastoreServiceConfig?: BigqueryConnectionSparkMetastoreServiceConfig;
  /**
  * spark_history_server_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#spark_history_server_config BigqueryConnection#spark_history_server_config}
  */
  readonly sparkHistoryServerConfig?: BigqueryConnectionSparkSparkHistoryServerConfig;
}

export function bigqueryConnectionSparkToTerraform(struct?: BigqueryConnectionSparkOutputReference | BigqueryConnectionSpark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metastore_service_config: bigqueryConnectionSparkMetastoreServiceConfigToTerraform(struct!.metastoreServiceConfig),
    spark_history_server_config: bigqueryConnectionSparkSparkHistoryServerConfigToTerraform(struct!.sparkHistoryServerConfig),
  }
}


export function bigqueryConnectionSparkToHclTerraform(struct?: BigqueryConnectionSparkOutputReference | BigqueryConnectionSpark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metastore_service_config: {
      value: bigqueryConnectionSparkMetastoreServiceConfigToHclTerraform(struct!.metastoreServiceConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryConnectionSparkMetastoreServiceConfigList",
    },
    spark_history_server_config: {
      value: bigqueryConnectionSparkSparkHistoryServerConfigToHclTerraform(struct!.sparkHistoryServerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryConnectionSparkSparkHistoryServerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryConnectionSparkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryConnectionSpark | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metastoreServiceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastoreServiceConfig = this._metastoreServiceConfig?.internalValue;
    }
    if (this._sparkHistoryServerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sparkHistoryServerConfig = this._sparkHistoryServerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryConnectionSpark | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metastoreServiceConfig.internalValue = undefined;
      this._sparkHistoryServerConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metastoreServiceConfig.internalValue = value.metastoreServiceConfig;
      this._sparkHistoryServerConfig.internalValue = value.sparkHistoryServerConfig;
    }
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }

  // metastore_service_config - computed: false, optional: true, required: false
  private _metastoreServiceConfig = new BigqueryConnectionSparkMetastoreServiceConfigOutputReference(this, "metastore_service_config");
  public get metastoreServiceConfig() {
    return this._metastoreServiceConfig;
  }
  public putMetastoreServiceConfig(value: BigqueryConnectionSparkMetastoreServiceConfig) {
    this._metastoreServiceConfig.internalValue = value;
  }
  public resetMetastoreServiceConfig() {
    this._metastoreServiceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreServiceConfigInput() {
    return this._metastoreServiceConfig.internalValue;
  }

  // spark_history_server_config - computed: false, optional: true, required: false
  private _sparkHistoryServerConfig = new BigqueryConnectionSparkSparkHistoryServerConfigOutputReference(this, "spark_history_server_config");
  public get sparkHistoryServerConfig() {
    return this._sparkHistoryServerConfig;
  }
  public putSparkHistoryServerConfig(value: BigqueryConnectionSparkSparkHistoryServerConfig) {
    this._sparkHistoryServerConfig.internalValue = value;
  }
  public resetSparkHistoryServerConfig() {
    this._sparkHistoryServerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkHistoryServerConfigInput() {
    return this._sparkHistoryServerConfig.internalValue;
  }
}
export interface BigqueryConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#create BigqueryConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#delete BigqueryConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#update BigqueryConnection#update}
  */
  readonly update?: string;
}

export function bigqueryConnectionTimeoutsToTerraform(struct?: BigqueryConnectionTimeouts | cdktf.IResolvable): any {
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


export function bigqueryConnectionTimeoutsToHclTerraform(struct?: BigqueryConnectionTimeouts | cdktf.IResolvable): any {
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

export class BigqueryConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BigqueryConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BigqueryConnectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection google_bigquery_connection}
*/
export class BigqueryConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BigqueryConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigqueryConnection to import
  * @param importFromId The id of the existing BigqueryConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigqueryConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_bigquery_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/bigquery_connection google_bigquery_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigqueryConnectionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BigqueryConnectionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_connection',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.45.0',
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
    this._connectionId = config.connectionId;
    this._description = config.description;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._kmsKeyName = config.kmsKeyName;
    this._location = config.location;
    this._project = config.project;
    this._aws.internalValue = config.aws;
    this._azure.internalValue = config.azure;
    this._cloudResource.internalValue = config.cloudResource;
    this._cloudSpanner.internalValue = config.cloudSpanner;
    this._cloudSql.internalValue = config.cloudSql;
    this._spark.internalValue = config.spark;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_id - computed: true, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
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

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // has_credential - computed: true, optional: false, required: false
  public get hasCredential() {
    return this.getBooleanAttribute('has_credential');
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

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // aws - computed: false, optional: true, required: false
  private _aws = new BigqueryConnectionAwsOutputReference(this, "aws");
  public get aws() {
    return this._aws;
  }
  public putAws(value: BigqueryConnectionAws) {
    this._aws.internalValue = value;
  }
  public resetAws() {
    this._aws.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsInput() {
    return this._aws.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new BigqueryConnectionAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: BigqueryConnectionAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // cloud_resource - computed: false, optional: true, required: false
  private _cloudResource = new BigqueryConnectionCloudResourceOutputReference(this, "cloud_resource");
  public get cloudResource() {
    return this._cloudResource;
  }
  public putCloudResource(value: BigqueryConnectionCloudResource) {
    this._cloudResource.internalValue = value;
  }
  public resetCloudResource() {
    this._cloudResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudResourceInput() {
    return this._cloudResource.internalValue;
  }

  // cloud_spanner - computed: false, optional: true, required: false
  private _cloudSpanner = new BigqueryConnectionCloudSpannerOutputReference(this, "cloud_spanner");
  public get cloudSpanner() {
    return this._cloudSpanner;
  }
  public putCloudSpanner(value: BigqueryConnectionCloudSpanner) {
    this._cloudSpanner.internalValue = value;
  }
  public resetCloudSpanner() {
    this._cloudSpanner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSpannerInput() {
    return this._cloudSpanner.internalValue;
  }

  // cloud_sql - computed: false, optional: true, required: false
  private _cloudSql = new BigqueryConnectionCloudSqlOutputReference(this, "cloud_sql");
  public get cloudSql() {
    return this._cloudSql;
  }
  public putCloudSql(value: BigqueryConnectionCloudSql) {
    this._cloudSql.internalValue = value;
  }
  public resetCloudSql() {
    this._cloudSql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSqlInput() {
    return this._cloudSql.internalValue;
  }

  // spark - computed: false, optional: true, required: false
  private _spark = new BigqueryConnectionSparkOutputReference(this, "spark");
  public get spark() {
    return this._spark;
  }
  public putSpark(value: BigqueryConnectionSpark) {
    this._spark.internalValue = value;
  }
  public resetSpark() {
    this._spark.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparkInput() {
    return this._spark.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BigqueryConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BigqueryConnectionTimeouts) {
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
      connection_id: cdktf.stringToTerraform(this._connectionId),
      description: cdktf.stringToTerraform(this._description),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      kms_key_name: cdktf.stringToTerraform(this._kmsKeyName),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      aws: bigqueryConnectionAwsToTerraform(this._aws.internalValue),
      azure: bigqueryConnectionAzureToTerraform(this._azure.internalValue),
      cloud_resource: bigqueryConnectionCloudResourceToTerraform(this._cloudResource.internalValue),
      cloud_spanner: bigqueryConnectionCloudSpannerToTerraform(this._cloudSpanner.internalValue),
      cloud_sql: bigqueryConnectionCloudSqlToTerraform(this._cloudSql.internalValue),
      spark: bigqueryConnectionSparkToTerraform(this._spark.internalValue),
      timeouts: bigqueryConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
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
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
      kms_key_name: {
        value: cdktf.stringToHclTerraform(this._kmsKeyName),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws: {
        value: bigqueryConnectionAwsToHclTerraform(this._aws.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryConnectionAwsList",
      },
      azure: {
        value: bigqueryConnectionAzureToHclTerraform(this._azure.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryConnectionAzureList",
      },
      cloud_resource: {
        value: bigqueryConnectionCloudResourceToHclTerraform(this._cloudResource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryConnectionCloudResourceList",
      },
      cloud_spanner: {
        value: bigqueryConnectionCloudSpannerToHclTerraform(this._cloudSpanner.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryConnectionCloudSpannerList",
      },
      cloud_sql: {
        value: bigqueryConnectionCloudSqlToHclTerraform(this._cloudSql.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryConnectionCloudSqlList",
      },
      spark: {
        value: bigqueryConnectionSparkToHclTerraform(this._spark.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryConnectionSparkList",
      },
      timeouts: {
        value: bigqueryConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BigqueryConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
