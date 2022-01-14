// https://www.terraform.io/docs/providers/google/d/sql_backup_run
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleSqlBackupRunConfig extends cdktf.TerraformMetaArguments {
  /**
  * The identifier for this backup run. Unique only for a specific Cloud SQL instance. If left empty and multiple backups exist for the instance, most_recent must be set to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/sql_backup_run#backup_id DataGoogleSqlBackupRun#backup_id}
  */
  readonly backupId?: number;
  /**
  * Name of the database instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/sql_backup_run#instance DataGoogleSqlBackupRun#instance}
  */
  readonly instance: string;
  /**
  * Toggles use of the most recent backup run if multiple backups exist for a Cloud SQL instance.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/sql_backup_run#most_recent DataGoogleSqlBackupRun#most_recent}
  */
  readonly mostRecent?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/sql_backup_run google_sql_backup_run}
*/
export class DataGoogleSqlBackupRun extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_sql_backup_run";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/sql_backup_run google_sql_backup_run} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleSqlBackupRunConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleSqlBackupRunConfig) {
    super(scope, id, {
      terraformResourceType: 'google_sql_backup_run',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._backupId = config.backupId;
    this._instance = config.instance;
    this._mostRecent = config.mostRecent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_id - computed: true, optional: true, required: false
  private _backupId?: number; 
  public get backupId() {
    return this.getNumberAttribute('backup_id');
  }
  public set backupId(value: number) {
    this._backupId = value;
  }
  public resetBackupId() {
    this._backupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupIdInput() {
    return this._backupId;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // most_recent - computed: false, optional: true, required: false
  private _mostRecent?: boolean | cdktf.IResolvable; 
  public get mostRecent() {
    return this.getBooleanAttribute('most_recent') as any;
  }
  public set mostRecent(value: boolean | cdktf.IResolvable) {
    this._mostRecent = value;
  }
  public resetMostRecent() {
    this._mostRecent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mostRecentInput() {
    return this._mostRecent;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backup_id: cdktf.numberToTerraform(this._backupId),
      instance: cdktf.stringToTerraform(this._instance),
      most_recent: cdktf.booleanToTerraform(this._mostRecent),
    };
  }
}
