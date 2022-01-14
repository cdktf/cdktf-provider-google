// https://www.terraform.io/docs/providers/google/r/folder_iam_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FolderIamMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_member#folder FolderIamMember#folder}
  */
  readonly folder: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_member#member FolderIamMember#member}
  */
  readonly member: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_member#role FolderIamMember#role}
  */
  readonly role: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_member#condition FolderIamMember#condition}
  */
  readonly condition?: FolderIamMemberCondition;
}
export interface FolderIamMemberCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_member#description FolderIamMember#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_member#expression FolderIamMember#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_iam_member#title FolderIamMember#title}
  */
  readonly title: string;
}

export function folderIamMemberConditionToTerraform(struct?: FolderIamMemberConditionOutputReference | FolderIamMemberCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}

export class FolderIamMemberConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): FolderIamMemberCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FolderIamMemberCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._expression = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._expression = value.expression;
      this._title = value.title;
    }
  }

  // description - computed: false, optional: true, required: false
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

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/folder_iam_member google_folder_iam_member}
*/
export class FolderIamMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_folder_iam_member";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/folder_iam_member google_folder_iam_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FolderIamMemberConfig
  */
  public constructor(scope: Construct, id: string, config: FolderIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_folder_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._folder = config.folder;
    this._member = config.member;
    this._role = config.role;
    this._condition.internalValue = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // folder - computed: false, optional: false, required: true
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member - computed: false, optional: false, required: true
  private _member?: string; 
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new FolderIamMemberConditionOutputReference(this as any, "condition", true);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: FolderIamMemberCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      folder: cdktf.stringToTerraform(this._folder),
      member: cdktf.stringToTerraform(this._member),
      role: cdktf.stringToTerraform(this._role),
      condition: folderIamMemberConditionToTerraform(this._condition.internalValue),
    };
  }
}
