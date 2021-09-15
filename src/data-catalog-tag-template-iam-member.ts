// https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalogTagTemplateIamMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template_iam_member.html#member DataCatalogTagTemplateIamMember#member}
  */
  readonly member: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template_iam_member.html#project DataCatalogTagTemplateIamMember#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template_iam_member.html#region DataCatalogTagTemplateIamMember#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template_iam_member.html#role DataCatalogTagTemplateIamMember#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template_iam_member.html#tag_template DataCatalogTagTemplateIamMember#tag_template}
  */
  readonly tagTemplate: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template_iam_member.html#condition DataCatalogTagTemplateIamMember#condition}
  */
  readonly condition?: DataCatalogTagTemplateIamMemberCondition[];
}
export interface DataCatalogTagTemplateIamMemberCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template_iam_member.html#description DataCatalogTagTemplateIamMember#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template_iam_member.html#expression DataCatalogTagTemplateIamMember#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template_iam_member.html#title DataCatalogTagTemplateIamMember#title}
  */
  readonly title: string;
}

function dataCatalogTagTemplateIamMemberConditionToTerraform(struct?: DataCatalogTagTemplateIamMemberCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template_iam_member.html google_data_catalog_tag_template_iam_member}
*/
export class DataCatalogTagTemplateIamMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_data_catalog_tag_template_iam_member";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template_iam_member.html google_data_catalog_tag_template_iam_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalogTagTemplateIamMemberConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalogTagTemplateIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_catalog_tag_template_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._member = config.member;
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
  private _condition?: DataCatalogTagTemplateIamMemberCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: DataCatalogTagTemplateIamMemberCondition[] ) {
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
      member: cdktf.stringToTerraform(this._member),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      role: cdktf.stringToTerraform(this._role),
      tag_template: cdktf.stringToTerraform(this._tagTemplate),
      condition: cdktf.listMapper(dataCatalogTagTemplateIamMemberConditionToTerraform)(this._condition),
    };
  }
}
