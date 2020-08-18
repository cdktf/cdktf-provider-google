// https://www.terraform.io/docs/providers/google/r/iap_client.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface IapClientConfig extends TerraformMetaArguments {
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

// Resource

export class IapClient extends TerraformResource {

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
    return this._brand;
  }
  public set brand(value: string) {
    this._brand = value;
  }

  // client_id - computed: true, optional: false, required: true
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this._displayName;
  }
  public set displayName(value: string) {
    this._displayName = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // secret - computed: true, optional: false, required: true
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: IapClientTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: IapClientTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      brand: this._brand,
      display_name: this._displayName,
      timeouts: this._timeouts,
    };
  }
}
