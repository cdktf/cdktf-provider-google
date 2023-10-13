// https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseMigrationServiceConnectionProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the connection profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#connection_profile_id DatabaseMigrationServiceConnectionProfile#connection_profile_id}
  */
  readonly connectionProfileId: string;
  /**
  * The connection profile display name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#display_name DatabaseMigrationServiceConnectionProfile#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#id DatabaseMigrationServiceConnectionProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource labels for connection profile to use to annotate any related underlying resources such as Compute Engine VMs.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#labels DatabaseMigrationServiceConnectionProfile#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location where the connection profile should reside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#location DatabaseMigrationServiceConnectionProfile#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#project DatabaseMigrationServiceConnectionProfile#project}
  */
  readonly project?: string;
  /**
  * alloydb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#alloydb DatabaseMigrationServiceConnectionProfile#alloydb}
  */
  readonly alloydb?: DatabaseMigrationServiceConnectionProfileAlloydb;
  /**
  * cloudsql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#cloudsql DatabaseMigrationServiceConnectionProfile#cloudsql}
  */
  readonly cloudsql?: DatabaseMigrationServiceConnectionProfileCloudsql;
  /**
  * mysql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#mysql DatabaseMigrationServiceConnectionProfile#mysql}
  */
  readonly mysql?: DatabaseMigrationServiceConnectionProfileMysql;
  /**
  * oracle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#oracle DatabaseMigrationServiceConnectionProfile#oracle}
  */
  readonly oracle?: DatabaseMigrationServiceConnectionProfileOracle;
  /**
  * postgresql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#postgresql DatabaseMigrationServiceConnectionProfile#postgresql}
  */
  readonly postgresql?: DatabaseMigrationServiceConnectionProfilePostgresql;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#timeouts DatabaseMigrationServiceConnectionProfile#timeouts}
  */
  readonly timeouts?: DatabaseMigrationServiceConnectionProfileTimeouts;
}
export interface DatabaseMigrationServiceConnectionProfileError {
}

export function databaseMigrationServiceConnectionProfileErrorToTerraform(struct?: DatabaseMigrationServiceConnectionProfileError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DatabaseMigrationServiceConnectionProfileErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseMigrationServiceConnectionProfileError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceConnectionProfileError | undefined) {
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

  // details - computed: true, optional: false, required: false
  private _details = new cdktf.StringMapList(this, "details", false);
  public get details() {
    return this._details;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class DatabaseMigrationServiceConnectionProfileErrorList extends cdktf.ComplexList {

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
  public get(index: number): DatabaseMigrationServiceConnectionProfileErrorOutputReference {
    return new DatabaseMigrationServiceConnectionProfileErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser {
  /**
  * The initial password for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#password DatabaseMigrationServiceConnectionProfile#password}
  */
  readonly password: string;
  /**
  * The database username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#user DatabaseMigrationServiceConnectionProfile#user}
  */
  readonly user: string;
}

export function databaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserToTerraform(struct?: DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference | DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    user: cdktf.stringToTerraform(struct!.user),
  }
}

export class DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._user = value.user;
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

  // password_set - computed: true, optional: false, required: false
  public get passwordSet() {
    return this.getBooleanAttribute('password_set');
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig {
  /**
  * The number of CPU's in the VM instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#cpu_count DatabaseMigrationServiceConnectionProfile#cpu_count}
  */
  readonly cpuCount: number;
}

export function databaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigToTerraform(struct?: DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference | DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
  }
}

export class DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
    }
  }

  // cpu_count - computed: false, optional: false, required: true
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }
}
export interface DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings {
  /**
  * Database flags to pass to AlloyDB when DMS is creating the AlloyDB cluster and instances. See the AlloyDB documentation for how these can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#database_flags DatabaseMigrationServiceConnectionProfile#database_flags}
  */
  readonly databaseFlags?: { [key: string]: string };
  /**
  * The database username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#id DatabaseMigrationServiceConnectionProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Labels for the AlloyDB primary instance created by DMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#labels DatabaseMigrationServiceConnectionProfile#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * machine_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#machine_config DatabaseMigrationServiceConnectionProfile#machine_config}
  */
  readonly machineConfig: DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig;
}

export function databaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsToTerraform(struct?: DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference | DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_flags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.databaseFlags),
    id: cdktf.stringToTerraform(struct!.id),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    machine_config: databaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigToTerraform(struct!.machineConfig),
  }
}

