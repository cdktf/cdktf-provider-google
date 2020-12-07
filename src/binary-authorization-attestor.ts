// https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BinaryAuthorizationAttestorConfig extends cdktf.TerraformMetaArguments {
  /** A descriptive comment. This field may be updated. The field may be
displayed in chooser dialogs. */
  readonly description?: string;
  /** The resource name. */
  readonly name: string;
  readonly project?: string;
  /** attestation_authority_note block */
  readonly attestationAuthorityNote: BinaryAuthorizationAttestorAttestationAuthorityNote[];
  /** timeouts block */
  readonly timeouts?: BinaryAuthorizationAttestorTimeouts;
}
export interface BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey {
  /** A PEM-encoded public key, as described in
'https://tools.ietf.org/html/rfc7468#section-13' */
  readonly publicKeyPem?: string;
  /** The signature algorithm used to verify a message against
a signature using this key. These signature algorithm must
match the structure and any object identifiers encoded in
publicKeyPem (i.e. this algorithm must match that of the
public key). */
  readonly signatureAlgorithm?: string;
}

function binaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyToTerraform(struct?: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    public_key_pem: cdktf.stringToTerraform(struct!.publicKeyPem),
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
  }
}

export interface BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys {
  /** ASCII-armored representation of a PGP public key, as the
entire output by the command
'gpg --export --armor foo@example.com' (either LF or CRLF
line endings). When using this field, id should be left
blank. The BinAuthz API handlers will calculate the ID
and fill it in automatically. BinAuthz computes this ID
as the OpenPGP RFC4880 V4 fingerprint, represented as
upper-case hex. If id is provided by the caller, it will
be overwritten by the API-calculated ID. */
  readonly asciiArmoredPgpPublicKey?: string;
  /** A descriptive comment. This field may be updated. */
  readonly comment?: string;
  /** The ID of this public key. Signatures verified by BinAuthz
must include the ID of the public key that can be used to
verify them, and that ID must match the contents of this
field exactly. Additional restrictions on this field can
be imposed based on which public key type is encapsulated.
See the documentation on publicKey cases below for details. */
  readonly id?: string;
  /** pkix_public_key block */
  readonly pkixPublicKey?: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey[];
}

function binaryAuthorizationAttestorAttestationAuthorityNotePublicKeysToTerraform(struct?: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ascii_armored_pgp_public_key: cdktf.stringToTerraform(struct!.asciiArmoredPgpPublicKey),
    comment: cdktf.stringToTerraform(struct!.comment),
    id: cdktf.stringToTerraform(struct!.id),
    pkix_public_key: cdktf.listMapper(binaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyToTerraform)(struct!.pkixPublicKey),
  }
}

export interface BinaryAuthorizationAttestorAttestationAuthorityNote {
  /** The resource name of a ATTESTATION_AUTHORITY Note, created by the
user. If the Note is in a different project from the Attestor, it
should be specified in the format 'projects/*\/notes/*' (or the legacy
'providers/*\/notes/*'). This field may not be updated.
An attestation by this attestor is stored as a Container Analysis
ATTESTATION_AUTHORITY Occurrence that names a container image
and that links to this Note. */
  readonly noteReference: string;
  /** public_keys block */
  readonly publicKeys?: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys[];
}

function binaryAuthorizationAttestorAttestationAuthorityNoteToTerraform(struct?: BinaryAuthorizationAttestorAttestationAuthorityNote): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    note_reference: cdktf.stringToTerraform(struct!.noteReference),
    public_keys: cdktf.listMapper(binaryAuthorizationAttestorAttestationAuthorityNotePublicKeysToTerraform)(struct!.publicKeys),
  }
}

export interface BinaryAuthorizationAttestorTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function binaryAuthorizationAttestorTimeoutsToTerraform(struct?: BinaryAuthorizationAttestorTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class BinaryAuthorizationAttestor extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
    this._attestationAuthorityNote = config.attestationAuthorityNote;
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

  // attestation_authority_note - computed: false, optional: false, required: true
  private _attestationAuthorityNote: BinaryAuthorizationAttestorAttestationAuthorityNote[];
  public get attestationAuthorityNote() {
    return this.interpolationForAttribute('attestation_authority_note') as any;
  }
  public set attestationAuthorityNote(value: BinaryAuthorizationAttestorAttestationAuthorityNote[]) {
    this._attestationAuthorityNote = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationAuthorityNoteInput() {
    return this._attestationAuthorityNote
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BinaryAuthorizationAttestorTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BinaryAuthorizationAttestorTimeouts ) {
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
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      attestation_authority_note: cdktf.listMapper(binaryAuthorizationAttestorAttestationAuthorityNoteToTerraform)(this._attestationAuthorityNote),
      timeouts: binaryAuthorizationAttestorTimeoutsToTerraform(this._timeouts),
    };
  }
}
