// https://www.terraform.io/docs/providers/google/r/container_analysis_note.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerAnalysisNoteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time of expiration for this note. Leave empty if note does not expire.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note.html#expiration_time ContainerAnalysisNote#expiration_time}
  */
  readonly expirationTime?: string;
  /**
  * A detailed description of the note
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note.html#long_description ContainerAnalysisNote#long_description}
  */
  readonly longDescription?: string;
  /**
  * The name of the note.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note.html#name ContainerAnalysisNote#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note.html#project ContainerAnalysisNote#project}
  */
  readonly project?: string;
  /**
  * Names of other notes related to this note.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note.html#related_note_names ContainerAnalysisNote#related_note_names}
  */
  readonly relatedNoteNames?: string[];
  /**
  * A one sentence description of the note.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note.html#short_description ContainerAnalysisNote#short_description}
  */
  readonly shortDescription?: string;
  /**
  * attestation_authority block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note.html#attestation_authority ContainerAnalysisNote#attestation_authority}
  */
  readonly attestationAuthority: ContainerAnalysisNoteAttestationAuthority;
  /**
  * related_url block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note.html#related_url ContainerAnalysisNote#related_url}
  */
  readonly relatedUrl?: ContainerAnalysisNoteRelatedUrl[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note.html#timeouts ContainerAnalysisNote#timeouts}
  */
  readonly timeouts?: ContainerAnalysisNoteTimeouts;
}
export interface ContainerAnalysisNoteAttestationAuthorityHint {
  /**
  * The human readable name of this Attestation Authority, for
example "qa".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note.html#human_readable_name ContainerAnalysisNote#human_readable_name}
  */
  readonly humanReadableName: string;
}

function containerAnalysisNoteAttestationAuthorityHintToTerraform(struct?: ContainerAnalysisNoteAttestationAuthorityHintOutputReference | ContainerAnalysisNoteAttestationAuthorityHint): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    human_readable_name: cdktf.stringToTerraform(struct!.humanReadableName),
  }
}

export class ContainerAnalysisNoteAttestationAuthorityHintOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // human_readable_name - computed: false, optional: false, required: true
  private _humanReadableName?: string; 
  public get humanReadableName() {
    return this.getStringAttribute('human_readable_name');
  }
  public set humanReadableName(value: string) {
    this._humanReadableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get humanReadableNameInput() {
    return this._humanReadableName
  }
}
export interface ContainerAnalysisNoteAttestationAuthority {
  /**
  * hint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note.html#hint ContainerAnalysisNote#hint}
  */
  readonly hint: ContainerAnalysisNoteAttestationAuthorityHint;
}

function containerAnalysisNoteAttestationAuthorityToTerraform(struct?: ContainerAnalysisNoteAttestationAuthorityOutputReference | ContainerAnalysisNoteAttestationAuthority): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hint: containerAnalysisNoteAttestationAuthorityHintToTerraform(struct!.hint),
  }
}

export class ContainerAnalysisNoteAttestationAuthorityOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // hint - computed: false, optional: false, required: true
  private _hint?: ContainerAnalysisNoteAttestationAuthorityHint; 
  private __hintOutput = new ContainerAnalysisNoteAttestationAuthorityHintOutputReference(this as any, "hint", true);
  public get hint() {
    return this.__hintOutput;
  }
  public putHint(value: ContainerAnalysisNoteAttestationAuthorityHint) {
    this._hint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hintInput() {
    return this._hint
  }
}
export interface ContainerAnalysisNoteRelatedUrl {
  /**
  * Label to describe usage of the URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note.html#label ContainerAnalysisNote#label}
  */
  readonly label?: string;
  /**
  * Specific URL associated with the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note.html#url ContainerAnalysisNote#url}
  */
  readonly url: string;
}

function containerAnalysisNoteRelatedUrlToTerraform(struct?: ContainerAnalysisNoteRelatedUrl): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export interface ContainerAnalysisNoteTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note.html#create ContainerAnalysisNote#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note.html#delete ContainerAnalysisNote#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note.html#update ContainerAnalysisNote#update}
  */
  readonly update?: string;
}

function containerAnalysisNoteTimeoutsToTerraform(struct?: ContainerAnalysisNoteTimeoutsOutputReference | ContainerAnalysisNoteTimeouts): any {
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

export class ContainerAnalysisNoteTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note.html google_container_analysis_note}
*/
export class ContainerAnalysisNote extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_container_analysis_note";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note.html google_container_analysis_note} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerAnalysisNoteConfig
  */
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
  private _expirationTime?: string | undefined; 
  public get expirationTime() {
    return this.getStringAttribute('expiration_time');
  }
  public set expirationTime(value: string | undefined) {
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
  private _longDescription?: string | undefined; 
  public get longDescription() {
    return this.getStringAttribute('long_description');
  }
  public set longDescription(value: string | undefined) {
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

  // related_note_names - computed: false, optional: true, required: false
  private _relatedNoteNames?: string[] | undefined; 
  public get relatedNoteNames() {
    return this.getListAttribute('related_note_names');
  }
  public set relatedNoteNames(value: string[] | undefined) {
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
  private _shortDescription?: string | undefined; 
  public get shortDescription() {
    return this.getStringAttribute('short_description');
  }
  public set shortDescription(value: string | undefined) {
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
  private _attestationAuthority?: ContainerAnalysisNoteAttestationAuthority; 
  private __attestationAuthorityOutput = new ContainerAnalysisNoteAttestationAuthorityOutputReference(this as any, "attestation_authority", true);
  public get attestationAuthority() {
    return this.__attestationAuthorityOutput;
  }
  public putAttestationAuthority(value: ContainerAnalysisNoteAttestationAuthority) {
    this._attestationAuthority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationAuthorityInput() {
    return this._attestationAuthority
  }

  // related_url - computed: false, optional: true, required: false
  private _relatedUrl?: ContainerAnalysisNoteRelatedUrl[] | undefined; 
  public get relatedUrl() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('related_url') as any;
  }
  public set relatedUrl(value: ContainerAnalysisNoteRelatedUrl[] | undefined) {
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
  private _timeouts?: ContainerAnalysisNoteTimeouts | undefined; 
  private __timeoutsOutput = new ContainerAnalysisNoteTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ContainerAnalysisNoteTimeouts | undefined) {
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
      attestation_authority: containerAnalysisNoteAttestationAuthorityToTerraform(this._attestationAuthority),
      related_url: cdktf.listMapper(containerAnalysisNoteRelatedUrlToTerraform)(this._relatedUrl),
      timeouts: containerAnalysisNoteTimeoutsToTerraform(this._timeouts),
    };
  }
}
