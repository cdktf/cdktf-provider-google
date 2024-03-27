/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_mute_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SccMuteConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the mute config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_mute_config#description SccMuteConfig#description}
  */
  readonly description?: string;
  /**
  * An expression that defines the filter to apply across create/update
  * events of findings. While creating a filter string, be mindful of
  * the scope in which the mute configuration is being created. E.g.,
  * If a filter contains project = X but is created under the
  * project = Y scope, it might not match any findings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_mute_config#filter SccMuteConfig#filter}
  */
  readonly filter: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_mute_config#id SccMuteConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier provided by the client within the parent scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_mute_config#mute_config_id SccMuteConfig#mute_config_id}
  */
  readonly muteConfigId: string;
  /**
  * Resource name of the new mute configs's parent. Its format is
  * "organizations/[organization_id]", "folders/[folder_id]", or
  * "projects/[project_id]".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_mute_config#parent SccMuteConfig#parent}
  */
  readonly parent: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_mute_config#timeouts SccMuteConfig#timeouts}
  */
  readonly timeouts?: SccMuteConfigTimeouts;
}
export interface SccMuteConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_mute_config#create SccMuteConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_mute_config#delete SccMuteConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_mute_config#update SccMuteConfig#update}
  */
  readonly update?: string;
}

export function sccMuteConfigTimeoutsToTerraform(struct?: SccMuteConfigTimeouts | cdktf.IResolvable): any {
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


export function sccMuteConfigTimeoutsToHclTerraform(struct?: SccMuteConfigTimeouts | cdktf.IResolvable): any {
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

export class SccMuteConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SccMuteConfigTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SccMuteConfigTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_mute_config google_scc_mute_config}
*/
export class SccMuteConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_scc_mute_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SccMuteConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SccMuteConfig to import
  * @param importFromId The id of the existing SccMuteConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_mute_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SccMuteConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_scc_mute_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.22.0/docs/resources/scc_mute_config google_scc_mute_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SccMuteConfigConfig
  */
  public constructor(scope: Construct, id: string, config: SccMuteConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_scc_mute_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.22.0',
        providerVersionConstraint: '~> 5.0'
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
    this._filter = config.filter;
    this._id = config.id;
    this._muteConfigId = config.muteConfigId;
    this._parent = config.parent;
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

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // most_recent_editor - computed: true, optional: false, required: false
  public get mostRecentEditor() {
    return this.getStringAttribute('most_recent_editor');
  }

  // mute_config_id - computed: false, optional: false, required: true
  private _muteConfigId?: string; 
  public get muteConfigId() {
    return this.getStringAttribute('mute_config_id');
  }
  public set muteConfigId(value: string) {
    this._muteConfigId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get muteConfigIdInput() {
    return this._muteConfigId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SccMuteConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SccMuteConfigTimeouts) {
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
      filter: cdktf.stringToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      mute_config_id: cdktf.stringToTerraform(this._muteConfigId),
      parent: cdktf.stringToTerraform(this._parent),
      timeouts: sccMuteConfigTimeoutsToTerraform(this._timeouts.internalValue),
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
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
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
      mute_config_id: {
        value: cdktf.stringToHclTerraform(this._muteConfigId),
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
      timeouts: {
        value: sccMuteConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SccMuteConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
