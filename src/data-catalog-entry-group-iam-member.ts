// https://www.terraform.io/docs/providers/google/r/data_catalog_entry_group_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalogEntryGroupIamMemberConfig extends cdktf.TerraformMetaArguments {
  readonly entryGroup: string;
  readonly member: string;
  readonly project?: string;
  readonly region?: string;
  readonly role: string;
  /** condition block */
  readonly condition?: DataCatalogEntryGroupIamMemberCondition[];
}
export interface DataCatalogEntryGroupIamMemberCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

function dataCatalogEntryGroupIamMemberConditionToTerraform(struct?: DataCatalogEntryGroupIamMemberCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


// Resource

export class DataCatalogEntryGroupIamMember extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataCatalogEntryGroupIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_catalog_entry_group_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._entryGroup = config.entryGroup;
    this._member = config.member;
    this._project = config.project;
    this._region = config.region;
    this._role = config.role;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entry_group - computed: false, optional: false, required: true
  private _entryGroup: string;
  public get entryGroup() {
    return this.getStringAttribute('entry_group');
  }
  public set entryGroup(value: string) {
    this._entryGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entryGroupInput() {
    return this._entryGroup
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member - computed: false, optional: false, required: true
  private _member: string;
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member
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
  private _condition?: DataCatalogEntryGroupIamMemberCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: DataCatalogEntryGroupIamMemberCondition[] ) {
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
      entry_group: cdktf.stringToTerraform(this._entryGroup),
      member: cdktf.stringToTerraform(this._member),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      role: cdktf.stringToTerraform(this._role),
      condition: cdktf.listMapper(dataCatalogEntryGroupIamMemberConditionToTerraform)(this._condition),
    };
  }
}
