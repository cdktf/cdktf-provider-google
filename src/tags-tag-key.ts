// https://www.terraform.io/docs/providers/google/r/tags_tag_key.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TagsTagKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * User-assigned description of the TagKey. Must not exceed 256 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_tag_key.html#description TagsTagKey#description}
  */
  readonly description?: string;
  /**
  * Input only. The resource name of the new TagKey's parent. Must be of the form organizations/{org_id}.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_tag_key.html#parent TagsTagKey#parent}
  */
  readonly parent: string;
  /**
  * Input only. The user friendly name for a TagKey. The short name should be unique for TagKeys within the same tag namespace.

The short name must be 1-63 characters, beginning and ending with an alphanumeric character ([a-z0-9A-Z]) with dashes (-), underscores (_), dots (.), and alphanumerics between.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_tag_key.html#short_name TagsTagKey#short_name}
  */
  readonly shortName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_tag_key.html#timeouts TagsTagKey#timeouts}
  */
  readonly timeouts?: TagsTagKeyTimeouts;
}
export interface TagsTagKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_tag_key.html#create TagsTagKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_tag_key.html#delete TagsTagKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/tags_tag_key.html#update TagsTagKey#update}
  */
  readonly update?: string;
}

function tagsTagKeyTimeoutsToTerraform(struct?: TagsTagKeyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/tags_tag_key.html google_tags_tag_key}
*/
export class TagsTagKey extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/tags_tag_key.html google_tags_tag_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagsTagKeyConfig
  */
  public constructor(scope: Construct, id: string, config: TagsTagKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_tags_tag_key',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._parent = config.parent;
    this._shortName = config.shortName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // namespaced_name - computed: true, optional: false, required: false
  public get namespacedName() {
    return this.getStringAttribute('namespaced_name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent: string;
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent
  }

  // short_name - computed: false, optional: false, required: true
  private _shortName: string;
  public get shortName() {
    return this.getStringAttribute('short_name');
  }
  public set shortName(value: string) {
    this._shortName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortNameInput() {
    return this._shortName
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: TagsTagKeyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: TagsTagKeyTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      parent: cdktf.stringToTerraform(this._parent),
      short_name: cdktf.stringToTerraform(this._shortName),
      timeouts: tagsTagKeyTimeoutsToTerraform(this._timeouts),
    };
  }
}
