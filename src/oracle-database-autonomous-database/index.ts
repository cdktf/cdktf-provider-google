/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OracleDatabaseAutonomousDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * The password for the default ADMIN user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#admin_password OracleDatabaseAutonomousDatabase#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * The ID of the Autonomous Database to create. This value is restricted
  * to (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$) and must be a maximum of 63
  * characters in length. The value must start with a letter and end with
  * a letter or a number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#autonomous_database_id OracleDatabaseAutonomousDatabase#autonomous_database_id}
  */
  readonly autonomousDatabaseId: string;
  /**
  * The subnet CIDR range for the Autonmous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#cidr OracleDatabaseAutonomousDatabase#cidr}
  */
  readonly cidr?: string;
  /**
  * The name of the Autonomous Database. The database name must be unique in
  * the project. The name must begin with a letter and can
  * contain a maximum of 30 alphanumeric characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#database OracleDatabaseAutonomousDatabase#database}
  */
  readonly database: string;
  /**
  * Whether or not to allow Terraform to destroy the instance. Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#deletion_protection OracleDatabaseAutonomousDatabase#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The display name for the Autonomous Database. The name does not have to
  * be unique within your project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#display_name OracleDatabaseAutonomousDatabase#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#id OracleDatabaseAutonomousDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The labels or tags associated with the Autonomous Database. 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#labels OracleDatabaseAutonomousDatabase#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Resource ID segment making up resource 'name'. See documentation for resource type 'oracledatabase.googleapis.com/AutonomousDatabaseBackup'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#location OracleDatabaseAutonomousDatabase#location}
  */
  readonly location: string;
  /**
  * The name of the VPC network used by the Autonomous Database.
  * Format: projects/{project}/global/networks/{network}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#network OracleDatabaseAutonomousDatabase#network}
  */
  readonly network?: string;
  /**
  * The name of the OdbNetwork associated with the Autonomous Database.
  * Format:
  * projects/{project}/locations/{location}/odbNetworks/{odb_network}
  * It is optional but if specified, this should match the parent ODBNetwork of
  * the odb_subnet and backup_odb_subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#odb_network OracleDatabaseAutonomousDatabase#odb_network}
  */
  readonly odbNetwork?: string;
  /**
  * The name of the OdbSubnet associated with the Autonomous Database for
  * IP allocation. Format:
  * projects/{project}/locations/{location}/odbNetworks/{odb_network}/odbSubnets/{odb_subnet}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#odb_subnet OracleDatabaseAutonomousDatabase#odb_subnet}
  */
  readonly odbSubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#project OracleDatabaseAutonomousDatabase#project}
  */
  readonly project?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#properties OracleDatabaseAutonomousDatabase#properties}
  */
  readonly properties: OracleDatabaseAutonomousDatabaseProperties;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#timeouts OracleDatabaseAutonomousDatabase#timeouts}
  */
  readonly timeouts?: OracleDatabaseAutonomousDatabaseTimeouts;
}
export interface OracleDatabaseAutonomousDatabasePropertiesApexDetails {
}

