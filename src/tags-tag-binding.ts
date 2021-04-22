// https://www.terraform.io/docs/providers/google/r/tags_tag_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TagsTagBindingConfig extends cdktf.TerraformMetaArguments {
  /** The full resource name of the resource the TagValue is bound to. E.g. //cloudresourcemanager.googleapis.com/projects/123 */
  readonly parent: string;
  /** The TagValue of the TagBinding. Must be of the form tagValues/456. */
  readonly tagValue: string;
  /** timeouts block */
  readonly timeouts?: TagsTagBindingTimeouts;
}
export interface TagsTagBindingTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function tagsTagBindingTimeoutsToTerraform(struct?: TagsTagBindingTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class TagsTagBinding extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: TagsTagBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_tags_tag_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._parent = config.parent;
    this._tagValue = config.tagValue;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: TagsTagBindingTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: TagsTagBindingTimeouts ) {
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
      parent: cdktf.stringToTerraform(this._parent),
      tag_value: cdktf.stringToTerraform(this._tagValue),
      timeouts: tagsTagBindingTimeoutsToTerraform(this._timeouts),
    };
  }
}
