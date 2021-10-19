// https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BinaryAuthorizationAttestorConfig extends cdktf.TerraformMetaArguments {
  /**
  * A descriptive comment. This field may be updated. The field may be
displayed in chooser dialogs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor.html#description BinaryAuthorizationAttestor#description}
  */
  readonly description?: string;
  /**
  * The resource name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor.html#name BinaryAuthorizationAttestor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor.html#project BinaryAuthorizationAttestor#project}
  */
  readonly project?: string;
  /**
  * attestation_authority_note block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor.html#attestation_authority_note BinaryAuthorizationAttestor#attestation_authority_note}
  */
  readonly attestationAuthorityNote: BinaryAuthorizationAttestorAttestationAuthorityNote;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor.html#timeouts BinaryAuthorizationAttestor#timeouts}
  */
  readonly timeouts?: BinaryAuthorizationAttestorTimeouts;
}
export interface BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey {
  /**
  * A PEM-encoded public key, as described in
'https://tools.ietf.org/html/rfc7468#section-13'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor.html#public_key_pem BinaryAuthorizationAttestor#public_key_pem}
  */
  readonly publicKeyPem?: string;
  /**
  * The signature algorithm used to verify a message against
a signature using this key. These signature algorithm must
match the structure and any object identifiers encoded in
publicKeyPem (i.e. this algorithm must match that of the
public key).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor.html#signature_algorithm BinaryAuthorizationAttestor#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
}

function binaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyToTerraform(struct?: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference | BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // public_key_pem - computed: false, optional: true, required: false
  private _publicKeyPem?: string | undefined; 
  public get publicKeyPem() {
    return this.getStringAttribute('public_key_pem');
  }
  public set publicKeyPem(value: string | undefined) {
    this._publicKeyPem = value;
  }
  public resetPublicKeyPem() {
    this._publicKeyPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyPemInput() {
    return this._publicKeyPem
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string | undefined; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string | undefined) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor.html#ascii_armored_pgp_public_key BinaryAuthorizationAttestor#ascii_armored_pgp_public_key}
  */
  readonly asciiArmoredPgpPublicKey?: string;
  /**
  * A descriptive comment. This field may be updated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor.html#comment BinaryAuthorizationAttestor#comment}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor.html#id BinaryAuthorizationAttestor#id}
  */
  readonly id?: string;
  /**
  * pkix_public_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor.html#pkix_public_key BinaryAuthorizationAttestor#pkix_public_key}
  */
  readonly pkixPublicKey?: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey;
}

function binaryAuthorizationAttestorAttestationAuthorityNotePublicKeysToTerraform(struct?: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor.html#note_reference BinaryAuthorizationAttestor#note_reference}
  */
  readonly noteReference: string;
  /**
  * public_keys block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor.html#public_keys BinaryAuthorizationAttestor#public_keys}
  */
  readonly publicKeys?: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys[];
}

function binaryAuthorizationAttestorAttestationAuthorityNoteToTerraform(struct?: BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference | BinaryAuthorizationAttestorAttestationAuthorityNote): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._noteReference
  }

  // public_keys - computed: false, optional: true, required: false
  private _publicKeys?: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys[] | undefined; 
  public get publicKeys() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('public_keys') as any;
  }
  public set publicKeys(value: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys[] | undefined) {
    this._publicKeys = value;
  }
  public resetPublicKeys() {
    this._publicKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeysInput() {
    return this._publicKeys
  }
}
export interface BinaryAuthorizationAttestorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor.html#create BinaryAuthorizationAttestor#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor.html#delete BinaryAuthorizationAttestor#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor.html#update BinaryAuthorizationAttestor#update}
  */
  readonly update?: string;
}

function binaryAuthorizationAttestorTimeoutsToTerraform(struct?: BinaryAuthorizationAttestorTimeoutsOutputReference | BinaryAuthorizationAttestorTimeouts): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor.html google_binary_authorization_attestor}
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
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/binary_authorization_attestor.html google_binary_authorization_attestor} Resource
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
    this._attestationAuthorityNote = config.attestationAuthorityNote;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
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
  private _name?: string; 
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
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
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
  private _attestationAuthorityNote?: BinaryAuthorizationAttestorAttestationAuthorityNote; 
  private __attestationAuthorityNoteOutput = new BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference(this as any, "attestation_authority_note", true);
  public get attestationAuthorityNote() {
    return this.__attestationAuthorityNoteOutput;
  }
  public putAttestationAuthorityNote(value: BinaryAuthorizationAttestorAttestationAuthorityNote) {
    this._attestationAuthorityNote = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationAuthorityNoteInput() {
    return this._attestationAuthorityNote
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BinaryAuthorizationAttestorTimeouts | undefined; 
  private __timeoutsOutput = new BinaryAuthorizationAttestorTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: BinaryAuthorizationAttestorTimeouts | undefined) {
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
      attestation_authority_note: binaryAuthorizationAttestorAttestationAuthorityNoteToTerraform(this._attestationAuthorityNote),
      timeouts: binaryAuthorizationAttestorTimeoutsToTerraform(this._timeouts),
    };
  }
}
