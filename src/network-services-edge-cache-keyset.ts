// https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_keyset.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkServicesEdgeCacheKeysetConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human-readable description of the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_keyset.html#description NetworkServicesEdgeCacheKeyset#description}
  */
  readonly description?: string;
  /**
  * Set of label tags associated with the EdgeCache resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_keyset.html#labels NetworkServicesEdgeCacheKeyset#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Name of the resource; provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_keyset.html#name NetworkServicesEdgeCacheKeyset#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_keyset.html#project NetworkServicesEdgeCacheKeyset#project}
  */
  readonly project?: string;
  /**
  * public_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_keyset.html#public_key NetworkServicesEdgeCacheKeyset#public_key}
  */
  readonly publicKey: NetworkServicesEdgeCacheKeysetPublicKey[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_keyset.html#timeouts NetworkServicesEdgeCacheKeyset#timeouts}
  */
  readonly timeouts?: NetworkServicesEdgeCacheKeysetTimeouts;
}
export interface NetworkServicesEdgeCacheKeysetPublicKey {
  /**
  * The ID of the public key. The ID must be 1-63 characters long, and comply with RFC1035.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]*
which means the first character must be a letter, and all following characters must be a dash, underscore, letter or digit.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_keyset.html#id NetworkServicesEdgeCacheKeyset#id}
  */
  readonly id: string;
  /**
  * The base64-encoded value of the Ed25519 public key. The base64 encoding can be padded (44 bytes) or unpadded (43 bytes).
Representations or encodings of the public key other than this will be rejected with an error.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_keyset.html#value NetworkServicesEdgeCacheKeyset#value}
  */
  readonly value: string;
}

function networkServicesEdgeCacheKeysetPublicKeyToTerraform(struct?: NetworkServicesEdgeCacheKeysetPublicKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface NetworkServicesEdgeCacheKeysetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_keyset.html#create NetworkServicesEdgeCacheKeyset#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_keyset.html#delete NetworkServicesEdgeCacheKeyset#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_keyset.html#update NetworkServicesEdgeCacheKeyset#update}
  */
  readonly update?: string;
}

function networkServicesEdgeCacheKeysetTimeoutsToTerraform(struct?: NetworkServicesEdgeCacheKeysetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_keyset.html google_network_services_edge_cache_keyset}
*/
export class NetworkServicesEdgeCacheKeyset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_network_services_edge_cache_keyset";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/network_services_edge_cache_keyset.html google_network_services_edge_cache_keyset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkServicesEdgeCacheKeysetConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkServicesEdgeCacheKeysetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_services_edge_cache_keyset',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._labels = config.labels;
    this._name = config.name;
    this._project = config.project;
    this._publicKey = config.publicKey;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable;
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._project
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey: NetworkServicesEdgeCacheKeysetPublicKey[];
  public get publicKey() {
    return this.interpolationForAttribute('public_key') as any;
  }
  public set publicKey(value: NetworkServicesEdgeCacheKeysetPublicKey[]) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: NetworkServicesEdgeCacheKeysetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: NetworkServicesEdgeCacheKeysetTimeouts ) {
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
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      public_key: cdktf.listMapper(networkServicesEdgeCacheKeysetPublicKeyToTerraform)(this._publicKey),
      timeouts: networkServicesEdgeCacheKeysetTimeoutsToTerraform(this._timeouts),
    };
  }
}
