// https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template_iam_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalogTagTemplateIamBindingConfig extends cdktf.TerraformMetaArguments {
  readonly members: string[];
  readonly project?: string;
  readonly region?: string;
  readonly role: string;
  readonly tagTemplate: string;
  /** condition block */
  readonly condition?: DataCatalogTagTemplateIamBindingCondition[];
}
export interface DataCatalogTagTemplateIamBindingCondition {
  readonly description?: string;
  readonly expression: string;
  readonly title: string;
}

function dataCatalogTagTemplateIamBindingConditionToTerraform(struct?: DataCatalogTagTemplateIamBindingCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


// Resource

export class DataCatalogTagTemplateIamBinding extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataCatalogTagTemplateIamBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_catalog_tag_template_iam_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._members = config.members;
    this._project = config.project;
    this._region = config.region;
    this._role = config.role;
    this._tagTemplate = config.tagTemplate;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // tag_template - computed: false, optional: false, required: true
  private _tagTemplate: string;
  public get tagTemplate() {
    return this.getStringAttribute('tag_template');
  }
  public set tagTemplate(value: string) {
    this._tagTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagTemplateInput() {
    return this._tagTemplate
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: DataCatalogTagTemplateIamBindingCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: DataCatalogTagTemplateIamBindingCondition[] ) {
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
      members: cdktf.listMapper(cdktf.stringToTerraform)(this._members),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      role: cdktf.stringToTerraform(this._role),
      tag_template: cdktf.stringToTerraform(this._tagTemplate),
      condition: cdktf.listMapper(dataCatalogTagTemplateIamBindingConditionToTerraform)(this._condition),
    };
  }
}
