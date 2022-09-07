// https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoggingProjectBucketConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#bucket_id LoggingProjectBucketConfig#bucket_id}
  */
  readonly bucketId: string;
  /**
  * An optional description for this bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#description LoggingProjectBucketConfig#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#id LoggingProjectBucketConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#location LoggingProjectBucketConfig#location}
  */
  readonly location: string;
  /**
  * The parent project that contains the logging bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#project LoggingProjectBucketConfig#project}
  */
  readonly project: string;
  /**
  * Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config#retention_days LoggingProjectBucketConfig#retention_days}
  */
  readonly retentionDays?: number;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config google_logging_project_bucket_config}
*/
export class LoggingProjectBucketConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_logging_project_bucket_config";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/logging_project_bucket_config google_logging_project_bucket_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoggingProjectBucketConfigConfig
  */
  public constructor(scope: Construct, id: string, config: LoggingProjectBucketConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_logging_project_bucket_config',
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
    this._bucketId = config.bucketId;
    this._description = config.description;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._retentionDays = config.retentionDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_id - computed: false, optional: false, required: true
  private _bucketId?: string; 
  public get bucketId() {
    return this.getStringAttribute('bucket_id');
  }
  public set bucketId(value: string) {
    this._bucketId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketIdInput() {
    return this._bucketId;
  }

  // description - computed: true, optional: true, required: false
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

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
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

  // retention_days - computed: false, optional: true, required: false
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_id: cdktf.stringToTerraform(this._bucketId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      retention_days: cdktf.numberToTerraform(this._retentionDays),
    };
  }
}
