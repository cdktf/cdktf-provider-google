// https://www.terraform.io/docs/providers/google/r/data_google_dns_keys.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformDataSource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface DataGoogleDnsKeysConfig extends TerraformMetaArguments {
  readonly managedZone: string;
  readonly project?: string;
}
export class DataGoogleDnsKeysKeySigningKeysDigests extends ComplexComputedList {

  // digest - computed: true, optional: false, required: true
  public get digest() {
    return this.getStringAttribute('digest');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataGoogleDnsKeysKeySigningKeys extends ComplexComputedList {

  // algorithm - computed: true, optional: false, required: true
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // creation_time - computed: true, optional: false, required: true
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // digests - computed: true, optional: false, required: true
  public get digests() {
    return 'not implemented' as any;
  }

  // ds_record - computed: true, optional: false, required: true
  public get dsRecord() {
    return this.getStringAttribute('ds_record');
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: false, required: true
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // key_length - computed: true, optional: false, required: true
  public get keyLength() {
    return this.getNumberAttribute('key_length');
  }

  // key_tag - computed: true, optional: false, required: true
  public get keyTag() {
    return this.getNumberAttribute('key_tag');
  }

  // public_key - computed: true, optional: false, required: true
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
}
export class DataGoogleDnsKeysZoneSigningKeysDigests extends ComplexComputedList {

  // digest - computed: true, optional: false, required: true
  public get digest() {
    return this.getStringAttribute('digest');
  }

  // type - computed: true, optional: false, required: true
  public get type() {
    return this.getStringAttribute('type');
  }
}
export class DataGoogleDnsKeysZoneSigningKeys extends ComplexComputedList {

  // algorithm - computed: true, optional: false, required: true
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // creation_time - computed: true, optional: false, required: true
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // description - computed: true, optional: false, required: true
  public get description() {
    return this.getStringAttribute('description');
  }

  // digests - computed: true, optional: false, required: true
  public get digests() {
    return 'not implemented' as any;
  }

  // id - computed: true, optional: false, required: true
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: false, required: true
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // key_length - computed: true, optional: false, required: true
  public get keyLength() {
    return this.getNumberAttribute('key_length');
  }

  // key_tag - computed: true, optional: false, required: true
  public get keyTag() {
    return this.getNumberAttribute('key_tag');
  }

  // public_key - computed: true, optional: false, required: true
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
}

// Resource

export class DataGoogleDnsKeys extends TerraformDataSource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: DataGoogleDnsKeysConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dns_keys',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._managedZone = config.managedZone;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // key_signing_keys - computed: true, optional: false, required: true
  public keySigningKeys(index: string) {
    return new DataGoogleDnsKeysKeySigningKeys(this, 'key_signing_keys', index);
  }

  // managed_zone - computed: false, optional: false, required: true
  private _managedZone: string;
  public get managedZone() {
    return this._managedZone;
  }
  public set managedZone(value: string) {
    this._managedZone = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // zone_signing_keys - computed: true, optional: false, required: true
  public zoneSigningKeys(index: string) {
    return new DataGoogleDnsKeysZoneSigningKeys(this, 'zone_signing_keys', index);
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      managed_zone: this._managedZone,
      project: this._project,
    };
  }
}
