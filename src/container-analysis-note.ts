// https://www.terraform.io/docs/providers/google/r/container_analysis_note.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ContainerAnalysisNoteConfig extends TerraformMetaArguments {
  /** Time of expiration for this note. Leave empty if note does not expire. */
  readonly expirationTime?: string;
  /** A detailed description of the note */
  readonly longDescription?: string;
  /** The name of the note. */
  readonly name: string;
  readonly project?: string;
  /** Names of other notes related to this note. */
  readonly relatedNoteNames?: string[];
  /** A one sentence description of the note. */
  readonly shortDescription?: string;
  /** attestation_authority block */
  readonly attestationAuthority: ContainerAnalysisNoteAttestationAuthority[];
  /** related_url block */
  readonly relatedUrl?: ContainerAnalysisNoteRelatedUrl[];
  /** timeouts block */
  readonly timeouts?: ContainerAnalysisNoteTimeouts;
}
export interface ContainerAnalysisNoteAttestationAuthorityHint {
  /** The human readable name of this Attestation Authority, for
example "qa". */
  readonly humanReadableName: string;
}
export interface ContainerAnalysisNoteAttestationAuthority {
  /** hint block */
  readonly hint: ContainerAnalysisNoteAttestationAuthorityHint[];
}
export interface ContainerAnalysisNoteRelatedUrl {
  /** Label to describe usage of the URL */
  readonly label?: string;
  /** Specific URL associated with the resource. */
  readonly url: string;
}
export interface ContainerAnalysisNoteTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class ContainerAnalysisNote extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ContainerAnalysisNoteConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_analysis_note',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._expirationTime = config.expirationTime;
    this._longDescription = config.longDescription;
    this._name = config.name;
    this._project = config.project;
    this._relatedNoteNames = config.relatedNoteNames;
    this._shortDescription = config.shortDescription;
    this._attestationAuthority = config.attestationAuthority;
    this._relatedUrl = config.relatedUrl;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: true
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // expiration_time - computed: false, optional: true, required: false
  private _expirationTime?: string;
  public get expirationTime() {
    return this._expirationTime;
  }
  public set expirationTime(value: string | undefined) {
    this._expirationTime = value;
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

  // long_description - computed: false, optional: true, required: false
  private _longDescription?: string;
  public get longDescription() {
    return this._longDescription;
  }
  public set longDescription(value: string | undefined) {
    this._longDescription = value;
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

  // related_note_names - computed: false, optional: true, required: false
  private _relatedNoteNames?: string[];
  public get relatedNoteNames() {
    return this._relatedNoteNames;
  }
  public set relatedNoteNames(value: string[] | undefined) {
    this._relatedNoteNames = value;
  }

  // short_description - computed: false, optional: true, required: false
  private _shortDescription?: string;
  public get shortDescription() {
    return this._shortDescription;
  }
  public set shortDescription(value: string | undefined) {
    this._shortDescription = value;
  }

  // update_time - computed: true, optional: false, required: true
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // attestation_authority - computed: false, optional: false, required: true
  private _attestationAuthority: ContainerAnalysisNoteAttestationAuthority[];
  public get attestationAuthority() {
    return this._attestationAuthority;
  }
  public set attestationAuthority(value: ContainerAnalysisNoteAttestationAuthority[]) {
    this._attestationAuthority = value;
  }

  // related_url - computed: false, optional: true, required: false
  private _relatedUrl?: ContainerAnalysisNoteRelatedUrl[];
  public get relatedUrl() {
    return this._relatedUrl;
  }
  public set relatedUrl(value: ContainerAnalysisNoteRelatedUrl[] | undefined) {
    this._relatedUrl = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ContainerAnalysisNoteTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ContainerAnalysisNoteTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      expiration_time: this._expirationTime,
      long_description: this._longDescription,
      name: this._name,
      project: this._project,
      related_note_names: this._relatedNoteNames,
      short_description: this._shortDescription,
      attestation_authority: this._attestationAuthority,
      related_url: this._relatedUrl,
      timeouts: this._timeouts,
    };
  }
}