export class DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseFlags = this._databaseFlags;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._machineConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineConfig = this._machineConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseFlags = undefined;
      this._id = undefined;
      this._labels = undefined;
      this._machineConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseFlags = value.databaseFlags;
      this._id = value.id;
      this._labels = value.labels;
      this._machineConfig.internalValue = value.machineConfig;
    }
  }

  // database_flags - computed: false, optional: true, required: false
  private _databaseFlags?: { [key: string]: string }; 
  public get databaseFlags() {
    return this.getStringMapAttribute('database_flags');
  }
  public set databaseFlags(value: { [key: string]: string }) {
    this._databaseFlags = value;
  }
  public resetDatabaseFlags() {
    this._databaseFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFlagsInput() {
    return this._databaseFlags;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
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

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // machine_config - computed: false, optional: false, required: true
  private _machineConfig = new DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfigOutputReference(this, "machine_config");
  public get machineConfig() {
    return this._machineConfig;
  }
  public putMachineConfig(value: DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsMachineConfig) {
    this._machineConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineConfigInput() {
    return this._machineConfig.internalValue;
  }
}
export interface DatabaseMigrationServiceConnectionProfileAlloydbSettings {
  /**
  * Labels for the AlloyDB cluster created by DMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#labels DatabaseMigrationServiceConnectionProfile#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Required. The resource link for the VPC network in which cluster resources are created and from which they are accessible via Private IP. The network must belong to the same project as the cluster.
  * It is specified in the form: 'projects/{project_number}/global/networks/{network_id}'. This is required to create a cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#vpc_network DatabaseMigrationServiceConnectionProfile#vpc_network}
  */
  readonly vpcNetwork: string;
  /**
  * initial_user block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#initial_user DatabaseMigrationServiceConnectionProfile#initial_user}
  */
  readonly initialUser: DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser;
  /**
  * primary_instance_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#primary_instance_settings DatabaseMigrationServiceConnectionProfile#primary_instance_settings}
  */
  readonly primaryInstanceSettings?: DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings;
}

export function databaseMigrationServiceConnectionProfileAlloydbSettingsToTerraform(struct?: DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference | DatabaseMigrationServiceConnectionProfileAlloydbSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    vpc_network: cdktf.stringToTerraform(struct!.vpcNetwork),
    initial_user: databaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserToTerraform(struct!.initialUser),
    primary_instance_settings: databaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsToTerraform(struct!.primaryInstanceSettings),
  }
}

export class DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceConnectionProfileAlloydbSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._vpcNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcNetwork = this._vpcNetwork;
    }
    if (this._initialUser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialUser = this._initialUser?.internalValue;
    }
    if (this._primaryInstanceSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryInstanceSettings = this._primaryInstanceSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceConnectionProfileAlloydbSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._vpcNetwork = undefined;
      this._initialUser.internalValue = undefined;
      this._primaryInstanceSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._vpcNetwork = value.vpcNetwork;
      this._initialUser.internalValue = value.initialUser;
      this._primaryInstanceSettings.internalValue = value.primaryInstanceSettings;
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

  // vpc_network - computed: false, optional: false, required: true
  private _vpcNetwork?: string; 
  public get vpcNetwork() {
    return this.getStringAttribute('vpc_network');
  }
  public set vpcNetwork(value: string) {
    this._vpcNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNetworkInput() {
    return this._vpcNetwork;
  }

  // initial_user - computed: false, optional: false, required: true
  private _initialUser = new DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUserOutputReference(this, "initial_user");
  public get initialUser() {
    return this._initialUser;
  }
  public putInitialUser(value: DatabaseMigrationServiceConnectionProfileAlloydbSettingsInitialUser) {
    this._initialUser.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get initialUserInput() {
    return this._initialUser.internalValue;
  }

  // primary_instance_settings - computed: false, optional: true, required: false
  private _primaryInstanceSettings = new DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettingsOutputReference(this, "primary_instance_settings");
  public get primaryInstanceSettings() {
    return this._primaryInstanceSettings;
  }
  public putPrimaryInstanceSettings(value: DatabaseMigrationServiceConnectionProfileAlloydbSettingsPrimaryInstanceSettings) {
    this._primaryInstanceSettings.internalValue = value;
  }
  public resetPrimaryInstanceSettings() {
    this._primaryInstanceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInstanceSettingsInput() {
    return this._primaryInstanceSettings.internalValue;
  }
}
export interface DatabaseMigrationServiceConnectionProfileAlloydb {
  /**
  * Required. The AlloyDB cluster ID that this connection profile is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#cluster_id DatabaseMigrationServiceConnectionProfile#cluster_id}
  */
  readonly clusterId: string;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#settings DatabaseMigrationServiceConnectionProfile#settings}
  */
  readonly settings?: DatabaseMigrationServiceConnectionProfileAlloydbSettings;
}

export function databaseMigrationServiceConnectionProfileAlloydbToTerraform(struct?: DatabaseMigrationServiceConnectionProfileAlloydbOutputReference | DatabaseMigrationServiceConnectionProfileAlloydb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    settings: databaseMigrationServiceConnectionProfileAlloydbSettingsToTerraform(struct!.settings),
  }
}

export class DatabaseMigrationServiceConnectionProfileAlloydbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceConnectionProfileAlloydb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceConnectionProfileAlloydb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._settings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterId = value.clusterId;
      this._settings.internalValue = value.settings;
    }
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new DatabaseMigrationServiceConnectionProfileAlloydbSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DatabaseMigrationServiceConnectionProfileAlloydbSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}
export interface DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks {
  /**
  * The time when this access control entry expires in RFC 3339 format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#expire_time DatabaseMigrationServiceConnectionProfile#expire_time}
  */
  readonly expireTime?: string;
  /**
  * A label to identify this entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#label DatabaseMigrationServiceConnectionProfile#label}
  */
  readonly label?: string;
  /**
  * Input only. The time-to-leave of this access control entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#ttl DatabaseMigrationServiceConnectionProfile#ttl}
  */
  readonly ttl?: string;
  /**
  * The allowlisted value for the access control list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#value DatabaseMigrationServiceConnectionProfile#value}
  */
  readonly value: string;
}

