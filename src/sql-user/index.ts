// https://www.terraform.io/docs/providers/google/r/sql_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SqlUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The deletion policy for the user. Setting ABANDON allows the resource
				to be abandoned rather than deleted. This is useful for Postgres, where users cannot be deleted from the API if they
				have been granted SQL roles. Possible values are: "ABANDON".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#deletion_policy SqlUser#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The host the user can connect from. This is only supported for MySQL instances. Don't set this field for PostgreSQL instances. Can be an IP address. Changing this forces a new resource to be created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#host SqlUser#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#id SqlUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Cloud SQL instance. Changing this forces a new resource to be created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#instance SqlUser#instance}
  */
  readonly instance: string;
  /**
  * The name of the user. Changing this forces a new resource to be created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#name SqlUser#name}
  */
  readonly name: string;
  /**
  * The password for the user. Can be updated. For Postgres instances this is a Required field, unless type is set to
                either CLOUD_IAM_USER or CLOUD_IAM_SERVICE_ACCOUNT.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#password SqlUser#password}
  */
  readonly password?: string;
  /**
  * The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#project SqlUser#project}
  */
  readonly project?: string;
  /**
  * The user type. It determines the method to authenticate the user during login.
                The default is the database's built-in user type. Flags include "BUILT_IN", "CLOUD_IAM_USER", or "CLOUD_IAM_SERVICE_ACCOUNT".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#type SqlUser#type}
  */
  readonly type?: string;
  /**
  * password_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#password_policy SqlUser#password_policy}
  */
  readonly passwordPolicy?: SqlUserPasswordPolicy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#timeouts SqlUser#timeouts}
  */
  readonly timeouts?: SqlUserTimeouts;
}
export interface SqlUserSqlServerUserDetails {
}

export function sqlUserSqlServerUserDetailsToTerraform(struct?: SqlUserSqlServerUserDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class SqlUserSqlServerUserDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SqlUserSqlServerUserDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlUserSqlServerUserDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // server_roles - computed: true, optional: false, required: false
  public get serverRoles() {
    return this.getListAttribute('server_roles');
  }
}

export class SqlUserSqlServerUserDetailsList extends cdktf.ComplexList {

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
  public get(index: number): SqlUserSqlServerUserDetailsOutputReference {
    return new SqlUserSqlServerUserDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SqlUserPasswordPolicyStatus {
}

export function sqlUserPasswordPolicyStatusToTerraform(struct?: SqlUserPasswordPolicyStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class SqlUserPasswordPolicyStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SqlUserPasswordPolicyStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlUserPasswordPolicyStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // locked - computed: true, optional: false, required: false
  public get locked() {
    return this.getBooleanAttribute('locked');
  }

  // password_expiration_time - computed: true, optional: false, required: false
  public get passwordExpirationTime() {
    return this.getStringAttribute('password_expiration_time');
  }
}

export class SqlUserPasswordPolicyStatusList extends cdktf.ComplexList {

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
  public get(index: number): SqlUserPasswordPolicyStatusOutputReference {
    return new SqlUserPasswordPolicyStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SqlUserPasswordPolicy {
  /**
  * Number of failed attempts allowed before the user get locked.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#allowed_failed_attempts SqlUser#allowed_failed_attempts}
  */
  readonly allowedFailedAttempts?: number;
  /**
  * If true, the check that will lock user after too many failed login attempts will be enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#enable_failed_attempts_check SqlUser#enable_failed_attempts_check}
  */
  readonly enableFailedAttemptsCheck?: boolean | cdktf.IResolvable;
  /**
  * If true, the user must specify the current password before changing the password. This flag is supported only for MySQL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#enable_password_verification SqlUser#enable_password_verification}
  */
  readonly enablePasswordVerification?: boolean | cdktf.IResolvable;
  /**
  * Password expiration duration with one week grace period.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#password_expiration_duration SqlUser#password_expiration_duration}
  */
  readonly passwordExpirationDuration?: string;
}

export function sqlUserPasswordPolicyToTerraform(struct?: SqlUserPasswordPolicyOutputReference | SqlUserPasswordPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_failed_attempts: cdktf.numberToTerraform(struct!.allowedFailedAttempts),
    enable_failed_attempts_check: cdktf.booleanToTerraform(struct!.enableFailedAttemptsCheck),
    enable_password_verification: cdktf.booleanToTerraform(struct!.enablePasswordVerification),
    password_expiration_duration: cdktf.stringToTerraform(struct!.passwordExpirationDuration),
  }
}

export class SqlUserPasswordPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlUserPasswordPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedFailedAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedFailedAttempts = this._allowedFailedAttempts;
    }
    if (this._enableFailedAttemptsCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFailedAttemptsCheck = this._enableFailedAttemptsCheck;
    }
    if (this._enablePasswordVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePasswordVerification = this._enablePasswordVerification;
    }
    if (this._passwordExpirationDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordExpirationDuration = this._passwordExpirationDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SqlUserPasswordPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedFailedAttempts = undefined;
      this._enableFailedAttemptsCheck = undefined;
      this._enablePasswordVerification = undefined;
      this._passwordExpirationDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedFailedAttempts = value.allowedFailedAttempts;
      this._enableFailedAttemptsCheck = value.enableFailedAttemptsCheck;
      this._enablePasswordVerification = value.enablePasswordVerification;
      this._passwordExpirationDuration = value.passwordExpirationDuration;
    }
  }

