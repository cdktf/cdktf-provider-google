/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tags_tag_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TagsTagKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * User-assigned description of the TagKey. Must not exceed 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tags_tag_key#description TagsTagKey#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tags_tag_key#id TagsTagKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Input only. The resource name of the new TagKey's parent. Must be of the form organizations/{org_id} or projects/{project_id_or_number}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tags_tag_key#parent TagsTagKey#parent}
  */
  readonly parent: string;
  /**
  * Optional. A purpose cannot be changed once set.
  * 
  * A purpose denotes that this Tag is intended for use in policies of a specific policy engine, and will involve that policy engine in management operations involving this Tag. Possible values: ["GCE_FIREWALL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tags_tag_key#purpose TagsTagKey#purpose}
  */
  readonly purpose?: string;
  /**
  * Optional. Purpose data cannot be changed once set.
  * 
  * Purpose data corresponds to the policy system that the tag is intended for. For example, the GCE_FIREWALL purpose expects data in the following format: 'network = "<project-name>/<vpc-name>"'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tags_tag_key#purpose_data TagsTagKey#purpose_data}
  */
  readonly purposeData?: { [key: string]: string };
  /**
  * Input only. The user friendly name for a TagKey. The short name should be unique for TagKeys within the same tag namespace.
  * 
  * The short name can have a maximum length of 256 characters. The permitted character set for the shortName includes all UTF-8 encoded Unicode characters except single quotes ('), double quotes ("), backslashes (\\), and forward slashes (/).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tags_tag_key#short_name TagsTagKey#short_name}
  */
  readonly shortName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tags_tag_key#timeouts TagsTagKey#timeouts}
  */
  readonly timeouts?: TagsTagKeyTimeouts;
}
export interface TagsTagKeyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tags_tag_key#create TagsTagKey#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tags_tag_key#delete TagsTagKey#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tags_tag_key#update TagsTagKey#update}
  */
  readonly update?: string;
}

export function tagsTagKeyTimeoutsToTerraform(struct?: TagsTagKeyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function tagsTagKeyTimeoutsToHclTerraform(struct?: TagsTagKeyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TagsTagKeyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TagsTagKeyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagsTagKeyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tags_tag_key google_tags_tag_key}
*/
export class TagsTagKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_tags_tag_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TagsTagKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TagsTagKey to import
  * @param importFromId The id of the existing TagsTagKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tags_tag_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TagsTagKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_tags_tag_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/tags_tag_key google_tags_tag_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagsTagKeyConfig
  */
  public constructor(scope: Construct, id: string, config: TagsTagKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_tags_tag_key',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.45.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._parent = config.parent;
    this._purpose = config.purpose;
    this._purposeData = config.purposeData;
    this._shortName = config.shortName;
    this._timeouts.internalValue = config.timeouts;
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

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // purpose - computed: false, optional: true, required: false
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  public resetPurpose() {
    this._purpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
  }

  // purpose_data - computed: false, optional: true, required: false
  private _purposeData?: { [key: string]: string }; 
  public get purposeData() {
    return this.getStringMapAttribute('purpose_data');
  }
  public set purposeData(value: { [key: string]: string }) {
    this._purposeData = value;
  }
  public resetPurposeData() {
    this._purposeData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeDataInput() {
    return this._purposeData;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TagsTagKeyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TagsTagKeyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      parent: cdktf.stringToTerraform(this._parent),
      purpose: cdktf.stringToTerraform(this._purpose),
      purpose_data: cdktf.hashMapper(cdktf.stringToTerraform)(this._purposeData),
      short_name: cdktf.stringToTerraform(this._shortName),
      timeouts: tagsTagKeyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purpose: {
        value: cdktf.stringToHclTerraform(this._purpose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purpose_data: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._purposeData),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      short_name: {
        value: cdktf.stringToHclTerraform(this._shortName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: tagsTagKeyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TagsTagKeyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
