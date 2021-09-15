// https://www.terraform.io/docs/providers/google/r/dataproc_cluster_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataprocClusterIamBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster_iam_binding.html#cluster DataprocClusterIamBinding#cluster}
  */
  readonly cluster: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster_iam_binding.html#members DataprocClusterIamBinding#members}
  */
  readonly members: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster_iam_binding.html#project DataprocClusterIamBinding#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster_iam_binding.html#region DataprocClusterIamBinding#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster_iam_binding.html#role DataprocClusterIamBinding#role}
  */
  readonly role: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster_iam_binding.html#condition DataprocClusterIamBinding#condition}
  */
  readonly condition?: DataprocClusterIamBindingCondition[];
}
export interface DataprocClusterIamBindingCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster_iam_binding.html#description DataprocClusterIamBinding#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster_iam_binding.html#expression DataprocClusterIamBinding#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster_iam_binding.html#title DataprocClusterIamBinding#title}
  */
  readonly title: string;
}

function dataprocClusterIamBindingConditionToTerraform(struct?: DataprocClusterIamBindingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster_iam_binding.html google_dataproc_cluster_iam_binding}
*/
export class DataprocClusterIamBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_dataproc_cluster_iam_binding";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/dataproc_cluster_iam_binding.html google_dataproc_cluster_iam_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataprocClusterIamBindingConfig
  */
  public constructor(scope: Construct, id: string, config: DataprocClusterIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dataproc_cluster_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._cluster = config.cluster;
    this._members = config.members;
    this._project = config.project;
    this._region = config.region;
    this._role = config.role;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster - computed: false, optional: false, required: true
  private _cluster: string;
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // members - computed: false, optional: false, required: true
  private _members: string[];
  public get members() {
    return this.getListAttribute('members');
  }
  public set members(value: string[]) {
    this._members = value;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members
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

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: DataprocClusterIamBindingCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: DataprocClusterIamBindingCondition[] ) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster: cdktf.stringToTerraform(this._cluster),
      members: cdktf.listMapper(cdktf.stringToTerraform)(this._members),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      role: cdktf.stringToTerraform(this._role),
      condition: cdktf.listMapper(dataprocClusterIamBindingConditionToTerraform)(this._condition),
    };
  }
}
