// https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/vmwareengine_vcenter_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleVmwareengineVcenterCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/vmwareengine_vcenter_credentials#id DataGoogleVmwareengineVcenterCredentials#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name of the private cloud which contains vcenter.
  * Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
  * For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/vmwareengine_vcenter_credentials#parent DataGoogleVmwareengineVcenterCredentials#parent}
  */
  readonly parent: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/vmwareengine_vcenter_credentials google_vmwareengine_vcenter_credentials}
*/
export class DataGoogleVmwareengineVcenterCredentials extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_vmwareengine_vcenter_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleVmwareengineVcenterCredentials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleVmwareengineVcenterCredentials to import
  * @param importFromId The id of the existing DataGoogleVmwareengineVcenterCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/vmwareengine_vcenter_credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleVmwareengineVcenterCredentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_vmwareengine_vcenter_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/vmwareengine_vcenter_credentials google_vmwareengine_vcenter_credentials} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleVmwareengineVcenterCredentialsConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleVmwareengineVcenterCredentialsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vmwareengine_vcenter_credentials',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.16.0',
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
    this._id = config.id;
    this._parent = config.parent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parent: cdktf.stringToTerraform(this._parent),
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
