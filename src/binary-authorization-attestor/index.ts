/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/binary_authorization_attestor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BinaryAuthorizationAttestorConfig extends cdktf.TerraformMetaArguments {
  /**
  * A descriptive comment. This field may be updated. The field may be
  * displayed in chooser dialogs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/binary_authorization_attestor#description BinaryAuthorizationAttestor#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/binary_authorization_attestor#id BinaryAuthorizationAttestor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/binary_authorization_attestor#name BinaryAuthorizationAttestor#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/binary_authorization_attestor#project BinaryAuthorizationAttestor#project}
  */
  readonly project?: string;
  /**
  * attestation_authority_note block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/binary_authorization_attestor#attestation_authority_note BinaryAuthorizationAttestor#attestation_authority_note}
  */
  readonly attestationAuthorityNote: BinaryAuthorizationAttestorAttestationAuthorityNote;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/binary_authorization_attestor#timeouts BinaryAuthorizationAttestor#timeouts}
  */
  readonly timeouts?: BinaryAuthorizationAttestorTimeouts;
}
export interface BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey {
  /**
  * A PEM-encoded public key, as described in
  * 'https://tools.ietf.org/html/rfc7468#section-13'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/binary_authorization_attestor#public_key_pem BinaryAuthorizationAttestor#public_key_pem}
  */
  readonly publicKeyPem?: string;
  /**
  * The signature algorithm used to verify a message against
  * a signature using this key. These signature algorithm must
  * match the structure and any object identifiers encoded in
  * publicKeyPem (i.e. this algorithm must match that of the
  * public key).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/binary_authorization_attestor#signature_algorithm BinaryAuthorizationAttestor#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
}

export function binaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyToTerraform(struct?: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference | BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_key_pem: cdktf.stringToTerraform(struct!.publicKeyPem),
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
  }
}


export function binaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyToHclTerraform(struct?: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference | BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_key_pem: {
      value: cdktf.stringToHclTerraform(struct!.publicKeyPem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
  * entire output by the command
  * 'gpg --export --armor foo@example.com' (either LF or CRLF
  * line endings). When using this field, id should be left
  * blank. The BinAuthz API handlers will calculate the ID
  * and fill it in automatically. BinAuthz computes this ID
  * as the OpenPGP RFC4880 V4 fingerprint, represented as
  * upper-case hex. If id is provided by the caller, it will
  * be overwritten by the API-calculated ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/binary_authorization_attestor#ascii_armored_pgp_public_key BinaryAuthorizationAttestor#ascii_armored_pgp_public_key}
  */
  readonly asciiArmoredPgpPublicKey?: string;
  /**
  * A descriptive comment. This field may be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/binary_authorization_attestor#comment BinaryAuthorizationAttestor#comment}
  */
  readonly comment?: string;
  /**
  * The ID of this public key. Signatures verified by BinAuthz
  * must include the ID of the public key that can be used to
  * verify them, and that ID must match the contents of this
  * field exactly. Additional restrictions on this field can
  * be imposed based on which public key type is encapsulated.
  * See the documentation on publicKey cases below for details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/binary_authorization_attestor#id BinaryAuthorizationAttestor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * pkix_public_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/binary_authorization_attestor#pkix_public_key BinaryAuthorizationAttestor#pkix_public_key}
  */
  readonly pkixPublicKey?: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey;
}

export function binaryAuthorizationAttestorAttestationAuthorityNotePublicKeysToTerraform(struct?: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ascii_armored_pgp_public_key: cdktf.stringToTerraform(struct!.asciiArmoredPgpPublicKey),
    comment: cdktf.stringToTerraform(struct!.comment),
    id: cdktf.stringToTerraform(struct!.id),
    pkix_public_key: binaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyToTerraform(struct!.pkixPublicKey),
  }
}


