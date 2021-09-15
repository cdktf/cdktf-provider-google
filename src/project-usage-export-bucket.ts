// https://www.terraform.io/docs/providers/google/r/project_usage_export_bucket.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectUsageExportBucketConfig extends cdktf.TerraformMetaArguments {
  /**
  * The bucket to store reports in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_usage_export_bucket.html#bucket_name ProjectUsageExportBucket#bucket_name}
  */
  readonly bucketName: string;
  /**
  * A prefix for the reports, for instance, the project name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_usage_export_bucket.html#prefix ProjectUsageExportBucket#prefix}
  */
  readonly prefix?: string;
  /**
  * The project to set the export bucket on. If it is not provided, the provider project is used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_usage_export_bucket.html#project ProjectUsageExportBucket#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_usage_export_bucket.html#timeouts ProjectUsageExportBucket#timeouts}
  */
  readonly timeouts?: ProjectUsageExportBucketTimeouts;
}
export interface ProjectUsageExportBucketTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_usage_export_bucket.html#create ProjectUsageExportBucket#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_usage_export_bucket.html#delete ProjectUsageExportBucket#delete}
  */
  readonly delete?: string;
}

function projectUsageExportBucketTimeoutsToTerraform(struct?: ProjectUsageExportBucketTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/project_usage_export_bucket.html google_project_usage_export_bucket}
*/
export class ProjectUsageExportBucket extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_project_usage_export_bucket";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/project_usage_export_bucket.html google_project_usage_export_bucket} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectUsageExportBucketConfig
  */
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
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string;
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string ) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix
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
    return this._project
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ProjectUsageExportBucketTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ProjectUsageExportBucketTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_name: cdktf.stringToTerraform(this._bucketName),
      prefix: cdktf.stringToTerraform(this._prefix),
      project: cdktf.stringToTerraform(this._project),
      timeouts: projectUsageExportBucketTimeoutsToTerraform(this._timeouts),
    };
  }
}