export function databaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksToTerraform(struct?: DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expire_time: cdktf.stringToTerraform(struct!.expireTime),
    label: cdktf.stringToTerraform(struct!.label),
    ttl: cdktf.stringToTerraform(struct!.ttl),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expireTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireTime = this._expireTime;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expireTime = undefined;
      this._label = undefined;
      this._ttl = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expireTime = value.expireTime;
      this._label = value.label;
      this._ttl = value.ttl;
      this._value = value.value;
    }
  }

  // expire_time - computed: false, optional: true, required: false
  private _expireTime?: string; 
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }
  public set expireTime(value: string) {
    this._expireTime = value;
  }
  public resetExpireTime() {
    this._expireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

export class DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList extends cdktf.ComplexList {
  public internalValue? : DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks[] | cdktf.IResolvable

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
  public get(index: number): DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference {
    return new DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig {
  /**
  * Whether the instance should be assigned an IPv4 address or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#enable_ipv4 DatabaseMigrationServiceConnectionProfile#enable_ipv4}
  */
  readonly enableIpv4?: boolean | cdktf.IResolvable;
  /**
  * The resource link for the VPC network from which the Cloud SQL instance is accessible for private IP. For example, projects/myProject/global/networks/default.
  * This setting can be updated, but it cannot be removed after it is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#private_network DatabaseMigrationServiceConnectionProfile#private_network}
  */
  readonly privateNetwork?: string;
  /**
  * Whether SSL connections over IP should be enforced or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#require_ssl DatabaseMigrationServiceConnectionProfile#require_ssl}
  */
  readonly requireSsl?: boolean | cdktf.IResolvable;
  /**
  * authorized_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#authorized_networks DatabaseMigrationServiceConnectionProfile#authorized_networks}
  */
  readonly authorizedNetworks?: DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks[] | cdktf.IResolvable;
}

export function databaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigToTerraform(struct?: DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference | DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_ipv4: cdktf.booleanToTerraform(struct!.enableIpv4),
    private_network: cdktf.stringToTerraform(struct!.privateNetwork),
    require_ssl: cdktf.booleanToTerraform(struct!.requireSsl),
    authorized_networks: cdktf.listMapper(databaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksToTerraform, true)(struct!.authorizedNetworks),
  }
}

export class DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpv4 = this._enableIpv4;
    }
    if (this._privateNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateNetwork = this._privateNetwork;
    }
    if (this._requireSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSsl = this._requireSsl;
    }
    if (this._authorizedNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedNetworks = this._authorizedNetworks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableIpv4 = undefined;
      this._privateNetwork = undefined;
      this._requireSsl = undefined;
      this._authorizedNetworks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableIpv4 = value.enableIpv4;
      this._privateNetwork = value.privateNetwork;
      this._requireSsl = value.requireSsl;
      this._authorizedNetworks.internalValue = value.authorizedNetworks;
    }
  }

  // enable_ipv4 - computed: false, optional: true, required: false
  private _enableIpv4?: boolean | cdktf.IResolvable; 
  public get enableIpv4() {
    return this.getBooleanAttribute('enable_ipv4');
  }
  public set enableIpv4(value: boolean | cdktf.IResolvable) {
    this._enableIpv4 = value;
  }
  public resetEnableIpv4() {
    this._enableIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv4Input() {
    return this._enableIpv4;
  }

  // private_network - computed: false, optional: true, required: false
  private _privateNetwork?: string; 
  public get privateNetwork() {
    return this.getStringAttribute('private_network');
  }
  public set privateNetwork(value: string) {
    this._privateNetwork = value;
  }
  public resetPrivateNetwork() {
    this._privateNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkInput() {
    return this._privateNetwork;
  }

  // require_ssl - computed: false, optional: true, required: false
  private _requireSsl?: boolean | cdktf.IResolvable; 
  public get requireSsl() {
    return this.getBooleanAttribute('require_ssl');
  }
  public set requireSsl(value: boolean | cdktf.IResolvable) {
    this._requireSsl = value;
  }
  public resetRequireSsl() {
    this._requireSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSslInput() {
    return this._requireSsl;
  }

  // authorized_networks - computed: false, optional: true, required: false
  private _authorizedNetworks = new DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworksList(this, "authorized_networks", false);
  public get authorizedNetworks() {
    return this._authorizedNetworks;
  }
  public putAuthorizedNetworks(value: DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigAuthorizedNetworks[] | cdktf.IResolvable) {
    this._authorizedNetworks.internalValue = value;
  }
  public resetAuthorizedNetworks() {
    this._authorizedNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedNetworksInput() {
    return this._authorizedNetworks.internalValue;
  }
}
export interface DatabaseMigrationServiceConnectionProfileCloudsqlSettings {
  /**
  * The activation policy specifies when the instance is activated; it is applicable only when the instance state is 'RUNNABLE'. Possible values: ["ALWAYS", "NEVER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#activation_policy DatabaseMigrationServiceConnectionProfile#activation_policy}
  */
  readonly activationPolicy?: string;
  /**
  * If you enable this setting, Cloud SQL checks your available storage every 30 seconds. If the available storage falls below a threshold size, Cloud SQL automatically adds additional storage capacity.
  * If the available storage repeatedly falls below the threshold size, Cloud SQL continues to add storage until it reaches the maximum of 30 TB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#auto_storage_increase DatabaseMigrationServiceConnectionProfile#auto_storage_increase}
  */
  readonly autoStorageIncrease?: boolean | cdktf.IResolvable;
  /**
  * The KMS key name used for the csql instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#cmek_key_name DatabaseMigrationServiceConnectionProfile#cmek_key_name}
  */
  readonly cmekKeyName?: string;
  /**
  * The Cloud SQL default instance level collation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#collation DatabaseMigrationServiceConnectionProfile#collation}
  */
  readonly collation?: string;
  /**
  * The storage capacity available to the database, in GB. The minimum (and default) size is 10GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#data_disk_size_gb DatabaseMigrationServiceConnectionProfile#data_disk_size_gb}
  */
  readonly dataDiskSizeGb?: string;
  /**
  * The type of storage. Possible values: ["PD_SSD", "PD_HDD"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#data_disk_type DatabaseMigrationServiceConnectionProfile#data_disk_type}
  */
  readonly dataDiskType?: string;
  /**
  * The database flags passed to the Cloud SQL instance at startup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#database_flags DatabaseMigrationServiceConnectionProfile#database_flags}
  */
  readonly databaseFlags?: { [key: string]: string };
  /**
  * The database engine type and version.
  * Currently supported values located at https://cloud.google.com/database-migration/docs/reference/rest/v1/projects.locations.connectionProfiles#sqldatabaseversion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#database_version DatabaseMigrationServiceConnectionProfile#database_version}
  */
  readonly databaseVersion?: string;
  /**
  * The edition of the given Cloud SQL instance. Possible values: ["ENTERPRISE", "ENTERPRISE_PLUS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#edition DatabaseMigrationServiceConnectionProfile#edition}
  */
  readonly edition?: string;
  /**
  * Input only. Initial root password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#root_password DatabaseMigrationServiceConnectionProfile#root_password}
  */
  readonly rootPassword?: string;
  /**
  * The Database Migration Service source connection profile ID, in the format: projects/my_project_name/locations/us-central1/connectionProfiles/connection_profile_ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#source_id DatabaseMigrationServiceConnectionProfile#source_id}
  */
  readonly sourceId: string;
  /**
  * The maximum size to which storage capacity can be automatically increased. The default value is 0, which specifies that there is no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#storage_auto_resize_limit DatabaseMigrationServiceConnectionProfile#storage_auto_resize_limit}
  */
  readonly storageAutoResizeLimit?: string;
  /**
  * The tier (or machine type) for this instance, for example: db-n1-standard-1 (MySQL instances) or db-custom-1-3840 (PostgreSQL instances).
  * For more information, see https://cloud.google.com/sql/docs/mysql/instance-settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#tier DatabaseMigrationServiceConnectionProfile#tier}
  */
  readonly tier?: string;
  /**
  * The resource labels for a Cloud SQL instance to use to annotate any related underlying resources such as Compute Engine VMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#user_labels DatabaseMigrationServiceConnectionProfile#user_labels}
  */
  readonly userLabels?: { [key: string]: string };
  /**
  * The Google Cloud Platform zone where your Cloud SQL datdabse instance is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#zone DatabaseMigrationServiceConnectionProfile#zone}
  */
  readonly zone?: string;
  /**
  * ip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#ip_config DatabaseMigrationServiceConnectionProfile#ip_config}
  */
  readonly ipConfig?: DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig;
}

export function databaseMigrationServiceConnectionProfileCloudsqlSettingsToTerraform(struct?: DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference | DatabaseMigrationServiceConnectionProfileCloudsqlSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activation_policy: cdktf.stringToTerraform(struct!.activationPolicy),
    auto_storage_increase: cdktf.booleanToTerraform(struct!.autoStorageIncrease),
    cmek_key_name: cdktf.stringToTerraform(struct!.cmekKeyName),
    collation: cdktf.stringToTerraform(struct!.collation),
    data_disk_size_gb: cdktf.stringToTerraform(struct!.dataDiskSizeGb),
    data_disk_type: cdktf.stringToTerraform(struct!.dataDiskType),
    database_flags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.databaseFlags),
    database_version: cdktf.stringToTerraform(struct!.databaseVersion),
    edition: cdktf.stringToTerraform(struct!.edition),
    root_password: cdktf.stringToTerraform(struct!.rootPassword),
    source_id: cdktf.stringToTerraform(struct!.sourceId),
    storage_auto_resize_limit: cdktf.stringToTerraform(struct!.storageAutoResizeLimit),
    tier: cdktf.stringToTerraform(struct!.tier),
    user_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.userLabels),
    zone: cdktf.stringToTerraform(struct!.zone),
    ip_config: databaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigToTerraform(struct!.ipConfig),
  }
}

