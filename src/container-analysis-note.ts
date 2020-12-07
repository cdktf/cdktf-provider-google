// https://www.terraform.io/docs/providers/google/r/container_analysis_note.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerAnalysisNoteConfig extends cdktf.TerraformMetaArguments {
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

function containerAnalysisNoteAttestationAuthorityHintToTerraform(struct?: ContainerAnalysisNoteAttestationAuthorityHint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    human_readable_name: cdktf.stringToTerraform(struct!.humanReadableName),
  }
}

export interface ContainerAnalysisNoteAttestationAuthority {
  /** hint block */
  readonly hint: ContainerAnalysisNoteAttestationAuthorityHint[];
}

function containerAnalysisNoteAttestationAuthorityToTerraform(struct?: ContainerAnalysisNoteAttestationAuthority): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    hint: cdktf.listMapper(containerAnalysisNoteAttestationAuthorityHintToTerraform)(struct!.hint),
  }
}

export interface ContainerAnalysisNoteRelatedUrl {
  /** Label to describe usage of the URL */
  readonly label?: string;
  /** Specific URL associated with the resource. */
  readonly url: string;
}

function containerAnalysisNoteRelatedUrlToTerraform(struct?: ContainerAnalysisNoteRelatedUrl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface ContainerAnalysisNoteTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function containerAnalysisNoteTimeoutsToTerraform(struct?: ContainerAnalysisNoteTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class ContainerAnalysisNote extends cdktf.TerraformResource {

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

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // expiration_time - computed: false, optional: true, required: false
  private _expirationTime?: string;
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }
  public set expirationTime(value: string ) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // long_description - computed: false, optional: true, required: false
  private _longDescription?: string;
  public get longDescription() {
    return this.getStringAttribute('long_description');
  }
  public set longDescription(value: string ) {
    this._longDescription = value;
  }
  public resetLongDescription() {
    this._longDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longDescriptionInput() {
    return this._longDescription
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

  // related_note_names - computed: false, optional: true, required: false
  private _relatedNoteNames?: string[];
  public get relatedNoteNames() {
    return this.getListAttribute('related_note_names');
  }
  public set relatedNoteNames(value: string[] ) {
    this._relatedNoteNames = value;
  }
  public resetRelatedNoteNames() {
    this._relatedNoteNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedNoteNamesInput() {
    return this._relatedNoteNames
  }

  // short_description - computed: false, optional: true, required: false
  private _shortDescription?: string;
  public get shortDescription() {
    return this.getStringAttribute('short_description');
  }
  public set shortDescription(value: string ) {
    this._shortDescription = value;
  }
  public resetShortDescription() {
    this._shortDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortDescriptionInput() {
    return this._shortDescription
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // attestation_authority - computed: false, optional: false, required: true
  private _attestationAuthority: ContainerAnalysisNoteAttestationAuthority[];
  public get attestationAuthority() {
    return this.interpolationForAttribute('attestation_authority') as any;
  }
  public set attestationAuthority(value: ContainerAnalysisNoteAttestationAuthority[]) {
    this._attestationAuthority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationAuthorityInput() {
    return this._attestationAuthority
  }

  // related_url - computed: false, optional: true, required: false
  private _relatedUrl?: ContainerAnalysisNoteRelatedUrl[];
  public get relatedUrl() {
    return this.interpolationForAttribute('related_url') as any;
  }
  public set relatedUrl(value: ContainerAnalysisNoteRelatedUrl[] ) {
    this._relatedUrl = value;
  }
  public resetRelatedUrl() {
    this._relatedUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedUrlInput() {
    return this._relatedUrl
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ContainerAnalysisNoteTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ContainerAnalysisNoteTimeouts ) {
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
      expiration_time: cdktf.stringToTerraform(this._expirationTime),
      long_description: cdktf.stringToTerraform(this._longDescription),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      related_note_names: cdktf.listMapper(cdktf.stringToTerraform)(this._relatedNoteNames),
      short_description: cdktf.stringToTerraform(this._shortDescription),
      attestation_authority: cdktf.listMapper(containerAnalysisNoteAttestationAuthorityToTerraform)(this._attestationAuthority),
      related_url: cdktf.listMapper(containerAnalysisNoteRelatedUrlToTerraform)(this._relatedUrl),
      timeouts: containerAnalysisNoteTimeoutsToTerraform(this._timeouts),
    };
  }
}
