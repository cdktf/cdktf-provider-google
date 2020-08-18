// https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';
import { ComplexComputedList } from "cdktf";

// Configuration

export interface KmsKeyRingImportJobConfig extends TerraformMetaArguments {
  /** It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63} */
  readonly importJobId: string;
  /** The wrapping method to be used for incoming key material. Possible values: ["RSA_OAEP_3072_SHA1_AES_256", "RSA_OAEP_4096_SHA1_AES_256"] */
  readonly importMethod: string;
  /** The KeyRing that this import job belongs to.
Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''. */
  readonly keyRing: string;
  /** The protection level of the ImportJob. This must match the protectionLevel of the
versionTemplate on the CryptoKey you attempt to import into. Possible values: ["SOFTWARE", "HSM", "EXTERNAL"] */
  readonly protectionLevel: string;
  /** timeouts block */
  readonly timeouts?: KmsKeyRingImportJobTimeouts;
}
export class KmsKeyRingImportJobAttestation extends ComplexComputedList {

  // content - computed: true, optional: false, required: true
  public get content() {
    return this.getStringAttribute('content');
  }

  // format - computed: true, optional: false, required: true
  public get format() {
    return this.getStringAttribute('format');
  }
}
export class KmsKeyRingImportJobPublicKey extends ComplexComputedList {

  // pem - computed: true, optional: false, required: true
  public get pem() {
    return this.getStringAttribute('pem');
  }
}
export interface KmsKeyRingImportJobTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class KmsKeyRingImportJob extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: KmsKeyRingImportJobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_key_ring_import_job',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._importJobId = config.importJobId;
    this._importMethod = config.importMethod;
    this._keyRing = config.keyRing;
    this._protectionLevel = config.protectionLevel;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attestation - computed: true, optional: false, required: true
  public attestation(index: string) {
    return new KmsKeyRingImportJobAttestation(this, 'attestation', index);
  }

  // expire_time - computed: true, optional: false, required: true
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // import_job_id - computed: false, optional: false, required: true
  private _importJobId: string;
  public get importJobId() {
    return this._importJobId;
  }
  public set importJobId(value: string) {
    this._importJobId = value;
  }

  // import_method - computed: false, optional: false, required: true
  private _importMethod: string;
  public get importMethod() {
    return this._importMethod;
  }
  public set importMethod(value: string) {
    this._importMethod = value;
  }

  // key_ring - computed: false, optional: false, required: true
  private _keyRing: string;
  public get keyRing() {
    return this._keyRing;
  }
  public set keyRing(value: string) {
    this._keyRing = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // protection_level - computed: false, optional: false, required: true
  private _protectionLevel: string;
  public get protectionLevel() {
    return this._protectionLevel;
  }
  public set protectionLevel(value: string) {
    this._protectionLevel = value;
  }

  // public_key - computed: true, optional: false, required: true
  public publicKey(index: string) {
    return new KmsKeyRingImportJobPublicKey(this, 'public_key', index);
  }

  // state - computed: true, optional: false, required: true
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: KmsKeyRingImportJobTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: KmsKeyRingImportJobTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      import_job_id: this._importJobId,
      import_method: this._importMethod,
      key_ring: this._keyRing,
      protection_level: this._protectionLevel,
      timeouts: this._timeouts,
    };
  }
}