export class DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceConnectionProfileCloudsqlSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.activationPolicy = this._activationPolicy;
    }
    if (this._autoStorageIncrease !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoStorageIncrease = this._autoStorageIncrease;
    }
    if (this._cmekKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmekKeyName = this._cmekKeyName;
    }
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._dataDiskSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDiskSizeGb = this._dataDiskSizeGb;
    }
    if (this._dataDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataDiskType = this._dataDiskType;
    }
    if (this._databaseFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseFlags = this._databaseFlags;
    }
    if (this._databaseVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseVersion = this._databaseVersion;
    }
    if (this._edition !== undefined) {
      hasAnyValues = true;
      internalValueResult.edition = this._edition;
    }
    if (this._rootPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootPassword = this._rootPassword;
    }
    if (this._sourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceId = this._sourceId;
    }
    if (this._storageAutoResizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageAutoResizeLimit = this._storageAutoResizeLimit;
    }
    if (this._tier !== undefined) {
      hasAnyValues = true;
      internalValueResult.tier = this._tier;
    }
    if (this._userLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.userLabels = this._userLabels;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    if (this._ipConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipConfig = this._ipConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceConnectionProfileCloudsqlSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activationPolicy = undefined;
      this._autoStorageIncrease = undefined;
      this._cmekKeyName = undefined;
      this._collation = undefined;
      this._dataDiskSizeGb = undefined;
      this._dataDiskType = undefined;
      this._databaseFlags = undefined;
      this._databaseVersion = undefined;
      this._edition = undefined;
      this._rootPassword = undefined;
      this._sourceId = undefined;
      this._storageAutoResizeLimit = undefined;
      this._tier = undefined;
      this._userLabels = undefined;
      this._zone = undefined;
      this._ipConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activationPolicy = value.activationPolicy;
      this._autoStorageIncrease = value.autoStorageIncrease;
      this._cmekKeyName = value.cmekKeyName;
      this._collation = value.collation;
      this._dataDiskSizeGb = value.dataDiskSizeGb;
      this._dataDiskType = value.dataDiskType;
      this._databaseFlags = value.databaseFlags;
      this._databaseVersion = value.databaseVersion;
      this._edition = value.edition;
      this._rootPassword = value.rootPassword;
      this._sourceId = value.sourceId;
      this._storageAutoResizeLimit = value.storageAutoResizeLimit;
      this._tier = value.tier;
      this._userLabels = value.userLabels;
      this._zone = value.zone;
      this._ipConfig.internalValue = value.ipConfig;
    }
  }

  // activation_policy - computed: false, optional: true, required: false
  private _activationPolicy?: string; 
  public get activationPolicy() {
    return this.getStringAttribute('activation_policy');
  }
  public set activationPolicy(value: string) {
    this._activationPolicy = value;
  }
  public resetActivationPolicy() {
    this._activationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationPolicyInput() {
    return this._activationPolicy;
  }

  // auto_storage_increase - computed: false, optional: true, required: false
  private _autoStorageIncrease?: boolean | cdktf.IResolvable; 
  public get autoStorageIncrease() {
    return this.getBooleanAttribute('auto_storage_increase');
  }
  public set autoStorageIncrease(value: boolean | cdktf.IResolvable) {
    this._autoStorageIncrease = value;
  }
  public resetAutoStorageIncrease() {
    this._autoStorageIncrease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStorageIncreaseInput() {
    return this._autoStorageIncrease;
  }

  // cmek_key_name - computed: false, optional: true, required: false
  private _cmekKeyName?: string; 
  public get cmekKeyName() {
    return this.getStringAttribute('cmek_key_name');
  }
  public set cmekKeyName(value: string) {
    this._cmekKeyName = value;
  }
  public resetCmekKeyName() {
    this._cmekKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmekKeyNameInput() {
    return this._cmekKeyName;
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
  }

  // data_disk_size_gb - computed: false, optional: true, required: false
  private _dataDiskSizeGb?: string; 
  public get dataDiskSizeGb() {
    return this.getStringAttribute('data_disk_size_gb');
  }
  public set dataDiskSizeGb(value: string) {
    this._dataDiskSizeGb = value;
  }
  public resetDataDiskSizeGb() {
    this._dataDiskSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskSizeGbInput() {
    return this._dataDiskSizeGb;
  }

  // data_disk_type - computed: false, optional: true, required: false
  private _dataDiskType?: string; 
  public get dataDiskType() {
    return this.getStringAttribute('data_disk_type');
  }
  public set dataDiskType(value: string) {
    this._dataDiskType = value;
  }
  public resetDataDiskType() {
    this._dataDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDiskTypeInput() {
    return this._dataDiskType;
  }

  // database_flags - computed: false, optional: true, required: false
  private _databaseFlags?: { [key: string]: string }; 
  public get databaseFlags() {
    return this.getStringMapAttribute('database_flags');
  }
  public set databaseFlags(value: { [key: string]: string }) {
    this._databaseFlags = value;
  }
  public resetDatabaseFlags() {
    this._databaseFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFlagsInput() {
    return this._databaseFlags;
  }

  // database_version - computed: false, optional: true, required: false
  private _databaseVersion?: string; 
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }
  public set databaseVersion(value: string) {
    this._databaseVersion = value;
  }
  public resetDatabaseVersion() {
    this._databaseVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseVersionInput() {
    return this._databaseVersion;
  }

  // edition - computed: false, optional: true, required: false
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  public resetEdition() {
    this._edition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
  }

  // root_password - computed: false, optional: true, required: false
  private _rootPassword?: string; 
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }
  public set rootPassword(value: string) {
    this._rootPassword = value;
  }
  public resetRootPassword() {
    this._rootPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPasswordInput() {
    return this._rootPassword;
  }

  // root_password_set - computed: true, optional: false, required: false
  public get rootPasswordSet() {
    return this.getBooleanAttribute('root_password_set');
  }

  // source_id - computed: false, optional: false, required: true
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // storage_auto_resize_limit - computed: false, optional: true, required: false
  private _storageAutoResizeLimit?: string; 
  public get storageAutoResizeLimit() {
    return this.getStringAttribute('storage_auto_resize_limit');
  }
  public set storageAutoResizeLimit(value: string) {
    this._storageAutoResizeLimit = value;
  }
  public resetStorageAutoResizeLimit() {
    this._storageAutoResizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAutoResizeLimitInput() {
    return this._storageAutoResizeLimit;
  }

  // tier - computed: false, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // user_labels - computed: false, optional: true, required: false
  private _userLabels?: { [key: string]: string }; 
  public get userLabels() {
    return this.getStringMapAttribute('user_labels');
  }
  public set userLabels(value: { [key: string]: string }) {
    this._userLabels = value;
  }
  public resetUserLabels() {
    this._userLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userLabelsInput() {
    return this._userLabels;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // ip_config - computed: false, optional: true, required: false
  private _ipConfig = new DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfigOutputReference(this, "ip_config");
  public get ipConfig() {
    return this._ipConfig;
  }
  public putIpConfig(value: DatabaseMigrationServiceConnectionProfileCloudsqlSettingsIpConfig) {
    this._ipConfig.internalValue = value;
  }
  public resetIpConfig() {
    this._ipConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigInput() {
    return this._ipConfig.internalValue;
  }
}
export interface DatabaseMigrationServiceConnectionProfileCloudsql {
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#settings DatabaseMigrationServiceConnectionProfile#settings}
  */
  readonly settings?: DatabaseMigrationServiceConnectionProfileCloudsqlSettings;
}

export function databaseMigrationServiceConnectionProfileCloudsqlToTerraform(struct?: DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference | DatabaseMigrationServiceConnectionProfileCloudsql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    settings: databaseMigrationServiceConnectionProfileCloudsqlSettingsToTerraform(struct!.settings),
  }
}

export class DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceConnectionProfileCloudsql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._settings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceConnectionProfileCloudsql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._settings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._settings.internalValue = value.settings;
    }
  }

  // cloud_sql_id - computed: true, optional: false, required: false
  public get cloudSqlId() {
    return this.getStringAttribute('cloud_sql_id');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new DatabaseMigrationServiceConnectionProfileCloudsqlSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DatabaseMigrationServiceConnectionProfileCloudsqlSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }
}
export interface DatabaseMigrationServiceConnectionProfileMysqlSsl {
  /**
  * Required. Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate.
  * The replica will use this certificate to verify it's connecting to the right host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#ca_certificate DatabaseMigrationServiceConnectionProfile#ca_certificate}
  */
  readonly caCertificate: string;
  /**
  * Input only. The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.
  * If this field is used then the 'clientKey' field is mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#client_certificate DatabaseMigrationServiceConnectionProfile#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Input only. The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate.
  * If this field is used then the 'clientCertificate' field is mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#client_key DatabaseMigrationServiceConnectionProfile#client_key}
  */
  readonly clientKey?: string;
}

export function databaseMigrationServiceConnectionProfileMysqlSslToTerraform(struct?: DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference | DatabaseMigrationServiceConnectionProfileMysqlSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
  }
}

export class DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceConnectionProfileMysqlSsl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceConnectionProfileMysqlSsl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
      this._clientCertificate = undefined;
      this._clientKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
      this._clientCertificate = value.clientCertificate;
      this._clientKey = value.clientKey;
    }
  }

  // ca_certificate - computed: false, optional: false, required: true
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DatabaseMigrationServiceConnectionProfileMysql {
  /**
  * If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#cloud_sql_id DatabaseMigrationServiceConnectionProfile#cloud_sql_id}
  */
  readonly cloudSqlId?: string;
  /**
  * Required. The IP or hostname of the source MySQL database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#host DatabaseMigrationServiceConnectionProfile#host}
  */
  readonly host: string;
  /**
  * Required. Input only. The password for the user that Database Migration Service will be using to connect to the database.
  * This field is not returned on request, and the value is encrypted when stored in Database Migration Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#password DatabaseMigrationServiceConnectionProfile#password}
  */
  readonly password: string;
  /**
  * Required. The network port of the source MySQL database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#port DatabaseMigrationServiceConnectionProfile#port}
  */
  readonly port: number;
  /**
  * Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#username DatabaseMigrationServiceConnectionProfile#username}
  */
  readonly username: string;
  /**
  * ssl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#ssl DatabaseMigrationServiceConnectionProfile#ssl}
  */
  readonly ssl?: DatabaseMigrationServiceConnectionProfileMysqlSsl;
}

export function databaseMigrationServiceConnectionProfileMysqlToTerraform(struct?: DatabaseMigrationServiceConnectionProfileMysqlOutputReference | DatabaseMigrationServiceConnectionProfileMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_sql_id: cdktf.stringToTerraform(struct!.cloudSqlId),
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    username: cdktf.stringToTerraform(struct!.username),
    ssl: databaseMigrationServiceConnectionProfileMysqlSslToTerraform(struct!.ssl),
  }
}

export class DatabaseMigrationServiceConnectionProfileMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceConnectionProfileMysql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudSqlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudSqlId = this._cloudSqlId;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._ssl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceConnectionProfileMysql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudSqlId = undefined;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._username = undefined;
      this._ssl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudSqlId = value.cloudSqlId;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._username = value.username;
      this._ssl.internalValue = value.ssl;
    }
  }

  // cloud_sql_id - computed: false, optional: true, required: false
  private _cloudSqlId?: string; 
  public get cloudSqlId() {
    return this.getStringAttribute('cloud_sql_id');
  }
  public set cloudSqlId(value: string) {
    this._cloudSqlId = value;
  }
  public resetCloudSqlId() {
    this._cloudSqlId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSqlIdInput() {
    return this._cloudSqlId;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // password_set - computed: true, optional: false, required: false
  public get passwordSet() {
    return this.getBooleanAttribute('password_set');
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // ssl - computed: false, optional: true, required: false
  private _ssl = new DatabaseMigrationServiceConnectionProfileMysqlSslOutputReference(this, "ssl");
  public get ssl() {
    return this._ssl;
  }
  public putSsl(value: DatabaseMigrationServiceConnectionProfileMysqlSsl) {
    this._ssl.internalValue = value;
  }
  public resetSsl() {
    this._ssl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl.internalValue;
  }
}
export interface DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity {
  /**
  * Required. Hostname for the SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#hostname DatabaseMigrationServiceConnectionProfile#hostname}
  */
  readonly hostname: string;
  /**
  * Input only. SSH password. Only one of 'password' and 'private_key' can be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#password DatabaseMigrationServiceConnectionProfile#password}
  */
  readonly password?: string;
  /**
  * Port for the SSH tunnel, default value is 22.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#port DatabaseMigrationServiceConnectionProfile#port}
  */
  readonly port: number;
  /**
  * Input only. SSH private key. Only one of 'password' and 'private_key' can be configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#private_key DatabaseMigrationServiceConnectionProfile#private_key}
  */
  readonly privateKey?: string;
  /**
  * Required. Username for the SSH tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#username DatabaseMigrationServiceConnectionProfile#username}
  */
  readonly username: string;
}

export function databaseMigrationServiceConnectionProfileOracleForwardSshConnectivityToTerraform(struct?: DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference | DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._password = undefined;
      this._port = undefined;
      this._privateKey = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._password = value.password;
      this._port = value.port;
      this._privateKey = value.privateKey;
      this._username = value.username;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
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
export interface DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity {
  /**
  * Required. The resource name (URI) of the private connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#private_connection DatabaseMigrationServiceConnectionProfile#private_connection}
  */
  readonly privateConnection: string;
}

export function databaseMigrationServiceConnectionProfileOraclePrivateConnectivityToTerraform(struct?: DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference | DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    private_connection: cdktf.stringToTerraform(struct!.privateConnection),
  }
}

export class DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privateConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateConnection = this._privateConnection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privateConnection = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privateConnection = value.privateConnection;
    }
  }

  // private_connection - computed: false, optional: false, required: true
  private _privateConnection?: string; 
  public get privateConnection() {
    return this.getStringAttribute('private_connection');
  }
  public set privateConnection(value: string) {
    this._privateConnection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectionInput() {
    return this._privateConnection;
  }
}
export interface DatabaseMigrationServiceConnectionProfileOracleSsl {
  /**
  * Required. Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate.
  * The replica will use this certificate to verify it's connecting to the right host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#ca_certificate DatabaseMigrationServiceConnectionProfile#ca_certificate}
  */
  readonly caCertificate: string;
  /**
  * Input only. The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.
  * If this field is used then the 'clientKey' field is mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#client_certificate DatabaseMigrationServiceConnectionProfile#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Input only. The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate.
  * If this field is used then the 'clientCertificate' field is mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#client_key DatabaseMigrationServiceConnectionProfile#client_key}
  */
  readonly clientKey?: string;
}

