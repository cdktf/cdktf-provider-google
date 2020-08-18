// https://www.terraform.io/docs/providers/google/r/container_analysis_occurrence.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ContainerAnalysisOccurrenceConfig extends TerraformMetaArguments {
  /** The analysis note associated with this occurrence, in the form of
projects/[PROJECT]/notes/[NOTE_ID]. This field can be used as a
filter in list requests. */
  readonly noteName: string;
  readonly project?: string;
  /** A description of actions that can be taken to remedy the note. */
  readonly remediation?: string;
  /** Required. Immutable. A URI that represents the resource for which
the occurrence applies. For example,
https://gcr.io/project/image@sha256:123abc for a Docker image. */
  readonly resourceUri: string;
  /** attestation block */
  readonly attestation: ContainerAnalysisOccurrenceAttestation[];
  /** timeouts block */
  readonly timeouts?: ContainerAnalysisOccurrenceTimeouts;
}
export interface ContainerAnalysisOccurrenceAttestationSignatures {
  /** The identifier for the public key that verifies this
signature. MUST be an RFC3986 conformant
URI. * When possible, the key id should be an
immutable reference, such as a cryptographic digest.
Examples of valid values:

* OpenPGP V4 public key fingerprint. See https://www.iana.org/assignments/uri-schemes/prov/openpgp4fpr
  for more details on this scheme.
    * 'openpgp4fpr:74FAF3B861BDA0870C7B6DEF607E48D2A663AEEA'
* RFC6920 digest-named SubjectPublicKeyInfo (digest of the DER serialization):
    * "ni:///sha-256;cD9o9Cq6LG3jD0iKXqEi_vdjJGecm_iXkbqVoScViaU" */
  readonly publicKeyId: string;
  /** The content of the signature, an opaque bytestring.
The payload that this signature verifies MUST be
unambiguously provided with the Signature during
verification. A wrapper message might provide the
payload explicitly. Alternatively, a message might
have a canonical serialization that can always be
unambiguously computed to derive the payload. */
  readonly signature?: string;
}
export interface ContainerAnalysisOccurrenceAttestation {
  /** The serialized payload that is verified by one or
more signatures. A base64-encoded string. */
  readonly serializedPayload: string;
  /** signatures block */
  readonly signatures: ContainerAnalysisOccurrenceAttestationSignatures[];
}
export interface ContainerAnalysisOccurrenceTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ContainerAnalysisOccurrence extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ContainerAnalysisOccurrenceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_analysis_occurrence',
      terraformGeneratorMetadata: {
        providerName: 'google'
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
    this._attestation = config.attestation;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // kind - computed: true, optional: false, required: true
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // note_name - computed: false, optional: false, required: true
  private _noteName: string;
  public get noteName() {
    return this._noteName;
  }
  public set noteName(value: string) {
    this._noteName = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // remediation - computed: false, optional: true, required: false
  private _remediation?: string;
  public get remediation() {
    return this._remediation;
  }
  public set remediation(value: string | undefined) {
    this._remediation = value;
  }

  // resource_uri - computed: false, optional: false, required: true
  private _resourceUri: string;
  public get resourceUri() {
    return this._resourceUri;
  }
  public set resourceUri(value: string) {
    this._resourceUri = value;
  }

  // update_time - computed: true, optional: false, required: true
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // attestation - computed: false, optional: false, required: true
  private _attestation: ContainerAnalysisOccurrenceAttestation[];
  public get attestation() {
    return this._attestation;
  }
  public set attestation(value: ContainerAnalysisOccurrenceAttestation[]) {
    this._attestation = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ContainerAnalysisOccurrenceTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ContainerAnalysisOccurrenceTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      note_name: this._noteName,
      project: this._project,
      remediation: this._remediation,
      resource_uri: this._resourceUri,
      attestation: this._attestation,
      timeouts: this._timeouts,
    };
  }
}
