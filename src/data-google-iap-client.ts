// https://www.terraform.io/docs/providers/google/d/iap_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleIapClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Identifier of the brand to which this client
is attached to. The format is
'projects/{project_number}/brands/{brand_id}/identityAwareProxyClients/{client_id}'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iap_client#brand DataGoogleIapClient#brand}
  */
  readonly brand: string;
  /**
  * Output only. Unique identifier of the OAuth client.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iap_client#client_id DataGoogleIapClient#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/iap_client#id DataGoogleIapClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/iap_client google_iap_client}
*/
export class DataGoogleIapClient extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_iap_client";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/iap_client google_iap_client} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleIapClientConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleIapClientConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iap_client',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
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
    this._brand = config.brand;
    this._clientId = config.clientId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // brand - computed: false, optional: false, required: true
  private _brand?: string; 
  public get brand() {
    return this.getStringAttribute('brand');
  }
  public set brand(value: string) {
    this._brand = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brandInput() {
    return this._brand;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      brand: cdktf.stringToTerraform(this._brand),
      client_id: cdktf.stringToTerraform(this._clientId),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
