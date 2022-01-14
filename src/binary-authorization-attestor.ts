// https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BinaryAuthorizationAttestorConfig extends cdktf.TerraformMetaArguments {
  /**
  * A descriptive comment. This field may be updated. The field may be
displayed in chooser dialogs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#description BinaryAuthorizationAttestor#description}
  */
  readonly description?: string;
  /**
  * The resource name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#name BinaryAuthorizationAttestor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#project BinaryAuthorizationAttestor#project}
  */
  readonly project?: string;
  /**
  * attestation_authority_note block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#attestation_authority_note BinaryAuthorizationAttestor#attestation_authority_note}
  */
  readonly attestationAuthorityNote: BinaryAuthorizationAttestorAttestationAuthorityNote;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#timeouts BinaryAuthorizationAttestor#timeouts}
  */
  readonly timeouts?: BinaryAuthorizationAttestorTimeouts;
}
export interface BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey {
  /**
  * A PEM-encoded public key, as described in
'https://tools.ietf.org/html/rfc7468#section-13'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#public_key_pem BinaryAuthorizationAttestor#public_key_pem}
  */
  readonly publicKeyPem?: string;
  /**
  * The signature algorithm used to verify a message against
a signature using this key. These signature algorithm must
match the structure and any object identifiers encoded in
publicKeyPem (i.e. this algorithm must match that of the
public key).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#signature_algorithm BinaryAuthorizationAttestor#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
}

export function binaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyToTerraform(struct?: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference | BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_key_pem: cdktf.stringToTerraform(struct!.publicKeyPem),
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
  }
}

export class BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicKeyPem !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeyPem = this._publicKeyPem;
    }
    if (this._signatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureAlgorithm = this._signatureAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicKeyPem = undefined;
      this._signatureAlgorithm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicKeyPem = value.publicKeyPem;
      this._signatureAlgorithm = value.signatureAlgorithm;
    }
  }

  // public_key_pem - computed: false, optional: true, required: false
  private _publicKeyPem?: string; 
  public get publicKeyPem() {
    return this.getStringAttribute('public_key_pem');
  }
  public set publicKeyPem(value: string) {
    this._publicKeyPem = value;
  }
  public resetPublicKeyPem() {
    this._publicKeyPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyPemInput() {
    return this._publicKeyPem;
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }
}
export interface BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys {
  /**
  * ASCII-armored representation of a PGP public key, as the
entire output by the command
'gpg --export --armor foo@example.com' (either LF or CRLF
line endings). When using this field, id should be left
blank. The BinAuthz API handlers will calculate the ID
and fill it in automatically. BinAuthz computes this ID
as the OpenPGP RFC4880 V4 fingerprint, represented as
upper-case hex. If id is provided by the caller, it will
be overwritten by the API-calculated ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#ascii_armored_pgp_public_key BinaryAuthorizationAttestor#ascii_armored_pgp_public_key}
  */
  readonly asciiArmoredPgpPublicKey?: string;
  /**
  * A descriptive comment. This field may be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#comment BinaryAuthorizationAttestor#comment}
  */
  readonly comment?: string;
  /**
  * The ID of this public key. Signatures verified by BinAuthz
must include the ID of the public key that can be used to
verify them, and that ID must match the contents of this
field exactly. Additional restrictions on this field can
be imposed based on which public key type is encapsulated.
See the documentation on publicKey cases below for details.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#id BinaryAuthorizationAttestor#id}
  */
  readonly id?: string;
  /**
  * pkix_public_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#pkix_public_key BinaryAuthorizationAttestor#pkix_public_key}
  */
  readonly pkixPublicKey?: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey;
}

export function binaryAuthorizationAttestorAttestationAuthorityNotePublicKeysToTerraform(struct?: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ascii_armored_pgp_public_key: cdktf.stringToTerraform(struct!.asciiArmoredPgpPublicKey),
    comment: cdktf.stringToTerraform(struct!.comment),
    pkix_public_key: binaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyToTerraform(struct!.pkixPublicKey),
  }
}

