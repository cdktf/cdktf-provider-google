// https://www.terraform.io/docs/providers/google/r/container_analysis_note
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContainerAnalysisNoteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time of expiration for this note. Leave empty if note does not expire.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note#expiration_time ContainerAnalysisNote#expiration_time}
  */
  readonly expirationTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note#id ContainerAnalysisNote#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A detailed description of the note
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note#long_description ContainerAnalysisNote#long_description}
  */
  readonly longDescription?: string;
  /**
  * The name of the note.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note#name ContainerAnalysisNote#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note#project ContainerAnalysisNote#project}
  */
  readonly project?: string;
  /**
  * Names of other notes related to this note.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note#related_note_names ContainerAnalysisNote#related_note_names}
  */
  readonly relatedNoteNames?: string[];
  /**
  * A one sentence description of the note.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note#short_description ContainerAnalysisNote#short_description}
  */
  readonly shortDescription?: string;
  /**
  * attestation_authority block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note#attestation_authority ContainerAnalysisNote#attestation_authority}
  */
  readonly attestationAuthority: ContainerAnalysisNoteAttestationAuthority;
  /**
  * related_url block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note#related_url ContainerAnalysisNote#related_url}
  */
  readonly relatedUrl?: ContainerAnalysisNoteRelatedUrl[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note#timeouts ContainerAnalysisNote#timeouts}
  */
  readonly timeouts?: ContainerAnalysisNoteTimeouts;
}
export interface ContainerAnalysisNoteAttestationAuthorityHint {
  /**
  * The human readable name of this Attestation Authority, for
example "qa".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note#human_readable_name ContainerAnalysisNote#human_readable_name}
  */
  readonly humanReadableName: string;
}

export function containerAnalysisNoteAttestationAuthorityHintToTerraform(struct?: ContainerAnalysisNoteAttestationAuthorityHintOutputReference | ContainerAnalysisNoteAttestationAuthorityHint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    human_readable_name: cdktf.stringToTerraform(struct!.humanReadableName),
  }
}

export class ContainerAnalysisNoteAttestationAuthorityHintOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAnalysisNoteAttestationAuthorityHint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._humanReadableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.humanReadableName = this._humanReadableName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAnalysisNoteAttestationAuthorityHint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._humanReadableName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._humanReadableName = value.humanReadableName;
    }
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
    return this._humanReadableName;
  }
}
export interface ContainerAnalysisNoteAttestationAuthority {
  /**
  * hint block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note#hint ContainerAnalysisNote#hint}
  */
  readonly hint: ContainerAnalysisNoteAttestationAuthorityHint;
}

export function containerAnalysisNoteAttestationAuthorityToTerraform(struct?: ContainerAnalysisNoteAttestationAuthorityOutputReference | ContainerAnalysisNoteAttestationAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hint: containerAnalysisNoteAttestationAuthorityHintToTerraform(struct!.hint),
  }
}

export class ContainerAnalysisNoteAttestationAuthorityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAnalysisNoteAttestationAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hint = this._hint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAnalysisNoteAttestationAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hint.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hint.internalValue = value.hint;
    }
  }

  // hint - computed: false, optional: false, required: true
  private _hint = new ContainerAnalysisNoteAttestationAuthorityHintOutputReference(this, "hint");
  public get hint() {
    return this._hint;
  }
  public putHint(value: ContainerAnalysisNoteAttestationAuthorityHint) {
    this._hint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hintInput() {
    return this._hint.internalValue;
  }
}
export interface ContainerAnalysisNoteRelatedUrl {
  /**
  * Label to describe usage of the URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note#label ContainerAnalysisNote#label}
  */
  readonly label?: string;
  /**
  * Specific URL associated with the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note#url ContainerAnalysisNote#url}
  */
  readonly url: string;
}