export function databaseMigrationServiceConnectionProfileOracleSslToTerraform(struct?: DatabaseMigrationServiceConnectionProfileOracleSslOutputReference | DatabaseMigrationServiceConnectionProfileOracleSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
  }
}

export class DatabaseMigrationServiceConnectionProfileOracleSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceConnectionProfileOracleSsl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceConnectionProfileOracleSsl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
      this._clientCertificate = undefined;
      this._clientKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
      this._clientCertificate = value.clientCertificate;
      this._clientKey = value.clientKey;
    }
  }

  // ca_certificate - computed: false, optional: false, required: true
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity {
}

export function databaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityToTerraform(struct?: DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference | DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatabaseMigrationServiceConnectionProfileOracle {
  /**
  * Required. Database service for the Oracle connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#database_service DatabaseMigrationServiceConnectionProfile#database_service}
  */
  readonly databaseService: string;
  /**
  * Required. The IP or hostname of the source Oracle database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#host DatabaseMigrationServiceConnectionProfile#host}
  */
  readonly host: string;
  /**
  * Required. Input only. The password for the user that Database Migration Service will be using to connect to the database.
  * This field is not returned on request, and the value is encrypted when stored in Database Migration Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#password DatabaseMigrationServiceConnectionProfile#password}
  */
  readonly password: string;
  /**
  * Required. The network port of the source Oracle database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#port DatabaseMigrationServiceConnectionProfile#port}
  */
  readonly port: number;
  /**
  * Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#username DatabaseMigrationServiceConnectionProfile#username}
  */
  readonly username: string;
  /**
  * forward_ssh_connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#forward_ssh_connectivity DatabaseMigrationServiceConnectionProfile#forward_ssh_connectivity}
  */
  readonly forwardSshConnectivity?: DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity;
  /**
  * private_connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#private_connectivity DatabaseMigrationServiceConnectionProfile#private_connectivity}
  */
  readonly privateConnectivity?: DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity;
  /**
  * ssl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#ssl DatabaseMigrationServiceConnectionProfile#ssl}
  */
  readonly ssl?: DatabaseMigrationServiceConnectionProfileOracleSsl;
  /**
  * static_service_ip_connectivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#static_service_ip_connectivity DatabaseMigrationServiceConnectionProfile#static_service_ip_connectivity}
  */
  readonly staticServiceIpConnectivity?: DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity;
}

export function databaseMigrationServiceConnectionProfileOracleToTerraform(struct?: DatabaseMigrationServiceConnectionProfileOracleOutputReference | DatabaseMigrationServiceConnectionProfileOracle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_service: cdktf.stringToTerraform(struct!.databaseService),
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    username: cdktf.stringToTerraform(struct!.username),
    forward_ssh_connectivity: databaseMigrationServiceConnectionProfileOracleForwardSshConnectivityToTerraform(struct!.forwardSshConnectivity),
    private_connectivity: databaseMigrationServiceConnectionProfileOraclePrivateConnectivityToTerraform(struct!.privateConnectivity),
    ssl: databaseMigrationServiceConnectionProfileOracleSslToTerraform(struct!.ssl),
    static_service_ip_connectivity: databaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityToTerraform(struct!.staticServiceIpConnectivity),
  }
}