  // allowed_failed_attempts - computed: false, optional: true, required: false
  private _allowedFailedAttempts?: number; 
  public get allowedFailedAttempts() {
    return this.getNumberAttribute('allowed_failed_attempts');
  }
  public set allowedFailedAttempts(value: number) {
    this._allowedFailedAttempts = value;
  }
  public resetAllowedFailedAttempts() {
    this._allowedFailedAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedFailedAttemptsInput() {
    return this._allowedFailedAttempts;
  }

  // enable_failed_attempts_check - computed: false, optional: true, required: false
  private _enableFailedAttemptsCheck?: boolean | cdktf.IResolvable; 
  public get enableFailedAttemptsCheck() {
    return this.getBooleanAttribute('enable_failed_attempts_check');
  }
  public set enableFailedAttemptsCheck(value: boolean | cdktf.IResolvable) {
    this._enableFailedAttemptsCheck = value;
  }
  public resetEnableFailedAttemptsCheck() {
    this._enableFailedAttemptsCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFailedAttemptsCheckInput() {
    return this._enableFailedAttemptsCheck;
  }

  // enable_password_verification - computed: false, optional: true, required: false
  private _enablePasswordVerification?: boolean | cdktf.IResolvable; 
  public get enablePasswordVerification() {
    return this.getBooleanAttribute('enable_password_verification');
  }
  public set enablePasswordVerification(value: boolean | cdktf.IResolvable) {
    this._enablePasswordVerification = value;
  }
  public resetEnablePasswordVerification() {
    this._enablePasswordVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePasswordVerificationInput() {
    return this._enablePasswordVerification;
  }

  // password_expiration_duration - computed: false, optional: true, required: false
  private _passwordExpirationDuration?: string; 
  public get passwordExpirationDuration() {
    return this.getStringAttribute('password_expiration_duration');
  }
  public set passwordExpirationDuration(value: string) {
    this._passwordExpirationDuration = value;
  }
  public resetPasswordExpirationDuration() {
    this._passwordExpirationDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordExpirationDurationInput() {
    return this._passwordExpirationDuration;
  }

  // status - computed: true, optional: false, required: false
  private _status = new SqlUserPasswordPolicyStatusList(this, "status", false);
  public get status() {
    return this._status;
  }
}
export interface SqlUserTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#create SqlUser#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#delete SqlUser#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/sql_user#update SqlUser#update}
  */
  readonly update?: string;
}

export function sqlUserTimeoutsToTerraform(struct?: SqlUserTimeoutsOutputReference | SqlUserTimeouts | cdktf.IResolvable): any {
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

export class SqlUserTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SqlUserTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SqlUserTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/sql_user google_sql_user}
*/
export class SqlUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_sql_user";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/sql_user google_sql_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SqlUserConfig
  */
  public constructor(scope: Construct, id: string, config: SqlUserConfig) {
    super(scope, id, {
      terraformResourceType: 'google_sql_user',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.41.0',
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
    this._deletionPolicy = config.deletionPolicy;
    this._host = config.host;
    this._id = config.id;
    this._instance = config.instance;
    this._name = config.name;
    this._password = config.password;
    this._project = config.project;
    this._type = config.type;
    this._passwordPolicy.internalValue = config.passwordPolicy;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
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

  // sql_server_user_details - computed: true, optional: false, required: false
  private _sqlServerUserDetails = new SqlUserSqlServerUserDetailsList(this, "sql_server_user_details", false);
  public get sqlServerUserDetails() {
    return this._sqlServerUserDetails;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // password_policy - computed: false, optional: true, required: false
  private _passwordPolicy = new SqlUserPasswordPolicyOutputReference(this, "password_policy");
  public get passwordPolicy() {
    return this._passwordPolicy;
  }
  public putPasswordPolicy(value: SqlUserPasswordPolicy) {
    this._passwordPolicy.internalValue = value;
  }
  public resetPasswordPolicy() {
    this._passwordPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyInput() {
    return this._passwordPolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SqlUserTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SqlUserTimeouts) {
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
      deletion_policy: cdktf.stringToTerraform(this._deletionPolicy),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      instance: cdktf.stringToTerraform(this._instance),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      project: cdktf.stringToTerraform(this._project),
      type: cdktf.stringToTerraform(this._type),
      password_policy: sqlUserPasswordPolicyToTerraform(this._passwordPolicy.internalValue),
      timeouts: sqlUserTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