export function binaryAuthorizationAttestorAttestationAuthorityNotePublicKeysToHclTerraform(struct?: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ascii_armored_pgp_public_key: {
      value: cdktf.stringToHclTerraform(struct!.asciiArmoredPgpPublicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pkix_public_key: {
      value: binaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyToHclTerraform(struct!.pkixPublicKey),
      isBlock: true,
      type: "list",
      storageClassType: "BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asciiArmoredPgpPublicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.asciiArmoredPgpPublicKey = this._asciiArmoredPgpPublicKey;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._pkixPublicKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkixPublicKey = this._pkixPublicKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asciiArmoredPgpPublicKey = undefined;
      this._comment = undefined;
      this._id = undefined;
      this._pkixPublicKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asciiArmoredPgpPublicKey = value.asciiArmoredPgpPublicKey;
      this._comment = value.comment;
      this._id = value.id;
      this._pkixPublicKey.internalValue = value.pkixPublicKey;
    }
  }

  // ascii_armored_pgp_public_key - computed: false, optional: true, required: false
  private _asciiArmoredPgpPublicKey?: string; 
  public get asciiArmoredPgpPublicKey() {
    return this.getStringAttribute('ascii_armored_pgp_public_key');
  }
  public set asciiArmoredPgpPublicKey(value: string) {
    this._asciiArmoredPgpPublicKey = value;
  }
  public resetAsciiArmoredPgpPublicKey() {
    this._asciiArmoredPgpPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asciiArmoredPgpPublicKeyInput() {
    return this._asciiArmoredPgpPublicKey;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // pkix_public_key - computed: false, optional: true, required: false
  private _pkixPublicKey = new BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKeyOutputReference(this, "pkix_public_key");
  public get pkixPublicKey() {
    return this._pkixPublicKey;
  }
  public putPkixPublicKey(value: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysPkixPublicKey) {
    this._pkixPublicKey.internalValue = value;
  }
  public resetPkixPublicKey() {
    this._pkixPublicKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkixPublicKeyInput() {
    return this._pkixPublicKey.internalValue;
  }
}

export class BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList extends cdktf.ComplexList {
  public internalValue? : BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference {
    return new BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BinaryAuthorizationAttestorAttestationAuthorityNote {
  /**
  * The resource name of a ATTESTATION_AUTHORITY Note, created by the
  * user. If the Note is in a different project from the Attestor, it
  * should be specified in the format 'projects/* /notes/*' (or the legacy
  * 'providers/* /notes/*'). This field may not be updated.
  * An attestation by this attestor is stored as a Container Analysis
  * ATTESTATION_AUTHORITY Occurrence that names a container image
  * and that links to this Note.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/binary_authorization_attestor#note_reference BinaryAuthorizationAttestor#note_reference}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly noteReference: string;
  /**
  * public_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/binary_authorization_attestor#public_keys BinaryAuthorizationAttestor#public_keys}
  */
  readonly publicKeys?: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys[] | cdktf.IResolvable;
}

export function binaryAuthorizationAttestorAttestationAuthorityNoteToTerraform(struct?: BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference | BinaryAuthorizationAttestorAttestationAuthorityNote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    note_reference: cdktf.stringToTerraform(struct!.noteReference),
    public_keys: cdktf.listMapper(binaryAuthorizationAttestorAttestationAuthorityNotePublicKeysToTerraform, true)(struct!.publicKeys),
  }
}


export function binaryAuthorizationAttestorAttestationAuthorityNoteToHclTerraform(struct?: BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference | BinaryAuthorizationAttestorAttestationAuthorityNote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    note_reference: {
      value: cdktf.stringToHclTerraform(struct!.noteReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_keys: {
      value: cdktf.listMapperHcl(binaryAuthorizationAttestorAttestationAuthorityNotePublicKeysToHclTerraform, true)(struct!.publicKeys),
      isBlock: true,
      type: "list",
      storageClassType: "BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BinaryAuthorizationAttestorAttestationAuthorityNote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noteReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.noteReference = this._noteReference;
    }
    if (this._publicKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKeys = this._publicKeys?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BinaryAuthorizationAttestorAttestationAuthorityNote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noteReference = undefined;
      this._publicKeys.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noteReference = value.noteReference;
      this._publicKeys.internalValue = value.publicKeys;
    }
  }

  // delegation_service_account_email - computed: true, optional: false, required: false
  public get delegationServiceAccountEmail() {
    return this.getStringAttribute('delegation_service_account_email');
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
  private _publicKeys = new BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeysList(this, "public_keys", false);
  public get publicKeys() {
    return this._publicKeys;
  }
  public putPublicKeys(value: BinaryAuthorizationAttestorAttestationAuthorityNotePublicKeys[] | cdktf.IResolvable) {
    this._publicKeys.internalValue = value;
  }
  public resetPublicKeys() {
    this._publicKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeysInput() {
    return this._publicKeys.internalValue;
  }
}
export interface BinaryAuthorizationAttestorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/binary_authorization_attestor#create BinaryAuthorizationAttestor#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/binary_authorization_attestor#delete BinaryAuthorizationAttestor#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/binary_authorization_attestor#update BinaryAuthorizationAttestor#update}
  */
  readonly update?: string;
}

export function binaryAuthorizationAttestorTimeoutsToTerraform(struct?: BinaryAuthorizationAttestorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function binaryAuthorizationAttestorTimeoutsToHclTerraform(struct?: BinaryAuthorizationAttestorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BinaryAuthorizationAttestorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BinaryAuthorizationAttestorTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: BinaryAuthorizationAttestorTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/binary_authorization_attestor google_binary_authorization_attestor}
*/
export class BinaryAuthorizationAttestor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_binary_authorization_attestor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BinaryAuthorizationAttestor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BinaryAuthorizationAttestor to import
  * @param importFromId The id of the existing BinaryAuthorizationAttestor that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/binary_authorization_attestor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BinaryAuthorizationAttestor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_binary_authorization_attestor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/binary_authorization_attestor google_binary_authorization_attestor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BinaryAuthorizationAttestorConfig
  */
  public constructor(scope: Construct, id: string, config: BinaryAuthorizationAttestorConfig) {
    super(scope, id, {
      terraformResourceType: 'google_binary_authorization_attestor',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.45.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
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
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
  private _attestationAuthorityNote = new BinaryAuthorizationAttestorAttestationAuthorityNoteOutputReference(this, "attestation_authority_note");
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
  private _timeouts = new BinaryAuthorizationAttestorTimeoutsOutputReference(this, "timeouts");
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      attestation_authority_note: binaryAuthorizationAttestorAttestationAuthorityNoteToTerraform(this._attestationAuthorityNote.internalValue),
      timeouts: binaryAuthorizationAttestorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attestation_authority_note: {
        value: binaryAuthorizationAttestorAttestationAuthorityNoteToHclTerraform(this._attestationAuthorityNote.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BinaryAuthorizationAttestorAttestationAuthorityNoteList",
      },
      timeouts: {
        value: binaryAuthorizationAttestorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BinaryAuthorizationAttestorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
