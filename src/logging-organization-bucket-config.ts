// https://www.terraform.io/docs/providers/google/r/logging_organization_bucket_config.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface LoggingOrganizationBucketConfigConfig extends TerraformMetaArguments {
  /** The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default. */
  readonly bucketId: string;
  /** An optional description for this bucket. */
  readonly description?: string;
  /** The location of the bucket. The supported locations are: "global" "us-central1" */
  readonly location: string;
  /** The parent resource that contains the logging bucket. */
  readonly organization: string;
  /** Logs will be retained by default for this amount of time, after which they will automatically be deleted. The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used. */
  readonly retentionDays?: number;
}

// Resource

export class LoggingOrganizationBucketConfig extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: LoggingOrganizationBucketConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_logging_organization_bucket_config',
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
    this._location = config.location;
    this._organization = config.organization;
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

  // organization - computed: false, optional: false, required: true
  private _organization: string;
  public get organization() {
    return this._organization;
  }
  public set organization(value: string) {
    this._organization = value;
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
      location: this._location,
      organization: this._organization,
      retention_days: this._retentionDays,
    };
  }
}