export function containerAnalysisNoteRelatedUrlToTerraform(struct?: ContainerAnalysisNoteRelatedUrl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class ContainerAnalysisNoteRelatedUrlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ContainerAnalysisNoteRelatedUrl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ContainerAnalysisNoteRelatedUrl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._url = value.url;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class ContainerAnalysisNoteRelatedUrlList extends cdktf.ComplexList {
  public internalValue? : ContainerAnalysisNoteRelatedUrl[] | cdktf.IResolvable

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
  public get(index: number): ContainerAnalysisNoteRelatedUrlOutputReference {
    return new ContainerAnalysisNoteRelatedUrlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ContainerAnalysisNoteTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note#create ContainerAnalysisNote#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note#delete ContainerAnalysisNote#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note#update ContainerAnalysisNote#update}
  */
  readonly update?: string;
}

export function containerAnalysisNoteTimeoutsToTerraform(struct?: ContainerAnalysisNoteTimeoutsOutputReference | ContainerAnalysisNoteTimeouts | cdktf.IResolvable): any {
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

export class ContainerAnalysisNoteTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ContainerAnalysisNoteTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ContainerAnalysisNoteTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note google_container_analysis_note}
*/
export class ContainerAnalysisNote extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_container_analysis_note";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/container_analysis_note google_container_analysis_note} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContainerAnalysisNoteConfig
  */
  public constructor(scope: Construct, id: string, config: ContainerAnalysisNoteConfig) {
    super(scope, id, {
      terraformResourceType: 'google_container_analysis_note',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._expirationTime = config.expirationTime;
    this._id = config.id;
    this._longDescription = config.longDescription;
    this._name = config.name;
    this._project = config.project;
    this._relatedNoteNames = config.relatedNoteNames;
    this._shortDescription = config.shortDescription;
    this._attestationAuthority.internalValue = config.attestationAuthority;
    this._relatedUrl.internalValue = config.relatedUrl;
    this._timeouts.internalValue = config.timeouts;
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
  public set expirationTime(value: string) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
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

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // long_description - computed: false, optional: true, required: false
  private _longDescription?: string; 
  public get longDescription() {
    return this.getStringAttribute('long_description');
  }
  public set longDescription(value: string) {
    this._longDescription = value;
  }
  public resetLongDescription() {
    this._longDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longDescriptionInput() {
    return this._longDescription;
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

  // related_note_names - computed: false, optional: true, required: false
  private _relatedNoteNames?: string[]; 
  public get relatedNoteNames() {
    return cdktf.Fn.tolist(this.getListAttribute('related_note_names'));
  }
  public set relatedNoteNames(value: string[]) {
    this._relatedNoteNames = value;
  }
  public resetRelatedNoteNames() {
    this._relatedNoteNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedNoteNamesInput() {
    return this._relatedNoteNames;
  }

  // short_description - computed: false, optional: true, required: false
  private _shortDescription?: string; 
  public get shortDescription() {
    return this.getStringAttribute('short_description');
  }
  public set shortDescription(value: string) {
    this._shortDescription = value;
  }
  public resetShortDescription() {
    this._shortDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortDescriptionInput() {
    return this._shortDescription;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // attestation_authority - computed: false, optional: false, required: true
  private _attestationAuthority = new ContainerAnalysisNoteAttestationAuthorityOutputReference(this, "attestation_authority");
  public get attestationAuthority() {
    return this._attestationAuthority;
  }
  public putAttestationAuthority(value: ContainerAnalysisNoteAttestationAuthority) {
    this._attestationAuthority.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationAuthorityInput() {
    return this._attestationAuthority.internalValue;
  }

  // related_url - computed: false, optional: true, required: false
  private _relatedUrl = new ContainerAnalysisNoteRelatedUrlList(this, "related_url", true);
  public get relatedUrl() {
    return this._relatedUrl;
  }
  public putRelatedUrl(value: ContainerAnalysisNoteRelatedUrl[] | cdktf.IResolvable) {
    this._relatedUrl.internalValue = value;
  }
  public resetRelatedUrl() {
    this._relatedUrl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedUrlInput() {
    return this._relatedUrl.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ContainerAnalysisNoteTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ContainerAnalysisNoteTimeouts) {
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
      expiration_time: cdktf.stringToTerraform(this._expirationTime),
      id: cdktf.stringToTerraform(this._id),
      long_description: cdktf.stringToTerraform(this._longDescription),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      related_note_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relatedNoteNames),
      short_description: cdktf.stringToTerraform(this._shortDescription),
      attestation_authority: containerAnalysisNoteAttestationAuthorityToTerraform(this._attestationAuthority.internalValue),
      related_url: cdktf.listMapper(containerAnalysisNoteRelatedUrlToTerraform, true)(this._relatedUrl.internalValue),
      timeouts: containerAnalysisNoteTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
