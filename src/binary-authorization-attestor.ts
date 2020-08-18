// https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface BinaryAuthorizationAttestorConfig extends TerraformMetaArguments {
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
export interface BinaryAuthorizationAttestorTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class BinaryAuthorizationAttestor extends TerraformResource {

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
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // attestation_authority_note - computed: false, optional: false, required: true
  private _attestationAuthorityNote: BinaryAuthorizationAttestorAttestationAuthorityNote[];
  public get attestationAuthorityNote() {
    return this._attestationAuthorityNote;
  }
  public set attestationAuthorityNote(value: BinaryAuthorizationAttestorAttestationAuthorityNote[]) {
    this._attestationAuthorityNote = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BinaryAuthorizationAttestorTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: BinaryAuthorizationAttestorTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      project: this._project,
      attestation_authority_note: this._attestationAuthorityNote,
      timeouts: this._timeouts,
    };
  }
}
