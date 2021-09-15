// https://www.terraform.io/docs/providers/google/r/tags_tag_value_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TagsTagValueIamMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_tag_value_iam_member.html#member TagsTagValueIamMember#member}
  */
  readonly member: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_tag_value_iam_member.html#role TagsTagValueIamMember#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_tag_value_iam_member.html#tag_value TagsTagValueIamMember#tag_value}
  */
  readonly tagValue: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_tag_value_iam_member.html#condition TagsTagValueIamMember#condition}
  */
  readonly condition?: TagsTagValueIamMemberCondition[];
}
export interface TagsTagValueIamMemberCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_tag_value_iam_member.html#description TagsTagValueIamMember#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_tag_value_iam_member.html#expression TagsTagValueIamMember#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_tag_value_iam_member.html#title TagsTagValueIamMember#title}
  */
  readonly title: string;
}

function tagsTagValueIamMemberConditionToTerraform(struct?: TagsTagValueIamMemberCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/tags_tag_value_iam_member.html google_tags_tag_value_iam_member}
*/
export class TagsTagValueIamMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_tags_tag_value_iam_member";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/tags_tag_value_iam_member.html google_tags_tag_value_iam_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagsTagValueIamMemberConfig
  */
  public constructor(scope: Construct, id: string, config: TagsTagValueIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_tags_tag_value_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._member = config.member;
    this._role = config.role;
    this._tagValue = config.tagValue;
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

  // tag_value - computed: false, optional: false, required: true
  private _tagValue: string;
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: TagsTagValueIamMemberCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: TagsTagValueIamMemberCondition[] ) {
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
      role: cdktf.stringToTerraform(this._role),
      tag_value: cdktf.stringToTerraform(this._tagValue),
      condition: cdktf.listMapper(tagsTagValueIamMemberConditionToTerraform)(this._condition),
    };
  }
}
