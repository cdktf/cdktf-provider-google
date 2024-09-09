// https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/data-sources/logging_project_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleLoggingProjectSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/data-sources/logging_project_settings#id DataGoogleLoggingProjectSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The project for which to retrieve settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/data-sources/logging_project_settings#project DataGoogleLoggingProjectSettings#project}
  */
  readonly project: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/data-sources/logging_project_settings google_logging_project_settings}
*/
export class DataGoogleLoggingProjectSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_logging_project_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleLoggingProjectSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleLoggingProjectSettings to import
  * @param importFromId The id of the existing DataGoogleLoggingProjectSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/data-sources/logging_project_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleLoggingProjectSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_logging_project_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/data-sources/logging_project_settings google_logging_project_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleLoggingProjectSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleLoggingProjectSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_logging_project_settings',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.1.0',
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
    this._id = config.id;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable_default_sink - computed: true, optional: false, required: false
  public get disableDefaultSink() {
    return this.getBooleanAttribute('disable_default_sink');
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

  // kms_key_name - computed: true, optional: false, required: false
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }

  // kms_service_account_id - computed: true, optional: false, required: false
  public get kmsServiceAccountId() {
    return this.getStringAttribute('kms_service_account_id');
  }

  // logging_service_account_id - computed: true, optional: false, required: false
  public get loggingServiceAccountId() {
    return this.getStringAttribute('logging_service_account_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // storage_location - computed: true, optional: false, required: false
  public get storageLocation() {
    return this.getStringAttribute('storage_location');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