export class DatabaseMigrationServiceConnectionProfileOracleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceConnectionProfileOracle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseService !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseService = this._databaseService;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._forwardSshConnectivity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardSshConnectivity = this._forwardSshConnectivity?.internalValue;
    }
    if (this._privateConnectivity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateConnectivity = this._privateConnectivity?.internalValue;
    }
    if (this._ssl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl?.internalValue;
    }
    if (this._staticServiceIpConnectivity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticServiceIpConnectivity = this._staticServiceIpConnectivity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceConnectionProfileOracle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseService = undefined;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._username = undefined;
      this._forwardSshConnectivity.internalValue = undefined;
      this._privateConnectivity.internalValue = undefined;
      this._ssl.internalValue = undefined;
      this._staticServiceIpConnectivity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseService = value.databaseService;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._username = value.username;
      this._forwardSshConnectivity.internalValue = value.forwardSshConnectivity;
      this._privateConnectivity.internalValue = value.privateConnectivity;
      this._ssl.internalValue = value.ssl;
      this._staticServiceIpConnectivity.internalValue = value.staticServiceIpConnectivity;
    }
  }

  // database_service - computed: false, optional: false, required: true
  private _databaseService?: string; 
  public get databaseService() {
    return this.getStringAttribute('database_service');
  }
  public set databaseService(value: string) {
    this._databaseService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseServiceInput() {
    return this._databaseService;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // password_set - computed: true, optional: false, required: false
  public get passwordSet() {
    return this.getBooleanAttribute('password_set');
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // forward_ssh_connectivity - computed: false, optional: true, required: false
  private _forwardSshConnectivity = new DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivityOutputReference(this, "forward_ssh_connectivity");
  public get forwardSshConnectivity() {
    return this._forwardSshConnectivity;
  }
  public putForwardSshConnectivity(value: DatabaseMigrationServiceConnectionProfileOracleForwardSshConnectivity) {
    this._forwardSshConnectivity.internalValue = value;
  }
  public resetForwardSshConnectivity() {
    this._forwardSshConnectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardSshConnectivityInput() {
    return this._forwardSshConnectivity.internalValue;
  }

  // private_connectivity - computed: false, optional: true, required: false
  private _privateConnectivity = new DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivityOutputReference(this, "private_connectivity");
  public get privateConnectivity() {
    return this._privateConnectivity;
  }
  public putPrivateConnectivity(value: DatabaseMigrationServiceConnectionProfileOraclePrivateConnectivity) {
    this._privateConnectivity.internalValue = value;
  }
  public resetPrivateConnectivity() {
    this._privateConnectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateConnectivityInput() {
    return this._privateConnectivity.internalValue;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl = new DatabaseMigrationServiceConnectionProfileOracleSslOutputReference(this, "ssl");
  public get ssl() {
    return this._ssl;
  }
  public putSsl(value: DatabaseMigrationServiceConnectionProfileOracleSsl) {
    this._ssl.internalValue = value;
  }
  public resetSsl() {
    this._ssl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl.internalValue;
  }

  // static_service_ip_connectivity - computed: false, optional: true, required: false
  private _staticServiceIpConnectivity = new DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivityOutputReference(this, "static_service_ip_connectivity");
  public get staticServiceIpConnectivity() {
    return this._staticServiceIpConnectivity;
  }
  public putStaticServiceIpConnectivity(value: DatabaseMigrationServiceConnectionProfileOracleStaticServiceIpConnectivity) {
    this._staticServiceIpConnectivity.internalValue = value;
  }
  public resetStaticServiceIpConnectivity() {
    this._staticServiceIpConnectivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticServiceIpConnectivityInput() {
    return this._staticServiceIpConnectivity.internalValue;
  }
}
export interface DatabaseMigrationServiceConnectionProfilePostgresqlSsl {
  /**
  * Required. Input only. The x509 PEM-encoded certificate of the CA that signed the source database server's certificate.
  * The replica will use this certificate to verify it's connecting to the right host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#ca_certificate DatabaseMigrationServiceConnectionProfile#ca_certificate}
  */
  readonly caCertificate: string;
  /**
  * Input only. The x509 PEM-encoded certificate that will be used by the replica to authenticate against the source database server.
  * If this field is used then the 'clientKey' field is mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#client_certificate DatabaseMigrationServiceConnectionProfile#client_certificate}
  */
  readonly clientCertificate?: string;
  /**
  * Input only. The unencrypted PKCS#1 or PKCS#8 PEM-encoded private key associated with the Client Certificate.
  * If this field is used then the 'clientCertificate' field is mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#client_key DatabaseMigrationServiceConnectionProfile#client_key}
  */
  readonly clientKey?: string;
}

export function databaseMigrationServiceConnectionProfilePostgresqlSslToTerraform(struct?: DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference | DatabaseMigrationServiceConnectionProfilePostgresqlSsl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
    client_certificate: cdktf.stringToTerraform(struct!.clientCertificate),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
  }
}

export class DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceConnectionProfilePostgresqlSsl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    if (this._clientCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificate = this._clientCertificate;
    }
    if (this._clientKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKey = this._clientKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceConnectionProfilePostgresqlSsl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
      this._clientCertificate = undefined;
      this._clientKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
      this._clientCertificate = value.clientCertificate;
      this._clientKey = value.clientKey;
    }
  }

  // ca_certificate - computed: false, optional: false, required: true
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate?: string; 
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }
  public set clientCertificate(value: string) {
    this._clientCertificate = value;
  }
  public resetClientCertificate() {
    this._clientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate;
  }

  // client_key - computed: false, optional: true, required: false
  private _clientKey?: string; 
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }
  public set clientKey(value: string) {
    this._clientKey = value;
  }
  public resetClientKey() {
    this._clientKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeyInput() {
    return this._clientKey;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DatabaseMigrationServiceConnectionProfilePostgresql {
  /**
  * If the source is a Cloud SQL database, use this field to provide the Cloud SQL instance ID of the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#cloud_sql_id DatabaseMigrationServiceConnectionProfile#cloud_sql_id}
  */
  readonly cloudSqlId?: string;
  /**
  * Required. The IP or hostname of the source MySQL database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#host DatabaseMigrationServiceConnectionProfile#host}
  */
  readonly host: string;
  /**
  * Required. Input only. The password for the user that Database Migration Service will be using to connect to the database.
  * This field is not returned on request, and the value is encrypted when stored in Database Migration Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#password DatabaseMigrationServiceConnectionProfile#password}
  */
  readonly password: string;
  /**
  * Required. The network port of the source MySQL database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#port DatabaseMigrationServiceConnectionProfile#port}
  */
  readonly port: number;
  /**
  * Required. The username that Database Migration Service will use to connect to the database. The value is encrypted when stored in Database Migration Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#username DatabaseMigrationServiceConnectionProfile#username}
  */
  readonly username: string;
  /**
  * ssl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#ssl DatabaseMigrationServiceConnectionProfile#ssl}
  */
  readonly ssl?: DatabaseMigrationServiceConnectionProfilePostgresqlSsl;
}

export function databaseMigrationServiceConnectionProfilePostgresqlToTerraform(struct?: DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference | DatabaseMigrationServiceConnectionProfilePostgresql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_sql_id: cdktf.stringToTerraform(struct!.cloudSqlId),
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    username: cdktf.stringToTerraform(struct!.username),
    ssl: databaseMigrationServiceConnectionProfilePostgresqlSslToTerraform(struct!.ssl),
  }
}

export class DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseMigrationServiceConnectionProfilePostgresql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudSqlId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudSqlId = this._cloudSqlId;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._ssl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseMigrationServiceConnectionProfilePostgresql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudSqlId = undefined;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._username = undefined;
      this._ssl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudSqlId = value.cloudSqlId;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._username = value.username;
      this._ssl.internalValue = value.ssl;
    }
  }

  // cloud_sql_id - computed: false, optional: true, required: false
  private _cloudSqlId?: string; 
  public get cloudSqlId() {
    return this.getStringAttribute('cloud_sql_id');
  }
  public set cloudSqlId(value: string) {
    this._cloudSqlId = value;
  }
  public resetCloudSqlId() {
    this._cloudSqlId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSqlIdInput() {
    return this._cloudSqlId;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // network_architecture - computed: true, optional: false, required: false
  public get networkArchitecture() {
    return this.getStringAttribute('network_architecture');
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

  // password_set - computed: true, optional: false, required: false
  public get passwordSet() {
    return this.getBooleanAttribute('password_set');
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // ssl - computed: false, optional: true, required: false
  private _ssl = new DatabaseMigrationServiceConnectionProfilePostgresqlSslOutputReference(this, "ssl");
  public get ssl() {
    return this._ssl;
  }
  public putSsl(value: DatabaseMigrationServiceConnectionProfilePostgresqlSsl) {
    this._ssl.internalValue = value;
  }
  public resetSsl() {
    this._ssl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl.internalValue;
  }
}
export interface DatabaseMigrationServiceConnectionProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#create DatabaseMigrationServiceConnectionProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#delete DatabaseMigrationServiceConnectionProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile#update DatabaseMigrationServiceConnectionProfile#update}
  */
  readonly update?: string;
}

export function databaseMigrationServiceConnectionProfileTimeoutsToTerraform(struct?: DatabaseMigrationServiceConnectionProfileTimeouts | cdktf.IResolvable): any {
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

export class DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseMigrationServiceConnectionProfileTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseMigrationServiceConnectionProfileTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile google_database_migration_service_connection_profile}
*/
export class DatabaseMigrationServiceConnectionProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_database_migration_service_connection_profile";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.1.0/docs/resources/database_migration_service_connection_profile google_database_migration_service_connection_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseMigrationServiceConnectionProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseMigrationServiceConnectionProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'google_database_migration_service_connection_profile',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.1.0',
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
    this._connectionProfileId = config.connectionProfileId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._alloydb.internalValue = config.alloydb;
    this._cloudsql.internalValue = config.cloudsql;
    this._mysql.internalValue = config.mysql;
    this._oracle.internalValue = config.oracle;
    this._postgresql.internalValue = config.postgresql;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_profile_id - computed: false, optional: false, required: true
  private _connectionProfileId?: string; 
  public get connectionProfileId() {
    return this.getStringAttribute('connection_profile_id');
  }
  public set connectionProfileId(value: string) {
    this._connectionProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionProfileIdInput() {
    return this._connectionProfileId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // dbprovider - computed: true, optional: false, required: false
  public get dbprovider() {
    return this.getStringAttribute('dbprovider');
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // error - computed: true, optional: false, required: false
  private _error = new DatabaseMigrationServiceConnectionProfileErrorList(this, "error", false);
  public get error() {
    return this._error;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // alloydb - computed: false, optional: true, required: false
  private _alloydb = new DatabaseMigrationServiceConnectionProfileAlloydbOutputReference(this, "alloydb");
  public get alloydb() {
    return this._alloydb;
  }
  public putAlloydb(value: DatabaseMigrationServiceConnectionProfileAlloydb) {
    this._alloydb.internalValue = value;
  }
  public resetAlloydb() {
    this._alloydb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alloydbInput() {
    return this._alloydb.internalValue;
  }

  // cloudsql - computed: false, optional: true, required: false
  private _cloudsql = new DatabaseMigrationServiceConnectionProfileCloudsqlOutputReference(this, "cloudsql");
  public get cloudsql() {
    return this._cloudsql;
  }
  public putCloudsql(value: DatabaseMigrationServiceConnectionProfileCloudsql) {
    this._cloudsql.internalValue = value;
  }
  public resetCloudsql() {
    this._cloudsql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudsqlInput() {
    return this._cloudsql.internalValue;
  }

  // mysql - computed: false, optional: true, required: false
  private _mysql = new DatabaseMigrationServiceConnectionProfileMysqlOutputReference(this, "mysql");
  public get mysql() {
    return this._mysql;
  }
  public putMysql(value: DatabaseMigrationServiceConnectionProfileMysql) {
    this._mysql.internalValue = value;
  }
  public resetMysql() {
    this._mysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql.internalValue;
  }

  // oracle - computed: false, optional: true, required: false
  private _oracle = new DatabaseMigrationServiceConnectionProfileOracleOutputReference(this, "oracle");
  public get oracle() {
    return this._oracle;
  }
  public putOracle(value: DatabaseMigrationServiceConnectionProfileOracle) {
    this._oracle.internalValue = value;
  }
  public resetOracle() {
    this._oracle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleInput() {
    return this._oracle.internalValue;
  }

  // postgresql - computed: false, optional: true, required: false
  private _postgresql = new DatabaseMigrationServiceConnectionProfilePostgresqlOutputReference(this, "postgresql");
  public get postgresql() {
    return this._postgresql;
  }
  public putPostgresql(value: DatabaseMigrationServiceConnectionProfilePostgresql) {
    this._postgresql.internalValue = value;
  }
  public resetPostgresql() {
    this._postgresql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlInput() {
    return this._postgresql.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseMigrationServiceConnectionProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseMigrationServiceConnectionProfileTimeouts) {
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
      connection_profile_id: cdktf.stringToTerraform(this._connectionProfileId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      alloydb: databaseMigrationServiceConnectionProfileAlloydbToTerraform(this._alloydb.internalValue),
      cloudsql: databaseMigrationServiceConnectionProfileCloudsqlToTerraform(this._cloudsql.internalValue),
      mysql: databaseMigrationServiceConnectionProfileMysqlToTerraform(this._mysql.internalValue),
      oracle: databaseMigrationServiceConnectionProfileOracleToTerraform(this._oracle.internalValue),
      postgresql: databaseMigrationServiceConnectionProfilePostgresqlToTerraform(this._postgresql.internalValue),
      timeouts: databaseMigrationServiceConnectionProfileTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
