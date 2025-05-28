/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/spanner_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SpannerDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * The dialect of the Cloud Spanner Database.
  * If it is not provided, "GOOGLE_STANDARD_SQL" will be used. Possible values: ["GOOGLE_STANDARD_SQL", "POSTGRESQL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/spanner_database#database_dialect SpannerDatabase#database_dialect}
  */
  readonly databaseDialect?: string;
  /**
  * An optional list of DDL statements to run inside the database. Statements can create
  * tables, indexes, etc.
  * 
  * During creation these statements execute atomically with the creation of the database
  * and if there is an error in any statement, the database is not created.
  * 
  * Terraform does not perform drift detection on this field and assumes that the values
  * recorded in state are accurate. Limited updates to this field are supported, and
  * newly appended DDL statements can be executed in an update. However, modifications
  * to prior statements will create a plan that marks the resource for recreation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/spanner_database#ddl SpannerDatabase#ddl}
  */
  readonly ddl?: string[];
  /**
  * The default time zone for the database. The default time zone must be a valid name
  * from the tz database. Default value is "America/Los_angeles".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/spanner_database#default_time_zone SpannerDatabase#default_time_zone}
  */
  readonly defaultTimeZone?: string;
  /**
  * Whether Terraform will be prevented from destroying the database. Defaults to true.
  * When a'terraform destroy' or 'terraform apply' would delete the database,
  * the command will fail if this field is not set to false in Terraform state.
  * When the field is set to true or unset in Terraform state, a 'terraform apply'
  * or 'terraform destroy' that would delete the database will fail.
  * When the field is set to false, deleting the database is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/spanner_database#deletion_protection SpannerDatabase#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Whether drop protection is enabled for this database. Defaults to false.
  * Drop protection is different from
  * the "deletion_protection" attribute in the following ways:
  * (1) "deletion_protection" only protects the database from deletions in Terraform.
  * whereas setting “enableDropProtection” to true protects the database from deletions in all interfaces.
  * (2) Setting "enableDropProtection" to true also prevents the deletion of the parent instance containing the database.
  * "deletion_protection" attribute does not provide protection against the deletion of the parent instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/spanner_database#enable_drop_protection SpannerDatabase#enable_drop_protection}
  */
  readonly enableDropProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/spanner_database#id SpannerDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The instance to create the database on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/spanner_database#instance SpannerDatabase#instance}
  */
  readonly instance: string;
  /**
  * A unique identifier for the database, which cannot be changed after the
  * instance is created. Values are of the form '[a-z][-_a-z0-9]*[a-z0-9]'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/spanner_database#name SpannerDatabase#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/spanner_database#project SpannerDatabase#project}
  */
  readonly project?: string;
  /**
  * The retention period for the database. The retention period must be between 1 hour
  * and 7 days, and can be specified in days, hours, minutes, or seconds. For example,
  * the values 1d, 24h, 1440m, and 86400s are equivalent. Default value is 1h.
  * If this property is used, you must avoid adding new DDL statements to 'ddl' that
  * update the database's version_retention_period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/spanner_database#version_retention_period SpannerDatabase#version_retention_period}
  */
  readonly versionRetentionPeriod?: string;
  /**
  * encryption_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/spanner_database#encryption_config SpannerDatabase#encryption_config}
  */
  readonly encryptionConfig?: SpannerDatabaseEncryptionConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/spanner_database#timeouts SpannerDatabase#timeouts}
  */
  readonly timeouts?: SpannerDatabaseTimeouts;
}
export interface SpannerDatabaseEncryptionConfig {
  /**
  * Fully qualified name of the KMS key to use to encrypt this database. This key must exist
  * in the same location as the Spanner Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/spanner_database#kms_key_name SpannerDatabase#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * Fully qualified name of the KMS keys to use to encrypt this database. The keys must exist
  * in the same locations as the Spanner Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/spanner_database#kms_key_names SpannerDatabase#kms_key_names}
  */
  readonly kmsKeyNames?: string[];
}

export function spannerDatabaseEncryptionConfigToTerraform(struct?: SpannerDatabaseEncryptionConfigOutputReference | SpannerDatabaseEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
    kms_key_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.kmsKeyNames),
  }
}


export function spannerDatabaseEncryptionConfigToHclTerraform(struct?: SpannerDatabaseEncryptionConfigOutputReference | SpannerDatabaseEncryptionConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.kmsKeyNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpannerDatabaseEncryptionConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SpannerDatabaseEncryptionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._kmsKeyNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyNames = this._kmsKeyNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpannerDatabaseEncryptionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
      this._kmsKeyNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
      this._kmsKeyNames = value.kmsKeyNames;
    }
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

  // kms_key_names - computed: false, optional: true, required: false
  private _kmsKeyNames?: string[]; 
  public get kmsKeyNames() {
    return this.getListAttribute('kms_key_names');
  }
  public set kmsKeyNames(value: string[]) {
    this._kmsKeyNames = value;
  }
  public resetKmsKeyNames() {
    this._kmsKeyNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNamesInput() {
    return this._kmsKeyNames;
  }
}
export interface SpannerDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/spanner_database#create SpannerDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/spanner_database#delete SpannerDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/spanner_database#update SpannerDatabase#update}
  */
  readonly update?: string;
}

