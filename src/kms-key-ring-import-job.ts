// https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsKeyRingImportJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * It must be unique within a KeyRing and match the regular expression [a-zA-Z0-9_-]{1,63}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job#import_job_id KmsKeyRingImportJob#import_job_id}
  */
  readonly importJobId: string;
  /**
  * The wrapping method to be used for incoming key material. Possible values: ["RSA_OAEP_3072_SHA1_AES_256", "RSA_OAEP_4096_SHA1_AES_256"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job#import_method KmsKeyRingImportJob#import_method}
  */
  readonly importMethod: string;
  /**
  * The KeyRing that this import job belongs to.
Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}''.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job#key_ring KmsKeyRingImportJob#key_ring}
  */
  readonly keyRing: string;
  /**
  * The protection level of the ImportJob. This must match the protectionLevel of the
versionTemplate on the CryptoKey you attempt to import into. Possible values: ["SOFTWARE", "HSM", "EXTERNAL"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job#protection_level KmsKeyRingImportJob#protection_level}
  */
  readonly protectionLevel: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job#timeouts KmsKeyRingImportJob#timeouts}
  */
  readonly timeouts?: KmsKeyRingImportJobTimeouts;
}
export class KmsKeyRingImportJobAttestation extends cdktf.ComplexComputedList {

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }
}
export class KmsKeyRingImportJobPublicKey extends cdktf.ComplexComputedList {

  // pem - computed: true, optional: false, required: false
  public get pem() {
    return this.getStringAttribute('pem');
  }
}
export interface KmsKeyRingImportJobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job#create KmsKeyRingImportJob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job#delete KmsKeyRingImportJob#delete}
  */
  readonly delete?: string;
}

export function kmsKeyRingImportJobTimeoutsToTerraform(struct?: KmsKeyRingImportJobTimeoutsOutputReference | KmsKeyRingImportJobTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class KmsKeyRingImportJobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): KmsKeyRingImportJobTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsKeyRingImportJobTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job google_kms_key_ring_import_job}
*/
export class KmsKeyRingImportJob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_kms_key_ring_import_job";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/kms_key_ring_import_job google_kms_key_ring_import_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsKeyRingImportJobConfig
  */
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
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attestation - computed: true, optional: false, required: false
  public attestation(index: string) {
    return new KmsKeyRingImportJobAttestation(this, 'attestation', index);
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // import_job_id - computed: false, optional: false, required: true
  private _importJobId?: string; 
  public get importJobId() {
    return this.getStringAttribute('import_job_id');
  }
  public set importJobId(value: string) {
    this._importJobId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importJobIdInput() {
    return this._importJobId;
  }

  // import_method - computed: false, optional: false, required: true
  private _importMethod?: string; 
  public get importMethod() {
    return this.getStringAttribute('import_method');
  }
  public set importMethod(value: string) {
    this._importMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importMethodInput() {
    return this._importMethod;
  }

  // key_ring - computed: false, optional: false, required: true
  private _keyRing?: string; 
  public get keyRing() {
    return this.getStringAttribute('key_ring');
  }
  public set keyRing(value: string) {
    this._keyRing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRingInput() {
    return this._keyRing;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protection_level - computed: false, optional: false, required: true
  private _protectionLevel?: string; 
  public get protectionLevel() {
    return this.getStringAttribute('protection_level');
  }
  public set protectionLevel(value: string) {
    this._protectionLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionLevelInput() {
    return this._protectionLevel;
  }

  // public_key - computed: true, optional: false, required: false
  public publicKey(index: string) {
    return new KmsKeyRingImportJobPublicKey(this, 'public_key', index);
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KmsKeyRingImportJobTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KmsKeyRingImportJobTimeouts) {
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
      import_job_id: cdktf.stringToTerraform(this._importJobId),
      import_method: cdktf.stringToTerraform(this._importMethod),
      key_ring: cdktf.stringToTerraform(this._keyRing),
      protection_level: cdktf.stringToTerraform(this._protectionLevel),
      timeouts: kmsKeyRingImportJobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
