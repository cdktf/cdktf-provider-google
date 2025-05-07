// https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/secret_manager_secret_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleSecretManagerSecretVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/secret_manager_secret_version#id DataGoogleSecretManagerSecretVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/secret_manager_secret_version#is_secret_data_base64 DataGoogleSecretManagerSecretVersion#is_secret_data_base64}
  */
  readonly isSecretDataBase64?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/secret_manager_secret_version#project DataGoogleSecretManagerSecretVersion#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/secret_manager_secret_version#secret DataGoogleSecretManagerSecretVersion#secret}
  */
  readonly secret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/secret_manager_secret_version#version DataGoogleSecretManagerSecretVersion#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/secret_manager_secret_version google_secret_manager_secret_version}
*/
export class DataGoogleSecretManagerSecretVersion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_secret_manager_secret_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleSecretManagerSecretVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleSecretManagerSecretVersion to import
  * @param importFromId The id of the existing DataGoogleSecretManagerSecretVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/secret_manager_secret_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleSecretManagerSecretVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_secret_manager_secret_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/secret_manager_secret_version google_secret_manager_secret_version} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleSecretManagerSecretVersionConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleSecretManagerSecretVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_secret_manager_secret_version',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.34.0',
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
    this._isSecretDataBase64 = config.isSecretDataBase64;
    this._project = config.project;
    this._secret = config.secret;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // destroy_time - computed: true, optional: false, required: false
  public get destroyTime() {
    return this.getStringAttribute('destroy_time');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // is_secret_data_base64 - computed: false, optional: true, required: false
  private _isSecretDataBase64?: boolean | cdktf.IResolvable; 
  public get isSecretDataBase64() {
    return this.getBooleanAttribute('is_secret_data_base64');
  }
  public set isSecretDataBase64(value: boolean | cdktf.IResolvable) {
    this._isSecretDataBase64 = value;
  }
  public resetIsSecretDataBase64() {
    this._isSecretDataBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSecretDataBase64Input() {
    return this._isSecretDataBase64;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
    return this._project;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // secret_data - computed: true, optional: false, required: false
  public get secretData() {
    return this.getStringAttribute('secret_data');
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_secret_data_base64: cdktf.booleanToTerraform(this._isSecretDataBase64),
      project: cdktf.stringToTerraform(this._project),
      secret: cdktf.stringToTerraform(this._secret),
      version: cdktf.stringToTerraform(this._version),
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
      is_secret_data_base64: {
        value: cdktf.booleanToHclTerraform(this._isSecretDataBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
