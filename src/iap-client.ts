// https://www.terraform.io/docs/providers/google/r/iap_client.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IapClientConfig extends cdktf.TerraformMetaArguments {
  /** Identifier of the brand to which this client
is attached to. The format is
'projects/{project_number}/brands/{brand_id}/identityAwareProxyClients/{client_id}'. */
  readonly brand: string;
  /** Human-friendly name given to the OAuth client. */
  readonly displayName: string;
  /** timeouts block */
  readonly timeouts?: IapClientTimeouts;
}
export interface IapClientTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function iapClientTimeoutsToTerraform(struct?: IapClientTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class IapClient extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: IapClientConfig) {
    super(scope, id, {
      terraformResourceType: 'google_iap_client',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._brand = config.brand;
    this._displayName = config.displayName;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // brand - computed: false, optional: false, required: true
  private _brand: string;
  public get brand() {
    return this.getStringAttribute('brand');
  }
  public set brand(value: string) {
    this._brand = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brandInput() {
    return this._brand
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IapClientTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: IapClientTimeouts ) {
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
      brand: cdktf.stringToTerraform(this._brand),
      display_name: cdktf.stringToTerraform(this._displayName),
      timeouts: iapClientTimeoutsToTerraform(this._timeouts),
    };
  }
}
