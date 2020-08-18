// https://www.terraform.io/docs/providers/google/r/project_usage_export_bucket.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ProjectUsageExportBucketConfig extends TerraformMetaArguments {
  /** The bucket to store reports in. */
  readonly bucketName: string;
  /** A prefix for the reports, for instance, the project name. */
  readonly prefix?: string;
  /** The project to set the export bucket on. If it is not provided, the provider project is used. */
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: ProjectUsageExportBucketTimeouts;
}
export interface ProjectUsageExportBucketTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class ProjectUsageExportBucket extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ProjectUsageExportBucketConfig) {
    super(scope, id, {
      terraformResourceType: 'google_project_usage_export_bucket',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._bucketName = config.bucketName;
    this._prefix = config.prefix;
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName: string;
  public get bucketName() {
    return this._bucketName;
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string;
  public get prefix() {
    return this._prefix;
  }
  public set prefix(value: string | undefined) {
    this._prefix = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ProjectUsageExportBucketTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ProjectUsageExportBucketTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_name: this._bucketName,
      prefix: this._prefix,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