export interface BinaryAuthorizationAttestorAttestationAuthorityNote {
  /**
  * The resource name of a ATTESTATION_AUTHORITY Note, created by the
user. If the Note is in a different project from the Attestor, it
should be specified in the format 'projects/*\/notes/*' (or the legacy
'providers/*\/notes/*'). This field may not be updated.
An attestation by this attestor is stored as a Container Analysis
ATTESTATION_AUTHORITY Occurrence that names a container image
and that links to this Note.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#note_reference BinaryAuthorizationAttestor#note_reference}
  */
  readonly noteReference: string;
  /**
  * public_keys block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#public_keys BinaryAuthorizationAttestor#public_keys}
  */
  readonly publicKeys?: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys[];
}

export function binaryAuthorizationAttestorAttestationAuthorityNoteToTerraform(struct?: BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference | BinaryAuthorizationAttestorAttestationAuthorityNote): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    note_reference: cdktf.stringToTerraform(struct!.noteReference),
    public_keys: cdktf.listMapper(binaryAuthorizationAttestorAttestationAuthorityNotePublicKeysToTerraform)(struct!.publicKeys),
  }
}

export class BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): BinaryAuthorizationAttestorAttestationAuthorityNote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noteReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteReference = this._noteReference;
    }
    if (this._publicKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeys = this._publicKeys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BinaryAuthorizationAttestorAttestationAuthorityNote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noteReference = undefined;
      this._publicKeys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noteReference = value.noteReference;
      this._publicKeys = value.publicKeys;
    }
  }

  // note_reference - computed: false, optional: false, required: true
  private _noteReference?: string; 
  public get noteReference() {
    return this.getStringAttribute('note_reference');
  }
  public set noteReference(value: string) {
    this._noteReference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get noteReferenceInput() {
    return this._noteReference;
  }

  // public_keys - computed: false, optional: true, required: false
  private _publicKeys?: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys[]; 
  public get publicKeys() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('public_keys') as any;
  }
  public set publicKeys(value: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys[]) {
    this._publicKeys = value;
  }
  public resetPublicKeys() {
    this._publicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeysInput() {
    return this._publicKeys;
  }
}
export interface BinaryAuthorizationAttestorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#create BinaryAuthorizationAttestor#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#delete BinaryAuthorizationAttestor#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor#update BinaryAuthorizationAttestor#update}
  */
  readonly update?: string;
}

export function binaryAuthorizationAttestorTimeoutsToTerraform(struct?: BinaryAuthorizationAttestorTimeoutsOutputReference | BinaryAuthorizationAttestorTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class BinaryAuthorizationAttestorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): BinaryAuthorizationAttestorTimeouts | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BinaryAuthorizationAttestorTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor google_binary_authorization_attestor}
*/
export class BinaryAuthorizationAttestor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_binary_authorization_attestor";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor google_binary_authorization_attestor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BinaryAuthorizationAttestorConfig
  */
  public constructor(scope: Construct, id: string, config: BinaryAuthorizationAttestorConfig) {
    super(scope, id, {
      terraformResourceType: 'google_binary_authorization_attestor',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._project = config.project;
    this._attestationAuthorityNote.internalValue = config.attestationAuthorityNote;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // attestation_authority_note - computed: false, optional: false, required: true
  private _attestationAuthorityNote = new BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference(this as any, "attestation_authority_note", true);
  public get attestationAuthorityNote() {
    return this._attestationAuthorityNote;
  }
  public putAttestationAuthorityNote(value: BinaryAuthorizationAttestorAttestationAuthorityNote) {
    this._attestationAuthorityNote.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationAuthorityNoteInput() {
    return this._attestationAuthorityNote.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BinaryAuthorizationAttestorTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BinaryAuthorizationAttestorTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      attestation_authority_note: binaryAuthorizationAttestorAttestationAuthorityNoteToTerraform(this._attestationAuthorityNote.internalValue),
      timeouts: binaryAuthorizationAttestorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
