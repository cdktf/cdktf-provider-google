// https://www.terraform.io/docs/providers/google/d/tags_tag_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleTagsTagKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/tags_tag_key#parent DataGoogleTagsTagKey#parent}
  */
  readonly parent: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/tags_tag_key#short_name DataGoogleTagsTagKey#short_name}
  */
  readonly shortName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/tags_tag_key google_tags_tag_key}
*/
export class DataGoogleTagsTagKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_tags_tag_key";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/tags_tag_key google_tags_tag_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleTagsTagKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleTagsTagKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_tags_tag_key',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.35.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._parent = config.parent;
    this._shortName = config.shortName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
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
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // short_name - computed: false, optional: false, required: true
  private _shortName?: string; 
  public get shortName() {
    return this.getStringAttribute('short_name');
  }
  public set shortName(value: string) {
    this._shortName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortNameInput() {
    return this._shortName;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      parent: cdktf.stringToTerraform(this._parent),
      short_name: cdktf.stringToTerraform(this._shortName),
    };
  }
}
