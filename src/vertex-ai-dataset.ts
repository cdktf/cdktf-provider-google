// https://www.terraform.io/docs/providers/google/r/vertex_ai_dataset.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VertexAiDatasetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The user-defined name of the Dataset. The name can be up to 128 characters long and can be consist of any UTF-8 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_dataset.html#display_name VertexAiDataset#display_name}
  */
  readonly displayName: string;
  /**
  * A set of key/value label pairs to assign to this Workflow.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_dataset.html#labels VertexAiDataset#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Points to a YAML file stored on Google Cloud Storage describing additional information about the Dataset. The schema is defined as an OpenAPI 3.0.2 Schema Object. The schema files that can be used here are found in gs://google-cloud-aiplatform/schema/dataset/metadata/.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_dataset.html#metadata_schema_uri VertexAiDataset#metadata_schema_uri}
  */
  readonly metadataSchemaUri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_dataset.html#project VertexAiDataset#project}
  */
  readonly project?: string;
  /**
  * The region of the dataset. eg us-central1
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_dataset.html#region VertexAiDataset#region}
  */
  readonly region?: string;
  /**
  * encryption_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_dataset.html#encryption_spec VertexAiDataset#encryption_spec}
  */
  readonly encryptionSpec?: VertexAiDatasetEncryptionSpec[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_dataset.html#timeouts VertexAiDataset#timeouts}
  */
  readonly timeouts?: VertexAiDatasetTimeouts;
}
export interface VertexAiDatasetEncryptionSpec {
  /**
  * Required. The Cloud KMS resource identifier of the customer managed encryption key used to protect a resource. 
Has the form: projects/my-project/locations/my-region/keyRings/my-kr/cryptoKeys/my-key. The key needs to be in the same region as where the resource is created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_dataset.html#kms_key_name VertexAiDataset#kms_key_name}
  */
  readonly kmsKeyName?: string;
}

function vertexAiDatasetEncryptionSpecToTerraform(struct?: VertexAiDatasetEncryptionSpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}

export interface VertexAiDatasetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_dataset.html#create VertexAiDataset#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_dataset.html#delete VertexAiDataset#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_dataset.html#update VertexAiDataset#update}
  */
  readonly update?: string;
}

function vertexAiDatasetTimeoutsToTerraform(struct?: VertexAiDatasetTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_dataset.html google_vertex_ai_dataset}
*/
export class VertexAiDataset extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/vertex_ai_dataset.html google_vertex_ai_dataset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VertexAiDatasetConfig
  */
  public constructor(scope: Construct, id: string, config: VertexAiDatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_vertex_ai_dataset',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._labels = config.labels;
    this._metadataSchemaUri = config.metadataSchemaUri;
    this._project = config.project;
    this._region = config.region;
    this._encryptionSpec = config.encryptionSpec;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }
  public get labels(): { [key: string]: string } {
    return this.interpolationForAttribute('labels') as any; // Getting the computed value is not yet implemented
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
  }

  // metadata_schema_uri - computed: false, optional: false, required: true
  private _metadataSchemaUri: string;
  public get metadataSchemaUri() {
    return this.getStringAttribute('metadata_schema_uri');
  }
  public set metadataSchemaUri(value: string) {
    this._metadataSchemaUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataSchemaUriInput() {
    return this._metadataSchemaUri
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // encryption_spec - computed: false, optional: true, required: false
  private _encryptionSpec?: VertexAiDatasetEncryptionSpec[];
  public get encryptionSpec() {
    return this.interpolationForAttribute('encryption_spec') as any;
  }
  public set encryptionSpec(value: VertexAiDatasetEncryptionSpec[] ) {
    this._encryptionSpec = value;
  }
  public resetEncryptionSpec() {
    this._encryptionSpec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSpecInput() {
    return this._encryptionSpec
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: VertexAiDatasetTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: VertexAiDatasetTimeouts ) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      metadata_schema_uri: cdktf.stringToTerraform(this._metadataSchemaUri),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      encryption_spec: cdktf.listMapper(vertexAiDatasetEncryptionSpecToTerraform)(this._encryptionSpec),
      timeouts: vertexAiDatasetTimeoutsToTerraform(this._timeouts),
    };
  }
}
