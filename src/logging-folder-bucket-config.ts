// https://www.terraform.io/docs/providers/google/r/logging_folder_bucket_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LoggingFolderBucketConfigConfig extends TerraformMetaArguments {
  /** The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default. */
  readonly bucketId: string;
  /** An optional description for this bucket. */
  readonly description?: string;
  /** The parent resource that contains the logging bucket. */
  readonly folder: string;
  /** The location of the bucket. The supported locations are: "global" "us-central1" */
  readonly location: string;
  /** Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used. */
  readonly retentionDays?: number;
}

// Resource

export class LoggingFolderBucketConfig extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LoggingFolderBucketConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_logging_folder_bucket_config',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucketId = config.bucketId;
    this._description = config.description;
    this._folder = config.folder;
    this._location = config.location;
    this._retentionDays = config.retentionDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_id - computed: false, optional: false, required: true
  private _bucketId: string;
  public get bucketId() {
    return this._bucketId;
  }
  public set bucketId(value: string) {
    this._bucketId = value;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description ?? this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // folder - computed: false, optional: false, required: true
  private _folder: string;
  public get folder() {
    return this._folder;
  }
  public set folder(value: string) {
    this._folder = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // lifecycle_state - computed: true, optional: false, required: true
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // location - computed: false, optional: false, required: true
  private _location: string;
  public get location() {
    return this._location;
  }
  public set location(value: string) {
    this._location = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // retention_days - computed: false, optional: true, required: false
  private _retentionDays?: number;
  public get retentionDays() {
    return this._retentionDays;
  }
  public set retentionDays(value: number | undefined) {
    this._retentionDays = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_id: this._bucketId,
      description: this._description,
      folder: this._folder,
      location: this._location,
      retention_days: this._retentionDays,
    };
  }
}