export function spannerDatabaseTimeoutsToTerraform(struct?: SpannerDatabaseTimeouts | cdktf.IResolvable): any {
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


export function spannerDatabaseTimeoutsToHclTerraform(struct?: SpannerDatabaseTimeouts | cdktf.IResolvable): any {
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

export class SpannerDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpannerDatabaseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SpannerDatabaseTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/spanner_database google_spanner_database}
*/
export class SpannerDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_spanner_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SpannerDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SpannerDatabase to import
  * @param importFromId The id of the existing SpannerDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/spanner_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SpannerDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_spanner_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.37.0/docs/resources/spanner_database google_spanner_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SpannerDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: SpannerDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'google_spanner_database',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.37.0',
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
    this._databaseDialect = config.databaseDialect;
    this._ddl = config.ddl;
    this._defaultTimeZone = config.defaultTimeZone;
    this._deletionProtection = config.deletionProtection;
    this._enableDropProtection = config.enableDropProtection;
    this._id = config.id;
    this._instance = config.instance;
    this._name = config.name;
    this._project = config.project;
    this._versionRetentionPeriod = config.versionRetentionPeriod;
    this._encryptionConfig.internalValue = config.encryptionConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_dialect - computed: true, optional: true, required: false
  private _databaseDialect?: string; 
  public get databaseDialect() {
    return this.getStringAttribute('database_dialect');
  }
  public set databaseDialect(value: string) {
    this._databaseDialect = value;
  }
  public resetDatabaseDialect() {
    this._databaseDialect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseDialectInput() {
    return this._databaseDialect;
  }

  // ddl - computed: false, optional: true, required: false
  private _ddl?: string[]; 
  public get ddl() {
    return this.getListAttribute('ddl');
  }
  public set ddl(value: string[]) {
    this._ddl = value;
  }
  public resetDdl() {
    this._ddl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddlInput() {
    return this._ddl;
  }

  // default_time_zone - computed: false, optional: true, required: false
  private _defaultTimeZone?: string; 
  public get defaultTimeZone() {
    return this.getStringAttribute('default_time_zone');
  }
  public set defaultTimeZone(value: string) {
    this._defaultTimeZone = value;
  }
  public resetDefaultTimeZone() {
    this._defaultTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTimeZoneInput() {
    return this._defaultTimeZone;
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

  // enable_drop_protection - computed: false, optional: true, required: false
  private _enableDropProtection?: boolean | cdktf.IResolvable; 
  public get enableDropProtection() {
    return this.getBooleanAttribute('enable_drop_protection');
  }
  public set enableDropProtection(value: boolean | cdktf.IResolvable) {
    this._enableDropProtection = value;
  }
  public resetEnableDropProtection() {
    this._enableDropProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDropProtectionInput() {
    return this._enableDropProtection;
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

  // version_retention_period - computed: true, optional: true, required: false
  private _versionRetentionPeriod?: string; 
  public get versionRetentionPeriod() {
    return this.getStringAttribute('version_retention_period');
  }
  public set versionRetentionPeriod(value: string) {
    this._versionRetentionPeriod = value;
  }
  public resetVersionRetentionPeriod() {
    this._versionRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionRetentionPeriodInput() {
    return this._versionRetentionPeriod;
  }

  // encryption_config - computed: false, optional: true, required: false
  private _encryptionConfig = new SpannerDatabaseEncryptionConfigOutputReference(this, "encryption_config");
  public get encryptionConfig() {
    return this._encryptionConfig;
  }
  public putEncryptionConfig(value: SpannerDatabaseEncryptionConfig) {
    this._encryptionConfig.internalValue = value;
  }
  public resetEncryptionConfig() {
    this._encryptionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigInput() {
    return this._encryptionConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SpannerDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SpannerDatabaseTimeouts) {
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
      database_dialect: cdktf.stringToTerraform(this._databaseDialect),
      ddl: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ddl),
      default_time_zone: cdktf.stringToTerraform(this._defaultTimeZone),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      enable_drop_protection: cdktf.booleanToTerraform(this._enableDropProtection),
      id: cdktf.stringToTerraform(this._id),
      instance: cdktf.stringToTerraform(this._instance),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      version_retention_period: cdktf.stringToTerraform(this._versionRetentionPeriod),
      encryption_config: spannerDatabaseEncryptionConfigToTerraform(this._encryptionConfig.internalValue),
      timeouts: spannerDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_dialect: {
        value: cdktf.stringToHclTerraform(this._databaseDialect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddl: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ddl),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_time_zone: {
        value: cdktf.stringToHclTerraform(this._defaultTimeZone),
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
      enable_drop_protection: {
        value: cdktf.booleanToHclTerraform(this._enableDropProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance: {
        value: cdktf.stringToHclTerraform(this._instance),
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
      version_retention_period: {
        value: cdktf.stringToHclTerraform(this._versionRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_config: {
        value: spannerDatabaseEncryptionConfigToHclTerraform(this._encryptionConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SpannerDatabaseEncryptionConfigList",
      },
      timeouts: {
        value: spannerDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SpannerDatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
