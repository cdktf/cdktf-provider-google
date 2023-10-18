/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// generated from terraform resource schema

import { DataLossPreventionDeidentifyTemplateDeidentifyConfig, 
dataLossPreventionDeidentifyTemplateDeidentifyConfigToTerraform, 
DataLossPreventionDeidentifyTemplateDeidentifyConfigOutputReference, 
DataLossPreventionDeidentifyTemplateTimeouts, 
dataLossPreventionDeidentifyTemplateTimeoutsToTerraform, 
DataLossPreventionDeidentifyTemplateTimeoutsOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataLossPreventionDeidentifyTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/data_loss_prevention_deidentify_template#description DataLossPreventionDeidentifyTemplate#description}
  */
  readonly description?: string;
  /**
  * User set display name of the template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/data_loss_prevention_deidentify_template#display_name DataLossPreventionDeidentifyTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/data_loss_prevention_deidentify_template#id DataLossPreventionDeidentifyTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The parent of the template in any of the following formats:
  * 
  * * 'projects/{{project}}'
  * * 'projects/{{project}}/locations/{{location}}'
  * * 'organizations/{{organization_id}}'
  * * 'organizations/{{organization_id}}/locations/{{location}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/data_loss_prevention_deidentify_template#parent DataLossPreventionDeidentifyTemplate#parent}
  */
  readonly parent: string;
  /**
  * The template id can contain uppercase and lowercase letters, numbers, and hyphens;
  * that is, it must match the regular expression: [a-zA-Z\d-_]+. The maximum length is
  * 100 characters. Can be empty to allow the system to generate one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/data_loss_prevention_deidentify_template#template_id DataLossPreventionDeidentifyTemplate#template_id}
  */
  readonly templateId?: string;
  /**
  * deidentify_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/data_loss_prevention_deidentify_template#deidentify_config DataLossPreventionDeidentifyTemplate#deidentify_config}
  */
  readonly deidentifyConfig: DataLossPreventionDeidentifyTemplateDeidentifyConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/data_loss_prevention_deidentify_template#timeouts DataLossPreventionDeidentifyTemplate#timeouts}
  */
  readonly timeouts?: DataLossPreventionDeidentifyTemplateTimeouts;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/data_loss_prevention_deidentify_template google_data_loss_prevention_deidentify_template}
*/
export class DataLossPreventionDeidentifyTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_loss_prevention_deidentify_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLossPreventionDeidentifyTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLossPreventionDeidentifyTemplate to import
  * @param importFromId The id of the existing DataLossPreventionDeidentifyTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/data_loss_prevention_deidentify_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLossPreventionDeidentifyTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_data_loss_prevention_deidentify_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.2.0/docs/resources/data_loss_prevention_deidentify_template google_data_loss_prevention_deidentify_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLossPreventionDeidentifyTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataLossPreventionDeidentifyTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_loss_prevention_deidentify_template',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.2.0',
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._parent = config.parent;
    this._templateId = config.templateId;
    this._deidentifyConfig.internalValue = config.deidentifyConfig;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // template_id - computed: true, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // deidentify_config - computed: false, optional: false, required: true
  private _deidentifyConfig = new DataLossPreventionDeidentifyTemplateDeidentifyConfigOutputReference(this, "deidentify_config");
  public get deidentifyConfig() {
    return this._deidentifyConfig;
  }
  public putDeidentifyConfig(value: DataLossPreventionDeidentifyTemplateDeidentifyConfig) {
    this._deidentifyConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deidentifyConfigInput() {
    return this._deidentifyConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataLossPreventionDeidentifyTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataLossPreventionDeidentifyTemplateTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      parent: cdktf.stringToTerraform(this._parent),
      template_id: cdktf.stringToTerraform(this._templateId),
      deidentify_config: dataLossPreventionDeidentifyTemplateDeidentifyConfigToTerraform(this._deidentifyConfig.internalValue),
      timeouts: dataLossPreventionDeidentifyTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
