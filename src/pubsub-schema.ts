// https://www.terraform.io/docs/providers/google/r/pubsub_schema.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PubsubSchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * The definition of the schema.
This should contain a string representing the full definition of the schema
that is a valid schema definition of the type specified in type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_schema.html#definition PubsubSchema#definition}
  */
  readonly definition?: string;
  /**
  * The ID to use for the schema, which will become the final component of the schema's resource name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_schema.html#name PubsubSchema#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_schema.html#project PubsubSchema#project}
  */
  readonly project?: string;
  /**
  * The type of the schema definition Default value: "TYPE_UNSPECIFIED" Possible values: ["TYPE_UNSPECIFIED", "PROTOCOL_BUFFER", "AVRO"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_schema.html#type PubsubSchema#type}
  */
  readonly type?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_schema.html#timeouts PubsubSchema#timeouts}
  */
  readonly timeouts?: PubsubSchemaTimeouts;
}
export interface PubsubSchemaTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_schema.html#create PubsubSchema#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_schema.html#delete PubsubSchema#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/pubsub_schema.html#update PubsubSchema#update}
  */
  readonly update?: string;
}

function pubsubSchemaTimeoutsToTerraform(struct?: PubsubSchemaTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/pubsub_schema.html google_pubsub_schema}
*/
export class PubsubSchema extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_pubsub_schema";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/pubsub_schema.html google_pubsub_schema} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PubsubSchemaConfig
  */
  public constructor(scope: Construct, id: string, config: PubsubSchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'google_pubsub_schema',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._definition = config.definition;
    this._name = config.name;
    this._project = config.project;
    this._type = config.type;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // definition - computed: false, optional: true, required: false
  private _definition?: string;
  public get definition() {
    return this.getStringAttribute('definition');
  }
  public set definition(value: string ) {
    this._definition = value;
  }
  public resetDefinition() {
    this._definition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionInput() {
    return this._definition
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string ) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PubsubSchemaTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PubsubSchemaTimeouts ) {
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
      definition: cdktf.stringToTerraform(this._definition),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      type: cdktf.stringToTerraform(this._type),
      timeouts: pubsubSchemaTimeoutsToTerraform(this._timeouts),
    };
  }
}