export function oracleDatabaseAutonomousDatabasePropertiesApexDetailsToTerraform(struct?: OracleDatabaseAutonomousDatabasePropertiesApexDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oracleDatabaseAutonomousDatabasePropertiesApexDetailsToHclTerraform(struct?: OracleDatabaseAutonomousDatabasePropertiesApexDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OracleDatabaseAutonomousDatabasePropertiesApexDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseAutonomousDatabasePropertiesApexDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apex_version - computed: true, optional: false, required: false
  public get apexVersion() {
    return this.getStringAttribute('apex_version');
  }

  // ords_version - computed: true, optional: false, required: false
  public get ordsVersion() {
    return this.getStringAttribute('ords_version');
  }
}

export class OracleDatabaseAutonomousDatabasePropertiesApexDetailsList extends cdktf.ComplexList {

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
  public get(index: number): OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference {
    return new OracleDatabaseAutonomousDatabasePropertiesApexDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings {
}

export function oracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsToTerraform(struct?: OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsToHclTerraform(struct?: OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStrings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // high - computed: true, optional: false, required: false
  public get high() {
    return this.getStringAttribute('high');
  }

  // low - computed: true, optional: false, required: false
  public get low() {
    return this.getStringAttribute('low');
  }

  // medium - computed: true, optional: false, required: false
  public get medium() {
    return this.getStringAttribute('medium');
  }
}

export class OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList extends cdktf.ComplexList {

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
  public get(index: number): OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference {
    return new OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles {
}

export function oracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesToTerraform(struct?: OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesToHclTerraform(struct?: OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumer_group - computed: true, optional: false, required: false
  public get consumerGroup() {
    return this.getStringAttribute('consumer_group');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // host_format - computed: true, optional: false, required: false
  public get hostFormat() {
    return this.getStringAttribute('host_format');
  }

  // is_regional - computed: true, optional: false, required: false
  public get isRegional() {
    return this.getBooleanAttribute('is_regional');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // session_mode - computed: true, optional: false, required: false
  public get sessionMode() {
    return this.getStringAttribute('session_mode');
  }

  // syntax_format - computed: true, optional: false, required: false
  public get syntaxFormat() {
    return this.getStringAttribute('syntax_format');
  }

  // tls_authentication - computed: true, optional: false, required: false
  public get tlsAuthentication() {
    return this.getStringAttribute('tls_authentication');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList extends cdktf.ComplexList {

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
  public get(index: number): OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference {
    return new OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDatabaseAutonomousDatabasePropertiesConnectionStrings {
}

export function oracleDatabaseAutonomousDatabasePropertiesConnectionStringsToTerraform(struct?: OracleDatabaseAutonomousDatabasePropertiesConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oracleDatabaseAutonomousDatabasePropertiesConnectionStringsToHclTerraform(struct?: OracleDatabaseAutonomousDatabasePropertiesConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OracleDatabaseAutonomousDatabasePropertiesConnectionStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseAutonomousDatabasePropertiesConnectionStrings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_connection_strings - computed: true, optional: false, required: false
  private _allConnectionStrings = new OracleDatabaseAutonomousDatabasePropertiesConnectionStringsAllConnectionStringsList(this, "all_connection_strings", false);
  public get allConnectionStrings() {
    return this._allConnectionStrings;
  }

  // dedicated - computed: true, optional: false, required: false
  public get dedicated() {
    return this.getStringAttribute('dedicated');
  }

  // high - computed: true, optional: false, required: false
  public get high() {
    return this.getStringAttribute('high');
  }

  // low - computed: true, optional: false, required: false
  public get low() {
    return this.getStringAttribute('low');
  }

  // medium - computed: true, optional: false, required: false
  public get medium() {
    return this.getStringAttribute('medium');
  }

  // profiles - computed: true, optional: false, required: false
  private _profiles = new OracleDatabaseAutonomousDatabasePropertiesConnectionStringsProfilesList(this, "profiles", false);
  public get profiles() {
    return this._profiles;
  }
}

export class OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList extends cdktf.ComplexList {

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
  public get(index: number): OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference {
    return new OracleDatabaseAutonomousDatabasePropertiesConnectionStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDatabaseAutonomousDatabasePropertiesConnectionUrls {
}

export function oracleDatabaseAutonomousDatabasePropertiesConnectionUrlsToTerraform(struct?: OracleDatabaseAutonomousDatabasePropertiesConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oracleDatabaseAutonomousDatabasePropertiesConnectionUrlsToHclTerraform(struct?: OracleDatabaseAutonomousDatabasePropertiesConnectionUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OracleDatabaseAutonomousDatabasePropertiesConnectionUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseAutonomousDatabasePropertiesConnectionUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // apex_uri - computed: true, optional: false, required: false
  public get apexUri() {
    return this.getStringAttribute('apex_uri');
  }

  // database_transforms_uri - computed: true, optional: false, required: false
  public get databaseTransformsUri() {
    return this.getStringAttribute('database_transforms_uri');
  }

  // graph_studio_uri - computed: true, optional: false, required: false
  public get graphStudioUri() {
    return this.getStringAttribute('graph_studio_uri');
  }

  // machine_learning_notebook_uri - computed: true, optional: false, required: false
  public get machineLearningNotebookUri() {
    return this.getStringAttribute('machine_learning_notebook_uri');
  }

  // machine_learning_user_management_uri - computed: true, optional: false, required: false
  public get machineLearningUserManagementUri() {
    return this.getStringAttribute('machine_learning_user_management_uri');
  }

  // mongo_db_uri - computed: true, optional: false, required: false
  public get mongoDbUri() {
    return this.getStringAttribute('mongo_db_uri');
  }

  // ords_uri - computed: true, optional: false, required: false
  public get ordsUri() {
    return this.getStringAttribute('ords_uri');
  }

  // sql_dev_web_uri - computed: true, optional: false, required: false
  public get sqlDevWebUri() {
    return this.getStringAttribute('sql_dev_web_uri');
  }
}

export class OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList extends cdktf.ComplexList {

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
  public get(index: number): OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference {
    return new OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb {
}

export function oracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbToTerraform(struct?: OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbToHclTerraform(struct?: OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_guard_role_changed_time - computed: true, optional: false, required: false
  public get dataGuardRoleChangedTime() {
    return this.getStringAttribute('data_guard_role_changed_time');
  }

  // disaster_recovery_role_changed_time - computed: true, optional: false, required: false
  public get disasterRecoveryRoleChangedTime() {
    return this.getStringAttribute('disaster_recovery_role_changed_time');
  }

  // lag_time_duration - computed: true, optional: false, required: false
  public get lagTimeDuration() {
    return this.getStringAttribute('lag_time_duration');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList extends cdktf.ComplexList {

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
  public get(index: number): OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference {
    return new OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime {
}

export function oracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeToTerraform(struct?: OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeToHclTerraform(struct?: OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hours - computed: true, optional: false, required: false
  public get hours() {
    return this.getNumberAttribute('hours');
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
}

export class OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList extends cdktf.ComplexList {

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
  public get(index: number): OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference {
    return new OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime {
}

export function oracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeToTerraform(struct?: OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeToHclTerraform(struct?: OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hours - computed: true, optional: false, required: false
  public get hours() {
    return this.getNumberAttribute('hours');
  }

  // minutes - computed: true, optional: false, required: false
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }

  // nanos - computed: true, optional: false, required: false
  public get nanos() {
    return this.getNumberAttribute('nanos');
  }

  // seconds - computed: true, optional: false, required: false
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
}

export class OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList extends cdktf.ComplexList {

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
  public get(index: number): OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference {
    return new OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails {
}

export function oracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsToTerraform(struct?: OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsToHclTerraform(struct?: OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day_of_week - computed: true, optional: false, required: false
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }

  // start_time - computed: true, optional: false, required: false
  private _startTime = new OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStartTimeList(this, "start_time", false);
  public get startTime() {
    return this._startTime;
  }

  // stop_time - computed: true, optional: false, required: false
  private _stopTime = new OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsStopTimeList(this, "stop_time", false);
  public get stopTime() {
    return this._stopTime;
  }
}

export class OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList extends cdktf.ComplexList {

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
  public get(index: number): OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference {
    return new OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDatabaseAutonomousDatabasePropertiesCustomerContacts {
  /**
  * The email address used by Oracle to send notifications regarding databases
  * and infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#email OracleDatabaseAutonomousDatabase#email}
  */
  readonly email: string;
}

export function oracleDatabaseAutonomousDatabasePropertiesCustomerContactsToTerraform(struct?: OracleDatabaseAutonomousDatabasePropertiesCustomerContacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function oracleDatabaseAutonomousDatabasePropertiesCustomerContactsToHclTerraform(struct?: OracleDatabaseAutonomousDatabasePropertiesCustomerContacts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OracleDatabaseAutonomousDatabasePropertiesCustomerContacts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseAutonomousDatabasePropertiesCustomerContacts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}

export class OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList extends cdktf.ComplexList {
  public internalValue? : OracleDatabaseAutonomousDatabasePropertiesCustomerContacts[] | cdktf.IResolvable

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
  public get(index: number): OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference {
    return new OracleDatabaseAutonomousDatabasePropertiesCustomerContactsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OracleDatabaseAutonomousDatabaseProperties {
  /**
  * The retention period for the Autonomous Database. This field is specified
  * in days, can range from 1 day to 60 days, and has a default value of
  * 60 days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#backup_retention_period_days OracleDatabaseAutonomousDatabase#backup_retention_period_days}
  */
  readonly backupRetentionPeriodDays?: number;
  /**
  * The character set for the Autonomous Database. The default is AL32UTF8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#character_set OracleDatabaseAutonomousDatabase#character_set}
  */
  readonly characterSet?: string;
  /**
  * The number of compute servers for the Autonomous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#compute_count OracleDatabaseAutonomousDatabase#compute_count}
  */
  readonly computeCount?: number;
  /**
  * The size of the data stored in the database, in gigabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#data_storage_size_gb OracleDatabaseAutonomousDatabase#data_storage_size_gb}
  */
  readonly dataStorageSizeGb?: number;
  /**
  * The size of the data stored in the database, in terabytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#data_storage_size_tb OracleDatabaseAutonomousDatabase#data_storage_size_tb}
  */
  readonly dataStorageSizeTb?: number;
  /**
  * The edition of the Autonomous Databases. 
  *  Possible values:
  *  DATABASE_EDITION_UNSPECIFIED
  * STANDARD_EDITION
  * ENTERPRISE_EDITION
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#db_edition OracleDatabaseAutonomousDatabase#db_edition}
  */
  readonly dbEdition?: string;
  /**
  * The Oracle Database version for the Autonomous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#db_version OracleDatabaseAutonomousDatabase#db_version}
  */
  readonly dbVersion?: string;
  /**
  * Possible values:
  *  DB_WORKLOAD_UNSPECIFIED
  * OLTP
  * DW
  * AJD
  * APEX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#db_workload OracleDatabaseAutonomousDatabase#db_workload}
  */
  readonly dbWorkload: string;
  /**
  * This field indicates if auto scaling is enabled for the Autonomous Database
  * CPU core count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#is_auto_scaling_enabled OracleDatabaseAutonomousDatabase#is_auto_scaling_enabled}
  */
  readonly isAutoScalingEnabled?: boolean | cdktf.IResolvable;
  /**
  * This field indicates if auto scaling is enabled for the Autonomous Database
  * storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#is_storage_auto_scaling_enabled OracleDatabaseAutonomousDatabase#is_storage_auto_scaling_enabled}
  */
  readonly isStorageAutoScalingEnabled?: boolean | cdktf.IResolvable;
  /**
  * The license type used for the Autonomous Database. 
  *  Possible values:
  *  LICENSE_TYPE_UNSPECIFIED
  * LICENSE_INCLUDED
  * BRING_YOUR_OWN_LICENSE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#license_type OracleDatabaseAutonomousDatabase#license_type}
  */
  readonly licenseType: string;
  /**
  * The maintenance schedule of the Autonomous Database. 
  *  Possible values:
  *  MAINTENANCE_SCHEDULE_TYPE_UNSPECIFIED
  * EARLY
  * REGULAR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#maintenance_schedule_type OracleDatabaseAutonomousDatabase#maintenance_schedule_type}
  */
  readonly maintenanceScheduleType?: string;
  /**
  * This field specifies if the Autonomous Database requires mTLS connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#mtls_connection_required OracleDatabaseAutonomousDatabase#mtls_connection_required}
  */
  readonly mtlsConnectionRequired?: boolean | cdktf.IResolvable;
  /**
  * The national character set for the Autonomous Database. The default is
  * AL16UTF16.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#n_character_set OracleDatabaseAutonomousDatabase#n_character_set}
  */
  readonly nCharacterSet?: string;
  /**
  * Possible values:
  *  OPERATIONS_INSIGHTS_STATE_UNSPECIFIED
  * ENABLING
  * ENABLED
  * DISABLING
  * NOT_ENABLED
  * FAILED_ENABLING
  * FAILED_DISABLING
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#operations_insights_state OracleDatabaseAutonomousDatabase#operations_insights_state}
  */
  readonly operationsInsightsState?: string;
  /**
  * The private endpoint IP address for the Autonomous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#private_endpoint_ip OracleDatabaseAutonomousDatabase#private_endpoint_ip}
  */
  readonly privateEndpointIp?: string;
  /**
  * The private endpoint label for the Autonomous Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#private_endpoint_label OracleDatabaseAutonomousDatabase#private_endpoint_label}
  */
  readonly privateEndpointLabel?: string;
  /**
  * customer_contacts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#customer_contacts OracleDatabaseAutonomousDatabase#customer_contacts}
  */
  readonly customerContacts?: OracleDatabaseAutonomousDatabasePropertiesCustomerContacts[] | cdktf.IResolvable;
}

export function oracleDatabaseAutonomousDatabasePropertiesToTerraform(struct?: OracleDatabaseAutonomousDatabasePropertiesOutputReference | OracleDatabaseAutonomousDatabaseProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_retention_period_days: cdktf.numberToTerraform(struct!.backupRetentionPeriodDays),
    character_set: cdktf.stringToTerraform(struct!.characterSet),
    compute_count: cdktf.numberToTerraform(struct!.computeCount),
    data_storage_size_gb: cdktf.numberToTerraform(struct!.dataStorageSizeGb),
    data_storage_size_tb: cdktf.numberToTerraform(struct!.dataStorageSizeTb),
    db_edition: cdktf.stringToTerraform(struct!.dbEdition),
    db_version: cdktf.stringToTerraform(struct!.dbVersion),
    db_workload: cdktf.stringToTerraform(struct!.dbWorkload),
    is_auto_scaling_enabled: cdktf.booleanToTerraform(struct!.isAutoScalingEnabled),
    is_storage_auto_scaling_enabled: cdktf.booleanToTerraform(struct!.isStorageAutoScalingEnabled),
    license_type: cdktf.stringToTerraform(struct!.licenseType),
    maintenance_schedule_type: cdktf.stringToTerraform(struct!.maintenanceScheduleType),
    mtls_connection_required: cdktf.booleanToTerraform(struct!.mtlsConnectionRequired),
    n_character_set: cdktf.stringToTerraform(struct!.nCharacterSet),
    operations_insights_state: cdktf.stringToTerraform(struct!.operationsInsightsState),
    private_endpoint_ip: cdktf.stringToTerraform(struct!.privateEndpointIp),
    private_endpoint_label: cdktf.stringToTerraform(struct!.privateEndpointLabel),
    customer_contacts: cdktf.listMapper(oracleDatabaseAutonomousDatabasePropertiesCustomerContactsToTerraform, true)(struct!.customerContacts),
  }
}


export function oracleDatabaseAutonomousDatabasePropertiesToHclTerraform(struct?: OracleDatabaseAutonomousDatabasePropertiesOutputReference | OracleDatabaseAutonomousDatabaseProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_retention_period_days: {
      value: cdktf.numberToHclTerraform(struct!.backupRetentionPeriodDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    character_set: {
      value: cdktf.stringToHclTerraform(struct!.characterSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_count: {
      value: cdktf.numberToHclTerraform(struct!.computeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_storage_size_gb: {
      value: cdktf.numberToHclTerraform(struct!.dataStorageSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_storage_size_tb: {
      value: cdktf.numberToHclTerraform(struct!.dataStorageSizeTb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_edition: {
      value: cdktf.stringToHclTerraform(struct!.dbEdition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_version: {
      value: cdktf.stringToHclTerraform(struct!.dbVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_workload: {
      value: cdktf.stringToHclTerraform(struct!.dbWorkload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_auto_scaling_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAutoScalingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_storage_auto_scaling_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isStorageAutoScalingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    license_type: {
      value: cdktf.stringToHclTerraform(struct!.licenseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_schedule_type: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceScheduleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtls_connection_required: {
      value: cdktf.booleanToHclTerraform(struct!.mtlsConnectionRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    n_character_set: {
      value: cdktf.stringToHclTerraform(struct!.nCharacterSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operations_insights_state: {
      value: cdktf.stringToHclTerraform(struct!.operationsInsightsState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_endpoint_ip: {
      value: cdktf.stringToHclTerraform(struct!.privateEndpointIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_endpoint_label: {
      value: cdktf.stringToHclTerraform(struct!.privateEndpointLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    customer_contacts: {
      value: cdktf.listMapperHcl(oracleDatabaseAutonomousDatabasePropertiesCustomerContactsToHclTerraform, true)(struct!.customerContacts),
      isBlock: true,
      type: "list",
      storageClassType: "OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OracleDatabaseAutonomousDatabasePropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OracleDatabaseAutonomousDatabaseProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupRetentionPeriodDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupRetentionPeriodDays = this._backupRetentionPeriodDays;
    }
    if (this._characterSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.characterSet = this._characterSet;
    }
    if (this._computeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeCount = this._computeCount;
    }
    if (this._dataStorageSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStorageSizeGb = this._dataStorageSizeGb;
    }
    if (this._dataStorageSizeTb !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStorageSizeTb = this._dataStorageSizeTb;
    }
    if (this._dbEdition !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbEdition = this._dbEdition;
    }
    if (this._dbVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbVersion = this._dbVersion;
    }
    if (this._dbWorkload !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbWorkload = this._dbWorkload;
    }
    if (this._isAutoScalingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAutoScalingEnabled = this._isAutoScalingEnabled;
    }
    if (this._isStorageAutoScalingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isStorageAutoScalingEnabled = this._isStorageAutoScalingEnabled;
    }
    if (this._licenseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseType = this._licenseType;
    }
    if (this._maintenanceScheduleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceScheduleType = this._maintenanceScheduleType;
    }
    if (this._mtlsConnectionRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtlsConnectionRequired = this._mtlsConnectionRequired;
    }
    if (this._nCharacterSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.nCharacterSet = this._nCharacterSet;
    }
    if (this._operationsInsightsState !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationsInsightsState = this._operationsInsightsState;
    }
    if (this._privateEndpointIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointIp = this._privateEndpointIp;
    }
    if (this._privateEndpointLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateEndpointLabel = this._privateEndpointLabel;
    }
    if (this._customerContacts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerContacts = this._customerContacts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OracleDatabaseAutonomousDatabaseProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._backupRetentionPeriodDays = undefined;
      this._characterSet = undefined;
      this._computeCount = undefined;
      this._dataStorageSizeGb = undefined;
      this._dataStorageSizeTb = undefined;
      this._dbEdition = undefined;
      this._dbVersion = undefined;
      this._dbWorkload = undefined;
      this._isAutoScalingEnabled = undefined;
      this._isStorageAutoScalingEnabled = undefined;
      this._licenseType = undefined;
      this._maintenanceScheduleType = undefined;
      this._mtlsConnectionRequired = undefined;
      this._nCharacterSet = undefined;
      this._operationsInsightsState = undefined;
      this._privateEndpointIp = undefined;
      this._privateEndpointLabel = undefined;
      this._customerContacts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._backupRetentionPeriodDays = value.backupRetentionPeriodDays;
      this._characterSet = value.characterSet;
      this._computeCount = value.computeCount;
      this._dataStorageSizeGb = value.dataStorageSizeGb;
      this._dataStorageSizeTb = value.dataStorageSizeTb;
      this._dbEdition = value.dbEdition;
      this._dbVersion = value.dbVersion;
      this._dbWorkload = value.dbWorkload;
      this._isAutoScalingEnabled = value.isAutoScalingEnabled;
      this._isStorageAutoScalingEnabled = value.isStorageAutoScalingEnabled;
      this._licenseType = value.licenseType;
      this._maintenanceScheduleType = value.maintenanceScheduleType;
      this._mtlsConnectionRequired = value.mtlsConnectionRequired;
      this._nCharacterSet = value.nCharacterSet;
      this._operationsInsightsState = value.operationsInsightsState;
      this._privateEndpointIp = value.privateEndpointIp;
      this._privateEndpointLabel = value.privateEndpointLabel;
      this._customerContacts.internalValue = value.customerContacts;
    }
  }

  // actual_used_data_storage_size_tb - computed: true, optional: false, required: false
  public get actualUsedDataStorageSizeTb() {
    return this.getNumberAttribute('actual_used_data_storage_size_tb');
  }

  // allocated_storage_size_tb - computed: true, optional: false, required: false
  public get allocatedStorageSizeTb() {
    return this.getNumberAttribute('allocated_storage_size_tb');
  }

  // apex_details - computed: true, optional: false, required: false
  private _apexDetails = new OracleDatabaseAutonomousDatabasePropertiesApexDetailsList(this, "apex_details", false);
  public get apexDetails() {
    return this._apexDetails;
  }

  // are_primary_allowlisted_ips_used - computed: true, optional: false, required: false
  public get arePrimaryAllowlistedIpsUsed() {
    return this.getBooleanAttribute('are_primary_allowlisted_ips_used');
  }

  // autonomous_container_database_id - computed: true, optional: false, required: false
  public get autonomousContainerDatabaseId() {
    return this.getStringAttribute('autonomous_container_database_id');
  }

  // available_upgrade_versions - computed: true, optional: false, required: false
  public get availableUpgradeVersions() {
    return this.getListAttribute('available_upgrade_versions');
  }

  // backup_retention_period_days - computed: true, optional: true, required: false
  private _backupRetentionPeriodDays?: number; 
  public get backupRetentionPeriodDays() {
    return this.getNumberAttribute('backup_retention_period_days');
  }
  public set backupRetentionPeriodDays(value: number) {
    this._backupRetentionPeriodDays = value;
  }
  public resetBackupRetentionPeriodDays() {
    this._backupRetentionPeriodDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPeriodDaysInput() {
    return this._backupRetentionPeriodDays;
  }

  // character_set - computed: false, optional: true, required: false
  private _characterSet?: string; 
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }
  public set characterSet(value: string) {
    this._characterSet = value;
  }
  public resetCharacterSet() {
    this._characterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetInput() {
    return this._characterSet;
  }

  // compute_count - computed: true, optional: true, required: false
  private _computeCount?: number; 
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }
  public set computeCount(value: number) {
    this._computeCount = value;
  }
  public resetComputeCount() {
    this._computeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCountInput() {
    return this._computeCount;
  }

  // connection_strings - computed: true, optional: false, required: false
  private _connectionStrings = new OracleDatabaseAutonomousDatabasePropertiesConnectionStringsList(this, "connection_strings", false);
  public get connectionStrings() {
    return this._connectionStrings;
  }

  // connection_urls - computed: true, optional: false, required: false
  private _connectionUrls = new OracleDatabaseAutonomousDatabasePropertiesConnectionUrlsList(this, "connection_urls", false);
  public get connectionUrls() {
    return this._connectionUrls;
  }

  // data_safe_state - computed: true, optional: false, required: false
  public get dataSafeState() {
    return this.getStringAttribute('data_safe_state');
  }

  // data_storage_size_gb - computed: true, optional: true, required: false
  private _dataStorageSizeGb?: number; 
  public get dataStorageSizeGb() {
    return this.getNumberAttribute('data_storage_size_gb');
  }
  public set dataStorageSizeGb(value: number) {
    this._dataStorageSizeGb = value;
  }
  public resetDataStorageSizeGb() {
    this._dataStorageSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageSizeGbInput() {
    return this._dataStorageSizeGb;
  }

  // data_storage_size_tb - computed: true, optional: true, required: false
  private _dataStorageSizeTb?: number; 
  public get dataStorageSizeTb() {
    return this.getNumberAttribute('data_storage_size_tb');
  }
  public set dataStorageSizeTb(value: number) {
    this._dataStorageSizeTb = value;
  }
  public resetDataStorageSizeTb() {
    this._dataStorageSizeTb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageSizeTbInput() {
    return this._dataStorageSizeTb;
  }

  // database_management_state - computed: true, optional: false, required: false
  public get databaseManagementState() {
    return this.getStringAttribute('database_management_state');
  }

  // db_edition - computed: false, optional: true, required: false
  private _dbEdition?: string; 
  public get dbEdition() {
    return this.getStringAttribute('db_edition');
  }
  public set dbEdition(value: string) {
    this._dbEdition = value;
  }
  public resetDbEdition() {
    this._dbEdition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbEditionInput() {
    return this._dbEdition;
  }

  // db_version - computed: false, optional: true, required: false
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  public resetDbVersion() {
    this._dbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
  }

  // db_workload - computed: false, optional: false, required: true
  private _dbWorkload?: string; 
  public get dbWorkload() {
    return this.getStringAttribute('db_workload');
  }
  public set dbWorkload(value: string) {
    this._dbWorkload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbWorkloadInput() {
    return this._dbWorkload;
  }

  // failed_data_recovery_duration - computed: true, optional: false, required: false
  public get failedDataRecoveryDuration() {
    return this.getStringAttribute('failed_data_recovery_duration');
  }

  // is_auto_scaling_enabled - computed: false, optional: true, required: false
  private _isAutoScalingEnabled?: boolean | cdktf.IResolvable; 
  public get isAutoScalingEnabled() {
    return this.getBooleanAttribute('is_auto_scaling_enabled');
  }
  public set isAutoScalingEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutoScalingEnabled = value;
  }
  public resetIsAutoScalingEnabled() {
    this._isAutoScalingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoScalingEnabledInput() {
    return this._isAutoScalingEnabled;
  }

  // is_local_data_guard_enabled - computed: true, optional: false, required: false
  public get isLocalDataGuardEnabled() {
    return this.getBooleanAttribute('is_local_data_guard_enabled');
  }

  // is_storage_auto_scaling_enabled - computed: true, optional: true, required: false
  private _isStorageAutoScalingEnabled?: boolean | cdktf.IResolvable; 
  public get isStorageAutoScalingEnabled() {
    return this.getBooleanAttribute('is_storage_auto_scaling_enabled');
  }
  public set isStorageAutoScalingEnabled(value: boolean | cdktf.IResolvable) {
    this._isStorageAutoScalingEnabled = value;
  }
  public resetIsStorageAutoScalingEnabled() {
    this._isStorageAutoScalingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isStorageAutoScalingEnabledInput() {
    return this._isStorageAutoScalingEnabled;
  }

  // license_type - computed: false, optional: false, required: true
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // local_adg_auto_failover_max_data_loss_limit - computed: true, optional: false, required: false
  public get localAdgAutoFailoverMaxDataLossLimit() {
    return this.getNumberAttribute('local_adg_auto_failover_max_data_loss_limit');
  }

  // local_disaster_recovery_type - computed: true, optional: false, required: false
  public get localDisasterRecoveryType() {
    return this.getStringAttribute('local_disaster_recovery_type');
  }

  // local_standby_db - computed: true, optional: false, required: false
  private _localStandbyDb = new OracleDatabaseAutonomousDatabasePropertiesLocalStandbyDbList(this, "local_standby_db", false);
  public get localStandbyDb() {
    return this._localStandbyDb;
  }

  // maintenance_begin_time - computed: true, optional: false, required: false
  public get maintenanceBeginTime() {
    return this.getStringAttribute('maintenance_begin_time');
  }

  // maintenance_end_time - computed: true, optional: false, required: false
  public get maintenanceEndTime() {
    return this.getStringAttribute('maintenance_end_time');
  }

  // maintenance_schedule_type - computed: true, optional: true, required: false
  private _maintenanceScheduleType?: string; 
  public get maintenanceScheduleType() {
    return this.getStringAttribute('maintenance_schedule_type');
  }
  public set maintenanceScheduleType(value: string) {
    this._maintenanceScheduleType = value;
  }
  public resetMaintenanceScheduleType() {
    this._maintenanceScheduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceScheduleTypeInput() {
    return this._maintenanceScheduleType;
  }

  // memory_per_oracle_compute_unit_gbs - computed: true, optional: false, required: false
  public get memoryPerOracleComputeUnitGbs() {
    return this.getNumberAttribute('memory_per_oracle_compute_unit_gbs');
  }

  // memory_table_gbs - computed: true, optional: false, required: false
  public get memoryTableGbs() {
    return this.getNumberAttribute('memory_table_gbs');
  }

  // mtls_connection_required - computed: false, optional: true, required: false
  private _mtlsConnectionRequired?: boolean | cdktf.IResolvable; 
  public get mtlsConnectionRequired() {
    return this.getBooleanAttribute('mtls_connection_required');
  }
  public set mtlsConnectionRequired(value: boolean | cdktf.IResolvable) {
    this._mtlsConnectionRequired = value;
  }
  public resetMtlsConnectionRequired() {
    this._mtlsConnectionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsConnectionRequiredInput() {
    return this._mtlsConnectionRequired;
  }

  // n_character_set - computed: false, optional: true, required: false
  private _nCharacterSet?: string; 
  public get nCharacterSet() {
    return this.getStringAttribute('n_character_set');
  }
  public set nCharacterSet(value: string) {
    this._nCharacterSet = value;
  }
  public resetNCharacterSet() {
    this._nCharacterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nCharacterSetInput() {
    return this._nCharacterSet;
  }

  // next_long_term_backup_time - computed: true, optional: false, required: false
  public get nextLongTermBackupTime() {
    return this.getStringAttribute('next_long_term_backup_time');
  }

  // oci_url - computed: true, optional: false, required: false
  public get ociUrl() {
    return this.getStringAttribute('oci_url');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // open_mode - computed: true, optional: false, required: false
  public get openMode() {
    return this.getStringAttribute('open_mode');
  }

  // operations_insights_state - computed: true, optional: true, required: false
  private _operationsInsightsState?: string; 
  public get operationsInsightsState() {
    return this.getStringAttribute('operations_insights_state');
  }
  public set operationsInsightsState(value: string) {
    this._operationsInsightsState = value;
  }
  public resetOperationsInsightsState() {
    this._operationsInsightsState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationsInsightsStateInput() {
    return this._operationsInsightsState;
  }

  // peer_db_ids - computed: true, optional: false, required: false
  public get peerDbIds() {
    return this.getListAttribute('peer_db_ids');
  }

  // permission_level - computed: true, optional: false, required: false
  public get permissionLevel() {
    return this.getStringAttribute('permission_level');
  }

  // private_endpoint - computed: true, optional: false, required: false
  public get privateEndpoint() {
    return this.getStringAttribute('private_endpoint');
  }

  // private_endpoint_ip - computed: true, optional: true, required: false
  private _privateEndpointIp?: string; 
  public get privateEndpointIp() {
    return this.getStringAttribute('private_endpoint_ip');
  }
  public set privateEndpointIp(value: string) {
    this._privateEndpointIp = value;
  }
  public resetPrivateEndpointIp() {
    this._privateEndpointIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointIpInput() {
    return this._privateEndpointIp;
  }

  // private_endpoint_label - computed: true, optional: true, required: false
  private _privateEndpointLabel?: string; 
  public get privateEndpointLabel() {
    return this.getStringAttribute('private_endpoint_label');
  }
  public set privateEndpointLabel(value: string) {
    this._privateEndpointLabel = value;
  }
  public resetPrivateEndpointLabel() {
    this._privateEndpointLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateEndpointLabelInput() {
    return this._privateEndpointLabel;
  }

  // refreshable_mode - computed: true, optional: false, required: false
  public get refreshableMode() {
    return this.getStringAttribute('refreshable_mode');
  }

  // refreshable_state - computed: true, optional: false, required: false
  public get refreshableState() {
    return this.getStringAttribute('refreshable_state');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // scheduled_operation_details - computed: true, optional: false, required: false
  private _scheduledOperationDetails = new OracleDatabaseAutonomousDatabasePropertiesScheduledOperationDetailsList(this, "scheduled_operation_details", false);
  public get scheduledOperationDetails() {
    return this._scheduledOperationDetails;
  }

  // sql_web_developer_url - computed: true, optional: false, required: false
  public get sqlWebDeveloperUrl() {
    return this.getStringAttribute('sql_web_developer_url');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // supported_clone_regions - computed: true, optional: false, required: false
  public get supportedCloneRegions() {
    return this.getListAttribute('supported_clone_regions');
  }

  // total_auto_backup_storage_size_gbs - computed: true, optional: false, required: false
  public get totalAutoBackupStorageSizeGbs() {
    return this.getNumberAttribute('total_auto_backup_storage_size_gbs');
  }

  // used_data_storage_size_tbs - computed: true, optional: false, required: false
  public get usedDataStorageSizeTbs() {
    return this.getNumberAttribute('used_data_storage_size_tbs');
  }

  // customer_contacts - computed: false, optional: true, required: false
  private _customerContacts = new OracleDatabaseAutonomousDatabasePropertiesCustomerContactsList(this, "customer_contacts", false);
  public get customerContacts() {
    return this._customerContacts;
  }
  public putCustomerContacts(value: OracleDatabaseAutonomousDatabasePropertiesCustomerContacts[] | cdktf.IResolvable) {
    this._customerContacts.internalValue = value;
  }
  public resetCustomerContacts() {
    this._customerContacts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerContactsInput() {
    return this._customerContacts.internalValue;
  }
}
export interface OracleDatabaseAutonomousDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#create OracleDatabaseAutonomousDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#delete OracleDatabaseAutonomousDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#update OracleDatabaseAutonomousDatabase#update}
  */
  readonly update?: string;
}

export function oracleDatabaseAutonomousDatabaseTimeoutsToTerraform(struct?: OracleDatabaseAutonomousDatabaseTimeouts | cdktf.IResolvable): any {
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


export function oracleDatabaseAutonomousDatabaseTimeoutsToHclTerraform(struct?: OracleDatabaseAutonomousDatabaseTimeouts | cdktf.IResolvable): any {
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

export class OracleDatabaseAutonomousDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OracleDatabaseAutonomousDatabaseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OracleDatabaseAutonomousDatabaseTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database google_oracle_database_autonomous_database}
*/
export class OracleDatabaseAutonomousDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_oracle_database_autonomous_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OracleDatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OracleDatabaseAutonomousDatabase to import
  * @param importFromId The id of the existing OracleDatabaseAutonomousDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OracleDatabaseAutonomousDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_oracle_database_autonomous_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/oracle_database_autonomous_database google_oracle_database_autonomous_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OracleDatabaseAutonomousDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: OracleDatabaseAutonomousDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'google_oracle_database_autonomous_database',
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
    this._adminPassword = config.adminPassword;
    this._autonomousDatabaseId = config.autonomousDatabaseId;
    this._cidr = config.cidr;
    this._database = config.database;
    this._deletionProtection = config.deletionProtection;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._network = config.network;
    this._odbNetwork = config.odbNetwork;
    this._odbSubnet = config.odbSubnet;
    this._project = config.project;
    this._properties.internalValue = config.properties;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // autonomous_database_id - computed: false, optional: false, required: true
  private _autonomousDatabaseId?: string; 
  public get autonomousDatabaseId() {
    return this.getStringAttribute('autonomous_database_id');
  }
  public set autonomousDatabaseId(value: string) {
    this._autonomousDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousDatabaseIdInput() {
    return this._autonomousDatabaseId;
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr?: string; 
  public get cidr() {
    return this.getStringAttribute('cidr');
  }
  public set cidr(value: string) {
    this._cidr = value;
  }
  public resetCidr() {
    this._cidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // display_name - computed: true, optional: true, required: false
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // entitlement_id - computed: true, optional: false, required: false
  public get entitlementId() {
    return this.getStringAttribute('entitlement_id');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // odb_network - computed: false, optional: true, required: false
  private _odbNetwork?: string; 
  public get odbNetwork() {
    return this.getStringAttribute('odb_network');
  }
  public set odbNetwork(value: string) {
    this._odbNetwork = value;
  }
  public resetOdbNetwork() {
    this._odbNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get odbNetworkInput() {
    return this._odbNetwork;
  }

  // odb_subnet - computed: false, optional: true, required: false
  private _odbSubnet?: string; 
  public get odbSubnet() {
    return this.getStringAttribute('odb_subnet');
  }
  public set odbSubnet(value: string) {
    this._odbSubnet = value;
  }
  public resetOdbSubnet() {
    this._odbSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get odbSubnetInput() {
    return this._odbSubnet;
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // properties - computed: false, optional: false, required: true
  private _properties = new OracleDatabaseAutonomousDatabasePropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: OracleDatabaseAutonomousDatabaseProperties) {
    this._properties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OracleDatabaseAutonomousDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OracleDatabaseAutonomousDatabaseTimeouts) {
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
      admin_password: cdktf.stringToTerraform(this._adminPassword),
      autonomous_database_id: cdktf.stringToTerraform(this._autonomousDatabaseId),
      cidr: cdktf.stringToTerraform(this._cidr),
      database: cdktf.stringToTerraform(this._database),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      network: cdktf.stringToTerraform(this._network),
      odb_network: cdktf.stringToTerraform(this._odbNetwork),
      odb_subnet: cdktf.stringToTerraform(this._odbSubnet),
      project: cdktf.stringToTerraform(this._project),
      properties: oracleDatabaseAutonomousDatabasePropertiesToTerraform(this._properties.internalValue),
      timeouts: oracleDatabaseAutonomousDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_password: {
        value: cdktf.stringToHclTerraform(this._adminPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autonomous_database_id: {
        value: cdktf.stringToHclTerraform(this._autonomousDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr: {
        value: cdktf.stringToHclTerraform(this._cidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      odb_network: {
        value: cdktf.stringToHclTerraform(this._odbNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      odb_subnet: {
        value: cdktf.stringToHclTerraform(this._odbSubnet),
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
      properties: {
        value: oracleDatabaseAutonomousDatabasePropertiesToHclTerraform(this._properties.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OracleDatabaseAutonomousDatabasePropertiesList",
      },
      timeouts: {
        value: oracleDatabaseAutonomousDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OracleDatabaseAutonomousDatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
