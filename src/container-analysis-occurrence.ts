// https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerAnalysisOccurrenceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The analysis note associated with this occurrence, in the form of
projects/[PROJECT]/notes/[NOTE_ID]. This field can be used as a
filter in list requests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#note_name ContainerAnalysisOccurrence#note_name}
  */
  readonly noteName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#project ContainerAnalysisOccurrence#project}
  */
  readonly project?: string;
  /**
  * A description of actions that can be taken to remedy the note.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#remediation ContainerAnalysisOccurrence#remediation}
  */
  readonly remediation?: string;
  /**
  * Required. Immutable. A URI that represents the resource for which
the occurrence applies. For example,
https://gcr.io/project/image@sha256:123abc for a Docker image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#resource_uri ContainerAnalysisOccurrence#resource_uri}
  */
  readonly resourceUri: string;
  /**
  * attestation block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#attestation ContainerAnalysisOccurrence#attestation}
  */
  readonly attestation: ContainerAnalysisOccurrenceAttestation;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#timeouts ContainerAnalysisOccurrence#timeouts}
  */
  readonly timeouts?: ContainerAnalysisOccurrenceTimeouts;
}
export interface ContainerAnalysisOccurrenceAttestationSignatures {
  /**
  * The identifier for the public key that verifies this
signature. MUST be an RFC3986 conformant
URI. * When possible, the key id should be an
immutable reference, such as a cryptographic digest.
Examples of valid values:

* OpenPGP V4 public key fingerprint. See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr
  for more details on this scheme.
    * 'openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA'
* RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization):
    * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#public_key_id ContainerAnalysisOccurrence#public_key_id}
  */
  readonly publicKeyId: string;
  /**
  * The content of the signature, an opaque bytestring.
The payload that this signature verifies MUST be
unambiguously provided with the Signature during
verification. A wrapper message might provide the
payload explicitly. Alternatively, a message might
have a canonical serialization that can always be
unambiguously computed to derive the payload.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#signature ContainerAnalysisOccurrence#signature}
  */
  readonly signature?: string;
}

export function containerAnalysisOccurrenceAttestationSignaturesToTerraform(struct?: ContainerAnalysisOccurrenceAttestationSignatures | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_key_id: cdktf.stringToTerraform(struct!.publicKeyId),
    signature: cdktf.stringToTerraform(struct!.signature),
  }
}

export interface ContainerAnalysisOccurrenceAttestation {
  /**
  * The serialized payload that is verified by one or
more signatures. A base64-encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#serialized_payload ContainerAnalysisOccurrence#serialized_payload}
  */
  readonly serializedPayload: string;
  /**
  * signatures block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#signatures ContainerAnalysisOccurrence#signatures}
  */
  readonly signatures: ContainerAnalysisOccurrenceAttestationSignatures[] | cdktf.IResolvable;
}

export function containerAnalysisOccurrenceAttestationToTerraform(struct?: ContainerAnalysisOccurrenceAttestationOutputReference | ContainerAnalysisOccurrenceAttestation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    serialized_payload: cdktf.stringToTerraform(struct!.serializedPayload),
    signatures: cdktf.listMapper(containerAnalysisOccurrenceAttestationSignaturesToTerraform)(struct!.signatures),
  }
}

export class ContainerAnalysisOccurrenceAttestationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAnalysisOccurrenceAttestation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serializedPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializedPayload = this._serializedPayload;
    }
    if (this._signatures !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatures = this._signatures;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAnalysisOccurrenceAttestation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serializedPayload = undefined;
      this._signatures = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serializedPayload = value.serializedPayload;
      this._signatures = value.signatures;
    }
  }

  // serialized_payload - computed: false, optional: false, required: true
  private _serializedPayload?: string; 
  public get serializedPayload() {
    return this.getStringAttribute('serialized_payload');
  }
  public set serializedPayload(value: string) {
    this._serializedPayload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serializedPayloadInput() {
    return this._serializedPayload;
  }

  // signatures - computed: false, optional: false, required: true
  private _signatures?: ContainerAnalysisOccurrenceAttestationSignatures[] | cdktf.IResolvable; 
  public get signatures() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('signatures')));
  }
  public set signatures(value: ContainerAnalysisOccurrenceAttestationSignatures[] | cdktf.IResolvable) {
    this._signatures = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signaturesInput() {
    return this._signatures;
  }
}
export interface ContainerAnalysisOccurrenceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#create ContainerAnalysisOccurrence#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#delete ContainerAnalysisOccurrence#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence#update ContainerAnalysisOccurrence#update}
  */
  readonly update?: string;
}

export function containerAnalysisOccurrenceTimeoutsToTerraform(struct?: ContainerAnalysisOccurrenceTimeoutsOutputReference | ContainerAnalysisOccurrenceTimeouts | cdktf.IResolvable): any {
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

export class ContainerAnalysisOccurrenceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAnalysisOccurrenceTimeouts | undefined {
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

  public set internalValue(value: ContainerAnalysisOccurrenceTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence google_container_analysis_occurrence}
*/
export class ContainerAnalysisOccurrence extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_container_analysis_occurrence";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence google_container_analysis_occurrence} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerAnalysisOccurrenceConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerAnalysisOccurrenceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_analysis_occurrence',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '3.90.1',
        providerVersionConstraint: '~> 3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._noteName = config.noteName;
    this._project = config.project;
    this._remediation = config.remediation;
    this._resourceUri = config.resourceUri;
    this._attestation.internalValue = config.attestation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // note_name - computed: false, optional: false, required: true
  private _noteName?: string; 
  public get noteName() {
    return this.getStringAttribute('note_name');
  }
  public set noteName(value: string) {
    this._noteName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get noteNameInput() {
    return this._noteName;
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

  // remediation - computed: false, optional: true, required: false
  private _remediation?: string; 
  public get remediation() {
    return this.getStringAttribute('remediation');
  }
  public set remediation(value: string) {
    this._remediation = value;
  }
  public resetRemediation() {
    this._remediation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationInput() {
    return this._remediation;
  }

  // resource_uri - computed: false, optional: false, required: true
  private _resourceUri?: string; 
  public get resourceUri() {
    return this.getStringAttribute('resource_uri');
  }
  public set resourceUri(value: string) {
    this._resourceUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUriInput() {
    return this._resourceUri;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // attestation - computed: false, optional: false, required: true
  private _attestation = new ContainerAnalysisOccurrenceAttestationOutputReference(this, "attestation");
  public get attestation() {
    return this._attestation;
  }
  public putAttestation(value: ContainerAnalysisOccurrenceAttestation) {
    this._attestation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationInput() {
    return this._attestation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerAnalysisOccurrenceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerAnalysisOccurrenceTimeouts) {
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
      note_name: cdktf.stringToTerraform(this._noteName),
      project: cdktf.stringToTerraform(this._project),
      remediation: cdktf.stringToTerraform(this._remediation),
      resource_uri: cdktf.stringToTerraform(this._resourceUri),
      attestation: containerAnalysisOccurrenceAttestationToTerraform(this._attestation.internalValue),
      timeouts: containerAnalysisOccurrenceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
